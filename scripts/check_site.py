#!/usr/bin/env python3
"""Gate do site: o JS inline da vitrine e do player compila, as funções em api/ compilam, e os JSON são válidos.

Só biblioteca padrão mais o `node` do sistema. Rodar: python3 scripts/check_site.py (exit 0 = ok).
Não substitui teste de comportamento; pega a vírgula sobrando que derrubaria a página inteira no deploy.
"""
import json, pathlib, re, shutil, subprocess, sys, tempfile

ROOT = pathlib.Path(__file__).resolve().parents[1]
HTML = ["site/index.html", "site/assistir/index.html", "site/privacidade.html"]
JSON_FILES = ["site/assistir/series.json", "site/vercel.json", "site/package.json", "catalog.json"]
SCRIPT = re.compile(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", re.S)


def main() -> int:
    node = shutil.which("node")
    if not node:
        print("check_site: node não encontrado; pulei a checagem de sintaxe do JS", file=sys.stderr)
    erros = 0
    for f in HTML:
        html = (ROOT / f).read_text(encoding="utf-8")
        blocos = SCRIPT.findall(html)
        if not blocos:
            print(f"ERRO {f}: nenhum <script> inline encontrado"); erros += 1; continue
        for i, js in enumerate(blocos):
            if not node:
                continue
            with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tmp:
                tmp.write(js); path = tmp.name
            r = subprocess.run([node, "--check", path], capture_output=True, text=True)
            pathlib.Path(path).unlink(missing_ok=True)
            if r.returncode:
                print(f"ERRO {f} <script> #{i}: {r.stderr.strip()[:400]}"); erros += 1
            else:
                print(f"ok   {f} <script> #{i} ({len(js):,} chars)")
    if node:
        for f in sorted((ROOT / "site" / "api").rglob("*.js")):
            r = subprocess.run([node, "--check", str(f)], capture_output=True, text=True)
            if r.returncode:
                print(f"ERRO {f.relative_to(ROOT)}: {r.stderr.strip()[:400]}"); erros += 1
            else:
                print(f"ok   {f.relative_to(ROOT)}")
    for f in JSON_FILES:
        p = ROOT / f
        if not p.exists():
            print(f"aviso {f}: não existe aqui (gerado ou symlink ignorado)"); continue
        try:
            json.loads(p.read_text(encoding="utf-8")); print(f"ok   {f}")
        except json.JSONDecodeError as e:
            print(f"ERRO {f}: {e}"); erros += 1
    print(f"{erros} erro(s)")
    return 1 if erros else 0


if __name__ == "__main__":
    sys.exit(main())
