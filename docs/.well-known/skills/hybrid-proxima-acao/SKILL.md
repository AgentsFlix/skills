---
name: hybrid-proxima-acao
description: 'Empresário para na frente de dez gaps e vinte recomendações. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: "qual a próxima ação para [negócio]".'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/hybrid-proxima-acao
  tags: hybrid-workspace, negocio, diagnostico, yaml
  related: hybrid-diagnostico, hybrid-perfil, hybrid-fundador, hybrid-icp
  config: 'hybrid.pasta: Pasta do negócio no seu computador: é onde os YAML do Hybrid Workspace vivem (perfil, ICP, marca, oferta, diagnósticos). Um negócio por pasta.'
---

# A PRÓXIMA AÇÃO · Uma ação, um comando, nada mais

Empresário para na frente de dez gaps e vinte recomendações. Esta skill pega o diagnóstico e devolve uma única ação, a de maior alavanca, traduzida em comando executável. Se nada está abaixo do limiar, ela diz isso e recomenda um diagnóstico vertical. Uma ação por semana, e a semana anda.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "qual a próxima ação para [negócio]".
- O negócio já tem os YAMLs do perfil preenchidos e você quer medir, não preencher.
- NÃO use para preencher os arquivos: para isso são as skills `hybrid-perfil`, `hybrid-icp`, `hybrid-oferta`…

## Quick Reference

| procedimento | referência |
|---|---|
| next best action | `references/next-best-action.md` |



## Procedure

1. Localize na pasta do negócio o diagnóstico atual (`diagnose-business`) ou a lista de alavancas (`growth-levers`) já produzida. Confira negócio, fonte, data e mudanças posteriores. Reuse o contexto e a ação anterior registrada. Esta skill não calcula um novo diagnóstico nem depende de uma tabela de contexto própria.
2. Sem diagnóstico utilizável, declare a lacuna e aguarde essa entrada. Se perguntar onde está, leve exemplo baseado nos arquivos do negócio já encontrados, ou hipotético se não houver memória. Recomende obter o diagnóstico com `hybrid-diagnostico`; não presuma que ela esteja instalada.
3. Abra `references/next-best-action.md`, selecione a alavanca #1 da entrada e traduza em UMA ação concreta. Use a tabela de resolução sem inventar scores, pesos, squads ou prioridade. Se a ação anterior já foi concluída e o diagnóstico não foi renovado, peça renovação antes de repetir a indicação.
4. Entregue o formato curto da referência: score de origem, gargalo, ação e efeito esperado com evidência. Comando citado vira orientação em linguagem comum se o runtime não estiver disponível; não o declare executável sem conferir. Se todas as dimensões forem adequadas pela referência, devolva nenhuma ação urgente, com justificativa.
5. Avalie rotina: depende de diagnósticos novos e do interesse em revisão; sem mudanças, não vale repetir a mesma ação. Qualquer proposta inclui horário/fuso, fontes, destino, silêncio e pausa; autorização e agendador real são necessários para ativar.

## Pitfalls

- Diagnosticar novamente para responder a um pedido de próxima ação.
- Selecionar alavanca a partir de scores inexistentes ou de relatório de outro negócio.
- Confundir comando ilustrativo de um squad com ferramenta disponível.
- Entregar uma lista inteira quando o pedido é uma única prioridade.

## Verification

1. Existe UMA ação prioritária justificada pelos dados do diagnóstico, ou a conclusão fundamentada de nenhuma ação urgente; sem diagnóstico utilizável, o resultado é aguardando entrada.
2. A resposta cita arquivo, data e negócio da entrada. Não fabrica scores, pesos ou quantidade de squads.
3. A ação é praticável no ambiente ou apresentada como orientação, nunca como comando cuja existência não foi conferida.
4. Não há relatório multidimensional novo nem ação antiga repetida como nova sem revisar sua situação.
5. Perguntas abertas têm exemplo contextual ou fallback hipotético; avaliação de rotina inclui motivo e não ativa nada na instalação.

## Arquivos desta skill

- `references/next-best-action.md`
