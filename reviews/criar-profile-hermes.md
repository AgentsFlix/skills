# Criar profile Hermes

Distribuição pública gerada da fonte privada `fontes/skills-autorais/criar-profile-hermes/`.
PR da fonte: https://github.com/AgentsFlix/agentsflix/pull/205.

O pacote é de descoberta (`catalog.packages`, estado `draft`), sem card na vitrine.
Inclui SKILL.md para Hermes, ZIP portátil e versão colável em `docs/prompt/`.
O conteúdo preserva seis etapas e exige validação no host antes de declarar operação.

Verificações executadas em 2026-09-24: `validate_skills.py` (55 skills),
`scan_skills.py` (0 bloqueadas; esta skill sem findings), 164 testes unitários
(1 skipped), `check_site.py` (0 erros) e `agent_work.py check`. O pacote foi
gerado por `build_hub.py --package criar-profile-hermes`; a versão colável e
o ZIP foram gerados do mesmo pacote, com recibo de integridade.

Limites: a distribuição não executa login Codex, não cria profile, não inicia gateway
e não comprova resposta no Telegram. Esses gates pertencem à execução da skill no
host da pessoa. Tokens e User IDs não entram neste repositório.
