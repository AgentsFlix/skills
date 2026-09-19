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

Em validação. Evidências, PR, merge e produção serão registrados somente após confirmação.
