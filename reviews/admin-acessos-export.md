# Painel administrativo de acessos

Exportação pública das rotas `site/admin/acessos/` e `site/conta/` a partir da
fonte autoritativa privada, integrada em `AgentsFlix/agentsflix#124`.

## Contrato entregue

- o link administrativo aparece na conta somente para perfis com papel `admin`;
- a rota separa os estados carregando, sem sessão, sem permissão, disponível e indisponível;
- administradores podem localizar uma conta, consultar direitos e histórico, definir validade,
  conceder ou atualizar acesso e revogar com confirmação em duas etapas;
- a interface usa apenas a chave pública do Supabase e RPCs protegidas; não há chave de serviço;
- o histórico é exibido pela RPC administrativa, sem acesso direto do navegador à tabela privada.

## Verificação

- testes de contrato e sintaxe do artefato público;
- suíte completa do repositório e `scripts/check_site.py`;
- comparação do exportador sem diferenças após a cópia;
- QA responsivo em 1440, 768 e 390 px na fonte autoritativa;
- migração correspondente aplicada e verificada no projeto Supabase de produção antes desta exportação.
