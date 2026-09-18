# Task: Diagnose Business

```yaml
task:
  id: diagnose-business
  name: Diagnóstico Estratégico de Negócio
  agent: workspace-chief
  trigger: manual
  elicit: false
  commands:
    - "*diagnose-business {slug}"
    - "*diagnose-all"
```

## Descrição

Task de governança que analisa um negócio completo em 10 dimensões estratégicas, identifica forças/fraquezas, pontua cada dimensão (0-100) e gera um plano de ação sequenciado com recomendação de squads a ativar.

**Guardian:** COO (Chief Operating Officer)
**Checklist:** `checklists/business-diagnostic-checklist.md`
**Output:** `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-diagnostic.md`

## Pré-requisitos

- Workspace inicializado (`workspace/` existe)
- Business registrado (`{pasta}/` existe)
- Pelo menos `company/company-profile.yaml` presente

## Workflow

### Fase 0: Pre-flight

```yaml
preflight:
  steps:
    - validate_workspace: "workspace/ existe"
    - validate_business: "{pasta}/ existe"
    - inventory_files: "listar TODOS os arquivos .yaml/.md do business"
    - load_templates: "carregar templates de referência de templates/"
```

**Ações:**
1. Verificar que `{pasta}/` existe
2. Listar todos os arquivos recursivamente no diretório do business
3. Criar inventário: `{arquivo: existe/ausente}` para cada arquivo esperado
4. Se business não existe, abortar com mensagem clara

### Fase 1: Customer (Peso 15%)

```yaml
dimension: customer
weight: 0.14
files:
  - path: "company/diagnosis.yaml"
    role: primary
  - path: "company/icp.yaml"
    role: primary
  - path: "company/analytics.yaml"
    role: secondary
```

**Scoring 3 camadas:**

1. **Existência (0-25pts):** Cada arquivo primário presente = 10pts, secundário = 5pts
2. **Completude (0-40pts):**
   - Contar campos preenchidos vs total esperado no template
   - Excluir: `null`, `FILL_THIS`, `TBD`, `TODO`, `~`, arrays vazios `[]`, strings vazias `""`
   - Calcular: `(campos_preenchidos / campos_total) * 40`
3. **Qualidade (0-35pts):**
   - Nomes reais (não "Persona 1", "Cliente X"): +7pts
   - Pain stack com frases concretas (>10 chars cada): +7pts
   - Números reais em analytics (regex `\d+[.,]?\d*`): +7pts
   - Awareness level com justificativa: +7pts
   - 3+ entries em arrays principais: +7pts

### Fase 2: Brand (Peso 12%)

```yaml
dimension: brand
weight: 0.11
files:
  - path: "brand/brandbook.yaml"
    role: primary
  - path: "company/brand.yaml"
    role: fallback
```

**Scoring:**
1. **Existência (0-25pts):** brandbook.yaml = 20pts, brand.yaml como fallback = 15pts, ambos = 25pts
2. **Completude (0-40pts):** % campos preenchidos em identity + voice + positioning + values + visual_identity
3. **Qualidade (0-35pts):**
   - Forbidden words com 3+ entries: +7pts
   - Positioning com argumento concreto (>20 chars): +7pts
   - Values com descriptions (não só nomes): +7pts
   - Hex codes reais em cores: +7pts
   - Voice tone coerente com archetype: +7pts

### Fase 3: Offer (Peso 15%)

```yaml
dimension: offer
weight: 0.14
files:
  - path: "products/*/offerbook.yaml"
    role: primary
  - path: "products/*/proof.yaml"
    role: primary
  - path: "products/*/testimonials.yaml"
    role: primary
```

**Scoring:**
1. **Existência (0-25pts):** Cada arquivo por produto, normalizado. Sem nenhum produto = 0pts
2. **Completude (0-40pts):** offerbook (offer, value_stack, guarantees) + proof (metrics 3+) + testimonials (5+)
3. **Qualidade (0-35pts):**
   - Price com valor numérico real: +7pts
   - Proof com números verificáveis e fontes: +7pts
   - Testimonials com nome real + empresa: +7pts
   - Testimonials com resultados numéricos: +7pts
   - Claims sustentados por proof: +7pts

### Fase 4: Narrative (Peso 10%)

```yaml
dimension: narrative
weight: 0.09
files:
  - path: "products/*/narrative/brandscript.yaml"
    role: primary
  - path: "products/*/narrative/product-story.yaml"
    role: primary
  - path: "products/*/narrative/pitch-narrative.yaml"
    role: secondary
  - path: "products/*/narrative/objection-destroyers.yaml"
    role: secondary
  - path: "company/authority-story.yaml"
    role: secondary
  - path: "company/founder-dna.yaml"
    role: primary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 5pts cada, secundários = 2.5pts cada
2. **Completude (0-40pts):** SB7 elements, before/after/bridge, objections 5+, origin story
3. **Qualidade (0-35pts):**
   - Villain concreto (não "dificuldades"): +7pts
   - Objeções com prova na resposta: +7pts
   - Founder story com detalhes reais: +7pts
   - Pitch com dados numéricos: +7pts
   - Narrativa alinha com brand voice: +7pts

### Fase 5: Traffic (Peso 8%)

```yaml
dimension: traffic
weight: 0.07
files:
  - path: "products/*/marketing/buyer-journey.yaml"
    role: primary
  - path: "products/*/marketing/conversion-funnel.yaml"
    role: primary
  - path: "products/*/marketing/email-sequences.yaml"
    role: secondary
  - path: "products/*/marketing/campaign-brief.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 8pts cada, secundários = 4.5pts cada
2. **Completude (0-40pts):** stages, touchpoints, métricas, sequences
3. **Qualidade (0-35pts):**
   - Canais reais (Instagram, Google Ads, não "digital"): +9pts
   - Métricas de conversão reais: +9pts
   - Subject lines concretas: +9pts
   - Funnel alinha com ICP journey: +8pts

### Fase 6: Operations (Peso 10%)

```yaml
dimension: operations
weight: 0.09
files:
  - path: "operations/team-structure.yaml"
    role: primary
  - path: "operations/pricing-strategy.yaml"
    role: primary
  - path: "operations/kpi-scorecards.yaml"
    role: secondary
  - path: "operations/commission-design.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 8pts cada, secundários = 4.5pts cada
2. **Completude (0-40pts):** roles, pricing model, KPIs, commission structure
3. **Qualidade (0-35pts):**
   - Nomes reais no team: +9pts
   - Pricing com justificativa: +9pts
   - KPIs com baseline real: +9pts
   - Team sustenta operação: +8pts

### Fase 7: Success (Peso 8%)

```yaml
dimension: success
weight: 0.07
files:
  - path: "products/*/curriculum.yaml"
    role: primary
  - path: "products/*/onboarding/onboarding-flow.yaml"
    role: secondary
  - path: "products/*/retention/churn-prevention.yaml"
    role: secondary
  - path: "products/*/retention/nps-feedback-loop.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** curriculum = 10pts, cada secundário = 5pts
2. **Completude (0-40pts):** módulos, onboarding steps, sinais de churn, NPS frequency
3. **Qualidade (0-35pts):**
   - Conteúdo real (não "TBD"): +9pts
   - Mensagens de onboarding escritas: +9pts
   - Playbooks de churn com ações concretas: +9pts
   - Curriculum entrega promessa da oferta: +8pts

### Fase 8: Evidence (Peso 10%)

```yaml
dimension: evidence
weight: 0.09
files:
  - path: "company/analytics.yaml"
    role: primary
  - path: "products/*/proof.yaml"
    role: primary
  - path: "company/credentials.yaml"
    role: primary
  - path: "company/authority-story.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 7pts cada, secundário = 4pts
2. **Completude (0-40pts):** métricas de receita, data points, credenciais, marcos
3. **Qualidade (0-35pts):**
   - Números com fonte: +9pts
   - Métricas com período: +9pts
   - Credenciais verificáveis (URL/ref): +9pts
   - Evidence sustenta claims de oferta e narrative: +8pts

### Fase 9: Movement (Peso 12%)

```yaml
dimension: movement
weight: 0.10
files:
  - path: "movement/tribe-identity.yaml"
    role: primary
  - path: "movement/leaders.yaml"
    role: primary
  - path: "movement/cosmology.yaml"
    role: primary
  - path: "movement/movement-health.yaml"
    role: secondary
  - path: "movement/cycle/strategy.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 6pts cada, secundários = 3.5pts cada
2. **Completude (0-40pts):** in-group/out-group, leaders, worldview, métricas, estratégia
3. **Qualidade (0-35pts):**
   - Linguagem tribal concreta: +7pts
   - Narrativa emocional (não corporativa): +7pts
   - Números reais de comunidade: +7pts
   - Movement alinha com brand archetype: +7pts
   - Cycle strategy com campanha ativa: +7pts

### Fase 10: Culture (Peso 10%)

```yaml
dimension: culture
weight: 0.10
files:
  - path: "culture/manifesto.yaml"
    role: primary
  - path: "culture/mission-vision-positioning.yaml"
    role: primary
  - path: "culture/pillars.yaml"
    role: primary
  - path: "culture/values.yaml"
    role: primary
  - path: "culture/commandments.yaml"
    role: secondary
  - path: "culture/mantras.yaml"
    role: secondary
  - path: "culture/leadership-profile.yaml"
    role: secondary
  - path: "culture/hiring-criteria.yaml"
    role: secondary
  - path: "culture/decision-frameworks.yaml"
    role: tertiary
  - path: "culture/lifestyle.yaml"
    role: tertiary
  - path: "culture/company-history.yaml"
    role: tertiary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 4pts cada (16 max), secundários = 1.5pts cada (6 max), terciários = 1pt cada (3 max)
2. **Completude (0-40pts):**
   - manifesto.yaml: core_belief + manifesto_text + tribal_call preenchidos
   - pillars.yaml: 3+ pilares com name + description + why_it_matters
   - values.yaml: 5+ valores com name + definition + guiding_questions
   - commandments.yaml: 5+ mandamentos com title + description
   - mantras.yaml: 5+ mantras com text + context
   - leadership-profile.yaml: 5+ leader_expectations
   - hiring-criteria.yaml: green_flags + anti_patterns + when_to_fire preenchidos
3. **Qualidade (0-35pts):**
   - Manifesto com 10+ linhas (não genérico): +5pts
   - Values com definições concretas (>20 chars): +5pts
   - Values com quotes reais atribuídas: +5pts
   - Commandments acionáveis (não vagos): +5pts
   - Mantras curtos e memoráveis (<30 chars): +5pts
   - Hiring com exemplos legendary vs mediocre: +5pts
   - Symbols/artifacts documentados: +5pts

### Fase 11: Cross-Reference Consistency

```yaml
cross_reference:
  checks:
    - id: icp_offer
      name: "ICP ↔ Offer"
      description: "Persona alvo compra o produto descrito?"
      sources: ["company/icp.yaml", "products/*/offerbook.yaml"]

    - id: brand_movement
      name: "Brand ↔ Movement"
      description: "Archetype e voice são consistentes com a tribo?"
      sources: ["brand/brandbook.yaml", "movement/tribe-identity.yaml"]

    - id: narrative_evidence
      name: "Narrative ↔ Evidence"
      description: "Claims narrativos são sustentados por provas?"
      sources: ["products/*/narrative/", "products/*/proof.yaml"]

    - id: offer_success
      name: "Offer ↔ Success"
      description: "Produto entregue = produto prometido?"
      sources: ["products/*/offerbook.yaml", "products/*/curriculum.yaml"]

    - id: customer_traffic
      name: "Customer ↔ Traffic"
      description: "Canais de aquisição alcançam o ICP?"
      sources: ["company/icp.yaml", "products/*/marketing/"]

    - id: culture_brand
      name: "Culture ↔ Brand"
      description: "Valores internos são consistentes com posicionamento externo?"
      sources: ["culture/values.yaml", "brand/brandbook.yaml"]

  scoring:
    all_aligned: "+5 pontos"      # 5-6 de 6
    mostly_aligned: "+0 pontos"   # 3-4 de 6
    misaligned: "-5 pontos"       # 0-2 de 6
```

**Avaliação:** Para cada check, verificar se os conteúdos são semanticamente consistentes. Isso requer leitura dos arquivos e análise de coerência.

### Fase 12: Síntese

```yaml
synthesis:
  steps:
    - calculate_weighted_score: "Σ(score_dimensão × peso)"
    - apply_cross_reference_bonus: "+/- 5 pontos"
    - rank_gaps: "Ordenar dimensões por score (menor primeiro)"
    - map_squads: "Para cada gap < 70, mapear squad + comando"
    - check_prerequisites: "Verificar se pré-requisitos de squad são atendidos"
    - sequence_actions: "Ordenar ações respeitando pré-requisitos"
```

**Mapeamento Gap → Squad:**

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

**Cadeia de pré-requisitos:**

| Squad | Requer |
|-------|--------|
| copy | Customer >= 70 + Brand >= 70 |
| traffic-masters | Customer >= 70 + Offer >= 70 |
| storytelling | Narrative >= 50 + Brand >= 50 |

Se pré-requisito não atendido, inserir fix do pré-requisito antes no plano de ação.

### Fase 13: Geração do Relatório

Output: `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-diagnostic.md`

```markdown
# Diagnóstico Estratégico: {business_name}

**Data:** {YYYY-MM-DD}
**Auditor:** COO (workspace-chief)
**Business:** {slug}
**Score Global:** {score}/100
**Classificação:** {FORTE|ADEQUADO|ATENÇÃO|CRÍTICO}

---

## 1. Resumo Executivo

| Dimensão | Peso | Score | Status | Squad Recomendado |
|----------|------|-------|--------|-------------------|
| Customer | 14% | __/100 | {status} | {squad ou "-"} |
| Brand | 11% | __/100 | {status} | {squad ou "-"} |
| Offer | 14% | __/100 | {status} | {squad ou "-"} |
| Narrative | 9% | __/100 | {status} | {squad ou "-"} |
| Traffic | 7% | __/100 | {status} | {squad ou "-"} |
| Operations | 9% | __/100 | {status} | {squad ou "-"} |
| Success | 7% | __/100 | {status} | {squad ou "-"} |
| Evidence | 9% | __/100 | {status} | {squad ou "-"} |
| Movement | 10% | __/100 | {status} | {squad ou "-"} |
| Culture | 10% | __/100 | {status} | {squad ou "-"} |
| **Cross-ref** | **bônus** | **{+5/0/-5}** | | |
| **TOTAL** | **100%** | **__/100** | **{classificação}** | |

---

## 2. Análise por Dimensão

### 2.1 {Dimensão}

**Score:** {score}/100 ({classificação})

**Arquivos encontrados:**
- ✅ `{path}` — {completude}%
- ❌ `{path}` — ausente

**Existência:** {pts}/25
**Completude:** {pts}/40
**Qualidade:** {pts}/35

**Observações:**
- {observação baseada em dados}

---

## 3. Top 3 Gaps Prioritários

### Gap 1: {Dimensão} (Score: {X}/100)
- **Impacto:** {por que isso importa para o negócio}
- **Downstream:** {quais squads/ações ficam bloqueados}
- **Ação:** {comando específico para resolver}

---

## 4. Consistência Cross-Reference

| Check | Status | Observação |
|-------|--------|------------|
| ICP ↔ Offer | ✅/❌ | {detalhe} |
| Brand ↔ Movement | ✅/❌ | {detalhe} |
| Narrative ↔ Evidence | ✅/❌ | {detalhe} |
| Offer ↔ Success | ✅/❌ | {detalhe} |
| Customer ↔ Traffic | ✅/❌ | {detalhe} |

**Bônus aplicado:** {+5/0/-5}

---

## 5. Plano de Ação Sequenciado

| # | Prioridade | Dimensão | Squad | Comando | Pré-requisito |
|---|-----------|----------|-------|---------|---------------|
| 1 | CRÍTICO | {dim} | {squad} | `{cmd}` | - |
| 2 | ALTO | {dim} | {squad} | `{cmd}` | #1 concluído |
| 3 | MÉDIO | {dim} | {squad} | `{cmd}` | - |

---

*Diagnóstico gerado por COO (workspace-chief) - Squad Hybrid Workspace*
*Data: {YYYY-MM-DD}*
```

### Fase 14: Backlog de Ações (com permissão do usuário)

Após gerar o relatório, apresentar os gaps encontrados e PEDIR PERMISSÃO para adicionar ao backlog:

```yaml
backlog_gate:
  path: "{pasta}/operations/diagnostic-backlog.yaml"
  template: "templates/operations/diagnostic-backlog.yaml"
  steps:
    - list_gaps: "Listar todas as dimensões com score < 70"
    - present_to_user: |
        ## Gaps Identificados — Adicionar ao Backlog?

        | # | Dimensão | Score | Prioridade | Squad | Comando |
        |---|----------|-------|-----------|-------|---------|
        | 1 | Customer | 45 | CRÍTICO | hybrid-workspace (CMO) | *elicit-icp-yaml {slug} |
        | 2 | Brand | 55 | ATENÇÃO | brand | /brand |

        Deseja adicionar estes items ao backlog do business?
        - [Sim, todos] — adiciona todos os gaps
        - [Selecionar] — escolher quais adicionar
        - [Não] — apenas salvar relatório sem backlog

    - on_yes_all: "Criar/atualizar diagnostic-backlog.yaml com todos os gaps"
    - on_select: "Apresentar checkboxes via AskUserQuestion, adicionar selecionados"
    - on_no: "Pular, relatório já foi salvo"

  item_structure:
    id: "DIAG-{YYYY-MM-DD}-{N}"
    created_at: "{date}"
    source_diagnostic: "diagnose-business"
    dimension: "{dimensão}"
    score_at_detection: "{score}"
    priority: "{CRÍTICO|ALTO|MÉDIO|BAIXO}"
    gap_description: "{descrição baseada nos dados}"
    recommended_squad: "{squad}"
    recommended_command: "{comando}"
    prerequisite: "{ID de outro item ou null}"
    status: "pending"
```

Se o arquivo `diagnostic-backlog.yaml` não existe, criar a partir do template.
Se já existe, APPEND novos items (não sobrescrever existentes).
Items duplicados (mesma dimensão + mesmo comando): atualizar `score_at_detection` e `last_diagnostic`.

## Comando: `*diagnose-all`

Variante que executa diagnóstico para TODOS os businesses no workspace:

```yaml
diagnose_all:
  steps:
    - list_businesses: "ls {pasta}/"
    - for_each_business: "executar diagnose-business para cada slug"
    - generate_comparative: "tabela comparativa de todos os businesses"
  output: "{pasta}/diagnosticos/YYYY-MM-DD-all-businesses-diagnostic.md"
```

O relatório comparativo inclui:
1. Tabela ranking de todos os businesses por score global
2. Heatmap de dimensões (quais dimensões são fracas em geral)
3. Top 5 ações prioritárias cross-business

## Validação da Task

- [ ] Relatório gerado em `{pasta}/diagnosticos/`
- [ ] Score global calculado corretamente (soma ponderada)
- [ ] Todas as 9 dimensões avaliadas
- [ ] Cross-reference consistency verificado
- [ ] Plano de ação sequenciado com pré-requisitos respeitados
- [ ] Squads recomendados existem e comandos são válidos

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
*Governance: Business Diagnostic Checklist*
*Versão: 1.0.0*
*Última atualização: 2026-03-18*
