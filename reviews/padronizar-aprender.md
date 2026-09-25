# Aprender — aplicação do Paper no site público

## Objetivo e origem

Publicar em `site/aprender/styles.css` a versão visual aprovada da página “04 · Aprender” no Paper. A fonte privada é `apps/web/aprender/styles.css`, integrada em `AgentsFlix/agentsflix` pelo PR #216. Exportação feita pelo script `scripts/export_public.py` da fonte privada; o arquivo público e a fonte têm SHA-256 idêntico (`0811c9afea4319b84e0ebcc27cadfde18bf27b52702ae32fe419c7661e9ac5b9`).

## Escopo

- `site/aprender/styles.css`: tipografia Archivo 600/700 nos rótulos e ação, borda sutil nos cards e retorno legível no celular.
- `reviews/padronizar-aprender.md`: registro da entrega.

HTML, conteúdo e artes não mudam. A conferência visual da fonte privada foi feita em 1440, 768 e 390 px: sem overflow, com ambas as artes carregadas, fontes e borda verificadas. A versão exportada contém exatamente o mesmo CSS.

## Verificação

- `python3 -m unittest discover -s tests`
- `python3 scripts/check_site.py`
- `python3 scripts/agent_work.py check`
- PR público, checks remotos e deploy: registrar após confirmação.

Limite: testes e equivalência de arquivo não comprovam, sozinhos, o deploy; conferir o CSS servido por `agentsflix.ai` depois do merge.
