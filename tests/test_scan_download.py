import base64
import io
import json
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
if sys.version_info < (3, 10):
    raise unittest.SkipTest("Scanner exige Python 3.10+")
import scan_skills


class GuardDownloadTests(unittest.TestCase):
    def test_raw_download(self):
        with patch("urllib.request.urlopen", return_value=io.BytesIO(b"guard")) as fetch:
            self.assertEqual(scan_skills.download_guard(), b"guard")
            self.assertEqual(fetch.call_count, 1)

    def test_rate_limit_uses_same_commit_via_api(self):
        payload = json.dumps({"encoding": "base64", "content": base64.b64encode(b"guard").decode()}).encode()
        with patch("urllib.request.urlopen", side_effect=[OSError("429"), io.BytesIO(payload)]) as fetch:
            self.assertEqual(scan_skills.download_guard(), b"guard")
            self.assertTrue(fetch.call_args.args[0].full_url.endswith("/git/blobs/668c195e7d95517c169fe53e98f75affbbc395e6"))

    def test_unverified_download_is_never_loaded(self):
        with patch.dict("os.environ", {}, clear=True), patch.object(scan_skills, "download_guard", return_value=b"wrong"):
            with self.assertRaises(SystemExit):
                scan_skills.load_guard()
