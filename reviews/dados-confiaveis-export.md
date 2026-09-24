# Confiabilidade da memória da conta

Exportação dos caminhos web autorizados, com correspondência verificada com a fonte integrada. Não inclui migrações, credenciais, dados de usuários ou documentação operacional privada.

## Entrega

- Sincronização serial com revisão esperada, nova tentativa e proteção de alterações feitas durante o envio.
- Saída da conta aguarda os dados pendentes; recuperação local é isolada por conta.
- Minha conta mostra sincronização, exportação JSON, conflitos e versões dos exercícios.
- Login preserva a memória antes de sair; o fluxo social aprovado permanece inalterado.
- Política de privacidade esclarece memória, exportação e limites do armazenamento local.
- Webhook distingue recebimento de processamento concluído e permite repetir operações que falharam. A loja permanece desligada.

## Verificação

- Fonte: testes de memória e webhook, matriz PostgreSQL/RLS e CI aprovados antes desta exportação.
- Layout conferido com dados sintéticos em 390, 768 e 1440 px, sem transbordamento horizontal. A captura ampla de 1440 px apresentou artefato do navegador; não equivale a homologação visual integral.
- Testes desta distribuição e deploy: resultados serão registrados no PR após execução.

## Limites

Não declara homologação completa entre aparelhos/abas ou restauração real de backup. Exportação no navegador não substitui backup do banco. O histórico mantém até dez versões anteriores por exercício; clientes antigos permanecem compatíveis durante a transição. Não foram alterados acessos de alunos nem ativadas compras.
