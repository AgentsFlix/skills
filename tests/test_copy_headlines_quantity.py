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

    def test_catalog_points_copy_headlines_to_release_v044(self):
        for path in [ROOT / "catalog.json", ROOT / "docs/catalog.json"]:
            with self.subTest(path=path.relative_to(ROOT)):
                catalog = json.loads(path.read_text(encoding="utf-8"))
                self.assertEqual(catalog["version"], "0.4.4")
                skill = next(
                    item for item in catalog["skills"]
                    if item["name"] == "copy-headlines"
                )
                self.assertEqual(skill["version"], "0.4.4")
                self.assertIn("/v0.4.4/skills/copy-headlines/", skill["install_url"])
                self.assertIn("/v0.4.4/skills/copy-headlines/", skill["install_cmd"])


if __name__ == "__main__":
    unittest.main()
