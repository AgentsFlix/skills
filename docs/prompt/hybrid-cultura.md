# hybrid-cultura · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-cultura.md` uma skill chamada hybrid-cultura. Quando eu pedir algo como "documenta a cultura de [empresa]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# OS MANDAMENTOS · Valores, mandamentos, mantras, manifesto e critérios de contratação

Cultura é o que a empresa faz quando o dono não está olhando. Esta skill escreve isso: valores com comportamento observável, mandamentos, mantras, manifesto, história da empresa, perfil de liderança e critérios de contratação. Onze arquivos que fazem o time decidir igual sem perguntar.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "documenta a cultura de [empresa]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit culture | `references/elicit-culture.md` |
| template que esta skill preenche | `templates/culture-commandments.yaml` |
| template que esta skill preenche | `templates/culture-company-history.yaml` |
| template que esta skill preenche | `templates/culture-decision-frameworks.yaml` |
| template que esta skill preenche | `templates/culture-hiring-criteria.yaml` |
| template que esta skill preenche | `templates/culture-leadership-profile.yaml` |
| template que esta skill preenche | `templates/culture-lifestyle.yaml` |
| template que esta skill preenche | `templates/culture-manifesto.yaml` |
| template que esta skill preenche | `templates/culture-mantras.yaml` |
| template que esta skill preenche | `templates/culture-mission-vision-positioning.yaml` |
| template que esta skill preenche | `templates/culture-pillars.yaml` |
| template que esta skill preenche | `templates/culture-values.yaml` |


## Procedure

1. Resolva a pasta: `hybrid.pasta`. Se não existir, crie. Para cada template listado acima que ainda não exista na pasta, copie-o de `templates/` para a pasta com o nome original (ex.: `company-icp.yaml` → `icp.yaml`).
2. Abra a referência do procedimento e siga as fases na ordem. Onde ela escrever `{pasta}/…`, leia a pasta configurada. Onde ela citar um comando `*algo` ou um script `.cjs`/`.sh`, trate como nome da etapa, não como algo a executar.
3. Conduza a elicitação em blocos: apresente o resumo do que já está preenchido, pergunte só o que falta, aceite 'não sei ainda' e deixe `null`. Nunca preencha com suposição.
4. Grave o YAML na pasta, preservando a estrutura do template. Calcule a completude: campos preenchidos ÷ campos obrigatórios; atualize `metadata.completeness_percentage` e `status`.
5. Se a completude ficou abaixo de 85%, diga quais seções faltam e o que perguntar na próxima sessão. Não declare o arquivo pronto.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pular o Diagnosis Gate quando a referência o pede. O nível de consciência muda todas as perguntas seguintes.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O YAML existe na pasta configurada e parseia (`python3 -c 'import yaml,sys; yaml.safe_load(open(sys.argv[1]))' <arquivo>` sai 0).
2. `metadata.completeness_percentage` foi recalculado e bate com a contagem de campos não-nulos.
3. Nenhum campo obrigatório foi preenchido com valor que o usuário não deu; os pendentes estão em `null` e listados.
4. Se abaixo de 85%, a resposta diz as seções faltantes e não declara pronto.
5. Nenhum dado foi enviado para fora da pasta do negócio.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/elicit-culture.md`
- `templates/culture-commandments.yaml`
- `templates/culture-company-history.yaml`
- `templates/culture-decision-frameworks.yaml`
- `templates/culture-hiring-criteria.yaml`
- `templates/culture-leadership-profile.yaml`
- `templates/culture-lifestyle.yaml`
- `templates/culture-manifesto.yaml`
- `templates/culture-mantras.yaml`
- `templates/culture-mission-vision-positioning.yaml`
- `templates/culture-pillars.yaml`
- `templates/culture-values.yaml`


---

## Referência: references/elicit-culture.md

# Task: Elicit Culture

```yaml
task:
  id: elicit-culture
  name: Elicitação da Cultura Organizacional
  agent: workspace-chief
  elicit: true
  output_format: yaml
  target_templates:
    - culture/manifesto.yaml
    - culture/mission-vision-positioning.yaml
    - culture/pillars.yaml
    - culture/values.yaml
    - culture/commandments.yaml
    - culture/mantras.yaml
    - culture/decision-frameworks.yaml
    - culture/leadership-profile.yaml
    - culture/hiring-criteria.yaml
    - culture/lifestyle.yaml
    - culture/company-history.yaml
```

## Descrição

O COO conduz elicitação estruturada para popular o domínio `culture/` completo de um business. Cultura organizacional é o que define como a empresa opera por dentro: crenças, valores, regras, rituais, critérios de contratação e demissão, perfil de liderança e identidade tribal.

Este é um domínio distinto de brand (externo, para o mercado). Culture é interno: para quem faz parte.

**Gold standard:** `{pasta}/culture/` (11/11 COMPLETE)

## Prerequisites

- Bootstrap executado (`{pasta}/user.yaml` existe)
- Negócio criado (`{pasta}/` existe)
- Templates scaffolded (`*scaffold-templates` executado, inclui `culture/`)
- Recomendado: `company/company-profile.yaml` já preenchido (dados de missão/visão são input)

## Usage

```
*elicit-culture {slug}              # Elicitação completa (11 templates)
*elicit-culture {slug} --quick      # Apenas fundacionais (manifesto, mvp, pillars, values)
*elicit-culture {slug} --resume     # Continuar de onde parou
```

## Workflow

### Fase 0: Contexto e Detecção de Modo

1. Ler `{pasta}/culture/` recursivamente:
   - **Se diretório não existe:** Abortar com: "Templates de cultura não encontrados. Execute `*scaffold-templates {slug}` primeiro."
   - **Se existem arquivos com status COMPLETE:** Apresentar resumo, perguntar se quer atualizar.
   - **Se template vazio:** Prosseguir com elicitação completa.
2. Ler fontes complementares (se existirem):
   - `company/company-profile.yaml` → pré-popular mission/vision/values
   - `company/founder-dna.yaml` → pré-popular história do founder
   - `brand/brandbook.yaml` → pré-popular posicionamento e voz
3. Definir modo: `CREATE` (templates vazios) ou `UPDATE` (campos parciais).
4. Informar ao usuário:
   ```
   Cultura Organizacional para: {slug}
   Modo: {CREATE|UPDATE}
   Fontes encontradas: {lista}
   Templates: {X}/11 preenchidos

   Vou guiar você por 8 fases de elicitação.
   Tempo estimado: 30-45 minutos.
   ```

### Fase 1: Manifesto e Crença Central (4 perguntas)

**Output:** `culture/manifesto.yaml`

```yaml
elicitation:
  phase: 1
  name: "Manifesto e Crença Central"
  questions:
    - id: core_belief
      text: >
        Qual é a crença central da sua empresa? O que vocês acreditam que o mercado inteiro
        está fazendo errado? Essa crença é a semente de tudo. Não é um texto bonito pra colocar
        no site. É a convicção que a empresa defende com tanta força que está disposta a perder
        seguidores por ela.
      required: true
      maps_to: core_belief
      hint: "Ex: 'Por 200 mil anos, fomos reféns da biologia. Está na hora de transcender.'"

    - id: tribal_name
      text: >
        Como você chama as pessoas que fazem parte do seu movimento?
        Toda marca que vira movimento tem um nome para sua tribo.
      required: true
      maps_to: tribal_call.tribal_name
      hint: "Ex: 'Lendários', 'Builders', 'Orquestradores'"

    - id: cultural_enemy
      text: >
        Qual é o antagonista da sua cultura? Não é um concorrente, é uma força,
        um modo de pensar, uma prática que prejudica as pessoas que você serve.
        Como esse inimigo aparece no dia a dia da empresa?
      required: true
      maps_to: cultural_antagonism
      hint: "Ex: 'Mediocridade e passividade. Aparece como: aceitar tradições sem questionar, consumir sem agir'"

    - id: manifesto_text
      text: >
        Você tem um manifesto escrito? Se sim, cole aqui. Se não, vamos construir juntos
        a partir da crença central, do antagonismo e da identidade tribal que você acabou de definir.
      required: false
      maps_to: manifesto_text
```

**Após respostas:** Gerar `culture/manifesto.yaml`. Se manifesto_text não foi fornecido, sintetizar a partir das 3 respostas anteriores.

### Fase 2: Missão, Visão e Posicionamento (3 perguntas)

**Output:** `culture/mission-vision-positioning.yaml`

```yaml
elicitation:
  phase: 2
  name: "Missão, Visão e Posicionamento"
  pre_populate_from:
    - company/company-profile.yaml → mission, vision, positioning
  questions:
    - id: mission
      text: >
        Em uma frase: por que essa empresa existe além de gerar lucro?
        Quem se beneficia e qual transformação vocês causam?
      required: true
      maps_to: mission.statement
      hint: "Ex: 'Unir e potencializar pessoas lendárias com IA para construírem soluções que beneficiem a humanidade.'"

    - id: vision
      text: "Onde vocês querem estar em 5-10 anos? Qual é a visão de futuro?"
      required: true
      maps_to: vision.statement

    - id: positioning
      text: "Como o mercado vê vocês? Complete: 'Somos um(a) _____ que _____'"
      required: true
      maps_to: positioning.statement
```

**Se company-profile.yaml já tem esses dados:** Apresentar ao usuário para confirmar ou refinar, em vez de perguntar do zero.

### Fase 3: Pilares Culturais (3 perguntas)

**Output:** `culture/pillars.yaml`

```yaml
elicitation:
  phase: 3
  name: "Pilares Culturais"
  questions:
    - id: pillars_count
      text: >
        Quantos pilares sustentam a cultura da empresa? (recomendado: 3-5)
        Pilares são os fundamentos que sustentam tudo: valores, decisões, contratações.
        Se um pilar for removido, a cultura desmorona.
      required: true
      maps_to: pillars_count

    - id: pillars_detail
      text: >
        Para cada pilar, descreva:
        1. Nome do pilar
        2. O que significa (2-3 frases)
        3. Por que é fundamental
        4. Como aparece no dia a dia
      required: true
      maps_to: pillars

    - id: unifying_statement
      text: >
        Qual é a frase que conecta todos os pilares?
        Se alguém faltar um desses pilares, o que acontece?
      required: false
      maps_to: unifying_statement
```

### Fase 4: Valores Operacionais (2 perguntas iterativas)

**Output:** `culture/values.yaml`

```yaml
elicitation:
  phase: 4
  name: "Valores Operacionais"
  pre_populate_from:
    - company/company-profile.yaml → values
  questions:
    - id: values_list
      text: >
        Quais são os valores operacionais da empresa? (recomendado: 5-9)
        Para cada valor, diga:
        1. Nome do valor
        2. Definição (2-3 frases do que significa na prática)
        3. Uma citação que ancora o valor (opcional)
        4. 2-3 perguntas-guia que ajudam a aplicar no dia a dia
        5. Referências (livros, podcasts) que aprofundam o valor (opcional)
      required: true
      maps_to: values

    - id: values_closing
      text: "Qual é a frase de fechamento que resume todos os valores?"
      required: false
      maps_to: closing_statement
```

### Fase 5: Mandamentos e Mantras (3 perguntas)

**Outputs:** `culture/commandments.yaml`, `culture/mantras.yaml`

```yaml
elicitation:
  phase: 5
  name: "Mandamentos e Mantras"
  questions:
    - id: commandments
      text: >
        Quais são as regras inegociáveis da cultura? (recomendado: 5-12)
        Mandamentos são mais rígidos que valores. São regras que não mudam
        independente do contexto. Dê um título curto e uma frase de descrição para cada.
      required: true
      maps_to: commandments

    - id: mantras
      text: >
        Quais são as frases curtas que o time repete no dia a dia?
        Mantras condensam cultura em linguagem tribal. Frases que qualquer membro
        reconhece e usa. Para cada mantra, diga em que contexto ele é invocado.
      required: true
      maps_to: mantras

    - id: guiding_principle
      text: >
        Existe um princípio orientador geral? Uma pergunta que qualquer pessoa
        pode se fazer antes de tomar uma decisão?
      required: false
      maps_to: guiding_principle
      hint: "Ex: 'Se sua decisão fosse amplificada e adotada por todos, ela elevaria a empresa?'"
```

### Fase 6: Liderança e Time (4 perguntas)

**Output:** `culture/leadership-profile.yaml`

```yaml
elicitation:
  phase: 6
  name: "Liderança e Time"
  questions:
    - id: leadership_philosophy
      text: "Qual é a filosofia de liderança da empresa? O que se espera de um líder aqui?"
      required: true
      maps_to: leadership_philosophy

    - id: leader_expectations
      text: >
        Liste as expectativas específicas para líderes na empresa.
        O que diferencia um líder aqui de um gestor comum?
        Para cada expectativa, dê um nome curto e uma descrição.
      required: true
      maps_to: leader_expectations

    - id: team_virtues
      text: >
        Quais são as virtudes que definem um membro ideal do time?
        Para cada virtude, descreva o que significa na prática.
      required: true
      maps_to: team_virtues

    - id: growth_philosophy
      text: >
        Como a empresa escala sem perder cultura?
        Quais são os princípios de crescimento?
        Como equilibram velocidade e qualidade?
      required: false
      maps_to: growth_philosophy
```

### Fase 7: Contratação e Desligamento (3 perguntas)

**Output:** `culture/hiring-criteria.yaml`

```yaml
elicitation:
  phase: 7
  name: "Contratação e Desligamento"
  questions:
    - id: who_to_hire
      text: >
        Qual é o perfil cultural ideal para contratação?
        Quais são os green flags (sinais positivos) e os must-haves inegociáveis?
      required: true
      maps_to: who_to_hire

    - id: who_not_to_hire
      text: >
        Quais perfis NÃO contratar? Quais são os anti-patterns e red flags?
        Quais erros de contratação vocês já cometeram?
      required: true
      maps_to: who_not_to_hire

    - id: when_to_fire
      text: >
        Quais são os critérios para desligamento?
        Que perguntas um líder deve se fazer para avaliar se alguém deve sair?
        Como conduzir o processo?
      required: true
      maps_to: when_to_fire
```

### Fase 8: Frameworks de Decisão, Lifestyle e História (4 perguntas)

**Outputs:** `culture/decision-frameworks.yaml`, `culture/lifestyle.yaml`, `culture/company-history.yaml`

```yaml
elicitation:
  phase: 8
  name: "Frameworks, Lifestyle e História"
  questions:
    - id: decision_frameworks
      text: >
        Quais frameworks o time usa para tomar decisões?
        Ex: "Reunião = Câncer (prefira Loom)", "Mobile First", "Lei do Retorno Decrescente".
        Também: quais são os 3-5 princípios guia que norteiam todas as decisões?
      required: false
      maps_to: decision_frameworks + principles

    - id: legendary_vs_mediocre
      text: >
        Se a empresa tem um padrão de "comportamento ideal" vs "comportamento medíocre",
        descreva as dimensões. Para cada dimensão, o que é excelente e o que é inaceitável.
      required: false
      maps_to: lifestyle.legendary_vs_mediocre

    - id: symbols
      text: >
        A empresa tem símbolos culturais? (visuais, verbais, rituais, artefatos)
        Para cada símbolo, diga: o que é, o que representa, de onde veio.
        Símbolos incluem: logos, números, cores, objetos, saudações, rituais de reconhecimento.
      required: false
      maps_to: company_history.symbols_and_artifacts

    - id: company_timeline
      text: >
        Quais são os marcos mais importantes da história da empresa?
        Para cada marco: ano, o que aconteceu, por que importa.
        Inclua turning points: momentos que mudaram tudo.
      required: false
      maps_to: company_history.timeline
```

### Fase 9: Síntese e Output

1. **Processar respostas** e mapear para os 11 templates YAML.
2. **Popular cada arquivo:**
   - Campos respondidos: substituir `null` pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por arquivo: `COMPLETE` se >80% dos campos preenchidos, `PARTIAL` se 40-80%, `INCOMPLETE` se <40%.
3. **Calcular completude global:**
   ```
   Cultura Organizacional para: {slug}

   Templates:
     ✅ manifesto.yaml          — COMPLETE (100%)
     ✅ mission-vision.yaml     — COMPLETE (100%)
     ✅ pillars.yaml            — COMPLETE (100%)
     ✅ values.yaml             — COMPLETE (100%)
     ✅ commandments.yaml       — COMPLETE (100%)
     ✅ mantras.yaml            — COMPLETE (100%)
     ⚠️ decision-frameworks.yaml — PARTIAL (60%)
     ✅ leadership-profile.yaml — COMPLETE (95%)
     ✅ hiring-criteria.yaml    — COMPLETE (90%)
     ⚠️ lifestyle.yaml          — PARTIAL (50%)
     ⚠️ company-history.yaml    — PARTIAL (40%)

   Completude global: 85% (9/11 COMPLETE)
   Gate: PASSED ✅ (>= 70% global, fundacionais 100%)
   ```
4. **Salvar** todos os arquivos em `{pasta}/culture/`.

## Gate de Qualidade

| Critério | Mínimo | Ideal |
|----------|--------|-------|
| Completude global | >= 70% | >= 90% |
| Fundacionais (manifesto, mvp, pillars, values) | 100% obrigatório | 100% |
| Mandamentos + Mantras | >= 80% | 100% |
| Leadership + Hiring | >= 60% | >= 90% |
| Decision + Lifestyle + History | >= 40% | >= 80% |

## Modo --quick

Executa apenas Fases 1-4 (Manifesto, MVP, Pilares, Valores). Gera 4 arquivos COMPLETE. Suficiente para desbloquear diagnóstico de Culture >= 50.

## Modo --resume

Lê status de cada arquivo em `culture/`. Pula fases cujos outputs já estão COMPLETE. Apresenta resumo do que falta e continua de onde parou.

## Convenções de Output YAML

- Campos respondidos: substituir `null` pelo valor real
- Campos não respondidos: definir como `null`
- Status por arquivo: COMPLETE / PARTIAL / INCOMPLETE
- Metadata: atualizar `last_updated`, `status`, `source: "elicitation"`
- Preservar `cross_references` do template original

## Validation

- [ ] Pelo menos manifesto, mvp, pillars e values estão COMPLETE
- [ ] Todos os YAMLs gerados são válidos (parseáveis)
- [ ] Estrutura idêntica ao template source
- [ ] Metadata atualizado com data e status
- [ ] Arquivos salvos em `{pasta}/culture/`
- [ ] Se company-profile.yaml existia, dados foram usados como input

## Next Steps

Após elicit-culture:
1. `*diagnose-business {slug}` — Agora inclui dimensão Culture na avaliação
2. `*elicit-company-profile {slug}` — Se ainda não preenchido
3. Pipeline completo: `*setup-business-profile {slug}`

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
*Gold standard: {pasta}/culture/ (11/11 COMPLETE)*


---

## Referência: templates/culture-commandments.yaml

metadata:
  version: "1.0"
  template_type: culture_commandments
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    Regras inegociáveis da cultura. Mandamentos que não mudam,
    independente do contexto. Tipicamente 5-12 regras curtas e diretas.

commandments_intro: null

commandments:
  - number: 1
    title: null
    description: null         # 1-2 frases explicando o mandamento
  - number: 2
    title: null
    description: null
  - number: 3
    title: null
    description: null

cross_references:
  depends_on:
    - culture/values.yaml
    - culture/manifesto.yaml
  feeds_into:
    - culture/decision-frameworks.yaml


---

## Referência: templates/culture-company-history.yaml

metadata:
  version: "1.0"
  template_type: culture_history
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    Timeline completa da empresa. Marcos, turning points, evolução.
    A história é arma de cultura: mostra de onde viemos e para onde vamos.

company_name: null
founded_year: null
founder_names: []

timeline:
  - year: null
    event: null
    significance: null        # Por que esse marco importa
    proof: null               # Evidência (link, número, resultado)

turning_points:
  - moment: null
    before: null              # Como era antes
    after: null               # Como ficou depois
    lesson: null              # O que aprendemos

symbols_and_artifacts:
  - name: null
    type: null                # visual, verbal, ritual, artefato
    meaning: null             # O que representa
    origin: null              # De onde veio

cross_references:
  depends_on:
    - company/company-profile.yaml
    - company/founder-dna.yaml
  feeds_into:
    - culture/manifesto.yaml
    - brand/brandbook.yaml


---

## Referência: templates/culture-decision-frameworks.yaml

metadata:
  version: "1.0"
  template_type: culture_decisions
  status: INCOMPLETE
  last_updated: null
  owner: coo-orchestrator
  description: >
    Frameworks para tomar decisões alinhadas à cultura.
    Quando bate dúvida, qual framework usar?

frameworks:
  - name: null
    description: null         # Como funciona
    when_to_use: null         # Em que situação aplicar
    steps: []                 # Passo a passo

  - name: null
    description: null
    when_to_use: null
    steps: []

principles:                   # Princípios-guia de decisão
  - name: null
    description: null

cross_references:
  depends_on:
    - culture/values.yaml
    - culture/commandments.yaml
  feeds_into: []


---

## Referência: templates/culture-hiring-criteria.yaml

metadata:
  version: "1.0"
  template_type: culture_hiring
  status: INCOMPLETE
  last_updated: null
  owner: coo-orchestrator
  description: >
    Critérios de contratação e desligamento baseados em cultura.
    Quem contratar, quem NÃO contratar, quando demitir.

when_to_hire:
  triggers: []                # Sinais de que é hora de contratar
  principles: []              # Princípios de timing

who_to_hire:
  ideal_profile: null         # Perfil cultural ideal
  green_flags: []             # Sinais positivos
  must_haves: []              # Inegociáveis culturais

who_not_to_hire:
  anti_patterns: []           # Perfis que não se encaixam
  red_flags: []               # Sinais de alerta na entrevista
  common_mistakes: []         # Erros comuns de contratação

when_to_fire:
  triggers: []                # Sinais de que alguém precisa sair
  process: null               # Como conduzir o desligamento
  principles: []              # Princípios que guiam a decisão

cross_references:
  depends_on:
    - culture/values.yaml
    - culture/leadership-profile.yaml
  feeds_into:
    - hiring/hiring-playbook.yaml
    - operations/team-structure.yaml


---

## Referência: templates/culture-leadership-profile.yaml

metadata:
  version: "1.0"
  template_type: culture_leadership
  status: INCOMPLETE
  last_updated: null
  owner: coo-orchestrator
  description: >
    Perfil de liderança esperado. O que se espera de líderes na empresa,
    como lideram, e como se diferenciam de gestores comuns.

leadership_philosophy: null   # Filosofia geral de liderança

leader_expectations:
  - expectation: null
    description: null
    example: null             # Exemplo concreto de como isso aparece

leader_vs_manager:
  leader_traits: []           # O que define um líder aqui
  manager_traps: []           # Armadilhas de gestão que evitamos

team_dynamics:
  how_team_operates: null     # Como o time trabalha junto
  rituals: []                 # Rituais internos (daily, weekly, retros)
  communication_norms: []     # Normas de comunicação

growth_philosophy:
  scaling_principles: []      # Como crescer sem perder cultura
  speed_vs_quality: null      # Como equilibrar velocidade e qualidade

cross_references:
  depends_on:
    - culture/values.yaml
    - culture/pillars.yaml
    - company/founder-dna.yaml
  feeds_into:
    - culture/hiring-criteria.yaml
    - operations/team-structure.yaml


---

## Referência: templates/culture-lifestyle.yaml

metadata:
  version: "1.0"
  template_type: culture_lifestyle
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    A extensão da cultura para além do trabalho.
    Como viver os valores no dia a dia pessoal.

lifestyle_philosophy: null    # O que significa "viver a cultura"

legendary_vs_mediocre:
  - dimension: null
    legendary: null           # Como alguém lendário se comporta
    mediocre: null            # Como alguém medíocre se comporta

daily_practices: []           # Práticas diárias recomendadas

cross_references:
  depends_on:
    - culture/values.yaml
    - culture/pillars.yaml
  feeds_into: []


---

## Referência: templates/culture-manifesto.yaml

metadata:
  version: "1.0"
  template_type: culture_manifesto
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    Declaração central da cultura. O manifesto define a crença fundacional,
    o antagonismo e a identidade tribal da empresa. Diferente do brand manifesto
    (externo, para o mercado), este é interno: para quem faz parte.

# A crença central que a empresa defende
core_belief: null

# O texto completo do manifesto
manifesto_text: null

# Versão em inglês (se aplicável)
manifesto_text_en: null

# Quem a empresa está chamando (identidade tribal)
tribal_call:
  who_we_call: null          # "os inconformados", "os rebeldes"
  tribal_name: null           # "Lendários", "Builders"
  tribal_identity: null       # O que significa ser membro

# O antagonismo cultural (o que combatemos internamente)
cultural_antagonism:
  enemy: null                 # "mediocridade", "burocracia"
  enemy_manifestations: []    # Como esse inimigo aparece no dia a dia

# A promessa de transformação interna
transformation_promise: null  # O que acontece com quem vive a cultura

cross_references:
  depends_on:
    - brand/brandbook.yaml
    - company/founder-dna.yaml
  feeds_into:
    - culture/commandments.yaml
    - culture/mantras.yaml


---

## Referência: templates/culture-mantras.yaml

metadata:
  version: "1.0"
  template_type: culture_mantras
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    Frases curtas e memoráveis que o time repete.
    Mantras condensam cultura em linguagem tribal.

mantras:
  - text: null
    context: null             # Quando esse mantra é invocado
  - text: null
    context: null

cross_references:
  depends_on:
    - culture/manifesto.yaml
    - culture/values.yaml
  feeds_into:
    - movement/system-mrd-doctrines.yaml


---

## Referência: templates/culture-mission-vision-positioning.yaml

metadata:
  version: "1.0"
  template_type: culture_mvp
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    Missão, visão e posicionamento da empresa para uso interno.
    Frases curtas e diretas que orientam decisões.

mission:
  statement: null             # Uma frase. "Para quê existimos?"
  who_benefits: null          # Quem se beneficia
  transformation: null        # Qual transformação causamos

vision:
  statement: null             # "Onde queremos chegar?"
  time_horizon: null          # Em quanto tempo
  proof_of_traction: null     # Evidência de que estamos no caminho

positioning:
  statement: null             # "Como o mercado nos vê?"
  category: null              # Em qual categoria mental vivemos
  differentiation: null       # O que nos separa de todos os outros

cross_references:
  depends_on:
    - company/company-profile.yaml
    - brand/brandbook.yaml
  feeds_into:
    - culture/pillars.yaml
    - culture/values.yaml


---

## Referência: templates/culture-pillars.yaml

metadata:
  version: "1.0"
  template_type: culture_pillars
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    Pilares fundacionais da cultura. Framework proprietário que sustenta
    tudo: valores, decisões, hiring, liderança. Cada empresa tem os seus.
    Tipicamente 3-5 pilares que se conectam e reforçam mutuamente.

pillars_intro: null           # Texto introdutório que conecta os pilares

pillars:
  - name: null
    description: null         # O que esse pilar significa
    why_it_matters: null      # Por que é fundamental
    how_it_manifests: null    # Como aparece no dia a dia
    connection_to_others: null # Como se conecta aos outros pilares

  - name: null
    description: null
    why_it_matters: null
    how_it_manifests: null
    connection_to_others: null

  - name: null
    description: null
    why_it_matters: null
    how_it_manifests: null
    connection_to_others: null

# Frase que conecta todos os pilares
unifying_statement: null

cross_references:
  depends_on:
    - culture/manifesto.yaml
    - culture/mission-vision-positioning.yaml
  feeds_into:
    - culture/values.yaml
    - culture/commandments.yaml


---

## Referência: templates/culture-values.yaml

metadata:
  version: "1.0"
  template_type: culture_values
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    Valores operacionais da cultura. Diferente dos brand values (externos),
    estes são internos: guiam decisões, contratações e demissões.
    Cada valor tem definição, perguntas-guia e referências.

values_intro: null            # "Falar de valores é fácil. Difícil é vivenciá-los."

values:
  - name: null
    definition: null          # O que esse valor significa em 2-3 frases
    quote: null               # Citação que ancora o valor (opcional)
    quote_author: null
    guiding_questions: []     # 3-5 perguntas que ajudam a aplicar no dia a dia
    references: []            # Livros, podcasts, artigos relacionados
    legendary_behavior: null  # Como alguém que vive esse valor se comporta
    mediocre_behavior: null   # Como alguém que NÃO vive esse valor se comporta

closing_statement: null       # Frase de fechamento dos valores

cross_references:
  depends_on:
    - culture/pillars.yaml
    - culture/manifesto.yaml
  feeds_into:
    - culture/commandments.yaml
    - culture/hiring-criteria.yaml
    - culture/decision-frameworks.yaml
