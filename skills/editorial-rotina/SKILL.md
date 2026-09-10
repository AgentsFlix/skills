---
name: editorial-rotina
description: Prepare pasta, lote de teste e especificação de rotina editorial com ativação separada. Use depois dos pilares e templates para organizar uma operação revisável sem publicar automaticamente.
version: 0.4.3
author: José Carlos Amorim
license: MIT
metadata:
  hermes:
    tags:
    - editorial
    - marca
    - memoria
    - okf
---

# Operação editorial pronta para testar

## When to Use

Prepare pasta, lote de teste e especificação de rotina editorial com ativação separada. Use depois dos pilares e templates para organizar uma operação revisável sem publicar automaticamente.

## Quick Reference

Obrigatórios: objetivo, capacidade/frequência real, fontes de matéria-prima, canais, responsáveis e destino. Memória e etapas anteriores podem já contê-los. Entrega: pasta operacional, manifest de peças, relatório de teste e proposta de ativação desabilitada.

## Procedure

Nas perguntas e nos exemplos de resposta, use somente o que recuperou da memória ou de respostas confirmadas. Onde faltar dado, mantenha [campo a preencher] ou um exemplo que diga “não sei ainda”. Não invente prazos, preços, quantidades, locais, composição de equipe ou histórico para completar o exemplo, mesmo sob o rótulo “hipotético”. Uma proposta futura de ação é diferente de preencher fatos da pessoa: mantenha essas duas coisas separadas.

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

Leia `references/contrato-agentflix.md` antes de perguntar ou configurar. Ele exige bootstrap, exemplo contextual próprio em cada pergunta aberta, avaliação de rotina e registro observável. Leia `references/continuidade.md` para continuar a jornada sem reiniciar as decisões anteriores. `references/ativacao.md` é a entrada conversacional; ativação curta mantém essas obrigações.

1. Reuse os dados conhecidos sobre gatilho, fontes e destino. Não obrigue a pessoa a repetir em voz alta uma frase já respondida pela memória. Elicite só a lacuna que muda a operação, com exemplo contextual adjacente.
2. Estruture contexto/, acervo/, pautas/, templates/, lotes/, revisoes/ e operacao/ ou equivalentes na pasta autorizada. Preserve artefatos prévios e suas origens; não copie bases pessoais inteiras. Defina papéis de rascunho, revisão, aprovado, preparado e publicado.
3. Especifique em operacao/rotina.json: gatilho/fuso, entradas, saída, responsável, limites de lote, critérios de revisão, silêncio sem dados novos, deduplicação, pausa e falhas. enabled deve permanecer false durante preparação. Publicação e agendamento exigem autorização própria, vinculada aos destinos e peças; aprovação do template não os autoriza.
4. Monte um lote mínimo com estática e carrossel usando acervo, pautas e templates reais das etapas anteriores. Não invente prontidão se faltar arquivo, aprovação ou ferramenta; registre as pendências. Use scripts/validar_lote.py para validar o manifesto e arquivos locais quando houver Python. O helper não publica nem testa API.
5. Execute a produção local de teste com as ferramentas disponíveis, abra os arquivos produzidos e documente o que realmente foi testado, duração/erros observados e ajustes necessários. Um plano de teste não equivale a lote testado; ausência de ferramenta mantém a etapa dependente pendente.
6. Separe operacao/ativacao-proposta.md do restante: agendador/integração disponíveis, configuração sugerida, canais, limites, política de publicação, autorizações e modo de desligar. Não chamar scripts privados de outras marcas ou acessar credenciais delas. Verifique duplicatas antes de qualquer futura ativação.
7. Conclua preparação somente com operação coerente e evidência de teste ou delimite exatamente o que está pronto. Ativação continua desabilitada até pedido explícito e verificação real do agendador; sem integração, não prometer lembretes. Recusa do usuário encerra a oferta de automação.

## Avaliação de rotina

A operação pode valer rotina se entradas novas, capacidade e benefício forem recorrentes. Apresente frequência/fuso/destinos/silêncio/pausa como proposta e respeite recusa. Se depender da aprovação humana de peças, a rotina pode preparar revisão, nunca simular essa aprovação.

## Pitfalls

- Confundir memória, hipótese e evidência; repetir perguntas respondidas ou registrar exemplos como respostas.
- Declarar resultado que depende de ferramenta ou aprovação sem tê-la observado.
- Levar paleta, voz, caminhos pessoais ou contas dos autores das skills de apoio para a marca do usuário.
- Renovar o OKF por uso ou confundir aprovação sintética com decisão da pessoa.

## Verification

Pasta recuperável, peças ligadas às pautas/templates, manifesto validado e teste observado com limites registrados. Configuração de preparação desabilitada; nenhum agendamento/publicação presumidos. Silêncio do usuário não aprova peça nem comprova execução.

Em toda saída, cada pergunta aberta tem exemplo adjacente baseado na memória recuperada ou explicitamente hipotético sem memória. Avalie rotina com motivo e registre resultado observável conforme `references/ciclo-de-vida.md`; sem persistência, declare a limitação. Preserve revisões registradas e salve correção como nova revisão. Não alegue conclusão integral quando houver requisito obrigatório pendente.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/continuidade.md`
- `references/contrato-agentflix.md`
- `references/formato.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `scripts/validar_lote.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
