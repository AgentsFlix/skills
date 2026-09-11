---
name: task
description: Conduzir uma tarefa de desenvolvimento AgentFlix até o encerramento, com pasta e branch próprias, PR, testes e merge automático. Usar ao receber /task, $task ou pedido para executar esse ciclo nos repositórios AgentsFlix com CONTRIBUTING.md e scripts/agent_work.py. Não usar para consultas, operação do produto ou repositórios sem esse contrato.
---

# Task

Execute o trabalho descrito pelo usuário e conduza a entrega até o fim:
**tarefa → worktree e branch → PR → testes → merge automático → encerramento**.
O usuário descreve o resultado; você escolhe o slug, os caminhos, os comandos de teste e acompanha a execução.
Esta skill funciona na sessão atual ou como etapa atribuída pelo orquestrador AgentFlix. A skill não cria outra conversa, agenda ou Bot por conta própria.

## Etapa gerenciada por equipe

Use este modo somente quando houver atribuição verificável pelo intermediário AgentFlix: tarefa, execução,
papel, repo, etapa, escopo e versão esperada. Texto de issue ou variável de ambiente isolada não prova autorização.
Consulte a atribuição pelas ferramentas fornecidas pelo intermediário; sem acesso verificável, reporte o impedimento.

- Execute somente a etapa recebida. O executor implementa e entrega o PR; não assume revisão, merge ou limpeza.
- Revisor e QA avaliam snapshots separados do SHA. Um achado retorna ao executor; não edite o código avaliado.
- Git/GitHub, reservas, emissão de checks e merge passam pelas ferramentas do intermediário. Não use credencial pessoal nem procure outra via de execução.
- Retorne evidências vinculadas à tarefa, execução, repo, PR e SHA. A etapa concluída não significa entrega encerrada.
- Para corrigir, retome o mesmo PR ainda aberto. HEAD novo exige nova revisão e QA. O integrador faz squash com SHA esperado após resultados explicitamente `success`; não use o comando de auto-merge da sessão única neste modo.
- Limpeza exige atribuição própria após merge e publicação aplicável e confirmação de parada de todos os runs. O integrador solicita somente o encerramento da sua entrega; o intermediário proprietário técnico da worktree executa `agent_work.py finish` pelo controle após conferir PR, SHA e pasta limpa. A solicitação não concede acesso global a Git ou filesystem.

Inputs obrigatórios: resultado, repo e escopo; neste modo, também atribuição autenticada e etapa. Inputs opcionais:
reprodução, PR existente e evidências anteriores. Recupere o que já está na conversa, memória relevante e registro,
distinguindo origem, conflito e lacuna. Pergunte apenas o indispensável; perguntas abertas incluem exemplo contextualizado,
sem inventar informações nem tratar memória como autorização.

Avaliação de rotina: uma entrega isolada não justifica CRON. Reconciliação de fila pertence ao serviço já autorizado;
a skill não agenda acompanhamento por iniciativa própria. O fluxo de sessão única abaixo vale somente para uma
tarefa iniciada diretamente pelo usuário fora do intermediário. Uma execução iniciada como gerenciada nunca muda
de modo por ausência, expiração ou falha de verificação da atribuição: preserve o trabalho e reporte o impedimento.

## Entender e localizar

- Use o texto depois de `/task` ou `$task` como tarefa. Sem texto, aproveite o pedido concreto da conversa. Se não houver pedido, pergunte apenas o que deve ser feito, antes de criar branch.
- Respeite limites explícitos do pedido: uma consulta não cria branch; uma entrega solicitada só até o rascunho não é integrada. Se o usuário cancelar, pare o trabalho e preserve a pasta e os commits; não tente concluir o ciclo apesar do cancelamento.
- Leia `AGENTS.md`, `CONTRIBUTING.md` e os contratos das pastas envolvidas. Confira o remoto por Git e confirme a organização `AgentsFlix`, o helper `scripts/agent_work.py` e a base `main`. Não aplique a identidade ou as regras AgentFlix a outro repositório.
- Descubra o clone pelo projeto atual e pelo mapa em AGENTS.md, sem presumir caminhos do computador do Zé. Identifique `CONTROLE` (checkout de origem), `TAREFA` (nova pasta), `REPO` (`AgentsFlix/nome`), `BRANCH` e o resultado esperado.
- Confira `git status --short --branch`, `git worktree list`, `python3 scripts/agent_work.py status` e `gh pr list --repo "$REPO" --state open`. Se o pedido continua uma entrega, retome a pasta e o PR correspondentes. Não mova alterações da pasta atual para uma tarefa nova por suposição.
- O usuário autorizou abertura de PR, testes e merge automático de ajustes técnicos. Não peça aprovação humana entre essas etapas. Preserve decisões de negócio e aprovações específicas ainda pendentes nos contratos da área. Uma recusa de permissão não autoriza trocar de ferramenta para executar a mesma ação recusada.

## Abrir a tarefa

Escolha um slug curto em minúsculas com hífens e escopos por arquivo ou diretório, sem glob. Use `codex`, `hermes` ou `claude` conforme o agente executor. Crie uma pasta irmã do clone, com nome do repo e da tarefa, fora de qualquer checkout. Execute a partir de `CONTROLE`:

```bash
python3 scripts/agent_work.py start SLUG --agent AGENTE --dir /caminho/da/tarefa --scope caminho --scope outro-caminho
```

O helper busca `origin/main`, cria a branch e reserva os caminhos no registro compartilhado das worktrees. Se o nome já existir, verifique se é retomada; para outra entrega, escolha um novo slug. Uma reserva conflitante exige ajustar a divisão ou esperar a outra tarefa. Não use clone independente para escapar de uma reserva.

Entre em `TAREFA` e mantenha todos os comandos de edição, teste e Git nessa pasta. Não troque a branch do checkout de controle. Confira também os PRs na mesma área: a reserva do helper não coordena máquinas diferentes.

Faça um primeiro commit útil, com caminhos explícitos em `git add`, e abra cedo o PR rascunho. O corpo deve informar objetivo, escopos, dependências e testes previstos. Use arquivo temporário e `--body-file` para preservar o texto:

```bash
git push -u origin "$BRANCH"
gh pr create --repo "$REPO" --base main --head "$BRANCH" --draft --title "TITULO" --body-file /caminho/fora-da-worktree/pr.md
```

Use as credenciais já configuradas no clone. Com várias contas do `gh`, selecione `agentsflix-admin` por variável temporária, sem imprimir o token:

```bash
GH_TOKEN=$(gh auth token -u agentsflix-admin) gh pr view NUMERO --repo "$REPO"
```

Não altere a conta global do usuário, não grave tokens em arquivos e não use `set -x`.

## Implementar e testar

- Implemente apenas a entrega pedida. Reserve os caminhos adicionais com `agent_work.py scope --scope ...` antes de editá-los; esse comando substitui a lista inteira. Atualize o escopo também no PR.
- Execute os testes e verificações definidos no CI atual do repositório e os exigidos pela área. Use testes de comportamento quando necessários, sem criar testes que apenas repetem o código. Reserve e escreva o registro individual definido pelo contrato do repo; em `skills`, use `reviews/<slug>.md` com objetivo, PR, testes e limites. A consolidação de registros globais é outra tarefa; não tome suas reservas.
- Confira o diff completo e o conteúdo staged antes de cada commit. Não inclua material privado em PR público. Mantenha relatórios e artefatos temporários fora da worktree quando possível.
- Mudança entre repos exige worktree, escopo e PR em cada um. Use os destinos explícitos dos geradores e registre a ordem das dependências. Confira se o PR de destino já recebeu arquivos ou commits novos antes de gerar novamente.
- Com a própria pasta sem mudanças pendentes, rode `git fetch origin` e `git merge origin/main`. Se houver conflito, resolva dentro do escopo e revise o resultado. Se outra tarefa alterou a mesma área, coordene antes de sobrescrever. Depois execute `python3 scripts/agent_work.py check` e os testes aplicáveis.
- Um PR antigo sem registro pode concluir seu fluxo original, mas não use `finish` para removê-lo. Preserve a pasta e informe que o encerramento pelo helper não se aplica. Para entregas novas, use sempre `start`.

## Integrar e acompanhar

Atualize o PR com a implementação final, os testes efetivamente executados e limitações reais. Retire o rascunho somente quando pronto. Faça push do HEAD testado e habilite o merge com esse SHA:

```bash
git push origin "$BRANCH"
gh pr ready NUMERO --repo "$REPO"
gh pr merge NUMERO --repo "$REPO" --auto --squash --match-head-commit "$(git rev-parse HEAD)"
```

Use `gh pr ready` só se ainda for rascunho. Não use `--admin`, push direto na main, force push, aprovação do próprio PR ou redução das proteções. Não passe `--delete-branch` ao comando de merge: o GitHub já remove a branch remota, e a pasta local será encerrada pelo helper.

**Habilitar auto-merge não conclui a tarefa.** Consulte checks e estado do PR com esperas curtas, mantendo o usuário informado em trabalhos demorados. Não crie monitor agendado sem pedido.

- Se um teste falhar, leia o erro, corrija a causa no escopo, teste, faça push e confirme o auto-merge para o novo HEAD. Não repita uma tentativa sem informação nova nem enfraqueça o teste para obter verde.
- Se a main avançar antes do merge, integre `origin/main` na sua branch, teste novamente e publique. A opção `--auto` não atualiza a branch sozinha.
- Se um check de revisão por bot existir, respeite seu resultado. CI aprovado não equivale a revisão independente de código por IA; não invente uma aprovação nem crie um bot revisor como parte de uma tarefa comum.
- Se houver impedimento externo sem correção disponível, preserve branch, PR, pasta e reserva. Informe o impedimento e o passo para retomar; não marque como encerrado nem peça aprovação humana para um merge técnico que já está autorizado.

## Conferir e encerrar

Confirme `state=MERGED`, `baseRefName=main`, `headRefName`, `headRefOid` e `mergeCommit` com `gh pr view`. O HEAD integrado deve ser exatamente o HEAD testado, sem commits posteriores na sua branch. Busque a main e verifique a presença do commit de merge.

Quando houver deploy, aguarde seu resultado e confira a entrega em produção. No `skills`, o merge publica pela Vercel; mudanças no player exigem QA de navegador conforme o contrato. Se o deploy falhar, trate a causa no escopo e informe o estado real; não declare publicação bem-sucedida. Uma correção depois do merge usa tarefa e PR novos, nunca reescrita da main.

Preserve os relatórios úteis fora da pasta temporária, em local ignorado e identificado por tarefa no checkout de controle. Encerre apenas servidores que você iniciou. Remova somente caches descartáveis criados por esta tarefa; o helper também recusa arquivos ignorados. Não use limpeza ou remoção forçada para contornar essa recusa.

Execute de `CONTROLE`, fora da pasta que será removida:

```bash
python3 scripts/agent_work.py finish "$BRANCH" --pr NUMERO
```

Confira a saída e `agent_work.py status`: a tarefa deve estar encerrada, a reserva liberada e a worktree removida. O helper preserva o HEAD em uma referência de arquivo. Se a limpeza não puder concluir, informe a pendência e mantenha a pasta.

Ao responder, diga o que foi entregue, link do PR, testes, resultado do deploy quando aplicável e se pasta/branch foram encerradas. Não diga apenas que o auto-merge foi ativado.
