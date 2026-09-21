# Exportar proteção de Assistir

## Objetivo

Publicar no destino `site/` a camada de acesso assinada para o catálogo
`/assistir/`, cuja fonte autoritativa foi integrada em
AgentsFlix/agentsflix#151.

## Escopo exportado

- Gate de sessão e direito `assistir` para catálogo, aulas e materiais
  interativos.
- Endpoint `/api/stream-token` e player com token de curta duração do
  Cloudflare Stream.
- CTA de conta e rótulo administrativo para o acervo.

## Preservação

O patch foi aplicado sobre a `main` pública atual, preservando as melhorias
mais recentes do player que não pertencem a esta entrega.

## Verificações

- `node --check` nos novos scripts e no player.
- Suite pública e checagem de site antes da integração.
- PR privado de origem: AgentsFlix/agentsflix#151.

## Limitação conhecida

Os vídeos só passam a rejeitar URLs com UID após a validação de produção e a
ativação de `requireSignedURLs` no Cloudflare Stream.
