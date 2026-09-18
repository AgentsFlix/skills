# ops-avaliar-fit · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `ops-avaliar-fit.md` uma skill chamada ops-avaliar-fit. Quando eu pedir algo como "avalia o fit deste projeto: [descrição]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

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

## Arquivos desta skill (incluídos abaixo)

- `references/metodo-avaliar-fit.md`
- `templates/perfil-do-time.yaml`


---

## Referência: references/metodo-avaliar-fit.md

# Método: avaliar se um projeto cabe no time

Origem: `nucleo-ops-ia` (Synkra AIOS), generalizado.

## Dimensões e pesos

| dimensão | peso | pergunta |
|---|---|---|
| encaixe na genialidade do time | 50% (dividido entre as pessoas) | quanto do projeto cai na `zona_genialidade` de alguém? |
| capacidade | 20% | `capacidade_livre_pct` comporta o esforço estimado? |
| complexidade | 15% | está dentro do que o time já entregou? |
| valor estratégico | 15% | alinha com a direção declarada do negócio? |

Cada dimensão de 1 a 10; a nota final é a média ponderada.

## Red flags (subtraem da nota final)

- exige habilidade que ninguém do time tem: −3
- prazo impossível sem cortar pesquisa: −2
- cliente que precisa de suporte constante: −2
- 100% operacional, sem componente estratégico: −3
- exige gerir equipe grande: −2

## Veredito

| nota | veredito | ação |
|---|---|---|
| 8 a 10 | GO | aceitar; montar o plano de quem faz o quê e quando |
| 5 a 7 | CONDICIONAL | aceitar com ajuste explícito de escopo, prazo ou terceirização |
| 1 a 4 | NO-GO | recusar ou renegociar a base |

Dizer NO-GO cedo custa menos que descobrir tarde. É uma resposta válida.


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
