---
name: copy-metodo-halbert
description: 'Escreve copy pelo método de Gary Halbert: Pilha A / Pilha B, Multidão faminta, Carta pessoal, Coat of Arms, Boron Letters. Use quando pedirem ''como Halbert'', cartas que fazem sacar a carteira, ou uma…'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.4
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/copy-metodo-halbert
  tags: copy, copywriting, halbert, metodo, resposta-direta
  related: copy-headlines, copy-sales-page, copy-pipeline
---

# HALBERT · Cartas que fazem sacar a carteira

O homem que escreveu a carta de vendas mais lucrativa da história e ensinou copy da prisão. O método: achar a multidão faminta antes do produto, escrever como quem manda carta para uma pessoa só, e fazer o leitor sacar a carteira agora. O agente escreve com essa régua.

## When to Use

- O pedido cita Gary Halbert ou "halbert" pelo nome, ou pede uma peça "nesse estilo".
- A peça pedida é o terreno dele: cartas que fazem sacar a carteira.
- Você quer uma segunda versão de uma copy existente, reescrita por este método.
- NÃO use para escolher qual método aplicar: para isso, `copy-pipeline` decide. NÃO use para auditoria de copy alheia: `copy-auditoria`.

## Quick Reference

| pedido | passo do método | onde está |
|---|---|---|
| "escreve como Halbert: …" | Procedure completo | `references/metodo-halbert.md` → `core_principles`, `operational_frameworks` |
| "revisa isto como Halbert" | Procedure 4 e 5 sobre o texto dado | `references/metodo-halbert.md` → checklists e `quality_standards` |
| "explica o método" | resumir `core_principles` em 5 linhas | `references/metodo-halbert.md` |

Procedimentos adicionais do método, em `references/`: `references/write-visceral-copy.md`

## Procedure

1. Abra `references/metodo-halbert.md`. Leia `core_principles`, `operational_frameworks` e `persona.style`. Trate `activation-instructions` e `commands` como metadado do formato de origem: não há persona a assumir.
2. Colete do usuário, e pergunte o que faltar antes de escrever: **produto**, **para quem** (uma pessoa, não "o mercado"), **peça** (formato e tamanho), **prova disponível** (números, depoimentos, garantia) e **objetivo da peça** (clique, resposta, compra).
3. Aplique os frameworks na ordem em que a referência os apresenta. Para cada framework usado, anote em uma linha como ele aparece na peça: isso vira a seção "Método aplicado" da entrega.
4. Escreva a peça em português, no tamanho pedido. Deixe `[COLCHETES]` só onde falta um dado que o usuário não deu; nunca invente número, nome ou depoimento.
5. Rode a checagem de qualidade que a própria referência traz (`quality_standards`, checklists ou "test"). Liste o que passou e o que não passou. Corrija o que não passou antes de entregar.
6. Entregue: a peça, a seção "Método aplicado" (frameworks → onde aparecem) e a lista de `[COLCHETES]` a preencher.

## Pitfalls

- Imitar o tom sem aplicar o método. O tom é o menor ganho; os frameworks são o produto.
- Inventar prova. Depoimento, número ou nome que o usuário não deu não entra: vira `[COLCHETE]`.
- Escrever para "o público". A referência insiste em uma pessoa específica; sem avatar, pare e pergunte.
- Peça longa demais para o formato pedido. Respeite o tamanho; corte antes de entregar.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. A peça existe, em português, no formato e tamanho pedidos.
2. A seção "Método aplicado" lista ao menos 3 frameworks de `references/metodo-halbert.md` e onde cada um aparece na peça.
3. Nenhum número, nome ou depoimento aparece sem ter vindo do usuário; o que falta está em `[COLCHETES]` e listado no fim.
4. A checagem de qualidade da referência foi rodada e não há item marcado como falho na entrega final.
5. O texto não contém "como Halbert diria", "no estilo de", nem menção ao método dentro da peça: o método é invisível para o leitor final.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/metodo-halbert.md`
- `references/write-visceral-copy.md`
