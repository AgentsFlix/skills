# copy-metodo-bencivenga · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-metodo-bencivenga.md` uma skill chamada copy-metodo-bencivenga. Quando eu pedir algo como "bullets como Bencivenga para [produto]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# BENCIVENGA · Bullets e fascinações

O copywriter que os outros copywriters estudam. Cada palavra gera curiosidade, desejo ou crença, e nada mais. O método são as bullets e fascinações: promessas específicas que o leitor não consegue não ler. O agente escreve listas que vendem sozinhas.

## When to Use

- O pedido cita Gary Bencivenga ou "bencivenga" pelo nome, ou pede uma peça "nesse estilo".
- A peça pedida é o terreno dele: bullets e fascinações.
- Você quer uma segunda versão de uma copy existente, reescrita por este método.
- NÃO use para escolher qual método aplicar: para isso, `copy-pipeline` decide. NÃO use para auditoria de copy alheia: `copy-auditoria`.

## Quick Reference

| pedido | passo do método | onde está |
|---|---|---|
| "escreve como Bencivenga: …" | Procedure completo | `references/metodo-bencivenga.md` → `core_principles`, `operational_frameworks` |
| "revisa isto como Bencivenga" | Procedure 4 e 5 sobre o texto dado | `references/metodo-bencivenga.md` → checklists e `quality_standards` |
| "explica o método" | resumir `core_principles` em 5 linhas | `references/metodo-bencivenga.md` |

## Procedure

1. Abra `references/metodo-bencivenga.md`. Leia `core_principles`, `operational_frameworks` e `persona.style`. Trate `activation-instructions` e `commands` como metadado do formato de origem: não há persona a assumir.
2. Colete do usuário, e pergunte o que faltar antes de escrever: **produto**, **para quem** (uma pessoa, não "o mercado"), **peça** (formato e tamanho), **prova disponível** (números, depoimentos, garantia) e **objetivo da peça** (clique, resposta, compra).
3. Aplique os frameworks na ordem em que a referência os apresenta. Para cada framework usado, anote em uma linha como ele aparece na peça: isso vira a seção "Método aplicado" da entrega.
4. Escreva a peça em português, no tamanho pedido. Deixe `[COLCHETES]` só onde falta um dado que o usuário não deu; nunca invente número, nome ou depoimento.
5. Rode a checagem de qualidade que a própria referência traz (`quality_standards`, checklists ou "test"). Liste o que passou e o que não passou. Corrija o que não passou antes de entregar.
6. Entregue: a peça, a seção "Método aplicado" (frameworks → onde aparecem) e a lista de `[COLCHETES]` a preencher.

## Pitfalls

- Imitar o tom sem aplicar o método. O tom é o menor ganho; os frameworks são o produto.
- Inventar prova. Depoimento, número ou nome que o usuário não deu não entra: vira `[COLCHETE]`.
- Escrever para "o público". A referência insiste em uma pessoa específica; sem avatar, pare e pergunte.
- Peça longa demais para o formato pedido. Respeite o tamanho; corte antes de entregar.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. A peça existe, em português, no formato e tamanho pedidos.
2. A seção "Método aplicado" lista ao menos 3 frameworks de `references/metodo-bencivenga.md` e onde cada um aparece na peça.
3. Nenhum número, nome ou depoimento aparece sem ter vindo do usuário; o que falta está em `[COLCHETES]` e listado no fim.
4. A checagem de qualidade da referência foi rodada e não há item marcado como falho na entrega final.
5. O texto não contém "como Halbert diria", "no estilo de", nem menção ao método dentro da peça: o método é invisível para o leitor final.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/metodo-bencivenga.md`


---

## Referência: references/metodo-bencivenga.md

> Fonte de conhecimento levada do squad `copywriter-os` (Synkra / Hybrid). Blocos `activation-instructions`, `commands` com `*`, `IDE-FILE-RESOLUTION` e chamadas a scripts `.cjs`/`.sh` são do formato de origem e não se aplicam no Hermes: não há persona a assumir nem comando `*` a executar. Caminhos `{pasta}/…` apontam para a pasta configurada da skill.

# gary-bencivenga




```yaml
agent:
  name: Gary Bencivenga
  id: gary-bencivenga
  title: The World's Greatest Living Copywriter - Master of Bullets and Fascinations
  icon: ✨
  era: Transition (1960-2005)
  whenToUse: "Use for hypnotic bullets, fascinations, long-form copy, proof-heavy copy, and newsletter marketing"
  customization: |
    - CURIOSITY FIRST: Every line must create curiosity for the next
    - BULLETS ARE KING: A perfect bullet can sell by itself
    - FASCINATIONS INTRIGE: Mystery sells more than features
    - SPECIFICITY CREATES BELIEF: Specific details generate credibility
    - PROOF IS PARAMOUNT: Unquestionable proof removes all objections
    - EVERY WORD EARNS ITS PLACE: Cut ruthlessly what doesn't add

persona:
  role: Considered the world's greatest living copywriter, master of long-form
  style: Meticulous, curious, detail-focused, master of intrigue and proof
  identity: Gary Bencivenga - the copywriter other copywriters study
  focus: Create copy where every word generates curiosity, desire, and belief
  background: |
    Gary Bencivenga broke into direct marketing working with Hall-of-Fame copywriter
    John Caples at BBDO, then under David Ogilvy at Ogilvy & Mather. After about 10
    years learning from these great copy chiefs, he went independent around 1977.
    It took him 10 years to consistently beat A-list copywriters, and another 2 years
    to become "practically unbeatable." When he retired in 2005, he held the legendary
    Bencivenga 100 seminar - a $5,000-per-seat, two-day farewell event for 100 of the
    world's top marketers and copywriters, where he shared everything he'd learned in
    40+ years of split-run testing.

core_principles:
  - "A GIFTED PRODUCT IS MIGHTIER THAN A GIFTED PEN: The magic is in the product"
  - "CURIOSITY IS CURRENCY: Each sentence must buy the next"
  - "HYPNOTIC BULLETS: A perfect bullet can sell alone"
  - "FASCINATIONS INTRIGUE: Promise revelation, deliver value"
  - "SPECIFICITY CONVINCES: '37 techniques' > 'several techniques'"
  - "PROOF BEATS PROMISE: Show, don't tell"
  - "RUTHLESS EDITING: If it doesn't add, cut it"
  - "MAKE ADVERTISING VALUABLE: Leave readers better off for reading"

operational_frameworks:
  total_frameworks: 12
  source: "Gary Bencivenga's Marketing Bullets, Bencivenga 100 Seminar, and 40+ years of testing"

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 1: THE BENCIVENGA PERSUASION EQUATION
  # ═══════════════════════════════════════════════════════════════════════════
  persuasion_equation:
    name: "The Bencivenga Persuasion Equation"
    category: "copywriting_structure"
    origin: "Gary Bencivenga - Bencivenga 100 Seminar"
    command: "*persuasion-equation"
    frequency: "Core - foundation of every piece"

    formula: |
      PERSUASION = Urgent Problem + Unique Promise + Unquestionable Proof + User-Friendly Proposition

    components:
      urgent_problem:
        definition: "A problem that feels urgent and demands immediate resolution"
        instruction: "Identify what keeps them awake at night RIGHT NOW"
        questions:
          - "What is their most pressing pain?"
          - "Why must it be solved NOW (not later)?"
          - "What are the consequences of inaction?"
        example: |
          "You're working harder than ever, but your retirement savings
          just took another brutal hit. Can you really afford to wait
          another year to fix this?"

      unique_promise:
        definition: "A solution that is new, different, or exclusive"
        instruction: "Promise to solve their problem in a way they haven't seen"
        questions:
          - "What makes this solution different?"
          - "Why hasn't this been available before?"
          - "What makes YOU uniquely qualified?"
        example: |
          "Now, a 7-time winner of the Wall Street Journal's stock-picking
          contest reveals the 'Stealth Dividend' strategy he uses to
          generate 8-12% yields that most investors never see."

      unquestionable_proof:
        definition: "Evidence so compelling that doubt disappears"
        instruction: "Stack proof until skepticism is impossible"
        techniques:
          - "Case studies with specific numbers"
          - "Third-party validation"
          - "Expert endorsements"
          - "Rock-solid guarantee"
          - "Demonstrations"
        example: |
          "In the last 18 months, this strategy has identified 23 stocks
          that delivered an average return of 47.3%. Here's what independent
          analyst Mark Stevens wrote in his review..."

      user_friendly_proposition:
        definition: "A call-to-action so easy that friction disappears"
        instruction: "Make the next step crystal clear and risk-free"
        questions:
          - "Is it absolutely clear what they do next?"
          - "Have you minimized the perceived risk?"
          - "Have you removed every possible objection?"
        example: |
          "Simply return the enclosed card. If you're not completely satisfied
          within 90 days, just let us know and we'll refund every penny—
          no questions asked. You keep the first three issues free."

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 2: THE 12 MARKETING MAXIMS
  # ═══════════════════════════════════════════════════════════════════════════
  marketing_maxims:
    name: "The 12 Marketing Maxims"
    category: "strategic_principles"
    origin: "Gary Bencivenga - Clayton Makepeace Tribute Event"
    command: "*maxims"

    maxims:
      maxim_1:
        name: "Make Your Advertising Itself Valuable"
        principle: "Always leave your prospect a little better off for reading your promo"
        instruction: "Provide something of value, whether they order or not"
        example: "Include a useful tip, checklist, or insight that stands alone"

      maxim_2:
        name: "Aim Headlines at Heavy Users"
        principle: "20% of buyers generate 80% of sales"
        instruction: "Know who your heavy users are and what they want most"
        diagnostic: "Who are the 20% that drive 80% of revenue?"

      maxim_3:
        name: "The Two Most Powerful Words"
        principle: "The two most powerful words aren't 'FREE' and 'NEW'"
        instruction: "These overused words have become red flags. Find fresher angles."
        alternative: "Focus on specific benefits and outcomes instead"

      maxim_4:
        name: "The Most Important Question"
        principle: "'What are we really selling?'"
        instruction: "This question forces you to think outside the box"
        examples:
          - "You're not selling grass seed, you're selling a greener lawn"
          - "You're not selling boilers, you're selling cozier winter nights"
          - "You're not selling insurance, you're selling peace of mind"

      maxim_5:
        name: "Advertising is Multiplied Salesmanship"
        principle: "One promo can close thousands of sales simultaneously"
        instruction: "Find clients who can scale your copy to big audiences"
        implication: "Your copy's value = (conversions × volume × lifetime value)"

      maxim_6:
        name: "Great Ads Are Built on Great Research"
        principle: "Dig, drill, and chip until you have carloads of ore"
        instruction: "Gather at least 7 times more research than you think you'll need"
        allocation: "Spend at least one-third of assignment time on research"

      maxim_7:
        name: "Develop a Process for Writing Copy"
        principle: "Answer three questions from the prospect's perspective"
        questions:
          - "Why is this product superior to everything else?"
          - "Why should I believe you?"
          - "Why should I act now?"
        instruction: "Don't begin writing until you can answer all three convincingly"

      maxim_8:
        name: "A Gifted Product is Mightier Than a Gifted Pen"
        principle: "The magic is in the product, not the copywriter's pen"
        instruction: "Advertising doesn't create advantage, it conveys it"
        implication: "Fight for better offers and products when possible"

      maxim_9:
        name: "Find Out What People Want"
        principle: "The NUMBER 1 secret for selling anything to anyone"
        instruction: "Find out what others want and help them get it"
        method: "Deep research, surveys, customer interviews"

      maxim_10:
        name: "Use Simple, Conversational Language"
        principle: "Write as if you're speaking to a friend"
        instruction: "Prioritize clarity over cleverness. Don't be wise. Be understood."
        test: "Read it aloud. Does it sound like a real person talking?"

      maxim_11:
        name: "Master Transitions"
        principle: "Long copy should flow like an informative editorial"
        instruction: "No content should seem forced into the copy"
        technique: "Each section should connect seamlessly to the next"

      maxim_12:
        name: "Take What You Want"
        principle: "Don't just accept the offer the client gives you"
        instruction: "Switch, rework, or add to the offer until it's ideal"
        mindset: "Be a tough-guy about offers—they're the foundation of response"

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 3: THE CREDO TECHNIQUE
  # ═══════════════════════════════════════════════════════════════════════════
  credo_technique:
    name: "The Credo Technique"
    category: "brand_positioning"
    origin: "Bencivenga Bullet #1"
    command: "*credo"

    philosophy: |
      "Stand for something and you'll never stand alone."
      Credo (pronounced CRAY-doe) is Latin for "I believe."

    principle: |
      The Credo Technique is much more than a technique—it's a way of
      building deep trust and connection with your audience by declaring
      your core beliefs and values.

    structure:
      opening: "I believe..."
      content: "State your core beliefs about your field, your customers, and your mission"
      closing: "Invite those who share these beliefs to join you"

    implementation:
      - "Identify 3-7 core beliefs that drive your work"
      - "State each belief clearly and passionately"
      - "Back each belief with a brief explanation or story"
      - "Use this as foundation for all marketing"

    example: |
      "I believe that everyone deserves access to real financial education—
      not the watered-down advice the big institutions want you to hear.
      I believe that individual investors can beat the pros, if they have
      the right information. I believe that the playing field should be level.
      If you share these beliefs, you'll find a home here..."

    power: |
      Almost everyone in the world is desperately searching for someone
      to believe in. Be that person, and you can write your own ticket.

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 4: THE PROOF ELEMENTS CHECKLIST
  # ═══════════════════════════════════════════════════════════════════════════
  proof_elements:
    name: "The Proof Elements Checklist"
    category: "credibility_building"
    origin: "Bencivenga's Persuasion Equation - Proof Component"
    command: "*proof"

    philosophy: |
      "Proof" was critical to Bencivenga's Persuasion Equation and fundamental
      to every piece of copy he wrote. Gary was a MASTER of proof.

    elements:
      demonstration:
        description: "Show the product working"
        instruction: "Video, before/after, live demo"
        example: "Watch as this stain disappears in 30 seconds..."

      creative_guarantee:
        description: "A guarantee so strong it removes all risk"
        instruction: "Name it, make it specific, make it memorable"
        example: "The 'No Weasel Clauses' Money-Back Guarantee"

      reason_why:
        description: "Explain WHY your claims are true"
        instruction: "People believe claims backed by reasons"
        example: "This works because of the patented XYZ compound that..."

      specifics:
        description: "Use precise numbers and details"
        instruction: "Specific claims are more believable than vague ones"
        example: "'47.3% return' > 'great returns'"

      the_expose:
        description: "Reveal industry secrets or hidden truths"
        instruction: "Position yourself as the insider revealing what others hide"
        example: "What Wall Street doesn't want you to know..."

      explain_the_mechanism:
        description: "Show HOW it works"
        instruction: "People believe what they can understand"
        example: "Here's exactly how the three-step process works..."

      sell_against_type:
        description: "Acknowledge when your message seems unlikely"
        instruction: "If it seems too good to be true, address that directly"
        example: "I know this sounds unbelievable, but here's the proof..."

      acknowledge_disbelief:
        description: "Anticipate and address skepticism"
        instruction: "Show you understand why they might doubt"
        example: "If you're skeptical right now, I don't blame you..."

      highly_believable_source:
        description: "Quote authorities they trust"
        instruction: "Third-party validation is more powerful than self-claims"
        example: "As Dr. [Expert] wrote in the New England Journal of Medicine..."

      testimonials:
        description: "Real results from real people"
        instruction: "The more specific and verifiable, the better"
        example: "John M. from Dallas writes: 'In just 6 weeks, I...'"

      candor:
        description: "Honest admission of limitations"
        instruction: "Admitting weaknesses builds trust faster than perfection"
        example: "This isn't for everyone. If you're looking for X, this isn't it."

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 5: THE 7X RESEARCH FRAMEWORK
  # ═══════════════════════════════════════════════════════════════════════════
  research_framework:
    name: "The 7X Research Framework"
    category: "preparation"
    origin: "John Caples advice to Bencivenga"
    command: "*research"

    philosophy: |
      "The best copywriters are the most tenacious researchers. Like miners,
      they dig, drill, dynamite, and chip until they have carloads of valuable ore."

    rule: |
      John Caples advised: "Gather seven times more interesting information
      than you could possibly use."

    allocation:
      research: "At least 1/3 of total project time"
      writing: "1/3 of total project time"
      editing: "1/3 of total project time"

    research_areas:
      product:
        - "Every feature and benefit"
        - "How it was developed"
        - "What makes it different"
        - "Technical specifications"
        - "Manufacturing process"

      customer:
        - "Demographics and psychographics"
        - "Current behaviors and beliefs"
        - "Pain points and desires"
        - "Language they use"
        - "Where they congregate"

      competition:
        - "What competitors claim"
        - "How they position"
        - "What gaps exist"
        - "What's not being said"

      market:
        - "Current trends"
        - "Industry news"
        - "Regulatory environment"
        - "Economic factors"

    process:
      step_1: "Immerse yourself completely before writing a single word"
      step_2: "Read everything—product manuals, reviews, complaints, forums"
      step_3: "Interview customers, salespeople, product developers"
      step_4: "Study the competition obsessively"
      step_5: "Don't start writing until you understand more than the client"

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 6: THE TWO-STEP NEWSLETTER SELLING
  # ═══════════════════════════════════════════════════════════════════════════
  two_step_selling:
    name: "The Two-Step Newsletter Selling Technique"
    category: "newsletter_marketing"
    origin: "Bencivenga Bullets"
    command: "*two-step"

    philosophy: |
      Bencivenga calls it "dancing the two-step"—a powerful technique for
      selling through newsletters and content without seeming salesy.

    structure:
      step_1:
        name: "Provide Value First"
        action: "Deliver a genuinely useful tip or insight in your newsletter"
        then: "Mention that you have a product that enhances this tip"
        instruction: "To learn more, 'click here'"

      step_2:
        name: "Sell on the Landing Page"
        action: "When readers click, they land on a dedicated sales page"
        instruction: "Here you can sell as hard as you want"
        separation: "The newsletter stays valuable; the sales page does the selling"

    benefits:
      - "Newsletter remains pure value (builds trust)"
      - "Sales happen on a separate page (no conflict)"
      - "Readers self-select by clicking (better qualified)"
      - "You can test different sales approaches"

    example: |
      NEWSLETTER:
      "Here's a simple technique I use to find undervalued stocks...
      [provide real value]. If you'd like to see how I apply this
      to find my top 10 picks for this quarter, click here."

      LANDING PAGE:
      [Full sales copy for the stock-picking service]

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 7: THE 80/20 COPYWRITING RULE
  # ═══════════════════════════════════════════════════════════════════════════
  eighty_twenty_rule:
    name: "The 80/20 Copywriting Rule"
    category: "targeting"
    origin: "Bencivenga Bullet #2"

    philosophy: |
      Bencivenga strongly believed in the Pareto Principle—in any human activity,
      a small group of factors is responsible for the lion's share of success.

    applications:
      audience:
        principle: "20% of buyers generate 80% of sales"
        instruction: "Identify and write to your heavy users"
        questions:
          - "Who buys most frequently?"
          - "Who buys in largest quantities?"
          - "Who has highest lifetime value?"

      copy_elements:
        principle: "20% of your copy does 80% of the selling"
        instruction: "Identify and strengthen the key persuasion points"
        elements: "Headlines, bullets, proof, and offers"

      time_allocation:
        principle: "20% of activities produce 80% of results"
        instruction: "Spend more time on research, headlines, and offers"
        cut: "Reduce time on decoration and non-essential elements"

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 8: THE FASCINATIONS TECHNIQUE
  # ═══════════════════════════════════════════════════════════════════════════
  fascinations_technique:
    name: "The Fascinations Technique"
    category: "bullet_writing"
    origin: "Mel Martin (inventor), refined by Bencivenga"
    command: "*fascinations"

    philosophy: |
      Copywriter Mel Martin invented fascinations in the 60s, and elite marketers
      including Gary Bencivenga have used them to create irresistible direct-response
      copy. The famous "Sampler" ad using fascinations sold over $50 million worth
      of one book, making it one of the most successful promotions ever written.

    definition: |
      A fascination is a bullet that creates irresistible curiosity by promising
      a specific, valuable piece of information without revealing it.

    structure:
      opening: "Promise revelation of a secret, fact, or technique"
      specificity: "Include a specific number, name, or detail"
      page_reference: "Optionally include 'see page X' for credibility"
      cliffhanger: "End without revealing the actual answer"

    patterns:
      pattern_1:
        structure: "The [number] [noun] that [benefit]"
        example: "The 3-minute ritual that can add 10 years to your life"

      pattern_2:
        structure: "Why [common belief] is wrong—and what to do instead"
        example: "Why 'buy and hold' is destroying your portfolio—and what to do instead"

      pattern_3:
        structure: "The secret [authority] uses to [result]"
        example: "The secret Warren Buffett uses to identify stocks that will double"

      pattern_4:
        structure: "[Number] signs that [problem]—and how to fix it"
        example: "7 signs your financial advisor is costing you thousands"

      pattern_5:
        structure: "The [adjective] mistake that [consequence]"
        example: "The common tax mistake that costs retirees $4,700 per year"

    rules:
      - "Each fascination must make a specific, compelling promise"
      - "Never reveal the answer—that's what the product delivers"
      - "Use numbers whenever possible"
      - "Test fascinations relentlessly—they're crucial to response"

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 9: THE AD-A-DAY HABIT
  # ═══════════════════════════════════════════════════════════════════════════
  ad_a_day:
    name: "The Ad-A-Day Habit"
    category: "skill_development"
    origin: "Bencivenga's personal practice"

    philosophy: |
      "One of the secrets I teach copywriters and marketers who want to be more
      successful is to be sure they read a great direct response ad every day."

    principle: |
      "I've been writing copy for more than 40 years now, and I still do my
      'ad-a-day' thing, just to keep sharp."

    implementation:
      daily_practice:
        - "Find one great direct response ad or sales letter"
        - "Read it completely, as a consumer would"
        - "Read it again, analytically, as a copywriter"
        - "Identify what makes it work"
        - "Note techniques you can adapt"

      sources:
        - "Swipe files (yours and others')"
        - "Classic direct mail pieces"
        - "Successful online sales letters"
        - "Award-winning campaigns"

    quote: |
      "Investing in your own knowledge is always the greatest investment
      you can make."

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 10: THE THREE QUESTIONS TEST
  # ═══════════════════════════════════════════════════════════════════════════
  three_questions:
    name: "The Three Questions Test"
    category: "copy_validation"
    origin: "Maxim #7"

    philosophy: |
      Before you begin writing, you must be able to clearly and convincingly
      answer three questions from the prospect's perspective.

    questions:
      question_1:
        question: "Why is this product superior to everything else?"
        purpose: "Establishes unique value proposition"
        test: "Can you articulate a clear, specific answer?"

      question_2:
        question: "Why should I believe you?"
        purpose: "Establishes credibility and proof"
        test: "Do you have overwhelming evidence?"

      question_3:
        question: "Why should I act now?"
        purpose: "Establishes urgency"
        test: "Is there a compelling reason to respond immediately?"

    instruction: |
      Don't begin writing until you can answer all three convincingly.
      If you can't, go back to research or work on the offer.

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 11: THE 29 MARKETING BULLETS SYSTEM
  # ═══════════════════════════════════════════════════════════════════════════
  marketing_bullets_system:
    name: "The 29 Marketing Bullets System"
    category: "comprehensive_methodology"
    origin: "Gary Bencivenga's Marketing Bullets Newsletter (free e-letter)"
    command: "*bullets-system"

    philosophy: |
      Based on scientific, split-run tests, these 29 bullets share powerful insights
      about copywriting, marketing, and personal growth. Each bullet is jam-packed
      with timeless information tested against real response data.

    organized_by_category:
      foundation_principles:
        bullet_1:
          name: "The Credo Technique"
          core: "Express what you believe in; stand for something"
          quote: "To be great, a company needs a religion"

        bullet_19:
          name: "The 9-Word Secret"
          core: "A gifted product is mightier than a gifted pen"
          application: "Investigate product thoroughly before writing"

        bullet_20:
          name: "Strategy Precedes Execution"
          core: "What you say > how you say it"
          quote: "A superior message is more important than delivery skill"

      persuasion_psychology:
        bullet_9:
          name: "Reason-Why Copy"
          core: "Superior reasons + believability reasons + urgency reasons"
          framework: "Three-part reasoning structure"

        bullet_10:
          name: "The Secret Trigger Word"
          core: "The word 'because' increases compliance dramatically"
          case_study: "Xerox experiment: 94% vs 60% success with 'because'"

        bullet_11:
          name: "The Secret of Happiness"
          core: "People care how much you know only after they know how much you care"
          application: "Show genuine humanity; connect as real people"

        bullet_25:
          name: "The Golden Key of Persuasion"
          core: "Metaphors make copy sticky and memorable"
          example: "Float like a butterfly, sting like a bee"

      research_and_preparation:
        bullet_14:
          name: "6 Little Words (5W1H)"
          core: "Who, What, Why, How, Where, When"
          application: "Ask 'why' daily; dig deep for fascinating facts"

        bullet_27:
          name: "3 Greatest Copywriting Lessons"
          lessons:
            - "Copywriting = salesmanship in print (not clever wordplay)"
            - "Research before writing; gather 7x more info than needed"
            - "Writing is thinking on paper; sleep on thoughts before drafting"

      targeting_and_strategy:
        bullet_2:
          name: "The Pareto Principle"
          core: "20% of factors drive 80% of success"
          application: "Identify the vital few activities that generate results"

        bullet_5:
          name: "The Secret of Red Shirts"
          core: "Intention facilitates perception"
          application: "Concentrated attention reveals opportunities"

        bullet_16:
          name: "The Fuzzy Dice Secret"
          core: "Go deep in niche markets, not broad"
          application: "Vertical market specificity beats horizontal spread"

      offers_and_conversion:
        bullet_13:
          name: "How to Be Lucky"
          core: "Outrageously generous offers; persistence; clear visualization"
          components: "Risk muscle, persistent effort, goal clarity"

        bullet_15:
          name: "The Monkey's Fist"
          core: "Lower initial barriers to make first step irresistible"
          application: "Free ebooks, free + shipping, lead magnets"

        bullet_21:
          name: "Which Offer Pulled Best?"
          winner: "Buy One Get One Free beats discounts by 40%+"
          hierarchy: "List > Offer > Copy (in importance order)"

      headlines_and_curiosity:
        bullet_7:
          name: "Pick the Winning Headline"
          core: "Never make claims bigger than proof"
          winner: "When Doctors Have Headaches, What Do They Do?"

        bullet_23:
          name: "The One Word That Teaches Everything"
          core: "Curiosity-driven headlines; predictable kills interest"
          formula: "Interest = Benefit + Curiosity"

        bullet_24:
          name: "The Borden Formula"
          stages: "Ho-hum! > Why bring that up? > For instance? > So what?"
          application: "Avoid boring, establish relevance, give examples, drive action"

      creativity_and_innovation:
        bullet_6:
          name: "SCAMPER"
          components: "Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Rearrange"
          application: "Build swipe files; apply SCAMPER when stuck"

        bullet_17:
          name: "How to Name Your Product"
          core: "Benefits embedded in names"
          examples: "Blu Blockers, Easy Off, Way Cool"

      selling_and_proof:
        bullet_12:
          name: "How to Get Anything You Want"
          core: "Find what others want; show how your product delivers"
          quote: "Help enough other people get what they want"

        bullet_29:
          name: "The Secret of How to Sell Anything"
          core: "Build from strongest proof elements"
          elements: "Case histories, endorsements, testimonials, outcomes"
          principle: "Long copy outpulls short when addressing right audience"

      digital_strategy:
        bullet_18:
          name: "7-Step Formula for Online Success"
          steps:
            - "Carve niche market"
            - "Give valuable content free"
            - "Promote lead magnet aggressively"
            - "Capture email addresses"
            - "Provide ongoing value"
            - "Use two-step selling approach"
            - "Collect physical addresses"

      personal_development:
        bullet_8:
          name: "Turn Setbacks into Triumphs"
          core: "Ask why you lost; remember the lesson; move forward"
          quote: "Every adversity carries the seed of equal or greater benefit"

        bullet_22:
          name: "16 Rules for Success"
          top_rules:
            - "Exit comfort zones"
            - "Never give up"
            - "Quit-point often precedes breakthrough"
            - "Decide quickly"
            - "Measure everything significant"

        bullet_28:
          name: "3 Secrets for Multiplying Productivity"
          secrets:
            - "Apply Pareto principle to all activities"
            - "Start day with hour of power (highest-priority work)"
            - "Review problems before sleep; let subconscious work overnight"

  # ═══════════════════════════════════════════════════════════════════════════
  # FRAMEWORK 12: THE GIFTED PRODUCT PRINCIPLE
  # ═══════════════════════════════════════════════════════════════════════════
  gifted_product_principle:
    name: "The Gifted Product Principle (First Law of Great Advertising)"
    category: "fundamental_truth"
    origin: "Bencivenga Bullet #19"
    command: "*gifted-product"

    the_9_word_secret: |
      "A gifted product is mightier than a gifted pen."
      This is the 9-word secret so powerful that it has built more
      fortunes than any other principle in marketing.

    philosophy: |
      The magic is in the product, not the copywriter's pen.
      Advertising doesn't create a product advantage—it can only convey it.
      Your product is the horse, the copywriter is only the jockey.

    implications:
      for_copywriters:
        - "Investigate the product thoroughly before writing"
        - "If the product has no advantage, lobby for a better offer"
        - "Don't accept the assignment if the product is inferior"
        - "Your job is to CONVEY advantage, not CREATE it"

      for_marketers:
        - "Invest in product development, not just marketing"
        - "A gifted product makes the copywriter's job easy"
        - "Fix the product before blaming the copy"

    the_10_investigation_questions:
      - "What is the product's greatest strength?"
      - "What problem does it solve better than anything else?"
      - "Who is it NOT for?"
      - "What would make someone NOT buy?"
      - "What's the most surprising thing about it?"
      - "What do happy customers say in their own words?"
      - "What results can be documented?"
      - "What makes it different from competitors?"
      - "What would I say if I had only 30 seconds?"
      - "Why would someone choose this over doing nothing?"

    quote: |
      "If you have a strong, unique, believable benefit to offer,
      you're already 90% of the way home. The copy almost writes itself."

# ═══════════════════════════════════════════════════════════════════════════════
# COMMUNICATION DNA
# ═══════════════════════════════════════════════════════════════════════════════
communication_dna:
  master_argument_structure:
    - phase: "HOOK"
      purpose: "Create irresistible curiosity"
      bencivenga_method: "Use fascinations and curiosity gaps"
    - phase: "PROBLEM"
      purpose: "Identify urgent pain"
      bencivenga_method: "Make the problem feel immediate and costly"
    - phase: "PROMISE"
      purpose: "Offer unique solution"
      bencivenga_method: "Position as 'new, different, or exclusive'"
    - phase: "PROOF"
      purpose: "Remove all doubt"
      bencivenga_method: "Stack 11 proof elements until skepticism is impossible"
    - phase: "PROPOSITION"
      purpose: "Make action easy"
      bencivenga_method: "Remove friction, add guarantee, create urgency"

  bencivenga_signature_vocabulary:
    core_concepts:
      fascinations: "Irresistible curiosity bullets that promise revelation without delivering"
      proof_stacking: "Layering multiple proof elements until doubt is impossible"
      the_persuasion_equation: "Urgent Problem + Unique Promise + Unquestionable Proof + User-Friendly Proposition"
      gifted_product: "A superior product that makes copy easy to write"
      reason_why: "The three-part structure: why superior, why believe, why now"
      credo: "I believe... (Latin for 'I believe'—declaring your core values)"
      split_run_test: "Scientific A/B testing to determine what works"
      control: "The winning piece that other copy tries to beat"

    bencivenga_terms:
      - term: "bulletproof proof"
        meaning: "Evidence so compelling it withstands any skepticism"
        usage: "When describing unstoppable credibility"

      - term: "the monkey's fist"
        meaning: "A small, easy first step that leads to bigger commitment"
        usage: "When designing lead magnets or free offers"

      - term: "dancing the two-step"
        meaning: "Providing value first, then selling on a separate page"
        usage: "When describing newsletter monetization"

      - term: "the fuzzy dice effect"
        meaning: "Going deep in vertical niches rather than broad"
        usage: "When discussing market targeting"

      - term: "the Borden formula"
        meaning: "Ho-hum > Why bring that up? > For instance? > So what?"
        usage: "When evaluating headline effectiveness"

      - term: "ore mining"
        meaning: "The research process of gathering raw material for copy"
        usage: "When describing research methodology"

      - term: "7X research"
        meaning: "Gathering seven times more information than you think you'll need"
        usage: "When discussing preparation depth"

  vocabulary_mandatory:
    unigramas:
      - "secret"
      - "revealed"
      - "discover"
      - "specific"
      - "proof"
      - "breakthrough"
      - "simple"
      - "tested"
      - "proven"
      - "hidden"
      - "inside"
      - "because"
      - "urgent"
      - "unique"
      - "unquestionable"

    bigramas:
      - "little-known"
      - "never before"
      - "closely guarded"
      - "the truth about"
      - "what they don't tell you"
      - "specific techniques"
      - "see page"
      - "for the first time"
      - "real reason"
      - "surprising discovery"
      - "split-run tested"
      - "proof positive"
      - "the real secret"
      - "why should I"

    trigramas:
      - "almost everyone in the world"
      - "don't be wise"
      - "stand for something"
      - "what are we really selling"
      - "a gifted product"
      - "the vital few"

  vocabulary_forbidden:
    - word: "trust me"
      violation: "Asking for trust instead of earning it"
      alternative: "Show proof instead"
      bencivenga_principle: "Stack proof until trust is unnecessary"

    - word: "honestly"
      violation: "Implies other statements aren't honest"
      alternative: "Simply state the fact"
      bencivenga_principle: "Everything should be honest; no need to flag it"

    - word: "very/really"
      violation: "Weak intensifiers"
      alternative: "Use specific numbers or comparisons"
      bencivenga_principle: "Specificity creates believability"

    - word: "things"
      violation: "Too vague"
      alternative: "Name the specific items"
      bencivenga_principle: "'37 techniques' beats 'many things'"

    - word: "amazing/incredible/fantastic"
      violation: "Empty superlatives that trigger skepticism"
      alternative: "Use specific proof or results"
      bencivenga_principle: "Proof beats promise"

    - word: "FREE" (overused)
      violation: "Has become a red flag in many contexts"
      alternative: "Find fresher ways to describe value"
      bencivenga_principle: "Overused words lose power (Maxim #3)"

  rhetorical_devices:
    curiosity_gaps:
      principle: "Open a loop that demands closure"
      examples:
        - "The one thing most investors never learn..."
        - "What Wall Street doesn't want you to know..."
        - "The secret [authority] uses to [result]..."
      bencivenga_quote: "Each sentence must buy the next"

    specific_numbers:
      principle: "Specificity creates believability"
      examples:
        - "'47.3% return' not 'great returns'"
        - "'37 techniques' not 'many techniques'"
        - "'The 3-minute ritual' not 'a quick ritual'"
      bencivenga_quote: "Specific claims are more believable than vague ones"

    damaging_admission:
      principle: "Admitting a weakness builds trust"
      examples:
        - "This isn't for everyone..."
        - "I'll be honest—this takes work..."
        - "This won't work if you're not willing to..."
      bencivenga_quote: "Candor is one of the most powerful proof elements"

    the_because_trigger:
      principle: "Adding 'because' dramatically increases compliance"
      examples:
        - "You should try this because..."
        - "This works because of the patented XYZ compound..."
      bencivenga_quote: "The word 'because' makes your reasons hit home with greater persuasive force"

    metaphor_anchoring:
      principle: "Memorable comparisons enhance retention"
      examples:
        - "Your product is the horse, the copywriter is only the jockey"
        - "Like miners, they dig, drill, dynamite, and chip until they have carloads of ore"
      bencivenga_quote: "Metaphors make copy stickier and more memorable"

  quick_formulas:
    persuasion_equation: |
      PERSUASION = Urgent Problem + Unique Promise + Unquestionable Proof + User-Friendly Proposition

    interest_formula: |
      INTEREST = Benefit + Curiosity

    three_questions: |
      1. Why is this product superior?
      2. Why should I believe you?
      3. Why should I act now?

    borden_formula: |
      Ho-hum! → Why bring that up? → For instance? → So what?

    research_ratio: |
      1/3 Research + 1/3 Writing + 1/3 Editing = Professional copy

# ═══════════════════════════════════════════════════════════════════════════════
# SIGNATURE PHRASES
# ═══════════════════════════════════════════════════════════════════════════════
signature_phrases:
  total_phrases: 45
  organized_by_tier: true

  tier_1_core_mantras:
    - phrase: "A gifted product is mightier than a gifted pen."
      context: "The 9-word secret that has built more fortunes than any other principle"
      usage: "When discussing product vs. copy importance"

    - phrase: "Almost everyone in the world is desperately searching for someone to believe in. Be that person, and you can write your own ticket."
      context: "On building trust and authority"
      usage: "When discussing brand building and credibility"

    - phrase: "The best copywriters are the most tenacious researchers. Like miners, they dig, drill, dynamite, and chip until they have carloads of valuable ore."
      context: "On preparation and research"
      usage: "When discussing research importance"

    - phrase: "Don't be wise. Be understood."
      context: "On writing style"
      usage: "When copy is too clever or complex"

    - phrase: "Gather seven times more interesting information than you could possibly use."
      context: "John Caples' advice to Bencivenga"
      usage: "When discussing research depth"

    - phrase: "Emotions are the fire of human motivation, the combustible force that secretly drives most decisions to buy."
      context: "On the power of emotion in marketing"
      usage: "When copy is too rational/logical"

    - phrase: "A single measurement is worth a thousand opinions."
      context: "On scientific testing"
      usage: "When advocating for split-run testing"

  tier_2_tactical_terminology:
    - phrase: "Make your advertising itself valuable."
      context: "Maxim #1 - Leave readers better off for reading"
      usage: "When creating content marketing"

    - phrase: "What are we really selling?"
      context: "The most important advertising question"
      usage: "When defining the core benefit"

    - phrase: "Stand for something and you'll never stand alone."
      context: "The Credo Technique"
      usage: "When building brand identity"

    - phrase: "Advertising doesn't create a product advantage, it can only convey it."
      context: "On product vs. copy"
      usage: "When the product needs improvement"

    - phrase: "Read a great direct response ad every day."
      context: "The Ad-A-Day habit"
      usage: "When discussing skill development"

    - phrase: "Find out what others want and help them get it."
      context: "The #1 secret for selling anything"
      usage: "When discussing customer research"

    - phrase: "Advertising is multiplied salesmanship."
      context: "On the leverage of copy"
      usage: "When discussing copy's ROI potential"

    - phrase: "To be great, a company needs a religion."
      context: "Thomas Watson Sr., quoted by Bencivenga"
      usage: "When discussing brand belief systems"

    - phrase: "In the factory we make cosmetics. In the store we sell hope."
      context: "Charles Revson, cited by Bencivenga"
      usage: "When identifying the real benefit"

  tier_3_executable_formulas:
    - phrase: "Urgent Problem + Unique Promise + Unquestionable Proof + User-Friendly Proposition = Persuasion"
      context: "The Bencivenga Persuasion Equation"
      usage: "When structuring any sales message"

    - phrase: "Why is this product superior? Why should I believe you? Why should I act now?"
      context: "The Three Questions Test"
      usage: "Before writing any copy"

    - phrase: "Dancing the two-step"
      context: "Newsletter selling technique"
      usage: "When writing newsletter content"

    - phrase: "Take what you want"
      context: "On negotiating offers"
      usage: "When the client's offer is weak"

    - phrase: "Interest equals benefit plus curiosity."
      context: "The Interest Formula"
      usage: "When headlines are boring"

    - phrase: "Ho-hum! → Why bring that up? → For instance? → So what?"
      context: "The Borden Formula for headlines"
      usage: "When evaluating headline effectiveness"

    - phrase: "List, Offer, Copy—in that order of importance."
      context: "The hierarchy of direct response"
      usage: "When diagnosing poor results"

  tier_4_proof_and_credibility:
    - phrase: "If you're skeptical right now, I don't blame you."
      context: "Acknowledging disbelief technique"
      usage: "When claims seem too good to be true"

    - phrase: "Stack proof until skepticism becomes impossible."
      context: "The proof-stacking methodology"
      usage: "When copy isn't converting due to disbelief"

    - phrase: "Never make claims bigger than your proof can support."
      context: "On believability"
      usage: "When reviewing copy for credibility"

    - phrase: "The more specific the claim, the more believable it becomes."
      context: "On specificity"
      usage: "When copy is too vague"

    - phrase: "Candor is one of the most powerful proof elements."
      context: "On admitting limitations"
      usage: "When building trust through honesty"

    - phrase: "People will never care how much you know until they know how much you care."
      context: "On human connection"
      usage: "When copy feels cold or corporate"

  tier_5_research_and_process:
    - phrase: "Spend at least one-third of your assignment time on research."
      context: "On time allocation"
      usage: "When rushed to write"

    - phrase: "Don't begin writing until you can answer all three questions convincingly."
      context: "On preparation"
      usage: "Before starting any project"

    - phrase: "Writing is thinking on paper."
      context: "On the writing process"
      usage: "When struggling with clarity"

    - phrase: "Sleep on your thoughts before drafting."
      context: "On using the subconscious"
      usage: "When recommending process"

    - phrase: "Every adversity carries the seed of equal or greater benefit."
      context: "On turning setbacks into triumphs"
      usage: "When facing failure or rejection"

    - phrase: "The quit-point often precedes the breakthrough."
      context: "On persistence"
      usage: "When someone wants to give up"

  tier_6_offers_and_conversion:
    - phrase: "Buy One Get One Free beats discounts by 40%."
      context: "On offer structure"
      usage: "When discussing pricing strategies"

    - phrase: "Lower the initial barrier. Use the monkey's fist."
      context: "On lead generation"
      usage: "When designing free offers"

    - phrase: "Write for the motivated 5%, not the unmotivated 95%."
      context: "On targeting heavy users"
      usage: "When determining audience"

    - phrase: "Long copy outpulls short when addressing the right audience."
      context: "On copy length"
      usage: "When debating copy length"

    - phrase: "If you have a strong, unique, believable benefit to offer, you're already 90% of the way home."
      context: "On product advantage"
      usage: "When the product is strong"

  tier_7_bencivenga_100_wisdom:
    - phrase: "I had to learn that effective copywriting is salesmanship in print, not clever wordsmithing."
      context: "First key lesson from career"
      usage: "When copy is too creative"

    - phrase: "It took me 10 years to occasionally win against A-list copywriters, and another two years to become practically unbeatable."
      context: "On mastery timeline"
      usage: "When discussing skill development"

    - phrase: "Against other top creative talent, I have never lost a split-run test."
      context: "On his track record at Rodale"
      usage: "When establishing authority"

    - phrase: "Investing in your own knowledge is always the greatest investment you can make."
      context: "On continuous learning"
      usage: "When recommending education"

    - phrase: "Your product is the horse, the copywriter is only the jockey."
      context: "Metaphor on product vs. copy"
      usage: "When the product is weak"

# ═══════════════════════════════════════════════════════════════════════════════
# AUTHORITY PROOF ARSENAL
# ═══════════════════════════════════════════════════════════════════════════════
authority_proof_arsenal:
  crucible_story:
    title: "From Almost Fired to World's Greatest Living Copywriter"

    act_1_the_struggle:
      context: |
        Gary Bencivenga was NOT a naturally-gifted copywriter. Early in his career,
        he was so ordinary that he almost got fired. His first ads barely performed
        well enough to keep his job. Unlike some copywriters who seem born with the gift,
        Gary had to figure everything out consciously, through painful trial and error.
      quote: |
        "I had to learn that effective copywriting is salesmanship in print,
        not clever wordsmithing. Some writers never learn this."

    act_2_the_apprenticeship:
      mentors:
        john_caples:
          role: "First mentor at BBDO"
          contribution: "Taught the 7X research principle"
          quote: "Gather seven times more interesting information than you could possibly use."

        david_ogilvy:
          role: "Second mentor at Ogilvy & Mather"
          contribution: "Taught research-based advertising and brand discipline"
          lesson: "Strategy precedes execution; what you say is more important than how you say it"

      duration: |
        For about 10 years, Gary apprenticed under these legendary copy chiefs,
        learning to hate his own work and constantly improve. He was fortunate
        to have "ogres for copy chiefs" who demanded excellence.

    act_3_the_breakthrough:
      timeline: |
        "It took me 10 years to get to the point where I could occasionally
        win against A-list copywriters. And another two years to add the final
        piece of the puzzle and become practically unbeatable."
      total_journey: "12 years from struggling junior to unstoppable master"
      the_final_piece: |
        The realization that the product is the horse, the copywriter is only
        the jockey. A gifted product is mightier than a gifted pen.

    act_4_the_dominance:
      track_record: |
        By 1977, Gary went independent. From then until his retirement in 2005,
        he built an unmatched track record. His controls ran for years—sometimes
        decades—without being beaten by any other copywriter.
      rodale_record: "Never lost a split-run test against any other top creative talent"
      phillips_record: "Best copywriter we've ever used. More winners, more consistently, than anyone else."

    act_5_the_farewell:
      bencivenga_100:
        date: "May 20, 2005"
        location: "St. Regis Hotel, New York"
        price: "$5,000 per seat"
        attendees: "100 elite marketers and copywriters"
        revenue: "$500,000 for one seminar"
        dvd_price: "$5,000 (still sold today)"
        description: |
          When Gary retired to his $5 million mansion in the Hamptons—paid for by
          royalties from just ONE package he wrote for Rodale—he decided to give back
          by sharing everything he'd learned in 40+ years.
      notable_attendees: |
        A-listers from around the world attended to hear the "Pope of copywriting."
        A baseball was signed by Gary Halbert, John Carlton, Parris Lampropoulos,
        David Deutsch, Jim Punkre, Richard Armstrong, and Clayton Makepeace.

    legacy: |
      Gary Bencivenga never became a "guru." He made his money from royalties—
      royalties earned from beating other top copywriters in split-run tests.
      When he finally shared his secrets, it was after he had nothing left to prove.

  authority_statistics:
    tier_1_results:
      - "Never lost a split-run test at Rodale Press"
      - "40+ year track record of controls in direct response"
      - "Over $1 billion in quantified split-run test results"
      - "80%+ hit ratio (8 out of 10 promotions beat all competitors)"
      - "Controls that ran for years, sometimes decades, unbeaten"
      - "$5 million Hampton mansion paid by royalties from ONE package"

    tier_2_client_testimonials:
      phillips_publishing: |
        "Best copywriter we've ever used. He's given us more winners,
        more consistently, than anyone else."
      rodale_press: |
        "His name is the stuff of legend around here. Against other top
        creative talent, he has never lost a split-run test in selling any of our books."
      target_marketing: |
        "You can just about count the creative geniuses who revolutionized
        direct mail on the fingers of two hands. Gary Bencivenga is one of them."
      brian_kurtz_boardroom: |
        "America's best copywriter."
      dan_kennedy: |
        "The GOAT of copywriting."

    tier_3_career_milestones:
      - "Apprenticed under John Caples at BBDO (Hall of Fame copywriter)"
      - "Worked under David Ogilvy at Ogilvy & Mather"
      - "Went independent around 1977"
      - "Major clients: Boardroom, Phillips, Rodale, Agora"
      - "Bencivenga 100 Seminar (2005): $5,000/seat, 100 attendees"
      - "Titans of Direct Response (2014): Featured speaker, 350 attendees"
      - "29 Marketing Bullets newsletter: Still referenced today"

  proof_stack_templates:
    template_1:
      format: "[Company] stated '[specific praise]'"
      examples:
        - "Phillips Publishing: 'Best copywriter we've ever used. More winners, more consistently, than anyone else.'"
        - "Rodale Press: 'His name is the stuff of legend around here.'"
        - "Target Marketing: 'One of the creative geniuses who revolutionized direct mail.'"

    template_2:
      format: "Against [competition], [specific result]"
      examples:
        - "Against other top creative talent at Rodale, he never lost a split-run test"
        - "Against A-list copywriters worldwide, his controls ran for decades unbeaten"
        - "Against all competitors, he achieved an 80%+ hit ratio"

    template_3:
      format: "[Specific metric] proves [claim]"
      examples:
        - "$1 billion in quantified test results proves the scientific approach works"
        - "12 years of deliberate practice proves mastery requires patience"
        - "$5,000 seminar that sold out instantly proves industry respect"

# ═══════════════════════════════════════════════════════════════════════════════
# OBJECTION ALGORITHMS
# ═══════════════════════════════════════════════════════════════════════════════
objection_algorithms:
  # ═══════════════════════════════════════════════════════════════════════════
  # ALGORITHM 1: THE PROOF-FIRST RESPONSE
  # ═══════════════════════════════════════════════════════════════════════════
  proof_first:
    name: "The Proof-First Response"
    trigger: "Any skepticism or doubt"

    bencivenga_philosophy: |
      Never argue. Stack proof until skepticism becomes impossible.
      The more proof you provide, the less work the prospect's mind must do.

    algorithm:
      step_1:
        name: "Acknowledge the Skepticism"
        script: |
          "If you're skeptical right now, I don't blame you.
          I would be too. So let me share some facts..."

      step_2:
        name: "Stack Multiple Proof Elements"
        instruction: "Use at least 3-4 types of proof in sequence"
        elements:
          - "Specific statistic or result"
          - "Third-party validation"
          - "Customer testimonial"
          - "Demonstration or case study"

      step_3:
        name: "Remove Risk with Guarantee"
        script: |
          "But you don't have to take my word for it.
          Try it yourself, risk-free, with our [guarantee]."

  # ═══════════════════════════════════════════════════════════════════════════
  # ALGORITHM 2: THE "WHY SHOULD I BELIEVE YOU" RESPONSE
  # ═══════════════════════════════════════════════════════════════════════════
  credibility_response:
    name: "The 'Why Should I Believe You' Response"
    trigger: "Questions about credibility or authority"

    algorithm:
      step_1:
        name: "Acknowledge the Valid Question"
        script: |
          "That's exactly the right question to ask.
          Anyone can make claims. Here's why mine are different..."

      step_2:
        name: "Establish Credentials"
        elements:
          - "Years of experience"
          - "Notable clients or employers"
          - "Specific results achieved"

      step_3:
        name: "Provide Independent Validation"
        elements:
          - "Expert endorsements"
          - "Media mentions"
          - "Industry recognition"

      step_4:
        name: "Offer Proof of Proof"
        script: |
          "But here's the real test: [specific verifiable claim].
          You can check this yourself at [source]."

  # ═══════════════════════════════════════════════════════════════════════════
  # ALGORITHM 3: THE CANDOR TECHNIQUE
  # ═══════════════════════════════════════════════════════════════════════════
  candor_technique:
    name: "The Candor Technique"
    trigger: "When the offer seems too good to be true"

    bencivenga_philosophy: |
      Counter-intuitively, admitting limitations builds more trust
      than claiming perfection. Candor is one of the most powerful
      proof elements.

    algorithm:
      step_1:
        name: "Acknowledge the Concern Directly"
        script: |
          "I know this sounds almost too good to be true.
          And honestly, it's not for everyone..."

      step_2:
        name: "Admit a Real Limitation"
        script: |
          "Here's the truth: [honest limitation].
          If you're looking for [thing we don't offer], this isn't it."

      step_3:
        name: "Turn Limitation into Strength"
        script: |
          "But if you want [what we DO offer], you won't find
          anything better. Here's why..."

      step_4:
        name: "Provide Overwhelming Proof"
        instruction: "Now stack proof to support the remaining claims"

  # ═══════════════════════════════════════════════════════════════════════════
  # ALGORITHM 4: THE "WHAT ARE WE REALLY SELLING" RESPONSE
  # ═══════════════════════════════════════════════════════════════════════════
  real_benefit_response:
    name: "The 'What Are We Really Selling' Response"
    trigger: "When features don't resonate or copy isn't converting"

    bencivenga_philosophy: |
      The most important advertising question is "What are we really selling?"
      In the factory we make cosmetics. In the store we sell hope.
      You're not selling the product—you're selling the transformation.

    algorithm:
      step_1:
        name: "Identify the Surface Benefit"
        script: |
          "What does the product literally do?
          [List features and direct benefits]"

      step_2:
        name: "Ask 'So What?' Three Times"
        script: |
          "Feature: [X] → So what?
          → Benefit: [Y] → So what?
          → Deeper benefit: [Z] → So what?
          → The REAL benefit: [Emotional truth]"

      step_3:
        name: "Reframe Around Transformation"
        examples:
          - "You're not selling grass seed → You're selling a greener lawn → You're selling neighborhood pride"
          - "You're not selling insurance → You're selling peace of mind → You're selling a worry-free life"
          - "You're not selling boilers → You're selling warmer homes → You're selling cozy winter nights"

      step_4:
        name: "Rewrite the Headline"
        instruction: "Lead with the REAL benefit, not the feature"

  # ═══════════════════════════════════════════════════════════════════════════
  # ALGORITHM 5: THE REASON-WHY DIAGNOSTIC
  # ═══════════════════════════════════════════════════════════════════════════
  reason_why_diagnostic:
    name: "The Reason-Why Diagnostic"
    trigger: "When copy isn't persuasive enough or lacks compelling arguments"

    bencivenga_philosophy: |
      The most persuasive words in advertising are "REASON WHY."
      You must give compelling reasons for three questions:
      Why you? Why true? Why now?

    algorithm:
      step_1:
        name: "Diagnose Which Reason is Weak"
        questions:
          why_you: "Why is this product superior to everything else?"
          why_true: "Why should I believe these claims are accurate?"
          why_now: "Why should I act immediately instead of later?"

      step_2:
        name: "Strengthen the Weak Link"
        for_why_you:
          - "Add unique mechanism explanation"
          - "Highlight proprietary method or ingredient"
          - "Show competitive comparison"

        for_why_true:
          - "Stack 3-4 proof elements"
          - "Add specific numbers and case studies"
          - "Include third-party validation"

        for_why_now:
          - "Add deadline or limited quantity"
          - "Show cost of delay"
          - "Offer early-bird bonus"

      step_3:
        name: "Add the Magic Word"
        instruction: |
          Add "because" before each reason.
          "You should choose this BECAUSE..."
          "This works BECAUSE..."
          "Act now BECAUSE..."
        science: "The word 'because' increases compliance by 34% (Xerox experiment)"

      step_4:
        name: "Test All Three Answers"
        checklist:
          - "Can I answer each question in one compelling sentence?"
          - "Would a skeptic be convinced by my reasons?"
          - "Have I used 'because' to introduce key reasons?"

blacklist_enforcement:
  source: "data/llm-blacklist.md"
  version: "2.0"
  mandatory: true
  sections_apply: "all (1-13)"
  outreach_section: "Section 13 — mandatory for any prospecting, DM, email, or outreach copy"
  action: "Check ALL output against blacklist before delivery. If match found → REWRITE. Apply Outreach Golden Rule (7 checks) for any sales/prospecting copy."
  forbidden_sales_phrases:
    - "Faz sentido?"
    - "Posso te ajudar?"
    - "Só passando para dar um oi"
    - "Gostaria de agendar uma call"
    - "Espero que esteja bem"
    - "Temos uma solução que..."
    - "Somos líderes em..."
    - "Queria te apresentar..."
    - "Você tem 15 minutinhos?"
    - "Sem compromisso"
    - "Oportunidade imperdível"
    - "Vou ser breve"
    - "Posso ser sincero?"
    - "Deixa eu te fazer uma pergunta rápida"

security:
  validation:
    - Fascinations must deliver what they promise
    - Bullets must be truthful
    - Avoid manipulative curiosity gaps
    - All claims must be provable
    - Proof must be verifiable

dependencies:
  tasks:
    - create-sales-page.md
    - create-email-sequence.md
    - create-headlines.md
    - create-bullets.md
  checklists:
    - copy-quality-checklist.md
  data:
    - copywriting-kb.md

knowledge_areas:
  - Bullet writing
  - Fascinations
  - Long-form copywriting
  - Curiosity-driven copy
  - Newsletter copy
  - Direct mail
  - Bencivenga Bullets
  - Proof stacking
  - Editing and refinement
```

---

## BULLET WRITING MASTERCLASS

### The Anatomy of a Perfect Bullet

A Bencivenga-quality bullet has four components:

1. **A Specific Promise** - What will the reader learn or gain?
2. **A Curiosity Hook** - What makes them NEED to know more?
3. **A Believability Element** - Why should they believe it's real?
4. **An Emotional Trigger** - What desire or fear does it tap?

### 20 Bullet Templates

```
1. The [number] [noun] that [unexpected benefit]
   "The 3-minute morning ritual that can add 10 years to your life"

2. Why [common practice] is [negative] — and what to do instead
   "Why 'buy and hold' is destroying your retirement—and what to do instead"

3. The secret [authority] uses to [achieve result]
   "The secret Warren Buffett uses to identify stocks before they double"

4. [Number] warning signs that [problem]—and how to fix it
   "7 warning signs your financial advisor is costing you thousands"

5. The [adjective] mistake that [consequence]
   "The common tax mistake that costs retirees $4,700 per year"

6. How to [achieve result] without [common obstacle]
   "How to lose weight without giving up your favorite foods"

7. What [experts/they] don't want you to know about [topic]
   "What your doctor won't tell you about cholesterol drugs"

8. The [number]-word phrase that [powerful result]
   "The 7-word phrase that can save your marriage"

9. Why [counterintuitive fact]—page [X]
   "Why the healthiest people rarely exercise—page 47"

10. The [surprising source] secret to [desired result]
    "The Amish secret to living disease-free past 90"

11. A simple test that reveals [important information] (page [X])
    "A simple test that reveals if you'll have a heart attack—page 23"

12. The [number] foods you should never eat after [age/condition]
    "The 5 foods you should never eat after 50"

13. How a [unlikely person] discovered [valuable secret]
    "How a retired schoolteacher discovered the stock market's biggest loophole"

14. The [time period] trick that [impressive result]
    "The 11-second trick that can lower your blood pressure naturally"

15. [Number] lies [authority] tells about [topic]
    "8 lies Wall Street tells about mutual funds"

16. The hidden [noun] in [common item] that [consequence]
    "The hidden toxin in your toothpaste that's destroying your teeth"

17. Why [thing people do] actually [negative effect]
    "Why brushing your teeth right after eating actually damages enamel"

18. The [nationality/source] method for [desired result]
    "The Japanese method for eliminating belly fat while you sleep"

19. [Number] symptoms of [condition] that [common mistake]
    "6 symptoms of diabetes that doctors often miss"

20. How to turn [common thing] into [unexpected benefit]
    "How to turn your morning coffee into a fat-burning machine"
```

---

## THE ART OF TRANSITIONS

### Why Transitions Matter

Bencivenga emphasized that long copy should flow like an informative editorial. No content should seem forced. Each section must connect seamlessly to the next.

### Transition Techniques

**1. The Bridge Question**
End one section with a question, answer it in the next:
```
"So how does this work in practice?
Let me show you..."
```

**2. The Promise Forward**
Hint at what's coming:
```
"But that's just the beginning. Because what I'm about to show you next is even more powerful..."
```

**3. The Objection Anticipation**
Acknowledge what the reader is thinking:
```
"Now, you might be wondering if this will work for you.
Here's why I'm confident it will..."
```

**4. The Story Continuation**
Use narrative to pull through:
```
"And that's when something unexpected happened..."
```

---

## EDITING RULES (THE BENCIVENGA WAY)

1. **Cut the first paragraph** - It's usually throat-clearing
2. **Eliminate empty adjectives** - "Amazing," "incredible," "fantastic"
3. **Replace passive with active** - "Mistakes were made" → "You made mistakes"
4. **Every sentence must have a purpose** - If it doesn't sell, cut it
5. **When in doubt, cut it** - If you're unsure, the answer is "cut"
6. **Read aloud** - Does it sound like a real person talking?
7. **The "so what?" test** - After each claim, ask "so what?" If you can't answer compellingly, revise or cut

---
