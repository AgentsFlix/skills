#!/usr/bin/env python3
"""Verify the installed package against its distribution manifest (stdlib only)."""
import hashlib
import json
from pathlib import Path
import sys


def verify(root):
    root = Path(root)
    manifest = root / 'integrity.json'
    if manifest.is_symlink():
        raise ValueError('Symlink manifest')
    data = json.loads(manifest.read_text())
    if data.get('schema_version') != 1 or data.get('algorithm') != 'sha256' or not data.get('files'):
        raise ValueError('Invalid integrity manifest')
    for name, expected in data['files'].items():
        path = Path(name)
        if path.is_absolute() or '..' in path.parts or not path.parts or name == 'integrity.json':
            raise ValueError('Unsafe manifest path')
        cursor = root
        for part in path.parts:
            cursor /= part
            if cursor.is_symlink():
                raise ValueError('Symlink package file')
        if not cursor.is_file() or hashlib.sha256(cursor.read_bytes()).hexdigest() != expected:
            raise ValueError('Package file missing or changed: ' + name)
    actual = {p.relative_to(root).as_posix() for p in root.rglob('*')
              if p.is_file() and '__pycache__' not in p.parts and p.name != 'integrity.json'}
    if actual != set(data['files']):
        raise ValueError('Unexpected files in package; keep research outside installation')
    return {'status': 'passed', 'version': data['version'], 'files': len(actual),
            'limitation': 'Checks file consistency; trust also requires the original pinned source.'}


if __name__ == '__main__':
    try:
        print(json.dumps(verify(Path(__file__).resolve().parents[1])))
    except (ValueError, KeyError, OSError):
        print(json.dumps({'status': 'failed', 'message': 'Integrity check failed; reinstall from the pinned official source.'}))
        sys.exit(1)
