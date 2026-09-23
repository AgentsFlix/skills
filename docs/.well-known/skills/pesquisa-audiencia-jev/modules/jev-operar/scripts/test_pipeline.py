"""Offline behavioral tests: binding, validation, retry, resume and evidence retention."""
import argparse
import copy
import importlib.util
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch
from urllib.error import HTTPError

import jev_client as jev

SKILLS = Path(__file__).resolve().parents[2]


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


selector = load_module("cerne_select", SKILLS / "jev-cerne/scripts/select_comments.py")
collector = load_module("youtube_collect", SKILLS / "youtube-jev-copy/scripts/collect.py")
auditor = load_module("knowledge_audit", SKILLS / "youtube-jev-copy/scripts/audit_knowledge.py")
QUESTIONS = {"personal": {"type": "noul", "instructions": "Does the comment describe a personal experience?"},
             "detail": {"type": "score", "instructions": "How concrete is the situation?", "criteria": ["None", "Vague", "Specific", "Specific with consequence"]},
             "axis": {"type": "choice", "instructions": "What is the time focus?", "criteria": {"past": "Past", "future": "Future", "none": "No focus"}}}
RECORDS = [{"id": "one", "comment": "Thanks for the video!", "author": "SHOULD_NOT_BE_SENT"},
           {"id": "two", "comment": "After I failed that interview, I stopped applying. I want to try again."}]
DIRECT_ENDPOINT = "https://api.typesafe.ai/v1/systemone"
DIRECT_MODEL = "jev-1.13.0"
DIRECT_PROVIDER = "jevcloud_direct"
FAKE_KEY = "synthetic-test-credential-not-real-1234567890"


def response_for(payload):
    answers = {}
    for name, question in payload["questions"].items():
        kind = question["type"]
        if kind == "noul":
            answer = {"type": kind, "noul": 0.9}
        else:
            options = list(question["criteria"]) if kind == "choice" else [str(i) for i in range(len(question["criteria"]))]
            answer = {"type": kind, "confidence": 1.0, "probabilities": {option: float(i == 0) for i, option in enumerate(options)}}
            answer.update({"choice": options[0]} if kind == "choice" else {"score": 0, "legend": {str(i): v for i, v in enumerate(question["criteria"])}})
        answers[name] = answer
    return {"model": "synthetic-fixture", "answers": answers, "usage": {"input_tokens": 10, "output_tokens": 5}}


class PipelineTests(unittest.TestCase):
    def test_direct_request_uses_pinned_model_route_bearer_and_user_agent(self):
        payload = jev.build_payload(RECORDS[:1], QUESTIONS)
        expected = response_for(payload)
        with patch.object(jev, "urlopen", return_value=io.BytesIO(json.dumps(expected).encode())) as opener:
            response, timing = jev.decide(payload, FAKE_KEY)
        opener.assert_called_once()
        request = opener.call_args.args[0]
        headers = {name.lower(): value for name, value in request.header_items()}
        self.assertEqual(request.full_url, DIRECT_ENDPOINT)
        self.assertEqual(request.get_method(), "POST")
        self.assertEqual(headers["authorization"], "Bearer " + FAKE_KEY)
        self.assertEqual(headers["user-agent"], "AgentFlix-JevCloud/1.0")
        self.assertEqual(headers["content-type"], "application/json")
        self.assertEqual(json.loads(request.data)["model"], DIRECT_MODEL)
        self.assertNotIn(FAKE_KEY, request.full_url)
        self.assertNotIn(FAKE_KEY, request.data.decode())
        self.assertEqual(response, expected)
        self.assertEqual(timing["attempts"], 1)

    def test_credential_loader_reads_only_jev_field_from_synthetic_file(self):
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "synthetic-credentials.txt"
            path.write_text("# Test fixture only\nOPENROUTER_API_KEY=synthetic-other-provider-1234567890\n"
                            + "JEV_API_KEY=" + FAKE_KEY + "\n")
            self.assertEqual(jev.api_key(path), FAKE_KEY)

    def test_credential_path_resolves_overrides_without_reading_files(self):
        with tempfile.TemporaryDirectory() as temp, patch.dict(jev.os.environ, {}, clear=True), \
                patch.object(jev.Path, "home", return_value=Path(temp) / "home"):
            self.assertEqual(jev.default_credential_path(), Path(temp) / "home/.config/agentflix/jevcloud.env")
            jev.os.environ["XDG_CONFIG_HOME"] = str(Path(temp) / "xdg")
            self.assertEqual(jev.default_credential_path(), Path(temp) / "xdg/agentflix/jevcloud.env")
            explicit = Path(temp) / "custom.env"
            jev.os.environ["AGENTFLIX_JEV_CREDENTIAL_FILE"] = str(explicit)
            self.assertEqual(jev.default_credential_path(), explicit)
            explicit.write_text("JEV_API_KEY=" + FAKE_KEY + "\n")
            self.assertEqual(jev.api_key(), FAKE_KEY)
            alternate = Path(temp) / "argument.env"
            alternate.write_text("JEV_API_KEY=" + FAKE_KEY + "-argument\n")
            self.assertEqual(jev.api_key(alternate), FAKE_KEY + "-argument")

    def test_credential_loader_rejects_missing_duplicate_wrong_or_empty_field(self):
        fixtures = {
            "missing": "# no credential configured\n",
            "empty": "JEV_API_KEY=\n",
            "wrong_field": "OPENROUTER_API_KEY=" + FAKE_KEY + "\n",
            "duplicate": "JEV_API_KEY=" + FAKE_KEY + "\nJEV_API_KEY=" + FAKE_KEY + "\n",
        }
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "synthetic-credentials.txt"
            for name, contents in fixtures.items():
                with self.subTest(name=name):
                    path.write_text(contents)
                    with self.assertRaises(jev.JevError) as caught:
                        jev.api_key(path)
                    self.assertNotIn(FAKE_KEY, str(caught.exception))
            with self.assertRaises(jev.JevError):
                jev.api_key(Path(temp) / "missing-file.txt")

    def test_route_provenance_is_in_plan_manifest_receipt_and_fingerprint(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "run"
            with patch.object(jev, "api_key", side_effect=AssertionError("dry run read a credential")), \
                    patch.object(jev, "urlopen", side_effect=AssertionError("dry run used network")):
                plan = jev.run(RECORDS[:1], QUESTIONS, output)
                with patch.object(jev, "ENDPOINT", "https://different.invalid/v1/systemone"):
                    other_endpoint = jev.run(RECORDS[:1], QUESTIONS, output)
                with patch.object(jev, "PROVIDER", "different_provider"):
                    other_provider = jev.run(RECORDS[:1], QUESTIONS, output)
            self.assertNotEqual(plan["fingerprint"], other_endpoint["fingerprint"])
            self.assertNotEqual(plan["fingerprint"], other_provider["fingerprint"])
            with patch.object(jev, "api_key", return_value=FAKE_KEY), \
                    patch.object(jev, "decide", side_effect=lambda payload, key: (
                        response_for(payload), {"attempts": 1, "wall_seconds": 0.01})):
                receipt = jev.run(RECORDS[:1], QUESTIONS, output, execute=True)
            for document in [plan, jev.read_json(output / "manifest.json"), receipt,
                             jev.read_json(output / "receipt.json")]:
                self.assertEqual(document["provider"], DIRECT_PROVIDER)
                self.assertEqual(document["endpoint"], DIRECT_ENDPOINT)
                self.assertEqual(document["model"], DIRECT_MODEL)
            self.assertNotIn(FAKE_KEY, "".join(p.read_text() for p in output.iterdir()))

    def test_resume_rejects_changed_route_before_credential_or_network_and_preserves_checkpoint(self):
        for changed_field, changed_value in [("ENDPOINT", "https://different.invalid/v1/systemone"),
                                              ("PROVIDER", "different_provider")]:
            with self.subTest(field=changed_field), tempfile.TemporaryDirectory() as temp:
                output = Path(temp) / "run"
                calls = []
                def interrupt_after_first(payload, key):
                    calls.append(payload)
                    if len(calls) > 1:
                        raise jev.JevError("synthetic interruption")
                    return response_for(payload), {"attempts": 1, "wall_seconds": 0.01}
                with patch.object(jev, "api_key", return_value=FAKE_KEY), \
                        patch.object(jev, "decide", side_effect=interrupt_after_first), \
                        self.assertRaises(jev.JevError):
                    jev.run(RECORDS, QUESTIONS, output, execute=True)
                before = {p.name: p.read_bytes() for p in output.iterdir()}
                self.assertIn("checkpoint.jsonl", before)
                with patch.object(jev, changed_field, changed_value), \
                        patch.object(jev, "api_key", side_effect=AssertionError("read credential before rejecting route")) as loader, \
                        patch.object(jev, "urlopen", side_effect=AssertionError("network before rejecting route")) as opener, \
                        self.assertRaises(jev.JevError):
                    jev.run(RECORDS, QUESTIONS, output, execute=True, resume=True)
                loader.assert_not_called()
                opener.assert_not_called()
                self.assertEqual(before, {p.name: p.read_bytes() for p in output.iterdir()})

    def test_resume_rejects_legacy_openrouter_fingerprint_without_touching_evidence(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "historical-openrouter"
            legacy_fingerprint = jev.digest({"model": "typesafe/jev-1.13", "questions": QUESTIONS,
                                             "records": RECORDS, "batch_size": 1})
            jev.private_write(output / "manifest.json", {
                "model": "typesafe/jev-1.13", "fingerprint": legacy_fingerprint,
                "records": len(RECORDS), "batch_size": 1})
            jev.private_write(output / "checkpoint.jsonl", [{
                "batch_index": 0, "response": response_for(jev.build_payload(RECORDS[:1], QUESTIONS)),
                "timing": {"attempts": 1, "wall_seconds": 0.01}}], lines=True)
            before = {p.name: p.read_bytes() for p in output.iterdir()}
            with patch.object(jev, "api_key", side_effect=AssertionError("legacy resume read credential")) as loader, \
                    patch.object(jev, "urlopen", side_effect=AssertionError("legacy resume used network")) as opener, \
                    self.assertRaises(jev.JevError):
                jev.run(RECORDS, QUESTIONS, output, execute=True, resume=True)
            loader.assert_not_called()
            opener.assert_not_called()
            self.assertEqual(before, {p.name: p.read_bytes() for p in output.iterdir()})

    def test_explicit_target_and_metadata_not_transmitted(self):
        payload = jev.build_payload(RECORDS, QUESTIONS)
        self.assertIn("`records[1].comment`", payload["questions"]["r1__personal"]["instructions"])
        self.assertNotIn("SHOULD_NOT_BE_SENT", json.dumps(payload))
        reversed_payload = jev.build_payload(list(reversed(RECORDS)), QUESTIONS)
        self.assertEqual(reversed_payload["state"]["records"][0]["id"], "two")
        self.assertIn("`records[0].comment`", reversed_payload["questions"]["r0__personal"]["instructions"])

    def test_range_nan_boolean_and_missing_answers_rejected(self):
        payload = jev.build_payload(RECORDS[:1], QUESTIONS)
        for value in [True, float("nan"), 3.1, -1]:
            response = response_for(payload)
            response["answers"]["r0__detail"]["score"] = value
            with self.assertRaises(jev.JevError):
                jev.validate_response(payload, response)
        response = response_for(payload)
        del response["answers"]["r0__personal"]
        with self.assertRaises(jev.JevError):
            jev.validate_response(payload, response)

    def test_dry_run_does_not_load_credentials_or_write(self):
        with tempfile.TemporaryDirectory() as temp, patch.object(jev, "api_key", side_effect=AssertionError):
            output = Path(temp) / "run"
            result = jev.run(RECORDS, QUESTIONS, output)
            self.assertEqual(result["requests"], 2)
            self.assertFalse(output.exists())

    def test_checkpoint_resume_only_missing_batches_and_mismatch_refused(self):
        calls = []
        def decide(payload, key):
            calls.append(payload)
            if len(calls) == 2:
                raise jev.JevError("simulated interruption")
            return response_for(payload), {"attempts": 1, "wall_seconds": 0.01}
        with tempfile.TemporaryDirectory() as temp, patch.object(jev, "api_key", return_value="test-only"):
            output = Path(temp) / "run"
            with patch.object(jev, "decide", side_effect=decide), self.assertRaises(jev.JevError):
                jev.run(RECORDS, QUESTIONS, output, execute=True)
            self.assertEqual(len(jev.read_rows(output / "checkpoint.jsonl")), 1)
            with patch.object(jev, "decide", side_effect=decide):
                result = jev.run(RECORDS, QUESTIONS, output, execute=True, resume=True)
            self.assertEqual(result["resumed_batches"], 1)
            self.assertEqual(result["processed"], 2)
            self.assertEqual(len(calls), 3)
            self.assertEqual((output / "answers.jsonl").stat().st_mode & 0o777, 0o600)
            with self.assertRaises(jev.JevError):
                jev.run(list(reversed(RECORDS)), QUESTIONS, output, execute=True, resume=True)

    def test_nontransient_auth_error_not_retried(self):
        with patch.object(jev, "urlopen", side_effect=HTTPError(jev.ENDPOINT, 401, "denied", {}, None)) as opener:
            with self.assertRaises(jev.JevError):
                jev.decide(jev.build_payload(RECORDS[:1], QUESTIONS), "test-only")
            self.assertEqual(opener.call_count, 1)

    def test_timeout_retry_bounded(self):
        with patch.object(jev, "urlopen", side_effect=TimeoutError) as opener, patch.object(jev.time, "sleep"):
            with self.assertRaises(jev.JevError):
                jev.decide(jev.build_payload(RECORDS[:1], QUESTIONS), "test-only")
            self.assertEqual(opener.call_count, 3)

    def test_collector_has_no_comment_cap_and_preserves_reply_context(self):
        source = {"source_id": "aBcDeFgHiJ0", "url": "https://www.youtube.com/watch?v=aBcDeFgHiJ0", "priority": "tedx"}
        command = collector.command("yt-dlp", source, Path("/tmp/example"))
        self.assertNotIn("max_comments", " ".join(command))
        self.assertIn("--ignore-config", command)
        self.assertNotIn("--no-warnings", command)
        info = {"comments": [{"id": "a", "text": "Write me at name@example.com", "parent": "root", "author": "Private Person"},
                              {"id": "b", "text": "I felt that too", "parent": "a"}]}
        rows, provenance, coverage = collector.normalize(info, source)
        self.assertEqual(coverage["replies"], 1)
        self.assertIn("[email]", rows[1]["context"])
        self.assertNotIn("Private Person", json.dumps(rows))
        self.assertIn("lc=b", provenance[1]["comment_url_private"])
        self.assertEqual(rows[1]["parent_id"], rows[0]["id"])

    def test_collector_preserves_editorial_order_without_tedx_preference(self):
        sources = [{"url": "https://www.youtube.com/watch?v=aBcDeFgHiJ0", "priority": "other"},
                   {"url": "https://www.youtube.com/watch?v=kLmNoPqRsT1", "priority": "tedx"}]
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "sources.json"
            jev.private_write(path, sources)
            result = collector.sources_from(path)
        self.assertEqual([source["priority"] for source in result], ["other", "tedx"])

    def test_ambiguous_and_exposed_comments_go_to_review(self):
        policy = jev.read_json(SKILLS / "jev-cerne/assets/policy.json")
        selector.validate_policy(policy)
        answers = {name: {"noul": 0.1} for name in ("relevant", "lived", "needs_context", "exposure_review")}
        answers["relevant"]["noul"], answers["lived"]["noul"] = 0.6, 0.9
        self.assertEqual(selector.gate(answers, policy), "review_uncertain")
        answers["relevant"]["noul"] = 0.95
        self.assertEqual(selector.gate(answers, policy), "depth")
        answers["exposure_review"]["noul"] = 0.5
        self.assertEqual(selector.gate(answers, policy), "review_exposure")

    def test_high_voice_cannot_replace_core_evidence(self):
        policy = jev.read_json(SKILLS / "jev-cerne/assets/policy.json")
        answers = {name: {"score": 3, "confidence": 1} for name in policy["weights"]}
        answers["stakes"]["score"] = 0
        disposition, index = selector.depth_decision(answers, policy)
        self.assertEqual(disposition, "not_shortlisted")
        answers["stakes"]["score"] = 3
        answers["stakes"]["confidence"] = 0.1
        self.assertEqual(selector.depth_decision(answers, policy)[0], "review_confidence")

    def test_traceability_rejects_invented_quote_and_unknown_id(self):
        knowledge = {"references": [{"comment_id": "two", "evidence_quote_original": "I stopped applying.",
                                     "interpretation": "Avoidance after failure", "supporting_span": "I stopped applying."}],
                     "findings": [{"kind": "editorial_interpretation", "evidence_ids": ["two"], "counterevidence_ids": []}]}
        self.assertEqual(auditor.audit(RECORDS, knowledge)["status"], "passed")
        knowledge["references"][0]["evidence_quote_original"] = "I am broken forever"
        self.assertEqual(auditor.audit(RECORDS, knowledge)["status"], "failed")
        knowledge["findings"][0]["evidence_ids"] = ["missing"]
        self.assertEqual(len(auditor.audit(RECORDS, knowledge)["errors"]), 2)

    def test_failed_collection_resume_preserves_prior_evidence(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            sources = [{"url": "https://www.youtube.com/watch?v=aBcDeFgHiJ0", "priority": "tedx"}]
            jev.private_write(root / "sources.json", sources)
            sources = collector.sources_from(root / "sources.json")
            output = root / "collection"
            jev.private_write(output / "manifest.json", {"fingerprint": jev.digest(sources)})
            folder = output / "aBcDeFgHiJ0"
            jev.private_write(folder / "coverage.json", {"status": "review_warnings", "returned": 1, "collected_at": "earlier"})
            jev.private_write(folder / "corpus.jsonl", RECORDS[:1], lines=True)
            jev.private_write(folder / "provenance.jsonl", [{"id": "one"}], lines=True)
            args = argparse.Namespace(sources=root / "sources.json", output=output, execute=True, resume=True, video_timeout=10)
            def fake_run(command, **kwargs):
                return argparse.Namespace(stdout="test-version" if "--version" in command else "", stderr="ERROR: transient", returncode=1)
            with patch.object(collector.shutil, "which", return_value="yt-dlp"), patch.object(collector.subprocess, "run", side_effect=fake_run):
                result = collector.collect(args)
            self.assertEqual(result["failed_sources"], 1)
            self.assertEqual(jev.read_rows(output / "corpus.jsonl")[0]["id"], "one")
            self.assertTrue(jev.read_json(folder / "coverage.json")["retained_previous_evidence"])

    def test_two_pass_pipeline_retains_individual_evidence_and_duplicates(self):
        def fake_decide(payload, key):
            response = response_for(payload)
            for name, answer in response["answers"].items():
                if answer["type"] == "noul":
                    answer["noul"] = 0.05 if name.endswith(("needs_context", "exposure_review")) else 0.95
                if answer["type"] == "score":
                    answer["score"] = 3
                    answer["probabilities"] = {str(i): float(i == 3) for i in range(4)}
            return response, {"attempts": 1, "wall_seconds": 0.01}
        with tempfile.TemporaryDirectory() as temp, patch.object(jev, "api_key", return_value="test-only") as loader, patch.object(jev, "decide", side_effect=fake_decide):
            root = Path(temp)
            jev.private_write(root / "corpus.jsonl", [RECORDS[1], {**RECORDS[1], "id": "duplicate"}], lines=True)
            args = argparse.Namespace(corpus=root / "corpus.jsonl", output=root / "out", execute=True, resume=False, max_requests=10,
                                      triage=SKILLS / "jev-cerne/assets/triage.json", depth=SKILLS / "jev-cerne/assets/depth.json",
                                      policy=SKILLS / "jev-cerne/assets/policy.json", credential=root / "custom-synthetic.env")
            result = selector.execute(args)
            self.assertEqual(result["received"], 2)
            self.assertEqual(result["unique"], 1)
            self.assertEqual(result["depth_processed"], 1)
            self.assertEqual([call.args[0] for call in loader.call_args_list], [args.credential, args.credential])
            self.assertEqual(result["provider"], DIRECT_PROVIDER)
            self.assertEqual(result["endpoint"], DIRECT_ENDPOINT)
            receipt = jev.read_json(root / "out/receipt.json")
            for stage in ["triage", "depth"]:
                self.assertEqual(receipt["stage_receipts"][stage]["provider"], DIRECT_PROVIDER)
                self.assertEqual(receipt["stage_receipts"][stage]["endpoint"], DIRECT_ENDPOINT)
            candidate = jev.read_json(root / "out/candidates.json")[0]
            self.assertEqual(candidate["comment_original_private"], RECORDS[1]["comment"])
            self.assertIsNone(candidate["editorial_interpretation"])
            self.assertEqual(jev.read_json(root / "out/duplicates.json"), {"duplicate": "two"})


if __name__ == "__main__":
    unittest.main()
