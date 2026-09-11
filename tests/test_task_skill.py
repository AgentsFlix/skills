import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("install_task_skill", ROOT / "scripts/install_task_skill.py")
installer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(installer)


class InstallTaskSkillTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.source = self.base / "source"
        for name in installer.FILES:
            path = self.source / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes((installer.SOURCE / name).read_bytes())
        self.target = self.base / "skills/task"

    def test_install_is_portable_and_idempotent(self):
        self.assertEqual(installer.install(self.source, self.target), "instalada")
        self.assertEqual(installer.install(self.source, self.target), "atual")
        for name in installer.FILES:
            self.assertEqual((self.source / name).read_bytes(), (self.target / name).read_bytes())
        self.assertFalse(self.target.is_symlink())
        self.assertEqual(installer.install(self.source, self.target, check=True), "atual")

    def test_check_does_not_create_directories(self):
        with self.assertRaises(ValueError):
            installer.install(self.source, self.target, check=True)
        self.assertFalse(self.target.parent.exists())

    def test_update_untouched_managed_copy(self):
        installer.install(self.source, self.target)
        (self.source / "SKILL.md").write_text("nova versão\n")
        self.assertEqual(installer.install(self.source, self.target), "instalada")
        self.assertEqual((self.target / "SKILL.md").read_text(), "nova versão\n")
        receipt = json.loads((self.target / installer.MARKER).read_text())
        self.assertEqual(receipt["files"], installer.fingerprints(self.target))

    def test_preserves_local_edits_and_extra_files(self):
        installer.install(self.source, self.target)
        original = (self.target / "SKILL.md").read_bytes()
        (self.target / "SKILL.md").write_text("minha edição")
        with self.assertRaises(ValueError):
            installer.install(self.source, self.target)
        self.assertEqual((self.target / "SKILL.md").read_text(), "minha edição")
        (self.target / "SKILL.md").write_bytes(original)
        extra = self.target / "rascunho.md"
        extra.write_text("trabalho pendente")
        with self.assertRaises(ValueError):
            installer.install(self.source, self.target)
        self.assertEqual(extra.read_text(), "trabalho pendente")

    def test_preserves_unmanaged_skill(self):
        self.target.mkdir(parents=True)
        (self.target / "SKILL.md").write_text("outra skill task")
        with self.assertRaises(ValueError):
            installer.install(self.source, self.target)
        self.assertEqual((self.target / "SKILL.md").read_text(), "outra skill task")

    def test_preserves_symlink_target(self):
        self.target.parent.mkdir(parents=True)
        self.target.symlink_to(self.source, target_is_directory=True)
        with self.assertRaises(ValueError):
            installer.install(self.source, self.target)
        self.assertTrue(self.target.is_symlink())

    def test_failed_replacement_restores_installed_copy(self):
        installer.install(self.source, self.target)
        original = (self.target / "SKILL.md").read_bytes()
        (self.source / "SKILL.md").write_text("atualização")
        rename = Path.rename

        def fail_stage(path, target):
            if path.name == "new":
                raise OSError("falha simulada na troca")
            return rename(path, target)

        with patch.object(Path, "rename", fail_stage), self.assertRaises(OSError):
            installer.install(self.source, self.target)
        self.assertEqual((self.target / "SKILL.md").read_bytes(), original)


if __name__ == "__main__":
    unittest.main()
