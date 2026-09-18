# copy-vendas-por-chamada · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-vendas-por-chamada.md` uma skill chamada copy-vendas-por-chamada. Quando eu pedir algo como "script de call para [oferta]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# A LIGAÇÃO · Call, fechamento e objeções

Script de ligação, script de fechamento e os algoritmos de objeção: para cada "vou pensar", o que perguntar e o que dizer. O agente monta o roteiro da conversa inteira e a árvore de respostas, para que a call siga um método e não o humor do dia.

## When to Use

- O pedido envolve: script de call, ligação de vendas, fechamento, objeções.
- Diga: "script de call para [oferta]" ou "objeções de [produto] e como responder".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create call script | `references/create-call-script.md` |
| create close script | `references/create-close-script.md` |
| create objection algorithms | `references/create-objection-algorithms.md` |

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

- `references/create-call-script.md`
- `references/create-close-script.md`
- `references/create-objection-algorithms.md`
- `templates/objection-algorithms-tmpl.yaml`


---

## Referência: references/create-call-script.md

# Create Call Script Task

## Task Metadata

```yaml
id: create-call-script
version: 1.0.0
category: sales
tier_recommendation: 2
primary_frameworks:
  - 6-Step No BS Sales Process (Dan Kennedy)
  - 3Ms Triangle (Dan Kennedy)
  - Takeaway Selling (Dan Kennedy)
  - Urgency Engineering (Dan Kennedy)
min_output_lines: 500
primary_agent: dan-kennedy
```

---

## Purpose

Generate comprehensive high-ticket sales call scripts using Dan Kennedy's proven frameworks for $5,000+ offers. This task creates complete 45-60 minute call structures that handle rapport, discovery, presentation, objection handling, and urgency-driven closing.

**Core Principle:** "Stop prospecting. Start positioning. Stop selling. Start closing." (Dan Kennedy)

---

## When to Use This Task

### High-Value Use Cases

- High-ticket offers ($5,000+)
- Coaching and consulting sales
- Mastermind enrollment calls
- Premium program applications
- Strategy/discovery calls
- One-call-close scenarios
- Sales team training

### Ideal Scenarios

| Scenario | Recommended Focus |
|----------|-------------------|
| Coaching program ($5K-$25K) | Full 6-Step process + Takeaway positioning |
| Mastermind enrollment ($10K+) | Heavy qualification + Urgency engineering |
| Consulting engagement ($15K+) | Authority establishment + 3Ms matching |
| Premium course ($3K-$8K) | Condensed framework + Deadline close |
| Done-for-you service ($10K+) | Diagnosis-heavy + Value stack presentation |

---

## Foundational Frameworks

### Framework 1: The 6-Step No BS Sales Process (Dan Kennedy)

The complete Kennedy sales conversation flow:

```
STEP 1: PRE-QUALIFY BEFORE THE CONVERSATION
    "Before we schedule a call, I need to know..."
    "This is specifically for people who..."
    → Only talk to prospects who meet your criteria
    → Time is money - don't waste it on non-buyers

STEP 2: ESTABLISH AUTHORITY IMMEDIATELY
    "Let me be direct - I'm expensive and I'm selective..."
    "I've helped X businesses achieve Y..."
    → Position yourself as the expert from second one
    → Use takeaway positioning from the start

STEP 3: DIAGNOSE BEFORE PRESCRIBING
    "What's the biggest challenge you're facing?"
    "What have you tried before?"
    "What would it mean to solve this?"
    "What happens if you don't fix this?"
    → Ask questions that make THEM sell themselves

STEP 4: PRESENT SOLUTION AS INEVITABLE CONCLUSION
    "Based on what you told me..."
    "The three options are..."
    "Given your situation, option X is clearly..."
    → Make your offer the only logical choice

STEP 5: HANDLE OBJECTIONS WITH QUESTIONS
    Price: "Is it that you don't have the money, or that you're not sure this is the right investment?"
    Think: "What specifically do you need to think about?"
    Spouse: "What do you think their main concern will be?"
    → Never argue - ask questions instead

STEP 6: CLOSE WITH URGENCY
    "I can only hold this price until [deadline]..."
    "We only have X spots remaining..."
    "If you enroll today, you also get [bonus]..."
    → Give them a reason to decide NOW
```

### Framework 2: 3Ms Triangle - Message-Market-Media Match

Kennedy's core targeting framework for maximum relevance:

```
MARKET (Who)
├── Segment by industry/niche
├── Identify problem severity
├── Assess buying stage
└── Know their unique situation

MESSAGE (What)
├── Headline speaks to THEIR specific pain
├── Story features someone LIKE THEM
├── Benefits prioritize THEIR priorities
└── Proof shows results for THEIR situation

MEDIA (Where)
├── Reach them where THEY are
├── Use channels they trust
└── Match communication style
```

**Key Principle:** "Each person believes himself, his business, his situation, his needs to be unique—and is most responsive to someone who acknowledges that."

### Framework 3: Takeaway Selling

Reverse psychology that makes prospects chase you:

```
QUALIFICATION TAKEAWAY:
"This program isn't for everyone. Before we go further,
let me ask a few questions to see if you're even a fit..."

AVAILABILITY TAKEAWAY:
"I'm not even sure I have room in my schedule right now.
Let me check... Actually, I have ONE opening next month."

PRICE TAKEAWAY:
"Let me be upfront - this is a significant investment.
Most people aren't in a position to make this decision.
Is this something you're seriously ready for?"

OUTCOME TAKEAWAY:
"I have to be honest - this system requires work.
Not everyone follows through. Are you committed to
actually implementing what I teach?"
```

**Psychology:** People want what they can't have. The moment you push, they pull away. The moment you pull away, they chase.

### Framework 4: Urgency Engineering

Systematic approach to driving immediate action:

```
DEADLINE-DRIVEN:
├── Hard date cutoff
├── Enrollment window closes
├── Example: "Enrollment closes December 31st"
└── Strength: HIGH if real and enforced

QUANTITY-LIMITED:
├── Limited spots available
├── Capacity constraints
├── Example: "Only 10 spots - 3 remaining"
└── Strength: HIGH if verifiable

BONUS REMOVAL:
├── Bonus removed after deadline
├── Time-limited extras
├── Example: "Bonus expires midnight"
└── Strength: MEDIUM - less urgent than main offer

PRICE INCREASE:
├── Price goes up after deadline
├── Early-bird pricing
├── Example: "Price increases $500 January 1st"
└── Strength: MEDIUM - needs justification

PROGRESSIVE URGENCY:
├── Week out: "Enrollment closing soon..."
├── Day before: "Last day - deadline tomorrow..."
├── Final hours: "2 spots remaining - deadline tonight"
```

**CRITICAL:** Urgency MUST be genuine and verifiable. If you say it closes, IT CLOSES. No extensions. Fake urgency destroys trust permanently.

---

## Required Inputs

```yaml
required:
  product_name: string
    description: What you're selling
    example: "Executive Mastermind Program"

  price: number
    description: Price point of the offer ($5,000+)
    example: 15000

  offer_summary: string
    description: What they get (deliverables)
    example: "12-month mastermind with quarterly retreats, weekly calls, private community"

  target_avatar: object
    description: Ideal client profile
    example:
      industry: "Business coaches"
      revenue_range: "$250K-$1M"
      main_pain: "Stuck at current revenue ceiling"
      desired_outcome: "Scale to $2M+ without burnout"

  main_objections: array[string]
    description: Top 3-5 objections you hear most
    example:
      - "I need to think about it"
      - "It's too expensive"
      - "I need to talk to my spouse"
      - "The timing isn't right"

optional:
  call_duration: number
    description: Call length in minutes
    default: 45

  guarantee: string
    description: Risk reversal offered
    example: "90-day money-back guarantee"

  payment_options: array[string]
    description: Available payment plans
    example: ["Pay in full $15,000", "12 payments of $1,500"]

  urgency_element: string
    description: Legitimate scarcity/deadline
    example: "Only 8 spots per cohort - 3 remaining"

  case_studies: array[object]
    description: Success stories to reference
    example:
      - name: "Sarah"
        before: "$300K revenue, working 60+ hours"
        after: "$1.2M revenue, working 35 hours"
        timeframe: "18 months"

  qualification_criteria: array[string]
    description: What makes a qualified lead
    example:
      - "Revenue $250K+"
      - "Team of 2+"
      - "Decision maker"
      - "Ready to invest"
```

---

## Step-by-Step Workflow

### Phase 1: Pre-Call Preparation

Before writing the script, complete this analysis:

```
MARKET ANALYSIS (3Ms - Market):
□ Who is the ideal prospect? [Industry, revenue, team size]
□ What makes them a "starving crowd"? [Desperate pain]
□ What unique challenges do they face? [Their specific situation]
□ What have they likely tried? [Failed solutions]
□ Why didn't those work? [Gap identification]

MESSAGE ALIGNMENT (3Ms - Message):
□ What specific pain does headline address? [THEIR pain]
□ What story features someone LIKE THEM? [Relatable case]
□ What benefits matter most to THEM? [Priority mapping]
□ What proof exists for THEIR situation? [Relevant evidence]

QUALIFICATION CRITERIA:
□ Minimum revenue: $_____
□ Decision authority: [Yes/Needs approval]
□ Investment capacity: [Can afford/Needs financing]
□ Urgency level: [Ready now/Exploring]
□ Implementation ability: [Can execute/Needs support]
```

### Phase 2: Call Structure Selection

Choose the appropriate 45-60 minute structure:

```
PHASE 1: RAPPORT & AGENDA (5 minutes)
├── Warm greeting
├── Set expectations for the call
├── Gain permission to ask questions
└── Establish takeaway positioning

PHASE 2: DISCOVERY (15-20 minutes)
├── Current situation questions
├── Past attempts and failures
├── Cost of the problem
├── Desired future state
└── Urgency assessment

PHASE 3: PRESENTATION (10-15 minutes)
├── Transition from pain to solution
├── Present unique mechanism
├── Case study that mirrors them
├── Value stack with components
└── Investment and guarantee

PHASE 4: CLOSE (10-15 minutes)
├── Price presentation
├── Payment options
├── Urgency elements
├── Objection handling
└── Decision request
```

### Phase 3: Opening Script (Minutes 0-5)

**Objective:** Build rapport, establish authority, set takeaway frame.

```
KENNEDY-STYLE OPENING:

"[Name], this is [You] from [Company].
Can you hear me okay? Good.

Before we dive in, let me set some expectations.

I'm going to ask you some questions about your business.
Then, if it seems like we might be a fit,
I'll share what we do and see if it makes sense.

I have to be upfront - we're selective about who we work with.
Not everyone qualifies, and that's okay.
If it's not a fit, I'll tell you directly.

Fair enough?

[Wait for yes]

Good. So tell me - what made you apply for this call?"
```

**Authority Establishment Variations:**

```
VARIATION 1: CREDENTIAL LEAD
"Before we start, quick background - I've worked with [X] businesses
in your space and typically see [result]. Just so you know who you're
talking to. Now, what's going on in your business?"

VARIATION 2: TAKEAWAY LEAD
"I'll be honest - my calendar is full and I almost didn't take this call.
But something in your application caught my eye.
Tell me more about [specific detail they mentioned]..."

VARIATION 3: RESULTS LEAD
"I just got off a call with a client who [recent win].
Your situation sounds similar. Walk me through what's happening..."
```

### Phase 4: Discovery Questions (Minutes 5-25)

**Objective:** Diagnose before prescribing. Make them sell themselves.

```
TIER 1: SITUATION (3-5 questions)
Purpose: Understand current state

"Walk me through your business right now..."
"What's your current revenue? Team size?"
"How long have you been at this level?"
"What does a typical week look like for you?"

TIER 2: PROBLEM (3-5 questions)
Purpose: Surface explicit challenges

"What's the biggest challenge holding you back?"
"Where do things break down?"
"What's frustrating you most about [situation]?"
"If I asked your [spouse/team], what would they say the problem is?"

TIER 3: PAST ATTEMPTS (3-5 questions)
Purpose: Understand failed solutions

"What have you tried to solve this?"
"How much have you invested in trying to fix this?"
"Why do you think those didn't work?"
"What was missing from those approaches?"

TIER 4: COST (3-5 questions)
Purpose: Quantify the pain

"What's this costing you - in revenue, time, opportunity?"
"If this continues for another year, what does that look like?"
"What opportunities are you missing because of this?"
"How is this affecting you personally?"

TIER 5: DESIRED OUTCOME (2-3 questions)
Purpose: Paint the picture of success

"In a perfect world, what would [solved] look like?"
"What would that mean for your business? Your life?"
"What would you do differently if this was handled?"
```

**Discovery Flow Example:**

```
YOU: "Walk me through your business right now..."

THEM: "I'm a business coach doing about $300K."

YOU: "How long have you been at that level?"

THEM: "About 2 years. Can't seem to break through."

YOU: "What have you tried to get past it?"

THEM: "Courses, a mastermind, hired a marketing agency..."

YOU: "How much have you invested in those?"

THEM: "Probably $50K over two years."

YOU: "And did any of it work?"

THEM: "Not really. I'm still stuck."

YOU: "What do you think was missing?"

THEM: "I don't know... accountability? A real system?"

YOU: "What's staying stuck costing you?"

THEM: "At least $200K in lost revenue per year. Plus the stress is killing me."

YOU: "If this continues another year, what happens?"

THEM: "I'll probably burn out or quit. I can't keep doing this."

YOU: "On a scale of 1-10, how urgent is solving this?"

THEM: "It's a 10. I need to figure this out now."

[PAIN ESTABLISHED - Ready for transition]
```

### Phase 5: Transition to Presentation (Minutes 25-28)

**Objective:** Bridge from their pain to your solution as the inevitable conclusion.

```
TRANSITION TEMPLATE:

"Based on what you've told me, I think I understand your situation.

Let me make sure I have this right:
- You're stuck at [revenue level] and can't break through
- You've tried [solutions] but they didn't work because [gap]
- This is costing you [quantified cost] per year
- What you really want is [desired outcome]

Did I get that right?

[Wait for confirmation]

Good. Here's what I think is actually happening...
[Diagnose the real problem]

And here's what it would take to fix it...
[Transition to presentation]"
```

**Kennedy-Style Diagnosis:**

```
"Here's what I see...

You don't have a [surface problem] problem.
You have a [root cause] problem.

The reason [past solutions] didn't work is because
they were treating the symptom, not the cause.

What you actually need is [your unique mechanism].

Let me show you what that looks like..."
```

### Phase 6: Presentation (Minutes 28-42)

**Objective:** Present solution as the only logical choice.

```
PRESENTATION STRUCTURE:

SECTION 1: THE MECHANISM (2-3 min)
"Here's WHY you're stuck and what it actually takes to fix it..."
[Explain your unique approach that addresses their specific situation]

SECTION 2: THE SOLUTION (3-4 min)
"Our [program] is designed specifically for [their situation]..."
[Overview connecting to everything they said in discovery]

SECTION 3: CASE STUDY (2-3 min)
"Let me tell you about [Client] - their situation was almost identical to yours..."
[Story that mirrors their situation with specific results]

SECTION 4: THE VALUE STACK (3-4 min)
"Here's everything included:
- [Core component] - This alone is what moves the needle...
- [Component 2] - This handles [specific problem they mentioned]...
- [Component 3] - This ensures [their desired outcome]...
- [Bonus] - For people who start today..."

SECTION 5: THE INVESTMENT (1-2 min)
"The investment for all of this is [price].
We also have [payment option] if that works better."

SECTION 6: THE GUARANTEE (1 min)
"And to make this a complete no-brainer:
[Explain guarantee that addresses their specific fears]"

SECTION 7: THE URGENCY (1 min)
"The only thing is [legitimate scarcity/deadline]..."
```

### Phase 7: Close with Urgency (Minutes 42-55)

**Objective:** Get a decision NOW using Kennedy's closing techniques.

```
CLOSING SEQUENCE:

"So based on everything we discussed:
- You have [pain]
- It's costing you [amount]
- You want [outcome]
- [Program] is designed exactly for your situation
- You're protected by [guarantee]

The investment is [price], or [payment option].

[Urgency element]

Does it make sense to move forward?"
```

**Kennedy Urgency Closes:**

```
THE TAKEAWAY CLOSE:
"Look, I'm not going to convince you. Either you see the value or you don't.
What I will say is - we only have [X] spots remaining,
and based on your application, you're exactly who we designed this for.
But if you're not ready, that's okay. What would you need to see to be ready?"

THE DEADLINE CLOSE:
"I can only hold this price until [date].
After that, I can't make any promises.
If you want in at this level, the time is now."

THE SCARCITY CLOSE:
"We only take [X] clients per cohort.
Right now, [Y] spots are left.
Once they're gone, you'd have to wait [timeframe].
Should I reserve one for you?"

THE BONUS REMOVAL CLOSE:
"The [bonus] I mentioned is only available for people who start today.
Tomorrow, that's gone and won't come back.
Do you want me to include it?"
```

---

## Objection Handling Scripts

### Objection 1: "I need to think about it"

```
KENNEDY RESPONSE:

"Of course. Thinking is good.

[CLARIFY]
What specifically do you need to think about?

Is it:
- Whether this can actually work for you?
- The investment?
- The timing?
- Something else?

[Wait for real objection]

THEM: [Reveals true concern]

YOU: [Address that specific concern, then:]

"If we can handle that, are you ready to move forward?"

---

ALTERNATIVE - THE KENNEDY PUSHBACK:

"I understand. Most people who say that are really saying one of three things:
1. They're not sure it will work
2. They can't afford it
3. They're not ready to commit

Which one is it?

[Wait - let them answer honestly]

[Address the REAL objection]"
```

### Objection 2: "It's too expensive"

```
KENNEDY RESPONSE:

"I appreciate you being direct.

[CLARIFY]
When you say expensive - compared to what?

- Compared to what staying stuck is costing you?
- Compared to what you expected?
- Compared to another option?

---

IF COMPARED TO COST OF INACTION:

"You told me this problem is costing you [amount] per year.
The investment here is [price].

If we solve this, you don't just get [result].
You stop losing [amount] every year.

Which costs more - solving the problem or living with it?"

---

IF THEY CAN'T AFFORD IT:

"I understand. Let me ask you something...

Is it that you literally don't have access to [amount],
or that you're not convinced it's the right investment?

[If not convinced]: "What would you need to see to feel confident?"

[If truly no funds]: "What resources could you access?
Do you have credit? Savings? Could you liquidate anything?
Because if this is really a priority..."

[Payment plan option if available]
```

### Objection 3: "I need to talk to my spouse"

```
KENNEDY RESPONSE:

"Absolutely. Big decisions should be made together.

[CLARIFY]
When you talk to them, what do you think they'll say?"

---

IF SPOUSE WILL BE SUPPORTIVE:

"Great. Since they'll likely support it, let's get them on now.
I can answer their questions directly, and you can decide together.
Can we call them?"

---

IF SPOUSE WILL HAVE CONCERNS:

"What concerns do you think they'll have?"

[Listen]

"Let me address those now so you can explain:
- Concern 1: [Response]
- Concern 2: [Response]
- Concern 3: [Response]

If YOU'RE confident, are you ready to move forward?

[If yes]:
"Talk to them tonight. Share what we discussed.
Let's reconnect tomorrow at [time] for a final decision."

[Schedule specific follow-up - don't leave it open]
```

### Objection 4: "The timing isn't right"

```
KENNEDY RESPONSE:

"I hear you. Timing matters.

Let me ask - is this a 'not right now' or 'never'?"

---

IF NOT RIGHT NOW:

"When would be better? And what changes between now and then?

Here's what I've observed in [X years]:
The 'perfect time' rarely arrives on its own.
People who wait for perfect timing usually wait forever.

What would have to be true for NOW to be the right time?"

---

KENNEDY REFRAME:

"Let me be direct...

You've been dealing with this problem for [time they mentioned].
You've already invested [money they mentioned] trying to fix it.
It's costing you [amount] every year you don't solve it.

How much longer can you afford to wait?

If not now, when? And what will waiting cost you?"
```

---

## Post-Close Protocols

### Reinforcement Script

```
"Congratulations. You made the right decision.

Here's why this is going to work for you:
1. [Connect to their specific pain]
2. [Connect to their specific goal]
3. [Reference similar case study]

Over the next day or two, doubts might creep in.
That's normal. When that happens, remember:
- You have [guarantee], so you're protected
- [X] people in your situation have succeeded
- I wouldn't have accepted you if I didn't think you'd succeed

Here's what happens next:
1. [Immediate step]
2. [First 24 hours]
3. [First week]

Your first action is [specific task].
Can you do that by [deadline]?

Welcome to [program]. Let's get to work."
```

### Follow-Up Sequence (Non-Closes)

```
FOLLOW-UP 1 (24 hours):
Subject: Following up - quick question

[Name],

After our call, I've been thinking about your situation.
Specifically, [specific pain point they mentioned].

Have you made a decision on how to address this?

[Your name]

---

FOLLOW-UP 2 (72 hours):
Subject: [Specific result] - like [case study name]

[Name],

Just spoke with [client] who had the exact same challenge.
[Brief result they achieved].

Still thinking about [their situation]?

[Your name]

---

FOLLOW-UP 3 (7 days):
Subject: Closing your file

[Name],

I want to respect your time, so I'll be direct.

Are you still interested in [solving problem]?

If yes - let's schedule a quick call. [Urgency element].
If no - no hard feelings. I'll close your file.

Either way, let me know?

[Your name]
```

---

## Quality Metrics

### Call Performance Tracking

```
ACTIVITY METRICS:
□ Calls completed: _____
□ Average call duration: _____ minutes
□ Discovery-to-pitch ratio: _____% (Target: 60%+)

CONVERSION METRICS:
□ Show rate: _____% (Target: 80%+)
□ Close rate: _____% (Target: 30-40%)
□ Cash collected: _____% (Target: 70%+)
□ Refund rate: _____% (Target: <5%)

QUALITY INDICATORS:
□ Questions asked per call: _____ (Target: 12-18)
□ Objections surfaced: _____ (Target: 2-4)
□ Close attempts: _____ (Target: 3-5)
□ Takeaway moments: _____ (Target: 2-3)
```

### Benchmark Targets for High-Ticket

| Metric | Poor | Average | Good | Elite |
|--------|------|---------|------|-------|
| Show Rate | <60% | 70% | 80% | 90%+ |
| Close Rate | <20% | 30% | 40% | 50%+ |
| Avg Call Length | <35min | 45min | 55min | 60min |
| Cash Collected | <50% | 65% | 75% | 85%+ |
| Refund Rate | >10% | 7% | 4% | <2% |

---

## Common Mistakes to Avoid

| Mistake | Impact | Kennedy Fix |
|---------|--------|-------------|
| Pitching too early | -40% close rate | Complete discovery FIRST - diagnose before prescribing |
| No takeaway positioning | -25% close rate | Establish you're the prize from the start |
| Weak authority | -30% close rate | Lead with credentials and results |
| Arguing objections | -35% close rate | Ask questions, never argue |
| No urgency | -40% close rate | Every close needs a deadline |
| Fake urgency | -50% trust | Only use genuine, verifiable scarcity |
| Open-ended follow-up | -60% conversion | Always schedule specific next step |

---

## Output Format

```yaml
generated_output:
  format: markdown
  sections:
    - call_framework_summary
    - pre_call_preparation_checklist
    - opening_script (with authority establishment)
    - discovery_questions (customized to their market)
    - transition_script
    - presentation_script (with value stack)
    - closing_sequences (with urgency elements)
    - objection_scripts (for each objection provided)
    - post_close_reinforcement
    - follow_up_sequence
    - performance_tracking_scorecard
```

---

## Integration with Other Tasks

### Before This Task
- `avatar-research.md` - Deep understanding of target market (3Ms - Market)
- `create-offer.md` - Build the high-ticket offer to sell
- `create-unique-mechanism.md` - Develop differentiation for presentation

### After This Task
- `create-email-sequence.md` - Follow-up for non-closes
- `apply-sugarman-triggers.md` - Add psychological triggers to script

### Complementary Tasks
- `create-objection-algorithms.md` - Deep objection handling library
- `build-authority-arsenal.md` - Proof elements for presentation

---

## Workflows Using This Task

| Workflow | Phase | Purpose |
|----------|-------|---------|
| wf-3-high-ticket.yaml | Phase 3 | Sales call script for $5K+ offers |

---

## References

### Primary Sources
- Kennedy, Dan. "No B.S. Sales Success" - 6-Step Sales Process
- Kennedy, Dan. "No B.S. Direct Marketing" - 3Ms Framework
- Kennedy, Dan. "Magnetic Marketing" - Market Selection
- Kennedy, Dan. "Ultimate Sales Letter" - Urgency Engineering

### Related Agent
`squads/copy/agents/dan-kennedy.md`

---

*Task Version: 1.0.0*
*Last Updated: 2026-01-23*
*Primary Frameworks: 6-Step No BS Sales Process, 3Ms Triangle, Takeaway Selling, Urgency Engineering*
*Primary Agent: Dan Kennedy*
*Minimum Output: 500 lines*


---

## Referência: references/create-close-script.md

# Create Close Script Task

## Purpose
Generate sales closing scripts using Alex Hormozi's frameworks. Handle objections, close deals.

## When to Use
- Building a sales team
- Training closers
- Low close rate on calls
- Need to handle objections better
- Selling high-ticket offers ($1k+)

## Inputs

```yaml
required:
  - product_name: What you're selling
  - price: Price point
  - offer_summary: What they get
  - main_objections: Top 3 objections you hear

optional:
  - call_type: Setter/Closer/One-call close
  - call_length: Typical call duration
  - guarantee: Guarantee offered
  - payment_options: Payment plans available
  - qualification_criteria: What makes a good lead
```

## Workflow

### Step 1: Call Framework Selection
```
SELECT CALL TYPE:

□ ONE-CALL CLOSE (Simple offer, <$2k)
  Duration: 30-45 min
  Structure: Discover → Pitch → Close

□ SETTER + CLOSER (High-ticket, >$5k)
  Setter: 15-20 min (qualify + book)
  Closer: 45-60 min (full presentation)

□ STRATEGY CALL (Consultative)
  Duration: 60-90 min
  Structure: Audit → Prescription → Close
```

### Step 2: Opening Framework
```
OPENING SCRIPT (First 2 minutes):

"Hey [Name], this is [Your Name] from [Company].
Before we dive in, I just want to set some expectations.

I'm going to ask you some questions to understand your situation.
Then I'll share what we do and how it might help.
And if it makes sense for both of us, we can talk about working together.
If it doesn't make sense, I'll tell you that too.

Sound fair?"

[Wait for confirmation]

"Great. So tell me, what made you book this call today?"
```

### Step 3: Discovery Framework (V.A.C.A.)
```
V - VALIDATE THE PROBLEM

"Tell me about [problem area]..."
"How long has this been going on?"
"What have you tried before?"
"Why didn't that work?"

A - AMPLIFY THE PAIN

"What's this costing you?"
"What happens if nothing changes?"
"How does this affect [other area]?"
"On a scale 1-10, how urgent is solving this?"

C - CONFIRM THE DESIRE

"In a perfect world, what would [outcome] look like?"
"If you had [result], what would that mean for you?"
"What's the deadline for achieving this?"

A - ASSESS READINESS

"Are you the decision maker?"
"If we can solve this, are you ready to move forward today?"
"What would need to happen for you to say yes?"
```

### Step 4: Presentation Framework
```
PITCH STRUCTURE:

1. RECAP THEIR SITUATION
"So just to make sure I understand...
You're dealing with [problem].
You've tried [previous attempts] but they didn't work because [reason].
And what you really want is [dream outcome].
Did I get that right?"

2. INTRODUCE THE SOLUTION
"Based on what you've shared, here's how we can help..."
[Present offer focusing on their specific pain points]

3. VALUE STACK
"Here's everything you get:
- [Core deliverable] - normally worth $X
- [Bonus 1] - worth $Y
- [Bonus 2] - worth $Z
Total value: $[sum]"

4. PRICE DROP
"The investment for all of this is not $[anchor price].
It's just $[actual price]."

5. GUARANTEE
"And to make this a complete no-brainer,
[explain guarantee in detail]."

6. URGENCY
"The only caveat is [scarcity/urgency element]."
```

### Step 5: Objection Handling (V.A.C.A. Framework)
```
FRAMEWORK: VALIDATE → ASK → COUNTER → ASK FOR SALE

OBJECTION: "I need to think about it"

VALIDATE: "I totally understand. This is a big decision."

ASK: "Just so I understand - when you say you need to think about it,
what specifically are you thinking about?"

[Listen for real objection]

COUNTER: [Address the real objection]

ASK FOR SALE: "So if we can [solve that], are you ready to move forward?"

---

OBJECTION: "It's too expensive"

VALIDATE: "I hear you. Price is definitely important."

ASK: "Help me understand - is it that you don't have the money,
or you're not sure it's worth the investment?"

[If not sure it's worth it]:
"What would the result we discussed be worth to you?"
"If you could guarantee [outcome], what would you pay for that?"

[If don't have money]:
"What could you do to make this happen?"
"Do you have access to credit?"
"We do have payment options - would $X/month work?"

---

OBJECTION: "I need to talk to my spouse/partner"

VALIDATE: "Of course. Smart decisions are made together."

ASK: "When you talk to them, what do you think they'll say?"

[If they'll say yes]:
"Great! Why don't we get them on the phone right now?"

[If they'll have concerns]:
"What concerns do you think they'll have?"
[Address those concerns]
"If you can address those concerns, do YOU want to do this?"

---

OBJECTION: "I've been burned before"

VALIDATE: "I'm really sorry to hear that. That's frustrating."

ASK: "What happened?"

[Listen to their story]

COUNTER: "The difference with us is [differentiator].
Plus, we have [guarantee] so you're protected."

ASK FOR SALE: "Does that give you enough confidence to move forward?"
```

### Step 6: Closing Sequences
```
CLOSE #1: ASSUMPTIVE CLOSE
"Great! Let's get you started. Do you prefer to pay in full or use the payment plan?"

CLOSE #2: ALTERNATIVE CLOSE
"Would you like to start with [Option A] or [Option B]?"

CLOSE #3: URGENCY CLOSE
"The [bonus/price/spots] is only available until [deadline].
Should we lock in your spot now?"

CLOSE #4: TAKEAWAY CLOSE
"Based on what you've shared, I'm not actually sure this is right for you.
[Pause]
Why do you feel it would be a good fit?"

CLOSE #5: INVERSION CLOSE
"What would need to happen for you to say yes right now?"
[Give them what they ask for if possible]
"Done. So we're good to go?"

CLOSE #6: PUPPY DOG CLOSE
"Why don't you try it for [trial period] with our guarantee.
If it's not everything I promised, you get every penny back.
What do you have to lose?"
```

### Step 7: Payment Handling
```
PAYMENT SCRIPT:

"Perfect! Let's get you set up.
I'm going to send you a link to complete your order.

[Send link]

Can you confirm you received it?

Great. I'll stay on the line while you complete it.
Let me know when you're on the confirmation page."

[If hesitation]
"Is there something stopping you from completing this right now?"
[Handle final objection]

[On confirmation]
"Congratulations! Welcome to [program/company].
Here's what happens next..."
```

### Step 8: Post-Close Protocol
```
AFTER THE SALE:

1. REINFORCE THE DECISION
"You made a great decision today.
Here's why this is going to work for you..."

2. PREVENT BUYER'S REMORSE
"Over the next 24-48 hours, you might have doubts.
That's totally normal. When that happens, [reassurance]."

3. SET EXPECTATIONS
"Here's exactly what you can expect:
- [Immediate access/delivery]
- [First 24 hours]
- [First week]
- [First 30 days]"

4. NEXT STEPS
"Your immediate next step is [specific action].
Can you do that in the next [time]?"
```

## Output

```yaml
format: markdown
sections:
  - call_framework_overview
  - opening_script
  - discovery_questions
  - presentation_script
  - objection_scripts (per objection)
  - closing_sequences
  - payment_handling
  - post_close_protocol
```

## Call Metrics Targets

| Metric | Target | Red Flag |
|--------|--------|----------|
| Show Rate | >70% | <50% |
| Close Rate (Qualified) | >30% | <15% |
| Average Call Length | 45-60 min | <30 min |
| Cash Collected | >60% in full | <40% |
| Refund Rate | <10% | >15% |

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Pitching too early | -50% close | Complete discovery first |
| Not handling "think about it" | -30% close | Dig for real objection |
| Weak urgency | -25% close | Add real deadline |
| Not asking for sale | -40% close | Always ask directly |
| Giving up after 1 no | -20% close | Average close takes 5 asks |

---

*Task Version: 1.0*
*Primary Framework: $100M Closing Playbook (Alex Hormozi)*


---

## Referência: references/create-objection-algorithms.md

# Create Objection Algorithms - Copywriter Response Patterns

## Metadata
```yaml
task_id: create-objection-algorithms
version: 1.0.0
category: agent-creation
difficulty: intermediate
elicit: true
parent_task: create-copywriter-agent.md
phase: 6
dependencies:
  tasks:
    - tasks/extract-frameworks.md
    - tasks/extract-signature-phrases.md
  templates:
    - templates/objection-algorithms-tmpl.yaml
inputs:
  required:
    - source_directory: "Path to source materials"
    - frameworks_file: "Previously extracted frameworks ({pasta}/{slug}/analysis/frameworks.yaml)"
    - signature_phrases_file: "Previously extracted phrases ({pasta}/{slug}/analysis/signature-phrases.yaml)"
  optional:
    - communication_dna_file: "Communication DNA for vocabulary reference"
outputs:
  - Objection algorithms file (YAML)
  - 5 complete objection response algorithms
  - Each algorithm with 5 steps using copywriter's voice
```

## Objective

Create 5 systematic objection-handling algorithms that embody the copywriter's unique voice, frameworks, and philosophy. These algorithms enable the AI agent to respond to common objections authentically, using the copywriter's vocabulary, signature phrases, and proven frameworks.

**Why This Matters:**
- Objection handling reveals a copywriter's true philosophy
- Authentic responses require their actual frameworks and vocabulary
- Systematic algorithms ensure consistent, on-brand responses

---

## PREREQUISITES

### Required Inputs

Before starting this task, ensure you have:

| Input | File Location | Required |
|-------|---------------|----------|
| Frameworks | `{pasta}/{slug}/analysis/frameworks.yaml` | Yes |
| Signature Phrases | `{pasta}/{slug}/analysis/signature-phrases.yaml` | Yes |
| Communication DNA | `{pasta}/{slug}/analysis/communication-dna.yaml` | Recommended |
| Source Materials | `{pasta}/{slug}/sources/` | Yes |

```
elicit: true
question: "Please confirm the following files are available:"
fields:
  - copywriter_name: "Copywriter name (e.g., Dan Koe)"
  - slug: "Mind slug (e.g., dan_koe)"
  - frameworks_path: "Path to frameworks.yaml"
  - phrases_path: "Path to signature-phrases.yaml"
```

### Quality Gate: Prerequisites

- [ ] Frameworks file exists with 10 documented frameworks
- [ ] Signature phrases file exists with 42+ phrases
- [ ] Access to source materials for objection mining
- [ ] Output template available: `templates/objection-algorithms-tmpl.yaml`

---

## PHASE 1: IDENTIFY COMMON OBJECTIONS

### Step 1.1: Mine Objections from Source Materials

Read ALL source files looking for:

1. **Direct objections addressed** — When the copywriter responds to "but what about..."
2. **Anticipated objections** — When they preemptively answer concerns
3. **Audience pain points** — Fears, doubts, and blockers they mention
4. **FAQ content** — Questions they answer repeatedly

**Search patterns:**
- "But..." followed by a response
- "The problem is..."
- "People think... but actually..."
- "Common mistake is thinking..."
- "You might be wondering..."
- "The objection I hear most..."

### Step 1.2: Categorize Objections

Organize discovered objections into 5 universal categories:

| Category | Description | Example Triggers |
|----------|-------------|------------------|
| **Time/Resource Scarcity** | "I don't have time/money" | "I'm too busy", "I can't afford", "I don't have resources" |
| **Competence Doubt** | "I don't know enough" | "I'm not qualified", "I don't know what to write", "I'm not an expert" |
| **Market Saturation** | "The market is too crowded" | "Too many competitors", "Niche is saturated", "It's been done" |
| **Credibility Concern** | "Who am I to do this?" | "I don't have credentials", "No one will listen to me", "I need more experience" |
| **Audience Building** | "I need audience first" | "I don't have followers", "How do I get noticed?", "I need to build a platform first" |

### Step 1.3: Document Specific Triggers

For EACH category, document the specific ways the copywriter's audience expresses the objection:

```yaml
objection_category:
  name: "Time/Resource Scarcity"
  triggers_from_sources:
    - "I don't have time to create content"
    - "I can't write consistently"
    - "I'm too busy with my day job"
  copywriter_response_pattern:
    observed_in: "[Source file name]"
    approach: "[How they typically respond]"
```

### Quality Gate: Objection Mining

- [ ] Read minimum 20 source files for objection content
- [ ] Identified objections in all 5 categories
- [ ] Documented specific trigger phrases from sources
- [ ] Noted how copywriter typically responds

---

## PHASE 2: MAP FRAMEWORKS TO OBJECTIONS

### Step 2.1: Load Extracted Frameworks

Read the frameworks file: `{pasta}/{slug}/analysis/frameworks.yaml`

List all 10 frameworks:
1. [Framework 1 name]
2. [Framework 2 name]
...
10. [Framework 10 name]

### Step 2.2: Map Frameworks to Objection Categories

For each objection category, identify which framework(s) best address it:

| Objection Category | Primary Framework | Secondary Framework |
|--------------------|-------------------|---------------------|
| Time/Resource Scarcity | [Framework name] | [Framework name] |
| Competence Doubt | [Framework name] | [Framework name] |
| Market Saturation | [Framework name] | [Framework name] |
| Credibility Concern | [Framework name] | [Framework name] |
| Audience Building | [Framework name] | [Framework name] |

**Selection Criteria:**
- Framework directly addresses the underlying belief
- Framework provides actionable solution
- Framework is memorable and quotable

### Step 2.3: Extract Framework Principles for Responses

For each mapped framework, extract:
- Core principle (one sentence)
- Key components to reference
- Memorable example from the framework

### Quality Gate: Framework Mapping

- [ ] All 5 objection categories have at least one primary framework
- [ ] Framework selections make logical sense
- [ ] Framework principles extracted for use in algorithms

---

## PHASE 3: MAP SIGNATURE PHRASES TO OBJECTIONS

### Step 3.1: Load Signature Phrases

Read the phrases file: `{pasta}/{slug}/analysis/signature-phrases.yaml`

### Step 3.2: Select Key Phrases for Each Objection

For each objection category, select 3-5 signature phrases that:
- Directly address the objection
- Reframe the limiting belief
- Inspire action or confidence

| Objection Category | Key Phrases |
|--------------------|-------------|
| Time/Resource Scarcity | ["phrase 1", "phrase 2", "phrase 3"] |
| Competence Doubt | ["phrase 1", "phrase 2", "phrase 3"] |
| Market Saturation | ["phrase 1", "phrase 2", "phrase 3"] |
| Credibility Concern | ["phrase 1", "phrase 2", "phrase 3"] |
| Audience Building | ["phrase 1", "phrase 2", "phrase 3"] |

### Step 3.3: Note Phrase Context

For each selected phrase, note:
- Original context from source
- How to adapt it for objection handling
- Natural insertion point in the response

### Quality Gate: Phrase Mapping

- [ ] 3-5 phrases selected for each objection category
- [ ] Phrases are genuinely relevant (not forced)
- [ ] Context documented for natural usage

---

## PHASE 4: CREATE OBJECTION ALGORITHMS

### Algorithm Structure

Each algorithm must follow this 5-step structure:

```yaml
algorithm_name:
  name: "[Descriptive Name]"
  trigger: "When the prospect/reader says something like..."
  trigger_examples:
    - "[Specific phrase 1]"
    - "[Specific phrase 2]"
    - "[Specific phrase 3]"

  algorithm:
    step_1_acknowledge:
      name: "ACKNOWLEDGE"
      purpose: "Validate their concern without agreeing with the limiting belief"
      action: "[Specific acknowledgment in copywriter's voice]"
      scripts:
        - "[Script option 1]"
        - "[Script option 2]"

    step_2_reframe:
      name: "REFRAME"
      purpose: "Shift perspective using copywriter's philosophy"
      action: "[How to reframe the objection]"
      framework_reference: "[Framework name]"
      scripts:
        - "[Script option 1]"
        - "[Script option 2]"

    step_3_evidence:
      name: "EVIDENCE"
      purpose: "Provide proof or example that supports the reframe"
      action: "[What evidence to present]"
      evidence_types:
        - "[Type of evidence 1]"
        - "[Type of evidence 2]"

    step_4_vision:
      name: "VISION"
      purpose: "Paint the positive future if they move past this objection"
      action: "[What future to describe]"
      signature_phrases:
        - "[Phrase 1]"
        - "[Phrase 2]"

    step_5_action:
      name: "ACTION"
      purpose: "Propose specific next step"
      action: "[What action to suggest]"
      call_to_action: "[Specific CTA]"

  resolution: "[Expected outcome when this algorithm is applied]"

  key_phrases:
    - "[Signature phrase 1]"
    - "[Signature phrase 2]"
    - "[Signature phrase 3]"

  framework_reference: "[Primary framework used]"

  full_example: |
    [Complete example response using this algorithm]
```

### Step 4.1: Create Algorithm 1 - Time/Resource Scarcity

**Trigger:** "I don't have time to create content / write consistently / build this"

**Algorithm Focus:**
- Reframe time as investment, not expense
- Show how small, consistent actions compound
- Reference relevant productivity/efficiency framework
- Use signature phrases about consistency/compound effect

**Template to fill:**
```yaml
time_scarcity_algorithm:
  name: "Time Scarcity Resolution"
  trigger: "When prospect says they don't have time"
  trigger_examples:
    - "I don't have time to create content"
    - "I'm too busy with my day job"
    - "I can't write consistently with my schedule"

  algorithm:
    step_1_acknowledge:
      name: "ACKNOWLEDGE"
      action: "[Validate without agreeing]"
      # Fill based on copywriter's typical acknowledgment style

    step_2_reframe:
      name: "REFRAME"
      action: "[Shift from 'no time' to 'priority' or 'efficiency']"
      framework_reference: "[Relevant framework]"

    step_3_evidence:
      name: "EVIDENCE"
      action: "[Example of someone who succeeded despite time constraints]"

    step_4_vision:
      name: "VISION"
      action: "[Describe the future freedom content creates]"

    step_5_action:
      name: "ACTION"
      action: "[Specific small action they can take today]"

  resolution: "Prospect understands that [outcome]"
  key_phrases: [# Select from signature phrases]
  framework_reference: "[Framework name]"
```

### Step 4.2: Create Algorithm 2 - Competence Doubt

**Trigger:** "I don't know what to write / I'm not qualified / I don't have expertise"

**Algorithm Focus:**
- Reframe expertise as experience + curiosity, not credentials
- Show how teaching = learning = content
- Reference relevant content creation framework
- Use signature phrases about learning in public

### Step 4.3: Create Algorithm 3 - Market Saturation

**Trigger:** "The market is too crowded / Too much competition / This has been done"

**Algorithm Focus:**
- Reframe competition as validation
- Show how unique perspective = differentiation
- Reference relevant positioning/differentiation framework
- Use signature phrases about uniqueness

### Step 4.4: Create Algorithm 4 - Credibility Concern

**Trigger:** "I'm not an expert / Who am I to teach this / I don't have credentials"

**Algorithm Focus:**
- Reframe credibility as results + relatability, not credentials
- Show how being a few steps ahead is enough
- Reference relevant authority/proof framework
- Use signature phrases about authenticity

### Step 4.5: Create Algorithm 5 - Audience Building

**Trigger:** "I don't have followers / I need an audience first / How do I get noticed"

**Algorithm Focus:**
- Reframe audience building as content building
- Show how value attracts audience (not the reverse)
- Reference relevant audience/content framework
- Use signature phrases about serving > seeking

### Quality Gate: Algorithm Creation

For EACH algorithm:
- [ ] Trigger clearly defined with 3+ examples
- [ ] All 5 steps complete with scripts
- [ ] Framework reference is valid (from extracted frameworks)
- [ ] Key phrases are actual signature phrases (not made up)
- [ ] Full example demonstrates natural flow
- [ ] Response sounds like the copywriter (not generic)

---

## PHASE 5: VALIDATE VOICE AUTHENTICITY

### Step 5.1: Voice Consistency Check

For each algorithm, verify:

| Check | Algorithm 1 | Algorithm 2 | Algorithm 3 | Algorithm 4 | Algorithm 5 |
|-------|-------------|-------------|-------------|-------------|-------------|
| Uses copywriter's vocabulary? | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| References their frameworks? | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| Includes signature phrases? | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| Matches their tone? | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| Avoids forbidden words? | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |

### Step 5.2: Distinctiveness Test

**Test question:** Could this response come from a generic AI or does it clearly reflect this specific copywriter?

For each algorithm, rate distinctiveness:
- **High:** Clearly sounds like [Copywriter Name]
- **Medium:** Could be identified with context
- **Low:** Too generic, needs revision

**Target:** All algorithms should rate High.

### Step 5.3: Framework Integration Verification

For each algorithm, verify the framework reference:
- [ ] Framework exists in frameworks.yaml
- [ ] Framework is relevant to the objection
- [ ] Framework principles are correctly applied
- [ ] Framework vocabulary is used

### Quality Gate: Voice Validation

- [ ] All 5 algorithms pass voice consistency checks
- [ ] All 5 algorithms rate "High" on distinctiveness
- [ ] All framework references are valid
- [ ] No generic/filler content remains

---

## PHASE 6: OUTPUT AND DOCUMENTATION

### Step 6.1: Compile Final YAML

Using the template: `templates/objection-algorithms-tmpl.yaml`

Create the output file with this structure:

```yaml
# Objection Algorithms - [Copywriter Name]
# Generated by: create-objection-algorithms.md task
# Date: [YYYY-MM-DD]

metadata:
  copywriter: "[Full Name]"
  slug: "[mind_slug]"
  extraction_date: "[YYYY-MM-DD]"
  total_algorithms: 5
  source_files_consulted: [count]
  frameworks_referenced: [list]
  phrases_used: [count]

objection_algorithms:

  - name: "Time Scarcity Resolution"
    # ... [complete algorithm 1]

  - name: "Competence Doubt Resolution"
    # ... [complete algorithm 2]

  - name: "Market Saturation Resolution"
    # ... [complete algorithm 3]

  - name: "Credibility Concern Resolution"
    # ... [complete algorithm 4]

  - name: "Audience Building Resolution"
    # ... [complete algorithm 5]

quality_metrics:
  voice_authenticity: "[high/medium]"
  framework_integration: "[count] frameworks used"
  phrase_integration: "[count] signature phrases used"
  distinctiveness_rating: "[high/medium]"
```

### Step 6.2: Save Output

Save to: `{pasta}/{slug}/analysis/objection-algorithms.yaml`

### Quality Gate: Output

- [ ] File saved to correct location
- [ ] YAML syntax validates (no errors)
- [ ] Metadata section complete
- [ ] All 5 algorithms present and complete
- [ ] Quality metrics documented

---

## FINAL CHECKLIST

### Completion Requirements

- [ ] Phase 1: Objections mined from 20+ source files
- [ ] Phase 2: Frameworks mapped to all 5 objection categories
- [ ] Phase 3: Signature phrases selected for each objection
- [ ] Phase 4: All 5 algorithms created with 5 steps each
- [ ] Phase 5: Voice authenticity validated
- [ ] Phase 6: Output file created and saved

### Quality Standards

- [ ] Exactly 5 algorithms (not more, not less)
- [ ] Each algorithm has exactly 5 steps
- [ ] All key phrases are actual signature phrases
- [ ] All framework references are valid
- [ ] Responses sound like the copywriter
- [ ] YAML syntax is valid
- [ ] No placeholder text remaining

### Integration Verification

- [ ] Algorithms work with existing frameworks.yaml
- [ ] Algorithms work with existing signature-phrases.yaml
- [ ] Output matches template structure
- [ ] Ready for integration into final agent file

---

## TROUBLESHOOTING

### Common Issues

**Issue:** Can't find objection content in sources
**Solution:** Look for FAQ sections, audience Q&A, comment responses, objection handling in sales content

**Issue:** Framework doesn't fit the objection
**Solution:** Choose a different framework or adapt the angle - the framework should naturally address the limiting belief

**Issue:** Signature phrases feel forced
**Solution:** Use fewer phrases, only where they fit naturally - authenticity over quantity

**Issue:** Response sounds generic
**Solution:** Review communication DNA, add more specific vocabulary, include concrete examples from the copywriter's experience

**Issue:** Algorithm too long/verbose
**Solution:** Each step should be 1-3 sentences max, focus on impact not word count

---

## EXAMPLE OUTPUT

For reference, see the objection algorithms in:
- `.aios-core/expansion-packs/copywriter-os/agents/david-ogilvy.md` (objection_algorithms section)
- `.aios-core/expansion-packs/copywriter-os/agents/alex-hormozi.md` (objection_algorithms section)

These demonstrate the expected depth, structure, and voice consistency.

---

*CopywriterOS Task v1.0.0*
*Phase 6 of Create Copywriter Agent Pipeline*


---

## Referência: templates/objection-algorithms-tmpl.yaml

# Objection Algorithms Template
# CopywriterOS - Template for extracted objection handling algorithms
#
# USAGE:
# 1. Execute tasks/create-objection-algorithms.md for the full extraction process
# 2. Use this template to structure the output
# 3. Replace all {{placeholder}} markers with extracted content
#
# INPUTS REQUIRED:
# - {pasta}/{slug}/analysis/frameworks.yaml (for framework references)
# - {pasta}/{slug}/analysis/signature-phrases.yaml (for key phrases)
# - Source materials for objection mining
#
# OUTPUT:
# - {pasta}/{slug}/analysis/objection-algorithms.yaml

template:
  id: objection-algorithms-template-v1
  name: "Objection Algorithms Template"
  version: "1.0.0"
  output:
    format: yaml
    filename: "objection-algorithms.yaml"
    location: "{pasta}/{{slug}}/analysis/"

# =============================================================================
# VARIABLES - Input required
# =============================================================================
variables:
  required:
    - copywriter_name: "Full name (e.g., Dan Koe)"
    - slug: "Snake_case identifier (e.g., dan_koe)"
    - extraction_date: "YYYY-MM-DD format"
    - frameworks_file: "Path to frameworks.yaml"
    - phrases_file: "Path to signature-phrases.yaml"
  optional:
    - communication_dna_file: "Path to communication-dna.yaml"
    - source_directory: "Path to source materials"

# =============================================================================
# OUTPUT FILE TEMPLATE
# =============================================================================
#
# This template defines the structure for the objection-algorithms.yaml output.
# Copy this structure and fill in the content based on extraction.
#
# =============================================================================

output_template: |
  # Objection Algorithms - {{copywriter_name}}
  # Generated by: tasks/create-objection-algorithms.md
  # Template: templates/objection-algorithms-tmpl.yaml
  # Date: {{extraction_date}}

  # =============================================================================
  # METADATA
  # =============================================================================

  metadata:
    copywriter: "{{copywriter_name}}"
    slug: "{{slug}}"
    extraction_date: "{{extraction_date}}"
    total_algorithms: 5
    source_files_consulted: {{source_files_count}}
    frameworks_referenced:
      - "{{framework_1_name}}"
      - "{{framework_2_name}}"
      - "{{framework_3_name}}"
      - "{{framework_4_name}}"
      - "{{framework_5_name}}"
    signature_phrases_used: {{phrases_count}}

  # =============================================================================
  # OBJECTION CATEGORIES MAPPING
  # Document the objections found and how they map to frameworks/phrases
  # =============================================================================

  objection_mapping:

    # Category 1: Time/Resource Scarcity
    time_scarcity:
      description: "Objections about not having time or resources"
      triggers_from_sources:
        - "{{trigger_phrase_1}}"
        - "{{trigger_phrase_2}}"
        - "{{trigger_phrase_3}}"
      primary_framework: "{{framework_name}}"
      key_phrases:
        - "{{phrase_1}}"
        - "{{phrase_2}}"
        - "{{phrase_3}}"

    # Category 2: Competence Doubt
    competence_doubt:
      description: "Objections about not knowing enough or feeling unqualified"
      triggers_from_sources:
        - "{{trigger_phrase_1}}"
        - "{{trigger_phrase_2}}"
        - "{{trigger_phrase_3}}"
      primary_framework: "{{framework_name}}"
      key_phrases:
        - "{{phrase_1}}"
        - "{{phrase_2}}"
        - "{{phrase_3}}"

    # Category 3: Market Saturation
    market_saturation:
      description: "Objections about the market being too crowded"
      triggers_from_sources:
        - "{{trigger_phrase_1}}"
        - "{{trigger_phrase_2}}"
        - "{{trigger_phrase_3}}"
      primary_framework: "{{framework_name}}"
      key_phrases:
        - "{{phrase_1}}"
        - "{{phrase_2}}"
        - "{{phrase_3}}"

    # Category 4: Credibility Concern
    credibility_concern:
      description: "Objections about not being an expert or having credentials"
      triggers_from_sources:
        - "{{trigger_phrase_1}}"
        - "{{trigger_phrase_2}}"
        - "{{trigger_phrase_3}}"
      primary_framework: "{{framework_name}}"
      key_phrases:
        - "{{phrase_1}}"
        - "{{phrase_2}}"
        - "{{phrase_3}}"

    # Category 5: Audience Building
    audience_building:
      description: "Objections about needing followers or audience first"
      triggers_from_sources:
        - "{{trigger_phrase_1}}"
        - "{{trigger_phrase_2}}"
        - "{{trigger_phrase_3}}"
      primary_framework: "{{framework_name}}"
      key_phrases:
        - "{{phrase_1}}"
        - "{{phrase_2}}"
        - "{{phrase_3}}"

  # =============================================================================
  # OBJECTION ALGORITHMS (5 Required)
  # =============================================================================

  objection_algorithms:

    # -------------------------------------------------------------------------
    # ALGORITHM 1: TIME/RESOURCE SCARCITY RESOLUTION
    # -------------------------------------------------------------------------
    - name: "Time Scarcity Resolution"
      category: "time_scarcity"
      trigger: "When prospect/reader says they don't have time or resources"

      trigger_examples:
        - "I don't have time to create content"
        - "I'm too busy with my day job"
        - "I can't write consistently with my schedule"
        - "{{additional_trigger_1}}"
        - "{{additional_trigger_2}}"

      algorithm:
        step_1_acknowledge:
          name: "ACKNOWLEDGE"
          purpose: "Validate their concern without agreeing with the limiting belief"
          action: "{{copywriter_acknowledgment_style}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_2_reframe:
          name: "REFRAME"
          purpose: "Shift perspective using copywriter's philosophy"
          action: "{{how_copywriter_reframes_time_objection}}"
          framework_reference: "{{relevant_framework_name}}"
          framework_principle: "{{core_principle_from_framework}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_3_evidence:
          name: "EVIDENCE"
          purpose: "Provide proof or example that supports the reframe"
          action: "{{what_evidence_to_present}}"
          evidence_types:
            - type: "personal_story"
              content: "{{copywriter_own_example}}"
            - type: "case_study"
              content: "{{example_from_others}}"
            - type: "statistic"
              content: "{{relevant_statistic}}"

        step_4_vision:
          name: "VISION"
          purpose: "Paint the positive future if they move past this objection"
          action: "{{what_future_to_describe}}"
          signature_phrases:
            - "{{phrase_1}}"
            - "{{phrase_2}}"

        step_5_action:
          name: "ACTION"
          purpose: "Propose specific next step"
          action: "{{what_action_to_suggest}}"
          call_to_action: "{{specific_cta}}"

      resolution: "Prospect understands that time is a choice, not a constraint, and commits to starting small"

      key_phrases:
        - "{{signature_phrase_1}}"
        - "{{signature_phrase_2}}"
        - "{{signature_phrase_3}}"

      framework_reference: "{{primary_framework_name}}"

      full_example: |
        {{complete_example_response_using_this_algorithm}}

    # -------------------------------------------------------------------------
    # ALGORITHM 2: COMPETENCE DOUBT RESOLUTION
    # -------------------------------------------------------------------------
    - name: "Competence Doubt Resolution"
      category: "competence_doubt"
      trigger: "When prospect/reader says they don't know enough or feel unqualified"

      trigger_examples:
        - "I don't know what to write about"
        - "I'm not qualified to teach this"
        - "I don't have enough expertise"
        - "{{additional_trigger_1}}"
        - "{{additional_trigger_2}}"

      algorithm:
        step_1_acknowledge:
          name: "ACKNOWLEDGE"
          purpose: "Validate their concern without agreeing with the limiting belief"
          action: "{{copywriter_acknowledgment_style}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_2_reframe:
          name: "REFRAME"
          purpose: "Shift perspective on what 'expertise' means"
          action: "{{how_copywriter_reframes_expertise}}"
          framework_reference: "{{relevant_framework_name}}"
          framework_principle: "{{core_principle_from_framework}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_3_evidence:
          name: "EVIDENCE"
          purpose: "Show that expertise is learned through doing"
          action: "{{what_evidence_to_present}}"
          evidence_types:
            - type: "personal_story"
              content: "{{copywriter_own_journey}}"
            - type: "principle"
              content: "{{learning_in_public_principle}}"
            - type: "reframe"
              content: "{{expertise_redefinition}}"

        step_4_vision:
          name: "VISION"
          purpose: "Show what's possible when they start"
          action: "{{what_future_to_describe}}"
          signature_phrases:
            - "{{phrase_1}}"
            - "{{phrase_2}}"

        step_5_action:
          name: "ACTION"
          purpose: "Propose specific next step"
          action: "{{what_action_to_suggest}}"
          call_to_action: "{{specific_cta}}"

      resolution: "Prospect understands that expertise comes from experience and curiosity, not credentials"

      key_phrases:
        - "{{signature_phrase_1}}"
        - "{{signature_phrase_2}}"
        - "{{signature_phrase_3}}"

      framework_reference: "{{primary_framework_name}}"

      full_example: |
        {{complete_example_response_using_this_algorithm}}

    # -------------------------------------------------------------------------
    # ALGORITHM 3: MARKET SATURATION RESOLUTION
    # -------------------------------------------------------------------------
    - name: "Market Saturation Resolution"
      category: "market_saturation"
      trigger: "When prospect/reader says the market is too crowded"

      trigger_examples:
        - "There's too much competition"
        - "My niche is saturated"
        - "Everything has been done already"
        - "{{additional_trigger_1}}"
        - "{{additional_trigger_2}}"

      algorithm:
        step_1_acknowledge:
          name: "ACKNOWLEDGE"
          purpose: "Validate their observation about competition"
          action: "{{copywriter_acknowledgment_style}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_2_reframe:
          name: "REFRAME"
          purpose: "Shift competition to validation and differentiation"
          action: "{{how_copywriter_reframes_competition}}"
          framework_reference: "{{relevant_framework_name}}"
          framework_principle: "{{core_principle_from_framework}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_3_evidence:
          name: "EVIDENCE"
          purpose: "Show how uniqueness beats competition"
          action: "{{what_evidence_to_present}}"
          evidence_types:
            - type: "market_insight"
              content: "{{competition_validates_demand}}"
            - type: "differentiation_principle"
              content: "{{unique_perspective_value}}"
            - type: "example"
              content: "{{success_in_crowded_market}}"

        step_4_vision:
          name: "VISION"
          purpose: "Show the opportunity in 'crowded' markets"
          action: "{{what_future_to_describe}}"
          signature_phrases:
            - "{{phrase_1}}"
            - "{{phrase_2}}"

        step_5_action:
          name: "ACTION"
          purpose: "Propose specific next step"
          action: "{{what_action_to_suggest}}"
          call_to_action: "{{specific_cta}}"

      resolution: "Prospect understands that competition validates demand and uniqueness is the differentiator"

      key_phrases:
        - "{{signature_phrase_1}}"
        - "{{signature_phrase_2}}"
        - "{{signature_phrase_3}}"

      framework_reference: "{{primary_framework_name}}"

      full_example: |
        {{complete_example_response_using_this_algorithm}}

    # -------------------------------------------------------------------------
    # ALGORITHM 4: CREDIBILITY CONCERN RESOLUTION
    # -------------------------------------------------------------------------
    - name: "Credibility Concern Resolution"
      category: "credibility_concern"
      trigger: "When prospect/reader says they don't have credentials or authority"

      trigger_examples:
        - "Who am I to teach this?"
        - "I'm not an expert yet"
        - "I don't have credentials"
        - "{{additional_trigger_1}}"
        - "{{additional_trigger_2}}"

      algorithm:
        step_1_acknowledge:
          name: "ACKNOWLEDGE"
          purpose: "Validate their concern about authority"
          action: "{{copywriter_acknowledgment_style}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_2_reframe:
          name: "REFRAME"
          purpose: "Shift credibility from credentials to results and relatability"
          action: "{{how_copywriter_reframes_credibility}}"
          framework_reference: "{{relevant_framework_name}}"
          framework_principle: "{{core_principle_from_framework}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_3_evidence:
          name: "EVIDENCE"
          purpose: "Show that results and relatability beat credentials"
          action: "{{what_evidence_to_present}}"
          evidence_types:
            - type: "principle"
              content: "{{few_steps_ahead_principle}}"
            - type: "social_proof"
              content: "{{examples_of_non_credentialed_success}}"
            - type: "authenticity_insight"
              content: "{{vulnerability_builds_trust}}"

        step_4_vision:
          name: "VISION"
          purpose: "Show the power of being relatable vs. unreachable"
          action: "{{what_future_to_describe}}"
          signature_phrases:
            - "{{phrase_1}}"
            - "{{phrase_2}}"

        step_5_action:
          name: "ACTION"
          purpose: "Propose specific next step"
          action: "{{what_action_to_suggest}}"
          call_to_action: "{{specific_cta}}"

      resolution: "Prospect understands that credibility comes from helping others, not from titles"

      key_phrases:
        - "{{signature_phrase_1}}"
        - "{{signature_phrase_2}}"
        - "{{signature_phrase_3}}"

      framework_reference: "{{primary_framework_name}}"

      full_example: |
        {{complete_example_response_using_this_algorithm}}

    # -------------------------------------------------------------------------
    # ALGORITHM 5: AUDIENCE BUILDING RESOLUTION
    # -------------------------------------------------------------------------
    - name: "Audience Building Resolution"
      category: "audience_building"
      trigger: "When prospect/reader says they need more followers first"

      trigger_examples:
        - "I don't have enough followers"
        - "I need to build an audience first"
        - "How do I get noticed with no followers?"
        - "{{additional_trigger_1}}"
        - "{{additional_trigger_2}}"

      algorithm:
        step_1_acknowledge:
          name: "ACKNOWLEDGE"
          purpose: "Validate their concern about starting small"
          action: "{{copywriter_acknowledgment_style}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_2_reframe:
          name: "REFRAME"
          purpose: "Shift from 'need audience to start' to 'value creates audience'"
          action: "{{how_copywriter_reframes_audience}}"
          framework_reference: "{{relevant_framework_name}}"
          framework_principle: "{{core_principle_from_framework}}"
          scripts:
            - "{{script_option_1}}"
            - "{{script_option_2}}"

        step_3_evidence:
          name: "EVIDENCE"
          purpose: "Show how small audiences can generate big results"
          action: "{{what_evidence_to_present}}"
          evidence_types:
            - type: "personal_story"
              content: "{{copywriter_early_days}}"
            - type: "principle"
              content: "{{1000_true_fans_or_similar}}"
            - type: "math"
              content: "{{small_audience_revenue_math}}"

        step_4_vision:
          name: "VISION"
          purpose: "Show what's possible with focus on value over vanity"
          action: "{{what_future_to_describe}}"
          signature_phrases:
            - "{{phrase_1}}"
            - "{{phrase_2}}"

        step_5_action:
          name: "ACTION"
          purpose: "Propose specific next step"
          action: "{{what_action_to_suggest}}"
          call_to_action: "{{specific_cta}}"

      resolution: "Prospect understands that value attracts audience, not the other way around"

      key_phrases:
        - "{{signature_phrase_1}}"
        - "{{signature_phrase_2}}"
        - "{{signature_phrase_3}}"

      framework_reference: "{{primary_framework_name}}"

      full_example: |
        {{complete_example_response_using_this_algorithm}}

  # =============================================================================
  # QUALITY METRICS
  # =============================================================================

  quality_metrics:
    voice_authenticity: "{{high|medium}}"
    framework_integration: "{{count}} frameworks referenced"
    phrase_integration: "{{count}} signature phrases used"
    distinctiveness_rating: "{{high|medium}}"

    validation_checklist:
      - "All 5 algorithms complete with 5 steps each: {{yes|no}}"
      - "All key phrases from signature-phrases.yaml: {{yes|no}}"
      - "All framework references valid: {{yes|no}}"
      - "Responses sound like copywriter (not generic): {{yes|no}}"
      - "No placeholder text remaining: {{yes|no}}"

  # =============================================================================
  # NOTES
  # =============================================================================

  extraction_notes: |
    {{any_important_notes_about_the_extraction_process}}

# =============================================================================
# QUALITY REQUIREMENTS
# =============================================================================

quality_requirements:
  algorithms:
    total_count: 5
    steps_per_algorithm: 5
    required_fields:
      - name
      - category
      - trigger
      - trigger_examples  # minimum 3
      - algorithm  # with steps 1-5
      - resolution
      - key_phrases  # minimum 3
      - framework_reference
      - full_example

  content:
    - "All key phrases must come from signature-phrases.yaml"
    - "All framework references must exist in frameworks.yaml"
    - "Scripts must use copywriter's vocabulary from communication-dna.yaml"
    - "Full examples must sound authentic (not generic)"
    - "Trigger examples must be realistic (from source materials)"

  voice_authenticity:
    - "Acknowledgments reflect copywriter's empathetic style"
    - "Reframes use their specific worldview and philosophy"
    - "Evidence types match their proof style (stories, stats, principles)"
    - "Action steps align with their methodology"

# =============================================================================
# ALGORITHM STRUCTURE REFERENCE
# =============================================================================

algorithm_structure_guide:
  step_1_acknowledge:
    purpose: "Validate without agreeing with limiting belief"
    tone: "Empathetic, understanding"
    length: "1-2 sentences"
    avoid: "Dismissing or minimizing the concern"

  step_2_reframe:
    purpose: "Shift perspective using copywriter's philosophy"
    elements:
      - "Reference to a specific framework"
      - "Core principle that addresses the belief"
    length: "2-3 sentences"

  step_3_evidence:
    purpose: "Provide proof that the reframe is valid"
    evidence_types:
      - "personal_story: Copywriter's own experience"
      - "case_study: Example from students/clients"
      - "statistic: Verifiable number or data point"
      - "principle: Universal truth from their philosophy"
    length: "2-4 sentences"

  step_4_vision:
    purpose: "Paint the positive future"
    elements:
      - "What becomes possible"
      - "Signature phrases that inspire"
    length: "1-2 sentences"
    tone: "Inspiring, concrete"

  step_5_action:
    purpose: "Propose specific, achievable next step"
    characteristics:
      - "Small enough to start today"
      - "Specific enough to be actionable"
      - "Connected to the reframe"
    length: "1 sentence + CTA"

# =============================================================================
# USAGE INSTRUCTIONS
# =============================================================================
#
# 1. Run task: tasks/create-objection-algorithms.md
# 2. Read inputs:
#    - {pasta}/{slug}/analysis/frameworks.yaml
#    - {pasta}/{slug}/analysis/signature-phrases.yaml
#    - Source materials for objection mining
# 3. Copy the output_template section
# 4. Replace all {{placeholder}} markers
# 5. Save to: {pasta}/{slug}/analysis/objection-algorithms.yaml
# 6. Validate against quality_requirements
#
# =============================================================================

# =============================================================================
# EXAMPLE COMPLETED ALGORITHM
# =============================================================================
#
# Reference: .aios-core/expansion-packs/copywriter-os/agents/david-ogilvy.md
# (objection_algorithms section starting at line 1210)
#
# Example from David Ogilvy:
#
#   - name: "Copy Too Long Objection"
#     trigger: "Client says copy is too long"
#     algorithm:
#       step_1:
#         name: "Cite evidence"
#         action: "The more you tell, the more you sell. Based on $1.48B in tracked advertising."
#       step_2:
#         name: "Challenge assumption"
#         action: "Only amateurs use short copy. People read what interests them."
#       step_3:
#         name: "Propose test"
#         action: "Let's test long versus short. I've never seen short beat long for quality products."
#       step_4:
#         name: "Rolls-Royce example"
#         action: "My Rolls-Royce ad had 719 words. It doubled their American sales in one year."
#     resolution: "Test both and let results decide - research, not opinion"
#
# Note: Ogilvy's algorithms use 4 steps. This template uses 5 steps (ACKNOWLEDGE,
# REFRAME, EVIDENCE, VISION, ACTION) for more structured objection handling.
#
# =============================================================================

# =============================================================================
# END OF TEMPLATE
# =============================================================================
