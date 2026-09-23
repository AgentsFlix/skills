# JEV na vitrine

Estado: **capa e ficha aprovadas; fonte privada integrada no commit `1318b6b`; destino público em PR #134**. O aceite específico recai sobre as duas artes e o texto apresentados para esta peça; hashes e registro do aceite ficam na fonte privada.

O pacote `pesquisa-audiencia-jev-v1.0.0` passa a ter um card visível em "Ainda não montei nada". A identidade sai de `catalog.packages` e entra em `catalog.skills` uma única vez. A versão e os comandos de instalação continuam vinculados à tag publicada. O ZIP regenerado é byte a byte igual ao da tag (SHA-256 `27977e36672df9525b303c93ff07fe3fe3b97b603a17412fcdad6f290079915a`).

A fonte da peça está no PR privado AgentsFlix/agentsflix#187; este destino usa o PR público AgentsFlix/skills#134. A mudança corrige `scripts/build_docs.py` para manter a versão de uma distribuição autoral mesmo quando ganha card. `tests/test_jev_package.py` cobre a migração sem alterar o artefato. Os arquivos alterados são o catálogo gerado, a curadoria exportada, o gerador, o teste e esta revisão.

Validação local: `python3 -m unittest discover -s tests -q` (161 testes, um ignorado), `python3 scripts/check_site.py` e `python3 scripts/agent_work.py check` passaram. Card, ficha e comandos de instalação foram conferidos em navegador local nas larguras 1440, 768 e 390 px. A prévia local usou os mesmos JPEGs aprovados que foram enviados ao Cloudflare Images; as quatro URLs responderam HTTP 206 `image/jpeg`. Ainda não há evidência de deploy ou produção.

| largura | antes: vitrine em produção, sem JEV | depois: prévia local do card | depois: prévia local da ficha |
|---|---|---|---|
| 1440 px | [antes](jev-vitrine-evidence/jev-before-1440.jpg) | [card](jev-vitrine-evidence/jev-card-1440.jpg) | [ficha](jev-vitrine-evidence/jev-ficha-1440.jpg) |
| 768 px | [antes](jev-vitrine-evidence/jev-before-768.jpg) | [card](jev-vitrine-evidence/jev-card-768.jpg) | [ficha](jev-vitrine-evidence/jev-ficha-768.jpg) |
| 390 px | [antes](jev-vitrine-evidence/jev-before-390.jpg) | [card](jev-vitrine-evidence/jev-card-390.jpg) | [ficha](jev-vitrine-evidence/jev-ficha-390.jpg) |

O preview Vercel do PR #134 ainda busca `catalog.json` da `main` pública pela regra atual de rewrite, enquanto a curadoria do PR já contém JEV. Essa diferença faz o onboarding do preview mostrar erro até o catálogo da `main` receber este PR. A QA acima usa catálogo e curadoria gerados na mesma revisão; a verificação de produção depois do merge é obrigatória.

Próximos gates: integrar este destino pelo PR #134; conferir o deploy de produção, a capa entregue pelo Cloudflare e o CTA na página pública. Nenhuma dessas etapas foi contada como concluída.
