# Conteúdo extra no T1:E3

## Objetivo

- Mostrar `Conteúdo extra` desde o início de “Construa o segundo cérebro da sua marca”.
- Abrir as perguntas e respostas sem perder a posição da aula principal.
- Exibir os mini episódios em lista no desktop e no mobile.

## Comportamento

- O botão aparece apenas em episódios com uma ação final de vídeos extras.
- Ao abrir antecipadamente, `Voltar ao episódio` restaura o mesmo instante da aula.
- Ao chegar naturalmente à parada final, o fluxo continua concluindo o episódio como antes.
- Cada mini episódio continua usando o player principal e a timeline própria.

## Validação

- `python3 -m unittest discover -s tests`
- `python3 scripts/check_site.py`
- QA de navegador em 1440, 768 e 390 px: 11 mini episódios e três colunas por linha (`número`, `miniatura`, `título`).
- QA funcional determinístico: abriu o conteúdo extra aos 137 s, avançou o mini episódio de 0 s para 10 s e voltou à aula aos mesmos 137 s.

## Evidência visual

| Largura | Antes | Botão no início | Lista final |
|---|---|---|---|
| 1440 px | [captura](evidence/content-extra-t1e3/before-1440.png) | [captura](evidence/content-extra-t1e3/after-button-1440.png) | [captura](evidence/content-extra-t1e3/after-1440.png) |
| 768 px | [captura](evidence/content-extra-t1e3/before-768.png) | [captura](evidence/content-extra-t1e3/after-button-768.png) | [captura](evidence/content-extra-t1e3/after-768.png) |
| 390 px | [captura](evidence/content-extra-t1e3/before-390.png) | [captura](evidence/content-extra-t1e3/after-button-390.png) | [captura](evidence/content-extra-t1e3/after-390.png) |

As duas páginas permanentes de aula foram regeneradas porque compartilham o mesmo template do player.
