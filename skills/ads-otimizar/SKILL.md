---
name: ads-otimizar
description: 'Lê 7 dias da Graph API, calcula o CAC real por campanha e classifica: escalar, duplicar, manter, matar. Só leitura; a mutação é sua. Use quando: otimizar campanhas, o que pausar, leitura diária, CAC…'
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
    - trafego-pago
    - meta-ads
    - otimizacao
    - graph-api
    related_skills:
    - ads-gate-compliance
    - ads-plano
    requires_toolsets:
    - terminal
required_environment_variables:
- name: META_AUTH
  prompt: 'Token de acesso da Marketing API da Meta (permissão ads_read basta: o motor só lê)'
  help: 'Gere em https://developers.facebook.com/tools/explorer/ ou pelo System User do Business Manager. Só leitura: ads_read.'
  required_for: ler campanhas e insights na Graph API
---

# TODO DIA ÀS OITO · Leitura das 8h: o que pausar, escalar, manter

Todo dia às oito, o motor lê sete dias da Graph API, calcula o CAC real por conjunto e classifica: pausar, escalar ou manter. Sem modelo de linguagem no cálculo, só regra. O agente traduz o veredito em decisão de dono e pede o seu OK antes de qualquer mudança.

## When to Use

- Instale, configure o token quando ele pedir e diga: "otimiza hoje".
- NÃO use para: planejar antes de existir campanha (`ads-plano`) nem para alterar a conta: esta skill não escreve, de propósito.

## Quick Reference

Obrigatórios: briefing do produto identificado, pasta privada de estado, ratificação explicitada, acesso de leitura META_AUTH no ambiente e snapshot da execução com janela dos 7 dias fechados. Reaproveite caminhos e configuração existentes; nunca use uma lembrança de CAC como snapshot atual. Opcionais: decisões anteriores e preferências de resumo. Credenciais nunca entram no chat.

Leia `references/configuracao.json` apenas para resolver configuração ausente após o bootstrap. Defaults são exemplos; confirme o destino real antes de escrever.

| arquivo | papel |
|---|---|
| `scripts/meta_api.py` | cliente de LEITURA da Graph API; credencial só por META_AUTH |
| `scripts/otimizar.py` | o motor: coleta, filtra, calcula CAC, classifica; não muta |
| `templates/briefing.yaml` | modelo do briefing do produto |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

Comece pelo bootstrap de briefing, caminhos, ambiente e decisões anteriores. Verifique só a presença da credencial no ambiente; nunca exiba seu valor. Sem terminal/API, declare a leitura ao vivo indisponível e solicite um snapshot com origem e janela verificáveis. Não declare que rodou o motor.

1. Faça bootstrap do briefing, caminhos de estado, período e decisões anteriores. Reuse configuração válida e pergunte só lacunas com exemplo contextual. Confira a ratificação pelo dono; se ratificado for false, identifique os limiares como não ratificados antes de qualquer recomendação.
2. No modo de leitura ao vivo, confira META_AUTH sem exibir o valor, executando `python3 [Skill directory]/scripts/meta_api.py testar`. Se falhar, pare a leitura e explique como configurar a variável no ambiente; nunca peça o token no chat. Sem terminal/API, pode ler um snapshot fornecido, com origem e janela verificáveis; declare esse modo e que não rodou o motor.
3. Com acesso disponível, execute `python3 [Skill directory]/scripts/otimizar.py --briefing <ads.briefing> --estado <ads.estado>`. O motor lê os 7 dias fechados, filtra os casos que não pode julgar e classifica cada campanha. Memórias de CAC ou snapshots antigos não substituem a coleta da execução atual. Sem dados atuais, marque aguardando ou SEM DADO, sem recomendação inventada.
4. Leia o snapshot e traduza seus valores e vereditos em reais, com janela e origem. Não recalcule de cabeça. Ordene pelo dinheiro em jogo. CAC acima do teto indica retorno insuficiente frente ao briefing; não comprova sozinho a causa do problema.
5. Entregue recomendações e peça a decisão da pessoa. Esta skill não altera campanhas, orçamento ou status. O motor grava recomendações em <produto>-recomendacoes.csv. Registre decisões humanas recebidas em um arquivo privado separado, com origem, instante, campanha, decisão e referência ao snapshot; silêncio não é OK. Preserve CSVs legados sem reclassificar suas recomendações automáticas como decisões humanas. A entrega do relatório pode terminar enquanto a decisão humana permanece pendente, em registro separado.
6. Avalie rotina pelo contrato. O título editorial descreve uma cadência possível; horário e frequência são combinados com a pessoa. Nada é agendado ao instalar. Se autorizado depois, configure no agendador real com fuso, fontes, destino, silêncio, pausa e ID verificáveis.

## Avaliação de rotina

Vale sugerir leitura recorrente se há campanhas ativas, dados acessíveis e benefício de acompanhar mudanças. Proponha frequência proporcional ao volume e horário/fuso da pessoa; não há agenda fixa. Não operar contra conta real só para testar a skill.

## Pitfalls

- Usar um CAC lembrado como métrica atual ou recalcular de cabeça.
- Omitir que o briefing não foi ratificado ou que o snapshot veio de outro período.
- Diagnosticar causa apenas por um limiar de CAC.
- Tratar silêncio como decisão, executar mutações ou converter o título da skill em agenda automática.

## Verification

1. O modo está declarado: ao vivo com teste de acesso e snapshot novo, ou análise de snapshot fornecido sem alegar acesso à API.
2. Origem, instante e janela dos 7 dias fechados estão explícitos. Dados desatualizados/incompletos estão marcados e não geram recomendação atual como se fossem novos.
3. Cada veredito e motivo vêm do snapshot, com valores e referência ao briefing. Ratificação ausente aparece como limite, e nenhuma causa foi afirmada só pelo CAC.
4. Relatório e decisão humana têm estados distintos. Nenhuma alteração foi feita na conta e só respostas efetivamente recebidas foram registradas como decisões.
5. A avaliação de rotina tem motivo; toda pergunta aberta teve exemplo contextual ou fallback declarado. Não há agenda presumida.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `scripts/meta_api.py`
- `scripts/otimizar.py`
- `templates/briefing.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
