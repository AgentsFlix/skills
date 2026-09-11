"""Contrato de previews rastreáveis e publicação pelo componente comum."""
import copy
from html.parser import HTMLParser
import json
from pathlib import Path
import subprocess
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
from build_reading_shares import outputs, render


class Tags(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.feed(text)
    def handle_starttag(self, name, attrs):
        self.tags.append((name, dict(attrs)))


class ReadingShares(unittest.TestCase):
    def test_every_reading_has_current_full_app_and_unique_preview_without_javascript(self):
        manifest = json.loads((ROOT / 'site/leitura/manifest.json').read_text())
        pages = outputs()
        self.assertEqual(set(pages), set((ROOT / 'site/compartilhar').glob('*/index.html')))
        for entry, (path, expected) in zip(manifest['readings'], pages.items()):
            self.assertEqual(path.read_text(), expected, 'Regere os links após mudar a vitrine ou o manifest')
            tags = Tags(expected).tags
            def meta(key):
                found = [a['content'] for t,a in tags if t == 'meta' and a.get('property',a.get('name')) == key]
                self.assertEqual(len(found), 1, key)
                return found[0]
            self.assertEqual(meta('og:title'), entry['share']['title'])
            self.assertEqual(meta('og:description'), entry['share']['description'])
            self.assertEqual(meta('og:url'), f'https://agentsflix.ai/compartilhar/{entry["slug"]}/')
            self.assertEqual(meta('og:image'), 'https://agentsflix.ai' + entry['share']['image'])
            self.assertFalse(any(a.get('http-equiv','').lower() == 'refresh' for _,a in tags))
            self.assertIn('window.AgentFlixReader?.mount', expected)
            self.assertIn('if (enterSharedReading()) return;', expected)

    def test_missing_or_unsafe_previews_block_publication(self):
        template = (ROOT/'site/index.html').read_text()
        entry = json.loads((ROOT/'site/leitura/manifest.json').read_text())['readings'][0]
        for field in ('title','description','image','alt'):
            broken = copy.deepcopy(entry)
            del broken['share'][field]
            with self.assertRaises(ValueError): render(template, broken, ROOT/'site')
        for image in ('//outside.example/cover.jpg','/leitura/../../secret.jpg','/leitura/image.svg'):
            broken = copy.deepcopy(entry); broken['share']['image'] = image
            with self.assertRaises(ValueError): render(template, broken, ROOT/'site')

    def test_browser_share_behaviour(self):
        subprocess.run(['node','tests/reading_shares.cjs'], cwd=ROOT, check=True, capture_output=True, text=True)
