---
name: ops-revisao-semanal
description: 'Toda sexta, quem operou na zona de genialidade e quem passou a semana fora dela. Usa o perfil do SEU time (zona de genialidade, Kolbe) como entrada. Use quando: "revisão da semana" e cole ou aponte…'
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
    - operacao
    - time
    - genius-zone
    - kolbe
    - gestao
    related_skills:
    - ops-rotear-tarefa
    - ops-briefing
    - ops-avaliar-fit
---

# SEXTA-FEIRA · Quem operou na zona, quem saiu dela

Toda sexta, quem operou na zona de genialidade e quem passou a semana fora dela. O agente cruza as tarefas da semana com os perfis do time e devolve o relatório: onde houve encaixe, onde houve atrito, e o que mover na semana seguinte.

O time é o seu: a skill lê um arquivo de perfil (modelo em `templates/perfil-do-time.yaml`) e nunca traz nomes prontos.

## When to Use

- Diga: "revisão da semana" e cole ou aponte as tarefas feitas.
- Quando alguém está fazendo o que não deveria e ninguém sabe dizer por quê.
- NÃO use como avaliação de desempenho. Zona de genialidade é sobre encaixe de tarefa, não sobre nota de pessoa.

## Quick Reference

Obrigatórios: período, perfil das pessoas com zonas e ideal_semana e lista documentada de atividades/horas da semana. Reutilize arquivos, conversa e registros acessíveis com fonte/data; memória de uma tarefa planejada não prova sua execução. Opcionais: tensões relatadas, retrabalho, decisões anteriores e disponibilidade atual. Ausência de relato de tensão não equivale a nenhuma tensão.

Leia `references/configuracao.json` apenas para resolver configuração ausente após o bootstrap. Defaults são exemplos; confirme o destino real antes de escrever.

| entrada | de onde vem |
|---|---|
| perfil do time | `ops.perfis_do_time` (config injetada) → arquivo YAML no modelo de `templates/perfil-do-time.yaml` |
| método | `references/metodo-revisao-semanal.md` |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Faça bootstrap de período, perfil e registros disponíveis. Reuse `ops.perfis_do_time` quando conhecido e válido. Sem perfil suficiente, use `templates/perfil-do-time.yaml` como referência dos campos que faltam, sem pedir que a pessoa preencha tudo de novo. Cada pergunta aberta precisa de exemplo baseado no contexto recuperado.
2. Reúna atividades e horas da semana com fonte/data. Separe planos de execuções relatadas. Não reconstrua fatos não registrados. Horas ausentes impedem calcular a distribuição correspondente; solicite a lacuna e mantenha essa comparação aguardando.
3. Aplique `references/metodo-revisao-semanal.md` às atividades documentadas: zona, distribuição real vs ideal_semana, desvios, tensões e ações. Declare a cobertura parcial quando não representar a semana inteira. Percentual sobre amostra não é percentual da semana completa.
4. Para cada desvio, mostre fato, hipótese de causa, ação proposta e responsável sugerido. Não confirme causa, disponibilidade nem aceitação do responsável sem evidência. Tensões não investigadas ficam não verificadas, não "nenhuma".
5. Entregue tabela por pessoa, tensões com resolução proposta e ações da próxima semana, com pendências identificadas. Avalie um check-in recorrente pelo contrato; falta de resposta mantém aguardando e não confirma atividades.

## Avaliação de rotina

Vale sugerir check-in semanal se a pessoa quer revisar o time e há registros disponíveis. Pode preparar tabela e pedir só lacunas. Sem resposta humana, manter aguardando; não inventar a semana nem a disponibilidade do time.

## Pitfalls

- Inventar perfil. Sem o arquivo, a skill entrega o modelo e para; rotear por achismo é pior que não rotear.
- Tratar veto como preferência. `zona_incompetencia` elimina a pessoa da decisão, mesmo que ela esteja livre.
- Confundir excelência com genialidade. Fazer muito bem e drenar é excelência; a meta é minimizar, não maximizar.

## Verification

1. Toda atividade documentada está classificada com pessoa, fonte e período; planos não foram tratados como execução.
2. Comparações real/ideal têm horas e denominador verificáveis. Cobertura parcial e cálculos impossíveis estão declarados, sem zero inventado.
3. Desvios têm fato, hipótese de causa e proposta de ação com responsável, sem simular concordância ou disponibilidade.
4. As cinco tensões têm evidência ou status não verificado. Silêncio não virou "nenhuma tensão".
5. A lista de ações e pendências está entregue, e a avaliação de rotina distingue proposta de ativação. Entrega parcial não foi registrada como revisão completa.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/identidade.json`
- `references/metodo-revisao-semanal.md`
- `scripts/auditar.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
- `templates/perfil-do-time.yaml`
