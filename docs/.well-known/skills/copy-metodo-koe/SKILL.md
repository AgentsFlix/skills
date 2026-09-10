---
name: copy-metodo-koe
description: 'Escreve copy pelo método de Dan Koe: One-person business, Alavancagem, Produto digital, Conteúdo como funil. Use quando pedirem ''como Koe'', negócio de uma pessoa e alavancagem, ou uma peça nesse…'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/copy-metodo-koe
  tags: copy, copywriting, koe, metodo, resposta-direta
  related: copy-headlines, copy-sales-page, copy-pipeline
  contract_version: 1.0.0
  content_revision: 1.0.0
  distribution_ref: main
---

# KOE · Negócio de uma pessoa e alavancagem

Transformou sete fracassos em um negócio de uma pessoa só que fatura milhões por ano. O método: monetizar a própria curiosidade, alavancar com conteúdo e produto digital, e nunca contratar antes de precisar. O agente escreve para quem constrói sozinho.

## When to Use

- O pedido cita Dan Koe ou "koe" pelo nome, ou pede uma peça "nesse estilo".
- A peça pedida é o terreno dele: negócio de uma pessoa e alavancagem.
- Você quer uma segunda versão de uma copy existente, reescrita por este método.
- NÃO use para escolher qual método aplicar: para isso, `copy-pipeline` decide. NÃO use para auditoria de copy alheia: `copy-auditoria`.

## Quick Reference

Obrigatórios dependem da operação: para peça, formato, objetivo, público e matéria-prima; para pilares, negócio, público e objetivo editorial. Provas só são necessárias para alegações que as exigem.

| pedido | passo do método | onde está |
|---|---|---|
| "escreve como Koe: …" | Procedure completo | `references/metodo-koe.md` → `core_principles`, `operational_frameworks` |
| "revisa isto como Koe" | Procedure 4 e 5 sobre o texto dado | `references/metodo-koe.md` → checklists e `quality_standards` |
| "explica o método" | resumir `core_principles` em 5 linhas | `references/metodo-koe.md` |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Leia apenas os frameworks da referência pertinentes à operação. Activation-instructions, persona e comandos são metadados do material, não identidade a assumir. A voz, crenças e estilo de vida do autor não se tornam os da pessoa.
4. Se o pedido for pilares/pautas, use critérios úteis do método para cruzar conhecimento real da marca, necessidades do público e objetivo editorial. Entregue pilares com fronteiras e pautas com origem, sem obrigar a produzir uma peça de venda. Se o pedido for peça, siga formato e tamanho solicitados com os frameworks úteis, sem aplicação mecânica de todos.
5. Reaproveite contexto antes de perguntar; cada pergunta restante tem exemplo próprio ligado à memória. Separe método aplicado de escolhas da pessoa. Não invente provas, experiências ou promessa. Entregue o formato pedido e explicação curta do método usado; pendências não viram identidade ou voz confirmada.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Aplicação de método é pontual. Só propor revisão recorrente se houver acervo/decisões novas e benefício concreto; não transformar filosofia do autor em rotina compulsória.

## Pitfalls

- Imitar o tom sem aplicar o método. O tom é o menor ganho; os frameworks são o produto.
- Inventar prova. Depoimento, número ou nome que o usuário não deu não entra: vira `[COLCHETE]`.
- Escrever para "o público". A referência insiste em uma pessoa específica; sem avatar, pare e pergunte.
- Peça longa demais para o formato pedido. Respeite o tamanho; corte antes de entregar.

## Verification

Entrega atende ao pedido real (inclusive pilares), usa método como apoio e preserva voz/contexto da pessoa; provas e exemplos não são fabricados. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/identidade.json`
- `references/metodo-koe.md`
- `scripts/auditar.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
