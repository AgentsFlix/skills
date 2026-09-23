# Contrato JEV do cambiador

## Integração compartilhada

Use [jev-operar/scripts/jev_client.py](../../jev-operar/scripts/jev_client.py) para executar os arquivos de entrada e Questions gerados por `prepare_turn.py`. A rota vigente é `jevcloud_direct`, `POST https://api.typesafe.ai/v1/systemone`, com modelo fixado `jev-1.13.0`. A chave própria usa o campo `JEV_API_KEY=` no arquivo resolvido pelo cliente (`--credential`, configuração XDG ou `~/.config/agentflix/jevcloud.env`); somente o cliente a lê para autenticação, sem imprimir o valor. O [contrato central](../../jev-operar/references/api-contract.md) governa credencial, retries e validação.

A CLI continua usando `--input`, `--questions`, `--output` e, para execução autorizada, `--execute --max-requests N`. Retome com `--resume` apenas a mesma rota/modelo/rubrica e os mesmos dados. Rodadas/checkpoints históricos OpenRouter permanecem preservados; uma rodada JevCloud começa em novo diretório, sem migração silenciosa.

## Por que são duas passagens

Questions irmãs recebem o mesmo State e não leem respostas umas das outras. A escolha da persona depende da evidência já escolhida. Portanto:

1. Passagem A: `componente + candidatos -> evidence_id | none`.
2. Passagem B: `componente + evidência escolhida + catálogo -> persona_slug | neutral`.
3. O agente redige.
4. Auditoria: `componente + evidência + rascunho -> suporte semântico`, seguida da validação determinística.

## Passagem A — evidência

No helper atual, `records[0].comment` é uma string contendo JSON. Instrua JEV explicitamente a interpretar esse conteúdo e avaliar seus campos `component` e `candidates`; não invente caminhos de objeto como `records[0].comment.candidates`. Inclua o contrato editorial dentro de `component`. A única Question é `best_evidence`, tipo `choice`, com os IDs candidatos mais `none`.

Critérios, nesta ordem:

1. sustenta diretamente a função e a afirmação pedida;
2. contém situação, conflito, sensação, dor, desejo ou vocabulário explícitos;
3. exige pouca inferência;
4. acrescenta algo que os trechos vizinhos ainda não cobrem;
5. pode ser usado com segurança editorial.

`none` é obrigatório. Baixa confiança exige revisão ou nova busca.

Inclua no piloto um candidato tematicamente próximo que declare apenas intenção diante de um pedido de resultado concluído. Essa diferença já causou uma seleção falsa neste fluxo; a instrução deve exigir o fato concreto solicitado antes de avaliar aderência temática. Inclua também dois candidatos plausíveis: `none` nessa situação pode indicar abstenção excessiva, não ausência real de evidência. Controles simples aprovados não calibram a seleção editorial.

## Passagem B — método

O State deve nomear `component`, `selected_evidence`, `medium`, `audience` e restrições. A Question `best_persona` contém os 14 slugs e `neutral`. A instrução pergunta qual método estrutura melhor aquele componente sem acrescentar fatos ou imitar a voz do autor.

## Auditoria semântica opcional

Depois da escrita, faça uma terceira chamada com State contendo exatamente o rascunho e os spans usados:

- `meaning_preserved` (`noul`): o rascunho preserva o sentido apoiado?
- `unsupported_specificity` (`noul`): as atribuições pessoais ou fatos verificáveis introduzem detalhe, causalidade, diagnóstico, universalização ou promessa não sustentados? Avalie interpretações/propostas separadamente; não exija que uma metáfora ou pergunta autoral seja uma citação literal.
- `method_fit` (`score`, 0–3): o método escolhido cumpre a função sem dominar a voz?

Essas Questions devem identificar explicitamente os campos do State. Não trate aprovação probabilística como prova; use-a para fila de revisão.

## Política sugerida

- `none`: buscar nova evidência para atribuição pessoal; raciocínio e propostas autorais podem continuar explicitamente tipados.
- confiança `< 0.35`: revisão obrigatória.
- `unsupported_specificity >= 0.35`: sinalizar a afirmação exata para revisão, preservando a resposta.
- `meaning_preserved < 0.70`: revisar a atribuição; verificar se a rubrica confundiu interpretação com fato antes de reescrever.
- citação: span literal obrigatório.
- paráfrase: span literal e ID obrigatórios.
- síntese: todos os IDs obrigatórios; não atribuir a uma pessoa só.

Calibre os limiares com controles sintéticos e amostra humana antes de uso em escala.

Não repetir avaliações até obter aprovação. Uma rubrica nova deve distinguir ao menos relato fiel, atribuição inventada, interpretação explícita e proposta/metáfora. Se falhar nesses controles, use como diagnóstico, sem gate automático. Não confunda `confidence` com probabilidade de verdade nem acrescente detalhes para favorecer um método. O validador local comprova apenas IDs, spans e metadados declarados; não verifica cobertura semântica integral ou efeito no leitor.
