# Aprofundamento humano · design system

## Escopo

Exportação pública seletiva do Aprofundamento humano e dos tokens Web compartilhados,
originada do merge privado `c05ddc4` (PR #132). A lógica, as perguntas, os cálculos e as
chaves de sessão dos seis assessments permanecem inalterados.

## Critérios

- catálogo, DISC e demais assessments consomem `site/design-system/tokens.css`;
- nenhuma definição `--af-*` é duplicada no CSS da área;
- conteúdo, URLs, privacidade local e navegação por teclado preservados;
- QA antes/depois em 1440, 768 e 390 px;
- testes públicos e `scripts/check_site.py` aprovados;
- merge na `main`, deploy Vercel e produção confirmados separadamente.

## Estado

Implementação exportada no PR público #114 a partir do merge privado `c05ddc4` (PR #132).

## Evidência local

- comparação visual antes/depois do herói, catálogo e entrada do DISC em 1440, 768 e 390 px;
- fluxos completos do DISC (30 escolhas) e Big Five (50 respostas), além da primeira
  ordenação do assessment de modos de aprendizagem;
- nenhum overflow horizontal, alvo interativo abaixo de 44 px, erro de página, resposta
  HTTP com erro ou requisição bloqueada;
- foco visível de 2 px nos três tamanhos e respostas mantidas apenas em `sessionStorage`;
- 21 capturas e relatório legível por máquina em
  `reviews/evidence/aprofundamento-design-system/`.

Merge, deploy e produção permanecem como estados separados até confirmação.
