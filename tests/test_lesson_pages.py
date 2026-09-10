"""Publication gate: new videos cannot bypass permanent preview pages."""
import copy
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('build_lessons', ROOT / 'scripts/build_lessons.py')
builder = importlib.util.module_from_spec(spec)
spec.loader.exec_module(builder)

class LessonPagesTest(unittest.TestCase):
    def setUp(self):
        self.data = json.loads((ROOT / 'site/assistir/series.json').read_text())
        self.series = next(s for s in self.data['series'] if s['slug'] == 'hermes-em-operacao')
        self.season = self.series['seasons'][0]
        self.episode = self.season['eps'][0]

    def test_generated_pages_are_current(self):
        self.assertGreater(builder.build(ROOT, check=True), 0)

    def test_new_video_requires_approved_preview(self):
        for changes in ({'preview': None}, {'preview': {'approved': False}}):
            with self.subTest(changes=changes):
                new = dict(self.episode, uid='f' * 32, n=3, **changes)
                self.season['eps'].append(new)
                with self.assertRaises(ValueError):
                    builder.outputs(ROOT, self.data)
                self.season['eps'].pop()

    def test_wrong_identity_and_missing_art_rejected(self):
        for key, value in [('share_url', '/aulas/other/t1/e2/'), ('n', 0)]:
            original = self.episode[key]
            self.episode[key] = value
            with self.assertRaises(ValueError):
                builder.outputs(ROOT, self.data)
            self.episode[key] = original
        for image in ['/../private.png', 'https://other.test/preview.png', '/absent.jpg']:
            self.episode['preview']['image'] = image
            with self.assertRaises((ValueError, FileNotFoundError)):
                builder.outputs(ROOT, self.data)

    def test_media_revision_keeps_link_and_updated_metadata(self):
        url = self.episode['share_url']
        self.episode['stream_uid'] = 'a' * 32
        page = next(iter(builder.outputs(ROOT, self.data).values()))
        self.assertIn('https://agentsflix.ai' + url, page)
        self.assertIn('id="player"', page)
        self.assertIn('src="/assistir/player.js"', page)

    def test_html_escapes_approved_text(self):
        self.episode['preview']['title'] = '<script>alert("title")</script>'
        page = next(iter(builder.outputs(ROOT, self.data).values()))
        self.assertNotIn('<script>alert(', page)
        self.assertIn('&lt;script&gt;', page)

    def test_duplicate_editorial_number_rejected(self):
        self.season['eps'].append(copy.deepcopy(self.episode))
        with self.assertRaises(ValueError):
            builder.outputs(ROOT, self.data)

    def test_image_must_be_real_and_correct_size(self):
        with self.assertRaises(ValueError):
            builder.image_info(b'not a jpeg')
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / 'small.png'
            path.write_bytes(b'\x89PNG\r\n\x1a\n' + b'\x00' * 8 + (1).to_bytes(4, 'big') * 2)
            with self.assertRaises(ValueError):
                builder.validate_preview(dict(self.episode['preview'], image='/small.png'), Path(folder))
