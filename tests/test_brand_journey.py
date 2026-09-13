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

    def test_mockup_bank(self):
        node = shutil.which('node')
        if not node:
            self.skipTest('Node não disponível')
        subprocess.run([node, str(ROOT / 'tests/mockup_bank.cjs')], check=True)

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

    def test_base_dashboard_assets_and_entry(self):
        directory = ROOT / 'site/assistir/hermes-em-operacao/t1e2'
        page = (directory / 'jornada-marca.html').read_text()
        script = (directory / 'jornada-marca.js').read_text()
        self.assertIn('jornada-base-dashboard.css', page)
        self.assertIn('jornada-base-dashboard.js', page)
        self.assertIn('agentflix-base-bundle-1', script)
        self.assertIn('Carregar minha base em JSON', script)
        for index, slug in enumerate(['negocio', 'pesquisa', 'publico', 'posicionamento', 'voz', 'materia-prima'], start=1):
            asset = directory / 'art' / 'base-dashboard' / f'{index:02d}-{slug}.webp'
            self.assertTrue(asset.is_file())
            self.assertGreater(asset.stat().st_size, 1_000)
