---
name: copy-lancamento
description: "Um lançamento é uma sequência com data, não um post com link. Use quando o pedido envolver lançamento, PLF, carrinho aberto, pré-lançamento, PLC, soap opera, funil de livro, seed launch, evergreen."
version: 0.4.5
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [copy, copywriting, copy, lançamento]
    related_skills: [copy-pipeline, copy-auditoria]
---

# CARRINHO ABERTO · PLF, Brunson, soap opera e a sequência inteira

Um lançamento é uma sequência com data, não um post com link. O agente monta o pré-pré-lançamento, os três conteúdos de aquecimento, a abertura e o fechamento do carrinho, os e-mails de cada dia e a soap opera que segura a atenção entre eles, pelo método de Jeff Walker, com o funil de livro de Russell Brunson como alternativa. Do seed launch ao evergreen.

## When to Use

- O pedido envolve: lançamento, PLF, carrinho aberto, pré-lançamento, PLC, soap opera, funil de livro, seed launch, evergreen.
- Diga: "monta o lançamento de [produto], carrinho de [data] a [data]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| plf create case study | `references/plf-create-case-study.md` |
| plf create evergreen launch | `references/plf-create-evergreen-launch.md` |
| plf create jv launch | `references/plf-create-jv-launch.md` |
| plf create launch emails | `references/plf-create-launch-emails.md` |
| plf create launch stack | `references/plf-create-launch-stack.md` |
| plf create live launch | `references/plf-create-live-launch.md` |
| plf create open cart sequence | `references/plf-create-open-cart-sequence.md` |
| plf create plc sequence | `references/plf-create-plc-sequence.md` |
| plf create preprelaunch | `references/plf-create-preprelaunch.md` |
| plf create sales page plf | `references/plf-create-sales-page-plf.md` |
| plf create seed launch | `references/plf-create-seed-launch.md` |
| plf diagnose failed launch | `references/plf-diagnose-failed-launch.md` |
| plf evaluate cpl | `references/plf-evaluate-cpl.md` |
| plf map mental triggers | `references/plf-map-mental-triggers.md` |
| plf plan paid traffic | `references/plf-plan-paid-traffic.md` |
| plf | `references/plf.md` |
| brunson create book funnel | `references/brunson-create-book-funnel.md` |
| brunson | `references/brunson.md` |
| create launch sequence | `references/create-launch-sequence.md` |
| create soap opera sequence | `references/create-soap-opera-sequence.md` |



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

- `references/brunson-create-book-funnel.md`
- `references/brunson.md`
- `references/checklist-plf-todos.md`
- `references/create-launch-sequence.md`
- `references/create-soap-opera-sequence.md`
- `references/plf-create-case-study.md`
- `references/plf-create-evergreen-launch.md`
- `references/plf-create-jv-launch.md`
- `references/plf-create-launch-emails.md`
- `references/plf-create-launch-stack.md`
- `references/plf-create-live-launch.md`
- `references/plf-create-open-cart-sequence.md`
- `references/plf-create-plc-sequence.md`
- `references/plf-create-preprelaunch.md`
- `references/plf-create-sales-page-plf.md`
- `references/plf-create-seed-launch.md`
- `references/plf-diagnose-failed-launch.md`
- `references/plf-evaluate-cpl.md`
- `references/plf-map-mental-triggers.md`
- `references/plf-plan-paid-traffic.md`
- `references/plf.md`
- `templates/plf-beat-analysis-tmpl.yaml`
- `templates/plf-case-study-tmpl.md`
- `templates/plf-cpl-evaluation-report-tmpl.md`
- `templates/plf-email-subject-lines-tmpl.md`
- `templates/plf-jv-swipe-tmpl.md`
- `templates/plf-launch-stack-tmpl.md`
- `templates/plf-launch-timeline-tmpl.md`
- `templates/plf-objection-crusher-tmpl.md`
- `templates/plf-open-cart-day1-tmpl.md`
- `templates/plf-open-cart-final-tmpl.md`
- `templates/plf-plc1-script-tmpl.md`
- `templates/plf-plc2-script-tmpl.md`
- `templates/plf-plc3-script-tmpl.md`
- `templates/plf-preprelaunch-survey-tmpl.md`
- `templates/plf-rubric-scores-tmpl.yaml`
- `templates/plf-sales-page-blueprint-tmpl.md`
