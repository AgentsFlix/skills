---
name: ops-avaliar-fit
description: 'Um projeto novo bate na porta. Usa o perfil do SEU time (zona de genialidade, Kolbe) como entrada. Use quando: "avalia o fit deste projeto.'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.5
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/ops-avaliar-fit
  tags: operacao, time, genius-zone, kolbe, gestao
  related: ops-rotear-tarefa, ops-briefing, ops-revisao-semanal
  config: 'ops.perfis_do_time: Caminho do YAML com o perfil do time (zona de genialidade, Kolbe, formato de briefing). Modelo em templates/perfil-do-time.yaml'
---

# CABE OU NÃO CABE · Cabe neste time ou não

Um projeto novo bate na porta. Antes de dizer sim, o agente avalia se ele cabe no time como ele é: quem faria, em que zona, com que custo. Às vezes a resposta é não, e dizer não cedo custa menos que descobrir tarde.

O time é o seu: a skill lê um arquivo de perfil (modelo em `templates/perfil-do-time.yaml`) e nunca traz nomes prontos.

## When to Use

- Diga: "avalia o fit deste projeto: [descrição]".
- Quando alguém está fazendo o que não deveria e ninguém sabe dizer por quê.
- NÃO use como avaliação de desempenho. Zona de genialidade é sobre encaixe de tarefa, não sobre nota de pessoa.

## Quick Reference

| entrada | de onde vem |
|---|---|
| perfil do time | `ops.perfis_do_time` (pergunte ao usuário) → arquivo YAML no modelo de `templates/perfil-do-time.yaml` |
| método | `references/metodo-avaliar-fit.md` |

## Procedure

1. Leia o perfil do time em `ops.perfis_do_time`. Sem arquivo, entregue `templates/perfil-do-time.yaml`, peça para preencher e pare.
2. Colete o projeto: o que entregar, prazo, orçamento, complexidade percebida, cliente.
3. Aplique `references/metodo-avaliar-fit.md`: nota por dimensão com justificativa → red flags → média ponderada → veredito GO / CONDICIONAL / NO-GO.
4. Se GO ou CONDICIONAL, monte o plano: fases, quem faz cada uma (pela zona), tempo, o que terceirizar. Se CONDICIONAL, diga exatamente o que precisa mudar.
5. Entregue a tabela de notas, os red flags, o veredito e o plano.

## Pitfalls

- Inventar perfil. Sem o arquivo, a skill entrega o modelo e para; rotear por achismo é pior que não rotear.
- Tratar veto como preferência. `zona_incompetencia` elimina a pessoa da decisão, mesmo que ela esteja livre.
- Confundir excelência com genialidade. Fazer muito bem e drenar é excelência; a meta é minimizar, não maximizar.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. Cada dimensão tem nota de 1 a 10 e uma justificativa de uma linha.
2. Os red flags foram checados um a um.
3. A nota final é a média ponderada declarada, e o veredito segue a tabela.
4. Se GO ou CONDICIONAL, o plano nomeia pessoa por fase, pela zona, com tempo.
5. Se CONDICIONAL, o ajuste necessário está escrito em uma frase.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/metodo-avaliar-fit.md`
- `templates/perfil-do-time.yaml`
