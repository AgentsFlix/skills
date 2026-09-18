---
name: copy-big-idea-lead-magnet
description: "Uma campanha inteira cabe em uma ideia. Use quando o pedido envolver big idea, ideia central, mecanismo único, RMBC, brief de campanha, lead magnet."
version: 0.4.4
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [copy, copywriting, estratégia, big-idea]
    related_skills: [copy-pipeline, copy-auditoria]
---

# UMA SÓ IDEIA · Ideia central e ímã de leads

Uma campanha inteira cabe em uma ideia. O agente extrai a Big Idea, monta o arsenal de autoridade e desenha o lead magnet que a pessoa quer de verdade, não o PDF que ninguém abre. É o passo que transforma um produto em uma história que vale contar.

## When to Use

- O pedido envolve: big idea, ideia central, mecanismo único, RMBC, brief de campanha, lead magnet.
- Diga: "big idea para [produto e mercado]" ou "lead magnet para [público]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create big idea | `references/create-big-idea.md` |
| build authority arsenal | `references/build-authority-arsenal.md` |
| create lead magnet | `references/create-lead-magnet.md` |
| rmbc method | `references/rmbc-method.md` |
| create unique mechanism | `references/create-unique-mechanism.md` |
| create campaign brief | `references/create-campaign-brief.md` |
| campaign planning pack | `references/campaign-planning-pack.md` |

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

- `references/build-authority-arsenal.md`
- `references/campaign-planning-pack.md`
- `references/create-big-idea.md`
- `references/create-campaign-brief.md`
- `references/create-lead-magnet.md`
- `references/create-unique-mechanism.md`
- `references/rmbc-method.md`
- `templates/authority-arsenal-tmpl.yaml`
