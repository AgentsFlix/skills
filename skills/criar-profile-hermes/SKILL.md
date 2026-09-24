---
name: criar-profile-hermes
description: Cria profile Hermes com Codex via /device, memória inicial, skills embutidas, cron opcional e bot Telegram próprio. Use para onboarding completo de um profile novo; não use para reparar um existente.
license: MIT
version: 1.0.0
compatibility: Requer terminal no host Hermes, conta Codex com acesso ao modelo solicitado, editor local e bot Telegram exclusivo. Comandos devem ser conferidos na versão instalada.
metadata:
  author: AgentFlix
  version: 1.0.0
  tags: hermes, profile, onboarding, codex, telegram
---

# Criar um profile Hermes

Conduza **um novo profile** pelas seis etapas abaixo, em português. A instalação acontece no
host ou contêiner que roda o Hermes. O prompt de entrada está em
[references/ativacao.md](references/ativacao.md), acrescentado pela distribuição.
Um arquivo de skill ou profile criado não prova que login, gateway e Telegram funcionam.

## When to Use

Use quando a pessoa pedir “crie um profile novo no Hermes” ou “configure outro bot Hermes
do zero”. Não use para reparar, reautenticar ou clonar um profile existente. Um pedido
somente para explicar profiles termina em explicação, sem criação.

## Quick Reference

Obrigatórios: host Hermes de destino com terminal, nome e função do novo profile, conta Codex com acesso ao modelo pedido, três respostas de memória, confirmação Ok das skills embutidas, bot Telegram exclusivo e User ID numérico. Cron inicial é opcional. Recupere contexto relevante antes de perguntar; credenciais entram somente no editor privado do host.

| Input | Necessidade | Primeiro lugar a consultar |
|---|---|---|
| Host Hermes, versão e terminal | Obrigatórios para executar | Ambiente de destino, `hermes --version` e `--help` |
| Nome curto e função do profile | Obrigatórios | Pedido e conversa; perguntar lacunas |
| Conta Codex e acesso a `gpt-6-sol` | Obrigatórios | Device login e sonda real, sem copiar auth |
| Forma de chamar, função, preferência/limite | Obrigatórios para memória inicial | Contexto relevante e três perguntas da etapa 2 |
| Skills embutidas habilitadas | Obrigatório | Contagem no novo profile; requer resposta `Ok` |
| Bot token exclusivo e User ID Telegram | Obrigatórios | Editor privado no host; nunca no chat |
| Rotina inicial | Opcional | Pedido e etapa 5; não inferir autorização |

Entrega: profile novo com modelo configurado e sondado, memória inicial, skills embutidas
confirmadas e bot Telegram que respondeu ao `/start`. Se faltar um gate, entregue o estado
**incompleto**, o que já existe e o próximo passo. Não copie `.env`, `auth.json`, memória ou
token de outro profile. Não instale no host remoto por engano.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

### Preparação

1. Faça bootstrap do pedido, da conversa e da memória relevante acessível. Registre para cada
   input valor, origem, data quando houver, estado (conhecido, ausente, desatualizado,
   conflitante ou inferido) e lacuna. Mostre uma síntese curta; memória não autoriza criar
   cron, credencial ou gateway. Reaproveite respostas atuais sem inventar contexto.
2. No **host de destino**, rode `hermes --version`, `hermes profile list` e os `--help` dos
   comandos que usará (`profile create`, `auth add`, `skills list`, `cron create`, `gateway
   start`). Adapte à CLI medida. Esta revisão foi conferida no macOS com Hermes v0.21.3
   em 2026-09-24; não transfira essa compatibilidade a outra instalação. Confirme acesso
   ao terminal e permissão para operar o host. Preserve profiles e gateways existentes.
3. Obtenha o nome curto e a função **somente se faltarem**. Toda pergunta aberta, inclusive
   as seguintes, traz exemplo de resposta ao lado, baseado no contexto recuperado. Sem
   memória relevante, diga isso e marque o exemplo como hipotético. Exemplo hipotético:
   “Nome: suporte; função: responder dúvidas internas”. Não trate exemplo como resposta.
   Confira que o nome passa nas regras da CLI, ainda não existe e não contém sintaxe de shell.
   Nunca interpolar função livre em shell sem escapar como argumento. Explique que gateway
   ativo consome processo/serviço e sondas e crons com agente consomem quota.

### 1. Modelo de IA

1. Crie sem clone e sem `--no-skills`: `hermes profile create <nome> --description <função>`.
   Passe nome e função como argumentos separados com escape seguro. Não copie credenciais.
2. No **novo** profile, rode `hermes -p <nome> auth add openai-codex --type oauth
   --no-browser`. A pessoa deve clicar no link oficial exibido pelo CLI, colar o código
   de dispositivo na página e concluir a autorização. Diga isso explicitamente e aguarde
   a conclusão do comando. Não peça nem repita no chat código, senha, token ou `auth.json`.
   Se expirar, reinicie o fluxo e use o novo código mostrado no terminal local.
3. Verifique `hermes -p <nome> auth status openai-codex`. Configure
   `hermes -p <nome> config set model.provider openai-codex` e
   `hermes -p <nome> config set model.default gpt-6-sol`; confira com `config get`.
   Faça sonda real com `hermes -p <nome> chat -Q -q 'Responda apenas OK.'`, **sem**
   `-m` nem `--provider`: ela deve usar a configuração. Se o backend, a conta ou o Hermes
   rejeitar o modelo, registre o erro sem segredos e pare; não substitua o modelo.

### 2. Memória

Faça estas três perguntas simples **uma de cada vez**, aproveitando resposta atual já
conhecida como valor proposto e pedindo correção só quando necessário. Cada pergunta
aberta deve vir com um exemplo contextualizado na mesma mensagem; se não houver memória,
use exemplo marcado como hipotético. Não salve exemplo como fato.

1. “Como você quer que este profile chame você?” Exemplo hipotético: “Pode me chamar de Zé”.
2. “Qual é a função principal deste profile?” Exemplo hipotético: “Ajudar meu time a tirar dúvidas do produto”.
3. “Que preferência ou limite ele deve lembrar sempre?” Exemplo hipotético: “Peça confirmação antes de enviar mensagens”.

Localize a configuração com `hermes -p <nome> config path` e derive a pasta **desse**
profile; confirme o caminho antes de escrever `memories/MEMORY.md`. Crie uma seção
`## Onboarding inicial` com apenas as respostas fornecidas ou confirmadas. Se existir,
atualize-a sem duplicar e preserve outras memórias. Não grave credenciais, IDs de sessão,
device code nem o User ID do Telegram. Confira presença dos três campos sem despejar o
restante do arquivo no chat.

### 3. Skills

O `profile create` sem `--no-skills` traz as skills embutidas da instalação. Rode
`hermes -p <nome> skills list --source builtin --enabled-only` e conte os itens reais.
Diga “Vão vir X skills padrão do Hermes, OK?”, com X medido. Aguarde a pessoa digitar
`Ok` (maiúsculas/minúsculas indiferentes) antes das etapas 4–6. Se não for possível
contar, não invente X; resolva a listagem. Não instale skills externas nesta etapa.

### 4. Tools

Diga: “As tools adicionais podem ser configuradas depois. Neste onboarding não vou
conectar serviços externos.” Não altere toolsets, MCPs ou permissões. Continue ao CRON.

### 5. CRON

Avaliação da instalação: **não vale** agendar a criação do profile, que é pontual.
Pergunte “Tem alguma rotina que já queira criar?”. Se a resposta for não, registre
`sem cron inicial`. Se for sim, recupere objetivo, frequência/horário, fuso e destino;
pergunte apenas lacunas com exemplos na mesma mensagem. Considere utilidade recorrente,
acesso aos inputs, custo e ruído. Confira rotina equivalente com `hermes -p <nome> cron
list` e leia `cron create --help`. Apresente o agendamento concreto e peça autorização
específica para ativá-lo. Se a entrega for Telegram, guarde a especificação e espere o
gateway funcional na etapa 6. Crie somente a rotina autorizada, confirme em `cron list`
e informe frequência, quota, quando fica em silêncio e como pausar. Sem agendador,
entregue a proposta e diga que não foi ativada. Ausência de resposta humana não conclui
uma etapa dependente dela.

### 6. Gateway Telegram

1. Peça que a pessoa crie um bot exclusivo em `@BotFather` se ainda não tiver. Não peça
   token no chat. Resolva `hermes -p <nome> config env-path`; confirme que é o `.env` do
   profile novo. Faça backup temporário com permissões restritas. Se faltar
   `TELEGRAM_BOT_TOKEN`, acrescente **por append puro** (`cat >>`) a linha vazia
   `TELEGRAM_BOT_TOKEN=`. Não reserialize nem duplique outras chaves. Abra o arquivo com
   `open -e <arquivo>` no macOS; em Linux, use editor local/SSH. A pessoa cola o token
   no arquivo privado e salva. Se o editor não puder abrir no host, entregue caminho e
   comando local, marque aguardando e não prossiga.
2. Depois de salvo, peça que consulte `@userinfobot` no Telegram para obter o **User ID
   numérico**. Abra o mesmo `.env` para a pessoa colar também o ID em
   `TELEGRAM_ALLOWED_USERS=`; acrescente a linha vazia por append puro se faltar. Não peça
   o ID no chat, porque ele é dado pessoal. Se uma chave já existir, edite-a no arquivo
   sem criar cópia. Nunca habilite `TELEGRAM_ALLOW_ALL_USERS`.
3. Valide **sem imprimir valores**: exatamente uma ocorrência de cada chave, formato de
   token BotFather (`dígitos:sufixo` com pelo menos 20 caracteres), ID inteiro positivo,
   permissões restritas do `.env` e ausência de allow-all. Não registre hash, valor ou
   trecho em logs. Reabra o editor para corrigir falhas. Remova o backup ao terminar ou
   depois de restaurar, inclusive em caso de erro. Não passe token em argumento de CLI.
4. Confirme bot token exclusivo usando a checagem de conflito do Hermes ao iniciar, sem
   abrir ou comparar valores de outros profiles. Se a instalação não conseguir conferir,
   marque exclusividade como pendente. Consulte a supervisão do host. Quando exigir
   serviço persistente, use `hermes -p <nome> gateway install`; em contêiner, use a
   supervisão já existente. Inicie **somente o novo** gateway com
   `hermes -p <nome> gateway start` e confira `gateway status`. Não use `--force` nem
   `gateway start --all`: a semântica varia e pode afetar processos alheios.
5. Rode `hermes gateway list`; confira os profiles existentes individualmente. Mantenha
   os já ativos. Só inicie um parado se ele já tiver autenticação, Telegram configurado,
   bot exclusivo e autorização de uso; caso contrário, liste o bloqueio. Peça que a
   pessoa envie `/start` ao **bot novo** e confirme uma resposta real. Processo ativo
   sem resposta no Telegram não é instalação concluída.
6. Se havia cron autorizado para Telegram, crie-o agora e confirme em `cron list`.
   Nunca altere cron, credenciais ou configuração de outro profile como atalho.

## Avaliação de rotina

Não vale agendar a criação de um profile: é uma instalação pontual. A etapa CRON pergunta por outra rotina desejada; se houver, avalie benefício, acesso, custo, frequência, fuso, destino e silêncio sem novidade. Apresente o agendamento concreto e só crie após autorização específica, checagem de duplicata e gateway funcional quando a entrega for Telegram. Sem agendador, entregue proposta sem ativação.

## Pitfalls

- Copiar `auth.json` ou `.env`, clonar um profile ou usar o mesmo bot em dois gateways.
- Pedir token, User ID ou device code no chat; imprimir valores em diagnóstico ou log.
- Contar skills por número fixo, avançar sem `Ok` ou tratar auth status como sonda do modelo.
- Prometer “todos running” só por `gateway list`, sem estado e resposta real de cada bot.
- Transformar pergunta aberta sem exemplo em entrevista longa, ou exemplo em memória salva.
- Criar cron pela simples instalação ou chamar gateway ativo de mensagem entregue.

## Verification

- `profile list` mostra o novo nome uma vez; o login Codex é **desse** profile.
- `config get` mostra provider `openai-codex` e modelo `gpt-6-sol`; sonda real responde.
- `memories/MEMORY.md` contém as três respostas; X skills foi medido e a pessoa disse `Ok`.
- `cron list` mostra somente rotina nova autorizada, se houver; caso contrário, nenhuma.
- `.env` passa formato, unicidade e permissão sem expor valores; bot exclusivo e gateway
  foram checados, e `/start` recebeu resposta real no Telegram.
- `gateway list` fundamenta o estado `running`, `stopped` ou `bloqueado` de cada profile.
  Só diga “todos running” se isso estiver confirmado. Informe processos e crons novos.
- Bootstrap, exemplos, fatos confirmados, avaliação de rotina e limites estão claros.
  Se um gate falhar, relate etapa, erro sem segredo, o que foi criado e o próximo passo;
  mantenha o profile incompleto, sem apagá-lo automaticamente.

## Arquivos desta skill

- `LICENSE`
- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
- `integrity.json`
