import json
from pathlib import Path
import subprocess
import unittest


ROOT = Path(__file__).resolve().parents[1]
LOGIN = ROOT / "site" / "entrar"


class LoginTests(unittest.TestCase):
    def test_login_exposes_both_providers_and_keeps_magic_link(self):
        page = (LOGIN / "index.html").read_text(encoding="utf-8")
        self.assertIn('data-provider="google"', page)
        self.assertIn('data-provider="github"', page)
        self.assertIn('id="login-form"', page)
        self.assertIn('id="social-status"', page)
        self.assertIn('id="social-actions"', page)
        self.assertIn("mesmo e-mail cadastrado", page)
        self.assertNotIn("SUPABASE_SERVICE_ROLE_KEY", page)

    def test_scripts_are_valid_and_public_provider_status_fails_closed(self):
        for script in (LOGIN / "login.js", ROOT / "site" / "api" / "auth-providers.js"):
            checked = subprocess.run(["node", "--check", str(script)], cwd=ROOT, capture_output=True, text=True)
            self.assertEqual(checked.returncode, 0, checked.stderr)

        program = """
          import {enabledAuthProviders} from './site/api/auth-providers.js';
          const enabled = await enabledAuthProviders('https://example.supabase.co', 'public',
            async () => ({ok: true, json: async () => ({external: {google: true, github: false}})}));
          const failed = await enabledAuthProviders('https://example.supabase.co', 'public',
            async () => { throw Error('network'); });
          process.stdout.write(JSON.stringify({enabled, failed}));
        """
        checked = subprocess.run(["node", "--input-type=module", "--eval", program], cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(checked.returncode, 0, checked.stderr)
        self.assertEqual(json.loads(checked.stdout), {"enabled": ["google"], "failed": []})


if __name__ == "__main__":
    unittest.main()
