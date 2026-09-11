"""Contrato de previews rastreáveis e publicação pelo componente comum."""
import copy
from html.parser import HTMLParser
import json
from pathlib import Path
import subprocess
import sys
import unittest
from unittest.mock import patch

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
            self.assertEqual(meta('og:url'), f'https://agentsflix.ai/compartilhar/{entry["slug"]}/?v={entry["share"]["revision"]}')
            self.assertEqual(meta('og:image'), 'https://agentsflix.ai' + entry['share']['preview_image'])
            self.assertFalse(any(a.get('http-equiv','').lower() == 'refresh' for _,a in tags))
            self.assertIn('window.AgentFlixReader?.mount', expected)
            self.assertIn('if (enterSharedReading()) return;', expected)

    def test_missing_or_unsafe_previews_block_publication(self):
        template = (ROOT/'site/index.html').read_text()
        entry = json.loads((ROOT/'site/leitura/manifest.json').read_text())['readings'][0]
        for field in ('title','description','image','preview_image','alt'):
            broken = copy.deepcopy(entry)
            del broken['share'][field]
            with self.assertRaises(ValueError): render(template, broken, ROOT/'site')
        for image in ('//outside.example/cover.jpg','/leitura/../../secret.jpg','/leitura/image.svg'):
            broken = copy.deepcopy(entry); broken['share']['preview_image'] = image
            with self.assertRaises(ValueError): render(template, broken, ROOT/'site')

    def test_original_heavy_cover_cannot_be_reused_as_link_preview(self):
        template = (ROOT/'site/index.html').read_text()
        entries = json.loads((ROOT/'site/leitura/manifest.json').read_text())['readings']
        entry = copy.deepcopy(next(r for r in entries if r['slug'] == 'habitos-que-cabem'))
        entry['share']['preview_image'] = entry['share']['image']
        with self.assertRaisesRegex(ValueError, 'menos de 300 KB'):
            render(template, entry, ROOT/'site')
        entry = entries[0]
        original = (ROOT/'site'/entry['share']['preview_image'].lstrip('/')).read_bytes()
        with patch.object(Path, 'read_bytes', return_value=original + b'0' * 300_000):
            with self.assertRaisesRegex(ValueError, 'menos de 300 KB'):
                render(template, entry, ROOT/'site')

    def test_preview_version_is_required_and_metadata_stays_in_first_chunk(self):
        template = (ROOT/'site/index.html').read_text()
        entry = json.loads((ROOT/'site/leitura/manifest.json').read_text())['readings'][0]
        for revision in (None, 0, -1, '2', True):
            broken = copy.deepcopy(entry); broken['share']['revision'] = revision
            with self.assertRaises(ValueError): render(template, broken, ROOT/'site')
        for page in outputs().values():
            first_chunk = page.encode()[:8192].decode()
            self.assertIn('property="og:image"', first_chunk)
            self.assertIn('property="og:title"', first_chunk)
            self.assertIn('property="og:description"', first_chunk)
            self.assertNotIn('capa-dia-22.png', first_chunk)

    def test_browser_share_behaviour(self):
        subprocess.run(['node','tests/reading_shares.cjs'], cwd=ROOT, check=True, capture_output=True, text=True)
