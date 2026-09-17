# Checagem automática de produção

O workflow `Verify AgentFlix production` é disparado em toda integração na `main` que altera `site/`.
Ele espera o status `Vercel` do mesmo commit e só então confere, em `agentsflix.ai`, a resposta da página
`/assistir/`, o JSON de séries e cada capa de série disponível.

As capas públicas precisam responder com `image/webp` e ficar em até 400 KiB. O workflow não envia mídia,
não modifica a produção e não lê credenciais. Se um upload de vídeo chegar ao player por alteração do
`series.json`, o mesmo deploy também passa por esta checagem.
