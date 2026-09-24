# Login com Google e GitHub

Fonte autorizada: `apps/web/entrar/`, `apps/web/api/auth-providers.js` e `apps/web/design-system/primitives.css` do PR privado [AgentsFlix/agentsflix#200](https://github.com/AgentsFlix/agentsflix/pull/200). Este PR público exporta somente os arquivos necessários para `site/`.

O link mágico permanece disponível. Os botões OAuth só aparecem quando o Supabase informar que os provedores estão habilitados. O destino após login continua restrito a caminhos internos. Não há segredo de OAuth no código ou nesta revisão.

Em 24/09/2026, Google e GitHub ainda estavam desativados no projeto Supabase de produção. Portanto, o fluxo real exige configuração externa e homologação com cada provedor, inclusive conta de aluno com o mesmo e-mail. Não declarar login social ativo antes desse teste.

Verificações: `python3 -m unittest discover -s tests`, `python3 scripts/check_site.py`, paridade dos arquivos exportados com a fonte privada e QA sintético em 1440, 768 e 390 px. A prévia visual não comprova OAuth, acesso a materiais ou vinculação de contas.
