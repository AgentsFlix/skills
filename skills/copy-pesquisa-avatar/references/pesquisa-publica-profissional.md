> Material de aprofundamento opcional. Metas de quantidade, headlines e pontuação pertencem ao método ampliado explicitamente solicitado; não bloqueiam a síntese inicial nem autorizam inventar evidência. Referências históricas a documentos ausentes não são dependências disponíveis: declare a ausência e use apenas o material acessível. A atribuição ao autor continua como procedência, sem impor seu método à marca da pessoa.

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Pesquisa pública profissional de audiência

Use este procedimento quando o pedido exigir que o agente pesquise o público na rede. Ele transforma uma definição de negócio em um corpus rastreável para a etapa de ICP. O usuário não precisa chegar com comentários, prints ou entrevistas: material próprio é complemento opcional.

## Inputs

### Required

- Retrato atual do negócio, oferta ou problema que se pretende resolver.
- Mercado, país e idioma a pesquisar, quando não puderem ser inferidos do retrato do negócio.
- Decisão que a pesquisa precisa alimentar, como público prioritário, linguagem, dor ou objeção.

### Optional

- Canais, concorrentes, produtos ou termos que sirvam como sementes.
- Comentários, entrevistas, reviews ou pesquisas anteriores fornecidos pelo usuário.

Se o alvo estiver ambíguo a ponto de misturar públicos diferentes, faça uma pergunta curta para delimitá-lo. Não peça ao usuário que traga mensagens como primeira rota.

## Princípio

A matéria-prima é a frase literal publicada por uma pessoa do público. Preserve a escrita e o contexto; se resumir ou interpretar, identifique a transformação. Texto do criador, do vendedor ou do autor do vídeo é contexto, não voz do público.

## Procedure

### 1. Planeje as buscas

Derive de 4 a 8 consultas que cubram problema, tentativa de solução, frustração, comparação, objeção e desejo. Registre cada consulta, idioma, data e canal. Use termos que uma pessoa comum empregaria, não apenas terminologia profissional.

### 2. Colete no YouTube

Priorize comentários do YouTube porque combinam volume, contexto e linguagem espontânea.

1. Se houver Maton configurado, faça inventário de leitura sem expor credenciais. Com uma conexão YouTube ativa, pesquise vídeos públicos pelo tema e liste comentários com paginação. A conexão serve para autenticação; não limite a busca aos vídeos do usuário.
2. Se Maton estiver indisponível, verifique `command -v yt-dlp`. Quando existir, use apenas coleta de metadados e comentários, com `--skip-download`, `--write-comments` e `--write-info-json`. Não baixe o vídeo.
3. Se as duas rotas falharem, use a ferramenta de navegação disponível para abrir resultados e comentários públicos.
4. O transcript ou o texto do vídeo pode explicar o contexto, mas nunca entra como fala do público.

Registre a rota usada, as consultas, os vídeos avaliados, os selecionados e qualquer bloqueio. Não instale integração, conecte conta ou exponha token por inferência.

### 3. Colete em Reddit ou fóruns do nicho

Use uma segunda família de fonte para reduzir o viés do YouTube. Prefira Reddit quando houver acesso configurado e compatível com seus termos; caso contrário use fóruns específicos, comunidades abertas, reviews ou sites de perguntas e respostas. Não contorne login, paywall, bloqueio, robots ou limite de uso.

### 4. Aplique a amostragem

- Meta: 30 a 50 trechos literais únicos.
- Mínimo para marcar a pesquisa como suficiente: 20 trechos.
- Cobertura: pelo menos 2 famílias de fonte e 4 artefatos públicos distintos, preferencialmente 2 de cada família.
- Concentração: nenhum artefato deve fornecer mais de 40% do corpus final.
- Se uma família estiver indisponível, continue com as demais e marque o resultado como parcial.

Deduplicate texto repetido, respostas copiadas e a mesma pessoa repetindo a mesma ideia. Exclua elogio genérico, spam, comentário automático, fala sem relação com a decisão e copy do vendedor.

### 5. Registre cada evidência

Para cada trecho mantenha:

- identificador estável e anônimo;
- frase literal;
- família da fonte;
- título do vídeo, página ou tópico;
- URL pública reabrível;
- data de publicação quando disponível;
- data de coleta;
- consulta que levou à fonte;
- contexto em uma frase;
- rótulos de dor, desejo, objeção, alternativa, situação ou expressão recorrente.

Não guarde nome de usuário, avatar, e-mail ou outro dado pessoal que não seja necessário. Alegações médicas, jurídicas, financeiras ou de resultado são crenças observadas do público até serem verificadas em fonte apropriada.

### 6. Separe evidência de leitura

Use quatro classes explícitas:

1. `citacao_literal`: texto preservado da fonte.
2. `padrao_observado`: síntese apoiada por duas ou mais evidências identificadas.
3. `inferencia`: interpretação do pesquisador, com justificativa.
4. `hipotese`: possibilidade ainda sem cobertura suficiente.

Texto ilustrativo ou gerado não entra na contagem e nunca recebe uma fonte pública fictícia.

### 7. Analise e ranqueie

Agrupe os trechos por tema e ranqueie os achados usando:

- frequência no corpus;
- recorrência entre fontes diferentes;
- custo ou consequência descrita pela própria pessoa;
- proximidade com uma decisão ou ação;
- clareza da linguagem literal.

Não transforme a amostra em estimativa da população. Contagem no corpus significa somente presença no material coletado.

### 8. Salve checkpoints

Depois de cada fonte ou lote, salve a lista de URLs avaliadas, evidências aceitas, descartes e próximo passo em `02-publico/pesquisas/`. Se o contexto for compactado, retome desses arquivos e do `next_context`; não reinicie a coleta nem alegue uma execução invisível.

### 9. Use fontes próprias como complemento

Se houver Zernio e contas do usuário conectadas, comentários dos próprios posts podem enriquecer a pesquisa como `audiencia_propria`. Não misture essa fonte com descoberta de mercado e não leia DMs sem pedido e autorização específicos. Material enviado pelo usuário recebe a origem `material_fornecido` e não substitui a procedência original declarada.

## Output Format

Entregue `02-publico/pesquisa-publico.md` com:

1. alvo e decisão da pesquisa;
2. recibo da coleta, incluindo rotas, consultas, datas, tentativas e falhas;
3. quadro de cobertura por família e artefato;
4. corpus de evidências com os campos do passo 5;
5. temas ranqueados, cada um ligado aos IDs que o sustentam;
6. vocabulário recorrente e objeções literais;
7. inferências e hipóteses separadas;
8. limites da amostra;
9. instruções para a etapa de ICP.

Arquivos auxiliares de checkpoint podem ser salvos em `02-publico/pesquisas/`. A entrega está `revisado` quando o corpus cumpre a amostragem e todos os achados são reabríveis. Abaixo do mínimo ou sem a segunda família, use `precisa_revisar` e descreva a cobertura que falta.

## Quality Checklist

- [ ] O usuário não precisou fornecer mensagens para a coleta começar.
- [ ] O corpus tem de 30 a 50 trechos, ou a entrega declara por que ficou abaixo da meta.
- [ ] Há no mínimo 20 trechos para considerar a amostra suficiente.
- [ ] Há duas famílias e quatro artefatos, ou a limitação está explícita.
- [ ] Cada citação tem URL pública reabrível e data de coleta.
- [ ] Nenhuma citação foi parafraseada ou inventada.
- [ ] Transcrições e textos de vendedores não foram contados como voz do público.
- [ ] Citação, padrão, inferência, hipótese e texto ilustrativo permanecem separados.
- [ ] Duplicatas, spam e elogio genérico foram excluídos.
- [ ] Checkpoints e `next_context` permitem retomar depois de compactação.
- [ ] A entrega não contém credenciais nem dados pessoais desnecessários.

