# Exportação pública · Aprofundamento humano

PR público: https://github.com/AgentsFlix/skills/pull/120

## Objetivo

Publicar no site AgentFlix o Aprofundamento humano e o prompt portátil de
resultados, a partir da fonte privada já integrada no commit
`87e4a3d50d5df58dc6dccde35e61ba2678be8cfd`.

## Escopo exportado

- `site/aprofundamento-humano/`
- `site/design-system/`
- `site/package.json` e `site/package-lock.json`

O exportador privado conferiu a lista explícita de caminhos autorizados e a
convergência arquivo a arquivo. Não leva fontes privadas, respostas individuais,
dados de alunos nem credenciais.

## Verificação executada

- `python3 -m unittest discover -s tests`: 141 testes, 1 skip, sem falhas;
- `python3 scripts/check_site.py`: scripts e JSON públicos válidos;
- `python3 scripts/validate_skills.py`: validação concluída;
- `/opt/homebrew/bin/python3.11 scripts/scan_skills.py`: 52 skills, nenhuma bloqueada;
- `npm --prefix site ci && npm --prefix site run check:icons`: ícones gerados conferidos;
- QA em servidor local do destino público (`site/`), com 1440, 768 e 390 px;
- seis resultados, cópia, download de bytes idênticos, Escape, foco contido/restaurado,
  reabertura, legado sem data e fallback de clipboard exercitados em 18 combinações.

As evidências de QA ficam fora do repositório público em diretórios temporários desta
execução. O PR aponta a fonte privada e os comandos reproduzíveis, sem expor dados
de pessoas nem resultados reais de assessment.

## Limites

O navegador gera o prompt localmente. O site não grava memória em agentes nem cria
lembretes externos; essas ações dependem da capacidade e da confirmação do agente
que receber o prompt.
