> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Extract Communication DNA - Linguistic Fingerprint Extraction Task

## Metadata
```yaml
task_id: extract-communication-dna
version: 2.0.0
category: agent-creation
difficulty: advanced
elicit: true
parent_task: tasks/create-copywriter-agent.md
phase: 3
last_updated: 2026-01-23

theoretical_foundation:
  primary_models:
    - Forensic Linguistics Stylometry
    - N-Gram Pattern Analysis
    - Voice Architecture Theory
  psychometric_integration:
    - DISC Communication Mapping
    - MBTI Writing Style Correlations
    - Enneagram Expression Patterns
  voice_components:
    - Five Pillars of Voice Model
    - Vocabulary Tier System
    - Rhetorical Device Taxonomy

dependencies:
  templates:
    - templates/communication-dna-tmpl.yaml
  reference:
    - agents/david-ogilvy.md (communication_dna section)
    - agents/dan-kennedy.md (communication_dna section)
  research:
    - docs/research/communication-dna-methodology-research.md

inputs:
  required:
    - source_directory: "Path to source materials (20+ files)"
    - copywriter_name: "Full name of the copywriter"
    - mind_slug: "Snake_case identifier"
  optional:
    - psychometric_profile: "Path to psychometric JSON"
    - frameworks_file: "Previous extraction for terminology cross-reference"

outputs:
  primary:
    - communication_dna_file: "{pasta}/{slug}/analysis/communication-dna.yaml"
  specifications:
    - 15+ mandatory words with frequency and context
    - 10+ forbidden words with alternatives
    - 10+ signature vocabulary with definitions
    - 20+ categorized trigrams
    - 5+ rhetorical devices with examples
    - 5+ quick formulas with templates
    - Psychometric integration (if profile available)
    - Tone profile mapping

quality_standards:
  minimum_lines: 600
  vocabulary_completeness: "All three tiers extracted"
  trigram_coverage: "All five categories represented"
  device_documentation: "Examples from actual sources"
  formula_validation: "Tested with multiple inputs"
  psychometric_integration: "Complete if profile available"
```

---

## Executive Summary

### Purpose

Extract the copywriter's complete linguistic fingerprint—the unique combination of vocabulary, rhetorical patterns, trigrams, and formulas that make their communication instantly recognizable. This Communication DNA is the foundation for authentic voice replication in the AI agent.

### What is Communication DNA?

Communication DNA represents the unique building blocks that combine to create recognizable voice:

```
                     Voice Architecture
                            ↓
              ┌─────────────┴─────────────┐
              │                           │
        Vocabulary                    Structure
              │                           │
              ├─ Mandatory (15+)          ├─ Sentence patterns
              ├─ Forbidden (10+)          ├─ Paragraph flow
              └─ Signature (10+)          └─ Argument arc
                            ↓
                       Rhetoric
              │                           │
              ├─ Devices (5+)             ├─ Formulas (5+)
              └─ Patterns                 └─ Templates
                            ↓
                     Tone/Emotion
              │                           │
              ├─ Energy level             ├─ Emotional palette
              └─ Psychometric             └─ Authenticity markers
```

### The Five Pillars of Voice

DNA extraction addresses five interconnected pillars:

**Pillar 1: Vocabulary System**
- Mandatory words (must-use)
- Forbidden words (never-use)
- Signature vocabulary (uniquely-defined)

**Pillar 2: Structural Patterns**
- Sentence and paragraph preferences
- Argument flow patterns
- Opening/closing conventions

**Pillar 3: Rhetorical Devices**
- Primary devices (constant use)
- Device combinations (signature sequences)
- Device variations (their unique versions)

**Pillar 4: Emotional Texture**
- Tonal range and energy level
- Emotional triggers and palette
- Authenticity markers

**Pillar 5: Philosophical Foundation**
- Core beliefs in copy
- Values hierarchy
- Reader assumptions

### Why This Matters

Generic AI responses fail because they only capture surface-level vocabulary. True voice capture requires all five pillars working together—vocabulary, structure, rhetoric, emotion, and philosophy.

---

## PREREQUISITES

### Required Inputs

Before starting, ensure you have:

| Input | Location | Minimum | Purpose |
|-------|----------|---------|---------|
| Source Materials | `{pasta}/{slug}/sources/` | 20 files | Pattern extraction |
| Psychometric Profile | `{pasta}/{slug}/analysis/psychometrics.json` | Optional | Communication style mapping |
| Previous Frameworks | `{pasta}/{slug}/analysis/frameworks.yaml` | Optional | Terminology cross-reference |

### Input Elicitation

```
elicit: true
question: "Confirm the following for communication DNA extraction:"
fields:
  - copywriter_name: "Full name of the copywriter"
  - slug: "Mind slug (snake_case, e.g., dan_kennedy)"
  - source_directory: "Path to source materials"
  - psychometric_path: "Path to psychometric JSON (optional)"
  - output_path: "Output path (default: {pasta}/{slug}/analysis/communication-dna.yaml)"
```

### Quality Gate: Prerequisites

```yaml
gate: prerequisites
checks:
  mandatory:
    - source_count: "Minimum 20 source files available"
    - source_variety: "Mix of content types (articles, transcripts, etc.)"
    - output_template: "templates/communication-dna-tmpl.yaml exists"
  quality:
    - psychometric_available: "JSON profile exists (highly recommended)"
    - frameworks_available: "Previous extraction available for cross-reference"
    - source_quality: "Sources are diverse and representative"
```

---

## PHASE 1: SOURCE MATERIAL ANALYSIS

### Objective

Systematically catalog and analyze all source materials to understand the copywriter's communication patterns before detailed extraction.

### Step 1.1: Catalog Source Files

Create comprehensive catalog of all source materials:

```yaml
source_catalog:
  file_name: "[filename]"
  file_type: "[article|transcript|interview|email|sales_page|book_chapter]"
  content_type: "[teaching|storytelling|persuasive|philosophical|personal]"
  primary_tone: "[formal|casual|intimate|confrontational|inspirational]"
  word_count: "[count]"
  key_topics: ["topic1", "topic2"]
  distinctive_features: "[What stands out in this file]"
```

### Step 1.2: Communication Type Distribution

Calculate the distribution of content types:

```yaml
content_distribution:
  teaching_educational:
    percentage: "X%"
    file_count: N
    characteristics: "[What their teaching content sounds like]"

  personal_storytelling:
    percentage: "X%"
    file_count: N
    characteristics: "[What their stories sound like]"

  persuasive_sales:
    percentage: "X%"
    file_count: N
    characteristics: "[What their sales copy sounds like]"

  philosophical_mindset:
    percentage: "X%"
    file_count: N
    characteristics: "[What their philosophical content sounds like]"
```

### Step 1.3: Initial Pattern Recognition

During cataloging, note initial observations:

```yaml
initial_observations:
  recurring_words: "[Words appearing frequently]"
  phrase_patterns: "[Phrases that repeat]"
  structural_habits: "[How they typically organize]"
  tonal_range: "[Range from X to Y]"
  notable_absences: "[What's conspicuously missing]"
```

### Step 1.4: Complete Source Reading

**CRITICAL REQUIREMENT:** Read each source file completely. Do NOT skim or use partial reads.

**For each file, track:**
1. Distinctive vocabulary (words used repeatedly)
2. Three-word combinations that appear
3. Rhetorical patterns (how arguments are structured)
4. Emotional tone and energy
5. Opening and closing patterns

### Quality Gate: Source Analysis

```yaml
gate: source_analysis
checks:
  mandatory:
    - all_files_cataloged: "Every source file has catalog entry"
    - distribution_calculated: "Content type percentages computed"
    - complete_reading: "All files read completely"
  quality:
    - patterns_noted: "Initial observations documented"
    - variety_confirmed: "Sources represent range of content"
    - quality_assessed: "Source quality evaluated"
```

---

## PHASE 2: VOCABULARY EXTRACTION

### The Three-Tier Vocabulary Model

Vocabulary extraction operates on three tiers:

**Tier 1: Mandatory Words** - Must appear in authentic output
**Tier 2: Forbidden Words** - Must never appear in output
**Tier 3: Signature Vocabulary** - Unique terms with special meaning

### Step 2.1: Extract Mandatory Words (15+ required)

**Definition:** Words the copywriter uses constantly—these MUST appear in any authentic recreation of their voice.

**Identification Process:**
1. Count word frequency across all sources
2. Identify words appearing in 30%+ of files
3. Remove generic high-frequency words (the, and, is, etc.)
4. Validate semantic importance to their message
5. Document context and usage patterns

**Categorize by type:**

```yaml
mandatory_words:
  core_concepts:
    # Words representing their main ideas
    - word: "[term]"
      frequency: "X% of files"
      context: "How they use this word"
      example: "Direct quote showing usage"

  action_verbs:
    # How they describe doing things
    - word: "[term]"
      frequency: "X% of files"
      context: "How they use this word"
      example: "Direct quote showing usage"

  identity_terms:
    # How they describe people
    - word: "[term]"
      frequency: "X% of files"
      context: "How they use this word"
      example: "Direct quote showing usage"

  value_words:
    # What they emphasize as important
    - word: "[term]"
      frequency: "X% of files"
      context: "How they use this word"
      example: "Direct quote showing usage"

  transition_words:
    # How they connect ideas
    - word: "[term]"
      frequency: "X% of files"
      context: "How they use this word"
      example: "Direct quote showing usage"
```

### Step 2.2: Extract Forbidden Words (10+ required)

**Definition:** Words the copywriter avoids or actively rejects—using these would make the agent sound inauthentic.

**Identification Process:**
1. Identify common industry terms MISSING from their vocabulary
2. Find explicit rejections ("I never say X", "Don't call it Y")
3. Compare against similar writers to find gaps
4. Note tonal mismatches (too formal, too casual, too jargony)

**Categorize by reason:**

```yaml
forbidden_words:
  industry_jargon_rejected:
    # Common terms they deliberately avoid
    - word: "[term]"
      alternative: "What they use instead"
      reason: "Why they avoid this"
      evidence: "Quote or observation showing avoidance"

  buzzwords_avoided:
    # Trendy terms they reject
    - word: "[term]"
      alternative: "What they use instead"
      reason: "Why they avoid this"

  tone_mismatches:
    # Words that don't fit their style
    - word: "[term]"
      alternative: "What they use instead"
      reason: "Why it doesn't fit their tone"

  conceptual_disagreements:
    # Terms representing ideas they oppose
    - word: "[term]"
      alternative: "What they use instead"
      reason: "Philosophical reason for rejection"
```

### Step 2.3: Extract Signature Vocabulary (10+ required)

**Definition:** Words they've coined, redefined, or use in distinctive ways.

**Identification Process:**
1. Identify terms with special meanings in their work
2. Find coined terms or neologisms
3. Document terms from their frameworks
4. Note words they use differently than standard usage

**Document each term:**

```yaml
signature_vocabulary:
  coined_terms:
    term_name:
      definition: "Their specific definition"
      standard_meaning: "How others use it (or 'N/A - coined by them')"
      context: "When and how to use"
      origin: "Where this term comes from"
      example: "Quote demonstrating usage"
      related_terms: ["connected", "terms"]

  redefined_terms:
    term_name:
      definition: "Their specific definition"
      standard_meaning: "How others typically use it"
      their_distinction: "How their usage differs"
      context: "When to use their definition"
      example: "Quote demonstrating usage"

  framework_terms:
    term_name:
      framework: "Which framework it belongs to"
      definition: "What it means in their framework"
      context: "When to use"
      example: "Quote demonstrating usage"
```

### Quality Gate: Vocabulary

```yaml
gate: vocabulary
checks:
  mandatory:
    - mandatory_count: "15+ mandatory words extracted"
    - forbidden_count: "10+ forbidden words extracted"
    - signature_count: "10+ signature vocabulary extracted"
    - all_sourced: "Every term has source citation"
  quality:
    - categories_covered: "All vocabulary categories represented"
    - context_complete: "Every term has usage context"
    - examples_authentic: "Examples are actual quotes"
    - frequencies_accurate: "Frequency percentages verified"
```

---

## PHASE 3: TRIGRAM EXTRACTION

### Objective

Extract three-word phrases that appear frequently and are distinctive to the copywriter's voice.

### Step 3.1: Understanding Trigrams

**What are trigrams?**
Trigrams are three-word combinations that reveal habitual patterns. They're the sweet spot for voice capture—long enough to be distinctive, short enough to appear frequently.

**Why trigrams matter:**
- Capture rhythmic patterns
- Reveal thought structure
- Provide recognizable markers
- Create authentic flow

### Step 3.2: Identify Three-Word Patterns (20+ required)

**Identification Process:**

```yaml
trigram_extraction_process:
  step_1_collection:
    action: "Extract all three-word sequences from all sources"
    method: "Systematic scan of every paragraph"
    output: "Raw trigram list with frequencies"

  step_2_filtering:
    remove:
      - "Common stopword sequences ('and then the')"
      - "Non-distinctive patterns ('in order to')"
      - "Incomplete phrases (fragments)"
    keep:
      - "Distinctive openings"
      - "Signature transitions"
      - "Unique expressions"

  step_3_frequency_threshold:
    minimum: "3+ occurrences across sources"
    ideal: "Appears in multiple content types"
```

### Step 3.3: Categorize by Function

**Category 1: Opening Trigrams**
Phrases that begin ideas, paragraphs, or pieces:

```yaml
opening_trigrams:
  - trigram: "[three word phrase]"
    frequency: "X occurrences"
    usage_context: "Beginning of articles/threads"
    function: "Grabs attention by [method]"
    example: "Full sentence showing usage"
```

**Category 2: Transition Trigrams**
Phrases that connect ideas:

```yaml
transition_trigrams:
  - trigram: "[three word phrase]"
    frequency: "X occurrences"
    usage_context: "Moving between ideas"
    function: "Creates flow by [method]"
    example: "Full sentence showing usage"
```

**Category 3: Emphasis Trigrams**
Phrases that signal importance:

```yaml
emphasis_trigrams:
  - trigram: "[three word phrase]"
    frequency: "X occurrences"
    usage_context: "Highlighting key points"
    function: "Creates importance by [method]"
    example: "Full sentence showing usage"
```

**Category 4: Closing Trigrams**
Phrases that conclude ideas:

```yaml
closing_trigrams:
  - trigram: "[three word phrase]"
    frequency: "X occurrences"
    usage_context: "Ending sections/pieces"
    function: "Creates closure by [method]"
    example: "Full sentence showing usage"
```

**Category 5: Signature Trigrams**
Unique expressions specific to this copywriter:

```yaml
signature_trigrams:
  - trigram: "[three word phrase]"
    frequency: "X occurrences"
    uniqueness: "Why this is distinctly theirs"
    function: "Voice marker that [effect]"
    example: "Full sentence showing usage"
```

### Step 3.4: Document Usage Frequency

Map how often trigrams should appear:

```yaml
trigram_frequency_guide:
  every_piece:
    definition: "Appears in 80%+ of content"
    trigrams: ["list", "of", "trigrams"]
    usage: "Essential voice markers"

  every_section:
    definition: "Appears 3-5 times per piece"
    trigrams: ["list", "of", "trigrams"]
    usage: "Regular rhythm markers"

  every_paragraph:
    definition: "Appears every 100-200 words"
    trigrams: ["list", "of", "trigrams"]
    usage: "Flow maintenance"

  situational:
    definition: "Appears in specific contexts"
    trigrams: ["list", "of", "trigrams"]
    contexts: ["when to use each"]
```

### Quality Gate: Trigrams

```yaml
gate: trigrams
checks:
  mandatory:
    - trigram_count: "20+ trigrams extracted"
    - all_categories: "All 5 categories represented"
    - frequency_documented: "Every trigram has frequency count"
    - context_documented: "Every trigram has usage context"
  quality:
    - no_generic: "No common expressions included"
    - distinctive: "All trigrams are recognizably theirs"
    - examples_authentic: "Examples from actual sources"
    - frequency_guide_complete: "Usage frequency mapped"
```

---

## PHASE 4: RHETORICAL DEVICE IDENTIFICATION

### Objective

Identify the structural patterns the copywriter uses to make arguments and persuade, documenting their unique variations.

### Step 4.1: Device Category Scan

Scan sources for devices in each category:

**1. Framing Devices**
How they present and position ideas:

```yaml
framing_devices:
  reframing:
    pattern: "What you think is X is actually Y"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"

  pre_framing:
    pattern: "Setting context before main point"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"

  contrast_framing:
    pattern: "Before/after, old way/new way"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"
```

**2. Proof Devices**
How they establish credibility:

```yaml
proof_devices:
  authority_proof:
    pattern: "Credentials, experience, results"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"

  social_proof:
    pattern: "Others' experiences and testimonials"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"

  logical_proof:
    pattern: "Reasoning and evidence chains"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"
```

**3. Connection Devices**
How they build rapport:

```yaml
connection_devices:
  shared_experience:
    pattern: "You've probably felt..."
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"

  future_pacing:
    pattern: "Imagine when you..."
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"

  identification:
    pattern: "If you're like me..."
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"
```

**4. Urgency Devices**
How they motivate action:

```yaml
urgency_devices:
  scarcity:
    pattern: "Limited time, limited availability"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"

  cost_of_inaction:
    pattern: "What they lose by waiting"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"
```

**5. Structure Devices**
How they organize arguments:

```yaml
structure_devices:
  rule_of_three:
    pattern: "Three examples, three steps, three points"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"

  problem_agitate_solve:
    pattern: "Classic copy structure"
    copywriter_version: "[How they specifically do this]"
    example: "[Direct quote]"
    frequency: "[How often used]"
```

### Step 4.2: Document Primary Devices (5+ required)

For the copywriter's MOST-USED devices, create detailed documentation:

```yaml
rhetorical_devices:
  device_name:
    category: "[framing|proof|connection|urgency|structure]"
    description: "What this device accomplishes"
    structure: "Step-by-step pattern"
    copywriter_signature: "What makes their version unique"

    examples:
      example_1:
        source: "[Source file]"
        quote: "[Direct quote]"
        context: "[When this was used]"
      example_2:
        source: "[Source file]"
        quote: "[Direct quote]"
        context: "[When this was used]"

    usage_guide:
      when_to_use: "Situations appropriate for this device"
      when_not_to_use: "Situations to avoid"
      common_combinations: "What devices it pairs with"
      frequency: "How often to deploy"

    voice_notes:
      vocabulary: "Specific words used in this device"
      tone: "Energy level when using"
      pacing: "How fast/slow the delivery"
```

### Step 4.3: Document Device Combinations

Master copywriters combine devices in signature sequences:

```yaml
device_combinations:
  combination_name:
    sequence:
      1: "[First device]"
      2: "[Second device]"
      3: "[Third device]"
    purpose: "What this combination achieves"
    example: "[Full example showing sequence]"
    usage: "When to use this combination"
```

### Quality Gate: Rhetorical Devices

```yaml
gate: rhetorical_devices
checks:
  mandatory:
    - device_count: "5+ devices fully documented"
    - examples_per_device: "2+ examples per device"
    - all_categories_scanned: "All 5 categories analyzed"
    - usage_guides_complete: "Every device has usage guide"
  quality:
    - distinctive_versions: "Copywriter's unique variations documented"
    - combinations_identified: "Signature sequences found"
    - voice_notes_complete: "Voice characteristics noted"
    - examples_authentic: "All examples from actual sources"
```

---

## PHASE 5: FORMULA EXTRACTION

### Objective

Extract fill-in-the-blank templates from the copywriter's recurring patterns for specific copy types.

### Step 5.1: Understanding Quick Formulas

**Definition:** Quick formulas are abstracted templates with fixed and variable elements derived from the copywriter's patterns.

**Formula Components:**
```yaml
formula_anatomy:
  fixed_elements: "Words that always appear"
  variable_elements: "Placeholders for customization"
  structure: "Pattern of fixed and variable"
  usage_context: "When to apply"
```

### Step 5.2: Extract Formula Types (5+ required)

**Type 1: Hook Formulas**
How they open content and grab attention:

```yaml
hook_formulas:
  formula_name:
    pattern_observed: "Description of recurring pattern"
    template: "[Fixed text] {variable_1} [fixed text] {variable_2}"
    variables:
      variable_1:
        description: "What goes here"
        examples: ["example1", "example2"]
      variable_2:
        description: "What goes here"
        examples: ["example1", "example2"]
    source_examples:
      - original: "[Exact quote from source]"
        parsed: "[How this fits the template]"
      - original: "[Exact quote from source]"
        parsed: "[How this fits the template]"
    usage: "When to use this hook formula"
```

**Type 2: Headline Formulas**
Patterns for titles and subject lines:

```yaml
headline_formulas:
  formula_name:
    pattern_observed: "Description of recurring pattern"
    template: "[Template with {variables}]"
    variables:
      # Document each variable
    source_examples:
      # Show actual examples
    usage: "When to use this headline formula"
```

**Type 3: Transition Formulas**
How they move between ideas:

```yaml
transition_formulas:
  formula_name:
    pattern_observed: "Description of recurring pattern"
    template: "[Template with {variables}]"
    variables:
      # Document each variable
    source_examples:
      # Show actual examples
    usage: "When to use this transition"
```

**Type 4: CTA Formulas**
How they call readers to action:

```yaml
cta_formulas:
  formula_name:
    pattern_observed: "Description of recurring pattern"
    template: "[Template with {variables}]"
    variables:
      # Document each variable
    source_examples:
      # Show actual examples
    usage: "When to use this CTA"
```

**Type 5: Close Formulas**
How they end pieces:

```yaml
close_formulas:
  formula_name:
    pattern_observed: "Description of recurring pattern"
    template: "[Template with {variables}]"
    variables:
      # Document each variable
    source_examples:
      # Show actual examples
    usage: "When to use this close"
```

**Additional Formula Types (if found):**
- Proof formulas (how they present evidence)
- Reframe formulas (how they shift perspective)
- Story formulas (how they tell narratives)

### Step 5.3: Validate Formulas

For each formula:

```yaml
formula_validation:
  formula_name: "[Name]"
  tests:
    test_1:
      inputs: "[Variables used]"
      output: "[Generated text]"
      authentic: "[Yes/No - sounds like them?]"
    test_2:
      inputs: "[Variables used]"
      output: "[Generated text]"
      authentic: "[Yes/No - sounds like them?]"
    test_3:
      inputs: "[Variables used]"
      output: "[Generated text]"
      authentic: "[Yes/No - sounds like them?]"
  validation_status: "[Pass/Revise]"
  notes: "[Any adjustments needed]"
```

### Quality Gate: Quick Formulas

```yaml
gate: quick_formulas
checks:
  mandatory:
    - formula_count: "5+ formulas extracted"
    - types_covered: "Hook, headline, transition, CTA, close represented"
    - templates_complete: "Every formula has template"
    - examples_per_formula: "2+ source examples per formula"
  quality:
    - variables_defined: "Every variable has definition"
    - validation_passed: "3+ tests per formula"
    - usage_documented: "When to use each formula"
    - derived_from_sources: "All patterns from actual materials"
```

---

## PHASE 6: PSYCHOMETRIC INTEGRATION

### Objective

If psychometric profile is available, map personality-based communication patterns to enhance voice accuracy.

### Step 6.1: Check for Psychometric Profile

```
elicit: true
question: "Does a psychometric profile exist for this copywriter?"
options:
  - "Yes - provide path to file"
  - "No - skip this phase and use inferred patterns"
```

### Step 6.2: DISC Profile Integration

**If DISC profile available:**

```yaml
disc_integration:
  profile_type: "[D/I/S/C or combination]"
  primary: "[Dominant type]"
  secondary: "[Secondary type]"

  communication_implications:
    D_high:
      sentence_style: "Short, punchy, command-oriented"
      word_choices: "Action verbs, results language"
      persuasion_style: "Direct, bottom-line, competitive"
      copy_markers:
        - "Here's what you need to do"
        - "Stop wasting time"
        - "Winners do X"

    I_high:
      sentence_style: "Enthusiastic, varied, expressive"
      word_choices: "Positive, social, inspiring"
      persuasion_style: "Stories, excitement, community"
      copy_markers:
        - "I'm excited to share"
        - "You're going to love"
        - "Join us in"

    S_high:
      sentence_style: "Patient, step-by-step, reassuring"
      word_choices: "Supportive, secure, methodical"
      persuasion_style: "Gentle, process-focused, reliable"
      copy_markers:
        - "Let me walk you through"
        - "Take your time"
        - "I'll be here to support"

    C_high:
      sentence_style: "Detailed, precise, analytical"
      word_choices: "Data-driven, specific, logical"
      persuasion_style: "Evidence-based, systematic, thorough"
      copy_markers:
        - "Based on the data"
        - "Let me break this down"
        - "The evidence shows"

  observed_in_sources:
    # Validate against actual patterns
    matches: "[How their writing matches DISC predictions]"
    deviations: "[Where they differ from type]"
```

### Step 6.3: MBTI Integration

**If MBTI profile available:**

```yaml
mbti_integration:
  type: "[4-letter type]"

  dimension_impacts:
    EI_dimension:
      type: "[E or I]"
      communication_impact: "[How this affects their writing]"
      observed_patterns: "[Evidence from sources]"

    SN_dimension:
      type: "[S or N]"
      communication_impact: "[Concrete vs conceptual tendency]"
      observed_patterns: "[Evidence from sources]"

    TF_dimension:
      type: "[T or F]"
      communication_impact: "[Logic vs values emphasis]"
      observed_patterns: "[Evidence from sources]"

    JP_dimension:
      type: "[J or P]"
      communication_impact: "[Structured vs flexible style]"
      observed_patterns: "[Evidence from sources]"
```

### Step 6.4: Enneagram Integration

**If Enneagram profile available:**

```yaml
enneagram_integration:
  type: "[1-9]"
  wing: "[adjacent type]"

  voice_implications:
    core_motivation: "[What drives their communication]"
    fear_avoidance: "[What they avoid in copy]"
    desire_expression: "[What they aspire to express]"

  copy_characteristics:
    typical_themes: "[Recurring themes tied to type]"
    persuasion_approach: "[How their type persuades]"
    emotional_triggers: "[What emotions they appeal to]"

  observed_patterns:
    # Evidence from sources
```

### Step 6.5: Compile Psychometric Influence

```yaml
psychometric_influence:
  profile_summary:
    disc: "[Type and description]"
    mbti: "[Type and description]"
    enneagram: "[Type and wing]"
    confidence: "[How confident we are in these]"

  communication_impact:
    tone_influence: "How psychometrics affect their tone"
    structure_influence: "How psychometrics affect their structure"
    persuasion_influence: "How psychometrics affect their persuasion"
    emotional_influence: "What emotions they naturally appeal to"

  authentic_markers:
    must_include:
      - "Characteristic that must appear for authenticity"
      - "Another required characteristic"
    must_avoid:
      - "Pattern that would violate their psychometric type"
      - "Another misalignment to avoid"

  validation_notes:
    matches: "[Where sources confirm psychometric predictions]"
    unique_deviations: "[Where they differ from type—makes them distinctive]"
```

### Step 6.6: Inferred Patterns (if no profile)

If no psychometric profile exists, infer patterns from sources:

```yaml
inferred_psychometrics:
  inferred_disc:
    estimated_type: "[Best estimate]"
    evidence: "[Patterns that suggest this]"
    confidence: "[Low/Medium/High]"

  inferred_mbti:
    estimated_type: "[Best estimate]"
    evidence: "[Patterns that suggest this]"
    confidence: "[Low/Medium/High]"

  inferred_enneagram:
    estimated_type: "[Best estimate]"
    evidence: "[Patterns that suggest this]"
    confidence: "[Low/Medium/High]"

  note: "These are inferred from communication patterns, not validated assessments"
```

### Quality Gate: Psychometric Integration

```yaml
gate: psychometric_integration
checks:
  if_profile_available:
    - disc_mapped: "DISC profile mapped to communication patterns"
    - mbti_mapped: "MBTI dimensions analyzed"
    - enneagram_mapped: "Enneagram influence documented"
    - influence_compiled: "Combined psychometric influence documented"
  if_no_profile:
    - inference_attempted: "Best-guess psychometrics inferred"
    - evidence_documented: "Reasoning for inferences provided"
    - confidence_noted: "Confidence levels stated"
  quality:
    - validated_against_sources: "Psychometric predictions checked against actual writing"
    - unique_deviations_noted: "Where they differ from type captured"
    - authentic_markers_defined: "Must-include and must-avoid documented"
```

---

## PHASE 7: TONE PROFILE MAPPING

### Objective

Document the copywriter's tonal range, emotional palette, and energy characteristics.

### Step 7.1: Map Tone Spectrum

**Position on key dimensions:**

```yaml
tone_spectrum:
  formal_casual:
    position: "[1-10 scale, 1=very formal, 10=very casual]"
    range: "[Where they move between]"
    evidence: "[Examples showing typical position]"

  distant_intimate:
    position: "[1-10 scale]"
    range: "[Movement range]"
    evidence: "[Examples]"

  neutral_passionate:
    position: "[1-10 scale]"
    range: "[Movement range]"
    evidence: "[Examples]"

  gentle_confrontational:
    position: "[1-10 scale]"
    range: "[Movement range]"
    evidence: "[Examples]"

  humble_confident:
    position: "[1-10 scale]"
    range: "[Movement range]"
    evidence: "[Examples]"

  measured_urgent:
    position: "[1-10 scale]"
    range: "[Movement range]"
    evidence: "[Examples]"
```

### Step 7.2: Map Emotional Palette

**Document the emotions they evoke:**

```yaml
emotional_palette:
  primary_emotions:
    - emotion: "[Primary 1]"
      frequency: "[Often/Sometimes/Rarely]"
      how_evoked: "[Techniques used]"
      example: "[Quote evoking this emotion]"
    - emotion: "[Primary 2]"
      frequency: "[Often/Sometimes/Rarely]"
      how_evoked: "[Techniques used]"
      example: "[Quote evoking this emotion]"

  secondary_emotions:
    - emotion: "[Secondary 1]"
      frequency: "[Sometimes/Situational]"
      context: "[When this appears]"
      example: "[Quote evoking this emotion]"

  avoided_emotions:
    - emotion: "[Avoided 1]"
      reason: "[Why they avoid this]"
      alternative: "[What they do instead]"
```

### Step 7.3: Document Energy Level

```yaml
energy_profile:
  baseline_energy: "[Low/Medium/High]"

  high_energy_markers:
    - "Short sentences"
    - "Exclamation points"
    - "Action verbs"
    - "[Other markers they use]"

  low_energy_markers:
    - "Longer sentences"
    - "Reflective language"
    - "[Other markers]"

  energy_shifts:
    increases_when: "[Contexts that raise energy]"
    decreases_when: "[Contexts that lower energy]"

  examples:
    high_energy: "[Quote at peak energy]"
    medium_energy: "[Quote at typical energy]"
    low_energy: "[Quote at low energy]"
```

### Quality Gate: Tone Profile

```yaml
gate: tone_profile
checks:
  mandatory:
    - spectrum_mapped: "All 6 tone dimensions positioned"
    - emotional_palette_complete: "Primary and secondary emotions documented"
    - energy_profiled: "Baseline and markers identified"
  quality:
    - evidence_provided: "Each dimension has supporting examples"
    - range_documented: "Movement within dimensions captured"
    - shifts_explained: "Context for energy changes noted"
```

---

## PHASE 8: COMPILATION AND OUTPUT

### Step 8.1: Assemble Communication DNA File

Compile all components into final YAML structure:

```yaml
# Communication DNA: {Copywriter Name}
# Extracted: {Date}
# Source Files: {Count}
# Task Version: 2.0.0

metadata:
  copywriter: "{Full Name}"
  slug: "{mind_slug}"
  extraction_date: "{YYYY-MM-DD}"
  source_files_analyzed: {count}
  psychometric_profile: "{available/inferred/none}"
  task_version: "2.0.0"

vocabulary:
  mandatory_words:
    # 15+ entries organized by category

  forbidden_words:
    # 10+ entries organized by reason

  signature_vocabulary:
    # 10+ entries with definitions

trigrams:
  frequency_pattern: "{overall frequency guidance}"

  by_category:
    openers:
      # Opening trigrams
    transitions:
      # Transition trigrams
    emphasis:
      # Emphasis trigrams
    closers:
      # Closing trigrams
    signature:
      # Signature trigrams

rhetorical_devices:
  # 5+ fully documented devices

quick_formulas:
  hooks:
    # Hook formulas
  headlines:
    # Headline formulas
  transitions:
    # Transition formulas
  ctas:
    # CTA formulas
  closes:
    # Close formulas

psychometric_influence:
  # Complete psychometric integration

tone_profile:
  spectrum:
    # 6 dimension positions
  emotional_palette:
    # Emotions documented
  energy:
    # Energy profile
```

### Step 8.2: Validate Output

**Run validation checklist:**

```yaml
validation_checklist:
  vocabulary:
    - mandatory_words_count: "[X] (target: 15+)"
    - forbidden_words_count: "[X] (target: 10+)"
    - signature_vocabulary_count: "[X] (target: 10+)"
    - all_have_context: "[Yes/No]"

  trigrams:
    - trigram_count: "[X] (target: 20+)"
    - all_categories_represented: "[Yes/No]"
    - frequency_documented: "[Yes/No]"
    - no_generic_phrases: "[Yes/No]"

  rhetorical_devices:
    - device_count: "[X] (target: 5+)"
    - examples_per_device: "[X] (target: 2+)"
    - from_actual_sources: "[Yes/No]"

  quick_formulas:
    - formula_count: "[X] (target: 5+)"
    - types_covered: "[list]"
    - validation_tests_passed: "[Yes/No]"

  psychometric:
    - integration_complete: "[Yes/No/Not Available]"
    - influence_documented: "[Yes/No]"

  tone:
    - spectrum_mapped: "[Yes/No]"
    - emotional_palette_complete: "[Yes/No]"
    - energy_profiled: "[Yes/No]"

  technical:
    - yaml_syntax_valid: "[Yes/No]"
    - no_placeholder_text: "[Yes/No]"
    - all_examples_authentic: "[Yes/No]"
```

### Step 8.3: Save Output

Save to: `{pasta}/{slug}/analysis/communication-dna.yaml`

### Quality Gate: Final Output

```yaml
gate: final_output
checks:
  mandatory:
    - file_saved: "Output saved to correct location"
    - yaml_valid: "YAML syntax validates"
    - all_sections_present: "Every required section included"
    - no_placeholders: "No template text remaining"
  quality:
    - meets_minimums: "All quantity requirements met"
    - distinctive: "Content is uniquely this copywriter"
    - usable: "Can be used for authentic voice replication"
```

---

## FINAL CHECKLIST

### Completion Requirements

```yaml
completion_checklist:
  phase_1_source_analysis:
    - [ ] All source files cataloged
    - [ ] Content distribution calculated
    - [ ] Initial patterns noted
    - [ ] Complete reading confirmed

  phase_2_vocabulary:
    - [ ] 15+ mandatory words extracted
    - [ ] 10+ forbidden words extracted
    - [ ] 10+ signature vocabulary extracted
    - [ ] All terms have context and examples

  phase_3_trigrams:
    - [ ] 20+ trigrams extracted
    - [ ] All 5 categories represented
    - [ ] Frequency guide created
    - [ ] No generic phrases included

  phase_4_rhetorical_devices:
    - [ ] 5+ devices fully documented
    - [ ] 2+ examples per device
    - [ ] Usage guides complete
    - [ ] Device combinations documented

  phase_5_formulas:
    - [ ] 5+ formulas extracted
    - [ ] All types covered
    - [ ] Templates validated
    - [ ] Source examples provided

  phase_6_psychometric:
    - [ ] Profile integrated OR inference documented
    - [ ] Communication impacts noted
    - [ ] Authentic markers defined

  phase_7_tone:
    - [ ] Spectrum mapped
    - [ ] Emotional palette documented
    - [ ] Energy profile created

  phase_8_output:
    - [ ] YAML compiled correctly
    - [ ] Validation passed
    - [ ] File saved to correct location
```

---

## TROUBLESHOOTING

### Common Issues and Solutions

**Issue:** Not finding enough mandatory words

```yaml
solution:
  expand_search:
    - Include compound phrases (two-word combinations)
    - Look for conceptual terms (ideas they return to)
    - Analyze action verbs specifically
  lower_threshold:
    - Try 25% frequency instead of 30%
    - But note reduced confidence
```

**Issue:** Trigrams sound generic

```yaml
solution:
  filter_more_strictly:
    - Remove any phrase appearing in standard copywriting
    - Look for unusual word combinations
    - Focus on their specific phrasing of common ideas
  seek_signature_expressions:
    - Coined phrases unique to them
    - Personalized versions of common transitions
```

**Issue:** Rhetorical devices unclear

```yaml
solution:
  analyze_structure:
    - How do they open pieces?
    - How do they structure arguments?
    - How do they handle objections?
    - How do they close pieces?
  compare_to_taxonomy:
    - Reference device taxonomy in research doc
    - Identify which standard devices they use
    - Note their unique variations
```

**Issue:** No psychometric profile available

```yaml
solution:
  infer_from_patterns:
    - Analyze communication style for DISC indicators
    - Note structural preferences for MBTI indicators
    - Identify core motivations for Enneagram indicators
  document_confidence:
    - Mark all inferences as estimates
    - Note supporting evidence
    - Set confidence levels appropriately
```

**Issue:** DNA doesn't sound like them

```yaml
solution:
  strengthen_distinctiveness:
    - Review for generic elements and remove
    - Add more signature vocabulary
    - Increase trigram specificity
    - Enhance device documentation
  validate_against_sources:
    - Read DNA output against source materials
    - Check every element for authenticity
    - Remove anything that doesn't fit
```

---

## REFERENCE: Example Outputs

For reference implementations, review:
- `squads/copy/agents/david-ogilvy.md` (communication_dna section)
- `squads/copy/agents/dan-kennedy.md` (communication_dna section)
- `squads/copy/agents/gary-halbert.md` (communication_dna section)

These demonstrate expected depth, structure, and voice accuracy.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01-15 | Initial task creation |
| 2.0.0 | 2026-01-23 | Complete rewrite with Five Pillars model, expanded psychometric integration, comprehensive trigram analysis, formula validation system |

---

*CopywriterOS Task v2.0.0*
*Phase 3 of Create Copywriter Agent Pipeline*
