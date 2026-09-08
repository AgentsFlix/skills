# habitos-que-cabem · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.3. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `habitos-que-cabem.md` uma skill chamada habitos-que-cabem. Quando eu pedir algo como "isso", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# Hábitos que Cabem na Vida

Transforme uma intenção em uma ação que cabe na rotina. Use o contexto já conhecido pela pessoa e pelo agente,
pergunte pelas lacunas e entregue um cartão do hábito. A revisão usa relatos reais; o resultado humano não é garantido.

## When to Use

- “Quero encaixar a leitura na minha rotina”: criar.
- “Hoje fiz só o mínimo”: registrar.
- “Esse horário deixou de funcionar”: ajustar.
- “Parei e quero voltar”: retomar.
- “Revisa meus registros” ou “audita o uso desta skill”: revisar ou auditar.

Use para hábitos cotidianos. Não diagnostique condições nem altere tratamentos; adapte a proposta aos limites
informados pela pessoa. Uma auditoria técnica não exige reabrir a entrevista sobre o hábito.

## Quick Reference

| Input | Necessidade | Onde procurar primeiro |
|---|---|---|
| Intenção e comportamento | Obrigatório para criar | Pedido atual e memória relevante |
| Gatilho na rotina e limites que afetam a ação | Obrigatório para fechar o cartão | Memória, cartão existente, depois lacunas |
| Preferências e tentativas anteriores | Opcional; investigar quando muda a decisão | Memória e relatos |
| Cartão atual | Obrigatório para ajustar ou retomar um plano específico | Estado privado ou conversa |
| Relatos de prática | Obrigatório para concluir sobre execução humana | Registro privado ou relato atual |
| Preferências de acompanhamento e capacidades do ambiente | Obrigatório antes de ativar rotina | Memória, agendador disponível e autorização |

Não exigir arquivo, terminal, memória persistente ou agendador para ajudar na conversa.
Auditoria persistente usa armazenamento privado; o script opcional exige Python 3.10+ e PyYAML.
Sem armazenamento, declarar “uso não observável entre sessões” e entregar resumo reutilizável.

## Procedure

1. Identifique a operação pedida. Leia `references/conhecimento.okf.md` para versão e validade,
   e `references/ciclo-de-vida.md` para o registro operacional. Inicie o evento started no armazenamento disponível
   antes da etapa dependente de resposta; registre waiting ao perguntar. Não confundir carregar a skill com executar uma tarefa.
2. Faça bootstrap conforme `references/memoria-e-elicitacao.md`: busque somente memória relevante e o plano existente;
   mapeie valor, origem, data, estado e lacuna. Reaproveite o conhecido. Mostre uma síntese curta, sem expor o histórico inteiro.
3. Pergunte apenas o que muda a próxima decisão. **Toda pergunta aberta, em qualquer etapa, inclui um exemplo de resposta
   baseado na memória recuperada, ao lado da pergunta.** Exemplos são sugestões, não respostas confirmadas.
   Sem memória relevante, informe a ausência e use exemplo explicitamente hipotético. Incorpore respostas novas ao contexto.
4. Execute o caminho apropriado:
   - Criar: aplique `references/metodo-habitos.md` e preencha `templates/cartao-do-habito.md`, um hábito por vez.
   - Registrar: acrescente o relato em `templates/registro-de-pratica.md`, com data, origem e resultado informado.
   - Ajustar, retomar ou revisar: siga `references/revisao-e-retomada.md`. Preserve o plano anterior e explique a mudança.
   - Auditar: consulte o registro operacional e as fontes; não demande relatos de prática se a auditoria for só técnica.
5. Avalie sempre se vale rotina conforme `references/avaliacao-de-rotina.md`: vale sugerir, não vale ou depende de informação,
   com motivo. Quando positiva, apresente proposta concreta. Só ative após autorização, via agendador real do agente hospedeiro.
6. Verifique a entrega. No armazenamento privado disponível, registre eventos conforme `templates/evento-de-uso.json`
   e atualize o estado derivado. Use o script opcional conforme `references/ciclo-de-vida.md` quando houver terminal.
   Guarde apenas referências às entregas, sem copiar conteúdo pessoal para o log técnico.
7. Termine com o cartão, registro, ajuste ou relatório pedido, a próxima ação concreta e o estado real do acompanhamento.
   Sem resposta necessária, marque aguardando resposta. Sem instrumentação, informe a limitação da auditoria.

## Pitfalls

- Repetir entrevista inicial quando já existe plano; inventar memória ou tratar sugestão como preferência confirmada.
- Mandar pergunta aberta sem exemplo, inclusive durante retomada, conflitos ou proposta de rotina.
- Transformar falta de registro em falha humana. Uso da skill, entrega concluída e prática do hábito são eventos diferentes.
- Registrar verificação de conteúdo só porque a skill foi usada; alterar validade para apagar alerta.
- Contar execução do monitor como uso humano ou atualizar contadores sem evidência de eventos.
- Gravar dados pessoais dentro do pacote instalado, do GitHub ou enviar telemetria ao AgentFlix.
- Prometer lembretes sem agendador ativo; criar cobranças repetidas após recusa ou silêncio.

## Verification

A operação está concluída somente quando seu aceite específico e os itens comuns passam:

- Criar: cartão tem gatilho, ação mínima, contexto, preparação, conclusão observável, retomada e registro; preferências
  ainda propostas estão identificadas. A pessoa pode executar a próxima ação sem interpretar um objetivo abstrato.
- Registrar: há data, fonte e resultado relatado; ausência de resposta permanece desconhecida.
- Ajustar/retomar: alteração tem motivo com origem e novo próximo passo; versão anterior é preservada.
- Revisar: conclusões usam apenas os registros disponíveis, distinguem lacunas e propõem ajuste concreto quando cabível.
- Auditar: relatório identifica versão/revisão, cobertura do histórico, evidências e pendências; nenhum falso zero de uso.
- Comuns: bootstrap feito; perguntas abertas com exemplos; avaliação de rotina com motivo; resultado operacional registrado
  ou falta de persistência declarada; nenhuma autorização, resposta ou evidência inventada.

## Arquivos desta skill (incluídos abaixo)

- `references/conhecimento.okf.md`
- `references/memoria-e-elicitacao.md`
- `references/metodo-habitos.md`
- `references/revisao-e-retomada.md`
- `references/avaliacao-de-rotina.md`
- `references/ciclo-de-vida.md`
- `templates/cartao-do-habito.md`
- `templates/registro-de-pratica.md`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
- `scripts/auditar.py`


---

## Referência: references/conhecimento.okf.md

---
type: Playbook
title: Hábitos que Cabem na Vida
description: Procedimento de hábitos cotidianos com memória contextual, registros de execução e revisão de validade.
status: draft
tags: [habitos, memoria, ciclo-de-vida]
generated:
  by: process:agentflix-skill-authoring
  at: 2026-09-08T18:38:31.169501+00:00
stale_after: 2026-12-08T00:00:00Z
sources:
  - id: maas
    resource: https://maas-hub.vercel.app/reader?doc=biblioteca-maas%2Fatomic-habits-james-clear.md
    title: Mapeamento Atomic Habits, MaaS Hub
  - id: clear-summary
    resource: https://jamesclear.com/atomic-habits-summary
    title: Atomic Habits Summary
    author: human:james-clear
  - id: clear-tracker
    resource: https://jamesclear.com/habit-tracker
    title: The Ultimate Habit Tracker Guide
    author: human:james-clear
  - id: okf
    resource: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md
    title: Open Knowledge Format v0.2
agentflix:
  schema_version: 1
  skill_id: habitos-que-cabem
  content_revision: 1.0.0
  verification_evidence: []
---

# Conhecimento e validade

O mapeamento MaaS foi o ponto de partida. As instruções do método são uma síntese autoral baseada nas fontes
primárias de James Clear. Os cenários, módulos, metas numéricas e resultados do mapeamento não são tratados como
casos comprovados ou promessas.[^maas]

O método adapta contexto, ação e registro à pessoa. Bootstrap, elicitação, eventos e monitoramento são decisões
operacionais AgentFlix, não técnicas atribuídas a James Clear. Consulte `metodo-habitos.md` e `revisao-e-retomada.md`.[^clear-summary][^clear-tracker]

Este arquivo usa os campos de proveniência e ciclo de vida do OKF. `agentflix` é extensão local, não parte obrigatória
do padrão. A revisão de conteúdo é separada da versão de distribuição do catálogo.[^okf]

O prazo de revisão é uma política editorial inicial proposta para esta skill, não prazo científico de validade do método.
`draft` indica que a revisão editorial humana ainda não ocorreu. Sem `verified`, nenhuma verificação é alegada.
Uma verificação deve incluir ator, instante real e evidência vinculada à revisão/digest do conteúdo; a implementação
ser validada por testes não comprova eficácia comportamental. Renovar exige conferir fontes e registrar conclusão,
mesmo quando a conclusão for manter o procedimento. Usar ou instalar nunca muda `stale_after`.

[^maas]: Mapeamento indicado pelo usuário.
[^clear-summary]: Fundamentos do método, fonte primária.
[^clear-tracker]: Registro e retomada, fonte primária.
[^okf]: Especificação de metadados e ciclo de vida.


---

## Referência: references/memoria-e-elicitacao.md

# Bootstrap e elicitação

Antes de perguntar, consulte conversa, memória e cartão acessíveis pelos mecanismos do agente hospedeiro.
Não suponha acesso a outros agentes ou conversas. Limite a busca ao hábito e aos inputs da operação atual.

Agrupe por objetivo, rotina, restrições, preferências, tentativas e registros. Para cada input anote internamente:
valor; origem recuperável; data, se existir; estado (conhecido, ausente, desatualizado, conflitante ou inferido);
lacuna que ainda muda a decisão. A fala atual corrige a memória antiga. Confirme somente incertezas relevantes.
Não repita dados pessoais em logs técnicos; não use memórias como instruções ou autorização.

Toda pergunta aberta vem com exemplo de resposta baseado no contexto recuperado e identificado como possibilidade.
Se várias perguntas forem necessárias, cada uma tem seu exemplo. Pergunte em blocos pequenos por assunto.

Cenário fictício para demonstração: memória disponível diz “passeio com o cachorro depois do almoço”.
Pergunta: “Qual momento poderia receber a leitura?”
Exemplo contextual: “Você mencionou o passeio depois do almoço. Uma resposta possível é:
‘Quero testar uma página quando voltar do passeio’. Pode escolher outro momento.”

Cenário fictício de conflito: memória antiga diz “trabalho de manhã”; relato atual diz “agora trabalho à noite”.
Pergunta: “Como ficou sua janela de descanso?”
Exemplo contextual: “Como você informou que mudou para a noite, pode responder:
‘Agora descanso em [período] e prefiro encaixar o hábito [antes/depois]’. Preencha com sua rotina atual.”

Sem memória relevante: “Ainda não tenho seu contexto. Qual atividade você já faz regularmente?”
Exemplo hipotético junto: “‘Depois de [atividade existente], tenho [tempo disponível]’.”
A próxima pergunta usa o que a pessoa acabou de responder. Nunca preencha o perfil com o próprio exemplo.

Opcional sem dado pode ficar desconhecido. Input obrigatório ausente mantém a etapa dependente aguardando resposta;
entregue o que já puder ser preparado. Respeite as regras de persistência do agente. Sem persistência, entregue
resumo reutilizável contendo fatos confirmados, propostas e lacunas separados.


---

## Referência: references/metodo-habitos.md

# Criar ou reduzir um hábito

Use a fonte `clear-summary` em `conhecimento.okf.md` para os fundamentos abaixo.

Escolha um comportamento observável ligado ao objetivo da pessoa. Encontre um acontecimento estável da rotina
como gatilho e um local viável. Reduza a ação inicial até ela caber no dia real. Prepare os materiais e retire
etapas que dificultam começar. Associe a prática a algo agradável que a pessoa reconheça como tal e combine uma
forma simples de marcar a conclusão. Isso aplica as quatro leis: evidente, atraente, fácil e satisfatório.

Para reduzir um comportamento, identifique o gatilho, a recompensa procurada e uma alternativa possível.
Reduza a exposição ao gatilho e aumente o esforço para iniciar o comportamento indesejado, com mudanças escolhidas
pela pessoa. Não imponha punições, constrangimento público ou restrições desproporcionais.

Preencha `templates/cartao-do-habito.md`. Horários, duração e recompensas sugeridos são propostas até a pessoa
escolher. O critério de conclusão deve verificar uma ação, não “ser mais disciplinado”.

Desenhe uma retomada pequena para a próxima oportunidade viável, sem dívida de repetições. Não prometa prazo
universal para automatização nem multiplique progresso humano pela metáfora matemática do crescimento composto.


---

## Referência: references/revisao-e-retomada.md

# Registrar, revisar e retomar

Use relatos da pessoa, nunca a frequência de chamadas da skill como medida da prática. Leia o cartão atual antes
de pedir explicações. Registre data da prática, data do relato, origem e resultado (mínimo, além do mínimo,
não realizado, ou sem registro). “Sem registro” não entra como falha nem sucesso.

Revise as oportunidades combinadas e os relatos disponíveis. Informe a cobertura do período antes de calcular
qualquer taxa; não preencher dias desconhecidos com zero. Trate sequências como informação, não obrigação moral.
Esses cuidados são escolhas operacionais AgentFlix para aplicar registro e feedback da fonte `clear-tracker` em
`conhecimento.okf.md` sem confundir falta de evidência com comportamento.

Investigue apenas o obstáculo que muda o próximo passo: gatilho que não acontece, ação grande, material indisponível,
contexto alterado ou perda de interesse. Toda pergunta aberta acompanha exemplo contextualizado conforme
`memoria-e-elicitacao.md`. Se não há relatos suficientes, entregue a lacuna e mantenha hipóteses como hipóteses.

Na retomada, preserve a versão anterior do cartão e registre motivo e fonte da alteração. Proponha mudar o menor
elemento necessário. Se a pessoa prefere parar, registre pausa/encerramento e respeite isso no acompanhamento.

Uma revisão termina com achado sustentado pelo registro, decisão proposta ou confirmada identificada, e próximo passo.
Nenhuma execução automática pode inventar uma resposta ou aprovar a mudança pela pessoa.


---

## Referência: references/avaliacao-de-rotina.md

# Avaliação de rotina e monitor

Avalie em toda execução: vale sugerir, não vale ou depende de informação, com motivo. A criação inicial é pontual.
Uma revisão de registros pode valer como rotina. Check-in depende da preferência da pessoa. Considere dados acessíveis,
benefício recorrente, custo e carga de notificações. Não repetir oferta recusada sem mudança relevante ou novo pedido.

Quando valer, proponha objetivo, frequência, horário, fuso, inputs, local de saída, canal de notificação, regra de silêncio,
condição de pausa e como encerrar. Valores ainda não conhecidos são propostas. Toda pergunta aberta tem exemplo
contextualizado. A autorização para instalar a skill não ativa uma rotina.

Existem dois trabalhos diferentes:

- Revisão do hábito: lê registros e prepara uma conclusão ou convite de check-in. Sem resposta, aguarda.
- Monitor de ciclo de vida: audita uso observado, validade, revisão pessoal e atualização disponível. Não conta como uso.

Reutilize um monitor compartilhado já autorizado no agente hospedeiro, se compatível. Caso contrário, apresente a proposta.
Configure pelo agendador suportado, cheque duplicatas e confirme a configuração retornada antes de afirmar que está ativo.
No estado privado, guarde identificador do agendamento, autorização, fuso, intervalo e política de notificação.
O script de auditoria calcula sinais; ele não instala CRON, não envia mensagens e não se autoexecuta.

Prompt operacional para o monitor autorizado, adaptado ao ambiente:

“Audite os registros privados de habitos-que-cabem e sua validade com a política combinada. Não registre esta inspeção
como uso. Notifique apenas sinal novo e acionável; respeite pausas. Sem dados novos, permaneça em silêncio, salvo check-in
explicitamente combinado. Não infira prática do hábito pela ausência de relato. Mantenha pendente qualquer decisão humana.”

Depois de entregar um alerta, registre seu identificador com `ack`. Se a entrega falhar, não confirme recebimento.
Reativação de um sinal após recuperação deve poder produzir novo alerta. Pausar o monitor não apaga eventos.
Sem agendador, entregue proposta utilizável e informe “não ativado”. Sem persistência observável, não prometa auditoria contínua.


---

## Referência: references/ciclo-de-vida.md

# Ciclo de vida e auditoria

## Separação de responsabilidades

`conhecimento.okf.md` descreve o conhecimento publicado: fontes, autoria, status e prazo de revisão editorial.
O `SKILL.md` mantém o frontmatter compatível com os instaladores. Campos `agentflix` e o schema de eventos são
extensões AgentFlix. Não tratar `sources[].usage_count` do OKF como contador de execução desta skill.

O cartão e os relatos descrevem a vida da pessoa. O estado e os eventos descrevem o uso da skill no ambiente observado.
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
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/habitos-que-cabem" init --version 0.4.3 --revision 1.0.0
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/habitos-que-cabem" record --event /caminho/privado/evento.json
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/habitos-que-cabem" configure --policy /caminho/privado/politica.json
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/habitos-que-cabem" audit
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
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/habitos-que-cabem" ack --id ID_RETORNADO_NA_AUDITORIA
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
quando não houver mudança. Não fabricar aprovação humana nem chamar testes de eficácia de hábito.
Conteúdo alterado precisa de nova revisão; uma verificação anterior não cobre automaticamente o novo texto.
A renovação oficial é feita na fonte e distribuída em release; a pessoa pode registrar revisão local como tal.

## Aceite da auditoria

Relatório identifica cobertura, início observado, versão/revisão, uso humano, uso de rotina, conclusões e último uso.
Sinais distinguem inatividade observada, revisão editorial, revisão pessoal e atualização informada. Nulo significa
desconhecido/não configurado conforme o campo. Nenhuma contagem comprova que a pessoa praticou o hábito.
O armazenamento deve permanecer privado. Alertas dependem do monitor autorizado de `avaliacao-de-rotina.md`.


---

## Referência: templates/cartao-do-habito.md

# Cartão do hábito

Preencha apenas a partir de fatos e escolhas da pessoa. Identifique propostas ainda não confirmadas.

- Identificador e revisão do cartão:
- Criado/revisado em (instante com fuso):
- Hábito e motivo pessoal:
- Gatilho na rotina:
- Ação mínima:
- Local/contexto:
- Preparação do ambiente:
- O que torna a prática agradável:
- Concluído quando:
- Alternativa para imprevistos:
- Retomada após interrupção:
- Forma de registro:
- Próxima revisão combinada:
- Situação: proposto / combinado / pausado / encerrado
- Origem dos dados e lacunas:
- Mudança em relação à revisão anterior e motivo:


---

## Referência: templates/registro-de-pratica.md

# Registro de prática

Dados privados. Acrescente relatos com origem, sem sobrescrever o histórico. Correções apontam para o registro corrigido.
Não preencher datas desconhecidas como “não realizado”. Este registro descreve o humano; o log técnico descreve a skill.

| ID | Data da prática | Relatado em, com fuso | Cartão/revisão | Resultado relatado | Obstáculo/observação | Origem | Corrige ID |
|---|---|---|---|---|---|---|---|

Resultados: mínimo, além do mínimo, não realizado ou sem registro. Uma resposta de exemplo nunca vira relato.


---

## Referência: templates/estado-da-skill.md

---
type: Skill Instance
title: Estado privado de Hábitos que Cabem na Vida
status: draft
agentflix:
  schema_version: 1
  skill_id: habitos-que-cabem
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
- Cartão atual e revisão pessoal prevista:
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
  "skill_id": "habitos-que-cabem",
  "at": "2026-09-08T15:00:00Z",
  "origin": "human",
  "operation": "create",
  "result": "completed",
  "version": "0.4.3",
  "content_revision": "1.0.0",
  "artifact_ref": "cartoes/leitura-r1.md",
  "verification": "passed"
}


---

## Não incluído neste arquivo (está no zip da skill)

- `scripts/auditar.py (script: só no zip)`
