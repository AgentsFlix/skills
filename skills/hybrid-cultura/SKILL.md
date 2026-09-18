---
name: hybrid-cultura
description: "Cultura é o que a empresa faz quando o dono não está olhando. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: \"documenta a cultura de [empresa]\"."
version: 0.4.4
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [hybrid-workspace, negocio, elicitacao, yaml]
    related_skills: [hybrid-diagnostico, hybrid-proxima-acao, hybrid-perfil, hybrid-fundador]
    config:
      - key: hybrid.pasta
        description: "Pasta do negócio no seu computador: é onde os YAML do Hybrid Workspace vivem (perfil, ICP, marca, oferta, diagnósticos). Um negócio por pasta."
        default: "~/hybrid/meu-negocio"
        prompt: "Em que pasta ficam os arquivos deste negócio? (uma pasta por negócio)"
---

# OS MANDAMENTOS · Valores, mandamentos, mantras, manifesto e critérios de contratação

Cultura é o que a empresa faz quando o dono não está olhando. Esta skill escreve isso: valores com comportamento observável, mandamentos, mantras, manifesto, história da empresa, perfil de liderança e critérios de contratação. Onze arquivos que fazem o time decidir igual sem perguntar.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (valor já no seu contexto), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "documenta a cultura de [empresa]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit culture | `references/elicit-culture.md` |
| template que esta skill preenche | `templates/culture-commandments.yaml` |
| template que esta skill preenche | `templates/culture-company-history.yaml` |
| template que esta skill preenche | `templates/culture-decision-frameworks.yaml` |
| template que esta skill preenche | `templates/culture-hiring-criteria.yaml` |
| template que esta skill preenche | `templates/culture-leadership-profile.yaml` |
| template que esta skill preenche | `templates/culture-lifestyle.yaml` |
| template que esta skill preenche | `templates/culture-manifesto.yaml` |
| template que esta skill preenche | `templates/culture-mantras.yaml` |
| template que esta skill preenche | `templates/culture-mission-vision-positioning.yaml` |
| template que esta skill preenche | `templates/culture-pillars.yaml` |
| template que esta skill preenche | `templates/culture-values.yaml` |


## Procedure

1. Resolva a pasta: `hybrid.pasta`. Se não existir, crie. Para cada template listado acima que ainda não exista na pasta, copie-o de `templates/` para a pasta com o nome original (ex.: `company-icp.yaml` → `icp.yaml`).
2. Abra a referência do procedimento e siga as fases na ordem. Onde ela escrever `{pasta}/…`, leia a pasta configurada. Onde ela citar um comando `*algo` ou um script `.cjs`/`.sh`, trate como nome da etapa, não como algo a executar.
3. Conduza a elicitação em blocos: apresente o resumo do que já está preenchido, pergunte só o que falta, aceite 'não sei ainda' e deixe `null`. Nunca preencha com suposição.
4. Grave o YAML na pasta, preservando a estrutura do template. Calcule a completude: campos preenchidos ÷ campos obrigatórios; atualize `metadata.completeness_percentage` e `status`.
5. Se a completude ficou abaixo de 85%, diga quais seções faltam e o que perguntar na próxima sessão. Não declare o arquivo pronto.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pular o Diagnosis Gate quando a referência o pede. O nível de consciência muda todas as perguntas seguintes.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O YAML existe na pasta configurada e parseia (`python3 -c 'import yaml,sys; yaml.safe_load(open(sys.argv[1]))' <arquivo>` sai 0).
2. `metadata.completeness_percentage` foi recalculado e bate com a contagem de campos não-nulos.
3. Nenhum campo obrigatório foi preenchido com valor que o usuário não deu; os pendentes estão em `null` e listados.
4. Se abaixo de 85%, a resposta diz as seções faltantes e não declara pronto.
5. Nenhum dado foi enviado para fora da pasta do negócio.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/elicit-culture.md`
- `templates/culture-commandments.yaml`
- `templates/culture-company-history.yaml`
- `templates/culture-decision-frameworks.yaml`
- `templates/culture-hiring-criteria.yaml`
- `templates/culture-leadership-profile.yaml`
- `templates/culture-lifestyle.yaml`
- `templates/culture-manifesto.yaml`
- `templates/culture-mantras.yaml`
- `templates/culture-mission-vision-positioning.yaml`
- `templates/culture-pillars.yaml`
- `templates/culture-values.yaml`
