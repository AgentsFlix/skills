---
name: pedagio-da-realidade
description: Converte uma ideia ou plano em uma ação verificável, registra o que aconteceu e usa essa evidência para escolher o próximo passo. Use ao planejar sem avançar ou ao retomar uma tentativa.
license: MIT
compatibility: Funciona por conversa. Arquivos, ferramentas, memória persistente e agendador são opcionais; use apenas os recursos e permissões disponíveis.
metadata:
  author: AgentFlix
  version: 1.0.1
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/pedagio-da-realidade-v1.0.1/skills/pedagio-da-realidade
  tags: execucao, ia, aprendizado, decisao
  contract_version: 1.0.0
  content_revision: 1.0.1
  distribution_ref: pedagio-da-realidade-v1.0.1
---

# Pedágio da Realidade

Ajude a pessoa a transformar o que já está pensando ou construindo em uma ação que
produza evidência. O ciclo é **situação → incerteza → ação → evidência → próximo passo**.
A entrega da conversa é uma passagem executável, com um critério de conclusão.
Quando a ação puder ser realizada agora com ferramentas disponíveis e autorização,
execute e confira o resultado. Quando depender da pessoa, entregue o próximo movimento
completo e aguarde o relato; não invente o que aconteceu.

## When to Use

Use ao sair do planejamento, testar uma ideia, colocar um rascunho em uso, conferir uma
entrega ou retomar uma tentativa. Exemplos: “Tenho vários planos com IA e não comecei”,
“Como testo isso?” e “Fiz o combinado; o que muda agora?”. Quem já entrega pode precisar
de avaliação ou retorno. Reaproveite essa posição. Um pedido só de explicação pode
terminar em explicação; não force a pessoa a iniciar um teste.

## Quick Reference

Obrigatórios: objetivo, objeto ou tentativa existente, incerteza relevante e condições para a próxima ação. Para revisão, ação anterior, resultado e origem do registro. Opcionais: preferências e uso útil de IA. Recuperar conversa e memória relevante antes de perguntar; toda pergunta aberta tem exemplo contextualizado ou hipotético.

| Input | Necessidade | Onde procurar primeiro |
|---|---|---|
| Projeto, problema ou entrega desejada | Obrigatório para escolher a ação | Pedido, conversa e memória relevante acessível |
| O que existe e o que foi tentado | Obrigatório para situar o próximo passo | Artefato disponível, contexto e registros |
| Incerteza que vale testar | Obrigatório para fechar a proposta | Objetivo e evidência disponível |
| Janela, esforço, acesso e restrições | Obrigatórios para declarar a ação pronta | Contexto atual; perguntar só lacunas essenciais |
| Uso útil da IA e preferências | Opcionais; investigar se mudarem a proposta | Conversa e experiência relatada |
| Ação anterior, resultado e origem do registro | Obrigatórios para afirmar execução ou aprendizado | Evidência acessível ou relato identificado |
| Preferência e recursos de acompanhamento | Obrigatórios só antes de ativar rotina | Pedido e capacidades do hospedeiro |

Entrega: cartão de ação, execução verificada quando possível, ou revisão baseada no
retorno disponível. Não exige pesquisar YouTube, usar JEV, instalar outras skills,
ter terminal ou comprar ferramenta. A ativação está em references/ativacao.md, gerada
junto com o contrato de memória e ciclo de vida na distribuição do pacote.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. **Recupere o ponto atual.** Leia o contexto relevante antes de entrevistar. Aplique
   [memória e rotina](references/memoria-e-rotina.md): mantenha valor, origem, data,
   estado e lacuna dos inputs. A fala atual prevalece sobre memória antiga. Consulte
   [conhecimento e limites](references/conhecimento.okf.md) para não transformar
   o método em diagnóstico ou promessa científica. Mostre uma síntese curta do contexto.
2. **Encontre a incerteza.** Use [o método](references/metodo.md) para reconhecer o que
   existe, a última evidência disponível e o que falta saber. Pergunte só pelo que muda
   a próxima ação, em uma rodada curta. Toda pergunta aberta, inclusive na revisão,
   vem com exemplo de resposta baseado no contexto ou explicitamente hipotético.
3. **Monte uma passagem.** Preencha [o cartão](templates/cartao-de-acao.md): uma ação
   suficiente para reduzir a incerteza, objeto, pessoa/ambiente, janela, esforço, critério
   de conclusão, papel da IA, retorno e alternativa sem resposta. Respeite privacidade e
   consentimento. Se faltar condição essencial, marque proposta com pendências. Ajuste
   uma proposta recusada ao obstáculo informado, sem pressionar por um “sim”.
4. **Execute até onde houver autorização e capacidade.** Inspecione, teste, rode ou
   confira o objeto quando disponível no ambiente e dentro do pedido. Preparar uma
   mensagem não prova envio; enviar requer autorização para o contato. Se depender da
   pessoa, diga o que ela precisa fazer e que registro trazer. Não exija evidência pública
   nem dados sensíveis; um relato pode bastar, identificado como tal.
5. **Volte com o que aconteceu.** Use [o registro](templates/registro-de-retorno.md) para
   comparar expectativa e resultado. Distinga execução, contato, retorno e aprendizado.
   Sem registro, mantenha desconhecido. Escolha com a pessoa o próximo passo sustentado:
   continuar, ajustar, reduzir, interromper ou obter o dado que ainda falta.
6. **Avalie acompanhamento.** Conclua “vale sugerir”, “não vale” ou “depende de informação”,
   com motivo, conforme [memória e rotina](references/memoria-e-rotina.md). Uma ação pontual
   normalmente não justifica CRON. Só ative rotina autorizada, usando o agendador real e
   conferindo duplicatas. Instalar ou usar a skill não ativa acompanhamento.
7. **Feche no estado real.** Entregue síntese, cartão ou resultado, próxima ação e pendências.
   Registre uso conforme references/ciclo-de-vida.md quando houver armazenamento privado.
   completed descreve a entrega do agente; não prova que a pessoa executou. Sem persistência,
   entregue resumo reutilizável e declare ausência de acompanhamento entre sessões. Uma
   pergunta essencial sem resposta mantém waiting, com o que já foi preparado preservado.

## Avaliação de rotina

Ação pontual: não vale agendar. Revisão recorrente: avaliar benefício, novidade, acesso, custo, resposta humana e ruído. Concluir vale sugerir, não vale ou depende de informação, com motivo. Só ativar após autorização específica, verificação de duplicata e agendador disponível; ausência de resposta não significa execução.

## Pitfalls

- Tratar planejamento, aprendizado ou uso frequente de IA como falha pessoal ou diagnóstico.
- Abrir outra estratégia completa quando já existe um objeto que pode ser testado.
- Repetir perguntas respondidas, inventar memória ou salvar exemplos como respostas.
- Banir IA que ajuda a entregar ou impor um número obrigatório de prompts antes de agir.
- Exigir exposição pública, venda ou contato como única forma de encontrar evidência.
- Confundir página pronta, cartão, envio, retorno e receita.
- Interpretar silêncio como aprovação, avaliação de qualidade ou ação concluída.
- Cobrar prova invasiva, enviar informação interna ou publicar sem autorização.
- Prometer lembrete sem agendador ativo ou reiniciar cobranças após recusa.
- Registrar resposta de ator sintético como comportamento de pessoa real.

## Verification

A entrega passa quando atende ao aceite da operação pedida:

- **Propor:** ação ligada à incerteza, objeto, contexto, conclusão observável, condições,
  registro e retomada. Desconhecidos identificados. Se pronta, a pessoa consegue iniciar
  sem precisar interpretar um objetivo abstrato como “seja mais produtivo”.
- **Executar:** a ação autorizada foi realizada e seu resultado foi conferido. Falha e
  bloqueio são informados sem declarar sucesso. Uma intenção não atende esse aceite.
- **Revisar/retomar:** expectativa, fato/relato, limite da conclusão e próximo passo estão
  ligados. Ausência de ação ou retorno permanece explícita e permite reduzir a proposta.
- **Comuns:** contexto reaproveitado; perguntas abertas com exemplo; IA útil preservada;
  decisão e consentimento respeitados; avaliação de rotina feita; persistência e
  acompanhamento reais. Entrega operacional não mede eficácia humana.

## Arquivos desta skill

- `LICENSE`
- `references/ativacao.md`
- `references/avaliacao-de-rotina.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/identidade.json`
- `references/memoria-e-rotina.md`
- `references/metodo.md`
- `scripts/auditar.py`
- `templates/cartao-de-acao.md`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
- `templates/registro-de-retorno.md`
- `integrity.json`
