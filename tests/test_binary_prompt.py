"""A local app's fonts and icons belong in the ZIP, never as corrupted prompt text."""
import importlib.util
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import build_docs


class BinaryPromptTests(unittest.TestCase):
    def test_binary_assets_are_listed_but_not_decoded_into_prompt(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            folder = root / 'example' / 'assets'
            folder.mkdir(parents=True)
            files = ['assets/font.ttf', 'assets/icon.ico', 'assets/license.txt']
            (folder / 'font.ttf').write_bytes(b'\x00\xffFONT_SECRET_MARKER')
            (folder / 'icon.ico').write_bytes(b'\x00\xffICON_SECRET_MARKER')
            (folder / 'license.txt').write_text('Example font license')
            with patch.object(build_docs, 'SKILLS', root):
                doc, _, truncated = build_docs.build_prompt('example', {'name':'example','description':'Example'},
                    '# Example', files, '1.0.0', act='Use this local package.')
            self.assertNotIn('FONT_SECRET_MARKER', doc)
            self.assertNotIn('ICON_SECRET_MARKER', doc)
            self.assertNotIn('\ufffd', doc)
            self.assertIn('Example font license', doc)
            for path in files[:2]:
                self.assertIn(path + ' (arquivo: só no zip)', doc)
            self.assertEqual(truncated, [])
