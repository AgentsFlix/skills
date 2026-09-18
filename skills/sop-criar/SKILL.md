---
name: sop-criar
description: "Escreve o procedimento duas vezes, de propósito: uma versão para pessoa, no padrão FDA/GMP, e uma para agente, em YAML ou JSON com estados, decisões e ferramentas. Use quando: \"escreve o SOP de…"
version: 0.4.4
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [processos, sop, qualidade, operacao]
    related_skills: [sop-extrair, sop-auditar]
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

## Arquivos desta skill

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
