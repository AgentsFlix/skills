"""O acervo cresce pelo JSON e compartilha a retomada com o player."""
import json
from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]


class WatchCatalog(unittest.TestCase):
    def test_resume_and_multiple_series(self):
        subprocess.run(['node', str(ROOT / 'tests/watch_catalog.cjs')], check=True, capture_output=True)

    def test_editorial_configuration(self):
        data = json.loads((ROOT / 'site/assistir/series.json').read_text())
        visible = {s['slug'] for s in data['series'] if s.get('catalogo', True)}
        for series in data['series']:
            self.assertIs(type(series.get('catalogo', True)), bool)
        config = data.get('vitrine', {})
        if 'destaque' in config:
            self.assertIn(config['destaque'], visible)
        ids = set()
        for row in config.get('fileiras', []):
            self.assertRegex(row['id'], r'^[a-z0-9-]+$')
            self.assertNotIn(row['id'], ids)
            ids.add(row['id'])
            self.assertTrue(row['titulo'].strip())
            if 'genero' in row:
                self.assertIsInstance(row['genero'], str)

    def test_mini_episodes_use_the_main_player(self):
        player = (ROOT / 'site/assistir/player.js').read_text()
        page = (ROOT / 'site/assistir/index.html').read_text()
        css = (ROOT / 'site/assistir/player.css').read_text()
        self.assertIn('data-act="mini-video"', player)
        self.assertIn('function playMiniVideo(i)', player)
        self.assertIn('state.miniVideo?.uid || curEp().uid', player)
        self.assertNotIn('<figure class="mini"><iframe', player)
        self.assertIn('id="btn-extra"', page)
        self.assertIn('function openExtra()', player)
        self.assertIn('data-act="extra-close"', player)
        self.assertIn('grid-template-columns: 28px minmax(128px, 42%) minmax(0, 1fr)', css)
