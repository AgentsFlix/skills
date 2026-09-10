# Revisão visual do diagnóstico ECF

Primeira parte: três eixos, prompt de coleta com Zernio e conferência do resumo do agente.

As capturas `referencia-*` documentam a jornada de marca existente na base desta tarefa. A página ECF é nova, portanto não existe uma versão anterior da mesma rota. `depois-*` mostram a entrada ECF; `coleta-*`, a preparação; `diagnostico-*`, o relatório fictício.

QA realizado em Google Chrome real, em sessão isolada, com larguras de 1440, 768 e 390 px. Detalhes em `resultado.json`. Cópia testada com sucesso e rejeição simulados; conteúdo baixado conferido integralmente. Importações testadas por arquivo e texto, incluindo relatório vazio, componente ausente, texto malformado e tentativa de HTML dentro de uma fonte. Nenhum pedido externo partiu da página ECF. Dados de demonstração não representam nenhuma conta real.

O resumo permanece somente em memória na página; recarga remove a visualização. O navegador recalcula as notas, mas não autentica evidências do Instagram. A conferência de origem acontece na conversa do agente.

As capturas estão prontas para a revisão visual prevista no contrato de design. Não representam aprovação humana já concedida.


## Revisão após a primeira coleta

`antes-analise-*` mostra a entrada de relatório anterior. `depois-analise-*` mostra a ação **Gerar análise e conferir scores**, os indicadores descritivos e as interpretações por eixo, todos com dados fictícios. A continuação oferece um prompt para reutilizar a coleta na mesma conversa. As capturas cobrem 1440, 768 e 390 px.

O arquivo recebido foi validado somente em sessão local isolada, sem ser incluído no repositório ou nas capturas. O QA conferiu importação do formato estruturado de cobertura, ação explícita, indicadores sem meta, classificação com evidências, cópia/download de continuação, troca de arquivo/texto, exemplo anterior, rejeição de JSON inválido, escape de HTML e ausência de pedidos externos. Evidência resumida em `analysis-resultado.json`. A análise é produzida pelo Hermes; a página a organiza e calcula apenas os scores sustentados pelo contrato.


## Revisão: três cards e régua inicial

A pedido do usuário, o resultado principal passou a ter apenas Creator, Expert e Founder, com três barras por card, média, cobertura e marcador do ideal. `depois-analise-*` registra a apresentação anterior; `cards-*` registra a revisão em 1440, 768 e 390 px. Todas as capturas usam o exemplo fictício.

O usuário escolheu uma régua ECF inicial ajustável, identificada como proposta. O método v2 usa pesos iguais nas médias, informa medições parciais e permite editar os ideais. O formulário transporta a régua ajustada no prompt. Os testes cobrem nove barras, três cards, médias, edição/restauração, geração/cópia do prompt v2, continuação da coleta, compatibilidade local com arquivo anterior, ausência de dados, escape de HTML, erro de JSON e ausência de overflow ou requisições externas. Detalhes em `cards-resultado.json`.

A escolha da régua não é uma aprovação visual do resultado final. O PR continua disponível para revisão.
