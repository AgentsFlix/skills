# Pesquisa de audiência com JEV

Entrega do pacote `pesquisa-audiencia-jev`, com versão própria `1.0.0`, preservando
a versão e a coleção de skills existentes no catálogo.

O gerador portátil reconhece `catalog.packages`, preserva os requisitos explícitos
de execução e sincroniza o texto de ativação. A identidade do pacote deve concordar
com a versão da entrada. Nomes duplicados entre coleções são recusados. O manifesto
`integrity.json` registra SHA-256 dos arquivos finais, após a transformação portátil
e antes da criação do ZIP; não inclui o próprio manifesto nem caches Python.

PR: https://github.com/AgentsFlix/skills/pull/133.

Escopo: pacote, `scripts/build_docs.py`, `tests/test_jev_package.py`, catálogo,
distribuições em `docs/` e descoberta em `site/para-agente/manifest.json` e `prompt.txt`.
Os arquivos de operação em `docs/operacao/` não pertencem a esta entrega.

Validação inicial: 6 testes do gerador com fixtures sintéticas, 10 testes do hub e
2 testes da distribuição existente de hábitos passaram. Os testes cobrem versão,
compatibilidade, ativação, ZIP completo, idempotência e preservação dos legados.

A exportação do pacote, validação completa e integração estão pendentes nesta
etapa. A tag `pesquisa-audiencia-jev-v1.0.0` e sua release só serão criadas a partir
do commit integrado e validado. Nenhuma chave ou corpus acompanha a distribuição.
