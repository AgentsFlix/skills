"""Behavioral gates for the real-brand journey; no external agent is executed."""
import json
import pathlib
import shutil
import subprocess
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]

class BrandJourney(unittest.TestCase):
    def test_state_and_prompts(self):
        node = shutil.which('node')
        if not node:
            self.skipTest('Node não disponível')
        subprocess.run([node, str(ROOT / 'tests/brand_journey.cjs')], check=True)

    def test_episode_entry_and_skill_references(self):
        directory = ROOT / 'site/assistir/hermes-em-operacao/t1e2'
        data = json.loads((directory / 'jornada-marca-data.json').read_text())
        self.assertEqual(len(data['stages']), 9)
        self.assertTrue((directory / 'jornada-marca.html').is_file())
        navigation = (directory / 'episode-navigation.js').read_text()
        self.assertIn("['jornada-marca.html',", navigation)
        catalog = json.loads((ROOT / 'catalog.json').read_text())
        distributed = {s['name'] for s in catalog['skills']}
        personal = {'carrossel-icp', 'print-carousel', 'epic-paper', 'routine-builder', 'orquestrar-canais'}
        for stage in data['stages']:
            for name in stage['skills']:
                self.assertIn(name, distributed | personal)
        series = json.loads((ROOT / 'site/assistir/series.json').read_text())
        item = next(s for s in series['series'] if s['slug'] == 'hermes-em-operacao')
        self.assertEqual(item['seasons'][0]['atividades'][0]['partes'], 9)
