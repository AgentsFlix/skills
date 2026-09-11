"""Leitura pública não concede conclusão de onboarding nem instalação."""
from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]

class PublicReading(unittest.TestCase):
    def test_public_reading_and_skill_access_are_independent(self):
        result = subprocess.run(['node', 'tests/public_reading.cjs'], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
