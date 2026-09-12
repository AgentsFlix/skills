"""Build-specific deploy identifier and routing contract."""

import json
import os
from pathlib import Path
import subprocess
import unittest


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
OUTPUT = SITE / ".well-known" / "agentflix-build.json"


class BuildIdentifierTests(unittest.TestCase):
    def setUp(self):
        OUTPUT.unlink(missing_ok=True)

    def tearDown(self):
        OUTPUT.unlink(missing_ok=True)
        try:
            OUTPUT.parent.rmdir()
        except OSError:
            pass

    def run_build(self, sha=None):
        env = os.environ.copy()
        if sha is None:
            env.pop("VERCEL_GIT_COMMIT_SHA", None)
        else:
            env["VERCEL_GIT_COMMIT_SHA"] = sha
        return subprocess.run(
            ["npm", "run", "build"],
            cwd=SITE,
            env=env,
            capture_output=True,
            text=True,
        )

    def test_build_writes_only_the_valid_vercel_sha(self):
        sha = "A1b2c3d4e5f6a7b8c9d0A1b2c3d4e5f6a7b8c9d0"
        result = self.run_build(sha)

        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assertEqual(json.loads(OUTPUT.read_text()), {"sha": sha})

    def test_build_rejects_missing_or_invalid_sha_without_an_artifact(self):
        invalid_values = (None, "", "abc123", "g" * 40, "a" * 39, "a" * 41)
        for sha in invalid_values:
            with self.subTest(sha=sha):
                OUTPUT.parent.mkdir(parents=True, exist_ok=True)
                OUTPUT.write_text('{"sha":"stale"}\n')

                result = self.run_build(sha)

                self.assertNotEqual(result.returncode, 0)
                self.assertFalse(OUTPUT.exists())
                self.assertIn("40-character hexadecimal Git SHA", result.stderr)

    def test_vercel_runs_the_identifier_build(self):
        config = json.loads((SITE / "vercel.json").read_text())
        package = json.loads((SITE / "package.json").read_text())

        self.assertEqual(config["buildCommand"], "npm run build")
        self.assertEqual(package["scripts"]["build"], "node scripts/build-identifier.mjs")

    def test_exact_identifier_route_precedes_the_github_pages_fallback(self):
        config = json.loads((SITE / "vercel.json").read_text())
        rewrites = config["rewrites"]
        exact = {
            "source": "/.well-known/agentflix-build.json",
            "destination": "/.well-known/agentflix-build.json",
        }
        fallback = {
            "source": "/.well-known/:path*",
            "destination": "https://agentsflix.github.io/skills/.well-known/:path*",
        }

        self.assertIn(exact, rewrites)
        self.assertIn(fallback, rewrites)
        self.assertLess(rewrites.index(exact), rewrites.index(fallback))

    def test_generated_identifier_is_ignored(self):
        ignored = (SITE / ".gitignore").read_text().splitlines()
        self.assertIn(".well-known/agentflix-build.json", ignored)


if __name__ == "__main__":
    unittest.main()
