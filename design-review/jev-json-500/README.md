# QA do Laboratório JEV · 22/09/2026

Capturas sem dados pessoais reais ou credenciais. As falas e os nomes são fictícios.

| largura | antes | depois | JSON selecionado | triagem |
|---|---|---|---|---|
| 1440 | [antes](before-1440.png) | [depois](after-1440.png) | [JSON](json-selection-1440.png) | [fila](youtube-1440.png) |
| 768 | [antes](before-768.png) | [depois](after-768.png) | [JSON](json-selection-768.png) | [fila](youtube-768.png) |
| 390 | [antes](before-390.png) | [depois](after-390.png) | [JSON](json-selection-390.png) | [fila](youtube-390.png) |

Resultados nas capturas de interface são fixtures de teste, não inferências do modelo.
[Lote real concluído](live-full.png): 500 chamadas válidas, modelo resolvido
typesafe/jev-1.13-20260917. Não certifica acurácia ou calibração em comentários reais.

Verificados: ausência de overflow/erros JS; ida e volta campos/JSON; JSON incompleto;
seleção legível; inversão de ordem true/false sem trocar critérios; política sem rede;
busca, paginação, foco de teclado durante atualizações; pausa, reload, retomada,
erro 429 e mudança de rubrica com chamada em andamento. Movimento reduzido respeitado.
Não houve teste com leitor de tela/dispositivo físico nem aprovação visual humana.
