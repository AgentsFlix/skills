# O tempo que você ainda não gastou — publicação do Modo Ler

## Origem e escopo

A fonte privada é o PR [AgentsFlix/agentsflix#182](https://github.com/AgentsFlix/agentsflix/pull/182), integrado na `main` como `373a1eb466817271c7dc84aaffea7d1553f57eea`. Esta entrega copia somente caminhos permitidos pelo exportador do componente Web para `site/`; não altera o ensaio nem sua capa.

O registro acrescenta a leitura integral no `#ler`: 57 blocos narrativos, seis posições de imagem e um capítulo contínuo. A capa WebP corresponde ao hash aprovado `7f57044db9d2a150bad79f47ddee59b8cd96b31fdd060477acd3e86906b9d315`. O leitor não apresenta instalação, som, dissolução nem virada de página.

A exportação também traz três JPEGs editoriais e regenera os três links compartilhados existentes, pois a fonte privada do manifesto e do HTML da vitrine mudou antes desta publicação. Os arquivos são consumidores derivados da fonte; não foram reescritos neste repositório.

## Verificações e limites

O candidato público passou por `check_site.py`, `build_reading_shares.py --check`, `validate_skills.py`, `scan_skills.py` (Python 3.11), `build_docs.py` e pela suíte completa de 150 testes (um skip preexistente). O QA local antes/depois do catálogo e a abertura direta do leitor em 1440/768/390 px estão em `design-review/newsletter-tempo-publicar/`. Nos três tamanhos, o leitor não apresentou rolagem horizontal. Os hashes de texto e arte estão documentados na entrega de origem.

O merge do PR público, o deploy da Vercel e a abertura real em produção ainda são gates posteriores a esta revisão. Prévia de PR e checks verdes, sozinhos, não comprovam produção. A sincronização das sete artes da edição ao Paper permanece pendente na fonte privada e não é representada como realizada aqui.
