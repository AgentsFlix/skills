# Hormozi: leitura humana na ficha AgentFlix

O exemplar aprovado foi integrado à ficha de produção. Somente Hormozi apresenta as abas Para o humano e Usar a skill. A capa, os comandos, a confirmação de instalação, a lista e o onboarding usam a implementação existente.

As pastas `antes/` e `depois/` mostram 1440, 768 e 390 px. Em `depois/`, `*-ficha.png` registra a entrada pela capa; os arquivos por tema e capítulo mostram a leitura. `*-menu-ampliado.png` verifica texto ampliado em janela baixa. `qa.json` registra a matriz executada.

Verificação em Chrome real: duas aparências, cinco tamanhos, seis capítulos, três larguras, imagens, texto autoral, equação, mapa, cópia do primeiro pedido, checklist, oito destinos de instalação, troca de abas com posição preservada, teclado, recarga, preferência entre abas, erro de carregamento com nova tentativa e inspeção das 51 fichas para confirmar a exclusividade. A regressão da vitrine cobriu os 29 caminhos do guia, pré-requisitos, cópia, instalação e estado entre abas.

Fonte editorial e exportação ficam no repositório privado AgentFlix: `prototipos/para-o-humano/hormozi/reader.json` e `producao/leitura-humana/exportar.py`. O JSON e as duas imagens são cópias integrais. Os módulos `site/human-reader.js` e `site/human-reader.css` pertencem à interface de produção.
