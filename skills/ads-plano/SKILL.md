---
name: ads-plano
description: "Calcula CAC-alvo, CAC-teto, CPL e orçamento por fase antes do primeiro real, e entrega o briefing do produto para o motor. Use quando: plano de tráfego, quanto gastar, unit economics, vale anunciar."
version: 0.4.5
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [trafego-pago, meta-ads, unit-economics, planejamento]
    related_skills: [ads-gate-compliance, ads-otimizar]
---

# ANTES DO PRIMEIRO REAL · CAC, margem e orçamento antes do primeiro real

Quanto pode custar um cliente, quanto sobra de margem e quanto colocar por dia, tudo antes do primeiro real. O agente monta a conta de unit economics e o orçamento por fase, e diz em que número a campanha deixa de fazer sentido.

## When to Use

- Diga: "plano de tráfego para [oferta] a [preço], margem [x]".
- NÃO use para: aprovar criativo (`ads-gate-compliance`) nem para ler campanha rodando (`ads-otimizar`).

## Quick Reference

| arquivo | papel |
|---|---|
| `references/unit-economics.md` | as oito perguntas do plano |
| `templates/briefing.yaml` | modelo do briefing do produto |

## Procedure

1. Colete ticket, bump/upsell no dia zero, recorrência ou recompra em 12 meses, taxa da plataforma, e se o funil tem lead antes da venda (com a taxa histórica, se houver). Pergunte o que faltar; onde não houver dado, use a hipótese padrão da referência e **declare** que é hipótese.
2. Siga `references/unit-economics.md` na ordem das oito perguntas. Calcule CAC-alvo, CAC-teto, CPL-alvo, CPL-teto, orçamento de validação por conjunto e o gatilho de parada.
3. Preencha `templates/briefing.yaml` com os números; a seção `matriz` recebe os thresholds derivados (escalar = CAC-alvo, matar = CAC-teto, gasto sem venda = 1× CAC-teto). Entregue o arquivo preenchido para o usuário salvar no caminho que ele escolher.
4. Escreva a saída em duas tabelas: negócio primeiro ("cada real precisa voltar R$X"), técnica depois, cada linha técnica com a tradução ao lado.
5. Termine com o gatilho de parada em uma frase e com `ratificado: false` no briefing: quem confirma os números é o dono.

## Pitfalls

- Prometer CAC. O plano define quando parar e quanto arriscar; não prevê resultado.
- Esconder hipótese. Taxa assumida sem histórico aparece marcada como hipótese, sempre.
- Deixar o briefing com `ratificado: true`. Só o dono ratifica.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. As oito perguntas da referência têm resposta ou hipótese declarada.
2. CAC-alvo, CAC-teto, CPL-alvo, CPL-teto, orçamento de validação e gatilho de parada estão calculados e mostrados.
3. A tabela de negócio vem antes da técnica e toda linha técnica tem tradução.
4. O `briefing.yaml` entregue tem `matriz` preenchida e `ratificado: false`.
5. Nenhum campo de credencial existe no briefing.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/unit-economics.md`
- `templates/briefing.yaml`
