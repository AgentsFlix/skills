# Restauração permanente do T1:E3

## Problema

Os redirecionamentos adicionados pelos PRs #91 e #92 enviavam a URL canônica
da aula para a atividade do Método ECF. A `main` também não continha o vídeo
T1:E3 no catálogo, então cada deploy Git desfazia a recuperação manual feita na
Vercel.

## Resultado

- `/aulas/hermes-em-operacao/t1/e3/` volta a abrir o player compartilhado.
- O catálogo contém “Construa o segundo cérebro da sua marca”, com o vídeo
  principal, três partes e 11 mini episódios de perguntas e respostas.
- `/assistir/hermes-em-operacao/t1e3/` continua sendo a atividade do Método ECF,
  aberta apenas pela parada “Já tenho o relatório”.
- A página exclusiva de compartilhamento usa a prévia aprovada em 1200 × 630 px.

## Verificação

- Testes de catálogo e páginas permanentes.
- Suite Python e `scripts/check_site.py`.
- QA do player no domínio público após o merge.
