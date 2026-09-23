#!/usr/bin/env python3
"""Two-pass Jev comment preselection; evidence stays in a private local dossier."""
import argparse
from collections import Counter
import json
import math
from pathlib import Path
import sys
import time

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT.parent / "jev-operar/scripts"))
import jev_client as jev


def validate_policy(policy):
    names = {"specificity", "tension", "stakes", "desired_future", "temporal_bridge", "voice"}
    weights = policy.get("weights", {})
    if (set(weights) != names or not all(jev.finite(v, 0, 1) for v in weights.values())
            or abs(sum(weights.values()) - 1) > 1e-9):
        raise jev.JevError("Policy weights must cover six dimensions and sum to one")
    for name, low, high in [("yes", 0, 1), ("review", 0, 1), ("min_index", 0, 100),
                            ("min_core_score", 0, 3), ("min_core_confidence", 0, 1)]:
        if not jev.finite(policy.get(name), low, high):
            raise jev.JevError("Policy threshold outside range")
    if policy["review"] > policy["yes"] or set(policy.get("core_dimensions", [])) != {"specificity", "tension", "stakes"}:
        raise jev.JevError("Invalid policy gate")


def validate_contract(triage, depth):
    jev.validate_questions(triage)
    jev.validate_questions(depth)
    if set(triage) != {"relevant", "lived", "needs_context", "exposure_review"} or any(q["type"] != "noul" for q in triage.values()):
        raise jev.JevError("Triage keys must match selector contract")
    score_names = {"specificity", "tension", "stakes", "desired_future", "temporal_bridge", "voice"}
    if set(depth) != score_names | {"core", "agency"}:
        raise jev.JevError("Depth keys must match selector contract")
    if any(depth[name]["type"] != "score" or len(depth[name]["criteria"]) != 4 for name in score_names):
        raise jev.JevError("Depth scoring requires four ordered levels")
    if any(depth[name]["type"] != "choice" for name in ("core", "agency")):
        raise jev.JevError("Core and agency must be choice questions")


def gate(answers, policy):
    if answers["needs_context"]["noul"] >= policy["review"]:
        return "review_context"
    if answers["exposure_review"]["noul"] >= policy["review"]:
        return "review_exposure"
    values = [answers[key]["noul"] for key in ("relevant", "lived")]
    if min(values) >= policy["yes"]:
        return "depth"
    if min(values) < policy["review"]:
        return "exclude_low_signal"
    return "review_uncertain"


def depth_decision(answers, policy):
    index = sum(policy["weights"][name] * answers[name]["score"] / 3 for name in policy["weights"]) * 100
    if any(answers[name]["confidence"] < policy["min_core_confidence"] for name in policy["core_dimensions"]):
        return "review_confidence", round(index, 2)
    if index < policy["min_index"] or any(answers[name]["score"] < policy["min_core_score"] for name in policy["core_dimensions"]):
        return "not_shortlisted", round(index, 2)
    return "candidate_requires_editorial_read", round(index, 2)


def execute(args):
    started = time.monotonic()
    records = jev.read_rows(args.corpus)
    jev.validate_records(records)
    triage, depth, policy = (jev.read_json(path) for path in (args.triage, args.depth, args.policy))
    validate_contract(triage, depth)
    validate_policy(policy)
    # Preserve every record as evidence; remove exact duplicate texts only from API work.
    unique, duplicates, seen = [], {}, {}
    for record in records:
        normalized = " ".join(record["comment"].casefold().split())
        signature = jev.digest({"comment": normalized, "context": record.get("context", "")})
        if signature in seen:
            duplicates[record["id"]] = seen[signature]
        else:
            seen[signature] = record["id"]
            unique.append(record)
    fingerprint = jev.digest({"records": records, "triage": triage, "depth": depth, "policy": policy,
                             "model": jev.MODEL, "provider": jev.PROVIDER, "endpoint": jev.ENDPOINT})
    plan = {"mode": "dry-run", "received": len(records), "unique": len(unique), "exact_duplicates": len(duplicates),
            "max_requests_both_passes": 2 * len(unique), "model": jev.MODEL, "policy_status": policy.get("status"),
            "fingerprint": fingerprint, "provider": jev.PROVIDER, "endpoint": jev.ENDPOINT}
    if not args.execute:
        return plan
    output = args.output
    if output.exists():
        if output.is_symlink() or not args.resume or jev.read_json(output / "manifest.json").get("fingerprint") != fingerprint:
            raise jev.JevError("Selection output exists; resume needs identical inputs")
    output.mkdir(parents=True, exist_ok=True, mode=0o700)
    if not (output / "manifest.json").exists():
        jev.private_write(output / "manifest.json", {**plan, "created_at_unix": time.time()})
    for filename, data in [("triage-questions.json", triage), ("depth-questions.json", depth), ("policy.json", policy)]:
        jev.private_write(output / filename, data)
    credential = getattr(args, "credential", None)
    first = jev.run(unique, triage, output / "triage", execute=True, resume=args.resume,
                    max_requests=args.max_requests, credential=credential)
    triaged = {row["id"]: row for row in jev.read_rows(output / "triage/answers.jsonl")}
    decisions = {record["id"]: gate(triaged[record["id"]]["answers"], policy) for record in unique}
    eligible = [record for record in unique if decisions[record["id"]] == "depth"]
    used_requests = first["requests"] - first["resumed_batches"]
    remaining_budget = args.max_requests - used_requests
    if eligible and remaining_budget <= 0:
        raise jev.JevError("Triage complete; depth pending at session request budget. Resume with more budget")
    second = None
    detailed = {}
    if eligible:
        second = jev.run(eligible, depth, output / "depth", execute=True, resume=args.resume,
                         max_requests=remaining_budget, credential=credential)
        detailed = {row["id"]: row for row in jev.read_rows(output / "depth/answers.jsonl")}
    cards = []
    for record in unique:
        disposition, index = decisions[record["id"]], None
        detail_answers = detailed.get(record["id"], {}).get("answers")
        if detail_answers:
            disposition, index = depth_decision(detail_answers, policy)
        cards.append({"id": record["id"], "source_id": record.get("source_id"), "kind": record.get("kind"),
                      "language": record.get("language", "unknown"), "comment_original_private": record["comment"],
                      "context_private": record.get("context"), "disposition": disposition, "selection_index": index,
                      "triage": triaged[record["id"]]["answers"], "depth": detail_answers,
                      "evidence_quote": None, "translation_pt_br": None, "editorial_interpretation": None,
                      "interpretation_supported": None, "note": "Requires reading; Jev does not generate explanations."})
    cards.sort(key=lambda row: (-(row["selection_index"] if row["selection_index"] is not None else -1), row["id"]))
    candidates = [row for row in cards if row["disposition"] == "candidate_requires_editorial_read"]
    jev.private_write(output / "evidence.jsonl", cards, lines=True)
    jev.private_write(output / "candidates.json", candidates)
    jev.private_write(output / "review.json", [row for row in cards if row["disposition"].startswith("review_")])
    jev.private_write(output / "duplicates.json", duplicates)
    receipt = {**plan, "mode": "executed", "status": "preselection_complete_editorial_read_pending",
               "triaged": len(unique), "depth_processed": len(eligible), "candidates": len(candidates),
               "dispositions": dict(Counter(row["disposition"] for row in cards)),
               "session_wall_seconds": round(time.monotonic() - started, 3),
               "stage_receipts": {"triage": first, "depth": second}, "semantic_validation": "not_established_by_execution"}
    jev.private_write(output / "receipt.json", receipt)
    return {key: value for key, value in receipt.items() if key != "stage_receipts"}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--corpus", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--triage", type=Path, default=ROOT / "assets/triage.json")
    parser.add_argument("--depth", type=Path, default=ROOT / "assets/depth.json")
    parser.add_argument("--policy", type=Path, default=ROOT / "assets/policy.json")
    parser.add_argument("--max-requests", type=int, default=100)
    parser.add_argument("--execute", action="store_true")
    parser.add_argument("--resume", action="store_true")
    parser.add_argument("--credential", type=Path, help="Override the shared JevCloud credential file")
    args = parser.parse_args()
    try:
        print(json.dumps(execute(args), ensure_ascii=False))
    except jev.JevError as exc:
        print(str(exc), file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
