> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Create Video Hook Task - Master Protocol

## Meta

```yaml
task_id: create-video-hook
version: 2.0.0
category: copy_creation
complexity: advanced
estimated_time: 30-60 min
dependencies:
  - diagnose-awareness-level.md
related_agents:
  - jon-benson.md
  - gary-halbert.md
  - todd-brown.md
research_source: docs/research/video-hook-methodology-research.md
```

---

## Purpose

Create video hooks that capture attention in the first 1-5 seconds and drive viewer retention across all video platforms—TikTok, Instagram Reels, YouTube Shorts, YouTube Ads, and VSLs (Video Sales Letters).

**Core Philosophy:** The 3-second threshold is the primary algorithmic checkpoint. Videos with 65%+ retention at 3 seconds receive 4-7x more impressions. Your hook must combine visual interruption, verbal engagement, and psychological triggers simultaneously.

---

## When to Use

### Ideal Use Cases

| Situation | Platform | Hook Length |
|-----------|----------|-------------|
| Creating VSL for sales page | Landing Page | 15-60 seconds |
| Running YouTube pre-roll ads | YouTube Ads | 5 seconds (anti-skip) |
| Organic YouTube content | YouTube Shorts | 3-5 seconds |
| Instagram content | Reels | 3 seconds |
| TikTok content | TikTok | 1-3 seconds |
| Facebook video ads | Facebook/Meta | 3 seconds |
| Opening webinars or lives | Webinar | 30-60 seconds |

### Platform Decision Matrix

| If Your Goal Is... | Use This Platform | Hook Priority |
|-------------------|-------------------|---------------|
| Viral reach + brand awareness | TikTok | Native feel, trend integration |
| High-quality engaged audience | Instagram Reels | Aesthetic + value |
| Evergreen discovery + subscribers | YouTube Shorts | Clear topic + value promise |
| Direct response conversions | YouTube Ads | Anti-skip + qualification |
| Sales conversions | VSL | Big idea + curiosity loop |

---

## Inputs

```yaml
required:
  video_purpose:
    type: enum
    options:
      - sell         # Direct response, conversion focus
      - educate      # Value-first, positioning
      - entertain    # Engagement, virality focus
      - lead_capture # Opt-in, list building
      - brand        # Awareness, positioning
    description: Primary objective of the video

  target_avatar:
    type: object
    fields:
      - who: String describing the ideal viewer
      - pain_points: List of specific problems they face
      - desires: List of outcomes they want
      - awareness_level: unaware|problem_aware|solution_aware|product_aware|most_aware

  main_message:
    type: string
    description: Core message, offer, or transformation to communicate

  platform:
    type: enum
    options:
      - tiktok
      - instagram_reels
      - youtube_shorts
      - youtube_ads
      - facebook_ads
      - vsl
      - webinar
    description: Primary distribution platform

optional:
  video_length:
    type: string
    description: Planned total video duration
    examples: ["30 seconds", "2 minutes", "15 minutes"]

  tone:
    type: enum
    options:
      - provocative
      - educational
      - urgent
      - casual
      - professional
      - humorous
    default: educational

  big_idea:
    type: string
    description: Unique mechanism or approach name (for VSL/ads)

  forbidden_claims:
    type: array
    description: Promises that cannot be made (compliance)

  brand_voice:
    type: string
    description: Existing brand voice/personality guidelines

  copywriter_preference:
    type: enum
    options:
      - jon_benson      # VSL master, curiosity loops
      - gary_halbert    # Pattern interrupt, storytelling
      - todd_brown      # Big idea, mechanism focus
      - eugene_schwartz # Awareness calibration
      - dan_kennedy     # Urgency, direct response
      - frank_kern      # Casual authenticity
```

---

## The 3-Second Threshold Science

### Why 3 Seconds Matters

The 3-second mark serves as the primary algorithmic checkpoint:

```
RETENTION CASCADE:

0-3 seconds → Algorithm evaluates → Push or bury decision
3-10 seconds → 65% continue → Content gets distribution
10-30 seconds → 45% continue → Algorithm boost
Full completion → Maximum distribution + recommendations
```

**Key Statistics:**
- **65%+ retention at 3 seconds** → 4-7x more impressions
- **Below 65% retention** → Content gets algorithmically buried
- **65% who watch first 3 seconds** → Continue for 10+ seconds
- **45% of those retained** → Watch for 30+ seconds

### The Two-Second Reality

While 3 seconds is measured, the decision happens earlier:

```
DECISION TIMELINE:

0-0.5s: Initial visual processing
0.5-1s: Novelty assessment ("What's this?")
1-2s:   Relevance judgment ("Is this for me?")
2-3s:   Engagement decision ("Should I watch?")
3s+:    Algorithm measurement ("Push or bury?")

IMPLICATION: Your stopping element must occur within first 2 seconds
```

---

## Psychological Triggers Framework

### Seven Core Triggers

Every effective hook leverages one or more psychological triggers:

| # | Trigger | Brain Question | Example |
|---|---------|----------------|---------|
| 1 | **Pattern Interrupt** | "What was that?" | Unexpected visual/sound |
| 2 | **Curiosity Gap** | "I need to know!" | Open loop, incomplete info |
| 3 | **Shock/Arousal** | "Did they really say that?" | Bold claim, surprising stat |
| 4 | **Visual Intrigue** | "What am I looking at?" | Motion, contrast, color |
| 5 | **Relatability** | "That's me!" | POV, common experience |
| 6 | **Value-First** | "This could help me!" | Clear benefit promise |
| 7 | **Social Proof/FOMO** | "Everyone's doing this!" | Numbers, urgency |

### Trigger Selection by Platform

| Platform | Primary Triggers | Secondary Triggers |
|----------|-----------------|-------------------|
| TikTok | Relatability, Pattern Interrupt | Curiosity, Value |
| Reels | Visual Intrigue, Value-First | Social Proof, Shock |
| Shorts | Curiosity Gap, Value-First | Shock, Pattern Interrupt |
| YouTube Ads | Pattern Interrupt, Shock | FOMO, Value |
| VSL | Curiosity Gap, Shock | Value, Pattern Interrupt |

### The H.O.O.K. Framework

**H - Halt the Scroll**
- Visual or audio pattern interrupt
- Something unexpected/different in first 0.5 seconds

**O - Offer Relevance**
- "This is for YOU specifically"
- Avatar qualification in seconds 1-2

**O - Open a Loop**
- Create information gap
- Tease without revealing

**K - Keep Them Watching**
- Promise value/resolution
- Give timeline expectation

---

## Pattern Interrupt Techniques

### Visual Pattern Interrupts

| Technique | Description | When to Use |
|-----------|-------------|-------------|
| **Extreme Close-Up** | Face fills 80%+ of frame | Personal content, emotional hooks |
| **Unexpected Movement** | Sudden motion in static scene | Attention capture |
| **Color Contrast** | Bright/unusual color palette | Standing out in feed |
| **Text Overlay Shock** | Large, bold text with number/claim | Statistical hooks |
| **Unusual Angle** | Camera position defies expectation | Pattern breaking |
| **Object Intrusion** | Unexpected item enters frame | Product demos |
| **Split Second Flash** | Brief visual that demands rewatch | Proof/evidence hooks |

### Audio Pattern Interrupts

| Technique | Description | When to Use |
|-----------|-------------|-------------|
| **Sudden Silence** | Music/sound cuts abruptly | Creating tension |
| **Unexpected Sound** | Sound that doesn't match visual | Pattern breaking |
| **Volume Spike** | Sudden loud moment | Command attention |
| **Whisper Contrast** | Unusually quiet delivery | Sharing secrets |
| **Sound Effect Emphasis** | Effect punctuates statement | Emphasizing claims |

### Verbal Pattern Interrupts

| Technique | Example | Effect |
|-----------|---------|--------|
| **Direct Command** | "Stop scrolling." | Triggers compliance |
| **Contrarian Statement** | "Everything you know is wrong." | Creates cognitive dissonance |
| **Incomplete Thought** | "The one thing that changed..." | Zeigarnik effect |
| **Question Direct** | "Can I ask you something?" | Personal address |
| **Confession** | "I made a huge mistake." | Vulnerability creates connection |

---

## Workflow

### Phase 1: Pre-Hook Strategy

#### Step 1.1: Platform Analysis

```yaml
PLATFORM REQUIREMENTS:

tiktok:
  hook_window: 1-2 seconds
  text_overlay: Essential (sound-off viewers)
  native_feel: Critical (ad-looking content punished)
  trend_integration: Helpful (algorithm boost)
  face_presence: Recommended (higher engagement)
  format: Vertical 9:16

instagram_reels:
  hook_window: 3 seconds
  text_overlay: Important
  visual_quality: Higher standard required
  brand_polish: Accepted (platform tolerates branded)
  aesthetic: Important (low-quality gets scrolled)
  format: Vertical 9:16

youtube_shorts:
  hook_window: 3 seconds
  clear_subject: Essential (instant topic clarity)
  quality: Important (platform expectations)
  value_promise: Critical (YouTube audience expects learning)
  format: Vertical 9:16

youtube_ads:
  hook_window: 5 seconds (beat skip button)
  anti_skip_design: Critical
  immediate_value: Essential (justify interruption)
  qualification: Important (right viewers fast)
  format: Horizontal 16:9 or Vertical

vsl:
  hook_window: 15-60 seconds
  qualification: Essential
  big_idea_tease: Critical
  credibility_hint: Important
  curiosity_loop: Necessary
  format: Horizontal 16:9
```

#### Step 1.2: Awareness Level Calibration

Adapt hook approach based on audience awareness:

| Awareness Level | Hook Focus | Example Approach |
|----------------|------------|------------------|
| **Unaware** | Problem identification | "Do you ever feel [symptom]?" |
| **Problem Aware** | Solution teasing | "Why [common solutions] fail..." |
| **Solution Aware** | Mechanism differentiation | "Forget [common]. Try [unique]." |
| **Product Aware** | Proof and urgency | "Here's why [number] chose this" |
| **Most Aware** | Offer and action | "Ready? Here's how to start today." |

#### Step 1.3: Big Idea Development (For VSL/Ads)

Before writing the hook, define the Big Idea:

```yaml
BIG_IDEA_FORMULA:

"The [Unique Mechanism Name] that [Specific Result]
without [Pain Avoided]"

CRITERIA:
- Different from everything audience has seen
- Specific (not generic)
- Credible (with proof or logic)
- Desirable (audience wants this)
- Explainable in one sentence

EXAMPLES:
- "The Metabolic Reset Protocol that burns fat while you sleep—without dieting"
- "The 3-Step Funnel Framework that generated $2.4M—without paid ads"
- "The Conversation Closing Method that closes 80%—without feeling salesy"
```

### Phase 2: Hook Formula Selection

#### Step 2.1: Master Hook Formulas

Select from twelve proven formulas:

**1. Pattern Interrupt Formula**
```
[Unexpected element] + "Here's what you need to know..."
Best for: Short-form social, attention capture
```

**2. Bold Claim Formula**
```
"[Specific result] in [timeframe]. Let me show you how."
Best for: Results-focused content, credibility
```

**3. Provocative Question Formula**
```
"Why do [majority] [fail] while [minority] [succeed]?"
Best for: Educational content, curiosity
```

**4. Story Opening Formula**
```
"[Time period] ago, I was [relatable struggle]. Today, [success]. Here's what changed."
Best for: Transformation content, relatability
```

**5. Contrarian Formula**
```
"Everything you know about [topic] is wrong. Here's the truth."
Best for: Differentiation, bold positioning
```

**6. Curiosity Gap Formula**
```
"There's ONE factor that separates [winners] from [losers]—and it's not what you think."
Best for: Long-form, keeping attention
```

**7. If-Then Formula**
```
"If you [situation], then what I'm about to share will [transformation]."
Best for: Qualification, targeted content
```

**8. Specificity Formula**
```
"[Exact number] [result] in [exact timeframe] using [method name]."
Best for: Proof-based content, credibility
```

**9. Social Proof Formula**
```
"[Number] people have already [result]. Here's how you can too."
Best for: FOMO, mass appeal
```

**10. Enemy/Villain Formula**
```
"[System/industry] wants you to keep [problem]. Here's the truth they're hiding."
Best for: Contrarian positioning, distrust content
```

**11. Demonstration Formula**
```
"Watch this..." [Show result] "Here's how to do it."
Best for: Visual proof, tutorials
```

**12. Value-First Formula**
```
"In the next [time], I'll teach you [valuable skill]. No fluff."
Best for: Educational content, trust building
```

#### Step 2.2: Platform-Specific Hook Templates

**TikTok Hook Templates:**

```
POV HOOK:
"POV: [Relatable scenario the viewer experiences]"
Example: "POV: You just discovered your marketing strategy is backwards"

STORY TIME HOOK:
"Storytime: [Intriguing premise]"
Example: "Storytime: How I made $10,000 from my bedroom in one weekend"

WAIT FOR IT HOOK:
[Visual setup] + "Wait for it..."
Example: [Mixing ingredients] "Watch what happens when I add this"

REPLY HOOK:
"Replying to @[user]: [Answer to their question]"
Example: "Replying to @skeptic: Here's proof this actually works"

UNPOPULAR OPINION HOOK:
"Unpopular opinion: [Contrarian statement]"
Example: "Unpopular opinion: Posting daily is destroying your reach"
```

**Instagram Reels Hook Templates:**

```
BEFORE/AFTER HOOK:
[Split screen or quick cut] "Before → After"
Example: [Old results] "This was my engagement" [New results] "This is now"

STOP DOING THIS HOOK:
"Stop [common mistake] immediately"
Example: "Stop posting at random times—here's why it's killing your reach"

HOW I HOOK:
"How I [achieved result] in [timeframe]"
Example: "How I grew to 100k followers in 6 months without ads"

THE SECRET HOOK:
"The [niche] secret that [experts] don't want you to know"
Example: "The Instagram secret that agencies charge $1000 to share"

TUTORIAL HOOK:
"[Skill] tutorial in [time]"
Example: "Color grading tutorial in 60 seconds"
```

**YouTube Shorts Hook Templates:**

```
DID YOU KNOW HOOK:
"Did you know that [surprising fact]?"
Example: "Did you know 90% of copywriters fail because of this one mistake?"

IN X SECONDS HOOK:
"In the next [time], I'll show you [valuable thing]"
Example: "In 45 seconds, I'll show you how to double your email open rates"

MOST PEOPLE HOOK:
"Most people [do wrong thing]. Here's what to do instead."
Example: "Most people start videos wrong. Here's how to hook in 3 seconds"

I TESTED HOOK:
"I tested [thing] for [time]. Here's what happened."
Example: "I tested 100 TikTok hooks. These 5 worked best."

NUMBER LIST HOOK:
"[Number] [things] that [outcome]"
Example: "5 video hooks that get 10x more views"
```

**YouTube Ads Hook Templates:**

```
WAIT/STOP HOOK:
"Wait—don't skip yet. If you're [avatar], the next 60 seconds will [promise]."
Example: "Wait. If you're struggling with leads, the next 60 seconds will change everything."

SHOCKING STAT HOOK:
"[Shocking statistic about avatar's problem]"
Example: "97% of Facebook ads fail. Here's why yours is probably one of them."

STORY TEASE HOOK:
"Six months ago, I was [relatable bad]. Today, [good outcome]. Here's what changed."
Example: "Six months ago, I was $50k in debt. Today, my business does $100k/month."

QUESTION CHALLENGE HOOK:
"Can I ask you something honest? [Provocative question]"
Example: "Why are you still doing [outdated method] when [better way] exists?"

IF-THEN HOOK:
"If you [situation], then what I'm about to show you could [transformation]."
Example: "If you've tried courses before and failed, this is probably why."
```

**VSL Hook Templates:**

```
BIG IDEA REVEAL HOOK (15-30s):
"What I'm about to share with you is the [Mechanism Name] that [result] without [pain]."
Example: "What I'm about to share is the 'Compound Launch Method' that generated $2.4 million in 72 hours—without a single ad."

QUALIFICATION + PROMISE HOOK (30-45s):
"If you're a [specific avatar] who wants [specific outcome], pay close attention. In the next [time], I'm going to show you [specific transformation]."
Example: "If you're a coach who wants $50k months consistently, pay attention. In the next 12 minutes, I'll show you the exact system that took me to $127,000 months."

STORY + CURIOSITY HOOK (30-45s):
"On [specific date], something happened that changed how I think about [topic]. I'm going to tell you that story—and show you how to use what I learned."
Example: "On March 14th, 2023, I discovered something every guru was hiding. Today, I'm revealing it."

CONTRARIAN + MECHANISM HOOK (20-30s):
"Everything you've been taught about [topic] is wrong. And I can prove it. There's a [mechanism name] that [experts] don't want you to know about."
Example: "Everything about copywriting is backwards. There's a 'Reverse Engineering Protocol' that lets beginners outperform pros."

TIME-STAMPED RESULT HOOK (15-20s):
"[Specific time]. [Specific result]. [Specific method]. That's exactly what I'm about to break down."
Example: "90 days. $500,000. Zero paid ads. That's exactly what I'm showing you how to replicate."
```

### Phase 3: Hook Creation

#### Step 3.1: Write Multiple Variations

For each video, create at least 5 hook variations:

```yaml
VARIATION STRATEGY:

variation_1:
  formula: Pattern Interrupt
  trigger: Shock/Arousal

variation_2:
  formula: Bold Claim
  trigger: Social Proof

variation_3:
  formula: Question
  trigger: Curiosity Gap

variation_4:
  formula: Story Opening
  trigger: Relatability

variation_5:
  formula: Contrarian
  trigger: Pattern Interrupt
```

#### Step 3.2: Apply Visual Hook Design

For each hook, specify visual elements:

```yaml
VISUAL HOOK COMPONENTS:

text_overlay:
  content: "[3-5 word hook summary]"
  position: center-top
  font: Bold sans-serif
  color: High contrast (white on dark, yellow highlight)
  animation: Simple appear/pop

first_frame:
  subject: Face at 40% of frame OR product demonstration
  background: Contextual, uncluttered
  eye_path: Face → Text → Context

movement:
  type: [zoom_in | zoom_out | pan | snap_cut | static]
  timing: Movement in first 0.5 seconds
  purpose: Pattern interrupt

color_strategy:
  primary: [Based on platform and emotion]
  accent: High contrast for key elements
  consistency: Match brand guidelines if applicable
```

#### Step 3.3: Apply Audio Hook Design

```yaml
AUDIO HOOK COMPONENTS:

first_words:
  type: [command | question | statement | exclamation]
  examples:
    command: "Stop.", "Wait.", "Listen."
    question: "Can I?", "Why?", "What if?"
    statement: "This changed...", "The truth is..."
    exclamation: "Finally!", "Yes!", "Wow!"

delivery:
  energy_level: [high | medium | whisper]
  pace: Varies by platform (TikTok fastest, VSL slowest)
  emphasis: Stress on key words

sound_design:
  music: [trending | branded | none]
  effects: Impact sounds at key moments
  volume: Consider mute-ready design

mute_ready_check:
  - [ ] Visual is self-explanatory
  - [ ] Text overlay carries message
  - [ ] Emotion readable from expression
  - [ ] Value proposition visible
```

#### Step 3.4: VSL Extended Hook Structure

For VSLs, follow extended timeline:

```yaml
VSL_HOOK_TIMELINE:

0-5s: PATTERN INTERRUPT
  - Visual or audio stop
  - Bold opening statement/question

5-15s: QUALIFICATION
  - "If you're [avatar]..."
  - "This is specifically for..."
  - Self-select right viewers

15-30s: BIG IDEA TEASE
  - Introduce mechanism name
  - Hint at unique approach
  - Create curiosity gap

30-45s: CREDIBILITY ESTABLISHMENT
  - Result proof hint
  - Authority positioning
  - "Why listen to me?"

45-60s: WATCH PROMISE
  - What they'll learn
  - Why it matters
  - Time expectation
```

### Phase 4: Quality Validation

#### Step 4.1: Platform Checklist

**TikTok Hook Checklist:**
- [ ] Works without sound (text overlay sufficient)
- [ ] Native/organic feel (doesn't look like an ad)
- [ ] Text overlay present and readable
- [ ] First 1 second has stopping power
- [ ] Trend-aware (uses current formats if relevant)
- [ ] Face visible (if personal brand)
- [ ] Vertical 9:16 format

**Instagram Reels Hook Checklist:**
- [ ] Higher production quality
- [ ] Aesthetic considerations met
- [ ] Clear value proposition
- [ ] Text overlay present
- [ ] Brand-appropriate tone
- [ ] Vertical format optimized

**YouTube Shorts Hook Checklist:**
- [ ] Clear topic in first 2 seconds
- [ ] Value promise explicit
- [ ] Quality matches YouTube standards
- [ ] Works as thumbnail still
- [ ] Educational bent (if appropriate)
- [ ] Subscribe CTA considered

**YouTube Ad Hook Checklist:**
- [ ] Beats 5-second skip impulse
- [ ] Qualifies right audience immediately
- [ ] Pattern interrupt in first 2 seconds
- [ ] Clear reason to keep watching
- [ ] Stakes established early
- [ ] Conversion path clear

**VSL Hook Checklist:**
- [ ] Big Idea named and teased
- [ ] Audience qualified in first 15 seconds
- [ ] Curiosity loop opened
- [ ] Credibility hinted
- [ ] Watch time promise given
- [ ] Multiple engagement points planned

#### Step 4.2: Psychological Trigger Verification

```yaml
TRIGGER_VERIFICATION:

For each hook, verify at least 2 triggers present:

- [ ] Pattern Interrupt: Does it stop the scroll?
- [ ] Curiosity Gap: Does it open a loop?
- [ ] Shock/Arousal: Does it surprise?
- [ ] Visual Intrigue: Does it catch the eye?
- [ ] Relatability: Does avatar see themselves?
- [ ] Value-First: Is benefit clear?
- [ ] Social Proof: Is credibility established?
```

#### Step 4.3: Read-Aloud Test

```
READ-ALOUD PROTOCOL:

1. Read hook aloud at intended pace
2. Time it (must fit platform window)
3. Check for:
   - Natural flow
   - Clear pronunciation
   - Appropriate energy
   - No tongue-twisters

4. Record yourself and listen back
5. Adjust for conversational delivery
```

### Phase 5: A/B Testing Plan

#### Step 5.1: Define Test Variables

```yaml
HOOK_TEST_VARIABLES:

high_priority:
  - Opening word/phrase
  - Text overlay presence/copy
  - Visual start (face vs. product vs. text)

medium_priority:
  - Hook formula type
  - Energy level
  - Hook length (3s vs. 5s vs. 8s)

low_priority:
  - Background music
  - Color scheme
  - Specific word choices
```

#### Step 5.2: Metrics to Track

```yaml
PRIMARY_METRICS:
  3_second_retention: "% who watch past 3s"
  hook_rate: "% who watch past hook portion"
  50_percent_completion: "% who watch half"
  full_completion: "% who watch entire video"

SECONDARY_METRICS:
  ctr: "Click-through rate on CTA"
  engagement: "Likes, comments, shares"
  watch_time: "Total accumulated view time"
  rewatch_rate: "% who rewatch portions"
```

#### Step 5.3: Test Protocol

```yaml
TESTING_PROTOCOL:

phase_1_hook_type_test:
  variants: 5 (different hook formulas)
  same_content: Yes
  duration: 48 hours minimum
  winner_criteria: Highest 3-second retention

phase_2_hook_optimization:
  variants: 3 (winning type variations)
  test_elements: Copy, visual, energy
  duration: 48 hours
  winner_criteria: Highest full completion

phase_3_scaling_test:
  action: Apply winning hook to similar content
  purpose: Verify formula is repeatable
  documentation: Add to swipe file
```

---

## Output Format

```yaml
format: markdown

sections:

  platform_strategy:
    description: Platform analysis and requirements

  avatar_calibration:
    description: Awareness level and trigger selection

  big_idea (if VSL/ads):
    description: Unique mechanism definition

  hook_variations:
    count: 5 minimum per platform
    format: Full text with visual/audio direction

  visual_direction:
    description: First frame, movement, text overlay specs

  audio_direction:
    description: Voice delivery, music, sound effects

  full_script_outline (if long-form):
    description: Hook + structure for full video

  ab_testing_plan:
    description: Variables, metrics, protocol

  quality_checklist:
    description: Platform-specific validation
```

---

## Copywriter Recommendations by Context

| Context | Copywriter | Why |
|---------|-----------|-----|
| VSL high conversion | Jon Benson | Invented VSL, curiosity loop master |
| Pattern interrupt mastery | Gary Halbert | Storytelling, pattern break pioneer |
| Big idea development | Todd Brown | Unique mechanism, differentiation |
| Awareness-calibrated hooks | Eugene Schwartz | 5 levels of awareness |
| Urgency and direct response | Dan Kennedy | Deadline-driven, action-focused |
| Casual, authentic content | Frank Kern | Approachable, real |
| Hypnotic flow | Joe Sugarman | Smooth transitions, engagement |
| Fascination-style hooks | Gary Bencivenga | Curiosity + specificity |

---

## Hook Swipe File

### Pattern Interrupt Hooks
```
"Stop."
"Wait—don't scroll."
"Okay, this is important."
"I need to tell you something."
"Delete everything you think you know."
"This isn't what you think."
"Forget everything you've heard about [topic]."
```

### Question Hooks
```
"Why does [problem] keep happening?"
"What if I told you [surprising truth]?"
"Have you ever wondered why [mystery]?"
"Did you know that [statistic]?"
"Want to know the real reason [outcome]?"
"Can I be honest with you for a second?"
"What if [belief] is completely wrong?"
```

### Bold Claim Hooks
```
"I made [$amount] in [time]. Here's how."
"This one thing 10x'd my results."
"[Number]% of people are doing this wrong."
"The real reason you're stuck is..."
"I cracked the code on [topic]."
"[Result] in [time]—and I can prove it."
```

### Story Hooks
```
"[Time] ago, I was [struggle]. Today, [success]."
"Let me tell you about the worst mistake I made."
"I almost gave up. Then this happened."
"Nobody tells you about the dark side of [topic]."
"Here's what [expert] taught me in private."
"On [date], everything changed..."
```

### Contrarian Hooks
```
"Everything you learned about [topic] is wrong."
"[Common advice] is actually hurting you."
"The 'experts' are lying to you about [topic]."
"Stop doing [common practice]. Here's why."
"[Popular thing] is overrated. Try this instead."
"What if [conventional wisdom] is backwards?"
```

### Curiosity Hooks
```
"There's ONE thing that separates [winners] from [losers]."
"The secret [industry] doesn't want you to know."
"What happens next will surprise you."
"I discovered something 99% don't know about."
"The hidden reason behind [outcome]..."
"Watch until the end—it's not what you expect."
```

### Specificity Hooks
```
"$147,382 in 23 days using [method]."
"From 0 to 100,000 followers in 6 months."
"87% of [avatars] are making this mistake."
"3 steps. 15 minutes. Complete transformation."
"[Exact number] [results] in [exact timeframe]."
```

### Social Proof Hooks
```
"[Number] people have already [result]."
"Join [number] [avatars] who discovered [secret]."
"Why [number] of [professionals] are switching to [method]."
"The approach that [authority] personally uses."
"What [number] successful [avatars] have in common."
```

---

## Quick Reference: Hook Formulas Summary

```
PATTERN INTERRUPT:  "Pare. [Provocação]."
BOLD CLAIM:         "[Resultado] em [tempo]. Vou provar."
QUESTION:           "Por que [maioria] [falha] enquanto [minoria] [sucede]?"
STORY:              "Há [tempo], eu estava [antes]. Hoje [depois]."
CONTRARIAN:         "Tudo sobre [tema] está errado. Aqui está a verdade."
CURIOSITY:          "A única coisa que separa [sucesso] de [fracasso]..."
IF-THEN:            "Se você [situação], os próximos [tempo] mudam tudo."
SPECIFICITY:        "[Número exato] [resultado] em [período exato]."
SOCIAL PROOF:       "[Número] de [avatares] já [resultado]. Você é o próximo."
ENEMY:              "[Sistema] quer que você continue [problema]."
DEMONSTRATION:      "Olha isso..." [Mostra resultado] "Vou ensinar como."
VALUE-FIRST:        "Em [tempo], vou te ensinar [habilidade]. Sem enrolação."
```

---

## Video Structure Post-Hook

After the hook captures attention, maintain engagement:

```
HOOK (0-5s)
↓
QUALIFICAÇÃO (5-15s)
"Isso é para você se..."
↓
PROBLEMA/DOR (15-45s)
Agite o problema
↓
SOLUÇÃO/BIG IDEA (45-90s)
Apresente o mecanismo
↓
PROVA (90-120s)
Depoimentos, números
↓
OFERTA (120-180s)
O que recebe, preço
↓
CTA (180s+)
O que fazer agora
```

---

## Related Tasks

- `diagnose-awareness-level.md` - Calibrate hooks to awareness
- `vsl-script.md` - Full VSL creation
- `create-ad-copy.md` - Ad copy with hooks
- `create-ad-script.md` - Video ad scripts

---

## Related Checklists

- `video-hook-quality-checklist.md` - Validation
- `platform-compliance-checklist.md` - Platform rules

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024 | Initial task |
| 2.0 | 2026-01-23 | Complete rewrite with research framework, platform-specific strategies, psychological triggers |

---

*Task Version: 2.0.0*
*Copy Framework v2.0 - Elite Copywriting Squad*
*Research Source: docs/research/video-hook-methodology-research.md*

---

# ═══════════════════════════════════════════════════════════════════════════
# HORMOZI FRAMEWORK - EXTRAÍDO DOS ARTIFACTS MMOS
# Data: 2026-01-23 | Enrichment Phase ENR-004
# ═══════════════════════════════════════════════════════════════════════════

## Hormozi Hook Patterns

> **Fonte:** `02_VALUE_EQUATION_ENGINE.md`, `01_FRAMEWORKS_OPERACIONAIS.md`

### Value Equation Aplicada a Video Hooks

A mesma equação que maximiza valor de ofertas também define hooks eficazes:

```
Valor do Hook = (Dream Outcome × Perceived Likelihood)
                ÷ (Time Delay × Effort Required)
```

**Tradução para Hooks:**
- **Dream Outcome:** A transformação prometida no hook
- **Perceived Likelihood:** Provas e especificidade que geram crença
- **Time Delay:** Quão rápido o viewer sente que conseguirá o resultado
- **Effort:** Quão fácil parece alcançar o resultado

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 2]

### Enquadramento por Status (Hook Tática Mestra)

O princípio mais poderoso do Hormozi aplicado a hooks:

> "As pessoas não compram produtos; elas compram um futuro melhor. O Resultado dos Sonhos está fundamentalmente ligado ao **aumento de status** percebido."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.1]

**Aplicação em Hooks:**

| Hook Fraco (Benefício Direto) | Hook Forte (Enquadramento de Status) |
|------------------------------|-------------------------------------|
| "Aprenda a fazer mais vendas" | "Seus concorrentes vão perguntar o que você fez diferente" |
| "Perca 10kg em 30 dias" | "Todos vão perguntar: 'O que você fez?'" |
| "Ganhe mais dinheiro" | "Imagine a cara do seu chefe quando você sair" |

**Template de Hook por Status:**
```
"Quando você [resultado], [pessoas] vão [reação de status]...
eles vão perguntar [pergunta de curiosidade]...
só você vai saber [o segredo]."
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.1]

### Hooks de Especificidade (Precificação por Nicho)

O framework de precificação por nicho do Hormozi se aplica a hooks:

> "A especialização permite cobrar preços exponencialmente mais altos... o valor percebido aumenta com a relevância."
> [Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.2]

| Hook Genérico (Baixo Engagement) | Hook Hiper-Específico (Alto Engagement) |
|----------------------------------|----------------------------------------|
| "Dicas para empreendedores" | "Para coaches que faturam entre $10k-$30k/mês" |
| "Como ter mais clientes" | "3 estratégias para advogados B2B fecharem contratos de $50k+" |
| "Melhore seu marketing" | "O sistema que agências de tráfego usam para ROAS 5:1+" |

**Fórmula de Hook Específico:**
```
"Se você é [AVATAR ULTRA-ESPECÍFICO] que quer [RESULTADO ESPECÍFICO]..."
```

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.2]

### Hooks de Prova Social (Probabilidade Percebida)

> "As pessoas pagam por **certeza**. Uma promessa ousada sem prova gera ceticismo."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.2]

**Hooks com Números Específicos:**
```
"$147,382 em 23 dias usando este método."
"De 0 a 100.000 seguidores em 6 meses."
"87% dos coaches estão cometendo este erro."
"3 passos. 15 minutos. Transformação completa."
```

**Hooks com Prova de Resultado:**
```
"O sistema exato que gerou $12M+ para meus clientes."
"Isso funcionou para 500+ negócios - aqui está o padrão."
"ROAS de 36:1. Aqui está como."
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.2]

### Hooks de "Rápido Supera Grátis"

> "A diminuição do atraso temporal, tanto real quanto percebido, aumenta exponencialmente o valor."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.3]

**Hooks de Velocidade:**
```
"Nos próximos 60 segundos, vou te mostrar..."
"Uma mudança. Resultados em 24 horas."
"O atalho que leva 3 minutos para implementar."
"Vitória rápida: faça isso HOJE."
```

**Hooks de Imediatismo:**
```
"Você pode usar isso AGORA MESMO."
"Resultado instantâneo. Sem espera."
"Comece a ver diferença ainda hoje."
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.3]

### Hooks de Baixo Esforço (DFY/DWY)

> "O valor aumenta drasticamente à medida que se move de 'Faça Você Mesmo' para 'Feito Com Você' e 'Feito Para Você'."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.4]

**Hooks de Facilidade:**
```
"Copie e cole. Nada mais."
"Eu fiz todo o trabalho difícil por você."
"Zero esforço. Resultados máximos."
"A versão preguiçosa de [resultado]."
```

**Hooks de Simplicidade:**
```
"UMA única coisa que muda tudo."
"O método mais simples que já vi."
"Esqueça tudo que você aprendeu - isso é mais fácil."
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.4]

### Hooks "Grand Slam" (5 Componentes)

Uma Grand Slam Offer combina 5 elementos. Um hook pode enfatizar qualquer um:

| Componente | Exemplo de Hook |
|------------|-----------------|
| **Promoção Atraente** | "A única oferta que existe para [avatar específico]" |
| **Proposta Incomparável** | "Ninguém mais está fazendo isso assim" |
| **Preço Premium Justificado** | "Por que cobro 10x mais (e meus clientes agradecem)" |
| **Garantia Imbatível** | "Se não funcionar, eu te pago $1000 do meu bolso" |
| **Modelo de Dinheiro** | "Como sou pago para adquirir novos clientes" |

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 3.3]

### Hook Framework: More. Better. Different.

Aplique a estratégia de aquisição do Hormozi para criar hooks:

| Estratégia | Tipo de Hook |
|------------|--------------|
| **MAIS** | "Faça mais do que já funciona - aqui está o que funciona" |
| **MELHOR** | "O mesmo método, 10x mais eficiente" |
| **DIFERENTE** | "Esqueça tudo isso - aqui está o que realmente funciona" |

**Hooks "DIFERENTE" (mais virais):**
```
"Tudo que você aprendeu sobre [tema] está errado."
"Enquanto todos fazem X, os top 1% fazem Y."
"O método que 'eles' não querem que você saiba."
```

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.5]

### Hooks C.L.O.S.E.R. para Vídeos de Vendas

Adapte o framework de vendas para hooks de VSL:

| Letra | Hook Correspondente |
|-------|-------------------|
| **C - Clarify** | "Se você está aqui, é porque quer [resultado]..." |
| **L - Label** | "Você está travado em [problema específico], certo?" |
| **O - Overview** | "Você já tentou [solução comum] e não funcionou..." |
| **S - Sell** | "O que vou mostrar é diferente de tudo que você viu." |
| **E - Explain** | "E vou te explicar EXATAMENTE por que funciona." |
| **R - Reinforce** | "Isso já funcionou para [número] pessoas como você." |

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 6.1]

### Swipe File de Hooks Hormozi-Style

**Hooks de Value Equation:**
```
"O que eu vou te mostrar aumenta [resultado] enquanto diminui [esforço]."
"Resultado dos sonhos. Zero esforço. Aqui está como."
"10x o resultado em 1/10 do tempo."
"A forma mais rápida e fácil de [resultado] que eu conheço."
```

**Hooks de Status:**
```
"Seus amigos vão perguntar o que mudou."
"O método que vai fazer você parecer genial."
"Quando seu chefe descobrir o que você fez..."
"Todos vão querer saber seu segredo."
```

**Hooks de Especificidade:**
```
"Para [avatar ultra-específico] que querem [resultado específico]."
"Se você faz entre [X] e [Y] por mês, preste atenção."
"Isso é APENAS para quem [critério de qualificação]."
"Não funciona para todo mundo - só para [tipo específico]."
```

**Hooks de Prova:**
```
"[Número exato] em [período exato] usando [método]."
"Taxa de sucesso de [X]% com mais de [Y] clientes."
"De [resultado ruim] para [resultado bom] em [tempo]."
"Isso gerou [resultado específico] - vou provar."
```

**Hooks de Garantia/Risco Zero:**
```
"Se não funcionar, você não paga nada."
"Eu assumo todo o risco. Você só ganha."
"Garantia: [resultado específico] ou dinheiro de volta."
"Zero risco para você. Todo o risco é meu."
```

### Checklist Hormozi para Video Hooks

Antes de gravar, verifique se seu hook tem:

- [ ] **Dream Outcome Claro:** A transformação está explícita nos primeiros 3 segundos?
- [ ] **Enquadramento de Status:** Conecta o resultado a como outros verão o viewer?
- [ ] **Especificidade:** Avatar e resultado são ultra-específicos?
- [ ] **Prova:** Há números, resultados ou credenciais mencionadas?
- [ ] **Velocidade:** Promete resultado rápido ou vitória imediata?
- [ ] **Facilidade:** Parece fácil de implementar/alcançar?
- [ ] **Incomparabilidade:** Diferencia de tudo que existe no mercado?

---

*Hormozi Framework Enrichment - ENR-004*
*Fontes: 01_FRAMEWORKS_OPERACIONAIS.md, 02_VALUE_EQUATION_ENGINE.md*
*Data da Extração: 2026-01-23*
