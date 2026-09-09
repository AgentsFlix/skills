# sop-auditar · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.3. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `sop-auditar.md` uma skill chamada sop-auditar. Quando eu pedir algo como "audita este SOP", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# PASSA OU NÃO PASSA · Dez dimensões, benchmark, conformidade e certificação

Um SOP pode existir e não servir. Esta skill pontua em dez dimensões, audita estrutura e conteúdo, compara com padrões (ISO 9001, FDA/GMP, Six Sigma, Toyota), checa conformidade e só emite certificação quando os gates passam. Depois da correção, re-audita e diz se fechou.

## When to Use

- Diga: "audita este SOP" (ou uma pasta inteira).
- NÃO use para criar SOP do zero (`sop-criar`); esta skill julga o que existe.

## Quick Reference

| procedimento | referência |
|---|---|
| analyze sop | `references/analyze-sop.md` |
| audit sop | `references/audit-sop.md` |
| audit batch | `references/audit-batch.md` |
| benchmark sop | `references/benchmark-sop.md` |
| compliance check | `references/compliance-check.md` |
| certify sop | `references/certify-sop.md` |
| re audit | `references/re-audit.md` |

| apoio | arquivo |
|---|---|
| checklist | `references/checklist-14-point-crosby-checklist.md` |
| template | `templates/audit-report-template.md` |
| template | `templates/sop-analysis-report-tmpl.md` |
| template | `templates/sop-scorecard-tmpl.md` |
| template | `templates/certification-template.md` |
| template | `templates/nonconformity-register-template.md` |
| rubrica/dado | `references/data-sop-scoring-rubric.yaml` |
| rubrica/dado | `references/data-verdict-thresholds.yaml` |
| rubrica/dado | `references/data-sop-standards-reference.yaml` |
| checklist | `references/checklist-sop-quality-checklist.md` |

## Procedure

1. Identifique o procedimento de auditoria pela tabela e leia Inputs e Prerequisites. Reuse o SOP e contexto já fornecidos; solicite só o que faltar. Cada pergunta aberta deve trazer exemplo baseado nesse contexto, ou hipotético identificado se não houver memória relevante.
2. Siga as fases da referência. Abra os arquivos de apoio listados; comandos/scripts do runtime de origem são etapas a executar manualmente, com limite declarado.
3. Pontue o SOP com `references/data-sop-scoring-rubric.yaml` e aplique `references/data-verdict-thresholds.yaml`, sem arredondar para aprovação.
4. Separe qualidade do relatório de auditoria das não conformidades do SOP auditado. Corrija erros do relatório; preserve falhas encontradas no SOP, evidências e gates abertos. Não modificar o SOP só para fazer o checklist passar.
5. Entregue relatório no template, checklist marcado item a item, veredito e plano de correção. Um SOP reprovado pode gerar uma auditoria completa e válida.
6. Avalie rotina: auditoria pontual não justifica CRON; revisão recorrente pode valer se houver mudança do processo ou obrigação definida. Se propuser, inclua agenda/fuso, dados, destino, silêncio e pausa. Ative só com autorização e agendador real.

## Pitfalls

- Certificar com gate aberto. Certificação só sai quando todos os gates passam; 'quase' é não.
- Pular `Prerequisites`. A referência pede acesso ao dono do processo por um motivo.
- Tratar script do runtime de origem como executável aqui. Faça a etapa e registre.

## Verification

1. O relatório segue o template de auditoria, seção por seção.
2. Cada dimensão tem nota e evidência do SOP auditado, ou limitação explicitamente declarada.
3. Cada item do checklist foi avaliado. Falhas do SOP permanecem visíveis e não impedem concluir o relatório; lacunas que impedem o julgamento tornam esse julgamento não verificado.
4. O veredito segue os limiares e gates da referência. Reprovação é resultado válido; certificação só com todos os gates pertinentes aprovados.
5. A resposta nomeia referência, evidências, correções propostas e avaliação de rotina. Não altera o SOP auditado para obter aprovação.

## Arquivos desta skill (incluídos abaixo)

- `references/analyze-sop.md`
- `references/audit-batch.md`
- `references/audit-sop.md`
- `references/benchmark-sop.md`
- `references/certify-sop.md`
- `references/checklist-14-point-crosby-checklist.md`
- `references/checklist-sop-quality-checklist.md`
- `references/compliance-check.md`
- `references/data-sop-scoring-rubric.yaml`
- `references/data-sop-standards-reference.yaml`
- `references/data-verdict-thresholds.yaml`
- `references/re-audit.md`
- `templates/audit-report-template.md`
- `templates/certification-template.md`
- `templates/nonconformity-register-template.md`
- `templates/sop-analysis-report-tmpl.md`
- `templates/sop-scorecard-tmpl.md`


---

## Referência: references/analyze-sop.md

# Task: Analyze & Grade SOP

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `analyze-sop` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-analyst` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: analyze-sop
name: "Analyze & Grade SOP"
category: analysis
agent: sop-analyst
elicit: false
autonomous: true
description: "Perform multi-dimensional analysis and scoring of an existing SOP across 10 quality dimensions. Produces a comprehensive report with weighted scores, gap detection, and prioritized remediation recommendations."
```

## Purpose

Evaluate an existing SOP against 10 quality dimensions derived from ISO 9001, FDA/GMP, Six Sigma, and Gawande's principles. This analysis produces a quantitative score (A through F), identifies specific gaps, and provides actionable remediation recommendations. The analysis is autonomous and does not require user input beyond the SOP file.

This is the foundational analysis task. For benchmarking against specific standards, use `benchmark-sop`. For full compliance audit, use `audit-sop`.

## Prerequisites

- [ ] SOP file exists and is readable
- [ ] SOP is in Markdown, YAML, or JSON format
- [ ] Scoring rubric (`sop-scoring-rubric.yaml`) accessible
- [ ] Confidence levels (`confidence-levels.yaml`) accessible

## Evidence Format Standard

Every score in the analysis report MUST be backed by at least one evidence citation. No exceptions.

**Citation Format:**
```
[MARKER] file:section — "observação ou texto citado"
```

**Examples:**
- `[DOC] create-sop.md:Procedure — "Step 3 uses passive voice: 'the form should be submitted'"` (documented finding)
- `[OBS] benchmark-sop.md:Prerequisites — missing compliance standard reference after line 12` (direct observation)
- `[INF] extract-sop.md:Error Handling — no escalation path defined, likely oversight given complexity` (inference)

**Minimum Citations Per Dimension:**
- `scoring_mode: full` → 2 citations minimum per dimension
- `scoring_mode: quick` → 1 citation minimum per dimension

**Confidence Floor for Scoring:**
- `[OBS]`, `[DOC]`, `[REP]`, `[COR]`, `[INF]` → valid for scoring (score >= 0.5)
- `[ASM]`, `[UNK]` → NOT valid for scoring. If only [ASM]/[UNK] evidence exists for a dimension, score it 0 and flag as insufficient evidence.

**Reference:** `sop-scoring-rubric.yaml → evidence_standard`, `confidence-levels.yaml`

## Invention Red Flags

The following phrases indicate unsupported claims when they appear in the report WITHOUT an accompanying `[MARKER]` citation. Their presence triggers VETO-ANL-006.

| Red Flag Phrase | Safe Alternative |
|----------------|------------------|
| "Geralmente se recomenda" | Cite the specific recommendation source with [DOC] or [REP] |
| "Best practices sugerem" | Name the standard and cite it: `[DOC] ISO-9001:7.5 — ...` |
| "Na minha experiência" | Replace with observed evidence: `[OBS] file:section — ...` |
| "É comum fazer" | Cite where this practice was observed: `[OBS]` or `[COR]` |
| "Experts concordam que" | Name the expert or source: `[DOC]` or `[REP]` |
| "Tipicamente" / "Normalmente" | State what was actually found: `[OBS]` or `[DOC]` |

**If you cannot cite it, do not claim it.** Declare `[UNK] — insufficient evidence` instead.

**Reference:** `sop-scoring-rubric.yaml → invention_red_flags`

## Inputs

```yaml
inputs:
  sop_file:
    type: filepath
    required: true
    description: "Path to the SOP file to analyze"

  scoring_mode:
    type: enum
    required: false
    default: full
    options: [full, quick]
    description: >
      full: Complete 10-dimension analysis with detailed report.
      quick: Abbreviated analysis focusing on top 5 dimensions (Clarity, Completeness, Executability, Error Handling, Compliance).
```

## 10-Dimension Scoring Rubric

```yaml
dimensions:
  1_clarity:
    name: "Clarity"
    weight: 0.10
    description: "How clear and understandable is the SOP?"
    signals:
      - flesch_kincaid_grade: "Target <= 8. Score: <=6=10, 7-8=8, 9-10=6, 11-12=4, >12=2"
      - jargon_density: "Undefined terms per 100 words. Score: 0=10, 1-2=8, 3-5=5, >5=2"
      - passive_voice_pct: "% of passive voice sentences. Score: 0-5%=10, 6-15%=7, 16-30%=4, >30%=1"
      - sentence_length: "Avg words per sentence. Score: <=15=10, 16-20=7, 21-25=4, >25=1"
      - action_verb_usage: "% of procedure steps starting with action verb. Score: 100%=10, 90-99%=8, 70-89%=5, <70%=2"

  2_completeness:
    name: "Completeness"
    weight: 0.15
    description: "Are all expected sections and information present?"
    signals:
      - sections_present: "FDA/GMP sections present / 11 total. Score proportional."
      - edge_cases: "Exception paths documented. Score: all=10, most=7, some=4, none=1"
      - inputs_outputs: "Defined and typed. Score: both complete=10, partial=5, missing=1"
      - roles_defined: "All actors identified with responsibilities. Score: RACI=10, roles only=6, none=1"
      - scope_boundaries: "Scope + out-of-scope defined. Score: both=10, scope only=5, neither=1"

  3_executability:
    name: "Executability"
    weight: 0.15
    description: "Can someone execute this SOP without additional information?"
    signals:
      - action_verbs: "Every step starts with verb. Score: 100%=10, 90%=8, 70%=5, <70%=2"
      - atomic_steps: "One action per step. Score: 100%=10, 90%=8, 70%=5, <70%=2"
      - expected_outcomes: "Steps include expected result. Score: all critical=10, most=7, few=3, none=1"
      - tools_specified: "Required tools/systems named. Score: all=10, most=7, some=4, none=1"
      - sequence_clarity: "Step ordering is unambiguous. Score: numbered+logical=10, numbered=7, bullets=4, prose=1"

  4_measurability:
    name: "Measurability"
    weight: 0.10
    description: "Can process performance be measured?"
    signals:
      - kpis_defined: "Performance indicators present. Score: >=3 KPIs=10, 1-2=6, none=1"
      - success_criteria: "Defined completion conditions. Score: quantitative=10, qualitative=5, none=1"
      - time_estimates: "Duration per step or phase. Score: per step=10, per phase=7, total only=4, none=1"
      - quality_metrics: "Acceptance thresholds defined. Score: quantitative=10, qualitative=5, none=1"

  5_compliance:
    name: "Compliance"
    weight: 0.10
    description: "Does the SOP meet regulatory and standard requirements?"
    signals:
      - standard_alignment: "Aligned to stated standard. Score: fully=10, mostly=7, partially=4, not=1"
      - document_control: "Version, date, author, approver. Score: all 4=10, 3=7, 2=4, <2=1"
      - review_cycle: "Scheduled review defined. Score: specific date=10, general policy=5, none=1"
      - training_requirements: "Training documented. Score: detailed plan=10, mentioned=5, none=1"
      - record_keeping: "Documentation requirements stated. Score: detailed=10, mentioned=5, none=1"

  6_maintainability:
    name: "Maintainability"
    weight: 0.10
    description: "How easy is this SOP to update and manage?"
    signals:
      - version_history: "Change log present. Score: detailed=10, basic=5, none=1"
      - review_date: "Next review date specified. Score: specific=10, policy ref=5, none=1"
      - owner_defined: "Process owner identified. Score: named person=10, role=7, department=4, none=1"
      - modular_structure: "Sections independent and reusable. Score: highly modular=10, somewhat=5, monolithic=1"
      - change_process: "How to propose changes documented. Score: detailed=10, mentioned=5, none=1"

  7_accessibility:
    name: "Accessibility"
    weight: 0.10
    description: "How easy is the SOP to find, navigate, and use?"
    signals:
      - table_of_contents: "TOC or navigation aids. Score: linked TOC=10, TOC=7, headings only=4, none=1"
      - formatting: "Consistent headings, lists, tables. Score: excellent=10, good=7, fair=4, poor=1"
      - searchability: "Keywords, tags, metadata. Score: rich metadata=10, some=5, none=1"
      - length_appropriateness: "Not too long, not too short. Score: right-sized=10, slightly off=7, too long/short=3"
      - visual_hierarchy: "Information priority clear. Score: excellent=10, good=7, fair=4, poor=1"

  8_error_handling:
    name: "Error Handling"
    weight: 0.10
    description: "How well does the SOP handle exceptions and failures?"
    signals:
      - exception_paths: "Error scenarios documented. Score: comprehensive=10, common errors=7, minimal=4, none=1"
      - troubleshooting: "Troubleshooting section present. Score: detailed table=10, section=7, inline=4, none=1"
      - escalation: "Escalation path defined. Score: with contacts+criteria=10, general=5, none=1"
      - recovery: "Recovery procedures. Score: per error type=10, general=5, none=1"
      - prevention: "Preventive measures documented. Score: detailed=10, mentioned=5, none=1"

  9_visual_design:
    name: "Visual Design"
    weight: 0.05
    description: "Does the SOP use visual aids effectively?"
    signals:
      - flowcharts: "Process flowchart present. Score: detailed+clear=10, basic=7, none=1"
      - decision_trees: "Decision logic visualized. Score: for all decisions=10, some=5, none=1"
      - tables: "Data in tables vs prose. Score: all tabular data in tables=10, some=5, all prose=1"
      - diagrams: "Supporting diagrams. Score: relevant diagrams=10, some=5, none=1"
      - consistent_style: "Visual consistency. Score: uniform style=10, mostly=7, inconsistent=3"

  10_ai_readiness:
    name: "AI-Readiness"
    weight: 0.05
    description: "Could this SOP be converted to ML format without major rewrite?"
    signals:
      - structured_data: "Inputs/outputs as typed data. Score: fully typed=10, partially=5, prose only=1"
      - decision_logic: "Decision points as explicit conditions. Score: IF/THEN=10, implied=5, narrative=1"
      - tool_references: "Tools named specifically. Score: tool+action=10, tool only=5, vague=1"
      - step_atomicity: "Steps are atomic/parseable. Score: all atomic=10, most=7, few=3"
      - metadata_present: "YAML front matter or structured header. Score: rich=10, basic=5, none=1"

grade_scale:
  A: { min: 90, max: 100, label: "Excellent - Production ready" }
  B: { min: 80, max: 89, label: "Good - Minor improvements needed" }
  C: { min: 70, max: 79, label: "Acceptable - Significant improvements recommended" }
  D: { min: 60, max: 69, label: "Below Standard - Major revision required" }
  F: { min: 0, max: 59, label: "Failing - Complete rewrite recommended" }
```

## Workflow / Steps

### 1. Ingest SOP

```
ACTION: Read and parse the SOP file

DETECT:
  - File format (Markdown, YAML, JSON)
  - Presence of YAML front matter
  - Section structure and hierarchy
  - Total word count and step count

STORE: sop_content = {
  raw_text, format, sections[], steps[],
  word_count, step_count, has_front_matter
}
```

### 2. Structural Analysis

```
ACTION: Check all expected sections against FDA/GMP template

MAP each found section to expected 11 sections:
  1. Header Block
  2. Purpose
  3. Scope
  4. Definitions
  5. Responsibilities (RACI)
  6. Materials & Equipment
  7. Procedure
  8. Error Handling
  9. Quality Control
  10. References
  11. Revision History

OUTPUT: structural_report = {
  sections_found: <count>/11,
  missing_sections: [<names>],
  extra_sections: [<names>],
  section_quality: { <section>: <brief assessment> }
}
```

### 3. Content Analysis

```
ACTION: Analyze content quality signals

MEASURES:
  a) Readability
     - Calculate Flesch-Kincaid grade level (approximate)
     - Count average sentence length
     - Identify passive voice instances
     - Count undefined jargon/acronyms

  b) Action Verb Analysis
     - Check each procedure step for leading action verb
     - List steps without action verbs
     - Identify compound steps (multiple actions)

  c) Completeness Check
     - Are inputs defined?
     - Are outputs defined?
     - Are roles assigned?
     - Are tools specified?
     - Are time estimates present?
     - Are edge cases covered?

OUTPUT: content_report = {
  readability_grade, passive_voice_pct,
  action_verb_pct, compound_step_count,
  completeness_score, missing_elements[]
}
```

### 4. Dimensional Scoring

```
ACTION: Score across all 10 dimensions using the rubric above

FOR EACH dimension:
  1. Evaluate each signal (1-10 scale)
  2. Calculate dimension average
  3. Apply dimension weight
  4. Record evidence using citation format: [MARKER] file:section — "observation"
     - Minimum citations: full=2, quick=1 per dimension
     - Valid markers: [OBS], [DOC], [REP], [COR], [INF] (score >= 0.5)
     - Invalid for scoring: [ASM], [UNK] — score dimension 0 if only these exist
     - CHECK: VETO-ANL-005 triggers if any dimension has zero citations

CALCULATE:
  total_weighted_score = SUM(dimension_score * weight) for all 10 dimensions
  grade = map to A/B/C/D/F scale

OUTPUT: scores = {
  dimensions: {
    clarity: { score: X, weighted: X, evidence: "..." },
    completeness: { score: X, weighted: X, evidence: "..." },
    ...
  },
  total_score: <0-100>,
  grade: "<A|B|C|D|F>",
  grade_label: "<description>"
}
```

### 5. Gap Detection

```
ACTION: Identify specific gaps, ambiguities, and risks

CATEGORIES:
  - MISSING: Required elements that are absent
  - AMBIGUOUS: Statements that could be interpreted multiple ways
  - INCOMPLETE: Sections present but insufficient
  - INCONSISTENT: Contradictions between sections
  - DEAD_END: Process paths with no defined outcome
  - RISK: Safety, compliance, or quality risks from gaps

FORMAT per gap:
  - id: "GAP-{N}"
    category: "<category>"
    location: "<section/step reference>"
    description: "<what is wrong>"
    impact: "high|medium|low"
    dimension_affected: "<dimension name>"
```

### 6. Remediation Recommendations

```
ACTION: Generate prioritized improvement recommendations

FOR EACH gap:
  - Specific fix description
  - Example of correct implementation
  - Effort estimate (quick-fix / moderate / major)
  - Priority (P1: must fix / P2: should fix / P3: nice to have)

PRIORITIZATION:
  P1: Safety, compliance, or executability gaps (score < 5 on critical dimensions)
  P2: Completeness, measurability, error handling gaps (score 5-7)
  P3: Visual design, accessibility, AI-readiness improvements (score 5-7)

OUTPUT: remediation_plan = [
  { priority, gap_id, fix_description, example, effort, improvement_source }
]

NOTE: improvement_source is REQUIRED for every remediation item.
  Format: [SOURCE: file_path:section] — e.g., [SOURCE: sop-scoring-rubric.yaml:DIM-03]
  VETO-ANL-007 blocks report generation if any improvement_source is empty.
```

### 7. Generate Report

```
ACTION: Compile full analysis report

STRUCTURE:
  # SOP Analysis Report: {SOP Name}

  ## Executive Summary
  - Overall Grade: {grade} ({score}/100)
  - Key Strengths (top 3 dimensions)
  - Critical Gaps (top 3 issues)

  ## Scorecard
  | Dimension | Weight | Score | Weighted | Grade |
  |-----------|--------|-------|----------|-------|
  | Clarity | 10% | X/10 | X.X | A-F |
  | ... | ... | ... | ... | ... |
  | **TOTAL** | **100%** | | **X.X** | **{grade}** |

  ## Dimensional Analysis
  ### 1. Clarity (Score: X/10)
  - Evidence: ...
  - Gaps: ...
  - Recommendation: ...
  [repeat for all 10 dimensions]

  ## Gap Inventory
  | ID | Category | Location | Impact | Fix Priority |
  [all gaps]

  ## Remediation Plan
  ### Priority 1 (Must Fix)
  ...
  ### Priority 2 (Should Fix)
  ...
  ### Priority 3 (Nice to Have)
  ...

  ## Metadata
  - Analyzed: {date}
  - Analyzer: sop-analyst
  - Scoring Mode: {full|quick}
  - SOP Word Count: {count}
  - SOP Step Count: {count}

FILE: outputs/hybrid-sop/analysis/{sop-name}-analysis.md
```

## Output

```yaml
outputs:
  primary:
    path: "outputs/hybrid-sop/analysis/{sop-name}-analysis.md"
    format: markdown
    description: "Comprehensive analysis report with scorecard, gaps, and remediation plan"

  metadata:
    total_score: "<0-100>"
    grade: "<A|B|C|D|F>"
    gap_count: "<number>"
    p1_issues: "<number>"
    dimensions_analyzed: 10
    scoring_mode: "<full|quick>"
```

## Acceptance Criteria

- [ ] All 10 dimensions are scored (or top 5 in quick mode)
- [ ] Total weighted score is calculated correctly
- [ ] Letter grade is assigned matching the scale
- [ ] Every dimension has specific evidence supporting the score
- [ ] All gaps are categorized and assigned impact levels
- [ ] Remediation recommendations are specific (not generic advice)
- [ ] Each recommendation includes a concrete example
- [ ] Priorities are assigned (P1/P2/P3) based on impact
- [ ] Executive summary highlights top 3 strengths and top 3 gaps
- [ ] Report includes metadata (date, word count, step count)
- [ ] Every evidence citation follows `[MARKER] file:section` format (per `evidence_standard`)
- [ ] Every remediation has non-empty `improvement_source` field (per VETO-ANL-007)

## Veto Conditions

- STOP if the input file is not an SOP (e.g., it is code, configuration, or unrelated document)
- STOP if the file is empty or contains fewer than 50 words
- STOP if the file format cannot be parsed (corrupted or binary)
- STOP if scoring rubric data file is unavailable and cannot be applied from embedded rubric
- `VETO-ANL-005`: STOP if any scored dimension has zero evidence citations. Every dimension MUST have at least one `[MARKER] file:section` citation. Mirror of `WF-AUDIT-VETO-002`. If you cannot find evidence, score the dimension 0 and mark `[UNK]`.
- `VETO-ANL-006`: STOP if the report contains any invention red flag phrase (see `sop-scoring-rubric.yaml → invention_red_flags`) without an accompanying `[MARKER]` citation on the same finding. Remove the phrase or add a citation.
- `VETO-ANL-007`: STOP if the `improvement_source` field of any remediation recommendation is empty. Every recommendation MUST trace to a specific source: `[SOURCE: file_path:section]`.
- `VETO-ANL-008`: STOP if `scoring_mode=full` and more than 3 dimensions have ONLY `[INF]` evidence (no `[OBS]`, `[DOC]`, `[REP]`, or `[COR]`). Escalate to `scoring_mode=quick` or request additional source material from the user.


---

## Referência: references/audit-batch.md

# Task: Batch SOP Audit

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `audit-batch` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-auditor` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: audit-batch
name: "Batch SOP Audit"
category: audit
agent: sop-auditor
elicit: true
autonomous: false
description: "Audit multiple SOPs in a folder at once. Produces individual quick-audit scores, comparative rankings, pattern analysis across SOPs, and a dashboard with overall organizational SOP health score."
```

## Purpose

Assess the overall health of an organization's SOP collection. Rather than auditing one document at a time, this task scans an entire folder of SOPs, runs streamlined audits on each, then performs cross-document analysis to identify systemic patterns. The output is a dashboard that gives management a single-glance view of SOP quality across the organization, with drill-down capability into individual documents and common issues.

This is the "organizational health check" for process documentation. It answers: "How good are our SOPs overall, where are the weakest areas, and what systemic issues should we address?"

## Prerequisites

- [ ] SOP folder exists with at least 2 SOP files
- [ ] Files in the folder are in supported formats (Markdown, YAML, JSON)
- [ ] Compliance standard identified (if checking compliance)

## Inputs

```yaml
inputs:
  sop_folder:
    type: filepath
    required: true
    description: "Path to the folder containing SOP files to audit. All .md, .yaml, .yml, and .json files in this folder will be scanned."

  compliance_standard:
    type: enum
    required: false
    options: [iso-9001, fda-gmp, osha, none]
    description: "Compliance standard to check all SOPs against. If 'none' or omitted, only general quality is assessed."

  output_format:
    type: enum
    required: false
    default: summary
    options: [summary, detailed]
    description: >
      summary: Dashboard with scores and top issues per SOP (faster).
      detailed: Full individual audit reports plus dashboard (slower, more comprehensive).
```

## Workflow / Steps

### 1. Discover SOPs

```
ELICIT from user:
  1. What folder contains the SOPs to audit?
  2. Should all files be included, or only specific ones?
  3. What compliance standard should be checked (if any)?
  4. Do you want summary or detailed output?

ACTION: Scan the specified folder for SOP files

SCAN RULES:
  - Include: *.md, *.yaml, *.yml, *.json files
  - Exclude: Files starting with _ (underscore) or . (dot)
  - Exclude: README.md, CHANGELOG.md, LICENSE.md
  - Exclude: Files smaller than 100 bytes (likely empty)

FOR EACH discovered file:
  - Verify it appears to be an SOP (has procedure/steps content)
  - Record file name, size, last modified date
  - Classify format (human-md, yaml, json)

OUTPUT: sop_inventory = [
  {
    file: "<filename>",
    path: "<full path>",
    format: "<human-md|yaml|json>",
    size: <bytes>,
    modified: "<date>",
    appears_valid: <true|false>
  }
]

REPORT: "{count} SOP files discovered, {valid_count} appear valid"
```

### 2. Quick-Audit Each

```
ACTION: Run a streamlined audit on each discovered SOP

QUICK-AUDIT SCOPE (subset of full audit-sop):
  a) Structural Check (30% weight)
     - Count of expected sections present / 11
     - Metadata completeness (version, date, author, approver)
     - Formatting consistency

  b) Content Check (30% weight)
     - Action verb usage in procedure steps
     - Readability grade estimate
     - Step count and atomicity
     - Decision points identified

  c) Compliance Spot-Check (20% weight, if standard specified)
     - Top 5 most critical requirements from the standard
     - Quick pass/fail for each

  d) Crosby Spot-Check (20% weight)
     - Top 5 most impactful Crosby points:
       1. Management Commitment (owner defined?)
       7. Zero Defects Planning (unambiguous steps?)
       6. Corrective Action (error handling?)
       14. Do It Over Again (review cycle?)
       8. Employee Education (training requirements?)

SCORING:
  quick_score = (structural * 0.30) + (content * 0.30) + (compliance * 0.20) + (crosby * 0.20)

VERDICT (same scale as full audit):
  >= 90: CERTIFIED
  >= 75: APPROVED
  >= 60: CONDITIONAL
  < 60: REJECTED

FOR EACH SOP, produce:
  quick_audit = {
    file: "<filename>",
    score: <0-100>,
    verdict: "<verdict>",
    structural_score: <0-100>,
    content_score: <0-100>,
    compliance_score: <0-100>,
    crosby_score: <0-100>,
    top_issues: [<top 3 findings>],
    strengths: [<top 2 strengths>]
  }

ESTIMATED TIME: ~2 minutes per SOP (vs ~10 minutes for full audit)
```

### 3. Comparative Scoring

```
ACTION: Rank all SOPs and produce comparative analysis

RANKINGS:
  a) Overall Score Ranking
     | Rank | SOP Name | Score | Verdict | Top Issue |
     |------|----------|-------|---------|-----------|
     | 1 | best-sop.md | 95 | CERTIFIED | Minor formatting |
     | 2 | good-sop.md | 82 | APPROVED | Missing error handling |
     | ... | ... | ... | ... | ... |
     | N | worst-sop.md | 45 | REJECTED | Missing 6/11 sections |

  b) Per-Dimension Rankings
     - Best/worst for structural quality
     - Best/worst for content quality
     - Best/worst for compliance
     - Best/worst for Crosby assessment

  c) Distribution Analysis
     | Verdict | Count | Percentage |
     |---------|-------|------------|
     | CERTIFIED | X | X% |
     | APPROVED | X | X% |
     | CONDITIONAL | X | X% |
     | REJECTED | X | X% |

  d) Score Statistics
     - Mean score: X
     - Median score: X
     - Standard deviation: X
     - Min/Max: X / X

OUTPUT: comparative_analysis with all rankings and statistics
```

### 4. Identify Patterns

```
ACTION: Analyze common issues across all SOPs

PATTERN DETECTION:
  a) Systemic Missing Sections
     - Which sections are most commonly missing?
     - "Error Handling is missing in 70% of SOPs" -> systemic issue

  b) Common Content Issues
     - Recurring readability problems
     - Consistently missing RACI
     - Widespread ambiguous language
     - Common absence of visual elements

  c) Compliance Patterns
     - Which compliance requirements are universally unmet?
     - Which are universally met?
     - Cluster by compliance area

  d) Quality Trends
     - Are newer SOPs better than older ones? (by modified date)
     - Are certain categories/departments better than others?
     - Is there a correlation between SOP length and quality?

  e) Positive Patterns
     - What do the top-scoring SOPs have in common?
     - Best practices already in use that should be standardized

OUTPUT: patterns = {
  systemic_issues: [
    {
      issue: "<description>",
      frequency: "<% of SOPs affected>",
      affected_sops: [<filenames>],
      impact: "high|medium|low",
      recommendation: "<systemic fix>"
    }
  ],
  positive_patterns: [
    {
      pattern: "<description>",
      exemplar_sops: [<filenames>],
      recommendation: "<standardize this>"
    }
  ],
  trends: [<trend observations>]
}
```

### 5. Generate Dashboard

```
ACTION: Compile the batch audit dashboard report

DASHBOARD STRUCTURE:

  # SOP Batch Audit Dashboard
  ## Date: {date} | SOPs Audited: {count} | Standard: {standard or 'General Quality'}

  ### Organization SOP Health Score: {average score}/100 ({overall grade})

  #### Health Indicator
  ```
  [==========>          ] 72/100 - CONDITIONAL
  ```

  ### Verdict Distribution
  | Verdict | Count | % | Visual |
  |---------|-------|---|--------|
  | CERTIFIED | X | X% | ████████░░ |
  | APPROVED | X | X% | ██████░░░░ |
  | CONDITIONAL | X | X% | ████░░░░░░ |
  | REJECTED | X | X% | ██░░░░░░░░ |

  ### Score Heatmap
  | SOP | Structure | Content | Compliance | Crosby | TOTAL | Verdict |
  |-----|-----------|---------|------------|--------|-------|---------|
  | sop-a.md | 90 | 85 | 80 | 75 | 83 | APPROVED |
  | sop-b.md | 70 | 60 | 55 | 50 | 59 | REJECTED |
  | ... | ... | ... | ... | ... | ... | ... |

  ### Top 5 Systemic Issues
  | # | Issue | Affected SOPs | Impact | Fix Priority |
  |---|-------|--------------|--------|-------------|
  | 1 | Missing error handling | 8/12 (67%) | HIGH | P1 |
  | 2 | No RACI defined | 7/12 (58%) | HIGH | P1 |
  | ... | ... | ... | ... | ... |

  ### Best Practices Identified
  - {exemplar SOP} demonstrates excellent {pattern}
  - ...

  ### Recommendations
  #### Immediate Actions (P1)
  - ...
  #### Short-Term (P2, within 30 days)
  - ...
  #### Long-Term (P3, within 90 days)
  - ...

  ### Individual SOP Summaries
  [For each SOP: score, verdict, top 3 issues, top 2 strengths]

  ### Appendix: Full Rankings
  [Complete sorted list]

FILE: outputs/hybrid-sop/audits/batch-audit-dashboard-{date}.md

IF output_format == "detailed":
  ALSO generate individual audit reports per SOP in:
  outputs/hybrid-sop/audits/individual/{sop-name}-quick-audit.md
```

## Output

```yaml
outputs:
  primary:
    path: "outputs/hybrid-sop/audits/batch-audit-dashboard-{date}.md"
    format: markdown
    description: "Batch audit dashboard with organizational health score, heatmap, rankings, patterns, and recommendations"

  secondary:
    - path: "outputs/hybrid-sop/audits/individual/{sop-name}-quick-audit.md"
      format: markdown
      description: "Individual quick-audit report per SOP (only if output_format == 'detailed')"
      condition: "output_format == detailed"

  metadata:
    sops_discovered: "<number>"
    sops_audited: "<number>"
    sops_skipped: "<number (invalid files)>"
    org_health_score: "<0-100>"
    org_grade: "<A|B|C|D|F>"
    certified_count: "<number>"
    approved_count: "<number>"
    conditional_count: "<number>"
    rejected_count: "<number>"
    systemic_issues_count: "<number>"
    compliance_standard: "<standard or 'none'>"
    output_format: "<summary|detailed>"
```

## Acceptance Criteria

- [ ] Every SOP file in the folder is audited (or explicitly skipped with reason)
- [ ] Comparative rankings are generated (overall and per-dimension)
- [ ] Common/systemic issues are identified with frequency counts
- [ ] Organizational health score is calculated as weighted average
- [ ] Score heatmap table is generated with all SOPs and dimensions
- [ ] Verdict distribution shows count and percentage per verdict level
- [ ] Top systemic issues are prioritized with fix recommendations
- [ ] Positive patterns are identified from top-performing SOPs
- [ ] Dashboard fits in a single scrollable document
- [ ] Recommendations are actionable and prioritized (P1/P2/P3)

## Veto Conditions

- STOP if the specified folder does not exist or is empty
- STOP if no valid SOP files are found in the folder (all files are non-SOP)
- STOP if only 1 SOP is found (use `audit-sop` instead for single file)
- STOP if the folder contains more than 100 SOPs (break into batches to manage scope)
- STOP if file access permissions prevent reading any files in the folder


---

## Referência: references/audit-sop.md

# Task: Full SOP Audit

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `audit-sop` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-auditor` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: audit-sop
name: "Full SOP Audit"
category: audit
agent: sop-auditor
elicit: false
autonomous: true
description: "Comprehensive quality and compliance audit of an SOP. Performs structural, content, and compliance checks, risk assessment, and Philip Crosby's 14-Point Quality Assessment. Produces a verdict (CERTIFIED/APPROVED/CONDITIONAL/REJECTED) with detailed findings and remediation plan."
```

## Purpose

Perform a rigorous, multi-layered audit of an SOP to determine its fitness for production use. This goes beyond the analysis task (`analyze-sop`) by applying formal audit methodology: structural audit, content audit, compliance verification, risk assessment, and the Crosby 14-Point Assessment. The audit produces a formal verdict that can be used for document control and release decisions.

Philip Crosby's "Quality is Free" philosophy drives this audit: the cost of building quality into the SOP upfront is always less than the cost of non-conformance downstream. Every finding represents a potential cost of quality.

## Prerequisites

- [ ] SOP file exists and is readable
- [ ] Compliance standards specified (if applicable)
- [ ] Audit depth determined (standard or deep)

## Inputs

```yaml
inputs:
  sop_file:
    type: filepath
    required: true
    description: "Path to the SOP file to audit"

  compliance_standards:
    type: array
    items:
      type: enum
      options: [iso-9001, fda-gmp, osha]
    required: false
    description: "Compliance standards to check against. Multiple can be specified. If omitted, audit focuses on general quality only."

  audit_depth:
    type: enum
    required: false
    default: standard
    options: [standard, deep]
    description: >
      standard: Checks all sections, scores all dimensions, applies Crosby 14-point.
      deep: All of standard plus line-by-line content review, cross-reference verification, and exhaustive edge-case analysis.
```

## Philip Crosby 14-Point Quality Assessment

```yaml
crosby_14_points:
  1_management_commitment:
    question: "Is management commitment to quality evident?"
    audit_checks:
      - "Process owner is identified by name or role"
      - "Approver is identified (distinct from author)"
      - "Accountability chain is documented"
      - "Resource allocation is addressed"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  2_quality_improvement_team:
    question: "Is this SOP part of a managed documentation system?"
    audit_checks:
      - "SOP ID follows a numbering system"
      - "Referenced in a document registry or master list"
      - "Cross-references to related SOPs exist"
      - "Review/update responsibilities assigned"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  3_quality_measurement:
    question: "Are quality metrics and KPIs defined?"
    audit_checks:
      - "Process KPIs specified (cycle time, error rate, etc.)"
      - "Measurement methods described"
      - "Baseline values or targets provided"
      - "Monitoring frequency defined"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  4_cost_of_quality:
    question: "Is the impact of non-compliance assessed?"
    audit_checks:
      - "Business impact of errors described"
      - "Compliance risk identified"
      - "Customer impact addressed"
      - "Cost/time of rework mentioned"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  5_quality_awareness:
    question: "Is the SOP accessible to all stakeholders?"
    audit_checks:
      - "Distribution list or access method defined"
      - "Language appropriate for target audience"
      - "Available in required formats (digital, print)"
      - "Location/repository specified"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  6_corrective_action:
    question: "Are error handling and escalation paths defined?"
    audit_checks:
      - "Common failure modes documented"
      - "Corrective actions for each failure"
      - "Escalation criteria and contacts"
      - "Root cause analysis method referenced"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  7_zero_defects_planning:
    question: "Is the SOP designed for first-time-right execution?"
    audit_checks:
      - "Steps are unambiguous (no interpretation needed)"
      - "Prerequisites are explicitly stated"
      - "Verification points after critical steps"
      - "Common mistakes warned against"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  8_employee_education:
    question: "Are training requirements specified?"
    audit_checks:
      - "Required training or certifications listed"
      - "Competency assessment method defined"
      - "Training records requirements stated"
      - "Retraining triggers identified"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  9_zero_defects_day:
    question: "Is there a clear effective date and rollout plan?"
    audit_checks:
      - "Effective date specified"
      - "Supersedes previous version (if applicable)"
      - "Communication plan for rollout"
      - "Transition period defined (if applicable)"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  10_goal_setting:
    question: "Are success criteria and goals defined?"
    audit_checks:
      - "Process success criteria defined"
      - "Quality targets specified"
      - "Completion criteria clear"
      - "Performance benchmarks referenced"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  11_error_cause_removal:
    question: "Are root causes of errors addressed?"
    audit_checks:
      - "Known root causes documented"
      - "Preventive measures included"
      - "Error-proofing (poka-yoke) applied"
      - "Lessons learned incorporated"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  12_recognition:
    question: "Is there a feedback mechanism for improvements?"
    audit_checks:
      - "Feedback collection method specified"
      - "Suggestion process for improvements"
      - "Contact for questions/issues"
      - "Mechanism for reporting SOP defects"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  13_quality_councils:
    question: "Is there a review and approval workflow?"
    audit_checks:
      - "Author, reviewer, approver roles defined"
      - "Review criteria documented"
      - "Approval workflow specified"
      - "Multi-level review for critical SOPs"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"

  14_do_it_over_again:
    question: "Is a scheduled review cycle defined?"
    audit_checks:
      - "Review frequency specified (e.g., annual)"
      - "Next review date stated"
      - "Review triggers defined (regulatory change, incident, etc.)"
      - "Continuous improvement mechanism"
    scoring: "All checks = 10, 3/4 = 7, 2/4 = 4, <2 = 1"
```

## Verdict Scale

```yaml
source_of_truth: "data/verdict-thresholds.yaml"
note: "Do not redefine verdict bands here. Reuse the canonical contract file."
```

## Workflow / Steps

### 1. Ingest

```
ACTION: Read and parse the SOP file

EXTRACT:
  - File format and structure
  - Metadata (if YAML front matter or header present)
  - Section inventory
  - Word count, step count
  - Stated compliance standards
  - Stated audience and process owner

STORE: sop_data = {
  format, metadata, sections[], steps[],
  word_count, step_count,
  stated_compliance, audience, owner
}
```

### 2. Structural Audit

```
ACTION: Verify SOP structure against expected framework

CHECKS:
  a) Section Presence (FDA/GMP 11-section framework)
     - Header/metadata
     - Purpose
     - Scope
     - Definitions
     - Responsibilities
     - Materials/Equipment
     - Procedure
     - Error Handling
     - Quality Control
     - References
     - Revision History
     Score: (sections present / 11) * 10

  b) Section Ordering
     - Are sections in logical order?
     - Does information flow make sense?
     Score: correct order = 10, minor issues = 7, major issues = 3

  c) Formatting Consistency
     - Consistent heading levels
     - Consistent list formatting
     - Consistent table formatting
     - Consistent code block usage
     Score: fully consistent = 10, minor issues = 7, inconsistent = 3

  d) Completeness of Metadata
     - Version, date, author, approver all present
     - SOP ID present
     - Status field present
     Score: all present = 10, most = 7, few = 3

FINDING per issue: { id, type: "structural", severity, location, description, recommendation }
```

### 3. Content Audit

```
ACTION: Analyze content quality in depth

CHECKS:
  a) Procedure Step Quality
     - Action verbs present (% of steps)
     - Atomic steps (one action per step)
     - Expected outcomes stated
     - Ambiguous language detected
     Score: composite of sub-checks

  b) Clarity Assessment
     - Readability grade (Flesch-Kincaid estimate)
     - Passive voice percentage
     - Undefined jargon count
     - Average sentence length
     Score: based on analyze-sop rubric

  c) Completeness Assessment
     - All inputs defined
     - All outputs defined
     - All roles assigned
     - All tools specified
     - Edge cases addressed
     Score: composite

  d) Logical Integrity
     - No contradictions between sections
     - Decision points have all branches
     - No circular references
     - No dead-end paths
     Score: contradiction count drives score

  e) Deep Review (audit_depth == "deep" only)
     - Line-by-line content review
     - Cross-reference verification (do referenced docs exist?)
     - Terminology consistency across sections
     - Version history accuracy
     Score: additional findings

FINDING per issue: { id, type: "content", severity, location, description, recommendation }
```

### 4. Compliance Check

```
ACTION: Verify compliance with specified standards

IF compliance_standards provided:
  FOR EACH standard:
    - Load standard requirements (same as benchmark-sop)
    - Map each requirement to SOP content
    - Classify as COMPLIANT / PARTIAL / NON_COMPLIANT / N_A
    - Calculate compliance percentage

  AGGREGATE: overall_compliance = weighted average across standards

IF no compliance_standards:
  - Apply general document quality standards only
  - Note: "No compliance standards specified for this audit"

FINDING per issue: { id, type: "compliance", standard, req_id, severity, description, recommendation }
```

### 5. Risk Assessment

```
ACTION: Identify risks from SOP gaps

RISK CATEGORIES:
  a) Safety Risk
     - Missing safety warnings
     - Unclear hazard communication
     - No PPE requirements (for physical processes)
     - No emergency procedures

  b) Quality Risk
     - Missing verification steps
     - No acceptance criteria
     - Ambiguous instructions leading to variation
     - No error detection mechanism

  c) Compliance Risk
     - Missing required sections per standard
     - No document control
     - No training requirements
     - No audit trail

  d) Operational Risk
     - Single point of failure (one person dependency)
     - No backup procedures
     - No escalation path
     - Missing time constraints

FOR EACH risk:
  risk = {
    id: "RISK-{N}",
    category: "<safety|quality|compliance|operational>",
    description: "<what could go wrong>",
    likelihood: "high|medium|low",
    impact: "high|medium|low",
    risk_level: "<likelihood x impact matrix>",
    source_gap: "<finding ID>",
    mitigation: "<recommended action>"
  }

RISK MATRIX:
  | | High Impact | Medium Impact | Low Impact |
  |---|---|---|---|
  | High Likelihood | CRITICAL | HIGH | MEDIUM |
  | Medium Likelihood | HIGH | MEDIUM | LOW |
  | Low Likelihood | MEDIUM | LOW | LOW |
```

### 6. Crosby 14-Point Assessment

```
ACTION: Evaluate SOP against all 14 Crosby quality points

WORKSHEET:
  - Load checklists/14-point-crosby-checklist.md
  - Use the worksheet as the canonical capture format for evidence and point scores

FOR EACH of the 14 points:
  1. Run all audit checks for that point
  2. Score (1-10 scale)
  3. Document evidence (what was found)
  4. Document gaps (what was missing)
  5. Provide recommendation

CALCULATE: crosby_score = average of all 14 point scores * 10 (scale to 100)

OUTPUT: crosby_assessment = {
  points: [
    { point: 1, name: "Management Commitment", score: X, checks: [...], evidence: "...", gaps: "..." },
    ...
  ],
  total_score: <0-100>,
  summary: "<assessment summary>"
}
```

### 7. Verdict

```
ACTION: Calculate final audit score and assign verdict

SOURCE OF TRUTH:
  - Load data/verdict-thresholds.yaml
  - Use its component weights, verdict bands, and override rules

SCORING COMPONENTS:
  a) Structural Score (20% weight)
     - Section presence, ordering, formatting, metadata

  b) Content Score (30% weight)
     - Step quality, clarity, completeness, logical integrity

  c) Compliance Score (20% weight)
     - Per-standard compliance percentages (or general quality if no standards)

  d) Risk Score (15% weight)
     - Inverse of risk severity (fewer/lower risks = higher score)

  e) Crosby Score (15% weight)
     - 14-point assessment total

FINAL_SCORE = (structural * 0.20) + (content * 0.30) + (compliance * 0.20) + (risk * 0.15) + (crosby * 0.15)

VERDICT:
  >= 90: CERTIFIED
  >= 75: APPROVED
  >= 60: CONDITIONAL
  < 60: REJECTED

OVERRIDE RULES:
  - Any CRITICAL risk finding -> cannot be CERTIFIED (max APPROVED)
  - Any safety risk with high likelihood -> cannot be APPROVED (max CONDITIONAL)
  - Compliance score < 50% for any required standard -> cannot be APPROVED
```

### 8. Remediation Plan

```
ACTION: Compile prioritized remediation plan from all findings

STRUCTURE:
  Priority 1 - CRITICAL (Must fix before any use):
    - Safety risks
    - Critical compliance gaps
    - Showstopper ambiguities

  Priority 2 - HIGH (Fix within 14 days):
    - Major content gaps
    - Significant compliance issues
    - High-risk operational gaps

  Priority 3 - MEDIUM (Fix within 30 days):
    - Moderate content improvements
    - Missing best practices
    - Moderate risk items

  Priority 4 - LOW (Fix within 90 days):
    - Minor formatting issues
    - Nice-to-have enhancements
    - Low-risk items

FOR EACH finding:
  - Finding ID
  - Description
  - Current state (what exists)
  - Required state (what should exist)
  - Specific fix instructions
  - Effort estimate
  - Responsible role

GENERATE: Remediation checklist (checkboxes for tracking)
```

## Output

```yaml
outputs:
  primary:
    path: "outputs/hybrid-sop/audits/{sop-name}-audit-report.md"
    format: markdown
    description: "Complete audit report with verdict, scores, all findings, risk assessment, Crosby assessment, and remediation plan"

  metadata:
    verdict: "<CERTIFIED|APPROVED|CONDITIONAL|REJECTED>"
    final_score: "<0-100>"
    structural_score: "<0-100>"
    content_score: "<0-100>"
    compliance_score: "<0-100>"
    risk_score: "<0-100>"
    crosby_score: "<0-100>"
    total_findings: "<number>"
    critical_findings: "<number>"
    risks_identified: "<number>"
    compliance_standards_checked: ["<standards>"]
    audit_depth: "<standard|deep>"
```

## Acceptance Criteria

- [ ] All 14 Crosby points are assessed with scores and evidence
- [ ] Compliance checks are performed for every specified standard
- [ ] Risk assessment is completed with risk matrix classification
- [ ] Structural audit covers all 11 expected sections
- [ ] Content audit evaluates clarity, completeness, and logical integrity
- [ ] Final score is calculated with correct weighting
- [ ] Verdict is assigned per the scale and override rules
- [ ] Remediation plan includes specific fix instructions per finding
- [ ] Findings are prioritized (P1 through P4)
- [ ] Audit report includes executive summary suitable for management

## Veto Conditions

- STOP if the input file is not an SOP (wrong document type)
- STOP if the file is empty or unreadable
- STOP if compliance standards are specified but their requirements cannot be loaded
- STOP if the SOP is less than 100 words (insufficient content to audit)
- STOP if deep audit is requested but the SOP references external documents that cannot be accessed


---

## Referência: references/benchmark-sop.md

# Task: Benchmark SOP Against Standards

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `benchmark-sop` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-analyst` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: benchmark-sop
name: "Benchmark SOP Against Standards"
category: analysis
agent: sop-analyst
elicit: true
autonomous: false
description: "Compare an SOP against specific industry standards (ISO 9001, FDA/GMP, Six Sigma, Toyota Production System, Gawande Checklist Principles). Maps every standard requirement, calculates compliance percentage, and identifies gaps prioritized by severity."
```

## Purpose

Benchmark an existing SOP against one or more recognized process documentation standards. Unlike the general `analyze-sop` task which scores against internal quality dimensions, this task maps the SOP point-by-point against the requirements of a specific external standard. This is critical for organizations seeking certification, operating in regulated industries, or aiming to adopt best-in-class methodologies.

## Prerequisites

- [ ] SOP file exists and is accessible
- [ ] Target benchmark standard identified
- [ ] Standards reference data (`sop-standards-reference.yaml`) accessible

## Inputs

```yaml
inputs:
  sop_file:
    type: filepath
    required: true
    description: "Path to the SOP file to benchmark"

  benchmark_standard:
    type: enum
    required: true
    options: [iso-9001, fda-gmp, six-sigma, toyota, gawande, all]
    description: >
      Standard to benchmark against:
      - iso-9001: ISO 9001:2015 Quality Management Systems
      - fda-gmp: FDA 21 CFR Part 11 / Good Manufacturing Practice
      - six-sigma: Six Sigma DMAIC process documentation requirements
      - toyota: Toyota Production System standardized work principles
      - gawande: Atul Gawande's Checklist Manifesto principles
      - all: Benchmark against all standards (comprehensive)
```

## Standards Requirements Reference

### ISO 9001:2015 Requirements for Documented Procedures

```yaml
iso_9001:
  document_control:
    - req: "DOC-01"
      text: "Unique document identifier assigned"
      section: "7.5.2"
    - req: "DOC-02"
      text: "Version number and revision history maintained"
      section: "7.5.2"
    - req: "DOC-03"
      text: "Effective date specified"
      section: "7.5.2"
    - req: "DOC-04"
      text: "Author and approver identified"
      section: "7.5.2"
    - req: "DOC-05"
      text: "Review cycle and next review date defined"
      section: "7.5.2"
    - req: "DOC-06"
      text: "Distribution and access control specified"
      section: "7.5.3"

  process_approach:
    - req: "PROC-01"
      text: "Process inputs defined"
      section: "4.4.1"
    - req: "PROC-02"
      text: "Process outputs defined"
      section: "4.4.1"
    - req: "PROC-03"
      text: "Sequence and interaction of steps documented"
      section: "4.4.1"
    - req: "PROC-04"
      text: "Criteria and methods for process control defined"
      section: "4.4.1"
    - req: "PROC-05"
      text: "Resources required identified"
      section: "4.4.1"
    - req: "PROC-06"
      text: "Responsibilities and authorities assigned"
      section: "4.4.1"
    - req: "PROC-07"
      text: "Risks and opportunities addressed"
      section: "4.4.1"

  performance:
    - req: "PERF-01"
      text: "Monitoring and measurement methods defined"
      section: "9.1.1"
    - req: "PERF-02"
      text: "Performance indicators (KPIs) specified"
      section: "9.1.1"
    - req: "PERF-03"
      text: "Nonconformity and corrective action procedures"
      section: "10.2"

  improvement:
    - req: "IMP-01"
      text: "Continual improvement mechanism described"
      section: "10.3"
    - req: "IMP-02"
      text: "Feedback collection method specified"
      section: "10.3"
```

### FDA/GMP Requirements

```yaml
fda_gmp:
  structure:
    - req: "FDA-01"
      text: "Purpose statement present"
    - req: "FDA-02"
      text: "Scope clearly defined"
    - req: "FDA-03"
      text: "Definitions and abbreviations section"
    - req: "FDA-04"
      text: "Responsibilities section with named roles"
    - req: "FDA-05"
      text: "Materials and equipment listed"
    - req: "FDA-06"
      text: "Step-by-step procedure with numbered steps"
    - req: "FDA-07"
      text: "Quality control/verification section"
    - req: "FDA-08"
      text: "References and related documents"
    - req: "FDA-09"
      text: "Revision history with signatures"
    - req: "FDA-10"
      text: "Training requirements specified"
    - req: "FDA-11"
      text: "Record keeping requirements defined"

  compliance:
    - req: "FDA-12"
      text: "Electronic signature controls (21 CFR Part 11)"
    - req: "FDA-13"
      text: "Audit trail requirements"
    - req: "FDA-14"
      text: "Deviation handling procedures"
    - req: "FDA-15"
      text: "CAPA (Corrective and Preventive Action) integration"
```

### Toyota Production System (Standardized Work)

```yaml
toyota_tps:
  - req: "TPS-01"
    text: "Takt time defined (cycle time aligned to demand)"
  - req: "TPS-02"
    text: "Work sequence clearly specified"
  - req: "TPS-03"
    text: "Standard in-process stock defined"
  - req: "TPS-04"
    text: "Visual management elements present (diagrams, photos)"
  - req: "TPS-05"
    text: "One-point lessons for key skills"
  - req: "TPS-06"
    text: "Abnormality response defined (andon/escalation)"
  - req: "TPS-07"
    text: "Kaizen opportunities documented"
  - req: "TPS-08"
    text: "Gemba-verified (observed at the actual workplace)"
  - req: "TPS-09"
    text: "Waste categories addressed (muda, mura, muri)"
  - req: "TPS-10"
    text: "5S integration (Sort, Set, Shine, Standardize, Sustain)"
```

### Gawande Checklist Principles

```yaml
gawande:
  - req: "GAW-01"
    text: "Fits on one page (brevity)"
  - req: "GAW-02"
    text: "Each item is a single, verifiable action"
  - req: "GAW-03"
    text: "Pause points at critical junctures"
  - req: "GAW-04"
    text: "DO-CONFIRM or READ-DO format specified"
  - req: "GAW-05"
    text: "Tested in real-world conditions"
  - req: "GAW-06"
    text: "Revision date present"
  - req: "GAW-07"
    text: "No unnecessary explanation (reference SOP for detail)"
  - req: "GAW-08"
    text: "Kill items (things that MUST happen or process halts)"
```

### Six Sigma DMAIC Documentation

```yaml
six_sigma:
  - req: "SS-01"
    text: "Problem/process defined with CTQ (Critical to Quality)"
  - req: "SS-02"
    text: "Measurement system defined"
  - req: "SS-03"
    text: "Data collection plan specified"
  - req: "SS-04"
    text: "Root cause analysis methodology documented"
  - req: "SS-05"
    text: "Control plan for sustained performance"
  - req: "SS-06"
    text: "Statistical process control parameters"
  - req: "SS-07"
    text: "SIPOC (Supplier-Input-Process-Output-Customer) defined"
  - req: "SS-08"
    text: "Voice of Customer (VOC) integrated"
```

## Workflow / Steps

### 1. Select Standard

```
ACTION: Load benchmark criteria based on selected standard

IF benchmark_standard == "all":
  Load ALL standards (ISO 9001 + FDA/GMP + Six Sigma + Toyota + Gawande)
  total_requirements = sum of all requirements
ELSE:
  Load selected standard requirements
  total_requirements = count of requirements for that standard

STORE: benchmark_criteria = {
  standard: "<name>",
  requirements: [<loaded requirements>],
  total_count: <number>
}
```

### 2. Map Requirements

```
ACTION: Map each standard requirement to SOP content

FOR EACH requirement in benchmark_criteria:
  SEARCH SOP content for evidence of compliance
  CLASSIFY as:
    - COMPLIANT: Requirement fully met with clear evidence
    - PARTIAL: Requirement partially met (some elements present)
    - NON_COMPLIANT: Requirement not met (no evidence found)
    - NOT_APPLICABLE: Requirement does not apply to this process type

FORMAT per mapping:
  - req_id: "<requirement ID>"
    requirement: "<requirement text>"
    status: "<COMPLIANT|PARTIAL|NON_COMPLIANT|NOT_APPLICABLE>"
    evidence: "<specific section/text in SOP that addresses this>"
    gap_description: "<what is missing, if not fully compliant>"
    severity: "critical|major|minor"
```

### 3. Gap Analysis

```
ACTION: Analyze non-compliant and partial items

FOR EACH NON_COMPLIANT or PARTIAL item:
  - Describe specifically what is missing
  - Assess severity:
    * critical: Regulatory risk, safety impact, or audit finding
    * major: Significant quality or process impact
    * minor: Best practice gap, no immediate risk
  - Estimate effort to remediate:
    * quick_fix: < 30 minutes (add a section, define a term)
    * moderate: 1-4 hours (write a new section, create a diagram)
    * major: > 4 hours (significant rewrite, process redesign)

GROUP gaps by:
  - Standard section (document control, process, performance, etc.)
  - Severity (critical first)
```

### 4. Score Compliance

```
ACTION: Calculate compliance percentages

SCORING:
  - COMPLIANT = 1.0 point
  - PARTIAL = 0.5 point
  - NON_COMPLIANT = 0.0 points
  - NOT_APPLICABLE = excluded from calculation

PER SECTION:
  section_score = (points earned / applicable requirements) * 100%

OVERALL:
  total_score = (total points earned / total applicable requirements) * 100%

GRADE:
  >= 90%: "Highly Compliant" (Green)
  75-89%: "Substantially Compliant" (Yellow)
  60-74%: "Partially Compliant" (Orange)
  < 60%: "Non-Compliant" (Red)
```

### 5. Generate Benchmark Report

```
ACTION: Compile benchmark report with compliance heatmap

STRUCTURE:
  # SOP Benchmark Report: {SOP Name}
  ## Benchmark Standard: {standard name}

  ### Executive Summary
  - Overall Compliance: {percentage}% ({grade})
  - Requirements Assessed: {total}
  - Compliant: {count} | Partial: {count} | Non-Compliant: {count} | N/A: {count}
  - Critical Gaps: {count}

  ### Compliance Heatmap
  | Section | Requirements | Compliant | Partial | Non-Compliant | Score |
  |---------|-------------|-----------|---------|---------------|-------|
  | Document Control | X | X | X | X | XX% |
  | Process Approach | X | X | X | X | XX% |
  | ... | ... | ... | ... | ... | ... |
  | **TOTAL** | **X** | **X** | **X** | **X** | **XX%** |

  ### Detailed Findings
  #### Critical Gaps
  | Req ID | Requirement | Status | Gap | Remediation |
  ...

  #### Major Gaps
  ...

  #### Minor Gaps
  ...

  ### Remediation Roadmap
  #### Phase 1: Critical (Immediate)
  ...
  #### Phase 2: Major (Within 30 days)
  ...
  #### Phase 3: Minor (Within 90 days)
  ...

  ### Compliance Certification Statement
  Based on this assessment, the SOP is rated as: {grade}
  Next recommended review: {date}

FILE: outputs/hybrid-sop/analysis/{sop-name}-benchmark-{standard}.md
```

## Output

```yaml
outputs:
  primary:
    path: "outputs/hybrid-sop/analysis/{sop-name}-benchmark-{standard}.md"
    format: markdown
    description: "Benchmark report with compliance heatmap, findings, and remediation roadmap"

  metadata:
    standard: "<benchmark standard>"
    total_requirements: "<number>"
    compliance_percentage: "<number>"
    compliance_grade: "<Highly|Substantially|Partially|Non>-Compliant"
    critical_gaps: "<number>"
    major_gaps: "<number>"
    minor_gaps: "<number>"
```

## Acceptance Criteria

- [ ] Every requirement from the selected standard is mapped to the SOP
- [ ] Each mapping has a status (COMPLIANT, PARTIAL, NON_COMPLIANT, NOT_APPLICABLE)
- [ ] Each non-compliant item has specific evidence of what is missing
- [ ] Compliance percentage is calculated correctly per section and overall
- [ ] Gaps are prioritized by severity (critical, major, minor)
- [ ] Compliance heatmap table is generated with per-section scores
- [ ] Remediation roadmap is phased (immediate, 30 days, 90 days)
- [ ] Grade is assigned matching the compliance percentage scale
- [ ] Report includes specific, actionable remediation steps (not generic advice)

## Veto Conditions

- STOP if the input file is not an SOP
- STOP if the benchmark standard is specified but its requirements data cannot be loaded
- STOP if the SOP is in a format that cannot be meaningfully mapped to the standard (e.g., a raw YAML config file benchmarked against Gawande checklist principles)
- STOP if "all" standards are selected but fewer than 3 standards can be applied to the process type


---

## Referência: references/certify-sop.md

# Task: Certify SOP

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `certify-sop` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-auditor` |
| **Execution Type** | `Hybrid` |

## Metadata
```yaml
id: certify-sop
name: "Certify SOP"
category: audit
agent: sop-auditor
elicit: false
autonomous: false
description: "Issue a formal SOP certification only when audit gates pass. Validates score, open findings, and verdict before generating a signed certification artifact."
```

## Purpose

Formalize the final release gate for SOP publication.  
This task does not replace `audit-sop`; it consumes audit evidence and decides if the SOP can receive a certification stamp.  
Certification is granted only when quality and compliance conditions are objectively met.

## Prerequisites

- [ ] SOP file exists and is readable
- [ ] Audit evidence exists (`audit-sop` report or equivalent structured summary)
- [ ] No unresolved critical findings
- [ ] Certification thresholds approved for the target context

## Inputs

```yaml
inputs:
  sop_file:
    type: filepath
    required: true
    description: "Path to the SOP being certified"

  audit_report_file:
    type: filepath
    required: true
    description: "Path to the audit report generated by audit-sop (or equivalent report with verdict, score, and findings)"

  minimum_score:
    type: number
    required: false
    default: 90
    description: "Minimum score required for certification issuance"

  validity_days:
    type: number
    required: false
    default: 365
    description: "Certificate validity period in days"
```

## Certification Gates

```yaml
gates:
  gate_1_verdict:
    rule: "Audit verdict must be CERTIFIED"
    fail_action: "BLOCK certification"

  gate_2_score:
    rule: "Audit score >= minimum_score"
    fail_action: "BLOCK certification"

  gate_3_critical_findings:
    rule: "critical_open == 0"
    fail_action: "BLOCK certification"

  gate_4_major_findings:
    rule: "major_open == 0"
    fail_action: "BLOCK certification"

  gate_5_traceability:
    rule: "audit report references SOP version and audit date"
    fail_action: "BLOCK certification"
```

## Veto Conditions

| ID | Condition | Result |
|----|-----------|--------|
| VETO-CERT-001 | `audit_report_file` missing or unreadable | BLOCK |
| VETO-CERT-002 | Audit verdict is not `CERTIFIED` | BLOCK |
| VETO-CERT-003 | Critical findings > 0 | BLOCK |
| VETO-CERT-004 | Major findings > 0 | BLOCK |
| VETO-CERT-005 | Audit score below threshold | BLOCK |

## Workflow / Steps

### 1. Load Evidence

```
ACTION:
  - Read sop_file
  - Read audit_report_file
  - Extract audit metadata:
    * verdict
    * score
    * critical_open
    * major_open
    * audit_date
    * sop_version
```

### 2. Evaluate Gates

```
ACTION:
  - Evaluate all certification gates in sequence
  - Collect failed gates (if any)
  - If any gate fails -> set result = NOT_CERTIFIED
  - If all gates pass -> set result = CERTIFIED
```

### 3. Human Validation (Hybrid)

```
ACTION:
  - Present certification decision package to reviewer:
    * SOP ID/version
    * Audit score and verdict
    * Open findings summary
    * Certificate validity window
  - Reviewer chooses:
    * APPROVE_ISSUANCE
    * REJECT_ISSUANCE
```

### 4. Generate Certificate Artifact

```
IF result == CERTIFIED AND reviewer == APPROVE_ISSUANCE:
  - Generate certificate markdown artifact
  - Persist certificate metadata (issue date, expiry date, issuer, source audit)
  - Return CERTIFIED response with artifact path

ELSE:
  - Generate non-certification report with failed gates
  - Return NOT_CERTIFIED response with remediation actions
```

## Outputs

```yaml
outputs:
  certification_decision:
    type: enum
    values: [CERTIFIED, NOT_CERTIFIED]

  certificate_artifact:
    type: filepath
    when: "decision == CERTIFIED"
    pattern: "outputs/hybrid-sop/certificates/{sop-id}-certificate-{YYYYMMDD}.md"

  certification_report:
    type: filepath
    pattern: "outputs/hybrid-sop/certificates/{sop-id}-certification-report-{YYYYMMDD}.md"
```

## Acceptance Criteria

- [ ] Certification is never issued when any veto condition is true
- [ ] Decision is traceable to a specific audit report
- [ ] Certificate artifact includes SOP ID, version, score, verdict, issue date, expiry date
- [ ] Not-certified path includes explicit remediation actions
- [ ] Output path is deterministic and versioned by date

## Example Output (CERTIFIED)

```markdown
# SOP Certification

- SOP: customer-onboarding-sop
- Version: 1.4.0
- Audit Verdict: CERTIFIED
- Audit Score: 94
- Critical Open: 0
- Major Open: 0
- Issued At: 2026-03-09
- Expires At: 2027-03-09
- Issuer: sop-auditor
```


---

## Referência: references/checklist-14-point-crosby-checklist.md

# 14-Point Crosby Audit Checklist

> **Purpose:** Capture the Crosby portion of a full SOP audit. This worksheet
> scores each Crosby point and feeds the `crosby` component of `audit-sop`.
>
> **Important:** This checklist does **not** assign the final audit verdict by
> itself. Final verdict still comes from `audit-sop` using the full weighted
> score model in `data/verdict-thresholds.yaml`.
>
> **Scoring per point:** `10` when all checks pass, `7` when 3/4 checks pass,
> `4` when 2/4 checks pass, `1` when 0-1 checks pass.

| Field | Value |
|---|---|
| **Checklist ID** | QC-CROSBY-001 |
| **Purpose** | Score the Crosby component of a full SOP audit |
| **SOP Under Review** | ________________________ |
| **SOP Version** | ________________________ |
| **Auditor** | ________________________ |
| **Audit Date** | ________________________ |
| **Audit Type** | Initial / Re-Audit / Periodic |
| **Total Points** | 14 |

---

## Assessment

| # | Point | Weight | Checks Passed (0-4) | Point Score | Evidence Found | Finding / Notes |
|---|-------|--------|:-------------------:|:-----------:|----------------|-----------------|
| 1 | **Management Commitment** — Does the SOP have an identified owner and executive sponsor? | CRITICAL | ___ | ___ | | |
| 2 | **Quality Improvement Team** — Were appropriate SMEs involved in creation? | MAJOR | ___ | ___ | | |
| 3 | **Quality Measurement** — Does the SOP define measurable success criteria and KPIs? | CRITICAL | ___ | ___ | | |
| 4 | **Cost of Quality** — Are error consequences and recovery costs documented? | MAJOR | ___ | ___ | | |
| 5 | **Quality Awareness** — Is the SOP accessible and known to all required personnel? | MAJOR | ___ | ___ | | |
| 6 | **Corrective Action** — Does the SOP define corrective actions for nonconformities? | CRITICAL | ___ | ___ | | |
| 7 | **Zero Defects Planning** — Is the SOP designed to prevent errors, not just detect them? | CRITICAL | ___ | ___ | | |
| 8 | **Employee Education** — Does the SOP include or reference required training? | MAJOR | ___ | ___ | | |
| 9 | **Zero Defects Day** — Is there a defined effective date and rollout plan? | MINOR | ___ | ___ | | |
| 10 | **Goal Setting** — Does the SOP state clear objectives and expected outcomes? | MAJOR | ___ | ___ | | |
| 11 | **Error Cause Removal** — Does the SOP address root causes, not just symptoms? | MAJOR | ___ | ___ | | |
| 12 | **Recognition** — Does the SOP acknowledge roles via RACI and attribution? | MINOR | ___ | ___ | | |
| 13 | **Quality Councils** — Is there a defined review cycle and governance process? | MAJOR | ___ | ___ | | |
| 14 | **Do It Over Again** — Does the SOP support continuous improvement and iteration? | MINOR | ___ | ___ | | |

---

## Evidence Guide

| Point | Expected Evidence |
|---|---|
| 1 | Document owner field populated, approval signatures present |
| 2 | Author credentials, reviewer list, SME sign-off |
| 3 | Verification section with quantified acceptance thresholds |
| 4 | Error handling section with impact analysis |
| 5 | Distribution list, training records, accessibility audit |
| 6 | Error handling with root cause analysis and CAPA references |
| 7 | Prerequisites, validation steps, fool-proofing mechanisms |
| 8 | Prerequisites section with training requirements |
| 9 | Header with effective date, revision history with rollout |
| 10 | Purpose section with specific, measurable goals |
| 11 | Error handling with 5-Why or fishbone references |
| 12 | RACI matrix complete, revision history with author credits |
| 13 | Review date, revision schedule, governance body identified |
| 14 | Revision history, feedback mechanism, improvement triggers |

---

## Crosby Component Score

| Metric | Value |
|--------|-------|
| Point Scores Sum | _____ / 140 |
| Average Point Score | _____ / 10 |
| Crosby Component Score | _____ / 100 |

> Feed this score into the `crosby` component of the full audit. Do not issue a
> final verdict from this worksheet alone.

**Auditor Signature:** _________________________ **Date:** _______________

---

*14-Point Crosby Audit Checklist v1.1. Based on Philip Crosby's "Quality Is Free" framework.*
*Checklist: 14-point-crosby-checklist.md | SOP Factory | Synkra Hybrid*


---

## Referência: references/checklist-sop-quality-checklist.md

# SOP Quality Checklist

> **Purpose:** Evaluate the overall quality of a Standard Operating Procedure across 5 critical dimensions. Use this checklist during the SOP review gate before approval.
>
> **Scoring:** Check each item that passes. Calculate percentage per section and overall.
> - **90-100% APPROVED** — SOP meets quality standards, ready for deployment
> - **70-89% NEEDS REVISION** — SOP has gaps that must be addressed before approval
> - **<70% REDO** — SOP has fundamental issues and requires significant rework

| Field              | Value                           |
|--------------------|---------------------------------|
| **Checklist ID**   | QC-QUALITY-001                  |
| **Purpose**        | Evaluate overall quality of an SOP before approval |
| **SOP Under Review** | ________________________      |
| **SOP Version**    | ________________________        |
| **Reviewer**       | ________________________        |
| **Review Date**    | ________________________        |
| **Total Items**    | 31                              |

---

## Section 1: Structure & Format (8 items)

| #  | Item                                                                                                                          | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 1  | SOP has a unique ID following the naming convention (SOP-DEPT-SEQ-REV)                                                        | [ ]  | [ ]  | [ ] |       |
| 2  | Version number is present and follows semantic versioning or sequential format                                                 | [ ]  | [ ]  | [ ] |       |
| 3  | All required header fields are populated (ID, version, effective date, review date, classification, department, owner, approver, status) | [ ]  | [ ]  | [ ] |       |
| 4  | All 11 required sections are present (Header, Purpose & Scope, Definitions, RACI, Prerequisites, Procedure, Verification, Error Handling, Records, Revision History, Appendices) | [ ]  | [ ]  | [ ] |       |
| 5  | Sections are numbered sequentially and consistently                                                                            | [ ]  | [ ]  | [ ] |       |
| 6  | Tables are properly formatted with headers and alignment                                                                       | [ ]  | [ ]  | [ ] |       |
| 7  | Cross-references to other SOPs use correct IDs and are bidirectional                                                           | [ ]  | [ ]  | [ ] |       |
| 8  | Appendices are labeled (A, B, C...) and referenced from the Procedure section                                                  | [ ]  | [ ]  | [ ] |       |

**Section 1 Score:** _____ / 8 = _____%

---

## Section 2: Content Quality (10 items)

| #  | Item                                                                                                                          | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 9  | Purpose statement is concise (2-4 sentences) and starts with an action verb                                                    | [ ]  | [ ]  | [ ] |       |
| 10 | Scope clearly defines in-scope, out-of-scope, and applicable roles/departments                                                 | [ ]  | [ ]  | [ ] |       |
| 11 | Every technical term and abbreviation is defined in the Definitions section                                                     | [ ]  | [ ]  | [ ] |       |
| 12 | RACI matrix has exactly ONE "A" (Accountable) per activity row                                                                 | [ ]  | [ ]  | [ ] |       |
| 13 | Each procedure step contains exactly one action, written in imperative mood ("Open...", "Record...", "Verify...")               | [ ]  | [ ]  | [ ] |       |
| 14 | Decision points use explicit IF/THEN/ELSE logic with all branches covered including a default/fallback                         | [ ]  | [ ]  | [ ] |       |
| 15 | Critical steps are tagged with [CRITICAL] and include escalation paths                                                         | [ ]  | [ ]  | [ ] |       |
| 16 | Verification criteria are measurable with specific acceptable ranges or thresholds                                              | [ ]  | [ ]  | [ ] |       |
| 17 | Error handling covers at least the top 5 known failure modes with symptom, cause, corrective action, and escalation             | [ ]  | [ ]  | [ ] |       |
| 18 | Revision history includes all changes with version, date, author, and description                                              | [ ]  | [ ]  | [ ] |       |

**Section 2 Score:** _____ / 10 = _____%

---

## Section 3: Readability (5 items)

| #  | Item                                                                                                                          | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 19 | Average sentence length is 20 words or fewer per step                                                                          | [ ]  | [ ]  | [ ] |       |
| 20 | Reading level is appropriate for the target audience (Flesch-Kincaid Grade 8-10 for operators, 10-12 for technical staff)       | [ ]  | [ ]  | [ ] |       |
| 21 | No ambiguous pronouns (e.g., "it", "this", "they") without clear antecedents within the same sentence                         | [ ]  | [ ]  | [ ] |       |
| 22 | Consistent terminology throughout (same concept = same word, no synonyms for key terms)                                        | [ ]  | [ ]  | [ ] |       |
| 23 | Visual aids (flowcharts, diagrams, screenshots) are included where procedures have 3+ decision points or complex sequences     | [ ]  | [ ]  | [ ] |       |

**Section 3 Score:** _____ / 5 = _____%

---

## Section 4: Compliance & Governance (5 items)

| #  | Item                                                                                                                          | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 24 | Applicable regulatory references are cited (FDA, ISO, GMP, SOX, etc.) where applicable                                        | [ ]  | [ ]  | [ ] |       |
| 25 | Data integrity requirements follow ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate)               | [ ]  | [ ]  | [ ] |       |
| 26 | Record retention periods meet or exceed regulatory minimums                                                                     | [ ]  | [ ]  | [ ] |       |
| 27 | Review date is set per classification cycle (CRITICAL=6mo, MAJOR=12mo, STANDARD=18mo, INFORMATIONAL=24mo)                      | [ ]  | [ ]  | [ ] |       |
| 28 | Deviation/CAPA procedure is referenced with correct SOP ID and form references                                                 | [ ]  | [ ]  | [ ] |       |

**Section 4 Score:** _____ / 5 = _____%

---

## Section 5: Acid Tests (3 items)

> These are the ultimate quality gates. If ANY acid test fails, the SOP cannot be approved regardless of the overall score.

| #  | Test                     | Description                                                                                                                                                   | Pass | Fail | Notes |
|----|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|-------|
| 29 | **New Employee Test**    | Could a qualified new employee (with prerequisite training but no tribal knowledge) execute this SOP correctly on their first attempt without asking for help? | [ ]  | [ ]  |       |
| 30 | **Phone Test**           | Could someone follow this SOP correctly if read instructions over the phone (no visual aids, no pointing, no "you know what I mean")?                          | [ ]  | [ ]  |       |
| 31 | **Ambiguity Test**       | Read every step aloud. Does any step contain words like "appropriate", "as needed", "if necessary", "properly", "correctly", "ensure", "adequate", or "sufficient" without defining what those mean in context? If yes, FAIL. | [ ]  | [ ]  |       |

**Section 5 Score:** _____ / 3 = _____%

> **CRITICAL:** If any Acid Test fails, the verdict is automatically NEEDS REVISION (or REDO if 2+ fail), regardless of overall percentage.

---

## Scoring Summary

| Section                     | Items | Score      | Percentage |
|-----------------------------|:-----:|:----------:|:----------:|
| 1. Structure & Format       | 8     | _____ / 8  | _____%     |
| 2. Content Quality          | 10    | _____ / 10 | _____%     |
| 3. Readability              | 5     | _____ / 5  | _____%     |
| 4. Compliance & Governance  | 5     | _____ / 5  | _____%     |
| 5. Acid Tests               | 3     | _____ / 3  | _____%     |
| **TOTAL**                   | **31** | **_____ / 31** | **_____%** |

---

## Verdict

| Score Range | Verdict            | Action Required                                          |
|:-----------:|--------------------|----------------------------------------------------------|
| 90-100%     | **APPROVED**       | No changes required. Proceed to formal sign-off.          |
| 70-89%      | **NEEDS REVISION** | Address all FAIL items. Re-submit for targeted review.   |
| <70%        | **REDO**           | Fundamental quality issues. Return for comprehensive rewrite. |

**Final Verdict:** ___________________________

**Reviewer Comments:**

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

**Reviewer Signature:** _________________________ **Date:** _______________

---

*SOP Quality Checklist v2.0. Based on FDA/GMP best practices and The Checklist Manifesto (Gawande) principles.*
*Checklist: sop-quality-checklist.md | SOP Factory | Synkra Hybrid*


---

## Referência: references/compliance-check.md

# Task: Compliance Check

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `compliance-check` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-auditor` |
| **Execution Type** | `Hybrid` |

## Metadata
```yaml
id: compliance-check
name: "Compliance Check"
category: audit
agent: sop-auditor
elicit: false
autonomous: true
description: "Validate an SOP against a specific compliance standard (ISO 9001, FDA/GMP, or OSHA) and return requirement-level pass/fail evidence."
```

## Purpose

Run a focused compliance gate without executing the full multi-dimensional audit.
Useful when the main question is: "Does this SOP satisfy standard X right now?"

## Inputs

```yaml
inputs:
  sop_file:
    type: filepath
    required: true
  standard:
    type: enum
    required: true
    options: [iso-9001, fda-gmp, osha]
```

## Workflow / Steps

### 1. Parse SOP

```
ACTION:
  - Read SOP file
  - Extract sections, metadata, controls, and error-handling blocks
```

### 2. Load Requirement Set

```
ACTION:
  - Select requirement set by standard
  - Build checklist with ID + rule + evidence expectations
```

### 3. Evaluate Requirement-by-Requirement

```
ACTION:
  - For each requirement:
    * PASS when explicit evidence exists
    * FAIL when evidence absent
    * PARTIAL when weak/incomplete evidence exists
```

### 4. Output Compliance Report

```
OUTPUT:
  - compliance_score (0-100)
  - pass_count / fail_count / partial_count
  - failed_requirements[]
  - remediation_actions[]
```

## Acceptance Criteria

- [ ] Every requirement has explicit evidence or explicit fail reason
- [ ] Compliance score is reproducible from checklist counts
- [ ] Report includes prioritized remediation actions


---

## Referência: references/data-sop-scoring-rubric.yaml

# =============================================================================
# SOP Scoring Rubric - Master Reference
# =============================================================================
# Used by: sop-analyst (analyze-sop task)
# Version: 1.0.0
# Based on: Juran Quality Trilogy, Deming 14 Points, Crosby Zero Defects
#
# Scoring Philosophy:
#   Every score MUST be backed by evidence from the SOP being analyzed.
#   No score is valid without at least one citation. Scores reflect the
#   document's fitness for its stated purpose and audience.
#
# Grade Scale:
#   A+ = 95-100  |  A = 90-94  |  B+ = 85-89  |  B = 80-84
#   C+ = 75-79   |  C = 70-74  |  D = 60-69   |  F = 0-59
# =============================================================================

rubric:
  version: "1.0.0"
  total_weight: 100
  passing_score: 70
  certification_score: 90

  score_ranges:
    critical:
      range: "0-20"
      label: "Critical"
      description: "Fundamentally deficient. The SOP cannot be used in this dimension."
      action: "Immediate rewrite required for this dimension."
      color: "#DC2626"

    poor:
      range: "21-40"
      label: "Poor"
      description: "Significant deficiencies. Major gaps that create risk."
      action: "Major remediation required before use."
      color: "#EA580C"

    fair:
      range: "41-60"
      label: "Fair"
      description: "Partially adequate. Usable with significant caveats."
      action: "Targeted improvements needed within 30 days."
      color: "#CA8A04"

    good:
      range: "61-80"
      label: "Good"
      description: "Meets most requirements. Minor gaps or improvements possible."
      action: "Schedule improvements for next review cycle."
      color: "#2563EB"

    excellent:
      range: "81-100"
      label: "Excellent"
      description: "Exceeds requirements. Best-practice quality."
      action: "Maintain. Consider as template for other SOPs."
      color: "#16A34A"

  dimensions:
    - id: DIM-01
      name: "Clarity"
      weight: 10
      description: |
        Measures how easily the SOP can be understood by its target audience.
        Language should be simple, direct, and free of unnecessary jargon.
        The reader should never have to re-read a sentence to understand it.

      scoring_signals:
        - signal: "Reading level"
          description: "Flesch-Kincaid grade level at or below 8th grade"
          excellent: "Grade 6 or below, crystal clear language"
          good: "Grade 7-8, clear with minor complexity"
          fair: "Grade 9-10, some difficult passages"
          poor: "Grade 11-12, frequently difficult"
          critical: "Grade 13+, academic or legal language"

        - signal: "Action verb usage"
          description: "Steps begin with clear, imperative action verbs"
          excellent: "100% of steps start with action verbs"
          good: "90%+ steps start with action verbs"
          fair: "70-89% steps start with action verbs"
          poor: "50-69% steps start with action verbs"
          critical: "< 50% steps start with action verbs"

        - signal: "Ambiguity density"
          description: "Absence of vague words (appropriate, adequate, sufficient, various, etc.)"
          excellent: "Zero vague qualifiers found"
          good: "1-2 vague qualifiers, all in non-critical sections"
          fair: "3-5 vague qualifiers, some in procedure steps"
          poor: "6-10 vague qualifiers, several in critical steps"
          critical: "10+ vague qualifiers throughout"

        - signal: "Sentence length"
          description: "Average sentence length in procedural sections"
          excellent: "< 15 words average"
          good: "15-20 words average"
          fair: "21-25 words average"
          poor: "26-35 words average"
          critical: "> 35 words average"

        - signal: "Defined terminology"
          description: "Technical terms are defined in a glossary or on first use"
          excellent: "All technical terms defined, glossary comprehensive"
          good: "Most terms defined, minor omissions"
          fair: "Some terms defined, several assumed known"
          poor: "Few terms defined, significant assumed knowledge"
          critical: "No definitions, heavy jargon without explanation"

    - id: DIM-02
      name: "Completeness"
      weight: 15
      description: |
        Measures whether the SOP covers all necessary information for the
        process to be executed successfully. Includes happy path, error paths,
        edge cases, prerequisites, and post-conditions.

      scoring_signals:
        - signal: "Step coverage"
          description: "All process steps from start to finish are documented"
          excellent: "Complete coverage with sub-steps for complex actions"
          good: "All major steps covered, sub-steps for critical actions"
          fair: "Major steps covered, some gaps in sub-steps"
          poor: "Several steps missing or overly summarized"
          critical: "Large portions of the process undocumented"

        - signal: "Edge case coverage"
          description: "Unusual but possible scenarios are addressed"
          excellent: "Comprehensive edge case documentation with examples"
          good: "Common edge cases documented"
          fair: "Some edge cases mentioned but not detailed"
          poor: "Edge cases acknowledged but not addressed"
          critical: "No edge case consideration"

        - signal: "Prerequisites listed"
          description: "All required materials, access, knowledge, and conditions documented"
          excellent: "Complete checklist with verification steps"
          good: "All prerequisites listed"
          fair: "Most prerequisites listed, some assumed"
          poor: "Partial prerequisite list"
          critical: "No prerequisites section"

        - signal: "Post-conditions defined"
          description: "Expected state after SOP completion is documented"
          excellent: "Detailed expected state with verification procedures"
          good: "Expected outcomes clearly stated"
          fair: "Some outcomes mentioned"
          poor: "Vague completion criteria"
          critical: "No definition of done"

        - signal: "Scope boundaries"
          description: "What is in-scope and out-of-scope is explicitly stated"
          excellent: "Clear in-scope/out-of-scope with cross-references"
          good: "In-scope clearly defined, out-of-scope mentioned"
          fair: "Scope implied but not explicitly stated"
          poor: "Scope ambiguous"
          critical: "No scope definition, reader must guess"

    - id: DIM-03
      name: "Executability"
      weight: 15
      description: |
        Measures whether a qualified person can execute the SOP without
        additional guidance. The ultimate test: can a new team member
        complete the process by following only this document?

      scoring_signals:
        - signal: "Standalone execution"
          description: "SOP can be followed without asking questions"
          excellent: "Fully standalone, tested with new team members"
          good: "Standalone for experienced staff, minor clarifications for new"
          fair: "Requires some tribal knowledge to execute"
          poor: "Frequently requires verbal clarification"
          critical: "Cannot be executed without a guide"

        - signal: "Decision points explicit"
          description: "All IF/THEN/ELSE logic is clearly documented"
          excellent: "All decision trees documented with flowcharts"
          good: "All decision points documented in text"
          fair: "Major decision points documented"
          poor: "Some decision points implicit"
          critical: "Decision logic undocumented, relies on judgment"

        - signal: "Single action per step"
          description: "Each step contains exactly one action"
          excellent: "100% single-action steps"
          good: "95%+ single-action steps"
          fair: "80-94% single-action steps"
          poor: "60-79% single-action steps"
          critical: "< 60%, steps are compound instructions"

        - signal: "Verification checkpoints"
          description: "Steps include how to verify the action was successful"
          excellent: "Every critical step has a verification method"
          good: "Most steps have verification"
          fair: "Some verification points"
          poor: "Rare verification checkpoints"
          critical: "No verification methods documented"

    - id: DIM-04
      name: "Measurability"
      weight: 10
      description: |
        Measures whether the SOP defines quantitative success criteria,
        KPIs, time estimates, and measurable standards that allow
        objective assessment of execution quality.

      scoring_signals:
        - signal: "KPIs defined"
          description: "Key Performance Indicators for the process are specified"
          excellent: "3+ KPIs with targets, measurement methods, and frequency"
          good: "2-3 KPIs with targets"
          fair: "1-2 KPIs, loosely defined"
          poor: "Qualitative goals only"
          critical: "No performance measures"

        - signal: "Time estimates"
          description: "Expected duration for steps or phases is provided"
          excellent: "Per-step time estimates with total process duration"
          good: "Per-phase time estimates"
          fair: "Total process time estimate only"
          poor: "Vague time references (soon, quickly)"
          critical: "No time information"

        - signal: "Success criteria quantified"
          description: "Success/failure is defined with measurable thresholds"
          excellent: "All criteria quantified (e.g., < 5% error rate)"
          good: "Most criteria quantified"
          fair: "Some criteria quantified, others qualitative"
          poor: "Mostly qualitative criteria"
          critical: "No measurable success criteria"

        - signal: "Baseline documented"
          description: "Current performance baseline is recorded for improvement tracking"
          excellent: "Baseline data with historical trend"
          good: "Current baseline documented"
          fair: "Baseline mentioned but not quantified"
          poor: "No baseline, improvement not measurable"
          critical: "No concept of measurement"

    - id: DIM-05
      name: "Compliance"
      weight: 10
      description: |
        Measures adherence to applicable regulatory standards, industry
        best practices, and organizational policies. Scored relative to
        the standards declared in the SOP's scope.

      scoring_signals:
        - signal: "Standard references"
          description: "Applicable standards are identified and cited"
          excellent: "All applicable standards cited with clause references"
          good: "Standards cited, most clauses referenced"
          fair: "Standards mentioned without specific clauses"
          poor: "Standards vaguely referenced"
          critical: "No standards referenced despite applicability"

        - signal: "Requirement coverage"
          description: "Standard requirements are addressed in SOP content"
          excellent: "100% of applicable requirements addressed"
          good: "90%+ requirements addressed"
          fair: "70-89% requirements addressed"
          poor: "50-69% requirements addressed"
          critical: "< 50% requirements addressed"

        - signal: "Audit trail support"
          description: "SOP supports creating audit evidence during execution"
          excellent: "Built-in record-keeping, sign-off points, timestamps"
          good: "Record-keeping requirements documented"
          fair: "Some records mentioned"
          poor: "Minimal audit trail support"
          critical: "No audit trail consideration"

        - signal: "Regulatory language"
          description: "Correct use of mandatory (shall/must) vs advisory (should/may)"
          excellent: "Consistent, correct use throughout"
          good: "Mostly correct, minor inconsistencies"
          fair: "Inconsistent usage"
          poor: "Frequent misuse"
          critical: "No distinction made"

    - id: DIM-06
      name: "Maintainability"
      weight: 10
      description: |
        Measures how easy the SOP is to update, version, and keep current.
        A maintainable SOP has clear ownership, scheduled reviews, and
        modular structure that allows targeted updates.

      scoring_signals:
        - signal: "Version control"
          description: "Version numbering, revision history, change tracking"
          excellent: "Semantic versioning, complete change log, diff-friendly"
          good: "Version numbers, revision history with dates"
          fair: "Version number present, minimal history"
          poor: "Version mentioned but not systematically tracked"
          critical: "No version control"

        - signal: "Ownership assigned"
          description: "Document owner and review responsibilities are clear"
          excellent: "Owner, reviewers, and approvers named with roles"
          good: "Owner and reviewer assigned"
          fair: "Owner assigned, reviewer unclear"
          poor: "Ownership vague"
          critical: "No ownership defined"

        - signal: "Review schedule"
          description: "Periodic review cadence is defined"
          excellent: "Review schedule with triggers (time-based AND event-based)"
          good: "Time-based review schedule"
          fair: "Review mentioned but not scheduled"
          poor: "No review plan"
          critical: "Document appears abandoned"

        - signal: "Modular structure"
          description: "Sections are independent enough to update individually"
          excellent: "Fully modular, sections can be updated independently"
          good: "Mostly modular, few cross-dependencies"
          fair: "Some modularity"
          poor: "Tightly coupled sections"
          critical: "Monolithic, any change requires full review"

    - id: DIM-07
      name: "Accessibility"
      weight: 10
      description: |
        Measures how easily the SOP can be found, navigated, and used
        in various contexts (on screen, printed, mobile, integrated into
        tools).

      scoring_signals:
        - signal: "Navigation aids"
          description: "Table of contents, section numbers, cross-references"
          excellent: "TOC, numbered sections, hyperlinked cross-refs, index"
          good: "TOC and numbered sections"
          fair: "Section numbers only"
          poor: "Basic headings without hierarchy"
          critical: "No navigation structure"

        - signal: "Searchability"
          description: "Key terms, tags, metadata support search and discovery"
          excellent: "Tagged with keywords, metadata, searchable in doc system"
          good: "Key terms in headers, basic metadata"
          fair: "Some searchable structure"
          poor: "Minimal searchability"
          critical: "Cannot be found without knowing exact location"

        - signal: "Format flexibility"
          description: "SOP works in multiple contexts (screen, print, mobile)"
          excellent: "Tested in multiple formats, responsive layout"
          good: "Works on screen and print"
          fair: "Optimized for one format only"
          poor: "Formatting issues in some contexts"
          critical: "Only usable in one specific format"

        - signal: "Progressive disclosure"
          description: "Summary/overview available, detail accessible when needed"
          excellent: "Executive summary, quick-ref card, and full detail"
          good: "Summary section with full detail"
          fair: "Detail only, no summary"
          poor: "Overwhelming detail without overview"
          critical: "Wall of text, no structure"

    - id: DIM-08
      name: "Error Handling"
      weight: 10
      description: |
        Measures how well the SOP handles things going wrong. Includes
        troubleshooting guides, escalation paths, rollback procedures,
        and recovery steps.

      scoring_signals:
        - signal: "Exception procedures"
          description: "Documented procedures for when things deviate from happy path"
          excellent: "Comprehensive exception handling for each critical step"
          good: "Common exceptions documented with resolution"
          fair: "Some exceptions mentioned"
          poor: "Generic troubleshooting section only"
          critical: "No exception handling"

        - signal: "Escalation paths"
          description: "Clear escalation hierarchy when operator cannot resolve"
          excellent: "Multi-level escalation with contacts, SLAs, and triggers"
          good: "Escalation path with contacts"
          fair: "Escalation mentioned, contacts missing"
          poor: "Vague escalation guidance"
          critical: "No escalation path"

        - signal: "Rollback procedures"
          description: "Steps to undo or recover from a failed execution"
          excellent: "Per-step rollback with data recovery procedures"
          good: "Phase-level rollback procedures"
          fair: "General rollback guidance"
          poor: "Rollback mentioned but not detailed"
          critical: "No rollback consideration"

        - signal: "Troubleshooting guide"
          description: "Symptom-cause-resolution troubleshooting matrix"
          excellent: "Comprehensive matrix with decision tree"
          good: "Common issues with solutions"
          fair: "Some troubleshooting tips"
          poor: "Generic advice only"
          critical: "No troubleshooting support"

    - id: DIM-09
      name: "Visual Design"
      weight: 5
      description: |
        Measures the effective use of visual elements to enhance
        understanding. Diagrams, flowcharts, screenshots, and tables
        that complement text instructions.

      scoring_signals:
        - signal: "Flowcharts/diagrams"
          description: "Process flow visualized graphically"
          excellent: "Complete process flowchart with decision diamonds"
          good: "Simplified flowchart for main process"
          fair: "Partial diagrams"
          poor: "Text-only descriptions of flows"
          critical: "No visual aids for complex processes"

        - signal: "Screenshots/examples"
          description: "Visual examples for UI or physical operations"
          excellent: "Annotated screenshots for every UI step"
          good: "Screenshots for critical steps"
          fair: "Some screenshots, not annotated"
          poor: "Described but not shown"
          critical: "No visual examples for visual processes"

        - signal: "Table usage"
          description: "Structured data presented in tables vs paragraphs"
          excellent: "All structured data in well-formatted tables"
          good: "Most structured data in tables"
          fair: "Some data in tables"
          poor: "Tables used poorly or not at all"
          critical: "Structured data buried in paragraphs"

    - id: DIM-10
      name: "AI-Readiness"
      weight: 5
      description: |
        Measures how easily the SOP can be converted to or consumed by
        AI/ML systems. Structured data, consistent formatting, and
        machine-parseable elements.

      scoring_signals:
        - signal: "Structured format"
          description: "Content uses consistent, parseable formatting"
          excellent: "Fully structured, parseable by automated tools"
          good: "Mostly structured, minor manual parsing needed"
          fair: "Partially structured"
          poor: "Mostly unstructured prose"
          critical: "Free-form text, cannot be parsed"

        - signal: "Metadata completeness"
          description: "Machine-readable metadata (tags, categories, identifiers)"
          excellent: "Complete YAML/JSON frontmatter with all metadata fields"
          good: "Basic metadata present"
          fair: "Some metadata"
          poor: "Minimal metadata"
          critical: "No machine-readable metadata"

        - signal: "ML companion exists"
          description: "A machine-readable version (YAML) exists alongside the human version"
          excellent: "Full ML SOP conforming to sop-ml-schema.yaml"
          good: "ML version exists with minor schema gaps"
          fair: "Partial ML version"
          poor: "No ML version but structure supports conversion"
          critical: "No ML version, structure prevents conversion"

  composite_scoring:
    method: "weighted_average"
    formula: "sum(dimension_score * dimension_weight) / 100"
    rounding: "round to nearest integer"
    grade_thresholds:
      A_plus: 95
      A: 90
      B_plus: 85
      B: 80
      C_plus: 75
      C: 70
      D: 60
      F: 0

  modifiers:
    crosby_maturity_bonus:
      description: "Add bonus points based on Crosby 14-point assessment"
      mature_count_10_plus: "+3 points"
      mature_count_7_to_9: "+2 points"
      mature_count_4_to_6: "+1 point"
      mature_count_below_4: "+0 points"
      max_bonus: 3
      note: "Bonus cannot push score above 100"

    compliance_penalty:
      description: "Subtract points for compliance violations"
      critical_violation: "-20 points per violation"
      major_violation: "-10 points per violation"
      minor_violation: "-3 points per violation"
      note: "Penalty cannot push score below 0"

  reporting:
    required_elements:
      - "Overall weighted score with grade"
      - "Per-dimension score with evidence citations"
      - "Top 3 strengths (highest-scoring dimensions)"
      - "Top 3 improvement areas (lowest-scoring dimensions)"
      - "Crosby maturity overlay results"
      - "Compliance modifier applied (if any)"
      - "Comparison to passing threshold (70)"
      - "Comparison to certification threshold (90)"
      - "Specific, actionable recommendations per low-scoring dimension"
      - "Evidence summary with counts per marker type"

  # ===========================================================================
  # Evidence Standard — Canonical Format for All Analysis & Audit Pipelines
  # ===========================================================================
  # Source: confidence-levels.yaml (markers), wf-sop-audit-pipeline.yaml (VETO pattern)
  # Consumers: analyze-sop.md, analyze-squad.md, sop-analyst.md, sop-auditor.md
  # ===========================================================================
  evidence_standard:
    citation_format: "[MARKER] file:section — 'observação ou texto citado'"
    citation_examples:
      - "[DOC] analyze-sop.md:Step 4 — 'Record evidence for each score'"
      - "[OBS] create-sop.md:Procedure — missing rollback section after line 45"
      - "[INF] benchmark-sop.md:Prerequisites — no compliance standard referenced, likely oversight"

    valid_markers:
      - marker: "[OBS]"
        id: "observed"
        score: 1.0
        valid_for_scoring: true
        description: "Direct observation or auditable trace from the SOP file"

      - marker: "[DOC]"
        id: "documented"
        score: 0.9
        valid_for_scoring: true
        description: "Explicitly stated in the SOP text or referenced artifact"

      - marker: "[REP]"
        id: "reported"
        score: 0.8
        valid_for_scoring: true
        description: "Described by practitioner or process performer"

      - marker: "[COR]"
        id: "corroborated"
        score: 0.7
        valid_for_scoring: true
        description: "Multiple weak signals converge on the same finding"

      - marker: "[INF]"
        id: "inferred"
        score: 0.5
        valid_for_scoring: true
        description: "Logically necessary but not explicitly stated"

      - marker: "[ASM]"
        id: "assumed"
        score: 0.3
        valid_for_scoring: false
        description: "Best guess based on norms, NOT process-specific evidence"

      - marker: "[UNK]"
        id: "unknown"
        score: 0.1
        valid_for_scoring: false
        description: "Known gap, insufficient evidence"

    minimum_per_dimension:
      full: 2
      quick: 1

    minimum_marker_for_scoring: "[INF]"
    minimum_marker_score: 0.5
    veto_on_zero_evidence: true
    source_reference: "confidence-levels.yaml"

  # ===========================================================================
  # Invention Red Flags — Phrases That Indicate Unsupported Claims
  # ===========================================================================
  # Source: squad-creator-pro/workflows/wf-extraction-pipeline.yaml:66-81
  # Pattern: anti_invention_philosophy
  # ===========================================================================
  invention_red_flags:
    phrases:
      - "Geralmente se recomenda"
      - "Best practices sugerem"
      - "Na minha experiência"
      - "É comum fazer"
      - "Experts concordam que"
      - "Tipicamente"
      - "Normalmente"
      - "Industry standard suggests"
      - "It is generally accepted"
      - "Common wisdom dictates"

    rule: "Frase red flag no report sem citação [MARKER] acompanhante → VETO"
    action: "Replace with cited evidence or declare '[UNK] — insufficient evidence for this claim'"
    source_reference: "wf-extraction-pipeline.yaml anti_invention_philosophy"


---

## Referência: references/data-sop-standards-reference.yaml

# =============================================================================
# SOP Standards Reference - Cross-Reference Database
# =============================================================================
# Used by: sop-auditor (audit-sop task), sop-analyst (compliance scoring)
# Version: 1.0.0
#
# Purpose:
#   Maps regulatory and quality framework requirements to specific SOP sections.
#   During an audit, each applicable standard's requirements are checked against
#   the SOP to determine compliance coverage.
#
# Criticality Levels:
#   mandatory   - Failure to comply results in audit finding / regulatory action
#   recommended - Industry best practice, expected but not legally required
#   optional    - Enhancement that demonstrates maturity
# =============================================================================

standards_reference:
  version: "1.0.0"
  last_updated: "2026-03-09"

  standards:

    # =========================================================================
    # ISO 9001:2015 - Quality Management Systems
    # =========================================================================
    - standard_id: "ISO-9001"
      standard_name: "ISO 9001:2015 - Quality Management Systems"
      version: "2015"
      issuing_body: "International Organization for Standardization"
      scope: "Quality management systems for organizations of any size"
      applicability: "General quality management, manufacturing, services"

      requirements:
        - id: "ISO-9001-4.4"
          clause: "4.4"
          title: "Quality Management System and Its Processes"
          description: "Organization shall establish, implement, maintain and continually improve a QMS including needed processes and their interactions."
          sop_section_mapping:
            - "Purpose and Scope"
            - "Process Flow / Procedure Steps"
            - "References (to related processes)"
          criticality: mandatory
          audit_question: "Does the SOP define the process inputs, outputs, sequence, and interactions with other processes?"
          evidence_required: "Process map or flow showing inputs/outputs and touchpoints"

        - id: "ISO-9001-7.1.6"
          clause: "7.1.6"
          title: "Organizational Knowledge"
          description: "Organization shall determine the knowledge necessary for the operation of its processes."
          sop_section_mapping:
            - "Prerequisites"
            - "Definitions"
            - "Training Requirements"
          criticality: mandatory
          audit_question: "Does the SOP capture the knowledge required to execute the process?"
          evidence_required: "Prerequisites section listing required knowledge, training, and competencies"

        - id: "ISO-9001-7.5"
          clause: "7.5"
          title: "Documented Information"
          description: "QMS shall include documented information required by the standard and determined necessary for QMS effectiveness."
          sop_section_mapping:
            - "Document Header (ID, version, date)"
            - "Revision History"
            - "Approval signatures"
          criticality: mandatory
          audit_question: "Does the SOP have proper document control (unique ID, version, date, approval, revision history)?"
          evidence_required: "Document header with all control fields populated"

        - id: "ISO-9001-8.1"
          clause: "8.1"
          title: "Operational Planning and Control"
          description: "Organization shall plan, implement, and control the processes needed to meet requirements for provision of products and services."
          sop_section_mapping:
            - "Procedure Steps"
            - "Quality Criteria"
            - "KPIs / Measurability"
          criticality: mandatory
          audit_question: "Does the SOP define criteria for the process, acceptance criteria, and required resources?"
          evidence_required: "Acceptance criteria documented, resources listed, process criteria defined"

        - id: "ISO-9001-8.5.1"
          clause: "8.5.1"
          title: "Control of Production and Service Provision"
          description: "Production and service provision shall be implemented under controlled conditions."
          sop_section_mapping:
            - "Procedure Steps"
            - "Verification Checkpoints"
            - "Monitoring and Measurement"
          criticality: mandatory
          audit_question: "Does the SOP include monitoring and measurement activities at appropriate stages?"
          evidence_required: "Verification checkpoints within procedure, measurement criteria defined"

        - id: "ISO-9001-8.7"
          clause: "8.7"
          title: "Control of Nonconforming Outputs"
          description: "Organization shall ensure outputs not conforming to requirements are identified and controlled."
          sop_section_mapping:
            - "Exception Handling"
            - "Escalation Procedures"
            - "Nonconformance Handling"
          criticality: mandatory
          audit_question: "Does the SOP define what to do when output does not meet acceptance criteria?"
          evidence_required: "Exception handling section with nonconformance procedures"

        - id: "ISO-9001-9.1"
          clause: "9.1"
          title: "Monitoring, Measurement, Analysis and Evaluation"
          description: "Organization shall determine what needs to be monitored and measured."
          sop_section_mapping:
            - "KPIs"
            - "Quality Criteria"
            - "Reporting Requirements"
          criticality: mandatory
          audit_question: "Does the SOP define KPIs and how process effectiveness is measured?"
          evidence_required: "KPI definitions with targets, measurement frequency, and reporting"

        - id: "ISO-9001-10.2"
          clause: "10.2"
          title: "Nonconformity and Corrective Action"
          description: "Organization shall react to nonconformity, evaluate need for action, implement action, review effectiveness."
          sop_section_mapping:
            - "Exception Handling"
            - "Root Cause Analysis"
            - "Corrective Action Procedures"
          criticality: mandatory
          audit_question: "Does the SOP include corrective action procedures and root cause analysis guidance?"
          evidence_required: "Corrective action workflow documented, RCA method referenced"

    # =========================================================================
    # FDA 21 CFR Part 11 - Electronic Records; Electronic Signatures
    # =========================================================================
    - standard_id: "FDA-21CFR11"
      standard_name: "21 CFR Part 11 - Electronic Records; Electronic Signatures"
      version: "2003 (current)"
      issuing_body: "U.S. Food and Drug Administration"
      scope: "Electronic records and signatures in FDA-regulated industries"
      applicability: "Pharmaceutical, biotech, medical devices, food production"

      requirements:
        - id: "FDA-11.10a"
          clause: "11.10(a)"
          title: "System Validation"
          description: "Systems used to manage electronic records shall be validated to ensure accuracy, reliability, and consistent intended performance."
          sop_section_mapping:
            - "Prerequisites (system validation status)"
            - "Tools and Systems"
            - "References (validation documentation)"
          criticality: mandatory
          audit_question: "Does the SOP reference validated systems and their validation status?"
          evidence_required: "System references with validation status documented"

        - id: "FDA-11.10b"
          clause: "11.10(b)"
          title: "Record Generation"
          description: "Ability to generate accurate and complete copies of records in human-readable and electronic form."
          sop_section_mapping:
            - "Output Artifacts"
            - "Record-Keeping Requirements"
            - "Reporting"
          criticality: mandatory
          audit_question: "Does the SOP define what records are generated and how they are preserved?"
          evidence_required: "Record generation steps with format and storage requirements"

        - id: "FDA-11.10c"
          clause: "11.10(c)"
          title: "Record Protection"
          description: "Protection of records to enable their accurate and ready retrieval throughout the records retention period."
          sop_section_mapping:
            - "Record Retention"
            - "Data Backup"
            - "Access Controls"
          criticality: mandatory
          audit_question: "Does the SOP address record protection, retention period, and retrieval procedures?"
          evidence_required: "Retention policy referenced, backup procedures, access controls"

        - id: "FDA-11.10d"
          clause: "11.10(d)"
          title: "System Access Controls"
          description: "Limiting system access to authorized individuals."
          sop_section_mapping:
            - "Roles and Responsibilities"
            - "Prerequisites (access requirements)"
            - "Security Controls"
          criticality: mandatory
          audit_question: "Does the SOP define who has access and how access is controlled?"
          evidence_required: "Role-based access documented, access request/revocation procedures"

        - id: "FDA-11.10e"
          clause: "11.10(e)"
          title: "Audit Trail"
          description: "Use of secure, computer-generated, time-stamped audit trails to record date/time of operator entries and actions."
          sop_section_mapping:
            - "Procedure Steps (logging requirements)"
            - "Audit Trail"
            - "Record-Keeping"
          criticality: mandatory
          audit_question: "Does the SOP require audit trail entries for all critical actions?"
          evidence_required: "Audit trail requirements at each critical step, timestamp requirements"

        - id: "FDA-11.10k"
          clause: "11.10(k)"
          title: "Device Controls"
          description: "Use of appropriate controls over systems documentation including change control procedures."
          sop_section_mapping:
            - "Revision History"
            - "Change Control"
            - "Document Approval"
          criticality: mandatory
          audit_question: "Does the SOP have change control procedures for document updates?"
          evidence_required: "Change control process documented, approval workflow defined"

    # =========================================================================
    # Six Sigma - DMAIC Control Phase
    # =========================================================================
    - standard_id: "SIX-SIGMA"
      standard_name: "Six Sigma DMAIC - Control Phase Requirements"
      version: "General"
      issuing_body: "Industry Standard (ASQ, IASSC)"
      scope: "Process control and standardization in the Control phase of DMAIC"
      applicability: "Manufacturing, services, any process improvement initiative"

      requirements:
        - id: "SS-CTRL-01"
          clause: "Control Plan"
          title: "Process Control Plan"
          description: "A documented plan for controlling critical-to-quality (CTQ) characteristics."
          sop_section_mapping:
            - "Quality Criteria"
            - "KPIs"
            - "Monitoring and Measurement"
          criticality: mandatory
          audit_question: "Does the SOP define CTQ characteristics and how they are monitored?"
          evidence_required: "CTQ definitions, control limits, monitoring frequency"

        - id: "SS-CTRL-02"
          clause: "Statistical Process Control"
          title: "SPC Implementation"
          description: "Use of control charts or statistical methods to monitor process performance."
          sop_section_mapping:
            - "KPIs"
            - "Monitoring Tools"
            - "Response Plan (out-of-control)"
          criticality: recommended
          audit_question: "Does the SOP reference SPC tools or statistical monitoring methods?"
          evidence_required: "Control chart references, out-of-control action plan"

        - id: "SS-CTRL-03"
          clause: "Standardized Work"
          title: "Process Standardization"
          description: "SOPs are the primary deliverable of the Control phase, ensuring gains are locked in."
          sop_section_mapping:
            - "Procedure Steps (standardized)"
            - "One Best Way documentation"
            - "Variation Reduction measures"
          criticality: mandatory
          audit_question: "Does the SOP represent the standardized best-known method?"
          evidence_required: "Standard method documented, deviation handling defined"

        - id: "SS-CTRL-04"
          clause: "Response Plan"
          title: "Out-of-Control Response Plan"
          description: "Documented response when process goes out of statistical control."
          sop_section_mapping:
            - "Exception Handling"
            - "Escalation Procedures"
            - "Corrective Action"
          criticality: mandatory
          audit_question: "Does the SOP define what to do when key metrics go out of spec?"
          evidence_required: "Response plan with triggers, actions, and escalation"

        - id: "SS-CTRL-05"
          clause: "Mistake-Proofing"
          title: "Poka-Yoke Implementation"
          description: "Error-proofing mechanisms built into the process."
          sop_section_mapping:
            - "Verification Checkpoints"
            - "Validation Rules"
            - "Safeguards"
          criticality: recommended
          audit_question: "Does the SOP include mistake-proofing mechanisms?"
          evidence_required: "Poka-yoke descriptions, validation checks, safeguards"

    # =========================================================================
    # Toyota Production System (TPS) - Standardized Work
    # =========================================================================
    - standard_id: "TOYOTA-TPS"
      standard_name: "Toyota Production System - Standardized Work"
      version: "General (Ohno/Shingo methodology)"
      issuing_body: "Toyota Motor Corporation (Industry Standard)"
      scope: "Standardized work documentation for lean manufacturing"
      applicability: "Manufacturing, lean operations, continuous improvement"

      requirements:
        - id: "TPS-SW-01"
          clause: "Takt Time"
          title: "Takt Time Definition"
          description: "The rate at which work must be completed to meet demand."
          sop_section_mapping:
            - "KPIs (cycle time, throughput)"
            - "Time Estimates"
            - "Capacity Planning"
          criticality: recommended
          audit_question: "Does the SOP define the expected pace of work (takt time or equivalent)?"
          evidence_required: "Time per cycle, throughput target, or capacity reference"

        - id: "TPS-SW-02"
          clause: "Work Sequence"
          title: "Standard Work Sequence"
          description: "The precise order of operations that an operator performs within takt time."
          sop_section_mapping:
            - "Procedure Steps (ordered)"
            - "Step Dependencies"
            - "Process Flow"
          criticality: mandatory
          audit_question: "Does the SOP define a precise, repeatable sequence of steps?"
          evidence_required: "Numbered steps in defined order, dependencies documented"

        - id: "TPS-SW-03"
          clause: "Standard WIP"
          title: "Standard Work-in-Process"
          description: "The minimum quantity of work-in-process needed to maintain flow."
          sop_section_mapping:
            - "Prerequisites (materials, inputs)"
            - "Inventory/Queue levels"
            - "Buffer management"
          criticality: recommended
          audit_question: "Does the SOP define required inputs and work-in-process levels?"
          evidence_required: "Input requirements quantified, buffer/queue guidance"

        - id: "TPS-SW-04"
          clause: "Visual Management"
          title: "Visual Controls"
          description: "Visual indicators that make the standard visible and deviations obvious."
          sop_section_mapping:
            - "Visual Design (flowcharts, diagrams)"
            - "Status Indicators"
            - "Andon/Alert mechanisms"
          criticality: recommended
          audit_question: "Does the SOP use visual aids and define visual management at the workplace?"
          evidence_required: "Flowcharts, status boards, visual indicators documented"

        - id: "TPS-SW-05"
          clause: "Kaizen Integration"
          title: "Continuous Improvement Linkage"
          description: "Standardized work is the baseline for kaizen; improvements update the standard."
          sop_section_mapping:
            - "Revision History"
            - "Improvement Suggestions"
            - "Review Schedule"
          criticality: mandatory
          audit_question: "Does the SOP include a mechanism for capturing and incorporating improvements?"
          evidence_required: "Review schedule, improvement suggestion process, version history"

        - id: "TPS-SW-06"
          clause: "Jidoka"
          title: "Built-in Quality (Stop and Fix)"
          description: "Operators are empowered and expected to stop the process when a defect is detected."
          sop_section_mapping:
            - "Exception Handling"
            - "Stop Conditions"
            - "Escalation"
          criticality: mandatory
          audit_question: "Does the SOP define conditions where the operator must stop the process?"
          evidence_required: "Stop conditions listed, escalation path for quality issues"

    # =========================================================================
    # Gawande Checklist Manifesto Principles
    # =========================================================================
    - standard_id: "GAWANDE-CHECKLIST"
      standard_name: "Checklist Manifesto Principles"
      version: "2009 (Atul Gawande)"
      issuing_body: "Industry Best Practice"
      scope: "Checklist design for complex, high-stakes processes"
      applicability: "Healthcare, aviation, construction, any safety-critical domain"

      requirements:
        - id: "GAW-01"
          clause: "DO-CONFIRM vs READ-DO"
          title: "Checklist Type Declaration"
          description: "Checklist must declare whether it is DO-CONFIRM (do from memory, then confirm) or READ-DO (read and do each step)."
          sop_section_mapping:
            - "Purpose and Scope (checklist type)"
            - "Usage Instructions"
          criticality: mandatory
          audit_question: "Does the SOP/checklist declare its usage type (DO-CONFIRM or READ-DO)?"
          evidence_required: "Explicit statement of checklist type in header or instructions"

        - id: "GAW-02"
          clause: "Brevity"
          title: "Killer Items Only"
          description: "Checklist should contain only critical steps that are commonly missed, not every step."
          sop_section_mapping:
            - "Checklist Section"
            - "Critical Steps Highlighted"
          criticality: mandatory
          audit_question: "If a checklist is generated, does it focus on critical/commonly-missed items rather than listing everything?"
          evidence_required: "Checklist with curated critical items, not a verbatim copy of all steps"

        - id: "GAW-03"
          clause: "Pause Points"
          title: "Natural Pause Points"
          description: "Checklist should be used at natural pause points in the workflow, not continuously."
          sop_section_mapping:
            - "Verification Checkpoints"
            - "Phase Transitions"
            - "Sign-off Points"
          criticality: recommended
          audit_question: "Does the SOP define natural pause points where checklists should be reviewed?"
          evidence_required: "Checkpoint markers at logical transition points"

        - id: "GAW-04"
          clause: "5-9 Items"
          title: "Working Memory Limit"
          description: "Each checklist section should have 5-9 items (human working memory limit)."
          sop_section_mapping:
            - "Checklist Sections"
            - "Phase Groupings"
          criticality: recommended
          audit_question: "Are checklist sections grouped into 5-9 items per group?"
          evidence_required: "Checklist groups with item counts within working memory range"

        - id: "GAW-05"
          clause: "Simple Language"
          title: "Exact and Simple Wording"
          description: "Use simple, exact language that fits on one line. No ambiguity."
          sop_section_mapping:
            - "Checklist Items"
            - "Step Descriptions"
          criticality: mandatory
          audit_question: "Are checklist items single-line, unambiguous statements?"
          evidence_required: "Each item fits one line, uses simple language, no interpretation needed"

        - id: "GAW-06"
          clause: "Real-World Testing"
          title: "Tested in Practice"
          description: "Checklist must be tested with actual users in real conditions."
          sop_section_mapping:
            - "Validation Record"
            - "Teach-Back Results"
            - "Pilot Test Notes"
          criticality: recommended
          audit_question: "Has the SOP/checklist been tested with actual users (teach-back, pilot)?"
          evidence_required: "Test records, teach-back results, or pilot deployment notes"

        - id: "GAW-07"
          clause: "Communication Checks"
          title: "Team Communication Steps"
          description: "Include explicit communication steps (briefings, read-backs, handoffs)."
          sop_section_mapping:
            - "RACI Matrix"
            - "Handoff Points"
            - "Communication Requirements"
          criticality: recommended
          audit_question: "Does the SOP include explicit team communication steps at critical points?"
          evidence_required: "Briefing steps, read-back requirements, handoff communication"

  audit_matrix_template:
    description: |
      Template for generating the compliance audit matrix.
      For each applicable standard, create a row per requirement.
    columns:
      - "Requirement ID"
      - "Requirement Title"
      - "Criticality"
      - "SOP Section(s)"
      - "Coverage (Full / Partial / None)"
      - "Evidence Notes"
      - "Finding (Compliant / Gap / N/A)"
    scoring:
      full_coverage: "Requirement fully addressed with evidence"
      partial_coverage: "Requirement partially addressed, gaps identified"
      no_coverage: "Requirement not addressed"
      not_applicable: "Requirement does not apply to this SOP's scope"


---

## Referência: references/data-verdict-thresholds.yaml

# =============================================================================
# Audit Verdict Thresholds
# =============================================================================
# Data: verdict-thresholds.yaml | SOP Factory | Synkra Hybrid
# Used by: sop-auditor, audit-sop.md, certify-sop.md, re-audit.md
#
# Canonical contract:
# - final audit verdict bands
# - override rules applied on top of the final score
# - certification gate requirements
# - Crosby worksheet as a component of the audit, not a second verdict engine
# =============================================================================

schema_version: "1.1.0"

audit_verdicts:
  - id: "CERTIFIED"
    score_min: 90
    score_max: 100
    label: "Certified"
    meaning: "SOP is release-ready with strong audit performance."
    action: "Approve for production release."

  - id: "APPROVED"
    score_min: 75
    score_max: 89
    label: "Approved"
    meaning: "SOP is usable with tracked improvements."
    action: "Release with remediation plan."

  - id: "CONDITIONAL"
    score_min: 60
    score_max: 74
    label: "Conditional"
    meaning: "SOP has significant gaps and requires remediation before normal use."
    action: "Revise and re-audit within 14 days."

  - id: "REJECTED"
    score_min: 0
    score_max: 59
    label: "Rejected"
    meaning: "SOP does not meet minimum audit expectations."
    action: "Return for major rewrite."

override_rules:
  - rule: "Any critical risk finding blocks CERTIFIED"
    condition: "critical_risk_findings > 0"
    effect: "Max verdict = APPROVED"
    source: "tasks/audit-sop.md"

  - rule: "Any high-likelihood safety risk blocks APPROVED"
    condition: "safety_high_likelihood_findings > 0"
    effect: "Max verdict = CONDITIONAL"
    source: "tasks/audit-sop.md"

  - rule: "Required standard below 50% compliance blocks APPROVED"
    condition: "required_standard_compliance_below_50 > 0"
    effect: "Max verdict = CONDITIONAL"
    source: "tasks/audit-sop.md"

score_model:
  final_score:
    formula: "(structural * 0.20) + (content * 0.30) + (compliance * 0.20) + (risk * 0.15) + (crosby * 0.15)"
    components:
      structural: 0.20
      content: 0.30
      compliance: 0.20
      risk: 0.15
      crosby: 0.15

  crosby_component:
    worksheet: "checklists/14-point-crosby-checklist.md"
    point_score_scale:
      checks_4_of_4: 10
      checks_3_of_4: 7
      checks_2_of_4: 4
      checks_0_or_1_of_4: 1
    aggregate_formula: "average(point_scores) * 10"

certification_gate:
  required_verdict: "CERTIFIED"
  minimum_score: 90
  critical_open: 0
  major_open: 0
  traceability_required: true

nonconformity:
  classifications:
    - id: "CRITICAL"
      definition: "Poses immediate risk to safety, compliance, or business continuity"
      sop_impact: "STOP — immediate remediation required."
      sla_days: 7

    - id: "MAJOR"
      definition: "Significant gap that reduces SOP effectiveness or compliance"
      sop_impact: "HOLD — release delayed until remediated."
      sla_days: 14

    - id: "MINOR"
      definition: "Small gap that does not significantly impact execution"
      sop_impact: "NOTE — release possible with tracked remediation."
      sla_days: 30

    - id: "OBSERVATION"
      definition: "Improvement opportunity, not a blocking nonconformity"
      sop_impact: "LOG — next revision cycle."
      sla_days: -1

re_audit:
  finding_statuses:
    - "CLOSED"
    - "OPEN"
    - "REGRESSED"
    - "NEW"
  pass_condition: "All Critical and Major findings CLOSED"
  conditional_condition: "Only Minor findings remain OPEN"
  fail_condition: "Any Critical/Major OPEN or any REGRESSED finding"


---

## Referência: references/re-audit.md

# Task: Re-Audit SOP

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `re-audit` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-auditor` |
| **Execution Type** | `Hybrid` |

## Metadata
```yaml
id: re-audit
name: "Re-Audit SOP"
category: audit
agent: sop-auditor
elicit: false
autonomous: true
description: "Re-run SOP audit after remediation, compare before/after findings, and determine closure status."
```

## Purpose

Verify whether remediation actions closed previous nonconformities.
This task compares a fresh audit with a baseline audit and confirms if the SOP can move forward.

## Inputs

```yaml
inputs:
  sop_file:
    type: filepath
    required: true
  previous_audit_report:
    type: filepath
    required: true
  strict_mode:
    type: boolean
    required: false
    default: true
```

## Workflow / Steps

### 1. Load Baseline

```
ACTION:
  - Read previous audit report
  - Extract open findings, severity, and prior score
```

### 2. Execute Current Audit Snapshot

```
ACTION:
  - Re-run audit checks on current SOP version
  - Capture new score, verdict, and open findings
```

### 3. Compare Delta

```
ACTION:
  - For each previous finding:
    * CLOSED when evidence now satisfies requirement
    * OPEN when issue remains
    * REGRESSED when quality worsened
  - Identify new findings introduced after remediation
```

### 4. Determine Re-Audit Outcome

```
OUTCOME:
  - PASS when all critical+major findings are closed
  - CONDITIONAL when only minor findings remain
  - FAIL when critical/major findings remain or regressions appear
```

### 5. Produce Re-Audit Report

```
OUTPUT:
  - before_after_score
  - findings_closed/open/regressed
  - final_outcome
  - remaining_actions
```

## Acceptance Criteria

- [ ] Every baseline finding has explicit closure/open/regression status
- [ ] Final outcome is consistent with severity rules
- [ ] Report includes before/after traceability to both audit artifacts


---

## Referência: templates/audit-report-template.md

# SOP Audit Report

> **Template:** audit-report-template.md | SOP Factory | Synkra Hybrid
>
> Used by @sop-auditor to produce standardized audit reports after `*audit` execution.
> Fill all `{{placeholders}}` with actual values.

---

## Audit Header

| Field | Value |
|---|---|
| **Report ID** | AUD-{{sequential_number}} |
| **SOP Under Audit** | {{sop_id}} — {{sop_title}} |
| **SOP Version** | {{sop_version}} |
| **Auditor** | Crosby (sop-auditor) |
| **Audit Date** | {{YYYY-MM-DD}} |
| **Audit Type** | {{Initial / Re-Audit / Periodic}} |
| **Previous Audit** | {{previous_report_id or "N/A — Initial Audit"}} |

---

## 14-Point Crosby Assessment

> Reference worksheet: `checklists/14-point-crosby-checklist.md`

| # | Point | Weight | Point Score | Evidence | Finding |
|---|-------|--------|:-----------:|----------|---------|
| 1 | Management Commitment | CRITICAL | {{1/4/7/10}} | {{specific evidence from SOP}} | {{finding or "Conformant"}} |
| 2 | Quality Improvement Team | MAJOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 3 | Quality Measurement | CRITICAL | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 4 | Cost of Quality | MAJOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 5 | Quality Awareness | MAJOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 6 | Corrective Action | CRITICAL | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 7 | Zero Defects Planning | CRITICAL | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 8 | Employee Education | MAJOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 9 | Zero Defects Day | MINOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 10 | Goal Setting | MAJOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 11 | Error Cause Removal | MAJOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 12 | Recognition | MINOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 13 | Quality Councils | MAJOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |
| 14 | Do It Over Again | MINOR | {{1/4/7/10}} | {{evidence}} | {{finding}} |

---

## Nonconformity Register

| ID | Classification | Crosby Point | Description | Required Action | Owner | Due Date |
|----|:-------------:|:------------:|-------------|-----------------|-------|----------|
| NC-001 | {{Critical/Major/Minor/Observation}} | {{#}} | {{description of nonconformity}} | {{specific remediation action}} | {{responsible role}} | {{YYYY-MM-DD}} |
| NC-002 | {{class}} | {{#}} | {{description}} | {{action}} | {{owner}} | {{date}} |

---

## Audit Score

> Source of truth: `data/verdict-thresholds.yaml`

| Component | Weight | Raw Score | Weighted Contribution |
|-----------|:------:|:---------:|:---------------------:|
| Structural | 20% | {{0-100}} | {{score}} |
| Content | 30% | {{0-100}} | {{score}} |
| Compliance | 20% | {{0-100}} | {{score}} |
| Risk | 15% | {{0-100}} | {{score}} |
| Crosby | 15% | {{0-100}} | {{score}} |
| **FINAL SCORE** | **100%** | — | **{{final_score}} / 100** |

| Finding Type | Count |
|---|:---:|
| Critical Open | {{count}} |
| Major Open | {{count}} |
| Minor Open | {{count}} |
| Observations | {{count}} |

---

## VERDICT: {{CERTIFIED / APPROVED / CONDITIONAL / REJECTED}}

{{Verdict explanation. Include:
- Key strengths observed
- Critical gaps requiring attention
- Specific actions required before next stage
- Timeline for remediation if applicable}}

---

## Remediation Tracking

> Complete this section during re-audit or follow-up.

| Finding ID | Original Classification | Status | Closure Evidence | Closed Date |
|:----------:|:----------------------:|:------:|-----------------|:-----------:|
| NC-001 | {{class}} | {{Open/Closed/Regressed}} | {{evidence of fix}} | {{date}} |

---

## Compliance Cross-Reference

> Standards assessed during this audit (if applicable).

| Standard | Clauses Checked | Conformant | Gaps |
|----------|----------------|:----------:|------|
| {{ISO 9001 / FDA / GMP / etc.}} | {{clause numbers}} | {{Yes/Partial/No}} | {{gap description}} |

---

## Auditor Notes

{{Free-form notes, observations not captured in formal findings, recommendations for next revision cycle.}}

---

**Auditor Signature:** _________________________ **Date:** _______________

---

*Audit Report Template v1.0. Based on Philip Crosby's 14-point framework and ISO 19011 audit methodology.*
*Template: audit-report-template.md | SOP Factory | Synkra Hybrid*


---

## Referência: templates/certification-template.md

# SOP Certification Template

## Certificate Header

- Certificate ID: `{{certificate_id}}`
- SOP ID: `{{sop_id}}`
- SOP Version: `{{sop_version}}`
- Audit Report: `{{audit_report_id}}`
- Audit Verdict: `{{audit_verdict}}`
- Audit Score: `{{audit_score}}`
- Issued At: `{{issued_at}}`
- Expires At: `{{expires_at}}`
- Issuer: `{{issuer}}`

## Gate Snapshot

| Gate | Status | Evidence |
|------|--------|----------|
| Verdict CERTIFIED | {{gate_verdict}} | {{evidence_verdict}} |
| Score Threshold | {{gate_score}} | {{evidence_score}} |
| Critical Findings | {{gate_critical}} | {{evidence_critical}} |
| Major Findings | {{gate_major}} | {{evidence_major}} |
| Traceability | {{gate_traceability}} | {{evidence_traceability}} |

## Decision

`{{decision}}`

## Notes

{{notes}}


---

## Referência: templates/nonconformity-register-template.md

# Nonconformity Register

> **Template:** nonconformity-register-template.md | SOP Factory | Synkra Hybrid
>
> Tracks all nonconformities found during SOP audit by @sop-auditor.
> One register per SOP, persisted across audit cycles for traceability.
> Used by `*audit`, `*re-audit`, and `*certify` commands.

---

## Register Header

| Field | Value |
|---|---|
| **Register ID** | NCR-{{sop_id}} |
| **SOP** | {{sop_id}} — {{sop_title}} |
| **Created** | {{YYYY-MM-DD}} |
| **Last Updated** | {{YYYY-MM-DD}} |
| **Status** | {{Active / All Closed / Archived}} |

---

## Classification Guide

| Class | Definition | SOP Impact | SLA |
|-------|-----------|------------|-----|
| **Critical** | Poses immediate risk to safety, compliance, or business continuity | STOP — Cannot release | 7 days |
| **Major** | Significant gap reducing SOP effectiveness or compliance | HOLD — Release delayed | 14 days |
| **Minor** | Small gap that does not significantly impact execution | NOTE — Release with tracking | 30 days |
| **Observation** | Improvement opportunity, not a nonconformity | LOG — Next revision cycle | N/A |

---

## Findings

| ID | Class | Crosby Point | Audit Date | Description | Evidence | Root Cause | Required Action | Owner | Due Date | Status | Closure Evidence | Closed Date |
|----|:-----:|:------------:|:----------:|-------------|----------|------------|-----------------|-------|:--------:|:------:|-----------------|:-----------:|
| NC-001 | {{class}} | {{#}} | {{date}} | {{description}} | {{where in SOP}} | {{why it exists}} | {{specific fix}} | {{role}} | {{date}} | {{Open/In Progress/Closed/Regressed}} | {{evidence}} | {{date}} |
| NC-002 | {{class}} | {{#}} | {{date}} | {{description}} | {{evidence}} | {{cause}} | {{action}} | {{role}} | {{date}} | {{status}} | {{evidence}} | {{date}} |

---

## Summary Statistics

| Metric | Initial Audit | Re-Audit 1 | Re-Audit 2 |
|--------|:------------:|:----------:|:----------:|
| **Audit Date** | {{date}} | {{date}} | {{date}} |
| Critical Open | {{count}} | {{count}} | {{count}} |
| Major Open | {{count}} | {{count}} | {{count}} |
| Minor Open | {{count}} | {{count}} | {{count}} |
| Observations | {{count}} | {{count}} | {{count}} |
| **Total Open** | {{count}} | {{count}} | {{count}} |
| **Audit Score** | {{score}}% | {{score}}% | {{score}}% |
| **Verdict** | {{verdict}} | {{verdict}} | {{verdict}} |

---

## Trend

```
Audit 1: [{{score}}%] {{verdict}}
         Critical: {{n}} | Major: {{n}} | Minor: {{n}}
              ↓
Audit 2: [{{score}}%] {{verdict}}
         Critical: {{n}} | Major: {{n}} | Minor: {{n}}
         Closed: {{n}} | New: {{n}} | Regressed: {{n}}
```

---

## Closure Rules

- **Critical/Major:** Requires re-audit by @sop-auditor with evidence
- **Minor:** Can be closed by SOP owner with evidence, verified in next periodic audit
- **Observation:** Closed when addressed in next SOP revision
- **Regressed:** Automatically escalated one classification level (Minor → Major)

---

**Register Owner:** _________________________ **Last Review:** _______________

---

*Nonconformity Register Template v1.0. Based on ISO 9001:2015 clause 10.2 and Crosby Zero Defects.*
*Template: nonconformity-register-template.md | SOP Factory | Synkra Hybrid*


---

## Referência: templates/sop-analysis-report-tmpl.md

# SOP Analysis Report

| Field              | Value                           |
|--------------------|---------------------------------|
| **Report ID**      | {{report_id}}                   |
| **SOP Analyzed**   | {{sop_id}} v{{sop_version}}     |
| **SOP Title**      | {{sop_title}}                   |
| **Analyst**        | {{analyst_name}}                |
| **Analysis Date**  | {{analysis_date}}               |
| **Report Version** | {{report_version}}              |
| **Methodology**    | {{methodology}}                 |

---

## 1. Executive Summary

### Overall Assessment

| Metric              | Value                          |
|---------------------|--------------------------------|
| **Overall Score**   | {{overall_score}} / 100        |
| **Grade**           | {{grade}}                      |
| **Verdict**         | {{verdict}}                    |
| **Risk Level**      | {{risk_level}}                 |

**Grade Scale:** A (90-100) Exemplary | B (80-89) Effective | C (70-79) Adequate | D (60-69) Below Standard | F (<60) Unacceptable

### Top 3 Findings

| #  | Finding                          | Severity   | Dimension              | Impact                        |
|----|----------------------------------|------------|------------------------|-------------------------------|
| 1  | {{finding_1_title}}              | {{finding_1_severity}} | {{finding_1_dimension}} | {{finding_1_impact}}   |
| 2  | {{finding_2_title}}              | {{finding_2_severity}} | {{finding_2_dimension}} | {{finding_2_impact}}   |
| 3  | {{finding_3_title}}              | {{finding_3_severity}} | {{finding_3_dimension}} | {{finding_3_impact}}   |

### Recommendation

{{executive_recommendation}}

---

## 2. Dimensional Scorecard

<!-- SCORECARD GUIDANCE:
     - Score each dimension 0-10.
     - Weight reflects importance to overall score (must sum to 1.00).
     - Weighted Score = Score x Weight.
     - Overall Score = Sum of Weighted Scores x 10 (to get 0-100 scale).
     - Evidence Citations: MANDATORY. Every dimension MUST have at least one
       [MARKER] file:section citation. VETO-ANL-005 blocks if any cell is empty.
       Format: [MARKER] file:section — "observation"
       Valid markers: [OBS], [DOC], [REP], [COR], [INF]
       Invalid for scoring: [ASM], [UNK]
-->

| #  | Dimension                    | Score (0-10) | Weight | Weighted Score | Evidence Citations              | Assessment          |
|----|------------------------------|:------------:|:------:|:--------------:|---------------------------------|---------------------|
| 1  | Clarity & Readability        | {{score_1}}  | 0.12   | {{weighted_1}} | {{evidence_citations_1}}        | {{assessment_1}}    |
| 2  | Completeness                 | {{score_2}}  | 0.15   | {{weighted_2}} | {{evidence_citations_2}}        | {{assessment_2}}    |
| 3  | Accuracy & Correctness       | {{score_3}}  | 0.12   | {{weighted_3}} | {{evidence_citations_3}}        | {{assessment_3}}    |
| 4  | Actionability                | {{score_4}}  | 0.10   | {{weighted_4}} | {{evidence_citations_4}}        | {{assessment_4}}    |
| 5  | Compliance & Governance      | {{score_5}}  | 0.12   | {{weighted_5}} | {{evidence_citations_5}}        | {{assessment_5}}    |
| 6  | Error Handling & Recovery    | {{score_6}}  | 0.10   | {{weighted_6}} | {{evidence_citations_6}}        | {{assessment_6}}    |
| 7  | Measurability & Verification | {{score_7}}  | 0.08   | {{weighted_7}} | {{evidence_citations_7}}        | {{assessment_7}}    |
| 8  | Maintainability              | {{score_8}}  | 0.07   | {{weighted_8}} | {{evidence_citations_8}}        | {{assessment_8}}    |
| 9  | Role Clarity (RACI)          | {{score_9}}  | 0.08   | {{weighted_9}} | {{evidence_citations_9}}        | {{assessment_9}}    |
| 10 | Machine Readability          | {{score_10}} | 0.06   | {{weighted_10}}| {{evidence_citations_10}}       | {{assessment_10}}   |
|    | **TOTAL**                    |              | **1.00** | **{{total_weighted}}** |                         |                     |
|    | **Overall Score (x10)**      |              |        | **{{overall_score}}/100** |                      |                     |

---

## 3. Detailed Findings

<!-- DETAILED FINDINGS GUIDANCE:
     - One subsection per dimension.
     - For each: what was evaluated, what was found, evidence, impact, recommendation.
     - Use severity tags: [CRITICAL] [HIGH] [MEDIUM] [LOW] [INFO]
-->

### 3.1 Clarity & Readability ({{score_1}}/10)

**What was evaluated:** Language clarity, sentence structure, use of jargon, formatting consistency, logical flow, readability metrics (Flesch-Kincaid).

**Strengths:**
- {{d1_strength_1}}
- {{d1_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d1_finding_1}}       | {{d1_sev_1}}   | {{d1_evidence_1}}  | {{d1_impact_1}}     |
| 2  | {{d1_finding_2}}       | {{d1_sev_2}}   | {{d1_evidence_2}}  | {{d1_impact_2}}     |

**Recommendation:** {{d1_recommendation}}

---

### 3.2 Completeness ({{score_2}}/10)

**What was evaluated:** Presence and completeness of all required SOP sections per organizational template and regulatory standards.

**Strengths:**
- {{d2_strength_1}}
- {{d2_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d2_finding_1}}       | {{d2_sev_1}}   | {{d2_evidence_1}}  | {{d2_impact_1}}     |
| 2  | {{d2_finding_2}}       | {{d2_sev_2}}   | {{d2_evidence_2}}  | {{d2_impact_2}}     |

**Recommendation:** {{d2_recommendation}}

---

### 3.3 Accuracy & Correctness ({{score_3}}/10)

**What was evaluated:** Technical accuracy, correct references, valid commands/procedures, up-to-date information.

**Strengths:**
- {{d3_strength_1}}
- {{d3_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d3_finding_1}}       | {{d3_sev_1}}   | {{d3_evidence_1}}  | {{d3_impact_1}}     |
| 2  | {{d3_finding_2}}       | {{d3_sev_2}}   | {{d3_evidence_2}}  | {{d3_impact_2}}     |

**Recommendation:** {{d3_recommendation}}

---

### 3.4 Actionability ({{score_4}}/10)

**What was evaluated:** Step-by-step clarity, one-action-per-step adherence, decision point logic, use of imperative mood, specificity of instructions.

**Strengths:**
- {{d4_strength_1}}
- {{d4_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d4_finding_1}}       | {{d4_sev_1}}   | {{d4_evidence_1}}  | {{d4_impact_1}}     |
| 2  | {{d4_finding_2}}       | {{d4_sev_2}}   | {{d4_evidence_2}}  | {{d4_impact_2}}     |

**Recommendation:** {{d4_recommendation}}

---

### 3.5 Compliance & Governance ({{score_5}}/10)

**What was evaluated:** Alignment with applicable regulatory requirements (FDA 21 CFR, ISO, GMP, SOX, etc.), mandatory language, audit trail provisions, approval workflows.

**Strengths:**
- {{d5_strength_1}}
- {{d5_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d5_finding_1}}       | {{d5_sev_1}}   | {{d5_evidence_1}}  | {{d5_impact_1}}     |
| 2  | {{d5_finding_2}}       | {{d5_sev_2}}   | {{d5_evidence_2}}  | {{d5_impact_2}}     |

**Recommendation:** {{d5_recommendation}}

---

### 3.6 Error Handling & Recovery ({{score_6}}/10)

**What was evaluated:** Failure mode identification, escalation paths, rollback procedures, deviation handling, recovery actions.

**Strengths:**
- {{d6_strength_1}}
- {{d6_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d6_finding_1}}       | {{d6_sev_1}}   | {{d6_evidence_1}}  | {{d6_impact_1}}     |
| 2  | {{d6_finding_2}}       | {{d6_sev_2}}   | {{d6_evidence_2}}  | {{d6_impact_2}}     |

**Recommendation:** {{d6_recommendation}}

---

### 3.7 Measurability & Verification ({{score_7}}/10)

**What was evaluated:** Acceptance criteria specificity, measurability, verification methods, pause points, sign-off requirements.

**Strengths:**
- {{d7_strength_1}}
- {{d7_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d7_finding_1}}       | {{d7_sev_1}}   | {{d7_evidence_1}}  | {{d7_impact_1}}     |
| 2  | {{d7_finding_2}}       | {{d7_sev_2}}   | {{d7_evidence_2}}  | {{d7_impact_2}}     |

**Recommendation:** {{d7_recommendation}}

---

### 3.8 Maintainability ({{score_8}}/10)

**What was evaluated:** Modular structure, version control, review schedule, change history, ease of update, template compliance.

**Strengths:**
- {{d8_strength_1}}
- {{d8_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d8_finding_1}}       | {{d8_sev_1}}   | {{d8_evidence_1}}  | {{d8_impact_1}}     |
| 2  | {{d8_finding_2}}       | {{d8_sev_2}}   | {{d8_evidence_2}}  | {{d8_impact_2}}     |

**Recommendation:** {{d8_recommendation}}

---

### 3.9 Role Clarity — RACI ({{score_9}}/10)

**What was evaluated:** RACI matrix completeness, single accountability per activity, role clarity, escalation ownership.

**Strengths:**
- {{d9_strength_1}}
- {{d9_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d9_finding_1}}       | {{d9_sev_1}}   | {{d9_evidence_1}}  | {{d9_impact_1}}     |
| 2  | {{d9_finding_2}}       | {{d9_sev_2}}   | {{d9_evidence_2}}  | {{d9_impact_2}}     |

**Recommendation:** {{d9_recommendation}}

---

### 3.10 Machine Readability ({{score_10}}/10)

**What was evaluated:** Suitability for conversion to ML-SOP format, structured data presence, automation potential, tool references, agent compatibility.

**Strengths:**
- {{d10_strength_1}}
- {{d10_strength_2}}

**Findings:**

| #  | Finding                | Severity       | Evidence           | Impact              |
|----|------------------------|----------------|--------------------|---------------------|
| 1  | {{d10_finding_1}}      | {{d10_sev_1}}  | {{d10_evidence_1}} | {{d10_impact_1}}    |
| 2  | {{d10_finding_2}}      | {{d10_sev_2}}  | {{d10_evidence_2}} | {{d10_impact_2}}    |

**Recommendation:** {{d10_recommendation}}

---

## 4. Gap Inventory

<!-- GAP INVENTORY GUIDANCE:
     - Consolidate all gaps found across all dimensions.
     - Prioritize: P1 (Critical, fix immediately), P2 (High, fix before approval), P3 (Medium, fix in next revision).
     - Map each gap to the dimension and finding that identified it.
     - Estimate effort: XS (< 1hr), S (1-4hr), M (4-8hr), L (1-3 days), XL (> 3 days).
-->

| Gap ID  | Gap Description                | Dimension              | Severity   | Current State         | Target State             | Effort     |
|---------|--------------------------------|------------------------|------------|-----------------------|--------------------------|------------|
| GAP-001 | {{gap_1_description}}          | {{gap_1_dimension}}    | {{gap_1_sev}} | {{gap_1_current}}  | {{gap_1_target}}         | {{gap_1_effort}} |
| GAP-002 | {{gap_2_description}}          | {{gap_2_dimension}}    | {{gap_2_sev}} | {{gap_2_current}}  | {{gap_2_target}}         | {{gap_2_effort}} |
| GAP-003 | {{gap_3_description}}          | {{gap_3_dimension}}    | {{gap_3_sev}} | {{gap_3_current}}  | {{gap_3_target}}         | {{gap_3_effort}} |
| GAP-004 | {{gap_4_description}}          | {{gap_4_dimension}}    | {{gap_4_sev}} | {{gap_4_current}}  | {{gap_4_target}}         | {{gap_4_effort}} |
| GAP-005 | {{gap_5_description}}          | {{gap_5_dimension}}    | {{gap_5_sev}} | {{gap_5_current}}  | {{gap_5_target}}         | {{gap_5_effort}} |

**Summary:** {{total_gaps}} gaps identified ({{p1_count}} P1, {{p2_count}} P2, {{p3_count}} P3)

**Effort Scale:** XS (< 1h) | S (1-4h) | M (4-8h) | L (1-3 days) | XL (> 3 days)

---

## 5. Remediation Plan

<!-- REMEDIATION PLAN GUIDANCE:
     - Improvement Source is MANDATORY. VETO-ANL-007 blocks if any cell is empty.
       Format: [SOURCE: file_path:section] — traces the recommendation to evidence.
       Example: [SOURCE: sop-scoring-rubric.yaml:DIM-03]
-->

### Priority 1 — Critical (Must fix before approval)

| #  | Action                          | Gap Ref   | Improvement Source          | Owner          | Deadline        | Success Criteria          | Status     |
|----|---------------------------------|-----------|-----------------------------|----------------|-----------------|---------------------------|------------|
| 1  | {{p1_action_1}}                 | GAP-{{p1_gap_ref_1}} | {{p1_improvement_source_1}} | {{p1_owner_1}} | {{p1_deadline_1}} | {{p1_criteria_1}} | {{p1_status_1}} |
| 2  | {{p1_action_2}}                 | GAP-{{p1_gap_ref_2}} | {{p1_improvement_source_2}} | {{p1_owner_2}} | {{p1_deadline_2}} | {{p1_criteria_2}} | {{p1_status_2}} |

### Priority 2 — High (Must fix within 30 days)

| #  | Action                          | Gap Ref   | Improvement Source          | Owner          | Deadline        | Success Criteria          | Status     |
|----|---------------------------------|-----------|-----------------------------|----------------|-----------------|---------------------------|------------|
| 1  | {{p2_action_1}}                 | GAP-{{p2_gap_ref_1}} | {{p2_improvement_source_1}} | {{p2_owner_1}} | {{p2_deadline_1}} | {{p2_criteria_1}} | {{p2_status_1}} |
| 2  | {{p2_action_2}}                 | GAP-{{p2_gap_ref_2}} | {{p2_improvement_source_2}} | {{p2_owner_2}} | {{p2_deadline_2}} | {{p2_criteria_2}} | {{p2_status_2}} |

### Priority 3 — Medium (Fix in next revision cycle)

| #  | Action                          | Gap Ref   | Improvement Source          | Owner          | Deadline        | Success Criteria          | Status     |
|----|---------------------------------|-----------|-----------------------------|----------------|-----------------|---------------------------|------------|
| 1  | {{p3_action_1}}                 | GAP-{{p3_gap_ref_1}} | {{p3_improvement_source_1}} | {{p3_owner_1}} | {{p3_deadline_1}} | {{p3_criteria_1}} | {{p3_status_1}} |
| 2  | {{p3_action_2}}                 | GAP-{{p3_gap_ref_2}} | {{p3_improvement_source_2}} | {{p3_owner_2}} | {{p3_deadline_2}} | {{p3_criteria_2}} | {{p3_status_2}} |

---

## 6. Metadata

| Field                | Value                           |
|----------------------|---------------------------------|
| **Analysis Tool**    | {{analysis_tool}}               |
| **Tool Version**     | {{tool_version}}                |
| **Time Spent**       | {{analysis_duration}}           |
| **Documents Reviewed** | {{documents_reviewed}}        |
| **Methodology**      | {{methodology}}                 |
| **Confidence Level** | {{confidence_level}}            |
| **Regulatory Context** | {{regulatory_context}}        |
| **Next Review**      | {{next_review_date}}            |

### Scoring Methodology

Each dimension is scored 0-10 and weighted according to the SOP's domain and risk level. The overall score is the sum of weighted dimension scores multiplied by 10 (to produce a 0-100 scale). Grades follow the standard scale:

- **A (90-100):** Exemplary — ready for immediate deployment
- **B (80-89):** Effective — minor improvements recommended
- **C (70-79):** Adequate — several improvements needed before deployment
- **D (60-69):** Below Standard — significant rework required
- **F (<60):** Unacceptable — fundamental redesign needed

---

## 7. Evidence Summary

| Marker | Label              | Count | % of Total | Valid for Scoring |
|--------|--------------------|:-----:|:----------:|:-----------------:|
| [OBS]  | Directly Observed  | {{obs_count}}  | {{obs_pct}}  | Yes |
| [DOC]  | Documented         | {{doc_count}}  | {{doc_pct}}  | Yes |
| [REP]  | Reported           | {{rep_count}}  | {{rep_pct}}  | Yes |
| [COR]  | Corroborated       | {{cor_count}}  | {{cor_pct}}  | Yes |
| [INF]  | Inferred           | {{inf_count}}  | {{inf_pct}}  | Yes |
| [ASM]  | Assumed            | {{asm_count}}  | {{asm_pct}}  | No  |
| [UNK]  | Unknown            | {{unk_count}}  | {{unk_pct}}  | No  |
|        | **TOTAL**          | **{{total_evidence_count}}** | **100%** | |

**Evidence Quality Score:** {{evidence_quality_score}} (weighted average of marker scores)

**Invention Red Flags Found:** {{red_flag_count}} (must be 0 for report approval)

{{#if red_flag_count > 0}}
| # | Red Flag Phrase | Location | Status |
|---|----------------|----------|--------|
{{#each red_flags}}
| {{@index}} | {{this.phrase}} | {{this.location}} | {{this.status}} |
{{/each}}
{{/if}}

---

*Report generated on {{analysis_date}} by {{analyst_name}}. Report ID: {{report_id}}.*
*Template: sop-analysis-report-tmpl.md | SOP Factory | Synkra Hybrid*


---

## Referência: templates/sop-scorecard-tmpl.md

# SOP Scorecard

| Field              | Value                          |
|--------------------|--------------------------------|
| **SOP ID**         | {{sop_id}}                     |
| **SOP Title**      | {{sop_title}}                  |
| **Version**        | {{sop_version}}                |
| **Assessed By**    | {{assessor_name}}              |
| **Assessment Date**| {{assessment_date}}            |

---

## Overall Assessment

| Metric              | Value                          |
|---------------------|--------------------------------|
| **Overall Score**   | **{{overall_score}} / 100**    |
| **Grade**           | **{{grade}}**                  |
| **Verdict**         | **{{verdict}}**                |

**Grade Scale:** A (90-100) | B (80-89) | C (70-79) | D (60-69) | F (<60)
**Verdicts:** APPROVED | APPROVED WITH CONDITIONS | NEEDS REVISION | REDO

---

## 10-Dimension Heatmap

<!-- HEATMAP GUIDANCE:
     - Score 0-10 per dimension.
     - Status uses visual indicators:
       - 9-10 = EXCELLENT
       - 7-8  = GOOD
       - 5-6  = FAIR
       - 3-4  = POOR
       - 0-2  = CRITICAL
-->

| #  | Dimension                    | Score   | Grade | Status     |
|----|------------------------------|---------|-------|------------|
|  1 | Clarity & Readability        | {{score_1}}/10  | {{grade_1}} | {{status_1}} |
|  2 | Completeness                 | {{score_2}}/10  | {{grade_2}} | {{status_2}} |
|  3 | Accuracy & Correctness       | {{score_3}}/10  | {{grade_3}} | {{status_3}} |
|  4 | Actionability                | {{score_4}}/10  | {{grade_4}} | {{status_4}} |
|  5 | Compliance & Governance      | {{score_5}}/10  | {{grade_5}} | {{status_5}} |
|  6 | Error Handling & Recovery    | {{score_6}}/10  | {{grade_6}} | {{status_6}} |
|  7 | Measurability & Verification | {{score_7}}/10  | {{grade_7}} | {{status_7}} |
|  8 | Maintainability              | {{score_8}}/10  | {{grade_8}} | {{status_8}} |
|  9 | Role Clarity (RACI)          | {{score_9}}/10  | {{grade_9}} | {{status_9}} |
| 10 | Machine Readability          | {{score_10}}/10 | {{grade_10}}| {{status_10}}|

**Status Key:** EXCELLENT | GOOD | FAIR | POOR | CRITICAL

**Visual Heatmap:**
```
Clarity      [{{d1_bar}}] {{score_1}}/10
Completeness [{{d2_bar}}] {{score_2}}/10
Accuracy     [{{d3_bar}}] {{score_3}}/10
Actionable   [{{d4_bar}}] {{score_4}}/10
Compliance   [{{d5_bar}}] {{score_5}}/10
Error Hdl    [{{d6_bar}}] {{score_6}}/10
Measurable   [{{d7_bar}}] {{score_7}}/10
Maintain     [{{d8_bar}}] {{score_8}}/10
RACI         [{{d9_bar}}] {{score_9}}/10
ML-Ready     [{{d10_bar}}] {{score_10}}/10
```

---

## Top 3 Strengths

| #  | Dimension              | Strength                                  |
|----|------------------------|-------------------------------------------|
| 1  | {{str_1_dimension}}    | {{strength_1_description}}                |
| 2  | {{str_2_dimension}}    | {{strength_2_description}}                |
| 3  | {{str_3_dimension}}    | {{strength_3_description}}                |

---

## Top 3 Improvements Needed

| #  | Dimension              | Issue                       | Priority | Recommended Action              |
|----|------------------------|-----------------------------|----------|---------------------------------|
| 1  | {{imp_1_dimension}}    | {{improvement_1_description}} | {{imp_1_priority}} | {{imp_1_action}}     |
| 2  | {{imp_2_dimension}}    | {{improvement_2_description}} | {{imp_2_priority}} | {{imp_2_action}}     |
| 3  | {{imp_3_dimension}}    | {{improvement_3_description}} | {{imp_3_priority}} | {{imp_3_action}}     |

**Priority:** P1 (Critical) | P2 (High) | P3 (Medium)

---

## Verdict & Next Steps

**Verdict:** {{verdict}}

{{verdict_rationale}}

**Required Actions Before Approval:**

{{#if has_required_actions}}
- [ ] {{required_action_1}}
- [ ] {{required_action_2}}
- [ ] {{required_action_3}}
{{else}}
No blocking actions. SOP is approved for use.
{{/if}}

---

## Next Review

| Field               | Value              |
|---------------------|--------------------|
| **Next Review Date** | {{next_review_date}} |
| **Review Type**     | {{review_type}}    |
| **Assigned Reviewer** | {{reviewer_name}} |
| **Full Report Ref** | {{report_id_ref}}  |

<!-- Review Type: FULL (all dimensions) | TARGETED (specific dimensions) | DELTA (changes since last review) -->

---

*Scorecard generated on {{assessment_date}}. Full analysis: {{report_id_ref}}.*
*Template: sop-scorecard-tmpl.md | SOP Factory | Synkra Hybrid*
