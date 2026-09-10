---
name: copy-voz
description: Documente a voz da pessoa por entrevista ou análise do seu acervo, com trechos, origem e limites. Não imponha idioma, quotas ou identidade de um autor de referência.
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
    - voz
    - marca-pessoal
    related_skills:
    - copy-pipeline
    - copy-auditoria
---
# Voz da pessoa, com origem e limites

Continue o posicionamento e as preferências já conhecidos. Com acervo suficiente, extraia padrões sustentados pelo material; com pouco acervo, construa direção provisória por entrevista. Uma entrevista não vira extração de DNA por preencher um template.

## When to Use

Use para documentar ou revisar tom, vocabulário, aberturas e fechamentos da própria pessoa. Escolha entrevista ou extração conforme o objetivo e o material; não é imitação de um copywriter de referência.

## Quick Reference

Obrigatórios: autor/marca, objetivo e material acessível. Reaproveite preferências e decisões atuais.

Para entrevista ou guia inicial, siga Procedure sem abrir templates ampliados. Para extração solicitada, escolha somente a referência pertinente de comunicação, frases ou frameworks. Vinte arquivos, dez frameworks, quarenta e duas frases e sete categorias são estruturas históricas, não requisitos universais. A suficiência do acervo depende da variedade e da força dos padrões observados; declare os limites.

Guias saem no idioma da pessoa. Citações mantêm o texto original e sua origem; eventual tradução é rotulada. Números e frequências exigem contagem reproduzível, não estimativa da LLM.

## Procedure

Pergunte somente o que muda a entrega atual. Cada pergunta aberta usa três linhas: Base: trecho literal pertinente da memória, acervo ou resposta humana observada; Pergunta: a lacuna; Exemplo de resposta: uma frase curta que reaproveita o fato conhecido e deixa [campo a preencher] no dado desconhecido. Dentro do campo, escreva só o nome do dado, sem listas de alternativas, sugestões de especialidade ou fatos plausíveis. Se não houver base pertinente, declare “sem informação registrada” e use apenas campos. Ausência de registro não significa que a pessoa nunca fez algo. Mantenha propostas novas de ações fora dos exemplos de resposta. Antes de enviar, remova toda afirmação factual do exemplo que não tenha origem na base citada. Se a pergunta for sobre prática ou experiência não confirmada, deixe o relato inteiro em aberto: “Sobre [contexto já conhecido], meu histórico é [relato, se houver]”. Não comece com “já fiz”, “eu começo fazendo” ou “nunca fiz” sem fonte, mesmo que o restante tenha campos. A oferta de uma atividade não prova sua realização. Escreva Base, Pergunta e Exemplo em linhas separadas.

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

- Forçar inglês, um autor ou a identidade de outra marca sobre a pessoa.
- Inventar frases, frameworks, categorias ou números para completar quotas de template.
- Tratar exemplos de preenchimento como evidência ou chamar entrevista de DNA extraído.
- Bloquear um guia provisório por falta de um acervo ampliado ou exigir configuração que já está disponível.

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
