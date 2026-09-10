> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Diagnose Awareness Level - Schwartz Method

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Diagnose Awareness Level |
| **status** | `active` |
| **responsible_executor** | @eugene-schwartz, @copy-chief |
| **execution_type** | `Hybrid` |
| **pattern** | EXEC-HY-001 |
| **rationale** | Diagnóstico errado direciona TODA a copy incorretamente. AI analisa, humano valida antes de prosseguir. |

### Hybrid Execution Flow

```yaml
hybrid_flow:
  ai_phase:
    action: "Analisar inputs e propor nível de awareness"
    output: "Diagnóstico preliminar com evidências"
    confidence_threshold: 0.8

  human_phase:
    action: "Validar diagnóstico antes de prosseguir"
    checkpoint: "AWARENESS_VALIDATION"
    questions:
      - "O nível diagnosticado faz sentido dado seu conhecimento do mercado?"
      - "Há nuances que o AI pode ter perdido?"
      - "Confirma este nível para direcionar a copy?"

  fallback:
    trigger: "Humano discorda do diagnóstico"
    action: "Refazer análise com input adicional do humano"
```

### ⚠️ Por que Hybrid?

```
IMPACTO DE ERRO: ALTO

Se diagnosticar Level 2 quando é Level 4:
→ Copy vai educar quem já conhece o produto
→ Prospect pensa "eu já sei disso"
→ Bounce rate alto, conversão baixa

Se diagnosticar Level 4 quando é Level 2:
→ Copy vai direto para venda
→ Prospect pensa "do que estão falando?"
→ Confusão, zero conversão

CONCLUSÃO: Validação humana obrigatória antes de criar copy
```

---

## Purpose

Diagnose the prospect's level of awareness using Eugene Schwartz's 5 Levels framework from "Breakthrough Advertising" (1966). This is the MANDATORY FIRST STEP before writing ANY copy.

## When to Use

- **ALWAYS FIRST** - Before writing any copy for any project
- Before choosing headline strategy
- Before determining copy length
- Before selecting proof types
- When copy isn't converting (might be awareness mismatch)
- When entering new markets
- When repositioning existing products

## Schwartz on Awareness

```
"The copywriter's first job is not to create desire—
but to channel and direct desires that already exist.

Your prospect already has desires.
Your job is to connect your product to those desires.

The LEVEL at which you connect depends entirely
on how AWARE they are of:
1. Their problem
2. Your solution
3. Your product specifically"

— Eugene Schwartz, Breakthrough Advertising (1966)
```

## The 5 Levels of Awareness

```
AWARENESS SPECTRUM:

LEVEL 5: MOST AWARE ─────────────────────────────────┐
"Ready to buy YOUR product"                          │
- Know you, know product, just need deal             │
                                                     │
LEVEL 4: PRODUCT-AWARE ──────────────────────────────│
"Know your product, not convinced yet"               │
- Know what you sell, need more proof                │
                                                     │
LEVEL 3: SOLUTION-AWARE ─────────────────────────────│
"Know solutions exist, not yours specifically"       │
- Know problem can be solved, comparing options      │
                                                     │
LEVEL 2: PROBLEM-AWARE ──────────────────────────────│
"Know they have problem, don't know solutions"       │
- Feel the pain, don't know fixes exist              │
                                                     │
LEVEL 1: UNAWARE ────────────────────────────────────┘
"Don't know they have a problem"
- No conscious awareness of need
```

## Inputs

```yaml
required:
  - product_name: What you're selling
  - target_market: Who you're selling to
  - market_context: Industry/niche details

optional:
  - competitor_landscape: Who else serves this market
  - current_marketing: What you're currently saying
  - customer_feedback: What customers say about you
  - search_data: What terms people search
  - sales_call_notes: What prospects ask/say
```

## Workflow

### Step 1: Gather Diagnostic Data

```
DIAGNOSTIC QUESTIONS:

1. SEARCH BEHAVIOR
□ What do prospects search for?
   - Problem terms (Level 1-2)
   - Solution terms (Level 3)
   - Product/brand terms (Level 4-5)

2. COMPETITOR AWARENESS
□ Do prospects compare products?
   - Yes → Level 3-4
   - No, don't know options → Level 2
   - No, don't know they need → Level 1

3. SALES CONVERSATION
□ When prospects contact you, they:
   - Ask for price/availability → Level 4-5
   - Ask "do you do X?" → Level 3
   - Describe problem, ask if you can help → Level 2
   - Don't contact you (you cold approach) → Level 1

4. AWARENESS SIGNALS
□ Check these indicators:
   - Media coverage of problem → Level 2+ likely
   - Established competitors → Level 3+ likely
   - Brand recognition → Level 4-5 likely
   - Industry is new/emerging → Level 1-2 likely
```

### Step 2: Diagnose Each Level

```
═══════════════════════════════════════════════════════════════════
LEVEL 1: COMPLETELY UNAWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect doesn't know they have a problem that needs solving.
They're not looking for anything. Life seems fine to them.

DIAGNOSTIC QUESTIONS:
□ Is this a NEW category that didn't exist before?
□ Do prospects need to be EDUCATED about the problem?
□ Would they say "I didn't know that was an issue"?
□ Is there no search volume for problem terms?

EXAMPLES:
- Selling cybersecurity to a company that thinks they're safe
- Selling estate planning to someone who hasn't thought about death
- Selling productivity software to someone who doesn't realize
  they're inefficient

IF YES → LEVEL 1 CONFIRMED
Copy Strategy: Long-form education, story-based, identify with
their current situation, gradually reveal the hidden problem.

═══════════════════════════════════════════════════════════════════
LEVEL 2: PROBLEM-AWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect knows they have a problem. They feel the pain.
But they don't know solutions exist—or believe solutions are
available/affordable/accessible to them.

DIAGNOSTIC QUESTIONS:
□ Do they talk about/complain about the problem?
□ Have they accepted it as "just how things are"?
□ Do they search for information about the problem (not solutions)?
□ Have they given up looking for answers?

EXAMPLES:
- Parent who's frustrated with child's grades but doesn't know
  tutoring services exist
- Business owner who hates bookkeeping but doesn't know about
  automated accounting software
- Someone with chronic back pain who thinks "it's just age"

IF YES → LEVEL 2 CONFIRMED
Copy Strategy: Acknowledge and agitate the problem. Show that
solutions exist. Introduce the concept of fixing this.

═══════════════════════════════════════════════════════════════════
LEVEL 3: SOLUTION-AWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect knows solutions exist. They're aware of the category.
They may have tried competitors. But they don't know YOUR
specific product or why it's different.

DIAGNOSTIC QUESTIONS:
□ Do they search for generic solution terms?
□ Have they tried other products in category?
□ Do they compare features/prices?
□ Do they read reviews of category products?

EXAMPLES:
- Someone shopping for "best project management software" (not
  searching for "Asana" or "Monday.com" specifically)
- Someone looking for "weight loss programs" (not a specific brand)
- Someone researching "CRM systems" (comparing options)

IF YES → LEVEL 3 CONFIRMED
Copy Strategy: Differentiate. Show why YOUR solution is better.
Introduce unique mechanism. Compare favorably to alternatives.

═══════════════════════════════════════════════════════════════════
LEVEL 4: PRODUCT-AWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect knows YOUR product. They've heard of you, maybe visited
your site, maybe signed up for something. But they haven't bought.
They're not yet convinced YOU are the right choice.

DIAGNOSTIC QUESTIONS:
□ Have they visited your site before?
□ Have they signed up for email/lead magnet?
□ Do they follow you on social media?
□ Have they engaged with your content?
□ Do they search for your brand name?

EXAMPLES:
- Email subscriber who hasn't bought
- Webinar attendee who didn't convert
- Someone who bookmarked your sales page
- Past customer considering a new purchase

IF YES → LEVEL 4 CONFIRMED
Copy Strategy: Remove objections. Pile on proof. Strengthen
guarantee. Add urgency. Make it easy to say yes.

═══════════════════════════════════════════════════════════════════
LEVEL 5: MOST AWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect knows you, trusts you, wants what you sell, and is
READY to buy. They just need the right offer, deal, or trigger.

DIAGNOSTIC QUESTIONS:
□ Have they bought from you before?
□ Have they requested pricing/availability?
□ Are they on waitlist or waiting for launch?
□ Have they told others they plan to buy?

EXAMPLES:
- Past customer ready for repeat purchase
- Someone who said "let me know when you launch"
- Hot lead who asked for proposal
- Trial user ready to convert to paid

IF YES → LEVEL 5 CONFIRMED
Copy Strategy: Make the offer. Lead with deal. Be direct.
Don't educate—just present the transaction.
```

### Step 3: Document Diagnosis

```
AWARENESS LEVEL DIAGNOSIS

Product: ____________________
Market: ____________________
Date: ____________________

LEVEL DETERMINATION:
□ Level 1: Unaware
□ Level 2: Problem-Aware
□ Level 3: Solution-Aware
□ Level 4: Product-Aware
□ Level 5: Most Aware

PRIMARY LEVEL: ___
(Most prospects fall here)

EVIDENCE:
1. ____________________
2. ____________________
3. ____________________
```

### Step 4: Copy Implications

```
COPY STRATEGY BY LEVEL:

┌─────────┬────────────────────┬─────────────┬─────────────────────┐
│ LEVEL   │ HEADLINE APPROACH  │ COPY LENGTH │ PROOF FOCUS         │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 1       │ Story/Curiosity    │ Very Long   │ Education first     │
│         │ "A strange thing   │ (5000+ wds) │ Establish problem   │
│         │ happened..."       │             │ existence           │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 2       │ Problem agitation  │ Long        │ Solution is         │
│         │ "If you suffer     │ (2000-5000) │ possible            │
│         │ from..."           │             │ Others succeeded    │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 3       │ Mechanism/Big Idea │ Medium-Long │ Why THIS solution   │
│         │ "The new way to    │ (1500-3000) │ Unique mechanism    │
│         │ [achieve X]..."    │             │ Comparison          │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 4       │ Offer/Proof        │ Medium      │ Why buy NOW         │
│         │ "Get [product]     │ (1000-2000) │ Risk reversal       │
│         │ with [bonus]..."   │             │ Testimonials        │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 5       │ Deal/Direct        │ Short       │ Just the offer      │
│         │ "[Product] now     │ (500-1000)  │ Price, deal, CTA    │
│         │ 50% off..."        │             │                     │
└─────────┴────────────────────┴─────────────┴─────────────────────┘
```

### Step 5: Headline Templates by Level

```
LEVEL 1 (UNAWARE) HEADLINES:
- Story-based: "A Strange Thing Happened When..."
- Curiosity: "The Hidden Reason Why [common thing] Is..."
- Identification: "If You're [describe person], Read This..."
- Pattern interrupt: "What [authority] Discovered About..."

LEVEL 2 (PROBLEM-AWARE) HEADLINES:
- Problem naming: "Are You Tired of [problem]?"
- Agitation: "The [problem] That's Costing You [consequence]..."
- Empathy: "If [problem] Is Ruining Your [area of life]..."
- Solution teaser: "There's Finally a Way to End [problem]..."

LEVEL 3 (SOLUTION-AWARE) HEADLINES:
- Mechanism: "The [unique mechanism] That [achieves result]..."
- Comparison: "Why [your approach] Beats [common approach]..."
- New discovery: "The New Science of [achieving X]..."
- Specific result: "How [method] Delivers [specific result]..."

LEVEL 4 (PRODUCT-AWARE) HEADLINES:
- Proof: "[Number] People Have Already [achieved result]..."
- Objection: "Finally, [product] Without [common objection]..."
- Risk reversal: "Try [product] Risk-Free for [time]..."
- Urgency: "[Product] Available Now With [bonus/deal]..."

LEVEL 5 (MOST AWARE) HEADLINES:
- Direct offer: "[Product] - Now [price/deal]"
- Reminder: "Your [product] Is Waiting..."
- Deadline: "Last Chance: [Product] [Offer] Ends [date]..."
- Action: "Get [Product] Now - [simple CTA]..."
```

## Outputs

### Output Format

```yaml
diagnosis:
  product: [Product name]
  market: [Target market]
  awareness_level: [1-5]
  level_name: [Unaware | Problem-Aware | Solution-Aware | Product-Aware | Most Aware]
  confidence: [HIGH | MEDIUM | LOW]

evidence:
  - [Evidence point 1]
  - [Evidence point 2]
  - [Evidence point 3]

copy_implications:
  headline_approach: [Recommended approach]
  copy_length: [Recommended length]
  proof_focus: [What to prove]
  opening_strategy: [How to start copy]

headline_templates:
  - "[Template 1]"
  - "[Template 2]"
  - "[Template 3]"

next_step: |
  [Specific recommendation for this level]

sophistication_check: |
  After awareness level is set, also run diagnose-market-sophistication.md
  to determine HOW to position within this awareness level.
```

## Common Mistakes

```
MISTAKE 1: Assuming Level 3+ When Market is Level 1-2
- Symptom: Copy talks about product when they don't know they need it
- Fix: Back up. Educate about the problem first.

MISTAKE 2: Writing Level 5 Copy for Level 3 Market
- Symptom: "Buy now!" to people who don't know your product
- Fix: Build awareness first. Differentiate. Then sell.

MISTAKE 3: Over-educating Level 4-5 Prospects
- Symptom: Long education copy to people ready to buy
- Fix: Get to the offer faster. They already believe.

MISTAKE 4: Ignoring Mixed Audiences
- Solution: Create multiple entry points/funnels for different levels
- Or: Start at lowest level and graduate them through copy
```

## Integration

- **Next Step**: diagnose-market-sophistication.md
- **Uses**: schwartz-diagnosis-checklist.md
- **Informs**: All copy creation tasks
- **Agent**: @eugene-schwartz (Tier 0 - Diagnosis)
