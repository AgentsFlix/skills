"""Regressão de instalação: payloads canônicos, caractere a caractere.
Oito prompts migrados para memória/OKF na jornada editorial; demais hashes preservados."""
import hashlib
import json
from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]

class InstallationPayloadTests(unittest.TestCase):
    def test_all_platform_payloads_match_canonical_revision(self):
        actual = json.loads(subprocess.check_output(["node", str(ROOT / "tests/installation_snapshot.cjs")], text=True))
        expected = json.loads((ROOT / "tests/fixtures/installation-dn1.json").read_text())
        self.assertTrue(actual)
        # Novas skills podem ser adicionadas; alterações intencionais de conteúdo atualizam somente seus hashes.
        for slug, targets in expected.items():
            for platform, digest in targets.items():
                with self.subTest(slug=slug, platform=platform):
                    self.assertEqual(hashlib.sha256(actual[slug][platform].encode()).hexdigest(), digest)

if __name__ == "__main__":
    unittest.main()
