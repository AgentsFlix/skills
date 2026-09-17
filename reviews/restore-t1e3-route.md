# Restauração da rota T1:E3

## Objetivo

Restaurar `https://agentsflix.ai/aulas/hermes-em-operacao/t1/e3/`, que retornava
404, encaminhando-a permanentemente para a experiência publicada em
`/assistir/hermes-em-operacao/t1e3/`.

## Escopo

- Adicionar somente o redirecionamento legado no contrato da Vercel.
- Registrar o monorepo como fonte autoral da Web.
- Não alterar a experiência T1:E3, streams, conteúdo, domínio ou a PR de vídeo #1.

## Verificação

- Testes locais do repositório e validação de configuração.
- Check `validate` e deploy da Vercel no SHA do PR.
- Confirmação HTTP e navegador da URL pública depois do merge.

Os números de PR, SHAs e evidências finais são registrados após a integração.
