# Contrato v2 para desenvolvimento em equipe

Entrega: [PR77](https://github.com/AgentsFlix/skills/pull/77), branch `codex/hermes-contrato-v2`.

Distribui o helper v2, a skill task portátil e o guia de uso neste repositório.
O helper preserva registros v1, acrescenta identificação opcional da entrega e mantém status somente leitura.
A skill distingue sessão única de atribuição autenticada; revisão e QA avaliam o SHA exato e os registros de entrega ficam separados.
O integrador solicita a limpeza da própria entrega; o intermediário proprietário técnico confirma as condições e executa o encerramento.

Escopo: AGENTS, CONTRIBUTING, helper e instalador da task, seus testes, ferramentas/task e este registro.
A documentação operacional fica junto da skill. O diretório de documentação gerada continua reservado à sua entrega correspondente.

## Verificação

- 87 testes do repositório passaram, incluindo 13 do helper e 7 do instalador.
- A checagem do site passou; as 52 skills foram validadas e o scanner pinado não encontrou bloqueios.
- A regeneração de docs e catálogo, executada em uma cópia temporária, produziu os mesmos arquivos e hashes.
- O helper confirmou branch atualizada, pasta própria e arquivos dentro dos escopos reservados.
- O helper, instalador e respectivos testes mantêm os bytes da versão compartilhada; apenas a documentação foi adaptada para referências públicas.
- Status e hashes dos arquivos pendentes do checkout de controle foram preservados.

Os ensaios do instalador usaram apenas pastas temporárias. Nenhum perfil, hook ou serviço foi instalado ou ativado.
A revisão independente, o check validate no HEAD final e a confirmação de publicação aplicável precedem o encerramento.
Esta nota não declara merge ou deploy ainda não observados.
