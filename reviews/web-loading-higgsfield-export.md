# Exportação: animação da tela de carregamento

Atualiza apenas o vídeo horizontal usado no carregamento Web.

- Fonte: componente Web já integrado no monorepo privado, PR #109.
- Destino: `site/brand/loading/agentflix-loading-desktop.mp4`.
- Entrega: H.264, 640×360, 20 fps, sem áudio, 7,05 s e 60.694 bytes.
- A marca, o seletor de vídeo e o fallback de movimento reduzido permanecem
  inalterados.

Validação prevista: testes públicos, `scripts/check_site.py` e conferência em
navegador nos tamanhos 1440, 768 e 390 px.
