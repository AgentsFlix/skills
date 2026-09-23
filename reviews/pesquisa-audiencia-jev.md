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

O pacote reúne quatro módulos sob uma entrada, sem preferências pessoais ou corpus
real. A credencial permanece em arquivo privado, com caminho XDG ou `--credential`.
O onboarding orienta a obter a chave da própria pessoa no JevCloud e validá-la sem
exibir seu valor. Execução requer terminal e Python 3.10+; chat sem terminal pode
conduzir o briefing e precisa declarar as etapas que não executou.

Validação final local, com Python 3.12: 162 testes passaram, incluindo 10 testes do
pacote e gerador. `check_site.py` e `validate_skills.py` passaram. O scanner Hermes
pinado v2026.8.27, trust community, aprovou as 53 skills; o pacote recebeu `safe`,
com cinco observações médias de subprocessos locais e links relativos internos.
Nenhum scanner ou regra de segurança foi reduzido.

O build é idempotente. ZIP e distribuição portátil têm os mesmos arquivos e bytes;
fonte e portátil possuem manifestos próprios para seus respectivos `SKILL.md`.
Os testes conferem versão, compatibilidade, autor, ativação, hashes, módulos e ausência
de histórico local. A versão do catálogo e as 51 entradas de `catalog.skills` foram
preservadas integralmente. A verificação de escopo do helper passou.

A integração depende da conclusão da fonte autorizada. A tag
`pesquisa-audiencia-jev-v1.0.0` e sua release só serão criadas a partir do commit
integrado e validado. Estes checks locais não comprovam autenticação real de um
novo usuário nem equivalem a calibração semântica de uma pesquisa.
