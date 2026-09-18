# sop-extrair · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `sop-extrair.md` uma skill chamada sop-extrair. Quando eu pedir algo como "extrai o SOP de [processo]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# O PROCESSO · De descrição, documento, vídeo ou entrevista para um SOP rascunho

O processo existe na cabeça de quem faz. Esta skill tira de lá: entrevista estruturada em cinco fases, extração de documento ou de transcrição de vídeo, e separa o que foi observado do que foi inferido, com confiança por passo. Sai um SOP rascunho pronto para virar padrão.

## When to Use

- Diga: "extrai o SOP de [processo]" e aponte a fonte (texto, arquivo, transcrição) ou peça a entrevista.
- NÃO use para escrever ou auditar o SOP: isso é `sop-criar` e `sop-auditar`.

## Quick Reference

| procedimento | referência |
|---|---|
| extract sop | `references/extract-sop.md` |
| structured interview | `references/structured-interview.md` |
| extract from video | `references/extract-from-video.md` |

| apoio | arquivo |
|---|---|
| template | `templates/extraction-output-template.md` |
| rubrica/dado | `references/data-category-map.yaml` |
| rubrica/dado | `references/data-confidence-levels.yaml` |
| checklist | `references/checklist-extraction-completeness-checklist.md` |

## Procedure

1. Identifique o procedimento pela tabela. Abra a referência e leia `Inputs` e `Prerequisites`; colete do usuário o que for `required` e pergunte o que faltar.
2. Siga as fases da referência na ordem. Onde ela citar um arquivo de apoio desta skill (listados no fim), abra-o; onde citar script `.cjs`/`.py` do runtime de origem, faça a etapa manualmente e diga que fez.
3. Marque cada passo extraído com o nível de confiança de `references/data-confidence-levels.yaml`: observado, declarado ou inferido.
4. Rode o checklist correspondente (arquivos de apoio que começam com checklist-) sobre o resultado. Corrija o que falhou.
5. Entregue no formato do template de saída, com o checklist marcado item a item.

## Pitfalls

- Registrar como observado o que foi só declarado. A confiança por passo é o produto; sem ela o SOP mente.
- Pular `Prerequisites`. A referência pede acesso ao dono do processo por um motivo.
- Tratar script do runtime de origem como executável aqui. Faça a etapa e registre.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O artefato final segue o template de saída desta skill, seção por seção.
2. Todo passo tem nível de confiança e fonte (quem disse, o que foi visto).
3. O checklist correspondente aparece na entrega com cada item marcado, sem item falho.
4. Há uma lista de perguntas abertas para o dono do processo.
5. A resposta nomeia a referência usada.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/checklist-extraction-completeness-checklist.md`
- `references/data-category-map.yaml`
- `references/data-confidence-levels.yaml`
- `references/extract-from-video.md`
- `references/extract-sop.md`
- `references/structured-interview.md`
- `templates/extraction-output-template.md`


---

## Referência: references/checklist-extraction-completeness-checklist.md

# Extraction Completeness Checklist

> **Purpose:** Verify that a process extraction by @sop-extractor captured all required sections before handoff to @sop-creator or @sop-ml-architect. This is the quality gate between EXTRACTION and CREATION stages.
>
> **Scoring:** All 10 sections must be present. Items below the verification threshold (`0.8`) are flagged in the Gaps section, while average handoff readiness is evaluated at `0.7`.
> - **10/10 sections present:** Ready for handoff
> - **8-9 sections:** Handoff with gaps documented
> - **<8 sections:** Return to extraction -- incomplete

| Field | Value |
|---|---|
| **Checklist ID** | QC-EXTRACT-001 |
| **Purpose** | Verify extraction output completeness before handoff |
| **Process Extracted** | ________________________ |
| **Extraction Method** | Description / Document / Interview / Observation / Logs / Tribal |
| **Extractor** | ________________________ |
| **Extraction Date** | ________________________ |
| **Total Sections** | 10 |

---

## Section Verification

| # | Section | Present | Min Items | Confidence Contract Applied | Notes |
|---|---------|:-------:|:---------:|:---------------------------:|-------|
| 1 | **Process Summary** — Name, purpose, frequency, criticality | [ ] | 4 fields | [ ] | |
| 2 | **Actors & Systems** — Who and what is involved, with roles | [ ] | 1 actor | [ ] | |
| 3 | **Step Sequence** — Numbered steps with confidence scores | [ ] | 3 steps | [ ] | |
| 4 | **Decision Points** — Branching logic with conditions | [ ] | 0 (may not apply) | [ ] | |
| 5 | **Exceptions & Edge Cases** — Known failure modes and workarounds | [ ] | 1 exception | [ ] | |
| 6 | **Tools & Systems** — Required software, hardware, access | [ ] | 1 tool | [ ] | |
| 7 | **Timing Data** — Duration estimates per step (where available) | [ ] | 0 (best effort) | [ ] | |
| 8 | **Gaps & Verification Needed** — Items below confidence threshold | [ ] | 0 (may be empty) | N/A | |
| 9 | **Conflicts** — Contradictory information with sources noted | [ ] | 0 (may be empty) | N/A | |
| 10 | **Source Provenance** — Where each fact came from | [ ] | 1 source | [ ] | |

---

## Confidence Distribution

| Level | Icon | Score | Count | % of Steps |
|-------|:----:|:-----:|:-----:|:----------:|
| Observed | [OBS] | 1.0 | _____ | _____% |
| Documented | [DOC] | 0.9 | _____ | _____% |
| Reported | [REP] | 0.8 | _____ | _____% |
| Corroborated | [COR] | 0.7 | _____ | _____% |
| Inferred | [INF] | 0.5 | _____ | _____% |
| Assumed | [ASM] | 0.3 | _____ | _____% |
| Unknown | [UNK] | 0.1 | _____ | _____% |

**Average Confidence:** _____

> **Rules:** If average confidence is below `0.7`, or if more than `30%` of steps are below `0.8`, recommend additional extraction before handoff.

---

## Handoff Readiness

| Check | Pass | Fail |
|-------|:----:|:----:|
| All 10 sections present (or justified N/A) | [ ] | [ ] |
| Average confidence is at least 0.7 | [ ] | [ ] |
| Every item below 0.8 is listed in Gaps & Verification Needed | [ ] | [ ] |
| All conflicts have both sources documented | [ ] | [ ] |
| Gaps section explicitly lists what needs verification | [ ] | [ ] |
| Target format identified (human-readable / ML / both) | [ ] | [ ] |

**Handoff Decision:**
- [ ] **READY** — Proceed to @sop-creator or @sop-ml-architect
- [ ] **READY WITH GAPS** — Proceed, but gaps must be resolved during creation
- [ ] **INCOMPLETE** — Return to extraction for additional pass

**Extractor Signature:** _________________________ **Date:** _______________

---

*Extraction Completeness Checklist v1.0. Based on Taiichi Ohno's Gemba methodology.*
*Checklist: extraction-completeness-checklist.md | SOP Factory | Synkra Hybrid*


---

## Referência: references/data-category-map.yaml

# =============================================================================
# SOP Category Map — SOP Chief Knowledge Base
# =============================================================================
# Static knowledge base mapping minimum SOPs every business type needs.
# Structured in 3 layers:
#   1. Universal — every business needs these
#   2. By Industry — vertical-specific (compliance, delivery, expertise)
#   3. By Business Model — monetization-specific (sales, delivery, retention)
#
# Source: {pasta}/*/company/company-profile.yaml
# Consumed by: sop-chief (SOP creation routing)
# Update frequency: rare — only when new industries/models enter workspace
#
# NOTE: Some SOPs have Brazil-specific context (NF-e, ANVISA, LGPD, CVM).
# When generating SOPs for international businesses, adapt regulatory
# references to local equivalents (FDA, GDPR, SEC, etc.).
# =============================================================================

version: "1.0.0"
generated_from: "industry and business model research"
last_updated: "2026-03-18"

# =============================================================================
# LAYER 1: UNIVERSAL SOPs
# Every business, regardless of industry or model, needs these.
# These are "dumb processes" — should be invisible and automated.
# =============================================================================

universal_sops:
  description: >
    SOPs every business must have documented. Administrative, financial, and
    basic operational processes. Dominant executor: Worker.
    Default priority: P1 (quick wins — hours to synchronize).

  financial:
    - id: SOP-UNIV-FIN-01
      name: "Invoice Issuance"
      description: "Issue invoices for products/services sold"
      executor: Worker
      complexity: low
      frequency: "per transaction"
      br_context: "NF-e via SEFAZ. Requires digital certificate (e-CNPJ)."

    - id: SOP-UNIV-FIN-02
      name: "Accounts Payable"
      description: "Track and process payments to suppliers, freelancers, and services"
      executor: Worker
      complexity: low
      frequency: weekly

    - id: SOP-UNIV-FIN-03
      name: "Accounts Receivable"
      description: "Track incoming payments, dunning, and delinquency management"
      executor: Worker/Agent
      complexity: low
      frequency: daily

    - id: SOP-UNIV-FIN-04
      name: "Bank Reconciliation"
      description: "Match bank statements against financial system records"
      executor: Worker
      complexity: low
      frequency: weekly

  sales:
    - id: SOP-UNIV-COM-01
      name: "Inbound Lead Qualification"
      description: "Classify and score leads from forms, WhatsApp, email, ads"
      executor: Worker/Agent
      complexity: low-medium
      frequency: "per lead"

    - id: SOP-UNIV-COM-02
      name: "Sales Follow-up Cadence"
      description: "Structured sequence of touchpoints after initial interest"
      executor: Worker/Agent
      complexity: low
      frequency: daily

    - id: SOP-UNIV-COM-03
      name: "CRM Deal Registration"
      description: "Record closed deal data in CRM with all required fields"
      executor: Worker
      complexity: low
      frequency: "per sale"

  people:
    - id: SOP-UNIV-PES-01
      name: "New Employee Onboarding"
      description: "Integration checklist: access provisioning, tools, culture, initial training"
      executor: Hybrid
      complexity: medium
      frequency: "per hire"

    - id: SOP-UNIV-PES-02
      name: "Employee Offboarding"
      description: "Revoke access, transfer responsibilities, exit interview"
      executor: Hybrid
      complexity: medium
      frequency: "per departure"

    - id: SOP-UNIV-PES-03
      name: "Time Off & Absence Management"
      description: "Request, approval, and tracking of vacations, leaves, absences"
      executor: Worker
      complexity: low
      frequency: monthly

  operations:
    - id: SOP-UNIV-OPS-01
      name: "Data Backup"
      description: "Routine backup of critical systems (cloud storage, databases, code)"
      executor: Worker
      complexity: low
      frequency: daily/weekly

    - id: SOP-UNIV-OPS-02
      name: "Access & Credential Management"
      description: "Provisioning, rotation, and revocation of tool/system access"
      executor: Worker
      complexity: low
      frequency: "per event"

    - id: SOP-UNIV-OPS-03
      name: "Periodic KPI Reporting"
      description: "Generate and distribute KPI dashboards to management"
      executor: Worker/Agent
      complexity: low
      frequency: weekly/monthly

  support:
    - id: SOP-UNIV-ATD-01
      name: "Tier 1 Support Triage"
      description: "First-contact support: classify, answer FAQs, escalate if needed"
      executor: Agent
      complexity: medium
      frequency: "per ticket"

    - id: SOP-UNIV-ATD-02
      name: "Complaint Management"
      description: "Receive, log, route, and track resolution of complaints"
      executor: Hybrid
      complexity: medium
      frequency: "per complaint"

  marketing:
    - id: SOP-UNIV-MKT-01
      name: "Social Media Content Publishing"
      description: "Schedule and publish posts across platforms (Instagram, LinkedIn, YouTube, etc.)"
      executor: Worker
      complexity: low
      frequency: daily

    - id: SOP-UNIV-MKT-02
      name: "Email Marketing Operations"
      description: "Send newsletters, manage automations, segment lists"
      executor: Worker/Agent
      complexity: low-medium
      frequency: weekly

  legal:
    - id: SOP-UNIV-JUR-01
      name: "Contract Management"
      description: "Draft, review, sign, and archive contracts"
      executor: Hybrid
      complexity: medium
      frequency: "per contract"

    - id: SOP-UNIV-JUR-02
      name: "Data Privacy Compliance"
      description: "Consent management, privacy policy, data subject requests"
      executor: Hybrid
      complexity: medium
      frequency: ongoing
      br_context: "LGPD (Lei Geral de Proteção de Dados). International: GDPR, CCPA."

# =============================================================================
# LAYER 2: INDUSTRY SOPs
# Vertical-specific. Define compliance, delivery, and domain expertise
# the business needs BECAUSE of the market it operates in.
# =============================================================================

industry_sops:
  description: >
    Industry-specific SOPs. The vertical determines compliance requirements,
    delivery type, and required expertise. Dominant executor: mix of all 4.
    Priority: P0 (core processes — weeks to months to synchronize).

  healthcare:
    id: IND-HEALTHCARE
    name: "Healthcare"
    description: "Medical equipment, telemedicine, supplements, dentistry, therapies"
    examples: "clinics, medtech B2B, supplement brands, therapy practices"
    sops:
      - id: SOP-IND-HEALTH-01
        name: "Regulatory Compliance"
        description: "Maintain conformity with applicable health regulatory bodies"
        why: "Mandatory by law. No compliance = no operation."
        executor: Hybrid
        complexity: high
        br_context: "ANVISA, CRO, CRM, CFO. US: FDA, FTC."

      - id: SOP-IND-HEALTH-02
        name: "Health Product Inventory Control"
        description: "Traceability, expiration dates, lot numbers, proper storage"
        why: "Regulatory + operational. Expired product = legal risk."
        executor: Worker/Hybrid
        complexity: medium

      - id: SOP-IND-HEALTH-03
        name: "Product Registration & Certification"
        description: "Register new products/equipment with regulatory agencies"
        why: "No registration = cannot sell."
        executor: Human
        complexity: high

      - id: SOP-IND-HEALTH-04
        name: "Clinical Service Protocol"
        description: "Standard patient/client care flow in healthcare settings"
        why: "Standardization = quality + scale + legal defense."
        executor: Hybrid
        complexity: high

  education:
    id: IND-EDUCATION
    name: "Education"
    description: "Online courses, cohorts, mentoring, learning communities, corporate training"
    examples: "edtech platforms, cohort programs, corporate training, personal development"
    sops:
      - id: SOP-IND-EDU-01
        name: "Content Production Pipeline"
        description: "Full cycle: planning, recording, editing, publishing lessons/modules"
        why: "Bottleneck #1 in EdTechs. No new content = product stagnates."
        executor: Hybrid
        complexity: high

      - id: SOP-IND-EDU-02
        name: "Student Onboarding"
        description: "Journey from first access to first value delivered"
        why: "Retention. Student who doesn't engage in week 1 churns."
        executor: Agent/Worker
        complexity: medium

      - id: SOP-IND-EDU-03
        name: "Class / Cohort Launch Cycle"
        description: "Enrollment opening, registration, payment, access, kick-off"
        why: "Main revenue event in cohort model."
        executor: Hybrid
        complexity: high

      - id: SOP-IND-EDU-04
        name: "Assessment & Certification"
        description: "Learning evaluation process and certificate issuance"
        why: "Credibility of the educational product."
        executor: Worker/Hybrid
        complexity: medium

      - id: SOP-IND-EDU-05
        name: "Pedagogical Support / Mentoring"
        description: "Q&A support, exercise review, mentoring sessions"
        why: "Competitive differentiator. Students pay for support, not just content."
        executor: Human/Agent
        complexity: medium

  technology:
    id: IND-TECH
    name: "Technology / AI"
    description: "Software, SaaS platforms, digital tools, AI frameworks"
    examples: "SaaS products, fintech platforms, AI tools, developer tools"
    sops:
      - id: SOP-IND-TECH-01
        name: "Release / Deploy Cycle"
        description: "Development pipeline: branch, review, test, staging, production"
        why: "Continuous delivery. Bug in production = churn."
        executor: Worker/Hybrid
        complexity: high

      - id: SOP-IND-TECH-02
        name: "Incident / Bug Management"
        description: "Triage, prioritization, fix, and post-mortem for production bugs"
        why: "Churn prevention. Unresolved critical bug = lost customer."
        executor: Hybrid
        complexity: medium

      - id: SOP-IND-TECH-03
        name: "Technical User Onboarding"
        description: "Account setup, initial configuration, first value delivered"
        why: "Activation. User who doesn't configure in first session abandons."
        executor: Agent/Worker
        complexity: medium

      - id: SOP-IND-TECH-04
        name: "Security & Data Protection"
        description: "Access policies, encryption, backups, security incident response"
        why: "Trust. Data breach = product death."
        executor: Hybrid
        complexity: high

  tourism_gastronomy:
    id: IND-TOURISM
    name: "Tourism / Gastronomy"
    description: "Tours, gastronomic experiences, tourism marketplaces"
    examples: "tour operators, restaurant marketplaces, travel platforms"
    sops:
      - id: SOP-IND-TOUR-01
        name: "Partner Establishment Onboarding"
        description: "Acquire, validate, contract, and activate new marketplace partner"
        why: "Supply side. No partners = no offer."
        executor: Hybrid
        complexity: medium

      - id: SOP-IND-TOUR-02
        name: "Experience Quality Control"
        description: "Periodic partner evaluation, mystery shopper, customer feedback"
        why: "Brand. Bad experience = negative review = user churn."
        executor: Hybrid
        complexity: medium

      - id: SOP-IND-TOUR-03
        name: "Geographic Expansion"
        description: "Playbook for entering a new city: research, acquisition, launch"
        why: "Growth. Model depends on geographic scale."
        executor: Human/Agent
        complexity: high

  telecom_services:
    id: IND-TELECOM
    name: "Telecom / Multi-Sector Services"
    description: "Telecommunications, vehicle protection, service franchises"
    examples: "telecom providers, fleet management, multi-unit service businesses"
    sops:
      - id: SOP-IND-TEL-01
        name: "Service Provisioning"
        description: "Activate new service for customer (SIM, protection, rental)"
        why: "Core delivery. No provisioning = customer can't use it."
        executor: Worker/Hybrid
        complexity: medium

      - id: SOP-IND-TEL-02
        name: "Multi-Entity / Multi-Company Management"
        description: "Administrative, financial, and tax control across multiple legal entities"
        why: "High admin overhead. Inefficiency across entities = eroded margins."
        executor: Hybrid
        complexity: high
        br_context: "Multi-CNPJ management. Each entity has separate tax obligations."

      - id: SOP-IND-TEL-03
        name: "Franchise Network Management"
        description: "Standardization, training, audit, and support for franchisees"
        why: "Model scale. Franchisee without standards = diluted brand."
        executor: Hybrid
        complexity: high

  gaming:
    id: IND-GAMING
    name: "Gaming / Entertainment"
    description: "Game publishing, studios, gamer communities"
    examples: "game publishers, indie studios, esports organizations"
    sops:
      - id: SOP-IND-GAME-01
        name: "Game Publishing Pipeline"
        description: "Evaluation, contract, development, QA, launch, marketing"
        why: "Core of publisher model. Each game is a product."
        executor: Hybrid
        complexity: high

      - id: SOP-IND-GAME-02
        name: "Build QA & Testing"
        description: "Functional, performance, and compatibility testing before release"
        why: "Quality gate. Buggy game = review bomb = title death."
        executor: Worker/Hybrid
        complexity: high

      - id: SOP-IND-GAME-03
        name: "Micro-Studio Onboarding"
        description: "Integrate new partner studio: tools, processes, standards"
        why: "Scale. Each studio must operate to publisher standards."
        executor: Hybrid
        complexity: medium

  finance_crypto:
    id: IND-FINANCE
    name: "Finance / Crypto"
    description: "Investments, cryptocurrency, financial education"
    examples: "investment advisors, crypto funds, financial education platforms"
    sops:
      - id: SOP-IND-FIN-01
        name: "Financial Regulatory Compliance"
        description: "Conform with securities regulators, crypto rules, KYC/AML"
        why: "Mandatory. No compliance = lawsuit + fines + prison."
        executor: Human/Hybrid
        complexity: high
        br_context: "CVM, Banco Central. US: SEC, CFTC, FinCEN."

      - id: SOP-IND-FIN-02
        name: "Risk & Portfolio Management"
        description: "Exposure monitoring, limits, stop-loss, rebalancing"
        why: "Core delivery. Mentor without risk management = student loses money."
        executor: Agent/Human
        complexity: high

      - id: SOP-IND-FIN-03
        name: "Market Analysis & Signal Distribution"
        description: "Pipeline for collecting, analyzing, and distributing signals/recommendations"
        why: "Core delivery. Students pay for analysis, not generic content."
        executor: Agent
        complexity: high

# =============================================================================
# LAYER 3: BUSINESS MODEL SOPs
# Specific to HOW the business monetizes. Define sales, delivery, and
# retention operations regardless of industry.
# =============================================================================

business_model_sops:
  description: >
    Business model-specific SOPs. The model determines how to sell, deliver,
    and retain, regardless of industry. A healthcare SaaS and a gaming SaaS
    share billing, onboarding, and churn prevention SOPs.

  saas:
    id: MOD-SAAS
    name: "SaaS / Subscription"
    description: "Software sold as a service with recurring billing"
    examples: "B2B SaaS, B2C subscription apps, freemium platforms, vertical SaaS"
    sops:
      - id: SOP-MOD-SAAS-01
        name: "SaaS User Onboarding"
        description: "First login, setup, guided tour, first value delivered"
        why: "Activation. User who doesn't reach 'aha moment' churns."
        executor: Agent/Worker
        complexity: medium

      - id: SOP-MOD-SAAS-02
        name: "Billing & Subscription Management"
        description: "Recurring billing, upgrade/downgrade, dunning, cancellation"
        why: "Revenue. Billing failure = involuntary churn."
        executor: Worker
        complexity: medium

      - id: SOP-MOD-SAAS-03
        name: "Churn Prevention / Retention"
        description: "Identify churn signals, proactive intervention, win-back campaigns"
        why: "LTV. Cost to retain < cost to acquire."
        executor: Agent/Hybrid
        complexity: medium

      - id: SOP-MOD-SAAS-04
        name: "Feature Release / Changelog"
        description: "Communicate updates, document changes, migrate users"
        why: "Engagement. User who doesn't know about updates doesn't use them."
        executor: Worker/Agent
        complexity: low

  agency:
    id: MOD-AGENCY
    name: "Agency / Services"
    description: "Specialized services sold per project or retainer"
    examples: "marketing agencies, consulting firms, design studios, dev shops"
    sops:
      - id: SOP-MOD-AG-01
        name: "Commercial Proposal Pipeline"
        description: "Briefing, research, drafting, approval, and delivery of proposals"
        why: "Revenue. No proposal = no client."
        executor: Agent/Hybrid
        complexity: medium

      - id: SOP-MOD-AG-02
        name: "New Client Onboarding"
        description: "Kick-off, access collection, scope definition, SLA, communication channels"
        why: "Time-to-value. Client waiting 2 weeks to start is already frustrated."
        executor: Hybrid
        complexity: medium

      - id: SOP-MOD-AG-03
        name: "Performance Reporting"
        description: "Periodic generation of results reports for clients"
        why: "Retention. Client who doesn't see results cancels."
        executor: Agent/Worker
        complexity: low-medium

      - id: SOP-MOD-AG-04
        name: "Scope & Change Request Management"
        description: "Process to approve, document, and price scope changes"
        why: "Margin. Infinite scope = unprofitable project."
        executor: Human/Hybrid
        complexity: medium

  cohort:
    id: MOD-COHORT
    name: "Cohort / Immersion"
    description: "Closed groups with defined start/end dates, high interaction"
    examples: "cohort-based courses, in-person immersions, bootcamps, masterminds"
    sops:
      - id: SOP-MOD-COH-01
        name: "Cohort Launch Cycle"
        description: "Campaign, acquisition, enrollment, payment, confirmation, kick-off"
        why: "Revenue event. All revenue depends on the launch."
        executor: Hybrid
        complexity: high

      - id: SOP-MOD-COH-02
        name: "Cohort Delivery Operations"
        description: "Class/session schedule, materials, support, community management"
        why: "NPS. Disorganized delivery = student doesn't repurchase."
        executor: Hybrid
        complexity: high

      - id: SOP-MOD-COH-03
        name: "Post-Cohort Upsell / Continuity"
        description: "Offer next level, community, mentoring after cohort ends"
        why: "LTV. Student who finishes without next step = lost revenue."
        executor: Agent/Human
        complexity: medium

  marketplace:
    id: MOD-MARKETPLACE
    name: "Marketplace / Platform"
    description: "Connects supply and demand, charges commission or subscription"
    examples: "two-sided marketplaces, aggregator platforms, booking systems"
    sops:
      - id: SOP-MOD-MKT-01
        name: "Partner Onboarding (Supply Side)"
        description: "Acquisition, validation, contract, activation on marketplace"
        why: "Supply. No partners = no offer."
        executor: Hybrid
        complexity: medium

      - id: SOP-MOD-MKT-02
        name: "Marketplace Quality Management"
        description: "Reviews, reports, suspension, partner rewards"
        why: "Trust. Marketplace with bad partners loses users."
        executor: Agent/Hybrid
        complexity: medium

      - id: SOP-MOD-MKT-03
        name: "User Acquisition (Demand Side)"
        description: "Pipeline for acquiring, activating, and retaining consumers"
        why: "Demand. No users = partners leave."
        executor: Agent/Worker
        complexity: medium

  direct_response:
    id: MOD-DR
    name: "Direct Response / eCommerce"
    description: "Direct sales via paid traffic, VSLs, funnels, immediate conversion"
    examples: "supplement brands, info-product funnels, ecommerce DTC, affiliate offers"
    sops:
      - id: SOP-MOD-DR-01
        name: "VSL/Funnel Creation Pipeline"
        description: "Research, script, recording, editing, landing page, checkout"
        why: "Revenue driver #1. Each funnel is a revenue asset."
        executor: Hybrid
        complexity: high

      - id: SOP-MOD-DR-02
        name: "Creative Testing Cycle"
        description: "Creation, A/B testing, analysis, kill/scale decisions for ad creatives"
        why: "Scale. Performing creative = scale. Fatigued creative = CPA rises."
        executor: Agent/Hybrid
        complexity: medium

      - id: SOP-MOD-DR-03
        name: "Supply Chain / Fulfillment"
        description: "Inventory, supplier, production, shipping, tracking, returns"
        why: "Physical delivery. Product that doesn't arrive = chargeback + negative review."
        executor: Worker/Hybrid
        complexity: high

      - id: SOP-MOD-DR-04
        name: "Ad Claims & Compliance"
        description: "Validate claims, review creatives, ensure platform policy compliance"
        why: "Survival. Banned ad account = zero revenue overnight."
        executor: Hybrid
        complexity: medium

  high_ticket_mentoring:
    id: MOD-MENTORING
    name: "High-Ticket Mentoring"
    description: "Consultative sale of mentoring/advisory at high price point"
    examples: "executive coaching, expert advisory, mastermind groups, 1:1 consulting"
    sops:
      - id: SOP-MOD-MHT-01
        name: "Consultative Sales Pipeline"
        description: "Application, screening, sales call, closing, onboarding"
        why: "Revenue. Each sale is high-touch, needs process."
        executor: Human/Agent
        complexity: medium

      - id: SOP-MOD-MHT-02
        name: "Session & Calendar Management"
        description: "Scheduling, confirmation, no-show handling, rescheduling, post-session follow-up"
        why: "Delivery. Mentor without organized calendar = bad experience."
        executor: Worker
        complexity: low

      - id: SOP-MOD-MHT-03
        name: "1:1 Result Delivery"
        description: "Session framework, diagnosis, action plan, progress tracking"
        why: "Results. Student without results doesn't renew and doesn't refer."
        executor: Human
        complexity: high

  franchise:
    id: MOD-FRANCHISE
    name: "Franchise / Network"
    description: "Model replication via franchisees or owned units"
    examples: "fast food chains, service franchises, licensed operations, multi-unit retail"
    sops:
      - id: SOP-MOD-FRQ-01
        name: "Unit Standardization"
        description: "Opening checklist, visual identity, mandatory processes"
        why: "Brand. Non-standard unit = diluted brand."
        executor: Hybrid
        complexity: high

      - id: SOP-MOD-FRQ-02
        name: "Franchisee Training"
        description: "Initial training program and periodic refresher courses"
        why: "Quality. Untrained franchisee = bad operation."
        executor: Hybrid
        complexity: high

      - id: SOP-MOD-FRQ-03
        name: "Franchise Audit"
        description: "Periodic visit, compliance checklist, corrective action plan"
        why: "Control. Without audits, standards degrade over time."
        executor: Human/Agent
        complexity: medium

# =============================================================================
# HOW TO USE THIS FILE
# =============================================================================
# The sop-chief uses this category-map to determine required SOPs:
#
# 1. Business with industry=Healthcare and model=SaaS:
#    -> Required SOPs = universal + healthcare + saas
#
# 2. Business with industry=Education and model=Cohort:
#    -> Required SOPs = universal + education + cohort
#
# 3. Business with industry=Technology and model=Agency+SaaS:
#    -> Required SOPs = universal + technology + agency + saas
#
# The sop-research-context.yaml for each business (in {pasta}/
# {slug}/operations/) references IDs from this file to indicate which SOPs apply.
# =============================================================================


---

## Referência: references/data-confidence-levels.yaml

# =============================================================================
# Confidence Levels for SOP Process Extraction
# =============================================================================
# Data: confidence-levels.yaml | SOP Factory | Synkra Hybrid
# Used by: sop-extractor, extract-sop.md, extract-from-video.md,
# structured-interview.md, extraction-output-template.md
#
# Canonical contract:
# - markers and scores used in extraction artifacts
# - item-level verification threshold
# - handoff readiness threshold
# =============================================================================

schema_version: "1.1.0"

levels:
  - id: "observed"
    score: 1.0
    label: "Directly Observed"
    marker: "[OBS]"
    description: "Direct observation, screen recording, or auditable system trace."
    examples:
      - "Gemba walk observing the work being performed"
      - "Screen recording of the process execution"
      - "System audit log or execution trace"

  - id: "documented"
    score: 0.9
    label: "Documented"
    marker: "[DOC]"
    description: "Explicitly documented in a durable source artifact."
    examples:
      - "Existing SOP or work instruction"
      - "Knowledge base article with date/version"
      - "Transcript segment with direct procedural statement"

  - id: "reported"
    score: 0.8
    label: "Reported by Practitioner"
    marker: "[REP]"
    description: "Described by someone who performs the process."
    examples:
      - "Structured interview with process performer"
      - "Walkthrough narration"
      - "Direct description from SME"

  - id: "corroborated"
    score: 0.7
    label: "Corroborated"
    marker: "[COR]"
    description: "Supported by multiple weak signals, but not yet durable enough to classify as documented."
    examples:
      - "Multiple partial sources converge on the same step"
      - "Demonstration implies a step and a second source confirms it"
      - "Repeated mention across fragmented notes"

  - id: "inferred"
    score: 0.5
    label: "Inferred"
    marker: "[INF]"
    description: "Logically necessary or strongly suggested, but not explicitly stated."
    examples:
      - "Transition step implied between two confirmed actions"
      - "Derived from surrounding documented evidence"
      - "Partial documentation with clear logical gap"

  - id: "assumed"
    score: 0.3
    label: "Assumed"
    marker: "[ASM]"
    description: "Best guess based on norms or domain experience, not process-specific evidence."
    examples:
      - "Industry standard practice applied by analogy"
      - "Common-sense filler for a missing operational detail"

  - id: "unknown"
    score: 0.1
    label: "Unknown"
    marker: "[UNK]"
    description: "A known gap. The step or fact likely exists, but the available evidence is insufficient."
    examples:
      - "Contradictory information with no resolution"
      - "Cut in video or missing transcript segment"
      - "Practitioner confirms existence but not the exact mechanics"

rules:
  upgrade:
    - condition: "Direct observation or system trace confirms the step"
      effect: "Upgrade to [OBS] 1.0"
    - condition: "Durable source artifact explicitly states the step"
      effect: "Upgrade to [DOC] 0.9"
    - condition: "Second independent source confirms a reported or inferred step"
      effect: "Promote one level, capped at [DOC] 0.9 without direct observation"

  downgrade:
    - condition: "Contradictory sources remain unresolved"
      effect: "Downgrade to [UNK] 0.1 and log in Conflicts"
    - condition: "Supposed documentation is outdated or unverifiable"
      effect: "Downgrade [DOC] to [COR] or [INF], depending on supporting evidence"
    - condition: "Critical step is supported only by one weak source"
      effect: "Cap at [REP] 0.8 and require verification"

thresholds:
  flag_for_verification: 0.8
  minimum_handoff_average: 0.7
  minimum_for_critical_step: 0.8
  recommend_additional_extraction_if_low_confidence_share_gt: 0.30

aggregation:
  method: "weighted_average"
  weight_by: "step_criticality"
  weights:
    critical_step: 2.0
    standard_step: 1.0
    informational_step: 0.5

verification_methods:
  observation:
    - "Observe the process live or via recording"
    - "Review audit logs or execution traces"

  documentation:
    - "Locate current SOP or durable reference artifact"
    - "Confirm author, date, or version on the source"

  interview:
    - "Run structured interview with actual performer"
    - "Perform read-back confirmation on captured sequence"

  conflict_resolution:
    - "Interview both conflicting sources with the exact contradiction"
    - "Escalate to the process owner for tie-break decision"
    - "Run a direct observation pass when conflict touches a critical step"


---

## Referência: references/extract-from-video.md

# Task: Extract SOP from Video/Transcript

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `extract-from-video` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-extractor` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: extract-from-video
name: "Extract SOP from Video/Transcript"
category: extraction
agent: sop-extractor
elicit: true
autonomous: false
description: "Convert a video tutorial transcript or spoken-word process description into a structured SOP. Separates procedural instructions from commentary, identifies temporal sequence, and assigns confidence scores based on the directness of instruction."
```

## Purpose

Videos and recorded walkthroughs are one of the richest sources of process knowledge, yet they are unsearchable, unversioned, and impossible to use as reference documents. This task takes a video transcript (or detailed video description) and extracts a structured SOP from it, filtering out commentary, filler, and tangential content to isolate the actual procedural steps.

This is particularly valuable for:
- Converting training videos into formal SOPs
- Capturing expert knowledge from screen recordings
- Documenting processes demonstrated in live sessions
- Extracting procedures from podcast/interview explanations

## Prerequisites

- [ ] Transcript of the video is available (text format)
- [ ] Process name is identified
- [ ] Video context is understood (training video, screen recording, live demo, interview)

## Inputs

```yaml
inputs:
  transcript:
    type: string
    required: true
    description: "Full text transcript of the video. Can include timestamps, speaker labels, and auto-generated captions. Accepts raw, unedited transcription."

  video_context:
    type: string
    required: false
    description: "Context about the video: what type (training, demo, interview), who is speaking (expert, trainer, novice), what is being shown (screen, physical, whiteboard), and intended audience."

  process_name:
    type: string
    required: true
    description: "Name of the process being demonstrated or described in the video"
```

## Transcript Content Classification

```yaml
content_types:
  procedural_instruction:
    description: "Direct instructions on how to perform a step"
    examples:
      - "First, you click on the Settings icon"
      - "Now drag the file into the upload area"
      - "Make sure you check the box before submitting"
    confidence: 0.9
    include: true

  demonstration_narration:
    description: "Narration of what the speaker is doing in real-time"
    examples:
      - "So I'm going to go ahead and open the dashboard"
      - "And here you can see I'm selecting the dropdown"
      - "Watch as I enter the values into each field"
    confidence: 0.8
    include: true

  explanation:
    description: "Why something is done, not how"
    examples:
      - "The reason we do this first is because..."
      - "This is important because if you skip it..."
      - "The way this works under the hood is..."
    confidence: 0.6
    include: "as context notes, not as steps"

  tangential:
    description: "Off-topic comments, jokes, filler"
    examples:
      - "By the way, did you see the new office?"
      - "Um, let me think about that for a second"
      - "Sorry, my dog just walked in"
    confidence: 0.0
    include: false

  conditional_instruction:
    description: "Instructions that apply only in certain situations"
    examples:
      - "If you're on a Mac, you'd use Command instead"
      - "For enterprise accounts, there's an extra step here"
      - "In case you get an error, try restarting"
    confidence: 0.7
    include: "as conditional steps or notes"

  safety_warning:
    description: "Cautions or warnings about what NOT to do"
    examples:
      - "Never do this in production without a backup"
      - "Be careful not to delete the original"
      - "Warning: this action cannot be undone"
    confidence: 0.9
    include: "as WARNING markers before relevant steps"

  tip_optimization:
    description: "Optional tips for better results"
    examples:
      - "A pro tip here is to also..."
      - "You can speed this up by..."
      - "What I like to do is..."
    confidence: 0.5
    include: "as TIP notes after relevant steps"
```

## Workflow / Steps

### 1. Parse Transcript

```
ACTION: Process the raw transcript into analyzable segments

OPERATIONS:
  a) Clean transcript
     - Remove filler words (um, uh, like, you know) from analysis
     - Preserve timestamps if present
     - Identify speaker changes if multiple speakers

  b) Segment by topic
     - Break transcript into logical segments
     - Each segment = one topic or action group
     - Use transitions as segment boundaries:
       "next", "now", "then", "after that", "moving on",
       "the next step", "once that's done"

  c) Classify each segment
     - procedural_instruction
     - demonstration_narration
     - explanation
     - tangential
     - conditional_instruction
     - safety_warning
     - tip_optimization

OUTPUT: segments = [
  {
    id: <number>,
    timestamp: "<if available>",
    speaker: "<if identified>",
    text: "<segment text>",
    type: "<content classification>",
    include: <true|false>,
    confidence: <0.0-1.0>
  }
]
```

### 2. Extract Procedural Steps

```
ACTION: Filter and transform included segments into procedure steps

EXTRACTION RULES:
  a) Include ONLY segments classified as:
     - procedural_instruction (as main steps)
     - demonstration_narration (as main steps)
     - conditional_instruction (as conditional branches)
     - safety_warning (as WARNING markers)

  b) Transform natural language to action steps:
     - "So I'm going to click on Settings" -> "Click on Settings"
     - "You want to make sure you save first" -> "Save the current work"
     - "And then what you do is drag it over" -> "Drag the item to the target area"

  c) Preserve speaker's specific terminology
     - If they say "the blue button", keep "the blue button"
     - If they name a specific menu item, keep the exact name

  d) Extract embedded details:
     - UI element names (buttons, menus, fields)
     - File names and paths
     - Specific values or settings
     - Keyboard shortcuts

FOR EACH extracted step:
  step = {
    number: <sequential>,
    action: "<transformed action statement>",
    original_text: "<verbatim from transcript>",
    timestamp: "<if available>",
    tools_mentioned: ["<tools>"],
    ui_elements: ["<buttons, menus, fields>"],
    expected_result: "<if mentioned>",
    warnings: ["<any safety warnings>"],
    tips: ["<any optimization tips>"],
    conditions: ["<any conditions that apply>"],
    confidence: <score>,
    confidence_marker: "<marker>"
  }
```

### 3. Identify Sequence

```
ACTION: Order steps chronologically based on transcript position and logical dependencies

ORDERING RULES:
  a) Default: transcript order (temporal sequence)
  b) Override if logical dependency requires reordering
  c) Group related steps into phases
  d) Identify parallel paths (things done simultaneously in the video)

HANDLE COMMON VIDEO PATTERNS:
  - Backtracking: "Actually, I should have done X first" -> reorder X before current
  - Repetition: "Let me show that again" -> don't duplicate the step
  - Alternative demo: "Another way to do this is..." -> add as alternative path
  - Error correction: "Oops, that was wrong. Let me..." -> use the corrected version
  - Preview then detail: "In a moment we'll... but first..." -> maintain logical order

OUTPUT: ordered_steps[] with phase groupings
```

### 4. Add Context

```
ACTION: Enrich steps with contextual information from the transcript

EXTRACT AND ATTACH:
  a) Materials/Prerequisites
     - Software versions mentioned
     - Account types or permissions needed
     - Files or data required
     - Prior setup steps referenced

  b) Tools and Systems
     - Software applications shown/mentioned
     - Browser, OS specifics
     - Hardware requirements
     - Plugins or extensions

  c) Environment Details
     - Screen resolution or display setup
     - Network requirements
     - Security context (VPN, credentials)

  d) Explanatory Context
     - WHY certain steps are done (from explanation segments)
     - Common mistakes mentioned
     - Troubleshooting tips shared

ATTACH context to relevant steps as notes
```

### 5. Structure as SOP Draft

```
ACTION: Apply human SOP template to extracted content

APPLY create-sop-human template with additions:
  - Mark as "DRAFT - EXTRACTED FROM VIDEO"
  - Include "Video Source" in references section
  - Add transcript segments as appendix (optional)
  - Include confidence markers on each step

SPECIAL SECTIONS:
  - Video Source: title, URL (if known), duration, speaker
  - Extraction Notes: what was clear vs. inferred
  - Screenshots Needed: flag steps that would benefit from screenshots
    (the video had visual context that text cannot convey)
```

### 6. Mark Confidence

```
ACTION: Assign final confidence scores to all extracted steps

CONFIDENCE RULES FOR VIDEO EXTRACTION:
  - [DOC] 0.9 = direct instruction with matching on-screen demonstration
    "Click here" while the action is visibly shown
  - [REP] 0.8 = direct spoken instruction without visual confirmation
    "You would click here" but the screen does not prove it
  - [COR] 0.7 = demonstration or repeated references strongly suggest the step
    Speaker performs the step or revisits it later, but the instruction is partial
  - [INF] 0.5 = logically implied from surrounding context
    Step not stated but required between confirmed actions
  - [ASM] 0.3 = domain-based assumption
    Standard practice not mentioned in the recording
  - [UNK] 0.1 = likely missing because of cut, speed-up, or transcript loss
    Step suspected but not recoverable from the available material

ADD SPECIAL FLAGS:
  - [VISUAL] = Step relies on visual context from video (screenshot needed)
  - [AUDIO] = Step includes audio cue (alarm, notification sound)
  - [SPEED] = Video was sped up here (may be missing micro-steps)
  - [CUT] = Video had a cut here (steps may be missing)
```

## Output

```yaml
outputs:
  primary:
    path: "docs/sops/{process-name}-video-draft-sop-v{version}.md"
    format: markdown
    description: "Draft SOP extracted from video transcript with confidence annotations"

  secondary:
    - path: "outputs/hybrid-sop/extractions/{process-name}-video-extraction-log.md"
      format: markdown
      description: "Detailed extraction log showing transcript-to-step mapping"

  metadata:
    transcript_word_count: "<number>"
    segments_total: "<number>"
    segments_procedural: "<number>"
    segments_excluded: "<number>"
    steps_extracted: "<number>"
    avg_confidence: "<0.0-1.0>"
    visual_flags: "<number of steps needing screenshots>"
    gaps_identified: "<number>"
```

## Acceptance Criteria

- [ ] Steps are extracted from actual instructions, not commentary
- [ ] Confidence annotations are present on every step
- [ ] Temporal order is maintained (or logically corrected with notes)
- [ ] Tangential content is excluded from procedure steps
- [ ] Safety warnings are preserved and positioned before relevant steps
- [ ] Visual-dependent steps are flagged with [VISUAL] marker
- [ ] Video source information is documented in references
- [ ] Draft is clearly marked as extracted from video (not original SOP)
- [ ] Steps that relied on visual demonstration include notes about what was shown
- [ ] Extraction log maps each step back to transcript segment

## Veto Conditions

- STOP if transcript is empty or has fewer than 100 words
- STOP if transcript contains no identifiable procedural content (purely conversational)
- STOP if transcript language cannot be interpreted (corrupted auto-captions with < 50% intelligibility)
- STOP if process name cannot be determined from transcript and is not provided
- STOP if the transcript covers multiple unrelated processes without clear boundaries (ask user to specify which process)


---

## Referência: references/extract-sop.md

# Task: Extract SOP from Process

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `extract-sop` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-extractor` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: extract-sop
name: "Extract SOP from Process"
category: extraction
agent: sop-extractor
elicit: true
autonomous: false
description: "Extract a structured SOP from unstructured process descriptions, documents, or interviews. Applies Toyota Production System gemba principles: go to the source, observe the actual work, capture tribal knowledge. Assigns confidence scores to each step and flags gaps for validation."
```

## Purpose

Transform unstructured process knowledge (descriptions, documents, interviews, observations) into a structured SOP. Most organizational knowledge lives in people's heads as "tribal knowledge" -- undocumented, inconsistent, and vulnerable to loss. This task captures that knowledge using Taiichi Ohno's gemba approach: understand the process as it actually happens (not as it is imagined), decompose it into atomic steps, assign confidence levels, and structure it for formal documentation.

The output is a **draft SOP** with confidence annotations. High-confidence steps come from direct observation or explicit documentation. Low-confidence steps are inferred and flagged for validation via "teach-back" testing.

## Prerequisites

- [ ] Process description or source material available
- [ ] Process owner or subject matter expert accessible (recommended)
- [ ] Extraction method determined (description, document, interview, observation)

## Inputs

```yaml
inputs:
  process_description:
    type: string
    required: true
    description: "Description of the process to extract. Can be informal, unstructured, conversational. The more detail, the higher confidence output."

  extraction_method:
    type: enum
    required: false
    default: description
    options: [description, document, interview, observation]
    description: >
      How the process information was captured:
      - description: Free-text description from user (default)
      - document: Existing document (email, wiki, manual)
      - interview: Structured Q&A with process performer
      - observation: Direct observation notes (gemba walk)

  source_material:
    type: filepath
    required: false
    description: "Path to supporting document (existing wiki page, email, manual, notes)"

  confidence_threshold:
    type: number
    required: false
    default: 0.8
    description: "Item-level verification threshold (0.0-1.0). Steps below this threshold remain in the draft but must be flagged in the Gaps/Review section."
```

## Confidence Scoring Model

```yaml
confidence_levels:
  observed:
    score: 1.0
    label: "Directly Observed"
    description: "Step was directly observed being performed (gemba)"
    marker: "[OBS]"

  documented:
    score: 0.9
    label: "Documented"
    description: "Step is explicitly stated in existing documentation"
    marker: "[DOC]"

  reported:
    score: 0.8
    label: "Reported by Performer"
    description: "Step was described by someone who performs it"
    marker: "[REP]"

  corroborated:
    score: 0.7
    label: "Corroborated"
    description: "Step supported by multiple weak signals but not yet durable enough to count as documented"
    marker: "[COR]"

  inferred:
    score: 0.5
    label: "Inferred"
    description: "Step is logically necessary but not explicitly stated"
    marker: "[INF]"

  assumed:
    score: 0.3
    label: "Assumed"
    description: "Step is assumed based on industry norms or common sense"
    marker: "[ASM]"

  unknown:
    score: 0.1
    label: "Unknown"
    description: "Step existence suspected but details unknown"
    marker: "[UNK]"
```

## Workflow / Steps

### 1. Capture Input

```
ELICIT from user:
  1. Describe the process from start to finish (as if teaching a new hire)
  2. Who performs this process? (all roles involved)
  3. What triggers the process? (what causes it to start)
  4. What tools or systems are used?
  5. What is the final output or result?
  6. What are the most common mistakes or problems?
  7. How long does the process typically take?
  8. Are there any steps that vary depending on conditions?
  9. Is there existing documentation? (even partial or outdated)
  10. Who is the most experienced person at this process?

IF source_material provided:
  ACTION: Read and parse the source document
  EXTRACT: Any procedural content, step references, role mentions

STORE: raw_input = {
  description, roles, trigger, tools,
  output, common_errors, duration,
  conditional_steps, existing_docs,
  expert_contact
}
```

### 2. Identify Actors

```
ACTION: Extract all roles/actors involved in the process

FOR EACH mentioned person, title, role, or department:
  - Name/Title of actor
  - What they do in the process
  - When they are involved (which steps)
  - What authority they have (approve, execute, verify)

OUTPUT: actors = [
  {
    role: "<role name>",
    actions: ["<what they do>"],
    steps_involved: [<step numbers>],
    authority: "<execute|approve|verify|inform>"
  }
]

CONFIDENCE: Assign based on how the actor was identified
  - Named in durable source material: 0.9
  - Named by the process performer during elicitation: 0.8
  - Implied by action: 0.5
  - Assumed from industry norm: 0.3
```

### 3. Extract Steps

```
ACTION: Decompose the process into atomic steps

EXTRACTION RULES:
  a) One action per step (if "do X and Y" -> step X, step Y)
  b) Each step starts with an action verb
  c) Preserve the performer's language (don't over-formalize yet)
  d) Capture time estimates if mentioned
  e) Note any materials or tools required per step
  f) Identify if step is always performed or conditional

FOR EACH extracted step:
  step = {
    number: <sequential>,
    action: "<action verb + object>",
    actor: "<who does it>",
    tools: ["<tools used>"],
    duration: "<estimated time>",
    condition: "<when this step applies, or 'always'>",
    expected_result: "<what should happen>",
    confidence: <0.0-1.0>,
    confidence_marker: "<[OBS]|[DOC]|[REP]|[COR]|[INF]|[ASM]|[UNK]>",
    source: "<where this step was identified>",
    notes: "<any ambiguity or uncertainty>"
  }

OUTPUT: steps[] ordered chronologically
```

### 4. Identify Decision Points

```
ACTION: Find where the process branches based on conditions

SIGNALS:
  - "if/then" language in description
  - "depending on" phrases
  - "sometimes" or "usually" qualifiers
  - Multiple actors doing similar but different work
  - Exception handling references

FOR EACH decision point:
  decision = {
    step_number: <where the decision occurs>,
    condition: "<what determines the branch>",
    branches: [
      { condition: "<if X>", next_step: <N>, description: "<what happens>" },
      { condition: "<if Y>", next_step: <M>, description: "<what happens>" }
    ],
    default: "<what happens if none match>",
    confidence: <0.0-1.0>,
    notes: "<any ambiguity about the decision logic>"
  }

RULE: If a decision point has no default/else branch, flag it as a gap
```

### 5. Map Dependencies

```
ACTION: Determine the order and dependencies between steps

FOR EACH step, identify:
  - Prerequisites: what must be done before this step
  - Successors: what comes after this step
  - Parallel paths: steps that can happen simultaneously
  - Wait states: steps that require external input or approval
  - Loops: steps that repeat until a condition is met

OUTPUT: dependency_map = {
  sequential: [<step pairs in order>],
  parallel: [<groups of parallel steps>],
  wait_states: [<steps with external dependencies>],
  loops: [<step ranges that repeat>],
  critical_path: [<steps on the longest path>]
}
```

### 6. Assign Confidence Scores

```
ACTION: Review and assign final confidence scores

FOR EACH step:
  1. Base score from extraction method:
     - observation notes: 1.0
     - existing document: 0.9
     - direct report: 0.8
     - corroborated: 0.7
     - inferred: 0.5
     - assumed: 0.3

  2. Adjust for corroboration:
     - Second independent source: promote one level (cap at 0.9 without observation)
     - Contradictory information: downgrade to [UNK] 0.1 until resolved

  3. Assign confidence marker: [OBS], [DOC], [REP], [COR], [INF], [ASM], [UNK]

FLAG steps below confidence_threshold for mandatory review
```

### 7. Structure as Draft SOP

```
ACTION: Apply human SOP template to extracted content

FOLLOW create-sop-human template structure but:
  - Mark document as "DRAFT - EXTRACTED"
  - Include confidence markers on every step
  - Include a "Confidence Summary" section
  - Include a "Gaps & Review Items" section
  - Include a "Sources" section citing extraction sources

CONFIDENCE SUMMARY:
  | Confidence Level | Step Count | Percentage |
  |-----------------|------------|------------|
  | Observed (1.0) | X | X% |
  | Documented (0.9) | X | X% |
  | Reported (0.8) | X | X% |
  | Corroborated (0.7) | X | X% |
  | Inferred (0.5) | X | X% |
  | Assumed (0.3) | X | X% |
  | Unknown (0.1) | X | X% |
  | **Below Threshold** | **X** | **X%** |
```

### 8. Flag Gaps

```
ACTION: Compile all identified gaps and uncertainties

GAP TYPES:
  - MISSING_STEP: Logic suggests a step should exist but was not described
  - MISSING_ACTOR: A step has no identified performer
  - MISSING_TOOL: A step likely requires a tool but none was mentioned
  - AMBIGUOUS_ORDER: Step sequence is unclear
  - AMBIGUOUS_CONDITION: Decision logic is unclear
  - CONTRADICTORY: Conflicting information received
  - LOW_CONFIDENCE: Step below confidence threshold
  - NO_ERROR_HANDLING: Happy path only, no exception handling

FOR EACH gap:
  - gap_id, type, location, description
  - Suggested resolution (question to ask SME, observation to make)
  - Impact on SOP usability if unresolved
```

### 9. Validate with "Teach-Back"

```
ACTION: Recommend teach-back validation protocol

TEACH-BACK METHOD:
  1. Give the draft SOP to someone who has NEVER performed the process
  2. Ask them to read it and explain the process back to you
  3. Note where they:
     - Get confused (clarity gap)
     - Ask questions (completeness gap)
     - Make wrong assumptions (ambiguity gap)
     - Skip steps (visibility gap)
  4. Revise the SOP based on findings

OUTPUT: Include teach-back instructions in the draft SOP

NOTE: This step is a RECOMMENDATION to the user, not something
the agent performs autonomously (requires human participants)
```

## Output

```yaml
outputs:
  primary:
    path: "docs/sops/{process-name}-draft-sop-v{version}.md"
    format: markdown
    description: "Draft SOP with confidence annotations, gaps, and teach-back instructions"

  secondary:
    - path: "outputs/hybrid-sop/extractions/{process-name}-gaps.md"
      format: markdown
      description: "Detailed gap report with suggested resolutions"

    - path: "outputs/hybrid-sop/extractions/{process-name}-confidence-map.md"
      format: markdown
      description: "Step-by-step confidence breakdown with sources"

  metadata:
    total_steps: "<number>"
    decision_points: "<number>"
    actors_identified: "<number>"
    avg_confidence: "<0.0-1.0>"
    steps_below_threshold: "<number>"
    gaps_identified: "<number>"
    extraction_method: "<method>"
```

## Acceptance Criteria

- [ ] Every extracted step has a confidence score and marker
- [ ] All decision points are identified with all known branches
- [ ] Gaps are flagged with specific resolution suggestions
- [ ] Draft SOP follows the human SOP template structure
- [ ] Confidence summary table is included
- [ ] Steps below confidence threshold are visually flagged
- [ ] Dependency map shows step ordering
- [ ] "Teach-back" validation is recommended with instructions
- [ ] All sources of information are cited
- [ ] Document is clearly marked as DRAFT

## Veto Conditions

- STOP if process description yields fewer than 3 identifiable actions
- STOP if no steps achieve confidence >= 0.5 (insufficient information to extract)
- STOP if the process described is purely conceptual with no actionable steps
- STOP if contradictory information cannot be resolved and covers > 50% of steps
- STOP if the process is safety-critical and average confidence is below 0.7 (too risky to document without direct observation)


---

## Referência: references/structured-interview.md

# Task: Structured Interview for Process Extraction

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `structured-interview` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-extractor` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: structured-interview
name: "Structured Interview for Process Extraction"
category: extraction
agent: sop-extractor
elicit: true
autonomous: false
description: "Conduct a 5-phase structured interview with a process performer to extract SOP-ready process knowledge. Based on Taiichi Ohno's Gemba methodology and ethnographic research techniques."
```

## Purpose

Extract complete process knowledge through a systematic interview with the person who actually performs the work. Unlike free-form description extraction (`extract-sop.md`), this task follows a rigid 5-phase protocol designed to capture the full process including tribal knowledge, edge cases, and undocumented workarounds.

This is the highest-fidelity extraction method when direct observation is not possible. Output confidence is typically 0.8 (`[REP]`) for practitioner-reported steps, with lower-confidence items flagged for follow-up according to `confidence-levels.yaml`.

## Prerequisites

- [ ] Process performer (subject matter expert) is available for interview
- [ ] Process name and general domain identified
- [ ] Interview will take 30-60 minutes of uninterrupted time
- [ ] `confidence-levels.yaml` accessible for scoring reference
- [ ] `extraction-output-template.md` accessible for output formatting

## Inputs

```yaml
inputs:
  process_name:
    type: string
    required: true
    description: "Name of the process to extract"

  interviewee_role:
    type: string
    required: true
    description: "Role/title of the person being interviewed"

  interview_context:
    type: string
    required: false
    description: "Any background context about the process or organization"
```

## Workflow / Steps

### Phase 1: Overview (5 minutes)

```
GOAL: Establish scope and context of the process

ASK (in order):
  1. "What is this process called? What does it accomplish?"
  2. "How often is it performed? Who performs it?"
  3. "What triggers this process to start?"
  4. "What does 'done' look like? How do you know it is complete?"

CAPTURE:
  - Process name, purpose, frequency, criticality
  - Trigger event or condition
  - Completion criteria
  - Initial actor inventory

CONFIDENCE: All answers = 0.8 (Reported by Practitioner)
```

### Phase 2: Step-by-Step Walkthrough (15-25 minutes)

```
GOAL: Capture the complete step sequence with tools and decisions

ASK (in order):
  1. "Walk me through the process step by step, starting from the trigger."
  2. "What tools or systems do you use at each step?"
  3. "Where do you make decisions? What determines which path you take?"
  4. "How long does each step typically take?"

TECHNIQUE:
  - Let the interviewee narrate without interruption first
  - Then go back step-by-step and ask for:
    * Exact actions performed
    * Tools/systems used
    * Inputs consumed and outputs produced
    * Expected result at each step
  - Number each step as captured

CAPTURE:
  - Numbered step sequence with actor, tool, and expected result
  - Decision points with conditions and branches
  - Duration estimates per step
  - Tool/system inventory

CONFIDENCE: Detailed steps with demonstration = 0.8, vague steps = 0.5

VETO: If interviewee cannot describe steps sequentially, STOP and
recommend direct observation (gemba walk) instead.
```

### Phase 3: Exception Hunting (10-15 minutes)

```
GOAL: Surface failure modes, edge cases, and tribal knowledge workarounds

ASK (in order):
  1. "What goes wrong most often? How do you handle it?"
  2. "What is the worst-case scenario? Has it ever happened?"
  3. "Are there steps that vary depending on the situation?"
  4. "What do you do when the system is down?"

TECHNIQUE:
  - Push for specifics: "Can you give me a recent example?"
  - For each exception: capture symptom, cause, workaround, frequency
  - Probe for undocumented workarounds: "Is there a trick that everyone knows?"

CAPTURE:
  - Exception catalog: trigger, frequency, workaround, severity
  - Edge cases and conditional branches
  - System failure workarounds
  - "Tribal tricks" not in any documentation

CONFIDENCE:
  - Specific examples with dates = 0.8
  - General statements without examples = 0.5
  - "I think this happens sometimes" = 0.3
```

### Phase 4: Tribal Knowledge Deep Dive (5-10 minutes)

```
GOAL: Capture knowledge that exists only in people's heads

ASK (in order):
  1. "What do new team members struggle with most?"
  2. "What is not written down anywhere but everyone knows?"
  3. "If you were out sick, what would your backup need to know?"
  4. "What has changed recently that old documentation does not reflect?"

TECHNIQUE:
  - These questions surface implicit knowledge
  - For each answer: ask "How would someone learn this without you?"
  - Mark all items as high-priority for documentation

CAPTURE:
  - Onboarding pain points (often = missing SOP content)
  - Unwritten rules and conventions
  - Backup/handoff gaps
  - Recently changed but undocumented steps

CONFIDENCE: Corroborated by multiple people = 0.8, single source = 0.5
```

### Phase 5: Validation Read-Back (5 minutes)

```
GOAL: Verify accuracy and completeness of captured information

ASK (in order):
  1. "Let me read back what I have -- does this match your experience?"
  2. "Is anything missing or incorrect?"
  3. "Who else should I talk to for a different perspective?"

TECHNIQUE:
  - Read back step sequence in order
  - Pause after each step for confirmation or correction
  - Note any corrections and update confidence accordingly

CAPTURE:
  - Corrections to any previously captured information
  - Additional sources recommended for cross-reference
  - Confirmation signature (verbal or written)

CONFIDENCE:
  - Confirmed steps = maintain or upgrade confidence
  - Corrected steps = maintain 0.8 (now more accurate)
  - "I'm not sure about that one" = downgrade to 0.5
```

### Phase 6: Output Generation

```
ACTION: Compile interview results into extraction output format

STEPS:
  1. Load extraction-output-template.md
  2. Fill all 10 sections from interview data
  3. Assign confidence scores per confidence-levels.yaml rules
  4. Flag all items below threshold (0.8) in Gaps section
  5. Document all sources in Provenance section
  6. Run extraction-completeness-checklist.md
  7. Determine handoff readiness

OUTPUT: Completed extraction package ready for handoff
```

## Output

```yaml
outputs:
  primary:
    format: "Extraction output following extraction-output-template.md"
    description: "Complete 10-section extraction package with confidence scores"

  secondary:
    - format: "Interview transcript summary"
      description: "Chronological record of questions asked and answers received"
```

## Acceptance Criteria

- [ ] All 5 interview phases executed in order
- [ ] Step sequence captured with at least 3 steps
- [ ] Each step has actor, tool, and expected result
- [ ] Confidence score assigned to every extracted element
- [ ] Exception/edge cases section populated (even if "none identified")
- [ ] Tribal knowledge section populated (even if "none identified")
- [ ] Read-back validation completed with interviewee
- [ ] Output formatted per extraction-output-template.md
- [ ] extraction-completeness-checklist.md executed

## Veto Conditions

- STOP if interviewee cannot describe the process sequentially (recommend observation)
- STOP if interviewee has never personally performed the process (find actual performer)
- STOP if process has more than 50 steps (split into sub-processes first)
- STOP if interviewee contradicts themselves on critical steps without resolution

## Handoff

- **On success:** Extraction package → @sop-creator (human SOP) or @sop-ml-architect (ML SOP)
- **On incomplete:** Flag gaps → recommend additional interview or observation pass


---

## Referência: templates/extraction-output-template.md

# SOP Extraction Output

> **Template:** extraction-output-template.md | SOP Factory | Synkra Hybrid
>
> Produced by @sop-extractor after process extraction. This is the handoff artifact
> consumed by @sop-creator (human SOP) or @sop-ml-architect (ML SOP).
> Fill all `{{placeholders}}` with actual values.

---

## Extraction Header

| Field | Value |
|---|---|
| **Extraction ID** | EXT-{{sequential_number}} |
| **Process Name** | {{process_name}} |
| **Extraction Date** | {{YYYY-MM-DD}} |
| **Extractor** | Ohno (sop-extractor) |
| **Extraction Method** | {{Description / Document / Interview / Observation / Logs / Tribal}} |
| **Source Material** | {{brief description of sources used}} |
| **Target Format** | {{Human-Readable / ML / Both}} |
| **Average Confidence** | {{X.XX}} |

---

## 1. Process Summary

| Field | Value |
|---|---|
| **Name** | {{process_name}} |
| **Purpose** | {{what this process accomplishes}} |
| **Frequency** | {{how often: daily / weekly / on-demand / event-triggered}} |
| **Criticality** | {{low / medium / high / critical}} |
| **Typical Duration** | {{end-to-end time estimate}} |
| **Trigger** | {{what initiates this process}} |
| **Completion Indicator** | {{how you know it is done}} |

---

## 2. Actors & Systems

| Actor/System | Type | Role in Process | Access Required |
|---|---|---|---|
| {{name}} | {{Human / System / Agent}} | {{what they do}} | {{permissions needed}} |

---

## 3. Step Sequence

> Confidence markers: `[OBS] 1.0` | `[DOC] 0.9` | `[REP] 0.8` | `[COR] 0.7` | `[INF] 0.5` | `[ASM] 0.3` | `[UNK] 0.1`

| # | Step | Actor | Tool/System | Expected Result | Conf. | Source |
|---|------|-------|-------------|-----------------|:-----:|--------|
| 1 | {{action in imperative mood}} | {{role}} | {{tool}} | {{what success looks like}} | {{[OBS]/[DOC]/[REP]/[COR]/[INF]/[ASM]/[UNK]}} | {{source reference}} |
| 2 | {{action}} | {{role}} | {{tool}} | {{result}} | {{conf}} | {{source}} |
| 3 | {{action}} | {{role}} | {{tool}} | {{result}} | {{conf}} | {{source}} |

---

## 4. Decision Points

| At Step | Condition | Branch A (if true) | Branch B (if false) | Conf. | Source |
|:-------:|-----------|---------------------|---------------------|:-----:|--------|
| {{#}} | {{condition to evaluate}} | {{action / goto step}} | {{action / goto step}} | {{conf}} | {{source}} |

> If no decision points exist, state: "No decision points identified in this process."

---

## 5. Exceptions & Edge Cases

| ID | Trigger / Symptom | Frequency | Current Workaround | Severity | Conf. |
|----|-------------------|-----------|--------------------|---------:|:-----:|
| EX-01 | {{what goes wrong}} | {{rare / occasional / frequent}} | {{how it is handled today}} | {{low/med/high/critical}} | {{conf}} |

---

## 6. Tools & Systems

| Tool/System | Version | Purpose in Process | Required/Optional | Access Request Method |
|---|---|---|---|---|
| {{name}} | {{version or N/A}} | {{what it does in the process}} | {{Required / Optional}} | {{how to get access}} |

---

## 7. Timing Data

| Step # | Estimated Duration | Variability | Notes |
|:------:|:------------------:|:-----------:|-------|
| {{#}} | {{PTxM}} | {{low / medium / high}} | {{any timing notes}} |

**Total Estimated Duration:** {{sum or range}}

> If timing data is unavailable, state: "Timing data not captured in this extraction. Recommend time-motion study."

---

## 8. Gaps & Verification Needed

> Items below the verification threshold (`0.8` by default) that require validation before SOP creation.

| Item | Current Confidence | What Is Missing | Recommended Verification Method |
|------|:------------------:|-----------------|-------------------------------|
| {{step or fact}} | {{score}} | {{what evidence would raise confidence}} | {{interview / observation / test / document review}} |

---

## 9. Conflicts

> Contradictory information found across sources. Both versions documented for resolution.

| Conflict ID | Topic | Version A | Source A | Version B | Source B | Resolution |
|:-----------:|-------|-----------|----------|-----------|----------|:----------:|
| C-01 | {{what conflicts}} | {{version}} | {{source}} | {{version}} | {{source}} | {{Pending / Resolved: version chosen}} |

> If no conflicts found, state: "No conflicting information identified across sources."

---

## 10. Source Provenance

| Source ID | Type | Description | Date | Reliability |
|:---------:|------|-------------|------|:-----------:|
| SRC-01 | {{Document / Interview / Observation / Log / Tribal}} | {{description}} | {{date}} | {{High / Medium / Low}} |

---

## Handoff Summary

| Check | Status |
|-------|:------:|
| All 10 sections populated | {{Yes / No (list missing)}} |
| Average confidence ≥ 0.7 | {{Yes / No (actual: X.XX)}} |
| All items below 0.8 listed in Gaps | {{Yes / No}} |
| Conflicts resolved or documented | {{Yes / No}} |
| Gaps explicitly listed | {{Yes / No}} |
| Target format identified | {{Human / ML / Both}} |

**Handoff Decision:** {{READY / READY WITH GAPS / INCOMPLETE}}

**Handoff To:** {{@sop-creator / @sop-ml-architect / Both}}

---

**Extractor Signature:** _________________________ **Date:** _______________

---

*Extraction Output Template v1.0. Based on Taiichi Ohno's Gemba methodology.*
*Template: extraction-output-template.md | SOP Factory | Synkra Hybrid*
