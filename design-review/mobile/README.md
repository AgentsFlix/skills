# Navegação e pré-play mobile

Avaliação em Chrome real com toque emulado, 10/09/2026. Base: `db25f2fd8d08096d28a73ec22bd069aefb594554`. Não foi executado teste em iPhone/Android físicos.

## Problemas e correções

- Menu: alvos de aproximadamente 20 px de altura; agora pelo menos 44 × 44 px, com rolagem horizontal contida em larguras estreitas.
- Busca: campo com cerca de 17 px de altura e texto de 13 px; agora 44 px e texto de 16 px.
- Pré-play: conteúdo acima da tela em paisagem; agora o cartão cabe na área útil e rola até Começar.
- Voltar no pré-play: uma camada transparente interceptava o clique; agora a seta fica acima dessa camada.

## Comparação

| Estado | Antes | Depois |
|---|---|---|
| Início 1440 | [Captura](antes-1440x1000-inicio.png) | [Captura](depois-1440x1000-inicio.png) |
| Início 768 | [Captura](antes-768x1000-inicio.png) | [Captura](depois-768x1000-inicio.png) |
| Início 390 | [Captura](antes-390x844-inicio.png) | [Captura](depois-390x844-inicio.png) |
| Início em paisagem | [Captura](antes-844x390-inicio.png) | [Captura](depois-844x390-inicio.png) |
| Pré-play 1440 | [Captura](antes-1440x1000-preplay.png) | [Captura](depois-1440x1000-preplay.png) |
| Pré-play 768 | [Captura](antes-768x1000-preplay.png) | [Captura](depois-768x1000-preplay.png) |
| Pré-play 390 | [Captura](antes-390x844-preplay.png) | [Captura](depois-390x844-preplay.png) |
| Pré-play em paisagem | [Captura](antes-844x390-preplay.png) | [Captura](depois-844x390-preplay.png) |

[Começar acessível após rolar em paisagem](depois-844x390-preplay-acao.png).

## Reproduzir a regressão

O servidor deve servir `site/` e `/catalog.json` da mesma worktree. Instalar `playwright-core` no ambiente de QA e apontar `NODE_PATH` quando ele estiver fora do checkout. O navegador é o Google Chrome instalado, com suporte real a H.264.

```sh
QA_BASE=http://127.0.0.1:8772 QA_OUT=/tmp/mobile-qa node tests/mobile_journeys.cjs
```

O roteiro passa pelo onboarding, busca, leitura com tema/tamanho, retorno, pré-play e seu botão de saída. Verifica 320/360/390/430/768/1440 px, paisagem 844 × 390 e altura reduzida 390 × 400. Depois executa mídia real: rola o pré-play, começa o vídeo, cruza uma parada de comando, confere o texto copiado, exige pausa após copiar e clique explícito para continuar, gira a tela e volta à série. A abertura cinematográfica é omitida via marcador de sessão; o onboarding de escolha é percorrido.

Não simula teclado nativo, VoiceOver ou TalkBack. Não atesta paridade do app, sincronização ou métricas de desempenho de campo. O JSON completo e as capturas adicionais ficam na pasta indicada por QA_OUT.
