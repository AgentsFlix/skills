---
name: copy-voz
description: 'Extrai o DNA de comunicação de uma pessoa: vocabulário, frases-assinatura, frameworks que ela repete, o jeito de abrir e fechar. Use quando o pedido envolver voz da marca, DNA de comunicação…'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/copy-voz
  tags: copy, copywriting, voz, marca-pessoal
  related: copy-pipeline, copy-auditoria
  contract_version: 1.0.0
  content_revision: 1.0.1
  distribution_ref: main
---

# INCONFUNDÍVEL · DNA de comunicação e frases-assinatura

Extrai o DNA de comunicação de uma pessoa: vocabulário, frases-assinatura, frameworks que ela repete, o jeito de abrir e fechar. O agente lê o material que você der e devolve um guia de voz que qualquer outra skill passa a respeitar. Copy boa na voz errada ainda é copy errada.

## When to Use

- O pedido envolve: voz da marca, DNA de comunicação, frases-assinatura, extrair frameworks, tom de voz.
- Diga: "extrai a voz de [nome] a partir destes textos: [colar ou apontar]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Obrigatórios: autor/marca, objetivo e material disponível. Acervo suficiente é requisito para alegar extração de DNA, não para começar por entrevista de voz.

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| extract communication dna | `references/extract-communication-dna.md` |
| extract signature phrases | `references/extract-signature-phrases.md` |
| extract frameworks | `references/extract-frameworks.md` |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Identifique se o pedido exige entrevista, extração ou revisão. Reaproveite perfil, posicionamento e preferências da etapa anterior. Leia apenas o material próprio autorizado; diferencie texto original de texto de terceiros ou gerado como exemplo.
4. Sem diversidade suficiente de acervo, entregue direção provisória e entreviste as lacunas essenciais, cada pergunta com exemplo adjacente baseado no contexto. Não bloqueie uma pessoa começando por falta de dezenas de textos; também não declare extração completa com duas frases.
5. Com acervo suficiente, extraia padrões e exceções com trechos e origem. Entregue guia de voz, vocabulário, estrutura e aplicações contextualizadas; dados não sustentados ficam hipótese. Teste a coerência com posicionamento e peça ajuste apenas quando necessário, com exemplo próprio. Não copiar voz de um autor de referência.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Revisão pode valer com acervo novo suficiente; definição inicial ou pequeno ajuste são pontuais. Não pedir a mesma preferência a cada uso.

## Pitfalls

- Pular o bloco `Inputs` e escrever com o que veio. Falta de avatar ou de benefício principal produz copy genérica; pergunte.
- Misturar duas sub-tarefas numa entrega só. Uma de cada vez, cada uma com seu checklist.
- Preencher `[COLCHETES]` com chute para a peça "ficar pronta". Colchete aberto é honesto; número inventado é dívida.
- Ignorar o `Output Format`. Ele existe para a peça encaixar no passo seguinte (página, e-mail, anúncio).

## Verification

Guia separa escolhas declaradas, padrões demonstrados e hipóteses; exemplos rastreáveis e coerentes com posicionamento. Entrevista válida para iniciante, sem DNA falsamente extraído. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill

- `references/ativacao.md`
- `references/checklist-copywriter-agent-creation-checklist.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/extract-communication-dna.md`
- `references/extract-frameworks.md`
- `references/extract-signature-phrases.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `templates/communication-dna-tmpl.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
- `templates/frameworks-extraction-tmpl.yaml`
- `templates/signature-phrases-tmpl.yaml`
