# Restauração da URL T1:E3 com barra final

## Resultado esperado

A URL exata `https://agentsflix.ai/aulas/hermes-em-operacao/t1/e3/` deve
redirecionar permanentemente para `/assistir/hermes-em-operacao/t1e3/`.

O primeiro ajuste cobriu a variante sem barra. A validação em produção mostrou
308 e destino 200 nessa variante, mas 404 na variante com barra enviada pelo José.
Esta entrega adiciona a correspondência explícita sem alterar conteúdo ou streams.

## Verificação

- Testes e `check_site.py` locais.
- Check `validate` e deploy Vercel.
- HTTP da URL exata com barra: redirecionamento e destino 200.
