---
name: ads-criativos
description: 'Com as métricas por criativo na mão, o agente separa o que venceu do que cansou: analisa os primeiros três segundos, encontra padrões entre os vencedores, detecta fadiga e propõe os próximos testes.…'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.5
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/ads-criativos
  tags: trafego-pago, meta-ads, criativos
  related: ads-gate-compliance, ads-plano, ads-otimizar
---

# O QUE VENCEU · Hooks, padrões vencedores e fadiga, criativo por criativo

Com as métricas por criativo na mão, o agente separa o que venceu do que cansou: analisa os primeiros três segundos, encontra padrões entre os vencedores, detecta fadiga e propõe os próximos testes. Não pede acesso à conta: você traz os números, ele traz o julgamento.

Esta skill **não escreve na plataforma de anúncios**. Ela lê o que você traz (perfil, métricas, URL) e devolve julgamento. Mutação de campanha é decisão sua, no gerenciador.

## When to Use

- Diga: "analisa estes criativos" e cole ou anexe as métricas por criativo.
- NÃO use para escrever o criativo (`copy-anuncios`) nem para ler a conta ao vivo (`ads-otimizar`).

## Quick Reference

| procedimento | referência |
|---|---|
| analyze creatives | `references/analyze-creatives.md` |

| apoio |
|---|
| `templates/creative-brief.md` |
| `templates/performance-report.md` |
| `references/data-knowledge-meta-ad_relevance_diagnostics.md` |
| `references/data-knowledge-meta-performance_fluctuations.md` |

## Procedure

1. Abra a referência do procedimento e leia `Entrada` (ou `Inputs`). Colete do usuário o que for exigido; pergunte o que faltar. 
2. Siga as fases da referência. Onde ela citar MCP, plataforma ou script do runtime de origem, **não execute**: peça ao usuário o dado correspondente ou use a tool `web` para inspecionar a URL informada.
3. Analise os primeiros três segundos de cada criativo, agrupe vencedores, marque fadiga (frequência alta com CTR caindo) usando os diagnósticos de relevância em `references/`.
4. Escreva a entrega no template de saída listado acima, em português.
5. Termine com a próxima decisão que é do usuário, em uma frase.

## Pitfalls

- Inventar métrica ou status que não veio do usuário ou da página. Sem dado, o item fica "não verificado".
- Recomendar mudança na conta como se fosse executar. Esta skill entrega recomendação; a execução é humana.
- Julgar criativo por gosto. O critério é métrica e padrão entre vencedores.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. A entrega segue o template de saída, seção por seção.
2. Toda afirmação sobre métrica, evento ou status cita de onde veio (dado do usuário, página inspecionada) ou está marcada "não verificado".
3. Há lista de vencedores, lista de padrões e plano de próximos testes.
4. Nenhuma ação foi executada na plataforma.
5. A última linha é a decisão que cabe ao usuário.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/analyze-creatives.md`
- `references/data-knowledge-meta-ad_relevance_diagnostics.md`
- `references/data-knowledge-meta-performance_fluctuations.md`
- `templates/creative-brief.md`
- `templates/performance-report.md`
