# Task: Elicit Company Profile (YAML)

```yaml
task:
  id: elicit-company-profile
  name: Elicitação do Perfil da Empresa (YAML)
  agent: workspace-chief
  elicit: true
  output_format: yaml
  target_template: company/company-profile.yaml
```

## Descrição

O COO conduz elicitação estruturada para popular o template `company-profile.yaml` com dados completos da empresa. Este arquivo é o perfil institucional — quem é a empresa, missão, visão, valores, portfolio e métricas.

## Prerequisites

- Bootstrap executado (`{pasta}/user.yaml` existe)
- Negócio criado (`{pasta}/` existe)
- Templates scaffolded (`*scaffold-templates` executado)

## Usage

```
*elicit-company-profile {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/company/company-profile.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo ao usuário, perguntar se quer atualizar ou completar campos vazios.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/mission-vision.md` (Sistema A, se existir):
   - **Se existe:** Pré-popular campos de mission/vision/values a partir do conteúdo .md.
   - Informar: "Encontrei dados do Sistema A (mission-vision.md). Vou pré-popular os campos correspondentes."
3. Definir modo: `CREATE` (template vazio) ou `UPDATE` (campos parciais).

### Fase 1: Fundação da Empresa (5 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Fundação da Empresa"
  questions:
    - id: legal_name
      text: "Qual é a razão social completa da empresa?"
      required: true
      maps_to: company_essence.legal_name

    - id: trade_name
      text: "Qual é o nome fantasia / marca da empresa?"
      required: true
      maps_to: company_essence.trade_name

    - id: year_founded
      text: "Em que ano a empresa foi fundada?"
      required: true
      maps_to: company_essence.year_founded

    - id: headquarters
      text: "Qual é a sede da empresa? (cidade, país)"
      required: true
      maps_to: company_essence.headquarters

    - id: one_liner
      text: "Em uma frase, o que sua empresa faz e para quem?"
      required: true
      maps_to: company_essence.one_liner

    - id: origin
      text: "Por que você fundou essa empresa? Qual foi o insight ou frustração que levou à criação?"
      required: false
      maps_to: company_essence.origin_story_short
```

**Após respostas:** Atualizar seção `company_essence` no YAML. Definir `company_essence.status: COMPLETE` se todos preenchidos.

### Fase 2: Missão, Visão e Valores (6 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Missão, Visão e Valores"
  questions:
    - id: mission_statement
      text: "Qual é a missão da empresa? (o que vocês fazem, o propósito)"
      required: true
      maps_to: mission.statement

    - id: who_benefits
      text: "Quem se beneficia diretamente do que vocês fazem? (liste 2-3 grupos)"
      required: true
      maps_to: mission.who_benefits

    - id: transformation
      text: "Qual é a transformação que vocês entregam? (estado antes → estado depois)"
      required: true
      maps_to: mission.transformation

    - id: vision_statement
      text: "Onde vocês querem estar em 5-10 anos? Qual é a visão de futuro?"
      required: true
      maps_to: vision.statement

    - id: values
      text: "Quais são os 3 valores fundamentais que guiam as decisões da empresa? Para cada um, diga: o nome, a definição, e como vocês vivem isso no dia-a-dia."
      required: true
      maps_to: values

    - id: proof_of_traction
      text: "Que evidências mostram que vocês estão caminhando na direção certa? (métricas, marcos, conquistas)"
      required: false
      maps_to: vision.proof_of_traction
```

**Após respostas:** Atualizar seções `mission`, `vision`, `values`. Calcular status por seção.

### Fase 3: Posicionamento (4 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Posicionamento"
  questions:
    - id: target_market
      text: "Quem é o público-alvo da empresa como um todo? (não o ICP detalhado, mas o mercado)"
      required: true
      maps_to: positioning.target_market

    - id: unique_angle
      text: "O que torna a empresa única no mercado? O que vocês têm que ninguém mais tem?"
      required: true
      maps_to: positioning.unique_angle

    - id: primary_promise
      text: "Qual é a promessa principal da empresa ao mercado?"
      required: true
      maps_to: positioning.primary_promise

    - id: credibility
      text: "Por que alguém deveria acreditar nessa promessa? Quais são as provas de credibilidade?"
      required: true
      maps_to: positioning.credibility_foundation
```

### Fase 4: Portfolio de Produtos (4 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Portfolio de Produtos"
  questions:
    - id: products
      text: "Quais produtos/serviços a empresa oferece? Para cada um, diga: nome, tipo (curso, comunidade, consultoria, SaaS, etc.), e posicionamento."
      required: true
      maps_to: products

    - id: revenue_distribution
      text: "Como a receita se distribui entre os produtos? (% aproximada para cada)"
      required: false
      maps_to: products.revenue_by_product

    - id: flagship
      text: "Qual é o produto carro-chefe? O que gera mais receita ou mais reputação?"
      required: true
      maps_to: products.product_1

    - id: pipeline
      text: "Tem algum produto planejado mas ainda não lançado?"
      required: false
      maps_to: products
```

### Fase 5: Mercado (4 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Mercado"
  questions:
    - id: tam
      text: "Qual é o tamanho estimado do mercado que vocês atuam? (TAM)"
      required: false
      maps_to: market_analysis.total_addressable_market

    - id: segment
      text: "Como vocês definem o segmento de mercado? (educação empresarial, SaaS, consultoria, etc.)"
      required: true
      maps_to: market_analysis.market_segment

    - id: competitors
      text: "Quais são os 3 principais concorrentes ou alternativas que seu cliente considera?"
      required: true
      maps_to: market_analysis.competitive_landscape

    - id: timing
      text: "Por que agora é o momento certo para a empresa? Que tendência ou mudança de mercado favorece vocês?"
      required: false
      maps_to: market_analysis.market_timing
```

### Fase 6: Stage e Métricas (5 perguntas)

```yaml
elicitation:
  phase: 6
  name: "Stage e Métricas"
  questions:
    - id: stage
      text: "Em qual estágio a empresa está? (Seed: <$100K ARR | Growth: $100K-$1M | Scale: $1M-$10M | Mature: >$10M)"
      required: true
      maps_to: stage.current_stage

    - id: revenue
      text: "Qual é a receita anual atual (aproximada)?"
      required: false
      maps_to: key_metrics.annual_revenue

    - id: growth
      text: "Qual é o crescimento ano a ano? (%)"
      required: false
      maps_to: key_metrics.year_over_year_growth

    - id: customers
      text: "Quantos clientes ativos vocês têm?"
      required: true
      maps_to: key_metrics.customer_count

    - id: retention
      text: "Qual é a taxa de retenção de clientes? E o LTV médio?"
      required: false
      maps_to: key_metrics.customer_retention_rate
```

### Fase 7: Voz da Empresa (2 perguntas)

```yaml
elicitation:
  phase: 7
  name: "Voz da Empresa"
  questions:
    - id: tone
      text: "Como a empresa se comunica? Qual é o tom: formal/informal, técnico/acessível, sério/descontraído?"
      required: true
      maps_to: company_voice.tone

    - id: vocabulary
      text: "Quais são os termos-chave que a empresa usa (e quais NUNCA usa)?"
      required: false
      maps_to: company_voice.vocabulary
```

### Fase 8: Síntese e Output

1. **Processar respostas** e mapear para os campos do template YAML.
2. **Popular `company-profile.yaml`:**
   - Campos respondidos: substituir valores placeholder pelo valor real.
   - Campos não respondidos: manter como `null` ou placeholder original.
   - Status por seção: `COMPLETE` se todos os campos preenchidos, `INCOMPLETE` caso contrário.
3. **Calcular completude:**
   ```yaml
   metadata:
     completed_fields: {count}
     completeness_percentage: {percentage}
     status: "COMPLETE" or "INCOMPLETE"
   ```
4. **Salvar** em `{pasta}/company/company-profile.yaml`.
5. **Relatório:**
   ```
   Company Profile para: {slug}

   Seções:
     company_essence: COMPLETE ✅
     mission: COMPLETE ✅
     vision: COMPLETE ✅
     values: COMPLETE ✅
     positioning: COMPLETE ✅
     products: INCOMPLETE ⚠️ (faltam revenue estimates)
     market_analysis: INCOMPLETE ⚠️
     stage: COMPLETE ✅
     company_voice: COMPLETE ✅

   Completude: 87% (89/102 campos)
   Gate: PASSED ✅ (>= 85%)
   ```

## Convenções de Output YAML

- Campos respondidos: substituir `FILL_THIS`, `YOUR_VERSION`, `null`, ou exemplos pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` se todos preenchidos, `INCOMPLETE` caso contrário
- Metadata: atualizar `completed_fields` e `completeness_percentage`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Todas as perguntas obrigatórias respondidas
- [ ] YAML gerado é válido (parseable)
- [ ] Estrutura idêntica ao template source
- [ ] Metadata de completude calculada
- [ ] Arquivo salvo em `{pasta}/company/company-profile.yaml`
- [ ] Se mission-vision.md existia, campos pré-populados

## Next Steps

Após company-profile:
1. `*elicit-founder-dna {slug}` - DNA do fundador
2. `*elicit-team-structure {slug}` - Estrutura do time
3. Ou `*setup-business-profile {slug}` para pipeline completo

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
