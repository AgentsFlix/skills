> Material de aprofundamento opcional. Quantidades de arquivos, frameworks, frases e categorias não são metas universais nem pré-requisitos de entrevista. Mesmo no aprofundamento, use só itens sustentados pelo acervo, remova espaços sem evidência e atualize totais pelo que realmente encontrou. O idioma é o escolhido pela pessoa. Frequências e percentuais exigem contagem verificável; sem ferramenta/contagem, descreva padrões qualitativos com trechos e limites, sem números estimados apresentados como medição.

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Extract Frameworks - Operational Framework Extraction for Copywriter Agents

## Metadata
```yaml
task_id: extract-frameworks
version: 1.0.0
category: copywriter-agent-creation
difficulty: advanced
elicit: true
dependencies:
  - templates/frameworks-extraction-tmpl.yaml
  - agents/david-ogilvy.md (structure reference)
  - agents/alex-hormozi.md (structure reference)
outputs:
  - YAML file with 10 operational frameworks
  - Each framework with complete structure (name, category, origin, definition, principle, components, process, application, common_mistakes, examples)
```

## Objective

Extract exactly 10 operational frameworks from a copywriter's source materials. These frameworks represent the copywriter's systematic approaches to specific problems in copywriting, marketing, sales, and content creation.

**Definition:** An operational framework is a repeatable system or methodology that the copywriter uses to achieve specific results. It has named components, clear steps, and can be applied to similar situations.

---

## FRAMEWORK STRUCTURE REFERENCE

Each extracted framework must follow this structure (based on david-ogilvy.md):

```yaml
- name: "Framework Name"
  category: copywriting | offer_creation | marketing_strategy | sales | content | audience | product | mindset
  origin: "Where it was first documented or taught"
  definition: >
    Clear explanation of what this framework does and when to use it.
    Should be 2-4 sentences that capture the essence.
  principle: "One-sentence core principle that underlies the framework"

  components:
    description: "Overview of the framework's parts"
    parts:
      - part_1: "Description of first component"
      - part_2: "Description of second component"
      # ... (typically 3-7 parts)

  process:
    steps:
      - "Step 1: Action"
      - "Step 2: Action"
      - "Step 3: Action"
      # ... (typically 3-7 steps)

  application:
    when: "Specific situations when this framework applies"
    process:
      - "How to start applying it"
      - "Key decision points"
      - "How to know you're done"

  common_mistakes:
    - "Mistake 1"
    - "Mistake 2"
    - "Mistake 3"

  examples:
    - context: "Situation description"
      application: "How framework was applied"
      result: "What happened"
```

---

## PHASE 1: SOURCE CATALOGING

### Step 1.1: Gather Source Materials

```
elicit: true
question: "Where are the source materials for this copywriter?"
options:
  - Mind directory ({pasta}/{slug}/sources/)
  - External folder path
  - Specific file list
```

### Step 1.2: Catalog All Sources

Create a master list of all source files:

| # | File Name | Type | Size | Topics Covered |
|---|-----------|------|------|----------------|
| 1 | [filename] | Article/Interview/Book | [words] | [main topics] |
| 2 | ... | ... | ... | ... |

**Note:** Read EACH file completely. Do not skip or skim.

### Step 1.3: Source Quality Assessment

Rate each source for framework density:

| Source | Framework Mentions | Explicit Systems | Rating |
|--------|-------------------|------------------|--------|
| [file] | High/Medium/Low | Yes/No | A/B/C |

**Priority:** Focus on A-rated sources first, but extract from all.

---

## PHASE 2: FRAMEWORK IDENTIFICATION

### Step 2.1: What Qualifies as a Framework

**IS a framework:**
- Has a name (explicit or can be named from description)
- Has distinct steps or components
- Can be replicated by someone else
- Solves a specific problem
- Appears in multiple contexts or is emphasized as core methodology

**IS NOT a framework:**
- General advice ("write good headlines")
- One-off examples without system
- Opinions without structure
- Personal preferences without methodology

### Step 2.2: Initial Framework Extraction

As you read each source, note potential frameworks:

```markdown
## Potential Framework: [Name]

**Source:** [file name, location]
**Category:** [copywriting/offer_creation/marketing_strategy/sales/content/audience/product/mindset]
**Evidence Type:** Explicit | Implicit | Recurring

**Raw Notes:**
[Copy exact quotes that describe the framework]

**Components Identified:**
- [component 1]
- [component 2]

**Steps Mentioned:**
1. [step]
2. [step]
```

### Step 2.3: Framework Frequency Analysis

After reading all sources, rank frameworks by:

| Framework | Mentions | Depth of Explanation | Uniqueness | Priority |
|-----------|----------|---------------------|------------|----------|
| [name] | Xx | High/Medium/Low | High/Medium/Low | 1-20 |

**Selection Criteria:**
1. Mentioned multiple times = higher priority
2. Explained in depth = higher priority
3. Unique to this copywriter = higher priority
4. Central to their methodology = higher priority

---

## PHASE 3: FRAMEWORK SELECTION

### Step 3.1: Category Distribution

Ensure diverse coverage across categories:

| Category | Target | Actual | Frameworks |
|----------|--------|--------|------------|
| copywriting | 2-3 | | |
| offer_creation | 1-2 | | |
| marketing_strategy | 1-2 | | |
| sales | 1-2 | | |
| content | 1-2 | | |
| audience | 0-1 | | |
| product | 0-1 | | |
| mindset | 0-1 | | |
| **TOTAL** | **10** | | |

### Step 3.2: Final Framework Selection

Select exactly 10 frameworks that:

- [ ] Cover at least 4 different categories
- [ ] Include the copywriter's most famous/recognizable frameworks
- [ ] Balance tactical (how-to) with strategic (big picture)
- [ ] Can be documented with enough detail from sources
- [ ] Are distinctive to this copywriter (not generic industry knowledge)

**Final 10 Selected:**

1. [Framework 1] - Category: [X]
2. [Framework 2] - Category: [X]
3. [Framework 3] - Category: [X]
4. [Framework 4] - Category: [X]
5. [Framework 5] - Category: [X]
6. [Framework 6] - Category: [X]
7. [Framework 7] - Category: [X]
8. [Framework 8] - Category: [X]
9. [Framework 9] - Category: [X]
10. [Framework 10] - Category: [X]

---

## PHASE 4: DEEP DOCUMENTATION

### Step 4.1: Documentation Process

For EACH of the 10 selected frameworks:

1. **Re-read all source mentions** - Gather every reference
2. **Extract exact language** - Use copywriter's own words
3. **Identify components** - What are the named parts?
4. **Map the process** - What are the steps?
5. **Find examples** - How have they applied it?
6. **Note common mistakes** - What do they warn against?

### Step 4.2: Framework Documentation Template

```yaml
- name: "[FRAMEWORK NAME]"
  category: [category]
  origin: "[Source: book name, course, interview, etc.]"
  definition: >
    [2-4 sentences explaining what this framework does and when to use it.
    Use the copywriter's language where possible.]
  principle: "[One core principle quote or synthesis]"

  # Core Structure
  [component_name]:
    description: "[Overview of this section]"
    [parts/elements/components]:
      - name: "[Part 1]"
        description: "[What it does]"
      - name: "[Part 2]"
        description: "[What it does]"
      # Continue for all parts...

  # Process/Steps
  process:
    description: "[How to execute this framework]"
    steps:
      - step: 1
        name: "[Step name]"
        action: "[What to do]"
      - step: 2
        name: "[Step name]"
        action: "[What to do]"
      # Continue for all steps...

  # Application Guide
  application:
    when: "[Specific situations/triggers for using this framework]"
    process:
      - "[Application step 1]"
      - "[Application step 2]"
      - "[Application step 3]"
    expected_outcome: "[What success looks like]"

  # Warnings
  common_mistakes:
    - "[Mistake 1 - what people do wrong]"
    - "[Mistake 2 - what people do wrong]"
    - "[Mistake 3 - what people do wrong]"

  # Evidence/Examples
  examples:
    - context: "[Situation]"
      application: "[How framework was used]"
      result: "[Outcome]"
```

### Step 4.3: Quality Checks Per Framework

Before finalizing each framework:

- [ ] **Name is clear** - Would someone recognize it?
- [ ] **Category is accurate** - Fits the problem it solves
- [ ] **Origin is documented** - Where did this come from?
- [ ] **Definition is complete** - Explains what AND when
- [ ] **Principle is memorable** - One sentence, quotable
- [ ] **Components are distinct** - Each part has clear role
- [ ] **Process is actionable** - Steps can be followed
- [ ] **Application is specific** - Clear triggers
- [ ] **Mistakes are real** - Based on warnings from source
- [ ] **Examples exist** - At least one concrete case

---

## PHASE 5: COMPILATION

### Step 5.1: Assemble Final YAML

Use the template from `templates/frameworks-extraction-tmpl.yaml`:

```yaml
# Copywriter Operational Frameworks Extraction
# Generated: [DATE]
# Copywriter: [NAME]

metadata:
  copywriter_name: "[Full Name]"
  extraction_date: "[YYYY-MM-DD]"
  total_frameworks: 10
  source_files_count: [XX]
  source_directory: "[path]"

categories_covered:
  copywriting: [X]
  offer_creation: [X]
  marketing_strategy: [X]
  sales: [X]
  content: [X]
  audience: [X]
  product: [X]
  mindset: [X]

operational_frameworks:
  # Framework 1
  - name: "[...]"
    # ... full structure ...

  # Framework 2
  - name: "[...]"
    # ... full structure ...

  # ... Frameworks 3-10 ...
```

### Step 5.2: Final Validation

Run through complete checklist:

- [ ] Exactly 10 frameworks
- [ ] All frameworks have complete structure
- [ ] Category diversity (minimum 4 categories)
- [ ] YAML syntax valid
- [ ] All origins documented
- [ ] All principles are one sentence
- [ ] All processes have 3+ steps
- [ ] All common_mistakes have 3+ items
- [ ] At least 1 example per framework
- [ ] Language matches copywriter's voice

---

## QUALITY GATES

### Gate 1: Count Validation
- [ ] Exactly 10 frameworks (not 9, not 11)

### Gate 2: Completeness
- [ ] All fields populated for all 10 frameworks
- [ ] No placeholder text remaining

### Gate 3: Category Distribution
- [ ] Minimum 4 different categories used
- [ ] No single category has more than 3 frameworks

### Gate 4: Distinctiveness
- [ ] Each framework is unique (no overlaps)
- [ ] Frameworks are specific to this copywriter (not generic)

### Gate 5: YAML Validation
- [ ] Valid YAML syntax
- [ ] No special characters breaking YAML
- [ ] Proper indentation

---

## OUTPUT

**Location:** Save to `{pasta}/{slug}/analysis/frameworks.yaml`

**Format:** YAML following `templates/frameworks-extraction-tmpl.yaml`

**Validation:** Run through `checklists/copywriter-agent-creation-checklist.md` Section 2

---

## CATEGORY ENUM REFERENCE

| Category | Description | Example Frameworks |
|----------|-------------|-------------------|
| `copywriting` | Writing techniques, formulas, structures | PASTOR, PAS, AIDA |
| `offer_creation` | Building offers, pricing, bundling | Godfather Offer, Value Stack |
| `marketing_strategy` | Overall marketing approach, positioning | Content Pyramid, Category Design |
| `sales` | Sales processes, objection handling | Risk Reversal, Closing Scripts |
| `content` | Content creation, distribution | Newsletter Formula, Social Strategy |
| `audience` | Avatar, targeting, segmentation | Dream 100, Audience Research |
| `product` | Product development, improvement | Minimum Viable Offer, Product Market Fit |
| `mindset` | Beliefs, psychology, personal development | Identity Shift, Abundance Mindset |

---

## TIPS FOR EXTRACTION

1. **Listen for named systems** - Copywriters often name their frameworks
2. **Watch for numbered lists** - "The 4 steps to..." often indicate frameworks
3. **Note repeated structures** - Same advice format = implicit framework
4. **Track acronyms** - PASTOR, AIDA, PAS are framework signals
5. **Read between the lines** - Sometimes frameworks are taught without being named

---

## REFERENCE: FRAMEWORK STRUCTURES FROM DAVID OGILVY

For structure inspiration, see how david-ogilvy.md documents these frameworks:

1. **The Big Idea Framework** - has `the_five_tests`, `how_big_ideas_come`, `ogilvy_big_ideas_examples`
2. **Brand Image Theory** - has `core_concept`, `long_term_thinking`, `consistency_rules`
3. **Positioning First Principle** - has `positioning_questions`, `psychological_segmentation`
4. **38 Principles** - has categorized principles (brand, headline, visual, etc.)
5. **Headline Mastery System** - has `headline_statistics`, `what_works`, `words_that_work`

Use similar sub-section structures when documenting complex frameworks.

---

## Checklist Reference

After completion, validate against: `checklists/copywriter-agent-creation-checklist.md`

## Template Reference

Use output template: `templates/frameworks-extraction-tmpl.yaml`
