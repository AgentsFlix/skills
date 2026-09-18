import json
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
AGENT = SITE / "para-agente"


class ParaAgenteTests(unittest.TestCase):
    def test_home_and_agent_page_expose_the_two_audiences(self):
        home = (SITE / "index.html").read_text()
        page = (AGENT / "index.html").read_text()
        self.assertIn('class="audience-switch"', home)
        self.assertIn('href="/para-agente/"', home)
        self.assertIn('>Para humano</a>', page)
        self.assertIn('aria-current="page">Para agente</a>', page)

    def test_visible_prompt_is_identical_to_downloadable_prompt(self):
        page = (AGENT / "index.html").read_text()
        start = page.index('<code id="agent-prompt">') + len('<code id="agent-prompt">')
        end = page.index('</code></pre>', start)
        visible = page[start:end].strip()
        downloadable = (AGENT / "prompt.txt").read_text().strip()
        self.assertEqual(visible, downloadable)
        self.assertIn("https://agentsflix.ai/para-agente/manifest.json", visible)
        self.assertNotIn("/Users/", visible)
        self.assertNotIn("credentials", visible.lower())

    def test_manifest_routes_each_supported_environment_to_catalog_fields(self):
        manifest = json.loads((AGENT / "manifest.json").read_text())
        self.assertEqual(manifest["schema_version"], 1)
        self.assertEqual(manifest["scope"], "public")
        self.assertFalse(manifest["policy"]["private_repository_access"])
        self.assertFalse(manifest["policy"]["install_all_by_default"])
        targets = {target["id"]: target for target in manifest["targets"]}
        self.assertEqual(
            {target["install_field"] for target in targets.values()},
            {"install_cmd", "npx_codex", "npx_claude_code", "zip_url", "npx_any"},
        )
        self.assertEqual(targets["chatgpt"]["fallback_field"], "prompt_url")
        self.assertEqual(
            targets["hermes"]["discovery_command"],
            "hermes skills tap add AgentsFlix/skills",
        )

    def test_agent_page_has_static_content_and_accessible_controls(self):
        page = (AGENT / "index.html").read_text()
        self.assertIn('role="tablist"', page)
        self.assertEqual(page.count('role="tab"'), 5)
        self.assertIn('role="status" aria-live="polite"', page)
        self.assertIn('<h1 id="page-title">', page)
        self.assertIn('href="manifest.json"', page)
        self.assertNotIn("<iframe", page)


if __name__ == "__main__":
    unittest.main()
