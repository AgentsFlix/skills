# Limite do link mágico

## Origem e escopo

- Origem: componente Web autoritativo do AgentFlix, PR #157.
- Arquivos exportados: `site/entrar/auth-utils.mjs`, `site/entrar/index.html` e `site/entrar/login.css`.

## Resultado

A rota `/entrar/` informa a espera de 60 segundos quando o Auth limita um novo pedido e também no estado de confirmação do envio. A mensagem reduz tentativas repetidas sem expor detalhes do provedor de e-mail.

## Verificação

- testes e scanner do repositório público;
- sintaxe JavaScript da rota;
- conferência responsiva em 1440, 768 e 390 px.
