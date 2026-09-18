---
name: ops-rotear-tarefa
description: 'Toda tarefa que chega tem alguém do time para quem ela é natural e alguém para quem ela é tortura. Usa o perfil do SEU time (zona de genialidade, Kolbe) como entrada. Use quando: "roteia esta tarefa.'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.5
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/ops-rotear-tarefa
  tags: operacao, time, genius-zone, kolbe, gestao
  related: ops-briefing, ops-revisao-semanal, ops-avaliar-fit
  config: 'ops.perfis_do_time: Caminho do YAML com o perfil do time (zona de genialidade, Kolbe, formato de briefing). Modelo em templates/perfil-do-time.yaml'
---

# A PESSOA CERTA · A tarefa certa para a pessoa certa

Toda tarefa que chega tem alguém do time para quem ela é natural e alguém para quem ela é tortura. O agente lê o perfil de genius zone e o Kolbe de cada pessoa e diz para quem a tarefa vai, e por quê. Menos gente operando fora da própria zona.

O time é o seu: a skill lê um arquivo de perfil (modelo em `templates/perfil-do-time.yaml`) e nunca traz nomes prontos.

## When to Use

- Diga: "roteia esta tarefa: [descrição]".
- Quando alguém está fazendo o que não deveria e ninguém sabe dizer por quê.
- NÃO use como avaliação de desempenho. Zona de genialidade é sobre encaixe de tarefa, não sobre nota de pessoa.

## Quick Reference

| entrada | de onde vem |
|---|---|
| perfil do time | `ops.perfis_do_time` (pergunte ao usuário) → arquivo YAML no modelo de `templates/perfil-do-time.yaml` |
| método | `references/metodo-rotear.md` |

## Procedure

1. Leia o perfil do time no caminho configurado em `ops.perfis_do_time` (pergunte ao usuário, se ainda não souber). Se o arquivo não existir ou estiver vazio, entregue `templates/perfil-do-time.yaml` ao usuário, peça para preencher e pare.
2. Colete a tarefa: descrição, urgência, contexto. Sem descrição, pergunte.
3. Aplique `references/metodo-rotear.md` na ordem: classificar em 4 dimensões → casar com o time → checar vetos → se dois, definir handoff → briefing no formato da pessoa.
4. Entregue no formato de saída da referência. Se a resposta for "ninguém do time", diga isso e sugira terceirizar ou automatizar; não force um encaixe.

## Pitfalls

- Inventar perfil. Sem o arquivo, a skill entrega o modelo e para; rotear por achismo é pior que não rotear.
- Tratar veto como preferência. `zona_incompetencia` elimina a pessoa da decisão, mesmo que ela esteja livre.
- Confundir excelência com genialidade. Fazer muito bem e drenar é excelência; a meta é minimizar, não maximizar.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. A decisão nomeia uma pessoa do arquivo de perfil (ou diz "ninguém do time"), nunca um nome que não está no arquivo.
2. As quatro dimensões da tarefa aparecem classificadas.
3. Os vetos (`zona_incompetencia`) de todas as pessoas foram checados e o resultado está escrito.
4. Há um briefing no `formato_briefing` da pessoa escolhida.
5. Se duas pessoas: fases, ponto de handoff, quem valida e prazos estão definidos.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/metodo-rotear.md`
- `templates/perfil-do-time.yaml`
