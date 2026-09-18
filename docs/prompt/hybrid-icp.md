# hybrid-icp · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-icp.md` uma skill chamada hybrid-icp. Quando eu pedir algo como "monta o ICP de [produto]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# O CLIENTE IDEAL · ICP em 47 campos, com o nível de consciência do mercado antes

Quem é a pessoa que compra, em 47 campos: demografia, dor, desejo, objeções, linguagem, onde está. Antes de perguntar qualquer coisa, a skill passa pelo Diagnosis Gate: nível de consciência e sofisticação do mercado, porque o ICP muda conforme o mercado já sabe ou não que tem o problema.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "monta o ICP de [produto]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit icp yaml | `references/elicit-icp-yaml.md` |
| elicit icp | `references/elicit-icp.md` |
| template que esta skill preenche | `templates/company-icp.yaml` |
| template que esta skill preenche | `templates/company-diagnosis.yaml` |


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

- `references/elicit-icp-yaml.md`
- `references/elicit-icp.md`
- `templates/company-diagnosis.yaml`
- `templates/company-icp.yaml`


---

## Referência: references/elicit-icp-yaml.md

# Task: Elicit ICP (YAML)

```yaml
task:
  id: elicit-icp-yaml
  name: Elicitação do ICP Completo (YAML)
  agent: cmo-architect
  elicit: true
  output_format: yaml
  target_template: company/icp.yaml
```

## Descrição

O CMO conduz elicitação profunda para popular o template `icp.yaml` com o perfil completo do cliente ideal — demographics, psychographics, pain stack, archetypes, triggers e flags. Inclui Diagnosis Gate embutido.

## Prerequisites

- Bootstrap executado
- Negócio criado e templates scaffolded
- Recomendado: `company-profile.yaml` preenchido (para contexto de mercado)

## Usage

```
*elicit-icp-yaml {slug}
```

## Workflow

### Fase 0: Contexto + Diagnosis Gate

1. Ler `{pasta}/company/icp.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/icp.md` (Sistema A, se existir): pré-popular campos correspondentes.
3. **Diagnosis Gate:** Ler `{pasta}/company/diagnosis.yaml`:
   - **Se diagnosis existe e está preenchido:** Usar `market_awareness_level` e `market_sophistication_stage` como contexto.
   - **Se não existe ou não está preenchido:** Fazer 2 perguntas de diagnosis embutidas:

```yaml
elicitation:
  phase: 0
  name: "Diagnosis Gate"
  questions:
    - id: awareness_level
      text: |
        Qual é o nível de consciência do seu mercado sobre o PROBLEMA?
        1 - Inconsciente (não sabem que têm o problema)
        2 - Consciente do problema (sabem da dor, não da solução)
        3 - Consciente da solução (sabem que existem soluções)
        4 - Consciente do produto (conhecem seu produto)
        5 - Totalmente consciente (sabem tudo, comparam preços)
      required: true
      maps_to: diagnosis.market_awareness_level

    - id: sophistication_stage
      text: |
        Qual é o nível de sofisticação do mercado?
        1 - Virgem (primeira vez vendo algo assim)
        2 - Descobrindo (já viram algumas soluções)
        3 - Experiente (já tentaram várias coisas)
        4 - Cansado (cético, decepcionado com promessas)
        5 - Saturado (não acredita mais em nada)
      required: true
      maps_to: diagnosis.market_sophistication_stage
```

   - **Salvar** em `diagnosis.yaml` se foi preenchido aqui.

### Fase 1: Core ICP (3 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Core ICP"
  questions:
    - id: one_sentence
      text: "Em uma frase, quem é seu cliente ideal?"
      required: true
      maps_to: core_icp.one_sentence_definition

    - id: icp_name
      text: "Dê um nome/arquétipo para esse cliente (ex: 'O Construtor Travado', 'O Executivo Sobrecarregado')"
      required: true
      maps_to: core_icp.icp_name

    - id: fit_percentage
      text: "Que % do seu mercado é esse ICP? (ex: 'Alvo primário, 80% dos melhores clientes')"
      required: true
      maps_to: core_icp.fit_percentage
```

### Fase 2: Demographics (12 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Demographics"
  questions:
    - id: age_primary
      text: "Qual faixa etária principal do ICP?"
      required: true
      maps_to: demographics_age.primary_range

    - id: age_secondary
      text: "Faixa etária secundária?"
      required: false
      maps_to: demographics_age.secondary_range

    - id: age_median
      text: "Idade mediana típica?"
      required: true
      maps_to: demographics_age.median_age

    - id: experience_years
      text: "Quantos anos de experiência na área?"
      required: true
      maps_to: demographics_experience.years_in_field

    - id: experience_background
      text: "Qual o tipo de background? (autônomo, CLT, empresário, etc.)"
      required: true
      maps_to: demographics_experience.background_type

    - id: experience_progression
      text: "Como é a progressão de carreira típica desse ICP?"
      required: false
      maps_to: demographics_experience.career_progression

    - id: education_min
      text: "Qual o nível mínimo de educação?"
      required: true
      maps_to: demographics_education.minimum_level

    - id: education_postgrad
      text: "Que % tem pós-graduação?"
      required: false
      maps_to: demographics_education.percentage_with_postgrad

    - id: education_field
      text: "Qual a área de formação predominante?"
      required: false
      maps_to: demographics_education.field_of_study_primary

    - id: life_stage
      text: "Qual estágio de vida? (casado com filhos, solteiro focado, etc.)"
      required: true
      maps_to: demographics_life_stage

    - id: mindset
      text: "Qual o estado mental predominante? (frustrado, ansioso, determinado, etc.)"
      required: true
      maps_to: demographics_mindset.primary_state

    - id: geography
      text: "De onde são? (% Brasil, % internacional, regiões específicas)"
      required: true
      maps_to: demographics_geography
```

### Fase 3: Psychographics (8 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Psychographics"
  questions:
    - id: central_pain_say
      text: "O que o ICP DIZ que é seu problema? (nas palavras dele)"
      required: true
      maps_to: psychographics_central_pain.what_they_say

    - id: central_pain_mean
      text: "O que ele REALMENTE quer dizer? (o problema real por trás)"
      required: true
      maps_to: psychographics_central_pain.what_they_mean

    - id: central_pain_fear
      text: "O que ele TEME? (o medo profundo por trás da dor)"
      required: true
      maps_to: psychographics_central_pain.what_they_fear

    - id: beliefs
      text: "Quais são as 5 crenças centrais do ICP? (sobre si mesmo, mercado, possibilidades)"
      required: true
      maps_to: psychographics_beliefs

    - id: mental_state
      text: "Qual é o pensamento dominante do ICP? E o pensamento secundário? E a crença limitante?"
      required: true
      maps_to: psychographics_mental_state

    - id: consumption
      text: "Quantas horas por semana o ICP consome conteúdo? Qual a proporção consumo vs ação?"
      required: true
      maps_to: psychographics_consumption

    - id: community_needs
      text: "O que o ICP busca em comunidade? (validação, accountability, pertencimento, permissão — quais se aplicam?)"
      required: true
      maps_to: psychographics_community

    - id: purchases
      text: "Quantas compras na categoria o ICP faz por ano? (cursos, mentorias, ferramentas)"
      required: false
      maps_to: psychographics_consumption.purchases_per_year
```

### Fase 4: Pain Stack (6 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Pain Stack"
  intro: |
    Vamos mapear 3 níveis de dor:
    - LATENTE: dores que eles nem sabem que têm
    - OCULTA: dores que sabem mas não verbalizam
    - EXISTENCIAL: dores profundas sobre identidade/propósito
  questions:
    - id: latent_pains
      text: "Quais são 4 dores LATENTES do ICP? (problemas que eles não percebem como problema)"
      required: true
      maps_to: pain_stack_latent

    - id: hidden_pains
      text: "Liste 10 dores OCULTAS — coisas que eles sentem mas não dizem abertamente. (frustrações internas, vergonhas, medos não verbalizados)"
      required: true
      maps_to: pain_stack_hidden

    - id: existential_pain_1
      text: "Qual é a dor EXISTENCIAL #1? (sobre identidade/propósito). Que % do ICP sente isso?"
      required: true
      maps_to: pain_stack_existential.pain_1

    - id: existential_pain_2
      text: "Dor existencial #2? E que % sente?"
      required: true
      maps_to: pain_stack_existential.pain_2

    - id: existential_pain_3
      text: "Dor existencial #3? E que % sente?"
      required: true
      maps_to: pain_stack_existential.pain_3

    - id: pain_hierarchy
      text: "Qual dor é a mais urgente (age agora) vs mais importante (define decisão de longo prazo)?"
      required: false
      maps_to: pain_stack_existential
```

### Fase 5: Archetypes (3 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Archetypes"
  intro: "Vamos dividir o ICP em 5 sub-arquetipos. A soma deve ser 100%."
  questions:
    - id: archetypes
      text: |
        Defina 5 arquetipos dentro do seu ICP. Para cada um:
        - Nome do arquétipo
        - % do ICP que ele representa
        - Problema central desse sub-grupo
        (A soma dos % deve ser 100%)
      required: true
      maps_to: archetypes

    - id: primary_archetype
      text: "Qual é o arquétipo PRINCIPAL (maior %)? Descreva mais sobre ele."
      required: true
      maps_to: archetypes.archetype_1

    - id: hardest_archetype
      text: "Qual é o arquétipo mais DIFÍCIL de converter? Por quê?"
      required: false
      maps_to: archetypes
```

### Fase 6: Triggers e Flags (3 perguntas)

```yaml
elicitation:
  phase: 6
  name: "Triggers e Flags"
  questions:
    - id: action_triggers
      text: "Quais são os 5 gatilhos que fazem o ICP AGIR? (eventos, situações que motivam a compra)"
      required: true
      maps_to: motivations_action_triggers

    - id: paralysis_triggers
      text: "Quais são os 5 gatilhos que PARALISAM o ICP? (o que impede de agir)"
      required: true
      maps_to: motivations_paralysis_triggers

    - id: flags
      text: |
        Defina:
        - 5 RED FLAGS (sinais de que NÃO é bom cliente)
        - 7 GREEN FLAGS (sinais de que É cliente ideal)
      required: true
      maps_to: red_flags + green_flags
```

### Fase 7: Validação e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `icp.yaml`:**
   - Campos respondidos: substituir `null` pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` / `INCOMPLETE`.
   - Validar que archetypes somam 100%.
3. **Calcular completude:**
   ```yaml
   metadata:
     completed_fields: {count}
     completeness_percentage: {percentage}
   validation:
     completed: {count}
     completeness: {percentage}
     status: "COMPLETE" or "INCOMPLETE"
   ```
4. **Salvar** em `{pasta}/company/icp.yaml`.
5. Se diagnosis foi preenchido aqui, salvar `diagnosis.yaml` também.
6. **Relatório** com seções e completude.

## Convenções de Output YAML

- Campos respondidos: substituir `null` pelo valor real
- Campos não respondidos: manter como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Metadata: atualizar `completed_fields` e `completeness_percentage`
- Archetypes devem somar 100%
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Diagnosis gate satisfeito (awareness + sophistication preenchidos)
- [ ] Todas as perguntas obrigatórias respondidas
- [ ] YAML gerado é válido
- [ ] 5 archetypes somam 100%
- [ ] Pain stack tem 3 níveis (latent, hidden, existential)
- [ ] Red/green flags definidos
- [ ] Arquivo salvo em `{pasta}/company/icp.yaml`

## Next Steps

Após ICP:
1. `*elicit-brand-yaml {slug}` - Brand guidelines
2. Ou `*setup-business-profile {slug}` para pipeline completo

---

*Task do Squad Hybrid Workspace - CMO Architect*


---

## Referência: references/elicit-icp.md

# Task: Elicit ICP

```yaml
task:
  id: elicit-icp
  name: Elicitação de ICP e Proposta de Valor
  agent: cmo-architect
  elicit: true
```

## Descrição

O CMO (Market Architect) conduz elicitação profunda para definir ICP (Ideal Customer Profile), proposta de valor, brand e messaging.

## Workflow

### Fase 0: Contexto do Workspace

Antes de iniciar a elicitação:

1. Ler `workspace/company/mission-vision.md` (se existir) para alinhar ICP com missão/visão.
2. Ler `workspace/company/icp.md` (se existir):
   - **Se existe:** Apresentar ICP atual e perguntar se deseja refinar ou substituir.
   - **Se não existe:** Prosseguir com elicitação completa.
3. Usar missão e valores da empresa (se disponíveis) para contextualizar perguntas — ex.: conectar "dores do cliente" com "problema que resolvemos".

### Fase 1: ICP (Ideal Customer Profile)

```yaml
elicitation:
  questions:
    - id: customer_profile
      text: "Quem é seu cliente ideal? (cargo, empresa, setor)"
      required: true

    - id: company_size
      text: "Qual o tamanho típico da empresa do seu cliente?"
      required: true

    - id: pain_points
      text: "Quais são as maiores dores do seu cliente?"
      required: true

    - id: buying_process
      text: "Como seu cliente toma decisão de compra?"
      required: true

    - id: channels
      text: "Onde seu cliente busca soluções?"
      required: true

    - id: budget
      text: "Qual o orçamento típico do seu cliente?"
      required: false

    - id: perfect_customer
      text: "O que faz um cliente ser 'perfeito' para você?"
      required: true
```

### Fase 2: Proposta de Valor

```yaml
elicitation:
  questions:
    - id: transformation
      text: "Qual transformação você entrega ao cliente?"
      required: true

    - id: differentiation
      text: "O que você faz que ninguém mais faz?"
      required: true

    - id: why_choose
      text: "Por que um cliente escolheria você sobre a concorrência?"
      required: true

    - id: results
      text: "Qual é o resultado tangível que o cliente obtém?"
      required: true

    - id: time_to_value
      text: "Em quanto tempo o cliente vê resultados?"
      required: false
```

### Fase 3: Brand (Opcional)

```yaml
elicitation:
  questions:
    - id: brand_personality
      text: "Se sua marca fosse uma pessoa, como ela seria?"
      required: false

    - id: brand_words
      text: "Quais 3 palavras definem sua marca?"
      required: false

    - id: tone_of_voice
      text: "Qual tom de voz sua marca usa?"
      required: false

    - id: brand_never
      text: "O que sua marca NUNCA faria?"
      required: false
```

### Fase 4: Output

Criar múltiplos arquivos:

**workspace/company/icp.md:**
```markdown
# Ideal Customer Profile (ICP)

## Perfil Demográfico

- **Cargo:** {extraído de customer_profile}
- **Setor:** {extraído de customer_profile}
- **Tamanho da empresa:** {company_size}
- **Orçamento típico:** {budget}

## Perfil Psicográfico

### Dores Principais
{pain_points formatado como lista}

### Processo de Compra
{buying_process}

### Canais de Busca
{channels}

## Cliente Perfeito

{perfect_customer}

---

*Gerado via Squad Hybrid Workspace (CMO) em {date}*
```

**workspace/company/value-proposition.md:**
```markdown
# Proposta de Valor

## Transformação

{transformation}

## Diferenciação

{differentiation}

## Por que Nos Escolher

{why_choose}

## Resultados Tangíveis

{results}

## Time to Value

{time_to_value}

---

*Gerado via Squad Hybrid Workspace (CMO) em {date}*
```

**workspace/company/brand.md** (se respondido):
```markdown
# Brand Guidelines

## Personalidade

{brand_personality}

## Palavras-Chave

1. {word_1}
2. {word_2}
3. {word_3}

## Tom de Voz

{tone_of_voice}

## O Que Nunca Fazemos

{brand_never}

---

*Gerado via Squad Hybrid Workspace (CMO) em {date}*
```

## Validação

- [ ] ICP claramente definido
- [ ] Proposta de valor diferenciada
- [ ] Arquivos criados em `workspace/company/`


---

## Referência: templates/company-diagnosis.yaml

# COMPANY DIAGNOSIS — Market Awareness & Sophistication
#
# CRITICAL: This template must be completed FIRST
# Everything downstream (ICP, brand, offerbook) depends on these 2 decisions
#
# Author: @your-handle
# Template Version: 1.0
# Status: TEMPLATE (generic, awaiting company-specific fill)
metadata:
  name: "Company Diagnosis"
  version: "1.0"
  template_type: "company-level"
  description: "Eugene Schwartz 5-level framework × 5 sophistication stages"
  required_for_governance: true
  guardian: "CMO"
  status: "INCOMPLETE"
  created: "2026-02-14"
  last_updated: FILL_THIS
  product_name: FILL_THIS
# =============================================================================

# SECTION 1: MARKET AWARENESS LEVEL (Choose ONE: 1-5)

# =============================================================================

# This determines positioning strategy for EVERYTHING downstream
market_awareness_level:
  description: "How aware is the market of the problem + solution category?"
  level_1_unaware:
    label: "Completely Unaware"
    characteristics:
      - "Don't know problem exists"
      - "No existing solutions considered"
      - "Think problem is normal/inevitable"
      - "Not looking for alternatives"
      - "Passive about status quo"
    copy_implications:
      headline_type: "Problem revelation"
      headline_length: "Long (15-20 words)"
      focus_area: "Problem exists and hurts"
      difficulty: "Highest (must educate)"
      length: "Long-form (5000+ words)"
      example_opening: "Did you realize... [PROBLEM] costs you..."
    when_to_use: "Breakthrough markets, new categories, B2B transformation"
    status: "INCOMPLETE"
  level_2_problem_aware:
    label: "Problem Aware"
    characteristics:
      - "Know problem exists"
      - "Living with problem, not seeking solution"
      - "Think problem is permanent"
      - "Haven't considered solutions"
      - "Skeptical solutions exist"
    copy_implications:
      headline_type: "Agitate the problem"
      headline_length: "Medium (10-15 words)"
      focus_area: "Problem pain + consequences"
      difficulty: "High (must agitate)"
      length: "Medium (2000-5000 words)"
      example_opening: "If you're [PROBLEM], you know [PAIN]..."
    when_to_use: "Market needs activation, awareness campaign"
    status: "INCOMPLETE"
  level_3_solution_aware:
    label: "Solution Aware (Most Common)"
    characteristics:
      - "Know problem + solution exists"
      - "Considering multiple solutions"
      - "Comparing products"
      - "Looking for best choice"
      - "Price/value sensitive"
    copy_implications:
      headline_type: "Differentiation"
      headline_length: "Short (8-12 words)"
      focus_area: "Why us vs competitors"
      difficulty: "Medium (must differentiate)"
      length: "Short (500-2000 words)"
      example_opening: "Tired of [COMPETITOR]? Try [UNIQUE MECHANISM]..."
    when_to_use: "Mature markets, crowded space, comparison shoppers"
    status: "INCOMPLETE"
  level_4_product_aware:
    label: "Product Aware"
    characteristics:
      - "Know our product exists"
      - "Considering us specifically"
      - "Evaluating fit + price"
      - "Objection handling needed"
      - "Close to buying decision"
    copy_implications:
      headline_type: "Social proof + results"
      headline_length: "Short (5-8 words)"
      focus_area: "Why they should buy now"
      difficulty: "Low (overcome final objections)"
      length: "Very short (100-500 words)"
      example_opening: "[STAT]: [PROOF] clients switched to us because..."
    when_to_use: "Retargeting, sales pages, existing audience"
    status: "INCOMPLETE"
  level_5_most_aware:
    label: "Most Aware"
    characteristics:
      - "Know our product + competitors"
      - "Ready to buy"
      - "Just checking final details"
      - "Price + logistics only"
      - "No education needed"
    copy_implications:
      headline_type: "CTA only"
      headline_length: "Ultra-short (2-4 words)"
      focus_area: "Take action now"
      difficulty: "None (remove friction)"
      length: "Minimal (0-100 words)"
      example_opening: "Ready? Start here → [BUTTON]"
    when_to_use: "Existing members, email list, past customers"
    status: "INCOMPLETE"
  # CRITICAL DECISION
  identified_level: null # 1, 2, 3, 4, or 5
  confidence_in_assessment: null # 0-100%
  reasoning: null # Why is market at this level?
  status: "INCOMPLETE"
# =============================================================================

# SECTION 2: MARKET SOPHISTICATION STAGE (Choose ONE: 1-5)

# =============================================================================

# Combined with awareness level to determine copy mechanism
market_sophistication_stage:
  description: "How sophisticated is the market about solving this problem?"
  stage_1_naive:
    label: "Stage 1 — Naive/Uneducated"
    characteristics:
      - "Believe simple solutions exist"
      - "One magic tactic will fix"
      - "No understanding of systems"
      - "Easily manipulated by promises"
      - "Low barrier to belief"
    copy_approach: "Simple solution narrative, magic bullet framing"
    example_claim: "Earn $10K/month in 30 days guaranteed"
    status: "INCOMPLETE"
  stage_2_learning:
    label: "Stage 2 — Learning"
    characteristics:
      - "Learning there's no magic"
      - "Discovering systems needed"
      - "Trying multiple tactics"
      - "Beginning to understand complexity"
      - "Still believe in silver bullets but open to process"
    copy_approach: "Framework + system narrative, logical progression"
    example_claim: "Using our 3-step system, most members hit $5K/month within 6 months"
    status: "INCOMPLETE"
  stage_3_experienced:
    label: "Stage 3 — Experienced"
    characteristics:
      - "Know systems required"
      - "Understand implementation difficulty"
      - "Tried many approaches"
      - "Respect the hard work"
      - "Want shortcuts but realistic about them"
    copy_approach: "Mechanism-focused narrative, system depth"
    example_claim: "Our automation reduces implementation time from 6 months to 6 weeks"
    status: "INCOMPLETE"
  stage_4_master:
    label: "Stage 4 — Master"
    characteristics:
      - "Built successful systems"
      - "Know what works"
      - "Judge offers on mechanism quality"
      - "Want optimization, not basics"
      - "High standards for proof"
    copy_approach: "Technical depth, mechanism precision, advanced benefits"
    example_claim: "Proprietary micro-segmentation increases conversion from 2.3% to 7.8%"
    status: "INCOMPLETE"
  stage_5_elite:
    label: "Stage 5 — Elite"
    characteristics:
      - "Mastered domain"
      - "Only learn from peers"
      - "Want cutting-edge methods"
      - "Judge by quantified ROI"
      - "Zero tolerance for fluff"
    copy_approach: "Peer authority, quantified mechanisms, elite community framing"
    example_claim: "Join 47 founders building $100M+ companies using our method"
    status: "INCOMPLETE"
  # CRITICAL DECISION
  identified_stage: null # 1, 2, 3, 4, or 5
  confidence_in_assessment: null # 0-100%
  reasoning: null # Why is market at this stage?
  status: "INCOMPLETE"
# =============================================================================

# SECTION 3: STRATEGIC IMPLICATIONS

# =============================================================================

# This section auto-populates once level + stage are chosen
strategic_implications:
  description: "How awareness + sophistication determine positioning strategy"
  awareness_level_selected: null
  sophistication_stage_selected: null
  messaging_strategy: null
  # Auto-generated based on combination above

  # Example: Level 3 + Stage 3 = "Experienced market comparing solutions"

  #          Copy strategy: Differentiation + mechanism focus
  headline_approach: null
  body_copy_approach: null
  proof_requirements: null
  objection_handling: null
  pricing_positioning: null
  status: "INCOMPLETE"
# =============================================================================

# SECTION 4: VALIDATION

# =============================================================================
validation:
  required_decisions:
    - "identified_level (1-5)"
    - "identified_stage (1-5)"
  validation_checks:
    - "Level and stage both selected (no null values)"
    - "Confidence assessments provided"
    - "Reasoning explains the assessment"
  status: "INCOMPLETE"
# =============================================================================

# METADATA

# =============================================================================
metadata_final:
  last_updated: null
  updated_by: null
  validated_by: null
  validation_date: null
  # This gates everything
  completeness_percentage: 0
  required_fields: 2 # Level + Stage
  completed_fields: 0
  status: "TEMPLATE"
  next_step: "Once diagnosis complete, fill: icp.yaml, brand.yaml"


---

## Referência: templates/company-icp.yaml

# COMPANY ICP — Ideal Customer Profile (47 FIELDS)
#
# MANDATORY: Complete diagnosis.yaml FIRST
# This template depends on diagnosed awareness level
#
# Author: @your-handle (discovered pattern from YOUR_PRODUCT)
# Template Version: 1.0
# Field Count: 47 required fields (all mandatory)

metadata:
  name: "Company Ideal Customer Profile"
  version: "1.0"
  template_type: "company-level"
  required_for_governance: true
  completeness_target: 0.85 # Cannot proceed below 85%
  guardian: "CMO"
  status: "INCOMPLETE"
  # DIAGNOSIS GATE
  depends_on_diagnosis: true
  diagnosis_awareness_level: null # Will be pulled from diagnosis.yaml
  required_fields_total: 47
  completed_fields: 0
  completeness_percentage: 0
  last_updated: FILL_THIS
  product_name: FILL_THIS
# Core ICP Definition (3 fields)
core_icp:
  one_sentence_definition: null
  # FILL THIS: Complete sentence defining ideal customer
  # Example: "É o profissional experiente frustrado que reconhece que o problema é sistema, não informação"

  icp_name: null
  # FILL THIS: Archetype name (e.g., "The Stuck Constructor")

  fit_percentage: null
  # FILL THIS: How much of market is this ICP? (e.g., "Primary target, 80% of best customers")

  status: "INCOMPLETE"
# Demographics: Age (3 fields)
demographics_age:
  primary_range: null
  secondary_range: null
  median_age: null
  status: "INCOMPLETE"
# Demographics: Professional Experience (3 fields)
demographics_experience:
  years_in_field: null
  background_type: null
  career_progression: null
  status: "INCOMPLETE"
# Demographics: Education (3 fields)
demographics_education:
  minimum_level: null
  percentage_with_postgrad: null
  field_of_study_primary: null
  status: "INCOMPLETE"
# Demographics: Life Stage (3 fields)
demographics_life_stage:
  description: null
  household_type: null
  dependents_or_commitments: null
  status: "INCOMPLETE"
# Demographics: Mental State (3 fields)
demographics_mindset:
  primary_state: null
  secondary_state: null
  limiting_belief: null
  status: "INCOMPLETE"
# Demographics: Geography (2 fields)
demographics_geography:
  primary_market_percentage: null
  secondary_markets: null
  status: "INCOMPLETE"
# Psychographics: Central Pain (3 fields)
psychographics_central_pain:
  what_they_say: null
  what_they_mean: null
  what_they_fear: null
  status: "INCOMPLETE"
# Psychographics: Core Beliefs (1 section, 5 beliefs)
psychographics_beliefs:
  belief_1: null
  belief_2: null
  belief_3: null
  belief_4: null
  belief_5: null
  status: "INCOMPLETE"
# Psychographics: Mindset (3 fields)
psychographics_mental_state:
  dominant_thought: null
  secondary_thought: null
  limiting_belief: null
  status: "INCOMPLETE"
# Psychographics: Consumption Pattern (3 fields)
psychographics_consumption:
  hours_per_week: null
  ratio_consumption_to_action: null # e.g., "10:1 (consume 10h, act 1h)"
  purchases_per_year: null
  status: "INCOMPLETE"
# Psychographics: Community Needs (4 booleans)
psychographics_community:
  seeks_validation: false
  seeks_accountability: false
  seeks_belonging: false
  seeks_permission: false
  status: "INCOMPLETE"
# Pain Stack: Latent Pains (4 fields)
pain_stack_latent:
  pain_1: null
  pain_2: null
  pain_3: null
  pain_4: null
  status: "INCOMPLETE"
# Pain Stack: Hidden Pains (10 fields)
pain_stack_hidden:
  pain_1: null
  pain_2: null
  pain_3: null
  pain_4: null
  pain_5: null
  pain_6: null
  pain_7: null
  pain_8: null
  pain_9: null
  pain_10: null
  status: "INCOMPLETE"
# Pain Stack: Existential Pains (3 fields with percentages)
pain_stack_existential:
  pain_1: null
  pain_1_prevalence_percentage: null
  pain_2: null
  pain_2_prevalence_percentage: null
  pain_3: null
  pain_3_prevalence_percentage: null
  status: "INCOMPLETE"
# Archetypes (5 archetypes × 3 fields each = 15 fields, but count as 5)
archetypes:
  archetype_1_name: null
  archetype_1_percentage: null
  archetype_1_core_issue: null
  archetype_2_name: null
  archetype_2_percentage: null
  archetype_2_core_issue: null
  archetype_3_name: null
  archetype_3_percentage: null
  archetype_3_core_issue: null
  archetype_4_name: null
  archetype_4_percentage: null
  archetype_4_core_issue: null
  archetype_5_name: null
  archetype_5_percentage: null
  archetype_5_core_issue: null
  status: "INCOMPLETE"
  validation_note: "5 archetypes must sum to 100%"
# Motivations (2 sections, 5 triggers each)
motivations_action_triggers:
  trigger_1: null
  trigger_2: null
  trigger_3: null
  trigger_4: null
  trigger_5: null
  status: "INCOMPLETE"
motivations_paralysis_triggers:
  trigger_1: null
  trigger_2: null
  trigger_3: null
  trigger_4: null
  trigger_5: null
  status: "INCOMPLETE"
# Red/Green Flags (2 sections)
red_flags:
  flag_1: null
  flag_2: null
  flag_3: null
  flag_4: null
  flag_5: null
  status: "INCOMPLETE"
green_flags:
  flag_1: null
  flag_2: null
  flag_3: null
  flag_4: null
  flag_5: null
  flag_6: null
  flag_7: null
  status: "INCOMPLETE"
# Final Validation
validation:
  field_count: 47
  completed: 0
  completeness: 0
  status: "INCOMPLETE"
