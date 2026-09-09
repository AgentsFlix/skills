from html.parser import HTMLParser
from pathlib import Path
import unittest, zipfile
ROOT=Path(__file__).resolve().parents[1]
PAGE=ROOT/'site/leitura/dia-22'
class Assets(HTMLParser):
    def __init__(self): super().__init__(); self.paths=[]
    def handle_starttag(self,tag,attrs):
        d=dict(attrs)
        for key in ('src','poster','href'):
            v=d.get(key,'')
            if v and not v.startswith(('http:','https:','/','#')): self.paths.append(v)
class PublishedReading(unittest.TestCase):
    def test_all_relative_assets_exist(self):
        a=Assets();a.feed((PAGE/'index.html').read_text())
        for v in a.paths:self.assertTrue((PAGE/v).is_file(),v)
    def test_skill_package_includes_declared_files(self):
        with zipfile.ZipFile(PAGE/'downloads/habitos-que-cabem.zip') as z:
            self.assertIsNone(z.testzip())
            self.assertIn('habitos-que-cabem/SKILL.md',z.namelist())
            self.assertIn('habitos-que-cabem/references/ativacao.md',z.namelist())
    def test_no_private_editorial_notes_published(self):
        for name in ['notas-editoriais.md','ensaio.md','metodologia-editorial.md']:
            self.assertFalse((PAGE/name).exists())
