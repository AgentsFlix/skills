# Task: Elicit Brand (YAML)

```yaml
task:
  id: elicit-brand-yaml
  name: Elicitação de Brand Guidelines (YAML)
  agent: cmo-architect
  elicit: true
  output_format: yaml
  target_template: company/brand.yaml
```

## Descrição

O CMO conduz elicitação estruturada para popular o template `brand.yaml` com guidelines completos da marca — core, promessas, personalidade, voice DNA e valores.

## Prerequisites

- Bootstrap executado
- Negócio criado e templates scaffolded
- Recomendado: `founder-dna.yaml` e `company-profile.yaml` preenchidos

## Usage

```
*elicit-brand-yaml {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/company/brand.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/brand.md` (Sistema A, se existir): pré-popular campos correspondentes.
3. Ler `{pasta}/company/founder-dna.yaml` (se existir): usar personalidade do fundador como base para personalidade da marca.
4. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Brand Core (3 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Brand Core"
  questions:
    - id: brand_name
      text: "Qual é o nome oficial da marca?"
      required: true
      maps_to: brand_core.brand_name

    - id: tagline
      text: "Qual é a tagline ou slogan da marca? (uma frase-promessa)"
      required: true
      maps_to: brand_core.brand_tagline

    - id: purpose
      text: "Qual é o propósito da marca? Por que ela existe além de vender?"
      required: true
      maps_to: brand_core.brand_purpose

    - id: core_belief
      text: "Qual é a crença central da marca sobre o potencial dos clientes?"
      required: true
      maps_to: brand_essence.core_belief
```

### Fase 2: Promessas e Inimigos (5 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Promessas e Inimigos"
  questions:
    - id: marketing_promise
      text: "Qual é a promessa de marketing? (o que vocês dizem publicamente)"
      required: true
      maps_to: promises.marketing_promise

    - id: actual_promise
      text: "Qual é a promessa real? (o que vocês de fato entregam)"
      required: true
      maps_to: promises.actual_promise

    - id: true_promise
      text: "Qual é a promessa profunda? (a transformação mais profunda que vocês acreditam ser possível)"
      required: true
      maps_to: promises.true_promise

    - id: not_enemy
      text: "O que a maioria das pessoas ACHA que é o problema dos seus clientes?"
      required: true
      maps_to: enemies.NOT_the_enemy

    - id: real_enemy
      text: "Qual é o REAL inimigo/problema? O que realmente impede seus clientes?"
      required: true
      maps_to: enemies.THE_real_enemy
```

### Fase 3: Personalidade da Marca (5 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Personalidade da Marca"
  intro: "Vou pedir para classificar a personalidade da marca em escalas de 1-10."
  questions:
    - id: warmth
      text: "CALOR: Quão calorosa é a marca? (1=fria/corporativa, 10=muito acolhedora)"
      required: true
      maps_to: personality.warmth_level

    - id: directness
      text: "DIRETIVIDADE: Quão direta é a comunicação? (1=muito sutil, 10=extremamente direta)"
      required: true
      maps_to: personality.directness_level

    - id: formality
      text: "FORMALIDADE: Quão formal é o tom? (1=muito casual, 10=muito formal)"
      required: true
      maps_to: personality.formality_level

    - id: confidence
      text: "CONFIANÇA: Quão assertiva é a marca? (1=humilde/cautelosa, 10=máxima convicção)"
      required: true
      maps_to: personality.confidence_level

    - id: personality_descriptions
      text: "Para cada dimensão, dê uma descrição curta. Ex: 'Calor 7: acolhedor mas não meloso'"
      required: true
      maps_to: personality
```

### Fase 4: Voice DNA (6 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Voice DNA"
  questions:
    - id: power_words
      text: "Quais são as POWER WORDS da marca? (5-10 palavras que carregam energia e identidade)"
      required: true
      maps_to: voice_dna.power_words

    - id: signature_phrases
      text: "Quais são as frases-assinatura? (expressões que a marca sempre usa)"
      required: true
      maps_to: voice_dna.signature_phrases

    - id: metaphors
      text: "Quais metáforas a marca usa? (ex: 'construir', 'sistema operacional', 'arsenal')"
      required: true
      maps_to: voice_dna.metaphors

    - id: forbidden_words
      text: "Quais palavras a marca NUNCA usa? E por quê?"
      required: true
      maps_to: voice_dna.forbidden_words

    - id: communication_examples
      text: "Dê 2-3 exemplos de como a marca se comunica (frases reais de posts, emails, etc.)"
      required: false
      maps_to: voice_dna

    - id: anti_examples
      text: "Dê 2-3 exemplos de como a marca NUNCA se comunicaria"
      required: false
      maps_to: voice_dna
```

### Fase 5: Valores da Marca (4 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Valores da Marca"
  questions:
    - id: values_count
      text: "Quantos valores core a marca tem? (recomendo 3-6)"
      required: true
      maps_to: core_values

    - id: values_details
      text: "Para cada valor, diga: nome, princípio (uma frase), como se manifesta na prática, e impacto no cliente."
      required: true
      maps_to: core_values

    - id: value_hierarchy
      text: "Se tivesse que escolher UM valor que define tudo, qual seria?"
      required: true
      maps_to: core_values

    - id: value_tension
      text: "Existe alguma tensão entre valores? (ex: velocidade vs qualidade). Como resolvem?"
      required: false
      maps_to: core_values
```

### Fase 6: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `brand.yaml`:**
   - Campos respondidos: substituir `FILL_THIS` pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` / `INCOMPLETE`.
3. **Calcular completude:**
   ```yaml
   metadata:
     completed_fields: {count}
     completeness_percentage: {percentage}
     status: "COMPLETE" or "INCOMPLETE"
   ```
4. **Salvar** em `{pasta}/company/brand.yaml`.
5. **Relatório** com seções e completude.

## Convenções de Output YAML

- Campos respondidos: substituir `FILL_THIS` pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Metadata: atualizar `completed_fields` e `completeness_percentage`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Todas as perguntas obrigatórias respondidas
- [ ] YAML gerado é válido
- [ ] Personalidade tem 4 dimensões com scores 1-10
- [ ] Voice DNA tem power words, phrases, metaphors, forbidden
- [ ] Valores com name + principle + manifestation + impact
- [ ] Arquivo salvo em `{pasta}/company/brand.yaml`

## Next Steps

Após brand:
1. `*elicit-pricing-strategy {slug}` - Estratégia de preços
2. Ou `*setup-business-profile {slug}` para pipeline completo

---

*Task do Squad Hybrid Workspace - CMO Architect*
