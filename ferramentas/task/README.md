# Executar uma tarefa com a skill task

No Hermes Bot ou no Claude Code, escreva a entrega desejada:

```text
/task corrigir o problema de retomada da aula no player
```

No Codex, mencione a skill com o seletor `$`:

```text
$task corrigir o problema de retomada da aula no player
```

O agente identifica o repo, cria pasta e branch próprias, implementa, abre PR, executa os testes,
acompanha o merge automático e encerra a pasta depois da conferência. O usuário não precisa escolher
nomes de branch nem aprovar cada etapa técnica. Sem descrição, a skill usa o pedido da conversa;
se não houver pedido, pergunta qual é a tarefa.

A fonte fica em [ferramentas/task/SKILL.md](../../ferramentas/task/SKILL.md).
O contrato Git continua em [CONTRIBUTING.md](../../CONTRIBUTING.md) e os bloqueios locais são executados
por `scripts/agent_work.py`. A skill conduz esses mecanismos; não substitui as proteções do GitHub.
Na execução por sessão única, o agente e sua sessão precisam continuar disponíveis até concluir.
Se a sessão parar, retome a mesma tarefa, pasta e PR. A operação por equipe depende do serviço
AgentFlix descrito no contrato v2 abaixo; instalar a skill não inicia esse serviço.

## Instalar em um bot ou computador

Neste clone `AgentsFlix/skills`, atualizado com a main, rode apenas para o agente desejado:

```bash
python3 scripts/install_task_skill.py --agent hermes
python3 scripts/install_task_skill.py --agent claude
python3 scripts/install_task_skill.py --agent codex
```

É possível repetir `--agent` na mesma chamada. Destinos:

| Agente | Pasta | Invocação |
|---|---|---|
| Hermes | `${HERMES_HOME:-~/.hermes}/skills/task` | `/task descrição` |
| Claude Code | `~/.claude/skills/task` | `/task descrição` |
| Codex | `~/.agents/skills/task` | `$task descrição` ou seletor de skills |

Para outro perfil Hermes, use `--hermes-home /caminho/do/perfil`. Para outro usuário local,
`--home /caminho/do/usuario`; o agente continuará precisando das próprias permissões Git e GitHub.
Nenhuma credencial é copiada pelo instalador. No Hermes, use `/reload-skills` depois da instalação.
Se o seletor de outro agente não atualizar, abra uma nova sessão.

O instalador copia a skill, portanto ela continua disponível após remover a worktree usada na instalação.
Uma nova execução atualiza instalações gerenciadas sem edições locais. Se alguém alterou a cópia instalada,
acrescentou arquivos ou já possui outra skill chamada task, a instalação recusa substituir o conteúdo.
Compare e preserve essa edição antes de resolver a diferença. `--check` apenas confere a instalação:

```bash
python3 scripts/install_task_skill.py --agent hermes --agent claude --agent codex --check
```

## O que esperar

- Ajuste técnico: segue automaticamente até o merge, se os checks e contratos permitirem.
- Outra tarefa na mesma área: o agente coordena o escopo antes de editar. A reserva local não é um bloqueio entre máquinas; PRs rascunho tornam o trabalho visível aos outros bots.
- CI ou conflito: o agente corrige e testa novamente. Sem correção disponível, mantém a pasta e o PR e informa o impedimento.
- Negócio, conteúdo e aprovações específicas pendentes: continuam seguindo o contrato da área.
- Bot revisor: é provisionado pelo orquestrador, não pelo instalador desta skill. Respeite os checks obrigatórios existentes e os resultados da revisão.

Não há hook de publicação a cada mensagem. A entrada é a skill e o encerramento só acontece depois da
confirmação do merge e, quando aplicável, do deploy. Na sessão única, a skill não cria outras conversas nem dispara outros bots; na equipe, essa coordenação pertence ao intermediário.

Compatibilidade verificada em 08/09/2026: [skills do Claude Code](https://code.claude.com/docs/en/skills),
[skills do Codex](https://learn.chatgpt.com/docs/build-skills) e o registrador `agent/skill_commands.py`
da instalação local do Hermes. No Codex, o nome da skill não registra um comando nativo `/task`;
use `$task` ou o seletor disponível na interface.


## Contrato v2: sessão única e equipe

A sessão única mantém o ciclo completo. Uma atribuição autenticada do orquestrador executa somente seu papel
na etapa; o intermediário coordena os próximos workers e controla Git, checks, merge e limpeza. A skill sozinha
não implementa essa infraestrutura. Os novos perfis só devem ser ativados após os testes do serviço.

Neste repositório, cada entrega reserva `reviews/<slug>.md`. Registros globais são consolidados em outra
tarefa; reservas antigas permanecem válidas. O registro individual informa o que está comprovado no momento
do commit; a prova de merge/deploy posterior fica no PR e no registro de execução, sem fabricar um resultado futuro.

`agent_work.py status` é somente leitura. `start --task-id ID --owner PERFIL` acrescenta metadados opcionais;
registros v1 continuam compatíveis. Isso não concede autoridade sobre outra worktree.
