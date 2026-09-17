# Publicação do Login + DB

## Objetivo

Publicar a rota `/entrar/` gerada da fonte autoritativa privada e homologar o link
mágico real no domínio AgentFlix. A loja continua desligada.

## Origem

- fonte: componente Web autoritativo do AgentFlix;
- banco: migration de perfis aplicada e verificada no projeto Supabase AgentFlix.

## Escopo público

- `site/entrar/`;
- `site/index.html` e `site/vitrine.css`, depois da liberação da reserva paralela;
- `site/vercel.json` somente se houver diferença gerada.

## Validação prevista

- testes e scanner do repositório público;
- sintaxe JavaScript da rota;
- QA em Chrome a 1440, 768 e 390 px;
- produção: HTTP 200, configuração Supabase correspondente, envio do link mágico,
  sessão persistente, perfil sincronizado e logout.

## Limites

Não ativa `STORE_ENABLED`, Stripe, conteúdo protegido ou SMTP próprio. Não publica
credenciais, referências privadas ou dados de usuários.
