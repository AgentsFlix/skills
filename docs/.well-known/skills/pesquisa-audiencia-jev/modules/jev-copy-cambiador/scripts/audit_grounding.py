#!/usr/bin/env python3
"""Check declared source links and metadata; does not validate semantic truth."""

import argparse
import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MODES = {"quote", "paraphrase", "synthesis"}


def normalize(value):
    return re.sub(r"\s+", " ", value).strip()


def load_jsonl(path):
    rows = {}
    with Path(path).open(encoding="utf-8") as handle:
        for line_no, line in enumerate(handle, 1):
            if not line.strip():
                continue
            row = json.loads(line)
            row_id = row.get("id")
            if not isinstance(row_id, str) or row_id in rows:
                raise ValueError(f"invalid or duplicate corpus id at line {line_no}")
            rows[row_id] = row
    return rows


def audit(piece, corpus, personas):
    errors = []
    components = piece.get("components")
    if not isinstance(components, list) or not components:
        return ["components must be a nonempty list"]
    seen = set()
    for index, component in enumerate(components):
        prefix = f"components[{index}]"
        component_id = component.get("component_id")
        if not isinstance(component_id, str) or not component_id:
            errors.append(f"{prefix}: missing component_id")
        elif component_id in seen:
            errors.append(f"{prefix}: duplicate component_id {component_id}")
        seen.add(component_id)
        draft = component.get("draft")
        evidence = component.get("evidence")
        persona = component.get("persona")
        if not isinstance(draft, str) or not draft.strip():
            errors.append(f"{prefix}: missing draft")
        declared_ids = set()
        sources = []
        if evidence is None:
            if not component.get("editorial_reason"):
                errors.append(f"{prefix}: source-free component requires editorial_reason")
        elif not isinstance(evidence, dict):
            errors.append(f"{prefix}: invalid evidence")
        else:
            sources.append(evidence)
        supporting = component.get("supporting_evidence", [])
        if not isinstance(supporting, list):
            errors.append(f"{prefix}: supporting_evidence must be a list")
        else:
            sources.extend(supporting)
        for source in sources:
            if not isinstance(source, dict):
                errors.append(f"{prefix}: invalid evidence item")
                continue
            evidence_id, span, mode = source.get("id"), source.get("span"), source.get("mode")
            if not isinstance(evidence_id, str) or evidence_id not in corpus:
                errors.append(f"{prefix}: unknown evidence id {evidence_id!r}")
            else:
                declared_ids.add(evidence_id)
                if not isinstance(span, str) or not span.strip():
                    errors.append(f"{prefix}: missing literal evidence span")
                elif normalize(span) not in normalize(corpus[evidence_id].get("comment", "")):
                    errors.append(f"{prefix}: evidence span is not literal in corpus row {evidence_id}")
            if mode not in MODES:
                errors.append(f"{prefix}: invalid grounding mode {mode!r}")
            if mode == "quote" and isinstance(draft, str) and isinstance(span, str) and normalize(span) not in normalize(draft):
                errors.append(f"{prefix}: quote mode requires the literal span in draft")
        if not isinstance(persona, dict) or persona.get("slug") not in personas:
            errors.append(f"{prefix}: unknown persona slug")
        elif not isinstance(persona.get("method_elements"), list):
            errors.append(f"{prefix}: persona.method_elements must be a list")
        claims = component.get("claims")
        if not isinstance(claims, list) or not claims:
            errors.append(f"{prefix}: claims must be a nonempty list")
        else:
            for claim_index, claim in enumerate(claims):
                claim_prefix = f"{prefix}.claims[{claim_index}]"
                if not isinstance(claim.get("text"), str) or not claim["text"].strip():
                    errors.append(f"{claim_prefix}: missing text")
                kind = claim.get("kind", "testimony")
                evidence_ids = claim.get("evidence_ids", [])
                if kind not in {"testimony", "external_fact", "interpretation", "proposal"}:
                    errors.append(f"{claim_prefix}: unknown claim kind")
                if not isinstance(evidence_ids, list):
                    errors.append(f"{claim_prefix}: evidence_ids must be a list")
                    continue
                if kind == "testimony" and not evidence_ids:
                    errors.append(f"{claim_prefix}: missing evidence_ids")
                elif any(not isinstance(item, str) or item not in corpus for item in evidence_ids):
                    errors.append(f"{claim_prefix}: unknown evidence id")
                elif any(item not in declared_ids for item in evidence_ids):
                    errors.append(f"{claim_prefix}: evidence id requires declared literal span")
                if kind in {"interpretation", "proposal"} and not claim.get("reasoning"):
                    errors.append(f"{claim_prefix}: editorial claim requires reasoning")
                if kind == "external_fact":
                    links = claim.get("sources")
                    if not isinstance(links, list) or not links or any(not isinstance(link, str) or not link.startswith("https://") for link in links):
                        errors.append(f"{claim_prefix}: external_fact requires source URLs")
    return errors


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--piece", required=True)
    parser.add_argument("--corpus", required=True)
    args = parser.parse_args()
    piece = json.loads(Path(args.piece).read_text(encoding="utf-8"))
    corpus = load_jsonl(args.corpus)
    personas = json.loads((ROOT / "assets" / "personas.json").read_text(encoding="utf-8"))
    errors = audit(piece, corpus, personas)
    if errors:
        for error in errors:
            print(error, file=sys.stderr)
        return 1
    print(json.dumps({"ok": True, "components": len(piece["components"]), "scope": "declared IDs, literal spans and metadata only"}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
