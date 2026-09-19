import json
from pathlib import Path
import subprocess
import unittest


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
AREA = SITE / "aprofundamento-humano"


class AprofundamentoHumanoTests(unittest.TestCase):
    def test_area_is_reachable_from_the_public_home(self):
        home = (SITE / "index.html").read_text()
        page = (AREA / "index.html").read_text()

        self.assertGreaterEqual(home.count('href="/aprofundamento-humano/"'), 2)
        self.assertIn('aria-current="page">Aprofundamento humano</a>', page)
        self.assertIn('<script src="../analytics.js"></script>', page)
        self.assertEqual(page.count("Disponível"), 1)

    def test_catalog_is_honest_about_available_and_future_assessments(self):
        page = (AREA / "index.html").read_text()
        for name in (
            "Perfil DISC",
            "Modos de aprendizagem",
            "Modo de agir",
            "Big Five",
            "Eneagrama",
            "MBTI",
        ):
            self.assertIn(name, page)
        self.assertIn("Em avaliação", page)
        self.assertIn("Não é diagnóstico psicológico", page)
        self.assertIn("Só neste navegador", page)

    def test_disc_keeps_the_three_round_scoring_contract(self):
        result = self.run_model(
            """
            const answers = {};
            AgentFlixDiscData.questions.forEach((question, index) => {
              if ([...question.mapping].sort().join('') !== 'CDIS') throw new Error('mapeamento inválido');
              answers[index] = { most: 0, least: 1, somewhat: 2 };
            });
            const scores = AgentFlixDiscModel.score(
              AgentFlixDiscData.questions,
              answers,
              AgentFlixDiscData.weights
            );
            console.log(JSON.stringify({
              questions: AgentFlixDiscData.questions.length,
              rounds: AgentFlixDiscData.rounds.map(round => round.id),
              weights: AgentFlixDiscData.weights,
              scores,
              total: Object.values(scores).reduce((sum, value) => sum + value, 0)
            }));
            """
        )
        self.assertEqual(result["questions"], 10)
        self.assertEqual(result["rounds"], ["most", "least", "somewhat"])
        self.assertEqual(result["weights"], {"most": 5, "least": 0, "somewhat": 2, "unselected": 3})
        self.assertEqual(result["total"], 100)
        self.assertEqual(set(result["scores"]), {"D", "I", "S", "C"})

    def test_answers_stay_in_the_browser_and_sources_compile(self):
        page = (AREA / "index.html").read_text()
        app = (AREA / "disc.js").read_text()
        self.assertIn('id="disc-form" novalidate', page)
        self.assertIn('document.createElement("fieldset")', app)
        self.assertIn("sessionStorage", app)
        self.assertNotIn("fetch(", app)
        self.assertNotIn("XMLHttpRequest", app)
        for path in sorted(AREA.glob("*.js")):
            with self.subTest(path=path.name):
                subprocess.run(["node", "--check", str(path)], check=True, capture_output=True, text=True)

    def run_model(self, body):
        script = f"""
        const fs = require('fs');
        const vm = require('vm');
        global.window = global;
        vm.runInThisContext(fs.readFileSync({json.dumps(str(AREA / 'disc-data.js'))}, 'utf8'));
        vm.runInThisContext(fs.readFileSync({json.dumps(str(AREA / 'disc-model.js'))}, 'utf8'));
        {body}
        """
        completed = subprocess.run(["node", "-e", script], check=True, capture_output=True, text=True)
        return json.loads(completed.stdout)


if __name__ == "__main__":
    unittest.main()
