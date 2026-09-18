---
name: ads-otimizar
description: 'Lê 7 dias da Graph API, calcula o CAC real por campanha e classifica: escalar, duplicar, manter, matar. Só leitura; a mutação é sua. Use quando: otimizar campanhas, o que pausar, leitura diária, CAC…'
license: MIT
compatibility: 'Requer: terminal. Antes de usar, defina no ambiente: META_AUTH. No Hermes roda agendada; em outros agentes, sob demanda. Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.'
metadata:
  author: José Carlos Amorim
  version: 0.4.5
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/ads-otimizar
  tags: trafego-pago, meta-ads, otimizacao, graph-api, blueprint
  related: ads-gate-compliance, ads-plano
  config: 'ads.briefing: Caminho do briefing.yaml do produto (modelo em templates/briefing.yaml, preenchido pelo ads-plano); ads.estado: Pasta onde o motor grava o snapshot diário e o CSV de decisões'
---

# TODO DIA ÀS OITO · Leitura das 8h: o que pausar, escalar, manter

Todo dia às oito, o motor lê sete dias da Graph API, calcula o CAC real por conjunto e classifica: pausar, escalar ou manter. Sem modelo de linguagem no cálculo, só regra. O agente traduz o veredito em decisão de dono e pede o seu OK antes de qualquer mudança.

## When to Use

- Instale, configure o token quando ele pedir e diga: "otimiza hoje".
- NÃO use para: planejar antes de existir campanha (`ads-plano`) nem para alterar a conta: esta skill não escreve, de propósito.

## Quick Reference

| arquivo | papel |
|---|---|
| `scripts/meta_api.py` | cliente de LEITURA da Graph API; credencial só por META_AUTH |
| `scripts/otimizar.py` | o motor: coleta, filtra, calcula CAC, classifica; não muta |
| `templates/briefing.yaml` | modelo do briefing do produto |

## Procedure

1. Confirme que `META_AUTH` está configurada: rode `python3 scripts/meta_api.py testar`. Se falhar, pare e diga ao usuário para configurar a variável no ambiente onde o script roda. Nunca peça o token no chat.
2. Confirme que o briefing existe no caminho `ads.briefing` (pergunte ao usuário, se ainda não souber). Se `ratificado: false`, avise antes de qualquer recomendação: os números não foram conferidos pelo dono.
3. Rode `python3 scripts/otimizar.py --briefing <ads.briefing> --estado <ads.estado>`. O motor coleta 7 dias fechados, descarta o que não pode ser julgado (learning phase, poucas impressões, gasto abaixo de 1× CAC-alvo sem venda) e classifica cada campanha: ESCALAR · DUPLICAR · MANTER · MATAR · SEM DADO.
4. Não recalcule nada de cabeça. Leia o snapshot e traduza cada veredito em reais e em decisão: "cada real está voltando R$X; para empatar precisa R$Y".
5. Junte numa recomendação curta, ordenada por dinheiro em jogo. Se um veredito é MATAR por CAC acima do teto, diga que o problema é a **oferta**, não o anúncio.
6. Peça o OK do usuário. **Esta skill não altera a conta**: pausar, escalar ou mudar orçamento é ação dele, no Gerenciador de Anúncios, depois de decidir. Registre a decisão dele no CSV de decisões (o motor já criou o arquivo) para calibrar os thresholds.

## Pitfalls

- Recalcular CAC "de cabeça" para adiantar. Número inventado vira decisão de dinheiro errada; leia o snapshot.
- Recomendar trocar criativo quando o CAC está acima do teto. Aí o problema é a oferta.
- Rodar antes de `ratificado: true` sem avisar. Threshold não conferido produz veredito confiante e errado.
- Tentar mutar a conta por script. Não há script de escrita nesta skill, de propósito.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. `meta_api.py testar` respondeu antes de qualquer leitura.
2. Existe um snapshot novo em `ads.estado` com a data de hoje, e a resposta cita a janela de 7 dias fechados que ele usou.
3. Toda campanha ativa aparece com veredito e motivo vindos do snapshot, não recalculados.
4. A recomendação está em reais, ordenada por gasto em jogo, e termina pedindo OK.
5. Nenhuma alteração foi feita na conta; se o usuário decidiu, a decisão está registrada no CSV.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill

- `scripts/meta_api.py`
- `scripts/otimizar.py`
- `templates/briefing.yaml`
