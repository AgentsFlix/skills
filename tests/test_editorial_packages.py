"""A instalação e o prompt portátil entregam a mesma revisão completa."""
import json
from pathlib import Path
import unittest
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
SLUGS = ['editorial-pilares', 'editorial-visual', 'editorial-templates', 'editorial-rotina']


class EditorialPackageTests(unittest.TestCase):
    def test_complete_and_consistent_distribution(self):
        for slug in SLUGS:
            with self.subTest(slug=slug):
                package=ROOT/'skills'/slug;portable=ROOT/'docs/.well-known/skills'/slug
                with ZipFile(ROOT/'docs/packages'/(slug+'.zip')) as archive:
                    expected={slug+'/'+str(p.relative_to(portable)):p.read_bytes() for p in portable.rglob('*') if p.is_file()}
                    self.assertEqual(set(archive.namelist()),set(expected))
                    for name,content in expected.items():self.assertEqual(archive.read(name),content,name)
                for p in package.rglob('*'):
                    if p.is_file() and p.name!='SKILL.md':self.assertEqual(p.read_bytes(),(portable/p.relative_to(package)).read_bytes())
                identity=json.loads((package/'references/identidade.json').read_text())
                self.assertEqual(identity['skill_id'],slug)
                activation=(package/'references/ativacao.md').read_text().strip()
                self.assertIn(activation,(ROOT/'docs/prompt'/(slug+'.md')).read_text())


if __name__ == '__main__':
    unittest.main()
