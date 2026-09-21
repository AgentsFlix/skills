# Exportação pública: acesso por série no Assistir

## Origem e escopo

- fonte privada: `AgentsFlix/agentsflix` PR #159, já mesclado;
- destino: painel administrativo e porta de acesso do acervo;
- arquivos publicados: `site/admin/acessos/admin-access.css`,
  `site/admin/acessos/admin-access.js`, `site/assistir/access.js` e
  `site/assistir/player.js`.

## Garantias

- `Conceder` usa o ciano de ação da marca; séries aparecem identificadas como
  `Série` no catálogo administrativo;
- o navegador mostra apenas as séries às quais a conta tem direito; uma URL
  direta de outra série recebe estado de acesso negado;
- o passe `assistir` e todo produto do tipo `pass` continuam concedendo o
  acervo completo; a autorização final de cada mídia permanece no endpoint
  protegido do servidor.

## Revisão da exportação

O `player.js` público continha mudanças recentes que não estavam na fonte
privada. Elas foram preservadas: a exportação foi reduzida ao filtro de séries
autorizadas, sem substituir os demais trechos do player.

## Validação

- sintaxe de todos os scripts alterados;
- `python3 -m unittest discover -s tests`;
- `python3 scripts/check_site.py`;
- revisão de diff sem segredos, dados de alunos ou alteração editorial.
- QA visual local com conta fictícia em 1440 × 900, 768 × 900 e 390 × 844:
  botão ciano legível, 44 px de altura e fluxo empilhado sem corte em telas
  compactas.
