---
name: hybrid-perfil
description: 'O perfil completo da empresa em YAML: quem é, para quem existe, o que promete, que credenciais sustentam a promessa. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: "monta o perfil…'
version: 0.4.3
author: José Carlos Amorim
license: MIT
platforms:
- linux
- macos
- windows
metadata:
  hermes:
    tags:
    - hybrid-workspace
    - negocio
    - elicitacao
    - yaml
    related_skills:
    - hybrid-diagnostico
    - hybrid-proxima-acao
    - hybrid-fundador
    - hybrid-icp
---

# QUEM SOMOS · Missão, visão, credenciais e o perfil completo, em seis fases

O perfil completo da empresa em YAML: quem é, para quem existe, o que promete, que credenciais sustentam a promessa. O agente conduz a elicitação em seis fases com gate de 85% de completude por seção, e não deixa avançar com campo vazio fingindo que está pronto. É a base que todas as outras skills Hybrid leem.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (valor já no seu contexto), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "monta o perfil do negócio [nome]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

Para fechar o perfil: nome/identificação do negócio, oferta, público atendido, problema que resolve e objetivo informado. Missão detalhada, histórico, credenciais e equipe só são necessários quando mudam o pedido; não bloqueiam uma síntese inicial.

Leia `references/configuracao.json` apenas para resolver configuração ausente após o bootstrap. Defaults são exemplos; confirme o destino real antes de escrever.

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

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Leia o material existente primeiro. Extraia identificação, oferta, público, problema e objetivo com origem; destaque o que ainda é hipótese da pessoa. Use company-company-profile.yaml somente para campos pertinentes; founder DNA, credenciais e cultura são aprofundamentos opcionais, não pré-requisitos para esta etapa.
4. Entreviste apenas sobre lacunas determinantes. Cada pergunta aberta, inclusive no encerramento, traz exemplo adjacente construído com a memória recuperada; se faltar contexto, exemplo explicitamente hipotético com campo a preencher. Não peça confirmação de fatos atuais apenas por estarem em outro formato.
5. Entregue o perfil e um mapa de origem/lacunas. Se usar o YAML completo, mantenha null nos campos desconhecidos e status parcial; nunca conte metadados/defaults/exemplos como preenchimento. Não afirme percentual de completude sem denominador explícito dos campos obrigatórios. Encaminhe o perfil útil à etapa de público sem inventar empresa, missão ou credenciais.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Perfil inicial é pontual. Revisão pode valer após mudança de oferta, público ou operação; não reentrevistar em frequência fixa sem motivo.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pular o Diagnosis Gate quando a referência o pede. O nível de consciência muda todas as perguntas seguintes.

## Verification

Perfil com campos obrigatórios conhecidos ou lacunas nomeadas, origem rastreável e estado parcial/completo coerente. Não exigir dados irrelevantes para a síntese solicitada. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/elicit-company-profile.md`
- `references/elicit-credentials.md`
- `references/elicit-vision.md`
- `references/identidade.json`
- `references/setup-business-profile.md`
- `references/workflow-business-profile-pipeline.yaml`
- `scripts/auditar.py`
- `templates/company-company-profile.yaml`
- `templates/company-credentials.yaml`
- `templates/culture-mission-vision-positioning.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
