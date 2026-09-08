"""Persistência do guia, exclusão de QA e sucesso real da cópia."""
from pathlib import Path
import subprocess
import unittest

class NavigationAnalyticsTests(unittest.TestCase):
    def test_browser_modules(self):
        root = Path(__file__).resolve().parents[1]
        result = subprocess.run(['node', 'tests/navigation_analytics.cjs'], cwd=root, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
