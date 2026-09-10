> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Extract Signature Phrases - Copywriter Agent Sub-Task

## Metadata
```yaml
task_id: extract-signature-phrases
version: 1.0.0
category: agent-creation
difficulty: advanced
elicit: true
parent_task: create-copywriter-agent.md
phase: 4
dependencies:
  templates:
    - templates/signature-phrases-tmpl.yaml
  reference:
    - agents/david-ogilvy.md
outputs:
  - signature-phrases.yaml
minimum_requirements:
  total_phrases: 42
  total_tiers: 7
  fields_per_phrase: 4
```

## Objective

Extract and curate 42+ memorable, quotable phrases from a copywriter's body of work, organized into a 7-tier system based on usage frequency and context. These phrases become the "voice bank" that makes the AI agent sound authentically like the original copywriter.

**Key Principle:** A signature phrase must be able to stand alone, be memorable, and feel distinctly like the copywriter said it—not a generic statement anyone could make.

---

## THE 7-TIER CLASSIFICATION SYSTEM

### Understanding the Tiers

| Tier | Name | Frequency | Purpose | Count |
|------|------|-----------|---------|-------|
| 1 | Core Mantras | Every piece (1-2x daily) | The copywriter's most iconic, repeated beliefs | 5-7 |
| 2 | Methodology Pillars | Weekly | Key phrases about their process/approach | 5-7 |
| 3 | Theme: [Primary Topic] | Per topic context | Domain-specific wisdom (e.g., copywriting) | 6-8 |
| 4 | Theme: [Secondary Topic] | Per topic context | Domain-specific wisdom (e.g., marketing) | 6-8 |
| 5 | Theme: [Tertiary Topic] | Per topic context | Domain-specific wisdom (e.g., business) | 6-8 |
| 6 | Philosophy & Mindset | Monthly | Deeper wisdom about life, success, thinking | 5-7 |
| 7 | Tactical & Situational | As needed | Specific advice for specific situations | 5-7 |

### Tier Definitions

**Tier 1: Core Mantras**
- The phrases they repeat constantly
- Would be recognized as "their thing"
- Often appear in multiple sources
- Foundation of their philosophy

**Tier 2: Methodology Pillars**
- How they approach their craft
- Process-oriented phrases
- "My method is..." type statements
- Distinctive approach markers

**Tiers 3-5: Theme-Specific**
- Customize based on copywriter's domains
- Examples: Writing, Marketing, Business, Content, Offers, Sales
- Each tier covers one major theme
- Select the 3 most prominent themes from source materials

**Tier 6: Philosophy & Mindset**
- Beliefs about success, life, mindset
- Often inspirational or contrarian
- Shows depth beyond tactical advice
- The "wisdom" layer

**Tier 7: Tactical & Situational**
- Specific advice for specific scenarios
- "When X happens, do Y" type phrases
- Actionable and concrete
- Less frequently used but valuable

---

## PREREQUISITES

Before starting, ensure you have:

```
elicit: true
question: "Please provide the following information:"
fields:
  - copywriter_name: "Name of the copywriter"
  - source_directory: "Path to source materials"
  - primary_theme: "Main topic domain (e.g., copywriting)"
  - secondary_theme: "Second topic domain (e.g., marketing)"
  - tertiary_theme: "Third topic domain (e.g., business)"
```

### Required Materials

| Material | Minimum | Ideal | Purpose |
|----------|---------|-------|---------|
| Source files | 20 | 40+ | Find diverse phrases |
| Reference agent | 1 | 2 | Understand tier format |
| Theme identification | 3 | 3 | Define Tiers 3-5 |

---

## PHASE 1: RECONNAISSANCE

### Step 1.1: Inventory Source Materials

List all source files and note potential phrase richness:

| File | Type | Estimated Phrase Count | Notes |
|------|------|------------------------|-------|
| [filename] | Article/Transcript/Interview | High/Medium/Low | [Notable quotes observed] |

**Priority files for phrases:**
- Interviews (natural speech patterns)
- Social media threads (condensed wisdom)
- Book excerpts (polished statements)
- Presentation transcripts (repeated messaging)

### Step 1.2: Read Reference Agent

Study the signature_phrases section in `agents/david-ogilvy.md`:

1. Observe the 7-tier structure
2. Note phrase length patterns
3. Understand context field depth
4. See source attribution format

### Quality Gate: Reconnaissance

- [ ] All source files inventoried
- [ ] Reference agent signature_phrases section reviewed
- [ ] Three main themes identified for Tiers 3-5
- [ ] Tier names customized to copywriter's domains

---

## PHASE 2: PHRASE IDENTIFICATION

### Step 2.1: What Makes a Signature Phrase?

**A signature phrase MUST be:**

1. **Standalone** — Makes sense without context
2. **Memorable** — Sticks in your mind
3. **Original** — Distinctly theirs, not generic
4. **Quotable** — Something you'd cite or share
5. **Repeatable** — Appears multiple times OR is too good not to include

**A signature phrase must NOT be:**

1. Generic advice anyone could say
2. Incomplete thought requiring context
3. Overly technical without punch
4. Factual statement without personality
5. Too long (generally under 25 words)

### Step 2.2: Extraction Process

For each source file, extract candidate phrases using this format:

```markdown
## [Source File Name]

### Candidate Phrases

| Phrase | Tier Candidate | Frequency | Context |
|--------|----------------|-----------|---------|
| "Exact quote from source" | 1-7 | 1st/2nd/3rd occurrence | Where/when used |
```

**Extraction Rules:**

1. Copy phrases EXACTLY as written (preserve voice)
2. Mark frequency of appearance across sources
3. Note the context where it appears
4. Tag with candidate tier (can change later)
5. Err on side of over-extraction (filter later)

### Step 2.3: Frequency Analysis

Cross-reference phrases across all sources:

| Phrase | File 1 | File 2 | File 3 | ... | Total Occurrences |
|--------|--------|--------|--------|-----|-------------------|
| "[phrase]" | ✓ | ✓ | - | ... | 2 |

**Frequency indicates tier placement:**
- 5+ occurrences → Strong Tier 1 candidate
- 3-4 occurrences → Tier 2-3 candidate
- 1-2 occurrences → Tier 4-7 based on quality

### Quality Gate: Identification

- [ ] 80+ candidate phrases identified (to filter to 42)
- [ ] All source files processed
- [ ] Frequency tracked across sources
- [ ] No duplicate phrases in candidate list

---

## PHASE 3: TIER CLASSIFICATION

### Step 3.1: Tier 1 Selection (Core Mantras)

Select 5-7 phrases that represent the copywriter's CORE philosophy.

**Selection Criteria:**
- [ ] Highest frequency across sources
- [ ] Would be recognized as "their thing"
- [ ] Appears in multiple contexts
- [ ] Foundation of their worldview

**Test:** "If someone heard only these 5-7 phrases, would they understand this person's core message?"

### Step 3.2: Tier 2 Selection (Methodology Pillars)

Select 5-7 phrases about their PROCESS and APPROACH.

**Selection Criteria:**
- [ ] Explains how they work
- [ ] Differentiates their methodology
- [ ] Process-oriented language
- [ ] "My approach is..." type statements

**Test:** "Do these phrases explain HOW this person achieves results?"

### Step 3.3: Tiers 3-5 Selection (Theme-Specific)

For each theme (Primary, Secondary, Tertiary), select 6-8 phrases.

**[Primary Theme] Selection Criteria:**
- [ ] Directly about [theme]
- [ ] Domain-specific wisdom
- [ ] Actionable within domain
- [ ] Shows expertise depth

**[Secondary Theme] Selection Criteria:**
- Same as above for second domain

**[Tertiary Theme] Selection Criteria:**
- Same as above for third domain

**Test:** "Would these phrases help someone specifically with [theme]?"

### Step 3.4: Tier 6 Selection (Philosophy & Mindset)

Select 5-7 phrases about LIFE, SUCCESS, and MINDSET.

**Selection Criteria:**
- [ ] Transcends tactical advice
- [ ] Shows deeper wisdom
- [ ] Often inspirational or contrarian
- [ ] Reveals worldview

**Test:** "Are these phrases about success/life, not just the craft?"

### Step 3.5: Tier 7 Selection (Tactical & Situational)

Select 5-7 phrases for SPECIFIC SITUATIONS.

**Selection Criteria:**
- [ ] "When X happens, do Y" format
- [ ] Specific and actionable
- [ ] Addresses common scenarios
- [ ] Practical application

**Test:** "Can someone use this phrase in a specific situation?"

### Quality Gate: Classification

- [ ] Tier 1: 5-7 phrases selected
- [ ] Tier 2: 5-7 phrases selected
- [ ] Tier 3: 6-8 phrases selected
- [ ] Tier 4: 6-8 phrases selected
- [ ] Tier 5: 6-8 phrases selected
- [ ] Tier 6: 5-7 phrases selected
- [ ] Tier 7: 5-7 phrases selected
- [ ] Total: 42+ phrases
- [ ] No duplicates across tiers

---

## PHASE 4: DOCUMENTATION

### Step 4.1: Phrase Structure

For each selected phrase, document:

```yaml
- phrase: "The exact phrase in English"
  portuguese: "Portuguese translation (if original is English, translate; if original is Portuguese, keep original)"
  context: "When and how to use this phrase - specific guidance"
  source: "Source file or content piece where this was found"
```

### Step 4.2: Context Guidelines

The `context` field should answer:
- **When** to use this phrase
- **Why** this phrase works
- **How** to integrate into copy/conversation

**Good context example:**
```yaml
context: "Use when explaining why short-term thinking fails. Works well in sales pages when addressing instant gratification objections."
```

**Bad context example:**
```yaml
context: "Business advice" # Too vague
```

### Step 4.3: Source Attribution

The `source` field should identify:
- Original file name OR
- Content piece title OR
- "Multiple sources" (for high-frequency phrases)

### Step 4.4: Compile Final Document

Use template: `templates/signature-phrases-tmpl.yaml`

Structure:
```yaml
signature_phrases:
  metadata:
    copywriter: "[Name]"
    extraction_date: "YYYY-MM-DD"
    total_phrases: 42+
    source_files_processed: N

  tier_1_core_mantras:
    frequency: "use_every_piece"
    description: "The copywriter's most iconic, repeated beliefs"
    phrases:
      - phrase: "..."
        portuguese: "..."
        context: "..."
        source: "..."

  tier_2_methodology_pillars:
    frequency: "weekly"
    description: "Key phrases about their process and approach"
    phrases:
      - phrase: "..."
        ...

  tier_3_[primary_theme]:
    frequency: "per_topic_context"
    description: "Domain-specific wisdom about [theme]"
    phrases:
      - phrase: "..."
        ...

  # Continue for all 7 tiers...
```

### Quality Gate: Documentation

- [ ] All phrases follow required structure
- [ ] All context fields are specific (not vague)
- [ ] All sources are identified
- [ ] Portuguese translations are accurate
- [ ] YAML syntax validated

---

## PHASE 5: VALIDATION

### Step 5.1: Uniqueness Check

For each phrase, verify:
- [ ] Not a generic statement (sounds like them specifically)
- [ ] Not a common cliché reworded
- [ ] Has distinctive vocabulary/phrasing

**Test:** Remove the attribution—would you still know who said it?

### Step 5.2: Coverage Check

Verify the phrases cover:
- [ ] Their core philosophy
- [ ] Their methodology
- [ ] All major themes
- [ ] Tactical applications
- [ ] Deeper wisdom

**Test:** Could you write diverse content using only these phrases?

### Step 5.3: Authenticity Check

Compare against reference agent (david-ogilvy.md):
- [ ] Similar depth of context
- [ ] Similar source attribution
- [ ] Similar tier distribution
- [ ] Comparable phrase quality

### Step 5.4: Deduplication Check

Verify no semantic duplicates:
- [ ] No phrase appears twice
- [ ] No phrases that say the same thing differently
- [ ] Each phrase adds unique value

### Quality Gate: Validation

- [ ] All uniqueness checks passed
- [ ] Coverage is comprehensive
- [ ] Authenticity verified
- [ ] No duplicates found
- [ ] Total count is 42+

---

## OUTPUT SPECIFICATION

### File Location
```
{pasta}/{slug}/analysis/signature-phrases.yaml
```

### Required Sections

1. **Metadata Header**
   - Copywriter name
   - Extraction date
   - Total phrase count
   - Source files processed

2. **Tier 1: Core Mantras** (5-7 phrases)
   - frequency: "use_every_piece"

3. **Tier 2: Methodology Pillars** (5-7 phrases)
   - frequency: "weekly"

4. **Tier 3: [Primary Theme]** (6-8 phrases)
   - frequency: "per_topic_context"

5. **Tier 4: [Secondary Theme]** (6-8 phrases)
   - frequency: "per_topic_context"

6. **Tier 5: [Tertiary Theme]** (6-8 phrases)
   - frequency: "per_topic_context"

7. **Tier 6: Philosophy & Mindset** (5-7 phrases)
   - frequency: "monthly"

8. **Tier 7: Tactical & Situational** (5-7 phrases)
   - frequency: "as_needed"

### YAML Validation

Run YAML validation before saving:
- Valid syntax
- All required fields present
- No empty values
- Proper indentation

---

## FINAL CHECKLIST

### Phase Completion
- [ ] Phase 1: Reconnaissance complete
- [ ] Phase 2: 80+ candidates identified
- [ ] Phase 3: 42+ phrases classified into 7 tiers
- [ ] Phase 4: All phrases documented with context
- [ ] Phase 5: Validation passed

### Quality Standards
- [ ] Minimum 42 phrases total
- [ ] All 7 tiers populated
- [ ] Each phrase has all 4 fields (phrase, portuguese, context, source)
- [ ] No duplicate phrases
- [ ] Phrases are genuinely quotable (not generic)
- [ ] Context is specific and actionable
- [ ] YAML syntax validated

### Distinctiveness Test
- [ ] Phrases sound like the copywriter (not generic)
- [ ] Cover all major themes
- [ ] Include both famous and lesser-known gems
- [ ] Mix of tactical and philosophical

---

## TROUBLESHOOTING

### Issue: Not Enough Phrases Found

**Symptoms:** Can't reach 42 quality phrases

**Solutions:**
1. Review source files for indirect quotes (paraphrased wisdom)
2. Look for repeated concepts expressed differently
3. Check interviews/transcripts for spoken patterns
4. Supplement with social media/short-form content

### Issue: Too Many Similar Phrases

**Symptoms:** Multiple phrases saying the same thing

**Solutions:**
1. Keep the most memorable version only
2. Merge similar phrases into one
3. Choose based on frequency (most repeated wins)
4. Select based on quotability

### Issue: Phrases Feel Generic

**Symptoms:** Phrases could be said by anyone

**Solutions:**
1. Look for unique vocabulary
2. Find more specific versions
3. Add context that shows uniqueness
4. Replace with more distinctive alternatives

### Issue: Unbalanced Tier Distribution

**Symptoms:** Some tiers have too many/few phrases

**Solutions:**
1. Re-evaluate tier assignments
2. Some phrases may fit multiple tiers—choose strategically
3. If a theme is weak, consider merging with another
4. Adjust tier themes to match source material better

---

## USAGE

To execute this task:

```
*task extract-signature-phrases
```

Then provide:
1. Copywriter name
2. Source directory path
3. Three main themes for Tiers 3-5

---

*CopywriterOS Task v1.0.0*
*Part of the AIOS Expansion Pack System*
