---
name: ads-gate-compliance
description: 'Confere um criativo de anúncio contra a régua de compliance da Meta antes de subir e devolve APROVADO ou REPROVADO com o ajuste exato. Use quando: gate, revisar criativo, anúncio reprovado, risco de…'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.4
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/ads-gate-compliance
  tags: trafego-pago, meta-ads, compliance, gate
  related: ads-plano, ads-otimizar
---

# ANTES DE SUBIR · O criativo passa pela régua da Meta antes de subir

Antes de o criativo subir, ele passa pela régua da Meta: promessa, saúde, antes-e-depois, texto na imagem, público. O agente confere contra as regras documentadas e bloqueia o que seria reprovado ou derrubaria a conta. Barrar aqui é mais barato que perder o pixel.

## When to Use

- Diga: "gate: [texto do anúncio e descrição da imagem]".
- NÃO use para: escrever o anúncio (isso é `copy-anuncios`) nem para decidir orçamento (`ads-plano`).

## Quick Reference

| arquivo | papel |
|---|---|
| `references/regras-da-meta.md` | régua de compliance, com fonte |

## Procedure

1. Colete o criativo: texto principal, título, descrição, chamada; a imagem ou o vídeo (descrição, ou o arquivo se houver tool de visão); a URL da landing; a categoria do produto.
2. Abra `references/regras-da-meta.md`. Confira o criativo contra cada seção marcada **BLOQUEIA**, uma a uma, e anote PASS ou FAIL com a frase exata que causou o FAIL.
3. Confira as seções marcadas *aviso* e anote como AVISO, com o ajuste sugerido.
4. Se a landing foi informada, confira a seção "Página de destino": promessa do anúncio bate com a página? Discrepância é FAIL.
5. Veredito: qualquer FAIL = **REPROVADO**, com a lista de ajustes exatos (o que trocar por quê). Nenhum FAIL = **APROVADO**, com os avisos listados.
6. Entregue a tabela seção → resultado → ajuste. Nunca aprove "com ressalva": ou passa ou não passa.

## Pitfalls

- Aprovar porque "todo mundo faz assim". A régua é a política, não o feed do concorrente.
- Julgar só o texto. Imagem, vídeo e landing reprovam tanto quanto.
- Esquecer que rejeição fica no histórico da conta. O gate existe antes de subir por isso.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. Toda seção **BLOQUEIA** da referência aparece na tabela com PASS ou FAIL.
2. Todo FAIL cita o trecho exato do criativo que o causou e propõe o ajuste.
3. O veredito é APROVADO ou REPROVADO, sem terceira opção.
4. Se a landing foi dada, a checagem anúncio ↔ página está na tabela.
5. Os avisos estão listados separados dos FAILs.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/regras-da-meta.md`
