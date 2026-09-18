# Business Diagnostic Checklist

> **Owner:** COO (workspace-chief)
> **Squad:** Hybrid Workspace
> **Frequency:** On-Demand ou Trimestral
> **Versão:** 1.0.0

---

## Propósito

Rubrica de scoring para diagnóstico estratégico de negócio. Avalia 10 dimensões com 3 camadas determinísticas: existência, completude e qualidade. Cada dimensão pontua 0-100.

---

## 1. Customer (Peso: 15%)

### 1.1 Existência (~25pts)
- [ ] `company/diagnosis.yaml` existe
- [ ] `company/icp.yaml` existe
- [ ] `company/analytics.yaml` existe

### 1.2 Completude (~40pts)
- [ ] `diagnosis.yaml`: campos preenchidos (não null/FILL_THIS/TBD/TODO)
- [ ] `icp.yaml`: seção `demographics` preenchida
- [ ] `icp.yaml`: seção `psychographics` preenchida
- [ ] `icp.yaml`: seção `pain_stack` com 3+ entries
- [ ] `icp.yaml`: seção `archetypes` com 2+ entries
- [ ] `analytics.yaml`: métricas de aquisição preenchidas

### 1.3 Qualidade (~35pts)
- [ ] `icp.yaml`: nomes reais de personas (não "Persona 1")
- [ ] `icp.yaml`: pain_stack com exemplos concretos (frases reais)
- [ ] `diagnosis.yaml`: awareness_level definido com justificativa
- [ ] `analytics.yaml`: números reais (não placeholders como "XXX" ou "0")
- [ ] Cross-check: ICP alinha com oferta (buyer ↔ product fit)

---

## 2. Brand (Peso: 12%)

### 2.1 Existência (~25pts)
- [ ] `brand/brandbook.yaml` existe
- [ ] `company/brand.yaml` existe (fallback se brandbook ausente)

### 2.2 Completude (~40pts)
- [ ] `brandbook.yaml`: seção `identity` preenchida (name, tagline, purpose)
- [ ] `brandbook.yaml`: seção `voice` preenchida (tone, vocabulary, forbidden_words)
- [ ] `brandbook.yaml`: seção `positioning` preenchida (category, differentiation)
- [ ] `brandbook.yaml`: seção `values` com 3+ valores
- [ ] `brandbook.yaml`: seção `visual_identity` preenchida (cores, tipografia)

### 2.3 Qualidade (~35pts)
- [ ] `voice`: forbidden_words com 3+ entries
- [ ] `positioning`: differentiation com argumento concreto (não genérico)
- [ ] `values`: cada valor tem description (não apenas nome)
- [ ] `visual_identity`: cores com hex codes reais
- [ ] Cross-check: voice tone alinha com archetype

---

## 3. Offer (Peso: 15%)

### 3.1 Existência (~25pts)
- [ ] `products/*/offerbook.yaml` existe (pelo menos 1 produto)
- [ ] `products/*/proof.yaml` existe
- [ ] `products/*/testimonials.yaml` existe

### 3.2 Completude (~40pts)
- [ ] `offerbook.yaml`: seção `offer` preenchida (name, description, price)
- [ ] `offerbook.yaml`: seção `value_stack` ou `deliverables` com 3+ items
- [ ] `offerbook.yaml`: seção `guarantees` preenchida
- [ ] `proof.yaml`: seção `metrics` com 3+ data points
- [ ] `testimonials.yaml`: 5+ depoimentos

### 3.3 Qualidade (~35pts)
- [ ] `offerbook.yaml`: price com valor numérico real (não TBD)
- [ ] `proof.yaml`: métricas com números verificáveis (fontes citadas)
- [ ] `testimonials.yaml`: depoimentos com nome real + empresa/role
- [ ] `testimonials.yaml`: depoimentos com resultados concretos (números)
- [ ] Cross-check: proof sustenta claims da oferta

---

## 4. Narrative (Peso: 10%)

### 4.1 Existência (~25pts)
- [ ] `products/*/narrative/brandscript.yaml` existe
- [ ] `products/*/narrative/product-story.yaml` existe
- [ ] `products/*/narrative/pitch-narrative.yaml` existe
- [ ] `products/*/narrative/objection-destroyers.yaml` existe
- [ ] `company/authority-story.yaml` existe
- [ ] `company/founder-dna.yaml` existe

### 4.2 Completude (~40pts)
- [ ] `brandscript.yaml`: 7 elementos SB7 preenchidos
- [ ] `product-story.yaml`: before/after/bridge definidos
- [ ] `pitch-narrative.yaml`: headline + subheadline + body
- [ ] `objection-destroyers.yaml`: 5+ objeções com respostas
- [ ] `founder-dna.yaml`: origin_story preenchido

### 4.3 Qualidade (~35pts)
- [ ] `brandscript.yaml`: villain é concreto (não genérico)
- [ ] `objection-destroyers.yaml`: respostas com prova (não opinião)
- [ ] `founder-dna.yaml`: jornada pessoal com detalhes reais
- [ ] `pitch-narrative.yaml`: inclui dados numéricos
- [ ] Cross-check: narrative alinha com brand voice

---

## 5. Traffic (Peso: 8%)

### 5.1 Existência (~25pts)
- [ ] `products/*/marketing/buyer-journey.yaml` existe
- [ ] `products/*/marketing/conversion-funnel.yaml` existe
- [ ] `products/*/marketing/email-sequences.yaml` existe
- [ ] `products/*/marketing/campaign-brief.yaml` existe

### 5.2 Completude (~40pts)
- [ ] `buyer-journey.yaml`: 3+ stages definidos com touchpoints
- [ ] `conversion-funnel.yaml`: stages TOFU/MOFU/BOFU preenchidos
- [ ] `email-sequences.yaml`: pelo menos 1 sequence com 3+ emails
- [ ] `campaign-brief.yaml`: objetivo + audience + budget definidos

### 5.3 Qualidade (~35pts)
- [ ] `buyer-journey.yaml`: touchpoints com canais reais (não genéricos)
- [ ] `conversion-funnel.yaml`: métricas de conversão reais (não TBD)
- [ ] `email-sequences.yaml`: subject lines concretas (não placeholders)
- [ ] Cross-check: funnel alinha com ICP journey

---

## 6. Operations (Peso: 10%)

### 6.1 Existência (~25pts)
- [ ] `operations/team-structure.yaml` existe
- [ ] `operations/pricing-strategy.yaml` existe
- [ ] `operations/kpi-scorecards.yaml` existe
- [ ] `operations/commission-design.yaml` existe

### 6.2 Completude (~40pts)
- [ ] `team-structure.yaml`: roles definidos com 2+ membros
- [ ] `pricing-strategy.yaml`: modelo de pricing definido
- [ ] `pricing-strategy.yaml`: tiers/plans com valores reais
- [ ] `kpi-scorecards.yaml`: 5+ KPIs definidos com targets
- [ ] `commission-design.yaml`: estrutura de comissão definida

### 6.3 Qualidade (~35pts)
- [ ] `team-structure.yaml`: nomes reais de pessoas (não placeholders)
- [ ] `pricing-strategy.yaml`: justificativa de pricing (não arbitrário)
- [ ] `kpi-scorecards.yaml`: targets com baseline real (não wishful)
- [ ] Cross-check: team size sustenta operação planejada

---

## 7. Success (Peso: 8%)

### 7.1 Existência (~25pts)
- [ ] `products/*/curriculum.yaml` existe
- [ ] `products/*/onboarding/onboarding-flow.yaml` existe
- [ ] `products/*/retention/churn-prevention.yaml` existe
- [ ] `products/*/retention/nps-feedback-loop.yaml` existe

### 7.2 Completude (~40pts)
- [ ] `curriculum.yaml`: módulos definidos com 3+ aulas cada
- [ ] `onboarding-flow.yaml`: steps definidos com triggers
- [ ] `churn-prevention.yaml`: sinais de risco + ações
- [ ] `nps-feedback-loop.yaml`: frequência + canais definidos

### 7.3 Qualidade (~35pts)
- [ ] `curriculum.yaml`: conteúdo real (não "Módulo 1: TBD")
- [ ] `onboarding-flow.yaml`: mensagens reais escritas
- [ ] `churn-prevention.yaml`: playbooks com ações concretas
- [ ] Cross-check: curriculum entrega promessa da oferta

---

## 8. Evidence (Peso: 10%)

### 8.1 Existência (~25pts)
- [ ] `company/analytics.yaml` existe
- [ ] `products/*/proof.yaml` existe
- [ ] `company/credentials.yaml` existe
- [ ] `company/authority-story.yaml` existe

### 8.2 Completude (~40pts)
- [ ] `analytics.yaml`: métricas de receita/crescimento preenchidas
- [ ] `proof.yaml`: 5+ data points verificáveis
- [ ] `credentials.yaml`: 3+ credenciais listadas
- [ ] `authority-story.yaml`: marcos verificáveis com datas

### 8.3 Qualidade (~35pts)
- [ ] `analytics.yaml`: números com fonte (não estimativas sem base)
- [ ] `proof.yaml`: cada métrica com período e fonte
- [ ] `credentials.yaml`: cada credencial verificável (URL ou referência)
- [ ] `authority-story.yaml`: marcos com evidência externa
- [ ] Cross-check: evidence sustenta claims da oferta e narrative

---

## 9. Movement (Peso: 12%)

### 9.1 Existência (~25pts)
- [ ] `movement/tribe-identity.yaml` existe
- [ ] `movement/leaders.yaml` existe
- [ ] `movement/cosmology.yaml` existe
- [ ] `movement/movement-health.yaml` existe
- [ ] `movement/cycle/strategy.yaml` existe

### 9.2 Completude (~40pts)
- [ ] `tribe-identity.yaml`: in-group/out-group definidos
- [ ] `leaders.yaml`: líder principal + 2+ líderes secundários
- [ ] `cosmology.yaml`: worldview + enemy + promised_land
- [ ] `movement-health.yaml`: métricas de engajamento
- [ ] `cycle/strategy.yaml`: campanha atual definida

### 9.3 Qualidade (~35pts)
- [ ] `tribe-identity.yaml`: linguagem tribal concreta (não genérica)
- [ ] `cosmology.yaml`: narrativa emocional (não corporativa)
- [ ] `movement-health.yaml`: números reais de comunidade
- [ ] Cross-check: movement alinha com brand archetype e voice

---

## 10. Culture (Peso: 10%)

### 10.1 Existência (~25pts)
- [ ] `culture/manifesto.yaml` existe
- [ ] `culture/mission-vision-positioning.yaml` existe
- [ ] `culture/pillars.yaml` existe
- [ ] `culture/values.yaml` existe
- [ ] `culture/commandments.yaml` existe
- [ ] `culture/mantras.yaml` existe
- [ ] `culture/leadership-profile.yaml` existe
- [ ] `culture/hiring-criteria.yaml` existe
- [ ] `culture/decision-frameworks.yaml` existe
- [ ] `culture/lifestyle.yaml` existe
- [ ] `culture/company-history.yaml` existe

### 10.2 Completude (~40pts)
- [ ] `manifesto.yaml`: core_belief + manifesto_text preenchidos
- [ ] `manifesto.yaml`: tribal_call com tribal_name definido
- [ ] `pillars.yaml`: 3+ pilares com name + description + why_it_matters
- [ ] `values.yaml`: 5+ valores com name + definition
- [ ] `values.yaml`: pelo menos 3 valores com guiding_questions (2+ cada)
- [ ] `commandments.yaml`: 5+ mandamentos com title + description
- [ ] `mantras.yaml`: 5+ mantras com text + context
- [ ] `leadership-profile.yaml`: 5+ leader_expectations preenchidas
- [ ] `hiring-criteria.yaml`: who_to_hire.green_flags com 3+ entries
- [ ] `hiring-criteria.yaml`: who_not_to_hire.anti_patterns com 3+ entries
- [ ] `hiring-criteria.yaml`: when_to_fire.triggers com 2+ entries

### 10.3 Qualidade (~35pts)
- [ ] `manifesto.yaml`: manifesto_text com 10+ linhas (não genérico)
- [ ] `values.yaml`: definições concretas (>20 chars, não "ser bom")
- [ ] `values.yaml`: pelo menos 2 valores com quote + quote_author
- [ ] `commandments.yaml`: mandamentos acionáveis (não vagos)
- [ ] `mantras.yaml`: frases curtas e memoráveis (< 30 chars cada)
- [ ] `leadership-profile.yaml`: team_virtues com 3+ entries
- [ ] `hiring-criteria.yaml`: legendary vs mediocre com exemplos concretos
- [ ] `lifestyle.yaml`: legendary_vs_mediocre com 10+ dimensões
- [ ] `company-history.yaml`: symbols_and_artifacts com 2+ entries
- [ ] Cross-check: values alinham com manifesto e pilares

---

## Cross-Reference Consistency (Bônus: +/- 5pts)

### Checks de Alinhamento
- [ ] ICP ↔ Offer: persona alvo compra o produto descrito?
- [ ] Brand ↔ Movement: archetype e voice são consistentes com a tribo?
- [ ] Narrative ↔ Evidence: claims narrativos são sustentados por provas?
- [ ] Offer ↔ Success: produto entregue = produto prometido?
- [ ] Customer ↔ Traffic: canais de aquisição alcançam o ICP?
- [ ] Culture ↔ Brand: valores internos são consistentes com posicionamento externo?

**Scoring bônus:**
- 5-6/6 alinhados: +5 pontos no score final
- 3-4/6 alinhados: +0 pontos
- 0-2/6 alinhados: -5 pontos no score final

---

## Classificação Final

Score ponderado das 10 dimensões + bônus cross-reference:

| Score | Classificação | Significado |
|-------|--------------|-------------|
| 90-100 | FORTE | Dimensão pronta para operar |
| 70-89 | ADEQUADO | Funcional, melhorias opcionais |
| 50-69 | ATENÇÃO | Gaps que limitam squads downstream |
| <50 | CRÍTICO | Bloqueia operação, prioridade máxima |

---

## Mapeamento Gap → Squad

| Dimensão < 70 | Squad Primário | Comando | Fallback |
|----------------|---------------|---------|----------|
| Customer | hybrid-workspace (CMO) | `*elicit-icp-yaml {slug}` | deep-research |
| Brand | brand | `/brand` | hybrid-workspace `*elicit-brand-yaml` |
| Offer | hormozi | `/hormozi` | copy `/copy-workflow` |
| Narrative | storytelling | `/storytelling` | copy |
| Traffic | traffic-masters | `/traffic-masters` | hybrid-workspace (CMO) |
| Operations | hybrid-workspace (COO) | `*elicit-operations {slug}` | hybrid-sop `*create-sop-operations-suite {slug}` |
| Success | course-creator | squad course-creator | hybrid-workspace (COO) |
| Evidence | deep-research | `/deep-research` | spy `/spy` |
| Movement | movement | `/movement` | brand |
| Culture | hybrid-workspace (COO) | `*elicit-culture {slug}` | hybrid-workspace (Vision Chief) |

### Pré-requisitos entre Squads

| Squad | Requer |
|-------|--------|
| copy | Customer >= 70 + Brand >= 70 |
| traffic-masters | Customer >= 70 + Offer >= 70 |
| storytelling | Narrative >= 50 + Brand >= 50 |

Se pré-requisito não atendido, o plano de ação insere o fix do pré-requisito primeiro.

---

## Severidade de Issues

| Severidade | Critério | Ação |
|------------|----------|------|
| CRÍTICO | Score < 50 em dimensão com peso >= 10% | Fix imediato |
| ALTO | Score < 70 em qualquer dimensão | Planejar squad activation |
| MÉDIO | Score 70-89 em dimensão importante | Backlog de melhoria |
| BAIXO | Score >= 90, melhorias opcionais | Ignorar ou polir |

---

*Checklist do Squad Hybrid Workspace - COO Orchestrator*
*Versão: 1.0.0*
*Última atualização: 2026-03-18*
