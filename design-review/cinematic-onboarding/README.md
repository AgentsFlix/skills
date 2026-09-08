# Onboarding dedicado e visual

Revisão solicitada pelo Zé em 08/09/2026 a partir das referências anexadas à tarefa. A composição usa as capas existentes do AgentFlix; nenhuma ilustração nova foi gerada. Base das capturas antes: b07623c, no mesmo PR #49.

## O que mudou

- Cabeçalho sem menu, busca, Minha lista ou conta durante o onboarding. Marca sem link e sem foco; Privacidade acessível no rodapé. O estado inicial do HTML já oculta a navegação.
- Três escolhas com cenas, títulos e descrições integrais. Altura equivalente, fundo escuro, acento ciano na seleção e check visível. Desktop e tablet em três colunas; celular com arte lateral.
- Seleção por radio nativo: clique, toque ou setas mudam a opção marcada. Continuar confirma e avança. Voltar recupera a resposta anterior para revisão. A resposta só entra na medição após confirmar.
- Perguntas curtas com cards visuais. Perguntas com mais opções usam miniaturas compactas. Continuar acompanha a rolagem no celular.
- Quantidade disponível em O que tem nesse caminho: pontos por skill, coleções nomeadas e explicação da contagem, sem barra de progresso fictícia.
- Resultado com uma peça recomendada e Abrir minha seleção. Só esse passo libera o menu e o catálogo. As respostas confirmadas e os pré-requisitos mantêm o comportamento do PR.
- design.md registra os componentes e a navegação dessa revisão.

## Capturas

| Largura | Entrada antes | Entrada depois | Escolha marcada | Pergunta antes | Pergunta depois | Resultado | Lista longa |
|---|---|---|---|---|---|---|---|
| 1440 | [antes](1440-before-entry.png) | [depois](1440-after-entry.png) | [seleção](1440-after-selected.png) | [antes](1440-before-question.png) | [depois](1440-after-question.png) | [resultado](1440-after-result.png) | [opções](1440-after-many-options.png) |
| 768 | [antes](768-before-entry.png) | [depois](768-after-entry.png) | [seleção](768-after-selected.png) | [antes](768-before-question.png) | [depois](768-after-question.png) | [resultado](768-after-result.png) | [opções](768-after-many-options.png) |
| 390 | [antes](390-before-entry.png) | [depois](390-after-entry.png) | [seleção](390-after-selected.png) | [antes](390-before-question.png) | [depois](390-after-question.png) | [resultado](390-after-result.png) | [opções](390-after-many-options.png) |

As imagens são decorativas e dependem do serviço de capas existente. Se houver falha de rede, os rótulos e a seleção permanecem funcionais. A navegação continua válida sem imagem.

## Validação

Chrome real em 1440, 768 e 390 px: controles ocultos antes da conclusão, seleção sem avanço automático, setas do teclado, alturas equivalentes, voltar, recarga, recomendação, liberação do menu, Ler e reinício explícito. Os 84 percursos das três portas chegaram ao resultado com as respostas confirmadas corretas. Relatório: [qa.json](qa.json).

Roteiros privados: `ferramentas/qa-player/qa-cinematic-onboarding.cjs` e `qa-clarity-navigation.cjs`. O segundo cobre também retorno do player, hover clicável, falha/sucesso de cópia e instalação manual. Toque em 390 × 720 e imagens indisponíveis também foram verificados, incluindo a posição visível de Continuar nas listas longas. Unidade e sintaxe são conferidas pelo CI do PR.

Revisão visual do Zé antes do merge, conforme AGENTS.md. A publicação ainda depende dessa aprovação.
