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

    def test_base_editorial_contract(self):
        node = shutil.which('node')
        if not node:
            self.skipTest('Node não disponível')
        subprocess.run([node, str(ROOT / 'tests/base_editorial.cjs')], check=True)
        subprocess.run([node, str(ROOT / 'tests/base_editorial_ecf_scores.cjs')], check=True)

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

    def test_base_editorial_page_and_assets(self):
        directory = ROOT / 'site/assistir/hermes-em-operacao/t1e2'
        journey = (directory / 'jornada-marca.html').read_text()
        self.assertIn('jornada-marca.js', journey)
        self.assertNotIn('base-editorial-flow.js', journey)
        journey_script = (directory / 'jornada-marca.js').read_text()
        self.assertIn("location.assign('base-editorial.html')", journey_script)
        page = (directory / 'base-editorial.html').read_text()
        for filename in ['base-editorial-flow.js', 'base-editorial-dashboard.js', 'base-editorial-ecf-scores.js', 'base-editorial.css', 'base-editorial-dashboard.css']:
            self.assertIn(filename, page)
        flow = (directory / 'base-editorial-flow.js').read_text()
        self.assertIn('agentflix-ecf-base-entry-v1', flow)
        self.assertIn('agentflix-ecf-base-v2', flow)
        self.assertIn("legacyStorageKey='agentflix-ecf-base-v1'", flow)
        self.assertIn('store.projects[project.id]=project', flow)
        page_script = (directory / 'base-editorial-page.js').read_text()
        self.assertIn("if(location.hash!=='#dashboard')update(false)", page_script)
        self.assertIn("window.ECFBaseDashboard?.hide();current=indexFromHash();update();", page_script)
        self.assertIn("history.replaceState(null,'','#etapa-1')", page_script)
        for index, slug in enumerate(['negocio', 'pesquisa', 'publico', 'posicionamento', 'voz', 'materia-prima'], start=1):
            asset = directory / 'base-editorial-art' / 'banner' / f'{index:02d}-{slug}.webp'
            self.assertTrue(asset.is_file())
            self.assertGreater(asset.stat().st_size, 1_000)
