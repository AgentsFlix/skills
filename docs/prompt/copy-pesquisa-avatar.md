# copy-pesquisa-avatar · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.3. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Acesse https://raw.githubusercontent.com/AgentsFlix/skills/main/skills/copy-pesquisa-avatar/SKILL.md e leia a skill DENTRO DA CABEÇA e as referências necessárias. Esta edição usa a referência main. Se eu já tiver anexado o pacote ou a versão colável, use esse material, incluindo as seções Referência, sem depender de novo acesso à rede. Confira se a skill já está instalada; se não estiver e houver suporte, inspecione a licença, o SKILL.md e os arquivos de apoio e instale pelo mecanismo disponível. Sem instalação, aplique o procedimento nesta conversa e informe o limite.
>
> Antes de me fazer perguntas, leia o contrato AgentFlix incluído e cheque nossa conversa, sua memória local acessível e os arquivos relevantes que você já conhece. Identifique os inputs exigidos, quais você já tem e quais faltam. Reaproveite fatos atuais, identifique origem, data, conflitos e inferências. Não invente lembranças nem me peça novamente o que já sabe.
>
> Mostre uma síntese curta e pergunte só pelas lacunas necessárias. TODA pergunta aberta, inclusive de configuração, referência, revisão e rotina, deve trazer junto um exemplo de resposta baseado no contexto que você recuperou de mim. Deixe claro que é sugestão. Sem memória relevante, declare isso e rotule o exemplo como hipotético; use minhas novas respostas nos exemplos seguintes. Não grave o exemplo como minha resposta.
>
> Siga o procedimento da skill e confira seus critérios de entrega. Se faltar algo obrigatório, mantenha a etapa aguardando. Registre apenas uso e resultados observados, em armazenamento privado, com a identidade e a revisão desta skill. Sem persistência ou script, entregue um resumo reutilizável e explique os limites de auditoria. Confira o status e o prazo editorial do OKF; usar não renova a validade.
>
> Avalie se vale transformar parte desta tarefa em rotina. Diga vale sugerir, não vale ou depende, com motivo. Se valer, apresente uma proposta concreta de frequência, horário, fuso, inputs, resultado, canal, silêncio, pausa e encerramento. Respeite recusas anteriores. Instalar não autoriza CRON. Só configure com minha autorização e um agendador disponível, conferindo duplicatas e o ID retornado. Não prometa alertas sem monitor; minha falta de resposta não confirma atividade ou decisão.
>
> Use primeiro minha memória e o acervo já indicado. Não leia todos os templates nem peça configuração que já está resolvida pelo ambiente. Continue os resultados anteriores e entregue a operação solicitada; cada pergunta necessária deve ter seu próprio exemplo contextual. Diferencie fatos, hipóteses e dependências pendentes. Não afirme pesquisa, aprovação ou automação sem evidência.

---

# DENTRO DA CABEÇA · Conversa mental, motivos, sofisticação

Antes de escrever, saber o que a pessoa já diz para si mesma. O agente pesquisa o avatar, mapeia a conversa mental, os seis motivos primários e o nível de sofisticação do mercado, e devolve o retrato que a copy vai usar. Sem esse passo, toda headline é chute.

## When to Use

- O pedido envolve: avatar, público, conversa mental, motivos, nível de consciência, sofisticação do mercado.
- Diga: "pesquisa o avatar de [produto] em [mercado]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Obrigatórios: negócio/oferta, público/hipótese e decisão a esclarecer. Fontes disponíveis ou ferramenta de pesquisa real definem o alcance; falta de rede não autoriza fontes inventadas.

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| avatar research | `references/avatar-research.md` |
| analyze mental conversation | `references/analyze-mental-conversation.md` |
| map 6 primary motives | `references/map-6-primary-motives.md` |
| diagnose market sophistication | `references/diagnose-market-sophistication.md` |
| copysearch | `references/copysearch.md` |
| diagnose awareness level | `references/diagnose-awareness-level.md` |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Consulte o perfil/ICP e acervo antes de coletar novamente required/optional. Identifique as lacunas que realmente mudam a comunicação. Não transforme descrição da fundadora em entrevista de clientes.
4. Pesquise nos materiais acessíveis e, quando disponível, ferramenta externa adequada. Registre origem, data conhecida e trecho que sustenta cada achado. Sem acesso, deixe a pesquisa externa pendente e entregue síntese do acervo/hipóteses e um plano específico de coleta.
5. Escreva a síntese do público no formato pertinente da referência, diferenciando citação, fato observado, inferência e hipótese. Não invente números, depoimentos, emoções ou nomes. Perguntas necessárias têm exemplos contextuais próprios. Entregue ao ICP/posicionamento os achados e limites sem apagar sua procedência.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Pesquisa recorrente pode valer com fontes novas e decisão a alimentar. Não gerar relatórios repetidos sem novidade nem monitorar canais sem acesso autorizado.

## Pitfalls

- Pular o bloco `Inputs` e escrever com o que veio. Falta de avatar ou de benefício principal produz copy genérica; pergunte.
- Misturar duas sub-tarefas numa entrega só. Uma de cada vez, cada uma com seu checklist.
- Preencher `[COLCHETES]` com chute para a peça "ficar pronta". Colchete aberto é honesto; número inventado é dívida.
- Ignorar o `Output Format`. Ele existe para a peça encaixar no passo seguinte (página, e-mail, anúncio).

## Verification

Cada achado tem fonte inspecionada ou rótulo de hipótese; pesquisa indisponível não é alegada como realizada. Não pontuar resultado por quantidade de hipóteses inventadas. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill (incluídos abaixo)

- `references/analyze-mental-conversation.md`
- `references/ativacao.md`
- `references/avatar-research.md`
- `references/checklist-avatar-research-checklist.md`
- `references/checklist-copysearch-checklist.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/copysearch.md`
- `references/diagnose-awareness-level.md`
- `references/diagnose-market-sophistication.md`
- `references/identidade.json`
- `references/map-6-primary-motives.md`
- `scripts/auditar.py`
- `templates/avatar-research-template.md`
- `templates/copysearch-template.md`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`


---

## Referência: references/analyze-mental-conversation.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Analyze Mental Conversation - Collier Method

## Purpose

Identify the internal dialogue already taking place in your prospect's mind. This is the MANDATORY FIRST STEP before writing any copy, based on Robert Collier's foundational principle.

## When to Use

- **ALWAYS FIRST** - Before writing any copy
- Before creating headlines or hooks
- When copy feels disconnected from audience
- When entering a new market
- When existing copy isn't converting

## Collier's Principle

```
"The reader of your letter is not interested in you or your product.
He is interested only in himself, his problems, his hopes, his dreams.

You must enter the conversation ALREADY taking place in his mind."

— Robert Collier, The Robert Collier Letter Book (1931)
```

## Inputs

```yaml
required:
  - target_audience: Who you're writing to
  - product_service: What you're selling
  - context: Where/when they'll see this

optional:
  - customer_research: Interview notes, surveys, reviews
  - competitor_messages: What competitors are saying
  - market_trends: Current events affecting them
```

## The Mental Conversation Concept

```
EVERY PROSPECT IS HAVING AN INTERNAL DIALOGUE

Right now, your prospect is thinking about something.
They're worrying about a problem.
They're dreaming about a desire.
They're processing fears and hopes.

THIS is the conversation you must join.

Your copy doesn't START a conversation.
Your copy ENTERS an existing conversation.

The mistake: "Let me tell you about my product!"
The Collier way: "I know you've been wondering about X..."
```

## Workflow

### Step 1: Research the Conversation

```
CONVERSATION DISCOVERY QUESTIONS:

1. WHAT PROBLEMS ARE THEY ACTIVELY THINKING ABOUT?
   □ What keeps them awake at night?
   □ What do they complain about?
   □ What frustrates them daily?
   □ What have they tried that didn't work?

2. WHAT DESIRES ARE OCCUPYING THEIR MIND?
   □ What do they daydream about?
   □ What would make their life significantly better?
   □ What do they secretly hope for?
   □ What transformation do they want?

3. WHAT FEARS ARE LURKING?
   □ What do they worry about?
   □ What worst-case scenarios do they imagine?
   □ What are they trying to avoid?
   □ What do they fear losing?

4. WHAT DECISIONS ARE THEY FACING?
   □ What choices are on their plate?
   □ What are they trying to figure out?
   □ What options are they weighing?
   □ What's holding them back from deciding?

5. WHAT HAVE THEY RECENTLY EXPERIENCED?
   □ What triggered their current state?
   □ What event made them aware of the problem?
   □ What failure or success preceded this moment?
   □ Why are they in the market NOW?
```

### Step 2: Source the Research

```
WHERE TO FIND THE CONVERSATION:

□ CUSTOMER INTERVIEWS
  - What were they thinking before buying?
  - What almost stopped them?
  - What were they worried about?

□ SALES CALL RECORDINGS
  - What questions do they ask first?
  - What objections do they raise?
  - What language do they use?

□ SUPPORT TICKETS / EMAILS
  - What do they complain about?
  - What do they thank you for?
  - What surprises them?

□ AMAZON REVIEWS (of competitors)
  - What problems do they mention?
  - What did they hope for vs get?
  - What language do they use?

□ ONLINE FORUMS / REDDIT / FACEBOOK GROUPS
  - What questions get asked repeatedly?
  - What advice do they give each other?
  - What frustrations are shared?

□ GOOGLE SEARCHES
  - What are they searching for?
  - What questions are they asking?
  - What problems are they trying to solve?

□ SOCIAL MEDIA COMMENTS
  - What do they respond to?
  - What do they share?
  - What do they argue about?
```

### Step 3: Document the Conversation

```
MENTAL CONVERSATION ANALYSIS

Target Audience: _______________
Date: _______________

THE INTERNAL DIALOGUE:

What they're thinking right now:
"_______________________________________________"

What they're worried about:
"_______________________________________________"

What they secretly hope:
"_______________________________________________"

What they're afraid of:
"_______________________________________________"

What decision they're facing:
"_______________________________________________"

What triggered this state:
"_______________________________________________"
```

### Step 4: Find the Entry Point

```
CONVERSATION ENTRY ANALYSIS:

Given the conversation above:

1. ACKNOWLEDGMENT
   How can I show I understand their state?
   Entry: "If you've been _______________..."

2. EMPATHY
   What would a friend who understands say first?
   Entry: "I know how it feels when _______________..."

3. QUESTION
   What question are they already asking themselves?
   Entry: "Have you ever wondered why _______________?"

4. OBSERVATION
   What situation are they in that I can describe?
   Entry: "You've probably noticed that _______________..."

5. STORY
   What story would they relate to immediately?
   Entry: "Last week, someone just like you _______________..."

CHOSEN ENTRY ANGLE: _______________
```

### Step 5: Validate the Entry

```
ENTRY VALIDATION CHECKLIST:

□ Does this feel like joining a conversation, not starting one?
□ Would the prospect think "Yes, that's exactly what I was thinking!"?
□ Does it acknowledge their current state before introducing solution?
□ Is it about THEM, not about me or my product?
□ Does it create immediate relevance?
□ Would a stranger reading this feel understood?

If any NO → revise entry angle
```

## Output Format

```yaml
mental_conversation_analysis:
  audience: [Target audience]
  analysis_date: [Date]

  the_conversation:
    currently_thinking: "[Their internal thought]"
    worried_about: "[Their worry]"
    hoping_for: "[Their hope]"
    afraid_of: "[Their fear]"
    deciding_on: "[Their decision]"
    triggered_by: "[What caused this state]"

  conversation_summary: |
    [2-3 sentence summary of the mental conversation]

  entry_strategy:
    approach: [Acknowledgment | Empathy | Question | Observation | Story]
    entry_line: "[The opening line that enters the conversation]"
    why_it_works: "[Why this enters rather than interrupts]"

  hook_options:
    - "[Option 1]"
    - "[Option 2]"
    - "[Option 3]"

  primary_motive: [Which of the 6 motives dominates]
  dominant_desire: [The single most powerful desire]
```

## Example Analysis

```
EXAMPLE: Selling productivity software to overwhelmed managers

THE CONVERSATION:
- Currently thinking: "There aren't enough hours in the day"
- Worried about: "I'm going to miss something important"
- Hoping for: "Some way to feel in control again"
- Afraid of: "Looking incompetent / getting fired"
- Deciding on: "Whether to work longer or find a better system"
- Triggered by: "Missing a deadline last week"

ENTRY LINE:
"If you've ever ended a workday feeling like you barely made a
dent in your to-do list... if you've ever worked through lunch
only to realize you forgot something important anyway... then
you know exactly what I'm about to describe."

WHY IT WORKS:
- Enters their existing frustration
- Shows understanding of their daily reality
- Makes them feel "yes, that's me!"
- Doesn't mention product yet
```

## Common Mistakes

```
MISTAKE 1: Starting with the product
❌ "Introducing TaskMaster Pro, the revolutionary..."
✅ "If you're drowning in tasks and feeling overwhelmed..."

MISTAKE 2: Assuming the conversation
❌ Writing based on what YOU think they care about
✅ Research what they ACTUALLY think about

MISTAKE 3: Generic openings
❌ "Dear Valued Customer" or "Are you looking for..."
✅ Specific acknowledgment of their specific situation

MISTAKE 4: Interrupting vs Entering
❌ Forcing attention with shock or hype
✅ Earning attention by showing understanding
```

## Integration

- **Precedes**: All copy writing tasks
- **Informs**: Hook creation, headline writing
- **Uses**: Customer research data
- **Next step**: map-6-primary-motives.md
- **Agent**: @robert-collier (Tier 0 - Conversation)


---

## Referência: references/ativacao.md

Acesse https://raw.githubusercontent.com/AgentsFlix/skills/main/skills/copy-pesquisa-avatar/SKILL.md e leia a skill DENTRO DA CABEÇA e as referências necessárias. Esta edição usa a referência main. Se eu já tiver anexado o pacote ou a versão colável, use esse material, incluindo as seções Referência, sem depender de novo acesso à rede. Confira se a skill já está instalada; se não estiver e houver suporte, inspecione a licença, o SKILL.md e os arquivos de apoio e instale pelo mecanismo disponível. Sem instalação, aplique o procedimento nesta conversa e informe o limite.

Antes de me fazer perguntas, leia o contrato AgentFlix incluído e cheque nossa conversa, sua memória local acessível e os arquivos relevantes que você já conhece. Identifique os inputs exigidos, quais você já tem e quais faltam. Reaproveite fatos atuais, identifique origem, data, conflitos e inferências. Não invente lembranças nem me peça novamente o que já sabe.

Mostre uma síntese curta e pergunte só pelas lacunas necessárias. TODA pergunta aberta, inclusive de configuração, referência, revisão e rotina, deve trazer junto um exemplo de resposta baseado no contexto que você recuperou de mim. Deixe claro que é sugestão. Sem memória relevante, declare isso e rotule o exemplo como hipotético; use minhas novas respostas nos exemplos seguintes. Não grave o exemplo como minha resposta.

Siga o procedimento da skill e confira seus critérios de entrega. Se faltar algo obrigatório, mantenha a etapa aguardando. Registre apenas uso e resultados observados, em armazenamento privado, com a identidade e a revisão desta skill. Sem persistência ou script, entregue um resumo reutilizável e explique os limites de auditoria. Confira o status e o prazo editorial do OKF; usar não renova a validade.

Avalie se vale transformar parte desta tarefa em rotina. Diga vale sugerir, não vale ou depende, com motivo. Se valer, apresente uma proposta concreta de frequência, horário, fuso, inputs, resultado, canal, silêncio, pausa e encerramento. Respeite recusas anteriores. Instalar não autoriza CRON. Só configure com minha autorização e um agendador disponível, conferindo duplicatas e o ID retornado. Não prometa alertas sem monitor; minha falta de resposta não confirma atividade ou decisão.

Use primeiro minha memória e o acervo já indicado. Não leia todos os templates nem peça configuração que já está resolvida pelo ambiente. Continue os resultados anteriores e entregue a operação solicitada; cada pergunta necessária deve ter seu próprio exemplo contextual. Diferencie fatos, hipóteses e dependências pendentes. Não afirme pesquisa, aprovação ou automação sem evidência.


---

## Referência: references/avatar-research.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Avatar Research - Pesquisa Profunda de Persona

## Metadata
```yaml
task_id: avatar-research
version: 1.0.0
category: research
difficulty: advanced
estimated_time: 2-4 hours
elicit: true
dependencies:
  - checklists/avatar-research-checklist.md
  - templates/avatar-research-template.md
outputs:
  - Documento completo de pesquisa de avatar
  - Nuvem de palavras
  - Arquitetura da linguagem
  - Crenças aplicáveis para copy
```

## Objetivo

Conduzir uma pesquisa profunda de avatar/persona que vai além do demográfico superficial, capturando:
- **Linguagem exata** que o avatar usa
- **Crenças** que sustentam suas decisões
- **Dores ocultas** nas entrelinhas
- **Intencionalidade** por trás das palavras
- **Padrões linguísticos** para copy de alta conversão

---

## FASE 1: COLETA DE DADOS

### Step 1.1: Fontes de Dados

```
elicit: true
question: "Quais fontes de dados você tem disponíveis?"
options:
  - Formulários de onboarding
  - Pesquisas de satisfação
  - Comentários em redes sociais
  - Mensagens de WhatsApp/Telegram
  - Emails de clientes
  - Transcrições de calls
  - Reviews de produto
  - Comentários em anúncios
```

### Step 1.2: Extração de Citações

**Para cada fonte, extraia:**

1. **Citações literais** - Copie exatamente como o cliente escreveu
2. **Contexto** - Qual pergunta gerou essa resposta?
3. **Frequência** - Quantas vezes esse padrão aparece?

```markdown
## Modelo de Extração

| Citação Literal | Contexto/Pergunta | Frequência |
|-----------------|-------------------|------------|
| "Sinto que tenho muito potencial..." | Por que entrou? | 5x |
| "Minha mente não para de pensar..." | Qual sua maior dor? | 8x |
```

---

## FASE 2: DADOS GERAIS

### Step 2.1: Demográficos

Colete e organize:

| Dado | Como Coletar | Formato |
|------|--------------|---------|
| Faixa etária | Formulário | % por faixa |
| Sexo | Formulário | % por gênero |
| Estado civil | Formulário | % por estado |
| Profissão | Aberta + análise | Termos mais usados |
| Localização | Formulário | Top 5 regiões |
| Escolaridade | Formulário | % por nível |
| Faixa de renda | Formulário | % por faixa |

### Step 2.2: Informações Faltantes

Liste dados que você ainda precisa coletar:
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

---

## FASE 3: GOSTO PESSOAL

### Step 3.1: Pelo que se interessam

**Pergunta-chave:** "Pelo que você é fascinado? Pelo que tem curiosidade?"

**Formato de análise:**

```markdown
| Citação Literal |
| :---- |
| "Sou fascinado por [tema] porque [motivo]..." |
| "Sempre quis [desejo] desde que [contexto]..." |
```

**Síntese conclusiva (bullets):**
- Amam [tema/atividade]
- São fascinados por [assunto]
- Buscam [objetivo profundo]
- Se identificam com [valores/identidade]

### Step 3.2: Tempo Livre

**Pergunta-chave:** "O que você gosta de fazer no tempo livre?"

Formate como gráfico ou tabela de frequência:

| Atividade | % |
|-----------|---|
| Ler/Estudar | X% |
| Exercícios | X% |
| Família | X% |

**Insight-chave:** "Não é apenas um interesse, [atividade] é um estilo de vida para eles!"

---

## FASE 4: OPINIÃO PESSOAL

### Step 4.1: Como se enxergam

**Pergunta-chave:** "Como você se descreve? Quais suas qualidades e defeitos?"

**Extraia padrões de auto-percepção:**

```markdown
| Citação com **negrito** nos padrões |
| :---- |
| "Eu me considero bem **esquecido** e algumas vezes **perco o foco**..." |
| "Sempre senti que poderia **criar algo inovador**, mas **não consigo sozinho**..." |
```

**Síntese:**
- Se consideram [característica positiva]
- Sentem que [percepção/frustração]
- Se veem como [identidade]

### Step 4.2: No que acreditam

**Pergunta-chave:** "O que você acredita sobre [tema]? O que defende ou repudia?"

**Formato de Crença + Aplicação:**

```markdown
**Crença 01:** "[citação literal da crença]"

**Aplicação em Copy:**
"[Reformule a crença como gancho de copy]"

Exemplo:
- Crença: "Não consigo armazenar tudo na minha mente biológica"
- Copy: "Você nunca vai conseguir armazenar tudo na sua mente biológica.
  E você sabe disso, tanto que [exemplo do dia a dia]. Por isso..."
```

---

## FASE 5: PESQUISA TRADICIONAL

### Step 5.1: Dores Admitidas

**Pergunta-chave:** "Qual sua maior dificuldade/frustração com [tema]?"

```markdown
| Citação |
| :---- |
| "Minha maior dor é [problema] porque [consequência]..." |
```

**Síntese em bullets:**
- Dor 1: [descrição]
- Dor 2: [descrição]

### Step 5.2: Dores Ocultas (Entrelinhas)

**Leia nas entrelinhas - o que eles NÃO dizem diretamente, mas fica implícito:**

```markdown
| Citação com **destaque** no padrão oculto |
| :---- |
| "Precisava de uma forma de **organizar melhor** as informações..." |
```

**Síntese das dores ocultas:**
- A grande dor oculta é [insight]
- Eles não verbalizam, mas [padrão]
- Por trás de X, está Y

### Step 5.3: Sonhos e Desejos

**Pergunta-chave:** "Se você pudesse realizar qualquer desejo, qual seria?"

**Categorize por tema:**

| Categoria | Menções | Padrão |
|-----------|---------|--------|
| Dinheiro/Liberdade | Xx | "independência financeira", "viver de X" |
| Conhecimento | Xx | "sabedoria", "dominar" |
| Impacto | Xx | "ajudar pessoas", "legado" |

---

## FASE 6: PERGUNTAS DO ONBOARDING

### Template de Análise por Pergunta

Para CADA pergunta do seu onboarding, use este formato:

```markdown
### Pergunta: "[Texto exato da pergunta]"

| Categoria de Resposta | Menções | Palavras mais comuns |
| :---: | :---: | :---: |
| Categoria A | 14 | palavra1, palavra2 |
| Categoria B | 9 | palavra3, palavra4 |

**Análise por categoria:**

▪️ **Categoria A:** Quando o motivo é este, eles usam palavras como
[termo1] e [termo2]. Demonstram [sentimento/intenção].

**Intencionalidade:** [O que está por trás dessa resposta? Qual a
lógica deles?]

▪️ **Categoria B:** [Análise similar]
```

### Perguntas Recomendadas

1. **Por que você entrou/comprou [produto]?** → Gatilhos de compra
2. **Para que você está usando [produto]?** → Uso real vs. esperado
3. **De que forma [produto] pode te ajudar a alcançar seus objetivos?** → Transformação desejada
4. **Tem algo que gostaria de aprender com a gente?** → Gaps de conhecimento
5. **Se eu pudesse realizar qualquer desejo seu, qual seria?** → Sonho profundo
6. **O que te impede de ter esse desejo realizado hoje?** → Objeções e bloqueios

---

## FASE 7: ARQUITETURA DA LINGUAGEM

### Step 7.1: Nuvem de Palavras

**Conte a frequência de CADA palavra relevante:**

| Palavra | Menções |
| :---: | :---: |
| [termo 1] | 108 |
| [termo 2] | 96 |
| [termo 3] | 86 |

**Top 20 palavras = vocabulário do seu avatar**

### Step 7.2: Análise de Radicais

**Agrupe palavras pela mesma raiz:**

| Radical | Palavras Derivadas | Menções |
| :---- | :---- | :---- |
| Cria | Criar, Criação, Criativo, Criatividade | 86, 33, 3, 4 |
| Organiz | Organizar, Organizado, Organização | 41, 5, 23 |
| Ideia | Ideia, Ideias | 12, 67 |

### Step 7.3: Intencionalidade

**Para cada palavra-chave, analise:**

```markdown
**[PALAVRA] (Xx menções)**

**Se relaciona com:** [palavras que aparecem junto]

**Variações mais usadas:**
- "[frase exata]" (Xx)
- "[frase exata]" (Xx)

**Padrões descobertos:**
- Sempre usam [termo] quando falam de [contexto]
- NUNCA usam [termo] → insight negativo

**Pergunta-chave:** [O que isso revela sobre o avatar?]
```

### Step 7.4: Preferências Linguísticas

Documente:
- Termo preferido: "criação de conteúdo" vs "produção de conteúdo"
- Verbo preferido: "organizar" vs "estruturar"
- Adjetivo preferido: "fascinado" vs "interessado"

---

## FASE 8: INSIGHTS ADICIONAIS

### Step 8.1: Dificuldades com o Produto

**Podem ser objeções de compra para novos clientes:**

```markdown
| Dificuldade relatada |
| :---- |
| "Ainda não sei como extrair [benefício] do produto..." |
| "Tenho medo de não conseguir [resultado]..." |
```

### Step 8.2: Experiência Anterior

**O que já tentaram? Por que não funcionou?**

```markdown
| Experiência anterior |
| :---- |
| "Já havia estudado sobre [tema], mas não achei método simples..." |
| "Vinha pesquisando desde [tempo] sobre [solução]..." |
```

### Step 8.3: Curiosidades

- Conhecem a marca há quanto tempo? (%)
- Primeiro contato foi por qual canal? (%)
- Quem indicou? (%)

---

## OUTPUT FINAL

Ao final, você terá:

1. **Perfil Demográfico** - Quem é o avatar
2. **Perfil Psicográfico** - Como pensa e sente
3. **Dores Explícitas** - O que admite sofrer
4. **Dores Ocultas** - O que sofre mas não verbaliza
5. **Sonhos e Desejos** - Onde quer chegar
6. **Crenças** - O que acredita (com aplicação para copy)
7. **Arquitetura da Linguagem** - As palavras exatas para usar
8. **Objeções** - O que pode impedir a compra

---

## Checklist de Validação

Execute o checklist: `checklists/avatar-research-checklist.md`

## Template de Output

Use o template: `templates/avatar-research-template.md`


---

## Referência: references/checklist-avatar-research-checklist.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Avatar Research Checklist

## Metadata
```yaml
checklist_id: avatar-research-checklist
version: 1.0.0
applies_to: tasks/avatar-research.md
scoring:
  minimum_pass: 80%
  excellent: 95%
```

---

## 1. COLETA DE DADOS (15 pontos)

### Fontes (5 pontos)
- [ ] **1pt** - Mínimo 2 fontes de dados diferentes utilizadas
- [ ] **2pt** - Mínimo 50 citações literais extraídas
- [ ] **2pt** - Citações organizadas com contexto/pergunta original

### Qualidade das Citações (10 pontos)
- [ ] **2pt** - Citações são literais (não parafraseadas)
- [ ] **2pt** - Preservou erros de digitação e linguagem informal
- [ ] **2pt** - Destacou padrões em **negrito** dentro das citações
- [ ] **2pt** - Organizou citações em tabelas formatadas
- [ ] **2pt** - Incluiu frequência de cada padrão

---

## 2. DADOS GERAIS (10 pontos)

### Demográficos (5 pontos)
- [ ] **1pt** - Faixa etária documentada (%)
- [ ] **1pt** - Gênero documentado (%)
- [ ] **1pt** - Estado civil documentado (%)
- [ ] **1pt** - Profissão/área documentada (termos exatos)
- [ ] **1pt** - Pelo menos 5 dados demográficos coletados

### Completude (5 pontos)
- [ ] **2pt** - Lista de informações faltantes criada
- [ ] **3pt** - Plano de coleta para dados faltantes

---

## 3. GOSTO PESSOAL (10 pontos)

### Interesses (5 pontos)
- [ ] **2pt** - Mínimo 10 citações sobre interesses
- [ ] **2pt** - Síntese em bullet points
- [ ] **1pt** - Identificou padrões de fascínio/paixão

### Tempo Livre (5 pontos)
- [ ] **2pt** - Dados quantitativos (% por atividade)
- [ ] **2pt** - Insight sobre estilo de vida
- [ ] **1pt** - Conexão com identidade do avatar

---

## 4. OPINIÃO PESSOAL (15 pontos)

### Auto-percepção (7 pontos)
- [ ] **2pt** - Mínimo 10 citações sobre como se enxergam
- [ ] **2pt** - Identificou qualidades que se atribuem
- [ ] **2pt** - Identificou defeitos/limitações que admitem
- [ ] **1pt** - Síntese da identidade percebida

### Crenças (8 pontos)
- [ ] **2pt** - Mínimo 3 crenças documentadas
- [ ] **3pt** - Cada crença tem aplicação para copy
- [ ] **3pt** - Aplicações são frases prontas para usar

---

## 5. PESQUISA TRADICIONAL (15 pontos)

### Dores Admitidas (5 pontos)
- [ ] **2pt** - Mínimo 10 citações de dores
- [ ] **2pt** - Categorização por tipo de dor
- [ ] **1pt** - Síntese em bullets

### Dores Ocultas (5 pontos)
- [ ] **2pt** - Análise de entrelinhas realizada
- [ ] **2pt** - Padrões não-verbalizados identificados
- [ ] **1pt** - Insight sobre a "grande dor oculta"

### Sonhos e Desejos (5 pontos)
- [ ] **2pt** - Mínimo 10 citações de sonhos
- [ ] **2pt** - Categorização por tema
- [ ] **1pt** - Identificou o "futuro brilhante" do avatar

---

## 6. PERGUNTAS DO ONBOARDING (10 pontos)

- [ ] **2pt** - Mínimo 4 perguntas analisadas
- [ ] **2pt** - Cada pergunta tem tabela de categorias
- [ ] **2pt** - Cada categoria tem análise com ▪️
- [ ] **2pt** - Intencionalidade documentada
- [ ] **2pt** - Palavras mais comuns por categoria

---

## 7. ARQUITETURA DA LINGUAGEM (20 pontos)

### Nuvem de Palavras (5 pontos)
- [ ] **2pt** - Mínimo 20 palavras contabilizadas
- [ ] **2pt** - Ordenação por frequência
- [ ] **1pt** - Top 10 palavras destacadas

### Análise de Radicais (5 pontos)
- [ ] **2pt** - Mínimo 10 radicais analisados
- [ ] **2pt** - Palavras derivadas agrupadas
- [ ] **1pt** - Soma de menções por radical

### Intencionalidade (7 pontos)
- [ ] **2pt** - Mínimo 5 palavras com análise profunda
- [ ] **2pt** - Relações entre palavras documentadas
- [ ] **2pt** - Variações mais usadas listadas
- [ ] **1pt** - Perguntas-chave formuladas

### Preferências Linguísticas (3 pontos)
- [ ] **1pt** - Termo preferido vs. alternativa
- [ ] **1pt** - Verbo preferido vs. alternativa
- [ ] **1pt** - Palavras que NUNCA usam

---

## 8. INSIGHTS ADICIONAIS (5 pontos)

- [ ] **2pt** - Dificuldades/objeções documentadas
- [ ] **2pt** - Experiências anteriores documentadas
- [ ] **1pt** - Curiosidades (tempo de conhecimento, canal de entrada)

---

## TOTAL: 100 pontos

### Classificação

| Score | Classificação | Ação |
|-------|---------------|------|
| 95-100 | Excelente | Pronto para uso |
| 80-94 | Bom | Revisar pontos fracos |
| 60-79 | Regular | Refazer seções incompletas |
| <60 | Insuficiente | Refazer pesquisa |

---

## CRITÉRIOS DE QUALIDADE EXTRA

### A pesquisa está PRONTA quando:

- [ ] Você consegue escrever um anúncio usando APENAS palavras do avatar
- [ ] Você consegue listar 5 crenças com aplicação de copy
- [ ] Você sabe a diferença entre dor admitida e dor oculta
- [ ] Você tem o Top 20 palavras mais usadas pelo avatar
- [ ] Você identificou pelo menos 3 padrões linguísticos únicos

### Red Flags - Refaça se:

- [ ] Mais de 30% das citações são parafraseadas
- [ ] Não tem análise de intencionalidade
- [ ] Menos de 50 citações totais
- [ ] Nenhuma aplicação de copy nas crenças
- [ ] Síntese sem bullets (texto corrido)

---

## Assinatura de Aprovação

```
Pesquisador: ____________________
Data: __________________________
Score: _______ / 100
Status: [ ] Aprovado  [ ] Revisar  [ ] Refazer
```


---

## Referência: references/checklist-copysearch-checklist.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# CopySearch Checklist — "Skin in the Game" Validation

## Metadata
```yaml
checklist_id: copysearch-checklist
version: 2.0.0
applies_to: tasks/copysearch.md
methodology: david-ogilvy-research-engineering
scoring:
  minimum_pass: 80%
  excellent: 95%
total_points: 200
```

---

## Core Principle

> **"Research methodology is fundamentally about epistemic discipline, not tools. The question is: 'How do I know this is true, and how might I be fooling myself?'"**
> — The Ogilvy Tradition

---

## PHASE 0: MISSION BRIEFING (15 points)

### Research Charter (10 points)
- [ ] **3pt** — Specific business decision to inform is clearly defined
- [ ] **2pt** — Success criteria for "sufficient evidence" established
- [ ] **2pt** — GOLD vs SILVER tier requirements identified
- [ ] **2pt** — Out of scope explicitly stated
- [ ] **1pt** — Human accountable for research accuracy named

### Anti-Hallucination Setup (5 points)
- [ ] **1pt** — Confidence threshold defined (default: 70%)
- [ ] **1pt** — Citation requirement activated
- [ ] **1pt** — Provenance tracking enabled
- [ ] **1pt** — Cross-validation protocol selected
- [ ] **1pt** — "I don't know" response authorized

---

## PHASE 1: PRODUCT/TECHNICAL RESEARCH (30 points)

### Document Collection (10 points)
- [ ] **2pt** — Minimum 3 technical sources consulted
- [ ] **3pt** — Documentation read COMPLETELY (not summaries)
- [ ] **3pt** — Interview/transcript with creator available
- [ ] **2pt** — Facts organized with source and page/section

### Fact Extraction Quality (12 points)
- [ ] **2pt** — Each fact has complete provenance (source + location + date)
- [ ] **2pt** — Each fact has CONFIDENCE score (HIGH/MEDIUM/LOW)
- [ ] **2pt** — Each fact has VERIFICATION method documented
- [ ] **3pt** — Minimum 13 specific facts extracted (Rolls-Royce standard)
- [ ] **3pt** — Each fact has SPECIFIC NUMBER (not "many")

### Anchor Fact Identification (8 points)
- [ ] **3pt** — 3+ anchor fact candidates identified
- [ ] **3pt** — Selected anchor fact passes all 5 Ogilvy criteria
- [ ] **2pt** — Anchor fact has full provenance documented

**Anchor Fact Criteria (all must pass):**
```
[ ] Specific — Numbers, measurements, concrete details
[ ] Surprising — Not obvious, challenges assumptions
[ ] Differentiating — Competitors cannot credibly claim
[ ] Verifiable — Source can be cited, claim can be tested
[ ] Relevant — Connects to consumer benefit
```

---

## PHASE 2: CONSUMER/LANGUAGE RESEARCH (35 points)

### VOC Collection (15 points)
- [ ] **3pt** — Minimum 2 different VOC sources
- [ ] **4pt** — Minimum 50 LITERAL quotes (not paraphrased)
- [ ] **4pt** — Quotes preserve original language (errors, slang)
- [ ] **4pt** — Context documented (what question generated the response)

### Language Pattern Extraction (15 points)
- [ ] **3pt** — PAIN language documented with frequency
- [ ] **3pt** — DESIRE language documented with frequency
- [ ] **3pt** — OBJECTION language documented with frequency
- [ ] **3pt** — COMPARISON language documented with frequency
- [ ] **3pt** — EMOTIONAL language documented with frequency

### Jobs-to-be-Done (5 points)
- [ ] **3pt** — Minimum 5 JTBDs documented
- [ ] **2pt** — JTBDs in correct format: "When [situation], I want [motivation], so that [outcome]"

---

## PHASE 3: COMPETITIVE RESEARCH (25 points)

### Competitor Identification (10 points)
- [ ] **2pt** — Direct competitors identified (same category, same audience)
- [ ] **2pt** — Indirect competitors identified (different category, same JTBD)
- [ ] **2pt** — Substitute solutions identified (including "do nothing")
- [ ] **2pt** — Market share or relative size estimated
- [ ] **2pt** — Tier classification applied (leader/challenger/niche)

### Ad & Message Collection (10 points)
- [ ] **2pt** — Minimum 3 competitors analyzed
- [ ] **3pt** — Ads collected from Meta Ad Library
- [ ] **3pt** — Ads collected from Google Ads Transparency
- [ ] **2pt** — Landing pages documented with copy extracted

### Gap Analysis (5 points)
- [ ] **2pt** — SATURATED claims identified (what to avoid)
- [ ] **2pt** — GAPS in positioning identified (opportunities)
- [ ] **1pt** — Winners (60+ days) analyzed

---

## PHASE 4: EVIDENCE SYNTHESIS (30 points)

### Positioning (12 points)
- [ ] **3pt** — Positioning is DIFFERENTIATED (competitors cannot claim)
- [ ] **3pt** — Positioning is RELEVANT (consumers care)
- [ ] **3pt** — Positioning is CREDIBLE (can be proved)
- [ ] **3pt** — Positioning statement follows formula

### Proposition & Proof Stack (10 points)
- [ ] **2pt** — Central promise is benefit-focused (not feature)
- [ ] **2pt** — Anchor fact selected and fully verified
- [ ] **2pt** — Minimum 5 supporting proofs compiled
- [ ] **2pt** — Each proof has complete provenance
- [ ] **2pt** — Proofs ranked by strength (GOLD/SILVER)

### Strategic Brief Completeness (8 points)
- [ ] **1pt** — Positioning statement included
- [ ] **1pt** — Target audience (primary + secondary) defined
- [ ] **1pt** — Anti-target defined (who this is NOT for)
- [ ] **1pt** — Proposition with reason-why
- [ ] **1pt** — Tone & character guidelines
- [ ] **1pt** — Mandatories listed
- [ ] **1pt** — Success metrics defined
- [ ] **1pt** — Competitive frame documented

---

## PHASE 5: CREATIVE DEVELOPMENT (30 points)

### Headline Generation (18 points)
- [ ] **4pt** — Minimum 25 headlines generated
- [ ] **2pt** — Direct benefit headlines included
- [ ] **2pt** — News/announcement headlines included
- [ ] **2pt** — How-to headlines included
- [ ] **2pt** — Question format headlines included
- [ ] **2pt** — Testimonial/quote headlines included
- [ ] **2pt** — Specific number/statistic headlines included
- [ ] **2pt** — Challenge/provocative headlines included
- [ ] **2pt** — Story/curiosity headlines included

### Headline Quality (7 points)
- [ ] **2pt** — Each headline has clear benefit
- [ ] **2pt** — Headlines 6-12 words
- [ ] **2pt** — Headlines work ALONE (don't need body copy)
- [ ] **1pt** — Top 5 selected for testing

### Copy Structure (5 points)
- [ ] **1pt** — Structure includes OBJECTION HANDLING
- [ ] **1pt** — Structure includes OFFER (what they get)
- [ ] **1pt** — Structure includes RISK REVERSAL (guarantee)
- [ ] **1pt** — Each claim has SOURCE traceable
- [ ] **1pt** — BRONZE claims use qualifiers ("can", "designed to")

---

## PHASE 6: VALIDATION — "SKIN IN THE GAME" (35 points)

### Gate 1 — SOURCE (8 points)
- [ ] **4pt** — Each critical insight has traceable source (URL, doc, quote)
- [ ] **4pt** — Insights without source were DISCARDED

### Gate 2 — VERIFICATION (8 points)
- [ ] **4pt** — Critical insights cross-checked with 2+ sources
- [ ] **4pt** — Unverified insights MARKED as such

### Gate 3 — REPRESENTATIVENESS (8 points)
- [ ] **4pt** — Quantitative analysis exists (not just isolated examples)
- [ ] **4pt** — Sample is sufficient (not cherry-picking)

### Gate 4 — HUMAN (6 points)
- [ ] **6pt** — Critical claims reviewed by human specialist

### Red Flags Check (5 points)
- [ ] **1pt** — No insight "too good to be true"
- [ ] **1pt** — No numerical data without clear origin
- [ ] **1pt** — No AI "discoveries" unconfirmed in data
- [ ] **1pt** — No generalizations without quantitative support
- [ ] **1pt** — All insights can be verified independently

---

## TOTAL: 200 points

### Scoring Guide

| Score | % | Classification | Action |
|-------|---|----------------|--------|
| 190-200 | 95%+ | **Excellent** | Ready for execution |
| 160-189 | 80-94% | **Good** | Review weak points |
| 120-159 | 60-79% | **Needs Work** | Redo incomplete sections |
| <120 | <60% | **Insufficient** | Redo complete research |

---

## QUALITY GATES — Research is READY when:

### Evidence Quality
- [ ] You can defend EVERY headline with a primary source
- [ ] You can write copy using ONLY consumer language (VOC)
- [ ] You know what NOT to say (saturated claims)
- [ ] Anchor fact passes all 5 Ogilvy criteria
- [ ] No insight depends on "intuition" or "feels right"
- [ ] A skeptic cannot invalidate your sources

### Big Idea Test (Ogilvy's 5 Questions)
- [ ] **GASP** — Did it make me gasp when I first saw it?
- [ ] **WISH** — Do I wish I had thought of it myself?
- [ ] **UNIQUE** — Is it genuinely unique?
- [ ] **STRATEGY** — Does it fit the strategy to perfection?
- [ ] **30 YEARS** — Could it be used for 30 years?

---

## CRITICAL RED FLAGS — STOP if any are true:

- [ ] ❌ More than 30% of insights are INFERENCE (not primary)
- [ ] ❌ Anchor fact does not pass all 5 criteria
- [ ] ❌ Fewer than 50 literal VOC quotes
- [ ] ❌ No competitor analyzed in depth
- [ ] ❌ Claims without verifiable source in body copy
- [ ] ❌ AI "discovered" patterns not confirmed in data
- [ ] ❌ Human reviewer has not validated critical claims

**If ANY critical red flag is true:** STOP and investigate before proceeding.

---

## EVIDENCE HIERARCHY — Quick Reference

| Tier | Description | Use In | Validation |
|------|-------------|--------|------------|
| 🥇 **GOLD** | Sales data, DR results, verified technical docs | Headlines, primary claims | Source verification |
| 🥈 **SILVER** | Expert interviews, systematic competitive data | Supporting claims | Cross-reference |
| 🥉 **BRONZE** | Stated preferences, focus groups | With qualifiers only | Skeptical interpretation |
| ❌ **REJECT** | Awards, intuition, unverified claims | NEVER | N/A |

---

## PRE-AI CHECKLIST (Before using AI for analysis)

- [ ] Specific research questions defined
- [ ] Identified which findings require human verification
- [ ] Confidence thresholds established
- [ ] Source quality criteria specified

## POST-AI CHECKLIST (After using AI for analysis)

- [ ] Multiple model outputs compared (when possible)
- [ ] Citations verified for all claims
- [ ] Speculative language flagged for review
- [ ] Confidence levels documented
- [ ] Human expert reviewed high-stakes claims
- [ ] Numbers verified against primary sources
- [ ] Quotes verified in original context

---

## APPROVAL SIGNATURE

```
Researcher: ____________________
Date: __________________________
Score: _______ / 200 (____%)
Status: [ ] Approved  [ ] Review  [ ] Redo

ANCHOR FACT: _________________________________________________
POSITIONING: _________________________________________________

GATES PASSED:
[ ] SOURCE  [ ] VERIFICATION  [ ] REPRESENTATIVENESS  [ ] HUMAN

Human Reviewer: ____________________
Review Date: ____________________
```

---

## OGILVY'S FINAL WORDS

> **"Advertising people who ignore research are as dangerous as generals who ignore decodes of enemy signals."**
> — David Ogilvy

> **"If it doesn't sell, it isn't creative."**
> — David Ogilvy

> **"The discipline of knowledge over the anarchy of ignorance."**
> — David Ogilvy

---

*Checklist based on: docs/research/david-ogilvy-research-engineering-meta-framework.md*
*Methodology reconstructed from primary evidence (1935-1985)*


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
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-pesquisa-avatar" init --version 0.4.3 --revision 1.0.0
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-pesquisa-avatar" record --event /caminho/privado/evento.json
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-pesquisa-avatar" configure --policy /caminho/privado/politica.json
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-pesquisa-avatar" audit
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
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/copy-pesquisa-avatar" ack --id ID_RETORNADO_NA_AUDITORIA
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
title: DENTRO DA CABEÇA
description: Método e procedência editorial desta skill AgentFlix.
status: draft
generated:
  by: process:agentflix-skill-authoring
  at: '2026-09-09T16:11:07.121754+00:00'
stale_after: '2026-12-10'
sources:
- id: metodo
  resource: https://github.com/AgentsFlix/skills/tree/c69066dd098d9e2dc45a7fef3d8f895d9016c940/skills/copy-pesquisa-avatar
  title: Pacote de origem fixado pela auditoria
- id: okf
  resource: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md
  title: Open Knowledge Format
agentflix:
  schema_version: 1
  skill_id: copy-pesquisa-avatar
  content_revision: 1.0.0
  verification_evidence: []
---

# Conhecimento e validade

O método e seus materiais de origem estão no pacote fixado em sources. As adaptações de memória, elicitação e auditoria são decisões operacionais AgentFlix. Os arquivos de método distribuídos nesta edição implementam essas adaptações.

Revisar instruções, portabilidade e exemplos após mudanças de ferramenta, contexto ou evidência. Prazo editorial de três meses proposto para manutenção, sem garantia de eficácia.

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

## Referência: references/copysearch.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# CopySearch — David Ogilvy Research Engineering Protocol

## Metadata
```yaml
task_id: copysearch
version: 2.0.0
category: research
difficulty: advanced
estimated_time: 4-8 hours (AI-accelerated)
elicit: true
methodology: david-ogilvy-research-engineering
reference: docs/research/david-ogilvy-research-engineering-meta-framework.md
dependencies:
  - checklists/copysearch-checklist.md
  - templates/copysearch-template.md
  - reference/copysearch-anti-hallucination.md
  - reference/copysearch-quick-reference.md
  - reference/copysearch-tool-stack.md
outputs:
  - Research Charter
  - Technical Fact Sheet (13+ facts, anchor fact)
  - Consumer Language Bank (50+ literal quotes)
  - Competitive Intelligence Matrix
  - Strategic Brief (positioning + proposition)
  - Creative Options Document (25+ headlines)
  - Validated Insights Document
  - Research Accuracy Scorecard
```

---

## Core Principle

> **"The discipline of knowledge over the anarchy of ignorance."**
> — David Ogilvy

---

## Purpose

Transform Ogilvy's research methodology into an executable framework for AI agents conducting market research, competitive intelligence, and creative brief development—while maintaining evidence standards and preventing hallucination/cherry-picking.

**The essential question:** *"How do I know this is true, and how might I be fooling myself?"*

---

## THE OGILVY RESEARCH STACK (5 Layers)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ LAYER 5: MEASUREMENT & TESTING                                          │
│ "The most important word in the vocabulary of advertising is TEST.      │
│  Never stop testing, and your advertising will never stop improving."   │
├─────────────────────────────────────────────────────────────────────────┤
│ LAYER 4: BRAND & POSITIONING                                            │
│ "We have learned that the effect of your advertising on sales depends   │
│  more on this decision than on any other: How should you position your  │
│  product?"                                                              │
├─────────────────────────────────────────────────────────────────────────┤
│ LAYER 3: MARKET & COMPETITION                                           │
│ "Find out all you possibly can about the merits, faults and sales       │
│  arguments of competitors, and then keep quiet about them."             │
├─────────────────────────────────────────────────────────────────────────┤
│ LAYER 2: CONSUMER & VOICE OF CUSTOMER                                   │
│ "If you're trying to persuade people to do something, or buy something, │
│  it seems to me you should use their language, the language they use    │
│  every day, the language in which they think."                          │
├─────────────────────────────────────────────────────────────────────────┤
│ LAYER 1: PRODUCT & ENGINEERING                                          │
│ "Set yourself to becoming the best-informed person in the agency on     │
│  the account."                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## EVIDENCE HIERARCHY (Memorize This Order)

| TIER | TYPE | VALIDATION | USE IN COPY |
|------|------|------------|-------------|
| 🥇 **GOLD** | Direct response results, sales data, verified technical documentation | Sales/response tracking, source verification | Headlines, primary claims |
| 🥈 **SILVER** | Expert interviews, systematic competitive analysis, diagnostic metrics | Cross-reference | Supporting claims |
| 🥉 **BRONZE** | Consumer stated preferences, focus groups | Behavioral cross-check | Hypothesis only, use qualifiers |
| ❌ **REJECT** | Creative awards, unverified claims, intuition | N/A | NEVER use |

> **"We have been unable to establish any correlation whatever between awards and sales."**
> — David Ogilvy, *Ogilvy on Advertising*

---

## PHASE 0: MISSION BRIEFING
### *Before any research begins*

**Objective:** Define scope, establish validation criteria, prevent scope creep.

> **"I notice increasing reluctance on the part of marketing executives to use judgment; they are coming to rely too much on research, and they use it as a drunkard uses a lamp post—for support, rather than for illumination."**
> — David Ogilvy

### Checklist 0.1 — Research Definition

```
elicit: true
question: "What specific business decision must this research inform?"
format: text
```

- [ ] What is the specific business decision this research must inform?
- [ ] What would "sufficient evidence" look like to make this decision?
- [ ] What claims will require GOLD-tier evidence vs. SILVER-tier?
- [ ] What is explicitly OUT of scope?
- [ ] Who is the human accountable for research accuracy?
- [ ] What is the deadline and depth trade-off?

### Checklist 0.2 — Anti-Hallucination Setup

- [ ] Confidence threshold defined (default: 70% for auto-accept, below requires human review)
- [ ] Citation requirement activated (no claim without source)
- [ ] Provenance tracking enabled (source → page/section → date accessed)
- [ ] Cross-validation protocol selected (2+ independent sources for key claims)
- [ ] "I don't know" response authorized for insufficient evidence

### Output Artifact: Research Charter

```
RESEARCH CHARTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Decision to inform: [specific decision]
Success criteria: [what evidence closes the question]
Gold-tier requirements: [claims needing behavioral/verified evidence]
Out of scope: [explicit exclusions]
Accountable human: [name]
Deadline: [date] | Depth level: [rapid/standard/deep]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 1: PRODUCT/TECHNICAL RESEARCH (Layer 1)
### *"Become the best-informed person on the subject"*

**Objective:** Extract verifiable facts, specifications, and non-obvious product truths.

> **"For Rolls-Royce, I spent three weeks reading about the car. By the time I finished, I knew more about it than 90% of the people who buy Rolls-Royces."**
> — David Ogilvy, *Confessions of an Advertising Man*

### Step 1.1 — Document Collection

```
elicit: true
question: "What technical documentation do you have available about the product?"
options:
  - Product manuals/specifications
  - Patents or proprietary documentation
  - Engineering reports
  - Onboarding transcripts
  - Demo videos
  - API/code documentation (for tech)
  - Certifications/lab reports
  - Independent test results
  - Other (specify)
```

**Source Priority (in order):**
1. Official product specifications, manuals, technical sheets
2. Patent filings and regulatory submissions
3. Independent lab tests and certifications
4. Engineering reviews and technical journalism
5. Manufacturer claims (verify before use)

### Step 1.2 — Fact Extraction

**For each material, extract using this template:**

```
FACT: [specific claim]
SOURCE: [document name]
LOCATION: [page/section/paragraph]
DATE: [publication date]
CONFIDENCE: [HIGH/MEDIUM/LOW]
VERIFICATION: [how to verify independently]
```

**Extraction Rules:**
1. Seek SPECIFIC NUMBERS (not "many" but "147")
2. Seek UNIQUE PROCESSES (how it's made differently)
3. Seek TESTS PERFORMED (proof of quality)
4. Seek MEMORABLE DETAILS (French walnut picnic tables)

> **"When research reported that the average shopper thought Sears Roebuck made a profit of 37 per cent, we headlined an advertisement 'Sears makes a profit of 5 per cent.' This specific number was more persuasive than saying Sears' profit was 'less than you might suppose.'"**
> — David Ogilvy, *Ogilvy on Advertising*

### Step 1.3 — Creator Interviews

```
elicit: true
question: "Can you schedule an interview with the product creator/engineer?"
options:
  - Yes, I can schedule
  - I have transcripts from previous calls
  - I have access to internal documents
  - No direct access
```

**Questions for interview:**
1. "What does nobody know about how this is made?"
2. "What technical detail makes you most proud?"
3. "What do competitors NOT do that you do?"
4. "If you had to convince a skeptic, what single fact would you use?"
5. "What was the most rigorous test the product passed?"

### Step 1.4 — Anchor Fact Identification

**Ogilvy Standard:** *"At 60 miles an hour the loudest noise in this new Rolls-Royce comes from the electric clock."*

**Anchor Fact Criteria (all must be true):**
- [ ] **Specific** — Numbers, measurements, concrete details
- [ ] **Surprising** — Not obvious, challenges assumptions
- [ ] **Differentiating** — Competitors cannot credibly claim this
- [ ] **Verifiable** — Source can be cited, claim can be tested
- [ ] **Relevant** — Connects to consumer benefit

### Checklist 1.1 — Product Research Quality Gate

- [ ] Read ALL available technical documentation (not summaries)
- [ ] Interviewed or have transcripts from creators
- [ ] Found at least 3 facts no competitor uses
- [ ] Each fact has complete provenance (source + location + date)
- [ ] Numerical claims verified against original source
- [ ] Superlatives flagged for verification ("best," "first," "only")
- [ ] Identified anchor fact candidate passing all 5 criteria

### Output Artifact: Technical Fact Sheet

```
TECHNICAL FACT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product/Service: [name]
Research Date: [date]
Sources Reviewed: [count] | Documents Processed: [count]

ANCHOR FACT CANDIDATE:
[The single most compelling fact with full provenance]

SUPPORTING FACTS (ranked by strength):
1. [Fact] — Source: [x] — Confidence: [HIGH/MED/LOW]
2. [Fact] — Source: [x] — Confidence: [HIGH/MED/LOW]
3. [Fact] — Source: [x] — Confidence: [HIGH/MED/LOW]
... [continue to 13+ facts minimum]

CLAIMS REQUIRING VERIFICATION:
• [Claim] — Verification method: [x]

REJECTED CLAIMS (insufficient evidence):
• [Claim] — Reason: [x]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 2: CONSUMER/LANGUAGE RESEARCH (Layer 2)
### *"Use their language, the language in which they think"*

**Objective:** Understand how real consumers talk about the problem, product category, and their desires—in their own words.

> **"If you're trying to persuade people to do something, or buy something, it seems to me you should use their language, the language they use every day, the language in which they think."**
> — David Ogilvy, *Confessions of an Advertising Man*

> **"The trouble with market research is that people don't think how they feel, they don't say what they think, and they don't do what they say."**
> — David Ogilvy

### Step 2.1 — Voice of Customer Mining

```
elicit: true
question: "What Voice of Customer sources do you have available?"
options:
  - Reviews (Amazon, G2, App Store, etc.)
  - Support tickets (Zendesk, Intercom, etc.)
  - NPS/CSAT comments
  - Call transcripts (Gong, Fireflies, etc.)
  - WhatsApp/Telegram messages
  - Social media comments
  - Customer emails
  - Survey responses
  - Ad comments
```

**Source Priority (in order):**
1. Customer support tickets and complaints (behavioral gold)
2. Product reviews (Amazon, G2, Trustpilot, etc.)
3. Forum discussions and Reddit threads
4. Social media conversations (organic, not paid)
5. Call/chat transcripts (if available)
6. Survey open-ends (lowest priority — prompted responses)

### Step 2.2 — Language Pattern Extraction

**Extract into these 5 categories:**

```
PAIN LANGUAGE: How they describe the problem
[exact quotes with frequency count]

DESIRE LANGUAGE: How they describe the ideal outcome
[exact quotes with frequency count]

OBJECTION LANGUAGE: Why they hesitate or reject
[exact quotes with frequency count]

COMPARISON LANGUAGE: How they compare alternatives
[exact quotes with frequency count]

EMOTIONAL LANGUAGE: Intense positive/negative expressions
[exact quotes with frequency count]
```

### Step 2.3 — Objection Inventory

> **"Find out all you possibly can about the faults and objections... profound knowledge will help you put your positive case more convincingly."**
> — David Ogilvy, *The Theory and Practice of Selling the Aga Cooker*

| Objection | Frequency | Addressable? | Copy Opportunity |
|-----------|-----------|--------------|------------------|
| [objection] | Xx | Y/N | [how to address in copy] |

### Step 2.4 — Jobs-to-be-Done

```
When [situation], I want [motivation], so that [expected outcome].
```

List at least 5 JTBDs identified from VOC research.

### Checklist 2.1 — Consumer Research Quality Gate

- [ ] Minimum 100 authentic customer statements collected
- [ ] Sources span positive, negative, and neutral sentiment
- [ ] Recency verified (prioritize last 12 months)
- [ ] Organic vs. incentivized reviews distinguished
- [ ] Exact language preserved (no paraphrasing)
- [ ] Source URL/reference captured for each statement
- [ ] Each pattern appears in 3+ independent sources
- [ ] Frequency/prevalence estimated
- [ ] Contradictions and tensions documented
- [ ] "Jobs to be done" language identified

### Output Artifact: Consumer Language Bank

```
CONSUMER LANGUAGE BANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product/Category: [name]
Statements Analyzed: [count]
Sources: [list]
Date Range: [from] to [to]

TOP PAIN PHRASES (by frequency):
1. "[exact quote]" — appeared [X] times
2. "[exact quote]" — appeared [X] times
3. "[exact quote]" — appeared [X] times

TOP DESIRE PHRASES (by frequency):
1. "[exact quote]" — appeared [X] times
2. "[exact quote]" — appeared [X] times

COMPARISON PHRASES:
1. "[how they compare alternatives]" — [X] times

EMOTIONAL LANGUAGE:
1. "[intense expressions]" — [X] times

CRITICAL OBJECTIONS:
1. [Objection] — Frequency: [X] — Addressable: [Y/N]
2. [Objection] — Frequency: [X] — Addressable: [Y/N]

VOCABULARY TO USE: [words that resonate]
VOCABULARY TO AVOID: [words that trigger negative response]

BEHAVIORAL VS. STATED TENSION:
[Where what people SAY contradicts what they DO]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 3: COMPETITIVE RESEARCH (Layer 3)
### *"Know thy enemy better than thyself"*

**Objective:** Systematically map competitor positioning, claims, and gaps.

> **"Find out all you possibly can about the merits, faults and sales arguments of competitors, and then keep quiet about them. Profound knowledge of other cookers will help you put your positive case more convincingly."**
> — David Ogilvy, *The Theory and Practice of Selling the Aga Cooker*

### Step 3.1 — Competitor Identification

```
elicit: true
question: "Who are the main competitors?"
format: list
minimum: 3
maximum: 10
```

**Define competitive set:**
- [ ] **Direct competitors** identified (same category, same audience)
- [ ] **Indirect competitors** identified (different category, same job-to-be-done)
- [ ] **Substitute solutions** identified (including "do nothing")
- [ ] Market share or relative size estimated
- [ ] **Tier classification** applied (leader/challenger/niche)

### Step 3.2 — Competitive Ad & Message Collection

**Mandatory Collection Sources:**
- Meta Ad Library (free — all active FB/IG ads)
- Google Ads Transparency Center
- LinkedIn Ad Library
- TikTok Creative Center
- Landing pages (capture with screenshots + copy)
- Email sequences (subscribe to competitors)
- Sales collateral (request demos)

**For each competitor, collect:**

| Competitor | Channel | Headline | Primary Claim | Running Time | Winner? |
|------------|---------|----------|---------------|--------------|---------|
| [name] | Meta | "[headline]" | "[claim]" | Xx days | ✅/❌ |

**Note:** Ads running 4+ weeks = likely performing

### Step 3.3 — Positioning Gap Analysis

**Identify what competitors are NOT saying/claiming:**

```
UNCLAIMED POSITIONS: Benefits no competitor owns
[list]

UNDER-PROVEN CLAIMS: Claims made without strong proof
[list]

AUDIENCE GAPS: Segments competitors ignore
[list]

FORMAT GAPS: Ad types/channels competitors underuse
[list]

OBJECTION GAPS: Concerns competitors don't address
[list]
```

### Checklist 3.1 — Competitive Research Quality Gate

- [ ] All active ads captured for top 5 competitors
- [ ] Ad longevity noted (4+ weeks = likely performing)
- [ ] Landing pages archived with copy extracted
- [ ] Headlines and hooks cataloged
- [ ] Claims and proof points documented
- [ ] Visual patterns and formats noted
- [ ] Offer structures mapped (pricing, guarantees, bonuses)

### Output Artifact: Competitive Intelligence Matrix

```
COMPETITIVE INTELLIGENCE MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category: [name]
Competitors Analyzed: [count]
Ads Reviewed: [count]
Collection Date: [date]

POSITIONING MAP:
| Competitor | Type | Primary Claim | Proof Type | Tone | Gap |
|------------|------|---------------|------------|------|-----|
| [Name]     | Direct | [Claim]    | [Type]     | [X]  | [X] |
| [Name]     | Indirect | [Claim]  | [Type]     | [X]  | [X] |
| [Name]     | Substitute | [Claim]| [Type]     | [X]  | [X] |

TOP COMPETITOR HEADLINES (by estimated performance):
1. [Competitor]: "[Headline]" — Running [X] weeks
2. [Competitor]: "[Headline]" — Running [X] weeks

UNCLAIMED TERRITORY:
• [Position/claim no competitor owns]
• [Audience segment no competitor targets]
• [Proof type no competitor uses]

WHITE SPACE OPPORTUNITIES:
1. [Specific positioning opportunity]
2. [Specific positioning opportunity]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 4: EVIDENCE SYNTHESIS (Layer 4)
### *"The second most important decision: what should you promise?"*

**Objective:** Convert research into positioning, proposition, and proof stack.

> **"We have learned that the effect of your advertising on sales depends more on this decision than on any other: How should you position your product? The results of your campaign depend less on how we write your advertising than on how your product is positioned."**
> — David Ogilvy, "How to Create Advertising That Sells" (1972)

### Step 4.1 — Positioning Decision

**Positioning Criteria (all must be true):**
- [ ] **Differentiated** — Competitors cannot credibly claim this
- [ ] **Relevant** — Consumers actually care about this
- [ ] **Credible** — We can prove this
- [ ] **Sustainable** — Defensible over time
- [ ] **Ownable** — We can own this in consumer minds

### Step 4.2 — Proposition Development

> **"A promise is not a claim, or a theme, or a slogan. It is a benefit for the consumer."**
> — David Ogilvy, *Ogilvy on Advertising*

**Proposition Template:**
```
FOR [target audience]
WHO [have this problem/desire]
[PRODUCT] IS THE [category]
THAT [key benefit/promise]
BECAUSE [reason why/proof]
```

### Step 4.3 — Proof Stack Assembly

**Proof Hierarchy (use in this order):**
1. Third-party verification (tests, certifications)
2. Specific numbers and measurements
3. Ingredient/component specifics
4. Process/method details
5. Expert endorsements
6. Customer results (verified)
7. Testimonials (lowest, but better than no proof)

### Step 4.4 — Big Idea Test

> **"Did it make me gasp when I first saw it? Do I wish I had thought of it myself? Is it unique? Does it fit the strategy to perfection? Could it be used for 30 years?"**
> — David Ogilvy, *Ogilvy on Advertising*

- [ ] Did it make me gasp when I first saw it?
- [ ] Do I wish I had thought of it myself?
- [ ] Is it unique?
- [ ] Does it fit the strategy to perfection?
- [ ] Could it be used for 30 years?

### Checklist 4.1 — Synthesis Quality Gate

- [ ] Anchor fact selected and fully verified
- [ ] Minimum 5 supporting proofs compiled
- [ ] Each proof has complete provenance
- [ ] Legal/compliance review flag set (if needed)
- [ ] Proof ranking by strength completed
- [ ] Counter-arguments anticipated and addressed

### Output Artifact: Strategic Brief

```
STRATEGIC BRIEF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product/Service: [name]
Date: [date]
Prepared by: [agent + human reviewer]

1. POSITIONING STATEMENT
[Single sentence positioning]

2. TARGET AUDIENCE
Primary: [description]
Secondary: [description]
Anti-target: [who this is NOT for]

3. PROPOSITION (The Promise)
[Benefit statement in consumer language]

4. REASON WHY (The Proof)
Anchor Fact: [single most compelling proof]
Source: [full provenance]

Supporting Proofs:
• [Proof 1] — Source: [x] — Tier: [GOLD/SILVER]
• [Proof 2] — Source: [x] — Tier: [GOLD/SILVER]
• [Proof 3] — Source: [x] — Tier: [GOLD/SILVER]
• [Proof 4] — Source: [x] — Tier: [GOLD/SILVER]
• [Proof 5] — Source: [x] — Tier: [GOLD/SILVER]

5. TONE & CHARACTER
[Brand voice guidelines]

6. MANDATORIES
Must include: [list]
Must avoid: [list]
Legal requirements: [list]

7. SUCCESS METRICS
Primary: [behavioral metric — sales, signups, etc.]
Secondary: [diagnostic metric]

8. COMPETITIVE FRAME
We win against [competitor] by [differentiation]
We lose to [competitor] when [weakness]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 5: CREATIVE DEVELOPMENT (Layer 5 - Part 1)
### *"Now, and only now, start writing"*

**Objective:** Generate creative executions grounded in research.

> **"Give me the freedom of a tight brief."**
> — David Ogilvy

### Step 5.1 — Headline Generation (25+)

> **"On the average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar."**
> — David Ogilvy, *Ogilvy on Advertising*

**Headline Types to Generate:**
1. Direct benefit statement
2. News/announcement format
3. How-to promise
4. Question format
5. Testimonial/quote format
6. Specific number/statistic
7. Challenge/provocative
8. Story/curiosity opener

**Words that work (Ogilvy):**
- Free, New, How to, Suddenly, Now, Announcing, Introducing
- Improvement, Amazing, Sensational, Remarkable, Revolutionary
- Quick, Easy, Wanted, Challenge, Compare, Bargain, Hurry

**Headline rules:**
- [ ] Contains benefit
- [ ] Contains brand (when relevant)
- [ ] 6-12 words
- [ ] Works alone (doesn't need body copy)
- [ ] Flags the right audience

### Step 5.2 — Copy Structure (Ogilvy Long-Copy Model)

> **"The more you tell, the more you sell."**
> — David Ogilvy

```
1. HEADLINE: Captures attention with benefit or curiosity
2. SUBHEAD: Expands/qualifies the headline
3. LEAD: Hooks with problem recognition or promise
4. ANCHOR FACT: The single most compelling proof
5. PROOF STACK: Additional evidence building credibility
6. OBJECTION HANDLING: Address key barriers
7. OFFER: What exactly they get
8. CALL TO ACTION: Specific next step
9. RISK REVERSAL: Guarantee or safety net
```

### Checklist 5.1 — Creative Quality Gate

- [ ] Minimum 25 headlines generated
- [ ] Each headline connects to strategic brief
- [ ] At least one headline uses anchor fact directly
- [ ] Headlines tested against "self-interest" filter
- [ ] Specificity check (vague headlines rejected)
- [ ] Top 5 candidates selected for testing/review

### Output Artifact: Creative Options Document

```
CREATIVE OPTIONS DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brief Reference: [link to strategic brief]
Date: [date]

TOP 5 HEADLINE CANDIDATES:
1. "[Headline]" — Rationale: [x]
2. "[Headline]" — Rationale: [x]
3. "[Headline]" — Rationale: [x]
4. "[Headline]" — Rationale: [x]
5. "[Headline]" — Rationale: [x]

RECOMMENDED LEAD CONCEPT:
[Opening paragraph/hook]

BIG IDEA TEST SCORE:
Gasp: [Y/N] | Wish I'd thought of it: [Y/N] | Unique: [Y/N]
Fits strategy: [Y/N] | 30-year durability: [Y/N]
TOTAL: [X/5]

PROOF SEQUENCE (for copy):
1. [Anchor fact]
2. [Supporting proof]
3. [Supporting proof]
4. [Supporting proof]

TESTING RECOMMENDATION:
[What to A/B test first and why]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 6: VALIDATION & ACCOUNTABILITY
### *"We sell, or else"*

**Objective:** Ensure research translates to results; maintain feedback loop.

> **"Direct response was my first love and later it became my secret weapon."**
> — David Ogilvy

> **"You people who know direct response have it in your power to rescue the advertising business from its manifold lunacies."**
> — David Ogilvy

### Step 6.1 — Skin in the Game Gates

**GATE 1 — SOURCE**
> "Where does this information come from?"
- [ ] Each critical insight has traceable source (URL, document, quote)
- [ ] Insights without source: DISCARD or FIND source

**GATE 2 — VERIFICATION**
> "Can I verify this independently?"
- [ ] Critical insights cross-checked with 2+ sources
- [ ] Unverified insights marked as such

**GATE 3 — REPRESENTATIVENESS**
> "Does this represent the whole or is it cherry-picking?"
- [ ] Quantitative analysis exists (not just isolated examples)
- [ ] Sample is sufficient (not cherry-picking)

**GATE 4 — HUMAN**
> "Has an expert validated this?"
- [ ] Critical claims reviewed by human specialist
- [ ] If not: DO NOT use in final copy

### Step 6.2 — Red Flags (Stop if any marked)

- [ ] ❌ Insight seems too good to be true
- [ ] ❌ No traceable source
- [ ] ❌ AI "discovered" something nobody else has seen
- [ ] ❌ Numerical data without clear origin
- [ ] ❌ Generalizations without quantitative data
- [ ] ❌ Contradicts what the client said
- [ ] ❌ Cannot be verified independently

**If ANY red flag marked:** STOP and investigate before proceeding.

### Step 6.3 — Pre-Launch Verification

- [ ] All claims verified against original sources
- [ ] Legal/compliance review completed (if required)
- [ ] Anchor fact passes "prove it to a skeptic" test
- [ ] No hallucinated statistics or quotes
- [ ] Competitive claims are defensible
- [ ] Tracking and measurement configured
- [ ] Success metrics defined with baseline
- [ ] Human accountability assigned

### Output Artifact: Validated Insights Document

```
VALIDATED INSIGHTS DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| Insight | Type | Source | Gate 1 | Gate 2 | Gate 3 | Gate 4 | Status |
|---------|------|--------|--------|--------|--------|--------|--------|
| [insight] | PRIMARY | [source] | ✅ | ✅ | ✅ | ✅ | ✅ Approved |
| [insight] | SECONDARY | [source] | ✅ | ✅ | ✅ | ❌ | ⚠️ Review |
| [insight] | INFERENCE | [analysis] | ❌ | - | - | - | ❌ Discarded |

RED FLAGS STATUS: [All clear / X identified and resolved]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## PHASE 7: TESTING & MEASUREMENT (Layer 5 - Part 2)
### *"Never stop testing"*

**Objective:** Connect research recommendations to business outcomes.

> **"The most important word in the vocabulary of advertising is TEST. If you pretest your product with consumers, and pretest your advertising, you will do well in the marketplace."**
> — David Ogilvy

### Step 7.1 — Metric Hierarchy (Ogilvy-Aligned)

| Priority | Metric | Tier | What it measures |
|----------|--------|------|------------------|
| 1 | Revenue/Sales | GOLD | Did it sell? |
| 2 | Conversions/Signups | GOLD | Did they act? |
| 3 | Cost per acquisition | GOLD | Was it efficient? |
| 4 | Engagement metrics | SILVER | Did they interact? |
| 5 | Awareness/Recall | BRONZE | Did they remember? |

### Step 7.2 — Test Plan

```yaml
test_1:
  variable: "[headline A]" vs "[headline B]"
  hypothesis: "[why A might beat B]"
  primary_metric: "[conversions]"
  duration: "[X days or Y conversions]"
  tie_breaker: "[secondary criterion]"
```

### Step 7.3 — Research Retrospective

After campaign performance data is available:

- [ ] Did winning creative align with research recommendations?
- [ ] Were any research predictions wrong? Why?
- [ ] Which proof points performed best in copy?
- [ ] Which consumer language resonated most?
- [ ] What research should be repeated/updated?
- [ ] What would Ogilvy change if reviewing this?

### Output Artifact: Research Accuracy Scorecard

```
RESEARCH ACCURACY SCORECARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Campaign: [name]
Research Date: [date] | Launch Date: [date]
Review Date: [date]

PREDICTIONS VS. OUTCOMES:
| Prediction | Confidence | Outcome | Accurate? |
|------------|------------|---------|-----------|
| [x]        | [H/M/L]    | [x]     | [Y/N]     |

RESEARCH ACCURACY RATE: [X]%

LESSONS LEARNED:
• [What to repeat]
• [What to improve]
• [What to stop doing]

UPDATED EVIDENCE HIERARCHY:
[Any adjustments to confidence levels based on outcomes]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## FINAL DELIVERABLES

Upon completing CopySearch, you will have:

### 1. Research Charter
- [ ] Decision to inform defined
- [ ] Success criteria established
- [ ] Human accountability assigned

### 2. Technical Fact Sheet
- [ ] 13+ verified facts
- [ ] 3 anchor fact candidates
- [ ] 1 anchor fact selected

### 3. Consumer Language Bank
- [ ] 50+ literal quotes
- [ ] Pain/desire/objection/comparison/emotional language
- [ ] Top 20 words with frequency
- [ ] 5+ JTBDs

### 4. Competitive Intelligence Matrix
- [ ] 3+ competitors analyzed (direct/indirect/substitute)
- [ ] Saturated claims identified
- [ ] Gaps identified
- [ ] Winners analyzed

### 5. Strategic Brief
- [ ] Positioning statement
- [ ] Central promise with reason-why
- [ ] Anti-target defined
- [ ] Success metrics
- [ ] Competitive frame

### 6. Creative Options Document
- [ ] 25+ headlines (8 types)
- [ ] Top 5 selected for testing
- [ ] Copy structure with objection handling, offer, risk reversal

### 7. Validated Insights Document
- [ ] Complete source audit
- [ ] Red flags resolved
- [ ] All 4 validation gates passed

### 8. Test Plan & Scorecard
- [ ] Variables defined
- [ ] Metrics established
- [ ] Hypotheses documented

---

## REFERENCED MATERIALS

- `checklists/copysearch-checklist.md` — Validation checklist
- `templates/copysearch-template.md` — Output template
- `reference/copysearch-anti-hallucination.md` — Anti-hallucination protocols
- `reference/copysearch-quick-reference.md` — Quick reference cards
- `reference/copysearch-tool-stack.md` — Tool recommendations

---

## OGILVY'S FINAL WORD

> **"Advertising people who ignore research are as dangerous as generals who ignore decodes of enemy signals."**
> — David Ogilvy

> **"The consumer isn't a moron. She is your wife. You insult her intelligence if you assume that a mere slogan and a few vapid adjectives will persuade her to buy anything."**
> — David Ogilvy

> **"Research methodology is fundamentally about epistemic discipline, not tools."**
> — The Ogilvy tradition

---

*Task based on: docs/research/david-ogilvy-research-engineering-meta-framework.md*
*Methodology reconstructed from primary evidence (1935-1985)*


---

## Referência: references/diagnose-awareness-level.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Diagnose Awareness Level - Schwartz Method

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Diagnose Awareness Level |
| **status** | `active` |
| **responsible_executor** | @eugene-schwartz, @copy-chief |
| **execution_type** | `Hybrid` |
| **pattern** | EXEC-HY-001 |
| **rationale** | Diagnóstico errado direciona TODA a copy incorretamente. AI analisa, humano valida antes de prosseguir. |

### Hybrid Execution Flow

```yaml
hybrid_flow:
  ai_phase:
    action: "Analisar inputs e propor nível de awareness"
    output: "Diagnóstico preliminar com evidências"
    confidence_threshold: 0.8

  human_phase:
    action: "Validar diagnóstico antes de prosseguir"
    checkpoint: "AWARENESS_VALIDATION"
    questions:
      - "O nível diagnosticado faz sentido dado seu conhecimento do mercado?"
      - "Há nuances que o AI pode ter perdido?"
      - "Confirma este nível para direcionar a copy?"

  fallback:
    trigger: "Humano discorda do diagnóstico"
    action: "Refazer análise com input adicional do humano"
```

### ⚠️ Por que Hybrid?

```
IMPACTO DE ERRO: ALTO

Se diagnosticar Level 2 quando é Level 4:
→ Copy vai educar quem já conhece o produto
→ Prospect pensa "eu já sei disso"
→ Bounce rate alto, conversão baixa

Se diagnosticar Level 4 quando é Level 2:
→ Copy vai direto para venda
→ Prospect pensa "do que estão falando?"
→ Confusão, zero conversão

CONCLUSÃO: Validação humana obrigatória antes de criar copy
```

---

## Purpose

Diagnose the prospect's level of awareness using Eugene Schwartz's 5 Levels framework from "Breakthrough Advertising" (1966). This is the MANDATORY FIRST STEP before writing ANY copy.

## When to Use

- **ALWAYS FIRST** - Before writing any copy for any project
- Before choosing headline strategy
- Before determining copy length
- Before selecting proof types
- When copy isn't converting (might be awareness mismatch)
- When entering new markets
- When repositioning existing products

## Schwartz on Awareness

```
"The copywriter's first job is not to create desire—
but to channel and direct desires that already exist.

Your prospect already has desires.
Your job is to connect your product to those desires.

The LEVEL at which you connect depends entirely
on how AWARE they are of:
1. Their problem
2. Your solution
3. Your product specifically"

— Eugene Schwartz, Breakthrough Advertising (1966)
```

## The 5 Levels of Awareness

```
AWARENESS SPECTRUM:

LEVEL 5: MOST AWARE ─────────────────────────────────┐
"Ready to buy YOUR product"                          │
- Know you, know product, just need deal             │
                                                     │
LEVEL 4: PRODUCT-AWARE ──────────────────────────────│
"Know your product, not convinced yet"               │
- Know what you sell, need more proof                │
                                                     │
LEVEL 3: SOLUTION-AWARE ─────────────────────────────│
"Know solutions exist, not yours specifically"       │
- Know problem can be solved, comparing options      │
                                                     │
LEVEL 2: PROBLEM-AWARE ──────────────────────────────│
"Know they have problem, don't know solutions"       │
- Feel the pain, don't know fixes exist              │
                                                     │
LEVEL 1: UNAWARE ────────────────────────────────────┘
"Don't know they have a problem"
- No conscious awareness of need
```

## Inputs

```yaml
required:
  - product_name: What you're selling
  - target_market: Who you're selling to
  - market_context: Industry/niche details

optional:
  - competitor_landscape: Who else serves this market
  - current_marketing: What you're currently saying
  - customer_feedback: What customers say about you
  - search_data: What terms people search
  - sales_call_notes: What prospects ask/say
```

## Workflow

### Step 1: Gather Diagnostic Data

```
DIAGNOSTIC QUESTIONS:

1. SEARCH BEHAVIOR
□ What do prospects search for?
   - Problem terms (Level 1-2)
   - Solution terms (Level 3)
   - Product/brand terms (Level 4-5)

2. COMPETITOR AWARENESS
□ Do prospects compare products?
   - Yes → Level 3-4
   - No, don't know options → Level 2
   - No, don't know they need → Level 1

3. SALES CONVERSATION
□ When prospects contact you, they:
   - Ask for price/availability → Level 4-5
   - Ask "do you do X?" → Level 3
   - Describe problem, ask if you can help → Level 2
   - Don't contact you (you cold approach) → Level 1

4. AWARENESS SIGNALS
□ Check these indicators:
   - Media coverage of problem → Level 2+ likely
   - Established competitors → Level 3+ likely
   - Brand recognition → Level 4-5 likely
   - Industry is new/emerging → Level 1-2 likely
```

### Step 2: Diagnose Each Level

```
═══════════════════════════════════════════════════════════════════
LEVEL 1: COMPLETELY UNAWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect doesn't know they have a problem that needs solving.
They're not looking for anything. Life seems fine to them.

DIAGNOSTIC QUESTIONS:
□ Is this a NEW category that didn't exist before?
□ Do prospects need to be EDUCATED about the problem?
□ Would they say "I didn't know that was an issue"?
□ Is there no search volume for problem terms?

EXAMPLES:
- Selling cybersecurity to a company that thinks they're safe
- Selling estate planning to someone who hasn't thought about death
- Selling productivity software to someone who doesn't realize
  they're inefficient

IF YES → LEVEL 1 CONFIRMED
Copy Strategy: Long-form education, story-based, identify with
their current situation, gradually reveal the hidden problem.

═══════════════════════════════════════════════════════════════════
LEVEL 2: PROBLEM-AWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect knows they have a problem. They feel the pain.
But they don't know solutions exist—or believe solutions are
available/affordable/accessible to them.

DIAGNOSTIC QUESTIONS:
□ Do they talk about/complain about the problem?
□ Have they accepted it as "just how things are"?
□ Do they search for information about the problem (not solutions)?
□ Have they given up looking for answers?

EXAMPLES:
- Parent who's frustrated with child's grades but doesn't know
  tutoring services exist
- Business owner who hates bookkeeping but doesn't know about
  automated accounting software
- Someone with chronic back pain who thinks "it's just age"

IF YES → LEVEL 2 CONFIRMED
Copy Strategy: Acknowledge and agitate the problem. Show that
solutions exist. Introduce the concept of fixing this.

═══════════════════════════════════════════════════════════════════
LEVEL 3: SOLUTION-AWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect knows solutions exist. They're aware of the category.
They may have tried competitors. But they don't know YOUR
specific product or why it's different.

DIAGNOSTIC QUESTIONS:
□ Do they search for generic solution terms?
□ Have they tried other products in category?
□ Do they compare features/prices?
□ Do they read reviews of category products?

EXAMPLES:
- Someone shopping for "best project management software" (not
  searching for "Asana" or "Monday.com" specifically)
- Someone looking for "weight loss programs" (not a specific brand)
- Someone researching "CRM systems" (comparing options)

IF YES → LEVEL 3 CONFIRMED
Copy Strategy: Differentiate. Show why YOUR solution is better.
Introduce unique mechanism. Compare favorably to alternatives.

═══════════════════════════════════════════════════════════════════
LEVEL 4: PRODUCT-AWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect knows YOUR product. They've heard of you, maybe visited
your site, maybe signed up for something. But they haven't bought.
They're not yet convinced YOU are the right choice.

DIAGNOSTIC QUESTIONS:
□ Have they visited your site before?
□ Have they signed up for email/lead magnet?
□ Do they follow you on social media?
□ Have they engaged with your content?
□ Do they search for your brand name?

EXAMPLES:
- Email subscriber who hasn't bought
- Webinar attendee who didn't convert
- Someone who bookmarked your sales page
- Past customer considering a new purchase

IF YES → LEVEL 4 CONFIRMED
Copy Strategy: Remove objections. Pile on proof. Strengthen
guarantee. Add urgency. Make it easy to say yes.

═══════════════════════════════════════════════════════════════════
LEVEL 5: MOST AWARE
═══════════════════════════════════════════════════════════════════

DEFINITION:
Prospect knows you, trusts you, wants what you sell, and is
READY to buy. They just need the right offer, deal, or trigger.

DIAGNOSTIC QUESTIONS:
□ Have they bought from you before?
□ Have they requested pricing/availability?
□ Are they on waitlist or waiting for launch?
□ Have they told others they plan to buy?

EXAMPLES:
- Past customer ready for repeat purchase
- Someone who said "let me know when you launch"
- Hot lead who asked for proposal
- Trial user ready to convert to paid

IF YES → LEVEL 5 CONFIRMED
Copy Strategy: Make the offer. Lead with deal. Be direct.
Don't educate—just present the transaction.
```

### Step 3: Document Diagnosis

```
AWARENESS LEVEL DIAGNOSIS

Product: ____________________
Market: ____________________
Date: ____________________

LEVEL DETERMINATION:
□ Level 1: Unaware
□ Level 2: Problem-Aware
□ Level 3: Solution-Aware
□ Level 4: Product-Aware
□ Level 5: Most Aware

PRIMARY LEVEL: ___
(Most prospects fall here)

EVIDENCE:
1. ____________________
2. ____________________
3. ____________________
```

### Step 4: Copy Implications

```
COPY STRATEGY BY LEVEL:

┌─────────┬────────────────────┬─────────────┬─────────────────────┐
│ LEVEL   │ HEADLINE APPROACH  │ COPY LENGTH │ PROOF FOCUS         │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 1       │ Story/Curiosity    │ Very Long   │ Education first     │
│         │ "A strange thing   │ (5000+ wds) │ Establish problem   │
│         │ happened..."       │             │ existence           │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 2       │ Problem agitation  │ Long        │ Solution is         │
│         │ "If you suffer     │ (2000-5000) │ possible            │
│         │ from..."           │             │ Others succeeded    │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 3       │ Mechanism/Big Idea │ Medium-Long │ Why THIS solution   │
│         │ "The new way to    │ (1500-3000) │ Unique mechanism    │
│         │ [achieve X]..."    │             │ Comparison          │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 4       │ Offer/Proof        │ Medium      │ Why buy NOW         │
│         │ "Get [product]     │ (1000-2000) │ Risk reversal       │
│         │ with [bonus]..."   │             │ Testimonials        │
├─────────┼────────────────────┼─────────────┼─────────────────────┤
│ 5       │ Deal/Direct        │ Short       │ Just the offer      │
│         │ "[Product] now     │ (500-1000)  │ Price, deal, CTA    │
│         │ 50% off..."        │             │                     │
└─────────┴────────────────────┴─────────────┴─────────────────────┘
```

### Step 5: Headline Templates by Level

```
LEVEL 1 (UNAWARE) HEADLINES:
- Story-based: "A Strange Thing Happened When..."
- Curiosity: "The Hidden Reason Why [common thing] Is..."
- Identification: "If You're [describe person], Read This..."
- Pattern interrupt: "What [authority] Discovered About..."

LEVEL 2 (PROBLEM-AWARE) HEADLINES:
- Problem naming: "Are You Tired of [problem]?"
- Agitation: "The [problem] That's Costing You [consequence]..."
- Empathy: "If [problem] Is Ruining Your [area of life]..."
- Solution teaser: "There's Finally a Way to End [problem]..."

LEVEL 3 (SOLUTION-AWARE) HEADLINES:
- Mechanism: "The [unique mechanism] That [achieves result]..."
- Comparison: "Why [your approach] Beats [common approach]..."
- New discovery: "The New Science of [achieving X]..."
- Specific result: "How [method] Delivers [specific result]..."

LEVEL 4 (PRODUCT-AWARE) HEADLINES:
- Proof: "[Number] People Have Already [achieved result]..."
- Objection: "Finally, [product] Without [common objection]..."
- Risk reversal: "Try [product] Risk-Free for [time]..."
- Urgency: "[Product] Available Now With [bonus/deal]..."

LEVEL 5 (MOST AWARE) HEADLINES:
- Direct offer: "[Product] - Now [price/deal]"
- Reminder: "Your [product] Is Waiting..."
- Deadline: "Last Chance: [Product] [Offer] Ends [date]..."
- Action: "Get [Product] Now - [simple CTA]..."
```

## Outputs

### Output Format

```yaml
diagnosis:
  product: [Product name]
  market: [Target market]
  awareness_level: [1-5]
  level_name: [Unaware | Problem-Aware | Solution-Aware | Product-Aware | Most Aware]
  confidence: [HIGH | MEDIUM | LOW]

evidence:
  - [Evidence point 1]
  - [Evidence point 2]
  - [Evidence point 3]

copy_implications:
  headline_approach: [Recommended approach]
  copy_length: [Recommended length]
  proof_focus: [What to prove]
  opening_strategy: [How to start copy]

headline_templates:
  - "[Template 1]"
  - "[Template 2]"
  - "[Template 3]"

next_step: |
  [Specific recommendation for this level]

sophistication_check: |
  After awareness level is set, also run diagnose-market-sophistication.md
  to determine HOW to position within this awareness level.
```

## Common Mistakes

```
MISTAKE 1: Assuming Level 3+ When Market is Level 1-2
- Symptom: Copy talks about product when they don't know they need it
- Fix: Back up. Educate about the problem first.

MISTAKE 2: Writing Level 5 Copy for Level 3 Market
- Symptom: "Buy now!" to people who don't know your product
- Fix: Build awareness first. Differentiate. Then sell.

MISTAKE 3: Over-educating Level 4-5 Prospects
- Symptom: Long education copy to people ready to buy
- Fix: Get to the offer faster. They already believe.

MISTAKE 4: Ignoring Mixed Audiences
- Solution: Create multiple entry points/funnels for different levels
- Or: Start at lowest level and graduate them through copy
```

## Integration

- **Next Step**: diagnose-market-sophistication.md
- **Uses**: schwartz-diagnosis-checklist.md
- **Informs**: All copy creation tasks
- **Agent**: @eugene-schwartz (Tier 0 - Diagnosis)


---

## Referência: references/diagnose-market-sophistication.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Diagnose Market Sophistication - Schwartz Method

## Purpose

Diagnose the market's sophistication stage using Eugene Schwartz's 5 Stages framework from "Breakthrough Advertising" (1966). This determines HOW to position your message within the prospect's awareness level.

## When to Use

- **After awareness level diagnosis** - This is the second diagnostic step
- When entering established markets with competitors
- When copy isn't standing out despite good awareness match
- When competitors are using similar claims
- When market feels "tired" of typical messaging
- When relaunching/repositioning products

## Schwartz on Sophistication

```
"Markets evolve. The first person to make a claim owns it.
The second person to make that claim must enlarge it.
The third must bring proof.
The fourth must develop a new mechanism.
The fifth must identify with the prospect completely.

Know where your market stands on this spectrum
before you write a word."

— Eugene Schwartz, Breakthrough Advertising (1966)
```

## The 5 Stages of Sophistication

```
SOPHISTICATION EVOLUTION:

STAGE 5: COMPLETELY SKEPTICAL ──────────────────────┐
"They've heard it all, believe none of it"          │
- Cynical about claims                              │
- Need identity/emotional connection                │
                                                    │
STAGE 4: TIRED OF MECHANISMS ───────────────────────│
"Unique mechanisms no longer unique"                │
- Market flooded with "proprietary systems"         │
- Need to identify with prospect deeply             │
                                                    │
STAGE 3: MECHANISM REQUIRED ────────────────────────│
"Claims need explanation of HOW"                    │
- Generic claims no longer work                     │
- Need unique mechanism/process                     │
                                                    │
STAGE 2: CLAIMS ENLARGEMENT ────────────────────────│
"First claim has been made, must top it"            │
- "Lose weight" → "Lose weight FAST"                │
- Competition on claim size                         │
                                                    │
STAGE 1: VIRGIN MARKET ─────────────────────────────┘
"No one has made this promise before"
- Simple, direct claim works
- First mover advantage
```

## Inputs

```yaml
required:
  - product_name: What you're selling
  - target_market: Who you're selling to
  - main_claim: Your primary benefit/promise
  - awareness_level: From diagnose-awareness-level.md

optional:
  - competitor_claims: What competitors are saying
  - market_age: How long has this market existed
  - failed_approaches: What hasn't worked
  - winning_controls: Successful copy in this market
```

## Workflow

### Step 1: Assess Competitive Landscape

```
COMPETITIVE CLAIM AUDIT:

1. LIST MAJOR COMPETITORS (5-10):
   Competitor 1: _____________ Claim: _____________
   Competitor 2: _____________ Claim: _____________
   Competitor 3: _____________ Claim: _____________
   Competitor 4: _____________ Claim: _____________
   Competitor 5: _____________ Claim: _____________

2. COMMON CLAIMS IN MARKET:
   □ What claims appear repeatedly?
   □ What phrases/words are overused?
   □ What mechanisms are everyone claiming?

3. MARKET HISTORY:
   □ How old is this market/category?
   □ What claims were made first?
   □ How have claims evolved over time?
```

### Step 2: Diagnose Each Stage

```
═══════════════════════════════════════════════════════════════════
STAGE 1: VIRGIN MARKET
═══════════════════════════════════════════════════════════════════

DEFINITION:
Your product is the first to make this type of promise.
No one has claimed this benefit before in this market.
You can be simple and direct.

DIAGNOSTIC QUESTIONS:
□ Is this a new category/solution?
□ Has NO ONE made this specific promise before?
□ Can you state the benefit simply and be believed?
□ Is there little/no direct competition?

EXAMPLES:
- First electric car company (just say "electric, no gas")
- First AI writing tool (just say "AI writes for you")
- First meal kit delivery (just say "meals delivered ready to cook")

IF YES → STAGE 1 CONFIRMED

COPY STRATEGY:
Simply state the claim. Be direct. Don't overcomplicate.
"Lose 10 pounds" - when NO ONE else offers weight loss.

═══════════════════════════════════════════════════════════════════
STAGE 2: CLAIMS ENLARGEMENT
═══════════════════════════════════════════════════════════════════

DEFINITION:
Someone has made your claim before. Now you must ENLARGE it.
Make it faster, bigger, easier, more certain.

DIAGNOSTIC QUESTIONS:
□ Are there 1-3 direct competitors making similar claims?
□ Are prospects comparing based on "who promises more"?
□ Is the market still growing/discovering solutions?
□ Do bigger/faster/easier claims still work?

EXAMPLES:
- "Lose 10 pounds" has been claimed...
  → Now claim: "Lose 10 pounds in 30 days"
  → Then: "Lose 10 pounds in 2 weeks"
  → Then: "Lose 10 pounds in 10 days - guaranteed"

IF YES → STAGE 2 CONFIRMED

COPY STRATEGY:
Enlarge the claim. Add speed, ease, certainty.
Outpromise (credibly) the competition.

═══════════════════════════════════════════════════════════════════
STAGE 3: MECHANISM REQUIRED
═══════════════════════════════════════════════════════════════════

DEFINITION:
Claims have been enlarged so many times, nobody believes
"just claims" anymore. You need to explain HOW it works.
You need a unique MECHANISM.

DIAGNOSTIC QUESTIONS:
□ Are there many competitors making enlarged claims?
□ Has the market become skeptical of "just promises"?
□ Do prospects ask "but HOW does it work?"
□ Do winners in this market have "proprietary methods"?

EXAMPLES:
- "Lose 10 pounds fast" no longer works...
  → Need mechanism: "The Keto Metabolic Switch"
  → Or: "The 16:8 Intermittent Fasting Protocol"
  → Or: "The Hormone Reset Method"

IF YES → STAGE 3 CONFIRMED

COPY STRATEGY:
Introduce a UNIQUE MECHANISM. Name it. Explain the science.
Make the HOW more important than the WHAT.

═══════════════════════════════════════════════════════════════════
STAGE 4: TIRED OF MECHANISMS
═══════════════════════════════════════════════════════════════════

DEFINITION:
Everyone has a "unique mechanism" now. The market is flooded
with proprietary methods. New mechanisms don't stand out.
You must now IDENTIFY with the prospect personally.

DIAGNOSTIC QUESTIONS:
□ Does everyone have their own "system" or "method"?
□ Are mechanisms starting to sound the same?
□ Is the market becoming cynical about "new discoveries"?
□ Do prospects care more about WHO than HOW?

EXAMPLES:
- Every diet has a "system" now...
  → Need identification: "The busy mom's solution"
  → Or: "For men over 40 who hate gyms"
  → Or: "By someone who was exactly where you are"

IF YES → STAGE 4 CONFIRMED

COPY STRATEGY:
Identify deeply with the prospect. Make them feel understood.
Your mechanism matters less than showing you KNOW them.

═══════════════════════════════════════════════════════════════════
STAGE 5: COMPLETELY SKEPTICAL
═══════════════════════════════════════════════════════════════════

DEFINITION:
Market has seen EVERYTHING. Claims, enlarged claims, mechanisms,
identification - all have been tried. They're cynical about
everything. You must connect emotionally/identity-based.

DIAGNOSTIC QUESTIONS:
□ Has this market been saturated for years/decades?
□ Do prospects roll their eyes at all marketing?
□ Has every angle/approach been tried?
□ Is the only path through authentic relationship?

EXAMPLES:
- Weight loss market is FULLY Stage 5...
  → Need: Emotional/identity-based connection
  → "This isn't about weight. It's about the life you deserve."
  → Celebrity/influencer endorsements that feel authentic
  → Community-based approaches

IF YES → STAGE 5 CONFIRMED

COPY STRATEGY:
Lead with emotion, identity, and relationship.
Claims become secondary to WHO you are and HOW you connect.
```

### Step 3: Document Diagnosis

```
SOPHISTICATION DIAGNOSIS

Product: ____________________
Market: ____________________
Date: ____________________
Awareness Level: ____ (from previous diagnosis)

SOPHISTICATION STAGE:
□ Stage 1: Virgin Market
□ Stage 2: Claims Enlargement
□ Stage 3: Mechanism Required
□ Stage 4: Tired of Mechanisms
□ Stage 5: Completely Skeptical

CONFIRMED STAGE: ___

EVIDENCE:
1. ____________________
2. ____________________
3. ____________________
```

### Step 4: Copy Implications

```
COPY STRATEGY BY STAGE:

┌─────────┬────────────────────┬────────────────────────────────────┐
│ STAGE   │ HEADLINE FOCUS     │ BODY COPY FOCUS                    │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 1       │ Direct claim       │ Simple promise + basic proof       │
│         │ "Get [benefit]"    │ Don't overcomplicate               │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 2       │ Enlarged claim     │ Bigger/faster/easier promise       │
│         │ "Get [benefit]     │ Outpromise credibly                │
│         │ FAST/EASY/NOW"     │                                    │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 3       │ Mechanism name     │ Explain the unique HOW             │
│         │ "The [mechanism]   │ Science, process, method           │
│         │ that [benefit]"    │ Make mechanism the hero            │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 4       │ Identification     │ Show you understand THEM           │
│         │ "For [specific     │ Their specific situation           │
│         │ audience] who..."  │ Their unique challenges            │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 5       │ Identity/Emotion   │ Lead with feeling/belonging        │
│         │ "This is about     │ Community, transformation,         │
│         │ more than [X]..."  │ relationship, authenticity         │
└─────────┴────────────────────┴────────────────────────────────────┘
```

### Step 5: Headline Templates by Stage

```
STAGE 1 (VIRGIN) HEADLINES:
- Direct: "[Get benefit] with [product]"
- Simple: "Now you can [achieve result]"
- Announcement: "Introducing: [benefit] for [audience]"

STAGE 2 (ENLARGEMENT) HEADLINES:
- Speed: "[Benefit] in [faster time]"
- Ease: "[Benefit] without [hard thing]"
- Certainty: "[Guaranteed benefit] or [risk reversal]"
- Amount: "[More benefit] than [competitor/alternative]"

STAGE 3 (MECHANISM) HEADLINES:
- Named mechanism: "The [Mechanism Name] that [benefit]"
- Discovery: "New [scientific term] [achieves benefit]"
- Process: "The [number]-step [method] that [benefit]"
- Science: "Harvard/MIT/Doctor discovers [mechanism]"

STAGE 4 (IDENTIFICATION) HEADLINES:
- Audience specific: "For [specific person] who [specific situation]"
- Empathy: "If you've tried everything and nothing works..."
- Understanding: "Finally, someone who gets [your situation]"
- Story: "I was exactly where you are when..."

STAGE 5 (EMOTION/IDENTITY) HEADLINES:
- Transformation: "This isn't about [surface thing]..."
- Belonging: "Join [number] people who [identity]"
- Values: "For those who believe [value/identity]"
- Movement: "The [movement name] changing [industry]"
```

### Step 6: Combined Matrix

```
AWARENESS × SOPHISTICATION MATRIX:

                    SOPHISTICATION STAGE
                    1       2       3       4       5
AWARENESS   1   │Story  │Story  │Story  │Story  │Story
LEVEL           │Direct │Enlarged│Mech   │ID     │Emotion
                │Claim  │Claim  │       │       │
            ────┼───────┼───────┼───────┼───────┼───────
            2   │Problem│Problem│Problem│Problem│Problem
                │Direct │Enlarged│+ Mech │+ ID   │+ Emotion
                │Claim  │Claim  │       │       │
            ────┼───────┼───────┼───────┼───────┼───────
            3   │Direct │Compare│Mech   │ID +   │Identity
                │Claim  │Claims │Hero   │Mech   │First
            ────┼───────┼───────┼───────┼───────┼───────
            4   │Offer  │Better │Mech   │ID +   │Emotion
                │Direct │Offer  │Proof  │Proof  │Proof
            ────┼───────┼───────┼───────┼───────┼───────
            5   │Deal   │Better │Mech   │ID     │Belong
                │       │Deal   │Deal   │Deal   │Join

USE: Find intersection of your Awareness Level (row) and
Sophistication Stage (column) for optimal approach.
```

## Outputs

### Output Format

```yaml
diagnosis:
  product: [Product name]
  market: [Target market]
  awareness_level: [1-5]
  sophistication_stage: [1-5]
  stage_name: [Virgin | Enlargement | Mechanism | Identification | Skeptical]

evidence:
  - [Evidence point 1]
  - [Evidence point 2]
  - [Evidence point 3]

competitive_landscape:
  competitors_analyzed: [Number]
  common_claims: [List]
  market_age: [New | Emerging | Established | Saturated]

copy_strategy:
  headline_approach: [Based on stage]
  body_focus: [Based on stage]
  proof_type: [What proof works at this stage]
  differentiation: [How to stand out]

headline_templates:
  - "[Template 1]"
  - "[Template 2]"
  - "[Template 3]"

combined_recommendation: |
  Awareness Level [X] + Sophistication Stage [Y]:
  [Specific approach recommendation]

mechanism_required: [YES/NO]
mechanism_suggestion: [If YES, suggested mechanism direction]
```

## Common Mistakes

```
MISTAKE 1: Stage 1 Copy in Stage 3+ Market
- Symptom: "Get [benefit]" - simple claim ignored
- Fix: Add mechanism to differentiate

MISTAKE 2: Stage 3 Mechanism in Stage 5 Market
- Symptom: New mechanism gets eye rolls
- Fix: Lead with identity/emotion, mechanism secondary

MISTAKE 3: Inventing Mechanism When Not Needed
- Symptom: Overcomplicating in Stage 1-2 market
- Fix: Sometimes simple is best. Trust the stage.

MISTAKE 4: Ignoring Awareness × Sophistication
- Symptom: Right sophistication, wrong awareness
- Fix: Always combine both diagnoses
```

## Integration

- **Prerequisite**: diagnose-awareness-level.md (run first)
- **Uses**: schwartz-diagnosis-checklist.md
- **Informs**: All copy creation tasks
- **Agent**: @eugene-schwartz (Tier 0 - Diagnosis)


---

## Referência: references/identidade.json

{
  "schema_version": 1,
  "contract_version": "1.0.0",
  "skill_id": "copy-pesquisa-avatar",
  "distribution_version": "0.4.3",
  "content_revision": "1.0.0",
  "distribution_ref": "main"
}


---

## Referência: references/map-6-primary-motives.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.


---

## Referência: templates/avatar-research-template.md

# **Persona [NOME DO PRODUTO/AVATAR]**

# **Data: [DD/MM/AA]**

---

## Dados Gerais

### Demográficos

As pessoas que [compraram/entraram para] o [produto] têm as seguintes características:

* **Faixa etária:** X a Y anos (XX%)
* **Sexo:** [masculino/feminino] (XX%)
* **Estado civil:** [casado/solteiro] (XX%)
* **Profissão:** [área principal]
  - [x] Em sua maioria, usam os termos "[termo 1]", "[termo 2]" e "[termo 3]"
* **Segunda maior categoria:** [descrição]

### Informações Faltantes

* Onde eles moram?
* Qual o nível de escolaridade?
* Qual a faixa de renda?
* Eles têm filhos?
* [Adicione outras perguntas relevantes]

---

## Gosto Pessoal

### Pelo que se interessam

Pelo que eles têm curiosidade? Pelo que são apaixonados?

| Citação Literal |
| :---- |
| "Porque sou fascinado por [tema], [contexto]." |
| "Eu sempre quis [desejo], [motivação]." |
| "[Mais citações...]" |
| "[Mais citações...]" |
| "[Mais citações...]" |

**Conclusões:**

* [Insight 1 - O que amam/estudam]
* [Insight 2 - Pelo que são fascinados]
* [Insight 3 - O que buscam]
* [Insight 4 - Com quem/o que se identificam]
* [Insight 5 - Termo que NÃO usam, mas descrevem]

### O que gostam de fazer no tempo livre?

De acordo com enquete/pesquisa:

| Atividade | % |
|-----------|---|
| [Atividade 1] | XX% |
| [Atividade 2] | XX% |
| [Atividade 3] | XX% |
| [Atividade 4] | XX% |

**Insight-chave:** Então não é apenas um interesse, **[atividade] é um estilo de vida para elas!**

---

## Opinião Pessoal

### Como eles se enxergam

O que eles falam sobre si mesmos? Como se enxergam? Quais são suas qualidades, defeitos, virtudes?

| Citação Literal |
| :---- |
| "Eu me considero bem **[característica]** e algumas vezes **[comportamento]**..." |
| "Sempre senti que poderia **[potencial]**, mas **[limitação]**." |
| "Para organizar o **turbilhão de [problema]**..." |
| "[Mais citações com **negrito** nos padrões...]" |
| "[Mais citações...]" |

**Conclusões:**

* Se consideram [característica 1]
* Perdem [algo] com facilidade
* Sentem que há um turbilhão de [problema]
* Se consideram pessoas [característica positiva] e com potencial
* Sentem que estão [percepção sobre si mesmos]

### No que eles acreditam?

Quais são suas crenças? O que são contra ou a favor? O que defendem ou repudiam?

| Citação Literal |
| :---- |
| "[Crença 1 expressa nas palavras do avatar]" |
| "[Crença 2 expressa nas palavras do avatar]" |
| "[Crença 3 expressa nas palavras do avatar]" |

**Crença 01:** "[Citação literal]"

**Aplicação em Copy:**
> "Você [reformulação da crença]. E você sabe disso, tanto que [exemplo do dia a dia] + [prova incontestável]. Por isso, [ponte para solução]..."

**Crença 02:** "[Citação literal]"

**Aplicação em Copy:**
> "[Reformulação como gancho de copy com CTA ou promessa]..."

---

## Pesquisa Tradicional

### Quais são suas dores e problemas?

Quais são as dores que eles admitem ter? Que falam abertamente?

| Citação Literal |
| :---- |
| "Eu me considero bem **[dor]** e por isso **[consequência]**..." |
| "Entrei, porque meu objetivo é **[objetivo]** e **sanar a dor de [problema]**..." |
| "[Mais citações...]" |

**Conclusões - Maiores dores:**

* [Dor 1] - [descrição breve]
* [Dor 2] - [descrição breve]
* [Dor 3] - [descrição breve]
* [Dor 4] - [descrição breve]
* [Dor 5] - [descrição breve]

**Nota específica:** Falando sobre [tema específico], eles deixam claro que [insight importante].

### Quais são suas dores "ocultas"?

O que é possível perceber nas entrelinhas? O que os perturba e incomoda mas não verbalizam diretamente?

| Citação Literal |
| :---- |
| "Precisava de uma forma de **[necessidade oculta]**..." |
| "Sempre senti que poderia **[potencial]**, mas **não consigo [limitação]**." |
| "[Mais citações com padrões ocultos...]" |

**Conclusões - Dores ocultas:**

* A grande "dor oculta" é [insight principal]
* Eles falam que precisam "[termo]" porque [razão real]
* Sentem que têm [problema] em função de [causa]
* A falta de [X] cria neles o senso de "[sentimento]"
* Querem [desejo profundo não-verbalizado]

### Com o que eles sonham?

O que esperam alcançar? Onde querem chegar? Qual é o futuro brilhante que pintam?

| Citação Literal |
| :---- |
| "Eu sempre quis [sonho], [contexto]..." |
| "Sempre senti que poderia [potencial]..." |
| "Minha meta final é [objetivo grandioso]..." |
| "[Mais citações...]" |

---

## Perguntas do Onboarding

### Por que você entrou para o [produto]?

| Motivo da entrada | Menções | Palavras mais comuns |
| :---: | :---: | :---: |
| [Motivo 1] | XX | palavra1, palavra2, palavra3 |
| [Motivo 2] | XX | palavra4, palavra5, palavra6 |
| [Motivo 3] | XX | palavra7, palavra8, palavra9 |
| [Motivo 4] | XX | palavra10, palavra11, palavra12 |

**Análise detalhada:**

▪️ Quando o principal motivo é **"[Motivo 1]"**, eles usam palavras como [termo1], [termo2] e [termo3] para se referir a [contexto].

**Intencionalidade:** Eles associam [conceito A] com [conceito B]. A lógica deles é "[lógica interna do avatar]."

▪️ Para o motivo **"[Motivo 2]"**, eles citam: [padrão de resposta].

**Intencionalidade:** [Análise do que está por trás]

▪️ [Continue para cada motivo relevante...]

### Para que você está usando o [produto]?

| Motivo de uso | Menções | Palavras mais comuns |
| :---: | :---: | :---: |
| [Uso 1] | XX | palavra1, palavra2 |
| [Uso 2] | XX | palavra3, palavra4 |
| [Uso 3] | XX | palavra5, palavra6 |

▪️ Em **"[Uso 1]"** eles falam sobre [padrão].

**Intencionalidade:** [Insight importante - ex: usam em nível raso, têm consciência que podem ir além]

### De que forma o [produto] pode te ajudar a alcançar seus objetivos?

| Objetivo de vida | Menções | Palavras mais comuns |
| :---: | :---: | :---: |
| [Objetivo 1] | XX | verbo1, verbo2 |
| [Objetivo 2] | XX | verbo3, verbo4 |
| [Objetivo 3] | XX | verbo5, verbo6 |

▪️ Os que têm objetivos orientados para **"[Objetivo 1]"**, usam os verbos [verbo1] e [verbo2].

**Intencionalidade:** [O que querem criar/desenvolver especificamente]

### Tem algo que gostaria de aprender com a gente?

| Desejo de aprender | Menções | Palavras mais comuns |
| :---: | :---: | :---: |
| [Tema 1] | XX | termo1, termo2 |
| [Tema 2] | XX | termo3, termo4 |
| [Tema 3] | XX | termo5, termo6 |

▪️ **"[Tema 1]"** é o maior interesse. Querem [descrição do desejo].

### Se eu pudesse realizar qualquer desejo seu, qual seria?

| Desejo | Menções | Palavras mais comuns |
| :---: | :---: | :---: |
| [Categoria 1] | XX | termo1, termo2 |
| [Categoria 2] | XX | termo3, termo4 |

**Intencionalidades importantes:**

1) [Insight sobre padrão de resposta]
2) [Correlação entre conceitos - ex: dinheiro + impacto]

### O que ainda te impede de ter esse desejo realizado?

| Impedimento | Menções | Palavras mais comuns |
| :---: | :---: | :---: |
| [Impedimento 1] | XX | falta, termo1 |
| [Impedimento 2] | XX | falta, termo2 |

**Padrão de resposta:** Falta de [Impedimento]

---

## Arquitetura da Linguagem

### Nuvem de Palavras

De toda a pesquisa, as palavras que mais aparecem:

| Palavra | Menções |
| :---: | :---: |
| [Palavra 1] | XXX |
| [Palavra 2] | XX |
| [Palavra 3] | XX |
| [Palavra 4] | XX |
| [Palavra 5] | XX |
| [Palavra 6] | XX |
| [Palavra 7] | XX |
| [Palavra 8] | XX |
| [Palavra 9] | XX |
| [Palavra 10] | XX |
| [Palavra 11] | XX |
| [Palavra 12] | XX |
| [Palavra 13] | XX |
| [Palavra 14] | XX |
| [Palavra 15] | XX |
| [Palavra 16] | XX |
| [Palavra 17] | XX |
| [Palavra 18] | XX |
| [Palavra 19] | XX |
| [Palavra 20] | XX |

### Radicais Presentes

| Radical | Palavras Derivadas | Menções |
| :---- | :---- | :---- |
| [Radical 1] | [derivada1], [derivada2] | XX, XX |
| [Radical 2] | [derivada1], [derivada2], [derivada3] | XX, XX, XX |
| [Radical 3] | [derivada1], [derivada2] | XX, XX |
| [Radical 4] | [derivada1], [derivada2], [derivada3] | XX, XX, XX |
| [Radical 5] | [derivada1], [derivada2] | XX, XX |

### Intencionalidade

Qual a intenção por trás das palavras que utilizam?

**[PALAVRA 1] (XXx)**

A palavra "[palavra]" se relaciona muito com as palavras "[termo1]" e "[termo2]".

**Variações mais usadas:**
* [Variação 1] (Xx)
* [Variação 2]
* [Variação 3]

**Padrão descoberto:** [Insight sobre uso]

**ELES NUNCA USAM [TERMO ALTERNATIVO]** → [Significado disso]

---

**[PALAVRA 2] (XXx)**

As palavras relevantes relacionadas a este radical são:
* "[termo 1]" (XXx)
* "[termo 2]" (XXx)

**Padrão:** Sempre usam "[junção de termos]" como expressão mais frequente.

---

## Outros

### Dificuldades quanto ao uso do [produto]

*Podem ser objeções de compra para novos clientes.*

| Citação Literal |
| :---- |
| "Eu ainda estou pensando em como vou **[extrair benefício]**..." |
| "Tenho medo que eu **[objeção/receio]**..." |

### Experiência anterior ao [produto]

O que já passaram antes de chegar?

| Citação Literal |
| :---- |
| "Já havia [tentativa anterior], porém **[motivo de insatisfação]**..." |
| "Vinha pesquisando desde [tempo] sobre [tema]..." |

### Curiosidades

* Conhecem a marca/produto há menos de [tempo] (XX%)
* Primeiro contato foi pelo [canal 1] (XX%) ou por [canal 2] (XX%)

---

## Resumo Executivo para Copy

### Top 5 Dores (para headlines)
1. [Dor principal]
2. [Dor secundária]
3. [Dor terciária]
4. [Dor quaternária]
5. [Dor quintenária]

### Top 5 Desejos (para promessas)
1. [Desejo principal]
2. [Desejo secundário]
3. [Desejo terciário]
4. [Desejo quaternário]
5. [Desejo quintenário]

### Top 10 Palavras Obrigatórias no Copy
1. [Palavra 1]
2. [Palavra 2]
3. [Palavra 3]
4. [Palavra 4]
5. [Palavra 5]
6. [Palavra 6]
7. [Palavra 7]
8. [Palavra 8]
9. [Palavra 9]
10. [Palavra 10]

### Crenças Prontas para Usar
1. **Crença:** "[texto]" → **Copy:** "[aplicação]"
2. **Crença:** "[texto]" → **Copy:** "[aplicação]"
3. **Crença:** "[texto]" → **Copy:** "[aplicação]"

### Frases Literais Poderosas
*Use exatamente como estão:*
1. "[Frase 1]"
2. "[Frase 2]"
3. "[Frase 3]"
4. "[Frase 4]"
5. "[Frase 5]"

---

*Pesquisa realizada por: [Nome]*
*Data: [DD/MM/AA]*
*Total de citações analisadas: [XX]*
*Fontes: [Lista de fontes]*


---

## Referência: templates/copysearch-template.md

# CopySearch Report: [PRODUCT/CAMPAIGN NAME]

**Date:** [YYYY-MM-DD]
**Researcher:** [Name]
**Methodology:** David Ogilvy Research Engineering Protocol
**Version:** 2.0

---

## EXECUTIVE SUMMARY

**Anchor Fact:**
> "[The single, specific, verifiable fact that will anchor the campaign]"

**Positioning:**
> "[PRODUCT] is [what it does] for [whom]."

**Central Promise:**
> "[The great verifiable promise]"

**Checklist Score:** ___/200 (___%)

---

## PART 0: RESEARCH CHARTER

```
RESEARCH CHARTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Decision to inform: [specific business decision]
Success criteria: [what evidence closes the question]
Gold-tier requirements: [claims needing behavioral/verified evidence]
Out of scope: [explicit exclusions]
Accountable human: [name]
Deadline: [date] | Depth level: [rapid/standard/deep]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Anti-Hallucination Setup

| Setting | Value |
|---------|-------|
| Confidence threshold | [70%] |
| Citation requirement | [Active/Inactive] |
| Cross-validation | [2+ sources required for: X, Y, Z] |
| "I don't know" authorized | [Yes/No] |

---

## PART 1: TECHNICAL FACT SHEET

### 1.1 Sources Consulted

| Source | Type | Access Date | Pages/Sections |
|--------|------|-------------|----------------|
| [doc 1] | Technical manual | [date] | [pages] |
| [doc 2] | Creator interview | [date] | N/A |
| [doc 3] | [type] | [date] | [pages] |

### 1.2 Verified Facts (Minimum 13)

| # | Specific Fact | Source | Location | Date | Confidence | Verification | Unique? |
|---|---------------|--------|----------|------|------------|--------------|---------|
| 1 | [fact with NUMBER] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 2 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 3 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 4 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 5 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 6 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 7 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 8 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 9 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 10 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 11 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 12 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |
| 13 | [specific fact] | [doc] | [pg] | [date] | HIGH/MED/LOW | [method] | ✅/❌ |

### 1.3 Anchor Fact Candidates

| # | Fact | Specific | Surprising | Differentiating | Verifiable | Relevant | TOTAL |
|---|------|----------|------------|-----------------|------------|----------|-------|
| 1 | [fact] | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | /5 |
| 2 | [fact] | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | /5 |
| 3 | [fact] | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ | /5 |

**SELECTED ANCHOR FACT:** #[number]

**Justification:**
> [Why this fact was selected. Connect to VOC, competitive gap, and memorability.]

### 1.4 Rejected Claims

| Claim | Reason for Rejection |
|-------|---------------------|
| [claim] | [insufficient evidence / unverifiable / not unique] |

---

## PART 2: CONSUMER LANGUAGE BANK

### 2.1 VOC Sources

| Source | Type | Qty Quotes | Collection Date |
|--------|------|------------|-----------------|
| [Reviews Amazon] | Review | XX | [date] |
| [Tickets Zendesk] | Support | XX | [date] |
| [Transcripts Gong] | Call | XX | [date] |
| **TOTAL** | - | **XX** | - |

### 2.2 Pain Language (by frequency)

| # | Exact Quote | Source | Frequency |
|---|-------------|--------|-----------|
| 1 | "[quote with **patterns** in bold]" | [source] | Xx |
| 2 | "[exact quote]" | [source] | Xx |
| 3 | "[exact quote]" | [source] | Xx |
| 4 | "[exact quote]" | [source] | Xx |
| 5 | "[exact quote]" | [source] | Xx |

### 2.3 Desire Language (by frequency)

| # | Exact Quote | Source | Frequency |
|---|-------------|--------|-----------|
| 1 | "[quote]" | [source] | Xx |
| 2 | "[quote]" | [source] | Xx |
| 3 | "[quote]" | [source] | Xx |
| 4 | "[quote]" | [source] | Xx |
| 5 | "[quote]" | [source] | Xx |

### 2.4 Objection Language (by frequency)

| # | Exact Quote | Source | Frequency |
|---|-------------|--------|-----------|
| 1 | "[quote]" | [source] | Xx |
| 2 | "[quote]" | [source] | Xx |
| 3 | "[quote]" | [source] | Xx |

### 2.5 Comparison Language

| # | Exact Quote | Source | Frequency |
|---|-------------|--------|-----------|
| 1 | "[how they compare alternatives]" | [source] | Xx |
| 2 | "[quote]" | [source] | Xx |

### 2.6 Emotional Language

| # | Exact Quote | Sentiment | Source | Frequency |
|---|-------------|-----------|--------|-----------|
| 1 | "[intense expression]" | +/- | [source] | Xx |
| 2 | "[quote]" | +/- | [source] | Xx |

### 2.7 Word Cloud (Top 20)

| Rank | Word | Mentions | Typical Context |
|------|------|----------|-----------------|
| 1 | [word] | XXX | "[how it's used]" |
| 2 | [word] | XX | "[how it's used]" |
| 3 | [word] | XX | "[how it's used]" |
| 4 | [word] | XX | "[how it's used]" |
| 5 | [word] | XX | "[how it's used]" |
| 6 | [word] | XX | "[how it's used]" |
| 7 | [word] | XX | "[how it's used]" |
| 8 | [word] | XX | "[how it's used]" |
| 9 | [word] | XX | "[how it's used]" |
| 10 | [word] | XX | "[how it's used]" |
| 11 | [word] | XX | "[how it's used]" |
| 12 | [word] | XX | "[how it's used]" |
| 13 | [word] | XX | "[how it's used]" |
| 14 | [word] | XX | "[how it's used]" |
| 15 | [word] | XX | "[how it's used]" |
| 16 | [word] | XX | "[how it's used]" |
| 17 | [word] | XX | "[how it's used]" |
| 18 | [word] | XX | "[how it's used]" |
| 19 | [word] | XX | "[how it's used]" |
| 20 | [word] | XX | "[how it's used]" |

### 2.8 Words They NEVER Use

| Expected Term | What They Use Instead | Insight |
|---------------|----------------------|---------|
| [technical term] | [popular term] | [implication for copy] |
| [term] | [term] | [implication] |

### 2.9 Jobs-to-be-Done

| # | JTBD | Freq | Keywords |
|---|------|------|----------|
| 1 | When [situation], I want [motivation], so that [outcome] | XX | [words] |
| 2 | When [situation], I want [motivation], so that [outcome] | XX | [words] |
| 3 | When [situation], I want [motivation], so that [outcome] | XX | [words] |
| 4 | When [situation], I want [motivation], so that [outcome] | XX | [words] |
| 5 | When [situation], I want [motivation], so that [outcome] | XX | [words] |

### 2.10 Objection Matrix

| Objection | Freq | Severity | Recommended Response |
|-----------|------|----------|---------------------|
| "[literal objection]" | XX | High/Med/Low | [how to address in copy] |
| "[literal objection]" | XX | High/Med/Low | [how to address in copy] |
| "[literal objection]" | XX | High/Med/Low | [how to address in copy] |

### 2.11 Behavioral vs. Stated Tension

| What They SAY | What They DO | Implication |
|---------------|--------------|-------------|
| [stated preference] | [actual behavior] | [copy opportunity] |

---

## PART 3: COMPETITIVE INTELLIGENCE MATRIX

### 3.1 Competitors Analyzed

| Competitor | Type | Positioning | Primary Claim | Differentiator |
|------------|------|-------------|---------------|----------------|
| [name 1] | Direct | "[positioning]" | "[claim]" | [differentiator] |
| [name 2] | Indirect | "[positioning]" | "[claim]" | [differentiator] |
| [name 3] | Substitute | "[positioning]" | "[claim]" | [differentiator] |

### 3.2 Ad Collection

| Competitor | Channel | Headline | Running Time | Winner? |
|------------|---------|----------|--------------|---------|
| [name] | Meta | "[headline]" | XX days | ✅/❌ |
| [name] | Meta | "[headline]" | XX days | ✅/❌ |
| [name] | Google | "[headline]" | XX days | ✅/❌ |
| [name] | Google | "[headline]" | XX days | ✅/❌ |

### 3.3 Saturated Claims (What to AVOID)

| Claim | Who Uses It | Why to Avoid |
|-------|-------------|--------------|
| "[saturated claim]" | [list] | [everyone says this] |
| "[saturated claim]" | [list] | [doesn't differentiate] |
| "[saturated claim]" | [list] | [unverifiable] |

### 3.4 Positioning Gaps (OPPORTUNITIES)

| Gap Identified | Why It's an Opportunity | How to Exploit |
|----------------|------------------------|----------------|
| [gap 1] | [justification] | [strategy] |
| [gap 2] | [justification] | [strategy] |
| [gap 3] | [justification] | [strategy] |

### 3.5 Winners Analyzed (60+ days)

| Ad | Running Time | Why It Works | Elements to Adapt |
|----|--------------|--------------|-------------------|
| [link] | XX days | [analysis] | [elements] |
| [link] | XX days | [analysis] | [elements] |

---

## PART 4: STRATEGIC BRIEF

### 4.1 Positioning Statement

```
[PRODUCT] is [WHAT IT DOES] for [WHOM].
```

**Validation:**
- [ ] Different from all competitors analyzed
- [ ] Connects with identified JTBDs
- [ ] Based on verifiable fact

### 4.2 Complete Copy Platform

```yaml
copy_platform:
  problem: |
    [Basic problem the ad must solve.
    Use VOC language.]

  objective: |
    [What the communication must achieve.
    Ex: Generate awareness, convert leads, break objection X]

  target_audience:
    primary: |
      [Who specifically. Not generic.
      Ex: "Digital entrepreneurs who have tried X and failed at Y"]
    secondary: |
      [Secondary audience]
    anti_target: |
      [Who this is NOT for]

  central_promise: |
    [The great promise. Verifiable.
    Connected to anchor fact.]

  reason_why: |
    [The proof. Why believe it.
    Based on verified facts from Part 1.]

  tone: |
    [How to speak. Based on VOC language.
    Ex: "Direct, no technical jargon, using words X, Y, Z"]

  mandatories: |
    [Legal requirements, brand standards, etc.]
```

### 4.3 Big Idea Test

| Criterion | Pass? | Evidence |
|-----------|-------|----------|
| Did it make me GASP? | ✅/❌ | [why] |
| Do I WISH I'd thought of it? | ✅/❌ | [why] |
| Is it genuinely UNIQUE? | ✅/❌ | [why] |
| Does it fit the STRATEGY? | ✅/❌ | [why] |
| Could it last 30 YEARS? | ✅/❌ | [why] |

**TOTAL:** /5 criteria

### 4.4 Success Metrics

| Metric | Tier | Target | Baseline |
|--------|------|--------|----------|
| [Primary: sales/conversions] | GOLD | [target] | [baseline] |
| [Secondary: CPA] | GOLD | [target] | [baseline] |
| [Diagnostic: CTR] | SILVER | [target] | [baseline] |

### 4.5 Competitive Frame

| Scenario | Competitor | Outcome |
|----------|------------|---------|
| We win against | [competitor] | by [differentiation] |
| We lose to | [competitor] | when [weakness] |

---

## PART 5: CREATIVE OPTIONS DOCUMENT

### 5.1 Headlines Generated (25+)

| # | Headline | Type | Benefit | Brand | 6-12 words | Score |
|---|----------|------|---------|-------|------------|-------|
| 1 | "[headline]" | Direct Benefit | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 2 | "[headline]" | News | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 3 | "[headline]" | How-to | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 4 | "[headline]" | Question | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 5 | "[headline]" | Testimonial | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 6 | "[headline]" | Statistic | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 7 | "[headline]" | Challenge | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 8 | "[headline]" | Story | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 9 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 10 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 11 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 12 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 13 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 14 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 15 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 16 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 17 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 18 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 19 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 20 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 21 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 22 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 23 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 24 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |
| 25 | "[headline]" | [type] | ✅/❌ | ✅/❌ | ✅/❌ | /3 |

### 5.2 Top 5 Selected for Testing

| Rank | Headline | Why Selected |
|------|----------|--------------|
| 1 | "[headline]" | [justification based on research] |
| 2 | "[headline]" | [justification] |
| 3 | "[headline]" | [justification] |
| 4 | "[headline]" | [justification] |
| 5 | "[headline]" | [justification] |

### 5.3 Body Copy Structure

```
HEADLINE: [Headline #1]

SUBHEAD: [Expand promise]

LEAD PARAGRAPH:
[Capture interest — use VOC language]

---

CLAIM 1: [verifiable claim]
PROOF: [source: document/page]
TIER: 🥇/🥈/🥉

SUBHEAD: [transition]

CLAIM 2: [verifiable claim]
PROOF: [source]
TIER: 🥇/🥈/🥉

CLAIM 3: [verifiable claim]
PROOF: [source]
TIER: 🥇/🥈/🥉

SUBHEAD: [transition]

OBJECTION HANDLING:
[Address key objection #1 from VOC research]
[Address key objection #2]

STORY/EXAMPLE:
[Use real case or verifiable example]

CLAIM 4: [verifiable claim]
PROOF: [source]
TIER: 🥇/🥈/🥉

[... continue with more claims ...]

---

OFFER:
[Exactly what they get]

RISK REVERSAL:
[Guarantee or safety net]

CTA: [Call to action]
```

---

## PART 6: VALIDATED INSIGHTS

### 6.1 Source Audit

| Insight | Type | Source | Gate 1 | Gate 2 | Gate 3 | Gate 4 | Status |
|---------|------|--------|--------|--------|--------|--------|--------|
| [insight 1] | PRIMARY | [source] | ✅ | ✅ | ✅ | ✅ | ✅ Approved |
| [insight 2] | PRIMARY | [source] | ✅ | ✅ | ✅ | ✅ | ✅ Approved |
| [insight 3] | SECONDARY | [source] | ✅ | ✅ | ✅ | ❌ | ⚠️ Review |
| [insight 4] | INFERENCE | [analysis] | ❌ | - | - | - | ❌ Discarded |

**Gate Legend:**
- Gate 1: Has traceable source?
- Gate 2: Verifiable with 2+ sources?
- Gate 3: Representative (not cherry-pick)?
- Gate 4: Reviewed by human?

### 6.2 Red Flags Checklist

- [ ] ❌ Insight seems too good to be true
- [ ] ❌ Numerical data without clear origin
- [ ] ❌ AI "discovered" something nobody else has seen
- [ ] ❌ Generalizations without quantitative data
- [ ] ❌ Contradicts what the client said
- [ ] ❌ Cannot be verified independently

**Red Flags Status:** [All clear / X identified and resolved]

### 6.3 Insights by Confidence Level

**🥇 GOLD (Can use in headlines and primary claims):**
1. [verified insight]
2. [verified insight]
3. [verified insight]

**🥈 SILVER (Can use in supporting claims):**
1. [verified insight]
2. [verified insight]
3. [verified insight]

**🥉 BRONZE (Use with qualifiers "can", "designed to"):**
1. [insight]
2. [insight]

**❌ DISCARDED:**
1. [insight] — Reason: [why it was discarded]

---

## PART 7: TEST PLAN

### 7.1 Variables for Testing

| Priority | Variable | Hypothesis |
|----------|----------|------------|
| 1 | Headlines | A vs B |
| 2 | [variable] | [hypothesis] |
| 3 | [variable] | [hypothesis] |

### 7.2 Success Metrics

| Metric | Tier | Target | Priority |
|--------|------|--------|----------|
| Sales/Conversions | GOLD | [target] | High |
| CPA | GOLD | [target] | High |
| CTR | SILVER | [target] | Medium |
| [metric] | [tier] | [target] | [priority] |

### 7.3 Detailed Test Plan

```yaml
test_1:
  name: "Headline A vs B"
  variable: "[headline A]" vs "[headline B]"
  hypothesis: "A should win because it uses [anchor fact]"
  primary_metric: "Conversions"
  duration: "[X days or Y conversions]"
  tie_breaker: "[secondary criterion]"

test_2:
  name: "[test name]"
  variable: "[control]" vs "[variation]"
  hypothesis: "[why variation might win]"
  primary_metric: "[metric]"
  duration: "[duration]"
  tie_breaker: "[criterion]"
```

---

## PART 8: RESEARCH ACCURACY SCORECARD

*Complete after campaign performance data is available*

```
RESEARCH ACCURACY SCORECARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Campaign: [name]
Research Date: [date] | Launch Date: [date]
Review Date: [date]

PREDICTIONS VS. OUTCOMES:
| Prediction | Confidence | Outcome | Accurate? |
|------------|------------|---------|-----------|
| [x]        | [H/M/L]    | [x]     | [Y/N]     |
| [x]        | [H/M/L]    | [x]     | [Y/N]     |
| [x]        | [H/M/L]    | [x]     | [Y/N]     |

RESEARCH ACCURACY RATE: [X]%

LESSONS LEARNED:
• [What to repeat]
• [What to improve]
• [What to stop doing]

UPDATED EVIDENCE HIERARCHY:
[Any adjustments to confidence levels based on outcomes]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## EXECUTIVE SUMMARY FOR COPYWRITER

### Top 5 Facts to Use

1. **[Anchor Fact]** — 🥇 GOLD — [source]
2. [Fact 2] — 🥇 GOLD — [source]
3. [Fact 3] — 🥈 SILVER — [source]
4. [Fact 4] — 🥈 SILVER — [source]
5. [Fact 5] — 🥈 SILVER — [source]

### Top 5 Pains for Headlines

1. "[pain in consumer words]"
2. "[pain]"
3. "[pain]"
4. "[pain]"
5. "[pain]"

### Top 5 Desires for Promises

1. "[desire in consumer words]"
2. "[desire]"
3. "[desire]"
4. "[desire]"
5. "[desire]"

### Top 10 MANDATORY Words for Copy

1. [word] (XXx)
2. [word] (XXx)
3. [word] (XXx)
4. [word] (XXx)
5. [word] (XXx)
6. [word] (XXx)
7. [word] (XXx)
8. [word] (XXx)
9. [word] (XXx)
10. [word] (XXx)

### Powerful Literal Phrases (Use exactly)

1. "[literal consumer phrase]"
2. "[literal phrase]"
3. "[literal phrase]"
4. "[literal phrase]"
5. "[literal phrase]"

### What NEVER to Say

1. [saturated claim] — Why: [everyone says this]
2. [term] — Why: [consumer never uses it]
3. [claim] — Why: [unverifiable]

---

## APPROVAL

| Field | Value |
|-------|-------|
| **Researcher** | [name] |
| **Date** | [YYYY-MM-DD] |
| **Checklist Score** | ___/200 (___%) |
| **Status** | [ ] Approved [ ] Review [ ] Redo |
| **Approver** | [name] |
| **Approval Date** | [YYYY-MM-DD] |

---

## OGILVY'S WORDS TO REMEMBER

> **"For Rolls-Royce, I spent three weeks reading about the car. By the time I finished, I knew more about it than 90% of the people who buy Rolls-Royces."**
> — David Ogilvy

> **"At 60 miles an hour the loudest noise in this new Rolls-Royce comes from the electric clock."**
> — The result of 3 weeks of research

> **"I am helpless without research material—and the more 'motivational' the better."**
> — David Ogilvy

> **"Advertising people who ignore research are as dangerous as generals who ignore decodes of enemy signals."**
> — David Ogilvy

> **"The discipline of knowledge over the anarchy of ignorance."**
> — David Ogilvy

---

*Template based on: docs/research/david-ogilvy-research-engineering-meta-framework.md*
*Methodology: David Ogilvy Research Engineering (1935-1985)*


---

## Referência: templates/estado-da-skill.md

---
type: Skill Instance
title: Estado privado de DENTRO DA CABEÇA
status: draft
agentflix:
  schema_version: 1
  skill_id: copy-pesquisa-avatar
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
  "skill_id": "copy-pesquisa-avatar",
  "at": "2026-09-08T15:00:00Z",
  "origin": "human",
  "operation": "create",
  "result": "completed",
  "version": "0.4.3",
  "content_revision": "1.0.0",
  "artifact_ref": "artefatos/entrega-r1.md",
  "verification": "passed"
}


---

## Não incluído neste arquivo (está no zip da skill)

- `scripts/auditar.py (script: só no zip)`
