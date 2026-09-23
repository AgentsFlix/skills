# JEV na vitrine

Estado: **capa e ficha aprovadas por José em 23/09/2026; integração e publicação pendentes**. O aceite específico recai sobre as duas artes e o texto apresentados para esta peça; hashes e registro do aceite ficam na fonte privada.

O pacote `pesquisa-audiencia-jev-v1.0.0` passa a ter um card visível em "Ainda não montei nada". A identidade sai de `catalog.packages` e entra em `catalog.skills` uma única vez. A versão e os comandos de instalação continuam vinculados à tag publicada. O ZIP regenerado é byte a byte igual ao da tag (SHA-256 `27977e36672df9525b303c93ff07fe3fe3b97b603a17412fcdad6f290079915a`).

A fonte da peça está no PR privado #187. Esta worktree pública contém apenas a geração local e a correção de `scripts/build_docs.py` para manter a versão de uma distribuição autoral mesmo quando ganha card. `tests/test_jev_package.py` cobre a migração sem alterar o artefato. Os arquivos alterados são o catálogo gerado, a curadoria exportada, o gerador, o teste e esta revisão.

Validação local: `python3 -m unittest discover -s tests -q` (161 testes, um ignorado), `python3 scripts/check_site.py` e `python3 scripts/agent_work.py check` passaram. Card, ficha e comandos de instalação foram conferidos em navegador local nas larguras 1440, 768 e 390 px. A capa foi servida por uma sobreposição **somente na prévia**; não há upload no Cloudflare Images nem evidência de deploy ou produção.

Próximos gates: integrar a fonte privada; publicar este destino por PR; conferir o preview da Vercel, o deploy de produção, a capa entregue pelo Cloudflare e o CTA na página pública. Nenhuma dessas etapas foi contada como concluída.
