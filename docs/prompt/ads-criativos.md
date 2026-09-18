# ads-criativos · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `ads-criativos.md` uma skill chamada ads-criativos. Quando eu pedir algo como "analisa estes criativos", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# O QUE VENCEU · Hooks, padrões vencedores e fadiga, criativo por criativo

Com as métricas por criativo na mão, o agente separa o que venceu do que cansou: analisa os primeiros três segundos, encontra padrões entre os vencedores, detecta fadiga e propõe os próximos testes. Não pede acesso à conta: você traz os números, ele traz o julgamento.

Esta skill **não escreve na plataforma de anúncios**. Ela lê o que você traz (perfil, métricas, URL) e devolve julgamento. Mutação de campanha é decisão sua, no gerenciador.

## When to Use

- Diga: "analisa estes criativos" e cole ou anexe as métricas por criativo.
- NÃO use para escrever o criativo (`copy-anuncios`) nem para ler a conta ao vivo (`ads-otimizar`).

## Quick Reference

| procedimento | referência |
|---|---|
| analyze creatives | `references/analyze-creatives.md` |

| apoio |
|---|
| `templates/creative-brief.md` |
| `templates/performance-report.md` |
| `references/data-knowledge-meta-ad_relevance_diagnostics.md` |
| `references/data-knowledge-meta-performance_fluctuations.md` |

## Procedure

1. Abra a referência do procedimento e leia `Entrada` (ou `Inputs`). Colete do usuário o que for exigido; pergunte o que faltar. 
2. Siga as fases da referência. Onde ela citar MCP, plataforma ou script do runtime de origem, **não execute**: peça ao usuário o dado correspondente ou use a tool `web` para inspecionar a URL informada.
3. Analise os primeiros três segundos de cada criativo, agrupe vencedores, marque fadiga (frequência alta com CTR caindo) usando os diagnósticos de relevância em `references/`.
4. Escreva a entrega no template de saída listado acima, em português.
5. Termine com a próxima decisão que é do usuário, em uma frase.

## Pitfalls

- Inventar métrica ou status que não veio do usuário ou da página. Sem dado, o item fica "não verificado".
- Recomendar mudança na conta como se fosse executar. Esta skill entrega recomendação; a execução é humana.
- Julgar criativo por gosto. O critério é métrica e padrão entre vencedores.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. A entrega segue o template de saída, seção por seção.
2. Toda afirmação sobre métrica, evento ou status cita de onde veio (dado do usuário, página inspecionada) ou está marcada "não verificado".
3. Há lista de vencedores, lista de padrões e plano de próximos testes.
4. Nenhuma ação foi executada na plataforma.
5. A última linha é a decisão que cabe ao usuário.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/analyze-creatives.md`
- `references/data-knowledge-meta-ad_relevance_diagnostics.md`
- `references/data-knowledge-meta-performance_fluctuations.md`
- `templates/creative-brief.md`
- `templates/performance-report.md`


---

## Referência: references/analyze-creatives.md

---
task: Analyze Creatives
responsavel: '@creative-analyst'
responsavel_type: agent
atomic_layer: task
status: active
squad: media-buyer-squad
version: 1.0.0
Entrada: |
  - creative_data: Métricas dos criativos
  - ad_library: Acesso aos criativos
  - period: Período de análise
Saida: |
  - creative_report: Relatório de performance de criativos
  - winners: Criativos vencedores
  - patterns: Padrões identificados
  - recommendations: Próximos testes
Checklist:
  - '[ ] Coletar métricas por criativo'
  - '[ ] Analisar hooks (primeiros 3s)'
  - '[ ] Identificar padrões vencedores'
  - '[ ] Detectar fadiga'
  - '[ ] Gerar recomendações'
---

# Analyze Creatives Task

## Objetivo

Analisar performance de criativos para identificar padrões vencedores e oportunidades.

## Métricas por Criativo

### Solicitar ao Usuário

| Criativo   | Impressões | CTR | Hook Rate | ThruPlay | CPM | CPA |
| ---------- | ---------- | --- | --------- | -------- | --- | --- |
| Video 1    |            |     |           |          |     |     |
| Video 2    |            |     |           |          |     |     |
| Image 1    |            |     |           |          |     |     |
| Carousel 1 |            |     |           |          |     |     |

### Métricas-Chave

- **CTR (Link):** Qualidade geral do criativo
- **Hook Rate:** % que assiste 3+ segundos (vídeo)
- **ThruPlay Rate:** % que assiste até o fim
- **CPM:** Qualidade percebida pelo algoritmo
- **CPA:** Resultado final

## Análise de Hooks

Para vídeos, avaliar primeiros 3 segundos:

| Criativo | Hook Type | Hook Rate | Veredicto      |
| -------- | --------- | --------- | -------------- |
| Video 1  | Problema  | 25%       | ✅ Winner      |
| Video 2  | Resultado | 12%       | ❌ Testar novo |
| Video 3  | Tutorial  | 18%       | ⚠️ OK          |

**Benchmarks Hook Rate:**

- Excelente: >25%
- Bom: 15-25%
- Fraco: <15%

## Identificar Padrões

### O que os Winners têm em comum?

```markdown
## Padrões Identificados

### Formato

- [ ] Vídeo supera imagem?
- [ ] UGC supera produzido?
- [ ] Vertical supera quadrado?

### Hook

- [ ] Qual tipo de hook performa melhor?
- [ ] Duração ideal do hook?
- [ ] Texto no início ajuda?

### Copy

- [ ] Headline curta ou longa?
- [ ] Emojis ajudam?
- [ ] CTA direto ou indireto?

### Visual

- [ ] Cores predominantes?
- [ ] Presença de rosto?
- [ ] Movimento vs estático?
```

## Detector de Fadiga

| Sinal       | Threshold      | Status |
| ----------- | -------------- | ------ |
| CTR caindo  | >20% em 7 dias | ⚠️     |
| CPM subindo | >30% em 7 dias | ⚠️     |
| Frequência  | >3.0           | ❌     |
| CPA subindo | >25% em 7 dias | ❌     |

**Se 2+ sinais:** Criativo em fadiga → Novo brief necessário

## Relatório de Criativos

```markdown
## Creative Analysis Report

**Período:** [DATA] a [DATA]
**Total Criativos:** [N]
**Analyst:** @creative-analyst

### Performance Geral

| Categoria | Quantidade | CTR Médio | Melhor     |
| --------- | ---------- | --------- | ---------- |
| Vídeo     | X          | Y%        | Video 3    |
| Imagem    | X          | Y%        | Image 2    |
| Carrossel | X          | Y%        | Carousel 1 |

### Top 3 Winners 🏆

1. **[Nome]** - CTR: X%, CPA: R$Y
   - Hook: [tipo]
   - Por que funciona: [análise]

2. **[Nome]** - CTR: X%, CPA: R$Y
   - Hook: [tipo]
   - Por que funciona: [análise]

3. **[Nome]** - CTR: X%, CPA: R$Y
   - Hook: [tipo]
   - Por que funciona: [análise]

### Bottom 3 (pausar) 🚫

1. **[Nome]** - CTR: X%, CPA: R$Y
   - Problema: [diagnóstico]

### Padrões Identificados

- Hooks de [tipo] performam 2x melhor
- UGC supera produzido em CTR
- Vídeos <30s têm melhor ThruPlay

### Recomendações

1. **Criar variações** do Winner 1 com novos hooks
2. **Pausar** Bottom 3
3. **Testar** formato [X] baseado em padrões

### Próximo Brief

→ Via `*brief` com foco em:

- Hook tipo: [recomendado]
- Formato: [recomendado]
- Ângulo: [novo a testar]
```

---

_Task: Analyze Creatives | @creative-analyst_


---

## Referência: references/data-knowledge-meta-ad_relevance_diagnostics.md

# Ad Relevance Diagnostics

## Summary

Meta provides three quality rankings for every ad: Quality Ranking, Engagement Rate Ranking, and Conversion Rate Ranking. Each is rated as Above Average, Average, or Below Average relative to ads competing for the same audience. These diagnostics reveal WHY an ad is underperforming and guide targeted fixes rather than blind creative iteration.

## Deep Dive

### The Three Rankings

| Ranking | Measures | Based On |
|---------|----------|----------|
| **Quality Ranking** | Perceived quality of the ad compared to competitors | User feedback signals: hide, report, low-quality indicators. Higher quality = fewer negative signals |
| **Engagement Rate Ranking** | Expected engagement rate (clicks, reactions, comments, shares) compared to competitors | Historical engagement data for ads targeting the same audience |
| **Conversion Rate Ranking** | Expected conversion rate compared to competitors targeting the same optimization goal | Historical conversion data for ads with the same optimization event |

### How Rankings Affect Delivery

These rankings feed directly into Meta's auction system. The Total Value formula includes:

```
Total Value = (Advertiser Bid x Estimated Action Rate) + User Value
```

- **Engagement Rate Ranking** influences the Estimated Action Rate
- **Quality Ranking** influences User Value (Meta penalizes low-quality ads to protect user experience)
- **Conversion Rate Ranking** influences Estimated Action Rate for conversion-optimized campaigns

A high-quality ad with a lower bid can beat a low-quality ad with a higher bid. This makes diagnostics directly actionable for cost reduction.

### Diagnostic Interpretation Matrix

| Quality | Engagement | Conversion | Diagnosis | Action |
|---------|------------|------------|-----------|--------|
| Above | Above | Above | Excellent. Ad is performing well across all dimensions | Scale budget, test new audiences |
| Below | Above | Above | Creative looks spammy or clickbaity but users who click do convert | Improve visual quality, reduce sensationalist copy, maintain the value proposition |
| Above | Below | Above | Ad is high quality but not engaging. Users who do engage, convert well | Test more attention-grabbing hooks, stronger CTAs, dynamic formats (video, carousel) |
| Above | Above | Below | Ad attracts attention but doesn't convert. Targeting mismatch or landing page issue | Review landing page, check audience-offer alignment, verify pixel/CAPI setup |
| Below | Below | Above | Poor creative drives away most users, but the rare engager converts. Niche appeal | Complete creative overhaul while preserving the core value proposition |
| Below | Below | Below | Fundamental problem. Ad, offer, targeting, or landing page is fundamentally broken | Full diagnostic: review offer-market fit, targeting, creative, landing page. Consider pausing |
| Above | Below | Below | High quality creative that nobody clicks or converts. Wrong audience or weak offer | Targeting is likely the issue. Test different audiences, review offer strength |
| Below | Above | Below | Low quality creative that generates curiosity clicks but no conversions. Clickbait pattern | Align creative promise with actual offer. Improve landing page experience |

### Minimum Data Requirements

Rankings only appear after an ad has accumulated sufficient impressions (typically 500+ impressions). Below that threshold, rankings show as "--" or "Not enough data."

### Ranking Refresh Frequency

Rankings are recalculated continuously but visible updates in Ads Manager typically lag by 24-48 hours. Do not make rapid creative changes based on rankings that may not yet reflect recent delivery patterns.

### Relationship to Ad Fatigue

As an ad ages and frequency increases:
- Engagement Rate Ranking tends to decline first (users stop clicking familiar ads)
- Quality Ranking may decline as users start hiding the ad
- Conversion Rate Ranking is often the last to decline (committed audiences still convert)

This pattern is a leading indicator of creative fatigue.

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @performance-analyst | When diagnosing underperforming ads. Use the diagnostic matrix to guide root cause analysis |
| @creative-analyst | When evaluating creative quality and recommending iterations. Rankings indicate WHAT to fix |
| @ad-midas | When user asks "why isn't my ad working" or "how do I improve my ad quality" |

**Load method:** On-demand via Read tool during ad-level performance analysis.

**Key rule:** Always present the three rankings TOGETHER with the diagnostic interpretation. A single ranking in isolation is misleading.

## Red Flags

- NEVER evaluate ad quality based on a single ranking in isolation -- always consider all three together
- NEVER make creative changes based on rankings with insufficient data (<500 impressions)
- NEVER ignore the Below/Below/Below pattern -- it indicates fundamental issues that creative iteration alone won't fix
- NEVER confuse Quality Ranking with Relevance Score (deprecated in 2019). They are different systems
- NEVER assume "Above Average" on all three means the ad cannot be improved -- it means it's competitive, not optimal
- NEVER react to ranking changes within 24 hours of a creative edit -- allow recalculation time

## Sources

- Meta Business Help Center: "About ad relevance diagnostics"
- Meta Ads API: Ad-level fields for quality_ranking, engagement_rate_ranking, conversion_rate_ranking
- mathiaschu/meta-ads-analyzer: `ad_relevance_diagnostics.md` reference document
- Meta Marketing Science: "Understanding Ad Quality Signals" (2024)


---

## Referência: references/data-knowledge-meta-performance_fluctuations.md

# Performance Fluctuations

## Summary

Not every metric change is an anomaly. Meta ads exhibit normal day-to-day fluctuations of up to +-15% in CPA, with seasonal patterns and day-of-week effects. Agents must distinguish between normal variation and genuine anomalies (>30% CPA increase sustained 3+ days, CTR drops >50% from 7-day average, or spend dropping to $0). Reacting to normal fluctuations causes unnecessary Learning Phase resets and wasted optimization cycles.

## Deep Dive

### Normal Fluctuations (Do NOT React)

Daily performance variation is inherent in digital advertising. These patterns are expected and should not trigger agent intervention:

| Pattern | Expected Range | Cause |
|---------|---------------|-------|
| **Daily CPA variation** | +-15% from 7-day average | Auction competition shifts, user behavior changes, time-of-day effects |
| **Weekend vs. weekday** | 10-25% CPA difference | Different user intent and competition levels |
| **Day-of-week effects** | Consistent patterns per weekday | Industry-specific (e.g., B2B lower on weekends, e-commerce higher on Fridays) |
| **Seasonal patterns** | Gradual shifts over weeks | Holiday seasons, industry cycles, weather |
| **CTR micro-fluctuations** | +-10% daily | Normal audience rotation, frequency effects |
| **CPM variation** | +-20% daily | Auction competition is highly dynamic |
| **Impression volume variation** | +-25% daily | Pacing algorithm adjustments (see `pacing.md`) |
| **Monthly billing cycle effects** | Higher spend at month start | Many advertisers reset budgets monthly, increasing competition |

### How to Identify Normal Fluctuations

Use the **7-day rolling average** as the baseline. A single day outside the normal range is NOT an anomaly -- it takes 3+ consecutive days of deviation to signal a real trend.

```
NORMAL: Day 1 CPA = R$48, Day 2 = R$55, Day 3 = R$45
        (7-day avg = R$50, all within +-15%)

ABNORMAL: Day 1 CPA = R$65, Day 2 = R$68, Day 3 = R$72
          (7-day avg = R$50, sustained >30% increase for 3 days)
```

### Anomalies (MUST React)

These patterns indicate genuine problems that require investigation:

| Anomaly | Detection Criteria | Severity | Likely Cause |
|---------|-------------------|----------|-------------|
| **CPA spike (sustained)** | >30% increase from 7-day average for 3+ consecutive days | HIGH | Creative fatigue, audience saturation, competitor entry, targeting drift |
| **CTR crash** | >50% drop from 7-day average | HIGH | Creative fatigue, audience mismatch, ad disapproval, placement issue |
| **Spend drops to $0** | Zero delivery for 4+ hours during active schedule | CRITICAL | Account issue (billing, policy), ad disapproval, budget depleted, audience size zero |
| **Frequency spike** | Frequency >3.0 in 7 days (prospecting) or >8.0 (retargeting) | MEDIUM | Audience too narrow, budget too high for audience size |
| **ROAS collapse** | >40% drop from 7-day average for 3+ days | HIGH | Conversion tracking issue, landing page problem, offer fatigue |
| **CPM explosion** | >50% increase sustained 3+ days | MEDIUM | Increased competition (holiday, political season), audience quality shift |
| **Conversion rate drop** | >40% drop from 7-day average for 3+ days | HIGH | Landing page issue, pixel/CAPI problem, offer-audience mismatch |

### Root Cause Analysis Framework

When an anomaly is detected, investigate in this order:

```
STEP 1: Check Technical Issues First
  - Is the pixel/CAPI firing correctly?
  - Is the landing page working (load time, 404 errors)?
  - Is the ad approved and active?
  - Is the payment method valid?
  - Is the account in good standing?

STEP 2: Check External Factors
  - Is there a major holiday or event?
  - Did a competitor launch an aggressive campaign?
  - Is there a seasonal shift in the industry?
  - Did the audience platform change (iOS update, algorithm shift)?

STEP 3: Check Campaign Factors
  - Is the ad in Learning Phase? (see learning_phase.md)
  - Has frequency reached fatigue levels?
  - Has the creative been running too long without refresh?
  - Were any manual changes made recently?

STEP 4: Check Data Quality
  - Did the attribution window change?
  - Is there a reporting delay?
  - Are events being deduplicated correctly?
```

### Reaction Timing Guidelines

| Timeframe | Action | Rationale |
|-----------|--------|-----------|
| **Day 1 of anomaly** | Monitor. Log the observation. Do NOT change anything | Could be normal fluctuation |
| **Day 2 of anomaly** | Investigate root cause (technical, external, campaign, data) | Two days starts to suggest a trend |
| **Day 3 of anomaly** | Act if root cause is identified. If no root cause found, escalate | Three days of sustained anomaly is statistically significant |
| **Day 5+ of anomaly** | Mandatory action. Cannot ignore further | Extended anomaly causes cumulative budget waste |

### Seasonal Calendar (Brazil Market)

Key periods with expected performance shifts for Brazilian campaigns:

| Period | Expected Impact | Notes |
|--------|----------------|-------|
| Carnaval (Feb-Mar) | CPM +20-40%, CTR -10-20% | Reduced commercial intent, higher competition for remaining attention |
| Dia das Maes (May) | CPM +30-50% (e-commerce) | Heavy competition, plan budgets 2 weeks before |
| Dia dos Namorados (Jun 12) | CPM +20-30% | Gifts/e-commerce spike |
| Black Friday (Nov) | CPM +50-100%, CPA +30-60% | Most competitive period. Budget 3x for similar volume |
| Natal (Dec) | CPM +40-80% | Extended high-competition period |
| Janeiro | CPM -20-30% | Low competition, good for testing |

### False Positive Prevention

Agents must avoid these common false positive triggers:

1. **Single bad day followed by recovery** -- NOT an anomaly
2. **Weekend drop for B2B** -- Expected, not a problem
3. **Post-holiday normalization** -- Return to baseline after a peak is normal
4. **New creative launch with initial high CPA** -- Learning Phase effect (see `learning_phase.md`)
5. **Slight CPM increase during peak hours** -- Pacing effect (see `pacing.md`)

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @performance-analyst | Primary consumer. Load during every performance review. Use the anomaly detection criteria as the decision framework for when to flag issues vs. when to observe |
| @budget-optimizer | When evaluating spend anomalies (underspend, overspend patterns) |
| @ad-midas | When user panics about "my CPA went up today" -- use this doc to determine if intervention is warranted |
| @campaign-manager | When deciding whether to make campaign changes in response to performance shifts |

**Load method:** On-demand via Read tool during performance analysis.

**CRITICAL RULE:** Agents should NOT react to single-day fluctuations within the normal range. The default response to a single off day is "monitor" -- not "change."

## Red Flags

- NEVER react to a single day of performance fluctuation within +-15% of the 7-day average
- NEVER make campaign changes (budget, targeting, creative) in response to normal day-to-day variation -- this resets Learning Phase unnecessarily
- NEVER ignore sustained anomalies (3+ days of >30% deviation) -- waiting beyond 5 days causes cumulative budget waste
- NEVER diagnose anomalies without checking technical factors first (pixel, landing page, account status)
- NEVER assume all CPM increases are problems -- seasonal competition increases are expected and should be budgeted for
- NEVER compare raw daily numbers without using a rolling average baseline -- absolute numbers without context are meaningless

## Sources

- Meta Business Help Center: "Understanding ad performance fluctuations"
- Meta Marketing Science: "Statistical significance in campaign reporting"
- mathiaschu/meta-ads-analyzer: `performance_fluctuations.md` reference document
- Industry benchmarks: Brazilian digital advertising seasonal patterns (IAB Brasil, 2025)


---

## Referência: templates/creative-brief.md

# Creative Brief Template

## Informações do Projeto

| Campo               | Valor             |
| ------------------- | ----------------- |
| **Produto/Serviço** |                   |
| **Cliente**         |                   |
| **Data**            |                   |
| **Responsável**     | @creative-analyst |
| **Deadline**        |                   |

---

## 1. Sobre o Produto

### Descrição

> [Descreva o produto em 2-3 frases]

### Proposta de Valor Única

> [O que torna este produto diferente/melhor?]

### Detalhes

| Campo              | Valor |
| ------------------ | ----- |
| **Preço**          | R$    |
| **Ticket Médio**   | R$    |
| **Garantia**       | dias  |
| **Bônus Inclusos** |       |

---

## 2. Público-Alvo

### Perfil Demográfico

| Campo           | Valor |
| --------------- | ----- |
| **Idade**       |       |
| **Gênero**      |       |
| **Localização** |       |
| **Renda**       |       |
| **Profissão**   |       |

### Perfil Psicográfico

**Dores Principais:**

1.
2.
3.

**Desejos/Aspirações:**

1.
2.
3.

**Objeções Comuns:**

1.
2.
3.

**Gatilhos de Compra:**

1.
2.
3.

---

## 3. Mensagem Central

### Promessa Principal

> [A promessa #1 que o produto entrega]

### Prova/Credibilidade

> [Por que acreditar? Resultados, depoimentos, autoridade]

### Urgência/Escassez

> [Por que agora? Limite de tempo, vagas, bônus]

---

## 4. Direção Criativa

### Hooks Sugeridos (mínimo 5)

| #   | Tipo         | Hook |
| --- | ------------ | ---- |
| 1   | Problema     |      |
| 2   | Resultado    |      |
| 3   | Curiosidade  |      |
| 4   | Controverso  |      |
| 5   | Social Proof |      |
| 6   | Tutorial     |      |

### Ângulos para Testar

1. **Ângulo 1:** [descrição]
2. **Ângulo 2:** [descrição]
3. **Ângulo 3:** [descrição]

### Tom de Voz

- [ ] Formal
- [ ] Casual
- [ ] Urgente
- [ ] Educacional
- [ ] Empático
- [ ] Provocativo

### Referências Visuais

> [Descreva ou anexe referências de estilo, cores, mood]

---

## 5. Especificações Técnicas

### Plataforma

- [ ] Meta Ads (Facebook/Instagram)
- [ ] Google Ads (YouTube/Display)
- [ ] TikTok Ads
- [ ] Outro: \_\_\_

### Formatos Solicitados

| Formato             | Aspecto | Duração | Quantidade |
| ------------------- | ------- | ------- | ---------- |
| Vídeo Feed          | 1:1     | 15-60s  |            |
| Vídeo Stories/Reels | 9:16    | 15-30s  |            |
| Imagem Estática     | 1:1     | -       |            |
| Carrossel           | 1:1     | -       |            |

### Posicionamentos

- [ ] Feed
- [ ] Stories
- [ ] Reels
- [ ] Explore
- [ ] Audience Network
- [ ] Automático

---

## 6. Copy Sugerida

### Primary Text (máx 125 caracteres visíveis)

**Opção 1:**

>

**Opção 2:**

>

**Opção 3:**

>

### Headlines (máx 40 caracteres)

**Opção 1:**

>

**Opção 2:**

>

**Opção 3:**

>

### Description

>

### CTA Recomendado

- [ ] Saiba Mais
- [ ] Comprar Agora
- [ ] Inscrever-se
- [ ] Baixar
- [ ] Cadastrar
- [ ] Outro: \_\_\_

---

## 7. Estrutura do Vídeo (se aplicável)

### Roteiro Sugerido

| Seção        | Tempo  | Conteúdo                 |
| ------------ | ------ | ------------------------ |
| **Hook**     | 0-3s   | [Capturar atenção]       |
| **Problema** | 3-10s  | [Apresentar dor]         |
| **Solução**  | 10-25s | [Mostrar produto]        |
| **Prova**    | 25-40s | [Resultados/depoimentos] |
| **CTA**      | 40-60s | [Chamada para ação]      |

---

## 8. Checklist de Entrega

- [ ] Vídeo 1:1 - 30s
- [ ] Vídeo 9:16 - 15s
- [ ] Imagem estática 1:1
- [ ] Copy variations (3x)
- [ ] Headlines (3x)
- [ ] Legendas/Captions

---

## 9. Notas Adicionais

> [Qualquer informação extra relevante para a produção]

---

## 10. Aprovação

| Responsável       | Status   | Data |
| ----------------- | -------- | ---- |
| @creative-analyst | Criado   |      |
| @media-strategist | Aprovado |      |
| Cliente           | Aprovado |      |

---

_Template: Creative Brief | @creative-analyst_


---

## Referência: templates/performance-report.md

# Performance Report Template

## Header

| Campo                 | Valor                 |
| --------------------- | --------------------- |
| **Período**           | [DATA] a [DATA]       |
| **Plataforma**        | Meta Ads / Google Ads |
| **Responsável**       | @performance-analyst  |
| **Data do Relatório** |                       |

---

## Resumo Executivo

### KPIs Principais

| Métrica        | Resultado | Meta | Status   | vs Período Anterior |
| -------------- | --------- | ---- | -------- | ------------------- |
| **Gasto**      | R$        | R$   |          | %                   |
| **Receita**    | R$        | R$   |          | %                   |
| **ROAS**       | x         | x    | ✅/⚠️/❌ | %                   |
| **CPA**        | R$        | R$   | ✅/⚠️/❌ | %                   |
| **Conversões** |           |      |          | %                   |

### Destaque do Período

> [Uma frase resumindo o principal insight ou resultado]

---

## Performance Detalhada

### Por Campanha

| Campanha  | Gasto  | Conversões | CPA    | ROAS  | Trend |
| --------- | ------ | ---------- | ------ | ----- | ----- |
|           | R$     |            | R$     | x     | ↑/↓/→ |
|           | R$     |            | R$     | x     | ↑/↓/→ |
|           | R$     |            | R$     | x     | ↑/↓/→ |
| **TOTAL** | **R$** |            | **R$** | **x** |       |

### Por Audiência

| Tier | Gasto | Conversões | CPA | ROAS | % Budget |
| ---- | ----- | ---------- | --- | ---- | -------- |
| HOT  | R$    |            | R$  | x    | %        |
| WARM | R$    |            | R$  | x    | %        |
| COLD | R$    |            | R$  | x    | %        |

### Por Criativo (Top 5)

| Criativo | Impressões | CTR | CPA | ROAS |
| -------- | ---------- | --- | --- | ---- |
| #1       |            | %   | R$  | x    |
| #2       |            | %   | R$  | x    |
| #3       |            | %   | R$  | x    |
| #4       |            | %   | R$  | x    |
| #5       |            | %   | R$  | x    |

---

## Análise de Tendências

### Gráfico de ROAS (últimos 7/30 dias)

```
D1 ████████████ 3.2x
D2 ██████████████ 3.5x
D3 ████████████ 3.1x
D4 ██████████ 2.8x
D5 ████████████████ 4.0x
D6 ██████████████ 3.4x
D7 ████████████████ 3.8x
```

### Observações

- [Tendência 1]
- [Tendência 2]
- [Anomalia se houver]

---

## Insights & Aprendizados

### O que funcionou ✅

1. **[Insight 1]**
   - Evidência: [dados]
   - Ação: [o que fazer com isso]

2. **[Insight 2]**
   - Evidência: [dados]
   - Ação: [o que fazer com isso]

### O que não funcionou ❌

1. **[Problema 1]**
   - Diagnóstico: [causa raiz]
   - Correção: [o que foi/será feito]

2. **[Problema 2]**
   - Diagnóstico: [causa raiz]
   - Correção: [o que foi/será feito]

### Hipóteses para Testar 🧪

1. [Hipótese 1]
2. [Hipótese 2]

---

## Ações Realizadas

| Data | Ação | Resultado |
| ---- | ---- | --------- |
|      |      |           |
|      |      |           |
|      |      |           |

---

## Plano para Próximo Período

### Otimizações Planejadas

- [ ] [Ação 1]
- [ ] [Ação 2]
- [ ] [Ação 3]

### Testes Planejados

- [ ] [Teste 1]
- [ ] [Teste 2]

### Metas

| Métrica    | Meta |
| ---------- | ---- |
| ROAS       | x    |
| CPA        | R$   |
| Gasto      | R$   |
| Conversões |      |

---

## Anexos

- [ ] Print do Ads Manager
- [ ] Detalhamento por dia
- [ ] Comparativo de criativos

---

_Report: Performance | @performance-analyst_
