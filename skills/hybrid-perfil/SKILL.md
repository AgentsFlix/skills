---
name: hybrid-perfil
description: "O perfil completo da empresa em YAML: quem é, para quem existe, o que promete, que credenciais sustentam a promessa. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: \"monta o perfil…"
version: 0.4.5
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [hybrid-workspace, negocio, elicitacao, yaml]
    related_skills: [hybrid-diagnostico, hybrid-proxima-acao, hybrid-fundador, hybrid-icp]
    config:
      - key: hybrid.pasta
        description: "Pasta do negócio no seu computador: é onde os YAML do Hybrid Workspace vivem (perfil, ICP, marca, oferta, diagnósticos). Um negócio por pasta."
        default: "~/hybrid/meu-negocio"
        prompt: "Em que pasta ficam os arquivos deste negócio? (uma pasta por negócio)"
---

# QUEM SOMOS · Missão, visão, credenciais e o perfil completo, em seis fases

O perfil completo da empresa em YAML: quem é, para quem existe, o que promete, que credenciais sustentam a promessa. O agente conduz a elicitação em seis fases com gate de 85% de completude por seção, e não deixa avançar com campo vazio fingindo que está pronto. É a base que todas as outras skills Hybrid leem.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (valor já no seu contexto), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "monta o perfil do negócio [nome]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| setup business profile | `references/setup-business-profile.md` |
| elicit company profile | `references/elicit-company-profile.md` |
| elicit vision | `references/elicit-vision.md` |
| elicit credentials | `references/elicit-credentials.md` |
| template que esta skill preenche | `templates/company-company-profile.yaml` |
| template que esta skill preenche | `templates/company-credentials.yaml` |
| template que esta skill preenche | `templates/culture-mission-vision-positioning.yaml` |


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

- `references/elicit-company-profile.md`
- `references/elicit-credentials.md`
- `references/elicit-vision.md`
- `references/setup-business-profile.md`
- `references/workflow-business-profile-pipeline.yaml`
- `templates/company-company-profile.yaml`
- `templates/company-credentials.yaml`
- `templates/culture-mission-vision-positioning.yaml`
