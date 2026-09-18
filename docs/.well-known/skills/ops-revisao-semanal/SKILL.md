---
name: ops-revisao-semanal
description: 'Toda sexta, quem operou na zona de genialidade e quem passou a semana fora dela. Usa o perfil do SEU time (zona de genialidade, Kolbe) como entrada. Use quando: "revisão da semana" e cole ou aponte…'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.4
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/ops-revisao-semanal
  tags: operacao, time, genius-zone, kolbe, gestao
  related: ops-rotear-tarefa, ops-briefing, ops-avaliar-fit
  config: 'ops.perfis_do_time: Caminho do YAML com o perfil do time (zona de genialidade, Kolbe, formato de briefing). Modelo em templates/perfil-do-time.yaml'
---

# SEXTA-FEIRA · Quem operou na zona, quem saiu dela

Toda sexta, quem operou na zona de genialidade e quem passou a semana fora dela. O agente cruza as tarefas da semana com os perfis do time e devolve o relatório: onde houve encaixe, onde houve atrito, e o que mover na semana seguinte.

O time é o seu: a skill lê um arquivo de perfil (modelo em `templates/perfil-do-time.yaml`) e nunca traz nomes prontos.

## When to Use

- Diga: "revisão da semana" e cole ou aponte as tarefas feitas.
- Quando alguém está fazendo o que não deveria e ninguém sabe dizer por quê.
- NÃO use como avaliação de desempenho. Zona de genialidade é sobre encaixe de tarefa, não sobre nota de pessoa.

## Quick Reference

| entrada | de onde vem |
|---|---|
| perfil do time | `ops.perfis_do_time` (pergunte ao usuário) → arquivo YAML no modelo de `templates/perfil-do-time.yaml` |
| método | `references/metodo-revisao-semanal.md` |

## Procedure

1. Leia o perfil do time em `ops.perfis_do_time`. Sem arquivo, entregue `templates/perfil-do-time.yaml`, peça para preencher e pare.
2. Colete as atividades da semana por pessoa, com horas estimadas, e qualquer tensão ou retrabalho relatado. Sem lista, pergunte; não reconstrua a semana de memória.
3. Aplique `references/metodo-revisao-semanal.md`: classificar por zona → comparar com `ideal_semana` → marcar desvios e alertas → checar as cinco tensões → uma ação com dono por desvio.
4. Entregue a tabela por pessoa, as tensões com resolução e a lista de ações da próxima semana.

## Pitfalls

- Inventar perfil. Sem o arquivo, a skill entrega o modelo e para; rotear por achismo é pior que não rotear.
- Tratar veto como preferência. `zona_incompetencia` elimina a pessoa da decisão, mesmo que ela esteja livre.
- Confundir excelência com genialidade. Fazer muito bem e drenar é excelência; a meta é minimizar, não maximizar.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. Toda atividade informada está classificada em uma das quatro zonas.
2. Há uma tabela por pessoa com ideal, real e status.
3. Todo desvio tem fato, causa, ação e responsável.
4. As cinco tensões foram checadas e o resultado está escrito, mesmo que "nenhuma".
5. Há uma lista de ações para a próxima semana, cada uma com dono.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/metodo-revisao-semanal.md`
- `templates/perfil-do-time.yaml`
