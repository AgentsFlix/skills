# Login com Google e GitHub

Fonte autorizada: `apps/web/entrar/`, `apps/web/api/auth-providers.js` e `apps/web/design-system/primitives.css` do PR privado [AgentsFlix/agentsflix#200](https://github.com/AgentsFlix/agentsflix/pull/200). Este PR público exporta somente os arquivos necessários para `site/`.

O link mágico permanece disponível. Os botões OAuth só aparecem quando o Supabase informar que os provedores estão habilitados. O destino após login continua restrito a caminhos internos. Não há segredo de OAuth no código ou nesta revisão.

Em 24/09/2026, os dois provedores estão habilitados. O José confirmou entrada pelo GitHub na prévia. O Google falhou no callback com `invalid_client`: o segredo do cliente configurado no Supabase precisa ser corrigido pelo titular, fora do código. O logotipo oficial foi salvo no Google Auth Platform, mas a verificação da marca depende de comprovar a propriedade de `agentsflix.ai` no Search Console. O projeto Supabase permanece no plano Free por decisão do José; o endereço técnico `*.supabase.co` do OAuth não é substituído nesta entrega.

Os botões usam logotipos e cores próprios de Google/GitHub, preservando rótulos acessíveis, foco e o link mágico. Não declarar Google homologado até teste real, inclusive conta de aluno com o mesmo e-mail.

Verificações: `python3 -m unittest discover -s tests`, `python3 scripts/check_site.py`, paridade dos arquivos exportados com a fonte privada e QA sintético em 1440, 768 e 390 px. A prévia visual não comprova OAuth, acesso a materiais ou vinculação de contas.
