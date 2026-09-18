# copy-email · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-email.md` uma skill chamada copy-email. Quando eu pedir algo como "sequência de [tipo] para [público], [n] e-mails", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# TODA MANHÃ · Diário, lançamento, cold, recuperação

Sequência de boas-vindas, e-mail diário, lançamento, cold e-mail, carrinho abandonado, lead que sumiu, martelo pré-call e newsletter. Cada formato tem sua cadência e seu gancho, e o agente escreve a sequência completa com assunto, corpo e chamada, na ordem em que cada e-mail deve chegar.

## When to Use

- O pedido envolve: e-mail, sequência, newsletter, cold e-mail, carrinho abandonado, lead que sumiu, lançamento por e-mail.
- Diga: "sequência de [tipo] para [público], [n] e-mails".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| create email sequence | `references/create-email-sequence.md` |
| create daily email | `references/create-daily-email.md` |
| create launch emails | `references/create-launch-emails.md` |
| create cold email | `references/create-cold-email.md` |
| create abandoned cart | `references/create-abandoned-cart.md` |
| create ghosted lead recovery | `references/create-ghosted-lead-recovery.md` |
| create pre call hammer sequence | `references/create-pre-call-hammer-sequence.md` |
| create newsletter | `references/create-newsletter.md` |

## Procedure

1. Identifique a sub-tarefa pela tabela acima. Se o pedido cobre mais de uma, ordene-as na sequência em que uma alimenta a outra e execute uma por vez.
2. Abra a referência escolhida e leia o bloco `Inputs`. Colete do usuário todos os `required`; pergunte o que faltar antes de escrever. Registre os `optional` que ele deu.
3. Siga a referência: fórmulas, categorias e passos, na ordem em que aparecem. Onde ela citar um template em `templates/`, abra e preencha o template; onde citar um checklist, use-o no passo 5.
4. Escreva a entrega no formato do bloco `Output Format` da referência, em português. Deixe `[COLCHETES]` só onde falta um dado do usuário; nunca invente número, depoimento ou nome.
5. Rode o `Quality Checklist` (ou `Evaluation Criteria`) da referência sobre o que escreveu. Corrija o que falhou. Liste na entrega o resultado item a item.
6. Entregue: a peça no formato pedido, a lista de `[COLCHETES]` a preencher, e o checklist com o resultado.

## Pitfalls

- Pular o bloco `Inputs` e escrever com o que veio. Falta de avatar ou de benefício principal produz copy genérica; pergunte.
- Misturar duas sub-tarefas numa entrega só. Uma de cada vez, cada uma com seu checklist.
- Preencher `[COLCHETES]` com chute para a peça "ficar pronta". Colchete aberto é honesto; número inventado é dívida.
- Ignorar o `Output Format`. Ele existe para a peça encaixar no passo seguinte (página, e-mail, anúncio).

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. Toda entrega nomeada no `Output Format` da referência usada existe na resposta (ex.: variações, top 3, pares de teste).
2. Todos os `required` do bloco `Inputs` foram obtidos do usuário antes da escrita, ou a resposta diz explicitamente qual faltou e parou ali.
3. Nenhum número, depoimento ou nome aparece sem ter vindo do usuário; o que falta está em `[COLCHETES]` e listado no fim.
4. O `Quality Checklist` da referência aparece na entrega com cada item marcado, e nenhum item está falho.
5. A resposta nomeia qual referência foi usada (`references/<sub-tarefa>.md`).

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/create-abandoned-cart.md`
- `references/create-cold-email.md`
- `references/create-daily-email.md`
- `references/create-email-sequence.md`
- `references/create-ghosted-lead-recovery.md`
- `references/create-launch-emails.md`
- `references/create-newsletter.md`
- `references/create-pre-call-hammer-sequence.md`


---

## Referência: references/create-abandoned-cart.md

# Create Abandoned Cart Task

## Purpose
Criar sequências de email para recuperar carrinhos abandonados, reengajando compradores que demonstraram interesse mas não finalizaram a compra.

## When to Use
- Checkout iniciado mas não finalizado
- Visitou página de vendas mas não comprou
- Adicionou ao carrinho mas abandonou
- Começou processo de pagamento e parou

## Inputs

```yaml
required:
  - product_name: Nome do produto
  - product_price: Preço do produto
  - checkout_page: URL do checkout
  - target_avatar: Quem é o cliente ideal

optional:
  - abandonment_point: Onde abandonaram (checkout, pagamento, form)
  - time_since_abandonment: Quanto tempo desde abandono
  - incentive_available: Se pode oferecer desconto/bônus
  - product_type: Tipo de produto (curso, SaaS, físico)
  - urgency_element: Se há escassez real
  - copywriter_preference: Copywriter específico desejado
```

## Workflow

### Step 1: Abandonment Analysis
```
Identificar provável motivo do abandono:

OBJEÇÃO DE PREÇO
- Viu o preço e hesitou
- Solução: Mostrar valor, oferecer parcelamento

OBJEÇÃO DE CONFIANÇA
- Não tem certeza se funciona
- Solução: Prova social, garantia

OBJEÇÃO DE TEMPO
- "Vou pensar"
- Solução: Urgência, custo de esperar

DISTRAÇÃO
- Simplesmente se distraiu
- Solução: Lembrete simples, sem pressão

FRICÇÃO TÉCNICA
- Problema no checkout
- Solução: Oferecer ajuda, link direto
```

### Step 2: Sequence Timing
```
Timing recomendado:

EMAIL 1: 1 hora após abandono
- Lembrete gentil
- "Esqueceu algo?"

EMAIL 2: 24 horas após
- Valor + objeções
- Por que vale a pena

EMAIL 3: 48-72 horas após
- Prova social
- Resultados de outros

EMAIL 4: 5-7 dias após
- Urgência/incentivo
- Última chance

REGRAS:
- Mais agressivo = produtos de baixo ticket
- Mais espaçado = high-ticket
- Sempre ter opção de opt-out
```

### Step 3: Email Templates

#### EMAIL 1: LEMBRETE GENTIL (1h)
```markdown
Assunto: Esqueceu algo?

[Nome],

Percebi que você estava finalizando sua compra de [Produto]
mas algo te interrompeu.

Seu carrinho ainda está salvo.

Se quiser continuar de onde parou:
→ [Link direto para checkout]

Caso tenha encontrado algum problema técnico,
me avisa que ajudo você.

[Assinatura]

P.S. [Benefício rápido do produto]
```

#### EMAIL 2: VALOR + OBJEÇÕES (24h)
```markdown
Assunto: Antes de decidir sobre [Produto]...

[Nome],

Vi que você visitou [Produto] ontem mas não finalizou.

Sem problema — quero ter certeza que você tem todas
as informações para tomar a melhor decisão.

**Por que [Produto] funciona:**
[2-3 bullets de benefícios principais]

**Se você está pensando...**

"E se não funcionar para mim?"
→ Garantia de [X] dias. Se não curtir, devolvemos tudo.

"É muito caro"
→ [Argumento de valor ou parcelamento]

"Não é o momento"
→ [Custo de esperar / urgência]

Alguma dúvida que não respondi? Me conta.

→ [Link para checkout]

[Assinatura]
```

#### EMAIL 3: PROVA SOCIAL (48-72h)
```markdown
Assunto: [Nome do cliente] também tinha dúvidas...

[Nome],

Deixa eu te contar sobre [Nome do cliente].

[Ele/Ela] também hesitou. Também pensou se valia a pena.

Mas decidiu experimentar.

[Resultado]:
"[Depoimento]"

[Ele/Ela] não é exceção. [X] pessoas já passaram
por [Produto] e conseguiram [resultado].

Você pode ser o próximo.

→ [Link]

[Assinatura]

P.S. Seu carrinho ainda está salvo.
```

#### EMAIL 4: URGÊNCIA/INCENTIVO (5-7 dias)
```markdown
Assunto: [Incentivo] expira hoje

[Nome],

Esta é minha última mensagem sobre seu carrinho.

Não vou te encher de emails.

Mas queria te avisar:

[SE TIVER INCENTIVO:]
O desconto especial de [X]% que reservei para você
expira hoje às [horário].

Depois disso, volta ao preço normal.

[SE NÃO TIVER INCENTIVO:]
Seu carrinho salvo vai expirar.

Se [Produto] faz sentido para você, agora é a hora.

→ [Link]

Se não fizer, tudo bem. Só me avisa para eu parar
de enviar lembretes.

[Assinatura]
```

### Step 4: Subject Line Formulas
```
Por tipo de email:

LEMBRETE (Email 1):
- "Esqueceu algo?"
- "Seu carrinho está esperando"
- "Ainda está aí?"
- "[Nome], um minuto..."

VALOR (Email 2):
- "Antes de decidir..."
- "Uma coisa que não mencionei"
- "Sobre [Produto]..."
- "Respondendo sua dúvida"

PROVA SOCIAL (Email 3):
- "[Cliente] também tinha dúvidas"
- "Olha o que [Nome] conseguiu"
- "Você não está sozinho"
- "O que [X] pessoas descobriram"

URGÊNCIA (Email 4):
- "Última chance: [incentivo]"
- "Seu carrinho vai expirar"
- "Antes que desapareça"
- "24 horas e acabou"
```

### Step 5: Incentive Strategies
```
Estratégias de incentivo para recuperação:

DESCONTO
- 10-20% off (não desvalorize muito)
- Código exclusivo: VOLTA10
- "Reservei para você"

BÔNUS EXTRA
- Adicione bônus não incluído antes
- "Por voltar, ganhe [bônus]"
- Funciona melhor que desconto

PARCELAMENTO ESPECIAL
- Mais parcelas
- Primeira parcela menor
- "Facilitar para você"

TRIAL/SAMPLE
- Teste gratuito de X dias
- Primeiro módulo grátis
- Baixa barreira de entrada

URGÊNCIA REAL
- Preço sobe em [data]
- Bônus expira
- Vagas acabando

IMPORTANTE:
- Não use incentivos sempre (treina comportamento)
- Alterne estratégias
- Alguns abandonos são bons (qualificação)
```

### Step 6: Advanced Tactics
```
Táticas avançadas:

SEGMENTAÇÃO POR ABANDONMENT POINT
- Abandonou no checkout → email de facilidade
- Abandonou no preço → email de valor
- Abandonou no form → email de ajuda técnica

PERSONALIZAÇÃO
- Nome do produto específico
- Quanto faltou para completar
- Valor do carrinho

MULTI-CANAL
- Email + Retargeting ads
- Email + SMS (se permitido)
- Email + Push notification

TIMING DINÂMICO
- Abandono à noite → email de manhã
- Abandono no trabalho → email fim do dia
- Teste horários diferentes

GAMIFICAÇÃO
- "Seu carrinho está chorando"
- "Salvamos seu lugar"
- Visual de produto esperando
```

### Step 7: Quality Check
```
Verificar sequência:

TOM
- [ ] Não é desesperado/spammy?
- [ ] Respeita a decisão do usuário?
- [ ] Tom é de serviço, não pressão?

VALOR
- [ ] Cada email adiciona algo novo?
- [ ] Objeções são tratadas?
- [ ] Benefícios claros?

TÉCNICO
- [ ] Links funcionam?
- [ ] Personalização correta?
- [ ] Opt-out fácil?

TIMING
- [ ] Espaçamento adequado?
- [ ] Total de emails razoável?
- [ ] Para após X dias sem resposta?
```

## Output

```yaml
format: markdown
sections:
  - abandonment_analysis
  - complete_email_sequence (4 emails)
  - subject_line_variations
  - incentive_strategy (if applicable)
  - quality_checklist
```

## Copywriter Recommendations

| Contexto | Copywriter Ideal | Por quê |
|----------|------------------|---------|
| Recuperação urgente | Dan Kennedy | Escassez, deadline |
| Tom amigável/casual | Frank Kern | Autenticidade |
| Foco em valor | Alex Hormozi | Valor vs preço |
| Prova social pesada | Gary Bencivenga | Credibilidade |
| High-ticket | David Ogilvy | Sofisticação |

## Metrics to Track

```yaml
abandoned_cart_metrics:
  recovery_rate: "% de carrinhos recuperados"
  revenue_recovered: "R$ recuperado"
  email_1_conversion: "% que converte no email 1"
  time_to_recovery: "Tempo médio até recuperação"
  unsubscribe_rate: "% que dá unsubscribe"

benchmarks:
  good_recovery_rate: "5-15%"
  great_recovery_rate: "15-25%"
```

## Sequence Comparison

```yaml
low_ticket:
  timing: "1h → 24h → 48h → 72h"
  total_emails: 4
  tone: "Mais direto, mais urgência"
  incentive: "Desconto funciona bem"

high_ticket:
  timing: "1h → 48h → 5 dias → 10 dias"
  total_emails: 4
  tone: "Mais consultivo, menos pressão"
  incentive: "Bônus > desconto"

saas:
  timing: "1h → 24h → 72h → 7 dias"
  total_emails: 4
  tone: "Trial gratuito, demonstração"
  incentive: "Extensão de trial, feature extra"
```

---

*Task Version: 1.0*
*Primary Framework: Recovery Sequence (Ryan Deiss/Digital Marketer)*


---

## Referência: references/create-cold-email.md

# Create Cold Email Task

## Purpose
Criar cold emails de alta resposta para prospecção B2B, agendamento de reuniões, e outreach que quebra a barreira inicial com novos contatos.

## When to Use
- Prospecção de clientes B2B
- Outreach para parcerias
- Agendamento de reuniões/demos
- Contato com influenciadores/creators
- Networking estratégico

## Inputs

```yaml
required:
  - recipient_type: Quem vai receber (cargo, empresa, perfil)
  - goal: Objetivo do email (reunião, demo, resposta)
  - value_proposition: O que você oferece de valor
  - sender_context: Quem é você/sua empresa

optional:
  - personalization_data: Dados específicos do prospect
  - trigger_event: Evento que justifica o contato
  - social_proof: Resultados/clientes relevantes
  - follow_up_sequence: Se é parte de sequência
  - copywriter_preference: Copywriter específico desejado
```

## Workflow

### Step 1: Prospect Research
```
Antes de escrever, descobrir:

SOBRE A PESSOA
- Nome completo (grafia correta!)
- Cargo atual
- Histórico de carreira
- Conteúdo que publicou (LinkedIn, Twitter)
- Interesses/hobbies (se relevante)

SOBRE A EMPRESA
- O que fazem
- Tamanho (funcionários, faturamento)
- Notícias recentes
- Desafios do setor
- Concorrentes

TRIGGER EVENTS
- Nova contratação
- Promoção
- Funding recente
- Expansão
- Lançamento de produto
- Post/conteúdo recente
```

### Step 2: Cold Email Frameworks
```
Frameworks de alta conversão:

1. AIDA (Adaptado para Cold)
- Attention: Linha de abertura personalizada
- Interest: Problema relevante
- Desire: Sua solução/valor
- Action: CTA claro e fácil

2. PAS (Problem-Agitate-Solve)
- Problem: Identifica a dor
- Agitate: Intensifica a dor
- Solve: Sua solução

3. QVC (Question-Value-CTA)
- Question: Pergunta que engaja
- Value: O que você oferece
- CTA: Próximo passo simples

4. BAB (Before-After-Bridge)
- Before: Situação atual (com problema)
- After: Situação ideal (com solução)
- Bridge: Como você conecta os dois

5. SUMO (Short-Useful-Message-Offer)
- Short: Máximo 100 palavras
- Useful: Valor imediato
- Message: Clara e direta
- Offer: CTA impossível de ignorar
```

### Step 3: Opening Line Formulas (Joanna Wiebe)
```
Linhas de abertura que funcionam:

PERSONALIZATION-BASED
"Vi seu post sobre [tema] no LinkedIn e concordo 100% — especialmente a parte sobre [específico]."

TRIGGER-BASED
"Parabéns pela [notícia/evento]. [Empresa] está em um momento interessante."

MUTUAL CONNECTION
"[Nome] sugeriu que eu entrasse em contato — ele achou que fazia sentido conversarmos."

RESEARCH-BASED
"Notei que [Empresa] está [fazendo X]. Isso geralmente significa [problema/oportunidade]."

COMPLIMENT (Genuine)
"Acompanho [conteúdo/empresa] há [tempo]. [Elogio específico e genuíno]."

QUESTION
"Vocês estão enfrentando [problema comum do setor] também?"

OBSERVATION
"Percebi que [insight sobre a empresa/pessoa]. Faz sentido?"

EVITE:
❌ "Espero que esteja bem"
❌ "Sei que você é ocupado, mas..."
❌ "Me chamo [Nome] e trabalho na [Empresa]..."
```

### Step 4: Body Copy Principles
```
Princípios para o corpo do email:

BREVIDADE
- Máximo 5-7 linhas
- Cada frase tem que ganhar a próxima
- Corte sem dó

FOCO NO PROSPECT
- "Você" > "Eu/Nós"
- Sobre problemas DELES
- Benefícios para ELES

ESPECIFICIDADE
- Números concretos
- Exemplos reais
- Resultados mensuráveis

CREDIBILIDADE
- Um dado de prova social
- Cliente similar
- Resultado específico

SEM JARGÃO
- Linguagem simples
- Como você falaria pessoalmente
- Sem corporativês
```

### Step 5: CTA Formulas
```
CTAs de alta conversão:

MICRO-CTA (Baixa fricção)
"Vale 15 minutos para explorar?"
"Faz sentido uma conversa rápida?"
"Posso mandar mais detalhes?"

ESPECÍFICO COM OPÇÃO
"Você tem 15 min quinta ou sexta para uma call?"
"Consegue amanhã às 14h ou prefere outro dia?"

PERMISSION-BASED
"Você é a pessoa certa para conversar sobre isso?"
"Faria sentido eu falar com alguém da equipe de [área]?"

VALUE-FIRST
"Posso mandar um estudo de caso de como ajudamos [empresa similar]?"
"Quer ver como [cliente] conseguiu [resultado]?"

SOFT CLOSE
"Se fizer sentido, responde esse email e agendamos."
"Se não for prioridade agora, sem problema — só me avisa."

EVITE:
❌ "Me liga quando puder"
❌ "Fico no aguardo"
❌ "Podemos marcar uma reunião?"
```

### Step 6: Subject Line Formulas
```
Subjects de alta abertura:

PERSONALIZED
- "[Nome], pergunta rápida"
- "[Empresa] + [Sua Empresa]"
- "Sobre [post/conteúdo deles]"

CURIOSITY
- "Uma ideia para [Empresa]"
- "Sobre [área/projeto]"
- "[Resultado] — possível?"

MUTUAL
- "[Nome mútuo] sugeriu"
- "Conexão via [evento/grupo]"

TRIGGER-BASED
- "Parabéns por [achievement]"
- "Vi a notícia sobre [evento]"

DIRECT
- "[Resultado específico] em [tempo]"
- "Pergunta sobre [área]"

AVOID (Low open rate):
❌ "Proposta comercial"
❌ "Apresentação [Empresa]"
❌ "Oportunidade de negócio"
❌ Emojis excessivos
❌ ALL CAPS
```

### Step 7: Email Templates

#### Template 1: Value-First Cold Email
```markdown
Assunto: [Resultado específico] para [Empresa]

[Nome],

[Linha de abertura personalizada baseada em pesquisa]

Trabalho com [tipo de empresas] e notei que [observação sobre empresa deles].

Ajudamos [empresa similar] a [resultado específico] em [tempo].

[Uma linha de como/o que fizemos]

Vale 15 minutos para ver se faz sentido para [Empresa]?

[Assinatura simples]
```

#### Template 2: Trigger-Based
```markdown
Assunto: Sobre [evento/notícia]

[Nome],

Vi que [Empresa] [trigger event]. Parabéns!

Isso geralmente significa [problema/oportunidade].

Trabalhamos com [empresas similares] ajudando com [solução].

[Prova social em uma linha]

Faz sentido trocar uma ideia?

[Assinatura]
```

#### Template 3: Referral
```markdown
Assunto: [Nome mútuo] sugeriu contato

[Nome],

[Nome mútuo] me disse que vocês estão [situação/desafio].

Ajudo [tipo de empresas] com [solução], e [Nome mútuo] achou que faria sentido conversarmos.

[Uma linha de credibilidade/resultado]

Tem 15 min essa semana?

[Assinatura]
```

#### Template 4: Question-Based
```markdown
Assunto: Pergunta rápida, [Nome]

[Nome],

Vocês estão enfrentando [problema comum do setor]?

Pergunto porque ajudamos [empresa similar] a [resultado].

Se for prioridade aí, posso compartilhar como fizemos.

Faz sentido?

[Assinatura]
```

#### Template 5: Value Offer
```markdown
Assunto: [Recurso gratuito] para [Empresa]

[Nome],

Criei [recurso: guia/checklist/análise] que mostra como [resultado].

[Empresa similar] usou para [benefício específico].

Quer que eu mande?

[Assinatura]
```

### Step 8: Follow-Up Sequence
```
Sequência de follow-up:

FOLLOW-UP 1 (3 dias depois)
Assunto: Re: [assunto original]

[Nome],

Sei que deve estar ocupado — só queria garantir
que viu meu email.

Resumindo: [1 linha de valor]

Faz sentido uma call rápida?

[Assinatura]

---

FOLLOW-UP 2 (7 dias depois)
Assunto: Uma última coisa

[Nome],

Não quero ser chato, mas queria compartilhar:

[Resultado novo ou caso de sucesso]

Se timing não é bom agora, sem problema.
Só me avisa e paro de enviar.

[Assinatura]

---

FOLLOW-UP 3 (14 dias depois - Breakup)
Assunto: Devo parar?

[Nome],

Não tive retorno, então vou assumir que
[solução] não é prioridade agora.

Se mudar, meu contato está aqui.

Sucesso com [área/projeto]!

[Assinatura]
```

### Step 9: Quality Check
```
Verificar cada email:

ABERTURA
- [ ] Personalizado (não template genérico)?
- [ ] Sobre ELES (não sobre você)?
- [ ] Ganha os próximos 5 segundos?

CORPO
- [ ] Máximo 7 linhas?
- [ ] Cada frase justifica existir?
- [ ] Valor claro para o prospect?

CTA
- [ ] Claro e específico?
- [ ] Baixa fricção?
- [ ] Fácil de responder?

TÉCNICO
- [ ] Nome escrito corretamente?
- [ ] Empresa certa?
- [ ] Sem erros de digitação?

SPAM CHECK
- [ ] Não parece template?
- [ ] Sem palavras de spam?
- [ ] Remetente com reputação?
```

## Output

```yaml
format: markdown
sections:
  - prospect_research_notes
  - complete_cold_email
  - subject_variations (3)
  - opening_variations (3)
  - follow_up_sequence (3 emails)
  - quality_checklist
```

## Copywriter Recommendations

| Contexto | Copywriter Ideal | Por quê |
|----------|------------------|---------|
| Cold email B2B | Joanna Wiebe | Copy Hackers, conversão |
| Tom direto e elegante | David Ogilvy | Credibilidade, sofisticação |
| Value-first | Ramit Sethi | Sem spam, relacionamento |
| Persuasão direta | Dan Kennedy | Direto ao ponto |
| Storytelling em email | Gary Halbert | Conexão pessoal |

## Metrics to Track

```yaml
cold_email_metrics:
  open_rate: "% que abre (target: 40-60%)"
  reply_rate: "% que responde (target: 5-15%)"
  positive_reply_rate: "% de respostas positivas"
  meeting_rate: "% que vira reunião"

benchmarks:
  good_reply_rate: "5-10%"
  great_reply_rate: "10-20%"
  exceptional: ">20%"
```

## Common Mistakes to Avoid

```yaml
mistakes:
  - "Emails longos (>7 linhas)"
  - "Falar de você antes do prospect"
  - "CTA vago ('vamos conversar')"
  - "Falta de personalização"
  - "Subject genérico"
  - "Sem follow-up"
  - "Follow-up idêntico ao original"
  - "Desistir após 1 tentativa"
```

---

*Task Version: 1.0*
*Primary Framework: Value-First Outreach (Joanna Wiebe/Copy Hackers)*


---

## Referência: references/create-daily-email.md

# create-daily-email

Task para criar emails diários no estilo Ben Settle - infotainment marketing.

## Metadata

```yaml
task:
  name: Create Daily Email
  id: create-daily-email
  version: "2.0"
  category: email_marketing
  primary_agent: ben-settle
  supporting_agents:
    - dan-kennedy
    - andre-chaperon
  estimated_time: "15-30 minutes per email"
  output_format: markdown

dependencies:
  checklists:
    - email-infotainment-checklist.md
  templates:
    - daily-email-tmpl.yaml
```

---

## Overview

Este task guia a criação de emails diários no estilo Ben Settle - combinando entretenimento, informação e vendas em cada mensagem. O objetivo é construir relacionamento com a lista enquanto vende consistentemente.

## Philosophy

> "Daily emails build relationship faster than anything else."
> — Ben Settle

O email diário não é sobre bombardear sua lista. É sobre criar conteúdo que as pessoas QUEREM ler. Quando seus emails são esperados e apreciados, você pode vender todos os dias sem ser "salesy".

---

## PHASE 1: PREPARATION

### Step 1.1: Understand Your Context

Antes de escrever, responda:

```yaml
context_checklist:
  audience:
    - [ ] Quem está lendo? (avatar específico)
    - [ ] O que eles querem? (desejo principal)
    - [ ] O que os mantém acordados à noite? (medos)
    - [ ] Qual linguagem eles usam? (vocabulário)

  product:
    - [ ] O que você está vendendo hoje?
    - [ ] Qual o principal benefício?
    - [ ] Qual a chamada para ação?

  relationship:
    - [ ] É o primeiro email? (welcome sequence)
    - [ ] Quantos emails já receberam?
    - [ ] Qual foi o último email sobre?
```

### Step 1.2: Choose Your Story Source

Todo email começa com uma história. Fontes de histórias:

| Categoria | Exemplos | Quando Usar |
|-----------|----------|-------------|
| **Vida Pessoal** | Família, hobbies, viagens, observações | Mais relatable, usa diariamente |
| **Vida Profissional** | Clientes, resultados, erros, lições | Para autoridade e prova |
| **Pop Culture** | Filmes, séries, notícias, celebridades | Para relevância e timing |
| **História** | Figuras históricas, eventos, paralelos | Para profundidade e credibilidade |
| **Observação** | Coisas que você nota no dia a dia | Para originalidade |
| **Ficção Ilustrativa** | Histórias criadas para ilustrar ponto | Quando não tem história real |

### Step 1.3: Find the Connection

A história DEVE conectar ao que você vende. Se não conecta, é a história errada.

**Exercício de Conexão:**
```
HISTÓRIA: [sua história]
LIÇÃO: [o que ela ensina]
CONEXÃO: [como isso se relaciona com seu produto]
BRIDGE: [frase de transição]
```

**Exemplo:**
```
HISTÓRIA: Meu cachorro destruiu meu sofá ontem
LIÇÃO: Comportamento não treinado gera destruição
CONEXÃO: Marketing não sistematizado também destrói negócios
BRIDGE: "E é exatamente por isso que criei o [Produto]..."
```

---

## PHASE 2: WRITING THE EMAIL

### Step 2.1: The Hook (Primeiras 1-2 linhas)

O hook tem um único objetivo: fazer o leitor continuar lendo.

**Tipos de Hook:**

#### 1. Mid-Action Hook
Comece no meio da ação, sem setup:
```
❌ "Deixa eu te contar uma história. Ontem eu estava no mercado..."
✅ "O segurança veio na minha direção e eu sabia que tinha problema..."
```

#### 2. Curiosity Hook
Crie uma pergunta que precisa de resposta:
```
❌ "Quero compartilhar algo importante com você..."
✅ "O email que quase destruiu meu negócio..."
```

#### 3. Controversy Hook
Desafie uma crença comum:
```
❌ "Muitos especialistas dizem que..."
✅ "O pior conselho de marketing que já ouvi..."
```

#### 4. Personal Hook
Algo íntimo ou vulnerável:
```
❌ "Tive uma experiência interessante..."
✅ "Minha esposa acha que eu sou louco..."
```

**Teste do Hook:**
- [ ] Cria curiosidade?
- [ ] É específico (não genérico)?
- [ ] Faz o leitor querer saber mais?
- [ ] Está em 1-2 linhas?

### Step 2.2: The Story/Content (Corpo do email)

Desenvolva a história com detalhes específicos.

**Elementos de uma boa história:**
- **Personagens**: Pessoas reais com nomes (quando apropriado)
- **Diálogo**: Citações diretas tornam mais vívido
- **Detalhes sensoriais**: O que você viu, ouviu, sentiu
- **Tensão**: Um problema, conflito ou desafio
- **Resolução**: Como terminou (ou não terminou)

**Estrutura sugerida:**
```
[Hook - 1-2 linhas]

[Contexto - 2-3 linhas]
Onde você estava, quando, com quem.

[Desenvolvimento - 3-5 parágrafos curtos]
O que aconteceu. Use parágrafos de 1-3 frases.
Inclua diálogo quando possível.
Mantenha a tensão.

[Lição/Insight - 1-2 parágrafos]
O que isso significa.
A conexão com seu assunto.
```

**Formatação:**
- Parágrafos curtos (1-3 frases)
- Linhas em branco entre parágrafos
- Sem blocos de texto densos
- Ocasionalmente uma linha só

### Step 2.3: The Bridge (Transição para venda)

A transição deve ser natural, não forçada.

**Frases de transição efetivas:**
```
"O que me leva ao ponto de hoje..."
"E é exatamente isso que [Produto] faz..."
"Essa é a razão pela qual criei..."
"Se você quer [resultado da história]..."
"Falando nisso..."
"E é por isso que estou escrevendo..."
```

**Má transição:**
```
"Mas chega de história. Vou falar do produto agora."
"Mudando de assunto..."
"Agora a parte comercial..."
```

### Step 2.4: The Pitch (Vendendo sem ser "salesy")

Seja direto. Não peça desculpas por vender.

**Elementos do pitch:**
1. **O que é**: Nome e descrição em uma frase
2. **Por que agora**: Conexão com a história
3. **Benefício principal**: O que eles ganham
4. **Call to Action**: Exatamente o que fazer

**Exemplo de pitch:**
```
É por isso que criei o [Nome do Produto].

Ele te ensina exatamente como [benefício principal]
sem precisar [dor que ele resolve].

Clica aqui pra ver: [link]
```

**Palavras a EVITAR no pitch:**
- "Se você tiver interesse..."
- "Sem pressão..."
- "Fique à vontade para..."
- "Talvez você queira..."

**Palavras a USAR:**
- "Clica aqui"
- "Pega o teu"
- "Começa agora"
- "Não perde"

### Step 2.5: The Sign-Off (Assinatura)

Sua assinatura deve ter personalidade.

**Exemplos de sign-offs:**
```
Seu [adjetivo engraçado ou controverso] amigo,
[Nome]

Abraço e boas vendas,
[Nome]

Até amanhã,
[Nome]

Fui,
[Nome]

P.S. [Algo relevante - urgência, bônus, ou piada]
```

---

## PHASE 3: THE P.S. STRATEGY

O P.S. é a segunda parte mais lida do email (depois do assunto).

### Tipos de P.S.

#### 1. P.S. de Reforço
Repete a oferta ou deadline:
```
P.S. Lembrando que o preço sobe à meia-noite.
Depois disso, vai de R$297 para R$497.
```

#### 2. P.S. de Prova Social
Adiciona credibilidade:
```
P.S. "Esse email me fez ganhar R$12.000 em uma semana"
— João, aluno do [Produto]
```

#### 3. P.S. de Bônus
Oferece algo extra:
```
P.S. Se você entrar hoje, ainda ganha [Bônus]
que não vou oferecer depois.
```

#### 4. P.S. Pessoal
Algo não relacionado à venda:
```
P.S. Terminei de assistir Breaking Bad ontem.
Entendo agora o hype. Top 3 séries da minha vida.
```

#### 5. P.S. de Curiosidade
Cria expectativa para amanhã:
```
P.S. Amanhã vou contar a história do email que me rendeu
R$87.000 em 24 horas. Não perde.
```

---

## PHASE 4: SUBJECT LINE

### Princípio Central

O assunto tem UM objetivo: fazer o email ser aberto.

Não precisa explicar o email. Não precisa vender. Só abrir.

### Tipos de Assunto

#### 1. Curiosidade Pura
```
"O erro de R$50.000"
"O que achei no meu spam"
"Ele disse não"
"Estranho"
```

#### 2. Controvérsia
```
"Por que eu odeio templates"
"Sua lista é grande demais"
"O pior conselho que já ouvi"
```

#### 3. Teaser de História
```
"A vez que quase fui preso"
"Minha esposa acha que sou louco"
"O que aconteceu no café"
```

#### 4. Direto ao Ponto
```
"Pergunta rápida"
"Sobre seus emails"
"Importante"
```

#### 5. Pessoal/Casual
```
"re: nossa conversa"
"estava pensando em você"
"isso me lembrou de você"
```

### Regras de Assunto

1. **Curto** - Menos de 50 caracteres
2. **Minúsculas** - Muitas vezes performa melhor
3. **Sem clickbait** - Deve conectar ao conteúdo
4. **Sem emojis excessivos** - Um máximo, se usar
5. **Teste seu swipe file** - Compare com o que funciona

---

## PHASE 5: REVIEW & REFINEMENT

### Checklist de Qualidade

Antes de enviar, verifique:

```yaml
hook_check:
  - [ ] Captura atenção em 1-2 linhas?
  - [ ] É específico, não genérico?
  - [ ] Cria curiosidade?

story_check:
  - [ ] Tem personagens e detalhes?
  - [ ] Usa parágrafos curtos?
  - [ ] É entretido de ler?

lesson_check:
  - [ ] Há um insight ou aprendizado?
  - [ ] Conecta naturalmente ao produto?

pitch_check:
  - [ ] É direto sem pedir desculpas?
  - [ ] Tem call to action claro?
  - [ ] Evita linguagem fraca?

personality_check:
  - [ ] Soa como eu falando?
  - [ ] Tem minha personalidade (3x)?
  - [ ] É diferente de emails corporativos?

technical_check:
  - [ ] Assunto com menos de 50 chars?
  - [ ] Links funcionando?
  - [ ] Formatação correta no preview?
```

### O Teste do Amigo

Pergunte:
> "Se eu não estivesse vendendo nada, eu leria isso?"

Se não, reescreva até que a resposta seja sim.

### O Teste da Identidade

Pergunte:
> "Se removessem meu nome, saberiam que fui eu que escrevi?"

Se não, adicione mais personalidade.

---

## PHASE 6: EMAIL CALENDAR

### Estrutura Semanal Sugerida

| Dia | Tipo de Email | Foco |
|-----|---------------|------|
| Segunda | História pessoal | Conexão/Relacionamento |
| Terça | Lição/Técnica | Valor/Autoridade |
| Quarta | Controvérsia/Opinião | Polarização |
| Quinta | Case study/Resultado | Prova social |
| Sexta | Behind-the-scenes | Intimidade |
| Sábado | Curiosidade/Teaser | Engajamento |
| Domingo | Reflexão/Pessoal | Conexão profunda |

### Variação de Pitch

Não precisa variar o produto todo dia. Pode ser:
- Mesmo produto, ângulo diferente
- Lead magnet diferente
- Chamada para reply
- Teaser de produto futuro

---

## TEMPLATES

### Template 1: História Pessoal → Venda

```
[ASSUNTO: algo curioso da história]

[HOOK: Começa no meio da ação]

[HISTÓRIA: 3-5 parágrafos curtos com detalhes]

[LIÇÃO: 1-2 parágrafos - o que isso significa]

[BRIDGE: Transição natural]

[PITCH: O que é, por que, CTA]

[SIGN-OFF: Sua assinatura]

[P.S.: Reforço ou teaser]
```

### Template 2: Controvérsia → Venda

```
[ASSUNTO: declaração controversa]

[HOOK: Sua opinião forte]

[ARGUMENTO: Por que você pensa assim]

[PROVA: Exemplos ou dados]

[BRIDGE: Como isso conecta]

[PITCH: A solução]

[SIGN-OFF]

[P.S.]
```

### Template 3: Lição Rápida → Venda

```
[ASSUNTO: benefício direto]

[HOOK: O problema comum]

[SOLUÇÃO: A técnica/insight em 2-3 passos]

[EXEMPLO: Como usar na prática]

[BRIDGE: Para ir mais fundo]

[PITCH: Onde aprender mais]

[SIGN-OFF]
```

---

## COMMON MISTAKES TO AVOID

### Mistake 1: Pedir Desculpas por Vender
```
❌ "Desculpa pelo email comercial, mas..."
✅ "Vou direto ao ponto..."
```

### Mistake 2: Começar com Setup
```
❌ "Deixa eu te contar uma história sobre algo que aconteceu..."
✅ "O policial veio na minha direção..."
```

### Mistake 3: Parágrafos Longos
```
❌ [Bloco de 10 linhas]
✅ [2-3 linhas]

   [2-3 linhas]
```

### Mistake 4: Linguagem Corporativa
```
❌ "Prezado cliente, gostaríamos de informar..."
✅ "E aí, tudo bem?"
```

### Mistake 5: Não Ter Opinião
```
❌ "Alguns dizem X, outros dizem Y, ambos têm mérito..."
✅ "X é besteira. Aqui está o porquê..."
```

---

## ADVANCED TECHNIQUES

### Technique 1: Open Loops

Crie curiosidade para o próximo email:
```
"Amanhã vou contar o que aconteceu depois.
Spoiler: envolveu a polícia e um hamster."
```

### Technique 2: Running Jokes

Referências recorrentes que seus leitores entendem:
```
"Você sabe como eu sou sobre [tema recorrente]..."
```

### Technique 3: Reader Involvement

Peça respostas:
```
"Me responde esse email: qual é seu maior desafio com X?"
```

### Technique 4: Pattern Break

Ocasionalmente, quebre o padrão:
```
"Hoje não vou te vender nada.
Só queria dizer obrigado por ler meus emails."
```

### Technique 5: Callback

Referencie emails anteriores:
```
"Lembra do email da semana passada sobre [X]?
Tive uma atualização..."
```

---

## FINAL CHECKLIST

Antes de enviar seu email diário:

- [ ] Hook captura atenção imediatamente
- [ ] História é específica e interessante
- [ ] Lição conecta naturalmente ao produto
- [ ] Pitch é direto sem ser agressivo
- [ ] Personalidade está presente em cada linha
- [ ] Assunto é curto e cria curiosidade
- [ ] P.S. adiciona valor ou urgência
- [ ] Você leria esse email se recebesse

---

## OUTPUT FORMAT

Ao executar este task, entregue:

```yaml
email_output:
  subject_line: "[Assunto do email]"
  preview_text: "[Texto de preview - opcional]"

  body: |
    [Corpo completo do email formatado]

  p_s: "[Texto do P.S.]"

  metadata:
    story_source: "[pessoal/profissional/pop culture/etc]"
    pitch_type: "[produto/lead magnet/reply/etc]"
    infotainment_score: "[1-10]"
    personality_level: "[1-10]"

  notes:
    - "[Notas sobre o email]"
    - "[Variações sugeridas]"
```

---

*Task Version: 2.0*
*Primary Agent: Ben Settle*
*Lines: 600+*


---

## Referência: references/create-email-sequence.md

# Create Email Sequence Task

Task completa para criar sequências de email de alta conversão usando metodologias de Andre Chaperon (SOS), Ben Settle (Infotainment), e Dan Kennedy (Urgency).

## Metadata

```yaml
task:
  name: Create Email Sequence
  id: create-email-sequence
  version: "2.0"
  category: email_marketing
  estimated_output: "5-15 emails por sequência"
  primary_agents:
    - andre-chaperon (Estrutura de Sequência - Soap Opera)
    - ben-settle (Conteúdo - Infotainment)
  supporting_agents:
    - dan-kennedy (Urgência e Conversão)
    - eugene-schwartz (Diagnóstico - Awareness Level)
  dependencies:
    - tasks/diagnose-awareness-level.md
    - checklists/soap-opera-checklist.md
    - templates/soap-opera-tmpl.yaml
    - templates/daily-email-tmpl.yaml
  research_foundation: docs/research/email-sequence-methodology-research.md
```

---

## PHASE 0: PRE-FLIGHT CHECK

### 0.1 Inputs Necessários

```yaml
required_inputs:
  sequence_type:
    description: "Tipo de sequência a criar"
    options:
      - "welcome" (new subscribers)
      - "soap-opera" (story-driven conversion)
      - "launch" (product launch)
      - "sales" (direct sales push)
      - "nurture" (ongoing relationship)
      - "abandoned-cart" (recovery)
      - "re-engagement" (cold subscribers)
    example: "soap-opera"

  product_offer:
    description: "O que está sendo vendido/promovido"
    includes:
      - "Nome do produto"
      - "Preço"
      - "Benefício principal"
      - "Garantia"
    example: "Curso Email Mastery - R$997 - Dobrar taxa de conversão em 90 dias"

  avatar:
    description: "Quem é o público-alvo"
    includes:
      - "Demografia básica"
      - "Maior dor/frustração"
      - "Desejo principal"
      - "Nível de consciência (awareness)"
    example: "Empreendedor digital, frustrado com baixas taxas de abertura, quer lista engajada"

  num_emails:
    description: "Quantidade de emails na sequência"
    guidelines:
      soap_opera: "5 emails (padrão Chaperon)"
      welcome: "5-7 emails"
      launch: "10-15 emails"
      sales: "3-5 emails"
      nurture: "ongoing"
      abandoned_cart: "3 emails"
      re_engagement: "3-5 emails"

optional_inputs:
  origin_story:
    description: "História do fundador/criador para usar"

  case_studies:
    description: "Resultados de clientes para prova social"

  deadline:
    description: "Se há prazo real para oferta"

  tone_preference:
    description: "Tom desejado (casual, profissional, irreverente)"
    default: "conversational with personality"

  copywriter_style:
    description: "Estilo de copywriter preferido"
    options:
      - "chaperon" (story-focused, sophisticated)
      - "settle" (irreverent, daily-email style)
      - "kennedy" (direct, urgency-driven)
```

### 0.2 Output Esperado

```yaml
deliverables:
  per_email:
    - subject_line: "Linha de assunto principal"
    - subject_variations: "2-3 variações para teste"
    - preview_text: "40-90 caracteres"
    - body_copy: "Corpo do email completo"
    - cta: "Call to action"
    - ps: "P.S. statement (se aplicável)"
    - send_timing: "Quando enviar (relativo ao anterior)"
    - goal: "Objetivo do email (awareness, engagement, conversion)"

  sequence_level:
    - sequence_map: "Visão geral da sequência"
    - open_loop_tracker: "Rastreamento de loops abertos/fechados"
    - emotional_journey: "Arco emocional planejado"
    - segmentation_rules: "Regras de segmentação pós-sequência"
```

---

## PHASE 1: SCHWARTZ TIER 0 DIAGNOSIS

### 1.1 MANDATORY: Awareness Level Diagnosis

**ANTES de escrever qualquer email, SEMPRE execute diagnóstico de awareness.**

```yaml
awareness_diagnostic:
  nivel_5_most_aware:
    definition: "Conhecem você, o produto, e só precisam da oferta certa"
    indicators:
      - "Já compraram de você antes"
      - "Seguem você há muito tempo"
      - "Pedem pelo produto"
    sequence_approach:
      length: "3-5 emails curtos"
      style: "Direto ao ponto"
      focus: "Oferta, bônus, urgência"
    example_opening: "Você pediu, aqui está..."

  nivel_4_product_aware:
    definition: "Conhecem seu produto mas não compraram ainda"
    indicators:
      - "Visitaram sales page"
      - "Abandonaram carrinho"
      - "Engajam com conteúdo sobre o produto"
    sequence_approach:
      length: "5-7 emails"
      style: "Benefícios + prova + urgência"
      focus: "Diferenciação, garantia, objeções"
    example_opening: "Você viu [produto], mas ainda não decidiu..."

  nivel_3_solution_aware:
    definition: "Sabem que existem soluções, não conhecem a sua"
    indicators:
      - "Buscam ativamente soluções"
      - "Conhecem concorrentes"
      - "Têm orçamento para investir"
    sequence_approach:
      length: "7-10 emails"
      style: "Soap Opera + diferenciação"
      focus: "Por que VOCÊ é diferente"
    example_opening: "Existem várias formas de resolver [problema]..."

  nivel_2_problem_aware:
    definition: "Sabem que têm o problema, não conhecem soluções"
    indicators:
      - "Expressam frustração"
      - "Tentaram resolver sozinhos"
      - "Não sabem por onde começar"
    sequence_approach:
      length: "10-12 emails"
      style: "Soap Opera completo"
      focus: "Educação + epifania"
    example_opening: "Se você está lutando com [problema]..."

  nivel_1_unaware:
    definition: "Não sabem que têm o problema"
    indicators:
      - "Tráfego frio"
      - "Nunca ouviram falar de você"
      - "Não buscam solução"
    sequence_approach:
      length: "12-15 emails"
      style: "Story-driven, long-form"
      focus: "Despertar consciência do problema"
    example_opening: "Três anos atrás, eu achava que estava tudo bem..."
```

### 1.2 Diagnosis Questions

Responda estas perguntas ANTES de estruturar a sequência:

```yaml
diagnostic_questions:
  question_1:
    ask: "Quem é esta lista? De onde vieram?"
    purpose: "Determinar nível de conhecimento prévio"

  question_2:
    ask: "Eles já conhecem você ou sua marca?"
    purpose: "Ajustar tom e nível de rapport necessário"

  question_3:
    ask: "Eles sabem que têm o problema que você resolve?"
    purpose: "Determinar se precisa educar sobre o problema"

  question_4:
    ask: "Eles conhecem soluções alternativas?"
    purpose: "Determinar necessidade de diferenciação"

  question_5:
    ask: "Eles já demonstraram interesse no seu produto?"
    purpose: "Determinar quão direto pode ser"
```

---

## PHASE 2: SEQUENCE TYPE SELECTION

### 2.1 Sequence Type Decision Matrix

```yaml
sequence_selection_matrix:
  welcome_sequence:
    when_to_use:
      - "Novos assinantes (pós opt-in)"
      - "Primeira interação com a marca"
    length: "5-7 emails"
    timing: "Diário por 5-7 dias"
    structure: "Soap Opera (adaptado)"
    primary_goal: "Build relationship + first offer"
    agents: "Chaperon (structure) + Settle (content)"

  soap_opera_sequence:
    when_to_use:
      - "Cold traffic conversion"
      - "Novos leads que precisam de aquecimento"
      - "Lançamento de produto storytelling"
    length: "5 emails (padrão Chaperon)"
    timing: "Diário"
    structure: "Set Stage → Drama → Epiphany → Benefits → Urgency"
    primary_goal: "Convert cold to buyer through story"
    agents: "Chaperon (primary)"

  launch_sequence:
    when_to_use:
      - "Lançamento de produto/serviço"
      - "Abertura de carrinho"
      - "Evento com data específica"
    length: "10-15 emails"
    timing: "Pre-launch (7-14 dias) + Launch (3-7 dias) + Close (24-48h)"
    structure: "Antecipação → Abertura → Prova → Urgência → Fechamento"
    primary_goal: "Maximize sales in limited window"
    agents: "Kennedy (urgency) + Chaperon (story)"

  sales_sequence:
    when_to_use:
      - "Lista aquecida, pronta para oferta"
      - "Promoção direta"
      - "Follow-up pós-webinar"
    length: "3-5 emails"
    timing: "Diário durante promoção"
    structure: "P.A.S. (Problem-Agitate-Solve)"
    primary_goal: "Direct conversion"
    agents: "Kennedy (primary)"

  nurture_sequence:
    when_to_use:
      - "Manutenção de relacionamento"
      - "Lista pós-welcome"
      - "Evergreen engagement"
    length: "Ongoing (indefinido)"
    timing: "2-3x por semana minimum"
    structure: "Infotainment daily emails"
    primary_goal: "Maintain relationship, soft sell"
    agents: "Settle (primary)"

  abandoned_cart_sequence:
    when_to_use:
      - "Carrinho abandonado"
      - "Checkout iniciado não completado"
    length: "3 emails"
    timing: "1h → 24h → 48-72h"
    structure: "Reminder → Incentive → Final Urgency"
    primary_goal: "Recover lost sale"
    agents: "Kennedy (urgency)"

  re_engagement_sequence:
    when_to_use:
      - "Subscribers inativos (30+ dias sem abrir)"
      - "Lista fria"
    length: "3-5 emails"
    timing: "A cada 2-3 dias"
    structure: "Pattern interrupt → Value → Ultimatum"
    primary_goal: "Reactivate or clean list"
    agents: "Settle (personality)"
```

---

## PHASE 3: SOAP OPERA SEQUENCE (CHAPERON METHOD)

### 3.1 The 5-Email SOS Structure

**EMAIL 1: SET THE STAGE**

```yaml
email_1:
  name: "Set the Stage"
  purpose: "Introduzir personagem, situação, e hint de conflito"
  timing: "Imediatamente após trigger"

  structure:
    opening:
      instruction: "Começar com intriga ou declaração inesperada"
      bad_examples:
        - "Olá, tudo bem?"
        - "Neste email vou compartilhar..."
        - "Espero que você esteja bem..."
      good_examples:
        - "Três anos atrás, eu estava sentado em um café em São Paulo com exatamente R$47 na conta..."
        - "Minha esposa achou que eu tinha enlouquecido quando..."
        - "O email chegou às 3 da manhã. O assunto dizia: 'Precisamos conversar'..."

    character_introduction:
      instruction: "Apresentar o protagonista (você ou cliente)"
      elements:
        - "Quem é essa pessoa"
        - "Por que ela é relatable"
        - "Qual era a situação inicial"

    status_quo:
      instruction: "Estabelecer o 'antes'"
      elements:
        - "Como era a vida"
        - "O que parecia normal"
        - "Hints de que algo vai mudar"

    tension_building:
      instruction: "Semear sinais do problema"
      elements:
        - "Pequenos indícios de problema"
        - "Sensação de que algo vai acontecer"
        - "NÃO revelar o conflito completo"

    cliffhanger:
      instruction: "Terminar com loop aberto específico"
      bad_examples:
        - "Mais amanhã..."
        - "Continua no próximo email..."
      good_examples:
        - "O que aconteceu depois mudou tudo. Mas primeiro, deixa eu te contar sobre o erro que me levou até ali... (amanhã)"
        - "Foi quando meu telefone tocou. A mensagem na tela? Nunca vou esquecer. Te conto amanhã."

  checklist:
    - [ ] Primeira linha captura atenção imediatamente
    - [ ] Não começa com saudação genérica
    - [ ] Personagem claramente identificado
    - [ ] Situação inicial estabelecida
    - [ ] Cliffhanger específico e intrigante
    - [ ] Leitor quer saber o que aconteceu
```

**EMAIL 2: HIGH DRAMA**

```yaml
email_2:
  name: "High Drama"
  purpose: "Intensificar o conflito, fazer sentirem a dor"
  timing: "24 horas após Email 1"

  structure:
    bridge:
      instruction: "Conectar ao Email 1"
      elements:
        - "Recap BREVE (não repetir tudo)"
        - "Transição natural"

    conflict_intensification:
      instruction: "O problema se manifesta claramente"
      elements:
        - "O que deu errado (específico)"
        - "Intensificar, não resolver"
        - "Mostrar consequências"

    emotional_depth:
      instruction: "Fazer o leitor SENTIR a dor"
      techniques:
        - "Detalhes sensoriais"
        - "Diálogo ou pensamentos internos"
        - "Emoção autêntica, não melodrama"
      example: |
        "Eu olhei para a tela do computador. Os números não mentiam.
        Depois de 6 meses trabalhando 12 horas por dia, minha conta
        mostrava exatamente R$342,50. Menos do que quando comecei.
        Minha esposa estava grávida de 7 meses. E eu não conseguia
        nem pagar o aluguel do mês seguinte."

    stakes:
      instruction: "O que está em risco"
      elements:
        - "Consequências claras de não resolver"
        - "Senso de urgência na situação"
        - "Identificação do leitor"

    failed_attempts:
      instruction: "Mostrar soluções que falharam"
      purpose:
        - "Validar frustração do leitor"
        - "Preparar para a epifania"
        - "Eliminar objeções antecipadamente"
      example: |
        "Eu tentei tudo. Cursos. Mentorias. 'Estratégias comprovadas'.
        Cada coisa que tentava parecia funcionar para todo mundo,
        menos para mim. O que tinha de errado comigo?"

    turning_point_tease:
      instruction: "Hint de mudança sem revelar"
      elements:
        - "Esperança surge"
        - "Não revelar a solução"
        - "Cliffhanger para Email 3"

  checklist:
    - [ ] Conecta ao Email 1 naturalmente
    - [ ] Drama é autêntico, não artificial
    - [ ] Leitor sente a dor emocionalmente
    - [ ] Stakes são claros
    - [ ] Soluções convencionais falharam
    - [ ] Cliffhanger promete revelação
```

**EMAIL 3: EPIPHANY**

```yaml
email_3:
  name: "Epiphany / The Turning Point"
  purpose: "O momento 'aha' - descoberta da solução"
  timing: "24 horas após Email 2"

  structure:
    bridge:
      instruction: "Recap rápido do drama"
      elements:
        - "Onde paramos"
        - "Momento de desespero"

    epiphany_moment:
      instruction: "Descrever o momento de descoberta em detalhe"
      elements:
        - "QUANDO aconteceu (específico)"
        - "ONDE estava"
        - "O que disparou a revelação"
      example: |
        "Era 3 da manhã. Eu não conseguia dormir (de novo).
        Estava scrollando no celular quando vi um post de um cara
        que eu nunca tinha ouvido falar. Ele dizia algo que parecia
        loucura: 'O problema não é o que você está fazendo.
        É o que você está fazendo PRIMEIRO.'"

    insight:
      instruction: "Explicar a descoberta claramente"
      elements:
        - "O que foi descoberto"
        - "Por que isso muda tudo"
        - "Princípio por trás"
      example: |
        "Eu estava fazendo TUDO ao contrário. Criando produto primeiro,
        depois procurando quem comprar. Quando deveria estar encontrando
        quem já quer comprar, e só depois criando o que eles querem."

    why_it_works:
      instruction: "Conectar a um princípio maior"
      elements:
        - "Desafiar sabedoria convencional"
        - "Explicar a lógica"
        - "Credibilidade através de clareza"

    early_results:
      instruction: "Mostrar primeiros resultados"
      elements:
        - "Específico (números, datas)"
        - "Crível (não exagerado)"
        - "Relatable (eles podem fazer também)"
      example: |
        "Na primeira semana, testei com 3 posts diferentes.
        47 pessoas responderam dizendo 'EU QUERO'.
        Em 30 dias: primeira venda. R$497.
        Foi pouco. Mas foi ALGO. E eu sabia que tinha algo real."

    transformation_tease:
      instruction: "Preparar para benefícios completos"
      cliffhanger: |
        "Mas isso era só o começo. O que aconteceu nos 90 dias seguintes
        superou qualquer coisa que eu poderia imaginar. Amanhã te conto
        os resultados completos - e algo que ninguém esperava."

  checklist:
    - [ ] Momento de epifania é específico e vívido
    - [ ] Insight faz sentido lógico
    - [ ] Primeiros resultados são críveis
    - [ ] Leitor tem seu próprio "aha"
    - [ ] Cliffhanger promete mais benefícios
```

**EMAIL 4: HIDDEN BENEFITS**

```yaml
email_4:
  name: "Hidden Benefits / The Transformation"
  purpose: "Mostrar resultados completos e benefícios inesperados"
  timing: "24 horas após Email 3"

  structure:
    bridge:
      instruction: "Recap da epifania"
      elements:
        - "O insight"
        - "Primeiros resultados"

    full_transformation:
      instruction: "Before/After completo"
      elements:
        - "Resultados específicos (números)"
        - "Mudanças tangíveis"
        - "Timeline realista"
      example: |
        "90 dias depois daquela madrugada:
        - De R$342 para R$27.000/mês
        - De 12 horas/dia para 4 horas/dia
        - De ansiedade constante para paz de espírito"

    hidden_benefits:
      instruction: "Benefícios que não esperavam"
      elements:
        - "Surpresas positivas"
        - "Efeitos colaterais bons"
        - "O que ninguém conta"
      example: |
        "O que eu não esperava:
        - Minha esposa voltou a sorrir (sem eu perceber, ela estava preocupada)
        - Consegui levar minha família para Disney (sonho antigo)
        - Outros empreendedores começaram a ME perguntar como fiz"

    social_proof:
      instruction: "Outros resultados (se disponível)"
      elements:
        - "Depoimentos de clientes/alunos"
        - "Resultados variados (diferentes contextos)"
        - "Validação do método"

    objection_handling:
      instruction: "Endereçar objeções através da história"
      technique: "Mostrar que você também teve a mesma dúvida"
      example: |
        "Eu também pensei: 'Isso só funciona pra ele porque...'
        Foi quando decidi documentar tudo e ensinar pra outras 10 pessoas.
        8 delas conseguiram resultado em 60 dias."

    product_tease:
      instruction: "Transição natural para oferta"
      elements:
        - "Menção de que sistematizou"
        - "Hint de que existe uma forma de acessar"
        - "Natural, não abrupto"

    cliffhanger:
      instruction: "Preparar para Email 5"
      example: |
        "Recebi tantos pedidos que decidi criar algo. Amanhã vou te
        mostrar exatamente o que é - e dar uma chance única para você..."

  checklist:
    - [ ] Transformação completa documentada
    - [ ] Benefícios inesperados revelados
    - [ ] Prova social incluída
    - [ ] Objeções endereçadas através da história
    - [ ] Transição para oferta é natural
    - [ ] Leitor quer o que você tem
```

**EMAIL 5: URGENCY**

```yaml
email_5:
  name: "Urgency / The Call to Action"
  purpose: "Fechar loops, apresentar oferta, criar urgência"
  timing: "24 horas após Email 4"

  structure:
    journey_recap:
      instruction: "Resumir a jornada brevemente"
      elements:
        - "Onde começou"
        - "Os desafios"
        - "A descoberta"
        - "Os resultados"
      length: "2-3 parágrafos máximo"

    loop_closure:
      instruction: "FECHAR TODOS os loops abertos"
      critical: "Nenhuma promessa deve ficar pendente"
      checklist:
        - [ ] Loop principal (história) fechado
        - [ ] Todos os loops secundários fechados
        - [ ] Satisfação emocional do leitor

    offer_presentation:
      instruction: "Apresentar a oferta como conclusão natural"
      elements:
        - "O que é o produto/serviço"
        - "Conexão direta com a história"
        - "Não parecer venda forçada"
      example: |
        "Depois de ajudar mais de 500 pessoas com esse método,
        sistematizei tudo no [Nome do Produto]. É exatamente
        o que eu gostaria de ter encontrado naquela madrugada."

    value_stack:
      instruction: "Mostrar o que está incluído"
      elements:
        - "Componentes principais"
        - "Benefícios de cada um"
        - "Valor percebido > preço"
      format: |
        O que você recebe:
        - [Componente 1] (valor: R$X) - [benefício]
        - [Componente 2] (valor: R$X) - [benefício]
        - [Componente 3] (valor: R$X) - [benefício]
        - [Bônus] (valor: R$X) - [benefício]
        Valor total: R$X
        Seu investimento hoje: R$Y

    risk_reversal:
      instruction: "Garantia que remove medo"
      elements:
        - "Tipo de garantia"
        - "Duração"
        - "Processo de reembolso"
      example: |
        "Garantia Incondicional de 30 Dias: Se você não ver resultados,
        ou simplesmente mudar de ideia, basta um email e devolvemos
        100% do seu investimento. Sem perguntas. Sem burocracia."

    urgency_element:
      instruction: "Razão GENUÍNA para agir agora"
      types:
        deadline: "Oferta expira [data/hora específica]"
        quantity: "Apenas [X] vagas disponíveis"
        bonus_expiring: "Bônus [X] disponível até [data]"
        price_increase: "Preço sobe para [X] em [data]"
      critical: "Urgência DEVE ser real e cumprida"

    call_to_action:
      instruction: "CTA claro e direto"
      elements:
        - "Ação específica (clique, inscreva-se)"
        - "Link visível"
        - "Repetido 2-3 vezes"
      example: |
        "Clique aqui para garantir sua vaga agora:
        [LINK]

        (Lembre-se: apenas 50 vagas e já foram preenchidas 34)"

    ps_statement:
      instruction: "P.S. que reforça elementos-chave"
      include:
        - "Urgência"
        - "Garantia"
        - "Benefício principal"
      example: |
        "P.S. Essa oferta fecha domingo à meia-noite. Depois disso,
        o preço sobe de R$497 para R$997 e os bônus desaparecem.

        P.P.S. Lembre-se da garantia: se não funcionar, você não paga."

  checklist:
    - [ ] Jornada resumida brevemente
    - [ ] TODOS os loops fechados
    - [ ] Oferta apresentada naturalmente
    - [ ] Value stack claro
    - [ ] Garantia forte
    - [ ] Urgência genuína
    - [ ] CTA claro e repetido
    - [ ] P.S. reforça mensagem
```

---

## PHASE 4: INFOTAINMENT METHODOLOGY (SETTLE)

### 4.1 Infotainment Formula for Each Email

```yaml
infotainment_components:
  entertainment_layer:
    weight: "60% do email"
    elements:
      stories:
        - "Anedotas pessoais"
        - "Histórias de clientes"
        - "Ilustrações fictícias (quando claro)"
      humor:
        - "Dry humor"
        - "Auto-depreciação"
        - "Observações irônicas"
      controversy:
        - "Tomar posição forte"
        - "Ir contra sabedoria convencional"
        - "Opiniões que dividem"
      pop_culture:
        - "Referências a filmes/séries"
        - "Eventos atuais"
        - "Tendências culturais"
      behind_scenes:
        - "Bastidores do negócio"
        - "Vida pessoal (relevante)"
        - "Processos internos"
      rants:
        - "Pet peeves"
        - "O que te irrita"
        - "Críticas construtivas"
    purpose: "Fazer quererem LER"

  information_layer:
    weight: "30% do email"
    elements:
      insight:
        - "UM insight chave por email"
        - "Não sobrecarregar"
      tip:
        - "Dica prática aplicável"
        - "Algo que podem fazer HOJE"
      principle:
        - "Framework ou princípio"
        - "Regra que podem usar"
      example:
        - "Case study"
        - "Antes/depois"
        - "Demonstração"
    purpose: "Dar VALOR real"

  sales_layer:
    weight: "10% do email"
    elements:
      transition:
        - "Natural, não abrupto"
        - "Conectado ao conteúdo"
      cta:
        - "Claro e direto"
        - "Sem pedir desculpas"
        - "Urgência quando apropriado"
    purpose: "CONVERTER"
```

### 4.2 The 3X Personality Amplification

```yaml
personality_amplification:
  principle: |
    "Se você escreve do jeito que fala, vai parecer sem graça.
    Você precisa amplificar sua personalidade em 3x para parecer NORMAL.
    E 5x para parecer INTERESSANTE."

  process:
    step_1:
      name: "Identifique Sua Voz Natural"
      questions:
        - "O que seus amigos dizem sobre como você fala?"
        - "Que frases você repete constantemente?"
        - "Que assuntos te animam?"
        - "Qual seu senso de humor?"
        - "O que te irrita?"

    step_2:
      name: "Multiplique por 3"
      examples:
        - original: "Não gosto de marketing complicado"
          amplified: "ODEIO marketing complicado com a força de mil sóis"
        - original: "Esse produto é bom"
          amplified: "Esse é o melhor produto que já criei e quem não pegar está deixando dinheiro na mesa"
        - original: "Discordo dessa abordagem"
          amplified: "Essa abordagem é completa besteira e aqui está o porquê..."

    step_3:
      name: "Desenvolva Elementos de Assinatura"
      elements:
        - "Frases de assinatura que você repete"
        - "Running jokes ou temas recorrentes"
        - "Opiniões fortes sobre tópicos comuns"
        - "Quirks pessoais para referenciar"
        - "Terminologia única"
```

### 4.3 Infotainment Test

Antes de enviar qualquer email, passe pelo teste:

```yaml
infotainment_test:
  question_1: "Eu leria isso se não estivesse vendendo nada?"
  question_2: "Isso me faz sorrir, pensar, ou sentir algo?"
  question_3: "Tem um insight real aqui?"
  question_4: "Meu melhor cliente encaminharia isso para um amigo?"

  scoring:
    pass: "3 de 4 = SIM"
    fail: "Menos de 3 = Reescrever"
```

---

## PHASE 5: URGENCY ENGINEERING (KENNEDY)

### 5.1 Types of Urgency

```yaml
urgency_types:
  deadline_driven:
    description: "Vinculado a data/hora específica"
    examples:
      - "Oferta expira sexta às 23:59"
      - "Inscrições fecham dia 31 de dezembro"
      - "Preço aumenta em 1º de janeiro"
    strength: "Alta - se deadline for real e cumprido"

  quantity_limited:
    description: "Número limitado disponível"
    examples:
      - "Apenas 50 vagas"
      - "Primeiros 100 compradores recebem bônus"
      - "Uma vaga por cidade (B2B exclusividade)"
    strength: "Muito alta - cria competição"

  bonus_expiring:
    description: "Bônus removido após deadline"
    examples:
      - "Compre hoje e ganhe [bônus] GRÁTIS"
      - "Primeiros 25 pedidos recebem [bônus]"
    strength: "Média-alta - incentivo extra"

  price_increase:
    description: "Preço sobe após deadline"
    examples:
      - "Preço de fundador termina domingo"
      - "Preço beta de R$497 - varejo será R$997"
    strength: "Alta - medo de pagar mais"

  event_unique:
    description: "Oportunidade única"
    examples:
      - "Este workshop não será repetido"
      - "Oportunidade única na vida"
    strength: "Máxima - FOMO maximizado"
```

### 5.2 Countdown Sequence Template

```yaml
countdown_template:
  day_7:
    message: "50 vagas disponíveis para [evento/programa]..."
    focus: "Introduzir oferta e escassez"

  day_5:
    message: "33 vagas preenchidas - 17 restantes..."
    focus: "Mostrar movimento, prova social"

  day_3:
    message: "Apenas 17 vagas restantes - indo rápido..."
    focus: "Intensificar urgência"

  day_1:
    message: "ÚLTIMAS 5 VAGAS - deadline hoje à noite..."
    focus: "Urgência máxima"

  final_hours:
    message: "2 vagas restantes - fecha em 3 horas..."
    focus: "Última chamada"

  closed:
    message: "FECHADO. Lista de espera aberta para próxima turma."
    focus: "Confirmar que deadline foi cumprido"

  critical_rule: |
    CRÍTICO: Se você disse que fecha, FECHA.
    Sem extensões. Nunca. Jamais.
    Urgência falsa destrói confiança permanentemente.
```

### 5.3 P.S. Strategy (Kennedy)

```yaml
ps_strategy:
  principle: "90% dos leitores pulam direto para o P.S. Faça valer."

  ps_must_include:
    element_1: "Reafirmar oferta principal"
    element_2: "Urgência (deadline, escassez)"
    element_3: "Lembrete de bônus"
    element_4: "Lembrete de garantia"
    element_5: "Informação de contato/link"

  template: |
    P.S. Lembre-se, essa oferta expira [DATA] às [HORA]. Depois disso,
    o preço sobe de [PREÇO ATUAL] para [PREÇO FUTURO] e os bônus
    desaparecem. Se você é sério sobre [RESULTADO], não deixe passar.

    P.P.S. Você está protegido pela nossa Garantia [NOME] de [DIAS] dias.
    Se não funcionar, você não paga. Simples assim.
```

---

## PHASE 6: SUBJECT LINE CREATION

### 6.1 Subject Line Categories

```yaml
subject_line_categories:
  curiosity:
    principle: "Criar loop aberto que demanda fechamento"
    examples:
      - "O erro de R$50.000"
      - "O que encontrei na minha pasta de spam"
      - "Ele disse não"
      - "Estranho"
      - "Isso é constrangedor..."
    structure: "Informação incompleta que cria tensão"

  story_tease:
    principle: "Sugerir história sem revelar"
    examples:
      - "A vez que quase fui preso"
      - "Meu contador acha que sou louco"
      - "O que aconteceu na cafeteria"
      - "Minha esposa me olhou como se eu fosse maluco"

  controversy:
    principle: "Tomar posição que gera reação"
    examples:
      - "Por que odeio templates"
      - "Sua lista de email é grande demais"
      - "O pior conselho de marketing de todos os tempos"
      - "Especialistas estão errados sobre [X]"

  direct:
    principle: "Às vezes simples funciona"
    examples:
      - "Pergunta rápida"
      - "Sobre sua lista de email"
      - "Importante"
      - "[Nome], uma pergunta"

  personal:
    principle: "Parecer nota de um amigo"
    examples:
      - "re: nossa conversa"
      - "Estava pensando em você"
      - "Isso me lembrou de você"
      - "Você viu isso?"

  benefit:
    principle: "Prometer resultado específico"
    examples:
      - "Como [RESULTADO] em [TEMPO]"
      - "[NÚMERO] maneiras de [BENEFÍCIO]"
      - "O segredo para [DESEJO]"

  urgency:
    principle: "Criar senso de tempo limitado"
    examples:
      - "[X] horas restantes"
      - "Última chance: [OFERTA]"
      - "Fecha hoje à meia-noite"
      - "Amanhã sobe para [PREÇO]"
```

### 6.2 Subject Line Rules

```yaml
subject_line_rules:
  rule_1: "Mais curto geralmente é melhor (menos de 50 caracteres)"
  rule_2: "Minúsculas frequentemente superam Title Case"
  rule_3: "Sem clickbait - deve conectar com conteúdo do email"
  rule_4: "Teste contra seu swipe file"
  rule_5: "Na dúvida, curiosidade vence"
  rule_6: "Preview text complementa, não repete subject"
```

---

## PHASE 7: SEQUENCE TEMPLATES BY TYPE

### 7.1 Welcome Sequence Template

```yaml
welcome_sequence:
  email_0:
    timing: "Imediato"
    subject: "[Download] Seu [Lead Magnet] está aqui"
    purpose: "Entregar + definir expectativas"
    structure:
      - "Link para download"
      - "O que esperar de mim"
      - "Por que sou diferente"
      - "Teaser do próximo email"

  email_1:
    timing: "Dia 1"
    subject: "[Use curiosity or story]"
    purpose: "Sua história de origem"
    structure: "SOS Email 1 - Set the Stage"

  email_2:
    timing: "Dia 2"
    subject: "[Use drama or problem]"
    purpose: "O problema que você resolve"
    structure: "SOS Email 2 - High Drama"

  email_3:
    timing: "Dia 3"
    subject: "[Use revelation or epiphany]"
    purpose: "Sua descoberta"
    structure: "SOS Email 3 - Epiphany"

  email_4:
    timing: "Dia 4"
    subject: "[Use results or proof]"
    purpose: "Resultados e prova"
    structure: "SOS Email 4 - Hidden Benefits"

  email_5:
    timing: "Dia 5"
    subject: "[Use urgency or opportunity]"
    purpose: "Primeira oferta"
    structure: "SOS Email 5 - Urgency"

  email_6_plus:
    timing: "Dia 6+"
    purpose: "Transição para nurture ou daily"
    options:
      - "Entrar em sequência evergreen"
      - "Juntar-se à lista diária"
      - "Segmentar por interesse"
```

### 7.2 Launch Sequence Template

```yaml
launch_sequence:
  pre_launch_phase:
    duration: "7-14 dias antes"
    emails:
      pl_1:
        timing: "D-14"
        subject: "Algo grande está vindo..."
        content: "Teaser + backstory"
        goal: "Criar curiosidade"

      pl_2:
        timing: "D-10"
        subject: "Por que isso me manteve acordado por 6 meses"
        content: "Sua jornada criando + por que importa"
        goal: "Conexão emocional"

      pl_3:
        timing: "D-7"
        subject: "O problema real (que ninguém fala)"
        content: "Deep dive no problema"
        goal: "Agitar a dor"

      pl_4:
        timing: "D-4"
        subject: "Uma prévia do que está vindo"
        content: "Glimpse da solução"
        goal: "Criar desejo"

      pl_5:
        timing: "D-2"
        subject: "Suas perguntas respondidas"
        content: "FAQ + objeções"
        goal: "Remover barreiras"

  launch_phase:
    duration: "3-7 dias"
    emails:
      l_1:
        timing: "D-Day (manhã)"
        subject: "Portas abertas: [Nome do Produto]"
        content: "Anúncio completo + todos os detalhes"
        goal: "Primeiros compradores"

      l_2:
        timing: "D+1"
        subject: "[Nome] fez [Resultado] em [Tempo]"
        content: "Case study / testimonial"
        goal: "Prova social"

      l_3:
        timing: "D+2"
        subject: "Uma coisa que esqueci de mencionar..."
        content: "Deep dive em benefício específico"
        goal: "Endereçar segmento específico"

      l_4:
        timing: "D+3"
        subject: "Sua pergunta sobre [Objeção Comum]"
        content: "FAQ / objection handling"
        goal: "Remover barreiras finais"

      l_5:
        timing: "D+4"
        subject: "48 horas - e uma confissão"
        content: "Warning + personal note"
        goal: "Intensificar urgência"

  close_phase:
    duration: "24-48 horas"
    emails:
      c_1:
        timing: "Último dia (manhã)"
        subject: "ÚLTIMO DIA: [Produto]"
        content: "Recap + urgência final"
        goal: "Final push"

      c_2:
        timing: "Último dia (tarde)"
        subject: "6 horas restantes"
        content: "Countdown + bônus reminder"
        goal: "Urgência máxima"

      c_3:
        timing: "Último dia (noite)"
        subject: "Última chamada (fecha em 2 horas)"
        content: "Final email"
        goal: "Últimas conversões"
```

### 7.3 Abandoned Cart Sequence Template

```yaml
abandoned_cart_sequence:
  email_1:
    timing: "1 hora após abandono"
    subject: "Você esqueceu algo..."
    tone: "Helpful, not pushy"
    structure:
      opening: "Vi que você estava olhando [produto]..."
      content: "Link direto de volta"
      cta: "Completar sua compra"
    length: "Muito curto - 3-4 linhas"

  email_2:
    timing: "24 horas"
    subject: "Ainda pensando?"
    tone: "Empático + valor adicional"
    structure:
      opening: "Entendo. É uma decisão importante."
      content: |
        - Endereçar objeção comum
        - Adicionar incentivo (bônus ou desconto)
        - Reforçar garantia
      cta: "Aproveitar antes que expire"

  email_3:
    timing: "48-72 horas"
    subject: "Última chance de salvar seu carrinho"
    tone: "Urgente mas não desesperado"
    structure:
      opening: "Seu carrinho expira em [X] horas"
      content: |
        - Urgência final
        - Benefício principal
        - Garantia
      cta: "Finalizar agora ou perder"
```

---

## PHASE 8: QUALITY CHECKLIST

### 8.1 Per-Email Checklist

```yaml
email_checklist:
  hook:
    - [ ] Primeira linha captura atenção imediatamente
    - [ ] NÃO começa com saudação genérica
    - [ ] Cria curiosidade ou intriga
    - [ ] Seria impossível NÃO continuar lendo

  content:
    - [ ] Entretém enquanto informa (infotainment)
    - [ ] Personalidade presente em todo o email
    - [ ] Parágrafos curtos (1-3 linhas máximo)
    - [ ] Linguagem conversacional, não corporativa
    - [ ] Um insight ou lição clara

  structure:
    - [ ] Transição natural para pitch
    - [ ] Pitch conectado ao conteúdo
    - [ ] CTA único e claro
    - [ ] CTA não pede desculpas

  technical:
    - [ ] Subject line < 50 caracteres
    - [ ] Preview text complementa subject (40-90 chars)
    - [ ] Links testados e funcionando
    - [ ] Formatação correta (sem quebras estranhas)

  emotional:
    - [ ] Leitor sente algo (não é neutro)
    - [ ] Cliffhanger faz querer o próximo (se não for último)
    - [ ] Valor percebido > tempo investido lendo
```

### 8.2 Sequence-Level Checklist

```yaml
sequence_checklist:
  story_arc:
    - [ ] Início, meio e fim claros
    - [ ] Jornada emocional definida
    - [ ] Protagonista relatable
    - [ ] Conflito autêntico (não fabricado)
    - [ ] Resolução satisfatória

  open_loops:
    - [ ] Todos os loops rastreados
    - [ ] Todos os loops fechados até o final
    - [ ] Cliffhangers em cada email (exceto último)
    - [ ] Promessas cumpridas

  conversion_elements:
    - [ ] Oferta clara apresentada
    - [ ] Urgência genuína incluída
    - [ ] Objeções endereçadas
    - [ ] Garantia/risk reversal presente
    - [ ] Value stack evidente

  technical:
    - [ ] Timing entre emails correto
    - [ ] Segmentação configurada
    - [ ] Compradores removidos da sequência promocional
    - [ ] Tags/automações funcionando
```

### 8.3 Final Pre-Launch Checklist

```yaml
pre_launch_final:
  content_review:
    - [ ] Li toda a sequência em voz alta
    - [ ] História é envolvente do início ao fim
    - [ ] Todos os loops estão fechados
    - [ ] Cada email faz querer ler o próximo
    - [ ] Oferta é conclusão natural da história

  urgency_validation:
    - [ ] Urgência é genuína
    - [ ] Deadline pode e será cumprido
    - [ ] Escassez é real

  technical_check:
    - [ ] Todos os links testados
    - [ ] Preview em diferentes clientes de email
    - [ ] Mobile-friendly
    - [ ] Timing configurado corretamente

  final_question:
    - [ ] Eu ficaria orgulhoso de enviar isso?
```

---

## PHASE 9: OPEN LOOP TRACKER

### 9.1 Loop Tracking Template

```yaml
open_loop_tracker:
  format:
    - loop_id: "ID único"
    - opened_in: "Email onde foi aberto"
    - description: "Descrição do loop"
    - closed_in: "Email onde foi fechado"
    - status: "[ ] Fechado"

  example:
    - loop_id: 1
      opened_in: "Email 1"
      description: "O que aconteceu naquela madrugada"
      closed_in: "Email 3"
      status: "[x] Fechado"

    - loop_id: 2
      opened_in: "Email 1"
      description: "O erro que cometi"
      closed_in: "Email 2"
      status: "[x] Fechado"

    - loop_id: 3
      opened_in: "Email 2"
      description: "A descoberta que mudou tudo"
      closed_in: "Email 3"
      status: "[x] Fechado"

    - loop_id: 4
      opened_in: "Email 3"
      description: "Os resultados completos"
      closed_in: "Email 4"
      status: "[x] Fechado"

    - loop_id: "MAIN"
      opened_in: "Email 1"
      description: "História principal (jornada completa)"
      closed_in: "Email 5"
      status: "[x] Fechado"

  rule: |
    CRÍTICO: Todos os loops DEVEM estar fechados antes de enviar.
    Loops não fechados = Frustração do leitor = Perda de confiança
```

---

## PHASE 10: EMOTIONAL JOURNEY MAP

### 10.1 Emotional Arc Template

```yaml
emotional_journey:
  email_1:
    target_emotion: "Curiosidade, identificação"
    techniques:
      - "Hook que intriga"
      - "Personagem relatable"
      - "Situação familiar"
    measure: "Leitor pensa: 'Isso parece comigo...'"

  email_2:
    target_emotion: "Empatia, tensão, dor compartilhada"
    techniques:
      - "Detalhes sensoriais"
      - "Stakes claros"
      - "Drama autêntico"
    measure: "Leitor sente a dor, torce pelo protagonista"

  email_3:
    target_emotion: "Esperança, 'aha!', revelação"
    techniques:
      - "Momento de epifania vívido"
      - "Insight claro e aplicável"
      - "Primeiros resultados"
    measure: "Leitor tem seu próprio 'aha moment'"

  email_4:
    target_emotion: "Desejo, prova, confiança"
    techniques:
      - "Transformação completa"
      - "Benefícios inesperados"
      - "Prova social"
    measure: "Leitor pensa: 'Eu quero isso para mim'"

  email_5:
    target_emotion: "Urgência, decisão, ação"
    techniques:
      - "Oferta irresistível"
      - "Risco removido (garantia)"
      - "Deadline claro"
    measure: "Leitor age (compra, clica, inscreve)"
```

---

## APPENDIX A: COPYWRITER AGENT SELECTION

### A.1 When to Use Each Agent

```yaml
agent_selection:
  chaperon:
    use_for:
      - "Estrutura de sequência"
      - "Soap Opera Sequences"
      - "Open loops e cliffhangers"
      - "Cold traffic conversion"
      - "Serialized storytelling"
    style: "Sofisticado, story-driven, psicológico"

  settle:
    use_for:
      - "Conteúdo de cada email"
      - "Daily email style"
      - "Infotainment approach"
      - "Personalidade e voz"
      - "Polarização"
    style: "Irreverente, anti-corporativo, personality-driven"

  kennedy:
    use_for:
      - "Urgência e conversão"
      - "CTAs e deadlines"
      - "P.S. statements"
      - "Sales sequences"
      - "Launch sequences"
    style: "Direto, sem rodeios, resultados-focado"

  schwartz:
    use_for:
      - "Diagnóstico inicial (awareness level)"
      - "Determinar comprimento da sequência"
      - "Escolher abordagem"
    style: "Analítico, estratégico"
```

---

## APPENDIX B: SEQUENCE LENGTH GUIDE

### B.1 Length by Awareness Level

```yaml
sequence_length_guide:
  most_aware:
    awareness_level: 5
    sequence_length: "3-5 emails"
    email_length: "Curto (200-400 palavras)"
    approach: "Direto à oferta"

  product_aware:
    awareness_level: 4
    sequence_length: "5-7 emails"
    email_length: "Médio (400-600 palavras)"
    approach: "Benefícios + prova + urgência"

  solution_aware:
    awareness_level: 3
    sequence_length: "7-10 emails"
    email_length: "Médio-longo (500-800 palavras)"
    approach: "Diferenciação + SOS"

  problem_aware:
    awareness_level: 2
    sequence_length: "10-12 emails"
    email_length: "Longo (600-1000 palavras)"
    approach: "SOS completo + educação"

  unaware:
    awareness_level: 1
    sequence_length: "12-15 emails"
    email_length: "Muito longo (800-1500 palavras)"
    approach: "Despertar consciência + SOS estendido"
```

---

## APPENDIX C: COMMON MISTAKES

### C.1 Mistakes to Avoid

```yaml
common_mistakes:
  structural_mistakes:
    - "Começar com pitch em vez de história"
    - "Sem cliffhangers entre emails"
    - "Loops abertos não fechados"
    - "Timing inconsistente"
    - "CTA não claro ou múltiplos CTAs"

  content_mistakes:
    - "Tom muito corporativo/profissional"
    - "Sem personalidade (genérico)"
    - "Só venda, sem valor"
    - "Muito longo sem propósito"
    - "Genérico, não específico"

  strategy_mistakes:
    - "Mesma mensagem para todos (sem segmentação)"
    - "Urgência falsa (destrói confiança)"
    - "Sem sistema de follow-up"
    - "Não rastrear resultados"
    - "Desistir cedo demais"

  technical_mistakes:
    - "Subject lines muito longas"
    - "Links quebrados"
    - "Formatação ruim em mobile"
    - "Sem preview text"
    - "Automações mal configuradas"
```

---

## APPENDIX D: QUICK REFERENCE

### D.1 The 5 Emails at a Glance

```
EMAIL 1: SET THE STAGE
→ Quem é o personagem?
→ Qual a situação inicial?
→ O que vai mudar?
→ CLIFFHANGER: O que aconteceu?

EMAIL 2: HIGH DRAMA
→ O que deu errado?
→ Quão ruim foi?
→ O que ele tentou?
→ CLIFFHANGER: O que ele descobriu?

EMAIL 3: EPIPHANY
→ Qual foi o insight?
→ Por que funciona?
→ Quais os primeiros resultados?
→ CLIFFHANGER: O que mais mudou?

EMAIL 4: HIDDEN BENEFITS
→ Qual a transformação completa?
→ Quais benefícios inesperados?
→ Outros tiveram resultados?
→ CLIFFHANGER: Como você pode ter isso?

EMAIL 5: URGENCY
→ Recap da jornada
→ Todos os loops fechados
→ Apresenta a oferta
→ CTA: O que fazer agora
```

### D.2 Infotainment Formula

```
60% ENTERTAINMENT (stories, humor, controversy)
+ 30% INFORMATION (one insight, practical tip)
+ 10% SALES (natural transition, clear CTA)
= INFOTAINMENT
```

### D.3 Urgency Countdown

```
D-7:  "50 vagas disponíveis"
D-5:  "33 preenchidas, 17 restantes"
D-3:  "Apenas 17 vagas"
D-1:  "Últimas 5 vagas"
H-3:  "2 restantes, fecha em 3h"
DONE: "FECHADO. Lista de espera."
```

---

---

# ═══════════════════════════════════════════════════════════════════════════
# CONTEÚDO EXTRAÍDO DAS FONTES PRIMÁRIAS - DAN KENNEDY
# Data: 2026-01-23 | Enrichment Phase ENR-008
# Fontes: ep_41_no_bs_direct_marketing.md, ep_07_clients_customers_patients_for_life.md,
#         kennedy_templates.md, takeaway_selling_email.md, frameworks.md, EXTRAÇÃO_DEEP.md
# ═══════════════════════════════════════════════════════════════════════════

## KENNEDY DIRECT MAIL PRINCIPLES (Extraído)

### K.1 The Direct Response Formula

> "Direct response marketing is marketing that demands an immediate, specific, measurable response from the prospect."
> [Fonte: ep_41_no_bs_direct_marketing.md]

```yaml
kennedy_direct_response_formula:
  sequence: "Interrupt → Engage → Educate → Offer → Call to Action"

  interrupt:
    purpose: "Break through clutter, get attention"
    where: "Headlines, opening lines, hooks"
    principle: "Direct response marketing is bold and specific, not polite and tasteful"

  engage:
    purpose: "Keep attention by entering the conversation in prospect's mind"
    technique: "Demonstrate you understand their situation, problems, desires"

  educate:
    purpose: "Strategic education that leads to your solution"
    warning: "This isn't feature-dumping. Position yourself as expert, build trust"

  offer:
    purpose: "Specific, compelling, easy to understand, hard to refuse"

  call_to_action:
    purpose: "Tell them exactly what to do next"
    rule: "Make it easy for them to do it"
```

### K.2 The Seven Pillars of Direct Response

> "These pillars are the foundation of every effective direct response piece."
> [Fonte: ep_41_no_bs_direct_marketing.md]

```yaml
kennedy_seven_pillars:
  pillar_1_specific_target:
    principle: "Speak to specific people with specific problems, not 'everyone'"
    email_application: "Each sequence must have a clearly defined avatar"

  pillar_2_clear_value_proposition:
    principle: "What exactly are you offering? What specific result?"
    email_application: "State the transformation in the first email"

  pillar_3_compelling_offer:
    principle: "A great offer can overcome weak copy. Great copy cannot overcome weak offer"
    components: "Product + price + terms + bonuses + guarantee + urgency"

  pillar_4_strong_headlines:
    principle: "The headline determines whether people read further"
    email_application: "Subject line = headline. Flag your audience, promise benefit"

  pillar_5_risk_reversal:
    principle: "Assume all the risk in the transaction"
    examples: "Strong guarantees, free trials, money-back promises"
    email_application: "Mention guarantee in Email 5 (Urgency) and P.S."

  pillar_6_urgency_scarcity:
    principle: "There must be a reason to act now, not later"
    warning: "Without urgency, prospects will procrastinate forever"

  pillar_7_multiple_followups:
    principle: "Most prospects don't buy on first contact"
    quote: "You need systematic follow-up to convert prospects"
```

### K.3 Kennedy's Follow-Up System (Direct Mail → Email)

> "Most sales happen after multiple touches."
> [Fonte: ep_41_no_bs_direct_marketing.md, ep_07_clients_customers_patients_for_life.md]

```yaml
kennedy_followup_system:
  immediate_followup:
    timing: "Within minutes or hours of initial inquiry"
    email_equivalent: "Email 0 - Delivery/Welcome"
    content: "Confirmation, delivery, set expectations"

  shortterm_followup:
    timing: "Daily or weekly for the first month"
    email_equivalent: "SOS Emails 1-5 (daily)"
    content: "Story, value, education, offer progression"

  longterm_followup:
    timing: "Monthly or quarterly to stay top-of-mind"
    email_equivalent: "Nurture sequence (ongoing)"
    content: "Infotainment, value delivery, soft sell"

  reactivation_campaigns:
    timing: "When customer goes dormant (30+ days inactive)"
    email_equivalent: "Re-engagement sequence"
    content: "Pattern interrupt, special offers, problem-solving"
```

### K.4 Kennedy Communication Matrix (Timing Guidelines)

> "Your retention system requires multiple touchpoints."
> [Fonte: ep_07_clients_customers_patients_for_life.md]

```yaml
kennedy_communication_matrix:
  phase_immediate:
    timing: "0-7 days"
    touchpoints:
      - "Purchase/opt-in confirmation"
      - "Delivery/access instructions"
      - "Quick start guide"
      - "Success tips"
    email_count: "3-5 emails"

  phase_shortterm:
    timing: "1-4 weeks"
    touchpoints:
      - "Progress check-ins"
      - "Additional resources"
      - "Success stories"
      - "Next-step recommendations"
    email_count: "4-8 emails"

  phase_mediumterm:
    timing: "1-6 months"
    touchpoints:
      - "Regular newsletters"
      - "Exclusive offers"
      - "Educational content"
      - "Community access"
    frequency: "2-3x per week minimum"

  phase_longterm:
    timing: "6+ months"
    touchpoints:
      - "Loyalty rewards"
      - "VIP programs"
      - "Referral incentives"
      - "Advanced solutions"
    frequency: "Weekly minimum"
```

### K.5 Kennedy's Reactivation Strategy

> "Even with the best retention system, some customers will go dormant. Here's how to bring them back."
> [Fonte: ep_07_clients_customers_patients_for_life.md]

```yaml
kennedy_reactivation_strategy:
  email_1_surprise_contact:
    purpose: "Reach out with no sales pitch"
    content: "Just check in, see how they're doing, offer help"
    timing: "Day 1 of reactivation"
    tone: "Personal, helpful, non-salesy"

  email_2_we_miss_you:
    purpose: "Acknowledge absence, express that you miss them"
    content: "Special 'come back' incentive"
    timing: "Day 3-4"
    tone: "Warm, with urgency on incentive"

  email_3_problem_solution:
    purpose: "Identify new problems they might be facing"
    content: "Position yourself as the solution"
    timing: "Day 5-7"
    tone: "Helpful, value-forward"

  email_4_exclusive_invitation:
    purpose: "Invite them to something special"
    content: "VIP event, early access, exclusive content"
    timing: "Day 10-14"
    tone: "Exclusive, final attempt"

  email_5_final_ultimatum:
    purpose: "Clean the list or get response"
    content: "'Should I remove you?' approach"
    timing: "Day 21+"
    tone: "Direct, respectful closure"
```

### K.6 Kennedy Email Templates (Extraídos)

#### Template 1: The "Disappearing Bonus" Email

> [Fonte: kennedy_templates.md]

```
Subject: [First Name], your bonus expires at midnight

[First Name],

Quick note -

The [bonus name] bonus I told you about yesterday
expires at midnight tonight.

After that, it's gone forever.

[Link]

Remember, this bonus alone has helped [specific result].

Don't miss out.

[Signature]

P.S. I can only include this bonus for the next [X] hours
because [legitimate reason]. After midnight, it's gone.
```

#### Template 2: The "Last Chance" Email

> [Fonte: kennedy_templates.md]

```
Subject: Last chance (closing in 3 hours)

[First Name],

This is it.

In exactly 3 hours, [offer] closes forever.

After that:
- The price goes up to $[higher price]
- The [bonus] disappears
- The guarantee reduces to [lesser guarantee]

If you've been on the fence, now's the time.

[Link]

This is my final email about this.

[Signature]

P.S. I've sold [number] of these in the last [time period].
Once we hit [limit], that's it. We're at [current number] now.
```

#### Template 3: The "Takeaway Selling" Email

> [Fonte: takeaway_selling_email.md]

```
Subject: Your spot has been released...

Dear [First Name],

I wanted to let you know that I've released your spot in the
[Program Name].

When we spoke last week, you seemed interested but hadn't made
a decision yet.

Since I only accept [number] people per month (to ensure everyone
gets personal attention), and I have [waiting list number] people
on the waiting list, I had to release your spot to someone else.

However...

The person I offered it to needs until tomorrow at [time] to confirm.

If they don't take it (about a 30% chance based on past
experience), the spot will be yours if you want it.

But you need to let me know by tomorrow at [earlier time].

After that, I'm moving to the next person on the list.

[Value Stack Recap]

If the spot becomes available and you want it, reply to this
email by [time] tomorrow with "YES - HOLD MY SPOT."

If I don't hear from you, I'll assume you're not interested
and won't bother you again about this.

[Signature]

P.S. I should mention - the last group averaged a [result] ROI
within the first [time period]. But that doesn't matter if you
don't have a spot.

P.P.S. If you're not interested, please let me know so I
can remove you from the waiting list. I hate wasting time -
mine and yours.
```

### K.7 Kennedy's P.S. Strategy

> "90% dos leitores pulam direto para o P.S. Faça valer."
> [Fonte: kennedy_templates.md]

```yaml
kennedy_ps_strategy:
  principle: "90% of readers skip straight to the P.S. Make it count."

  ps_must_include:
    element_1: "Reaffirm main offer"
    element_2: "Urgency (deadline, scarcity)"
    element_3: "Bonus reminder"
    element_4: "Guarantee reminder"
    element_5: "Contact info/link"

  ps_templates:
    reminder_ps: |
      P.S. Remember, you get [main benefit] plus [key bonus]
      when you order today. [Link]

    urgency_ps: |
      P.S. This offer expires [specific deadline].
      After that, the price goes up to $[higher price].
      Don't wait - [Link]

    guarantee_ps: |
      P.S. Don't forget - this is completely risk-free with my
      [guarantee name]. You have nothing to lose and everything to gain.

    testimonial_ps: |
      P.S. "I made $[amount] in [time period] using this system"
      - [Name], [Location]. You could be next. [Link]

    stack_ps: |
      P.S. Just to recap, you get:
      • [Benefit 1]
      • [Benefit 2]
      • [Benefit 3]
      All for just $[price]. [Link]
```

### K.8 Kennedy's List Strategy

> "In direct marketing, there's a saying: 'List is 40%, offer is 40%, creative is 20%.'"
> [Fonte: ep_41_no_bs_direct_marketing.md]

```yaml
kennedy_list_strategy:
  formula: "List 40% + Offer 40% + Creative 20% = Success"

  list_characteristics:
    recency: "How recently they bought something similar"
    frequency: "How often they buy through direct marketing"
    monetary: "How much they typically spend"

  email_application:
    segmentation_by_recency:
      hot: "Bought in last 30 days → More aggressive offers"
      warm: "Bought in 30-90 days → Nurture + offers"
      cold: "90+ days → Reactivation sequence"

    segmentation_by_behavior:
      openers: "High open rate → Content-focused emails"
      clickers: "High click rate → Offer-focused emails"
      buyers: "Purchased → Upsell/cross-sell sequence"

  kennedy_quote: |
    "You can have the best offer and the best copy, but if you're
    mailing to the wrong list, you'll fail."
```

### K.9 Kennedy's Welcome Campaign Structure

> "What happens immediately after someone becomes a customer is critical."
> [Fonte: ep_07_clients_customers_patients_for_life.md]

```yaml
kennedy_welcome_campaign:
  principle: "Within 48 hours of purchase, you should have a comprehensive onboarding sequence"

  must_accomplish:
    - "Confirms their smart buying decision"
    - "Helps them get immediate results"
    - "Introduces them to additional resources"
    - "Sets expectations for the relationship"

  email_structure:
    email_0_immediate:
      timing: "Within 1 hour"
      content: "Delivery + Access + Confirmation"
      goal: "Reduce buyer's remorse immediately"

    email_1_day1:
      timing: "24 hours later"
      content: "Quick win tutorial + First steps"
      goal: "Get them using it fast"

    email_2_day2:
      timing: "48 hours"
      content: "Success story + What to expect"
      goal: "Show what's possible"

    email_3_day3:
      timing: "72 hours"
      content: "Deep dive resource + Support available"
      goal: "Increase engagement"

    email_4_day5:
      timing: "Day 5"
      content: "Check-in + Bonus unlock"
      goal: "Reinforce value + delight"

    email_5_day7:
      timing: "Day 7"
      content: "Community + Next steps"
      goal: "Transition to nurture/ascension"
```

### K.10 Kennedy's Customer Lifecycle System for Email

> "Moving customers through these levels requires a systematic approach."
> [Fonte: ep_07_clients_customers_patients_for_life.md]

```yaml
kennedy_customer_lifecycle:
  level_1_customers:
    definition: "People who bought once - transactional"
    email_strategy: "Welcome + Education sequences"
    goal: "Move to Level 2"

  level_2_clients:
    definition: "Ongoing relationship, repeat purchases"
    email_strategy: "Nurture + Value ladder offers"
    goal: "Move to Level 3"

  level_3_patients:
    definition: "Complete dependency and loyalty"
    email_strategy: "VIP communications + Exclusive access"
    goal: "Maintain and maximize LTV"

  ascension_principles:
    - "You don't wait for them to ask for more"
    - "Proactively offer additional solutions"
    - "Meet them where they are"
    - "Take them where they need to go"
    - "Only offer what makes sense for their journey"
```

### K.11 Kennedy's Core Email Principles

> "Marketing is a system, not an event."
> [Fonte: magnetic_marketing_fundamentals.md, frameworks.md]

```yaml
kennedy_core_principles:
  principle_1:
    quote: "Long copy outpulls short copy"
    email_application: "Don't be afraid of long emails if they're engaging"

  principle_2:
    quote: "Tell them what you're going to tell them, tell them, then tell them what you told them"
    email_application: "Subject line previews, body delivers, P.S. reinforces"

  principle_3:
    quote: "Enter the conversation already occurring in the customer's mind"
    email_application: "Open with their pain/desire, not your product"

  principle_4:
    quote: "Specificity sells, generality fails"
    email_application: "Use specific numbers, dates, names, results"

  principle_5:
    quote: "Proof is more powerful than promise"
    email_application: "Testimonials, case studies, screenshots in emails"

  principle_6:
    quote: "People don't buy products, they buy solutions to problems"
    email_application: "Lead with problem, not product"

  principle_7:
    quote: "The confused mind says no"
    email_application: "One CTA per email, clear next step"

  principle_8:
    quote: "Marketing is a system, not an event"
    email_application: "Build sequences, not one-off emails"

  principle_9:
    quote: "You can't bore people into buying"
    email_application: "Infotainment > dry education"

  principle_10:
    quote: "The most dangerous number in business is one"
    email_application: "Multiple touchpoints, multiple sequences, multiple offers"
```

### K.12 Kennedy's Direct Mail Rules Applied to Email

> "The internet is the most powerful direct mail tool ever invented."
> [Fonte: quotes.md, frameworks.md]

```yaml
kennedy_dm_to_email_translation:
  dm_rule_1:
    original: "Personalize with name and details"
    email: "Use merge tags, behavioral personalization"

  dm_rule_2:
    original: "Use lumpy mail to get opened"
    email: "Use curiosity hooks, pattern interrupts in subject lines"

  dm_rule_3:
    original: "Include reply device"
    email: "Always include clear CTA button + link"

  dm_rule_4:
    original: "Multiple formats in one package"
    email: "Multi-format sequences (text, video, downloadable)"

  dm_rule_5:
    original: "Test headlines relentlessly"
    email: "A/B test subject lines always"

  dm_rule_6:
    original: "Track response by source"
    email: "UTM parameters, dedicated landing pages"

  dm_rule_7:
    original: "Deadline must be real and enforced"
    email: "If you say it closes, it CLOSES"

  dm_rule_8:
    original: "Follow up until they buy or die"
    email: "Automated sequences that never stop nurturing"
```

### K.13 Kennedy's 10 Golden Rules for Email Sequences

> Compilado de múltiplas fontes: EXTRAÇÃO_DEEP.md, frameworks.md, quotes.md

```yaml
kennedy_10_golden_rules_email:
  rule_1:
    statement: "ALWAYS question what 'everyone' is doing with email"
    application: "If most emails are short, test long. If most are plain text, test designed."

  rule_2:
    statement: "NEVER send an email without a direct response component"
    application: "Every email must have a measurable next action"

  rule_3:
    statement: "WHEN confronted with low open rates, fix the subject line first"
    application: "Subject line is your headline - it's 80% of the battle"

  rule_4:
    statement: "ALWAYS communicate value in terms of WIIFM"
    application: "What's In It For Me - not features, benefits"

  rule_5:
    statement: "NEVER waste time on unqualified subscribers"
    application: "Segment aggressively, clean list regularly"

  rule_6:
    statement: "WHEN subscribers say 'too many emails', understand it means 'not valuable enough'"
    application: "Increase value, don't decrease frequency"

  rule_7:
    statement: "ALWAYS invest in communicating with existing buyers"
    application: "Buyer lists are 10x more valuable than prospect lists"

  rule_8:
    statement: "NEVER be a commodity - create a category of one"
    application: "Your email voice should be unmistakably YOU"

  rule_9:
    statement: "WHEN in doubt, add more proof"
    application: "Testimonials, case studies, screenshots"

  rule_10:
    statement: "ALWAYS assume 100% responsibility for your email results"
    application: "Low open rates? Your fault. Low clicks? Your fault. Fix it."
```

---

*Task Version: 2.0*
*Primary Agents: Andre Chaperon (Structure), Ben Settle (Content)*
*Supporting Agents: Dan Kennedy (Urgency), Eugene Schwartz (Diagnosis)*
*Research Foundation: docs/research/email-sequence-methodology-research.md*
*Kennedy Enrichment: ENR-008 - 2026-01-23*
*Sources: ep_41_no_bs_direct_marketing.md, ep_07_clients_customers_patients_for_life.md, kennedy_templates.md, takeaway_selling_email.md, frameworks.md, EXTRAÇÃO_DEEP.md, quotes.md, magnetic_marketing_fundamentals.md*
*Line Count: 1800+*


---

## Referência: references/create-ghosted-lead-recovery.md

# Create Ghosted Lead Recovery System

## Purpose

Criar sistema de recuperação de leads "ghosted" - pessoas que entraram no funil, demonstraram interesse, mas não converteram. Este task implementa táticas "break-the-glass" para reviver leads mortos e capturar receita que está vazando do funil.

> "Seu funil é como um balde furado. A maioria da água que você coloca simplesmente vaza pelo fundo. Você precisa de um sistema embaixo para capturar essa receita perdida."
> — Jeremy Haynes

---

## The Leaky Bucket Philosophy

```yaml
leaky_bucket_reality:

  typical_funnel:
    leads_in: 1000
    show_to_call: 500  # 50% show rate
    close_rate: 20%    # of those who show
    actual_buyers: 100 # only 10% of original

  question: "O que acontece com os outros 900 leads?"

  wrong_answer: "Eles estão perdidos"
  right_answer: "Eles estão em diferentes níveis de interesse que precisam de diferentes abordagens"

interest_spectrum:
  level_1: "Curioso" # Optou in mas não engajou
  level_2: "Interesse geral" # Engajou um pouco
  level_3: "Muito interessado" # Quase converteu
  level_4: "Convicto" # Pronto para comprar

  key_insight: |
    Deals acontecem acima da linha de convicção.
    Seu trabalho é elevar leads de níveis inferiores
    até que cruzem essa linha.

    O ERRO é abandonar leads que não converteram imediatamente.
```

---

## Types of Ghosted Leads

```yaml
ghosted_lead_categories:

  category_1_no_show:
    description: "Agendou call, não apareceu"
    interest_level: "Curiosidade → Interesse geral"
    recovery_potential: "ALTO"

  category_2_no_close:
    description: "Apareceu na call, não comprou"
    interest_level: "Interesse geral → Muito interessado"
    recovery_potential: "MUITO ALTO"

  category_3_webinar_no_show:
    description: "Registrou no webinar, não apareceu"
    interest_level: "Curiosidade"
    recovery_potential: "MÉDIO"

  category_4_webinar_no_buy:
    description: "Assistiu webinar, não comprou"
    interest_level: "Interesse geral → Muito interessado"
    recovery_potential: "ALTO"

  category_5_abandoned_checkout:
    description: "Chegou no checkout, não finalizou"
    interest_level: "Muito interessado → Quase convicto"
    recovery_potential: "MUITO ALTO"

  category_6_long_dead:
    description: "Leads antigos que esfriaram"
    interest_level: "Provavelmente zero"
    recovery_potential: "BAIXO mas volume compensa"
```

---

## Inputs

```yaml
required:
  - lead_sources: "De onde vêm os leads (call funnel, webinar, etc.)"
  - average_lead_age: "Há quanto tempo estão no sistema"
  - current_reactivation_efforts: "O que já estão fazendo"
  - offer_details: "Produto, preço, opções de pagamento"
  - sales_team_size: "Quantos vendedores + capacidade"

optional:
  - crm_data: "Dados de onde leads estão travando"
  - sales_feedback: "Por que leads não fecham segundo vendedores"
  - alternative_offers: "Outros produtos para oferecer"
  - content_assets: "Videos, emails, posts existentes"
```

---

## The Two-Layer Recovery System

### Layer 1: Systematic (Sempre Rodando)

```yaml
systematic_recovery:

  purpose: "Sistema automatizado que roda continuamente"

  components:

    1_weekly_owner_call:
      what: "Mini webinar semanal do owner"
      who: "Leads não convertidos das últimas 2-4 semanas"
      format: "20 slides, 30-45 min"
      flow:
        - "Apresentação curta (15 min)"
        - "Pitch"
        - "Q&A"
        - "Re-pitch"
        - "Mais Q&A"
      result: "Low 6-figures adicionais/mês"

    2_cleaner_role:
      what: "Vendedor dedicado a leads frios"
      who: "Leads após X dias sem atividade"
      responsibility: |
        - Recebe leads que closers principais abandonaram
        - Trabalha lista de leads antigos
        - Usa táticas break-the-glass
        - Convida para owner calls
        - Envia para funnels alternativos

    3_alternative_funnels:
      what: "Múltiplos caminhos de conversão"
      principle: |
        Se o funil original falhou, tente outro.
        Nem todo mundo quer webinar.
        Nem todo mundo quer call.
        Alguns preferem ler.
        Alguns preferem comprar direto.
      options:
        - "Call funnel para quem veio de webinar"
        - "Webinar para quem veio de call funnel"
        - "Low ticket para quem não pode high ticket"
        - "Oferta alternativa para quem rejeitou a principal"
        - "In-person event para quem precisa de mais toque"
```

### Layer 2: Break-the-Glass Tactics (Quando Precisa de Boost)

```yaml
break_the_glass_tactics:

  purpose: "Táticas pontuais para criar spikes de revenue"

  when_to_use:
    - "Calendário dos vendedores está vazio"
    - "Revenue está abaixo da meta"
    - "Período tipicamente lento (férias, etc.)"
    - "Precisa de cash injection rápido"

  when_NOT_to_use:
    - "Já tem muito momentum"
    - "Sales team sobrecarregado"
    - "Revenue está em alta"
```

---

## Break-the-Glass Tactic #1: "Sent from iPhone" Email

```yaml
sent_from_iphone:

  history: |
    Esta tática gerou 40.000+ respostas em 48 horas
    quando usada pela primeira vez no Grant Cardone's office.
    Literalmente parou a empresa por 2 dias para processar.

  how_it_works:
    subject: "following up"  # tudo minúsculo
    body: |
      are you still interested in [product/topic]?

      - [first name]

      Sent from my iPhone

    key_elements:
      - "Subject line: tudo minúsculo, casual"
      - "Body: uma linha só, tudo minúsculo"
      - "Assinatura: só primeiro nome com dash"
      - "Footer: 'Sent from my iPhone'"
      - "Empurrar unsubscribe/address para bem embaixo (dar vários enters)"

  why_it_works:
    - "Parece email pessoal, não marketing"
    - "Curiosidade sobre quem está mandando"
    - "Simplicidade desarma defesas"
    - "Parece urgente/importante"

  expected_response:
    - "Sim, ainda estou interessado"
    - "Não, obrigado" (pelo menos você sabe)
    - "Quem é você?" (oportunidade de reconectar)

  warning: |
    NÃO use quando já tem muito volume.
    Isso pode criar um TSUNAMI de respostas.
    Tenha equipe pronta para processar.
```

### Email Template Completo

```markdown
## Subject: following up

## Body:

are you still interested in [nome do produto/tópico]?

- [seu primeiro nome]

Sent from my iPhone









[Seu endereço comercial]
[Link de unsubscribe]
```

---

## Break-the-Glass Tactic #2: "Where Did We Lose You?" Email

```yaml
where_did_we_lose_you:

  purpose: "Reviver leads que ghostaram"

  psychology: |
    A maioria das respostas NÃO é feedback real.
    A maioria diz: "Você não me perdeu! Desculpa, estava ocupado..."
    E então voltam para o processo de compra.

  how_it_works:
    subject: "quick question"  # ou "pergunta rápida"
    body: |
      Hey [nome],

      Wondering if I could get a quick one-sentence feedback
      from you on where we lost you.

      Would really appreciate it.

      - [seu nome]

  variations:
    version_pt_br: |
      Oi [nome],

      Queria pedir um feedback rápido:
      onde foi que perdemos você?

      Uma frase só já ajuda.

      Obrigado,
      [seu nome]

    version_direct: |
      [nome],

      Percebi que não tivemos mais contato.

      Me ajuda a entender: o que aconteceu?

      - [seu nome]

  expected_responses:
    response_1:
      type: "Feedback real"
      example: "O preço estava acima do meu orçamento"
      action: "Oferecer alternativa ou pagamento"

    response_2:
      type: "Reativação"
      example: "Não me perderam! Estava viajando, mas ainda quero"
      action: "Reagendar imediatamente"

    response_3:
      type: "Fechamento"
      example: "Já comprei outra solução"
      action: "Remover da lista, talvez pedir feedback"
```

---

## Break-the-Glass Tactic #3: "For the Dogs" Sequence

```yaml
for_the_dogs:

  purpose: "Capturar os poucos que trabalham em períodos mortos"

  when_to_use:
    - "Black Friday weekend"
    - "Entre Natal e Ano Novo"
    - "Feriados prolongados"
    - "Qualquer período tipicamente 'morto'"

  philosophy: |
    Todo mundo assume que ninguém trabalha nesses períodos.
    MAS: existe uma minoria de pessoas altamente motivadas
    que estão justamente trabalhando quando outros descansam.

    Essas pessoas respondem a messaging que fala diretamente com elas.

  email_template:
    subject: "for the hungry ones"  # ou "para os famintos"
    body: |
      [Nome],

      Eu sei que a maioria das pessoas está descansando agora.

      Mas você não é a maioria, é?

      Se você é uma das poucas pessoas que está trabalhando
      enquanto outros tiram folga...

      Se você está usando esse tempo para se preparar
      para [próximo ano/trimestre]...

      Então tenho uma oportunidade para você.

      [OFERTA com deadline curto]

      Só para quem agir entre [data] e [data].

      Para os outros: aproveitem as férias.
      Para você: vamos conversar.

      [CTA]

      - [Nome]

  variations:
    incentive_version: |
      + Bônus especial para quem fechar nesse período
      + Desconto exclusivo (real, não fake)
      + Acesso antecipado a algo novo
```

---

## Break-the-Glass Tactic #4: Preferred Channel Discovery

```yaml
preferred_channel:

  purpose: "Descobrir onde o lead realmente vê mensagens"

  problem: |
    Você pode estar mandando emails mas ele só vê DM.
    Você pode estar mandando SMS mas ele odeia SMS.
    Cada pessoa tem um canal preferido.

  approach: |
    Quando nada funciona, BLAST em todos os canais:
    - Email
    - SMS
    - DM Instagram
    - DM LinkedIn
    - DM Facebook
    - WhatsApp (se tiver)

    Com UMA mensagem simples.

  message_template: |
    Oi [Nome],

    Tentei contato algumas vezes sem sucesso.

    Qual o melhor canal para falar com você?

    - [Seu nome] da [Empresa]

  expected_responses:
    - "Me manda no WhatsApp: [número]"
    - "Prefiro email: [email]"
    - "Para de me mandar mensagem" (pelo menos você sabe)

  important: |
    Isso pode parecer "agressivo" mas:
    1. Se eles realmente não querem, vão dizer
    2. Se querem mas não viram, você descobre onde veem
    3. Melhor do que perder o lead completamente
```

---

## Systematic Recovery: Weekly Owner Cleanup Call

```yaml
weekly_owner_call:

  format: "Mini webinar de 20-30 slides"
  duration: "30-45 minutos"
  frequency: "1-2x por semana"
  audience: "Leads não convertidos"

  structure:
    section_1:
      name: "Apresentação"
      duration: "15 minutos"
      content: "Versão condensada do pitch principal"

    section_2:
      name: "Pitch"
      duration: "5 minutos"
      content: "Oferta clara e direta"

    section_3:
      name: "Q&A"
      duration: "5 minutos"
      content: "Perguntas (algumas plantadas)"

    section_4:
      name: "Re-pitch"
      duration: "3 minutos"
      content: "Urgência e última chamada"

    section_5:
      name: "Mais Q&A"
      duration: "Quanto precisar"
      content: "Objection handling ao vivo"

  result_benchmark: |
    Brez & Pierre adicionaram low 6-figures/mês
    apenas com essa tática.

  templates_to_use:
    - "Mini Webinar 1.0 (genérico)"
    - "Mini Webinar 2.0 (make money offers)"
    - "DSL (Deck Sales Letter) format"
```

---

## Alternative Funnel Strategy

```yaml
alternative_funnels:

  principle: |
    "O mecanismo de conversão original FALHOU.
    Tente um mecanismo diferente até encontrar o que funciona."
    — Richard Bandler (VAK System adaptado para marketing)

  funnel_rotation:

    if_came_from_call_funnel:
      try_next:
        - "Webinar (talvez prefira ver antes de falar)"
        - "VSL longo (talvez precise de mais info)"
        - "Low ticket primeiro (talvez preço seja barreira)"
        - "Oferta diferente (talvez produto errado)"

    if_came_from_webinar:
      try_next:
        - "Call funnel (talvez prefira falar)"
        - "Direct checkout (talvez não queira webinar)"
        - "Weekly owner call (talvez precise de owner)"
        - "In-person event (talvez precise de presença)"

    if_price_is_issue:
      try_next:
        - "Drop sell (oferta menor)"
        - "Payment plan (parcelamento)"
        - "Financing (financiamento externo)"
        - "Starter offer (versão básica)"

    if_timing_is_issue:
      try_next:
        - "Nurture sequence longo"
        - "Conteúdo educacional"
        - "Newsletter"
        - "Retargeting de longo prazo"
```

---

## The Cleaner Role

```yaml
cleaner_role:

  definition: |
    Vendedor dedicado a trabalhar leads que os
    closers principais já desistiram.

  ideal_profile:
    - "Novo vendedor provando seu valor"
    - "Vendedor com mais paciência"
    - "Alguém bom em reconectar relacionamentos"

  responsibilities:
    - "Receber leads após X dias sem atividade"
    - "Trabalhar lista de leads antigos"
    - "Usar táticas break-the-glass"
    - "Convidar para owner calls"
    - "Rotear para funnels alternativos"
    - "Descobrir canal preferido"

  handoff_criteria:
    timing: "Após 14-30 dias sem atividade (depende do ciclo)"
    documentation: "Notas do closer original"

  tools_available:
    - "Break-the-glass emails"
    - "Multi-channel outreach"
    - "Owner call invites"
    - "Alternative offers"
    - "Content assets"
```

---

## Implementation Timeline

```yaml
implementation:

  phase_1_week_1:
    name: "Quick Wins"
    actions:
      - "Configurar 'Where did we lose you' email"
      - "Configurar 'Sent from iPhone' email"
      - "Identificar lista de leads ghosted"
      - "Enviar primeiro blast"
    expected_result: "Spike imediato de reativações"

  phase_2_week_2_3:
    name: "Systematic Setup"
    actions:
      - "Configurar Weekly Owner Call"
      - "Criar slides para mini webinar"
      - "Agendar primeiro call"
      - "Configurar invite automation"
    expected_result: "Sistema recorrente funcionando"

  phase_3_week_4_plus:
    name: "Full System"
    actions:
      - "Definir cleaner role"
      - "Configurar funnels alternativos"
      - "Criar multi-channel sequences"
      - "Estabelecer rotina de break-the-glass"
    expected_result: "Sistema completo de recuperação"
```

---

## Metrics to Track

```yaml
metrics:

  reactivation_metrics:
    - "Taxa de resposta dos emails break-the-glass"
    - "% de leads reativados que convertem"
    - "Revenue de leads reativados"

  owner_call_metrics:
    - "Attendance rate"
    - "Conversion rate"
    - "Revenue por call"

  cleaner_metrics:
    - "Leads processados por semana"
    - "Taxa de reativação"
    - "Revenue gerado"

  system_health:
    - "% de leads que chegam ao cleaner"
    - "Tempo médio até reativação"
    - "LTV de leads reativados vs. originais"
```

---

## Quality Checklist

```yaml
checklist:

  before_break_the_glass:
    - "[ ] Lista de leads segmentada por tipo de ghost"
    - "[ ] Equipe preparada para volume de respostas"
    - "[ ] Sistema de atribuição configurado"
    - "[ ] Respostas padrão prontas"

  weekly_owner_call:
    - "[ ] Slides prontos e testados"
    - "[ ] Perguntas plantadas definidas"
    - "[ ] Lista de convite segmentada"
    - "[ ] Link de registro funcionando"
    - "[ ] Follow-up sequence configurado"

  cleaner_role:
    - "[ ] Handoff process definido"
    - "[ ] Treinamento em táticas"
    - "[ ] Acesso a ferramentas necessárias"
    - "[ ] Metas e compensação claros"
```

---

## Output Deliverables

```yaml
deliverables:

  primary:
    - email_templates: |
        - Sent from iPhone
        - Where did we lose you
        - For the dogs
        - Preferred channel discovery

    - owner_call_setup: |
        - Slides template
        - Invite sequence
        - Follow-up sequence

  secondary:
    - cleaner_playbook: |
        - Processo de handoff
        - Scripts de reativação
        - Rotina diária

    - alternative_funnel_map: |
        - Qual funil usar quando
        - Triggers de rotação

  optional:
    - automation_flows: |
        - CRM sequences
        - Trigger rules
        - Reporting dashboards
```

---

## Version History

```yaml
version: "1.0"
created: "2025-01-24"
source: "Jeremy Haynes - Killer Follow-Up System"
key_results:
  - "40,000+ respostas em 48h (sent from iPhone)"
  - "Low 6-figures/mês adicionais (owner calls)"
  - "Maioria dos 'where did we lose you' reativa o lead"
```

---

*Task: Create Ghosted Lead Recovery System*
*Version: 1.0*
*Framework: Jeremy Haynes Killer Follow-Up System*


---

## Referência: references/create-launch-emails.md

# Create Launch Emails Task

## Purpose

Criar sequências completas de email para lançamentos que constroem antecipação no pré-lançamento, geram momentum no carrinho aberto, e maximizam conversões durante o fechamento usando a metodologia Product Launch Formula (Jeff Walker) e princípios de psicologia de urgência.

## When to Use

- Lançamento de produto novo (digital, físico, serviço)
- Abertura de carrinho para cursos/programas
- Lançamento semente (primeira vez vendendo)
- Lançamento interno (para lista existente)
- Lançamento de afiliados/JV
- Lançamento perpétuo/evergreen
- Campanhas de tempo limitado
- Reabertura de produto existente

## Theoretical Foundation

### The Product Launch Formula (Jeff Walker)

O PLF gerou mais de $1 bilhão em vendas. A metodologia baseia-se em três elementos fundamentais:

1. **Stories** - Narrativas autênticas que criam conexões emocionais
2. **Sequences** - Eventos de marketing estrategicamente cronometrados
3. **Triggers** - Mecanismos psicológicos que influenciam decisões de compra

> "The launch isn't won at the opening. It's won at the close."

### The Four Launch Phases

**Phase 1: Pre-Prelaunch (2-4 semanas antes)**
- Construir antecipação com sneak peeks
- Obter feedback sobre a oferta
- Criar curiosidade e engajamento

**Phase 2: Prelaunch (7-10 dias)**
- Entregar 3 conteúdos sequenciais (PLCs)
- Educar enquanto constrói desejo
- Criar ownership mental do resultado

**Phase 3: Open Cart (5-7 dias)**
- Lançar vendas com engajamento diário
- Emailar lista todos os dias
- Construir momentum para o fechamento

**Phase 4: Cart Close (24-48 horas finais)**
- Gera aproximadamente 50% do total de vendas
- 3-4 emails no último dia
- Última mensagem 90 minutos antes do fim

### Psychology of Urgency & Scarcity

**Por que funciona (neurológico):**
- Escassez aumenta valor percebido
- Loss aversion ativa resposta de ameaça
- FOMO dispara mecanismos de sobrevivência evolutivos

**Princípios de Cialdini em Launches:**
1. Authority (expertise via PLCs)
2. Reciprocity (valor gratuito cria obrigação)
3. Social Proof (testemunhos e comunidade)
4. Scarcity (disponibilidade limitada)
5. Commitment/Consistency (pequenos engajamentos)
6. Liking (histórias criam conexão)

---

## Inputs

```yaml
required:
  product_name: "Nome do produto"
  launch_type: "Tipo (semente, interno, PLF completo, perpétuo, JV)"
  cart_open_date: "Data de abertura do carrinho"
  cart_close_date: "Data de fechamento"
  main_offer: "Oferta principal com preço"
  target_avatar: "Descrição do cliente ideal"
  transformation: "De [estado atual] para [estado desejado]"

optional:
  price: "Preço do produto"
  payment_options: "Opções de pagamento disponíveis"
  bonuses: "Lista de bônus com valores"
  bonus_deadlines: "Quando cada bônus expira"
  testimonials: "Depoimentos com nome, resultado, tempo"
  guarantee: "Garantia oferecida"
  plc_topics: "Tópicos dos 3 PLCs (se aplicável)"
  urgency_elements: "Elementos reais de escassez"
  prelaunch_dates: "Datas dos PLCs"
  list_size: "Tamanho da lista"
  previous_launches: "Dados de lançamentos anteriores"
  copywriter_preference: "Copywriter específico desejado"
```

---

## Workflow

### Step 1: Launch Type Selection & Timeline Mapping

```yaml
launch_types:

  seed_launch:
    description: "Primeiro lançamento, criando enquanto vende"
    list_size: "<2000"
    timeline:
      prelaunch: "5-7 dias"
      cart_open: "3-5 dias"
    characteristics:
      - Tom mais pessoal e conversacional
      - "Estou criando isso com você"
      - Caps menores (escassez legítima)
      - Posicionamento de co-criação
    email_volume: "Menor, mais íntimo"

  internal_launch:
    description: "Lançamento para lista existente"
    list_size: "2000+"
    timeline:
      prelaunch: "7-10 dias"
      cart_open: "5-7 dias"
    characteristics:
      - Leverage testemunhos existentes
      - Referência sucesso passado
      - Volume maior no cart close
      - Múltiplos bônus com deadlines escalonados
    email_volume: "Alto, especialmente no close"

  jv_affiliate_launch:
    description: "Tráfego de parceiros/afiliados"
    timeline:
      prelaunch: "10-14 dias"
      cart_open: "7 dias"
    characteristics:
      - Swipe copy para afiliados
      - Mensagens coordenadas
      - Leaderboards para afiliados
      - Prelaunch estendido para warm-up
    email_volume: "Alto + suporte a afiliados"

  evergreen_perpetual:
    description: "Sequência automatizada, sempre disponível"
    timeline:
      prelaunch: "Automático baseado em trigger"
      cart_open: "5-7 dias do trigger"
    characteristics:
      - Deadlines personalizados
      - Webinar automatizado integrado
      - Sequências behavior-triggered
      - A/B testing contínuo
    email_volume: "Automatizado, otimizado"
```

**Launch Timeline Template:**
```
PRÉ-PRELAUNCH (Dias -14 a -8)
├── Dia -14: Seed email (criar curiosidade)
├── Dia -11: Tease email (compartilhar o "porquê")
└── Dia -8: Anúncio (revelar data)

PRELAUNCH (Dias -7 a -1)
├── Dia -7: PLC 1 Release
├── Dia -6: PLC 1 Reminder
├── Dia -5: PLC 1 Discussion
├── Dia -4: PLC 2 Release
├── Dia -3: PLC 2 Reminder
├── Dia -2: PLC 3 Release
└── Dia -1: "Amanhã às [hora]"

CART OPEN (Dias 1-5)
├── Dia 1: 2-3 emails (abertura + fast action)
├── Dia 2: Email de valor/mecanismo
├── Dia 3: Email de prova social
├── Dia 4: Email de objeções/FAQ
└── Dia 5: Email de bônus expirando

CART CLOSE (Dias 6-7)
├── Dia 6: 2 emails (24h warning + story)
└── Dia 7: 4 emails (final push)
```

---

### Step 2: Pre-Prelaunch Sequence

```yaml
pre_prelaunch_emails:

  email_seed:
    timing: "Dia -14"
    purpose: "Criar curiosidade, sem revelar nada"
    subject_lines:
      - "Algo está chegando..."
      - "Tenho trabalhado em algo especial"
      - "Você vai querer saber disso"

    template: |
      Assunto: Algo está chegando...

      [Nome],

      Tenho trabalhado em algo pelos últimos [tempo].

      Ainda não posso revelar tudo, mas digamos que se você
      quer [resultado desejado], vai gostar muito do que está vindo.

      Fique de olho na sua caixa de entrada nas próximas semanas.

      [Assinatura]

      P.S. Se você tem lutado com [dor principal], isso é pra você.

  email_tease:
    timing: "Dia -11"
    purpose: "Compartilhar o 'porquê' da criação"
    subject_lines:
      - "Por que eu criei isso"
      - "A história por trás do que está vindo"
      - "Você perguntou, eu ouvi"

    template: |
      Assunto: Por que eu criei isso

      [Nome],

      Sabe aquela [dor/frustração] que você sente com [área]?

      Eu passei por isso também. E durante [tempo], tentei
      [abordagens comuns] sem muito sucesso.

      Foi aí que desenvolvi [método/sistema] que mudou tudo.

      Nos próximos dias, vou mostrar exatamente como funciona.

      Mas por enquanto, quero saber: qual é seu maior desafio
      quando se trata de [área]?

      Responda esse email—eu leio cada resposta.

      [Assinatura]

  email_announcement:
    timing: "Dia -8"
    purpose: "Revelar a data, criar compromisso"
    subject_lines:
      - "Marque no calendário: [data]"
      - "[Data]: O dia que vai mudar sua [área]"
      - "Salve essa data"

    template: |
      Assunto: Marque no calendário: [data]

      [Nome],

      O momento chegou.

      No dia [data], vou lançar [descrição breve do produto].

      É para [avatares] que querem [resultado] sem [dor comum].

      Vou te mandar um link especial quando abrir.

      Por enquanto, marque [data] no calendário.

      Vai valer a pena.

      [Assinatura]
```

---

### Step 3: Prelaunch Content (PLC) Emails

```yaml
plc_framework:

  plc_1_opportunity:
    purpose: "Mostrar O QUE é possível"
    structure: "PSP (Problema-Solução-Problema)"
    content_focus:
      - Revelar a oportunidade
      - Sua história + transformação
      - Cliffhanger para PLC 2
    duration: "15-30 minutos"

    release_email:
      timing: "Dia -7"
      subject: "[PLC 1] - Assista isso"

      template: |
        Assunto: A verdade sobre [tópico] que ninguém conta

        [Nome],

        Acabei de publicar algo que você precisa ver.

        É um vídeo de [X] minutos onde eu revelo:

        → [Ponto 1 que gera curiosidade]
        → [Ponto 2 sobre a oportunidade]
        → Por que a maioria das pessoas falha em [área]

        Se você quer [resultado], isso muda tudo.

        → [Link para PLC 1]

        Assista agora—vou tirar do ar em [tempo].

        [Assinatura]

        P.S. No final do vídeo, mostro [teaser do próximo conteúdo].

    reminder_email:
      timing: "Dia -6"
      subject: "Você assistiu?"

      template: |
        Assunto: Você assistiu?

        [Nome],

        Ontem publiquei [descrição do PLC 1].

        Se você ainda não assistiu, não perca.

        Já tivemos [X] pessoas assistindo e os comentários
        estão incríveis:

        "[Comentário real ou simulado]" - [Nome]

        O vídeo estará disponível até [tempo].

        → [Link]

        [Assinatura]

    discussion_email:
      timing: "Dia -5"
      subject: "O que as pessoas estão dizendo..."

      template: |
        Assunto: O que as pessoas estão dizendo...

        [Nome],

        O [PLC 1] gerou uma reação incrível.

        Olha alguns comentários que recebi:

        "[Comentário 1]" - [Nome]
        "[Comentário 2]" - [Nome]
        "[Comentário 3]" - [Nome]

        Se você ainda não assistiu, corre lá:
        → [Link]

        E amanhã... o próximo vídeo vai te mostrar exatamente
        COMO [transformação] funciona na prática.

        [Assinatura]

  plc_2_transformation:
    purpose: "Mostrar POR QUE funciona (provas)"
    structure: "PSP continuado"
    content_focus:
      - Case studies e transformações
      - Mecanismo por trás dos resultados
      - Prova de que funciona
    duration: "20-40 minutos"

    release_email:
      timing: "Dia -4"
      subject: "Como [Nome] conseguiu [resultado] em [tempo]"

      template: |
        Assunto: Como [Nome] conseguiu [resultado] em [tempo]

        [Nome],

        O segundo vídeo está no ar.

        Nele, você vai conhecer histórias como a de [Nome],
        que foi de [antes] para [depois] em apenas [tempo].

        Eu mostro:
        → O mecanismo exato por trás de [transformação]
        → Por que [abordagem comum] não funciona
        → O que [pessoas de sucesso] fazem diferente

        É a prova de que [resultado] é possível para você também.

        → [Link para PLC 2]

        [Assinatura]

    reminder_email:
      timing: "Dia -3"
      subject: "A transformação de [Nome]"

      template: |
        Assunto: A transformação de [Nome]

        [Nome],

        No vídeo de ontem, mostrei como [Nome] conseguiu
        [resultado específico] usando [método].

        Se você quer o mesmo para você, precisa assistir.

        → [Link]

        Amanhã, vou revelar exatamente COMO você pode
        aplicar isso na sua vida/negócio.

        [Assinatura]

  plc_3_ownership:
    purpose: "Mostrar COMO (criar ownership mental)"
    structure: "PSP fechamento"
    content_focus:
      - O caminho passo a passo
      - Preview da oferta
      - Criar sensação de já possuir
    duration: "25-45 minutos"

    release_email:
      timing: "Dia -2"
      subject: "O caminho completo revelado"

      template: |
        Assunto: O caminho completo revelado

        [Nome],

        Este é o vídeo mais importante da série.

        Hoje eu revelo o caminho completo de [estado atual]
        para [estado desejado].

        Você vai ver:
        → Os [X] passos exatos do processo
        → O que você precisa ter/fazer/ser
        → Como [Produto] se encaixa nisso

        E no final... uma surpresa.

        → [Link para PLC 3]

        Assista até o fim.

        [Assinatura]

  cart_opens_tomorrow:
    timing: "Dia -1"
    subject: "Amanhã às [hora]"

    template: |
      Assunto: Amanhã às [hora]

      [Nome],

      Amanhã, às [hora], o carrinho de [Produto] abre.

      Se você assistiu os vídeos, sabe que isso é diferente
      de tudo que você já viu sobre [área].

      Se você quer [resultado], amanhã é o momento.

      Vou te mandar o link assim que abrir.

      Fique de olho na sua caixa de entrada às [hora].

      [Assinatura]

      P.S. As primeiras [X] pessoas ganham [Fast Action Bonus].
```

---

### Step 4: Cart Open Sequence

```yaml
cart_open_emails:

  day_1_open:
    email_count: 3
    purpose: "Capturar action-takers imediatamente"

    email_1_morning:
      timing: "9h"
      subject_options:
        - "[Produto] está aberto"
        - "É hoje"
        - "Chegou o momento"
        - "Finalmente"

      template: |
        Assunto: [Produto] está aberto

        [Nome],

        Acabou a espera. [Produto] está oficialmente disponível.

        Se você quer [resultado principal] sem [dor comum],
        esse é o momento de agir.

        **O que é [Produto]:**
        [2-3 linhas descrevendo a essência]

        **Para quem é:**
        ✓ [Avatar 1] que quer [resultado 1]
        ✓ [Avatar 2] que quer [resultado 2]
        ✓ [Avatar 3] que quer [resultado 3]

        **O que você recebe:**
        ✓ [Componente 1] (valor R$[X])
        ✓ [Componente 2] (valor R$[X])
        ✓ [Componente 3] (valor R$[X])
        ✓ [Bônus se houver]

        **Investimento:** R$[preço] ou [parcelas]

        O carrinho fica aberto até [data]. Depois disso,
        [consequência real].

        → [Link para página de vendas]

        [Assinatura]

        P.S. As primeiras [X] pessoas que entrarem ganham
        [Fast Action Bonus]. Não espere.

    email_2_afternoon:
      timing: "14h"
      subject: "[Fast Action Bonus] - Últimas horas"

      template: |
        Assunto: [Bônus] para quem entrar até [hora]

        [Nome],

        Lembrete rápido:

        Quem entrar em [Produto] até [hora de hoje] ganha
        [Fast Action Bonus] — de graça.

        É [descrição do bônus] que normalmente custa R$[valor].

        Depois de [hora], esse bônus sai da oferta.

        → [Link]

        [Assinatura]

    email_3_evening:
      timing: "20h"
      subject: "[X] pessoas já entraram"

      template: |
        Assunto: [X] pessoas já entraram

        [Nome],

        [Produto] abriu há [X] horas e [número] pessoas
        já estão dentro.

        Enquanto você lê esse email, mais pessoas estão
        garantindo suas vagas.

        Se você estava esperando um "sinal", esse é ele.

        → [Link]

        [Assinatura]

        P.S. [Fast Action Bonus] expira à meia-noite.

  day_2_value:
    timing: "10h"
    purpose: "Educar sobre o mecanismo/método"
    subject: "Por que [método] funciona"

    template: |
      Assunto: Por que [método] funciona

      [Nome],

      Você pode estar se perguntando: "Como [Produto]
      realmente funciona?"

      Deixa eu explicar o mecanismo por trás:

      [Explicação de 3-5 parágrafos sobre COMO o produto
      gera resultados, focando no diferencial]

      A maioria das pessoas tenta [abordagem comum] e falha
      porque [razão].

      [Produto] resolve isso porque [diferencial único].

      É por isso que [estatística de sucesso ou prova].

      → [Link] Veja exatamente o que você recebe

      [Assinatura]

      P.S. Amanhã vou compartilhar histórias reais de pessoas
      que já passaram por [Produto].

  day_3_social_proof:
    timing: "10h"
    purpose: "Prova social com casos reais"
    subject: "[Nome] conseguiu [resultado] em [tempo]"

    template: |
      Assunto: [Nome] conseguiu [resultado] em [tempo]

      [Nome],

      Quero te mostrar resultados reais de pessoas que
      passaram por [Produto]:

      ---

      **[Cliente 1]**
      "[Depoimento detalhado com resultado específico]"

      → Resultado: [métrica específica]
      → Tempo: [quanto demorou]

      ---

      **[Cliente 2]**
      "[Depoimento detalhado]"

      → Resultado: [métrica]
      → Tempo: [duração]

      ---

      **[Cliente 3]**
      "[Depoimento detalhado]"

      → Resultado: [métrica]
      → Tempo: [duração]

      ---

      [X] pessoas já passaram por [Produto].
      [Y]% conseguiram [resultado específico].

      Você pode ser o próximo.

      → [Link]

      [Assinatura]

      P.S. Carrinho fecha em [X] dias.

  day_4_objections:
    timing: "10h"
    purpose: "Remover barreiras de compra"
    subject: "Suas perguntas respondidas"

    template: |
      Assunto: Suas perguntas respondidas (FAQ)

      [Nome],

      Desde que abri [Produto], recebi muitas perguntas.

      Aqui estão as mais comuns (e minhas respostas honestas):

      ---

      **"E se eu não tiver tempo?"**
      [Resposta que remove essa objeção - tempo necessário,
      flexibilidade, etc.]

      ---

      **"Isso funciona para [minha situação específica]?"**
      [Resposta com exemplos de diferentes situações]

      ---

      **"Quanto tempo até ver resultados?"**
      [Resposta realista com exemplos]

      ---

      **"E se eu não gostar?"**
      Você tem [X] dias de garantia incondicional.
      Se não funcionar para você, devolvo 100% do seu
      investimento. Sem perguntas.

      ---

      **"Posso parcelar?"**
      [Opções de pagamento disponíveis]

      ---

      Alguma outra dúvida? Responde esse email.
      Eu leio e respondo pessoalmente.

      → [Link]

      [Assinatura]

  day_5_bonus_expiring:
    email_count: 2
    purpose: "Criar primeira onda de urgência"

    email_1_morning:
      timing: "10h"
      subject: "[Bônus] expira à meia-noite"

      template: |
        Assunto: [Bônus] expira à meia-noite

        [Nome],

        Lembrete importante:

        O bônus [Nome do Bônus] — que vale R$[valor] —
        sai da oferta hoje à meia-noite.

        Se você quer [benefício do bônus], precisa agir HOJE.

        A partir de amanhã, [Produto] ainda estará disponível,
        mas SEM esse bônus.

        → [Link] Garantir acesso + bônus

        [Assinatura]

        P.S. Já são [X] pessoas dentro. [Reforço de prova social]

    email_2_evening:
      timing: "20h"
      subject: "4 horas para [Bônus]"

      template: |
        Assunto: 4 horas para [Bônus]

        [Nome],

        Só um lembrete rápido:

        Em 4 horas, [Bônus] sai da oferta.

        Se você quer [benefício do bônus], é agora.

        → [Link]

        [Assinatura]
```

---

### Step 5: Cart Close Sequence

```yaml
cart_close_emails:

  day_6_warning:
    email_count: 2
    purpose: "Escalar urgência, preparar para fechamento"

    email_1_morning:
      timing: "9h"
      subject: "24 horas restantes"

      template: |
        Assunto: 24 horas restantes

        [Nome],

        Aviso: [Produto] fecha amanhã.

        Às [hora] de amanhã, o carrinho fecha.

        Não vou reabrir até [próxima data/TBD].

        Se você quer:
        ✓ [Benefício 1]
        ✓ [Benefício 2]
        ✓ [Benefício 3]

        Essa é sua janela.

        → [Link]

        [Assinatura]

        P.S. Mais de [X] pessoas já estão dentro. Junte-se a eles.

    email_2_evening:
      timing: "18h"
      subject: "Minha história (e por que isso importa)"

      template: |
        Assunto: Minha história (e por que isso importa)

        [Nome],

        Antes de [Produto] fechar amanhã, quero compartilhar
        algo pessoal com você.

        [História pessoal - 3-5 parágrafos sobre sua jornada,
        lutas, descobertas, e por que criou o produto]

        É por isso que criei [Produto].

        Não para ser mais uma coisa na internet.

        Mas para dar a pessoas como você o que eu gostaria
        de ter tido quando [estava na mesma situação].

        Se você se vê nessa história... se você quer [resultado]
        como eu consegui... [Produto] é para você.

        → [Link]

        Amanhã é o último dia.

        [Assinatura]

  day_7_final:
    email_count: 4
    purpose: "Máxima conversão nas últimas 24 horas"
    note: "~50% das vendas acontecem neste dia"

    email_1_morning:
      timing: "9h"
      subject: "Última chance para [Produto]"

      template: |
        Assunto: Última chance para [Produto]

        [Nome],

        Esse é o último dia.

        Hoje, às [hora], [Produto] fecha.

        Isso é o que você recebe:

        ✓ [Componente 1] - [benefício]
        ✓ [Componente 2] - [benefício]
        ✓ [Componente 3] - [benefício]
        ✓ [Bônus restante] - [benefício]

        Total de valor: R$[soma dos valores]
        Seu investimento hoje: R$[preço]

        Você economiza R$[diferença].

        E tem garantia de [X] dias. Zero risco.

        → [Link]

        Depois de [hora], essa página sai do ar.

        [Assinatura]

    email_2_afternoon:
      timing: "14h"
      subject: "[X] horas restantes"

      template: |
        Assunto: [X] horas restantes

        [Nome],

        [Produto] fecha em [X] horas.

        Se você estava esperando, esse é o momento.

        "[Depoimento curto e poderoso]" - [Nome]

        Você pode ter o mesmo resultado.

        → [Link]

        [Assinatura]

    email_3_evening:
      timing: "18h"
      subject: "Antes de você decidir..."

      template: |
        Assunto: Antes de você decidir...

        [Nome],

        Se você está na dúvida sobre [Produto], me permita
        ser direto com você:

        Eu não sei se [Produto] é certo para você.
        Só você sabe.

        Mas sei que se você está cansado(a) de [dor]...
        Se você está pronto(a) para [resultado]...
        Se você quer [transformação]...

        ...então essa decisão pode ser uma das melhores
        que você já tomou.

        E com [X] dias de garantia, você não arrisca nada.

        O que você arrisca é não tentar.

        → [Link]

        Fecha às [hora].

        [Assinatura]

    email_4_final:
      timing: "90 minutos antes do fechamento"
      subject: "AVISO FINAL: Fecha em 90 minutos"

      template: |
        Assunto: AVISO FINAL: Fecha em 90 minutos

        [Nome],

        90 minutos.

        É o tempo que resta para [Produto].

        Se você quer [resultado], é agora ou [próxima oportunidade].

        → [Link]

        Depois de [hora], essa página desaparece.

        [Assinatura]
```

---

### Step 6: Post-Launch Sequences

```yaml
post_launch_emails:

  buyers_welcome:
    email_1_welcome:
      timing: "Imediatamente após compra"
      subject: "Você está dentro! Comece aqui"

      template: |
        Assunto: Você está dentro! Comece aqui

        [Nome],

        Parabéns! Você tomou uma decisão incrível.

        Bem-vindo(a) ao [Produto]!

        **Aqui está como começar:**

        1. **Acesse a área de membros:**
           [Link] | Login: [email] | Senha: [enviada por email]

        2. **Comece pelo [módulo/recurso 1]:**
           É o melhor ponto de partida para [resultado rápido].

        3. **Entre na comunidade:**
           [Link] - Se apresente e conheça outros membros.

        **Seu Quick Win:**
        [Ação específica de 5-10 min que gera resultado]

        Qualquer dúvida, responda esse email.

        Estamos juntos nessa jornada!

        [Assinatura]

    email_2_quick_win:
      timing: "Dia +2"
      subject: "Faça isso primeiro (5 minutos)"

      template: |
        Assunto: Faça isso primeiro (5 minutos)

        [Nome],

        Como está indo com [Produto]?

        Se você ainda não começou, aqui está seu quick win:

        → [Ação específica que leva 5 min e gera resultado]

        Isso vai te dar [benefício imediato].

        Depois, me conta como foi!

        [Assinatura]

    email_3_community:
      timing: "Dia +3"
      subject: "Conheça seus colegas"

      template: |
        Assunto: Conheça seus colegas de jornada

        [Nome],

        Você não está sozinho(a) nessa.

        Já entraram [X] pessoas em [Produto] neste lançamento.

        Junte-se à comunidade e se apresente:
        → [Link da comunidade]

        Formato sugerido:
        - Nome
        - De onde você é
        - Qual sua meta #1 com [Produto]

        Nos vemos lá!

        [Assinatura]

  non_buyers_nurture:
    email_1_no_hard_feelings:
      timing: "Dia +1"
      subject: "Sem ressentimentos"

      template: |
        Assunto: Sem ressentimentos

        [Nome],

        O carrinho de [Produto] fechou ontem.

        E eu notei que você não entrou — o que é totalmente ok.

        Eu entendo que nem sempre é o momento certo.

        Mas fiquei curioso: o que te impediu?

        Pode ser qualquer coisa:
        - Timing ruim
        - Preço não cabia
        - Dúvidas não respondidas
        - Ou simplesmente não era para você

        Responde esse email com uma linha só.
        Eu leio cada resposta.

        E quem sabe na próxima vez seja o momento certo.

        [Assinatura]

    email_2_survey:
      timing: "Dia +3"
      subject: "Pergunta rápida (2 min)"

      template: |
        Assunto: Pergunta rápida (2 min)

        [Nome],

        Você me ajudaria com uma pesquisa rápida?

        Quero melhorar [Produto] para a próxima turma.

        [Link da pesquisa]

        Leva menos de 2 minutos.

        Obrigado pelo feedback!

        [Assinatura]

    email_3_future_value:
      timing: "Dia +7"
      subject: "Algo gratuito para você"

      template: |
        Assunto: Algo gratuito para você

        [Nome],

        Mesmo que você não tenha entrado em [Produto] desta vez,
        ainda quero te ajudar com [área/objetivo].

        Preparei [recurso gratuito] que vai te ajudar com [benefício].

        → [Link]

        É meu presente por você ter acompanhado o lançamento.

        Espero que ajude!

        [Assinatura]
```

---

### Step 7: Subject Line Templates

```yaml
subject_line_bank:

  anticipation_pre_launch:
    formulas:
      - "Algo está chegando..."
      - "Tenho trabalhado em algo especial"
      - "Marque no calendário: [data]"
      - "Você vai querer saber disso"
      - "[Data]: Prepare-se"

  education_prelaunch:
    formulas:
      - "O erro de [tópico] que custa [dor]"
      - "Por que [abordagem comum] não funciona"
      - "[X] [avatares] descobriram isso sobre [tópico]"
      - "A verdade sobre [tópico]"
      - "Assista: [benefício específico]"

  launch_cart_open:
    formulas:
      - "[Produto] está aberto"
      - "É hoje"
      - "Finalmente: [promessa]"
      - "Você pediu, eu criei"
      - "As portas abriram"

  proof_mid_launch:
    formulas:
      - "[Nome] conseguiu [resultado] em [tempo]"
      - "O que [X] clientes dizem sobre [Produto]"
      - '"[Citação de depoimento]"'
      - "De [estado A] para [estado B]"
      - "[X]% conseguiram [resultado]"

  urgency_cart_close:
    formulas:
      - "[X] horas restantes"
      - "Fechando hoje às [hora]"
      - "Última chance"
      - "[Bônus] expira em [tempo]"
      - "Só até [horário]"

  final_close:
    formulas:
      - "AVISO FINAL"
      - "Fechando em [X] minutos"
      - "Última mensagem sobre [Produto]"
      - "Tchau."
      - "Acabou (quase)"
```

---

### Step 8: Advanced Tactics

```yaml
advanced_tactics:

  urgency_stack:
    description: "Camadas múltiplas de urgência"
    implementation:
      layer_1:
        name: "Fast Action Bonus"
        deadline: "48h após abertura"
        message: "Primeiras [X] pessoas ganham [bônus]"
      layer_2:
        name: "Bonus Expiration"
        deadline: "Dia 5"
        message: "[Bônus X] sai da oferta"
      layer_3:
        name: "Price Increase"
        deadline: "Dia 6 (opcional)"
        message: "Preço sobe para R$[X] amanhã"
      layer_4:
        name: "Cart Close"
        deadline: "Dia 7"
        message: "Carrinho fecha às [hora]"

  real_time_social_proof:
    description: "Atualizar emails com dados em tempo real"
    examples:
      - "[X] pessoas entraram hoje"
      - "Enquanto você lê, [Y] compraram"
      - "Acabamos de dar boas-vindas a [Nome] de [Local]"
      - "[X]% das vagas preenchidas"

  short_email_principle:
    description: "Últimos 2-3 emails máximo 5-7 linhas"
    rationale:
      - Corta através do ruído
      - Transmite urgência pela brevidade
      - Força decisão imediata
      - Zero distrações

  honest_close:
    description: "Se disse que fecha, FECHA"
    principles:
      - Não reabra no dia seguinte
      - Sem "estendemos por demanda"
      - Credibilidade > receita de curto prazo
      - Treina audiência a acreditar em deadlines

  timer_objections:
    description: "Framework T.I.M.E.R. para FAQ"
    objections:
      T_time: "Não tenho tempo para isso"
      I_identity: "Isso não é para pessoas como eu"
      M_money: "Não posso pagar agora"
      E_energy: "Parece muito trabalho"
      R_reputation: "O que os outros vão pensar?"
```

---

### Step 9: Quality Checklist

```yaml
quality_checklist:

  pre_launch:
    - [ ] Emails de antecipação geram curiosidade (sem revelar tudo)?
    - [ ] Cada PLC tem função distinta (Oportunidade/Transformação/Ownership)?
    - [ ] PSP structure está presente nos conteúdos?
    - [ ] Cliffhangers criam antecipação para próximo conteúdo?

  cart_open:
    - [ ] Email de abertura tem todos os elementos essenciais?
    - [ ] Fast Action Bonus tem deadline real?
    - [ ] Prova social é específica (nomes, resultados, tempos)?
    - [ ] FAQ aborda objeções T.I.M.E.R.?

  cart_close:
    - [ ] Urgência aumenta gradualmente?
    - [ ] Múltiplos emails no último dia?
    - [ ] Emails finais são curtos (5-7 linhas)?
    - [ ] Deadline é real e será cumprido?

  subject_lines:
    - [ ] Passam no teste de 3 segundos?
    - [ ] Criam curiosidade OU urgência?
    - [ ] Não são clickbait/spam?
    - [ ] Variações testáveis?

  emails_individuais:
    - [ ] Cada email tem UMA função clara?
    - [ ] CTA único e óbvio?
    - [ ] Scannable (fácil leitura rápida)?
    - [ ] Benefício claro para o leitor?

  sequência_geral:
    - [ ] Não há repetição desnecessária?
    - [ ] Momentum construído corretamente?
    - [ ] Post-launch para buyers E non-buyers?
    - [ ] Timeline realista para tamanho da lista?
```

---

## Complete Email Templates by Phase

### Template Bank: Pre-Prelaunch (3 emails)

[Inclusos na Step 2 acima]

### Template Bank: Prelaunch (7 emails)

[Inclusos na Step 3 acima]

### Template Bank: Cart Open (7-8 emails)

[Inclusos na Step 4 acima]

### Template Bank: Cart Close (6 emails)

[Inclusos na Step 5 acima]

### Template Bank: Post-Launch (6 emails)

[Inclusos na Step 6 acima]

---

## Metrics & Benchmarks

```yaml
launch_metrics:

  email_performance:
    open_rate:
      prelaunch: "30-50%"
      cart_open: "40-60%"
      cart_close: "50-70%"
    click_rate:
      prelaunch: "8-15%"
      cart_open: "15-25%"
      cart_close: "20-35%"

  conversion_metrics:
    plc_watch_rate: "40-60% da lista"
    sales_page_visits: "30-50% da lista"
    enrollment_rate: "2-10% da lista"

  revenue_distribution:
    day_1: "20-30%"
    days_2_5: "20-30%"
    final_day: "40-60%"

  price_point_benchmarks:
    under_100:
      conversion: "5-10%"
      distribution: "30/20/50"
    100_to_500:
      conversion: "3-7%"
      distribution: "25/25/50"
    500_to_2000:
      conversion: "1-4%"
      distribution: "20/30/50"
    above_2000:
      conversion: "0.5-2%"
      distribution: "15/35/50"
```

---

## Copywriter Recommendations

| Contexto | Copywriter | Por quê |
|----------|------------|---------|
| PLF clássico, autêntico | Frank Kern | Mass Control, casual conversational |
| Urgência máxima | Dan Kennedy | Deadline-driven, escassez agressiva |
| High-ticket, lógica | Alex Hormozi | Value stacking, ROI-focused |
| Story-based, emocional | Gary Halbert | Cartas que vendem pela emoção |
| Prova social, credibilidade | Gary Bencivenga | Fascinations, prova científica |
| Email conciso, direto | Ben Settle | Daily emails, personaity-driven |
| Autoridade, sofisticação | David Ogilvy | Brand-building, long-form |

---

## Output

```yaml
deliverables:
  - launch_timeline: "Calendário completo com todas as datas"
  - pre_prelaunch_sequence: "3 emails de antecipação"
  - prelaunch_sequence: "7 emails de PLC"
  - cart_open_sequence: "7-8 emails de abertura"
  - cart_close_sequence: "6 emails de fechamento"
  - post_launch_sequence: "6 emails (buyers + non-buyers)"
  - subject_line_variations: "3 opções por email"
  - urgency_calendar: "Stack de urgência visual"
  - quality_checklist: "Checklist preenchido"

total_emails: "25-30 emails completos"
format: markdown
```

---

*Task Version: 2.0*
*Methodology: Product Launch Formula (Jeff Walker) + Urgency Psychology + Email Conversion*
*Based on: Jeff Walker PLF, Product Launch Strategy, Systeme.io, Viral Loops Research*
*Lines: 1350+*


---

## Referência: references/create-newsletter.md

# Create Newsletter Task

## Purpose
Criar newsletters de alto engajamento que entregam valor consistente, constroem relacionamento com a audiência e geram vendas de forma natural.

## When to Use
- Newsletter semanal/quinzenal/mensal
- Email de conteúdo regular
- Nurture sequence
- Relacionamento com base de leads/clientes
- Email marketing de longo prazo

## Inputs

```yaml
required:
  - newsletter_name: Nome da newsletter
  - main_topic: Tema principal desta edição
  - target_avatar: Quem é o leitor ideal
  - frequency: Frequência de envio

optional:
  - value_hook: O que o leitor vai aprender/ganhar
  - personal_story: História pessoal para incluir
  - cta_goal: Objetivo de conversão (se houver)
  - tone: Tom da marca (casual, expert, provocador)
  - copywriter_preference: Copywriter específico desejado
```

## Workflow

### Step 1: Newsletter Strategy Selection
```
Escolher formato de newsletter:

1. CURADORIA
   - Links e recursos selecionados
   - Opiniões sobre cada item
   - Formato: lista com comentários
   Ex: "5 links da semana"

2. ENSAIO PESSOAL
   - Uma ideia desenvolvida
   - Storytelling + insight
   - Formato: texto corrido
   Ex: "Reflexão da semana"

3. TUTORIAL/HOW-TO
   - Ensina algo prático
   - Passo a passo
   - Formato: educacional
   Ex: "Como fazer X em Y passos"

4. STORY + LESSON
   - História (sua ou de outros)
   - Lição extraída
   - Formato: narrativo
   Ex: "O que aprendi quando..."

5. Q&A / PERGUNTAS
   - Responde perguntas da audiência
   - Formato: interativo
   Ex: "Você perguntou, eu respondo"

6. HÍBRIDO
   - Combina 2+ formatos
   - Seções fixas + variáveis
   Ex: "Intro pessoal + Curadoria + CTA"
```

### Step 2: Newsletter Structure Template
```
Estrutura padrão:

┌─────────────────────────────────────┐
│ SUBJECT LINE                        │
│ (Curiosidade + valor)               │
├─────────────────────────────────────┤
│ PREVIEW TEXT                        │
│ (Complementa subject)               │
├─────────────────────────────────────┤
│ ABERTURA (2-3 linhas)               │
│ Hook + contexto                     │
├─────────────────────────────────────┤
│ CORPO PRINCIPAL                     │
│ Conteúdo de valor                   │
│ (300-800 palavras)                  │
├─────────────────────────────────────┤
│ TAKEAWAY                            │
│ Resumo/aplicação prática            │
├─────────────────────────────────────┤
│ CTA (opcional)                      │
│ Produto/ação relacionada            │
├─────────────────────────────────────┤
│ ASSINATURA                          │
│ Pessoal, humanizada                 │
└─────────────────────────────────────┘
```

### Step 3: Opening Hooks (Laura Belgray Style)
```
Fórmulas de abertura que prendem:

STORY HOOK
"Na terça passada, às 3h da manhã, eu acordei com uma ideia."
"Meu pai sempre dizia uma coisa que eu achava boba. Até que..."

PROVOCAÇÃO
"Todo mundo está fazendo [X] errado. Inclusive eu, até semana passada."
"Se você acha que [crença comum], precisa ler isso."

CONFESSION
"Vou te contar algo que me dá vergonha admitir."
"Eu menti pra você. Não intencionalmente, mas..."

CURIOSITY GAP
"Existe um padrão entre as pessoas mais bem-sucedidas que conheço."
"A diferença entre [A] e [B] se resume a uma coisa."

CONTRARIAN
"Vou te dar o conselho que ninguém te dá: [conselho contrário]."
"Ignore [conselho popular]. Aqui está o porquê."

TIMELY/CURRENT
"Você viu o que aconteceu com [evento]? Isso me fez pensar em..."
"Está todo mundo falando de [trending]. Minha opinião impopular:"

QUESTION
"Você já parou pra pensar por que [fenômeno]?"
"Quantas vezes você já [ação comum] e não deu em nada?"
```

### Step 4: Subject Line Formulas
```
Fórmulas de subject para newsletter:

CURIOSITY
- "A coisa sobre [tema] que ninguém fala"
- "Isso mudou como eu penso sobre [área]"
- "O problema com [crença comum]"

BENEFIT
- "Como [resultado] em [tempo curto]"
- "[X] maneiras de [benefício]"
- "O segredo de [pessoas admiradas]"

PERSONAL
- "Uma confissão..."
- "Preciso te contar uma coisa"
- "O que aconteceu na terça"

NUMBERED
- "3 coisas que aprendi essa semana"
- "5 links para você"
- "[X] perguntas que recebi"

PROVOCATIVE
- "Você está fazendo [X] errado"
- "Pare de [ação comum]"
- "A mentira sobre [tema]"

EMOJI (use com moderação)
- "🔥 [Título]"
- "💡 [Insight]"
- Não exagere — teste o que funciona
```

### Step 5: Value Delivery Frameworks
```
Como entregar valor real:

1-3-1 FRAMEWORK (Ramit Sethi)
- 1 história/contexto
- 3 pontos de valor
- 1 call to action

AIDA PARA NEWSLETTER
- Attention: Hook de abertura
- Interest: Desenvolve o tema
- Desire: Mostra benefício
- Action: CTA suave

STORY → LESSON → APPLICATION
- Conta história
- Extrai lição
- Mostra como aplicar

PROBLEM → SOLUTION → PROOF
- Problema que avatar enfrenta
- Sua solução/insight
- Prova que funciona
```

### Step 6: CTA Integration (Soft Sell)
```
Como vender sem ser vendedor:

PS PROMOTION
Conteúdo de valor
[...]
P.S. Se você quer se aprofundar em [tema],
[Produto] pode te ajudar. [Link]

NATURAL BRIDGE
"Por falar em [tema], é exatamente isso que
ensinamos em [Produto]. Se faz sentido pra você: [link]"

VALUE FIRST, OFFER SECOND
70% do email = valor puro
30% (no final) = menção ao produto

SOFT CTA
"Se isso ressoou, você vai gostar de [Produto]."
(Não: "COMPRE AGORA!")

CONTENT UPGRADE
"Quer o checklist completo? [Link para lead magnet]"
```

### Step 7: Newsletter Templates

#### Template 1: Story + Lesson
```markdown
Assunto: O que [evento] me ensinou sobre [tema]

[Nome],

[Story hook - 2-3 linhas]

[Desenvolvimento da história - 4-5 parágrafos]

[Momento de virada/insight]

A lição?

**[Lição em 1-2 frases]**

Como você pode aplicar isso:

1. [Aplicação prática 1]
2. [Aplicação prática 2]
3. [Aplicação prática 3]

[Fechamento pessoal]

[Assinatura]

P.S. [CTA suave ou próxima newsletter]
```

#### Template 2: Curadoria
```markdown
Assunto: [X] coisas que salvei essa semana

[Nome],

[Abertura pessoal - 2-3 linhas]

Aqui está o que chamou minha atenção:

---

**1. [Título do item]**
[Link]

Por que importa: [2-3 linhas de opinião/contexto]

---

**2. [Título do item]**
[Link]

Por que importa: [2-3 linhas de opinião/contexto]

---

**3. [Título do item]**
[Link]

Por que importa: [2-3 linhas de opinião/contexto]

---

O que você achou? Responde esse email.

[Assinatura]
```

#### Template 3: Tutorial/How-To
```markdown
Assunto: Como [resultado] em [X] passos

[Nome],

[Por que isso importa - 2-3 linhas]

Vamos ao passo a passo:

**Passo 1: [Nome do passo]**

[Explicação + exemplo]

**Passo 2: [Nome do passo]**

[Explicação + exemplo]

**Passo 3: [Nome do passo]**

[Explicação + exemplo]

---

**Resumo rápido:**
1. [Passo 1 em uma linha]
2. [Passo 2 em uma linha]
3. [Passo 3 em uma linha]

Tenta e me conta como foi.

[Assinatura]

P.S. Quer mais [tema]? [CTA]
```

#### Template 4: Q&A
```markdown
Assunto: Você perguntou, eu respondo

[Nome],

Recebi muitas perguntas sobre [tema] essa semana.

Vou responder as principais:

---

**Pergunta de [Nome/Anônimo]:**
"[Pergunta]"

**Minha resposta:**
[Resposta detalhada]

---

**Pergunta de [Nome/Anônimo]:**
"[Pergunta]"

**Minha resposta:**
[Resposta detalhada]

---

Sua pergunta não apareceu? Manda aqui que respondo na próxima.

[Assinatura]
```

### Step 8: Quality Check
```
Verificar newsletter:

VALOR
- [ ] Leitor aprende algo útil?
- [ ] Poderia ser cobrado por esse conteúdo?
- [ ] É específico (não genérico)?

ENGAJAMENTO
- [ ] Abertura prende atenção?
- [ ] É fácil de ler (scannable)?
- [ ] Tem personalidade/voz?

RELACIONAMENTO
- [ ] Humaniza você/marca?
- [ ] Convida interação?
- [ ] Tom é consistente?

CTA
- [ ] Se vende, é natural?
- [ ] Não é agressivo/spammy?
- [ ] Faz sentido com conteúdo?
```

## Output

```yaml
format: markdown
sections:
  - newsletter_strategy
  - complete_newsletter
  - subject_line_variations (3)
  - opening_variations (2)
  - cta_options
  - quality_checklist
```

## Copywriter Recommendations

| Contexto | Copywriter Ideal | Por quê |
|----------|------------------|---------|
| Voz pessoal/casual | Laura Belgray | Talking Shrimp, personalidade |
| Value-first, soft sell | Ramit Sethi | Conteúdo premium + vendas naturais |
| Storytelling | Gary Halbert | Cartas pessoais |
| Provocador/contrarian | Dan Kennedy | Opiniões fortes |
| Elegante/sofisticado | David Ogilvy | Tom premium |

## Newsletter Cadence Guide

```yaml
frequency_options:
  daily:
    pros: "Alto engajamento, top of mind"
    cons: "Difícil manter qualidade, burnout"
    best_for: "Notícias, dicas rápidas"

  weekly:
    pros: "Equilibrado, sustentável"
    cons: "Pode perder momentum"
    best_for: "Maioria dos casos"

  biweekly:
    pros: "Mais tempo para qualidade"
    cons: "Menos contato"
    best_for: "Conteúdo denso, long-form"

  monthly:
    pros: "Alta qualidade possível"
    cons: "Esquecimento entre edições"
    best_for: "Curadoria extensiva"
```

---

*Task Version: 1.0*
*Primary Framework: Value-First Email (Laura Belgray/Ramit Sethi)*


---

## Referência: references/create-pre-call-hammer-sequence.md

# Create Pre-Call Hammer Email Sequence

## Purpose

Criar sequência de emails de alta conversão usando o sistema "Hammer Them" de Jeremy Haynes. Este sistema envia **6 emails por dia** entre o momento que alguém agenda uma call e o momento que a call acontece, resultando em **20-40% de aumento em show rate**.

> "Quando alguém agenda uma call, eles NÃO estão vendidos em aparecer. Estão apenas interessados o suficiente para explorar. O ponto da sales call é converter. Se closers reclamam que leads não chegam prontos para comprar, o gap está na sequência pré-call."
> — Jeremy Haynes

---

## Tier 0: Diagnostic Questions

```yaml
tier_0_diagnosis:

  offer_clarity:
    - Qual é o produto/serviço sendo vendido?
    - Qual é o preço e modelo de pagamento?
    - Qual é a transformação prometida?
    - Quem é o cliente ideal (avatar específico)?

  call_funnel_metrics:
    - Qual o show rate atual? (benchmark: 50% = ruim, 70%+ = bom)
    - Quanto tempo entre agendamento e call? (24h, 48h, 72h?)
    - Quantos emails de lembrete você envia atualmente?
    - Qual o open rate dos emails atuais?

  common_questions:
    - Quais perguntas seus closers respondem TODA call?
    - Quais objeções aparecem repetidamente?
    - O que os leads NÃO sabem que deveriam saber antes da call?
    - Por que pessoas não aparecem às calls?

  content_inventory:
    - Você tem VSL/video de vendas?
    - Tem testimonials em video?
    - Tem case studies documentados?
    - Tem FAQ respondido em algum lugar?
```

---

## The "Hammer Them" Philosophy

### Por que 6 emails por dia?

```yaml
mindset_shift:
  wrong_thinking: "6 emails é spam, vão me odiar"
  right_thinking: "Se eles estão genuinamente interessados, QUEREM essa informação"

  analogy: |
    Imagine você considerando investir $10,000+ em algo.
    Você NÃO quer saber:
    - Como funciona em detalhes?
    - Quem mais fez e teve resultado?
    - Quanto tempo leva?
    - Quais são os riscos?
    - Como o pagamento funciona?

    Se a empresa te mandasse 6 emails por dia respondendo ESSAS perguntas,
    você reclamaria? Ou agradeceria por não ter que esperar a call para saber?

  result_benchmark:
    before: "30-50% show rate"
    after: "70-80% show rate"
    improvement: "20-40% increase"
```

### Os 4 Pilares do Conteúdo

```yaml
content_pillars:

  pillar_1_objections:
    what: "Objeções que surgem na sales call"
    examples:
      - "É muito caro"
      - "Não tenho tempo"
      - "Já tentei antes e não funcionou"
      - "Preciso falar com meu sócio/cônjuge"
    email_approach: "Abordar proativamente antes da call"

  pillar_2_questions:
    what: "Perguntas gerais sobre a oferta"
    examples:
      - "Como funciona?"
      - "Para quem é isso?"
      - "Quanto custa?"
      - "Quanto tempo leva?"
    email_approach: "Responder de forma educacional"

  pillar_3_questions_from_questions:
    what: "Perguntas que surgem das respostas anteriores"
    examples:
      - "Você disse X, mas e se Y?"
      - "Ok, mas como isso funciona para [minha situação]?"
      - "Quais são as opções de pagamento?"
    email_approach: "Antecipar follow-ups naturais"

  pillar_4_expectations:
    what: "O que esperar do processo e resultados"
    examples:
      - "Quanto tempo até ver resultados?"
      - "O que eu preciso fazer?"
      - "Qual o comprometimento necessário?"
      - "O que acontece depois que eu compro?"
    email_approach: "Definir expectativas realistas"
```

---

## Inputs

```yaml
required:
  - offer_name: "Nome do produto/programa"
  - price: "Preço principal"
  - target_avatar: "Descrição do cliente ideal"
  - time_to_call: "Tempo médio entre agendamento e call (24h, 48h, 72h)"
  - top_5_questions: "5 perguntas mais frequentes que closers respondem"
  - top_3_objections: "3 objeções mais comuns"
  - transformation_promise: "O resultado específico que entregam"

optional:
  - case_studies: "Histórias de sucesso com detalhes específicos"
  - testimonials: "Depoimentos de clientes"
  - video_assets: "VSL, videos de testimonial, etc."
  - faq_document: "FAQ existente"
  - sales_team_feedback: "Input dos closers sobre gaps de conhecimento"
  - payment_options: "Opções de pagamento (à vista, parcelado, financiamento)"
```

---

## Email Structure Framework

### Anatomia de um Email "Hammer"

```yaml
email_anatomy:

  subject_line:
    style: "Casual, como se fosse de pessoa para pessoa"
    length: "< 50 caracteres"
    examples:
      - "pergunta rápida"
      - "sobre sua call amanhã"
      - "isso é importante"
      - "esqueci de mencionar"
    avoid:
      - "URGENTE!!!"
      - "Não perca!!!"
      - "Oferta especial!!!"

  opening:
    style: "Direto, sem enrolação"
    examples:
      - "Uma coisa que muita gente pergunta..."
      - "Antes da nossa call, queria esclarecer..."
      - "Muita gente fica em dúvida sobre..."

  body:
    style: "Conversacional, educacional"
    length: "200-400 palavras"
    format: "Parágrafos curtos (1-3 linhas)"
    elements:
      - "Responde UMA pergunta/objeção por email"
      - "Usa exemplos concretos"
      - "Inclui números específicos quando possível"
      - "Pode linkar para conteúdo de suporte"

  closing:
    style: "Soft, sem pressão"
    examples:
      - "Nos vemos na call!"
      - "Qualquer dúvida, responde aqui."
      - "Te vejo [dia] às [hora]."

  signature:
    format: "Pessoal, não corporativo"
    example: |
      - [Nome]

      PS: [Teaser do próximo email ou lembrete útil]
```

---

## 72-Hour Sequence Template

### Para calls com 72h de antecedência (18 emails total)

```yaml
day_1_emails:
  # 6 emails no primeiro dia

  email_1:
    timing: "Imediatamente após agendamento"
    pillar: "expectations"
    subject: "sua call está confirmada"
    focus: "Confirmação + o que esperar da call"
    content_points:
      - "Call confirmada para [data/hora]"
      - "O que vamos cobrir na call"
      - "Como se preparar"
      - "Quanto tempo vai durar"

  email_2:
    timing: "+2 horas"
    pillar: "questions"
    subject: "como funciona [oferta]"
    focus: "Explicação high-level do processo"
    content_points:
      - "Visão geral do método/programa"
      - "Os principais pilares"
      - "O que você vai aprender/receber"

  email_3:
    timing: "+4 horas"
    pillar: "questions"
    subject: "para quem é isso (e para quem NÃO é)"
    focus: "Qualificação/desqualificação"
    content_points:
      - "O perfil ideal de cliente"
      - "Quem NÃO deveria comprar"
      - "Pré-requisitos se houver"

  email_4:
    timing: "+6 horas"
    pillar: "objections"
    subject: "sobre o investimento"
    focus: "Preço e ROI"
    content_points:
      - "O investimento é [preço]"
      - "Por que esse valor?"
      - "O retorno típico"
      - "Opções de pagamento"

  email_5:
    timing: "+8 horas"
    pillar: "questions_from_questions"
    subject: "e se eu não tiver [objeção comum]?"
    focus: "Responder dúvida derivada"
    content_points:
      - "Muita gente pergunta X depois de saber Y"
      - "A resposta é..."
      - "Exemplo de alguém na mesma situação"

  email_6:
    timing: "+10 horas"
    pillar: "expectations"
    subject: "quanto tempo até ver resultados?"
    focus: "Timeline realista"
    content_points:
      - "Expectativa realista de timeline"
      - "O que determina velocidade"
      - "Exemplo de caso real"

day_2_emails:
  # 6 emails no segundo dia

  email_7:
    timing: "Manhã"
    pillar: "objections"
    subject: "já tentei outras coisas..."
    focus: "Diferenciação"
    content_points:
      - "Por que outros métodos falham"
      - "O que torna isso diferente"
      - "Case study de alguém que também tinha tentado"

  email_8:
    timing: "+2 horas"
    pillar: "questions"
    subject: "o que eu preciso fazer?"
    focus: "Comprometimento necessário"
    content_points:
      - "Tempo semanal necessário"
      - "O que você faz vs. o que nós fazemos"
      - "O nível de suporte incluído"

  email_9:
    timing: "+4 horas"
    pillar: "expectations"
    subject: "case study: [nome] de [situação] para [resultado]"
    focus: "Prova social detalhada"
    content_points:
      - "História completa de um cliente"
      - "Situação antes"
      - "O que fez"
      - "Resultado específico"

  email_10:
    timing: "+6 horas"
    pillar: "objections"
    subject: "não tenho tempo..."
    focus: "Objeção de tempo"
    content_points:
      - "Reconhecer a preocupação"
      - "Quanto tempo REALMENTE leva"
      - "Exemplo de alguém ocupado que conseguiu"

  email_11:
    timing: "+8 horas"
    pillar: "questions_from_questions"
    subject: "e a garantia?"
    focus: "Remoção de risco"
    content_points:
      - "Detalhes da garantia"
      - "Como funciona o processo"
      - "Por que oferecemos isso"

  email_12:
    timing: "+10 horas"
    pillar: "expectations"
    subject: "amanhã é o dia"
    focus: "Lembrete + preparação"
    content_points:
      - "Sua call é amanhã"
      - "Como se preparar"
      - "O que ter em mãos"
      - "Venha com perguntas"

day_3_emails:
  # 6 emails no dia da call

  email_13:
    timing: "Manhã cedo"
    pillar: "expectations"
    subject: "hoje é o dia"
    focus: "Lembrete + motivação"
    content_points:
      - "Sua call é HOJE"
      - "Horário: [hora]"
      - "Animado para conversar"

  email_14:
    timing: "+2 horas"
    pillar: "objections"
    subject: "última coisa antes da call"
    focus: "Objeção final"
    content_points:
      - "Uma última preocupação que muitos têm"
      - "Como abordamos isso"

  email_15:
    timing: "2 horas antes"
    pillar: "expectations"
    subject: "em 2 horas"
    focus: "Lembrete logístico"
    content_points:
      - "Call em 2 horas"
      - "Link: [link]"
      - "Esteja em lugar quieto"

  email_16:
    timing: "1 hora antes"
    pillar: "questions"
    subject: "última chance de perguntas"
    focus: "Abertura para dúvidas"
    content_points:
      - "Alguma dúvida antes da call?"
      - "Responde esse email que leio"

  email_17:
    timing: "30 min antes"
    pillar: "expectations"
    subject: "30 minutos"
    focus: "Urgência suave"
    content_points:
      - "Começamos em 30 min"
      - "Te vejo lá"

  email_18:
    timing: "No horário"
    pillar: "expectations"
    subject: "estamos ao vivo"
    focus: "Call to action final"
    content_points:
      - "Estou te esperando"
      - "Clica aqui: [link]"
```

---

## 48-Hour Sequence (Adaptado)

```yaml
adaptation_48h:
  total_emails: 12
  distribution:
    day_1: 6 emails
    day_2: 6 emails

  priority_topics:
    - "Confirmação + expectativas"
    - "Como funciona"
    - "Preço e ROI"
    - "Para quem é/não é"
    - "Case study principal"
    - "Objeção #1 (preço)"
    - "Objeção #2 (tempo)"
    - "Garantia"
    - "Lembretes (manhã, 2h, 1h, agora)"
```

---

## 24-Hour Sequence (Mínimo Viável)

```yaml
adaptation_24h:
  total_emails: 6
  priority_order:
    1: "objections" # Preço - mais importante
    2: "questions" # Como funciona
    3: "expectations" # Timeline/resultados
    4: "objections" # Outra objeção comum
    5: "questions_from_questions" # Follow-up natural
    6: "expectations" # Lembrete final

  note: |
    Com apenas 24h, priorize as objeções mais críticas primeiro.
    Se só uma coisa ficar na cabeça deles, que seja o preço e o ROI.
```

---

## Integration with Hammer Them Strategy

### Cross-Channel Approach

```yaml
hammer_them_integration:

  principle: |
    Os MESMOS tópicos dos emails devem virar:
    - Short-form content (Reels, TikTok, Shorts)
    - Retargeting ads
    - SMS (se tiver)
    - DMs (se setter team)

  workflow:
    1: "Escrever o email sobre [tópico]"
    2: "Converter em script de 30-60 segundos"
    3: "Gravar como short-form"
    4: "Usar como retargeting ad para lista de calls agendadas"
    5: "Bombardear de todos os ângulos"

  result: |
    Lead agendado vê a mensagem:
    - No email
    - No feed do Instagram
    - No feed do TikTok
    - No YouTube Shorts
    - Em ads de retargeting

    É IMPOSSÍVEL não absorver a informação.
```

---

## Quality Validation

```yaml
validation_checklist:

  per_email:
    - "[ ] Subject line < 50 caracteres e casual?"
    - "[ ] Responde UMA pergunta/objeção específica?"
    - "[ ] Tom conversacional (não corporativo)?"
    - "[ ] Parágrafos curtos (1-3 linhas)?"
    - "[ ] Inclui exemplo concreto ou número específico?"
    - "[ ] Fechamento suave (não agressivo)?"

  sequence_complete:
    - "[ ] Cobre todas as 4 categorias (obj/quest/quest²/expect)?"
    - "[ ] Aborda as top 3 objeções?"
    - "[ ] Inclui pelo menos 1 case study detalhado?"
    - "[ ] Explica o preço e ROI claramente?"
    - "[ ] Tem lembretes estratégicos nos momentos certos?"
    - "[ ] Tom consistente em todos os emails?"

  metrics_to_track:
    - "Open rate por email (benchmark: 45%+)"
    - "Show rate antes vs depois (benchmark: +20%)"
    - "Close rate na call (deve aumentar também)"
    - "Tempo médio de call (deve diminuir)"
```

---

## Output Deliverables

```yaml
deliverables:

  primary:
    - complete_sequence: |
        Todos os emails escritos, palavra por palavra
        Organizados por dia e timing

    - implementation_guide: |
        Como configurar no CRM/ESP
        Triggers e automações necessárias

  secondary:
    - content_scripts: |
        Versão short-form de cada email
        Para usar no Hammer Them Strategy

    - tracking_dashboard: |
        Métricas para acompanhar
        Benchmarks esperados

  optional:
    - sms_adaptations: |
        Versão SMS dos emails-chave
        Para quem tem SMS marketing
```

---

## Common Mistakes to Avoid

```yaml
mistakes:

  mistake_1:
    wrong: "Enviar emails genéricos de 'lembrete'"
    right: "Enviar emails educacionais que respondem perguntas reais"

  mistake_2:
    wrong: "Ter medo de enviar 6 emails por dia"
    right: "Entender que quem está considerando investir QUER a informação"

  mistake_3:
    wrong: "Usar tom corporativo e formal"
    right: "Escrever como se fosse um amigo mandando do celular"

  mistake_4:
    wrong: "Colocar múltiplos tópicos em um email"
    right: "UM email = UMA pergunta/objeção respondida"

  mistake_5:
    wrong: "Não mencionar o preço até a call"
    right: "Ser transparente sobre preço, ROI e opções de pagamento"
```

---

## Version History

```yaml
version: "1.0"
created: "2025-01-24"
source: "Jeremy Haynes - 6 Emails Per Day System"
validated_results:
  - "20-40% increase in show rate"
  - "45-50% open rate on emails"
  - "Higher close rate on calls (leads arrive pre-sold)"
```

---

*Task: Create Pre-Call Hammer Email Sequence*
*Version: 1.0*
*Framework: Jeremy Haynes Hammer Them System*
