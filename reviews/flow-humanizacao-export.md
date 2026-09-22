# Exportação pública: Modelo de Flow

## Objetivo

Distribuir a leitura pública `modelo-de-flow`, incluindo ilustrações, o leitor comum e a prévia compartilhável para WhatsApp.

## Origem e escopo

- Fonte autorizada: `AgentsFlix/agentsflix` PR [#163](https://github.com/AgentsFlix/agentsflix/pull/163), integrado no commit `41bdc92b876ee76e2db37c024cccdd165cf6d54b`.
- Destino: rotas e assets públicos em `site/`, gerados ou sincronizados a partir da fonte privada.
- A fonte privada continua autoritativa. Este PR não inclui documentos internos, credenciais ou dados de terceiros.

## Verificações locais

- `python3 -m unittest discover -s tests`: 149 testes aprovados, 1 ignorado.
- `python3 scripts/check_site.py`: aprovado.
- `python3 scripts/build_reading_shares.py --check`: três links verificados.
- `node tests/reading_shares.cjs`: compartilhamento, fallback, ativação nativa, cancelamento e erros verificados.
- A página estática contém o título, o endereço canônico com `?v=1`, a imagem JPEG de prévia e a montagem do leitor comum.

## Limites

- O merge deste PR ainda não é afirmado neste documento.
- A publicação em produção será confirmada somente após o deploy da Vercel e a abertura de `https://agentsflix.ai/compartilhar/modelo-de-flow/?v=1`.
