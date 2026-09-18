# copy-pipeline · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-pipeline.md` uma skill chamada copy-pipeline. Quando eu pedir algo como "campanha completa para [oferta]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# DA IDEIA À PEÇA · Da estratégia à peça, em esteira

Da estratégia à peça pronta, em uma esteira só: define o ângulo, escolhe o formato, escreve e revisa, chamando as outras skills de copy na ordem certa. Para quem quer entregar uma campanha inteira sem montar o processo à mão a cada vez.

## When to Use

- O pedido envolve: campanha completa, estratégia de copy, do zero à peça, criar copywriter.
- Diga: "campanha completa para [oferta]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| write copy | `references/write-copy.md` |
| strategy | `references/strategy.md` |
| create copywriter agent | `references/create-copywriter-agent.md` |

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

- `references/checklist-copywriter-agent-creation-checklist.md`
- `references/create-copywriter-agent.md`
- `references/strategy-angle-selection.md`
- `references/strategy-benefit-ladder.md`
- `references/strategy-big-idea-generation.md`
- `references/strategy-guarantee-formulation.md`
- `references/strategy-hook-ideation.md`
- `references/strategy-story-mining.md`
- `references/strategy-unique-mechanism.md`
- `references/strategy-value-stack.md`
- `references/strategy.md`
- `references/write-copy.md`
- `templates/authority-arsenal-tmpl.yaml`
- `templates/communication-dna-tmpl.yaml`
- `templates/copywriter-agent-tmpl.yaml`
- `templates/frameworks-extraction-tmpl.yaml`
- `templates/objection-algorithms-tmpl.yaml`
- `templates/signature-phrases-tmpl.yaml`


---

## Referência: references/checklist-copywriter-agent-creation-checklist.md

# Copywriter Agent Creation Checklist

## Purpose

Comprehensive validation checklist for copywriter agent creation using the CopywriterOS pipeline. Use this checklist **after completing all extraction phases** to ensure the agent meets quality standards before deployment.

> **Integration:** This checklist validates agents created via `tasks/create-copywriter-agent.md`

---

## How to Use

1. Complete all extraction phases (frameworks, communication DNA, phrases, arsenal, algorithms)
2. Assemble the agent file using `templates/copywriter-agent-tmpl.yaml`
3. Run through each section of this checklist
4. Calculate section scores and overall score
5. Address any failures before deployment
6. Create validation report at `{pasta}/{slug}/analysis/validation-report.md`

---

## Scoring System

| Score | Status | Action |
|-------|--------|--------|
| 90-100% | ✅ Excellent | Deploy - agent is production-ready |
| 70-89% | 🟡 Good | Minor revisions - address flagged items |
| 50-69% | ⚠️ Needs Work | Major revision required - multiple sections incomplete |
| <50% | ❌ Failed | Re-extract - fundamental issues present |

---

## SECTION 1: REQUIRED SECTIONS (18 points)

Verify the agent file contains all mandatory sections with proper content.

### 1.1 Header Sections (6 points)

- [ ] **IDE-FILE-RESOLUTION** - Contains valid path resolution instructions
- [ ] **REQUEST-RESOLUTION** - Defines how the agent handles requests
- [ ] **activation-instructions** - Clear activation conditions and syntax
- [ ] **agent** - Contains name, role, version, description metadata
- [ ] **persona** - Defines voice, tone, communication style
- [ ] **core_principles** - Lists 5+ guiding principles derived from frameworks

### 1.2 Content Sections (6 points)

- [ ] **commands** - Lists all available agent commands with syntax
- [ ] **operational_frameworks** - Contains exactly 10 frameworks
- [ ] **communication_dna** - Contains vocabulary, trigrams, rhetoric, formulas
- [ ] **signature_phrases** - Contains 42+ phrases in 7 tiers
- [ ] **authority_proof_arsenal** - Contains crucible story, stats, templates
- [ ] **objection_algorithms** - Contains exactly 5 algorithms

### 1.3 Footer Sections (6 points)

- [ ] **{copywriter}_rules** - Contains copywriter-specific rules (26+ total)
- [ ] **security** - Defines boundaries and limitations
- [ ] **dependencies** - Lists required files and resources
- [ ] **knowledge_areas** - Lists 8+ topics the agent is expert in
- [ ] **capabilities** - Lists 10+ things the agent can do
- [ ] **MMOS Integration Note** - Links to mind in database (if applicable)

**Section 1 Score:** ___/18 = ___%

---

## SECTION 2: OPERATIONAL FRAMEWORKS (25 points)

Validate the 10 extracted operational frameworks.

### 2.1 Quantity Requirements (5 points)

- [ ] Exactly 10 frameworks present
- [ ] Frameworks are uniquely named (no duplicates)
- [ ] Frameworks represent copywriter's actual methodology
- [ ] Frameworks are actionable (not just concepts)
- [ ] Frameworks have clear application context

### 2.2 Category Diversity (5 points)

Frameworks should cover multiple categories:

- [ ] At least 2 copywriting frameworks
- [ ] At least 2 offer_creation or marketing_strategy frameworks
- [ ] At least 2 content or audience frameworks
- [ ] At least 1 sales framework
- [ ] At least 1 mindset or product framework

Categories: `copywriting`, `offer_creation`, `marketing_strategy`, `sales`, `content`, `audience`, `product`, `mindset`

### 2.3 Framework Structure Completeness (15 points)

For EACH of the 10 frameworks, verify:

**Framework 1: _______________**
- [ ] category (valid enum value)
- [ ] origin (source file/concept cited)
- [ ] definition (one clear sentence)
- [ ] principle (core principle explained)
- [ ] components (3+ components listed)
- [ ] process (step-by-step, 3+ steps)
- [ ] application (when/how to use)
- [ ] common_mistakes (2+ mistakes listed)
- [ ] examples (1+ real example from sources)

**Framework 2: _______________**
- [ ] All required fields complete

**Framework 3: _______________**
- [ ] All required fields complete

**Framework 4: _______________**
- [ ] All required fields complete

**Framework 5: _______________**
- [ ] All required fields complete

**Framework 6: _______________**
- [ ] All required fields complete

**Framework 7: _______________**
- [ ] All required fields complete

**Framework 8: _______________**
- [ ] All required fields complete

**Framework 9: _______________**
- [ ] All required fields complete

**Framework 10: _______________**
- [ ] All required fields complete

*Score: 1.5 points per complete framework (15 points total)*

**Section 2 Score:** ___/25 = ___%

---

## SECTION 3: COMMUNICATION DNA (20 points)

Validate the linguistic fingerprint extraction.

### 3.1 Vocabulary (8 points)

- [ ] **Mandatory words:** 15+ terms the copywriter uses constantly
- [ ] Mandatory words have context/usage notes
- [ ] **Forbidden words:** 10+ terms the copywriter avoids
- [ ] Forbidden words have reasoning why avoided
- [ ] **Signature vocabulary:** 10+ unique terms with definitions
- [ ] Signature vocabulary includes copywriter-specific meanings
- [ ] Vocabulary feels authentic to the copywriter's voice
- [ ] No generic marketing terms without copywriter-specific context

### 3.2 Patterns (6 points)

- [ ] **Trigrams:** 20+ three-word combinations
- [ ] Trigrams appear naturally in copywriter's work
- [ ] Trigrams have frequency guidance (high/medium/low)
- [ ] **Rhetorical devices:** 5+ patterns documented
- [ ] Rhetorical devices have description, example, and usage
- [ ] Rhetorical devices are distinctive to this copywriter

### 3.3 Formulas (4 points)

- [ ] **Quick formulas:** 5+ templates for different copy types
- [ ] Formulas cover: hooks, headlines, CTAs, transitions, closes
- [ ] Each formula has template structure and example
- [ ] Formulas sound like the copywriter when used

### 3.4 Psychometric Integration (2 points)

- [ ] DISC influence documented (if profile available)
- [ ] MBTI/Enneagram influence documented (if profile available)

**Section 3 Score:** ___/20 = ___%

---

## SECTION 4: SIGNATURE PHRASES (15 points)

Validate the 42+ signature phrases organized in 7 tiers.

### 4.1 Quantity Requirements (5 points)

- [ ] Minimum 42 phrases total extracted
- [ ] All 7 tiers populated
- [ ] No duplicate phrases across tiers
- [ ] Phrases are genuinely quotable (standalone, memorable)
- [ ] Phrases are original to the copywriter (not generic)

### 4.2 Tier Structure (7 points)

Each tier properly defined with appropriate phrases:

- [ ] **Tier 1 - Core Mantras:** 3-5 phrases (every piece, 1-2x daily)
- [ ] **Tier 2 - Methodology Pillars:** 5-7 phrases (weekly usage)
- [ ] **Tier 3 - Theme [Primary Topic]:** 6-8 phrases (per topic)
- [ ] **Tier 4 - Theme [Secondary Topic]:** 6-8 phrases (per topic)
- [ ] **Tier 5 - Theme [Tertiary Topic]:** 6-8 phrases (per topic)
- [ ] **Tier 6 - Philosophy & Mindset:** 5-7 phrases (monthly)
- [ ] **Tier 7 - Tactical & Situational:** 5-7 phrases (as needed)

### 4.3 Phrase Documentation (3 points)

For each phrase, verify:

- [ ] **phrase:** Original phrase in English
- [ ] **context:** When/how to use this phrase
- [ ] **source:** Source file or content piece cited

**Section 4 Score:** ___/15 = ___%

---

## SECTION 5: AUTHORITY ARSENAL (12 points)

Validate credibility elements extraction.

### 5.1 Crucible Story (4 points)

Four-act story structure complete:

- [ ] **Act 1 - Origin:** year, context, key_event documented
- [ ] **Act 2 - Struggle:** challenges (2+), failures (2+), lesson documented
- [ ] **Act 3 - Breakthrough:** year, catalyst, result documented
- [ ] **Act 4 - Mastery:** current_state, signature_achievement documented

### 5.2 Authority Statistics (3 points)

- [ ] **Career metrics:** years active, clients served, revenue generated
- [ ] **Results metrics:** outcomes achieved for clients/students
- [ ] **Reach metrics:** followers, subscribers, audience size

All statistics should be verifiable from source materials.

### 5.3 Notable Items (2 points)

- [ ] **Notable products:** books, courses, programs listed
- [ ] **Notable clients:** recognizable names or categories listed

### 5.4 Proof Stack Templates (3 points)

- [ ] **Transformation proof:** template with placeholder structure
- [ ] **Results proof:** template with numbers/metrics structure
- [ ] **Credibility proof:** template with authority markers
- [ ] **Social proof:** template with testimonial structure

*Minimum 4 templates required*

**Section 5 Score:** ___/12 = ___%

---

## SECTION 6: OBJECTION ALGORITHMS (15 points)

Validate the 5 objection handling algorithms.

### 6.1 Quantity and Coverage (5 points)

- [ ] Exactly 5 algorithms present
- [ ] Algorithms cover distinct objection categories:
  - [ ] Time/Resource scarcity ("I don't have time")
  - [ ] Competence doubt ("I don't know enough")
  - [ ] Market saturation ("It's too competitive")
  - [ ] Credibility concern ("I'm not an expert")
  - [ ] Audience building ("I need more followers first")

### 6.2 Algorithm Structure (10 points, 2 per algorithm)

For EACH algorithm, verify complete 5-step structure:

**Algorithm 1: _______________**
- [ ] trigger: Clear description of when algorithm activates
- [ ] step_1_acknowledge: How to validate the objection
- [ ] step_2_reframe: How to shift perspective
- [ ] step_3_evidence: What proof to present
- [ ] step_4_vision: What future to paint
- [ ] step_5_action: What action to propose
- [ ] resolution: Expected outcome
- [ ] key_phrases: 2+ phrases from signature_phrases
- [ ] framework_reference: Links to extracted framework

**Algorithm 2: _______________**
- [ ] All 9 fields complete

**Algorithm 3: _______________**
- [ ] All 9 fields complete

**Algorithm 4: _______________**
- [ ] All 9 fields complete

**Algorithm 5: _______________**
- [ ] All 9 fields complete

### 6.3 Voice Authenticity (bonus validation)

- [ ] Responses sound like the copywriter (use their vocabulary)
- [ ] Key phrases are genuinely from the signature phrases section
- [ ] Framework references are from the operational frameworks section

**Section 6 Score:** ___/15 = ___%

---

## SECTION 7: COPYWRITER RULES (8 points)

Validate the extracted rules across categories.

### 7.1 Category Completeness (4 points)

- [ ] **Writing rules:** 8+ actionable rules
- [ ] **Content strategy rules:** 6+ actionable rules
- [ ] **Business rules:** 6+ actionable rules
- [ ] **Mindset rules:** 6+ actionable rules

*Minimum 26 rules total*

### 7.2 Rule Quality (4 points)

- [ ] Rules are in imperative voice (actionable commands)
- [ ] Rules are directly from source materials (cited)
- [ ] Rules are specific to this copywriter (not generic advice)
- [ ] Rules are non-contradictory within categories

**Section 7 Score:** ___/8 = ___%

---

## SECTION 8: FINAL VALIDATION (7 points)

Technical and distinctiveness validation.

### 8.1 Technical Validation (4 points)

- [ ] **YAML syntax:** All YAML blocks parse without errors
- [ ] **Markdown rendering:** Document renders correctly
- [ ] **No placeholders:** No `{placeholder}` or `TODO` text remaining
- [ ] **File paths:** All referenced files/paths are valid

### 8.2 Distinctiveness Test (3 points)

- [ ] Agent voice is distinctly recognizable (not generic)
- [ ] Agent could not be confused with another copywriter
- [ ] Sample output test: Generate test copy, verify it sounds authentic

**Section 8 Score:** ___/7 = ___%

---

## SCORE CARD CONSOLIDADO

```
COPYWRITER AGENT CREATION SCORECARD

Date: ___________
Copywriter: ___________
Agent File: .aios-core/expansion-packs/copywriter-os/agents/___________.md

SCORES BY SECTION:
┌─────────────────────────────┬─────────┬─────────┬───────┐
│ Section                     │ Points  │ Score   │ %     │
├─────────────────────────────┼─────────┼─────────┼───────┤
│ 1. Required Sections        │ /18     │ ___     │ ___%  │
│ 2. Operational Frameworks   │ /25     │ ___     │ ___%  │
│ 3. Communication DNA        │ /20     │ ___     │ ___%  │
│ 4. Signature Phrases        │ /15     │ ___     │ ___%  │
│ 5. Authority Arsenal        │ /12     │ ___     │ ___%  │
│ 6. Objection Algorithms     │ /15     │ ___     │ ___%  │
│ 7. Copywriter Rules         │ /8      │ ___     │ ___%  │
│ 8. Final Validation         │ /7      │ ___     │ ___%  │
├─────────────────────────────┼─────────┼─────────┼───────┤
│ TOTAL                       │ /120    │ ___     │ ___%  │
└─────────────────────────────┴─────────┴─────────┴───────┘

RESULT:
[ ] ✅ Excellent (90-100%) - Deploy immediately
[ ] 🟡 Good (70-89%) - Minor revisions, then deploy
[ ] ⚠️ Needs Work (50-69%) - Major revision required
[ ] ❌ Failed (<50%) - Re-extract from sources

CRITICAL FAILURES (must be 0 for deployment):
- [ ] Missing required sections
- [ ] Less than 10 frameworks
- [ ] Less than 42 signature phrases
- [ ] Less than 5 objection algorithms
- [ ] YAML syntax errors
- [ ] Placeholders remaining

ISSUES FOUND:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

REMEDIATION PLAN:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
```

---

## Quick Validation Checklist

For rapid validation, check these critical items:

### Must-Have (Deployment Blockers)

- [ ] 10 operational frameworks
- [ ] 42+ signature phrases in 7 tiers
- [ ] 5 objection algorithms with 5 steps each
- [ ] 26+ copywriter rules
- [ ] Valid YAML syntax throughout
- [ ] No placeholders remaining

### Should-Have (Quality Indicators)

- [ ] 15+ mandatory words, 10+ forbidden words
- [ ] 20+ trigrams, 5+ rhetorical devices
- [ ] Complete 4-act crucible story
- [ ] 4+ proof stack templates
- [ ] Psychometric integration (if profile available)

### Nice-to-Have (Excellence Markers)

- [ ] Signature vocabulary with unique meanings
- [ ] Cross-references between frameworks and algorithms
- [ ] Sample outputs verified as authentic
- [ ] MMOS database integration complete

---

## Validation Report Template

After completing validation, create report at:
`{pasta}/{slug}/analysis/validation-report.md`

```markdown
# Validation Report: {Copywriter Name} Agent

## Summary
- **Agent:** {copywriter_name}
- **Validation Date:** {date}
- **Overall Score:** {score}% ({status})
- **Validated By:** {validator}

## Section Scores
| Section | Score | Status |
|---------|-------|--------|
| Required Sections | __/18 | ✅/🟡/⚠️/❌ |
| Operational Frameworks | __/25 | ✅/🟡/⚠️/❌ |
| Communication DNA | __/20 | ✅/🟡/⚠️/❌ |
| Signature Phrases | __/15 | ✅/🟡/⚠️/❌ |
| Authority Arsenal | __/12 | ✅/🟡/⚠️/❌ |
| Objection Algorithms | __/15 | ✅/🟡/⚠️/❌ |
| Copywriter Rules | __/8 | ✅/🟡/⚠️/❌ |
| Final Validation | __/7 | ✅/🟡/⚠️/❌ |
| **TOTAL** | __/120 | {status} |

## Issues Found
1. {issue_description}
   - Location: {section/field}
   - Severity: Critical/Major/Minor
   - Resolution: {how to fix}

## Recommendations
- {recommendation_1}
- {recommendation_2}

## Approval
- [ ] Approved for deployment
- [ ] Requires revision (see issues above)

---
*Validated using: checklists/copywriter-agent-creation-checklist.md*
```

---

## Integration with Pipeline

This checklist is used in:
- **Phase 9** of `tasks/create-copywriter-agent.md`
- Final validation before deployment
- Quality gate for all copywriter agents in CopywriterOS

### Related Files

- Master Task: `tasks/create-copywriter-agent.md`
- Master Template: `templates/copywriter-agent-tmpl.yaml`
- Quality Checklist: `checklists/copywriter-quality-checklist.md` (for output validation)
- Reference Agents: `agents/david-ogilvy.md`, `agents/alex-hormozi.md`

---

*Checklist Version: 1.0.0*
*CopywriterOS - Elite Copywriting Squad*
*Part of the AIOS Expansion Pack System*


---

## Referência: references/create-copywriter-agent.md

# Create Copywriter Agent - Master Orchestration Task

## Metadata

```yaml
task_id: create-copywriter-agent
version: 2.0.0
category: agent-creation
difficulty: advanced
elicit: true
minimum_output_lines: 600

methodology_source: "docs/research/copywriter-agent-creation-methodology-research.md"
theoretical_foundation:
  - "DeepPersona Research Framework - Taxonomy-guided persona creation"
  - "CharacterGPT - Persona reconstruction methodology"
  - "Nature: Psychometric Framework for LLM Personality"
  - "DPRF - Dynamic Persona Refinement Framework"
  - "Linguistic Fingerprinting - Voice capture methodology"

dependencies:
  tasks:
    - tasks/extract-frameworks.md
    - tasks/extract-communication-dna.md
    - tasks/extract-signature-phrases.md
    - tasks/build-authority-arsenal.md
    - tasks/create-objection-algorithms.md
  templates:
    - templates/copywriter-agent-tmpl.yaml
    - templates/frameworks-extraction-tmpl.yaml
    - templates/communication-dna-tmpl.yaml
    - templates/signature-phrases-tmpl.yaml
    - templates/authority-arsenal-tmpl.yaml
    - templates/objection-algorithms-tmpl.yaml
  checklists:
    - checklists/copywriter-agent-creation-checklist.md
  reference:
    - agents/dan-kennedy.md
    - agents/david-ogilvy.md

outputs:
  primary: "squads/copy/agents/{slug}.md"
  analysis_files:
    - "{pasta}/{slug}/analysis/frameworks.yaml"
    - "{pasta}/{slug}/analysis/communication-dna.yaml"
    - "{pasta}/{slug}/analysis/signature-phrases.yaml"
    - "{pasta}/{slug}/analysis/authority-arsenal.yaml"
    - "{pasta}/{slug}/analysis/objection-algorithms.yaml"
    - "{pasta}/{slug}/analysis/{slug}-rules.yaml"
    - "{pasta}/{slug}/analysis/validation-report.md"
```

---

## Executive Summary

**What This Task Does:**
Create a comprehensive AI copywriter agent that authentically replicates a master copywriter's thinking, communication, and methodology.

**Why This Matters:**
Generic AI produces generic copy. An authentic copywriter agent channels decades of expertise, distinctive voice, and proven frameworks - enabling anyone to access elite copywriting capability.

**The Persona Equation:**
```
Authentic Agent = Operational Frameworks + Communication DNA + Signature Phrases + Authority Arsenal + Objection Algorithms + Psychometric Integration
```

**Quality Standard:**
The resulting agent must be DISTINCTIVE (sounds like no one else), COMPLETE (can handle any relevant topic), CONSISTENT (responds reliably), and AUTHENTIC (true to source material).

---

## Theoretical Foundation

### The DeepPersona Research Framework

From academic research on synthetic personas:

> "Most synthetic personas are shallow and simplistic, capturing minimal attributes and failing to reflect the rich complexity and diversity of real human identities."

**Solution:** Taxonomy-guided, multi-layer extraction that captures not just WHAT someone says, but HOW they think and WHY they believe certain things.

### Persona Attribute Hierarchy

```
LAYER 4: MOTIVATIONAL (Hardest to extract)
├── Core values
├── Driving fears
└── Aspirations

LAYER 3: COGNITIVE
├── Mental models
├── Problem-solving approaches
└── Belief systems

LAYER 2: BEHAVIORAL
├── Communication style
├── Decision patterns
└── Response tendencies

LAYER 1: SURFACE (Easiest to extract)
├── Name, background
├── Profession, achievements
└── Public credentials
```

**Rule:** Extract from Layer 1 up. Surface attributes inform behavioral inference; behavioral patterns reveal cognitive approaches; cognitive understanding unlocks motivational drivers.

### Linguistic Fingerprint Components

A linguistic fingerprint is the unique combination of language patterns that make a person's communication identifiable:

| Component | Description | Extraction Method |
|-----------|-------------|-------------------|
| **Lexical** | Word choice patterns | Frequency analysis |
| **Syntactic** | Sentence structure | Length/complexity analysis |
| **Rhetorical** | Persuasion patterns | Device cataloging |
| **Pragmatic** | Communication intent | Directness/hedging analysis |

---

## PREREQUISITES

### Required Inputs

```yaml
elicit: true
question: "Please provide the following information about the copywriter:"
fields:
  - copywriter_name: "Full name of the copywriter (e.g., Dan Kennedy)"
  - slug: "Snake_case identifier (e.g., dan_kennedy)"
  - source_directory: "Path to source materials directory"
  - psychometric_profile: "Path to psychometric profile (optional)"
  - reference_agent: "Existing agent to use as structure reference"
```

### Source Material Requirements

| Material Type | Minimum | Ideal | Quality Indicators |
|--------------|---------|-------|-------------------|
| **Writing/Content advice** | 5 files | 10+ | Contains "how to," frameworks |
| **Business/Strategy** | 4 files | 8+ | Contains methodology, systems |
| **Personal journey** | 3 files | 6+ | Contains origin story, struggles |
| **Philosophy/Mindset** | 2 files | 4+ | Contains beliefs, principles |
| **Interviews/Podcasts** | 2 files | 4+ | Contains unscripted responses |
| **TOTAL** | 20 files | 40+ | 500+ words per file |

### Source Supplementation

When source material is insufficient:

```yaml
supplementation_sources:
  youtube_transcripts:
    value: "Natural speech patterns, unfiltered thought"
    process: "Download transcript, clean formatting, save as markdown"

  podcast_transcripts:
    value: "Long-form thinking, framework explanations"
    process: "Transcribe audio, clean, format as markdown"

  social_media:
    value: "Condensed, punchy signature phrases"
    process: "Collect threads/posts, organize by theme"

  book_excerpts:
    value: "Polished, edited framework explanations"
    process: "Extract key passages with proper citation"
```

### Quality Gate: Prerequisites

```
MANDATORY CHECKS:
- [ ] Source directory exists with 20+ files
- [ ] All source files are readable (markdown/text)
- [ ] Files span 4+ content type categories
- [ ] Reference agent file(s) identified
- [ ] Output directory exists: {pasta}/{slug}/analysis/
- [ ] Each file contains 500+ words of substantive content

QUALITY CHECKS:
- [ ] At least 3 files contain origin story / journey content
- [ ] At least 4 files contain explicit methodology / frameworks
- [ ] At least 2 files are interview/podcast format (natural speech)
- [ ] Content spans at least 3 years (shows evolution)
```

---

## PHASE 1: SETUP AND RECONNAISSANCE

### Step 1.1: Create Output Directory Structure

```bash
mkdir -p {pasta}/{slug}/analysis
mkdir -p {pasta}/{slug}/docs
```

### Step 1.2: Inventory Source Materials

Read ALL source files and create categorized inventory:

**Inventory Template:**

| File | Type | Topics | Quality | Lines | Extraction Value |
|------|------|--------|---------|-------|------------------|
| [filename] | Article | [topics] | High/Med/Low | [#] | Frameworks/DNA/Story |

**Type Categories:**
- `writing` - Copywriting advice and techniques
- `business` - Business strategy and methodology
- `marketing` - Marketing systems and approaches
- `personal` - Journey, struggles, origin story
- `philosophy` - Beliefs, principles, mindset
- `interview` - Unscripted conversations

**Extraction Value Tags:**
- `Frameworks` - Contains teachable methodologies
- `DNA` - Rich with distinctive vocabulary/style
- `Story` - Contains autobiographical content
- `Phrases` - Contains quotable statements
- `Stats` - Contains verifiable metrics

### Step 1.3: Read Reference Agents

Read reference agent files to understand target structure:

**Primary Reference:** `squads/copy/agents/dan-kennedy.md`
**Secondary Reference:** `squads/copy/agents/david-ogilvy.md`

**Analyze:**
1. Overall structure and sections
2. Depth of operational frameworks (10 required)
3. Communication DNA format and completeness
4. Signature phrases organization (7 tiers)
5. Authority arsenal components
6. Objection algorithm structure

### Step 1.4: Initial Extraction Pass

Before executing sub-tasks, do a quick pass through all sources to identify:

```yaml
initial_extraction_notes:

  framework_candidates:
    description: "Potential frameworks spotted"
    markers: "Step-by-step processes, named systems"
    count_target: "15+ candidates (will select 10)"

  vocabulary_patterns:
    description: "Distinctive words and phrases"
    markers: "Repeated unusual terms"
    count_target: "30+ potential mandatory words"

  story_elements:
    description: "Autobiographical content"
    markers: "Origin, struggles, breakthrough"
    completeness: "4 acts identifiable?"

  quotable_phrases:
    description: "Memorable statements"
    markers: "Standalone, original, powerful"
    count_target: "60+ candidates (will select 42+)"

  statistics:
    description: "Verifiable metrics"
    markers: "Numbers, achievements, results"
    count_target: "10+ potential statistics"
```

### Quality Gate: Setup Complete

```
- [ ] Output directory structure created
- [ ] All source files inventoried with categories
- [ ] Reference agent(s) thoroughly analyzed
- [ ] Initial extraction pass completed
- [ ] Framework candidates identified (15+)
- [ ] Vocabulary patterns noted (30+)
- [ ] Story elements mapped (4 acts)
- [ ] Quotable phrases marked (60+)
```

---

## PHASE 2: EXTRACT OPERATIONAL FRAMEWORKS

**Execute Sub-Task:** `tasks/extract-frameworks.md`

### Objective

Identify and document 10 operational frameworks the copywriter uses repeatedly. These are their intellectual property - the "how" behind their work.

### Framework Criteria

All 10 frameworks must meet these criteria:

```yaml
framework_criteria:

  repeatability:
    requirement: "Used across multiple contexts"
    evidence: "Appears in 3+ source files"

  teachability:
    requirement: "Can be explained to others"
    evidence: "Has clear steps or components"

  structure:
    requirement: "Identifiable process"
    evidence: "Steps, phases, or components"

  originality:
    requirement: "Their distinctive version"
    evidence: "Not generic advice"
```

### Framework Identification Markers

Scan sources for these language patterns:

| Pattern Type | Examples |
|--------------|----------|
| **Process language** | "The first thing I do is...", "My approach to..." |
| **Naming language** | "I call this the...", "My [X] method..." |
| **Teaching language** | "If you want to...", "The key is to..." |
| **Structural language** | "There are three types of...", "The components are..." |

### Framework Documentation Structure

```yaml
framework_template:
  name: "[Framework name]"
  category: "[copywriting|offer_creation|marketing|sales|content|audience|product|mindset]"
  origin: "[Source file or concept origin]"

  definition:
    one_sentence: "[Single sentence summary]"
    principle: "[Underlying belief or insight]"

  components:
    - component_1: "[First element]"
    - component_2: "[Second element]"
    - component_3: "[Third element - if applicable]"

  process:
    step_1:
      action: "[What to do]"
      output: "[Expected result]"
    step_2:
      action: "[What to do]"
      output: "[Expected result]"

  application:
    when_to_use: "[Trigger conditions]"
    when_not_to_use: "[Counter-indications]"

  common_mistakes:
    - mistake_1: "[What people do wrong]"
    - mistake_2: "[Another common error]"

  examples:
    - source: "[Source file]"
      quote: "[Relevant passage demonstrating framework]"

  related_frameworks:
    - "[Other framework this pairs with]"
```

### Category Distribution

Aim for diversity across categories:

| Category | Minimum | Description |
|----------|---------|-------------|
| copywriting | 2 | How they write persuasive copy |
| offer_creation | 1 | How they design offers |
| marketing_strategy | 1 | How they approach marketing |
| sales | 1 | How they close deals |
| content | 1 | How they create content |
| audience | 1 | How they understand audiences |
| mindset | 1 | How they think about success |
| (any) | 2 | Additional from any category |

### Output

- **File:** `{pasta}/{slug}/analysis/frameworks.yaml`
- **Template:** `templates/frameworks-extraction-tmpl.yaml`

### Quality Gate: Frameworks

```
MANDATORY CHECKS:
- [ ] Exactly 10 frameworks documented
- [ ] All categories represented (minimum 3 different)
- [ ] Each framework has all required fields
- [ ] Each framework has at least 1 source example
- [ ] YAML syntax validated

QUALITY CHECKS:
- [ ] Frameworks are distinctive (not generic advice)
- [ ] Frameworks are actionable (clear steps)
- [ ] Frameworks are complete (no gaps in process)
- [ ] Category distribution is balanced
```

---

## PHASE 3: EXTRACT COMMUNICATION DNA

**Execute Sub-Task:** `tasks/extract-communication-dna.md`

### Objective

Capture the copywriter's linguistic fingerprint: vocabulary, rhetoric, and formulas that make their communication distinctive.

### DNA Components

#### A. Vocabulary Extraction

**Mandatory Words (15+ required)**

Terms the copywriter uses constantly, often multiple times per piece.

```yaml
mandatory_word_extraction:

  process:
    1: "Analyze all source files for word frequency"
    2: "Identify words appearing in 80%+ of files"
    3: "Remove common words (the, is, and, etc.)"
    4: "Categorize by type"

  categories:
    action_verbs: "What actions they describe"
    value_words: "What they consider important"
    identity_words: "How they describe people"
    process_words: "How they describe activities"

  documentation:
    word: "[word]"
    frequency: "[times per 1000 words]"
    context: "[typical usage]"
    example: "[quote from source]"
```

**Forbidden Words (10+ required)**

Terms the copywriter never uses or actively avoids.

```yaml
forbidden_word_identification:

  detection_methods:
    absence_analysis: "Words common in field but absent in their work"
    explicit_rejection: "Words they criticize or mock"
    replacement_patterns: "What they use instead"

  documentation:
    word: "[forbidden word]"
    reason: "[why they avoid it]"
    replacement: "[what they use instead]"
```

**Signature Vocabulary (10+ required)**

Unique terms with specific meanings in their lexicon.

```yaml
signature_vocabulary:

  documentation:
    term: "[unique word or phrase]"
    their_definition: "[their specific meaning]"
    standard_definition: "[normal meaning if different]"
    usage: "[when/how they use this]"
    source: "[where first encountered]"
```

#### B. Trigram Analysis (20+ required)

Three-word combinations that appear frequently.

```yaml
trigram_extraction:

  quality_criteria:
    minimum_frequency: "Appears 3+ times"
    distinctiveness: "Not common in general writing"
    recognizability: "Would identify the writer"

  documentation:
    trigram: "[three-word phrase]"
    frequency: "[count]"
    context: "[when they use it]"
    example: "[quote showing usage]"
```

#### C. Rhetorical Devices (5+ required)

Persuasion patterns they favor.

```yaml
rhetorical_devices:

  common_types:
    - reframing: "Presenting concept from new angle"
    - juxtaposition: "Contrasting ideas for emphasis"
    - rule_of_three: "Concepts in groups of three"
    - anecdote: "Personal story to illustrate"
    - socratic_questioning: "Leading via questions"
    - pattern_interrupt: "Breaking flow for attention"
    - call_out: "Directly addressing audience"

  documentation:
    device: "[device name]"
    description: "[how they use it]"
    markers: "[words/phrases that signal it]"
    example: "[quote demonstrating]"
    frequency: "[how often used]"
```

#### D. Quick Formulas (5+ required)

Templates for common copy elements.

```yaml
quick_formulas:

  categories:
    hook: "Opening attention grabber"
    headline: "Main promise structure"
    cta: "Call to action pattern"
    transition: "Moving between sections"
    close: "Ending pattern"

  documentation:
    name: "[Formula name]"
    structure: "[Pattern with placeholders]"
    example: "[Filled-in example]"
    when_to_use: "[Appropriate contexts]"
```

#### E. Psychometric Influence (if profile available)

```yaml
psychometric_integration:

  disc_profile:
    dominant: "[D/I/S/C]"
    communication_impact:
      - "[How it affects their style]"

  mbti_type:
    type: "[4-letter type]"
    communication_impact:
      - "[How it affects their approach]"

  enneagram:
    type: "[1-9]"
    wing: "[wing number]"
    communication_impact:
      - "[How it affects their voice]"
```

### Output

- **File:** `{pasta}/{slug}/analysis/communication-dna.yaml`
- **Template:** `templates/communication-dna-tmpl.yaml`

### Quality Gate: Communication DNA

```
MANDATORY CHECKS:
- [ ] 15+ mandatory words with context
- [ ] 10+ forbidden words with reasoning
- [ ] 10+ signature vocabulary with definitions
- [ ] 20+ trigrams extracted
- [ ] 5+ rhetorical devices documented
- [ ] 5+ quick formulas created
- [ ] YAML syntax validated

QUALITY CHECKS:
- [ ] Vocabulary is distinctive (not generic)
- [ ] Trigrams are recognizable
- [ ] Formulas are actionable
- [ ] Psychometric integration complete (if profile exists)
```

---

## PHASE 4: EXTRACT SIGNATURE PHRASES

**Execute Sub-Task:** `tasks/extract-signature-phrases.md`

### Objective

Curate 42+ memorable, quotable phrases organized in 7 tiers by usage frequency.

### Phrase Selection Criteria

Each phrase must be:

```yaml
phrase_criteria:

  standalone:
    requirement: "Makes sense without context"
    test: "Would this work on a t-shirt?"

  memorable:
    requirement: "Sticks in the mind"
    test: "Would someone quote this?"

  original:
    requirement: "Distinctively theirs"
    test: "Could anyone else have said this?"

  attributable:
    requirement: "Clearly from this person"
    test: "Would readers recognize the source?"
```

### The 7-Tier System

| Tier | Name | Usage Frequency | Count | Purpose |
|------|------|-----------------|-------|---------|
| 1 | Core Mantras | Every piece (1-2x daily) | 3-5 | Signature identity phrases |
| 2 | Methodology Pillars | Weekly | 5-7 | Framework summary phrases |
| 3 | Theme: [Primary Topic] | Per topic | 6-8 | Main expertise area |
| 4 | Theme: [Secondary Topic] | Per topic | 6-8 | Second expertise area |
| 5 | Theme: [Tertiary Topic] | Per topic | 6-8 | Third expertise area |
| 6 | Philosophy & Mindset | Monthly | 5-7 | Worldview statements |
| 7 | Tactical & Situational | As needed | 5-7 | Specific context phrases |

### Phrase Documentation Structure

```yaml
signature_phrase_entry:
  phrase: "[Original phrase in English]"
  tier: "[1-7]"
  context: "[When/how to use this phrase]"
  source: "[Source file or content piece]"
  related_framework: "[If connects to a framework]"
  emotional_tone: "[inspiring|challenging|reassuring|etc.]"
```

### Extraction Process

```
1. READ all source files marking quotable statements
2. FILTER for phrases meeting all 4 criteria
3. CATEGORIZE by tier based on importance/frequency
4. BALANCE distribution across all 7 tiers
5. VERIFY each phrase has source citation
6. DEDUPLICATE similar phrases
7. SELECT final 42+ best phrases
```

### Output

- **File:** `{pasta}/{slug}/analysis/signature-phrases.yaml`
- **Template:** `templates/signature-phrases-tmpl.yaml`

### Quality Gate: Signature Phrases

```
MANDATORY CHECKS:
- [ ] Minimum 42 phrases extracted
- [ ] All 7 tiers populated
- [ ] Each phrase has context and source
- [ ] No duplicate phrases
- [ ] YAML syntax validated

QUALITY CHECKS:
- [ ] Phrases are genuinely quotable (not generic)
- [ ] Tier 1 phrases are truly distinctive
- [ ] Theme tiers match their actual expertise areas
- [ ] Distribution across tiers is balanced
```

---

## PHASE 5: BUILD AUTHORITY ARSENAL

**Execute Sub-Task:** `tasks/build-authority-arsenal.md`

### Objective

Compile credibility elements: crucible story (4 acts), statistics, products, clients, and proof templates.

### A. Crucible Story (4 Acts)

```yaml
crucible_story_structure:

  act_1_origin:
    purpose: "Establish relatability"
    required_fields:
      year: "YYYY or range"
      location: "Where this happened"
      context: "Starting situation"
      key_event: "Inciting incident"
      initial_belief: "What they thought then"
      emotional_state: "How they felt"
    sources_to_check:
      - "About pages"
      - "Origin story articles"
      - "Book introductions"
      - "Early podcast interviews"

  act_2_struggle:
    purpose: "Build credibility through adversity"
    required_fields:
      period: "Timeframe of struggles"
      primary_challenge: "Main obstacle"
      failures:
        - failure: "Specific failure"
          impact: "How it affected them"
          lesson: "What they learned"
      dark_moment:
        description: "Lowest point - be specific"
        year: "When this occurred"
        what_almost_happened: "What they nearly did"
    sources_to_check:
      - "Vulnerable posts"
      - "Failure stories"
      - "Lesson learned content"

  act_3_breakthrough:
    purpose: "Establish unique value"
    required_fields:
      year: "When breakthrough occurred"
      catalyst: "What triggered the change"
      realization:
        insight: "Key realization"
        how_discovered: "How they found this"
      first_success:
        description: "First major win"
        metric: "Specific result"
    sources_to_check:
      - "Success stories"
      - "Methodology origin"
      - "Turning point narratives"

  act_4_mastery:
    purpose: "Demonstrate current authority"
    required_fields:
      current_state:
        position: "Current title/role"
        reach: "Audience size"
        recognition: "How industry sees them"
      signature_achievement: "Defining accomplishment"
      impact_on_others:
        students_helped: "Number transformed"
        methodology_spread: "How approach has spread"
      core_philosophy: "Central belief"
    sources_to_check:
      - "Current bio"
      - "Results pages"
      - "Recent interviews"
```

### B. Authority Statistics

```yaml
authority_statistics_categories:

  career:
    examples:
      - "Years of experience"
      - "Number of clients"
      - "Projects completed"
    minimum: 2 statistics

  results:
    examples:
      - "Revenue generated"
      - "ROI delivered"
      - "Growth achieved"
    minimum: 2 statistics

  recognition:
    examples:
      - "Awards received"
      - "Media features"
      - "Books published"
    minimum: 1 statistic

  reach:
    examples:
      - "Email subscribers"
      - "Social followers"
      - "Course students"
    minimum: 1 statistic

  verification_level:
    A: "Third-party verified"
    B: "Publicly documented"
    C: "Self-reported with evidence"
    D: "Self-reported claim"
```

### C. Notable Products/Clients

```yaml
notable_work:

  products:
    documentation:
      name: "[Product name]"
      type: "[course|book|software|service|community|system]"
      description: "[One-line description]"
      result_claim: "[What it helps achieve]"
      social_proof: "[Sales/users if available]"
    minimum: 3 products

  clients:
    documentation:
      name: "[Client name or type]"
      type: "[individual|company|organization]"
      recognition_level: "[celebrity|industry_leader|notable|general]"
      result: "[What they achieved]"
    minimum: 2 clients/types
```

### D. Proof Stack Templates (4 required)

```yaml
proof_templates:

  transformation_proof:
    structure: "From [before] to [after] in [timeframe]"
    purpose: "Relatability + possibility"

  results_proof:
    structure: "[Number] achieved [in timeframe] for [audience]"
    purpose: "Capability demonstration"

  credibility_proof:
    structure: "[Title] + [years] + [achievement]"
    purpose: "Expert positioning"

  social_proof:
    structure: "[Number] of [audience] have [result]"
    purpose: "Community validation"
```

### Output

- **File:** `{pasta}/{slug}/analysis/authority-arsenal.yaml`
- **Template:** `templates/authority-arsenal-tmpl.yaml`

### Quality Gate: Authority Arsenal

```
MANDATORY CHECKS:
- [ ] 4-act crucible story complete
- [ ] Each act has source citations
- [ ] 5+ verifiable statistics documented
- [ ] 3+ notable products listed
- [ ] 2+ client types listed
- [ ] 4 proof stack templates created
- [ ] YAML syntax validated

QUALITY CHECKS:
- [ ] Story has clear transformation arc
- [ ] Dark moment is specific (not generic)
- [ ] Statistics are impressive (establish authority)
- [ ] Proof templates use actual extracted data
```

---

## PHASE 6: CREATE OBJECTION ALGORITHMS

**Execute Sub-Task:** `tasks/create-objection-algorithms.md`

### Objective

Create 5 response algorithms for common objections using the copywriter's voice, frameworks, and vocabulary.

### Algorithm Structure

```yaml
objection_algorithm_template:

  metadata:
    name: "[Algorithm name]"
    trigger: "When user says something like '[objection]'"
    category: "[time|competence|market|credibility|prerequisite]"

  response_pattern:
    step_1_acknowledge:
      purpose: "Validate the objection"
      pattern: "I get it. [Rephrase their concern]."
      key_phrase: "[Signature phrase to use]"

    step_2_reframe:
      purpose: "Shift perspective"
      pattern: "But here's what most people miss..."
      framework_reference: "[Related framework]"

    step_3_evidence:
      purpose: "Provide proof"
      pattern: "[Story/stat that addresses objection]"
      source: "[From authority arsenal]"

    step_4_vision:
      purpose: "Paint the future"
      pattern: "Imagine if instead of [objection], you..."
      emotional_tone: "[inspiring|challenging|etc.]"

    step_5_action:
      purpose: "Propose next step"
      pattern: "Here's what I'd do if I were you..."
      call_to_action: "[Specific action]"

  resolution:
    expected_outcome: "[What should happen]"
    fallback: "[If objection persists]"

  integration:
    key_phrases: ["[phrase 1]", "[phrase 2]"]
    framework_used: "[framework name]"
    vocabulary_used: ["[mandatory words]"]
```

### Required Objection Categories

| # | Category | Trigger Examples |
|---|----------|------------------|
| 1 | Time/Resource Scarcity | "I don't have time", "I can't afford it" |
| 2 | Competence Doubt | "I don't know enough", "I'm not an expert" |
| 3 | Market Saturation | "It's too competitive", "I'm too late" |
| 4 | Credibility Concern | "Who would listen to me?", "I have no credentials" |
| 5 | Prerequisite Myth | "I need more followers first", "I need to validate first" |

### Output

- **File:** `{pasta}/{slug}/analysis/objection-algorithms.yaml`
- **Template:** `templates/objection-algorithms-tmpl.yaml`

### Quality Gate: Objection Algorithms

```
MANDATORY CHECKS:
- [ ] Exactly 5 algorithms created
- [ ] Each algorithm has 5 steps
- [ ] Key phrases are from signature phrases
- [ ] Framework references exist in extracted frameworks
- [ ] YAML syntax validated

QUALITY CHECKS:
- [ ] Responses sound like the copywriter
- [ ] Reframes use their mental models
- [ ] Evidence uses their actual stories/stats
- [ ] Actions align with their methodology
```

---

## PHASE 7: EXTRACT COPYWRITER-SPECIFIC RULES

### Objective

Extract explicit rules and advice the copywriter gives, organized by category.

### Rule Structure

```yaml
copywriter_rules:

  writing:
    minimum: 8 rules
    extraction_markers:
      - "Always..."
      - "Never..."
      - "The key is..."
      - "What most people get wrong..."
    format:
      rule: "[Actionable imperative]"
      source: "[Source file]"
      context: "[When this applies]"

  content_strategy:
    minimum: 6 rules
    extraction_markers:
      - "When creating content..."
      - "The best content..."
      - "I recommend..."

  business:
    minimum: 6 rules
    extraction_markers:
      - "In business..."
      - "The most successful..."
      - "If you want to grow..."

  mindset:
    minimum: 6 rules
    extraction_markers:
      - "The truth is..."
      - "Most people believe..."
      - "Success requires..."
```

### Output

- **File:** `{pasta}/{slug}/analysis/{slug}-rules.yaml`

### Quality Gate: Rules

```
MANDATORY CHECKS:
- [ ] 8+ writing rules
- [ ] 6+ content strategy rules
- [ ] 6+ business rules
- [ ] 6+ mindset rules (26+ total)
- [ ] All rules have source citations
- [ ] YAML syntax validated

QUALITY CHECKS:
- [ ] Rules are actionable (imperative voice)
- [ ] Rules are specific (not generic advice)
- [ ] Rules are verifiable from sources
```

---

## PHASE 8: ASSEMBLE FINAL AGENT FILE

### Objective

Combine all extracted components into the final agent markdown file.

### Agent File Structure

```markdown
# {Copywriter Name} - CopywriterOS Agent

## YAML Front Matter
```yaml
agent:
  name: "{Copywriter Name}"
  id: "{slug}"
  title: "{Title/description}"
  icon: "{emoji}"
  era: "{Classic|Transition|Modern}"
  whenToUse: "{When to activate this agent}"
  customization: |
    [Key behavioral notes]

persona:
  role: "{Professional role}"
  style: "{Communication style}"
  identity: "{One-sentence identity}"
  focus: "{What they focus on}"
  background: |
    [Brief background from crucible story]

core_principles:
  - "[Principle 1 - from frameworks/rules]"
  - "[Principle 2]"
  - "[Principle 3]"

operational_frameworks:
  [All 10 frameworks from Phase 2]

communication_dna:
  [Complete DNA from Phase 3]

signature_phrases:
  [All 7 tiers from Phase 4]

authority_proof_arsenal:
  [Complete arsenal from Phase 5]

objection_algorithms:
  [All 5 algorithms from Phase 6]

{copywriter}_rules:
  [All rules from Phase 7]

security:
  [Boundaries and limitations]

dependencies:
  [Required files and resources]

knowledge_areas:
  [Topics the agent is expert in]

capabilities:
  [What the agent can do]
```
---
**MMOS Integration Note:**
[If mind exists in database, link to it]
```

### Output

- **File:** `squads/copy/agents/{slug}.md`

### Quality Gate: Assembly

```
MANDATORY CHECKS:
- [ ] All sections populated
- [ ] Structure matches reference agents
- [ ] No placeholder text remaining
- [ ] YAML blocks are valid
- [ ] Markdown renders correctly

QUALITY CHECKS:
- [ ] Greeting sounds like them
- [ ] Commands are relevant to their expertise
- [ ] Integration references are accurate
```

---

## PHASE 9: VALIDATION

**Execute Checklist:** `checklists/copywriter-agent-creation-checklist.md`

### Validation Process

```yaml
validation_process:

  structural_validation:
    - "All required sections present"
    - "YAML syntax valid"
    - "Markdown renders correctly"
    - "No placeholder text"

  content_validation:
    - "10 frameworks documented"
    - "42+ signature phrases"
    - "5 objection algorithms"
    - "Complete communication DNA"
    - "Full authority arsenal"
    - "26+ rules"

  authenticity_validation:
    - "Voice is distinctive (not generic)"
    - "Frameworks are their methodology"
    - "Phrases are from actual sources"
    - "Statistics are verifiable"

  functionality_testing:
    test_prompts:
      - "Ask for advice on [their expertise]"
      - "Ask about their methodology"
      - "Raise common objection"
      - "Request specific framework"
    pass_criteria:
      - "Response sounds like them"
      - "Uses signature vocabulary"
      - "References their frameworks"
      - "Includes appropriate phrases"
```

### Scoring Targets

| Section | Target | Weight |
|---------|--------|--------|
| Required Sections | 100% | 15% |
| Operational Frameworks | 90%+ | 20% |
| Communication DNA | 90%+ | 20% |
| Signature Phrases | 90%+ | 15% |
| Authority Arsenal | 90%+ | 15% |
| Objection Algorithms | 90%+ | 10% |
| Final Validation | 90%+ | 5% |

**Overall Target: 90%+**

### Output

- **File:** `{pasta}/{slug}/analysis/validation-report.md`

### Quality Gate: Validation

```
- [ ] Overall score 90%+
- [ ] All critical issues resolved
- [ ] YAML syntax validated
- [ ] Agent tested with sample prompts
- [ ] Distinctiveness confirmed
```

---

## FINAL OUTPUT SUMMARY

Upon successful completion:

### Analysis Files

| File | Location |
|------|----------|
| frameworks.yaml | `{pasta}/{slug}/analysis/` |
| communication-dna.yaml | `{pasta}/{slug}/analysis/` |
| signature-phrases.yaml | `{pasta}/{slug}/analysis/` |
| authority-arsenal.yaml | `{pasta}/{slug}/analysis/` |
| objection-algorithms.yaml | `{pasta}/{slug}/analysis/` |
| {slug}-rules.yaml | `{pasta}/{slug}/analysis/` |
| validation-report.md | `{pasta}/{slug}/analysis/` |

### Agent File

| File | Location |
|------|----------|
| {slug}.md | `squads/copy/agents/` |

---

## TROUBLESHOOTING

### Common Issues

**Issue:** Not enough source material

**Solutions:**
- Supplement with YouTube/podcast transcripts
- Search for interviews and appearances
- Check social media for threads/posts
- Look for book excerpts and reviews

---

**Issue:** Framework overlap

**Solutions:**
- Merge similar frameworks
- Keep the 10 most distinctive
- Look for unique applications
- Focus on process differences

---

**Issue:** Generic-sounding phrases

**Solutions:**
- Dig deeper into sources
- Look for unusual word combinations
- Find their distinctive expressions
- Verify uniqueness against common phrases

---

**Issue:** Incomplete authority arsenal

**Solutions:**
- Search harder for origin stories
- Use available metrics only
- Focus on qualitative proof
- Check all interview content

---

**Issue:** Validation score below 90%

**Solutions:**
- Review failed sections
- Supplement missing components
- Improve weak areas
- Re-test after improvements

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01 | Initial task creation |
| 2.0.0 | 2026-01-23 | Complete rewrite with research-first methodology, added theoretical foundation, expanded all phases, detailed quality gates |

---

*CopywriterOS Task v2.0.0*
*Part of the AIOS Squad System*
*Based on: docs/research/copywriter-agent-creation-methodology-research.md*


---

## Referência: references/strategy-angle-selection.md

# Angle Selection

**Task ID**: `strategy-004`
**Task Name**: Angle Selection
**Phase**: Strategy & Planning

## Purpose

An angle is the strategic lens through which you present your product, service, or Big Idea. It's the perspective, framing, or positioning that makes your message relevant to a specific segment of your audience at a specific moment in time. While your product might deliver a dozen benefits to various audiences, your angle is the singular focus you choose for a particular campaign or touchpoint. It's the answer to: "Of all the things I could say, what ONE thing will resonate most powerfully with THIS audience RIGHT NOW?"

The angle is not the product—it's the door through which prospects enter to discover the product. Two campaigns for the same offer can have wildly different angles and attract completely different buyers. A weight loss program might use a "vanity angle" (look amazing at your reunion) for one audience and a "health angle" (reverse pre-diabetes) for another. Same program, different entry point, different conversion rates. Choosing the right angle is often the difference between a campaign that flops and one that scales.

This task provides a systematic framework for identifying, evaluating, and selecting angles using methodologies from Eugene Schwartz's awareness stages, Gary Bencivenga's benefit-to-angle mapping, and modern split-testing protocols from practitioners like Alex Hormozi and Russell Brunson. You'll learn to generate multiple angles, pressure-test them against market data, and select winners that maximize relevance and resonance.

## When to Use

- When planning any new campaign or funnel
- When entering a new traffic source or platform
- When targeting a new avatar segment
- When testing fresh positioning for an existing offer
- When performance plateaus and you need to refresh messaging
- When launching to different awareness stages simultaneously
- When creating multiple ad sets for audience testing

## Input Requirements

### Required Inputs
- Avatar research (segmented by desires, pains, beliefs)
- Product/offer (features, benefits, transformation)
- Big Idea and/or unique mechanism
- Market sophistication level
- Competitive landscape (what angles competitors are using)
- Previous campaign data (if available—what worked, what didn't)

### Optional Inputs
- Seasonal or cultural trends (capitalize on timely relevance)
- Platform-specific constraints (Instagram vs. LinkedIn angles differ)
- Existing customer testimonials (reveal which angles converted them)
- Sales call recordings (what objections come up, what resonates)
- Content performance data (which blog posts, emails, or videos got engagement)

### Example Data
```yaml
product: "Premium sales training for B2B teams"
avatar_segment_1:
  desire: "Close more deals without being pushy"
  pain: "Hate feeling like a sleazy salesperson"
  belief: "Good salespeople are naturally charismatic"
avatar_segment_2:
  desire: "Consistently hit quota"
  pain: "Unpredictable month-to-month results"
  belief: "Sales is a numbers game"
market_sophistication: "Stage 3 - Solution aware"
competitors_using: ["Script-based training", "Mindset coaching", "Role-play workshops"]
```

## Output Format

### Expected Artifacts
1. Angle brainstorm (20-30 angles)
2. Angle evaluation matrix (scored and ranked)
3. Top 5 angles with full documentation
4. Angle-to-hook mapping
5. Testing plan for angle validation

### Schema
```yaml
angle:
  name: "Descriptive angle name"
  core_premise: "The central positioning statement"
  target_avatar_segment: "Which subset of your audience"
  primary_emotion: "Hope/Fear/Anger/Curiosity/etc."
  entry_point: "The specific desire or pain it addresses"
  differentiation: "How this differs from competitor angles"
  supporting_proof: ["Proof element 1", "Proof element 2"]
  hook_examples: ["Hook variation 1", "Hook variation 2"]
  schwartz_stage: "Which awareness stage it targets"
  conversion_hypothesis: "Why this angle should convert"
  testing_priority: "High/Medium/Low"
```

### Examples

**Angle 1: The Anti-Script Angle**
- Core Premise: You're losing deals because you sound scripted; authenticity closes
- Target: Sales reps who hate sounding robotic
- Emotion: Relief + Permission
- Entry Point: "I hate sounding like a telemarketer"
- Differentiation: Opposes script-based training (dominant in market)

**Angle 2: The Consistency Angle**
- Core Premise: Stop the feast-or-famine cycle with a repeatable system
- Target: Sales reps with unpredictable results
- Emotion: Frustration + Hope
- Entry Point: "My results are all over the place"
- Differentiation: Focuses on process, not personality

## Assigned Copywriter(s)

**Primary**: Eugene Schwartz (market sophistication and angle-to-awareness mapping)
**Secondary**: Gary Bencivenga (benefit extraction and angle differentiation)
**Advisory**: Claude Hopkins (reason-why angles), Alex Hormozi (offer angle integration), David Ogilvy (brand-consistent angling)

Eugene Schwartz's framework for matching angles to awareness stages is foundational. Gary Bencivenga's skill at finding unique angles in commoditized markets is essential. Modern practitioners add testing rigor and platform-specific insights.

## Dependencies

**Must Complete First**:
- Avatar research (you can't angle without knowing your audience deeply)
- Big Idea generation (the angle often flows from the Big Idea)

**Should Complete First**:
- Unique mechanism (mechanism-focused angles are powerful)
- Hook ideation (hooks and angles inform each other)

**Can Run In Parallel**:
- Story mining (stories can become or support angles)
- Benefit ladder (benefits inform angle selection)

## Step-by-Step Execution

### Step 1: Segment Your Avatar by Primary Motivation

Don't treat your entire audience as monolithic. Segment by:

**Segment 1: Desire-Driven**
- What they want (aspiration, achievement, status)
- Angle focus: Attainment, transformation, success

**Segment 2: Pain-Driven**
- What they want to escape (frustration, fear, loss)
- Angle focus: Relief, solution, prevention

**Segment 3: Belief-Driven**
- What worldview they hold (identity, values, principles)
- Angle focus: Alignment, validation, tribe

Create at least one angle for each segment.

### Step 2: Apply Eugene Schwartz's Awareness-Stage Framework

Map angles to the five awareness stages:

**Stage 1 - Unaware**: Problem education angles
- "The hidden reason you're struggling with [problem]"
- Angle: Reveal the problem they don't know they have

**Stage 2 - Problem Aware**: Solution introduction angles
- "What if there's a better way to solve [problem]?"
- Angle: Introduce your category of solution

**Stage 3 - Solution Aware**: Differentiation angles
- "Why [your unique approach] works when [standard approach] fails"
- Angle: Contrast your mechanism with alternatives

**Stage 4 - Product Aware**: Proof and conviction angles
- "Why [number] people are switching to [your product]"
- Angle: Social proof, results, credibility

**Stage 5 - Most Aware**: Offer and urgency angles
- "Last chance to [get offer] before [deadline]"
- Angle: Deal, bonus, scarcity

Identify where most of your traffic is in the awareness journey and weight your angles accordingly.

### Step 3: Generate Angles Using the 8 Core Angle Categories

Create 2-4 angles in each category:

**Category 1: Time Angles** (speed, efficiency, urgency)
- "The fastest way to..."
- "In just [X] days/hours/minutes..."
- "Before it's too late..."

**Category 2: Ease Angles** (simplicity, effort reduction)
- "The lazy person's guide to..."
- "Without hard work/sacrifice/struggle..."
- "So simple even [unlikely person] could do it..."

**Category 3: Value Angles** (ROI, cost-effectiveness, getting more)
- "Get [X] for the price of [Y]"
- "More results in less time/money..."
- "The highest ROI method for..."

**Category 4: Safety Angles** (risk reversal, guarantee, security)
- "Zero risk, 100% guaranteed..."
- "Try it free, keep it if it works..."
- "The safest way to..."

**Category 5: Status Angles** (social proof, exclusivity, elite)
- "Join [impressive number/group] who..."
- "The insider secret that..."
- "What high-performers do differently..."

**Category 6: Rebellion Angles** (anti-establishment, contrarian)
- "Ignore the outdated advice about..."
- "Why [authority/conventional wisdom] is wrong..."
- "The underground method that..."

**Category 7: Transformation Angles** (before/after, identity shift)
- "From [negative state] to [positive state] in [timeframe]"
- "Become the person who..."
- "The complete reinvention..."

**Category 8: Discovery Angles** (new information, revelation)
- "The newly discovered method..."
- "What scientists just learned about..."
- "The shocking truth about..."

### Step 4: Cross-Reference Competitor Angles

Audit competitor messaging:
- What angles are they using?
- Which angles are saturated?
- What angles are they NOT using?

**Strategy**: Angle into the gaps. If everyone is using "speed" angles ("Get results in 30 days!"), consider "thoroughness" angles ("Take the time to do it right—results that last").

Document in a competitive angle map:

| Competitor | Primary Angle | Market Saturation | Opportunity |
|------------|---------------|-------------------|-------------|
| Competitor A | Speed angle | High | Differentiate on quality |
| Competitor B | Low price | High | Differentiate on value/ROI |

### Step 5: Apply the "Reason Why" Test (Claude Hopkins)

For each angle, complete the sentence:

"You should choose this product BECAUSE..."

The angle must provide a compelling "reason why" that's:
- Credible (they believe it)
- Relevant (they care about it)
- Differentiating (competitors can't say the same thing)

Example:
- **Weak**: "Because it's the best"
- **Strong**: "Because it's the only system designed specifically for [niche avatar] struggling with [specific pain]"

### Step 6: Map Angles to Your Big Idea and Mechanism

Your angle should either:
- **Introduce the Big Idea**: "What if everything you thought about X is wrong?"
- **Leverage the Mechanism**: "The only system using [unique mechanism]"
- **Address a Belief Preventing Buy-In**: "You don't need [false requirement]—you need [your approach]"

Document the connection:

| Angle | Big Idea Connection | Mechanism Integration |
|-------|---------------------|----------------------|
| Anti-Script Angle | Authenticity > Scripts | Uses conversational frameworks |
| Consistency Angle | System > Personality | Repeatable 4-phase process |

### Step 7: Evaluate Each Angle Using the 5-Point Scoring System

Score each angle on a 1-10 scale:

1. **Avatar Resonance**: Does this speak directly to a core desire/pain?
2. **Market Differentiation**: Is this angle being used by competitors?
3. **Proof Availability**: Can you back this angle up with evidence?
4. **Emotional Intensity**: Does this evoke a strong emotion?
5. **Conversion Potential**: Gut check—will this drive action?

Total the scores (max 50). Angles scoring 35+ advance to testing.

### Step 8: Create the "Angle-to-Hook" Map

For each top angle, generate 3-5 hooks:

**Angle**: Anti-Script Selling
**Hooks**:
1. "Stop sounding like a telemarketer (and start closing like a consultant)"
2. "Why scripts are killing your close rate"
3. "The anti-script method that increased our team's close rate 73%"
4. "Throw away your script—here's what to do instead"
5. "Scripts are for actors, not salespeople. Here's what works."

This ensures your angle can be expressed in multiple attention-grabbing ways.

### Step 9: Test Angles Against Objections

For each angle, anticipate the immediate objection:

**Angle**: "Get results in 7 days"
**Objection**: "That sounds too fast to be real"
**Objection Handling**: Proof (before/afters from day 7), mechanism (why it's fast), testimonials

If you can't overcome the objection your angle creates, it's not viable.

### Step 10: Select Primary and Secondary Angles

**Primary Angle**: The highest-scoring angle that you'll build your main campaign around
**Secondary Angle**: The runner-up for testing and alternate audience segments
**Tertiary Angles**: Reserve angles for future campaigns, retargeting, or content

Document the rationale for your primary selection:
- Why this angle over others
- What proof supports it
- What avatar segment it targets
- What awareness stage it addresses

### Step 11: Build Angle-Specific Proof Stacks

For your primary angle, compile:
- **Testimonials** that speak to this angle's promise
- **Data/statistics** that validate the angle
- **Case studies** that illustrate the angle in action
- **Authority/credentials** relevant to the angle

Example: If your angle is "speed," you need proof of speed (time-stamped results, before/after timelines).

### Step 12: Create Platform-Specific Angle Variations

Adapt your angle for different platforms:

**Facebook Ads**: Emotion-forward, story-driven angle
- "I was skeptical about [angle], but after seeing [result]..."

**Google Ads**: Intent-driven, solution-focused angle
- "Looking for [desired outcome]? Try [angle-based solution]"

**Email**: Relationship-driven, curiosity angle
- "Quick question about [angle-related problem]..."

**Landing Page**: Clarity-forward, benefit-rich angle
- Clear headline + subhead that fully expresses the angle

### Step 13: Document Angle Messaging Guidelines

For your primary angle, create:

**Do's**:
- Language to use
- Emotions to evoke
- Stories that support the angle
- Visual metaphors

**Don'ts**:
- Language that contradicts the angle
- Conflicting messages
- Off-brand positioning

This becomes the creative brief for all copywriters and designers.

### Step 14: Build Your Testing Plan

Determine how you'll validate angles:

**Test 1: Hook-Level Testing (Ad Headlines)**
- Run top 3 angles as Facebook ad headlines
- Measure CTR, CPC, cost per lead
- Budget: $50-100 per angle
- Timeline: 3-7 days

**Test 2: Landing Page Testing (Full Angle Expression)**
- Build landing pages for top 2 angles
- Split traffic 50/50
- Measure opt-in rate, cost per acquisition
- Timeline: 7-14 days

**Test 3: Sales Message Testing (Full Funnel)**
- Run winning angle through full funnel (ad → landing page → sales page → purchase)
- Measure conversion rate, customer LTV
- Timeline: 30-60 days

### Step 15: Create Angle Iteration Plan

Angles aren't permanent. Plan for evolution:

**Quarterly Review**:
- What angles are working?
- What angles have fatigued?
- What new angles should be tested?

**Iteration Triggers**:
- Performance drop >20%
- New competitor angles emerge
- Market trends shift
- New avatar insights discovered

Document your angle rotation strategy to keep messaging fresh.

## Tips & Best Practices

1. **Angle to Audience, Not Product**: The mistake most marketers make is choosing angles based on what they're excited about instead of what the audience cares about. Your favorite feature might not be the best angle. Let avatar research, not founder enthusiasm, drive angle selection.

2. **One Angle Per Campaign**: Don't try to combine multiple angles in a single campaign. If you're positioning on "speed," don't also try to position on "thoroughness." Mixing angles creates confusion and dilutes impact. One campaign, one angle, one clear message.

3. **Test Angles at the Hook Level First**: Don't invest in building an entire funnel around an untested angle. Test angles as ad headlines or email subject lines first. The angle that gets the highest CTR and cheapest CPC at the hook level will likely perform best throughout the funnel.

4. **Match Angle to Traffic Temperature**: Cold traffic needs simpler, more universal angles ("Lose weight without starving"). Warm traffic can handle more sophisticated angles ("Metabolic priming for stubborn fat loss"). Don't hit cold audiences with complex mechanism angles—they're not ready.

5. **Document Why Each Angle Lost (Not Just Why It Won)**: When testing angles, note why certain angles failed. "Speed angle didn't resonate" is a valuable insight. Maybe your audience doesn't care about speed—they care about safety. Losing angles teach you as much as winning ones.

## Common Pitfalls

1. **Choosing Angles Based on Novelty Instead of Resonance**: Just because an angle is clever or unique doesn't mean it will convert. "The quantum physics of weight loss" might be novel, but if your audience doesn't care about quantum physics, it's dead on arrival. Resonance > Novelty.

2. **Ignoring Proof Availability**: Selecting an angle you can't substantiate is a recipe for high refund rates and damaged credibility. If you angle on "fastest results in the industry" but have no speed-specific proof, you're building on quicksand. Choose angles you can prove.

3. **Using the Same Angle Across All Traffic Stages**: A prospect who's never heard of you needs a different angle than someone who's been on your email list for six months. Cold traffic needs broad, universally relevant angles. Warm traffic needs specific, nuanced angles. Tailor your angle to the temperature.

4. **Forgetting That Angles Fatigue**: Even winning angles lose effectiveness over time as the market becomes saturated with them. If you've been running the same angle for 12+ months, it's time to test new angles. Markets evolve, trends shift, competitors copy. Rotate angles to maintain freshness.

5. **Angle Doesn't Match the Offer**: If your angle is "Get results fast" but your program is a 12-month commitment, you have a mismatch. The angle sets expectations that the offer doesn't fulfill. Ensure your angle and offer are aligned, or you'll have buyer's remorse and refunds.

## Example Usage Scenario

**Context**: A B2B sales training company has a program that teaches consultative selling. The market is crowded with script-based training, role-play workshops, and mindset coaching. Avatar research reveals two distinct segments: (1) sales reps who hate sounding pushy/scripted, and (2) sales managers who need consistent, predictable results from their teams.

**Execution**:

1. **Avatar Segmentation**:
   - **Segment 1**: Individual sales reps (desire: authenticity, pain: sounding robotic)
   - **Segment 2**: Sales managers (desire: consistency, pain: unpredictable team performance)

2. **Angle Brainstorm** (20 angles generated, top 5 selected):

   **For Segment 1** (Individual Reps):
   - **Angle A**: "The Anti-Script Method" (rebellion angle)
   - **Angle B**: "The Conversational Close" (ease angle)
   - **Angle C**: "Authenticity Sells" (transformation/identity angle)

   **For Segment 2** (Managers):
   - **Angle D**: "The Consistency System" (safety/reliability angle)
   - **Angle E**: "From Chaos to Predictable Pipeline" (transformation angle)

3. **Scoring** (1-10 on 5 criteria):

   | Angle | Resonance | Differentiation | Proof | Emotion | Conversion | Total |
   |-------|-----------|-----------------|-------|---------|------------|-------|
   | Anti-Script | 9 | 10 | 8 | 8 | 9 | 44 |
   | Conversational | 7 | 6 | 7 | 6 | 7 | 33 |
   | Authenticity | 8 | 7 | 6 | 7 | 7 | 35 |
   | Consistency | 9 | 8 | 9 | 7 | 9 | 42 |
   | Chaos→Pipeline | 7 | 7 | 8 | 8 | 8 | 38 |

4. **Selection**:
   - **Primary for Segment 1**: "The Anti-Script Method" (score: 44)
   - **Primary for Segment 2**: "The Consistency System" (score: 42)

5. **Hook Development** for Anti-Script Angle:
   - "Stop sounding like a telemarketer (start closing like a consultant)"
   - "Why sales scripts are killing your close rate—and what to do instead"
   - "Throw away your script. Here's the framework that actually works."

6. **Testing Plan**:
   - Week 1-2: Run both angles as Facebook ad headlines to respective segments
   - Measure: CTR, CPC, cost per lead
   - Week 3-4: Build landing pages for winning angles, split test
   - Week 5-8: Full funnel test (ad → page → sales page → purchase)

7. **Results**:
   - **Anti-Script Angle** (Segment 1): 4.2% CTR, $2.80 CPC, 38% landing page conversion
   - **Consistency Angle** (Segment 2): 3.1% CTR, $4.20 CPC, 29% landing page conversion

8. **Decision**: Both angles validated. Run as two parallel campaigns targeting different audience segments. Anti-Script angle becomes primary for individual rep targeting. Consistency angle becomes primary for manager/decision-maker targeting.

**Key Insight**: The same product, positioned through two different angles, attracted two different buyer types. By segmenting and angling appropriately, the company didn't have to choose one message—they ran both, doubling their addressable market. Angle selection isn't about picking one winner—it's about strategic alignment between message and audience.


---

## Referência: references/strategy-benefit-ladder.md

# Benefit Ladder

**Task ID**: `strategy-006`
**Task Name**: Benefit Ladder
**Phase**: Strategy & Planning

## Purpose

The Benefit Ladder is a strategic framework that systematically climbs from surface-level product features to the deepest emotional and identity-level transformations your customer truly desires. Most marketing fails because it stops at feature-level thinking ("our software has automation") or even first-level benefits ("save time"). But people don't buy time savings—they buy what that time savings allows them to become: a present parent, a successful entrepreneur, a person in control of their life. The Benefit Ladder forces you to climb from "what it does" to "who they become."

Created and popularized by legendary copywriters like Eugene Schwartz and Gary Bencivenga, the Benefit Ladder recognizes that features are not benefits, benefits are not outcomes, and outcomes are not transformations. Each level of the ladder addresses a deeper layer of human motivation. At the bottom rung, you have mechanical features. At the top rung, you have identity-level transformations and ultimate life benefits. The best copy climbs the ladder strategically, often starting with relatable benefits and ascending to aspirational transformation.

This task teaches you to construct multi-level benefit ladders for your offer, identify which benefits resonate most with your avatar, and deploy them strategically across your marketing. You'll learn to extract the hidden benefits buried in obvious features, connect product capabilities to life-changing outcomes, and speak to the emotional core of what your customers truly want.

## When to Use

- When developing messaging for a new product or offer
- When writing sales copy (letters, VSLs, webinars)
- When creating ad copy and landing pages
- When your marketing feels flat and feature-focused
- When you need to justify premium pricing
- When competitors are making similar claims at the feature level
- When planning content themes and email sequences

## Input Requirements

### Required Inputs
- Product/service features (what it does, how it works)
- Avatar research (deep desires, fears, identity aspirations)
- Customer testimonials (what benefits did they actually experience?)
- Transformation promise (the ultimate outcome you deliver)
- Competitive landscape (what benefits competitors are claiming)

### Optional Inputs
- Maslow's hierarchy mapping for your avatar
- Psychographic profiling (values, beliefs, identity)
- Customer interviews (asking "why does that matter?" repeatedly)
- Use case scenarios (how customers use the product in real life)
- Long-term outcome tracking (what happens 6-12 months after purchase)

### Example Data
```yaml
product: "Automated email marketing software"
feature: "AI-powered send-time optimization"
avatar: "Solopreneur coaches and consultants"
deep_desire: "Freedom to focus on what they love (coaching) not marketing tasks"
identity_aspiration: "Seen as an expert, not a hustler"
```

## Output Format

### Expected Artifacts
1. Complete Benefit Ladder (3-5 levels per feature)
2. Benefit-to-Avatar Alignment Map
3. Prioritized Benefit List (which benefits to emphasize)
4. Copy Snippets Bank (benefit-focused messaging)
5. Objection-to-Benefit Bridging Document

### Schema
```yaml
benefit_ladder:
  feature: "The product feature/capability"
  level_1_functional_benefit: "What it does directly"
  level_2_practical_benefit: "The immediate practical outcome"
  level_3_emotional_benefit: "How it makes them feel"
  level_4_identity_benefit: "Who it allows them to become"
  level_5_ultimate_benefit: "The deepest life-level transformation"
  avatar_resonance: "High/Medium/Low - how much avatar cares"
  proof_required: "What evidence supports this benefit claim"
  usage_context: "Where to deploy this benefit (hook/body/close)"
```

### Examples

**Feature**: Automated email scheduling
- **L1 - Functional**: Sends emails automatically
- **L2 - Practical**: Save 10 hours per week on email marketing
- **L3 - Emotional**: Feel in control, reduce stress and overwhelm
- **L4 - Identity**: Become the coach who's present for clients, not buried in marketing
- **L5 - Ultimate**: Live a balanced life, be present for family while business grows

**Feature**: Templates library
- **L1 - Functional**: Pre-written email templates
- **L2 - Practical**: Launch campaigns in minutes, not days
- **L3 - Emotional**: Confidence (no more staring at blank page), reduced anxiety
- **L4 - Identity**: Become a marketer who ships, not procrastinates
- **L5 - Ultimate**: Build momentum and consistency that compounds into success

## Assigned Copywriter(s)

**Primary**: Eugene Schwartz (mass desire, levels of awareness, benefit sophistication)
**Secondary**: Gary Bencivenga (benefit extraction, proof-to-benefit connection)
**Advisory**: Clayton Makepeace (emotional benefit identification), Alex Hormozi (value equation integration), John Caples (tested benefit hierarchies)

Eugene Schwartz's understanding of mass desire and how to speak to different levels of customer awareness is foundational. Gary Bencivenga's ability to find hidden benefits in technical features is legendary. Modern practitioners like Hormozi add frameworks for quantifying and stacking benefits.

## Dependencies

**Must Complete First**:
- Avatar research (you must understand deep desires to climb to high-level benefits)
- Product/feature documentation (need to know what you're extracting benefits from)

**Should Complete First**:
- Customer testimonials/interviews (reveal which benefits matter most)
- Unique mechanism (mechanism often unlocks unique benefits)

**Can Run In Parallel**:
- Story mining (stories illustrate benefits)
- Value stack creation (benefit ladder feeds into value stacking)
- Objection handling (benefits overcome objections)

## Step-by-Step Execution

### Step 1: List All Product Features

Create a comprehensive feature inventory. For each feature, document:
- What it is (name and description)
- How it works (mechanism)
- What it does (function)

Example:
- **Feature**: AI send-time optimization
- **How it works**: Machine learning analyzes recipient behavior patterns
- **What it does**: Automatically sends emails when recipients are most likely to open

Don't skip this step. You can't extract benefits from features you haven't identified.

### Step 2: Apply the "So What?" Ladder (5-Level Climb)

For each feature, ask "So what?" or "Why does that matter?" five times to climb the ladder:

**Starting Point**: Feature (what it is)

**Level 1 - Functional Benefit**: What does it do?
- "So what does [feature] do?"
- Answer: The direct, mechanical outcome

**Level 2 - Practical Benefit**: What practical outcome does that create?
- "So what does [L1 benefit] give me?"
- Answer: The tangible, real-world result

**Level 3 - Emotional Benefit**: How does that make me feel?
- "So what does [L2 benefit] mean for me emotionally?"
- Answer: The feeling or emotional state

**Level 4 - Identity Benefit**: Who does that allow me to become?
- "So what does [L3 benefit] say about who I am?"
- Answer: The identity or self-perception shift

**Level 5 - Ultimate Benefit**: What does that make possible in my life?
- "So what does [L4 benefit] ultimately give me?"
- Answer: The deepest life-level transformation

Example walkthrough:
- **Feature**: Automated email scheduling
- **L1**: "So what?" → Sends emails automatically
- **L2**: "So what?" → Saves 10 hours per week
- **L3**: "So what?" → Reduces stress, creates peace of mind
- **L4**: "So what?" → Become a business owner who isn't overwhelmed
- **L5**: "So what?" → Freedom to enjoy life while business runs smoothly

### Step 3: Cross-Reference Avatar Research

Not all benefits matter equally to your avatar. For each benefit, check:

**Avatar Alignment Questions**:
- Is this benefit addressing a stated desire from avatar research?
- Does this benefit solve a pain point they mentioned?
- Does this benefit align with their values and identity aspirations?
- Have customers mentioned this benefit in testimonials?

Rate each benefit's avatar resonance: High / Medium / Low

Prioritize High-resonance benefits in your messaging.

### Step 4: Map Benefits to Maslow's Hierarchy

Understand where each benefit sits in the hierarchy of needs:

**Level 1 - Physiological**: Basic survival (health, safety, security)
**Level 2 - Safety**: Financial security, stability, predictability
**Level 3 - Belonging**: Connection, community, relationships
**Level 4 - Esteem**: Achievement, status, recognition, respect
**Level 5 - Self-Actualization**: Purpose, growth, becoming your best self

Higher-level benefits are more emotionally compelling but require that lower-level needs are already met (or perceived to be met).

Example:
- "Save time" → Level 2 (Safety - more control, less chaos)
- "Feel confident" → Level 4 (Esteem - self-respect)
- "Become the entrepreneur you always knew you could be" → Level 5 (Self-actualization)

### Step 5: Identify "Hidden Benefits" (The Bencivenga Method)

Gary Bencivenga was a master at finding benefits hidden in features that others missed. Apply these questions:

**Question 1**: What problem does this feature solve that customers don't realize they have?
- Example: "Grammar checking" isn't just about correctness—it's about being taken seriously

**Question 2**: What does this feature prevent or avoid?
- Sometimes the benefit is what DOESN'T happen (avoid embarrassment, prevent loss)

**Question 3**: What does this feature make unnecessary?
- The benefit might be what you no longer need to do or buy

**Question 4**: What second-order effects does this feature create?
- What ripple effects happen downstream from the direct benefit?

Example: "Automated invoicing" prevents late payments, which prevents cash flow stress, which prevents business failure anxiety → The hidden benefit is "peace of mind about business survival."

### Step 6: Create Benefit-to-Proof Mapping

For each benefit (especially Level 3-5 benefits), identify what proof is required:

| Benefit | Proof Type Needed | Example |
|---------|-------------------|---------|
| "Save 10 hours/week" | Data, testimonials | "87% of users report 8+ hours saved weekly" |
| "Feel less stressed" | Testimonial, case study | "I finally sleep through the night" - Sarah M. |
| "Become a confident leader" | Transformation story | Before/after narrative of leadership growth |

Benefits without proof are just claims. Ensure you have evidence for the benefits you plan to emphasize.

### Step 7: Build the Benefit Stacking Sequence

Benefits should be introduced strategically, not randomly. Determine the optimal sequence:

**Strategy 1: Climb the Ladder (Practical → Emotional → Identity)**
- Start with relatable practical benefits
- Ascend to emotional and identity benefits
- End with ultimate transformation

**Strategy 2: Descend the Ladder (Identity → Practical)**
- Hook with aspirational identity benefit
- Support with practical and functional proof

**Strategy 3: Sandwich (Identity → Practical → Identity)**
- Open with transformation vision
- Prove with practical benefits
- Close with identity/ultimate benefit

Choose based on your avatar's sophistication and awareness stage.

### Step 8: Write Benefit-Focused Copy Snippets

For each major benefit, write 3-5 copy variations:

**Snippet Type 1: Direct Statement**
- "Save 10 hours per week on email marketing."

**Snippet Type 2: Question/Answer**
- "What would you do with 10 extra hours per week? That's what our automation gives you."

**Snippet Type 3: Story/Scenario**
- "Imagine Friday at 2pm, inbox zero, all your marketing done. That's the benefit of automation."

**Snippet Type 4: Contrast**
- "Stop spending 10 hours per week manually sending emails. Let automation do it in minutes."

**Snippet Type 5: Emotional**
- "Feel the relief of knowing your marketing runs smoothly, even while you sleep."

These become your copy library for ads, landing pages, emails, etc.

### Step 9: Map Benefits to Objections

Every objection can be overcome with a benefit. Create a bridge:

| Objection | Benefit That Overcomes It |
|-----------|---------------------------|
| "Too expensive" | ROI benefit: "Saves $5K/month in time" |
| "Too complicated" | Ease benefit: "Set up in 15 minutes" |
| "Not for me" | Identity benefit: "Designed for [exact avatar]" |
| "I don't have time" | Time-saving benefit: "Requires 10 min/week" |

When you encounter an objection, don't argue—elevate to a higher-level benefit.

### Step 10: Create "Negative Benefits" (What You Avoid)

Sometimes the most powerful benefits are about what you DON'T have to do or experience:

- "Never manually send another email"
- "Stop worrying about missing opportunities"
- "Avoid the overwhelm of juggling marketing tasks"
- "Skip the learning curve—it's pre-built"

List 5-10 "negative benefits" (things your product prevents, eliminates, or makes unnecessary).

### Step 11: Develop "Compounding Benefits" (Second and Third Order Effects)

Some benefits unlock other benefits. Map the cascade:

**Primary Benefit**: Save 10 hours per week
↓
**Secondary Benefit**: Reinvest time in revenue-generating activities
↓
**Tertiary Benefit**: Grow income while reducing hours worked
↓
**Ultimate Benefit**: Financial freedom and time freedom simultaneously

Document these chains for persuasive copy that shows ripple effects.

### Step 12: Test Benefit Prioritization with Avatar Segments

If you have multiple avatar segments, they may value different benefits:

**Segment 1: Busy Solopreneurs**
- Top benefit: Time savings

**Segment 2: Growth-Focused Entrepreneurs**
- Top benefit: Revenue increase

**Segment 3: Overwhelmed Service Providers**
- Top benefit: Stress reduction

Create benefit hierarchies for each segment and tailor messaging accordingly.

### Step 13: Integrate with Alex Hormozi's Value Equation

Map your benefits to Hormozi's value formula:

**Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)**

Identify which benefits address each variable:

- **Increase Dream Outcome**: Ultimate benefits (Level 5)
- **Increase Perceived Likelihood**: Proof-backed benefits, social proof
- **Decrease Time Delay**: Speed benefits ("results in 7 days")
- **Decrease Effort & Sacrifice**: Ease benefits ("done-for-you")

Ensure you have benefits covering all four value levers.

### Step 14: Build the Visual Benefit Ladder

Create a visual representation:

```
[ULTIMATE BENEFIT: Freedom & Fulfillment]
         ↑
[IDENTITY: Confident Business Owner]
         ↑
[EMOTIONAL: Peace of Mind, Control]
         ↑
[PRACTICAL: Save 10 hrs/week, Increase Revenue 30%]
         ↑
[FUNCTIONAL: Automated Sending, AI Optimization]
```

This visual becomes internal documentation and can be adapted for marketing materials.

### Step 15: Create the Benefit Deployment Strategy

Document where each benefit should appear:

**Hooks/Headlines**: Level 3-5 benefits (emotional, identity, ultimate)
- "Become the business owner who isn't overwhelmed"

**Body Copy**: Level 2-3 benefits (practical, emotional)
- "Save 10 hours per week and reduce stress"

**Features/Proof Section**: Level 1-2 benefits (functional, practical)
- "AI optimization sends emails at the perfect time to save you hours"

**Close/CTA**: Level 4-5 benefits (identity, ultimate)
- "Join the entrepreneurs who've taken back control of their time and life"

## Tips & Best Practices

1. **Always Climb Higher Than You Think You Need To**: Most marketers stop at Level 2 benefits (practical outcomes). The real persuasion happens at Levels 3-5 (emotional, identity, ultimate). If your benefits feel flat, you haven't climbed high enough. Keep asking "So what?" until you hit something deeply human.

2. **Lead with Emotional Benefits, Prove with Practical Benefits**: Hook people with "feel confident and in control" (emotional), then prove it with "because you'll save 10 hours per week" (practical). Emotion creates desire, logic justifies the decision. Use both, in the right order.

3. **Different Benefits for Different Temperatures**: Cold traffic needs universal, relatable benefits ("save time"). Warm traffic can handle more sophisticated benefits ("become the entrepreneur who..."). Match benefit complexity to audience sophistication.

4. **Turn Features into Benefits in Real-Time**: When writing copy, never state a feature without immediately climbing to at least a Level 2 benefit. Template: "[Feature], which means [benefit], so you can [higher benefit]." Example: "AI send-time optimization, which means your emails arrive when prospects are most receptive, so you can increase open rates without extra work."

5. **Test Benefits, Don't Assume**: What you think is the most important benefit might not be what your market cares about. Test benefit-focused headlines in ads. Let the market tell you which benefits resonate. Data > Opinion.

## Common Pitfalls

1. **Stopping at Features**: "Our software has a dashboard" is not a benefit. "See all your metrics at a glance so you can make decisions confidently" is a benefit. Features describe the product. Benefits describe the transformation. Never stop at features.

2. **Generic, Vague Benefits**: "Save time" is technically a benefit, but it's generic. "Save 10 hours per week—enough to finally launch that side project you've been putting off" is specific and emotionally resonant. Vague benefits bore. Specific benefits sell.

3. **Overpromising Without Proof**: Climbing to Level 5 benefits (ultimate transformation) is powerful, but if you can't back it up with proof, it's just hype. Don't claim "achieve financial freedom" unless you have evidence that your product contributes to that outcome. Benefits must be supportable.

4. **Ignoring Negative Benefits**: People are often more motivated to avoid pain than to gain pleasure. If you're only listing positive benefits ("gain more time") and ignoring negative benefits ("stop working weekends"), you're missing half the emotional picture. List what they GET and what they AVOID.

5. **Using the Same Benefits for Everyone**: If you have multiple avatar segments, they value different benefits. Busy moms care about time savings. Ambitious entrepreneurs care about revenue growth. Using one-size-fits-all benefit messaging dilutes impact. Segment benefits by avatar.

## Example Usage Scenario

**Context**: A SaaS company sells project management software to creative agencies. The market is saturated with competitors (Asana, Monday, ClickUp). Feature parity is high—everyone has task management, timelines, collaboration. The company needs to differentiate through benefit-focused messaging rather than feature wars.

**Execution**:

1. **Feature Inventory** (10 core features documented, including):
   - Feature: Client portal for feedback and approvals
   - Feature: Automated time tracking
   - Feature: Template library for common project types

2. **Benefit Ladder Construction** (Example for "Client Portal"):

   **L1 - Functional**: Clients can review work and approve in the portal
   **L2 - Practical**: Eliminate back-and-forth emails and version confusion
   **L3 - Emotional**: Reduce frustration and feel in control of client communication
   **L4 - Identity**: Become the agency that's professional, organized, easy to work with
   **L5 - Ultimate**: Build a reputation that attracts premium clients who respect your process

3. **Avatar Research Cross-Reference**:
   - Avatar pain: "Clients constantly changing direction, scope creep, endless revisions"
   - Avatar desire: "Be seen as a premium agency, not an order-taker"
   - Benefit alignment: **HIGH** for L4-5 (identity/reputation benefits)

4. **Benefit Prioritization**:
   - **Primary benefit to emphasize**: "Become the agency clients respect" (L4 - identity)
   - **Supporting benefits**: "Eliminate scope creep and revision chaos" (L2 - practical)
   - **Proof needed**: Case study of agency that implemented client portal and saw 60% reduction in revision cycles

5. **Copy Snippet Creation**:

   **Hook (Emotional/Identity Benefit)**:
   - "Tired of clients treating you like an order-taker? Position yourself as the professional agency with processes clients respect."

   **Body (Practical Benefit)**:
   - "Our client portal eliminates the endless email chains and last-minute changes that kill your margins. Clients review, approve, and pay—all in one place."

   **Feature Proof (Functional Benefit)**:
   - "The client portal gives clients a professional dashboard to review work, provide feedback, and approve deliverables. No more 'Can you send me the latest version?' emails."

   **Close (Ultimate Benefit)**:
   - "Join 2,000+ agencies who've transformed from 'yes-people' to trusted partners. Build the reputation that attracts clients who value your expertise."

6. **Testing Plan**:
   - Week 1-2: Test identity benefit hook vs. practical benefit hook in Facebook ads
   - **Result**: Identity benefit hook ("Stop being treated like an order-taker") has 3.9% CTR vs. 2.1% for practical benefit hook
   - **Decision**: Lead with identity/emotional benefits, support with practical proof

7. **Implementation**:
   - Homepage headline: Identity benefit (L4)
   - Feature sections: Practical benefits (L2) with functional proof (L1)
   - Customer testimonials: Ultimate benefits (L5) - "We're now seen as the premium agency in our market"
   - Pricing page: ROI benefits (L2) - "Pay for itself in one saved revision cycle"

**Result**: Repositioning from feature-focused ("We have a client portal") to benefit-focused ("Become the agency clients respect") increases trial signups by 34% and reduces churn by 19% (customers who connect with the identity benefit are more committed).

**Key Insight**: The company had been competing on features and losing. By climbing the benefit ladder to identity and ultimate benefits (L4-5), they differentiated on transformation, not features. Competitors could copy the feature (client portal). They couldn't copy the emotional positioning (respect, professionalism, premium status). The benefit ladder turned a commodity feature into a unique identity promise.


---

## Referência: references/strategy-big-idea-generation.md

# Big Idea Generation

**Task ID**: `strategy-001`
**Task Name**: Big Idea Generation
**Phase**: Strategy & Planning

## Purpose

The Big Idea is the central conceptual breakthrough that makes your entire marketing message memorable, compelling, and different from everything else in the market. It's not just a headline or a tagline—it's the organizing principle that gives your prospect a new way to think about their problem and your solution. Eugene Schwartz, in his landmark book "Breakthrough Advertising," emphasized that the Big Idea is what transforms a product feature into a movement, a benefit into a belief system, and a sales message into a story worth telling.

A powerful Big Idea does three critical things simultaneously: it captures attention in a crowded market, reframes the conversation around your unique solution, and creates an emotional resonance that bypasses logical resistance. The best Big Ideas often challenge conventional wisdom, reveal a hidden truth, or offer a dramatically simplified path to a desired outcome. They work at the intersection of novelty and familiarity—fresh enough to feel exciting, yet connected enough to existing beliefs to feel credible.

This task is about systematically generating, evaluating, and refining Big Ideas using proven frameworks from master copywriters like Eugene Schwartz, Gary Halbert, John Carlton, and David Ogilvy. Rather than waiting for creative inspiration to strike, we use structured ideation methods to consistently produce breakthrough concepts that can carry an entire campaign.

## When to Use

- At the beginning of any major campaign or product launch
- When entering a saturated market that requires differentiation
- When repositioning an existing product or service
- When creating a new funnel or sales letter from scratch
- When current messaging has plateaued and needs refreshing
- After avatar research reveals new insights about prospect beliefs
- When competitive analysis shows opportunities for unique positioning

## Input Requirements

### Required Inputs
- Completed avatar research (pain points, desires, beliefs, objections)
- Product/service features and transformation promise
- Competitive landscape analysis
- Market sophistication level (Schwartz's 5 stages of awareness)
- Unique mechanism or methodology (if available)
- Core transformation or outcome delivered

### Optional Inputs
- Customer testimonials and success stories
- Founder story or origin narrative
- Scientific research or data supporting your approach
- Industry trends and cultural movements
- Historical analogies or metaphors
- Contrarian market positions

### Example Data
```yaml
product: "90-Day Body Transformation Program"
avatar_core_desire: "Look 10 years younger without living in the gym"
market_sophistication: "Stage 4 - Mechanism sophisticated"
unique_approach: "Metabolic priming through micro-workouts"
key_insight: "Traditional 60-minute workouts trigger stress hormones that age you"
```

## Output Format

### Expected Artifacts
1. Big Idea Brief (2-3 pages)
2. 10-15 Big Idea Concepts (raw ideation)
3. Top 3 Big Ideas (fully developed)
4. Testing recommendations

### Schema
```yaml
big_idea:
  title: "The One-Sentence Big Idea"
  core_concept: "2-3 paragraph explanation"
  schwartz_stage: "Which awareness stage it targets"
  hook_angle: "The attention-grabbing entry point"
  enemy: "What you're positioning against"
  mechanism: "The how (if mechanism-focused)"
  proof_points: ["Supporting evidence 1", "Supporting evidence 2"]
  emotional_drivers: ["Primary emotion 1", "Secondary emotion 2"]
  testing_variations: ["Variation A", "Variation B"]
```

### Examples
**Big Idea 1: "The Metabolism Reset Protocol"**
- Core: Your body has a 'metabolic thermostat' that gets stuck at your current weight—until you reset it
- Enemy: Traditional calorie counting and restriction diets
- Emotional driver: Hope (you're not broken, you just need a reset)

**Big Idea 2: "The 2-Hour Workweek Body"**
- Core: You can achieve better results with 2 hours per week than gym rats get in 10 hours
- Enemy: The "more is better" fitness culture
- Emotional driver: Liberation (freedom from gym slavery)

## Assigned Copywriter(s)

**Primary**: Eugene Schwartz (master of the Big Idea and market sophistication)
**Secondary**: John Carlton (contrarian positioning and "simple twist")
**Advisory**: David Ogilvy (brand-level big ideas), Gary Halbert (emotional resonance)

Eugene Schwartz's ability to identify the single most powerful idea that could carry an entire campaign is unmatched. His work on "Breakthrough Advertising" provides the theoretical foundation. John Carlton adds the street-smart, contrarian edge that makes ideas feel fresh and rebellious.

## Dependencies

**Must Complete First**:
- Avatar research (understanding beliefs and desires)
- Market research (competitive landscape)
- Unique mechanism development (if mechanism-focused)

**Should Complete First**:
- Story mining (for narrative-based Big Ideas)
- Customer interview analysis

**Can Run In Parallel**:
- Hook ideation (will inform each other)
- Angle selection (Big Idea drives angles)

## Step-by-Step Execution

### Step 1: Determine Market Sophistication Level (Schwartz's Framework)

Identify which of Eugene Schwartz's 5 stages your market is in:

1. **Stage 1 - Unaware**: Prospect doesn't know they have a problem
2. **Stage 2 - Problem Aware**: Knows the problem, not the solution
3. **Stage 3 - Solution Aware**: Knows solutions exist, not your specific one
4. **Stage 4 - Product Aware**: Knows your product, not convinced yet
5. **Stage 5 - Most Aware**: Ready to buy, just needs the right offer

Your Big Idea strategy changes dramatically based on this stage. Stage 1 needs education, Stage 3 needs differentiation, Stage 4 needs proof.

### Step 2: Apply the "Simple Twist" Method (John Carlton)

Take the obvious benefit and twist it:
- "Lose weight" → "The weight loss discovery that has doctors excited and drug companies terrified"
- "Make money online" → "The 'backwards' business model that makes you money while your competition burns cash"
- "Learn guitar" → "The 'lazy' way to play guitar that concert musicians don't want you to know"

The twist creates curiosity while maintaining clarity. List 10 twisted versions of your core benefit.

### Step 3: Identify Your Enemy (The "Against" Formula)

Every great Big Idea has a villain. What are you positioning against?
- A common practice ("Against" traditional diets)
- A false belief ("Against" the myth that you need 10,000 hours)
- A institution ("Against" the fitness industry's lies)
- The status quo ("Against" accepting average results)

Write: "This is for [target avatar] who want [desire] WITHOUT [the usual requirement/pain point]."

### Step 4: Extract Hidden Mechanisms (The "How" Reveal)

If you're in a sophisticated market (Stage 3+), your Big Idea needs a mechanism:
- What's the hidden process that makes your solution work differently?
- What's the "secret" that makes it easier/faster/better?
- What discovery or insight unlocks the transformation?

Example: Not just "lose weight" but "reprogram your metabolic thermostat using the 3-phase priming protocol."

### Step 5: Apply the 6 Big Idea Categories

Generate at least 2 ideas in each category:

1. **Mechanism Big Ideas**: Focus on the unique how
   - "The 10-Minute Metabolic Reset"

2. **Discovery Big Ideas**: Reveal something new
   - "The Japanese Longevity Secret Now Available in America"

3. **Transformation Big Ideas**: Before/after narrative
   - "From Exhausted to Energized in 21 Days"

4. **Contrarian Big Ideas**: Challenge conventional wisdom
   - "Why Everything You Know About Productivity is Wrong"

5. **Story-Driven Big Ideas**: Narrative as the idea
   - "The Accidental Discovery That Changed How 10,000 People Sleep"

6. **Enemy-Driven Big Ideas**: United against something
   - "The Anti-Diet That Finally Works"

### Step 6: Test Against Schwartz's "Graduation" Principle

Will your Big Idea allow you to:
- Start with your strongest claim/benefit?
- Introduce your mechanism in a way that feels inevitable?
- Graduate smoothly into your proof elements?
- Maintain the promise throughout the entire sales message?

If the Big Idea is just a clever hook that doesn't connect to your proof, it will fail.

### Step 7: Apply the "Cocktail Party Test"

Imagine your prospect explaining your Big Idea to a friend:
- Can they summarize it in one sentence?
- Does it sound interesting enough to repeat?
- Is it memorable 24 hours later?

If your Big Idea is too complex to pass this test, simplify it.

### Step 8: Check for Emotional Resonance

Every Big Idea should trigger a primary emotion:
- Hope (it's possible for me)
- Curiosity (I need to know more)
- Fear (I'm missing out / doing it wrong)
- Anger (I've been lied to)
- Pride (I'm smarter than the average person)

Rate each Big Idea on emotional intensity (1-10). Anything below 7 needs work.

### Step 9: Validate Against the 3 C's

- **Clarity**: Is it immediately understandable?
- **Credibility**: Does it sound believable (even if surprising)?
- **Curiosity**: Does it create an open loop that demands resolution?

All three must be present. Curiosity without credibility is just hype. Clarity without curiosity is boring.

### Step 10: Develop Your Top 3 Big Ideas Fully

For each of your top 3 ideas, create:
- 5-7 headline variations
- 3-paragraph concept explanation
- Proof points that support the idea
- Objection responses
- Call-out statements for ads
- Potential visual representations

### Step 11: Cross-Reference with Unique Mechanism

If you have a unique mechanism (from task strategy-002), ensure your Big Idea either:
- IS the mechanism ("The Metabolic Reset Protocol")
- INTRODUCES the mechanism ("The Accidental Discovery That Led to...")
- FRAMES the mechanism ("Why This Japanese Technique Works")

The Big Idea and mechanism should feel inseparable.

### Step 12: Create a Decision Matrix

Score each Big Idea on:
- Market differentiation (1-10)
- Emotional impact (1-10)
- Proof availability (1-10)
- Scalability across channels (1-10)
- Avatar alignment (1-10)

The highest total score becomes your primary Big Idea. The second highest is your testing variant.

### Step 13: Write the Big Idea Brief

Document:
- The Big Idea statement (one sentence)
- The expanded concept (2-3 paragraphs)
- Why it works for this avatar
- How it will manifest across touchpoints
- Testing recommendations

### Step 14: Get Stakeholder Alignment

Present the top 3 Big Ideas with context:
- Market sophistication stage
- Competitive differentiation
- Emotional strategy
- Expected performance

Secure buy-in before moving to execution.

### Step 15: Create Implementation Guidelines

For the chosen Big Idea, document:
- Headline formulas that express it
- Language patterns to use/avoid
- Visual metaphors that support it
- Story elements that reinforce it
- Proof types that validate it

This becomes the creative brief for all subsequent copywriting.

## Tips & Best Practices

1. **Start Ugly, Edit Beautiful**: Your first 20 Big Idea attempts should be terrible. You're clearing out the obvious, cliche ideas to get to the breakthrough. Don't judge, just generate. The gold is on the other side of the garbage.

2. **Steal Smart (Combine Adjacent Markets)**: Look at Big Ideas from adjacent industries and transplant them. Fitness borrowed "The 4-Hour Body" structure from Tim Ferriss. Marketing borrowed "Blue Ocean Strategy" from business. What's working in self-help that could work in B2B software?

3. **The 48-Hour Rule**: Never commit to a Big Idea on the day you create it. Sleep on it twice. The ideas that still excite you 48 hours later are the keepers. The ones that feel clever but flat were just novelty.

4. **Test at Traffic Level First**: Before writing an entire sales letter around a Big Idea, test it in ad headlines. Run 5-10 variations on Facebook or Google. The Big Idea that gets the highest CTR and cheapest cost per click is telling you something about market resonance.

5. **Compound Don't Replace**: If you have an existing Big Idea that's working, don't abandon it—evolve it. "The 4-Hour Workweek" became "The 4-Hour Body" and "The 4-Hour Chef." Same Big Idea structure, new application. This builds brand equity while maintaining freshness.

## Common Pitfalls

1. **Clever Over Clear**: The biggest mistake is prioritizing cleverness over clarity. Your Big Idea should not require explanation. If someone reads it and says "I don't get it," you failed. Clarity always wins.

2. **Feature-Focused Instead of Belief-Focused**: Weak Big Ideas talk about what the product does. Strong Big Ideas challenge or confirm beliefs about how the world works. "AI-Powered Email Tool" is a feature. "The End of Writer's Block" is a belief-challenging Big Idea.

3. **Ignoring Market Sophistication**: Using a "new discovery" angle in a Stage 4 market is tone-deaf. The market has already seen everything. You need mechanism sophistication, not novelty claims. Match your Big Idea to where the market actually is.

4. **No Clear Enemy**: If your Big Idea doesn't position against something, it won't create the tribal "us vs. them" dynamic that drives viral sharing and community formation. Every movement needs an enemy—make it explicit.

5. **Unsupportable Claims**: Your Big Idea must be provable. If you promise "The 5-Minute 6-Pack" but can't back it up, you'll get attention and refunds. Your Big Idea should be the most exciting TRUE thing you can say, not the most exciting thing you can imagine.

## Example Usage Scenario

**Context**: A business coach has a program teaching service providers how to raise their prices and attract premium clients. The market is saturated with "mindset" coaching and "sales script" programs. Avatar research reveals that prospects believe they need more credentials and experience before they can charge premium rates.

**Execution**:

1. **Market Sophistication**: Stage 4 (product aware, highly sophisticated market)

2. **Big Idea Generation** (10 concepts created, top 3 selected):
   - "The Credential Myth: Why Your Next Client Will Pay 10X Without You Adding a Single Certification"
   - "The Premium Pivot Protocol: How to Double Your Rates in 30 Days Without Changing What You Deliver"
   - "The Luxury Positioning Blueprint: The 'Backwards' Strategy High-End Service Providers Use to Attract Better Clients"

3. **Winner Selected**: "The Premium Pivot Protocol"
   - **Why**: Combines mechanism language ("Protocol") with specific promise ("Double Your Rates in 30 Days")
   - **Enemy**: The belief that you need to be "better" before charging more
   - **Emotional Driver**: Permission (you're already good enough) + Excitement (fast transformation)

4. **Testing Approach**: Run ad headlines with all 3 Big Ideas. "The Premium Pivot Protocol" has 43% higher CTR and 67% lower CPC than the other two.

5. **Implementation**: All campaign assets now frame the program around "the pivot"—the moment you stop competing on price and start positioning on value. Sales letter is structured as a story of other service providers who made the pivot. Email sequence is "The 5 Pivots Premium Providers Make."

**Result**: The Big Idea becomes the organizing principle for the entire campaign, making every piece of copy feel like part of a cohesive system rather than disconnected tactics.


---

## Referência: references/strategy-guarantee-formulation.md

# Guarantee Formulation

**Task ID**: `strategy-008`
**Task Name**: Guarantee Formulation
**Phase**: Strategy & Planning

## Purpose

The guarantee is not legal fine print—it's one of the most powerful conversion tools in your marketing arsenal. A well-crafted guarantee eliminates or reverses the perceived risk of purchase, transforming a hesitant "maybe" into a confident "yes." In competitive markets where products and benefits are similar, the guarantee is often the deciding factor. It's the difference between "I might lose my money" and "I literally can't lose—this is risk-free." The right guarantee can increase conversions by 20-50% while simultaneously attracting higher-quality, more committed customers.

The psychology of guarantees is counterintuitive: the stronger and more audacious your guarantee, the fewer refunds you typically get. Weak or no guarantees attract skeptical, refund-prone buyers who assume you don't believe in your product. Strong guarantees attract confident, committed buyers who rarely use them because the guarantee itself creates trust and reduces buyer's remorse. The guarantee is a filter as much as a conversion tool—it repels the wrong customers and attracts the right ones.

This task systematizes guarantee creation using frameworks from direct response legends like Gary Halbert, Dan Kennedy, and Jay Abraham, plus modern methodologies from Alex Hormozi and Russell Brunson. You'll learn to construct guarantees that remove risk, create urgency, build trust, and differentiate your offer in crowded markets. Whether you're selling $27 ebooks or $25,000 masterminds, the right guarantee can be your secret weapon.

## When to Use

- When creating or refining any paid offer
- When conversion rates are low despite strong traffic
- When competing against established players with trust advantages
- When selling high-ticket offers ($1,000+)
- When launching a new product with no track record
- When refund rates are high (ironically, a stronger guarantee often reduces refunds)
- When you need differentiation beyond features and benefits

## Input Requirements

### Required Inputs
- Product/service type (physical, digital, service, coaching, etc.)
- Price point (guarantee design differs by price)
- Avatar research (what are their biggest fears/objections about buying?)
- Your confidence level in product delivery
- Legal/compliance constraints (if any)
- Refund/support capacity (can you handle refund requests efficiently?)

### Optional Inputs
- Competitor guarantee analysis (what guarantees do competitors offer?)
- Historical refund data (if you have an existing offer)
- Customer success metrics (percentage who get results, timeframe to results)
- Conditional fulfillment tracking (ability to verify customer did the work)
- Insurance or bonding options (for performance guarantees)

### Example Data
```yaml
product: "12-week business coaching program"
price: "$3,997"
avatar_top_fear: "I'll pay and it won't work for me / I'll waste money"
your_confidence: "High - 87% of customers who complete get measurable results"
competitor_guarantees: ["30-day money-back", "No guarantee", "Satisfaction guarantee (vague)"]
legal_constraints: "None (coaching program, no regulated claims)"
```

## Output Format

### Expected Artifacts
1. Guarantee Statement (final copy-ready version)
2. Guarantee Variations (3-5 options to test)
3. Guarantee Terms Document (full legal/operational terms)
4. Guarantee Messaging Guidelines (how to communicate it)
5. Refund Process SOPs (operational implementation)

### Schema
```yaml
guarantee:
  type: "Money-back / Performance / Conditional / Better-than-money-back / Hybrid"
  primary_statement: "One-sentence guarantee promise"
  full_description: "2-3 paragraph detailed explanation"
  timeframe: "X days / months / until [milestone]"
  conditions: "What customer must do (if conditional)"
  claim_process: "How to request refund/invoke guarantee"
  risk_reversal_elements: ["What risks this eliminates"]
  differentiation: "How this differs from competitor guarantees"
  expected_impact: "Projected effect on conversions and refunds"
```

### Examples

**Guarantee 1: Unconditional Money-Back**
- Type: Unconditional
- Statement: "60-day, no-questions-asked money-back guarantee"
- Best for: Lower-ticket, digital products

**Guarantee 2: Conditional Performance**
- Type: Conditional
- Statement: "Complete the 12 weeks, submit your work, and if you don't see measurable revenue growth, we'll refund you + give you a free strategy session"
- Best for: High-ticket, implementation-dependent programs

**Guarantee 3: Better-Than-Money-Back**
- Type: Better-than-money-back
- Statement: "If you implement our system and don't add at least one new client in 90 days, we'll refund your money AND pay you $500 for your time"
- Best for: High-confidence offers in competitive markets

## Assigned Copywriter(s)

**Primary**: Gary Halbert (legendary risk-reversal guarantees)
**Secondary**: Dan Kennedy (no-risk offer construction)
**Advisory**: Alex Hormozi (conditional guarantees that filter customers), Jay Abraham (risk-reversal strategies), Russell Brunson (guarantee as value-stack component)

Gary Halbert pioneered audacious guarantees that became conversion legends. Dan Kennedy systematized risk reversal as a core offer component. Hormozi adds modern conditional guarantee frameworks that attract serious buyers.

## Dependencies

**Must Complete First**:
- Avatar research (what are their risk perceptions and fears?)
- Offer design (can't guarantee what you haven't defined)
- Pricing (guarantee design changes with price point)

**Should Complete First**:
- Value stack (guarantee is part of value stack)
- Product delivery systems (ensure you can fulfill guarantee claims)

**Can Run In Parallel**:
- Objection handling (guarantee addresses the "what if it doesn't work?" objection)
- Sales page copy (guarantee messaging integrates into sales copy)
- Customer success tracking (needed for performance guarantees)

## Step-by-Step Execution

### Step 1: Identify the Core Risk Your Avatar Perceives

What's the main fear preventing purchase? Common risks:

**Financial Risk**: "I'll waste my money"
**Time Risk**: "I'll invest time and get no results"
**Opportunity Risk**: "I'll miss out on a better solution"
**Ego Risk**: "I'll look stupid if this doesn't work"
**Implementation Risk**: "I won't be able to do it"

Interview customers or review avatar research. Ask: "What almost stopped you from buying?"

Your guarantee must directly address the #1 risk.

### Step 2: Choose Your Guarantee Type

Select the guarantee structure that best fits your offer and market:

**Type 1: Unconditional Money-Back Guarantee**
- **What it is**: Full refund, no questions asked, within timeframe
- **Best for**: Low-ticket ($27-$297), digital products, broad audiences
- **Example**: "If you're not completely satisfied within 30 days, email us for a full refund"
- **Pros**: Simple, clear, removes friction
- **Cons**: Can attract refund-seekers, doesn't filter buyers

**Type 2: Conditional Money-Back Guarantee**
- **What it is**: Refund if customer completes requirements and doesn't get results
- **Best for**: High-ticket ($1,000+), implementation-dependent programs, coaching
- **Example**: "Complete all 12 modules, submit your assignments, and if you don't see results, full refund"
- **Pros**: Filters serious buyers, reduces frivolous refunds, increases completion rates
- **Cons**: More complex to communicate and enforce

**Type 3: Satisfaction Guarantee (Vague)**
- **What it is**: "Satisfaction guaranteed" with no specifics
- **Best for**: Almost never (too vague to be compelling)
- **Example**: "We guarantee your satisfaction"
- **Pros**: None
- **Cons**: Too vague, doesn't reduce risk perception

**Type 4: Performance Guarantee**
- **What it is**: You guarantee a specific outcome or you refund/work until achieved
- **Best for**: Service-based offers, agencies, done-for-you
- **Example**: "We'll get you 10 qualified leads in 30 days or work free until we do"
- **Pros**: Extremely compelling, positions confidence
- **Cons**: High risk if you can't control all variables

**Type 5: Better-Than-Money-Back Guarantee**
- **What it is**: Refund PLUS additional compensation for customer's time/trouble
- **Best for**: Highly competitive markets, differentiation play, high-confidence products
- **Example**: "If you don't get results, we'll refund you + pay you $500 for wasting your time"
- **Pros**: Ultimate risk reversal, powerful differentiator
- **Cons**: Must be confident in product; financial exposure

**Type 6: Hybrid / Creative Guarantees**
- **What it is**: Custom guarantee combining elements
- **Best for**: Unique situations, creative differentiation
- **Example**: "Try it for 30 days. If you don't love it, keep the bonuses and get a full refund"
- **Pros**: Can be uniquely tailored
- **Cons**: Complexity

Select the type that matches your confidence level and avatar risk perception.

### Step 3: Determine Optimal Timeframe

How long should your guarantee period be?

**Short Timeframe (7-14 days)**:
- Best for: Immediate-result products, low-ticket
- Pros: Limits refund window
- Cons: Doesn't allow enough time to experience transformation

**Medium Timeframe (30-60 days)**:
- Best for: Most digital products, courses, programs
- Pros: Standard, expected, allows time to engage
- Cons: Not especially differentiating

**Long Timeframe (90-365 days)**:
- Best for: High-ticket, long-term transformation programs
- Pros: Demonstrates extreme confidence, reduces buyer anxiety
- Cons: Longer refund exposure

**Milestone-Based (Until X Result or Event)**:
- Best for: Performance or outcome-based offers
- Pros: Aligns guarantee with value delivery
- Cons: Can be indefinite (risk)

**Paradox**: Longer guarantees often result in FEWER refunds because:
1. Buyers perceive higher confidence from seller
2. Buyer's remorse window passes quickly (most refunds happen in first 7-14 days)
3. Customers who use the product get value and don't refund

Consider going longer than you're comfortable with—it often pays off.

### Step 4: Add Conditional Requirements (If Applicable)

If using a conditional guarantee, define clear requirements:

**Conditional Elements**:
- **Completion**: "Complete all modules/sessions"
- **Submission**: "Submit all assignments/homework"
- **Implementation**: "Apply the strategies for X days/weeks"
- **Proof**: "Show us your tracking/results/documentation"
- **Communication**: "Attend all coaching calls" or "Participate in community"

**Example Conditional Guarantee**:
"If you complete all 8 training modules, implement the system for 30 days, and document your efforts, and you don't see measurable progress toward [outcome], we'll refund 100% of your investment."

**Benefits of Conditional Guarantees**:
- Filters uncommitted buyers
- Increases completion rates (they need to complete to get refund)
- Reduces frivolous refunds
- Attracts action-takers, not tire-kickers

**Caution**: Don't make conditions so onerous that the guarantee feels fake. The point is to require reasonable effort, not create impossible hurdles.

### Step 5: Craft the "Better Than Money Back" Element (Optional)

To create maximum differentiation and confidence, add a bonus on top of refund:

**Formula**: "If [condition not met], we'll refund your money AND [additional compensation]"

**Examples**:
- "Refund + $500 cash for your time"
- "Refund + keep all the bonuses ($997 value)"
- "Refund + free 1-on-1 consulting session ($500 value)"
- "Refund + a personal apology and introduction to someone who can help you"

This communicates: "I'm so confident, I'll pay YOU if it doesn't work."

**When to use**:
- Highly competitive markets (you need differentiation)
- New offers without track record (you need to overcome skepticism)
- High-ticket offers ($3,000+) where risk perception is high

**When NOT to use**:
- If you're not genuinely confident (you'll lose money and credibility)
- In markets where customers might game the system

### Step 6: Write the Primary Guarantee Statement

Create a one-sentence version for headlines, ads, and CTAs:

**Formula**: "[Timeframe] [Type] Guarantee: [Benefit/Outcome]"

**Examples**:

**Example 1 (Unconditional)**:
"60-Day Money-Back Guarantee: If you're not thrilled, we'll refund every penny—no questions asked."

**Example 2 (Conditional)**:
"Results or Refund: Complete the program and if you don't see measurable growth, full refund."

**Example 3 (Better-than-money-back)**:
"Triple Guarantee: Love it, or get your money back + $500 + keep the bonuses."

**Example 4 (Performance)**:
"10 Leads in 30 Days or We Work Free Until You Do."

Test variations to see which resonates most with your avatar.

### Step 7: Write the Extended Guarantee Description

Expand the one-sentence version into 2-3 paragraphs that explain:

**Paragraph 1: What the guarantee is**
- Clear statement of terms
- Timeframe and conditions

**Paragraph 2: Why you offer it**
- Your confidence in the product
- Your commitment to customer success

**Paragraph 3: How to use it**
- Simple claim process
- No hassle, no hoops

**Example Extended Guarantee**:

"**Our 60-Day, Better-Than-Money-Back Guarantee**

Here's the deal: Enroll in the program, go through all 12 weeks, implement what you learn, and track your results. If at the end of 60 days you haven't seen measurable progress toward [specific outcome]—and you can show us you did the work—we'll refund 100% of your investment. No questions, no hassle.

But we're going further. If you complete the program and it doesn't work for you, not only will we refund your money, we'll also send you $500 for wasting your time. That's how confident we are that this system works.

To claim your refund, simply email support@[company].com with your completion documentation (we'll tell you exactly what we need). We'll process your refund within 48 hours. We're making this so easy because we know that if you do the work, you'll get the results."

### Step 8: Build Guarantee Messaging Across Touchpoints

Your guarantee shouldn't hide in fine print—it should be prominently featured:

**Sales Page**:
- Mention in headline or sub-headline ("Risk-Free for 60 Days")
- Dedicated guarantee section with visual badge/seal
- Repeat at checkout / CTA

**Ads**:
- Include in ad copy ("Try it risk-free")
- Use in creative (graphics showing "60-Day Guarantee")

**Emails**:
- Mention in launch/promotional emails
- Dedicated email explaining the guarantee

**Checkout Page**:
- Guarantee badge near purchase button
- Link to full guarantee terms

**Video Sales Letters / Webinars**:
- Announce guarantee during value stack section
- Reinforce at close

**FAQ**:
- Dedicated FAQ question: "What if it doesn't work for me?"

### Step 9: Create the Refund Process SOP

A guarantee is only as good as its implementation. Document:

**Step 1: Customer Initiates Refund**
- Method: Email to support@[company].com
- Required info: Order number, reason (if conditional), proof of completion (if conditional)

**Step 2: Review (if conditional)**
- Who reviews: Customer success team
- Criteria: Did they meet the conditions?
- Timeline: Review within 24-48 hours

**Step 3: Refund Processing**
- Who processes: Finance/admin
- Timeline: 48 hours from approval
- Method: Original payment method

**Step 4: Follow-Up**
- Survey: "What could we have done better?"
- Exit interview option: Understand what went wrong
- Future offer: "We'd love another chance in the future"

Make the refund process painless. A difficult refund process creates angry customers and bad reviews.

### Step 10: Pressure-Test Your Guarantee Against Objections

Ask: Does this guarantee overcome the top objections?

**Objection**: "What if it doesn't work for me?"
**Guarantee Response**: "If you do the work and don't get results, we refund you + pay you $500."

**Objection**: "What if I don't have time?"
**Guarantee Response**: "Try it for 60 days—if it's too time-intensive, full refund."

**Objection**: "What if I've tried everything and nothing works?"
**Guarantee Response**: "This is different, and we're so sure it'll work that we'll refund you if it doesn't."

Your guarantee should neutralize the biggest buying objection.

### Step 11: Add Visual Guarantee Elements

Create visual trust signals:

**Guarantee Badge/Seal**:
- Design a "60-Day Guarantee" badge
- Place near CTAs and checkout

**Trust Icons**:
- Secure payment icons
- "Risk-Free" labels

**Guarantee Section Design**:
- Box/highlight guarantee section on sales page
- Use contrasting colors to draw attention

Visuals increase guarantee visibility and trust.

### Step 12: Benchmark Against Competitor Guarantees

Research competitor guarantees and differentiate:

| Competitor | Guarantee | Your Advantage |
|------------|-----------|----------------|
| Competitor A | 30-day money-back | You: 60-day (longer) |
| Competitor B | No guarantee | You: Full guarantee (huge advantage) |
| Competitor C | Vague "satisfaction" | You: Specific, conditional with bonus |

Position your guarantee as superior in marketing messaging.

### Step 13: Test Guarantee Variations

Create 2-3 guarantee variations to test:

**Variation A: Unconditional 60-Day**
**Variation B: Conditional 60-Day (must complete program)**
**Variation C: Better-than-money-back (refund + $500)**

Test in sales pages or landing pages. Measure:
- Conversion rate (checkout to purchase)
- Refund rate (purchases to refunds)
- Customer quality (completion rate, satisfaction)

Sometimes a stronger guarantee increases conversions AND decreases refunds.

### Step 14: Monitor and Optimize

After launch, track:

**Metrics to Monitor**:
- Refund request rate (% of purchases)
- Refund approval rate (if conditional)
- Reason for refunds (lack of results vs. changed mind vs. financial)
- Time to refund request (how many days after purchase?)

**Optimization Questions**:
- Are refunds higher or lower than expected?
- What reasons are customers giving?
- Should you extend/shorten the guarantee period?
- Should you make conditions clearer?

Use data to refine guarantee over time.

### Step 15: Leverage Guarantee Data in Marketing

If your refund rate is low, use it as social proof:

**Examples**:
- "Less than 3% of customers request refunds—that's how confident they are in results."
- "Our guarantee is so strong, yet 97% of customers never use it."
- "We've processed fewer than 50 refunds out of 10,000+ customers."

Low refund rates prove your guarantee is credible AND your product delivers.

## Tips & Best Practices

1. **The Stronger the Guarantee, the Fewer Refunds You'll Get**: This is counterintuitive but proven: audacious guarantees (90-day, better-than-money-back) attract confident, committed buyers who rarely refund. Weak or no guarantees attract skeptical, refund-prone buyers. Don't be afraid to go bold—it filters for quality customers.

2. **Make the Guarantee Visible, Not Hidden**: Too many companies bury the guarantee in terms and conditions. Feature it prominently. The guarantee should be impossible to miss. If prospects don't see it, it's not reducing risk. Put it in headlines, repeat it at the CTA, and dedicate a section to it on sales pages.

3. **Specificity Beats Vagueness**: "Satisfaction guaranteed" is meaningless. "60-day money-back guarantee: if you complete the program and don't add at least one new client, we'll refund you + pay you $500" is specific and compelling. Vague guarantees don't reduce perceived risk. Specific ones do.

4. **Honor Guarantees Quickly and Gracefully**: The worst thing you can do is make refunds difficult. Fast, no-hassle refunds turn would-be detractors into neutral or even positive word-of-mouth. Difficult refunds create angry customers, bad reviews, and chargebacks. Process refunds within 48 hours, no arguing.

5. **Conditional Guarantees Increase Commitment**: Requiring customers to complete the program to qualify for a refund actually increases completion rates (they want to be eligible for the guarantee). This paradoxically reduces refunds because customers who complete the program get results and don't want refunds.

## Common Pitfalls

1. **Guarantee That Doesn't Match Avatar's Risk Perception**: If your avatar's #1 fear is "I won't be able to implement this" and your guarantee is "money-back if not satisfied," you've missed the mark. The guarantee must address the actual risk they perceive. Mismatch = wasted guarantee.

2. **Conditional Guarantee With Unreasonable Conditions**: If your conditional guarantee requires 40 hours of work to qualify, it's not a guarantee—it's a barrier. Conditions should be reasonable (complete the modules, implement for 30 days, show proof of effort). If conditions feel like a trick, you lose trust.

3. **No Guarantee on High-Ticket Offers**: The higher the price, the higher the perceived risk. If you're charging $5,000+ and offering no guarantee, you're leaving conversions on the table. High-ticket demands strong guarantees. Don't skip risk reversal on expensive offers.

4. **Burying the Guarantee in Fine Print**: If your guarantee is only visible in the footer or terms and conditions, it's not doing its job. The guarantee should be announced, featured, and repeated. Visibility = effectiveness. Hidden guarantees don't reduce risk perception.

5. **Making Refunds Difficult**: Slow refund processing, requiring phone calls, demanding excessive documentation—these tactics backfire. They create angry customers, bad reviews, chargebacks, and reputational damage. Honor guarantees gracefully. The short-term cost of refunds is far less than the long-term cost of angry customers.

## Example Usage Scenario

**Context**: A business coach sells a $3,997 12-week group coaching program teaching service providers to scale from $5K/month to $20K/month. Avatar research reveals the #1 objection is: "I've tried programs before and they didn't work—what if this doesn't work for me either?" Competitors offer either no guarantee or standard 30-day money-back. The coach wants to differentiate and overcome the skepticism.

**Execution**:

1. **Avatar Risk Identification**:
   - Top fear: "I'll invest $4K and get no results"
   - Secondary fear: "I won't be able to implement it"

2. **Guarantee Type Selection**:
   - **Option A**: Unconditional 60-day money-back
   - **Option B**: Conditional guarantee (complete program + implement, no results = refund)
   - **Option C**: Better-than-money-back (conditional + $500 bonus if no results)
   - **Selection**: Option C (most differentiated, highest confidence signal)

3. **Guarantee Crafting**:

   **Primary Statement**:
   "Our Triple Guarantee: Complete the 12-week program, implement the strategies, and if you don't see measurable revenue growth, we'll refund your $3,997 investment AND send you $500 for your time."

   **Extended Description**:
   "We've seen this program work for hundreds of service providers, and we're confident it'll work for you too. Here's our promise:

   Complete all 12 coaching sessions, implement the pricing and positioning strategies we teach, and document your efforts. If after 90 days (12 weeks + 30 days to see results) you haven't seen measurable progress toward scaling your business, simply show us your work and we'll do three things:

   1. Refund 100% of your $3,997 investment
   2. Send you an additional $500 for your time and effort
   3. Provide a free 1-hour consulting session to help you figure out what will work for your unique situation

   Why are we willing to do this? Because we know that if you show up, do the work, and follow the system, you'll get results. The only way you 'lose' is if you don't implement—and we can't help you with that. But if you're committed and it doesn't work, we'll not only give you your money back—we'll compensate you for your time.

   To claim this guarantee, email us at support@[company].com within 90 days with your session attendance records and implementation documentation. We'll process everything within 48 hours."

4. **Competitive Positioning**:
   - Competitor A: No guarantee → You: Triple guarantee (major advantage)
   - Competitor B: 30-day money-back → You: 90-day + $500 bonus (superior)
   - Positioning statement: "Unlike other programs that hide behind vague promises, we're putting our money where our mouth is."

5. **Implementation**:

   **Sales Page**:
   - Guarantee featured in headline area ("Risk-Free + $500 Guarantee")
   - Full guarantee section with badge/visual
   - Repeated at checkout

   **Sales Calls**:
   - "Let me remove all the risk for you..." (introduce guarantee)
   - "Even if you've failed before, you can't lose here—worst case, you get your money back plus $500"

   **Email Sequence**:
   - Dedicated email: "Why I'm willing to pay you $500 if this doesn't work"
   - Reinforces confidence and removes risk

6. **Refund SOP**:
   - Customer emails support with session records + implementation proof
   - Team reviews within 24 hours (did they attend sessions? Did they implement?)
   - If yes: Approve refund + $500 bonus, process within 48 hours
   - If no: Explain they didn't meet conditions, offer alternative (e.g., finish the program, then reassess)

7. **Testing & Results**:
   - **Before guarantee**: 4.2% conversion rate on sales page
   - **After guarantee**: 6.8% conversion rate (62% increase)
   - **Refund rate**: 2.1% (much lower than expected)
   - **Refunds citing "no results"**: 0.7% (conditional requirement filtered non-serious buyers)

8. **Marketing Leverage**:
   - After 6 months: "We've enrolled 200+ people and only 4 have requested refunds—that's how confident we are in this program."
   - Used as social proof in ads and sales conversations

**Result**: The bold, better-than-money-back conditional guarantee became the primary differentiator. Prospects cited it as the #1 reason they felt comfortable investing. Refund rate was lower than industry average because the conditional requirement filtered serious buyers. The $500 bonus was paid out only twice in the first year (cost: $1,000; revenue increase from higher conversions: $78,000+).

**Key Insight**: The guarantee that felt "too risky" to offer was actually the safest bet. It attracted committed buyers (who didn't refund), repelled uncommitted buyers (who would have refunded anyway), and differentiated the offer in a crowded market. The bold guarantee paid for itself 78x over in increased conversions.


---

## Referência: references/strategy-hook-ideation.md

# Hook Ideation

**Task ID**: `strategy-003`
**Task Name**: Hook Ideation
**Phase**: Strategy & Planning

## Purpose

The hook is the first 3-7 seconds of attention—the opening line, the headline, the scroll-stopping visual, or the pattern interrupt that makes a prospect stop, look, and lean in. In a world where average attention span is measured in seconds and ad blindness is the default state, the hook is not optional—it's the entire battle. Without a powerful hook, nothing else matters. Your brilliant body copy, your irresistible offer, your stack of proof—none of it gets consumed if the hook doesn't stop the scroll.

A great hook does three things simultaneously: it creates a pattern interrupt that breaks through noise, it triggers curiosity or emotion that demands resolution, and it pre-qualifies the audience by speaking directly to a specific desire or pain point. The best hooks feel personal ("how did they know I was thinking about this?"), surprising ("I didn't know that was possible"), or urgent ("I need to know this now"). They're not just clever—they're strategic openings that set up everything that follows.

This task systematizes hook creation using frameworks from Eugene Schwartz's "Breakthrough Advertising," David Ogilvy's headline formulas, Gary Halbert's "most wanted response," and modern direct response practitioners like Alex Hormozi and Russell Brunson. You'll generate dozens of hooks across multiple categories, test them against proven criteria, and select winners based on data, not opinion.

## When to Use

- At the start of any campaign before writing ads or sales copy
- When testing new angles into an existing funnel
- When ad performance is declining and you need fresh hooks
- When entering a new traffic source or platform
- When split-testing headlines on landing pages
- When creating content for social media or email subject lines
- When you need scroll-stopping opens for VSLs or webinars

## Input Requirements

### Required Inputs
- Avatar research (desires, pains, beliefs, objections)
- Big Idea or unique mechanism (the core concept you're hooking into)
- Product/offer (what you're ultimately selling)
- Platform/medium (Facebook ad, email subject, headline, VSL open)
- Market sophistication level (what hooks are already saturated)

### Optional Inputs
- Competitive hook analysis (what's working in your market)
- Proven hook winners from your past campaigns
- Seasonal/cultural trends to leverage
- Influencer or celebrity associations
- Data/statistics that surprise or shock
- Controversial positions or contrarian views

### Example Data
```yaml
avatar: "35-50 year old moms who want to lose baby weight"
core_desire: "Look 10 years younger without spending hours at the gym"
big_idea: "The 2-Hour Workweek Body"
market_sophistication: "Stage 3 - Solution aware, mechanism sophisticated"
platform: "Facebook video ads (5-second hook crucial)"
current_winning_hook: "What if I told you 60-minute workouts are making you fatter?"
```

## Output Format

### Expected Artifacts
1. Hook bank (50-100 hooks across multiple categories)
2. Top 10 hooks for testing (with rationale)
3. Hook variations (A/B/C versions of winners)
4. Hook-to-angle mapping (which hooks lead to which angles)
5. Hook testing plan

### Schema
```yaml
hook:
  text: "The actual hook copy"
  category: "Curiosity/Fear/Desire/Social Proof/Contrarian/etc."
  pattern_interrupt: "What makes it stop the scroll"
  emotion_triggered: "Primary emotion"
  avatar_alignment: "Which avatar segment this speaks to"
  proof_required: "What you need to back this hook up"
  platform_suitability: "Best for ads/email/landing page/etc."
  testing_priority: "High/Medium/Low"
```

### Examples

**Hook 1**: "The accidental discovery that has cardiologists concerned and personal trainers furious..."
- Category: Curiosity + Authority + Controversy
- Emotion: Intrigue
- Proof Required: Medical study or doctor quote

**Hook 2**: "If you're over 35 and struggling to lose weight, it's not your fault—it's your cortisol."
- Category: Exoneration + Education
- Emotion: Relief (it's not my fault)
- Proof Required: Cortisol research, age-related hormonal shifts

**Hook 3**: "I lost 32 pounds in 90 days training 2 hours per WEEK, not per day. Here's how..."
- Category: Social proof + Specificity + Contrarian
- Emotion: Hope + Curiosity
- Proof Required: Before/after photos, training log

## Assigned Copywriter(s)

**Primary**: Eugene Schwartz (master of curiosity-driven opens and market awareness)
**Secondary**: Gary Halbert (emotional directness and "most wanted response")
**Advisory**: David Ogilvy (headline formulas), Alex Hormozi (modern pattern interrupts), Russell Brunson (story hooks)

Eugene Schwartz's understanding of what creates curiosity without confusion is foundational. Gary Halbert adds the emotional punch that makes hooks feel personal. The modern practitioners contribute platform-specific insights for social media and video.

## Dependencies

**Must Complete First**:
- Avatar research (you can't hook what you don't understand)
- Big Idea generation (the hook opens the door to the Big Idea)

**Should Complete First**:
- Unique mechanism (mechanism-focused hooks are highly effective)
- Angle selection (hooks and angles are tightly coupled)

**Can Run In Parallel**:
- Story mining (stories can become hooks)
- Benefit ladder (benefits can be hook material)

## Step-by-Step Execution

### Step 1: Review the 11 Proven Hook Categories

Generate at least 5 hooks in each category:

**1. Curiosity Hooks** (create an information gap)
- "The weird 5-minute morning ritual that..."
- "What [authority figure] discovered about..."
- "The real reason you can't [achieve desire]..."

**2. Contrarian Hooks** (challenge conventional wisdom)
- "Why everything you know about X is wrong"
- "Stop doing X (it's making things worse)"
- "The [mainstream advice] myth that's costing you..."

**3. Social Proof Hooks** (leverage results/numbers)
- "How [number] people achieved [result] using..."
- "I [achieved impressive result] by [doing unusual thing]"
- "[Notable person] uses this method to..."

**4. Fear/Warning Hooks** (highlight consequences of inaction)
- "If you're doing X, stop immediately"
- "The hidden danger of [common practice]"
- "Before you [take action], read this"

**5. Desire/Benefit Hooks** (lead with the outcome)
- "How to [achieve desire] without [common requirement]"
- "The fastest way to [desired outcome]"
- "[Achieve desire] in [timeframe] using [simple method]"

**6. Question Hooks** (engage through inquiry)
- "What if [unexpected possibility]?"
- "Are you making these [number] mistakes?"
- "Ready to [desired outcome] without [pain point]?"

**7. Story Hooks** (start with narrative)
- "Three months ago, I was [negative state]..."
- "The day everything changed was when..."
- "I'll never forget the moment I discovered..."

**8. Secret/Discovery Hooks** (promise insider information)
- "The [industry] secret they don't want you to know"
- "Newly discovered method for [outcome]"
- "What [expert group] knows about X that you don't"

**9. Urgency/Scarcity Hooks** (create time pressure)
- "This only works if you start before [date/event]"
- "Why waiting until [future time] is a mistake"
- "[Opportunity] is disappearing—here's why"

**10. Exoneration Hooks** (remove guilt/blame)
- "It's not your fault that [problem]"
- "If [X] isn't working, here's why (and it's not you)"
- "You're not lazy—you're using the wrong system"

**11. Specificity/Number Hooks** (precision creates credibility)
- "The 17-minute method for [outcome]"
- "Exactly what to do on day 1, day 3, and day 7"
- "[Number] people can't be wrong about this"

### Step 2: Apply the "Pattern Interrupt Test"

For each hook, ask: "Would this make me stop mid-scroll?"

Rate on a 1-10 scale:
- **1-3**: Generic, could be for any product
- **4-6**: Interesting but not compelling
- **7-8**: Strong, would make many people stop
- **9-10**: Impossible to ignore

Only advance hooks rated 7+ to the next round.

### Step 3: Check for Avatar Alignment (The "That's Me" Test)

Your hook must make your avatar think: "This is for me / This is about my problem."

For each hook, identify:
- What desire or pain it speaks to
- What belief it challenges or confirms
- What demographic/psychographic markers it includes

Example: "If you're over 35 and struggling to lose weight..." immediately signals age and problem, filtering for the right avatar.

### Step 4: Apply Eugene Schwartz's Awareness-Stage Filter

Match hooks to awareness stages:

**Stage 1 (Unaware)**: Education hooks
- "The hidden reason you feel tired all day"

**Stage 2 (Problem Aware)**: Problem amplification hooks
- "Why stubborn belly fat gets worse after 40"

**Stage 3 (Solution Aware)**: Differentiation hooks
- "The workout method that works BETTER in less time"

**Stage 4 (Product Aware)**: Proof/urgency hooks
- "Why 10,000+ people switched to [your program]"

**Stage 5 (Most Aware)**: Offer hooks
- "Last chance: [Offer] ends in 48 hours"

Select hooks that match where your traffic is in the awareness journey.

### Step 5: Build Mechanism-Focused Hooks (If Applicable)

If you have a unique mechanism, create hooks that introduce or intrigue around it:

**Formula 1: Mechanism Introduction**
- "The [Mechanism Name] that [impressive result]"
- Example: "The Metabolic Priming Protocol that reset my weight set point in 21 days"

**Formula 2: Mechanism Curiosity**
- "What happens when you [do mechanism] instead of [standard approach]?"
- Example: "What happens when you lift weights for 10 minutes instead of 60?"

**Formula 3: Mechanism Discovery**
- "How I discovered the [mechanism] that [outcome]"
- Example: "How I discovered the 3-phase reset that fixed my metabolism"

### Step 6: Mine Your Avatar Research for Language

Review your avatar research document. Look for:
- Exact phrases they use to describe their pain
- Unexpected words or metaphors
- Emotional language ("frustrated," "exhausted," "desperate")

Incorporate this language into hooks verbatim:

If avatars say: "I'm so tired of starting over every Monday"
Your hook: "If you're tired of 'starting fresh' every Monday, read this"

This creates instant recognition and connection.

### Step 7: Create Contrast-Based Hooks

Use the "Without" formula:

"[Desired outcome] without [undesired requirement]"

Examples:
- "Lose 20 pounds without giving up carbs"
- "Build a 6-figure business without paid ads"
- "Get fit without living at the gym"

The "without" creates contrast and removes the biggest objection in the hook itself.

### Step 8: Steal Smart (Swipe and Adapt)

Find proven hooks from:
- Successful ads in your industry (Facebook Ad Library)
- Headline formulas from classic books (Ogilvy, Caples, Schwartz)
- Adjacent industries solving similar problems

Adapt, don't copy. Change the subject matter but keep the structure:

Proven hook: "The 5-minute morning ritual that boosts your energy"
Your adaptation: "The 5-minute evening routine that resets your metabolism"

### Step 9: Add Specificity and Numbers

Vague hooks die. Specific hooks convert.

Transform generic to specific:
- "Lose weight fast" → "Lose 12 pounds in 21 days"
- "Make more money" → "Add $5,000/month in 90 days"
- "Get more clients" → "Sign 3 new clients this week"

Numbers create tangibility and credibility.

### Step 10: Build Hook Variations (A/B/C Testing Prep)

For your top 10 hooks, create 3 variations:

**A Version**: Direct and clear
- "How to lose 20 pounds in 60 days without giving up carbs"

**B Version**: Curiosity-driven
- "The counterintuitive carb strategy that melts 20 pounds in 60 days"

**C Version**: Social proof
- "Why 10,000 people are losing 20+ pounds eating MORE carbs"

This gives you 30 testable hooks from 10 core concepts.

### Step 11: Map Hooks to Sales Message Angles

Each hook implies an angle. Document the connection:

| Hook | Implied Angle | Sales Message Focus |
|------|---------------|---------------------|
| "Stop doing 60-minute workouts" | Efficiency angle | Prove short workouts are better |
| "It's not your fault—it's cortisol" | Exoneration angle | Explain hormonal barriers |
| "The Japanese longevity secret" | Discovery angle | Reveal exotic method |

This ensures your hook and body copy are aligned, not disjointed.

### Step 12: Conduct the "Proof Availability Test"

For each hook, ask: "Can I prove this claim?"

If your hook says: "The weird trick that doctors hate"
You need: Actual doctor pushback or controversy

If you can't prove it, either:
- Dial back the claim
- Go gather the proof
- Discard the hook

Unsubstantiated hooks destroy credibility.

### Step 13: Platform Optimization

Adapt hooks for different platforms:

**Facebook/Instagram Ads** (first 3 seconds matter):
- Shorter, punchier
- Visual curiosity (what they see + what they read)
- "Stop the scroll" energy

**Email Subject Lines** (must compete in inbox):
- Personalization ("John, about your question...")
- Curiosity without clickbait
- Benefit-forward

**Landing Page Headlines** (visitor is already warmer):
- Can be longer and more specific
- Include sub-headline for clarity
- Match ad scent (continuity from ad to page)

**VSL/Webinar Opens** (first 30 seconds):
- Story-driven or pattern interrupt
- Must set up the framework for the full presentation
- Can be longer (15-20 seconds spoken)

### Step 14: Test Against the "Scroll Test"

Show your hooks to 10 people in your target market:
- Do they stop and ask "what's this about?"
- Can they repeat the hook back to you?
- Do they want to know more?

If 7+ out of 10 engage, it's a winner. If fewer than 5 engage, back to the drawing board.

### Step 15: Create Your Hook Testing Plan

Prioritize hooks for testing based on:
1. Avatar alignment score (1-10)
2. Proof availability (1-10)
3. Differentiation from market (1-10)
4. Gut instinct / "would I click this?" (1-10)

Total the scores. Test the top 5 hooks first, then the next 5 based on performance.

Document your testing plan:
- What platforms
- What audience segments
- What success metrics (CTR, CPM, cost per lead)
- Timeline for each test

## Tips & Best Practices

1. **Volume Before Quality (At First)**: In the ideation phase, quantity is the goal. Generate 50-100 hooks even if most are terrible. The best hooks often come after you've exhausted the obvious ones. Set a timer for 30 minutes and just write—no editing, no judgment.

2. **The "Cocktail Party Test"**: If you overheard someone say your hook at a party, would you lean in to hear more? Or would you tune it out as marketing noise? Great hooks sound like interesting statements, not ads. "I lost 30 pounds eating more carbs" beats "Proven weight loss system with carb cycling."

3. **Curiosity MUST Lead to Satisfaction**: If your hook promises "the weird trick" but your body copy reveals something obvious, you'll get hate comments and unsubscribes. The payoff must be worthy of the hook. Curiosity is a loan—you must repay it with value.

4. **Steal the Structure, Not the Words**: Swipe files are frameworks, not templates. "The [X] that [impressive result]" is a structure. Copying someone's exact hook is plagiarism and lazy. Use proven structures with your unique content.

5. **The First Hook Rarely Wins**: In most campaigns, the winning hook is discovered in testing, not in the initial brainstorm. Launch with your best guess, but budget for testing 5-10 variations. The market will tell you what resonates—listen to the data.

## Common Pitfalls

1. **Clickbait Without Substance**: "You won't BELIEVE what happened next" might get clicks, but if the payoff is weak, you'll burn trust. Curiosity hooks must deliver on the promise. If your hook is 10/10 curiosity but your content is 5/10 value, you lose.

2. **Targeting Everyone (And Therefore No One)**: Vague hooks like "Want to be successful?" don't filter for your avatar. Specific hooks like "Tired of starting over every Monday?" speak directly to a felt experience. Specificity is not limiting—it's magnetic to the right people.

3. **Overthinking the Creative**: Sometimes the best hook is the simplest: "How I lost 40 pounds" out-performs clever wordplay. Don't get so lost in trying to be creative that you forget to be clear. When in doubt, go direct.

4. **Ignoring Market Sophistication**: Using a "new discovery" hook in a Stage 4 market is tone-deaf. Your audience has already seen "revolutionary new methods." They need differentiation, not novelty. Match your hook to where the market is, not where you wish it was.

5. **No Emotional Trigger**: Logical hooks bore. "A comprehensive approach to weight management" triggers nothing. "Stop starting over every Monday" triggers frustration and hope. Every hook should evoke an emotion—curiosity, fear, hope, anger, excitement. If it's flat, it's dead.

## Example Usage Scenario

**Context**: A fitness coach is launching a new program for 35-50 year old women who want to lose baby weight. Market is saturated with "30-day transformations" and "lose 10 pounds fast" hooks. Avatar research reveals the core frustration is not the weight itself, but the exhaustion and lack of time—they want results without sacrificing sleep or family time.

**Execution**:

1. **Avatar Language Mining**:
   - Phrases collected: "I'm so tired," "I don't have time," "I've tried everything," "I just want my old body back"

2. **Hook Brainstorm** (50+ generated, top 10 selected):

   **Curiosity Hooks**:
   - "What if I told you 60-minute workouts are making you MORE tired?"
   - "The real reason moms over 35 can't lose baby weight (it's not calories)"

   **Exoneration Hooks**:
   - "If you can't stick to a diet, it's not your fault—it's your cortisol"
   - "You're not lazy—you're hormonally exhausted"

   **Contrarian Hooks**:
   - "Stop doing cardio (it's aging you faster)"
   - "Why 'eating less and moving more' doesn't work after 35"

   **Specificity Hooks**:
   - "How I lost 32 pounds training 90 minutes per WEEK (not per day)"
   - "The 15-minute evening routine that reset my metabolism in 21 days"

   **Story Hooks**:
   - "Three kids, two jobs, zero energy—here's how I got my body back"
   - "I was exhausted, overweight, and desperate. Then I discovered this..."

3. **Testing Plan**:
   - **Week 1**: Test top 5 hooks as Facebook video ad opens (5 seconds each)
   - **Success metric**: CTR (click-through rate) above 3%
   - **Budget**: $50 per hook per day

4. **Results**:
   - **Winner**: "What if I told you 60-minute workouts are making you MORE tired?" (4.7% CTR, $2.10 cost per click)
   - **Runner-up**: "You're not lazy—you're hormonally exhausted" (3.9% CTR, $2.45 cost per click)
   - **Loser**: "The 15-minute evening routine..." (1.2% CTR, $8.50 cost per click)

5. **Implementation**: Winner becomes the primary hook for all ad creative. Runner-up is used for email subject lines. Both hooks are developed into full angles with supporting body copy.

**Key Insight**: The winning hook challenged a belief (more exercise = better results) while speaking to the core pain (exhaustion). It wasn't the cleverest hook or the most specific—it was the one that most directly addressed what the avatar was feeling. The market chose the winner, not the copywriter.


---

## Referência: references/strategy-story-mining.md

# Story Mining

**Task ID**: `strategy-005`
**Task Name**: Story Mining
**Phase**: Strategy & Planning

## Purpose

Story Mining is the systematic extraction of narrative assets from your business, customers, and market that can be weaponized in sales copy, ads, emails, and presentations. Stories are not decorative—they're strategic persuasion devices that bypass logical resistance, create emotional connection, and make abstract benefits tangible. While features tell and benefits sell, stories transport. They turn prospects into participants, transforming passive readers into emotionally invested buyers who see themselves in the narrative.

The problem most marketers face is not that they lack stories—it's that they don't know how to identify, extract, and structure the stories they already have. Your founder's journey, your customer transformations, your product origin, your industry observations—these are all raw story material waiting to be mined. But raw material is useless without refinement. Story mining is the process of digging into your business and extracting story gold: the moments of transformation, the before-and-after turning points, the struggles and breakthroughs that prove your promise is real.

This task systematizes story collection and structuring using frameworks from Russell Brunson's "Expert Secrets," Donald Miller's StoryBrand, Joseph Campbell's Hero's Journey, and the direct response storytelling techniques of Gary Halbert, Eugene Schwartz, and John Carlton. You'll learn to identify story-worthy moments, extract the elements that create emotional resonance, and structure stories for maximum persuasive impact.

## When to Use

- At the beginning of any campaign (before writing copy)
- When creating founder/origin story content
- When developing case studies and testimonials
- When building webinar or VSL narratives
- When crafting email sequences (story-based nurture)
- When competitors are using purely logical/feature-based messaging
- When you need to humanize a technical or complex product

## Input Requirements

### Required Inputs
- Founder/company origin story (how you started, why you started)
- Customer success stories (before/after transformations)
- Product development story (how/why you created this solution)
- Personal struggles or failures related to the problem you solve
- Avatar research (what stories will resonate with them)

### Optional Inputs
- Industry trend stories (market shifts, cultural moments)
- Competitor failure stories (cautionary tales)
- Behind-the-scenes stories (how you do what you do)
- Historical analogies (parallel stories from other industries/eras)
- Mentor/influence stories (who taught you, who inspired the method)
- Discovery/epiphany stories (the "aha" moment)

### Example Data
```yaml
founder_story:
  before_state: "Corporate marketing exec, burned out, unfulfilled"
  rock_bottom: "Passed over for promotion after 12-hour days for 5 years"
  epiphany: "Realized trading time for money would never lead to freedom"
  new_path: "Quit job, started consulting, built freedom lifestyle"
  transformation: "From burned-out employee to 6-figure freelancer in 18 months"

customer_story:
  avatar: "Sarah, 42, working mom of three"
  before_state: "20 pounds overweight, exhausted, no energy for kids"
  failed_attempts: "Tried keto, tried gym memberships, always quit by week 3"
  discovery: "Found our program through Facebook ad"
  turning_point: "Week 2, first time in years she had energy to play with kids"
  after_state: "Lost 23 pounds, runs 5K, feels 10 years younger"
```

## Output Format

### Expected Artifacts
1. Story Bank (10-20 documented stories)
2. Story Frameworks (structure templates for each story type)
3. Story-to-Messaging Map (which stories support which claims)
4. Story Snippets Library (ready-to-use copy blocks)
5. Story Testing Plan

### Schema
```yaml
story:
  type: "Origin/Transformation/Discovery/Failure/Social Proof"
  protagonist: "Who the story is about"
  before_state: "Starting condition"
  inciting_incident: "What triggered the change"
  struggle: "Obstacles and failures"
  turning_point: "The breakthrough moment"
  after_state: "End condition"
  lesson: "What the story proves"
  emotional_arc: "What emotion the story evokes"
  usage_context: "Where this story fits in copy (hook/body/close)"
  proof_elements: ["Supporting evidence"]
```

### Examples

**Story 1: Founder Origin Story**
- Type: Origin
- Protagonist: You (the founder)
- Before: Struggling with [problem] for years
- Turning Point: Discovered [unique insight] that changed everything
- After: Built successful business solving [problem] for others
- Lesson: Proves you understand the pain (you lived it)

**Story 2: Customer Transformation**
- Type: Transformation
- Protagonist: Customer avatar (Sarah, 42-year-old mom)
- Before: Exhausted, overweight, tried everything
- Turning Point: Week 2 of program, first energy boost
- After: Lost 23 pounds, runs 5K, plays with kids
- Lesson: Proves your method works for people like her

## Assigned Copywriter(s)

**Primary**: Russell Brunson (expert secrets, epiphany bridge, hero's journey adaptation)
**Secondary**: Gary Halbert (emotional storytelling in sales letters)
**Advisory**: John Carlton ("simple twist" storytelling), Eugene Schwartz (story-as-proof), Donald Miller (StoryBrand framework)

Russell Brunson's frameworks for extracting and structuring stories for marketing are unmatched. Gary Halbert adds the emotional intensity and directness. John Carlton contributes the street-smart, relatable narrative voice.

## Dependencies

**Must Complete First**:
- Avatar research (stories must resonate with avatar beliefs/desires)

**Should Complete First**:
- Big Idea generation (stories often illustrate the Big Idea)
- Unique mechanism (mechanism discovery stories are powerful)

**Can Run In Parallel**:
- Testimonial collection (testimonials ARE stories)
- Hook ideation (stories can become hooks)
- Angle selection (stories support angles)

## Step-by-Step Execution

### Step 1: Identify the 7 Core Story Types You Need

Every marketing story falls into one of these categories. Mine for at least one story in each:

**Type 1: Origin Story (Why You Exist)**
- How you or your company started
- The problem that led to creating your solution
- The personal stake you have in solving this problem

**Type 2: Transformation Story (Proof It Works)**
- Customer before/after narratives
- Your own before/after (if applicable)
- Specific moments of change

**Type 3: Discovery Story (How You Found the Solution)**
- The epiphany or breakthrough moment
- Testing and validation
- The unique insight that led to your method

**Type 4: Failure Story (What Doesn't Work)**
- Your failed attempts before finding the answer
- Customer stories of failed alternatives
- Industry practices that are broken

**Type 5: Social Proof Story (Who Else Uses This)**
- Notable customer case studies
- Volume/scale stories ("10,000 people have used this")
- Unexpected user stories (surprising demographics)

**Type 6: Behind-the-Scenes Story (How You Do What You Do)**
- Your process or methodology in action
- What happens "inside the machine"
- Care and craftsmanship stories

**Type 7: Vision Story (The Future You're Creating)**
- What the world looks like when your mission succeeds
- The movement or change you're leading
- Aspirational future-casting

### Step 2: Apply Russell Brunson's "Epiphany Bridge" Framework

For each major story (especially origin and discovery stories), complete the Epiphany Bridge:

**Part 1: The Backstory**
- What was your life like before the epiphany?
- What were you trying to achieve?
- What methods were you using?

**Part 2: Your Desires**
- What did you really want?
- Why did you want it?
- What would it mean to achieve it?

**Part 3: The Wall**
- What obstacle did you hit?
- What wasn't working?
- What was the moment of desperation or frustration?

**Part 4: The Epiphany**
- What was the breakthrough insight?
- Who or what gave you this insight?
- What changed in your understanding?

**Part 5: The Plan**
- What did you do differently?
- What was your new approach?
- How did you test it?

**Part 6: The Result**
- What happened when you applied the epiphany?
- How did your life change?
- What became possible?

This structure creates a complete narrative arc that readers can emotionally follow.

### Step 3: Mine Customer Transformations (The Before/After Grid)

Interview customers or review testimonials. For each transformation story, document:

| Element | Before | After |
|---------|--------|-------|
| External State | What their life looked like | What it looks like now |
| Internal State | How they felt | How they feel now |
| Daily Reality | A day in their life | A day in their life now |
| Relationships | Impact on family/friends/work | How relationships changed |
| Self-Perception | How they saw themselves | How they see themselves now |
| Biggest Struggle | What they couldn't overcome | What's now easy/natural |

The contrast creates the emotional power. Mine for specific details, not generic improvements.

### Step 4: Extract "Moments" Not Summaries

Weak story: "I lost weight and felt better."
Strong story: "It was week 2, Tuesday morning. I was making breakfast for my kids and realized I wasn't out of breath. That's when I knew something had changed."

Mine for:
- Specific moments in time
- Sensory details (what they saw, felt, heard)
- Turning points (when did they realize change was happening?)
- Emotional peaks (fear, excitement, relief, pride)

These moments create vivid mental movies, not abstract concepts.

### Step 5: Build Your Founder/Origin Story (The "Why We Exist" Narrative)

Answer these questions to construct your origin story:

1. **What was the problem you faced personally?**
   (This creates empathy—you've been where they are)

2. **What did you try that didn't work?**
   (This validates their failed attempts)

3. **What was your "rock bottom" moment?**
   (This creates dramatic tension and relatability)

4. **What was the insight or discovery that changed everything?**
   (This is your unique mechanism or Big Idea origin)

5. **How did you test or validate it?**
   (This builds credibility)

6. **What happened when you applied it?**
   (This is the transformation proof)

7. **Why are you sharing this with others?**
   (This is your mission statement)

This becomes your brand story, told consistently across all channels.

### Step 6: Create Story Snippets (Pre-Written Copy Blocks)

For each story in your Story Bank, write:

**Version 1: Extended (500-800 words)**
- Full narrative with all details
- Use in long-form sales letters, VSLs, webinars

**Version 2: Medium (200-300 words)**
- Condensed version hitting key beats
- Use in email sequences, blog posts

**Version 3: Short (50-100 words)**
- Core transformation only
- Use in ads, social posts, testimonials

Having multiple lengths allows you to deploy the same story across different formats.

### Step 7: Map Stories to Marketing Objectives

Different stories serve different purposes. Create a mapping:

| Marketing Goal | Story Type | Example |
|----------------|------------|---------|
| Build credibility | Origin story | "I spent 10 years in corporate before..." |
| Prove it works | Transformation | "Sarah lost 23 pounds in 90 days..." |
| Introduce mechanism | Discovery | "The day I discovered metabolic priming..." |
| Handle objections | Failure story | "I wasted $10K on programs that didn't work..." |
| Create urgency | Vision story | "Imagine a world where..." |

This ensures you're using the right story for the right job.

### Step 8: Apply the Hero's Journey Structure (Joseph Campbell)

For your most important stories (founder origin, flagship customer transformation), use the classic Hero's Journey:

1. **Ordinary World**: Life before the change
2. **Call to Adventure**: The problem becomes urgent
3. **Refusal of the Call**: Initial resistance or doubt
4. **Meeting the Mentor**: Discovery of your solution (you're the mentor)
5. **Crossing the Threshold**: Commitment to change
6. **Tests, Allies, Enemies**: The struggle and obstacles
7. **Approach to the Inmost Cave**: The moment of truth
8. **Ordeal**: The hardest part of the transformation
9. **Reward**: The breakthrough
10. **The Road Back**: Implementing the change
11. **Resurrection**: Final test, proof of change
12. **Return with the Elixir**: The new life, sharing with others

Not every story needs all 12 beats, but hitting 6-8 creates a complete arc.

### Step 9: Mine for "Struggle Stories" (The Power of Failure)

Don't just tell success stories. Mine for:

**Your Failures**:
- What you tried that didn't work (before your breakthrough)
- Money/time you wasted on bad solutions
- Mistakes you made that taught you

**Customer Failures**:
- What they tried before finding you
- Why those solutions failed
- How much they spent/suffered before discovering you

Failure stories create identification ("I've been there too") and set up your solution as the answer.

### Step 10: Create "Day in the Life" Stories

Show, don't tell, what transformation looks like:

**Before**: Walk through a typical day in the "before" state
- What time they wake up, how they feel, what challenges they face, how the day ends

**After**: Walk through a typical day in the "after" state
- Same structure, but now showing the transformation

This creates tangible, relatable proof that resonates more than abstract benefits.

### Step 11: Extract Industry Trend Stories (Cultural Context)

Position your solution within larger cultural or industry trends:

- "The old way was [X]. But in 2025, everything changed when..."
- "Ten years ago, [problem] wasn't an issue. But today, with [trend], it's epidemic..."
- "While the industry is obsessed with [wrong focus], smart people are doing [your approach]..."

Trend stories create urgency and frame your solution as timely and relevant.

### Step 12: Build the "Unusual Suspect" Story Bank

Mine for surprising stories:
- Customers who succeeded despite being "unlikely" candidates
- Unexpected applications of your product
- Results that surprised even you

Examples:
- "The 60-year-old grandmother who outperformed 20-year-olds"
- "The shy introvert who became a top salesperson"
- "The complete beginner who beat industry veterans"

These stories expand perceived applicability and overcome "not for me" objections.

### Step 13: Create Story-Based Objection Handlers

For each major objection, mine a story that addresses it:

**Objection**: "I don't have time"
**Story**: Customer story of someone who was even busier who succeeded

**Objection**: "I've tried everything"
**Story**: Your story or customer story of trying everything before finding this

**Objection**: "I'm too old/young/[demographic]"
**Story**: "Unlikely suspect" story proving age/demographic doesn't matter

Stories disarm objections better than logic.

### Step 14: Structure Stories Using the "3-Act Framework"

For any story, apply this simple structure:

**Act 1 - Setup (The Before)**
- Introduce protagonist and their world
- Establish the problem or desire
- Show what's at stake

**Act 2 - Confrontation (The Struggle)**
- The journey and obstacles
- Failed attempts and setbacks
- The turning point or breakthrough

**Act 3 - Resolution (The After)**
- The transformation
- The new reality
- The lesson or takeaway

This creates narrative momentum and emotional payoff.

### Step 15: Test Stories for Emotional Resonance

Before finalizing your Story Bank, test stories:

**Internal Test**: Does this story move YOU?
- If you're not emotionally engaged, neither will your audience

**Avatar Test**: Share stories with 5-10 people in your target market
- Which stories do they remember?
- Which stories do they retell?
- Which stories trigger "me too" responses?

**Conversion Test**: Deploy stories in email or content
- Track engagement (open rates, click rates, replies)
- Stories that perform become your go-to assets

## Tips & Best Practices

1. **Specificity Creates Believability**: "I lost weight" is generic. "I lost 23 pounds in 87 days and went from a size 14 to a size 8" is specific and credible. Mine for numbers, dates, times, places—the details that make stories feel real, not fabricated.

2. **The Struggle IS the Story**: Don't rush to the happy ending. The power of story is in the struggle, the obstacles, the failures. Spend 60-70% of your story in the "before" and "struggle" phases. The transformation only feels significant if you've properly set up the pain.

3. **Let Customers Tell Stories, Not You**: First-person customer stories ("I was skeptical, but...") are more credible than you telling customer stories ("Our customer Sarah was skeptical..."). Interview customers and capture their words. Use direct quotes. Let them be the storyteller.

4. **Every Story Needs a "Before" Anchor**: Without a clear "before" state, there's no contrast to make the "after" impressive. "I make $100K/year" means nothing without "I was making $35K/year." Always establish the before to create the contrast.

5. **Mine Stories Continuously**: Story mining isn't a one-time task. Set up systems to continuously capture stories: post-purchase surveys asking "what was your biggest struggle before buying?", customer interview calls, video testimonials. Your Story Bank should grow monthly.

## Common Pitfalls

1. **Telling Success Stories Only**: If every story is "I tried this and it worked immediately," you lose credibility. Real life includes setbacks, doubts, and failures. Stories without struggle feel like sales pitches, not authentic narratives. Balance success with failure-then-success arcs.

2. **Generic, Forgettable Details**: "I lost weight and felt great" is not a story—it's a statement. Stories need specificity: "It was a Tuesday morning, week 3, and I realized I'd buttoned my jeans without lying on the bed for the first time in two years." Generic stories evaporate from memory. Specific stories stick.

3. **Skipping the Emotional Payoff**: If your story is all facts and no feelings, it's a case study, not a story. Mine for the emotional moments: the frustration, the hope, the fear, the relief, the pride. Emotions are what make stories persuasive.

4. **Making Yourself the Hero**: In customer transformation stories, the customer is the hero, not you. You're the guide (Yoda, not Luke). If you center yourself in every story, it feels self-promotional. Let customers be the protagonists.

5. **No Clear Lesson or Takeaway**: Every story in marketing should prove something: your method works, the old way fails, transformation is possible, etc. If your story doesn't connect to a claim or overcome an objection, it's entertainment, not persuasion. Always know what your story is supposed to prove.

## Example Usage Scenario

**Context**: A business coach helps service providers raise their prices and attract premium clients. She's building a VSL (video sales letter) and needs story assets to prove her methodology works, handle objections, and create emotional connection.

**Execution**:

1. **Story Mining Session** (3 hours):
   - Interview 5 successful clients
   - Review 20 written testimonials
   - Document own founder story

2. **Stories Extracted**:

   **Origin Story** (Founder):
   - **Before**: Corporate consultant, billing by the hour, income capped at $150K
   - **Rock Bottom**: Client called her "expensive" after she raised rates to $200/hour
   - **Epiphany**: Realized she was selling hours, not outcomes. Switched to value-based pricing.
   - **After**: First $50K project in month 1 of new model. Built $500K/year business.
   - **Lesson**: Pricing is positioning, not math.

   **Transformation Story** (Client: Jennifer):
   - **Before**: Career coach charging $75/session, booked solid but broke ($3K/month)
   - **Failed Attempts**: Tried raising rates to $100, got pushback, went back to $75
   - **Discovery**: Joined program, learned "premium pivot" positioning
   - **Turning Point**: First $5K client in week 3
   - **After**: Charges $8K for 90-day packages, works with 6 clients at a time, $48K/month
   - **Lesson**: You don't need more clients, you need better clients

   **Failure Story** (Founder):
   - **Mistake**: Tried to compete on price early in career
   - **Result**: Attracted nightmare clients, constant scope creep, burnout
   - **Cost**: Wasted 2 years working 60-hour weeks for poverty wages
   - **Lesson**: Cheap clients are expensive. Premium clients are easier.

   **Unusual Suspect Story** (Client: Robert):
   - **Surprising Detail**: 62-year-old career counselor in small town
   - **Expectation**: Too old, too small a market for premium pricing
   - **Reality**: Positioned as "retirement career strategist," charges $12K
   - **Lesson**: Age and location don't matter—positioning does

3. **Story Structuring**:

   For the VSL, stories are deployed strategically:

   **Opening (First 2 minutes)**: Founder origin story (builds credibility and relatability)

   **Middle (Proof Section)**: Jennifer transformation story (proves method works)

   **Objection Handling**: Robert unusual suspect story (overcomes "this won't work for me")

   **Close**: Vision story (what's possible when you make the pivot)

4. **Story Snippets Created**:

   Each story written in three lengths:
   - **Extended** (600-800 words for VSL voiceover)
   - **Medium** (250 words for email sequence)
   - **Short** (75 words for ads and social proof)

5. **Testing**:
   - Founder story tested in Facebook ad: 3.8% CTR
   - Jennifer story tested in email subject line: 42% open rate
   - Both stories integrated into final VSL

**Result**: VSL converts at 18% (watch to purchase), significantly above industry average (8-12%). Post-purchase surveys reveal "Jennifer's story" as the #1 reason people bought ("If she could do it, I can too"). Story mining created the persuasive backbone of the entire campaign.

**Key Insight**: The founder's origin story built credibility ("she's been where I am"). Jennifer's transformation story created belief ("it works for people like me"). Robert's unusual suspect story handled objections ("even my unique situation isn't a barrier"). Stories weren't decoration—they were the proof.


---

## Referência: references/strategy-unique-mechanism.md

# Unique Mechanism Development

**Task ID**: `strategy-002`
**Task Name**: Unique Mechanism Development
**Phase**: Strategy & Planning

## Purpose

The Unique Mechanism is the proprietary "how" behind your transformation—the named, systematized process that makes your solution different from every other solution in the market. Todd Brown, creator of the E5 Method, revolutionized direct response marketing by emphasizing that in sophisticated markets, you can't win on benefits alone because everyone promises the same outcomes. You win by owning a unique mechanism that's demonstrably different and superior to the "old way" of achieving those outcomes.

A powerful Unique Mechanism does more than describe your process—it creates intellectual property around your methodology, making your solution non-commoditizable. When done correctly, it transforms your offer from "another weight loss program" into "THE program that uses the Metabolic Priming Protocol." This shifts the conversation from "should I lose weight?" to "should I use THIS specific mechanism to lose weight?" It's the difference between competing with everyone and competing with no one.

This task systematizes the creation of Unique Mechanisms using proven frameworks from Todd Brown's E5 Method, Russell Brunson's "epiphany bridge," and Gary Bencivenga's mechanism-focused copy. You'll learn to name, frame, and claim a unique process that becomes inseparable from your brand and impossible for competitors to replicate without looking like copycats.

## When to Use

- When entering a sophisticated market (Stage 3+ awareness)
- When your product/service has a genuine methodological difference
- When competitors are making similar benefit claims
- When you need to justify premium pricing
- When repositioning an existing offer in a crowded category
- When creating a new framework or system to teach
- When building a personal brand around a methodology

## Input Requirements

### Required Inputs
- Product/service delivery process (step-by-step how it works)
- What makes your approach different from standard methods
- Scientific, historical, or experiential basis for your method
- Avatar beliefs about how transformation happens
- Competitive analysis (what mechanisms competitors use)
- Proof that your mechanism produces results

### Optional Inputs
- Origin story of how you discovered/developed the mechanism
- Analogies or metaphors that explain the mechanism
- Visual diagrams of the process
- Testimonials specifically mentioning the mechanism
- Research studies supporting the mechanism
- Failed approaches that led to your breakthrough

### Example Data
```yaml
product: "Sales Training Program"
standard_approach: "Practice objection handling scripts until they're memorized"
your_approach: "Use psychological pre-framing to eliminate objections before they arise"
key_difference: "Proactive vs. reactive objection handling"
proof_point: "87% reduction in objection frequency vs. script-based training"
origin_story: "Discovered while studying FBI hostage negotiation tactics"
```

## Output Format

### Expected Artifacts
1. Unique Mechanism Brief (3-4 pages)
2. Mechanism naming options (10-15 variations)
3. E5 Method template completed
4. Mechanism proof stack
5. Copy snippets for implementation

### Schema
```yaml
unique_mechanism:
  name: "The Branded Mechanism Name"
  tagline: "One-sentence description"
  core_process:
    steps: ["Step 1", "Step 2", "Step 3"]
    key_difference: "What makes it unique"
  old_way_vs_new_way:
    old_way: "How others do it"
    why_old_way_fails: "The critical flaw"
    new_way: "Your mechanism"
    why_new_way_works: "The breakthrough insight"
  proof_elements:
    - type: "Scientific/Testimonial/Case Study"
      description: "Specific proof point"
  naming_components:
    what_it_does: "The transformation"
    how_its_different: "The unique element"
    branded_term: "Proprietary naming"
```

### Examples

**Mechanism 1: "The Metabolic Priming Protocol"**
- Old Way: Traditional calorie restriction and cardio
- Why It Fails: Triggers starvation response, slows metabolism
- New Way: Three-phase priming sequence that resets metabolic baseline
- Proof: 23 studies on metabolic adaptation + 847 client results

**Mechanism 2: "The Anti-Script Selling System"**
- Old Way: Memorized scripts and objection handling
- Why It Fails: Sounds robotic, creates resistance
- New Way: Conversational frameworks that eliminate objections proactively
- Proof: 73% higher close rate vs. traditional script-based training

## Assigned Copywriter(s)

**Primary**: Todd Brown (creator of the E5 Method and Unique Mechanism framework)
**Secondary**: Gary Bencivenga (master of mechanism-focused copy)
**Advisory**: Russell Brunson (epiphany bridge and origin story framing), Alex Hormozi (mechanism integration with value stacking)

Todd Brown's E5 Method provides the structured approach to mechanism development. Gary Bencivenga's work shows how to make mechanisms feel credible and exciting. Russell Brunson adds the narrative wrapper that makes mechanisms memorable.

## Dependencies

**Must Complete First**:
- Avatar research (understanding current beliefs about "how" transformation happens)
- Competitive analysis (what mechanisms already exist in the market)

**Should Complete First**:
- Story mining (mechanism origin stories)
- Big Idea generation (mechanism often IS the big idea)

**Can Run In Parallel**:
- Benefit ladder (mechanism is the "how," benefits are the "what")
- Hook ideation (mechanism creates hooks)

## Step-by-Step Execution

### Step 1: Apply Todd Brown's E5 Method Framework

The E5 Method has five essential components. Document each:

**E1 - New Avatar**: Who specifically is this mechanism for?
- Not just "entrepreneurs" but "service-based entrepreneurs stuck at $10K/month"

**E2 - New Problem**: What problem does your mechanism solve that others don't?
- Not the obvious problem, but the hidden barrier preventing success
- Example: Not "you need more leads" but "your positioning attracts price shoppers"

**E3 - New Opportunity**: What becomes possible with your mechanism that wasn't before?
- Frame it as a paradigm shift, not an incremental improvement

**E4 - New Solution (The Mechanism)**: The proprietary process itself
- Must have a name, steps, and rationale

**E5 - New Proof**: Evidence that your mechanism works
- Specific to the mechanism, not just general testimonials

Complete all five E's in a structured document before proceeding.

### Step 2: Identify the "Old Way vs. New Way" Framework

Create a comparison table:

| Element | Old Way | Your Mechanism |
|---------|---------|----------------|
| Core Approach | How it's typically done | Your unique approach |
| Why People Use It | Conventional wisdom | Your insight |
| Hidden Flaw | Why it fails/plateaus | What you discovered |
| Your Innovation | What's missing | What you added |
| Result Difference | Typical outcome | Your superior outcome |

This becomes the foundation of your mechanism copy. Every sales message will reference this contrast.

### Step 3: Name Your Mechanism (The 7 Naming Formulas)

Generate 3-5 options in each formula category:

**Formula 1: The [Adjective] [Noun] Method**
- The Rapid Reframe Method
- The Metabolic Priming Protocol
- The Strategic Story System

**Formula 2: The [Number] [Noun] [Noun/Process]**
- The 3-Phase Pivot Process
- The 5-Lever Scaling System
- The 7-Step Signature Framework

**Formula 3: The Anti-[Common Approach]**
- The Anti-Diet Diet
- The Anti-Script Selling System
- The Anti-Pitch Enrollment Method

**Formula 4: The [Metaphor/Analogy] [Mechanism]**
- The Domino Launch Method
- The Compound Effect Protocol
- The Flywheel Growth System

**Formula 5: [Proprietary Term] + [Outcome]**
- Metabolic Priming for Fat Loss
- Quantum Positioning for Premium Clients
- Epiphany Bridging for High-Ticket Sales

**Formula 6: The [Discovery Source] [Secret/Method]**
- The Japanese Longevity Protocol
- The Silicon Valley Scaling Blueprint
- The FBI Negotiation Framework

**Formula 7: The [What It Replaces] Replacement**
- The Coffee Replacement Ritual
- The Cold Call Alternative
- The Resume Replacement System

Select the name that is memorable, defensible (you can own it), and descriptive enough to intrigue without requiring explanation.

### Step 4: Build the Mechanism Origin Story (Russell Brunson's Epiphany Bridge)

Every mechanism needs an origin story. Answer:

1. **What was the old way you tried?**
   - Be specific about what you thought would work

2. **What was your rock bottom moment?**
   - When did you realize the old way was failing?

3. **What was the epiphany/discovery?**
   - The "aha" moment that led to your mechanism

4. **What was the test/experiment?**
   - How you validated your insight

5. **What were the breakthrough results?**
   - The proof that your mechanism works

This story becomes the narrative vehicle for teaching your mechanism in sales copy, webinars, and VSLs.

### Step 5: Map the Mechanism Process (3-7 Steps Ideal)

Break your mechanism into clear, sequential steps:

- **Too few steps (1-2)**: Not credible, seems oversimplified
- **Sweet spot (3-7)**: Memorable, teachable, credible
- **Too many steps (8+)**: Overwhelming, hard to remember

For each step:
- Name it (ideally with alliteration or parallelism)
- Explain what happens (1-2 sentences)
- Connect to the outcome (why this step matters)

**Example**: The 3-Phase Metabolic Priming Protocol
1. **Phase 1 - Prime**: Reset your metabolic baseline with strategic refeeds
2. **Phase 2 - Burn**: Activate fat-burning hormones through micro-workouts
3. **Phase 3 - Lock**: Stabilize your new set point to prevent rebound

### Step 6: Identify Your Mechanism's "Secret Sauce" Ingredients

What are the non-obvious elements that make your mechanism work?

List 3-5 "secret ingredients":
- Specific timing or sequence requirements
- Counterintuitive elements (doing less, not more)
- Synergistic combinations (X + Y = 10Z)
- Psychological triggers embedded in the process
- Proprietary tools or templates

These become bullet points in your copy and proof elements in your sales message.

### Step 7: Build the Mechanism Proof Stack

Collect evidence specifically tied to your mechanism:

**Proof Level 1: Logical/Rational**
- Scientific studies supporting the underlying principles
- Expert endorsements of the methodology
- Historical precedents or analogies

**Proof Level 2: Demonstrable**
- Before/after transformations attributed to the mechanism
- Speed of results (achieved in X days using this mechanism)
- Comparison data (mechanism vs. standard approach)

**Proof Level 3: Social**
- Testimonials mentioning the mechanism by name
- Number of people who've used it
- Notable users or case studies

Aim for at least 3 proof points in each category.

### Step 8: Create the "Why This Works" Explanation

Write a 3-5 paragraph explanation that covers:

**Paragraph 1**: The problem with conventional approaches
**Paragraph 2**: The insight/discovery that led to your mechanism
**Paragraph 3**: How your mechanism works (simplified)
**Paragraph 4**: Why it works (the underlying principle)
**Paragraph 5**: What results to expect

This becomes your standard "mechanism explanation" copy block used across all marketing.

### Step 9: Develop Mechanism Visualization

Create a visual representation:
- Flowchart of the process
- Before/after diagram
- Comparison matrix (old way vs. your mechanism)
- Step-by-step infographic

Visual representation makes your mechanism more tangible and shareable. It also helps you identify gaps in your logic or process flow.

### Step 10: Trademark/IP Protection Check

Research:
- Is your mechanism name already in use?
- Can you trademark it?
- Is the domain available?
- Are social handles available?

You want to own this mechanism linguistically. If the name is already heavily used, go back to Step 3 and select an alternative.

### Step 11: Create Mechanism Implementation Copy Blocks

Write pre-made copy snippets:

**Snippet 1: The Mechanism Introduction (100-150 words)**
- Introduces the mechanism name and core concept

**Snippet 2: Old Way vs. New Way (200-300 words)**
- Contrasts conventional approach with your mechanism

**Snippet 3: How It Works (300-400 words)**
- Explains the process in detail

**Snippet 4: Why It Works (200-300 words)**
- The science/logic/proof behind it

**Snippet 5: Proof Story (300-500 words)**
- A case study or testimonial featuring the mechanism

These become your copy library for all future mechanism-focused campaigns.

### Step 12: Integrate with Offer Naming

Your offer should reference the mechanism:
- "The Metabolic Priming Intensive"
- "Anti-Script Selling Bootcamp"
- "The 3-Phase Pivot Program"

This creates linguistic ownership—your mechanism and your offer become synonymous.

### Step 13: Test Mechanism Comprehension

Run a clarity test:
- Explain your mechanism to 5 people in your target market
- Ask them to explain it back to you in their own words
- If they can't, your mechanism is too complex or poorly named

Simplify until your mechanism passes the "explain it to a friend" test.

### Step 14: Document Competitive Differentiation

Create a differentiation table:

| Competitor | Their Mechanism | Your Mechanism | Why Yours Is Better |
|------------|----------------|----------------|---------------------|
| Competitor A | Generic approach | Your named process | Specific advantage |
| Competitor B | Their framework | Your framework | Your edge |

This becomes sales team training and objection handling content.

### Step 15: Create Mechanism Rollout Plan

Plan how you'll introduce your mechanism:
- Phase 1: Soft launch in email/content (test the language)
- Phase 2: Feature in ads and lead magnets (build awareness)
- Phase 3: Full campaign with mechanism-focused sales letter
- Phase 4: Mechanism becomes your brand identity

Track: Does the mechanism language resonate? Are people using your terminology? Are competitors copying it (validation)?

## Tips & Best Practices

1. **Name It Like You Own It**: The best mechanism names sound proprietary even if they're not trademarked. "The Hero's Journey" sounds owned. "The 5-Step Process" sounds generic. Use specific, branded language that competitors can't co-opt without looking like copycats.

2. **Mechanism Must Map to Delivery**: Your mechanism isn't just marketing—it's how you actually deliver the transformation. If your mechanism promises a "3-Phase Process" but your actual program is just random modules, you'll have refund problems. Build the mechanism into your product architecture.

3. **Simpler Always Wins**: When in doubt, simplify. A 3-step mechanism that's slightly oversimplified is better than a 12-step mechanism that's perfectly accurate. Humans remember and repeat simple. Complex mechanisms die in the market.

4. **Create Linguistic Ownership Through Repetition**: Once you name your mechanism, use the exact same phrasing everywhere. Don't say "Metabolic Priming Protocol" in one place and "The Metabolic Reset Method" in another. Consistency creates ownership. Say it the same way 100 times until the market adopts your language.

5. **The Mechanism Should Challenge Conventional Wisdom**: The best mechanisms aren't just different—they're contrarian. They position against the obvious approach. "More is better" becomes "Less is more." "Work harder" becomes "Work smarter." The contrast creates interest and frames competitors as outdated.

## Common Pitfalls

1. **Fake Uniqueness**: Slapping a proprietary name on a generic process doesn't make it unique. "The Smith Method for Weight Loss" that's just calories in/calories out is lipstick on a pig. Your mechanism needs a genuine methodological difference, not just branding.

2. **Over-Complication**: The temptation is to make your mechanism sound sophisticated by adding complexity. Resist. A 15-step mechanism with sub-steps and branching logic might be accurate, but it's unmarketable. Collapse complexity into 3-5 memorable phases.

3. **Mechanism Without Proof**: You can't claim a unique mechanism without unique results. If your "revolutionary approach" produces the same outcomes as the standard approach, it's not a mechanism—it's a gimmick. Build the proof stack before you market the mechanism.

4. **Ignoring the "Why It Works" Explanation**: Naming a mechanism is 20% of the job. Explaining WHY it works is 80%. Audiences need to understand the logic/science/insight behind your mechanism or it feels like magic tricks. Make the rationale clear and credible.

5. **Mechanism Doesn't Connect to Avatar Beliefs**: Your mechanism must address what your avatar already believes about how transformation happens. If they believe weight loss requires suffering and you promise "effortless weight loss," your mechanism needs to bridge that belief gap or it won't be credible.

## Example Usage Scenario

**Context**: A sales trainer helps B2B companies improve close rates. The market is saturated with script-based training, objection handling workshops, and role-play bootcamps. Avatar research reveals sales teams are tired of sounding robotic and want a more natural approach, but they don't know how to close deals without scripts.

**Execution**:

1. **E5 Method Application**:
   - **E1 - New Avatar**: B2B sales teams who hate sounding scripted but need consistent close rates
   - **E2 - New Problem**: Scripts create resistance; prospects can tell you're following a formula
   - **E3 - New Opportunity**: Close more deals by having real conversations that feel authentic
   - **E4 - New Solution**: The Anti-Script Selling System (ASSS)
   - **E5 - New Proof**: 73% average close rate improvement vs. script-based training

2. **Old Way vs. New Way**:
   - **Old Way**: Memorize scripts, practice objection handling, role-play until perfect
   - **Flaw**: Sounds robotic, creates buyer resistance, doesn't adapt to real conversations
   - **New Way**: Learn conversational frameworks that eliminate objections before they arise
   - **Why It Works**: Based on FBI hostage negotiation tactics—influence through rapport, not persuasion

3. **Mechanism Steps** (The ASSS 4-Phase Framework):
   - **Phase 1 - Pre-Frame**: Set conversation frame that eliminates price objections upfront
   - **Phase 2 - Diagnose**: Ask questions that lead prospects to self-identify their problem
   - **Phase 3 - Prescribe**: Present your solution as the inevitable answer to their self-diagnosis
   - **Phase 4 - Close**: Use assumptive language that makes "yes" the path of least resistance

4. **Origin Story**: "I discovered this method after bombing 47 sales calls using the script my manager gave me. Out of frustration, I threw away the script and just had a real conversation—and closed the deal. I reverse-engineered what I did differently and tested it with my team. Within 30 days, we'd increased our close rate from 18% to 31%. That's when I knew scripts were the problem, not the solution."

5. **Implementation**: All training materials now reference "The Anti-Script System." Sales letters contrast ASSS with "outdated script-based training." Testimonials are collected using the language: "Before ASSS I was hitting 22% close rates. After implementing the 4-Phase Framework, I'm consistently at 38%."

**Result**: The mechanism becomes the brand. Prospects aren't buying "sales training"—they're buying "The Anti-Script Selling System." This creates category differentiation and justifies premium pricing because there's no direct comparison.


---

## Referência: references/strategy-value-stack.md

# Value Stack

**Task ID**: `strategy-007`
**Task Name**: Value Stack
**Phase**: Strategy & Planning

## Purpose

The Value Stack is the strategic architecture of presenting everything included in your offer in a way that maximizes perceived value, justifies your price, and creates an undeniable "this is a no-brainer" buying decision. It's not just listing what someone gets—it's the art and science of stacking components, bonuses, guarantees, and benefits in a sequence that builds momentum toward an irresistible purchase decision. A well-constructed value stack can transform a $997 offer into something that feels like an obvious steal compared to a $10,000 alternative.

Popularized by marketers like Alex Hormozi, Russell Brunson, and Frank Kern, the value stack methodology recognizes that value is not just about what you include—it's about how you present it, how you quantify it, how you sequence it, and how you contrast it with alternatives. The same offer components presented as a bullet list feel ordinary. Presented as a strategically stacked value ladder with clear pricing and contrast, they feel irresistible. The value stack is where psychology meets presentation.

This task teaches you to inventory all value components (core offer, bonuses, guarantees, support), quantify each element, sequence them for maximum impact, and present them using proven value stack frameworks from Hormozi's Value Equation, Brunson's Stack Slide, and classic direct response offer construction. You'll learn to build offers that sell themselves.

## When to Use

- When creating any paid offer (product, service, program)
- When building sales pages, VSLs, or webinar presentations
- When justifying premium pricing
- When competing against lower-priced alternatives
- When conversion rates are low despite traffic quality
- When launching new offers or repositioning existing ones
- When adding bonuses or components to increase perceived value

## Input Requirements

### Required Inputs
- Core offer (what they're primarily buying)
- All components, modules, deliverables included
- Bonus materials, tools, templates, resources
- Support offerings (coaching, community, access)
- Guarantee or risk-reversal terms
- Pricing (your price + comparative prices if applicable)
- Avatar research (what do they value most?)

### Optional Inputs
- Competitor offer analysis (what do they include, what do they charge?)
- Customer testimonials highlighting specific components
- Cost to create or acquire each component independently
- Market value of comparable components
- Time-to-value for each component
- Scarcity or urgency elements (limited bonuses, deadlines)

### Example Data
```yaml
core_offer: "90-Day Business Growth Accelerator"
price: "$2,997"
core_components:
  - "12 Weekly Group Coaching Calls"
  - "Private Client Portal with Training Modules"
  - "Done-for-You Marketing Templates"
bonuses:
  - "60-Minute 1-on-1 Strategy Session ($500 value)"
  - "Exclusive Community Access ($997/year value)"
guarantee: "60-day money-back guarantee + $500 bonus if you implement and don't get results"
avatar_highest_values: ["time savings", "implementation support", "proven templates"]
```

## Output Format

### Expected Artifacts
1. Complete Value Stack Document (itemized and sequenced)
2. Value Stack Visual (slide/graphic for presentations)
3. Comparative Value Analysis (your offer vs. alternatives)
4. Value Stack Copy Snippets (ready-to-use descriptions)
5. Testing Plan (which stack variations to test)

### Schema
```yaml
value_stack:
  core_offer:
    name: "Primary offer name"
    components: ["Component 1", "Component 2"]
    standalone_value: "$X,XXX"
  bonuses:
    - name: "Bonus name"
      description: "What it is and what it does"
      standalone_value: "$XXX"
      justification: "Why this value is credible"
  guarantee:
    type: "Money-back / Performance / Conditional"
    terms: "Specific terms and timeframe"
    value_proposition: "How this reduces risk/increases value"
  total_value: "$XX,XXX"
  your_price: "$X,XXX"
  value_multiple: "X.Xx (total value / price)"
  presentation_sequence: ["Order of elements in stack"]
```

### Examples

**Value Stack Example 1: Coaching Program**
- Core: 12 weeks of coaching ($6,000 value)
- Bonus 1: Templates library ($497 value)
- Bonus 2: Community access ($997 value)
- Bonus 3: 1-on-1 strategy session ($500 value)
- Guarantee: 60-day money-back
- **Total Value**: $7,994
- **Your Investment**: $2,997
- **Value Multiple**: 2.67x

**Value Stack Example 2: Software + Training**
- Core: Software annual license ($1,188 value)
- Core: Implementation training ($497 value)
- Bonus 1: Done-for-you setup ($297 value)
- Bonus 2: Monthly group calls ($594 value)
- Guarantee: 30-day free trial, cancel anytime
- **Total Value**: $2,576
- **Your Investment**: $997
- **Value Multiple**: 2.58x

## Assigned Copywriter(s)

**Primary**: Alex Hormozi (Value Equation framework, offer construction, Grand Slam Offers)
**Secondary**: Russell Brunson (Stack Slide methodology, offer stacking in webinars/VSLs)
**Advisory**: Dan Kennedy (premium pricing justification), Frank Kern (bonuses and value anchoring), Gary Halbert (guarantee construction)

Alex Hormozi's systematic approach to building irresistible offers through value stacking is the foundation. Russell Brunson adds the presentation and sequencing psychology. Dan Kennedy contributes premium pricing and value justification strategies.

## Dependencies

**Must Complete First**:
- Benefit ladder (benefits inform what components to include)
- Avatar research (what does your avatar value most?)
- Offer design (what are you actually selling?)

**Should Complete First**:
- Competitive analysis (what value do competitors offer?)
- Pricing strategy (how much will you charge?)

**Can Run In Parallel**:
- Guarantee formulation (guarantee is part of value stack)
- Objection handling (value stack addresses price objections)
- Sales page copywriting (value stack is central to sales pages)

## Step-by-Step Execution

### Step 1: Inventory All Value Components

List everything included in your offer across these categories:

**Category 1: Core Deliverables**
- The primary product, service, or program
- Main modules, sessions, or features
- Core transformation or outcome

**Category 2: Implementation Support**
- Coaching, consulting, or advising
- Community or group access
- Technical support or customer service
- Onboarding or training

**Category 3: Tools & Resources**
- Templates, swipe files, scripts
- Software, tools, or technology access
- Frameworks, checklists, calculators
- Recordings, transcripts, worksheets

**Category 4: Bonuses**
- Additional training or modules
- 1-on-1 sessions or reviews
- Exclusive content or resources
- Partner offers or integrations

**Category 5: Guarantee & Risk Reversal**
- Money-back guarantee terms
- Performance guarantees
- Conditional guarantees
- Extended trial or access periods

Be comprehensive. Include everything, even if it seems small.

### Step 2: Apply Alex Hormozi's Value Equation

For each component, evaluate how it impacts the four value variables:

**Value = (Dream Outcome × Perceived Likelihood of Achievement) / (Time Delay × Effort & Sacrifice)**

Map components to variables:

**Increases Dream Outcome**:
- Components that deliver bigger/better results
- Example: "Advanced module on scaling to $100K/month"

**Increases Perceived Likelihood**:
- Components that build confidence it will work
- Example: "Case studies of 50 people who succeeded with this"

**Decreases Time Delay**:
- Components that deliver results faster
- Example: "Done-for-you templates so you launch in days, not months"

**Decreases Effort & Sacrifice**:
- Components that make it easier
- Example: "Weekly coaching so you never get stuck"

Ensure your value stack has components addressing all four variables.

### Step 3: Assign Standalone Value to Each Component

For each component, determine its standalone market value:

**Method 1: Direct Market Comparison**
- "This template library would cost $497 to buy separately"
- Research competitor pricing for similar components

**Method 2: Time-Value Calculation**
- "This would take 40 hours to create yourself at $50/hour = $2,000 value"

**Method 3: Expert Rate Calculation**
- "1-on-1 strategy sessions with me are normally $500/hour"

**Method 4: Replacement Cost**
- "Hiring someone to do this for you costs $2,000"

Be conservative and credible. Inflated values damage credibility.

### Step 4: Prioritize Components by Avatar Value

Not all components have equal perceived value to your avatar. Rank components:

**High Value (Avatar-Critical)**:
- Components that solve their #1 pain or deliver their #1 desire
- These should be prominently featured

**Medium Value (Avatar-Important)**:
- Components that support the transformation
- Include these but don't over-emphasize

**Low Value (Nice-to-Have)**:
- Components that are useful but not critical
- De-emphasize or use as fast-action bonuses

Reorder your stack to lead with high-value components.

### Step 5: Create Strategic Bonus Components

If your value stack feels weak, add bonuses using these frameworks:

**Framework 1: Objection-Killer Bonuses**
- What objection prevents purchase? Create a bonus that eliminates it.
- Objection: "I don't have time" → Bonus: "Done-for-you templates"

**Framework 2: Speed Bonuses**
- What helps them get results faster?
- "Quick-start guide to launch in 48 hours"

**Framework 3: De-Risk Bonuses**
- What increases confidence?
- "30-day implementation check-in to ensure you're on track"

**Framework 4: Complementary Bonuses**
- What enhances the core offer?
- If you sell a course, add "Private community for peer support"

**Framework 5: Fast-Action Bonuses**
- What creates urgency?
- "Bonus 1-on-1 session if you enroll in the next 48 hours"

Add 2-5 strategic bonuses that genuinely enhance value.

### Step 6: Construct Your Guarantee (Risk Reversal)

Your guarantee is part of your value stack. Choose the guarantee type:

**Guarantee Type 1: Unconditional Money-Back**
- "If you're not satisfied for any reason within 60 days, full refund"
- Best for: Lower-ticket offers, broad audiences

**Guarantee Type 2: Conditional Money-Back**
- "Implement the system, show us your work, and if you don't get results, we'll refund you"
- Best for: Higher-ticket, implementation-dependent offers

**Guarantee Type 3: Performance Guarantee**
- "We guarantee you'll get X result or we'll work with you until you do"
- Best for: Service-based offers with measurable outcomes

**Guarantee Type 4: Better-Than-Money-Back**
- "If you don't get results, we'll refund you AND give you $500"
- Best for: High-confidence offers, competitive markets

The stronger your guarantee, the higher your value stack's perceived value.

### Step 7: Build the Value Stack Sequence (Russell Brunson's Stack Slide Method)

Present components in strategic order:

**Sequence Option 1: Ascending Value (Build Momentum)**
1. Start with smaller bonuses
2. Add medium-value components
3. Build to core offer
4. Close with guarantee
5. Reveal total value vs. price

**Sequence Option 2: Descending Value (Lead Strong)**
1. Start with core offer (biggest value)
2. Add major bonuses
3. Add smaller bonuses
4. Add guarantee
5. Reveal total value vs. price

**Sequence Option 3: Problem-Solution Order**
1. Core offer (solves main problem)
2. Bonuses that address objections
3. Bonuses that increase speed/ease
4. Guarantee
5. Total value reveal

Test different sequences to see what converts best.

### Step 8: Calculate Total Value and Value Multiple

Sum all component values:

**Core Offer**: $6,000
**Bonus 1**: $497
**Bonus 2**: $997
**Bonus 3**: $500
**Guarantee Value**: (reduces perceived risk, qualitative value)
**Total Standalone Value**: $7,994

**Your Price**: $2,997

**Value Multiple**: $7,994 / $2,997 = 2.67x

Ideal value multiples: 2x - 5x (higher can feel unbelievable, lower feels like poor value).

### Step 9: Create the Visual Value Stack

Design a visual representation (for slides, landing pages):

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Core Program: 12-Week Accelerator
($6,000 Value)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
BONUS #1: Template Library
($497 Value)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
BONUS #2: Community Access
($997 Value)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
BONUS #3: 1-on-1 Strategy Session
($500 Value)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
60-Day Money-Back Guarantee
(Risk-Free)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Value: $7,994
Your Investment Today: $2,997
━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Visual stacking creates psychological momentum—each addition feels like more value.

### Step 10: Write Compelling Component Descriptions

For each component, write:

**Element 1: Name (Benefit-Focused)**
- Not: "Module 3"
- Yes: "The 6-Figure Scaling Blueprint"

**Element 2: What It Is (1 sentence)**
- "A step-by-step framework for scaling from $10K to $100K/month"

**Element 3: What It Does (Benefit)**
- "So you can predictably grow revenue without working more hours"

**Element 4: Value Justification**
- "Standalone value: $1,997 (what clients pay for my consulting on this topic)"

Example:
**BONUS #2: The Template Vault ($497 Value)**
"Plug-and-play email sequences, landing pages, and ad scripts so you can launch campaigns in hours instead of weeks. Over 50 proven templates used by six and seven-figure businesses."

### Step 11: Create Comparative Value Analysis

Position your value stack against alternatives:

**Comparison Table**:

| What They Need | DIY Approach | Competitor | Your Offer |
|----------------|--------------|------------|------------|
| Core Training | $0 (YouTube) | $1,997 | ✓ Included |
| Templates | $497 separate | Not included | ✓ Included |
| Coaching | Not available | $5,000 extra | ✓ Included |
| Community | $997/year | $297/month | ✓ Included |
| **Total Cost** | **$1,494+** | **$7,294+** | **$2,997** |

This positions your stack as the obvious value choice.

### Step 12: Add Scarcity or Urgency Elements (If Applicable)

Enhance value with time or quantity limitations:

**Time-Based Scarcity**:
- "Enroll by Friday to get Bonus #4 ($297 value)"
- "Price increases to $3,997 on [date]"

**Quantity-Based Scarcity**:
- "Only 20 spots available (due to 1-on-1 session capacity)"
- "First 50 buyers get [exclusive bonus]"

**Seasonal or Event-Based**:
- "Founding members pricing (never offered again)"
- "Black Friday bonus stack (available this week only)"

Scarcity must be real to maintain trust.

### Step 13: Test Value Stack Variations

Create 2-3 variations to test:

**Variation A: Bonus-Heavy**
- Core offer + 5 bonuses
- Higher total value, more components

**Variation B: Simplicity-Focused**
- Core offer + 2 high-value bonuses
- Lower total component count, emphasize quality over quantity

**Variation C: Guarantee-Focused**
- Core offer + bonuses + aggressive guarantee
- Lead with risk reversal

Test which variation converts highest in your sales page or presentation.

### Step 14: Integrate Value Stack into Sales Messaging

Deploy your value stack across touchpoints:

**Sales Page**:
- Full visual value stack with all components
- Place in the "What You Get" section
- Repeat summary at checkout

**VSL/Webinar**:
- Build stack progressively (Russell Brunson's Stack Slide)
- Add one component at a time
- Show cumulative value increasing

**Email Sequence**:
- Dedicate one email per major component
- Build familiarity before presenting full stack

**Ads**:
- Tease high-value bonuses
- "Includes [impressive bonus]—yours free when you enroll"

### Step 15: Document Value Stack Talking Points

For sales calls or webinar presentations, create speaking notes:

**For Core Offer**:
"The core of this program is [name], which normally sells for [$X]. This alone is worth more than what you're investing today."

**For Each Bonus**:
"On top of that, you're also getting [bonus name]. This normally costs [$X] if you bought it separately, and here's why it's valuable: [benefit]."

**For Guarantee**:
"And just to make this a complete no-brainer, I'm removing all the risk with [guarantee terms]. So you literally can't lose."

**For Total Value Reveal**:
"Let's add this up. If you bought everything separately, you'd pay [$total value]. But today, your investment is only [$price]. That's [value multiple]X the value."

These talking points ensure consistent, persuasive value communication.

## Tips & Best Practices

1. **Value Must Be Credible, Not Inflated**: Saying your $99 course has a "$97,000 value" destroys trust. Value justification must be defensible. If you claim a component is worth $500, be able to point to market comparisons or replacement costs that support it. Conservative, believable values convert better than inflated ones.

2. **Focus on What They Value, Not What You Have**: Just because you created something doesn't mean it adds value to the stack. If your avatar doesn't care about "advanced meta-strategies," don't include a bonus on that topic. Stack components your avatar actually wants. Quality beats quantity.

3. **The Guarantee Belongs in the Value Stack**: Many marketers treat the guarantee as a footnote. Hormozi and Brunson emphasize that a strong guarantee is a value component. "60-day money-back guarantee" eliminates risk, which is valuable. Position it as part of the stack, not a legal disclaimer.

4. **Use Fast-Action Bonuses to Create Urgency**: If your offer lacks urgency, add time-sensitive bonuses. "Enroll by Friday and get [bonus]" creates a deadline without discounting your core offer. The bonus expires, not the offer itself. This preserves value while driving action.

5. **Test Stack Presentation, Not Just Stack Contents**: The same components presented differently can yield different conversion rates. Test ascending vs. descending order. Test bonus-heavy vs. simplicity-focused. Test leading with guarantee vs. ending with it. Presentation matters as much as content.

## Common Pitfalls

1. **Too Many Low-Value Components (The Junk Stack)**: Adding 20 mediocre bonuses doesn't create value—it creates overwhelm and skepticism. A stack with 3 high-value, relevant components outperforms a stack with 15 irrelevant freebies. Quality over quantity. Resist the urge to stuff the stack with garbage.

2. **Unjustifiable Value Claims**: "This training is worth $50,000" when no one would ever pay $50,000 for it is transparently manipulative. Your audience isn't stupid. If you can't credibly defend a value claim (market comp, replacement cost, expert rate), don't make it. Trust is worth more than inflated numbers.

3. **No Guarantee or Weak Guarantee**: If you're asking someone to invest $1,000+ and offering no guarantee, you're leaving money on the table. A strong guarantee (especially conditional: "do the work and get results or refund") increases conversions significantly. Risk reversal is part of value—don't skip it.

4. **Forgetting to Actually Deliver the Stack**: Building an incredible value stack means nothing if you don't fulfill it. If you promise 5 bonuses, deliver all 5 immediately and clearly. Under-delivery on your stack creates refunds and reputation damage. Stack what you can actually deliver, then over-deliver.

5. **Same Stack for All Audiences**: If you have multiple avatar segments, they value different things. Busy executives value time savings. Budget-conscious solopreneurs value cost savings. Using the same value stack for both is suboptimal. Create segment-specific stacks or emphasize different components for different audiences.

## Example Usage Scenario

**Context**: A business coach sells a 12-week group coaching program teaching service providers how to scale from $5K/month to $20K/month. Pricing is $3,000. The market has competitors at $1,500 (lighter support) and $10,000 (high-touch). Avatar research shows target customers value: (1) implementation support, (2) proven templates, (3) community/accountability.

**Execution**:

1. **Component Inventory**:

   **Core Deliverables**:
   - 12 weekly group coaching calls (90 min each)
   - Private client portal with training modules
   - Implementation assignments each week

   **Implementation Support**:
   - Weekly feedback on assignments
   - Private Slack community
   - Monthly 1-on-1 check-ins

   **Tools & Resources**:
   - 50+ done-for-you templates (emails, scripts, frameworks)
   - Pricing calculator tool
   - Client onboarding system templates

   **Potential Bonuses**:
   - 1-hour strategy session ($500 value)
   - Exclusive masterclass recordings ($297 value)
   - 6 months of community access post-program ($594 value)

2. **Value Assignment** (Based on market research and replacement costs):

   - 12 group coaching calls: $3,000 (comparables charge $250/session)
   - Training modules: $997 (comparable course pricing)
   - 1-on-1 check-ins (3 total): $1,500 ($500 each, standard consulting rate)
   - Templates library: $497 (market value for template packs)
   - Tools: $297 (software/tool replacement cost)
   - Community access: $594 (comparable mastermind annual fees)
   - **Total Value**: $6,885

3. **Avatar Alignment Check**:
   - Templates: **HIGH** (avatar values "proven systems")
   - 1-on-1 check-ins: **HIGH** (avatar values "personalized support")
   - Community: **HIGH** (avatar values "accountability")
   - Masterclass recordings: **MEDIUM** (nice-to-have, not critical)

4. **Value Stack Sequence** (Descending value, lead with core offer):

   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   12-Week Business Growth Accelerator
   ($3,000 Value)
   • 12 live group coaching calls
   • Complete training portal
   • Weekly implementation assignments
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BONUS #1: 3 Private 1-on-1 Strategy Sessions
   ($1,500 Value)
   Monthly check-ins to customize the plan to your business
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BONUS #2: The Template Vault
   ($497 Value)
   50+ done-for-you templates: emails, scripts, frameworks
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BONUS #3: Private Community + 6 Months Post-Program Access
   ($594 Value)
   Stay connected and accountable even after the program ends
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BONUS #4: Pricing & Positioning Tools
   ($297 Value)
   Calculators and frameworks to nail your pricing strategy
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   60-Day Money-Back Guarantee
   Implement the system, do the work, and if you don't see progress, full refund
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Total Value: $5,888
   Your Investment: $3,000
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

5. **Comparative Value Table** (Positioned against competitors):

   | Component | DIY | Competitor A ($1,500) | Competitor B ($10,000) | Your Offer ($3,000) |
   |-----------|-----|----------------------|------------------------|---------------------|
   | Group Coaching | No | 6 weeks | 12 weeks | 12 weeks ✓ |
   | 1-on-1 Sessions | No | No | 6 sessions | 3 sessions ✓ |
   | Templates | Buy separately ($497) | Limited | No | Full library ✓ |
   | Community | Pay extra ($50/mo) | Basic | Premium | Premium + 6 mo access ✓ |
   | Guarantee | N/A | 30-day | None | 60-day ✓ |

6. **Sales Page Integration**:
   - Visual stack placed after core offer explanation
   - Each component described with benefits (not just features)
   - Comparative table included to show value vs. alternatives

7. **Testing Plan**:
   - **Week 1-2**: Test current stack (4 bonuses) vs. simplified stack (2 bonuses, higher individual values)
   - **Metric**: Conversion rate from page view to purchase
   - **Result**: Simplified stack (2 bonuses) converts 2.3% higher
   - **Learning**: Avatar prefers fewer, higher-value components over many smaller bonuses

8. **Iteration**:
   - Remove lower-priority bonuses (masterclass recordings)
   - Increase emphasis on 1-on-1 sessions and templates
   - Add fast-action bonus: "Enroll by Friday, get bonus strategy call ($500 value)"

**Result**: Value stack increases conversion rate from 4.1% to 6.8% (66% improvement). Post-purchase surveys show "the templates and 1-on-1 sessions made this a no-brainer" as the #1 cited reason for purchase. The value stack did the heavy lifting—prospects could see they were getting more value than the price justified.

**Key Insight**: The initial stack had too many components, diluting focus. By simplifying to the components avatars valued most (1-on-1 support, templates, community) and presenting them clearly, the offer became more compelling. Lesson: More isn't always better. Strategic, aligned value beats bloated value.


---

## Referência: references/strategy.md

# strategy

Task composta. Sub-tarefas:

- `references/strategy-angle-selection.md`
- `references/strategy-benefit-ladder.md`
- `references/strategy-big-idea-generation.md`
- `references/strategy-guarantee-formulation.md`
- `references/strategy-hook-ideation.md`
- `references/strategy-story-mining.md`
- `references/strategy-unique-mechanism.md`
- `references/strategy-value-stack.md`


---

## Referência: references/write-copy.md

---
task-id: write-copy
name: Write Copy
agent: copywriter
version: 1.0.0
purpose: Generate persuasive copy for any platform using proven copywriting frameworks

workflow-mode: interactive
elicit: true
elicitation-type: custom

prerequisites:
  - Product/service information available
  - Target audience defined

inputs:
  - name: copy_type
    type: enum
    description: Type of copy to write
    required: true
    options: ["landing-page", "ad-copy", "email", "social-post", "sales-page", "headline"]
  - name: product
    type: string
    description: Product or service name
    required: true
  - name: audience
    type: string
    description: Target audience description
    required: true
  - name: framework
    type: enum
    description: Copywriting framework to use
    required: false
    options: ["AIDA", "PAS", "BAB", "4Ps", "auto"]
    default: "auto"
  - name: tone
    type: enum
    description: Tone of voice
    required: false
    options: ["professional", "casual", "urgent", "inspirational", "conversational"]
    default: "professional"

outputs:
  - path: "outputs/copywriter-os/{date}-{type}-{product-slug}.md"
    description: Generated copy
    format: "markdown"

validation:
  success-criteria:
    - "Copy follows selected framework structure"
    - "Clear CTA included"
    - "Benefits highlighted over features"
    - "Appropriate tone maintained"
---

# Task: Write Copy

## Purpose

Generate persuasive marketing copy using proven frameworks. Supports landing pages, ads, emails, social posts, sales pages, and headlines.

## Steps

### Step 1: Gather Brief
Elicit from user:
1. Copy type (landing page, ad, email, social, sales page, headline)
2. Product/service details
3. Target audience
4. Key benefits (top 3)
5. Desired action (CTA)
6. Tone of voice
7. Framework preference (or auto-select)

### Step 2: Select Framework
Based on copy type and goals:
- **AIDA:** Attention → Interest → Desire → Action (best for landing pages)
- **PAS:** Problem → Agitate → Solution (best for pain-point driven copy)
- **BAB:** Before → After → Bridge (best for transformation stories)
- **4Ps:** Promise → Picture → Proof → Push (best for sales pages)

### Step 3: Write Copy
Generate copy following the framework:
- **Headline:** Attention-grabbing, benefit-driven
- **Subheadline:** Expand on the promise
- **Body:** Framework-structured argument
- **Social proof:** Testimonials, numbers, authority
- **CTA:** Clear, single, compelling action

### Step 4: Generate Variants
Provide 2-3 variants for:
- Headlines (different angles)
- CTAs (different urgency levels)
- Opening hooks

## Success Criteria
- [ ] Copy follows framework structure
- [ ] CTA is clear and compelling
- [ ] Variants provided for testing
- [ ] Tone matches brief


---

## Referência: templates/frameworks-extraction-tmpl.yaml

# Copywriter Operational Frameworks Extraction Template
# Version: 1.0.0
# Task Reference: tasks/extract-frameworks.md
# Purpose: Output template for the extract-frameworks task
#
# INSTRUCTIONS:
# 1. Replace all [PLACEHOLDER] values with actual data
# 2. Remove comments starting with # GUIDE: after filling
# 3. Validate YAML syntax before saving
# 4. Ensure exactly 10 frameworks are documented
# 5. All content must be in English

# ==============================================================================
# METADATA SECTION
# ==============================================================================

metadata:
  copywriter_name: "[FULL NAME]"  # e.g., "Dan Koe", "David Ogilvy"
  extraction_date: "[YYYY-MM-DD]"  # Date of extraction
  total_frameworks: 10  # Must be exactly 10
  source_files_count: "[XX]"  # Number of source files processed
  source_directory: "[PATH]"  # e.g., "{pasta}/fontes/"
  extractor: "AIOS extract-frameworks task v1.0"

# Category coverage summary - update counts after extraction
categories_covered:
  copywriting: 0      # Target: 2-3
  offer_creation: 0   # Target: 1-2
  marketing_strategy: 0  # Target: 1-2
  sales: 0            # Target: 1-2
  content: 0          # Target: 1-2
  audience: 0         # Target: 0-1
  product: 0          # Target: 0-1
  mindset: 0          # Target: 0-1

# ==============================================================================
# CATEGORY ENUM REFERENCE
# ==============================================================================
#
# Use ONLY these categories:
#   - copywriting: Writing techniques, formulas, structures (PASTOR, PAS, AIDA)
#   - offer_creation: Building offers, pricing, bundling (Godfather Offer, Value Stack)
#   - marketing_strategy: Overall approach, positioning (Content Pyramid, Category Design)
#   - sales: Sales processes, objection handling (Risk Reversal, Closing Scripts)
#   - content: Content creation, distribution (Newsletter Formula, Social Strategy)
#   - audience: Avatar, targeting, segmentation (Dream 100, Audience Research)
#   - product: Product development (Minimum Viable Offer, Product Market Fit)
#   - mindset: Beliefs, psychology, personal development (Identity Shift)
#
# ==============================================================================

# ==============================================================================
# OPERATIONAL FRAMEWORKS (10 REQUIRED)
# ==============================================================================

operational_frameworks:

  # ---------------------------------------------------------------------------
  # FRAMEWORK 1
  # ---------------------------------------------------------------------------
  - name: "[FRAMEWORK NAME]"
    # GUIDE: Clear, recognizable name. Use copywriter's own naming if available.

    category: "[CATEGORY]"
    # GUIDE: One of: copywriting | offer_creation | marketing_strategy | sales | content | audience | product | mindset

    origin: "[SOURCE REFERENCE]"
    # GUIDE: Where first documented - book, course, article, interview
    # Example: "Modern Mastery newsletter, Issue #23"

    definition: >
      [2-4 sentences explaining what this framework does and when to use it.
      Use the copywriter's language where possible. This should clearly explain
      the purpose and primary application of the framework.]
    # GUIDE: Be specific about WHAT it does and WHEN to use it

    principle: "[ONE SENTENCE CORE PRINCIPLE]"
    # GUIDE: The underlying truth or belief that makes this framework work
    # Example: "People don't buy products; they buy better versions of themselves."

    # Core Structure
    components:
      description: "[Overview of the framework's building blocks]"
      # GUIDE: Explain how the parts work together

      parts:
        - name: "[COMPONENT 1 NAME]"
          description: "[What this component does and why it matters]"
          # GUIDE: Each part should be distinct and essential

        - name: "[COMPONENT 2 NAME]"
          description: "[What this component does and why it matters]"

        - name: "[COMPONENT 3 NAME]"
          description: "[What this component does and why it matters]"

        # Add more components as needed (typically 3-7)
        # Remove GUIDE comments in final output

    # Process/Steps
    process:
      description: "[How to execute this framework from start to finish]"

      steps:
        - step: 1
          name: "[STEP NAME]"
          action: "[Specific action to take]"
          # GUIDE: Each step should be concrete and actionable

        - step: 2
          name: "[STEP NAME]"
          action: "[Specific action to take]"

        - step: 3
          name: "[STEP NAME]"
          action: "[Specific action to take]"

        # Add more steps as needed (typically 3-7)

    # Application Guide
    application:
      when: "[Specific situations, triggers, or contexts where this framework applies]"
      # GUIDE: Be specific - not "when writing copy" but "when writing sales page headlines"

      process:
        - "[How to start applying the framework]"
        - "[Key decision points during application]"
        - "[How to know you've completed it correctly]"

      expected_outcome: "[What success looks like when applied correctly]"
      # GUIDE: Measurable or observable result

    # Warnings
    common_mistakes:
      - "[MISTAKE 1: What people do wrong and why it fails]"
      - "[MISTAKE 2: What people do wrong and why it fails]"
      - "[MISTAKE 3: What people do wrong and why it fails]"
      # GUIDE: At least 3 mistakes, based on copywriter's warnings in source materials

    # Evidence/Examples
    examples:
      - context: "[Situation or problem being solved]"
        application: "[How the framework was applied]"
        result: "[Outcome or impact achieved]"
        # GUIDE: Use real examples from source materials when possible

  # ---------------------------------------------------------------------------
  # FRAMEWORK 2
  # ---------------------------------------------------------------------------
  - name: "[FRAMEWORK NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE REFERENCE]"

    definition: >
      [2-4 sentences explaining what this framework does and when to use it.]

    principle: "[ONE SENTENCE CORE PRINCIPLE]"

    components:
      description: "[Overview of the framework's building blocks]"
      parts:
        - name: "[COMPONENT 1 NAME]"
          description: "[What this component does]"
        - name: "[COMPONENT 2 NAME]"
          description: "[What this component does]"
        - name: "[COMPONENT 3 NAME]"
          description: "[What this component does]"

    process:
      description: "[How to execute this framework]"
      steps:
        - step: 1
          name: "[STEP NAME]"
          action: "[Specific action]"
        - step: 2
          name: "[STEP NAME]"
          action: "[Specific action]"
        - step: 3
          name: "[STEP NAME]"
          action: "[Specific action]"

    application:
      when: "[When to use this framework]"
      process:
        - "[Application step 1]"
        - "[Application step 2]"
        - "[Application step 3]"
      expected_outcome: "[What success looks like]"

    common_mistakes:
      - "[Mistake 1]"
      - "[Mistake 2]"
      - "[Mistake 3]"

    examples:
      - context: "[Situation]"
        application: "[How applied]"
        result: "[Outcome]"

  # ---------------------------------------------------------------------------
  # FRAMEWORKS 3-10: Repeat the structure above
  # ---------------------------------------------------------------------------
  # Copy the Framework 2 structure and fill for each additional framework.
  # Ensure you have exactly 10 frameworks total.
  # Remove this comment block in the final output.
  # ---------------------------------------------------------------------------

  - name: "[FRAMEWORK 3 NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE]"
    definition: "[DEFINITION]"
    principle: "[PRINCIPLE]"
    components:
      description: "[DESCRIPTION]"
      parts: []
    process:
      description: "[DESCRIPTION]"
      steps: []
    application:
      when: "[WHEN]"
      process: []
      expected_outcome: "[OUTCOME]"
    common_mistakes: []
    examples: []

  - name: "[FRAMEWORK 4 NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE]"
    definition: "[DEFINITION]"
    principle: "[PRINCIPLE]"
    components:
      description: "[DESCRIPTION]"
      parts: []
    process:
      description: "[DESCRIPTION]"
      steps: []
    application:
      when: "[WHEN]"
      process: []
      expected_outcome: "[OUTCOME]"
    common_mistakes: []
    examples: []

  - name: "[FRAMEWORK 5 NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE]"
    definition: "[DEFINITION]"
    principle: "[PRINCIPLE]"
    components:
      description: "[DESCRIPTION]"
      parts: []
    process:
      description: "[DESCRIPTION]"
      steps: []
    application:
      when: "[WHEN]"
      process: []
      expected_outcome: "[OUTCOME]"
    common_mistakes: []
    examples: []

  - name: "[FRAMEWORK 6 NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE]"
    definition: "[DEFINITION]"
    principle: "[PRINCIPLE]"
    components:
      description: "[DESCRIPTION]"
      parts: []
    process:
      description: "[DESCRIPTION]"
      steps: []
    application:
      when: "[WHEN]"
      process: []
      expected_outcome: "[OUTCOME]"
    common_mistakes: []
    examples: []

  - name: "[FRAMEWORK 7 NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE]"
    definition: "[DEFINITION]"
    principle: "[PRINCIPLE]"
    components:
      description: "[DESCRIPTION]"
      parts: []
    process:
      description: "[DESCRIPTION]"
      steps: []
    application:
      when: "[WHEN]"
      process: []
      expected_outcome: "[OUTCOME]"
    common_mistakes: []
    examples: []

  - name: "[FRAMEWORK 8 NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE]"
    definition: "[DEFINITION]"
    principle: "[PRINCIPLE]"
    components:
      description: "[DESCRIPTION]"
      parts: []
    process:
      description: "[DESCRIPTION]"
      steps: []
    application:
      when: "[WHEN]"
      process: []
      expected_outcome: "[OUTCOME]"
    common_mistakes: []
    examples: []

  - name: "[FRAMEWORK 9 NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE]"
    definition: "[DEFINITION]"
    principle: "[PRINCIPLE]"
    components:
      description: "[DESCRIPTION]"
      parts: []
    process:
      description: "[DESCRIPTION]"
      steps: []
    application:
      when: "[WHEN]"
      process: []
      expected_outcome: "[OUTCOME]"
    common_mistakes: []
    examples: []

  - name: "[FRAMEWORK 10 NAME]"
    category: "[CATEGORY]"
    origin: "[SOURCE]"
    definition: "[DEFINITION]"
    principle: "[PRINCIPLE]"
    components:
      description: "[DESCRIPTION]"
      parts: []
    process:
      description: "[DESCRIPTION]"
      steps: []
    application:
      when: "[WHEN]"
      process: []
      expected_outcome: "[OUTCOME]"
    common_mistakes: []
    examples: []

# ==============================================================================
# EXAMPLE: FULLY FILLED FRAMEWORK (for reference)
# ==============================================================================
#
# This example shows how a completed framework should look.
# Use this as a reference when filling the template above.
# DELETE this entire section after extraction is complete.
#
# example_framework:
#   - name: "The Big Idea Framework"
#     category: marketing_strategy
#     origin: "Ogilvy on Advertising, Confessions of an Advertising Man"
#
#     definition: >
#       The central, powerful concept that captures imagination and differentiates
#       your campaign. Without a Big Idea, your advertising passes like a ship in
#       the night. Big Ideas come from the unconscious, informed by research.
#
#     principle: "Unless your advertising is built on a Big Idea, it will pass like a ship in the night."
#
#     components:
#       description: "5 parameters to recognize a Big Idea"
#       parts:
#         - name: "Gasp Test"
#           description: "Did it make you GASP when you first saw it? A Big Idea causes visceral impact."
#         - name: "Envy Test"
#           description: "Do you wish YOU had thought of it yourself? Creative envy signals originality."
#         - name: "Uniqueness Test"
#           description: "Is it truly UNIQUE? Never been done before."
#         - name: "Strategy Fit Test"
#           description: "Does it fit the STRATEGY to perfection? Not loose creativity."
#         - name: "Longevity Test"
#           description: "Could it be used for 30 YEARS? Not a trend, a foundation."
#
#     process:
#       description: "How Big Ideas emerge from research and unconscious processing"
#       steps:
#         - step: 1
#           name: "STUFF your mind"
#           action: "Fill your conscious mind with information about the product and market"
#         - step: 2
#           name: "UNHOOK rational thinking"
#           action: "Stop forcing ideas, let your unconscious process"
#         - step: 3
#           name: "Let unconscious work"
#           action: "Give it time - ideas emerge when you're not trying"
#         - step: 4
#           name: "Test with humor"
#           action: "The best ideas come as jokes - make thinking funny"
#         - step: 5
#           name: "Validate against 5 tests"
#           action: "Apply all 5 parameters before committing"
#
#     application:
#       when: "Before ANY creative work begins - Big Idea comes FIRST"
#       process:
#         - "Research deeply - spend weeks understanding product"
#         - "Understand the positioning first"
#         - "Let unconscious process the information"
#         - "Test against 5 parameters"
#         - "If it doesn't pass all 5, keep searching"
#       expected_outcome: "A single powerful concept that can drive a campaign for decades"
#
#     common_mistakes:
#       - "Creating advertising without a Big Idea (most common failure)"
#       - "Confusing executional gimmick with Big Idea"
#       - "Changing Big Ideas too frequently"
#       - "Not testing Big Idea against all 5 parameters"
#       - "Letting committees dilute the Big Idea"
#
#     examples:
#       - context: "Rolls-Royce needed to communicate luxury and engineering excellence"
#         application: "Found key fact during research: electric clock was loudest sound at 60mph"
#         result: "Headline became most famous in advertising history, doubled American sales in one year"
#       - context: "Dove needed differentiation in crowded soap market"
#         application: "Found key fact: one-quarter moisturizing cream"
#         result: "Campaign ran 50+ years with same Big Idea"
#
# ==============================================================================

# ==============================================================================
# VALIDATION CHECKLIST (Run before saving)
# ==============================================================================
#
# [ ] Exactly 10 frameworks documented
# [ ] All [PLACEHOLDER] values replaced with actual data
# [ ] All GUIDE comments removed
# [ ] Category diversity: at least 4 different categories used
# [ ] No single category has more than 3 frameworks
# [ ] All frameworks have:
#     [ ] Clear name
#     [ ] Valid category from enum
#     [ ] Documented origin/source
#     [ ] 2-4 sentence definition
#     [ ] One-sentence principle
#     [ ] At least 3 components
#     [ ] At least 3 process steps
#     [ ] Specific application guidance
#     [ ] At least 3 common mistakes
#     [ ] At least 1 example
# [ ] YAML syntax is valid (no special characters breaking structure)
# [ ] Language is consistent with copywriter's voice
# [ ] All content is in English
#
# ==============================================================================


---

## Não incluído neste arquivo (está no zip da skill)

- `templates/authority-arsenal-tmpl.yaml`
- `templates/communication-dna-tmpl.yaml`
- `templates/copywriter-agent-tmpl.yaml`
- `templates/objection-algorithms-tmpl.yaml`
- `templates/signature-phrases-tmpl.yaml`
