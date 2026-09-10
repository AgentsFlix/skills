#!/usr/bin/env python3
"""Build permanent lesson pages from approved metadata and the shared player.

Run after updating series.json; --check is also called by the test suite.
No network, media upload or publication. Only stdlib dependencies.
"""
import argparse
import html
import json
from pathlib import Path
import re
import struct

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://agentsflix.ai'


def lesson_url(slug, season, episode):
    if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', slug):
        raise ValueError('Slug de série inválido')
    if any(type(n) is not int or n < 1 for n in (season, episode)):
        raise ValueError('Temporada e episódio precisam de números positivos')
    return f'/aulas/{slug}/t{season}/e{episode}/'


def image_info(raw):
    if raw.startswith(b'\x89PNG\r\n\x1a\n') and len(raw) >= 24:
        return (*struct.unpack('>II', raw[16:24]), 'image/png')
    if raw.startswith(b'\xff\xd8'):
        i = 2
        while i + 4 <= len(raw) and raw[i] == 255:
            marker = raw[i + 1]
            size = int.from_bytes(raw[i + 2:i + 4], 'big')
            if size < 2 or i + 2 + size > len(raw):
                break
            if marker in (192, 193, 194) and size >= 7:
                height, width = struct.unpack('>HH', raw[i + 5:i + 9])
                return width, height, 'image/jpeg'
            i += 2 + size
    raise ValueError('Prévia precisa ser JPEG ou PNG válido')


def validate_preview(preview, site):
    if not isinstance(preview, dict) or preview.get('approved') is not True:
        raise ValueError('Prévia ainda não aprovada')
    for key in ('title', 'description', 'image', 'alt'):
        if not isinstance(preview.get(key), str) or not preview[key].strip():
            raise ValueError(f'Prévia sem {key}')
    path = preview['image']
    if not re.fullmatch(r'/[a-zA-Z0-9/_\-.]+\.(jpg|jpeg|png)', path) or '..' in path.split('/'):
        raise ValueError('A imagem deve ter caminho local público, sem query ou fragmento')
    file = (site / path.lstrip('/')).resolve()
    if site.resolve() not in file.parents:
        raise ValueError('Imagem fora do site')
    raw = file.read_bytes()
    if len(raw) > 1024 * 1024:
        raise ValueError('Prévia acima de 1 MB')
    width, height, mime = image_info(raw)
    if (width, height) != (1200, 630):
        raise ValueError('Prévia precisa medir 1200 × 630 px')
    return mime


def render(template, series, season, episode, site):
    preview = episode['preview']
    mime = validate_preview(preview, site)
    url = ORIGIN + episode['share_url']
    image = ORIGIN + preview['image']
    values = {
        'og:type': 'video.episode', 'og:site_name': 'AgentFlix', 'og:locale': 'pt_BR',
        'og:title': preview['title'], 'og:description': preview['description'], 'og:url': url,
        'og:image': image, 'og:image:secure_url': image, 'og:image:type': mime,
        'og:image:width': '1200', 'og:image:height': '630', 'og:image:alt': preview['alt'],
        'video:duration': str(round(episode['d'])),
    }
    esc = lambda value: html.escape(str(value), quote=True)
    tags = '\n'.join(f'    <meta property="{key}" content="{esc(value)}" />' for key, value in values.items())
    tags += '\n' + '\n'.join(f'    <meta name="twitter:{key}" content="{esc(value)}" />' for key, value in {
        'card': 'summary_large_image', 'title': preview['title'],
        'description': preview['description'], 'image': image, 'image:alt': preview['alt'],
    }.items())
    tags += f'\n    <link rel="canonical" href="{esc(url)}" />'
    tags += f'\n    <meta name="agentflix:lesson" content="{esc(series["slug"])}:t{season["n"]}:e{episode["n"]}" />'
    result = re.sub(r'<title>.*?</title>', '<title>' + esc(preview['title']) + ' | AgentFlix</title>', template, count=1)
    result = re.sub(r'<meta\s+name="description"\s+content="[^"]*"\s*/>', '<meta name="description" content="' + esc(preview['description']) + '" />', result, count=1)
    result = result.replace('<meta name="robots" content="noindex" />', '<meta name="robots" content="index,follow" />')
    result = result.replace('</head>', tags + '\n  </head>', 1)
    fallback = f'<noscript><p>{esc(episode["t"])}. Ative o JavaScript para assistir à aula.</p></noscript>'
    return '<!-- Gerado por scripts/build_lessons.py. Edite o player e series.json. -->\n' + result.replace('<body>', '<body>\n    ' + fallback, 1)


def outputs(root=ROOT, data=None):
    site = root / 'site'
    data = data or json.loads((site / 'assistir/series.json').read_text())
    legacy = set(json.loads((site / 'aulas/legacy.json').read_text()))
    template = (site / 'assistir/index.html').read_text()
    result = {}
    for series in data['series']:
        for season in series['seasons']:
            seen = set()
            for index, episode in enumerate(season['eps']):
                number = episode.get('n', index + 1)
                if number in seen:
                    raise ValueError('Numeração de episódio duplicada')
                seen.add(number)
                if not episode.get('preview'):
                    if episode['uid'] not in legacy or episode.get('share_url'):
                        raise ValueError(f'{series["slug"]} T{season["n"]} E{number}: falta prévia aprovada')
                    continue
                if episode.get('n') != number:
                    raise ValueError('Fixe o número editorial em n antes de publicar o link')
                expected = lesson_url(series['slug'], season['n'], number)
                if episode.get('share_url') != expected:
                    raise ValueError(f'Link canônico esperado: {expected}')
                path = site / expected.lstrip('/') / 'index.html'
                if path in result:
                    raise ValueError('Endereço de aula duplicado')
                result[path] = render(template, series, season, episode, site)
    return result


def build(root=ROOT, check=False):
    generated = outputs(root)
    existing = set((root / 'site/aulas').glob('*/t*/e*/index.html'))
    if existing - generated.keys():
        raise ValueError('Página órfã: reconcilie a aula antes de remover um link publicado')
    for path, content in generated.items():
        if check:
            if not path.is_file() or path.read_text() != content:
                raise ValueError(f'Página desatualizada: {path.relative_to(root)}. Rode scripts/build_lessons.py')
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content)
    return len(generated)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--root', type=Path, default=ROOT)
    args = parser.parse_args()
    print(f'{build(args.root, args.check)} página(s) de aula validadas' if args.check else f'{build(args.root)} página(s) de aula geradas')
