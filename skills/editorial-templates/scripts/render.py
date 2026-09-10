#!/usr/bin/env python3
"""Render local editable 4:5 SVG templates. No network, image generation or approval."""
import argparse
import hashlib
import html
import json
from pathlib import Path
import re
import textwrap


def luminance(color):
    channels=[int(color[i:i+2],16)/255 for i in (1,3,5)]
    linear=[v/12.92 if v<=0.04045 else ((v+0.055)/1.055)**2.4 for v in channels]
    return sum(v*w for v,w in zip(linear,(0.2126,0.7152,0.0722)))


def render(tokens, content, output):
    if output.exists():raise ValueError('Use a new output directory for each revision: the output path already exists. Keep the existing input JSON files and choose an absent output path; the renderer creates it. Do not create that directory first or rewrite inputs to fix this error.')
    for key in ('background','foreground','accent'):
        if not re.fullmatch(r'#[0-9a-fA-F]{6}',tokens.get(key,'')):raise ValueError('Invalid color: '+key)
    for key in ('brand','font_family'):
        if not isinstance(tokens.get(key),str) or not 0<len(tokens[key])<=80:raise ValueError('Invalid '+key)
    if tokens.get('approval_status') not in ('proposed','approved'):raise ValueError('Declare proposed or approved; helper does not verify approval')
    a,b=sorted((luminance(tokens['background']),luminance(tokens['foreground'])))
    if (b+.05)/(a+.05)<4.5:raise ValueError('Text contrast must be at least 4.5:1')
    carousel=content.get('carousel')
    if not isinstance(carousel,list) or not 2<=len(carousel)<=20:raise ValueError('Carousel requires 2 to 20 cards per batch')
    if not isinstance(content.get('source_refs'),list) or not content['source_refs'] or any(not isinstance(v,str) or not v.strip() for v in content['source_refs']):raise ValueError('Provide source_refs')
    cards=[('estatica.svg',content.get('static'))]+[(f'carrossel-{i:02}.svg',card) for i,card in enumerate(carousel,1)]
    documents={}
    for name,card in cards:
        if not isinstance(card,dict) or any(not isinstance(card.get(k),str) or not card[k].strip() for k in ('title','body')):raise ValueError('Every card needs title and body')
        title=textwrap.wrap(card['title'],width=24,break_long_words=False,break_on_hyphens=False)
        body=textwrap.wrap(card['body'],width=40,break_long_words=False,break_on_hyphens=False)
        if len(title)>5 or len(body)>12 or any(len(w)>24 for w in card['title'].split()) or any(len(w)>40 for w in card['body'].split()):raise ValueError('Text exceeds layout: '+name)
        esc=html.escape
        lines=lambda rows,x,y,step:''.join(f'<tspan x="{x}" y="{y+i*step}">{esc(line)}</tspan>' for i,line in enumerate(rows))
        documents[name]=f'''<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350" role="img" aria-label="{esc(card['title'],quote=True)}">
<rect width="1080" height="1350" fill="{tokens['background']}"/>
<rect x="80" y="92" width="100" height="12" fill="{tokens['accent']}"/>
<g font-family="{esc(tokens['font_family'],quote=True)}, sans-serif" fill="{tokens['foreground']}">
<text x="80" y="155" font-size="28">{esc(tokens['brand'])}</text>
<text font-size="64" font-weight="700">{lines(title,80,285,76)}</text>
<text font-size="38">{lines(body,80,720,43)}</text>
<text x="80" y="1250" font-size="24">{esc(name[:-4])}</text>
</g></svg>'''
    output.mkdir(parents=True)
    for name,doc in documents.items():(output/name).write_text(doc)
    for name,value in [('tokens.json',tokens),('conteudo.json',content)]:
        (output/name).write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n')
    imgs=''.join(f'<figure><img src="{name}" alt="{html.escape(name)}"><figcaption>{html.escape(name)}</figcaption></figure>' for name in documents)
    (output/'galeria.html').write_text('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Revisão de templates</title><style>body{font:16px sans-serif;margin:24px;background:#ddd}main{display:flex;gap:24px;flex-wrap:wrap}figure{margin:0;width:min(360px,100%)}img{width:100%;height:auto}</style><h1>Aplicações para revisão</h1><p>A geração de arquivos não confirma aprovação visual.</p><main>'+imgs+'</main></html>')
    files={str(p.relative_to(output)):hashlib.sha256(p.read_bytes()).hexdigest() for p in output.iterdir() if p.is_file()}
    (output/'arquivos.json').write_text(json.dumps({'schema_version':1,'width':1080,'height':1350,'approval_verified':False,'files':files},indent=2)+'\n')
    return files

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--tokens',type=Path,required=True);p.add_argument('--content',type=Path,required=True);p.add_argument('--output',type=Path,required=True);a=p.parse_args()
    print(json.dumps(render(json.loads(a.tokens.read_text()),json.loads(a.content.read_text()),a.output),indent=2))
