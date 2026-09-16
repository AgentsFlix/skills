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
        flow = (CHAPTER / "base-editorial-flow.js").read_text(encoding="utf-8")
        self.assertRegex(flow, r'base-upload-side[\s\S]*base-fictional-action[\s\S]*Preencher com exemplo fictício')
        page = (CHAPTER / "base-editorial-page.js").read_text(encoding="utf-8")
        self.assertIn(".base-fictional:not([disabled])", page)

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

    def test_method_introduces_ecf_with_a_single_funnel(self):
        entry = (CHAPTER / "index.html").read_text(encoding="utf-8")
        style = (CHAPTER / "method.css").read_text(encoding="utf-8")

        self.assertIn('class="belief-funnel"', entry)
        self.assertIn('class="ecf-funnel"', entry)
        self.assertIn('M10 8H520L365 372H165Z', entry)
        self.assertIn('M61 128H469M112 248H418', entry)
        for stage in ("Atrair", "Creator", "Demonstrar", "Expert", "Convidar", "Founder"):
            self.assertIn(stage, entry)
        self.assertNotIn('class="belief-old"', entry)
        self.assertNotIn('class="asset-trio"', entry)
        self.assertNotIn('Mais seguidores', entry)
        self.assertNotIn('Mais curtidas', entry)

        self.assertIn(".ecf-funnel-stage img", style)
        self.assertIn(".ecf-funnel-creator", style)
        self.assertIn(".ecf-funnel-expert", style)
        self.assertIn(".ecf-funnel-founder", style)

    def test_content_lesson_has_the_communication_filter_with_local_art(self):
        entry = (CHAPTER / "index.html").read_text(encoding="utf-8")
        script = (CHAPTER / "method.js").read_text(encoding="utf-8")
        style = (CHAPTER / "method.css").read_text(encoding="utf-8")
        art = CHAPTER / "art" / "comunicacao-filtro"

        self.assertLess(entry.index('class="format-section"'), entry.index('class="communication-filter"'))
        self.assertLess(entry.index('class="communication-filter"'), entry.index('data-lesson-go="3"'))
        self.assertIn('A mesma oferta pode trazer três clientes diferentes.', entry)
        self.assertIn('Escolha uma mensagem em cada cenário e veja quem ela atrai.', entry)
        self.assertIn('const communicationScenarios=', script)
        self.assertIn('communicationFilter();', script)
        self.assertIn('aria-pressed', script)
        self.assertIn('.communication-option:focus-visible', style)
        self.assertIn('@media(max-width:900px){.communication-scenario-layout{grid-template-columns:1fr', style)
        for name in (
            'filtro_produto.png', 'filtro_comercial.png', 'filtro_cliente_ideal.png',
            'terno_produto.png', 'terno_comercial.png', 'terno_cliente_ideal.png',
            'helicoptero_produto.png', 'helicoptero_comercial.png', 'helicoptero_cliente_ideal.png',
        ):
            self.assertTrue((art / name).is_file(), name)
            self.assertIn('art/comunicacao-filtro/' + name, script)

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

    def test_each_base_stage_has_a_valid_fictional_demo_record(self):
        node = shutil.which("node")
        if not node:
            self.skipTest("Node não disponível")
        program = r'''
          const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
          const directory=process.argv[1],sandbox={TextEncoder};
          vm.runInNewContext(fs.readFileSync(directory+'/base-editorial-data.js','utf8'),sandbox);
          vm.runInNewContext(fs.readFileSync(directory+'/base-editorial-contract.js','utf8'),sandbox);
          const project={id:'demo-test',business_name:'Estúdio Aurora (exemplo)',records:{}};
          sandbox.ECFBaseStages.forEach((stage,index)=>{
            const output=sandbox.ECFBaseContract.fictional(index,project);
            assert.match(output.summary,/fictício/i);
            assert.match(output.sources[0],/Nenhuma fonte externa/i);
            assert.doesNotThrow(()=>sandbox.ECFBaseContract.parse(JSON.stringify(output),{id:project.id,business_name:project.business_name,stage:stage.id}));
          });
        '''
        subprocess.run([node, "-e", program, str(CHAPTER)], check=True)


if __name__ == "__main__":
    unittest.main()
