#!/usr/bin/env python3
"""Confere a entrega em produção do player AgentFlix sem credenciais.

Uso local ou no GitHub Actions:
  python3 scripts/verify_production.py
  python3 scripts/verify_production.py --wait-vercel --repository AgentsFlix/skills \
      --commit SHA --github-token "$GITHUB_TOKEN"
"""
from __future__ import annotations

import argparse
import json
import time
import urllib.error
import urllib.parse
import urllib.request


DEFAULT_BASE_URL = "https://agentsflix.ai"
MAX_COVER_BYTES = 400 * 1024


class VerificationError(RuntimeError):
    """A entrega pública não atende ao contrato mínimo do player."""


def request(url, *, headers=None, timeout=20):
    try:
        with urllib.request.urlopen(
            urllib.request.Request(url, headers=headers or {}), timeout=timeout
        ) as response:
            return response.status, response.headers.get_content_type(), response.read()
    except urllib.error.HTTPError as exc:
        body = exc.read()
        return exc.code, exc.headers.get_content_type(), body
    except urllib.error.URLError as exc:
        raise VerificationError(f"rede indisponível em {url}: {exc.reason}") from exc


def require_response(url, expected_type, *, max_bytes=None):
    status, content_type, body = request(url)
    if status != 200:
        raise VerificationError(f"{url}: HTTP {status}")
    if content_type != expected_type:
        raise VerificationError(f"{url}: MIME {content_type!r}, esperado {expected_type!r}")
    if not body:
        raise VerificationError(f"{url}: resposta vazia")
    if max_bytes is not None and len(body) > max_bytes:
        raise VerificationError(
            f"{url}: {len(body)} bytes excedem o orçamento de {max_bytes} bytes"
        )
    return body


def published_covers(catalog):
    covers = set()
    for series in catalog.get("series", []):
        if series.get("catalogo", True) is False:
            continue
        for field in ("cover", "cover_wide", "cover_mobile"):
            relative = series.get(field)
            if relative:
                covers.add(relative)
    if not covers:
        raise VerificationError("catálogo não possui capas de séries publicadas")
    return sorted(covers)


def verify_site(base_url=DEFAULT_BASE_URL):
    base = base_url.rstrip("/")
    require_response(f"{base}/assistir/", "text/html")
    raw_catalog = require_response(f"{base}/assistir/series.json", "application/json")
    try:
        catalog = json.loads(raw_catalog)
    except json.JSONDecodeError as exc:
        raise VerificationError("series.json não é JSON válido em produção") from exc

    checked = []
    for relative in published_covers(catalog):
        if not relative.startswith("img/") or not relative.endswith(".webp"):
            raise VerificationError(f"capa publicada fora do contrato WebP: {relative}")
        url = urllib.parse.urljoin(f"{base}/assistir/", relative)
        require_response(url, "image/webp", max_bytes=MAX_COVER_BYTES)
        checked.append(relative)
    return {"base_url": base, "covers": checked}


def vercel_state(repository, commit, token):
    if not token:
        raise VerificationError("--github-token é obrigatório com --wait-vercel")
    url = f"https://api.github.com/repos/{repository}/commits/{commit}/status"
    status, content_type, body = request(
        url,
        headers={
            "Accept": "application/vnd.github+json",
            "Authorization": f"Bearer {token}",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    )
    if status != 200 or content_type != "application/json":
        raise VerificationError(f"não foi possível ler o status do commit {commit}: HTTP {status}")
    try:
        statuses = json.loads(body).get("statuses", [])
    except json.JSONDecodeError as exc:
        raise VerificationError("GitHub devolveu status inválido") from exc
    vercel = [item.get("state") for item in statuses if item.get("context") == "Vercel"]
    if not vercel:
        return "pending"
    if "failure" in vercel or "error" in vercel:
        return "failure"
    return "success" if "success" in vercel else "pending"


def wait_for_vercel(repository, commit, token, *, attempts=30, delay=10):
    for attempt in range(attempts):
        state = vercel_state(repository, commit, token)
        if state == "success":
            return
        if state == "failure":
            raise VerificationError(f"Vercel falhou para o commit {commit}")
        if attempt + 1 < attempts:
            time.sleep(delay)
    raise VerificationError(f"Vercel não confirmou o deploy do commit {commit} a tempo")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", default=DEFAULT_BASE_URL)
    parser.add_argument("--wait-vercel", action="store_true")
    parser.add_argument("--repository")
    parser.add_argument("--commit")
    parser.add_argument("--github-token")
    parser.add_argument("--attempts", type=int, default=30)
    parser.add_argument("--delay", type=int, default=10)
    args = parser.parse_args()
    try:
        if args.wait_vercel:
            if not args.repository or not args.commit:
                raise VerificationError("--repository e --commit são obrigatórios com --wait-vercel")
            wait_for_vercel(
                args.repository,
                args.commit,
                args.github_token,
                attempts=args.attempts,
                delay=args.delay,
            )
        result = verify_site(args.base_url)
    except VerificationError as exc:
        parser.exit(1, f"verificação de produção: {exc}\n")
    print(f"produção verificada: {len(result['covers'])} capas em {result['base_url']}")


if __name__ == "__main__":
    main()
