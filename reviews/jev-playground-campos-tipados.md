# Playground Jev · campos tipados sem resposta embutida

Exportação pública literal da fonte privada AgentFlix. Os editores de JSON foram
substituídos por campos de formulário para nome, características, ação decisiva,
instrução e critérios. Cada grupo mostra sua tipagem (`texto`, `lista de textos`,
`texto longo`, `choice` ou `mapa: texto → texto`) e explica sua função.

O campo `casa_confirmada` e a instrução que o priorizava foram removidos. A casa
esperada não é enviada ao JEV nem aplicada como correção após a resposta. Os
exemplos descrevem comportamentos observáveis e a pergunta prioriza escolhas
feitas sob risco, medo ou pressão.

A camada de código que deixava o texto transparente também foi removida. Campos
comuns preservam cor de texto durante a seleção e têm foco visível. Campos
obrigatórios ou opções repetidas bloqueiam a execução e anunciam o erro.

QA local: 1440, 768 e 390 px sem overflow; seleção de texto legível; navegação e
foco por teclado; movimento reduzido; validação de campos. Em chamadas reais via
OpenRouter, Hermione, Harry e Ron retornaram Grifinória, e Draco retornou
Sonserina. Ao trocar os dados por sinais de investigação e originalidade, a
decisão mudou para Corvinal, confirmando que a edição altera o payload e o
resultado.

CI público, preview Vercel e produção serão confirmados no PR.
