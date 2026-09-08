# Confirmação de instalação no topo

Pedido aprovado em 08/09/2026. Base antes: `964d286`. Branch local `feat/vitrine-onboarding`; sem novo PR ou publicação.

| Largura | Antes | Topo | Marcado | Junto ao comando |
|---|---|---|---|---|
| 1440 px | [Antes](1440-antes.webp) | [Topo](1440-topo.webp) | [Instalado](1440-marcado.webp) | [Comando](1440-comando.webp) |
| 768 px | [Antes](768-antes.webp) | [Topo](768-topo.webp) | [Instalado](768-marcado.webp) | [Comando](768-comando.webp) |
| 390 px | [Antes](390-antes.webp) | [Topo](390-topo.webp) | [Instalado](390-marcado.webp) | [Comando](390-comando.webp) |

O topo mantém `Instalar em…` como ação principal. `Marcar como instalado` aparece também ali, com o mesmo estado do botão junto ao comando. Ambos mudam para `✓ Instalado` e permitem remover a marcação. `Minha lista` tem rótulo visível próprio. No celular, as ações empilham. O foco visível nas capturas marcadas vem da verificação por teclado.

QA em Chrome real: marcar e desmarcar nas duas posições, independência da lista, foco, um anúncio de status por ação, dependências, persistência após recarregar e entre abas. Capturas com viewport de 900 px de altura. 20 testes unitários e `check_site.py` aprovados. A regressão de design preservou os 408 comandos no DOM/clipboard e os controles de navegação existentes.

Contrato atualizado em [design.md](../../design.md). Roteiro no repo privado: `ferramentas/qa-player/qa-install-top.cjs`.
