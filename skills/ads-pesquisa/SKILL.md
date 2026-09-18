---
name: ads-pesquisa
description: "Campanha sem pesquisa é orçamento em teste cego. Só leitura e julgamento: não toca na conta de anúncios. Use quando: \"pesquisa para a campanha de [produto]\"."
version: 0.4.4
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [trafego-pago, meta-ads, pesquisa]
    related_skills: [ads-gate-compliance, ads-plano, ads-otimizar]
    requires_toolsets: [web]
---

# CINCO FASES · Do perfil do negócio ao brief de campanha, sem improviso

Campanha sem pesquisa é orçamento em teste cego. Esta skill roda o protocolo de cinco fases: negócio, produto, público, concorrência e ângulos, com modelos por setor (infoproduto, SaaS, serviço local, saúde, imobiliário e outros) e o conhecimento de leilão da Meta. Sai um brief de campanha que o gate e o plano conseguem ler.

Esta skill **não escreve na plataforma de anúncios**. Ela lê o que você traz (perfil, métricas, URL) e devolve julgamento. Mutação de campanha é decisão sua, no gerenciador.

## When to Use

- Diga: "pesquisa para a campanha de [produto]".
- NÃO use para conferir compliance (`ads-gate-compliance`) nem para calcular orçamento (`ads-plano`).

## Quick Reference

| procedimento | referência |
|---|---|
| run research protocol | `references/run-research-protocol.md` |

| apoio |
|---|
| `templates/business-profile.yaml` |
| `templates/product-card.yaml` |
| `templates/icp-profile.yaml` |
| `templates/strategy.md` |
| `templates/research-brief.md` |
| `references/data-industry-templates-agency.yaml` |
| `references/data-industry-templates-b2b-enterprise.yaml` |
| `references/data-industry-templates-ecommerce.yaml` |
| `references/data-industry-templates-finance.yaml` |
| `references/data-industry-templates-generic.yaml` |
| `references/data-industry-templates-healthcare.yaml` |
| `references/data-industry-templates-info-products.yaml` |
| `references/data-industry-templates-local-service.yaml` |
| `references/data-industry-templates-mobile-app.yaml` |
| `references/data-industry-templates-real-estate.yaml` |
| `references/data-industry-templates-saas.yaml` |
| `references/data-knowledge-meta-ad_auctions.md` |
| `references/data-knowledge-meta-ad_relevance_diagnostics.md` |
| `references/data-knowledge-meta-auction_overlap.md` |
| `references/data-knowledge-meta-bid_strategies.md` |
| `references/data-knowledge-meta-breakdown_effect.md` |
| `references/data-knowledge-meta-core_concepts.md` |
| `references/data-knowledge-meta-learning_phase.md` |
| `references/data-knowledge-meta-pacing.md` |
| `references/data-knowledge-meta-performance_fluctuations.md` |

## Procedure

1. Abra a referência do procedimento e leia `Entrada` (ou `Inputs`). Colete do usuário o que for exigido; pergunte o que faltar. Se houver perfil do negócio no Hybrid Workspace, use-o em vez de perguntar de novo.
2. Siga as fases da referência. Onde ela citar MCP, plataforma ou script do runtime de origem, **não execute**: peça ao usuário o dado correspondente ou use a tool `web` para inspecionar a URL informada.
3. Escolha, entre os modelos por setor listados no fim (arquivos data-industry-templates-), o mais próximo do negócio e use-o como esqueleto das cinco fases.
4. Escreva a entrega no template de saída listado acima, em português.
5. Termine com a próxima decisão que é do usuário, em uma frase.

## Pitfalls

- Inventar métrica ou status que não veio do usuário ou da página. Sem dado, o item fica "não verificado".
- Recomendar mudança na conta como se fosse executar. Esta skill entrega recomendação; a execução é humana.
- Pular fase do protocolo para ir direto ao ângulo. As fases existem para o ângulo ter lastro.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. A entrega segue o template de saída, seção por seção.
2. Toda afirmação sobre métrica, evento ou status cita de onde veio (dado do usuário, página inspecionada) ou está marcada "não verificado".
3. As cinco fases aparecem, cada uma com conclusão de uma linha.
4. Nenhuma ação foi executada na plataforma.
5. A última linha é a decisão que cabe ao usuário.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/data-industry-templates-agency.yaml`
- `references/data-industry-templates-b2b-enterprise.yaml`
- `references/data-industry-templates-ecommerce.yaml`
- `references/data-industry-templates-finance.yaml`
- `references/data-industry-templates-generic.yaml`
- `references/data-industry-templates-healthcare.yaml`
- `references/data-industry-templates-info-products.yaml`
- `references/data-industry-templates-local-service.yaml`
- `references/data-industry-templates-mobile-app.yaml`
- `references/data-industry-templates-real-estate.yaml`
- `references/data-industry-templates-saas.yaml`
- `references/data-knowledge-meta-ad_auctions.md`
- `references/data-knowledge-meta-ad_relevance_diagnostics.md`
- `references/data-knowledge-meta-auction_overlap.md`
- `references/data-knowledge-meta-bid_strategies.md`
- `references/data-knowledge-meta-breakdown_effect.md`
- `references/data-knowledge-meta-core_concepts.md`
- `references/data-knowledge-meta-learning_phase.md`
- `references/data-knowledge-meta-pacing.md`
- `references/data-knowledge-meta-performance_fluctuations.md`
- `references/run-research-protocol.md`
- `templates/business-profile.yaml`
- `templates/icp-profile.yaml`
- `templates/product-card.yaml`
- `templates/research-brief.md`
- `templates/strategy.md`
