"""Behavior of the five additional assessments; no browser dependencies in CI."""
import json
from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]
AREA = ROOT / "site/aprofundamento-humano"


class AssessmentModels(unittest.TestCase):
    def run_js(self, body):
        boot = f"""
        const fs = require('fs'), vm = require('vm'), assert = require('node:assert/strict');
        global.window = global;
        for (const file of ['learning-data.js','assessments-data.js','assessments-model.js'])
          vm.runInThisContext(fs.readFileSync({json.dumps(str(AREA))} + '/' + file, 'utf8'));
        const tests = AgentFlixAssessments, model = AgentFlixAssessmentModel;
        """
        result = subprocess.run(["node", "-e", boot + body], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_learning_preserves_all_original_words_examples_and_mappings(self):
        self.run_js("""
        const hash = require('crypto').createHash('sha256').update(JSON.stringify(AgentFlixLearningData)).digest('hex');
        assert.equal(hash, '5c319af8c003c2e82b52c60df0f345663a6e3b2ccdb33e6583ea1315eeef024b');
        """)

    def test_learning_matches_original_fixture_and_63_point_denominator(self):
        self.run_js("""
        const weights = [[9,0,4,1],[4,9,1,0],[0,4,9,1],[1,9,0,4],[9,4,0,1],[4,9,0,1],[4,1,0,9]];
        const choices = weights.map(row => [row.indexOf(0),row.indexOf(9),row.indexOf(1)]);
        const result = model.score(tests.aprendizagem, choices);
        assert.deepEqual(Object.fromEntries(result.scores.map(s => [s.key,s.raw])), {HI:24,HC:17,DI:48,DC:9});
        assert.equal(result.scores.reduce((sum,s)=>sum+s.raw,0), 98);
        assert.equal(result.scores.find(s=>s.key==='DI').percent, 76.19);
        assert.deepEqual(result.leaders, ['DI']);
        for (const row of choices) assert.equal(model.rankPoints(row).reduce((a,b)=>a+b),14);
        """)

    def test_big_five_uses_published_key_and_expected_raw_scores(self):
        self.run_js("""
        const test = tests['big-five'];
        assert.equal(test.items.length, 50);
        // Published IPIP-50 positive counts: E=5, A=6, C=6, stability=2, intellect=7.
        assert.deepEqual(model.score(test, Array(50).fill(5)).scores.map(s=>s.raw), [30,34,34,18,38]);
        assert.deepEqual(model.score(test, Array(50).fill(1)).scores.map(s=>s.raw), [30,26,26,42,22]);
        const high = model.score(test, test.items.map(item=>item.reverse ? 1 : 5));
        high.scores.forEach(s => { assert.equal(s.raw,50); assert.equal(s.mean,5); assert.equal(s.percent,100); });
        const low = model.score(test, test.items.map(item=>item.reverse ? 5 : 1));
        low.scores.forEach(s => { assert.equal(s.raw,10); assert.equal(s.percent,0); });
        """)

    def test_all_sixteen_jung_codes_and_exact_ties(self):
        self.run_js("""
        const test = tests.jung;
        for (let mask=0;mask<16;mask++) {
          const highs = test.dimensions.map((d,i)=>Boolean(mask & (1<<i)));
          const answers = test.items.map(item => {
            const high = highs[test.dimensions.findIndex(d=>d.key===item.dimension)];
            return high !== item.reverse ? 5 : 1;
          });
          const expected = test.dimensions.map((d,i)=>highs[i] ? d.highCode : d.lowCode).join('');
          assert.equal(model.score(test,answers).code,expected);
        }
        const tied = model.score(test,Array(32).fill(3));
        assert.equal(tied.code,'XXXX');
        assert.match(model.describe(test,test.dimensions[0],tied.scores[0]),/próximas ao centro/);
        """)

    def test_enneagram_all_ties_and_each_motivation_can_lead(self):
        self.run_js("""
        const test = tests.eneagrama;
        assert.equal(model.score(test,Array(36).fill(3)).leaders.length,9);
        for (const d of test.dimensions) {
          const result = model.score(test,test.items.map(item=>item.dimension===d.key?5:1));
          assert.deepEqual(result.leaders,[d.key]);
          assert.equal(result.scores.find(s=>s.key===d.key).percent,100);
        }
        """)

    def test_action_poles_are_balanced_and_reports_include_interpretation(self):
        self.run_js("""
        const test = tests.acao;
        assert.equal(test.items.length,24);
        model.score(test,Array(24).fill(5)).scores.forEach(s=>assert.equal(s.percent,50));
        const high = model.score(test,test.items.map(i=>i.reverse?1:5));
        const low = model.score(test,test.items.map(i=>i.reverse?5:1));
        high.scores.forEach(s=>assert.equal(s.percent,100));
        low.scores.forEach(s=>assert.equal(s.percent,0));
        const report = model.report(test,high);
        for (const d of test.dimensions) {
          assert.ok(report.includes(d.highText)); assert.ok(report.includes(d.practice));
        }
        assert.ok(report.includes(test.note));
        """)

    def test_incomplete_out_of_range_duplicate_and_sparse_answers_fail_closed(self):
        self.run_js("""
        for (const test of Object.values(tests)) {
          assert.throws(()=>model.score(test,[]));
          assert.throws(()=>model.score(test,Array(test.items.length)));
          for (const bad of [null,0,6,'3',NaN,Infinity,{},[0,0,1],[0,1],[0,1,4]]) {
            const answers = Array.from({length:test.items.length},()=>test.kind==='ranking'?[0,1,2]:3);
            answers[0]=bad; assert.throws(()=>model.score(test,answers));
          }
        }
        """)


if __name__ == "__main__":
    unittest.main()
