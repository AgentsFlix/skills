# Hover com mouse e clique na prévia

Antes: `1f29ab1`. O navegador do Zé estava com 752 px e mouse; o corte de 861 px desativava a prévia. Em 1440 px ela aparecia, mas a capa e o corpo não abriam a ficha.

A prévia agora depende da presença de mouse, sem corte por largura, e ignora eventos de toque. Um botão cobre capa e corpo; as ações ficam acima dele. Minha lista continua salvando sem abrir a ficha. A abertura de skill bloqueada mostra somente os pré-requisitos. A ampliação parte da geometria da capa.

| Largura com mouse | Antes | Hover clicável | Skill com pré-requisito |
|---|---|---|---|
| 1440 px | [Antes](1440-antes.webp) | [Depois](1440-hover.webp) | [Bloqueada](1440-bloqueado.webp) |
| 768 px | [Antes](768-antes.webp) | [Depois](768-hover.webp) | [Bloqueada](768-bloqueado.webp) |
| 752 px, aba relatada | [Antes](752-antes.webp) | [Depois](752-hover.webp) | [Bloqueada](752-bloqueado.webp) |
| 390 px | [Antes](390-antes.webp) | [Depois](390-hover.webp) | [Bloqueada](390-bloqueado.webp) |

Chrome real: passar sem parar, intenção de hover, clique na capa, clique no texto, Minha lista, botões, teclado, retorno de foco, bloqueio, rolagem, bordas e movimento reduzido. Em contexto móvel de toque, um tap abre a ficha diretamente, sem prévia. Roteiro no repo privado: `qa-hover-click.cjs`.

Esta entrega inclui os commits anteriores da reorganização, do padrão visual e dos controles de instalação. Publicação solicitada pelo Zé em 08/09/2026: corrigir o hover, fazer commit, PR e deploy. As pastas anteriores de `design-review/` registram as etapas locais de revisão.
