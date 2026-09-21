import json
from pathlib import Path
import subprocess
import unittest


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
LAB = SITE / "laboratorio-jev"


class JevPlaygroundTests(unittest.TestCase):
    def test_public_page_has_real_editable_inputs_and_collection_entry(self):
        page = (LAB / "index.html").read_text(encoding="utf-8")
        learn = (SITE / "aprender" / "index.html").read_text(encoding="utf-8")

        self.assertIn('id="state-json"', page)
        self.assertIn('id="questions-json"', page)
        self.assertIn('id="run-request"', page)
        self.assertIn('aria-live="polite"', page)
        self.assertIn('typesafe/jev-1.13', page)
        self.assertNotIn("OPENROUTER_API_KEY", page)
        self.assertNotIn("<iframe", page)
        self.assertIn('href="/laboratorio-jev/"', learn)
        self.assertIn("JSON editável · Jev real via OpenRouter", learn)

    def test_browser_sends_the_edited_json_to_the_server(self):
        script = (LAB / "app.js").read_text(encoding="utf-8")
        self.assertIn("setEditorValue(stateEditor, characters", script)
        self.assertIn("setEditorValue(questionsEditor, defaultQuestions)", script)
        self.assertIn("body: JSON.stringify({ state, questions })", script)
        self.assertIn("fetch('/api/jev'", script)
        self.assertNotIn("mockResponse", script)
        self.assertNotIn("fakeResponse", script)

    def test_examples_have_the_canonical_houses_and_readable_json(self):
        page = (LAB / "index.html").read_text(encoding="utf-8")
        script = (LAB / "app.js").read_text(encoding="utf-8")
        styles = (LAB / "styles.css").read_text(encoding="utf-8")

        self.assertEqual(script.count('casa_confirmada: "Grifinória"'), 3)
        self.assertEqual(script.count('casa_confirmada: "Sonserina"'), 1)
        self.assertEqual(page.count('class="code-highlight" aria-hidden="true"'), 2)
        self.assertEqual(page.count("Campo variável"), 2)
        self.assertEqual(page.count("Valor preenchido"), 2)
        self.assertIn("const highlightJson", script)
        self.assertIn(".json-key { color: var(--af-link); }", styles)
        self.assertIn(".json-string { color: var(--af-warning); }", styles)

    def test_character_cards_use_distinct_customized_dicebear_vectors(self):
        page = (LAB / "index.html").read_text(encoding="utf-8")
        self.assertEqual(page.count("https://api.dicebear.com/10.x/avataaars/svg?"), 4)
        for initials in (">HG<", ">HP<", ">RW<", ">DM<"):
            self.assertNotIn(initials, page)
        for feature in ("topVariant=bigHair", "accessoriesVariant=round", "hairColor=c93305", "hairColor=e8e1e1"):
            self.assertIn(feature, page)
        self.assertIn("DiceBear Avataaars", page)

    def test_proxy_uses_the_fixed_jev_decisions_contract_without_exposing_the_key(self):
        program = r"""
          import { POST, JEV_MODEL, OPENROUTER_DECISIONS_ENDPOINT } from './site/api/jev.js';
          process.env.OPENROUTER_API_KEY = 'x'.repeat(32);
          let captured = null;
          globalThis.fetch = async (url, options) => {
            captured = {url, authorization: options.headers.authorization, body: options.body};
            return new Response(JSON.stringify({
              model: 'typesafe/jev-1.13',
              answers: {casa_hogwarts: {choice: 'Corvinal', confidence: .91, probabilities: {Corvinal: .91, Grifinoria: .09}}},
              usage: {input_tokens: 42},
              internal: 'nao deve sair'
            }), {status: 200, headers: {'content-type': 'application/json'}});
          };
          const request = new Request('https://agentsflix.ai/api/jev', {
            method: 'POST', headers: {'content-type': 'application/json'},
            body: JSON.stringify({
              state: {personagem: {nome: 'Hermione'}},
              questions: {casa_hogwarts: {type: 'choice', instructions: 'Qual casa?', criteria: {Corvinal: 'Conhecimento', Grifinoria: 'Coragem'}}}
            })
          });
          const response = await POST(request);
          process.stdout.write(JSON.stringify({
            status: response.status, result: await response.json(),
            captured: {...captured, body: JSON.parse(captured.body)},
            model: JEV_MODEL, endpoint: OPENROUTER_DECISIONS_ENDPOINT
          }));
        """
        completed = subprocess.run(
            ["node", "--input-type=module", "--eval", program],
            cwd=ROOT,
            capture_output=True,
            text=True,
        )
        self.assertEqual(completed.returncode, 0, completed.stderr)
        data = json.loads(completed.stdout)
        self.assertEqual(data["status"], 200)
        self.assertEqual(data["endpoint"], "https://openrouter.ai/api/alpha/decisions")
        self.assertEqual(data["model"], "typesafe/jev-1.13")
        self.assertEqual(data["captured"]["body"]["model"], data["model"])
        self.assertEqual(data["captured"]["authorization"], "Bearer " + "x" * 32)
        self.assertNotIn("x" * 32, json.dumps(data["captured"]["body"]))
        self.assertNotIn("internal", data["result"])

    def test_scripts_compile(self):
        for script in (LAB / "app.js", SITE / "api" / "jev.js"):
            completed = subprocess.run(
                ["node", "--check", str(script)],
                cwd=ROOT,
                capture_output=True,
                text=True,
            )
            self.assertEqual(completed.returncode, 0, completed.stderr)


if __name__ == "__main__":
    unittest.main()
