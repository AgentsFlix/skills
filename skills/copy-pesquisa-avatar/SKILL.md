---
name: copy-pesquisa-avatar
description: Antes de escrever, saber o que a pessoa já diz para si mesma. Use quando o pedido envolver avatar, público, conversa mental, motivos, nível de consciência, sofisticação do mercado.
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
    - copy
    - copywriting
    - pesquisa
    - avatar
    related_skills:
    - copy-pipeline
    - copy-auditoria
---

# DENTRO DA CABEÇA · Conversa mental, motivos, sofisticação

Antes de escrever, saber o que a pessoa já diz para si mesma. O agente pesquisa o avatar, mapeia a conversa mental, os seis motivos primários e o nível de sofisticação do mercado, e devolve o retrato que a copy vai usar. Sem esse passo, toda headline é chute.

## When to Use

- O pedido envolve: avatar, público, conversa mental, motivos, nível de consciência, sofisticação do mercado.
- Diga: "pesquisa o avatar de [produto] em [mercado]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Obrigatórios: negócio/oferta, público/hipótese e decisão a esclarecer. Fontes disponíveis ou ferramenta de pesquisa real definem o alcance; falta de rede não autoriza fontes inventadas.

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| avatar research | `references/avatar-research.md` |
| analyze mental conversation | `references/analyze-mental-conversation.md` |
| map 6 primary motives | `references/map-6-primary-motives.md` |
| diagnose market sophistication | `references/diagnose-market-sophistication.md` |
| copysearch | `references/copysearch.md` |
| diagnose awareness level | `references/diagnose-awareness-level.md` |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Consulte o perfil/ICP e acervo antes de coletar novamente required/optional. Identifique as lacunas que realmente mudam a comunicação. Não transforme descrição da fundadora em entrevista de clientes.
4. Pesquise nos materiais acessíveis e, quando disponível, ferramenta externa adequada. Registre origem, data conhecida e trecho que sustenta cada achado. Sem acesso, deixe a pesquisa externa pendente e entregue síntese do acervo/hipóteses e um plano específico de coleta.
5. Escreva a síntese do público no formato pertinente da referência, diferenciando citação, fato observado, inferência e hipótese. Não invente números, depoimentos, emoções ou nomes. Perguntas necessárias têm exemplos contextuais próprios. Entregue ao ICP/posicionamento os achados e limites sem apagar sua procedência.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Pesquisa recorrente pode valer com fontes novas e decisão a alimentar. Não gerar relatórios repetidos sem novidade nem monitorar canais sem acesso autorizado.

## Pitfalls

- Pular o bloco `Inputs` e escrever com o que veio. Falta de avatar ou de benefício principal produz copy genérica; pergunte.
- Misturar duas sub-tarefas numa entrega só. Uma de cada vez, cada uma com seu checklist.
- Preencher `[COLCHETES]` com chute para a peça "ficar pronta". Colchete aberto é honesto; número inventado é dívida.
- Ignorar o `Output Format`. Ele existe para a peça encaixar no passo seguinte (página, e-mail, anúncio).

## Verification

Cada achado tem fonte inspecionada ou rótulo de hipótese; pesquisa indisponível não é alegada como realizada. Não pontuar resultado por quantidade de hipóteses inventadas. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill

- `references/analyze-mental-conversation.md`
- `references/ativacao.md`
- `references/avatar-research.md`
- `references/checklist-avatar-research-checklist.md`
- `references/checklist-copysearch-checklist.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/copysearch.md`
- `references/diagnose-awareness-level.md`
- `references/diagnose-market-sophistication.md`
- `references/identidade.json`
- `references/map-6-primary-motives.md`
- `scripts/auditar.py`
- `templates/avatar-research-template.md`
- `templates/copysearch-template.md`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
