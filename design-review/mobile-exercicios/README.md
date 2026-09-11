# Exercícios da Aula 2 no mobile

Base anterior: `7c9fe80fd4eac40c79912c2de95967cf757fc921`. Correção no PR #73. Capturas do Chrome instalado, em CSS px. Toque emulado; não são testes em aparelhos físicos.

## Decisão de interação

Aula 2 contém três exercícios de associação: Monte o fluxo, Dividir o trabalho e Monte sua Eugência. Todos já tinham alternativa por clique, mas o aluno precisava rolar entre as peças e os destinos no celular.

Agora, tocar numa peça abre um painel com os destinos. Tocar num espaço vazio abre as peças disponíveis. O painel identifica a posição atual e informa qual peça será substituída; a anterior retorna à mesa. Cancelar mantém as respostas. Devolver à mesa e Conferir são ações explícitas. Não há resposta correta pré-selecionada nem correção automática.

A escolha aparece em telas de até 760 px, em dispositivos cujo ponteiro principal é de toque e em eventos de toque. Mouse em tela ampla mantém arraste e clique. O teclado continua disponível nos dois modos. O painel usa dialog nativo, foco inicial no título, retorno de foco, Escape, região de estado e alvos de pelo menos 44 px. Rola por dentro quando necessário e respeita a altura disponível e a área segura.

Essa aplicação foi escolhida por evitar a rolagem entre origem e destino. O W3C inclui um menu de destinos entre as alternativas ao arraste: [Understanding SC 2.5.7](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html). A dimensão dos controles segue o alvo de 44 px do projeto, acima do mínimo de 24 px explicado em [Understanding SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

## Ícones

As ilustrações editoriais das peças usam os mesmos arquivos do desktop. Nenhum emoji foi introduzido. Os dois cadeados emoji encontrados na vitrine passam a usar o mesmo SVG de traço, em todas as larguras. `design.md` registra a regra para novas adaptações mobile. Textos pedagógicos, gabaritos, comandos e mídia permanecem idênticos.

## Evidências

Capturas antes/depois usam o mesmo tamanho: largura indicada × 900 px. Os painéis de escolha usam 390 × 844 px com toque.

| Exercício | 1440 px | 768 px | 390 px | Escolha por toque |
|---|---|---|---|---|
| Monte o fluxo | [antes](pratica-1440-antes.png) / [depois](pratica-1440-depois.png) | [antes](pratica-768-antes.png) / [depois](pratica-768-depois.png) | [antes](pratica-390-antes.png) / [depois](pratica-390-depois.png) | [painel](pratica-390-escolha.png) |
| Dividir o trabalho | [antes](equipe-1440-antes.png) / [depois](equipe-1440-depois.png) | [antes](equipe-768-antes.png) / [depois](equipe-768-depois.png) | [antes](equipe-390-antes.png) / [depois](equipe-390-depois.png) | [painel](equipe-390-escolha.png) |
| Monte sua Eugência | [antes](eugencia-pratica-1440-antes.png) / [depois](eugencia-pratica-1440-depois.png) | [antes](eugencia-pratica-768-antes.png) / [depois](eugencia-pratica-768-depois.png) | [antes](eugencia-pratica-390-antes.png) / [depois](eugencia-pratica-390-depois.png) | [painel](eugencia-pratica-390-escolha.png) |

## Validação

`tests/mobile_exercises.cjs` passou em 27 cenários. Cada uma das três atividades foi concluída por toque em 320×740, 360×800, 390×844, 430×932, 768×1000, 1440×1000, 844×390 e 390×400. O roteiro cobre erro, correção, substituição, movimentação, retirada, cancelamento, Escape, limites do painel, alvos, três rodadas e reinício. A atividade de equipe inclui as três passagens, demonstração, 15 atendimentos e reabertura para editar. Mais três cenários cobrem drag/devolução com mouse e teclado em desktop e tela compacta.

Checagem adicional com eventos de toque do Chrome: rolar sobre a mesa move a página sem selecionar nem deslocar peças. Girar para 844×390 com o painel aberto mantém destinos e Cancelar acessíveis. Inspeção das capturas após retirar o destaque nativo de toque, substituído pelo estado ativo do componente.

Testes do repositório: 71 testes, um skip existente, sintaxe, 52 skills válidas, scanner sem bloqueios e geração sem diff em docs/catalog.json. Não houve teste de VoiceOver/TalkBack nem Safari em aparelho real; esses itens permanecem na avaliação mobile.
