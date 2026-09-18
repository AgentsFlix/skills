# copy-vsl-webinar · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-vsl-webinar.md` uma skill chamada copy-vsl-webinar. Quando eu pedir algo como "roteiro de VSL para [oferta], [duração]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# APERTE O PLAY · Roteiro de vídeo e apresentação

Roteiro de VSL e de webinar, do gancho de abertura ao fechamento, com os pontos de tensão marcados no tempo. O agente escreve o texto falado, não um artigo lido em voz alta: frases curtas, transições e o momento exato de apresentar a oferta.

## When to Use

- O pedido envolve: VSL, roteiro de vídeo de vendas, webinar frio ou quente, apresentação de vendas.
- Diga: "roteiro de VSL para [oferta], [duração]" ou "webinar de [tema] com oferta de [produto]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| vsl script | `references/vsl-script.md` |
| create webinar script | `references/create-webinar-script.md` |
| create cold webinar script | `references/create-cold-webinar-script.md` |
| create warm webinar script | `references/create-warm-webinar-script.md` |

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

- `references/create-cold-webinar-script.md`
- `references/create-warm-webinar-script.md`
- `references/create-webinar-script.md`
- `references/vsl-script.md`


---

## Referência: references/create-cold-webinar-script.md

# Create Cold Webinar Script

## Purpose

Criar scripts de webinar otimizados para **audiências COLD** - pessoas que não conhecem você, não confiam em você, e são "cruéis" com seu tempo. Este framework é fundamentalmente diferente de webinars para audiências warm.

> "Cold audiences são cruéis. Eles não são seus amigos ainda. Se você começar com 'Oi pessoal, de onde vocês estão?', eles vão te destruir no chat. IMEDIATAMENTE pule para valor."
> — Jeremy Haynes

---

## Cold vs Warm: Diferenças Fundamentais

```yaml
cold_audience_reality:

  mindset:
    - "Não dão a mínima para você"
    - "São rápidos em julgar"
    - "Vão embora se não receberem valor IMEDIATAMENTE"
    - "Não toleram enrolação"

  what_they_want:
    - "Resultados e outcomes"
    - "Informação densa e valiosa"
    - "Provar que seu tempo vale a pena"
    - "Entender rapidamente se é para eles"

  what_they_hate:
    - "Welcome, where are you from?"
    - "Drop a 1 in the chat if..."
    - "Framing content (secrets, beliefs)"
    - "Qualquer coisa que pareça enrolação"

comparison_table:
  | Aspecto | Cold Audience | Warm Audience |
  |---------|---------------|---------------|
  | Frequência | Semanal ou 2x/semana | Mensal |
  | Intro | ZERO small talk | Pode ter um pouco |
  | Framing | Evitar | Pode usar |
  | Character content | Não | Sim, ser você mesmo |
  | Pitches | 3 pitches estratégicos | Pitch no final |
  | Duração | 60-90 min | Pode ser maior |
  | Show rate típico | 15-45% | 40-60% |
```

---

## Tier 0: Diagnostic Questions

```yaml
tier_0_diagnosis:

  audience_clarity:
    - Esta é realmente uma audiência COLD? (nunca interagiu com você?)
    - Você está excluindo warm audiences no targeting?
    - Qual o tamanho do mercado endereçável?

  offer_clarity:
    - Qual é o produto/preço?
    - É para affluent ($150k+/ano) ou general public?
    - O preço é $3,500 ou menos (direct checkout) ou mais (call)?

  content_readiness:
    - Você tem exemplos concretos para mostrar?
    - Tem case studies com números específicos?
    - Consegue entregar valor REAL em 20 minutos?

  logistics:
    - Quanto tempo de promoção? (máx 7 dias para cold)
    - Qual plataforma? (Zoom recomendado)
    - Tem alguém para plantar perguntas estratégicas?
```

---

## Inputs

```yaml
required:
  - webinar_title: "Título focado em RESULTADO (não em método)"
  - product_name: "Nome do produto/programa"
  - price: "Preço principal"
  - target_avatar: "Descrição do público-alvo"
  - main_outcome: "O resultado #1 que você entrega"
  - three_topics: "3 tópicos de valor que você vai cobrir"
  - case_studies: "Mínimo 3 case studies com números"

optional:
  - audience_type: "affluent | general_public (default: general_public)"
  - call_or_checkout: "call | checkout (default: call se >$3,500)"
  - duration: "60 | 90 minutos (default: 60)"
  - planted_questions: "Perguntas para plantar no Q&A"
```

---

## The 3-Pitch Cold Webinar Structure

### Overview Visual

```
┌─────────────────────────────────────────────────────────────────────┐
│              COLD WEBINAR - 3 PITCH STRUCTURE                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SECTION 1: FIRST THIRD (0-20 min)                                  │
│  ├── Intro IMEDIATO (30 segundos máx)                               │
│  ├── Conteúdo Surface Level (alta visão)                            │
│  ├── PITCH #1 (2-5 min) - Introdução da oferta                      │
│  └── Q&A curto (2-5 min)                                            │
│                                                                      │
│  SECTION 2: SECOND THIRD (20-40 min)                                │
│  ├── Conteúdo com EXEMPLOS                                          │
│  ├── Case studies e provas                                          │
│  ├── PITCH #2 (2-5 min) - Framing (comprar velocidade)              │
│  └── Q&A curto (2-5 min)                                            │
│                                                                      │
│  SECTION 3: FINAL THIRD (40-60 min)                                 │
│  ├── Conteúdo mais PROFUNDO / exercício                             │
│  ├── Fazer eles COMEÇAREM a agir                                    │
│  ├── PITCH #3 (10-15 min) - Objection handling + full pitch         │
│  └── Q&A extenso (quanto precisar)                                  │
│                                                                      │
│  RETENTION GOAL:                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 100%|████                                                    │   │
│  │     |  ████                                                  │   │
│  │ 50% |      ████████                                          │   │
│  │     |              ██████████████████                        │   │
│  │   0%|────────────────────────────────────────────────────────│   │
│  │     0min        20min        40min        60min              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  (Drop suave, não íngreme no início)                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Section 1: First Third (0-20 minutes)

### 1.1 The Cold Intro (30 segundos MÁXIMO)

```markdown
## O que NÃO fazer:

"E aí pessoal, tudo bem? Meu nome é [Nome], é muito bom ter vocês aqui.
De onde vocês estão assistindo? Manda aí no chat!
Quem aqui quer [resultado]? Manda um 1 no chat!"

❌ Isso DESTRÓI sua credibilidade com cold audiences.

---

## O que FAZER:

"E aí, [Nome] aqui.

Nos próximos [60] minutos, vou te mostrar como [RESULTADO ESPECÍFICO] -
mesmo que você [OBJEÇÃO COMUM].

Vou passar por [TÓPICO 1], [TÓPICO 2], e [TÓPICO 3].

Vou mostrar exemplos reais de pessoas que [RESULTADO].

Sem enrolação. Direto ao ponto.

Vamos começar."

✅ Value density desde o primeiro segundo.
```

### 1.2 Surface Level Content

```yaml
first_third_content:

  approach: "Visão de alto nível - O QUÊ e POR QUÊ"

  structure:
    - "Introduzir o framework/método em alto nível"
    - "Explicar por que funciona (sem entrar em táticas)"
    - "Mostrar o resultado que é possível"
    - "Dar 1-2 exemplos rápidos"

  for_affluent:
    - "Manter em nível de ESTRATÉGIA"
    - "Ricos não querem táticas - querem ideia"
    - "Falar sobre outcomes, não processos"

  for_general_public:
    - "Pode peperar algumas táticas"
    - "Mas manter majoritariamente high-level"
    - "Público geral precisa de mais detalhes para confiar"

  time_allocation: "12-15 minutos de conteúdo"
```

### 1.3 Pitch #1: Introdução da Oferta

```markdown
## Slide: Transição para Pitch

"Antes de continuar e ir mais fundo nesses tópicos, quero fazer uma pausa.

Sei que alguns de vocês já estão prontos para dar o próximo passo.
Não quero fazer vocês esperarem.

Me dá 2 minutos para apresentar como podemos trabalhar juntos,
e depois volto direto pro conteúdo.

Pode ser?"

---

## Pitch #1 Script (2-5 minutos)

"[NOME DO PRODUTO] é [DESCRIÇÃO EM UMA FRASE].

Custa [PREÇO].
[Se tiver parcelamento: Ou [X]x de [VALOR].]

Aqui está o que você recebe:
- [COMPONENTE 1]
- [COMPONENTE 2]
- [COMPONENTE 3]

Para quem está pronto, o link está [NO CHAT / ABAIXO].
[Se for call: Você vai preencher uma aplicação rápida e agendar uma conversa.]
[Se for checkout: É só clicar e finalizar a compra.]

Agora, voltando ao conteúdo..."

---

## Notas do Pitch #1:
- Pedir PERMISSÃO para pitchar (cold audiences apreciam)
- Ser direto: produto, preço, o que recebe
- NÃO fazer pitch longo
- Voltar IMEDIATAMENTE para conteúdo
```

### 1.4 Q&A #1 (2-5 minutos)

```yaml
qa_1_strategy:

  purpose: "Transição suave de volta para conteúdo"

  ideal_questions:
    planted:
      - "Para quem isso é ideal?"
      - "Para quem NÃO é?"
    natural:
      - Qualquer pergunta sobre o conteúdo surface
      - Evitar deep dives - guardar para depois

  handling:
    - "Responder de forma que leva ao próximo tópico"
    - "Se pergunta for muito específica: 'Ótima pergunta, vou cobrir isso daqui a pouco'"

  transition: "Ótimas perguntas. Agora vamos mais fundo em [TÓPICO]..."
```

---

## Section 2: Second Third (20-40 minutes)

### 2.1 Content with Examples

```yaml
second_third_content:

  approach: "Mostrar COMO funciona com EXEMPLOS"

  structure:
    - "Pegar cada tópico do first third"
    - "Mostrar exemplos reais de cada um"
    - "Demonstrar, não só falar"
    - "Case studies detalhados"

  elements_to_include:
    - "Screenshots de resultados"
    - "Números específicos (não vagos)"
    - "Histórias de clientes"
    - "Demonstração se possível"

  for_affluent:
    - "Exemplos de pessoas em situações similares"
    - "Foco em outcomes, não processos"
    - "Manter relativamente high-level"

  for_general_public:
    - "Mais detalhes táticos"
    - "Passo a passo quando relevante"
    - "Mais hand-holding"

  time_allocation: "12-15 minutos de conteúdo"
```

### 2.2 Pitch #2: Framing Pitch

```markdown
## Pitch #2 Script (2-5 minutos)

"Já falei sobre a oferta, então não vou repetir tudo.

Mas deixa eu te fazer uma pergunta:

Você pode sair daqui e fazer tudo isso sozinho.
Eu te dei informação suficiente para começar.

Mas quanto tempo isso vai levar?
Quantos erros você vai cometer no caminho?
Quanto vai custar esses erros?

O que estou oferecendo é VELOCIDADE.
É SUPORTE enquanto você faz.
É a CERTEZA de que está fazendo certo.

Porque aqui está a verdade:
Você está aqui de graça.
Quanto dessa informação você vai lembrar amanhã?
Quanto você vai realmente implementar?

Sabe o que faria você implementar?
Ter investido dinheiro nisso.

Não é sobre a informação - você tem a informação.
É sobre o COMPROMETIMENTO.

Quem paga, presta atenção.
Quem paga, implementa.
Quem paga, tem skin in the game.

Para quem está pronto para comprar velocidade,
para comprar suporte,
para investir no próprio comprometimento...

O link está [NO CHAT].

Próxima seção..."
```

### 2.3 Q&A #2 (2-5 minutos)

```yaml
qa_2_strategy:

  purpose: "Validar interesse e resolver dúvidas"

  ideal_questions:
    planted:
      - "Faz sentido para quem está começando do zero?"
      - "E se eu não tiver muito tempo?"
    natural:
      - Perguntas sobre os exemplos mostrados
      - Dúvidas sobre aplicação

  handling:
    - "Usar perguntas como segue para próximo tópico"
    - "Se for objeção, reconhecer e seguir"

  transition: "Agora vamos para a parte mais importante..."
```

---

## Section 3: Final Third (40-60 minutes)

### 3.1 Deep Content / Getting Them Started

```yaml
third_third_content:

  approach: "Fazer eles COMEÇAREM a agir"

  structure:
    - "O conteúdo mais profundo"
    - "Um exercício ou demonstração prática"
    - "Fazê-los experimentar o processo"
    - "Mostrar onde vão travar sem ajuda"

  key_insight: |
    Se você conseguir fazer eles COMEÇAREM a implementar,
    eles vão rapidamente perceber que precisam de ajuda.

    O objetivo é "edging" - dar suficiente para começar,
    mas não tanto que conseguem fazer sozinhos.

  examples:
    - "Um exercício rápido que podem fazer agora"
    - "Uma mini-avaliação do negócio deles"
    - "Um diagnóstico que revela problemas"
    - "Um primeiro passo que mostra a complexidade"

  time_allocation: "10-15 minutos de conteúdo"
```

### 3.2 Pitch #3: Full Objection Handling + Close

```markdown
## Pitch #3 Structure (10-15 minutos)

### Parte A: Objection Handling (5-7 min)

"Antes de finalizar, deixa eu abordar algumas coisas que você
provavelmente está pensando.

**'É muito caro'**
[Resposta completa]

**'Não tenho tempo'**
[Resposta completa]

**'Já tentei antes'**
[Resposta completa]

**'Preciso pensar'**
[Resposta completa]"

---

### Parte B: Full Pitch (5-7 min)

"Então, recapitulando.

[NOME DO PRODUTO] inclui:

✅ [COMPONENTE 1] - [valor R$]
✅ [COMPONENTE 2] - [valor R$]
✅ [COMPONENTE 3] - [valor R$]
✅ [BÔNUS 1] - [valor R$]
✅ [BÔNUS 2] - [valor R$]

Valor total: R$ [SOMA]

Seu investimento hoje: R$ [PREÇO]

[Garantia]

[Urgência/Escassez se houver]

O link está [ONDE].

[Se for call]: Preenche a aplicação, agenda uma conversa,
e vamos ver se faz sentido para você.

[Se for checkout]: Clica, finaliza, e você tem acesso imediato."

---

### Parte C: Final Push

"Duas opções agora:

1. Você fecha essa página, volta pra sua vida,
   e daqui 6 meses está no mesmo lugar.

2. Você toma uma decisão, investe em você,
   e daqui 6 meses tem [RESULTADO].

A escolha é sua.

Para quem está pronto, o link está no chat.

Vou abrir para perguntas agora."
```

### 3.3 Q&A Final (sem limite de tempo)

```yaml
qa_final_strategy:

  purpose: "Converter quem ainda está em dúvida"

  approach:
    - "Começar perguntando: Quem já clicou e entrou?"
    - "Celebrar quem comprou (social proof)"
    - "Responder objeções como oportunidades de close"

  objection_handling_pattern:
    1: "Reconhecer a preocupação"
    2: "Reframar a pergunta"
    3: "Responder direcionando para a oferta"
    4: "Fechar: 'Isso responde? Então vai lá.'"

  planted_questions_ideal:
    - "Alguém pergunta sobre garantia"
    - "Alguém pergunta sobre suporte"
    - "Alguém compartilha que comprou"

  closing_urgency:
    - "Lembrar de deadlines se houver"
    - "Lembrar de bônus que expiram"
    - "Última chamada antes de encerrar"
```

---

## Duration Guidelines

```yaml
duration_by_audience:

  affluent_audience:
    recommended: "60-90 minutos MÁXIMO"
    reason: "Ricos valorizam tempo, não toleram enrolação"
    content_style: "High-level, estratégico"

  general_public:
    recommended: "90-180 minutos"
    reason: "Precisam de mais hand-holding e confiança"
    content_style: "Mais tático, mais detalhado"

cold_webinar_specifics:
  max_duration: "90 minutos"
  reason: "Cold não tem paciência para mais que isso"
  ideal_for_most: "60 minutos"
```

---

## Promotion Timeline

```yaml
cold_webinar_promotion:

  max_lead_time: "7 dias"
  ideal_lead_time: "3-4 dias"

  reason: |
    Cold audiences têm interesse que decai rapidamente.
    Quanto mais perto do webinar, maior o show rate.
    Pessoas que registram no dia anterior têm MAIOR show rate.

  ads_strategy:
    - "Não mencionar datas específicas nos ads"
    - "Não mencionar 'webinar' - usar 'training' ou 'workshop'"
    - "Evergreen creative que direciona para página de registro"
    - "Página de registro atualiza automaticamente para próxima data"

  budget_allocation:
    - "Lifetime budget para período de promoção"
    - "OU daily budget se webinar é semanal/perpétuo"
```

---

## Show Rate Optimization

```yaml
show_rate_tactics:

  expected_baseline:
    cold: "15-20%"
    with_optimization: "40-50%"

  tactics:
    - "Hammer Them Strategy (retargeting + content)"
    - "6 emails per day sequence"
    - "Confirmation page com video"
    - "SMS reminders"
    - "Setter calls se tiver equipe"

  confirmation_page_elements:
    - "Video de 2-3 min sobre o que esperar"
    - "Add to calendar prominente"
    - "Reforço do que vão aprender"
    - "Testimonial ou two de webinars anteriores"
```

---

## Quality Checklist

```yaml
pre_webinar_checklist:

  content:
    - "[ ] Intro ZERO small talk (30 seg máx)"
    - "[ ] Conteúdo value-dense desde o início"
    - "[ ] 3 pitches estruturados"
    - "[ ] Case studies com números específicos"
    - "[ ] Exercício/demonstração no third third"
    - "[ ] Objection handling completo"

  logistics:
    - "[ ] Perguntas plantadas preparadas"
    - "[ ] Link de compra/aplicação testado"
    - "[ ] Slides sem enrolação"
    - "[ ] Timer para não passar do tempo"

  mindset:
    - "[ ] Lembrar: cold não dá a mínima para você"
    - "[ ] Lembrar: value density é tudo"
    - "[ ] Lembrar: 3 pitches, não só 1 no final"
```

---

## Output Deliverables

```yaml
deliverables:

  primary:
    - complete_script: |
        Script palavra por palavra
        3 seções claramente divididas
        3 pitches completos
        Q&A strategy para cada seção

    - slide_outline: |
        Títulos dos slides
        Notas de tempo por seção
        Indicações de quando pitchar

  secondary:
    - objection_responses: |
        Top 5 objeções com respostas completas

    - planted_questions: |
        10 perguntas para plantar no Q&A
        Momento ideal para cada uma

  optional:
    - promotion_plan: |
        Timeline de promoção (7 dias)
        Ads e landing page guidelines
```

---

## Version History

```yaml
version: "1.0"
created: "2025-01-24"
source: "Jeremy Haynes - Cold vs Warm Webinar Best Practices"
key_insight: |
  Cold webinars são fundamentalmente diferentes de warm.
  O maior erro é tratar cold como warm.
  Value density + 3 pitches = alta conversão de cold.
```

---

*Task: Create Cold Webinar Script*
*Version: 1.0*
*Framework: Jeremy Haynes Cold Webinar System*


---

## Referência: references/create-warm-webinar-script.md

# Create Warm Webinar Script

## Purpose

Criar scripts de webinar otimizados para **audiências WARM** - pessoas que já conhecem você, seguem seu conteúdo, ou interagiram com sua marca. Warm audiences permitem mais personalidade e conexão, mas ainda exigem valor e estrutura.

> "Warm audiences não são seus amigos ainda. Eles te CONHECEM, mas não necessariamente te CONFIAM o suficiente para comprar. A vantagem é que você tem mais margem de manobra."
> — Jeremy Haynes

---

## Warm vs Cold: Key Differences

```yaml
warm_audience_reality:

  who_they_are:
    - "Website visitors (180 dias)"
    - "Email list subscribers"
    - "Customer list"
    - "Social interaction (365 dias)"
    - "Video viewers (25%+ threshold)"
    - "Profile visitors"
    - "Post engagers"
    - "Ad clickers/engagers"

  mindset:
    - "Já te conhecem (pelo menos superficialmente)"
    - "Têm alguma familiaridade com seu estilo"
    - "Mais receptivos ao seu conteúdo"
    - "Mas ainda NÃO são seus amigos"

  what_you_can_do:
    - "Mais personalidade e character content"
    - "Referências a conteúdo anterior"
    - "Storytelling mais pessoal"
    - "Humor que seria arriscado com cold"

  what_you_still_need:
    - "Value density (ainda é essencial)"
    - "Estrutura clara"
    - "Pitch bem definido"
    - "Provas e resultados"

comparison_table:
  | Aspecto | Cold Audience | Warm Audience |
  |---------|---------------|---------------|
  | Frequência | Semanal/2x semana | Mensal (máx 2x) |
  | Intro | ZERO small talk | Pode ter personalidade |
  | Character content | Evitar | Encorajado |
  | Crueldade | Muito cruel | Menos cruel |
  | Framing content | Evitar | Pode usar moderadamente |
  | Show rate típico | 15-45% | 40-60%+ |
  | Retention | Drop íngreme no início | Drop mais suave |
```

---

## Why Monthly (Not More)

```yaml
frequency_rationale:

  problem: |
    Se você fizer webinars warm com muita frequência,
    você vai SATURAR sua audiência e:
    - Show rates vão cair
    - Engagement vai diminuir
    - Fadiga de conversão vai acontecer

  recommendation:
    primary: "1x por mês"
    alternative: "2x por mês SE ofertas diferentes"

  exceptions:
    - "Lançamento (pode fazer mais frequente por período limitado)"
    - "Eventos especiais"
    - "Black Friday / períodos promocionais"

  contrast_with_cold: |
    Cold você pode fazer TODA SEMANA porque:
    - São pessoas NOVAS toda semana
    - Não viram o webinar anterior
    - Não tem fadiga acumulada
```

---

## Tier 0: Diagnostic Questions

```yaml
tier_0_diagnosis:

  audience_clarity:
    - Qual o tamanho da sua warm audience?
    - De onde vem a maioria? (email list, social, etc.)
    - Há quanto tempo seguem você?
    - Já fizeram webinars antes com você?

  relationship_status:
    - Qual % já comprou algo seu?
    - Qual % interage regularmente?
    - Quão familiar estão com sua oferta principal?
    - Eles conhecem sua história?

  content_alignment:
    - Esse webinar está alinhado com o conteúdo que você posta?
    - Vai parecer natural para quem te segue?
    - Tem elementos que só sua audiência entenderia?
```

---

## Inputs

```yaml
required:
  - webinar_title: "Título que ressoa com quem já te conhece"
  - product_name: "Nome do produto/programa"
  - price: "Preço principal"
  - audience_size: "Tamanho estimado da warm audience"
  - main_outcome: "O resultado #1 que você entrega"
  - your_story_elements: "Partes da sua história que podem usar"

optional:
  - previous_webinar_results: "Métricas de webinars anteriores"
  - audience_type: "affluent | general_public"
  - character_elements: "Piadas, referências, estilo pessoal"
  - community_references: "Memes internos, histórias conhecidas"
```

---

## Warm Webinar Structure

### Overview

```yaml
structure_comparison:

  cold_webinar:
    - "Zero small talk"
    - "3 pitches durante o webinar"
    - "Value density extrema"
    - "Sem character content"

  warm_webinar:
    - "Pode ter intro com personalidade"
    - "Pitch pode ser mais no final"
    - "Value density ainda importante"
    - "Character content encorajado"
    - "Mais storytelling"

warm_specific_elements:
  - "Referências a conteúdo anterior"
  - "Inside jokes da comunidade"
  - "Sua verdadeira personalidade"
  - "Histórias pessoais mais detalhadas"
  - "Vulnerabilidade estratégica"
```

### The Warm Webinar Flow

```markdown
## WARM WEBINAR - ESTRUTURA RECOMENDADA

### ABERTURA (5-10 minutos)
├── Boas-vindas com personalidade
├── Reconhecer quem está lá (não precisa pedir chat)
├── Breve contexto de por que esse webinar
└── Transição rápida para valor

### CONTENT SECTION 1 (15-20 minutos)
├── Primeiro bloco de conteúdo
├── Storytelling relacionado
├── Exemplos e cases
└── Possível mini-pitch (opcional)

### CONTENT SECTION 2 (15-20 minutos)
├── Segundo bloco de conteúdo
├── Mais profundidade
├── Demonstrações
└── Q&A interativo (pode fazer perguntas ao vivo)

### CONTENT SECTION 3 (10-15 minutos)
├── Conteúdo final
├── Conectar tudo
├── Preparar para o pitch
└── Última entrega de valor

### PITCH SECTION (15-20 minutos)
├── Transição para oferta
├── Apresentação completa da oferta
├── Stack de valor
├── Objeções
├── Urgência/escassez
└── CTA claro

### Q&A + CLOSE (tempo aberto)
├── Perguntas sobre a oferta
├── Objection handling ao vivo
├── Re-pitches conforme necessário
└── Fechamento
```

---

## Section-by-Section Guide

### 1. Opening (5-10 minutes)

```yaml
warm_opening:

  what_you_can_do:
    - "Falar um pouco sobre você (não muito)"
    - "Mencionar algo recente (post, evento, conquista)"
    - "Fazer uma piada ou referência interna"
    - "Reconhecer a comunidade"

  what_to_avoid:
    - "Passar 10 minutos só de papo"
    - "Pedir demais no chat (drop a 1, where are you from)"
    - "Assumir que todos te conhecem profundamente"
    - "Esquecer que ainda precisa entregar valor"

  example_opening: |
    "E aí pessoal, tudo bem?

    Para quem não me conhece ainda, sou [Nome].
    Para quem já me conhece, sabe que [referência ao seu estilo].

    Hoje vou mostrar [RESULTADO ESPECÍFICO] -
    isso é algo que venho refinando nos últimos [tempo]
    e finalmente está pronto para compartilhar.

    Antes de começar: se você viu [post/video recente],
    hoje vamos ir muito mais fundo nisso.

    Vamos lá."

  time: "Máximo 5 minutos de abertura"
```

### 2. Content Sections

```yaml
content_approach:

  section_1_what:
    focus: "O Framework / Big Picture"
    style: "Ensinar o conceito principal"
    elements:
      - "Explicar o que é"
      - "Por que funciona"
      - "Sua história com isso (storytelling)"
      - "O resultado que é possível"

  section_2_how:
    focus: "Os Detalhes / Como Fazer"
    style: "Demonstrar e exemplificar"
    elements:
      - "Passo a passo (high-level)"
      - "Exemplos reais"
      - "Demonstração se aplicável"
      - "Q&A interativo"

  section_3_application:
    focus: "Aplicação / Próximos Passos"
    style: "Conectar com a vida deles"
    elements:
      - "Como eles podem começar"
      - "Os obstáculos comuns"
      - "Por que precisam de ajuda"
      - "Transição para a oferta"

character_content_throughout:
  examples:
    - "Piadas sobre erros que você cometeu"
    - "Referências a situações conhecidas"
    - "Seu estilo de comunicação natural"
    - "Histórias pessoais relevantes"
```

### 3. The Pitch Section

```yaml
warm_pitch:

  transition_style: |
    Com warm audiences, a transição pode ser mais natural:

    "Então, olha só.
    Você viu o que é possível.
    Você entende como funciona.

    A pergunta agora é: como você vai implementar isso?

    Você tem duas opções..."

  pitch_structure:
    1_the_opportunity:
      - "Recapitular o resultado prometido"
      - "Reforçar que é possível"
      - "Criar desejo pelo outcome"

    2_the_offer:
      - "Apresentar o produto"
      - "O que está incluso"
      - "Por que você criou"

    3_the_stack:
      - "Valor de cada componente"
      - "Bônus"
      - "Valor total vs preço"

    4_the_guarantee:
      - "Remover risco"
      - "Explicar como funciona"

    5_the_urgency:
      - "Por que agir agora"
      - "O que perdem esperando"
      - "Deadline se houver"

    6_the_cta:
      - "Exatamente o que fazer"
      - "Link/botão claro"
      - "Expectativa do próximo passo"
```

### 4. Q&A + Close

```yaml
qa_close:

  approach: |
    Com warm audiences, o Q&A pode ser mais conversacional.
    Eles conhecem você, então podem fazer perguntas mais pessoais.

  handling_strategy:
    - "Responder com personalidade"
    - "Usar histórias para ilustrar"
    - "Reconhecer quem pergunta se possível"
    - "Fazer re-pitch após respostas relevantes"

  closing_tactics:
    - "Última chamada com deadline claro"
    - "Reconhecer quem já comprou"
    - "Lembrar do valor único para quem te segue"
    - "Encerrar com gratidão genuína"
```

---

## Affluent vs General Public (Warm)

```yaml
audience_adaptation:

  affluent_warm:
    duration: "60-90 minutos MAX"
    style: "Estratégico, high-level"
    content:
      - "Foco em resultados e outcomes"
      - "Menos táticas, mais visão"
      - "Respeitar o tempo deles"
    pitch:
      - "Direto e sem rodeios"
      - "Preço upfront"
      - "Valor em termos de ROI"

  general_public_warm:
    duration: "90-180 minutos (pode ser longo)"
    style: "Mais detalhado, mais hand-holding"
    content:
      - "Mais táticas e passo a passo"
      - "Mais exemplos e provas"
      - "Mais tempo para digerir"
    pitch:
      - "Mais justificativa de preço"
      - "Mais remoção de risco"
      - "Mais objection handling"
```

---

## Character Content Guidelines

```yaml
character_content:

  definition: |
    Elementos de personalidade que você normalmente
    não usaria com cold audiences.

  safe_to_use:
    - "Seu senso de humor natural"
    - "Histórias pessoais"
    - "Referências a conteúdo anterior"
    - "Inside jokes da comunidade"
    - "Opiniões que sua audiência conhece"
    - "Vulnerabilidade estratégica"

  examples:
    humor: "Se você faz piadas sobre X normalmente, pode fazer"
    stories: "Histórias que sua audiência já pode ter ouvido pedaços"
    references: "Menções a posts, videos, eventos anteriores"
    personality: "Jeitos de falar que são 'você'"

  calibration: |
    A regra é: se você faria isso em uma call 1:1 com um seguidor,
    você pode fazer no webinar warm.

    Se você NÃO faria com um estranho total,
    provavelmente não deve fazer com cold.
```

---

## Promotion & Show Rate

```yaml
promotion:

  timeline: "14 dias de antecedência (ideal)"
  reason: |
    Warm audiences precisam de tempo para:
    - Ver os múltiplos touchpoints
    - Encaixar na agenda
    - Construir anticipação

  tactics:
    - "Email sequence (pelo menos 5-7 emails)"
    - "Social media posts"
    - "Stories/Reels lembrando"
    - "Retargeting ads para quem não registrou"

show_rate_expectations:
  baseline: "40-50%"
  with_optimization: "60-70%"

  optimization_tactics:
    - "Hammer Them Strategy (retargeting)"
    - "Email sequence pré-webinar"
    - "SMS reminders"
    - "Confirmation page com video"
```

---

## Pop-Up Events (Post-Webinar)

```yaml
popup_events:

  definition: |
    Eventos menores que seguem o webinar principal
    para converter quem não comprou.

  format:
    - "Eventos presenciais pequenos"
    - "Calls de follow-up em grupo"
    - "Sessions de Q&A adicionais"
    - "Office hours"

  timing: "1-2 semanas após o webinar"

  purpose:
    - "Segunda chance de converter"
    - "Mais touch points"
    - "Diferente formato para diferentes preferências"
```

---

## Quality Checklist

```yaml
checklist:

  pre_webinar:
    - "[ ] Warm audience claramente definida"
    - "[ ] Frequência respeitada (máx mensal)"
    - "[ ] 14 dias de promoção planejados"
    - "[ ] Character content calibrado"
    - "[ ] Conteúdo alinhado com o que você já posta"

  content:
    - "[ ] Abertura com personalidade MAS rápida"
    - "[ ] Valor denso nas 3 seções"
    - "[ ] Storytelling relevante incluído"
    - "[ ] Demonstrações/exemplos preparados"

  pitch:
    - "[ ] Transição natural para oferta"
    - "[ ] Stack de valor completo"
    - "[ ] Objeções antecipadas"
    - "[ ] Urgência genuína"
    - "[ ] CTA claro"

  mindset:
    - "[ ] Lembrar: warm ≠ amigos"
    - "[ ] Ainda precisa provar valor"
    - "[ ] Personalidade sim, enrolação não"
```

---

## Output Deliverables

```yaml
deliverables:

  primary:
    - complete_script: |
        Script palavra por palavra
        Com indicações de character content
        Timing por seção

    - slide_deck: |
        Slides completos
        Notas do apresentador
        Pontos de transição

  secondary:
    - promotion_calendar: |
        14 dias de conteúdo
        Emails, posts, ads

    - follow_up_sequence: |
        Post-webinar para quem não comprou
        Pop-up event planning

  optional:
    - character_content_bank: |
        Piadas aprovadas
        Histórias prontas
        Referências para usar
```

---

## Version History

```yaml
version: "1.0"
created: "2025-01-24"
source: "Jeremy Haynes - Cold vs Warm Webinar Best Practices"
key_difference: |
  Warm webinars permitem mais personalidade e conexão,
  mas a frequência deve ser MENSAL para evitar fatigue.
  Cold pode ser semanal porque são pessoas novas.
```

---

*Task: Create Warm Webinar Script*
*Version: 1.0*
*Framework: Jeremy Haynes Warm Webinar System*


---

## Referência: references/create-webinar-script.md

# Create Webinar Script Task

## Purpose
Criar scripts de webinar de alta conversão que educam e vendem.

## Inputs

```yaml
required:
  - webinar_title: Título do webinar
  - product_name: Produto sendo vendido
  - price: Preço do produto
  - duration: Duração planejada (45-90 min)
  - target_avatar: Público-alvo

optional:
  - bonuses: Bônus da oferta
  - guarantee: Garantia oferecida
  - deadline: Urgência/escassez
  - presenter: Quem apresenta
  - style: educational | demo | case_study | hybrid
```

## Webinar Styles

### Frank Kern Style (Recommended)
- Casual, autêntico
- 70% valor, 30% pitch
- Storytelling pessoal
- Transição suave para oferta

### Dan Kennedy Style
- Urgência desde início
- Escassez real
- Oferta agressiva
- Call to action forte

### Russell Brunson Style
- Perfect Webinar framework
- 3 secrets structure
- Stack de valor visual
- Closes múltiplos

## Script Structure (Frank Kern Style)

### 1. PRE-FRAME (0-5 min)
```markdown
## Slide: Título do Webinar

"E aí, pessoal! [NOME] aqui. Antes de começar, quero
combinar uma coisa: vou entregar [CONTEÚDO] de verdade
hoje. No final, vou mostrar como podemos trabalhar juntos
se fizer sentido. Beleza? Vamos lá."
```

### 2. HOOK (5-10 min)
```markdown
## Slide: A Grande Promessa

"O que você vai descobrir nos próximos [X] minutos:

- [RESULTADO 1] - mesmo se [OBJEÇÃO]
- [RESULTADO 2] - sem [OBJEÇÃO]
- [RESULTADO 3] - em [TEMPO]

E não é teoria. Vou te mostrar exatamente como fazer."
```

### 3. STORY (10-20 min)
```markdown
## Slide: Minha História

"Deixa eu te contar como cheguei aqui...

[ANTES] - Onde você estava (relatável)
[EVENTO] - O que mudou
[DEPOIS] - Onde você está agora
[LIÇÃO] - O que você aprendeu

E foi isso que me levou a descobrir [MÉTODO]..."
```

### 4. CONTENT - Secret #1 (20-35 min)
```markdown
## Slide: Secret #1 - [NOME DO SECRET]

"O primeiro grande insight é [CONCEITO].

A maioria das pessoas pensa que [CRENÇA COMUM].
Mas a verdade é [REALIDADE].

Deixa eu te mostrar na prática...

[EXEMPLO/DEMONSTRAÇÃO]

Isso significa que você pode [RESULTADO] fazendo [AÇÃO]."
```

### 5. CONTENT - Secret #2 (35-50 min)
```markdown
## Slide: Secret #2 - [NOME DO SECRET]

"Agora que você entende [SECRET 1], o próximo nível é...

[CONTEÚDO EDUCACIONAL]

[EXEMPLO/CASE STUDY]

Percebe como isso muda tudo?"
```

### 6. CONTENT - Secret #3 (50-60 min)
```markdown
## Slide: Secret #3 - [NOME DO SECRET]

"E o terceiro - talvez o mais importante...

[CONTEÚDO EDUCACIONAL]

[DEMONSTRAÇÃO]

Com esses 3 elementos, você tem tudo pra [RESULTADO]."
```

### 7. TRANSITION (60-65 min)
```markdown
## Slide: Recapitulação

"Então, recapitulando:

1. [SECRET 1 - resultado]
2. [SECRET 2 - resultado]
3. [SECRET 3 - resultado]

Agora, eu sei que você está pensando:
'Isso é ótimo, mas como faço tudo isso na prática?'

E é exatamente por isso que criei [PRODUTO]..."
```

### 8. OFFER (65-80 min)
```markdown
## Slide: Apresentando [PRODUTO]

"[PRODUTO] é [DESCRIÇÃO CURTA].

Aqui está tudo que você recebe:

📦 Módulo 1: [NOME] - Valor R$[X]
   [O que faz/resultado]

📦 Módulo 2: [NOME] - Valor R$[X]
   [O que faz/resultado]

📦 Módulo 3: [NOME] - Valor R$[X]
   [O que faz/resultado]

🎁 Bônus 1: [NOME] - Valor R$[X]
   [O que é/por que importa]

🎁 Bônus 2: [NOME] - Valor R$[X]
   [O que é/por que importa]

---
Valor Total: R$[SOMA]
Seu Investimento: R$[PREÇO]
Economia: [PORCENTAGEM]%"
```

### 9. GUARANTEE (80-82 min)
```markdown
## Slide: Garantia

"E olha, eu sei que você pode estar pensando 'será que
funciona pra mim?'

Por isso ofereço [TIPO] de garantia:

[DETALHES DA GARANTIA]

Ou seja, o risco é todo meu. Se não funcionar pra você,
você não paga nada."
```

### 10. URGENCY (82-85 min)
```markdown
## Slide: Por Que Agora

"Agora, por que agir hoje?

⏰ [URGÊNCIA 1 - bônus expira, preço sobe, vagas limitadas]
⏰ [URGÊNCIA 2]

E honestamente? Quanto mais você espera, mais tempo
fica sem [RESULTADO]."
```

### 11. CLOSE (85-90 min)
```markdown
## Slide: Próximos Passos

"Então, aqui está o que fazer agora:

1. Clica no link [LINK]
2. [PASSOS DE COMPRA]
3. Você recebe acesso imediato

Alguma dúvida? Vou ficar mais uns minutos pra Q&A."
```

### 12. Q&A (90+ min)
```markdown
## Handling Objections

[OBJEÇÃO]: "Não tenho tempo"
[RESPOSTA]: "..."

[OBJEÇÃO]: "É muito caro"
[RESPOSTA]: "..."

[OBJEÇÃO]: "Preciso pensar"
[RESPOSTA]: "..."
```

## Output Deliverables

```yaml
deliverables:
  - complete_script: Falas completas
  - slide_outline: Estrutura de slides
  - timing_guide: Quanto tempo por seção
  - objection_handlers: Respostas para Q&A
  - email_sequence: Convites e follow-ups
  - replay_strategy: O que fazer com replay
```

## Quality Checklist

- [ ] Hook nos primeiros 5 minutos
- [ ] Conteúdo entrega valor real
- [ ] Transição para oferta é suave
- [ ] Stack de valor é visual e claro
- [ ] Garantia remove risco
- [ ] Urgência é genuína
- [ ] CTA é claro e repetido
- [ ] Q&A cobre objeções comuns

---

*Task Version: 1.0*


---

## Referência: references/vsl-script.md

# VSL Script Task - Video Sales Letter

## Purpose

Criar scripts completos de Video Sales Letter (VSL) usando a metodologia 3X Formula de Jon Benson (inventor do VSL), com estrutura de 9 passos, hooks de alta conversão, e técnicas avançadas de storytelling e persuasão em vídeo. Este task gera VSLs que convertem 3-10x mais que páginas de texto.

---

## Tier 0: Diagnostic Questions

Antes de criar qualquer VSL, responda estas perguntas diagnósticas:

```yaml
tier_0_diagnosis:

  product_clarity:
    - Qual é o produto/serviço sendo vendido?
    - Qual é o preço exato e modelo de pagamento?
    - Qual é a transformação/resultado prometido?
    - Quem é o avatar específico (detalhado)?

  vsl_strategy:
    - Qual a duração ideal? (5, 10, 15, 20, 30 minutos)
    - Qual formato? (text-on-screen, presenter, hybrid, animated)
    - Onde será usado? (landing page, ads, webinar follow-up)
    - Qual o ticket? (low <$100, mid $100-500, high $500+)

  messaging_foundation:
    - Qual é a BIG IDEA/mecanismo único?
    - Qual é a história de origem do apresentador?
    - Quais provas sociais temos disponíveis?
    - Quais são as 3 principais objeções?

  competitive_landscape:
    - O que o avatar já tentou antes?
    - Por que essas soluções falharam?
    - O que torna esta solução diferente?
    - Qual é o "inimigo comum"?
```

---

## Inputs

```yaml
required:
  - product_name: "Nome do produto/serviço"
  - product_description: "O que é e o que entrega"
  - target_avatar: "Público-alvo detalhado"
  - main_problem: "Dor principal que resolve"
  - big_idea: "O mecanismo único ou descoberta"
  - price: "Preço do produto"
  - target_duration: "5 | 10 | 15 | 20 | 30 minutos"

optional:
  - origin_story: "História de origem do apresentador"
  - testimonials: "Depoimentos disponíveis"
  - guarantee: "Tipo de garantia"
  - urgency: "Elementos de urgência/escassez"
  - bonuses: "Lista de bônus com valores"
  - vsl_format: "text_on_screen | presenter | hybrid | animated"
  - copywriter_style: "benson | kern | kennedy"
  - tone: "emocional | racional | misto"
  - visual_notes: "Se incluir indicações visuais (true/false)"
```

---

## Why VSLs Convert Higher

### Statistics and Data

```yaml
vsl_vs_text_performance:
  conversion_rate_increase: "3-10x higher"
  time_on_page: "10-30 min vs 2-3 min"
  average_conversion:
    text_page: "1-2%"
    vsl: "4-10%+"

psychology:
  passive_consumption: "Watching < Reading (less effort)"
  emotional_transmission: "Voice carries emotion text cannot"
  retention: "95% retain video vs 10% text"
  trust_building: "Presenter creates face-to-face effect"
```

### Jon Benson's Legacy

> "Jon's 5-Step VSL Process™ is found within the world's most profitable video sales letters."
> — jonbenson.com

- **Inventor of the VSL** (2005)
- **$12 BILLION+** generated for clients
- **3X Formula** - 3 times the conversions of text
- **Creator of CopyPro and BNSN AI**

---

## VSL Formats

### Format 1: Text-on-Screen (Benson Original)

```yaml
text_on_screen:
  description: "Texto aparece na tela sincronizado com narração"

  advantages:
    - "Barato para produzir"
    - "Sem necessidade de apresentador"
    - "Fácil de testar/iterar"
    - "Funciona para qualquer nicho"
    - "Previne que pulem conteúdo"

  disadvantages:
    - "Pode parecer datado"
    - "Não demonstra produto fisicamente"
    - "Menor confiança que face-to-camera"

  best_for:
    - "Infoprodutos"
    - "Suplementos"
    - "Cursos digitais"
    - "Testes de novas ofertas"
    - "Orçamento limitado"

  production_specs:
    - "PowerPoint/Keynote/Canva slides"
    - "Texto preto/branco em fundo contrastante"
    - "Narração profissional"
    - "Música de fundo sutil (opcional)"
    - "2-3 linhas por slide máximo"
```

### Format 2: Presenter-Led

```yaml
presenter_led:
  description: "Apresentador na câmera entregando o script"

  advantages:
    - "Maior fator de confiança"
    - "Conexão pessoal"
    - "Pode demonstrar produto"
    - "Visual moderno, profissional"

  disadvantages:
    - "Caro para produzir"
    - "Difícil de iterar"
    - "Apresentador precisa ser compelling"

  best_for:
    - "Ofertas high-ticket ($2k+)"
    - "Marcas pessoais"
    - "Coaching/consultoria"
    - "Serviços B2B"

  production_specs:
    - "Iluminação e áudio profissional"
    - "Teleprompter ou memorizado"
    - "Múltiplos ângulos de câmera"
    - "B-roll e cutaways"
```

### Format 3: Hybrid

```yaml
hybrid:
  description: "Mix de apresentador, text-on-screen, e B-roll"

  structure:
    - "Apresentador para intro/story/close"
    - "Text-on-screen para dados/mecanismos"
    - "B-roll para testimoniais/resultados"

  advantages:
    - "Melhor dos dois mundos"
    - "Mantém variedade de engajamento"
    - "Maior valor de produção"

  best_for:
    - "Medium a high-ticket"
    - "Produtos físicos"
    - "Demos de software/SaaS"
```

### Format 4: Animated

```yaml
animated:
  description: "Animação e motion graphics com narração"

  advantages:
    - "Visualmente engaging"
    - "Explica conceitos complexos"
    - "Sem necessidade de apresentador"
    - "Único/memorável"

  best_for:
    - "Produtos SaaS"
    - "Soluções técnicas"
    - "Vídeos explicativos"
```

---

## VSL Duration by Price Point

### Matching Length to Offer

```yaml
duration_matrix:

  low_ticket_under_100:
    duration: "5-10 minutos"
    structure: "Compacta, direta"
    focus: "Prova rápida, close rápido"
    example: "E-book $27, mini-curso $47"

  mid_ticket_100_500:
    duration: "15-25 minutos"
    structure: "Framework completo"
    focus: "Story + mecanismo + prova"
    example: "Curso $297, programa $497"

  high_ticket_500_2000:
    duration: "30-45 minutos"
    structure: "Story estendida, prova profunda"
    focus: "Construção de relacionamento, objeções"
    example: "Mentoria $997, programa premium $1997"

  premium_2000_plus:
    duration: "45-60+ minutos"
    structure: "Estilo webinar"
    focus: "Educação + venda"
    example: "High-ticket $5k+, mastermind"
```

---

## Jon Benson's 9-Step Million Dollar VSL Framework

### Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                   9-STEP VSL FRAMEWORK (BENSON)                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  STEP 1: BIG IDEA / MECANISMO                                   │
│  └── O conceito único que faz tudo funcionar                    │
│                                                                  │
│  STEP 2: HOOK (0-60 segundos)                                   │
│  └── Parar o scroll, criar curiosidade                          │
│                                                                  │
│  STEP 3: PROBLEM AMPLIFICATION                                   │
│  └── Fazer sentir a dor profundamente                           │
│                                                                  │
│  STEP 4: ORIGIN STORY                                           │
│  └── Conexão através de vulnerabilidade                         │
│                                                                  │
│  STEP 5: MECHANISM REVEAL                                        │
│  └── Por que funciona (credibilidade)                           │
│                                                                  │
│  STEP 6: PROOF STACK                                            │
│  └── Eliminar dúvidas com evidências                            │
│                                                                  │
│  STEP 7: SOLUTION REVEAL                                        │
│  └── Apresentar o produto/oferta                                │
│                                                                  │
│  STEP 8: OFFER STACK                                            │
│  └── Valor irresistível                                         │
│                                                                  │
│  STEP 9: CLOSE                                                  │
│  └── Triple close + CTA                                         │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Step 1: The Big Idea / Mechanism

### What It Is

A BIG IDEA é o conceito único, a descoberta ou mecanismo que torna seu produto diferente de tudo que o avatar já tentou.

### Examples

```yaml
big_idea_examples:

  health:
    weak: "Perca peso com dieta e exercício"
    strong: "O 'Loophole da Resistência à Insulina' que faz seu corpo queimar gordura 24h por dia"

  business:
    weak: "Aprenda marketing digital"
    strong: "O 'Método 3H' que gera R$10k/mês com apenas 3 horas por semana de trabalho"

  relationships:
    weak: "Melhore seu relacionamento"
    strong: "O 'Protocolo de Reconexão de 7 Dias' que salvou 2.347 casamentos à beira do divórcio"
```

### Big Idea Template

```markdown
## BIG IDEA

"O [NOME PROPRIETÁRIO DO MECANISMO] que permite
[AVATAR] conseguir [RESULTADO DESEJADO]
sem [OBJEÇÃO COMUM 1] ou [OBJEÇÃO COMUM 2]."

Por que funciona:
- [RAZÃO CIENTÍFICA/LÓGICA 1]
- [RAZÃO CIENTÍFICA/LÓGICA 2]
- [RAZÃO CIENTÍFICA/LÓGICA 3]

Por que ninguém fala sobre isso:
- [RAZÃO - indústria, ignorância, interesse]
```

---

## Step 2: The Hook (First 60 Seconds)

### Hook Statistics

```yaml
hook_data:
  attention_span: "8 segundos médios"
  decision_point: "Primeiros 5-10 segundos"
  drop_off: "50% saem nos primeiros 30s se não houver hook"

critical_elements:
  - "Pattern interrupt (inesperado)"
  - "Relevância (fala com eles)"
  - "Curiosidade (quer saber mais)"
  - "Promessa (benefício claro)"
```

### 8 Hook Formulas

```yaml
hook_formulas:

  1_bold_claim:
    formula: "O que vou compartilhar vai [RESULTADO BOLD]"
    example: |
      "O que vou compartilhar nos próximos 12 minutos
      ajudou 47.392 pessoas a perder em média 23kg
      em apenas 6 semanas."
    best_for: "Resultados comprovados com números"

  2_question_hook:
    formula: "Você já [FRUSTRAÇÃO RELATÁVEL]?"
    example: |
      "Você já sentiu que não importa qual dieta tenta,
      o peso sempre volta? E se eu te dissesse que
      o problema não é a dieta?"
    best_for: "Dores emocionais comuns"

  3_enemy_hook:
    formula: "[AUTORIDADE/INDÚSTRIA] não quer que você saiba isso"
    example: |
      "A indústria de dietas tem escondido isso de você
      por décadas... porque se você soubesse, nunca
      mais compraria outro suplemento."
    best_for: "Narrativas de conspiração/revelação"

  4_discovery_hook:
    formula: "Eu descobri [COISA ESPECÍFICA] que [RESULTADO]"
    example: |
      "Eu recentemente descobri um ritual de 2 minutos
      que derrete gordura abdominal enquanto você dorme.
      E não, não é exercício."
    best_for: "Novidades, descobertas recentes"

  5_story_hook:
    formula: "Em [ANO], eu [SITUAÇÃO]... então algo mudou"
    example: |
      "Em 2019, eu estava 30kg acima do peso, pré-diabético,
      e tinha desistido de tudo... até que tropecei em algo
      que mudou minha vida completamente."
    best_for: "Stories pessoais de transformação"

  6_number_hook:
    formula: "[NÚMERO ESPECÍFICO] [PESSOAS] já [RESULTADO]"
    example: |
      "Mais de 127.000 pessoas já usaram este método
      para parar de fumar em menos de 7 dias.
      Sem remédios, sem patches, sem força de vontade."
    best_for: "Prova social massiva"

  7_warning_hook:
    formula: "Se você [FAZ X], precisa ver isso"
    example: |
      "Se você ainda está comendo grãos 'integrais saudáveis',
      você PRECISA ver isso antes da sua próxima refeição.
      O que vou mostrar pode salvar sua vida."
    best_for: "Alertas, urgência"

  8_myth_buster_hook:
    formula: "Tudo que te disseram sobre [TÓPICO] está errado"
    example: |
      "Tudo que você ouviu sobre construir músculo depois
      dos 40 está completamente errado. E posso provar
      em menos de 15 minutos."
    best_for: "Contrarian views, re-educação"
```

### Hook Script Template

```markdown
## HOOK [00:00 - 01:00]

[VISUAL: Close no apresentador ou texto em tela]
[TOM: Intrigante, confiante]

"[HOOK FORMULA - escolha uma das 8 acima]"

[PAUSA: 2 segundos]

"Nos próximos [X] minutos, vou te mostrar:

✓ [PROMESSA 1 - resultado específico]
✓ [PROMESSA 2 - sem objeção comum]
✓ [PROMESSA 3 - em timeframe atrativo]

Mas primeiro, preciso te contar uma coisa que ninguém fala..."

[TRANSIÇÃO para Problem Amplification]
```

---

## Step 3: Problem Amplification

### The Pain Stack Technique

```yaml
pain_stack:

  level_1_surface:
    what: "O problema óbvio"
    example: "Você está acima do peso"

  level_2_daily:
    what: "Como afeta o dia a dia"
    example: "Acorda cansado, roupas não servem, evita espelhos"

  level_3_social:
    what: "Como outros percebem"
    example: "Os olhares, o julgamento, sentir-se invisível"

  level_4_future:
    what: "O que acontece se nada mudar"
    example: "Diabetes, doença cardíaca, morte precoce"

  level_5_identity:
    what: "Quem eles se tornaram"
    example: "Você se tornou alguém que não reconhece"
```

### Problem Amplification Script

```markdown
## PROBLEM AMPLIFICATION [01:00 - 06:00]

[VISUAL: B-roll de situações frustrantes ou texto emocional]
[TOM: Empático, não julgador]

"Se você está assistindo isso, provavelmente conhece bem essa sensação:

Você acorda de manhã, olha no espelho, e pensa... [PENSAMENTO NEGATIVO].

[PAUSA]

Talvez você já tenha tentado [SOLUÇÃO COMUM 1].
Funcionou por um tempo... mas depois? [RESULTADO NEGATIVO].

Ou talvez [SOLUÇÃO COMUM 2].
Mesma história. [FRUSTRAÇÃO].

E o pior é que cada vez que você tenta e falha,
uma vozinha na sua cabeça diz: '[CRENÇA LIMITANTE]'.

[TOM: Mais sério]

E se você não resolver isso agora, sabe o que acontece?

[CONSEQUÊNCIA 1 - curto prazo]
[CONSEQUÊNCIA 2 - médio prazo]
[CONSEQUÊNCIA 3 - longo prazo]

Mas aqui está a verdade que ninguém te conta:

O problema NÃO é [O QUE ELES PENSAM].
O problema REAL é [ROOT CAUSE]...

E foi exatamente isso que descobri depois de [EXPERIÊNCIA]."

[TRANSIÇÃO para Origin Story]
```

### "You" Language Density

De Jon Benson:
> "Quando escrever copy, não tenha medo de usar excessivamente a palavra 'você' e quebrar as regras de gramática."

**Densidade recomendada:** "Você" a cada 2-3 frases.

---

## Step 4: Origin Story

### Hero's Journey Simplified

```yaml
origin_story_structure:

  relatable_beginning:
    purpose: "Mostrar que você era como eles"
    elements:
      - "Mesmas lutas"
      - "Mesmas dúvidas"
      - "Mesmas tentativas falhas"
    tone: "Vulnerável, honesto"

  rock_bottom:
    purpose: "Ponto dramático baixo"
    elements:
      - "Momento/evento específico"
      - "Breaking point emocional"
      - "O que estava em jogo"
    tone: "Raw, emocional"

  catalyst:
    purpose: "O que triggou a mudança"
    elements:
      - "Descoberta inesperada"
      - "Conhecer alguém"
      - "Breakthrough de pesquisa"
    tone: "Pivotal, surpreendente"

  discovery:
    purpose: "A solução emergiu"
    elements:
      - "Testar e refinar"
      - "Primeiros resultados"
      - "Percepção de que poderia ajudar outros"
    tone: "Excitado, revelador"

  transformation:
    purpose: "Onde você está agora"
    elements:
      - "Resultados específicos alcançados"
      - "Nova identidade/vida"
      - "Missão de ajudar outros"
    tone: "Confiante, generoso"
```

### Origin Story Script Template

```markdown
## ORIGIN STORY [06:00 - 12:00]

[VISUAL: Fotos pessoais, antes/depois se disponível]
[TOM: Pessoal, íntimo]

"Deixa eu te contar como tudo começou...

[RELATABLE BEGINNING]
[X] anos atrás, eu estava exatamente onde você está agora.

Eu era [SITUAÇÃO RELATÁVEL].
Eu tentava [MÉTODOS COMUNS]... e falhava.
Eu acreditava que [CRENÇA LIMITANTE].

[PAUSA]

[ROCK BOTTOM]
Então veio o dia que mudou tudo.

Era [DATA/MOMENTO ESPECÍFICO].
[DESCREVER O MOMENTO DRAMÁTICO]
Eu me lembro de pensar: '[PENSAMENTO RAW]'.

Foi o fundo do poço.

[CATALYST]
Mas foi exatamente nesse momento que algo inesperado aconteceu.

[DESCREVER A DESCOBERTA]

No começo eu não acreditei. Mas...

[DISCOVERY]
Eu decidi testar. E os resultados foram [SURPRESA].

Em [TIMEFRAME], eu [PRIMEIRO RESULTADO].
Em [TIMEFRAME MAIOR], eu [RESULTADO MAIOR].

As pessoas começaram a perguntar: 'O que você está fazendo?'

[TRANSFORMATION]
Hoje, [DESCREVER NOVA REALIDADE].

E percebi que tinha a obrigação de compartilhar isso.
Não porque eu quero vender algo...
Mas porque sei como é estar onde você está.

E sei que existe uma saída."

[TRANSIÇÃO para Mechanism]
```

### Vulnerability Balance

```yaml
vulnerability_guidelines:

  too_little:
    problem: "Parece fake, não relatável"
    example: "Tive um pequeno problema mas resolvi rápido"

  just_right:
    effect: "Constrói confiança e conexão"
    example: "Estava R$50k em dívidas, meu casamento desmoronando, chorava pra dormir"

  too_much:
    problem: "Vira sobre você, não sobre eles"
    example: "[Trauma dump extensivo que domina o vídeo]"

  guideline: "Compartilhe o suficiente para conectar, depois volte para a HISTÓRIA DELES"
```

---

## Step 5: Mechanism Reveal

### What Makes Your Solution Different

```markdown
## MECHANISM REVEAL [12:00 - 16:00]

[VISUAL: Diagramas, animações simples, demonstrações]
[TOM: Autoritativo, confiante]

"Agora, você deve estar se perguntando:
'Ok, mas POR QUE isso funciona?'

Ótima pergunta. Deixa eu explicar.

A razão pela qual [SOLUÇÕES COMUNS] não funcionam é porque
elas atacam [SINTOMA], não [CAUSA RAIZ].

[EXPLICAR CAUSA RAIZ]

O que descobri é um conceito que chamo de [NOME PROPRIETÁRIO].

Funciona assim:

PASSO 1: [EXPLICAÇÃO SIMPLES]
Por que importa: [CONEXÃO COM RESULTADO]

PASSO 2: [EXPLICAÇÃO SIMPLES]
Por que importa: [CONEXÃO COM RESULTADO]

PASSO 3: [EXPLICAÇÃO SIMPLES]
Por que importa: [CONEXÃO COM RESULTADO]

[SE APLICÁVEL: BACKING CIENTÍFICO]
Isso não é só teoria. [ESTUDO/PESQUISA/EXPERT] confirmou que
[VALIDAÇÃO DO MECANISMO].

[TOM: Revelador]
É por isso que mesmo pessoas que [SITUAÇÃO DIFÍCIL]
conseguiram [RESULTADO] usando este método.

Não é mágica. É [CIÊNCIA/LÓGICA/SISTEMA]."

[TRANSIÇÃO para Proof]
```

---

## Step 6: Proof Stack

### Hierarchy of Proof

```yaml
proof_hierarchy:

  tier_1_highest:
    - "Depoimentos em vídeo (rosto na câmera)"
    - "Antes/depois com verificação"
    - "Endorsements de terceiros (mídia, experts)"

  tier_2_strong:
    - "Depoimentos escritos com fotos"
    - "Case studies com números específicos"
    - "Validação científica/expert"

  tier_3_supporting:
    - "Contagem de usuários/estatísticas"
    - "Anos no mercado"
    - "Certificações/credenciais"

  tier_4_implied:
    - "Qualidade de produção"
    - "Logos de marcas"
    - "Profissionalismo do site"
```

### Proof Script Template

```markdown
## PROOF STACK [16:00 - 20:00]

[VISUAL: Depoimentos, screenshots, logos]
[TOM: Factual, confiante]

"Agora, você não precisa acreditar em mim.
Veja o que [TIPO DE PESSOA] está dizendo:

[DEPOIMENTO 1 - VÍDEO IDEAL]
'[NOME]' era [SITUAÇÃO ANTES].
Depois de [TEMPO], [RESULTADO ESPECÍFICO].

[B-ROLL ou TEXT: Screenshot do depoimento]

E não foi só [ELE/ELA]...

[DEPOIMENTO 2]
'[NOME]' de [LOCAL] conseguiu [RESULTADO] em [TEMPO].

[DEPOIMENTO 3]
'[NOME]', [SITUAÇÃO ESPECÍFICA], agora [RESULTADO].

[PAUSA]

Na verdade, até agora, [NÚMERO] pessoas usaram este método.
E a taxa de sucesso é de [PORCENTAGEM].

[SE APLICÁVEL: VALIDAÇÃO EXTERNA]
Isso foi reconhecido por [MÍDIA/EXPERT/INSTITUIÇÃO]...

[VISUAL: Logos, screenshots de menções]

Mas o mais importante: funciona para pessoas REAIS,
com vidas REAIS, e desafios REAIS.

Pessoas exatamente como você."

[TRANSIÇÃO para Solution]
```

### Testimonial Structure

```yaml
testimonial_ideal_structure:
  before: "Antes de [PRODUTO], eu era [SITUAÇÃO ESPECÍFICA]..."
  doubt: "Eu estava cético porque [OBJEÇÃO ESPECÍFICA]..."
  decision: "Mas decidi tentar porque [RAZÃO]..."
  experience: "Em [TIMEFRAME], notei [RESULTADO ESPECÍFICO]..."
  after: "Agora eu [NOVA REALIDADE/RESULTADO]..."
  recommend: "Conto pra todo mundo porque [RAZÃO]..."
```

---

## Step 7: Solution Reveal

### Introducing the Product

```markdown
## SOLUTION REVEAL [20:00 - 22:00]

[VISUAL: Logo do produto, imagem principal]
[TOM: Generoso, excitado]

"E é exatamente por isso que criei [NOME DO PRODUTO].

[NOME DO PRODUTO] é [DESCRIÇÃO EM UMA FRASE].

É o sistema completo que te leva de [PONTO A] para [PONTO B]
sem [OBJEÇÃO 1], sem [OBJEÇÃO 2], em [TIMEFRAME].

Aqui está tudo que você recebe quando entra hoje..."

[TRANSIÇÃO para Offer Stack]
```

---

## Step 8: Offer Stack

### Value Stack Psychology

```yaml
value_stack_principles:

  anchor_high:
    what: "Comece com itens de maior valor"
    why: "Define baseline de percepção"

  individual_values:
    what: "Atribua valor em R$ para cada componente"
    why: "Cria comparação tangível"

  justify_values:
    what: "Explique por que cada item vale aquele valor"
    why: "Torna valores críveis"

  calculate_total:
    what: "Some tudo visualmente"
    why: "Cria contraste massivo com preço"

  reveal_price_last:
    what: "Mostre investimento real por último"
    why: "Parece uma pechincha vs valor total"
```

### Offer Stack Script Template

```markdown
## OFFER STACK [22:00 - 27:00]

[VISUAL: Boxes visuais, checklists, valores]
[TOM: Generoso, justo]

"Deixa eu te mostrar tudo que está incluído:

┌─────────────────────────────────────────────────────────────────┐
│                    TUDO QUE VOCÊ RECEBE                         │
├─────────────────────────────────────────────────────────────────┤

📦 PROGRAMA PRINCIPAL: [NOME]
   [O que é / resultado que entrega]
   Valor: R$ [VALOR]

📦 MÓDULO 1: [NOME]
   [Descrição / resultado]
   Valor: R$ [VALOR]

📦 MÓDULO 2: [NOME]
   [Descrição / resultado]
   Valor: R$ [VALOR]

📦 MÓDULO 3: [NOME]
   [Descrição / resultado]
   Valor: R$ [VALOR]

───────────────────────────────────────────────────────────────────

MAS ESPERA... SE VOCÊ ENTRAR HOJE, TAMBÉM RECEBE:

🎁 BÔNUS #1: [NOME] (Apenas para quem entra hoje)
   [O que é / por que vale]
   Valor: R$ [VALOR]

🎁 BÔNUS #2: [NOME]
   [O que é / por que vale]
   Valor: R$ [VALOR]

🎁 BÔNUS #3: [NOME]
   [O que é / por que vale]
   Valor: R$ [VALOR]

═══════════════════════════════════════════════════════════════════

VALOR TOTAL: R$ [SOMA DE TUDO]

SEU INVESTIMENTO HOJE: R$ [PREÇO REAL]

VOCÊ ECONOMIZA: R$ [DIFERENÇA] ([X]%)
└─────────────────────────────────────────────────────────────────┘

[PAUSA]

'Mas e se não funcionar pra mim?'

Ótima pergunta. Por isso ofereço a Garantia [NOME]:

[DETALHES DA GARANTIA]

Isso significa: o risco é TODO MEU.
Se em [DIAS], por QUALQUER motivo, você não estiver satisfeito,
basta enviar um email e devolvemos 100% do seu investimento.

Sem perguntas. Sem burocracia."

[TRANSIÇÃO para Close]
```

---

## Step 9: The Close

### Triple Close Framework

```yaml
triple_close:

  logic_close:
    purpose: "Apelar para mente racional"
    technique: "Mostrar ROI, matemática, comparação de valor"

  fear_close:
    purpose: "O que perdem se não agirem"
    technique: "Future pacing negativo"

  urgency_close:
    purpose: "Criar razão para agir AGORA"
    technique: "Escassez legítima"
```

### Close Script Template

```markdown
## CLOSE [27:00 - 30:00]

[VISUAL: Botão de CTA visível, countdown se aplicável]
[TOM: Urgente mas sincero]

**CLOSE #1: LÓGICA**

"Vamos fazer a matemática:

Você está investindo R$ [PREÇO] para receber R$ [VALOR TOTAL] em valor.

Isso é um retorno de [X]x ANTES de implementar qualquer coisa.

Se isso te ajudar a conseguir [RESULTADO MÍNIMO], já pagou [X] vezes
o investimento.

A matemática faz sentido, não faz?

[PAUSA]

**CLOSE #2: MEDO**

Mas aqui está o que me preocupa...

O que acontece se você fechar essa página sem agir?

[PAUSA]

Daqui 6 meses, você está exatamente onde está agora.
Ainda lidando com [PROBLEMA].
Ainda frustrado com [DOR].
Ainda querendo [RESULTADO] mas não tendo.

Eu sei como isso é. Eu já estive aí.

A pergunta não é 'posso investir nisso?'
A pergunta é 'posso me dar ao luxo de NÃO investir?'

[PAUSA]

**CLOSE #3: URGÊNCIA**

E aqui está por que você precisa decidir AGORA:

⏰ [URGÊNCIA 1 - ex: Bônus X só hoje]
⏰ [URGÊNCIA 2 - ex: Preço sobe amanhã]
⏰ [URGÊNCIA 3 - ex: Vagas limitadas]

Essas condições são REAIS. Não é tática. É realidade.

**CTA FINAL**

Então aqui está o que fazer agora:

1️⃣ Clica no botão abaixo deste vídeo
2️⃣ Preenche o formulário simples
3️⃣ Você recebe acesso IMEDIATO a tudo

É isso. Em menos de 2 minutos, você está dentro.

E lembra: você tem a Garantia [NOME].
Zero risco. Toda a recompensa.

O botão está logo abaixo.

Clica agora.

Eu te vejo do outro lado."

[FIM]
```

---

## Copywriter Styles for VSL

### Style 1: Jon Benson (Recommended)

```yaml
benson_style:
  characteristics:
    - "Formato text-on-screen original"
    - "Emocionalmente driven"
    - "Conversacional, casual"
    - "Story-heavy"
    - "Vulnerabilidade relatável"

  content_ratio: "60% conteúdo / 40% oferta"

  best_for:
    - "Health/fitness"
    - "Make money online"
    - "Self-improvement"
    - "Produtos digitais"

  signature_techniques:
    - "3X Formula"
    - "Saturação de 'você'"
    - "Cliff-hanger transitions"
    - "Pausas dramáticas"
```

### Style 2: Frank Kern

```yaml
kern_style:
  characteristics:
    - "Laid back, casual"
    - "Quase anti-venda"
    - "Stories pessoais dominantes"
    - "Soft close"
    - "Autenticidade > polish"

  content_ratio: "70% conteúdo / 30% oferta"

  best_for:
    - "Coaching"
    - "Serviços B2B"
    - "Marcas pessoais"
    - "Audiências sofisticadas"

  signature_techniques:
    - "Pre-frame de 'não vou vender muito'"
    - "Histórias pessoais extensivas"
    - "Oferta como 'se fizer sentido'"
```

### Style 3: Dan Kennedy

```yaml
kennedy_style:
  characteristics:
    - "Direto, sem enrolação"
    - "Urgência desde o início"
    - "Escassez pesada"
    - "CTA agressivo"
    - "Value stacking emphasis"

  content_ratio: "40% conteúdo / 60% oferta"

  best_for:
    - "Ofertas de resposta direta"
    - "Deals time-sensitive"
    - "Compradores experientes"

  signature_techniques:
    - "'Não é pra todo mundo'"
    - "Desqualificação ativa"
    - "Take it or leave it"
```

---

## Script Formatting Conventions

### Timestamps

```markdown
[00:00] - Início de seção
[00:30] - Timestamp específico
```

### Direction Notes

```markdown
[TOM: descrição] - Como falar
[PAUSA: Xs] - Pausas estratégicas
[ÊNFASE: palavra] - O que destacar
[VISUAL: descrição] - O que mostrar
[B-ROLL: descrição] - Cortes visuais
[MÚSICA: descrição] - Mudanças de música
```

### Transitions

```markdown
---TRANSIÇÃO---
[Descrição da transição]
---
```

---

## VSL Timing Guide by Duration

### 5-Minute VSL (Low Ticket)

```yaml
timing_5min:
  hook: "00:00-00:15"
  problem: "00:15-00:45"
  mechanism: "00:45-01:30"
  proof: "01:30-02:00"
  offer: "02:00-04:00"
  close: "04:00-05:00"
```

### 15-Minute VSL (Mid Ticket)

```yaml
timing_15min:
  hook: "00:00-01:00"
  problem: "01:00-03:30"
  origin_story: "03:30-06:30"
  mechanism: "06:30-08:30"
  proof: "08:30-10:30"
  offer: "10:30-13:30"
  close: "13:30-15:00"
```

### 30-Minute VSL (High Ticket)

```yaml
timing_30min:
  hook: "00:00-01:00"
  problem: "01:00-06:00"
  origin_story: "06:00-12:00"
  mechanism: "12:00-16:00"
  proof: "16:00-20:00"
  solution: "20:00-22:00"
  offer: "22:00-27:00"
  close: "27:00-30:00"
```

---

## Production Guidelines

### Audio Best Practices

```yaml
audio_guidelines:

  pacing:
    - "Mais lento que conversa normal"
    - "Pausas após pontos-chave"
    - "Variar ritmo para ênfase"

  tone_by_section:
    hook: "Energético, attention-grabbing"
    problem: "Empático, compreensivo"
    story: "Pessoal, vulnerável"
    mechanism: "Autoritativo, confiante"
    proof: "Factual, impressionado"
    offer: "Generoso, excitado"
    close: "Urgente, sincero"

  technical:
    - "Microfone profissional"
    - "Ambiente silencioso"
    - "Compressão leve, EQ"
    - "Volume consistente"
```

### Visual Best Practices (Text-on-Screen)

```yaml
visual_guidelines:

  typography:
    - "Fontes sans-serif (Arial, Helvetica)"
    - "Alto contraste"
    - "Grande o suficiente para mobile"
    - "2-3 linhas máximo por slide"

  timing:
    - "Palavras aparecem sincronizadas"
    - "Permitir tempo para ler"
    - "Destacar palavras-chave com cor/bold"

  pacing:
    - "Novo slide a cada 3-5 segundos"
    - "Pattern interrupt com layouts diferentes"
    - "Imagens/gráficos a cada 30-60 segundos"
```

---

## Output Deliverables

```yaml
deliverables:

  primary:
    - complete_script: |
        Script completo com todas as falas
        Timestamps por seção
        Notas de direção integradas

    - timing_guide: |
        Breakdown de tempo por seção
        Checkpoints de engajamento

  secondary:
    - hook_variations: |
        3-5 hooks alternativos para teste
        Diferentes fórmulas aplicadas

    - proof_script: |
        Scripts para depoimentos
        Estrutura sugerida para cases

    - direction_notes: |
        Compilado de notas visuais/tom
        Recomendações de produção

  optional:
    - slide_outline: |
        Títulos de todos os slides
        Estrutura visual sugerida

    - music_guide: |
        Recomendações de música por seção
        Mood board sonoro
```

---

## Quality Checklist

### Hook Checklist

```yaml
hook_checklist:
  - [ ] Prende atenção em <5 segundos?
  - [ ] Pattern interrupt presente?
  - [ ] Promessa específica e crível?
  - [ ] Curiosidade criada?
  - [ ] Relevante para avatar?
```

### Problem Checklist

```yaml
problem_checklist:
  - [ ] Avatar se identifica imediatamente?
  - [ ] Emoção é palpável?
  - [ ] Pain stack completo (5 níveis)?
  - [ ] Soluções falhas mencionadas?
  - [ ] Root cause revelado?
```

### Story Checklist

```yaml
story_checklist:
  - [ ] Vulnerabilidade real?
  - [ ] Arco claro (antes/crise/depois)?
  - [ ] Relatável para avatar?
  - [ ] Ponte para mecanismo?
```

### Mechanism Checklist

```yaml
mechanism_checklist:
  - [ ] Explicação clara e simples?
  - [ ] Nome proprietário criado?
  - [ ] Por que funciona explicado?
  - [ ] Diferenciação de alternativas?
```

### Proof Checklist

```yaml
proof_checklist:
  - [ ] Provas verificáveis?
  - [ ] Variedade de tipos?
  - [ ] Específicas (números, nomes)?
  - [ ] Distribuídas ao longo do vídeo?
```

### Offer Checklist

```yaml
offer_checklist:
  - [ ] Valor percebido > preço?
  - [ ] Cada componente com valor R$?
  - [ ] Bônus agregam valor?
  - [ ] Garantia remove risco?
  - [ ] Stack visual funciona?
```

### Close Checklist

```yaml
close_checklist:
  - [ ] Triple close presente?
  - [ ] Urgência legítima?
  - [ ] CTA claro e repetido?
  - [ ] Garantia reforçada?
```

### Technical Checklist

```yaml
technical_checklist:
  - [ ] Timing dentro do target?
  - [ ] Som bem quando lido em voz alta?
  - [ ] Notas de direção úteis?
  - [ ] Formatação consistente?
```

---

## Metrics and Benchmarks

### Key Performance Indicators

```yaml
vsl_kpis:

  play_rate:
    benchmark: "60-80% de visitantes da página"
    optimization: "Thumbnail, auto-play testing"

  watch_time:
    benchmark: "50%+ devem assistir até a oferta"
    optimization: "Melhorar hook, story, engagement"

  conversion_rate:
    low_ticket: "3-10%"
    mid_ticket: "1-5%"
    high_ticket: "0.5-2%"
    optimization: "Testar oferta, garantia, preço"

  revenue_per_view:
    calculation: "(Conversões × Preço) / Total de Views"
    use: "Comparar versões de VSL"
```

### Split Test Priority

```yaml
split_test_priority:

  highest_impact:
    1: "Hook (primeiros 60 segundos)"
    2: "Oferta/preço/garantia"
    3: "Thumbnail/headline"

  medium_impact:
    4: "Elementos de story"
    5: "Proof/testimonials"
    6: "Sequência de close"

  lower_impact:
    7: "Styling visual"
    8: "Música de fundo"
    9: "Talent de voz"
```

---

## Common VSL Mistakes

### Mistakes to Avoid

```yaml
vsl_mistakes:

  weak_hook:
    problem: "Viewers saem antes da mensagem começar"
    fix: "Testar 5-10 hooks, usar pattern interrupt"

  length_mismatch:
    problem: "VSL de 45min para produto de $27"
    fix: "Adequar tamanho ao price point"

  features_over_benefits:
    problem: "Listar o que inclui vs o que ganham"
    fix: "Traduzir cada feature em resultado"

  no_proof:
    problem: "Claims sem evidência = ceticismo"
    fix: "Stack proof ao longo, não só em uma seção"

  weak_guarantee:
    problem: "Risco fica com o comprador"
    fix: "Garantia bold que remove todo risco"

  confusing_cta:
    problem: "Viewer não sabe o que fazer"
    fix: "Instrução cristalina, repetir frequentemente"

  poor_audio:
    problem: "Áudio ruim = desconfiança instantânea"
    fix: "Investir em mic de qualidade e gravação"
```

---

## Version History

```yaml
version: "2.1"
last_updated: "2026-01-23"
changelog:
  - "2.1: ENRICHMENT ENR-009 - Adicionada seção 'VSL Original do Inventor' com fontes primárias"
  - "2.1: Extraído 5-Step VSL Process™ original com citações de sources_master.yaml"
  - "2.1: Extraído 3X Formula original de 2013 (I Love Marketing Podcast Ep. 122)"
  - "2.1: Adicionado Snap Suggestion Method com 5 tipos documentados"
  - "2.1: Adicionado Reluctant Hero Formula - 5 Beats originais"
  - "2.1: Adicionado Timing e Pacing recommendations do inventor"
  - "2.1: Adicionado Persuasion Quadrant framework"
  - "2.1: Adicionado Curiosity Loop System - 5 tipos"
  - "2.1: Adicionado NLP Copy Techniques com boundary ético"
  - "2.1: Adicionado Ethical Persuasion Framework - 6 regras"
  - "2.1: Adicionado estatísticas verificadas ($12B+, $40M single VSL)"
  - "2.1: Adicionado timeline completo 2004-2024"
  - "2.1: Todas as citações com referência de fonte documentada"
  - "2.0: Reescrita completa com Jon Benson 9-Step Framework"
  - "2.0: Adicionado 8 hook formulas"
  - "2.0: Pain Stack technique integrado"
  - "2.0: Origin Story structure expandido"
  - "2.0: Triple Close framework detalhado"
  - "2.0: 3 copywriter styles (Benson, Kern, Kennedy)"
  - "2.0: Timing guides por duração"
  - "2.0: Production guidelines completos"
  - "2.0: Tier 0 diagnosis adicionado"
```

---

# ═══════════════════════════════════════════════════════════════════════════
# CONTEÚDO EXTRAÍDO DAS FONTES PRIMÁRIAS
# Data: 2026-01-23 | Enrichment Phase ENR-009
# ═══════════════════════════════════════════════════════════════════════════

## VSL Original do Inventor (Jon Benson)

### A História da Invenção (2006)

Jon Benson inventou o Video Sales Letter em 2006 por pura necessidade. As sales letters tradicionais de texto longo pararam de converter, os custos de tráfego estavam subindo, e ele enfrentava um possível colapso do negócio.

> "I bombed miserably with the first, second, and third versions of my sales letter"

> "I made an UGLY video with no pictures - only black letters with red words"

> "I didn't try to start an industry, but that day, that's exactly what happened"

A ironia: o design "feio" tornou-se a assinatura do formato - prova de que simplicidade funciona.

**Resultado:** Conversões 3X superiores às sales letters tradicionais.


---

### 5-Step VSL Process™ - Framework Original (2011)

Sistematizado em 2011 e compartilhado no I Love Marketing Podcast Episode 44. Esta é a metodologia original codificada pelo inventor:

> "VSLs are much easier to create than traditional sales pages because of how our brains process information. You're writing in slide segments - sentence fragments, one sentence at a time - and there's something about the brain that wraps around this much easier with the formula."

#### Os 5 Passos Originais:

```yaml
step_1_snap_suggestion:
  name: "Snap Suggestion Opening"
  timing: "0-30 segundos"
  purpose: "Pattern interrupt que captura atenção imediatamente"
  original_instruction: |
    "Open with a pattern error - something that doesn't compute normally.
    Within the first 10 slides, mention the USP (Unique Selling Proposition).
    Give them a REASON to keep watching."

step_2_problem_amplification:
  name: "Problem Amplification"
  timing: "30 segundos - 3 minutos"
  purpose: "Aprofundar a dor com empatia, não manipulação"
  original_instruction: |
    "Show you understand their struggle. Use specific details.
    Paint the emotional picture of their current state.
    Make them feel UNDERSTOOD, not attacked."

step_3_reluctant_hero:
  name: "Reluctant Hero Story"
  timing: "3-8 minutos"
  purpose: "Estabelecer rapport através de vulnerabilidade compartilhada"
  original_instruction: |
    "Tell your origin story as a reluctant hero - someone who wasn't
    different from them. At one point in debt, close to bankruptcy,
    ashamed, confused. Go on telling a dramatic visual story."

step_4_solution_preview:
  name: "Solution Preview"
  timing: "8-12 minutos"
  purpose: "Mostrar o que é possível sem revelar tudo"
  original_instruction: |
    "Preview the transformation. Show results others have achieved.
    Open curiosity loops about HOW without closing them yet."

step_5_ethical_close:
  name: "Offer & Ethical Close"
  timing: "12-20 minutos"
  purpose: "Apresentar oferta irresistível com urgência ética"
  original_instruction: |
    "Present the offer clearly. Stack value. Add guarantee.
    Create ethical urgency (real limitations, not fake scarcity).
    Clear call to action."
```


---

### 3X Formula - Estrutura de 3 Atos (2013)

Desenvolvida em 2013, revelada no I Love Marketing Podcast Episode 122:

```yaml
3x_formula_original:
  act_1_hook:
    name: "The Hook"
    duration: "Primeiro 20% da VSL"
    purpose: "Capturar atenção e criar desejo de assistir"
    elements:
      - "Snap suggestion (pattern interrupt)"
      - "Big promise"
      - "Curiosity loop opener"
      - "Target qualification"
    benson_quote: "Hook them within 10 seconds or lose them forever"

  act_2_story:
    name: "The Story"
    duration: "Meio 60% da VSL"
    purpose: "Construir rapport, credibilidade e conexão emocional"
    elements:
      - "Reluctant hero journey"
      - "Problem amplification"
      - "Discovery moment"
      - "Solution preview"
      - "Social proof integration"
    benson_quote: "The story IS the sale - don't rush it"

  act_3_close:
    name: "The Close"
    duration: "Final 20% da VSL"
    purpose: "Converter viewers em compradores com persuasão ética"
    elements:
      - "Offer presentation"
      - "Value stack"
      - "Guarantee"
      - "Urgency (ethical)"
      - "Call to action"
      - "P.S. hooks"
    benson_quote: "Make the decision easy and the action clear"
```


---

### Snap Suggestion Method - Técnica de Abertura

Método original de Jon Benson baseado em seu treinamento em NLP:

> "A pattern interrupt at the opening of copy that breaks the reader's normal mental processing and forces them to pay attention. It's called 'snap' because it snaps them out of autopilot."

**Tipos de Snap Suggestion do Inventor:**

| Tipo | Padrão | Mecanismo |
|------|--------|-----------|
| Contradiction | "What if everything you know about [topic] is actually making you [worse]?" | Desafia crença existente |
| Impossible Promise | "How I [result] by [unexpected method]" | Parece bom demais (mas é verdade) |
| Taboo Reveal | "The dirty secret the [industry] doesn't want you to know" | Apelo de conhecimento proibido |
| Pattern Error | "I'm about to tell you NOT to buy my product" | Statement inesperado do vendedor |
| Time Compression | "In the next 7 minutes, you'll discover..." | Timeframe específico cria compromisso |


---

### Reluctant Hero Formula - 5 Beats Originais

A estrutura de storytelling onde o protagonista não queria ser herói:

> "People don't connect with perfect heroes. They connect with people who were once where they are now. The reluctant hero is relatable, and their journey feels achievable."
> [Fonte: jon-benson.md agent - reluctant_hero framework]

```yaml
five_beats_original:
  beat_1_the_pit:
    name: "The Pit"
    purpose: "Mostrar seu ponto mais baixo"
    instruction: "Be specific. Details create believability."
    benson_personal_example: "I was $47,000 in debt, my wife had left, and I was 70 pounds overweight"

  beat_2_the_struggle:
    name: "The Struggle"
    purpose: "Mostrar tentativas falhas"
    instruction: "List what you tried that didn't work - same things they've tried"

  beat_3_accidental_discovery:
    name: "The Accidental Discovery"
    purpose: "O turning point parece não planejado"
    instruction: "The discovery should feel serendipitous, not calculated"

  beat_4_transformation:
    name: "The Transformation"
    purpose: "Mostrar mudança gradual e crível"
    instruction: "Don't make it instant - show the process"

  beat_5_the_mission:
    name: "The Mission"
    purpose: "Por que você está compartilhando isso"
    instruction: "Connect your mission to helping others like your former self"
```


---

### Timing e Pacing - Recomendações do Inventor

**Princípio Core de Timing:**

> "VSLs are easier because the brain wraps around sentence fragments better"
> [Fonte: sources_master.yaml - source_010: "Full 5-Step Formula explained"]

**Pacing por Slide:**
- **Novo slide a cada 3-5 segundos**
- **Pattern interrupt a cada 30-60 segundos**
- **Imagens/gráficos a cada 30-60 segundos**

**Timing por Seção (VSL de 15-20 min):**

| Seção | Timing | Propósito |
|-------|--------|-----------|
| Snap Suggestion | 0:00-0:30 | Hook imediato |
| Problem | 0:30-3:00 | Amplificar dor |
| Story | 3:00-8:00 | Conectar via vulnerabilidade |
| Solution Preview | 8:00-12:00 | Criar desejo |
| Offer + Close | 12:00-20:00 | Converter |


---

### Persuasion Quadrant - Framework de Pesquisa

Ferramenta diagnóstica para entender o que motiva seu prospect ANTES de escrever:

```yaml
persuasion_quadrant:
  wants: "O que eles conscientemente desejam?"
  needs: "O que eles realmente precisam (pode diferir dos wants)?"
  fears: "O que os mantém acordados à noite?"
  actions: "O que eles já tentaram?"

  application_sequence:
    1: "Hook their WANTS"
    2: "Acknowledge their FEARS"
    3: "Validate their ACTIONS (failed attempts)"
    4: "Deliver their NEEDS"
```


---

### Curiosity Loop System - Sistema Original

> "Open loops of curiosity that can only be closed by continuing to watch/read. The human brain HATES open loops - it will stay engaged trying to close them."
> [Fonte: jon-benson.md - curiosity_loop_system]

**5 Tipos de Loops do Inventor:**

1. **The Mystery:** "In a moment, I'll reveal [thing], but first..."
2. **The Tease:** "There's one thing that made all the difference..."
3. **The Warning:** "But before you try this, you MUST know..."
4. **The Contrast:** "This is nothing like [what they've tried]..."
5. **The Insider:** "What the [industry] doesn't want you to know..."

**Aplicação:** Abra 2-3 loops no primeiro minuto. Feche gradualmente durante a apresentação. Sempre feche TODOS os loops antes do CTA.


---

### NLP Copy Techniques - Uso Ético

Jon combinou seu treinamento em NLP com VSL para criar copy mais efetivo:

> "I combined my training in NLP with the Video Sales Letter"
> [Fonte: sources_master.yaml - NLP integration reference]

**Técnicas NLP Aplicadas:**

| Técnica | Descrição | Exemplo |
|---------|-----------|---------|
| Embedded Commands | Comandos escondidos em frases | "REMEMBER to get your copy today" (não "Don't forget") |
| Presuppositions | Suposições embutidas | "When you start seeing results..." (não "if") |
| Future Pacing | Visualização do futuro | "Imagine 90 days from now, looking in the mirror..." |
| Agreement Loops | Construir momentum de 'sim' | "You've tried diets before, haven't you?" |
| Analog Marking | Ênfase em palavras-chave | "The ONE thing you NEED to know..." |

**Boundary Ético:**
> "These techniques amplify a message's effectiveness. They should NEVER be used to sell something that doesn't deliver value."
> [Fonte: jon-benson.md - ethical_boundary]

---

### Ethical Persuasion Framework - Filosofia Core

> "Ethical Persuasion is a capacity and skill that very few have mastered. It is the polar opposite of manipulation and coercion (which is what the vast majority of copywriters turn to when they try to market). This is why so many people have an aversion to marketing - it can feel slimy."

**Regras de Aplicação do Inventor:**

1. "Never promise what you can't deliver"
2. "Use real scarcity, never fake urgency"
3. "Share authentic stories, not fabricated ones"
4. "Amplify pain to help, not to manipulate"
5. "Connect with values, don't exploit fears"
6. "The goal is to SERVE, not just to sell"

> "If you have a product that you know works, you need to sell it to the best possible ability that you have. Ethically, honestly, but with the best possible ability. If you're half-assing copy then you're actually being UNETHICAL."
> [Fonte: jon-benson.md - ethical_duty]

---

### Estatísticas de Resultados Verificados

```yaml
authority_statistics:
  total_sales_generated: "$12B+"
  context: "Combined sales for clients and customers worldwide"

  single_vsl_record:
    product: "Truth About Abs"
    value: "$40 Million"
    type: "Single VSL Jon wrote and voiced"

  personal_product:
    product: "Every Other Day Diet"
    customers: "200,000+"

  industry_impact:
    vsl_format_annual: "$12B annually"
    context: "Industry-wide VSL format impact created in 2006"
```


---

### Timeline da Evolução da Metodologia

| Ano | Evento | Significado |
|-----|--------|-------------|
| 2004 | Fit Over 40 | Primeiro bestseller de fitness |
| 2006 | VSL Invention | "Ugly VSL" criado por desespero - mudou a indústria |
| 2007-2009 | VSL Validation | Método provado em múltiplos nichos |
| 2010-2015 | NLP Certification | Integração de NLP com copywriting |
| 2011 | 5-Step Formula | Framework codificado, compartilhado no I Love Marketing Podcast Ep. 44 |
| 2013 | 3X Formula | Metodologia avançada revelada no I Love Marketing Podcast Ep. 122 |
| 2016-2018 | Billion Dollar Status | $1B+ em vendas documentadas para clientes |
| 2019-2022 | Attention Framework | Sistema avançado de psicologia da atenção |
| 2023-2024 | BNSN.AI | Promptless™ technology - AI + copywriting |


---

### Fontes Consultadas para Este Enrichment

```yaml
sources_read:
  - path: "{pasta}/jon_benson/sources/sources_master.yaml"
    type: "Master compilation of 38 sources"
    frameworks_extracted: ["5-Step VSL Formula", "3X Formula", "NLP techniques"]

  - path: "{pasta}/jon_benson/history.yaml"
    type: "Timeline and events"
    data_extracted: ["VSL invention story", "Methodology evolution", "Key milestones"]

  - path: "{pasta}/jon_benson/docs/logs/viability/jon_benson.md"
    type: "Viability assessment"
    data_extracted: ["APEX score 9.5/10", "Statistics", "Authority proof"]

  - path: "squads/copy/agents/jon-benson.md"
    type: "Agent definition"
    data_extracted: ["10 operational frameworks", "Communication DNA", "42 signature phrases"]

enrichment_date: "2026-01-23"
story_id: "ENR-009"
```

---

*Task Version: 2.1*
*Lines: 1700+*
*Framework: Jon Benson 9-Step VSL + 3X Formula + Source Enrichment*
*Enriched: 2026-01-23 | ENR-009*
