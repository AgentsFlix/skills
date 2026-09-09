---
type: Playbook
title: Hábitos que Cabem na Vida
description: Procedimento de hábitos cotidianos com memória contextual, registros de execução e revisão de validade.
status: draft
tags: [habitos, memoria, ciclo-de-vida]
generated:
  by: process:agentflix-skill-authoring
  at: 2026-09-09T16:11:07.121754+00:00
stale_after: 2026-12-08T00:00:00Z
sources:
  - id: maas
    resource: https://maas-hub.vercel.app/reader?doc=biblioteca-maas%2Fatomic-habits-james-clear.md
    title: Mapeamento Atomic Habits, MaaS Hub
  - id: clear-summary
    resource: https://jamesclear.com/atomic-habits-summary
    title: Atomic Habits Summary
    author: human:james-clear
  - id: clear-tracker
    resource: https://jamesclear.com/habit-tracker
    title: The Ultimate Habit Tracker Guide
    author: human:james-clear
  - id: okf
    resource: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md
    title: Open Knowledge Format v0.2
agentflix:
  schema_version: 1
  skill_id: habitos-que-cabem
  content_revision: 1.1.2
  verification_evidence: []
---

# Conhecimento e validade

O mapeamento MaaS foi o ponto de partida. As instruções do método são uma síntese autoral baseada nas fontes
primárias de James Clear. Os cenários, módulos, metas numéricas e resultados do mapeamento não são tratados como
casos comprovados ou promessas.[^maas]

O método adapta contexto, ação e registro à pessoa. Bootstrap, elicitação, eventos e monitoramento são decisões
operacionais AgentFlix, não técnicas atribuídas a James Clear. Consulte `metodo-habitos.md` e `revisao-e-retomada.md`.[^clear-summary][^clear-tracker]

Este arquivo usa os campos de proveniência e ciclo de vida do OKF. `agentflix` é extensão local, não parte obrigatória
do padrão. A revisão de conteúdo é separada da versão de distribuição do catálogo.[^okf]

O prazo de revisão é uma política editorial inicial proposta para esta skill, não prazo científico de validade do método.
`draft` indica que a revisão editorial humana ainda não ocorreu. Sem `verified`, nenhuma verificação é alegada.
Uma verificação deve incluir ator, instante real e evidência vinculada à revisão/digest do conteúdo; a implementação
ser validada por testes não comprova eficácia comportamental. Renovar exige conferir fontes e registrar conclusão,
mesmo quando a conclusão for manter o procedimento. Usar ou instalar nunca muda `stale_after`.

[^maas]: Mapeamento indicado pelo usuário.
[^clear-summary]: Fundamentos do método, fonte primária.
[^clear-tracker]: Registro e retomada, fonte primária.
[^okf]: Especificação de metadados e ciclo de vida.
