# Ficha da série: materiais, retorno e elenco

Pedido de 10/09/2026. Capturas antes e depois em 1440, 768 e 390 px; a aba Materiais aparece selecionada por teclado nas capturas finais. A borda branca indica foco, e o sublinhado ciano indica seleção. A captura com a lista completa fica somente no registro local de QA.

- Materiais saíram do hero e são apresentados por temporada e episódio.
- A seta tipográfica foi substituída por SVG de 20 px, traço de 2,5 px.
- Elenco preenchido com os 17 nomes registrados no Meet fornecido pelo responsável. As fontes ficam privadas.
- Características: Prática, Interativa, Didática.
- A página canônica da aula foi regenerada a partir do mesmo HTML do player.

## Validação

71 testes, com um skip anterior; sintaxe, validação de 52 skills, scanner sem bloqueios e build de docs sem diferenças. Chrome real: materiais, estado vazio, três larguras, elenco expansível, teclado, um painel visível, retorno e ausência de overflow/erros JS. As cinco paradas do player e o progresso existente continuam funcionando.

Reproduzir a verificação visual com Playwright Core instalado e o site servido localmente:

```sh
QA_BASE=http://127.0.0.1:8843 PLAYWRIGHT_CORE=/caminho/node_modules/playwright-core node design-review/serie-materiais/qa.cjs
```

Capturas e relatório vão para `/tmp/agentflix-serie-materiais`, ou para `QA_OUT`. O roteiro usa um contexto temporário de navegador, sem alterar o progresso do usuário.
