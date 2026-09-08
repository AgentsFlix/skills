---
name: hybrid-oferta
description: "O offerbook é o documento da oferta: o que entra, o que custa, por que vale mais que custa, quais objeções ela já responde. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: \"monta o…"
version: 0.4.3
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [hybrid-workspace, negocio, diagnostico, yaml]
    related_skills: [hybrid-diagnostico, hybrid-proxima-acao, hybrid-perfil, hybrid-fundador]
    config:
      - key: hybrid.pasta
        description: "Pasta do negócio no seu computador: é onde os YAML do Hybrid Workspace vivem (perfil, ICP, marca, oferta, diagnósticos). Um negócio por pasta."
        default: "~/hybrid/meu-negocio"
        prompt: "Em que pasta ficam os arquivos deste negócio? (uma pasta por negócio)"
---

# PREÇO E PROMESSA · Offerbook do produto, estratégia de preço e o diagnóstico da oferta

O offerbook é o documento da oferta: o que entra, o que custa, por que vale mais que custa, quais objeções ela já responde. Esta skill preenche o offerbook e a estratégia de preço, e roda o diagnóstico vertical de força da oferta (38 variáveis) para dizer onde ela está fraca antes de o mercado dizer.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (valor já no seu contexto), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Use para criar/atualizar o offerbook, documentar a estratégia de preço ou diagnosticar uma oferta existente. Resolva o modo pelo pedido; se ambíguo, pergunte só pelo modo com exemplo baseado no produto conhecido, ou hipotético se não houver memória.
- Perfil e ICP existentes são contexto reutilizável. Preço, oferta, provas e parceria são decisões humanas, nunca preenchimento automático.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit pricing strategy | `references/elicit-pricing-strategy.md` |
| diagnose offer | `references/diagnose-offer.md` |
| template que esta skill preenche | `templates/company-offerbook.yaml` |
| template que esta skill preenche | `templates/operations-pricing-strategy.yaml` |
| campos que o diagnóstico lê | `references/contexto-diagnose-offer.md` |

## Procedure

1. Identifique negócio, produto e modo. Reuse conversa, memória acessível e arquivos do negócio com origem/data. Pergunte só lacunas; toda pergunta aberta, inclusive dos templates e referências, leva exemplo baseado nesse contexto, rotulado como sugestão. Sem memória, declare e use exemplo hipotético.
2. Para **criar/atualizar offerbook**: leia `templates/company-offerbook.yaml` e o arquivo existente em `{pasta}/company/offerbook.yaml`. Preencha suas seções a partir das evidências disponíveis e das respostas restantes, sem sobrescrever dados confirmados. Campos sem resposta ficam null e listados; preserve a estrutura. Registre fonte por campo e calcule completude sobre os campos de conteúdo exigidos, excluindo metadados e contadores. Não promova FILL_THIS ou exemplos a fatos.
3. Para **pricing**: siga `references/elicit-pricing-strategy.md` com `templates/operations-pricing-strategy.yaml`. Grave `{pasta}/operations/pricing-strategy.yaml`; pule perguntas já resolvidas e personalize os exemplos de cada lacuna. Preços sugeridos ficam hipóteses até a pessoa decidir.
4. Para **diagnosticar**: exija offerbook de produto em `{pasta}/products/{product}/offerbook.yaml`; leia `references/contexto-diagnose-offer.md` e `references/diagnose-offer.md`. O template company tem campos diferentes do esquema products usado pelo diagnóstico. Não renomeie nem mova automaticamente; se só houver o company, registre a incompatibilidade e solicite o arquivo compatível ou uma adaptação de campos com evidência. Com pré-requisito atendido, pontue conforme rubrica, listando fontes, campos e arquivos ausentes. Entregue `{pasta}/diagnosticos/AAAA-MM-DD-<produto>-offer-diagnostic.md`.
5. Verifique o modo executado. Escrita local indisponível: entregue o conteúdo e o destino pretendido sem afirmar que salvou. Avalie rotina: criação é pontual; revisão pode valer quando preço, produto ou evidências mudam. Proponha frequência/fuso/inputs/canal/silêncio/pausa só se útil; ative apenas com autorização e agendador real.

## Pitfalls

- Confundir criar o offerbook com diagnosticar. São modos com pré-requisitos e artefatos diferentes.
- Usar os nomes de campos de company como se fossem o esquema products. Incompatibilidade precisa de adaptação explícita.
- Tratar perguntas da referência como formulário obrigatório completo ou completar preço/prova por suposição.
- Usar comandos do runtime de origem como se estivessem instalados. São nomes de etapas.

## Verification

1. O resultado identifica o modo e o produto e entrega o respectivo artefato, ou nomeia o pré-requisito que o deixou aguardando.
2. Offerbook/pricing preservam o template, parseiam como YAML e listam campos não resolvidos. Completude mostra numerador, denominador e critério; não conta metadados nem placeholders. Abaixo do gate da referência, não declarar pronto.
3. Diagnóstico usa o esquema correto, cita evidências e segue as categorias e pesos da referência, com ausências explícitas. Uma nota baixa é resultado válido.
4. Preço, oferta e prova não foram inventados nem confirmados por ausência de resposta. Toda pergunta aberta teve exemplo contextual ou fallback identificado.
5. A avaliação de rotina tem motivo; nenhum agendamento ou envio foi alegado sem execução autorizada.

## Arquivos desta skill

- `references/contexto-diagnose-offer.md`
- `references/diagnose-offer.md`
- `references/elicit-pricing-strategy.md`
- `templates/company-offerbook.yaml`
- `templates/operations-pricing-strategy.yaml`
