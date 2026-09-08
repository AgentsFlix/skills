"""Contrato da curadoria: descoberta completa, dependências e guia sem becos."""
import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
D = json.loads((ROOT / 'site/vitrine.json').read_text())
CAT = {s['name']: s for s in json.loads((ROOT / 'catalog.json').read_text())['skills']}

class DiscoveryTests(unittest.TestCase):
    def test_every_regular_skill_is_placed_once(self):
        self.assertEqual(set(D['skills']), {slug for slug,s in CAT.items() if s['row'] != 'lendas'})
        row_ids = {r['id'] for r in D['fileiras']}
        self.assertEqual(len(row_ids), len(D['fileiras']))
        for slug, m in D['skills'].items():
            with self.subTest(skill=slug):
                self.assertIn(m['fileira'], row_ids)
                self.assertTrue(m['colecao'] is None or m['colecao'] in D['colecoes'])
                self.assertTrue(set(m['antes']) <= set(D['skills']))

    def test_dependencies_have_no_cycles(self):
        def visit(slug, trail):
            self.assertNotIn(slug, trail)
            for dep in D['skills'][slug]['antes']:
                visit(dep, trail + [slug])
        for slug in D['skills']:
            visit(slug, [])

    def test_guide_ends_with_one_available_skill_in_three_answers(self):
        reached = set()
        def visit(node, trail):
            self.assertNotIn(node, trail)
            self.assertLess(len(trail), 3)
            reached.add(node)
            options = D['guia'][node]['o']
            self.assertTrue(options)
            for opt in options:
                self.assertNotEqual('vai' in opt, 'skill' in opt)
                if 'vai' in opt:
                    self.assertIn(opt['vai'], D['guia'])
                    visit(opt['vai'], trail + [node])
                else:
                    self.assertIn(opt['skill'], D['skills'])
        visit('inicio', [])
        self.assertEqual(reached, set(D['guia']))

    def test_samples_and_lenses_refer_to_real_content(self):
        self.assertTrue(set(D['lentes_em']) <= set(D['skills']))
        self.assertTrue(set(D['amostras']) <= set(D['skills']))
        self.assertTrue(D['caso'])
        for slug,a in D['amostras'].items():
            with self.subTest(skill=slug):
                self.assertTrue(a['roteiro'])
                for turn in a['roteiro']:
                    self.assertIn(turn['de'], ('eu', 'bot'))
                    self.assertTrue(any(k in turn for k in ('t','doc','chave')))
                for lens in a.get('variantes', {}):
                    self.assertEqual(CAT[lens]['row'], 'lendas')
