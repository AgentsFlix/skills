# Histórico de resultados por conta

Exportação gerada da fonte privada autorizada para `site/aprofundamento-humano`.
Inclui integração com o login existente, histórico privado, exclusão e importação explícita de resultados locais.
Respostas individuais permanecem na aba; escores, interpretações, versão e datas compõem o resultado salvo.

Pré-requisito de publicação: estrutura `assessment_results` e RPCs de salvar/excluir aplicadas no banco do produto.
O merge deste PR publica em produção e permanece pendente da autorização de deploy.

QA na fonte: seis instrumentos, novo contexto, prompt preservado, falha/retry, troca de conta, exclusão, legado e paginação.
Layouts 1440/768/390 e teclado conferidos com dados sintéticos. SQL/RLS testados separadamente em PostgreSQL descartável.
Testes locais não comprovam funcionamento em produção; verificar após deploy.
