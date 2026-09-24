# Criar profile Hermes

Distribuição pública gerada da fonte privada `fontes/skills-autorais/criar-profile-hermes/`.
PR da fonte: https://github.com/AgentsFlix/agentsflix/pull/205.

O pacote foi preparado como card da fileira Hermes Agent (`catalog.skills`, estado
`draft`), com um único slug e sem entrada duplicada em `catalog.packages`.
Inclui SKILL.md para Hermes, ZIP portátil e versão colável em `docs/prompt/`.
O conteúdo preserva seis etapas e exige validação no host antes de declarar operação.
O `distribution_ref` usa a branch pública do PR enquanto o pacote estiver em
revisão. O link de instalação da release só será anunciado depois de uma tag
estável integrada e verificada.

Verificações iniciais em 2026-09-24: `validate_skills.py` (55 skills),
`scan_skills.py` (0 bloqueadas; esta skill sem findings), testes unitários,
`check_site.py` (0 erros) e `agent_work.py check`. Após promover a entrada
ao catálogo visível, a curadoria `site/vitrine.json` foi atualizada para situar
a skill em “Ainda não montei nada”; o lote completo precisa ser reexecutado
após a integração com `main`. O pacote foi
gerado por `build_hub.py --package criar-profile-hermes`; a versão colável e
o ZIP foram gerados do mesmo pacote, com recibo de integridade.

Card e ficha estão preparados, com caso de uso hipotético identificado. A capa
ilustrada foi proposta na fonte privada, mas ainda depende de aprovação por hash;
derivados, QA visual em 1440/768/390 px, deploy e clique do CTA em produção
permanecem pendentes. Não anunciar a vitrine como publicada enquanto esses gates
não forem concluídos.

Limites: a distribuição não executa login Codex, não cria profile, não inicia gateway
e não comprova resposta no Telegram. Esses gates pertencem à execução da skill no
host da pessoa. Tokens e User IDs não entram neste repositório.
Uma matriz sintética do procedimento escrito está no registro da fonte privada.
Ela passou por inspeção textual, mas a avaliação comportamental permanece
inconclusiva; o pacote não deve ser promovido de `draft` com base só no CI.
