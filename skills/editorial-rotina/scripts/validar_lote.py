#!/usr/bin/env python3
"""Read-only local batch validation. Never authorizes or performs activation."""
import argparse
import hashlib
import json
from pathlib import Path


def validate(root,data):
    root=root.resolve();errors=[];hashes={};pending=[];ids=set();formats=set()
    if data.get('schema_version')!=1:errors.append('Unsupported schema_version')
    if data.get('enabled') is not False:errors.append('Preparation requires enabled=false')
    def file(ref,label):
        if not isinstance(ref,str) or not ref or Path(ref).is_absolute() or '..' in Path(ref).parts:
            errors.append(label+': expected relative path');return
        p=root/ref
        if not p.resolve().is_relative_to(root) or p.is_symlink() or not p.is_file():
            errors.append(label+': file missing or outside root');return
        hashes[ref]=hashlib.sha256(p.read_bytes()).hexdigest()
    pieces=data.get('pieces')
    if not isinstance(pieces,list):pieces=[];errors.append('pieces must be a list')
    for piece in pieces:
        if not isinstance(piece,dict):errors.append('Invalid piece');continue
        pid=piece.get('id')
        if not isinstance(pid,str) or not pid or pid in ids:errors.append('Invalid or duplicate piece id')
        else:ids.add(pid)
        form=piece.get('format');formats.add(form) if isinstance(form,str) else None
        if form not in ('static','carousel'):errors.append('Invalid format')
        files=piece.get('files')
        if not isinstance(files,list) or not files:errors.append('Missing files');files=[]
        if form=='carousel' and len(files)<2:errors.append('Carousel requires at least two cards')
        for ref in files:file(ref,'piece file')
        file(piece.get('source_ref'),'source_ref');file(piece.get('template_ref'),'template_ref')
        state=piece.get('status')
        if state not in ('draft','review','approved'):errors.append('Invalid piece status')
        if state=='approved':file(piece.get('approval_ref'),'approval_ref')
        else:pending.append({'id':pid,'reason':'Human approval not recorded'})
    if not {'static','carousel'}.issubset(formats):errors.append('Test batch requires static and carousel')
    return {'schema_version':1,'valid':not errors,'ready_for_human_review':not errors,'activation_authorized':False,'errors':errors,'pending':pending,'hashes':hashes,'limits':'Structural and file integrity checks only; does not verify content, render, human approval or external APIs.'}

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--root',type=Path,required=True);p.add_argument('--manifest',type=Path,required=True);a=p.parse_args()
    result=validate(a.root,json.loads(a.manifest.read_text()));print(json.dumps(result,ensure_ascii=False,indent=2));raise SystemExit(0 if result['valid'] else 1)
