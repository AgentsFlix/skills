# copy-anuncios · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-anuncios.md` uma skill chamada copy-anuncios. Quando eu pedir algo como "anúncios para [oferta], [plataforma], [n] variações", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# PAROU PRA VER · Ad copy, roteiro, nativo, YouTube

O anúncio tem três segundos para parar o dedo. O agente escreve a copy de anúncio, o roteiro de vídeo curto, o nativo que não parece anúncio e o script para YouTube, sempre em variações para teste. Cada versão sai com o gancho, o corpo e a chamada separados, prontos para subir.

## When to Use

- O pedido envolve: anúncio, ad copy, criativo, roteiro de anúncio, nativo, YouTube ads.
- Diga: "anúncios para [oferta], [plataforma], [n] variações".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create ad copy | `references/create-ad-copy.md` |
| create ad script | `references/create-ad-script.md` |
| create native ads | `references/create-native-ads.md` |
| create youtube ads | `references/create-youtube-ads.md` |

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

- `references/create-ad-copy.md`
- `references/create-ad-script.md`
- `references/create-native-ads.md`
- `references/create-youtube-ads.md`


---

## Referência: references/create-ad-copy.md

# Create Ad Copy Task

## Purpose
Criar anúncios de alta conversão para Facebook, Instagram, Google, e outras plataformas.

## Inputs

```yaml
required:
  - platform: facebook | instagram | google | youtube | tiktok | linkedin
  - objective: awareness | traffic | leads | sales
  - product_name: Produto/serviço
  - target_audience: Público-alvo
  - hook: Gancho principal (ou pedir sugestões)

optional:
  - budget: Orçamento diário
  - existing_ads: Anúncios anteriores (para melhorar)
  - competitor_reference: Anúncios de concorrentes
  - tone: Tom desejado
  - copywriter_preference: Estilo preferido
```

## Platform Specifications

### Facebook/Instagram Feed
```yaml
primary_text: 125 chars (antes de "ver mais")
headline: 40 chars
description: 30 chars
image_ratio: 1:1 ou 4:5
```

### Facebook/Instagram Stories
```yaml
text_overlay: Mínimo possível
duration: 15 segundos
vertical: 9:16
cta_placement: Bottom
```

### Google Search
```yaml
headlines: 3x 30 chars cada
descriptions: 2x 90 chars cada
display_url: 15 chars path
```

### YouTube
```yaml
hook: 5 segundos (antes do skip)
script: 30-60 segundos
cta: Verbal + visual
```

### TikTok
```yaml
hook: 1-3 segundos
duration: 15-60 segundos
style: Nativo, não "ad"
trending_sounds: Considerar
```

### LinkedIn
```yaml
intro_text: 150 chars (antes de "ver mais")
headline: 70 chars
tone: Profissional mas humano
```

## Ad Frameworks

### PAS (Problem-Agitate-Solution)
```
[PROBLEMA] Você está lutando com X?
[AGITAÇÃO] E toda vez que tenta, Y acontece...
[SOLUÇÃO] Descobri um método que...
[CTA] Clique para saber mais
```

### AIDA (Attention-Interest-Desire-Action)
```
[ATENÇÃO] Hook visual/verbal
[INTERESSE] Benefício específico
[DESEJO] Prova/resultado
[AÇÃO] CTA claro
```

### BAB (Before-After-Bridge)
```
[ANTES] Sua situação atual
[DEPOIS] Onde você quer estar
[PONTE] Como nosso produto te leva lá
```

### 4Ps (Picture-Promise-Prove-Push)
```
[PICTURE] Pinte o cenário
[PROMISE] Faça a promessa
[PROVE] Mostre prova
[PUSH] Empurre para ação
```

## Copywriter Styles for Ads

### Claude Hopkins Style
- Headline com benefício específico
- Números e dados
- Oferta clara
- Testável A/B

### Dan Kennedy Style
- Urgência imediata
- Escassez real
- CTA agressivo
- Direct response puro

### David Ogilvy Style
- Elegante e factual
- Long-form quando apropriado
- Credibilidade primeiro
- Brand + response

### Frank Kern Style
- Casual e autêntico
- Storytelling curto
- "Cara, você precisa ver isso"
- Native feel

## Hook Formulas

### Curiosity Hooks
- "Ninguém te contou isso sobre [TÓPICO]"
- "O erro de R$X que você está cometendo"
- "Por que [CRENÇA COMUM] está errado"

### Result Hooks
- "[RESULTADO] em [TEMPO] - sem [OBJEÇÃO]"
- "Como [AVATAR] conseguiu [RESULTADO]"
- "De [ANTES] para [DEPOIS] em [TEMPO]"

### Question Hooks
- "Você comete esse erro com [TÓPICO]?"
- "Quer [RESULTADO] mesmo [OBJEÇÃO]?"
- "Sabe por que [PROBLEMA] acontece?"

### Story Hooks
- "Eu estava [SITUAÇÃO] quando..."
- "3 anos atrás eu [PROBLEMA]..."
- "Meu cliente [NOME] tinha [PROBLEMA]..."

## Output Format

```yaml
per_ad:
  - platform
  - hook (+ 2 variações)
  - primary_text
  - headline
  - description (se aplicável)
  - cta_button
  - image_direction (sugestão visual)
  - audience_suggestion
  - a_b_test_recommendation
```

## Deliverables

```
Para cada plataforma solicitada:
- 3 variações de hook
- Copy completo formatado
- Sugestões de imagem/vídeo
- Recomendações de segmentação
- Métricas para acompanhar
```

## Quality Checklist

- [ ] Hook prende em <3 segundos
- [ ] Benefício claro e específico
- [ ] Copy adequado ao platform (caracteres, tom)
- [ ] CTA impossível de ignorar
- [ ] Imagem e copy se complementam
- [ ] Segmentação alinhada com avatar
- [ ] Tracking configurável

---

*Task Version: 1.0*


---

## Referência: references/create-ad-script.md

# Create Ad Script Task

## Metadata

```yaml
task_id: create-ad-script
version: 2.0
framework: copy-framework-v2
category: video_advertising
complexity: advanced
estimated_time: 60-120min
requires_research: true

dependencies:
  research: docs/research/ad-script-methodology-research.md
  templates: templates/ad-script-templates/

theoretical_foundation:
  - Eugene Schwartz - Breakthrough Advertising (5 Awareness Levels)
  - Alex Hormozi - $100M GOATed Ads Playbook
  - UGC Best Practices 2025-2026
```

---

## Purpose

Create high-converting video ad scripts using the Hormozi GOATed Ads methodology: 50 hooks × 3-5 meats × 1-3 CTAs = 150-750 ad combinations for systematic testing at scale.

**Core Principle:**
> "Your job is not to create one perfect ad. Your job is to create a testing machine. Let the data tell you what works."

**Critical Insight:**
- 80% of ad performance is determined by the first 1-3 seconds
- Spend 80% of creative effort on the hook
- The rest is optimization

---

## Phase 1: Information Gathering

### 1.1 Required Inputs

```yaml
product_context:
  product_name:
    required: true
    description: "What you're advertising"

  product_type:
    required: true
    options:
      - physical_product
      - digital_product
      - saas_software
      - service
      - course_coaching
      - info_product
      - event
      - lead_magnet

  offer:
    required: true
    description: "The specific offer (price, bonuses, guarantee)"

  unique_mechanism:
    required: true
    description: "What makes this different from alternatives?"

audience_context:
  target_avatar:
    required: true
    description: "Who is the ideal customer? Be specific."

  main_transformation:
    required: true
    format: "Before state → After state"
    example: "Struggling freelancer → Booked 3 months out"

  primary_pain:
    required: true
    description: "The #1 problem this solves"

  primary_desire:
    required: true
    description: "What they really want"

campaign_context:
  platform:
    required: true
    options:
      - tiktok
      - youtube_instream
      - youtube_shorts
      - meta_feed
      - meta_reels
      - instagram_stories
      - linkedin

  ad_format:
    required: true
    options:
      - video_ugc
      - video_produced
      - talking_head
      - demo_product
      - testimonial
      - animation
      - static_to_video

  funnel_stage:
    required: true
    options:
      - cold_traffic
      - warm_retargeting
      - hot_retargeting
```

### 1.2 Optional Inputs

```yaml
performance_context:
  current_winning_ads:
    description: "Links to current best performers"

  winning_hooks:
    description: "Hooks that have worked before"

  budget_daily:
    description: "Daily ad spend"

proof_elements:
  testimonials:
    description: "Customer results available"

  case_studies:
    description: "Documented transformations"

  statistics:
    description: "Numbers, data, percentages"

  credentials:
    description: "Authority markers"

competitor_context:
  competitor_ads:
    description: "Links to competitor ads for inspiration"
```

---

## Phase 2: Awareness Level Assessment

### 2.1 Eugene Schwartz's 5 Levels

**Select the target awareness level for this campaign:**

```yaml
level_1_unaware:
  definition: "Don't know they have a problem"
  audience_size: "Largest"
  temperature: "Coldest"

  identification:
    - "Going about their day normally"
    - "Haven't identified the pain yet"
    - "May not admit the problem to themselves"

  approach:
    - Spark curiosity
    - Tell stories
    - Highlight what feels "off"
    - Don't sell directly

  hook_types:
    - Curiosity-driven
    - Story openings
    - Phenomena-based
    - Shocking statistics

  example_hooks:
    - "The hidden [thing] that's costing you [pain]"
    - "Why [counterintuitive statement]"
    - "[Number]% of [avatar] don't know this about [topic]"
    - "Something weird is happening with [topic]..."

level_2_problem_aware:
  definition: "Know the problem, not the solution"
  audience_size: "Large"
  temperature: "Cool"

  identification:
    - "They know they're struggling"
    - "Haven't figured out how to fix it"
    - "May be blaming themselves"

  approach:
    - Help them name the problem
    - Agitate the pain
    - Show you understand
    - Validate their frustration

  hook_types:
    - Pain-driven
    - Agitation
    - "You're not alone"

  example_hooks:
    - "Tired of [specific problem]?"
    - "If you're still [old way], you're [losing X]"
    - "Stop [wrong approach]. Here's why..."
    - "The real reason [problem] keeps happening"

level_3_solution_aware:
  definition: "Know solutions exist, not your product"
  audience_size: "Medium"
  temperature: "Warm"

  identification:
    - "They've tried things before"
    - "Maybe failed with alternatives"
    - "Looking for something different"

  approach:
    - Differentiate your solution
    - Show unique mechanism
    - Promise specific results
    - Address why other solutions fail

  hook_types:
    - Promise-driven
    - Differentiation
    - Unique mechanism reveal

  example_hooks:
    - "How to [achieve result] in [timeframe]"
    - "The fastest way to [desire] without [sacrifice]"
    - "[Result] in [time] - introducing [product]"
    - "Why [common solution] doesn't work and what to do instead"

level_4_product_aware:
  definition: "Know your product, not convinced"
  audience_size: "Smaller"
  temperature: "Hot"

  identification:
    - "They've seen your ads/content"
    - "Visited your site"
    - "Need more proof to convert"

  approach:
    - Stack proof elements
    - Show testimonials
    - Address specific objections
    - Build certainty

  hook_types:
    - Proof-driven
    - Testimonial-led
    - Objection handling

  example_hooks:
    - "Why [number] people chose [product] to [result]"
    - "See how [avatar] got [specific result]"
    - "[Customer name] went from [before] to [after]"
    - "Still on the fence about [product]? Watch this."

level_5_most_aware:
  definition: "Know you, just need the deal"
  audience_size: "Smallest"
  temperature: "Hottest"

  identification:
    - "Ready to buy"
    - "Waiting for the right moment"
    - "Previous customers or engaged leads"

  approach:
    - Lead with offer
    - Add urgency/scarcity
    - Remove friction
    - Make it easy

  hook_types:
    - Offer-driven
    - Urgency/scarcity
    - Deal announcements

  example_hooks:
    - "[Discount]% off [product] - [deadline]"
    - "Last chance: [bonus] expires [when]"
    - "New: [feature] now included with [product]"
    - "You asked for it—[offer] is finally here"
```

### 2.2 Awareness Selection Matrix

```yaml
campaign_type_to_awareness:
  cold_prospecting:
    primary: "Level 1-2 (Unaware, Problem-Aware)"
    why: "Building initial interest"

  lead_generation:
    primary: "Level 2-3 (Problem-Aware, Solution-Aware)"
    why: "Capturing interested prospects"

  retargeting_engaged:
    primary: "Level 3-4 (Solution-Aware, Product-Aware)"
    why: "They know you exist"

  retargeting_cart:
    primary: "Level 4-5 (Product-Aware, Most Aware)"
    why: "Close to purchase"

  customer_reactivation:
    primary: "Level 5 (Most Aware)"
    why: "They already trust you"
```

---

## Phase 3: Platform-Specific Script Structures

### 3.1 TikTok Ad Scripts

```yaml
platform_context:
  attention_span: "1.3-2 seconds"
  style: "Native, authentic, not 'ad-like'"
  aesthetic: "DIY > polished"
  sound: "Essential (audio-on platform)"
  optimal_length: "15-60 seconds (21-34s sweet spot)"

script_structure:
  0-3s:
    name: "HOOK"
    purpose: "Pattern interrupt, stop scroll"
    critical: true
    must_have:
      - Text overlay
      - Immediate attention grab
      - Native feel
      - Value signal

  3-15s:
    name: "PROBLEM/STORY"
    purpose: "Connect with pain or journey"
    approaches:
      - "I had this problem..."
      - "Everyone does this wrong..."
      - "Here's what nobody tells you..."
      - Relatable situation setup

  15-25s:
    name: "SOLUTION"
    purpose: "Reveal product/method"
    approaches:
      - Product demo
      - Before/after
      - Mechanism explanation
      - "Then I discovered..."

  25-30s:
    name: "CTA"
    purpose: "Drive action"
    native_ctas:
      - "Link in bio"
      - "Comment [word] for link"
      - "Follow for part 2"
      - "Save this for later"

tiktok_rules:
  - DON'T look like an ad
  - Use trending sounds when relevant
  - Feature real people (creators, employees, customers)
  - Lean into trends, memes, challenges
  - Use creator-style language ("no cap", "lowkey", "literally")
  - Authentic > Polished always
```

### 3.2 YouTube In-Stream Ad Scripts

```yaml
platform_context:
  skip_after: "5 seconds"
  critical_window: "0-5 seconds = everything"
  ideal_length: "30-60 seconds"
  viewer_intent: "Watching content, ad is interruption"
  effort_allocation: "Spend 80% of creative time on first 5 seconds"

script_structure:
  0-5s:
    name: "HOOK (Pre-Skip Window)"
    purpose: "MUST keep them watching"
    critical: true
    techniques:
      - Lead with end result
      - Make bold claim
      - Pattern interrupt
      - Direct address avatar
    warning: "If you lose here, nothing else matters"

  5-15s:
    name: "PROBLEM"
    purpose: "Connect with their pain"
    techniques:
      - Agitate the problem
      - Show you understand
      - Create emotional connection
      - "You've probably tried..."

  15-35s:
    name: "SOLUTION"
    purpose: "Present your offer/product"
    techniques:
      - Present unique mechanism
      - Explain how it's different
      - Stack benefits
      - "What if there was..."

  35-50s:
    name: "PROOF"
    purpose: "Build credibility"
    techniques:
      - Show real results
      - Use specific numbers
      - Include testimonials
      - Authority markers

  50-60s:
    name: "CTA"
    purpose: "Drive action"
    techniques:
      - Tell exactly what to do
      - Give reason to act NOW
      - Remove friction
      - Show what happens next

youtube_5_second_hook_patterns:
  bold_claim:
    template: "I'm going to show you how to [result] in [timeframe]."
    example: "I'm going to show you how to get 100 leads per day in 60 seconds."

  question:
    template: "What if you could [desired outcome] without [obstacle]?"
    example: "What if you could lose 20 pounds without giving up your favorite foods?"

  pattern_interrupt:
    description: "Start mid-action, unusual visual, unexpected statement"
    example: "*Person mid-sentence* ...and that's exactly why most ads fail."

  social_proof:
    template: "Over [X] people have already [result] with this..."
    example: "Over 50,000 entrepreneurs have tripled their income with this method."

  direct_address:
    template: "Hey [avatar], if you're struggling with [problem], watch this."
    example: "Hey business owner, if you can't find good employees, the next 60 seconds will change everything."
```

### 3.3 Meta (Facebook/Instagram) Video Scripts

```yaml
platform_context:
  autoplay: "Yes (often muted)"
  text_overlay: "Critical for silent viewing"
  attention_span: "Slightly longer than TikTok"
  sound: "Design for sound-off first"

feed_videos:
  optimal_length: "15-30 seconds"

  script_structure:
    0-3s:
      name: "HOOK"
      purpose: "Stop scroll"
      must_have:
        - Strong text overlay
        - Visual pattern interrupt
        - Works without sound

    3-15s:
      name: "VALUE"
      purpose: "Problem/solution"
      approaches:
        - Agitate problem
        - Present solution
        - Show transformation

    15-25s:
      name: "PROOF"
      purpose: "Build belief"
      elements:
        - Results
        - Testimonials
        - Data

    25-30s:
      name: "CTA"
      purpose: "Clear action"
      must_have:
        - Specific instruction
        - Visual CTA reinforcement

stories_reels:
  optimal_length: "15 seconds"
  format: "Vertical 9:16"

  script_structure:
    0-3s: "HOOK - Text + visual grab"
    3-12s: "CORE MESSAGE - Main value"
    12-15s: "CTA - Swipe up/action"

meta_specific_rules:
  - Design for sound-off first (captions essential)
  - Use text overlays on every key point
  - Front-load the message
  - Mobile-first framing (faces centered)
  - Test square (1:1) vs vertical (4:5) vs stories (9:16)
```

### 3.4 VSL (Video Sales Letter) Scripts

```yaml
context:
  length: "5-45+ minutes"
  purpose: "Full sales presentation in video format"
  conversion_lift: "Up to 3x vs text sales pages"
  best_for: "High-ticket, complex offers, webinar replays"

vsl_structure:
  attention:
    duration: "First 30-60 seconds"
    purpose: "Hook and big promise"
    elements:
      - Pattern interrupt
      - Big bold promise
      - Credibility hint
      - "Stay till the end" hook

  problem:
    duration: "2-5 minutes"
    purpose: "Agitate the pain deeply"
    elements:
      - Identify the problem specifically
      - Make it vivid and emotional
      - Show consequences of not solving
      - "You're not alone" validation

  solution:
    duration: "3-7 minutes"
    purpose: "Present unique mechanism"
    elements:
      - Introduce your concept/method
      - Explain why it's different
      - Build belief in the approach
      - Name the system/framework

  credibility:
    duration: "2-5 minutes"
    purpose: "Build trust"
    elements:
      - Your story (relatable)
      - Credentials and experience
      - Results you've achieved
      - Why you created this

  offer:
    duration: "3-5 minutes"
    purpose: "Present what they get"
    elements:
      - Core product/service
      - Bonuses (stack the value)
      - Price anchoring
      - Total value summary

  proof:
    duration: "3-7 minutes"
    purpose: "Overcome skepticism"
    elements:
      - Multiple testimonials
      - Case studies with specifics
      - Data and statistics
      - Before/after stories

  close:
    duration: "2-5 minutes"
    purpose: "Drive action NOW"
    elements:
      - Price reveal (with justification)
      - Guarantee (reverse risk)
      - Urgency/scarcity
      - Clear CTA instructions
      - Future pacing (life after purchase)
      - Final push
```

---

## Phase 4: Hook Writing Session (50 Hooks)

### 4.1 Hook Sources

```yaml
source_1_your_winners:
  what: "Previous winning ad hooks"
  action: "Analyze what worked, create 10 variations"
  questions:
    - "Which hook got highest CTR?"
    - "Which hook got best retention?"
    - "What pattern can you replicate?"

source_2_organic_content:
  what: "Your best-performing organic posts/videos"
  action: "Repurpose viral content openings into ad hooks"
  questions:
    - "Which post got most engagement?"
    - "What made people stop scrolling?"
    - "Can this opening work as an ad?"

source_3_competitor_ads:
  what: "Hooks from top competitors"
  action: "Swipe and adapt (don't copy word-for-word)"
  tools:
    - Meta Ad Library
    - TikTok Creative Center
    - Foreplay.co
    - AdSpy

source_4_cross_industry:
  what: "Hooks from different industries"
  action: "Apply successful patterns to your niche"
  why: "Best hooks often come from outside your category"
```

### 4.2 Hook Formula Templates by Awareness Level

```yaml
curiosity_hooks_level_1_2:
  template_1: "The hidden [thing] that's costing you [pain]"
  template_2: "Why [counterintuitive statement]"
  template_3: "[Number]% of [avatar] don't know this about [topic]"
  template_4: "Nobody's talking about this [topic] secret"
  template_5: "I discovered something weird about [topic]"
  template_6: "The [topic] mistake everyone makes"
  template_7: "What [successful group] knows that you don't"
  template_8: "Why [common practice] is actually hurting you"

pain_hooks_level_2:
  template_1: "Tired of [specific problem]?"
  template_2: "If you're still [old way], you're [losing X]"
  template_3: "Stop [wrong approach]. Here's why..."
  template_4: "The real reason [problem] keeps happening"
  template_5: "Are you [negative state] because of [problem]?"
  template_6: "[Problem] ruining your [area of life]?"
  template_7: "Struggling with [problem]? You're not alone"
  template_8: "Why [problem] won't go away (and what to do)"

promise_hooks_level_3:
  template_1: "How to [achieve result] in [timeframe]"
  template_2: "The fastest way to [desire] without [sacrifice]"
  template_3: "[Result] in [time] - here's how"
  template_4: "From [before] to [after] in [timeframe]"
  template_5: "The [number]-step system for [result]"
  template_6: "What if you could [result] starting today?"
  template_7: "The method that got me [specific result]"
  template_8: "Finally: a way to [result] that actually works"

proof_hooks_level_4:
  template_1: "Why [number] people chose [product]"
  template_2: "See how [avatar] got [specific result]"
  template_3: "[Customer] went from [before] to [after]"
  template_4: "[Number] [avatar]s can't be wrong"
  template_5: "The results speak for themselves..."
  template_6: "After [timeframe], [customer] achieved [result]"
  template_7: "Here's what happened when [customer] tried [product]"
  template_8: "Real results from real [avatar]s"

offer_hooks_level_5:
  template_1: "[Discount]% off [product] - [deadline]"
  template_2: "Last chance: [bonus] expires [when]"
  template_3: "New: [feature] now included"
  template_4: "Finally back in stock"
  template_5: "Limited time: [special offer]"
  template_6: "You asked, we listened: [offer]"
  template_7: "For the next [time], get [bonus]"
  template_8: "[Product] just got even better"
```

### 4.3 Hook Generation Worksheet

```yaml
generate_50_hooks:
  instructions: |
    Using the templates above and your inputs, generate:
    - 10 Curiosity Hooks (Levels 1-2)
    - 10 Pain Hooks (Level 2)
    - 12 Promise Hooks (Level 3)
    - 10 Proof Hooks (Level 4)
    - 8 Offer Hooks (Level 5)

  output_format:
    |
    ## CURIOSITY HOOKS (Level 1-2)
    1. [Hook]
    2. [Hook]
    ...

    ## PAIN HOOKS (Level 2)
    1. [Hook]
    2. [Hook]
    ...

    ## PROMISE HOOKS (Level 3)
    1. [Hook]
    2. [Hook]
    ...

    ## PROOF HOOKS (Level 4)
    1. [Hook]
    2. [Hook]
    ...

    ## OFFER HOOKS (Level 5)
    1. [Hook]
    2. [Hook]
    ...
```

---

## Phase 5: Ad Meat Selection (3-5 Formats)

### 5.1 Meat Format Options

```yaml
format_1_demonstration:
  description: "Show the product/service in action"
  types:
    - Product demo/unboxing
    - Before/after comparison
    - Live use or reaction
    - Screen recording (software)
    - High production hero ad

  best_for:
    - Physical products
    - Software/SaaS
    - Tangible results

  production_needs: "Medium-High"

format_2_testimonial:
  description: "Real customers sharing experiences"
  types:
    - Direct to camera testimonial
    - Podcast-style clip
    - Walk-n-talk rant
    - Parade of proof (multiple testimonials)
    - Raw iPhone style
    - Interview format

  best_for:
    - Services
    - Coaching/courses
    - B2B offerings

  production_needs: "Low-Medium"

format_3_education:
  description: "Teach something valuable"
  types:
    - Whiteboard explainer
    - How-to/tutorial
    - Listicle ("3 ways to...")
    - Myth-busting
    - Expert breakdown

  best_for:
    - Complex products
    - B2B
    - Premium offers
    - Thought leadership

  production_needs: "Medium"

format_4_story:
  description: "Narrative-driven content"
  types:
    - Origin story/founder journey
    - Customer transformation story
    - Problem-solution narrative
    - Documentary style
    - Day-in-the-life

  best_for:
    - Brand building
    - Emotional connection
    - Premium positioning

  production_needs: "Medium-High"

format_5_faceless:
  description: "No person on camera"
  types:
    - Screenshot compilations (comments/texts)
    - Text-only with music
    - Slideshow with voiceover
    - Animation/cartoon
    - Stock footage + VO

  best_for:
    - Privacy concerns
    - Quick production
    - Scale content creation
    - Testing volume

  production_needs: "Low"
```

### 5.2 Meat Selection by Product Type

```yaml
physical_products:
  primary: "Demonstration"
  secondary: "Testimonial"
  tertiary: "Faceless (screenshots/reviews)"

services_consulting:
  primary: "Testimonial"
  secondary: "Education"
  tertiary: "Story"

saas_software:
  primary: "Demonstration (screen recording)"
  secondary: "Education"
  tertiary: "Testimonial"

courses_coaching:
  primary: "Education"
  secondary: "Testimonial"
  tertiary: "Story (transformation)"

info_products:
  primary: "Education"
  secondary: "Story"
  tertiary: "Testimonial"

ecommerce_general:
  primary: "Demonstration"
  secondary: "Faceless"
  tertiary: "Testimonial (UGC)"
```

---

## Phase 6: CTA Variations (1-3 CTAs)

### 6.1 CTA Formula

```
What to do + How to do it + When + What they get + What happens next
```

### 6.2 CTA Types

```yaml
cta_1_direct:
  template: "Click the button below to get [offer]"
  when: "Clear path to conversion"
  tone: "Straightforward"
  example: "Click the link below to start your free trial"

cta_2_urgency:
  template: "Tap now before [deadline/scarcity]"
  when: "Limited time/quantity offers"
  tone: "Time-sensitive"
  example: "Grab yours before the 50% off sale ends tonight"

cta_3_benefit_focused:
  template: "Start your [transformation] today - link below"
  when: "Softer sell, value-focused"
  tone: "Aspirational"
  example: "Start building your dream body today - link in bio"

cta_4_curiosity:
  template: "See what happens next →"
  when: "Multi-step funnels, lead gen"
  tone: "Intriguing"
  example: "Find out if you qualify - take the quiz"

cta_5_social_native:
  template: "Comment [word] and I'll send you the link"
  when: "TikTok/Instagram engagement"
  tone: "Interactive"
  example: "Comment 'READY' and I'll DM you the free guide"
```

### 6.3 Show & Tell CTA Enhancement

```yaml
visual_cta_elements:
  - Demonstrate clicking the button on screen
  - Show what the landing page looks like
  - Walk through the sign-up process
  - Display the checkout page
  - Show the product arriving/in use

why: "Reduces friction by showing exactly what happens next"
```

---

## Phase 7: Ad Assembly Matrix

### 7.1 Combinatorial Math

```yaml
formula: "50 hooks × 3-5 meats × 1-3 CTAs = 150-750 ad combinations"

example_calculation:
  hooks: 50
  meats: 4
  ctas: 3
  total_combinations: "50 × 4 × 3 = 600 unique ads"

reality_check: |
  You don't test all 600 at once.
  Start with top 10-20 combinations based on hypothesis.
  Let data guide expansion.
```

### 7.2 Assembly Strategy

```yaml
testing_priority:
  wave_1:
    focus: "Hooks (80% of impact)"
    test: "5-10 hook variations with 1 meat and 1 CTA"
    budget: "20% of test budget"

  wave_2:
    focus: "Meats with winning hooks"
    test: "Top 3 hooks × 3-4 meat formats"
    budget: "40% of test budget"

  wave_3:
    focus: "CTAs with winning combinations"
    test: "Top 2-3 hook+meat combos × 2-3 CTAs"
    budget: "40% of test budget"

  scale:
    focus: "Scale proven winners"
    action: "Increase budget on winners, create variations"
```

### 7.3 Assembly Matrix Template

```yaml
matrix_example:
  |
  | Hook Type  | Demo | Testimonial | Education | Story | CTA Options |
  |------------|------|-------------|-----------|-------|-------------|
  | Curiosity  | ✓    | -           | ✓         | ✓     | All 3       |
  | Pain       | -    | ✓           | ✓         | -     | 1, 3        |
  | Promise    | ✓    | -           | ✓         | ✓     | All 3       |
  | Proof      | -    | ✓           | -         | -     | 1, 2        |
  | Offer      | ✓    | -           | -         | -     | 2           |

top_10_combinations_to_test:
  1: "[Curiosity Hook #1] + [Demo] + [Direct CTA]"
  2: "[Pain Hook #1] + [Testimonial] + [Benefit CTA]"
  3: "[Promise Hook #1] + [Education] + [Direct CTA]"
  4: "[Curiosity Hook #2] + [Story] + [Curiosity CTA]"
  5: "[Pain Hook #2] + [Education] + [Direct CTA]"
  # ... continue for 10
```

---

## Phase 8: Full Script Templates

### 8.1 E-commerce Product Script

```
[0-3s] HOOK
"Stop scrolling if you [problem/desire]"

[3-10s] PROBLEM
"I used to [struggle with X]... tried everything..."

[10-20s] SOLUTION + DEMO
"Then I found [product]. Watch this—"
*Show product solving the problem*
"It [unique mechanism] so you get [benefit]"

[20-25s] PROOF
"After [timeframe], [specific result]"
*Show before/after or product in use*

[25-30s] CTA
"Link in bio to grab yours before they sell out"
```

### 8.2 Course/Coaching Script

```
[0-3s] HOOK
"How I went from [before] to [after] in [time]"

[3-12s] STORY
"[X time] ago, I was [struggling]..."
"I tried [thing 1], [thing 2]—nothing worked"
"Then I discovered [insight]..."

[12-22s] METHOD
"The key was [framework/system name]"
"It works because [mechanism]"
"No [sacrifice] required"

[22-27s] PROOF
"Now I [result] and I've helped [number] others do the same"
*Show testimonial clip or results*

[27-30s] CTA
"Want to learn how? Link in bio for the free training"
```

### 8.3 SaaS/Software Script

```
[0-3s] HOOK
"What if [pain point] only took [small time/effort]?"

[3-15s] DEMO
*Screen recording showing product*
"Watch this—[demonstrate key feature]"
"Instead of [old way], you just [new way]"

[15-22s] BENEFITS
"That means you get:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]"

[22-27s] SOCIAL PROOF
"[Number] teams already use [product] to [result]"
*Show logos or testimonial*

[27-30s] CTA
"Try it free for 14 days—link below"
```

### 8.4 Service Business Script

```
[0-3s] HOOK
"[Avatar], still dealing with [problem]?"

[3-10s] AGITATE
"You've tried [solution 1], [solution 2]... nothing works"
"Meanwhile, [consequence getting worse]"

[10-18s] DIFFERENTIATE
"Here's why: [insight about why solutions fail]"
"We do it differently by [mechanism]"

[18-25s] PROOF
"[Client name] was stuck at [before].
After working with us, [after]"
*Show testimonial or results*

[25-30s] CTA
"Book a free call—link in bio"
```

### 8.5 UGC-Style Native Script

```
[0-3s] HOOK (native feel)
"Okay so nobody's talking about this but..."
OR "I have to tell you about this [product]"

[3-12s] STORY
"I was struggling with [problem]"
"I tried like everything—nothing worked"
"Then my [friend/influencer/ad] told me about [product]"

[12-22s] EXPERIENCE
"So I tried it and honestly?"
"[Specific result] in [timeframe]"
*Show product/results naturally*

[22-27s] RECOMMENDATION
"If you're dealing with [problem], you NEED to try this"
"Seriously, game changer"

[27-30s] SOFT CTA
"I'll link it below if you want to check it out"
```

---

## Phase 9: Output Deliverables

### 9.1 Output Format per Ad

```yaml
ad_deliverable:
  ad_name: "[Descriptive name]"
  platform: "[Platform]"
  duration: "[X seconds]"
  awareness_level: "[Level 1-5]"

  hook:
    text: "[Full hook text]"
    category: "[Curiosity/Pain/Promise/Proof/Offer]"
    text_overlay: "[If applicable]"

  meat:
    format: "[Demo/Testimonial/Education/Story/Faceless]"
    script: |
      [Full body script with timestamps]

  cta:
    type: "[Direct/Urgency/Benefit/Curiosity]"
    text: "[Full CTA text]"
    visual: "[Description of visual CTA]"

  full_script: |
    [0-Xs] HOOK
    "[Hook text]"

    [Xs-Xs] BODY
    "[Body text with timestamps]"

    [Xs-Xs] CTA
    "[CTA text]"

  production_notes:
    - "[Note 1]"
    - "[Note 2]"

  testing_priority: "[1-10]"
```

### 9.2 Complete Deliverable Package

```yaml
package_contents:
  summary:
    product: "[Product name]"
    platform: "[Platform]"
    awareness_target: "[Level]"
    hooks_generated: 50
    meats_selected: "[3-5]"
    ctas_created: "[1-3]"
    total_combinations: "[Number]"

  hook_library:
    curiosity: "[10 hooks]"
    pain: "[10 hooks]"
    promise: "[12 hooks]"
    proof: "[10 hooks]"
    offer: "[8 hooks]"

  meat_scripts:
    format_1: "[Full script]"
    format_2: "[Full script]"
    format_3: "[Full script]"

  cta_variations:
    cta_1: "[Script]"
    cta_2: "[Script]"
    cta_3: "[Script]"

  full_ads:
    ad_1: "[Complete ad deliverable]"
    ad_2: "[Complete ad deliverable]"
    ad_3: "[Complete ad deliverable]"
    # ... up to 5-10 priority ads

  assembly_matrix: "[Matrix showing all combinations]"

  testing_roadmap:
    week_1: "Test hooks (5-10 variations)"
    week_2: "Test meats with top 3 hooks"
    week_3: "Test CTAs with top combos"
    week_4: "Scale winners"
```

---

## Phase 10: Ad Metrics & Quality Gates

### 10.1 Performance Targets

```yaml
early_indicators_day_1_3:
  hook_hold_rate:
    good: ">50% watching past 3 seconds"
    red_flag: "<30%"

  thumb_stop_rate:
    good: ">30%"
    red_flag: "<15%"

  video_3s_views:
    good: ">30%"
    red_flag: "<15%"

engagement_metrics:
  ctr:
    good: ">1%"
    excellent: ">2%"
    red_flag: "<0.5%"

  link_ctr:
    good: ">0.8%"
    red_flag: "<0.5%"

cost_metrics:
  cpm:
    benchmark: "<$30"
    red_flag: ">$50"
    note: "Industry dependent"
```

### 10.2 Scaling Rules

```yaml
scale_when:
  - "ROAS >3x for 7 days straight"
  - "CPA stable for 500+ conversions"
  - "Frequency <3 after 14 days"
  - "CTR maintains >1%"

how_to_scale:
  gradual: "20% budget increase every 48h"
  horizontal: "New ad sets with same creative, different audience"
  creative_refresh: "New hooks with winning meat/CTA"

dont_scale_when:
  - "ROAS declining 3+ days"
  - "CPA increasing week over week"
  - "Frequency >3"
  - "CTR dropping below 0.8%"
```

### 10.3 Quality Checklist

```yaml
pre_launch:
  hook:
    - [ ] Stops scroll in <3 seconds
    - [ ] Matches awareness level
    - [ ] Platform-native feel
    - [ ] Clear value signal

  body:
    - [ ] Addresses pain/desire
    - [ ] Shows unique mechanism
    - [ ] Includes proof element
    - [ ] Maintains attention

  cta:
    - [ ] Clear action instruction
    - [ ] Reason to act now
    - [ ] Friction removed
    - [ ] Platform-appropriate

  production:
    - [ ] Audio quality acceptable
    - [ ] Text overlays readable
    - [ ] Platform specs met
    - [ ] Mobile-optimized
```

---

## Appendix: Quick Reference

### A.1 Awareness Level Quick Match

```yaml
cold_traffic: "Level 1-2 (Curiosity/Pain hooks)"
warm_traffic: "Level 2-3 (Pain/Promise hooks)"
hot_traffic: "Level 3-4 (Promise/Proof hooks)"
retargeting: "Level 4-5 (Proof/Offer hooks)"
```

### A.2 Platform Length Guide

```yaml
tiktok: "15-60s (21-34s optimal)"
youtube_instream: "30-60s"
youtube_shorts: "15-60s"
meta_feed: "15-30s"
meta_reels: "15-30s"
stories: "15s"
vsl: "5-45+ minutes"
```

### A.3 Hook Priority by Platform

```yaml
tiktok: "1-3 seconds to hook"
youtube: "5 seconds (pre-skip)"
meta: "3 seconds (silent hook)"
linkedin: "3-5 seconds"
```

---

## Version History

```yaml
version: 2.0
date: 2026-01-23
author: Ralph Autonomous Agent
project: Copy Framework v2.0 Upgrade
story: US-034

changes:
  - Complete rewrite following Framework v2.0 standards
  - Added comprehensive Schwartz awareness framework
  - Expanded Hook-Body-CTA structure
  - Added platform-specific script templates
  - Added Hormozi combinatorial testing methodology
  - Added full script templates for all use cases
  - Added quality gates and metrics targets
  - Research foundation: 670+ lines

line_count: 1100+
quality_gates:
  - [x] 600+ lines ✓
  - [x] Research foundation referenced ✓
  - [x] Platform-specific guidance ✓
  - [x] Multiple frameworks included ✓
  - [x] Quality checklist included ✓
  - [x] Actionable output format ✓
```

---

*Task Version: 2.0*
*Copy Framework v2.0 Upgrade*
*Research: docs/research/ad-script-methodology-research.md*


---

## Referência: references/create-native-ads.md

# Create Native Ads Task

## Purpose

Criar anúncios nativos e advertorials que se integram ao conteúdo editorial, parecem artigos genuínos e convertem através de curiosidade e valor. Este task integra metodologias do IAB Native Advertising Playbook, especialistas como David Ogilvy e Gary Bencivenga, e best practices de plataformas como Taboola e Outbrain.

## Research Foundation

Este task é baseado em pesquisa documentada em:
`docs/research/native-ads-methodology-research.md`

**Metodologias Integradas:**
- IAB Native Advertising Playbook 2.0
- David Ogilvy Headline Principles
- Gary Bencivenga Fascinations
- Tabloid Headline Techniques
- Copyblogger Advertorial Framework

---

## When to Use

```yaml
Primary Use Cases:
  - Content discovery platforms (Taboola, Outbrain, MGID, RevContent)
  - Anúncios em portais de notícias
  - Advertorials e pre-sell pages
  - Conteúdo patrocinado
  - Native social ads (Facebook, Instagram, LinkedIn)
  - In-feed advertising
  - Recommendation widgets

Ad Objectives:
  - Content promotion
  - Lead generation
  - Direct response
  - Brand awareness
  - Pre-sell antes de sales page
  - Traffic para funil
```

---

## Inputs

```yaml
required:
  product_or_service:
    description: "Nome e descrição do produto/serviço"
    example: "Suplemento natural para sono - Dormir+Pro"

  target_avatar:
    description: "Descrição detalhada do leitor ideal"
    example: "Mulheres 35-55, executivas, problemas de insônia"

  main_benefit:
    description: "Benefício principal a comunicar"
    example: "Dormir 8 horas seguidas naturalmente"

  ad_platform:
    description: "Plataforma de native ads"
    options:
      - taboola
      - outbrain
      - mgid
      - revcontent
      - facebook_native
      - linkedin_native
      - direct_publisher

  landing_type:
    description: "Tipo de landing page destino"
    options:
      - advertorial_short    # 500-800 palavras
      - advertorial_medium   # 800-1500 palavras
      - advertorial_long     # 1500-3000 palavras
      - sales_page           # Direct to offer
      - lead_capture         # Optin first
      - quiz_funnel          # Personalized path

optional:
  angle:
    description: "Ângulo da história"
    options:
      - discovery            # Nova descoberta
      - warning              # Alerta/perigo
      - scientific           # Baseado em pesquisa
      - personal_story       # História pessoal
      - contrarian           # Contra a maioria
      - local                # Relevância geográfica
      - celebrity_authority  # Endorsement

  news_peg:
    description: "Gancho de notícia atual"
    example: "Novo estudo publicado, mudança de regulação"

  controversy_element:
    description: "Elemento controverso se aplicável"
    example: "Por que médicos não recomendam isso"

  social_proof:
    description: "Provas sociais disponíveis"
    example: "10.000 clientes, estudo clínico, depoimentos"

  copywriter_style:
    description: "Estilo de copywriter preferido"
    options:
      - david_ogilvy         # Editorial elegante
      - gary_halbert         # Story-driven
      - gary_bencivenga      # Curiosity/fascinations
      - dan_kennedy          # Direct response agressivo
      - joe_sugarman         # Demonstração
```

---

## Workflow

### Phase 1: Strategic Foundation

#### Step 1.1: Platform Selection

```yaml
PLATFORM SELECTION MATRIX:

┌─────────────────┬──────────────────────────────────────────────────┐
│ Objetivo        │ Plataforma Recomendada                           │
├─────────────────┼──────────────────────────────────────────────────┤
│ PREMIUM BRANDS  │ Outbrain                                         │
│                 │ → Publishers de alta qualidade (CNN, Time)       │
│                 │ → CPC mais alto, audiência premium               │
├─────────────────┼──────────────────────────────────────────────────┤
│ SCALE/VOLUME    │ Taboola                                          │
│                 │ → Maior reach (500M+ daily users)                │
│                 │ → Boa variedade de publishers                    │
├─────────────────┼──────────────────────────────────────────────────┤
│ BUDGET-FRIENDLY │ MGID                                             │
│                 │ → CPCs mais baixos                               │
│                 │ → Bom para testing                               │
├─────────────────┼──────────────────────────────────────────────────┤
│ QUALITY FOCUS   │ RevContent                                       │
│                 │ → Network seletivo                               │
│                 │ → Performance marketers                          │
├─────────────────┼──────────────────────────────────────────────────┤
│ B2B/PROFESS.    │ LinkedIn Native                                  │
│                 │ → Audiência profissional                         │
│                 │ → Targeting por cargo/indústria                  │
└─────────────────┴──────────────────────────────────────────────────┘

BUDGET GUIDELINES:
  Testing Phase: $50-100/day
  Optimization: $100-300/day
  Scale: $500+/day

CPC EXPECTATIONS:
  Taboola: $0.30-0.80
  Outbrain: $0.40-1.20
  MGID: $0.10-0.50
  RevContent: $0.25-0.70
```

#### Step 1.2: Angle Selection

```yaml
ANGLE SELECTION FRAMEWORK:

DISCOVERY ANGLE:
  ┌──────────────────────────────────────────────────┐
  │ Theme: "Nova descoberta/solução revelada"        │
  │ Emotion: Curiosidade, esperança                  │
  │ Headlines: Descobriu, Revela, Novo método        │
  │ Best For: Maioria dos produtos                   │
  │                                                  │
  │ Example:                                         │
  │ "Dentista de São Paulo Descobre Método Que      │
  │  Clareia Dentes em Casa Sem Produtos Químicos"  │
  └──────────────────────────────────────────────────┘

WARNING ANGLE:
  ┌──────────────────────────────────────────────────┐
  │ Theme: "Perigo oculto/alerta importante"         │
  │ Emotion: Medo, proteção                          │
  │ Headlines: Cuidado, Alerta, O que acontece       │
  │ Best For: Health, financial, security            │
  │                                                  │
  │ Example:                                         │
  │ "Alerta: O Que Acontece Quando Você Toma        │
  │  [Suplemento Comum] Todo Dia"                   │
  └──────────────────────────────────────────────────┘

SCIENTIFIC ANGLE:
  ┌──────────────────────────────────────────────────┐
  │ Theme: "Pesquisa/estudo comprova"                │
  │ Emotion: Confiança, autoridade                   │
  │ Headlines: Estudo revela, Cientistas, Pesquisa   │
  │ Best For: Health, education, tech                │
  │                                                  │
  │ Example:                                         │
  │ "Novo Estudo Revela Por Que 73% das Dietas      │
  │  Falham (E a Solução Surpreendente)"            │
  └──────────────────────────────────────────────────┘

PERSONAL STORY ANGLE:
  ┌──────────────────────────────────────────────────┐
  │ Theme: "Jornada de pessoa real"                  │
  │ Emotion: Identificação, esperança                │
  │ Headlines: Como [pessoa], Minha história         │
  │ Best For: Transformações, info products          │
  │                                                  │
  │ Example:                                         │
  │ "Mãe de 3 Filhos Perde 15kg em 60 Dias Sem      │
  │  Academia — Veja o Método Que Ela Usou"         │
  └──────────────────────────────────────────────────┘

CONTRARIAN ANGLE:
  ┌──────────────────────────────────────────────────┐
  │ Theme: "Contra a sabedoria convencional"         │
  │ Emotion: Curiosidade, validação                  │
  │ Headlines: Por que [maioria] está errada         │
  │ Best For: Produtos diferenciados                 │
  │                                                  │
  │ Example:                                         │
  │ "Por Que Dermatologistas Não Querem Que         │
  │  Você Saiba Sobre Este Tratamento Caseiro"      │
  └──────────────────────────────────────────────────┘

LOCAL ANGLE:
  ┌──────────────────────────────────────────────────┐
  │ Theme: "Acontecendo perto de você"               │
  │ Emotion: Relevância, pertencimento               │
  │ Headlines: [Cidade], Brasileiros                 │
  │ Best For: Geo-targeted campaigns                 │
  │                                                  │
  │ Example:                                         │
  │ "São Paulo: Novo Método de Investimento         │
  │  Viraliza Entre Executivos da Faria Lima"       │
  └──────────────────────────────────────────────────┘
```

### Phase 2: Native Ad Creative

#### Step 2.1: Thumbnail Image Strategy

```yaml
THUMBNAIL BEST PRACTICES:

HIGH-PERFORMING IMAGE TYPES:

1. FACES (30-50% CTR boost):
   ┌──────────────────────────────────────────────┐
   │ ✓ Expressão de surpresa ou curiosidade       │
   │ ✓ Olhar direto para câmera                   │
   │ ✓ "Pessoa real" (não modelo perfeito)        │
   │ ✓ Close-up do rosto                          │
   │ ✓ Emoção autêntica                           │
   │                                              │
   │ ✗ Stock photos genéricos                     │
   │ ✗ Modelos muito polidos                      │
   │ ✗ Grupos grandes (foco difuso)               │
   └──────────────────────────────────────────────┘

2. CURIOSITY OBJECTS:
   ┌──────────────────────────────────────────────┐
   │ ✓ "O que é isso?"                            │
   │ ✓ Close-up misterioso                        │
   │ ✓ Contexto incompleto                        │
   │ ✓ Objeto incomum ou inesperado               │
   │                                              │
   │ Example: Close-up de ingrediente estranho    │
   └──────────────────────────────────────────────┘

3. BEFORE/AFTER (compliance required):
   ┌──────────────────────────────────────────────┐
   │ ✓ Transformação verdadeira e documentada     │
   │ ✓ Não exagerar diferença                     │
   │ ✓ Mesma pessoa, mesmas condições             │
   │ ✓ Disclaimer visível se necessário           │
   │                                              │
   │ ⚠️ Cuidado com health claims                 │
   └──────────────────────────────────────────────┘

4. NEWS-STYLE:
   ┌──────────────────────────────────────────────┐
   │ ✓ Parece screenshot de notícia               │
   │ ✓ Estilo jornalístico                        │
   │ ✓ Autoridade ou expert                       │
   │ ✓ Contexto de reportagem                     │
   └──────────────────────────────────────────────┘

5. PRODUCT IN USE:
   ┌──────────────────────────────────────────────┐
   │ ✓ Demonstração natural                       │
   │ ✓ Contexto de uso real                       │
   │ ✓ Não parece ad de produto                   │
   │ ✓ Pessoa usando (não só produto)             │
   └──────────────────────────────────────────────┘

IMAGES TO AVOID:
  ❌ Stock photos óbvios
  ❌ Muito produzido/profissional
  ❌ Texto excessivo na imagem
  ❌ Logos grandes
  ❌ Call-to-action visual
  ❌ Clickbait enganoso
  ❌ Celebridades sem permissão

TECHNICAL SPECS:
  Taboola: 1200x628 ou 1200x800
  Outbrain: 1200x628 (16:9 ratio)
  MGID: 492x328 minimum
  Facebook: 1200x628
```

#### Step 2.2: Headline Copywriting

```yaml
HEADLINE FRAMEWORKS (David Ogilvy + Tabloid):

OGILVY PRINCIPLES:
  "80% das pessoas leem apenas o headline.
   O headline É sua campanha."

  1. Include benefit (o que o reader ganha)
  2. Use "New" or "Free" (ou equivalentes)
  3. Name your prospect (qualificação)
  4. Add curiosity (informação incompleta)
  5. Local angle when possible (+10-30% CTR)

─────────────────────────────────────────────────────────
HEADLINE FORMULA 1: DISCOVERY
─────────────────────────────────────────────────────────
Pattern:
"[Local/Profissão] Descobre [Solução] Que [Resultado]"

Examples:
• "Médico de Curitiba Descobre Método Que Elimina
   Dores nas Costas em 5 Minutos"
• "Engenheiro Brasileiro Cria App Que Paga
   Para Você Caminhar"
• "Nutricionista Revela Alimento Que Acelera
   Metabolismo 3x Mais"

─────────────────────────────────────────────────────────
HEADLINE FORMULA 2: CONTRARIAN/EXPOSÉ
─────────────────────────────────────────────────────────
Pattern:
"Por Que [Autoridade] [Ação Controversa] [Tema]"

Examples:
• "Por Que Dermatologistas Não Querem Que Você
   Saiba Sobre Este Tratamento"
• "O Que Bancos Não Contam Sobre Seu Dinheiro
   Parado na Poupança"
• "Por Que Médicos Estão Prescrevendo Isso
   Ao Invés de Remédios"

─────────────────────────────────────────────────────────
HEADLINE FORMULA 3: PERSONAL STORY
─────────────────────────────────────────────────────────
Pattern:
"[Pessoa Comum] [Situação Surpreendente] — [Resultado]"

Examples:
• "Aposentado de 67 Anos Fatura R$12k/mês
   Trabalhando de Casa — Veja Como"
• "Professora Emagrece 22kg Sem Dieta Depois
   de Descobrir Isso"
• "Mãe Solteira Sai do Vermelho e Compra
   Apartamento em 18 Meses"

─────────────────────────────────────────────────────────
HEADLINE FORMULA 4: WEIRD TRICK
─────────────────────────────────────────────────────────
Pattern:
"[Resultado] Com [Método Incomum/Truque]"

Examples:
• "Elimine Rugas Com Este Truque de 2 Minutos
   Que Não Requer Botox"
• "Aprenda Inglês Com Método 'Estranho' Que
   Brasileiros Estão Usando"
• "Emagreça Comendo Mais Com Esta Técnica
   Contra-Intuitiva"

─────────────────────────────────────────────────────────
HEADLINE FORMULA 5: SCIENTIFIC
─────────────────────────────────────────────────────────
Pattern:
"Novo Estudo Revela [Descoberta] Sobre [Área]"

Examples:
• "Novo Estudo Revela Por Que Dietas Tradicionais
   Falham em 95% dos Casos"
• "Cientistas Descobrem Por Que Algumas Pessoas
   Nunca Engordam"
• "Pesquisa de Harvard Mostra o Segredo
   de Quem Vive 100+ Anos"

─────────────────────────────────────────────────────────
HEADLINE FORMULA 6: WARNING/ALERT
─────────────────────────────────────────────────────────
Pattern:
"[Aviso/Alerta] Sobre [Prática/Produto Comum]"

Examples:
• "Alerta: O Que Acontece Quando Você Toma
   Café Todo Dia em Jejum"
• "Cuidado: 7 em 10 Brasileiros Fazem Isso
   Errado Ao Escovar os Dentes"
• "Aviso Importante Para Quem Usa
   [Produto/Medicamento Comum]"

─────────────────────────────────────────────────────────
HEADLINE FORMULA 7: LOCAL NEWS
─────────────────────────────────────────────────────────
Pattern:
"[Cidade/Região]: [Notícia/Tendência]"

Examples:
• "São Paulo: Método de Emagrecimento Viraliza
   Entre Mulheres da Zona Sul"
• "Brasil: Governo Anuncia Novo Benefício
   Para Quem Tem Mais de 50 Anos"
• "Rio de Janeiro: App Paga Usuários Para
   Fazer Compras de Supermercado"
```

#### Step 2.3: Gary Bencivenga Fascinations

```yaml
BENCIVENGA FASCINATIONS FOR NATIVE ADS:

Definition:
"Bullets que criam curiosidade tão intensa que o leitor
 PRECISA descobrir a resposta"

─────────────────────────────────────────────────────────
FASCINATION 1: THE SPECIFIC NUMBER
─────────────────────────────────────────────────────────
Pattern: "Os [X] [coisas] que [ação/resultado]"

Examples:
• "Os 7 Alimentos Que Destroem Sua Tireoide
   (O #4 Vai Te Chocar)"
• "3 Palavras Que Fazem Qualquer Homem
   Se Apaixonar Por Você"
• "As 5 Causas Reais de Cabelo Branco
   (Não É Só Genética)"

Why It Works:
  - Números específicos são mais críveis
  - Implica lista organizada
  - Promise de completeness

─────────────────────────────────────────────────────────
FASCINATION 2: THE SECRET
─────────────────────────────────────────────────────────
Pattern: "O segredo que [autoridade] não conta"

Examples:
• "O Segredo Que Dermatologistas Usam
   Mas Não Contam Aos Pacientes"
• "A Técnica Secreta de Vendedores
   Que Faturam R$100k/mês"
• "O Segredo Dos Japoneses Para
   Nunca Ficarem Cansados"

Why It Works:
  - Implica informação privilegiada
  - Exclusividade
  - "Insider" knowledge

─────────────────────────────────────────────────────────
FASCINATION 3: THE MISTAKE
─────────────────────────────────────────────────────────
Pattern: "O erro #1 que [grupo] comete"

Examples:
• "O Erro #1 Que Investidores Iniciantes
   Cometem (E Como Evitar)"
• "Por Que 90% Das Dietas Falham
   (O Erro Que Quase Ninguém Percebe)"
• "O Erro Silencioso Que Destrói
   Relacionamentos Aos Poucos"

Why It Works:
  - Medo de estar errado
  - Auto-diagnóstico
  - Oportunidade de correção

─────────────────────────────────────────────────────────
FASCINATION 4: THE WARNING
─────────────────────────────────────────────────────────
Pattern: "O perigo oculto em [coisa comum]"

Examples:
• "O Perigo Oculto Na Sua Pasta de Dentes
   (E a Alternativa Segura)"
• "O Que Acontece Com Seu Corpo Quando
   Você Fica Sentado 8 Horas"
• "O Ingrediente Tóxico Escondido
   Em 90% Dos Suplementos"

Why It Works:
  - Triggera instinto de proteção
  - Curiosidade defensiva
  - Fear of missing danger
```

### Phase 3: Advertorial Structure

#### Step 3.1: Advertorial Anatomy

```yaml
ADVERTORIAL COMPLETE STRUCTURE:

┌─────────────────────────────────────────────────────────┐
│ 1. HEADER EDITORIAL                                     │
│    ┌─────────────────────────────────────────────────┐  │
│    │ [Logo/Nome do Site]                              │ │
│    │ Categoria: Saúde / Finanças / Lifestyle          │ │
│    │ ⚠️ "Conteúdo Patrocinado" (disclosure)           │ │
│    └─────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│ 2. HEADLINE                                             │
│    - Estilo jornalístico                               │
│    - Não parece ad                                     │
│    - Continua curiosity do native ad                   │
├─────────────────────────────────────────────────────────┤
│ 3. BYLINE                                              │
│    "Por [Nome] | [Data] | [X] min de leitura"          │
├─────────────────────────────────────────────────────────┤
│ 4. LEAD IMAGE                                          │
│    - Relacionada ao conteúdo                           │
│    - Estilo editorial                                  │
│    - Caption se relevante                              │
├─────────────────────────────────────────────────────────┤
│ 5. OPENING (Hook - 100-200 palavras)                   │
│    - Gancho que prende atenção                         │
│    - Estabelece relevância                             │
│    - Promete valor/revelação                           │
├─────────────────────────────────────────────────────────┤
│ 6. STORY/CONTEXT (200-400 palavras)                    │
│    - História do protagonista                          │
│    - Como o problema surgiu                            │
│    - Tentativas de solução que falharam                │
├─────────────────────────────────────────────────────────┤
│ 7. PROBLEM AGITATION (200-300 palavras)                │
│    - Aprofunda a dor                                   │
│    - Por que soluções comuns não funcionam             │
│    - Consequências de não agir                         │
├─────────────────────────────────────────────────────────┤
│ 8. SOLUTION (300-500 palavras)                         │
│    - Apresenta produto/método                          │
│    - Como funciona (mecanismo)                         │
│    - Por que é diferente                               │
├─────────────────────────────────────────────────────────┤
│ 9. PROOF (150-300 palavras)                            │
│    - Depoimentos                                       │
│    - Estudos/dados                                     │
│    - Resultados específicos                            │
├─────────────────────────────────────────────────────────┤
│ 10. SOFT CTA (50-100 palavras)                         │
│     - Transição natural                                │
│     - Link para próximo passo                          │
│     - Não hard-sell agressivo                          │
├─────────────────────────────────────────────────────────┤
│ 11. DISCLAIMER                                         │
│     - "Resultados podem variar"                        │
│     - Legal compliance                                 │
│     - Links para políticas                             │
└─────────────────────────────────────────────────────────┘
```

#### Step 3.2: Advertorial Templates

```markdown
═══════════════════════════════════════════════════════════════
TEMPLATE 1: DISCOVERY STORY ADVERTORIAL
═══════════════════════════════════════════════════════════════

[HEADER]
[Logo] | SAÚDE & BEM-ESTAR | Conteúdo Patrocinado

─────────────────────────────────────────────────────────────

# [Local]: [Profissão] Descobre [Solução] Que [Resultado] —
  E Agora Está Ajudando Milhares de Pessoas

*Por [Nome] | [Data] | 5 min de leitura*

[IMAGEM: Protagonista em contexto relevante]

**[Cidade]** — O que começou como uma busca pessoal por
[solução] acabou revelando algo que pode [benefício] para
milhões de brasileiros.

[Nome], [idade], [contexto profissional], nunca imaginou
que [descoberta] pudesse [resultado surpreendente].

"[Quote do protagonista sobre a descoberta]", conta
[ele/ela] em entrevista exclusiva.

## A Jornada Até a Descoberta

Tudo começou há [tempo] quando [Nome] enfrentava [problema].

"Eu tentei de tudo", lembra. "[Lista de soluções
convencionais que não funcionaram]. Nada trazia resultados
duradouros."

[2-3 parágrafos desenvolvendo a história, frustrações,
tentativas]

A situação se agravou quando [consequência do problema].

## O Ponto de Virada

Foi então que [Nome] [como encontrou a solução].

"No começo, eu estava cético", admite. "Mas decidi
[dar uma chance] porque [razão]."

O que aconteceu nas semanas seguintes [surpreendeu/
transformou] completamente [sua vida/situação].

## Por Que Funciona

Diferente de [soluções convencionais] que [problema com
elas], [produto/método] funciona porque [mecanismo único].

"[Explicação simples de como funciona]"

[Se aplicável: referência a estudos ou especialistas]

## Os Resultados

[Dados específicos, timeline de resultados]

- Nas primeiras [tempo]: [resultado 1]
- Depois de [tempo]: [resultado 2]
- Atualmente: [resultado atual]

"[Depoimento de outra pessoa que usou]" — [Nome, contexto]

"[Segundo depoimento]" — [Nome, contexto]

## Como Ter Acesso

Atualmente, [produto] está disponível [onde/como].

[Nome] decidiu compartilhar [o método/produto] porque
"[razão altruística]."

**[CTA suave]**: Para saber mais sobre [produto/método]
e como ele pode [benefício], clique no botão abaixo.

[BOTÃO: Quero Saber Mais]

---
*Este é um conteúdo publicitário. Resultados individuais
podem variar. Consulte um profissional antes de iniciar
qualquer tratamento.*

═══════════════════════════════════════════════════════════════
```

```markdown
═══════════════════════════════════════════════════════════════
TEMPLATE 2: EXPERT EXPOSÉ ADVERTORIAL
═══════════════════════════════════════════════════════════════

[HEADER]
[Logo] | INVESTIGAÇÃO | Conteúdo Patrocinado

─────────────────────────────────────────────────────────────

# Por Que [Autoridades/Indústria] Não Querem Que Você
  Saiba Sobre [Solução] — E O Que Fazer Agora

*Por [Nome] | [Data] | 7 min de leitura*

[IMAGEM: Estilo investigativo/jornalístico]

Se você já se perguntou por que [situação comum frustrante],
a resposta pode te surpreender — e incomodar algumas pessoas.

Segundo [fonte/especialista], "[revelação controversa]."

## O Que Não Te Contam

Durante décadas, [indústria/autoridades] promoveram
[abordagem convencional] como a única solução para [problema].

Mas um número crescente de [especialistas/pesquisadores]
está questionando essa narrativa.

"[Quote de expert questionando status quo]"

[2-3 parágrafos desenvolvendo a "conspiração" ou
informação oculta]

## Por Que Isso Importa Para Você

Se você é parte dos [X milhões] de brasileiros que
[sofrem com problema], essa informação pode mudar
sua perspectiva.

[Explicação de como o reader é afetado]

[Dados/estatísticas que suportam o argumento]

## A Alternativa Que Eles Não Querem Que Você Conheça

Enquanto [abordagem convencional] continua sendo
promovida, uma alternativa está ganhando atenção:

[Introdução do produto/método de forma editorial]

[Como funciona diferente das soluções convencionais]

[Porque representa uma "ameaça" ao establishment]

## O Que Pessoas Reais Estão Dizendo

"[Depoimento detalhado de usuário]"
— [Nome], [idade], [cidade]

"[Segundo depoimento]"
— [Nome], [contexto]

## Como Descobrir Se Funciona Para Você

[Produto/Método] está disponível para brasileiros
que querem [benefício] sem [desvantagens de alternativas].

**[CTA]**: Descubra o que [autoridades] não querem que
você saiba. Clique abaixo para acessar [oferta].

[BOTÃO: Quero Descobrir]

---
*Conteúdo patrocinado. As opiniões expressas são do autor.
Resultados podem variar.*

═══════════════════════════════════════════════════════════════
```

```markdown
═══════════════════════════════════════════════════════════════
TEMPLATE 3: PERSONAL CONFESSION ADVERTORIAL
═══════════════════════════════════════════════════════════════

[HEADER]
[Logo] | HISTÓRIA REAL | Conteúdo Patrocinado

─────────────────────────────────────────────────────────────

# "[Resultado Surpreendente]" — A História de [Nome] Que
  Está Inspirando Milhares de Brasileiros

*Depoimento de [Nome] | [Data] | 6 min de leitura*

[IMAGEM: Pessoa real, ambiente autêntico]

Eu preciso te contar uma coisa.

Por [tempo], eu [sofria/lutava] com [problema]. Tentei
de tudo que você pode imaginar:

- [Solução 1 que não funcionou]
- [Solução 2 que não funcionou]
- [Solução 3 que não funcionou]

Nada funcionava. E eu estava [consequência emocional].

## Meu Ponto Mais Baixo

[Descrição do momento difícil, vulnerável]

Eu lembro de [momento específico marcante] e pensar:
"[Pensamento desesperado]."

Foi quando [como chegou ao ponto de virada].

## A Descoberta Que Mudou Tudo

[Como encontrou a solução - deve parecer acidental/
orgânico, não como se estivesse comprando algo]

No começo, eu estava [emoção - cético, com medo, etc.].
Afinal, já tinha [tentado tantas coisas].

Mas algo me fez [dar uma chance]. Talvez [razão].

## O Que Aconteceu

[Timeline detalhada dos resultados]

**Primeira semana:** [Pequena mudança notada]

**Depois de um mês:** [Resultado mais significativo]

**Hoje, [tempo depois]:** [Transformação completa]

Eu olho para trás e não acredito que [situação anterior]
era minha realidade.

## Por Que Estou Compartilhando Isso

Eu sei que existem milhares de pessoas passando pelo
mesmo que eu passei.

Se você está [situação do avatar], eu quero que saiba
que [esperança + existe solução].

[Produto/Método] está disponível [como acessar].

Eu não estou dizendo que vai funcionar para todo mundo
da mesma forma. Cada pessoa é diferente.

Mas se você está [situação], pode valer a pena conhecer.

**[CTA]**: Clique abaixo para saber mais sobre [como acessar].

[BOTÃO: Quero Conhecer]

---
*Depoimento real. Resultados individuais podem variar.
[Produto] não substitui orientação médica/profissional.*

═══════════════════════════════════════════════════════════════
```

### Phase 4: Testing and Optimization

#### Step 4.1: A/B Testing Protocol

```yaml
NATIVE AD TESTING PROTOCOL:

PHASE 1: HEADLINE TESTING (Priority #1)
─────────────────────────────────────────
  Duration: 48-72 hours
  Budget: $50-100 per variation
  Sample: 1,000+ impressions each
  Metric: CTR

  Process:
  1. Create 5-10 headline variations
     - 2-3 Discovery headlines
     - 2-3 Warning/Curiosity headlines
     - 2-3 Personal Story headlines

  2. Launch all with same image
  3. Run for 48-72h
  4. Kill bottom 50% by CTR
  5. Continue top performers
  6. Declare winner when CTR difference >20%

PHASE 2: IMAGE TESTING (Priority #2)
─────────────────────────────────────────
  Duration: 48-72 hours
  Budget: $50-100 per variation
  Metric: CTR

  Process:
  1. Take winning headline
  2. Create 3-5 thumbnail variations
     - Face option
     - Curiosity object option
     - Before/after option (if applicable)
     - News-style option

  3. Test all images with winning headline
  4. Identify best performing image
  5. Create variations of winning type

PHASE 3: ANGLE TESTING
─────────────────────────────────────────
  Duration: 1 week
  Budget: $200-500 total
  Metric: CTR + Conversion Rate

  Process:
  1. Test different angles (discovery vs warning vs personal)
  2. Different emotional triggers
  3. Compare end-to-end performance

PHASE 4: LANDING PAGE TESTING
─────────────────────────────────────────
  Duration: 1-2 weeks
  Budget: Concentrated on winning ads
  Metrics: Time on page, scroll depth, conversion

  Variations to Test:
  - Short (500-800 words) vs Long (1500+ words)
  - Story-heavy vs Fact-heavy
  - Single CTA vs Multiple CTAs
  - Different headlines/angles

PHASE 5: SCALE
─────────────────────────────────────────
  1. Combine all winning elements
  2. Increase budget 20-30% at a time
  3. Monitor CPA stability
  4. Expand to new placements
  5. Refresh creatives every 2-4 weeks
```

#### Step 4.2: Performance Metrics

```yaml
KEY METRICS TO TRACK:

AD-LEVEL METRICS:
  CTR (Click-Through Rate):
    Formula: Clicks / Impressions × 100
    Benchmark: 0.3% average, 0.5%+ good, 1%+ great

  CPC (Cost Per Click):
    Varies by platform/geo
    Track trend over time

  Frequency:
    How often same user sees ad
    Cap at 3-5 to avoid fatigue

LANDING PAGE METRICS:
  Time on Page:
    Target: 2+ minutes for advertorial
    Below 30 seconds = problem

  Scroll Depth:
    Target: 50%+ reach CTA section
    Use heatmaps to visualize

  Bounce Rate:
    Target: 40-60% for cold traffic
    >80% = disconnect ad/LP

CONVERSION METRICS:
  Conversion Rate:
    Advertorial to next step: 5-15% (lead gen)
    Advertorial to sale: 1-5% (direct)

  CPA (Cost Per Acquisition):
    Should be <1/3 of product price
    Track and optimize aggressively

  ROAS (Return on Ad Spend):
    Target: 2x minimum, 3-5x healthy
```

### Phase 5: Quality Assurance

#### Step 5.1: Pre-Launch Checklist

```yaml
PRE-LAUNCH CHECKLIST:

NATIVE AD CREATIVE:
  [ ] Headline cria curiosidade genuína?
  [ ] Headline não é clickbait enganoso?
  [ ] Thumbnail é relevante ao conteúdo?
  [ ] Thumbnail não é stock photo óbvio?
  [ ] Brand name/logo presente (se required)?
  [ ] Texto não excede limites da plataforma?

ADVERTORIAL:
  [ ] Disclosure "Sponsored" visível no topo?
  [ ] Headline continua promessa do ad?
  [ ] Conteúdo entrega valor real?
  [ ] Transição para pitch é suave?
  [ ] CTA é claro mas não agressivo?
  [ ] Disclaimers necessários presentes?

COMPLIANCE:
  [ ] Claims são verificáveis?
  [ ] Não há promessas de resultados garantidos?
  [ ] Depoimentos são reais e documentados?
  [ ] Before/after tem base verdadeira?
  [ ] Não viola políticas da plataforma?
  [ ] Health claims têm base científica?
  [ ] Financial claims têm disclaimer?

TECHNICAL:
  [ ] Tracking pixels instalados?
  [ ] Links funcionando?
  [ ] Mobile responsive?
  [ ] Page speed adequada (<3 segundos)?
  [ ] UTM parameters corretos?

LEGAL:
  [ ] Política de privacidade acessível?
  [ ] Termos de uso claros?
  [ ] Opt-out disponível?
```

#### Step 5.2: Post-Launch Monitoring

```yaml
POST-LAUNCH MONITORING:

FIRST 24 HOURS:
  - Verificar aprovação dos ads
  - Monitorar impressões iniciais
  - Check for policy warnings
  - Verificar tracking funcionando

FIRST 48-72 HOURS:
  - Analisar CTR por variação
  - Identificar ads com baixo CTR (<0.2%)
  - Pausar underperformers
  - Alocar mais budget para winners

FIRST WEEK:
  - Analisar conversion metrics
  - Calcular CPA/ROAS
  - Ajustar bids se necessário
  - Identificar melhores placements

ONGOING:
  - Weekly performance review
  - Creative refresh a cada 2-4 semanas
  - Teste de novos angles
  - Expansion gradual de budget
  - Monitor ad fatigue (CTR dropping)
```

---

## Output Format

```yaml
deliverables:
  primary:
    - native_ad_set:
        includes:
          - 5-10 headline variations
          - 3-5 thumbnail directions
          - Platform-specific specs

    - advertorial:
        format: "Complete advertorial copy"
        length: "Per landing_type selected"
        includes:
          - Full copy with sections marked
          - Disclosure placement
          - CTA variations

  secondary:
    - angle_variations: "2-3 different approaches"
    - headline_bank: "10+ headlines to test"
    - thumbnail_briefs: "Image direction for designer"
    - testing_plan: "A/B testing protocol"

  supporting:
    - compliance_checklist: "Pre-launch verification"
    - metrics_targets: "Success benchmarks"
    - platform_specs: "Technical requirements"

output_structure:
  1_strategy_summary:
    - Platform selected and why
    - Angle selected and why
    - Target audience qualification

  2_native_ad_creatives:
    - Headline variations (10+)
    - Thumbnail direction briefs
    - Ad copy if needed

  3_advertorial_copy:
    - Full advertorial (per length selected)
    - All sections clearly marked
    - CTA variations

  4_testing_plan:
    - What to test first
    - Budget allocation
    - Success metrics

  5_compliance_checklist:
    - All items verified
    - Disclaimers included
    - Legal compliance confirmed
```

---

## Copywriter Recommendations

```yaml
COPYWRITER SELECTION BY CONTEXT:

┌────────────────────┬─────────────────┬─────────────────────────────┐
│ Contexto           │ Copywriter      │ Por Quê                     │
├────────────────────┼─────────────────┼─────────────────────────────┤
│ Editorial elegante │ David Ogilvy    │ Jornalístico, factual,      │
│ Premium brands     │                 │ credibilidade               │
├────────────────────┼─────────────────┼─────────────────────────────┤
│ Story-driven       │ Gary Halbert    │ Narrativa pessoal,          │
│ Personal journey   │                 │ conexão emocional           │
├────────────────────┼─────────────────┼─────────────────────────────┤
│ Headlines/Bullets  │ Gary Bencivenga │ Curiosity irresistível,     │
│ Curiosity hooks    │                 │ fascinations                │
├────────────────────┼─────────────────┼─────────────────────────────┤
│ Direct response    │ Dan Kennedy     │ Urgência, escassez,         │
│ Aggressive sell    │                 │ conversão direta            │
├────────────────────┼─────────────────┼─────────────────────────────┤
│ Product demos      │ Joe Sugarman    │ Explicação persuasiva,      │
│ Explanation-heavy  │                 │ demonstração                │
├────────────────────┼─────────────────┼─────────────────────────────┤
│ Competitive market │ Eugene Schwartz │ Diferenciação,              │
│ High sophistication│                 │ awareness levels            │
└────────────────────┴─────────────────┴─────────────────────────────┘

TIER RECOMMENDATION:
  - Awareness campaigns → Tier 0 (Schwartz) for strategy
  - Editorial advertorials → Tier 1 (Ogilvy, Halbert)
  - Curiosity headlines → Tier 2 (Bencivenga)
  - Direct response → Tier 1 (Kennedy)
```

---

## Benchmarks Reference

```yaml
NATIVE ADS BENCHMARKS 2025-2026:

CTR BENCHMARKS:
  Overall Average: 0.3%
  Good: 0.5-1.0%
  Great: >1.0%

  By Vertical:
    Health/Wellness: 0.4-0.8%
    Finance: 0.3-0.6%
    Education: 0.4-0.7%
    E-commerce: 0.3-0.5%
    B2B: 0.2-0.4%

CPC BENCHMARKS:
  Taboola: $0.30-0.80
  Outbrain: $0.40-1.20
  MGID: $0.10-0.50
  RevContent: $0.25-0.70

  By Geo:
    US: $0.50-1.50
    UK: $0.40-1.00
    Brazil: $0.10-0.40
    Europe: $0.30-0.80

LANDING PAGE BENCHMARKS:
  Time on Page: 2+ minutes (advertorial)
  Scroll Depth: 50%+
  Bounce Rate: 40-60%

CONVERSION BENCHMARKS:
  Lead Gen: 5-15%
  Direct Sale: 1-5%
  CPA Healthy: <1/3 product price
  ROAS Target: 3x+
```

---

## Quick Reference: Headline Bank

```yaml
DISCOVERY HEADLINES:
  - "[Local]: Novo [Produto] Viraliza Entre [Grupo]"
  - "[Profissão] Revela [Segredo] Que [Resultado]"
  - "Método de [Resultado] Descoberto Por [Pessoa Comum]"
  - "Brasileiros Descobrem [Solução] Que [Benefício]"

WARNING HEADLINES:
  - "O Que Acontece Quando Você [Ação Comum]"
  - "[Número] de Brasileiros Não Sabem Disso Sobre [Área]"
  - "Cuidado Com [Prática Comum]: [Consequência]"
  - "Alerta: [Produto/Hábito] Pode Estar [Consequência Negativa]"

PERSONAL STORY HEADLINES:
  - "Como [Resultado] Depois de [Situação Difícil]"
  - "[Pessoa]: '[Quote Surpreendente]'"
  - "De [Antes] Para [Depois] — A História de [Nome]"
  - "[Pessoa Comum] [Resultado Incrível] — Veja Como"

SCIENTIFIC HEADLINES:
  - "Estudo Revela [Descoberta] Sobre [Área]"
  - "Cientistas Descobrem Por Que [Fenômeno]"
  - "Nova Pesquisa Mostra [Insight Contraintuitivo]"
  - "Harvard/USP Confirma: [Descoberta]"
```

---

## Related Resources

- **Research Doc:** `docs/research/native-ads-methodology-research.md`
- **Landing Page Task:** `tasks/create-landing-page.md`
- **Sales Page Task:** `tasks/create-sales-page.md`
- **VSL Task:** `tasks/create-vsl.md`

---

*Task Version: 2.0*
*Lines: 1100+*
*Last Updated: 2026-01-23*
*Primary Frameworks: IAB Native Playbook, Ogilvy Headlines, Bencivenga Fascinations, Tabloid Techniques*
*Research Base: docs/research/native-ads-methodology-research.md*


---

## Referência: references/create-youtube-ads.md

# Create YouTube Ads Task

## Purpose

Criar scripts de anúncios para YouTube que capturam atenção antes do skip, mantêm engajamento e convertem espectadores em leads ou clientes. Este task integra metodologias dos principais especialistas mundiais: Google ABCD Framework, Tom Breeze (Viewability), Billy Gene Shaw, Aleric Heck (AdOutreach), e Jake Larsen (Video Power Marketing).

## Research Foundation

Este task é baseado em pesquisa documentada em:
`docs/research/youtube-ads-methodology-research.md`

**Metodologias Integradas:**
- Google ABCD Framework (Attention, Branding, Connection, Direction)
- Tom Breeze 5 A's (Attention, Authority, Audience, Action, Ascension)
- Billy Gene Shaw Million-Dollar Formula (Entertainment + Education + Offer)
- Aleric Heck Value-Ad Framework (Hook → Educate → CTA)
- Jake Larsen Video Ad Formula (Capture → Relationship → Action)

---

## When to Use

```yaml
Primary Use Cases:
  - YouTube In-Stream Ads (skippable e non-skippable)
  - YouTube Shorts Ads
  - YouTube Bumper Ads (6s)
  - YouTube Discovery Ads (In-Feed)
  - Demand Gen Campaigns
  - Pre-roll para conteúdo próprio
  - Retargeting via YouTube
  - Video Action Campaigns

Ad Objectives:
  - Brand Awareness
  - Consideration/Engagement
  - Lead Generation
  - Direct Sales
  - App Installs
  - Website Traffic
```

---

## Inputs

```yaml
required:
  product_or_service:
    description: "Nome e descrição do produto/serviço"
    example: "Curso de YouTube Ads para Empreendedores"

  target_avatar:
    description: "Descrição detalhada do espectador ideal"
    example: "Empreendedor digital 25-45 anos, gasta R$5k+/mês em ads"

  ad_format:
    description: "Formato de YouTube Ad"
    options:
      - skippable_in_stream    # TrueView, skip após 5s
      - non_skippable          # 15s máximo, não pode pular
      - bumper                 # 6s máximo, não pode pular
      - shorts                 # Vertical, até 60s
      - discovery              # Thumbnail + título, clique para ver
      - demand_gen             # Multi-format AI-optimized

  ad_objective:
    description: "Objetivo principal"
    options:
      - awareness              # Brand lift, reach
      - consideration          # Engagement, views
      - leads                  # Lead generation
      - sales                  # Direct conversion
      - traffic                # Website visits

  main_cta:
    description: "Ação desejada do viewer"
    example: "Baixar guia grátis, Agendar call, Comprar agora"

optional:
  ad_duration:
    description: "Duração desejada"
    options: [6s, 15s, 30s, 60s, 90s, 120s+]
    default: "60s para skippable, 15s para non-skippable"

  landing_page:
    description: "URL de destino"

  unique_mechanism:
    description: "O que torna sua solução única"

  social_proof:
    description: "Resultados, depoimentos, números"

  budget_context:
    description: "Contexto de budget"
    options: [testing, scaling, established]

  copywriter_style:
    description: "Estilo de copywriter preferido"
    default: "Hybrid (best practices de todos)"

  competitor_ads:
    description: "Links de ads de concorrentes para referência"

  existing_assets:
    description: "Vídeos, depoimentos, resultados existentes"
```

---

## Workflow

### Phase 1: Strategic Foundation

#### Step 1.1: Format Selection Matrix

```yaml
FORMAT SELECTION BY OBJECTIVE:

┌─────────────────┬─────────────────────────────────────────────────┐
│ Objetivo        │ Formato Recomendado                             │
├─────────────────┼─────────────────────────────────────────────────┤
│ AWARENESS       │ Bumper (6s) + Non-Skippable (15s)              │
│                 │ → Máximo reach, mensagem curta                  │
├─────────────────┼─────────────────────────────────────────────────┤
│ CONSIDERATION   │ Skippable In-Stream (60-90s) + Discovery       │
│                 │ → Valor educacional, engajamento               │
├─────────────────┼─────────────────────────────────────────────────┤
│ LEADS           │ Skippable In-Stream (60-120s)                  │
│                 │ → Story + valor + CTA lead magnet              │
├─────────────────┼─────────────────────────────────────────────────┤
│ SALES           │ Skippable In-Stream (90-180s)                  │
│                 │ → Full pitch, prova social, oferta             │
├─────────────────┼─────────────────────────────────────────────────┤
│ TRAFFIC         │ Skippable + Discovery                          │
│                 │ → Curiosity hooks, CTAs claros                 │
├─────────────────┼─────────────────────────────────────────────────┤
│ MOBILE/GEN Z    │ Shorts Ads (vertical 9:16)                     │
│                 │ → Native feel, hook em 0.5s                    │
└─────────────────┴─────────────────────────────────────────────────┘

DURATION GUIDELINES:

Skippable In-Stream:
  - Lead Gen: 60-90s (valor + CTA)
  - Direct Sale: 90-180s (full pitch)
  - Consideration: 30-60s (hook + tease)

Non-Skippable:
  - Always: 15s (máximo permitido)

Bumper:
  - Always: 6s (máximo permitido)

Shorts:
  - Recommended: 15-30s (atenção curta)
  - Maximum: 60s
```

#### Step 1.2: Avatar Deep Dive

```yaml
AVATAR ANALYSIS FRAMEWORK:

Demographics:
  - Idade:
  - Gênero:
  - Localização:
  - Renda/Poder aquisitivo:
  - Ocupação:

Psychographics:
  - O que AMAM:
  - O que ODEIAM:
  - O que TEMEM:
  - O que DESEJAM profundamente:
  - O que os FRUSTRA diariamente:

Behavioral:
  - Onde passam tempo online:
  - Que tipo de conteúdo consomem:
  - Quem seguem/admiram:
  - Que canais assistem no YouTube:
  - Que keywords pesquisam:

Purchase Triggers:
  - O que os faz agir AGORA:
  - Objeções comuns:
  - Processo de decisão:
  - Quem influencia a decisão:

QUALIFICATION STATEMENT:
"Se você é [descrição específica] que [situação atual] e quer [resultado desejado]..."
```

### Phase 2: Script Architecture

#### Step 2.1: The 5-Second Rule (Critical)

```yaml
THE FIRST 5 SECONDS - ONDE ADS VENCEM OU PERDEM:

Statistics:
  - 65-75% dos viewers skipam na primeira oportunidade
  - Decisão de skip: formada em 2-3 segundos
  - Top 25% de ads: <25% skip rate

OBJETIVOS EM 5 SEGUNDOS:
  1. Interromper padrão (ATENÇÃO)
  2. Qualificar o avatar (RELEVÂNCIA)
  3. Prometer valor (BENEFÍCIO)
  4. Criar curiosidade (CONTINUAR)

HOOK FRAMEWORKS (escolha 1-2):

1. PATTERN INTERRUPT
   ┌────────────────────────────────────────────────────┐
   │ "ESPERA. Antes de pular, você precisa ouvir isso" │
   │ "Isso vai parecer estranho, mas funciona..."      │
   │ [Ação visual inesperada + statement provocativo]  │
   └────────────────────────────────────────────────────┘

2. DIRECT QUALIFICATION
   ┌────────────────────────────────────────────────────┐
   │ "Se você é [avatar] que [situação], não pula."    │
   │ "Atenção [avatar]: isso é exclusivo pra você."   │
   │ "Você gasta mais de [X] em [área]? Presta atenção"│
   └────────────────────────────────────────────────────┘

3. BOLD CLAIM
   ┌────────────────────────────────────────────────────┐
   │ "[Resultado] em [tempo]. Parece impossível?"      │
   │ "[X] pessoas já [resultado]. Você é o próximo."   │
   │ "Eu [resultado impressionante] e vou mostrar como"│
   └────────────────────────────────────────────────────┘

4. PROVOCATIVE QUESTION
   ┌────────────────────────────────────────────────────┐
   │ "Por que [maioria] [falha] enquanto [minoria]     │
   │  [sucede]?"                                       │
   │ "Você sabe o erro #1 que [avatares] cometem?"    │
   │ "O que [experts] não querem que você saiba?"      │
   └────────────────────────────────────────────────────┘

5. CURIOSITY GAP
   ┌────────────────────────────────────────────────────┐
   │ "Descobri algo sobre [tema] que muda tudo."       │
   │ "Existe um segredo que [experts] não contam."    │
   │ "Depois de [X anos], finalmente entendi..."       │
   └────────────────────────────────────────────────────┘

6. STORY OPENING
   ┌────────────────────────────────────────────────────┐
   │ "Há [tempo], eu estava exatamente onde você está" │
   │ "Quando [evento aconteceu], tudo mudou."          │
   │ "Eu perdi [algo] até descobrir [solução]."       │
   └────────────────────────────────────────────────────┘

7. STATISTIC SHOCK
   ┌────────────────────────────────────────────────────┐
   │ "93% dos [avatares] cometem este erro..."         │
   │ "Apenas 3% sabem sobre isso..."                   │
   │ "R$[X] bilhões são desperdiçados em..."          │
   └────────────────────────────────────────────────────┘

8. NEGATIVE/CONTROVERSY
   ┌────────────────────────────────────────────────────┐
   │ "Pare de fazer [erro comum]."                     │
   │ "Tudo que te disseram sobre [tema] está errado." │
   │ "[Método popular] está te prejudicando."          │
   └────────────────────────────────────────────────────┘
```

#### Step 2.2: Visual Hook Strategies

```yaml
VISUAL HOOKS (primeiros 2 segundos):

MOVEMENT (Movimento):
  - Comece com movimento, não estático
  - Pessoa entrando em frame
  - Zoom in/out rápido
  - Objeto sendo mostrado/jogado
  - Ação acontecendo

FRAMING (Enquadramento):
  - Close-up de rosto → conexão
  - Unusual angle → curiosidade
  - Before/After setup → prova
  - Product in action → demonstração

COLOR/CONTRAST:
  - Cores vibrantes vs. fundo neutro
  - Highlight no elemento principal
  - Consistência com branding
  - Text overlay contrastante

UNEXPECTED ELEMENTS:
  - Props inusitados
  - Costumes/personagens
  - Locação inesperada
  - Situação absurda

AUDIO HOOKS:
  - Sound effect de abertura
  - Primeira palavra = impactante
  - Não comece com "Oi, meu nome é..."
  - Tom confiante e energético
```

### Phase 3: Script Templates by Format

#### Step 3.1: 6-Second Bumper Template

```markdown
═══════════════════════════════════════════════════════════════
BUMPER AD TEMPLATE (6 SEGUNDOS)
═══════════════════════════════════════════════════════════════

STRUCTURE:
[0-2s] VISUAL IMPACT + HOOK
[2-4s] PRODUCT/BENEFIT (3-5 palavras)
[4-6s] LOGO + TAGLINE + URL

───────────────────────────────────────────────────────────────
TEMPLATE A: PRODUCT FOCUS
───────────────────────────────────────────────────────────────
[VISUAL: Produto em ação]
"[Produto]. [Benefício em 3 palavras]."
[LOGO + URL]

Exemplo:
[VISUAL: App sendo usado]
"FitTrack. Resultados em 30 dias."
[LOGO: FitTrack + fittrack.com]

───────────────────────────────────────────────────────────────
TEMPLATE B: PROBLEM-SOLUTION
───────────────────────────────────────────────────────────────
"[Problema]? [Solução]."
[LOGO + URL]

Exemplo:
"Ads sem resultado? YouTube Ads resolve."
[LOGO + URL]

───────────────────────────────────────────────────────────────
TEMPLATE C: TAGLINE IMPACT
───────────────────────────────────────────────────────────────
[VISUAL: Brand imagery]
"[Tagline memorável]"
[LOGO + URL]

Exemplo:
[VISUAL: Clientes felizes]
"Transforme cliques em clientes."
[LOGO + URL]

═══════════════════════════════════════════════════════════════
```

#### Step 3.2: 15-Second Non-Skippable Template

```markdown
═══════════════════════════════════════════════════════════════
NON-SKIPPABLE TEMPLATE (15 SEGUNDOS)
═══════════════════════════════════════════════════════════════

STRUCTURE:
[0-3s]   HOOK - Interromper + qualificar
[3-10s]  VALUE - Benefício principal + diferencial
[10-15s] CTA - Ação clara + urgência

───────────────────────────────────────────────────────────────
TEMPLATE A: PROBLEM-SOLUTION
───────────────────────────────────────────────────────────────
[HOOK - 0-3s]
"[Avatar]? Cansado de [problema]?"

[VALUE - 3-10s]
"[Produto] resolve [problema] em [tempo].
[Benefício principal] sem [dor evitada]."

[CTA - 10-15s]
"[Ação]. Link na descrição. [Urgência]."

───────────────────────────────────────────────────────────────
EXEMPLO COMPLETO:
───────────────────────────────────────────────────────────────
"Empreendedor? Cansado de leads que não convertem?

Nosso método de YouTube Ads gera leads 3x mais qualificados.
Clientes que já querem comprar.

Clique no link e baixe o guia grátis. Só essa semana."

───────────────────────────────────────────────────────────────
TEMPLATE B: DIRECT PITCH
───────────────────────────────────────────────────────────────
[HOOK - 0-3s]
"[Resultado] em [tempo]. Quer saber como?"

[VALUE - 3-10s]
"[Número] de [avatares] já conseguiram com [Produto].
[Benefício diferenciador]."

[CTA - 10-15s]
"Clique agora e descubra. [Urgência]."

───────────────────────────────────────────────────────────────
TEMPLATE C: SOCIAL PROOF LEAD
───────────────────────────────────────────────────────────────
[HOOK - 0-3s]
"[Cliente] faturou [resultado] usando isso."

[VALUE - 3-10s]
"[Produto] é o método que [descrição simples].
Funciona para [avatares]."

[CTA - 10-15s]
"Quer o mesmo resultado? Link abaixo."

═══════════════════════════════════════════════════════════════
```

#### Step 3.3: 30-Second Skippable Template

```markdown
═══════════════════════════════════════════════════════════════
SKIPPABLE TEMPLATE (30 SEGUNDOS)
═══════════════════════════════════════════════════════════════

STRUCTURE:
[0-5s]   HOOK - Pattern interrupt + qualificação
[5-15s]  PROBLEM - Agitar dor + consequências
[15-25s] SOLUTION - Seu produto + benefício
[25-30s] CTA - Ação + urgência

───────────────────────────────────────────────────────────────
TEMPLATE COMPLETO:
───────────────────────────────────────────────────────────────

[HOOK - 0-5s]
"Se você gasta mais de R$5.000 em ads por mês e não vê retorno,
os próximos 25 segundos podem mudar seu negócio."

[PROBLEM - 5-15s]
"A maioria dos empreendedores desperdiça dinheiro em tráfego frio.
Leads que não atendem. Campanhas que não escalam.
E mês após mês, o mesmo resultado."

[SOLUTION - 15-25s]
"YouTube Ads é diferente. Você anuncia onde seu cliente já está
buscando solução. Leads 3x mais qualificados.
[X] empreendedores já usam nosso método."

[CTA - 25-30s]
"Clique no link abaixo e baixe o guia grátis.
Descubra como escalar com YouTube Ads."

───────────────────────────────────────────────────────────────
VISUAL DIRECTION:
───────────────────────────────────────────────────────────────
[0-5s]   Close-up, olhando para câmera, movimento
[5-15s]  Intercalar talking head com B-roll de frustração
[15-25s] Screenshots de resultados, produto em uso
[25-30s] Tela limpa com URL, seta apontando

═══════════════════════════════════════════════════════════════
```

#### Step 3.4: 60-Second Skippable Template

```markdown
═══════════════════════════════════════════════════════════════
SKIPPABLE TEMPLATE (60 SEGUNDOS)
═══════════════════════════════════════════════════════════════

STRUCTURE:
[0-5s]   HOOK - Capture + qualifique + prometa
[5-15s]  CONTEXT - Story ou credencial
[15-30s] PROBLEM - Aprofunde a dor
[30-45s] SOLUTION - Seu produto + mecanismo
[45-55s] PROOF - Social proof stacking
[55-60s] CTA - Ação + urgência

───────────────────────────────────────────────────────────────
TEMPLATE VALUE-AD (Aleric Heck Style):
───────────────────────────────────────────────────────────────

[HOOK - 0-5s]
"Se você é empreendedor digital que quer escalar com anúncios
mas está cansado de desperdiçar dinheiro... presta atenção."

[CONTEXT - 5-15s]
"Nos últimos 5 anos, ajudei mais de 2.000 empresas a escalar
usando YouTube Ads. E vou te mostrar exatamente o que funciona."

[PROBLEM - 15-30s]
"O problema é que a maioria tenta copiar o que funciona no
Facebook ou Instagram. Mas YouTube é diferente.
As pessoas estão buscando soluções, não scrollando distraídas.
E se você não sabe capturar essa atenção nos primeiros 5 segundos,
está literalmente queimando dinheiro."

[SOLUTION - 30-45s]
"Por isso criei o Método SCALE para YouTube Ads.
É um sistema que identifica seu cliente ideal,
cria hooks que impedem o skip, e otimiza sua campanha
para gerar leads que já querem comprar.
Funciona porque você aparece exatamente quando eles estão
buscando solução."

[PROOF - 45-55s]
"João usou o método e triplicou leads em 30 dias.
Maria reduziu custo por lead em 60%.
Mais de 500 alunos já aplicaram com resultados."

[CTA - 55-60s]
"Quer aprender o método completo?
Clique no link abaixo e acesse a aula gratuita.
Mas corre, fica disponível só por tempo limitado."

───────────────────────────────────────────────────────────────
VISUAL DIRECTION:
───────────────────────────────────────────────────────────────
[0-5s]   Close-up + movimento + energia
[5-15s]  Credenciais visuais (logos, números)
[15-30s] B-roll de frustração + pain points
[30-45s] Demonstração do método/produto
[45-55s] Screenshots de depoimentos, resultados
[55-60s] URL grande + seta + urgência visual

═══════════════════════════════════════════════════════════════
```

#### Step 3.5: 90-Second Skippable Template (Long-Form)

```markdown
═══════════════════════════════════════════════════════════════
SKIPPABLE TEMPLATE (90 SEGUNDOS)
═══════════════════════════════════════════════════════════════

STRUCTURE:
[0-5s]   HOOK - Pattern interrupt forte
[5-20s]  STORY - Sua jornada ou do cliente
[20-40s] PROBLEM - Deep dive na dor
[40-60s] SOLUTION - Mecanismo único
[60-75s] PROOF - Stack de evidências
[75-85s] OFFER - O que recebem
[85-90s] CTA - Fechamento forte

───────────────────────────────────────────────────────────────
TEMPLATE STORYTELLING (Billy Gene Style):
───────────────────────────────────────────────────────────────

[HOOK - 0-5s]
"Há 3 anos, eu estava R$50.000 no negativo.
Hoje faturo 7 dígitos. E tudo começou com um YouTube Ad."

[STORY - 5-20s]
"Eu era como você provavelmente é agora.
Tentava de tudo: Facebook Ads, Instagram, Google.
Gastava milhares por mês e mal pagava os custos.
Cheguei a pensar em desistir do meu negócio."

[PROBLEM - 20-40s]
"O problema não era eu. Era onde eu anunciava.
Facebook te mostra para pessoas que estão distraídas.
Instagram é um mar de scrolling sem fim.
Ninguém está lá para resolver problemas.
Estão lá para passar tempo.
E eu estava pagando caro para interromper quem não queria ser interrompido."

[SOLUTION - 40-60s]
"Então descobri YouTube Ads.
E entendi: aqui as pessoas BUSCAM soluções.
Quando alguém pesquisa 'como escalar meu negócio',
elas QUEREM encontrar algo.
Criei um método para aparecer exatamente nesses momentos.
Com hooks que capturam antes do skip.
Com mensagens que convertem porque são relevantes.
Chamei de Método SCALE."

[PROOF - 60-75s]
"Nos últimos 12 meses:
- Mais de 500 alunos aplicaram
- R$2.4 milhões gerados em vendas combinadas
- Média de 3.2x de retorno sobre investimento
Carlos: 'Primeiro mês, R$47k em vendas.'
Ana: 'Finalmente entendi como escalar.'"

[OFFER - 75-85s]
"Criei uma aula gratuita que mostra o passo a passo.
Você vai aprender os 3 pilares do método.
Como criar hooks que impedem o skip.
E como configurar suas primeiras campanhas."

[CTA - 85-90s]
"Clique no link abaixo agora.
A aula fica disponível por tempo limitado.
Te vejo do outro lado."

═══════════════════════════════════════════════════════════════
```

#### Step 3.6: YouTube Shorts Template

```markdown
═══════════════════════════════════════════════════════════════
YOUTUBE SHORTS AD TEMPLATE (15-30 SEGUNDOS)
═══════════════════════════════════════════════════════════════

SPECS:
- Aspect Ratio: 9:16 (vertical)
- Sound: On by default
- Duration: 15-30s recomendado
- Text: Captions grandes
- Feel: Nativo, não pareça ad

STRUCTURE:
[0-1s]  INSTANT HOOK - Primeiro frame é tudo
[1-5s]  VALUE BOMB - Entregue algo útil imediatamente
[5-20s] EXPAND - Desenvolva o ponto
[20-25s] CTA - Rápido e direto

───────────────────────────────────────────────────────────────
TEMPLATE A: QUICK TIP
───────────────────────────────────────────────────────────────
[0-1s]
[TEXT OVERLAY: "O segredo que ninguém conta"]
"O erro #1 em YouTube Ads..."

[1-5s]
"...é copiar Facebook.
YouTube é busca. Não scroll."

[5-15s]
"Quando alguém pesquisa 'como escalar negócio',
elas QUEREM encontrar você.
Use isso. Crie ads que respondem perguntas."

[15-20s]
"Link na bio pra aula completa.
Segue pra mais dicas."

───────────────────────────────────────────────────────────────
TEMPLATE B: RESULT SHOWCASE
───────────────────────────────────────────────────────────────
[0-1s]
[TEXT OVERLAY: "R$47k em 30 dias"]
"Esse é o resultado do Carlos."

[1-10s]
"Ele aplicou 3 coisas:
1. Hook em 5 segundos
2. Targeting por intenção
3. Oferta irresistível"

[10-20s]
"YouTube Ads mudou o jogo dele.
Quer o mesmo? Link na bio."

───────────────────────────────────────────────────────────────
TEMPLATE C: PATTERN INTERRUPT
───────────────────────────────────────────────────────────────
[0-1s]
[AÇÃO VISUAL INESPERADA]
"NÃO faça YouTube Ads..."

[1-5s]
"...se você quer leads frios que não atendem.

Mas SE você quer..."

[5-15s]
"Leads que JÁ buscam solução.
Que QUEREM falar com você.
Que estão PRONTOS para comprar."

[15-20s]
"Então YouTube Ads é pra você.
Link na bio."

───────────────────────────────────────────────────────────────
SHORTS BEST PRACTICES:
───────────────────────────────────────────────────────────────
✓ Nativo ao formato (não adapte horizontal)
✓ Hook em 0.5 segundos (primeiro frame)
✓ Text overlays GRANDES (leitura rápida)
✓ Som on por default (aproveite)
✓ Captions sempre (muitos leem)
✓ CTA curto e direto
✓ Não pareça um ad tradicional

═══════════════════════════════════════════════════════════════
```

#### Step 3.7: Discovery Ad Template

```markdown
═══════════════════════════════════════════════════════════════
DISCOVERY AD (IN-FEED) TEMPLATE
═══════════════════════════════════════════════════════════════

COMPONENTS:
- Thumbnail (1280x720 recomendado)
- Título (máx 100 caracteres)
- Descrição 1 (máx 35 caracteres)
- Descrição 2 (máx 35 caracteres)
- Vídeo (qualquer duração)

───────────────────────────────────────────────────────────────
THUMBNAIL PRINCIPLES (80% do sucesso):
───────────────────────────────────────────────────────────────
Visual Elements:
  - Rosto com expressão (medo, surpresa, alegria)
  - Contraste alto
  - 3 cores máximo
  - Texto grande e legível
  - Setas/círculos destacando

Text on Thumbnail:
  - 3-5 palavras máximo
  - Fonte bold
  - Contraste com background
  - Complementa (não repete) título

───────────────────────────────────────────────────────────────
TITLE FORMULAS:
───────────────────────────────────────────────────────────────
1. HOW-TO:
   "Como [Resultado] em [Tempo] (Passo a Passo)"
   "Como Escalar com YouTube Ads (Método Completo)"

2. NUMBER LIST:
   "[X] [Coisas] que [Avatares] Precisam Saber sobre [Tema]"
   "5 Erros de YouTube Ads que Custam R$10k/mês"

3. QUESTION:
   "Por Que [Maioria] [Falha] com [Tema]?"
   "Por Que Seus Ads Não Convertem? (A Verdade)"

4. SECRET/REVEAL:
   "O Segredo dos YouTube Ads de 7 Dígitos"
   "O Que [Experts] Não Contam Sobre [Tema]"

5. TRANSFORMATION:
   "De [Estado A] para [Estado B] com [Método]"
   "De R$0 a R$100k com YouTube Ads (Case Real)"

───────────────────────────────────────────────────────────────
DESCRIPTION EXAMPLES:
───────────────────────────────────────────────────────────────
Descrição 1: "Método usado por +500 empresas"
Descrição 2: "Assista e aplique hoje"

Descrição 1: "Grátis por tempo limitado"
Descrição 2: "Clique e descubra"

Descrição 1: "3x mais leads qualificados"
Descrição 2: "Método passo a passo"

───────────────────────────────────────────────────────────────
VIDEO CONTENT FOR DISCOVERY:
───────────────────────────────────────────────────────────────
Discovery ads = viewer CLICA para assistir
O vídeo deve:
  - Entregar o prometido no thumbnail/título
  - Ser educacional/value-first
  - Ter CTA no meio E no final
  - Duração: 5-15 min funciona bem

Structure:
  [0-30s]    Hook + preview do valor
  [30s-5min] Conteúdo educacional
  [5min]     Mid-roll CTA
  [5-10min]  Mais valor
  [Final]    Strong CTA + próximos passos

═══════════════════════════════════════════════════════════════
```

### Phase 4: Advanced Frameworks

#### Step 4.1: ABCD Framework Application

```yaml
GOOGLE ABCD FRAMEWORK - APPLICATION GUIDE:

A - ATTENTION (Atenção):
  ┌──────────────────────────────────────────────┐
  │ CHECKLIST:                                   │
  │ [ ] Hook nos primeiros 2 segundos?          │
  │ [ ] Visual em movimento (não estático)?      │
  │ [ ] Áudio impactante?                        │
  │ [ ] Tight framing (close-up)?               │
  │ [ ] Elemento surpresa?                       │
  └──────────────────────────────────────────────┘

B - BRANDING:
  ┌──────────────────────────────────────────────┐
  │ CHECKLIST:                                   │
  │ [ ] Marca mencionada nos primeiros 5s?       │
  │ [ ] Cores da marca consistentes?             │
  │ [ ] Logo visível?                           │
  │ [ ] Produto integrado à história?           │
  │ [ ] Audio branding (jingle/sonic logo)?     │
  └──────────────────────────────────────────────┘

C - CONNECTION (Conexão):
  ┌──────────────────────────────────────────────┐
  │ CHECKLIST:                                   │
  │ [ ] História humana/relatable?               │
  │ [ ] Emoção autêntica (humor, empatia)?      │
  │ [ ] Linguagem do avatar?                     │
  │ [ ] Problema real, solução real?            │
  │ [ ] Close-ups de rostos?                    │
  └──────────────────────────────────────────────┘

D - DIRECTION (Direção):
  ┌──────────────────────────────────────────────┐
  │ CHECKLIST:                                   │
  │ [ ] CTA específico e claro?                 │
  │ [ ] URL visível na tela?                    │
  │ [ ] Verbal + Visual alignment?              │
  │ [ ] Urgência (se aplicável)?                │
  │ [ ] Próximo passo óbvio?                    │
  └──────────────────────────────────────────────┘
```

#### Step 4.2: Tom Breeze 5 A's Application

```yaml
TOM BREEZE 5 A's FRAMEWORK:

1. ATTENTION:
   Implementation:
     - Pattern interrupt forte
     - Visual hook imediato
     - Statement que para o scroll

   Script Element:
     "Se você é [avatar] que [situação]..."

2. AUTHORITY:
   Implementation:
     - Credenciais logo após hook
     - Números e resultados
     - Por que você?

   Script Element:
     "Nos últimos [X] anos, ajudei [Y] pessoas a..."

3. AUDIENCE:
   Implementation:
     - Targeting preciso
     - Exclusão de não-qualificados
     - Falar diretamente para o avatar

   Script Element:
     "Isso é especificamente para [avatar] que..."

4. ACTION:
   Implementation:
     - CTA cristalino
     - Oferta irresistível
     - Urgência genuína

   Script Element:
     "Clique no link abaixo e [benefício específico]..."

5. ASCENSION:
   Implementation:
     - Funil pós-clique otimizado
     - Jornada do cliente clara
     - Lifetime value focus

   Post-Ad Element:
     Landing page → Lead magnet → Nurture → Offer
```

#### Step 4.3: Billy Gene Entertainment Framework

```yaml
BILLY GENE ENTERTAINMENT + EDUCATION + OFFER:

1. ENTERTAINMENT (0-15 segundos):

   Tactics:
     - Seja INESPERADO
     - Use humor quando apropriado
     - Props inusitados
     - Situações absurdas
     - NÃO pareça um ad tradicional

   Examples:
     - Fantasia de personagem
     - Locação bizarra
     - Ação inesperada
     - Parody de algo conhecido

   Question to Ask:
     "Isso é DIFERENTE de outros ads?"
     "As pessoas compartilhariam?"

2. EDUCATION (15-45 segundos):

   Tactics:
     - Ensine algo ÚTIL
     - Valor que funciona mesmo sem comprar
     - Demonstre expertise
     - "Dê o peixe, venda a vara"

   Structure:
     - O problema real
     - O mito (o que não funciona)
     - A verdade (o que funciona)
     - O método (como fazer)

   Question to Ask:
     "O viewer aprendeu algo valioso?"
     "Isso funciona independente de comprar?"

3. OFFER (45-60 segundos):

   Tactics:
     - Transição natural do valor
     - Oferta específica e clara
     - Por que agora?
     - Próximo passo simples

   Structure:
     - O que recebem
     - Por que é valioso
     - CTA direto
     - Urgência (se real)

   Question to Ask:
     "A oferta é irresistível?"
     "O próximo passo é óbvio?"
```

### Phase 5: A/B Testing Protocol

#### Step 5.1: 24 Variations Method

```yaml
24 VARIATIONS METHOD (Aleric Heck):

STRUCTURE:
  4 Hook variations × 2 Body variations × 3 CTA variations = 24 ads

RECORDING EFFICIENCY:
  1. Grave todos os 4 hooks seguidos (~2 min cada)
  2. Grave os 2 bodies (~3-4 min cada)
  3. Grave os 3 CTAs (~1 min cada)
  4. Total gravação: ~15-20 minutos
  5. Edição combina: 24 variações

HOOK VARIATIONS:
  Hook A: Question (pergunta provocativa)
  Hook B: Statement (afirmação bold)
  Hook C: Story (abertura narrativa)
  Hook D: Statistic (número chocante)

BODY VARIATIONS:
  Body A: Problem-heavy (foca na dor)
  Body B: Solution-heavy (foca no método)

CTA VARIATIONS:
  CTA A: Urgência (tempo limitado)
  CTA B: Scarcity (vagas limitadas)
  CTA C: Value (benefício sem urgência)

TESTING PROTOCOL:
  Phase 1: Rode todas 24 por 48-72h
  Phase 2: Identifique top 5 por View Rate
  Phase 3: Continue top 5 por mais 72h
  Phase 4: Identifique winner por CTR + Conversion
  Phase 5: Scale winner, crie variações do winner
```

#### Step 5.2: Testing Metrics

```yaml
METRICS TO TRACK BY PHASE:

PHASE 1: HOOK TESTING
  Primary Metric: View Rate (% que assiste 30s+)
  Target: >25% (good), >35% (great)

  Secondary: Completion Rate
  Target: >15%

PHASE 2: ENGAGEMENT TESTING
  Primary Metric: Watch Time
  Target: >50% completion

  Secondary: Engagement Rate
  Target: >0.5% likes/comments

PHASE 3: CONVERSION TESTING
  Primary Metric: CTR (Click-Through Rate)
  Target: >0.5% (average), >1% (good)

  Secondary: Conversion Rate
  Target: varies by offer

PHASE 4: SCALE METRICS
  Primary Metric: ROAS / CPA
  Target: >3x ROAS or <target CPA

  Secondary: Scale stability
  Target: Performance within 20% at 2x budget
```

### Phase 6: Quality Assurance

#### Step 6.1: Pre-Launch Checklist

```yaml
PRE-LAUNCH CHECKLIST:

HOOK (0-5 segundos):
  [ ] Interrompe padrão (não parece ad genérico)?
  [ ] Qualifica o avatar claramente?
  [ ] Promete valor ou cria curiosidade?
  [ ] Funciona SEM som (captions)?
  [ ] Visual em movimento?

BRANDING:
  [ ] Marca mencionada nos primeiros 5-10s?
  [ ] Cores consistentes com brand?
  [ ] Logo visível em algum momento?
  [ ] Produto integrado naturalmente?

ESTRUTURA:
  [ ] Flui naturalmente (não robótico)?
  [ ] Cada segundo justifica existir?
  [ ] Não repete informação desnecessariamente?
  [ ] Duração adequada ao formato?

VISUAL:
  [ ] Qualidade de imagem profissional?
  [ ] Iluminação adequada?
  [ ] Áudio claro e limpo?
  [ ] Captions/subtitles inclusos?
  [ ] Funciona em mobile (texto legível)?

CTA:
  [ ] Claro e específico?
  [ ] URL visível na tela?
  [ ] Verbal + visual alignment?
  [ ] Urgência é genuína (não fake)?
  [ ] Próximo passo é óbvio?

COMPLIANCE:
  [ ] Não faz promessas proibidas?
  [ ] Sem antes/depois médico não autorizado?
  [ ] Claims são verificáveis?
  [ ] Dentro das políticas do YouTube?
  [ ] Landing page consistente com ad?

TECHNICAL:
  [ ] Aspect ratio correto para formato?
  [ ] Duração dentro do limite?
  [ ] Arquivo no formato aceito?
  [ ] Resolução adequada (1080p+)?
```

#### Step 6.2: Post-Launch Monitoring

```yaml
POST-LAUNCH MONITORING:

FIRST 24 HOURS:
  - Verificar se ad foi aprovado
  - Monitorar impressões iniciais
  - Check for policy warnings

FIRST 48-72 HOURS:
  - Analisar View Rate por variação
  - Identificar hooks que funcionam
  - Kill variações com View Rate <15%

FIRST WEEK:
  - Analisar CTR e conversões
  - Calcular CPA/ROAS inicial
  - Ajustar bidding se necessário

ONGOING:
  - Weekly performance review
  - Creative refresh a cada 4-6 semanas
  - Audience expansion gradual
  - Scale incrementalmente (20-30%/vez)
```

---

## Output Format

```yaml
deliverables:
  primary:
    - complete_script:
        format: "Markdown with timestamps"
        includes:
          - Hook variations (3-4)
          - Full script by duration
          - Visual direction notes
          - Audio notes

  secondary:
    - hook_variations: "3-4 different approaches"
    - visual_storyboard: "Key visual moments"
    - ab_test_plan: "Testing protocol"
    - thumbnail_concepts: "For Discovery ads"

  supporting:
    - quality_checklist: "Pre-launch verification"
    - targeting_suggestions: "Audience recommendations"
    - metrics_targets: "Success benchmarks"

output_structure:
  1_strategy_summary:
    - Format selected and why
    - Avatar qualification statement
    - Key message hierarchy

  2_main_script:
    - Full script with timestamps
    - Visual/audio directions inline
    - Branding moments marked

  3_hook_variations:
    - Variation A (Question)
    - Variation B (Statement)
    - Variation C (Story)
    - Variation D (Pattern Interrupt)

  4_testing_plan:
    - What to test first
    - Budget allocation
    - Success metrics

  5_quality_checklist:
    - Pre-launch verification
    - Compliance check
    - Technical specs
```

---

## Copywriter Recommendations

```yaml
COPYWRITER SELECTION BY CONTEXT:

┌──────────────────────┬─────────────────┬──────────────────────────────┐
│ Contexto             │ Copywriter      │ Por Quê                      │
├──────────────────────┼─────────────────┼──────────────────────────────┤
│ Storytelling Ads     │ Joe Sugarman    │ Narrativa envolvente,        │
│                      │                 │ demonstração, curiosidade    │
├──────────────────────┼─────────────────┼──────────────────────────────┤
│ Pattern Interrupt    │ Gary Halbert    │ Hooks fortes, urgência,      │
│                      │                 │ copy direto e impactante     │
├──────────────────────┼─────────────────┼──────────────────────────────┤
│ Educacional/Value    │ Frank Kern      │ Casual, value-first,         │
│                      │                 │ build relationship           │
├──────────────────────┼─────────────────┼──────────────────────────────┤
│ Urgência/Escassez    │ Dan Kennedy     │ Direct response forte,       │
│                      │                 │ ação imediata                │
├──────────────────────┼─────────────────┼──────────────────────────────┤
│ Big Idea/Mechanism   │ Todd Brown      │ Diferenciação única,         │
│                      │                 │ mecanismo proprietário       │
├──────────────────────┼─────────────────┼──────────────────────────────┤
│ Problem Agitation    │ Eugene Schwartz │ Sofisticação de mercado,     │
│                      │                 │ awareness levels             │
├──────────────────────┼─────────────────┼──────────────────────────────┤
│ Emotional/Humor      │ Billy Gene      │ Entertainment value,         │
│ (Reference)          │ Style           │ viral potential              │
└──────────────────────┴─────────────────┴──────────────────────────────┘

TIER RECOMMENDATION:
  - Complex campaigns → Tier 0 (Eugene Schwartz) + Tier 1 execution
  - Standard campaigns → Tier 1 (Gary Halbert, Dan Kennedy)
  - Specific formats → Tier 2-3 specialists
```

---

## Metrics Reference

```yaml
YOUTUBE ADS BENCHMARKS 2025-2026:

Overall Platform:
  monthly_active_users: "2.7 bilhões"
  daily_active_users: "~125 milhões"
  mobile_viewership: ">70%"

Performance Averages:
  ctr_average: "0.65%"
  ctr_good: ">1%"
  view_rate_average: "25-30%"
  view_rate_good: ">35%"
  cpv_range: "$0.01-0.15"
  cpm_range: "$4-15"

By Format:
  skippable:
    view_rate_target: ">25%"
    ctr_target: ">0.5%"
    completion_rate: "15-30%"

  non_skippable:
    completion_rate: "100%"
    ctr_average: "0.3-0.7%"

  bumper:
    recall_lift: "+10-20%"
    cpm_efficient: "Yes"

  shorts:
    engagement_rate: "2-5%"
    growing: "Rapidly"

By Industry:
  ecommerce:
    ctr: "0.8-1.5%"
    roas_target: "3-5x"

  info_products:
    ctr: "1-2%"
    roas_target: "4-8x"

  b2b_saas:
    ctr: "0.5-1%"
    cpl_range: "$50-200"
```

---

## Quick Reference Scripts

### Lead Generation (60s)
```
[0-5s] "Se você gasta mais de R$5000 em ads e não vê retorno..."
[5-15s] [Credencial + por que ouvir]
[15-30s] [Problema: maioria desperdiça em tráfego frio]
[30-45s] [Solução: YouTube Ads + seu método]
[45-55s] [Prova: resultados de clientes]
[55-60s] [CTA: baixar guia/aula grátis]
```

### Direct Sale (90s)
```
[0-5s] [Hook: resultado ou story opening]
[5-20s] [Story: sua jornada ou do cliente]
[20-40s] [Problema: deep dive na dor]
[40-60s] [Solução: produto + mecanismo]
[60-75s] [Prova: múltiplos depoimentos]
[75-85s] [Oferta: stack + garantia]
[85-90s] [CTA: comprar agora + urgência]
```

### Brand Awareness (15s)
```
[0-3s] "[Avatar]? [Problema em 3 palavras]?"
[3-10s] "[Produto] resolve. [Benefício]."
[10-15s] "[Tagline]. [URL]."
```

---

## Related Resources

- **Research Doc:** `docs/research/youtube-ads-methodology-research.md`
- **VSL Task:** `tasks/create-vsl.md`
- **Video Script Task:** `tasks/create-video-script.md`
- **Landing Page Task:** `tasks/create-landing-page.md`

---

*Task Version: 2.0*
*Lines: 1200+*
*Last Updated: 2026-01-23*
*Primary Frameworks: Google ABCD, Tom Breeze 5 A's, Billy Gene Entertainment, Aleric Heck Value-Ad, Jake Larsen Video Ad Formula*
*Research Base: docs/research/youtube-ads-methodology-research.md*
