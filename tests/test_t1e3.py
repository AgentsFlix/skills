"""Behavioral contract for Hermes em Operação T1E3."""
import json
import re
import shutil
import subprocess
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CHAPTER = ROOT / "site/assistir/hermes-em-operacao/t1e3"


class HermesOperationT1E3(unittest.TestCase):
    def test_catalog_registers_chapter_three(self):
        data = json.loads((ROOT / "site/assistir/series.json").read_text(encoding="utf-8"))
        series = next(item for item in data["series"] if item["slug"] == "hermes-em-operacao")
        chapters = series["seasons"][0]["atividades"]
        self.assertEqual([item["n"] for item in chapters], [2, 3])
        chapter = chapters[-1]
        self.assertEqual(chapter["url"], "hermes-em-operacao/t1e3/")
        self.assertEqual(chapter["partes"], 5)
        self.assertIn("dashboard", chapter["t"].lower())

    def test_complete_journey_is_inside_chapter(self):
        expected = {
            "index.html", "prompt.md", "model.js", "native.js", "import.js", "ecf.js", "method.js",
            "base-editorial.html", "base-editorial-flow.js", "base-editorial-dashboard.js",
            "base-conhecimento-social-media.html", "minha-marca.html", "chapter-handoff.js",
        }
        self.assertTrue(expected.issubset({path.name for path in CHAPTER.iterdir()}))
        entry = (CHAPTER / "index.html").read_text(encoding="utf-8")
        self.assertIn("HERMES EM OPERAÇÃO · CAPÍTULO 3", entry)
        self.assertIn("Conheça o método", entry)
        self.assertIn("Gerar meu prompt", entry)
        self.assertIn("Gerar análise e conferir scores", entry)
        script = (CHAPTER / "ecf.js").read_text(encoding="utf-8")
        self.assertIn("Construir minha Base ECF", script)
        self.assertIn("href=\"base-editorial.html\"", script)
        base = (CHAPTER / "base-editorial.html").read_text(encoding="utf-8")
        self.assertIn("chapter-handoff.js", base)
        self.assertIn("base-editorial-dashboard.js", base)

    def test_method_navigation_separates_journey_from_local_chapters(self):
        entry = (CHAPTER / "index.html").read_text(encoding="utf-8")
        style = (CHAPTER / "method.css").read_text(encoding="utf-8")
        script = (CHAPTER / "method.js").read_text(encoding="utf-8")

        self.assertLess(entry.index('class="steps"'), entry.index('class="lesson-rail"'))
        self.assertIn('class="lesson-rail-summary"', entry)
        self.assertIn('id="lesson-current"', entry)
        self.assertIn('id="lesson-label"', entry)
        self.assertIn('id="lesson-progress"', entry)
        self.assertEqual(entry.count('data-lesson="'), 4)

        self.assertIn("position:sticky", style)
        self.assertIn("@media(max-width:900px)", style)
        self.assertIn("@media(max-width:560px)", style)
        self.assertIn("border-radius:10px", style)

        self.assertIn("const labels=['A história','As três moedas','O conteúdo','O raio-x']", script)
        self.assertIn("String(n+1).padStart(2,'0')", script)
        self.assertIn("(n+1)+' de 4 capítulos'", script)

    def test_diagnosis_handoff_keeps_only_safe_summary(self):
        diagnosis = (CHAPTER / "ecf.js").read_text(encoding="utf-8")
        handoff = (CHAPTER / "chapter-handoff.js").read_text(encoding="utf-8")
        self.assertIn("version:1,method:'ecf-zernio-v4',axes", diagnosis)
        self.assertNotIn("account_id", handoff)
        self.assertNotIn("posts", handoff)
        self.assertIn("validSummary(summary)", handoff)
        self.assertIn("saveDiagnosis(summary)", handoff)
        self.assertIn("sessionStorage.removeItem(key)", handoff)

    def test_local_page_assets_exist(self):
        for html_file in CHAPTER.glob("*.html"):
            source = html_file.read_text(encoding="utf-8")
            for value in re.findall(r'(?:src|href)="([^"#?]+)', source):
                if value.startswith(("http://", "https://", "/")) or value in {"../../", "../../../clipboard.js"}:
                    continue
                path = (html_file.parent / value).resolve()
                self.assertTrue(path.is_file(), f"{html_file.name}: referência local ausente: {value}")

    def test_chapter_scripts_parse(self):
        node = shutil.which("node")
        if not node:
            self.skipTest("Node não disponível")
        for script in CHAPTER.glob("*.js"):
            subprocess.run([node, "--check", str(script)], check=True)


if __name__ == "__main__":
    unittest.main()
