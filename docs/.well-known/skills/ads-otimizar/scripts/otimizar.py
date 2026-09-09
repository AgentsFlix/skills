#!/usr/bin/env python3
"""Motor de otimização de portfólio — implementação do doc 10 §9.

Determinístico de ponta a ponta: nenhuma chamada a LLM, nenhum julgamento subjetivo.
Coleta → filtra inelegíveis → calcula CAC real → classifica na matriz → registra.

A tradução em linguagem de negócio e a recomendação escrita são da skill /meta-ads,
que lê o snapshot que este arquivo produz. Aqui só sai número e veredito.

Versão para o Hub de Skills do Hermes: só LÊ. Não cria, não pausa, não muda orçamento.
A mutação fica fora deste arquivo de propósito: quem decide gastar é o dono, com comando explícito.

Uso:
    python3 otimizar.py --briefing ~/ads/briefing.yaml --estado ~/ads/estado
    python3 otimizar.py --briefing ~/ads/briefing.yaml --estado ~/ads/estado --json
"""
import argparse
import csv
import datetime as dt
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import meta_api  # noqa: E402

ESTADO = os.path.expanduser("~/ads/estado")  # sobrescrito por --estado

# nomes de action_type que a Meta usa para compra e para lead
COMPRA = ("offsite_conversion.fb_pixel_purchase", "purchase", "omni_purchase")
LEAD = ("offsite_conversion.fb_pixel_lead", "lead", "leadgen_grouped", "onsite_conversion.lead_grouped")


def briefing(caminho: str) -> dict:
    try:
        import yaml
    except ImportError:
        sys.exit("PyYAML ausente no ambiente do Hermes; instale pyyaml ou converta o briefing para JSON.")
    caminho = os.path.expanduser(caminho)
    if not os.path.exists(caminho):
        sys.exit(f"briefing ausente: {caminho} (modelo em templates/briefing.yaml)")
    with open(caminho) as fh:
        b = yaml.safe_load(fh) or {}
    for k in ("produto", "conta_anuncios", "matriz", "tipo_conversao"):
        if not b.get(k):
            sys.exit(f"briefing sem o campo obrigatório: {k}")
    return b


def janelas(hoje: dt.date) -> tuple:
    """Duas janelas fechadas de 7 dias, ambas sem o dia de hoje (parcial e enganoso)."""
    fim_atual = hoje - dt.timedelta(days=1)
    ini_atual = fim_atual - dt.timedelta(days=6)
    fim_ant = ini_atual - dt.timedelta(days=1)
    ini_ant = fim_ant - dt.timedelta(days=6)
    fmt = "%Y-%m-%d"
    return (
        {"since": ini_atual.strftime(fmt), "until": fim_atual.strftime(fmt)},
        {"since": ini_ant.strftime(fmt), "until": fim_ant.strftime(fmt)},
    )


def soma_acoes(linha: dict, tipos: tuple) -> int:
    total = 0
    for acao in linha.get("actions") or []:
        if acao.get("action_type") in tipos:
            total += int(float(acao.get("value", 0)))
    return total


def coletar(conta: str, faixa: dict, auth: str) -> dict:
    """Insights por campanha na janela dada. Devolve {campaign_id: linha}."""
    q = (
        f"fields={meta_api.CAMPOS_INSIGHT}&level=campaign&limit=200"
        f"&time_range={json.dumps(faixa, separators=(',', ':'))}"
    )
    return {l["campaign_id"]: l for l in meta_api.paginado(f"{conta}/insights", q, auth)}


def classificar(atual: dict, anterior: dict, regras: dict, tipo_conversao: str) -> dict:
    """A matriz do doc 10 §4, com os thresholds vindos do briefing do produto."""
    gasto = float(atual.get("spend", 0))
    impressoes = int(atual.get("impressions", 0))
    freq = float(atual.get("frequency", 0) or 0)
    ctr = float(atual.get("ctr", 0) or 0)
    ctr_ant = float((anterior or {}).get("ctr", 0) or 0)
    tipos = COMPRA if tipo_conversao == "venda" else LEAD
    conversoes = soma_acoes(atual, tipos)
    cac = round(gasto / conversoes, 2) if conversoes else None

    # ── filtro do §2: o que não pode ser julgado ainda ──
    if impressoes < regras["impressoes_minimas"]:
        return {"veredito": "SEM DADO", "motivo": f"{impressoes} impressões (mínimo {regras['impressoes_minimas']})",
                "cac": cac, "conversoes": conversoes, "gasto": gasto}
    if gasto < regras["escalar_cac_max"] and conversoes == 0:
        return {"veredito": "SEM DADO", "motivo": f"gastou R${gasto:.2f}, abaixo de 1x o CAC-alvo (R${regras['escalar_cac_max']}) sem venda",
                "cac": cac, "conversoes": conversoes, "gasto": gasto}

    # ── matriz do §4 ──
    if conversoes == 0 and gasto >= regras["matar_gasto_sem_venda"]:
        return {"veredito": "MATAR", "motivo": f"gastou R${gasto:.2f} (1x o teto) sem uma única conversão",
                "cac": cac, "conversoes": 0, "gasto": gasto}

    fadiga = freq >= regras["fadiga_freq"] and ctr_ant > 0 and ctr < ctr_ant
    if cac is not None and cac > regras["matar_cac_min"]:
        return {"veredito": "MATAR", "motivo": f"CAC R${cac} acima do teto R${regras['matar_cac_min']} (retorno insuficiente frente ao briefing; causa não determinada)",
                "cac": cac, "conversoes": conversoes, "gasto": gasto}
    if cac is not None and cac <= regras["escalar_cac_max"]:
        if fadiga:
            return {"veredito": "DUPLICAR", "motivo": f"CAC bom (R${cac}) mas frequência {freq:.1f} com CTR caindo ({ctr_ant:.2f}% → {ctr:.2f}%): público saturando",
                    "cac": cac, "conversoes": conversoes, "gasto": gasto}
        return {"veredito": "ESCALAR", "motivo": f"CAC R${cac} abaixo do alvo R${regras['escalar_cac_max']}, sem sinal de fadiga",
                "cac": cac, "conversoes": conversoes, "gasto": gasto}
    return {"veredito": "MANTER", "motivo": f"CAC R${cac} na faixa de validação (R${regras['escalar_cac_max']}–R${regras['matar_cac_min']})",
            "cac": cac, "conversoes": conversoes, "gasto": gasto}


def registrar(produto: str, linhas: list, snapshot: dict) -> tuple:
    os.makedirs(ESTADO, exist_ok=True)
    dia = snapshot["rodado_em"][:10]
    caminho_snap = os.path.join(ESTADO, f"{produto}-{dia}.json")
    with open(caminho_snap, "w") as fh:
        json.dump(snapshot, fh, ensure_ascii=False, indent=2)

    # log append-only: é o que calibra os thresholds ⚠️ com o tempo
    caminho_log = os.path.join(ESTADO, f"{produto}-recomendacoes.csv")
    novo = not os.path.exists(caminho_log)
    with open(caminho_log, "a", newline="") as fh:
        w = csv.writer(fh)
        if novo:
            w.writerow(["data", "campanha_id", "campanha", "veredito", "cac", "conversoes",
                        "gasto_7d", "impressoes", "frequencia", "ctr", "motivo"])
        for l in linhas:
            w.writerow([dia, l["id"], l["nome"], l["veredito"], l["cac"], l["conversoes"],
                        l["gasto"], l["impressoes"], l["frequencia"], l["ctr"], l["motivo"]])
    return caminho_snap, caminho_log


def main() -> None:
    global ESTADO
    ap = argparse.ArgumentParser(description="leitura diária do portfólio: classifica, não muta")
    ap.add_argument("--briefing", required=True, help="caminho do briefing.yaml do produto")
    ap.add_argument("--estado", default=ESTADO, help="pasta onde gravar snapshot e CSV de decisões")
    ap.add_argument("--json", action="store_true", help="imprime o snapshot cru")
    args = ap.parse_args()
    ESTADO = os.path.expanduser(args.estado)

    b = briefing(args.briefing)
    args.produto = b["produto"]
    conta = b["conta_anuncios"]
    regras = b["matriz"]
    auth = meta_api.credencial()
    hoje = dt.date.today()
    faixa_atual, faixa_ant = janelas(hoje)

    campanhas = meta_api.paginado(f"{conta}/campaigns", f"fields={meta_api.CAMPOS_CAMPANHA}&limit=100", auth)
    ativas = [c for c in campanhas if c.get("effective_status") == "ACTIVE"]
    adsets = meta_api.paginado(f"{conta}/adsets", f"fields={meta_api.CAMPOS_ADSET}&limit=200", auth)
    aprendendo = {a.get("campaign_id") for a in adsets
                  if (a.get("learning_stage_info") or {}).get("status") == "LEARNING"}

    atual = coletar(conta, faixa_atual, auth) if ativas else {}
    anterior = coletar(conta, faixa_ant, auth) if ativas else {}

    linhas = []
    for c in ativas:
        cid = c["id"]
        ins = atual.get(cid, {})
        ver = classificar(ins, anterior.get(cid, {}), regras, b["tipo_conversao"])
        if cid in aprendendo and ver["veredito"] not in ("SEM DADO",):
            ver = {"veredito": "SEM DADO", "motivo": "ad set em learning phase: números instáveis, não se julga",
                   "cac": ver["cac"], "conversoes": ver["conversoes"], "gasto": ver["gasto"]}
        linhas.append({
            "id": cid,
            "nome": c.get("name"),
            "objetivo": c.get("objective"),
            "orcamento_diario": int(c.get("daily_budget", 0) or 0) / 100 or None,
            "gasto": round(float(ins.get("spend", 0)), 2),
            "impressoes": int(ins.get("impressions", 0)),
            "frequencia": round(float(ins.get("frequency", 0) or 0), 2),
            "ctr": round(float(ins.get("ctr", 0) or 0), 2),
            **ver,
        })

    linhas.sort(key=lambda l: (l["cac"] is None, l["cac"] or 0))
    snapshot = {
        "produto": args.produto,
        "conta": conta,
        "rodado_em": dt.datetime.now().isoformat(timespec="seconds"),
        "janela_atual": faixa_atual,
        "janela_anterior": faixa_ant,
        "regras": regras,
        "campanhas_na_conta": len(campanhas),
        "campanhas_ativas": len(ativas),
        "linhas": linhas,
    }
    snap, log = registrar(args.produto, linhas, snapshot)

    if args.json:
        print(json.dumps(snapshot, ensure_ascii=False, indent=2))
        return

    print(f"# Portfólio {args.produto} · {faixa_atual['since']} a {faixa_atual['until']}")
    print(f"conta {conta} · {len(ativas)} campanha(s) ativa(s) de {len(campanhas)}\n")
    if not ativas:
        print("Nenhuma campanha ativa. Nada a decidir: o motor precisa de campanha rodando com verba.")
    for l in linhas:
        cac = f"R${l['cac']}" if l["cac"] is not None else "sem CAC"
        print(f"[{l['veredito']:<9}] {l['nome'][:58]}")
        print(f"            {cac} · {l['conversoes']} conv · R${l['gasto']:.2f} gastos · {l['impressoes']} impr · freq {l['frequencia']}")
        print(f"            {l['motivo']}\n")
    print(f"snapshot: {snap}")
    print(f"log:      {log}")


if __name__ == "__main__":
    main()
