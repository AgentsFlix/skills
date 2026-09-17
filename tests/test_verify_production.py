import importlib.util
import json
from pathlib import Path
import unittest
from unittest.mock import patch


SCRIPT = Path(__file__).resolve().parents[1] / "scripts/verify_production.py"
SPEC = importlib.util.spec_from_file_location("verify_production", SCRIPT)
production = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(production)


class Response:
    def __init__(self, status, content_type, body):
        self.status = status
        self.headers = self
        self.body = body

    def get_content_type(self):
        return self.content_type

    @property
    def content_type(self):
        return self._content_type

    @content_type.setter
    def content_type(self, value):
        self._content_type = value

    def read(self):
        return self.body

    def __enter__(self):
        return self

    def __exit__(self, *_):
        return False


def response(status, content_type, body):
    item = Response(status, content_type, body)
    item.content_type = content_type
    return item


class ProductionVerificationTests(unittest.TestCase):
    def catalog(self, cover="img/cover.webp"):
        return json.dumps({"series": [{"slug": "a", "cover": cover}]}).encode()

    def site_responses(self, catalog=None, cover=b"webp"):
        return [
            response(200, "text/html", b"<html>ok</html>"),
            response(200, "application/json", catalog or self.catalog()),
            response(200, "image/webp", cover),
        ]

    def test_verifies_page_catalog_and_budgeted_cover(self):
        with patch.object(production.urllib.request, "urlopen", side_effect=self.site_responses()):
            result = production.verify_site("https://example.test")
        self.assertEqual(result["covers"], ["img/cover.webp"])

    def test_rejects_non_webp_published_cover(self):
        with patch.object(
            production.urllib.request,
            "urlopen",
            side_effect=self.site_responses(catalog=self.catalog("img/cover.png"))[:2],
        ):
            with self.assertRaisesRegex(production.VerificationError, "contrato WebP"):
                production.verify_site("https://example.test")

    def test_rejects_cover_over_budget(self):
        with patch.object(
            production.urllib.request,
            "urlopen",
            side_effect=self.site_responses(cover=b"x" * (production.MAX_COVER_BYTES + 1)),
        ):
            with self.assertRaisesRegex(production.VerificationError, "orçamento"):
                production.verify_site("https://example.test")

    def test_waits_for_vercel_until_success(self):
        status = json.dumps({"statuses": [{"context": "Vercel", "state": "success"}]}).encode()
        with patch.object(production.urllib.request, "urlopen", return_value=response(200, "application/json", status)):
            production.wait_for_vercel("AgentsFlix/skills", "a" * 40, "token", attempts=1, delay=0)

    def test_stops_when_vercel_fails(self):
        status = json.dumps({"statuses": [{"context": "Vercel", "state": "failure"}]}).encode()
        with patch.object(production.urllib.request, "urlopen", return_value=response(200, "application/json", status)):
            with self.assertRaisesRegex(production.VerificationError, "Vercel falhou"):
                production.wait_for_vercel("AgentsFlix/skills", "a" * 40, "token", attempts=1, delay=0)
