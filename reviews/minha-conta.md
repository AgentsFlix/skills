# Minha conta

## O que foi publicado

- rota `/conta/` protegida pela sessão do Supabase;
- leitura do próprio perfil autenticado;
- edição restrita a nome e telefone;
- e-mail exibido como somente leitura;
- retorno ao login com destino seguro quando não há sessão;
- acesso à conta depois de entrar sem outro destino pendente.

## Verificações

- interface conferida em Chrome nas larguras 1440, 768 e 390 px, sem overflow ou erro de página;
- estados autenticado, desconectado e indisponível conferidos;
- atualização envia apenas `name` e `phone`;
- validação completa do repositório executada antes da integração.

A rota usa exclusivamente a configuração pública de autenticação já entregue pelo site. Nenhuma credencial foi adicionada ao repositório.
