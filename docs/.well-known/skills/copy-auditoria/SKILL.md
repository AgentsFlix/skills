---
name: copy-auditoria
description: A copy já existe e não está vendendo. Use quando o pedido envolver auditar copy, otimizar texto, comparar versões, split test, por que não vende.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.5
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/copy-auditoria
  tags: copy, copywriting, auditoria, otimização
  related: copy-pipeline, copy-auditoria
---

# SOB A LUPA · Hopkins, otimização, debate e blend

A copy já existe e não está vendendo. O agente audita pelo método de Hopkins, otimiza linha a linha, coloca duas versões em debate e, quando faz sentido, funde o melhor de cada uma. Sai com o diagnóstico do que não vende e a versão corrigida.

## When to Use

- O pedido envolve: auditar copy, otimizar texto, comparar versões, split test, por que não vende.
- Diga: "audita esta copy: [texto]" ou "compara estas duas versões".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| audit copy hopkins | `references/audit-copy-hopkins.md` |
| optimize copy | `references/optimize-copy.md` |
| copy debate | `references/copy-debate.md` |
| blend | `references/blend.md` |
| review copy | `references/review-copy.md` |
| simple writing audit | `references/simple-writing-audit.md` |
| setup split test | `references/setup-split-test.md` |
| qa gate | `references/qa-gate.md` |



## Procedure

1. Identifique a sub-tarefa pela tabela acima. Se o pedido cobre mais de uma, ordene-as na sequência em que uma alimenta a outra e execute uma por vez.
2. Abra a referência escolhida e leia o bloco `Inputs`. Colete do usuário todos os `required`; pergunte o que faltar antes de escrever. Registre os `optional` que ele deu.
3. Siga a referência: fórmulas, categorias e passos, na ordem em que aparecem. Onde ela citar um template em `templates/`, abra e preencha o template; onde citar um checklist, use-o no passo 5.
4. Escreva a entrega no formato do bloco `Output Format` da referência, em português. Deixe `[COLCHETES]` só onde falta um dado do usuário; nunca invente número, depoimento ou nome.
5. Rode o `Quality Checklist` (ou `Evaluation Criteria`) da referência sobre o que escreveu. Corrija o que falhou. Liste na entrega o resultado item a item.
6. Entregue: a peça no formato pedido, a lista de `[COLCHETES]` a preencher, e o checklist com o resultado.

## Pitfalls

- Pular o bloco `Inputs` e escrever com o que veio. Falta de avatar ou de benefício principal produz copy genérica; pergunte.
- Misturar duas sub-tarefas numa entrega só. Uma de cada vez, cada uma com seu checklist.
- Preencher `[COLCHETES]` com chute para a peça "ficar pronta". Colchete aberto é honesto; número inventado é dívida.
- Ignorar o `Output Format`. Ele existe para a peça encaixar no passo seguinte (página, e-mail, anúncio).

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. Toda entrega nomeada no `Output Format` da referência usada existe na resposta (ex.: variações, top 3, pares de teste).
2. Todos os `required` do bloco `Inputs` foram obtidos do usuário antes da escrita, ou a resposta diz explicitamente qual faltou e parou ali.
3. Nenhum número, depoimento ou nome aparece sem ter vindo do usuário; o que falta está em `[COLCHETES]` e listado no fim.
4. O `Quality Checklist` da referência aparece na entrega com cada item marcado, e nenhum item está falho.
5. A resposta nomeia qual referência foi usada (`references/<sub-tarefa>.md`).

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/audit-copy-hopkins.md`
- `references/blend.md`
- `references/copy-debate.md`
- `references/optimize-copy.md`
- `references/qa-gate.md`
- `references/review-copy.md`
- `references/setup-split-test.md`
- `references/simple-writing-audit.md`
