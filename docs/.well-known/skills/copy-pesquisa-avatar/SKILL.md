---
name: copy-pesquisa-avatar
description: Pesquise lacunas sobre o público com memória, acervo e fontes disponíveis. Entregue evidências, hipóteses e plano de coleta, sem inventar pesquisa ou impor quotas de método.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/copy-pesquisa-avatar
  tags: copy, copywriting, pesquisa, avatar
  related: copy-pipeline, copy-auditoria
  contract_version: 1.0.0
  content_revision: 1.0.3
  distribution_ref: main
---
# Pesquisa de público para a próxima decisão

Continue o perfil e a hipótese de público da pessoa. Investigue o que realmente muda a comunicação e entregue uma síntese rastreável do material acessível. Lacunas não se tornam fatos para preencher um template.

## When to Use

Use para apoiar a documentação de público, posicionamento ou pautas com pesquisa pertinente. Aproveite perfil/ICP ou contexto equivalente; uma hipótese declarada é um ponto de partida válido. Não exige pesquisa externa quando ela não está disponível.

## Quick Reference

Obrigatórios: negócio/oferta, público ou hipótese e decisão a esclarecer. Fontes acessíveis definem o alcance.

Para a síntese inicial, siga Procedure; não precisa abrir ou preencher um template. Para aprofundamento solicitado, escolha somente a referência pertinente entre avatar-research, analyze-mental-conversation, diagnose-market-sophistication, copysearch e diagnose-awareness-level. Esses métodos não são etapas obrigatórias da jornada. O material dos seis motivos está indisponível nesta edição; não invente categorias para substituí-lo.

Os templates preservam métodos e atribuições de origem. Mínimos de fatos, headlines e pontuações não são critérios de aceite desta síntese. Documentos citados que não estejam acessíveis permanecem fontes não consultadas.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Consulte o perfil/ICP e acervo antes de coletar novamente required/optional. Identifique as lacunas que realmente mudam a comunicação. Não transforme descrição da fundadora em entrevista de clientes.
4. Pesquise nos materiais acessíveis e, quando disponível, ferramenta externa adequada. Registre origem, data conhecida e trecho que sustenta cada achado. Sem acesso, deixe a pesquisa externa pendente e entregue síntese do acervo/hipóteses e um plano específico de coleta.
5. Salve a síntese de público no destino autorizado, diferenciando citação, fato observado, inferência e hipótese. O formato inicial pode ser Markdown simples com mapa de origem, achados, lacunas e plano de coleta. Templates ampliados são opcionais: não exigir mínimos de fatos, headlines, insights ou pontos para esta entrega. Não invente números, depoimentos, emoções ou nomes. Perguntas necessárias têm exemplos contextuais próprios. Entregue ao ICP/posicionamento os achados e limites sem apagar sua procedência.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Pesquisa recorrente pode valer com fontes novas e decisão a alimentar. Não gerar relatórios repetidos sem novidade nem monitorar canais sem acesso autorizado.

## Pitfalls

- Trocar evidência por leitura psicológica sem fonte ou tratar relato da fundadora como entrevista de cliente.
- Preencher quotas de fatos/headlines com conteúdo inventado ou impor quantidade mínima de insights no lugar delas.
- Percorrer todas as referências ou exigir um documento histórico ausente para começar.
- Deixar de salvar a síntese possível por falta de pesquisa externa, campos opcionais ou pontuação.

## Verification

Cada achado tem fonte inspecionada ou rótulo de hipótese; pesquisa indisponível não é alegada como realizada. Não pontuar resultado por quantidade de hipóteses inventadas. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill

- `references/analyze-mental-conversation.md`
- `references/ativacao.md`
- `references/avatar-research.md`
- `references/checklist-avatar-research-checklist.md`
- `references/checklist-copysearch-checklist.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/copysearch.md`
- `references/diagnose-awareness-level.md`
- `references/diagnose-market-sophistication.md`
- `references/identidade.json`
- `references/map-6-primary-motives.md`
- `scripts/auditar.py`
- `templates/avatar-research-template.md`
- `templates/copysearch-template.md`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
