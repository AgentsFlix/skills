---
name: ads-tracking
description: "Se o pixel não conta, a otimização otimiza o nada. Só leitura e julgamento: não toca na conta de anúncios. Use quando: \"audita o tracking de [URL]\" e informe a plataforma e os eventos esperados."
version: 0.4.4
author: "José Carlos Amorim"
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [trafego-pago, meta-ads, tracking]
    related_skills: [ads-gate-compliance, ads-plano, ads-otimizar]
    requires_toolsets: [web]
---

# O PIXEL · Pixel, eventos, parâmetros, CAPI e deduplicação

Se o pixel não conta, a otimização otimiza o nada. Esta skill audita o rastreamento de um site: pixel instalado, eventos padrão, parâmetros, status da CAPI e deduplicação, e devolve a lista de problemas com a correção de cada um. Antes de escalar, saber se o número é real.

Esta skill **não escreve na plataforma de anúncios**. Ela lê o que você traz (perfil, métricas, URL) e devolve julgamento. Mutação de campanha é decisão sua, no gerenciador.

## When to Use

- Diga: "audita o tracking de [URL]" e informe a plataforma e os eventos esperados.
- NÃO use para otimizar campanha (`ads-otimizar`): primeiro o número precisa ser real.

## Quick Reference

| procedimento | referência |
|---|---|
| audit tracking | `references/audit-tracking.md` |

| apoio |
|---|
| `templates/campaign-audit.md` |
| `references/checklist-ban-prevention.md` |

## Procedure

1. Abra a referência do procedimento e leia `Entrada` (ou `Inputs`). Colete do usuário o que for exigido; pergunte o que faltar. 
2. Siga as fases da referência. Onde ela citar MCP, plataforma ou script do runtime de origem, **não execute**: peça ao usuário o dado correspondente ou use a tool `web` para inspecionar a URL informada.
3. Verifique pixel, eventos padrão, parâmetros, CAPI e deduplicação, item a item do `Checklist` da referência, com o que a página e o usuário fornecem.
4. Escreva a entrega no template de saída listado acima, em português.
5. Termine com a próxima decisão que é do usuário, em uma frase.

## Pitfalls

- Inventar métrica ou status que não veio do usuário ou da página. Sem dado, o item fica "não verificado".
- Recomendar mudança na conta como se fosse executar. Esta skill entrega recomendação; a execução é humana.
- Declarar tracking OK sem testar evento. Instalado não é funcionando.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. A entrega segue o template de saída, seção por seção.
2. Toda afirmação sobre métrica, evento ou status cita de onde veio (dado do usuário, página inspecionada) ou está marcada "não verificado".
3. Cada item do checklist da referência tem PASS, FAIL ou NÃO VERIFICADO.
4. Nenhuma ação foi executada na plataforma.
5. A última linha é a decisão que cabe ao usuário.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `references/audit-tracking.md`
- `references/checklist-ban-prevention.md`
- `templates/campaign-audit.md`
