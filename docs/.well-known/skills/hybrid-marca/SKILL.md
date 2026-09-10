---
name: hybrid-marca
description: Proponha posicionamento e promessas com base no perfil e público disponíveis. Trabalhe voz no mesmo contexto quando solicitada, distinguindo preferências, padrões do acervo e propostas.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/hybrid-marca
  tags: hybrid-workspace, negocio, elicitacao, yaml
  related: hybrid-diagnostico, hybrid-proxima-acao, hybrid-perfil, hybrid-fundador
  contract_version: 1.0.0
  content_revision: 1.0.4
  distribution_ref: main
---
# Posicionamento e voz da marca

Entregue a operação pedida usando o perfil, público e objetivo já disponíveis. Propor posicionamento, aprovar a proposta e extrair voz são operações distintas. Preserve o mesmo contexto entre elas; um brandbook completo é aprofundamento opcional.

## When to Use

Use para propor ou revisar posicionamento, promessas e diferenciais, ou para definir a voz da marca. Siga o pedido atual: uma proposta de posicionamento não exige antecipar o guia de voz nem preencher um brandbook integral.

## Quick Reference

Obrigatórios: perfil, público e objetivo de comunicação ou equivalentes. Acervo de voz e provas existentes são opcionais para entrevista; necessários para alegar extração ou promessa comprovada.

Para a entrega inicial, siga Procedure sem abrir questionário ou template institucional. Uma proposta útil contém enunciado de posicionamento, promessas com limites, diferenciais com origem e lacunas relevantes. Para voz, entregue princípios e aplicações rastreáveis. Consulte `references/elicit-brand-yaml.md` e os templates apenas para aprofundamento explicitamente solicitado. Use o destino local já autorizado.

## Procedure

Nas perguntas e nos exemplos de resposta, use somente o que recuperou da memória ou de respostas confirmadas. Onde faltar dado, mantenha [campo a preencher] ou um exemplo que diga “não sei ainda”. Não invente prazos, preços, quantidades, locais, composição de equipe ou histórico para completar o exemplo, mesmo sob o rótulo “hipotético”. Uma proposta futura de ação é diferente de preencher fatos da pessoa: mantenha essas duas coisas separadas.

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Identifique a operação pedida: propor ou revisar posicionamento, trabalhar voz ou aprofundar o brandbook. Reaproveite perfil, público, objetivo e decisões atuais da memória e dos artefatos anteriores. Consulte somente as lacunas necessárias; não reentreviste nem abra todos os templates.
2. Para posicionamento, entregue um enunciado para o público declarado, a oferta e o problema; proponha promessas com limites e diferenciais ligados ao modo de trabalhar ou a evidências existentes. Separe fato, hipótese e proposta. Sem prova de resultado, não faça essa promessa; sua ausência não impede uma proposta honesta. Tagline, valores, crenças e inimigos são opcionais, somente se fizerem parte do pedido.
3. Para voz, continue o posicionamento atual com seu estado proposto ou aprovado preservado. Extraia padrões apenas de acervo próprio suficiente, com trechos e origem; caso contrário, use preferências já declaradas e entreviste só lacunas necessárias. Entregue princípios, vocabulário e exemplos de aplicação. Não invente DNA nem exija concluir um brandbook para começar.
4. Toda pergunta aberta traz seu próprio exemplo contextual, identificado como sugestão. Pergunte somente se a resposta muda a entrega atual. Desconhecimento já declarado permanece lacuna; não crie uma sequência obrigatória de aprovação ou perguntas opcionais.
5. Salve no destino autorizado um artefato focado na operação atual. Referencie perfil e ICP anteriores em vez de copiá-los; acrescente apenas a síntese necessária para compreender a proposta, suas origens e limites. Mantenha detalhes de auditoria em seus registros. Reserve o encerramento para resultado, caminho, estado e próximo passo; não repita o documento inteiro.
6. Confira o aceite do pedido. Se foi produzir uma proposta e o artefato foi salvo com origem, limites e lacunas, a operação pode ser completed enquanto o conteúdo permanece proposto, não aprovado. Use waiting somente se faltar uma dependência indispensável para produzir o que foi pedido; diga qual. Aprovação explícita continua necessária quando a operação pedida for aprovar ou aplicar conteúdo que exige aceite. Não simule essa aprovação.
7. Registre somente uso observado, usando o esquema real da ferramenta disponível. Não recrie o evento started se o hospedeiro já o forneceu. Use os metadados do hospedeiro para criação e auditoria; o início da sessão não é a data de criação do arquivo. Avalie rotina respeitando recusas anteriores. Passe a proposta, suas origens e pendências à próxima etapa, sem publicar nem ativar automação.

## Avaliação de rotina

Definição é pontual. Revisar após mudança de posicionamento ou acervo significativo; não criar notificação recorrente para reafirmar a voz.

## Pitfalls

- Bloquear a entrega de uma proposta por falta de aprovação, tagline, crença central ou prova de resultados que a pessoa não tem.
- Tratar proposta entregue como conteúdo aprovado ou como fato comprovado.
- Antecipar voz, valores, inimigos ou o brandbook inteiro quando o pedido é só posicionamento.
- Copiar o perfil, ICP e contrato completos em cada entrega; referencie seus arquivos e acrescente o que esta etapa produz.
- Reabrir uma recusa de rotina, agendamento ou lembretes.
- Usar o horário de início da sessão como se fosse o horário de criação do documento.

## Verification

A operação pedida tem artefato verificável: posicionamento, promessas e diferenciais fundamentados ou explicitamente propostos; ou guia de voz com preferências/extração rastreáveis. Mesma marca e contexto entre posicionamento e voz, com arquivos anteriores preservados. Produção da proposta, aprovação e publicação têm estados distintos. Campos de um brandbook ampliado não bloqueiam a proposta. Confira o aceite transversal de references/contrato-agentflix.md.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/elicit-brand-yaml.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `templates/brand-brandbook.yaml`
- `templates/brand-messaging-framework.yaml`
- `templates/brand-positioning-statement.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
