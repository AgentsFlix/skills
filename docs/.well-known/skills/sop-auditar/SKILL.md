---
name: sop-auditar
description: 'Um SOP pode existir e não servir. Use quando: "audita este SOP" (ou uma pasta inteira).'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
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
