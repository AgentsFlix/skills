> Material de aprofundamento opcional. Metas de quantidade, headlines e pontuação pertencem ao método ampliado explicitamente solicitado; não bloqueiam a síntese inicial nem autorizam inventar evidência. Referências históricas a documentos ausentes não são dependências disponíveis: declare a ausência e use apenas o material acessível. A atribuição ao autor continua como procedência, sem impor seu método à marca da pessoa.

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# CopySearch — David Ogilvy Research Engineering Protocol

## Metadata
```yaml
task_id: copysearch
version: 2.0.0
category: research
difficulty: advanced
estimated_time: 4-8 hours (AI-accelerated)
elicit: true
methodology: david-ogilvy-research-engineering
reference: docs/research/david-ogilvy-research-engineering-meta-framework.md
dependencies:
  - checklists/copysearch-checklist.md
  - templates/copysearch-template.md
  - reference/copysearch-anti-hallucination.md
  - reference/copysearch-quick-reference.md
  - reference/copysearch-tool-stack.md
outputs:
  - Research Charter
  - Technical Fact Sheet (13+ facts, anchor fact)
  - Consumer Language Bank (50+ literal quotes)
  - Competitive Intelligence Matrix
  - Strategic Brief (positioning + proposition)
  - Creative Options Document (25+ headlines)
  - Validated Insights Document
  - Research Accuracy Scorecard
```

---

## Core Principle

> **"The discipline of knowledge over the anarchy of ignorance."**
> — David Ogilvy

---

## Purpose

Transform Ogilvy's research methodology into an executable framework for AI agents conducting market research, competitive intelligence, and creative brief development—while maintaining evidence standards and preventing hallucination/cherry-picking.

**The essential question:** *"How do I know this is true, and how might I be fooling myself?"*

---

## THE OGILVY RESEARCH STACK (5 Layers)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ LAYER 5: MEASUREMENT & TESTING                                          │
│ "The most important word in the vocabulary of advertising is TEST.      │
│  Never stop testing, and your advertising will never stop improving."   │
├─────────────────────────────────────────────────────────────────────────┤
│ LAYER 4: BRAND & POSITIONING                                            │
│ "We have learned that the effect of your advertising on sales depends   │
│  more on this decision than on any other: How should you position your  │
│  product?"                                                              │
├─────────────────────────────────────────────────────────────────────────┤
│ LAYER 3: MARKET & COMPETITION                                           │
│ "Find out all you possibly can about the merits, faults and sales       │
│  arguments of competitors, and then keep quiet about them."             │
├─────────────────────────────────────────────────────────────────────────┤
│ LAYER 2: CONSUMER & VOICE OF CUSTOMER                                   │
│ "If you're trying to persuade people to do something, or buy something, │
│  it seems to me you should use their language, the language they use    │
│  every day, the language in which they think."                          │
├─────────────────────────────────────────────────────────────────────────┤
│ LAYER 1: PRODUCT & ENGINEERING                                          │
│ "Set yourself to becoming the best-informed person in the agency on     │
│  the account."                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## EVIDENCE HIERARCHY (Memorize This Order)

| TIER | TYPE | VALIDATION | USE IN COPY |
|------|------|------------|-------------|
| 🥇 **GOLD** | Direct response results, sales data, verified technical documentation | Sales/response tracking, source verification | Headlines, primary claims |
| 🥈 **SILVER** | Expert interviews, systematic competitive analysis, diagnostic metrics | Cross-reference | Supporting claims |
| 🥉 **BRONZE** | Consumer stated preferences, focus groups | Behavioral cross-check | Hypothesis only, use qualifiers |
| ❌ **REJECT** | Creative awards, unverified claims, intuition | N/A | NEVER use |

> **"We have been unable to establish any correlation whatever between awards and sales."**
> — David Ogilvy, *Ogilvy on Advertising*

---

## PHASE 0: MISSION BRIEFING
### *Before any research begins*

**Objective:** Define scope, establish validation criteria, prevent scope creep.

> **"I notice increasing reluctance on the part of marketing executives to use judgment; they are coming to rely too much on research, and they use it as a drunkard uses a lamp post—for support, rather than for illumination."**
> — David Ogilvy

### Checklist 0.1 — Research Definition

```
elicit: true
question: "What specific business decision must this research inform?"
format: text
```

- [ ] What is the specific business decision this research must inform?
- [ ] What would "sufficient evidence" look like to make this decision?
- [ ] What claims will require GOLD-tier evidence vs. SILVER-tier?
- [ ] What is explicitly OUT of scope?
- [ ] Who is the human accountable for research accuracy?
- [ ] What is the deadline and depth trade-off?

### Checklist 0.2 — Anti-Hallucination Setup

- [ ] Confidence threshold defined (default: 70% for auto-accept, below requires human review)
- [ ] Citation requirement activated (no claim without source)
- [ ] Provenance tracking enabled (source → page/section → date accessed)
- [ ] Cross-validation protocol selected (2+ independent sources for key claims)
- [ ] "I don't know" response authorized for insufficient evidence

### Output Artifact: Research Charter

```
RESEARCH CHARTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Decision to inform: [specific decision]
Success criteria: [what evidence closes the question]
Gold-tier requirements: [claims needing behavioral/verified evidence]
Out of scope: [explicit exclusions]
Accountable human: [name]
Deadline: [date] | Depth level: [rapid/standard/deep]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 1: PRODUCT/TECHNICAL RESEARCH (Layer 1)
### *"Become the best-informed person on the subject"*

**Objective:** Extract verifiable facts, specifications, and non-obvious product truths.

> **"For Rolls-Royce, I spent three weeks reading about the car. By the time I finished, I knew more about it than 90% of the people who buy Rolls-Royces."**
> — David Ogilvy, *Confessions of an Advertising Man*

### Step 1.1 — Document Collection

```
elicit: true
question: "What technical documentation do you have available about the product?"
options:
  - Product manuals/specifications
  - Patents or proprietary documentation
  - Engineering reports
  - Onboarding transcripts
  - Demo videos
  - API/code documentation (for tech)
  - Certifications/lab reports
  - Independent test results
  - Other (specify)
```

**Source Priority (in order):**
1. Official product specifications, manuals, technical sheets
2. Patent filings and regulatory submissions
3. Independent lab tests and certifications
4. Engineering reviews and technical journalism
5. Manufacturer claims (verify before use)

### Step 1.2 — Fact Extraction

**For each material, extract using this template:**

```
FACT: [specific claim]
SOURCE: [document name]
LOCATION: [page/section/paragraph]
DATE: [publication date]
CONFIDENCE: [HIGH/MEDIUM/LOW]
VERIFICATION: [how to verify independently]
```

**Extraction Rules:**
1. Seek SPECIFIC NUMBERS (not "many" but "147")
2. Seek UNIQUE PROCESSES (how it's made differently)
3. Seek TESTS PERFORMED (proof of quality)
4. Seek MEMORABLE DETAILS (French walnut picnic tables)

> **"When research reported that the average shopper thought Sears Roebuck made a profit of 37 per cent, we headlined an advertisement 'Sears makes a profit of 5 per cent.' This specific number was more persuasive than saying Sears' profit was 'less than you might suppose.'"**
> — David Ogilvy, *Ogilvy on Advertising*

### Step 1.3 — Creator Interviews

```
elicit: true
question: "Can you schedule an interview with the product creator/engineer?"
options:
  - Yes, I can schedule
  - I have transcripts from previous calls
  - I have access to internal documents
  - No direct access
```

**Questions for interview:**
1. "What does nobody know about how this is made?"
2. "What technical detail makes you most proud?"
3. "What do competitors NOT do that you do?"
4. "If you had to convince a skeptic, what single fact would you use?"
5. "What was the most rigorous test the product passed?"

### Step 1.4 — Anchor Fact Identification

**Ogilvy Standard:** *"At 60 miles an hour the loudest noise in this new Rolls-Royce comes from the electric clock."*

**Anchor Fact Criteria (all must be true):**
- [ ] **Specific** — Numbers, measurements, concrete details
- [ ] **Surprising** — Not obvious, challenges assumptions
- [ ] **Differentiating** — Competitors cannot credibly claim this
- [ ] **Verifiable** — Source can be cited, claim can be tested
- [ ] **Relevant** — Connects to consumer benefit

### Checklist 1.1 — Product Research Quality Gate

- [ ] Read ALL available technical documentation (not summaries)
- [ ] Interviewed or have transcripts from creators
- [ ] Found at least 3 facts no competitor uses
- [ ] Each fact has complete provenance (source + location + date)
- [ ] Numerical claims verified against original source
- [ ] Superlatives flagged for verification ("best," "first," "only")
- [ ] Identified anchor fact candidate passing all 5 criteria

### Output Artifact: Technical Fact Sheet

```
TECHNICAL FACT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product/Service: [name]
Research Date: [date]
Sources Reviewed: [count] | Documents Processed: [count]

ANCHOR FACT CANDIDATE:
[The single most compelling fact with full provenance]

SUPPORTING FACTS (ranked by strength):
1. [Fact] — Source: [x] — Confidence: [HIGH/MED/LOW]
2. [Fact] — Source: [x] — Confidence: [HIGH/MED/LOW]
3. [Fact] — Source: [x] — Confidence: [HIGH/MED/LOW]
... [continue to 13+ facts minimum]

CLAIMS REQUIRING VERIFICATION:
• [Claim] — Verification method: [x]

REJECTED CLAIMS (insufficient evidence):
• [Claim] — Reason: [x]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 2: CONSUMER/LANGUAGE RESEARCH (Layer 2)
### *"Use their language, the language in which they think"*

**Objective:** Understand how real consumers talk about the problem, product category, and their desires—in their own words.

> **"If you're trying to persuade people to do something, or buy something, it seems to me you should use their language, the language they use every day, the language in which they think."**
> — David Ogilvy, *Confessions of an Advertising Man*

> **"The trouble with market research is that people don't think how they feel, they don't say what they think, and they don't do what they say."**
> — David Ogilvy

### Step 2.1 — Voice of Customer Mining

```
elicit: true
question: "What Voice of Customer sources do you have available?"
options:
  - Reviews (Amazon, G2, App Store, etc.)
  - Support tickets (Zendesk, Intercom, etc.)
  - NPS/CSAT comments
  - Call transcripts (Gong, Fireflies, etc.)
  - WhatsApp/Telegram messages
  - Social media comments
  - Customer emails
  - Survey responses
  - Ad comments
```

**Source Priority (in order):**
1. Customer support tickets and complaints (behavioral gold)
2. Product reviews (Amazon, G2, Trustpilot, etc.)
3. Forum discussions and Reddit threads
4. Social media conversations (organic, not paid)
5. Call/chat transcripts (if available)
6. Survey open-ends (lowest priority — prompted responses)

### Step 2.2 — Language Pattern Extraction

**Extract into these 5 categories:**

```
PAIN LANGUAGE: How they describe the problem
[exact quotes with frequency count]

DESIRE LANGUAGE: How they describe the ideal outcome
[exact quotes with frequency count]

OBJECTION LANGUAGE: Why they hesitate or reject
[exact quotes with frequency count]

COMPARISON LANGUAGE: How they compare alternatives
[exact quotes with frequency count]

EMOTIONAL LANGUAGE: Intense positive/negative expressions
[exact quotes with frequency count]
```

### Step 2.3 — Objection Inventory

> **"Find out all you possibly can about the faults and objections... profound knowledge will help you put your positive case more convincingly."**
> — David Ogilvy, *The Theory and Practice of Selling the Aga Cooker*

| Objection | Frequency | Addressable? | Copy Opportunity |
|-----------|-----------|--------------|------------------|
| [objection] | Xx | Y/N | [how to address in copy] |

### Step 2.4 — Jobs-to-be-Done

```
When [situation], I want [motivation], so that [expected outcome].
```

List at least 5 JTBDs identified from VOC research.

### Checklist 2.1 — Consumer Research Quality Gate

- [ ] Minimum 100 authentic customer statements collected
- [ ] Sources span positive, negative, and neutral sentiment
- [ ] Recency verified (prioritize last 12 months)
- [ ] Organic vs. incentivized reviews distinguished
- [ ] Exact language preserved (no paraphrasing)
- [ ] Source URL/reference captured for each statement
- [ ] Each pattern appears in 3+ independent sources
- [ ] Frequency/prevalence estimated
- [ ] Contradictions and tensions documented
- [ ] "Jobs to be done" language identified

### Output Artifact: Consumer Language Bank

```
CONSUMER LANGUAGE BANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product/Category: [name]
Statements Analyzed: [count]
Sources: [list]
Date Range: [from] to [to]

TOP PAIN PHRASES (by frequency):
1. "[exact quote]" — appeared [X] times
2. "[exact quote]" — appeared [X] times
3. "[exact quote]" — appeared [X] times

TOP DESIRE PHRASES (by frequency):
1. "[exact quote]" — appeared [X] times
2. "[exact quote]" — appeared [X] times

COMPARISON PHRASES:
1. "[how they compare alternatives]" — [X] times

EMOTIONAL LANGUAGE:
1. "[intense expressions]" — [X] times

CRITICAL OBJECTIONS:
1. [Objection] — Frequency: [X] — Addressable: [Y/N]
2. [Objection] — Frequency: [X] — Addressable: [Y/N]

VOCABULARY TO USE: [words that resonate]
VOCABULARY TO AVOID: [words that trigger negative response]

BEHAVIORAL VS. STATED TENSION:
[Where what people SAY contradicts what they DO]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 3: COMPETITIVE RESEARCH (Layer 3)
### *"Know thy enemy better than thyself"*

**Objective:** Systematically map competitor positioning, claims, and gaps.

> **"Find out all you possibly can about the merits, faults and sales arguments of competitors, and then keep quiet about them. Profound knowledge of other cookers will help you put your positive case more convincingly."**
> — David Ogilvy, *The Theory and Practice of Selling the Aga Cooker*

### Step 3.1 — Competitor Identification

```
elicit: true
question: "Who are the main competitors?"
format: list
minimum: 3
maximum: 10
```

**Define competitive set:**
- [ ] **Direct competitors** identified (same category, same audience)
- [ ] **Indirect competitors** identified (different category, same job-to-be-done)
- [ ] **Substitute solutions** identified (including "do nothing")
- [ ] Market share or relative size estimated
- [ ] **Tier classification** applied (leader/challenger/niche)

### Step 3.2 — Competitive Ad & Message Collection

**Mandatory Collection Sources:**
- Meta Ad Library (free — all active FB/IG ads)
- Google Ads Transparency Center
- LinkedIn Ad Library
- TikTok Creative Center
- Landing pages (capture with screenshots + copy)
- Email sequences (subscribe to competitors)
- Sales collateral (request demos)

**For each competitor, collect:**

| Competitor | Channel | Headline | Primary Claim | Running Time | Winner? |
|------------|---------|----------|---------------|--------------|---------|
| [name] | Meta | "[headline]" | "[claim]" | Xx days | ✅/❌ |

**Note:** Ads running 4+ weeks = likely performing

### Step 3.3 — Positioning Gap Analysis

**Identify what competitors are NOT saying/claiming:**

```
UNCLAIMED POSITIONS: Benefits no competitor owns
[list]

UNDER-PROVEN CLAIMS: Claims made without strong proof
[list]

AUDIENCE GAPS: Segments competitors ignore
[list]

FORMAT GAPS: Ad types/channels competitors underuse
[list]

OBJECTION GAPS: Concerns competitors don't address
[list]
```

### Checklist 3.1 — Competitive Research Quality Gate

- [ ] All active ads captured for top 5 competitors
- [ ] Ad longevity noted (4+ weeks = likely performing)
- [ ] Landing pages archived with copy extracted
- [ ] Headlines and hooks cataloged
- [ ] Claims and proof points documented
- [ ] Visual patterns and formats noted
- [ ] Offer structures mapped (pricing, guarantees, bonuses)

### Output Artifact: Competitive Intelligence Matrix

```
COMPETITIVE INTELLIGENCE MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category: [name]
Competitors Analyzed: [count]
Ads Reviewed: [count]
Collection Date: [date]

POSITIONING MAP:
| Competitor | Type | Primary Claim | Proof Type | Tone | Gap |
|------------|------|---------------|------------|------|-----|
| [Name]     | Direct | [Claim]    | [Type]     | [X]  | [X] |
| [Name]     | Indirect | [Claim]  | [Type]     | [X]  | [X] |
| [Name]     | Substitute | [Claim]| [Type]     | [X]  | [X] |

TOP COMPETITOR HEADLINES (by estimated performance):
1. [Competitor]: "[Headline]" — Running [X] weeks
2. [Competitor]: "[Headline]" — Running [X] weeks

UNCLAIMED TERRITORY:
• [Position/claim no competitor owns]
• [Audience segment no competitor targets]
• [Proof type no competitor uses]

WHITE SPACE OPPORTUNITIES:
1. [Specific positioning opportunity]
2. [Specific positioning opportunity]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 4: EVIDENCE SYNTHESIS (Layer 4)
### *"The second most important decision: what should you promise?"*

**Objective:** Convert research into positioning, proposition, and proof stack.

> **"We have learned that the effect of your advertising on sales depends more on this decision than on any other: How should you position your product? The results of your campaign depend less on how we write your advertising than on how your product is positioned."**
> — David Ogilvy, "How to Create Advertising That Sells" (1972)

### Step 4.1 — Positioning Decision

**Positioning Criteria (all must be true):**
- [ ] **Differentiated** — Competitors cannot credibly claim this
- [ ] **Relevant** — Consumers actually care about this
- [ ] **Credible** — We can prove this
- [ ] **Sustainable** — Defensible over time
- [ ] **Ownable** — We can own this in consumer minds

### Step 4.2 — Proposition Development

> **"A promise is not a claim, or a theme, or a slogan. It is a benefit for the consumer."**
> — David Ogilvy, *Ogilvy on Advertising*

**Proposition Template:**
```
FOR [target audience]
WHO [have this problem/desire]
[PRODUCT] IS THE [category]
THAT [key benefit/promise]
BECAUSE [reason why/proof]
```

### Step 4.3 — Proof Stack Assembly

**Proof Hierarchy (use in this order):**
1. Third-party verification (tests, certifications)
2. Specific numbers and measurements
3. Ingredient/component specifics
4. Process/method details
5. Expert endorsements
6. Customer results (verified)
7. Testimonials (lowest, but better than no proof)

### Step 4.4 — Big Idea Test

> **"Did it make me gasp when I first saw it? Do I wish I had thought of it myself? Is it unique? Does it fit the strategy to perfection? Could it be used for 30 years?"**
> — David Ogilvy, *Ogilvy on Advertising*

- [ ] Did it make me gasp when I first saw it?
- [ ] Do I wish I had thought of it myself?
- [ ] Is it unique?
- [ ] Does it fit the strategy to perfection?
- [ ] Could it be used for 30 years?

### Checklist 4.1 — Synthesis Quality Gate

- [ ] Anchor fact selected and fully verified
- [ ] Minimum 5 supporting proofs compiled
- [ ] Each proof has complete provenance
- [ ] Legal/compliance review flag set (if needed)
- [ ] Proof ranking by strength completed
- [ ] Counter-arguments anticipated and addressed

### Output Artifact: Strategic Brief

```
STRATEGIC BRIEF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product/Service: [name]
Date: [date]
Prepared by: [agent + human reviewer]

1. POSITIONING STATEMENT
[Single sentence positioning]

2. TARGET AUDIENCE
Primary: [description]
Secondary: [description]
Anti-target: [who this is NOT for]

3. PROPOSITION (The Promise)
[Benefit statement in consumer language]

4. REASON WHY (The Proof)
Anchor Fact: [single most compelling proof]
Source: [full provenance]

Supporting Proofs:
• [Proof 1] — Source: [x] — Tier: [GOLD/SILVER]
• [Proof 2] — Source: [x] — Tier: [GOLD/SILVER]
• [Proof 3] — Source: [x] — Tier: [GOLD/SILVER]
• [Proof 4] — Source: [x] — Tier: [GOLD/SILVER]
• [Proof 5] — Source: [x] — Tier: [GOLD/SILVER]

5. TONE & CHARACTER
[Brand voice guidelines]

6. MANDATORIES
Must include: [list]
Must avoid: [list]
Legal requirements: [list]

7. SUCCESS METRICS
Primary: [behavioral metric — sales, signups, etc.]
Secondary: [diagnostic metric]

8. COMPETITIVE FRAME
We win against [competitor] by [differentiation]
We lose to [competitor] when [weakness]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 5: CREATIVE DEVELOPMENT (Layer 5 - Part 1)
### *"Now, and only now, start writing"*

**Objective:** Generate creative executions grounded in research.

> **"Give me the freedom of a tight brief."**
> — David Ogilvy

### Step 5.1 — Headline Generation (25+)

> **"On the average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar."**
> — David Ogilvy, *Ogilvy on Advertising*

**Headline Types to Generate:**
1. Direct benefit statement
2. News/announcement format
3. How-to promise
4. Question format
5. Testimonial/quote format
6. Specific number/statistic
7. Challenge/provocative
8. Story/curiosity opener

**Words that work (Ogilvy):**
- Free, New, How to, Suddenly, Now, Announcing, Introducing
- Improvement, Amazing, Sensational, Remarkable, Revolutionary
- Quick, Easy, Wanted, Challenge, Compare, Bargain, Hurry

**Headline rules:**
- [ ] Contains benefit
- [ ] Contains brand (when relevant)
- [ ] 6-12 words
- [ ] Works alone (doesn't need body copy)
- [ ] Flags the right audience

### Step 5.2 — Copy Structure (Ogilvy Long-Copy Model)

> **"The more you tell, the more you sell."**
> — David Ogilvy

```
1. HEADLINE: Captures attention with benefit or curiosity
2. SUBHEAD: Expands/qualifies the headline
3. LEAD: Hooks with problem recognition or promise
4. ANCHOR FACT: The single most compelling proof
5. PROOF STACK: Additional evidence building credibility
6. OBJECTION HANDLING: Address key barriers
7. OFFER: What exactly they get
8. CALL TO ACTION: Specific next step
9. RISK REVERSAL: Guarantee or safety net
```

### Checklist 5.1 — Creative Quality Gate

- [ ] Minimum 25 headlines generated
- [ ] Each headline connects to strategic brief
- [ ] At least one headline uses anchor fact directly
- [ ] Headlines tested against "self-interest" filter
- [ ] Specificity check (vague headlines rejected)
- [ ] Top 5 candidates selected for testing/review

### Output Artifact: Creative Options Document

```
CREATIVE OPTIONS DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brief Reference: [link to strategic brief]
Date: [date]

TOP 5 HEADLINE CANDIDATES:
1. "[Headline]" — Rationale: [x]
2. "[Headline]" — Rationale: [x]
3. "[Headline]" — Rationale: [x]
4. "[Headline]" — Rationale: [x]
5. "[Headline]" — Rationale: [x]

RECOMMENDED LEAD CONCEPT:
[Opening paragraph/hook]

BIG IDEA TEST SCORE:
Gasp: [Y/N] | Wish I'd thought of it: [Y/N] | Unique: [Y/N]
Fits strategy: [Y/N] | 30-year durability: [Y/N]
TOTAL: [X/5]

PROOF SEQUENCE (for copy):
1. [Anchor fact]
2. [Supporting proof]
3. [Supporting proof]
4. [Supporting proof]

TESTING RECOMMENDATION:
[What to A/B test first and why]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 6: VALIDATION & ACCOUNTABILITY
### *"We sell, or else"*

**Objective:** Ensure research translates to results; maintain feedback loop.

> **"Direct response was my first love and later it became my secret weapon."**
> — David Ogilvy

> **"You people who know direct response have it in your power to rescue the advertising business from its manifold lunacies."**
> — David Ogilvy

### Step 6.1 — Skin in the Game Gates

**GATE 1 — SOURCE**
> "Where does this information come from?"
- [ ] Each critical insight has traceable source (URL, document, quote)
- [ ] Insights without source: DISCARD or FIND source

**GATE 2 — VERIFICATION**
> "Can I verify this independently?"
- [ ] Critical insights cross-checked with 2+ sources
- [ ] Unverified insights marked as such

**GATE 3 — REPRESENTATIVENESS**
> "Does this represent the whole or is it cherry-picking?"
- [ ] Quantitative analysis exists (not just isolated examples)
- [ ] Sample is sufficient (not cherry-picking)

**GATE 4 — HUMAN**
> "Has an expert validated this?"
- [ ] Critical claims reviewed by human specialist
- [ ] If not: DO NOT use in final copy

### Step 6.2 — Red Flags (Stop if any marked)

- [ ] ❌ Insight seems too good to be true
- [ ] ❌ No traceable source
- [ ] ❌ AI "discovered" something nobody else has seen
- [ ] ❌ Numerical data without clear origin
- [ ] ❌ Generalizations without quantitative data
- [ ] ❌ Contradicts what the client said
- [ ] ❌ Cannot be verified independently

**If ANY red flag marked:** STOP and investigate before proceeding.

### Step 6.3 — Pre-Launch Verification

- [ ] All claims verified against original sources
- [ ] Legal/compliance review completed (if required)
- [ ] Anchor fact passes "prove it to a skeptic" test
- [ ] No hallucinated statistics or quotes
- [ ] Competitive claims are defensible
- [ ] Tracking and measurement configured
- [ ] Success metrics defined with baseline
- [ ] Human accountability assigned

### Output Artifact: Validated Insights Document

```
VALIDATED INSIGHTS DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| Insight | Type | Source | Gate 1 | Gate 2 | Gate 3 | Gate 4 | Status |
|---------|------|--------|--------|--------|--------|--------|--------|
| [insight] | PRIMARY | [source] | ✅ | ✅ | ✅ | ✅ | ✅ Approved |
| [insight] | SECONDARY | [source] | ✅ | ✅ | ✅ | ❌ | ⚠️ Review |
| [insight] | INFERENCE | [analysis] | ❌ | - | - | - | ❌ Discarded |

RED FLAGS STATUS: [All clear / X identified and resolved]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 7: TESTING & MEASUREMENT (Layer 5 - Part 2)
### *"Never stop testing"*

**Objective:** Connect research recommendations to business outcomes.

> **"The most important word in the vocabulary of advertising is TEST. If you pretest your product with consumers, and pretest your advertising, you will do well in the marketplace."**
> — David Ogilvy

### Step 7.1 — Metric Hierarchy (Ogilvy-Aligned)

| Priority | Metric | Tier | What it measures |
|----------|--------|------|------------------|
| 1 | Revenue/Sales | GOLD | Did it sell? |
| 2 | Conversions/Signups | GOLD | Did they act? |
| 3 | Cost per acquisition | GOLD | Was it efficient? |
| 4 | Engagement metrics | SILVER | Did they interact? |
| 5 | Awareness/Recall | BRONZE | Did they remember? |

### Step 7.2 — Test Plan

```yaml
test_1:
  variable: "[headline A]" vs "[headline B]"
  hypothesis: "[why A might beat B]"
  primary_metric: "[conversions]"
  duration: "[X days or Y conversions]"
  tie_breaker: "[secondary criterion]"
```

### Step 7.3 — Research Retrospective

After campaign performance data is available:

- [ ] Did winning creative align with research recommendations?
- [ ] Were any research predictions wrong? Why?
- [ ] Which proof points performed best in copy?
- [ ] Which consumer language resonated most?
- [ ] What research should be repeated/updated?
- [ ] What would Ogilvy change if reviewing this?

### Output Artifact: Research Accuracy Scorecard

```
RESEARCH ACCURACY SCORECARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Campaign: [name]
Research Date: [date] | Launch Date: [date]
Review Date: [date]

PREDICTIONS VS. OUTCOMES:
| Prediction | Confidence | Outcome | Accurate? |
|------------|------------|---------|-----------|
| [x]        | [H/M/L]    | [x]     | [Y/N]     |

RESEARCH ACCURACY RATE: [X]%

LESSONS LEARNED:
• [What to repeat]
• [What to improve]
• [What to stop doing]

UPDATED EVIDENCE HIERARCHY:
[Any adjustments to confidence levels based on outcomes]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## FINAL DELIVERABLES

Upon completing CopySearch, you will have:

### 1. Research Charter
- [ ] Decision to inform defined
- [ ] Success criteria established
- [ ] Human accountability assigned

### 2. Technical Fact Sheet
- [ ] 13+ verified facts
- [ ] 3 anchor fact candidates
- [ ] 1 anchor fact selected

### 3. Consumer Language Bank
- [ ] 50+ literal quotes
- [ ] Pain/desire/objection/comparison/emotional language
- [ ] Top 20 words with frequency
- [ ] 5+ JTBDs

### 4. Competitive Intelligence Matrix
- [ ] 3+ competitors analyzed (direct/indirect/substitute)
- [ ] Saturated claims identified
- [ ] Gaps identified
- [ ] Winners analyzed

### 5. Strategic Brief
- [ ] Positioning statement
- [ ] Central promise with reason-why
- [ ] Anti-target defined
- [ ] Success metrics
- [ ] Competitive frame

### 6. Creative Options Document
- [ ] 25+ headlines (8 types)
- [ ] Top 5 selected for testing
- [ ] Copy structure with objection handling, offer, risk reversal

### 7. Validated Insights Document
- [ ] Complete source audit
- [ ] Red flags resolved
- [ ] All 4 validation gates passed

### 8. Test Plan & Scorecard
- [ ] Variables defined
- [ ] Metrics established
- [ ] Hypotheses documented

---

## REFERENCED MATERIALS

- `checklists/copysearch-checklist.md` — Validation checklist
- `templates/copysearch-template.md` — Output template
- `reference/copysearch-anti-hallucination.md` — Anti-hallucination protocols
- `reference/copysearch-quick-reference.md` — Quick reference cards
- `reference/copysearch-tool-stack.md` — Tool recommendations

---

## OGILVY'S FINAL WORD

> **"Advertising people who ignore research are as dangerous as generals who ignore decodes of enemy signals."**
> — David Ogilvy

> **"The consumer isn't a moron. She is your wife. You insult her intelligence if you assume that a mere slogan and a few vapid adjectives will persuade her to buy anything."**
> — David Ogilvy

> **"Research methodology is fundamentally about epistemic discipline, not tools."**
> — The Ogilvy tradition

---

*Task based on: docs/research/david-ogilvy-research-engineering-meta-framework.md*
*Methodology reconstructed from primary evidence (1935-1985)*
