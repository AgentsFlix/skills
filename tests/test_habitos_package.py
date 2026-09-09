"""A instalação e o prompt portátil entregam a mesma revisão completa."""
import json
from pathlib import Path
import unittest
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
SLUG = 'habitos-que-cabem'
PACKAGE = ROOT / 'skills' / SLUG
PORTABLE = ROOT / 'docs/.well-known/skills' / SLUG


class HabitosPackageTests(unittest.TestCase):
    def test_zip_contains_the_complete_portable_package(self):
        with ZipFile(ROOT / 'docs/packages' / (SLUG + '.zip')) as archive:
            expected = {SLUG + '/' + str(p.relative_to(PORTABLE)): p.read_bytes()
                        for p in PORTABLE.rglob('*') if p.is_file()}
            self.assertEqual(set(archive.namelist()), set(expected))
            for name, content in expected.items():
                self.assertEqual(archive.read(name), content, name)

    def test_activation_and_identity_survive_portable_distribution(self):
        identity = json.loads((PACKAGE / 'references/identidade.json').read_text())
        self.assertEqual(identity['skill_id'], SLUG)
        self.assertEqual(identity, json.loads((PORTABLE / 'references/identidade.json').read_text()))
        activation = (PACKAGE / 'references/ativacao.md').read_text().strip()
        self.assertEqual(activation, (PORTABLE / 'references/ativacao.md').read_text().strip())
        prompt = (ROOT / 'docs/prompt' / (SLUG + '.md')).read_text()
        self.assertIn(activation, prompt)
        for path in (PACKAGE / 'references').glob('*'):
            self.assertEqual(path.read_bytes(), (PORTABLE / 'references' / path.name).read_bytes())


if __name__ == '__main__':
    unittest.main()
