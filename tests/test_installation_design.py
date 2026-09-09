"""Regressão DN-1: payloads de instalação pré-redesign, caractere a caractere."""
import hashlib
import json
from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]

class InstallationPayloadTests(unittest.TestCase):
    def test_all_platform_payloads_match_before_redesign(self):
        actual = json.loads(subprocess.check_output(["node", str(ROOT / "tests/installation_snapshot.cjs")], text=True))
        expected = json.loads((ROOT / "tests/fixtures/installation-dn1.json").read_text())
        # Migração P0/P1 autorizada: novas entradas conversacionais e URLs da branch.
        # O snapshot DN-1 continua protegendo todas as demais skills.
        migration = json.loads((ROOT / "tests/fixtures/installation-contract-v1.json").read_text())
        self.assertEqual(set(migration), {"copy-headlines", "hybrid-icp", "ads-otimizar", "ops-revisao-semanal"})
        expected.update(migration)
        self.assertTrue(actual)
        # Novas skills podem ser adicionadas; as existentes mantêm o contrato do redesign.
        for slug, targets in expected.items():
            for platform, digest in targets.items():
                with self.subTest(slug=slug, platform=platform):
                    self.assertEqual(hashlib.sha256(actual[slug][platform].encode()).hexdigest(), digest)

if __name__ == "__main__":
    unittest.main()
