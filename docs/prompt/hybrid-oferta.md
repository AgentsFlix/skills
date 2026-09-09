# hybrid-oferta · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.3. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-oferta.md` uma skill chamada hybrid-oferta. Quando eu pedir algo como "monta o offerbook de [produto]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# PREÇO E PROMESSA · Offerbook do produto, estratégia de preço e o diagnóstico da oferta

O offerbook é o documento da oferta: o que entra, o que custa, por que vale mais que custa, quais objeções ela já responde. Esta skill preenche o offerbook e a estratégia de preço, e roda o diagnóstico vertical de força da oferta (38 variáveis) para dizer onde ela está fraca antes de o mercado dizer.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Use para criar/atualizar o offerbook, documentar a estratégia de preço ou diagnosticar uma oferta existente. Resolva o modo pelo pedido; se ambíguo, pergunte só pelo modo com exemplo baseado no produto conhecido, ou hipotético se não houver memória.
- Perfil e ICP existentes são contexto reutilizável. Preço, oferta, provas e parceria são decisões humanas, nunca preenchimento automático.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit pricing strategy | `references/elicit-pricing-strategy.md` |
| diagnose offer | `references/diagnose-offer.md` |
| template que esta skill preenche | `templates/company-offerbook.yaml` |
| template que esta skill preenche | `templates/operations-pricing-strategy.yaml` |
| campos que o diagnóstico lê | `references/contexto-diagnose-offer.md` |

## Procedure

1. Identifique negócio, produto e modo. Reuse conversa, memória acessível e arquivos do negócio com origem/data. Pergunte só lacunas; toda pergunta aberta, inclusive dos templates e referências, leva exemplo baseado nesse contexto, rotulado como sugestão. Sem memória, declare e use exemplo hipotético.
2. Para **criar/atualizar offerbook**: leia `templates/company-offerbook.yaml` e o arquivo existente em `{pasta}/company/offerbook.yaml`. Preencha suas seções a partir das evidências disponíveis e das respostas restantes, sem sobrescrever dados confirmados. Campos sem resposta ficam null e listados; preserve a estrutura. Registre fonte por campo e calcule completude sobre os campos de conteúdo exigidos, excluindo metadados e contadores. Não promova FILL_THIS ou exemplos a fatos.
3. Para **pricing**: siga `references/elicit-pricing-strategy.md` com `templates/operations-pricing-strategy.yaml`. Grave `{pasta}/operations/pricing-strategy.yaml`; pule perguntas já resolvidas e personalize os exemplos de cada lacuna. Preços sugeridos ficam hipóteses até a pessoa decidir.
4. Para **diagnosticar**: exija offerbook de produto em `{pasta}/products/{product}/offerbook.yaml`; leia `references/contexto-diagnose-offer.md` e `references/diagnose-offer.md`. O template company tem campos diferentes do esquema products usado pelo diagnóstico. Não renomeie nem mova automaticamente; se só houver o company, registre a incompatibilidade e solicite o arquivo compatível ou uma adaptação de campos com evidência. Com pré-requisito atendido, pontue conforme rubrica, listando fontes, campos e arquivos ausentes. Entregue `{pasta}/diagnosticos/AAAA-MM-DD-<produto>-offer-diagnostic.md`.
5. Verifique o modo executado. Escrita local indisponível: entregue o conteúdo e o destino pretendido sem afirmar que salvou. Avalie rotina: criação é pontual; revisão pode valer quando preço, produto ou evidências mudam. Proponha frequência/fuso/inputs/canal/silêncio/pausa só se útil; ative apenas com autorização e agendador real.

## Pitfalls

- Confundir criar o offerbook com diagnosticar. São modos com pré-requisitos e artefatos diferentes.
- Usar os nomes de campos de company como se fossem o esquema products. Incompatibilidade precisa de adaptação explícita.
- Tratar perguntas da referência como formulário obrigatório completo ou completar preço/prova por suposição.
- Usar comandos do runtime de origem como se estivessem instalados. São nomes de etapas.

## Verification

1. O resultado identifica o modo e o produto e entrega o respectivo artefato, ou nomeia o pré-requisito que o deixou aguardando.
2. Offerbook/pricing preservam o template, parseiam como YAML e listam campos não resolvidos. Completude mostra numerador, denominador e critério; não conta metadados nem placeholders. Abaixo do gate da referência, não declarar pronto.
3. Diagnóstico usa o esquema correto, cita evidências e segue as categorias e pesos da referência, com ausências explícitas. Uma nota baixa é resultado válido.
4. Preço, oferta e prova não foram inventados nem confirmados por ausência de resposta. Toda pergunta aberta teve exemplo contextual ou fallback identificado.
5. A avaliação de rotina tem motivo; nenhum agendamento ou envio foi alegado sem execução autorizada.

## Arquivos desta skill (incluídos abaixo)

- `references/contexto-diagnose-offer.md`
- `references/diagnose-offer.md`
- `references/elicit-pricing-strategy.md`
- `templates/company-offerbook.yaml`
- `templates/operations-pricing-strategy.yaml`


---

## Referência: references/contexto-diagnose-offer.md

# Contexto: diagnose-offer

Contexto para diagnóstico de força da oferta por produto

Origem: manifest `diagnose-offer` (39 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `offerbook_exists` | `products/{product}/offerbook.yaml` | `_exists` | boolean |
| `offer_name` | `products/{product}/offerbook.yaml` | `positioning.offer_name` | string |
| `offer_price` | `products/{product}/offerbook.yaml` | `offer_architecture.grand_slam_offer.price` | number |
| `offer_payment_options` | `products/{product}/offerbook.yaml` | `offer_architecture.grand_slam_offer.payment_options` | string |
| `offer_unique_mechanism` | `products/{product}/offerbook.yaml` | `positioning.unique_mechanism` | string |
| `offer_modules_count` | `products/{product}/offerbook.yaml` | `core_modules` | array_length |
| `offer_bonuses_count` | `products/{product}/offerbook.yaml` | `offer_architecture.bonuses` | array_length |
| `offer_objections_count` | `products/{product}/offerbook.yaml` | `objections_responses` | array_length |
| `offer_diagnostic_summary` | `products/{product}/offerbook.yaml` | `diagnostic_summary` | string |
| `value_equation_exists` | `products/{product}/value-equation.yaml` | `_exists` | boolean |
| `ve_dream_outcome_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.dream_outcome_score` | number |
| `ve_perceived_likelihood_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.perceived_likelihood_score` | number |
| `ve_time_delay_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.time_delay_score` | number |
| `ve_effort_sacrifice_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.effort_sacrifice_score` | number |
| `ve_weakest_variable` | `products/{product}/value-equation.yaml` | `composite_diagnostic.weakest_variable_analysis` | string |
| `proof_exists` | `products/{product}/proof.yaml` | `_exists` | boolean |
| `proof_case_studies_count` | `products/{product}/proof.yaml` | `case_studies` | array_length |
| `proof_testimonials_by_archetype_count` | `products/{product}/proof.yaml` | `testimonials_by_archetype` | array_length |
| `proof_statistics_count` | `products/{product}/proof.yaml` | `statistics` | array_length |
| `proof_before_after_count` | `products/{product}/proof.yaml` | `before_after_comparisons` | array_length |
| `proof_verification_tiers` | `products/{product}/proof.yaml` | `header_summary.verification_tier_distribution` | object |
| `proof_missing_to_gather` | `products/{product}/proof.yaml` | `missing_proof_to_gather` | array_length |
| `testimonials_exists` | `products/{product}/testimonials.yaml` | `_exists` | boolean |
| `testimonials_total_count` | `products/{product}/testimonials.yaml` | `testimonials_database` | array_length |
| `testimonials_by_awareness_coverage` | `products/{product}/testimonials.yaml` | `testimonials_by_awareness_level` | array_length |
| `testimonials_by_result_coverage` | `products/{product}/testimonials.yaml` | `testimonials_by_result` | array_length |
| `testimonials_video_count` | `products/{product}/testimonials.yaml` | `video_testimonial_format` | array_length |
| `testimonials_checklist_completion` | `products/{product}/testimonials.yaml` | `testimonial_collection_checklist` | percentage |
| `guarantee_exists` | `products/{product}/guarantee-design.yaml` | `_exists` | boolean |
| `guarantee_level` | `products/{product}/guarantee-design.yaml` | `guarantee_design.chosen_level` | string |
| `guarantee_name` | `products/{product}/guarantee-design.yaml` | `guarantee_language.guarantee_name` | string |
| `guarantee_ethical_passed` | `products/{product}/guarantee-design.yaml` | `ethical_filter.ethical_verdict` | string |
| `guarantee_diagnostic` | `products/{product}/guarantee-design.yaml` | `diagnostic_summary` | object |
| `competitor_exists` | `products/{product}/competitor-analysis.yaml` | `_exists` | boolean |
| `competitor_count` | `products/{product}/competitor-analysis.yaml` | `competitive_landscape` | array_length |
| `competitor_your_position` | `products/{product}/competitor-analysis.yaml` | `positioning_map.your_position` | object |
| `competitor_differentiation_strength` | `products/{product}/competitor-analysis.yaml` | `competitive_strength_score.differentiation_strength` | number |
| `competitor_unfair_advantage` | `products/{product}/competitor-analysis.yaml` | `differentiation.your_unfair_advantage` | string |
| `pricing_anchoring_exists` | `products/{product}/pricing-anchoring.yaml` | `_exists` | boolean |


---

## Referência: references/diagnose-offer.md

# Task: Diagnose Offer

```yaml
task:
  id: diagnose-offer
  name: Diagnóstico de Força da Oferta
  agent: cmo-architect
  trigger: manual
  elicit: false
  commands:
    - "*diagnose-offer {slug} {product}"
  manifest: "manifests/diagnose-offer.manifest.yaml"
```

## Descrição

Diagnóstico vertical que aprofunda a dimensão "Offer" do diagnose-business. Avalia a força completa de uma oferta específica usando 6 templates do workspace e os scores embutidos nos próprios templates.

**Diferença do diagnose-business:** O diagnose-business dá um score geral (ex: "Offer: 62/100"). Este diagnóstico explica o POR QUE: qual variável da value equation está fraca, quantos case studies existem, se a garantia foi desenhada, se há competidores mapeados.

**Guardian:** CMO Architect
**Manifest:** `manifests/diagnose-offer.manifest.yaml` (38 variáveis)
**Output:** `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-{product}-offer-diagnostic.md`

## Pré-requisitos

- Business existe: `{pasta}/`
- Produto existe: `{pasta}/products/{product}/`
- Pelo menos `offerbook.yaml` presente

## Workflow

### Fase 0: Render Context

Executar `render-context` com manifest `diagnose-offer.manifest.yaml`:
- Input: slug, product
- Output: research-context com 38 variáveis extraídas

### Fase 1: Scoring por Categoria

Usando o research-context renderizado, pontuar cada categoria:

#### 1.1 Oferta Core (30pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| offerbook existe | 5 | `offerbook_exists == true` |
| Nome da oferta definido | 3 | `offer_name != null` |
| Preço definido (número real) | 5 | `offer_price is number` |
| Mecanismo único articulado | 5 | `offer_unique_mechanism != null && len > 20` |
| 5+ módulos/deliverables | 4 | `offer_modules_count >= 5` |
| 3+ objeções com respostas | 4 | `offer_objections_count >= 3` |
| 1+ bônus | 2 | `offer_bonuses_count >= 1` |
| Diagnostic summary preenchido | 2 | `offer_diagnostic_summary != null` |

#### 1.2 Value Equation (20pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| value-equation.yaml existe | 4 | `value_equation_exists == true` |
| Dream Outcome score >= 7 | 4 | `ve_dream_outcome_score >= 7` |
| Perceived Likelihood score >= 7 | 4 | `ve_perceived_likelihood_score >= 7` |
| Time Delay score >= 7 | 4 | `ve_time_delay_score >= 7` |
| Effort Sacrifice score >= 7 | 4 | `ve_effort_sacrifice_score >= 7` |

Se value-equation.yaml não existe, esta seção pontua 0 e aparece como gap prioritário.

#### 1.3 Proof Stack (20pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| proof.yaml existe | 3 | `proof_exists == true` |
| 3+ case studies | 4 | `proof_case_studies_count >= 3` |
| 3+ estatísticas | 3 | `proof_statistics_count >= 3` |
| 3+ before/after | 3 | `proof_before_after_count >= 3` |
| Proof por nível de awareness | 3 | `proof_testimonials_by_archetype_count >= 3` |
| Verificação tier distribuída | 2 | `proof_verification_tiers has VERIFIED` |
| Missing proof identificado | 2 | `proof_missing_to_gather > 0` (autoconhecimento) |

#### 1.4 Testimonials (15pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| testimonials.yaml existe | 2 | `testimonials_exists == true` |
| 10+ depoimentos | 4 | `testimonials_total_count >= 10` |
| Cobertura por awareness level | 3 | `testimonials_by_awareness_coverage >= 3` |
| Cobertura por resultado | 3 | `testimonials_by_result_coverage >= 3` |
| Vídeo testimonials | 2 | `testimonials_video_count > 0` |
| Checklist de coleta avançado | 1 | `testimonials_checklist_completion >= 50%` |

#### 1.5 Garantia (10pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| guarantee-design.yaml existe | 2 | `guarantee_exists == true` |
| Nível de garantia definido | 3 | `guarantee_level != null` |
| Nome da garantia criado | 2 | `guarantee_name != null` |
| Filtro ético passou | 3 | `guarantee_ethical_passed == "APPROVED"` |

#### 1.6 Competitividade (5pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| competitor-analysis.yaml existe | 1 | `competitor_exists == true` |
| 3+ competidores mapeados | 1 | `competitor_count >= 3` |
| Posição definida | 1 | `competitor_your_position != null` |
| Diferenciação forte (>= 7) | 1 | `competitor_differentiation_strength >= 7` |
| Unfair advantage articulado | 1 | `competitor_unfair_advantage != null` |

### Fase 2: Diagnóstico da Value Equation

Se value-equation.yaml existe e tem scores:
- Identificar a variável mais fraca (weakest_variable)
- Mapear para ação específica:
  - Dream Outcome fraco → Reformular promessa (storytelling squad)
  - Perceived Likelihood fraco → Fortalecer proof stack (deep-research squad)
  - Time Delay alto → Criar quick wins no onboarding (course-creator squad)
  - Effort/Sacrifice alto → Simplificar oferta (hormozi squad)

### Fase 3: Gap Analysis

Listar gaps ordenados por impacto:

```yaml
gaps:
  - category: "{nome}"
    score: "{pts}/{max}"
    impact: "ALTO|MÉDIO|BAIXO"
    action: "{ação específica}"
    squad: "{squad recomendado}"
    command: "{comando}"
```

### Fase 4: Geração do Relatório

Output: `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-{product}-offer-diagnostic.md`

## Squads Recomendados por Gap

| Gap | Squad | Comando |
|-----|-------|---------|
| Oferta Core incompleta | hormozi | `/hormozi *audit-offer` |
| Value Equation fraca | hormozi | `/hormozi *value-equation` |
| Proof Stack fraco | deep-research | `/deep-research` |
| Testimonials insuficientes | hybrid-workspace (CMO) | `*elicit-testimonials {slug}` |
| Sem garantia | hormozi | `/hormozi *guarantee-design` |
| Sem análise competitiva | spy | `/spy *competitive-intel` |

## Fase 5: Backlog de Ações (com permissão do usuário)

Após gerar gaps, apresentar ao usuário e pedir permissão para adicionar ao backlog:

```yaml
backlog_gate:
  path: "{pasta}/operations/diagnostic-backlog.yaml"
  action: "Apresentar gaps e perguntar: 'Adicionar ao backlog? [Sim, todos | Selecionar | Não]'"
  source_diagnostic: "diagnose-offer"
  items: "Cada gap da Fase 3 vira um item com dimensão='offer', sub-categoria identificada"
```

Mesma mecânica do `diagnose-business` Fase 14. Items são APPEND (não sobrescreve).

## Validação

- [ ] Research-context renderizado com 38 variáveis
- [ ] Score total calculado (/100)
- [ ] Value equation diagnosticada (se disponível)
- [ ] Gaps ordenados por impacto
- [ ] Squads recomendados existem e comandos são válidos
- [ ] Relatório gerado no path correto

---

*Task do Squad Hybrid Workspace - CMO Architect*
*Versão: 1.0.0*


---

## Referência: references/elicit-pricing-strategy.md

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


---

## Referência: templates/company-offerbook.yaml

---
# [COMPANY_NAME] - Offerbook (Grand Slam Offer Structure)
# Template based on YOUR_FOUNDER' offerbook.yaml + Story Selling framework
# Guardian: CMO
# Required: 16 major sections, all FILL_THIS → COMPLETE

metadata:
  version: "1.0"
  status: "INCOMPLETE"
  last_updated: "FILL_THIS"
  guardian: "FILL_THIS"
  completeness_percentage: 0
  product_name: FILL_THIS
# ============================================================================
# SECTION 1: POSITIONING
# ============================================================================
posicionamento:
  oferta:
    nome_produto: "FILL_THIS"
    descricao_nome: |
      FILL_THIS: Why this name? (noun + superlative structure)
    promessa: |
      FILL_THIS: Core promise to customer
    unique_selling_proposition: |
      FILL_THIS: What differentiates you from alternatives?
    valor_ancoragem_e_bonus:
      valor_ancoragem: "FILL_THIS: e.g., R$ X (suma de alternatives)"
      preco_final: "FILL_THIS"
      desconto_percentual: "FILL_THIS"
      garantia: "FILL_THIS"
      bonus_principal: "FILL_THIS"
      status: "INCOMPLETE"
  autoridade:
    especialista: "FILL_THIS: Your name/credentials"
    titulos_qualificacoes:
      - "FILL_THIS"
      - "FILL_THIS"
    resultados_somados:
      - "FILL_THIS"
      - "FILL_THIS"
    status: "INCOMPLETE"
# ============================================================================
# SECTION 2: AVATAR / CLIENTE IDEAL
# ============================================================================
avatar:
  frase_que_define_icp: |
    FILL_THIS: One sentence ICP (reference: icp.yaml)
  a_dor_central:
    superficial: "FILL_THIS"
    real: "FILL_THIS"
    profunda: "FILL_THIS"
    status: "INCOMPLETE"
  red_flags_quem_nao_queremos:
    items:
      - "FILL_THIS"
      - "FILL_THIS"
    status: "INCOMPLETE"
  green_flags_fit_perfeito:
    items:
      - "FILL_THIS"
      - "FILL_THIS"
    status: "INCOMPLETE"
# ============================================================================
# SECTION 3-5: PROBLEMS, SOLUTION, EVIDENCE
# ============================================================================
problema_e_solucao:
  problema_central: |
    FILL_THIS: What is the core problem?
  consequencias_se_nao_resolver:
    items:
      - "FILL_THIS"
      - "FILL_THIS"
    status: "INCOMPLETE"
  erros_padroes_de_tentativa:
    items:
      - "FILL_THIS"
      - "FILL_THIS"
    status: "INCOMPLETE"
  por_que_nao_funciona: |
    FILL_THIS: Why traditional approaches fail
  de_quem_e_a_culpa: |
    FILL_THIS: It's not their fault, it's...
solucao:
  solucao_tecnica_contexto: |
    FILL_THIS: How does your system work?
  mecanismo_unico: |
    FILL_THIS: What makes it unique?
  objecoes:
    maior_objecao: "FILL_THIS"
    objecoes_menores:
      - "FILL_THIS"
      - "FILL_THIS"
    status: "INCOMPLETE"
# ============================================================================
# SECTION 6-8: PROOF, RESULTS, GUARANTEE
# ============================================================================
proof_and_results:
  depoimentos:
    pertencimento:
      - "FILL_THIS"
      - "FILL_THIS"
    qualidade_profundidade:
      - "FILL_THIS"
      - "FILL_THIS"
    transformacao:
      - "FILL_THIS"
      - "FILL_THIS"
    status: "INCOMPLETE"
  beneficios_diretos:
    "30_dias": "FILL_THIS"
    "60_dias": "FILL_THIS"
    "90_dias": "FILL_THIS"
    status: "INCOMPLETE"
  garantia:
    tipo: "FILL_THIS"
    descricao: "FILL_THIS"
    condicoes: "FILL_THIS"
    status: "INCOMPLETE"
# ============================================================================
# SECTION 9-12: NARRATIVE STRUCTURE
# ============================================================================
narrativa:
  ato_1_atencao: |
    FILL_THIS: Hook that makes them stop
  ato_2_boas_vindas: |
    FILL_THIS: You're not alone...
  ato_5_problema_mundo_atual: |
    FILL_THIS: Paint the pain
  ato_11_por_que_nossa_solucao: |
    FILL_THIS: Unique mechanism explanation
  ato_15_mundo_ideal: |
    FILL_THIS: Paint the dream (6 months from now)
  ato_18_cta: |
    FILL_THIS: Call to action + urgency
  status: "INCOMPLETE"
# ============================================================================
# VALIDATION
# ============================================================================
validation:
  required_sections: 16
  completed_sections: 0
  completeness_percentage: 0
  status: "INCOMPLETE"
usage_instructions: |
  1. Read: {pasta}/products/{product_slug}/offerbook.yaml (1400+ lines)
  2. Use that as template, extract structure
  3. Replace all FILL_THIS with YOUR offer details
  4. Sections must flow: problem → solution → proof → narrative → CTA
  5. Commit: "docs: complete offerbook.yaml for [company]"
next_step: "Once complete, gather analytics data to validate all claims"


---

## Referência: templates/operations-pricing-strategy.yaml

---
# PRICING-STRATEGY.YAML - Strategic Pricing Architecture & Psychology
# Purpose: Design your pricing strategy based on value, market position, and psychology
# Guardian: Founder / CFO / CMO
# Timing: FILL after market-validation.yaml and competitor-analysis.yaml — pricing is a STRATEGIC decision
# Framework: Hormozi Grand Slam Pricing + DOSSIER-PRICING (42KB) + Value-Based Pricing Psychology
# Dependency: market-validation.yaml (market size), competitor-analysis.yaml (competitive positioning)

metadata:
  version: "1.0"
  product_name: "FILL_THIS"
  status: "TEMPLATE"
  last_updated: "FILL_THIS"
  owner: "Founder / CFO"
  framework: "Hormozi Grand Slam Pricing + Value-Based Pricing + DOSSIER-PRICING"
  notes: |
    Pricing is the single most impactful lever in your business.
    A 1% price increase = 11% profit increase (on average).

    Three pricing philosophies:
    1. COST-PLUS: Price = Cost + Margin (least sophisticated)
    2. MARKET-BASED: Price = What competitors charge ± adjustment
    3. VALUE-BASED: Price = % of value delivered to customer (most profitable)

    Hormozi's rule: "Charge based on VALUE, not cost.
    If your product saves someone $100K, charging $10K is a steal."

    RULE: Never compete on price. If your only advantage is being cheaper,
    you do not have an advantage — you have a race to the bottom.

# ============================================================================
# STEP 1: PRICING FOUNDATION
# ============================================================================

pricing_foundation:
  current_price: "FILL — Current price (if existing product)"
  pricing_model: "FILL — One-time / Subscription / Usage-based / Tiered / Freemium"
  pricing_philosophy: "FILL — Cost-plus / Market-based / Value-based"

  value_delivered:
    monetary_value: "FILL — How much money does your solution save or generate for the client?"
    time_value: "FILL — How much time does it save?"
    emotional_value: "FILL — What emotional transformation does it provide? (stress reduction, confidence, peace)"
    total_quantified_value: "FILL — Total quantified value in currency"

  price_to_value_ratio: "FILL — Your price as % of total value (Hormozi recommends: 10%)"

# ============================================================================
# STEP 2: PRICING PSYCHOLOGY
# ============================================================================

pricing_psychology:
  charm_pricing: "FILL — Using .97 or .99 endings? (e.g., $997 vs $1,000)"
  round_pricing: "FILL — Using round numbers for premium positioning? (e.g., $5,000)"
  anchoring_strategy: "FILL — What higher price do you anchor against before revealing actual price?"

  pain_of_paying:
    reduction_method_1: "FILL — How do you reduce payment pain? (installments, annual discount, trial)"
    reduction_method_2: "FILL — Second method"
    reduction_method_3: "FILL — Third method"

  price_framing:
    daily_cost: "FILL — 'That is only $X per day' framing"
    comparison: "FILL — 'Less than your daily [coffee/lunch/subscription]' framing"
    investment_not_cost: "FILL — 'This is an investment that returns X' framing"

# ============================================================================
# STEP 3: COMPETITIVE PRICING POSITION
# ============================================================================

competitive_position:
  market_price_range:
    lowest_competitor: "FILL — Cheapest alternative and their price"
    average_market_price: "FILL — Market average price"
    premium_competitor: "FILL — Most expensive alternative and their price"

  your_position: "FILL — Budget / Mid-market / Premium / Ultra-premium"
  position_justification: |
    FILL — Why this position? What do you offer that justifies this price point?
    Reference solution-architecture.yaml unique mechanism.

# ============================================================================
# STEP 4: PRICING EXPERIMENTS
# ============================================================================

pricing_experiments:
  experiment_1:
    hypothesis: "FILL — What price change are you testing?"
    method: "FILL — A/B test / Cohort test / Time-based test"
    duration: "FILL — How long to run the test?"
    success_metric: "FILL — What metric determines success? (revenue, conversion, LTV)"

  experiment_2:
    hypothesis: "FILL — Second experiment"
    method: "FILL — Method"
    duration: "FILL — Duration"
    success_metric: "FILL — Metric"

# ============================================================================
# STEP 5: SCORING & DIAGNOSTIC
# ============================================================================

pricing_strength_score:
  value_alignment: "FILL 1-10"
  psychology_application: "FILL 1-10"
  competitive_positioning: "FILL 1-10"
  testing_rigor: "FILL 1-10"

  scoring_rubric:
    range_1_3: "Price is arbitrary, no value quantification, no psychology applied, no testing."
    range_4_6: "Price based on competition, basic value awareness, some psychology, occasional testing."
    range_7_8: "Value-based pricing with clear quantification, strategic psychology, strong competitive position, regular A/B testing."
    range_9_10: "Mastery pricing — price represents fraction of value, psychology is seamless, owns a price category, continuous optimization with data."

evidence:
  data_points: "FILL — Revenue data at different price points, conversion rates, customer feedback on pricing"
  sources: "FILL — List sources"

diagnostic_summary:
  overall_assessment: "FILL_THIS"
  pricing_confidence: "FILL — How confident are you that your price is optimal? 1-10"
  recommended_actions: "FILL_THIS"

cross_references:
  depends_on:
    - "market-validation.yaml"
    - "competitor-analysis.yaml"
  feeds_into:
    - "pricing-anchoring.yaml"
    - "monetization-strategy.yaml"
  related:
    - "value-equation.yaml"
    - "offerbook.yaml"
