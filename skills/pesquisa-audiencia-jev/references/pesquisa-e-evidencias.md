> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Do contexto à entrega auditada

Esta referência conecta os módulos. Leia o guia específico ao executar cada etapa.

## Bootstrap e três lacunas possíveis

Antes das perguntas, monte o mapa de inputs. Preserve em cada campo valor, origem, data quando conhecida,
estado e lacuna. Um briefing recente fornecido pela pessoa pode preencher tudo; nesse caso avance.
Confirme apenas conflito ou informação desatualizada que mude a execução. Memória recuperada não concede
acesso novo a arquivos, publicação nem agendamento.

As perguntas abaixo são modelos, não um questionário obrigatório. Adapte cada exemplo ao contexto real.
Se não houver contexto/memória relevante, diga isso e use os exemplos como hipotéticos:

| Lacuna | Pergunta e exemplo hipotético adjacente |
|---|---|
| Situação central | “Que situação você quer compreender? Exemplo hipotético: pessoas que querem mudar de profissão, mas receiam perder o que construíram.” |
| Público/contexto | “Em que público ou momento vamos começar? Exemplo hipotético: profissionais no início de uma transição; também podemos deixar o público aberto para descobrir na pesquisa.” |
| Uso | “Para que a base deve servir primeiro? Exemplo hipotético: orientar um roteiro sobre recomeço, sem criar oferta ou vender algo nesta etapa.” |

Pergunte somente os campos ausentes, no máximo três na abertura. Uma resposta como “quero descobrir” é válida:
registre recorte provisório e hipótese. Após a primeira resposta, use o contexto novo nos próximos exemplos.
Uma pergunta posterior de ajuste ou rotina também exige seu exemplo. Não solicite detalhes de JEV ao humano.

## Briefing e fontes

Registre tema, pergunta central, tensão provisória, público/contexto, uso, idiomas, sinais, contrapontos,
exclusões, tamanho inicial, prioridades de fontes e hipóteses. Reutilize o template
[search-brief-template.md](../modules/youtube-jev-copy/assets/search-brief-template.md).
Não introduza oferta, promessa ou corte editorial como decisão já tomada.

TEDx, TED, canais especialistas ou outras fontes podem ser prioridades configuradas no briefing. A diversidade
e aderência ao tema orientam a descoberta quando não houver preferência. Não transportar preferências pessoais
de quem criou o pacote para todos os usuários. O agente escolhe consultas e inspeciona as fontes.

Um corpus fornecido pode vir de outra plataforma. Valide autorização de uso, formato, origem, contexto e cobertura;
normalize para JSONL com `id` único e `comment`, mais contexto necessário. Não force a coleta no YouTube.
Se a base já estiver auditada, confira a correspondência de IDs/trechos e aproveite o trabalho válido.

Para nova coleta, siga [youtube-jev-copy](../modules/youtube-jev-copy/GUIDE.md). Guarde fontes selecionadas e
motivos antes de prometer cobertura. Registre retornados, vazios, únicos, respostas, avisos e falhas por fonte.
“Todos” só pode significar os comentários públicos devolvidos pelo extrator nos vídeos e momento declarados.
Falha ou retorno vazio não prova ausência de comentários. Não contorne controle de acesso.

## Privacidade e pastas da rodada

Use uma pasta privada nova por rodada, fora do pacote e do Git. Separe briefing, corpus minimizado, proveniência,
rubrica, piloto, respostas/checkpoints e entrega. A pessoa pode escolher outro destino privado. Não inferir
que a pasta de trabalho atual é adequada para guardar comentários e credenciais.

O texto enviado a JEV é minimizado: retire metadados de autor e identificadores diretos desnecessários.
Links de origem ficam na proveniência privada. Mascarar handles não garante anonimato de uma narrativa;
revise trechos reidentificáveis antes de compartilhar. Texto minimizado é identificado como editado.
Uma versão compartilhável da síntese não inclui corpus completo, vínculos de pessoas nem relatos sensíveis
reidentificáveis. Não usar comentários como depoimentos do produto.

## Contrato e piloto

Defina unidade, State permitido, Questions, escalas, idioma, opções de ausência/incerteza, limiares de revisão,
duplicatas, limite de execução e critério de aceite do piloto. Preserve a versão efetivamente usada e seus hashes.
O contrato da API está em [jev-operar/references/api-contract.md](../modules/jev-operar/references/api-contract.md).

- Toda instrução identifica o registro/campo avaliado, por exemplo `records[0].comment`.
- `choice` escolhe uma alternativa; `noul` expressa probabilidade de sim; `score` usa os índices 0 a N−1
  das descrições fornecidas. Valide o schema antes de interpretar o valor.
- Questions no mesmo request são independentes. Uma decisão que depende de outra exige novo passe
  com a resposta anterior no estado.
- Comece com um registro por request. Aumentar lote exige testar independência, permutação e idiomas.
- Use controles positivos, negativos, ambíguos, respostas curtas e instruções maliciosas dentro do texto.
  Leia uma amostra real de aceitos e rejeitados. Sucesso sintético confirma integração, não precisão populacional.

O pedido de pesquisa/classificação autoriza a execução necessária dentro do escopo informado. Mostre o plano
de requests antes de escalar e respeite limites existentes. Se a rubrica exigir ajuste, encerre o lote comparável,
preserve evidência e crie nova revisão. Registre a causa: instrução, executor, avaliador ou infraestrutura.
Não alterar critérios entre amostras para melhorar uma métrica.

## Seleção, base e escrita opcional

Siga [jev-cerne](../modules/jev-cerne/GUIDE.md) para transformar classificação em pré-seleção e leitura editorial.
Uma ficha precisa de ID, evidência curta, fato textual, interpretação identificada, contribuição ao conjunto e
limites de uso. Preserve original; traduções e paráfrases ocupam campos separados. Inclua contrapontos reais.
Recorrência na amostra não estima prevalência populacional.

Entregue a base conforme os templates
[Markdown](../modules/youtube-jev-copy/assets/knowledge-base-template.md) e
[JSON](../modules/youtube-jev-copy/assets/knowledge-base-contract.json). A partir da pasta do pacote:

```sh
python3 modules/youtube-jev-copy/scripts/audit_knowledge.py \
  --corpus /caminho/privado/corpus.jsonl \
  --knowledge /caminho/privado/base-conhecimento.json
```

Os caminhos acima são exemplos a substituir pelos caminhos reais da rodada. A auditoria mecânica confere
IDs e trechos; a leitura editorial confere significado e inferências. Preserve ambos os resultados.

Quando houver pedido de escrita, leia [jev-copy-cambiador](../modules/jev-copy-cambiador/GUIDE.md).
JEV seleciona evidências/métodos e o agente escreve. Use os métodos compactos incluídos, sem depender de um
acervo privado nem imitar autores. Entregue texto limpo e mapa correspondente em arquivos separados.
Para uma atribuição factual sem lastro, encontre uma fonte ou remova a atribuição; não a torne citação fictícia.
Publicação e aprovação humana nunca são inferidas do silêncio.

## Recibo e retomada

O recibo distingue etapa, fonte, período, cobertura, recebidos, únicos, processados, revisados, excluídos,
falhas e pendentes. Informe provider/endpoint, modelo solicitado/resolvido quando disponível, hash/revisão
da rubrica, tentativas, uso informado e duração medida por etapa. Ausência de dado permanece desconhecida.

Retome somente com mesmo corpus, rubrica, provider/modelo e configuração compatível com os checkpoints.
Mudança de versão ou método exige outra rodada quando não houver migração explicitamente suportada.
Reutilizar corpus não significa reutilizar resultados incompatíveis. Não apagar evidência por comentário
antes de concluir seleção e auditoria. O plano de retenção posterior pertence à pessoa.
