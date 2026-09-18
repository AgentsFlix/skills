# sop-criar · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `sop-criar.md` uma skill chamada sop-criar. Quando eu pedir algo como "escreve o SOP de [processo]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# POR ESCRITO · SOP para humano, SOP para agente, checklist, conversão de formato

Escreve o procedimento duas vezes, de propósito: uma versão para pessoa, no padrão FDA/GMP, e uma para agente, em YAML ou JSON com estados, decisões e ferramentas. Do SOP sai o checklist operacional pelo método de Gawande. E converte entre formatos sem perder o sentido.

## When to Use

- Diga: "escreve o SOP de [processo]" ou "versão para agente deste SOP".
- NÃO use para extrair processo da cabeça de alguém (`sop-extrair`) nem para auditar (`sop-auditar`).

## Quick Reference

| procedimento | referência |
|---|---|
| create sop human | `references/create-sop-human.md` |
| create sop ml | `references/create-sop-ml.md` |
| create checklist | `references/create-checklist.md` |
| convert sop format | `references/convert-sop-format.md` |

| apoio | arquivo |
|---|---|
| template | `templates/sop-human-tmpl.md` |
| template | `templates/sop-ml-tmpl.md` |
| template | `templates/ml-sop-yaml-template.yaml` |
| template | `templates/ml-sop-json-template.json` |
| template | `templates/checklist-from-sop-tmpl.md` |
| template | `templates/decision-tree-template.yaml` |
| template | `templates/state-machine-template.yaml` |
| template | `templates/tool-binding-template.yaml` |
| rubrica/dado | `references/data-sop-ml-schema.yaml` |
| rubrica/dado | `references/data-sop-ml-schema-examples.yaml` |
| rubrica/dado | `references/data-category-map.yaml` |
| checklist | `references/checklist-sop-completeness-checklist.md` |
| checklist | `references/checklist-sop-ml-validation-checklist.md` |
| checklist | `references/checklist-stranger-test-checklist.md` |

## Procedure

1. Identifique o procedimento pela tabela. Abra a referência e leia `Inputs` e `Prerequisites`; colete do usuário o que for `required` e pergunte o que faltar.
2. Siga as fases da referência na ordem. Onde ela citar um arquivo de apoio desta skill (listados no fim), abra-o; onde citar script `.cjs`/`.py` do runtime de origem, faça a etapa manualmente e diga que fez.
3. Preencha o template escolhido sem remover seção; seção não aplicável fica marcada como N/A com motivo.
4. Rode o checklist correspondente (arquivos de apoio que começam com checklist-) sobre o resultado. Corrija o que falhou.
5. Entregue no formato do template de saída, com o checklist marcado item a item.

## Pitfalls

- Escrever SOP para humano com a linguagem de máquina, ou o inverso. São dois documentos, de propósito.
- Pular `Prerequisites`. A referência pede acesso ao dono do processo por um motivo.
- Tratar script do runtime de origem como executável aqui. Faça a etapa e registre.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O artefato final segue o template de saída desta skill, seção por seção.
2. Cada seção obrigatória do template está preenchida ou marcada N/A com motivo.
3. O checklist correspondente aparece na entrega com cada item marcado, sem item falho.
4. O SOP para agente parseia (YAML ou JSON válido) quando gerado.
5. A resposta nomeia a referência usada.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/checklist-sop-completeness-checklist.md`
- `references/checklist-sop-ml-validation-checklist.md`
- `references/checklist-stranger-test-checklist.md`
- `references/convert-sop-format.md`
- `references/create-checklist.md`
- `references/create-sop-human.md`
- `references/create-sop-ml.md`
- `references/data-category-map.yaml`
- `references/data-sop-ml-schema-examples.yaml`
- `references/data-sop-ml-schema.yaml`
- `templates/checklist-from-sop-tmpl.md`
- `templates/decision-tree-template.yaml`
- `templates/ml-sop-json-template.json`
- `templates/ml-sop-yaml-template.yaml`
- `templates/sop-human-tmpl.md`
- `templates/sop-ml-tmpl.md`
- `templates/state-machine-template.yaml`
- `templates/tool-binding-template.yaml`


---

## Referência: references/checklist-sop-completeness-checklist.md

# SOP Completeness Checklist

> **Purpose:** Verify that every expected element of a Standard Operating Procedure is present and properly populated. This is a structural audit — it checks for the EXISTENCE of content, not its quality (use the Quality Checklist for that).
>
> **Usage:** Go through every item. Check if the element exists and is populated. Mark N/A only if the element is genuinely not applicable to this SOP type.

| Field              | Value                           |
|--------------------|---------------------------------|
| **Checklist ID**   | QC-COMPLETE-001                 |
| **Purpose**        | Verify every required element of a complete SOP is present and populated |
| **SOP Under Review** | ________________________      |
| **SOP Version**    | ________________________        |
| **Reviewer**       | ________________________        |
| **Review Date**    | ________________________        |
| **Total Items**    | 64                              |

---

## Section 1: Header Metadata (12 items)

Verify each metadata field is present, correctly formatted, and populated.

| #  | Field                                                          | Present | Correct Format | Notes |
|----|----------------------------------------------------------------|:-------:|:--------------:|-------|
| 1  | SOP ID (format: SOP-DEPT-SEQ-REV)                             | [ ]     | [ ]            |       |
| 2  | Version number (semantic: MAJOR.MINOR.PATCH or sequential)     | [ ]     | [ ]            |       |
| 3  | Title (descriptive, unambiguous, matches content)              | [ ]     | [ ]            |       |
| 4  | Effective date (ISO 8601: YYYY-MM-DD)                          | [ ]     | [ ]            |       |
| 5  | Review/expiry date (set per classification cycle)              | [ ]     | [ ]            |       |
| 6  | Classification (CRITICAL / MAJOR / STANDARD / INFORMATIONAL)   | [ ]     | [ ]            |       |
| 7  | Department/function                                            | [ ]     | [ ]            |       |
| 8  | Author name and role                                           | [ ]     | [ ]            |       |
| 9  | Approver name and role                                         | [ ]     | [ ]            |       |
| 10 | Status (DRAFT / IN REVIEW / APPROVED / SUPERSEDED / RETIRED)   | [ ]     | [ ]            |       |
| 11 | Supersedes field (previous SOP ID or "N/A - Initial Release")  | [ ]     | [ ]            |       |
| 12 | Distribution list or applicability statement                   | [ ]     | [ ]            |       |

**Section 1 Score:** _____ / 12

---

## Section 2: Purpose (3 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 13 | Purpose statement present (2-4 sentences)                      | [ ]     | [ ]      |       |
| 14 | Starts with action verb ("To establish...", "To ensure...", "To define...") | [ ] | [ ] |       |
| 15 | Clearly states the business objective or regulatory driver     | [ ]     | [ ]      |       |

**Section 2 Score:** _____ / 3

---

## Section 3: Scope (2 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 16 | In-scope boundaries defined (what IS covered)                  | [ ]     | [ ]      |       |
| 17 | Out-of-scope boundaries defined with references to related SOPs | [ ]    | [ ]      |       |

**Section 3 Score:** _____ / 2

---

## Section 4: Definitions & Abbreviations (3 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 18 | Definitions table present for all technical/domain terms       | [ ]     | [ ]      |       |
| 19 | Abbreviations list present with full expansions                | [ ]     | [ ]      |       |
| 20 | Every term used in the SOP that could be ambiguous is defined  | [ ]     | [ ]      |       |

**Section 4 Score:** _____ / 3

---

## Section 5: RACI Matrix (4 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 21 | RACI matrix present with all major activities listed           | [ ]     | [ ]      |       |
| 22 | Each activity row has exactly one "A" (Accountable)            | [ ]     | [ ]      |       |
| 23 | All roles referenced in procedure steps appear in RACI         | [ ]     | [ ]      |       |
| 24 | RACI roles match organizational chart / team structure         | [ ]     | [ ]      |       |

**Section 5 Score:** _____ / 4

---

## Section 6: Prerequisites (7 items)

### Materials & Equipment

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 25 | Materials list with specifications and quantities              | [ ]     | [ ]      |       |
| 26 | Equipment list with calibration/version requirements           | [ ]     | [ ]      |       |
| 27 | Software/systems list with version requirements                | [ ]     | [ ]      |       |

### Access & Permissions

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 28 | System access requirements with permission levels documented   | [ ]     | [ ]      |       |
| 29 | Instructions for requesting access (where applicable)          | [ ]     | [ ]      |       |

### Training Requirements

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 30 | Required training modules listed with certification IDs        | [ ]     | [ ]      |       |
| 31 | Training verification method described (certificate, record, attestation) | [ ] | [ ] |       |

**Section 6 Score:** _____ / 7

---

## Section 7: Procedure — Steps (12 items)

### Step Structure

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 32 | Steps are numbered sequentially (no gaps)                      | [ ]     | [ ]      |       |
| 33 | Each step contains exactly one action                          | [ ]     | [ ]      |       |
| 34 | Steps are written in imperative mood ("Open...", "Record...", "Verify...") | [ ] | [ ] |       |
| 35 | Each step identifies the performer (role/person)               | [ ]     | [ ]      |       |
| 36 | Expected result or completion criterion stated per step        | [ ]     | [ ]      |       |
| 37 | Estimated duration provided for time-sensitive steps           | [ ]     | [ ]      |       |

### Decision Points

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 38 | All decision points identified and labeled                     | [ ]     | [ ]      |       |
| 39 | Each decision point has explicit IF/THEN/ELSE with step references | [ ] | [ ]      |       |
| 40 | Default/fallback branch exists for unexpected conditions       | [ ]     | [ ]      |       |

### Cautions, Warnings & Critical Steps

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 41 | Critical steps tagged with [CRITICAL]                          | [ ]     | [ ]      |       |
| 42 | Caution/warning steps tagged with [CAUTION]                    | [ ]     | [ ]      |       |
| 43 | Pause points defined where second-person verification is required | [ ]  | [ ]      |       |

**Section 7 Score:** _____ / 12

---

## Section 8: Verification & Acceptance (4 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 44 | In-process verification checkpoints defined                    | [ ]     | [ ]      |       |
| 45 | Each checkpoint has measurable acceptance criteria              | [ ]     | [ ]      |       |
| 46 | Verification method specified (visual inspection, system check, peer review, test) | [ ] | [ ] |       |
| 47 | Final verification checklist or sign-off included              | [ ]     | [ ]      |       |

**Section 8 Score:** _____ / 4

---

## Section 9: Error Handling & Deviations (5 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 48 | Known failure modes table (symptom, cause, action, escalation) | [ ]     | [ ]      |       |
| 49 | At least 3 failure scenarios documented                        | [ ]     | [ ]      |       |
| 50 | Escalation path defined (who, how, within what timeframe)      | [ ]     | [ ]      |       |
| 51 | Deviation procedure with form reference and notification timeline | [ ]   | [ ]      |       |
| 52 | Rollback procedure present (where applicable)                  | [ ]     | [ ]      |       |

**Section 9 Score:** _____ / 5

---

## Section 10: Records & Documentation (4 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 53 | All records/forms generated are listed                         | [ ]     | [ ]      |       |
| 54 | Record format specified (electronic, paper, form number)       | [ ]     | [ ]      |       |
| 55 | Retention period defined per record type                       | [ ]     | [ ]      |       |
| 56 | Storage location specified (system, folder, physical location) | [ ]     | [ ]      |       |

**Section 10 Score:** _____ / 4

---

## Section 11: Related Documents (2 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 57 | Related SOPs listed with IDs, titles, and relationship type    | [ ]     | [ ]      |       |
| 58 | Relationship type specified (parent, child, dependency, reference) | [ ]  | [ ]      |       |

**Section 11 Score:** _____ / 2

---

## Section 12: Revision History (3 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 59 | Revision history table present                                 | [ ]     | [ ]      |       |
| 60 | Current version entry exists with change description           | [ ]     | [ ]      |       |
| 61 | Change control process referenced                              | [ ]     | [ ]      |       |

**Section 12 Score:** _____ / 3

---

## Section 13: Appendices (2 items)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 62 | Supplementary materials included as appendices (forms, templates, reference data) | [ ] | [ ] |       |
| 63 | Each appendix labeled and referenced from the main body        | [ ]     | [ ]      |       |

**Section 13 Score:** _____ / 2

---

## Section 14: Sign-Off (1 item)

| #  | Item                                                           | Present | Complete | Notes |
|----|----------------------------------------------------------------|:-------:|:--------:|-------|
| 64 | Sign-off block present with fields for name, signature, date for Author, Reviewer, Approver, QA | [ ] | [ ] |       |

**Section 14 Score:** _____ / 1

---

## Scoring Summary

| Section                        | Items | Score       |
|--------------------------------|:-----:|:-----------:|
| 1. Header Metadata             | 12    | _____ / 12  |
| 2. Purpose                     | 3     | _____ / 3   |
| 3. Scope                       | 2     | _____ / 2   |
| 4. Definitions & Abbreviations | 3     | _____ / 3   |
| 5. RACI Matrix                 | 4     | _____ / 4   |
| 6. Prerequisites               | 7     | _____ / 7   |
| 7. Procedure — Steps           | 12    | _____ / 12  |
| 8. Verification & Acceptance   | 4     | _____ / 4   |
| 9. Error Handling & Deviations | 5     | _____ / 5   |
| 10. Records & Documentation    | 4     | _____ / 4   |
| 11. Related Documents          | 2     | _____ / 2   |
| 12. Revision History           | 3     | _____ / 3   |
| 13. Appendices                 | 2     | _____ / 2   |
| 14. Sign-Off                   | 1     | _____ / 1   |
| **TOTAL**                      | **64** | **_____ / 64** |

**Completeness Percentage:** _____ / 64 = _____%

### Interpretation

| Range     | Assessment                  | Action                                                    |
|-----------|-----------------------------|-----------------------------------------------------------|
| 95-100%   | **Fully Complete**          | Proceed to quality review                                 |
| 85-94%    | **Substantially Complete**  | Address missing items; may proceed to quality review       |
| 70-84%    | **Partially Complete**      | Return to author for completion before quality review      |
| <70%      | **Incomplete**              | Significant sections missing; requires major work          |

### Missing Elements Log

| Item # | Element Missing              | Required? (Y/N) | Notes / Justification for N/A      |
|--------|------------------------------|:----------------:|-------------------------------------|
|        |                              |                  |                                     |
|        |                              |                  |                                     |
|        |                              |                  |                                     |
|        |                              |                  |                                     |
|        |                              |                  |                                     |

**Final Verdict:** ___________________________

**Reviewer Signature:** _________________________ **Date:** _______________

---

*SOP Completeness Checklist v2.0. Covers all 14 sections of the standard SOP template (64 verification items).*
*Checklist: sop-completeness-checklist.md | SOP Factory | Synkra Hybrid*


---

## Referência: references/checklist-sop-ml-validation-checklist.md

# ML-SOP Validation Checklist

> **Purpose:** Validate that a machine-readable SOP (YAML format) is structurally sound, logically consistent, and compatible with AI agent execution. Use this checklist after converting or authoring a YAML SOP using `sop-ml-tmpl.md`.
>
> **Audience:** SOP Factory agents, automation engineers, QA reviewers validating ML-format SOPs.

| Field               | Value                           |
|---------------------|---------------------------------|
| **Checklist ID**    | QC-ML-VAL-001                   |
| **Purpose**         | Validate a machine-readable SOP (YAML) for structural integrity, logical correctness, and AI agent compatibility |
| **SOP Under Review** | ________________________       |
| **SOP Version**     | ________________________        |
| **Validator**       | ________________________        |
| **Validation Date** | ________________________        |
| **Total Items**     | 28                              |

---

## Section 1: Schema Validation (6 items)

> Verify the YAML document conforms to the expected schema structure and all required fields are present and correctly typed.

| #  | Item                                                                                                                                      | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 1  | YAML parses without syntax errors (valid YAML syntax, no tabs used for indentation, proper nesting)                                       | [ ]  | [ ]  | [ ] |       |
| 2  | All required top-level fields present: `sop.id`, `version`, `title`, `purpose`, `classification`, `status`, `trigger`, `context`, `steps`, `error_handling`, `quality_gate`, `outputs`, `metadata` | [ ]  | [ ]  | [ ] |       |
| 3  | `sop.id` follows naming convention (SOP-DEPT-SEQ-REV) and is unique within the SOP registry                                               | [ ]  | [ ]  | [ ] |       |
| 4  | All date fields use ISO 8601 format (YYYY-MM-DD or full ISO datetime)                                                                      | [ ]  | [ ]  | [ ] |       |
| 5  | All duration fields use ISO 8601 duration format (PT5M, PT1H, P1Y, etc.)                                                                   | [ ]  | [ ]  | [ ] |       |
| 6  | Enum fields contain only valid values: `classification` (low/medium/high/critical), `status` (DRAFT/ACTIVE/DEPRECATED/RETIRED), `trigger.type` (manual/scheduled/event/condition), `tool.type` (mcp/cli/api/ui/agent/manual), error action types, severity levels | [ ]  | [ ]  | [ ] |       |

**Section 1 Score:** _____ / 6

---

## Section 2: Step Integrity (8 items)

> Verify each step in the `steps` array is well-formed, properly sequenced, and has all required sub-fields.

| #  | Item                                                                                                                                      | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 7  | Every step has a unique `id` (no duplicates in the steps array)                                                                            | [ ]  | [ ]  | [ ] |       |
| 8  | Step IDs follow sequential convention (S001, S002, ... with no gaps)                                                                       | [ ]  | [ ]  | [ ] |       |
| 9  | Every step has all required fields: `id`, `name`, `action`, `performer`, `tool`, `input`, `output`, `validation`                           | [ ]  | [ ]  | [ ] |       |
| 10 | `action` field uses verb_noun convention (e.g., validate_input, fetch_data, generate_report)                                               | [ ]  | [ ]  | [ ] |       |
| 11 | Every step has at least one `validation.rules` entry with field, operator, expected, and message                                           | [ ]  | [ ]  | [ ] |       |
| 12 | `on_success` references a valid step ID (that exists in steps array) or "END"                                                              | [ ]  | [ ]  | [ ] |       |
| 13 | `on_failure` references a valid error handler ID defined in `error_handling.handlers`                                                      | [ ]  | [ ]  | [ ] |       |
| 14 | No orphan steps exist (every step is reachable from S001 via on_success and/or decision_point paths)                                       | [ ]  | [ ]  | [ ] |       |

**Section 2 Score:** _____ / 8

---

## Section 3: Decision Logic (5 items)

> Verify all decision points are logically complete, deterministic, and create valid execution paths.

| #  | Item                                                                                                                                      | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 15 | Every `decision_point` (non-null) has `question`, `evaluate`, and `branches` array                                                        | [ ]  | [ ]  | [ ] |       |
| 16 | Each `branches` array includes a `"condition": "default"` fallback branch as the last entry                                                | [ ]  | [ ]  | [ ] |       |
| 17 | All branch `goto` targets reference valid, existing step IDs                                                                               | [ ]  | [ ]  | [ ] |       |
| 18 | Decision conditions are mutually exclusive (no overlapping conditions that could match simultaneously)                                      | [ ]  | [ ]  | [ ] |       |
| 19 | The `evaluate` expression references only variables available in scope (previous step outputs, input values, environment variables, or context) | [ ]  | [ ]  | [ ] |       |

**Section 3 Score:** _____ / 5

---

## Section 4: Error Handling (4 items)

> Verify error handling is comprehensive, all handlers are properly defined, and recovery paths are valid.

| #  | Item                                                                                                                                      | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 20 | Every error handler has a unique `id` (no duplicates in handlers array)                                                                    | [ ]  | [ ]  | [ ] |       |
| 21 | Every handler ID referenced by `on_failure` in any step exists in `error_handling.handlers`                                                | [ ]  | [ ]  | [ ] |       |
| 22 | Retry configurations have reasonable limits: `max_retries` <= 5, `retry_delay` >= PT1S, `backoff` is one of fixed/linear/exponential       | [ ]  | [ ]  | [ ] |       |
| 23 | A `fallback` handler is defined for unmatched errors with `action`, `notify`, and `log_level` fields                                       | [ ]  | [ ]  | [ ] |       |

**Section 4 Score:** _____ / 4

---

## Section 5: AI Agent Compatibility (5 items)

> Verify the ML-SOP can be parsed and executed by an AI agent or automation pipeline without human interpretation.

| #  | Item                                                                                                                                      | Pass | Fail | N/A | Notes |
|----|-------------------------------------------------------------------------------------------------------------------------------------------|:----:|:----:|:---:|-------|
| 24 | All `tool.id` values in steps reference registered/available tools defined in `context.tools` array                                        | [ ]  | [ ]  | [ ] |       |
| 25 | All `input.source` values are resolvable: `literal` has a value, `previous_step` references a valid step.output, `env` references a defined environment variable, `user_input` is flagged for agent prompt | [ ]  | [ ]  | [ ] |       |
| 26 | All `output.store_as` variable names are unique across the entire SOP (no variable shadowing between steps)                                | [ ]  | [ ]  | [ ] |       |
| 27 | `quality_gate.criteria` weights sum to exactly 1.0 (tolerance: +/- 0.01)                                                                  | [ ]  | [ ]  | [ ] |       |
| 28 | The SOP can be traversed from step S001 to "END" through at least one complete, valid execution path without encountering undefined references | [ ]  | [ ]  | [ ] |       |

**Section 5 Score:** _____ / 5

---

## Scoring Summary

| Section                      | Items | Score       | Percentage |
|------------------------------|:-----:|:-----------:|:----------:|
| 1. Schema Validation         | 6     | _____ / 6   | _____%     |
| 2. Step Integrity            | 8     | _____ / 8   | _____%     |
| 3. Decision Logic            | 5     | _____ / 5   | _____%     |
| 4. Error Handling            | 4     | _____ / 4   | _____%     |
| 5. AI Agent Compatibility    | 5     | _____ / 5   | _____%     |
| **TOTAL**                    | **28** | **_____ / 28** | **_____%** |

---

## Validation Verdict

| Score Range | Verdict                    | Action                                                        |
|:-----------:|----------------------------|---------------------------------------------------------------|
| 100%        | **VALID**                  | ML-SOP passes all checks. Ready for agent deployment.          |
| 90-99%      | **VALID WITH WARNINGS**    | Minor issues flagged. Document warnings. Deployable with caution. |
| 75-89%      | **INVALID -- FIXABLE**     | Structural or logic issues found. Fix and re-validate.         |
| <75%        | **INVALID -- REWORK**      | Fundamental schema or logic errors. Requires significant rework. |

**Final Verdict:** ___________________________

### Critical Failures (must fix)

1. _________________________________________________________________________________
2. _________________________________________________________________________________
3. _________________________________________________________________________________

### Warnings (should fix)

1. _________________________________________________________________________________
2. _________________________________________________________________________________

---

## Automated Validation Results (if applicable)

> Fill this section if automated schema validation was run.

| Check                | Tool               | Result         | Details              |
|----------------------|--------------------|----------------|----------------------|
| YAML Syntax          | {{yaml_linter}}    | PASS / FAIL    | {{yaml_details}}     |
| JSON Schema          | {{schema_validator}} | PASS / FAIL  | {{schema_details}}   |
| Reference Integrity  | {{ref_checker}}    | PASS / FAIL    | {{ref_details}}      |
| Path Coverage        | {{path_analyzer}}  | PASS / FAIL    | {{path_details}}     |

---

**Validator Signature:** _________________________ **Date:** _______________

---

*ML-SOP Validation Checklist v2.0. 28 items across 5 validation dimensions for machine-readable SOP integrity.*
*Checklist: sop-ml-validation-checklist.md | SOP Factory | Synkra Hybrid*


---

## Referência: references/checklist-stranger-test-checklist.md

# Stranger Test Checklist

> **Purpose:** Verify that an SOP can be executed correctly by a qualified person with ZERO tribal knowledge. This is the ultimate executability test, applied by @sop-creator before declaring an SOP complete.
>
> **Philosophy:** "Your business is a prototype for 5,000 more just like it" (Gerber). If a qualified stranger cannot execute this SOP on their first attempt, it is not ready.
>
> **Verdict:**
> - **All 3 acid tests PASS + score ≥ 80%:** SOP is stranger-proof
> - **Any acid test FAIL:** SOP requires revision regardless of score
> - **Score < 60%:** SOP requires significant rewrite

| Field | Value |
|---|---|
| **Checklist ID** | QC-STRANGER-001 |
| **Purpose** | Verify SOP executability by someone with no tribal knowledge |
| **SOP Under Review** | ________________________ |
| **SOP Version** | ________________________ |
| **Tester** | ________________________ |
| **Test Date** | ________________________ |
| **Total Items** | 18 (15 scored + 3 acid tests) |

---

## Part 1: Executability Scan (15 items)

### Prerequisites & Context (4 items)

| # | Item | Pass | Fail | N/A | Notes |
|---|------|:----:|:----:|:---:|-------|
| 1 | All required tools, systems, and access are listed with versions | [ ] | [ ] | [ ] | |
| 2 | All prerequisite training or certifications are specified | [ ] | [ ] | [ ] | |
| 3 | Required inputs (data, documents, materials) are identified with sources | [ ] | [ ] | [ ] | |
| 4 | Environmental conditions or system states needed before starting are stated | [ ] | [ ] | [ ] | |

### Step Clarity (6 items)

| # | Item | Pass | Fail | N/A | Notes |
|---|------|:----:|:----:|:---:|-------|
| 5 | Every step contains exactly ONE action (no compound instructions) | [ ] | [ ] | [ ] | |
| 6 | Every step uses imperative mood ("Open...", "Click...", "Record...") | [ ] | [ ] | [ ] | |
| 7 | Every step identifies WHO performs the action (role or person) | [ ] | [ ] | [ ] | |
| 8 | Every step states WHAT the expected result looks like | [ ] | [ ] | [ ] | |
| 9 | Every decision point has explicit IF/THEN/ELSE with ALL branches covered | [ ] | [ ] | [ ] | |
| 10 | No step uses vague qualifiers without defining them in context ("appropriate", "as needed", "sufficient", "properly", "correctly") | [ ] | [ ] | [ ] | |

### Error Recovery (3 items)

| # | Item | Pass | Fail | N/A | Notes |
|---|------|:----:|:----:|:---:|-------|
| 11 | Common failure modes are listed with symptoms (how to recognize them) | [ ] | [ ] | [ ] | |
| 12 | Each failure mode has a recovery procedure (not just "contact support") | [ ] | [ ] | [ ] | |
| 13 | Escalation path is explicit: who to contact, how, and within what timeframe | [ ] | [ ] | [ ] | |

### Self-Sufficiency (2 items)

| # | Item | Pass | Fail | N/A | Notes |
|---|------|:----:|:----:|:---:|-------|
| 14 | All technical terms and abbreviations are defined in the SOP itself | [ ] | [ ] | [ ] | |
| 15 | No step requires knowledge that is only available via asking a colleague | [ ] | [ ] | [ ] | |

**Part 1 Score:** _____ / 15 = _____%

---

## Part 2: Acid Tests (3 items)

> These are the ultimate quality gates. If ANY acid test fails, the SOP cannot pass the Stranger Test regardless of Part 1 score.

| # | Test | Method | Pass | Fail | Notes |
|---|------|--------|:----:|:----:|-------|
| 16 | **New Employee Test** | Could a qualified new employee (with prerequisite training but no tribal knowledge) execute this SOP correctly on their first attempt without asking for help? | [ ] | [ ] | |
| 17 | **Phone Test** | Could someone follow this SOP correctly if instructions were read over the phone? (No pointing, no "you know what I mean", no visual aids beyond what the SOP contains) | [ ] | [ ] | |
| 18 | **Ambiguity Test** | Read every step aloud. Does ANY step contain undefined qualifiers ("appropriate", "as needed", "if necessary", "properly", "correctly", "ensure", "adequate", "sufficient")? If yes → FAIL. | [ ] | [ ] | |

**Part 2 Score:** _____ / 3

---

## Scoring Summary

| Section | Items | Score |
|---------|:-----:|:-----:|
| Prerequisites & Context | 4 | _____ / 4 |
| Step Clarity | 6 | _____ / 6 |
| Error Recovery | 3 | _____ / 3 |
| Self-Sufficiency | 2 | _____ / 2 |
| **Part 1 Total** | **15** | **_____ / 15 = _____%** |
| **Acid Tests** | **3** | **_____ / 3** |

---

## Verdict

| Condition | Verdict |
|-----------|---------|
| All 3 acid tests PASS + Part 1 ≥ 80% | **STRANGER-PROOF** — SOP ready for deployment |
| All 3 acid tests PASS + Part 1 60-79% | **NEAR-READY** — Fix flagged items, re-test |
| Any acid test FAIL | **NOT READY** — Revise and re-test (regardless of Part 1 score) |
| Part 1 < 60% | **REWRITE** — Fundamental executability issues |

**Final Verdict:** ___________________________

**Tester Signature:** _________________________ **Date:** _______________

---

*Stranger Test Checklist v1.0. Based on Michael Gerber's Franchise Prototype and Atul Gawande's checklist principles.*
*Checklist: stranger-test-checklist.md | SOP Factory | Synkra Hybrid*


---

## Referência: references/convert-sop-format.md

# Task: Convert SOP Format

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `convert-sop-format` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-ml-architect` |
| **Execution Type** | `Hybrid` |

## Metadata
```yaml
id: convert-sop-format
name: "Convert SOP Format"
category: conversion
agent: sop-ml-architect
elicit: false
autonomous: true
description: "Convert an SOP between human-readable Markdown, YAML, and JSON formats while preserving semantic equivalence. Uses a worker-first deterministic path for supported conversions and escalates to the agent surface only when semantic gaps or schema problems require judgment."
```

## Purpose

Enable seamless conversion between SOP formats to serve different consumers. A human-readable Markdown SOP can be converted to structured YAML/JSON for AI agent consumption, and vice versa. This is essential for maintaining a single source of truth while serving both human operators and automated systems.

The key challenge is **semantic equivalence**: ensuring that the meaning, structure, decision logic, and error handling are preserved across formats without information loss.

The default runtime path is deterministic:

```bash
python3 (script do runtime de origem; não se aplica no Hermes) <source_file> <target_format> [--source-format=auto|human-md|yaml|json] [--output=<path>] --json
```

Escalate from Worker to `sop-ml-architect` only when:

- the source file cannot be parsed cleanly
- YAML schema conformance requires non-trivial repair
- semantic-equivalence review finds unmapped or ambiguous elements
- the conversion would violate the veto conditions below

## Prerequisites

- [ ] Source SOP file exists and is readable
- [ ] Source format is one of: human-md, yaml, json
- [ ] Target format is different from source format
- [ ] SOP ML Schema (`sop-ml-schema`) accessible for YAML/JSON validation

## Inputs

```yaml
inputs:
  source_file:
    type: filepath
    required: true
    description: "Path to the source SOP file to convert"

  source_format:
    type: enum
    required: false
    options: [human-md, yaml, json]
    default: auto-detect
    description: "Format of the source file. If 'auto-detect', the agent determines format from file extension and content structure."

  target_format:
    type: enum
    required: true
    options: [human-md, yaml, json]
    description: "Desired output format"
```

## Runtime Contract

```yaml
default_executor: worker
worker_script: (script do runtime de origem; não se aplica no Hermes)
worker_command: "python3 (script do runtime de origem; não se aplica no Hermes) {source_file} {target_format} [--source-format={source_format}] [--output={output}] --json"
escalate_to_agent_when:
  - source parsing fails
  - schema repair requires judgment
  - semantic equivalence is uncertain
  - veto conditions fire
```

## Format Mapping Schema

```yaml
element_mapping:
  # How elements map between formats

  metadata:
    human_md: "YAML front matter (---) or header table"
    yaml: "sop.metadata object"
    json: "sop.metadata object"
    fields: [id, version, created, author, status, description]

  purpose:
    human_md: "## Purpose section (prose)"
    yaml: "sop.purpose (string)"
    json: "sop.purpose (string)"

  scope:
    human_md: "## Scope section (prose with bullets)"
    yaml: "sop.scope { includes: [], excludes: [] }"
    json: "sop.scope { includes: [], excludes: [] }"

  definitions:
    human_md: "## Definitions section (term: definition list)"
    yaml: "sop.definitions[] { term, definition }"
    json: "sop.definitions[] { term, definition }"

  roles:
    human_md: "## Responsibilities / RACI table"
    yaml: "sop.roles[] { id, name, responsibilities[] }"
    json: "sop.roles[] { id, name, responsibilities[] }"

  inputs:
    human_md: "## Inputs section or prerequisite list"
    yaml: "sop.inputs[] { name, type, required, description }"
    json: "sop.inputs[] { name, type, required, description }"

  outputs:
    human_md: "## Output section"
    yaml: "sop.outputs[] { name, type, description }"
    json: "sop.outputs[] { name, type, description }"

  procedure_steps:
    human_md: "## Procedure - numbered steps with action verbs"
    yaml: "sop.states[] { id, action, transitions[] }"
    json: "sop.states[] { id, action, transitions[] }"
    notes: >
      Human steps are linear with branching noted inline.
      ML steps are state machines with explicit transitions.
      Conversion requires decomposing linear steps into states.

  decision_points:
    human_md: "IF/THEN blocks or decision tree sections"
    yaml: "states with type: 'decision' and multiple transitions"
    json: "states with type: 'decision' and multiple transitions"

  error_handling:
    human_md: "## Error Handling / Troubleshooting section"
    yaml: "sop.error_handling { global, per_state[] }"
    json: "sop.error_handling { global, per_state[] }"

  visual_elements:
    human_md: "Mermaid code blocks (```mermaid)"
    yaml: "sop.diagrams[] { type, content } (Mermaid as string)"
    json: "sop.diagrams[] { type, content } (Mermaid as string)"

  revision_history:
    human_md: "## Revision History table"
    yaml: "sop.revisions[] { version, date, author, changes }"
    json: "sop.revisions[] { version, date, author, changes }"
```

## Workflow / Steps

### 1. Parse Source

```
ACTION: Detect format and parse the source SOP into an internal representation

DEFAULT PATH:
  - Execute the deterministic worker first
  - Only continue with agent judgment if the worker reports parse/write failure
    or if semantic review requires manual intervention

FORMAT DETECTION (if auto-detect):
  - .md file with prose sections -> human-md
  - .yaml/.yml file with sop: root key -> yaml
  - .json file with sop root key -> json
  - Ambiguous -> examine content structure

PARSING:
  human-md:
    - Extract YAML front matter (if present)
    - Parse Markdown headings into section tree
    - Extract numbered steps from Procedure section
    - Parse RACI tables
    - Extract Mermaid blocks
    - Identify IF/THEN decision blocks
    - Capture all content including prose descriptions

  yaml:
    - Parse YAML structure
    - Validate against sop-ml-schema (warn if non-conformant)
    - Extract state machine definition
    - Map tool bindings
    - Capture all metadata

  json:
    - Parse JSON structure
    - Validate against sop-ml-schema
    - Extract same elements as YAML

STORE: internal_representation = {
  metadata: {},
  purpose: "",
  scope: { includes: [], excludes: [] },
  definitions: [],
  roles: [],
  inputs: [],
  outputs: [],
  steps: [],           # linear representation
  states: [],          # state machine representation
  decisions: [],
  error_handling: {},
  visuals: [],
  revisions: [],
  raw_content: {}      # anything that doesn't map cleanly
}
```

### 2. Map Elements

```
ACTION: Map source elements to target schema

MAPPING STRATEGY BY DIRECTION:

  human-md -> yaml/json:
    - Convert prose Purpose to string field
    - Convert scope bullets to includes/excludes arrays
    - Convert definitions list to structured array
    - Convert RACI table to roles array
    - Convert numbered steps to state machine:
      * Each step becomes a state
      * Sequential steps get auto-transitions
      * IF/THEN blocks become decision states with branched transitions
      * Error handling sections become per-state error configs
    - Convert Mermaid blocks to diagram strings
    - Infer types for inputs/outputs from context
    - Generate state IDs from step numbers/names

  yaml/json -> human-md:
    - Convert metadata to YAML front matter
    - Convert purpose string to ## Purpose section with prose
    - Convert state machine to numbered procedure steps:
      * Linearize the state machine (topological sort)
      * Decision states become IF/THEN blocks
      * Parallel states become noted parallel paths
    - Convert roles array to RACI table
    - Convert error_handling to ## Error Handling section
    - Render diagram strings as Mermaid code blocks
    - Add natural language descriptions for each step

  yaml <-> json:
    - Direct structural mapping (schema is equivalent)
    - Preserve all fields
    - Handle YAML-specific features (anchors, multiline strings)

TRACK: elements_mapped[], elements_unmappable[]
```

### 3. Transform

```
ACTION: Execute the transformation maintaining semantic equivalence

TRANSFORMATION RULES:
  a) Information Preservation
     - Every piece of information in source MUST appear in target
     - If an element has no direct mapping, place in a "notes" or "additional" section
     - Never silently drop content

  b) Semantic Equivalence
     - Decision logic must produce same outcomes in both formats
     - Step ordering must be preserved
     - Role assignments must be preserved
     - Error paths must be preserved

  c) Format-Specific Enhancements
     - human-md: Add visual formatting, section headers, tables
     - yaml: Add comments for human readability
     - json: Minimize but maintain readability (2-space indent)

  d) State Machine Conversion (human -> ML)
     - Simple sequential step: state with single transition to next
     - IF/THEN step: decision state with conditional transitions
     - Loop/repeat step: state with self-transition + exit condition
     - Parallel steps: fork/join states
     - Error step: error state with recovery transitions

  e) Linearization (ML -> human)
     - Topological sort of state machine
     - Decision states become "IF condition THEN: ... ELSE: ..."
     - Fork states become "The following steps can be performed in parallel:"
     - Error states become numbered troubleshooting items
```

### 4. Validate

```
ACTION: Verify target output quality

VALIDATION CHECKS:
  a) Format Validity
     - human-md: Valid Markdown, headings render correctly, tables valid
     - yaml: Valid YAML, parses without error
     - json: Valid JSON, parses without error

  b) Schema Conformance (for yaml/json targets)
     - Validate against sop-ml-schema
     - All required fields present
     - Types match schema definitions

  c) Information Completeness
     - Compare element counts: source steps vs target steps
     - Compare decision points: source vs target
     - Compare roles: source vs target
     - Compare error handlers: source vs target
     - Flag any unmapped elements

  d) Semantic Equivalence Check
     - Walk through source procedure and verify each step exists in target
     - Verify decision branches are complete
     - Verify error paths are preserved

  e) Roundtrip Test (if feasible)
     - Convert target back to source format
     - Compare with original
     - Note any differences (some formatting loss is acceptable)

OUTPUT: validation_report = {
  format_valid: <true|false>,
  schema_conformant: <true|false>,
  elements_mapped: <count>,
  elements_unmapped: <count>,
  semantic_equivalent: <true|false>,
  differences: [<list of any differences>],
  warnings: [<list of warnings>]
}
```

### 5. Output

```
ACTION: Save converted SOP and validation report

DEFAULT PATH:
  - Accept worker output as canonical when the worker succeeds and no escalation
    condition fires
  - Use the agent surface only to document repair decisions or unresolved gaps

DETERMINE output filename:
  - Preserve original name
  - Change extension to match target format
  - Add format suffix if needed for clarity

FILES:
  - Converted SOP (`md` target): docs/sops/{sop-name}.md
  - Converted SOP (`yaml|json` target): {pasta}/sops/{sop-name}.{target-extension}
  - Validation report: outputs/hybrid-sop/converted/{sop-name}-conversion-report.md

PUBLISH RULE:
  - `md` targets remain share-safe and publish to `docs/sops/`
  - `yaml|json` targets require explicit `business` and `full_workspace_mode`

CONVERSION REPORT includes:
  - Source format and file
  - Target format and file
  - Elements mapped successfully
  - Elements that required transformation
  - Any unmapped elements (with explanation)
  - Validation results
  - Recommendations for manual review
```

## Output

```yaml
outputs:
  primary:
    path: "docs/sops/{sop-name}.md | {pasta}/sops/{sop-name}.{yaml|json}"
    format: "human-md|yaml|json"
    description: "Converted SOP in target format"

  secondary:
    - path: "outputs/hybrid-sop/converted/{sop-name}-conversion-report.md"
      format: markdown
      description: "Conversion validation report with element mapping details"

  metadata:
    source_format: "<human-md|yaml|json>"
    target_format: "<human-md|yaml|json>"
    elements_mapped: "<number>"
    elements_unmapped: "<number>"
    format_valid: "<true|false>"
    schema_conformant: "<true|false for yaml/json>"
    semantic_equivalent: "<true|false>"
```

## Acceptance Criteria

- [ ] No information is lost in conversion (all source elements present in target)
- [ ] Target file passes format validation (valid Markdown, YAML, or JSON)
- [ ] For YAML/JSON targets: passes schema validation against `sop-ml-schema`
- [ ] Bidirectional roundtrip is feasible (convert back produces equivalent result)
- [ ] Decision logic is preserved with all branches
- [ ] Error handling is preserved with all paths
- [ ] Role assignments are preserved
- [ ] Conversion report documents all mapping decisions
- [ ] Any unmapped elements are documented with explanations

## Veto Conditions

- STOP if source format cannot be detected or parsed
- STOP if source and target formats are identical (no conversion needed)
- STOP if source file is not an SOP (wrong document type)
- STOP if more than 30% of source elements cannot be mapped to target format (conversion would lose too much information)
- STOP if the source SOP contains embedded binary content (images, attachments) that cannot be represented in the target format


---

## Referência: references/create-checklist.md

# Task: Create Checklist from SOP

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `create-checklist` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-creator` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: create-checklist
name: "Create Checklist from SOP"
category: creation
agent: sop-creator
elicit: false
autonomous: true
description: "Generate a focused operational checklist from an existing SOP. Applies Atul Gawande's Checklist Manifesto principles: brevity, single-action items, DO-CONFIRM or READ-DO format, and critical pause points."
```

## Purpose

Extract a concise, actionable checklist from a full SOP. While SOPs are comprehensive reference documents, checklists are execution tools designed for use in the field. Following Gawande's research from aviation and surgery, an effective checklist catches the errors that even experts make under pressure. This task distills an SOP down to its critical verification points.

The checklist does NOT replace the SOP. It complements it by providing a quick-reference execution or verification aid.

## Prerequisites

- [ ] Source SOP file exists and is accessible
- [ ] Source SOP has a populated Procedure section with identifiable steps
- [ ] Checklist type determined (pre-flight, execution, verification, or audit)

## Inputs

```yaml
inputs:
  sop_file:
    type: filepath
    required: true
    description: "Path to the source SOP file (Markdown or YAML)"

  checklist_type:
    type: enum
    required: true
    options: [pre-flight, execution, verification, audit]
    description: >
      Type of checklist to generate:
      - pre-flight: Items to verify BEFORE starting the process
      - execution: Items to check DURING process execution (step-by-step)
      - verification: Items to verify AFTER process completion
      - audit: Items for periodic compliance audit of the process
```

## Workflow / Steps

### 1. Parse SOP

```
ACTION: Read and analyze the source SOP file

EXTRACT:
  - Process name and ID
  - All procedure steps (numbered actions)
  - Decision points and their branches
  - Prerequisites and materials
  - Error handling steps
  - Quality control / verification points
  - Roles involved (from RACI if available)
  - Critical steps (safety, compliance, irreversible actions)
  - Time-sensitive steps

STORE: sop_analysis = {
  process_name, step_count, decision_count,
  critical_steps, verification_points,
  roles, materials, error_paths
}
```

### 2. Extract Checkable Items

```
ACTION: Filter SOP content based on checklist_type

FOR pre-flight:
  - Extract all prerequisites
  - Extract all materials/equipment requirements
  - Extract access/permission requirements
  - Extract environmental conditions
  - Add: "Team briefed on procedure" if multiple roles
  - Add: "Emergency contacts available" if safety-critical

FOR execution:
  - Extract each procedure step as a checkable action
  - Preserve critical decision points
  - Include expected outcomes for verification steps
  - Flag irreversible steps with WARNING marker

FOR verification:
  - Extract all quality control points
  - Extract all expected outcomes
  - Extract all acceptance criteria
  - Add: "All outputs saved/documented"
  - Add: "Stakeholders notified of completion"

FOR audit:
  - Extract compliance requirements
  - Extract documentation requirements
  - Extract training requirements
  - Extract review/approval requirements
  - Add: "SOP version is current"
  - Add: "All operators trained on current version"

RULES:
  - Each item = ONE verifiable action or condition
  - No compound items ("Check X and Y" -> two items)
  - Items must be binary: done/not done, yes/no, pass/fail
  - Use action verbs for execution items
  - Use verification verbs for check items (Confirm, Verify, Ensure)
```

### 3. Organize by Phase

```
ACTION: Group checklist items into logical phases

STRUCTURE:
  phases:
    - name: "<Phase Name>"
      items:
        - text: "<checkable item>"
          critical: <true|false>
          role: "<responsible role>"
          note: "<optional context>"

GROUPING LOGIC:
  - Group by process phase (Setup, Execute, Verify, Close)
  - Within each phase, order by execution sequence
  - Mark critical items (safety, compliance, irreversible)
  - Add separator lines between phases

TARGET: Maximum 3-5 phases, 5-9 items per phase (working memory limits)
```

### 4. Apply Gawande Principles

```
ACTION: Refine checklist against The Checklist Manifesto principles

GAWANDE'S PRINCIPLES:
  a) Format Selection
     - DO-CONFIRM: Team does tasks from memory, then pauses to
       confirm all items complete. Best for: experienced teams,
       routine processes.
     - READ-DO: Read each item, then do it in sequence.
       Best for: complex/infrequent processes, training situations.
     SELECT format based on: audience experience + process frequency + risk level

  b) Brevity
     - Fits on ONE PAGE (single side) if possible
     - 5-9 items per section (Miller's Law: 7 +/- 2)
     - Each item: 1 line, max 2 lines
     - No explanatory text (that belongs in the SOP)

  c) Clarity
     - Simple, exact language
     - No jargon unless defined in SOP
     - Use sans-serif font recommendation for print
     - Uppercase for critical warnings

  d) Pause Points
     - Insert PAUSE POINT markers before:
       * Irreversible actions
       * Safety-critical steps
       * Compliance verification steps
       * Handoff points between roles
     - Pause point = mandatory stop, verbal confirmation required

  e) Testing
     - Recommend a "dry run" with the checklist before live use
     - Include revision date and feedback mechanism

VALIDATION:
  - Total items <= 30 (hard limit)
  - Each item readable in < 5 seconds
  - No item requires external reference to understand
  - Critical items are visually distinct
```

### 5. Output

```
ACTION: Generate the checklist file

FORMAT:
  # Checklist: {Process Name} - {Type}

  **Source SOP:** {sop_file}
  **Format:** {DO-CONFIRM | READ-DO}
  **Version:** 1.0.0
  **Date:** {ISO-8601}
  **Total Items:** {count}

  ---

  ## Phase 1: {Phase Name}

  - [ ] {Item text}
  - [ ] {Item text}
  - [ ] **CRITICAL:** {Critical item text}
  - [ ] {Item text}

  ---
  **>>> PAUSE POINT: {reason} <<<**
  ---

  ## Phase 2: {Phase Name}
  ...

  ---

  **Completed by:** _______________  **Date:** ___________
  **Verified by:**  _______________  **Date:** ___________

FILE: outputs/hybrid-sop/checklists/{process-name}-{type}-checklist-v{version}.md
```

## Output

```yaml
outputs:
  primary:
    path: "outputs/hybrid-sop/checklists/{process-name}-{type}-checklist-v{version}.md"
    format: markdown
    description: "Operational checklist derived from source SOP"

  metadata:
    source_sop: "<filepath>"
    checklist_type: "<pre-flight|execution|verification|audit>"
    format: "<DO-CONFIRM|READ-DO>"
    total_items: "<number>"
    critical_items: "<number>"
    pause_points: "<number>"
    fits_one_page: "<true|false>"
```

## Acceptance Criteria

- [ ] Each item is a single, verifiable action or condition
- [ ] Checklist fits on one page (ideally) or two pages maximum
- [ ] DO-CONFIRM or READ-DO format is explicitly specified
- [ ] Pause points are included before all critical/irreversible steps
- [ ] Total items do not exceed 30
- [ ] Items are grouped into logical phases (3-5 phases)
- [ ] Critical items are visually distinct (bold, uppercase, or marked)
- [ ] Source SOP is referenced in the header
- [ ] Sign-off fields are included (completed by, verified by)
- [ ] No item requires external reference to understand

## Veto Conditions

- STOP if source SOP file does not exist or is unreadable
- STOP if source SOP has no identifiable procedure steps
- STOP if the process has fewer than 3 steps (checklist adds no value)
- STOP if checklist would exceed 50 items (SOP needs to be split first)


---

## Referência: references/create-sop-human.md

# Task: Create Human-Readable SOP

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `create-sop-human` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-creator` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: create-sop-human
name: "Create Human-Readable SOP"
category: creation
agent: sop-creator
elicit: true
autonomous: false
description: "Create a complete, FDA/GMP-grade Standard Operating Procedure optimized for human consumption. Applies readability standards, visual elements, RACI definitions, and compliance formatting."
```

## Purpose

Create a world-class human-readable SOP from process information gathered through elicitation. The output follows FDA/GMP document structure (the gold standard for regulated SOPs) while maintaining an 8th-grade readability level to ensure universal comprehension. Integrates visual elements (Mermaid flowcharts, decision trees) and enforces action-verb step construction per Gawande's checklist principles.

This task produces the **human-facing** SOP. For AI/ML-consumable output, use `create-sop-ml`.

## Prerequisites

- [ ] Process name and description available
- [ ] Audience identified (operator, manager, or executive)
- [ ] Compliance requirements known (if applicable)
- [ ] Subject matter expert or process owner accessible for elicitation

## Inputs

```yaml
inputs:
  process_name:
    type: string
    required: true
    description: "Name of the process to document (e.g., 'Customer Onboarding', 'Server Deployment')"

  process_description:
    type: string
    required: true
    description: "Detailed description of the process including purpose, frequency, and context"

  audience:
    type: enum
    required: false
    default: operator
    options: [operator, manager, executive]
    description: "Primary audience for the SOP. Operator = step-by-step detail. Manager = oversight focus. Executive = summary with KPIs."

  industry:
    type: string
    required: false
    description: "Industry context for terminology and compliance alignment (e.g., 'healthcare', 'manufacturing', 'fintech')"

  compliance_standard:
    type: enum
    required: false
    options: [iso-9001, fda-gmp, osha, none]
    description: "Compliance standard to align the SOP format and content against"
```

## Workflow / Steps

### 1. Gather Requirements

```
ELICIT from user:
  1. What is the process name and its business purpose?
  2. Who performs this process? (roles involved)
  3. How often is this process executed? (frequency)
  4. What triggers this process? (event, schedule, request)
  5. What are the expected inputs and outputs?
  6. What tools, systems, or equipment are required?
  7. What can go wrong? (known failure modes)
  8. Are there regulatory or compliance requirements?
  9. Who is the process owner / approver?
  10. What is the audience level? (operator/manager/executive)

STORE: requirements = {
  process_name, purpose, roles, frequency, trigger,
  inputs, outputs, tools, failure_modes,
  compliance, owner, audience
}
```

### 2. Structure Analysis

```
ACTION: Decompose the process into atomic components
IDENTIFY:
  - Sequential steps (ordered actions)
  - Decision points (if/then branches)
  - Parallel paths (simultaneous activities)
  - Loops (repeated actions until condition)
  - Handoffs (role transitions)
  - Wait states (approvals, external dependencies)
  - Error paths (what happens on failure)

OUTPUT: Process structure map with:
  - step_count: <number>
  - decision_points: <number>
  - roles_involved: [<role names>]
  - tools_required: [<tool names>]
  - estimated_duration: <time range>
  - complexity_grade: simple|moderate|complex
```

### 3. Draft SOP

```
ACTION: Apply FDA/GMP template structure with all 11 sections

SECTION STRUCTURE:
  1. Header Block
     - SOP Title, SOP Number, Version, Effective Date
     - Department, Process Owner, Prepared By, Approved By
     - Review Cycle, Classification (Confidential/Internal/Public)

  2. Purpose
     - Single paragraph: why this SOP exists
     - Business impact of non-compliance

  3. Scope
     - What this SOP covers and does NOT cover
     - Applicable roles, departments, systems

  4. Definitions & Abbreviations
     - Every technical term defined
     - Industry jargon translated to plain language

  5. Responsibilities (RACI Matrix)
     - Responsible: who does the work
     - Accountable: who signs off
     - Consulted: who provides input
     - Informed: who needs to know

  6. Materials & Equipment
     - Tools, systems, software required
     - Access permissions needed
     - Safety equipment (if applicable)

  7. Procedure (Core Steps)
     - Every step starts with an ACTION VERB
     - One action per step (atomic)
     - Include expected result for each step
     - Decision points as IF/THEN
     - Warnings/cautions BEFORE the step they apply to
     - Time estimates per step or phase

  8. Error Handling & Troubleshooting
     - Common failure modes and remediation
     - Escalation path with contact information
     - Recovery procedures

  9. Quality Control & Verification
     - How to verify the process completed correctly
     - Acceptance criteria
     - Sampling procedures (if applicable)

  10. References & Related Documents
      - Related SOPs, policies, regulations
      - Training materials
      - External standards

  11. Revision History
      - Version, date, author, change description
      - Approval signatures

RULES:
  - Every step MUST begin with an action verb (Open, Click, Verify, Record, etc.)
  - Maximum 1 action per numbered step
  - Warnings/Notes appear BEFORE the step (not after)
  - Use present tense, active voice
  - No compound sentences in procedure steps
  - Include expected outcome for critical steps: "Expected result: [X]"
```

### 4. Add Visual Elements

```
ACTION: Create visual aids using Mermaid syntax

REQUIRED VISUALS:
  a) Process Flowchart
     - Main flow with decision diamonds
     - Error paths in red/dashed lines
     - Swim lanes for multiple roles

  b) Decision Tree (if >2 decision points)
     - Clear YES/NO branches
     - Terminal nodes with action or escalation

  c) RACI Matrix Table
     - Rows = process steps
     - Columns = roles
     - Cells = R/A/C/I

OPTIONAL VISUALS (if complexity warrants):
  d) Timeline / Gantt for time-sensitive processes
  e) Equipment diagram for physical processes

FORMAT: All visuals as ```mermaid code blocks for portability
```

### 5. Internal Review

```
ACTION: Self-review against SOP Quality Checklist

CHECKLIST:
  [ ] All 11 FDA/GMP sections present and complete
  [ ] Every procedure step starts with an action verb
  [ ] Readability grade <= 8th grade (Flesch-Kincaid)
  [ ] No passive voice in procedure steps
  [ ] RACI matrix complete for all roles
  [ ] Error handling covers all identified failure modes
  [ ] Visual elements (flowchart, decision tree) present
  [ ] Version control header populated
  [ ] Definitions section covers all jargon
  [ ] Time estimates included
  [ ] Escalation path defined with contacts
  [ ] No ambiguous language ("as needed", "if appropriate")
  [ ] Cross-references to related SOPs verified

IF any check fails: revise and re-check before output
```

### 6. Output

```
ACTION: Save completed SOP to output directory

FILE: docs/sops/{process-name}-sop-v{version}.md
FORMAT: Markdown with Mermaid blocks

METADATA HEADER (YAML front matter):
  ---
  sop_id: "{process-name}-sop"
  version: "1.0.0"
  status: "draft"
  created: "<ISO-8601>"
  author: "sop-creator"
  process_owner: "<from elicitation>"
  audience: "<operator|manager|executive>"
  compliance: "<standard or 'none'>"
  readability_grade: <number>
  step_count: <number>
  estimated_duration: "<range>"
  ---

ALSO GENERATE:
  - Summary card (1-page overview for executive audience)
  - Change log entry
```

## Output

```yaml
outputs:
  primary:
    path: "docs/sops/{process-name}-sop-v{version}.md"
    format: markdown
    description: "Complete human-readable SOP with all 11 FDA/GMP sections"

  secondary:
    - path: "docs/sops/{process-name}-summary.md"
      format: markdown
      description: "One-page executive summary card"

  metadata:
    readability_grade: "<Flesch-Kincaid grade level>"
    section_count: 11
    step_count: "<total procedure steps>"
    visual_count: "<number of diagrams>"
    compliance_aligned: "<standard or 'none'>"
```

## Acceptance Criteria

- [ ] All 11 FDA/GMP sections are present and populated
- [ ] Readability grade is at or below 8th grade level (Flesch-Kincaid)
- [ ] Every procedure step begins with an action verb
- [ ] RACI matrix is defined for all identified roles
- [ ] Error handling section covers all known failure modes
- [ ] At least one Mermaid flowchart is included
- [ ] Decision trees are present for all branching logic
- [ ] Version control header is complete (version, date, author, approver)
- [ ] No ambiguous language in procedure steps
- [ ] Time estimates are included for each phase or step
- [ ] Escalation path is defined with specific contacts/roles

## Veto Conditions

- STOP if process description is too vague to extract concrete steps (fewer than 3 identifiable actions)
- STOP if no process owner or accountable role can be identified
- STOP if compliance standard is specified but requirements cannot be met with available information
- STOP if elicitation yields contradictory information that cannot be resolved
- STOP if the process involves safety-critical steps and no error handling can be defined


---

## Referência: references/create-sop-ml.md

# Task: Create AI/ML-Readable SOP

## Task Anatomy

| Field | Value |
|-------|-------|
| **Task ID** | `create-sop-ml` |
| **Version** | `1.0.0` |
| **Status** | `active` |
| **Responsible Executor** | `sop-ml-architect` |
| **Execution Type** | `Agent` |

## Metadata
```yaml
id: create-sop-ml
name: "Create AI/ML-Readable SOP"
category: creation
agent: sop-ml-architect
elicit: true
autonomous: false
description: "Create a structured, machine-readable SOP in YAML or JSON format designed for AI agent consumption. Defines state machines, tool mappings, decision logic, and error handling in a format parseable by autonomous agents."
```

## Purpose

Create a machine-readable SOP that an AI agent can parse, interpret, and execute autonomously. Unlike human SOPs that rely on natural language comprehension, ML SOPs use structured state machines with explicit transitions, tool mappings, conditional logic, and typed inputs/outputs. This enables agent-driven process execution, automated validation, and programmatic compliance checking.

This task produces the **AI/ML-facing** SOP. For human-readable output, use `create-sop-human`.

## Prerequisites

- [ ] Process name and description available
- [ ] Target agent capabilities understood (optional but recommended)
- [ ] Available tools/actions inventory known
- [ ] SOP ML Schema (`sop-ml-schema`) accessible for validation

## Inputs

```yaml
inputs:
  process_name:
    type: string
    required: true
    description: "Name of the process to document (e.g., 'deploy-service', 'onboard-customer')"

  process_description:
    type: string
    required: true
    description: "Detailed description of the process including purpose, triggers, and expected behavior"

  target_agent:
    type: string
    required: false
    description: "The AI agent or system that will consume and execute this SOP (e.g., 'deploy-bot', 'onboarding-agent'). Helps tailor tool mappings."

  output_format:
    type: enum
    required: false
    default: yaml
    options: [yaml, json]
    description: "Output format for the structured SOP"
```

## Workflow / Steps

### 1. Gather Requirements

```
ELICIT from user:
  1. What is the process name and its purpose?
  2. What triggers this process? (event, API call, schedule, manual)
  3. What are the inputs (with types and constraints)?
  4. What are the expected outputs?
  5. What tools/APIs/actions are available to the executing agent?
  6. What decisions must be made during execution?
  7. What are the error conditions and recovery strategies?
  8. What are the success criteria?
  9. Are there time constraints or SLAs?
  10. What agent will consume this SOP? (capabilities, tool access)

STORE: requirements = {
  process_name, purpose, trigger, inputs, outputs,
  available_tools, decisions, errors, success_criteria,
  sla, target_agent
}
```

### 2. Define State Machine

```
ACTION: Model the process as a finite state machine

IDENTIFY:
  - STATES: Distinct process phases (e.g., INIT, VALIDATING, EXECUTING, COMPLETE)
  - TRANSITIONS: What moves the process from one state to another
  - GUARDS: Conditions that must be true for a transition to fire
  - ACTIONS: What happens on entry/exit of each state
  - TERMINAL STATES: SUCCESS, FAILURE, TIMEOUT, ESCALATE

STRUCTURE:
  states:
    - id: "<state-id>"
      name: "<human-readable name>"
      type: "initial|intermediate|decision|terminal"
      description: "<what happens in this state>"
      on_enter: [<actions>]
      on_exit: [<actions>]
      transitions:
        - target: "<next-state-id>"
          guard: "<condition expression>"
          action: "<transition action>"

RULES:
  - Every state must have at least one outgoing transition (except terminal states)
  - Every decision state must have transitions for ALL possible outcomes
  - No orphan states (unreachable from initial state)
  - No dead-end states (non-terminal states with no outgoing transitions)
  - Maximum state depth: 20 (prevent infinite loops)
```

### 3. Schema Construction

```
ACTION: Build complete YAML/JSON structure following sop-ml-schema

TOP-LEVEL STRUCTURE:
  sop:
    metadata:
      id: "<process-name>-sop-ml"
      version: "1.0.0"
      created: "<ISO-8601>"
      author: "sop-ml-architect"
      target_agent: "<agent-id or 'generic'>"
      format_version: "1.0.0"
      description: "<purpose>"

    trigger:
      type: "event|schedule|manual|api"
      source: "<trigger source>"
      condition: "<optional guard>"

    inputs:
      - name: "<input-name>"
        type: "<string|number|boolean|object|array>"
        required: <true|false>
        description: "<what this input is>"
        validation: "<regex or constraint>"
        default: "<optional default>"

    outputs:
      - name: "<output-name>"
        type: "<type>"
        description: "<what this output is>"

    constants:
      - name: "<constant-name>"
        value: "<value>"
        description: "<purpose>"

    states: [<state machine from Step 2>]

    error_handling:
      global:
        timeout: "<duration>"
        max_retries: <number>
        on_timeout: "<state-id>"
        on_max_retries: "<state-id>"
      per_state:
        - state: "<state-id>"
          errors:
            - type: "<error-type>"
              action: "<retry|skip|escalate|abort>"
              max_retries: <number>
              fallback_state: "<state-id>"

    sla:
      max_duration: "<duration>"
      expected_duration: "<duration>"
      critical_path: [<state-ids>]

VALIDATION: Structure must conform to sop-ml-schema
```

### 4. Tool Mapping

```
ACTION: Map each actionable step to a concrete tool or API call

FORMAT per mapping:
  tool_mappings:
    - state: "<state-id>"
      action: "<action-name>"
      tool:
        name: "<tool-identifier>"
        type: "api|cli|function|mcp|manual"
        endpoint: "<URL or command>"
        method: "<GET|POST|PUT|DELETE|EXECUTE>"
        parameters:
          - name: "<param>"
            source: "<input.field|state.output|constant>"
        expected_response:
          success: "<condition>"
          failure: "<condition>"
        timeout: "<duration>"

RULES:
  - Every non-decision state must have at least one tool mapping
  - If no tool exists for an action, mark as type: "manual" with instructions
  - Include expected response conditions for automated validation
  - Map parameter sources to inputs, previous state outputs, or constants
```

### 5. Validation

```
ACTION: Validate the complete SOP against quality criteria

CHECKS:
  a) Schema Validation
     - Valid YAML/JSON syntax
     - Conforms to sop-ml-schema structure
     - All required fields present

  b) State Machine Validation
     - No orphan states
     - No dead-end non-terminal states
     - All decision branches covered
     - Terminal states reachable from all paths
     - No infinite loops without exit conditions

  c) Tool Mapping Validation
     - Every actionable state has tool mapping
     - All parameter sources resolve to defined inputs/outputs
     - No undefined references

  d) Error Handling Validation
     - Global error handling defined
     - Critical states have per-state error handling
     - All error paths lead to defined states

  e) Parseability Test
     - YAML/JSON parses without error
     - Roundtrip serialization/deserialization succeeds

IF any validation fails: fix and re-validate
```

### 6. Output

```
ACTION: Save validated SOP to output directory

FILE: {pasta}/sops/{process-name}-sop-v{version}.yaml  (or .json)
FORMAT: YAML or JSON (per output_format input)

PUBLISH RULE:
  - Require explicit `business`
  - Require `full_workspace_mode`
  - STOP final publication if the COO readiness gate is not proven

ALSO GENERATE:
  - State diagram in Mermaid (for human visualization of the ML SOP)
  - Validation report (schema conformance, state machine analysis)
```

## Output

```yaml
outputs:
  primary:
    path: "{pasta}/sops/{process-name}-sop-v{version}.yaml"
    format: "yaml|json"
    description: "Complete machine-readable SOP with state machine, tool mappings, and error handling"

  secondary:
    - path: "outputs/hybrid-sop/converted/{process-name}-state-diagram.md"
      format: markdown
      description: "Mermaid state diagram for visual representation"

    - path: "outputs/hybrid-sop/converted/{process-name}-validation-report.md"
      format: markdown
      description: "Schema validation and state machine analysis report"

  metadata:
    state_count: "<number of states>"
    transition_count: "<number of transitions>"
    decision_points: "<number of decision states>"
    tool_mappings: "<number of mapped tools>"
    schema_valid: "<true|false>"
    format: "<yaml|json>"
```

## Acceptance Criteria

- [ ] Output is valid YAML or JSON (parses without error)
- [ ] Passes schema validation against `sop-ml-schema`
- [ ] All states have tool mappings (or explicit `manual` type)
- [ ] All decision points have transitions for every possible outcome
- [ ] Error handling is defined for every state (global or per-state)
- [ ] State machine is complete: no orphan states, no dead ends
- [ ] All parameter sources resolve to defined inputs, outputs, or constants
- [ ] Terminal states (SUCCESS, FAILURE, ESCALATE) are reachable from all paths
- [ ] SLA constraints are defined (max duration, expected duration)
- [ ] Mermaid state diagram is generated for human review

## Veto Conditions

- STOP if process cannot be decomposed into discrete states (purely continuous/analog process)
- STOP if no tools can be identified for more than 50% of steps (SOP would be mostly manual)
- STOP if the process has unbounded loops with no exit condition
- STOP if input types cannot be defined (completely unstructured process)
- STOP if `business` is missing or `full_workspace_mode` is not proven for canonical publication
- STOP if schema validation fails after 3 revision attempts


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

## Referência: references/data-sop-ml-schema-examples.yaml

# =============================================================================
# SOP ML Schema - Examples (extracted from sop-ml-schema.yaml)
# =============================================================================
# Purpose: Reference examples for agents creating ML SOPs.
# The schema definition lives in sop-ml-schema.yaml.
# =============================================================================

examples:

  minimal:
    description: "The smallest valid ML SOP that passes schema validation"
    document:
      sop_ml:
        metadata:
          schema_version: "1.0.0"
          sop_id: "SOP-MIN-001"
          title: "Minimal Example SOP"
          version: "1.0.0"
          status: draft
          created_date: "2026-03-09"
          last_updated: "2026-03-09"
          owner:
            role: "Process Owner"

        purpose:
          objective: "Demonstrate the minimal valid ML SOP structure."
          scope:
            in_scope:
              - "Schema validation testing"
          target_audience:
            - type: human
              role: "Developer"

        raci:
          - activity: "Execute procedure"
            responsible: "Developer"
            accountable: "Process Owner"

        prerequisites:
          tools: []

        procedure:
          phases:
            - phase_id: "P1"
              name: "Execution"
              steps:
                - step_id: "S1.1"
                  action: "Perform the documented action"
                  actor: "Developer"

        quality_criteria:
          kpis:
            - kpi_id: "KPI-01"
              name: "Completion Rate"
              target: "100%"
              unit: "percentage"
          acceptance_criteria:
            - criteria: "All steps completed successfully"
              measurable: true

        revision_history:
          - version: "1.0.0"
            date: "2026-03-09"
            author: "SOP Factory"
            changes: "Initial draft"

  comprehensive:
    description: "A fully-featured ML SOP demonstrating all schema capabilities"
    document:
      sop_ml:
        metadata:
          schema_version: "1.0.0"
          sop_id: "SOP-DB-001"
          title: "Production Database Backup Procedure"
          version: "2.1.0"
          status: published
          created_date: "2025-06-15"
          last_updated: "2026-03-09"
          next_review: "2026-06-09"
          owner:
            role: "DevOps Lead"
            name: "Jane Smith"
            contact: "devops-lead@company.com"
          tags:
            - database
            - backup
            - disaster-recovery
            - postgresql
            - infrastructure
          compliance:
            - standard_id: "ISO-9001"
              clauses: ["7.5", "8.1"]
            - standard_id: "FDA-21CFR11"
              clauses: ["11.10(b)", "11.10(c)", "11.10(e)"]
          source:
            type: original

        purpose:
          objective: "Ensure consistent, reliable daily backup of all production PostgreSQL databases with verified recovery capability."
          scope:
            in_scope:
              - "Production PostgreSQL databases (primary and replicas)"
              - "Automated daily backup execution"
              - "Manual on-demand backup execution"
              - "Backup verification and integrity checks"
              - "Backup retention management"
            out_of_scope:
              - "Development and staging databases"
              - "Application-level data exports"
              - "Disaster recovery site failover (see SOP-DR-001)"
          target_audience:
            - type: ai_agent
              role: "Backup Automation Agent"
              required_skills:
                - "PostgreSQL administration"
                - "Shell scripting"
                - "AWS S3 operations"
            - type: human
              role: "Database Administrator"
              required_skills:
                - "PostgreSQL administration"
                - "Linux system administration"

        definitions:
          - term: "Full Backup"
            definition: "Complete copy of all database objects and data"
            acronym: "FB"
          - term: "WAL"
            definition: "Write-Ahead Log - PostgreSQL transaction log for point-in-time recovery"
          - term: "RTO"
            definition: "Recovery Time Objective - maximum acceptable time to restore service"
          - term: "RPO"
            definition: "Recovery Point Objective - maximum acceptable data loss measured in time"

        raci:
          - activity: "Daily backup execution"
            responsible: "Backup Automation Agent"
            accountable: "DevOps Lead"
            informed: ["Engineering Manager"]
          - activity: "Backup verification"
            responsible: "Backup Automation Agent"
            accountable: "DevOps Lead"
            informed: ["Database Administrator"]
          - activity: "Failure investigation"
            responsible: "Database Administrator"
            accountable: "DevOps Lead"
            consulted: ["Engineering Manager"]
            informed: ["CTO"]
          - activity: "Retention policy management"
            responsible: "DevOps Lead"
            accountable: "CTO"
            consulted: ["Legal", "Compliance"]

        prerequisites:
          tools:
            - name: "pg_dump"
              version: ">=14.0"
              purpose: "PostgreSQL backup utility"
              install_command: "pg_dump --version"
            - name: "aws-cli"
              version: ">=2.0"
              purpose: "AWS S3 upload for offsite storage"
              install_command: "aws --version"
            - name: "sha256sum"
              purpose: "Backup integrity verification"
              install_command: "sha256sum --version"
          access:
            - system: "Production PostgreSQL"
              level: "read-only (backup role)"
              how_to_request: "Submit JIRA ticket to DevOps team"
            - system: "AWS S3 backup bucket"
              level: "write (PutObject, GetObject)"
              how_to_request: "Request via IAM role assignment"
          conditions:
            - condition: "Database server is accessible on port 5432"
              verification: "pg_isready -h $DB_HOST -p 5432"
            - condition: "Sufficient disk space for backup (>= 2x database size)"
              verification: "df -h /backups | awk 'NR==2 {print $4}'"
            - condition: "AWS credentials are configured"
              verification: "aws sts get-caller-identity"

        procedure:
          phases:
            - phase_id: "P1"
              name: "Pre-Backup Checks"
              description: "Verify all prerequisites are met before starting backup"
              estimated_duration: "PT5M"
              steps:
                - step_id: "S1.1"
                  action: "Verify database connectivity"
                  actor: "Backup Automation Agent"
                  command: "pg_isready -h $DB_HOST -p 5432 -U $DB_BACKUP_USER"
                  verification:
                    method: command
                    check: "pg_isready exit code"
                    expected: "Exit code 0, output contains 'accepting connections'"
                  on_failure:
                    action: retry
                    max_retries: 3
                    retry_delay: "PT30S"
                    escalate_to: "Database Administrator"

                - step_id: "S1.2"
                  action: "Check available disk space"
                  actor: "Backup Automation Agent"
                  command: "df -B1 /backups | awk 'NR==2 {print $4}'"
                  verification:
                    method: command
                    check: "Available space > 2x estimated backup size"
                    expected: ">= 20GB free"
                  on_failure:
                    action: escalate
                    escalate_to: "Database Administrator"
                  warnings:
                    - level: warning
                      message: "If space < 50GB, alert DevOps for capacity planning"

                - step_id: "S1.3"
                  action: "Verify no conflicting backup is running"
                  actor: "Backup Automation Agent"
                  command: "ps aux | grep pg_dump | grep -v grep | wc -l"
                  verification:
                    method: command
                    check: "Count of running pg_dump processes"
                    expected: "0"
                  decision:
                    condition: "running_backup_count > 0"
                    if_true: "S1.3"
                    if_false: "S2.1"

            - phase_id: "P2"
              name: "Backup Execution"
              description: "Perform the actual database backup"
              estimated_duration: "PT30M"
              steps:
                - step_id: "S2.1"
                  action: "Execute full database backup using pg_dump"
                  actor: "Backup Automation Agent"
                  input:
                    type: environment_variable
                    source: "DB_HOST, DB_BACKUP_USER, DB_NAME"
                  output:
                    type: file
                    description: "Compressed custom-format backup file"
                    location: "/backups/daily/$DB_NAME-$(date +%Y%m%d-%H%M%S).dump"
                  command: "pg_dump -h $DB_HOST -U $DB_BACKUP_USER -d $DB_NAME -F c -Z 6 -f /backups/daily/$DB_NAME-$(date +%Y%m%d-%H%M%S).dump"
                  verification:
                    method: command
                    check: "pg_dump exit code and file size > 0"
                    expected: "Exit code 0, file size > 1MB"
                  on_failure:
                    action: retry
                    max_retries: 2
                    retry_delay: "PT60S"
                    escalate_to: "Database Administrator"
                  warnings:
                    - level: caution
                      message: "Backup may cause increased I/O on database server during execution"

                - step_id: "S2.2"
                  action: "Generate SHA-256 checksum of backup file"
                  actor: "Backup Automation Agent"
                  command: "sha256sum /backups/daily/$BACKUP_FILE > /backups/daily/$BACKUP_FILE.sha256"
                  output:
                    type: file
                    description: "Checksum file for integrity verification"
                    location: "/backups/daily/$BACKUP_FILE.sha256"

            - phase_id: "P3"
              name: "Backup Verification"
              description: "Verify backup integrity and recoverability"
              estimated_duration: "PT10M"
              steps:
                - step_id: "S3.1"
                  action: "Verify backup file integrity using checksum"
                  actor: "Backup Automation Agent"
                  command: "sha256sum -c /backups/daily/$BACKUP_FILE.sha256"
                  verification:
                    method: command
                    check: "Checksum verification result"
                    expected: "OK"
                  on_failure:
                    action: abort
                    escalate_to: "Database Administrator"

                - step_id: "S3.2"
                  action: "Test backup restorability using pg_restore --list"
                  actor: "Backup Automation Agent"
                  command: "pg_restore --list /backups/daily/$BACKUP_FILE > /dev/null 2>&1"
                  verification:
                    method: command
                    check: "pg_restore exit code"
                    expected: "Exit code 0"
                  on_failure:
                    action: abort
                    escalate_to: "Database Administrator"

            - phase_id: "P4"
              name: "Offsite Upload"
              description: "Upload verified backup to offsite storage"
              estimated_duration: "PT15M"
              steps:
                - step_id: "S4.1"
                  action: "Upload backup and checksum to S3"
                  actor: "Backup Automation Agent"
                  command: "aws s3 cp /backups/daily/$BACKUP_FILE s3://$BACKUP_BUCKET/daily/ && aws s3 cp /backups/daily/$BACKUP_FILE.sha256 s3://$BACKUP_BUCKET/daily/"
                  verification:
                    method: command
                    check: "aws s3 ls for uploaded files"
                    expected: "Both files present in S3 bucket"
                  on_failure:
                    action: retry
                    max_retries: 3
                    retry_delay: "PT120S"

                - step_id: "S4.2"
                  action: "Log backup completion to monitoring system"
                  actor: "Backup Automation Agent"
                  output:
                    type: log_entry
                    description: "Backup success record with timestamp, size, and duration"

        exception_handling:
          - exception_id: "EX001"
            trigger: "Database connection refused during backup"
            severity: critical
            symptoms:
              - "pg_isready returns non-zero exit code"
              - "Connection timeout after 30 seconds"
              - "Error: could not connect to server"
            resolution:
              - "Check database server status: systemctl status postgresql"
              - "Check network connectivity: telnet $DB_HOST 5432"
              - "Check pg_hba.conf for backup user access"
              - "Restart PostgreSQL if necessary: systemctl restart postgresql"
            escalation:
              to: "Database Administrator"
              sla: "15 minutes"
            prevention: "Monitor database uptime with health checks every 60 seconds"

          - exception_id: "EX002"
            trigger: "Insufficient disk space during backup"
            severity: high
            symptoms:
              - "pg_dump exits with error: No space left on device"
              - "Backup file size is 0 bytes"
            resolution:
              - "Remove oldest local backups: find /backups/daily -mtime +7 -delete"
              - "Check for unexpected large files: du -sh /backups/*"
              - "Verify retention policy is running correctly"
              - "If persistent, increase volume size"
            escalation:
              to: "DevOps Lead"
              sla: "30 minutes"
            prevention: "Alert when disk usage exceeds 70% capacity"

          - exception_id: "EX003"
            trigger: "Backup file fails integrity check"
            severity: critical
            symptoms:
              - "sha256sum -c returns FAILED"
              - "pg_restore --list returns non-zero"
            resolution:
              - "Delete corrupted backup file"
              - "Re-run backup from step S2.1"
              - "If repeated failure, check disk health: smartctl -a /dev/sda"
              - "If disk healthy, check for PostgreSQL corruption"
            escalation:
              to: "Database Administrator"
              sla: "15 minutes"
            prevention: "Monitor disk health weekly, run pg_checksums monthly"

        quality_criteria:
          kpis:
            - kpi_id: "KPI-01"
              name: "Backup Success Rate"
              target: ">= 99.5%"
              unit: "percentage"
              measurement_method: "Successful backups / Total scheduled backups"
              frequency: monthly
            - kpi_id: "KPI-02"
              name: "Backup Duration"
              target: "<= 60 minutes"
              unit: "minutes"
              measurement_method: "Time from start to verified upload completion"
              frequency: per_execution
            - kpi_id: "KPI-03"
              name: "Recovery Test Success"
              target: "100%"
              unit: "percentage"
              measurement_method: "Monthly recovery drill pass/fail"
              frequency: monthly
          acceptance_criteria:
            - criteria: "Backup file size is within 20% of previous backup"
              measurable: true
              threshold: "20% variance"
            - criteria: "Backup completes within RTO window"
              measurable: true
              threshold: "60 minutes"
            - criteria: "Checksum verification passes"
              measurable: true
            - criteria: "Offsite upload confirmed"
              measurable: true

        revision_history:
          - version: "2.1.0"
            date: "2026-03-09"
            author: "SOP Factory"
            changes: "Added ML schema compliance, confidence scores, expanded exception handling"
            approved_by: "DevOps Lead"
          - version: "2.0.0"
            date: "2025-11-01"
            author: "DevOps Team"
            changes: "Major rewrite: added S3 upload, checksum verification, RACI matrix"
            approved_by: "CTO"
          - version: "1.0.0"
            date: "2025-06-15"
            author: "DevOps Lead"
            changes: "Initial version"
            approved_by: "Engineering Manager"


---

## Referência: references/data-sop-ml-schema.yaml

# =============================================================================
# SOP ML Schema - Machine-Readable SOP Contract
# =============================================================================
# Used by: sop-ml-architect (create-sop-ml task), sop-auditor (ML validation)
# Version: 1.0.0
#
# Purpose:
#   Defines the formal schema for AI/ML-readable SOPs. Any ML SOP produced
#   by the SOP Factory must conform to this schema. This enables:
#   - Automated SOP execution by AI agents
#   - Programmatic validation and auditing
#   - Integration with workflow orchestration systems
#   - Machine-to-machine SOP exchange
#   - Automated compliance checking
#
# Schema Notation:
#   required: true/false   - Whether the field must be present
#   type: string/number/boolean/array/object/enum
#   enum_values: [...]     - Valid values for enum fields
#   constraints: ...       - Additional validation rules
# =============================================================================

schema:
  version: "1.0.0"
  schema_id: "sop-ml-schema-v1"
  format: "YAML"
  media_type: "application/x-sop-ml+yaml"

  # ===========================================================================
  # ROOT STRUCTURE
  # ===========================================================================
  root:
    type: object
    required_fields:
      - sop_ml
    description: "Root element of an ML-readable SOP document"

  # ===========================================================================
  # SOP_ML - Top-level container
  # ===========================================================================
  fields:

    sop_ml:
      type: object
      required: true
      description: "Top-level container for the machine-readable SOP"
      children:

        # --- METADATA SECTION ---
        metadata:
          type: object
          required: true
          description: "Document identification and control information"
          children:

            schema_version:
              type: string
              required: true
              description: "Version of sop-ml-schema this document conforms to"
              constraints:
                pattern: "^\\d+\\.\\d+\\.\\d+$"
              example: "1.0.0"

            sop_id:
              type: string
              required: true
              description: "Unique identifier for this SOP"
              constraints:
                pattern: "^SOP-[A-Z]+-\\d{3,}$"
                unique: true
              example: "SOP-DEV-001"

            title:
              type: string
              required: true
              description: "Human-readable title of the SOP"
              constraints:
                max_length: 200
              example: "Database Backup and Recovery Procedure"

            version:
              type: string
              required: true
              description: "Semantic version of this SOP"
              constraints:
                pattern: "^\\d+\\.\\d+\\.\\d+$"
              example: "1.2.0"

            status:
              type: enum
              required: true
              description: "Current lifecycle status"
              enum_values:
                - draft
                - review
                - approved
                - published
                - deprecated
                - archived

            created_date:
              type: string
              required: true
              description: "ISO 8601 date of initial creation"
              constraints:
                format: "date"  # YYYY-MM-DD
              example: "2026-03-09"

            last_updated:
              type: string
              required: true
              description: "ISO 8601 date of last modification"
              constraints:
                format: "date"
              example: "2026-03-09"

            next_review:
              type: string
              required: false
              description: "ISO 8601 date of next scheduled review"
              constraints:
                format: "date"

            owner:
              type: object
              required: true
              description: "Person or role accountable for this SOP"
              children:
                role:
                  type: string
                  required: true
                  example: "DevOps Lead"
                name:
                  type: string
                  required: false
                  example: "Jane Smith"
                contact:
                  type: string
                  required: false
                  example: "devops-lead@company.com"

            tags:
              type: array
              required: false
              description: "Searchable tags for categorization"
              items:
                type: string
              example: ["database", "backup", "disaster-recovery", "infrastructure"]

            compliance:
              type: array
              required: false
              description: "Applicable compliance standards"
              items:
                type: object
                children:
                  standard_id:
                    type: string
                    required: true
                    example: "ISO-9001"
                  clauses:
                    type: array
                    required: false
                    items:
                      type: string
                    example: ["7.5", "8.1"]

            source:
              type: object
              required: false
              description: "Provenance information if extracted from another source"
              children:
                type:
                  type: enum
                  required: true
                  enum_values:
                    - original
                    - extracted
                    - converted
                    - merged
                source_ref:
                  type: string
                  required: false
                  description: "Reference to original source"
                extraction_confidence:
                  type: number
                  required: false
                  constraints:
                    min: 0.0
                    max: 1.0

        # --- PURPOSE SECTION ---
        purpose:
          type: object
          required: true
          description: "Why this SOP exists and what it covers"
          children:

            objective:
              type: string
              required: true
              description: "Clear statement of what this SOP achieves"
              example: "Ensure consistent, reliable database backup and recovery across all production environments."

            scope:
              type: object
              required: true
              children:
                in_scope:
                  type: array
                  required: true
                  items:
                    type: string
                  example:
                    - "Production PostgreSQL databases"
                    - "Staging PostgreSQL databases"
                out_of_scope:
                  type: array
                  required: false
                  items:
                    type: string
                  example:
                    - "Development/local databases"
                    - "Third-party SaaS data"

            target_audience:
              type: array
              required: true
              description: "Who or what executes this SOP"
              items:
                type: object
                children:
                  type:
                    type: enum
                    required: true
                    enum_values:
                      - human
                      - ai_agent
                      - automated_system
                      - hybrid
                  role:
                    type: string
                    required: true
                    example: "Database Administrator"
                  required_skills:
                    type: array
                    required: false
                    items:
                      type: string

        # --- DEFINITIONS SECTION ---
        definitions:
          type: array
          required: false
          description: "Glossary of terms used in this SOP"
          items:
            type: object
            children:
              term:
                type: string
                required: true
              definition:
                type: string
                required: true
              acronym:
                type: string
                required: false

        # --- RACI SECTION ---
        raci:
          type: array
          required: true
          description: "RACI matrix mapping activities to roles"
          items:
            type: object
            children:
              activity:
                type: string
                required: true
                description: "The activity or step group"
              responsible:
                type: string
                required: true
                description: "Role that executes"
              accountable:
                type: string
                required: true
                description: "Role ultimately answerable"
              consulted:
                type: array
                required: false
                items:
                  type: string
                description: "Roles providing input"
              informed:
                type: array
                required: false
                items:
                  type: string
                description: "Roles notified of outcome"

        # --- PREREQUISITES SECTION ---
        prerequisites:
          type: object
          required: true
          description: "Everything needed before execution can begin"
          children:

            tools:
              type: array
              required: false
              description: "Software, hardware, or physical tools required"
              items:
                type: object
                children:
                  name:
                    type: string
                    required: true
                  version:
                    type: string
                    required: false
                  purpose:
                    type: string
                    required: false
                  install_command:
                    type: string
                    required: false
                    description: "Command to install/verify the tool (for AI agents)"

            access:
              type: array
              required: false
              description: "Permissions and access required"
              items:
                type: object
                children:
                  system:
                    type: string
                    required: true
                  level:
                    type: string
                    required: true
                    example: "admin"
                  how_to_request:
                    type: string
                    required: false

            conditions:
              type: array
              required: false
              description: "Environmental or state conditions that must be true"
              items:
                type: object
                children:
                  condition:
                    type: string
                    required: true
                  verification:
                    type: string
                    required: false
                    description: "Command or check to verify the condition"

        # --- PROCEDURE SECTION ---
        procedure:
          type: object
          required: true
          description: "The core procedural steps"
          children:

            phases:
              type: array
              required: true
              description: "Ordered list of phases, each containing steps"
              items:
                type: object
                children:

                  phase_id:
                    type: string
                    required: true
                    constraints:
                      pattern: "^P\\d{1,3}$"
                    example: "P1"

                  name:
                    type: string
                    required: true

                  description:
                    type: string
                    required: false

                  estimated_duration:
                    type: string
                    required: false
                    description: "ISO 8601 duration or human-readable estimate"
                    example: "PT15M"

                  steps:
                    type: array
                    required: true
                    items:
                      type: object
                      children:

                        step_id:
                          type: string
                          required: true
                          constraints:
                            pattern: "^S\\d{1,3}\\.\\d{1,3}$"
                          example: "S1.1"

                        action:
                          type: string
                          required: true
                          description: "The action to perform (starts with verb)"
                          constraints:
                            starts_with_verb: true

                        actor:
                          type: string
                          required: true
                          description: "Role or system performing this step"

                        input:
                          type: object
                          required: false
                          description: "Input data or artifacts needed"
                          children:
                            type:
                              type: enum
                              required: true
                              enum_values:
                                - user_input
                                - system_data
                                - file
                                - api_response
                                - previous_step_output
                                - environment_variable
                                - constant
                            source:
                              type: string
                              required: false
                            format:
                              type: string
                              required: false

                        output:
                          type: object
                          required: false
                          description: "Expected output or artifact produced"
                          children:
                            type:
                              type: enum
                              required: true
                              enum_values:
                                - file
                                - log_entry
                                - state_change
                                - notification
                                - api_call
                                - data_record
                                - report
                                - none
                            description:
                              type: string
                              required: false
                            location:
                              type: string
                              required: false

                        command:
                          type: string
                          required: false
                          description: "Exact command to execute (for AI agents/automation)"
                          example: "pg_dump -h $DB_HOST -U $DB_USER -d $DB_NAME -F c -f /backups/$BACKUP_FILE"

                        verification:
                          type: object
                          required: false
                          description: "How to verify the step succeeded"
                          children:
                            method:
                              type: enum
                              required: true
                              enum_values:
                                - command
                                - visual_check
                                - log_check
                                - api_check
                                - manual_confirmation
                                - automated_test
                            check:
                              type: string
                              required: true
                              description: "The specific check to perform"
                            expected:
                              type: string
                              required: true
                              description: "Expected result of the check"

                        on_failure:
                          type: object
                          required: false
                          description: "What to do if this step fails"
                          children:
                            action:
                              type: enum
                              required: true
                              enum_values:
                                - retry
                                - skip
                                - abort
                                - escalate
                                - rollback
                                - alternate_path
                            max_retries:
                              type: number
                              required: false
                              default: 0
                            retry_delay:
                              type: string
                              required: false
                              description: "ISO 8601 duration between retries"
                            escalate_to:
                              type: string
                              required: false
                            rollback_to:
                              type: string
                              required: false
                              description: "Step ID to rollback to"
                            alternate_step:
                              type: string
                              required: false
                              description: "Step ID of alternate path"

                        decision:
                          type: object
                          required: false
                          description: "Branching logic at this step"
                          children:
                            condition:
                              type: string
                              required: true
                              description: "The condition to evaluate"
                            if_true:
                              type: string
                              required: true
                              description: "Step ID to go to if condition is true"
                            if_false:
                              type: string
                              required: true
                              description: "Step ID to go to if condition is false"

                        confidence:
                          type: number
                          required: false
                          description: "Extraction confidence score (0.0-1.0) if extracted from source"
                          constraints:
                            min: 0.0
                            max: 1.0

                        notes:
                          type: string
                          required: false
                          description: "Additional context for human reviewers"

                        warnings:
                          type: array
                          required: false
                          items:
                            type: object
                            children:
                              level:
                                type: enum
                                required: true
                                enum_values:
                                  - info
                                  - caution
                                  - warning
                                  - danger
                              message:
                                type: string
                                required: true

        # --- EXCEPTION HANDLING SECTION ---
        exception_handling:
          type: array
          required: false
          description: "Documented exceptions and their resolution procedures"
          items:
            type: object
            children:
              exception_id:
                type: string
                required: true
                constraints:
                  pattern: "^EX\\d{3}$"
              trigger:
                type: string
                required: true
                description: "What causes this exception"
              severity:
                type: enum
                required: true
                enum_values:
                  - critical
                  - high
                  - medium
                  - low
              symptoms:
                type: array
                required: false
                items:
                  type: string
              resolution:
                type: array
                required: true
                description: "Ordered resolution steps"
                items:
                  type: string
              escalation:
                type: object
                required: false
                children:
                  to:
                    type: string
                    required: true
                  sla:
                    type: string
                    required: false
                    description: "Expected response time"
              prevention:
                type: string
                required: false
                description: "How to prevent this exception"

        # --- QUALITY CRITERIA SECTION ---
        quality_criteria:
          type: object
          required: true
          description: "Measurable quality standards for this process"
          children:

            kpis:
              type: array
              required: true
              items:
                type: object
                children:
                  kpi_id:
                    type: string
                    required: true
                  name:
                    type: string
                    required: true
                  target:
                    type: string
                    required: true
                  unit:
                    type: string
                    required: true
                  measurement_method:
                    type: string
                    required: false
                  frequency:
                    type: enum
                    required: false
                    enum_values:
                      - per_execution
                      - daily
                      - weekly
                      - monthly
                      - quarterly

            acceptance_criteria:
              type: array
              required: true
              items:
                type: object
                children:
                  criteria:
                    type: string
                    required: true
                  measurable:
                    type: boolean
                    required: true
                  threshold:
                    type: string
                    required: false

        # --- REVISION HISTORY SECTION ---
        revision_history:
          type: array
          required: true
          description: "Change log for this SOP"
          items:
            type: object
            children:
              version:
                type: string
                required: true
              date:
                type: string
                required: true
                constraints:
                  format: "date"
              author:
                type: string
                required: true
              changes:
                type: string
                required: true
              approved_by:
                type: string
                required: false

  # ===========================================================================
  # VALIDATION RULES
  # ===========================================================================
  validation_rules:
    - rule: "All step_ids must be unique within the document"
      type: uniqueness
      scope: "sop_ml.procedure.phases[*].steps[*].step_id"

    - rule: "All phase_ids must be unique within the document"
      type: uniqueness
      scope: "sop_ml.procedure.phases[*].phase_id"

    - rule: "All exception_ids must be unique within the document"
      type: uniqueness
      scope: "sop_ml.exception_handling[*].exception_id"

    - rule: "Decision if_true and if_false must reference existing step_ids"
      type: referential_integrity
      scope: "sop_ml.procedure.phases[*].steps[*].decision"

    - rule: "on_failure.rollback_to must reference an existing step_id"
      type: referential_integrity
      scope: "sop_ml.procedure.phases[*].steps[*].on_failure.rollback_to"

    - rule: "on_failure.alternate_step must reference an existing step_id"
      type: referential_integrity
      scope: "sop_ml.procedure.phases[*].steps[*].on_failure.alternate_step"

    - rule: "RACI activity names should correspond to phase or step names"
      type: consistency
      scope: "sop_ml.raci[*].activity"

    - rule: "At least one KPI must be defined"
      type: minimum_count
      scope: "sop_ml.quality_criteria.kpis"
      min: 1

    - rule: "At least one acceptance criterion must be defined"
      type: minimum_count
      scope: "sop_ml.quality_criteria.acceptance_criteria"
      min: 1

    - rule: "At least one revision history entry must exist"
      type: minimum_count
      scope: "sop_ml.revision_history"
      min: 1

    - rule: "last_updated must be >= created_date"
      type: date_comparison
      scope: "sop_ml.metadata"

    - rule: "confidence scores, if present, must be between 0.0 and 1.0"
      type: range
      scope: "sop_ml.procedure.phases[*].steps[*].confidence"

  # ===========================================================================
  # EXAMPLES
  # ===========================================================================
  # Full examples (minimal + comprehensive) extracted to:
  #   data/sop-ml-schema-examples.yaml
  # This keeps the schema definition lean for agent context loading.
  # Agents creating ML SOPs should Read() sop-ml-schema-examples.yaml
  # when they need concrete reference examples.


---

## Referência: templates/checklist-from-sop-tmpl.md

# {{checklist_title}}

> **Design Principles** (Atul Gawande, *The Checklist Manifesto*):
> - One page maximum — if it doesn't fit, split it
> - 5-9 items per section — cognitive load boundary
> - Use pause points for critical/irreversible steps
> - Checklist is a VERIFICATION aid, not instruction manual
> - Two types: DO-CONFIRM (do from memory, then verify) or READ-DO (read then do)

<!-- CHECKLIST DESIGN RULES (for template maintainers):
     1. ONE PAGE maximum. Print and verify it fits on a single page. If not, split into sub-checklists.
     2. 5-9 items per section. Never exceed 9 items in a single section. Cognitive overload starts at 10.
     3. Pause points for critical steps. Any irreversible, high-risk, or multi-person verification step gets a pause point.
     4. Imperative language. Each item starts with a verb: Confirm, Verify, Check, Ensure, Record, Notify.
     5. No ambiguity. Each item must have a single, binary outcome: done or not done.
     6. Include "killer items". The items most commonly skipped or forgotten go at the top of each section.
     7. Test with a novice. If someone unfamiliar with the SOP can't use the checklist, simplify it.
     8. Date and version. Always tied to a specific SOP version. Update checklist when SOP changes.
-->

| Field              | Value                              |
|--------------------|------------------------------------|
| **Checklist ID**   | {{checklist_id}}                   |
| **Source SOP**     | {{sop_id}} v{{sop_version}}        |
| **SOP Title**      | {{sop_title}}                      |
| **Checklist Type** | {{checklist_type}}                 |
| **Version**        | {{checklist_version}}              |
| **Effective Date** | {{effective_date}}                 |
| **Created By**     | {{created_by}}                     |

**Checklist Type:**
- **DO-CONFIRM** — Perform tasks from memory/training, then use checklist to confirm nothing was missed. Best for experienced teams, routine procedures, time-critical situations.
- **READ-DO** — Read each item, perform it, then check it off. Best for infrequent procedures, new staff, complex/high-risk steps.

---

## PRE-FLIGHT (Before Starting)

> Complete ALL items below before beginning the procedure. If any item cannot be confirmed, STOP and resolve before proceeding.

| #  | Check                                | Status         |
|----|--------------------------------------|----------------|
| 1  | {{preflight_check_1}}                | [ ] CONFIRMED  |
| 2  | {{preflight_check_2}}                | [ ] CONFIRMED  |
| 3  | {{preflight_check_3}}                | [ ] CONFIRMED  |
| 4  | {{preflight_check_4}}                | [ ] CONFIRMED  |
| 5  | {{preflight_check_5}}                | [ ] CONFIRMED  |
| 6  | {{preflight_check_6}}                | [ ] CONFIRMED  |
| 7  | {{preflight_check_7}}                | [ ] CONFIRMED  |

**Pre-Flight Decision:** [ ] ALL checks passed -- proceed to Execution.

**Pre-flight confirmed by:** _________________ **Time:** _________

---

## EXECUTION

> {{#if checklist_type_do_confirm}}
> Perform all steps from training/SOP, then confirm each item below was completed correctly.
> {{/if}}
> {{#if checklist_type_read_do}}
> Read each item, perform the action, then check it off before moving to the next item.
> {{/if}}

### Block A: {{block_a_title}}

| #  | Action                               | Done   |
|----|--------------------------------------|--------|
| 1  | {{exec_action_1}}                    | [ ]    |
| 2  | {{exec_action_2}}                    | [ ]    |
| 3  | {{exec_action_3}}                    | [ ]    |
| 4  | [CRITICAL] {{exec_action_4}}         | [ ]    |
| 5  | {{exec_action_5}}                    | [ ]    |

> **--- PAUSE POINT ---**
> Confirm Block A completion with: _____________ (name/role)
> Verified at: __________ (time)

### Block B: {{block_b_title}}

| #  | Action                               | Done   |
|----|--------------------------------------|--------|
| 6  | {{exec_action_6}}                    | [ ]    |
| 7  | {{exec_action_7}}                    | [ ]    |
| 8  | {{exec_action_8}}                    | [ ]    |
| 9  | {{exec_action_9}}                    | [ ]    |

> **--- PAUSE POINT ---**
> Confirm Block B completion with: _____________ (name/role)
> Verified at: __________ (time)

### Block C: {{block_c_title}}

| #  | Action                               | Done   |
|----|--------------------------------------|--------|
| 10 | {{exec_action_10}}                   | [ ]    |
| 11 | {{exec_action_11}}                   | [ ]    |
| 12 | [CRITICAL] {{exec_action_12}}        | [ ]    |
| 13 | {{exec_action_13}}                   | [ ]    |
| 14 | {{exec_action_14}}                   | [ ]    |

> **--- CRITICAL PAUSE POINT ---**
> This step is irreversible. Confirm with {{critical_verifier}} before proceeding.
> Verified by: _________________ Time: _________

---

## VERIFICATION (After Completion)

> Confirm all outputs and quality criteria are met. Any unchecked item requires investigation.

| #  | Verification Item                    | Expected          | Actual    | Result                |
|----|--------------------------------------|-------------------|-----------|-----------------------|
| 1  | {{verify_item_1}}                    | {{expected_1}}    | _________ | [ ] PASS / [ ] FAIL   |
| 2  | {{verify_item_2}}                    | {{expected_2}}    | _________ | [ ] PASS / [ ] FAIL   |
| 3  | {{verify_item_3}}                    | {{expected_3}}    | _________ | [ ] PASS / [ ] FAIL   |
| 4  | {{verify_item_4}}                    | {{expected_4}}    | _________ | [ ] PASS / [ ] FAIL   |
| 5  | {{verify_item_5}}                    | {{expected_5}}    | _________ | [ ] PASS / [ ] FAIL   |

**Verification Decision:**
- [ ] ALL items PASS -- proceed to Sign-Off.
- [ ] ANY item FAIL -- STOP. Initiate error handling per {{sop_id}} Section 7.

---

## SIGN-OFF

| Role              | Name               | Signature          | Date               | Time               |
|-------------------|--------------------|--------------------|--------------------|--------------------|
| **Performer**     | {{performer_name}} | _____________      | ____/____/____     | ____:____          |
| **Verifier**      | {{verifier_name}}  | _____________      | ____/____/____     | ____:____          |
| **Approver**      | {{approver_name}}  | _____________      | ____/____/____     | ____:____          |

**Deviations Noted:** [ ] None / [ ] Yes -- see Deviation Form #__________

**Completion Status:** [ ] COMPLETE / [ ] INCOMPLETE -- Reason: _________________________

---

*Checklist {{checklist_id}} derived from {{sop_id}} v{{sop_version}}. Do not modify without updating source SOP.*
*Template: checklist-from-sop-tmpl.md | SOP Factory | Synkra Hybrid*


---

## Referência: templates/decision-tree-template.yaml

# =============================================================================
# Decision Tree Template for ML SOPs
# =============================================================================
# Template: decision-tree-template.yaml | SOP Factory | Synkra Hybrid
# Used by: sop-ml-architect (*decision-tree command)
#
# Based on: BPMN 2.0 Gateways + exhaustive branching patterns
#
# Usage:
#   1. Model each business rule as a decision node
#   2. Ensure ALL branches have explicit targets (no implicit fall-through)
#   3. Always include a "default" branch as catch-all
#   4. Embed into step's decision_point field in ml-sop-yaml-template.yaml
#
# Decision Types:
#   exclusive   - Exactly one branch taken (XOR gateway)
#   inclusive   - One or more branches taken (OR gateway)
#   parallel   - All branches taken simultaneously (AND gateway)
#   complex    - Custom rule combining multiple conditions
# =============================================================================

# ==============================================================================
# PATTERN 1: Simple Binary Decision (IF/ELSE)
# ==============================================================================
binary_decision:
  id: "{{decision_id}}"
  name: "{{decision_name}}"
  type: "exclusive"
  description: "{{what_is_being_decided}}"

  evaluate: "{{variable_or_expression}}"       # What to evaluate

  branches:
    - condition: "{{true_condition}}"          # e.g., "status == 'approved'"
      label: "Yes"
      goto: "{{true_target_step}}"             # Step ID if condition true
      action: "{{optional_action}}"            # Action before branching

    - condition: "default"                     # REQUIRED: catch-all
      label: "No"
      goto: "{{false_target_step}}"            # Step ID if condition false

# ==============================================================================
# PATTERN 2: Multi-Branch Decision (SWITCH/CASE)
# ==============================================================================
multi_branch_decision:
  id: "{{decision_id}}"
  name: "{{decision_name}}"
  type: "exclusive"
  description: "{{what_is_being_decided}}"

  evaluate: "{{variable_to_switch_on}}"        # e.g., "request.priority"

  branches:
    - condition: "{{value_1}}"                 # e.g., "priority == 'critical'"
      label: "{{label_1}}"                     # e.g., "Critical Path"
      goto: "{{target_step_1}}"

    - condition: "{{value_2}}"                 # e.g., "priority == 'high'"
      label: "{{label_2}}"
      goto: "{{target_step_2}}"

    - condition: "{{value_3}}"                 # e.g., "priority == 'medium'"
      label: "{{label_3}}"
      goto: "{{target_step_3}}"

    - condition: "default"                     # REQUIRED: unmatched values
      label: "{{default_label}}"
      goto: "{{default_step}}"

# ==============================================================================
# PATTERN 3: Threshold Decision (Numeric Ranges)
# ==============================================================================
threshold_decision:
  id: "{{decision_id}}"
  name: "{{decision_name}}"
  type: "exclusive"
  description: "Route based on numeric threshold"

  evaluate: "{{numeric_variable}}"             # e.g., "audit_score"

  branches:
    - condition: "value >= {{threshold_high}}"  # e.g., ">= 90"
      label: "{{high_label}}"                  # e.g., "Certified"
      goto: "{{high_target}}"

    - condition: "value >= {{threshold_mid}}"   # e.g., ">= 70"
      label: "{{mid_label}}"                   # e.g., "Approved"
      goto: "{{mid_target}}"

    - condition: "value >= {{threshold_low}}"   # e.g., ">= 50"
      label: "{{low_label}}"                   # e.g., "Conditional"
      goto: "{{low_target}}"

    - condition: "default"                     # Below all thresholds
      label: "{{fail_label}}"                  # e.g., "Rejected"
      goto: "{{fail_target}}"

# ==============================================================================
# PATTERN 4: Inclusive Decision (Multiple Branches Can Fire)
# ==============================================================================
inclusive_decision:
  id: "{{decision_id}}"
  name: "{{decision_name}}"
  type: "inclusive"                             # One or more branches taken
  description: "{{what_conditions_to_check}}"

  branches:
    - condition: "{{condition_a}}"
      label: "{{label_a}}"
      goto: "{{target_a}}"
      independent: true                        # Can fire alongside others

    - condition: "{{condition_b}}"
      label: "{{label_b}}"
      goto: "{{target_b}}"
      independent: true

    - condition: "default"                     # If NO conditions match
      label: "None matched"
      goto: "{{fallback_step}}"

  join_after: "{{convergence_step}}"           # Where branches reconverge

# ==============================================================================
# PATTERN 5: Compound Decision (Multiple Variables)
# ==============================================================================
compound_decision:
  id: "{{decision_id}}"
  name: "{{decision_name}}"
  type: "complex"
  description: "Decision based on multiple variables"

  evaluate:
    variables:
      - "{{var_1}}"                            # e.g., "risk_level"
      - "{{var_2}}"                            # e.g., "approval_status"

  branches:
    - condition: "{{var_1}} == 'high' AND {{var_2}} == 'pending'"
      label: "High risk, pending approval"
      goto: "{{escalation_step}}"

    - condition: "{{var_1}} == 'high' AND {{var_2}} == 'approved'"
      label: "High risk, approved"
      goto: "{{proceed_with_caution_step}}"

    - condition: "{{var_1}} != 'high'"
      label: "Normal risk"
      goto: "{{standard_step}}"

    - condition: "default"
      label: "Unhandled combination"
      goto: "{{error_step}}"

# ==============================================================================
# PATTERN 6: Retry Loop Decision
# ==============================================================================
retry_decision:
  id: "{{decision_id}}"
  name: "Retry Gate"
  type: "exclusive"
  description: "Decide whether to retry or escalate after failure"

  evaluate: "retry_count"

  branches:
    - condition: "retry_count < {{max_retries}}"
      label: "Retry"
      goto: "{{retry_target_step}}"            # Go back to the failed step
      action: "increment_retry_count"

    - condition: "default"
      label: "Max retries exceeded"
      goto: "{{escalation_step}}"
      action: "log_retry_exhausted"

# ==============================================================================
# EMBEDDING GUIDE
# ==============================================================================
# To embed a decision in an ML SOP step:
#
#   steps:
#     - id: "S003"
#       name: "Evaluate Risk Level"
#       action: "evaluate_risk"
#       ...
#       on_success: "S004"         # Default next (used if no decision match)
#       on_failure: "ERR_01"
#       decision_point:
#         question: "What is the risk level?"
#         evaluate: "risk_score"
#         branches:
#           - condition: "risk_score >= 80"
#             label: "High Risk"
#             goto: "S005"
#           - condition: "risk_score >= 40"
#             label: "Medium Risk"
#             goto: "S004"
#           - condition: "default"
#             label: "Low Risk"
#             goto: "S006"
#
# RULES:
#   - Every decision MUST have a "default" branch
#   - Conditions are evaluated top-to-bottom (first match wins for exclusive)
#   - All goto targets MUST reference existing step IDs
#   - Decision conditions must be mutually exclusive (for exclusive type)
# ==============================================================================


---

## Referência: templates/ml-sop-json-template.json

{
  "$comment": "ML-SOP JSON Template | SOP Factory | Synkra Hybrid",
  "$schema_ref": "data/sop-ml-schema.yaml v1.0.0",
  "usage": "Copy, replace {{placeholders}}, validate against schema. For API consumption and strict schema validation.",

  "sop": {
    "id": "{{sop_id}}",
    "version": "{{version}}",
    "title": "{{sop_title}}",
    "purpose": "{{purpose_statement}}",

    "classification": {
      "domain": "{{domain}}",
      "category": "{{category}}",
      "risk_level": "{{risk_level}}",
      "compliance_tags": ["{{standard_1}}"]
    },
    "status": "DRAFT",
    "effective_date": "{{YYYY-MM-DD}}",
    "review_date": "{{YYYY-MM-DD}}",

    "trigger": {
      "type": "{{trigger_type}}",
      "description": "{{trigger_description}}",
      "event": "{{event_name}}",
      "schedule": "{{cron_expression}}",
      "source": "{{trigger_source}}",
      "conditions": [
        {
          "field": "{{condition_field}}",
          "operator": "{{operator}}",
          "value": "{{expected_value}}"
        }
      ]
    },

    "context": {
      "tools": [
        {
          "id": "{{tool_id}}",
          "name": "{{tool_name}}",
          "type": "{{tool_type}}",
          "version": "{{min_version}}",
          "required": true
        }
      ],
      "permissions": [
        {
          "resource": "{{resource}}",
          "action": "{{permission}}",
          "scope": "{{scope}}",
          "justification": "{{why_needed}}"
        }
      ],
      "environment": [
        {
          "key": "{{ENV_VAR}}",
          "description": "{{var_description}}",
          "required": true,
          "sensitive": false
        }
      ],
      "input": [
        {
          "name": "{{input_name}}",
          "type": "{{input_type}}",
          "required": true,
          "description": "{{input_description}}",
          "validation": "{{regex_or_rule}}"
        }
      ]
    },

    "steps": [
      {
        "id": "S001",
        "name": "{{step_name}}",
        "action": "{{verb_noun}}",
        "description": "{{step_description}}",
        "performer": "{{role_or_agent}}",
        "critical": false,
        "estimated_duration": "{{PTxM}}",
        "tool": {
          "id": "{{tool_ref}}",
          "command": "{{command_or_endpoint}}",
          "timeout": "{{PTxM}}"
        },
        "input": [
          {
            "name": "{{param_name}}",
            "type": "{{param_type}}",
            "source": "{{source}}",
            "value": "{{value_or_ref}}",
            "required": true
          }
        ],
        "output": [
          {
            "name": "{{output_name}}",
            "type": "{{output_type}}",
            "store_as": "{{variable_name}}"
          }
        ],
        "validation": {
          "type": "{{val_type}}",
          "rules": [
            {
              "field": "{{field}}",
              "operator": "{{op}}",
              "expected": "{{expected}}",
              "message": "{{failure_message}}"
            }
          ]
        },
        "on_success": "S002",
        "on_failure": "{{error_handler_id}}",
        "decision_point": null
      }
    ],

    "error_handling": {
      "handlers": [
        {
          "id": "{{handler_id}}",
          "name": "{{handler_name}}",
          "trigger_on": [
            { "error_type": "{{error_type}}" }
          ],
          "severity": "{{severity}}",
          "actions": [
            {
              "type": "{{action_type}}",
              "config": {
                "max_retries": 3,
                "retry_delay": "PT30S",
                "backoff": "exponential"
              }
            }
          ]
        }
      ],
      "fallback": {
        "action": "abort",
        "notify": ["{{fallback_recipient}}"],
        "log_level": "error"
      },
      "global_timeout": "{{PT2H}}"
    },

    "quality_gate": {
      "enabled": true,
      "criteria": [
        {
          "name": "{{criteria_name}}",
          "type": "{{criteria_type}}",
          "target": "{{target_value}}",
          "actual": null,
          "weight": 0.5
        }
      ],
      "pass_threshold": 0.8,
      "on_fail": "block"
    },

    "outputs": {
      "artifacts": [
        {
          "name": "{{artifact_name}}",
          "type": "{{artifact_type}}",
          "format": "{{format}}",
          "destination": "{{path_or_url}}",
          "retention": "{{P1Y}}"
        }
      ],
      "notifications": {
        "on_complete": [
          { "channel": "{{channel}}", "recipients": ["{{recipient}}"] }
        ],
        "on_failure": [
          { "channel": "{{channel}}", "recipients": ["{{recipient}}"] }
        ]
      }
    },

    "metadata": {
      "created_by": "sop-ml-architect",
      "created_at": "{{ISO-8601-datetime}}",
      "updated_by": "{{updater}}",
      "updated_at": "{{ISO-8601-datetime}}",
      "owner": "{{owner_role}}",
      "department": "{{department}}",
      "tags": ["{{tag1}}", "{{tag2}}"],
      "review_cycle": "P90D",
      "regulatory_refs": [
        { "standard": "{{standard}}", "clause": "{{clause}}" }
      ],
      "related_sops": ["{{related_sop_id}}"],
      "change_log": [
        {
          "version": "{{version}}",
          "date": "{{YYYY-MM-DD}}",
          "author": "{{author}}",
          "summary": "{{change_summary}}"
        }
      ]
    }
  }
}


---

## Referência: templates/ml-sop-yaml-template.yaml

# =============================================================================
# ML-SOP YAML Template (Native YAML, no Markdown wrapper)
# =============================================================================
# Template: ml-sop-yaml-template.yaml | SOP Factory | Synkra Hybrid
# Used by: sop-ml-architect (*create, *create-from-human, *create-from-extract)
# Schema: data/sop-ml-schema.yaml v1.0.0
#
# Usage:
#   1. Copy this file as {process-name}-sop-v{version}.sop.yaml
#   2. Replace all {{placeholders}} with actual values
#   3. Validate against sop-ml-schema.yaml
#   4. Run sop-ml-validation-checklist.md
# =============================================================================

sop:
  # --- Identity ---------------------------------------------------------------
  id: "{{sop_id}}"                            # Format: SOP-{DOMAIN}-{SEQ}-R{REV}
  version: "{{version}}"                       # Semantic version: 1.0.0
  title: "{{sop_title}}"
  purpose: "{{purpose_statement}}"

  # --- Classification ---------------------------------------------------------
  classification:
    domain: "{{domain}}"                       # operations | engineering | compliance | support
    category: "{{category}}"                   # deployment | onboarding | audit | maintenance
    risk_level: "{{risk_level}}"               # low | medium | high | critical
    compliance_tags:
      - "{{standard_1}}"                       # ISO-9001 | FDA-21CFR11 | SOC2 | etc.
  status: "DRAFT"                              # DRAFT | ACTIVE | DEPRECATED | RETIRED
  effective_date: "{{YYYY-MM-DD}}"
  review_date: "{{YYYY-MM-DD}}"

  # --- Trigger ----------------------------------------------------------------
  trigger:
    type: "{{trigger_type}}"                   # manual | scheduled | event | condition
    description: "{{trigger_description}}"
    event: "{{event_name}}"                    # If type=event
    schedule: "{{cron_expression}}"            # If type=scheduled
    source: "{{trigger_source}}"               # System or actor
    conditions:
      - field: "{{condition_field}}"
        operator: "{{operator}}"               # eq | ne | gt | lt | gte | lte | contains | exists
        value: "{{expected_value}}"

  # --- Context ----------------------------------------------------------------
  context:
    tools:
      - id: "{{tool_id}}"
        name: "{{tool_name}}"
        type: "{{tool_type}}"                  # mcp | cli | api | ui | agent | manual
        version: "{{min_version}}"
        required: true

    permissions:
      - resource: "{{resource}}"
        action: "{{permission}}"               # read | write | execute | admin
        scope: "{{scope}}"
        justification: "{{why_needed}}"

    environment:
      - key: "{{ENV_VAR}}"
        description: "{{var_description}}"
        required: true
        sensitive: false                       # true = never log value

    input:
      - name: "{{input_name}}"
        type: "{{input_type}}"                 # string | number | boolean | object | array | file
        required: true
        description: "{{input_description}}"
        validation: "{{regex_or_rule}}"

  # --- State Machine ----------------------------------------------------------
  # See: state-machine-template.yaml for detailed state design
  state_machine:
    initial_state: "INIT"
    terminal_states: ["SUCCESS", "FAILURE", "ESCALATE"]
    error_states: ["ERROR_TRANSIENT", "ERROR_PERMANENT"]
    states:
      - id: "INIT"
        name: "Initialize"
        type: "initial"
        description: "{{init_description}}"
        on_enter: []
        on_exit: []
        transitions:
          - target: "{{next_state}}"
            guard: "{{condition}}"
            action: "{{transition_action}}"

      # Add states following state-machine-template.yaml pattern

  # --- Steps ------------------------------------------------------------------
  steps:
    - id: "S001"
      name: "{{step_name}}"
      action: "{{verb_noun}}"                  # validate_input | fetch_data | generate_report
      description: "{{step_description}}"
      performer: "{{role_or_agent}}"
      critical: false
      estimated_duration: "{{PTxM}}"           # ISO 8601 duration

      tool:
        id: "{{tool_ref}}"                     # References context.tools[].id
        command: "{{command_or_endpoint}}"
        timeout: "{{PTxM}}"

      input:
        - name: "{{param_name}}"
          type: "{{param_type}}"
          source: "{{source}}"                 # literal | env · previous_step | user_input | system
          value: "{{value_or_ref}}"
          required: true

      output:
        - name: "{{output_name}}"
          type: "{{output_type}}"
          store_as: "{{variable_name}}"        # Unique across SOP

      validation:
        type: "{{val_type}}"                   # assertion | schema | regex | custom
        rules:
          - field: "{{field}}"
            operator: "{{op}}"                 # eq | ne | gt | lt | contains | matches | exists
            expected: "{{expected}}"
            message: "{{failure_message}}"

      on_success: "S002"                       # Step ID or "END"
      on_failure: "{{error_handler_id}}"

      decision_point: null                     # null or see decision-tree-template.yaml

    # Add more steps following same schema...

  # --- Error Handling ---------------------------------------------------------
  error_handling:
    handlers:
      - id: "{{handler_id}}"
        name: "{{handler_name}}"
        trigger_on:
          - error_type: "{{error_type}}"       # timeout | validation | permission | system | custom
        severity: "{{severity}}"               # critical | high | medium | low
        actions:
          - type: "{{action_type}}"            # retry | rollback | notify | escalate | skip | abort
            config:
              max_retries: 3
              retry_delay: "PT30S"
              backoff: "exponential"            # linear | exponential | fixed

    fallback:
      action: "abort"
      notify: ["{{fallback_recipient}}"]
      log_level: "error"

    global_timeout: "{{PT2H}}"                 # Max total execution time

  # --- Quality Gate -----------------------------------------------------------
  quality_gate:
    enabled: true
    criteria:
      - name: "{{criteria_name}}"
        type: "{{criteria_type}}"              # percentage | count | boolean | threshold
        target: "{{target_value}}"
        actual: null                           # Populated at runtime
        weight: 0.5                            # 0.0-1.0, all weights must sum to 1.0
    pass_threshold: 0.8                        # Weighted score threshold
    on_fail: "block"                           # block | warn | notify

  # --- Outputs ----------------------------------------------------------------
  outputs:
    artifacts:
      - name: "{{artifact_name}}"
        type: "{{artifact_type}}"              # file | record | report | notification
        format: "{{format}}"                   # pdf | json | csv | md | html | yaml
        destination: "{{path_or_url}}"
        retention: "{{P1Y}}"                   # ISO 8601 duration

    notifications:
      on_complete:
        - channel: "{{channel}}"               # email | slack | webhook
          recipients: ["{{recipient}}"]
      on_failure:
        - channel: "{{channel}}"
          recipients: ["{{recipient}}"]

  # --- Metadata ---------------------------------------------------------------
  metadata:
    created_by: "sop-ml-architect"
    created_at: "{{ISO-8601-datetime}}"
    updated_by: "{{updater}}"
    updated_at: "{{ISO-8601-datetime}}"
    owner: "{{owner_role}}"
    department: "{{department}}"
    tags: ["{{tag1}}", "{{tag2}}"]
    review_cycle: "P90D"                       # ISO 8601 duration
    regulatory_refs:
      - standard: "{{standard}}"
        clause: "{{clause}}"
    related_sops: ["{{related_sop_id}}"]
    change_log:
      - version: "{{version}}"
        date: "{{YYYY-MM-DD}}"
        author: "{{author}}"
        summary: "{{change_summary}}"


---

## Referência: templates/sop-human-tmpl.md

# {{sop_title}}

| Field              | Value                              |
|--------------------|------------------------------------|
| **SOP ID**         | {{sop_id}}                         |
| **Version**        | {{version}}                        |
| **Effective Date** | {{effective_date}}                 |
| **Author**         | {{author_name}} ({{author_role}})  |
| **Approver**       | {{approver_name}} ({{approver_role}}) |
| **Next Review**    | {{review_date}}                    |
| **Classification** | {{classification}}                 |
| **Status**         | {{status}}                         |

> **Regulatory Basis:** FDA 21 CFR Part 211 / GMP Annex 15 — This document follows controlled-document standards. All changes require formal revision and re-approval.

<!-- HEADER GUIDANCE:
     - sop_id follows the pattern: SOP-[DEPT]-[SEQ]-[REV] (e.g., SOP-QA-042-R03)
     - classification: CRITICAL / MAJOR / STANDARD / INFORMATIONAL
     - status: DRAFT / IN REVIEW / APPROVED / SUPERSEDED / RETIRED
     - Review cycle: CRITICAL=6mo, MAJOR=12mo, STANDARD=18mo, INFORMATIONAL=24mo
-->

---

## 1. Purpose & Scope

### 1.1 Purpose

<!-- PURPOSE GUIDANCE:
     - One paragraph, 2-4 sentences maximum.
     - Answer: WHY does this SOP exist? What outcome does it ensure?
     - Start with an action verb: "To establish...", "To ensure...", "To define..."
-->

{{purpose_statement}}

### 1.2 Scope

**In Scope:**
- {{scope_in_1}}
- {{scope_in_2}}
- {{scope_in_3}}

**Out of Scope:**
- {{scope_out_1}}
- {{scope_out_2}}

### 1.3 Applicability

This SOP applies to: {{applicable_roles_and_departments}}

### 1.4 Applicable Regulations & Standards

| Standard            | Reference                        |
|---------------------|----------------------------------|
| {{standard_1}}      | {{reference_1}}                  |
| {{standard_2}}      | {{reference_2}}                  |
| {{standard_3}}      | {{reference_3}}                  |

---

## 2. Definitions & Abbreviations

<!-- DEFINITIONS GUIDANCE:
     - List every term that could be ambiguous or domain-specific.
     - Alphabetical order.
     - Include abbreviations used anywhere in the document.
-->

| Term / Abbreviation | Definition                         |
|----------------------|------------------------------------|
| {{term_1}}           | {{definition_1}}                   |
| {{term_2}}           | {{definition_2}}                   |
| {{term_3}}           | {{definition_3}}                   |
| {{term_4}}           | {{definition_4}}                   |
| {{term_5}}           | {{definition_5}}                   |

---

## 3. Roles & Responsibilities (RACI)

<!-- RACI GUIDANCE:
     - R = Responsible (does the work)
     - A = Accountable (owns the outcome, only ONE per activity)
     - C = Consulted (provides input before)
     - I = Informed (notified after)
     - Every row MUST have exactly one "A".
-->

| Activity                  | {{role_1}}  | {{role_2}}  | {{role_3}}  | {{role_4}}  |
|---------------------------|-------------|-------------|-------------|-------------|
| {{activity_1}}            | {{raci_1a}} | {{raci_1b}} | {{raci_1c}} | {{raci_1d}} |
| {{activity_2}}            | {{raci_2a}} | {{raci_2b}} | {{raci_2c}} | {{raci_2d}} |
| {{activity_3}}            | {{raci_3a}} | {{raci_3b}} | {{raci_3c}} | {{raci_3d}} |
| {{activity_4}}            | {{raci_4a}} | {{raci_4b}} | {{raci_4c}} | {{raci_4d}} |
| {{activity_5}}            | {{raci_5a}} | {{raci_5b}} | {{raci_5c}} | {{raci_5d}} |

---

## 4. Prerequisites

<!-- PREREQUISITES GUIDANCE:
     - Materials: list every physical item, reagent, form, or supply needed.
     - Equipment: list instruments, software, tools with calibration/version requirements.
     - Access: system permissions, credentials, badges required.
     - Training: certifications or training modules that must be completed BEFORE execution.
     - Conditions: environmental or scheduling conditions that must be met.
-->

### 4.1 Materials & Equipment

| Item               | Specification       | Quantity        | Notes               |
|--------------------|---------------------|-----------------|---------------------|
| {{material_1}}     | {{spec_1}}          | {{qty_1}}       | {{notes_1}}         |
| {{material_2}}     | {{spec_2}}          | {{qty_2}}       | {{notes_2}}         |
| {{material_3}}     | {{spec_3}}          | {{qty_3}}       | {{notes_3}}         |

### 4.2 System Access & Permissions

| System             | Permission Level    | How to Request     |
|--------------------|---------------------|--------------------|
| {{system_1}}       | {{permission_1}}    | {{request_1}}      |
| {{system_2}}       | {{permission_2}}    | {{request_2}}      |

### 4.3 Required Training

| Training Module       | Certification ID   | Validity Period    |
|-----------------------|--------------------|--------------------|
| {{training_1}}        | {{cert_id_1}}      | {{validity_1}}     |
| {{training_2}}        | {{cert_id_2}}      | {{validity_2}}     |

### 4.4 Environmental Conditions / Preconditions

- [ ] {{precondition_1}}
- [ ] {{precondition_2}}
- [ ] {{precondition_3}}

---

## 5. Procedure

<!-- PROCEDURE GUIDANCE:
     - Number every step sequentially (5.1, 5.2, ...).
     - One action per step. Use imperative mood: "Open...", "Record...", "Verify...".
     - Include expected duration where relevant.
     - Mark decision points clearly with IF/THEN/ELSE.
     - Mark CRITICAL steps with [CRITICAL] tag.
     - Mark CAUTION steps with [CAUTION] tag.
     - Include PAUSE POINTS where a second person must verify.
     - Reference forms, tools, and systems by exact name.
-->

> **INSTRUCTION:** Execute steps sequentially unless branching is indicated. Do NOT skip steps. Each step must be initialed and timestamped.

### 5.1 {{step_1_title}}

**Performer:** {{step_1_role}}
**Estimated Time:** {{step_1_duration}}

1. {{step_1_action_1}}
2. {{step_1_action_2}}
3. {{step_1_action_3}}

**Expected Result:** {{step_1_expected_result}}

| Initial | Date/Time | Notes |
|---------|-----------|-------|
|         |           |       |

---

### 5.2 {{step_2_title}}

**Performer:** {{step_2_role}}
**Estimated Time:** {{step_2_duration}}

1. {{step_2_action_1}}
2. {{step_2_action_2}}

> **[CRITICAL]** {{step_2_critical_instruction}}

**Expected Result:** {{step_2_expected_result}}

| Initial | Date/Time | Notes |
|---------|-----------|-------|
|         |           |       |

---

### 5.3 Decision Point: {{decision_title}}

**IF** {{condition_true}}:
- Proceed to Step 5.4

**ELSE IF** {{condition_alternative}}:
- {{alternative_action}}
- Proceed to Step {{alternative_step}}

**ELSE:**
- STOP. Escalate to {{escalation_contact}}
- Document deviation per {{deviation_sop_ref}}

---

### 5.4 {{step_4_title}}

**Performer:** {{step_4_role}}
**Estimated Time:** {{step_4_duration}}

> **[CAUTION]** {{step_4_caution_instruction}}

1. {{step_4_action_1}}
2. {{step_4_action_2}}
3. {{step_4_action_3}}

> **--- PAUSE POINT ---**
> Second person verification required before proceeding.
> Verifier: __________ Date: __________ Time: __________

**Expected Result:** {{step_4_expected_result}}

| Initial | Date/Time | Verifier Initial |
|---------|-----------|------------------|
|         |           |                  |

---

### 5.5 {{step_5_title}}

**Performer:** {{step_5_role}}
**Estimated Time:** {{step_5_duration}}

1. {{step_5_action_1}}
2. {{step_5_action_2}}
3. {{step_5_action_3}}

**Expected Result:** {{step_5_expected_result}}

| Initial | Date/Time | Notes |
|---------|-----------|-------|
|         |           |       |

---

## 6. Verification & Acceptance Criteria

<!-- VERIFICATION GUIDANCE:
     - Define measurable criteria for each critical output.
     - Specify acceptable ranges, tolerances, or pass/fail thresholds.
     - Include who verifies and how discrepancies are handled.
-->

| Checkpoint           | Criteria             | Method               | Acceptable Range      | Verifier             |
|----------------------|----------------------|----------------------|-----------------------|----------------------|
| {{checkpoint_1}}     | {{criteria_1}}       | {{method_1}}         | {{range_1}}           | {{verifier_1}}       |
| {{checkpoint_2}}     | {{criteria_2}}       | {{method_2}}         | {{range_2}}           | {{verifier_2}}       |
| {{checkpoint_3}}     | {{criteria_3}}       | {{method_3}}         | {{range_3}}           | {{verifier_3}}       |

**Acceptance Decision:**
- ALL checkpoints PASS: Proceed to Section 8 (Records).
- ANY checkpoint FAILS: Proceed to Section 7 (Error Handling).

---

## 7. Error Handling & Deviations

<!-- ERROR HANDLING GUIDANCE:
     - Cover the most common failure modes (top 5-10).
     - For each: symptom, root cause, immediate action, escalation path.
     - Reference the deviation/CAPA SOP for formal deviations.
     - Include rollback procedures where applicable.
-->

### 7.1 Known Failure Modes

| #  | Symptom                    | Probable Cause           | Immediate Action         | Escalation              |
|----|----------------------------|--------------------------|--------------------------|-------------------------|
| 1  | {{symptom_1}}              | {{cause_1}}              | {{action_1}}             | {{escalation_1}}        |
| 2  | {{symptom_2}}              | {{cause_2}}              | {{action_2}}             | {{escalation_2}}        |
| 3  | {{symptom_3}}              | {{cause_3}}              | {{action_3}}             | {{escalation_3}}        |

### 7.2 Deviation Procedure

1. **STOP** — Halt the procedure at the current step.
2. **DOCUMENT** — Record the deviation on Form {{deviation_form_id}}.
3. **ASSESS** — Determine impact on product quality / patient safety / data integrity.
4. **NOTIFY** — Notify {{deviation_notify_role}} within {{deviation_notify_timeframe}}.
5. **DO NOT RESUME** — Until written authorization is received from {{deviation_authorizer}}.
6. **RESOLVE** — Follow CAPA process per {{capa_sop_reference}}.

### 7.3 Deviation Log

| Deviation # | Step # | Description | Impact Assessment | CAPA # | Resolved By | Date |
|-------------|--------|-------------|-------------------|--------|-------------|------|
|             |        |             |                   |        |             |      |

### 7.4 Rollback Procedure

{{rollback_instructions}}

---

## 8. Records & Documentation

<!-- RECORDS GUIDANCE:
     - List every document, form, log, or record generated by this SOP.
     - Specify retention period per regulatory requirements.
     - Specify storage location (physical and/or electronic).
     - Reference data integrity principles (ALCOA+).
-->

### 8.1 Records Generated

| Record                 | Form/System         | Retention Period     | Storage Location       | Responsible          |
|------------------------|---------------------|----------------------|------------------------|----------------------|
| {{record_1}}           | {{form_1}}          | {{retention_1}}      | {{storage_1}}          | {{responsible_1}}    |
| {{record_2}}           | {{form_2}}          | {{retention_2}}      | {{storage_2}}          | {{responsible_2}}    |
| {{record_3}}           | {{form_3}}          | {{retention_3}}      | {{storage_3}}          | {{responsible_3}}    |

### 8.2 Related Documents

| SOP ID               | Title                           | Relationship             |
|-----------------------|---------------------------------|--------------------------|
| {{related_sop_1_id}}  | {{related_sop_1_title}}        | {{relationship_1}}       |
| {{related_sop_2_id}}  | {{related_sop_2_title}}        | {{relationship_2}}       |

### 8.3 Data Integrity Statement

All records generated by this SOP must comply with ALCOA+ principles:
- **A**ttributable: All entries must identify who performed the action.
- **L**egible: All entries must be clear and readable.
- **C**ontemporaneous: Record at time of activity.
- **O**riginal: Preserve first-capture data.
- **A**ccurate: Reflect true observations.
- **+** Complete, Consistent, Enduring, Available.

---

## 9. Revision History

<!-- REVISION HISTORY GUIDANCE:
     - Log every change, no matter how minor.
     - Include: version, date, author, description of change, approval.
     - Most recent revision at the top.
-->

| Version   | Date               | Author             | Change Description                         | Approved By          |
|-----------|--------------------|--------------------|--------------------------------------------|----------------------|
| {{version}} | {{effective_date}} | {{author_name}}  | {{change_description}}                     | {{approver_name}}    |
|           |                    |                    |                                            |                      |

**Change Control Process:** All revisions must follow {{change_control_sop}}. Minor editorial changes (typos, formatting) require author + approver sign-off. Substantive changes require full review cycle.

---

## 10. Appendices

### Appendix A: {{appendix_a_title}}

{{appendix_a_content}}

### Appendix B: {{appendix_b_title}}

{{appendix_b_content}}

### Appendix C: {{appendix_c_title}}

{{appendix_c_content}}

---

## Sign-Off

| Role              | Name               | Signature          | Date               |
|-------------------|--------------------|--------------------|--------------------|
| Author            | {{author_name}}    |                    |                    |
| Reviewer          | {{reviewer_name}}  |                    |                    |
| Approver          | {{approver_name}}  |                    |                    |
| Quality Assurance | {{qa_signoff}}     |                    |                    |

---

*This document is controlled. Unauthorized copies are not valid. Verify current version before use.*
*End of {{sop_id}} v{{version}}*
*Template: sop-human-tmpl.md | SOP Factory | Synkra Hybrid*


---

## Referência: templates/sop-ml-tmpl.md

# Machine-Readable SOP Template (YAML)

> Use this YAML template to define SOPs that can be parsed and executed by AI agents, automation pipelines, and validation engines. Copy the YAML block below and fill in all fields.

<!-- ML-SOP GUIDANCE:
     Key principles:
     - Every step must have a unique ID for traceability.
     - Actions use verb_noun convention (e.g., validate_input, generate_report).
     - Tools reference registered MCP tools or system commands.
     - Validation blocks define pass/fail criteria programmatically.
     - Decision points create branching logic with explicit conditions.
     - Error handling maps failure modes to recovery actions.
-->

```yaml
# ============================================================
# SOP Machine-Readable Definition
# Template: sop-ml-tmpl.md | SOP Factory | Synkra Hybrid
# ============================================================

sop:
  # --- Identity -----------------------------------------------------------
  id: "{{sop_id}}"                          # Unique identifier (e.g., SOP-OPS-042-R01)
  version: "{{version}}"                     # Semantic version (e.g., 1.0.0)
  title: "{{sop_title}}"                     # Human-readable title
  purpose: "{{purpose}}"                     # One-line purpose statement

  # --- Classification -----------------------------------------------------
  classification:
    domain: "{{domain}}"                     # Domain area (e.g., operations, engineering, compliance)
    category: "{{category}}"                 # Category within domain (e.g., deployment, onboarding)
    risk_level: "{{risk_level}}"             # low | medium | high | critical
    compliance_tags:                         # Regulatory/compliance references
      - "{{compliance_tag_1}}"               # e.g., "FDA-21CFR11", "SOC2", "ISO-27001"
      - "{{compliance_tag_2}}"
  status: "{{status}}"                       # DRAFT | ACTIVE | DEPRECATED | RETIRED
  effective_date: "{{effective_date}}"       # ISO 8601: YYYY-MM-DD
  review_date: "{{review_date}}"             # ISO 8601: YYYY-MM-DD

  # --- Trigger -------------------------------------------------------------
  # What event or condition initiates this SOP
  trigger:
    type: "{{trigger_type}}"                 # manual | scheduled | event | condition
    description: "{{trigger_description}}"   # Human-readable trigger description
    event: "{{trigger_event}}"               # Event name if type=event (e.g., "deployment.requested")
    schedule: "{{trigger_schedule}}"         # Cron expression if type=scheduled (e.g., "0 9 * * 1")
    source: "{{trigger_source}}"             # System or actor that initiates
    conditions:                              # Pre-conditions that must be true
      - field: "{{condition_field_1}}"
        operator: "{{operator_1}}"           # eq | ne | gt | lt | gte | lte | contains | exists
        value: "{{condition_value_1}}"

  # --- Context -------------------------------------------------------------
  # Runtime requirements for executing this SOP
  context:
    tools:                                   # Tools/systems required
      - id: "{{tool_id_1}}"                 # Tool identifier for reference in steps
        name: "{{tool_name_1}}"              # Human-readable tool name
        type: "{{tool_type_1}}"              # mcp | cli | api | ui | agent | manual
        version: "{{tool_version_1}}"        # Minimum version required
        required: true                       # Whether tool is mandatory
      - id: "{{tool_id_2}}"
        name: "{{tool_name_2}}"
        type: "{{tool_type_2}}"
        version: "{{tool_version_2}}"
        required: false                      # Optional tools marked false

    permissions:                             # Access/permissions needed
      - resource: "{{resource_1}}"           # What resource (e.g., "github-repo", "database")
        action: "{{action_perm_1}}"          # read | write | execute | admin
        scope: "{{scope_1}}"                 # Scope restriction
        justification: "{{permission_1_why}}" # Why this permission is needed
      - resource: "{{resource_2}}"
        action: "{{action_perm_2}}"
        scope: "{{scope_2}}"
        justification: "{{permission_2_why}}"

    environment:                             # Environment variables / config
      - key: "{{env_key_1}}"
        description: "{{env_desc_1}}"
        required: true
        sensitive: false                     # true = value never logged
      - key: "{{env_key_2}}"
        description: "{{env_desc_2}}"
        required: true
        sensitive: true                      # Marked sensitive; value never logged

    input:                                   # Global input data schema
      - name: "{{input_1_name}}"             # Input parameter name
        type: "{{input_1_type}}"             # string | number | boolean | object | array | file
        required: true
        description: "{{input_1_desc}}"
        validation: "{{input_1_validation}}" # Regex or validation rule
      - name: "{{input_2_name}}"
        type: "{{input_2_type}}"
        required: false
        description: "{{input_2_desc}}"
        default: "{{input_2_default}}"

  # --- Procedure Steps -----------------------------------------------------
  steps:
    - id: "S001"                             # Unique step identifier (S001, S002, ...)
      name: "{{step_1_name}}"                # Human-readable step name
      action: "{{action_verb_noun_1}}"       # verb_noun convention: validate_input, fetch_data
      description: "{{step_1_description}}"  # Detailed description
      performer: "{{performer_1}}"           # Role or agent ID
      critical: false                        # true = failure halts entire SOP
      estimated_duration: "{{duration_1}}"   # ISO 8601 duration: PT5M, PT1H

      tool:
        id: "{{step_1_tool_id}}"             # References context.tools[].id
        command: "{{step_1_command}}"         # Exact command or API call
        timeout: "{{step_1_timeout}}"        # ISO 8601 duration

      input:
        - name: "{{step_1_input_name}}"
          type: "{{step_1_input_type}}"      # string | number | boolean | object | array | file
          source: "{{step_1_input_source}}"  # literal | env · previous_step | user_input | system
          value: "{{step_1_input_value}}"    # Actual value or step reference
          required: true

      output:
        - name: "{{step_1_output_name}}"
          type: "{{step_1_output_type}}"
          store_as: "{{step_1_output_var}}"  # Variable name for downstream reference

      validation:
        type: "{{step_1_val_type}}"          # assertion | schema | regex | custom
        rules:
          - field: "{{step_1_val_field}}"
            operator: "{{step_1_val_op}}"    # eq | ne | gt | lt | contains | matches | exists
            expected: "{{step_1_val_expected}}"
            message: "{{step_1_val_msg}}"    # Human-readable failure message

      on_success: "S002"                     # Step ID or END
      on_failure: "{{step_1_failure_handler}}" # Error handler ID

      decision_point: null                   # null if no decision; see S002 for decision example

    - id: "S002"
      name: "{{step_2_name}}"
      action: "{{action_verb_noun_2}}"
      description: "{{step_2_description}}"
      performer: "{{performer_2}}"
      critical: true                         # Critical step - failure halts SOP
      estimated_duration: "{{duration_2}}"

      tool:
        id: "{{step_2_tool_id}}"
        command: "{{step_2_command}}"
        timeout: "{{step_2_timeout}}"

      input:
        - name: "{{step_2_input_name}}"
          type: "{{step_2_input_type}}"
          source: "previous_step"
          value: "S001.{{step_1_output_var}}" # Chained from previous step
          required: true

      output:
        - name: "{{step_2_output_name}}"
          type: "{{step_2_output_type}}"
          store_as: "{{step_2_output_var}}"

      validation:
        type: "schema"
        rules:
          - field: "{{step_2_val_field}}"
            operator: "{{step_2_val_op}}"
            expected: "{{step_2_val_expected}}"
            message: "{{step_2_val_msg}}"

      on_success: "S003"                     # Default next (used if no decision_point match)
      on_failure: "{{step_2_failure_handler}}"

      # Decision point: branching logic
      decision_point:
        question: "{{decision_question}}"    # Human-readable question
        evaluate: "{{decision_expression}}"  # Expression to evaluate
        branches:
          - condition: "{{branch_condition_1}}"
            label: "{{branch_label_1}}"
            goto: "S003"                     # Step ID to jump to
          - condition: "{{branch_condition_2}}"
            label: "{{branch_label_2}}"
            goto: "S004"
          - condition: "default"             # Fallback branch (required)
            label: "{{branch_default_label}}"
            goto: "{{branch_default_target}}"

    - id: "S003"
      name: "{{step_3_name}}"
      action: "{{action_verb_noun_3}}"
      description: "{{step_3_description}}"
      performer: "{{performer_3}}"
      critical: false
      estimated_duration: "{{duration_3}}"

      tool:
        id: "{{step_3_tool_id}}"
        command: "{{step_3_command}}"
        timeout: "{{step_3_timeout}}"

      input:
        - name: "{{step_3_input_name}}"
          type: "{{step_3_input_type}}"
          source: "previous_step"
          value: "S002.{{step_2_output_var}}"
          required: true

      output:
        - name: "{{step_3_output_name}}"
          type: "{{step_3_output_type}}"
          store_as: "{{step_3_output_var}}"

      validation:
        type: "assertion"
        rules:
          - field: "{{step_3_val_field}}"
            operator: "{{step_3_val_op}}"
            expected: "{{step_3_val_expected}}"
            message: "{{step_3_val_msg}}"

      on_success: "END"                      # Terminal step
      on_failure: "{{step_3_failure_handler}}"
      decision_point: null

    # Add more steps as needed following the same schema...
    # - id: "S004"
    #   name: "..."
    #   ...

  # --- Error Handling -------------------------------------------------------
  error_handling:
    handlers:
      - id: "{{error_handler_id_1}}"         # Unique handler identifier
        name: "{{error_handler_name_1}}"
        trigger_on:
          - error_code: "{{error_code_1}}"
          - error_type: "{{error_type_1}}"   # timeout | validation | permission | system | custom
        severity: "{{error_severity_1}}"     # critical | high | medium | low
        actions:
          - type: "retry"                    # retry | rollback | notify | escalate | skip | abort
            config:
              max_retries: {{max_retries_1}} # Number (e.g., 3)
              retry_delay: "{{retry_delay_1}}" # ISO 8601 duration
              backoff: "{{backoff_strategy_1}}" # linear | exponential | fixed
          - type: "notify"
            config:
              channel: "{{notify_channel_1}}" # email | slack | webhook
              recipients: ["{{recipient_1}}"]
              template: "{{notify_template_1}}"

      - id: "{{error_handler_id_2}}"
        name: "{{error_handler_name_2}}"
        trigger_on:
          - error_type: "{{error_type_2}}"
        severity: "{{error_severity_2}}"
        actions:
          - type: "escalate"
            config:
              escalate_to: "{{escalate_to_role}}"
              deadline: "{{escalation_deadline}}" # ISO 8601 duration
              include_context: true

    fallback:                                # What to do if no handler matches
      action: "abort"
      notify: ["{{fallback_notify_1}}"]
      log_level: "error"

    global_timeout: "{{global_timeout}}"     # Max total execution time (e.g., PT2H)

  # --- Quality Gate ---------------------------------------------------------
  quality_gate:
    enabled: true
    criteria:
      - name: "{{qg_criteria_name_1}}"      # e.g., "All steps passed validation"
        type: "{{qg_criteria_type_1}}"       # percentage | count | boolean | threshold
        target: "{{qg_target_1}}"           # Expected value
        actual: null                         # Populated at runtime
        weight: {{qg_weight_1}}             # 0.0 - 1.0
      - name: "{{qg_criteria_name_2}}"
        type: "{{qg_criteria_type_2}}"
        target: "{{qg_target_2}}"
        actual: null
        weight: {{qg_weight_2}}
    pass_threshold: {{qg_pass_threshold}}    # Weighted score 0.0 - 1.0
    on_fail: "{{qg_on_fail}}"               # block | warn | notify

  # --- Outputs --------------------------------------------------------------
  outputs:
    artifacts:
      - name: "{{artifact_name_1}}"         # Final deliverable name
        type: "{{artifact_type_1}}"          # file | record | report | notification
        format: "{{artifact_format_1}}"      # pdf | json | csv | md | html | yaml
        destination: "{{artifact_dest_1}}"   # Where the output goes (path, URL, channel)
        retention: "{{artifact_retention_1}}" # ISO 8601 duration: P1Y, P7Y
      - name: "{{artifact_name_2}}"
        type: "{{artifact_type_2}}"
        format: "{{artifact_format_2}}"
        destination: "{{artifact_dest_2}}"
        retention: "{{artifact_retention_2}}"

    notifications:
      on_complete:
        - channel: "{{complete_channel_1}}"
          recipients: ["{{complete_recipient_1}}"]
          template: "{{complete_template_1}}"
      on_failure:
        - channel: "{{failure_channel_1}}"
          recipients: ["{{failure_recipient_1}}"]
          template: "{{failure_template_1}}"

  # --- Metadata -------------------------------------------------------------
  metadata:
    created_by: "{{created_by}}"
    created_at: "{{created_at}}"             # ISO 8601 datetime
    updated_by: "{{updated_by}}"
    updated_at: "{{updated_at}}"
    owner: "{{owner_id}}"
    department: "{{department}}"
    tags: [{{tags}}]                         # Comma-separated: "quality", "compliance", "onboarding"
    review_cycle: "{{review_cycle}}"         # ISO 8601 duration (e.g., P90D = every 90 days)
    regulatory_refs:
      - standard: "{{reg_standard_1}}"       # ISO 9001, FDA 21 CFR Part 11, etc.
        clause: "{{reg_clause_1}}"
    related_sops: ["{{related_sop_1}}", "{{related_sop_2}}"]
    change_log:
      - version: "{{version}}"
        date: "{{effective_date}}"
        author: "{{created_by}}"
        summary: "{{change_summary}}"
```

---

## Usage Notes

1. **Fill all `{{handlebars}}`** with actual values before committing.
2. **Step IDs** must be unique and follow the pattern `S001`, `S002`, etc.
3. **Decision points** enable branching logic — use `null` when step is linear.
4. **Validation types**: `assertion` (boolean check), `schema` (structure validation), `regex` (pattern match), `custom` (external validator).
5. **on_failure** must reference a valid error handler ID defined in `error_handling.handlers`.
6. **on_success** references the next step ID or `"END"` for terminal steps.
7. **Quality gate** weights must sum to 1.0 — the SOP passes only if the weighted score meets `pass_threshold`.
8. **Rollback** should be defined for any SOP with `risk_level: high` or `critical`.
9. For AI agent execution, ensure all `tool.id` values match registered tool IDs in the execution environment.
10. This YAML can be validated against the JSON Schema at: `schemas/sop-ml-schema.json`

---

*Template: sop-ml-tmpl.md | SOP Factory | Synkra Hybrid*


---

## Referência: templates/state-machine-template.yaml

# =============================================================================
# State Machine Template for ML SOPs
# =============================================================================
# Template: state-machine-template.yaml | SOP Factory | Synkra Hybrid
# Used by: sop-ml-architect (*state-machine command)
#
# Based on: Harel Statecharts + XState patterns
#
# Usage:
#   1. Model each process phase as a state
#   2. Define transitions with guards (conditions) and actions
#   3. Ensure: no orphans, no dead-ends, all branches covered
#   4. Embed into ml-sop-yaml-template.yaml state_machine section
#
# State Types:
#   initial       - Entry point (exactly one per machine)
#   intermediate  - Processing phase
#   decision      - Branching point (must have transitions for ALL outcomes)
#   parallel      - Fork/join for concurrent operations
#   wait          - Pause for external event or timer
#   terminal      - End state (SUCCESS, FAILURE, ESCALATE, TIMEOUT)
# =============================================================================

state_machine:
  id: "{{process_name}}_fsm"
  version: "1.0.0"
  description: "{{process_description}}"

  # --- Configuration ----------------------------------------------------------
  config:
    max_depth: 20                              # Prevent infinite loops
    timeout: "{{PT2H}}"                        # Global state machine timeout
    idempotent: true                           # Safe to retry from any state

  # --- Terminal State Definitions ---------------------------------------------
  initial_state: "INIT"
  terminal_states:
    - "SUCCESS"
    - "FAILURE"
    - "ESCALATE"
    - "TIMEOUT"
  error_states:
    - "ERROR_TRANSIENT"
    - "ERROR_PERMANENT"

  # --- States -----------------------------------------------------------------
  states:

    # === INITIAL STATE ========================================================
    - id: "INIT"
      name: "Initialize"
      type: "initial"
      description: "Validate preconditions and prepare execution context"
      on_enter:
        - "log_start"
        - "validate_inputs"
      on_exit:
        - "set_start_timestamp"
      transitions:
        - target: "{{first_processing_state}}"
          guard: "inputs_valid == true"
          action: "prepare_context"
        - target: "FAILURE"
          guard: "inputs_valid == false"
          action: "log_validation_failure"

    # === PROCESSING STATE (copy and modify for each phase) ====================
    - id: "{{state_id}}"
      name: "{{state_name}}"
      type: "intermediate"                     # intermediate | decision | parallel | wait
      description: "{{state_description}}"
      on_enter:
        - "{{entry_action}}"                   # Action on entering this state
      on_exit:
        - "{{exit_action}}"                    # Action on leaving this state
      data:                                    # State-local data
        step_ref: "{{S00x}}"                   # Maps to steps[].id in the SOP
        retry_count: 0
      transitions:
        - target: "{{next_state}}"
          guard: "{{success_condition}}"
          action: "{{success_action}}"
        - target: "ERROR_TRANSIENT"
          guard: "{{transient_error_condition}}"
          action: "increment_retry"
        - target: "ERROR_PERMANENT"
          guard: "{{permanent_error_condition}}"
          action: "log_permanent_failure"

    # === DECISION STATE (branching logic) =====================================
    - id: "{{decision_state_id}}"
      name: "{{decision_name}}"
      type: "decision"
      description: "{{what_is_being_decided}}"
      on_enter:
        - "evaluate_condition"
      evaluate: "{{expression_to_evaluate}}"   # Variable or expression
      transitions:
        - target: "{{branch_a_state}}"
          guard: "{{condition_a}}"
          label: "{{branch_a_label}}"
        - target: "{{branch_b_state}}"
          guard: "{{condition_b}}"
          label: "{{branch_b_label}}"
        - target: "{{default_state}}"
          guard: "default"                     # REQUIRED: catch-all fallback
          label: "Default path"

    # === PARALLEL STATE (fork/join) ===========================================
    - id: "{{parallel_state_id}}"
      name: "{{parallel_name}}"
      type: "parallel"
      description: "{{parallel_description}}"
      regions:
        - id: "{{region_a_id}}"
          initial: "{{region_a_start}}"
          states:
            - id: "{{region_a_start}}"
              type: "intermediate"
              transitions:
                - target: "{{region_a_end}}"
            - id: "{{region_a_end}}"
              type: "terminal"
        - id: "{{region_b_id}}"
          initial: "{{region_b_start}}"
          states:
            - id: "{{region_b_start}}"
              type: "intermediate"
              transitions:
                - target: "{{region_b_end}}"
            - id: "{{region_b_end}}"
              type: "terminal"
      join_condition: "all_complete"            # all_complete | any_complete
      transitions:
        - target: "{{after_join_state}}"
          guard: "all_regions_succeeded"
        - target: "ERROR_TRANSIENT"
          guard: "any_region_failed"

    # === WAIT STATE (external event / timer) ==================================
    - id: "{{wait_state_id}}"
      name: "{{wait_name}}"
      type: "wait"
      description: "{{waiting_for_what}}"
      wait_for:
        type: "{{event | timer | approval}}"
        event: "{{event_name}}"                # If type=event
        timeout: "{{PTxM}}"                    # Max wait duration
      transitions:
        - target: "{{received_state}}"
          guard: "event_received == true"
        - target: "TIMEOUT"
          guard: "timeout_exceeded == true"

    # === ERROR STATES =========================================================
    - id: "ERROR_TRANSIENT"
      name: "Transient Error"
      type: "intermediate"
      description: "Recoverable error -- retry with backoff"
      on_enter:
        - "log_error"
        - "increment_global_retry"
      transitions:
        - target: "{{retry_target_state}}"     # State to retry
          guard: "retry_count < max_retries"
          action: "wait_backoff"
        - target: "ERROR_PERMANENT"
          guard: "retry_count >= max_retries"
          action: "log_max_retries_exceeded"

    - id: "ERROR_PERMANENT"
      name: "Permanent Error"
      type: "intermediate"
      description: "Unrecoverable error -- escalate or fail"
      on_enter:
        - "log_permanent_error"
        - "capture_diagnostics"
      transitions:
        - target: "ESCALATE"
          guard: "escalation_configured == true"
          action: "notify_escalation_target"
        - target: "FAILURE"
          guard: "escalation_configured == false"

    # === TERMINAL STATES ======================================================
    - id: "SUCCESS"
      name: "Success"
      type: "terminal"
      on_enter:
        - "log_success"
        - "emit_completion_event"
        - "set_end_timestamp"

    - id: "FAILURE"
      name: "Failure"
      type: "terminal"
      on_enter:
        - "log_failure"
        - "emit_failure_event"
        - "set_end_timestamp"
        - "trigger_compensation"               # Rollback if needed

    - id: "ESCALATE"
      name: "Escalation"
      type: "terminal"
      on_enter:
        - "log_escalation"
        - "notify_escalation_contacts"
        - "set_end_timestamp"

    - id: "TIMEOUT"
      name: "Timeout"
      type: "terminal"
      on_enter:
        - "log_timeout"
        - "emit_timeout_event"
        - "set_end_timestamp"

# =============================================================================
# VALIDATION RULES (agent must verify before embedding)
# =============================================================================
# 1. Exactly ONE state with type: initial
# 2. At least ONE state with type: terminal
# 3. Every non-terminal state has at least one outgoing transition
# 4. Every decision state has a guard: "default" transition
# 5. No orphan states (all reachable from initial)
# 6. No dead-end non-terminal states
# 7. All transition targets reference existing state IDs
# 8. Parallel regions have at least 2 regions
# 9. Wait states have explicit timeouts
# 10. Error states have recovery or escalation paths
# =============================================================================


---

## Referência: templates/tool-binding-template.yaml

# =============================================================================
# Tool Binding Template for ML SOPs
# =============================================================================
# Template: tool-binding-template.yaml | SOP Factory | Synkra Hybrid
# Used by: sop-ml-architect (*bind-tools command)
#
# Purpose:
#   Maps each actionable SOP step to a concrete tool, API endpoint, CLI command,
#   or MCP server function. Tool bindings make ML SOPs executable by specifying
#   exactly HOW each action is performed.
#
# Tool Types:
#   mcp     - Model Context Protocol server tool
#   cli     - Command-line tool or script
#   api     - REST/GraphQL API endpoint
#   ui      - User interface action (requires human-in-loop)
#   agent   - Delegated to another AI agent
#   manual  - Human action with instructions (no automation)
#
# Usage:
#   1. Define all available tools in the tool_registry section
#   2. Create bindings that map SOP steps to registered tools
#   3. Embed tool_registry in context.tools and bindings in each step's tool field
# =============================================================================

# ==============================================================================
# TOOL REGISTRY (declare all available tools)
# ==============================================================================
tool_registry:

  # --- MCP Server Tool --------------------------------------------------------
  - id: "{{mcp_tool_id}}"
    name: "{{mcp_tool_name}}"
    type: "mcp"
    description: "{{tool_description}}"
    server: "{{mcp_server_name}}"              # MCP server identifier
    function: "{{function_name}}"              # Function exposed by the server
    version: "{{min_version}}"
    required: true
    auth:
      type: "{{none | api_key | oauth | bearer}}"
      config_key: "{{ENV_VAR_NAME}}"           # Environment variable holding credentials
    rate_limit:
      requests_per_minute: 60
      burst: 10
    health_check:
      method: "{{ping | list_tools | status}}"
      timeout: "PT5S"

  # --- CLI Tool ---------------------------------------------------------------
  - id: "{{cli_tool_id}}"
    name: "{{cli_tool_name}}"
    type: "cli"
    description: "{{tool_description}}"
    command: "{{base_command}}"                 # e.g., "pg_dump", "aws", "npm"
    version: "{{min_version}}"
    required: true
    install_check: "{{version_command}}"        # e.g., "pg_dump --version"
    platform:
      - "linux"
      - "darwin"

  # --- REST API Tool ----------------------------------------------------------
  - id: "{{api_tool_id}}"
    name: "{{api_tool_name}}"
    type: "api"
    description: "{{tool_description}}"
    base_url: "{{https://api.example.com/v1}}"
    version: "{{api_version}}"
    required: true
    auth:
      type: "{{bearer | api_key | oauth2}}"
      header: "{{Authorization}}"
      config_key: "{{ENV_VAR_NAME}}"
    rate_limit:
      requests_per_minute: 100
    retry_config:
      retryable_status_codes: [429, 500, 502, 503]
      max_retries: 3
      backoff: "exponential"

  # --- Agent Tool (delegation) ------------------------------------------------
  - id: "{{agent_tool_id}}"
    name: "{{agent_name}}"
    type: "agent"
    description: "{{what_the_agent_does}}"
    agent_id: "{{agent_identifier}}"
    capabilities:
      - "{{capability_1}}"
      - "{{capability_2}}"
    timeout: "{{PT10M}}"

  # --- Manual Tool (human action) ---------------------------------------------
  - id: "{{manual_tool_id}}"
    name: "{{manual_action_name}}"
    type: "manual"
    description: "{{what_the_human_does}}"
    instructions: "{{step_by_step_instructions}}"
    estimated_duration: "{{PT5M}}"
    requires_confirmation: true                # Agent waits for human confirmation

# ==============================================================================
# TOOL BINDINGS (map SOP steps to tools)
# ==============================================================================
tool_bindings:

  # --- MCP Binding Example ----------------------------------------------------
  - step_id: "{{S00x}}"
    tool_id: "{{mcp_tool_id}}"                 # References tool_registry[].id
    invocation:
      function: "{{function_name}}"
      parameters:
        - name: "{{param_1}}"
          value: "{{literal_value | $input.field | $S00x.output_var}}"
          type: "{{string | number | boolean | object}}"
        - name: "{{param_2}}"
          value: "{{value_source}}"
          type: "{{type}}"
    expected_response:
      success:
        condition: "{{response.status == 'ok'}}"
        extract:
          - field: "{{response.data.result}}"
            store_as: "{{output_variable}}"
      failure:
        condition: "{{response.error != null}}"
        action: "{{trigger_error_handler}}"
    timeout: "{{PT30S}}"

  # --- CLI Binding Example ----------------------------------------------------
  - step_id: "{{S00x}}"
    tool_id: "{{cli_tool_id}}"
    invocation:
      command: "{{full_command_with_args}}"     # e.g., "pg_dump -h $DB_HOST -d $DB_NAME -F c"
      working_dir: "{{/path/to/dir}}"
      env_override:                            # Additional env vars for this command
        - key: "{{EXTRA_VAR}}"
          value: "{{value}}"
    expected_response:
      success:
        condition: "exit_code == 0"
        extract:
          - field: "stdout"
            store_as: "{{output_variable}}"
      failure:
        condition: "exit_code != 0"
        extract:
          - field: "stderr"
            store_as: "{{error_message}}"
    timeout: "{{PT5M}}"

  # --- API Binding Example ----------------------------------------------------
  - step_id: "{{S00x}}"
    tool_id: "{{api_tool_id}}"
    invocation:
      method: "{{GET | POST | PUT | DELETE}}"
      path: "{{/endpoint/path}}"               # Appended to base_url
      headers:
        Content-Type: "application/json"
        X-Custom-Header: "{{header_value}}"
      query_params:
        - name: "{{param}}"
          value: "{{value}}"
      body:                                    # For POST/PUT
        field_1: "{{$input.field | $S00x.var}}"
        field_2: "{{value}}"
    expected_response:
      success:
        status_codes: [200, 201]
        condition: "{{response.body.success == true}}"
        extract:
          - field: "{{response.body.data.id}}"
            store_as: "{{resource_id}}"
      failure:
        status_codes: [400, 404, 500]
        extract:
          - field: "{{response.body.error.message}}"
            store_as: "{{error_detail}}"
    timeout: "{{PT15S}}"

  # --- Agent Binding Example --------------------------------------------------
  - step_id: "{{S00x}}"
    tool_id: "{{agent_tool_id}}"
    invocation:
      task: "{{task_description}}"
      input:
        - name: "{{param}}"
          value: "{{value_or_ref}}"
      constraints:
        max_turns: 10
        timeout: "{{PT10M}}"
    expected_response:
      success:
        condition: "{{agent.status == 'completed'}}"
        extract:
          - field: "{{agent.output}}"
            store_as: "{{agent_result}}"

  # --- Manual Binding Example -------------------------------------------------
  - step_id: "{{S00x}}"
    tool_id: "{{manual_tool_id}}"
    invocation:
      prompt: "{{instruction_to_display_to_human}}"
      input_fields:
        - name: "{{field_name}}"
          type: "{{string | boolean | file}}"
          label: "{{human_readable_label}}"
          required: true
    expected_response:
      success:
        condition: "{{confirmation_received == true}}"
        extract:
          - field: "{{user_input.field_name}}"
            store_as: "{{human_response}}"
    timeout: "{{PT30M}}"                       # Longer timeout for human actions

# ==============================================================================
# FALLBACK CHAIN
# ==============================================================================
# When primary tool fails, try fallback tools in order.
# Useful for critical steps that must succeed.

fallback_chains:
  - step_id: "{{S00x}}"
    primary: "{{primary_tool_id}}"
    fallbacks:
      - tool_id: "{{fallback_tool_1}}"
        condition: "{{when_to_use}}"           # e.g., "primary_timeout"
      - tool_id: "{{manual_fallback}}"
        condition: "all_automated_failed"       # Last resort: human

# ==============================================================================
# CIRCUIT BREAKER
# ==============================================================================
# Prevent cascading failures when a tool is consistently failing.

circuit_breakers:
  - tool_id: "{{tool_id}}"
    failure_threshold: 5                       # Failures before circuit opens
    recovery_timeout: "PT5M"                   # Time before retry after open
    half_open_max: 2                           # Test requests in half-open state
    on_open: "{{use_fallback | skip | abort}}"

# ==============================================================================
# VALIDATION RULES (agent must verify before finalizing)
# ==============================================================================
# 1. Every actionable step has a tool binding
# 2. All tool_id references exist in tool_registry
# 3. All parameter value references ($input.x, $S00x.var) are resolvable
# 4. Critical steps have fallback chains defined
# 5. API tools have auth configured
# 6. CLI tools have install_check defined
# 7. Manual tools have clear instructions and reasonable timeouts
# 8. No tool_id appears in bindings without a registry entry
# ==============================================================================
