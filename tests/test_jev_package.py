"""Independent package releases retain their runtime and complete portable files."""
import contextlib
import copy
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
spec = importlib.util.spec_from_file_location("jev_build_docs", ROOT / "scripts/build_docs.py")
build_docs = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build_docs)
SLUG = "pesquisa-audiencia-jev"
COMPATIBILITY = "Requer agente com terminal, Python 3.10+ e rede para JevCloud. Chat sem terminal permite apenas planejamento."


class IndependentPackageBuildTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.skills = self.root / "skills"
        self.docs = self.root / "docs"
        self.dist = self.root / "dist/portable"
        self.wk = self.docs / ".well-known/skills"
        self.prompt = self.docs / "prompt"
        self.patches = patch.multiple(build_docs, ROOT=self.root, SKILLS=self.skills,
                                      DOCS=self.docs, DIST=self.dist, WK=self.wk, PROMPT=self.prompt)
        self.patches.start()
        self.addCleanup(self.patches.stop)
        self.catalog = {"version": "0.4.5", "skills": [{"name": "legacy", "version": "0.4.5"}]}
        self.write_skill("legacy", "0.4.5")

    def write_skill(self, slug, version, compatibility=None):
        folder = self.skills / slug
        (folder / "references").mkdir(parents=True)
        fm = {"name": slug, "description": "Pesquisa rastreável com instruções explícitas e fontes verificáveis.",
              "version": version, "license": "MIT", "author": "AgentFlix"}
        if compatibility:
            fm["compatibility"] = compatibility
        activation = "Ative " + slug + " e confira o ambiente antes de executar."
        (folder / "references/ativacao.md").write_text(activation + "\n")
        identity = {"skill_id": slug, "distribution_version": version,
                    "distribution_ref": (slug + "-v" + version) if slug == SLUG else "v" + version,
                    "contract_version": "1.0.0", "content_revision": "2026-09-23"}
        (folder / "references/identidade.json").write_text(json.dumps(identity))
        body = "\n# Pesquisa\n\n## Arquivos desta skill\n\n- `references/ativacao.md`\n- `references/identidade.json`\n"
        (folder / "SKILL.md").write_text(build_docs.dump_fm(fm) + body)
        return folder

    def build(self):
        (self.root / "catalog.json").write_text(json.dumps(self.catalog))
        with contextlib.redirect_stdout(io.StringIO()):
            build_docs.main()
        self.catalog = json.loads((self.root / "catalog.json").read_text())

    def add_package(self):
        folder = self.write_skill(SLUG, "1.0.0", COMPATIBILITY)
        module = folder / "modules/jev-operar"
        (module / "scripts").mkdir(parents=True)
        (module / "GUIDE.md").write_text("# Operação\n")
        (module / "scripts/client.py").write_text("# Offline fixture; no credentials.\n")
        self.catalog["packages"] = [{"name": SLUG, "version": "1.0.0", "activation_prompt": "stale", "chat_cmd": "stale"}]

    def test_independent_version_and_runtime_survive_all_distributions(self):
        self.add_package()
        self.build()
        for folder in (self.dist / SLUG, self.wk / SLUG):
            fm, _ = build_docs.split((folder / "SKILL.md").read_text())
            self.assertEqual(fm["metadata"]["version"], "1.0.0")
            self.assertEqual(fm["compatibility"], COMPATIBILITY)
            self.assertIn("/pesquisa-audiencia-jev-v1.0.0/", fm["metadata"]["source"])
            self.assertTrue((folder / "modules/jev-operar/scripts/client.py").exists())
        index = json.loads((self.wk / "index.json").read_text())
        entry = next(item for item in index["skills"] if item["name"] == SLUG)
        self.assertIn("modules/jev-operar/GUIDE.md", entry["files"])
        self.assertIn("Versão 1.0.0.", (self.prompt / (SLUG + ".md")).read_text())
        with ZipFile(self.docs / "packages" / (SLUG + ".zip")) as archive:
            expected = {SLUG + "/" + p.relative_to(self.wk / SLUG).as_posix(): p.read_bytes()
                        for p in (self.wk / SLUG).rglob("*") if p.is_file()}
            self.assertEqual(set(archive.namelist()), set(expected))
            for name, content in expected.items():
                self.assertEqual(archive.read(name), content)
            self.assertEqual(sum(name.endswith("/SKILL.md") for name in archive.namelist()), 1)

    def test_adding_package_preserves_legacy_catalog_and_artifacts(self):
        self.build()
        original_skills = copy.deepcopy(self.catalog["skills"])
        portable = (self.wk / "legacy/SKILL.md").read_bytes()
        archive = (self.docs / "packages/legacy.zip").read_bytes()
        prompt = (self.prompt / "legacy.md").read_bytes()
        self.add_package()
        self.build()
        self.assertEqual(self.catalog["version"], "0.4.5")
        self.assertEqual(self.catalog["skills"], original_skills)
        self.assertEqual((self.wk / "legacy/SKILL.md").read_bytes(), portable)
        self.assertEqual((self.docs / "packages/legacy.zip").read_bytes(), archive)
        self.assertEqual((self.prompt / "legacy.md").read_bytes(), prompt)

    def test_package_activation_is_synchronized_and_build_is_reproducible(self):
        self.add_package()
        self.build()
        activation = (self.skills / SLUG / "references/ativacao.md").read_text().strip()
        entry = self.catalog["packages"][0]
        self.assertEqual(entry["activation_prompt"], activation)
        self.assertEqual(entry["chat_cmd"], activation)
        self.assertEqual(entry["prompt_truncated"], [])
        self.assertEqual(self.catalog, json.loads((self.docs / "catalog.json").read_text()))
        before = {p.relative_to(self.root).as_posix(): p.read_bytes()
                  for p in self.docs.rglob("*") if p.is_file()}
        self.build()
        after = {p.relative_to(self.root).as_posix(): p.read_bytes()
                 for p in self.docs.rglob("*") if p.is_file()}
        self.assertEqual(before, after)

    def test_mismatched_package_identity_fails(self):
        self.add_package()
        self.catalog["packages"][0]["version"] = "1.0.1"
        with self.assertRaisesRegex(ValueError, "Identidade/versão diverge"):
            self.build()

    def test_spec_metadata_author_and_tags_survive_conversion(self):
        fm = {"name": SLUG, "description": "Pesquisa de audiência rastreável.",
              "metadata": {"author": "AgentFlix", "tags": "pesquisa, jev"}}
        converted = build_docs.strict_frontmatter(fm, SLUG, "1.0.0")
        self.assertEqual(converted["metadata"]["author"], "AgentFlix")
        self.assertEqual(converted["metadata"]["tags"], "pesquisa, jev")

    def test_integrity_hashes_final_portable_bytes_and_excludes_caches(self):
        self.add_package()
        package = self.skills / SLUG
        (package / "integrity.json").write_text('{"stale": true}')
        cache = package / "modules/jev-operar/scripts/__pycache__"
        cache.mkdir()
        (cache / "client.pyc").write_bytes(b"cache")
        (package / "leftover.pyc").write_bytes(b"cache")
        self.build()
        manifest = json.loads((self.wk / SLUG / "integrity.json").read_text())
        self.assertEqual(manifest["schema_version"], 1)
        self.assertEqual(manifest["version"], "1.0.0")
        self.assertEqual(manifest["algorithm"], "sha256")
        expected = {p.relative_to(self.wk / SLUG).as_posix(): hashlib.sha256(p.read_bytes()).hexdigest()
                    for p in (self.wk / SLUG).rglob("*")
                    if p.is_file() and p.name != "integrity.json"}
        self.assertEqual(manifest["files"], expected)
        self.assertNotIn("integrity.json", manifest["files"])
        self.assertFalse(any("__pycache__" in name or name.endswith(".pyc") for name in expected))
        original_hash = hashlib.sha256((package / "SKILL.md").read_bytes()).hexdigest()
        self.assertNotEqual(manifest["files"]["SKILL.md"], original_hash)

    def test_duplicate_name_across_collections_fails_before_deleting_output(self):
        self.build()
        preserved = (self.wk / "legacy/SKILL.md").read_bytes()
        self.catalog["packages"] = [{"name": "legacy", "version": "1.0.0"}]
        with self.assertRaisesRegex(ValueError, "Nome repetido"):
            self.build()
        self.assertEqual((self.wk / "legacy/SKILL.md").read_bytes(), preserved)


class PublishedJevPackageTests(unittest.TestCase):
    def test_pinned_identity_runtime_and_activation_match_catalog(self):
        catalog = json.loads((ROOT / "catalog.json").read_text())
        entry = next(item for item in catalog["packages"] if item["name"] == SLUG)
        self.assertNotIn(SLUG, [item["name"] for item in catalog["skills"]])
        self.assertEqual(entry["version"], "1.0.0")
        self.assertTrue(entry["runtime_only"])
        self.assertTrue(entry["discovery_only"])
        package = ROOT / "skills" / SLUG
        identity = json.loads((package / "references/identidade.json").read_text())
        self.assertEqual(identity["distribution_version"], entry["version"])
        self.assertEqual(identity["distribution_ref"], SLUG + "-v1.0.0")
        activation = (package / "references/ativacao.md").read_text().strip()
        self.assertEqual(entry["activation_prompt"], activation)
        self.assertEqual(entry["chat_cmd"], activation)
        for field in ("install_url", "github_url", "prompt_url", "zip_url"):
            self.assertIn("/" + identity["distribution_ref"] + "/", entry[field])
        portable = ROOT / "docs/.well-known/skills" / SLUG
        source_fm, _ = build_docs.split((package / "SKILL.md").read_text())
        portable_fm, _ = build_docs.split((portable / "SKILL.md").read_text())
        self.assertEqual(portable_fm["compatibility"], source_fm["compatibility"])
        self.assertEqual(portable_fm["metadata"]["version"], entry["version"])
        self.assertEqual(portable_fm["metadata"]["author"], "AgentFlix")
        self.assertEqual(portable_fm["metadata"]["tags"], source_fm["metadata"]["tags"])
        self.assertIn("terminal", portable_fm["compatibility"])

    def test_real_zip_is_complete_and_manifests_hash_each_distribution(self):
        package = ROOT / "skills" / SLUG
        portable = ROOT / "docs/.well-known/skills" / SLUG
        with ZipFile(ROOT / "docs/packages" / (SLUG + ".zip")) as archive:
            expected = {SLUG + "/" + p.relative_to(portable).as_posix(): p.read_bytes()
                        for p in portable.rglob("*") if p.is_file()}
            self.assertEqual(set(archive.namelist()), set(expected))
            for name, content in expected.items():
                self.assertEqual(archive.read(name), content, name)
        for directory in (package, portable):
            manifest = json.loads((directory / "integrity.json").read_text())
            expected = {p.relative_to(directory).as_posix(): hashlib.sha256(p.read_bytes()).hexdigest()
                        for p in directory.rglob("*") if p.is_file() and p.name != "integrity.json"}
            self.assertEqual(manifest["files"], expected)
            self.assertEqual(manifest["version"], "1.0.0")
            self.assertEqual(manifest["algorithm"], "sha256")
        self.assertNotEqual(json.loads((package / "integrity.json").read_text())["files"]["SKILL.md"],
                            json.loads((portable / "integrity.json").read_text())["files"]["SKILL.md"])

    def test_modules_are_included_with_one_entrypoint_and_no_local_history(self):
        for directory in (ROOT / "skills" / SLUG, ROOT / "docs/.well-known/skills" / SLUG):
            self.assertEqual(list(directory.rglob("SKILL.md")), [directory / "SKILL.md"])
            for module in ("jev-operar", "jev-cerne", "jev-copy-cambiador", "youtube-jev-copy"):
                self.assertTrue((directory / "modules" / module / "GUIDE.md").is_file())
            for path in directory.rglob("*"):
                self.assertNotEqual(path.name, "__pycache__")
                self.assertNotEqual(path.name, "persona-sources.json")
                self.assertFalse(path.name.startswith("experience-"))
                if path.is_file():
                    self.assertFalse(path.name.startswith("test_"), path)
                    content = path.read_text(encoding="utf-8")
                    self.assertNotIn("/Users/", content, path)
                    self.assertNotIn(".codex/skills", content, path)


if __name__ == "__main__":
    unittest.main()
