"""Identidade isolada e fidelidade do contrato em cada distribuição."""
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
import zipfile

import yaml

ROOT = Path(__file__).resolve().parents[1]
SLUGS = ('habitos-que-cabem', 'copy-headlines', 'hybrid-icp', 'ads-otimizar', 'ops-revisao-semanal')


def runtime(slug):
    spec = importlib.util.spec_from_file_location(slug, ROOT / 'skills' / slug / 'scripts/auditar.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class SkillContractTests(unittest.TestCase):
    def test_one_runtime_and_isolated_identities(self):
        scripts = [(ROOT / 'skills' / s / 'scripts/auditar.py').read_bytes() for s in SLUGS]
        self.assertEqual(len(set(scripts)), 1)
        with tempfile.TemporaryDirectory() as tmp:
            roots = {}
            for slug in SLUGS:
                api = runtime(slug)
                root = Path(tmp) / slug
                identity = api.IDENTITY
                self.assertEqual(api.SKILL_ID, slug)
                api.init(root, identity['distribution_version'], identity['content_revision'])
                roots[slug] = root
                report = api.audit(root, ROOT / 'skills' / slug / 'references/conhecimento.okf.md')
                self.assertEqual(report['skill_id'], slug)
                self.assertEqual(report['human_runs_observed'], 0)
                self.assertEqual(report['observation'], 'partial')
                self.assertEqual(report['knowledge_verified'], [])
                self.assertNotIn('revision_mismatch', {s['kind'] for s in report['signals']})
            for slug in SLUGS[1:]:
                api = runtime(slug)
                with self.assertRaises(ValueError):
                    api.load(roots['habitos-que-cabem'])
                with self.assertRaises(ValueError):
                    api.knowledge(ROOT / 'skills/habitos-que-cabem/references/conhecimento.okf.md')
                event = json.loads((ROOT / 'skills/habitos-que-cabem/templates/evento-de-uso.json').read_text())
                with self.assertRaises(ValueError):
                    api.validate_event(event)

    def test_cli_uses_packaged_identity(self):
        with tempfile.TemporaryDirectory() as tmp:
            for slug in SLUGS:
                api = runtime(slug)
                args = [sys.executable, str(ROOT / 'skills' / slug / 'scripts/auditar.py'),
                        '--state', str(Path(tmp) / slug)]
                subprocess.check_output(args + ['init', '--version', api.IDENTITY['distribution_version'],
                                              '--revision', api.IDENTITY['content_revision']])
                report = json.loads(subprocess.check_output(args + ['audit'], text=True))
                self.assertEqual(report['skill_id'], slug)

    def test_every_install_surface_carries_the_same_content(self):
        catalog = {s['name']: s for s in json.loads((ROOT / 'catalog.json').read_text())['skills']}
        self.assertEqual(json.loads((ROOT / 'catalog.json').read_text()),
                         json.loads((ROOT / 'docs/catalog.json').read_text()))
        for slug in SLUGS:
            with self.subTest(skill=slug):
                package = ROOT / 'skills' / slug
                identity = json.loads((package / 'references/identidade.json').read_text())
                prompt = (package / 'references/ativacao.md').read_text().strip()
                combined = (ROOT / 'docs/prompt' / (slug + '.md')).read_text()
                portable = ROOT / 'docs/.well-known/skills' / slug
                fm = yaml.safe_load((portable / 'SKILL.md').read_text().split('---\n', 2)[1])
                self.assertEqual(fm['metadata']['content_revision'], identity['content_revision'])
                self.assertEqual(fm['metadata']['distribution_ref'], identity['distribution_ref'])
                expected_url = f"https://raw.githubusercontent.com/AgentsFlix/skills/{identity['distribution_ref']}/skills/{slug}/SKILL.md"
                self.assertIn(expected_url, prompt)
                if slug in catalog:
                    entry = catalog[slug]
                    self.assertEqual(entry['chat_cmd'], prompt)
                    self.assertEqual(entry['activation_prompt'], prompt)
                    self.assertEqual(entry['install_url'], expected_url)
                    self.assertEqual(entry['install_cmd'], 'hermes skills install ' + expected_url)
                    self.assertEqual(entry['prompt_truncated'], [])
                    self.assertIn(identity['distribution_ref'], entry['zip_url'])
                    self.assertIn('#' + identity['distribution_ref'], entry['npx_codex'])
                self.assertIn('**Texto de ativação (cole nas instruções):** ' + '\n'.join(
                    line.rstrip() for line in prompt.replace('\n', '\n> ').split('\n')), combined)
                with zipfile.ZipFile(ROOT / 'docs/packages' / (slug + '.zip')) as archive:
                    for f in portable.rglob('*'):
                        if f.is_file():
                            rel = f.relative_to(portable).as_posix()
                            self.assertEqual(archive.read(slug + '/' + rel), f.read_bytes())
                            if rel != 'SKILL.md':
                                self.assertEqual((package / rel).read_bytes(), f.read_bytes())
                            if rel.endswith(('.md', '.json')) and rel != 'SKILL.md':
                                self.assertIn('## Referência: ' + rel, combined)

    def test_no_installer_questionnaire_or_implicit_schedule(self):
        for slug in SLUGS:
            text = (ROOT / 'skills' / slug / 'SKILL.md').read_text()
            fm = yaml.safe_load(text.split('---\n', 2)[1])
            hermes = fm.get('metadata', {}).get('hermes', {})
            self.assertNotIn('blueprint', hermes)
            self.assertNotIn('config', hermes)


if __name__ == '__main__':
    unittest.main()
