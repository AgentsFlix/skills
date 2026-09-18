# copy-big-idea-lead-magnet · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-big-idea-lead-magnet.md` uma skill chamada copy-big-idea-lead-magnet. Quando eu pedir algo como "big idea para [produto e mercado]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# UMA SÓ IDEIA · Ideia central e ímã de leads

Uma campanha inteira cabe em uma ideia. O agente extrai a Big Idea, monta o arsenal de autoridade e desenha o lead magnet que a pessoa quer de verdade, não o PDF que ninguém abre. É o passo que transforma um produto em uma história que vale contar.

## When to Use

- O pedido envolve: big idea, ideia central, mecanismo único, RMBC, brief de campanha, lead magnet.
- Diga: "big idea para [produto e mercado]" ou "lead magnet para [público]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create big idea | `references/create-big-idea.md` |
| build authority arsenal | `references/build-authority-arsenal.md` |
| create lead magnet | `references/create-lead-magnet.md` |
| rmbc method | `references/rmbc-method.md` |
| create unique mechanism | `references/create-unique-mechanism.md` |
| create campaign brief | `references/create-campaign-brief.md` |
| campaign planning pack | `references/campaign-planning-pack.md` |

## Procedure

1. Identifique a sub-tarefa pela tabela acima. Se o pedido cobre mais de uma, ordene-as na sequência em que uma alimenta a outra e execute uma por vez.
2. Abra a referência escolhida e leia o bloco `Inputs`. Colete do usuário todos os `required`; pergunte o que faltar antes de escrever. Registre os `optional` que ele deu.
3. Siga a referência: fórmulas, categorias e passos, na ordem em que aparecem. Onde ela citar um template em `templates/`, abra e preencha o template; onde citar um checklist, use-o no passo 5.
4. Escreva a entrega no formato do bloco `Output Format` da referência, em português. Deixe `[COLCHETES]` só onde falta um dado do usuário; nunca invente número, depoimento ou nome.
5. Rode o `Quality Checklist` (ou `Evaluation Criteria`) da referência sobre o que escreveu. Corrija o que falhou. Liste na entrega o resultado item a item.
6. Entregue: a peça no formato pedido, a lista de `[COLCHETES]` a preencher, e o checklist com o resultado.

## Pitfalls

- Pular o bloco `Inputs` e escrever com o que veio. Falta de avatar ou de benefício principal produz copy genérica; pergunte.
- Misturar duas sub-tarefas numa entrega só. Uma de cada vez, cada uma com seu checklist.
- Preencher `[COLCHETES]` com chute para a peça "ficar pronta". Colchete aberto é honesto; número inventado é dívida.
- Ignorar o `Output Format`. Ele existe para a peça encaixar no passo seguinte (página, e-mail, anúncio).

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. Toda entrega nomeada no `Output Format` da referência usada existe na resposta (ex.: variações, top 3, pares de teste).
2. Todos os `required` do bloco `Inputs` foram obtidos do usuário antes da escrita, ou a resposta diz explicitamente qual faltou e parou ali.
3. Nenhum número, depoimento ou nome aparece sem ter vindo do usuário; o que falta está em `[COLCHETES]` e listado no fim.
4. O `Quality Checklist` da referência aparece na entrega com cada item marcado, e nenhum item está falho.
5. A resposta nomeia qual referência foi usada (`references/<sub-tarefa>.md`).

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/build-authority-arsenal.md`
- `references/campaign-planning-pack.md`
- `references/create-big-idea.md`
- `references/create-campaign-brief.md`
- `references/create-lead-magnet.md`
- `references/create-unique-mechanism.md`
- `references/rmbc-method.md`
- `templates/authority-arsenal-tmpl.yaml`


---

## Referência: references/build-authority-arsenal.md

# Build Authority Arsenal - Credibility Elements Extraction Task

## Metadata
```yaml
task_id: build-authority-arsenal
version: 1.0.0
category: agent-creation
difficulty: advanced
elicit: true
dependencies:
  templates:
    - templates/authority-arsenal-tmpl.yaml
  reference:
    - agents/david-ogilvy.md # authority_proof_arsenal section
outputs:
  - Authority arsenal YAML file with:
    - Crucible story (4 acts)
    - Authority statistics
    - Notable products/clients
    - Proof stack templates (4+)
```

## Objective

Build a comprehensive authority proof arsenal that enables the copywriter agent to establish credibility naturally. This includes their origin story, verifiable achievements, notable work, and reusable proof templates.

**Why This Matters:** Authority is the foundation of persuasion. A copywriter agent without credibility elements will produce hollow, unpersuasive copy. This arsenal provides the "social proof layer" that makes every piece of copy more believable.

---

## PREREQUISITES

Before starting, ensure you have:

```
elicit: true
question: "Please confirm the following inputs are available:"
fields:
  - copywriter_name: "Full name of the copywriter"
  - slug: "Snake_case identifier (e.g., dan_koe)"
  - source_directory: "Path to source materials with autobiographical content"
  - psychometric_profile: "Path to psychometric profile JSON (optional but recommended)"
```

### Required Source Materials

| Material Type | Purpose | Minimum |
|--------------|---------|---------|
| Autobiographical content | Extract crucible story | 2+ files |
| Business/career mentions | Extract statistics | 3+ files |
| Product launches/offers | Notable products | 2+ files |
| Client results/testimonials | Notable clients | 1+ file |

### Quality Gate: Prerequisites

- [ ] Source directory exists with autobiographical content
- [ ] At least 2 files contain personal journey/story details
- [ ] At least 3 files contain business metrics or achievements
- [ ] Output directory exists at `{pasta}/{slug}/analysis/`

---

## PHASE 1: EXTRACT CRUCIBLE STORY

### Objective
Build the copywriter's transformation narrative in 4 acts: Origin → Struggle → Breakthrough → Mastery.

### The 4-Act Structure

The crucible story follows a universal transformation arc:

```
ACT 1: ORIGIN
"Where they started - the humble/relatable beginning"

ACT 2: STRUGGLE
"The challenges, failures, dark night of the soul"

ACT 3: BREAKTHROUGH
"The turning point - what changed everything"

ACT 4: MASTERY
"Current state - where they are now as authority"
```

### Step 1.1: Scan for Autobiographical Content

Read ALL source files looking for:
- Personal history mentions
- "I used to..." or "When I started..." statements
- Failure stories
- Turning point narratives
- Achievement claims
- Timeline markers (years, ages)

Create extraction notes:

| Quote/Paraphrase | Source File | Act | Verified? |
|-----------------|-------------|-----|-----------|
| "[exact quote or close paraphrase]" | [filename] | 1/2/3/4 | ✅/❌ |

### Step 1.2: Build Act 1 - Origin

Extract the starting point of the copywriter's journey.

**Required Fields:**
```yaml
act_1_origin:
  year: "YYYY or YYYY-YYYY range"
  context: "[Starting situation - job, life circumstances]"
  key_event: "[What initiated the journey - inciting incident]"
  mindset: "[How they thought at this stage]"
  challenges:
    - "[Initial challenge 1]"
    - "[Initial challenge 2]"
  sources:
    - "[Source file 1]"
```

**Questions to Answer:**
- What was their life like before the transformation?
- What was their first job/career/situation?
- What made them start down this path?
- What did they believe at this stage?

### Step 1.3: Build Act 2 - Struggle

Extract the challenges, failures, and lessons learned.

**Required Fields:**
```yaml
act_2_struggle:
  period: "YYYY-YYYY or duration"
  challenges:
    - challenge: "[Description]"
      lesson: "[What they learned]"
  failures:
    - failure: "[Specific failure]"
      impact: "[How it affected them]"
  dark_moment: "[The lowest point]"
  pivotal_lesson: "[The key insight from this period]"
  sources:
    - "[Source file 1]"
```

**Questions to Answer:**
- What failures did they experience?
- How many attempts before success?
- What was the darkest moment?
- What did they almost give up on?
- What key lesson emerged from struggle?

### Step 1.4: Build Act 3 - Breakthrough

Extract the turning point that changed everything.

**Required Fields:**
```yaml
act_3_breakthrough:
  year: "YYYY"
  catalyst: "[What triggered the breakthrough]"
  realization: "[The key insight or shift]"
  first_success: "[The first significant win]"
  validation: "[How they knew it was working]"
  sources:
    - "[Source file 1]"
```

**Questions to Answer:**
- What was the specific breakthrough moment?
- What did they figure out that others hadn't?
- What was their first major success?
- How did they validate the approach worked?

### Step 1.5: Build Act 4 - Mastery

Extract their current state and signature achievements.

**Required Fields:**
```yaml
act_4_mastery:
  current_state: "[Where they are now]"
  signature_achievement: "[The defining accomplishment]"
  impact: "[How they've helped others]"
  philosophy: "[Core belief that emerged from journey]"
  sources:
    - "[Source file 1]"
```

**Questions to Answer:**
- Where are they now in their career?
- What is their signature achievement?
- How have they helped others?
- What philosophy emerged from their journey?

### Quality Gate: Crucible Story

- [ ] All 4 acts populated with content
- [ ] Each act has verifiable sources cited
- [ ] Timeline is coherent (years make sense)
- [ ] Story has clear transformation arc
- [ ] Darkest moment and breakthrough are specific, not generic
- [ ] Current state reflects authority position

---

## PHASE 2: COMPILE AUTHORITY STATISTICS

### Objective
Extract verifiable statistics that demonstrate expertise and results.

### Step 2.1: Identify Statistical Categories

Scan source files for numbers related to:

| Category | What to Look For |
|----------|-----------------|
| **Career** | Years of experience, total projects, hours invested |
| **Results** | Revenue generated, clients helped, transformations achieved |
| **Recognition** | Awards, features, endorsements, credentials |
| **Reach** | Followers, subscribers, views, downloads, audience size |

### Step 2.2: Extract and Verify Statistics

For EACH statistic found:

| Statistic | Value | Source | Verifiable? | Date |
|-----------|-------|--------|-------------|------|
| "[metric name]" | [number] | [file] | ✅/❌ | [when stated] |

**Verification Rules:**
- ✅ Verifiable: Number stated directly by copywriter
- ✅ Verifiable: Can be cross-referenced with public data
- ⚠️ Approximate: Use "~" or "over" if rounded
- ❌ Reject: Vague claims like "many" or "countless"

### Step 2.3: Structure Statistics Output

```yaml
authority_statistics:
  career:
    - metric: "[Career metric name]"
      value: "[Specific number/range]"
      context: "[What this means]"
      source: "[Source file]"

  results:
    - metric: "[Results metric name]"
      value: "[Specific number/range]"
      context: "[What this means]"
      source: "[Source file]"

  recognition:
    - metric: "[Recognition metric name]"
      value: "[Specific credential/award]"
      context: "[What this means]"
      source: "[Source file]"

  reach:
    - metric: "[Reach metric name]"
      value: "[Specific number/range]"
      context: "[What this means]"
      source: "[Source file]"
```

### Quality Gate: Statistics

- [ ] Minimum 5 statistics extracted
- [ ] At least 2 different categories covered
- [ ] All statistics have source citations
- [ ] Numbers are specific (not vague)
- [ ] Statistics are impressive enough to establish authority

---

## PHASE 3: LIST NOTABLE PRODUCTS AND CLIENTS

### Objective
Document the copywriter's signature products, services, and notable clients/students.

### Step 3.1: Extract Notable Products

Scan for:
- Courses, programs, memberships
- Books, guides, resources
- Software, tools, templates
- Consulting/coaching offers

```yaml
notable_products:
  - name: "[Product name]"
    type: "course|book|software|service|community"
    description: "[One-line description]"
    result_claim: "[What it helps people achieve]"
    source: "[Source file]"
```

### Step 3.2: Extract Notable Clients/Students

Scan for:
- Client testimonials or mentions
- Student success stories
- Notable people who endorse or follow them
- Collaborations with recognized names

```yaml
notable_clients:
  - name: "[Client/student name or type]"
    result: "[What they achieved]"
    quote: "[Direct quote if available]"
    source: "[Source file]"
```

**Note:** If specific names aren't available, use categories like "Fortune 500 executives" or "6-figure entrepreneurs."

### Quality Gate: Products & Clients

- [ ] At least 3 notable products listed
- [ ] At least 2 notable clients/student types listed
- [ ] Each entry has clear result/benefit
- [ ] Sources are cited

---

## PHASE 4: CREATE PROOF STACK TEMPLATES

### Objective
Create reusable templates for inserting authority proof into copy.

### The 4 Proof Types

Every copywriter agent needs templates for these proof categories:

| Proof Type | Purpose | When to Use |
|------------|---------|-------------|
| **Transformation** | Show personal journey | Opening hooks, about sections |
| **Results** | Demonstrate achievements | Credibility sections, claims |
| **Credibility** | Establish expertise | Introductions, author bios |
| **Social** | Leverage audience/clients | Testimonial sections, validation |

### Step 4.1: Create Transformation Proof Template

Template for using the crucible story:

```yaml
proof_template_transformation:
  name: "Transformation Proof"
  purpose: "Establish relatability through personal journey"
  template: |
    [BEFORE STATE]: {act_1_context}
    [STRUGGLE]: {act_2_dark_moment}
    [TURNING POINT]: {act_3_catalyst}
    [AFTER STATE]: {act_4_current_state}

  usage_guidance:
    - "Use in opening hooks to establish relatability"
    - "Use in about sections to build connection"
    - "Abbreviate for social media bios"

  example_application: |
    "[Copywriter] went from {origin_state} to {mastery_state}
    after discovering {breakthrough_insight}."
```

### Step 4.2: Create Results Proof Template

Template for citing achievements:

```yaml
proof_template_results:
  name: "Results Proof"
  purpose: "Demonstrate capability through numbers"
  template: |
    [METRIC]: {statistic_value}
    [CONTEXT]: {what_it_means}
    [TIMEFRAME]: {when_achieved}

  usage_guidance:
    - "Use after making claims to substantiate"
    - "Use in headlines for specific hooks"
    - "Stack multiple statistics for compound proof"

  example_application: |
    "With {years} years of experience and {revenue_stat} in results,
    [Copywriter] has {achievement_description}."
```

### Step 4.3: Create Credibility Proof Template

Template for establishing expertise:

```yaml
proof_template_credibility:
  name: "Credibility Proof"
  purpose: "Position as authority in the field"
  template: |
    [CREDENTIALS]: {recognition_stats}
    [EXPERIENCE]: {career_stats}
    [NOTABLE WORK]: {products_or_clients}

  usage_guidance:
    - "Use in author bios and introductions"
    - "Use when presenting frameworks or methods"
    - "Use to counter 'who are you?' objection"

  example_application: |
    "[Copywriter], creator of {notable_product}, has helped
    {client_types} achieve {result_description}."
```

### Step 4.4: Create Social Proof Template

Template for leveraging audience and client results:

```yaml
proof_template_social:
  name: "Social Proof"
  purpose: "Leverage others' validation and results"
  template: |
    [AUDIENCE SIZE]: {reach_stats}
    [CLIENT RESULTS]: {client_achievements}
    [ENDORSEMENTS]: {notable_mentions}

  usage_guidance:
    - "Use in testimonial sections"
    - "Use to validate claims with third-party evidence"
    - "Use to show community/following"

  example_application: |
    "Join {audience_size} others who have {transformation_achieved}
    using [Copywriter]'s methods."
```

### Quality Gate: Proof Templates

- [ ] All 4 proof template types created
- [ ] Each template has clear structure
- [ ] Usage guidance provided for each
- [ ] Example applications included
- [ ] Templates reference actual extracted data

---

## PHASE 5: ASSEMBLE FINAL OUTPUT

### Step 5.1: Compile Complete Arsenal

Combine all phases into the final YAML structure:

```yaml
# Authority Arsenal - {Copywriter Name}
# Generated: {date}
# Source files analyzed: {count}

copywriter: "{name}"
slug: "{slug}"
extraction_date: "{YYYY-MM-DD}"
source_files_analyzed: {count}

crucible_story:
  title: "{One-line story title}"
  transformation_arc: "{from X to Y}"

  act_1_origin:
    # ... from Phase 1

  act_2_struggle:
    # ... from Phase 1

  act_3_breakthrough:
    # ... from Phase 1

  act_4_mastery:
    # ... from Phase 1

authority_statistics:
  career:
    # ... from Phase 2
  results:
    # ... from Phase 2
  recognition:
    # ... from Phase 2
  reach:
    # ... from Phase 2

notable_products:
  # ... from Phase 3

notable_clients:
  # ... from Phase 3

proof_stack_templates:
  transformation:
    # ... from Phase 4
  results:
    # ... from Phase 4
  credibility:
    # ... from Phase 4
  social:
    # ... from Phase 4
```

### Step 5.2: Validate YAML Syntax

- [ ] Run YAML linter/validator
- [ ] Check for proper indentation
- [ ] Verify no duplicate keys
- [ ] Ensure all strings are properly quoted if they contain special characters

### Output Location

Save to: `{pasta}/{slug}/analysis/authority-arsenal.yaml`

---

## FINAL QUALITY CHECKLIST

### Content Completeness

- [ ] **Crucible Story**
  - [ ] Act 1 (Origin) complete with year, context, key event
  - [ ] Act 2 (Struggle) complete with challenges, failures, dark moment
  - [ ] Act 3 (Breakthrough) complete with catalyst, realization, first success
  - [ ] Act 4 (Mastery) complete with current state, signature achievement

- [ ] **Statistics** (minimum 5)
  - [ ] At least 1 career statistic
  - [ ] At least 1 results statistic
  - [ ] At least 1 reach statistic
  - [ ] All statistics have sources

- [ ] **Products & Clients**
  - [ ] At least 3 notable products listed
  - [ ] At least 2 client types or names listed

- [ ] **Proof Templates** (all 4 required)
  - [ ] Transformation proof template
  - [ ] Results proof template
  - [ ] Credibility proof template
  - [ ] Social proof template

### Quality Standards

- [ ] All content derived from source materials (not invented)
- [ ] All sources cited
- [ ] Numbers are specific, not vague
- [ ] Story arc is coherent and compelling
- [ ] Templates are actually usable for copy creation
- [ ] YAML syntax is valid

### Scoring

| Section | Weight | Criteria |
|---------|--------|----------|
| Crucible Story | 30% | All 4 acts complete, compelling arc |
| Statistics | 25% | 5+ stats, specific, verifiable |
| Products/Clients | 15% | 3+ products, 2+ clients |
| Proof Templates | 20% | All 4 types, usable |
| Technical | 10% | Valid YAML, proper sources |

**Target Score: 90%+**

---

## TROUBLESHOOTING

### Common Issues

**Issue:** Not enough autobiographical content
**Solution:** Look for:
- Podcast interviews where they share their story
- Social media posts about their journey
- "About" pages or bio content
- First-person narratives in any content

**Issue:** Statistics seem inflated or unverifiable
**Solution:**
- Use more conservative estimates
- Add qualifiers ("over", "approximately")
- Note the source and date of claim
- Exclude if truly unverifiable

**Issue:** Crucible story feels generic
**Solution:**
- Look for MORE specific details
- Find the unique angle (what makes THEIR struggle different?)
- Include specific failures, not just "challenges"
- Find the exact breakthrough moment

**Issue:** No notable clients named
**Solution:**
- Use client TYPES instead of names
- Look for testimonial content
- Check for any collaboration mentions
- Use audience demographics as proxy

---

## REFERENCE: David Ogilvy Example

For structural reference, see how `authority_proof_arsenal` is formatted in `agents/david-ogilvy.md`:

- Crucible story with 6 acts (we use 4 simplified)
- Statistics with specific numbers and sources
- Notable clients list
- Proof stack templates with setup and usage

---

*CopywriterOS Task v1.0.0*
*Part of the AIOS Expansion Pack System*


---

## Referência: references/campaign-planning-pack.md

# Campaign Planning Pack Task

Canonical planning task for the `copy` squad. Use this task whenever a workflow needs persisted campaign artifacts before copy production or `FINAL` promotion.

## Metadata

```yaml
task:
  name: Campaign Planning Pack
  id: campaign-planning-pack
  version: "1.0.0"
  category: strategy
  estimated_time: "30-60 min"
  primary_agents:
    - copy-chief
    - dan-kennedy
    - todd-brown
    - stefan-georgi
  outputs:
    - campaign-brief.yaml
    - message-architecture.yaml
    - creative-brief.yaml
    - assets/asset-brief-*.yaml
```

---

## Purpose

Turn diagnostics, offer truth, and route decisions into the canonical planning bundle used by the `copy` operating model:

1. `Campaign Brief`
2. `Message Architecture`
3. `Creative Brief`
4. `Asset Briefs`

This task is the planning source of truth for campaign-level copy execution. It is not a replacement for specific craft frameworks like RMBC. Those may support production after the planning pack exists.

---

## Required Inputs

```yaml
required:
  - outputs/workspace-context/campaign-context-brief.yaml
  - business_slug
  - product_slug
  - campaign_slug
  - selected_workflow
  - offer_truth
  - audience_truth

recommended:
  - awareness_diagnosis
  - market_sophistication
  - unique_mechanism
  - proof_inventory
  - channel_constraints
  - existing_delivery_artifacts
```

---

## Workflow

### Step 1: Normalize Campaign Scope

Define the execution boundary before planning:

- campaign objective
- commercial moment
- channel mix
- primary conversion event
- delivery route for this workflow

If the campaign is missing a persisted `campaign_slug`, stop `FINAL` promotion and mark the work as draft-only.

### Step 2: Write `campaign-brief.yaml`

Capture:

- business, product, and campaign identifiers
- objective and success metric
- target audience and awareness stage
- offer, price point, and conversion event
- constraints, dependencies, and required proofs
- workflow route and delivery expectations

### Step 3: Write `message-architecture.yaml`

Define the message system for the campaign:

- core promise
- problem framing
- unique mechanism or differentiator
- proof hierarchy
- objection priorities
- tone and language guardrails
- message priority by channel or asset

### Step 4: Write `creative-brief.yaml`

Translate strategy into execution direction:

- creative angle
- headline territories
- emotional posture
- required claims and forbidden shortcuts
- narrative constraints
- review expectations for copy, brand, and compliance

### Step 5: Write Asset Briefs

Create one `assets/asset-brief-*.yaml` per required deliverable in the route.

Minimum route expectations:

- `wf-1-full-launch`
  - `assets/asset-brief-main-asset.yaml`
  - `assets/asset-brief-email.yaml`
- `wf-2-paid-traffic`
  - `assets/asset-brief-ads.yaml`
  - `assets/asset-brief-landing-page.yaml`
- `wf-3-high-ticket`
  - `assets/asset-brief-application.yaml`
  - `assets/asset-brief-webinar.yaml`
  - `assets/asset-brief-email.yaml`
- `wf-5-email-marketing`
  - `assets/asset-brief-email.yaml`
- `wf-6-funnel-optimization`
  - `assets/asset-brief-optimization.yaml`

Each asset brief should define:

- asset objective
- audience slice
- input dependencies
- required sections or beats
- proof and CTA expectations
- delivery path under `outputs/copy/{business}/`

---

## Output Contract

The planning pack is complete only when all required files exist inside:

`{pasta}/copy/{campaign_slug}/`

Expected files:

```yaml
campaign:
  - campaign-brief.yaml
  - message-architecture.yaml
  - creative-brief.yaml
assets:
  - assets/asset-brief-*.yaml
```

---

## Quality Checklist

- [ ] `campaign_slug` is explicit for strategic or `FINAL` work.
- [ ] `campaign-brief.yaml` defines objective, audience, offer, and success metric.
- [ ] `message-architecture.yaml` defines promise, mechanism, proof hierarchy, and objections.
- [ ] `creative-brief.yaml` translates strategy into execution direction.
- [ ] Every asset required by the route has an `asset-brief`.
- [ ] Planning files point to real upstream truth and do not invent missing facts.

---

## Guardrails

1. Do not treat RMBC, Schwartz, Kennedy, or any legacy framework as the planning source of truth by itself.
2. Do not skip asset briefs for multi-asset campaigns.
3. Do not promote to `FINAL` when campaign planning is still implicit.
4. If the offer or proof is unclear, log the blocker instead of guessing.


---

## Referência: references/create-big-idea.md

# Create Big Marketing Idea - Todd Brown Framework

## Purpose

Develop a powerful Big Marketing Idea using Todd Brown's 5 Criteria Framework. This is a **standalone task** focused ONLY on the Big Idea - the central concept that makes your offer impossible to ignore. For complete mechanism development including Problem/Solution Mechanisms, use `create-unique-mechanism.md` instead.

## When to Use

- **After E1 research is complete** - You need deep understanding before Big Idea discovery
- **When repositioning a product** - Finding a fresh angle for existing offer
- **When copy feels generic** - No clear differentiating concept
- **When multiple messages compete** - Need single-minded focus
- **Before writing any copy** - Big Idea shapes everything else
- **Quick ideation sessions** - Generate and validate ideas faster than full mechanism development

## Todd Brown on Big Ideas

```
"The reason why we were able to grow so big and so fast is because we
realized early on that we are all really in the idea business.

We're in the business of developing and disseminating interesting,
compelling, unique, startling, fresh new ideas to the marketplace.

99 out of 100 times, the Big Idea comes from digging deep, not from
the superficial standard stuff."

— Todd Brown, Marketing Funnel Automation

"The number one problem of all weak copywriting is a lack of a single,
unifying big idea."

— Mark Ford (Michael Masterson), Agora Publishing
```

## Inputs

```yaml
required:
  - product_name: What you're selling
  - target_market: Who you're selling to
  - main_promise: Your primary benefit/result
  - research_summary: Key insights from E1 research (avatar, market, competition)

optional:
  - unique_mechanism: If already developed (from create-unique-mechanism.md)
  - awareness_level: From diagnose-awareness-level.md (1-5)
  - sophistication_stage: From diagnose-market-sophistication.md (1-5)
  - competitor_angles: How competitors are positioning
  - origin_story: How you discovered/created this solution
  - contrarian_insights: What the market believes that's wrong
```

## The Big Idea Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                    BIG IDEA FORMULA                                  │
│                                                                      │
│           E-C (P-P + U-M) I-I                                       │
│                                                                      │
│   ┌──────────────────────────────────────────────────────────────┐ │
│   │  E-C = Emotionally Compelling                                 │ │
│   │        Creates genuine emotional response                     │ │
│   │        (curiosity, desire, fear, hope)                        │ │
│   └──────────────────────────────────────────────────────────────┘ │
│                           +                                          │
│   ┌──────────────────────────────────────────────────────────────┐ │
│   │  P-P = Primary Promise                                        │ │
│   │        The main result/transformation delivered               │ │
│   │        (specific, measurable, desirable)                      │ │
│   └──────────────────────────────────────────────────────────────┘ │
│                           +                                          │
│   ┌──────────────────────────────────────────────────────────────┐ │
│   │  U-M = Unique Mechanism                                       │ │
│   │        The "how" that differentiates                          │ │
│   │        (can be implied if not fully developed)                │ │
│   └──────────────────────────────────────────────────────────────┘ │
│                           +                                          │
│   ┌──────────────────────────────────────────────────────────────┐ │
│   │  I-I = Intellectually Interesting                             │ │
│   │        Makes prospect think differently                       │ │
│   │        "I never saw it that way before"                       │ │
│   └──────────────────────────────────────────────────────────────┘ │
│                                                                      │
│                           ↓                                          │
│                                                                      │
│   Result: ONE SENTENCE that captures everything                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Workflow

### Step 1: Preparation Check

Before creating a Big Idea, validate you have sufficient inputs:

```
PRE-WORK VALIDATION:

□ Do you have deep E1 research?
  - Avatar: Pains, desires, beliefs, language
  - Market: Size, trends, sophistication level
  - Competition: What they're saying, what they're missing

  If NO → Complete E1 Examine phase first

□ Do you know your Primary Promise?
  - Specific result you deliver
  - Measurable outcome (when possible)
  - Desirable to target avatar

  If NO → Define primary promise first

□ Have you identified unique differentiators?
  - What do you do differently?
  - What do others miss?
  - What can only YOU claim?

  If NO → Do competitive analysis first

⚠️ WARNING: Big Ideas rarely come from surface-level thinking.
   If you haven't done deep research, the Big Idea will be weak.
```

### Step 2: Big Idea Discovery

Generate potential Big Ideas using these excavation techniques:

```
═══════════════════════════════════════════════════════════════════════
BIG IDEA EXCAVATION TECHNIQUES
═══════════════════════════════════════════════════════════════════════

TECHNIQUE 1: CONTRARIAN FLIP
─────────────────────────────
Ask: "What does everyone in my market believe that's WRONG?"

Process:
1. List 5 common beliefs in your market
2. Challenge each one - is it actually true?
3. If you can prove the opposite, you have a potential Big Idea

Example:
- Common belief: "Lose weight = eat less + exercise more"
- Contrarian: "The harder you diet, the more your body fights back"
- Big Idea: "What if the key to weight loss isn't willpower at all?"


TECHNIQUE 2: THE HIDDEN CAUSE
─────────────────────────────
Ask: "What's the REAL reason my prospects haven't succeeded?"

Process:
1. List all the common approaches that fail
2. Find the hidden factor they all ignore
3. Name that hidden factor
4. Position your solution as addressing it

Example:
- Common approaches: Diets, exercise, willpower programs
- Hidden factor: Hormonal dysregulation
- Big Idea: "The hidden hormone switch that controls whether you
  burn or store fat"


TECHNIQUE 3: REFRAME THE PROBLEM
─────────────────────────────────
Ask: "What if my prospect has been solving the WRONG problem?"

Process:
1. Define the problem as the market sees it
2. Redefine it from a different angle
3. Show how the new frame changes everything

Example:
- Market sees: "I need more leads"
- Reframe: "You don't have a lead problem, you have a conversion problem"
- Big Idea: "Why chasing more leads is the slowest path to growth"


TECHNIQUE 4: THE SECRET THEY DON'T KNOW
───────────────────────────────────────
Ask: "What insider knowledge do I have that my prospects lack?"

Process:
1. List what you know that most don't
2. Identify what would shock/surprise them
3. Package it as a revelation

Example:
- Insider knowledge: "Big pharma profits from treating, not curing"
- Big Idea: "The $130 billion reason you've never heard of this
  natural compound"


TECHNIQUE 5: TIMING/CONTEXT SHIFT
─────────────────────────────────
Ask: "Why is NOW the perfect moment for this solution?"

Process:
1. Identify recent changes (technology, economy, trends)
2. Connect your solution to the timing
3. Create urgency through context

Example:
- Recent change: AI making many jobs obsolete
- Big Idea: "The 3 skills that AI can't replace
  (and how to master them before it's too late)"


TECHNIQUE 6: IDENTITY ANGLE
───────────────────────────
Ask: "What does my ideal customer WANT to be?"

Process:
1. Define the identity they aspire to
2. Position your offer as the path to that identity
3. Frame it as who they become, not what they get

Example:
- Desired identity: "Smart investor who beats the market"
- Big Idea: "The unconventional strategy quiet millionaires use
  while everyone else follows the crowd"


GENERATE 5-10 POTENTIAL BIG IDEAS:

Using the techniques above, write out potential ideas:

1. (Contrarian): _________________________________________________
2. (Hidden Cause): _________________________________________________
3. (Reframe): _________________________________________________
4. (Secret): _________________________________________________
5. (Timing): _________________________________________________
6. (Identity): _________________________________________________
7. (Combination): _________________________________________________
```

### Step 3: The 5 Criteria Test

Test each potential Big Idea against the 5 criteria:

```
═══════════════════════════════════════════════════════════════════════
THE 5 CRITERIA TEST
═══════════════════════════════════════════════════════════════════════

For each potential Big Idea, score against these criteria:

┌────────────────────────────────────────────────────────────────────┐
│ CRITERION 1: INTELLECTUALLY INTERESTING                            │
│ ─────────────────────────────────────────                          │
│                                                                    │
│ Question: Does it make the prospect think "Hmm, I never saw it    │
│           that way before"?                                        │
│                                                                    │
│ Test: Is there a NEW perspective, insight, or angle?               │
│                                                                    │
│ Pass Signs:                                                        │
│ ✓ Offers fresh perspective on familiar problem                     │
│ ✓ Challenges conventional wisdom                                   │
│ ✓ Makes them curious to learn more                                 │
│ ✓ They might share it because it's interesting                     │
│                                                                    │
│ Fail Signs:                                                        │
│ ✗ Obvious, expected, nothing new                                   │
│ ✗ They've heard similar ideas before                               │
│ ✗ No element of surprise or novelty                                │
│                                                                    │
│ Score: □ PASS  □ FAIL                                              │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ CRITERION 2: EMOTIONALLY COMPELLING                                │
│ ────────────────────────────────────                               │
│                                                                    │
│ Question: Does it trigger curiosity, desire, fear, or hope?        │
│                                                                    │
│ Test: Is there a VISCERAL reaction when they hear it?              │
│                                                                    │
│ Pass Signs:                                                        │
│ ✓ They feel something (not just think something)                   │
│ ✓ Creates urgency to know more                                     │
│ ✓ Connects to deep desires or fears                                │
│ ✓ They can't ignore it                                             │
│                                                                    │
│ Fail Signs:                                                        │
│ ✗ Intellectually interesting but emotionally flat                  │
│ ✗ They can easily scroll past                                      │
│ ✗ No sense of "I need to know this"                                │
│                                                                    │
│ Score: □ PASS  □ FAIL                                              │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ CRITERION 3: UNIQUE AND OWNABLE                                    │
│ ──────────────────────────────                                     │
│                                                                    │
│ Question: Can you legitimately claim this? Could competitors?      │
│                                                                    │
│ Test: Would this still be TRUE if a competitor said it?            │
│                                                                    │
│ Pass Signs:                                                        │
│ ✓ Based on something genuinely unique to you                       │
│ ✓ Competitors can't easily copy the claim                          │
│ ✓ Tied to specific method, discovery, or origin                    │
│ ✓ You can defend it with proof                                     │
│                                                                    │
│ Fail Signs:                                                        │
│ ✗ Generic claim anyone could make                                  │
│ ✗ Competitor could say exact same thing                            │
│ ✗ No defensible uniqueness                                         │
│                                                                    │
│ Score: □ PASS  □ FAIL                                              │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ CRITERION 4: SINGLE-MINDED                                         │
│ ─────────────────────────                                          │
│                                                                    │
│ Question: Is it ONE clear idea, not a collection of concepts?      │
│                                                                    │
│ Test: Can you state it in ONE sentence without "and"?              │
│                                                                    │
│ Pass Signs:                                                        │
│ ✓ One central concept                                              │
│ ✓ Easy to remember and repeat                                      │
│ ✓ No multiple competing messages                                   │
│ ✓ Clear and focused                                                │
│                                                                    │
│ Fail Signs:                                                        │
│ ✗ Multiple ideas jammed together                                   │
│ ✗ Uses "and" to connect separate concepts                          │
│ ✗ Tries to say too much                                            │
│ ✗ Confusing or hard to summarize                                   │
│                                                                    │
│ Score: □ PASS  □ FAIL                                              │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ CRITERION 5: RELEVANT                                              │
│ ─────────────────────                                              │
│                                                                    │
│ Question: Is it directly connected to what they want to achieve?   │
│                                                                    │
│ Test: Does it lead naturally to the purchase decision?             │
│                                                                    │
│ Pass Signs:                                                        │
│ ✓ Directly tied to their desired outcome                           │
│ ✓ Naturally leads to your solution                                 │
│ ✓ Addresses what keeps them up at night                            │
│ ✓ They see immediate application                                   │
│                                                                    │
│ Fail Signs:                                                        │
│ ✗ Interesting tangent that doesn't drive action                    │
│ ✗ Cool idea but not connected to purchase                          │
│ ✗ Educates without motivating                                      │
│                                                                    │
│ Score: □ PASS  □ FAIL                                              │
└────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════
SCORING MATRIX
═══════════════════════════════════════════════════════════════════════

Fill in for each potential Big Idea:

| Big Idea | I-I | E-C | U-O | S-M | REL | TOTAL | VERDICT    |
|----------|-----|-----|-----|-----|-----|-------|------------|
| #1       | □   | □   | □   | □   | □   | /5    |            |
| #2       | □   | □   | □   | □   | □   | /5    |            |
| #3       | □   | □   | □   | □   | □   | /5    |            |
| #4       | □   | □   | □   | □   | □   | /5    |            |
| #5       | □   | □   | □   | □   | □   | /5    |            |

SCORING KEY:
- 5/5 = STRONG ✅ Proceed with confidence
- 4/5 = WORKABLE 🔄 Strengthen the weak criterion
- 3/5 or less = WEAK ❌ Go back and dig deeper
```

### Step 4: One-Sentence Test

The winning Big Idea must pass the one-sentence test:

```
═══════════════════════════════════════════════════════════════════════
THE ONE-SENTENCE TEST
═══════════════════════════════════════════════════════════════════════

PURPOSE: If you can't state your Big Idea in ONE clear sentence,
it's not focused enough.

TEMPLATE OPTIONS:

TEMPLATE A (Promise + Mechanism):
"[Audience] can now [achieve result] by [unique mechanism/approach],
even if [common obstacle they believe prevents them]."

Example:
"Entrepreneurs can now build 6-figure businesses by working just
4 hours a day, even if they have no prior business experience—
because the key isn't working harder, it's leveraging systems."


TEMPLATE B (Discovery/Secret):
"[New discovery/insight] reveals why [common approach fails] and
how [your approach] finally makes [desired result] possible."

Example:
"A Stanford sleep study reveals why counting sheep actually makes
insomnia worse, and how a simple 2-minute reset technique finally
makes falling asleep in under 10 minutes possible."


TEMPLATE C (Contrarian):
"Contrary to what you've been told about [topic], [contrarian insight]
is the real key to [achieving desired outcome]."

Example:
"Contrary to what you've been told about social media marketing,
posting LESS is the real key to getting more engagement and sales."


TEMPLATE D (Identity Shift):
"For [specific person] who [situation], [product/solution] is the
[category] that [unique benefit], because [unique mechanism/reason]."

Example:
"For busy professionals who want to get fit, StrongFast is the
workout program that builds muscle in just 20 minutes a day,
because it uses high-intensity metabolic conditioning instead of
endless hours of cardio."


WRITE YOUR ONE-SENTENCE BIG IDEA:

_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

VALIDATION:
□ Can be stated in ONE sentence (no run-ons)
□ Includes the Primary Promise (what they get)
□ Has element of uniqueness (what's different)
□ Is Intellectually Interesting (fresh angle)
□ Is Emotionally Compelling (creates reaction)
□ Is Relevant (leads to purchase)
```

### Step 5: Compile Final Output

```
═══════════════════════════════════════════════════════════════════════
BIG MARKETING IDEA - FINAL DOCUMENT
═══════════════════════════════════════════════════════════════════════

## PROJECT INFORMATION

Product/Service: _______________________
Target Market: _______________________
Primary Promise: _______________________
Date Created: _______________________

---

## BIG MARKETING IDEA

### One-Sentence Statement:
"_________________________________________________________________
_________________________________________________________________"

### The Core Insight:
[1-2 sentences explaining the intellectual foundation]

### The Emotional Hook:
[1-2 sentences explaining why this resonates emotionally]

### Why It's Unique:
[1-2 sentences explaining what makes this ownable]

---

## 5 CRITERIA VALIDATION

| Criterion                  | Score | Notes                    |
|---------------------------|-------|--------------------------|
| Intellectually Interesting | ✅/❌ |                          |
| Emotionally Compelling     | ✅/❌ |                          |
| Unique and Ownable         | ✅/❌ |                          |
| Single-Minded              | ✅/❌ |                          |
| Relevant                   | ✅/❌ |                          |
| **TOTAL**                  | /5    |                          |

---

## SUPPORTING ELEMENTS

### Key Contrarian Insight:
[What does the market believe that's wrong?]

### Hidden Cause/Problem Mechanism:
[What's really causing their failure?]

### Fresh Angle/Perspective:
[How should they see this differently?]

---

## INTEGRATION NOTES

### Lead Type Recommended:
[Story | Problem | Discovery | Secret | Prediction]

### Headline Direction:
[Draft headline or template based on Big Idea]

### Campaign Theme:
[How this Big Idea carries through the funnel]

---

## NEXT STEPS

1. □ Validate with sample audience (if time permits)
2. □ Develop full Unique Mechanism (if not done) → create-unique-mechanism.md
3. □ Create headlines based on Big Idea → create-headlines.md
4. □ Use in Lead architecture
5. □ Brief all copy assets with this document

---

Generated: [Date]
Framework: Todd Brown Big Idea Architecture
Agent: @todd-brown
```

## Output Format

```yaml
big_idea_document:
  project:
    product_name: [name]
    target_market: [audience]
    primary_promise: [main result]

  big_idea:
    one_sentence: "[Complete statement]"
    core_insight: "[Intellectual foundation]"
    emotional_hook: "[Why it resonates]"
    uniqueness: "[Why it's ownable]"

  criteria_validation:
    intellectually_interesting: PASS | FAIL
    emotionally_compelling: PASS | FAIL
    unique_and_ownable: PASS | FAIL
    single_minded: PASS | FAIL
    relevant: PASS | FAIL
    total_score: X/5
    verdict: STRONG | WORKABLE | WEAK

  supporting_elements:
    contrarian_insight: "[Market belief that's wrong]"
    hidden_cause: "[Real reason for failure]"
    fresh_angle: "[New perspective]"

  integration:
    lead_type_recommended: story | problem | discovery | secret | prediction
    headline_direction: "[Draft or template]"
    campaign_theme: "[How it carries through]"

exploration_log:
  techniques_used: [list of techniques from Step 2]
  ideas_generated: [count]
  ideas_tested: [count]
  winning_idea_source: [which technique produced the winner]
```

## Common Mistakes to Avoid

```
MISTAKE 1: TOO VAGUE
─────────────────────
❌ "Our method helps you lose weight faster"
✅ "The 'Metabolic Reset' approach that works WITH your body's
   survival instincts instead of against them"

WHY: Vague ideas pass through without stopping attention


MISTAKE 2: MULTIPLE IDEAS JAMMED TOGETHER
─────────────────────────────────────────
❌ "Lose weight AND build muscle AND boost energy AND improve sleep"
✅ "The single metabolic switch that controls whether you burn or store fat"

WHY: Multiple ideas = no idea. Pick ONE and commit.


MISTAKE 3: INTELLECTUALLY INTERESTING BUT NOT EMOTIONAL
───────────────────────────────────────────────────────
❌ "Research shows compound X affects mitochondrial function"
✅ "The hidden reason your body fights AGAINST every diet you try
   (and the simple fix that makes losing weight almost effortless)"

WHY: People buy on emotion, justify with logic. Need both.


MISTAKE 4: EMOTIONAL BUT NOT DEFENSIBLE
───────────────────────────────────────
❌ "Revolutionary breakthrough melts fat overnight!"
✅ "The compound doctors have been prescribing for 40 years that
   most people have never heard of for weight loss"

WHY: Hype without proof destroys credibility


MISTAKE 5: NOT CONNECTED TO PURCHASE
────────────────────────────────────
❌ "Fascinating new research on sleep cycles"
✅ "Why everything you know about falling asleep is wrong—and the
   2-minute technique that fixes it tonight"

WHY: Education without motivation doesn't convert


MISTAKE 6: SURFACE-LEVEL THINKING
────────────────────────────────
❌ Generating ideas without deep E1 research
✅ Digging through E1 insights to find non-obvious connections

WHY: "99/100 times, the Big Idea comes from digging deep"
```

## Quick Reference

### Todd Brown's Core Insights

```
"Without a Big Idea, you're just another competitor making noise."

"We don't write a single word of copy until we nail the idea."

"The 'how' differentiates more than the 'what'."

"People don't want better, they want different.
Different IS perceived as better."

"The number one problem of all weak copywriting is a lack of
a single, unifying big idea."
```

### The 5 Criteria Checklist

```
□ Intellectually Interesting - "I never saw it that way"
□ Emotionally Compelling - Creates visceral reaction
□ Unique and Ownable - Only you can claim this
□ Single-Minded - ONE clear concept
□ Relevant - Connected to desired outcome
```

### Big Idea Formula

```
E-C (P-P + U-M) I-I

Emotionally Compelling (Primary Promise + Unique Mechanism)
Intellectually Interesting
```

## Integration

- **Prerequisites**: E1 research complete (diagnose-awareness-level.md, avatar-research.md)
- **Related (deeper)**: create-unique-mechanism.md (full mechanism development)
- **Used by**: create-headlines.md, create-sales-page.md, vsl-script.md, create-ad-copy.md
- **Checklists**: copy-quality-checklist.md
- **Agent**: @todd-brown (Tier 2 - Systematizers)

## When to Use This vs. create-unique-mechanism.md

| Scenario | Use This Task | Use create-unique-mechanism.md |
|----------|---------------|--------------------------------|
| Quick ideation session | ✅ | |
| Repositioning existing product | ✅ | |
| Validating concept before deep work | ✅ | |
| Need Problem + Solution Mechanisms | | ✅ |
| Building complete campaign foundation | | ✅ |
| Entering Stage 3+ sophisticated market | | ✅ |
| Full E5 Method execution | | ✅ |

---

*Task Version: 1.0*
*Created: 2026-01-23*
*Framework: Todd Brown Big Idea Architecture - 5 Criteria*
*Agent: @todd-brown*


---

## Referência: references/create-campaign-brief.md

# Create Campaign Brief

Interactive task that guides the user through creating a `campaign-brief.yaml` for a specific product campaign. Auto-fills what it can from loaded product context and asks for what's missing.

## Metadata

```yaml
task:
  name: Create Campaign Brief
  id: create-campaign-brief
  version: "1.0.0"
  category: strategy
  estimated_time: "10-20 min"
  primary_agents:
    - copy-chief
  elicit: true
  outputs:
    - campaign-brief.yaml
  template: "templates/content/campaign-brief.yaml"
```

---

## Purpose

Create the minimum viable campaign brief that unlocks copy creation commands. This is the gate artifact — without it, all creation commands (`*ads`, `*sales-page`, `*vsl`, etc.) remain blocked.

---

## Required Inputs

```yaml
required:
  - business_slug (from session context or --business arg)
  - product_slug (from session context or --product arg)

optional:
  - campaign_slug (if not provided, generate from objective + date)
```

---

## Workflow

### Step 0: Load Product Context (Auto)

Load from session context — DO NOT ask the user for data that already exists:

```yaml
auto_fill_from:
  icp: "{pasta}/company/icp.yaml"
  brandbook: "{pasta}/brand/brandbook.yaml"
  offerbook: "{pasta}/products/{product}/offerbook.yaml"
  proof: "{pasta}/products/{product}/proof.yaml"
  testimonials: "{pasta}/products/{product}/testimonials.yaml"
  pricing: "{pasta}/operations/pricing-strategy.yaml"
```

### Step 1: Campaign Identity (Elicit)

Ask the user:

```
1. Qual o OBJETIVO principal desta campanha?
   (Ex: vender turma 2, captar leads, remarketing, lançamento)

2. Qual o nome/slug da campanha?
   (Ex: turma2-lancamento-abril, ads-cohort-advanced-q2)
   → Se não souber, eu gero baseado no objetivo + data.

3. Qual o período da campanha?
   (Ex: 15/03 a 08/04/2026)
```

### Step 2: Channels & Assets (Elicit)

Ask the user:

```
4. Quais CANAIS serão usados? (marque os que aplicam)
   [ ] Meta Ads (Feed + Stories + Reels)
   [ ] Google Ads (Search + YouTube)
   [ ] TikTok Ads
   [ ] Email marketing
   [ ] WhatsApp
   [ ] Orgânico (Instagram/YouTube/X)
   [ ] Landing page / Sales page
   [ ] Webinar / VSL
   [ ] Outro: ___

5. Quais ASSETS precisam ser criados?
   [ ] Anúncios (copy de ads)
   [ ] Página de vendas / Landing page
   [ ] Email sequence
   [ ] VSL / Webinar script
   [ ] Headlines / Hooks
   [ ] WhatsApp messages
   [ ] Outro: ___
```

### Step 3: Audience Slice (Elicit — only what's NOT in ICP)

Show the user what was auto-loaded from ICP, then ask:

```
ICP carregado: {icp_name} ({icp_age_range}, {n} archetypes)

6. Para esta campanha, qual SEGMENTO priorizar?
   [ ] Todos os archetypes
   (listar archetypes carregados do icp.yaml dinamicamente)

7. Qual o NÍVEL DE CONSCIÊNCIA do público desta campanha?
   [ ] Unaware (não sabe que tem o problema)
   [ ] Problem-aware (sabe que tem o problema)
   [ ] Solution-aware (sabe que existem soluções)
   [ ] Product-aware (conhece o produto mas não comprou)
   [ ] Most-aware (já conhece, precisa do push final)

8. Tráfego: frio, morno ou quente?
   [ ] Frio (nunca ouviu falar)
   [ ] Morno (já viu conteúdo/live)
   [ ] Quente (já está na lista/comunidade)
```

### Step 4: Offer & CTA (Elicit — fill from offerbook, confirm)

Show what was auto-loaded, ask for confirmation/overrides:

```
Oferta carregada: {product_name} (do offerbook.yaml)
Preço carregado: {price} ({vagas} vagas)

9. O preço e condições para esta campanha são os mesmos?
   Se diferente, qual o preço/parcelamento?

10. Qual o CTA principal?
    [ ] Link para página de vendas
    [ ] Link para WhatsApp
    [ ] Link para formulário de aplicação
    [ ] Link para webinar/VSL
    [ ] Outro: ___

11. Existe escassez REAL para esta campanha?
    (Ex: 50 vagas, data limite, bônus expirando)
```

### Step 5: Mood & Constraints (Elicit)

```
12. Qual o MOOD da campanha? (selecione 1-2)
    [ ] Urgente / escassez (últimas vagas, tempo acabando)
    [ ] Inspiracional (transformação, sonho, possibilidade)
    [ ] Proof-heavy (resultados, números, depoimentos)
    [ ] Provocativo (desafio, confronto de crenças)
    [ ] Educacional (demonstração de valor, conteúdo)
    [ ] Emocional (histórias de transformação)

13. Existe alguma RESTRIÇÃO ou DON'T específico?
    (Além dos forbidden words da marca)

14. Referências visuais ou de copy?
    (Links, exemplos, campanhas anteriores)
```

### Step 6: Success Metrics (Elicit)

```
15. Como medir SUCESSO desta campanha?
    [ ] CPL (Custo por Lead) — target: R$___
    [ ] CPA (Custo por Aquisição) — target: R$___
    [ ] ROAS — target: ___x
    [ ] Vagas preenchidas — target: ___/50
    [ ] CTR — target: ___%
    [ ] Outro: ___
```

### Step 7: Generate & Save

1. Compile all answers into `campaign-brief.yaml`
2. Auto-fill `source_of_truth` with canonical file paths
3. Auto-fill `proof` section from loaded proof.yaml and testimonials.yaml
4. Auto-fill `constraints.brand_constraints` from brandbook.yaml forbidden words
5. Save to `{pasta}/copy/{campaign_slug}/campaign-brief.yaml`
6. Update session context with campaign_slug via `set-active-context.cjs`
7. Show confirmation with the gate status

### Step 8: Verify Gate

Run `node (script do runtime de origem; não se aplica no Hermes)` and show result.

If ALLOWED, show the now-unlocked creation commands.

---

## Output Contract

File saved to: `{pasta}/copy/{campaign_slug}/campaign-brief.yaml`

Session context updated with `campaign_slug`.

---

## Quality Checklist

- [ ] All 15 questions answered or explicitly skipped
- [ ] Auto-filled data traced to source files (no invention)
- [ ] campaign_slug is explicit and slugified
- [ ] File saved to correct path
- [ ] Session context updated
- [ ] Gate check returns ALLOWED after save

---

## Guardrails

1. DO NOT invent answers — if the user doesn't know, mark as `TBD` and note it as a blocker.
2. DO NOT skip the elicitation — this task is interactive by design.
3. Auto-fill aggressively from loaded context — minimize user effort.
4. If pricing is `nao_divulgado_publicamente` in source, ask the user explicitly.
5. The brief is MINIMUM VIABLE — it unlocks the gate. The full campaign planning pack (`*campaign-planning-pack`) adds message architecture, creative brief, and asset briefs on top.


---

## Referência: references/create-lead-magnet.md

# Create Lead Magnet Task

## Purpose
Criar copy para lead magnets (iscas digitais) que convertem visitantes em leads qualificados.

## Inputs

```yaml
required:
  - lead_magnet_type: ebook | checklist | template | video | webinar | quiz | calculator | swipe_file
  - topic: Tema do lead magnet
  - target_avatar: Público-alvo
  - main_problem: Problema que resolve

optional:
  - next_offer: Produto que será vendido depois
  - urgency: Se há limite de tempo
  - delivery_method: Email | página de obrigado | ambos
  - copywriter_preference: Estilo preferido
```

## Lead Magnet Types

### 1. Ebook/Guide
```yaml
ideal_for: Educação profunda
length: 10-50 páginas
conversion: Alta percepção de valor
example: "O Guia Definitivo para [RESULTADO]"
```

### 2. Checklist
```yaml
ideal_for: Ação rápida
length: 1-3 páginas
conversion: Alta (fácil de consumir)
example: "Checklist de [NÚMERO] Passos para [RESULTADO]"
```

### 3. Template/Swipe File
```yaml
ideal_for: Economia de tempo
length: Varia
conversion: Muito alta (valor imediato)
example: "[NÚMERO] Templates de [TÓPICO] Prontos para Usar"
```

### 4. Video Training
```yaml
ideal_for: Demonstração
length: 10-30 minutos
conversion: Alta (engajamento)
example: "Masterclass: Como [RESULTADO] em [TEMPO]"
```

### 5. Quiz/Assessment
```yaml
ideal_for: Segmentação
length: 5-15 perguntas
conversion: Muito alta (interativo)
example: "Descubra Seu [TIPO/PERFIL] em [TEMPO]"
```

### 6. Calculator/Tool
```yaml
ideal_for: Valor tangível
length: N/A
conversion: Alta (utilidade)
example: "Calculadora de [MÉTRICA]"
```

## Landing Page Structure

### Above the Fold
```markdown
# [HEADLINE - Benefício principal]

[SUBHEADLINE - Especifica ou qualifica]

[IMAGEM/MOCKUP do lead magnet]

[FORM - Nome + Email]
[BOTÃO - CTA específico]
```

### Below the Fold (opcional)
```markdown
## O Que Você Vai Aprender/Receber

- ✅ [Benefício 1]
- ✅ [Benefício 2]
- ✅ [Benefício 3]

## Para Quem É

- [Avatar ideal]
- [Situação específica]

## Sobre [VOCÊ/EMPRESA]

[Mini bio - credibilidade]
```

## Headline Formulas for Lead Magnets

### Template/Checklist Headlines
```
- "Checklist de [NÚMERO] Pontos para [RESULTADO]"
- "[NÚMERO] Templates de [TÓPICO] (Copie e Use)"
- "O [ADJETIVO] Checklist para Nunca Esquecer [AÇÃO]"
```

### Ebook/Guide Headlines
```
- "O Guia [DEFINITIVO/COMPLETO] para [RESULTADO]"
- "Como [RESULTADO] - O Manual Passo-a-Passo"
- "[NÚMERO] Segredos de [AUTORIDADE] para [RESULTADO]"
```

### Video Headlines
```
- "Masterclass Gratuita: [RESULTADO] em [TEMPO]"
- "[NÚMERO] Minutos para Dominar [TÓPICO]"
- "Workshop: De [ANTES] para [DEPOIS]"
```

### Quiz Headlines
```
- "Descubra Seu [TIPO] de [TÓPICO]"
- "Qual [PERFIL] Você É? (Quiz de [TEMPO])"
- "Avaliação: Seu [MÉTRICA] Score"
```

## CTA Variations

### Download-focused
```
- "Baixar Agora (Grátis)"
- "Quero Meu [LEAD MAGNET]"
- "Enviar Para Meu Email"
```

### Access-focused
```
- "Acessar Gratuitamente"
- "Quero Acesso Imediato"
- "Liberar Meu Acesso"
```

### Action-focused
```
- "Começar Agora"
- "Quero [RESULTADO]"
- "Sim, Quero [BENEFÍCIO]"
```

## Thank You Page Copy

```markdown
# 🎉 Pronto! Seu [LEAD MAGNET] Está a Caminho!

Enviamos para [EMAIL] - verifique sua caixa de entrada (e spam, por via das dúvidas).

## Enquanto Isso...

[SOFT PITCH para próximo passo - video, oferta tripwire, agendar call]

---

*Tem alguma dúvida? Responda o email de entrega.*
```

## Email de Entrega

```markdown
Subject: Seu [LEAD MAGNET] chegou! 🎁

[NOME],

Prometido é prometido - aqui está seu [LEAD MAGNET]:

👉 [LINK DE DOWNLOAD]

[1-2 parágrafos sobre como usar/próximos passos]

Qualquer dúvida, é só responder este email.

[ASSINATURA]

PS: [SOFT PITCH - próximo conteúdo ou oferta]
```

## Output Deliverables

```yaml
deliverables:
  - landing_page_copy:
      - headline (+ 3 variações)
      - subheadline
      - bullet_points
      - cta_button
      - mini_bio (se necessário)
  - thank_you_page_copy
  - delivery_email
  - lead_magnet_title (+ variações)
  - follow_up_sequence_outline (3 emails)
```

## Quality Checklist

- [ ] Headline promete benefício específico
- [ ] Lead magnet resolve problema real
- [ ] Value proposition clara em <10 segundos
- [ ] CTA específico e action-oriented
- [ ] Forma pede mínimo necessário
- [ ] Thank you page tem próximo passo
- [ ] Email de entrega prepara para venda

---

*Task Version: 1.0*


---

## Referência: references/create-unique-mechanism.md

# Create Unique Mechanism - Todd Brown E5 Method

## Purpose

Create a differentiated Unique Mechanism using Todd Brown's E5 Method framework. This task generates TWO mechanisms: the **Problem Mechanism** (why other approaches failed) and the **Solution Mechanism** (why yours works), plus a **Big Marketing Idea** that makes your offer impossible to ignore.

## When to Use

- **Before writing any copy** - This is foundational strategy
- When entering saturated markets (Stage 3+ sophistication)
- When competitors promise the same results
- When your "what" is commoditized and you need to differentiate by "how"
- When existing copy isn't converting despite good awareness match
- When launching new products or repositioning existing ones

## Todd Brown on Unique Mechanism

```
"People don't want better, they want different.
Often they feel that different IS better.

A Unique Selling Proposition is very rare today.
Unique Mechanism is about showing your prospect
a DIFFERENT WAY to produce the result.

The 'how' differentiates more than the 'what'.
If you can't articulate your Unique Mechanism,
you don't have one."

— Todd Brown, Marketing Funnel Automation
```

## The TWO Mechanisms Framework

```
┌─────────────────────────────────────────────────────────────────┐
│              THE TWO MECHANISMS FRAMEWORK                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   PROBLEM MECHANISM                SOLUTION MECHANISM            │
│   ────────────────                 ──────────────────            │
│   WHY they failed                  WHY yours works               │
│                                                                  │
│   "The REAL reason                 "The UNIQUE way               │
│    diets don't work                 our method works             │
│    is [mechanism]"                  is [mechanism]"              │
│                                                                  │
│              ↓                              ↓                    │
│                                                                  │
│              └────────────┬────────────────┘                     │
│                           │                                      │
│                           ▼                                      │
│                    BIG MARKETING IDEA                            │
│                                                                  │
│              "The single concept that makes                      │
│               your offer impossible to ignore"                   │
│                                                                  │
│   Formula: E-C (P-P+U-M) I-I                                    │
│   Emotionally Compelling (Primary Promise + Unique Mechanism)    │
│   Intellectually Interesting                                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Inputs

```yaml
required:
  - product_name: What you're selling
  - target_market: Who you're selling to
  - main_promise: Your primary benefit/result
  - awareness_level: From diagnose-awareness-level.md (1-5)
  - sophistication_stage: From diagnose-market-sophistication.md (1-5)

optional:
  - competitor_mechanisms: What mechanisms competitors use
  - failed_approaches: What your audience has tried that didn't work
  - product_features: List of features/components
  - origin_story: How you discovered/created this
  - scientific_backing: Research, studies, data
```

## Workflow

### Step 1: Pre-Work Validation

Before creating mechanisms, validate you're at the right stage:

```
SOPHISTICATION CHECK:

□ Is your market at Stage 3 or higher?
  - Stage 1-2: Simple claims may work, mechanism optional
  - Stage 3+: Mechanism REQUIRED for differentiation

□ Have competitors already used mechanisms?
  - If YES: Your mechanism must be DIFFERENT, not just better
  - If NO: You have first-mover advantage

□ Do you have something genuinely unique?
  - Process, ingredient, discovery, origin, or contrarian approach
  - If nothing unique: Go back to research/product development

⚠️ WARNING: Don't manufacture fake mechanisms.
   They must be REAL and DEFENSIBLE.
```

### Step 2: Problem Mechanism Development

The Problem Mechanism explains WHY other approaches failed. This builds credibility and sets up your solution.

```
═══════════════════════════════════════════════════════════════════
PROBLEM MECHANISM DEVELOPMENT
═══════════════════════════════════════════════════════════════════

PURPOSE: Explain why everything else has failed for your prospect.
This validates their past struggles and positions your solution.

QUESTION TO ANSWER:
"What is the REAL REASON my prospects haven't succeeded yet?"

DISCOVERY PROCESS:

1. LIST ALL COMMON APPROACHES in your market:
   □ What do most people/products recommend?
   □ What has your prospect already tried?
   □ What does conventional wisdom say?

2. IDENTIFY THE FLAW in each approach:
   □ Why does it fail?
   □ What does it miss?
   □ What hidden factor does it ignore?

3. FIND THE ROOT CAUSE:
   □ What's the ONE THING that explains all failures?
   □ Is it a missing element? Wrong approach? Hidden blocker?
   □ Can you name it specifically?

4. NAME THE PROBLEM MECHANISM:
   □ Give it a memorable, proprietary name
   □ Make it sound scientific/specific
   □ It should be something they've never heard of

EXAMPLES:

WEIGHT LOSS:
- Common approaches: Diet, exercise, willpower
- Why they fail: Ignore hormonal regulation
- Root cause: "Metabolic Adaptation Response"
- Problem Mechanism: "Your body's 'Survival Mode' that fights
  weight loss the harder you try"

BUSINESS:
- Common approaches: More content, more ads, more hustle
- Why they fail: Ignore conversion fundamentals
- Root cause: Messaging-market mismatch
- Problem Mechanism: "The Invisible Traffic Leak that wastes
  87% of your marketing budget"

FILL IN YOUR PROBLEM MECHANISM:

Common approaches in my market:
1. _______________________
2. _______________________
3. _______________________

Why they fail:
_______________________

Root cause:
_______________________

Problem Mechanism Name:
"The _______________________ [that/which] _______________________"
```

### Step 3: Solution Mechanism Development

The Solution Mechanism explains HOW your approach works differently.

```
═══════════════════════════════════════════════════════════════════
SOLUTION MECHANISM DEVELOPMENT
═══════════════════════════════════════════════════════════════════

PURPOSE: Explain SPECIFICALLY how your solution overcomes the
Problem Mechanism and delivers the promised result.

QUESTION TO ANSWER:
"What is the UNIQUE WAY my solution achieves the result?"

MECHANISM TYPES (Choose one or combine):

┌─────────────────────────────────────────────────────────────────┐
│ TYPE 1: PROCESS MECHANISM                                       │
│ ─────────────────────────                                       │
│ A unique method, system, or process                             │
│                                                                 │
│ Pattern: "The [Number]-Step [Name] [Method/System/Protocol]"    │
│                                                                 │
│ Examples:                                                       │
│ - "The 3-Phase Metabolic Reset Protocol"                        │
│ - "The E5 Customer Acquisition Method"                          │
│ - "The 4-Day Cash Machine System"                               │
│                                                                 │
│ Best for: Courses, coaching, business systems                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TYPE 2: INGREDIENT MECHANISM                                    │
│ ──────────────────────────                                      │
│ A specific component or element that creates the result         │
│                                                                 │
│ Pattern: "The [Name] [Compound/Extract/Element]"                │
│                                                                 │
│ Examples:                                                       │
│ - "The X-47 Thermogenic Compound"                               │
│ - "The Alpine Adaptogen Extract"                                │
│ - "The Neural-Sync Frequency Pattern"                           │
│                                                                 │
│ Best for: Supplements, skincare, physical products              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TYPE 3: DISCOVERY MECHANISM                                     │
│ ─────────────────────────                                       │
│ Based on a new finding, research, or revelation                 │
│                                                                 │
│ Pattern: "The [Recently/Newly] Discovered [Name]"               │
│                                                                 │
│ Examples:                                                       │
│ - "The Stanford Sleep Switch Discovery"                         │
│ - "The Hidden Algorithm Pattern Researchers Just Found"         │
│ - "The Lost Manuscript Method from 1920s Wall Street"           │
│                                                                 │
│ Best for: When you have real research/discovery to reference    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TYPE 4: SPEED MECHANISM                                         │
│ ────────────────────────                                        │
│ Focused on faster/more efficient delivery                       │
│                                                                 │
│ Pattern: "The [Time] [Name] [Technique/Approach]"               │
│                                                                 │
│ Examples:                                                       │
│ - "The 15-Minute Morning Metabolism Hack"                       │
│ - "The 48-Hour Launch Protocol"                                 │
│ - "The 3-Second Stress Reset Technique"                         │
│                                                                 │
│ Best for: When speed/efficiency is key differentiator           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TYPE 5: ORIGIN MECHANISM                                        │
│ ────────────────────────                                        │
│ Based on where/how it was discovered                            │
│                                                                 │
│ Pattern: "The [Origin] [Name] [Secret/Method]"                  │
│                                                                 │
│ Examples:                                                       │
│ - "The Okinawan Longevity Secret"                               │
│ - "The Silicon Valley Productivity Protocol"                    │
│ - "The Navy SEAL Mental Toughness Method"                       │
│                                                                 │
│ Best for: When you have compelling origin story                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TYPE 6: CONTRARIAN MECHANISM                                    │
│ ──────────────────────────                                      │
│ Does the OPPOSITE of conventional wisdom                        │
│                                                                 │
│ Pattern: "The Counter-Intuitive [Name] Approach"                │
│                                                                 │
│ Examples:                                                       │
│ - "The 'Eat More, Weigh Less' Metabolic Approach"               │
│ - "The 'Work Less, Earn More' Leverage Method"                  │
│ - "The 'Anti-Exercise' Muscle Building Protocol"                │
│                                                                 │
│ Best for: When conventional approaches have clearly failed      │
└─────────────────────────────────────────────────────────────────┘

DEVELOPMENT PROCESS:

1. EXAMINE your product/service:
   □ What makes it genuinely different?
   □ What's the core process/ingredient/approach?
   □ What do you do that others don't?

2. SELECT mechanism type:
   □ Which type best fits your differentiation?
   □ Can you combine types for stronger positioning?

3. NAME your mechanism:
   □ Use 3-4 words maximum
   □ Include number if possible (adds specificity)
   □ Make it proprietary (only YOU can use this name)
   □ Make it memorable and easy to say

4. EXPLAIN how it works:
   □ Simple enough for a 12-year-old to understand
   □ Scientific/logical enough to be credible
   □ Specific enough to be unique

FILL IN YOUR SOLUTION MECHANISM:

Mechanism Type: _______________________

What makes my solution unique:
_______________________

Solution Mechanism Name:
"The _______________________ [Method/System/Protocol/etc.]"

One-sentence explanation:
"It works by _______________________"
```

### Step 4: Mechanism Connection

Connect the Problem and Solution Mechanisms into a compelling narrative.

```
═══════════════════════════════════════════════════════════════════
MECHANISM CONNECTION
═══════════════════════════════════════════════════════════════════

THE PATTERN:

"The reason [result] has been so hard is [Problem Mechanism].

But once you [address Problem Mechanism] using [Solution Mechanism],
[result] becomes almost automatic."

FILL IN:

The reason _______________________ has been so hard is
_______________________ [Problem Mechanism].

But once you _______________________ using
_______________________ [Solution Mechanism],
_______________________ becomes almost automatic.

EXAMPLE:

"The reason weight loss has been so hard is your body's
'Survival Mode Response' - it actually FIGHTS you the harder
you try to diet.

But once you deactivate this response using the 3-Phase
Metabolic Reset Protocol, fat burning becomes almost automatic
- your body finally WORKS WITH you instead of against you."

VALIDATION:

□ Does this clearly explain WHY they've struggled?
□ Does it position your solution as the ONLY logical answer?
□ Does it feel intellectually satisfying?
□ Would someone nod and say "That makes sense!"?
```

### Step 5: Big Marketing Idea Development

The Big Idea is the single concept that encapsulates your mechanisms and makes your offer impossible to ignore.

```
═══════════════════════════════════════════════════════════════════
BIG MARKETING IDEA DEVELOPMENT
═══════════════════════════════════════════════════════════════════

DEFINITION:
The Big Idea is the central concept that ties everything together.
It's the ONE THING that makes your offer unique and compelling.

THE 5 CRITERIA (All must pass):

┌────────────────────────────────────────────────────────────────┐
│ CRITERION 1: INTELLECTUALLY INTERESTING                        │
│ ──────────────────────────────────────                         │
│                                                                │
│ Test: Does it make the prospect think "Hmm, I never saw it    │
│       that way before"?                                        │
│                                                                │
│ Failure: Obvious, expected, they've heard it before            │
│                                                                │
│ Your Big Idea:                                                 │
│ □ PASS - Makes them think differently                          │
│ □ FAIL - Just another version of what they've heard            │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ CRITERION 2: EMOTIONALLY COMPELLING                            │
│ ─────────────────────────────────────                          │
│                                                                │
│ Test: Does it trigger curiosity, desire, or genuine emotion?   │
│                                                                │
│ Failure: Leaves them indifferent, no visceral reaction         │
│                                                                │
│ Your Big Idea:                                                 │
│ □ PASS - Creates emotional response                            │
│ □ FAIL - Intellectually interesting but emotionally flat       │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ CRITERION 3: UNIQUE AND OWNABLE                                │
│ ───────────────────────────────                                │
│                                                                │
│ Test: Can you legitimately claim this? Can competitors copy?   │
│                                                                │
│ Failure: Anyone in your market could make the same claim       │
│                                                                │
│ Your Big Idea:                                                 │
│ □ PASS - Only you can legitimately make this claim             │
│ □ FAIL - Competitor could easily copy                          │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ CRITERION 4: SINGLE-MINDED                                     │
│ ────────────────────────                                       │
│                                                                │
│ Test: Is it ONE clear idea, not a collection of concepts?      │
│                                                                │
│ Failure: Multiple messages competing for attention             │
│                                                                │
│ Your Big Idea:                                                 │
│ □ PASS - One clear, focused concept                            │
│ □ FAIL - Multiple ideas jammed together                        │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ CRITERION 5: RELEVANT                                          │
│ ────────────────────                                           │
│                                                                │
│ Test: Is it directly connected to what they want to achieve?   │
│                                                                │
│ Failure: Interesting but irrelevant to their purchase decision │
│                                                                │
│ Your Big Idea:                                                 │
│ □ PASS - Directly connected to their desired outcome           │
│ □ FAIL - Interesting tangent that doesn't drive action         │
└────────────────────────────────────────────────────────────────┘

SCORING:
- 5/5 Pass = Strong Big Idea ✅ Proceed with confidence
- 4/5 Pass = Workable 🔄 Strengthen the weak criterion
- 3/5 or less = Weak ❌ Go back and dig deeper

BIG IDEA FORMULA:

E-C (P-P+U-M) I-I

Emotionally Compelling (Primary Promise + Unique Mechanism)
Intellectually Interesting

THE ONE-SENTENCE TEST:

Can you state your Big Idea in ONE sentence that includes:
- The Primary Promise (what they get)
- The Unique Mechanism (how they get it)
- Something Intellectually Interesting (the twist)
- Emotional Resonance (why they care)

Template:
"[Audience] can now [achieve result] by [unique mechanism],
even if [obstacle they believe prevents them]"

Example:
"Women over 40 can now lose stubborn belly fat by resetting their
body's 'Survival Mode' switch, even if diets have never worked
before—because the problem was never willpower, it was hormones."

FILL IN YOUR BIG IDEA:

One-Sentence Big Idea:
_______________________________________________________________
_______________________________________________________________

Does it pass all 5 criteria? □ Yes □ No (go back and revise)
```

### Step 6: Compile Final Output

```
═══════════════════════════════════════════════════════════════════
UNIQUE MECHANISM OUTPUT DOCUMENT
═══════════════════════════════════════════════════════════════════

## PRODUCT/SERVICE:
[Name]

## TARGET MARKET:
[Audience]

## PRIMARY PROMISE:
[The main result/benefit you deliver]

## MARKET SOPHISTICATION:
Level [1-5] - [Name of stage]

---

## PROBLEM MECHANISM

### Name:
"The _______________________"

### What it is:
[1-2 sentence explanation]

### Why it causes failure:
[Why this mechanism prevents success with other approaches]

### How prospects experience it:
[Symptoms, frustrations, signs they have this problem]

---

## SOLUTION MECHANISM

### Name:
"The _______________________"

### Type:
[Process | Ingredient | Discovery | Speed | Origin | Contrarian]

### What it is:
[1-2 sentence explanation]

### How it works:
[Simple explanation of the process/science]

### Why it's different:
[What makes it unique vs. competitors]

### Proof it works:
[Study, testimonial, data that supports it]

---

## BIG MARKETING IDEA

### One-Sentence Statement:
[Your Big Idea in one sentence]

### 5 Criteria Validation:
- Intellectually Interesting: □ Pass □ Fail
- Emotionally Compelling: □ Pass □ Fail
- Unique and Ownable: □ Pass □ Fail
- Single-Minded: □ Pass □ Fail
- Relevant: □ Pass □ Fail

### Score: [X]/5

---

## MECHANISM CONNECTION STATEMENT

[Full paragraph connecting Problem Mechanism → Solution Mechanism]

---

## COPY INTEGRATION NOTES

### Lead Type Recommended:
[Story | Problem | Discovery | Secret | Prediction]

### Headline Direction:
[Template or draft based on mechanism]

### 75/25 Split:
- 75% of copy should focus on: [Mechanism education]
- 25% of copy should focus on: [Offer presentation]

---

## NEXT STEPS

1. □ Use this in create-headlines.md
2. □ Use this in create-sales-page.md or vsl-script.md
3. □ Use this in create-ad-copy.md
4. □ Brief copywriters with this document

---

Generated: [Date]
Framework: Todd Brown E5 Method
```

## Common Mistakes

```
MISTAKE 1: PROBLEM MECHANISM TOO VAGUE
- ❌ "The reason diets fail is they're hard"
- ✅ "The reason diets fail is the Metabolic Adaptation Response -
     your body's primitive survival mechanism that slows your
     metabolism the moment it senses calorie restriction"

MISTAKE 2: SOLUTION MECHANISM SOUNDS LIKE EVERYONE ELSE
- ❌ "Our proven weight loss system"
- ✅ "The Hormonal Reset Protocol that deactivates your body's
     fat-storing response at the cellular level"

MISTAKE 3: NO CONNECTION BETWEEN MECHANISMS
- ❌ Problem: "Diets are hard" / Solution: "Our easy program"
- ✅ Problem: "Your hormones fight weight loss" /
     Solution: "We reset those specific hormones"

MISTAKE 4: BIG IDEA HAS MULTIPLE CONCEPTS
- ❌ "Lose weight, build muscle, boost energy, and feel great
     with our revolutionary system"
- ✅ "Finally end the diet struggle by resetting the ONE hormone
     that controls whether you burn or store fat"

MISTAKE 5: MECHANISM ISN'T DEFENSIBLE
- ❌ Making up scientific-sounding nonsense
- ✅ Basing mechanism on real process, ingredient, or method
     that you can explain and prove
```

## Integration

- **Prerequisites**: diagnose-awareness-level.md, diagnose-market-sophistication.md
- **Used by**: create-headlines.md, create-sales-page.md, vsl-script.md, create-ad-copy.md
- **Related**: create-big-idea.md (standalone Big Idea task)
- **Checklists**: copy-quality-checklist.md
- **Agent**: @todd-brown (Tier 2 - Systematizers)

## Quick Reference

### The Two Questions

1. **Problem Mechanism:** "Why has everything else FAILED for them?"
2. **Solution Mechanism:** "Why does THIS approach WORK differently?"

### Big Idea Formula

**E-C (P-P+U-M) I-I**
- Emotionally Compelling
- Primary Promise + Unique Mechanism
- Intellectually Interesting

### The 75/25 Rule

- **75%** of your copy = Educating about the Unique Mechanism
- **25%** of your copy = Presenting the offer

### Todd Brown's Core Insight

> "Without a Big Idea, you're just another competitor making noise.
> People don't want better, they want DIFFERENT.
> The 'how' differentiates more than the 'what'.
> If you can't articulate your Unique Mechanism, you don't have one."

---

*Task Version: 1.0*
*Created: 2026-01-23*
*Framework: Todd Brown E5 Method - Unique Mechanism Development*
*Agent: @todd-brown*


---

## Referência: references/rmbc-method.md

# rmbc-method

Task completa para criar copy usando o RMBC Method de Stefan Georgi - o sistema de 4 etapas que gerou $700M+ em vendas com 80% de taxa de sucesso.

## TASK METADATA

```yaml
task:
  name: RMBC Method - Complete Copywriting System
  id: rmbc-method
  category: copywriting
  difficulty: intermediate
  time_estimate: "6-10 horas para processo completo"
  agent: stefan-georgi

prerequisites:
  - Produto/serviço definido
  - Acesso a informações do produto
  - Avatar do cliente (ou tempo para pesquisar)

outputs:
  - Research document completo
  - Mechanism statement
  - Brief detalhado
  - Copy final pronta para uso
```

---

## OVERVIEW

O RMBC Method é um sistema de 4 etapas que transforma copywriting de "arte" em "ciência":

```
┌─────────────────────────────────────────────────────────────┐
│                    THE RMBC METHOD                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   R ──→ M ──→ B ──→ C                                       │
│   │     │     │     │                                       │
│   │     │     │     └── COPY (20%)                          │
│   │     │     │         Execute o brief com palavras        │
│   │     │     │                                             │
│   │     │     └── BRIEF (30%)                               │
│   │     │         Esqueleto da copy                         │
│   │     │                                                   │
│   │     └── MECHANISM (20%)                                 │
│   │         O "veículo" que entrega resultados              │
│   │                                                         │
│   └── RESEARCH (30%)                                        │
│       Entender profundamente o prospect                     │
│                                                             │
│   ⚠️ NUNCA PULE ETAPAS - A ordem é crucial!                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**A Grande Verdade:**
> "80% do sucesso é determinado ANTES de você escrever uma palavra de copy."
> — Stefan Georgi

---

## PHASE 1: RESEARCH (R) - 30% do Tempo

### 1.1 O Objetivo da Research

A research não é sobre coletar informação. É sobre responder UMA pergunta:

**"O que meu prospect precisa ACREDITAR para comprar?"**

### 1.2 As 5 Áreas de Research

---

#### ÁREA 1: Avatar Deep Dive

**Objetivo:** Conhecer seu prospect melhor do que ele conhece a si mesmo.

```markdown
## AVATAR RESEARCH TEMPLATE

### Demographics
- Idade: ___
- Gênero: ___
- Renda: ___
- Localização: ___
- Profissão: ___
- Estado civil: ___
- Filhos: ___

### Psychographics
- Valores principais: ___
- Crenças sobre o problema: ___
- Crenças sobre soluções: ___
- Estilo de vida: ___
- Hobbies/interesses: ___

### Situação Atual
- Onde estão agora: ___
- Há quanto tempo têm o problema: ___
- O que já tentaram: ___
- Por que não funcionou: ___
- Nível de consciência (Schwartz): ___
- Nível de sofisticação (Schwartz): ___

### Linguagem
- Frases que usam para descrever o problema: ___
- Palavras emocionais que usam: ___
- Jargão/gírias do nicho: ___
- O que NUNCA dizem (mas pensam): ___
```

**Perguntas de Pesquisa:**

1. Quem é o cliente ideal? (seja específico)
2. Qual é a situação atual deles?
3. O que já tentaram que falhou?
4. O que eles ACREDITAM sobre o problema?
5. Que linguagem usam para descrever sua situação?
6. O que nunca admitiriam para ninguém?
7. Qual seria o resultado dos sonhos?
8. Qual é o maior medo deles?

---

#### ÁREA 2: Pain Point Mining

**Objetivo:** Mapear TODAS as dores, do superficial ao existencial.

```markdown
## PAIN HIERARCHY TEMPLATE

### Dor Superficial (O que contariam a qualquer um)
- Descrição: ___
- Frequência: ___
- Gatilho: ___

### Dor Social (Como afeta relacionamentos/status)
- Com família: ___
- Com amigos: ___
- No trabalho: ___
- Socialmente: ___

### Dor Emocional (Como se sentem sobre si mesmos)
- Frustração: ___
- Vergonha: ___
- Culpa: ___
- Raiva: ___
- Medo: ___

### Dor de Identidade (O que diz sobre quem são)
- Como isso afeta a auto-imagem: ___
- O que significa para eles: ___
- Quem eles NÃO podem ser por causa disso: ___

### Dor Existencial (O medo mais profundo)
- Se nada mudar, o que acontece: ___
- O pior cenário: ___
- O medo que não admitem: ___
```

**Perguntas de Pesquisa:**

1. Qual é o problema superficial?
2. Qual é o problema REAL subjacente?
3. O que este problema CUSTA a eles? (tempo, dinheiro, relacionamentos)
4. Como este problema faz eles se SENTIREM sobre si mesmos?
5. Quais são as consequências de NÃO resolver?
6. Quando a dor é mais aguda? (hora do dia, situação)

---

#### ÁREA 3: Desire Mapping

**Objetivo:** Entender o que eles REALMENTE querem (não apenas o que dizem).

```markdown
## DESIRE MAPPING TEMPLATE

### Desejo Declarado (O que dizem querer)
- Descrição: ___

### Desejo Secreto (O que REALMENTE querem)
- Status/reconhecimento: ___
- Validação: ___
- Vingança/provar errado: ___
- Aprovação: ___
- Liberdade: ___
- Controle: ___

### Visão de Sucesso
- O que PARECE o sucesso: ___
- O que SENTE o sucesso: ___
- Primeiro dia após resolver: ___
- Primeiro mês após resolver: ___
- Um ano depois: ___

### Compartilhamento
- Quem contariam primeiro: ___
- O que diriam: ___
- Como reagiriam os outros: ___
```

**Perguntas de Pesquisa:**

1. Qual é o desejo declarado?
2. Qual é o desejo SECRETO? (status, validação, vingança)
3. Como seria o sucesso visualmente?
4. Como seria o sucesso emocionalmente?
5. O que fariam PRIMEIRO se o problema fosse resolvido?
6. Para quem contariam? O que diriam?

---

#### ÁREA 4: Proof Gathering

**Objetivo:** Coletar TODAS as provas disponíveis.

```markdown
## PROOF ARSENAL TEMPLATE

### Testemunhos
| Nome | Resultado Específico | Situação Antes | Tempo | Fonte |
|------|---------------------|----------------|-------|-------|
|      |                     |                |       |       |

### Estudos/Pesquisas
| Instituição | Descoberta | Tamanho Amostra | Ano | Link |
|-------------|-----------|-----------------|-----|------|
|             |           |                 |     |      |

### Credenciais do Criador
- Formação: ___
- Experiência: ___
- Resultados pessoais: ___
- Clientes notáveis: ___
- Prêmios/reconhecimentos: ___

### Cobertura de Mídia
- Publicações: ___
- TV/Rádio: ___
- Podcasts: ___
- Online: ___

### Números Impressionantes
- Clientes atendidos: ___
- Anos de experiência: ___
- Taxa de sucesso: ___
- Resultados totais: ___
```

---

#### ÁREA 5: Competitive Analysis

**Objetivo:** Saber o que os concorrentes estão fazendo para fazer DIFERENTE.

```markdown
## COMPETITIVE ANALYSIS TEMPLATE

### Concorrente 1: ___
- Promessa principal: ___
- Mecanismo usado: ___
- Preço: ___
- Pontos fortes: ___
- Pontos fracos: ___
- Reviews negativos (objeções reveladas): ___

### Concorrente 2: ___
[Repetir estrutura]

### Concorrente 3: ___
[Repetir estrutura]

### Análise de Gap
- O que TODOS prometem: ___
- O que NINGUÉM promete: ___
- Objeções não endereçadas: ___
- Público sub-atendido: ___
- Nossa diferenciação: ___
```

---

### 1.3 Fontes de Research

| Fonte | O Que Buscar |
|-------|--------------|
| Reviews Amazon (1-3 estrelas) | Objeções, decepções, o que faltou |
| Reviews Amazon (4-5 estrelas) | Benefícios valorizados, linguagem |
| Fóruns/Reddit | Perguntas reais, linguagem, frustrações |
| Grupos Facebook | Discussões, dúvidas, emoções |
| YouTube comments | Feedback, objeções, desejos |
| Suporte/SAC do cliente | Perguntas frequentes, problemas |
| Entrevistas com clientes | Insights profundos, histórias |
| Pesquisas | Dados quantitativos |

### 1.4 Output da Research

```markdown
## RESEARCH DOCUMENT: [Nome do Produto]

### Data: ___
### Autor: ___
### Versão: ___

---

## 1. AVATAR

[Preencher com template completo]

## 2. PAIN POINTS

[Preencher com hierarquia de dores]

## 3. DESIRES

[Preencher com mapeamento de desejos]

## 4. PROOF ARSENAL

[Preencher com todas as provas]

## 5. COMPETITIVE LANDSCAPE

[Preencher com análise competitiva]

## 6. KEY BELIEF

[A ÚNICA coisa que precisam acreditar para comprar]

___________________________________________

## 7. KEY INSIGHTS

- Insight 1: ___
- Insight 2: ___
- Insight 3: ___

## 8. POTENTIAL ANGLES

1. ___
2. ___
3. ___

## 9. RED FLAGS / OBJEÇÕES PRINCIPAIS

1. ___
2. ___
3. ___
```

---

## PHASE 2: MECHANISM (M) - 20% do Tempo

### 2.1 O Que É Um Mecanismo?

O mecanismo é o "VEÍCULO" que entrega o resultado. Não é O QUE o produto faz (benefício), é COMO ele faz.

```
┌─────────────────────────────────────────────────────────────┐
│           BENEFÍCIO vs MECANISMO                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ BENEFÍCIO: O que você promete                               │
│ "Perca 10kg em 30 dias"                                     │
│                                                             │
│ MECANISMO: COMO você entrega                                │
│ "O Protocolo de Reset Metabólico que reprograma seus       │
│  hormônios queimadores de gordura no nível celular"         │
│                                                             │
│ O mecanismo torna o benefício ACREDITÁVEL                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Por Que o Mecanismo É Crucial

Seu prospect já viu dezenas de promessas iguais à sua. Eles são céticos. Já foram queimados antes.

O mecanismo responde: **"Por que ISSO é diferente?"**

Sem mecanismo = mais uma promessa vazia.
Com mecanismo = a resposta que estavam procurando.

### 2.3 Tipos de Mecanismo

---

#### TIPO 1: Mecanismo Científico/Biológico

**Descrição:** Baseado em um processo fisiológico ou científico.

**Exemplo:**
- "A enzima que quebra gordura visceral"
- "O neurotransmissor que controla seu apetite"
- "O hormônio do 'interruptor metabólico'"

**Quando usar:** Produtos de saúde, fitness, anti-aging, suplementos.

---

#### TIPO 2: Mecanismo de Descoberta

**Descrição:** Baseado em uma nova descoberta ou pesquisa.

**Exemplo:**
- "O composto que cientistas acidentalmente descobriram"
- "A técnica que um estudo de Harvard revelou"
- "O método que médicos militares usam secretamente"

**Quando usar:** Quando você tem pesquisa legítima ou história de descoberta.

---

#### TIPO 3: Mecanismo de Sistema/Método

**Descrição:** Baseado em um processo passo a passo.

**Exemplo:**
- "O Sistema RMBC de 4 Etapas"
- "O Método 'Gatilho de Riqueza' de 3 Passos"
- "O Protocolo de 7 Dias"

**Quando usar:** Produtos educacionais, cursos, business.

---

#### TIPO 4: Mecanismo de Ingrediente

**Descrição:** Baseado em um ingrediente ou componente específico.

**Exemplo:**
- "A 'molécula milagrosa' de uma planta de alta altitude"
- "O extrato que monges tibetanos usam há 1.000 anos"
- "O mineral raro encontrado apenas na Patagônia"

**Quando usar:** Suplementos, skincare, produtos de saúde.

---

#### TIPO 5: Mecanismo de Origem

**Descrição:** Baseado em onde/como foi descoberto.

**Exemplo:**
- "O segredo que aldeões japoneses guardam há gerações"
- "A técnica que uma tribo africana usa para longevidade"
- "O método perdido dos antigos gregos"

**Quando usar:** Quando você tem uma história de origem compelling.

---

#### TIPO 6: Mecanismo Contrário

**Descrição:** Baseado em fazer o OPOSTO da sabedoria convencional.

**Exemplo:**
- "Por que comer MAIS gordura queima MAIS gordura"
- "O método 'anti-exercício' que constrói músculo"
- "Por que NÃO economizar te faz mais rico"

**Quando usar:** Quando as abordagens convencionais falharam para seu público.

---

### 2.4 Teste de Força do Mecanismo

**Responda SIM ou NÃO para cada pergunta:**

| Pergunta | Resposta |
|----------|----------|
| 1. É ÚNICO? (Eles já ouviram isso antes?) | |
| 2. É ACREDITÁVEL? (Faz sentido científico/lógico?) | |
| 3. É SIMPLES? (Pode explicar em uma frase?) | |
| 4. É ESPECÍFICO? (Tem nome, número ou detalhe?) | |
| 5. É PROPRIETÁRIO? (Só SEU produto pode usar?) | |

**Scoring:**
- 5 SIMs = Mecanismo forte ✅ Prossiga com confiança
- 3-4 SIMs = Mecanismo decente 🔄 Considere fortalecer
- 1-2 SIMs = Mecanismo fraco ❌ Volte à research

### 2.5 Nomeando Seu Mecanismo

**Princípios:**
1. Dê um nome proprietário (adiciona valor percebido)
2. Inclua um número se possível (adiciona especificidade)
3. Use palavras sensoriais/ativas (cria imagem mental)
4. Mantenha curto (3-4 palavras ideal)

**Exemplos:**
- "O Protocolo de 'Reset Metabólico'"
- "A Técnica do 'Flush de Stress de 3 Segundos'"
- "O Sistema do 'Efeito Composto'"
- "O Método de 'Reprogramação Neural'"

### 2.6 Template de Mecanismo

```markdown
## MECHANISM STATEMENT

### Nome do Mecanismo:
[Nome proprietário de 3-4 palavras]

### O Que É:
[Explicação em 1-2 frases]

### Por Que Funciona:
[A ciência/lógica por trás]

### Por Que É Diferente:
[Como se diferencia de outras abordagens]

### Prova de Que Funciona:
[Estudo, testemunho ou dado que suporta]

### One-Liner:
[Mecanismo completo em uma frase para usar em copy]

Exemplo: "O Protocolo de Reset Metabólico reprograma seus hormônios
queimadores de gordura no nível celular—é por isso que dietas tradicionais
falham e este método funciona em 87% dos casos."
```

---

## PHASE 3: BRIEF (B) - 30% do Tempo

### 3.1 O Que É o Brief

O brief é o ESQUELETO da sua copy. É o outline detalhado que transforma escrever de "criar" em "executar".

> "Com um brief completo, escrevo uma sales letter em 4-6 horas. Sem um? Pode levar dias—e o resultado é pior."
> — Stefan Georgi

### 3.2 Estrutura do Brief (7 Seções)

---

#### SEÇÃO 1: Headline & Sub-headline

```markdown
## HEADLINE SECTION

### Headline Principal:
[Benefício + Mecanismo + Curiosidade]

Exemplo: "Como o 'Protocolo de Reset Metabólico' Ajuda Mulheres 40+
a Perder Até 10kg em 30 Dias—Mesmo Que Dietas Nunca Tenham Funcionado Antes"

### Sub-headline:
[Expande a promessa, adiciona credibilidade]

Exemplo: "O método cientificamente comprovado que já ajudou 47.000 mulheres
a alcançar seu peso ideal—sem academia, sem passar fome, sem força de vontade"

### Headlines de Backup (para testar):
1. [Versão alternativa]
2. [Versão alternativa]
3. [Versão alternativa]
```

---

#### SEÇÃO 2: Lead/Abertura

```markdown
## LEAD SECTION

### Tipo de Lead:
[ ] Story Lead (história pessoal)
[ ] Problem Lead (direto no problema)
[ ] News Lead (novidade/descoberta)
[ ] Question Lead (pergunta provocativa)
[ ] Prediction Lead (futuro/consequência)

### Hook de Abertura (primeiras 3-5 frases):
[Escreva as primeiras frases que prendem atenção]

### Bullets da Lead:
• Estabelecer rapport/identificação
• Agitar o problema
• Prometer solução
• Transição para mecanismo

### Transição para Mecanismo:
[Frase que leva naturalmente à revelação do mecanismo]
```

---

#### SEÇÃO 3: Revelação do Mecanismo

```markdown
## MECHANISM REVEAL SECTION

### Bullets do Mecanismo:
• O que o mecanismo é (nome, conceito)
• Como funciona (ciência/lógica simplificada)
• Por que é diferente (vs outras abordagens)
• Por que VOCÊ não sabia disso (explicação de obscuridade)
• Prova de que funciona (estudo, expert, resultado)

### Elementos Visuais/Analogias:
[Como ilustrar o mecanismo de forma memorável]

### Objeções a Endereçar Aqui:
• "Isso parece bom demais para ser verdade"
• "Por que nunca ouvi falar disso?"
• "Isso funciona para pessoas como eu?"
```

---

#### SEÇÃO 4: Body/Benefícios

```markdown
## BODY SECTION

### Benefícios Principais (em ordem de importância):

**Benefício 1: [Nome]**
• Descrição do benefício
• Como o mecanismo entrega este benefício
• Prova (testemunho, estudo, número)
• Future pacing (como a vida será com este benefício)

**Benefício 2: [Nome]**
[Repetir estrutura]

**Benefício 3: [Nome]**
[Repetir estrutura]

**Benefício 4: [Nome]**
[Repetir estrutura]

**Benefício 5: [Nome]**
[Repetir estrutura]

### Objections a Endereçar no Body:
• [Objeção] → [Resposta]
• [Objeção] → [Resposta]
```

---

#### SEÇÃO 5: Credibilidade

```markdown
## CREDIBILITY SECTION

### História do Criador:
• Background/qualificações
• Por que criou isso
• Seus próprios resultados
• Por que está compartilhando agora

### Testemunhos (3-5 principais):
| Nome | Resultado | Quote Key | Situação Antes |
|------|-----------|-----------|----------------|
|      |           |           |                |

### Prova de Autoridade:
• Mídia/publicações
• Experts que endossam
• Números impressionantes (clientes, resultados)

### Elementos de Confiança:
• Garantia (preview)
• Suporte
• Comunidade
```

---

#### SEÇÃO 6: Oferta

```markdown
## OFFER SECTION

### O Que Recebem (Produto Principal):
• [Componente 1] - Descrição - Valor: R$___
• [Componente 2] - Descrição - Valor: R$___
• [Componente 3] - Descrição - Valor: R$___

### Bônus:
| Bônus | Descrição | Valor | Por Que Incluir |
|-------|-----------|-------|-----------------|
| #1    |           | R$    |                 |
| #2    |           | R$    |                 |
| #3    |           | R$    |                 |

### Value Stack:
Valor Total: R$___
Seu Investimento: R$___
Você Economiza: R$___  (___%)

### Ancoragem de Preço:
[Como posicionar o preço como barganha]

### Garantia:
• Nome da garantia
• Duração
• Termos
• Processo
```

---

#### SEÇÃO 7: Close/CTA

```markdown
## CLOSE SECTION

### Urgência:
• Tipo: [ ] Deadline [ ] Escassez [ ] Preço Sobe
• Razão legítima para urgência
• Consequência de não agir

### Risk Reversal:
[Reforço da garantia]

### Recap Final de Benefícios:
• [Benefício 1]
• [Benefício 2]
• [Benefício 3]

### CTA Principal:
[Texto exato do botão/ação]

### P.S. (1-3):
• P.S. 1: [Reforço do benefício principal]
• P.S. 2: [Urgência]
• P.S. 3: [Garantia] (opcional)
```

---

### 3.3 Escrevendo Bullets do Brief

No brief, você escreve BULLETS para cada seção. Estes se tornam a fundação da copy.

**Formato de Bullet:**
- Uma ideia por bullet
- Específico, não vago
- Orientado a benefício
- Suportado por prova quando possível

**Exemplo de Seção com Bullets:**

```markdown
## MECHANISM SECTION BULLETS

• O que é o "Interruptor Metabólico" (nome científico, história da descoberta)
• Como ele controla se você queima ou armazena gordura
• Por que seu interruptor está "travado" no modo de armazenamento
• As 3 coisas que flipam o interruptor para modo queima
• Por que outras dietas falham (ignoram o interruptor)
• Estudo: Pesquisa de Stanford mostrando ativação do interruptor
• Testemunho: Maria perdeu 12kg após ativar seu interruptor
• Analogia: É como um termostato que foi configurado errado
```

---

## PHASE 4: COPY (C) - 20% do Tempo

### 4.1 A Filosofia da Fase de Copy

Se você fez R, M e B corretamente, a fase de Copy é FÁCIL.

Você não está olhando para uma página em branco. Você está olhando para um brief completo que diz exatamente o que escrever.

### 4.2 O Processo de 4 Passos

---

#### PASSO 1: Speed Draft (2-3 horas)

**Regras:**
- Escreva RÁPIDO
- NÃO edite enquanto escreve
- NÃO duvide de si mesmo
- Siga o brief seção por seção
- Coloque TUDO na página

**Mentalidade:** "Vomite as palavras no papel. A edição vem depois."

---

#### PASSO 2: Enhancement Pass (1-2 horas)

**Foco:**
- Fortaleça headlines
- Adicione mais prova onde está fraco
- Intensifique linguagem emocional
- Adicione transições entre seções
- Garanta fluxo lógico

**Perguntas para cada seção:**
- Isso é convincente o suficiente?
- Há prova suficiente?
- A emoção está presente?
- A transição para próxima seção é suave?

---

#### PASSO 3: Editing Pass (1 hora)

**Foco:**
- Corte palavras desnecessárias
- Simplifique frases complexas
- Verifique repetição
- Confirme que claims têm prova
- Garanta voz consistente

**Regras de Corte:**
- Se não adiciona, remova
- Se pode ser mais simples, simplifique
- Se já disse, não repita
- Se não tem prova, adicione ou remova

---

#### PASSO 4: Final Polish (30 min)

**Foco:**
- Leia em voz alta (pegue frases estranhas)
- Verifique formatação (headers, bullets, espaçamento)
- Confirme clareza do CTA
- Revise erros ortográficos
- Teste links/botões

---

### 4.3 Técnicas de Copy

#### Tom Conversacional

```markdown
❌ RUIM: "Deve-se considerar os vários fatores que..."
✅ BOM: "Aqui está o que ninguém te conta..."
```

#### Especificidade

```markdown
❌ RUIM: "Perca peso rápido"
✅ BOM: "Perca 5kg em 21 dias"
```

#### Proof Stacking

```markdown
ESTRUTURA: Claim → Prova → Implicação

"Este método funciona em 87% dos casos [CLAIM]—comprovado em um estudo
com 3.000 participantes na Universidade de Stanford [PROVA]. Isso significa
que suas chances de sucesso são quase 9 em 10 [IMPLICAÇÃO]."
```

#### Future Pacing

```markdown
"Imagine acordar amanhã, pisar na balança, e ver..."
"Daqui a 30 dias, você vai olhar no espelho e..."
"Quando você finalmente [alcançar resultado], a primeira coisa que vai fazer é..."
```

#### Objection Handling

```markdown
"Agora você pode estar pensando: '[OBJEÇÃO]'

E eu entendo completamente. Eu pensava a mesma coisa.

Mas aqui está a verdade: [RESPOSTA]"
```

---

## CHECKLIST FINAL

### Research (R) ✓

- [ ] Avatar document completo
- [ ] Pain hierarchy mapeada
- [ ] Desires mapeados
- [ ] Proof arsenal compilado
- [ ] Análise competitiva feita
- [ ] Key belief identificada
- [ ] Linguagem do prospect documentada

### Mechanism (M) ✓

- [ ] Tipo de mecanismo definido
- [ ] Passa no teste de 5 perguntas (3+ SIMs)
- [ ] Nome proprietário criado
- [ ] One-liner escrito
- [ ] Diferenciação clara
- [ ] Prova de suporte identificada

### Brief (B) ✓

- [ ] Headline + backups
- [ ] Lead type escolhido e bullets escritos
- [ ] Mechanism reveal estruturado
- [ ] Body com 5+ benefícios, cada um com prova
- [ ] Credibility section completa
- [ ] Offer stack com valores
- [ ] Close com urgência e CTA

### Copy (C) ✓

- [ ] Speed draft completo
- [ ] Enhancement pass feito
- [ ] Editing pass feito
- [ ] Final polish feito
- [ ] Lido em voz alta
- [ ] Formatação verificada

---

## QUICK REFERENCE

### RMBC em Trinity Frase Cada

- **R:** Entenda profundamente o que seu prospect precisa acreditar
- **M:** Encontre o "veículo" que torna sua promessa acreditável
- **B:** Crie o esqueleto completo antes de escrever
- **C:** Execute o brief com palavras compelling

### Tempo por Fase

| Fase | % do Tempo | Para 10h Total |
|------|------------|----------------|
| Research | 30% | 3 horas |
| Mechanism | 20% | 2 horas |
| Brief | 30% | 3 horas |
| Copy | 20% | 2 horas |

### Perguntas-Chave por Fase

- **R:** O que precisam ACREDITAR para comprar?
- **M:** POR QUE isso é DIFERENTE?
- **B:** Qual é o ESQUELETO do argumento?
- **C:** Como trago isso À VIDA?

---

*Task Version: 1.0*
*Created: 2026-01-23*
*Lines: 850+*
*Methodology: Stefan Georgi RMBC Method*


---

## Referência: templates/authority-arsenal-tmpl.yaml

# Authority Arsenal Extraction Template
# CopywriterOS - Output template for build-authority-arsenal task
#
# PURPOSE:
# This template defines the structure for extracted authority proof elements
# including crucible story, statistics, notable work, and proof stack templates.
#
# USAGE:
# 1. Execute tasks/build-authority-arsenal.md
# 2. Fill this template with extracted data from source materials
# 3. Save to {pasta}/{slug}/analysis/authority-arsenal.yaml
#
# REFERENCE:
# - agents/david-ogilvy.md authority_proof_arsenal section (structure model)
# - tasks/build-authority-arsenal.md (extraction process)

template:
  id: authority-arsenal-template-v1
  name: "Authority Arsenal Extraction Template"
  version: "1.0.0"
  output:
    format: yaml
    filename: "authority-arsenal.yaml"
    location: "{pasta}/{slug}/analysis/"

# =============================================================================
# HEADER METADATA
# =============================================================================

header:
  copywriter: "{{copywriter_name}}"
  slug: "{{copywriter_slug}}"
  extraction_date: "{{YYYY-MM-DD}}"
  source_files_analyzed: "{{count}}"
  extractor: "CopywriterOS Authority Arsenal Task v1.0"

# =============================================================================
# CRUCIBLE STORY - 4 Acts Structure
# =============================================================================
# The copywriter's transformation narrative: Origin → Struggle → Breakthrough → Mastery
# This provides the emotional foundation for all authority claims.

crucible_story:
  title: "{{one_line_story_title}}"
  # Example: "From Door-to-Door Salesman to Father of Advertising"

  transformation_arc: "{{from_X_to_Y_summary}}"
  # Example: "From failed Oxford student → Father of Modern Advertising"

  # -------------------------------------------------------------------------
  # ACT 1: ORIGIN - Where they started
  # -------------------------------------------------------------------------
  act_1_origin:
    year: "{{YYYY or YYYY-YYYY range}}"
    # Example: "2015-2017"

    location: "{{location_if_relevant}}"
    # Example: "California, USA"

    context: |
      {{starting_situation_description}}
    # What was their life like before the transformation?
    # What was their first job/career/situation?
    # Example: "Working as a freelance web designer, struggling to find clients..."

    key_event: "{{inciting_incident}}"
    # What made them start down this path?
    # Example: "Discovered direct response copywriting after a failed product launch"

    mindset: "{{how_they_thought_at_this_stage}}"
    # What did they believe at this stage?
    # Example: "Believed success came from working harder, not smarter"

    challenges:
      - "{{initial_challenge_1}}"
      - "{{initial_challenge_2}}"
      - "{{initial_challenge_3}}"
    # Example:
    # - "No marketing knowledge"
    # - "Limited budget for advertising"
    # - "Trading time for money"

    lesson: "{{key_learning_from_this_period}}"
    # Example: "Hard work alone doesn't guarantee success"

    sources:
      - "{{source_file_1}}"
      - "{{source_file_2}}"

  # -------------------------------------------------------------------------
  # ACT 2: STRUGGLE - The challenges and failures
  # -------------------------------------------------------------------------
  act_2_struggle:
    period: "{{YYYY-YYYY or duration}}"
    # Example: "2017-2019" or "18 months"

    context: |
      {{struggle_situation_description}}
    # What was happening during this period?
    # Example: "Tried multiple business models, each one failing..."

    challenges:
      - challenge: "{{challenge_1_description}}"
        impact: "{{how_it_affected_them}}"
        lesson: "{{what_they_learned}}"
      - challenge: "{{challenge_2_description}}"
        impact: "{{how_it_affected_them}}"
        lesson: "{{what_they_learned}}"
      - challenge: "{{challenge_3_description}}"
        impact: "{{how_it_affected_them}}"
        lesson: "{{what_they_learned}}"
    # Example:
    # - challenge: "First product launch failed completely"
    #   impact: "Lost $5,000 in savings"
    #   lesson: "Product-market fit matters more than features"

    failures:
      - failure: "{{specific_failure_1}}"
        impact: "{{consequence}}"
      - failure: "{{specific_failure_2}}"
        impact: "{{consequence}}"
    # Example:
    # - failure: "Agency went bankrupt after 6 months"
    #   impact: "Had to move back with parents"

    dark_moment: |
      {{the_lowest_point_description}}
    # The darkest moment in their journey
    # Example: "Bank account at $0, considering giving up on entrepreneurship..."

    pivotal_lesson: "{{key_insight_from_struggle_period}}"
    # The key insight that emerged from this period
    # Example: "Realized that audience comes before product"

    sources:
      - "{{source_file_1}}"
      - "{{source_file_2}}"

  # -------------------------------------------------------------------------
  # ACT 3: BREAKTHROUGH - The turning point
  # -------------------------------------------------------------------------
  act_3_breakthrough:
    year: "{{YYYY}}"
    # Example: "2020"

    catalyst: |
      {{what_triggered_the_breakthrough}}
    # What changed everything?
    # Example: "Started writing daily on Twitter, audience began growing..."

    realization: "{{the_key_insight_or_shift}}"
    # What did they figure out that others hadn't?
    # Example: "Content is the new sales - build audience first, sell later"

    first_success: "{{first_significant_win}}"
    # The first major success that validated the approach
    # Example: "First $10K month from a 300-follower account"

    validation: "{{how_they_knew_it_was_working}}"
    # How they knew the approach worked
    # Example: "Organic inbound leads replaced cold outreach entirely"

    result: "{{immediate_outcome}}"
    # What happened immediately after
    # Example: "Revenue doubled within 3 months"

    lesson: "{{what_they_learned_from_breakthrough}}"
    # Example: "Consistency + value compounds over time"

    sources:
      - "{{source_file_1}}"
      - "{{source_file_2}}"

  # -------------------------------------------------------------------------
  # ACT 4: MASTERY - Current state and authority
  # -------------------------------------------------------------------------
  act_4_mastery:
    year: "{{YYYY-present}}"
    # Example: "2021-present"

    current_state: |
      {{where_they_are_now_description}}
    # Where they are now in their career
    # Example: "Running a $2.6M/year one-person business with 2M+ followers..."

    signature_achievement: "{{defining_accomplishment}}"
    # The defining accomplishment
    # Example: "Built largest one-person business education brand on Twitter"

    impact: "{{reach_and_influence}}"
    # How they've helped others
    # Example: "Taught 50,000+ students how to build one-person businesses"

    philosophy: "{{core_belief_emerged_from_journey}}"
    # The philosophy that emerged from their journey
    # Example: "Everyone can build a one-person business doing what they love"

    mission: "{{current_mission}}"
    # What they're working toward now
    # Example: "Help 1 million people escape the 9-to-5"

    sources:
      - "{{source_file_1}}"
      - "{{source_file_2}}"

  # -------------------------------------------------------------------------
  # STORY SUMMARY ELEMENTS
  # -------------------------------------------------------------------------
  pivotal_quote: "{{their_most_powerful_quote_about_their_journey}}"
  # The most powerful quote about their journey
  # Example: "I failed 7 times before I figured out what worked."

  story_in_one_sentence: "{{one_sentence_transformation_summary}}"
  # Example: "From broke freelancer to $2.6M/year teaching others to escape the 9-to-5."

# =============================================================================
# AUTHORITY STATISTICS
# =============================================================================
# Verifiable statistics that demonstrate expertise and results.
# All statistics must have source citations.

authority_statistics:

  # -------------------------------------------------------------------------
  # CAREER STATISTICS
  # -------------------------------------------------------------------------
  career:
    - metric: "{{career_metric_1_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
    - metric: "{{career_metric_2_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
    - metric: "{{career_metric_3_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
  # Examples:
  # - metric: "Years building online businesses"
  #   value: "7+"
  #   context: "Started in 2017, full-time since 2019"
  #   source: "03 - A Breakdown Of My Previous Twitter Agency.md"
  #   date_verified: "2024"

  # -------------------------------------------------------------------------
  # RESULTS STATISTICS
  # -------------------------------------------------------------------------
  results:
    - metric: "{{results_metric_1_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
    - metric: "{{results_metric_2_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
    - metric: "{{results_metric_3_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
  # Examples:
  # - metric: "Annual revenue"
  #   value: "$2.6M+"
  #   context: "From digital products and education"
  #   source: "dan koe.json"
  #   date_verified: "2024"

  # -------------------------------------------------------------------------
  # RECOGNITION STATISTICS
  # -------------------------------------------------------------------------
  recognition:
    - metric: "{{recognition_metric_1_name}}"
      value: "{{specific_credential_or_award}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
    - metric: "{{recognition_metric_2_name}}"
      value: "{{specific_credential_or_award}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
  # Examples:
  # - metric: "Industry recognition"
  #   value: "Featured in Forbes 30 Under 30"
  #   context: "Recognized for entrepreneurship"
  #   source: "about-page.md"
  #   date_verified: "2023"

  # -------------------------------------------------------------------------
  # REACH STATISTICS
  # -------------------------------------------------------------------------
  reach:
    - metric: "{{reach_metric_1_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
    - metric: "{{reach_metric_2_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
    - metric: "{{reach_metric_3_name}}"
      value: "{{specific_number_or_range}}"
      context: "{{what_this_means}}"
      source: "{{source_file}}"
      date_verified: "{{when_claimed}}"
  # Examples:
  # - metric: "Twitter followers"
  #   value: "2M+"
  #   context: "Largest one-person business account"
  #   source: "dan koe.json"
  #   date_verified: "2024"

# =============================================================================
# NOTABLE PRODUCTS
# =============================================================================
# The copywriter's signature products, services, courses, etc.

notable_products:
  - name: "{{product_1_name}}"
    type: "course|book|software|service|community|template|membership"
    description: "{{one_line_description}}"
    result_claim: "{{what_it_helps_people_achieve}}"
    price_point: "{{price_if_known}}"
    sales_volume: "{{units_sold_if_known}}"
    source: "{{source_file}}"
  - name: "{{product_2_name}}"
    type: "course|book|software|service|community|template|membership"
    description: "{{one_line_description}}"
    result_claim: "{{what_it_helps_people_achieve}}"
    price_point: "{{price_if_known}}"
    sales_volume: "{{units_sold_if_known}}"
    source: "{{source_file}}"
  - name: "{{product_3_name}}"
    type: "course|book|software|service|community|template|membership"
    description: "{{one_line_description}}"
    result_claim: "{{what_it_helps_people_achieve}}"
    price_point: "{{price_if_known}}"
    sales_volume: "{{units_sold_if_known}}"
    source: "{{source_file}}"
# Minimum 3 products required
# Examples:
# - name: "Digital Economics"
#   type: "course"
#   description: "Complete system for building a one-person business"
#   result_claim: "Build a $1M+ business working 4 hours/day"
#   price_point: "$997"
#   sales_volume: "10,000+ students"
#   source: "product-page.md"

# =============================================================================
# NOTABLE CLIENTS/STUDENTS
# =============================================================================
# Client results, student success stories, or notable followers.
# If specific names aren't available, use categories.

notable_clients:
  - name: "{{client_name_or_category}}"
    result: "{{what_they_achieved}}"
    quote: "{{direct_quote_if_available}}"
    source: "{{source_file}}"
  - name: "{{client_name_or_category}}"
    result: "{{what_they_achieved}}"
    quote: "{{direct_quote_if_available}}"
    source: "{{source_file}}"
# Minimum 2 client entries required
# Examples:
# - name: "6-figure entrepreneurs"
#   result: "Scaled to 7 figures using content strategy"
#   quote: "Dan's system helped me 10x my business in 18 months"
#   source: "testimonials.md"
# - name: "Corporate escapees"
#   result: "Built full-time income from side projects"
#   quote: null
#   source: "community-wins.md"

# =============================================================================
# PROOF STACK TEMPLATES
# =============================================================================
# Reusable templates for inserting authority proof into copy.
# These templates should be customized with the copywriter's actual data.

proof_stack_templates:

  # -------------------------------------------------------------------------
  # TRANSFORMATION PROOF TEMPLATE
  # -------------------------------------------------------------------------
  transformation_proof:
    name: "Transformation Proof"
    purpose: "Establish relatability through personal journey"

    template: |
      [BEFORE STATE]: {{act_1_context}}
      [STRUGGLE]: {{act_2_dark_moment}}
      [TURNING POINT]: {{act_3_catalyst}}
      [AFTER STATE]: {{act_4_current_state}}

    usage_guidance:
      - "Use in opening hooks to establish relatability"
      - "Use in about sections to build connection"
      - "Abbreviate for social media bios"
      - "Full version for sales pages and long-form content"

    example_application: |
      {{copywriter_name}} went from {{origin_state}} to {{mastery_state}}
      after discovering {{breakthrough_insight}}.
    # Example:
    # "Dan Koe went from broke freelancer working 12-hour days to running a
    # $2.6M/year business working 4 hours a day after discovering how to
    # monetize his curiosity through content."

    variables_required:
      - "act_1_context"
      - "act_2_dark_moment"
      - "act_3_catalyst"
      - "act_4_current_state"
      - "origin_state"
      - "mastery_state"
      - "breakthrough_insight"

  # -------------------------------------------------------------------------
  # RESULTS PROOF TEMPLATE
  # -------------------------------------------------------------------------
  results_proof:
    name: "Results Proof"
    purpose: "Demonstrate capability through specific numbers"

    template: |
      [METRIC]: {{statistic_value}}
      [CONTEXT]: {{what_it_means}}
      [TIMEFRAME]: {{when_achieved}}

    usage_guidance:
      - "Use after making claims to substantiate"
      - "Use in headlines for specific hooks"
      - "Stack multiple statistics for compound proof"
      - "Always cite source when possible"

    example_application: |
      With {{years}} years of experience and {{revenue_stat}} in results,
      {{copywriter_name}} has {{achievement_description}}.
    # Example:
    # "With 7 years of experience and $2.6M in annual revenue, Dan Koe
    # has helped 50,000+ students build profitable one-person businesses."

    variables_required:
      - "statistic_value"
      - "what_it_means"
      - "when_achieved"
      - "years"
      - "revenue_stat"
      - "achievement_description"

  # -------------------------------------------------------------------------
  # CREDIBILITY PROOF TEMPLATE
  # -------------------------------------------------------------------------
  credibility_proof:
    name: "Credibility Proof"
    purpose: "Position as authority in the field"

    template: |
      [CREDENTIALS]: {{recognition_stats}}
      [EXPERIENCE]: {{career_stats}}
      [NOTABLE WORK]: {{products_or_clients}}

    usage_guidance:
      - "Use in author bios and introductions"
      - "Use when presenting frameworks or methods"
      - "Use to counter 'who are you?' objection"
      - "Adapt length based on context (short for bios, long for sales pages)"

    example_application: |
      {{copywriter_name}}, creator of {{notable_product}}, has helped
      {{client_types}} achieve {{result_description}}.
    # Example:
    # "Dan Koe, creator of Digital Economics and The 2 Hour Writer, has helped
    # over 50,000 entrepreneurs build profitable one-person businesses through
    # content and product creation."

    variables_required:
      - "recognition_stats"
      - "career_stats"
      - "products_or_clients"
      - "notable_product"
      - "client_types"
      - "result_description"

  # -------------------------------------------------------------------------
  # SOCIAL PROOF TEMPLATE
  # -------------------------------------------------------------------------
  social_proof:
    name: "Social Proof"
    purpose: "Leverage audience and client validation"

    template: |
      [AUDIENCE SIZE]: {{reach_stats}}
      [CLIENT RESULTS]: {{client_achievements}}
      [ENDORSEMENTS]: {{notable_mentions}}

    usage_guidance:
      - "Use in testimonial sections"
      - "Use to validate claims with third-party evidence"
      - "Use to show community/following"
      - "Combine with specific testimonial quotes when available"

    example_application: |
      Join {{audience_size}} others who have {{transformation_achieved}}
      using {{copywriter_name}}'s methods.
    # Example:
    # "Join 2 million others who have discovered how to build a profitable
    # one-person business using Dan Koe's methods."

    variables_required:
      - "reach_stats"
      - "client_achievements"
      - "notable_mentions"
      - "audience_size"
      - "transformation_achieved"

# =============================================================================
# QUALITY VALIDATION
# =============================================================================

quality_checklist:
  crucible_story:
    - "All 4 acts populated with content"
    - "Each act has verifiable sources cited"
    - "Timeline is coherent (years make sense)"
    - "Story has clear transformation arc"
    - "Dark moment and breakthrough are specific, not generic"
    - "Current state reflects authority position"

  statistics:
    - "Minimum 5 statistics extracted across categories"
    - "At least 2 different categories covered"
    - "All statistics have source citations"
    - "Numbers are specific (not vague like 'many')"
    - "Statistics are impressive enough to establish authority"

  products_clients:
    - "At least 3 notable products listed"
    - "At least 2 client types or names listed"
    - "Each entry has clear result/benefit"
    - "Sources are cited"

  proof_templates:
    - "All 4 proof template types created"
    - "Each template has clear structure"
    - "Usage guidance provided for each"
    - "Example applications included"
    - "Templates reference actual extracted data"

scoring:
  sections:
    crucible_story: "30%"
    statistics: "25%"
    products_clients: "15%"
    proof_templates: "20%"
    technical: "10%"

  thresholds:
    excellent: "90-100%"
    good: "70-89%"
    needs_revision: "<70%"

  target: "90%+"

# =============================================================================
# EXAMPLE: FILLED TEMPLATE REFERENCE
# =============================================================================
# See agents/david-ogilvy.md authority_proof_arsenal section for a complete
# example of this template filled in for David Ogilvy.
#
# Key patterns from the reference:
# - Crucible story has 6 acts (we use 4 simplified)
# - Statistics include specific numbers with $ values
# - Notable clients are listed by name
# - Proof stack templates include setup phrases
# =============================================================================

# =============================================================================
# USAGE INSTRUCTIONS
# =============================================================================
#
# 1. Execute tasks/build-authority-arsenal.md with source materials
# 2. Copy this template to {pasta}/{slug}/analysis/authority-arsenal.yaml
# 3. Replace all {{placeholder}} markers with extracted data
# 4. Ensure all sources are cited
# 5. Run quality checklist before finalizing
# 6. This output feeds into templates/copywriter-agent-tmpl.yaml
#
# =============================================================================

# =============================================================================
# END OF TEMPLATE
# =============================================================================
