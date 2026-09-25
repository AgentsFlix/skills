# Criar profile Hermes

Distribuição pública gerada da fonte privada `fontes/skills-autorais/criar-profile-hermes/`.
PR da fonte: https://github.com/AgentsFlix/agentsflix/pull/205.

O pacote foi preparado como card da fileira Operação (`catalog.skills`, estado
`published`), com um único slug e sem entrada duplicada em `catalog.packages`.
Inclui SKILL.md para Hermes, ZIP portátil e versão colável em `docs/prompt/`.
O conteúdo preserva seis etapas e exige validação no host antes de declarar operação.
O `distribution_ref` aponta à tag `criar-profile-hermes-v1.0.0`, criada no
commit público integrado `9d31ebffbf9bbda16b2a23c3387a49bc195fecf6`.
As URLs versionadas de SKILL.md, prompt e ZIP retornaram HTTP 200.

Verificações iniciais em 2026-09-24: `validate_skills.py` (55 skills),
`scan_skills.py` (0 bloqueadas; esta skill sem findings), testes unitários,
`check_site.py` (0 erros) e `agent_work.py check`. Após promover a entrada
ao catálogo visível, a curadoria `site/vitrine.json` foi atualizada para situar
a skill em “Ainda não montei nada”; o lote completo foi reexecutado antes do
merge e o check `validate` passou. O pacote foi
gerado por `build_hub.py --package criar-profile-hermes`; a versão colável e
o ZIP foram gerados do mesmo pacote, com recibo de integridade.

Card e ficha estão preparados, com caso de uso hipotético identificado. José
aprovou as variantes desktop e mobile da capa por hash em 2026-09-24. Os quatro
derivados (`desktop`, `mobile`, `wide`, `card`) foram enviados ao Cloudflare Images
e a entrega foi conferida no CDN. A ficha local carregou a capa em 1440, 768 e
390 px, sem overflow horizontal em 768 e 390 px. O merge do PR #141 em
`9d31ebffbf9bbda16b2a23c3387a49bc195fecf6` publicou o site: o catálogo
de produção mostrou `distribution_status=published`, e o card apareceu em
“Ainda não montei nada”. A ficha abriu com a capa e a orientação de colagem
pelo Hermes CLI. O CTA Hermes CLI copiou o comando com a tag publicada, e a
capa móvel carregou em 390 px sem overflow horizontal.

Limites: a distribuição não faz login Codex, não inicia gateway e não comprova
resposta no Telegram por si só. Tokens e User IDs não entram neste repositório.
Uma matriz sintética do procedimento escrito está no registro da fonte privada.
No piloto, a versão colável foi enviada ao Hermes pela CLI com acesso ao terminal
local e criou o profile temporário `afpilot`, sem clone, com 58 skills embutidas.
O executor inicial tinha terminal desativado e backend Docker, condição que a
skill agora identifica como bloqueio. A avaliação comportamental permanece
inconclusiva até os gates de login, memória, `Ok` e bot. Em 2026-09-24, José
autorizou publicar sem exigir o restante do piloto como gate editorial. A
release não comprova uma instalação funcional nem uma resposta Telegram.
