---
name: copy-headlines
description: Você entrega o produto, o benefício principal e para quem é. Use quando o pedido envolver headline, título, gancho, hook, bullets, chamada de abertura.
version: 0.4.3
author: José Carlos Amorim
license: MIT
platforms:
- linux
- macos
- windows
metadata:
  hermes:
    tags:
    - copy
    - copywriting
    - copy
    - headlines
    related_skills:
    - copy-pipeline
    - copy-auditoria
---

# A PRIMEIRA LINHA · Títulos, ganchos e bullets

Você entrega o produto, o benefício principal e para quem é. O agente devolve dez manchetes construídas com as fórmulas de Halbert, Ogilvy e Schwartz, cada uma com o gancho explicado e o contexto certo: página, e-mail, anúncio ou vídeo. Quando a peça ainda não tem a primeira linha, ela começa aqui.

## When to Use

- O pedido envolve: headline, título, gancho, hook, bullets, chamada de abertura.
- Diga ao Hermes: "gera headlines para [produto], benefício [x], público [y]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Obrigatórios: os campos required da subtarefa escolhida. Para headlines: contexto da peça, produto, benefício principal e público. Opcionais: voz, objeções, benefícios secundários, quantidade e estilo. Reutilize produto/público/voz da memória; oferta, preço, garantia e prova precisam de fonte atual quando aparecerem na peça.

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create headlines | `references/create-headlines.md` |
| create video hook | `references/create-video-hook.md` |
| create bullets | `references/create-bullets.md` |
| write lampropoulos bullets | `references/write-lampropoulos-bullets.md` |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Escolha a subtarefa pela tabela e leia seus Inputs. Faça o bootstrap do contrato usando produto, público, voz e peças anteriores acessíveis; identifique o contexto da nova peça e quais informações continuam atuais.
2. Reuse os required já conhecidos e pergunte só os ausentes ou conflitantes, cada um com exemplo baseado no contexto recuperado. Sem required suficiente, mantenha essa escrita aguardando e não invente benefício, oferta ou prova. Optional ausente não deve criar entrevista obrigatória.
3. Siga fórmulas e categorias da referência escolhida. Fórmula que pede número, garantia, depoimento ou escassez só pode ser usada com evidência atual; escolha outra fórmula quando faltar essa prova.
4. Entregue no Output Format da subtarefa em português. Rode seu Quality Checklist, corrija falhas e mostre resultado item a item. Nomeie a referência e qualquer limitação restante.
5. Registre resultado observado e avaliação de rotina conforme o contrato. Aprovar uma headline não comprova conversão futura.

## Avaliação de rotina

Não vale para uma peça pontual. Pode valer revisão de testes se houver calendário editorial e resultados acessíveis; depender só de calendário não justifica gerar títulos repetidos.

## Pitfalls

- Pular o bloco `Inputs` e escrever com o que veio. Falta de avatar ou de benefício principal produz copy genérica; pergunte.
- Misturar duas sub-tarefas numa entrega só. Uma de cada vez, cada uma com seu checklist.
- Preencher `[COLCHETES]` com chute para a peça "ficar pronta". Colchete aberto é honesto; número inventado é dívida.
- Ignorar o `Output Format`. Ele existe para a peça encaixar no passo seguinte (página, e-mail, anúncio).

## Verification

1. As entregas do Output Format da subtarefa estão presentes, com quantidade/categorias e seleções que ela exigir.
2. Cada required veio da conversa ou memória/evidência atual com origem identificada. Se faltar required, a escrita dependente fica aguardando, sem declarar a peça concluída.
3. Números, promessas, prova, garantia e oferta têm suporte. Exemplos de respostas não entraram na peça como fatos.
4. O checklist da subtarefa foi aplicado item a item e as falhas da peça foram corrigidas; limite não resolvido impede declarar esse item aprovado.
5. A referência, avaliação de rotina e resultado de uso estão identificados; as perguntas feitas tinham exemplos contextuais ou fallback declarado.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/create-bullets.md`
- `references/create-headlines.md`
- `references/create-video-hook.md`
- `references/identidade.json`
- `references/write-lampropoulos-bullets.md`
- `scripts/auditar.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
