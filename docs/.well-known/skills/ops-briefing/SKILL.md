---
name: ops-briefing
description: 'O mesmo briefing, escrito do jeito que cada pessoa lê: texto corrido para quem lê, checklist para quem executa, diagrama para quem enxerga. Usa o perfil do SEU time (zona de genialidade, Kolbe) como…'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.5
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/ops-briefing
  tags: operacao, time, genius-zone, kolbe, gestao
  related: ops-rotear-tarefa, ops-revisao-semanal, ops-avaliar-fit
  config: 'ops.perfis_do_time: Caminho do YAML com o perfil do time (zona de genialidade, Kolbe, formato de briefing). Modelo em templates/perfil-do-time.yaml'
---

# DO JEITO QUE VOCÊ LÊ · Cada pessoa lê do seu jeito

O mesmo briefing, escrito do jeito que cada pessoa lê: texto corrido para quem lê, checklist para quem executa, diagrama para quem enxerga. O agente gera as versões a partir de uma só fonte, e ninguém mais recebe instrução no formato errado.

O time é o seu: a skill lê um arquivo de perfil (modelo em `templates/perfil-do-time.yaml`) e nunca traz nomes prontos.

## When to Use

- Diga: "briefing para [pessoa] sobre [tarefa]".
- Quando alguém está fazendo o que não deveria e ninguém sabe dizer por quê.
- NÃO use como avaliação de desempenho. Zona de genialidade é sobre encaixe de tarefa, não sobre nota de pessoa.

## Quick Reference

| entrada | de onde vem |
|---|---|
| perfil do time | `ops.perfis_do_time` (pergunte ao usuário) → arquivo YAML no modelo de `templates/perfil-do-time.yaml` |
| método | `references/metodo-rotear.md` |

## Procedure

1. Leia o perfil do time em `ops.perfis_do_time`. Sem arquivo, entregue `templates/perfil-do-time.yaml`, peça para preencher e pare.
2. Confirme para quem é o briefing e colete: tarefa, resultado esperado, urgência, restrições, entregável.
3. Escreva no `formato_briefing` da pessoa (seção 5 de `references/metodo-rotear.md`). Respeite o tamanho do formato: quem lê rápido recebe até 10 linhas; quem pesquisa recebe o que for preciso, com dados e links.
4. Acrescente duas dicas de timing coerentes com o `ritmo` da pessoa (quando enviar, quanto esperar, quando não interromper).
5. Entregue o briefing e as dicas. Nada de informação que a pessoa não precisa para executar.

## Pitfalls

- Inventar perfil. Sem o arquivo, a skill entrega o modelo e para; rotear por achismo é pior que não rotear.
- Tratar veto como preferência. `zona_incompetencia` elimina a pessoa da decisão, mesmo que ela esteja livre.
- Confundir excelência com genialidade. Fazer muito bem e drenar é excelência; a meta é minimizar, não maximizar.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O briefing segue o `formato_briefing` da pessoa (ou o padrão pelo `ritmo`), seção a seção.
2. Respeita o tamanho do formato (≤10 linhas para ritmo rápido).
3. Contém resultado esperado e critério de pronto.
4. Há duas dicas de timing coerentes com o `ritmo`.
5. Não há jargão nem detalhe fora do que a pessoa precisa para executar.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/metodo-rotear.md`
- `templates/perfil-do-time.yaml`
