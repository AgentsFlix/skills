# Onboarding por conta

Pedido do José em 23/09/2026: após o primeiro login, mostrar as três etapas de orientação; depois de concluir, abrir diretamente o Início recomendado em novos logins ou sessões restauradas.

Esta entrega exporta somente a vitrine, o login e a memória Web a partir da fonte privada AgentFlix. O contrato de comportamento em `design.md` foi atualizado; nenhuma composição visual ou texto das telas foi redesenhado. As quatro páginas de leitura compartilhada foram regeneradas da mesma página inicial.

- Fonte privada: [AgentsFlix/agentsflix PR #189](https://github.com/AgentsFlix/agentsflix/pull/189).
- PR público: [AgentsFlix/skills PR #135](https://github.com/AgentsFlix/skills/pull/135).
- Testes previstos: `python3 -m unittest discover -s tests`, `python3 scripts/check_site.py`, `python3 scripts/agent_work.py check`, além dos checks do PR.
- Homologação complementar: concluir o onboarding com duas contas e conferir retorno em desktop e celular.
