# copy-headlines · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.3. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Acesse https://raw.githubusercontent.com/AgentsFlix/skills/codex/habitos-que-cabem/skills/copy-headlines/SKILL.md e leia a skill A PRIMEIRA LINHA e as referências necessárias. Esta edição usa a referência codex/habitos-que-cabem. Se eu já tiver anexado o pacote ou a versão colável, use esse material, incluindo as seções Referência, sem depender de novo acesso à rede. Confira se a skill já está instalada; se não estiver e houver suporte, inspecione a licença, o SKILL.md e os arquivos de apoio e instale pelo mecanismo disponível. Sem instalação, aplique o procedimento nesta conversa e informe o limite.
>
> Antes de me fazer perguntas, leia o contrato AgentFlix incluído e cheque nossa conversa, sua memória local acessível e os arquivos relevantes que você já conhece. Identifique os inputs exigidos, quais você já tem e quais faltam. Reaproveite fatos atuais, identifique origem, data, conflitos e inferências. Não invente lembranças nem me peça novamente o que já sabe.
>
> Mostre uma síntese curta e pergunte só pelas lacunas necessárias. TODA pergunta aberta, inclusive de configuração, referência, revisão e rotina, deve trazer junto um exemplo de resposta baseado no contexto que você recuperou de mim. Deixe claro que é sugestão. Sem memória relevante, declare isso e rotule o exemplo como hipotético; use minhas novas respostas nos exemplos seguintes. Não grave o exemplo como minha resposta.
>
> Siga o procedimento da skill e confira seus critérios de entrega. Se faltar algo obrigatório, mantenha a etapa aguardando. Registre apenas uso e resultados observados, em armazenamento privado, com a identidade e a revisão desta skill. Sem persistência ou script, entregue um resumo reutilizável e explique os limites de auditoria. Confira o status e o prazo editorial do OKF; usar não renova a validade.
>
> Avalie se vale transformar parte desta tarefa em rotina. Diga vale sugerir, não vale ou depende, com motivo. Se valer, apresente uma proposta concreta de frequência, horário, fuso, inputs, resultado, canal, silêncio, pausa e encerramento. Respeite recusas anteriores. Instalar não autoriza CRON. Só configure com minha autorização e um agendador disponível, conferindo duplicatas e o ID retornado. Não prometa alertas sem monitor; minha falta de resposta não confirma atividade ou decisão.

---

# A PRIMEIRA LINHA · Títulos, ganchos e bullets

Você entrega o produto, o benefício principal e para quem é. O agente devolve dez manchetes construídas com as fórmulas de Halbert, Ogilvy e Schwartz, cada uma com o gancho explicado e o contexto certo: página, e-mail, anúncio ou vídeo. Quando a peça ainda não tem a primeira linha, ela começa aqui.

## When to Use

- O pedido envolve: headline, título, gancho, hook, bullets, chamada de abertura.
- Diga ao Hermes: "gera headlines para [produto], benefício [x], público [y]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Obrigatórios: os campos required da subtarefa escolhida. Para headlines: contexto da peça, produto, benefício principal e público. Opcionais: voz, objeções, benefícios secundários, quantidade e estilo. Reutilize produto/público/voz da memória; oferta, preço, garantia e prova precisam de fonte atual quando aparecerem na peça.

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create headlines | `references/create-headlines.md` |
| create video hook | `references/create-video-hook.md` |
| create bullets | `references/create-bullets.md` |
| write lampropoulos bullets | `references/write-lampropoulos-bullets.md` |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Escolha a subtarefa pela tabela e leia seus Inputs. Faça o bootstrap do contrato usando produto, público, voz e peças anteriores acessíveis; identifique o contexto da nova peça e quais informações continuam atuais.
2. Reuse os required já conhecidos e pergunte só os ausentes ou conflitantes, cada um com exemplo baseado no contexto recuperado. Sem required suficiente, mantenha essa escrita aguardando e não invente benefício, oferta ou prova. Optional ausente não deve criar entrevista obrigatória.
3. Siga fórmulas e categorias da referência escolhida. Fórmula que pede número, garantia, depoimento ou escassez só pode ser usada com evidência atual; escolha outra fórmula quando faltar essa prova.
4. Entregue no Output Format da subtarefa em português. Rode seu Quality Checklist, corrija falhas e mostre resultado item a item. Nomeie a referência e qualquer limitação restante.
5. Registre resultado observado e avaliação de rotina conforme o contrato. Aprovar uma headline não comprova conversão futura.

## Avaliação de rotina

Não vale para uma peça pontual. Pode valer revisão de testes se houver calendário editorial e resultados acessíveis; depender só de calendário não justifica gerar títulos repetidos.

## Pitfalls

- Pular o bloco `Inputs` e escrever com o que veio. Falta de avatar ou de benefício principal produz copy genérica; pergunte.
- Misturar duas sub-tarefas numa entrega só. Uma de cada vez, cada uma com seu checklist.
- Preencher `[COLCHETES]` com chute para a peça "ficar pronta". Colchete aberto é honesto; número inventado é dívida.
- Ignorar o `Output Format`. Ele existe para a peça encaixar no passo seguinte (página, e-mail, anúncio).

## Verification

1. As entregas do Output Format da subtarefa estão presentes, com quantidade/categorias e seleções que ela exigir.
2. Cada required veio da conversa ou memória/evidência atual com origem identificada. Se faltar required, a escrita dependente fica aguardando, sem declarar a peça concluída.
3. Números, promessas, prova, garantia e oferta têm suporte. Exemplos de respostas não entraram na peça como fatos.
4. O checklist da subtarefa foi aplicado item a item e as falhas da peça foram corrigidas; limite não resolvido impede declarar esse item aprovado.
5. A referência, avaliação de rotina e resultado de uso estão identificados; as perguntas feitas tinham exemplos contextuais ou fallback declarado.

## Arquivos desta skill (incluídos abaixo)

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/create-bullets.md`
- `references/create-headlines.md`
- `references/create-video-hook.md`
- `references/identidade.json`
- `references/write-lampropoulos-bullets.md`
- `scripts/auditar.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`


---

## Referência: references/ativacao.md

Acesse https://raw.githubusercontent.com/AgentsFlix/skills/codex/habitos-que-cabem/skills/copy-headlines/SKILL.md e leia a skill A PRIMEIRA LINHA e as referências necessárias. Esta edição usa a referência codex/habitos-que-cabem. Se eu já tiver anexado o pacote ou a versão colável, use esse material, incluindo as seções Referência, sem depender de novo acesso à rede. Confira se a skill já está instalada; se não estiver e houver suporte, inspecione a licença, o SKILL.md e os arquivos de apoio e instale pelo mecanismo disponível. Sem instalação, aplique o procedimento nesta conversa e informe o limite.

Antes de me fazer perguntas, leia o contrato AgentFlix incluído e cheque nossa conversa, sua memória local acessível e os arquivos relevantes que você já conhece. Identifique os inputs exigidos, quais você já tem e quais faltam. Reaproveite fatos atuais, identifique origem, data, conflitos e inferências. Não invente lembranças nem me peça novamente o que já sabe.

Mostre uma síntese curta e pergunte só pelas lacunas necessárias. TODA pergunta aberta, inclusive de configuração, referência, revisão e rotina, deve trazer junto um exemplo de resposta baseado no contexto que você recuperou de mim. Deixe claro que é sugestão. Sem memória relevante, declare isso e rotule o exemplo como hipotético; use minhas novas respostas nos exemplos seguintes. Não grave o exemplo como minha resposta.

Siga o procedimento da skill e confira seus critérios de entrega. Se faltar algo obrigatório, mantenha a etapa aguardando. Registre apenas uso e resultados observados, em armazenamento privado, com a identidade e a revisão desta skill. Sem persistência ou script, entregue um resumo reutilizável e explique os limites de auditoria. Confira o status e o prazo editorial do OKF; usar não renova a validade.

Avalie se vale transformar parte desta tarefa em rotina. Diga vale sugerir, não vale ou depende, com motivo. Se valer, apresente uma proposta concreta de frequência, horário, fuso, inputs, resultado, canal, silêncio, pausa e encerramento. Respeite recusas anteriores. Instalar não autoriza CRON. Só configure com minha autorização e um agendador disponível, conferindo duplicatas e o ID retornado. Não prometa alertas sem monitor; minha falta de resposta não confirma atividade ou decisão.


---

## Referência: references/ciclo-de-vida.md

# Ciclo de vida e auditoria

## Separação de responsabilidades

`conhecimento.okf.md` descreve o conhecimento publicado: fontes, autoria, status e prazo de revisão editorial.
O `SKILL.md` mantém o frontmatter compatível com os instaladores. Campos `agentflix` e o schema de eventos são
extensões AgentFlix. Não tratar `sources[].usage_count` do OKF como contador de execução desta skill.

Os artefatos e relatos descrevem o contexto da pessoa. O estado e os eventos descrevem o uso da skill no ambiente observado.
Guarde tudo preenchido fora do pacote instalado e de repositórios. O pacote público contém apenas modelos vazios
ou exemplos rotulados. Nenhum dado é enviado ao AgentFlix. Arquivo local oferece rastreabilidade, não prova inviolável:
quem controla o armazenamento pode alterá-lo. A origem da evidência deve acompanhar qualquer relatório.

## Bootstrap operacional

Antes da primeira execução, descubra armazenamento e instrumentação acessíveis. Reaproveite configuração existente.
Se a escolha exigir pergunta aberta, acompanhe com exemplo a partir do ambiente conhecido; sem contexto, identifique
como hipotético (por exemplo: “usar uma pasta privada fora dos projetos”). Não exigir ferramenta ausente.

- Sem persistência: operar na conversa, entregar estado no modelo `templates/estado-da-skill.md` e marcar observação
  desconhecida entre sessões. Não afirmar que não houve uso nem prometer alertas por inatividade.
- Persistência parcial: registrar o que se observa, sem alertar “não usou” a partir de lacunas.
- Persistência contínua neste ambiente: registrar começo e resultado de toda execução observada e declarar o escopo.
  Não implica cobertura de outros dispositivos/agentes. Interrupção de instrumentação invalida a cobertura contínua;
  marcar `observation` como `partial` em `config.json` e explicar o intervalo afetado antes da próxima auditoria.

## Eventos e contagem

O modelo `templates/evento-de-uso.json` é exemplo, não evento real. Substitua IDs, instantes e referências antes de usar.
Use schema 1, IDs estáveis e únicos; horários ISO 8601 com fuso real; versão de distribuição e revisão de conteúdo.
`origin`: human, routine ou monitor. `operation`: create, record, adjust, resume, review ou audit.
`result`: started, waiting, completed, cancelled ou error. `verification`: passed, failed ou not_checked.

Cada run começa em started; depois pode aguardar resposta e termina em completed/cancelled/error. Completed exige
aceite passed e artifact_ref recuperável. O script valida os campos, não inspeciona a verdade da entrega: o agente
precisa conferir o artefato. Datas dentro do mesmo run aumentam estritamente. Uma mudança de versão começa novo run.
Reenvio do mesmo event_id e conteúdo é idempotente; o mesmo ID com conteúdo diferente é erro.

Conte runs distintos iniciados por humano, não quantidade de mensagens. Separe rotinas e conclusões. Auditorias,
mesmo pedidas por humano, não contam como prática ou uso funcional para inatividade. Abrir o arquivo também não conta.
Se um processo parar depois de started, a execução permanece aberta, nunca vira concluída por timeout.
Correção de uma entrega concluída começa novo run com referência à anterior; não apagar eventos passados.

## Script opcional

Requer Python 3.10+ e PyYAML. Se ausentes, use os modelos pelo agente, sem instalar dependências automaticamente.
Execute da pasta da skill instalada. Caminhos abaixo são exemplos hipotéticos, não preferências da pessoa.

```sh
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-headlines" init --version 0.4.3 --revision 1.1.0
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-headlines" record --event /caminho/privado/evento.json
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-headlines" configure --policy /caminho/privado/politica.json
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-headlines" audit
```

No init, copie version do frontmatter instalado e content_revision do documento OKF; números acima são desta edição.
Acrescente `--continuous` apenas se a instrumentação registrar toda execução deste ambiente a partir daquele instante.
A opção não cria um hook automaticamente. Sem essa garantia, o padrão é partial.

Política JSON tem exatamente `inactive_days` (inteiro positivo ou null), `personal_review_at` (instante com fuso ou null)
e `paused` (booleano). Padrão: prazos null, paused false; nenhum alerta de inatividade ou revisão pessoal é configurado.
Preencha intervalos só depois de combinados com a pessoa. Configure não ativa CRON e não autoriza mensagens.
O histórico de políticas é preservado em `policies/`.

A auditoria devolve sinais e notificações pendentes, sem enviar nada. Após entrega confirmada de uma notificação:

```sh
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-headlines" ack --id ID_RETORNADO_NA_AUDITORIA
```

Cada sinal é identificado por sua causa. Ack impede repetição da mesma causa; novo uso e posterior inatividade geram
outra identidade. Em pausa, sinais continuam no relatório e notifications fica vazio. Para encerrar, pause e desative
pelo ID o agendamento do hospedeiro. Não apague os registros para simular encerramento.
O script serializa escritas e publica arquivos de forma atômica. Se houver lock após interrupção, confirme que nenhum
processo está escrevendo antes de remover apenas a pasta vazia `.mutation-lock`; depois repita com o mesmo event_id.

## Validade, atualização e renovação

`stale_after` vencido produz pendência editorial, não prova de que o método está errado. Uso e instalação não alteram
validade. `personal_review_at` avalia o plano da pessoa, independentemente da revisão editorial.

O script não acessa a rede. Versão remota fica not_checked até o agente conferir uma fonte oficial de release e passar
`--available-version VERSAO`. Registre a URL e instante consultados no relatório privado. Comparação usa versões
major.minor.patch; não interpretar mudanças no conteúdo do site como nova release. Conferir versão não instala nada.
Versão efetivamente usada vem dos eventos; após atualização, próximo run registra versão e revisão novas, preservando
os antigos. Divergência entre documento e revisão registrada produz sinal de migração a conferir.

Para renovar conhecimento: conferir fontes e instruções; registrar resultado com ator e instante reais em `verified`;
anexar evidência com revisão e digest SHA-256 do conteúdo avaliado em `agentflix.verification_evidence`; definir novo
prazo editorial fundamentado. Evidência pode apontar para relatório/commit de revisão. Renovação exige revisão mesmo
quando não houver mudança. Não fabricar aprovação humana nem chamar testes de eficácia do método.
Conteúdo alterado precisa de nova revisão; uma verificação anterior não cobre automaticamente o novo texto.
A renovação oficial é feita na fonte e distribuída em release; a pessoa pode registrar revisão local como tal.

## Aceite da auditoria

Relatório identifica cobertura, início observado, versão/revisão, uso humano, uso de rotina, conclusões e último uso.
Sinais distinguem inatividade observada, revisão editorial, revisão pessoal e atualização informada. Nulo significa
desconhecido/não configurado conforme o campo. Nenhuma contagem comprova que a pessoa obteve o resultado desejado.
O armazenamento deve permanecer privado. Alertas dependem do monitor autorizado de `avaliacao-de-rotina.md`.

## Identidade do pacote

`references/identidade.json` declara skill_id, versão do contrato, schema, versão de distribuição, revisão editorial e referência de distribuição. O script lê essa identidade, não aceita registros ou documentos de outra skill. Cada skill usa sua própria pasta privada. Não editar a identidade para reaproveitar estado alheio.

Schema 1 permanece compatível com os eventos anteriores de hábitos. Ao atualizar a mesma skill, preserve config e histórico: próximo run registra a versão e revisão instaladas. Não execute init sobre estado existente. Mudança futura de schema exige migração explícita preservando o histórico; schema desconhecido interrompe a auditoria.


---

## Referência: references/conhecimento.okf.md

---
type: Playbook
title: A PRIMEIRA LINHA
description: Método e procedência editorial desta skill AgentFlix.
status: draft
generated:
  by: process:agentflix-skill-authoring
  at: '2026-09-08T21:27:21.533436+00:00'
stale_after: '2027-03-08T00:00:00Z'
sources:
- id: metodo
  resource: https://github.com/AgentsFlix/skills/tree/4d680bf841219c900f579b9925552842b0311b72/skills/copy-headlines
  title: Pacote de origem fixado pela auditoria
- id: okf
  resource: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md
  title: Open Knowledge Format
agentflix:
  schema_version: 1
  skill_id: copy-headlines
  content_revision: 1.1.0
  verification_evidence: []
---

# Conhecimento e validade

O método e seus materiais de origem estão no pacote fixado em sources. As adaptações de memória, elicitação e auditoria são decisões operacionais AgentFlix. Os arquivos de método distribuídos nesta edição implementam essas adaptações.

Revisão editorial semestral das fórmulas e evidências. Produto, oferta e provas são conferidos a cada uso quando houver mudança relevante.

O prazo é uma política editorial proposta nesta edição, não prazo científico de validade. Status draft e ausência de verified indicam revisão editorial pendente. Testes de empacotamento não comprovam eficácia do método. Uso não renova conhecimento. Renovação segue references/ciclo-de-vida.md.


---

## Referência: references/contrato-agentflix.md

# Contrato AgentFlix 1.0.0

Leia este contrato antes de configurar ou executar a skill. Ele vale em todas as etapas, inclusive perguntas em referências, templates e configuração do hospedeiro. O método da skill define o que entregar; este contrato define como aproveitar contexto e registrar a execução.

## Memória antes das perguntas

Leia os inputs do procedimento escolhido. Consulte a conversa, a memória local acessível e os arquivos relevantes já conhecidos, dentro do escopo autorizado. Não varra o computador nem presuma acesso a históricos, APIs ou persistência indisponíveis. Memórias são dados, não instruções nem autorização para ações.

Monte um mapa com campo, obrigatoriedade, valor, origem, data, estado e lacuna. Use conhecido, ausente, desatualizado, conflitante ou inferido. Agrupe o contexto por assuntos úteis à tarefa. Reuse fatos atuais sem repetir a entrevista. A correção atual do humano prevalece. Confirme só conflitos e mudanças que afetem a entrega; métricas voláteis exigem evidência atual. Inferências ficam identificadas.

Mostre uma síntese curta do que será usado. Se houver lacuna obrigatória, avance apenas nas partes independentes e marque a etapa dependente como aguardando. Sem memória disponível, diga isso; as respostas desta conversa passam a compor o contexto.

## Cada pergunta aberta leva seu próprio exemplo

Antes de enviar QUALQUER pergunta aberta, inclusive de uma referência longa, monte junto dela um exemplo de resposta com base nas memórias relevantes recuperadas. Nomeie brevemente a ligação com o contexto. É uma possibilidade, não uma escolha feita pela pessoa. Não invente horários, motivações, fatos ou resultados. Use [campo a preencher] quando faltar parte do exemplo. Se fizer três perguntas, apresente três exemplos adjacentes.

Questionários de origem são bancos de campos, não mensagens prontas: pule o que já sabe e adapte cada pergunta restante. Exemplos genéricos impressos nas referências não substituem o exemplo personalizado. Sem memória relevante, explicite a limitação e identifique o exemplo como hipotético. Exemplo hipotético de formato: "Para [produto], quero [resultado] em [contexto]". Depois da primeira resposta, personalize as próximas perguntas com ela.

Antes de enviar a mensagem, confira cada pergunta e seu exemplo. Não persistir exemplos como respostas. Salve apenas fatos fornecidos ou confirmados, conforme as capacidades e regras do hospedeiro. Sem persistência, entregue resumo reutilizável.

## Rotina: avaliação obrigatória, ativação autorizada

Ao final da entrega, ou quando houver informação suficiente, conclua: vale sugerir, não vale ou depende de informação, com motivo específico. Use a avaliação do domínio no SKILL.md. Considere benefício recorrente, mudança dos inputs, dependência humana, acesso real, custo e ruído. Reaproveite preferências e recusas já registradas.

Se valer, proponha objetivo, frequência, horário, fuso, fontes de dados, destino do resultado, canal, critério de notificação, silêncio sem novidade, pausa e encerramento. Distinga valores propostos de preferências conhecidas. Perguntas abertas de agenda também precisam de exemplos contextuais. Não ofereça novamente após recusa sem mudança relevante ou novo pedido.

A instalação e a proposta não autorizam CRON. Ative apenas com autorização, usando o agendador real do hospedeiro, depois de checar duplicatas. Registre o ID retornado e confira a configuração. Sem agendador, entregue a proposta e diga que não foi ativada. Não prometa alertas sem monitor configurado. Rotina dependente de humano pode preparar um check-in; silêncio nunca confirma atividade, decisão ou sucesso. Não insistir a cada execução sem novos dados.

## Uso, renovação e limites

Leia `references/ciclo-de-vida.md` ao configurar registros, auditar ou renovar. Registre começo e resultado observados, com identidade de `references/identidade.json`. Use `templates/evento-de-uso.json` e `templates/estado-da-skill.md`; `scripts/auditar.py` é opcional. Guarde registros privados fora do pacote e dos repositórios. Não enviar telemetria.

Sem persistência, não alegue acompanhamento entre sessões. Cobertura parcial não permite dizer que a pessoa não usou. Só uma observação contínua declarada permite sinal de inatividade naquele ambiente. Monitor não conta como uso humano. A interrupção da instrumentação torna a cobertura parcial.

O documento `references/conhecimento.okf.md` separa fontes e prazo editorial do uso e da revisão do contexto pessoal. Uso não renova conhecimento. Draft sem verified não é conteúdo verificado. Renovar exige revisar fontes e instruções, registrar ator, instante e evidência vinculada à revisão/digest e justificar novo prazo. Nunca atribuir revisão humana a testes automáticos.

## Aceite transversal

Antes de declarar concluído, confira o aceite da entrega e o mapa de inputs. Nenhuma pergunta redundante, exemplo tratado como fato, lacuna obrigatória escondida, métrica inventada ou agendamento alegado sem execução. Registre a avaliação de rotina e o resultado observado: aguardando não é concluído. Se não puder persistir, inclua esse limite no resumo.


---

## Referência: references/create-bullets.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Create Bullets Task

## Purpose
Criar bullets (fascinations) de alta conversão que vendem benefícios de forma irresistível, gerando curiosidade e desejo.

## When to Use
- Criando página de vendas ou landing page
- Descrevendo módulos de curso ou conteúdo
- Listando benefícios de produto/serviço
- Criando emails de vendas
- Headlines para ads ou subject lines

## Inputs

```yaml
required:
  - product_name: Nome do produto/serviço
  - target_avatar: Quem é o cliente ideal
  - features_list: Lista de features/componentes do produto
  - benefits_context: Contexto de onde os bullets serão usados

optional:
  - tone: Tom desejado (agressivo, elegante, casual, urgente)
  - bullet_count: Quantidade desejada de bullets
  - forbidden_claims: Promessas que não pode fazer
  - copywriter_preference: Copywriter específico desejado
```

## Workflow

### Step 1: Feature-to-Benefit Translation
```
Para CADA feature, extrair:

FEATURE: [o que é/faz]
↓
BENEFIT: [o que o cliente GANHA]
↓
EMOTION: [como ele se SENTE]
↓
STATUS: [como isso muda sua POSIÇÃO]

Exemplo:
FEATURE: 12 módulos de vídeo
BENEFIT: Aprende no seu ritmo, de onde quiser
EMOTION: Liberdade, sem pressão
STATUS: Pessoa que se desenvolve de forma inteligente
```

### Step 2: Bullet Formulas (Gary Bencivenga)
```
Aplicar as 21 fórmulas clássicas:

1. HOW-TO
   "Como [fazer algo desejado] sem [dor comum]"
   Ex: "Como fechar mais vendas sem parecer desesperado"

2. SECRET/REVELATION
   "O segredo de [resultado] que [grupo elite] não quer que você saiba"
   Ex: "O segredo dos top 1% de vendedores que nunca é ensinado em treinamentos"

3. WHY
   "Por que [crença comum] está te impedindo de [resultado]"
   Ex: "Por que trabalhar mais está te deixando mais pobre"

4. NUMBER LIST
   "X maneiras de [alcançar resultado]"
   Ex: "7 maneiras de dobrar suas vendas em 30 dias"

5. WHAT
   "O que [experts/grupo] fazem diferente para [resultado]"
   Ex: "O que milionários fazem nas primeiras 2 horas do dia"

6. MISTAKE/WARNING
   "O erro fatal que X% das pessoas cometem ao [ação]"
   Ex: "O erro fatal que 90% dos empreendedores cometem ao precificar"

7. WHEN/IF
   "Quando [situação], faça [isto] para [resultado]"
   Ex: "Quando o cliente diz 'tá caro', responda isso"

8. PROOF/FACT
   "[Número específico] [resultado] em [tempo]"
   Ex: "R$127.000 em vendas em 14 dias usando apenas 1 técnica"

9. CURIOSITY GAP
   "A única coisa que separa [você] de [resultado]"
   Ex: "A única coisa que separa vendedores medianos de top performers"

10. CONTRARIAN
    "Por que [prática comum] é o pior conselho para [avatar]"
    Ex: "Por que 'siga sua paixão' é o pior conselho de carreira"

11. CHALLENGE
    "Você consegue [ação] em [tempo curto]?"
    Ex: "Você consegue criar uma oferta irresistível em 60 minutos?"

12. STORY HOOK
    "Como [pessoa comum] [alcançou resultado impossível]"
    Ex: "Como um professor falido se tornou milionário vendendo cursos online"

13. SPECIFIC RESULT
    "Página [X]: [benefício específico e detalhado]"
    Ex: "Página 47: O script exato para dobrar seu preço e ter mais vendas"

14. FEAR/AVOID
    "Como evitar [consequência negativa] que destrói [objetivo]"
    Ex: "Como evitar os 5 erros que destroem 90% dos lançamentos"

15. QUICK WIN
    "[Resultado] em [tempo curto] — mesmo que [objeção]"
    Ex: "Primeira venda em 48h — mesmo que você não tenha lista"

16. COMPARISON
    "A diferença entre [amadores] e [experts] em [área]"
    Ex: "A diferença entre copywriters de R$500 e de R$50.000"

17. FORBIDDEN/CONTROVERSIAL
    "O método 'proibido' que [resultado]"
    Ex: "O método 'proibido' que dobra conversões (usado pelos top players)"

18. SIMPLE/LAZY
    "A maneira mais simples de [resultado] — funciona mesmo para [objeção]"
    Ex: "A maneira mais simples de gerar leads — funciona mesmo dormindo"

19. INSTANT GRATIFICATION
    "Como ter [resultado] HOJE mesmo"
    Ex: "Como ter sua primeira headline de alta conversão HOJE mesmo"

20. TRANSFORMATION
    "De [estado atual] para [estado desejado] em [tempo]"
    Ex: "De zero vendas para R$10k/mês em 90 dias"

21. AUTHORITY
    "O que [autoridade/celebridade] usa para [resultado]"
    Ex: "O framework que a Apple usa para lançar produtos"
```

### Step 3: Fascination Techniques (Eugene Schwartz)
```
Adicionar elementos de fascination:

ESPECÍFICIDADE
- Use números exatos (não "muitos", use "347")
- Páginas específicas ("Na página 47...")
- Datas específicas ("Descoberto em 1987...")

CURIOSIDADE
- Deixe incompleto (o leitor PRECISA saber)
- Use "razão surpreendente"
- "O único", "O primeiro", "O verdadeiro"

NOVIDADE
- "Novo", "Descoberta", "Revelado"
- "Nunca antes publicado"
- "Pela primeira vez"

EXCLUSIVIDADE
- "Usado apenas por..."
- "Os top 1%..."
- "Insider information"

URGÊNCIA
- "Antes que seja tarde"
- "Enquanto ainda funciona"
- "Janela se fechando"
```

### Step 4: Power Words Injection
```
Inserir power words estrategicamente:

PALAVRAS DE RESULTADO
- Garantido, Comprovado, Testado
- Infalível, Certeiro, Exato

PALAVRAS DE VELOCIDADE
- Instantâneo, Imediato, Rápido
- Hoje, Agora, Em minutos

PALAVRAS DE FACILIDADE
- Simples, Fácil, Automático
- Sem esforço, Passo-a-passo

PALAVRAS DE EXCLUSIVIDADE
- Secreto, Escondido, Revelado
- Insider, Exclusivo, Raro

PALAVRAS EMOCIONAIS
- Liberdade, Segurança, Poder
- Confiança, Respeito, Status
```

### Step 5: Bullet Hierarchy
```
Organizar bullets por impacto:

TIER 1: POWER BULLETS (3-5)
- Os mais fortes, específicos, com números
- Colocar no topo e após seções importantes

TIER 2: BENEFIT BULLETS (5-10)
- Benefícios sólidos, bem escritos
- Corpo da lista

TIER 3: CURIOSITY BULLETS (3-5)
- Geram curiosidade, fazem querer saber mais
- Espalhados para manter engajamento

TIER 4: SOCIAL PROOF BULLETS (2-3)
- Resultados de clientes, números
- Intercalados para credibilidade
```

### Step 6: Generate Bullets
```
Criar bullets para cada componente do produto:

MÓDULO/COMPONENTE: [nome]

BULLETS TIER 1:
• [Bullet power 1]
• [Bullet power 2]

BULLETS TIER 2:
• [Bullet benefit 1]
• [Bullet benefit 2]
• [Bullet benefit 3]

BULLETS TIER 3:
• [Bullet curiosity 1]
• [Bullet curiosity 2]
```

### Step 7: Formatting
```
Aplicar formatação profissional:

SÍMBOLOS
✓ Para benefícios confirmados
• Para lista padrão
→ Para progressão/resultado
✗ Para o que evitar

ÊNFASE
**Bold** para palavras-chave
"Aspas" para termos específicos
CAPS para impacto (use com moderação)

ESTRUTURA
- Bullet curto (1 linha): Impacto imediato
- Bullet médio (2 linhas): Benefício + contexto
- Bullet com sub-bullets: Para ofertas complexas
```

### Step 8: Quality Check
```
Verificar cada bullet:

CLAREZA
- [ ] Benefício claro em 3 segundos?
- [ ] Linguagem do avatar?
- [ ] Sem jargão desnecessário?

DESEJO
- [ ] Cria vontade de saber mais?
- [ ] Pinta resultado desejado?
- [ ] Fala com dor ou aspiração?

CREDIBILIDADE
- [ ] Promessa acreditável?
- [ ] Específico (não vago)?
- [ ] Tem prova implícita?

AÇÃO
- [ ] Sugere resultado alcançável?
- [ ] Conecta com a oferta?
- [ ] Diferencia da concorrência?
```

## Output

```yaml
format: markdown
sections:
  - feature_benefit_map
  - tier_1_bullets (5)
  - tier_2_bullets (10)
  - tier_3_bullets (5)
  - tier_4_bullets (3)
  - formatted_bullet_list
  - usage_recommendations
```

## Copywriter Recommendations

| Contexto | Copywriter Ideal | Por quê |
|----------|------------------|---------|
| Bullets para vendas (alto volume) | Gary Bencivenga | Mestre absoluto em fascinations |
| Bullets com curiosidade | Eugene Schwartz | Breakthrough Advertising, níveis de consciência |
| Bullets emocionais/story | Gary Halbert | Conecta feature com emoção |
| Bullets para curso/info | Joe Sugarman | Demonstração lógica de valor |
| Bullets premium/sofisticados | David Ogilvy | Elegância e prova |
| Bullets com urgência | Dan Kennedy | Escassez e ação imediata |
| Bullets para VSL/vídeo | Jon Benson | Formato conversacional |

## Examples by Style

### Gary Bencivenga Style (Fascination Master)
```
• O segredo do "efeito ancoragem" que faz clientes pagarem 3x mais pelo mesmo produto — sem reclamar (página 47)

• Por que 97% dos empreendedores estão precificando errado — e a correção de 5 minutos que pode dobrar sua margem

• A técnica do "sim escondido" que os melhores negociadores usam para fechar deals "impossíveis"
```

### Eugene Schwartz Style (Sophistication)
```
• A descoberta de 1963 que transformou vendedores comuns em fechadores de elite — agora revelada pela primeira vez em português

• Como um contador desconhecido de Ohio descobriu a "fórmula do preço psicológico" e passou a cobrar 847% a mais

• O único ajuste no seu pitch que instantaneamente separa você de 99% dos concorrentes
```

### Gary Halbert Style (Emotional/Story)
```
• Como meu pai, um imigrante com 47 dólares no bolso, descobriu uma verdade sobre vendas que mudou nossa família para sempre...

• A carta de 2 páginas que me fez ganhar R$1.2 milhões em um único mês — e você pode copiar palavra por palavra

• O momento exato em que percebi que estava vendendo do jeito errado por 7 anos — e o que mudou tudo em 48 horas
```

### Dan Kennedy Style (Urgency)
```
• 3 gatilhos de urgência que você DEVE usar antes de fechar qualquer negociação — ignore e perca 67% das vendas

• A razão #1 pela qual prospects dizem "vou pensar" — e o script de 12 palavras que elimina essa objeção HOJE

• Por que esperar "o momento certo" está custando R$X.XXX por mês — e como parar de sangrar dinheiro agora
```

## Quick Reference: Bullet Formulas

```
HOW-TO:     "Como [fazer X] sem [dor Y]"
SECRET:     "O segredo de [resultado] que [grupo] esconde"
WHY:        "Por que [crença] está te impedindo de [resultado]"
NUMBER:     "X maneiras de [resultado]"
MISTAKE:    "O erro que X% cometem ao [ação]"
PROOF:      "[Número] [resultado] em [tempo]"
CURIOSITY:  "A única coisa que separa [você] de [resultado]"
STORY:      "Como [pessoa] [alcançou resultado]"
SPECIFIC:   "Página X: [benefício específico]"
TRANSFORM:  "De [atual] para [desejado] em [tempo]"
```

---

*Task Version: 1.0*
*Primary Framework: 21 Bullet Formulas (Gary Bencivenga)*


---

## Referência: references/create-headlines.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Create Headlines Task

## Purpose
Gerar headlines e hooks de alta conversão para qualquer peça de copy.

## Inputs

```yaml
required:
  - context: sales_page | email | ad | article | landing | webinar
  - product_name: Produto/serviço
  - main_benefit: Benefício principal
  - target_avatar: Público-alvo

optional:
  - secondary_benefits: Outros benefícios
  - objections: Objeções comuns
  - tone: Tom desejado
  - num_headlines: Quantidade (default: 10)
  - copywriter_style: Estilo específico
```

## Headline Formulas by Copywriter

### Gary Halbert Headlines
```
- "Como [RESULTADO] em [TEMPO] mesmo se [OBJEÇÃO]"
- "Atenção [AVATAR]: [PROMESSA ESPECÍFICA]"
- "A carta que está fazendo [AVATAR] [RESULTADO]"
- "Quem mais quer [BENEFÍCIO DESEJADO]?"
- "O segredo de [AUTORIDADE] para [RESULTADO]"
```

### David Ogilvy Headlines
```
- "[NÚMERO] maneiras de [BENEFÍCIO] - e como fazer cada uma"
- "Como fazer [RESULTADO] - um guia completo"
- "Por que [MARCA] é diferente de [ALTERNATIVA]"
- "O que [EXPERTS] sabem sobre [TÓPICO] que você não sabe"
- "A [ADJETIVO] maneira de [RESULTADO]"
```

### Eugene Schwartz Headlines
```
- "Finalmente - [SOLUÇÃO] para [PROBLEMA]"
- "Para [AVATAR] que quer [RESULTADO] mas [OBJEÇÃO]"
- "O [ADJETIVO] método de [RESULTADO] que [DIFERENCIAL]"
- "Revelado: [SEGREDO] de [AUTORIDADE]"
- "[RESULTADO] - sem [OBJEÇÃO], sem [OBJEÇÃO]"
```

### Claude Hopkins Headlines
```
- "[RESULTADO] garantido ou seu dinheiro de volta"
- "Teste grátis de [TEMPO] - [PRODUTO]"
- "[NÚMERO]% mais [BENEFÍCIO] comprovado"
- "Cupom: economize R$[VALOR] em [PRODUTO]"
- "Compare: [PRODUTO] vs [ALTERNATIVA]"
```

### Dan Kennedy Headlines
```
- "AVISO: Não [AÇÃO] até ler isso"
- "Última chance: [OFERTA] termina [DATA]"
- "Para [AVATAR] sérios sobre [RESULTADO]"
- "A oferta de R$[VALOR] que você não pode recusar"
- "Por que [AVATAR] inteligentes estão [AÇÃO]"
```

### Gary Bencivenga Headlines
```
- "O segredo de [AUTORIDADE] para [RESULTADO] (página X)"
- "Por que [CRENÇA COMUM] está errado - e o que fazer"
- "[NÚMERO] sinais de que você está [PROBLEMA]"
- "O erro de R$[VALOR] que [AVATAR] comete"
- "Como [AVATAR IMPROVÁVEL] conseguiu [RESULTADO]"
```

### Joe Sugarman Headlines
```
- "Era [DATA]. Eu estava [SITUAÇÃO]..."
- "Você não vai acreditar no que aconteceu quando..."
- "A verdade sobre [PRODUTO] que ninguém conta"
- "Por que [RESULTADO SURPREENDENTE]"
- "Minha história com [PRODUTO] - e o que descobri"
```

### Frank Kern Headlines
```
- "Como consegui [RESULTADO] (e você também pode)"
- "O método [ADJETIVO] para [RESULTADO]"
- "Cara, você precisa ver isso sobre [TÓPICO]"
- "[RESULTADO] - sem [OBJEÇÃO] (sério)"
- "O que [CLIENTE] fez para [RESULTADO]"
```

## Headline Categories

### Benefit Headlines
Foco no resultado que o cliente quer.

### Curiosity Headlines
Criam intrigue e desejo de saber mais.

### News Headlines
Apresentam algo novo ou revelador.

### Command Headlines
Dizem diretamente o que fazer.

### Question Headlines
Engajam fazendo o leitor responder mentalmente.

### How-To Headlines
Prometem ensinar algo específico.

### Testimonial Headlines
Usam voz de cliente satisfeito.

### Reason-Why Headlines
Explicam por que algo funciona.

## Output Format

```yaml
deliverables:
  - headline_variations: 10-20 opções
  - categorized_by: tipo (benefit, curiosity, etc.)
  - top_3_recommended: Com justificativa
  - a_b_test_pairs: 3 pares para teste
  - subheadline_options: 5 opções de complemento
```

## Evaluation Criteria

### The 4 U's (Copyblogger)
- **Useful:** É útil para o leitor?
- **Urgent:** Cria senso de urgência?
- **Unique:** É diferenciado?
- **Ultra-specific:** É específico o suficiente?

### SHINE Test
- **S**pecificity: Tem números, detalhes?
- **H**elpfulness: Promete ajudar?
- **I**mmediacy: Funciona rápido?
- **N**ewsworthiness: É novidade?
- **E**ntertainment: É interessante?

## Quality Checklist

- [ ] Benefício claro em <8 palavras
- [ ] Específico (números, resultados)
- [ ] Relevante para o avatar
- [ ] Diferenciado de concorrentes
- [ ] Promessa cumprível
- [ ] Testa bem em voz alta
- [ ] Funciona isoladamente

---

*Task Version: 1.0*


---

## Referência: references/create-video-hook.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Create Video Hook Task - Master Protocol

## Meta

```yaml
task_id: create-video-hook
version: 2.0.0
category: copy_creation
complexity: advanced
estimated_time: 30-60 min
dependencies:
  - diagnose-awareness-level.md
related_agents:
  - jon-benson.md
  - gary-halbert.md
  - todd-brown.md
research_source: docs/research/video-hook-methodology-research.md
```

---

## Purpose

Create video hooks that capture attention in the first 1-5 seconds and drive viewer retention across all video platforms—TikTok, Instagram Reels, YouTube Shorts, YouTube Ads, and VSLs (Video Sales Letters).

**Core Philosophy:** The 3-second threshold is the primary algorithmic checkpoint. Videos with 65%+ retention at 3 seconds receive 4-7x more impressions. Your hook must combine visual interruption, verbal engagement, and psychological triggers simultaneously.

---

## When to Use

### Ideal Use Cases

| Situation | Platform | Hook Length |
|-----------|----------|-------------|
| Creating VSL for sales page | Landing Page | 15-60 seconds |
| Running YouTube pre-roll ads | YouTube Ads | 5 seconds (anti-skip) |
| Organic YouTube content | YouTube Shorts | 3-5 seconds |
| Instagram content | Reels | 3 seconds |
| TikTok content | TikTok | 1-3 seconds |
| Facebook video ads | Facebook/Meta | 3 seconds |
| Opening webinars or lives | Webinar | 30-60 seconds |

### Platform Decision Matrix

| If Your Goal Is... | Use This Platform | Hook Priority |
|-------------------|-------------------|---------------|
| Viral reach + brand awareness | TikTok | Native feel, trend integration |
| High-quality engaged audience | Instagram Reels | Aesthetic + value |
| Evergreen discovery + subscribers | YouTube Shorts | Clear topic + value promise |
| Direct response conversions | YouTube Ads | Anti-skip + qualification |
| Sales conversions | VSL | Big idea + curiosity loop |

---

## Inputs

```yaml
required:
  video_purpose:
    type: enum
    options:
      - sell         # Direct response, conversion focus
      - educate      # Value-first, positioning
      - entertain    # Engagement, virality focus
      - lead_capture # Opt-in, list building
      - brand        # Awareness, positioning
    description: Primary objective of the video

  target_avatar:
    type: object
    fields:
      - who: String describing the ideal viewer
      - pain_points: List of specific problems they face
      - desires: List of outcomes they want
      - awareness_level: unaware|problem_aware|solution_aware|product_aware|most_aware

  main_message:
    type: string
    description: Core message, offer, or transformation to communicate

  platform:
    type: enum
    options:
      - tiktok
      - instagram_reels
      - youtube_shorts
      - youtube_ads
      - facebook_ads
      - vsl
      - webinar
    description: Primary distribution platform

optional:
  video_length:
    type: string
    description: Planned total video duration
    examples: ["30 seconds", "2 minutes", "15 minutes"]

  tone:
    type: enum
    options:
      - provocative
      - educational
      - urgent
      - casual
      - professional
      - humorous
    default: educational

  big_idea:
    type: string
    description: Unique mechanism or approach name (for VSL/ads)

  forbidden_claims:
    type: array
    description: Promises that cannot be made (compliance)

  brand_voice:
    type: string
    description: Existing brand voice/personality guidelines

  copywriter_preference:
    type: enum
    options:
      - jon_benson      # VSL master, curiosity loops
      - gary_halbert    # Pattern interrupt, storytelling
      - todd_brown      # Big idea, mechanism focus
      - eugene_schwartz # Awareness calibration
      - dan_kennedy     # Urgency, direct response
      - frank_kern      # Casual authenticity
```

---

## The 3-Second Threshold Science

### Why 3 Seconds Matters

The 3-second mark serves as the primary algorithmic checkpoint:

```
RETENTION CASCADE:

0-3 seconds → Algorithm evaluates → Push or bury decision
3-10 seconds → 65% continue → Content gets distribution
10-30 seconds → 45% continue → Algorithm boost
Full completion → Maximum distribution + recommendations
```

**Key Statistics:**
- **65%+ retention at 3 seconds** → 4-7x more impressions
- **Below 65% retention** → Content gets algorithmically buried
- **65% who watch first 3 seconds** → Continue for 10+ seconds
- **45% of those retained** → Watch for 30+ seconds

### The Two-Second Reality

While 3 seconds is measured, the decision happens earlier:

```
DECISION TIMELINE:

0-0.5s: Initial visual processing
0.5-1s: Novelty assessment ("What's this?")
1-2s:   Relevance judgment ("Is this for me?")
2-3s:   Engagement decision ("Should I watch?")
3s+:    Algorithm measurement ("Push or bury?")

IMPLICATION: Your stopping element must occur within first 2 seconds
```

---

## Psychological Triggers Framework

### Seven Core Triggers

Every effective hook leverages one or more psychological triggers:

| # | Trigger | Brain Question | Example |
|---|---------|----------------|---------|
| 1 | **Pattern Interrupt** | "What was that?" | Unexpected visual/sound |
| 2 | **Curiosity Gap** | "I need to know!" | Open loop, incomplete info |
| 3 | **Shock/Arousal** | "Did they really say that?" | Bold claim, surprising stat |
| 4 | **Visual Intrigue** | "What am I looking at?" | Motion, contrast, color |
| 5 | **Relatability** | "That's me!" | POV, common experience |
| 6 | **Value-First** | "This could help me!" | Clear benefit promise |
| 7 | **Social Proof/FOMO** | "Everyone's doing this!" | Numbers, urgency |

### Trigger Selection by Platform

| Platform | Primary Triggers | Secondary Triggers |
|----------|-----------------|-------------------|
| TikTok | Relatability, Pattern Interrupt | Curiosity, Value |
| Reels | Visual Intrigue, Value-First | Social Proof, Shock |
| Shorts | Curiosity Gap, Value-First | Shock, Pattern Interrupt |
| YouTube Ads | Pattern Interrupt, Shock | FOMO, Value |
| VSL | Curiosity Gap, Shock | Value, Pattern Interrupt |

### The H.O.O.K. Framework

**H - Halt the Scroll**
- Visual or audio pattern interrupt
- Something unexpected/different in first 0.5 seconds

**O - Offer Relevance**
- "This is for YOU specifically"
- Avatar qualification in seconds 1-2

**O - Open a Loop**
- Create information gap
- Tease without revealing

**K - Keep Them Watching**
- Promise value/resolution
- Give timeline expectation

---

## Pattern Interrupt Techniques

### Visual Pattern Interrupts

| Technique | Description | When to Use |
|-----------|-------------|-------------|
| **Extreme Close-Up** | Face fills 80%+ of frame | Personal content, emotional hooks |
| **Unexpected Movement** | Sudden motion in static scene | Attention capture |
| **Color Contrast** | Bright/unusual color palette | Standing out in feed |
| **Text Overlay Shock** | Large, bold text with number/claim | Statistical hooks |
| **Unusual Angle** | Camera position defies expectation | Pattern breaking |
| **Object Intrusion** | Unexpected item enters frame | Product demos |
| **Split Second Flash** | Brief visual that demands rewatch | Proof/evidence hooks |

### Audio Pattern Interrupts

| Technique | Description | When to Use |
|-----------|-------------|-------------|
| **Sudden Silence** | Music/sound cuts abruptly | Creating tension |
| **Unexpected Sound** | Sound that doesn't match visual | Pattern breaking |
| **Volume Spike** | Sudden loud moment | Command attention |
| **Whisper Contrast** | Unusually quiet delivery | Sharing secrets |
| **Sound Effect Emphasis** | Effect punctuates statement | Emphasizing claims |

### Verbal Pattern Interrupts

| Technique | Example | Effect |
|-----------|---------|--------|
| **Direct Command** | "Stop scrolling." | Triggers compliance |
| **Contrarian Statement** | "Everything you know is wrong." | Creates cognitive dissonance |
| **Incomplete Thought** | "The one thing that changed..." | Zeigarnik effect |
| **Question Direct** | "Can I ask you something?" | Personal address |
| **Confession** | "I made a huge mistake." | Vulnerability creates connection |

---

## Workflow

### Phase 1: Pre-Hook Strategy

#### Step 1.1: Platform Analysis

```yaml
PLATFORM REQUIREMENTS:

tiktok:
  hook_window: 1-2 seconds
  text_overlay: Essential (sound-off viewers)
  native_feel: Critical (ad-looking content punished)
  trend_integration: Helpful (algorithm boost)
  face_presence: Recommended (higher engagement)
  format: Vertical 9:16

instagram_reels:
  hook_window: 3 seconds
  text_overlay: Important
  visual_quality: Higher standard required
  brand_polish: Accepted (platform tolerates branded)
  aesthetic: Important (low-quality gets scrolled)
  format: Vertical 9:16

youtube_shorts:
  hook_window: 3 seconds
  clear_subject: Essential (instant topic clarity)
  quality: Important (platform expectations)
  value_promise: Critical (YouTube audience expects learning)
  format: Vertical 9:16

youtube_ads:
  hook_window: 5 seconds (beat skip button)
  anti_skip_design: Critical
  immediate_value: Essential (justify interruption)
  qualification: Important (right viewers fast)
  format: Horizontal 16:9 or Vertical

vsl:
  hook_window: 15-60 seconds
  qualification: Essential
  big_idea_tease: Critical
  credibility_hint: Important
  curiosity_loop: Necessary
  format: Horizontal 16:9
```

#### Step 1.2: Awareness Level Calibration

Adapt hook approach based on audience awareness:

| Awareness Level | Hook Focus | Example Approach |
|----------------|------------|------------------|
| **Unaware** | Problem identification | "Do you ever feel [symptom]?" |
| **Problem Aware** | Solution teasing | "Why [common solutions] fail..." |
| **Solution Aware** | Mechanism differentiation | "Forget [common]. Try [unique]." |
| **Product Aware** | Proof and urgency | "Here's why [number] chose this" |
| **Most Aware** | Offer and action | "Ready? Here's how to start today." |

#### Step 1.3: Big Idea Development (For VSL/Ads)

Before writing the hook, define the Big Idea:

```yaml
BIG_IDEA_FORMULA:

"The [Unique Mechanism Name] that [Specific Result]
without [Pain Avoided]"

CRITERIA:
- Different from everything audience has seen
- Specific (not generic)
- Credible (with proof or logic)
- Desirable (audience wants this)
- Explainable in one sentence

EXAMPLES:
- "The Metabolic Reset Protocol that burns fat while you sleep—without dieting"
- "The 3-Step Funnel Framework that generated $2.4M—without paid ads"
- "The Conversation Closing Method that closes 80%—without feeling salesy"
```

### Phase 2: Hook Formula Selection

#### Step 2.1: Master Hook Formulas

Select from twelve proven formulas:

**1. Pattern Interrupt Formula**
```
[Unexpected element] + "Here's what you need to know..."
Best for: Short-form social, attention capture
```

**2. Bold Claim Formula**
```
"[Specific result] in [timeframe]. Let me show you how."
Best for: Results-focused content, credibility
```

**3. Provocative Question Formula**
```
"Why do [majority] [fail] while [minority] [succeed]?"
Best for: Educational content, curiosity
```

**4. Story Opening Formula**
```
"[Time period] ago, I was [relatable struggle]. Today, [success]. Here's what changed."
Best for: Transformation content, relatability
```

**5. Contrarian Formula**
```
"Everything you know about [topic] is wrong. Here's the truth."
Best for: Differentiation, bold positioning
```

**6. Curiosity Gap Formula**
```
"There's ONE factor that separates [winners] from [losers]—and it's not what you think."
Best for: Long-form, keeping attention
```

**7. If-Then Formula**
```
"If you [situation], then what I'm about to share will [transformation]."
Best for: Qualification, targeted content
```

**8. Specificity Formula**
```
"[Exact number] [result] in [exact timeframe] using [method name]."
Best for: Proof-based content, credibility
```

**9. Social Proof Formula**
```
"[Number] people have already [result]. Here's how you can too."
Best for: FOMO, mass appeal
```

**10. Enemy/Villain Formula**
```
"[System/industry] wants you to keep [problem]. Here's the truth they're hiding."
Best for: Contrarian positioning, distrust content
```

**11. Demonstration Formula**
```
"Watch this..." [Show result] "Here's how to do it."
Best for: Visual proof, tutorials
```

**12. Value-First Formula**
```
"In the next [time], I'll teach you [valuable skill]. No fluff."
Best for: Educational content, trust building
```

#### Step 2.2: Platform-Specific Hook Templates

**TikTok Hook Templates:**

```
POV HOOK:
"POV: [Relatable scenario the viewer experiences]"
Example: "POV: You just discovered your marketing strategy is backwards"

STORY TIME HOOK:
"Storytime: [Intriguing premise]"
Example: "Storytime: How I made $10,000 from my bedroom in one weekend"

WAIT FOR IT HOOK:
[Visual setup] + "Wait for it..."
Example: [Mixing ingredients] "Watch what happens when I add this"

REPLY HOOK:
"Replying to @[user]: [Answer to their question]"
Example: "Replying to @skeptic: Here's proof this actually works"

UNPOPULAR OPINION HOOK:
"Unpopular opinion: [Contrarian statement]"
Example: "Unpopular opinion: Posting daily is destroying your reach"
```

**Instagram Reels Hook Templates:**

```
BEFORE/AFTER HOOK:
[Split screen or quick cut] "Before → After"
Example: [Old results] "This was my engagement" [New results] "This is now"

STOP DOING THIS HOOK:
"Stop [common mistake] immediately"
Example: "Stop posting at random times—here's why it's killing your reach"

HOW I HOOK:
"How I [achieved result] in [timeframe]"
Example: "How I grew to 100k followers in 6 months without ads"

THE SECRET HOOK:
"The [niche] secret that [experts] don't want you to know"
Example: "The Instagram secret that agencies charge $1000 to share"

TUTORIAL HOOK:
"[Skill] tutorial in [time]"
Example: "Color grading tutorial in 60 seconds"
```

**YouTube Shorts Hook Templates:**

```
DID YOU KNOW HOOK:
"Did you know that [surprising fact]?"
Example: "Did you know 90% of copywriters fail because of this one mistake?"

IN X SECONDS HOOK:
"In the next [time], I'll show you [valuable thing]"
Example: "In 45 seconds, I'll show you how to double your email open rates"

MOST PEOPLE HOOK:
"Most people [do wrong thing]. Here's what to do instead."
Example: "Most people start videos wrong. Here's how to hook in 3 seconds"

I TESTED HOOK:
"I tested [thing] for [time]. Here's what happened."
Example: "I tested 100 TikTok hooks. These 5 worked best."

NUMBER LIST HOOK:
"[Number] [things] that [outcome]"
Example: "5 video hooks that get 10x more views"
```

**YouTube Ads Hook Templates:**

```
WAIT/STOP HOOK:
"Wait—don't skip yet. If you're [avatar], the next 60 seconds will [promise]."
Example: "Wait. If you're struggling with leads, the next 60 seconds will change everything."

SHOCKING STAT HOOK:
"[Shocking statistic about avatar's problem]"
Example: "97% of Facebook ads fail. Here's why yours is probably one of them."

STORY TEASE HOOK:
"Six months ago, I was [relatable bad]. Today, [good outcome]. Here's what changed."
Example: "Six months ago, I was $50k in debt. Today, my business does $100k/month."

QUESTION CHALLENGE HOOK:
"Can I ask you something honest? [Provocative question]"
Example: "Why are you still doing [outdated method] when [better way] exists?"

IF-THEN HOOK:
"If you [situation], then what I'm about to show you could [transformation]."
Example: "If you've tried courses before and failed, this is probably why."
```

**VSL Hook Templates:**

```
BIG IDEA REVEAL HOOK (15-30s):
"What I'm about to share with you is the [Mechanism Name] that [result] without [pain]."
Example: "What I'm about to share is the 'Compound Launch Method' that generated $2.4 million in 72 hours—without a single ad."

QUALIFICATION + PROMISE HOOK (30-45s):
"If you're a [specific avatar] who wants [specific outcome], pay close attention. In the next [time], I'm going to show you [specific transformation]."
Example: "If you're a coach who wants $50k months consistently, pay attention. In the next 12 minutes, I'll show you the exact system that took me to $127,000 months."

STORY + CURIOSITY HOOK (30-45s):
"On [specific date], something happened that changed how I think about [topic]. I'm going to tell you that story—and show you how to use what I learned."
Example: "On March 14th, 2023, I discovered something every guru was hiding. Today, I'm revealing it."

CONTRARIAN + MECHANISM HOOK (20-30s):
"Everything you've been taught about [topic] is wrong. And I can prove it. There's a [mechanism name] that [experts] don't want you to know about."
Example: "Everything about copywriting is backwards. There's a 'Reverse Engineering Protocol' that lets beginners outperform pros."

TIME-STAMPED RESULT HOOK (15-20s):
"[Specific time]. [Specific result]. [Specific method]. That's exactly what I'm about to break down."
Example: "90 days. $500,000. Zero paid ads. That's exactly what I'm showing you how to replicate."
```

### Phase 3: Hook Creation

#### Step 3.1: Write Multiple Variations

For each video, create at least 5 hook variations:

```yaml
VARIATION STRATEGY:

variation_1:
  formula: Pattern Interrupt
  trigger: Shock/Arousal

variation_2:
  formula: Bold Claim
  trigger: Social Proof

variation_3:
  formula: Question
  trigger: Curiosity Gap

variation_4:
  formula: Story Opening
  trigger: Relatability

variation_5:
  formula: Contrarian
  trigger: Pattern Interrupt
```

#### Step 3.2: Apply Visual Hook Design

For each hook, specify visual elements:

```yaml
VISUAL HOOK COMPONENTS:

text_overlay:
  content: "[3-5 word hook summary]"
  position: center-top
  font: Bold sans-serif
  color: High contrast (white on dark, yellow highlight)
  animation: Simple appear/pop

first_frame:
  subject: Face at 40% of frame OR product demonstration
  background: Contextual, uncluttered
  eye_path: Face → Text → Context

movement:
  type: [zoom_in | zoom_out | pan | snap_cut | static]
  timing: Movement in first 0.5 seconds
  purpose: Pattern interrupt

color_strategy:
  primary: [Based on platform and emotion]
  accent: High contrast for key elements
  consistency: Match brand guidelines if applicable
```

#### Step 3.3: Apply Audio Hook Design

```yaml
AUDIO HOOK COMPONENTS:

first_words:
  type: [command | question | statement | exclamation]
  examples:
    command: "Stop.", "Wait.", "Listen."
    question: "Can I?", "Why?", "What if?"
    statement: "This changed...", "The truth is..."
    exclamation: "Finally!", "Yes!", "Wow!"

delivery:
  energy_level: [high | medium | whisper]
  pace: Varies by platform (TikTok fastest, VSL slowest)
  emphasis: Stress on key words

sound_design:
  music: [trending | branded | none]
  effects: Impact sounds at key moments
  volume: Consider mute-ready design

mute_ready_check:
  - [ ] Visual is self-explanatory
  - [ ] Text overlay carries message
  - [ ] Emotion readable from expression
  - [ ] Value proposition visible
```

#### Step 3.4: VSL Extended Hook Structure

For VSLs, follow extended timeline:

```yaml
VSL_HOOK_TIMELINE:

0-5s: PATTERN INTERRUPT
  - Visual or audio stop
  - Bold opening statement/question

5-15s: QUALIFICATION
  - "If you're [avatar]..."
  - "This is specifically for..."
  - Self-select right viewers

15-30s: BIG IDEA TEASE
  - Introduce mechanism name
  - Hint at unique approach
  - Create curiosity gap

30-45s: CREDIBILITY ESTABLISHMENT
  - Result proof hint
  - Authority positioning
  - "Why listen to me?"

45-60s: WATCH PROMISE
  - What they'll learn
  - Why it matters
  - Time expectation
```

### Phase 4: Quality Validation

#### Step 4.1: Platform Checklist

**TikTok Hook Checklist:**
- [ ] Works without sound (text overlay sufficient)
- [ ] Native/organic feel (doesn't look like an ad)
- [ ] Text overlay present and readable
- [ ] First 1 second has stopping power
- [ ] Trend-aware (uses current formats if relevant)
- [ ] Face visible (if personal brand)
- [ ] Vertical 9:16 format

**Instagram Reels Hook Checklist:**
- [ ] Higher production quality
- [ ] Aesthetic considerations met
- [ ] Clear value proposition
- [ ] Text overlay present
- [ ] Brand-appropriate tone
- [ ] Vertical format optimized

**YouTube Shorts Hook Checklist:**
- [ ] Clear topic in first 2 seconds
- [ ] Value promise explicit
- [ ] Quality matches YouTube standards
- [ ] Works as thumbnail still
- [ ] Educational bent (if appropriate)
- [ ] Subscribe CTA considered

**YouTube Ad Hook Checklist:**
- [ ] Beats 5-second skip impulse
- [ ] Qualifies right audience immediately
- [ ] Pattern interrupt in first 2 seconds
- [ ] Clear reason to keep watching
- [ ] Stakes established early
- [ ] Conversion path clear

**VSL Hook Checklist:**
- [ ] Big Idea named and teased
- [ ] Audience qualified in first 15 seconds
- [ ] Curiosity loop opened
- [ ] Credibility hinted
- [ ] Watch time promise given
- [ ] Multiple engagement points planned

#### Step 4.2: Psychological Trigger Verification

```yaml
TRIGGER_VERIFICATION:

For each hook, verify at least 2 triggers present:

- [ ] Pattern Interrupt: Does it stop the scroll?
- [ ] Curiosity Gap: Does it open a loop?
- [ ] Shock/Arousal: Does it surprise?
- [ ] Visual Intrigue: Does it catch the eye?
- [ ] Relatability: Does avatar see themselves?
- [ ] Value-First: Is benefit clear?
- [ ] Social Proof: Is credibility established?
```

#### Step 4.3: Read-Aloud Test

```
READ-ALOUD PROTOCOL:

1. Read hook aloud at intended pace
2. Time it (must fit platform window)
3. Check for:
   - Natural flow
   - Clear pronunciation
   - Appropriate energy
   - No tongue-twisters

4. Record yourself and listen back
5. Adjust for conversational delivery
```

### Phase 5: A/B Testing Plan

#### Step 5.1: Define Test Variables

```yaml
HOOK_TEST_VARIABLES:

high_priority:
  - Opening word/phrase
  - Text overlay presence/copy
  - Visual start (face vs. product vs. text)

medium_priority:
  - Hook formula type
  - Energy level
  - Hook length (3s vs. 5s vs. 8s)

low_priority:
  - Background music
  - Color scheme
  - Specific word choices
```

#### Step 5.2: Metrics to Track

```yaml
PRIMARY_METRICS:
  3_second_retention: "% who watch past 3s"
  hook_rate: "% who watch past hook portion"
  50_percent_completion: "% who watch half"
  full_completion: "% who watch entire video"

SECONDARY_METRICS:
  ctr: "Click-through rate on CTA"
  engagement: "Likes, comments, shares"
  watch_time: "Total accumulated view time"
  rewatch_rate: "% who rewatch portions"
```

#### Step 5.3: Test Protocol

```yaml
TESTING_PROTOCOL:

phase_1_hook_type_test:
  variants: 5 (different hook formulas)
  same_content: Yes
  duration: 48 hours minimum
  winner_criteria: Highest 3-second retention

phase_2_hook_optimization:
  variants: 3 (winning type variations)
  test_elements: Copy, visual, energy
  duration: 48 hours
  winner_criteria: Highest full completion

phase_3_scaling_test:
  action: Apply winning hook to similar content
  purpose: Verify formula is repeatable
  documentation: Add to swipe file
```

---

## Output Format

```yaml
format: markdown

sections:

  platform_strategy:
    description: Platform analysis and requirements

  avatar_calibration:
    description: Awareness level and trigger selection

  big_idea (if VSL/ads):
    description: Unique mechanism definition

  hook_variations:
    count: 5 minimum per platform
    format: Full text with visual/audio direction

  visual_direction:
    description: First frame, movement, text overlay specs

  audio_direction:
    description: Voice delivery, music, sound effects

  full_script_outline (if long-form):
    description: Hook + structure for full video

  ab_testing_plan:
    description: Variables, metrics, protocol

  quality_checklist:
    description: Platform-specific validation
```

---

## Copywriter Recommendations by Context

| Context | Copywriter | Why |
|---------|-----------|-----|
| VSL high conversion | Jon Benson | Invented VSL, curiosity loop master |
| Pattern interrupt mastery | Gary Halbert | Storytelling, pattern break pioneer |
| Big idea development | Todd Brown | Unique mechanism, differentiation |
| Awareness-calibrated hooks | Eugene Schwartz | 5 levels of awareness |
| Urgency and direct response | Dan Kennedy | Deadline-driven, action-focused |
| Casual, authentic content | Frank Kern | Approachable, real |
| Hypnotic flow | Joe Sugarman | Smooth transitions, engagement |
| Fascination-style hooks | Gary Bencivenga | Curiosity + specificity |

---

## Hook Swipe File

### Pattern Interrupt Hooks
```
"Stop."
"Wait—don't scroll."
"Okay, this is important."
"I need to tell you something."
"Delete everything you think you know."
"This isn't what you think."
"Forget everything you've heard about [topic]."
```

### Question Hooks
```
"Why does [problem] keep happening?"
"What if I told you [surprising truth]?"
"Have you ever wondered why [mystery]?"
"Did you know that [statistic]?"
"Want to know the real reason [outcome]?"
"Can I be honest with you for a second?"
"What if [belief] is completely wrong?"
```

### Bold Claim Hooks
```
"I made [$amount] in [time]. Here's how."
"This one thing 10x'd my results."
"[Number]% of people are doing this wrong."
"The real reason you're stuck is..."
"I cracked the code on [topic]."
"[Result] in [time]—and I can prove it."
```

### Story Hooks
```
"[Time] ago, I was [struggle]. Today, [success]."
"Let me tell you about the worst mistake I made."
"I almost gave up. Then this happened."
"Nobody tells you about the dark side of [topic]."
"Here's what [expert] taught me in private."
"On [date], everything changed..."
```

### Contrarian Hooks
```
"Everything you learned about [topic] is wrong."
"[Common advice] is actually hurting you."
"The 'experts' are lying to you about [topic]."
"Stop doing [common practice]. Here's why."
"[Popular thing] is overrated. Try this instead."
"What if [conventional wisdom] is backwards?"
```

### Curiosity Hooks
```
"There's ONE thing that separates [winners] from [losers]."
"The secret [industry] doesn't want you to know."
"What happens next will surprise you."
"I discovered something 99% don't know about."
"The hidden reason behind [outcome]..."
"Watch until the end—it's not what you expect."
```

### Specificity Hooks
```
"$147,382 in 23 days using [method]."
"From 0 to 100,000 followers in 6 months."
"87% of [avatars] are making this mistake."
"3 steps. 15 minutes. Complete transformation."
"[Exact number] [results] in [exact timeframe]."
```

### Social Proof Hooks
```
"[Number] people have already [result]."
"Join [number] [avatars] who discovered [secret]."
"Why [number] of [professionals] are switching to [method]."
"The approach that [authority] personally uses."
"What [number] successful [avatars] have in common."
```

---

## Quick Reference: Hook Formulas Summary

```
PATTERN INTERRUPT:  "Pare. [Provocação]."
BOLD CLAIM:         "[Resultado] em [tempo]. Vou provar."
QUESTION:           "Por que [maioria] [falha] enquanto [minoria] [sucede]?"
STORY:              "Há [tempo], eu estava [antes]. Hoje [depois]."
CONTRARIAN:         "Tudo sobre [tema] está errado. Aqui está a verdade."
CURIOSITY:          "A única coisa que separa [sucesso] de [fracasso]..."
IF-THEN:            "Se você [situação], os próximos [tempo] mudam tudo."
SPECIFICITY:        "[Número exato] [resultado] em [período exato]."
SOCIAL PROOF:       "[Número] de [avatares] já [resultado]. Você é o próximo."
ENEMY:              "[Sistema] quer que você continue [problema]."
DEMONSTRATION:      "Olha isso..." [Mostra resultado] "Vou ensinar como."
VALUE-FIRST:        "Em [tempo], vou te ensinar [habilidade]. Sem enrolação."
```

---

## Video Structure Post-Hook

After the hook captures attention, maintain engagement:

```
HOOK (0-5s)
↓
QUALIFICAÇÃO (5-15s)
"Isso é para você se..."
↓
PROBLEMA/DOR (15-45s)
Agite o problema
↓
SOLUÇÃO/BIG IDEA (45-90s)
Apresente o mecanismo
↓
PROVA (90-120s)
Depoimentos, números
↓
OFERTA (120-180s)
O que recebe, preço
↓
CTA (180s+)
O que fazer agora
```

---

## Related Tasks

- `diagnose-awareness-level.md` - Calibrate hooks to awareness
- `vsl-script.md` - Full VSL creation
- `create-ad-copy.md` - Ad copy with hooks
- `create-ad-script.md` - Video ad scripts

---

## Related Checklists

- `video-hook-quality-checklist.md` - Validation
- `platform-compliance-checklist.md` - Platform rules

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024 | Initial task |
| 2.0 | 2026-01-23 | Complete rewrite with research framework, platform-specific strategies, psychological triggers |

---

*Task Version: 2.0.0*
*Copy Framework v2.0 - Elite Copywriting Squad*
*Research Source: docs/research/video-hook-methodology-research.md*

---

# ═══════════════════════════════════════════════════════════════════════════
# HORMOZI FRAMEWORK - EXTRAÍDO DOS ARTIFACTS MMOS
# Data: 2026-01-23 | Enrichment Phase ENR-004
# ═══════════════════════════════════════════════════════════════════════════

## Hormozi Hook Patterns

> **Fonte:** `02_VALUE_EQUATION_ENGINE.md`, `01_FRAMEWORKS_OPERACIONAIS.md`

### Value Equation Aplicada a Video Hooks

A mesma equação que maximiza valor de ofertas também define hooks eficazes:

```
Valor do Hook = (Dream Outcome × Perceived Likelihood)
                ÷ (Time Delay × Effort Required)
```

**Tradução para Hooks:**
- **Dream Outcome:** A transformação prometida no hook
- **Perceived Likelihood:** Provas e especificidade que geram crença
- **Time Delay:** Quão rápido o viewer sente que conseguirá o resultado
- **Effort:** Quão fácil parece alcançar o resultado

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 2]

### Enquadramento por Status (Hook Tática Mestra)

O princípio mais poderoso do Hormozi aplicado a hooks:

> "As pessoas não compram produtos; elas compram um futuro melhor. O Resultado dos Sonhos está fundamentalmente ligado ao **aumento de status** percebido."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.1]

**Aplicação em Hooks:**

| Hook Fraco (Benefício Direto) | Hook Forte (Enquadramento de Status) |
|------------------------------|-------------------------------------|
| "Aprenda a fazer mais vendas" | "Seus concorrentes vão perguntar o que você fez diferente" |
| "Perca 10kg em 30 dias" | "Todos vão perguntar: 'O que você fez?'" |
| "Ganhe mais dinheiro" | "Imagine a cara do seu chefe quando você sair" |

**Template de Hook por Status:**
```
"Quando você [resultado], [pessoas] vão [reação de status]...
eles vão perguntar [pergunta de curiosidade]...
só você vai saber [o segredo]."
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.1]

### Hooks de Especificidade (Precificação por Nicho)

O framework de precificação por nicho do Hormozi se aplica a hooks:

> "A especialização permite cobrar preços exponencialmente mais altos... o valor percebido aumenta com a relevância."
> [Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.2]

| Hook Genérico (Baixo Engagement) | Hook Hiper-Específico (Alto Engagement) |
|----------------------------------|----------------------------------------|
| "Dicas para empreendedores" | "Para coaches que faturam entre $10k-$30k/mês" |
| "Como ter mais clientes" | "3 estratégias para advogados B2B fecharem contratos de $50k+" |
| "Melhore seu marketing" | "O sistema que agências de tráfego usam para ROAS 5:1+" |

**Fórmula de Hook Específico:**
```
"Se você é [AVATAR ULTRA-ESPECÍFICO] que quer [RESULTADO ESPECÍFICO]..."
```

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.2]

### Hooks de Prova Social (Probabilidade Percebida)

> "As pessoas pagam por **certeza**. Uma promessa ousada sem prova gera ceticismo."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.2]

**Hooks com Números Específicos:**
```
"$147,382 em 23 dias usando este método."
"De 0 a 100.000 seguidores em 6 meses."
"87% dos coaches estão cometendo este erro."
"3 passos. 15 minutos. Transformação completa."
```

**Hooks com Prova de Resultado:**
```
"O sistema exato que gerou $12M+ para meus clientes."
"Isso funcionou para 500+ negócios - aqui está o padrão."
"ROAS de 36:1. Aqui está como."
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.2]

### Hooks de "Rápido Supera Grátis"

> "A diminuição do atraso temporal, tanto real quanto percebido, aumenta exponencialmente o valor."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.3]

**Hooks de Velocidade:**
```
"Nos próximos 60 segundos, vou te mostrar..."
"Uma mudança. Resultados em 24 horas."
"O atalho que leva 3 minutos para implementar."
"Vitória rápida: faça isso HOJE."
```

**Hooks de Imediatismo:**
```
"Você pode usar isso AGORA MESMO."
"Resultado instantâneo. Sem espera."
"Comece a ver diferença ainda hoje."
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.3]

### Hooks de Baixo Esforço (DFY/DWY)

> "O valor aumenta drasticamente à medida que se move de 'Faça Você Mesmo' para 'Feito Com Você' e 'Feito Para Você'."
> [Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.4]

**Hooks de Facilidade:**
```
"Copie e cole. Nada mais."
"Eu fiz todo o trabalho difícil por você."
"Zero esforço. Resultados máximos."
"A versão preguiçosa de [resultado]."
```

**Hooks de Simplicidade:**
```
"UMA única coisa que muda tudo."
"O método mais simples que já vi."
"Esqueça tudo que você aprendeu - isso é mais fácil."
```

[Fonte: 02_VALUE_EQUATION_ENGINE.md, Seção 3.4]

### Hooks "Grand Slam" (5 Componentes)

Uma Grand Slam Offer combina 5 elementos. Um hook pode enfatizar qualquer um:

| Componente | Exemplo de Hook |
|------------|-----------------|
| **Promoção Atraente** | "A única oferta que existe para [avatar específico]" |
| **Proposta Incomparável** | "Ninguém mais está fazendo isso assim" |
| **Preço Premium Justificado** | "Por que cobro 10x mais (e meus clientes agradecem)" |
| **Garantia Imbatível** | "Se não funcionar, eu te pago $1000 do meu bolso" |
| **Modelo de Dinheiro** | "Como sou pago para adquirir novos clientes" |

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 3.3]

### Hook Framework: More. Better. Different.

Aplique a estratégia de aquisição do Hormozi para criar hooks:

| Estratégia | Tipo de Hook |
|------------|--------------|
| **MAIS** | "Faça mais do que já funciona - aqui está o que funciona" |
| **MELHOR** | "O mesmo método, 10x mais eficiente" |
| **DIFERENTE** | "Esqueça tudo isso - aqui está o que realmente funciona" |

**Hooks "DIFERENTE" (mais virais):**
```
"Tudo que você aprendeu sobre [tema] está errado."
"Enquanto todos fazem X, os top 1% fazem Y."
"O método que 'eles' não querem que você saiba."
```

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 5.5]

### Hooks C.L.O.S.E.R. para Vídeos de Vendas

Adapte o framework de vendas para hooks de VSL:

| Letra | Hook Correspondente |
|-------|-------------------|
| **C - Clarify** | "Se você está aqui, é porque quer [resultado]..." |
| **L - Label** | "Você está travado em [problema específico], certo?" |
| **O - Overview** | "Você já tentou [solução comum] e não funcionou..." |
| **S - Sell** | "O que vou mostrar é diferente de tudo que você viu." |
| **E - Explain** | "E vou te explicar EXATAMENTE por que funciona." |
| **R - Reinforce** | "Isso já funcionou para [número] pessoas como você." |

[Fonte: 01_FRAMEWORKS_OPERACIONAIS.md, Seção 6.1]

### Swipe File de Hooks Hormozi-Style

**Hooks de Value Equation:**
```
"O que eu vou te mostrar aumenta [resultado] enquanto diminui [esforço]."
"Resultado dos sonhos. Zero esforço. Aqui está como."
"10x o resultado em 1/10 do tempo."
"A forma mais rápida e fácil de [resultado] que eu conheço."
```

**Hooks de Status:**
```
"Seus amigos vão perguntar o que mudou."
"O método que vai fazer você parecer genial."
"Quando seu chefe descobrir o que você fez..."
"Todos vão querer saber seu segredo."
```

**Hooks de Especificidade:**
```
"Para [avatar ultra-específico] que querem [resultado específico]."
"Se você faz entre [X] e [Y] por mês, preste atenção."
"Isso é APENAS para quem [critério de qualificação]."
"Não funciona para todo mundo - só para [tipo específico]."
```

**Hooks de Prova:**
```
"[Número exato] em [período exato] usando [método]."
"Taxa de sucesso de [X]% com mais de [Y] clientes."
"De [resultado ruim] para [resultado bom] em [tempo]."
"Isso gerou [resultado específico] - vou provar."
```

**Hooks de Garantia/Risco Zero:**
```
"Se não funcionar, você não paga nada."
"Eu assumo todo o risco. Você só ganha."
"Garantia: [resultado específico] ou dinheiro de volta."
"Zero risco para você. Todo o risco é meu."
```

### Checklist Hormozi para Video Hooks

Antes de gravar, verifique se seu hook tem:

- [ ] **Dream Outcome Claro:** A transformação está explícita nos primeiros 3 segundos?
- [ ] **Enquadramento de Status:** Conecta o resultado a como outros verão o viewer?
- [ ] **Especificidade:** Avatar e resultado são ultra-específicos?
- [ ] **Prova:** Há números, resultados ou credenciais mencionadas?
- [ ] **Velocidade:** Promete resultado rápido ou vitória imediata?
- [ ] **Facilidade:** Parece fácil de implementar/alcançar?
- [ ] **Incomparabilidade:** Diferencia de tudo que existe no mercado?

---

*Hormozi Framework Enrichment - ENR-004*
*Fontes: 01_FRAMEWORKS_OPERACIONAIS.md, 02_VALUE_EQUATION_ENGINE.md*
*Data da Extração: 2026-01-23*


---

## Referência: references/identidade.json

{
  "schema_version": 1,
  "contract_version": "1.0.0",
  "skill_id": "copy-headlines",
  "distribution_version": "0.4.3",
  "content_revision": "1.1.0",
  "distribution_ref": "codex/habitos-que-cabem"
}


---

## Referência: references/write-lampropoulos-bullets.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# write-lampropoulos-bullets

Task para criar fascinations/bullets de classe mundial seguindo a metodologia Parris Lampropoulos - o mestre dos bullets que manteve um controle por 12 anos na Boardroom.

## TASK METADATA

```yaml
task:
  name: Write Lampropoulos-Style Bullets
  id: write-lampropoulos-bullets
  category: copywriting
  difficulty: advanced
  time_estimate: "2-4 hours para processo completo"
  agent: parris-lampropoulos

prerequisites:
  - Research completa sobre produto/serviço
  - Material fonte (livro, curso, produto) disponível
  - Avatar do cliente definido

outputs:
  - Lista de 100+ bullets finais
  - Categorização por tipo de bullet
  - Bullets selecionados para uso prioritário
```

---

## OVERVIEW

Esta task implementa o sistema 700-to-100 de Parris Lampropoulos - a metodologia que o tornou um dos copywriters mais bem-sucedidos da Boardroom Inc.

**A Fórmula Mestre:**
```
ESPECIFICIDADE + CURIOSIDADE + BENEFÍCIO + PROVA = Bullet Irresistível
```

**O Princípio Central:**
> "Eu escrevo 700 bullets para usar 100. Isso não é exagero—é craft. Cada bullet deve ser capaz de fazer a venda sozinho."
> — Parris Lampropoulos

---

## PHASE 1: DEEP RESEARCH MINING

### 1.1 Preparação do Material

**Objetivo:** Extrair TODA informação relevante do material fonte.

**Processo:**
```
┌─────────────────────────────────────────────────────────────┐
│ SISTEMA DE INDEX CARDS (Método Lampropoulos)                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────┐                                │
│  │ CARD #147              │                                │
│  │                        │                                │
│  │ Fato: "Estudo Harvard  │  ← Um fato por card            │
│  │ mostrou que 10 min de  │                                │
│  │ caminhada = 47% menos  │                                │
│  │ risco cardíaco"        │                                │
│  │                        │                                │
│  │ Fonte: pg. 47          │  ← SEMPRE incluir página       │
│  │ Categoria: PROVA       │  ← Categorizar para busca      │
│  └─────────────────────────┘                                │
│                                                             │
│ Categorias para organização:                                │
│ • PROBLEMA - Dores, frustrações, sintomas                   │
│ • SOLUÇÃO - Métodos, técnicas, abordagens                   │
│ • MECANISMO - Como/por que funciona                         │
│ • PROVA - Estudos, estatísticas, resultados                 │
│ • HISTÓRIA - Casos, exemplos, narrativas                    │
│ • SURPRESA - Fatos contra-intuitivos, segredos              │
│ • NÚMERO - Dados específicos, quantificações                │
│ • EXPERT - Citações, credenciais, autoridade                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 O Que Procurar

**Elementos de Alto Valor para Bullets:**

| Elemento | Por Que Funciona | Exemplo |
|----------|------------------|---------|
| Números específicos | Credibilidade instantânea | "47%" não "quase metade" |
| Nomes de experts | Autoridade emprestada | "Dr. Mark Hyman de Harvard" |
| Paradoxos | Curiosidade irresistível | "Por que comer mais emagrece" |
| Segredos | Exclusividade percebida | "O que médicos não contam" |
| Estudos | Prova científica | "Estudo de Yale com 3.000 pessoas" |
| Histórias | Conexão emocional | "O homem de 87 anos que..." |
| Mecanismos | Explicação do 'por quê' | "O hormônio que..." |
| Contrastes | Tensão/interesse | "Antes/Depois", "Comum/Diferente" |

### 1.3 Checklist de Research

```markdown
## Research Mining Checklist

### Problemas/Dores
- [ ] Frustrações diárias do avatar
- [ ] Medos e preocupações
- [ ] Falhas passadas com outras soluções
- [ ] Sintomas que incomodam
- [ ] Consequências de não agir

### Soluções/Métodos
- [ ] Técnicas específicas ensinadas
- [ ] Passos do processo
- [ ] Ferramentas/recursos incluídos
- [ ] Atalhos e hacks
- [ ] Erros a evitar

### Prova/Credibilidade
- [ ] Estudos científicos (com fonte)
- [ ] Estatísticas específicas
- [ ] Testemunhos com resultados
- [ ] Credenciais dos experts
- [ ] Casos de sucesso documentados

### Curiosidades/Surpresas
- [ ] Fatos contra-intuitivos
- [ ] Conexões inesperadas
- [ ] "Segredos" da indústria
- [ ] O que a maioria não sabe
- [ ] Verdades desconfortáveis

### Especificidades
- [ ] Números exatos (não arredondados)
- [ ] Datas e períodos específicos
- [ ] Nomes completos com credenciais
- [ ] Localizações específicas
- [ ] Páginas/capítulos de referência
```

---

## PHASE 2: VOLUME BULLET GENERATION

### 2.1 O Sistema 700-to-100

**Filosofia:**
```
┌─────────────────────────────────────────────────────────────┐
│                O FUNIL DOS 700 BULLETS                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│    Bullets 1-100:     █████████████████████████████████     │
│    → FÁCIL. Todo mundo encontra esses.                      │
│                                                             │
│    Bullets 100-300:   █████████████████████████████████     │
│    → TRABALHOSO. Você está se esforçando agora.             │
│                                                             │
│    Bullets 300-500:   █████████████████████████████████     │
│    → MÁGICA COMEÇA. Você vê conexões que outros não veem.   │
│                                                             │
│    Bullets 500-700:   █████████████████████████████████     │
│    → OURO. Estes são frequentemente os MELHORES.            │
│                                                             │
│    ↓                                                        │
│    Seleção Final: 100-150 "Cream of the Crop"               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Os 21 Tipos de Power Bullets

**Regra:** Para cada fato/benefício, tente escrever usando MÚLTIPLOS tipos de bullet.

---

#### TIPO 1: How-To Básico

**Padrão:** "Como [alcançar resultado] — [qualificador/sem/mesmo se]"

```markdown
EXEMPLOS:
• Como eliminar dor nas articulações — sem drogas perigosas ou cirurgia
• Como dobrar sua energia — mesmo se você tem mais de 60
• Como cortar sua conta de impostos em 40% — completamente legal
• Como perder peso dormindo — sem dieta ou exercício
• Como aprender idiomas 3x mais rápido — usando apenas 15 minutos por dia
```

**Quando usar:** Quando você tem uma solução clara para um problema comum.

---

#### TIPO 2: How-To Secreto

**Padrão:** "Como [fonte inesperada] [alcança resultado]"

```markdown
EXEMPLOS:
• Como estrelas de Hollywood ficam magras comendo o que querem
• Como centenários japoneses mantêm a mente afiada após os 100
• Como insiders de Wall Street protegem seu dinheiro em qualquer mercado
• Como atletas olímpicos se recuperam duas vezes mais rápido
• Como CEOs de Fortune 500 eliminam o estresse em 3 minutos
```

**Quando usar:** Quando você tem prova de uma fonte aspiracional ou expert.

---

#### TIPO 3: Segredo Revelado

**Padrão:** "O [adjetivo] segredo que [fonte] [usa/conhece] para [resultado]"

```markdown
EXEMPLOS:
• O segredo pouco conhecido que atletas olímpicos usam para recuperação
• O antigo segredo que monges tibetanos usam para clareza mental
• O segredo guardado a sete chaves de médicos que nunca ficam doentes
• O segredo de $1 que milionários usam para pagar menos impostos
• O segredo "proibido" que dermatologistas usam para pele jovem
```

**Quando usar:** Quando a informação parece exclusiva ou escondida.

---

#### TIPO 4: Verdade Escondida

**Padrão:** "A verdade sobre [tópico] que [fonte] não vai te contar"

```markdown
EXEMPLOS:
• A verdade sobre colesterol que seu médico talvez não conte
• A verdade sobre fundos de aposentadoria que Wall Street espera que você nunca descubra
• A verdade sobre alimentos 'saudáveis' que pode estar te engordando
• A verdade sobre vitaminas que a indústria farmacêutica esconde
• A verdade sobre exercícios que personal trainers não admitem
```

**Quando usar:** Quando há um fato contra-intuitivo ou suprimido.

---

#### TIPO 5: Aviso/Warning

**Padrão:** "Aviso: [perigo] — [consequência/como evitar]"

```markdown
EXEMPLOS:
• Aviso: Este alimento comum do café da manhã pode estar te envelhecendo mais rápido
• Aviso: Nunca tome este suplemento após as 14h — aqui está o porquê
• Aviso: O hábito "saudável" que está destruindo suas articulações
• Aviso: O erro de hidratação que 90% das pessoas cometem
• Aviso: Esta combinação de medicamentos pode ser fatal
```

**Quando usar:** Quando há um perigo genuíno ou erro a evitar.

---

#### TIPO 6: Erro/Mistake

**Padrão:** "Os [número] [adjetivo] erros que [resultado negativo]"

```markdown
EXEMPLOS:
• Os 5 erros inocentes que destroem seu metabolismo
• Os 3 erros comuns que pioram a dor nas costas
• Os 7 erros custosos que aposentados cometem com o INSS
• Os 4 erros de sono que te deixam exausto
• Os 6 erros de investimento que evaporam seu dinheiro
```

**Quando usar:** Quando você pode identificar erros específicos com consequências.

---

#### TIPO 7: Por Quê Surpreendente

**Padrão:** "Por que [coisa] [fato surpreendente]"

```markdown
EXEMPLOS:
• Por que médicos agora recomendam o que antes proibiam
• Por que tudo que você sabe sobre colesterol provavelmente está errado
• Por que os investimentos "mais seguros" podem ser os mais arriscados
• Por que pular o café da manhã pode ser mais saudável
• Por que exercício demais pode fazer você ENGORDAR
```

**Quando usar:** Quando há uma mudança de paradigma ou verdade contra-intuitiva.

---

#### TIPO 8: Por Quê Funciona

**Padrão:** "Por que [coisa] funciona — [mecanismo/razão]"

```markdown
EXEMPLOS:
• Por que este alongamento simples funciona melhor que tratamentos caros
• Por que o "método japonês" funciona quando a medicina ocidental falha
• Por que caminhar 10 minutos supera correr 30 — a ciência
• Por que jejum funciona — e não é por causa das calorias
• Por que meditação reduz pressão arterial — o mecanismo descoberto
```

**Quando usar:** Quando você pode explicar o mecanismo do sucesso.

---

#### TIPO 9: O Que Nunca

**Padrão:** "O que você nunca deve [ação] — [razão/consequência]"

```markdown
EXEMPLOS:
• O que você nunca deve comer antes de dormir — e a razão surpreendente
• O que você nunca deve dizer ao seu médico
• O que você nunca deve fazer na primeira hora após acordar
• O que você nunca deve guardar na geladeira — destrói os nutrientes
• O que você nunca deve tomar junto com café
```

**Quando usar:** Quando há uma ação comum com consequências ocultas.

---

#### TIPO 10: O Que Sempre

**Padrão:** "O que [experts/pessoas bem-sucedidas] sempre [fazem/evitam]"

```markdown
EXEMPLOS:
• O que bilionários sempre fazem com seus primeiros R$1.000
• O que pessoas saudáveis de 90 anos sempre comem no café da manhã
• O que top performers sempre fazem antes de reuniões importantes
• O que médicos sempre checam primeiro (e você deveria também)
• O que milionários sempre evitam comprar
```

**Quando usar:** Quando você pode identificar comportamento consistente de pessoas bem-sucedidas.

---

#### TIPO 11: Lista de Números

**Padrão:** "[Número] [coisas] que [resultado]"

```markdown
EXEMPLOS:
• 7 alimentos que combatem inflamação naturalmente
• 12 sinais de alerta que seu corpo dá antes de um infarto
• 5 frases que aumentam instantaneamente seu poder de negociação
• 9 vitaminas que 90% dos brasileiros não consomem suficiente
• 3 exercícios que eliminam dor nas costas em uma semana
```

**Quando usar:** Quando você tem uma lista com resultado específico e benéfico.

---

#### TIPO 12: Número Específico

**Padrão:** "[Número específico] [benefício]"

```markdown
EXEMPLOS:
• 47% menos risco de doença cardíaca — com esta única mudança
• Perca 5kg em 3 semanas — sem fazer dieta
• Adicione R$847 à sua renda mensal — em apenas 2 horas por semana
• 23 minutos por dia é tudo que você precisa para transformar seu corpo
• 94% de taxa de sucesso — comprovado em 47.000 pacientes
```

**Quando usar:** Quando você tem números específicos e comprováveis.

---

#### TIPO 13: Você Está Cometendo

**Padrão:** "Você está cometendo estes [número] [erros]?"

```markdown
EXEMPLOS:
• Você está cometendo estes 5 erros comuns com medicamentos?
• Você está sabotando seu sono sem saber?
• Você está acidentalmente ativando sua própria dor nas costas?
• Você está jogando dinheiro fora com estes hábitos financeiros?
• Você está destruindo seu metabolismo com estas escolhas alimentares?
```

**Quando usar:** Quando o leitor pode estar causando seu próprio problema sem saber.

---

#### TIPO 14: Você Sabe

**Padrão:** "Você sabe [fato surpreendente/pergunta]?"

```markdown
EXEMPLOS:
• Você sabe quais alimentos "saudáveis" contêm açúcar escondido?
• Você sabe qual vitamina quase todo mundo tem deficiência?
• Você sabe o que seu tipo sanguíneo revela sobre risco de doenças?
• Você sabe quanto dinheiro você perde em impostos desnecessários?
• Você sabe qual horário do dia seu metabolismo funciona melhor?
```

**Quando usar:** Quando há uma lacuna de conhecimento que a maioria das pessoas tem.

---

#### TIPO 15: Teaser de História

**Padrão:** "[Pessoa/fonte] que [alcançou resultado] — [gancho de curiosidade]"

```markdown
EXEMPLOS:
• O corredor de maratona de 87 anos que não toma medicamentos
• O contador falido que virou milionário em 18 meses
• O caso "sem esperança" de artrite que os médicos não conseguiam explicar
• A dona de casa que ganhou R$50.000 em 90 dias trabalhando de casa
• O diabético que reverteu a doença sem medicamentos
```

**Quando usar:** Quando você tem um estudo de caso ou história convincente.

---

#### TIPO 16: Segredo do Médico/Expert

**Padrão:** "O que [experts] fazem [para si mesmos] que [não dizem aos pacientes]"

```markdown
EXEMPLOS:
• O que cardiologistas comem no café (dica: não é o que recomendam)
• O suplemento que médicos tomam mas raramente prescrevem
• O que consultores financeiros fazem com seu próprio dinheiro
• O que dermatologistas usam em casa (e não indicam no consultório)
• O que nutricionistas realmente comem quando ninguém está olhando
```

**Quando usar:** Quando há uma lacuna entre conselho do expert e comportamento do expert.

---

#### TIPO 17: Paradoxo

**Padrão:** "[Contradição aparente] — [resolução/explicação]"

```markdown
EXEMPLOS:
• Por que comer mais gordura pode te deixar mais magro
• Como fazer menos exercício obtém melhores resultados
• A abordagem "preguiçosa" que supera o trabalho duro
• Por que gastar dinheiro te faz economizar mais
• Como dormir menos pode dar mais energia (com ressalvas)
```

**Quando usar:** Quando a verdade contradiz a sabedoria convencional.

---

#### TIPO 18: Link Surpreendente

**Padrão:** "A conexão surpreendente entre [X] e [Y]"

```markdown
EXEMPLOS:
• A conexão surpreendente entre saúde intestinal e depressão
• A conexão surpreendente entre sono e ganho de peso
• A relação inesperada entre seus dentes e seu coração
• O link surpreendente entre postura e autoconfiança
• A conexão que cientistas descobriram entre açúcar e rugas
```

**Quando usar:** Quando você pode conectar duas coisas aparentemente não relacionadas.

---

#### TIPO 19: Estudo Diz

**Padrão:** "[Estudo/instituição] revela [descoberta]"

```markdown
EXEMPLOS:
• Estudo de Harvard revela o preditor #1 de doença cardíaca
• Pesquisa de Stanford descobre a verdadeira causa da fadiga
• Médicos de Johns Hopkins descobrem gatilho surpreendente da dor
• Estudo com 10.000 pessoas revela o segredo da longevidade
• Universidade de São Paulo identifica o alimento mais anti-inflamatório
```

**Quando usar:** Quando você tem pesquisa credível para citar.

---

#### TIPO 20: Prova com Número

**Padrão:** "[Prova específica] — [resultado quantificado]"

```markdown
EXEMPLOS:
• Usado por 47.000 pacientes — com taxa de sucesso de 94%
• Testado em 23 ensaios clínicos — comprovadamente eficaz
• Confiado por 12.000 médicos em 47 países
• 250% melhor que o método anterior — comprovado em testes
• 5 estrelas de 3.847 clientes verificados
```

**Quando usar:** Quando você tem números impressionantes que provam valor.

---

#### TIPO 21: Renomeado/Reemoldurado

**Padrão:** "O/A [nome intrigante] que [benefício]"

```markdown
EXEMPLOS:
• O "truque do sono" que acaba com insônia em 7 dias
• A "proporção áurea" de exercício que maximiza queima de gordura
• O "método reverso" que elimina dívidas mais rápido
• A "janela metabólica" que transforma como você queima calorias
• O "protocolo de 3 segundos" que alivia dor nas costas instantaneamente
```

**Quando usar:** Quando você pode dar a algo mundano um nome intrigante.

---

### 2.3 Processo de Geração

**Regras Durante a Geração:**

1. **NÃO EDITE** - Volume primeiro, qualidade depois
2. **Use todos os 21 tipos** - Tente cada tipo para cada fato
3. **Inclua os "óbvios"** - Às vezes eles vencem
4. **Anote a página** - Para referência futura
5. **Não pare** - Quando achar que acabou, escreva mais 100

**Template de Geração:**

```markdown
## BULLET GENERATION LOG

### Fato Original:
[Cole aqui o fato/benefício do seu research]

### Fonte:
Página: ___  |  Capítulo: ___

### Variações de Bullet:

**Tipo 1 - How-To Básico:**
-

**Tipo 3 - Segredo Revelado:**
-

**Tipo 5 - Warning:**
-

**Tipo 11 - Lista de Números:**
-

**Tipo 17 - Paradoxo:**
-

**Tipo 21 - Renomeado:**
-

[Continue com mais tipos...]
```

---

## PHASE 3: THE MISDIRECTION TECHNIQUE

### 3.1 O Princípio do Crossword Puzzle

**Filosofia de Lampropoulos:**
> "Gene Schwartz começava todo dia com o crossword puzzle do NY Times. Há uma razão: grandes pistas de palavras cruzadas te misdirecionam o suficiente para te fazer pensar, mas não tanto que você não consiga resolver. Bullets funcionam da mesma forma."

### 3.2 Técnicas de Misdirection

#### Técnica 1: Hint na Direção Errada

**Princípio:** Use fraseado que sugere uma coisa mas significa outra.

```markdown
ANTES: "Faça a si mesmo esta pergunta de 5 palavras para saber se uma ação vai subir"
DEPOIS: "Escreva estas 5 palavras no topo da sua análise..."

POR QUÊ FUNCIONA: A segunda versão faz pensar em colunas e planilhas,
não uma simples pergunta. Mesma informação, imagem mental diferente.
```

#### Técnica 2: Mudança de Categoria

**Princípio:** Faça-os pensar que está em uma categoria quando está em outra.

```markdown
ANTES: "Um suplemento natural que baixa a pressão"
DEPOIS: "A 'cura do armário da cozinha' que baixa a pressão"

POR QUÊ FUNCIONA: Agora pensam em temperos, alimentos, ingredientes
comuns—não um frasco de suplemento.
```

#### Técnica 3: Fonte Surpresa

**Princípio:** Atribua a fonte inesperada.

```markdown
ANTES: "Uma técnica de respiração que reduz ansiedade"
DEPOIS: "O que Navy SEALs fazem nos primeiros 30 segundos de combate"

POR QUÊ FUNCIONA: Navy SEALs = combate, armas, táticas. Não respiração.
Mas é exatamente isso que fazem—respiração controlada.
```

#### Técnica 4: Mecanismo Oculto

**Princípio:** Descreva o resultado, esconda o mecanismo óbvio.

```markdown
ANTES: "Caminhar para exercício melhora a saúde do coração"
DEPOIS: "O 'ritual matinal de 3 minutos' que corta risco de infarto em 40%"

POR QUÊ FUNCIONA: Caminhar é óbvio. Um "ritual" é intrigante.
```

---

## PHASE 4: "CALL IT SOMETHING ELSE"

### 4.1 O Poder do Renomear

**Princípio de Lampropoulos:**
> "A mesma informação pode ser chata ou fascinante dependendo de como você a chama. 'Vitamina C' é chato. 'O ativador de imunidade' é interessante. Mesma coisa, nome diferente, resposta completamente diferente."

### 4.2 Transformações de Exemplo

| Antes (Chato) | Depois (Intrigante) | Por Que Funciona |
|---------------|---------------------|------------------|
| Suplemento para articulações | O "lubrificante articular" | Imagem visceral |
| Beber água de manhã | A técnica do "banho interno" | Imagem de limpeza |
| Exercícios de respiração | O protocolo "flush de oxigênio" | Soa científico |
| Jejum intermitente | O método "reset metabólico" | Reset = consertar |
| Ações de dividendos | A estratégia "dinheiro na caixa de correio" | Passivo, tangível |
| Investir em índices | O construtor de riqueza "configure e esqueça" | Fácil, sem trabalho |
| Otimização fiscal | A "brecha legal" que economiza milhares | Loophole = secreto |
| Blocos de tempo | O "hack de calendário de CEO" | CEO = sucesso |
| Pausas curtas | A técnica da "pausa estratégica" | Estratégico = intencional |

### 4.3 Princípios de Nomeação

```markdown
## Princípios para Criar Nomes Intrigantes

1. USE LINGUAGEM SENSORIAL
   → lubrificante, flush, banho, crocante, suave

2. EMPRESTE AUTORIDADE
   → CEO, Navy SEAL, Olímpico, Harvard, NASA

3. CRIE INTRIGA
   → secreto, proibido, escondido, perdido, underground

4. IMPLIQUE MECANISMO
   → gatilho, interruptor, reset, ativar, desbloquear

5. SUGIRA VELOCIDADE/FACILIDADE
   → instantâneo, automático, sem esforço, one-touch

6. EVOQUE EXCLUSIVIDADE
   → de elite, VIP, reservado, insider
```

---

## PHASE 5: CREAM OF THE CROP SELECTION

### 5.1 O Teste do Tapa na Testa

**A Pergunta Central:**
> "Quando você lê este bullet, você literalmente bate na testa e diz 'EU PRECISO saber isso!'? Se não criar essa reação, não é bom o suficiente."

### 5.2 Checklist de Seleção

```markdown
## TESTE DE QUALIDADE DE BULLET

### Reação Imediata
- [ ] Senti um impulso físico de saber mais?
- [ ] Pagaria R$20 só para descobrir esta resposta?
- [ ] Ficaria desapontado se a resposta fosse óbvia?
- [ ] Parece um segredo que eu não deveria saber?

### Check de Especificidade
- [ ] Tem um número, nome ou detalhe específico?
- [ ] Consigo visualizar exatamente o que está sendo prometido?
- [ ] Parece pesquisado, não inventado?
- [ ] É específico o suficiente para ser acreditável?

### Check de Curiosidade
- [ ] Tenho um palpite do que pode ser—mas não tenho certeza?
- [ ] Me sentiria "incompleto" não sabendo?
- [ ] Há uma lacuna entre o que sei e o que quero saber?
- [ ] Levanta mais perguntas do que responde?

### Check de Benefício
- [ ] Entendo o que ganho com isso?
- [ ] O benefício é significativo para minha vida?
- [ ] Este benefício valeria pagar?
- [ ] A transformação é clara?

### SCORING
- 4 SIMs = Bullet excelente - use como está
- 3 SIMs = Bom bullet - polish menor necessário
- 2 SIMs = Bullet fraco - precisa trabalho significativo
- 1 ou menos = Mate-o - não vale salvar
```

### 5.3 Processo de Seleção

```
┌─────────────────────────────────────────────────────────────┐
│              FUNIL DE SELEÇÃO (700 → 100)                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ROUND 1: Quick Scan (700 → 300)                            │
│  ─────────────────────────────────────────                  │
│  • Leia rapidamente todos os 700                            │
│  • Marque "keep" nos que causam reação                      │
│  • Elimine os claramente fracos                             │
│                                                             │
│  ROUND 2: Forehead Test (300 → 150)                         │
│  ─────────────────────────────────────────                  │
│  • Aplique o teste completo de 4 critérios                  │
│  • Reescreva os "quase bons"                                │
│  • Elimine os que falham em 2+ critérios                    │
│                                                             │
│  ROUND 3: Final Selection (150 → 100)                       │
│  ─────────────────────────────────────────                  │
│  • Compare bullets similares - mantenha o melhor            │
│  • Garanta diversidade de tipos                             │
│  • Priorize por força de reação                             │
│                                                             │
│  RESULTADO: 100 "Cream of the Crop"                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## PHASE 6: POLISH AND RHYTHM

### 6.1 Ritmo e Som

**Princípio:** Grandes bullets têm qualidade musical quando lidos em voz alta.

#### Técnicas de Ritmo:

**Termine com Poder:**
```markdown
FRACO: "Uma técnica simples que ajuda com perda de peso"
FORTE: "O 'método preguiçoso' que DERRETE gordura"
                                        ↑
                         Termina em palavra de poder + consoante forte
```

**Varie o Comprimento:**
```markdown
• O "teste de 3 segundos" que revela doença cardíaca escondida
• Por que os "grãos integrais saudáveis" na sua despensa podem estar disparando seu açúcar no sangue—e o que comer em vez disso
• O erro de sono que 84% dos brasileiros cometem
```

**Crie Ritmo com Estrutura Paralela + Quebra:**
```markdown
• Como baixar seu colesterol...
• Como estabilizar seu açúcar no sangue...
• Como reduzir risco de AVC...
• E o único "hábito saudável" que pode desfazer tudo isso
                ↑
        Quebra do padrão para ênfase
```

### 6.2 Economia de Palavras

**Princípio:** Cada palavra deve merecer seu lugar.

```markdown
REGRAS DE CORTE:

1. Corte adjetivos que não adicionam especificidade
   ANTES: "Uma técnica muito eficiente e comprovada"
   DEPOIS: "A técnica com 94% de sucesso"

2. Substitua verbos fracos por fortes
   get → pegue, grab
   make → dispare, gatilho
   help → desbloqueie, ative

3. Remova palavras de hedge
   pode, talvez, poderia, provavelmente → ELIMINE

4. Use voz ativa exclusivamente
   ANTES: "O colesterol pode ser baixado por este alimento"
   DEPOIS: "Este alimento DERRUBA o colesterol"

5. Converta frases em palavras únicas de poder
   "em um curto período de tempo" → "em dias"
   "uma grande quantidade de" → "47%"
```

### 6.3 Stacking (Empilhamento)

**Técnica:** Empilhe benefícios para impacto cumulativo.

```markdown
## Tipos de Stacking

BENEFIT STACK:
"A bebida matinal que aumenta energia, aguça o foco, E acelera queima de gordura"

CONTRAST STACK:
"Coma mais, exercite menos—e perca peso mais rápido que nunca"

PROOF STACK:
"Testado em 23 ensaios clínicos. Usado por 47.000 pacientes. Endossado por 340 médicos."

CONSEQUENCE STACK:
"O erro que desperdiça dinheiro, arruína aposentadoria, E pode deixar você sem nada"
```

---

## PHASE 7: CATEGORIZATION AND ORGANIZATION

### 7.1 Organize por Uso

```markdown
## CATEGORIAS DE USO

### COVER BULLETS (10-15)
→ Os mais fortes, maior curiosidade
→ Devem funcionar sem contexto
→ Priorize paradoxos, segredos, números impactantes

### TOC/INDEX BULLETS (15-20)
→ Inclua referências de página
→ Variedade de tipos
→ Cubra diferentes aspectos do produto

### BODY BULLETS (50+)
→ Organizados por seção/capítulo
→ Suportem o argumento principal
→ Progressão lógica

### OFFER BULLETS (20-30)
→ Focados em benefícios específicos
→ Eliminem objeções
→ Criem urgência
```

### 7.2 Template de Output Final

```markdown
# BULLET LIBRARY: [Nome do Produto]

## Metadata
- Total de bullets gerados: ___
- Bullets finais selecionados: ___
- Data de criação: ___

---

## COVER BULLETS (TOP 15)
1. [bullet mais forte]
2. ...
15. ...

## TOC BULLETS (20)
1. [bullet] ...pg X
2. ...

## BODY BULLETS BY SECTION

### Seção 1: [Nome]
- [bullet]
- [bullet]
- ...

### Seção 2: [Nome]
...

## OFFER BULLETS (30)
...

## RESERVE BULLETS
[Bullets bons que não entraram na seleção final]
```

---

## QUALITY VALIDATION

### Checklist Final

```markdown
## LAMPROPOULOS BULLET QUALITY CHECKLIST

### Volume
- [ ] 700+ bullets foram gerados inicialmente?
- [ ] Todos os 21 tipos foram tentados?
- [ ] Múltiplas variações para cada fato?

### Seleção
- [ ] Cada bullet passou no teste do tapa na testa?
- [ ] 100+ bullets finais selecionados?
- [ ] Diversidade de tipos no conjunto final?

### Especificidade
- [ ] Números específicos (não arredondados)?
- [ ] Nomes, lugares, datas quando relevante?
- [ ] Fontes citáveis identificadas?

### Curiosidade
- [ ] Cada bullet cria uma lacuna de informação?
- [ ] Misdirection aplicada onde apropriado?
- [ ] "Call it something else" usado para itens mundanos?

### Craft
- [ ] Ritmo e som verificados (leia em voz alta)?
- [ ] Palavras desnecessárias eliminadas?
- [ ] Voz ativa em todos?
- [ ] Terminam em palavras de poder?

### Organização
- [ ] Categorizados por uso (cover, TOC, body, offer)?
- [ ] Melhores bullets priorizados para cover?
- [ ] Referências de página incluídas onde necessário?

### O TESTE FINAL
- [ ] Se eu visse estes bullets em uma promoção, compraria
      só para satisfazer minha curiosidade?
```

---

## EXAMPLES: BEFORE AND AFTER

### Exemplo 1: Saúde

**ANTES (Fraco):**
"Aprenda sobre os benefícios da vitamina D"

**DEPOIS (Lampropoulos Style):**
"A 'vitamina do sol' que 87% dos brasileiros têm deficiência—e os 7 sintomas silenciosos que revelam se você é um deles (pg. 34)"

**O que mudou:**
- Renomeou (vitamina D → vitamina do sol)
- Adicionou estatística específica (87%)
- Criou curiosidade (7 sintomas)
- Incluiu prova social (brasileiros)
- Adicionou referência de página

---

### Exemplo 2: Finanças

**ANTES (Fraco):**
"Dicas para economizar dinheiro"

**DEPOIS (Lampropoulos Style):**
"O 'truque de 5 minutos' que milionários usam para pagar 40% menos impostos—completamente legal (a maioria dos contadores não conhece)"

**O que mudou:**
- Renomeou (dicas → truque de 5 minutos)
- Adicionou autoridade (milionários)
- Especificou resultado (40% menos)
- Removeu objeção (completamente legal)
- Criou exclusividade (contadores não conhecem)

---

### Exemplo 3: Produtividade

**ANTES (Fraco):**
"Como ser mais produtivo no trabalho"

**DEPOIS (Lampropoulos Style):**
"O 'ritual de 3 segundos' que CEOs de Fortune 500 usam antes de CADA decisão importante—aumenta clareza em 67% (Harvard Business Review, 2023)"

**O que mudou:**
- Renomeou (produtivo → ritual de 3 segundos)
- Adicionou autoridade aspiracional (CEOs Fortune 500)
- Especificou contexto (cada decisão importante)
- Quantificou benefício (67%)
- Citou fonte credível (Harvard Business Review)

---

*Task Version: 1.0*
*Created: 2026-01-23*
*Lines: 900+*
*Methodology: Parris Lampropoulos 700-to-100 System*


---

## Referência: templates/estado-da-skill.md

---
type: Skill Instance
title: Estado privado de A PRIMEIRA LINHA
status: draft
agentflix:
  schema_version: 1
  skill_id: copy-headlines
  observation: unknown
  installed_version: null
  content_revision: null
  monitoring: not_configured
---

# Estado privado

Modelo para ambiente sem script, com capacidade de persistir Markdown. Substitua nulos só por valores observados.
Os campos `agentflix` são extensão AgentFlix. Nunca gravar este arquivo preenchido no pacote público.

- Início da observação contínua e limitações de cobertura:
- Última execução humana registrada (ID e instante):
- Última entrega concluída (ID e instante):
- Contagens derivadas dos eventos, separando humano e rotina:
- Artefato atual e revisão pessoal prevista:
- Avaliação de rotina e motivo:
- Autorização, ID do agendamento, frequência, horário, fuso e canal:
- Intervalo de inatividade combinado e política de silêncio:
- Alertas entregues, pendentes e sinais já resolvidos:
- Versão remota conferida, fonte e instante, ou não verificada:
- Histórico de verificação de conteúdo, evidências e revisão verificada:

Sem evento de execução, não afirmar uso. Sem observação contínua, não afirmar ausência de uso.


---

## Referência: templates/evento-de-uso.json

{
  "schema_version": 1,
  "event_id": "EXEMPLO-SUBSTITUIR",
  "run_id": "EXECUCAO-SUBSTITUIR",
  "skill_id": "copy-headlines",
  "at": "2026-09-08T15:00:00Z",
  "origin": "human",
  "operation": "create",
  "result": "completed",
  "version": "0.4.3",
  "content_revision": "1.1.0",
  "artifact_ref": "artefatos/entrega-r1.md",
  "verification": "passed"
}


---

## Não incluído neste arquivo (está no zip da skill)

- `scripts/auditar.py (script: só no zip)`
