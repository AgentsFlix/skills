# hybrid-fundador · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-fundador.md` uma skill chamada hybrid-fundador. Quando eu pedir algo como "extrai meu DNA de fundador", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# DNA DO FUNDADOR · História, crenças, estilo de decisão e o que não negocia

O negócio herda o fundador: as crenças, o jeito de decidir, o que ele nunca faria. Esta skill extrai isso em entrevista estruturada e grava no founder-dna.yaml, o arquivo que a copy, a marca e a cultura consultam para não soar como outra pessoa.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "extrai meu DNA de fundador".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit founder dna | `references/elicit-founder-dna.md` |
| template que esta skill preenche | `templates/company-founder-dna.yaml` |


## Procedure

1. Resolva a pasta: `hybrid.pasta`. Se não existir, crie. Para cada template listado acima que ainda não exista na pasta, copie-o de `templates/` para a pasta com o nome original (ex.: `company-icp.yaml` → `icp.yaml`).
2. Abra a referência do procedimento e siga as fases na ordem. Onde ela escrever `{pasta}/…`, leia a pasta configurada. Onde ela citar um comando `*algo` ou um script `.cjs`/`.sh`, trate como nome da etapa, não como algo a executar.
3. Conduza a elicitação em blocos: apresente o resumo do que já está preenchido, pergunte só o que falta, aceite 'não sei ainda' e deixe `null`. Nunca preencha com suposição.
4. Grave o YAML na pasta, preservando a estrutura do template. Calcule a completude: campos preenchidos ÷ campos obrigatórios; atualize `metadata.completeness_percentage` e `status`.
5. Se a completude ficou abaixo de 85%, diga quais seções faltam e o que perguntar na próxima sessão. Não declare o arquivo pronto.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pular o Diagnosis Gate quando a referência o pede. O nível de consciência muda todas as perguntas seguintes.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O YAML existe na pasta configurada e parseia (`python3 -c 'import yaml,sys; yaml.safe_load(open(sys.argv[1]))' <arquivo>` sai 0).
2. `metadata.completeness_percentage` foi recalculado e bate com a contagem de campos não-nulos.
3. Nenhum campo obrigatório foi preenchido com valor que o usuário não deu; os pendentes estão em `null` e listados.
4. Se abaixo de 85%, a resposta diz as seções faltantes e não declara pronto.
5. Nenhum dado foi enviado para fora da pasta do negócio.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/elicit-founder-dna.md`
- `templates/company-founder-dna.yaml`


---

## Referência: references/elicit-founder-dna.md

# Task: Elicit Founder DNA (YAML)

```yaml
task:
  id: elicit-founder-dna
  name: Elicitação do DNA do Fundador (YAML)
  agent: vision-strategist
  elicit: true
  output_format: yaml
  target_template: company/founder-dna.yaml
```

## Descrição

O Vision Chief (CEO) conduz uma entrevista profunda para extrair o DNA do fundador — quem é essa pessoa, sua jornada, filosofia, estilo de comunicação e legado. O output popula o template `founder-dna.yaml`.

## Prerequisites

- Bootstrap executado
- Negócio criado e templates scaffolded
- Recomendado: `company-profile.yaml` já preenchido (para contexto)

## Usage

```
*elicit-founder-dna {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/company/founder-dna.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/company-profile.yaml` (se existir) para contexto sobre a empresa.
3. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Essência do Fundador (7 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Essência do Fundador"
  questions:
    - id: legal_name
      text: "Qual é seu nome completo (legal)?"
      required: true
      maps_to: founder_essence.legal_name

    - id: professional_name
      text: "Como você é conhecido profissionalmente? (nome que usa no marketing)"
      required: true
      maps_to: founder_essence.professional_name

    - id: age
      text: "Qual sua idade?"
      required: true
      maps_to: founder_essence.age

    - id: location
      text: "Onde você mora? (cidade, país)"
      required: true
      maps_to: founder_essence.location

    - id: nationality
      text: "Qual sua nacionalidade?"
      required: true
      maps_to: founder_essence.nationality

    - id: one_liner
      text: "Em uma frase, quem é você profissionalmente? (ex: 'Consultor de 15 anos que transformou frustração em método para escalar negócios')"
      required: true
      maps_to: founder_essence.one_liner

    - id: archetype
      text: "Se tivesse que escolher um arquétipo para se descrever, qual seria? (O Mentor, O Cientista, O Pioneiro, O Estrategista, O Construtor, outro?)"
      required: true
      maps_to: founder_essence.archetype
```

### Fase 2: Origin Story - Os 4 Atos (8 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Origin Story"
  intro: |
    Vamos reconstruir sua jornada em 4 atos. Isso não é só biografia —
    é a narrativa que conecta sua experiência com a autoridade que você tem hoje.
  questions:
    - id: act1_timeline
      text: "ATO 1 - O ANTES: Qual período da sua vida é o 'antes'? (ex: 2005-2010). O que você fazia e qual era sua situação?"
      required: true
      maps_to: origin_story.act_1_before

    - id: act1_challenge
      text: "Qual era o maior desafio ou frustração desse período? O que te incomodava profundamente?"
      required: true
      maps_to: origin_story.act_1_before.challenge

    - id: act2_turning_point
      text: "ATO 2 - O PONTO DE VIRADA: O que mudou? Qual insight, evento ou decisão marcou a transição?"
      required: true
      maps_to: origin_story.act_2_turning_point

    - id: act2_action
      text: "O que você fez de diferente depois desse insight? Que ação concreta tomou?"
      required: true
      maps_to: origin_story.act_2_turning_point.action

    - id: act3_breakthrough
      text: "ATO 3 - O BREAKTHROUGH: Quando você percebeu que tinha algo valioso que outros precisavam? Qual foi o momento de virada para expert/autoridade?"
      required: true
      maps_to: origin_story.act_3_breakthrough

    - id: act3_proof
      text: "Quais foram as primeiras provas de que seu método funcionava? (resultados, depoimentos, números)"
      required: true
      maps_to: origin_story.act_3_breakthrough.proof

    - id: act4_present
      text: "ATO 4 - O PRESENTE: Quem é você hoje? Como divide seu tempo? Qual é seu papel atual?"
      required: true
      maps_to: origin_story.act_4_present

    - id: act4_legacy
      text: "O que você está construindo para o longo prazo? Qual legado quer deixar?"
      required: false
      maps_to: origin_story.act_4_present.legacy_building
```

### Fase 3: Background Profissional (6 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Background Profissional"
  questions:
    - id: starting_point
      text: "Qual foi seu primeiro papel profissional relevante? (ano, cargo, empresa, o que aprendeu)"
      required: true
      maps_to: professional_background.starting_point

    - id: milestones
      text: "Liste os 3 marcos mais importantes da sua carreira. Para cada um: ano, evento, por que é significativo."
      required: true
      maps_to: professional_background.career_milestones

    - id: years_experience
      text: "Quantos anos de experiência no total? E como se divide? (ex: 10 em consultoria, 5 em ensino, 3 em empreendedorismo)"
      required: true
      maps_to: professional_background.years_of_experience

    - id: expertise_areas
      text: "Quais são suas 3 maiores áreas de expertise? (ex: sistemas operacionais, scaling, gestão)"
      required: true
      maps_to: professional_background.expertise_areas

    - id: deepest
      text: "Qual é seu conhecimento mais profundo — aquilo que você sabe melhor do que quase qualquer pessoa?"
      required: true
      maps_to: professional_background.deepest_expertise

    - id: credibility
      text: "Quais são suas 3-4 maiores provas de credibilidade? (resultados, números, reconhecimento)"
      required: true
      maps_to: credibility_foundation
```

### Fase 4: Filosofia e Worldview (6 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Filosofia e Worldview"
  questions:
    - id: belief_1
      text: "Qual é sua crença mais forte sobre sua área de atuação? (ex: 'Sistemas vencem talento sempre')"
      required: true
      maps_to: philosophy.core_belief_1

    - id: belief_2
      text: "Qual é a segunda crença fundamental que guia seu trabalho?"
      required: true
      maps_to: philosophy.core_belief_2

    - id: belief_3
      text: "E a terceira crença — algo que muitos discordariam?"
      required: false
      maps_to: philosophy.core_belief_3

    - id: worldview
      text: "Qual é sua visão de mundo sobre sua área? Se tivesse que resumir em um parágrafo, como pensa sobre o tema?"
      required: true
      maps_to: philosophy.worldview

    - id: contrarian
      text: "Qual é sua visão contrária — algo que você acredita mas a maioria do mercado discorda?"
      required: true
      maps_to: philosophy.contrarian_view

    - id: teaching_philosophy
      text: "Como você ensina? Qual é seu princípio fundamental de ensino? O que enfatiza e o que evita?"
      required: true
      maps_to: teaching_philosophy
```

### Fase 5: Personalidade e Comunicação (4 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Personalidade e Comunicação"
  questions:
    - id: communication_style
      text: "Como você se comunica? (direto, analítico, storytelling, provocador, etc.)"
      required: true
      maps_to: founder_narrative

    - id: tone
      text: "Qual é o tom da sua comunicação? (ex: caloroso mas direto, técnico mas acessível)"
      required: true
      maps_to: founder_narrative

    - id: signature_phrases
      text: "Você tem frases características? Expressões que sempre usa?"
      required: false
      maps_to: founder_narrative

    - id: interaction_style
      text: "Como você interage com alunos/clientes? (mão na massa, coaching, provocativo, suporte, etc.)"
      required: false
      maps_to: teaching_philosophy
```

### Fase 6: Evolução e Futuro (4 perguntas)

```yaml
elicitation:
  phase: 6
  name: "Evolução e Futuro"
  questions:
    - id: studying
      text: "O que você está estudando atualmente? Que assuntos te fascinam?"
      required: false
      maps_to: professional_background

    - id: testing
      text: "O que você está testando ou experimentando no momento?"
      required: false
      maps_to: professional_background

    - id: recent_evolution
      text: "Como você evoluiu nos últimos 2-3 anos? O que mudou na sua forma de pensar ou atuar?"
      required: false
      maps_to: origin_story.act_4_present

    - id: future_focus
      text: "Para onde você está caminhando nos próximos 3-5 anos? Que direção sua carreira/negócio está tomando?"
      required: false
      maps_to: origin_story.act_4_present
```

### Fase 7: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `founder-dna.yaml`:**
   - Campos respondidos: substituir placeholders pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` se todos preenchidos, `INCOMPLETE` caso contrário.
3. **Gerar `founder_narrative`** automaticamente a partir das respostas:
   - headline: sintetizar a jornada em uma frase
   - hook: extrair do Ato 1 a frustração/desafio
   - narrative_structure: montar a partir dos 4 atos
4. **Calcular completude:**
   ```yaml
   metadata:
     status: "COMPLETE" or "INCOMPLETE"
     last_updated: "{date}"
   ```
5. **Salvar** em `{pasta}/company/founder-dna.yaml`.
6. **Relatório:**
   ```
   Founder DNA para: {slug}

   Seções:
     founder_essence: COMPLETE ✅
     origin_story: COMPLETE ✅
     professional_background: COMPLETE ✅
     philosophy: COMPLETE ✅
     teaching_philosophy: COMPLETE ✅
     founder_narrative: SINTETIZADO ✅

   Completude: 92% (82/89 campos)
   Gate: PASSED ✅ (>= 85%)
   ```

## Convenções de Output YAML

- Campos respondidos: substituir placeholders pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Metadata: atualizar `status` e `last_updated`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Todas as perguntas obrigatórias respondidas
- [ ] YAML gerado é válido
- [ ] Estrutura idêntica ao template source
- [ ] Origin story tem os 4 atos preenchidos
- [ ] Founder narrative sintetizada automaticamente
- [ ] Arquivo salvo em `{pasta}/company/founder-dna.yaml`

## Next Steps

Após founder-dna:
1. `*elicit-credentials {slug}` - Credenciais e provas de autoridade
2. Ou `*setup-business-profile {slug}` para pipeline completo

---

*Task do Squad Hybrid Workspace - Vision Chief (CEO)*


---

## Referência: templates/company-founder-dna.yaml

---
# FOUNDER-DNA.YAML - Quem é o fundador/especialista
# Purpose: Document the founder's background, expertise, philosophy, teaching style
# Guardian: Founder / CEO / Head of Marketing
# Timing: FILL ONCE (detailed) - Update when major milestones happen

metadata:
  version: "1.0"
  company_name: "YOUR_COMPANY_NAME_HERE"
  founder_name: "YOUR_FOUNDER_NAME_HERE"
  status: "INCOMPLETE"
  last_updated: "FILL_THIS"
  owner: "Founder or CEO"
  notes: |
    This file answers: "Who is YOUR_FOUNDER?"
    Not about Academy Lendária as institution.
    About the human behind it - his journey, philosophy, authority.
  product_name: FILL_THIS
# ============================================================================
# SECTION 1: FOUNDER ESSENCE
# ============================================================================
founder_essence:
  # Who is this person at their core?
  legal_name: "YOUR_FULL_NAME"
  professional_name: "NAME AS USED IN MARKETING"
  age: X
  location: "CITY, COUNTRY"
  nationality: "[NATIONALITY]"
  # One-sentence founder positioning
  one_liner: |
    Example: "YOUR_FOUNDER is a 15-year veteran consultant who transformed
    himself from practitioner to movement builder, teaching 1,000+ entrepreneurs
    how to systematize their way to scale."

    Your version:
    [YOUR ONE LINER]
  # Founder archetype (for personality)
  archetype: |
    Example: "The Pragmatic Mentor" (not guru, not cheerleader)

    Options: The Mentor, The Pioneer, The Scientist, The Storyteller, etc.
    Your version:
    [YOUR ARCHETYPE]
# ============================================================================
# SECTION 2: THE ORIGIN STORY (Personal Journey)
# ============================================================================
origin_story:
  # How did this person become who they are?
  act_1_before:
    # Who were they before?
    timeline: "2005-2010"
    situation: |
      Example: "Young consultant, hungry to prove himself. Started at a boutique
      consulting firm in São Paulo, working with small and medium businesses."
    challenge: |
      Example: "Frustrated by seeing smart entrepreneurs fail despite his advice.
      They had great ideas but no systems to execute."
    emotional_state: "Ambitious but feeling ineffective"
  act_2_turning_point:
    # What changed?
    timeline: "2010-2015"
    insight: |
      Example: "Alan noticed that the entrepreneurs who succeeded had ONE thing
      in common: they operated by frameworks, not intuition.
      He decided to become an expert in 'how to scale'."
    action: |
      Example: "Spent 5 years studying systemization, operations, management science.
      Became obsessed with finding the patterns that made businesses predictable."
    result: "Shifted from being a consultant to being a systems architect"
  act_3_breakthrough:
    # When did they become the expert?
    timeline: "2015-2020"
    breakthrough: |
      Example: "Realized that what he knew was rare - most people taught motivation
      or theory, not proven systems. Started teaching friends."
    proof: |
      Example: "First students got results: 2x revenue, 50% time saved.
      They asked him to formalize it. YOUR_COMPANY was born."
    transformation: "From consultant to educator and movement builder"
  act_4_present:
    # Who are they now?
    timeline: "2020-Present"
    current_role: |
      Example: "Founder, Teacher, Movement Builder. Alan now spends time:
      - Teaching 1,000+ entrepreneurs annually
      - Creating frameworks
      - Building the brand of 'systems first' thinking"
    legacy_building: |
      Example: "Building YOUR_COMPANY to outlive him.
      Training other teachers. Packaging knowledge for scale."
# ============================================================================
# SECTION 3: PROFESSIONAL BACKGROUND & EXPERTISE
# ============================================================================
professional_background:
  # What is their qualification to teach?
  starting_point:
    year: YYYY
    role: "FIRST PROFESSIONAL ROLE"
    company: "[COMPANY NAME]"
    duration: "X years"
    key_learnings: |
      [WHAT DID THEY LEARN]
  career_milestones:
    milestone_1:
      year: YYYY
      event: "[MAJOR CAREER EVENT]"
      significance: "[WHY THIS MATTERS]"
      skills_gained: "[WHAT THEY LEARNED]"
    milestone_2:
      year: YYYY
      event: "[MAJOR CAREER EVENT]"
      significance: "[WHY THIS MATTERS]"
      skills_gained: "[WHAT THEY LEARNED]"
    milestone_3:
      year: YYYY
      event: "[MAJOR CAREER EVENT]"
      significance: "[WHY THIS MATTERS]"
      skills_gained: "[WHAT THEY LEARNED]"
  years_of_experience:
    total_years: X
    in_consulting: X
    in_entrepreneurship: X
    in_teaching: X
  expertise_areas:
    # What are they an expert in?
    area_1: "Systems & Operational Excellence"
    area_2: "Business Scaling"
    area_3: "[YOUR EXPERTISE]"
  deepest_expertise: |
    Example: "Systems thinking. How to take chaos and make it predictable.
    Alan has built 3 businesses from zero to 7-figures using systemization."
# ============================================================================
# SECTION 4: CREDIBILITY PROOF POINTS
# ============================================================================
credibility_foundation:
  # Why should people trust this founder?
  proof_1:
    category: "RESULTS PROOF"
    claim: "15 years building and scaling businesses"
    evidence:
      - "[SPECIFIC COMPANY] - scaled from $0 to $X"
      - "[SPECIFIC COMPANY] - achieved X outcome"
    quantifiable: "15 years, 3+ successful exits"
  proof_2:
    category: "STUDENT RESULTS PROOF"
    claim: "1,000+ students with documented results"
    evidence:
      - "Average student increases revenue 2-3x in first year"
      - "87% report feeling less overwhelmed within 90 days"
    quantifiable: "1,000+ students, 84% success rate"
  proof_3:
    category: "INFLUENCE PROOF"
    claim: "Recognized expert in entrepreneurial education"
    evidence:
      - "Speaks on [X] conferences"
      - "[X] media appearances"
      - "[X] published works"
    quantifiable: "[NUMBER] public appearances, [NUMBER] articles"
  proof_4:
    category: "PRACTITIONER PROOF"
    claim: "Not just a teacher - actively building businesses"
    evidence:
      - "Founder of YOUR_COMPANY (actively running it)"
      - "[OTHER BUSINESS INVOLVEMENT]"
    quantifiable: "Currently running [X] successful ventures"
# ============================================================================
# SECTION 5: FOUNDER PHILOSOPHY & WORLDVIEW
# ============================================================================
philosophy:
  # How does this founder think?
  core_belief_1:
    belief: "Systems beat talent every time"
    why_believes_this: |
      Example: "Saw brilliant people fail without systems.
      Saw ordinary people succeed with systems. Data convinced him."
    how_it_shapes_teaching: |
      Example: "Every course teaches frameworks, not motivation.
      Assumes students are smart. Teaches them to be systematic."
  core_belief_2:
    belief: "Entrepreneurs are exhausted by noise, not lack of ideas"
    why_believes_this: |
      Example: "Every founder he meets has more ideas than execution capacity.
      Problem isn't MORE ideas. It's choosing and executing ONE well."
    how_it_shapes_teaching: |
      Example: "Teaches ruthless prioritization. Teaches focus.
      Teaches that systems CREATE space for strategy."
  core_belief_3:
    belief: "[YOUR BELIEF]"
    why_believes_this: "[WHY]"
    how_it_shapes_teaching: "[HOW]"
  worldview: |
    Example: "Entrepreneurship is 80% systems, 20% hustle.
    Most founders have the 20% but no 80%.
    My job is to teach the 80%."
  contrarian_view: |
    Example: "The hustle culture is a trap.
    You don't need to work harder.
    You need to work systematically.
    Systems amplify effort, not replace it."
# ============================================================================
# SECTION 6: TEACHING PHILOSOPHY & STYLE
# ============================================================================
teaching_philosophy:
  # How does this founder teach?
  core_teaching_principle: |
    Example: "Teach what works. Show your work.
    Assume student intelligence. Remove fluff."
  approach:
    # What's unique about how they teach?
    method_1: "Learn from my failures, not just successes"
    method_2: "Show the actual framework, not motivation"
    method_3: "Hands-on practice, not passive consumption"
  what_they_emphasize:
    - "Proof over promises"
    - "Systems over inspiration"
    - "Action over theory"
  what_they_avoid:
    - "Motivational fluff"
    - "Theoretical frameworks without application"
    - "One-size-fits-all solutions"
  student_transformation:
    from_state: "Overwhelmed entrepreneur with no system"
    to_state: "Systematic builder with predictable results"
    timeline: "90-180 days"
  teaching_intensity: |
    Example: "No hand-holding. High expectations.
    Assumes student is committed and smart.
    Teaches at advanced level, not beginner."
# ============================================================================
# SECTION 7: FOUNDER STORY (FOR MARKETING USE)
# ============================================================================
founder_narrative:
  # The story you tell about the founder (externally)
  headline: |
    Example: "How a Frustrated Consultant Became the Systems Expert That
    1,000+ Entrepreneurs Now Turn To"
  narrative_structure:
    # Use this for marketing copy
    hook:
      opening: |
        Example: "YOUR_FOUNDER watched brilliant entrepreneurs fail for 15 years.
        Smart people. Driven people. Good ideas.
        But they kept hitting the same wall..."
      emotional_hook: "Frustration of being smart but ineffective"
    problem_he_saw:
      description: |
        Example: "Every failed entrepreneur had this in common:
        They had ideas, drive, and hustle.
        But they had NO SYSTEM."
    his_insight:
      insight: |
        Example: "One day, while reviewing 50 consulting clients,
        he saw the pattern clearly:
        The ones who succeeded weren't smarter or more driven.
        They just operated by proven systems, not intuition."
    his_action:
      action: |
        Example: "Alan spent 5 years studying operational excellence,
        systems thinking, and scalable business design.
        He tested every framework on his own businesses.
        Only kept what actually worked."
    the_result:
      result: |
        Example: "He started teaching. First 10 students got 2-3x results.
        Then 50. Then 100. Now 1,000+ entrepreneurs
        run systematic businesses because of his frameworks."
    the_promise:
      promise: |
        Example: "If you're tired of hustling without results,
        tired of having great ideas but poor execution,
        tired of feeling like you're missing the missing piece...
        Alan's systems can help."
# ============================================================================
# SECTION 8: FOUNDER PERSONALITY & COMMUNICATION STYLE
# ============================================================================
personality:
  # How does the founder come across?
  communication_style: |
    Example: "Direct, no-nonsense, results-focused. Doesn't use fluff.
    Speaks like someone who's been in the trenches."
  tone:
    primary: "Strategic mentor"
    secondary: "Pragmatic realist"
    avoid: "Guru-like, overly confident"
  signature_phrases:
    - "[PHRASE THEY OFTEN USE]"
    - "[PHRASE THEY OFTEN USE]"
    - "[PHRASE THEY OFTEN USE]"
  personality_traits:
    - "Pragmatic"
    - "Systems-oriented"
    - "Results-obsessed"
    - "Patient but direct"
  how_they_interact:
    with_students: "High expectations, clear feedback, strategic guidance"
    with_team: "Collaborative but decisive"
    with_media: "Educational, refuses hype"
# ============================================================================
# SECTION 9: FOUNDER'S UNIQUE POSITIONING (vs other educators)
# ============================================================================
unique_positioning:
  # What makes this founder different?
  vs_traditional_educators:
    their_approach: "Theory-first, student-applies-later"
    founder_approach: "Practice-first, theory-as-needed"
    unique_advantage: "Students get results before they finish course"
  vs_hype_gurus:
    their_approach: "Big promises, secret formulas, high-touch coaching"
    founder_approach: "Transparent systems, scalable teaching, proven frameworks"
    unique_advantage: "No BS. You know exactly what you're getting."
  vs_other_practitioners:
    their_approach: "Build one business successfully, teach it"
    founder_approach: "[YOUR DIFFERENTIATION]"
    unique_advantage: "[YOUR UNIQUE EDGE]"
  founder_unfair_advantage: |
    Example: "Started as a consultant, not a teacher.
    Spent 15 years inside businesses.
    Teaches from practitioner perspective, not academic."
# ============================================================================
# SECTION 10: FOUNDER WISDOM & QUOTES
# ============================================================================
signature_insights:
  # Key ideas the founder is known for
  insight_1:
    quote: |
      Example: "Systems beat talent every time.
      You can't out-hustle a good system."
    meaning: "Execution system > raw effort"
    application: "Taught in every course"
  insight_2:
    quote: "[YOUR SIGNATURE INSIGHT]"
    meaning: "[WHAT IT MEANS]"
    application: "[HOW USED IN TEACHING]"
  insight_3:
    quote: "[YOUR SIGNATURE INSIGHT]"
    meaning: "[WHAT IT MEANS]"
    application: "[HOW USED IN TEACHING]"
# ============================================================================
# SECTION 11: FOUNDER'S ONGOING LEARNING & EVOLUTION
# ============================================================================
continuous_evolution:
  # How does the founder stay sharp?
  what_they_study: |
    Example: "Studies 1 book per week on systems thinking, psychology, business.
    Reads primary sources on operations management.
    Interviews other experts constantly."
  how_they_test_ideas: |
    Example: "Tests every framework on his own businesses first.
    Only teaches what he's personally validated.
    Publicly iterates based on student feedback."
  recent_evolution: |
    Example: "Recently shifted from 'business systems' to 'life systems'.
    Realizing that systematic thinking applies beyond business.
    Now teaching founders how to systematize health, relationships, learning."
  future_focus: |
    Example: "Moving from 'how to scale' to 'how to scale without burnout'.
    Noticing that founders optimize for growth, not wellbeing.
    Next chapter is teaching sustainable scale."
# ============================================================================
# SECTION 12: FOUNDER REFERENCES & SOURCES
# ============================================================================
references:
  # How is founder documented elsewhere?
  company_file:
    - "company-profile.yaml"
  credentials_file:
    - "credentials.yaml"
  authority_story:
    - "authority-story.yaml"
  media_appearances:
    - "[INTERVIEW 1 - URL]"
    - "[INTERVIEW 2 - URL]"
  published_work:
    - "[BOOK/ARTICLE 1]"
    - "[BOOK/ARTICLE 2]"
# ============================================================================
# CHECKLIST: FOUNDER-DNA COMPLETENESS
# ============================================================================
completion_checklist:
  - "[ ] Founder name, background, and location documented"
  - "[ ] Origin story (4 acts) is compelling"
  - "[ ] Professional background shows credibility"
  - "[ ] Expertise areas are clear and specific"
  - "[ ] Core beliefs are documented with 'why'"
  - "[ ] Teaching philosophy is distinctive"
  - "[ ] Founder narrative is compelling (for marketing)"
  - "[ ] Unique positioning vs others is clear"
  - "[ ] Signature insights/quotes documented"
  - "[ ] Continuous evolution is apparent"
  - "[ ] All references to other files are updated"
# ============================================================================
# TEMPLATE NOTES FOR USERS
# ============================================================================
template_notes: |
  This file is about the FOUNDER as a person.

  DO put here:
  ├─ Personal journey and origin story
  ├─ Professional expertise and proof points
  ├─ Teaching philosophy and style
  ├─ Founder worldview and beliefs
  ├─ How founder communicates
  ├─ Founder's unique positioning

  DO NOT put here (use credentials.yaml instead):
  ├─ Specific educational credentials
  ├─ Award lists
  ├─ Certification details
  ├─ Media appearance lists (brief mentions ok, details in credentials.yaml)

  This file should answer: "Who IS this person and why should I trust them?"
  Not: "What are their 47 credentials?"

  Fill deeply once. Update when major life/business milestones happen.
