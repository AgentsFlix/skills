# QA visual · responsabilidades do Laboratório JEV

Evidência da transformação da seção 03. `before-desktop.png` é a captura da versão
anterior fornecida pelo José; as três capturas `after-*` vêm do commit candidato.

| Arquivo | Largura | Resultado |
|---|---:|---|
| `after-1440.png` | 1440 px | três cartões lado a lado, alturas iguais |
| `after-768.png` | 768 px | sequência vertical, texto e imagens legíveis |
| `after-390.png` | 390 px | sequência vertical, sem overflow horizontal |

Playwright confirmou três SVGs completos com texto alternativo, sem erro de página,
request falho ou overflow horizontal nos três tamanhos. As cenas vetoriais também foram
comparadas com os rasters no Paper: paths reais, sem imagem embutida.
