---
name: copy-voz
description: "Extrai o DNA de comunicação de uma pessoa: vocabulário, frases-assinatura, frameworks que ela repete, o jeito de abrir e fechar. Use quando o pedido envolver voz da marca, DNA de comunicação…"
version: 0.4.5
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [copy, copywriting, voz, marca-pessoal]
    related_skills: [copy-pipeline, copy-auditoria]
---

# INCONFUNDÍVEL · DNA de comunicação e frases-assinatura

Extrai o DNA de comunicação de uma pessoa: vocabulário, frases-assinatura, frameworks que ela repete, o jeito de abrir e fechar. O agente lê o material que você der e devolve um guia de voz que qualquer outra skill passa a respeitar. Copy boa na voz errada ainda é copy errada.

## When to Use

- O pedido envolve: voz da marca, DNA de comunicação, frases-assinatura, extrair frameworks, tom de voz.
- Diga: "extrai a voz de [nome] a partir destes textos: [colar ou apontar]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| extract communication dna | `references/extract-communication-dna.md` |
| extract signature phrases | `references/extract-signature-phrases.md` |
| extract frameworks | `references/extract-frameworks.md` |



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

- `references/checklist-copywriter-agent-creation-checklist.md`
- `references/extract-communication-dna.md`
- `references/extract-frameworks.md`
- `references/extract-signature-phrases.md`
- `templates/communication-dna-tmpl.yaml`
- `templates/frameworks-extraction-tmpl.yaml`
- `templates/signature-phrases-tmpl.yaml`
