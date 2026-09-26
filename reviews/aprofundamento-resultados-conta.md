# Histórico de resultados por conta

Exportação gerada da fonte privada autorizada para `site/aprofundamento-humano`.
Inclui integração com o login existente, histórico privado, exclusão e importação explícita de resultados locais.
Respostas individuais permanecem na aba; escores, interpretações, versão e datas compõem o resultado salvo.

Estrutura `assessment_results` e RPCs de salvar/excluir aplicadas no banco do produto.
Validação em produção: RLS ativo, anônimo bloqueado, writes diretos bloqueados, RPC de dono e isolamento A/B verificados com dados sintéticos revertidos.
José autorizou a publicação em 26/09/2026. O merge deste PR publica em produção; o estado final do deploy será registrado no PR.

QA na fonte: seis instrumentos, novo contexto, prompt preservado, falha/retry, troca de conta, exclusão, legado e paginação.
Layouts 1440/768/390 e teclado conferidos com dados sintéticos. SQL/RLS testados separadamente em PostgreSQL descartável.
166 testes públicos passaram (1 skip); check_site sem erros, validação e scanner de 55 skills sem bloqueios.
Testes locais não comprovam a interface publicada; verificar após deploy.
