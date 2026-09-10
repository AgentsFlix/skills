# Dados para renderizar

`tokens.json`: `brand` (nome da pessoa/marca), `background`, `foreground`, `accent` (#RRGGBB), `font_family` e `approval_status` (`proposed` ou `approved`). A aprovação declarada nos dados não é comprovada pelo renderizador. Use fonte disponível no ambiente; a inspeção verifica substituição de fonte.

`conteudo.json`: `static` com `title` e `body`; `carousel` com lista de objetos `title` e `body`, ao menos dois; `source_refs` com referências reais das pautas/acervo. Os textos vêm da pessoa ou de proposta marcada e rastreável. Não há print, foto ou geração de capa obrigatórios.

Execute `python3 scripts/render.py --tokens tokens.json --content conteudo.json --output nova-revisao`. Excesso de texto, cor inválida e contraste insuficiente geram erro antes de escrever. Reduza o texto ou divida em novos cards, mantendo o sentido.

A saída contém galeria.html, estatica.svg, carrossel-NN.svg, tokens.json, conteudo.json e arquivos.json com hashes. SVGs são fontes editáveis e imagens vetoriais; PNG/JPEG podem ser exportados em ferramenta disponível, sem alegar que os arquivos existem antes de exportar. A galeria é estática e local. Fontes, dimensões e arquivos devem ser inspecionados em renderização real antes de declarar template validado.
