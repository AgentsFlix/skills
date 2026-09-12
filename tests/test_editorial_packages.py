"""A instalação e o prompt portátil entregam a mesma revisão completa."""
import json
from pathlib import Path
import unittest
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
SLUGS = ['editorial-pilares', 'editorial-visual', 'editorial-templates', 'editorial-rotina', 'hybrid-perfil', 'hybrid-icp', 'hybrid-marca', 'hybrid-etl', 'copy-pesquisa-avatar', 'copy-voz', 'sop-extrair', 'copy-metodo-koe']


class EditorialPackageTests(unittest.TestCase):
    def test_public_audience_research_is_network_first_and_traceable(self):
        package=ROOT/'skills/copy-pesquisa-avatar'
        method=(package/'references/pesquisa-publica-profissional.md').read_text()
        skill=(package/'SKILL.md').read_text()
        self.assertIn('Não peça ao usuário que traga mensagens como primeira rota',method)
        self.assertIn('Maton',method)
        self.assertIn('yt-dlp',method)
        self.assertIn('Meta: 30 a 50 trechos literais únicos',method)
        self.assertIn('pelo menos 2 famílias de fonte e 4 artefatos públicos distintos',method)
        self.assertIn('URL pública reabrível',method)
        self.assertIn('retome desses arquivos e do `next_context`',method)
        self.assertIn('references/pesquisa-publica-profissional.md',skill)

    def test_hybrid_etl_has_no_missing_private_source_map(self):
        package=ROOT/'skills/hybrid-etl'
        for name in ('etl-local-extract.md','etl-deep-pass.md'):
            text=(package/'references'/name).read_text()
            self.assertNotIn('imersao-business-map.yaml',text)
            self.assertIn('source-registry.yaml',text)
        procedure=(package/'SKILL.md').read_text()
        self.assertIn('não exige abrir o método ampliado nem templates',procedure)

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
