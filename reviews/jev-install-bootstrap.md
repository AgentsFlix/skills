# Bootstrap da Pesquisa de audiência com JEV 1.0.1

O pacote público é gerado da fonte privada `fontes/skills-autorais/pesquisa-audiencia-jev`.
A correção atende a um relato de instalação incompleta após cópia do prompt. O cliente JEV já
existia no pacote; `yt-dlp` estava declarado como dependência externa.

Esta revisão publica a ativação que exige o pacote completo, diagnóstico de integridade e
preparo isolado de dependências. O ZIP, a versão colável e o catálogo são derivados do mesmo
gerador. Não inclui credenciais nem corpus de terceiros.

PR privado: https://github.com/AgentsFlix/agentsflix/pull/212. PR público:
https://github.com/AgentsFlix/skills/pull/147.

Verificações locais: 12 testes específicos do pacote, 165 testes públicos, `check_site.py`,
integridade do ZIP e diagnóstico de cliente interno ausente. O ZIP de 47 arquivos foi extraído
em diretório temporário; `doctor`, `install-deps --execute` e novo `doctor` passaram com Python
3.10, `yt-dlp` 2026.08.19 e PyYAML disponíveis no ambiente isolado. Nenhuma credencial foi usada.
Teste técnico não comprova coleta nem classificação no ambiente da pessoa que relatou o problema.
