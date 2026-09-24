# Login com Google e GitHub

Fonte autorizada: `apps/web/entrar/`, `apps/web/api/auth-providers.js`, `apps/web/design-system/primitives.css` e `apps/web/vitrine.js` do PR privado [AgentsFlix/agentsflix#200](https://github.com/AgentsFlix/agentsflix/pull/200). Este PR público exporta somente os arquivos necessários para `site/`.

O link mágico permanece disponível. Os botões OAuth só aparecem quando o Supabase informar que os provedores estão habilitados. O destino após login continua restrito a caminhos internos. Não há segredo de OAuth no código ou nesta revisão.

Em 24/09/2026, os dois provedores estão habilitados. O José confirmou entrada pelo GitHub na prévia. A primeira tentativa Google falhou com `invalid_client`, mas um novo teste real concluiu o callback e abriu a área autenticada na prévia; o erro não se reproduziu. Nenhum segredo foi versionado. O logotipo oficial foi salvo no Google Auth Platform. A propriedade de `agentsflix.ai` foi verificada no Search Console; a nova revisão de marca apontou que a página inicial não explica com clareza a finalidade do app. A descrição do onboarding foi ajustada com a apresentação já existente nos metadados do site. É necessário publicar a página, solicitar nova verificação e confirmar o resultado antes de declarar o nome/logotipo visíveis no consentimento. O projeto Supabase permanece no plano Free por decisão do José; o endereço técnico `*.supabase.co` do OAuth não é substituído nesta entrega.

Os botões usam logotipos e cores próprios de Google/GitHub, preservando rótulos acessíveis, foco e o link mágico. O teste Google da prévia não substitui a homologação de uma conta de aluno com acesso nem a verificação pós-merge em produção.

Verificações: `python3 -m unittest discover -s tests`, `python3 scripts/check_site.py`, paridade dos arquivos exportados com a fonte privada e QA sintético em 1440, 768 e 390 px. A prévia visual não comprova OAuth, acesso a materiais ou vinculação de contas.
