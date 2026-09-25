# Memória do aluno: exportação Web

Fonte privada autoritativa: `AgentsFlix/agentsflix`, branch
`codex/memoria-aluno-finalizacao` (PR #214). Esta entrega pública contém só os
oito arquivos Web permitidos pelo manifesto `agentflix.json`; migrações SQL,
dados pessoais, credenciais e backups continuam fora deste repositório.

Objetivo: sincronizar o diagnóstico ECF e a Base ECF fragmentada por conta,
preservar a restauração entre sessões e preparar a configuração de TOTP no
painel administrativo. O cliente Web passa a gravar memória exclusivamente
pela RPC versionada.

Dependências: a chave de diagnóstico e as chaves fragmentadas precisam da
migração aditiva 0011 no banco (já conferida). A migração 0012, que remove a
escrita direta, só pode ser aplicada após o deploy deste cliente. A migração
0013, que exige sessão `aal2`, só pode ser aplicada após o único administrador
verificar seu TOTP. Nenhuma das duas migrações de fechamento acompanha o site.

Validação automática: suite Web do monorepo, testes de memória/contas e
PostgreSQL local. Validação visual em 1440, 768 e 390 px e ativação TOTP ainda
pendentes. PR deve permanecer rascunho até esses gates.
