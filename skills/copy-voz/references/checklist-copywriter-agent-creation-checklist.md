> Material de aprofundamento opcional. Quantidades de arquivos, frameworks, frases e categorias não são metas universais nem pré-requisitos de entrevista. Mesmo no aprofundamento, use só itens sustentados pelo acervo, remova espaços sem evidência e atualize totais pelo que realmente encontrou. O idioma é o escolhido pela pessoa. Frequências e percentuais exigem contagem verificável; sem ferramenta/contagem, descreva padrões qualitativos com trechos e limites, sem números estimados apresentados como medição.

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

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
