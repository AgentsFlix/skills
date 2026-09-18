import json
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
CONTRACT_TEXT = (
    "If the user explicitly requests a positive integer, use it exactly"
)
DEFAULT_TEXT = "If no quantity is requested, default to 5 variations"
OUTPUT_TEXT = "count: Explicit user quantity; otherwise 5"


class CopyHeadlinesQuantityDistributionTest(unittest.TestCase):
    def test_contract_is_present_in_every_text_distribution(self):
        paths = [
            ROOT / "skills/copy-headlines/references/create-video-hook.md",
            ROOT / "docs/.well-known/skills/copy-headlines/references/create-video-hook.md",
            ROOT / "docs/prompt/copy-headlines.md",
        ]
        for path in paths:
            with self.subTest(path=path.relative_to(ROOT)):
                text = path.read_text(encoding="utf-8")
                self.assertIn(CONTRACT_TEXT, text)
                self.assertIn(DEFAULT_TEXT, text)
                self.assertIn(OUTPUT_TEXT, text)
                self.assertNotIn("create at least 5 hook variations", text)

    def test_main_skill_resolves_video_hook_quantity(self):
        skill = (ROOT / "skills/copy-headlines/SKILL.md").read_text(
            encoding="utf-8"
        )
        self.assertIn("## Quantity Contract for Video Hooks", skill)
        self.assertIn(
            "Se o usuário pedir uma quantidade positiva explícita, entregue exatamente essa quantidade",
            skill,
        )
        self.assertIn(
            "Se o usuário não informar quantidade, entregue exatamente 5 variações",
            skill,
        )
        self.assertIn(
            "dez manchetes na apresentação descreve `create headlines`",
            skill,
        )

    def test_catalog_points_copy_headlines_to_current_release(self):
        for path in [ROOT / "catalog.json", ROOT / "docs/catalog.json"]:
            with self.subTest(path=path.relative_to(ROOT)):
                catalog = json.loads(path.read_text(encoding="utf-8"))
                version = catalog["version"]
                skill = next(
                    item for item in catalog["skills"]
                    if item["name"] == "copy-headlines"
                )
                self.assertEqual(skill["version"], version)
                expected = f"/v{version}/skills/copy-headlines/"
                self.assertIn(expected, skill["install_url"])
                self.assertIn(expected, skill["install_cmd"])


if __name__ == "__main__":
    unittest.main()
