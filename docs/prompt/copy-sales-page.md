# copy-sales-page · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-sales-page.md` uma skill chamada copy-sales-page. Quando eu pedir algo como "escreve a sales page de [oferta]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# ATÉ O BOTÃO · Página de vendas longa e landing premium

Uma página de vendas longa não é um texto grande, é uma sequência de decisões pequenas até o botão. O agente monta a estrutura inteira, da promessa à garantia, escreve cada bloco e audita a página pronta contra a lista do que faz um leitor desistir. Serve para landing premium e para página longa clássica.

## When to Use

- O pedido envolve: página de vendas, sales page, landing page, carta de vendas longa, magalog, auditar landing.
- Diga: "escreve a sales page de [oferta]" ou "audita esta landing: [link ou texto]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create sales page | `references/create-sales-page.md` |
| create premium lp copy | `references/create-premium-lp-copy.md` |
| create landing page | `references/create-landing-page.md` |
| audit landing page | `references/audit-landing-page.md` |
| create magalog | `references/create-magalog.md` |
| create artifact from kb | `references/create-artifact-from-kb.md` |

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

- `references/audit-landing-page.md`
- `references/create-artifact-from-kb.md`
- `references/create-landing-page.md`
- `references/create-magalog.md`
- `references/create-premium-lp-copy.md`
- `references/create-sales-page.md`


---

## Referência: references/audit-landing-page.md

# Audit Landing Page Task

## Purpose
Comprehensive landing page audit using Alex Hormozi's conversion checklist. Get a score and specific fixes.

## When to Use
- Landing page converting below 2%
- High traffic but low conversions
- Before scaling ad spend
- After offer changes
- A/B test planning

## Inputs

```yaml
required:
  - landing_page_url: URL of the page to audit
  - product_name: What you're selling
  - price: Price point

optional:
  - current_conversion: Current conversion rate %
  - traffic_source: Where traffic comes from (ads, organic, email)
  - page_type: VSL/Long-form/Short-form/Webinar
  - target_avatar: Ideal customer description
```

## Workflow

### Step 1: Above The Fold Audit
```
CRITICAL FIRST IMPRESSION (5 seconds):

□ HEADLINE MATCH
  - Does headline match the ad that brought them?
  - Is promise crystal clear?
  Score: ___/10

□ CTA VISIBILITY
  - Can they see a CTA without scrolling?
  - Is it obvious what to do next?
  Score: ___/10

□ SOCIAL PROOF VISIBLE
  - Testimonial/logos/badges above fold?
  - Trust indicators present?
  Score: ___/10

□ LOAD SPEED
  - Loads in <2 seconds?
  - No layout shift?
  Score: ___/10

ABOVE FOLD SCORE: ___/40
```

### Step 2: Value Proposition Audit
```
IS THE OFFER CLEAR?

□ DREAM OUTCOME STATED
  - What transformation do they get?
  - Specific and measurable result?
  Score: ___/10

□ TIME TO RESULT
  - When will they see results?
  - Is timeline believable?
  Score: ___/10

□ EFFORT REQUIRED
  - How much work do they do?
  - Is it easier than alternatives?
  Score: ___/10

□ LIKELIHOOD OF SUCCESS
  - Is proof present?
  - Do they believe it works for them?
  Score: ___/10

VALUE PROPOSITION SCORE: ___/40
```

### Step 3: Trust Elements Audit
```
DO THEY BELIEVE YOU?

□ TESTIMONIALS
  - Quantity: How many?
  - Quality: Specific results mentioned?
  - Variety: Different avatars represented?
  - Format: Video/text/screenshot?
  Score: ___/10

□ AUTHORITY MARKERS
  - "As seen in" logos?
  - Certifications/credentials?
  - Media mentions?
  Score: ___/10

□ NUMBERS/PROOF
  - Customers served?
  - Results achieved?
  - Years in business?
  Score: ___/10

□ CASE STUDIES
  - Detailed transformations?
  - Before/after clear?
  - Relatable to avatar?
  Score: ___/10

TRUST SCORE: ___/40
```

### Step 4: Objection Handling Audit
```
ARE OBJECTIONS ADDRESSED?

□ FAQ SECTION
  - Top 5 objections covered?
  - Answers are reassuring, not defensive?
  Score: ___/10

□ GUARANTEE
  - Risk reversal clear?
  - Specific (not generic "satisfaction guaranteed")?
  - Better than competitors?
  Score: ___/10

□ PRICE JUSTIFICATION
  - Value stack shown?
  - ROI math present?
  - Payment options available?
  Score: ___/10

□ "IS THIS FOR ME?"
  - Ideal customer described?
  - "This is for you if..." section?
  Score: ___/10

OBJECTION HANDLING SCORE: ___/40
```

### Step 5: Urgency & Scarcity Audit
```
WHY BUY NOW?

□ DEADLINE PRESENT
  - Clear expiration?
  - Consequence of waiting?
  Score: ___/10

□ SCARCITY REAL
  - Limited quantity?
  - Limited bonuses?
  - Believable, not fake?
  Score: ___/10

□ URGENCY COPY
  - Reason for urgency explained?
  - Loss aversion triggered?
  Score: ___/10

URGENCY SCORE: ___/30
```

### Step 6: CTA Audit
```
IS ACTION OBVIOUS?

□ CTA BUTTON
  - Action verb (Get, Start, Claim)?
  - Contrasting color?
  - Multiple CTAs on page?
  Score: ___/10

□ CTA COPY
  - Benefit-focused?
  - Urgency if appropriate?
  - No generic "Submit" or "Buy Now"?
  Score: ___/10

□ FRICTION REDUCTION
  - Minimal form fields?
  - One-step checkout?
  - Mobile optimized?
  Score: ___/10

CTA SCORE: ___/30
```

### Step 7: Technical Audit
```
DOES IT WORK?

□ MOBILE EXPERIENCE
  - Fully responsive?
  - Buttons thumb-friendly?
  - No horizontal scroll?
  Score: ___/10

□ LOAD SPEED
  - Desktop <2s?
  - Mobile <3s?
  - Images optimized?
  Score: ___/10

□ TRACKING
  - Pixel installed?
  - Events firing correctly?
  - Analytics working?
  Score: ___/10

□ CHECKOUT FLOW
  - No broken links?
  - Payment works?
  - Confirmation email sends?
  Score: ___/10

TECHNICAL SCORE: ___/40
```

### Step 8: Copy Quality Audit
```
IS COPY COMPELLING?

□ HEADLINES
  - Benefit-driven?
  - Specific (numbers/results)?
  - Creates curiosity?
  Score: ___/10

□ BODY COPY
  - Speaks to avatar's pain?
  - Conversational tone?
  - Easy to scan?
  Score: ___/10

□ BULLET POINTS
  - Benefits, not features?
  - Fascination-style bullets?
  - Specific outcomes?
  Score: ___/10

□ EMOTIONAL HOOKS
  - Fear of loss present?
  - Desire amplified?
  - Status/identity addressed?
  Score: ___/10

COPY SCORE: ___/40
```

### Step 9: Generate Final Score
```
LANDING PAGE SCORECARD:

Above The Fold: ___/40
Value Proposition: ___/40
Trust Elements: ___/40
Objection Handling: ___/40
Urgency/Scarcity: ___/30
CTA: ___/30
Technical: ___/40
Copy Quality: ___/40

TOTAL SCORE: ___/300

CONVERSION POTENTIAL:
0-100: 🔴 BROKEN - Complete redesign needed
101-150: 🟠 WEAK - Major fixes required
151-200: 🟡 DECENT - Optimization needed
201-250: 🟢 GOOD - Fine-tuning
251-300: 💎 OPTIMIZED - Test & scale
```

### Step 10: Prioritized Fixes
```
TOP 5 FIXES BY IMPACT:

FIX #1: [Highest impact item]
Current: [What's wrong]
Should Be: [What to change]
Expected Lift: +X% conversion

FIX #2: ...
FIX #3: ...
FIX #4: ...
FIX #5: ...

QUICK WINS (15 min each):
1.
2.
3.

A/B TEST IDEAS:
1. [Element to test]
2. [Element to test]
3. [Element to test]
```

## Output

```yaml
format: markdown
sections:
  - page_summary
  - section_scores (8 sections)
  - total_score_diagnosis
  - prioritized_fixes
  - quick_wins
  - ab_test_recommendations
```

## Conversion Benchmarks

| Page Type | Bad | Average | Good | Great |
|-----------|-----|---------|------|-------|
| Cold Traffic LP | <1% | 1-2% | 2-5% | >5% |
| Warm Traffic LP | <3% | 3-5% | 5-10% | >10% |
| Checkout Page | <30% | 30-50% | 50-70% | >70% |
| VSL Page | <1% | 1-3% | 3-5% | >5% |

## Common LP Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Headline doesn't match ad | -50% conv | Exact headline match |
| No CTA above fold | -30% conv | Add CTA in first screen |
| Generic guarantee | -20% conv | Specific performance guarantee |
| No urgency | -25% conv | Add real deadline |
| Slow load (>3s) | -7% per second | Optimize images, hosting |
| Weak social proof | -40% conv | Add testimonials with results |

---

*Task Version: 1.0*
*Primary Framework: $100M Leads LP Checklist (Alex Hormozi)*


---

## Referência: references/create-artifact-from-kb.md

---
version: "1.0"
date: "2026-03-09"
author:
  agent: "squad-chief"
  squad: "copy"
aios: true
project: "opb-corp"
---

# Task: Create Artifact from KB — Geração de Artefato via Knowledge Base

## Task Anatomy

| Campo | Valor |
|-------|-------|
| task_name | create-artifact-from-kb |
| status | active |
| responsible_executor | agent identificado pelo gap detection |
| execution_type | autonomous |
| elicit | false (já aprovado pelo usuário em self-improve) |

## Objetivo

Gerar um artefato (template, checklist, workflow, SOP) usando os frameworks
reais do KB de um agente. O artefato é criado PELO agente que domina o assunto,
não genericamente.

## Input

```yaml
creation_request:
  artifact_id: "{id from artifact-capability-map}"
  artifact_type: "{template | checklist | workflow | sop}"
  artifact_name: "{display name}"
  agent: "{agent-name}"
  source_frameworks: ["{fw1}", "{fw2}", "{fw3}"]
  kb_path: "squads/copy/data/books/{agent}/frameworks_inventory.yaml"
  output_path: "squads/copy/{templates|checklists|workflows}/{artifact_id}.md"
```

## Execution Flow

### Step 1: Load Agent KB
```
Read: squads/copy/data/books/{agent}/frameworks_inventory.yaml
Extract: source_frameworks listados no creation_request
```

### Step 2: Activate Agent
```
Ativar: /copy:agents:{agent-name}
Instrução: "Usando seus frameworks {fw1, fw2, fw3}, crie um {type} para {channel}.
O artefato deve refletir SUA metodologia — não genérica.
Incluir: structure, steps, quality criteria, examples."
```

### Step 3: Generate Artifact

**Se template:**
```markdown
---
version: "1.0"
date: "{today}"
author:
  agent: "{agent-name}"
  squad: "copy"
generated_from:
  kb: "squads/copy/data/books/{agent}/frameworks_inventory.yaml"
  frameworks: ["{fw1}", "{fw2}", "{fw3}"]
tags: ["{tag1}", "{tag2}"]
---

# Template: {name}

## Baseado em: {frameworks}

{conteúdo gerado pelo agent usando seus frameworks}
```

**Se checklist:**
```markdown
---
version: "1.0"
date: "{today}"
author:
  agent: "{agent-name}"
  squad: "copy"
generated_from:
  kb: "squads/copy/data/books/{agent}/frameworks_inventory.yaml"
  frameworks: ["{fw1}", "{fw2}", "{fw3}"]
tags: ["{tag1}", "{tag2}"]
---

# Checklist: {name}

## Baseado em: {frameworks}

{items derivados dos frameworks do agent}
```

**Se workflow:**
```yaml
---
version: "1.0"
date: "{today}"
author:
  agent: "{agent-name}"
  squad: "copy"
generated_from:
  kb: "squads/copy/data/books/{agent}/frameworks_inventory.yaml"
  frameworks: ["{fw1}", "{fw2}", "{fw3}"]
tags: ["{tag1}", "{tag2}"]
---

# Workflow: {name}
# phases derivadas dos SOPs/frameworks do agent
```

### Step 4: Save & Register

1. Salvar artefato no path correto (`templates/`, `checklists/`, `workflows/`)
2. Atualizar `config.yaml` → components section com novo arquivo
3. Log: "Artefato {name} criado por {agent} usando {N} frameworks"

## Quality Gate

O artefato gerado DEVE:
- [ ] Referenciar frameworks source no header (`generated_from`)
- [ ] Ter tags corretas para gap detection futura
- [ ] Refletir a metodologia do agent (não ser genérico)
- [ ] Ser funcional (usável imediatamente na próxima produção)
- [ ] Seguir o formato padrão do squad (metadata header Hybrid)

## Veto Conditions

- NÃO criar artefato sem carregar o KB do agent primeiro
- NÃO criar artefato genérico que não usa frameworks — deve ter `generated_from`
- NÃO sobrescrever artefato existente sem confirmação
- NÃO criar se agent tem menos de 3 frameworks relevantes para o artefato

## Output

```yaml
creation_result:
  artifact_id: "{id}"
  artifact_path: "{path}"
  agent: "{agent-name}"
  frameworks_used: ["{fw1}", "{fw2}", "{fw3}"]
  tags: ["{tag1}", "{tag2}"]
  status: "created"
```

## Handoff

→ Copy Chief registra no config.yaml → artefato disponível para próxima produção


---

## Referência: references/create-landing-page.md

# Create Landing Page Task

## Purpose
Criar landing pages de captura de alta conversão para geração de leads.

## Inputs

```yaml
required:
  - page_goal: lead_capture | webinar_registration | waitlist | quiz | demo_request
  - offer: O que pessoa recebe (lead magnet, acesso, etc.)
  - target_avatar: Público-alvo
  - main_benefit: Benefício principal

optional:
  - traffic_source: paid_ads | organic | email | social
  - urgency: Se há limite de tempo/vagas
  - social_proof: Números, logos, testimonials
  - copywriter_preference: Estilo preferido
```

## Landing Page Types

### 1. Lead Magnet Page
```yaml
goal: Capturar email em troca de conteúdo
elements: headline, bullet_points, form, cta
conversion: 20-50%
```

### 2. Webinar Registration
```yaml
goal: Inscrições para webinar
elements: headline, date/time, speaker_bio, form, cta
conversion: 30-50%
```

### 3. Waitlist Page
```yaml
goal: Construir lista de espera
elements: headline, teaser, form, cta
conversion: 40-60%
```

### 4. Quiz/Assessment
```yaml
goal: Engajamento + segmentação
elements: headline, quiz_preview, start_button
conversion: 50-70%
```

### 5. Demo/Call Request
```yaml
goal: Agendar demonstração ou call
elements: headline, benefits, form, calendar_embed
conversion: 5-20%
```

## Page Structure

### Squeeze Page (Mínimo Viável)
```markdown
# [HEADLINE - Benefício principal]

[IMAGEM/MOCKUP do que recebe]

[FORM]
- Email (obrigatório)
- Nome (opcional)

[BOTÃO CTA]
```

### Standard Landing Page
```markdown
# [HEADLINE - Benefício principal]

## [SUBHEADLINE - Especifica ou qualifica]

[IMAGEM/VIDEO]

### O Que Você Vai Receber/Aprender:

- ✅ [Benefício 1]
- ✅ [Benefício 2]
- ✅ [Benefício 3]

[FORM]

[BOTÃO CTA]

---

### Social Proof
[Números, logos, mini-testimonials]

### Sobre [VOCÊ]
[Mini bio + foto]
```

### Long-Form Landing Page
```markdown
# [HEADLINE]

## [SUBHEADLINE]

[HERO IMAGE/VIDEO]

---

## O Problema

[Descreva a dor do avatar]

## A Solução

[Como seu offer resolve]

## O Que Você Recebe

[Detalhamento do valor]

## Para Quem É

[Qualificação do avatar]

## Social Proof

[Testimonials, números, logos]

## FAQ

[Perguntas comuns]

---

[FORM + CTA]
```

## Headline Formulas

### Benefit-Focused
```
- "Como [RESULTADO] em [TEMPO]"
- "[NÚMERO] Maneiras de [BENEFÍCIO]"
- "O Guia Completo para [RESULTADO]"
```

### Curiosity-Focused
```
- "O Segredo de [AUTORIDADE] para [RESULTADO]"
- "Por Que [CRENÇA COMUM] Está Errado"
- "O Que [EXPERTS] Não Querem Que Você Saiba"
```

### Webinar-Specific
```
- "Masterclass Gratuita: [RESULTADO] em [TEMPO]"
- "Workshop Ao Vivo: [TEMA]"
- "Treinamento: Como [RESULTADO] (Mesmo Se [OBJEÇÃO])"
```

### Waitlist-Specific
```
- "Seja o Primeiro a Saber Quando [PRODUTO] Lançar"
- "Lista VIP: Acesso Antecipado a [PRODUTO]"
- "Entre na Lista de Espera para [BENEFÍCIO]"
```

## Form Optimization

### Minimum Fields (Higher Conversion)
```
- Email only: 40-60% conversion
- Email + First Name: 30-50% conversion
```

### Additional Fields (Lower Conversion, Better Leads)
```
- + Phone: -10-20% conversion
- + Company: -10-15% conversion
- + Role: -5-10% conversion
```

### Field Labels
```
❌ "Email Address"
✅ "Seu melhor email"

❌ "First Name"
✅ "Como posso te chamar?"

❌ "Submit"
✅ "Quero Meu [LEAD MAGNET]"
```

## CTA Button Copy

### Download CTAs
```
- "Baixar Agora (Grátis)"
- "Quero Meu [NOME DO LEAD MAGNET]"
- "Enviar Para Meu Email"
```

### Registration CTAs
```
- "Reservar Minha Vaga"
- "Quero Participar (Grátis)"
- "Garantir Meu Lugar"
```

### Waitlist CTAs
```
- "Entrar na Lista VIP"
- "Me Avise Quando Lançar"
- "Quero Acesso Antecipado"
```

## Copywriter Styles

### David Ogilvy Style
```
- Elegante e profissional
- Headline com benefício específico
- Copy informativo
- Credibilidade através de fatos
```

### Dan Kennedy Style
```
- Urgência (vagas limitadas)
- Bullet points agressivos
- CTA direto
- Escassez real
```

### Frank Kern Style
```
- Casual e autêntico
- "Cara, você precisa ver isso"
- Storytelling curto
- Zero hype
```

## Output Deliverables

```yaml
deliverables:
  - landing_page_copy:
      - headline (+ 3 variações)
      - subheadline
      - body_copy
      - bullet_points
      - cta_button (+ 2 variações)
      - form_fields_recommendation
  - above_fold_mockup_description
  - thank_you_page_copy
  - confirmation_email
```

## Quality Checklist

- [ ] Headline comunica benefício em <3 segundos
- [ ] Uma única ação clara (sem distrações)
- [ ] Form pede mínimo necessário
- [ ] CTA usa linguagem de ação
- [ ] Mobile-friendly (scannable)
- [ ] Social proof presente (se disponível)
- [ ] Carregamento rápido (sem vídeo autoplay pesado)

## Conversion Optimization Tips

1. **Remove Navigation:** Zero links externos
2. **Single CTA:** Uma ação, repetida
3. **Above the Fold:** Tudo importante visível
4. **Social Proof:** Números, logos, faces
5. **Urgency:** Se genuína, destaque
6. **Mobile First:** 60%+ do tráfego é mobile

---

*Task Version: 1.0*


---

## Referência: references/create-magalog.md

# create-magalog

A comprehensive task for creating magalog-format promotions - the magazine-catalog hybrid that revolutionized direct mail and continues to dominate long-form marketing.

## TASK METADATA

```yaml
task:
  name: Create Magalog
  id: create-magalog
  category: copywriting
  difficulty: advanced
  estimated_time: 4-8 hours for complete magalog
  origin: Jim Rutz methodology - pioneered at Boardroom Inc.
  version: 1.0

inputs_required:
  - Product/offer details
  - Target audience description
  - Key benefits and proof points
  - Testimonials and case studies
  - Competitor analysis
  - Brand voice guidelines (if any)

outputs_delivered:
  - Complete magalog structure
  - Cover design concept
  - Table of contents
  - Main feature article
  - Supporting articles (3-5)
  - Fascination bullets (50-100)
  - Sidebar content
  - Order form copy
  - Back cover

dependencies:
  agents:
    - jim-rutz.md
  checklists:
    - magalog-checklist.md
  templates:
    - magalog-tmpl.yaml
  supporting_materials:
    - data/boron-letters-collier-dna.yaml
```

---

## CORE PHILOSOPHY

> "The best advertising doesn't look like advertising. When your copy reads like a fascinating magazine article, readers lower their defenses. They actually WANT to read it."
> — Jim Rutz

The magalog format disguises sales material as editorial content, creating a piece that:
- Looks like a valuable magazine
- Reads like fascinating articles
- Feels like education, not selling
- Converts like the most powerful sales letter

## BORON / COLLIER DNA ACTIVATION

Before outlining the magalog, load `data/boron-letters-collier-dna.yaml` as a direct-mail benchmark layer.

Use it for:

- personal-over-commercial tone
- editorial disguise logic
- specificity standards
- reason-why framing
- A-pile attention patterns

Do NOT use it for:

- fake old-school gimmicks disconnected from the offer
- nostalgia styling without direct-response purpose
- forcing prison-letter tone into premium editorial voice

---

## PHASE 1: STRATEGIC FOUNDATION

### Step 1.1: Define the Editorial Angle

Before writing anything, define how you'll position this magalog editorially.

**The Big Editorial Question:**
"If this were a real magazine article, what would the headline be?"

**Editorial Angle Types:**

| Angle Type | Description | Example |
|------------|-------------|---------|
| The Discovery | New research/breakthrough | "Scientists Discover Why French Women Don't Get Fat" |
| The Exposé | Hidden truth revealed | "What Your Doctor Knows But Won't Tell You" |
| The Paradox | Counterintuitive truth | "Why Eating More Helps You Weigh Less" |
| The Insider | Secret knowledge | "What Wall Street Insiders Do With THEIR Money" |
| The Investigation | Reporter uncovers truth | "Our Investigation Into the Cholesterol Myth" |

**Angle Selection Worksheet:**

```markdown
## Editorial Angle Definition

### Product: [Name]
### Target Audience: [Description]

### Angle Options:
1. Discovery: [How can we frame this as a breakthrough?]
2. Exposé: [What "they" don't want people to know?]
3. Paradox: [What counterintuitive angle exists?]
4. Insider: [What privileged knowledge can we share?]
5. Investigation: [What can we "uncover"?]

### Selected Angle: [Choice]
### Editorial Headline: [Draft headline]
### Magazine Name: [What would this "magazine" be called?]
```

### Step 1.2: Map the Content Architecture

A magalog needs multiple "articles" that all support the same sale.

**Content Mapping Template:**

```markdown
## Magalog Content Architecture

### Main Feature (4-8 pages)
- Headline: [Editorial-style, not advertising]
- Hook: [Story or question that pulls in]
- Core premise: [The big idea]
- Proof points: [Key evidence]
- Transition to product: [Natural segue]

### Supporting Article 1 (2-3 pages)
- Topic: [Supports main premise from different angle]
- Format: [Case study / How-to / Expert interview]
- Key takeaway: [Builds desire for product]

### Supporting Article 2 (2-3 pages)
- Topic: [Addresses major objection as "information"]
- Format: [Research summary / Comparison / FAQ]
- Key takeaway: [Removes barrier to purchase]

### Supporting Article 3 (1-2 pages)
- Topic: [Social proof presented as feature]
- Format: [Success stories / User profiles]
- Key takeaway: [Proves it works for people like reader]

### Sidebar Content
- Quick tips (5-10)
- Did you know? facts (5-10)
- Warning boxes (2-3)
- Expert quotes (5-10)
- Resource lists

### Fascination Bullets
- Cover bullets (10-15)
- TOC teasers (15-20)
- Body fascinations (50+)
```

---

## PHASE 2: COVER CREATION

### Step 2.1: The Magazine Masthead

Create a "magazine identity" that adds credibility.

**Masthead Elements:**

| Element | Example | Purpose |
|---------|---------|---------|
| Publication name | "Health Discovery Report" | Legitimacy |
| Issue information | "Special Edition • Vol. 7, No. 3" | Permanence |
| Price (if applicable) | "$9.95" | Perceived value |
| Date | "January 2026" | Timeliness |
| Publisher | "Published by [Company]" | Authority |

### Step 2.2: The Cover Headline

The cover headline should be EDITORIAL, not ADVERTISING.

**Advertising Headline (WRONG):**
"Lose 30 Pounds in 30 Days - Order Now!"

**Editorial Headline (RIGHT):**
"The Metabolic Switch: Why Japanese Women Stay Slim Without Dieting (And How You Can Too)"

**Cover Headline Formula:**

```
[Intriguing claim or question]
+
[Specific benefit or revelation]
+
[Implied promise for the reader]
```

**Examples:**

| Topic | Editorial Headline |
|-------|-------------------|
| Weight loss | "Why French Women Don't Get Fat: The 4pm Secret That Changes Everything" |
| Investing | "What Warren Buffett's Accountant Does With HIS Money" |
| Health | "READ THIS OR DIE: The Cures Your Doctor Doesn't Know Exist" |
| Business | "How a Retired Librarian Built a $2.3 Million Business in 18 Months" |

### Step 2.3: Cover Bullets (TOC Teasers)

The cover should include 5-10 bullets teasing inside content.

**Cover Bullet Formula:**
[Curiosity hook] + [Page reference]

**Examples:**
- "The 3-second test that predicts heart attacks... page 7"
- "Why counting calories actually makes you GAIN weight... page 12"
- "The $0.47 supplement that outperforms a $127 prescription... page 23"
- "What never to eat after 6pm if you're over 50... page 31"

---

## PHASE 3: TABLE OF CONTENTS

### Step 3.1: TOC Structure

The table of contents serves two purposes:
1. Makes the magalog look like a real magazine
2. Creates multiple curiosity hooks

**TOC Template:**

```
CONTENTS

FEATURES
[Main Article Title] ........................... 3
[Supporting Article 1 Title] .................. 9
[Supporting Article 2 Title] ................. 14
[Supporting Article 3 Title] ................. 18

SPECIAL SECTIONS
[Sidebar/Box Title 1] ......................... 6
[Sidebar/Box Title 2] ........................ 11
[Resource List Title] ........................ 22

YOUR NEXT STEP
[How to Get Started] ......................... 24
[Order Form/Response Form] ................... 26
```

### Step 3.2: TOC Title Writing

Each TOC entry should create curiosity.

**Weak TOC Entry:**
"Chapter 3: Nutrition Basics ........... 14"

**Strong TOC Entry:**
"The Breakfast Food That's Secretly Making You Fat ........... 14"

---

## PHASE 4: MAIN FEATURE ARTICLE

### Step 4.1: The Editorial Lead

The main article should open like a magazine feature, not a sales letter.

**Lead Types:**

**Type 1: The Story Lead**
```
In a cramped laboratory at Johns Hopkins University, Dr. Katherine
Horvath was about to make a discovery that would change everything
we know about aging...
```

**Type 2: The Question Lead**
```
Here's something that's puzzled researchers for decades: The Japanese
eat more salt than any developed nation. They also have the lowest
rates of heart disease. How is that possible?
```

**Type 3: The Paradox Lead**
```
What if everything you've been told about weight loss is wrong?

That's the conclusion Dr. Jean-Pierre Despres reached after 20 years
of research at Laval University...
```

**Type 4: The Dateline Lead**
```
LYON, FRANCE - In a small clinic overlooking the Rhône The Keymaker, a group
of heart patients are doing something their American doctors would
consider insane: They're eating butter. Lots of it.
```

### Step 4.2: Article Structure

**The Editorial Flow:**

```
1. HOOK (1-2 paragraphs)
   - Story, question, or paradox that grabs attention

2. SETUP (2-3 paragraphs)
   - Expand on the hook
   - Establish the problem/mystery
   - Build anticipation for the answer

3. REVELATION (3-5 paragraphs)
   - Deliver the "discovery" or "secret"
   - Support with evidence (studies, experts, cases)
   - Make it feel like education, not selling

4. PROOF EXPANSION (4-6 paragraphs)
   - Additional evidence
   - Testimonials woven in as "case studies"
   - Expert quotes
   - Statistics

5. OBJECTION HANDLING (2-4 paragraphs)
   - Address doubts as "common questions"
   - Present as balanced journalism

6. PRODUCT INTRODUCTION (2-3 paragraphs)
   - Natural transition to the solution
   - Present product as embodiment of the discovery
   - This should feel like logical conclusion, not pitch

7. NEXT STEPS (1-2 paragraphs)
   - Soft transition to how to access the product
   - "For more information, see page [X]"
```

### Step 4.3: Writing in Editorial Voice

**Advertising Voice (WRONG):**
```
Are you tired of feeling tired? Our revolutionary supplement will
give you the energy you need to live your best life! Order now and
save 50%!
```

**Editorial Voice (RIGHT):**
```
For Dr. Sarah Chen's patients, fatigue had become a way of life. "They'd
come in saying they'd tried everything," Chen recalls. "Multiple doctors,
supplements, even lifestyle changes. Nothing worked."

Then Chen discovered something that changed her practice entirely.

It started with a paper published in the Journal of Clinical Endocrinology
in 2019. Researchers at Seoul National University had found that 73% of
their chronically fatigued patients shared one surprising characteristic:
abnormally low levels of a little-known enzyme called CoQ10...
```

---

## PHASE 5: SUPPORTING ARTICLES

### Step 5.1: Article Types and Purposes

Each supporting article should serve a specific persuasion purpose while appearing to be valuable editorial content.

**Article Type 1: The Case Study Feature**
- **Purpose:** Proof that it works
- **Format:** Profile of a successful user
- **Disguise:** "Meet [Name]: How [They] [Achieved Result]"
- **Length:** 2-3 pages

```
Example Title: "Meet Richard: How a 57-Year-Old Accountant Lost 47 Pounds
Without Giving Up His Favorite Foods"

This reads as a human interest story, but it's actually a testimonial
with context, credibility, and emotional impact.
```

**Article Type 2: The Research Summary**
- **Purpose:** Scientific credibility
- **Format:** Overview of studies and findings
- **Disguise:** "What Science Says About [Topic]"
- **Length:** 2-3 pages

```
Example Title: "The Science Behind the Breakthrough: 7 Studies That Changed
Everything We Know About Weight Loss"

This reads as a research report, but it's actually proof stacking for
your product's claims.
```

**Article Type 3: The How-To Guide**
- **Purpose:** Demonstrate ease of use
- **Format:** Step-by-step instructions
- **Disguise:** "Your [X]-Day Quick-Start Guide"
- **Length:** 1-2 pages

```
Example Title: "Your 14-Day Quick-Start Guide: Simple Steps to Begin
Your Transformation"

This reads as a practical guide, but it's actually explaining how easy
the product is to use (and building commitment).
```

**Article Type 4: The Expert Interview**
- **Purpose:** Authority building
- **Format:** Q&A with creator/expert
- **Disguise:** "An Exclusive Interview with Dr. [Name]"
- **Length:** 2-3 pages

```
Example Title: "The Man Behind the Discovery: An Exclusive Interview
with Dr. Jean-Pierre Despres"

This reads as journalism, but it's actually a vehicle for delivering
sales messages through a credible authority figure.
```

**Article Type 5: The Comparison Feature**
- **Purpose:** Position against alternatives
- **Format:** Product/approach comparison
- **Disguise:** "How Does [Category] Compare? Our Analysis"
- **Length:** 1-2 pages

```
Example Title: "The Supplement Showdown: How [Product] Stacks Up Against
the Competition"

This reads as consumer reporting, but it's actually demonstrating
your product's superiority.
```

---

## PHASE 6: SIDEBAR CONTENT

### Step 6.1: Sidebar Types

Sidebars fill white space, add value, and create visual variety.

**Sidebar Type 1: Quick Tips**
```
┌─────────────────────────────────────┐
│ 5 QUICK TIPS FOR [BENEFIT]          │
│                                     │
│ 1. [Tip with specific action]       │
│ 2. [Tip with specific action]       │
│ 3. [Tip with specific action]       │
│ 4. [Tip with specific action]       │
│ 5. [Tip with specific action]       │
└─────────────────────────────────────┘
```

**Sidebar Type 2: Did You Know?**
```
┌─────────────────────────────────────┐
│ DID YOU KNOW?                       │
│                                     │
│ [Surprising fact with source]       │
│                                     │
│ According to [Source], [statistic   │
│ that supports main premise]...      │
└─────────────────────────────────────┘
```

**Sidebar Type 3: Warning Box**
```
┌─────────────────────────────────────┐
│ ⚠️ WARNING                          │
│                                     │
│ [Common mistake or danger that      │
│ creates urgency for the product]    │
│                                     │
│ For more information, see page X.   │
└─────────────────────────────────────┘
```

**Sidebar Type 4: Expert Quote**
```
┌─────────────────────────────────────┐
│ "Quote from authority figure that   │
│ supports the main premise..."       │
│                                     │
│ — Dr. [Name], [Title], [Institution]│
└─────────────────────────────────────┘
```

**Sidebar Type 5: By the Numbers**
```
┌─────────────────────────────────────┐
│ BY THE NUMBERS                      │
│                                     │
│ 73% - [Statistic]                   │
│ 2.3x - [Comparison]                 │
│ 14 days - [Timeframe]               │
│ $4,387 - [Dollar figure]            │
└─────────────────────────────────────┘
```

### Step 6.2: Sidebar Distribution

**Rule:** Every 2-page spread should have at least one sidebar element.

**Layout Pattern:**
```
Page 3-4: Main article + Quick Tips sidebar
Page 5-6: Main article continued + Expert Quote sidebar
Page 7-8: Main article concluded + Did You Know? sidebar
Page 9-10: Supporting article 1 + Warning Box sidebar
...and so on
```

---

## PHASE 7: FASCINATION BULLETS

### Step 7.1: The Bullet Density Rule

Magalogs are PACKED with fascination bullets. Aim for:
- **Cover:** 10-15 bullets
- **TOC:** 15-20 bullets (as article titles)
- **Throughout body:** 50+ bullets
- **Order form area:** 20-30 bullets

### Step 7.2: Bullet Formulas

**The "How To" Bullet:**
```
"How to [achieve result] [with ease/speed qualifier] (page X)"

Example: "How to melt stubborn belly fat while eating your favorite
foods — even chocolate (page 12)"
```

**The "Why" Bullet:**
```
"Why [counterintuitive fact] (page X)"

Example: "Why counting calories actually makes you GAIN weight (page 17)"
```

**The "What Never" Bullet:**
```
"What never to [do] — and [consequence/alternative] (page X)"

Example: "What never to eat for breakfast if you're over 50 — and the
30-second alternative that boosts metabolism all day (page 23)"
```

**The "Warning" Bullet:**
```
"WARNING: [Danger that creates urgency] (page X)"

Example: "WARNING: The 'healthy' vegetable oil that's been linked to
Alzheimer's disease (page 31)"
```

**The "Number" Bullet:**
```
"[X] [things] that [achieve benefit] (page X)"

Example: "7 foods that clear your arteries in 30 days or less (page 9)"
```

**The "Secret" Bullet:**
```
"The [adjective] secret [specific group] uses to [achieve result] (page X)"

Example: "The morning secret Japanese women use to stay slim their
entire lives (page 15)"
```

**The "Surprising" Bullet:**
```
"The surprising link between [A] and [B] (page X)"

Example: "The surprising link between your evening TV watching and
your morning blood pressure (page 28)"
```

### Step 7.3: Bullet Power Amplifiers

Add these elements to increase bullet impact:

| Amplifier | Before | After |
|-----------|--------|-------|
| Specificity | "A supplement" | "The $0.47 supplement" |
| Time | "Results" | "Results in 14 days" |
| Authority | "Studies show" | "Stanford study proves" |
| Contrast | "Better than pills" | "Better than $200 prescriptions" |
| Page number | [none] | "(page 23)" |

---

## PHASE 8: THE OFFER SECTION

### Step 8.1: The Natural Transition

The transition from editorial to offer should feel like a logical conclusion, not a sales pitch.

**Abrupt Transition (WRONG):**
```
...and that's why this discovery is so important.

ORDER NOW AND SAVE 50%!
```

**Natural Transition (RIGHT):**
```
...and that's why this discovery is so important.

Which raises an obvious question: How can you get access to this
breakthrough yourself?

Until recently, you would have had to...

[Explain why it was difficult/expensive]

But now, for the first time, there's a simpler way...
```

### Step 8.2: The Product Introduction

Present the product as the embodiment of everything discussed in the editorial.

**Template:**
```
Based on [the research/discovery/breakthrough] we've been discussing,
[Product Creator] has developed [Product Name] — a [description] that
[primary benefit].

Unlike [alternatives], [Product Name] was designed specifically to
[unique mechanism/approach].

Here's what you get:

[Component 1]: [Benefit of component 1]
[Component 2]: [Benefit of component 2]
[Component 3]: [Benefit of component 3]
...
```

### Step 8.3: The Reservation Form

Magalogs often disguise the order form as a "Reservation Form" or "Request Form."

**Order Form Header Options:**
- "Your Personal Reservation Form"
- "Priority Response Form"
- "Yes, I'd Like to Learn More"
- "Preferred Reader Request Form"

**Order Form Elements:**
1. Restatement of main benefit
2. What they're getting (product + bonuses)
3. Price with value justification
4. Guarantee prominently displayed
5. Multiple response options (phone, web, mail)
6. Deadline/urgency element

---

## PHASE 9: BACK COVER

### Step 9.1: Back Cover Strategy

The back cover is prime real estate. Many recipients flip directly to it.

**Option 1: Testimonial Focus**
```
Featured testimonial with photo, name, location, and specific results.
Supporting testimonials below.
Call to action: "See inside for the full story..."
```

**Option 2: Bullet Summary**
```
"INSIDE THIS ISSUE:"
[10-15 of your strongest fascination bullets]
"Turn to page 3 to begin..."
```

**Option 3: Urgency Close**
```
Brief summary of main benefit
Strong deadline or scarcity statement
Contact information
```

---

## PHASE 10: MAGALOG CHECKLIST

### Pre-Publication Checklist

**Format & Appearance:**
- [ ] Looks like a magazine, not a sales letter
- [ ] Has masthead/publication identity
- [ ] Includes table of contents
- [ ] Uses magazine-style layout (columns, headers, pull quotes)
- [ ] Has bylines on articles
- [ ] Includes page numbers
- [ ] Has sidebars on most spreads
- [ ] Photos have captions

**Editorial Quality:**
- [ ] Main headline is editorial, not advertising
- [ ] Articles read like genuine editorial content
- [ ] Would pass the "remove order form" test (still valuable)
- [ ] Includes specific facts, names, dates
- [ ] Has expert quotes and citations
- [ ] Stories are compelling and complete

**Persuasion Elements:**
- [ ] 50+ fascination bullets throughout
- [ ] Multiple proof elements (testimonials, studies, stats)
- [ ] Objections addressed as "information"
- [ ] Natural transition to product
- [ ] Strong guarantee
- [ ] Clear urgency/scarcity element
- [ ] Multiple response options

**The Rutz Test:**
- [ ] "If I removed the order form, would this be worth reading on its own?"
- [ ] "Can a reader put this down?"
- [ ] "Is every paragraph fascinating?"

---

## QUICK REFERENCE CARD

### Magalog Structure
1. Cover (editorial headline + bullets)
2. TOC (page 2)
3. Main Feature (pages 3-8)
4. Supporting Articles (pages 9-16)
5. Sidebars (throughout)
6. Offer Section (pages 17-20)
7. Order Form (pages 21-22)
8. Back Cover

### Content Ratios
- 60% valuable information
- 25% proof and testimonials
- 15% direct selling

### Bullet Count Targets
- Cover: 10-15
- TOC: 15-20
- Body: 50+
- Offer area: 20-30
- **Total: 100+**

### The Three Rutz Tests
1. Would it be worth reading without the order form?
2. Can someone put it down?
3. Is every paragraph fascinating?

---

## CONCLUSION

The magalog format remains one of the most powerful vehicles for long-form persuasion. When executed correctly, it:
- Overcomes advertising resistance
- Provides genuine value to readers
- Builds trust through editorial quality
- Converts through accumulated fascination and proof

Master this format and you'll have a tool that works across print, digital, and video applications.

> "The best advertising doesn't look like advertising. Make your copy so valuable, so fascinating, and so useful that by the time readers reach the order form, they're already sold."
> — Jim Rutz

---

*Task Version: 1.0*
*Created: 2026-01-23*
*Based on: Jim Rutz methodology*
*Lines: 650+*


---

## Referência: references/create-premium-lp-copy.md

# Create Premium LP Copy

## Metadata

```yaml
task_id: create-premium-lp-copy
version: "1.0.0"
category: creation
elicit: true
estimated_time: "15-30 min"
difficulty: intermediate
output_format: yaml
output_schema: "squads/design/templates/premium-lp-content-schema.yaml"
handoff_to: "@premium-design *generate"
```

## Purpose

Gerar copy completa para uma Landing Page Premium (dark theme) atraves de elicitacao
estruturada. O output e um payload YAML que alimenta diretamente o comando `*generate`
do agente @premium-design no Design Squad.

**Pipeline:** Elicitacao → Copy Generation → Schema Formatting → Design Handoff

---

## Inputs

```yaml
required:
  - client_name: "Nome completo do profissional/marca"
  - client_expertise: "Area de atuacao principal (1-2 frases)"

optional:
  - brand_initials: "Iniciais para nav (ex: JCA). Default: derivado do nome"
  - photo_url: "URL ou path para foto. Default: photo.png"
  - scheduling_url: "URL de agendamento (cal.com, calendly, etc.)"
  - social_links: "LinkedIn, Instagram, etc."
  - existing_copy: "Copy existente para reaproveitamento"
  - tone: "premium_elegant | premium_bold | premium_minimal. Default: premium_elegant"
  - lang: "pt-BR | en | es. Default: pt-BR"
  - template: "nocturne_cian | obsidian_gold | carbon_blue | midnight_violet | eclipse_rose | stealth_emerald | crimson_noir | arctic_frost. Default: nocturne_cian"
  - tier: "base | enhanced | maximum. Default: enhanced"
```

---

## Copywriter Selection

Esta task usa **David Ogilvy** como copywriter primario:
- Tom elegante e sofisticado = LP premium
- Pesquisa profunda informa copy factual
- Headlines com beneficio especifico
- Credibilidade atraves de numeros

**Blend opcional com:**
- **Eugene Schwartz** — Para calibrar nivel de awareness do publico
- **Gary Bencivenga** — Para bullets nas expertise cards

---

## Workflow

### PHASE 1: ELICITATION (Interactive)

**CRITICAL: Todas as perguntas sao obrigatorias. Use AskUserQuestion tool.**

#### Step 1.1: Identidade & Posicionamento

```yaml
questions:
  - id: full_name
    question: "Qual o nome completo para o hero da LP?"
    example: "Jose Carlos Amorim"
    maps_to: hero.name

  - id: labels
    question: "Quais sao seus 2-4 titulos/papeis profissionais? (separados por virgula)"
    example: "AI Architect, Brand Strategist, Systems Thinker"
    maps_to: hero.labels
    validation: "1-4 items"

  - id: hero_description
    question: "Descreva em 1-2 frases o que voce faz e para quem. (max 200 chars)"
    example: "Transformo especialistas em marcas pessoais premium com IA e sistemas que escalam."
    maps_to: hero.description
    validation: "max_length: 200"

  - id: brand_initials
    question: "Quais iniciais usar na nav? (max 5 chars)"
    example: "JCA"
    maps_to: nav.brand
    default: "Derivado automaticamente do nome"
    validation: "max_length: 5"
```

#### Step 1.2: Prova Social & Metricas

```yaml
questions:
  - id: proof_metrics
    question: |
      Liste 3-6 metricas de prova social. Para cada uma, informe:
      - Numero (ex: 150)
      - Sufixo opcional (ex: +, %, M+, k)
      - Label (ex: Clientes Atendidos)

      Formato: numero sufixo | label
    example: |
      150+ | Clientes Atendidos
      12 | Anos de Experiencia
      97% | Taxa de Satisfacao
      50M+ | Revenue Gerado
    maps_to: proof.items
    validation: "2-6 items"
```

#### Step 1.3: Expertise & Especialidades

```yaml
questions:
  - id: expertise_cards
    question: |
      Liste 2-6 areas de expertise. Para cada uma:
      - Titulo curto (ex: AI Systems)
      - Descricao em 1 frase (max 150 chars)
      - Tags de tecnologia/skill (2-4 tags)
      - Marque [DESTAQUE] se for a principal (apenas 1)

      Formato: Titulo | Descricao | tag1, tag2, tag3 | [DESTAQUE]
    example: |
      AI Systems | Arquiteturas de IA que transformam operacoes manuais em sistemas autonomos. | Claude, GPT-4, LangChain | [DESTAQUE]
      Brand Strategy | Posicionamento premium para especialistas que querem dominar seu nicho. | Positioning, Messaging
      Sales Systems | Funis e automacoes que convertem trafego em receita previsivel. | Funnels, CRM
    maps_to: expertise.cards
    validation: "2-8 items, max 1 featured"
```

#### Step 1.4: Filosofia & Quote

```yaml
questions:
  - id: quote_text
    question: "Qual sua frase/filosofia que define sua abordagem? (max 300 chars)"
    example: "Technology is the amplifier. The human is the signal."
    maps_to: quote.text
    validation: "max_length: 300"

  - id: quote_role
    question: "Qual titulo/cargo para a atribuicao da frase?"
    example: "Founder, MMOS"
    maps_to: quote.attribution.role
```

#### Step 1.5: Stack Profissional

```yaml
questions:
  - id: stack_items
    question: |
      Liste 3-8 areas do seu stack profissional. Para cada:
      - Nome da area (ex: AI Architecture)
      - Detalhes/tecnologias (ex: Claude, GPT-4, LangChain)

      Formato: Nome | Detalhes
    example: |
      AI Architecture | Claude, GPT-4, LangChain, Vector DBs
      Web Development | Next.js, React, TypeScript, Tailwind
      Marketing | Funnels, Email, Paid Traffic, SEO
      Design | Figma, Framer, Design Systems
    maps_to: stack.items
    validation: "2-10 items"
```

#### Step 1.6: CTA & Links

```yaml
questions:
  - id: cta_heading
    question: "Qual o heading da secao final de CTA?"
    example: "Vamos Conversar?"
    maps_to: cta.heading
    default: "Vamos Conversar?"

  - id: cta_description
    question: "Descricao curta do CTA (max 200 chars). Deixe vazio para gerar automaticamente."
    example: "Agende uma conversa para explorar como posso ajudar a transformar sua marca pessoal."
    maps_to: cta.description
    validation: "max_length: 200"

  - id: scheduling_url
    question: "URL de agendamento (cal.com, calendly, etc.)"
    example: "https://cal.com/joseamorim"
    maps_to: cta.primary.href

  - id: cta_label
    question: "Texto do botao principal de CTA"
    example: "Agendar Agora"
    maps_to: cta.primary.label
    default: "Agendar Agora"

  - id: social_links
    question: |
      Quais links sociais incluir no footer? (1-4)
      Formato: label | url
    example: |
      LinkedIn | https://linkedin.com/in/joseamorim
      Instagram | https://instagram.com/joseamorim
    maps_to: footer.links
    validation: "0-4 items"
```

#### Step 1.7: Preferencias Visuais

```yaml
questions:
  - id: template_choice
    question: |
      Qual template visual? Opcoes:
      1. Nocturne Cian (ciano vibrante sobre preto)
      2. Obsidian Gold (dourado sobre preto)
      3. Carbon Blue (azul sobre preto)
      4. Midnight Violet (violeta sobre preto)
      5. Eclipse Rose (rosa sobre preto)
      6. Stealth Emerald (verde sobre preto)
      7. Crimson Noir (vermelho sobre preto)
      8. Arctic Frost (azul claro sobre preto)
    maps_to: config.template
    default: "nocturne_cian"

  - id: tier_choice
    question: |
      Qual nivel de efeitos visuais?
      1. Base — CSS puro, sem JavaScript (carregamento rapido)
      2. Enhanced — + scroll reveals, grain, progress bar, gradient text (recomendado)
      3. Maximum — + cursor custom, text split, counters, parallax, magnetic buttons
    maps_to: config.tier
    default: "enhanced"

  - id: photo_url
    question: "URL ou path da foto profissional (PNG com fundo transparente preferido)"
    example: "photo.png"
    maps_to: photo.url
    default: "photo.png"

  - id: photo_treatment
    question: |
      Tratamento da foto:
      1. Cinematic — Mascara + aura + aneis (padrao)
      2. Clean — Apenas mascara, sem efeitos
      3. Raw — Sem tratamento, imagem como esta
    maps_to: photo.treatment
    default: "cinematic"
```

---

### PHASE 2: COPY GENERATION

**Executor: Agent (Ogilvy style)**

Apos coletar todas as respostas, gerar copy refinada para cada secao.

#### Step 2.1: Refinar Hero Copy

```yaml
process:
  input: hero_description (raw do usuario)
  action: |
    Aplicar estilo Ogilvy:
    - Tom premium e sofisticado
    - Beneficio claro em 1-2 frases
    - Sem jargao tecnico excessivo
    - Palavras precisas, nenhuma desperdicada
  output: hero.description (refined, max 200 chars)

  also_generate:
    - hero.eyebrow: { number: "01", label: "Personal Brand" }
    - hero.cta_primary.label: "Derivar do contexto (ex: Agendar Conversa)"
    - hero.cta_secondary: { label: "Ver Portfolio", href: "#expertise" }
```

#### Step 2.2: Refinar Proof Metrics

```yaml
process:
  input: proof_metrics (raw do usuario)
  action: |
    - Validar que numeros sao impactantes
    - Ajustar labels para tom premium
    - Garantir 3-4 metricas (cortar se >4 para manter impacto)
    - Ordenar: mais impressionante primeiro
  output: proof.items[]

  also_generate:
    - proof.eyebrow: { number: "02", label: "Track Record" }
```

#### Step 2.3: Refinar Expertise Cards

```yaml
process:
  input: expertise_cards (raw do usuario)
  action: |
    Para cada card, aplicar Ogilvy + Bencivenga blend:
    - Titulo: Curto, impactante (2-3 palavras)
    - Descricao: Transformar em micro-bullet Bencivenga
      → Resultado especifico, nao feature
      → Max 150 chars
    - Tags: Manter tecnicas, curtas
    - Featured: Validar apenas 1 card marcado
  output: expertise.cards[]

  also_generate:
    - expertise.eyebrow: { number: "03", label: "Expertise" }
```

#### Step 2.4: Refinar Quote

```yaml
process:
  input: quote_text (raw do usuario)
  action: |
    - Manter autenticidade da voz do cliente
    - Ajustar ritmo e impacto se necessario
    - Garantir max 300 chars
    - Nao alterar se ja for forte
  output: quote.text

  also_generate:
    - quote.eyebrow: { number: "04", label: "Philosophy" }
    - quote.attribution: { name: "{client_name}", role: "{quote_role}" }
```

#### Step 2.5: Refinar Stack

```yaml
process:
  input: stack_items (raw do usuario)
  action: |
    - Ordenar por relevancia para o publico-alvo
    - Garantir detalhes tecnicos concisos
    - 4-6 items ideal (cortar se >6)
  output: stack.items[]

  also_generate:
    - stack.eyebrow: { number: "05", label: "Stack" }
    - stack.heading: "Professional Stack"
```

#### Step 2.6: Gerar CTA & Nav

```yaml
process:
  input: cta_heading, cta_description, scheduling_url, cta_label
  action: |
    - Se cta_description vazio, gerar com Ogilvy:
      "Agende uma conversa para explorar como posso ajudar."
    - Gerar nav links baseado nas secoes presentes
    - Gerar CTA secundario se social_links disponivel
  output: cta{}, nav{}

  auto_generate:
    nav:
      brand: "{brand_initials}"
      links:
        - { label: "Expertise", href: "#expertise" }
        - { label: "Stack", href: "#stack" }
        - { label: "Contato", href: "#cta" }
      cta: { label: "Agendar", href: "#cta" }

    cta:
      eyebrow: { number: "06", label: "Next Step" }
      heading: "{cta_heading}"
      description: "{cta_description or generated}"
      primary: { label: "{cta_label}", href: "{scheduling_url}" }
      secondary: "First social link if available"
```

#### Step 2.7: Gerar Footer

```yaml
process:
  input: social_links
  action: |
    - Copyright: "auto" (gera automaticamente com ano + nome)
    - Links: Mapear social_links para footer format
  output: footer{}
```

---

### PHASE 3: FORMAT (Schema Compliance)

**CRITICAL: O output DEVE seguir exatamente `premium-lp-content-schema.yaml`**

#### Step 3.1: Montar Payload

```yaml
assemble_payload:
  reference: "squads/design/templates/premium-lp-content-schema.yaml"

  structure:
    config:
      template: "{template_choice}"
      tier: "{tier_choice}"
      lang: "{lang}"

    nav:
      brand: "{brand_initials}"
      links: "[generated from sections]"
      cta: "{ label: 'Agendar', href: '#cta' }"

    hero:
      eyebrow: "{ number: '01', label: 'Personal Brand' }"
      name: "{full_name}"
      labels: "[from elicitation]"
      description: "[refined copy]"
      cta_primary: "{ label: '{cta_label}', href: '{scheduling_url}' }"
      cta_secondary: "{ label: 'Ver Portfolio', href: '#expertise' }"

    photo:
      url: "{photo_url}"
      alt: "{full_name}"
      treatment: "{photo_treatment}"

    proof:
      eyebrow: "{ number: '02', label: 'Track Record' }"
      items: "[from elicitation, refined]"

    expertise:
      eyebrow: "{ number: '03', label: 'Expertise' }"
      cards: "[from elicitation, refined]"

    quote:
      eyebrow: "{ number: '04', label: 'Philosophy' }"
      text: "[refined quote]"
      attribution: "{ name: '{full_name}', role: '{quote_role}' }"

    stack:
      eyebrow: "{ number: '05', label: 'Stack' }"
      heading: "Professional Stack"
      items: "[from elicitation, refined]"

    cta:
      eyebrow: "{ number: '06', label: 'Next Step' }"
      heading: "{cta_heading}"
      description: "[refined or generated]"
      primary: "{ label: '{cta_label}', href: '{scheduling_url}' }"
      secondary: "[first social link or null]"

    footer:
      copyright: "auto"
      links: "[from social_links]"
```

#### Step 3.2: Validate Payload

```yaml
validation_rules:
  required_fields:
    - config.template (must be in enum)
    - config.tier (must be in enum)
    - nav.brand (max 5 chars)
    - hero.name (non-empty)
    - hero.labels (1-4 items)
    - hero.description (max 200 chars)
    - hero.cta_primary.label
    - hero.cta_primary.href
    - photo.url
    - proof.items (2-6 items, each with number + label)
    - expertise.cards (2-8 items, each with title + description)
    - quote.text (max 300 chars)
    - stack.items (2-10 items, each with name + detail)
    - cta.heading
    - cta.primary.label
    - cta.primary.href

  constraints:
    - proof.items: "2-6 items"
    - expertise.cards: "2-8 items, max 1 featured"
    - stack.items: "2-10 items"
    - nav.links: "0-5 items"
    - footer.links: "0-4 items"
    - hero.labels: "1-4 items"
    - All descriptions: "max_length enforced"

  on_validation_error:
    - Log specific field and constraint violated
    - Auto-fix if possible (truncate, limit items)
    - Ask user only if required field is missing
```

---

### PHASE 4: OUTPUT & HANDOFF

#### Step 4.1: Output Payload

```yaml
output:
  format: yaml
  location: "outputs/premium-design/{template}/content-payload.yaml"

  display: |
    Apresentar o payload completo ao usuario em YAML formatado.
    Perguntar: "Payload pronto. Deseja:"
    1. Enviar direto para @premium-design *generate
    2. Revisar e ajustar alguma secao
    3. Salvar payload e parar aqui
```

#### Step 4.2: Handoff to Design Squad

```yaml
handoff:
  target_agent: "@premium-design"
  target_command: "*generate"

  handoff_message: |
    ## Handoff: CopywriterOS → Design Squad

    **Task:** create-premium-lp-copy (COMPLETE)
    **Payload:** [content-payload.yaml]
    **Template:** {config.template}
    **Tier:** {config.tier}

    **Quality Gate:**
    - [x] All required fields present
    - [x] All constraints validated
    - [x] Copy refined with Ogilvy style
    - [x] Schema compliance verified

    **Next:** @premium-design *generate --payload content-payload.yaml
```

---

## Quality Checklist

```yaml
copy_quality:
  - "[ ] Hero description comunica beneficio em <3 segundos"
  - "[ ] Labels sao especificos (nao genericos como 'Expert')"
  - "[ ] Proof metrics sao verificaveis e impactantes"
  - "[ ] Expertise cards tem resultados, nao features"
  - "[ ] Quote e autentica e memoravel"
  - "[ ] Stack items sao relevantes para o publico-alvo"
  - "[ ] CTA e claro e com baixa friccao"
  - "[ ] Tom e consistente (premium, sofisticado)"

schema_compliance:
  - "[ ] Todos os campos required preenchidos"
  - "[ ] Todos os constraints de length respeitados"
  - "[ ] Todos os enums validos"
  - "[ ] Estrutura YAML identica ao schema"

handoff_ready:
  - "[ ] Payload salvo em outputs/"
  - "[ ] Validacao completa sem erros"
  - "[ ] Usuario aprovou o conteudo"
```

---

## Error Handling

```yaml
errors:
  missing_required_field:
    action: "Perguntar ao usuario diretamente"
    retry: true

  constraint_violation:
    action: "Auto-fix se possivel, informar usuario"
    examples:
      - "description > 200 chars → truncar com ... e perguntar"
      - "proof.items > 6 → apresentar top 6 por impacto"
      - "labels > 4 → perguntar quais manter"

  invalid_enum:
    action: "Apresentar opcoes validas"
    retry: true

  scheduling_url_missing:
    action: "Usar '#cta' como fallback, avisar usuario"
    warning: "Sem URL de agendamento, o CTA nao tera link funcional"
```

---

## Usage Examples

### Via Copy Chief

```
User: @copy-chief
User: *premium-lp

Copy Chief: Vou iniciar o processo de criacao de copy para sua LP Premium.
            Usando David Ogilvy como copywriter principal.
            Vamos comecar com a elicitacao...

[Phase 1: 7 steps de perguntas]
[Phase 2: Refinamento automatico]
[Phase 3: Formatacao do payload]
[Phase 4: Handoff para @premium-design]
```

### Via Direct Task

```
User: @premium-design
User: *generate --elicit

premium-design: Preciso do payload de conteudo. Vou chamar o CopywriterOS...
[Executa create-premium-lp-copy]
[Recebe payload]
[Executa *generate]
```

### Via Workflow (Autonomous)

```
User: Criar LP premium para Maria Silva, consultora de RH
[Workflow premium-lp-complete executa tudo autonomamente]
[Output: HTML renderizado em outputs/premium-design/{template}/]
```

---

## Integration Points

```yaml
integrations:
  copywriter_os:
    agents_used: ["david-ogilvy", "gary-bencivenga"]
    tasks_extended: ["create-landing-page"]

  design_squad:
    agent_target: "premium-design"
    command_target: "*generate"
    schema_reference: "squads/design/templates/premium-lp-content-schema.yaml"
    tokens_reference: "squads/design/templates/premium-lp-tokens.yaml"
    template_reference: "squads/design/templates/premium-lp-template.html"

  copy_chief:
    new_command: "*premium-lp"
    routing: "Direct to create-premium-lp-copy task"
```

---

*Task Version: 1.0.0*
*Created: 2026-02-15*
*Output Schema: premium-lp-content-schema.yaml v1.0*
*Handoff Target: @premium-design *generate*


---

## Referência: references/create-sales-page.md

# Create Sales Page Task

## Purpose
Criar uma página de vendas de alta conversão, guiando o usuário através de briefing estruturado e recomendando o copywriter ideal para o projeto.

## Inputs

```yaml
required:
  - product_name: Nome do produto/serviço
  - product_description: O que é e o que faz
  - target_avatar: Quem é o cliente ideal
  - main_problem: Problema principal que resolve
  - price: Preço do produto

optional:
  - testimonials: Depoimentos disponíveis
  - guarantee: Tipo de garantia oferecida
  - bonuses: Bônus inclusos
  - deadline: Se há urgência/escassez
  - tone: Tom desejado (agressivo, elegante, casual)
  - copywriter_preference: Copywriter específico desejado
```

## Workflow

### Step 1: Briefing Elicitation
```
Perguntas obrigatórias:
1. Qual o nome do produto?
2. O que exatamente ele faz/entrega?
3. Quem é o cliente ideal? (idade, profissão, situação)
4. Qual o problema #1 que ele resolve?
5. Qual o preço?
6. Tem depoimentos disponíveis?
7. Qual a garantia?
8. Há bônus ou urgência?
```

### Step 2: Copywriter Recommendation
```
Baseado no briefing, recomendar copywriter:

- Produto premium/sofisticado → David Ogilvy
- História forte do produto → Gary Halbert ou Joe Sugarman
- Mercado saturado/sofisticado → Eugene Schwartz
- Precisa de urgência/deadline → Dan Kennedy
- Curso online/digital → Frank Kern
- Precisa de testes A/B → Claude Hopkins
- Muito conteúdo/bullets → Gary Bencivenga
```

### Step 3: Structure Selection
```
Oferecer estruturas:

A. Long-Form Sales Letter (Halbert style)
   - Carta pessoal, storytelling, 3000+ palavras

B. VSL Script (Frank Kern style)
   - Para vídeo de vendas, conversacional

C. Modern Landing (Ogilvy style)
   - Elegante, focado em branding + conversão

D. Urgency Page (Kennedy style)
   - Deadline, escassez, ação imediata
```

### Step 4: Generate Sales Page

#### Structure Template
```markdown
# [HEADLINE - Promessa principal]

## [SUBHEADLINE - Especifica ou qualifica]

[LEAD - 2-3 parágrafos que prendem]

---

## O Problema
[Agite a dor do avatar]

## A Solução
[Apresente o produto como herói]

## Como Funciona
[Explique o mecanismo/processo]

## O Que Você Recebe
[Lista de benefícios/componentes]

## Prova Social
[Depoimentos, resultados, números]

## A Oferta
[Stack de valor + preço]

## Garantia
[Remova o risco]

## CTA
[Chamada para ação clara]

## FAQ
[Objeções comuns respondidas]

## CTA Final
[Última chamada]
```

### Step 5: Variations
```
Gerar alternativas:
- 3 headlines diferentes
- 2 leads diferentes
- 2 CTAs diferentes
```

### Step 6: Quality Check
```
Verificar contra checklist:
- [ ] Headline clara e específica
- [ ] Problema bem articulado
- [ ] Benefícios > Features
- [ ] Prova social presente
- [ ] Garantia clara
- [ ] CTA impossível de perder
- [ ] Urgência (se aplicável)
```

## Output

```yaml
format: markdown
sections:
  - headline_variations (3)
  - complete_sales_page
  - lead_variations (2)
  - cta_variations (2)
  - copywriter_notes (dicas específicas do estilo usado)
```

## Copywriter Styles Reference

### Gary Halbert Style
- Abertura com história pessoal
- Tom direto e provocador
- "Caro amigo" opening
- Urgência natural

### David Ogilvy Style
- Elegante e factual
- Headlines com benefício específico
- Prova em números
- Tom sofisticado

### Eugene Schwartz Style
- Big idea central
- Adequado ao nível de consciência
- Conceito transformador
- Intensificação gradual

### Dan Kennedy Style
- Urgência desde o início
- Deadline inviolável
- Stack de valor explícito
- CTA agressivo

### Frank Kern Style
- Casual e autêntico
- Storytelling relatável
- Valor upfront
- Voz conversacional

---

*Task Version: 1.0*
