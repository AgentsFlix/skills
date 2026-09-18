# Fundo em vídeo da tela de login

## Origem e escopo

- Origem: `AgentsFlix/agentsflix` PR #112, commit `8765cdf`.
- Arquivos exportados: `site/entrar/index.html` e `site/entrar/login.css`.
- Mídia reutilizada: `site/brand/loading/agentflix-loading-desktop.mp4`.

## Resultado

A tela de login usa o vídeo calmo como fundo coberto, com camadas escuras para preservar a leitura do formulário. O arquivo é H.264, sem áudio, 640 × 360, 20 fps e 60.694 bytes. Pessoas com preferência por movimento reduzido recebem o fundo estático.

## Verificação

- `python3 -m unittest discover -s tests`
- `python3 scripts/check_site.py`
- Conferência visual responsiva em 1440, 768 e 390 px.
