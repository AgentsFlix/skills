# hybrid-time · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-time.md` uma skill chamada hybrid-time. Quando eu pedir algo como "estrutura o time de [empresa]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# QUEM FAZ O QUÊ · Papéis, responsabilidades, KPIs por cadeira

Estrutura de time que dá para ler: cada cadeira, o que ela entrega, a quem responde e o KPI que prova que está funcionando. O agente elicita e preenche a estrutura e os scorecards. Quando a operação Hybrid roteia tarefa, é daqui que ela sabe quem existe.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "estrutura o time de [empresa]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit team structure | `references/elicit-team-structure.md` |
| elicit operations | `references/elicit-operations.md` |
| template que esta skill preenche | `templates/operations-team-structure.yaml` |
| template que esta skill preenche | `templates/operations-kpi-scorecards.yaml` |


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

- `references/elicit-operations.md`
- `references/elicit-team-structure.md`
- `templates/operations-kpi-scorecards.yaml`
- `templates/operations-team-structure.yaml`


---

## Referência: references/elicit-operations.md

# Task: Elicit Operations

```yaml
task:
  id: elicit-operations
  name: Elicitação de Estrutura Operacional
  agent: workspace-chief
  elicit: true
```

## Descrição

O COO (Operations Orchestrator) conduz elicitação para definir estrutura operacional, processos e configuração geral do workspace.

## Workflow

### Fase 1: Estrutura da Empresa

```yaml
elicitation:
  questions:
    - id: company_stage
      text: "Em qual estágio está a empresa? (ideia, MVP, growth, scale)"
      required: true

    - id: team_size
      text: "Qual o tamanho atual do time?"
      required: true

    - id: departments
      text: "Quais áreas/departamentos existem?"
      required: true
```

### Fase 2: Produtos

```yaml
elicitation:
  questions:
    - id: products
      text: "Quais produtos a empresa oferece? (liste todos)"
      required: true

    - id: main_product
      text: "Qual é o produto principal/carro-chefe?"
      required: true

    - id: product_stage
      text: "Em qual estágio cada produto está?"
      required: false
```

### Fase 3: Processos

```yaml
elicitation:
  questions:
    - id: workflows
      text: "Quais são os principais workflows da empresa?"
      required: true

    - id: tools
      text: "Quais ferramentas vocês usam? (Notion, Slack, etc)"
      required: false

    - id: cadence
      text: "Qual a cadência de reuniões/rituais?"
      required: false
```

### Fase 4: Output

**{pasta}/config.yaml:**
```markdown
# Configuração do Workspace

## Empresa

- **Estágio:** {company_stage}
- **Tamanho do Time:** {team_size}
- **Áreas:** {departments}

## Produtos

### Principal
{main_product}

### Todos os Produtos
{products}

### Estágios
{product_stage}

## Operações

### Workflows Principais
{workflows}

### Ferramentas
{tools}

### Cadência
{cadence}

---

*Gerado via Squad Hybrid Workspace (COO) em {date}*
```

## Próximo Passo: SOP Documentation

Após completar a elicitação operacional, considere documentar processos via Hybrid-SOP:

```
@sop-chief
*create-sop-operations-suite {slug}
```

Isso transforma os YAMLs de operations (team-structure, pricing-strategy, kpi-scorecards, commission-design) em SOPs executáveis por humanos e agentes IA. Os SOPs são salvos em `{pasta}/sops/`.

## Validação

- [ ] Estrutura da empresa documentada
- [ ] Produtos listados
- [ ] Processos identificados
- [ ] Arquivo salvo em `{pasta}/config.yaml`


---

## Referência: references/elicit-team-structure.md

# Task: Elicit Team Structure (YAML)

```yaml
task:
  id: elicit-team-structure
  name: Elicitação da Estrutura de Time (YAML)
  agent: workspace-chief
  elicit: true
  output_format: yaml
  target_template: operations/team-structure.yaml
```

## Descrição

O COO conduz elicitação para documentar a estrutura atual do time, a estrutura ideal, e o plano de contratação. O output popula `team-structure.yaml` no diretório `operations/`.

## Prerequisites

- Bootstrap executado
- Templates scaffolded
- Recomendado: `company-profile.yaml` preenchido (para contexto de stage e team_size)

## Usage

```
*elicit-team-structure {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/operations/team-structure.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/company-profile.yaml` (se existir) para team_size e stage.
3. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Time Atual (6 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Time Atual"
  questions:
    - id: headcount
      text: "Qual o tamanho atual do time? (total de pessoas)"
      required: true
      maps_to: current_team.total_headcount

    - id: role_1
      text: "Descreva o cargo/papel #1: título, quem ocupa, tipo (full-time/part-time/contractor), e 2-3 KPIs."
      required: true
      maps_to: current_team.roles_filled.role_1

    - id: role_2
      text: "Cargo/papel #2? (mesmo formato)"
      required: false
      maps_to: current_team.roles_filled.role_2

    - id: role_3
      text: "Cargo/papel #3? (mesmo formato)"
      required: false
      maps_to: current_team.roles_filled.role_3

    - id: additional_roles
      text: "Há mais papéis? Liste resumidamente."
      required: false
      maps_to: current_team.roles_filled

    - id: founder_hats
      text: "Quais papéis o FUNDADOR acumula? (liste todos os 'chapéus' que o fundador usa)"
      required: true
      maps_to: current_team.founder_wearing_hats
```

### Fase 2: Estrutura Ideal (5 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Estrutura Ideal"
  questions:
    - id: dept_marketing
      text: "MARKETING: Quem lidera? Quantas pessoas precisa? Quais papéis específicos? Qual KPI principal?"
      required: true
      maps_to: ideal_structure.departments.marketing

    - id: dept_sales
      text: "VENDAS: Mesmo formato — líder, tamanho, papéis, KPI."
      required: true
      maps_to: ideal_structure.departments.sales

    - id: dept_delivery
      text: "ENTREGA/OPERAÇÕES: Mesmo formato — líder, tamanho, papéis, KPI."
      required: true
      maps_to: ideal_structure.departments.delivery

    - id: dept_support
      text: "SUPORTE/CS: Mesmo formato — líder, tamanho, papéis, KPI."
      required: false
      maps_to: ideal_structure.departments.support

    - id: org_chart
      text: "Se tivesse que desenhar o organograma ideal em 2-3 anos, como seria?"
      required: false
      maps_to: ideal_structure
```

### Fase 3: Plano de Contratação (5 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Plano de Contratação"
  questions:
    - id: next_hire_1
      text: "Qual é a PRÓXIMA contratação? (título, por que é prioridade, prazo)"
      required: true
      maps_to: hiring_plan.next_hire_1

    - id: next_hire_2
      text: "Segunda contratação na fila?"
      required: false
      maps_to: hiring_plan.next_hire_2

    - id: next_hire_3
      text: "Terceira contratação?"
      required: false
      maps_to: hiring_plan.next_hire_3

    - id: hiring_criteria
      text: "Quais critérios usa para contratar? (skills vs attitude, experiência mínima, etc.)"
      required: true
      maps_to: hiring_plan.criteria

    - id: hiring_budget
      text: "Qual o budget disponível para contratação? (mensal ou total)"
      required: false
      maps_to: hiring_plan.budget
```

### Fase 4: Diagnóstico (4 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Diagnóstico"
  questions:
    - id: role_clarity
      text: "De 1-10, quão claros estão os papéis e responsabilidades hoje?"
      required: true
      maps_to: diagnostic.role_clarity

    - id: kpi_alignment
      text: "De 1-10, quão bem definidos estão os KPIs por pessoa/departamento?"
      required: true
      maps_to: diagnostic.kpi_alignment

    - id: bottleneck
      text: "Qual é o maior gargalo organizacional hoje? (onde o time trava)"
      required: true
      maps_to: diagnostic.bottleneck

    - id: scalability
      text: "De 1-10, quão preparada está a estrutura para dobrar de tamanho?"
      required: true
      maps_to: diagnostic.scalability
```

### Fase 5: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `team-structure.yaml`:**
   - Campos respondidos: substituir `FILL` pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` / `INCOMPLETE`.
3. **Calcular completude** e salvar em `{pasta}/operations/team-structure.yaml`.
4. **Relatório** com seções e completude.

## Convenções de Output YAML

- Campos respondidos: substituir `FILL` / `FILL_THIS` pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Headcount e founder hats documentados
- [ ] Pelo menos 2 departamentos da estrutura ideal definidos
- [ ] Próxima contratação identificada
- [ ] Diagnóstico com scores numéricos
- [ ] YAML válido salvo em operations/team-structure.yaml

## Next Steps

Após team-structure:
1. Completar pipeline com `*setup-business-profile {slug}`
2. Dados alimentam `kpi-scorecards.yaml` (futuro)

---

*Task do Squad Hybrid Workspace - COO Orchestrator*


---

## Referência: templates/operations-kpi-scorecards.yaml

---
# KPI-SCORECARDS.YAML - Business Metrics Dashboard & North Star Framework
# Purpose: Define and track the critical metrics that drive business decisions
# Guardian: COO / Founder / Department Leads
# Timing: FILL after monetization-strategy.yaml and conversion-funnel.yaml establish baseline metrics
# Framework: North Star Metric + DOSSIER-METRICAS (41KB) + Scalable Company KPI System
# Dependency: monetization-strategy.yaml (financial metrics), conversion-funnel.yaml (funnel metrics)

metadata:
  version: "1.0"
  product_name: "FILL_THIS"
  status: "TEMPLATE"
  last_updated: "FILL_THIS"
  owner: "COO / Founder"
  framework: "North Star Metric + Scalable Company KPI System + DOSSIER-METRICAS"
  notes: |
    If you cannot measure it, you cannot improve it.
    If you measure everything, you improve nothing.

    The secret is RUTHLESS SELECTION — track the 5-7 metrics
    that truly matter, ignore everything else.

    North Star Metric: ONE metric that best captures the core value
    your product delivers to customers. Everything else is a supporting metric.

    RULE: Every metric must have an OWNER, a TARGET, and a CADENCE.
    Metrics without ownership are decoration, not management tools.

# ============================================================================
# STEP 1: NORTH STAR METRIC
# ============================================================================

north_star:
  metric_name: "FILL — Your North Star Metric (e.g., 'Monthly active customers achieving 3x ROI')"
  definition: "FILL — Exact definition (how is this measured?)"
  current_value: "FILL — Current value"
  target_value: "FILL — Target value (30/60/90 day)"
  owner: "FILL — Who owns this metric?"
  why_this_metric: |
    FILL — Why is this THE most important metric?
    How does it connect to customer value AND business revenue?

# ============================================================================
# STEP 2: REVENUE METRICS
# ============================================================================

revenue_metrics:
  mrr:
    name: "Monthly Recurring Revenue"
    current: "FILL — Current MRR"
    target: "FILL — Target MRR"
    owner: "FILL — Owner"
    cadence: "FILL — Weekly / Monthly"

  arr:
    name: "Annual Recurring Revenue"
    current: "FILL — Current ARR"
    target: "FILL — Target ARR"
    owner: "FILL — Owner"
    cadence: "FILL — Monthly / Quarterly"

  revenue_growth_rate:
    name: "Revenue Growth Rate (%)"
    current: "FILL — Current %"
    target: "FILL — Target %"
    owner: "FILL — Owner"
    cadence: "FILL — Monthly"

  ltv:
    name: "Customer Lifetime Value"
    current: "FILL — Current LTV"
    target: "FILL — Target LTV"
    owner: "FILL — Owner"
    cadence: "FILL — Quarterly"

# ============================================================================
# STEP 3: ACQUISITION METRICS
# ============================================================================

acquisition_metrics:
  cac:
    name: "Customer Acquisition Cost"
    current: "FILL — Current CAC"
    target: "FILL — Target CAC"
    owner: "FILL — Owner"
    cadence: "FILL — Monthly"

  ltv_cac_ratio:
    name: "LTV:CAC Ratio"
    current: "FILL — Current ratio"
    target: "FILL — Target (minimum 3:1)"
    owner: "FILL — Owner"
    cadence: "FILL — Quarterly"

  lead_velocity_rate:
    name: "Lead Velocity Rate (% growth in qualified leads)"
    current: "FILL — Current %"
    target: "FILL — Target %"
    owner: "FILL — Owner"
    cadence: "FILL — Monthly"

  conversion_rate:
    name: "Sales Conversion Rate"
    current: "FILL — Current %"
    target: "FILL — Target %"
    owner: "FILL — Owner"
    cadence: "FILL — Weekly"

# ============================================================================
# STEP 4: RETENTION METRICS
# ============================================================================

retention_metrics:
  churn_rate:
    name: "Monthly Churn Rate"
    current: "FILL — Current %"
    target: "FILL — Target %"
    owner: "FILL — Owner"
    cadence: "FILL — Monthly"

  retention_rate:
    name: "Customer Retention Rate"
    current: "FILL — Current %"
    target: "FILL — Target %"
    owner: "FILL — Owner"
    cadence: "FILL — Monthly"

  nps:
    name: "Net Promoter Score"
    current: "FILL — Current NPS"
    target: "FILL — Target NPS"
    owner: "FILL — Owner"
    cadence: "FILL — Quarterly"

# ============================================================================
# STEP 5: OPERATIONAL METRICS
# ============================================================================

operational_metrics:
  custom_metric_1:
    name: "FILL — Operational metric relevant to your business"
    current: "FILL — Current"
    target: "FILL — Target"
    owner: "FILL — Owner"
    cadence: "FILL — Cadence"

  custom_metric_2:
    name: "FILL — Second operational metric"
    current: "FILL — Current"
    target: "FILL — Target"
    owner: "FILL — Owner"
    cadence: "FILL — Cadence"

# ============================================================================
# STEP 6: SCORECARD REVIEW CADENCE
# ============================================================================

review_cadence:
  daily_standup: "FILL — Which 2-3 metrics are reviewed daily?"
  weekly_review: "FILL — Which metrics are reviewed in the weekly meeting?"
  monthly_deep_dive: "FILL — Full scorecard review — what gets analyzed?"
  quarterly_strategic: "FILL — Quarterly strategic review — which metrics inform strategy?"

  escalation_rules:
    red_alert: "FILL — What metric value triggers an immediate action? (e.g., churn > 10%)"
    yellow_warning: "FILL — What triggers a warning? (e.g., conversion rate drops 20%)"
    green_healthy: "FILL — What range is considered healthy for each metric?"

# ============================================================================
# STEP 7: SCORING & DIAGNOSTIC
# ============================================================================

kpi_strength_score:
  metric_selection: "FILL 1-10"
  measurement_accuracy: "FILL 1-10"
  ownership_clarity: "FILL 1-10"
  action_connection: "FILL 1-10"

  scoring_rubric:
    range_1_3: "Too many or too few metrics, data is unreliable, no clear ownership, metrics do not drive action."
    range_4_6: "Reasonable metric selection, data is mostly accurate, some ownership, metrics reviewed but rarely drive change."
    range_7_8: "5-7 well-chosen metrics, accurate real-time data, clear ownership, metrics directly inform weekly decisions."
    range_9_10: "North Star + 5-6 supporting metrics perfectly aligned, automated real-time dashboards, every metric has owner + target + escalation, data-driven culture."

evidence:
  data_points: "FILL — Historical metric trends"
  sources: "FILL — List sources"

diagnostic_summary:
  overall_assessment: "FILL_THIS"
  most_concerning_metric: "FILL — Which metric is furthest from target?"
  recommended_actions: "FILL_THIS"

cross_references:
  depends_on:
    - "monetization-strategy.yaml"
    - "conversion-funnel.yaml"
  feeds_into:
    - "analytics.yaml"
  related:
    - "pricing-strategy.yaml"
    - "commission-design.yaml"


---

## Referência: templates/operations-team-structure.yaml

---
# TEAM-STRUCTURE.YAML - Organizational Design & Role Architecture
# Purpose: Design the team structure, roles, and reporting lines for scalable operations
# Guardian: COO / Founder
# Timing: FILL when scaling beyond founder + 1-2 people, or when restructuring
# Framework: Scalable Company Org Design (105fw) + Cole Gordon Team Building
# Dependency: kpi-scorecards.yaml (metrics that define role KPIs)

metadata:
  version: "1.0"
  product_name: "FILL_THIS"
  status: "TEMPLATE"
  last_updated: "FILL_THIS"
  owner: "COO / Founder"
  framework: "Scalable Company Org Design + Cole Gordon Team Architecture"
  notes: |
    The org chart is not bureaucracy. It is CLARITY.

    Every person needs to know three things:
    1. WHAT they are responsible for (role)
    2. HOW success is measured (KPIs)
    3. WHO they report to (accountability)

    Without this clarity, you get overlap, gaps, and confusion.

    Cole Gordon's team building principle: Hire for the ROLE, not the TASK.
    A role is a set of outcomes. A task is a set of activities.
    Hire someone who can own outcomes, not someone who follows task lists.

    RULE: Never hire for a role you cannot clearly define.
    If you cannot write the role in this template, you are not ready to hire.

# ============================================================================
# STEP 1: CURRENT TEAM
# ============================================================================

current_team:
  total_headcount: "FILL — Current team size"
  roles_filled:
    role_1:
      title: "FILL — Role title"
      person: "FILL — Name or 'Founder' if you do it yourself"
      type: "FILL — Full-time / Part-time / Contractor / Founder"
      kpis: "FILL — 2-3 KPIs this role owns"
    role_2:
      title: "FILL — Role title"
      person: "FILL — Name"
      type: "FILL — Employment type"
      kpis: "FILL — KPIs"
    role_3:
      title: "FILL — Role title"
      person: "FILL — Name"
      type: "FILL — Employment type"
      kpis: "FILL — KPIs"

  founder_wearing_hats: |
    FILL — List all roles the founder currently fills.
    This reveals which roles to hire FIRST.
    Prioritize hiring for the role that:
    1. Takes the most founder time
    2. Is NOT the founder's zone of genius
    3. Has clear, measurable outputs

# ============================================================================
# STEP 2: IDEAL TEAM STRUCTURE
# ============================================================================

ideal_structure:
  departments:
    marketing:
      lead: "FILL — Role title"
      team_size: "FILL — Number of people needed"
      key_roles: "FILL — List specific roles"
      primary_kpi: "FILL — Department KPI"

    sales:
      lead: "FILL — Role title"
      team_size: "FILL — Number needed"
      key_roles: "FILL — Specific roles"
      primary_kpi: "FILL — Department KPI"

    delivery:
      lead: "FILL — Role title"
      team_size: "FILL — Number needed"
      key_roles: "FILL — Specific roles"
      primary_kpi: "FILL — Department KPI"

    operations:
      lead: "FILL — Role title"
      team_size: "FILL — Number needed"
      key_roles: "FILL — Specific roles"
      primary_kpi: "FILL — Department KPI"

# ============================================================================
# STEP 3: HIRING PRIORITY
# ============================================================================

hiring_priority:
  next_hire:
    role: "FILL — What role to hire next"
    reason: "FILL — Why this role first? (biggest bottleneck, highest ROI)"
    timeline: "FILL — When to hire by"
    budget: "FILL — Compensation budget"

  second_hire:
    role: "FILL — Second hire"
    reason: "FILL — Why"
    timeline: "FILL — When"
    budget: "FILL — Budget"

  third_hire:
    role: "FILL — Third hire"
    reason: "FILL — Why"
    timeline: "FILL — When"
    budget: "FILL — Budget"

# ============================================================================
# STEP 4: SCORING & DIAGNOSTIC
# ============================================================================

team_strength_score:
  role_clarity: "FILL 1-10"
  kpi_alignment: "FILL 1-10"
  hiring_strategy: "FILL 1-10"
  scalability: "FILL 1-10"

  scoring_rubric:
    range_1_3: "No defined roles, founder does everything, no KPIs, no hiring plan."
    range_4_6: "Some roles defined, basic KPIs, hiring plan exists but is reactive."
    range_7_8: "Clear roles with KPIs, strategic hiring priority, team can operate without founder for days."
    range_9_10: "Department structure with leads, every role has KPIs and accountability, proactive hiring pipeline, business runs without founder."

evidence:
  data_points: "FILL — Team performance data, bottleneck analysis"
  sources: "FILL — List sources"

diagnostic_summary:
  overall_assessment: "FILL_THIS"
  biggest_bottleneck: "FILL — What role gap is causing the most problems?"
  recommended_actions: "FILL_THIS"

cross_references:
  depends_on:
    - "kpi-scorecards.yaml"
  feeds_into:
    - "hiring-playbook.yaml"
    - "commission-design.yaml"
  related:
    - "ramp-plan.yaml"
    - "interview-framework.yaml"
