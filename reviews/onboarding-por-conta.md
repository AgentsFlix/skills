# Onboarding por conta

Pedido do José em 23/09/2026: após o primeiro login, mostrar as três etapas de orientação; depois de concluir, abrir diretamente o Início recomendado em novos logins ou sessões restauradas.

Esta entrega exporta somente a vitrine, o login e a memória Web a partir da fonte privada AgentFlix. O contrato de comportamento em `design.md` foi atualizado; nenhuma composição visual ou texto das telas foi redesenhado. As quatro páginas de leitura compartilhada foram regeneradas da mesma página inicial.

- Fonte privada: [AgentsFlix/agentsflix PR #189](https://github.com/AgentsFlix/agentsflix/pull/189).
- PR público: [AgentsFlix/skills PR #135](https://github.com/AgentsFlix/skills/pull/135).
- Testes locais aprovados: `python3 -m unittest discover -s tests` (161 testes, 1 ignorado), `python3 scripts/check_site.py` e `python3 scripts/agent_work.py check`. CI e deploy ainda a confirmar.
- Homologação complementar: concluir o onboarding com duas contas e conferir retorno em desktop e celular.
