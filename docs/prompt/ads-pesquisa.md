# ads-pesquisa · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `ads-pesquisa.md` uma skill chamada ads-pesquisa. Quando eu pedir algo como "pesquisa para a campanha de [produto]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# CINCO FASES · Do perfil do negócio ao brief de campanha, sem improviso

Campanha sem pesquisa é orçamento em teste cego. Esta skill roda o protocolo de cinco fases: negócio, produto, público, concorrência e ângulos, com modelos por setor (infoproduto, SaaS, serviço local, saúde, imobiliário e outros) e o conhecimento de leilão da Meta. Sai um brief de campanha que o gate e o plano conseguem ler.

Esta skill **não escreve na plataforma de anúncios**. Ela lê o que você traz (perfil, métricas, URL) e devolve julgamento. Mutação de campanha é decisão sua, no gerenciador.

## When to Use

- Diga: "pesquisa para a campanha de [produto]".
- NÃO use para conferir compliance (`ads-gate-compliance`) nem para calcular orçamento (`ads-plano`).

## Quick Reference

| procedimento | referência |
|---|---|
| run research protocol | `references/run-research-protocol.md` |

| apoio |
|---|
| `templates/business-profile.yaml` |
| `templates/product-card.yaml` |
| `templates/icp-profile.yaml` |
| `templates/strategy.md` |
| `templates/research-brief.md` |
| `references/data-industry-templates-agency.yaml` |
| `references/data-industry-templates-b2b-enterprise.yaml` |
| `references/data-industry-templates-ecommerce.yaml` |
| `references/data-industry-templates-finance.yaml` |
| `references/data-industry-templates-generic.yaml` |
| `references/data-industry-templates-healthcare.yaml` |
| `references/data-industry-templates-info-products.yaml` |
| `references/data-industry-templates-local-service.yaml` |
| `references/data-industry-templates-mobile-app.yaml` |
| `references/data-industry-templates-real-estate.yaml` |
| `references/data-industry-templates-saas.yaml` |
| `references/data-knowledge-meta-ad_auctions.md` |
| `references/data-knowledge-meta-ad_relevance_diagnostics.md` |
| `references/data-knowledge-meta-auction_overlap.md` |
| `references/data-knowledge-meta-bid_strategies.md` |
| `references/data-knowledge-meta-breakdown_effect.md` |
| `references/data-knowledge-meta-core_concepts.md` |
| `references/data-knowledge-meta-learning_phase.md` |
| `references/data-knowledge-meta-pacing.md` |
| `references/data-knowledge-meta-performance_fluctuations.md` |

## Procedure

1. Abra a referência do procedimento e leia `Entrada` (ou `Inputs`). Colete do usuário o que for exigido; pergunte o que faltar. Se houver perfil do negócio no Hybrid Workspace, use-o em vez de perguntar de novo.
2. Siga as fases da referência. Onde ela citar MCP, plataforma ou script do runtime de origem, **não execute**: peça ao usuário o dado correspondente ou use a tool `web` para inspecionar a URL informada.
3. Escolha, entre os modelos por setor listados no fim (arquivos data-industry-templates-), o mais próximo do negócio e use-o como esqueleto das cinco fases.
4. Escreva a entrega no template de saída listado acima, em português.
5. Termine com a próxima decisão que é do usuário, em uma frase.

## Pitfalls

- Inventar métrica ou status que não veio do usuário ou da página. Sem dado, o item fica "não verificado".
- Recomendar mudança na conta como se fosse executar. Esta skill entrega recomendação; a execução é humana.
- Pular fase do protocolo para ir direto ao ângulo. As fases existem para o ângulo ter lastro.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. A entrega segue o template de saída, seção por seção.
2. Toda afirmação sobre métrica, evento ou status cita de onde veio (dado do usuário, página inspecionada) ou está marcada "não verificado".
3. As cinco fases aparecem, cada uma com conclusão de uma linha.
4. Nenhuma ação foi executada na plataforma.
5. A última linha é a decisão que cabe ao usuário.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/data-industry-templates-agency.yaml`
- `references/data-industry-templates-b2b-enterprise.yaml`
- `references/data-industry-templates-ecommerce.yaml`
- `references/data-industry-templates-finance.yaml`
- `references/data-industry-templates-generic.yaml`
- `references/data-industry-templates-healthcare.yaml`
- `references/data-industry-templates-info-products.yaml`
- `references/data-industry-templates-local-service.yaml`
- `references/data-industry-templates-mobile-app.yaml`
- `references/data-industry-templates-real-estate.yaml`
- `references/data-industry-templates-saas.yaml`
- `references/data-knowledge-meta-ad_auctions.md`
- `references/data-knowledge-meta-ad_relevance_diagnostics.md`
- `references/data-knowledge-meta-auction_overlap.md`
- `references/data-knowledge-meta-bid_strategies.md`
- `references/data-knowledge-meta-breakdown_effect.md`
- `references/data-knowledge-meta-core_concepts.md`
- `references/data-knowledge-meta-learning_phase.md`
- `references/data-knowledge-meta-pacing.md`
- `references/data-knowledge-meta-performance_fluctuations.md`
- `references/run-research-protocol.md`
- `templates/business-profile.yaml`
- `templates/icp-profile.yaml`
- `templates/product-card.yaml`
- `templates/research-brief.md`
- `templates/strategy.md`


---

## Referência: references/data-industry-templates-agency.yaml

# Industry Template: Marketing Agency
# Source: squads/ads-audit/templates/agency.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: agency

benchmarks:
  cpa: "varies by client industry"
  roas: "varies by client industry"
  ctr: "varies by client industry"
  cpm: "varies by client industry"
  cvr: "varies by client industry"

recommended_funnels:
  - type: client-industry-template
    description: "Map each client to their industry template (saas, ecommerce, local-service, etc.) for strategy foundation"
    primary_platforms: [varies]
  - type: multi-platform-managed
    description: "Budget-based platform selection: <$3K Google only, $3-5K Google+Meta, $5-10K add secondary, $10K+ full mix"
    primary_platforms: [google_search, meta, linkedin, tiktok]
  - type: standardized-onboarding
    description: "3-phase client onboarding: Discovery (week 1), Technical Setup (week 2), Campaign Launch (weeks 3-4)"
    primary_platforms: [varies]

typical_audiences:
  - name: client-specific
    description: "Audiences defined per client using their industry template targeting strategy"
    platforms: [varies]
  - name: agency-prospecting
    description: "For agency's own marketing: business owners, marketing managers, CMOs searching for ad management"
    platforms: [google_search, linkedin]
  - name: cross-client-learnings
    description: "Lookalike audiences and interest stacks informed by cross-client performance patterns"
    platforms: [meta]

creative_patterns:
  - format: client-industry-creative
    description: "Creative strategy derived from client's industry template creative patterns section"
    best_for: [varies]
  - format: case-study-results
    description: "Agency's own marketing: client results with specific ROAS/CPA metrics and testimonials"
    best_for: [consideration, decision]
  - format: white-label-reports
    description: "Branded performance reports (weekly internal, monthly client, quarterly QBR)"
    best_for: [retention]

compliance_notes:
  - "No Special Ad Category required for agency operations itself"
  - "Each client's industry compliance rules apply -- check their industry template"
  - "Standardized naming convention required: [Client]_[Platform]_[Objective]_[Audience]_[Geo]_[Date]"
  - "QA checklist must be completed before every campaign launch"
  - "3x Kill Rule applied across all clients: CPA >3x target for 7+ days = pause"
  - "20% Rule: never increase client budget >20% per week, monitor 3-5 days after each increase"
  - "Client approval must be documented before launch for liability protection"

budget_guidelines:
  min_daily: 35
  recommended_daily: 165
  min_test_duration_days: 14

kpi_targets:
  primary: client_roas_or_cpa
  secondary: client_retention_rate

special_ad_category: false


---

## Referência: references/data-industry-templates-b2b-enterprise.yaml

# Industry Template: B2B Enterprise
# Source: squads/ads-audit/templates/b2b-enterprise.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: b2b-enterprise

benchmarks:
  cpa: "$200-$1000"
  roas: "5-10x pipeline"
  ctr: "0.44-0.65%"
  cpm: "$31-$38"
  cvr: "2.35%"

recommended_funnels:
  - type: abm-tiered
    description: "LinkedIn ABM with 3-tier account targeting (Tier 1 named accounts, Tier 2 ICP match, Tier 3 broader ICP)"
    primary_platforms: [linkedin]
  - type: thought-leadership
    description: "LinkedIn TLA with exec-authored content (CPC $2.29-$4.14 vs $13.23 standard) feeding demand gen"
    primary_platforms: [linkedin]
  - type: high-intent-search
    description: "Google Search for enterprise solution queries with RLSA bid adjustments for past visitors"
    primary_platforms: [google_search]
  - type: content-gated
    description: "Whitepaper, webinar, and industry report offers to capture MQLs for sales pipeline"
    primary_platforms: [linkedin, google_search]

typical_audiences:
  - name: decision-makers
    description: "VP, Director, C-suite of target function at companies 500-5000+ employees"
    platforms: [linkedin]
  - name: abm-account-list
    description: "CRM-uploaded target account lists matched to LinkedIn company audiences"
    platforms: [linkedin]
  - name: enterprise-searchers
    description: "Users searching 'enterprise [solution]', '[solution] for [industry]', '[competitor] alternative'"
    platforms: [google_search]
  - name: content-engagers
    description: "Video viewers, lead form openers, document ad readers for sequential retargeting"
    platforms: [linkedin, meta]
  - name: rlsa-category
    description: "Past website visitors searching category terms, bid up 50-100%"
    platforms: [google_search]

creative_patterns:
  - format: thought-leader-ads
    description: "CEO/founder/SME authentic LinkedIn content driving engagement at 3-5x lower CPC than standard"
    best_for: [awareness, consideration]
  - format: customer-case-study
    description: "Specific enterprise metrics: ROI, time saved, revenue impact, deal size"
    best_for: [consideration, decision]
  - format: industry-research
    description: "Original data and insights gated as lead magnets (LinkedIn Document Ads)"
    best_for: [awareness, consideration]
  - format: product-demo-video
    description: "60-90s focused on enterprise-grade capabilities, security, integrations"
    best_for: [consideration]
  - format: webinar-promotion
    description: "Live events with industry experts, registration-gated"
    best_for: [consideration]

compliance_notes:
  - "No Special Ad Category required for general B2B enterprise"
  - "LinkedIn audience minimum ~50K for algorithm optimization -- avoid overly narrow targeting"
  - "90-day click attribution window recommended due to long sales cycles (3-12+ months)"
  - "CRM integration mandatory for measuring true pipeline impact (MQL -> SQL -> closed-won)"
  - "ABM requires sales alignment plan -- marketing generating leads sales ignores wastes budget"

budget_guidelines:
  min_daily: 330
  recommended_daily: 660
  min_test_duration_days: 21

kpi_targets:
  primary: pipeline_generated
  secondary: mql_to_sql_rate

special_ad_category: false


---

## Referência: references/data-industry-templates-ecommerce.yaml

# Industry Template: E-commerce
# Source: squads/ads-audit/templates/ecommerce.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: ecommerce

benchmarks:
  cpa: "$23.74"
  roas: "3.68"
  ctr: "4.13%"
  cpm: "$12.79"
  cvr: "2.81%"

recommended_funnels:
  - type: advantage-plus-shopping
    description: "Meta ASC with 150+ creatives for automated prospecting and retargeting at scale"
    primary_platforms: [meta]
  - type: product-feed-shopping
    description: "Google PMax and Standard Shopping driven by optimized product catalog"
    primary_platforms: [google_shopping, google_pmax]
  - type: ugc-discovery
    description: "TikTok Spark Ads and UGC-style content for product discovery among younger demographics"
    primary_platforms: [tiktok]
  - type: retargeting-cascade
    description: "View Content (7d) -> Add to Cart (14d) -> Past Purchasers (180d) multi-window retargeting"
    primary_platforms: [meta, google_search]

typical_audiences:
  - name: product-searchers
    description: "Users searching 'buy [product]', '[product] reviews', '[brand] [product]'"
    platforms: [google_search, google_shopping]
  - name: advantage-plus-broad
    description: "Broad Meta targeting with strong creative, let algorithm optimize"
    platforms: [meta]
  - name: purchaser-lookalikes
    description: "1% lookalike of top 5% purchasers and high AOV customers"
    platforms: [meta]
  - name: cart-abandoners
    description: "Add-to-cart users who did not complete purchase within 14 days"
    platforms: [meta, google_search]
  - name: tiktok-shop-audiences
    description: "In-app shopping audiences, product interaction retargeting"
    platforms: [tiktok]

creative_patterns:
  - format: ugc-unboxing
    description: "Authentic customer unboxing and review videos, Spark Ads (~3% CTR vs ~2% standard)"
    best_for: [awareness, consideration]
  - format: product-demo
    description: "Product in use with feature close-ups and lifestyle context"
    best_for: [consideration]
  - format: price-anchoring
    description: "Was/now pricing, bundle savings, 'best seller' badges"
    best_for: [decision]
  - format: social-proof-carousel
    description: "Review count, star ratings, and transformation before/after content"
    best_for: [consideration, decision]
  - format: seasonal-promotion
    description: "Q4 holiday, Black Friday, seasonal event creative with urgency CTAs"
    best_for: [decision]

compliance_notes:
  - "No Special Ad Category required for general e-commerce"
  - "TikTok Shop only available in 11 countries (US, UK, Southeast Asia, select EU)"
  - "Product feed must have accurate pricing and availability -- stale data causes disapprovals"
  - "Avoid misleading discount claims; original prices must be verifiable"
  - "Q4 CPMs rise 30-50% -- factor into budget planning"

budget_guidelines:
  min_daily: 100
  recommended_daily: 250
  min_test_duration_days: 14

kpi_targets:
  primary: roas
  secondary: new_customer_percentage

special_ad_category: false


---

## Referência: references/data-industry-templates-finance.yaml

# Industry Template: Financial Services
# Source: squads/ads-audit/templates/finance.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: finance

benchmarks:
  cpa: "$50-$200"
  roas: "3.5"
  ctr: "4.65-8.33%"
  cpm: "$50.00"
  cvr: "2.55-3.50%"

recommended_funnels:
  - type: product-search-capture
    description: "Google Search for high-intent '[product] rates', 'best [product] 2026', '[product] calculator' queries"
    primary_platforms: [google_search]
  - type: b2b-financial-abm
    description: "LinkedIn targeting CFO/VP Finance/Treasury at ICP companies for commercial banking and wealth management"
    primary_platforms: [linkedin]
  - type: education-to-conversion
    description: "Financial literacy content on Meta and YouTube builds trust, retargeting converts to applications"
    primary_platforms: [meta, youtube]
  - type: rate-comparison-landing
    description: "Calculator and rate comparison interactive landing pages driven by Google and Meta traffic"
    primary_platforms: [google_search, meta]

typical_audiences:
  - name: product-rate-searchers
    description: "Users searching '[product] rates', 'best [product] 2026', 'compare [products]'"
    platforms: [google_search]
  - name: in-market-financial
    description: "Google in-market audiences for financial services, financial planning, insurance"
    platforms: [google_search]
  - name: b2b-decision-makers
    description: "CFO, VP Finance, Treasury, Risk Management at target company sizes"
    platforms: [linkedin]
  - name: application-retargeting
    description: "Rate checker visitors, application starters who did not complete"
    platforms: [meta, google_search]
  - name: broad-special-ad
    description: "Broad Meta targeting with good creative (Special Ad Category restricts detailed targeting for credit products)"
    platforms: [meta]

creative_patterns:
  - format: rate-callout
    description: "'APY as high as X.XX%' attention-grabbing, verifiable rate promotion"
    best_for: [consideration, decision]
  - format: calculator-tool
    description: "Interactive mortgage, savings, or ROI calculators as landing page experiences"
    best_for: [consideration]
  - format: security-messaging
    description: "'FDIC Insured', 'Bank-level encryption', 'A+ BBB rated', award badges"
    best_for: [consideration, decision]
  - format: educational-video
    description: "'How compound interest works' educational content with subtle product promotion"
    best_for: [awareness]
  - format: comparison-content
    description: "Transparent rate comparisons across products to build trust and authority"
    best_for: [consideration]

compliance_notes:
  - "SPECIAL AD CATEGORY: Credit (loans, mortgages, credit cards) on Meta -- must declare"
  - "Meta restrictions for credit: no age, no gender, no ZIP code targeting, 15-mile minimum radius"
  - "Meta: Financial Products enforced as Special Category since Jan 2025"
  - "Google: must display APR, fees, repayment terms for mortgage, loan, and credit ads"
  - "Google: crypto ads require certification in approved countries"
  - "Insurance ads require 'not a guarantee' disclaimers and license numbers"
  - "Investment ads must include 'past performance does not guarantee future results'"
  - "All ad copy requires legal/compliance team approval (typical 3-7 business day review cycle)"
  - "Pre-approved ad copy library recommended to reduce compliance bottleneck"
  - "State-specific licensing requirements must be verified before geo-targeting"

budget_guidelines:
  min_daily: 265
  recommended_daily: 500
  min_test_duration_days: 21

kpi_targets:
  primary: cost_per_funded_account
  secondary: application_completion_rate

special_ad_category: true
special_ad_category_type: credit


---

## Referência: references/data-industry-templates-generic.yaml

# Industry Template: Generic (Fallback)
# Source: squads/ads-audit/templates/generic.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: generic

benchmarks:
  cpa: "$70"
  roas: "3.0"
  ctr: "6.66%"
  cpm: "$12.79"
  cvr: "7.52%"

recommended_funnels:
  - type: search-capture
    description: "Google Search for high-intent commercial queries with brand defense and competitor campaigns"
    primary_platforms: [google_search]
  - type: prospecting-retargeting
    description: "Meta prospecting with interest/lookalike audiences, retargeting website visitors and engagers"
    primary_platforms: [meta]
  - type: platform-questionnaire
    description: "Use platform selection questionnaire to determine optimal mix based on product type, audience, and budget"
    primary_platforms: [varies]

typical_audiences:
  - name: high-intent-searchers
    description: "Users searching '[product/service] + commercial intent', '[category] + buying keywords'"
    platforms: [google_search]
  - name: interest-based-prospecting
    description: "Interest and behavior targeting on Meta based on product category relevance"
    platforms: [meta]
  - name: retargeting-cascade
    description: "Website visitors (7-30 days), engaged users (video viewers, social engagers), form starters"
    platforms: [meta, google_search]
  - name: b2b-professional
    description: "Job title and company targeting on LinkedIn if audience is B2B professionals"
    platforms: [linkedin]
  - name: young-demographic
    description: "TikTok for 18-34 demographic with native-feeling content"
    platforms: [tiktok]

creative_patterns:
  - format: short-video
    description: "15-30s video with hook (0-3s), benefit, proof, and clear CTA for Meta/TikTok/YouTube Shorts"
    best_for: [awareness, consideration]
  - format: static-with-copy
    description: "High-quality static images with benefit-driven copy for Google, Meta, LinkedIn"
    best_for: [consideration]
  - format: long-form-video
    description: "60-180s detailed content for YouTube and Meta Feed placements"
    best_for: [consideration, decision]
  - format: carousel-collection
    description: "Multi-image carousel for product showcase or step-by-step value communication"
    best_for: [consideration]
  - format: rsa-text-ads
    description: "Google/Microsoft responsive search ads with 15 headlines, 4 descriptions, all extensions"
    best_for: [decision]

compliance_notes:
  - "No Special Ad Category required for generic businesses"
  - "If business involves housing, credit, employment, healthcare, or finance -- use the specific industry template"
  - "Universal negative keywords should be added: jobs, salary, free, DIY, Wikipedia, assignment"
  - "All platforms require landing page privacy policy"
  - "Server-side tracking recommended for GDPR/CCPA compliance"
  - "Avoid superlative claims without evidence across all platforms"

budget_guidelines:
  min_daily: 35
  recommended_daily: 100
  min_test_duration_days: 14

kpi_targets:
  primary: cpa
  secondary: cvr

special_ad_category: false


---

## Referência: references/data-industry-templates-healthcare.yaml

# Industry Template: Healthcare
# Source: squads/ads-audit/templates/healthcare.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: healthcare

benchmarks:
  cpa: "$100-$500"
  roas: "N/A"
  ctr: "4.90%"
  cpm: "$28-$36.82"
  cvr: "3.10%"

recommended_funnels:
  - type: patient-acquisition-search
    description: "Google Search for high-intent '[specialty] doctor near me' and '[condition] treatment [city]' queries"
    primary_platforms: [google_search]
  - type: provider-trust-building
    description: "Meta and YouTube doctor-to-camera videos, facility tours, and patient education content"
    primary_platforms: [meta, youtube]
  - type: new-patient-lead-gen
    description: "Meta lead forms for new patient appointment requests and free health screening offers"
    primary_platforms: [meta]
  - type: urgent-care-local
    description: "Google Search for 'urgent care near me', 'walk in clinic [city]' with call extensions"
    primary_platforms: [google_search]

typical_audiences:
  - name: condition-searchers
    description: "Users searching '[condition] treatment [city]', '[specialty] doctor near me', '[procedure] cost'"
    platforms: [google_search]
  - name: local-radius-patients
    description: "5-20 mile radius around practice locations, general wellness interests"
    platforms: [meta]
  - name: retargeting-visitors
    description: "Service page viewers, video viewers of doctor introductions and facility tours"
    platforms: [meta]
  - name: microsoft-older-demo
    description: "Microsoft/Bing audience skews 45-64 (38% of Bing users) -- aligns with healthcare demographics"
    platforms: [microsoft]
  - name: referring-professionals
    description: "LinkedIn targeting for B2B healthcare marketing, professional referral networks"
    platforms: [linkedin]

creative_patterns:
  - format: doctor-to-camera
    description: "Provider introduction videos showing bedside manner and expertise, builds patient trust"
    best_for: [awareness, consideration]
  - format: facility-tour
    description: "Clean, modern environment walkthrough with equipment and staff, reassures patients"
    best_for: [consideration]
  - format: patient-testimonial
    description: "Consenting patient stories with specific outcomes within HIPAA compliance boundaries"
    best_for: [consideration, decision]
  - format: educational-content
    description: "'5 signs you need to see a [specialist]' educational approach with soft CTA"
    best_for: [awareness]
  - format: insurance-transparency
    description: "'We accept [insurance]', 'Affordable payment plans', cost transparency messaging"
    best_for: [decision]

compliance_notes:
  - "SPECIAL AD CATEGORY: Health conditions targeting restricted on Meta and Google"
  - "HIPAA: never use patient data for ad targeting without explicit written authorization"
  - "HIPAA: retargeting pixels cannot be combined with health condition data"
  - "HIPAA: landing pages must have privacy policy, cannot collect PHI in ad forms"
  - "HIPAA: Meta CAPI and Google Enhanced Conversions must ensure no PHI is transmitted"
  - "LegitScript certification REQUIRED for addiction treatment, online pharmacy, telehealth prescribing (4-8 weeks, $1K-$2K/year)"
  - "Cannot guarantee specific medical outcomes in ad copy -- policy and legal risk"
  - "Patient testimonials require proper HIPAA authorization (legal liability)"
  - "Call recording requires state consent law compliance (one-party vs two-party)"

budget_guidelines:
  min_daily: 130
  recommended_daily: 330
  min_test_duration_days: 21

kpi_targets:
  primary: cost_per_new_patient
  secondary: appointment_show_rate

special_ad_category: true
special_ad_category_type: health


---

## Referência: references/data-industry-templates-info-products.yaml

# Industry Template: Info Products & Courses
# Source: squads/ads-audit/templates/info-products.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: info-products

benchmarks:
  cpa: "$30-$100"
  roas: "3-5x blended"
  ctr: "1.71%"
  cpm: "$12.79"
  cvr: "7.72%"

recommended_funnels:
  - type: webinar-funnel
    description: "Meta/YouTube ads drive registrations for live/evergreen webinar, which sells core offer"
    primary_platforms: [meta, youtube]
  - type: lead-magnet-nurture
    description: "Free guide/checklist capture via Meta ads, email nurture sequence converts to paid product"
    primary_platforms: [meta]
  - type: vsl-direct
    description: "YouTube in-stream 2-5 min VSL-style ads driving directly to sales page for cold traffic"
    primary_platforms: [youtube]
  - type: tripwire-ascension
    description: "Low-ticket ($7-$27) offer acquires customers profitably, upsell sequence drives LTV"
    primary_platforms: [meta, google_search]

typical_audiences:
  - name: interest-stacks
    description: "3-5 related interests (thought leaders, competitors, topics) for prospecting"
    platforms: [meta]
  - name: purchaser-lookalikes
    description: "1% lookalike of purchasers, email list, or webinar attendees"
    platforms: [meta]
  - name: custom-intent-youtube
    description: "Users searching '[topic] course', 'learn [skill]', competitor course names"
    platforms: [youtube]
  - name: funnel-retargeting
    description: "Sales page visitors (3d), webinar attendees who did not buy, video viewers 75%+ (7d)"
    platforms: [meta, youtube]
  - name: broad-creative-driven
    description: "No targeting, let algorithm decide based on strong creative signal (works at scale)"
    platforms: [meta]

creative_patterns:
  - format: founder-to-camera
    description: "Authentic personal video with story-driven hook, problem agitation, and solution framework"
    best_for: [awareness, consideration]
  - format: student-testimonial
    description: "Specific results with numbers ('made $10K in 30 days'), UGC-style casual recording"
    best_for: [consideration, decision]
  - format: free-value-content
    description: "Teach something valuable in the ad itself, then pitch the course or lead magnet"
    best_for: [awareness]
  - format: challenge-webinar-ads
    description: "'Join my free 5-day challenge' or webinar registration with countdown urgency"
    best_for: [consideration]
  - format: transformation-carousel
    description: "Before/after student journey stories, curriculum preview, key takeaway slides"
    best_for: [consideration, decision]

compliance_notes:
  - "No Special Ad Category required for general info products"
  - "Avoid income claims without disclaimers ('results not typical') -- Meta and YouTube enforce"
  - "Over-promising in ad copy leads to refund requests and potential policy violations"
  - "TikTok minimum $50/day per campaign for info product ads"
  - "Broad targeting requires 50+ conversions/week to function well on Meta"

budget_guidelines:
  min_daily: 65
  recommended_daily: 165
  min_test_duration_days: 14

kpi_targets:
  primary: blended_roas
  secondary: cpl_lead_magnet

special_ad_category: false


---

## Referência: references/data-industry-templates-local-service.yaml

# Industry Template: Local Service
# Source: squads/ads-audit/templates/local-service.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: local-service

benchmarks:
  cpa: "$90.92"
  roas: "5.0"
  ctr: "5.50-6.37%"
  cpm: "$18.00"
  cvr: "7.33-15.0%"

recommended_funnels:
  - type: local-services-ads
    description: "Google LSA (pay-per-lead) with Google Guaranteed badge for top placement at lowest CPL ($25-$75)"
    primary_platforms: [google_lsa]
  - type: high-intent-search
    description: "Google Search PPC for '[service] near me' and emergency queries with call extensions"
    primary_platforms: [google_search]
  - type: local-awareness
    description: "Meta local awareness campaigns within 10-20 mile radius for seasonal promotions and brand building"
    primary_platforms: [meta]

typical_audiences:
  - name: emergency-searchers
    description: "Users searching 'emergency [service]', '[service] near me now', 'same day [service]'"
    platforms: [google_search, google_lsa]
  - name: service-plus-city
    description: "Users searching '[service] [city]', '[service] in [neighborhood]'"
    platforms: [google_search]
  - name: local-homeowners
    description: "10-20 mile radius, age 25-65, homeownership and home improvement interests"
    platforms: [meta]
  - name: retargeting-local
    description: "Website visitors (30 days) and engaged Facebook/Instagram users"
    platforms: [meta]

creative_patterns:
  - format: before-after-photos
    description: "Transformation content for visual services (roofing, landscaping, painting)"
    best_for: [consideration, decision]
  - format: team-and-truck
    description: "Real people, real vehicles, real job sites -- builds local trust"
    best_for: [awareness]
  - format: offer-driven
    description: "'$50 off first service', 'free estimate', seasonal pricing with urgency"
    best_for: [decision]
  - format: review-highlights
    description: "Google review screenshots, star ratings, '4.9 with 200+ reviews'"
    best_for: [consideration, decision]
  - format: emergency-messaging
    description: "'Same-day service', '24/7 available', 'Call now' with call extensions"
    best_for: [decision]

compliance_notes:
  - "No Special Ad Category required for general local services"
  - "Call recording requires state consent law compliance (one-party vs two-party)"
  - "Google Business Profile must be linked for location extensions and LSA"
  - "Ad scheduling should match business hours unless 24/7 emergency service is offered"
  - "License and insurance information should be displayed in ad copy for trust"

budget_guidelines:
  min_daily: 50
  recommended_daily: 130
  min_test_duration_days: 14

kpi_targets:
  primary: cost_per_booked_job
  secondary: call_volume

special_ad_category: false


---

## Referência: references/data-industry-templates-mobile-app.yaml

# Industry Template: Mobile App
# Source: squads/ads-audit/templates/mobile-app.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: mobile-app

benchmarks:
  cpa: "$15-$50"
  roas: "3:1 LTV:CPI"
  ctr: "7.45%"
  cpm: "$6.00-$10.00"
  cvr: "50-60%"

recommended_funnels:
  - type: app-install-volume
    description: "Meta Advantage+ App Campaigns and Google UAC for maximum install volume at lowest CPI"
    primary_platforms: [meta, google_uac]
  - type: apple-search-high-intent
    description: "Apple Search Ads exact match on category keywords and competitor names for highest CVR installs"
    primary_platforms: [apple_search_ads]
  - type: value-optimization
    description: "Meta and Google UAC optimizing for post-install events (subscription, purchase) not just installs"
    primary_platforms: [meta, google_uac]
  - type: re-engagement
    description: "Deep-linked campaigns targeting lapsed users (30-60d inactive), trial non-converters, free-to-premium upsell"
    primary_platforms: [meta, tiktok]

typical_audiences:
  - name: high-ltv-lookalikes
    description: "1% lookalike of highest-LTV users, subscribers, power users"
    platforms: [meta]
  - name: category-searchers
    description: "Users searching '[category] app', 'best [category] app', competitor app names"
    platforms: [apple_search_ads, google_uac]
  - name: broad-aac
    description: "Broad targeting via Advantage+ App Campaigns, algorithm-optimized at scale"
    platforms: [meta]
  - name: lapsed-users
    description: "Users inactive 30-60 days, trial users who did not subscribe"
    platforms: [meta, tiktok]
  - name: tiktok-discovery
    description: "Young demographics, in-feed Spark Ads and Smart+ campaigns for viral discovery"
    platforms: [tiktok]

creative_patterns:
  - format: app-demo-video
    description: "15-30s showing core functionality with actual screen recordings and finger taps/swipes"
    best_for: [consideration]
  - format: ugc-reactions
    description: "Users discovering the app for the first time, authentic reaction content"
    best_for: [awareness]
  - format: problem-solution
    description: "'Tired of [problem]? This app fixes it in 10 seconds' with before/after"
    best_for: [awareness, consideration]
  - format: social-proof-stats
    description: "'10M+ downloads', '4.8 on App Store', app store badges"
    best_for: [consideration, decision]
  - format: platform-native
    description: "TikTok native-looking (not polished), Meta multi-aspect-ratio (9:16 + 1:1)"
    best_for: [awareness]

compliance_notes:
  - "No Special Ad Category required for general mobile apps"
  - "MMP (AppsFlyer, Adjust, Branch, Singular) required for cross-platform attribution"
  - "SKAdNetwork (iOS) limits to 63 conversion values with 24-48h delay"
  - "Google UAC minimum $50/day budget for algorithm learning"
  - "Custom Product Pages (Apple) and Custom Store Listings (Google Play) strongly recommended"
  - "Deep linking (Universal Links iOS, App Links Android) must be configured before launch"

budget_guidelines:
  min_daily: 165
  recommended_daily: 330
  min_test_duration_days: 14

kpi_targets:
  primary: ltv_to_cpi_ratio
  secondary: day_7_retention

special_ad_category: false


---

## Referência: references/data-industry-templates-real-estate.yaml

# Industry Template: Real Estate
# Source: squads/ads-audit/templates/real-estate.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: real-estate

benchmarks:
  cpa: "$50-$150"
  roas: "N/A"
  ctr: "8.43%"
  cpm: "$18.00"
  cvr: "3.28%"

recommended_funnels:
  - type: buyer-lead-gen
    description: "Google Search for high-intent 'homes for sale in [area]' queries plus Meta lead forms with property carousels"
    primary_platforms: [google_search, meta]
  - type: seller-lead-gen
    description: "Meta lead forms with 'free home valuation' offer, Google Search for 'sell my house [city]' queries"
    primary_platforms: [meta, google_search]
  - type: listing-promotion
    description: "Meta carousel and video ads showcasing individual listings with property tours and drone footage"
    primary_platforms: [meta, youtube]
  - type: agent-brand-building
    description: "Market update videos, community content, and testimonials to build agent personal brand"
    primary_platforms: [meta, youtube]

typical_audiences:
  - name: buyer-intent-search
    description: "Users searching 'homes for sale in [city]', '[neighborhood] real estate', 'open houses near me'"
    platforms: [google_search]
  - name: seller-intent-search
    description: "Users searching 'sell my house [city]', 'home value estimate', 'best realtor [city]'"
    platforms: [google_search]
  - name: local-radius
    description: "15+ mile radius around target area (Meta minimum enforced due to Special Ad Category)"
    platforms: [meta]
  - name: listing-retargeting
    description: "Website visitors who viewed specific listing pages, video viewers of property tours"
    platforms: [meta]
  - name: investor-targeting
    description: "LinkedIn targeting for luxury real estate, investor profiles, relocation services"
    platforms: [linkedin]

creative_patterns:
  - format: property-tour-video
    description: "30-60s walkthrough with agent narration plus drone aerial footage of property and neighborhood"
    best_for: [consideration, decision]
  - format: listing-carousel
    description: "Multiple listings or room-by-room tour of a single property in carousel format"
    best_for: [awareness, consideration]
  - format: market-update
    description: "Agent-to-camera with local market data, trends, and insights for credibility"
    best_for: [awareness]
  - format: home-valuation-offer
    description: "'What is your home worth?' offer for seller lead capture via Meta lead forms"
    best_for: [consideration]
  - format: just-sold-listed
    description: "Social proof and urgency via 'Just Sold' and 'Just Listed' announcement posts"
    best_for: [awareness, decision]

compliance_notes:
  - "SPECIAL AD CATEGORY: Housing -- must declare Fair Housing on Meta for ALL real estate ads"
  - "Meta restrictions: no age targeting, no gender targeting, no ZIP code targeting, 15-mile minimum radius"
  - "Meta: Lookalike Audiences unavailable -- must use Special Ad Audiences instead"
  - "Google: Fair Housing compliance required -- cannot target based on protected characteristics"
  - "Cannot exclude based on demographics (race, religion, family status, disability, national origin)"
  - "Listing data must be current -- advertising properties under contract or sold is misleading"

budget_guidelines:
  min_daily: 85
  recommended_daily: 200
  min_test_duration_days: 14

kpi_targets:
  primary: cost_per_closing
  secondary: lead_to_showing_rate

special_ad_category: true
special_ad_category_type: housing


---

## Referência: references/data-industry-templates-saas.yaml

# Industry Template: SaaS
# Source: squads/ads-audit/templates/saas.md + references/benchmarks.yaml
# Last Updated: 2026-03-17

industry: saas

benchmarks:
  cpa: "$100-$200"
  roas: "5:1 pipeline"
  ctr: "4.28%"
  cpm: "$35.00"
  cvr: "1.65%"

recommended_funnels:
  - type: demo-request
    description: "Google Search captures high-intent 'demo' and 'pricing' queries, LinkedIn ABM nurtures decision makers"
    primary_platforms: [google_search, linkedin]
  - type: free-trial
    description: "Meta prospecting + Google Search retargeting for trial signups, email nurture to paid conversion"
    primary_platforms: [meta, google_search]
  - type: content-lead-magnet
    description: "LinkedIn TLA + YouTube thought leadership drive whitepaper/guide downloads into email nurture"
    primary_platforms: [linkedin, youtube]

typical_audiences:
  - name: high-intent-searchers
    description: "Users searching '[category] software', 'best [category] tool', '[competitor] alternative'"
    platforms: [google_search]
  - name: decision-makers-by-title
    description: "VP/Director/Manager of relevant function at ICP-matching companies"
    platforms: [linkedin]
  - name: competitor-users
    description: "Users searching competitor brand names or 'switch from [competitor]'"
    platforms: [google_search, linkedin]
  - name: retargeting-engaged
    description: "Pricing page visitors (7-day), blog visitors (30-day), trial users not yet converted"
    platforms: [meta, google_search]
  - name: lookalike-customers
    description: "1% lookalike of closed-won customers or high-value trial converters"
    platforms: [meta]

creative_patterns:
  - format: product-demo-video
    description: "30-60s screen recordings showing key workflows and value delivery"
    best_for: [consideration, decision]
  - format: customer-testimonial
    description: "Video case studies with specific ROI metrics (time saved, revenue impact)"
    best_for: [decision]
  - format: comparison-content
    description: "Side-by-side feature comparisons with named competitors"
    best_for: [consideration]
  - format: thought-leader-ads
    description: "Founder/CEO authentic content on LinkedIn TLA (CPC $2.29-$4.14 vs $13.23 standard)"
    best_for: [awareness, consideration]
  - format: roi-calculator
    description: "Interactive tools as lead magnets driving email capture"
    best_for: [consideration]

compliance_notes:
  - "No Special Ad Category required for generic SaaS"
  - "If SaaS involves financial data processing, check finance compliance requirements"
  - "Competitor keyword bidding is legal but monitor trademark policy per platform"
  - "Avoid superlative claims ('best', '#1') without verifiable third-party evidence"

budget_guidelines:
  min_daily: 165
  recommended_daily: 330
  min_test_duration_days: 14

kpi_targets:
  primary: pipeline_generated
  secondary: mql_to_sql_rate

special_ad_category: false


---

## Referência: references/data-knowledge-meta-ad_auctions.md

# Ad Auctions

## Summary

Meta uses an auction system to determine which ad is shown to each user. The winning ad is NOT simply the highest bidder -- Meta calculates a Total Value score combining the advertiser's bid, the estimated action rate (how likely the user is to take the desired action), and user value (ad quality and relevance). This means a great creative with a lower bid can beat a poor creative with a higher bid.

## Deep Dive

### The Total Value Formula

Every time an impression opportunity arises, Meta calculates a Total Value score for each eligible ad:

```
Total Value = (Advertiser Bid x Estimated Action Rate) + User Value
```

| Component | What It Measures | Who Controls It |
|-----------|-----------------|-----------------|
| **Advertiser Bid** | How much the advertiser is willing to pay for the desired action | Advertiser (bid strategy + budget) |
| **Estimated Action Rate** | Probability that this specific user will take the desired action (click, convert, etc.) | Meta's ML models (influenced by creative quality and targeting relevance) |
| **User Value** | Ad quality score based on user feedback signals (hides, reports, engagement history) | Creative quality, relevance to audience, landing page experience |

The ad with the highest Total Value wins the auction and gets the impression.

### Why This Matters

The formula has a profound implication: **you cannot simply outbid competitors to win auctions.** An ad with poor creative (low Estimated Action Rate and User Value) would need to bid significantly more to overcome the quality disadvantage.

Conversely, an advertiser with excellent creative can win auctions at lower CPMs because their Estimated Action Rate and User Value components are higher.

### Estimated Action Rate

Meta's ML models predict the Estimated Action Rate using:

1. **User history** -- Has this user engaged with similar ads before? What's their general click/conversion behavior?
2. **Ad history** -- How has this specific ad (or similar ads from this advertiser) performed so far?
3. **Context** -- Time of day, device, placement, connection type
4. **Creative signals** -- Image/video quality, text content, format type

This is why the same ad can have different effective bids for different users -- the Estimated Action Rate varies per user.

### User Value

User Value captures Meta's interest in showing high-quality ads that keep users on the platform:

- **Positive signals:** Likes, comments, shares, saves, long video views
- **Negative signals:** Hide ad, report ad, "not relevant" feedback
- **Quality signals:** Landing page load speed, post-click engagement, bounce rate

Ads with consistently negative user feedback see their User Value decline, effectively making them more expensive to deliver.

### Auction Dynamics

**Second-Price Auction (Modified)**

Meta uses a modified version of the Vickrey-Clarke-Groves (VCG) auction:
- The winner pays slightly more than the minimum needed to beat the second-highest Total Value
- This means you often pay LESS than your maximum bid
- The actual cost depends on the competitive landscape, not just your bid

**Auction Frequency**

Auctions happen billions of times per day, for every impression opportunity. Each auction is independent and considers the current state of all eligible ads.

**Eligibility Filtering**

Before the auction, Meta filters eligible ads based on:
1. Targeting criteria match (does this user fit the audience definition?)
2. Budget availability (does the ad set have remaining budget?)
3. Frequency caps (has this user seen the ad too many times?)
4. Policy compliance (is the ad approved and active?)
5. Pacing considerations (should this ad compete right now given its pacing schedule?)

### Practical Implications for Campaign Management

| Principle | Implication |
|-----------|-------------|
| Creative quality directly affects CPM | Investing in creative reduces cost per impression |
| Estimated Action Rate is per-user | The same ad costs different amounts for different users |
| User Value penalizes bad ads | Poor ads become exponentially more expensive over time |
| Second-price mechanism | You usually pay less than your bid |
| Broad targeting can improve auction | More eligible auctions = more chances to find cheap wins |

### Relationship to Other Knowledge Docs

- **Relevance Diagnostics** (`ad_relevance_diagnostics.md`): The three rankings directly influence Estimated Action Rate and User Value
- **Bid Strategies** (`bid_strategies.md`): The Advertiser Bid component is controlled by your chosen bid strategy
- **Pacing** (`pacing.md`): The pacing multiplier adjusts the effective bid throughout the day
- **Auction Overlap** (`auction_overlap.md`): When your own ads compete in the same auction

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @performance-analyst | When analyzing why CPMs are high or why ads are losing auctions. Understanding Total Value helps diagnose the specific weak component |
| @creative-analyst | When justifying creative investment. This doc proves that creative quality directly reduces costs |
| @campaign-manager | When setting up new campaigns. Understanding auction mechanics informs targeting and bidding decisions |
| @ad-midas | When user asks "why are my ads so expensive" or "how does Meta decide which ad to show" |

**Load method:** On-demand via Read tool. Foundational knowledge that supports analysis from other docs.

## Red Flags

- NEVER assume higher bids automatically win auctions -- Total Value includes creative quality and relevance
- NEVER ignore creative quality when trying to reduce CPMs -- it's 2/3 of the Total Value formula
- NEVER treat all users as having the same cost -- Estimated Action Rate varies per user, making some users naturally cheaper to convert
- NEVER optimize only on bid/budget levers while ignoring creative and targeting -- auction mechanics make all three interdependent
- NEVER assume a winning ad today will win tomorrow -- auction dynamics are real-time and competitive landscape shifts constantly

## Sources

- Meta Business Help Center: "About Meta ad auctions"
- Meta Engineering Blog: "Ad auction and delivery system design" (2021)
- Meta Marketing API: Campaign delivery and auction documentation
- mathiaschu/meta-ads-analyzer: `ad_auctions.md` reference document
- VCG Auction Theory: Vickrey-Clarke-Groves mechanism applied to digital advertising


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

## Referência: references/data-knowledge-meta-auction_overlap.md

# Auction Overlap

## Summary

Auction overlap occurs when your own ad sets compete against each other in the same Meta auction. This happens when multiple ad sets target overlapping audiences, effectively bidding against yourself. It wastes budget, inflates CPMs, and fragments data that the algorithm needs to optimize. Meta provides an Audience Overlap tool to detect this, and agents should recommend consolidation or mutual exclusions when overlap exceeds 30%.

## Deep Dive

### How Auction Overlap Works

Meta runs billions of auctions per day. Each time an impression opportunity arises for a user, all eligible ads compete. When two of YOUR ad sets target the same user, they enter the same auction. Meta then:

1. Selects the highest-performing ad set (by Total Value score) to compete
2. Suppresses the other ad set from that specific auction
3. The suppressed ad set loses an opportunity it could have won if it were the only one targeting that user

This suppression mechanism (called "auction deduplication") means you're NOT literally bidding against yourself in price -- but you ARE fragmenting your delivery and reducing the effective reach of each ad set.

### Why It's Harmful

1. **Fragmented Learning** -- Instead of one ad set getting 100 conversions to exit Learning Phase, two overlapping ad sets each get 50, potentially keeping both in Learning Limited status.

2. **Budget Inefficiency** -- Budget allocated to the suppressed ad set sits idle during overlapping auctions. Delivery becomes uneven.

3. **Inconsistent Optimization** -- The algorithm cannot learn efficiently when the same user pool is being targeted by competing ad sets with different optimization signals.

4. **Higher CPMs** -- In some cases, internal competition can inflate the effective cost per impression.

### Common Causes of Overlap

| Scenario | Example |
|----------|---------|
| Broad + narrow targeting | One ad set targets "all women 25-54", another targets "women 25-34 interested in yoga" |
| Retargeting + prospecting | Retargeting ad set captures users also in the prospecting audience |
| Lookalike audiences | 1% lookalike and 3% lookalike share significant overlap |
| Interest stacking | Multiple ad sets each targeting related interests with natural overlap |
| Duplicate campaigns | Legacy campaigns left running alongside new ones |

### How to Detect Overlap

**Meta Audience Overlap Tool:**
1. Go to Audiences in Ads Manager
2. Select 2-5 saved audiences
3. Click "Show Audience Overlap"
4. Review the percentage overlap between each pair

**Via API (MCP tools):**
- Use audience size estimates to calculate theoretical overlap
- Compare audience definitions programmatically
- Track delivery metrics: if two ad sets show similar frequency patterns, suspect overlap

### Overlap Severity Scale

| Overlap % | Severity | Action |
|-----------|----------|--------|
| 0-15% | Low | Monitor, no action needed |
| 15-30% | Moderate | Watch for Learning Phase issues, consider future consolidation |
| 30-50% | High | Recommend consolidation or mutual audience exclusions |
| 50%+ | Critical | Immediate consolidation required. Merge ad sets or implement hard exclusions |

### Remediation Strategies

1. **Consolidation** -- Merge overlapping ad sets into a single ad set with broader targeting. Let Meta's algorithm handle the sub-segmentation.

2. **Mutual Exclusions** -- Exclude Custom Audiences from each ad set to create non-overlapping pools. Example: exclude retargeting audience from prospecting ad sets.

3. **Campaign Budget Optimization (CBO)** -- Move overlapping ad sets into a single CBO campaign. Meta will allocate budget dynamically, reducing the impact of overlap.

4. **Advantage+ Audience** -- Consider using Advantage+ targeting which lets Meta expand beyond your defined audiences, reducing the impact of manual overlap.

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @performance-analyst | During periodic campaign health checks (weekly minimum). Check overlap when multiple ad sets exist with similar targeting |
| @campaign-manager | Before creating new ad sets. Must evaluate overlap with existing ad sets before launch |
| @ad-midas | When user reports "my campaigns seem to be competing with each other" or asks about audience strategy |

**Load method:** On-demand via Read tool during campaign structure reviews.

**Periodic check:** @performance-analyst should flag overlap check as part of the weekly digest if the account has 3+ active ad sets.

## Red Flags

- NEVER launch a new ad set without checking overlap against existing active ad sets
- NEVER ignore overlap >30% -- it directly impacts budget efficiency and Learning Phase exit
- NEVER create multiple ad sets targeting the same Lookalike audience at different percentages without exclusions
- NEVER assume CBO alone solves overlap -- it helps but doesn't eliminate the underlying audience fragmentation
- NEVER split audiences into micro-segments "for testing" without understanding the overlap implications on Learning Phase

## Sources

- Meta Business Help Center: "About audience overlap"
- Meta Ads Manager: Audience Overlap tool documentation
- mathiaschu/meta-ads-analyzer: `auction_overlap.md` reference document
- Meta Best Practices: "How to structure campaigns to avoid auction overlap"


---

## Referência: references/data-knowledge-meta-bid_strategies.md

# Bid Strategies

## Summary

Meta offers three categories of bid strategies: Spend-based (Lowest Cost, Highest Value), Goal-based (Cost Cap, ROAS Goal, Bid Cap), and Manual (Manual Bid). The right strategy depends on account maturity, conversion volume, and business goals. New accounts should start with Lowest Cost to accumulate data; only migrate to goal-based strategies after achieving 30+ conversions per week.

## Deep Dive

### Bid Strategy Categories

#### 1. Spend-Based Strategies

These strategies focus on spending the full budget while maximizing results.

**Lowest Cost (Default)**
- Meta finds the cheapest conversions available
- No cost ceiling -- will spend the full budget
- Best for: new accounts, data accumulation, maximizing volume
- Risk: CPA can spike during high-competition periods (no cap)

**Highest Value**
- Optimizes for the highest-value conversions (requires value-based optimization)
- Spends full budget while maximizing total conversion value
- Best for: e-commerce with variable order values
- Requires: Purchase event with value parameter, sufficient value data

#### 2. Goal-Based Strategies

These strategies try to hit a specific performance target.

**Cost Cap**
- Sets a maximum average CPA target
- Meta aims to keep average CPA at or below the cap
- May underspend if the cap is too aggressive
- Best for: accounts with 30+ conversions/week and clear CPA targets
- Risk: severely limits delivery if cap is set too low

**ROAS Goal (Minimum ROAS)**
- Sets a minimum return on ad spend target
- Meta optimizes for conversions that meet or exceed the ROAS target
- Requires value-based optimization (purchase events with value)
- Best for: e-commerce with known margin thresholds
- Risk: limits delivery if ROAS target is too aggressive

**Bid Cap**
- Sets a hard maximum bid per auction (not an average)
- Meta will never exceed this bid in any single auction
- Most restrictive strategy -- can severely limit delivery
- Best for: brand campaigns with strict CPM targets, or when you need absolute cost control
- Risk: high risk of underspending if cap is too low

#### 3. Manual Bid

- Direct control over bid amount per auction
- Rarely used in modern Meta campaigns
- Exists primarily for API-level control in specific use cases
- Not recommended for most advertisers

### Decision Tree

```
START
  |
  v
Account has < 30 conversions/week?
  |-- YES --> Use LOWEST COST
  |           (accumulate data, let Meta learn)
  |
  |-- NO --> What is the primary goal?
              |
              |-- Volume at target CPA --> COST CAP
              |   (set cap at current CPA or 10-20% above)
              |
              |-- E-commerce ROAS --> ROAS GOAL
              |   (set target at breakeven ROAS or slightly above)
              |
              |-- Brand with CPM control --> BID CAP
              |   (set maximum you'll pay per impression/action)
              |
              |-- Maximum volume, no cap --> LOWEST COST
              |   (when budget IS the constraint)
              |
              |-- Maximize revenue --> HIGHEST VALUE
                  (requires purchase value data)
```

### Migration Path

The typical maturity path for bid strategy evolution:

```
PHASE 1: New Account (0-29 conversions/week)
  Strategy: Lowest Cost
  Goal: Accumulate conversion data, exit Learning Phase
  Duration: 2-6 weeks

PHASE 2: Data-Rich (30+ conversions/week)
  Strategy: Cost Cap (set at current average CPA)
  Goal: Maintain volume while controlling costs
  Duration: Ongoing, adjust cap quarterly

PHASE 3: Optimization (stable CPA, high volume)
  Strategy: ROAS Goal or Highest Value
  Goal: Maximize return, not just volume
  Duration: Ongoing
```

### Cost Cap Configuration Guidelines

| Scenario | Cost Cap Setting | Rationale |
|----------|-----------------|-----------|
| First time using Cost Cap | Current average CPA + 20% | Give algorithm room to learn |
| Stable performance | Current average CPA | Maintain efficiency |
| Want to scale volume | Current CPA + 10-30% | Accept higher CPA for more volume |
| Want to reduce CPA | Current CPA - 10% | Risk: may reduce delivery significantly |

### Key Behavioral Differences

| Behavior | Lowest Cost | Cost Cap | Bid Cap |
|----------|------------|----------|---------|
| Will spend full budget? | Yes | Not guaranteed | Not guaranteed |
| CPA stability | Low (fluctuates) | Medium (averages to target) | High (hard ceiling) |
| Volume | Maximum for budget | Medium | Lowest |
| Learning Phase exit | Fastest | Medium | Slowest |
| Risk of underspend | None | Medium | High |

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @performance-analyst | When evaluating campaign bid strategy effectiveness or recommending strategy changes |
| @campaign-manager | When creating new campaigns (must select appropriate bid strategy based on decision tree) |
| @budget-optimizer | When optimizing spend efficiency or diagnosing underspend/overspend patterns |
| @ad-midas | When user asks about bid strategies, why CPA is fluctuating, or how to control costs |

**Load method:** On-demand via Read tool when bid strategy decisions are needed.

**Key rule:** ALWAYS check account conversion volume before recommending a bid strategy change. The decision tree starts with "does this account have 30+ conversions/week?" -- this is the foundational gate.

## Red Flags

- NEVER recommend Cost Cap or ROAS Goal for accounts with fewer than 30 conversions per week -- insufficient data for the algorithm to optimize against a target
- NEVER set Cost Cap below current average CPA without warning about delivery reduction
- NEVER switch bid strategies during Learning Phase -- this resets learning (see `learning_phase.md`)
- NEVER use Bid Cap as the default strategy -- it's the most restrictive and causes the most underspend issues
- NEVER recommend Highest Value without confirming purchase value data is being passed via pixel/CAPI
- NEVER change bid strategy and budget simultaneously -- isolate variables to understand impact

## Sources

- Meta Business Help Center: "About bid strategies"
- Meta Business Help Center: "Choose the right bid strategy"
- Meta Ads API: Campaign bid_strategy field documentation
- mathiaschu/meta-ads-analyzer: `bid_strategies.md` reference document
- amekala/ads-mcp: Bidding Strategy Decision Tree


---

## Referência: references/data-knowledge-meta-breakdown_effect.md

# Breakdown Effect

## Summary

Meta's breakdown metrics (by age, gender, placement, device, etc.) do NOT sum to the campaign/ad set total. This is because Meta's delivery system allocates impressions differently when segmenting, and overlap between breakdown dimensions means the same conversion can appear in multiple segments. Breakdowns are diagnostic tools, not decision-making anchors.

## Deep Dive

### Why Breakdowns Don't Sum to Total

When you request a breakdown by age or gender, Meta's reporting system retroactively attributes each impression, click, or conversion to a segment. However, several factors cause discrepancies:

1. **Delivery Optimization vs. Reporting Segmentation** -- Meta's algorithm optimizes delivery holistically across all audiences. It does NOT run separate mini-campaigns per segment. When you break down by age group, you're slicing the results of a unified delivery system, not viewing independent experiments.

2. **Cross-Device Attribution** -- A user might see an ad on mobile (attributed to "Mobile" placement) and convert on desktop (attributed to "Desktop" placement). The total counts one conversion, but placement breakdowns might attribute fragments differently depending on the attribution model.

3. **Overlap Between Dimensions** -- A single impression belongs to one age group AND one gender AND one placement simultaneously. When breakdowns are requested across multiple dimensions, the interaction effects create apparent discrepancies.

4. **Statistical Sampling** -- For large accounts, Meta uses sampling for breakdown-level reporting. The sampled breakdown estimates may not perfectly reconstruct the exact total.

5. **Time Zone and Reporting Lag** -- Breakdown data may be computed at slightly different times than aggregate data, causing minor mismatches during active delivery periods.

### Practical Example

A campaign shows 100 conversions total. Breaking down by age:
- 18-24: 22 conversions
- 25-34: 35 conversions
- 35-44: 28 conversions
- 45-54: 12 conversions
- 55-64: 5 conversions
- 65+: 2 conversions
- Sum: 104 conversions

The 4-conversion discrepancy is normal. It does NOT indicate a bug or data quality issue.

### When Breakdowns ARE Useful

- Identifying which demographics respond best (directional signal)
- Spotting placement-level creative fatigue (e.g., Stories CTR declining while Feed holds)
- Understanding device distribution for creative optimization
- Informing future targeting decisions with directional data

### When Breakdowns Are DANGEROUS

- Making kill/scale decisions based on a single breakdown dimension
- Concluding "age 55+ doesn't work" from a small sample within a breakdown
- Reallocating budget based on breakdown-level CPA without considering delivery dynamics

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @performance-analyst | When analyzing campaign performance by segments, before any segment-level recommendation |
| @ad-midas | When user asks "why don't my breakdown numbers add up" or requests segment analysis |
| @creative-analyst | When evaluating placement-level creative performance |

**Load method:** On-demand via Read tool when breakdown analysis is requested.

## Red Flags

- NEVER make kill/scale decisions based solely on breakdown data
- NEVER conclude a demographic "doesn't work" from breakdown-level metrics alone
- NEVER reallocate budget between segments based purely on breakdown CPA differences
- NEVER present breakdown totals as if they should match aggregate totals -- explain the discrepancy proactively
- NEVER combine multiple breakdown dimensions (age x gender x placement) and treat the resulting micro-segments as statistically significant

## Sources

- Meta Business Help Center: "About breakdowns in Ads reporting"
- Meta Marketing API Documentation: Insights endpoint breakdown parameters
- mathiaschu/meta-ads-analyzer: `breakdown_effect.md` reference document
- Meta Ads Auction and Delivery System whitepaper (2024)


---

## Referência: references/data-knowledge-meta-core_concepts.md

# Core Concepts

## Summary

This document covers the fundamental Meta advertising concepts that all agents must understand: the campaign structure hierarchy (Campaign > Ad Set > Ad), auction mechanics, the delivery system, optimization events, attribution windows, and the Advantage+ suite. These are the building blocks upon which all other knowledge documents and agent behaviors are built.

## Deep Dive

### Campaign Structure Hierarchy

Meta uses a three-level hierarchy for organizing ads:

```
CAMPAIGN (top level)
  |-- Objective (what you want to achieve)
  |-- Budget (optional: Campaign Budget Optimization)
  |-- Bid Strategy
  |
  |-- AD SET (middle level)
  |     |-- Targeting (audiences, locations, demographics)
  |     |-- Budget (if not using CBO)
  |     |-- Schedule (start/end dates, dayparting)
  |     |-- Placements (Feed, Stories, Reels, etc.)
  |     |-- Optimization Event (what to optimize for)
  |     |
  |     |-- AD (bottom level)
  |           |-- Creative (image, video, carousel, etc.)
  |           |-- Copy (headline, primary text, description)
  |           |-- CTA button
  |           |-- Destination URL
  |
  |-- AD SET 2
        |-- (different targeting, same or different creatives)
        |-- AD 3
        |-- AD 4
```

**Key rules:**
- Each campaign has exactly ONE objective
- Ad sets within a campaign share the same objective
- Ads within an ad set share the same targeting and budget
- Creative variation happens at the Ad level
- Targeting variation happens at the Ad Set level
- Strategic decisions happen at the Campaign level

### Campaign Objectives (ODAX)

Meta uses the Outcome-Driven Ad Experiences (ODAX) framework with 6 simplified objectives:

| Objective | Use Case | Optimization Events |
|-----------|----------|---------------------|
| **Awareness** | Brand reach, video views | Reach, Impressions, ThruPlay |
| **Traffic** | Drive website/app visits | Link Clicks, Landing Page Views |
| **Engagement** | Post engagement, page likes, event responses | Post Engagement, Page Likes |
| **Leads** | Form fills, Messenger conversations | Leads, Conversations |
| **App Promotion** | App installs, app events | App Installs, App Events |
| **Sales** | Purchases, add to cart, value optimization | Purchase, Add to Cart, Initiated Checkout |

### Optimization Events

The optimization event tells Meta's algorithm what success looks like. The algorithm then optimizes delivery toward users most likely to take that action.

**Event hierarchy (higher = harder to optimize for, requires more data):**

```
Impressions (easiest, most data)
  v
Link Clicks
  v
Landing Page Views
  v
Add to Cart
  v
Initiate Checkout
  v
Purchase (hardest, requires most data)
  v
Purchase with Value (requires conversion value)
```

**Rule of thumb:** Optimize for the lowest-funnel event that your ad set can generate 50+ of per week. If you can't get 50 purchases per week, optimize for Add to Cart instead.

### Attribution Windows

Attribution windows define the time period in which a conversion is attributed to an ad view or click.

**Default attribution window (as of 2024):**
- **7-day click** -- Conversion counted if user clicked the ad within the last 7 days
- **1-day view** -- Conversion counted if user viewed (but didn't click) the ad within the last 1 day

**Available configurations:**
| Window | Type | When to Use |
|--------|------|-------------|
| 1-day click | Click | Short purchase cycles (impulse buys, low-cost items) |
| 7-day click | Click | Standard e-commerce, lead gen (DEFAULT) |
| 1-day view | View | Brand awareness, high-frequency products |
| 7-day click + 1-day view | Combined | Standard full-funnel (DEFAULT) |
| 28-day click | Click | Long purchase cycles (B2B, high-value items) -- limited availability |

**Important:** Changing the attribution window does NOT change actual campaign performance -- it changes how conversions are COUNTED and REPORTED. A shorter window will show fewer conversions; a longer window will show more.

### The Delivery System

Meta's delivery system is the engine that decides which ad to show to which user at which time. It operates through:

1. **Targeting** -- Defines the eligible user pool
2. **Auction** -- Selects the winning ad for each impression (see `ad_auctions.md`)
3. **Pacing** -- Distributes budget across time (see `pacing.md`)
4. **Learning** -- Optimizes delivery based on accumulated data (see `learning_phase.md`)

The delivery system is NOT a simple matchmaker -- it actively predicts user behavior and optimizes in real-time.

### Campaign Budget Optimization (CBO)

CBO moves budget control from the Ad Set level to the Campaign level:

**Without CBO (Ad Set Budget):**
- Each ad set has its own budget
- You control exactly how much each ad set spends
- Requires manual reallocation between ad sets

**With CBO (Campaign Budget):**
- Single budget at campaign level
- Meta automatically allocates across ad sets
- Ad sets with better performance get more budget
- Minimum/maximum spend limits can be set per ad set

**When to use CBO:**
- Multiple ad sets with similar audiences (Meta optimizes allocation)
- When you trust the algorithm to find the best performers
- When managing 3+ ad sets per campaign

**When to use Ad Set Budget:**
- Specific budget requirements per audience
- Testing scenarios requiring equal spend per ad set
- When you need precise control over segment-level investment

### Advantage+ Suite

Advantage+ is Meta's automation layer that progressively removes manual controls in favor of algorithmic optimization.

| Feature | What It Does | Manual Equivalent |
|---------|-------------|-------------------|
| **Advantage+ Placements** | Meta chooses where to show ads (Feed, Stories, Reels, etc.) | Manual placement selection |
| **Advantage+ Audience** | Meta expands targeting beyond defined audiences when beneficial | Strict audience targeting |
| **Advantage+ Creative** | Meta auto-generates creative variations (format, text, enhancements) | Manual creative variants |
| **Advantage+ Shopping Campaigns** | Fully automated e-commerce campaigns (minimal input) | Manual campaign structure |
| **Advantage+ App Campaigns** | Fully automated app install campaigns | Manual app campaign structure |

**Key consideration:** Advantage+ features reduce manual control but often improve performance for accounts with sufficient data. They are NOT recommended for new accounts with no conversion history.

### Pixel and Conversions API (CAPI)

Meta tracks user actions through two complementary systems:

**Meta Pixel (Browser-side):**
- JavaScript code on your website
- Fires events when users take actions (page view, add to cart, purchase)
- Subject to browser restrictions (ITP, ad blockers, cookie deprecation)

**Conversions API (Server-side):**
- Server-to-server event transmission
- Not affected by browser restrictions
- Requires server-side implementation
- Recommended alongside Pixel for maximum data coverage

**Best practice:** Use BOTH Pixel and CAPI with deduplication enabled. Meta deduplicates events using event_id and event_name.

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @ad-midas | Foundational context for any user interaction. Load when user is new or asks basic questions about campaign structure |
| @campaign-manager | When creating campaigns. This doc defines the structural rules that campaigns must follow |
| @performance-analyst | Reference for understanding how optimization events and attribution windows affect reported metrics |
| @creative-analyst | Understanding how the creative layer fits within the campaign hierarchy |

**Load method:** On-demand via Read tool. This is the foundational reference document -- other docs build upon these concepts.

## Red Flags

- NEVER create a campaign without a clear objective that maps to a business goal
- NEVER optimize for Purchase events if the ad set cannot generate 50+ per week -- use a higher-funnel event
- NEVER compare metrics across campaigns with different attribution windows without normalizing
- NEVER ignore the Pixel + CAPI dual setup -- browser-only tracking loses significant conversion data
- NEVER use Advantage+ Shopping Campaigns on accounts with zero conversion history -- the algorithm needs data to optimize
- NEVER set multiple optimization events within a single ad set -- each ad set has ONE optimization event

## Sources

- Meta Business Help Center: "Campaign structure"
- Meta Business Help Center: "About attribution settings"
- Meta Business Help Center: "About Advantage+ features"
- Meta Marketing API Documentation: Campaign, Ad Set, and Ad object schemas
- mathiaschu/meta-ads-analyzer: `core_concepts.md` reference document
- Meta Conversions API Documentation


---

## Referência: references/data-knowledge-meta-learning_phase.md

# Learning Phase

## Summary

When a campaign or ad set is created or significantly edited, Meta enters a Learning Phase where the delivery system explores the best audience, placements, and times for optimal results. The ad set needs approximately 50 optimization events (conversions) to exit Learning Phase. During this phase, performance is volatile, costs are higher, and any significant edit resets the counter back to zero.

## Deep Dive

### What Is Learning Phase

Meta's delivery system uses machine learning to optimize ad delivery. When an ad set starts fresh or undergoes significant changes, the algorithm lacks data about how this specific combination of targeting + creative + optimization event will perform. Learning Phase is the exploration period where Meta collects enough signal to stabilize delivery.

### Exiting Learning Phase

An ad set exits Learning Phase when it accumulates approximately **50 optimization events within a 7-day window**. The exact threshold can vary, but 50 is the documented benchmark.

- **Optimization event** = whatever you selected as the optimization goal (purchases, leads, link clicks, etc.)
- If the optimization event is rare (e.g., purchases with high AOV), exiting Learning Phase takes longer
- If the ad set cannot reach 50 events in 7 days, it enters **Learning Limited** status

### Learning Limited

Learning Limited means the ad set is unlikely to exit Learning Phase given current settings. Common causes:
- Budget too low relative to the optimization event cost
- Audience too narrow
- Too many ad sets splitting the budget
- Optimization event too rare (e.g., Purchase when most traffic is top-of-funnel)

### Triggers That RESET Learning Phase

These edits restart the learning counter from zero:

| Trigger | Threshold | Impact |
|---------|-----------|--------|
| **Budget change** | >20% increase or decrease | Full reset |
| **Targeting edit** | Any change to audiences, locations, demographics | Full reset |
| **Creative edit** | New creative, changed copy, new image/video | Full reset |
| **Optimization event change** | Switching from Clicks to Conversions, etc. | Full reset |
| **Bid strategy change** | Switching from Lowest Cost to Cost Cap, etc. | Full reset |
| **Adding new ad to ad set** | Adding a new ad creative | Full reset |
| **Pausing for 7+ days** | Extended pause period | Full reset on resume |
| **Placement edit** | Adding or removing placements | Full reset |

### What Does NOT Reset Learning

- Minor budget adjustments (<=20%)
- Changing the ad set name
- Changing the campaign name
- Updating the schedule end date (if not shortening significantly)
- Viewing or downloading reports

### Cost Implications During Learning

During Learning Phase:
- CPA is typically **20-50% higher** than post-learning steady state
- Delivery is inconsistent (spiky spend patterns)
- ROAS is artificially depressed
- These metrics should NOT be used for performance evaluation

### Recommended Budget for Exiting Learning

**Budget >= 50 x Target CPA per week per ad set**

Example: If target CPA is R$50, the ad set needs at least R$2,500/week budget to have a reasonable chance of exiting Learning Phase.

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @performance-analyst | **CRITICAL**: MUST load and check learning phase status BEFORE any kill/scale recommendation. If ad set is in Learning Phase --> BLOCK all modification recommendations |
| @campaign-manager | Before executing any campaign edit that could trigger a learning reset. Must warn about reset impact |
| @ad-midas | When user asks about volatile performance on new or recently edited campaigns |
| @budget-optimizer | Before any budget adjustment. Must calculate if change exceeds 20% threshold |

**Load method:** On-demand via Read tool. This is one of the most frequently loaded knowledge docs.

**CRITICAL RULE:** If an ad set is in Learning Phase, the only acceptable agent action is to WAIT. No budget changes, no targeting edits, no creative swaps. The sole exception is pausing a campaign that is clearly violating policy or burning budget with zero results after 2x the expected learning period.

## Red Flags

- NEVER recommend killing or scaling an ad set that is still in Learning Phase
- NEVER make budget changes >20% on an ad set that hasn't exited Learning Phase
- NEVER evaluate CPA/ROAS during Learning Phase as representative of long-term performance
- NEVER stack multiple edits (targeting + creative + budget) simultaneously -- each one resets Learning independently, compounding the damage
- NEVER recommend "just pause and restart" as a performance fix -- this resets Learning Phase entirely
- NEVER ignore Learning Limited status -- it signals a structural problem (budget too low or audience too narrow) that won't resolve by waiting

## Sources

- Meta Business Help Center: "About the learning phase"
- Meta Marketing API: Delivery status fields (LEARNING, LEARNING_LIMITED, ACTIVE)
- mathiaschu/meta-ads-analyzer: `learning_phase.md` reference document
- Meta Ads Best Practices: "How to exit the learning phase faster"


---

## Referência: references/data-knowledge-meta-pacing.md

# Pacing

## Summary

Pacing is how Meta distributes your daily or lifetime budget across the delivery period. Meta uses predictive models to spend budget optimally throughout the day, balancing between finding the cheapest opportunities and ensuring the full budget is spent. Standard delivery (the default) uses even pacing; accelerated delivery front-loads spend into the cheapest early opportunities.

## Deep Dive

### How Meta's Pacing System Works

Meta's pacing algorithm operates in real-time, constantly adjusting how aggressively your ads compete in auctions. The system balances two competing goals:

1. **Efficiency** -- Find the cheapest conversion opportunities
2. **Budget utilization** -- Spend the full daily/lifetime budget

The algorithm uses a pacing multiplier that adjusts the effective bid throughout the day:

```
Effective Bid = Base Bid x Pacing Multiplier

- Multiplier > 1.0: Bidding more aggressively (underspending, need to catch up)
- Multiplier = 1.0: On pace
- Multiplier < 1.0: Bidding less aggressively (overspending, need to slow down)
```

### Standard Delivery (Default)

Standard delivery distributes budget evenly across the day (or delivery period for lifetime budgets). The algorithm:

1. Predicts total available auction opportunities for the day
2. Calculates the ideal spend rate per hour
3. Adjusts the pacing multiplier every few minutes to stay on track
4. Enters more auctions during cheap periods, fewer during expensive periods

**Result:** Consistent delivery throughout the day. Budget is fully spent by end of day. CPA tends to be more stable.

### Accelerated Delivery

Accelerated delivery spends budget as fast as possible, entering every available auction at full bid. The algorithm:

1. Bids at maximum competitiveness from the start
2. Budget may be exhausted before end of day
3. Captures early, often cheaper auction opportunities
4. Stops delivery once budget is depleted

**Result:** Front-loaded spend. Budget may run out by midday. Useful for time-sensitive campaigns (flash sales, event promotions) but generally more expensive.

**Note:** Meta has deprecated accelerated delivery for most campaign types as of 2023. Standard delivery is now the only option for most objectives.

### Lifetime Budget Pacing

For campaigns with a lifetime budget and scheduled end date, Meta distributes budget across the entire flight:

- Spends more on days with better opportunities (lower competition)
- Spends less on days with higher competition
- Accounts for day-of-week patterns (if historical data exists)
- Ensures budget is fully spent by the end date

### Why Underspending Happens

When a campaign consistently underspends its daily budget, common causes include:

| Cause | Explanation | Fix |
|-------|-------------|-----|
| Audience too narrow | Not enough auction opportunities | Expand targeting |
| Bid too low | Losing most auctions | Increase bid or switch to Lowest Cost |
| Ad quality low | Low Total Value score | Improve creative, check relevance diagnostics |
| Budget too high | Budget exceeds available inventory for audience | Reduce budget or expand audience |
| Frequency cap reached | All users in audience have been reached at cap | Expand audience or adjust cap |
| Schedule restriction | Dayparting limits available hours | Expand delivery schedule |

### Why Overspending Happens

Meta may spend up to 25% over the daily budget on any single day, as long as the weekly average stays within the daily budget x 7. This is documented behavior, not a bug.

### Pacing and Learning Phase

During Learning Phase, pacing is less predictable because the algorithm is still learning optimal delivery patterns. Expect:
- Spiky delivery (some hours heavy, some hours near zero)
- Higher variance in daily spend
- Gradual stabilization as learning progresses

## Agent Rules

| Agent | Load Condition |
|-------|----------------|
| @performance-analyst | When investigating delivery issues (underspending, overspending, uneven distribution) |
| @budget-optimizer | When evaluating budget allocation and daily spend patterns |
| @campaign-manager | When setting up delivery schedules or responding to delivery concerns |
| @ad-midas | When user asks "why isn't my budget being spent" or "why did Meta overspend today" |

**Load method:** On-demand via Read tool when delivery/pacing issues are reported.

**Key rule:** Agents should NOT manually adjust delivery schedules unless daily budget is consistently underdelivering (spending <80% of daily budget for 3+ consecutive days). Meta's pacing system is generally better at distribution than manual overrides.

## Red Flags

- NEVER manually adjust delivery schedules as a first response to uneven spend -- investigate root cause first
- NEVER panic over a single day of 25% overspend -- this is documented Meta behavior within their weekly averaging system
- NEVER interpret Learning Phase spiky delivery as a pacing problem -- it's a learning problem
- NEVER recommend accelerated delivery for standard campaigns -- it's deprecated for most objectives and generally less efficient
- NEVER set lifetime budgets without calculating the minimum daily implied spend (lifetime / days) against the 50-conversion learning threshold
- NEVER ignore consistent underspend (<80% daily budget for 3+ days) -- it signals a structural issue with audience, bid, or creative quality

## Sources

- Meta Business Help Center: "About ad delivery pacing"
- Meta Business Help Center: "Why your ad set spent more than your daily budget"
- Meta Engineering Blog: "Pacing for online ad delivery systems" (2019)
- mathiaschu/meta-ads-analyzer: `pacing.md` reference document


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

## Referência: references/run-research-protocol.md

---
task_id: run-research-protocol
version: 1.0
category: ads_research
squad: hybrid-ads
agent: ad-midas
elicit: false
templates:
  - research-brief.md
  - strategy.md
references:
  - templates/business-profile.yaml
  - templates/product-card.yaml
  - templates/icp-profile.yaml
  - data/industry-templates/
  - data/knowledge/meta/
---

# Run Research Protocol — 5-Phase Autonomous Research

> **Type:** Autonomous task (elicit: false)
> **Version:** 1.0.0
> **Agent:** @ad-midas (concierge, executes autonomously)
> **Output:** `research-brief-{campaign_slug}.md` saved to campaign folder

---

## Overview

This task implements the 5-Phase Research Protocol. After receiving business context (slug), @ad-midas runs all phases autonomously without user interaction. The output is a populated research brief that informs campaign strategy.

**Prerequisites:**
- `{pasta}/ads/business-profile.yaml` must exist (run `setup-business-profile` first)
- At least one product card in `{pasta}/ads/products/`
- At least one ICP profile in `{pasta}/ads/icps/`

---

## Input

The task requires a single input: the business slug.

```
Usage: run-research-protocol {business_slug}
Example: run-research-protocol bilhon
```

The agent derives all context from the workspace files.

---

## Process

### Phase 1 — Load Context

**Goal:** Assemble all business data into working memory.

**Steps:**

1. Read `{pasta}/ads/business-profile.yaml`
   - Extract: company, identity, market, ad_history, assets
   - HALT if file not found: "Business profile missing. Run setup-business-profile first."

2. Read `{pasta}/ads/STRATEGY.md` (if exists)
   - Extract: active directives (PREFER/AVOID/CONSTRAINT), campaign priorities
   - If not found: note as "first campaign -- no prior strategy"

3. Read first product card from `{pasta}/ads/products/`
   - Extract: product, benefits, common_objections, social_proof
   - HALT if no product cards: "No product cards found. Run setup-business-profile first."

4. Read first ICP profile from `{pasta}/ads/icps/`
   - Extract: demographics, psychographics, primary_pain, desired_outcome
   - HALT if no ICP profiles: "No ICP profiles found. Run setup-business-profile first."

5. Load industry template from `references/industry-templates/{segment}.yaml`
   - Match business-profile.company.segment to template filename
   - If no exact match: load `generic.yaml` as fallback
   - Extract: benchmarks, recommended funnels, creative patterns

**Phase 1 Output:** Business context fully loaded in working memory.

---

### Phase 2 — Brand Website Crawl

**Goal:** Analyze the brand website to understand live positioning, products, and trust signals.

**Tool:** WebFetch

**Steps:**

1. Fetch `business-profile.company.site` (main website)
   - Extract: page title, meta description, H1s, main CTA, product listings, pricing
   - Note: trust signals (SSL, testimonials, social proof, guarantees)
   - Note: gaps (missing elements that could hurt ad performance)

2. If `product.sales_url` differs from main site: fetch that too
   - Analyze: checkout flow, urgency elements, objection handling on page
   - Note: friction points that could hurt conversion after ad click

3. Check for Facebook Pixel presence in page source
   - Look for: `fbq(`, `connect.facebook.net`, pixel ID
   - If found: note as "Pixel detected on site"
   - If not found: note as gap "No Facebook Pixel detected on landing page"

**Phase 2 Output:** Populate Section 1 (Brand Analysis) of research-brief.

---

### Phase 3 — Competitor Research

**Goal:** Analyze 3-5 competitors to understand market positioning, pricing, and ad strategies.

**Tools:** WebSearch, WebFetch

**Steps:**

1. Build competitor list from `business-profile.market.direct_competitors`
   - Use the names and sites provided during onboarding
   - If fewer than 3 competitors listed: use WebSearch to find additional competitors
     - Query: "{segment} {sub_segment} competitors Brasil" or equivalent

2. For each competitor (3-5 max):
   a. WebFetch their website
      - Extract: pricing, value proposition, main CTA, trust signals
   b. WebSearch for their Meta Ad Library presence
      - Query: "site:facebook.com/ads/library {competitor_name}"
      - Note: active ad count, dominant formats, creative angles, duration running
   c. WebSearch for reviews/reputation
      - Query: "{competitor_name} reclame aqui" or "{competitor_name} reviews"
      - Note: rating, common complaints, strengths mentioned

3. Synthesize competitor insights:
   - Most common creative format across competitors
   - Dominant messaging pattern (pain-focused / result-focused / authority-focused)
   - Pricing range across market
   - Gaps: what NO competitor is doing or communicating

**Phase 3 Output:** Populate Section 2 (Competitive Landscape) of research-brief.

---

### Phase 4 — Differentiation Mapping

**Goal:** Identify unique angles and underserved opportunities based on Phase 1-3 data.

**Tool:** Analysis (no external tools -- pure reasoning from collected data)

**Steps:**

1. Compare business strengths (from business-profile + product-card) against competitor weaknesses (from Phase 3)
   - What does THIS business offer that competitors DON'T?
   - What does THIS business communicate that competitors IGNORE?

2. Identify underserved audience segments
   - Cross-reference ICP with competitor targeting patterns
   - Find segments that competitors serve poorly or not at all

3. Map unexplored creative angles
   - Angles present in the business data but absent from competitor ads
   - Format gaps (e.g., competitors all use static images, video is unexplored)
   - Messaging gaps (e.g., competitors focus on features, nobody addresses emotional pain)

4. Rank opportunities by potential impact
   - High: unique + underserved + clear proof available
   - Medium: partially unique + some proof
   - Low: common but better executed

**Phase 4 Output:** Populate Section 3 (Differentiation Map) of research-brief.

---

### Phase 5 — Ad Intelligence

**Goal:** Pull existing performance data OR establish industry benchmarks.

**Conditional logic based on `business-profile.ad_history.has_advertised`:**

#### Path A: Business HAS ad history (has_advertised = true)

**Tool:** MCP (get_insights via Pipeboard, if platform-status.yaml shows OK)

1. If `platform-status.yaml` exists and meta.status = OK:
   - Call `get_insights` for account-level data (last 90 days)
   - Extract: total spend, avg CPA, ROAS, CTR, CPM, top campaigns
   - Identify: best performing campaign (lowest CPA or highest ROAS)
   - Identify: worst performing campaign (highest CPA or lowest ROAS)
   - Extract: winning creative patterns (what worked)
   - Extract: failed creative patterns (what didn't)

2. If MCP not available or no data returned:
   - Fall back to Path B (industry benchmarks)
   - Note: "Historical data requested but MCP unavailable -- using industry benchmarks as fallback"

#### Path B: Business has NO ad history (has_advertised = false)

**Tool:** Industry template from Phase 1

1. Load benchmarks from the matched industry template
   - Extract: CPA range, ROAS range, CTR range, CPM range, conversion rate
   - Note source as "Industry benchmark -- {template_name}"

2. If `generic.yaml` was used: add note "Cross-industry averages -- refine after first campaign data"

**Phase 5 Output:** Populate Section 4 (Ad Intelligence) of research-brief.

---

## Post-Processing

After all 5 phases complete:

1. **Populate Section 5** (Research Summary and Recommendations)
   - Top 3 opportunities (from Phase 4 ranking)
   - Top 3 risks (from all phases -- gaps, competitor strengths, tracking issues)
   - Recommended first campaign (objective, funnel, primary angle, budget based on benchmarks + margin)

2. **Validate completeness**
   - Every section of research-brief must have at least 1 data point
   - If any section is empty: mark as "Insufficient data -- {reason}" (do NOT leave blank)

3. **Save output**
   - File: `research-brief-{campaign_slug}.md` (use product slug as campaign slug for first campaign)
   - Path: `{pasta}/ads/research/`
   - Create directory if it doesn't exist

4. **Initialize STRATEGY.md** (if it doesn't exist)
   - Copy template from `references/strategy.md`
   - Populate header fields (business, date)
   - Add CONSTRAINT entries from `config/safety-rules.yaml` defaults
   - Add first PREFER directives based on research findings
   - Save to `{pasta}/ads/STRATEGY.md`

---

## Output

| File | Path | Condition |
|------|------|-----------|
| Research Brief | `{pasta}/ads/research/research-brief-{campaign_slug}.md` | Always created |
| STRATEGY.md | `{pasta}/ads/STRATEGY.md` | Created only if it doesn't exist |

---

## Error Handling

| Error | Action |
|-------|--------|
| Business profile not found | HALT -- "Run setup-business-profile first" |
| No product cards found | HALT -- "Run setup-business-profile first (Phase 2)" |
| No ICP profiles found | HALT -- "Run setup-business-profile first (Phase 3)" |
| WebFetch fails on brand site | Log warning, skip Phase 2 site analysis, continue with profile data |
| WebSearch returns no results | Log warning, reduce competitor count, continue |
| WebFetch fails on competitor site | Skip that competitor, continue with others (min 2 competitors for valid analysis) |
| MCP not available for Phase 5 | Fall back to industry benchmarks (Path B) |
| Industry template not found | Use generic.yaml -- always available as fallback |
| Fewer than 2 competitors analyzed | Log warning in research brief, reduce confidence of competitive analysis |

---

## Timing Expectations

| Phase | Estimated Duration | Notes |
|-------|-------------------|-------|
| Phase 1 (Load) | < 5 seconds | Local file reads only |
| Phase 2 (Crawl) | 15-30 seconds | 1-2 WebFetch calls |
| Phase 3 (Research) | 60-120 seconds | Multiple WebSearch + WebFetch |
| Phase 4 (Mapping) | < 10 seconds | Pure analysis, no external calls |
| Phase 5 (Intel) | 10-30 seconds | 1 MCP call or template read |
| **Total** | **~2-4 minutes** | |

---

_Task: run-research-protocol v1.0 | @ad-midas_


---

## Referência: templates/business-profile.yaml

# Business Profile Template — Hybrid Ads Squad
# Company DNA. Filled during onboarding (setup-business-profile, elicit: true).
# Saved to: {pasta}/ads/business-profile.yaml
#
# Story: SAIOX-ADS-V5-2.4 (AC1)
# Created: 2026-03-17
# Updated: 2026-03-19 (taxonomy: PT → EN)
# Sources:
#   - Roundtable P0 #3: Conversational setup (elicit: true)
#   - Roundtable P0 #4: Concierge model (@ad-midas)
#   - Squad Agnosticism: generic template, data in workspace/

version: "1.0.0"
template: business-profile
filled_by: "@ad-midas"  # Concierge collects via conversation during onboarding
used_by: ["@ad-midas", "@creative-analyst", "@performance-analyst", "@fiscal"]

# ═══════════════════════════════════════════════════════════════
# COMPANY
# ═══════════════════════════════════════════════════════════════

company:
  name: ""                      # required
  slug: ""                      # required — used as path key (e.g., {pasta}/)
  segment: ""                   # required — e.g., "SaaS", "E-commerce", "Info Product", "Local Service"
  sub_segment: ""               # optional — e.g., "CRM for dentists", "Plus-size women fashion"
  site: ""                      # required — main URL
  tax_id: ""                    # optional — used for compliance and BM verification

# ═══════════════════════════════════════════════════════════════
# IDENTITY
# ═══════════════════════════════════════════════════════════════

identity:
  manifesto: ""                 # optional — brand purpose statement
  mission: ""                   # required
  vision: ""                    # optional
  value_proposition: ""         # required — core promise in 1-2 sentences
  differentiator: ""            # required — what separates from competitors
  tone_of_voice: ""             # required — e.g., "Professional and accessible", "Bold and provocative"
  keywords: []                  # required — 5-10 keywords that define the brand
  # Example:
  # keywords:
  #   - "automation"
  #   - "results"
  #   - "predictability"

# ═══════════════════════════════════════════════════════════════
# MARKET
# ═══════════════════════════════════════════════════════════════

market:
  direct_competitors: []        # required (min 1) — compete for the same audience
  # Example:
  # direct_competitors:
  #   - name: "Competitor A"
  #     site: "https://competitor-a.com"
  #     differentiator: "Lower price"
  #   - name: "Competitor B"
  #     site: "https://competitor-b.com"
  #     differentiator: "Stronger brand"

  indirect_competitors: []      # optional — compete for attention/budget of the same ICP
  # Example:
  # indirect_competitors:
  #   - name: "Alternative Y"
  #     relation: "Solves the same problem with a different approach"

  positioning: ""               # required — how the company positions vs market
  # Example: "Premium with humanized support" or "Low-cost with automation"

# ═══════════════════════════════════════════════════════════════
# DIGITAL PRESENCE
# ═══════════════════════════════════════════════════════════════

digital_presence:
  instagram: ""                 # optional — URL or @handle
  facebook: ""                  # optional — page URL
  youtube: ""                   # optional — channel URL
  tiktok: ""                    # optional — URL or @handle
  linkedin: ""                  # optional — company page URL
  site: ""                      # optional — if different from company.site (e.g., landing page)
  blog: ""                      # optional — blog URL

# ═══════════════════════════════════════════════════════════════
# AD HISTORY
# ═══════════════════════════════════════════════════════════════

ad_history:
  has_advertised: false         # required — boolean
  platforms: []                 # required if has_advertised=true — e.g., ["Meta", "Google", "TikTok"]
  monthly_budget: ""            # optional — e.g., "R$5,000", "R$50,000+"
  best_campaign: ""             # optional — brief description of what worked
  worst_campaign: ""            # optional — brief description of what failed and why

# ═══════════════════════════════════════════════════════════════
# AVAILABLE ASSETS
# ═══════════════════════════════════════════════════════════════

assets:
  product_photos: false         # required — has professional photos?
  videos: false                 # required — has product/testimonial videos?
  testimonials: false           # required — has customer testimonials?
  ugc: false                    # optional — has user-generated content?
  brand_guidelines: false       # optional — has brand manual?
  logo: false                   # required — has high-resolution logo?

# ═══════════════════════════════════════════════════════════════
# FIELD REQUIREMENTS SUMMARY
# ═══════════════════════════════════════════════════════════════
# REQUIRED: company.name, company.slug, company.segment, company.site,
#           identity.mission, identity.value_proposition, identity.differentiator,
#           identity.tone_of_voice, identity.keywords,
#           market.direct_competitors (min 1), market.positioning,
#           ad_history.has_advertised,
#           assets.product_photos, assets.videos, assets.testimonials, assets.logo
#
# OPTIONAL: company.sub_segment, company.tax_id,
#           identity.manifesto, identity.vision,
#           market.indirect_competitors,
#           digital_presence.* (all fields),
#           ad_history.platforms (required if has_advertised=true),
#           ad_history.monthly_budget, ad_history.best_campaign, ad_history.worst_campaign,
#           assets.ugc, assets.brand_guidelines


---

## Referência: templates/icp-profile.yaml

# ICP Profile Template — Hybrid Ads Squad
# Ideal Customer Profile. One profile per audience segment.
# Saved to: {pasta}/ads/icps/{icp_slug}.yaml
#
# Story: SAIOX-ADS-V5-2.4 (AC3)
# Created: 2026-03-17
# Updated: 2026-03-19 (taxonomy: PT → EN)
# Sources:
#   - Roundtable P0 #3: Conversational setup (elicit: true)
#   - Creative brief existing template (Section 2: Target Audience)

version: "1.0.0"
template: icp-profile
filled_by: "@ad-midas"  # Concierge collects during onboarding
used_by: ["@ad-midas", "@creative-analyst", "@performance-analyst", "@campaign-manager"]

# ═══════════════════════════════════════════════════════════════
# IDENTIFICATION
# ═══════════════════════════════════════════════════════════════

name: ""                        # required — descriptive ICP name (e.g., "Beginner e-commerce owner")
slug: ""                        # required — unique key (e.g., "ecom-beginner")

# ═══════════════════════════════════════════════════════════════
# DEMOGRAPHICS
# ═══════════════════════════════════════════════════════════════

demographics:
  gender: ""                    # required — e.g., "Male", "Female", "All"
  age_range: ""                 # required — e.g., "25-45"
  social_class: ""              # required — e.g., "B1-B2", "A-B", "C1-C2"
  location: ""                  # required — e.g., "Brazil - major cities", "SP + RJ", "National"

# ═══════════════════════════════════════════════════════════════
# PSYCHOGRAPHICS
# ═══════════════════════════════════════════════════════════════

psychographics:
  interests: []                 # required (min 3) — used for targeting
  # Example:
  # interests:
  #   - "Digital marketing"
  #   - "Entrepreneurship"
  #   - "E-commerce"
  #   - "Shopify"

  digital_behavior:
    platforms: []               # required (min 1) — where the ICP spends time
    # Example: ["Instagram", "YouTube", "LinkedIn"]

    content_consumption: ""     # required — type of content consumed
    # Example: "Short tip videos, business podcasts, educational carousels"

# ═══════════════════════════════════════════════════════════════
# PAIN, DESIRE & TICKET
# ═══════════════════════════════════════════════════════════════

primary_pain: ""                # required — the #1 pain the product solves
# Example: "Spends on ads but has no measurable return"

desired_outcome: ""             # required — what the ICP wants to achieve
# Example: "Have a predictable client acquisition system via ads"

market_average_ticket: ""       # required — how much the ICP spends on similar solutions
# Example: "R$200-500/month"

# ═══════════════════════════════════════════════════════════════
# FIELD REQUIREMENTS SUMMARY
# ═══════════════════════════════════════════════════════════════
# REQUIRED: name, slug,
#           demographics.gender, demographics.age_range, demographics.social_class, demographics.location,
#           psychographics.interests (min 3),
#           psychographics.digital_behavior.platforms (min 1),
#           psychographics.digital_behavior.content_consumption,
#           primary_pain, desired_outcome, market_average_ticket
#
# OPTIONAL: (none — all fields are required for a functional ICP)


---

## Referência: templates/product-card.yaml

# Product Card Template — Hybrid Ads Squad
# Product/service card. One card per advertised product.
# Saved to: {pasta}/ads/products/{product_slug}.yaml
#
# Story: SAIOX-ADS-V5-2.4 (AC2)
# Created: 2026-03-17
# Updated: 2026-03-19 (taxonomy: PT → EN)
# Sources:
#   - Roundtable P0 #3: Conversational setup (elicit: true)
#   - Creative brief existing template (templates/creative-brief.md)

version: "1.0.0"
template: product-card
filled_by: "@ad-midas"  # Concierge collects during onboarding or briefing
used_by: ["@ad-midas", "@creative-analyst", "@performance-analyst"]

# ═══════════════════════════════════════════════════════════════
# PRODUCT
# ═══════════════════════════════════════════════════════════════

product:
  name: ""                      # required
  slug: ""                      # required — unique key (e.g., "meta-ads-pro-course")
  short_description: ""         # required — 1-2 sentences, used in ads
  price: ""                     # required — e.g., "R$497", "R$97/month"
  gross_margin: ""              # required — e.g., "70%", "R$350" (informs target CPA)
  sales_url: ""                 # required — sales/checkout page URL

# ═══════════════════════════════════════════════════════════════
# BENEFITS (top 3)
# ═══════════════════════════════════════════════════════════════

benefits:                       # required — exactly 3, used in copy and hooks
  - ""  # Benefit #1 — strongest, appears in headlines
  - ""  # Benefit #2
  - ""  # Benefit #3

# ═══════════════════════════════════════════════════════════════
# COMMON OBJECTIONS (top 3)
# ═══════════════════════════════════════════════════════════════

common_objections:              # required — exactly 3, used for objection copy
  - ""  # Objection #1 — most frequent
  - ""  # Objection #2
  - ""  # Objection #3

# ═══════════════════════════════════════════════════════════════
# SOCIAL PROOF
# ═══════════════════════════════════════════════════════════════

social_proof:
  ratings: ""                   # optional — e.g., "4.8/5 on Google", "4.9 on Trustpilot"
  total_sales: ""               # optional — e.g., "+5,000 students", "+1,200 clients"
  testimonials_available: 0     # optional — number of testimonials ready for ads

# ═══════════════════════════════════════════════════════════════
# MARKET PRICE RANGE
# ═══════════════════════════════════════════════════════════════

market_price_range:
  min: ""                       # optional — lowest market price for similar product
  max: ""                       # optional — highest market price

# ═══════════════════════════════════════════════════════════════
# FIELD REQUIREMENTS SUMMARY
# ═══════════════════════════════════════════════════════════════
# REQUIRED: product.name, product.slug, product.short_description, product.price,
#           product.gross_margin, product.sales_url,
#           benefits (3 items), common_objections (3 items)
#
# OPTIONAL: social_proof.*, market_price_range.*


---

## Referência: templates/research-brief.md

# Research Brief — 5-Phase Research Output

> **Purpose:** Consolidated output of the 5-Phase Research Protocol.
> Executed BEFORE campaign-briefing Phase 2.
> Agents consult this before making auto_decide decisions.

---

## Template Info

| Field | Value |
|-------|-------|
| **Business** | {business_slug} |
| **Product** | {product_slug} |
| **Researcher** | @ad-midas |
| **Date** | {date} |
| **Status** | pending / complete |

**Path:** `{pasta}/ads/research/research-brief-{campaign_slug}.md`

**Story:** SAIOX-ADS-V5-2.4 (AC8)

---

## 1. Brand Analysis

| Field | Value |
|-------|-------|
| **Site URL** | |
| **Products Found** | |
| **Main CTA** | |
| **Value Prop** | |
| **Trust Signals** | |
| **Gaps** | |

### Products Found

1. {product_name} -- {price} -- {brief description}

### Trust Signals

- {Example: SSL certificate active}
- {Example: Reclame Aqui rating 8.5}
- {Example: +5.000 clientes displayed on homepage}

### Gaps Identified

- {Example: No testimonials on landing page}
- {Example: Missing CAPI/Pixel implementation}
- {Example: Checkout page has no urgency elements}

---

## 2. Competitive Landscape

### Competitors

| # | Name | Pricing | Messaging | Ad Library Summary |
|---|------|---------|-----------|-------------------|
| 1 | {competitor} | {price range} | {core message/angle} | {active ads count, formats used, main hooks} |
| 2 | {competitor} | {price range} | {core message/angle} | {active ads count, formats used, main hooks} |
| 3 | {competitor} | {price range} | {core message/angle} | {active ads count, formats used, main hooks} |

### Competitor Insights

- **Most common format:** {video/image/carousel}
- **Average ad lifespan:** {days running}
- **Dominant platform:** {Meta/Google/TikTok}
- **Messaging patterns:** {pain-focused / result-focused / authority-focused}

---

## 3. Differentiation Map

### Unique to This Business

- {What competitors DON'T offer or DON'T communicate}

### Underserved Audience

- {Audience segment that competitors ignore or serve poorly}

### Unexplored Angles

- {Creative or messaging angles not present in competitor ads}
- {Positioning gaps in the market}

---

## 4. Ad Intelligence

### Existing Campaigns Summary

> Fill this section if the business has previous ad history (ad_history.has_advertised = true).

| Field | Value |
|-------|-------|
| **Total campaigns analyzed** | |
| **Best performing** | {campaign name, CPA, ROAS} |
| **Worst performing** | {campaign name, reason} |
| **Winning creatives** | {description of top performers} |
| **Failed creatives** | {description of what didn't work} |
| **Key learnings** | |

### Industry Benchmark

> Fill this section if the business has NO previous ad history. Use market data.

| Metric | Benchmark Range | Source |
|--------|----------------|--------|
| CPA | {range} | {source} |
| ROAS | {range} | {source} |
| CTR | {range} | {source} |
| CPM | {range} | {source} |
| Conversion Rate | {range} | {source} |

---

## 5. Research Summary and Recommendations

### Top 3 Opportunities

1. {Opportunity based on research findings}
2. {Opportunity based on differentiation/gaps}
3. {Opportunity based on competitor weakness}

### Top 3 Risks

1. {Risk identified during research}
2. {Risk from competitive analysis}
3. {Risk from brand/tracking gaps}

### Recommended First Campaign

- **Objective:** {CONVERSIONS/LEADS/TRAFFIC}
- **Funnel:** {Direct/Lead Magnet/VSL}
- **Primary angle:** {based on differentiation map}
- **Budget recommendation:** {based on benchmarks and margin}

---

_Template: Research Brief (5-Phase Protocol) | @ad-midas_


---

## Referência: templates/strategy.md

# STRATEGY.md — Campaign Strategy Directives

> **INSTRUCTIONS FOR AGENTS:** Read this file FIRST before any campaign action.
> This is the single source of truth for strategic direction.
> Updated by @ad-midas. Consulted by ALL agents before decisions.

---

## Template Info

| Campo | Valor |
|-------|-------|
| **Business** | {empresa_slug} |
| **Created** | {date} |
| **Last Updated** | {date} |
| **Updated By** | @ad-midas |

**Path:** `{pasta}/ads/STRATEGY.md`

**Story:** SAIOX-ADS-V5-2.4 (AC5)

---

## Active Directives

### PREFER

Directives that agents SHOULD follow when making decisions. Use these as defaults unless data contradicts.

| # | Directive | Rationale | Added |
|---|-----------|-----------|-------|
| 1 | {Example: PREFER video over static for cold traffic} | {Higher engagement in this niche} | {date} |

### AVOID

Patterns, strategies, or actions that have been tested and failed, or carry unacceptable risk.

| # | Directive | Rationale | Added |
|---|-----------|-----------|-------|
| 1 | {Example: AVOID broad targeting on accounts < 90 days} | {Triggers Meta moderation AI} | {date} |

### CONSTRAINT

Hard limits that agents MUST NOT violate. Override PREFER if conflict exists.

| # | Constraint | Source | Added |
|---|------------|--------|-------|
| 1 | Max budget increase: +20%/day | safety-rules.yaml | {date} |
| 2 | All campaigns created PAUSED | safety-rules.yaml | {date} |
| 3 | WAL entry required before any API write | safety-rules.yaml | {date} |

---

## Decision Log

Chronological record of strategic decisions. Append-only -- never delete entries.

| Date | Decision | Agent | Rationale |
|------|----------|-------|-----------|
| {date} | {Example: Switch from ABO to CBO} | @ad-midas | {Example: Account matured past 90 days, 5+ adsets performing well} |

---

## Campaign Priorities

Current priority order for active campaigns. Updated weekly by @ad-midas.

| Priority | Campaign | Objective | Status |
|----------|----------|-----------|--------|
| P1 | {campaign_slug} | {objetivo} | {active/paused/learning} |

---

## Notes

> Additional strategic context that doesn't fit the structured sections above.
> Keep concise. If it grows past 10 lines, create a dedicated doc.

---

_Template: STRATEGY.md (ads-mcp pattern) | @ad-midas_
