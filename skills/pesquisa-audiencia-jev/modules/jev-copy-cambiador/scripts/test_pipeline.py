#!/usr/bin/env python3

import importlib.util
import json
import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


audit_module = load_module("audit_grounding", ROOT / "scripts" / "audit_grounding.py")


class CambiadorTests(unittest.TestCase):
    def test_persona_catalog_has_fourteen_methods_and_neutral(self):
        personas = json.loads((ROOT / "assets" / "personas.json").read_text())
        self.assertEqual(len(personas), 15)
        self.assertTrue(all(isinstance(description, str) and description for description in personas.values()))
        self.assertIn("copy-metodo-brown", personas)
        self.assertIn("neutral", personas)

    def test_prepare_evidence_has_none_and_explicit_binding(self):
        with tempfile.TemporaryDirectory() as directory:
            record = Path(directory) / "record.jsonl"
            questions = Path(directory) / "questions.json"
            subprocess.run([
                sys.executable, str(ROOT / "scripts" / "prepare_turn.py"), "evidence",
                "--component", str(ROOT / "assets" / "synthetic-component.json"),
                "--candidates", str(ROOT / "assets" / "synthetic-corpus.jsonl"),
                "--record-out", str(record), "--questions-out", str(questions),
            ], check=True)
            payload = json.loads(questions.read_text())
            choice = payload["best_evidence"]
            self.assertIn("none", choice["criteria"])
            row = json.loads(record.read_text())
            self.assertIsInstance(row["comment"], str)
            decoded = json.loads(row["comment"])
            self.assertIn("component", decoded)
            self.assertIn("candidates", decoded)
            self.assertIn("`records[0].comment`", choice["instructions"])
            self.assertNotIn("records[0].comment.", choice["instructions"])
            if os.name == "posix":
                self.assertEqual(record.stat().st_mode & 0o777, 0o600)
                self.assertEqual(questions.stat().st_mode & 0o777, 0o600)

    @unittest.skipUnless(os.name == "posix", "symlink fixture requires POSIX")
    def test_prepare_refuses_symlink_output_without_overwriting_target(self):
        with tempfile.TemporaryDirectory() as directory:
            target = Path(directory) / "existing.jsonl"
            target.write_text("preserve existing evidence\n")
            link = Path(directory) / "record.jsonl"
            link.symlink_to(target)
            result = subprocess.run([
                sys.executable, str(ROOT / "scripts" / "prepare_turn.py"), "evidence",
                "--component", str(ROOT / "assets" / "synthetic-component.json"),
                "--candidates", str(ROOT / "assets" / "synthetic-corpus.jsonl"),
                "--record-out", str(link), "--questions-out", str(Path(directory) / "questions.json"),
            ], capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual(target.read_text(), "preserve existing evidence\n")

    def test_audit_accepts_grounded_component(self):
        corpus = {"e2": {"id": "e2", "comment": "Eu não mudo porque parece que estaria jogando fora os dez anos que investi na carreira."}}
        personas = json.loads((ROOT / "assets" / "personas.json").read_text())
        piece = {"components": [{
            "component_id": "belief-01", "function": "belief",
            "evidence": {"id": "e2", "span": "jogando fora os dez anos", "mode": "paraphrase"},
            "persona": {"slug": "copy-metodo-sethi", "method_elements": ["invisible_script"]},
            "draft": "O investimento passado pode virar a frase que impede o próximo passo.",
            "claims": [{"text": "O investimento passado pode impedir a mudança.", "evidence_ids": ["e2"]}],
        }]}
        self.assertEqual(audit_module.audit(piece, corpus, personas), [])

    def test_audit_rejects_fabricated_span(self):
        corpus = {"e2": {"id": "e2", "comment": "Eu não mudo de carreira."}}
        personas = json.loads((ROOT / "assets" / "personas.json").read_text())
        piece = {"components": [{
            "component_id": "x", "function": "hook",
            "evidence": {"id": "e2", "span": "perdi quinze anos", "mode": "quote"},
            "persona": {"slug": "copy-metodo-brown", "method_elements": []},
            "draft": "Perdi quinze anos.",
            "claims": [{"text": "Perdi quinze anos.", "evidence_ids": ["e2"]}],
        }]}
        errors = audit_module.audit(piece, corpus, personas)
        self.assertTrue(any("not literal" in error for error in errors))

    def test_editorial_proposal_does_not_require_invented_testimony(self):
        component = {
            "component_id": "reflection", "draft": "Que experiência caberia nesta semana?",
            "evidence": None, "editorial_reason": "Convida a examinar uma possibilidade.",
            "persona": {"slug": "neutral", "method_elements": []},
            "claims": [{"kind": "proposal", "text": "Experimentar de modo limitado.",
                        "reasoning": "Pergunta autoral; não afirma que alguém já fez isso.", "evidence_ids": []}],
        }
        self.assertEqual(audit_module.audit({"components": [component]}, {}, {"neutral": "clear"}), [])
        component["claims"][0]["kind"] = "testimony"
        self.assertTrue(any("missing evidence_ids" in e for e in audit_module.audit({"components": [component]}, {}, {"neutral": "clear"})))

    def test_complementary_source_can_support_its_own_claim(self):
        component = {
            "component_id": "two", "draft": "Um curso terminou; outra experiência começou.",
            "evidence": {"id": "a", "span": "Terminei.", "mode": "paraphrase"},
            "supporting_evidence": [{"id": "b", "span": "Comecei.", "mode": "paraphrase"}],
            "persona": {"slug": "neutral", "method_elements": []},
            "claims": [{"kind": "testimony", "text": "Começou.", "evidence_ids": ["b"]}],
        }
        corpus = {"a": {"comment": "Terminei."}, "b": {"comment": "Comecei."}}
        self.assertEqual(audit_module.audit({"components": [component]}, corpus, {"neutral": "clear"}), [])


if __name__ == "__main__":
    unittest.main()
