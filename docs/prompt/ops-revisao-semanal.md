# ops-revisao-semanal · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `ops-revisao-semanal.md` uma skill chamada ops-revisao-semanal. Quando eu pedir algo como "revisão da semana", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

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

## Arquivos desta skill (incluídos abaixo)

- `references/metodo-revisao-semanal.md`
- `templates/perfil-do-time.yaml`


---

## Referência: references/metodo-revisao-semanal.md

# Método: revisão semanal por zona

Origem: `nucleo-ops-ia` (Synkra AIOS), generalizado.

1. Colete a lista de atividades da semana por pessoa, com estimativa de horas. Sem a lista, pergunte; não invente.
2. Classifique cada atividade em uma de quatro zonas (Hendricks): **genialidade** (faz melhor que qualquer um e ganha energia), **excelência** (faz muito bem e drena), **competência** (qualquer um faria), **incompetência** (não deveria estar com ela).
3. Compare a distribuição real com `ideal_semana` do perfil. Marque desvio quando a diferença passar de 10 pontos percentuais em qualquer zona, e alerta quando houver qualquer hora em incompetência.
4. Cheque as cinco tensões comuns: velocidade vs profundidade entre pessoas de ritmo diferente; quem decide o quê; retrabalho por briefing impreciso; tarefa fora da zona; sobrecarga desigual.
5. Para cada desvio: fato, causa provável, ação, responsável. Ação é verbo com dono, não intenção.

## Saída

Tabela por pessoa (zona · ideal · real · status), lista de tensões com resolução proposta, e a lista de ações da próxima semana com checkbox.


---

## Referência: templates/perfil-do-time.yaml

# Perfil do time para as skills ops-*. Uma entrada por pessoa. Sem isso, a skill pergunta.
# Copie para o caminho configurado em `ops.perfis_do_time` e preencha.
time:
  - nome: ""              # como a pessoa é chamada no dia a dia
    papel: ""             # ex.: produto, arquitetura, vendas, atendimento
    zona_genialidade: []  # o que ela faz melhor que qualquer um e ainda ganha energia (Hendricks)
    zona_excelencia: []   # faz muito bem, mas drena
    zona_incompetencia: [] # nunca rotear para ela; vetos
    kolbe:                # 1 a 10, se souber (Kolbe A). Sem o teste, deixe vazio e descreva em `ritmo`
      fato_finder: null
      follow_thru: null
      quick_start: null
      implementor: null
    ritmo: ""             # ex.: "sprint rápido, decide com pouco dado" ou "pesquisa profunda antes de responder"
    formato_briefing: ""  # ex.: "CONTEXTO → PROBLEMA → RESULTADO → CRITÉRIOS, até 10 linhas, com exemplo visual"
    ideal_semana:         # distribuição alvo do tempo, em % (Hendricks: genialidade alta, incompetência zero)
      genialidade: 70
      excelencia: 20
      competencia: 10
      incompetencia: 0
    capacidade_livre_pct: null  # quanto da semana está disponível para trabalho novo
