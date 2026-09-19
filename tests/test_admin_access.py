from pathlib import Path
import subprocess
import unittest


ROOT = Path(__file__).resolve().parents[1]
ADMIN = ROOT / "site" / "admin" / "acessos"
ACCOUNT = ROOT / "site" / "conta"


class AdminAccessExportTests(unittest.TestCase):
    def test_admin_route_has_all_public_states_and_actions(self):
        page = (ADMIN / "index.html").read_text(encoding="utf-8")
        script = (ADMIN / "admin-access.js").read_text(encoding="utf-8")

        for element_id in (
            "signed-out-state",
            "forbidden-state",
            "admin-state",
            "user-search",
            "user-results",
            "product-list",
            "history-list",
        ):
            self.assertIn(f'id="{element_id}"', page)

        for rpc in (
            "is_profile_admin",
            "admin_search_access_users",
            "admin_access_products",
            "admin_user_entitlements",
            "admin_access_history",
            "grant_product_access",
            "revoke_product_access",
        ):
            self.assertIn(f'client.rpc("{rpc}"', script)

        self.assertIn("requested_user_id: selectedUser.user_id", script)
        self.assertIn("Confirmar revogação", script)
        self.assertNotIn("SUPABASE_SERVICE_ROLE_KEY", page + script)
        self.assertNotIn("innerHTML", script)

    def test_account_only_reveals_admin_link_for_admin_profile(self):
        page = (ACCOUNT / "index.html").read_text(encoding="utf-8")
        script = (ACCOUNT / "account.js").read_text(encoding="utf-8")

        self.assertIn('id="admin-access-link"', page)
        self.assertIn('href="/admin/acessos/"', page)
        self.assertIn('profile.role !== "admin"', script)
        self.assertIn('.select("name,email,phone,role")', script)

    def test_exported_javascript_is_valid(self):
        for script in (ADMIN / "admin-access.js", ACCOUNT / "account.js"):
            completed = subprocess.run(
                ["node", "--check", str(script)],
                cwd=ROOT,
                capture_output=True,
                text=True,
            )
            self.assertEqual(completed.returncode, 0, completed.stderr)


if __name__ == "__main__":
    unittest.main()
