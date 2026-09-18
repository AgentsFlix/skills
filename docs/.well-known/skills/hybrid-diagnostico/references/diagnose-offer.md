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
