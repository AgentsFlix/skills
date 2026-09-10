---
name: hybrid-perfil
description: Documente o perfil do negócio para a tarefa atual, usando memória e acervo antes da entrevista. Entregue um perfil com origem e lacunas; aprofunde dados institucionais quando solicitado.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/hybrid-perfil
  tags: hybrid-workspace, negocio, elicitacao, yaml
  related: hybrid-diagnostico, hybrid-proxima-acao, hybrid-fundador, hybrid-icp
  contract_version: 1.0.0
  content_revision: 1.0.2
  distribution_ref: main
---
# Perfil do negócio para a tarefa atual

Transforme o que a pessoa já informou em um perfil reutilizável, com identificação, oferta, público, problema e objetivo. Use a entrevista apenas para o que falta e muda a entrega. O perfil institucional ampliado é um aprofundamento opcional.

## When to Use

Use quando a pessoa pedir para documentar ou revisar o negócio e continuar a jornada. Comece com os dados disponíveis; não existe percentual mínimo para iniciar.

## Quick Reference

Identificação do negócio, oferta, público declarado ou hipótese, problema e objetivo pertinente. Campos desconhecidos ficam explícitos. Não exigir missão, visão, credenciais ou equipe para uma síntese inicial.

| Necessidade | Caminho |
|---|---|
| Entrega inicial desta jornada | Siga Procedure abaixo; não exige abrir nem copiar templates. |
| Aprofundamento explicitamente solicitado | `references/elicit-company-profile.md` e os templates institucionais, apenas quando houver pedido de aprofundamento. |

Use o destino já autorizado pelo contexto. Configuração só é consultada quando falta um caminho real. A ausência de um YAML prévio não é um bloqueio.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Leia o pedido, a memória atual e o acervo indicado. Se houver perfil anterior, use a revisão atual; consulte versões antigas somente para conflito ou lacuna concreta. Aproveite correções e recusas já resolvidas. Não abra questionários ou templates antes desse mapa.
2. Registre identificação, oferta, público declarado (inclusive hipótese), problema e objetivo com origem. Separe fatos da pessoa, propostas do agente e desconhecido. Esses campos bastam para a síntese desta jornada; missão, visão, credenciais, história e equipe são aprofundamentos opcionais. Não é necessário copiar um template.
3. Se faltar algo que impeça entender o negócio, pergunte apenas essa lacuna, com exemplo próprio ligado ao contexto. Use [campo a preencher] para números ou histórico não fornecidos. Se a pessoa não souber, registre desconhecido e avalie o que ainda pode ser entregue; não repita a pergunta nem peça que aceite um exemplo como fato.
4. Salve um perfil legível e reutilizável no destino local autorizado, em Markdown ou YAML, com identificação, oferta, público/hipótese, problema, objetivo, mapa de origem e lacunas. Preserve revisões anteriores. Quando a pessoa já pediu essa documentação, não peça nova autorização para gravar o rascunho.
5. Confira se o perfil permite a próxima etapa de público sem ultrapassar o que a pessoa forneceu. Marque o documento como parcial quando houver campos abertos. Não calcule percentuais para essa síntese. A operação pode estar completed com documento parcial útil; waiting exige explicar a lacuna que impede a entrega atual, não a ausência de campos opcionais.
6. Informe o arquivo, os limites e a próxima etapa. Não reconfirme tom, oferta ou escopo já dados. Avalie se revisão futura vale como rotina, respeitando recusas e mantendo ativação separada. O perfil institucional completo pode ser aprofundado quando houver um pedido específico.

## Avaliação de rotina

Perfil inicial é pontual. Revisão pode valer após mudança de oferta, público ou operação; não reentrevistar em frequência fixa sem motivo.

## Pitfalls

- Transformar a lista de campos de um esquema ampliado em questionário obrigatório.
- Exigir diagnosis.yaml, níveis de mercado ou um percentual de completude para entregar uma síntese provisória.
- Pedir novamente informação atual, sugerir evidência inventada ou atribuir inferência do agente à pessoa.
- Esperar nova autorização para salvar o rascunho no destino local já autorizado.
- Confundir entrega parcial útil com pesquisa validada ou documento institucional completo.

## Verification

O arquivo de perfil existe no destino autorizado, liga dados à origem e preserva desconhecidos/hipóteses. A entrevista cobre somente lacunas que mudam a entrega; exemplos não criam fatos. Estado da operação e do documento estão separados. Campos institucionais opcionais não impedem a passagem do perfil útil ao público. Confira o aceite transversal de references/contrato-agentflix.md.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/elicit-company-profile.md`
- `references/elicit-credentials.md`
- `references/elicit-vision.md`
- `references/identidade.json`
- `references/setup-business-profile.md`
- `references/workflow-business-profile-pipeline.yaml`
- `scripts/auditar.py`
- `templates/company-company-profile.yaml`
- `templates/company-credentials.yaml`
- `templates/culture-mission-vision-positioning.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
