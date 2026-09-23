#!/usr/bin/env python3
"""Audit reference IDs and literal evidence. Does not certify semantic interpretation."""
import argparse
import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT.parent / "jev-operar/scripts"))
import jev_client as jev


def audit(records, knowledge):
    jev.validate_records(records)
    corpus = {row["id"]: row["comment"] for row in records}
    errors = []
    if not isinstance(knowledge, dict) or any(name.endswith("_shape") for name in knowledge):
        return {"status": "failed", "errors": ["Unfilled template or invalid object"]}
    if not isinstance(knowledge.get("references"), list) or not isinstance(knowledge.get("findings"), list):
        return {"status": "failed", "errors": ["references and findings must be lists"]}
    for index, reference in enumerate(knowledge["references"]):
        if not isinstance(reference, dict):
            errors.append(f"Reference {index}: invalid object")
            continue
        cid = reference.get("comment_id")
        quote = reference.get("evidence_quote_original")
        source_text = corpus.get(cid, "") if isinstance(cid, str) else ""
        if not isinstance(cid, str) or cid not in corpus:
            errors.append(f"Reference {index}: unknown ID")
        elif not isinstance(quote, str) or not quote.strip() or quote not in corpus[cid]:
            errors.append(f"Reference {index}: quote not found literally in preserved text")
        support = reference.get("supporting_span")
        if reference.get("interpretation") and (not isinstance(support, str) or not support.strip() or support not in source_text):
            errors.append(f"Reference {index}: interpretation lacks a literal supporting span")
    for index, finding in enumerate(knowledge["findings"]):
        if not isinstance(finding, dict):
            errors.append(f"Finding {index}: invalid object")
            continue
        kind = finding.get("kind")
        if kind not in {"textual_observation", "editorial_interpretation", "hypothesis"}:
            errors.append(f"Finding {index}: evidence status not labeled")
        ids = finding.get("evidence_ids")
        counter = finding.get("counterevidence_ids", [])
        if not isinstance(ids, list) or (not ids and kind != "hypothesis"):
            errors.append(f"Finding {index}: missing evidence IDs")
            continue
        if not isinstance(counter, list) or any(not isinstance(cid, str) or cid not in corpus for cid in ids + (counter if isinstance(counter, list) else [])):
            errors.append(f"Finding {index}: invalid evidence or counterevidence IDs")
    return {"status": "passed" if not errors else "failed", "errors": errors,
            "references": len(knowledge["references"]), "findings": len(knowledge["findings"]),
            "semantic_review": "Required separately; this audit checks literal traceability only."}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--corpus", type=Path, required=True)
    parser.add_argument("--knowledge", type=Path, required=True)
    args = parser.parse_args()
    result = audit(jev.read_rows(args.corpus), jev.read_json(args.knowledge))
    print(json.dumps(result))
    return 0 if result["status"] == "passed" else 1


if __name__ == "__main__":
    sys.exit(main())
