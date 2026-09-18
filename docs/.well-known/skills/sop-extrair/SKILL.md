---
name: sop-extrair
description: 'O processo existe na cabeça de quem faz. Use quando: "extrai o SOP de [processo]" e aponte a fonte (texto, arquivo, transcrição) ou peça a entrevista.'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.5
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/sop-extrair
  tags: processos, sop, qualidade, operacao
  related: sop-criar, sop-auditar
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

## Arquivos desta skill

- `references/checklist-extraction-completeness-checklist.md`
- `references/data-category-map.yaml`
- `references/data-confidence-levels.yaml`
- `references/extract-from-video.md`
- `references/extract-sop.md`
- `references/structured-interview.md`
- `templates/extraction-output-template.md`
