---
name: sop-auditar
description: 'Um SOP pode existir e não servir. Use quando: "audita este SOP" (ou uma pasta inteira).'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.4
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/sop-auditar
  tags: processos, sop, qualidade, operacao
  related: sop-extrair, sop-criar
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

1. Identifique o procedimento pela tabela. Abra a referência e leia `Inputs` e `Prerequisites`; colete do usuário o que for `required` e pergunte o que faltar.
2. Siga as fases da referência na ordem. Onde ela citar um arquivo de apoio desta skill (listados no fim), abra-o; onde citar script `.cjs`/`.py` do runtime de origem, faça a etapa manualmente e diga que fez.
3. Pontue com a rubrica de `references/data-sop-scoring-rubric.yaml` e aplique os limiares de `references/data-verdict-thresholds.yaml`; não arredonde para cima.
4. Rode o checklist correspondente (arquivos de apoio que começam com checklist-) sobre o resultado. Corrija o que falhou.
5. Entregue no formato do template de saída, com o checklist marcado item a item.

## Pitfalls

- Certificar com gate aberto. Certificação só sai quando todos os gates passam; 'quase' é não.
- Pular `Prerequisites`. A referência pede acesso ao dono do processo por um motivo.
- Tratar script do runtime de origem como executável aqui. Faça a etapa e registre.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O artefato final segue o template de saída desta skill, seção por seção.
2. Cada dimensão da rubrica tem nota e evidência citada do SOP auditado.
3. O checklist correspondente aparece na entrega com cada item marcado, sem item falho.
4. O veredito segue os limiares declarados e está escrito em uma linha.
5. A resposta nomeia a referência usada.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

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
