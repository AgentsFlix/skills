# Aprofundamento humano · DISC

## Origem e escopo

- Exportação seletiva da fonte autoral AgentFlix integrada pelo PR privado correspondente.
- Nova rota pública `site/aprofundamento-humano/` e entrada de navegação em `site/index.html`.
- DISC disponível; modos de aprendizagem, modo de agir, Big Five, Eneagrama e MBTI aparecem explicitamente como pesquisa ou avaliação.
- Nenhuma resposta do assessment é transmitida ou associada à conta.

## Design e comportamento

- Mantidos os tokens públicos de `design.md`: fundo `#141414`, painéis `#181818`, ciano `#30B0C7`, Archivo, cards de 12 px, escolhas de 16 px, hero de 24 px e ações em cápsula.
- QA visual conferido em 1440, 768 e 390 px. O diagrama foi afastado do título no breakpoint intermediário após a primeira inspeção.
- QA funcional percorreu as 30 escolhas, bloqueios entre rodadas, retorno, cálculo e resultado.
- Cenário controlado: `D 34`, `I 33`, `S 26`, `C 7`; soma `100`.

## Verificação

- `python3 -m unittest tests.test_aprofundamento_humano -v`
- `python3 -m unittest discover -s tests`
- `python3 scripts/check_site.py`
- console do navegador sem erros ou avisos
