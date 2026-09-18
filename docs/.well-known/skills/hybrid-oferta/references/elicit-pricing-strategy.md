# Task: Elicit Pricing Strategy (YAML)

```yaml
task:
  id: elicit-pricing-strategy
  name: Elicitação de Estratégia de Pricing (YAML)
  agent: cmo-architect
  elicit: true
  output_format: yaml
  target_template: operations/pricing-strategy.yaml
```

## Descrição

O CMO conduz elicitação para documentar a estratégia de preços — fundação, psicologia de preço, posição competitiva, e experimentos. O output popula `pricing-strategy.yaml` no diretório `operations/`.

## Prerequisites

- Bootstrap executado
- Templates scaffolded
- Recomendado: `company-profile.yaml` e `icp.yaml` preenchidos

## Usage

```
*elicit-pricing-strategy {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/operations/pricing-strategy.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/company-profile.yaml` (se existir) para contexto de produtos e receita.
3. Ler `{pasta}/company/icp.yaml` (se existir) para contexto de poder aquisitivo do ICP.
4. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Fundação de Preço (5 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Fundação de Preço"
  questions:
    - id: current_price
      text: "Qual é o preço atual do seu produto/serviço principal? (se existente)"
      required: true
      maps_to: pricing_foundation.current_price

    - id: model
      text: "Qual o modelo de pricing? (one-time, assinatura, usage-based, tiered, freemium)"
      required: true
      maps_to: pricing_foundation.pricing_model

    - id: philosophy
      text: "Sua filosofia de preço é baseada em custo, mercado ou valor? (cost-plus, market-based, value-based)"
      required: true
      maps_to: pricing_foundation.pricing_philosophy

    - id: value_delivered
      text: "Quanto de valor monetário, tempo e transformação emocional seu produto entrega? Quantifique."
      required: true
      maps_to: pricing_foundation.value_delivered

    - id: price_to_value
      text: "Seu preço é que % do valor total entregue? (Hormozi recomenda ~10%)"
      required: false
      maps_to: pricing_foundation.price_to_value_ratio
```

### Fase 2: Psicologia de Preço (5 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Psicologia de Preço"
  questions:
    - id: charm_pricing
      text: "Você usa charm pricing? (ex: R$997 vs R$1.000). Por quê?"
      required: true
      maps_to: pricing_psychology.charm_pricing

    - id: round_pricing
      text: "Ou usa pricing redondo para posicionamento premium? (ex: R$5.000)"
      required: true
      maps_to: pricing_psychology.round_pricing

    - id: anchoring
      text: "Qual preço maior você ancora ANTES de revelar o preço real? (ex: 'O valor total é R$15.000, mas hoje por R$2.997')"
      required: true
      maps_to: pricing_psychology.anchoring_strategy

    - id: pain_reduction
      text: "Como você reduz a dor do pagamento? (parcelamento, desconto anual, trial, garantia)"
      required: true
      maps_to: pricing_psychology.pain_of_paying

    - id: framing
      text: "Como você ENQUADRA o preço? (custo diário, comparação com algo familiar, ROI)"
      required: true
      maps_to: pricing_psychology.price_framing
```

### Fase 3: Posição Competitiva (4 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Posição Competitiva"
  questions:
    - id: lowest_competitor
      text: "Qual o concorrente mais barato e seu preço?"
      required: true
      maps_to: competitive_position.market_price_range.lowest_competitor

    - id: average_price
      text: "Qual o preço médio do mercado?"
      required: true
      maps_to: competitive_position.market_price_range.average_market_price

    - id: premium_competitor
      text: "Qual o concorrente mais caro e seu preço?"
      required: true
      maps_to: competitive_position.market_price_range.premium_competitor

    - id: your_position
      text: "Onde você se posiciona? (Budget / Mid-market / Premium / Ultra-premium). Por quê?"
      required: true
      maps_to: competitive_position.your_position
```

### Fase 4: Experimentos de Preço (4 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Experimentos de Preço"
  questions:
    - id: experiment_1
      text: "Descreva um experimento de preço que gostaria de testar: hipótese, método, duração, métrica de sucesso."
      required: false
      maps_to: pricing_experiments.experiment_1

    - id: experiment_2
      text: "Outro experimento de preço a testar?"
      required: false
      maps_to: pricing_experiments.experiment_2

    - id: past_tests
      text: "Já testou preços diferentes antes? O que aprendeu?"
      required: false
      maps_to: pricing_experiments

    - id: flexibility
      text: "Quão flexível é o preço? (fixo, negociável, customizado por caso)"
      required: true
      maps_to: pricing_experiments
```

### Fase 5: Diagnóstico de Pricing (5 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Diagnóstico de Pricing"
  questions:
    - id: confidence
      text: "De 1-10, quão confiante você está no preço atual?"
      required: true
      maps_to: pricing_diagnostic.pricing_confidence

    - id: value_perception
      text: "De 1-10, quão bem o cliente percebe o valor pelo preço?"
      required: true
      maps_to: pricing_diagnostic.value_perception

    - id: price_objection
      text: "Com que frequência preço é objeção? (raramente, às vezes, frequentemente, sempre)"
      required: true
      maps_to: pricing_diagnostic.price_objection_frequency

    - id: margin_health
      text: "A margem atual é saudável? (% de margem, se confortável em compartilhar)"
      required: false
      maps_to: pricing_diagnostic.margin_health

    - id: pricing_risk
      text: "Qual o maior risco do preço atual? (muito barato desvaloriza, muito caro afasta, etc.)"
      required: true
      maps_to: pricing_diagnostic.pricing_risk
```

### Fase 6: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `pricing-strategy.yaml`:**
   - Campos respondidos: substituir `FILL` / `FILL_THIS` pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` / `INCOMPLETE`.
3. **Calcular completude** e salvar em `{pasta}/operations/pricing-strategy.yaml`.
4. **Relatório** com seções e completude.

## Convenções de Output YAML

- Campos respondidos: substituir `FILL` / `FILL_THIS` pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Fundação de preço documentada (preço, modelo, filosofia)
- [ ] Psicologia de preço com pelo menos anchoring e framing
- [ ] Posição competitiva mapeada (3 concorrentes)
- [ ] Diagnóstico com scores numéricos
- [ ] YAML válido salvo em operations/pricing-strategy.yaml

## Next Steps

Após pricing:
1. Completar pipeline com `*setup-business-profile {slug}`
2. Dados alimentam `commission-design.yaml` (futuro)

---

*Task do Squad Hybrid Workspace - CMO Architect*
