"""Run the browser's dependency model under Node, as part of validate."""
from pathlib import Path
import subprocess
import unittest

class JourneyStateTests(unittest.TestCase):
    def test_dependency_state(self):
        root = Path(__file__).resolve().parents[1]
        result = subprocess.run(['node', 'tests/journey_state.cjs'], cwd=root, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
