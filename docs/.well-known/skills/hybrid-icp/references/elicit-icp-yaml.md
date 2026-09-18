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
