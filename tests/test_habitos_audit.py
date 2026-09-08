"""Cenários observáveis de uso, revisão e alertas do pacote de hábitos."""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from datetime import timedelta

ROOT = Path(__file__).resolve().parents[1]
PACKAGE = ROOT / 'skills/habitos-que-cabem'
spec = importlib.util.spec_from_file_location('habitos_audit', PACKAGE / 'scripts/auditar.py')
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)


class AuditTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name) / 'private'
        self.config = audit.init(self.root, '0.4.3', '1.0.0', continuous=True)
        self.t0 = audit.instant(self.config['observed_since'])
        self.doc = Path(self.tmp.name) / 'knowledge.md'
        self.doc.write_text('''---
type: Playbook
status: draft
generated: {by: 'process:test', at: '2026-01-01T00:00:00Z'}
stale_after: '2026-02-01T00:00:00Z'
agentflix: {skill_id: habitos-que-cabem, content_revision: 1.0.0}
---
Test knowledge
''')

    def event(self, event_id='e1', run_id='r1', seconds=1, **overrides):
        e = dict(schema_version=1, event_id=event_id, run_id=run_id,
                 skill_id='habitos-que-cabem', at=(self.t0 + timedelta(seconds=seconds)).isoformat(),
                 origin='human', operation='create', result='started', version='0.4.3',
                 content_revision='1.0.0', artifact_ref=None, verification='not_checked')
        e.update(overrides)
        return e

    def report(self, days=10, **kwargs):
        return audit.audit(self.root, self.doc, (self.t0 + timedelta(days=days)).isoformat(), **kwargs)

    def policy(self, **overrides):
        p = dict(inactive_days=7, personal_review_at=None, paused=False)
        p.update(overrides)
        audit.configure(self.root, p)

    def test_duplicate_event_does_not_inflate_use(self):
        e = self.event()
        self.assertTrue(audit.append(self.root, e)['stored'])
        self.assertFalse(audit.append(self.root, e)['stored'])
        self.assertEqual(self.report()['human_runs_observed'], 1)
        with self.assertRaises(ValueError):
            audit.append(self.root, dict(e, operation='review'))

    def test_wait_and_completion_are_one_run(self):
        audit.append(self.root, self.event())
        audit.append(self.root, self.event('e2', seconds=2, result='waiting'))
        audit.append(self.root, self.event('e3', seconds=3, result='completed',
                                         artifact_ref='private/card-r1.md', verification='passed'))
        report = self.report()
        self.assertEqual(report['human_runs_observed'], 1)
        self.assertEqual(report['completed_runs_observed'], 1)
        with self.assertRaises(ValueError):
            audit.append(self.root, self.event('e4', seconds=4, result='waiting'))

    def test_completion_requires_evidence_and_start(self):
        with self.assertRaises(ValueError):
            audit.append(self.root, self.event(result='completed'))
        with self.assertRaises(ValueError):
            audit.append(self.root, self.event(result='completed', artifact_ref='card.md', verification='passed'))

    def test_monitor_does_not_reset_inactivity(self):
        self.policy()
        audit.append(self.root, self.event(origin='monitor', operation='audit'))
        r = self.report()
        self.assertEqual(r['human_runs_observed'], 0)
        self.assertIsNone(r['last_human_use'])
        self.assertIn('inactive', [s['kind'] for s in r['signals']])

    def test_partial_observation_cannot_assert_inactivity(self):
        c = audit.read_json(self.root / 'config.json')
        c['observation'] = 'partial'
        (self.root / 'config.json').write_text(json.dumps(c))
        self.policy()
        self.assertNotIn('inactive', [s['kind'] for s in self.report()['signals']])

    def test_use_does_not_renew_knowledge(self):
        before = self.doc.read_bytes()
        audit.append(self.root, self.event())
        self.assertIn('knowledge_review_due', [s['kind'] for s in self.report()['signals']])
        self.assertEqual(before, self.doc.read_bytes())

    def test_ack_pause_and_new_inactivity_cause(self):
        self.policy()
        first = next(s for s in self.report()['notifications'] if s['kind'] == 'inactive')
        audit.ack(self.root, first['id'])
        self.assertNotIn(first, self.report()['notifications'])
        audit.append(self.root, self.event())
        second = next(s for s in self.report()['notifications'] if s['kind'] == 'inactive')
        self.assertNotEqual(first['id'], second['id'])
        self.policy(paused=True)
        self.assertEqual(self.report()['notifications'], [])
        self.assertTrue(self.report()['signals'])

    def test_remote_comparison_and_personal_review_are_separate(self):
        self.policy(personal_review_at=(self.t0 + timedelta(days=3)).isoformat())
        r = self.report(available_version='0.10.0')
        kinds = {s['kind'] for s in r['signals']}
        self.assertTrue({'update_available', 'personal_review_due', 'knowledge_review_due'} <= kinds)
        self.assertEqual(self.report()['remote_version'], 'not_checked')
        self.assertNotIn('update_available', [s['kind'] for s in self.report(available_version='0.4.2')['signals']])

    def test_timezone_and_exact_deadline(self):
        self.policy()
        at = (self.t0 + timedelta(days=7)).isoformat()
        before = (self.t0 + timedelta(days=7, microseconds=-1)).isoformat()
        self.assertIn('inactive', [s['kind'] for s in audit.audit(self.root, self.doc, at)['signals']])
        self.assertNotIn('inactive', [s['kind'] for s in audit.audit(self.root, self.doc, before)['signals']])
        with self.assertRaises(ValueError):
            audit.instant('2026-09-08T12:00:00')

    def test_routine_and_human_counts_remain_distinct(self):
        audit.append(self.root, self.event(origin='routine'))
        self.assertEqual(self.report()['human_runs_observed'], 0)
        self.assertEqual(self.report()['routine_runs_observed'], 1)

    def test_corrupt_history_is_not_silently_ignored(self):
        (self.root / 'events/broken.json').write_text('{')
        with self.assertRaises(ValueError):
            self.report()

    def test_no_private_state_in_git_or_package(self):
        gitroot = Path(self.tmp.name) / 'repository'
        gitroot.mkdir(); (gitroot / '.git').mkdir()
        with self.assertRaises(ValueError):
            audit.init(gitroot / 'state', '0.4.3', '1.0.0')
        with self.assertRaises(ValueError):
            audit.init(PACKAGE / 'personal', '0.4.3', '1.0.0')

    def test_reference_package_preserves_okf(self):
        fm = audit.knowledge(PACKAGE / 'references/conhecimento.okf.md')
        self.assertEqual(fm['agentflix']['content_revision'], '1.0.0')
        self.assertIn('sources', fm)
        self.assertEqual(fm['verified'], [])  # Ainda não afirma revisão humana/editorial.

    def test_old_verification_does_not_cover_new_content(self):
        text = self.doc.read_text().replace("status: draft", "status: stable\nverified: {by: 'human:reviewer', at: '2025-12-01T00:00:00Z'}")
        self.doc.write_text(text)
        report = self.report()
        self.assertIn('verification_predates_content', [s['kind'] for s in report['signals']])
        self.assertEqual(report['knowledge_verified'][0]['by'], 'human:reviewer')
        self.assertEqual(len(report['knowledge_sha256']), 64)

    def test_mutation_lock_prevents_concurrent_transition(self):
        (self.root / '.mutation-lock').mkdir()
        with self.assertRaises(ValueError):
            audit.append(self.root, self.event())
        (self.root / '.mutation-lock').rmdir()
        self.assertTrue(audit.append(self.root, self.event())['stored'])


if __name__ == '__main__':
    unittest.main()
