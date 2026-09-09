#!/usr/bin/env python3
"""Roda o scanner de segurança do PRÓPRIO Hermes Agent contra cada skill deste repositório.

Baixa `tools/skills_guard.py` da tag pinada (a versão que a instância roda) e chama `scan_skill()`
com trust `community`, que é o trust que este repositório tem em qualquer Hermes do mundo.
Falha o build se QUALQUER skill sair com veredito diferente de `safe`: em `community`, `caution`
já bloqueia a instalação, e `dangerous` bloqueia sem `--force`.

Uso:
    python3 scripts/scan_skills.py                 # baixa o guard da tag pinada
    SKILLS_GUARD_PATH=/caminho/skills_guard.py python3 scripts/scan_skills.py   # offline
Exige Python 3.10+ (o guard usa `X | None`).
"""
from __future__ import annotations

import base64
import json
import hashlib
import importlib.util
import os
import sys
import tempfile
import urllib.request
from pathlib import Path

from hub_common import GUARD_SHA256, HERMES_SHA, HERMES_TAG

GUARD_URL = f"https://raw.githubusercontent.com/NousResearch/hermes-agent/{HERMES_SHA}/tools/skills_guard.py"
ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"

if sys.version_info < (3, 10):
    sys.exit("scan_skills.py exige Python 3.10+")


def download_guard():
    try:
        with urllib.request.urlopen(GUARD_URL, timeout=30) as response:
            return response.read()
    except Exception:
        # A API de conteúdo serve o mesmo commit quando o host raw limita downloads.
        api_url = ("https://api.github.com/repos/NousResearch/hermes-agent/contents/"
                   f"tools/skills_guard.py?ref={HERMES_SHA}")
        request = urllib.request.Request(api_url, headers={"Accept": "application/vnd.github+json"})
        with urllib.request.urlopen(request, timeout=30) as response:
            payload = json.load(response)
        if payload.get("encoding") != "base64":
            raise ValueError("GitHub não retornou conteúdo em base64")
        return base64.b64decode(payload["content"])


def load_guard():
    path = os.environ.get("SKILLS_GUARD_PATH")
    if path:
        src = Path(path)
        data = src.read_bytes()
        if hashlib.sha256(data).hexdigest() != GUARD_SHA256:
            print(f"aviso: {src} não é o skills_guard.py pinado ({HERMES_TAG}); o veredito pode divergir do CI")
    else:
        try:
            data = download_guard()
        except Exception as exc:  # rede fora: falha alta e explicada, não um traceback
            sys.exit(f"não consegui baixar o skills_guard.py pinado ({GUARD_URL}): {exc}\n"
                     f"offline: SKILLS_GUARD_PATH=/caminho/skills_guard.py python3 scripts/scan_skills.py")
        got = hashlib.sha256(data).hexdigest()
        if got != GUARD_SHA256:
            sys.exit(f"skills_guard.py baixado não bate com o sha256 pinado (esperado {GUARD_SHA256[:12]}…, veio {got[:12]}…); "
                     "alguém mexeu no arquivo ou no commit. Não escaneio com código não verificado.")
        src = Path(tempfile.mkdtemp()) / "skills_guard.py"
        src.write_bytes(data)
    spec = importlib.util.spec_from_file_location("skills_guard", src)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def main() -> int:
    guard = load_guard()
    dirs = sorted(p for p in SKILLS.iterdir() if p.is_dir() and (p / "SKILL.md").exists())
    if not dirs:
        print("nenhuma skill encontrada"); return 1
    blocked = 0
    for d in dirs:
        res = guard.scan_skill(d, source="community")
        ok, reason = guard.should_allow_install(res, force=False)
        flag = "OK " if ok else "BLOQUEADA"
        print(f"{flag:9} {d.name:30} verdict={res.verdict:9} findings={len(res.findings)}")
        for f in res.findings:
            mark = "  !!" if f.severity in ("critical", "high") else "  ·"
            print(f"{mark} [{f.severity}] {f.pattern_id} {f.file}:{f.line} {f.match[:80]!r}")
        if not ok:
            blocked += 1
    print(f"\nscan: {len(dirs)} skills · {blocked} bloqueada(s) · guard {HERMES_TAG} · trust community")
    return 1 if blocked else 0


if __name__ == "__main__":
    raise SystemExit(main())
