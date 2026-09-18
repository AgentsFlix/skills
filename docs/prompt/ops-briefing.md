# ops-briefing · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `ops-briefing.md` uma skill chamada ops-briefing. Quando eu pedir algo como "briefing para [pessoa] sobre [tarefa]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

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

## Arquivos desta skill (incluídos abaixo)

- `references/metodo-rotear.md`
- `templates/perfil-do-time.yaml`


---

## Referência: references/metodo-rotear.md

# Método: rotear uma tarefa pela zona de genialidade

Origem: o squad `nucleo-ops-ia` (Synkra AIOS), generalizado. O método é o mesmo; os nomes das pessoas saem do arquivo de perfil do time, nunca daqui.

## 1. Classificar a tarefa em quatro dimensões

| dimensão | opções |
|---|---|
| tipo | decisão de produto/negócio · execução técnica · ambas |
| ritmo | sprint rápido · pesquisa profunda |
| domínio | usuário/mercado · sistema/arquitetura |
| complexidade | simples · média · complexa |

## 2. Casar com o time

Para cada pessoa do perfil, pontue de 0 a 3 quanto a tarefa cai na `zona_genialidade` dela. Empate se resolve por `ritmo`: sprint vai para quem tem `quick_start` alto ou `ritmo` rápido; pesquisa vai para quem tem `fato_finder` alto ou `ritmo` profundo.

## 3. Vetos, antes de decidir

Se a tarefa toca a `zona_incompetencia` de alguém, essa pessoa está fora, mesmo que sobre. Veto vence pontuação. Se todos estão vetados, a resposta é "ninguém do time; terceirizar ou automatizar", e isso é uma resposta válida.

## 4. Se for para duas pessoas

Defina: quem começa (quem define O QUE), o ponto de handoff, quem valida no fim, e o prazo de cada fase. Sem handoff explícito, a tarefa fica com os dois e com ninguém.

## 5. Briefing no formato da pessoa

Use `formato_briefing` do perfil. Se estiver vazio, use o padrão: para perfil de ritmo rápido, `CONTEXTO → PROBLEMA → RESULTADO → CRITÉRIOS` em até 10 linhas; para perfil de pesquisa, `PROBLEMA → DADOS → RESTRIÇÕES → RESULTADO → LIBERDADE`, tão longo quanto preciso.

## Saída

```
## Roteamento: <tarefa>
Decisão: <pessoa | pessoa A + pessoa B | ninguém do time>
Por quê: <dimensões + zona que casou + vetos checados>
Briefing: <no formato da pessoa>
Se dois: <fases, handoff, validação, prazos>
```


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
