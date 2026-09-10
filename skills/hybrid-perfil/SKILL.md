---
name: hybrid-perfil
description: Documente o perfil do negócio para a tarefa atual, usando memória e acervo antes da entrevista. Entregue um perfil com origem e lacunas; aprofunde dados institucionais quando solicitado.
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
# Perfil do negócio para a tarefa atual

Transforme o que a pessoa já informou em um perfil reutilizável, com identificação, oferta, público, problema e objetivo. Use a entrevista apenas para o que falta e muda a entrega. O perfil institucional ampliado é um aprofundamento opcional.

## When to Use

Use quando a pessoa pedir para documentar ou revisar o negócio e continuar a jornada. Comece com os dados disponíveis; não existe percentual mínimo para iniciar.

## Quick Reference

Identificação conhecida, oferta, público declarado ou hipótese, problema do cliente atendido e objetivo editorial. Diferencie a dor do cliente da vontade do profissional de divulgar seu negócio. Elicite os dados centrais ausentes antes de concluir a entrevista; missão, visão, credenciais, equipe e percentuais institucionais continuam opcionais.

A entrega inicial usa Procedure, sem exigir templates. Nome pessoal conhecido basta para começar; marca formal, cidade e canais só são coletados se mudarem a decisão atual. Se só sabemos a profissão e o desejo de presença digital, salve o rascunho se útil, mas aguarde a resposta sobre oferta, público e problema do cliente antes de avançar. Estrutura de exemplo com campos: “Atuo como [profissão já recuperada da memória] e ofereço [serviço] para [público], para resolver [problema]”. Preencha somente os elementos já conhecidos; preserve os demais campos em aberto.

O perfil institucional ampliado em `references/elicit-company-profile.md` é opcional. Use o destino local autorizado; não exige abrir nem copiar templates. Dados desconhecidos após resposta explícita podem permanecer como lacunas, com hipóteses do agente separadas e os limites do próximo passo declarados.

## Procedure

Nas perguntas e nos exemplos de resposta, use somente o que recuperou da memória ou de respostas confirmadas. Onde faltar dado, mantenha [campo a preencher] ou um exemplo que diga “não sei ainda”. Não invente prazos, preços, quantidades, locais, composição de equipe ou histórico para completar o exemplo, mesmo sob o rótulo “hipotético”. Uma proposta futura de ação é diferente de preencher fatos da pessoa: mantenha essas duas coisas separadas.

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Leia o pedido, a memória atual e o acervo indicado. Se houver perfil anterior, use a revisão atual; consulte versões antigas somente para conflito ou lacuna concreta. Aproveite correções e recusas já resolvidas. Não abra questionários ou templates antes desse mapa.
2. Registre identificação, oferta, público declarado (inclusive hipótese), problema e objetivo com origem. Separe fatos da pessoa, propostas do agente e desconhecido. Esses campos bastam para a síntese desta jornada; missão, visão, credenciais, história e equipe são aprofundamentos opcionais. Não é necessário copiar um template.
3. Escolha a rota pelo mapa de inputs. Se oferta, público pretendido e dor do cliente já estiverem nas fontes, siga diretamente para salvar e concluir a síntese. Se faltarem, entreviste somente essas lacunas, com exemplo próprio ligado ao contexto, e registre waiting até receber resposta ou desconhecimento explícito. Profissão e desejo de presença digital, sozinhos, não esclarecem esses campos. A dor do cliente é diferente da dificuldade do profissional em divulgar o negócio. Use [campo a preencher] para números ou histórico não fornecidos. Se a pessoa não souber, registre desconhecido e avalie o que ainda pode ser entregue; não repita a pergunta nem peça que aceite um exemplo como fato.
4. Salve um perfil legível e reutilizável no destino local autorizado, em Markdown ou YAML, com identificação, oferta, público/hipótese, problema, objetivo, mapa de origem e lacunas. Preserve revisões anteriores. Quando a pessoa já pediu essa documentação, não peça nova autorização para gravar o rascunho.
5. Confira se o perfil permite a próxima etapa de público sem ultrapassar o que a pessoa forneceu. Marque o documento como parcial quando houver campos abertos. Não calcule percentuais para essa síntese. Quando os inputs essenciais estiverem cobertos pelas fontes ou pela entrevista, conclua a operação com completed e mantenha o estado parcial/proposto do documento quando cabível. Uma pergunta genérica para aprovar ou reconfirmar a síntese não substitui uma lacuna de input: não crie esse bloqueio. Waiting exige nomear o dado ausente e explicar qual entrega ele impede. A pessoa pode corrigir o perfil depois, sem que isso impeça concluir a síntese que pediu agora.
6. Informe o arquivo, os limites e a próxima etapa. Não reconfirme tom, oferta ou escopo já dados. Avalie se revisão futura vale como rotina, respeitando recusas e mantendo ativação separada. O perfil institucional completo pode ser aprofundado quando houver um pedido específico.

## Avaliação de rotina

Perfil inicial é pontual. Revisão pode valer após mudança de oferta, público ou operação; não reentrevistar em frequência fixa sem motivo.

## Pitfalls

- Transformar a lista de campos de um esquema ampliado em questionário obrigatório.
- Exigir diagnosis.yaml, níveis de mercado ou um percentual de completude para entregar uma síntese provisória.
- Pedir novamente informação atual, sugerir evidência inventada ou atribuir inferência do agente à pessoa.
- Esperar nova autorização para salvar o rascunho no destino local já autorizado.
- Confundir entrega parcial útil com pesquisa validada ou documento institucional completo.

## Verification

O arquivo de perfil existe no destino autorizado, liga dados à origem e preserva desconhecidos/hipóteses. A entrevista cobre somente lacunas que mudam a entrega; exemplos não criam fatos. Estado da operação e do documento estão separados. Campos institucionais opcionais não impedem a passagem do perfil útil ao público. Confira o aceite transversal de references/contrato-agentflix.md. Confira também se houve elicitação quando só existiam profissão e desejo de presença digital. Rascunho salvo não comprova entrevista concluída; oferta/público/dor ausentes precisam de resposta ou desconhecimento explicitamente confirmado, com limites declarados. Dor do cliente e objetivo editorial do profissional são campos distintos.

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
