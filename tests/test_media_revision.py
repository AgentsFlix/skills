"""A media revision must not change the identity or timing of the published edit."""
import json
import unittest
from pathlib import Path

class MediaRevisionTest(unittest.TestCase):
    def test_operacao_preserves_existing_student_progress_and_cuts(self):
        data=json.loads((Path(__file__).resolve().parents[1]/'site/assistir/series.json').read_text())
        e=next(s for s in data['series'] if s['slug']=='hermes-em-operacao')['seasons'][0]['eps'][0]
        self.assertEqual(e['uid'],'f490e002b8d92a50e534ded6c75126a6')
        self.assertNotEqual(e['stream_uid'], e['uid'])
        self.assertAlmostEqual(e['d'],2684.04,delta=.05)
        self.assertEqual([(p['source_start'],p['source_end']) for p in e['partes']],[(297,938),(1614,2127),(2298,3036),(3544,4208),(7029,7157)])
        self.assertEqual([c['t'] for c in e['ch'] if c.get('acao',{}).get('fim_parte')],[641,1154,1892,2556,2684])
