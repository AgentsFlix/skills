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
