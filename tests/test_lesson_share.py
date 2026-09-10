"""The shared URL must describe and open the same lesson without crawler JS."""
import json
import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, parse_qs

SITE = Path(__file__).resolve().parents[1] / 'site'

class Tags(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.meta, self.links = {}, {}
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'meta':
            self.meta[attrs.get('property', attrs.get('name'))] = attrs.get('content')
        if tag == 'a' and attrs.get('id'):
            self.links[attrs['id']] = attrs.get('href')

class LessonShareTest(unittest.TestCase):
    def test_share_metadata_and_target_match_episode(self):
        data = json.loads((SITE / 'assistir/series.json').read_text())
        for series in data['series']:
            for season in series['seasons']:
                for index, episode in enumerate(season['eps']):
                    if not episode.get('share_url'):
                        continue
                    with self.subTest(episode=episode['t']):
                        url = episode['share_url']
                        self.assertTrue(url.startswith('/assistir/'))
                        page = SITE / url.lstrip('/') / 'index.html'
                        tags = Tags(page.read_text())
                        self.assertEqual(tags.meta['og:url'], 'https://agentsflix.ai' + url)
                        self.assertTrue(tags.meta['og:title'])
                        self.assertTrue(tags.meta['og:description'])
                        self.assertTrue(tags.meta['og:image:alt'])
                        image = urlsplit(tags.meta['og:image'])
                        self.assertEqual((image.scheme, image.netloc), ('https', 'agentsflix.ai'))
                        raw = (SITE / image.path.lstrip('/')).read_bytes()
                        self.assertTrue(raw.startswith(b'\xff\xd8'))
                        self.assertLess(len(raw), 1024 * 1024)
                        target = urlsplit(tags.links['watch-lesson'])
                        self.assertEqual(parse_qs(target.query)['s'], [series['slug']])
                        self.assertEqual(target.fragment, f"t{season['n']}e{episode.get('n', index+1)}")
                        self.assertTrue((SITE / target.path.lstrip('/') / 'index.html').is_file())
