# copy-auditoria · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-auditoria.md` uma skill chamada copy-auditoria. Quando eu pedir algo como "audita esta copy: [texto]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# SOB A LUPA · Hopkins, otimização, debate e blend

A copy já existe e não está vendendo. O agente audita pelo método de Hopkins, otimiza linha a linha, coloca duas versões em debate e, quando faz sentido, funde o melhor de cada uma. Sai com o diagnóstico do que não vende e a versão corrigida.

## When to Use

- O pedido envolve: auditar copy, otimizar texto, comparar versões, split test, por que não vende.
- Diga: "audita esta copy: [texto]" ou "compara estas duas versões".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| audit copy hopkins | `references/audit-copy-hopkins.md` |
| optimize copy | `references/optimize-copy.md` |
| copy debate | `references/copy-debate.md` |
| blend | `references/blend.md` |
| review copy | `references/review-copy.md` |
| simple writing audit | `references/simple-writing-audit.md` |
| setup split test | `references/setup-split-test.md` |
| qa gate | `references/qa-gate.md` |

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

- `references/audit-copy-hopkins.md`
- `references/blend.md`
- `references/copy-debate.md`
- `references/optimize-copy.md`
- `references/qa-gate.md`
- `references/review-copy.md`
- `references/setup-split-test.md`
- `references/simple-writing-audit.md`


---

## Referência: references/audit-copy-hopkins.md

# Audit Copy - Hopkins Scientific Method

## Purpose

Scientific copy audit based on Claude Hopkins' principles from "Scientific Advertising" (1923). This is the FINAL audit gate before any copy goes live. Hopkins invented the rigorous, measurable approach to advertising that separates profitable copy from expensive guessing.

## When to Use

- **ALWAYS** - As the final checkpoint before publishing ANY copy
- Before A/B testing (validate fundamentals first)
- When copy is converting but you don't know why
- When copy isn't converting and you need diagnosis
- Before scaling ad spend on a winner
- When team disagrees on copy direction (data beats opinions)

## Hopkins' Core Audit Principles

```
"The only purpose of advertising is to make sales.
It is profitable or unprofitable according to its actual sales."
- Claude Hopkins, Scientific Advertising

AUDIT PHILOSOPHY:
1. Every claim must be provable
2. Every element must be testable
3. Every result must be measurable
4. Specificity beats generality ALWAYS
5. Service sells, pitching repels
```

## Inputs

```yaml
required:
  - copy_text: The full copy to audit (headline, body, CTA, offer)
  - copy_type: sales_page | email | ad | landing_page | vsl_script
  - product_name: What is being sold
  - target_audience: Who this is written for

optional:
  - current_metrics: CTR, conversion rate, AOV if available
  - tracking_codes: Existing UTMs or coupon codes
  - test_history: Previous versions tested
  - competitor_copy: What competitors are saying
```

## Workflow

### Phase 1: Salesmanship Test

Hopkins said: "Advertising is salesmanship. Its principles are the principles of salesmanship."

```
SALESMANSHIP AUDIT:

Would a salesperson say this face-to-face?

□ CONVERSATIONAL TONE
  - Reads like one person talking to another?
  - No corporate speak or jargon?
  - Could be spoken aloud naturally?
  Score: ___/10

  FAIL EXAMPLES:
  - "Leveraging synergies to optimize outcomes" (corporate)
  - "We are excited to announce" (no one talks like this)
  - "Solutions for your needs" (vague and generic)

  PASS EXAMPLES:
  - "Here's how to save $847 on your next order"
  - "I want to show you something that took me 3 years to figure out"
  - "You know that feeling when..."

□ SINGLE READER FOCUS
  - Written to ONE specific person?
  - Uses "you" more than "we/our/us"?
  - Addresses THEIR situation specifically?
  Score: ___/10

  Hopkins: "Don't think of people in the mass.
  That gives you a blurred view."

□ SELF-INTEREST ALIGNMENT
  - 100% focused on reader's benefit?
  - No self-congratulation about company?
  - Answers "What's in it for me?"
  Score: ___/10

  Hopkins: "Remember the people you address are selfish,
  as we all are. They care nothing about your interests or profit."

□ SELLING NOT ENTERTAINING
  - Purpose is conversion, not applause?
  - No clever wordplay that obscures message?
  - Entertainment value serves the sale?
  Score: ___/10

  Hopkins: "Ads are not written to entertain.
  Entertainment seekers are rarely the people you want."

SALESMANSHIP SCORE: ___/40
```

### Phase 2: Reason Why Audit

Hopkins said: "If a claim is worth making, make it in the most impressive way - by explaining WHY."

```
REASON WHY AUDIT:

Does every claim have a "Because..."?

□ CLAIM INVENTORY
  List all claims made in copy:

  Claim 1: _______________________
  Reason Why: ____________________
  Proof: ________________________

  Claim 2: _______________________
  Reason Why: ____________________
  Proof: ________________________

  Claim 3: _______________________
  Reason Why: ____________________
  Proof: ________________________

  (Continue for all claims)

□ REASON WHY COMPLETENESS
  - Every claim has explanation of WHY it's true?
  - Process/mechanism is revealed?
  - Reader can verify or understand the logic?
  Score: ___/10

  FAIL: "Our product is the purest"
  PASS: "We filter through 7 stages, including reverse osmosis at 0.0001 microns,
         removing 99.97% of contaminants - here's the lab report"

□ SCHLITZ PRINCIPLE APPLIED
  - Processes everyone does are EXPLAINED as if unique?
  - Common practices made interesting through detail?
  - "Behind the scenes" revealed?
  Score: ___/10

  Hopkins' Schlitz insight: Every brewery purified their beer.
  Hopkins explained HOW Schlitz did it (live steam, 245°).
  Result: 5th place to tied for 1st.

□ DIFFERENTIATION THROUGH EXPLANATION
  - Copy shows WHY this is different (not just claims it)?
  - Reader understands the mechanism?
  - Uniqueness is credible and specific?
  Score: ___/10

REASON WHY SCORE: ___/40
```

### Phase 3: Specificity Audit

Hopkins said: "Platitudes and generalities roll off the human understanding like water from a duck."

```
SPECIFICITY AUDIT:

Are claims precise or vague?

□ GENERALITY DETECTION
  Search for and flag these weak terms:

  [ ] "Best" - Replace with: _________
  [ ] "Leading" - Replace with: _________
  [ ] "Top" - Replace with: _________
  [ ] "Quality" - Replace with: _________
  [ ] "Fast" - Replace with: _________
  [ ] "Effective" - Replace with: _________
  [ ] "Many" - Replace with: _________
  [ ] "Several" - Replace with: _________
  [ ] "Affordable" - Replace with: _________
  [ ] "Premium" - Replace with: _________

  Generality Count: ___
  Target: 0

□ NUMBER SPECIFICITY
  - Uses exact numbers vs rounded? (37.4% not "about 40%")
  - Odd numbers used? (47 not 50, 2,847 not "about 3,000")
  - Source for numbers cited?
  Score: ___/10

  Hopkins: "Numbers build credibility.
  Round numbers look guessed. Exact numbers look measured."

□ TIME SPECIFICITY
  - Exact timeframes given? ("4 days" not "fast")
  - Results timeline specific? ("By Tuesday" not "soon")
  - Deadlines are precise? ("11:59pm EST Jan 15" not "limited time")
  Score: ___/10

□ RESULT SPECIFICITY
  - Outcomes are measurable? ("37% increase" not "better")
  - Examples include specifics? (name, place, amount)
  - Testimonials have concrete details?
  Score: ___/10

SPECIFICITY CONVERSION TABLE:
┌─────────────────────┬──────────────────────────────────────┐
│ VAGUE               │ SPECIFIC (Hopkins Style)             │
├─────────────────────┼──────────────────────────────────────┤
│ Many customers      │ 47,832 customers in 23 countries     │
│ Fast delivery       │ Arrives in 4.2 business days average │
│ High quality        │ 99.7% pass rate on 47-point QC       │
│ Save money          │ Save $847 per year (avg customer)    │
│ Popular choice      │ 3,247 sold in last 30 days           │
│ Experienced team    │ 127 combined years, 1,847 projects   │
│ Guaranteed results  │ 97.3% success rate or full refund    │
│ Limited time        │ Ends 11:59pm EST Friday, Jan 24      │
│ Affordable          │ $47/month (less than Netflix)        │
│ Best in class       │ Ranked #1 by [Source] 3 years in row │
└─────────────────────┴──────────────────────────────────────┘

SPECIFICITY SCORE: ___/40
```

### Phase 4: Service Audit

Hopkins said: "The best ads ask no one to buy. They are based entirely on service."

```
SERVICE AUDIT:

Does copy provide value BEFORE asking for money?

□ VALUE-FIRST TEST
  - Remove the product/CTA - is remaining content useful?
  - Would reader learn something even if they don't buy?
  - Is information genuinely helpful to them?
  Score: ___/10

  FAIL: "Buy now and get our amazing product!"
  PASS: "Here's how to identify the 3 signs of [problem]...
         (genuinely useful content)...
         If you want help fixing it, here's what we built..."

□ EDUCATION RATIO
  - What % is education vs pitch?
  - Minimum 60% educational content for long-form?
  - Reader feels helped, not sold to?
  Score: ___/10

□ CURIOSITY CREATION
  - Opens loops that make reader want more?
  - Uses Zeigarnik effect (incomplete = memorable)?
  - Creates genuine interest in mechanism/process?
  Score: ___/10

  Hopkins: "Curiosity is one of the strongest human incentives."

□ EXPERT POSITIONING
  - Copy demonstrates expertise through teaching?
  - Reader sees you as authority through content quality?
  - Trust built through helpfulness, not claims?
  Score: ___/10

SERVICE SCORE: ___/40
```

### Phase 5: Headline Audit

Hopkins said: "Headlines can change results by 500%."

```
HEADLINE AUDIT:

Does headline select the RIGHT people?

□ AUDIENCE SELECTION
  - Headline calls out specific audience?
  - Wrong people self-deselect?
  - Right people immediately identify?
  Score: ___/10

  Hopkins: "The purpose of a headline is to pick out people you can interest.
  You wish to talk to someone in a crowd."

  FAIL: "Introducing Our New Product Line" (who cares?)
  PASS: "To Parents Whose Children Struggle With Math" (specific callout)

□ BENEFIT PROMISE
  - Clear benefit stated or implied?
  - Reader knows what they'll get?
  - Promise is credible and specific?
  Score: ___/10

□ CURIOSITY GAP
  - Creates desire to read more?
  - Doesn't give everything away?
  - "I need to know more" response?
  Score: ___/10

□ TESTABLE HYPOTHESIS
  - Headline represents a hypothesis about what works?
  - Multiple variations created for testing?
  - Clear metric to measure winner?
  Score: ___/10

  Hopkins ran "Do You Make These Mistakes in English?" for 40 YEARS
  because he tested and found nothing beat it.

HEADLINE PATTERNS TO TEST:
1. Direct Benefit: "How to [achieve X] in [time]"
2. Curiosity: "Do You Make These Mistakes in [area]?"
3. News: "Announcing: [new thing] that [benefit]"
4. Callout: "To [specific audience] who [situation]"
5. Specific: "[Number] Ways to [achieve result]"

HEADLINE SCORE: ___/40
```

### Phase 6: Testability Audit

Hopkins said: "Almost any question can be answered, cheaply, quickly and finally, by a test campaign."

```
TESTABILITY AUDIT:

Can you measure and improve this copy?

□ TRACKING IMPLEMENTATION
  - Unique tracking code/UTM for this copy?
  - Different codes for different channels?
  - Attribution possible to this specific piece?
  Score: ___/10

  TRACKING CODE CHECKLIST:
  □ UTM Source: ____________
  □ UTM Medium: ____________
  □ UTM Campaign: ____________
  □ Coupon Code: ____________
  □ Phone Number: ____________
  □ Landing Page: ____________

□ VARIABLE ISOLATION
  - If testing, only ONE variable changed?
  - Control version documented?
  - Winner criteria defined before test?
  Score: ___/10

□ METRIC CLARITY
  - Primary success metric defined?
  - Secondary metrics identified?
  - ROI calculable from data?
  Score: ___/10

  PRIMARY METRIC: ____________
  SECONDARY: ____________
  ROI FORMULA: ____________

□ TEST VARIATIONS READY
  - At least 3 headline variations?
  - Offer variations considered?
  - CTA variations available?
  Score: ___/10

TESTABILITY SCORE: ___/40
```

### Phase 7: Sample/Trial Strategy Audit

Hopkins said: "The product itself should be its own best salesman."

```
SAMPLE STRATEGY AUDIT:

Does offer let product prove itself?

□ RISK REVERSAL
  - Trial/sample/guarantee offered?
  - Risk on seller, not buyer?
  - Objection "what if it doesn't work" addressed?
  Score: ___/10

  OPTIONS:
  - Free sample
  - Trial period
  - Money-back guarantee
  - Demo/preview
  - Proof before payment

□ SAMPLE QUALITY
  - Sample delivers FULL experience?
  - Not crippled/limited version?
  - Enough to form real impression?
  Score: ___/10

  Hopkins: "Sample must deliver the complete product experience."

□ SAMPLE QUALIFICATION
  - Sample goes to INTERESTED people only?
  - Some barrier to entry (not free for anyone)?
  - Creates respect, not desperation?
  Score: ___/10

  Hopkins: "Give samples to interested people only.
  Create an atmosphere of respect, a desire, an expectation."

□ FOLLOW-UP SYSTEM
  - What happens after sample?
  - Conversion path clear?
  - Timing defined?
  Score: ___/10

SAMPLE STRATEGY SCORE: ___/40
```

## Phase 8: Final Scoring

```
HOPKINS SCIENTIFIC COPY AUDIT - FINAL SCORE

┌────────────────────────┬────────┬────────┐
│ CATEGORY               │ SCORE  │ MAX    │
├────────────────────────┼────────┼────────┤
│ 1. Salesmanship        │ ___    │ /40    │
│ 2. Reason Why          │ ___    │ /40    │
│ 3. Specificity         │ ___    │ /40    │
│ 4. Service             │ ___    │ /40    │
│ 5. Headline            │ ___    │ /40    │
│ 6. Testability         │ ___    │ /40    │
│ 7. Sample Strategy     │ ___    │ /40    │
├────────────────────────┼────────┼────────┤
│ TOTAL                  │ ___    │ /280   │
└────────────────────────┴────────┴────────┘

PERCENTAGE: ____%

GRADE:
- 90%+ (252-280): PUBLISH - Scientific advertising excellence
- 80-89% (224-251): MINOR FIXES - Address noted issues
- 70-79% (196-223): SIGNIFICANT REVISION - Core issues present
- Below 70% (<196): REWRITE - Fundamental problems

VERDICT: ____________
```

## Outputs

### Output Format

```yaml
audit_summary:
  copy_type: [type audited]
  total_score: [X/280]
  percentage: [X%]
  grade: [PUBLISH | MINOR FIXES | REVISION | REWRITE]

strengths:
  - [What Hopkins would approve]
  - [Scientific elements present]

critical_issues:
  - issue: [Description]
    category: [Salesmanship | Reason Why | Specificity | etc.]
    current: [What copy says now]
    hopkins_fix: [How Hopkins would fix it]
    priority: [HIGH | MEDIUM | LOW]

tracking_plan:
  primary_metric: [What to measure]
  tracking_codes:
    - channel: [Name]
      code: [Tracking code]
  test_variations:
    - element: [Headline | Offer | CTA]
      versions: [List of variations to test]

next_steps:
  1: [First action]
  2: [Second action]
  3: [Third action]
```

## Hopkins' Final Words

```
"The compass of accurate knowledge directs
the shortest, safest, cheapest course."

"Guessing is not advertising. Testing is."

Before you publish, ask:
1. Can I measure this?
2. Can I test variations?
3. Can I prove my claims?
4. Would a salesperson say this face-to-face?

If any answer is NO, fix it first.
```

## Integration

- **Follows**: Eugene Schwartz diagnosis (awareness + sophistication levels)
- **Precedes**: Final publication or A/B test launch
- **Related Tasks**: setup-split-test.md, create-headlines.md
- **Related Checklist**: hopkins-audit-checklist.md


---

## Referência: references/blend.md

# Blend Task - Combinar Estilos de Copywriters

## Purpose
Criar copy híbrido combinando os pontos fortes de 2-4 copywriters diferentes, resultando em peças únicas que capturam o melhor de cada estilo.

## When to Use
- Quando nenhum copywriter individual atende 100% das necessidades
- Para criar um estilo único e diferenciado
- Quando você quer "o storytelling do Halbert com a elegância do Ogilvy"
- Para experimentar combinações criativas

## Inputs

```yaml
required:
  - copywriters: Lista de 2-4 copywriters para combinar
  - proportions: Peso de cada estilo (deve somar 100%)
  - copy_type: Tipo de peça a criar (sales_page, email, ad, headline, etc.)
  - briefing: Briefing completo do projeto

optional:
  - primary_copywriter: Quem define a estrutura base
  - blend_focus: O que combinar (voice, structure, techniques, all)
  - output_length: Curto, médio ou longo
```

## Copywriter Blend Matrix

### Combinações Recomendadas

| Combinação | Resultado | Ideal Para |
|------------|-----------|------------|
| Halbert + Ogilvy | Storytelling sofisticado | Produtos premium com história |
| Schwartz + Kennedy | Consciência + Urgência | Lançamentos em mercado saturado |
| Bencivenga + Sugarman | Bullets + Flow | Long-form com lista de benefícios |
| Kern + Hopkins | Autêntico + Testável | Digital com métricas |
| Benson + Halbert | VSL + Story | Vídeos emocionais |
| Ogilvy + Hopkins | Elegante + Científico | B2B e high-ticket |

### O Que Cada Copywriter Adiciona

| Copywriter | Contribuição Principal |
|------------|----------------------|
| Gary Halbert | Storytelling, emoção crua, headlines magnéticas |
| David Ogilvy | Elegância, pesquisa, credibilidade |
| Eugene Schwartz | Níveis de consciência, big ideas |
| Claude Hopkins | Testabilidade, especificidade, ofertas |
| Dan Kennedy | Urgência, deadlines, conversão direta |
| Gary Bencivenga | Bullets, fascinations, edição |
| Joe Sugarman | Flow, triggers, storytelling suave |
| Frank Kern | Autenticidade, casualidade, valor |
| Jon Benson | VSL structure, emoção, curiosidade |

## Workflow

### Step 1: Define Blend Parameters
```
Coletar:
1. Quais copywriters combinar? (2-4)
2. Qual a proporção de cada? (ex: 60% Halbert + 40% Ogilvy)
3. O que deve ser primário? (estrutura de quem?)
4. Qual tipo de copy criar?
5. Briefing do projeto
```

### Step 2: Extract DNA de Cada Copywriter
```
Para cada copywriter selecionado, extrair:
- Estrutura característica
- Tom de voz
- Técnicas assinatura
- Palavras/frases típicas
- Ritmo e cadência
```

### Step 3: Design Blend Strategy
```
Definir como combinar:

EXEMPLO: 60% Halbert + 40% Ogilvy

De Halbert (60%):
- Abertura com história pessoal
- Tom direto e provocador
- Urgência natural
- Garantia ousada

De Ogilvy (40%):
- Headlines com benefício específico
- Provas em números e fatos
- Tom final sofisticado
- Credibilidade institucional
```

### Step 4: Generate Blended Copy
```
Processo de criação:

1. ESTRUTURA: Use a estrutura do copywriter primário
2. ABERTURA: Aplique o estilo do copywriter com maior peso
3. CORPO: Intercale técnicas conforme proporções
4. FECHAMENTO: Combine CTAs dos dois estilos
5. REVISÃO: Garanta coesão e fluidez
```

### Step 5: DNA Analysis Output
```
Gerar análise mostrando:

## DNA Analysis

### Elementos de [Copywriter 1] (X%)
- [Técnica 1]: Aplicada em [seção]
- [Técnica 2]: Aplicada em [seção]
- Palavras características: "...", "..."

### Elementos de [Copywriter 2] (Y%)
- [Técnica 1]: Aplicada em [seção]
- [Técnica 2]: Aplicada em [seção]
- Palavras características: "...", "..."

### Pontos de Fusão
- [Seção] combina [técnica A] + [técnica B]
- [Transição] usa [estilo X] para [estilo Y]
```

### Step 6: Quality Validation
```
Checklist de blend:

- [ ] Proporções respeitadas?
- [ ] Técnicas-chave de cada copywriter presentes?
- [ ] Transições suaves entre estilos?
- [ ] Copy coeso (não parece "colagem")?
- [ ] DNA Analysis preciso?
- [ ] Resultado é distintivo (não é nenhum dos dois puros)?
```

## Output

```yaml
format: markdown
sections:
  - blend_strategy: Explicação de como foi combinado
  - dna_analysis: Breakdown de elementos de cada copywriter
  - blended_copy: A peça final
  - copywriter_markers: Onde cada estilo aparece
  - fusion_points: Onde os estilos se encontram
  - alternative_blend: Uma variação com proporções diferentes
```

## Examples

### Example 1: Halbert (70%) + Ogilvy (30%)

**Briefing:** Curso de copywriting, $997, para empreendedores

**Blend Strategy:**
- Halbert: História do criador, tom direto, urgência
- Ogilvy: Headlines factuais, prova em números, credibilidade

**Result Preview:**
```
HEADLINE (Ogilvy): "Como Escrever Copy Que Vende:
147 Alunos Já Faturaram R$2.4M Com Este Método"

LEAD (Halbert): "Caro amigo, deixa eu te contar uma história
que vai mudar sua relação com dinheiro para sempre..."

PROVA (Ogilvy): "Nos últimos 18 meses, 147 alunos aplicaram
este método e geraram, em média, R$16.326 cada um..."

CTA (Halbert): "Olha, eu sei que $997 parece muito.
Mas deixa eu te fazer uma pergunta..."
```

### Example 2: Benson (50%) + Bencivenga (50%)

**Briefing:** VSL para suplemento de energia

**Blend Strategy:**
- Benson: Estrutura VSL, emoção, curiosity loops
- Bencivenga: Bullets hipnóticos, fascinations

**Result Preview:**
```
HOOK (Benson): "O que eu vou te mostrar nos próximos
12 minutos pode parecer impossível..."

BULLETS (Bencivenga):
• O "mineral esquecido" que dobra energia em 72 horas
  (e custa menos que um café)
• Por que atletas olímpicos estão abandonando energéticos
  por esta cápsula de 3 gramas
• A descoberta acidental de um bioquímico insone que agora
  dorme 8h e acorda com mais energia que aos 20 anos

CLOSE (Benson): "Você sentiu isso? Essa curiosidade?
É exatamente assim que você vai se sentir toda manhã..."
```

## Blend Ratio Guidelines

### Para Resultados Equilibrados
- **50/50:** Dois estilos igualmente presentes
- **60/40:** Um dominante com toques do outro
- **70/30:** Claramente um estilo com influências sutis

### Para Três Copywriters
- **50/30/20:** Um primário, um secundário, um terciário
- **40/30/30:** Equilíbrio com leve dominância

### Para Quatro Copywriters
- **40/25/20/15:** Hierarquia clara
- **30/30/20/20:** Dois dominantes, dois suporte

## Anti-Patterns (Evitar)

❌ **Colagem óbvia:** Copy parece "cortado e colado"
❌ **Perda de identidade:** Nenhum estilo é reconhecível
❌ **Inconsistência de tom:** Muda abruptamente entre estilos
❌ **Proporções ignoradas:** Promete 60/40 mas entrega 90/10
❌ **Sem DNA Analysis:** Não documenta o que veio de onde

## Notes

- Blend funciona melhor com copywriters de eras próximas
- Combinações muito distantes (Hopkins + Kern) precisam cuidado extra
- O copywriter com maior peso define a "voz narrativa"
- Transições são os pontos mais críticos do blend

---

*Task Version: 1.0*
*CopywriterOS - Elite Copywriting Squad*


---

## Referência: references/copy-debate.md

# Copy Debate Task - Multi-Perspective Copywriting Debate

## Metadata

```yaml
task_id: copy-debate
version: 2.0
tier: TOOL
category: Quality Assurance
estimated_time: 45-90 minutes
difficulty: Advanced
dependencies:
  - Active briefing or copy piece
  - 2-4 copywriter personas selected
outputs:
  - Structured debate transcript
  - Synthesis document
  - Final copy recommendation
  - Lessons learned
```

---

## Purpose

Facilitar um debate estruturado entre 2-4 copywriters lendários sobre a melhor abordagem para um briefing específico, culminando em uma síntese do Copy Chief que extrai o melhor de cada perspectiva e produz copy superior ao que qualquer abordagem individual alcançaria.

Este processo combina:
- **Método Socrático** - Questionamento profundo de premissas
- **Pragma-Dialética** - Estrutura formal de discussão crítica
- **Steel-Manning** - Representar argumentos em sua forma mais forte
- **Devil's Advocate** - Desafiar sistematicamente cada abordagem
- **Síntese CODM** - Consensus-Oriented Decision Making

---

## When to Use

### Cenários Ideais

| Cenário | Benefício do Debate |
|---------|---------------------|
| Dúvida sobre abordagem | Explorar alternativas sistematicamente |
| Briefing complexo/ambíguo | Múltiplas perspectivas revelam insights |
| Projeto de alto valor | Investir tempo em qualidade superior |
| Aprendizado | Expor diferentes filosofias de copy |
| Copy não está convertendo | Diagnóstico por múltiplas lentes |
| Lançamento importante | Minimizar risco com escrutínio |

### Quando NÃO Usar

- Copy simples e direto
- Deadline extremamente curto
- Já há direção clara e validada
- Projeto de baixo impacto

---

## Inputs

```yaml
required:
  briefing:
    description: Briefing completo do projeto
    includes:
      - Produto/serviço
      - Avatar detalhado
      - Objetivo de conversão
      - Constraints (prazo, formato, tom)

  copywriters:
    description: Lista de 2-4 copywriters para participar
    minimum: 2
    maximum: 4
    options:
      - gary-halbert
      - david-ogilvy
      - eugene-schwartz
      - dan-kennedy
      - jon-benson
      - claude-hopkins
      - joe-sugarman
      - alex-hormozi
      - ramit-sethi      # [ARCHIVED] - use ben-settle for emails
      - frank-kern
      - gary-bencivenga
      - dan-koe
      - todd-brown

  question:
    description: Pergunta central ou tópico do debate
    examples:
      - "Qual a melhor abordagem de hook para este VSL?"
      - "Como estruturar a oferta para máxima conversão?"
      - "Storytelling ou direto ao ponto para este avatar?"

optional:
  copy_type:
    description: Tipo de peça em discussão
    options:
      - sales_page
      - email_sequence
      - vsl
      - headline
      - lead_magnet
      - webinar_script
      - ad_copy
      - landing_page
    default: inferred_from_briefing

  debate_focus:
    description: Foco específico do debate
    options:
      - approach      # Abordagem geral
      - structure     # Estrutura do copy
      - tone          # Tom e voz
      - hook          # Abertura/hook
      - offer         # Estrutura da oferta
      - all           # Debate completo
    default: all

  constraints:
    description: Restrições ou requisitos obrigatórios
    examples:
      - "Máximo 500 palavras"
      - "Tom profissional, não casual"
      - "Sem urgência artificial"

  winning_criteria:
    description: Como determinar a abordagem vencedora
    default: "Maior probabilidade de conversão para o avatar específico"
```

---

## Debate Methodology

### Framework Teórico

O debate segue princípios estabelecidos de argumentação e tomada de decisão:

**1. Pragma-Dialética (van Eemeren & Grootendorst)**
```
4 Estágios da Discussão Crítica:
1. CONFRONTAÇÃO - Identificar diferença de opinião
2. ABERTURA - Estabelecer regras e pontos comuns
3. ARGUMENTAÇÃO - Troca de argumentos e contra-argumentos
4. CONCLUSÃO - Determinar resultado
```

**2. Método Socrático**
```
6 Tipos de Perguntas:
1. Clarificação - "O que você quer dizer com...?"
2. Suposições - "O que você está assumindo?"
3. Evidência - "Que dados suportam isso?"
4. Perspectivas - "Como alguém que discorda veria?"
5. Implicações - "Quais as consequências?"
6. Meta - "Por que essa pergunta importa?"
```

**3. Steel-Manning (Daniel Dennett)**
```
4 Passos:
1. Reformular posição do oponente tão bem que ele concorde
2. Listar pontos de concordância
3. Mencionar o que aprendeu com a posição
4. Só então criticar
```

---

## Debate Structure (4 Rounds)

### Round 1: OPENING STATEMENTS (Apresentação)

**Objetivo:** Cada copywriter apresenta sua abordagem proposta para o briefing.

**Duração:** ~300-400 palavras por copywriter

**Estrutura por Copywriter:**

```markdown
### **[NOME DO COPYWRITER]:**

**1. Análise do Briefing:**
- Pontos-chave identificados no produto/avatar/objetivo
- Insights específicos que informam minha abordagem
- O que considero mais importante neste caso

**2. Abordagem Proposta:**
- Estrutura geral (abertura → corpo → oferta → CTA)
- Tom e voz recomendados
- Ângulo principal de ataque

**3. Justificativa:**
- Por que esta abordagem funciona para ESTE caso específico
- Precedentes ou evidências que suportam
- Conexão com psicologia do avatar

**4. Técnicas Específicas:**
- Lista de técnicas que serão usadas
- Como cada técnica serve ao objetivo

**5. Preview de Abertura:**
```
[Primeiras linhas do copy proposto - demonstração concreta]
```
```

**Critérios de Qualidade Round 1:**
- [ ] Voz distintiva do copywriter
- [ ] Análise específica (não genérica)
- [ ] Abordagem genuinamente diferente dos outros
- [ ] Técnicas características presentes
- [ ] Preview convincente

---

### Round 2: CROSS-EXAMINATION (Críticas)

**Objetivo:** Cada copywriter identifica pontos fracos nas abordagens dos outros.

**Duração:** ~150-200 palavras por crítica

**Regras de Engajamento:**

```
✓ PERMITIDO:
- Críticas técnicas e específicas
- Baseadas em princípios de copywriting
- Identificar riscos genuínos
- Questionar premissas

✗ NÃO PERMITIDO:
- Ataques pessoais
- Críticas vagas ("não é bom")
- Preferência pessoal sem fundamento
- Strawman (distorcer argumento do outro)
```

**Formato de Crítica:**

```markdown
### **[COPYWRITER A] critica [COPYWRITER B]:**

**Ponto Fraco Identificado:**
[Descrição específica da fraqueza]

**Risco Associado:**
[Consequência potencial negativa]

**Evidência:**
[Por que acredito que isso é um problema]
- Dados de mercado
- Comportamento do avatar
- Precedentes conhecidos

**Pergunta Socrática:**
[Questão que desafia a premissa]
```

**Técnica: Devil's Advocate**

Cada copywriter age como "advogado do diabo" para os outros:

```
PREMISSAS A QUESTIONAR:
- "E se o avatar NÃO pensar assim?"
- "E se o mercado já estiver saturado deste ângulo?"
- "O que acontece se as primeiras 5 palavras não captarem?"
- "E se lerem apenas o P.S.?"

CENÁRIOS ADVERSOS:
- "E se a taxa de abertura for 50% menor?"
- "E se scrollarem direto para o preço?"
- "E se o concorrente lançar algo similar amanhã?"
```

**Matriz de Cross-Examination (3 copywriters):**

```
Halbert → critica Ogilvy e Kennedy
Ogilvy → critica Halbert e Kennedy
Kennedy → critica Halbert e Ogilvy
```

**Critérios de Qualidade Round 2:**
- [ ] Críticas específicas e técnicas
- [ ] Baseadas em princípios reais
- [ ] Cobrem riscos genuínos
- [ ] Tom profissional (não pessoal)
- [ ] Cada abordagem foi examinada

---

### Round 3: REBUTTALS (Defesas)

**Objetivo:** Cada copywriter defende sua abordagem das críticas recebidas.

**Duração:** ~200-250 palavras por defesa

**Técnica: Steel-Manning**

Antes de defender, demonstrar que ENTENDEU a crítica:

```markdown
### **[COPYWRITER] responde às críticas:**

**Para crítica de [OUTRO COPYWRITER]:**

**Reconheço o Ponto Válido:**
[Demonstrar que entendeu a crítica - steel-manning]
"Você está correto que [aspecto da crítica]. Isso é uma
preocupação legítima porque [razão]."

**Porém, Considere:**
[Contra-argumento substantivo]
"No entanto, minha abordagem mitiga isso através de [técnica]
porque [razão]."

**Mitigação/Adaptação:**
[Como o risco será evitado ou se a proposta foi ajustada]
"Para endereçar essa preocupação, ajusto minha proposta para
incluir [modificação]."

**Reforço do Ponto Forte:**
[Por que a abordagem ainda é válida]
"O que minha abordagem oferece de único é [diferencial]."
```

**Quando Ceder vs Manter Posição:**

| Situação | Ação |
|----------|------|
| Crítica identifica falha fatal | Ajustar proposta significativamente |
| Crítica identifica risco gerenciável | Mitigar com técnica específica |
| Crítica é preferência pessoal | Manter posição com rationale |
| Crítica revela insight novo | Incorporar insight |

**Critérios de Qualidade Round 3:**
- [ ] Críticas foram adequadamente endereçadas
- [ ] Defesas são substantivas (não dismissivas)
- [ ] Houve adaptação quando apropriado
- [ ] Posições mantidas têm justificativa válida
- [ ] Steel-manning foi aplicado

---

### Round 4: SYNTHESIS (Síntese do Copy Chief)

**Objetivo:** Copy Chief analisa imparcialmente e determina melhor caminho.

**Duração:** Completa (análise + copy final)

**Estrutura da Síntese:**

```markdown
## ⚖️ SÍNTESE DO COPY CHIEF

### 1. ANÁLISE COMPARATIVA

**Matriz de Avaliação:**

| Copywriter | Hook (1-10) | Estrutura (1-10) | Prova (1-10) | Fit c/ Avatar (1-10) | TOTAL |
|------------|-------------|------------------|--------------|----------------------|-------|
| [A] | | | | | |
| [B] | | | | | |
| [C] | | | | | |

**Pontos Fortes por Abordagem:**

**[COPYWRITER A]:**
- [Força 1]
- [Força 2]
- [Força 3]

**[COPYWRITER B]:**
- [Força 1]
- [Força 2]
- [Força 3]

**Pontos Fracos Confirmados:**

| Abordagem | Fraqueza | Severidade | Mitigável? |
|-----------|----------|------------|------------|
| [A] | [Desc] | Alta/Média/Baixa | Sim/Não |
| [B] | [Desc] | Alta/Média/Baixa | Sim/Não |

**Fit com Briefing:**
[Análise de qual abordagem melhor atende aos requisitos específicos]

---

### 2. DECISÃO: WINNING APPROACH

**Escolha:** [Abordagem X / Híbrido de X+Y+Z]

**Rationale Completo:**
[Explicação detalhada de por que esta escolha]

**Elementos Incorporados de Cada:**

| Copywriter | Elemento Usado | Por Quê |
|------------|----------------|---------|
| [A] | [Elemento] | [Razão] |
| [B] | [Elemento] | [Razão] |
| [C] | [Elemento] | [Razão] |

**Elementos Deliberadamente NÃO Incluídos:**

| Elemento | Fonte | Razão para Exclusão |
|----------|-------|---------------------|
| [Elemento] | [Copywriter] | [Razão] |

---

### 3. COPY FINAL

```
[Copy completo implementando a abordagem vencedora,
incorporando os melhores elementos de cada perspectiva,
evitando os riscos identificados]
```

---

### 4. DOCUMENTAÇÃO

**Por que esta síntese é superior:**
[Explicação de como a síntese supera qualquer abordagem individual]

**Riscos Mitigados:**
- [Risco 1] → [Como foi endereçado]
- [Risco 2] → [Como foi endereçado]

**Trade-offs Aceitos:**
- [Trade-off] → [Justificativa]
```

**Critérios de Qualidade Round 4:**
- [ ] Análise imparcial (não favorece um copywriter)
- [ ] Decisão claramente justificada
- [ ] Melhores elementos de cada foram incorporados
- [ ] Copy final é coeso (não "Frankenstein")
- [ ] Rationale completo documentado

---

## Copywriter Perspective Frameworks

### Lentes de Avaliação por Copywriter

Cada copywriter avalia copy através de uma "lente" característica:

**GARY HALBERT - Conexão Humana**
```yaml
foco_principal: Storytelling e empatia
perguntas_características:
  - "Isso fala com UMA pessoa específica?"
  - "Há uma história que cria conexão imediata?"
  - "O leitor pode se ver nesta situação?"
  - "As primeiras palavras capturam atenção?"
critérios:
  - Personalização extrema
  - Storytelling emocional
  - Vulnerabilidade autêntica
  - Hook irresistível
técnicas_preferidas:
  - Cartas pessoais
  - Histórias de "rock bottom"
  - Linguagem conversacional
  - Conexão um-para-um
```

**DAVID OGILVY - Pesquisa e Clareza**
```yaml
foco_principal: Dados e informação
perguntas_características:
  - "Qual dado suporta esta claim?"
  - "O headline contém benefício claro?"
  - "Cada fato está verificado?"
  - "A mensagem é absolutamente clara?"
critérios:
  - Research-backed
  - Headline forte com benefício
  - Informação específica
  - Clareza cristalina
técnicas_preferidas:
  - Headlines factuais
  - Long-form informativo
  - Testimonials verificáveis
  - Brand image consistente
```

**EUGENE SCHWARTZ - Níveis de Consciência**
```yaml
foco_principal: Market awareness e sophistication
perguntas_características:
  - "Em que nível de consciência está o avatar?"
  - "O copy encontra o leitor onde ele está?"
  - "A promessa é proporcional ao awareness?"
  - "O mecanismo único está claro?"
critérios:
  - Awareness-appropriate
  - Mecanismo explicado
  - Desejo canalizado (não criado)
  - Market sophistication matched
técnicas_preferidas:
  - Intensificação de headlines
  - Mechanism copy
  - Desejo existente → produto
  - Sofisticação progressiva
```

**DAN KENNEDY - Urgência e Resultado**
```yaml
foco_principal: Ação imediata e ROI
perguntas_características:
  - "Por que comprar AGORA?"
  - "Qual a consequência de não agir?"
  - "O CTA é direto e claro?"
  - "Há escassez ou deadline real?"
critérios:
  - Urgência real (não artificial)
  - Consequência clara
  - CTA direto
  - Zero enrolação
técnicas_preferidas:
  - Deadlines concretos
  - Consequência de inação
  - CTAs múltiplos e diretos
  - Bonuses com deadline
```

**JON BENSON - Formato Moderno**
```yaml
foco_principal: Mobile e atenção curta
perguntas_características:
  - "Funciona em dispositivo móvel?"
  - "O ritmo mantém scroll?"
  - "Cada slide tem propósito?"
  - "A promessa é visível em 3 segundos?"
critérios:
  - Mobile-optimized
  - Ritmo acelerado
  - Visualmente escaneável
  - Promessa imediata
técnicas_preferidas:
  - VSL format
  - Micro-compromissos
  - Pattern interrupts visuais
  - Short paragraphs
```

**CLAUDE HOPKINS - Abordagem Científica**
```yaml
foco_principal: Testabilidade e dados
perguntas_características:
  - "Isso pode ser testado?"
  - "Qual claim é mais forte baseada em dados?"
  - "O que testes anteriores mostraram?"
  - "Há razão específica para acreditar?"
critérios:
  - Testável
  - Data-driven
  - Específico (números, fatos)
  - Reason-why presente
técnicas_preferidas:
  - Cuponing/tracking
  - Headlines testáveis
  - Claims específicas
  - Sampling strategies
```

**ALEX HORMOZI - Valor Percebido**
```yaml
foco_principal: Oferta irresistível
perguntas_características:
  - "A oferta parece no-brainer?"
  - "Os bonuses superam objeções?"
  - "O preço está ancorado corretamente?"
  - "Há stack de valor?"
critérios:
  - Grand slam offer
  - Value stack
  - Price anchoring
  - Garantia poderosa
técnicas_preferidas:
  - Oferta > 10x do preço
  - Bonuses estratégicos
  - Garantia que remove risco
  - Urgência genuína
```

**JOE SUGARMAN - Slippery Slide**
```yaml
foco_principal: Leitura contínua
perguntas_características:
  - "Cada frase faz querer ler a próxima?"
  - "Há 'escorregador' do início ao fim?"
  - "Os curiosity loops estão funcionando?"
  - "O momentum é mantido?"
critérios:
  - Fluxo irresistível
  - Curiosity loops
  - Transições suaves
  - Engagement constante
técnicas_preferidas:
  - Seeds of curiosity
  - Storytelling extenso
  - Transições que puxam
  - Momentum building
```

**GARY BENCIVENGA - Persuasão Profunda**
```yaml
foco_principal: Psicologia e persuasão
perguntas_características:
  - "Qual o insight psicológico aqui?"
  - "A persuasão é sutil ou óbvia?"
  - "Há layers de significado?"
  - "O leitor sente que decidiu sozinho?"
critérios:
  - Psicologia profunda
  - Persuasão elegante
  - Múltiplos níveis
  - Autonomia preservada
técnicas_preferidas:
  - Fascinations
  - Implied conclusions
  - Social proof sofisticado
  - Reason-why advertising
```

---

## Debate Combinations Matrix

### Debates por Tipo de Projeto

| Tipo de Projeto | Copywriters Recomendados | Razão |
|-----------------|-------------------------|-------|
| **VSL** | Benson, Halbert, Kennedy | Formato, emoção, urgência |
| **Sales Page Longa** | Sugarman, Schwartz, Ogilvy | Flow, awareness, credibilidade |
| **Email Sequence** | Sethi, Halbert, Kennedy | Relação, história, ação |
| **Landing Page** | Hormozi, Kennedy, Benson | Oferta, urgência, formato |
| **Headline/Hook** | Halbert, Benson, Schwartz | Hooks diferentes |
| **Oferta/Pricing** | Hormozi, Kennedy, Bencivenga | Valor, urgência, psicologia |
| **B2B/Formal** | Ogilvy, Hopkins, Bencivenga | Credibilidade, dados, persuasão |
| **Curso/Educação** | Sethi, Sugarman, Halbert | Transformação, engagement, conexão |

### Debates de Alto Contraste (Recomendados)

Debates com maior contraste filosófico produzem insights mais ricos:

```
TRADICIONAL vs MODERNO:
├── Hopkins vs Hormozi (Scientific vs $100M Offers)
├── Ogilvy vs Kern (Formal vs Casual)
└── Schwartz vs Benson (Print vs Digital)

EMOCIONAL vs RACIONAL:
├── Halbert vs Hopkins (História vs Dados)
├── Benson vs Ogilvy (VSL emocional vs Copy factual)
└── Kern vs Sugarman (Casual vs Meticulous)

CURTO vs LONGO:
├── Kennedy vs Sugarman (Direto vs Slippery Slide)
└── Hormozi vs Schwartz (Punchy vs Extensive)

URGÊNCIA vs RELAÇÃO:
├── Kennedy vs Sethi (Deadline vs Nurture)
└── Kern vs Halbert (Fast CTA vs Deep Connection)
```

### Combinações por Tema do Debate

| Tema | Trio Sugerido | Por quê |
|------|---------------|---------|
| Hook/Abertura | Halbert, Benson, Kern | 3 filosofias de hook distintas |
| Estrutura VSL | Benson, Schwartz, Kennedy | Formato, awareness, urgência |
| Long vs Short | Ogilvy, Sugarman, Kennedy | Informação vs flow vs direto |
| Emoção vs Lógica | Halbert, Hopkins, Ogilvy | Espectro emocional completo |
| Storytelling | Halbert, Benson, Sugarman | 3 estilos de narrativa |
| Urgência/CTA | Kennedy, Kern, Halbert | Níveis de pressão variados |
| Ofertas | Hormozi, Kennedy, Schwartz | Valor, urgência, sofisticação |
| Emails | Sethi, Halbert, Sugarman | Relação, história, engagement |

---

## Critique Frameworks

### Framework SLICE para Feedback

```yaml
S - SPECIFIC (Específico):
  bad: "Não gostei do hook"
  good: "O hook 'E se você pudesse...' está saturado neste mercado de crypto"

L - LINKED (Ligado aos Objetivos):
  format: "Dado que o objetivo é [X], isso [ajuda/prejudica] porque [Y]"
  example: "Dado que o objetivo é CTR >3%, hook atual pode não ser disruptivo"

I - IMPACT (Focado em Impacto):
  format: "Se mantivermos [X], provavelmente veremos [consequência mensurável]"
  example: "Se mantivermos CTA fraco, conversão pode cair 30-40%"

C - CONSTRUCTIVE (Construtivo):
  format: "Em vez de [atual], considere [alternativa] porque [razão]"
  example: "Em vez de 'Clique aqui', considere 'Garanta sua vaga agora' para criar urgência"

E - EMPOWERING (Empoderante):
  format: "Isso é uma perspectiva - você tem mais contexto sobre [aspecto]"
  purpose: Preservar autonomia criativa
```

### Framework Three C's (Context, Content, Craft)

```yaml
CONTEXT (Contexto - O onde/quando/por quê):
  questions:
    - Onde a pessoa verá isso? (feed, email, busca)
    - Em que momento da jornada? (awareness level)
    - Por que ela se importaria? (problema, desejo)
    - Qual ação queremos? (click, leia, compre)
  evaluation:
    - O copy faz sentido NESTE contexto?
    - Considera as limitações do meio?

CONTENT (Conteúdo - A mensagem):
  questions:
    - Mensagem principal está clara?
    - Benefício é óbvio?
    - Promessa é crível?
    - Prova é suficiente?
  evaluation:
    - Entenderia em 5 segundos?
    - Mensagem é diferenciada?

CRAFT (Execução - A qualidade):
  questions:
    - Headline captura atenção?
    - Ritmo mantém leitura?
    - Voz é consistente?
    - Há erros?
  evaluation:
    - Flui naturalmente?
    - Cada palavra trabalha?
```

### Framework Head-Heart-Body

```yaml
HEAD (Cabeça - Pré-Criativo):
  when: Antes de criar, revisando briefing
  focus:
    - Problema bem definido?
    - Audiência clara?
    - Insight verdadeiro?
    - Estratégia sólida?

HEART (Coração - Conceito):
  when: Primeira apresentação criativa
  focus:
    - Conceito distintivo?
    - Ressoa emocionalmente?
    - É executável?
    - Alinha com marca?

BODY (Corpo - Execução):
  when: Revisão de versão final
  focus:
    - Conteúdo correto?
    - Qualidade técnica?
    - Consistência?
    - Erros eliminados?
```

---

## Quality Checklists

### Pre-Debate Checklist

```markdown
□ Briefing está completo e claro
□ 2-4 copywriters foram selecionados
□ Pergunta central está definida
□ Constraints estão documentadas
□ Tempo adequado está disponível
□ Critérios de winning estão claros
```

### Round 1 - Opening Statements

```markdown
□ Cada copywriter tem voz distintiva?
□ Abordagens são genuinamente diferentes?
□ Técnicas características estão presentes?
□ Preview de execução é convincente?
□ Justificativas são fundamentadas?
□ Análise do briefing é específica?
```

### Round 2 - Cross-Examination

```markdown
□ Críticas são específicas e técnicas?
□ Baseadas em princípios, não preferência?
□ Cobrem riscos genuínos?
□ Tom é profissional (não pessoal)?
□ Cada abordagem foi criticamente examinada?
□ Perguntas socráticas foram usadas?
```

### Round 3 - Rebuttals

```markdown
□ Críticas foram adequadamente endereçadas?
□ Defesas são substantivas?
□ Houve adaptação quando apropriado?
□ Posições mantidas têm justificativa válida?
□ Steel-manning foi aplicado?
□ Concessões foram feitas quando necessário?
```

### Round 4 - Synthesis

```markdown
□ Análise é imparcial?
□ Decisão é claramente justificada?
□ Melhores elementos foram incorporados?
□ Copy final é coeso (não Frankenstein)?
□ Rationale completo está documentado?
□ Trade-offs estão explicados?
```

### Post-Debate Checklist

```markdown
□ Debate gerou insights não-óbvios?
□ Copy final é superior a qualquer proposta individual?
□ Aprendizados foram documentados?
□ Padrões reutilizáveis foram identificados?
□ Próximos passos estão claros?
```

---

## Anti-Patterns a Evitar

### No Processo

| Anti-Pattern | Descrição | Solução |
|--------------|-----------|---------|
| **Echo Chamber** | Todos concordam rápido demais | Designar devil's advocate explícito |
| **Alpha Dominance** | Um copywriter domina discussão | Tempo igual para todos, moderador controla |
| **Analysis Paralysis** | Debate sem conclusão | Time-box cada round |
| **Personal Attacks** | Críticas pessoais | Moderador intervém, regras claras |
| **Vagueness** | Críticas vagas sem substância | Exigir especificidade (SLICE) |
| **Strawmanning** | Distorcer argumento do outro | Exigir steel-manning |

### No Output

| Anti-Pattern | Descrição | Solução |
|--------------|-----------|---------|
| **Frankenstein** | Síntese desconexa de partes | Copy Chief refina para coesão |
| **Weakest Common** | Consenso pelo mínimo comum | Buscar integração, não compromisso |
| **Ignored Insights** | Boas ideias descartadas | Documentar tudo, justificar exclusões |
| **Undocumented** | Decisões sem rationale | Template obrigatório com rationale |
| **Identical Voices** | Copywriters soando igual | Enfatizar características únicas |

---

## Output Format

### Estrutura do Documento de Debate

```yaml
format: markdown
sections:
  1. debate_header:
    - Metadata (data, copywriters, briefing)
    - Pergunta central
    - Critérios de winning

  2. round_1_opening:
    - Opening statement de cada copywriter
    - Análise + abordagem + preview

  3. round_2_critiques:
    - Cross-examination completa
    - Todas as combinações de críticas

  4. round_3_rebuttals:
    - Defesas de cada copywriter
    - Adaptações feitas

  5. round_4_synthesis:
    - Análise comparativa do Copy Chief
    - Decisão e rationale
    - Copy final implementado

  6. debate_insights:
    - Principais aprendizados
    - Padrões para reutilização
    - Erros a evitar
```

---

## Example Output

```markdown
# Copy Debate: Melhor Hook para VSL de Curso de Copywriting

**Data:** 2026-01-23
**Copywriters:** Gary Halbert, Jon Benson, Dan Kennedy
**Briefing:** Curso de copywriting R$997, avatar empreendedor 25-45, frustrado com vendas baixas
**Pergunta Central:** Qual a melhor abordagem de hook para capturar atenção nos primeiros 5 segundos?

---

## 🎤 ROUND 1: OPENING STATEMENTS

### **[GARY HALBERT]:**

**Análise do Briefing:**
O avatar é um empreendedor frustrado. Frustração é emoção. Emoção é minha especialidade. Ele já tentou várias coisas que não funcionaram. Precisa de alguém que ENTENDA sua dor antes de oferecer solução.

**Abordagem Proposta:**
Começar com história pessoal de "rock bottom" que espelha a situação do avatar. Criar identificação imediata. Só depois revelar a solução.

**Justificativa:**
Empreendedores frustrados estão cansados de promessas. Precisam primeiro sentir que você ENTENDE antes de ouvir mais uma solução. História cria essa ponte.

**Técnicas:**
- Abertura em primeira pessoa
- Cenário visual específico (3h da manhã, cursor piscando)
- Curiosity loop no final

**Preview:**
```
"Eram 3h da manhã e eu estava olhando para o cursor piscando na tela...
com R$47 na conta e uma pilha de boletos na mesa.
Minha esposa dormia no quarto ao lado, sem saber que eu estava a 30 dias
de perder tudo.

Foi naquela noite que eu descobri os 7 caracteres que mudaram tudo..."
```

---

### **[JON BENSON]:**

**Análise do Briefing:**
Avatar moderno, provavelmente vendo no celular, atenção de 8 segundos. Não tenho tempo para história longa. Preciso de promessa clara em 3 segundos + prova implícita em 5.

**Abordagem Proposta:**
VSL moderno: promessa específica + timeframe + proof number. Pular história, ir direto ao valor.

**Justificativa:**
Dados mostram que atenção em vídeo cai 40% após 10 segundos sem promessa clara. Avatar ocupado quer saber "vale meu tempo?" antes de investir atenção.

**Técnicas:**
- Promessa com número específico
- Timeframe definido (12 minutos)
- Social proof implícito (2.847 pessoas)

**Preview:**
```
"O que eu vou te mostrar nos próximos 12 minutos vai parecer impossível...
[PAUSA]
...mas já transformou 2.847 pessoas que NÃO sabiam escrever
em copywriters que faturam 5 dígitos por mês.

E não, você não precisa de talento. Você precisa de UM framework."
```

---

### **[DAN KENNEDY]:**

**Análise do Briefing:**
Empreendedor frustrado = já viu muita coisa. Não quer mais enrolação. Quer saber: funciona ou não? Quanto custa? Por que agora?

**Abordagem Proposta:**
Direto ao ponto. Atenção + urgência + promessa de eficiência. Zero storytelling no início.

**Justificativa:**
Storytelling é 2005. Avatar de hoje já viu milhares de histórias de "rock bottom". Diferenciação está em NÃO fazer o esperado.

**Técnicas:**
- Abertura com ATENÇÃO
- Deadline imediato
- Promessa de eficiência (direto ao ponto)

**Preview:**
```
"ATENÇÃO: Se você quer escrever copy que vende, você tem exatamente
72 horas para aplicar o que vou te mostrar.

Depois disso, esta página SAI DO AR e você volta para o Google tentando
aprender com conteúdo grátis que nunca vai te dar resultado real.

Pronto? Ótimo. Vamos direto ao ponto..."
```

---

## 🔍 ROUND 2: CROSS-EXAMINATION

### **[BENSON] critica [HALBERT]:**

**Ponto Fraco:** História de "3h da manhã" é clichê de 2005. Todo VSL usa isso.

**Risco:** Avatar moderno faz scroll antes de chegar na promessa. Drop-off de 40%+ nos primeiros 10 segundos.

**Evidência:** Dados de heatmap mostram que atenção em vídeo cai drasticamente após 8 segundos sem promessa clara. Avatar já viu essa história 100 vezes.

**Pergunta Socrática:** "Se o avatar já viu dezenas de histórias de 'rock bottom', o que faz a SUA diferente o suficiente para manter atenção?"

---

### **[HALBERT] critica [BENSON]:**

**Ponto Fraco:** "12 minutos" pode afugentar quem tem pouco tempo. E "2.847 pessoas" parece número fabricado.

**Risco:** Números muito específicos demais geram desconfiança. Avatar pensa "isso é real?"

**Evidência:** Estudos mostram que números redondos parecem mais críveis que números quebrados demais. 2.847 parece que você inventou ontem.

**Pergunta Socrática:** "Se a promessa parece boa demais, o avatar acredita ou desconfia?"

---

### **[KENNEDY] critica [HALBERT] e [BENSON]:**

**Ponto Fraco de Ambos:** Nenhum cria urgência REAL. Avatar assiste, gosta, e "volta depois" (nunca volta).

**Risco:** Sem deadline concreto = sem ação imediata. Taxa de conclusão de VSL sem urgência é <15%.

**Evidência:** Meus próprios testes mostram que deadline aumenta conversão em 200-400%. Sem deadline, pessoas procrastinam eternamente.

**Pergunta Socrática:** "Quantas vezes você mesmo disse 'vou ver depois' e nunca mais voltou?"

---

[Continua com Round 3 e 4...]
```

---

## Workflow Integration

### Step 1: Prepare Debate

```
1. Coletar inputs completos
   - Briefing detalhado
   - Avatar profile
   - Objetivos e KPIs

2. Selecionar copywriters
   - 2-4 copywriters
   - Preferir alto contraste filosófico
   - Considerar tipo de projeto

3. Definir pergunta central
   - Específica e debatível
   - Múltiplas respostas válidas possíveis

4. Estabelecer critérios
   - Como determinar "vencedor"
   - Constraints e requisitos
```

### Step 2: Execute Rounds

```
Para cada Round (1-4):
1. Introduzir objetivo do round
2. Executar conforme estrutura
3. Verificar critérios de qualidade
4. Documentar output
5. Transicionar para próximo round
```

### Step 3: Post-Debate

```
1. Revisar síntese
   - Coesão do copy final
   - Completude do rationale

2. Documentar learnings
   - Padrões identificados
   - Técnicas efetivas
   - Erros a evitar

3. Preparar deliverables
   - Copy final formatado
   - Documento de debate arquivado
   - Action items
```

---

## Integration with Copy Framework

### Tier Integration

| Tier | Debate Role |
|------|-------------|
| **Tier 0 (Briefing)** | Input para debate |
| **Tier 1 (Research)** | Informa perspectivas |
| **Tier 2 (Structure)** | Debate sobre estrutura |
| **Tier 3 (Execution)** | Copy final do debate |
| **TOOL (Debate)** | Este task |

### Handoff

```yaml
input_from:
  - Tier 0 briefing completo
  - Tier 1 research (se disponível)

output_to:
  - Copy final para Tier 3 refinement
  - Learnings para knowledge base
  - Padrões para projetos futuros
```

---

## Notes

- Debates funcionam melhor com copywriters de filosofias diferentes
- Copy Chief deve ser imparcial (não favorecer um copywriter)
- O valor está tanto no DEBATE quanto no copy final
- Insights são reutilizáveis em projetos futuros
- 2-3 copywriters é ideal; 4 pode ficar muito longo
- Time-box cada round para evitar paralisia
- Documentar TUDO - decisões não documentadas são perdidas

---

*Task Version: 2.0*
*Last Updated: 2026-01-23*
*Copy Framework v2.0 - Multi-Perspective Debate System*


---

## Referência: references/optimize-copy.md

---
task-id: optimize-copy
name: Optimize Existing Copy
agent: copywriter
version: 1.0.0
purpose: Analyze and optimize existing copy for better conversion rates

workflow-mode: interactive
elicit: true
elicitation-type: custom

prerequisites:
  - Existing copy to optimize
  - Current performance data (optional but helpful)

inputs:
  - name: current_copy
    type: text
    description: The existing copy to optimize
    required: true
  - name: goal
    type: enum
    description: Optimization goal
    required: true
    options: ["higher-ctr", "more-conversions", "better-engagement", "clearer-message"]
  - name: performance_data
    type: object
    description: Current performance metrics (CTR, conversion rate, etc.)
    required: false

outputs:
  - path: "outputs/copywriter-os/{date}-optimized-{slug}.md"
    description: Optimized copy with analysis
    format: "markdown"

validation:
  success-criteria:
    - "Issues in current copy identified"
    - "Specific optimizations suggested"
    - "Optimized version provided"
    - "A/B test recommendations included"
---

# Task: Optimize Existing Copy

## Purpose

Analyze existing copy, identify weaknesses, and provide an optimized version with specific improvement recommendations.

## Steps

### Step 1: Analyze Current Copy
Review the existing copy for:
- **Structure:** Does it follow a proven framework?
- **Headline:** Is it compelling and benefit-driven?
- **CTA:** Is it clear, single, and actionable?
- **Benefits vs Features:** Are benefits leading?
- **Readability:** Is it scannable and clear?
- **Tone:** Is it consistent and appropriate?

### Step 2: Identify Issues
List specific problems:
- Weak headline (no benefit, no curiosity)
- Buried CTA or multiple CTAs
- Feature-focused instead of benefit-focused
- Too long/short for the format
- Missing social proof
- Unclear value proposition

### Step 3: Optimize
Rewrite the copy with:
- Stronger headline with benefit/curiosity
- Framework-structured body
- Highlighted benefits
- Clear, single CTA
- Added social proof elements

### Step 4: A/B Recommendations
Suggest specific A/B tests:
- Headline variants to test
- CTA wording alternatives
- Layout/structure changes

## Success Criteria
- [ ] Current copy issues identified
- [ ] Optimized version provided
- [ ] Specific changes explained
- [ ] A/B test plan included


---

## Referência: references/qa-gate.md

---
version: "1.0"
date: "2026-03-09"
author:
  agent: "squad-chief"
  squad: "copy"
aios: true
project: "opb-corp"
---

# Task: QA Gate — Sugarman 30 Triggers Evaluation

## Task Anatomy

| Campo | Valor |
|-------|-------|
| task_name | qa-gate |
| status | active |
| responsible_executor | joe-sugarman |
| execution_type | deterministic |
| elicit | false |
| mandatory | true — NUNCA pular |

## Objetivo

Avaliar o copy final contra os 30 Psychological Triggers de Joe Sugarman. Produzir score e recomendações de melhoria.

## Input

1. Copy draft (post-review se aplicável)
2. Briefing original
3. Canal e tipo de copy

## Execution

Ativar via `/copy:agents:joe-sugarman`

Instruir: "Avalie este copy contra os 30 Psychological Triggers. Score cada trigger como ATIVO, PARCIAL, ou AUSENTE. Recomende melhorias para triggers ausentes."

## 30 Psychological Triggers Checklist

| # | Trigger | Avaliar |
|---|---------|---------|
| 1 | Feeling of Involvement | Leitor se sente parte da narrativa? |
| 2 | Honesty | Copy transparente e crível? |
| 3 | Integrity | Consistente com a marca? |
| 4 | Credibility | Provas e credenciais apresentadas? |
| 5 | Value and Proof of Value | Valor claramente demonstrado? |
| 6 | Justify the Purchase | Razão lógica para comprar? |
| 7 | Greed | Oferta irresistível? |
| 8 | Establish Authority | Autoridade estabelecida? |
| 9 | Satisfaction Conviction | Garantia ou risco reverso? |
| 10 | Nature of Product | Produto bem explicado? |
| 11 | Current Fads | Aproveita tendências atuais? |
| 12 | Timing | Urgência/timing adequado? |
| 13 | Belonging | Senso de comunidade/tribo? |
| 14 | Desire to Collect | Colecionabilidade (se aplicável)? |
| 15 | Curiosity | Gera curiosidade suficiente? |
| 16 | Sense of Urgency | Urgência real (não falsa)? |
| 17 | Fear | FOMO ou perda potencial? |
| 18 | Instant Gratification | Resultado imediato prometido? |
| 19 | Exclusivity | Exclusividade comunicada? |
| 20 | Simplicity | Copy fácil de entender? |
| 21 | Human Relationships | Conexão humana presente? |
| 22 | Storytelling | História envolvente? |
| 23 | Mental Engagement | Leitor mentalmente engajado? |
| 24 | Guilt | Reciprocidade/obrigação? |
| 25 | Specificity | Números e detalhes específicos? |
| 26 | Familiarity | Linguagem familiar ao ICP? |
| 27 | Hope | Esperança de resultado? |
| 28 | Pattern Interrupt | Quebra de padrão na abertura? |
| 29 | Linking | Conexão com algo conhecido? |
| 30 | Consistency | Tom consistente do início ao fim? |

## Output

```yaml
qa_gate:
  copy_type: "{tipo}"
  total_score: "{X}/30"
  grade: "{A+ (27-30) | A (24-26) | B (20-23) | C (15-19) | F (<15)}"
  verdict: "{PASS | REVISE | FAIL}"
  triggers:
    active: ["{trigger numbers}"]
    partial: ["{trigger numbers}"]
    absent: ["{trigger numbers}"]
  top_3_improvements:
    - trigger: "{#}"
      name: "{name}"
      action: "{specific improvement}"
    - trigger: "{#}"
      name: "{name}"
      action: "{specific improvement}"
    - trigger: "{#}"
      name: "{name}"
      action: "{specific improvement}"
```

## Scoring Rules

| Grade | Score | Verdict | Action |
|-------|-------|---------|--------|
| A+ | 27-30 | PASS | Deliver to user |
| A | 24-26 | PASS | Deliver with minor suggestions |
| B | 20-23 | REVISE | Apply top 3 improvements, re-evaluate |
| C | 15-19 | REVISE | Significant revision needed |
| F | <15 | FAIL | Re-route to different writer or restructure |

## Veto Conditions

- NUNCA pular o QA Gate — é obrigatório para toda copy
- NUNCA dar PASS para score < 20 sem justificativa
- NUNCA avaliar triggers irrelevantes para o canal (ex: "Desire to Collect" em email nurture)

## Acceptance Criteria

- [ ] Todos os 30 triggers avaliados
- [ ] Score calculado corretamente
- [ ] Top 3 improvements com ações específicas (não genéricas)
- [ ] Verdict claro (PASS/REVISE/FAIL)

## Handoff

- PASS → `deliver.md` (Copy Chief entrega ao usuário)
- REVISE → Writer original aplica fixes → re-run `qa-gate.md`
- FAIL → Copy Chief re-avalia routing → `write-copy.md` com outro agent


---

## Referência: references/review-copy.md

---
version: "1.0"
date: "2026-03-09"
author:
  agent: "squad-chief"
  squad: "copy"
aios: true
project: "opb-corp"
---

# Task: Review Copy — Cross-Review por Segundo Agente

## Task Anatomy

| Campo | Valor |
|-------|-------|
| task_name | review-copy |
| status | active |
| responsible_executor | segundo agente (selecionado pelo Copy Chief) |
| execution_type | autonomous |
| elicit | false |
| mandatory | false — apenas para high-stakes |

## Objetivo

Um segundo copywriter revisa o draft sob sua perspectiva metodológica. Não reescreve — sugere melhorias baseadas em seus frameworks.

## Quando Usar

- `stakes: high` ou `stakes: critical` no briefing
- Copy Chief identifica que o draft precisa de perspectiva complementar
- Projetos com blending (2-3 writers)

## Input

1. Draft de copy (output de `write-copy.md`)
2. Briefing original
3. Diagnostic Report

## Execution Rules

1. Ativar o agente reviewer via `/copy:agents:{agent-name}`
2. Entregar draft + briefing + diagnostic
3. Instruir: "Revise este draft sob sua perspectiva. Não reescreva — aponte gaps e sugira melhorias usando seus frameworks."

## Reviewer Selection Heuristics

| Situação | Reviewer Sugerido | Razão |
|----------|-------------------|-------|
| Sales page precisa de mais prova | claude-hopkins | Specificity + reason-why |
| Headline fraca | eugene-schwartz | Awareness-level headline strategy |
| Copy sem big idea | gary-bencivenga | Big Idea methodology |
| Urgency insuficiente | dan-kennedy | Urgency/deadline frameworks |
| Mechanism não claro | todd-brown | Unique Mechanism discovery |
| Story fraca | john-carlton | Star/Story/Solution |

## Output

```yaml
review:
  reviewer: "{agent-name}"
  overall_assessment: "{strong | needs_work | weak}"
  strengths:
    - "{strength 1}"
    - "{strength 2}"
  gaps:
    - gap: "{description}"
      framework: "{framework name from reviewer's methodology}"
      suggestion: "{specific improvement}"
  priority_fixes:
    - "{fix 1 — highest impact}"
    - "{fix 2}"
```

## Veto Conditions

- NÃO reescrever o copy inteiro — apenas sugerir melhorias
- NÃO sobrepor a voz do writer original — manter o DNA
- NÃO pular para reviewer se stakes = low

## Handoff

→ Writer original aplica fixes → `qa-gate.md`


---

## Referência: references/setup-split-test.md

# Setup Split Test - Hopkins Methodology

## Purpose

Create scientifically valid A/B tests using Claude Hopkins' pioneering methodology. Hopkins invented split testing in the early 1900s using coded coupons. This task applies his rigorous principles to modern testing with digital tracking.

## When to Use

- Before scaling any campaign (validate winner first)
- When team disagrees on copy approach (test, don't debate)
- To optimize existing campaigns systematically
- When launching new copy/offer variations
- Before making significant creative changes

## Hopkins on Testing

```
"Almost any question can be answered, cheaply, quickly and finally,
by a test campaign. And that's the way to answer them - not by
arguments around a table. Go to the court of last resort - the
buyers of your product."

"Don't argue around a table. Test in the marketplace."

"The compass of accurate knowledge directs the shortest,
safest, cheapest course."
```

## Inputs

```yaml
required:
  - test_element: What to test (headline | offer | price | cta | copy_length | image | format)
  - control_version: Current/baseline version
  - test_hypothesis: What you believe will perform better and WHY
  - primary_metric: What defines success (CTR | conversion | AOV | revenue)

optional:
  - secondary_metrics: Additional metrics to track
  - test_duration: How long to run (or sample size needed)
  - traffic_source: Where traffic comes from
  - segment: Specific audience segment to test
  - previous_test_results: Learnings from past tests
```

## Hopkins' Testing Principles

### Principle 1: One Variable at a Time

```
ISOLATION RULE:

Hopkins: "Change ONE thing at a time. Otherwise you don't know
what caused the difference."

CORRECT TEST SETUP:
┌─────────────────────────────────────────────────────────┐
│ CONTROL                      │ VARIATION               │
├─────────────────────────────────────────────────────────┤
│ Same ad copy                 │ Same ad copy            │
│ Same offer                   │ Same offer              │
│ Same placement               │ Same placement          │
│ HEADLINE A                   │ HEADLINE B              │ ← ONLY difference
│ Same CTA                     │ Same CTA                │
│ Same image                   │ Same image              │
└─────────────────────────────────────────────────────────┘

INCORRECT TEST SETUP (INVALID):
┌─────────────────────────────────────────────────────────┐
│ CONTROL                      │ VARIATION               │
├─────────────────────────────────────────────────────────┤
│ Headline A                   │ Headline B              │
│ Offer: 20% off               │ Offer: Free shipping    │ ← Multiple changes!
│ Red CTA button               │ Green CTA button        │
│ Product image                │ Lifestyle image         │
└─────────────────────────────────────────────────────────┘
If variation wins, you don't know which change caused it!
```

### Principle 2: Test Hypotheses, Not Random Ideas

```
HYPOTHESIS-DRIVEN TESTING:

Hopkins didn't randomly test. He formed hypotheses based on:
1. Salesmanship principles
2. Consumer psychology understanding
3. Previous test learnings
4. Market observations

WEAK TEST HYPOTHESIS:
"Let's try a different headline"
(No reasoning, no learning regardless of outcome)

STRONG TEST HYPOTHESIS:
"Headlines that call out a specific audience will outperform
generic headlines because Hopkins proved that 'the purpose of
a headline is to pick out people you can interest.'"

HYPOTHESIS TEMPLATE:
"We believe [CHANGE] will [IMPROVE METRIC] because [REASONING
BASED ON PRINCIPLE]. If correct, this teaches us [LEARNING].
If wrong, this teaches us [ALTERNATIVE LEARNING]."
```

### Principle 3: Coded Tracking (Attribution)

```
HOPKINS' INNOVATION: CODED COUPONS

In 1907, Hopkins invented attribution tracking:
- Different department codes for different ads
- "Dept. A" = Headline version A
- "Dept. B" = Headline version B
- "Dept. 1" = New York Tribune
- "Dept. 2" = Chicago Daily

Combined code: "Dept. A-1" = Headline A in NY Tribune

MODERN EQUIVALENTS:

┌─────────────────────────────────────────────────────────┐
│ HOPKINS (1907)         │ MODERN (2024)                 │
├─────────────────────────────────────────────────────────┤
│ Dept. code on coupon   │ UTM parameters                │
│ Different mail address │ Dedicated landing pages       │
│ Phone extension        │ Unique phone numbers          │
│ Coded order form       │ Promo codes                   │
│ Keyed ad (corner mark) │ Pixel tracking                │
└─────────────────────────────────────────────────────────┘

TRACKING CODE STRUCTURE:
utm_source = traffic_source (facebook, google, email)
utm_medium = format (cpc, banner, email)
utm_campaign = test_name (headline_test_jan24)
utm_content = variation (headline_a, headline_b)
```

### Principle 4: Statistical Significance

```
HOPKINS: "Don't stop a test too early. Let the market speak clearly."

SAMPLE SIZE REQUIREMENTS:

For 95% confidence, 80% power, detecting 20% lift:
- 2% baseline conversion: ~2,000 visitors per variation
- 5% baseline conversion: ~800 visitors per variation
- 10% baseline conversion: ~400 visitors per variation

MINIMUM RUNTIME:
- At least 1 full business cycle (7 days minimum)
- Account for day-of-week variations
- Don't call winner on statistical noise

SIGNIFICANCE CHECKLIST:
□ Sample size met for both variations?
□ Runtime covers full week?
□ No external factors during test? (holiday, outage, competitor)
□ Statistical calculator confirms 95%+ confidence?
```

## Workflow

### Step 1: Define the Test

```yaml
test_specification:
  test_name: [descriptive_name]
  test_id: [unique_id_for_tracking]

  element_tested: [headline | offer | cta | price | etc.]

  control:
    description: [Current version]
    tracking_code: [utm_content=control or code_a]

  variation:
    description: [New version to test]
    tracking_code: [utm_content=variation or code_b]

  hypothesis: |
    We believe [CHANGE] will [IMPROVE METRIC] because [REASONING].

  primary_metric: [What defines winner]
  secondary_metrics:
    - [Additional metric 1]
    - [Additional metric 2]

  success_criteria: |
    Variation wins if [X% improvement] with [Y% confidence]
```

### Step 2: Prepare Tracking

```
TRACKING SETUP CHECKLIST:

□ CONTROL VERSION
  UTM String: ?utm_source=___&utm_medium=___&utm_campaign=___&utm_content=control
  Landing URL: _______________
  Coupon Code: _______________
  Phone/Extension: _______________

□ VARIATION VERSION
  UTM String: ?utm_source=___&utm_medium=___&utm_campaign=___&utm_content=variation
  Landing URL: _______________
  Coupon Code: _______________
  Phone/Extension: _______________

□ TRACKING VERIFICATION
  - Analytics receiving data? [Y/N]
  - Conversions tracking properly? [Y/N]
  - No tracking conflicts? [Y/N]
  - Test traffic split working? [Y/N]
```

### Step 3: Calculate Required Sample Size

```
SAMPLE SIZE CALCULATOR:

Current conversion rate: ____%
Minimum detectable effect: ____% (how much lift to detect)
Confidence level: 95% (standard)
Power: 80% (standard)

QUICK REFERENCE:
┌────────────────┬─────────────┬────────────────────────────┐
│ Baseline Conv. │ Detect 20%  │ Required Per Variation     │
├────────────────┼─────────────┼────────────────────────────┤
│ 1%             │ 1.2%        │ ~16,000                    │
│ 2%             │ 2.4%        │ ~8,000                     │
│ 3%             │ 3.6%        │ ~5,300                     │
│ 5%             │ 6.0%        │ ~3,200                     │
│ 10%            │ 12.0%       │ ~1,600                     │
│ 20%            │ 24.0%       │ ~800                       │
└────────────────┴─────────────┴────────────────────────────┘

Required sample per variation: _______
Estimated daily traffic: _______
Estimated test duration: _______ days
```

### Step 4: Document Control and Variation

```
ELEMENT: HEADLINE TEST EXAMPLE

┌─────────────────────────────────────────────────────────────┐
│ CONTROL (A)                                                 │
├─────────────────────────────────────────────────────────────┤
│ "Discover Our Revolutionary New System"                     │
│                                                             │
│ Tracking: utm_content=headline_control                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ VARIATION (B)                                               │
├─────────────────────────────────────────────────────────────┤
│ "To Parents Whose Children Struggle With Math:              │
│  47 Proven Techniques Used by MIT Tutors"                   │
│                                                             │
│ Tracking: utm_content=headline_specific_audience            │
└─────────────────────────────────────────────────────────────┘

HYPOTHESIS:
Specific audience callout + number specificity will outperform
generic headline because Hopkins proved "the purpose of a headline
is to pick out people you can interest."

WHAT WE'LL LEARN:
If B wins: Audience-specific headlines perform better for this product
If A wins: This audience responds better to curiosity/mystery
```

### Step 5: Launch and Monitor

```
TEST LAUNCH CHECKLIST:

□ PRE-LAUNCH
  - Both versions live and working?
  - Tracking verified on both?
  - Traffic split configured correctly (50/50)?
  - Team notified not to change anything during test?
  - Calendar blocked for test duration?

□ DURING TEST (Daily Check)
  Date: ___________

  Control:
  - Visitors: _____
  - Conversions: _____
  - Conversion Rate: ____%

  Variation:
  - Visitors: _____
  - Conversions: _____
  - Conversion Rate: ____%

  Current Lift: ____%
  Statistical Confidence: ____%
  Sample Size Reached: [Y/N]

  Anomalies/Notes: _________________

□ STOPPING RULES
  STOP EARLY IF:
  - Technical error detected
  - Massive quality issue (>50% conversion drop)
  - External event invalidates test

  DO NOT STOP EARLY IF:
  - One version "looks" like it's winning (wait for significance)
  - Getting impatient
  - Stakeholder pressure
```

### Step 6: Analyze Results

```
FINAL ANALYSIS TEMPLATE:

TEST: [Test Name]
DURATION: [Start Date] to [End Date]
ELEMENT TESTED: [What was tested]

RESULTS:
┌─────────────────────────────────────────────────────────────┐
│ METRIC              │ CONTROL      │ VARIATION    │ LIFT   │
├─────────────────────────────────────────────────────────────┤
│ Visitors            │ _____        │ _____        │        │
│ Conversions         │ _____        │ _____        │        │
│ Conversion Rate     │ _____%       │ _____%       │ ____% │
│ Revenue             │ $_____       │ $_____       │ ____% │
│ AOV                 │ $_____       │ $_____       │ ____% │
└─────────────────────────────────────────────────────────────┘

STATISTICAL VALIDITY:
- Sample size sufficient? [Y/N]
- Confidence level: ____%
- Is result statistically significant? [Y/N]

WINNER: [Control / Variation / Inconclusive]

LEARNING:
What does this tell us about our audience?
_________________________________________________

NEXT TEST:
Based on this result, what should we test next?
_________________________________________________
```

### Step 7: Document and Scale

```
TEST DOCUMENTATION:

Hopkins: "Such agencies become storehouses of advertising experiences,
proved principles and methods."

TEST ARCHIVE ENTRY:

Test ID: [ID]
Date: [Date range]
Element: [What was tested]

HYPOTHESIS:
[What we believed would happen and why]

RESULT:
[What actually happened]

LEARNING:
[What this teaches us for future tests]

IMPLEMENTATION:
□ Winner implemented as new control
□ Results shared with team
□ Learning added to swipe file
□ Next test identified
```

## Testing Priority Framework

```
WHAT TO TEST (Hopkins Priority Order):

1. HEADLINES (HIGHEST IMPACT)
   Hopkins: "Headlines can change results by 500%+"
   Test: Multiple angles, specificity levels, audience callouts

2. OFFERS (HIGH IMPACT)
   Test: Price points, bonuses, guarantees, payment terms

3. LEAD/OPENING (MEDIUM-HIGH IMPACT)
   Test: Story vs direct, problem vs solution lead

4. PROOF ELEMENTS (MEDIUM IMPACT)
   Test: Testimonial placement, type, specificity

5. CTA (MEDIUM IMPACT)
   Test: Copy, color, placement, urgency elements

6. COPY LENGTH (MEDIUM IMPACT)
   Hopkins often found long copy won
   Test: Short vs long for your specific product

7. IMAGES (LOWER IMPACT FOR DIRECT RESPONSE)
   Test: Product vs lifestyle, with vs without
```

## Common Testing Mistakes

```
MISTAKES HOPKINS WOULD CONDEMN:

1. "We tested it, variation lost by 0.1%"
   → 0.1% is statistical noise, not a real result

2. "We ran the test for 2 days"
   → Not enough data, day-of-week effects ignored

3. "We changed the headline AND the offer AND the image"
   → Multiple variables = no valid learning

4. "The new version 'feels' better"
   → Feelings don't matter, data does

5. "We're scaling the winner to all channels"
   → Test may not replicate in different context

6. "The expert/client prefers version A"
   → "Don't argue around a table. Test in the marketplace."
```

## Outputs

### Output Format

```yaml
test_plan:
  test_name: [Name]
  test_id: [ID]
  hypothesis: [What we believe and why]

  setup:
    control:
      description: [Current version]
      tracking: [Codes/UTMs]
    variation:
      description: [Test version]
      tracking: [Codes/UTMs]

  metrics:
    primary: [Main success metric]
    secondary: [List]

  requirements:
    sample_size_per_variation: [Number]
    minimum_runtime: [Days]
    traffic_split: [50/50]

  success_criteria: |
    Winner if [X% lift] at [Y% confidence]

  learnings_expected:
    if_variation_wins: [What we learn]
    if_control_wins: [What we learn]

  next_test_candidates:
    - [What to test next based on result]
```

## Hopkins' Final Word

```
"We cannot go after thousands until we learn how to win one.
So our first ads are sent to sample sections. We test our
undertaking, and test the things we offer. We start on a small
scale, and feel our way."

Test small → Learn → Scale what works

"The man who does twice the testing makes twice the progress."
```

## Integration

- **Precedes**: Scale/rollout decisions
- **Follows**: audit-copy-hopkins.md (validate copy quality first)
- **Related**: hopkins-audit-checklist.md


---

## Referência: references/simple-writing-audit.md

# simple-writing-audit

Task de auditoria de copy usando o Simple Writing System de John Carlton.

## TASK METADATA

```yaml
task:
  name: Simple Writing Audit
  id: simple-writing-audit
  category: copy_editing
  origin: John Carlton - Simple Writing System
  version: 1.0
  output:
    format: markdown
    filename: "audit-{{copy_name}}.md"
```

---

## OVERVIEW

Esta task aplica o Simple Writing System de John Carlton para auditar e melhorar qualquer peça de copy. O objetivo é transformar copy complexa, corporativa ou confusa em copy clara, conversacional e persuasiva.

**Filosofia Central:**
> "Nothing good will ever happen in your business until your sales message gets written. And the best sales messages are the ones anyone can understand."

---

## PHASE 1: INITIAL ASSESSMENT

### 1.1 Copy Intake

**Input Required:**
- [ ] Copy a ser auditada (texto completo)
- [ ] Contexto do produto/serviço
- [ ] Avatar/público-alvo
- [ ] Objetivo da copy (vendas, leads, etc.)

### 1.2 First Impression Test

Leia a copy UMA vez, rapidamente. Responda:

| Pergunta | Resposta |
|----------|----------|
| Você entendeu do que se trata em 10 segundos? | SIM / NÃO |
| Você sabe o que fazer depois de ler? | SIM / NÃO |
| Você SENTIU algo (emoção)? | SIM / NÃO |
| Você leria mais se visse isso numa timeline? | SIM / NÃO |

**Score:** ___/4

- 4/4 = Bom fundamento, refinar
- 2-3/4 = Precisa trabalho significativo
- 0-1/4 = Reescrever do zero

---

## PHASE 2: THE FIVE AUDIT PASSES

O Simple Writing System usa 5 passes de edição. Execute cada um separadamente.

### PASS 1: THE WORD ASSASSIN

**Objetivo:** Eliminar toda palavra que não contribui.

**Targets para Eliminação:**

| Categoria | Exemplos | Ação |
|-----------|----------|------|
| Advérbios fracos | muito, realmente, bastante, extremamente | CORTAR |
| Redundâncias | "Em ordem de" → "para" | SIMPLIFICAR |
| Expressões vazias | "O fato é que" → (remover) | CORTAR |
| Opiniões não solicitadas | "Eu acho", "Na minha opinião" | CORTAR ou AFIRMAR |
| "That" desnecessário | "Acredito que você pode" → "Acredito você pode" | CORTAR |

**Checklist Pass 1:**

```markdown
## WORD ASSASSIN AUDIT

### Palavras Cortadas:
| Original | Edição | Razão |
|----------|--------|-------|
| [palavra/frase] | [corte ou substituição] | [razão] |

### Estatísticas:
- Palavras antes: ___
- Palavras depois: ___
- Redução: ___%

### Exemplo de Transformação:
ANTES: "Eu realmente acredito que é muito importante para você entender que este sistema é extremamente eficaz."
DEPOIS: "Este sistema é eficaz."
```

**Regra de Ouro:** Se remover a palavra não muda o significado, CORTE.

---

### PASS 2: THE SENTENCE SPLITTER

**Objetivo:** Garantir UMA IDEIA por sentença.

**Sinais de Sentença para Dividir:**
- Contém "e" conectando duas ideias completas
- Contém "mas" no meio
- Você precisa respirar no meio quando lê em voz alta
- Tem mais de 20 palavras
- Tem mais de uma vírgula

**Técnica de Divisão:**

```markdown
## SENTENCE SPLITTER AUDIT

### Sentenças Divididas:

**Sentença #1:**
ANTES: "Nosso sistema revolucionário combina tecnologia de ponta com princípios testados pelo tempo para entregar resultados que vão transformar seu negócio enquanto economiza tempo e dinheiro."

DEPOIS:
"Nosso sistema é revolucionário.
Combina tecnologia de ponta com princípios testados.
Os resultados vão transformar seu negócio.
Você vai economizar tempo.
Você vai economizar dinheiro."

**Análise:**
- Ideias originais: 4 em 1 sentença
- Ideias após: 4 em 5 sentenças ✓

---

**Sentença #2:**
[repetir para cada sentença complexa]
```

**Regra de Ouro:** Se a sentença tem mais de uma ideia, DIVIDA.

---

### PASS 3: THE JARGON KILLER

**Objetivo:** Substituir toda palavra "corporativa" por linguagem simples.

**Dicionário de Substituição:**

| Jargão | Substituição |
|--------|--------------|
| utilizar | usar |
| implementar | fazer, aplicar |
| otimizar | melhorar |
| alavancar | usar |
| sinergia | trabalho em equipe |
| paradigma | forma de pensar |
| empoderar | dar poder, capacitar |
| deliverables | entregas |
| stakeholders | interessados, envolvidos |
| feedback | retorno, opinião |
| insights | percepções |
| acessar | usar, ver |
| viabilizar | permitir, possibilitar |
| estratégico | importante |
| robusto | forte, completo |
| inovador | novo |
| solução | produto, serviço |
| plataforma | sistema, ferramenta |
| escalável | que cresce |
| disruptivo | diferente, novo |
| holístico | completo |

**Checklist Pass 3:**

```markdown
## JARGON KILLER AUDIT

### Substituições Realizadas:
| Jargão Original | Substituição | Contexto |
|-----------------|--------------|----------|
| [palavra] | [substituição] | [frase onde aparece] |

### Estatísticas:
- Jargões encontrados: ___
- Jargões substituídos: ___
- Termos técnicos necessários mantidos: ___
```

**Regra de Ouro:** Se seu avô não entenderia a palavra, SUBSTITUA.

---

### PASS 4: THE CONVERSATIONAL PASS

**Objetivo:** Fazer a copy soar como conversa, não como documento.

**Técnicas de Conversacionalização:**

| Técnica | Exemplo ANTES | Exemplo DEPOIS |
|---------|---------------|----------------|
| Usar contrações | "Você não vai" | "Você não vai" ✓ |
| Fragmentos | "É importante." | "Importante." |
| Perguntas | "Considere que..." | "Já pensou que...?" |
| Você direto | "Os clientes podem..." | "Você pode..." |
| Início informal | "Portanto, é essencial..." | "Olha, isso é essencial..." |

**Testes de Conversação:**

```markdown
## CONVERSATIONAL AUDIT

### Teste do Bar
Para cada parágrafo, pergunte: "Eu diria isso para um amigo num bar?"

| Parágrafo | Passaria no Teste do Bar? | Edição Sugerida |
|-----------|---------------------------|-----------------|
| #1 | SIM / NÃO | [se não, como tornar mais conversacional] |
| #2 | SIM / NÃO | [edição] |

### Teste de Leitura em Voz Alta
Leia toda a copy em voz alta. Marque onde:
- [ ] Você tropeçou (reescrever)
- [ ] Você ficou sem ar (dividir)
- [ ] Soou estranho (tornar mais natural)

### Marcadores de Conversa Adicionados:
- "Olha..."
- "Veja bem..."
- "O negócio é o seguinte..."
- "Sabe o que mais?"
- "Deixa eu te contar..."
```

**Regra de Ouro:** Se você não diria assim numa conversa, REESCREVA.

---

### PASS 5: THE LIZARD BRAIN CHECK

**Objetivo:** Garantir que a copy atinge os instintos primais ANTES da lógica.

**Gatilhos do Cérebro Reptiliano:**

| Gatilho | Pergunta de Verificação | Presente? |
|---------|------------------------|-----------|
| **Sobrevivência/Medo** | Há uma ameaça clara ao bem-estar? | SIM / NÃO |
| **Ganância/Desejo** | Há uma promessa de ganho específico? | SIM / NÃO |
| **Luxúria/Atração** | Há apelo à atratividade/desejo? | SIM / NÃO |
| **Vaidade/Status** | Há promessa de elevação social? | SIM / NÃO |
| **Preguiça/Facilidade** | Há promessa de caminho fácil? | SIM / NÃO |
| **Curiosidade** | Há informação incompleta que gera necessidade de saber? | SIM / NÃO |

**Checklist Lizard Brain:**

```markdown
## LIZARD BRAIN AUDIT

### Análise de Gatilhos:

**Headline:**
- Gatilho primário usado: ___________
- Força do gatilho (1-10): ___
- Sugestão de amplificação: ___________

**Abertura (primeiras 3 frases):**
- Gatilho primário usado: ___________
- Conecta emocionalmente em até 3 segundos? SIM / NÃO
- Sugestão de amplificação: ___________

**Antes de apresentar lógica/benefícios:**
- O leitor já está SENTINDO algo? SIM / NÃO
- Se não, adicionar: ___________

### Sequência Emocional:
1. HOOK (emoção inicial): ___________
2. AGITAÇÃO (intensificar emoção): ___________
3. SOLUÇÃO (alívio): ___________
```

**Regra de Ouro:** Se não atinge o cérebro reptiliano nos primeiros 5 segundos, REESCREVA o início.

---

## PHASE 3: STRUCTURAL AUDIT

### 3.1 Headline Audit

**Critérios Carlton para Headlines:**

| Critério | Presente? | Se NÃO, Sugestão |
|----------|-----------|------------------|
| Para o leitor IMEDIATAMENTE? | SIM / NÃO | |
| Promessa específica? | SIM / NÃO | |
| Gera curiosidade irresistível? | SIM / NÃO | |
| Tem "one-legged golfer" (elemento inesperado)? | SIM / NÃO | |
| Seria ignorado se visto numa timeline? | SIM / NÃO | |

**Templates de Melhoria:**

```markdown
### HEADLINE AUDIT

**Headline Original:**
"[headline atual]"

**Análise:**
- Pontos fortes: ___
- Pontos fracos: ___
- Gatilho principal: ___

**3 Headlines Alternativas:**

1. Template "One-Legged Golfer":
"[elemento surpreendente] [benefício específico] [em quanto tempo]"
→ "_____________________________"

2. Template "How To":
"Como [resultado desejado] Sem [sacrifício esperado]"
→ "_____________________________"

3. Template "Discovery":
"Descoberta Incrível: [fonte inesperada] Revela [segredo para resultado]"
→ "_____________________________"

**Recomendação Final:**
[Qual headline usar e por quê]
```

---

### 3.2 Opening Audit

**Critérios Carlton para Aberturas:**

| Critério | Presente? | Se NÃO, Sugestão |
|----------|-----------|------------------|
| Hook nos primeiros 3 segundos? | SIM / NÃO | |
| Estabelece rapport/identificação? | SIM / NÃO | |
| O leitor sabe "o que tem pra mim"? | SIM / NÃO | |
| Usa história real (não ficção)? | SIM / NÃO | |
| Flui naturalmente para o corpo? | SIM / NÃO | |

**Análise de Abertura:**

```markdown
### OPENING AUDIT

**Abertura Original (primeiras 5 frases):**
"[copiar abertura]"

**Análise:**
- Tempo até o hook: ___ segundos/palavras
- Tipo de abertura: [história/problema/novidade/pergunta/declaração]
- Emoção gerada: ___
- Conexão com avatar: ___

**Abertura Reescrita:**
"[nova abertura seguindo princípios Carlton]"

**Justificativa da Mudança:**
[Por que a nova versão é melhor]
```

---

### 3.3 Body Audit

**Critérios para o Corpo:**

| Critério | Presente? | Se NÃO, Sugestão |
|----------|-----------|------------------|
| Benefícios > Features? | SIM / NÃO | |
| Cada benefício tem prova? | SIM / NÃO | |
| Histórias reais incluídas? | SIM / NÃO | |
| Objeções endereçadas? | SIM / NÃO | |
| Fluxo lógico e emocional? | SIM / NÃO | |

**Análise do Corpo:**

```markdown
### BODY AUDIT

**Estrutura Atual:**
1. [seção 1] - ___ palavras
2. [seção 2] - ___ palavras
3. [etc.]

**Análise por Seção:**

**Seção 1:** [nome/tema]
- Propósito claro? SIM / NÃO
- Uma ideia por parágrafo? SIM / NÃO
- Transição suave? SIM / NÃO
- Sugestão: ___

[repetir para cada seção]

**Elementos Faltando:**
- [ ] Mais histórias reais
- [ ] Mais especificidade
- [ ] Mais prova
- [ ] Melhor transições
- [ ] Outros: ___
```

---

### 3.4 Close Audit

**Critérios Carlton para Fechamento:**

| Critério | Presente? | Se NÃO, Sugestão |
|----------|-----------|------------------|
| CTA impossível de perder? | SIM / NÃO | |
| Razão para agir AGORA? | SIM / NÃO | |
| Risco removido (garantia)? | SIM / NÃO | |
| Recap de benefícios? | SIM / NÃO | |
| Instrução clara do próximo passo? | SIM / NÃO | |

**Análise do Close:**

```markdown
### CLOSE AUDIT

**Close Original:**
"[copiar fechamento]"

**Análise:**
- CTA presente? SIM / NÃO
- CTA claro? SIM / NÃO
- Urgência presente? SIM / NÃO
- Urgência justificada? SIM / NÃO
- Garantia mencionada? SIM / NÃO

**Close Reescrito:**
"[novo fechamento]"

**Elementos Adicionados:**
- [ ] Urgência específica
- [ ] Recap de benefícios
- [ ] Garantia clara
- [ ] Instrução passo-a-passo
```

---

## PHASE 4: THE HOOK MINING AUDIT

### 4.1 Identificação do Hook Atual

**Perguntas para encontrar o "One-Legged Golfer":**

| Pergunta | Resposta |
|----------|----------|
| Qual é a história de origem do produto? | |
| Há algum fato surpreendente ou contra-intuitivo? | |
| O que o expert menciona "de passagem" que é fascinante? | |
| Qual detalhe faria um estranho numa festa dizer "espera, o quê?"? | |
| O que os concorrentes NÃO estão falando? | |

### 4.2 Hook Mining Report

```markdown
## HOOK MINING REPORT

**Hook Atual Identificado:**
"[qual é o hook usado atualmente]"

**Força do Hook (1-10):** ___

**Hooks Alternativos Encontrados:**

**Hook #1:** [descrição]
- Tipo: [história/descoberta/contradição/especificidade]
- Força: ___/10
- Como usar: ___

**Hook #2:** [descrição]
- Tipo: [história/descoberta/contradição/especificidade]
- Força: ___/10
- Como usar: ___

**Hook #3:** [descrição]
- Tipo: [história/descoberta/contradição/especificidade]
- Força: ___/10
- Como usar: ___

**Recomendação:**
[Qual hook usar e por quê]

**Nova Headline com Hook Recomendado:**
"[headline usando o hook mais forte]"
```

---

## PHASE 5: COMPREHENSIVE SCORING

### 5.1 Scoring Matrix

| Critério | Peso | Score (1-10) | Score Ponderado |
|----------|------|--------------|-----------------|
| **Clareza** | 25% | ___ | ___ |
| **Conversacionalidade** | 20% | ___ | ___ |
| **Hook/Abertura** | 20% | ___ | ___ |
| **Lizard Brain Appeal** | 15% | ___ | ___ |
| **CTA/Fechamento** | 10% | ___ | ___ |
| **Prova/Credibilidade** | 10% | ___ | ___ |
| **TOTAL** | 100% | | ___ |

**Interpretação:**
- 90-100: Excelente - pronta para publicar
- 80-89: Boa - ajustes menores necessários
- 70-79: Aceitável - melhorias significativas recomendadas
- 60-69: Fraca - reescrever seções principais
- Abaixo de 60: Reescrever do zero

---

### 5.2 Carlton Simplicity Score

**Métricas de Simplicidade:**

| Métrica | Valor | Target | Status |
|---------|-------|--------|--------|
| Palavras por sentença (média) | ___ | ≤15 | ✓/✗ |
| Sentenças com mais de 1 ideia | ___ | 0 | ✓/✗ |
| Palavras de jargão | ___ | 0 | ✓/✗ |
| Contrações usadas | ___ | ≥5 | ✓/✗ |
| Perguntas diretas ao leitor | ___ | ≥3 | ✓/✗ |
| Histórias/exemplos | ___ | ≥2 | ✓/✗ |
| Nível de leitura (Flesch) | ___ | ≤8º ano | ✓/✗ |

**Carlton Simplicity Score:** ___/7 targets atingidos

---

## PHASE 6: FINAL DELIVERABLES

### 6.1 Executive Summary

```markdown
## SIMPLE WRITING AUDIT - RESUMO EXECUTIVO

**Copy Auditada:** [nome/descrição]
**Data:** [data]
**Auditor:** [nome]

### VEREDICTO GERAL:
[PRONTA / PRECISA AJUSTES / REESCREVER SEÇÕES / REESCREVER TUDO]

### SCORE FINAL: ___/100

### TOP 3 PROBLEMAS:
1. [problema mais crítico]
2. [segundo problema]
3. [terceiro problema]

### TOP 3 PONTOS FORTES:
1. [ponto forte]
2. [ponto forte]
3. [ponto forte]

### AÇÕES PRIORITÁRIAS:
1. [ação 1] - Impacto: ALTO/MÉDIO/BAIXO
2. [ação 2] - Impacto: ALTO/MÉDIO/BAIXO
3. [ação 3] - Impacto: ALTO/MÉDIO/BAIXO

### HOOK RECOMENDADO:
"[hook identificado como mais forte]"

### HEADLINE RECOMENDADA:
"[headline usando o hook]"
```

---

### 6.2 Before/After Comparison

```markdown
## COMPARAÇÃO ANTES/DEPOIS

### HEADLINE:
**ANTES:** "[original]"
**DEPOIS:** "[revisada]"
**Melhoria:** [o que mudou e por quê]

### ABERTURA:
**ANTES:** "[original - primeiras 3 frases]"
**DEPOIS:** "[revisada]"
**Melhoria:** [o que mudou e por quê]

### EXEMPLO DE PARÁGRAFO:
**ANTES:** "[parágrafo original mais problemático]"
**DEPOIS:** "[parágrafo revisado]"
**Melhoria:** [o que mudou e por quê]

### CLOSE:
**ANTES:** "[original]"
**DEPOIS:** "[revisado]"
**Melhoria:** [o que mudou e por quê]
```

---

### 6.3 Checklist Final

```markdown
## CHECKLIST FINAL - SIMPLE WRITING AUDIT

### Clareza
- [ ] Toda sentença tem apenas UMA ideia
- [ ] Nenhuma sentença tem mais de 20 palavras
- [ ] Zero jargão ou palavras corporativas
- [ ] Um estudante do 8º ano entenderia

### Conversacionalidade
- [ ] Usa contrações naturalmente
- [ ] Soa como conversa, não documento
- [ ] Passa no "teste do bar"
- [ ] Flui bem quando lido em voz alta

### Hook & Abertura
- [ ] Headline para imediatamente
- [ ] Abertura prende em 3 segundos
- [ ] "One-legged golfer" identificado e usado
- [ ] Promessa específica clara

### Lizard Brain
- [ ] Atinge instintos primais primeiro
- [ ] Emoção antes de lógica
- [ ] Gatilhos de medo/desejo/curiosidade presentes
- [ ] Visualização sensorial incluída

### Fechamento
- [ ] CTA impossível de perder
- [ ] Urgência presente e justificada
- [ ] Risco removido (garantia)
- [ ] Próximo passo 100% claro

### Prova
- [ ] Histórias reais (não ficção)
- [ ] Números específicos
- [ ] Testemunhos com detalhes
- [ ] Credibilidade estabelecida

**TOTAL:** ___/24 itens ✓
```

---

## QUICK REFERENCE

### Carlton's Core Rules

1. **One idea per sentence**
2. **Write like you talk**
3. **Find the one-legged golfer**
4. **Hit the lizard brain first**
5. **Every word must earn its place**
6. **Read it out loud**
7. **If it doesn't FEEL right, rewrite**

### Red Flags (Stop & Revise)

- ❌ Sentenças com mais de 25 palavras
- ❌ Jargão corporativo
- ❌ Headline sem hook
- ❌ Abertura sem emoção
- ❌ CTA vago ou ausente
- ❌ Sem histórias reais
- ❌ Sem prova específica

### Signs of Excellence

- ✅ Flui como conversa
- ✅ Cada sentença puxa para a próxima
- ✅ Hook inesperado e memorável
- ✅ Emoção palpável
- ✅ Ação clara e urgente
- ✅ Leitura prazerosa em voz alta

---

## APPENDIX: TRANSFORMATION EXAMPLES

### Example 1: Jargon → Simple

**ANTES:**
> "Nossa solução inovadora utiliza tecnologia de ponta para alavancar sinergias entre stakeholders e otimizar seus processos de negócio de forma holística."

**DEPOIS:**
> "Nossa ferramenta faz sua equipe trabalhar melhor junta. É isso."

### Example 2: Complex → Clear

**ANTES:**
> "A metodologia proprietária desenvolvida por nossa equipe de especialistas combina décadas de experiência com as mais recentes pesquisas científicas para criar um sistema único que tem demonstrado resultados consistentes em diversos contextos de aplicação."

**DEPOIS:**
> "Nosso sistema funciona.
> Testamos por 10 anos.
> Funciona toda vez.
> Em qualquer situação."

### Example 3: Boring → Conversational

**ANTES:**
> "É importante considerar que os benefícios deste programa incluem economia de tempo, aumento de produtividade e melhoria na qualidade de vida."

**DEPOIS:**
> "Olha, vou te contar o que você ganha:
> Seu tempo de volta.
> Mais coisas feitas.
> E sabe aquele estresse? Some."

---

*Task Version: 1.0*
*Created: 2026-01-23*
*Based on: John Carlton's Simple Writing System*
