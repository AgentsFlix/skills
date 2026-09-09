---
name: hybrid-icp
description: 'Quem é a pessoa que compra, em 47 campos: demografia, dor, desejo, objeções, linguagem, onde está. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: "monta o ICP de [produto]".'
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
    - hybrid-perfil
    - hybrid-fundador
---

# O CLIENTE IDEAL · ICP em 47 campos, com o nível de consciência do mercado antes

Quem é a pessoa que compra, em 47 campos: demografia, dor, desejo, objeções, linguagem, onde está. Antes de perguntar qualquer coisa, a skill passa pelo Diagnosis Gate: nível de consciência e sofisticação do mercado, porque o ICP muda conforme o mercado já sabe ou não que tem o problema.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (valor já no seu contexto), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "monta o ICP de [produto]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

Obrigatórios: negócio/produto identificado, destino privado se houver escrita, diagnóstico de consciência/sofisticação e campos requeridos da referência escolhida. Opcionais: pesquisas, entrevistas e histórico do ICP. Reuse company/company-profile.yaml, company/icp.yaml e company/diagnosis.yaml do negócio conhecido. Não misture negócios.

A contagem do template expandido está em `references/campos-icp.json`. Use seus caminhos e o total real para completude; o rótulo editorial de origem não é o denominador. Defaults vazios não são respostas.

Leia `references/configuracao.json` apenas para resolver configuração ausente após o bootstrap. Defaults são exemplos; confirme o destino real antes de escrever.

| procedimento | referência |
|---|---|
| elicit icp yaml | `references/elicit-icp-yaml.md` |
| elicit icp | `references/elicit-icp.md` |
| template que esta skill preenche | `templates/company-icp.yaml` |
| template que esta skill preenche | `templates/company-diagnosis.yaml` |


## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de configurar a pasta ou entrevistar, leia o contrato e os arquivos conhecidos do negócio. Resolva hybrid.pasta a partir de contexto atual, sem confundir exemplo de caminho com preferência da pessoa. Reuse `company/company-profile.yaml`, `company/icp.yaml` e `company/diagnosis.yaml` existentes. Se houver estrutura legada em outro caminho conhecido, reconheça-a antes de duplicar arquivos.
2. Leia `references/elicit-icp-yaml.md` para estrutura e `references/elicit-icp.md` para o Diagnosis Gate. Os questionários são bancos de lacunas, não duas entrevistas cumulativas. Confirme só o que mudou; correção atual do humano vence memória antiga. Todo campo aberto perguntado, em qualquer referência, deve ter exemplo adjacente baseado nos fatos recuperados.
3. Use `templates/company-diagnosis.yaml` e `templates/company-icp.yaml` apenas como base para arquivos ausentes, preservando os existentes. Escreva os destinos canônicos `company/diagnosis.yaml` e `company/icp.yaml`. Registre primeiro consciência/sofisticação com evidência; se faltar dado, deixe null e o gate pendente, sem inventar diagnóstico.
4. Elicite lacunas em blocos pequenos. Aceite não saber; não conte sugestões ou inferências como campos confirmados. Preserve origem e data num registro privado de evidências por campo. Calcule completude pelos campos de conteúdo requeridos: informe quais entraram, preenchidos/total e status. Metadados, listas vazias e FILL_THIS não contam.
5. Entregue YAML e resumo do que foi reaproveitado/alterado, pendências e gate. Com arquivos disponíveis, verifique parse e releia o resultado salvo. Sem ferramenta de arquivo, entregue o conteúdo e diga que não salvou. Abaixo do gate de 85% ou com diagnóstico obrigatório pendente, não declare pronto. Avalie rotina e registre o resultado observado.

## Avaliação de rotina

Não vale refazer a entrevista por calendário. Pode valer um convite de revisão quando houver novas entrevistas, mudança de público ou produto; sem novidades, ficar em silêncio.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pular o Diagnosis Gate quando a referência o pede. O nível de consciência muda todas as perguntas seguintes.

## Verification

1. YAML preserva a estrutura dos templates e parseia; a persistência foi conferida ou declarada indisponível.
2. Diagnosis Gate tem evidência suficiente ou está explicitamente pendente. ICP não é declarado pronto com esse gate pendente.
3. Completude identifica os campos requeridos e numerador/denominador, sem contar metadados, placeholders ou exemplos como respostas. Gate de 85% aplicado sem fabricar preenchimento.
4. Nenhum negócio foi misturado; correções atuais prevalecem, lacunas são null e todas as perguntas abertas tiveram exemplos contextuais ou hipotéticos declarados.
5. A avaliação de rotina está registrada; nenhuma revisão ou alerta foi presumido agendado.

## Arquivos desta skill

- `references/ativacao.md`
- `references/campos-icp.json`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/elicit-icp-yaml.md`
- `references/elicit-icp.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `templates/company-diagnosis.yaml`
- `templates/company-icp.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
