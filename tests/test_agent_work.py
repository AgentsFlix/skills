import argparse
from contextlib import redirect_stdout
import io
import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch

MODULE = Path(__file__).resolve().parents[1] / 'scripts/agent_work.py'
spec = importlib.util.spec_from_file_location('agent_work', MODULE)
w = importlib.util.module_from_spec(spec); spec.loader.exec_module(w)


class WorkTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(); self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name).resolve(); self.root = self.base / 'repo'
        self.remote = self.base / 'remote.git'
        w.run('git', 'init', '--bare', str(self.remote))
        w.run('git', 'init', '-b', 'main', str(self.root))
        w.git(self.root, 'config', 'user.email', 'test@example.invalid')
        w.git(self.root, 'config', 'user.name', 'Test')
        (self.root / 'a.txt').write_text('base\n'); (self.root / '.gitignore').write_text('cache/\n')
        w.git(self.root, 'add', 'a.txt', '.gitignore'); w.git(self.root, 'commit', '-m', 'base')
        w.git(self.root, 'remote', 'add', 'origin', str(self.remote)); w.git(self.root, 'push', 'origin', 'main')

    def start(self, slug='task', scope='a.txt'):
        dest = self.base / slug
        w.start(self.root, argparse.Namespace(slug=slug, agent='codex', directory=str(dest), scope=[scope]))
        return dest

    def test_start_preserves_dirty_control_and_reserves_scope(self):
        (self.root / 'a.txt').write_text('unfinished\n')
        dest = self.start()
        self.assertEqual((dest / 'a.txt').read_text(), 'base\n')
        self.assertEqual((self.root / 'a.txt').read_text(), 'unfinished\n')
        with self.assertRaises(ValueError): self.start('conflict', '.')
        self.assertFalse((self.base / 'conflict').exists())

    def test_separate_scopes_allowed(self):
        self.start(); self.start('other', 'b.txt')

    def test_status_without_registry_does_not_create_state(self):
        folder = w.common_at(self.root) / 'agent-work'
        with redirect_stdout(io.StringIO()):
            w.status(self.root)
        self.assertFalse(folder.exists())

    def test_status_preserves_registry_bytes_and_mtime(self):
        self.start()
        folder = w.common_at(self.root) / 'agent-work'
        before = {p.name: (p.read_bytes(), p.stat().st_mtime_ns) for p in folder.iterdir()}
        with redirect_stdout(io.StringIO()):
            w.status(self.root)
        after = {p.name: (p.read_bytes(), p.stat().st_mtime_ns) for p in folder.iterdir()}
        self.assertEqual(before, after)

    def test_old_record_can_still_change_scope(self):
        dest = self.start()
        with w.registry(self.root) as tasks:
            for key in ('contract_version', 'task_id', 'owner'):
                tasks['codex/task'].pop(key)
        w.scope(dest, argparse.Namespace(scope=['a.txt', 'b.txt']))
        self.assertEqual(w.read_registry(self.root)['codex/task']['scopes'], ['a.txt', 'b.txt'])

    def test_start_records_optional_external_identity(self):
        w.start(self.root, argparse.Namespace(slug='managed', agent='hermes',
                directory=str(self.base / 'managed'), scope=['a.txt'],
                task_id='AF-17', owner='af-web'))
        task = w.read_registry(self.root)['hermes/managed']
        self.assertEqual((task['contract_version'], task['task_id'], task['owner']),
                         (2, 'AF-17', 'af-web'))

    def test_check_rejects_main_and_outside_scope(self):
        with self.assertRaises(ValueError): w.check(self.root, None)
        dest = self.start(); (dest / 'b.txt').write_text('outside')
        with self.assertRaises(ValueError): w.check(dest, None)

    def test_check_rejects_stale_branch(self):
        dest = self.start()
        (self.root / 'new.txt').write_text('new')
        w.git(self.root, 'add', 'new.txt'); w.git(self.root, 'commit', '-m', 'advance'); w.git(self.root, 'push', 'origin', 'main')
        with self.assertRaises(RuntimeError): w.check(dest, None)

    def test_fetch_failure_does_not_create_worktree(self):
        w.git(self.root, 'remote', 'set-url', 'origin', str(self.base / 'missing.git'))
        with self.assertRaises(RuntimeError): self.start()
        self.assertFalse((self.base / 'task').exists())

    def test_finish_rejects_unmerged_and_ignored_files(self):
        dest = self.start(); args = argparse.Namespace(branch='codex/task', pr=1)
        real = w.run
        with patch.object(w, 'run', side_effect=lambda *a, **kw: json.dumps({'state':'OPEN'}) if a[0]=='gh' else real(*a, **kw)):
            with self.assertRaises(ValueError): w.finish(self.root, args)
        (dest / 'cache').mkdir(); (dest / 'cache/data').write_text('preserve')
        with self.assertRaises(ValueError): w.finish(self.root, args)
        self.assertTrue((dest / 'cache/data').exists())

    def test_finish_squash_archives_original_commit(self):
        dest = self.start(); (dest / 'a.txt').write_text('change\n')
        w.git(dest, 'add', 'a.txt'); w.git(dest, 'commit', '-m', 'change'); head=w.git(dest,'rev-parse','HEAD')
        w.git(self.root, 'merge', '--squash', 'codex/task'); w.git(self.root, 'commit', '-m', 'squash'); w.git(self.root, 'push', 'origin', 'main')
        merge=w.git(self.root,'rev-parse','HEAD')
        pr=dict(state='MERGED',headRefName='codex/task',headRefOid=head,baseRefName='main',mergeCommit={'oid':merge},url='https://example.invalid/pr/1')
        real=w.run
        with patch.object(w,'run',side_effect=lambda *a,**kw: json.dumps(pr) if a[0]=='gh' else real(*a,**kw)):
            w.finish(self.root,argparse.Namespace(branch='codex/task',pr=1))
        self.assertFalse(dest.exists())
        self.assertEqual(w.git(self.root,'rev-parse','refs/archive/agent-work/codex/task'),head)

    def test_scope_can_expand_but_cannot_take_another_task(self):
        dest = self.start(); self.start('other', 'b.txt')
        with self.assertRaises(ValueError):
            w.scope(dest, argparse.Namespace(scope=['a.txt', 'b.txt']))
        w.scope(dest, argparse.Namespace(scope=['a.txt', 'c.txt']))
        with w.registry(self.root) as tasks:
            self.assertEqual(tasks['codex/task']['scopes'], ['a.txt', 'c.txt'])

    def test_scope_rejects_escape(self):
        for p in ['/tmp', '../a', 'a/../../b', '.git/config', 'site/*']:
            with self.assertRaises(ValueError): w.scope_path(p)

if __name__ == '__main__': unittest.main()
