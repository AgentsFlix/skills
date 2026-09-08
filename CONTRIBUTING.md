# Como trabalhar no AgentFlix

Contrato de desenvolvimento, versão 1, aprovado pelo pedido do Zé em 08/09/2026.
Vale para humanos, Hermes Bot, Codex e Claude. Leia também AGENTS.md e as instruções da pasta alterada.
Uma tarefa usa uma branch, uma pasta própria e um PR. A main guarda a versão oficial.

## Começar uma tarefa

1. Confira `git status --short --branch`, `git worktree list` e os PRs abertos. Continue uma entrega existente quando o pedido pertencer a ela.
2. Defina o resultado e os arquivos sob sua responsabilidade. Não execute comandos de checkout, reset, clean, stash ou add na pasta de outro agente.
3. Para uma entrega nova, use o helper abaixo. Ele busca a main remota atual, cria a branch e a worktree e reserva os caminhos no clone. O checkout de controle pode conter trabalho antigo; o helper não altera seus arquivos.

```bash
python3 scripts/agent_work.py start player-retomar-aula --agent hermes --dir ../skills-player-retomar-aula --scope site/assistir --scope tests/test_series.py
cd ../skills-player-retomar-aula
```

Troque o exemplo pelos caminhos da tarefa. Repita `--scope` para cada arquivo ou pasta. Não use glob.
Prefixos novos: `hermes/`, `codex/` ou `claude/`, seguidos de uma entrega curta em minúsculas e hífens.
Branches `feat/`, `fix/` e outras já existentes podem concluir seus PRs; não precisam ser renomeadas.
Não criar branches permanentes por pessoa, bot, área ou ambiente. Uma tarefa nova começa de `origin/main`.

O registro do helper fica no diretório Git comum, em `agent-work/tasks.json`, compartilhado pelas worktrees.
Ele impede duas tarefas registradas de reservar o mesmo arquivo ou uma pasta que o contenha.
Esse bloqueio vale para o clone local, não para máquinas diferentes. Entre máquinas, confira os PRs rascunho
na mesma área antes de começar; se houver sobreposição, combine a ordem ou divida os arquivos.
Trabalhos antigos sem registro continuam visíveis em `git worktree list`; o helper não declara essas áreas livres.

## Durante o trabalho

- Edite só os caminhos combinados. Se o escopo mudar, registre a mudança no PR e coordene com a tarefa que já ocupa a área.
- Depois do primeiro commit, faça push da branch e abra PR rascunho. O PR registra objetivo, área, arquivos compartilhados, dependências e testes.
- Faça commits pequenos, com motivo claro. Use `git add` com caminhos explícitos e confira `git diff --cached` antes do commit. Não use `git add .` em uma pasta compartilhada.
- Nunca inclua credenciais, `.env`, chaves, backups, dados de cliente ou arquivos de outra tarefa. Arquivo ignorado não é backup.
- Use uma porta de servidor, pasta de build e, no app, simulador por tarefa. Encerre apenas processos iniciados por você.
- Conteúdo gerado muda na fonte. A entrega que cruza repositórios tem um PR em cada um; mencione a dependência sem revelar conteúdo privado em PR público.
- Não publicar fontes privadas, UID de vídeo não revisado, texto não aprovado ou artefatos de aluno no repositório público.

## Validar e integrar automaticamente

A conta dos bots é `agentsflix-admin`. `jcarlosamorim` é a conta pessoal do Zé. Não é exigida aprovação humana
para integrar ajustes técnicos. Não desative proteções, use bypass administrativo ou aprove seu próprio PR para liberar uma entrega.

1. Com sua pasta limpa, rode `git fetch origin` e `git merge origin/main`. Resolva conflitos dentro do escopo; não aceite cegamente uma das versões.
2. Rode os testes do repositório e confira o diff completo do PR. Em tarefas registradas, rode também `python3 scripts/agent_work.py check`.
3. Faça push e retire o estado rascunho quando a entrega estiver pronta. Ative o merge automático:

```bash
gh pr ready NUMERO
gh pr merge NUMERO --auto --squash
```

4. A main exige PR, check `validate` aprovado e branch atualizada; as regras também valem para administradores. Force push e exclusão da main ficam proibidos.
5. Se outra entrega entrar primeiro, atualize a branch com a nova main e rode os testes novamente. Auto-merge não faz essa atualização por você. Não use `--admin` nem force push para contornar falhas.
6. Depois do merge, confirme o SHA integrado e o resultado do deploy quando houver. Em `skills`, merge na main publica o site pela Vercel; confira produção. Mudança no player exige QA de navegador conforme AGENTS.md.

Os testes são verificações automáticas, não uma revisão independente por IA. Um bot revisor pode ser acrescentado
como check obrigatório quando existir e estiver operacional. Se a revisão usar aprovação nativa de PR, precisa de
uma identidade GitHub distinta do autor: dois processos usando `agentsflix-admin` continuam sendo a mesma conta.
A autonomia técnica não autoriza decidir preço, oferta, parceria ou reescrever peças criativas cuja aprovação específica ainda esteja pendente.

## Encerrar a branch

O GitHub apaga a branch remota após o merge. Confirme que o PR está integrado e que não há commits posteriores ao HEAD integrado.
Volte ao checkout de controle, preserve arquivos locais úteis e encerre a tarefa registrada:

```bash
python3 scripts/agent_work.py finish hermes/player-retomar-aula --pr NUMERO
```

O helper recusa PR aberto ou fechado sem merge, branch diferente, commits adicionais e arquivos locais pendentes,
inclusive ignorados. Ele confirma que o commit do merge está na main, preserva o HEAD original em
`refs/archive/agent-work/<branch>`, remove a worktree e libera o escopo. Não use remoção forçada para passar por uma recusa.
`finish` só remove worktrees criadas pelo helper, nunca clones independentes.

Uma entrega cancelada ou uma branch antiga exige conferência do conteúdo e preservação antes de remoção.
Não concluir que squash perdeu trabalho porque `git branch --merged` não lista a branch: confira o PR e seu HEAD.
Na migração, mantenha pastas com trabalho pendente; não misture seu conteúdo em um commit de organização.

## Versões, publicação e retorno

- Site: cada deploy corresponde ao SHA integrado na main. Para desfazer uma mudança, abra um PR de revert; não reescreva a main.
- Skills distribuídas: tags `vMAJOR.MINOR.PATCH` e releases identificam pacotes instaláveis. Correção compatível muda PATCH, adição compatível muda MINOR e quebra de compatibilidade muda MAJOR.
- Não mover nem sobrescrever tag publicada. Criar tag só de commit já integrado e validado; conferir versão do catálogo, URLs e arquivos da release. Ajuste visual do site não obriga uma release de skills.
- Arquivos gerados entre repositórios devem apontar para fontes e commits correspondentes. Nunca fazer upload de material privado para provar origem em um PR público.
- Guarde no PR o resultado dos testes, SHA e confirmação de produção. No repo privado, atualize plano e log na mesma entrega.

## Limites das proteções

O helper oferece proteção local para quem o usa. O GitHub exige PR e testes mesmo sem o helper.
Uma conta administrativa pode editar as próprias regras; o contrato proíbe fazê-lo sem pedido explícito de manutenção.
O estado real das regras é conferido pela API do GitHub, não presumido a partir deste documento.
Este arquivo e `scripts/agent_work.py` têm sua fonte em `AgentsFlix/agentsflix`; mudanças comuns são distribuídas
por PR para os outros repositórios e devem manter a mesma versão.
