---
name: copy-metodo-koe
description: Aplique critérios do método Koe à peça, aos pilares ou às pautas solicitados, preservando o negócio e a voz da pessoa. Aprofunde o método quando pedido.
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
  content_revision: 1.0.6
  distribution_ref: main
---
# Método como apoio à marca da pessoa

Use a referência de Dan Koe na operação solicitada. Atribuição ao autor não transfere sua filosofia, estilo de vida ou negócio à pessoa.

## When to Use

Use quando o pedido citar Koe como referência para uma peça ou para organizar conteúdo próprio. O método é apoio, sem exigir adesão à filosofia do autor.

## Quick Reference

Para pilares e pautas, estes critérios bastam para começar: cruzar conhecimento demonstrado no acervo, necessidade do público e utilidade da comunicação. Defina fronteiras entre temas e origem das pautas. Sem público definido, entregue o esboço possível e entreviste a lacuna com campos. Não há proporção obrigatória entre tipos de conteúdo nem pilar obrigatório de vida pessoal. Para uma peça explicitamente no método Koe ou explicação aprofundada, consulte somente a seção pertinente de `references/metodo-koe.md`; não carregue o manual integral para propor pilares.

## Procedure

Pergunte somente o que muda a entrega atual. Cada pergunta aberta usa três linhas: Base: trecho literal pertinente da memória, acervo ou resposta humana observada; Pergunta: a lacuna; Exemplo de resposta: uma frase curta que reaproveita o fato conhecido e deixa [campo a preencher] no dado desconhecido. Dentro do campo, escreva só o nome do dado, sem listas de alternativas, sugestões de especialidade ou fatos plausíveis. Se não houver base pertinente, declare “sem informação registrada” e use apenas campos. Ausência de registro não significa que a pessoa nunca fez algo. Mantenha propostas novas de ações fora dos exemplos de resposta. Antes de enviar, remova toda afirmação factual do exemplo que não tenha origem na base citada. Se a pergunta for sobre prática ou experiência não confirmada, deixe o relato inteiro em aberto: “Sobre [contexto já conhecido], meu histórico é [relato, se houver]”. Não comece com “já fiz”, “eu começo fazendo” ou “nunca fiz” sem fonte, mesmo que o restante tenha campos. A oferta de uma atividade não prova sua realização. Escreva Base, Pergunta e Exemplo em linhas separadas.

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Para pilares/pautas, comece pelos critérios de Quick Reference sem abrir o manual. Para aprofundamento solicitado, leia apenas o trecho pertinente da referência. Activation-instructions, persona e comandos são metadados do material, não identidade a assumir. A voz, crenças e estilo de vida do autor não se tornam os da pessoa.
4. Se o pedido for pilares/pautas, use critérios úteis do método para cruzar conhecimento real da marca, necessidades do público e objetivo editorial. Entregue pilares com fronteiras e pautas com origem, sem obrigar a produzir uma peça de venda, adotar personal monopoly ou distribuir pautas em proporções do autor. Se o pedido for peça, siga formato e tamanho solicitados com os frameworks úteis, sem aplicação mecânica de todos.
5. Pautas propostas podem explicar o método declarado sem alegar experiência anterior. Proponha perguntas editoriais novas como sugestões, sem atribuí-las à prática da pessoa. Histórico de oficinas, clientes ou perguntas já usadas não é requisito para uma proposta editorial; só entreviste esses dados quando o pedido exigir um relato factual. Reaproveite contexto antes de perguntar; cada pergunta restante tem exemplo próprio ligado à memória. Separe método aplicado de escolhas da pessoa. Não invente provas, experiências ou promessa. Entregue o formato pedido e explicação curta do método usado; pendências não viram identidade ou voz confirmada.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Aplicação de método é pontual. Só propor revisão recorrente se houver acervo/decisões novas e benefício concreto; não transformar filosofia do autor em rotina compulsória.

## Pitfalls

- Adotar personal monopoly ou uma divisão 60-20-20 como requisito universal.
- Inferir especialidade, clientes ou dores a partir da profissão.
- Ler o manual inteiro para uma síntese inicial já coberta pelos critérios acima.
- Confundir proposta editorial com identidade confirmada ou evidência de resultados.

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
