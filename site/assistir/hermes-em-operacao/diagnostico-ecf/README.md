# Diagnóstico ECF: métricas nativas do Zernio

Página independente em `/assistir/hermes-em-operacao/diagnostico-ecf/`. Apresenta três cards, nove barras, médias e régua ajustável. O método atual é **ecf-zernio-v3**, solicitado em 10/09/2026 para usar somente métricas disponibilizadas pelo Zernio. A classificação de posts, comentários e DMs e a pesquisa de percepção deixam de ser pré-requisitos.

Creator organiza atenção, Expert organiza interesse e Founder organiza ações no perfil. São indicadores operacionais, não prova de expertise, intenção de compra, leads qualificados ou receita. A página não chama uma IA nem consulta o Instagram; lê o JSON local em memória.

## Métricas e régua proposta

| Card | Variável | Cálculo | Ideal inicial proposto |
|---|---|---|---|
| Creator | Alcance por seguidor | alcance total da conta na janela / base atual de seguidores | 300% |
| Creator | Curtidas | soma de likes / soma de reach dos mesmos posts | 5% |
| Creator | Compartilhamentos | soma de shares / soma de reach dos mesmos posts | 1% |
| Expert | Salvamentos | soma de saves / soma de reach dos mesmos posts | 2% |
| Expert | Comentários | soma de comments / soma de reach dos mesmos posts | 1% |
| Expert | Tempo assistido de Reels | mediana de tempo médio em ms / (duração em s × 1.000) | 50% |
| Founder | Cliques no perfil | profile_links_taps / alcance da conta na janela | 1% |
| Founder | Novos seguidores | dimensão de seguimentos brutos / alcance da conta na janela | 1% |
| Founder | Conversas no inbox | summary.uniqueConversations / alcance da conta na janela | 1% |

Os ideais são parâmetros propostos e ajustáveis; não são benchmarks de mercado. Nota = `min(100, 80 * observado / ideal)`. Atingir o ideal vale 80; notas podem subir até 100. Cada média usa pesos iguais entre variáveis disponíveis e explicita a cobertura. Zero medido vale zero; campo ausente não recebe nota. As notas v3 não são comparáveis às escalas v1/v2.

Os posts não são separados por suposto eixo editorial. FEED, REELS e UNKNOWN entram nas taxas de conteúdo; STORY e AD identificados ficam de fora. Cada taxa usa o subconjunto com ambos os campos; ausência de campo nesse conjunto indica cobertura parcial. A falta de duração de um Reel afeta somente tempo assistido. UNKNOWN/video não prova REELS. A base atual de seguidores é identificada como snapshot, não substitui a base histórica de uma publicação.

## Fontes verificadas

Conferência da [OpenAPI pública do Zernio](https://zernio.com/openapi.yaml) em 10/09/2026:

- [Posts](https://docs.zernio.com/analytics/get-analytics): reach, likes, comments, shares, saves; igReelsAvgWatchTime em ms e videoDurationSeconds em segundos. completionRate é descrito para TikTok, não Instagram. engagementRate alterna o denominador e não é usado no cálculo.
- [Conta](https://docs.zernio.com/analytics/get-instagram-account-insights): reach e profile_links_taps como total_value da janela. follows_and_unfollows exige breakdown follow_type: nesse bloco, FOLLOWER representa seguimentos e NON_FOLLOWER representa saídas. A extração usa igualdade exata de dimension, nunca substring, índice da lista ou dimensão de outra métrica. Não usar total que misture entradas/saídas nem crescimento líquido. O histórico followers_gained soma deltas diários positivos, portanto não substitui seguimentos brutos.
- [Inbox agregado](https://docs.zernio.com/inbox-analytics/get-inbox-volume): summary.uniqueConversations com accountId da conta selecionada, platform=instagram, fromDate e toDate. A consulta deste diagnóstico omite os filtros opcionais profileId e source para medir o agregado da conta. Um zero de consulta com filtros adicionais precisa ser conferido nesse escopo, mantendo accountId, plataforma e datas; nunca usar profileId isolado ou totais de outras contas, nem escolher o maior resultado. Campo ausente ou falha não é zero. Não soma faixas/dias, não inspeciona interlocutores ou mensagens e não afirma contar pessoas ou intenção qualificada. Esse ajuste não presume uma falha geral de profileId na API.
- [Contas conectadas](https://docs.zernio.com/accounts/list-accounts): followersCount e followersLastUpdated quando disponibilizados.

A OpenAPI do Zernio descreve o envelope e a dimensão, mas não enumera o significado de FOLLOWER/NON_FOLLOWER nessa métrica. O mapeamento é apoiado pela [documentação de implementação do conector CData](https://cdn.cdata.com/help/ENK/mcp/pg_table-accountfollowtype.htm) e pelo [relato de verificação direta do meta-business-insights-mcp](https://github.com/mediacraft-cc/meta-business-insights-mcp#como-os-números-de-seguidores-são-obtidos). Não confundir essa atribuição com a documentação oficial do Zernio, nem transportar a interpretação para reach/views.

Disponibilidade depende de conta, permissões, plano, mídia e sincronização. Um campo documentado pode estar ausente. O prompt consulta apenas lacunas nos recursos necessários e preserva respostas anteriores; não tenta preencher ausências por classificação semântica. Dados de conta podem ter atraso de até 48 horas. A contagem do inbox reflete eventos registrados pelo serviço.

## Contrato e validação

O JSON v3 contém perfil, conta, janela, momento da coleta, régua e três recursos: `account`, `posts`, `inbox`. O Hermes extrai valores nativos e mantém metadados mínimos. `native.js` deriva as nove variáveis; nenhum campo `axes`, `score`, autoridade ou intenção é aceito como entrada v3.

Os recursos usam estados complete/partial/missing, origem e motivo. O validador confere IDs da mesma conta, paginação, unicidade dos posts, janela, campos e tipos, e mantém ausências explícitas. As origens e a autenticidade das respostas continuam dependendo da execução real do agente, não do validador. Resumos são limitados a 200 KB e 500 posts; recortes precisam indicar cobertura parcial.

O prompt incorpora `model.js`, `native.js`, `import.js` e `validator-cli.cjs` num executável local `validar-ecf.cjs`, sem dependências externas além de Node.js. A mesma lógica roda no navegador. O CLI grava um arquivo novo com permissão 0600 e não sobrescreve outro: saída 0 = completo; 2 = parcial com JSON criado; 1 = inválido/erro sem nova entrega. O recibo inclui notas e hash dos bytes escritos e declara que verifica estrutura/cálculo, não evidências privadas. Para v3, o recibo precisa identificar contract=ecf-zernio-v3. A orientação exige substituir e reexecutar um validador antigo, sem apenas editar o texto do recibo. Notas no recibo e na tela são arredondadas ao inteiro; zero exibido pode representar uma fração positiva.

`import.js` permite apenas reparos seguros de BOM, bloco Markdown e números decimais inequívocos. Recusa duplicatas, campos fora do contrato, contagens fracionárias/ambíguas, misturas de contas e divergência do perfil/janela/régua do pedido. Não inventa números a partir de frases.

## Compatibilidade e interface

Arquivos `ecf-metas-v1` e `ecf-inicial-v2` continuam sendo exibidos na escala anterior. Não são convertidos em observações v3: taxas de subconjuntos semânticos não recuperam as métricas nativas do perfil inteiro. A interface indica o método anterior e oferece **Usar métricas Zernio**, que gera um pedido para reutilizar as respostas nativas da coleta e consultar somente os campos ausentes.

No v3, **Completar métricas** reaproveita o JSON nativo e os arquivos existentes. **Ajustar régua** recalcula as notas em memória; os prompts nativos seguintes usam essa régua. Uma régua v2 não é aplicada às variáveis v3. Fontes, critérios e exportação do JSON ficam recolhidos nos detalhes. Nenhum relatório real é incluído nas capturas ou no repositório público.

## Arquivos e testes

- `model.js`: métodos históricos v1/v2, preservados.
- `native.js`: contrato, validação, cálculo e exemplo fictício v3.
- `import.js`, `validator-cli.cjs`: importação segura e entrega executável.
- `ecf.js`, `index.html`, `ecf.css`: três cards, formulário e geração do prompt.
- `prompt.md`: coleta dos recursos nativos e resolução limitada de credencial no perfil Hermes.
- `tests/test_ecf_diagnostic.py`: médias, fontes, unidades, cobertura, compatibilidade e CLI.

Executar a suíte do repositório, check_site, validação/scanner de skills, build_docs sem diferença, agent_work check e QA em Chrome real em 1440, 768 e 390 px. Capturas de demonstração ficam em `design-review/diagnostico-ecf/`; dados reais ficam locais.
