---
name: hybrid-oferta
description: "O offerbook é o documento da oferta: o que entra, o que custa, por que vale mais que custa, quais objeções ela já responde. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: \"monta o…"
version: 0.4.5
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

- Diga: "monta o offerbook de [produto]" ou "diagnostica a oferta de [produto]".
- O negócio já tem os YAMLs do perfil preenchidos e você quer medir, não preencher.
- NÃO use para preencher os arquivos: para isso são as skills `hybrid-perfil`, `hybrid-icp`, `hybrid-oferta`…

## Quick Reference

| procedimento | referência |
|---|---|
| elicit pricing strategy | `references/elicit-pricing-strategy.md` |
| diagnose offer | `references/diagnose-offer.md` |
| template que esta skill preenche | `templates/company-offerbook.yaml` |
| template que esta skill preenche | `templates/operations-pricing-strategy.yaml` |
| campos que o diagnóstico lê | `references/contexto-diagnose-offer.md` |

## Procedure

1. Resolva a pasta: `hybrid.pasta`. Se não existir, crie. Confirme que os YAMLs que o diagnóstico lê existem (tabela de contexto); arquivo ausente conta como vazio e zera a variável, e isso deve aparecer no relatório.
2. Abra a referência do procedimento e siga as fases na ordem. Onde ela escrever `{pasta}/…`, leia a pasta configurada. Onde ela citar um comando `*algo` ou um script `.cjs`/`.sh`, trate como nome da etapa, não como algo a executar.
3. Leia cada arquivo da tabela de contexto e extraia os campos; pontue as categorias exatamente com os pesos da referência; não invente nota para campo ausente.
4. Escreva o relatório em `{pasta}/diagnosticos/AAAA-MM-DD-<nome>.md` no formato de saída da referência: resumo executivo, tabela por dimensão, gaps, e as alavancas em ordem.
5. Termine com a alavanca número 1 em uma frase e o comando que a destrava.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pontuar sem a tabela de pesos. A nota só vale se seguir a referência.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O relatório existe em `{pasta}/diagnosticos/` com a data de hoje.
2. Toda dimensão da referência aparece com nota e peso, e a soma segue os pesos declarados.
3. Todo arquivo ausente da tabela de contexto está listado como ausente no relatório.
4. Há uma lista de alavancas em ordem e a primeira vem com o comando que a destrava.
5. Nenhum dado foi enviado para fora da pasta do negócio.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/contexto-diagnose-offer.md`
- `references/diagnose-offer.md`
- `references/elicit-pricing-strategy.md`
- `templates/company-offerbook.yaml`
- `templates/operations-pricing-strategy.yaml`
