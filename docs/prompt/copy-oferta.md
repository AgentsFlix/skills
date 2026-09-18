# copy-oferta · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-oferta.md` uma skill chamada copy-oferta. Quando eu pedir algo como "monta a oferta para [produto] a [preço]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# IMPOSSÍVEL DIZER NÃO · Stack, bump, upsell, downsell, prova

Antes do texto vem a oferta, e a maioria das páginas fracas tem uma oferta fraca por baixo. O agente desenha o stack de valor, o bump, o upsell e o downsell, avalia o que você já tem pela equação de valor e monta a pilha de prova. O resultado é uma oferta que a copy só precisa contar.

## When to Use

- O pedido envolve: oferta, stack, bônus, bump, upsell, downsell, página de obrigado, prova, garantia.
- Diga: "monta a oferta para [produto] a [preço]" ou "avalia minha oferta: [descrição]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create offer | `references/create-offer.md` |
| evaluate offer | `references/evaluate-offer.md` |
| create order bump | `references/create-order-bump.md` |
| create upsell page | `references/create-upsell-page.md` |
| create downsell page | `references/create-downsell-page.md` |
| create thank you page | `references/create-thank-you-page.md` |
| create proof stack | `references/create-proof-stack.md` |
| create decision matrix | `references/create-decision-matrix.md` |



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

- `references/create-decision-matrix.md`
- `references/create-downsell-page.md`
- `references/create-offer.md`
- `references/create-order-bump.md`
- `references/create-proof-stack.md`
- `references/create-thank-you-page.md`
- `references/create-upsell-page.md`
- `references/evaluate-offer.md`


---

## Referência: references/create-decision-matrix.md

# Create Decision Matrix Task


## Metadata

```yaml
task:
  name: Create Decision Matrix
  id: create-decision-matrix
  version: "1.0"
  category: strategy
  primary_agents:
    - eugene-schwartz
    - dan-kennedy
    - todd-brown
  estimated_output: Workflow recommendation with initial configuration
  quality_standard: All 5 questions answered + clear workflow recommendation
```

---

## Purpose

Execute the 5-Question Decision Matrix to determine the optimal workflow for any copywriting project. This is the **MANDATORY FIRST STEP** before starting any workflow in the Copy expansion pack.

---

## When to Use

- **ALWAYS FIRST** - Before selecting any workflow (wf-1 through wf-7)
- When starting a new copy project
- When pivoting an existing project
- When unclear which workflow fits best
- When optimizing existing funnel

---

## The 5-Question Decision Matrix

```
DECISION MATRIX FOR WORKFLOW SELECTION

Before starting ANY workflow, answer these 5 questions:

Q1 → AWARENESS LEVEL → Copy approach
Q2 → MARKET SOPHISTICATION → Mechanism requirements
Q3 → PRICE POINT → Proof & objection handling
Q4 → TRAFFIC TEMPERATURE → Entry point strategy
Q5 → PRIMARY OUTPUT → Workflow selection
```

---

## Inputs

```yaml
required:
  - product_name: What you're selling
  - target_market: Who you're selling to
  - price_point: Approximate price of offer
  - traffic_source: Where prospects come from

optional:
  - competitor_landscape: Who else serves this market
  - existing_assets: What copy/content already exists
  - timeline: When this needs to be ready
  - team_resources: Who will execute
```

---

## Workflow

### Step 1: Answer Q1 - Awareness Level

```
═══════════════════════════════════════════════════════════════════
Q1: AWARENESS LEVEL (Schwartz Framework)
═══════════════════════════════════════════════════════════════════

Where is your prospect on the awareness spectrum?

□ LEVEL 1 - UNAWARE
  "Don't know they have a problem"
  → Need story-based, educational approach
  → Longest copy, most nurturing required
  → Workflows: WF-4 (Organic), WF-5 (Email nurture)

□ LEVEL 2 - PROBLEM-AWARE
  "Know the problem, don't know solutions exist"
  → Lead with problem agitation
  → Medium-long copy, solution introduction
  → Workflows: WF-4 (Organic), WF-1 (Full Launch)

□ LEVEL 3 - SOLUTION-AWARE
  "Know solutions exist, don't know YOUR product"
  → Lead with unique mechanism
  → Differentiation critical
  → Workflows: WF-1 (Full Launch), WF-2 (Paid Traffic)

□ LEVEL 4 - PRODUCT-AWARE
  "Know your product, not convinced yet"
  → Lead with proof and objection removal
  → Medium copy, heavy proof
  → Workflows: WF-6 (Optimization), WF-2 (Paid Traffic)

□ LEVEL 5 - MOST AWARE
  "Ready to buy, just need the offer"
  → Lead with offer and urgency
  → Short copy, direct CTA
  → Workflows: WF-6 (Optimization), WF-1 (Launch re-open)

YOUR ANSWER: Level ___

DIAGNOSTIC HELP:
- Where does your traffic come from?
  • Cold ads → Level 1-2
  • Search → Level 2-3
  • Retargeting → Level 4
  • Email list → Level 4-5
  • Past customers → Level 5
```

### Step 2: Answer Q2 - Market Sophistication

```
═══════════════════════════════════════════════════════════════════
Q2: MARKET SOPHISTICATION (Schwartz Scale)
═══════════════════════════════════════════════════════════════════

How evolved is your market in terms of claims and mechanisms?

□ STAGE 1 - VIRGIN MARKET
  "No one has made this promise before"
  → Simple, direct claims work
  → No mechanism needed
  → First mover advantage

□ STAGE 2 - CLAIMS ENLARGEMENT
  "Claims have been made, must top them"
  → Bigger, faster, easier promises
  → Enlargement competition
  → Still no mechanism required

□ STAGE 3 - MECHANISM REQUIRED
  "Market tired of claims, needs HOW"
  → Unique mechanism mandatory
  → Science/process explanation
  → Todd Brown E5 Method critical

□ STAGE 4 - TIRED OF MECHANISMS
  "Everyone has a 'system' now"
  → Identification over mechanism
  → "For [specific avatar] who..."
  → Deep empathy required

□ STAGE 5 - COMPLETELY SKEPTICAL
  "Heard it all, believe none"
  → Identity/emotion based
  → Community/belonging focus
  → Authenticity paramount

YOUR ANSWER: Stage ___

DIAGNOSTIC HELP:
- Count competitors with "proprietary methods":
  • 0-2 competitors → Stage 1-2
  • 3-10 competitors → Stage 3
  • 10+ competitors → Stage 4-5
- Do prospects roll their eyes at new claims? → Stage 4-5
```

### Step 3: Answer Q3 - Price Point

```
═══════════════════════════════════════════════════════════════════
Q3: PRICE POINT
═══════════════════════════════════════════════════════════════════

What is the price of your primary offer?

□ LOW TICKET: Under $100
  → Impulse purchase possible
  → Less proof required
  → Shorter decision cycle
  → Workflows: WF-2 (Paid Traffic), WF-4 (Organic)

□ MID TICKET: $100 - $1,000
  → Need clear value proposition
  → Moderate proof required
  → Days to decide
  → Workflows: WF-1 (Full Launch), WF-2 (Paid Traffic)

□ HIGH TICKET: $1,000 - $5,000
  → Significant proof required
  → Objection handling critical
  → Weeks to decide
  → Workflows: WF-1 (Full Launch), WF-3 (High-Ticket)

□ PREMIUM: $5,000+
  → Application process recommended
  → Extensive proof stack
  → Sales calls typically required
  → Workflows: WF-3 (High-Ticket) mandatory

YOUR ANSWER: ___________

PRICE POINT → PROOF REQUIREMENTS:
- Low: Testimonials, results screenshots
- Mid: Case studies, specific numbers
- High: Video testimonials, detailed case studies
- Premium: References, live Q&A, guarantees
```

### Step 4: Answer Q4 - Traffic Temperature

```
═══════════════════════════════════════════════════════════════════
Q4: TRAFFIC TEMPERATURE
═══════════════════════════════════════════════════════════════════

How warm is your traffic source?

□ COLD TRAFFIC
  "Never heard of you"
  → Long-form content required
  → Trust building first
  → Multi-touch sequence
  → Workflows: WF-2 (with cold ads focus), WF-4 (Organic)

□ WARM TRAFFIC
  "Heard of you, engaged with content"
  → Medium-form effective
  → Differentiation focus
  → Faster conversion possible
  → Workflows: WF-1 (Full Launch), WF-5 (Email)

□ HOT TRAFFIC
  "Engaged, ready to learn more"
  → Direct offers can work
  → Proof stacking effective
  → Urgency moves them
  → Workflows: WF-1 (Launch), WF-6 (Optimization)

YOUR ANSWER: ___________

TRAFFIC SOURCE → TEMPERATURE MAPPING:
- Facebook/Instagram cold ads → COLD
- Google search ads → WARM
- YouTube subscribers → WARM
- Email list (engaged) → HOT
- Past customers → HOT
- Retargeting → WARM to HOT
```

### Step 5: Answer Q5 - Primary Output Needed

```
═══════════════════════════════════════════════════════════════════
Q5: PRIMARY OUTPUT
═══════════════════════════════════════════════════════════════════

What is the main deliverable you need?

□ VSL (Video Sales Letter)
  → Jon Benson methodology
  → Emotional progression
  → Workflows: WF-1, WF-3

□ SALES LETTER (Long-form written)
  → Gary Halbert methodology
  → Story-driven
  → Workflows: WF-1, WF-3, WF-7

□ EMAIL SEQUENCE
  → Andre Chaperon or Ben Settle
  → SOS or Daily methodology
  → Workflows: WF-5

□ AD CREATIVE
  → Multi-format (video, image, text)
  → Platform specific
  → Workflows: WF-2

□ WEBINAR
  → Education + pitch
  → Benson + Makepeace blend
  → Workflows: WF-3

□ DIRECT MAIL
  → Rutz, Lampropoulos, Deutsch
  → Physical package
  → Workflows: WF-7

□ LANDING PAGE
  → Lead capture or sales
  → Conversion focused
  → Workflows: WF-1, WF-2

□ CONTENT (Organic)
  → Social posts, newsletters
  → Brand building
  → Workflows: WF-4

□ FUNNEL OPTIMIZATION
  → Improve existing assets
  → A/B testing
  → Workflows: WF-6

YOUR ANSWER: ___________
```

---

## Step 6: Workflow Recommendation Matrix

```
WORKFLOW SELECTION MATRIX

Based on your answers, use this matrix:

┌────────────────────────────────────────────────────────────────────────┐
│ WORKFLOW              │ BEST FOR                    │ PRICE POINT      │
├────────────────────────────────────────────────────────────────────────┤
│ WF-1 Full Launch      │ New product launches        │ Mid to High      │
│                       │ Awareness 2-5               │ $100-$5000       │
│                       │ Warm/Hot traffic            │                  │
├────────────────────────────────────────────────────────────────────────┤
│ WF-2 Paid Traffic     │ Paid acquisition            │ Low to Mid       │
│                       │ All awareness levels        │ Under $1000      │
│                       │ Cold to Warm traffic        │                  │
├────────────────────────────────────────────────────────────────────────┤
│ WF-3 High-Ticket      │ Premium offers              │ High to Premium  │
│                       │ Awareness 3-5               │ $1000+           │
│                       │ Any traffic (nurture)       │                  │
├────────────────────────────────────────────────────────────────────────┤
│ WF-4 Organic Content  │ Brand building              │ Any              │
│                       │ Awareness 1-3               │                  │
│                       │ Cold traffic warming        │                  │
├────────────────────────────────────────────────────────────────────────┤
│ WF-5 Email Marketing  │ List monetization           │ Any              │
│                       │ Awareness 2-5               │                  │
│                       │ Warm/Hot traffic            │                  │
├────────────────────────────────────────────────────────────────────────┤
│ WF-6 Funnel Opt       │ Existing funnel improvement │ Any              │
│                       │ Awareness 4-5               │                  │
│                       │ Hot traffic optimization    │                  │
├────────────────────────────────────────────────────────────────────────┤
│ WF-7 Direct Mail      │ Physical mail campaigns     │ High to Premium  │
│                       │ B2B or premium consumer     │ $1000+           │
│                       │ Targeted lists              │                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Step 7: Generate Recommendation

### Decision Logic

```yaml
decision_tree:

  # Premium Path
  if_premium_price:
    condition: "Price Point = Premium ($5000+)"
    recommendation: "WF-3 High-Ticket"
    reason: "Premium requires sales calls and extensive nurturing"

  # Direct Mail Path
  if_direct_mail_output:
    condition: "Primary Output = Direct Mail"
    recommendation: "WF-7 Direct Mail"
    reason: "Specialized workflow for physical mail"

  # Optimization Path
  if_optimization_output:
    condition: "Primary Output = Funnel Optimization"
    recommendation: "WF-6 Funnel Optimization"
    reason: "Existing funnel improvement focus"

  # Email Path
  if_email_output:
    condition: "Primary Output = Email Sequence"
    recommendation: "WF-5 Email Marketing"
    reason: "Specialized for email systems"

  # Content Path
  if_content_output:
    condition: "Primary Output = Content (Organic)"
    recommendation: "WF-4 Organic Content"
    reason: "Brand building and cold traffic warming"

  # Paid Traffic Path
  if_ad_output_or_cold:
    condition: "Primary Output = Ad Creative OR Traffic = Cold"
    recommendation: "WF-2 Paid Traffic"
    reason: "Optimized for paid acquisition"

  # Default Launch Path
  default:
    condition: "All other cases"
    recommendation: "WF-1 Full Launch"
    reason: "Comprehensive workflow for most scenarios"
```

---

## Output Format

### Recommendation Template

```yaml
decision_matrix_result:

  answers:
    q1_awareness_level: [1-5]
    q2_market_sophistication: [1-5]
    q3_price_point: [Low | Mid | High | Premium]
    q4_traffic_temperature: [Cold | Warm | Hot]
    q5_primary_output: [VSL | Sales Letter | Email | Ad | Webinar | Direct Mail | Landing | Content | Optimization]

  recommendation:
    workflow_id: "wf-X-name"
    workflow_name: "Full Name"
    confidence: [HIGH | MEDIUM | LOW]

  rationale: |
    Based on your answers:
    - [Reason 1 from answers]
    - [Reason 2 from answers]
    - [Reason 3 from answers]

  initial_configuration:
    tier_0_agents:
      - "[Agent 1] for [purpose]"
      - "[Agent 2] for [purpose]"
    tier_1_agents:
      - "[Agent 3] for [purpose]"
    clone_combinations:
      - "[Combination 1] for [purpose]"

  first_steps:
    1: "Run diagnose-awareness-level.md to confirm Level [X]"
    2: "Run diagnose-market-sophistication.md to confirm Stage [X]"
    3: "Execute [Workflow] Phase 1"

  warnings:
    - "[Warning if applicable based on combination]"
```

---

## Clone Combinations by Workflow

```yaml
proven_combinations:

  wf_1_full_launch:
    foundation: "Schwartz (awareness) + Hopkins (testing)"
    strategy: "Kennedy (3Ms) + Todd Brown (mechanism)"
    execution: "Halbert (story) + Makepeace (emotion)"
    email: "Chaperon (SOS) + Sugarman (triggers)"

  wf_2_paid_traffic:
    cold_ads: "Halbert (story hooks) + Schwartz (awareness match)"
    warm_ads: "Carlton (direct benefit) + Bencivenga (fascinations)"
    hot_ads: "Most Aware offers + Sugarman (triggers)"
    landing: "Hopkins (testing) + Bencivenga (bullets)"

  wf_3_high_ticket:
    positioning: "Kennedy (avatar) + Todd Brown (mechanism)"
    webinar: "Benson (VSL) + Makepeace (emotion)"
    email: "Chaperon (long SOS) + Settle (follow-up)"
    call_script: "Kennedy (objections)"

  wf_4_organic:
    short_form: "Collier (entry) + Sugarman (specificity)"
    long_form: "Halbert (storytelling)"
    newsletter: "Halbert (personal letter)"
    pillar: "Ogilvy (research depth)"

  wf_5_email:
    daily: "Settle (infotainment)"
    automation: "Chaperon (SOS)"
    hybrid: "Chaperon (automated) + Settle (broadcast)"

  wf_6_optimization:
    diagnostic: "Hopkins (metrics) + Schwartz (awareness)"
    fixes: "Bencivenga (headlines) + Lampropoulos (bullets)"
    triggers: "Sugarman (30 triggers)"

  wf_7_direct_mail:
    format: "Rutz (magalog innovation)"
    copy: "Lampropoulos (bullets) + Halbert (story)"
    testing: "Hopkins (scientific) + Deutsch (controls)"
```

---

## Common Mistakes to Avoid

```
MISTAKE 1: Skipping the Decision Matrix
- Symptom: Choosing workflow based on preference, not data
- Fix: Always answer all 5 questions before selecting

MISTAKE 2: Misdiagnosing Awareness Level
- Symptom: Copy mismatches where traffic is
- Fix: Cross-reference traffic source with awareness

MISTAKE 3: Ignoring Market Sophistication
- Symptom: Simple claims in sophisticated market
- Fix: Run diagnose-market-sophistication.md

MISTAKE 4: Price-Workflow Mismatch
- Symptom: Using WF-2 for $5k+ offers
- Fix: Premium ALWAYS needs WF-3

MISTAKE 5: Starting Without Foundation
- Symptom: Jumping to execution without strategy
- Fix: Tier 0 agents (Hopkins, Schwartz, Collier) first
```

---

## Integration

- **Prerequisite for**: All workflows (WF-1 through WF-7)
- **Related tasks**: diagnose-awareness-level.md, diagnose-market-sophistication.md
- **Used by**: copy.sh (workflow selection)
- **Agents**: @eugene-schwartz (Tier 0), @dan-kennedy (Tier 2), @todd-brown (Tier 2)

---

## Validation Checklist

- [ ] All 5 questions answered
- [ ] Awareness level cross-referenced with traffic source
- [ ] Market sophistication validated
- [ ] Price point matches workflow
- [ ] Primary output identified
- [ ] Workflow recommendation generated
- [ ] Initial configuration set
- [ ] First steps documented

---

*Task Version: 1.0*
*Created: 2026-01-23*
*Purpose: Workflow selection before any Copy project*


---

## Referência: references/create-downsell-page.md

# Create Downsell Page Task

## Purpose
Criar páginas de downsell eficazes que recuperam vendas perdidas oferecendo alternativa mais acessível, mantendo o relacionamento e maximizando revenue per visitor.

## When to Use
- Após recusa de oferta principal (exit intent)
- Carrinho abandonado
- Quem clicou mas não comprou
- Oferta alternativa para budget menor
- Recuperação de leads qualificados

## Inputs

```yaml
required:
  - main_offer: Oferta principal que foi recusada
  - main_price: Preço da oferta principal
  - downsell_offer: O que está oferecendo como alternativa
  - downsell_price: Preço do downsell
  - target_avatar: Quem é o cliente ideal

optional:
  - rejection_reason: Motivo provável da recusa (preço, timing, confiança)
  - relationship_context: Como chegaram até aqui (ad, email, referral)
  - future_upsell: Se há caminho para oferta maior depois
  - urgency_element: Se há escassez/deadline
  - copywriter_preference: Copywriter específico desejado
```

## Workflow

### Step 1: Rejection Analysis
```
Identificar motivo provável da recusa:

OBJEÇÃO DE PREÇO
- "Muito caro para mim agora"
- Solução: Oferta mais barata, parcelamento, versão lite

OBJEÇÃO DE TEMPO
- "Não é o momento certo"
- Solução: Mini-produto de início rápido, trial

OBJEÇÃO DE CONFIANÇA
- "Não tenho certeza se funciona para mim"
- Solução: Versão de menor risco, garantia estendida

OBJEÇÃO DE OVERWHELM
- "Parece muito complexo"
- Solução: Versão simplificada, passo-a-passo

OBJEÇÃO DE COMMITMENT
- "Não quero me comprometer agora"
- Solução: Produto único (não recorrente), trial
```

### Step 2: Downsell Strategy Selection
```
Escolher tipo de downsell:

1. VERSÃO LITE
   - Menos módulos/features
   - Core value mantido
   - Preço 30-50% menor
   Ex: "Curso completo" → "Módulo principal apenas"

2. PAYMENT PLAN
   - Mesmo produto
   - Dividido em mais parcelas
   - Facilita cash flow
   Ex: "R$997 à vista" → "12x de R$97"

3. TRIAL/SAMPLE
   - Acesso temporário
   - Primeira parte do produto
   - Upgrade posterior
   Ex: "Acesso completo" → "7 dias grátis"

4. PRODUTO ALTERNATIVO
   - Produto diferente, mais barato
   - Mesmo problema, solução menor
   Ex: "Mentoria" → "Curso gravado"

5. ONE-TIME vs RECURRING
   - Remove compromisso de longo prazo
   - Pagamento único
   Ex: "Assinatura mensal" → "Acesso vitalício"

6. DIY VERSION
   - Sem suporte/comunidade
   - Apenas conteúdo core
   - Para quem quer fazer sozinho
   Ex: "Com mentoria" → "Self-study"
```

### Step 3: Psychological Framing (Dan Kennedy)
```
Reframe a oferta para maximizar conversão:

ANCHOR & CONTRAST
"Você viu que [oferta principal] custa [preço alto].
Mas eu entendo que nem todo mundo pode investir isso agora.
Por isso criei [downsell] por apenas [preço baixo]."

LOSS AVERSION
"Antes de ir embora de mãos vazias, deixa eu te mostrar
uma opção que cabe no seu bolso e ainda te dá [benefício principal]."

FOOT IN THE DOOR
"Começa por aqui. Depois, quando tiver resultados,
você pode fazer upgrade para [oferta completa]."

SCARCITY MAINTAINED
"Esta oferta especial só aparece agora.
Se fechar esta página, volta ao preço normal."

SOCIAL PROOF RELEVANT
"[X] pessoas começaram assim e depois fizeram upgrade.
Algumas delas hoje faturam [resultado]."
```

### Step 4: Page Structure
```
Estrutura da página de downsell:

1. HEADLINE DE RECUPERAÇÃO
   "Espera! Antes de ir..."
   "Uma última coisa antes de você sair..."
   "Oferta especial só para você"

2. ACKNOWLEDGE THE REJECTION
   "Eu entendo que [oferta principal] pode não ser para você agora."
   "Talvez [preço] seja muito para investir hoje."
   (Validar sem julgar)

3. BRIDGE/TRANSITION
   "Mas eu não quero que você saia de mãos vazias."
   "Por isso, preparei algo especial..."

4. PRESENT DOWNSELL
   "[Nome do downsell]"
   - O que é
   - O que inclui
   - Como ajuda

5. VALUE COMPARISON
   [Oferta principal] = R$X
   [Downsell] = R$Y
   Você economiza [Z]% e ainda consegue [benefício core]

6. WHAT'S INCLUDED
   - Lista clara do que recebe
   - Bullets de benefícios
   - Valor de cada item

7. GUARANTEE
   - Mesma garantia ou melhor
   - Remove todo risco
   - "Se não gostar, devolvemos"

8. URGENCY
   - Esta oferta é só agora
   - Não verá de novo
   - Timer/deadline

9. CTA PRINCIPAL
   "Sim, quero o [downsell] por [preço]!"

10. SKIP OPTION
    "Não, obrigado. Prefiro sair."
    (Texto que causa loss aversion)
```

### Step 5: Copy Elements

#### Headlines de Downsell
```
WAIT-BASED:
- "Espera! Não vai embora ainda..."
- "Antes de sair, veja isso..."
- "Uma última oportunidade..."

UNDERSTANDING-BASED:
- "Entendo. [Preço] é muito agora."
- "Talvez não seja o momento para [oferta completa]."
- "Nem todo mundo pode investir [preço] hoje."

ALTERNATIVE-BASED:
- "E se eu te oferecesse uma versão mais acessível?"
- "Tenho algo especial para você..."
- "Uma opção que cabe no seu bolso..."

LOSS AVERSION:
- "Não saia de mãos vazias."
- "Não perca tudo que viu até aqui."
- "Leva pelo menos isso contigo."
```

#### CTAs de Downsell
```
ACCEPTANCE:
- "Sim! Quero o [produto] por apenas [preço]!"
- "Aceito esta oferta especial!"
- "Quero começar com [downsell]!"

REJECTION (Cause Loss Aversion):
- "Não, prefiro perder esta oportunidade única."
- "Não, não preciso de ajuda com [problema]."
- "Não, vou continuar fazendo do jeito errado."
```

### Step 6: Urgency Elements
```
Criar urgência genuína:

TIMER
"Esta oferta expira em [countdown]"
(Timer visível, real)

ONE-TIME OFFER
"Esta página não vai aparecer de novo"
"Oferta exclusiva para quem viu [oferta principal]"

LIMITED SPOTS
"Restam apenas [X] vagas nesta condição"
(Se for verdade)

PRICE INCREASE
"Depois desta página, volta para [preço normal]"
```

### Step 7: Quality Check
```
Verificar página:

PSICOLOGIA
- [ ] Valida a recusa (não julga)?
- [ ] Apresenta alternativa genuinamente útil?
- [ ] Cria loss aversion sem manipulação?

CLAREZA
- [ ] Fica claro o que está recebendo?
- [ ] Preço é obviamente menor?
- [ ] Diferença para oferta principal é clara?

CONVERSÃO
- [ ] CTA é impossível de ignorar?
- [ ] Urgência é real?
- [ ] Garantia remove risco?

RELACIONAMENTO
- [ ] Mantém porta aberta para futuro?
- [ ] Tom é respeitoso?
- [ ] Oferece valor real (não sobra)?
```

## Output

```yaml
format: markdown
sections:
  - rejection_analysis
  - downsell_strategy
  - complete_page_copy
  - headline_variations (3)
  - cta_variations (3)
  - urgency_elements
  - quality_checklist
```

## Copywriter Recommendations

| Contexto | Copywriter Ideal | Por quê |
|----------|------------------|---------|
| Downsell com urgência | Dan Kennedy | Mestre em escassez e fechamento |
| Downsell de high-ticket | Alex Hormozi | Value stacking, pricing psychology |
| Downsell empático | Frank Kern | Tom casual, relacionamento |
| Downsell com story | Gary Halbert | Conecta emocionalmente |
| Downsell sofisticado | David Ogilvy | Premium mesmo em preço menor |

## Page Templates

### Template 1: Price Objection Downsell
```markdown
# Espera! Eu entendo.

R$[preço principal] é um investimento considerável.

Nem todo mundo pode fazer isso agora, e tudo bem.

**Mas eu não quero que você saia de mãos vazias.**

Por isso, criei uma versão especial só para quem chegou até aqui:

## [Nome do Downsell]

[Descrição em 2-3 linhas]

### O que você recebe:

✓ [Componente 1] — Valor: R$X
✓ [Componente 2] — Valor: R$Y
✓ [Componente 3] — Valor: R$Z

**Valor Total: R$[soma]**

### Seu investimento hoje:

~~R$[preço original]~~ → **Apenas R$[preço downsell]**

### Garantia de 30 dias

Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.

---

⚠️ **Esta oferta é exclusiva para esta página.**
Quando fechar, não verá de novo.

[BOTÃO: Sim, quero por R$[preço]!]

[Link menor: Não, obrigado. Prefiro sair sem nada.]
```

### Template 2: Lite Version Downsell
```markdown
# Uma última coisa antes de você ir...

Eu vi que você se interessou por [oferta principal] mas decidiu não seguir.

Talvez seja o preço. Talvez o timing. Talvez você queira testar antes.

**E se eu te oferecesse apenas o essencial?**

## [Nome] — Versão Essencial

A versão [lite/essencial/core] do [produto principal] com:

• [Feature principal 1]
• [Feature principal 2]
• [Feature principal 3]

**Sem** [feature removida que justifica preço menor]

Perfeito para quem quer começar e depois fazer upgrade.

### Comparativo:

| | Completo | Essencial |
|---|---|---|
| [Feature 1] | ✓ | ✓ |
| [Feature 2] | ✓ | ✓ |
| [Feature 3] | ✓ | ✗ |
| Preço | R$X | **R$Y** |

[BOTÃO: Quero a versão essencial!]
```

### Template 3: Payment Plan Downsell
```markdown
# O investimento é a única barreira?

Eu entendo. R$[preço] de uma vez pode pesar no orçamento.

**E se você pudesse dividir?**

## Mesmo [Produto], Parcelas Menores

Tudo que você viu na oferta principal:
[Lista rápida de benefícios]

**Agora em [X]x de R$[valor menor]**

Mesma garantia. Mesmo acesso. Só o pagamento que fica mais leve.

---

💡 **Na prática:**
- Menos de R$[valor/dia] por dia
- Começa a ter resultados antes de terminar de pagar
- Pode cancelar a qualquer momento

[BOTÃO: Quero parcelar em [X]x!]

[Link: Prefiro não, mesmo assim.]
```

## Metrics to Track

```yaml
downsell_metrics:
  - conversion_rate: "% que aceita downsell"
  - revenue_recovered: "R$ recuperado que seria perdido"
  - upgrade_rate: "% de downsell que faz upgrade depois"
  - ltv_comparison: "LTV de quem entra por downsell vs oferta principal"
```

---

*Task Version: 1.0*
*Primary Framework: Loss Aversion + Foot in the Door (Dan Kennedy)*


---

## Referência: references/create-offer.md

# Create Offer Task

## Purpose

Criar ofertas irresistíveis usando uma metodologia de 10 fases que combina o Grand Slam Offer Framework de Alex Hormozi, princípios de Dan Kennedy, e psicologia de valor comprovada. O objetivo é estruturar valor de forma que recusar pareça irracional - ofertas tão boas que as pessoas se sintam "estúpidas dizendo não".

## When to Use

- Lançando novo produto ou serviço
- Oferta atual não está convertendo bem
- Precisa reposicionar preço (subir ou justificar)
- Quer criar escassez/urgência genuína
- Preparando campanha de vendas
- Criando high-ticket offer
- Desenvolvendo value ladder completo
- Reestruturando ofertas existentes

## Core Frameworks

Esta task integra três frameworks principais:

1. **Hormozi Value Equation** - Fundamento matemático do valor
2. **Kennedy Irresistible Offer** - 4 componentes de ofertas irrecusáveis
3. **S.U.B.G.N. Enhancement Stack** - Scarcity, Urgency, Bonuses, Guarantees, Naming

---

## Phase 0: Tier 0 Diagnostic Questions

**MANDATORY: Before creating ANY offer, complete this diagnosis.**

### Block A: Market & Avatar Understanding

```yaml
questions:
  A1_target_avatar:
    question: "Quem é o cliente IDEAL para esta oferta?"
    follow_ups:
      - "Qual é a situação atual dele (before state)?"
      - "O que ele já tentou que não funcionou?"
      - "Qual é o nível de consciência dele sobre o problema?"
      - "Qual é o nível de sofisticação do mercado?"

  A2_burning_problem:
    question: "Qual é o problema URGENTE que você resolve?"
    validation:
      - "Ele está disposto a pagar para resolver isso AGORA?"
      - "Isso é um 'nice-to-have' ou um 'must-have'?"
      - "Qual é o custo de NÃO resolver este problema?"

  A3_current_solutions:
    question: "O que já existe no mercado para resolver isso?"
    analysis:
      - "Quais são os substitutos diretos?"
      - "Quais são os substitutos indiretos?"
      - "Por que as soluções existentes falham ou são insuficientes?"
```

### Block B: Product & Transformation

```yaml
questions:
  B1_product_core:
    question: "O que você está vendendo CONCRETAMENTE?"
    specifics:
      - "Produto digital, físico, serviço, ou híbrido?"
      - "Qual é o formato de entrega principal?"
      - "Quanto tempo leva para consumir/implementar?"

  B2_dream_outcome:
    question: "Qual é a TRANSFORMAÇÃO que seu cliente terá?"
    critical_distinction: |
      NÃO é o que você entrega (features)
      É o que ele TERÁ/SERÁ depois (transformation)
    examples:
      - "Curso de marketing" → "Pipeline de clientes previsível gerando $50k/mês"
      - "Programa de emagrecimento" → "Confiança para usar qualquer roupa"
      - "Mentoria de negócios" → "Liberdade de tempo com empresa funcionando sem você"

  B3_unique_mechanism:
    question: "O que torna sua ABORDAGEM única?"
    elements:
      - "Qual é o método/sistema/framework proprietário?"
      - "O que você faz DIFERENTE de todos os outros?"
      - "Por que sua abordagem funciona quando outras falham?"
```

### Block C: Proof & Authority

```yaml
questions:
  C1_results_proof:
    question: "Que provas de resultado você tem?"
    types_to_collect:
      - "Depoimentos (quantos? texto/vídeo?)"
      - "Estudos de caso com números específicos"
      - "Before/after documentados"
      - "Resultados próprios"
      - "Dados e estatísticas"

  C2_authority_elements:
    question: "O que te qualifica para entregar isso?"
    elements:
      - "Experiência (anos, número de clientes)"
      - "Resultados pessoais"
      - "Credenciais/certificações"
      - "Mídia/reconhecimento"
      - "Associações/parcerias"

  C3_guarantee_capacity:
    question: "Quão confiante você está nos resultados?"
    assessment:
      - "Taxa de sucesso histórica dos clientes"
      - "Que garantia você está disposto a dar?"
      - "Quais condições são justas para ambas as partes?"
```

### Block D: Business Constraints

```yaml
questions:
  D1_capacity:
    question: "Qual é sua capacidade real de atendimento?"
    specifics:
      - "Quantos clientes pode atender com qualidade?"
      - "Qual é o limite antes de precisar escalar?"
      - "Há sazonalidade ou ciclos naturais?"

  D2_pricing_targets:
    question: "Qual é o preço pretendido?"
    context:
      - "Por que esse preço? (baseado em quê?)"
      - "O que o mercado paga por soluções similares?"
      - "Qual é o ROI esperado para o cliente?"

  D3_delivery_model:
    question: "Como você entregará isso?"
    options:
      - "Done-For-You (DFY) - você faz"
      - "Done-With-You (DWY) - vocês fazem juntos"
      - "Do-It-Yourself (DIY) - eles fazem com seu material"
      - "Híbrido - combinação dos anteriores"
```

### Diagnostic Output

```yaml
diagnosis_summary:
  avatar_clarity: [1-10]
  problem_urgency: [1-10]
  solution_uniqueness: [1-10]
  proof_strength: [1-10]
  market_awareness_level: [unaware|problem_aware|solution_aware|product_aware|most_aware]
  market_sophistication: [1-5]

recommended_offer_type:
  options:
    - high_ticket_service # $3,000+
    - mid_ticket_course # $500-$2,997
    - low_ticket_product # $27-$497
    - membership # $47-$297/month
    - hybrid # combination

  reasoning: |
    Based on avatar urgency, proof level, and capacity...
```

---

## Phase 1: Value Equation Analysis

### The Hormozi Value Equation

```
VALUE = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)
```

Para maximizar valor: aumentar numerador (↑), minimizar denominador (↓)

### Driver 1: Dream Outcome (MAXIMIZAR ↑)

```yaml
dream_outcome_development:
  step_1_identify:
    question: "O que o cliente REALMENTE quer?"
    exploration:
      - "Qual é o estado final desejado?"
      - "Como a vida dele será diferente?"
      - "Que transformação de identidade ocorre?"
      - "Que status isso confere?"

  step_2_expand:
    dimensions:
      emotional: "Como ele se SENTIRÁ?"
      practical: "O que ele TERÁ/FARÁ diferente?"
      social: "Como os outros o verão?"
      identity: "Quem ele SE TORNARÁ?"

  step_3_articulate:
    formula: "[Avatar] conseguirá [resultado específico] para [benefício emocional] em [timeframe]"
    example: "Coaches conseguirão um pipeline de 50+ leads qualificados por mês para ter previsibilidade financeira em 90 dias"

  step_4_validate:
    questions:
      - "Isso é algo que ele já QUER (não precisa convencer)?"
      - "Ele pagaria PREMIUM por isso?"
      - "Ele já está procurando isso ativamente?"
```

### Driver 2: Perceived Likelihood (MAXIMIZAR ↑)

```yaml
perceived_likelihood_boosters:
  tier_1_social_proof:
    elements:
      - specific_testimonials: "Depoimentos com números e nomes reais"
      - case_studies: "Histórias detalhadas de transformação"
      - results_screenshots: "Provas visuais de resultados"
      - video_testimonials: "Maior credibilidade que texto"
      - celebrity_clients: "Clientes conhecidos (se houver)"

  tier_2_authority_signals:
    elements:
      - credentials: "Certificações, formações relevantes"
      - experience: "Anos no mercado, número de clientes"
      - media_features: "Onde você foi citado/entrevistado"
      - published_work: "Livros, artigos, pesquisas"
      - awards: "Reconhecimentos do setor"

  tier_3_mechanism_clarity:
    elements:
      - named_method: "Sistema/framework com nome próprio"
      - step_by_step: "Processo claro e documentado"
      - logic_chain: "Por que funciona (ciência/lógica)"
      - differentiation: "Por que é diferente do que existe"

  tier_4_guarantee_strength:
    types:
      - unconditional: "100% de volta, sem perguntas"
      - conditional: "Se fizer X e não conseguir Y..."
      - performance: "Se não alcançar Z, pagamos W"
      - better_than_money_back: "Devolvo + algo extra"
```

### Driver 3: Time Delay (MINIMIZAR ↓)

```yaml
time_delay_reduction:
  quick_wins_strategy:
    principle: "Entregue algo valioso nas primeiras 24-48 horas"
    examples:
      - "Template para usar hoje mesmo"
      - "Checklist para primeira ação"
      - "Diagnóstico/auditoria instantânea"
      - "Mini-treinamento de resultado rápido"
      - "Acesso imediato a ferramenta/recurso"

  milestone_mapping:
    structure:
      day_1: "[Quick win imediato]"
      week_1: "[Primeiro marco tangível]"
      week_4: "[Resultado intermediário]"
      week_8_plus: "[Resultado completo]"

  progress_visibility:
    elements:
      - "Indicadores de progresso claros"
      - "Celebração de pequenas vitórias"
      - "Comparação before/after frequente"
      - "Métricas de acompanhamento"

  delivery_speed:
    immediate_access:
      - "Acesso instantâneo ao primeiro módulo"
      - "Bônus de boas-vindas imediato"
      - "Onboarding no mesmo dia"
      - "Primeira ligação em 24h"
```

### Driver 4: Effort & Sacrifice (MINIMIZAR ↓)

```yaml
effort_reduction:
  done_for_you_elements:
    examples:
      - "Templates prontos para usar"
      - "Scripts que só precisam personalizar"
      - "Sistemas configurados"
      - "Conteúdo escrito para eles"
      - "Setup técnico feito"

  decision_reduction:
    examples:
      - "Roteiro passo-a-passo exato"
      - "Checklists de ações"
      - "Árvore de decisão clara"
      - "Recomendações específicas (não opções)"
      - "Path único (não múltiplas possibilidades)"

  friction_elimination:
    identify:
      - "O que causa confusão no processo?"
      - "Onde eles ficam travados?"
      - "Que decisões criam paralisia?"
      - "Que tarefas são mais odiadas?"
    solve_each_one: |
      Para cada ponto de fricção identificado,
      criar um deliverable que elimina ou reduz esse esforço.

  support_structure:
    levels:
      basic: "FAQ, documentação, tutoriais"
      standard: "Email support, chat"
      premium: "Calls 1:1, acesso direto, done-for-you"
```

### Value Equation Scorecard

```yaml
value_equation_audit:
  dream_outcome:
    score: [1-10]
    description: "[Como está articulado]"
    improvement: "[O que pode ser feito para melhorar]"

  perceived_likelihood:
    score: [1-10]
    proof_elements: "[O que existe]"
    gaps: "[O que está faltando]"

  time_delay:
    current_time_to_first_result: "[X dias/semanas]"
    quick_win_available: "[Sim/Não - qual?]"
    score: [1-10]

  effort_sacrifice:
    customer_workload: "[Alto/Médio/Baixo]"
    done_for_you_percentage: "[X%]"
    score: [1-10]

  overall_value_score: "[soma/40 × 100]%"

  priority_improvements:
    1: "[Maior gap a resolver]"
    2: "[Segundo maior gap]"
    3: "[Terceiro maior gap]"
```

---

## Phase 2: Obstacle Mapping

### The Complete Obstacle Framework

Para cada obstáculo, você criará uma solução que se torna parte da oferta.

### Category A: Obstacles of STARTING

```yaml
starting_obstacles:
  fear_based:
    common_fears:
      - "Medo de não ser bom o suficiente"
      - "Medo de parecer tolo/errado"
      - "Medo do investimento não valer"
      - "Medo de não ter tempo"
      - "Medo de não conseguir implementar"

    solution_pattern: |
      Para cada medo, criar:
      1. Elemento que prova que pessoas como eles conseguiram
      2. Estrutura de suporte inicial
      3. Garantia que remove o risco

  confusion_based:
    common_confusions:
      - "Não saber por onde começar"
      - "Não saber se é para eles"
      - "Não saber quanto tempo vai levar"
      - "Não entender o que está incluído"
      - "Não saber o que esperar"

    solution_pattern: |
      Para cada confusão, criar:
      1. Guia de início rápido
      2. Assessment/diagnóstico inicial
      3. Roadmap visual claro
      4. Expectativas documentadas

  resource_based:
    common_resource_gaps:
      - "Não ter dinheiro"
      - "Não ter tempo"
      - "Não ter ferramentas/tecnologia"
      - "Não ter conhecimento prévio"
      - "Não ter equipe/suporte"

    solution_pattern: |
      Para cada gap de recurso, criar:
      1. Opção de pagamento facilitado
      2. Versão "micro" que cabe na agenda
      3. Ferramentas incluídas/configuradas
      4. Módulo de fundamentos
      5. Suporte/comunidade para compensar
```

### Category B: Obstacles of CONTINUING

```yaml
continuation_obstacles:
  motivation_killers:
    common_issues:
      - "Perda de momentum inicial"
      - "Não ver resultados rápidos"
      - "Distrações e prioridades concorrentes"
      - "Dúvidas se está no caminho certo"
      - "Comparação negativa com outros"

    solution_pattern: |
      Para cada killer de motivação:
      1. Quick wins distribuídos ao longo do caminho
      2. Check-ins de progresso regulares
      3. Estrutura de accountability
      4. Métricas de progresso visíveis
      5. Celebração de marcos

  implementation_blockers:
    common_blockers:
      - "Ficar travado em passos específicos"
      - "Não saber como aplicar ao caso específico"
      - "Problemas técnicos"
      - "Feedback insuficiente"
      - "Mudanças no cenário/contexto"

    solution_pattern: |
      Para cada bloqueador:
      1. FAQ/troubleshooting detalhado
      2. Office hours ou Q&A regular
      3. Suporte técnico dedicado
      4. Reviews de trabalho
      5. Atualizações do material

  self_sabotage:
    common_patterns:
      - "Procrastinação"
      - "Perfeccionismo paralisante"
      - "Síndrome do impostor"
      - "Medo de sucesso"
      - "Auto-crítica excessiva"

    solution_pattern: |
      Para cada padrão:
      1. Mindset modules específicos
      2. Accountability partner/grupo
      3. Normalização dos desafios
      4. Exemplos de outros que superaram
      5. Check-ins de mentalidade
```

### Category C: Obstacles of ACHIEVING

```yaml
achievement_obstacles:
  knowledge_gaps:
    common_gaps:
      - "Falta de conhecimento avançado"
      - "Não saber como escalar"
      - "Não saber otimizar"
      - "Falta de nuances do setor"
      - "Não conhecer melhores práticas"

    solution_pattern: |
      Para cada gap:
      1. Módulos avançados específicos
      2. Masterclasses de especialistas
      3. Case studies detalhados
      4. Best practices documentadas
      5. Mentoria avançada

  external_factors:
    common_factors:
      - "Mudanças no mercado"
      - "Concorrência aumentando"
      - "Algoritmos/plataformas mudando"
      - "Economia/sazonalidade"
      - "Regulamentações"

    solution_pattern: |
      Para cada fator:
      1. Atualizações regulares do conteúdo
      2. Adaptações para cenários diferentes
      3. Comunidade para troca de informações
      4. Acesso contínuo (não vitalício)
      5. Estratégias evergreen

  capacity_limitations:
    common_limits:
      - "Não conseguir escalar além de X"
      - "Não ter equipe para crescer"
      - "Limitação de tempo pessoal"
      - "Capacidade financeira para investir mais"
      - "Habilidades complementares faltando"

    solution_pattern: |
      Para cada limitação:
      1. Sistemas e automações
      2. Templates de contratação
      3. Frameworks de delegação
      4. Fases de crescimento graduais
      5. Network de parceiros/fornecedores
```

### Obstacle-to-Solution Mapping Template

```yaml
obstacle_solution_map:
  obstacle_1:
    category: "[Starting/Continuing/Achieving]"
    specific_obstacle: "[Descrição exata do obstáculo]"
    solution_type: "[DFY/DWY/DIY/Support/Content]"
    deliverable_name: "[Nome atraente do deliverable]"
    deliverable_description: "[O que é e como resolve]"
    perceived_value: "$[valor]"
    value_equation_impact: "[Qual driver melhora e como]"

  obstacle_2:
    # ... mesmo formato

  obstacle_N:
    # ... mesmo formato

  total_obstacles_mapped: [N]
  total_perceived_value: "$[soma]"
```

---

## Phase 3: Offer Stack Construction

### The Value Stack Architecture

```yaml
offer_stack_structure:
  tier_1_core_offer:
    description: "O produto/serviço principal"
    components:
      - name: "[Nome do core product]"
        what_it_is: "[Descrição]"
        what_it_delivers: "[Transformação]"
        value: "$[valor percebido]"

  tier_2_implementation_support:
    description: "Elementos que aceleram implementação"
    components:
      - name: "[Quick Start Guide]"
        solves: "[Obstacle: não saber por onde começar]"
        value: "$[valor]"
      - name: "[Templates/Swipe Files]"
        solves: "[Obstacle: ter que criar do zero]"
        value: "$[valor]"
      - name: "[Checklists/Roadmaps]"
        solves: "[Obstacle: não saber próximo passo]"
        value: "$[valor]"

  tier_3_support_access:
    description: "Acesso a ajuda e comunidade"
    components:
      - name: "[Community Access]"
        solves: "[Obstacle: sentir-se sozinho]"
        value: "$[valor]"
      - name: "[Q&A Calls]"
        solves: "[Obstacle: dúvidas específicas]"
        value: "$[valor]"
      - name: "[Direct Support]"
        solves: "[Obstacle: ficar travado]"
        value: "$[valor]"

  tier_4_bonuses:
    description: "Extras que amplificam valor"
    strategy: "Cada bônus deve resolver um obstáculo específico"
    components:
      - name: "[Bônus 1]"
        solves: "[Obstacle específico]"
        value: "$[valor]"
      - name: "[Bônus 2]"
        solves: "[Obstacle específico]"
        value: "$[valor]"
      - name: "[Fast-Action Bônus]"
        urgency: "Para os primeiros X ou até [data]"
        value: "$[valor]"
```

### Naming Components Compellingly

```yaml
naming_formulas:
  formula_1_result_focused:
    pattern: "O/A [Resultado] [Modificador]"
    examples:
      - "O Acelerador de Vendas"
      - "A Máquina de Leads"
      - "O Sistema de Conversão"

  formula_2_number_based:
    pattern: "[Número] [Elemento] para [Resultado]"
    examples:
      - "7 Scripts de Vendas Milionários"
      - "12 Templates de Email que Convertem"
      - "5 Frameworks de Copywriting"

  formula_3_shortcut_based:
    pattern: "O Atalho para [Resultado Desejado]"
    examples:
      - "O Atalho para Campanhas Lucrativas"
      - "O Caminho Rápido para Escala"
      - "O Método Acelerado para Autoridade"

  formula_4_system_based:
    pattern: "Sistema [Nome Próprio] de [Resultado]"
    examples:
      - "Sistema IMPACT de Vendas"
      - "Método SCALE de Crescimento"
      - "Framework CONVERT de Funis"

  formula_5_blueprint_based:
    pattern: "O Blueprint do/da [Avatar] [Resultado]"
    examples:
      - "O Blueprint do Coach 6 Dígitos"
      - "O Mapa do Produtor Digital"
      - "O Roteiro do Expert Milionário"
```

### Assigning Perceived Values

```yaml
value_assignment_methods:
  method_1_time_saved:
    formula: "Horas economizadas × valor/hora do avatar"
    example: "50 horas economizadas × $200/hora = $10,000"

  method_2_comparable_products:
    formula: "Preço de produtos similares no mercado"
    example: "Cursos similares custam $997 = valor $997"

  method_3_result_value:
    formula: "Valor do resultado × probabilidade de sucesso"
    example: "Resultado vale $50,000 × 30% = $15,000"

  method_4_creation_cost:
    formula: "Custo para criar isso do zero"
    example: "Contratar copywriter: $5,000"

  method_5_access_value:
    formula: "Custo normal de acesso similar"
    example: "Consultoria privada: $500/hora × 10 horas = $5,000"

value_credibility_rules:
  - "Valores devem ser justificáveis se questionados"
  - "Não inflar mais que 3-5x o preço real de mercado"
  - "Usar comparações que o avatar reconhece"
  - "Incluir base do cálculo quando possível"
```

---

## Phase 4: Guarantee Design

### Guarantee Type Selection

```yaml
guarantee_types:
  type_1_unconditional:
    name: "Garantia Incondicional (Money-Back)"
    terms: "100% de reembolso, sem perguntas, dentro de X dias"
    best_for:
      - "Produtos digitais com baixo custo de entrega"
      - "Ofertas com alta confiança no resultado"
      - "Mercados onde confiança é barreira principal"
    conversion_impact: "Alto (+15-30%)"
    risk_to_seller: "Alto"
    example: |
      "Se por qualquer motivo você não estiver 100% satisfeito,
      basta enviar um email dentro de 30 dias e devolvemos
      cada centavo. Sem perguntas, sem burocracia."

  type_2_conditional:
    name: "Garantia Condicional"
    terms: "Reembolso SE determinadas condições forem cumpridas"
    best_for:
      - "Programas que exigem implementação"
      - "Quando quer filtrar compradores não-comprometidos"
      - "High-ticket onde resultado depende de ação"
    conversion_impact: "Médio-Alto (+10-20%)"
    risk_to_seller: "Médio"
    example: |
      "Se você completar todos os módulos, implementar as 3
      estratégias principais, e não ver resultados dentro de
      90 dias, devolvemos 100% do seu investimento."

  type_3_performance:
    name: "Garantia de Performance/Resultado"
    terms: "Reembolso (ou mais) se resultado específico não for alcançado"
    best_for:
      - "Ofertas com resultados mensuráveis"
      - "Alta confiança na metodologia"
      - "Diferenciação competitiva"
    conversion_impact: "Muito Alto (+25-40%)"
    risk_to_seller: "Alto (mas geralmente baixa utilização)"
    example: |
      "Se você implementar nosso sistema e não adicionar pelo
      menos $10,000 em receita dentro de 6 meses, não apenas
      devolvemos seu investimento - pagamos $1,000 do nosso bolso."

  type_4_better_than_money_back:
    name: "Garantia Melhor que Devolução"
    terms: "Devolução + compensação extra"
    best_for:
      - "Máxima diferenciação"
      - "Extrema confiança"
      - "Posicionamento premium"
    conversion_impact: "Máximo"
    risk_to_seller: "Muito Alto"
    example: |
      "Se você não achar que este é o melhor programa que já fez,
      devolvemos 100% do seu investimento E você fica com todos
      os bônus como nosso presente de desculpas."

  type_5_hybrid:
    name: "Garantia Híbrida"
    terms: "Combinação de tipos"
    structure: |
      - Período 1 (ex: 30 dias): Incondicional
      - Período 2 (ex: 31-90 dias): Condicional com requisitos
    example: |
      "Primeiros 30 dias: Experimente sem risco - não gostou,
      devolvemos tudo, sem perguntas.

      Dias 31-90: Se você completar o programa e não ver resultados,
      devolvemos 100% mediante comprovação de implementação."
```

### Guarantee Presentation Template

```yaml
guarantee_document:
  name: "[NOME DA GARANTIA]"

  headline: |
    [Headline que destaca a força da garantia]
    Ex: "A Garantia Tripla de Resultados"
    Ex: "Garantia de Risco Zero"
    Ex: "Nossa Promessa Inquebrantável"

  terms_clear: |
    Se você [condições - se aplicável] e [resultado negativo],
    você recebe [o que recebe de volta] - [qualificadores].

  why_we_offer: |
    Por que oferecemos isso? Porque [razão que gera confiança].
    Em [X anos/clientes], nossa taxa de [resultado] é [estatística].
    Estamos tão confiantes que [reforço de confiança].

  social_proof: |
    [Menção de quantos clientes, taxa de sucesso, etc.]

  how_to_use: |
    Se precisar usar esta garantia:
    1. [Passo 1]
    2. [Passo 2]
    3. [Passo 3]

  visual_element:
    badge: "[Design de selo/badge de garantia]"
    signature: "[Assinatura do responsável]"
```

---

## Phase 5: S.U.B.G.N. Enhancement Stack

### S - Scarcity (Escassez)

```yaml
scarcity_implementation:
  type_1_quantity:
    what: "Quantidade limitada"
    genuine_reasons:
      - "Capacidade de atendimento"
      - "Exclusividade planejada"
      - "Recursos limitados"
    examples:
      - "Apenas 20 vagas nesta turma"
      - "Limitado a 50 membros"
      - "Somente 100 unidades produzidas"
    implementation: |
      - Usar contador real de vagas
      - Fechar quando atingir (de verdade!)
      - Comunicar razão da limitação

  type_2_bonus_based:
    what: "Bônus limitados"
    examples:
      - "Os primeiros 10 ganham auditoria 1:1"
      - "Bônus X disponível até [data]"
      - "Early birds recebem acesso vitalício"

  type_3_access:
    what: "Acesso restrito"
    examples:
      - "Abre apenas 2x por ano"
      - "Somente por indicação"
      - "Precisa aplicar para participar"

  warning_fake_scarcity: |
    NUNCA use escassez falsa:
    - Contadores que resetam
    - "Últimas vagas" permanente
    - Limitação sem razão real

    Consequência: Destruição de confiança de longo prazo
```

### U - Urgency (Urgência)

```yaml
urgency_implementation:
  type_1_deadline:
    what: "Prazo real"
    examples:
      - "Preço especial até sexta-feira"
      - "Inscrições encerram dia 15"
      - "Bônus expira em 48 horas"
    rules:
      - "Deadline deve ser real e respeitado"
      - "Não estender (exceção: emergência genuína)"
      - "Comunicar consequência de perder o prazo"

  type_2_price_increase:
    what: "Preço sobe após período"
    examples:
      - "De R$997 para R$1.497 após [data]"
      - "Early bird: 30% de desconto"
      - "Preço de lançamento por tempo limitado"

  type_3_cohort:
    what: "Turma com data de início"
    examples:
      - "Próxima turma começa dia 1º de março"
      - "Mentoria inicia em 2 semanas"
      - "Live classes começam dia X"

  type_4_event:
    what: "Atrelado a evento"
    examples:
      - "Só durante o lançamento"
      - "Especial Black Friday"
      - "Oferta de aniversário"
```

### B - Bonuses (Bônus)

```yaml
bonus_strategy:
  purpose: "Cada bônus deve resolver um obstáculo específico"

  bonus_types:
    speed_bonus:
      purpose: "Acelerar tempo para resultado"
      examples:
        - "Quick Start Guide"
        - "Templates prontos"
        - "Checklist de implementação rápida"

    ease_bonus:
      purpose: "Reduzir esforço necessário"
      examples:
        - "Scripts done-for-you"
        - "Automações configuradas"
        - "Swipe files completos"

    certainty_bonus:
      purpose: "Aumentar confiança no resultado"
      examples:
        - "Case studies detalhados"
        - "Mentoria adicional"
        - "Reviews de trabalho"

    exclusive_bonus:
      purpose: "Criar FOMO e percepção de privilegio"
      examples:
        - "Acesso ao grupo VIP"
        - "Sessão 1:1 exclusiva"
        - "Produto não disponível separadamente"

    fast_action_bonus:
      purpose: "Criar urgência para decisão imediata"
      examples:
        - "Bônus X para os primeiros 20"
        - "Auditoria gratuita se comprar hoje"
        - "Desconto extra nas próximas 24h"

  bonus_value_rule: |
    Valor total dos bônus deve ser >= preço do produto principal
    Isso cria a percepção de "deal absurdo"
```

### G - Guarantees (Revisão)

```yaml
guarantee_enhancement:
  checklist:
    - "Garantia tem nome memorável?"
    - "Termos são claros e específicos?"
    - "Período é adequado para ver resultados?"
    - "Processo de uso é simples?"
    - "Demonstra confiança no produto?"
    - "Remove objeção principal de risco?"
```

### N - Naming (Nome da Oferta)

```yaml
naming_framework:
  formula_principal:
    pattern: "[Resultado] + [Timeframe] + [Método Único]"
    examples:
      - "Sistema 90 Dias para Dobrar Vendas"
      - "Método 6 Dígitos em 6 Meses"
      - "Acelerador de Leads em 30 Dias"

  formula_categoria_propria:
    pattern: "O/A [Novo Termo] de/para [Avatar]"
    examples:
      - "A Máquina de Clientes para Coaches"
      - "O Funil Perpétuo do Produtor Digital"
      - "O Ecossistema de Vendas B2B"

  formula_signature:
    pattern: "[Seu Nome/Marca] [Tipo] [Resultado]"
    examples:
      - "Método Silva de Copywriting Magnético"
      - "Sistema Johnson de Vendas High-Ticket"
      - "Framework SCALE de Crescimento"

  naming_checklist:
    - "Nome promete resultado específico?"
    - "Nome é memorável e fácil de dizer?"
    - "Nome cria categoria própria?"
    - "Nome diferencia de concorrentes?"
    - "Nome pode virar hashtag/referência?"
```

---

## Phase 6: Pricing Strategy

### The 10x Value Rule

```yaml
pricing_foundation:
  rule: "Valor percebido deve ser no mínimo 10x o preço"

  example:
    perceived_value: "$25,000"
    price: "$2,500"
    ratio: "10:1"

  why_it_works:
    - "Remove price como objeção principal"
    - "Faz decisão parecer 'no-brainer'"
    - "Cria senso de 'oportunidade única'"
    - "Justifica premium positioning"
```

### Price Anchoring Sequence

```yaml
anchoring_sequence:
  step_1_problem_cost:
    action: "Mostre o custo de NÃO resolver o problema"
    example: |
      "Quanto custa continuar perdendo leads todo mês?
      Se você perde 50 leads/mês × $200/lead = $10,000/mês
      Em um ano: $120,000 em oportunidades perdidas"

  step_2_alternative_cost:
    action: "Mostre custo de alternativas"
    example: |
      "Contratar uma agência: $5,000-15,000/mês
      Contratar um funcionário: $4,000/mês + encargos
      Consultoria: $500/hora × 20 horas = $10,000"

  step_3_value_stack:
    action: "Some todo o valor da oferta"
    example: |
      "Core Program: $4,997
      Bonus 1: $997
      Bonus 2: $1,497
      Bonus 3: $497
      Support: $2,997
      Total Value: $10,985"

  step_4_reveal_price:
    action: "Revele o preço com contraste"
    example: |
      "Seu investimento hoje: não $10,985...
      não $5,000... não $2,500...
      Apenas $997"

  step_5_daily_breakdown:
    action: "Quebre em termos diários/mensal"
    example: |
      "Isso é menos de $2.73 por dia
      Menos que seu café diário
      Para ter [resultado transformador]"
```

### Price Presentation Options

```yaml
price_presentation:
  option_1_single_pay:
    what: "Pagamento único"
    best_for: "Maximizar receita imediata"
    discount: "Geralmente oferece small discount vs parcelado"
    example: "$997 à vista (economize $200)"

  option_2_payment_plan:
    what: "Parcelamento"
    best_for: "Aumentar acessibilidade"
    calculation: "Preço total + 10-20% pelo parcelamento"
    example: "3x de $397 ou 6x de $217"

  option_3_split_pay:
    what: "Pagamento dividido (2-3 vezes)"
    best_for: "Balance entre acesso e ticket"
    example: "2 pagamentos de $599"

  option_4_subscription:
    what: "Recorrência mensal/anual"
    best_for: "Memberships, softwares, acesso contínuo"
    example: "$97/mês ou $970/ano (2 meses grátis)"

  presentation_order:
    recommended: |
      1. Mostrar opção mais cara primeiro (ancora alto)
      2. Mostrar opção recomendada segundo
      3. Mostrar opção mais acessível por último

      Ou: Apresentar apenas uma opção (simplifica decisão)
```

---

## Phase 7: Offer Documentation

### Complete Offer Document Template

```markdown
# [NOME DA OFERTA]

## Headline Principal
[Headline que captura o dream outcome]

---

## Para Quem É Isso

Este programa é para você se:
- [Critério 1 - situação atual]
- [Critério 2 - desejo]
- [Critério 3 - disposição]

**Não é para você se:**
- [Anti-critério 1]
- [Anti-critério 2]

---

## O Problema

[Articulação do problema que seu avatar enfrenta]

**O custo de não resolver:**
- [Consequência 1]
- [Consequência 2]
- [Consequência 3]

---

## A Transformação

**De:** [Estado atual - before]
**Para:** [Estado desejado - after]

Em [timeframe], você terá:
- [Resultado tangível 1]
- [Resultado tangível 2]
- [Resultado tangível 3]

---

## O Que Você Recebe

### Core: [Nome do Produto Principal]
[Descrição do que é e o que entrega]
**Valor: $[X]**

### Implementação & Suporte

**[Nome do Componente 1]**
[Descrição e o que resolve]
**Valor: $[X]**

**[Nome do Componente 2]**
[Descrição e o que resolve]
**Valor: $[X]**

**[Nome do Componente 3]**
[Descrição e o que resolve]
**Valor: $[X]**

### Bônus Exclusivos

**BÔNUS #1: [Nome]**
[Descrição e o que resolve]
**Valor: $[X]**

**BÔNUS #2: [Nome]**
[Descrição e o que resolve]
**Valor: $[X]**

**BÔNUS #3: [Nome] ⚡ FAST-ACTION**
[Descrição] - Apenas para os primeiros [X] ou até [data]
**Valor: $[X]**

---

## Valor Total: $[SOMA]

## Seu Investimento: $[PREÇO]

### Opções de Pagamento:
- **À vista:** $[preço] (economize $[X])
- **Parcelado:** [N]x de $[valor]

---

## [NOME DA GARANTIA]

[Termos completos da garantia]

[Por que oferecemos isso]

[Como usar se precisar]

---

## Por Que Agora?

**[Elemento de Urgência/Escassez]**

- [Razão 1 - prazo, vagas, etc.]
- [Razão 2]

---

## Próximos Passos

1. Clique no botão abaixo
2. [Passo 2]
3. [Passo 3]

**[CTA BUTTON TEXT]**

---

## Perguntas Frequentes

**P: [Pergunta comum 1]**
R: [Resposta]

**P: [Pergunta comum 2]**
R: [Resposta]

**P: [Pergunta comum 3]**
R: [Resposta]

---

## Sobre [Nome/Empresa]

[Brief bio/credentials que constroem autoridade]

---

*[Footer com termos, contato, etc.]*
```

---

## Phase 8: Offer Variations

### Generate Alternatives

```yaml
variations_to_create:
  names:
    quantity: 3
    approach: |
      - Variation 1: Result-focused
      - Variation 2: Method-focused
      - Variation 3: Avatar-focused

  headlines:
    quantity: 3
    approaches:
      - benefit_driven: "Conquiste [resultado] em [timeframe]"
      - problem_driven: "Pare de [problema] para sempre"
      - curiosity_driven: "O método que [autoridades] usam para [resultado]"

  guarantee_options:
    quantity: 2
    types:
      - conservative: "Condicional com requisitos"
      - aggressive: "Incondicional ou performance"

  pricing_options:
    quantity: 2
    structures:
      - option_a: "[Preço premium com todos os elementos]"
      - option_b: "[Preço acessível com core apenas]"

variation_testing_recommendation: |
  Comece com uma versão, colete dados, depois teste variações
  específicas (headline A vs B, garantia A vs B, etc.)
```

---

## Phase 9: Copywriter Style Applications

### Style Selection Guide

```yaml
copywriter_styles:
  alex_hormozi:
    when_to_use:
      - "High-ticket offers ($3,000+)"
      - "B2B services"
      - "Results-based positioning"
      - "Logical/analytical audience"
    style_characteristics:
      - "Value equation framework central"
      - "Mathematical approach to value"
      - "Bold guarantees"
      - "Straight-talking, no fluff"
    signature_moves:
      - "Grand Slam Offer structure"
      - "10x value rule"
      - "'Make it a no-brainer' language"
      - "Obstacle-solution mapping"

  dan_kennedy:
    when_to_use:
      - "Direct response campaigns"
      - "Deadline-driven offers"
      - "Urgency-heavy promotions"
      - "Info-products and courses"
    style_characteristics:
      - "Urgency and scarcity emphasis"
      - "Risk reversal focus"
      - "Direct, no-nonsense language"
      - "Shock and awe value stacking"
    signature_moves:
      - "Irresistible offer components"
      - "Deadline stacking"
      - "USP development"
      - "Fear-based urgency"

  russell_brunson:
    when_to_use:
      - "Webinar-based offers"
      - "Funnel-based sales"
      - "Online courses"
      - "Story-driven presentations"
    style_characteristics:
      - "Story-driven approach"
      - "Heavy bonus stacking"
      - "Epiphany bridge storytelling"
      - "Aspirational positioning"
    signature_moves:
      - "Perfect Webinar stack"
      - "Value ladder positioning"
      - "Three secrets framework"
      - "Bonus-heavy presentations"

  frank_kern:
    when_to_use:
      - "Coaching offers"
      - "Authority positioning"
      - "Authenticity-focused brands"
      - "Results in advance strategy"
    style_characteristics:
      - "Authentic, conversational tone"
      - "Results-first approach"
      - "Personality-driven"
      - "Trust-building through value"
    signature_moves:
      - "Intent-based branding"
      - "Mass control techniques"
      - "Results in advance"
      - "4-day cash machine"

  eugene_schwartz:
    when_to_use:
      - "Sophisticated markets"
      - "Awareness-matched offers"
      - "Mechanism-based positioning"
      - "Competitive markets"
    style_characteristics:
      - "Awareness level targeting"
      - "Mechanism focus"
      - "Headline sophistication"
      - "Market matching"
    signature_moves:
      - "5 levels of awareness applied"
      - "Mechanism discovery"
      - "Sophistication stage matching"
      - "Desire channeling"
```

### Style Application Template

```yaml
style_application:
  selected_style: "[Copywriter Name]"
  reason_for_selection: "[Why this style fits this offer]"

  elements_to_incorporate:
    headline_approach: "[How to headline in this style]"
    value_presentation: "[How to present value]"
    urgency_approach: "[How to create urgency]"
    guarantee_framing: "[How to frame guarantee]"
    cta_style: "[How to close in this style]"

  example_adaptations:
    headline: "[Headline in chosen style]"
    opening_hook: "[First paragraph in style]"
    value_stack_intro: "[How to introduce value stack]"
    guarantee_presentation: "[Guarantee in style]"
    closing_cta: "[CTA in style]"
```

---

## Phase 10: Quality Validation

### Pre-Launch Offer Audit Checklist

```yaml
audit_checklist:
  section_1_value_equation:
    - item: "Dream outcome é específico e desejável"
      status: "[✓/✗]"
      notes: "[Se ✗, o que precisa melhorar]"
    - item: "Perceived likelihood é backed by proof"
      status: "[✓/✗]"
    - item: "Time delay é minimizado com quick wins"
      status: "[✓/✗]"
    - item: "Effort é reduzido com elementos done-for-you"
      status: "[✓/✗]"

  section_2_grand_slam_components:
    - item: "Headline captura atenção e promete resultado"
      status: "[✓/✗]"
    - item: "Value stack total é 10x+ o preço"
      status: "[✓/✗]"
    - item: "Preço é premium e justificado"
      status: "[✓/✗]"
    - item: "Garantia remove todo risco percebido"
      status: "[✓/✗]"
    - item: "Termos de pagamento são claros"
      status: "[✓/✗]"

  section_3_subgn_stack:
    - item: "Escassez é genuína e comunicada"
      status: "[✓/✗]"
    - item: "Urgência tem deadline real"
      status: "[✓/✗]"
    - item: "Bônus resolvem obstáculos específicos"
      status: "[✓/✗]"
    - item: "Garantia é específica e bold"
      status: "[✓/✗]"
    - item: "Nome é memorável e results-focused"
      status: "[✓/✗]"

  section_4_psychological_elements:
    - item: "Anchoring está sequenciado corretamente"
      status: "[✓/✗]"
    - item: "Loss aversion está triggered"
      status: "[✓/✗]"
    - item: "Social proof está presente"
      status: "[✓/✗]"
    - item: "Reciprocity está ativada"
      status: "[✓/✗]"
    - item: "FOMO é ético e efetivo"
      status: "[✓/✗]"

  section_5_practical_elements:
    - item: "Método de entrega é claro"
      status: "[✓/✗]"
    - item: "Estrutura de suporte está definida"
      status: "[✓/✗]"
    - item: "Processo de refund está documentado"
      status: "[✓/✗]"
    - item: "Métricas de resultado são trackáveis"
      status: "[✓/✗]"
    - item: "Fulfillment está operacionalmente pronto"
      status: "[✓/✗]"

  overall_score:
    passed: "[X] de 20 itens"
    percentage: "[X]%"
    recommendation: "[GO / REVISE / STOP]"

  critical_gaps:
    gap_1: "[Gap mais crítico]"
    action_1: "[Ação para resolver]"
    gap_2: "[Segundo gap]"
    action_2: "[Ação para resolver]"
```

### Offer Level Assessment

```yaml
offer_level_diagnosis:
  questions:
    q1: "Dream outcome é crystal clear?"
    q2: "Perceived value é 10x o preço?"
    q3: "Há proof de que funciona?"
    q4: "Há strong guarantee?"
    q5: "Há real scarcity/urgency?"
    q6: "Tem compelling name?"
    q7: "Cada componente tem clear purpose?"
    q8: "É incomparável a alternativas?"

  scoring:
    - "0-2 Sim = Level 1 (Bad Offer)"
    - "3-4 Sim = Level 2 (Decent Offer)"
    - "5-6 Sim = Level 3 (Good Offer)"
    - "7-8 Sim = Level 4 (Grand Slam Offer)"

  current_assessment:
    yes_count: "[X]"
    level: "[Level N]"
    target: "Level 4 (Grand Slam)"
    gaps_to_close: "[Lista de gaps]"
```

---

## Output Format

```yaml
final_deliverables:
  document_1_diagnosis:
    name: "Tier 0 Diagnosis Report"
    content: "Respostas completas do Phase 0"

  document_2_value_equation:
    name: "Value Equation Analysis"
    content: "Scorecard com 4 drivers analisados"

  document_3_obstacle_map:
    name: "Complete Obstacle-Solution Map"
    content: "Todos obstáculos categorizados com soluções"

  document_4_offer_stack:
    name: "Value Stack Architecture"
    content: "Estrutura completa com componentes e valores"

  document_5_guarantee:
    name: "Guarantee Document"
    content: "Garantia completa com nome e termos"

  document_6_subgn:
    name: "S.U.B.G.N. Enhancement Stack"
    content: "Scarcity, Urgency, Bonuses, Guarantee, Naming"

  document_7_pricing:
    name: "Pricing Strategy Document"
    content: "Anchoring sequence e opções de pagamento"

  document_8_full_offer:
    name: "Complete Offer Document"
    content: "Documento final formatado para uso"

  document_9_variations:
    name: "Offer Variations"
    content: "3 names, 3 headlines, 2 guarantees, 2 pricing"

  document_10_audit:
    name: "Quality Audit Checklist"
    content: "Checklist completo com score e gaps"
```

---

## Quick Reference: Copywriter Recommendations

| Contexto | Copywriter Ideal | Por quê |
|----------|------------------|---------|
| High-ticket ($3k+) | Alex Hormozi | Grand Slam framework, value equation |
| Urgency-driven | Dan Kennedy | Deadline stacking, irresistible offers |
| Webinar/funnel | Russell Brunson | Perfect Webinar stack, bonus strategy |
| Coaching/authority | Frank Kern | Authentic persuasion, results in advance |
| Sophisticated market | Eugene Schwartz | Awareness matching, mechanism focus |
| Email sequences | Andre Chaperon | Soap Opera Sequence integration |
| Daily engagement | Ben Settle | Infotainment offer positioning |

---

## Frameworks Quick Reference

### Value Equation
```
Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort)
```

### S.U.B.G.N. Stack
```
S - Scarcity (quantity limited)
U - Urgency (time limited)
B - Bonuses (obstacle solvers)
G - Guarantees (risk removal)
N - Naming (result + time + method)
```

### Offer Level Hierarchy
```
Level 0: No Offer (just product listing)
Level 1: Bad Offer (competing on price)
Level 2: Decent Offer (average conversion)
Level 3: Good Offer (above average)
Level 4: Grand Slam Offer (irresistible)
```

### 10x Value Rule
```
Perceived Value ≥ 10× Price
$10,000 value → $1,000 price = No-brainer
```

---

*Task Version: 2.0*
*Primary Frameworks: $100M Offers (Hormozi), Magnetic Marketing (Kennedy), Funnel Secrets (Brunson)*
*Lines: 1400+*
*Research Base: 25+ sources, 15+ frameworks documented*

---

# ═══════════════════════════════════════════════════════════════════════════
# HORMOZI FRAMEWORK - EXTRAÍDO DOS ARTIFACTS MMOS
# Data: 2026-01-23 | Enrichment Phase ENR-004
# ═══════════════════════════════════════════════════════════════════════════

## Hormozi Value Equation Engine (Completo)

> **Fonte:** `02_VALUE_EQUATION_ENGINE.md`

### A Fórmula Matemática Canônica

```
Valor = (Resultado dos Sonhos × Probabilidade Percebida de Conquista)
        ÷ (Atraso Temporal × Esforço e Sacrifício)
```

### Filosofia Fundamental: Percepção é Realidade

A Equação de Valor calcula o **valor percebido**, não o valor objetivo. A decisão de compra é baseada exclusivamente na crença do cliente sobre o valor que receberá.

> "Não importa se sua solução realmente funciona. Se não _parece_ que vai funcionar, você está frito."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 2.2]

### Foco no Denominador (Diferenciação Real)

> "O marketing de iniciantes foca em fazer promessas cada vez maiores (aumentar o numerador), pois é a forma mais fácil e 'preguiçosa' de criar valor. A verdadeira diferenciação e o fosso competitivo a longo prazo vêm de minimizar o denominador."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 2.3]

As melhores empresas do mundo (Apple, Amazon, Netflix) focam em tornar produtos mais imediatos, perfeitos e sem esforço.

### Análise Granular das 4 Variáveis

#### 1. Resultado dos Sonhos (Dream Outcome) - MAXIMIZAR ↑

**Princípio:** As pessoas não compram produtos; compram um futuro melhor ligado ao aumento de status percebido.

**Tática de Comunicação Mestra - Enquadramento por Status Externo:**

| Tipo | Exemplo |
|------|---------|
| Benefício Direto (Fraco) | "Este taco de golfe aumentará seu drive em 40 jardas." |
| Benefício por Status (Forte) | "Quando você comprar este taco, seu drive aumentará em 40 jardas. Os queixos dos seus amigos cairão quando virem sua bola voar 40 jardas além das deles... eles perguntarão o que mudou... só você saberá." |

**Táticas para Maximizar:**
- Enquadramento de Status: Especificidade aumenta preço 100x ("Gestão de Tempo para Representantes B2B de Ferramentas Elétricas")
- Foco na Transformação Total: Venda "ser a pessoa que todos perguntam 'o que você fez?'"
- Regra da Especificidade: Quanto mais específico o resultado, maior o valor percebido
- "Vender as Férias, Não o Voo": NUNCA descreva processo, SEMPRE descreva o sentimento final

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.1]

#### 2. Probabilidade Percebida de Conquista - MAXIMIZAR ↑

**Princípio:** As pessoas pagam por **certeza**. Uma promessa ousada sem prova gera ceticismo.

**Táticas para Maximizar:**
- **Reversão de Risco (Garantias):** "30 Clientes em 30 Dias — Ou Você Não Paga" eleva probabilidade para ~100%
- **Prova Social:** ROAS de 36:1, taxa de sucesso de 100% em negócios pós-2017 atingindo $1.5M/mês
- **Demonstrações e Transparência:** Mostrar o processo, explicar o "mecanismo único"
- **Admissões Danosas:** Admitir falhas para desarmar ceticismo

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.2]

#### 3. Atraso Temporal (Time Delay) - MINIMIZAR ↓

**Princípio:** "Rápido Supera Grátis". A diminuição do atraso temporal aumenta exponencialmente o valor.

**Táticas para Minimizar:**
- **Entregar "Vitórias Rápidas":** Benefício tangível o mais cedo possível
- **Manipular Percepção do Tempo:** Mapa pontilhado do túnel de Londres - sensação de progresso sem acelerar
- **Onboarding Imediato:** Acesso instantâneo a componentes (bônus digitais)

**Engenharia de "Vitórias Rápidas" para Retenção:**
> "Pessoas que experimentam uma vitória emocional cedo são cientificamente mais propensas a se comprometerem com o processo a longo prazo."

**Exemplo Canônico:** Em programa de perda de peso, usar dieta inicial mais agressiva para gerar grande perda na primeira semana = vitória emocional que reforça decisão de compra.

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.3]

#### 4. Esforço e Sacrifício - MINIMIZAR ↓

**Princípio:** Os clientes compram conveniência. Quanto menos esforço, mais valiosa a oferta.

**Táticas para Minimizar:**
- **Mover no Espectro de Entrega:** DIY → DWY → DFY (valor aumenta drasticamente)
- **Remoção de Atrito:** Compra com 1-Clique da Amazon
- **Prover Ferramentas e Templates:** Atalhos que diminuem esforço de criação

**Comparação Mestre:** Fitness (alto esforço/sacrifício) vs Lipoaspiração (baixo esforço/sacrifício) = mesmo resultado sonhado, veículos de valor drasticamente diferentes.

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.4]

### Algoritmo de Diagnóstico de Oferta (5 Passos)

```yaml
passo_1_articular_dream_outcome:
  pergunta: "Qual é a transformação final, em termos de status, que esta oferta promete?"
  ação: Escreva a promessa em uma única frase clara

passo_2_auditar_probabilidade:
  pergunta: "Quais mecanismos específicos (garantias, provas, demonstrações) são usados?"
  ação: Liste-os e avalie a força da garantia

passo_3_mapear_jornada_temporal:
  pergunta: "Quando o cliente sente a primeira 'vitória'?"
  ação: Identifique o "tempo até o primeiro valor"

passo_4_listar_custo_esforço:
  pergunta: "Quais são todas as coisas que o cliente precisa fazer ou sacrificar?"
  ação: Crie lista de tarefas do cliente, procure itens para automatizar/eliminar

passo_5_identificar_alavanca_principal:
  pergunta: "Qual das quatro variáveis é o 'elo mais fraco' desta oferta?"
  ação: Declare a variável com maior impacto se melhorada
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 4]

### Framework de Pontuação: Meditação vs. Xanax

| Variável | Meditação | Score | Xanax | Score |
|----------|-----------|-------|-------|-------|
| Resultado Sonhado | Sim, alcança | 1 | Sim, alcança | 1 |
| Prob. Percebida | Baixa, requer prática | 0 | Alta, funciona para maioria | 1 |
| Atraso Temporal | Alto, semanas/meses | 0 | Baixo, 30 min | 1 |
| Esforço & Sacrifício | Alto, prática diária | 0 | Baixo, engolir pílula | 1 |
| **SCORE** | **1/4** | | **4/4** | |

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 5]

### Ciência do Empilhamento de Valor

**REGRA FUNDAMENTAL:** "Uma oferta dividida em componentes vale mais que apresentada como um todo"

**Protocolo de Empilhamento:**
1. **Decomponha**: Separe CADA elemento da oferta
2. **Nomeie**: Dê nome único e poderoso a cada componente
3. **Valorize**: Atribua valor específico a cada item
4. **Sequencie**: Apresente um por vez, do menor ao maior valor
5. **Totalize**: Some todos os valores antes de revelar preço

**Exemplo Prático:**
```
❌ ERRADO: "Programa de coaching por $5000"

✅ CERTO:
- Sistema de Aceleração de Vendas ($2000 valor)
- Templates de Email que Convertem ($500 valor)
- Biblioteca de Scripts Testados ($1500 valor)
- Acesso ao Grupo Mastermind ($3000 valor)
- Sessões 1-on-1 Quinzenais ($4000 valor)
- Garantia de Resultado ou 2X Dinheiro de Volta ($5000 valor)

VALOR TOTAL: $16,000
Seu investimento hoje: apenas $5000
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 6]

---

## Hormozi Offer Creation System (Completo)

> **Fonte:** `03_OFFER_CREATION_SYSTEM.md`

### Filosofia: "Mercado Primeiro, Produto Depois"

#### Princípio da "Multidão Faminta" (Starving Crowd)

> "Um professor de marketing perguntou aos alunos qual a única vantagem ao abrir uma barraca de cachorro-quente. A resposta correta não foi localização, qualidade ou preço. Foi **'uma multidão faminta'**."
> [Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 2.1]

A tarefa não é criar fome, mas encontrar os famintos.

#### 4 Indicadores de Mercado Vencedor

| Indicador | Descrição |
|-----------|-----------|
| **Dor Massiva** | O público precisa desesperadamente de solução. A dor gera urgência de compra. |
| **Poder de Compra** | O público tem dinheiro (ou acesso) para pagar. |
| **Fácil de Atingir** | O público está concentrado (grupos, listas, associações). |
| **Crescendo** | Mercado em crescimento fornece "vento a favor". |

[Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 2.2]

### Algoritmo de Criação da Grand Slam Offer

#### O Continuum Vendas-Cumprimento

> "Crie fluxo. Monetize o fluxo. Depois adicione atrito."
> [Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 3]

No início, foque em tornar a oferta fácil de VENDER (mais DFY), mesmo que seja mais difícil de cumprir.

#### FASE 1: Fundação (Validação do Mercado)

**Template de Declaração de Nicho:**
```
"Eu resolvo [PROBLEMA ESPECÍFICO] para [AVATAR ESPECÍFICO] através de [MECANISMO ÚNICO]."
```

[Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 3 - Fase 1]

#### FASE 2: Engenharia Reversa do Valor

**Passo 2:** Articular o Resultado dos Sonhos
- Exemplo: "Obtenha 20 novos clientes de alto valor em 60 dias e seja visto como a autoridade líder em seu nicho"

**Passo 3:** Mapear Exaustivamente os Problemas
- Pense cronologicamente: O que impede de começar? O que faz desistir? Que novos problemas surgem após resultado inicial?

**Passo 4:** Matriz de Problema-Solução

| Problema Identificado | Nome da Solução Proposta | Veículo de Entrega |
|----------------------|--------------------------|-------------------|
| "Não sei o que postar nas redes" | "O Arsenal de Conteúdo de 7 Minutos" | Checklists em PDF + Templates |
| "Tenho medo de falar com clientes" | "Scripts de Vendas de Confiança Instantânea" | Guias em Vídeo + Role-playing |
| "Não tenho tempo para tudo isso" | "Serviço de Implementação 'Mãos Livres'" | Serviço DFY |

[Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 3 - Fase 2]

#### FASE 3: Arquitetura da Oferta

**Passo 5:** Trim & Stack
- **TRIM:** Elimine itens de baixo valor percebido e alto custo
- **STACK:** Destaque itens de alto valor percebido e baixo custo marginal

**Passo 6:** Garantia de Reversão de Risco
- **Incondicional:** "Experimente por 30 dias. Se não gostar, por qualquer motivo, peça seu dinheiro de volta."
- **Condicional (Preferível):** "Se você implementar nosso sistema e não conseguir [resultado específico] em [prazo], nós não só devolveremos seu dinheiro, como também pagaremos [penalidade]."

**Passo 7:** Preço Premium
- Ignore a média do mercado
- Aumente o preço radicalmente para criar "categoria de um"
- Use a margem para entregar experiência excepcional (Círculo Virtuoso do Preço)

**Passo 8:** Escassez e Urgência Genuínas
- **Escassez Genuína:** Vagas limitadas (capacidade real), bônus físicos (estoque real)
- **Urgência Genuína:** Prazo real, aumento de preço programado, bônus que expiram

[Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 3 - Fase 3]

#### FASE 3.5: Evolução Estratégica da Oferta

| Estágio | Período | Ação | Objetivo |
|---------|---------|------|----------|
| **Overdelivery** | Meses 1-6 | Entregue 10x mais, aceite margens baixas | Criar casos de sucesso e fluxo de caixa |
| **Sistematização** | Meses 6-12 | Use lucros para sistemas e automações | Aumentar margens mantendo satisfação |
| **Otimização** | Meses 12+ | Adicione "atrito positivo" (qualificação) | Máxima lucratividade com mínimo esforço |

[Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 3 - Fase 3.5]

#### FASE 4: Empacotamento (Fórmula MAGICO)

| Letra | Elemento | Exemplo |
|-------|----------|---------|
| **M** | Mecanismo único | "Sistema Neurológico" |
| **A** | Alvo atraente | "Coaches High-Ticket" |
| **G** | Grafia diferente | Uso de "Neurológico" (diferenciador) |
| **I** | Ideia que ajuda | "Vendas B2B" (solução clara) |
| **C** | Convergência temporal | "90 Dias" |
| **O** | Objetivo final | "20 Clientes Premium" |

**Exemplo Completo:**
> "O Sistema Neurológico de Vendas B2B para Coaches High-Ticket: 20 Clientes Premium em 90 Dias"

[Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 3 - Fase 4]

#### Checklist de Revisão Final

- [ ] Resolve todos os problemas mapeados?
- [ ] É incomparável com a concorrência?
- [ ] Tem um preço premium justificado?
- [ ] Tem uma garantia imbatível?
- [ ] Tem um nome magnético?

[Fonte: 03_OFFER_CREATION_SYSTEM.md, Seção 3 - Passo 10]

---

## Hormozi Frameworks Operacionais

> **Fonte:** `01_FRAMEWORKS_OPERACIONAIS.md`

### Framework Nível Zero: Pensamento Divergente

> "A criação de uma oferta irresistível é um exercício de **pensamento divergente**. A vida e os negócios pagam pela capacidade de gerar múltiplas soluções para um único problema."
> [Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 2.1]

**Algoritmo do "Tijolo Mental":**
1. Identificar os "Blocos de Construção" (componentes fundamentais)
2. Questionar as Premissas (tamanho? formato? material?)
3. Gerar Múltiplas Soluções (5-10 ideias sem julgamento)
4. Selecionar e Convergir (usar Equação de Valor para análise)

### Definição de Grand Slam Offer

Uma Grand Slam Offer combina cinco componentes críticos:
1. **Promoção atraente**
2. **Proposta de valor incomparável**
3. **Preço premium**
4. **Garantia imbatível**
5. **Modelo de dinheiro** que permite ser pago para adquirir novos clientes

> "A GSO permite vender em uma 'categoria de um' ou 'vender no vácuo'. Isso força a decisão de compra entre o seu produto e nada."
> [Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 3.3]

### Framework de Precificação por Nicho

| Nível | Exemplo | Preço |
|-------|---------|-------|
| Genérico | "Curso de Gestão de Tempo" | $19 |
| Nicho Amplo | "Gestão de Tempo Para Profissionais de Vendas" | $99 |
| Nicho Específico | "Gestão de Tempo para Representantes de Vendas B2B Outbound" | $499 |
| Hiper-Nicho | "Gestão de Tempo para Representantes de Vendas B2B Outbound de Ferramentas Elétricas" | $1997 |

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.2]

### O Círculo Virtuoso do Preço

1. Preços altos aumentam o investimento emocional e valor percebido
2. Aumentam os resultados dos clientes ("Aqueles que pagam mais, prestam mais atenção")
3. Atraem os melhores clientes, mais comprometidos
4. Multiplicam a margem, permitindo reinvestimento em experiência excepcional

**Prova Psicológica:**
> "Em um estudo, participantes avaliaram três vinhos com preços diferentes, classificando-os em ordem de preço. No entanto, todos eram idênticos."
> [Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.3]

### 3 (ou 2) Maneiras de Crescer

1. Conseguir mais clientes
2. Aumentar valor médio de compra (lucro por compra)
3. Fazê-los comprar mais vezes

**Simplificação:** 2 e 3 = aumentar o valor de cada cliente

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.4]

### Estratégias de Aquisição: More. Better. Different.

| Ordem | Estratégia | Quando |
|-------|------------|--------|
| 1º | **MAIS** | Fazer mais do que já funciona para gerar volume de dados |
| 2º | **MELHOR** | Otimizar eficiência quando volume estabelecido |
| 3º | **DIFERENTE** | Procurar novo canal/modelo quando otimização atinge retornos decrescentes |

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.5]

### Framework de Vendas: C.L.O.S.E.R.

| Letra | Ação | Descrição |
|-------|------|-----------|
| **C** | Clarify | Esclareça por que o prospect está ali |
| **L** | Label | Rotule o problema deles com empatia |
| **O** | Overview | Apresente o passado deles e pinte o futuro ideal |
| **S** | Sell | Venda a solução como veículo para o futuro ideal |
| **E** | Explain | Explique e resolva objeções como pedidos de informação |
| **R** | Reinforce | Reforce a decisão para eliminar remorso do comprador |

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 6.1]

### Framework de Retenção: Os 4Rs

| R | Pergunta Estratégica |
|---|---------------------|
| **Retain** | Qual é nossa estratégia para manter clientes comprando? |
| **Review** | Temos sistema para coletar avaliações e depoimentos? |
| **Refer** | Temos programa de indicações para reduzir CAC? |
| **Resell** | Temos ofertas adicionais (upsells, cross-sells)? |

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 6.2]

---

*Hormozi Framework Enrichment - ENR-004*
*Fontes: 01_FRAMEWORKS_OPERACIONAIS.md, 02_VALUE_EQUATION_ENGINE.md, 03_OFFER_CREATION_SYSTEM.md*
*Data da Extração: 2026-01-23*


---

## Referência: references/create-order-bump.md

# Create Order Bump Task

## Purpose
Criar order bumps de alta conversão que aumentam o ticket médio no momento do checkout, oferecendo complemento irresistível com um clique.

## When to Use
- Página de checkout/pagamento
- Carrinho de compras
- Processo de finalização de pedido
- Qualquer momento pré-compra onde pode adicionar valor

## Inputs

```yaml
required:
  - main_product: Produto principal sendo comprado
  - main_price: Preço do produto principal
  - bump_product: Produto do order bump
  - bump_price: Preço do order bump
  - target_avatar: Quem é o cliente

optional:
  - relationship: Como bump complementa o principal
  - perceived_value: Valor percebido do bump
  - urgency_element: Se há escassez específica
  - copywriter_preference: Copywriter específico desejado
```

## Workflow

### Step 1: Bump Strategy Selection
```
Escolher tipo de order bump:

1. ACELERADOR
   - Faz o resultado chegar mais rápido
   - "Atalho" para o sucesso
   Ex: Templates prontos, checklists, quick-start

2. COMPLEMENTO ESSENCIAL
   - Algo que "falta" no produto principal
   - Melhora significativamente a experiência
   Ex: Workbook, guia de implementação

3. VERSÃO PREMIUM
   - Upgrade do produto principal
   - Mais features/acesso
   Ex: Acesso VIP, módulo extra, comunidade

4. FERRAMENTA
   - Software, template, recurso prático
   - Uso imediato
   Ex: Planilha, script, checklist

5. SUPORTE
   - Ajuda adicional
   - Contato direto
   Ex: Sessão de consultoria, grupo privado

6. CONTEÚDO BÔNUS
   - Material extra exclusivo
   - Aprofundamento
   Ex: Masterclass, entrevistas, case studies
```

### Step 2: Pricing Psychology
```
Definir preço do bump:

REGRA DE OURO: 10-25% do produto principal

EXEMPLOS:
- Produto R$297 → Bump R$37-67
- Produto R$997 → Bump R$97-197
- Produto R$1997 → Bump R$197-397

ANCORAGEM:
- Mostre valor original do bump
- "De R$197 por apenas R$47"
- Economia clara e específica

JUSTIFICATIVA:
- "Preço especial porque você já está comprando [principal]"
- "Disponível apenas durante o checkout"
```

### Step 3: Copy Structure
```
Estrutura do box de order bump:

┌─────────────────────────────────────────┐
│ ☐ SIM! Adicione [Bump] por apenas R$X  │
├─────────────────────────────────────────┤
│ [HEADLINE chamativa]                     │
│                                          │
│ [2-3 linhas descrevendo o bump]          │
│                                          │
│ • Benefício 1                            │
│ • Benefício 2                            │
│ • Benefício 3                            │
│                                          │
│ ~~De R$Y~~ → Apenas R$X (Economia de Z%) │
│                                          │
│ ⚠️ Oferta exclusiva do checkout          │
└─────────────────────────────────────────┘
```

### Step 4: Headline Formulas
```
Fórmulas de headline para order bump:

ONE-TIME OFFER:
"Oferta única: [Bump] por R$X"
"Só durante o checkout: [Bump]"

ENHANCEMENT:
"Turbine seu [produto principal] com [bump]"
"Maximize seus resultados com [bump]"

ACCELERATION:
"Chegue em [resultado] 2x mais rápido"
"O atalho para [benefício]"

FEAR OF MISSING:
"Não perca: [Bump] por apenas R$X"
"Última chance de adicionar [bump]"

EXCLUSIVE:
"Exclusivo para quem está comprando agora"
"Disponível apenas neste momento"
```

### Step 5: Description Copy
```
Fórmulas para descrição curta:

PROBLEMA → SOLUÇÃO (2 linhas)
"Muitos [avatares] travam em [problema específico].
[Bump] resolve isso com [solução]."

RESULTADO ESPECÍFICO (2 linhas)
"[Bump] te ajuda a [resultado 1] e [resultado 2]
em [tempo curto] — sem [dificuldade comum]."

COMPLEMENTO NATURAL (2 linhas)
"[Produto principal] te ensina [o quê].
[Bump] te dá [ferramenta/atalho] para aplicar mais rápido."

SOCIAL PROOF (2 linhas)
"[X]% dos nossos clientes adicionam [bump].
Eles conseguem [resultado] em metade do tempo."
```

### Step 6: Bullet Points
```
3-5 bullets de alto impacto:

FORMATO: ✓ [Benefício específico e tangível]

EXEMPLOS:
✓ Templates prontos para copiar e colar
✓ Economize [X] horas de trabalho
✓ Funciona mesmo se você é iniciante
✓ Atualizações incluídas para sempre
✓ Usado por [número] de [avatares] com sucesso
```

### Step 7: Visual Design Guidelines
```
Elementos visuais do box:

CHECKBOX
- Grande e clicável
- Cor que destaca (mas não grita)
- Estado checked = verde/azul

DESTAQUE
- Borda colorida ou fundo diferenciado
- Deve parecer "especial" mas não spam
- Consistente com design da página

POSIÇÃO
- Logo acima do botão de compra
- Visível sem scroll excessivo
- Fácil de notar e fácil de marcar

TAMANHO
- Compacto mas legível
- Não pode parecer "escondido"
- Mobile-friendly (botão grande)
```

### Step 8: A/B Test Variations
```
Criar variações para teste:

VARIAÇÃO A: Headline focada em atalho
VARIAÇÃO B: Headline focada em economia
VARIAÇÃO C: Headline focada em exclusividade

ELEMENTOS PARA TESTAR:
- Preço do bump (R$47 vs R$67)
- Posição do checkbox (início vs fim)
- Comprimento do copy (curto vs médio)
- Com/sem timer de urgência
```

### Step 9: Quality Check
```
Verificar order bump:

RELEVÂNCIA
- [ ] Bump complementa naturalmente o principal?
- [ ] Faz sentido para o avatar?
- [ ] Resolve problema real?

PREÇO
- [ ] Preço entre 10-25% do principal?
- [ ] Economia está clara?
- [ ] Valor percebido > preço?

COPY
- [ ] Headline chama atenção?
- [ ] Benefícios claros em 5 segundos?
- [ ] CTA impossível de ignorar?

UX
- [ ] Fácil de adicionar (1 clique)?
- [ ] Visível mas não invasivo?
- [ ] Funciona em mobile?

ÉTICA
- [ ] Oferece valor real?
- [ ] Não é enganoso?
- [ ] Cliente ficaria feliz em ter comprado?
```

## Output

```yaml
format: markdown
sections:
  - bump_strategy
  - complete_bump_copy
  - headline_variations (3)
  - bullet_variations
  - design_guidelines
  - ab_test_plan
  - quality_checklist
```

## Copywriter Recommendations

| Contexto | Copywriter Ideal | Por quê |
|----------|------------------|---------|
| Bump de alto valor | Alex Hormozi | Value stacking, pricing |
| Bump com urgência | Dan Kennedy | Escassez, ação imediata |
| Bump de ferramenta | Joe Sugarman | Demonstração lógica |
| Bump premium/sofisticado | David Ogilvy | Elegância, aspiracional |
| Bump com story | Gary Halbert | Conexão emocional |

## Order Bump Templates

### Template 1: Acelerador
```markdown
☐ SIM! Adicione o [Nome do Bump] por apenas R$47

### Chegue em [resultado] 2x mais rápido

[Produto principal] te ensina o método completo.
[Bump] te dá os atalhos que economizam [X] horas.

✓ [X] templates prontos para copiar e colar
✓ Checklists de implementação passo-a-passo
✓ [Bônus específico] incluído

~~De R$197~~ → Apenas R$47 (76% OFF)

⚠️ Oferta exclusiva do checkout — não disponível depois
```

### Template 2: Complemento Essencial
```markdown
☐ SIM! Quero o [Nome] junto!

### O complemento perfeito para [produto principal]

Enquanto [produto] te ensina a [habilidade],
[bump] te dá [ferramenta] para aplicar imediatamente.

✓ [Benefício tangível 1]
✓ [Benefício tangível 2]
✓ [Benefício tangível 3]

Por apenas R$67 (valor de R$197)

💡 85% dos nossos clientes adicionam este item
```

### Template 3: Versão VIP
```markdown
☐ UPGRADE: Acesso VIP por +R$97

### Transforme sua experiência em algo exclusivo

Tudo que vem no [produto principal], MAIS:

✓ Acesso à comunidade privada
✓ [X] sessões de Q&A ao vivo
✓ Suporte prioritário por [canal]
✓ [Bônus exclusivo VIP]

Valor total: R$497 → Seu upgrade: apenas R$97

⚡ Disponível APENAS durante o checkout
```

### Template 4: Ferramenta Prática
```markdown
☐ Adicionar [Nome da Ferramenta] — R$37

### A ferramenta que faz [resultado] em [tempo]

Chega de [problema comum]. Com [ferramenta]:

✓ [Funcionalidade 1] — economize [X] horas
✓ [Funcionalidade 2] — elimine [dor]
✓ [Funcionalidade 3] — garanta [resultado]

Inclui atualizações para sempre.

~~R$97~~ → R$37 (só no checkout)
```

### Template 5: Suporte Premium
```markdown
☐ SIM! Quero suporte direto por +R$147

### Nunca fique travado: suporte 1-a-1

Além do [produto principal], você terá:

✓ [X] minutos de consultoria individual
✓ Revisão personalizada do seu [projeto]
✓ Acesso direto por [WhatsApp/email] por [período]

De R$497 → Apenas R$147 (economize 70%)

🎯 Perfeito para quem quer resultado garantido
```

## Metrics to Track

```yaml
order_bump_metrics:
  take_rate: "% que adiciona o bump"
  revenue_per_order: "Aumento médio do ticket"
  refund_rate: "% de reembolso do bump vs principal"
  target_take_rate: "20-40% é considerado bom"
```

## Quick Reference: Bump Formulas

```
HEADLINE:
- "Oferta única: [Bump] por R$X"
- "Turbine seu [principal] com [bump]"
- "Chegue em [resultado] mais rápido"

DESCRIÇÃO:
- "[Avatar] travam em [problema]. [Bump] resolve."
- "[Bump] te ajuda a [resultado] em [tempo]."

BULLETS:
- ✓ [Benefício tangível e específico]
- ✓ Economize [X] horas/dinheiro
- ✓ Usado por [número] de [avatares]

URGÊNCIA:
- "Oferta exclusiva do checkout"
- "Não disponível depois"
- "X% dos clientes adicionam"
```

---

*Task Version: 1.0*
*Primary Framework: Value Stacking (Alex Hormozi) + One-Time Offer (Dan Kennedy)*


---

## Referência: references/create-proof-stack.md

# Create Proof Stack - Evidence Engineering for Copy

## Purpose

Build a comprehensive Proof Stack that eliminates skepticism and makes your claims irresistible. This task transforms scattered evidence into a systematic arsenal of proof that compounds credibility at every touchpoint.

## When to Use

- **Before writing any sales page or VSL** - Proof must be engineered, not improvised
- When claims seem "too good to be true" and need support
- When competing against established brands with social proof advantage
- When entering skeptical markets (finance, health, make-money)
- When price point requires higher trust (high-ticket $1000+)
- When conversion rates are low despite good copy fundamentals

## Gary Bencivenga on Proof

```
"Proof is the missing ingredient in most copy.

The Persuasion Equation requires UNQUESTIONABLE PROOF.
Not some proof. Not decent proof. Unquestionable proof.

Stack proof until skepticism becomes impossible.
Layer it. Build it. Compound it.

Because here's the truth: people WANT to believe.
They WANT your solution to work.
Give them permission to believe by removing every doubt."

-- Gary Bencivenga, Bencivenga 100 Seminar
```

## Claude Hopkins on Proof

```
"Platitudes and generalities roll off the human understanding
like water from a duck. They leave no impression whatever.

But SPECIFIC claims - backed by SPECIFIC proof -
stick in the mind like a barb.

'Bottles washed with live steam' beats 'pure' every time.
'37% improvement in controlled study' beats 'much better.'

The more specific, the more believable.
The more believable, the more persuasive."

-- Claude Hopkins, Scientific Advertising
```

## The 11 Proof Elements

Based on Bencivenga's Persuasion Equation and proof-stacking methodology:

```
+-----------------------------------------------------------------------+
|                    THE 11 PROOF ELEMENTS                               |
+-----------------------------------------------------------------------+
|                                                                        |
|   TIER 1: DEMONSTRATION PROOF (Strongest)                             |
|   ----------------------------------------                             |
|   1. DEMONSTRATION      - Show the product working                    |
|   2. TESTIMONIALS       - Real results from real people               |
|   3. CASE STUDIES       - Detailed success stories                    |
|                                                                        |
|   TIER 2: AUTHORITY PROOF                                             |
|   ----------------------------------------                             |
|   4. EXPERT ENDORSEMENT - Credentialed authorities                    |
|   5. MEDIA MENTIONS     - Press, publications, features               |
|   6. CREDENTIALS        - Your qualifications, history                |
|                                                                        |
|   TIER 3: LOGICAL PROOF                                               |
|   ----------------------------------------                             |
|   7. REASON WHY         - Explain HOW/WHY it works                    |
|   8. SPECIFICITY        - Precise numbers, details                    |
|   9. THE EXPOSE         - Reveal hidden truths                        |
|                                                                        |
|   TIER 4: RISK REVERSAL PROOF                                         |
|   ----------------------------------------                             |
|   10. CREATIVE GUARANTEE - Named, memorable, strong                   |
|   11. CANDOR            - Honest admission of limitations             |
|                                                                        |
+-----------------------------------------------------------------------+
```

## Inputs

```yaml
required:
  - product_name: What you're selling
  - main_promise: Your primary benefit/result claim
  - target_audience: Who you're selling to
  - price_point: Low (<$100) | Mid ($100-$1000) | High ($1000-$5000) | Premium ($5000+)

optional:
  - existing_testimonials: Raw testimonials you have
  - case_study_data: Customer success data
  - credentials: Your/company qualifications
  - media_mentions: Press, features, publications
  - expert_endorsements: Authority quotes/recommendations
  - statistics: Data, studies, research
  - guarantee_current: Your current guarantee
```

## Workflow

### Step 1: Proof Audit

Before building new proof, audit what you already have.

```
=====================================================================
PROOF AUDIT WORKSHEET
=====================================================================

For each proof element, rate your current strength:

TIER 1: DEMONSTRATION PROOF
-------------------------------------------------------------------
[ ] 1. DEMONSTRATION
    Current status: ___ None / ___ Weak / ___ Medium / ___ Strong
    What I have: ________________________________
    What I need: ________________________________

[ ] 2. TESTIMONIALS
    Quantity: ___
    Quality (with specifics): ___ / 10
    What I have: ________________________________
    What I need: ________________________________

[ ] 3. CASE STUDIES
    Detailed stories: ___
    With data: ___ / ___
    What I have: ________________________________
    What I need: ________________________________

TIER 2: AUTHORITY PROOF
-------------------------------------------------------------------
[ ] 4. EXPERT ENDORSEMENTS
    Number: ___
    Recognizable names: ___ / ___
    What I have: ________________________________
    What I need: ________________________________

[ ] 5. MEDIA MENTIONS
    Publications: ___
    Quality: ___ None / ___ Weak / ___ Medium / ___ Strong
    What I have: ________________________________
    What I need: ________________________________

[ ] 6. CREDENTIALS
    Your qualifications: ________________________________
    Company history: ________________________________
    What I can leverage: ________________________________

TIER 3: LOGICAL PROOF
-------------------------------------------------------------------
[ ] 7. REASON WHY
    Can explain mechanism? ___ Yes / ___ No
    How product works: ________________________________

[ ] 8. SPECIFICITY
    Have precise numbers? ___ Yes / ___ Partial / ___ No
    Statistics available: ________________________________

[ ] 9. THE EXPOSE
    Industry secrets to reveal? ___ Yes / ___ No
    Hidden truths: ________________________________

TIER 4: RISK REVERSAL PROOF
-------------------------------------------------------------------
[ ] 10. GUARANTEE
     Current guarantee: ________________________________
     Named/memorable? ___ Yes / ___ No
     Strength: ___ Weak / ___ Standard / ___ Strong / ___ Outrageous

[ ] 11. CANDOR
     Honest limitations: ________________________________
     "Not for everyone" angle: ________________________________

AUDIT SCORE:
- Strong elements: ___ / 11
- Medium elements: ___ / 11
- Weak/Missing: ___ / 11

PRIORITY GAPS (Focus here first):
1. ________________________________
2. ________________________________
3. ________________________________
```

### Step 2: Testimonial Engineering

Raw testimonials are weak. Engineered testimonials sell.

```
=====================================================================
TESTIMONIAL ENGINEERING PROCESS
=====================================================================

THE PROBLEM WITH MOST TESTIMONIALS:
- "Great product!" (Useless - no specifics)
- "I loved it!" (Useless - no transformation)
- "5 stars!" (Useless - no story)

WHAT MAKES A TESTIMONIAL POWERFUL:

1. SPECIFICITY
   Bad:  "I lost weight"
   Good: "I lost 23 pounds in 8 weeks"

2. TRANSFORMATION (Before → After)
   Bad:  "It helped me"
   Good: "Before: couldn't climb stairs. After: ran my first 5K"

3. TIMEFRAME
   Bad:  "Results came quickly"
   Good: "In just 6 weeks, I saw..."

4. CREDENTIALS (if relevant)
   Bad:  "John S."
   Good: "John Smith, CFO at Fortune 500 company"

5. RELATABILITY
   Bad:  Generic praise
   Good: "I was skeptical too, because I'd tried 4 other programs..."

6. OBJECTION HANDLING
   Bad:  No mention of concerns
   Good: "I worried about the price, but it paid for itself in 2 months"

-----------------------------------------------------------------------
TESTIMONIAL COLLECTION TEMPLATE
-----------------------------------------------------------------------

Send to customers who got results:

"Hi [Name],

I'm gathering stories for our website and would love to feature yours.

Could you answer a few quick questions?

1. What was your situation BEFORE? (Be specific)
2. What specific RESULTS did you achieve? (Numbers if possible)
3. How LONG did it take?
4. What was your biggest CONCERN before buying?
5. What would you tell someone who's on the fence?

[For high-ticket: Include video testimonial request]

Thanks!"

-----------------------------------------------------------------------
TESTIMONIAL UPGRADE PROCESS
-----------------------------------------------------------------------

Take existing testimonial:
"Great program, really helped me!"

Ask follow-up questions to upgrade:
- "What specifically changed for you?"
- "Can you share numbers or metrics?"
- "What was your situation before?"
- "How long until you saw results?"

Upgraded testimonial:
"Before [Product], I was struggling with [specific problem] -
I'd tried [other solutions] with no luck. Within [timeframe],
I achieved [specific result with number]. The best part?
[Unexpected benefit]. If you're on the fence like I was,
just try it - [strongest endorsement]."

-----------------------------------------------------------------------
TESTIMONIAL CATEGORIES TO COLLECT
-----------------------------------------------------------------------

For a complete proof stack, collect testimonials for:

[ ] RESULT TESTIMONIALS
    "I achieved [specific measurable outcome]..."

[ ] SKEPTIC TESTIMONIALS
    "I was doubtful at first, but..."

[ ] SPEED TESTIMONIALS
    "In just [timeframe], I..."

[ ] EASE TESTIMONIALS
    "It was so much easier than I expected..."

[ ] OBJECTION HANDLER TESTIMONIALS
    "I worried about [price/time/complexity] but..."

[ ] "DESPITE" TESTIMONIALS
    "Even though I [obstacle], I still achieved..."

[ ] COMPARISON TESTIMONIALS
    "Unlike [competitor/other solution], this actually..."

[ ] TRANSFORMATION TESTIMONIALS
    "Before: [state]. After: [state]..."
```

### Step 3: Case Study Development

Case studies are testimonials on steroids - deeper, more documented, more persuasive.

```
=====================================================================
CASE STUDY DEVELOPMENT FRAMEWORK
=====================================================================

WHAT MAKES A CASE STUDY POWERFUL:
- STORY structure (relatable)
- SPECIFIC data (credible)
- DOCUMENTED journey (transparent)
- THIRD-PERSON or INTERVIEW format (objective feel)

-----------------------------------------------------------------------
CASE STUDY TEMPLATE
-----------------------------------------------------------------------

## [Name] - [Headline Result]

### Background
- Who: [Name, title, company, relevant credentials]
- Situation: [Context before the product/service]
- Challenge: [Specific problem they faced]
- Previous attempts: [What they'd tried that didn't work]

### The Discovery
- How found: [How they discovered your solution]
- Initial skepticism: [What concerns they had]
- Decision point: [What convinced them to try]

### The Journey
- Implementation: [What they did, step by step]
- Timeline: [How long each phase took]
- Challenges faced: [Any obstacles along the way]
- Support received: [How they were helped]

### The Results

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| [KPI 1] | [X] | [Y] | [+/- %] |
| [KPI 2] | [X] | [Y] | [+/- %] |
| [KPI 3] | [X] | [Y] | [+/- %] |

### Key Takeaways
- [Insight 1]
- [Insight 2]
- [Insight 3]

### In Their Own Words
"[Direct quote from the customer - most powerful moment]"

-----------------------------------------------------------------------
CASE STUDY DATA COLLECTION
-----------------------------------------------------------------------

Interview questions for case study subjects:

BACKGROUND:
1. What was your role/situation when you started?
2. What specific problem were you trying to solve?
3. What had you tried before that didn't work?
4. What was the cost of NOT solving this problem?

DISCOVERY:
5. How did you first hear about [product]?
6. What were your initial thoughts/concerns?
7. What convinced you to try it?

JOURNEY:
8. Walk me through your first week/month.
9. What was easier than expected? Harder?
10. When did you first notice results?

RESULTS:
11. What specific metrics improved?
12. Can you share before/after numbers?
13. What unexpected benefits did you discover?
14. How has this impacted your life/business?

RECOMMENDATION:
15. What would you tell someone considering this?
16. Who is this perfect for? Not right for?

-----------------------------------------------------------------------
CASE STUDY FORMATS
-----------------------------------------------------------------------

FORMAT 1: The Full Story (1000-2000 words)
- Best for: Sales pages, downloadable PDFs
- Include: Complete narrative, all data, full quotes

FORMAT 2: The Highlight Reel (300-500 words)
- Best for: Website testimonial sections
- Include: Key stats, best quote, transformation summary

FORMAT 3: The Quick Hit (50-100 words)
- Best for: Social proof blocks, bullet points
- Include: Name, result, timeframe, one quote

FORMAT 4: The Video Case Study (2-5 minutes)
- Best for: Sales pages, YouTube, ads
- Include: Customer on camera telling their story

FORMAT 5: The Before/After (Visual)
- Best for: Health, fitness, design, tangible results
- Include: Photos/screenshots with captions
```

### Step 4: Authority Indicators

Build credibility through association, credentials, and third-party validation.

```
=====================================================================
AUTHORITY INDICATORS FRAMEWORK
=====================================================================

AUTHORITY ELEMENTS:

1. EXPERT ENDORSEMENTS
   ├── Industry experts
   ├── Academic authorities
   ├── Recognized practitioners
   ├── Celebrity/influencer (if relevant)
   └── Customer who IS an expert

2. MEDIA MENTIONS
   ├── Major publications
   ├── Industry publications
   ├── Podcasts/shows
   ├── News coverage
   └── "As seen in" logos

3. YOUR CREDENTIALS
   ├── Education/certifications
   ├── Years of experience
   ├── Notable clients/employers
   ├── Books/publications
   ├── Speaking engagements
   └── Awards/recognition

4. COMPANY CREDENTIALS
   ├── Years in business
   ├── Number of customers served
   ├── Revenue/growth metrics
   ├── Team expertise
   └── Industry position

5. SOCIAL PROOF METRICS
   ├── Total customers
   ├── Success rate
   ├── Satisfaction rate
   ├── Reviews/ratings
   └── Community size

-----------------------------------------------------------------------
AUTHORITY ELEMENT TEMPLATES
-----------------------------------------------------------------------

EXPERT ENDORSEMENT FORMAT:
"[Quote about product/results]"
— [Name], [Credentials that establish authority]
  [Optional: Photo, logo, link]

Example:
"This is the most comprehensive approach to copywriting I've seen
in my 30 years in direct response."
— Gary Bencivenga, Former Chief Copywriter at Rodale Press
  Named "World's Greatest Living Copywriter"

---

MEDIA MENTION FORMAT:
"[Publication name] featured/covered/reviewed [product] as
'[quote from article]'"

OR

Logos: "As Featured In: [Forbes] [Inc] [Entrepreneur] [WSJ]"

---

CREDENTIALS DISPLAY FORMAT:

[Your Name]
[Title/Role]

- [Credential 1 with specific detail]
- [Credential 2 with specific detail]
- [Credential 3 with specific detail]

"[Brief personal statement about why you're qualified]"

Example:
"After 17 years helping 2,340+ businesses increase conversion rates,
I've identified the exact patterns that separate 6-figure copy from
7-figure copy."

---

SOCIAL PROOF METRICS FORMAT:

[Number]+ [What]
"[Supporting statement]"

Examples:
"47,832+ students trained worldwide"
"$2.1B in tracked sales generated for clients"
"94% student satisfaction rate"
"4.9/5 average rating across 3,200+ reviews"

-----------------------------------------------------------------------
AUTHORITY STACKING ORDER
-----------------------------------------------------------------------

Stack authority elements in this order for maximum impact:

1. MOST RECOGNIZABLE FIRST
   - If you have a famous endorsement, lead with it
   - Big publication logos before small ones

2. MOST RELEVANT SECOND
   - Industry-specific authorities
   - Credentials most relevant to the claim

3. QUANTITY THIRD
   - Volume metrics (customers, students, sales)
   - Aggregated ratings/reviews

4. PERSONAL LAST
   - Your own credentials
   - Company history

WHY THIS ORDER:
- Third-party validation > Self-claims
- Recognizable > Unknown
- Many > Few (for general social proof)
```

### Step 5: Logical Proof (Reason Why + Specificity)

Make your claims intellectually irresistible.

```
=====================================================================
LOGICAL PROOF FRAMEWORK
=====================================================================

REASON WHY PROOF
----------------
Don't just claim - EXPLAIN.

PATTERN:
"[Claim] because [specific mechanism/process/reason]"

EXAMPLES:

WEAK: "Our beer is pure."
STRONG: "Our beer is pure because we wash every bottle with live
steam at 245 degrees - a process that kills 99.97% of contaminants."

WEAK: "You'll lose weight fast."
STRONG: "You'll lose weight fast because this method targets the
specific hormone (leptin) that controls your body's fat-burning switch."

WEAK: "Our software is more secure."
STRONG: "Our software is more secure because we use 256-bit AES
encryption - the same standard used by the U.S. military."

---

SPECIFICITY PROOF
-----------------
Replace vague with precise.

| Vague | Specific |
|-------|----------|
| "Many customers" | "47,832 customers in 23 countries" |
| "High success rate" | "94.3% achieve their goal within 90 days" |
| "Years of experience" | "17 years, 2,340 projects, 98.7% satisfaction" |
| "Significant results" | "Average 37% increase in [metric]" |
| "Quick delivery" | "Delivered in 4 business days or it's free" |
| "Affordable" | "$97/month - less than $3.23/day" |
| "Proven method" | "Tested with 1,247 users in controlled study" |

---

THE EXPOSE PROOF
----------------
Reveal what others hide.

PATTERN:
"What [industry/competitors/they] don't want you to know is..."
"The truth about [topic] that [authority] won't tell you..."
"Here's why [common belief] is actually wrong..."

PURPOSE:
- Positions you as insider/truth-teller
- Creates trust through transparency
- Differentiates from competitors who hide

EXAMPLE:
"What most marketing agencies won't tell you is that 73% of their
'proprietary methods' are just basic tactics anyone can learn.
Here's what actually works..."

-----------------------------------------------------------------------
LOGICAL PROOF CHECKLIST
-----------------------------------------------------------------------

For each major claim in your copy:

[ ] CLAIM STATED: What are you claiming?
    ________________________________

[ ] REASON WHY: Why is this claim true?
    ________________________________

[ ] MECHANISM: How does it work?
    ________________________________

[ ] SPECIFIC DATA: What numbers support this?
    ________________________________

[ ] SOURCE: Where does this data come from?
    ________________________________

[ ] VERIFICATION: Can the reader verify this?
    ________________________________
```

### Step 6: Risk Reversal Proof

Remove the final barrier to action.

```
=====================================================================
RISK REVERSAL PROOF FRAMEWORK
=====================================================================

CREATIVE GUARANTEE
------------------
A weak guarantee: "30-day money-back guarantee"
A strong guarantee: "The [Named] Guarantee"

NAMING YOUR GUARANTEE:

Pattern: "The [Adjective/Concept] [Guarantee Type]"

Examples:
- "The No-Weasel-Clauses Guarantee"
- "The 'Better Than Free' Guarantee"
- "The Double-Your-Investment Guarantee"
- "The 'We Earn Your Business' Guarantee"
- "The Iron-Clad 90-Day Promise"

GUARANTEE STRENGTH LEVELS:

LEVEL 1 - BASIC:
"30-day money-back guarantee"
(Everyone has this - no differentiation)

LEVEL 2 - EXTENDED:
"Full 365-day money-back guarantee"
(Longer = more confidence)

LEVEL 3 - SPECIFIC:
"If you don't see [specific result] in [timeframe], full refund"
(Ties guarantee to outcome)

LEVEL 4 - COMPENSATION:
"If you're not satisfied, full refund PLUS [bonus/compensation]"
(You take on MORE than just the price risk)

LEVEL 5 - OUTRAGEOUS:
"If this doesn't [transform your life], I'll refund every penny
AND pay you $100 for wasting your time"
(Makes NOT buying the risky choice)

---

GUARANTEE TEMPLATE:

## The [Name] Guarantee

Here's my promise to you:

Try [product] for [timeframe]. If you don't [specific outcome],
or if you're not completely satisfied for ANY reason, simply
[contact method] and I'll refund every penny.

No questions. No hassle. No hard feelings.

[Optional: Plus bonus/compensation]

You have nothing to lose and everything to gain.

---

CANDOR (Damaging Admission)
---------------------------
Counter-intuitively, admitting limitations BUILDS trust.

WHY IT WORKS:
- Shows honesty when honesty is rare
- Makes other claims more believable
- Filters out wrong-fit customers (reducing refunds)
- Creates relatability ("finally, someone honest!")

CANDOR PATTERNS:

"This isn't for everyone. If you [wrong fit], this isn't right for you."

"I'll be honest - this takes work. If you're looking for a magic
pill, you won't find it here."

"Here's what this WON'T do: [limitation]. But here's what it WILL
do: [benefit]."

"Warning: This only works if you [requirement]. If you're not
willing to [action], please don't buy."

CANDOR PLACEMENT:
- After a big claim (balances)
- Before the offer (filters)
- In FAQ section (addresses concerns)
```

### Step 7: Assemble the Proof Stack

Compile all elements into a usable document.

```
=====================================================================
PROOF STACK OUTPUT DOCUMENT
=====================================================================

## PRODUCT/SERVICE:
[Name]

## MAIN PROMISE:
[Your primary claim]

## TARGET AUDIENCE:
[Who you're selling to]

## PRICE POINT:
[Amount] - [Category]

---

## PROOF INVENTORY

### TIER 1: DEMONSTRATION PROOF

**1. DEMONSTRATIONS**
[How product is shown working]
- Demo 1: [Description]
- Demo 2: [Description]

**2. TESTIMONIALS** ([Total count])

TOP TESTIMONIALS (Ranked by power):

#1 - RESULT TESTIMONIAL:
"[Quote with specifics]"
— [Name], [Credentials]
Result: [Specific outcome]
Timeframe: [How long]

#2 - SKEPTIC TESTIMONIAL:
"[Quote addressing initial doubt]"
— [Name], [Credentials]
Previous attempts: [What failed before]

#3 - OBJECTION-HANDLER TESTIMONIAL:
"[Quote addressing common concern]"
— [Name], [Credentials]
Objection handled: [What concern]

[Continue for 5-10 testimonials]

**3. CASE STUDIES** ([Total count])

CASE STUDY #1: [Name] - [Headline Result]
- Before: [Situation]
- After: [Outcome]
- Key metric: [Number]
- Timeline: [Duration]
- Best quote: "[Quote]"
- Full story: [Link/location]

[Continue for each case study]

---

### TIER 2: AUTHORITY PROOF

**4. EXPERT ENDORSEMENTS**

"[Quote]"
— [Name], [Credentials]

[List all endorsements]

**5. MEDIA MENTIONS**

As Featured In:
- [Publication 1] - "[Quote/headline from feature]"
- [Publication 2] - "[Quote/headline from feature]"

Logos available: [Yes/No]

**6. CREDENTIALS**

Your Credentials:
- [Credential 1]
- [Credential 2]
- [Credential 3]

Company Credentials:
- [Years in business]
- [Customers served]
- [Other metrics]

---

### TIER 3: LOGICAL PROOF

**7. REASON WHY STATEMENTS**

For each major claim:

CLAIM: "[Statement]"
REASON WHY: "[Because explanation]"
MECHANISM: "[How it works]"

[Repeat for each claim]

**8. SPECIFIC DATA POINTS**

| Claim | Specific Proof |
|-------|---------------|
| [Claim 1] | [Number + context] |
| [Claim 2] | [Number + context] |
| [Claim 3] | [Number + context] |

**9. THE EXPOSE**

Industry truth to reveal:
"[What competitors/industry hides]"

---

### TIER 4: RISK REVERSAL PROOF

**10. THE GUARANTEE**

Name: "The [Name] Guarantee"

Full text:
"[Complete guarantee language]"

Strength level: [1-5]

**11. CANDOR STATEMENTS**

Honest limitations:
- "[What product doesn't do]"
- "[Who product isn't for]"
- "[Required commitment]"

---

## PROOF DEPLOYMENT GUIDE

### For Sales Page:
- Lead with: [Strongest proof element]
- After headline: [Social proof metrics]
- After mechanism: [Reason Why]
- After benefits: [Testimonials]
- Before offer: [Case study highlight]
- At offer: [Guarantee]
- In close: [Stack remaining proof]

### For Ads:
- Primary proof element: [Most compelling for cold traffic]
- Backup proof: [For retargeting]

### For Email:
- Proof per email: [Which element per message]
- Testimonial rotation: [Schedule]

---

## PROOF GAPS & ACTION ITEMS

Missing elements that need collection:

1. [ ] [Element] - Action: [What to do]
   Deadline: [When]

2. [ ] [Element] - Action: [What to do]
   Deadline: [When]

3. [ ] [Element] - Action: [What to do]
   Deadline: [When]

---

Generated: [Date]
Framework: Bencivenga Proof-Stacking Methodology + Hopkins Specificity Doctrine
```

## Common Mistakes

```
MISTAKE 1: TESTIMONIALS WITHOUT SPECIFICS
- Bad: "Great product, highly recommend!" - John
- Good: "In 6 weeks, I went from struggling to close 2 deals/month
  to consistently closing 8. The ROI is 10x what I paid."
  — John Smith, Sales Director at [Company]

MISTAKE 2: CLAIMING WITHOUT EXPLAINING
- Bad: "The most effective system available"
- Good: "The most effective system available - and here's why:
  [specific mechanism that makes it work]"

MISTAKE 3: ROUND NUMBERS (SEEM INVENTED)
- Bad: "About 50% improvement"
- Good: "47.3% improvement in controlled study with 1,247 participants"

MISTAKE 4: WEAK GUARANTEE (NO DIFFERENTIATION)
- Bad: "Money-back guarantee"
- Good: "The 'Double Your Results or Triple Your Money Back' Guarantee"

MISTAKE 5: NO CANDOR (SEEMS TOO PERFECT)
- Bad: "Perfect for everyone! No downsides!"
- Good: "This isn't for everyone. If you're not willing to put in
  30 minutes daily, this won't work for you."

MISTAKE 6: MISPLACED PROOF
- Bad: Strongest testimonial buried at bottom
- Good: Strongest proof near strongest claims, building throughout

MISTAKE 7: PROOF DOESN'T MATCH CLAIM
- Bad: Claim about speed, proof about quality
- Good: Each claim supported by directly relevant proof
```

## Integration

- **Prerequisites**: diagnose-awareness-level.md, create-unique-mechanism.md
- **Used by**: create-sales-page.md, create-vsl-script.md, create-ad-copy.md
- **Related**: apply-sugarman-triggers.md (Trigger #16: Proof of Value)
- **Checklists**: copy-quality-checklist.md
- **Agents**: @gary-bencivenga (Proof Elements), @claude-hopkins (Specificity)

## Quick Reference

### The Proof Equation

```
UNQUESTIONABLE PROOF =
  Demonstration × Authority × Logic × Risk Reversal

All four must be present. Missing one weakens the entire stack.
```

### Proof by Price Point

| Price | Minimum Proof Required |
|-------|----------------------|
| <$100 | 3+ testimonials, guarantee |
| $100-$1K | Case study, authority, strong guarantee |
| $1K-$5K | Multiple case studies, expert endorsements, named guarantee |
| $5K+ | Video testimonials, proven track record, outrageous guarantee |

### Bencivenga's Core Insight

> "Stack proof until skepticism becomes impossible.
> People WANT to believe. Give them permission.
> The more proof, the more sales. Always."

### Hopkins' Specificity Rule

> "Impressive claims are made far more impressive by making them exact.
> '37%' beats 'a lot.'
> '47,832 customers' beats 'thousands.'
> Specificity IS proof."

---

*Task Version: 1.0*
*Created: 2026-01-23*
*Framework: Bencivenga Proof-Stacking Methodology + Hopkins Specificity Doctrine*
*Agents: @gary-bencivenga, @claude-hopkins*


---

## Referência: references/create-thank-you-page.md

# Create Thank You Page Task

## Purpose
Criar páginas de obrigado estratégicas que confirmam a compra, reduzem buyer's remorse, apresentam upsell e iniciam o relacionamento de forma positiva.

## When to Use
- Após finalização de compra
- Após captura de lead (lead magnet)
- Após inscrição em webinar/evento
- Qualquer conversão que merece confirmação

## Inputs

```yaml
required:
  - conversion_type: O que o usuário fez (compra, lead, inscrição)
  - product_name: Nome do produto/oferta
  - next_steps: O que acontece agora
  - access_info: Como/quando terá acesso

optional:
  - upsell_offer: Oferta de upsell (One-Time Offer)
  - community_link: Link para comunidade/grupo
  - social_sharing: Se quer incentivar compartilhamento
  - referral_program: Se há programa de indicação
  - copywriter_preference: Copywriter específico desejado
```

## Workflow

### Step 1: Thank You Page Type Selection
```
Escolher tipo de página:

1. CONFIRMAÇÃO SIMPLES
   - Apenas confirma a ação
   - Próximos passos claros
   - Sem oferta adicional
   Uso: Leads, inscrições simples

2. THANK YOU + OTO (One-Time Offer)
   - Confirma + apresenta upsell
   - Oferta única, só agora
   - Timer de urgência
   Uso: Após compras, leads qualificados

3. THANK YOU + PRÓXIMOS PASSOS
   - Confirma + onboarding detalhado
   - Checklists, vídeo de boas-vindas
   - Prepara para consumo
   Uso: Produtos complexos, cursos

4. THANK YOU + COMUNIDADE
   - Confirma + convida para grupo
   - Links de acesso
   - Expectativas claras
   Uso: Programas com comunidade

5. THANK YOU + REFERRAL
   - Confirma + incentiva indicação
   - Programa de referência
   - Benefícios claros
   Uso: Produtos com potencial viral
```

### Step 2: Confirmation Block
```
Elementos de confirmação:

HEADLINE DE SUCESSO
- "Parabéns! Sua compra foi confirmada!"
- "Você está dentro!"
- "Bem-vindo(a) à [comunidade/produto]!"

RESUMO DO PEDIDO
- O que comprou
- Quanto pagou
- Número do pedido/confirmação

PRÓXIMOS PASSOS
- O que acontece agora
- Quando terá acesso
- O que fazer primeiro

EXPECTATIVAS
- Quando receberá email
- Como acessar
- Suporte se precisar
```

### Step 3: Buyer's Remorse Prevention
```
Elementos para reduzir arrependimento:

VALIDAÇÃO DA DECISÃO
"Você tomou a decisão certa. [Produto] já ajudou [X] pessoas a [resultado]."
"Esta é uma das melhores decisões que você poderia tomar para [área da vida]."

ANTECIPAÇÃO DE RESULTADO
"Nos próximos [tempo], você vai [benefício 1], [benefício 2] e [benefício 3]."
"Em breve você estará [estado desejado]."

PROVA SOCIAL IMEDIATA
"Assim como [Nome], que conseguiu [resultado] em [tempo]."
Depoimento curto de cliente satisfeito.

REFORÇO DE GARANTIA
"Lembre-se: você tem [X] dias de garantia. Zero risco."
```

### Step 4: One-Time Offer (OTO) Block
```
Se incluir upsell:

HEADLINE DE OTO
"Espera! Oferta especial só para novos membros"
"Uma última coisa antes de acessar..."
"Exclusivo para quem acabou de comprar"

PROPOSTA DE VALOR
- O que é o upsell
- Por que faz sentido AGORA
- Como complementa a compra

PREÇO ESPECIAL
- Desconto significativo (30-60%)
- Só válido agora
- Timer visível

CTA CLARO
"Sim, adicione por R$X!"
"Não, só quero meu [produto original]"

POSICIONAMENTO
- NÃO bloqueia acesso ao produto
- É oportunidade, não barreira
- Fácil de recusar sem culpa
```

### Step 5: Next Steps Block
```
Instruções claras de próximos passos:

FORMATO NUMERADO
1. Confira seu email para [o quê]
2. Acesse [plataforma] com [credenciais]
3. Comece por [módulo/ação]
4. Se precisar de ajuda, [contato]

QUICK WIN IMEDIATO
"Enquanto espera o email, faça isso:"
[Ação simples que dá resultado rápido]

EXPECTATIVAS DE TEMPO
"Em até [X] minutos você receberá..."
"Seu acesso estará disponível em..."
```

### Step 6: Community/Social Block
```
Convite para comunidade:

CONVITE PARA GRUPO
"Participe do nosso grupo exclusivo:"
[Link para grupo/comunidade]

EXPECTATIVAS DO GRUPO
- O que encontrará lá
- Regras básicas
- Como se apresentar

INCENTIVO A COMPARTILHAR
"Compartilhe sua conquista:"
[Botões de social share]

PROGRAMA DE INDICAÇÃO
"Indique amigos e ganhe [benefício]"
[Link de referência único]
```

### Step 7: Consumo Inicial
```
Ajudar a começar imediatamente:

VÍDEO DE BOAS-VINDAS
- Breve (2-5 min)
- Orientação de como começar
- Tom acolhedor

CHECKLIST DE INÍCIO
□ Acessar área de membros
□ Completar módulo 1
□ Entrar na comunidade
□ Agendar primeira [ação]

RECURSO PARA COMEÇAR
- PDF de quick start
- Primeiro módulo desbloqueado
- Template inicial
```

### Step 8: Page Structure
```
Estrutura completa:

┌────────────────────────────────────────┐
│ [CONFIRMAÇÃO]                          │
│ Headline de sucesso + resumo           │
├────────────────────────────────────────┤
│ [VALIDAÇÃO]                            │
│ Reforço da decisão + prova social      │
├────────────────────────────────────────┤
│ [OTO - OPCIONAL]                       │
│ Oferta única especial                  │
├────────────────────────────────────────┤
│ [PRÓXIMOS PASSOS]                      │
│ 1. Email  2. Acesso  3. Começar        │
├────────────────────────────────────────┤
│ [COMUNIDADE]                           │
│ Link do grupo + regras                 │
├────────────────────────────────────────┤
│ [QUICK WIN]                            │
│ Algo para fazer agora                  │
├────────────────────────────────────────┤
│ [SUPORTE]                              │
│ Contato se precisar de ajuda           │
└────────────────────────────────────────┘
```

### Step 9: Quality Check
```
Verificar página:

CONFIRMAÇÃO
- [ ] Fica claro que a compra foi confirmada?
- [ ] Resumo do pedido presente?
- [ ] Próximos passos claros?

EMOÇÃO
- [ ] Tom é acolhedor e positivo?
- [ ] Valida a decisão do comprador?
- [ ] Cria antecipação pelo produto?

OTO (se houver)
- [ ] Complementa a compra?
- [ ] Não bloqueia acesso?
- [ ] Fácil de recusar?
- [ ] Urgência genuína?

AÇÃO
- [ ] Comprador sabe exatamente o que fazer?
- [ ] Há quick win imediato?
- [ ] Suporte está acessível?
```

## Output

```yaml
format: markdown
sections:
  - confirmation_block
  - validation_copy
  - oto_offer (if applicable)
  - next_steps
  - community_block (if applicable)
  - complete_page
  - quality_checklist
```

## Copywriter Recommendations

| Contexto | Copywriter Ideal | Por quê |
|----------|------------------|---------|
| Thank you + OTO agressivo | Dan Kennedy | Urgência, escassez |
| Thank you premium/elegante | David Ogilvy | Tom sofisticado |
| Thank you com story | Gary Halbert | Conexão emocional |
| Thank you de curso | Frank Kern | Casual, acolhedor |
| Thank you high-ticket | Alex Hormozi | Value reinforcement |

## Page Templates

### Template 1: Confirmação Simples (Lead)
```markdown
# ✅ Você está dentro!

Parabéns, [Nome]! Sua inscrição foi confirmada.

## O que acontece agora:

1. **Confira seu email** — Você receberá [material] em até 5 minutos
2. **Verifique spam** — Se não encontrar, olhe na pasta de spam
3. **Adicione nosso email** — Assim garantimos que nada se perde

## Enquanto isso...

[Link para conteúdo gratuito relevante]

---

Dúvidas? Entre em contato: [email de suporte]

Bem-vindo(a)! 🎉
```

### Template 2: Thank You + OTO
```markdown
# 🎉 Compra Confirmada!

Parabéns! Você agora tem acesso ao [Produto].

**Resumo do pedido:**
- Produto: [Nome]
- Investimento: R$[valor]
- Acesso: [como/quando]

---

## ⚡ ESPERA! Oferta única para novos membros

Como você acabou de entrar, quero te fazer uma oferta especial:

### [Nome do Upsell]

[2-3 linhas sobre o upsell]

✓ [Benefício 1]
✓ [Benefício 2]
✓ [Benefício 3]

**De R$[preço original] → Apenas R$[preço OTO]**

⏰ Esta oferta expira em: [TIMER]

[BOTÃO: Sim, adicionar por R$X!]

[Link: Não, obrigado. Quero só meu acesso.]

---

## Próximos Passos:

1. Confira o email com seus dados de acesso
2. Entre na área de membros
3. Comece pelo [módulo/ação]
4. Entre no grupo exclusivo: [link]

Bem-vindo(a) à [comunidade/produto]! 🚀
```

### Template 3: Thank You com Onboarding
```markdown
# 🎊 Bem-vindo(a) ao [Produto]!

[Nome], sua jornada começa agora.

Você fez uma excelente escolha. [Produto] já ajudou [X] pessoas a [resultado].

---

## 🎬 Comece por aqui:

### Passo 1: Acesse a área de membros
→ [Link para login]
→ Login: [email]
→ Senha: [enviada por email]

### Passo 2: Assista o vídeo de boas-vindas
[Video embed ou link]

### Passo 3: Complete seu primeiro módulo
Recomendamos: "[Nome do Módulo 1]"

### Passo 4: Entre na comunidade
→ [Link do grupo]
→ Se apresente usando: [formato sugerido]

---

## ✅ Seu checklist de início:

- [ ] Acessar área de membros
- [ ] Assistir vídeo de boas-vindas
- [ ] Completar Módulo 1
- [ ] Entrar no grupo
- [ ] Fazer primeira [ação]

---

## Precisa de ajuda?

📧 Email: [suporte]
💬 Chat: [link]
📱 WhatsApp: [número]

Estamos aqui para garantir seu sucesso! 💪
```

### Template 4: Thank You + Referral
```markdown
# ✨ Parabéns pela sua compra!

Você agora faz parte de um grupo seleto de [avatares] que decidiram [transformação].

---

## Seu acesso está confirmado!

Em até [tempo] você receberá um email com:
- Dados de login
- Guia de início rápido
- Link da comunidade

---

## 🎁 Indique e ganhe!

Amou o [produto]? Compartilhe com amigos!

**Seu link exclusivo:**
[Link de referência único]

**Sua recompensa:**
- 1 indicação = [benefício 1]
- 3 indicações = [benefício 2]
- 5 indicações = [benefício 3]

[BOTÕES: WhatsApp | Telegram | Copiar Link]

---

## Compartilhe sua conquista:

"Acabei de investir no meu [área] com [Produto]! 🚀"

[Botões de compartilhamento social]

---

Bem-vindo(a)! 🎉
```

## Metrics to Track

```yaml
thank_you_metrics:
  oto_conversion: "% que aceita OTO"
  community_join: "% que entra na comunidade"
  quick_win_completion: "% que completa ação inicial"
  support_tickets: "Tickets abertos após thank you (menor = melhor)"
  refund_rate: "Taxa de reembolso (thank you bom reduz)"
```

---

*Task Version: 1.0*
*Primary Framework: Reinforcement + OTO (Dan Kennedy/Russell Brunson)*


---

## Referência: references/create-upsell-page.md

# Create Upsell Page Task

## Purpose
Criar páginas de upsell/downsell de alta conversão para maximizar valor do cliente.

## Inputs

```yaml
required:
  - upsell_type: upsell | downsell | order_bump | cross_sell
  - main_product: Produto que acabou de comprar
  - upsell_product: Produto sendo oferecido
  - upsell_price: Preço do upsell
  - main_benefit: Benefício principal do upsell

optional:
  - relationship: Como upsell complementa produto principal
  - discount: Desconto especial (se houver)
  - urgency: Limite de tempo
  - copywriter_preference: Estilo preferido
```

## Upsell Types

### 1. Upsell (Mais do Mesmo/Melhor)
```yaml
timing: Imediatamente após compra
price: 30-50% do produto principal
example: "Quer a versão premium com [EXTRAS]?"
conversion: 10-30%
```

### 2. Downsell (Versão Menor)
```yaml
timing: Após recusar upsell
price: 50-70% menor que upsell
example: "Que tal só [COMPONENTE] por [PREÇO MENOR]?"
conversion: 15-40%
```

### 3. Order Bump (Checkout)
```yaml
timing: Na página de checkout
price: R$7-47 (impulso)
example: "Adicione [ITEM] por apenas R$X"
conversion: 20-50%
```

### 4. Cross-Sell (Complementar)
```yaml
timing: Pós-compra ou thank you page
price: Varia
example: "Clientes que compraram X também adoram Y"
conversion: 5-15%
```

## Page Structure

### Upsell Page (OTO - One Time Offer)
```markdown
# ESPERA! Seu Pedido Não Está Completo...

## [HEADLINE - Oferta especial exclusiva]

[VIDEO ou IMAGEM do produto]

### Por que isso importa:

Você acabou de adquirir [PRODUTO PRINCIPAL].

Mas existe um problema: [PROBLEMA QUE UPSELL RESOLVE]

É por isso que criei [UPSELL PRODUCT]...

### O que você recebe:

✅ [Componente 1] - Valor R$[X]
✅ [Componente 2] - Valor R$[X]
✅ [Componente 3] - Valor R$[X]

**Valor Total: R$[SOMA]**
**Apenas para você agora: R$[PREÇO]**

⏰ Esta oferta expira quando você sair desta página

[BOTÃO: SIM! Adicionar ao Meu Pedido por R$X]

[Link menor: Não, obrigado. Continuar para meu pedido.]
```

### Downsell Page
```markdown
# Entendo... Que tal uma opção mais acessível?

## [VERSÃO REDUZIDA] por apenas R$[PREÇO MENOR]

Percebi que [UPSELL COMPLETO] pode não ser pra todo mundo agora.

Por isso, separei apenas [COMPONENTE ESSENCIAL]:

✅ [O que inclui]

Por apenas R$[PREÇO] (economia de [%] sobre o valor original)

[BOTÃO: Quero Esta Opção por R$X]

[Link: Não, obrigado. Finalizar meu pedido.]
```

### Order Bump Copy (Checkbox)
```markdown
☐ SIM! Adicione [PRODUTO] por apenas R$[PREÇO]

[DESCRIÇÃO em 1-2 linhas do benefício principal]

(Economize [%] - preço normal: R$[PREÇO CHEIO])
```

## Copywriter Styles for Upsells

### Dan Kennedy Style (Recommended)
```
- Urgência forte (página expira)
- Escassez real
- Stack de valor claro
- "Esta é sua única chance"
```

### Joe Sugarman Style
```
- Storytelling curto
- Trigger de reciprocidade
- "Já que você está aqui..."
- Conversational
```

### Claude Hopkins Style
```
- Oferta testável
- Números específicos
- Comparação de valor
- Garantia destacada
```

## Key Principles

### 1. Relevância
O upsell DEVE complementar o produto principal.

### 2. Valor Óbvio
Economia ou benefício deve ser imediatamente claro.

### 3. Simplicidade
Decisão deve levar <30 segundos.

### 4. Sem Fricção
Um clique para aceitar.

### 5. Saída Fácil
Caminho claro para recusar sem culpa.

## CTA Variations

### Accept CTAs
```
- "SIM! Adicionar por R$X"
- "Quero Este Upgrade"
- "Incluir no Meu Pedido"
- "Aproveitar Esta Oferta"
```

### Decline CTAs
```
- "Não, obrigado. Continuar."
- "Pular esta oferta"
- "Não preciso disso agora"
- "Continuar para meu pedido"
```

## Output Deliverables

```yaml
deliverables:
  - upsell_page_copy:
      - headline
      - video_script (se aplicável)
      - body_copy
      - value_stack
      - cta_buttons
  - downsell_page_copy (variação)
  - order_bump_copy (se solicitado)
  - a_b_variations: 2 versões de headline
```

## Quality Checklist

- [ ] Upsell é relevante para produto principal
- [ ] Valor é óbvio em <5 segundos
- [ ] Urgência é clara (página expira)
- [ ] CTA é impossível de perder
- [ ] Recusa é fácil e sem culpa
- [ ] Preço parece justo pelo valor
- [ ] Copy é curto e scannable

## Metrics to Track

```yaml
metrics:
  - upsell_take_rate: % que aceita
  - downsell_take_rate: % que aceita após recusar upsell
  - average_order_value: Antes vs depois de upsells
  - refund_rate: Por produto
```

---

*Task Version: 1.0*


---

## Referência: references/evaluate-offer.md

# Evaluate Offer Task

**Task ID:** evaluate-offer
**Version:** 2.0.0
**Category:** Offer Optimization / Audit
**Minimum Output:** Complete scorecard with prioritized fixes
**Primary Methodology:** Hormozi Value Equation + Kennedy Direct Response Principles
**Research Source:** docs/research/offer-evaluation-methodology-research.md

---

## Purpose

Perform a comprehensive audit of any offer using the Value Equation framework and Grand Slam Offer criteria. Generate a numerical score (0-100) and prioritized improvement recommendations.

**The Problem:** Most offers fail not because of bad products, but because of poor offer construction. Symptoms include:
- "Too expensive" objections despite competitive pricing
- "Need to think about it" killing momentum
- Prospects comparing you to cheaper alternatives
- Low conversion rates despite good traffic
- High refund rates after purchase

**The Solution:** A systematic evaluation using proven frameworks that diagnoses EXACTLY what's weak and provides a prioritized fix list.

---

## When to Use

### Primary Triggers
- Conversion rate below 5% (traffic to purchase)
- "Need to think about it" exceeds 50% of prospects
- Price objections dominate sales conversations
- Preparing to invest in paid traffic
- Planning to raise prices
- Launching a new product/service
- Conversion has dropped without explanation

### Secondary Triggers
- Annual offer review
- Competitive pressure increasing
- Refund rate above 5%
- Customer acquisition cost rising
- Market conditions changing

---

## Inputs Required

```yaml
required:
  offer_name: "Nome do produto/serviço"
  offer_description: "Descrição clara do que é oferecido"
  price: "Preço atual"
  target_avatar: "Cliente ideal (quem compra)"
  primary_outcome: "Resultado principal prometido"

recommended:
  current_conversion_rate: "Taxa de conversão atual (visitantes para compradores)"
  average_sales_cycle: "Tempo médio para decisão de compra"
  main_objections: "Top 3 objeções que você ouve"
  guarantee: "Garantia atual (se existir)"
  value_stack: "Lista de tudo que está incluído"
  competitor_prices: "Preços dos principais concorrentes"
  testimonials_available: "Quantos depoimentos com resultados específicos você tem"

optional:
  sales_page_url: "Link para página de vendas"
  cost_to_deliver: "Custo para entregar"
  refund_rate: "Taxa de reembolso atual"
  time_to_result: "Tempo até o cliente ver resultado"
  bonuses: "Bônus incluídos atualmente"
  urgency_element: "Escassez ou urgência atual"
```

---

## Theoretical Foundation

### The Value Equation (Alex Hormozi)

The foundational framework for understanding why people buy:

```
                 Dream Outcome × Perceived Likelihood
Value = ──────────────────────────────────────────────────
              Time Delay × Effort & Sacrifice
```

**Key Insight:** You can increase value by:
1. Making the outcome more desirable (numerator)
2. Making success more likely (numerator)
3. Decreasing time to result (denominator)
4. Decreasing effort required (denominator)

Most offers only try to improve the numerator. **Grand Slam Offers aggressively minimize the denominator.**

### Grand Slam Offer Definition

> "An offer so good that people feel stupid saying no."
> — Alex Hormozi

Five required components:
1. **Starving Crowd** - Market that desperately wants what you sell
2. **Irresistible Offer** - Value stack perceived at 10x+ the price
3. **Unique Mechanism** - Proprietary system that explains why it works
4. **Risk Reversal** - Guarantee that removes all customer risk
5. **Urgency/Scarcity** - Real reason to act now

### Dan Kennedy's Offer Rules

Every strong offer must have:
1. A specific, clear offer (not just product info)
2. A reason to respond NOW
3. Clear instructions on how to respond
4. Tracking and measurement capability
5. Strong sales copy

---

## Workflow: Complete Offer Audit

### Phase 1: Information Gathering

#### Step 1.1: Collect Basic Offer Information

```yaml
gather_basics:
  - Offer name and description
  - Current price point
  - Target customer profile
  - Primary outcome promised
  - Time to achieve result
  - Effort required from customer
  - Current guarantee (if any)
  - Value stack components
  - Urgency/scarcity elements
  - Available social proof
```

#### Step 1.2: Collect Performance Data (If Available)

```yaml
gather_performance:
  - Traffic to page (monthly)
  - Conversion rate (visitors to buyers)
  - Average sales cycle length
  - Refund/chargeback rate
  - Customer lifetime value
  - Top objections heard
  - Win/loss rate on sales calls
  - Competitor comparison frequency
```

#### Step 1.3: Identify Current Positioning

```yaml
positioning_assessment:
  questions:
    - "How do prospects find you?"
    - "What do they compare you to?"
    - "What makes you different?"
    - "Why do people choose you over alternatives?"
    - "Why do people NOT choose you?"
```

---

### Phase 2: Value Equation Scoring

#### Step 2.1: Score Dream Outcome (0-10)

**DREAM OUTCOME** = The ultimate result your customer desires

**Scoring Criteria:**

| Score | Description |
|-------|-------------|
| 1-2 | Vague outcome, hard to visualize |
| 3-4 | Somewhat defined but not compelling |
| 5-6 | Clear outcome, moderate desirability |
| 7-8 | Specific, measurable, highly desirable |
| 9-10 | Crystal clear, life-changing, status-elevating |

**Evaluation Questions:**

```yaml
dream_outcome_audit:
  specificity:
    question: "Can the customer visualize the EXACT result?"
    weak_example: "Improve your marketing"
    strong_example: "Add $50K/month in recurring revenue"

  measurability:
    question: "Can progress be measured objectively?"
    weak_example: "Feel better about your business"
    strong_example: "Reduce customer churn from 8% to 2%"

  desirability:
    question: "Is this a MUST-HAVE or nice-to-have?"
    weak_example: "Learn new skills"
    strong_example: "Finally quit your 9-5 and go full-time"

  status_change:
    question: "Does achieving this change how they're seen?"
    weak_example: "Have a better website"
    strong_example: "Become the go-to expert in your market"

  emotional_pull:
    question: "Does it connect to deep desires/fears?"
    weak_example: "Increase efficiency"
    strong_example: "Never worry about making payroll again"
```

**Red Flags (Score 1-4):**
- Generic benefit claims
- No specific numbers or timeframes
- Outcome sounds like everyone else
- Hard to explain to a friend

**Green Flags (Score 7-10):**
- Specific, measurable result
- Clear timeframe
- Identity/status transformation
- Emotional resonance
- Unique angle or approach

**DREAM OUTCOME SCORE: ___/10**

---

#### Step 2.2: Score Perceived Likelihood of Achievement (0-10)

**PERCEIVED LIKELIHOOD** = Customer's belief they will actually get the result

**Scoring Criteria:**

| Score | Description |
|-------|-------------|
| 1-2 | No proof, skepticism expected |
| 3-4 | Some claims, minimal evidence |
| 5-6 | Decent testimonials, basic guarantee |
| 7-8 | Strong proof, good guarantee, clear method |
| 9-10 | Overwhelming proof, bold guarantee, proven system |

**Evaluation Questions:**

```yaml
likelihood_audit:
  proof_quantity:
    question: "How many success stories exist?"
    weak: "0-5 testimonials"
    adequate: "6-20 testimonials"
    strong: "20+ testimonials with specific results"

  proof_quality:
    question: "How specific are the results in testimonials?"
    weak: "Great product! Loved it."
    adequate: "Helped me improve my business"
    strong: "Went from $3K to $47K/month in 90 days"

  proof_variety:
    question: "Are there different types of proof?"
    checklist:
      - Written testimonials
      - Video testimonials
      - Case studies
      - Before/after documentation
      - Media features
      - Celebrity/expert endorsements
      - Statistics and data

  mechanism_clarity:
    question: "Is there a clear explanation of WHY this works?"
    weak: "Our proven system"
    strong: "The RMBC Method: Research, Mechanism, Brief, Copy"

  guarantee_strength:
    question: "How much risk does the customer take?"
    weak: "No guarantee or satisfaction only"
    adequate: "30-day money-back"
    strong: "90-day results guarantee with additional compensation"
```

**Proof Strength Hierarchy:**
1. Unsubstantiated claims (weakest)
2. Generic testimonials
3. Specific testimonials
4. Video testimonials
5. Case studies with numbers
6. Third-party verification
7. Celebrity/expert endorsements
8. Media features
9. Independent research (strongest)

**PERCEIVED LIKELIHOOD SCORE: ___/10**

---

#### Step 2.3: Score Time Delay (0-10, then INVERT)

**TIME DELAY** = How long until the customer achieves the dream outcome

**Note:** Score the TIME, then invert (10 - score) for final calculation because LOWER time delay = HIGHER value.

**Scoring Criteria (Raw Time Score):**

| Score | Description |
|-------|-------------|
| 1-2 | Results in hours to days |
| 3-4 | Results in 1-2 weeks |
| 5-6 | Results in 1-2 months |
| 7-8 | Results in 3-6 months |
| 9-10 | Results in 6+ months or unclear |

**Evaluation Questions:**

```yaml
time_audit:
  quick_win:
    question: "Is there a result in the first 24-48 hours?"
    weak: "No early wins, just foundational work"
    strong: "First template delivered, first call scheduled"

  total_timeline:
    question: "How long to the PRIMARY promised result?"
    ask: "What's your realistic timeline to [outcome]?"

  progress_visibility:
    question: "Can customers see progress along the way?"
    weak: "Results come at the end"
    strong: "Weekly milestones, dashboards, check-ins"

  speed_vs_competitors:
    question: "Faster or slower than alternatives?"
    weak: "Slower than DIY or competitors"
    strong: "Fastest path to result in the market"
```

**TIME DELAY RAW SCORE: ___/10**
**TIME DELAY INVERTED (10 - raw): ___/10**

---

#### Step 2.4: Score Effort & Sacrifice (0-10, then INVERT)

**EFFORT & SACRIFICE** = What the customer must do/give up to get results

**Note:** Score the EFFORT, then invert (10 - score) for final calculation because LOWER effort = HIGHER value.

**Scoring Criteria (Raw Effort Score):**

| Score | Description |
|-------|-------------|
| 1-2 | Almost nothing required, done for you |
| 3-4 | Minimal effort, clear steps |
| 5-6 | Moderate effort, guided process |
| 7-8 | Significant work required |
| 9-10 | Major lifestyle change, complex process |

**Evaluation Questions:**

```yaml
effort_audit:
  work_required:
    question: "How much does the customer actually DO?"
    done_for_you: "We handle everything, you just review"
    done_with_you: "We guide you, you execute with support"
    do_it_yourself: "Here's the training, go implement"

  sacrifices:
    question: "What must they give up?"
    none: "No lifestyle changes required"
    minimal: "Few hours per week"
    significant: "Major time, money, or comfort trade-offs"

  complexity:
    question: "How easy is it to follow?"
    simple: "Step 1, Step 2, Step 3 - foolproof"
    moderate: "Some decisions, but guided"
    complex: "Multi-variable, requires judgment"

  obstacles_addressed:
    question: "Are common blockers pre-solved?"
    not_addressed: "Customer figures out obstacles"
    partially: "Some solutions provided"
    fully_addressed: "Every common obstacle has a built-in solution"

  tools_provided:
    question: "What tools/templates reduce effort?"
    none: "Start from scratch"
    some: "Basic templates"
    comprehensive: "Done-for-you templates, tools, automation"
```

**EFFORT RAW SCORE: ___/10**
**EFFORT INVERTED (10 - raw): ___/10**

---

#### Step 2.5: Calculate Value Equation Score

```
VALUE EQUATION SCORE CALCULATION:

Dream Outcome:                    ___/10 × 0.30 = ___
Perceived Likelihood:             ___/10 × 0.30 = ___
Time Delay (inverted):            ___/10 × 0.20 = ___
Effort & Sacrifice (inverted):    ___/10 × 0.20 = ___

VALUE EQUATION TOTAL:             ___/10
(Multiply by 4 for 40-point scale: ___/40)
```

---

### Phase 3: Grand Slam Components Audit

#### Step 3.1: Market Quality Assessment (0-5)

```yaml
market_audit:
  pain_urgency:
    question: "How urgent is the problem you solve?"
    score_1: "Nice to have, no urgency"
    score_3: "Important but not critical"
    score_5: "Burning pain, must solve NOW"

  purchasing_power:
    question: "Can your market afford your solution?"
    score_1: "Struggling financially"
    score_3: "Can afford with consideration"
    score_5: "Has budget and authority"

  market_accessibility:
    question: "Can you reach them efficiently?"
    score_1: "Fragmented, hard to find"
    score_3: "Identifiable but scattered"
    score_5: "Concentrated, easy to reach"

  growth_trajectory:
    question: "Is this market growing?"
    score_1: "Shrinking or saturated"
    score_3: "Stable"
    score_5: "Growing rapidly"
```

**MARKET QUALITY SCORE: ___/5**

---

#### Step 3.2: Value Stack Assessment (0-5)

**The 10x Rule:** Perceived value should be at least 10x the price.

```yaml
value_stack_audit:
  itemization:
    question: "Is every component clearly listed with value?"
    score_1: "Just a product/service name"
    score_3: "Some components listed"
    score_5: "Complete itemized stack with dollar values"

  value_multiple:
    question: "What's the perceived value to price ratio?"
    score_1: "Less than 3x"
    score_3: "3-5x"
    score_5: "10x or more"

  standalone_value:
    question: "Do components have value alone?"
    score_1: "Only valuable as bundle"
    score_3: "Some standalone value"
    score_5: "Each item valuable independently"

  variety:
    question: "Are there different types of value?"
    checklist:
      - Core deliverable
      - Templates/tools
      - Training/education
      - Community/support
      - 1-on-1 access
      - Done-for-you elements
```

**VALUE STACK SCORE: ___/5**

---

#### Step 3.3: Unique Mechanism Assessment (0-5)

```yaml
mechanism_audit:
  named_system:
    question: "Does your methodology have a unique name?"
    score_1: "No named approach"
    score_3: "Generic name like 'Our System'"
    score_5: "Proprietary, memorable name (e.g., 'The RMBC Method')"

  differentiation:
    question: "Does it clearly differ from competitors?"
    score_1: "Sounds the same"
    score_3: "Somewhat different"
    score_5: "Clearly unique approach"

  explanation:
    question: "Is there a clear 'why this works' story?"
    score_1: "No explanation"
    score_3: "Basic reasoning"
    score_5: "Compelling, logical explanation"

  curiosity:
    question: "Does it create 'I need to know more' feeling?"
    score_1: "No curiosity"
    score_3: "Some interest"
    score_5: "Strong desire to learn the method"
```

**UNIQUE MECHANISM SCORE: ___/5**

---

#### Step 3.4: Risk Reversal Assessment (0-5)

```yaml
guarantee_audit:
  existence:
    question: "Is there a guarantee?"
    score_0: "No guarantee"
    score_2: "Basic satisfaction guarantee"
    score_5: "Bold performance guarantee"

  strength:
    question: "How much risk does customer take?"
    hierarchy:
      - No guarantee (score 1)
      - Satisfaction guarantee (score 2)
      - Money-back guarantee (score 3)
      - Extended money-back 90+ days (score 4)
      - Performance-based or better-than-money-back (score 5)

  specificity:
    question: "Is it specific or generic?"
    generic: "100% satisfaction guaranteed"
    specific: "If you don't add $10K in 90 days, full refund plus $500"

  competitor_comparison:
    question: "Better than competitors?"
    worse: "Shorter or weaker than alternatives"
    same: "Industry standard"
    better: "Boldest guarantee in the market"
```

**RISK REVERSAL SCORE: ___/5**

---

#### Step 3.5: Urgency/Scarcity Assessment (0-5)

```yaml
urgency_audit:
  existence:
    question: "Is there any urgency element?"
    score_0: "None"
    score_3: "Some deadline or limit"
    score_5: "Strong, real urgency"

  authenticity:
    question: "Is the scarcity REAL?"
    fake: "Always says 'only 3 left' but never runs out"
    real: "Verifiable limit that's enforced"

  consequence:
    question: "Is there a clear cost of waiting?"
    weak: "Price stays the same if you wait"
    strong: "Price goes up, bonus expires, spots fill"

  types_present:
    checklist:
      - Quantity limit (cohort size, inventory)
      - Deadline (doors close date)
      - Price increase (goes up tomorrow)
      - Bonus expiration (only this week)
      - Seasonal/event-based
```

**URGENCY/SCARCITY SCORE: ___/5**

---

#### Step 3.6: Calculate Grand Slam Score

```
GRAND SLAM COMPONENTS CALCULATION:

Market Quality:       ___/5
Value Stack:          ___/5
Unique Mechanism:     ___/5
Risk Reversal:        ___/5
Urgency/Scarcity:     ___/5

GRAND SLAM TOTAL:     ___/25
```

---

### Phase 4: Enhancement Stack Audit (S.U.B.G.N.)

#### Step 4.1: Scarcity Deep Dive (0-5)

```yaml
scarcity_audit:
  presence:
    question: "Is there a quantity limit?"
    examples:
      - "Only 10 spots in this cohort"
      - "Limited edition (100 made)"
      - "First 50 customers only"

  authenticity:
    question: "Would you really turn away a customer at the limit?"
    fake: "No, we'd take more money"
    real: "Yes, capacity is truly limited"

  communication:
    question: "Is it clearly communicated?"
    weak: "Mentioned once in small print"
    strong: "Prominent, repeated, visualized (spots remaining counter)"
```

**SCARCITY SCORE: ___/5**

---

#### Step 4.2: Urgency Deep Dive (0-5)

```yaml
urgency_audit:
  deadline_presence:
    question: "Is there a clear deadline?"
    examples:
      - "Doors close Friday at midnight"
      - "Price increases on [date]"
      - "Enrollment ends in 48 hours"

  deadline_enforcement:
    question: "Is the deadline actually enforced?"
    fake: "Extended or reopened regularly"
    real: "Absolutely enforced, no exceptions"

  consequence_clarity:
    question: "What happens if they miss the deadline?"
    weak: "Same offer available later"
    strong: "Price increases $500 / lose bonus / waitlist"
```

**URGENCY SCORE: ___/5**

---

#### Step 4.3: Bonuses Deep Dive (0-5)

```yaml
bonuses_audit:
  quantity:
    question: "How many bonuses are included?"
    weak: "0-1 bonuses"
    adequate: "2-3 bonuses"
    strong: "4+ valuable bonuses"

  relevance:
    question: "Do bonuses solve real obstacles?"
    weak: "Random add-ons"
    strong: "Each bonus addresses a specific barrier"

  value_communication:
    question: "Are individual values listed?"
    weak: "Plus bonuses!"
    strong: "Bonus 1: [Name] - Value $297"

  exclusivity:
    question: "Are bonuses exclusive or available elsewhere?"
    weak: "Available as separate products"
    strong: "Only available with this offer"
```

**BONUSES SCORE: ___/5**

---

#### Step 4.4: Guarantees Deep Dive (0-5)

(Already covered in Phase 3, but add depth here)

```yaml
guarantee_depth:
  boldness:
    question: "How bold is the guarantee?"
    standard: "30-day money-back"
    bold: "90-day + keep the bonuses"
    extreme: "Double your money back if no result"

  conditions:
    question: "Are there limiting conditions?"
    many_conditions: "Must complete X, Y, Z to qualify"
    no_conditions: "Unconditional refund, no questions"

  length:
    question: "How long is the guarantee period?"
    short: "14-30 days"
    standard: "60 days"
    long: "90+ days or lifetime"
```

**GUARANTEES SCORE: ___/5**

---

#### Step 4.5: Naming Deep Dive (0-5)

```yaml
naming_audit:
  result_in_name:
    question: "Does the name contain the outcome?"
    weak: "Marketing Course"
    strong: "$100K Launch Blueprint"

  timeframe_in_name:
    question: "Does the name suggest speed?"
    weak: "Business Program"
    strong: "90-Day Revenue Accelerator"

  memorability:
    question: "Is it unique and memorable?"
    generic: "Marketing Mastery"
    memorable: "The Midnight Profit Method"

  curiosity_factor:
    question: "Does it create 'what is that?' reaction?"
    weak: "Comprehensive Training"
    strong: "The Invisible Selling Machine"
```

**NAMING SCORE: ___/5**

---

#### Step 4.6: Calculate Enhancement Stack Score

```
ENHANCEMENT STACK (S.U.B.G.N.) CALCULATION:

S - Scarcity:         ___/5
U - Urgency:          ___/5
B - Bonuses:          ___/5
G - Guarantees:       ___/5
N - Naming:           ___/5

ENHANCEMENT TOTAL:    ___/25
```

---

### Phase 5: Red Flags Detection

#### Step 5.1: Identify Active Red Flags

```yaml
red_flags_checklist:
  price_objections:
    flag: "'Too expensive' is frequent objection"
    present: Yes/No
    deduction: -2 if yes
    signal: "Value not communicated effectively"

  think_about_it:
    flag: "'Need to think about it' exceeds 50%"
    present: Yes/No
    deduction: -2 if yes
    signal: "Low perceived value or trust"

  competitor_comparison:
    flag: "Prospects constantly compare to competitors"
    present: Yes/No
    deduction: -2 if yes
    signal: "Commodity positioning"

  ghosting:
    flag: "Prospects ghost after receiving proposal"
    present: Yes/No
    deduction: -2 if yes
    signal: "Trust problem or wrong market"

  discount_requests:
    flag: "Frequently asked for discounts"
    present: Yes/No
    deduction: -2 if yes
    signal: "Price-value disconnect"
```

**RED FLAGS PRESENT: ___/5**
**TOTAL DEDUCTION: ___/10**

---

### Phase 6: Final Score Calculation

```
╔══════════════════════════════════════════════════════════════╗
║                    OFFER SCORECARD                           ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  SECTION A: VALUE EQUATION                        ___/40     ║
║    - Dream Outcome (×0.30×4):           ___                  ║
║    - Perceived Likelihood (×0.30×4):    ___                  ║
║    - Time Delay inverted (×0.20×4):     ___                  ║
║    - Effort inverted (×0.20×4):         ___                  ║
║                                                              ║
║  SECTION B: GRAND SLAM COMPONENTS                 ___/25     ║
║    - Market Quality:                    ___/5                ║
║    - Value Stack:                       ___/5                ║
║    - Unique Mechanism:                  ___/5                ║
║    - Risk Reversal:                     ___/5                ║
║    - Urgency/Scarcity:                  ___/5                ║
║                                                              ║
║  SECTION C: ENHANCEMENT STACK (S.U.B.G.N.)        ___/25     ║
║    - Scarcity:                          ___/5                ║
║    - Urgency:                           ___/5                ║
║    - Bonuses:                           ___/5                ║
║    - Guarantees:                        ___/5                ║
║    - Naming:                            ___/5                ║
║                                                              ║
║  SECTION D: RED FLAGS DEDUCTION                   -___/10    ║
║    - Red flags present:                 ___/5                ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  FINAL SCORE: A + B + C - D =                     ___/100    ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

### Phase 7: Diagnosis & Recommendations

#### Step 7.1: Score Interpretation

```yaml
diagnosis_matrix:
  0-30:
    rating: "BROKEN"
    emoji: "🔴"
    meaning: "Offer needs complete rebuild"
    action: "Don't spend on traffic until fixed"
    priority: "Redesign from scratch using Grand Slam framework"

  31-50:
    rating: "WEAK"
    emoji: "🟠"
    meaning: "Major structural problems"
    action: "Significant restructuring required"
    priority: "Fix value equation fundamentals first"

  51-70:
    rating: "DECENT"
    emoji: "🟡"
    meaning: "Working but underperforming"
    action: "Optimization will yield strong returns"
    priority: "Strengthen weakest components"

  71-85:
    rating: "GOOD"
    emoji: "🟢"
    meaning: "Solid offer with fine-tuning opportunities"
    action: "A/B test enhancements"
    priority: "Test pricing, guarantees, bonuses"

  86-100:
    rating: "GRAND SLAM"
    emoji: "💎"
    meaning: "Exceptional offer"
    action: "Scale traffic, protect positioning"
    priority: "Document what works, scale carefully"
```

#### Step 7.2: Generate Prioritized Fix List

**Priority Calculation:** Impact × Ease

```yaml
fix_priority_matrix:
  high_impact_easy:
    priority: 1
    examples:
      - "Add specific numbers to outcome claims"
      - "Name your methodology"
      - "Extend guarantee period"
      - "Add real deadline"
      - "Itemize value stack with dollars"

  high_impact_hard:
    priority: 2
    examples:
      - "Rebuild value stack completely"
      - "Add case studies/testimonials"
      - "Change pricing model"
      - "Reposition to different market"

  low_impact_easy:
    priority: 3
    examples:
      - "Minor copy tweaks"
      - "Add small bonus"
      - "Design improvements"

  low_impact_hard:
    priority: 4
    examples:
      - "Complete rebrand"
      - "New technology platform"
      - "Major operational changes"
```

---

## Output Format

```yaml
deliverables:
  executive_summary:
    - "Offer name and current state"
    - "Overall score and diagnosis"
    - "Top 3 critical issues"
    - "Recommended next steps"

  detailed_scorecard:
    - "Section A: Value Equation breakdown"
    - "Section B: Grand Slam components breakdown"
    - "Section C: Enhancement stack breakdown"
    - "Section D: Red flags identified"
    - "Final score calculation"

  diagnosis:
    - "Score interpretation"
    - "What's working well"
    - "What's holding the offer back"
    - "Market and competitive context"

  prioritized_fixes:
    - "Fix #1: [Highest priority]"
    - "Fix #2: [Second priority]"
    - "Fix #3: [Third priority]"
    - "Quick wins list (implement today)"

  implementation_roadmap:
    - "Week 1 actions"
    - "Week 2-4 actions"
    - "Month 2+ actions"
    - "Testing recommendations"
```

---

## Quality Checklist

### Pre-Audit Validation
```yaml
before_starting:
  - [ ] Have all required inputs
  - [ ] Know current conversion rate (if available)
  - [ ] Understand the target market
  - [ ] Have access to sales data/objections
  - [ ] Know competitor landscape
```

### Post-Audit Validation
```yaml
before_delivering:
  - [ ] All sections scored
  - [ ] Math is correct
  - [ ] Diagnosis matches score
  - [ ] Fixes are prioritized by impact × ease
  - [ ] Recommendations are actionable
  - [ ] Quick wins are truly quick
```

---

## Common Problems & Solutions Quick Reference

| Symptom | Likely Weak Area | Quick Fix |
|---------|-----------------|-----------|
| "Too expensive" | Value Stack | Add itemized value with dollar amounts |
| "Need to think" | Perceived Likelihood | Add case studies, strengthen guarantee |
| "What's included?" | Value Communication | Create explicit value stack |
| "Does it work for me?" | Proof | Add testimonials from similar customers |
| "Takes too long" | Time Delay | Add 24-48 hour quick win |
| "Too complicated" | Effort Required | Add done-for-you elements |
| "Sounds like X competitor" | Unique Mechanism | Name and explain your proprietary method |
| "What if it doesn't work?" | Guarantee | Create bold, specific risk reversal |
| "I'll think about it" | Urgency | Add real deadline with consequence |

---

## Copywriter Recommendations

| Score Range | Recommended Expert | Focus Area |
|-------------|-------------------|------------|
| 0-30 (Broken) | Strategic rebuild first | Don't write copy, fix offer |
| 31-50 (Weak) | @dan-kennedy | Restructure with direct response |
| 51-70 (Decent) | @alex-hormozi | Optimize value equation |
| 71-85 (Good) | @gary-bencivenga | Strengthen proof and credibility |
| 86-100 (Grand Slam) | @david-ogilvy | Polish and scale |

---

## Integration with Other Tasks

### Tasks That Feed This One
- `avatar-research.md` - Understanding customer desires
- `copysearch.md` - Competitive intelligence
- `build-authority-arsenal.md` - Gathering proof

### Tasks This Feeds
- `create-offer.md` - If rebuild is needed
- `create-sales-page.md` - After offer is optimized
- `create-headlines.md` - Using improved value prop

---

## Performance Benchmarks

After implementing fixes, track:

```yaml
improvement_metrics:
  conversion_rate:
    measure: "Visitors to buyers"
    good_improvement: "20% increase"
    great_improvement: "50% increase"
    grand_slam: "100%+ increase"

  sales_cycle:
    measure: "Time from first contact to purchase"
    good_improvement: "20% reduction"
    great_improvement: "50% reduction"

  objection_frequency:
    measure: "% of conversations with price objections"
    good_improvement: "Reduced by half"
    great_improvement: "Rarely occurs"

  refund_rate:
    measure: "% of purchases refunded"
    good: "Below 5%"
    great: "Below 3%"
    grand_slam: "Below 1%"
```

---

## Research Foundation

This task is based on comprehensive research documented in:
`docs/research/offer-evaluation-methodology-research.md`

### Primary Sources
- Alex Hormozi - "$100M Offers" (Value Equation, Grand Slam framework)
- Dan Kennedy - "No B.S. Direct Marketing" (10 Rules, Offer Construction)
- Dan Kennedy - "Magnetic Marketing" methodology
- MECLABS - Value Proposition Assessment Framework

### Theoretical Foundations
- Robert Cialdini - Persuasion psychology (scarcity, social proof)
- Eugene Schwartz - Mechanism and awareness levels
- Kahneman & Tversky - Loss aversion in pricing

---

*Task Version: 2.0.0*
*Last Updated: 2026-01-23*
*Primary Framework: Hormozi Value Equation + Kennedy Direct Response*
*Minimum Output: Complete scorecard with prioritized fixes*
