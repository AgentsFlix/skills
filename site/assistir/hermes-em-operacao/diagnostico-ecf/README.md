# Diagnóstico ECF: três cards

Página independente em `/assistir/hermes-em-operacao/diagnostico-ecf/`. A primeira parte apresenta Creator, Expert e Founder, gera um prompt de coleta com Zernio e mostra três cards com as nove variáveis, médias e régua do ideal. Fontes, interpretação e cobertura ficam recolhidas em **Ver dados e critérios**.

## Régua inicial ajustável

O método `ecf-inicial-v2` foi proposto nesta implementação a pedido do usuário em 10/09/2026, após a escolha explícita de uma régua ECF inicial ajustável. Os valores são parâmetros editoriais da proposta; não são estatísticas, benchmarks de mercado nem validação científica.

| Eixo | Variável | Ideal inicial |
|---|---|---|
| Creator | Alcance relativo | 100% |
| Creator | Seguidores por alcance | 1% |
| Creator | Compartilhamentos por alcance | 1% |
| Expert | Salvamentos por alcance | 2% |
| Expert | Autoridade por alcance | 0,1% |
| Expert | Conversas qualificadas por alcance | 0,1% |
| Founder | Intenção por alcance | 0,1% |
| Founder | DMs qualificadas por alcance | 0,2% |
| Founder | Reconhecimento na pesquisa | 50% |

Nota da variável = `min(100, 80 * observado / ideal)`. O marco ideal fica em 80 pontos; desempenho acima da referência pode chegar a 100. A média de cada card usa pesos iguais entre as variáveis medidas. A média do perfil usa pesos iguais entre os eixos com medição. A interface informa X/3 e marca média parcial quando há dados ausentes, parciais, estimados ou sem evidências detalhadas. Ausência não vira zero. Sem variáveis medidas, a nota fica sem medição.

**Ajustar régua** altera os ideais e recalcula as notas na sessão. **Restaurar proposta** recupera os parâmetros iniciais. Os próximos prompts carregam a régua ajustada em `reference`. Não há salvamento no navegador ou comparação entre períodos com réguas diferentes.

## Coleta e contrato

`prompt.md` orienta a descoberta da integração instalada, resolução de credencial limitada ao perfil Hermes atual, teste de leitura de contas, paginação e coleta sem alterar recursos. Reutiliza os arquivos da execução e pede classificação dos casos claros e deduplicação entre lotes. Não consulta novamente toda a conta para retomar uma análise.

O contrato v2 contém conta, janela, momento da coleta, resolução de credencial sem segredos, cobertura, régua e três eixos. Cada variável tem numerador, denominador, amostras, estado de medição, contexto, origem, evidências e motivo de pendências. As notas são calculadas no navegador. A coleta mantém detalhes privados no ambiente do Hermes; a página recebe somente o resumo agregado. Não há chamada a uma IA ou ao Instagram na página.

O prompt distingue taxas atribuídas a posts de índices observados no perfil. Sem atribuição por post, intenção e DMs podem usar pessoas únicas e alcance da conta da mesma janela, com esse universo explícito. Soma de lotes sem deduplicação não é uma medição válida. Alcance relativo com base atual no lugar da histórica é uma estimativa identificada. Reconhecimento continua exigindo respostas reais da pesquisa.

Arquivos `ecf-metas-v1` continuam aceitos. A interface os lê na nova proposta, mostrando medições disponíveis e lacunas; não modifica o arquivo de origem. O cálculo antigo por metas, com seus pesos e pré-requisitos, permanece em `model.js` e nos testes. As duas escalas não são comparáveis. Indicadores antigos sem origem e medidas numéricas não ganham notas por interpretação de frases.

## Arquivos e verificação

- `index.html` e `ecf.css`: navegação e apresentação dos três cards.
- `ecf.js`: geração de prompt, importação local, ajuste da régua, renderização e continuação da coleta.
- `model.js`: contratos, validação, cálculos v1/v2 e exemplo fictício.
- `tests/test_ecf_diagnostic.py`: cálculos, médias parciais, denominadores, régua ajustável, compatibilidade e metadados de credencial.
- `design-review/diagnostico-ecf/`: capturas e evidência de QA, exclusivamente com dados fictícios.

Testar com `python3 -m unittest discover -s tests` e `python3 scripts/check_site.py`, além do QA em Chrome em 1440, 768 e 390 px. Os arquivos reais do usuário não entram no repositório, em capturas públicas ou em telemetria.

## Entrega determinística e normalização

`import.js` é a biblioteca local compartilhada: confere os nove caminhos, tipos e estados, recusa chaves duplicadas e valida a consistência entre estado e medição. Converte apenas BOM, um bloco Markdown contendo JSON e números em texto com sintaxe decimal inequívoca. Não adivinha aliases, unidades, denominadores nem números em frases. JSON válido não significa coleta completa.

O prompt incorpora `model.js`, `import.js` e `validator-cli.cjs` como um único `validar-ecf.cjs`. Hermes precisa de Node.js e executa o mesmo código da página, sem buscar dependências ou acessar a API para validar. Perfil, janela e régua são conferidos contra o contrato original. A saída usa permissão local 0600 e nunca sobrescreve um arquivo. Códigos: 0 completo, 2 parcial com JSON criado, 1 inválido sem novo arquivo. A validação não comprova a veracidade das evidências nem executa deduplicação de dados privados.

A importação converte v1 para v2 por correspondência explícita dos campos; preserva as notas possíveis e os zeros medidos. Dados sem denominador ou origem compatível continuam ausentes. O JSON normalizado pode ser baixado nos detalhes. O pedido de continuação inclui essa base e os caminhos exatos das medições ausentes ou limitadas. Os testes cobrem ida e volta pelo CLI e navegador com um cenário fictício de quatro medições disponíveis e cinco ausentes.
