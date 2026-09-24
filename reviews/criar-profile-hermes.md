# Criar profile Hermes

Distribuição pública gerada da fonte privada `fontes/skills-autorais/criar-profile-hermes/`.
PR da fonte: https://github.com/AgentsFlix/agentsflix/pull/205.

O pacote é de descoberta (`catalog.packages`, estado `draft`), sem card na vitrine.
Inclui SKILL.md para Hermes, ZIP portátil e versão colável em `docs/prompt/`.
O conteúdo preserva seis etapas e exige validação no host antes de declarar operação.

Verificações previstas: validação de skills, scanner, testes do repositório,
`check_site.py`, build idempotente e integridade do pacote.

Limites: a distribuição não executa login Codex, não cria profile, não inicia gateway
e não comprova resposta no Telegram. Esses gates pertencem à execução da skill no
host da pessoa. Tokens e User IDs não entram neste repositório.
