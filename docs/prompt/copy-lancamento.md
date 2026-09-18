# copy-lancamento · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `copy-lancamento.md` uma skill chamada copy-lancamento. Quando eu pedir algo como "monta o lançamento de [produto], carrinho de [data] a [data]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# CARRINHO ABERTO · PLF, Brunson, soap opera e a sequência inteira

Um lançamento é uma sequência com data, não um post com link. O agente monta o pré-pré-lançamento, os três conteúdos de aquecimento, a abertura e o fechamento do carrinho, os e-mails de cada dia e a soap opera que segura a atenção entre eles, pelo método de Jeff Walker, com o funil de livro de Russell Brunson como alternativa. Do seed launch ao evergreen.

## When to Use

- O pedido envolve: lançamento, PLF, carrinho aberto, pré-lançamento, PLC, soap opera, funil de livro, seed launch, evergreen.
- Diga: "monta o lançamento de [produto], carrinho de [data] a [data]".
- NÃO use quando o pedido é uma peça em um método específico de copywriter ("como Halbert"): isso é `copy-metodo-<nome>`.

## Quick Reference

Cada sub-tarefa é uma referência com `Inputs`, fórmulas, `Output Format` e `Quality Checklist` próprios.

| sub-tarefa | referência |
|---|---|
| plf create case study | `references/plf-create-case-study.md` |
| plf create evergreen launch | `references/plf-create-evergreen-launch.md` |
| plf create jv launch | `references/plf-create-jv-launch.md` |
| plf create launch emails | `references/plf-create-launch-emails.md` |
| plf create launch stack | `references/plf-create-launch-stack.md` |
| plf create live launch | `references/plf-create-live-launch.md` |
| plf create open cart sequence | `references/plf-create-open-cart-sequence.md` |
| plf create plc sequence | `references/plf-create-plc-sequence.md` |
| plf create preprelaunch | `references/plf-create-preprelaunch.md` |
| plf create sales page plf | `references/plf-create-sales-page-plf.md` |
| plf create seed launch | `references/plf-create-seed-launch.md` |
| plf diagnose failed launch | `references/plf-diagnose-failed-launch.md` |
| plf evaluate cpl | `references/plf-evaluate-cpl.md` |
| plf map mental triggers | `references/plf-map-mental-triggers.md` |
| plf plan paid traffic | `references/plf-plan-paid-traffic.md` |
| plf | `references/plf.md` |
| brunson create book funnel | `references/brunson-create-book-funnel.md` |
| brunson | `references/brunson.md` |
| create launch sequence | `references/create-launch-sequence.md` |
| create soap opera sequence | `references/create-soap-opera-sequence.md` |

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

- `references/brunson-create-book-funnel.md`
- `references/brunson.md`
- `references/checklist-plf-todos.md`
- `references/create-launch-sequence.md`
- `references/create-soap-opera-sequence.md`
- `references/plf-create-case-study.md`
- `references/plf-create-evergreen-launch.md`
- `references/plf-create-jv-launch.md`
- `references/plf-create-launch-emails.md`
- `references/plf-create-launch-stack.md`
- `references/plf-create-live-launch.md`
- `references/plf-create-open-cart-sequence.md`
- `references/plf-create-plc-sequence.md`
- `references/plf-create-preprelaunch.md`
- `references/plf-create-sales-page-plf.md`
- `references/plf-create-seed-launch.md`
- `references/plf-diagnose-failed-launch.md`
- `references/plf-evaluate-cpl.md`
- `references/plf-map-mental-triggers.md`
- `references/plf-plan-paid-traffic.md`
- `references/plf.md`
- `templates/plf-beat-analysis-tmpl.yaml`
- `templates/plf-case-study-tmpl.md`
- `templates/plf-cpl-evaluation-report-tmpl.md`
- `templates/plf-email-subject-lines-tmpl.md`
- `templates/plf-jv-swipe-tmpl.md`
- `templates/plf-launch-stack-tmpl.md`
- `templates/plf-launch-timeline-tmpl.md`
- `templates/plf-objection-crusher-tmpl.md`
- `templates/plf-open-cart-day1-tmpl.md`
- `templates/plf-open-cart-final-tmpl.md`
- `templates/plf-plc1-script-tmpl.md`
- `templates/plf-plc2-script-tmpl.md`
- `templates/plf-plc3-script-tmpl.md`
- `templates/plf-preprelaunch-survey-tmpl.md`
- `templates/plf-rubric-scores-tmpl.yaml`
- `templates/plf-sales-page-blueprint-tmpl.md`


---

## Referência: references/brunson-create-book-funnel.md

# Task: Create Book Funnel (Free + Shipping)

Sistema validado por Russell Brunson - $100M+ em vendas com 3 livros.

## Metadata

```yaml
task_id: create-book-funnel
version: "1.0"
agent: "@russell-brunson"
elicit: true
output_type: "funnel_structure"
```

## Objetivo

Criar um Book Funnel completo usando a estratégia Free + Shipping, com order bumps, upsells, e follow-up sequence.

## Filosofia

> "O livro NÃO é o produto. O livro é o FUNIL. O objetivo não é lucrar no livro - é adquirir o cliente." - Russell Brunson

## Input Necessário (Elicit)

Antes de criar o funil, preciso das seguintes informações:

### 1. Sobre o Livro
- **Título do livro:**
- **Subtítulo:**
- **Tema principal:**
- **Transformação que o livro promete:**
- **Número de páginas:**
- **Formato:** (físico, digital, ambos)

### 2. Sobre o Autor
- **Nome:**
- **Background/Credenciais:**
- **História de origem:** (como chegou a esse conhecimento)
- **Resultados próprios ou de clientes:**

### 3. Sobre o Avatar
- **Quem é o leitor ideal:**
- **Maior dor/problema:**
- **Maior desejo:**
- **Nível de consciência:** (Schwartz)

### 4. Sobre a Value Ladder
- **O que vem DEPOIS do livro?** (curso, coaching, mastermind, etc.)
- **Preço do próximo nível:**
- **Preço do nível máximo:**

### 5. Sobre Recursos
- **Tem audiobook?** (sim/não)
- **Tem workshop/treinamento gravado?** (sim/não)
- **Tem curso relacionado?** (sim/não)
- **Tem comunidade/grupo?** (sim/não)

---

## Estrutura do Book Funnel

### PÁGINA 1: Sales Page (Free + Shipping)

#### Estrutura Hook, Story, Offer

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOOK SECTION                             │
├─────────────────────────────────────────────────────────────────┤
│ • Headline principal (promessa + curiosidade)                    │
│ • Subheadline (especificar para quem é)                         │
│ • Imagem do livro (3D mockup)                                   │
│ • Badge: "GRÁTIS - Só pague o frete"                            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         STORY SECTION                            │
├─────────────────────────────────────────────────────────────────┤
│ • VSL ou carta de vendas                                        │
│   - Problema que você enfrentava                                │
│   - A descoberta/virada                                         │
│   - Resultados que conseguiu                                    │
│   - Por que escreveu o livro                                    │
│ • Epiphany Bridge: sua transformação                            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       VALUE STACK SECTION                        │
├─────────────────────────────────────────────────────────────────┤
│ • O que está incluído no livro:                                 │
│   - Capítulo X: [benefício] (Valor: R$XX)                       │
│   - Capítulo Y: [benefício] (Valor: R$XX)                       │
│   - Bônus digital: [nome] (Valor: R$XX)                         │
│   - Bônus digital: [nome] (Valor: R$XX)                         │
│ • VALOR TOTAL: R$XXX                                            │
│ • VOCÊ PAGA: R$0 + R$29,90 frete                                │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                     SOCIAL PROOF SECTION                         │
├─────────────────────────────────────────────────────────────────┤
│ • 3-5 testimonials de leitores                                  │
│ • Números: "X cópias vendidas", "Y países"                      │
│ • Logos de mídia/autoridade (se aplicável)                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         OFFER SECTION                            │
├─────────────────────────────────────────────────────────────────┤
│ • Resumo da oferta                                              │
│ • Garantia (30 dias, sem perguntas)                             │
│ • CTA: "QUERO MEU LIVRO GRÁTIS"                                 │
│ • Escassez (se aplicável): "Apenas X cópias nessa tiragem"      │
└─────────────────────────────────────────────────────────────────┘
```

#### Preços Recomendados
| Item | Brasil | USA | Internacional |
|------|--------|-----|---------------|
| Livro | R$0 | $0 | $0 |
| Frete | R$24,90 - R$34,90 | $7.95 | $14.95 |

---

### CHECKOUT POPUP: Order Bumps

#### Order Bump #1: Audiobook
```
┌─────────────────────────────────────────────────────────────────┐
│ ☐ SIM! Adicione o Audiobook por apenas +R$97                    │
├─────────────────────────────────────────────────────────────────┤
│ Quer consumir o conteúdo enquanto dirige, treina ou cozinha?    │
│ Adicione a versão em áudio narrada pelo autor.                  │
│                                                                  │
│ • Duração: X horas                                              │
│ • Download imediato                                             │
│ • Bônus: Capítulo extra exclusivo do áudio                      │
│                                                                  │
│ Valor normal: R$197 → Hoje: R$97                                │
└─────────────────────────────────────────────────────────────────┘
```

#### Order Bump #2: Workshop/Training
```
┌─────────────────────────────────────────────────────────────────┐
│ ☐ SIM! Adicione o Workshop [Nome] por apenas +R$197             │
├─────────────────────────────────────────────────────────────────┤
│ Quer implementar ainda mais rápido?                             │
│ Assista ao workshop onde eu aplico os conceitos do livro        │
│ em casos reais, passo a passo.                                  │
│                                                                  │
│ • X horas de treinamento gravado                                │
│ • Templates e ferramentas                                       │
│ • Acesso vitalício                                              │
│                                                                  │
│ Valor normal: R$497 → Hoje: R$197                               │
└─────────────────────────────────────────────────────────────────┘
```

**Conversion target:** 30-50% em order bumps combinados

---

### PÁGINA 2: Upsell #1 (OTO)

```
┌─────────────────────────────────────────────────────────────────┐
│              ESPERA! Oferta Exclusiva Para Novos Leitores        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ [Vídeo curto: 3-5 minutos]                                      │
│                                                                  │
│ Parabéns por garantir seu livro!                                │
│                                                                  │
│ Como você acabou de demonstrar que leva [tema] a sério,         │
│ quero te fazer uma oferta que só aparece UMA VEZ.               │
│                                                                  │
│ OFERTA: [Nome do produto complementar]                          │
│                                                                  │
│ Inclui:                                                         │
│ • [Componente 1]                                                │
│ • [Componente 2]                                                │
│ • [Componente 3]                                                │
│ • BÔNUS: [Extra]                                                │
│                                                                  │
│ Valor total: R$997                                              │
│ Seu investimento AGORA: R$297                                   │
│                                                                  │
│ [SIM! Adicionar ao meu pedido]   [Não, obrigado]                │
│                                                                  │
│ ⚠️ Esta oferta não será mostrada novamente.                     │
└─────────────────────────────────────────────────────────────────┘
```

**Conversion target:** 10-20%

---

### DOWNSELL #1 (Se recusar OTO #1)

```
┌─────────────────────────────────────────────────────────────────┐
│                    Tudo bem! Entendo completamente               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ Que tal apenas [versão menor/parcelada]?                        │
│                                                                  │
│ Por apenas R$97 (ou 3x R$37)                                    │
│                                                                  │
│ [SIM! Quero essa opção]   [Não, só quero o livro]               │
└─────────────────────────────────────────────────────────────────┘
```

---

### PÁGINA 3: Upsell #2 (OTO)

```
┌─────────────────────────────────────────────────────────────────┐
│           Último Passo Para Acelerar Seus Resultados             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ [Vídeo: 5-7 minutos]                                            │
│                                                                  │
│ Você está no caminho certo!                                     │
│                                                                  │
│ Para quem quer resultados ainda mais rápidos,                   │
│ temos o [Programa/Curso Principal].                             │
│                                                                  │
│ Este é nosso programa completo de X semanas onde você:          │
│ • [Resultado 1]                                                 │
│ • [Resultado 2]                                                 │
│ • [Resultado 3]                                                 │
│                                                                  │
│ Normalmente: R$1.997                                            │
│ Para novos leitores: R$997 (ou 12x R$97)                        │
│                                                                  │
│ [SIM! Quero acelerar]   [Não, obrigado]                         │
└─────────────────────────────────────────────────────────────────┘
```

**Conversion target:** 5-10%

---

### PÁGINA 4: Thank You Page

```
┌─────────────────────────────────────────────────────────────────┐
│                    🎉 Parabéns! Pedido Confirmado                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ Seu livro está a caminho!                                       │
│                                                                  │
│ RESUMO DO PEDIDO:                                               │
│ • [Livro] - Grátis                                              │
│ • Frete - R$29,90                                               │
│ • [Order bump, se adicionou]                                    │
│ • [Upsell, se adicionou]                                        │
│ ─────────────────────────                                       │
│ TOTAL: R$XXX                                                    │
│                                                                  │
│ PRÓXIMOS PASSOS:                                                │
│ 1. Verifique seu email para confirmação                         │
│ 2. Enquanto espera, acesse [bônus digital]                      │
│ 3. Entre no nosso grupo de leitores: [link]                     │
│                                                                  │
│ Prazo de entrega: X-Y dias úteis                                │
│                                                                  │
│ Dúvidas? suporte@[dominio].com                                  │
│                                                                  │
│ [Compartilhar nas redes] [Indicar um amigo]                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## Follow-up Email Sequence

### Sequência de 14 Dias

| Dia | Email | Objetivo |
|-----|-------|----------|
| 0 | Confirmação + Boas-vindas | Confirmação e expectativas |
| 1 | Seu livro está a caminho + Dica #1 | Valor enquanto espera |
| 3 | Conteúdo exclusivo | Engajamento |
| 5 | Case study de sucesso | Prova social |
| 7 | Seu livro chegou? + Como usar | Onboarding |
| 9 | Dica #2 do livro | Valor contínuo |
| 11 | Testimonial + Pergunta | Engajamento |
| 14 | Próximo passo (oferta) | Conversão para high-ticket |

### Sequência Dia 14-30 (Oferta High-Ticket)

| Dia | Email | Objetivo |
|-----|-------|----------|
| 14 | Apresentação do programa | Introduzir oferta maior |
| 16 | Case study detalhado | Prova de resultados |
| 18 | FAQ e objeções | Remover fricção |
| 20 | Última chance | Urgência (se aplicável) |
| 21-30 | Nurturing | Relacionamento contínuo |

---

## Checklist de Validação

### Sales Page
- [ ] Headline com hook forte
- [ ] Subheadline específica para o avatar
- [ ] VSL ou carta de vendas completa
- [ ] Stack de valor claro
- [ ] Testimonials relevantes
- [ ] Garantia explícita
- [ ] CTA claro e repetido
- [ ] Preço e frete claros

### Order Bumps
- [ ] Order bump #1 configurado (audiobook ou similar)
- [ ] Order bump #2 configurado (workshop ou similar)
- [ ] Copy persuasivo para cada bump
- [ ] Preços com âncora de valor

### Upsells
- [ ] OTO #1 criado com vídeo
- [ ] Downsell #1 criado
- [ ] OTO #2 criado (opcional)
- [ ] Urgência "só aparece uma vez"

### Tech
- [ ] Integração de pagamento testada
- [ ] Automação de emails configurada
- [ ] Fulfillment do livro configurado
- [ ] Thank you page funcional

### Follow-up
- [ ] Sequência de 14 emails criada
- [ ] Sequência de conversão (14-30 dias) criada
- [ ] Emails testados e funcionando

---

## Output Esperado

Após executar esta task, você terá:

1. **Documento de Sales Page** com toda a copy
2. **Order Bumps** (2) com copy completo
3. **Upsell Pages** (2-4) com scripts de vídeo
4. **Thank You Page** estruturada
5. **14-30 emails** de follow-up
6. **Checklist** de implementação

---

*Task Version: 1.0*
*Agent: @russell-brunson*
*Validation: $100M+ documented revenue*


---

## Referência: references/brunson.md

# brunson

Task composta. Sub-tarefas:

- `references/brunson-create-book-funnel.md`


---

## Referência: references/create-launch-sequence.md

# Task: Create Launch Sequence

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Strategy & Planning
> **Output**: Complete launch sequence strategy with timeline, phases, and task routing

---

## Purpose

Design the complete launch sequence strategy using Jeff Walker's Product Launch Formula. This task orchestrates the full launch timeline: Pre-Prelaunch → PLC Sequence → Open Cart → Close. It produces the strategic blueprint that routes to atomic PLF tasks for execution.

---

## Prerequisites

- [ ] Product/offer defined (what is being launched)
- [ ] Avatar research complete (who is buying)
- [ ] Launch dates confirmed (or at least a target window)
- [ ] Campaign brief exists (from copy-chief)

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. What are you launching? (course, coaching, software, book, membership)
2. Is this your first launch or a relaunch?
3. What's your list size and relationship quality? (cold, warm, hot)
4. What's your launch window? (specific dates or "in X weeks")
5. Do you have existing proof? (testimonials, case studies, revenue data)
6. What's your comfort level with live events? (recorded only, hybrid, fully live)
7. What's your team capacity? (solo, small team, full team)
```

### Step 2: Select Launch Type

**Decision tree based on Jeff Walker's PLF:**

| Launch Type | Best For | List Size | Complexity | Timeline |
|-------------|----------|-----------|------------|----------|
| Seed Launch | First launch, no list, validation | 0-500 | Low | 1-2 weeks |
| Internal Launch | Existing list, proven offer | 500-50K | Medium | 3-4 weeks |
| JV Launch | Scale with partners | Any | High | 6-8 weeks |
| Evergreen Launch | Automated, ongoing | Any | Medium | 2 weeks setup |
| Live Launch | High engagement, premium | 1K+ | High | 4-6 weeks |

**Reference:**
- `data/plf/timeline-reference-kb.yaml`
- `data/plf/timeline-reference-kb.yaml`

**Routing:**
```
Seed Launch → tasks/plf/create-seed-launch.md
Internal Launch → Continue to Step 3 (this task)
JV Launch → tasks/plf/create-jv-launch.md
Evergreen Launch → tasks/plf/create-evergreen-launch.md
Live Launch → tasks/plf/create-live-launch.md
```

### Step 3: Design Launch Timeline

**Standard Internal Launch (21-28 days):**

| Phase | Days | Focus | Tasks |
|-------|------|-------|-------|
| Pre-Prelaunch | Day 1-7 | Survey, seed curiosity, build anticipation | `create-preprelaunch.md` |
| PLC Sequence | Day 8-18 | Deliver value, build trust, activate triggers | `create-plc-sequence.md` |
| Open Cart | Day 19-23 | Drive sales, handle objections, social proof | `create-open-cart-sequence.md` |
| Cart Close | Day 24-25 | Maximum urgency, final push | (included in open cart) |
| Post-Launch | Day 26-28 | Thank buyers, nurture non-buyers | (included in open cart) |

**Condensed Launch (14 days):**

| Phase | Days | Focus |
|-------|------|-------|
| Pre-Prelaunch | Day 1-3 | Quick survey, teaser |
| PLC Sequence | Day 4-10 | PLCs every 2 days |
| Open Cart | Day 11-14 | Compressed urgency |

### Step 4: Map Mental Triggers Across Phases

**Reference:** `tasks/plf/map-mental-triggers.md`

| Trigger | Pre-Prelaunch | PLC1 | PLC2 | PLC3 | Open Cart | Close |
|---------|--------------|------|------|------|-----------|-------|
| Authority | | X | X | | | |
| Reciprocity | | X | X | X | | |
| Trust | X | X | X | X | X | |
| Anticipation | X | X | X | X | | |
| Likability | X | X | X | | | |
| Events | | | | X | X | X |
| Community | X | X | X | X | X | |
| Social Proof | | | X | | X | X |
| Scarcity | | | | X | X | X |

### Step 5: Define Email Volume

**Email count per phase:**

| Phase | Emails | Frequency |
|-------|--------|-----------|
| Pre-Prelaunch | 3-5 | Every 2-3 days |
| PLC1 | 3 | Announce + 2 reminders |
| PLC2 | 3 | Announce + 2 reminders |
| PLC3 | 3 | Announce + 2 reminders |
| Open Cart | 10-15 | 2-3/day |
| Cart Close (final day) | 3-5 | Escalating urgency |
| Post-Close | 2 | Thank + next steps |

**Total:** 27-37 emails across full launch

### Step 6: Create Launch Calendar

**Output format:**

```yaml
launch_sequence:
  name: "[PRODUCT] Launch"
  type: internal  # seed | internal | jv | evergreen | live
  timeline:
    pre_prelaunch:
      start: "YYYY-MM-DD"
      end: "YYYY-MM-DD"
      task: create-preprelaunch.md
    plc_sequence:
      start: "YYYY-MM-DD"
      end: "YYYY-MM-DD"
      task: create-plc-sequence.md
      plc1_release: "YYYY-MM-DD"
      plc2_release: "YYYY-MM-DD"
      plc3_release: "YYYY-MM-DD"
    open_cart:
      start: "YYYY-MM-DD"
      end: "YYYY-MM-DD"
      task: create-open-cart-sequence.md
    cart_close: "YYYY-MM-DD HH:MM TZ"
  mental_triggers_map: "See Step 4"
  email_count: 30  # estimated total
  launch_stack_task: create-launch-stack.md
  sales_page_task: create-sales-page-plf.md
```

### Step 7: Identify Supporting Assets

**Route to existing tasks:**

| Asset | Task | Required? |
|-------|------|-----------|
| Pre-Prelaunch survey + teasers | `tasks/plf/create-preprelaunch.md` | Yes |
| PLC1, PLC2, PLC3 scripts | `tasks/plf/create-plc-sequence.md` | Yes |
| Launch stack (offer + bonuses) | `tasks/plf/create-launch-stack.md` | Yes |
| Open cart emails | `tasks/plf/create-open-cart-sequence.md` | Yes |
| Sales page | `tasks/plf/create-sales-page-plf.md` | Yes |
| Case studies | `tasks/plf/create-case-study.md` | Recommended |
| Mental trigger mapping | `tasks/plf/map-mental-triggers.md` | Recommended |

### Step 8: Validate Launch Readiness

**Checklist:**
- [ ] Launch type selected and justified
- [ ] Timeline with specific dates
- [ ] Mental triggers mapped across all phases
- [ ] Email volume defined per phase
- [ ] All required tasks identified and routed
- [ ] Supporting assets listed (case studies, proof)
- [ ] Cart open/close dates and times confirmed

**Reference:**
- `checklists/plf/launch-day-execution.md`

---

## Deliverables

1. **Launch Sequence Strategy**
   - Launch type selection with rationale
   - Complete timeline with dates
   - Phase-by-phase breakdown

2. **Launch Calendar**
   - YAML format (see Step 6)
   - All dates, tasks, and routing

3. **Mental Trigger Map**
   - Trigger activation across all phases
   - Gap identification

4. **Task Routing Plan**
   - Which PLF tasks to execute next
   - Execution order and dependencies

---

## Success Criteria

- [ ] Launch type matches audience and assets
- [ ] Timeline is realistic for team capacity
- [ ] All 9 mental triggers activated at least once
- [ ] Scarcity concentrated in final phase (not premature)
- [ ] Every phase has a clear task routing
- [ ] Calendar has specific dates, not "TBD"

---

## Common Mistakes to Avoid

- **Skipping Pre-Prelaunch:** Launching cold without warming the list
- **Compressed PLCs:** Releasing all 3 PLCs in 3 days (minimum 2 days between)
- **Premature scarcity:** Using "limited spots" before cart even opens
- **No post-close plan:** Ignoring non-buyers who may convert next time
- **Too many email gaps:** Going silent for 2+ days during launch

---

## Next Steps

After launch sequence strategy complete:
→ `tasks/plf/create-preprelaunch.md` - Start Pre-Prelaunch phase
→ `tasks/plf/create-plc-sequence.md` - Create PLC content
→ `tasks/plf/create-launch-stack.md` - Build offer stack

---

## References

### Tasks (PLF Suite)
- `tasks/plf/create-preprelaunch.md`
- `tasks/plf/create-plc-sequence.md`
- `tasks/plf/create-open-cart-sequence.md`
- `tasks/plf/create-launch-stack.md`
- `tasks/plf/create-sales-page-plf.md`
- `tasks/plf/create-case-study.md`
- `tasks/plf/map-mental-triggers.md`
- `tasks/plf/create-seed-launch.md`
- `tasks/plf/create-jv-launch.md`
- `tasks/plf/create-evergreen-launch.md`
- `tasks/plf/create-live-launch.md`

### Checklists
- `checklists/plf/launch-day-execution.md`
- `checklists/plf/mental-triggers-activation.md`

### Knowledge Bases
- `data/plf/timeline-reference-kb.yaml`
- `data/plf/timeline-reference-kb.yaml`
- `data/plf/mental-triggers-kb.yaml`
- `data/plf/copy-scripts-extracted.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Launch Sequence Strategy*


---

## Referência: references/create-soap-opera-sequence.md

# create-soap-opera-sequence

Task para criar Soap Opera Sequences no estilo Andre Chaperon - sequências de emails story-driven que convertem cold traffic em compradores.

## Metadata

```yaml
task:
  name: Create Soap Opera Sequence
  id: create-soap-opera-sequence
  version: "2.0"
  category: email_marketing
  primary_agent: andre-chaperon
  supporting_agents:
    - ben-settle
    - dan-kennedy
  estimated_time: "2-4 hours for complete sequence"
  output_format: markdown

dependencies:
  checklists:
    - soap-opera-checklist.md
  templates:
    - soap-opera-tmpl.yaml
```

---

## Overview

Este task guia a criação de uma Soap Opera Sequence (SOS) completa - uma sequência de 5 emails que conta uma história envolvente enquanto constrói relacionamento e converte leitores em compradores.

## Philosophy

> "People don't read emails. They watch stories unfold."
> — Andre Chaperon

A Soap Opera Sequence trata emails como episódios de uma série. Cada email deixa o leitor querendo mais, criando uma jornada emocional que culmina naturalmente na venda.

---

## PHASE 1: FOUNDATION

### Step 1.1: Define Your Sequence Context

Antes de escrever, responda estas perguntas:

```yaml
sequence_context:
  audience:
    who: "[Descreva seu avatar - quem vai ler esses emails]"
    pain_points: "[Quais dores/problemas eles enfrentam]"
    desires: "[O que eles realmente querem]"
    current_beliefs: "[O que eles acreditam atualmente]"
    new_belief_needed: "[O que eles precisam acreditar para comprar]"

  product:
    what: "[O que você está vendendo]"
    main_benefit: "[Principal benefício/transformação]"
    price_point: "[Faixa de preço]"
    unique_mechanism: "[O que faz seu produto diferente]"

  entry_point:
    lead_magnet: "[O que eles baixaram/receberam para entrar na lista]"
    awareness_level: "[Schwartz: Unaware/Problem-aware/Solution-aware/Product-aware/Most-aware]"
    temperature: "[Cold/Warm/Hot]"
```

### Step 1.2: Map Your Story Arc

A SOS precisa de uma história com arco completo:

```
ESTRUTURA DO ARCO:

          3. EPIPHANY
              /\
             /  \
            /    \
   2. DRAMA       4. BENEFITS
          /            \
         /              \
        /                \
1. STAGE                  5. URGENCY
    |__________________________|
            JORNADA
```

**Mapeie sua história:**

| Email | Elemento | Sua Versão |
|-------|----------|------------|
| 1 | Setup - status quo | [Onde começa?] |
| 2 | Conflito - o problema | [Qual foi o problema/dor?] |
| 3 | Virada - a descoberta | [O que você descobriu?] |
| 4 | Resultado - a transformação | [O que mudou?] |
| 5 | Chamada - a oferta | [Qual é a solução?] |

### Step 1.3: Choose Your Story Type

Qual história você vai contar?

| Tipo | Descrição | Quando Usar |
|------|-----------|-------------|
| **Origin Story** | Sua jornada pessoal | Quando você é o expert |
| **Client Story** | Transformação de um cliente | Quando tem case forte |
| **Discovery Story** | Como você descobriu a solução | Quando o método é o herói |
| **Industry Story** | Revelação sobre o mercado | Quando expõe mitos |
| **Underdog Story** | Superação contra as odds | Quando audiência se identifica |

### Step 1.4: Plan Your Open Loops

Cada email (exceto o último) precisa de um open loop.

**Planeje seus loops:**

```yaml
open_loops:
  email_1_loop:
    opens: "[O que você vai deixar incompleto]"
    closes_in: "Email 2 ou 3"

  email_2_loop:
    opens: "[Nova curiosidade criada]"
    closes_in: "Email 3 ou 4"

  email_3_loop:
    opens: "[Promessa de revelação]"
    closes_in: "Email 4 ou 5"

  email_4_loop:
    opens: "[Teaser da oferta]"
    closes_in: "Email 5"

  main_story_loop:
    opens: "Email 1 (história começa)"
    closes_in: "Email 5 (resolução completa)"
```

---

## PHASE 2: WRITING EMAIL 1 - SET THE STAGE

### Purpose

Introduzir o personagem, estabelecer a situação inicial e criar curiosidade para o próximo email.

### Structure

```
[SUBJECT LINE: Curiosidade ou intrigue]

[HOOK: 1-2 linhas que capturam atenção]

[CONTEXT: Onde/quando esta história começa]

[CHARACTER INTRODUCTION: Quem é o protagonista]
- Detalhes que tornam relatable
- Situação inicial (status quo)
- Hint de que algo está para mudar

[TENSION BUILDING: Sinais de conflito chegando]
- Pequenos problemas se acumulando
- Dúvidas ou medos surgindo
- "Algo não estava certo..."

[OPEN LOOP: Cliffhanger para Email 2]
- Não revele o conflito completo
- Deixe curiosidade no ar
- Promise valor no próximo email

[SIGN-OFF]

[P.S.: Reforço do cliffhanger ou teaser]
```

### Email 1 Template

```markdown
Subject: [Algo intrigante sobre o início da história]

[Hook - começa com ação ou momento intrigante]

Três anos atrás, eu estava [situação específica].

[Detalhes do contexto - onde, quando, com quem]

Na superfície, tudo parecia [como parecia].

Mas por baixo, [sinal de problema se formando].

[2-3 parágrafos desenvolvendo a situação inicial]

[Momento que indica mudança chegando]
"Foi quando eu percebi que algo estava errado..."

O que aconteceu depois mudou tudo.

Mas antes de eu te contar, preciso explicar uma coisa
que você provavelmente nunca ouviu sobre [tema].

Amanhã eu vou te mostrar [teaser específico].

[Assinatura]

P.S. Se você já sentiu [dor do avatar], o email de amanhã
vai fazer muito sentido. Não perde.
```

### Email 1 Checklist

- [ ] Hook captura atenção em 1-2 linhas
- [ ] Personagem é apresentado de forma relatable
- [ ] Status quo está claro
- [ ] Há hints de conflito chegando
- [ ] Open loop criado para Email 2
- [ ] Cliffhanger é específico, não genérico
- [ ] Leitor quer saber o que aconteceu

---

## PHASE 3: WRITING EMAIL 2 - HIGH DRAMA

### Purpose

Intensificar o conflito, fazer o leitor SENTIR a dor e criar empatia através do sofrimento compartilhado.

### Structure

```
[SUBJECT LINE: Relacionado ao drama/conflito]

[BRIDGE: Conexão com Email 1]
"Ontem eu comecei a te contar sobre..."

[DIVE INTO CONFLICT: O problema se manifesta]
- O que deu errado
- Como afetou o protagonista
- As consequências

[EMOTIONAL DEPTH: Faça-os SENTIR]
- Detalhes sensoriais
- Diálogo interno
- Momentos de desespero

[STAKES: O que estava em risco]
- Perdas potenciais
- Medos realizados
- "Se eu não resolvesse isso..."

[FAILED ATTEMPTS: O que NÃO funcionou]
- Soluções convencionais tentadas
- Por que falharam
- Frustração crescente

[TURNING POINT TEASE: Luz no fim do túnel]
- Hint de que algo vai mudar
- Mas não revele ainda

[OPEN LOOP: Cliffhanger para Email 3]

[SIGN-OFF]
```

### Email 2 Template

```markdown
Subject: [Algo relacionado ao conflito/drama]

Ontem eu comecei a te contar sobre [recap rápido].

Hoje vai ficar mais intenso.

[Desenvolvimento do conflito]

Eu lembro de olhar para [detalhe específico] e pensar:
"Como eu cheguei aqui?"

[2-3 parágrafos de drama emocional]

As noites sem dormir.
[Consequência específica].
[Outra consequência].

Eu tentei [solução convencional 1].
Não funcionou.

Tentei [solução convencional 2].
Piorou.

[Momento de desespero máximo]

Estava pronto para desistir quando [hint de virada].

O que eu descobri naquele momento...
é algo que a maioria das pessoas nunca vai saber.

Amanhã eu vou te contar exatamente o que foi.

[Assinatura]

P.S. Se você já [experiência similar], você vai entender
por que o email de amanhã é tão importante.
```

### Email 2 Checklist

- [ ] Bridge conecta ao Email 1
- [ ] Conflito é intensificado (não resolvido)
- [ ] Leitor SENTE a dor (não apenas entende)
- [ ] Stakes são claros (o que está em risco)
- [ ] Tentativas falhas mostram que soluções comuns não funcionam
- [ ] Open loop criado para Email 3
- [ ] Há esperança de virada (mas não revelada)

---

## PHASE 4: WRITING EMAIL 3 - EPIPHANY

### Purpose

O momento de "aha!" - a descoberta que muda tudo. Este é o coração da sequência.

### Structure

```
[SUBJECT LINE: Relacionado à descoberta]

[BRIDGE: Recap rápido do drama]
"Eu estava no fundo do poço..."

[THE MOMENT: Descreva o momento exato da epifania]
- Onde você estava
- O que aconteceu
- A realização

[THE INSIGHT: O que você descobriu]
- Explicação clara do insight
- Por que isso muda tudo
- Como isso desafia o senso comum

[VALIDATION: Por que isso funciona]
- Princípio ou lógica por trás
- Por que ninguém mais ensina isso
- Conexão com problema da audiência

[TRANSFORMATION TEASE: O que mudou depois]
- Primeiros resultados
- Sensação de esperança
- "Mas eu ainda não sabia o melhor..."

[OPEN LOOP: Cliffhanger para Email 4]

[SIGN-OFF]
```

### Email 3 Template

```markdown
Subject: [Algo sobre a descoberta/virada]

Eu estava [situação do Email 2, resumida].

Pronto para desistir.

E então aconteceu.

[Descreva o momento da epifania]
- Onde você estava
- O que você viu/ouviu/percebeu
- O clique mental

Foi como se uma luz se acendesse.

[A realização em 2-3 frases claras]

"E se [insight principal]?"

[Desenvolvimento do insight]

Parece simples agora, mas pense nisso:
[Por que isso muda a perspectiva]

A maioria das pessoas [abordagem comum].
Mas eu descobri que [abordagem diferente].

[Primeiros resultados da aplicação]

Em [período], [resultado específico].

Mas isso era só o começo.

O que aconteceu depois foi ainda melhor -
e é algo que você provavelmente nunca considerou.

Amanhã eu vou te mostrar [teaser específico].

[Assinatura]

P.S. A epifania que tive vale ouro.
Mas a aplicação que vou mostrar amanhã?
Isso vale muito mais.
```

### Email 3 Checklist

- [ ] O momento da epifania é vívido e específico
- [ ] O insight é claro e compreensível
- [ ] Há explicação de POR QUE funciona
- [ ] Desafia a sabedoria convencional
- [ ] Mostra primeiros resultados (mas não todos)
- [ ] Open loop para Email 4
- [ ] Leitor quer aplicar o insight

---

## PHASE 5: WRITING EMAIL 4 - HIDDEN BENEFITS

### Purpose

Mostrar a transformação completa e benefícios inesperados que vieram com a aplicação do insight.

### Structure

```
[SUBJECT LINE: Relacionado a resultados/transformação]

[BRIDGE: Recap da epifania]
"Depois que eu descobri [insight]..."

[TRANSFORMATION: O que mudou]
- Resultados específicos (números, se possível)
- Mudanças no dia a dia
- Como a vida é diferente agora

[HIDDEN BENEFITS: O que você não esperava]
- Benefícios além do óbvio
- Efeitos colaterais positivos
- "O que eu não antecipei foi..."

[SOCIAL PROOF: Outros que aplicaram]
- Resultados de outras pessoas (se tiver)
- Validação do método
- "Não sou só eu..."

[OBJECTION HANDLING: Através da história]
- Endereça dúvidas naturalmente
- "Eu também pensei que..."
- "O que me surpreendeu foi..."

[PRODUCT TEASE: Começa a transição para oferta]
- Menciona que sistematizou o método
- Hint de que há uma forma de acelerar
- "Depois de tanto pedir..."

[OPEN LOOP: Cliffhanger para Email 5]

[SIGN-OFF]
```

### Email 4 Template

```markdown
Subject: [Resultado ou benefício inesperado]

Depois que eu descobri [insight do Email 3],
tudo começou a mudar.

[Primeiros resultados concretos]

Em [período], [resultado específico].
[Outro resultado].
[Mais um resultado].

Mas aqui está o que eu não esperava:

[HIDDEN BENEFIT 1]
Além de [benefício óbvio], eu também [benefício escondido].

[HIDDEN BENEFIT 2]
E mais: [outro benefício que não era o objetivo principal].

[SOCIAL PROOF - se disponível]
Quando compartilhei isso com [pessoa/grupo],
eles também [resultado similar].

[Nome] disse: "[Depoimento ou resultado]"

Eu sei o que você está pensando:
"[Objeção comum]"

Eu também pensei isso.
[Resposta através da própria experiência]

Depois que tantas pessoas pediram,
eu finalmente organizei tudo em [formato].

Amanhã eu vou te dar a chance de [benefício principal].

Mas há uma coisa que você precisa saber antes...

[Assinatura]

P.S. O email de amanhã é diferente dos outros.
É onde tudo faz sentido. Não perca.
```

### Email 4 Checklist

- [ ] Transformação é mostrada com especificidade
- [ ] Benefícios escondidos surpreendem positivamente
- [ ] Há prova social (se disponível)
- [ ] Objeções são tratadas através da história
- [ ] Transição para oferta começa naturalmente
- [ ] Open loop para Email 5
- [ ] Leitor quer o que você tem

---

## PHASE 6: WRITING EMAIL 5 - URGENCY

### Purpose

Fechar todos os loops, apresentar a oferta e dar razão para agir AGORA.

### Structure

```
[SUBJECT LINE: Relacionado à oportunidade/decisão]

[RECAP: Resumo da jornada]
"Nos últimos dias, eu te contei..."
- Email 1: Onde eu estava
- Email 2: O que deu errado
- Email 3: O que eu descobri
- Email 4: O que mudou

[CLOSE ALL LOOPS: Resolva tudo]
- Loops menores fechados
- História principal concluída
- Satisfação emocional

[THE OFFER: Apresente a solução]
- O que é
- O que está incluído
- Principal benefício

[VALUE STACK: O que eles ganham]
- Lista de componentes
- Valor de cada um (se apropriado)
- Bônus (se houver)

[RISK REVERSAL: Remova o medo]
- Garantia
- Por que não há risco

[URGENCY: Razão para agir agora]
- Deadline real
- Escassez real
- Consequência de esperar

[CTA: Chamada para ação clara]
- O que fazer
- Link direto
- Simplicidade

[SIGN-OFF]

[P.S.: Último reforço]
```

### Email 5 Template

```markdown
Subject: [Oportunidade/Decisão/Última chance]

Nos últimos 4 dias, eu te contei uma história.

Uma história sobre [recap em uma linha].

Você viu como eu fui de [ponto A] para [ponto B].

E mais importante: você entendeu [insight principal].

Agora é sua vez.

[TRANSIÇÃO PARA OFERTA]

Depois de [pessoas/tempo] pedindo,
eu finalmente criei [Nome do Produto].

É um [formato] que [principal benefício].

Aqui está o que você recebe:

✅ [Componente 1] - [benefício]
✅ [Componente 2] - [benefício]
✅ [Componente 3] - [benefício]
✅ BÔNUS: [Se houver] - [benefício]

[GARANTIA]
E você não arrisca nada.
Se não [resultado esperado] em [período],
você recebe 100% do dinheiro de volta.

[URGÊNCIA]
Mas preciso ser honesto:
[Razão genuína para urgência].

Depois de [deadline], [consequência].

[CTA]
Se você quer [transformação], clica aqui:
[LINK]

[Assinatura]

P.S. Lembra do [elemento da história]?
[Conexão com a oferta].
Clica aqui para começar: [LINK]

P.P.S. [Última urgência ou benefício]
```

### Email 5 Checklist

- [ ] Todos os loops estão fechados
- [ ] Recap conecta a jornada completa
- [ ] Oferta é apresentada como conclusão natural
- [ ] Value stack é claro
- [ ] Há garantia/reversão de risco
- [ ] Urgência é GENUÍNA
- [ ] CTA é claro e direto
- [ ] Leitor sabe exatamente o que fazer

---

## PHASE 7: SEQUENCE REVIEW

### Pre-Send Checklist

Antes de ativar a sequência:

```yaml
story_arc_check:
  - [ ] História tem início, meio e fim claros
  - [ ] Personagem é relatable
  - [ ] Conflito é real e doloroso
  - [ ] Epifania é clara e compreensível
  - [ ] Transformação é específica e crível

open_loop_check:
  - [ ] Cada email (1-4) tem cliffhanger
  - [ ] Todos os loops fecham no Email 5
  - [ ] Cliffhangers são específicos, não genéricos
  - [ ] Promessas são cumpridas

engagement_check:
  - [ ] Hooks capturam atenção
  - [ ] Parágrafos são curtos
  - [ ] Linguagem é conversacional
  - [ ] Leitor quer o próximo email

conversion_check:
  - [ ] Oferta conecta à história
  - [ ] Value stack é claro
  - [ ] Urgência é genuína
  - [ ] CTA é impossível de ignorar

technical_check:
  - [ ] Subject lines < 50 caracteres
  - [ ] Links funcionam
  - [ ] Timing entre emails está correto (24h recomendado)
  - [ ] Segmentação configurada
```

### Common Mistakes to Avoid

| Erro | Por que é problema | Como evitar |
|------|-------------------|-------------|
| Vender muito cedo | Quebra confiança | Espere até Email 5 |
| Loops não fechados | Frustração do leitor | Checklist de loops |
| História genérica | Não cria conexão | Use detalhes específicos |
| Drama artificial | Parece manipulação | Seja autêntico |
| Urgência falsa | Destrói credibilidade | Só use urgência real |

---

## PHASE 8: TIMING & DELIVERY

### Recommended Schedule

```
Day 0: Opt-in + Lead Magnet Delivery
Day 1: Email 1 - Set the Stage
Day 2: Email 2 - High Drama
Day 3: Email 3 - Epiphany
Day 4: Email 4 - Hidden Benefits
Day 5: Email 5 - Urgency
```

### Alternative Schedules

**Aggressive (para lançamentos):**
```
Day 0: Opt-in
Day 0 (PM): Email 1
Day 1: Email 2
Day 2: Email 3
Day 3: Email 4
Day 4: Email 5
```

**Extended (para high-ticket):**
```
Day 0: Opt-in + Lead Magnet
Day 2: Email 1
Day 4: Email 2
Day 6: Email 3
Day 8: Email 4
Day 10: Email 5
```

### Post-Sequence Options

Após Email 5:
1. **Compradores** → Sequence de onboarding/upsell
2. **Não-compradores** → Sequence de nutrição
3. **Engajados mas não compraram** → Re-engagement em 7-14 dias

---

## OUTPUT FORMAT

Ao entregar a sequência, use este formato:

```yaml
soap_opera_sequence:
  name: "[Nome da Sequência]"
  target_audience: "[Descrição do avatar]"
  product: "[O que está sendo vendido]"

  emails:
    email_1:
      subject: "[Subject line]"
      body: |
        [Corpo do email completo]
      open_loop: "[Descrição do loop aberto]"
      word_count: [número]

    email_2:
      subject: "[Subject line]"
      body: |
        [Corpo do email completo]
      open_loop: "[Descrição do loop aberto]"
      word_count: [número]

    email_3:
      subject: "[Subject line]"
      body: |
        [Corpo do email completo]
      open_loop: "[Descrição do loop aberto]"
      word_count: [número]

    email_4:
      subject: "[Subject line]"
      body: |
        [Corpo do email completo]
      open_loop: "[Descrição do loop aberto]"
      word_count: [número]

    email_5:
      subject: "[Subject line]"
      body: |
        [Corpo do email completo]
      loops_closed: "[Lista de loops fechados]"
      word_count: [número]

  metadata:
    total_words: [número]
    story_type: "[origin/client/discovery/etc]"
    timing: "[standard/aggressive/extended]"

  checklist_passed: true/false
```

---

*Task Version: 2.0*
*Primary Agent: Andre Chaperon*
*Lines: 600+*


---

## Referência: references/plf-create-case-study.md

# Task: Create Case Study

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Pre-Launch Preparation
> **Output**: Compelling case studies for PLC2 and sales page

---

## Purpose

Develop powerful case studies that demonstrate transformation and activate social proof. Case studies are the backbone of PLC2 and essential for sales page conversion.

---

## Why Case Studies Matter

> "Your case studies are worth their weight in gold. They're not just proof - they're permission. When people see someone like them succeed, they give themselves permission to believe it's possible." - Jeff Walker

**Functions:**
- Demonstrate transformation is possible
- Address objections through stories
- Provide "people like me" connection
- Create emotional resonance
- Build credibility

---

## Prerequisites

- [ ] Access to successful customers/students
- [ ] Permission to share their story
- [ ] Specific results to document
- [ ] Interview time or written testimonial

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. How many case studies do you need? (minimum 3)
2. Do you have customers with results?
3. Can you interview them? (or have written responses)
4. What types of results are most compelling?
5. What's your ideal customer profile?
6. What objections need addressing through stories?
```

### Step 2: Identify Case Study Candidates

**Ideal characteristics:**
- Similar to target avatar
- Achieved measurable results
- Articulate about their experience
- Willing to share publicly
- Represents common situation

**Candidate matrix:**

| Candidate | Avatar Similarity | Result Type | Articulate | Permission |
|-----------|-------------------|-------------|------------|------------|
| | | | | |
| | | | | |
| | | | | |

**Diversity considerations:**
- Different starting points
- Various demographics
- Range of result levels
- Different objections overcome

### Step 3: Conduct Case Study Interview

**Use template:**
- `templates/plf/case-study-tmpl.md`

**Interview questions:**

**Background:**
```
1. What was your situation before [PRODUCT]?
2. What had you tried before that didn't work?
3. What was your biggest frustration?
4. What made you decide to try this?
5. What concerns did you have before starting?
```

**Transformation:**
```
6. When did you first notice results?
7. What specific changes happened?
8. What was the most surprising outcome?
9. What's different about your daily life now?
10. Can you quantify any results? (numbers, time, money)
```

**Reflection:**
```
11. What would you tell someone who's skeptical?
12. What was the hardest part?
13. What made this different from other things you tried?
14. Would you recommend this? Why?
15. Where would you be without this change?
```

### Step 4: Extract Key Story Elements

**From interview, identify:**

**The Before:**
- Starting situation
- Pain points
- Failed attempts
- Emotional state

**The Turning Point:**
- Decision to try
- Initial skepticism
- First actions taken

**The After:**
- Specific results
- Life changes
- Emotional transformation
- Unexpected benefits

**The Quote:**
- Most powerful statement
- In their exact words
- Emotionally resonant

### Step 5: Structure the Case Study

**Format A: Short (PLC/Email)**
```
[NAME] - [HEADLINE RESULT]

Before: [ONE SENTENCE SITUATION]
After: [ONE SENTENCE TRANSFORMATION]

"[POWERFUL QUOTE]" - [Name]
```

**Format B: Medium (Sales Page)**
```
### [NAME]'s Story: From [BEFORE] to [AFTER]

**The Situation:**
[2-3 sentences about before]

**The Turning Point:**
[1-2 sentences about decision]

**The Results:**
- [SPECIFIC RESULT 1]
- [SPECIFIC RESULT 2]
- [SPECIFIC RESULT 3]

> "[TESTIMONIAL QUOTE - 2-3 sentences]"

[OPTIONAL: Photo]
```

**Format C: Long (Featured Case Study)**
```
## How [NAME] [ACHIEVED RESULT] in [TIMEFRAME]

### The Challenge
[Paragraph about their situation, struggles, failed attempts]

### The Decision
[Why they decided to try, initial concerns]

### The Process
[What they did, key moments, breakthrough]

### The Results
[Detailed outcomes with specifics]

### In Their Own Words
> "[Extended testimonial quote]"

### Key Takeaway
[What others can learn from this story]
```

### Step 6: Optimize for Objection Handling

**Map cases to objections:**

| Objection | Case Study | How It Addresses |
|-----------|------------|------------------|
| "I don't have time" | | |
| "I don't have money" | | |
| "I'm not tech-savvy" | | |
| "I've tried before" | | |
| "It won't work for me" | | |

**Reference:**
- `data/plf/objection-database.yaml`

**Example:**
```
Objection: "I'm too old/young for this"

Case Study: Maria, 58
"I thought I was too old to start an online business.
Turns out, my life experience was actually an advantage..."
```

### Step 7: Validate Case Study Quality

**Quality checklist per case study:**

| Criteria | Case 1 | Case 2 | Case 3 |
|----------|--------|--------|--------|
| Avatar similarity | [ ] | [ ] | [ ] |
| Specific results | [ ] | [ ] | [ ] |
| Before/after clear | [ ] | [ ] | [ ] |
| Timeline stated | [ ] | [ ] | [ ] |
| Quote powerful | [ ] | [ ] | [ ] |
| Permission secured | [ ] | [ ] | [ ] |
| Objection addressed | [ ] | [ ] | [ ] |

**Minimum requirements:**
- 3 case studies for PLC2
- 5+ testimonials for sales page
- 1+ video testimonial (ideal)

### Step 8: Format for Each Use

**PLC2 presentation:**
- Main case study: 3-5 minutes
- Supporting cases: 1-2 minutes each
- Quick mentions: 30 seconds

**Sales page sections:**
- Featured case studies: Full format
- Testimonial blocks: Quote + result
- Social proof strip: Names + results

**Email snippets:**
- One-liner results
- Quote + link to full story
- "Just in" format

### Step 9: Create Visual Elements

**Visual assets needed:**
- [ ] Headshot/photo (with permission)
- [ ] Screenshot of results (if applicable)
- [ ] Before/after visual (if applicable)
- [ ] Video testimonial (if available)

**Photo guidelines:**
- Real photo (not stock)
- Professional enough quality
- Smiling/positive
- With permission documented

### Step 10: Get Final Approval

**Before publishing:**
- [ ] Written permission on file
- [ ] Story accuracy confirmed
- [ ] Results verified
- [ ] No confidential information
- [ ] Complies with platform rules

**Permission template:**
```
I, [NAME], give [YOUR NAME/COMPANY] permission to use
my story, name, photo, and testimonial in marketing
materials including but not limited to: videos, emails,
sales pages, and social media posts.

The information shared is accurate to the best of my knowledge.

Signature: ____________
Date: ____________
```

---

## Deliverables

1. **Case Study Collection**
   - 3-5 complete case studies
   - Multiple formats per study
   - Visual assets

2. **Objection Mapping**
   - Which case addresses which objection
   - Strategic placement recommendations

3. **Permission Documentation**
   - Signed releases
   - Usage rights confirmed

4. **Format Variations**
   - PLC2 versions
   - Sales page versions
   - Email versions

---

## Success Criteria

- [ ] Minimum 3 complete case studies
- [ ] Each represents different avatar segment
- [ ] Results are specific and verifiable
- [ ] Quotes are powerful and authentic
- [ ] Addresses top 3 objections
- [ ] All permissions documented

---

## Case Study Ethics

**Always:**
- Get explicit permission
- Represent results accurately
- Add typical results context
- Honor privacy requests

**Never:**
- Fabricate testimonials
- Exaggerate results
- Use without permission
- Cherry-pick only extreme cases

---

## Collecting Ongoing Testimonials

**Testimonial collection system:**
1. Ask at moment of success
2. Use specific questions
3. Follow up for updates
4. Request video when possible
5. Document everything

**Questions that get great testimonials:**
```
1. What specific result did you achieve?
2. What was different about this approach?
3. What would you tell someone who's skeptical?
4. What surprised you most?
5. Would you recommend this? Why?
```

---

## Next Steps

After case studies complete:
→ `tasks/plf/create-plc-sequence.md` - Integrate into PLC2
→ `tasks/plf/create-sales-page-plf.md` - Add to sales page

---

## References

### Templates
- `templates/plf/case-study-tmpl.md`

### Checklists
- `checklists/plf/plc-quality.md` (case study section)

### Knowledge Bases
- `data/plf/objection-database.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Case Studies*


---

## Referência: references/plf-create-evergreen-launch.md

# Task: Create Evergreen Launch

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Launch Type**: Evergreen Launch
> **Output**: Complete automated evergreen funnel system

---

## Purpose

Transform a proven live launch into an automated evergreen system that runs continuously. Evergreen launches bring new prospects through the full PLF experience on their own timeline, generating consistent revenue without live launches.

---

## What is an Evergreen Launch?

> "An Evergreen Launch takes everything that worked in your live launch and automates it so you can make sales every single day, even while you sleep." - Jeff Walker

**Key characteristics:**
- Automated version of proven live launch
- Each subscriber gets personalized timeline
- Deadline is real but individualized
- Runs 24/7/365
- Requires proven live launch first

---

## Prerequisites

- [ ] Completed at least ONE successful live launch
- [ ] Conversion data from live launch
- [ ] Recorded PLC content (or filmed for evergreen)
- [ ] Sales page with proven conversion
- [ ] Email automation platform capable of date-based sequences
- [ ] Deadline/scarcity tool

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. Have you done a live launch of this offer? Results?
2. What was your conversion rate? (% of buyers)
3. Do you have recorded PLCs or need to create them?
4. What email platform are you using?
5. How will you handle deadlines? (countdown tool?)
6. What's your traffic source for the funnel?
7. What's your target daily/monthly revenue?
```

### Step 2: Validate Evergreen Readiness

**Ready for evergreen if:**
- [ ] Live launch conversion: 2%+ of engaged list
- [ ] PLC content recorded or filmable
- [ ] Email automation can handle dynamic dates
- [ ] Have deadline/scarcity tool (Deadline Funnel, etc.)
- [ ] Consistent traffic source available

**NOT ready if:**
- Never launched live (unproven offer)
- Conversion rate unknown
- No automated deadline solution
- No traffic source planned

**Reference:**
- `checklists/plf/evergreen-setup.md`

### Step 3: Plan Evergreen Architecture

**Core components:**

```
[Traffic] → [Opt-in] → [Evergreen PLC Sequence] → [Sales Page] → [Checkout]
                              ↓
                    [Deadline System]
                              ↓
                    [Cart Close/Offer Expired]
```

**Timeline options:**

| Model | PLC Duration | Cart Open | Total |
|-------|--------------|-----------|-------|
| Compressed | 3 days | 4 days | 7 days |
| Standard | 5-7 days | 5 days | 10-12 days |
| Extended | 10 days | 7 days | 17 days |

### Step 4: Convert PLCs to Evergreen Format

**For each PLC:**

1. **Review live version**
   - Identify dated references
   - Note live-only elements
   - List urgency language

2. **Adapt for evergreen**
   - Remove specific dates
   - Change "tomorrow" to "in your next video"
   - Update urgency to countdown-based
   - Remove live chat references

3. **Record or edit**
   - Film new version OR
   - Edit existing to remove dated content

**Evergreen PLC language:**
```
Instead of: "Tomorrow I'll share..."
Use: "In your next video, you'll discover..."

Instead of: "This Thursday at 8pm..."
Use: "In just a few days, the doors open..."

Instead of: "We had 500 people join yesterday"
Use: "Thousands of people have used this system..."
```

### Step 5: Build Email Automation Sequence

**Evergreen email sequence:**

| Day | Email | Focus |
|-----|-------|-------|
| 0 | Welcome + PLC1 Access | Orientation |
| 1 | PLC1 Reminder | Engagement |
| 2 | PLC2 Access | Progression |
| 3 | PLC2 Reminder | Engagement |
| 4 | PLC3 Access | Anticipation |
| 5 | PLC3 Reminder + "Tomorrow" | Build-up |
| 6 | Doors Open | Cart open |
| 7 | Social Proof | Middle cart |
| 8 | Objection | Middle cart |
| 9 | Final Day Warning | Urgency |
| 10 | 12 Hours Left | Strong urgency |
| 11 | 3 Hours Left | Maximum urgency |
| 12 | Last Chance | Final push |
| 13 | Doors Closed | Post-close |

**Buyer path:**
- Remove from sequence immediately
- Add to customer onboarding
- Do NOT continue cart emails

### Step 6: Set Up Deadline System

**Deadline technology options:**

| Tool | Features | Price |
|------|----------|-------|
| Deadline Funnel | Cookies + email + page | $49-99/mo |
| Thrive Ultimatum | WP plugin, basic | One-time |
| CartFlows | WooCommerce integrated | Varies |
| Custom dev | Full control | Dev time |

**Deadline rules:**
1. Deadline starts when they opt in
2. Timer syncs across emails and pages
3. Deadline is REAL (page actually closes)
4. No resets or extensions
5. After deadline: evergreen closed page

**Setup steps:**
- [ ] Install deadline tool
- [ ] Configure tracking
- [ ] Sync with email platform
- [ ] Test full sequence
- [ ] Verify page lockout works

### Step 7: Create Evergreen Pages

**Required pages:**

1. **Opt-in Page**
   - Lead magnet or PLC access offer
   - Trigger for deadline timer start

2. **PLC Pages (3)**
   - Embedded video
   - Engagement elements
   - Next step CTA

3. **Sales Page**
   - Timer visible
   - Dynamic deadline display
   - Standard sales page elements

4. **Checkout Page**
   - Timer visible
   - Urgency maintained
   - Clean checkout process

5. **Closed/Expired Page**
   - Acknowledges deadline passed
   - Waitlist option
   - Alternative offer (optional)

### Step 8: Plan Traffic Strategy

**Evergreen traffic sources:**

| Source | Type | Scalability |
|--------|------|-------------|
| Paid Ads | Active | High |
| SEO/Content | Passive | Medium |
| Social Media | Active | Medium |
| Affiliates | Passive | High |
| Podcast/Guest | Active | Medium |

**Traffic to revenue math:**
```
Opt-in rate: [X]%
PLC engagement: [X]%
Conversion rate: [X]%
Average order value: R$[X]

Example:
1,000 visitors → 300 opt-ins (30%)
300 opt-ins → 150 engaged (50%)
150 engaged → 5 sales (3.3%)
5 sales × R$997 = R$4,985

Cost per opt-in target: < R$[X]
```

### Step 9: Build Monitoring Dashboard

**Key metrics to track:**

| Metric | Target | Frequency |
|--------|--------|-----------|
| Opt-in rate | 25-40% | Daily |
| PLC1 view rate | 60%+ | Weekly |
| PLC2 view rate | 40%+ | Weekly |
| PLC3 view rate | 30%+ | Weekly |
| Cart visit rate | 20%+ | Weekly |
| Conversion rate | 2-5% | Weekly |
| Revenue/opt-in | R$[X] | Monthly |

**Review cadence:**
- Daily: Traffic and opt-ins
- Weekly: Engagement and conversions
- Monthly: Revenue and optimization

### Step 10: Plan Optimization Cycle

**Ongoing optimization:**

1. **Email optimization**
   - Subject line testing
   - Open rate improvement
   - Click rate improvement

2. **Page optimization**
   - Opt-in page conversion
   - Sales page conversion
   - Checkout completion

3. **Content optimization**
   - PLC engagement rates
   - Watch time analysis
   - Drop-off points

4. **Traffic optimization**
   - Source performance
   - Cost per acquisition
   - Quality of leads

### Step 11: Validate Evergreen Setup

**Run checklist:**
- `checklists/plf/evergreen-setup.md`

**Launch checklist:**
- [ ] All emails loaded and tested
- [ ] Deadline system working
- [ ] Pages live and functioning
- [ ] Checkout tested with real transaction
- [ ] Buyer removal from sequence working
- [ ] Analytics tracking in place

---

## Deliverables

1. **Evergreen Strategy Document**
   - Funnel architecture
   - Timeline selection
   - Traffic plan

2. **Content Conversion**
   - Evergreen PLC scripts/edits
   - Language adaptation guide
   - Recording requirements

3. **Email Sequence**
   - Full automation sequence (13+ emails)
   - Buyer exclusion rules
   - Post-close sequence

4. **Page Requirements**
   - Opt-in page spec
   - PLC page specs
   - Sales page updates
   - Closed page spec

5. **Deadline Configuration**
   - Tool setup guide
   - Tracking implementation
   - Testing protocol

6. **Monitoring Dashboard**
   - Key metrics list
   - Tracking setup
   - Review schedule

---

## Success Criteria

- [ ] Funnel runs without manual intervention
- [ ] Deadlines work correctly (page closes)
- [ ] Conversion rate: Within 50% of live launch
- [ ] Revenue: Consistent daily/weekly
- [ ] No customer complaints about fake scarcity
- [ ] Optimization showing improvements

---

## Evergreen Ethics

**The scarcity MUST be real:**
- Deadline enforced by technology
- No manual overrides or extensions
- Clear policy on missed deadlines
- Transparent about how it works

**Jeff's principle:**
> "The key to evergreen is that the deadline has to be just as real as in a live launch. If people can come back and buy whenever they want, it's not a launch - it's just a sales page."

---

## Common Evergreen Mistakes

1. **Fake scarcity** - Deadline resets or can be bypassed
2. **No traffic plan** - Built it but no one comes
3. **Never optimize** - Set and forget forever
4. **Skip live launch** - Go straight to evergreen (unproven)
5. **Ignore metrics** - Not tracking what matters

---

## After Evergreen Launch

**Ongoing:**
1. Monitor metrics weekly
2. Run optimization tests
3. Scale winning traffic sources
4. Collect new testimonials
5. Consider periodic "live" events to boost

**Relaunch consideration:**
- Annual or semi-annual live launch
- Updates to content and offer
- Fresh testimonials and cases

---

## References

### Checklists
- `checklists/plf/evergreen-setup.md`

### Templates
- `templates/plf/launch-timeline-tmpl.md`

### Knowledge Bases
- `data/plf/platform-comparison-kb.yaml`
- `data/plf/email-benchmarks-kb.yaml`
- `data/plf/timeline-reference-kb.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Evergreen Launch*


---

## Referência: references/plf-create-jv-launch.md

# Task: Create JV Launch Strategy

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Launch Type**: Joint Venture (JV) Launch
> **Output**: Complete JV partner strategy and launch coordination

---

## Purpose

Design a Joint Venture Launch that leverages partners' audiences to multiply your reach. JV launches can 10x your results by tapping into established lists while providing value to partners and their audiences.

---

## What is a JV Launch?

> "A JV Launch is when you partner with other list owners who promote your launch to their list in exchange for affiliate commissions." - Jeff Walker

**Key characteristics:**
- Partners promote your PLCs and offer
- Commission-based (typically 40-50%)
- Massive list expansion potential
- Requires relationship building
- Needs proven offer (usually after Internal Launch)

---

## Prerequisites

- [ ] Proven offer (ideally completed at least one Internal Launch)
- [ ] Case studies and testimonials available
- [ ] Affiliate/tracking system set up
- [ ] Commission structure defined
- [ ] Partner swipe copy ready
- [ ] Relationship with potential partners

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. Have you done an Internal Launch before? Results?
2. What commission can you offer? (40-50% standard)
3. Do you have existing relationships with potential partners?
4. What's your launch timeline?
5. Do you have an affiliate system set up?
6. What makes your offer unique for partners?
7. What's your EPC target? (earnings per click)
```

### Step 2: Assess JV Launch Readiness

**Ready for JV if:**
- [ ] Completed at least 1 Internal Launch
- [ ] Have proven conversion rate (know your numbers)
- [ ] Case studies from previous buyers
- [ ] Tech can handle affiliate tracking
- [ ] Can offer competitive commissions
- [ ] Have 60-90 days for partner recruitment

**Not ready if:**
- Never launched the offer before
- No proven conversion data
- Can't afford 40-50% commissions
- No existing partner relationships
- Launch is in < 30 days

**Reference:**
- `checklists/plf/jv-launch-partner.md`

### Step 3: Identify Potential Partners

**Partner categories:**

| Tier | Description | Approach |
|------|-------------|----------|
| A-List | 50K+ list, known name | Personal relationship required |
| B-List | 10-50K list | Warm intro or proven results |
| C-List | 1-10K list | Can recruit with good offer |
| Peers | Similar size to you | Reciprocal promotion |

**Partner identification process:**
1. List everyone in your niche with an audience
2. Research their past promotions
3. Identify warm connections (mutual friends)
4. Rank by audience fit, not just size
5. Create tiered outreach plan

### Step 4: Create Partner Value Proposition

**What partners want:**
1. Great earnings (high EPC)
2. Quality product (happy customers)
3. Easy promotion (done-for-you assets)
4. Responsive support
5. Recognition and relationship

**Your partner promise:**
```
Partner with [YOUR LAUNCH] because:

✓ Proven conversion: [X]% conversion rate
✓ Average EPC: R$[X] (or projected)
✓ Commission: [X]% on all sales
✓ Cookie duration: [X] days
✓ Full swipe copy provided
✓ Dedicated partner support
✓ Prizes for top affiliates
```

### Step 5: Create Partner Recruitment Sequence

**Use template:**
- `templates/plf/jv-swipe-tmpl.md`

**Outreach email 1: The Introduction**
```
Subject: Quick question about [THEIR TOPIC]

Hi [NAME],

I've been following your work on [SPECIFIC THING] and [GENUINE COMPLIMENT].

I'm planning a launch of [PRODUCT] in [MONTH] and I think it could be a great fit for your audience because [SPECIFIC REASON].

Would you be open to a quick call to discuss?

No pressure either way - just wanted to reach out.

[YOUR NAME]
```

**Follow-up sequence:**
- Email 2: Share results/case studies
- Email 3: Partner page with details
- Email 4: Final invitation with deadline

### Step 6: Create Partner Resources

**Partner resource kit:**

1. **Partner Overview Page**
   - Product summary
   - Commission structure
   - Launch timeline
   - Conversion data
   - Sign-up link

2. **Swipe Copy Library**
   - Email swipes for each PLC
   - Open cart email swipes
   - Social media posts
   - Ad copy (if applicable)

3. **Creative Assets**
   - Banners (multiple sizes)
   - Product images
   - Partner badge graphics
   - Video thumbnails

4. **Training/Briefing**
   - Product walkthrough video
   - Best practices for promotion
   - Top performer tips
   - FAQ document

### Step 7: Design Partner Contest

**Contest elements:**
- Grand prize for #1 (significant)
- Tier prizes (2nd-5th place)
- Bonus for first sale
- Daily/weekly mini-contests
- Recognition in community

**Example prize structure:**
```
🏆 Grand Prize (#1): [MAJOR PRIZE] + VIP Access
🥈 2nd Place: [PRIZE]
🥉 3rd Place: [PRIZE]
4th-10th: [SMALLER PRIZE]

Bonus: First partner to make a sale gets [BONUS]
Daily Prize: Random drawing among partners with sales
```

### Step 8: Create Partner Timeline

**JV Launch timeline (90 days):**

| Phase | Days Out | Activities |
|-------|----------|------------|
| Recruitment | -90 to -45 | Partner outreach, relationship building |
| Onboarding | -45 to -30 | Sign partners up, distribute resources |
| Warm-up | -30 to -14 | Partner calls, preview content |
| Pre-launch | -14 to 0 | Partners send warm-up emails |
| PLC Phase | Days 1-10 | Partners promote PLCs |
| Open Cart | Days 11-15 | Partners promote offer |
| Post-Launch | +7 days | Commissions, thank yous, debriefs |

### Step 9: Create Partner Communication Plan

**Communication cadence:**
- Weekly partner update emails
- Partner-only Facebook group or Slack
- Launch briefing call (before launch)
- Mid-launch check-in call
- Post-launch debrief call

**Update email template:**
```
Subject: [LAUNCH NAME] Partner Update - Day [X]

Hey partners!

Quick update on where we stand:

📊 Stats so far:
- Total sales: [X]
- Your sales: [X]
- Your commission: R$[X]

🏆 Leaderboard:
1. [PARTNER] - [X] sales
2. [PARTNER] - [X] sales
3. [PARTNER] - [X] sales

🔥 What's working:
[Tip from top performers]

📧 Today's focus:
[What to promote, swipe link]

Questions? Reply or post in our partner group.

Thank you for your partnership!
[YOUR NAME]
```

### Step 10: Validate JV Readiness

**Run checklist:**
- `checklists/plf/jv-launch-partner.md`

**Minimum requirements:**
- [ ] 10+ committed partners
- [ ] Combined reach: 50K+ subscribers
- [ ] Affiliate system tested
- [ ] Partner resources complete
- [ ] Communication plan ready

---

## Deliverables

1. **Partner Strategy Document**
   - Target partner list (tiered)
   - Value proposition
   - Commission structure
   - Contest details

2. **Partner Recruitment Kit**
   - Outreach email sequence
   - Partner overview page
   - FAQ document

3. **Partner Resource Kit**
   - Swipe copy library
   - Creative assets
   - Training materials

4. **Partner Communication Plan**
   - Timeline
   - Update templates
   - Community setup

5. **Contest Structure**
   - Prize tiers
   - Rules
   - Leaderboard system

---

## Success Criteria

- [ ] 10+ active partners (minimum)
- [ ] Combined partner reach: 50K+ subscribers
- [ ] Partner EPC: R$1.50+ (healthy indicator)
- [ ] 3-5 partners in top tier performance
- [ ] No partner complaints about support
- [ ] Relationships maintained for future launches

---

## JV Ethics & Best Practices

**Always:**
- Deliver what you promise
- Pay commissions on time
- Provide excellent support
- Protect partner relationships
- Be transparent about conversions

**Never:**
- Exaggerate your results
- Use partners and disappear
- Change commission terms mid-launch
- Ignore partner questions
- Launch without proven offer

---

## After the JV Launch

**Post-launch:**
1. Pay commissions promptly (within 30 days)
2. Send thank you gifts to top partners
3. Debrief call with partners
4. Collect feedback for improvement
5. Plan reciprocal promotions
6. Maintain relationship for future launches

---

## References

### Templates
- `templates/plf/jv-swipe-tmpl.md`

### Checklists
- `checklists/plf/jv-launch-partner.md`

### Knowledge Bases
- `data/plf/launch-budget-kb.yaml`
- `data/plf/timeline-reference-kb.yaml`
- `data/plf/platform-comparison-kb.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - JV Launch*


---

## Referência: references/plf-create-launch-emails.md

# Task: Create Launch Emails

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Full Launch Sequence
> **Output**: Complete email sequence for entire launch

---

## Purpose

Create the complete email sequence that accompanies a Product Launch Formula launch - from pre-prelaunch through post-close. This is the communication backbone of your launch.

---

## Email Sequence Overview

> "Your emails are the connective tissue of your launch. They move people from content to content, build anticipation, and drive action." - Jeff Walker

**Total emails in a full launch: 20-35 emails**

| Phase | # Emails | Primary Purpose |
|-------|----------|-----------------|
| Pre-Prelaunch | 3-5 | Build anticipation, survey |
| PLC Phase | 9-12 | Announce and follow up on each PLC |
| Open Cart | 8-15 | Drive sales during cart period |
| Post-Close | 2-3 | Thank buyers, nurture non-buyers |

---

## Prerequisites

- [ ] Launch timeline finalized
- [ ] PLCs created or outlined
- [ ] Launch stack finalized
- [ ] Avatar clearly defined
- [ ] Case studies/testimonials ready

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. How many days is your prelaunch? (PLC1 to Cart Open)
2. How many days is cart open?
3. What's your product name and price?
4. What's the main transformation?
5. Do you have fast action bonuses?
6. What's your deadline/scarcity?
7. How many case studies do you have?
8. What are top 3 objections?
```

### Step 2: Map Email Calendar

**Standard PLF email calendar:**

```
PRE-PRELAUNCH (Days -14 to -7)
├── Day -14: Survey/Conversation email
├── Day -10: Survey reminder
├── Day -7: "Something coming" teaser
├── Day -3: Content teaser
└── Day -1: "Tomorrow" anticipation

PLC PHASE (Days 1-10)
├── Day 1: PLC1 Announcement
├── Day 2: PLC1 Reminder
├── Day 3: PLC1 "Did you see?"
├── Day 4: PLC2 Announcement
├── Day 5: PLC2 Reminder
├── Day 6: PLC2 "Did you see?"
├── Day 7: PLC3 Announcement
├── Day 8: PLC3 Reminder
├── Day 9: PLC3 "Tomorrow" teaser
└── Day 10: "Cart opens tomorrow"

OPEN CART (Days 11-15)
├── Day 11 AM: Cart Open announcement
├── Day 11 PM: First day recap
├── Day 12: Social proof email
├── Day 13: Objection handler #1
├── Day 14 AM: Final day warning
├── Day 14 Mid: "Hours left"
├── Day 14 PM: Final call
├── Day 14 Night: Last chance
└── Day 15: Cart closed

POST-CLOSE (Days 16-17)
├── Day 16: Thank you (buyers)
├── Day 16: "Missed it" (non-buyers)
└── Day 17: Next steps email
```

### Step 3: Create Pre-Prelaunch Emails

**Email PPL-1: Survey/Conversation**
```
Subject: Quick question for you

Hey [NAME],

I've been working on something and need your input.

Before I finalize it, I want to make sure it actually
helps people like you.

So here's my question:

What's your #1 challenge when it comes to [TOPIC]?

Just hit reply and let me know. I read every response.

Thanks,
[YOUR NAME]

P.S. There might be something special coming for people
who respond... just saying.
```

**Email PPL-2: Teaser**
```
Subject: Something's coming...

[NAME],

I've been quiet lately for a reason.

Working on something big.

Something that [BRIEF HINT AT TRANSFORMATION].

Can't reveal everything yet, but here's what I can tell you:
[SPECIFIC TEASER #1]
[SPECIFIC TEASER #2]

Keep an eye on your inbox.

[YOUR NAME]
```

**Email PPL-3: Tomorrow**
```
Subject: Tomorrow.

[NAME],

Tomorrow I'm releasing something I've been working on
for [TIMEFRAME].

It's called [NAME/HINT].

If you want to [RESULT], you're going to want to see this.

Check your inbox tomorrow morning.

[YOUR NAME]
```

### Step 4: Create PLC Announcement Emails

**PLC1 Announcement:**
```
Subject: It's here: [PLC1 TITLE]

[NAME],

The wait is over.

I just released [PLC1 TITLE] and you can access it now:

[LINK]

In this [video/training], you'll discover:
• [KEY POINT 1]
• [KEY POINT 2]
• [KEY POINT 3]

This isn't some surface-level overview.

I'm sharing [SPECIFIC VALUE PROMISE].

Watch it here: [LINK]

Let me know what you think.

[YOUR NAME]

P.S. This is part 1 of 3. If you like this one,
wait until you see what's coming in part 2.
```

**PLC Reminder Template:**
```
Subject: Did you watch this?

Hey [NAME],

Yesterday I released [PLC TITLE].

In case you missed it, here's the link: [LINK]

[X] people have already watched it, and the
feedback has been incredible:

"[SHORT TESTIMONIAL/COMMENT]"

Don't miss this one.

[LINK]

[YOUR NAME]
```

### Step 5: Create Open Cart Emails

**Reference:**
- `templates/plf/open-cart-day1-tmpl.md`
- `templates/plf/open-cart-final-tmpl.md`

**Cart Open Email:**
```
Subject: 🚀 Doors are open

[NAME],

This is it.

After [X] weeks of training, case studies, and insights...

[PRODUCT NAME] is officially open for enrollment.

If you're ready to [TRANSFORMATION]:

[LINK]

Here's what you get:
[QUICK STACK SUMMARY]

The doors close on [DATE] at [TIME].

Join us: [LINK]

[YOUR NAME]
```

**Social Proof Email:**
```
Subject: [X] people joined yesterday

[NAME],

The response has been incredible.

[X] people enrolled in [PRODUCT] yesterday.

Here's what [NAME] said after joining:

"[TESTIMONIAL]"

And [NAME]:

"[TESTIMONIAL]"

If you're still thinking about it, here's the link:

[LINK]

Doors close [DATE].

[YOUR NAME]
```

**Objection Handler Email:**
```
Subject: "But what if [OBJECTION]?"

[NAME],

I've been getting a lot of questions.

The most common one?

"[OBJECTION AS QUESTION]"

Here's my honest answer:

[ADDRESS OBJECTION DIRECTLY]

[STORY OR CASE STUDY THAT ILLUSTRATES]

The truth is, [REFRAME/REASSURANCE].

If that resonates, here's the link:

[LINK]

[YOUR NAME]
```

### Step 6: Create Final Day Emails

**Last Day Warning:**
```
Subject: ⚠️ Last day

[NAME],

This is your final reminder.

[PRODUCT NAME] closes tonight at [TIME].

After that, I honestly don't know when (or if)
I'll open it again.

If you've been thinking about it, now is the time:

[LINK]

What you get:
[QUICK RECAP]

Closes tonight: [LINK]

[YOUR NAME]
```

**Hours Left:**
```
Subject: [X] hours left

[NAME],

In [X] hours, the doors to [PRODUCT] close.

I wanted to reach out one more time because
I know how easy it is to put things off.

But here's the thing:

[BRIEF MOTIVATION/TRANSFORMATION REMINDER]

If you're ready: [LINK]

Clock is ticking.

[YOUR NAME]
```

**Final Call:**
```
Subject: Closing in 2 hours

[NAME],

This is it.

In 2 hours, [PRODUCT] closes.

If you've been on the fence, now is the time to decide.

[LINK]

Thank you for being here throughout this journey.

Whatever you decide, I appreciate you.

[YOUR NAME]
```

**Cart Closed:**
```
Subject: Doors closed

[NAME],

That's it.

[PRODUCT] is now closed.

Thank you to everyone who joined - I can't wait
to work with you inside.

For everyone else:

I'll let you know if/when we open again.

In the meantime, I'll be sharing more free content
to help you [CONTINUE TRANSFORMATION].

Talk soon,

[YOUR NAME]
```

### Step 7: Create Post-Close Emails

**Buyer Thank You:**
```
Subject: Welcome to [PRODUCT]!

Congratulations, [NAME]!

You're officially part of [PRODUCT].

Here's what happens next:
1. [NEXT STEP 1]
2. [NEXT STEP 2]
3. [NEXT STEP 3]

Your login details: [LINK]

I'm so excited to have you here.

Let's do this.

[YOUR NAME]
```

**Non-Buyer Nurture:**
```
Subject: For those who didn't join

[NAME],

I know you didn't join [PRODUCT] this time.

And that's totally okay.

I wanted to let you know:
- I'll continue sharing free content
- You're still part of this community
- When/if we open again, you'll be first to know

Thank you for being here.

[YOUR NAME]
```

### Step 8: Optimize Subject Lines

**Create 2-3 variations for key emails:**

| Email | Option A | Option B | Option C |
|-------|----------|----------|----------|
| PLC1 | "It's here" | "[PLC TITLE]" | "You asked, I delivered" |
| Cart Open | "Doors open" | "🚀 We're live" | "Your invitation" |
| Final Day | "Last day" | "Closing tonight" | "Final call" |
| Final Hour | "[X] hours" | "Don't miss this" | "Closing now" |

**Reference:**
- `templates/plf/email-subject-lines-tmpl.md`
- `data/plf/email-benchmarks-kb.yaml`

### Step 9: Set Up Email Segments

**Segment by engagement:**
- Opened emails only
- Clicked to PLC
- Watched all PLCs
- Visited sales page
- Started checkout
- Cart abandoned

**Tailor messaging:**
- Re-engaged sequences for non-openers
- Extra urgency for cart abandoners
- Different angles for different segments

### Step 10: Validate Complete Sequence

**Checklist:**
- [ ] All emails written
- [ ] Subject line variations ready
- [ ] Links correct
- [ ] Dates/times accurate
- [ ] Segments configured
- [ ] Test emails sent
- [ ] Mobile formatting checked

---

## Deliverables

1. **Pre-Prelaunch Sequence**
   - 3-5 emails
   - Subject line variations

2. **PLC Email Sequence**
   - 9-12 emails
   - Announcement + reminders for each

3. **Open Cart Sequence**
   - 8-15 emails
   - Day-by-day schedule

4. **Post-Close Sequence**
   - Buyer welcome
   - Non-buyer nurture

5. **Subject Line Matrix**
   - 2-3 variations per key email

6. **Email Calendar**
   - Visual timeline
   - Send times specified

---

## Success Criteria

- [ ] Complete sequence for all phases
- [ ] Consistent voice throughout
- [ ] Clear CTAs in every email
- [ ] Urgency builds appropriately
- [ ] Social proof integrated
- [ ] Mobile-optimized
- [ ] Tested and proofread

---

## Email Best Practices

**Do:**
- Write like you're emailing a friend
- Keep most emails under 300 words
- One CTA per email
- Use their name
- Create open loops
- Test subject lines

**Don't:**
- Write corporate/stiff copy
- Include multiple CTAs
- Bury the link
- Send all at same time of day
- Forget mobile readers

---

## References

### Templates
- `templates/plf/open-cart-day1-tmpl.md`
- `templates/plf/open-cart-final-tmpl.md`
- `templates/plf/email-subject-lines-tmpl.md`

### Knowledge Bases
- `data/plf/email-benchmarks-kb.yaml`
- `data/plf/copy-swipes-kb.yaml`

### Checklists
- `checklists/plf/open-cart-sequence.md`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Launch Emails*


---

## Referência: references/plf-create-launch-stack.md

# Task: Create Launch Stack

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Pre-Cart Preparation
> **Output**: Complete offer stack with value anchoring

---

## Purpose

Build a compelling launch stack (offer) that maximizes perceived value while providing genuine transformation. The stack should make the decision to buy feel like a "no-brainer" through strategic value anchoring.

---

## Prerequisites

- [ ] Core product defined and structured
- [ ] Avatar pain points and desires mapped
- [ ] Objections identified (from survey/research)
- [ ] Competitive pricing research done
- [ ] PLC sequence in progress or planned

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. What is your core product? (name and one-line description)
2. What's the main transformation it provides?
3. How is it delivered? (course, coaching, software, etc.)
4. What access duration? (lifetime, 12 months, etc.)
5. Target price point? (or range)
6. What are top 3 objections you need to overcome?
7. Do you have existing bonuses or assets to include?
```

### Step 2: Structure Core Product

**Define modules/components:**

| Module | Name | What They Learn/Get | Standalone Value |
|--------|------|---------------------|------------------|
| 1 | | | R$ |
| 2 | | | R$ |
| 3 | | | R$ |
| 4 | | | R$ |
| 5 | | | R$ |

**Value anchoring principles:**
- Each module should have believable standalone value
- Total should be 10-20x actual price
- Values should feel real (not inflated)

**Reference:**
- `templates/plf/launch-stack-tmpl.md`

### Step 3: Design Bonus Stack

**Create 3-5 strategic bonuses:**

**Bonus #1: Fast Action Bonus**
- Purpose: Create urgency for early buyers
- Type: Time-limited or quantity-limited
- Deadline: First 24-48 hours or first X buyers
- Value: Compelling enough to drive action

**Bonus #2: Objection Crusher**
- Purpose: Eliminate primary objection
- Maps to: [OBJECTION]
- How it solves: [EXPLANATION]
- Value: [R$]

**Bonus #3: Complementary Asset**
- Purpose: Add value without competing
- Type: Template, tool, resource, access
- Value: [R$]

**Optional Bonus #4-5:**
- Partner contributions
- Community access
- Additional resources

**Reference:**
- `data/plf/objection-database.yaml` - Objection patterns

### Step 4: Define Guarantee

**Select guarantee type:**

| Type | Description | Best For |
|------|-------------|----------|
| Money Back | 30/60/90 day refund | Digital products |
| Conditional | "Do X, get refund" | High-ticket |
| Result-Based | "If no X result" | Transformation offers |
| Hybrid | Combination | Premium offers |

**Guarantee elements:**
- Duration: ___ days
- Conditions (if any): ___
- Process: ___
- Contact method: ___

### Step 5: Set Pricing Structure

**Single payment:**
- Price: R$ ___
- Position vs value stack: ___% discount

**Payment plan (if offered):**
- Number of payments: ___
- Amount each: R$ ___
- Total: R$ ___
- Premium over single pay: ____%

**Price positioning:**
```
Total Value: R$ [STACK_TOTAL]
Regular Price: R$ [ANCHOR_PRICE] (optional)
Your Investment: R$ [ACTUAL_PRICE]
You Save: R$ [SAVINGS] ([X]%)
```

### Step 6: Create Scarcity Elements

**Select real scarcity:**
- [ ] Cart close (time-based)
- [ ] Limited spots (capacity)
- [ ] Price increase after
- [ ] Bonus removal

**Scarcity schedule:**
- Cart opens: [DATE/TIME]
- Cart closes: [DATE/TIME]
- Fast action deadline: [DATE/TIME]
- Timezone: [TIMEZONE]

**CRITICAL:** All scarcity must be 100% REAL and will be honored.

### Step 7: Write Stack Presentation

**Create stack reveal copy:**

```markdown
## What You Get

✓ [CORE PRODUCT NAME] (Value: R$X)
  - Module 1: [NAME] - [BENEFIT]
  - Module 2: [NAME] - [BENEFIT]
  - Module 3: [NAME] - [BENEFIT]
  - Module 4: [NAME] - [BENEFIT]
  - Module 5: [NAME] - [BENEFIT]

+ BONUS #1: [NAME] (Value: R$X)
  [One-line benefit]

+ BONUS #2: [NAME] (Value: R$X)
  [One-line benefit]

+ BONUS #3: [NAME] (Value: R$X)
  [One-line benefit]

+ [GUARANTEE] Guarantee
  [One-line reassurance]

═══════════════════════════════════
Total Value: R$[TOTAL]
Your Investment Today: R$[PRICE]
═══════════════════════════════════
```

### Step 8: Validate Stack

**Run checklist:**
- `checklists/plf/launch-stack-completeness.md`

**Quality checks:**
- [ ] Stack total > 10x price
- [ ] Each bonus has real value
- [ ] Transformation is clear
- [ ] Guarantee removes friction
- [ ] Scarcity is REAL
- [ ] Payment plan accessible

---

## Deliverables

1. **Core Product Structure**
   - Module breakdown with descriptions
   - Value assignments
   - Delivery format details

2. **Bonus Stack**
   - 3-5 bonuses with values
   - Objection mapping
   - Fast action bonus details

3. **Guarantee Copy**
   - Type and duration
   - Terms and conditions
   - Process description

4. **Pricing Document**
   - Price points
   - Payment plan details
   - Value anchoring math

5. **Stack Presentation Copy**
   - Sales page stack section
   - Slide deck version (optional)
   - Email announcement version

---

## Success Criteria

- [ ] Value stack feels believable
- [ ] Bonuses address real objections
- [ ] Guarantee reduces friction
- [ ] Price feels like a "no-brainer"
- [ ] Scarcity is genuine
- [ ] Stack tells a complete story

---

## Value Anchoring Guidelines

**Believable values:**
- Base on time to create
- Consider market alternatives
- Use round numbers
- Don't over-inflate

**Example reasoning:**
```
Module 1: Complete System Training
- 8 hours of content
- Similar courses sell for R$997
- Conservative value: R$497
```

---

## Next Steps

After launch stack complete:
→ `tasks/plf/create-sales-page-plf.md` - Build sales page
→ `tasks/plf/create-open-cart-sequence.md` - Cart emails
→ `tasks/plf/map-mental-triggers.md` - Trigger validation

---

## References

### Templates
- `templates/plf/launch-stack-tmpl.md`
- `templates/plf/objection-crusher-tmpl.md`

### Checklists
- `checklists/plf/launch-stack-completeness.md`

### Knowledge Bases
- `data/plf/objection-database.yaml`
- `data/plf/launch-budget-kb.yaml`
- `data/plf/platform-comparison-kb.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Launch Stack*


---

## Referência: references/plf-create-live-launch.md

# Task: Create Live Launch Plan

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Launch Type**: Live Launch
> **Output**: Complete live event integrated launch strategy

---

## Purpose

Design a Live Launch that incorporates real-time events (webinars, workshops, challenges) into the PLF framework. Live elements amplify engagement, create events, and drive urgency through scheduled experiences.

---

## What is a Live Launch?

> "Adding live elements to your launch creates real events that people don't want to miss. It's the difference between watching a movie at home and going to the premiere." - Jeff Walker

**Key characteristics:**
- Scheduled live events during launch
- Real-time interaction with audience
- Creates genuine scarcity (live = now or never)
- Higher engagement and conversion
- Requires more coordination

---

## Live Launch Formats

| Format | Duration | Best For | Complexity |
|--------|----------|----------|------------|
| Webinar Series | 60-90 min x 3 | Teaching-based offers | Medium |
| Live Workshop | 2-4 hours x 1-3 | Hands-on skills | Medium |
| 5-Day Challenge | 30-60 min x 5 | List building + launch | High |
| Launch Event | 1 day intensive | Premium offers | High |
| Hybrid PLC | Videos + Live Q&A | Any offer | Low-Medium |

---

## Prerequisites

- [ ] Comfortable presenting live
- [ ] Webinar/streaming platform ready
- [ ] Reliable internet connection
- [ ] Product/offer finalized
- [ ] Team support (optional but helpful)
- [ ] Replay strategy defined

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. What live format appeals to you? (webinar, workshop, challenge)
2. Are you comfortable presenting live?
3. What platform will you use? (Zoom, WebinarJam, etc.)
4. How many live events do you want to do?
5. Will you have team support during lives?
6. What's your replay strategy?
7. What timezone is your primary audience?
```

### Step 2: Select Live Launch Format

**Format decision tree:**

```
Are you comfortable with long live sessions?
├─ Yes → Workshop or Challenge
└─ No → Webinar Series or Hybrid

Is your audience global (multiple timezones)?
├─ Yes → Hybrid (lives + replays) or Multiple times
└─ No → Single timezone scheduling

What's your team capacity?
├─ Solo → Webinar Series or Hybrid
└─ Team → Any format
```

**Reference:**
- `checklists/plf/live-launch-readiness.md`

### Step 3: Design Live Event Structure

**Option A: 3-Part Webinar Series (replaces PLCs)**

| Event | Focus | Duration | Day |
|-------|-------|----------|-----|
| Webinar 1 | Opportunity + Teaching | 75 min | Day 1 |
| Webinar 2 | Transformation + Cases | 90 min | Day 3 |
| Webinar 3 | Ownership + Offer | 90-120 min | Day 5 |

**Option B: 5-Day Challenge**

| Day | Topic | Format | Duration |
|-----|-------|--------|----------|
| Day 1 | Foundation + Quick Win | Live training | 45 min |
| Day 2 | Deep Dive #1 | Live training | 45 min |
| Day 3 | Deep Dive #2 | Live training | 45 min |
| Day 4 | Implementation | Live workshop | 60 min |
| Day 5 | Offer + Q&A | Live pitch | 75 min |

**Option C: Hybrid PLCs + Live Q&As**

| Component | Format | Day |
|-----------|--------|-----|
| PLC1 | Recorded video | Day 1 |
| Live Q&A #1 | Live session | Day 2 |
| PLC2 | Recorded video | Day 3 |
| Live Q&A #2 | Live session | Day 4 |
| PLC3 | Recorded video | Day 5 |
| Live Offer Webinar | Live session | Day 6 |

### Step 4: Create Live Event Content

**For each live event, create:**

1. **Event Outline**
   - Opening hook (2-3 min)
   - Content sections with times
   - Interaction points (polls, Q&A)
   - Transition to next step/offer

2. **Slide Deck** (if applicable)
   - Title slide
   - Agenda
   - Content slides
   - Offer/pitch slides (for final event)

3. **Host Notes**
   - Talking points
   - Timing reminders
   - Q&A prompts
   - Technical instructions

### Step 5: Plan Live Event Technology

**Tech checklist:**
- [ ] Webinar platform selected and tested
- [ ] Backup internet connection available
- [ ] Microphone quality checked
- [ ] Camera/lighting set up
- [ ] Screen sharing tested
- [ ] Recording enabled
- [ ] Chat/Q&A moderation plan
- [ ] Polls/engagement tools ready

**Platform recommendations:**

| Platform | Best For | Price Range |
|----------|----------|-------------|
| Zoom | Small-medium audiences | Free-$200/mo |
| WebinarJam | Marketing webinars | $499/yr+ |
| Demio | Clean experience | $59/mo+ |
| StreamYard | Multi-platform | Free-$49/mo |

### Step 6: Create Registration & Reminder Sequence

**Registration page elements:**
- Compelling headline
- Date/time (with timezone)
- What they'll learn (3 bullets)
- Your credibility
- Clear CTA to register

**Reminder sequence:**
- Confirmation email (immediate)
- Day before reminder
- Morning of reminder
- 1 hour before reminder
- "We're live" notification

**Email templates:**
```
Subject: [FIRST NAME], your seat is confirmed

You're registered for [EVENT NAME]!

📅 Date: [DATE]
🕐 Time: [TIME] [TIMEZONE]
🔗 Link: [LINK]

Add to calendar: [LINKS]

What to expect:
• [BULLET 1]
• [BULLET 2]
• [BULLET 3]

See you there!
[YOUR NAME]
```

### Step 7: Plan Show-Up Strategy

**Maximize attendance:**
- [ ] Calendar invite attachment
- [ ] Multiple reminder emails
- [ ] SMS reminders (if possible)
- [ ] Incentive for live attendance
- [ ] Community accountability

**Show-up incentives:**
- Live-only bonus
- Prize drawings for attendees
- Special Q&A access
- Extended replay access

### Step 8: Create Replay Strategy

**Options:**
1. **No replay** - Maximum urgency
2. **Limited replay** - 24-48 hours
3. **Full replay** - Until cart close
4. **Hybrid** - Replay available but live bonuses expire

**Replay email sequence:**
- "Missed it? Replay inside"
- "Replay coming down in [X] hours"
- "Final hours to watch"

### Step 9: Design Offer Transition

**For the final live event (pitch):**

1. **Content section** (60-70% of time)
   - Deliver real value
   - Build to the offer naturally

2. **Transition** (5 min)
   - Recap value delivered
   - Bridge to offer

3. **Offer section** (20-30% of time)
   - Stack presentation
   - Price reveal
   - Bonuses
   - Guarantee
   - Close

4. **Q&A** (remaining time)
   - Answer objections
   - Celebrate buyers
   - Final call to action

### Step 10: Validate Live Launch Readiness

**Run checklist:**
- `checklists/plf/live-launch-readiness.md`

**Technical requirements:**
- [ ] Platform tested with full run-through
- [ ] Internet speed: 10+ Mbps upload
- [ ] Backup plan for tech failure
- [ ] Moderator assigned (if possible)
- [ ] Recording confirmed working

---

## Deliverables

1. **Live Launch Strategy**
   - Format selection
   - Event schedule
   - Content themes

2. **Event Content**
   - Outlines for each live
   - Slide decks (if applicable)
   - Host notes

3. **Tech Setup**
   - Platform configuration
   - Backup plans
   - Recording settings

4. **Email Sequences**
   - Registration confirmation
   - Reminder sequence
   - Replay sequence

5. **Show-Up Strategy**
   - Incentives
   - Multi-channel reminders
   - Community engagement

---

## Success Criteria

- [ ] Registration rate: 20-40% of list
- [ ] Show-up rate: 25-40% of registrants
- [ ] Engagement: Active chat/Q&A
- [ ] Replay views: 50% of no-shows
- [ ] Conversion: 5-15% of attendees
- [ ] Positive feedback on experience

---

## Live Event Best Practices

**Do:**
- Start and end on time
- Engage early (poll in first 5 min)
- Use attendees' names
- Have water nearby
- Stand if possible (energy)
- Smile (it comes through)

**Don't:**
- Read from script word-for-word
- Ignore the chat
- Rush through content
- Apologize for tech issues
- Let Q&A run indefinitely
- Forget to record

---

## After the Live Launch

**Post-event:**
1. Send replay immediately
2. Follow up with non-attendees
3. Continue cart sequence
4. Answer questions from chat
5. Debrief on what worked

→ `tasks/plf/create-open-cart-sequence.md` - Cart emails
→ `tasks/plf/diagnose-failed-launch.md` - If needed

---

## References

### Checklists
- `checklists/plf/live-launch-readiness.md`
- `checklists/plf/launch-day-execution.md`

### Templates
- `templates/plf/plc1-script-tmpl.md` (adapted for live)
- `templates/plf/plc2-script-tmpl.md` (adapted for live)
- `templates/plf/plc3-script-tmpl.md` (adapted for live)

### Knowledge Bases
- `data/plf/platform-comparison-kb.yaml`
- `data/plf/timeline-reference-kb.yaml`
- `data/plf/content-formats-kb.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Live Launch*


---

## Referência: references/plf-create-open-cart-sequence.md

# Task: Create Open Cart Sequence

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Open Cart
> **Output**: Complete open cart email sequence and daily strategy

---

## Purpose

Create the complete Open Cart sequence of emails that drive sales during the launch window. This phase is where all the prelaunch work converts into revenue through strategic urgency and social proof.

---

## Prerequisites

- [ ] PLC sequence completed
- [ ] Launch stack finalized
- [ ] Sales page live (or ready)
- [ ] Checkout working and tested
- [ ] Cart dates confirmed
- [ ] Testimonials/social proof ready

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. How many days is your cart open? (3-7 typical)
2. Cart open date/time: ___
3. Cart close date/time: ___
4. Do you have a fast action bonus? What's the deadline?
5. How many emails per day do you want? (2-4)
6. Do you have buyer testimonials from previous launches?
7. Will you do live events during cart? (webinar, Q&A)
```

### Step 2: Design Cart Sequence Architecture

**Standard 5-day sequence:**

| Day | Focus | Emails | Primary Trigger |
|-----|-------|--------|-----------------|
| Day 1 | LAUNCH | 2-3 | Events, Social Proof |
| Day 2 | Social Proof | 2 | Social Proof, Trust |
| Day 3 | Objections | 2 | Trust, Authority |
| Day 4 | Stories | 2 | Community, Likability |
| Day 5 | CLOSE | 3-4 | Scarcity, Urgency |

**Reference:**
- `data/plf/timeline-reference-kb.yaml`
- `checklists/plf/open-cart-sequence.md`

### Step 3: Create Day 1 Emails (Cart Open)

**Use template:**
- `templates/plf/open-cart-day1-tmpl.md`

**Email 1: "Doors Are Open" (morning)**
- Announce cart is open
- Recap transformation
- Link to sales page
- Fast action bonus (if applicable)

**Email 2: "Inside Look" (midday)**
- Behind the scenes
- What they get
- First buyer stories (if available)

**Email 3: "Day 1 Recap" (evening)**
- Excitement building
- Social proof numbers
- FAQ answered
- Tomorrow teaser

### Step 4: Create Middle Days (Days 2-4)

**Day 2: Social Proof Focus**
- Email 1: Case study spotlight
- Email 2: "X people joined" update

**Day 3: Objection Handling**
- Email 1: "The #1 question I'm getting"
- Email 2: Risk reversal (guarantee focus)

**Day 4: Stories & Connection**
- Email 1: Your "why" story
- Email 2: Student transformation story

**Reference:**
- `data/plf/copy-swipes-kb.yaml`
- `templates/plf/case-study-tmpl.md`

### Step 5: Create Final Day Emails (Cart Close)

**Use template:**
- `templates/plf/open-cart-final-tmpl.md`

**Email 1: "Last Day" (morning)**
- Clear deadline reminder
- What they'll miss
- Final recap of offer

**Email 2: "Hours Left" (afternoon)**
- Countdown intensifies
- Last chance positioning
- Direct appeal

**Email 3: "Final Call" (2 hours before close)**
- Maximum urgency
- Clear deadline
- Simple CTA

**Email 4: "Closing Now" (30 min before)**
- Last chance
- Final push
- Countdown

**Email 5: "Closed" (after close)**
- Thank buyers
- Acknowledge fence-sitters
- "Next time" positioning

### Step 6: Create Subject Line Variations

**For each email, create 2-3 options:**

| Email | Option A | Option B | Option C |
|-------|----------|----------|----------|
| Open | "It's time" | "[NAME], doors open" | "🚀 We're live" |
| Social Proof | "X joined" | "This just happened" | "Wow..." |
| Objection | "Your question" | "I need to address..." | "Quick answer" |
| Close | "[X] hours left" | "Closing tonight" | "Last chance" |

**Reference:**
- `templates/plf/email-subject-lines-tmpl.md`
- `data/plf/email-benchmarks-kb.yaml`

### Step 7: Map Daily Tasks

**Launch Commander schedule:**

| Day | Morning | Midday | Afternoon | Evening |
|-----|---------|--------|-----------|---------|
| 1 | Send Open | Send Inside | - | Send Recap |
| 2 | Send Proof | - | Send Update | - |
| 3 | Send Objection | - | Send Guarantee | - |
| 4 | Send Story | - | Send Student | - |
| 5 | Send Last | Send Hours | Send Final | Send Close |

**Reference:**
- `checklists/plf/launch-day-execution.md`

### Step 8: Create Social Proof Updates

**Real-time proof templates:**
```
"X people have joined [PRODUCT] in the last X hours!"

"Just got this message from [NAME]: '[QUOTE]'"

"The momentum is incredible - X new members today alone."
```

### Step 9: Plan Live Events (Optional)

**If doing live events during cart:**
- Day 1: Launch celebration/walkthrough
- Day 3: Live Q&A
- Day 5: Final Q&A before close

### Step 10: Validate Sequence

**Run checklist:**
- `checklists/plf/open-cart-sequence.md`

**Quality checks:**
- [ ] Every email has single clear CTA
- [ ] Urgency builds progressively
- [ ] Social proof integrated
- [ ] Objections addressed
- [ ] Final day has 3+ emails
- [ ] Post-close email ready

---

## Deliverables

1. **Complete Email Sequence**
   - All emails for each day
   - Subject line variations
   - Sending times

2. **Subject Line Matrix**
   - 2-3 options per email
   - A/B test recommendations

3. **Social Proof Templates**
   - Real-time update copy
   - Testimonial integration

4. **Launch Day Schedule**
   - Hour-by-hour plan
   - Task assignments
   - Contingency notes

5. **Cart Close Sequence**
   - Final day emails
   - Post-close communication

---

## Success Criteria

- [ ] Email open rates: 25-35%
- [ ] Click rates: 3-8%
- [ ] Conversion: 2-10% of engaged list
- [ ] Final day: 30-50% of total sales
- [ ] No complaints about spam
- [ ] Cart closes on time (no extension)

---

## Email Timing Best Practices

**Day 1 (Launch):**
- 8-9 AM: Doors open
- 12-1 PM: Inside look
- 7-8 PM: Day recap

**Middle Days:**
- 8-10 AM: Main email
- 4-6 PM: Follow-up

**Final Day:**
- 8 AM: Last day
- 12 PM: Hours left
- 6 PM: Final call
- 9 PM: Closing (if close at 11:59)
- 11:30 PM: Last chance
- 12:05 AM: Closed

---

## Next Steps

After open cart sequence complete:
→ `tasks/plf/create-sales-page-plf.md` - Ensure page ready
→ `checklists/plf/launch-day-execution.md` - Day-of checklist
→ `tasks/plf/diagnose-failed-launch.md` - If needed post-launch

---

## References

### Templates
- `templates/plf/open-cart-day1-tmpl.md`
- `templates/plf/open-cart-final-tmpl.md`
- `templates/plf/email-subject-lines-tmpl.md`

### Checklists
- `checklists/plf/open-cart-sequence.md`
- `checklists/plf/launch-day-execution.md`

### Knowledge Bases
- `data/plf/copy-swipes-kb.yaml`
- `data/plf/email-benchmarks-kb.yaml`
- `data/plf/timeline-reference-kb.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Open Cart Sequence*


---

## Referência: references/plf-create-plc-sequence.md

# Task: Create PLC Sequence

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Prelaunch
> **Output**: Complete PLC1, PLC2, PLC3 content sequence

---

## Purpose

Design and create the three Pre-Launch Content pieces that form the heart of the Product Launch Formula. Each PLC serves a specific purpose and activates different mental triggers.

---

## Prerequisites

- [ ] Pre-Prelaunch completed (survey data available)
- [ ] Product/offer fully defined
- [ ] Avatar deeply understood
- [ ] Case studies/testimonials available (for PLC2)
- [ ] Launch dates confirmed

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. What are the top 3 insights from your survey?
2. What's your unique mechanism/method?
3. Do you have 3+ case studies/testimonials?
4. What's your content format preference? (video/text/audio)
5. What's your authority story?
6. What are the top 3 objections from your audience?
```

### Step 2: Design PLC Architecture

**Map the sequence:**

| PLC | Focus | Duration | Primary Trigger |
|-----|-------|----------|-----------------|
| PLC1 | The Opportunity | 15-30 min | Authority + Anticipation |
| PLC2 | The Transformation | 20-40 min | Social Proof + Reciprocity |
| PLC3 | The Ownership | 25-45 min | Anticipation + Community |

**Reference:**
- `data/plf/content-formats-kb.yaml` - Format recommendations
- `data/plf/copy-scripts-extracted.yaml` - Sequential copy language, pivots, and PLC scripting patterns
- `checklists/plf/plc-quality.md` - Quality standards

### Step 3: Create PLC1 - The Opportunity

**Use template:**
- `templates/plf/plc1-script-tmpl.md`

**Structure:**
1. Hook (30 seconds) - Grab attention
2. Authority/Origin story (2-3 min) - Why listen to you
3. Opportunity revealed (5-7 min) - What's possible
4. First teaching (7-10 min) - Real value
5. Anticipation for PLC2 (2-3 min) - Teaser

**Key elements:**
- [ ] Opens with curiosity/hook
- [ ] Establishes credibility without bragging
- [ ] Shows transformation possibility
- [ ] Delivers REAL value (not just teaser)
- [ ] Uses avatar's exact language
- [ ] Creates genuine anticipation for PLC2

### Step 4: Create PLC2 - The Transformation

**Use template:**
- `templates/plf/plc2-script-tmpl.md`

**Structure:**
1. Recap of PLC1 (1-2 min)
2. Main case study detailed (5-7 min)
3. Additional cases 2-3 (5 min)
4. Deeper teaching (7-10 min)
5. Objection handling (3-5 min)
6. Anticipation for PLC3 (2-3 min)

**Case study criteria:**
- [ ] Similar to target avatar
- [ ] Specific, measurable results
- [ ] Clear before/after
- [ ] Includes direct quote
- [ ] Timeline stated

**Reference:**
- `templates/plf/case-study-tmpl.md` - Case study structure

### Step 5: Create PLC3 - The Ownership

**Use template:**
- `templates/plf/plc3-script-tmpl.md`

**Structure:**
1. Recap of journey (2-3 min)
2. Ownership vision (5-7 min) - Future pacing
3. Day-in-the-life (3-5 min)
4. Final teaching (10-15 min)
5. Bridge to offer (5 min)
6. Product preview (3-5 min)
7. Scarcity/urgency setup (2-3 min)

**Ownership elements:**
- [ ] "Imagine waking up..." scenario
- [ ] Daily life transformation
- [ ] Emotional state change
- [ ] Sensory details
- [ ] Connection to their deeper goals

### Step 6: Create Email Sequences

**For each PLC, create:**
1. Announcement email (day of release)
2. Reminder email (day after)
3. "Did you see?" email (2 days after)

**Reference:**
- `data/plf/copy-swipes-kb.yaml` - Email templates
- `data/plf/email-benchmarks-kb.yaml` - Performance targets
- `data/plf/copy-scripts-extracted.yaml` - PLC phrasing, open loops, and sideways-sales-letter transitions

### Step 7: Map Mental Triggers

**Validate trigger activation across PLCs:**

| Trigger | PLC1 | PLC2 | PLC3 |
|---------|------|------|------|
| Authority | ✓ | ✓ | |
| Reciprocity | ✓ | ✓ | ✓ |
| Trust | ✓ | ✓ | ✓ |
| Anticipation | ✓ | ✓ | ✓ |
| Likability | ✓ | ✓ | |
| Community | ✓ | ✓ | ✓ |
| Social Proof | ✓ | ✓ | |
| Scarcity | | | ✓ |

**Reference:**
- `checklists/plf/mental-triggers-activation.md`

### Step 8: Quality Validation

**Run checklist for each PLC:**
- `checklists/plf/plc-quality.md`
- `data/plf/plc-criteria-extracted.yaml` - source criteria to justify quality calls and required beats

**Minimum scores:**
- PLC1: 18/23 (80%)
- PLC2: 30/37 (80%)
- PLC3: 23/29 (80%)

---

## Deliverables

1. **PLC1 Script/Outline**
   - Complete script or detailed outline
   - Email sequence (3 emails)
   - Quality score

2. **PLC2 Script/Outline**
   - Complete script with case studies
   - Email sequence (3 emails)
   - Quality score

3. **PLC3 Script/Outline**
   - Complete script with ownership vision
   - Email sequence (3 emails)
   - Quality score

4. **PLC Calendar**
   - Release dates
   - Email timing
   - Social media coordination

---

## Success Criteria

- [ ] Each PLC delivers standalone value
- [ ] Case studies are relatable and specific
- [ ] Mental triggers properly distributed
- [ ] Email open rates: 25%+ (warm list)
- [ ] Video/content completion rate: 60%+
- [ ] Comments/engagement increases each PLC

---

## Common Mistakes to Avoid

**PLC1:**
- All teaser, no substance
- Authority without vulnerability
- Generic advice

**PLC2:**
- Fake or vague testimonials
- Only extreme success cases
- Ignoring objections

**PLC3:**
- Hard sell too early
- Vague about what's included
- Fake scarcity

---

## Next Steps

After PLC sequence complete:
→ `tasks/plf/create-launch-stack.md` - Build offer stack
→ `tasks/plf/create-open-cart-sequence.md` - Cart emails
→ `tasks/plf/create-sales-page-plf.md` - Sales page

---

## References

### Templates
- `templates/plf/plc1-script-tmpl.md`
- `templates/plf/plc2-script-tmpl.md`
- `templates/plf/plc3-script-tmpl.md`
- `templates/plf/case-study-tmpl.md`

### Checklists
- `checklists/plf/plc-quality.md`
- `checklists/plf/mental-triggers-activation.md`

### Knowledge Bases
- `data/plf/content-formats-kb.yaml`
- `data/plf/copy-scripts-extracted.yaml`
- `data/plf/mental-triggers-kb.yaml`
- `data/plf/copy-swipes-kb.yaml`
- `data/plf/email-benchmarks-kb.yaml`
- `data/plf/plc-criteria-extracted.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - PLC Sequence*


---

## Referência: references/plf-create-preprelaunch.md

# Task: Create Pre-Prelaunch Campaign

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Pre-Prelaunch (Seed Phase)
> **Output**: Complete pre-prelaunch strategy and content

---

## Purpose

Create the Pre-Prelaunch phase of a Product Launch Formula campaign. This phase builds anticipation, gathers market intelligence, and warms up your list before the official prelaunch begins.

---

## Prerequisites

- [ ] Product/offer concept defined
- [ ] Email list exists (minimum 100 subscribers for Seed, 1000+ for Internal)
- [ ] Launch dates tentatively set
- [ ] Basic avatar understanding

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. What is your product/offer? (brief description)
2. What transformation does it provide?
3. Who is your ideal avatar?
4. What is your current list size?
5. When do you want to launch? (target date)
6. Have you launched before? (first launch or repeat?)
```

### Step 2: Define Pre-Prelaunch Strategy

**Based on inputs, determine:**
- Launch type (Seed, Internal, JV)
- Pre-prelaunch duration (7-14 days typical)
- Survey approach (email reply vs form)
- Teaser content strategy

**Reference:**
- `data/plf/timeline-reference-kb.yaml` - Timeline templates
- `checklists/plf/preprelaunch-readiness.md` - Readiness validation

### Step 3: Create Survey Campaign

**Generate:**
1. Survey email (curiosity-driven, invites responses)
2. Follow-up/reminder email
3. Analysis framework for responses

**Use template:**
- `templates/plf/preprelaunch-survey-tmpl.md`

**Survey structure:**
```
Question 1: What's your #1 challenge with [TOPIC]?
Question 2: What have you tried that didn't work?
Question 3: If you could wave a magic wand, what would change?
Question 4: What would achieving [RESULT] mean for you?
```

### Step 4: Create Teaser Content

**Generate sequence:**
- Day -14: "Something big coming" hint
- Day -10: Behind-the-scenes sneak peek
- Day -7: "Save the date" announcement
- Day -3: Final countdown teaser
- Day -1: "Tomorrow" anticipation email

**Mental triggers to activate:**
- Anticipation (primary)
- Curiosity
- Events (launch as event)

**Reference:**
- `data/plf/mental-triggers-kb.yaml`
- `data/plf/copy-swipes-kb.yaml`

### Step 5: Plan List Building (Optional)

**If building launch list:**
- Lead magnet strategy
- Opt-in page concept
- Traffic sources
- List growth targets

### Step 6: Create Content Calendar

**Output:**
- Day-by-day content plan
- Email schedule
- Social media tie-ins
- Key milestones

### Step 7: Validate Readiness

**Run checklist:**
- `checklists/plf/preprelaunch-readiness.md`

**Minimum requirements:**
- Product concept: 6/6 items
- Avatar: 4/4 items
- List: 5/5 items
- Tech: 10/10 items

---

## Deliverables

1. **Pre-Prelaunch Strategy Document**
   - Launch type recommendation
   - Timeline with key dates
   - Goals and success metrics

2. **Survey Campaign**
   - Primary survey email
   - Reminder email
   - Response analysis template

3. **Teaser Sequence**
   - 5-7 teaser emails
   - Social media posts (optional)
   - Content calendar

4. **Readiness Report**
   - Checklist status
   - Go/No-Go recommendation
   - Action items for gaps

---

## Success Criteria

- [ ] Survey generates 5-15% response rate
- [ ] Teaser emails achieve 25%+ open rate
- [ ] Anticipation built (replies, engagement)
- [ ] Market intelligence gathered
- [ ] List warmed for prelaunch

---

## Next Steps

After Pre-Prelaunch completes:
→ `tasks/plf/create-plc-sequence.md` - Create PLC content
→ `tasks/plf/map-mental-triggers.md` - Map triggers across launch

---

## References

### Templates
- `templates/plf/preprelaunch-survey-tmpl.md`

### Checklists
- `checklists/plf/preprelaunch-readiness.md`

### Knowledge Bases
- `data/plf/timeline-reference-kb.yaml`
- `data/plf/mental-triggers-kb.yaml`
- `data/plf/copy-swipes-kb.yaml`
- `data/plf/avatar-framework-kb.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Pre-Prelaunch*


---

## Referência: references/plf-create-sales-page-plf.md

# Task: Create PLF Sales Page

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Sales Page Creation
> **Output**: Complete sales page following PLF principles

---

## Purpose

Create a sales page that naturally follows from the PLC sequence. Unlike traditional long-form sales letters, PLF sales pages assume the prospect has already consumed prelaunch content and is primed to buy.

---

## PLF Sales Page Philosophy

> "Your sales page is NOT where you make the sale.
> The sale happens during the prelaunch.
> The sales page is where they complete the transaction." - Jeff Walker

**Key difference from traditional sales pages:**
- Shorter (prospect is already educated)
- Focused on offer details and logistics
- Heavy on social proof
- Clear next steps

---

## Prerequisites

- [ ] PLC sequence complete
- [ ] Launch stack finalized
- [ ] Testimonials ready
- [ ] Checkout integrated
- [ ] Template ready: `templates/plf/sales-page-blueprint-tmpl.md`
- [ ] Reference: `checklists/plf/sales-page-plf.md`

---

## Inputs Required

```yaml
product_name: ""
headline_promise: ""
core_transformation: ""
price: ""
payment_plan: ""
guarantee: ""
cart_close_date: ""
testimonials: []
modules: []
bonuses: []
urgency_elements: []
```

---

## Workflow

### Phase 1: Page Architecture

#### Step 1.1: PLF Sales Page Structure

Unlike traditional 10,000+ word sales letters:

```
1. Hero Section (Above the Fold)
   - Headline (transformation-focused)
   - Subheadline (who it's for)
   - CTA button
   - Social proof element

2. Video/Recap Section
   - Brief PLC recap video OR
   - Text summary of journey
   - "You're ready" positioning

3. Who This Is For
   - Ideal customer description
   - "This is for you if..."
   - "This is NOT for you if..."

4. The Offer Stack
   - Core product details
   - Module breakdown
   - Bonuses
   - Total value
   - Price

5. Testimonials/Proof
   - Video testimonials (if available)
   - Written testimonials
   - Case study summaries
   - Numbers/stats

6. Guarantee Section
   - Clear guarantee terms
   - How it works
   - Confidence statement

7. FAQ Section
   - Top questions
   - Objection handling

8. Final CTA
   - Urgency reminder
   - CTA button
   - Scarcity element

9. Footer
   - Support contact
   - Legal links
```

---

### Phase 2: Hero Section

#### Step 2.1: Headline Formula

**PLF Headline Approaches:**

**Transformation Focus:**
```
"Finally [ACHIEVE RESULT] Without [COMMON OBSTACLE]"

"The Complete System for [TRANSFORMATION] in [TIMEFRAME]"

"How to [RESULT] Even If [OBJECTION]"
```

**Ownership Focus:**
```
"Your Journey to [RESULT] Starts Here"

"Everything You Need to [ACHIEVE GOAL]"

"Welcome to [PRODUCT NAME]"
```

**Social Proof Focus:**
```
"Join [NUMBER] People Who Have [RESULT]"

"The Proven Method [NUMBER] People Trust"
```

#### Step 2.2: Subheadline

```
"For [AVATAR] who want to [RESULT]
without [PAIN/OBSTACLE]"

"The step-by-step system for going from
[CURRENT STATE] to [DESIRED STATE]"
```

#### Step 2.3: Hero CTA

```
Button: "Join [PRODUCT] Now"
Below: "Cart closes [DATE] at [TIME]"
```

---

### Phase 3: Offer Stack Section

#### Step 3.1: Stack Presentation

```markdown
## Everything You Get Inside [PRODUCT]

### The Core Program (Value: R$X,XXX)

✓ **Module 1: [NAME]**
  [One-line benefit]

✓ **Module 2: [NAME]**
  [One-line benefit]

✓ **Module 3: [NAME]**
  [One-line benefit]

✓ **Module 4: [NAME]**
  [One-line benefit]

---

### BONUS #1: [NAME] (Value: R$XXX)
[Brief description and benefit]

### BONUS #2: [NAME] (Value: R$XXX)
[Brief description and benefit]

### BONUS #3: [NAME] (Value: R$XXX)
[Brief description and benefit]

---

**Total Value: R$X,XXX**

**Your Investment Today: R$XXX**

[CTA BUTTON]

*Or X payments of R$XX*
```

---

### Phase 4: Social Proof Section

#### Step 4.1: Testimonial Display

**Video Testimonials (Best):**
- 3-5 video testimonials
- 60-120 seconds each
- Specific results mentioned
- Diverse perspectives

**Written Testimonials:**
```
"[SPECIFIC RESULT QUOTE]"

[Full Name], [Title/Location]
[Before context → After result]
```

#### Step 4.2: Testimonial Selection Criteria

- [ ] Specific, measurable results
- [ ] Relatable to target avatar
- [ ] Addresses common objections
- [ ] Includes name and photo
- [ ] Permission obtained

#### Step 4.3: Results Statistics

```
"[PRODUCT] by the Numbers"

✓ X students enrolled
✓ X% average [METRIC] improvement
✓ X countries represented
✓ X combined [RESULT]
```

---

### Phase 5: FAQ Section

#### Step 5.1: Essential FAQs

**Logistics:**
- How long do I have access?
- How is it delivered?
- When do I get access?
- What if I need help?

**Objections:**
- What if it doesn't work for me?
- I've tried other things before...
- I don't have time...
- Is this right for my situation?

**Purchase:**
- Is there a payment plan?
- What's your refund policy?
- Can I pay by [method]?
- Is it secure?

#### Step 5.2: FAQ Format

```
**Q: [Question]?**

[Answer in 2-4 sentences. Be helpful and honest.
Address the real concern behind the question.]
```

---

### Phase 6: Urgency & Scarcity Section

#### Step 6.1: Deadline Display

```
⚠️ IMPORTANT: Cart Closes [DATE] at [TIME] [TIMEZONE]

After that, [PRODUCT] will not be available.

[COUNTDOWN TIMER]

[CTA BUTTON]
```

#### Step 6.2: What They'll Miss

```
"When the cart closes, you'll lose access to:
✗ [CORE PRODUCT]
✗ [BONUS 1]
✗ [BONUS 2]
✗ [BONUS 3]
✗ The [SPECIAL OFFER] pricing"
```

---

### Phase 7: Technical Implementation

#### Step 7.1: Page Elements

**Required:**
- [ ] Responsive design
- [ ] Fast loading (<3 seconds)
- [ ] Working CTAs
- [ ] Checkout integration
- [ ] Analytics tracking

**Recommended:**
- [ ] Exit intent (optional)
- [ ] Live chat (optional)
- [ ] Countdown timer
- [ ] Trust badges
- [ ] Testimonial slider

#### Step 7.2: Mobile Optimization

- [ ] Readable on mobile
- [ ] Buttons tap-friendly
- [ ] Videos play correctly
- [ ] No horizontal scroll
- [ ] Forms work on mobile

#### Step 7.3: Checkout Integration

- [ ] CTA → Checkout seamless
- [ ] Payment options clear
- [ ] Guarantee visible
- [ ] Support contact available

---

### Phase 8: Validation

#### Step 8.1: Quality Checklist

Apply: `checklists/plf/sales-page-plf.md`

**Key checks:**
- [ ] Headline is transformation-focused
- [ ] Stack complete and valued
- [ ] Social proof sufficient
- [ ] FAQs address objections
- [ ] Guarantee clear
- [ ] Technical working
- [ ] Copy quality high

#### Step 8.2: Pre-Launch Testing

- [ ] All links work
- [ ] Checkout completes
- [ ] Mobile tested
- [ ] Multiple browsers
- [ ] Timer accurate
- [ ] Videos play

---

## Outputs

### Primary Output
```
outputs/launches/{product}/sales-page/
├── copy/
│   ├── headline-variations.md
│   ├── full-page-copy.md
│   ├── stack-section.md
│   ├── testimonials.md
│   └── faq-section.md
├── design/
│   ├── wireframe.md
│   └── visual-specs.md
├── technical/
│   ├── page-requirements.md
│   └── tracking-setup.md
└── validation-report.md
```

---

## PLF vs Traditional Sales Page

| Element | Traditional | PLF |
|---------|-------------|-----|
| Length | 10,000+ words | 2,000-4,000 words |
| Education | Heavy | Light (done in PLCs) |
| Proof | Extensive | Featured |
| Story | Long | Brief recap |
| Urgency | Created | Natural (cart close) |
| Purpose | Sell | Close |

---

## Jeff's Wisdom

> "By the time they get to your sales page, they should
> already be sold. The page is just the final details."

> "Make it easy. Clear headline, clear offer, clear CTA.
> Don't make them think."

> "Testimonials do the heavy lifting on your sales page.
> Let your customers sell for you."

---

## Common Mistakes

1. **Too long** - PLF sales pages are shorter
2. **Repeating PLC content** - They've already seen it
3. **Weak stack presentation** - Make value crystal clear
4. **Hidden guarantee** - Make it prominent
5. **Confusing CTAs** - One clear action
6. **Slow page** - Speed kills conversions

---

## Handoff

After sales page complete:
→ `tasks/plf/create-open-cart-sequence.md` (link in emails)
→ `checklists/plf/launch-day-execution.md` (final checks)

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Sales Page*


---

## Referência: references/plf-create-seed-launch.md

# Task: Create Seed Launch Plan

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Output**: Complete seed launch strategy for product validation

---

## Purpose

The Seed Launch is Jeff Walker's method for validating a product idea with a small audience (100-500 people) before creating the full product. You sell first, then build based on actual customer feedback.

---

## Why Seed Launch?

> "Why spend months building something that might not sell?
> With a Seed Launch, you get paid to create your product
> while your customers help you make it better." - Jeff Walker

**Benefits:**
- Validates demand before full development
- Generates revenue during creation
- Customer feedback shapes the product
- Builds testimonials for future launches
- Low risk, high learning

---

## Prerequisites

- [ ] Product concept defined
- [ ] Small list exists (100-500 minimum)
- [ ] Time available to deliver live
- [ ] Expertise to teach the topic
- [ ] Reference: `data/plf/timeline-reference-kb.yaml` (Seed Launch section)

---

## Inputs Required

```yaml
product_concept: ""
target_audience: ""
list_size: ""
delivery_format: "" # live calls, coaching, workshop
duration: "" # weeks
price_point: ""
max_participants: ""
available_hours_per_week: ""
```

---

## Seed Launch Characteristics

| Aspect | Seed Launch | Full Launch |
|--------|-------------|-------------|
| List Size | 100-500 | 1,000+ |
| Product | Concept/Outline | Fully built |
| Delivery | Live | Recorded + Live |
| Price | Lower (beta) | Full |
| Participants | 5-50 | Unlimited |
| Timeline | 2-3 weeks prep | 6-12 weeks prep |
| Risk | Very low | Higher |

---

## Workflow

### Phase 1: Concept Validation (Week 1)

#### Step 1.1: Define the Transformation
```
My [TYPE] will help [AVATAR] go from [CURRENT STATE] to [DESIRED STATE]
by teaching them [METHODOLOGY] over [TIMEFRAME].
```

#### Step 1.2: Create Beta Offer
```
Product Name: [NAME] - Beta/Founding Member Version
Format: [X] live calls over [X] weeks
Includes:
- Live teaching sessions
- Q&A and feedback
- Direct access to me
- [BONUS: Influence on final product]

Price: R$ [BETA PRICE] (vs R$ [FUTURE PRICE])
Spots: [X] maximum
```

#### Step 1.3: "Shot Across Bow" Email
```
Subject: Quick question + something I'm working on

Hey [Name],

I've been thinking about creating something for people
who want to [RESULT].

Before I build it, I wanted to ask you:

What's your #1 challenge when it comes to [TOPIC]?

Just hit reply and let me know. I read every response.

Thanks,
[Name]

P.S. I'm considering doing a small beta test with a
handful of people. Want me to let you know if I do?
```

---

### Phase 2: Mini Prelaunch (Week 2)

#### Step 2.1: Abbreviated PLC
For a Seed Launch, you don't need full PLCs. Instead:

**Content Piece 1 (Email/Post):**
- Share your story with the topic
- The insight that changed things
- Hint at something you're creating

**Content Piece 2 (Email/Post):**
- Teach one valuable thing
- Show your expertise
- Build anticipation for "something small"

**Content Piece 3 (Offer Email):**
- Reveal the beta program
- Limited spots (real)
- Special pricing (real)
- Start date

#### Step 2.2: Seed Launch Emails

**Email 1: The Invitation**
```
Subject: [X] spots for beta program

Hey [Name],

I mentioned I was thinking about creating something...

Well, I've decided to do a small beta test.

It's called [PRODUCT NAME], and it's for people who
want to [RESULT].

Here's what it is:
- [X] live sessions over [X] weeks
- Topic: [BRIEF DESCRIPTION]
- You'll get: [KEY OUTCOMES]

Because this is a beta, two things are different:

1. The price is R$ [BETA] instead of R$ [REGULAR]
2. I'm only taking [X] people

In exchange for the lower price, I'm asking for:
- Your feedback on the content
- A testimonial if you get results

If this sounds good, reply to this email with "I'M IN"
and I'll send you the details.

[Name]

P.S. First [X] people who reply get in. After that,
I'll start a waitlist for the full version.
```

**Email 2: Reminder**
```
Subject: [X] spots left

Quick update:

[X] people have already joined the [PRODUCT] beta.

That leaves [X] spots.

If you want in, reply "I'M IN" and I'll send the link.

Starting [DATE].

[Name]
```

**Email 3: Last Chance**
```
Subject: Closing enrollment tomorrow

This is the last call for the [PRODUCT] beta.

[X] spots remain. Enrollment closes tomorrow at [TIME].

Reply "I'M IN" if you want the details.

[Name]
```

---

### Phase 3: Delivery (Weeks 3-6+)

#### Step 3.1: Session Structure
```
Week 1: Foundation
- Core concept
- Framework overview
- First assignment

Week 2: [MODULE 2]
- Teaching
- Q&A
- Feedback collection

Week 3: [MODULE 3]
- Teaching
- Q&A
- Iterate based on feedback

Week 4: [MODULE 4]
- Teaching
- Results check
- Testimonial requests
```

#### Step 3.2: Feedback Collection
After each session, ask:
1. What was most valuable?
2. What was confusing?
3. What do you wish I covered more?
4. What questions do you still have?

#### Step 3.3: Documentation
Record everything:
- [ ] Session recordings
- [ ] Q&A logs
- [ ] Feedback received
- [ ] Improvements made
- [ ] Results achieved
- [ ] Testimonials gathered

---

### Phase 4: Post-Seed Analysis

#### Step 4.1: Results Documentation
```
Participants: [X]
Completion Rate: [X]%
Results Achieved:
- Participant 1: [RESULT]
- Participant 2: [RESULT]
- ...

Testimonials Collected: [X]
Video Testimonials: [X]
Case Studies Identified: [X]
```

#### Step 4.2: Product Refinement
Based on feedback:
- [ ] Content gaps identified
- [ ] Confusing sections clarified
- [ ] Additional resources needed
- [ ] Bonus ideas emerged
- [ ] Pricing validation

#### Step 4.3: Full Launch Preparation
What you now have:
- [ ] Validated product concept
- [ ] Tested content/curriculum
- [ ] Real testimonials
- [ ] Case studies
- [ ] Refined messaging
- [ ] Revenue to fund full launch

---

## Pricing Strategy

### Beta Pricing Framework
```
Future Full Price:     R$ _______
Beta Price:            R$ _______ (40-60% of full)
Value Perception:      "You're getting R$X for R$Y"
```

### Example Pricing
| Product Type | Full Price | Beta Price |
|--------------|------------|------------|
| Mini-Course | R$ 497 | R$ 197-297 |
| Course | R$ 997 | R$ 397-597 |
| Coaching | R$ 2,997 | R$ 997-1,497 |
| High-Ticket | R$ 5,000+ | R$ 2,000-3,000 |

---

## Success Metrics

### Minimum Viable Success
| Metric | Target |
|--------|--------|
| Enrollment | 5+ participants |
| Completion | >70% |
| Results | 3+ success stories |
| Testimonials | 3+ written, 1+ video |
| Revenue | Cover your time |

### Strong Success
| Metric | Target |
|--------|--------|
| Enrollment | 15+ participants |
| Completion | >80% |
| Results | 10+ success stories |
| Testimonials | 10+ written, 3+ video |
| Revenue | 10x your time value |

---

## Outputs

### Primary Output
```
outputs/launches/{product}/seed-launch/
├── concept-validation.md
├── beta-offer.md
├── email-sequence/
│   ├── 01-shot-across-bow.md
│   ├── 02-invitation.md
│   ├── 03-reminder.md
│   └── 04-last-chance.md
├── delivery-schedule.md
├── feedback-log.md
├── results-documentation.md
└── testimonials-collected.md
```

---

## Checklist Validation

Apply: `checklists/plf/seed-launch-checklist.md`

---

## Jeff's Wisdom

> "A Seed Launch is the lowest-risk way to start a product business.
> You validate before you create. You get paid to build.
> And your customers help you make it better."

> "Don't overthink it. You don't need a big list or a perfect product.
> You need a good idea, a small group of people, and the willingness
> to show up and deliver value."

> "The testimonials and case studies you get from a Seed Launch
> are worth their weight in gold. They make every future launch easier."

---

## Common Mistakes

1. **Waiting for "enough" people** - Start with 5 if that's what you have
2. **Overcomplicating the offer** - Keep it simple, deliver live
3. **Not collecting feedback** - This is the whole point
4. **Underpricing** - Beta doesn't mean free
5. **Not asking for testimonials** - Ask early, ask often
6. **Skipping to full launch** - Do 2-3 seed launches first

---

## Handoff

After successful seed launch:
→ `tasks/plf/create-plc-sequence.md` (use testimonials)
→ `tasks/plf/create-launch-stack.md` (refine offer)
→ `tasks/plf/create-live-launch.md` (scale up)

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Seed Launch*


---

## Referência: references/plf-diagnose-failed-launch.md

# Task: Diagnose Failed Launch

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Post-Launch Analysis
> **Output**: Complete launch diagnosis and improvement plan

---

## Purpose

Systematically analyze a launch that underperformed expectations to identify root causes and create an actionable improvement plan for the next launch.

---

## When to Use This Task

> "A 'failed' launch is just market feedback. The question isn't why it failed - it's what can you learn to make the next one better." - Jeff Walker

**Use this task when:**
- Revenue significantly below target
- Conversion rates below industry standards
- High refund rates
- Low engagement during prelaunch
- Any launch you want to improve

---

## Prerequisites

- [ ] Launch data available (emails, sales, traffic)
- [ ] Access to email analytics
- [ ] Sales/conversion data
- [ ] Honest assessment capability

---

## Workflow Steps

### Step 1: Gather Launch Data

**Collect metrics:**

```yaml
# Launch Overview
launch_name: ""
launch_dates: ""
product_price: ""
revenue_goal: ""
revenue_actual: ""
conversion_goal: ""
conversion_actual: ""

# List Metrics
list_size_at_launch: ""
engagement_rate: ""
unsubscribe_rate: ""

# Content Metrics
plc1_views: ""
plc2_views: ""
plc3_views: ""
sales_page_visits: ""
checkout_starts: ""
checkout_completions: ""

# Email Metrics (average)
open_rate: ""
click_rate: ""
```

### Step 2: Establish Benchmarks

**PLF benchmark ranges:**

| Metric | Poor | Average | Good | Excellent |
|--------|------|---------|------|-----------|
| Email Open Rate | <15% | 15-25% | 25-35% | >35% |
| Email Click Rate | <1% | 1-3% | 3-5% | >5% |
| PLC1 View Rate | <30% | 30-50% | 50-70% | >70% |
| PLC2 View Rate | <20% | 20-35% | 35-50% | >50% |
| PLC3 View Rate | <15% | 15-25% | 25-40% | >40% |
| Conversion Rate | <0.5% | 0.5-2% | 2-5% | >5% |
| Refund Rate | >10% | 5-10% | 2-5% | <2% |

**Reference:**
- `data/plf/email-benchmarks-kb.yaml`

### Step 3: Run Diagnostic Framework

**Analyze each area systematically:**

---

#### AREA 1: LIST QUALITY

**Symptoms of list problems:**
- Low open rates (<15%)
- High unsubscribe rates (>1%)
- Low engagement
- Mismatched avatar

**Diagnostic questions:**
- [ ] Was list warmed before launch?
- [ ] How was list built? (quality of lead magnet)
- [ ] When was last regular communication?
- [ ] Is list segmented for relevance?
- [ ] Are there engagement segments?

**Common issues:**
1. Cold list (no recent contact)
2. Wrong audience (lead magnet mismatch)
3. Bought/scraped list (no relationship)
4. List fatigue (over-emailed)
5. Poor deliverability

**Fix checklist:**
- [ ] Clean list (remove inactive >6 months)
- [ ] Re-engagement campaign before next launch
- [ ] Improve lead magnet alignment
- [ ] Regular value content between launches
- [ ] Check deliverability (SPF, DKIM, DMARC)

---

#### AREA 2: PRE-LAUNCH CONTENT

**Symptoms of PLC problems:**
- Low view rates
- Declining engagement PLC to PLC
- No comments/replies
- No "aha" feedback

**Diagnostic questions:**
- [ ] Did PLC1 deliver real value?
- [ ] Were case studies relatable (PLC2)?
- [ ] Did PLC3 create ownership feeling?
- [ ] Was anticipation built between PLCs?
- [ ] Did content match avatar's language?

**Common issues:**
1. Too much selling, not enough value
2. Case studies not relatable
3. Content too long or too short
4. Wrong format for audience
5. Poor anticipation building

**PLC quality checklist:**
- [ ] Review against `checklists/plf/plc-quality.md`
- [ ] Get external feedback on content
- [ ] Compare to successful PLF launches
- [ ] Test different formats (video vs text)

---

#### AREA 3: OFFER/STACK

**Symptoms of offer problems:**
- High page views, low conversion
- Price objections in replies
- "I'll wait" responses
- Cart abandonment

**Diagnostic questions:**
- [ ] Was transformation clear?
- [ ] Was value stack compelling?
- [ ] Did price feel justified?
- [ ] Were bonuses actually valuable?
- [ ] Was guarantee strong enough?

**Common issues:**
1. Price too high for value perception
2. Transformation unclear
3. Bonuses don't add real value
4. Weak or confusing guarantee
5. No urgency/scarcity

**Offer analysis:**
- [ ] Review against `checklists/plf/launch-stack-completeness.md`
- [ ] Survey non-buyers for feedback
- [ ] Compare to competitor offers
- [ ] Test different price points

---

#### AREA 4: SALES PAGE

**Symptoms of sales page problems:**
- Traffic but no sales
- High bounce rate
- Low time on page
- Checkout abandonment

**Diagnostic questions:**
- [ ] Does page load fast?
- [ ] Is headline compelling?
- [ ] Is offer clearly presented?
- [ ] Are testimonials prominent?
- [ ] Is CTA clear and visible?
- [ ] Does mobile work?

**Common issues:**
1. Slow loading
2. Weak headline
3. Confusing structure
4. Hidden price/CTA
5. Mobile issues
6. Too long (for PLF warm traffic)

**Sales page analysis:**
- [ ] Review against `checklists/plf/sales-page-plf.md`
- [ ] Heatmap analysis (if available)
- [ ] Mobile testing
- [ ] Speed test
- [ ] External copywriter review

---

#### AREA 5: EMAIL SEQUENCE

**Symptoms of email problems:**
- Declining opens through sequence
- Low clicks to content/page
- No replies or engagement
- Unsubscribes during launch

**Diagnostic questions:**
- [ ] Were subject lines compelling?
- [ ] Was frequency right? (not too many)
- [ ] Did emails have personality?
- [ ] Was there variety in approach?
- [ ] Did close cart sequence create urgency?

**Common issues:**
1. Boring/generic subject lines
2. Too many emails (fatigue)
3. Too few emails (missed)
4. All emails sound the same
5. Weak close cart sequence

**Email analysis:**
- [ ] Review open rates by email
- [ ] Identify drop-off points
- [ ] Compare to `data/plf/email-benchmarks-kb.yaml`
- [ ] Test new subject lines

---

#### AREA 6: TIMING & EXTERNAL FACTORS

**Symptoms:**
- Strong content but poor results
- Unusual engagement patterns
- Competitor activity

**Diagnostic questions:**
- [ ] Was timing right? (avoid holidays, events)
- [ ] Were there competitor launches?
- [ ] Any external events (economic, news)?
- [ ] Was cart open long enough?
- [ ] Was there enough pre-launch time?

**Common issues:**
1. Launched during holiday/vacation
2. Competitor launched same time
3. Economic downturn
4. Too short cart period
5. Rushed prelaunch

---

#### AREA 7: TECHNICAL ISSUES

**Symptoms:**
- Missing data
- Checkout problems
- Delivery issues
- Payment failures

**Diagnostic questions:**
- [ ] Did checkout work smoothly?
- [ ] Were there payment issues?
- [ ] Did emails deliver?
- [ ] Did links work?
- [ ] Was tracking accurate?

**Common issues:**
1. Checkout bugs
2. Payment gateway issues
3. Deliverability problems
4. Broken links
5. Tracking failures

### Step 4: Prioritize Issues

**Issue prioritization matrix:**

| Issue | Impact | Ease of Fix | Priority |
|-------|--------|-------------|----------|
| | High/Med/Low | High/Med/Low | 1-10 |
| | | | |
| | | | |

**Priority framework:**
- High Impact + Easy Fix = DO FIRST
- High Impact + Hard Fix = PLAN CAREFULLY
- Low Impact + Easy Fix = DO IF TIME
- Low Impact + Hard Fix = SKIP/DELEGATE

### Step 5: Create Improvement Plan

**For each priority issue:**

```markdown
## Issue: [ISSUE NAME]

**Current State:** [What's happening]
**Desired State:** [What should happen]
**Root Cause:** [Why it's happening]

**Action Items:**
1. [ ] [SPECIFIC ACTION]
2. [ ] [SPECIFIC ACTION]
3. [ ] [SPECIFIC ACTION]

**Success Metric:** [How we'll know it's fixed]
**Owner:** [Who's responsible]
**Timeline:** [When it will be done]
```

### Step 6: Document Lessons Learned

**Launch retrospective:**

```markdown
## What Worked
1. [POSITIVE 1]
2. [POSITIVE 2]
3. [POSITIVE 3]

## What Didn't Work
1. [NEGATIVE 1] → Fix: [SOLUTION]
2. [NEGATIVE 2] → Fix: [SOLUTION]
3. [NEGATIVE 3] → Fix: [SOLUTION]

## Surprises
1. [UNEXPECTED 1]
2. [UNEXPECTED 2]

## Next Launch Commitments
1. [ ] [COMMITMENT 1]
2. [ ] [COMMITMENT 2]
3. [ ] [COMMITMENT 3]
```

### Step 7: Plan Recovery (If Applicable)

**Post-launch recovery options:**

1. **Reopen (rare):**
   - Only with legitimate reason
   - "Extended due to [REAL REASON]"
   - Use sparingly

2. **Downsell:**
   - Offer smaller product
   - Payment plan option
   - Different format

3. **Waitlist:**
   - Collect for next launch
   - Nurture relationship
   - Give value meanwhile

4. **Evergreen test:**
   - Small traffic test
   - Validate with paid ads
   - Iterate before next live

---

## Deliverables

1. **Diagnostic Report**
   - All metrics documented
   - Benchmark comparisons
   - Issue identification

2. **Root Cause Analysis**
   - Each area assessed
   - Primary issues identified
   - Evidence documented

3. **Improvement Plan**
   - Prioritized action items
   - Owners and timelines
   - Success metrics

4. **Lessons Learned Document**
   - What worked/didn't
   - Commitments for next launch
   - Retrospective notes

---

## Success Criteria

- [ ] All metrics documented
- [ ] Root causes identified
- [ ] Action plan created
- [ ] Lessons documented
- [ ] Team aligned on improvements
- [ ] Timeline for fixes set

---

## Jeff's Perspective on "Failure"

> "I've never had a failed launch. I've had launches that taught me things. Every launch is market research - some just happens to make more money than others."

> "The biggest launches often follow the 'failures.' Because you learned so much that the next one couldn't help but be better."

> "Don't beat yourself up. Analyze, learn, improve. That's all any of us can do."

---

## Common Root Causes

| Symptom | Often Caused By |
|---------|-----------------|
| Low opens | Cold list, bad timing, weak subjects |
| Low clicks | Content not matching interest |
| Low PLC views | Wrong format, too long, not enough value |
| Low conversion | Wrong audience, wrong offer, wrong price |
| High refunds | Over-promised, wrong expectations |

---

## Next Steps

After diagnosis complete:
→ Implement priority fixes
→ `tasks/plf/create-preprelaunch.md` - Plan next launch
→ Schedule relaunch with improvements

---

## References

### Checklists
- `checklists/plf/post-launch-analysis.md`
- `checklists/plf/plc-quality.md`
- `checklists/plf/sales-page-plf.md`
- `checklists/plf/launch-stack-completeness.md`

### Knowledge Bases
- `data/plf/email-benchmarks-kb.yaml`
- `data/plf/contingency-framework-kb.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Launch Diagnosis*


---

## Referência: references/plf-evaluate-cpl.md

# Task: Evaluate CPL (Pre-Launch Content)

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Quality Assurance
> **Output**: Complete CPL evaluation with scores and improvement recommendations

---

## CRITICAL: Load Infrastructure First

**ANTES DE AVALIAR, CARREGAR:**

```yaml
# 1. Execution Checklist (MANDATORY)
execution_checklist: "squads/copy/checklists/plf/cpl-evaluation-execution-checklist.md"

# 2. Production Aid for this CPL (MANDATORY)
production_aids:
  1: "squads/copy/checklists/plf/plc1-complete-production-aid.md"  # ~590 lines
  2: "squads/copy/checklists/plf/plc2-complete-production-aid.md"  # ~827 lines
  3: "squads/copy/checklists/plf/plc3-complete-production-aid.md"  # ~943 lines
  4: "squads/copy/checklists/plf/sales-video-complete-production-aid.md"  # ~1126 lines

# 3. Templates for output
templates:
  report: "squads/copy/templates/plf/cpl-evaluation-report-tmpl.md"
  rubric: "squads/copy/templates/plf/rubric-scores-tmpl.yaml"
  beats: "squads/copy/templates/plf/beat-analysis-tmpl.yaml"

# 4. Workflow reference
workflow: "squads/copy/workflows/wf-evaluate-cpl.yaml"

# 5. Extracted PLF source layers (MANDATORY SUPPORT)
source_layers:
  scripts: "squads/copy/data/plf/copy-scripts-extracted.yaml"
  criteria: "squads/copy/data/plf/plc-criteria-extracted.yaml"
```

**WHY THIS MATTERS:**
- Production Aid tem 10 seções com critérios completos
- Rubric tem 10 dimensões com pesos específicos
- Top 15 Mistakes tem ranking de dano (3x, 2x, 1x)
- Template tem 350 linhas de estrutura
- Extracted source layers preserve Jeff Walker phrasing, PLC sequencing, and criteria language that the aids alone do not fully expose

**Sem carregar = avaliação improvisada = resultado inconsistente.**

---

## Purpose

Avaliar um CPL (Conteúdo de Pré-Lançamento) de forma completa usando os Production Aids do PLF para identificar pontos fortes, gaps e oportunidades de melhoria.

---

## Prerequisites

- [ ] **Production Aid carregado COMPLETO** (ver seção acima)
- [ ] **Execution Checklist carregado**
- [ ] Arquivo de transcrição do CPL disponível
- [ ] Conhecimento de qual número é o CPL (1, 2, 3 ou 4)
- [ ] Contexto do lançamento (produto, criador, avatar)

---

## Inputs Required

```yaml
cpl_file: "" # Caminho completo do arquivo
cpl_number: "" # 1, 2, 3 ou 4
product_name: "" # Nome do produto sendo lançado
creator_name: "" # Nome do expert/criador
avatar_description: "" # Breve descrição do público-alvo
```

---

## Workflow

### FASE 1: Leitura Completa do CPL

**CRÍTICO: Ler o arquivo COMPLETO antes de analisar.**

Se o arquivo for grande:
1. Ler em partes de 500 linhas
2. Processar cada parte
3. Consolidar entendimento antes de avaliar

```
Parte 1: Linhas 1-500
Parte 2: Linhas 501-1000
Parte 3: Linhas 1001-1500
... continuar até o fim
```

### FASE 2: Identificação de Estrutura

**Para CPL1 (The Opportunity):**
```
[ ] HOOK - Primeiros 30 segundos
    - Onde começa: linha ___
    - O que fala: ___
    - Score (1-10): ___

[ ] AUTORIDADE/ORIGIN STORY - 2-3 minutos
    - Onde começa: linha ___
    - História contada: ___
    - Vulnerabilidade presente? ___
    - Score (1-10): ___

[ ] OPORTUNIDADE REVELADA - 5-7 minutos
    - Onde começa: linha ___
    - Qual oportunidade: ___
    - Clareza (1-10): ___

[ ] PRIMEIRO ENSINO - 7-10 minutos
    - Onde começa: linha ___
    - O que ensina: ___
    - Acionável? ___
    - Score (1-10): ___

[ ] ANTECIPAÇÃO CPL2 - 2-3 minutos
    - Onde começa: linha ___
    - O que teasea: ___
    - Cria curiosidade? ___
    - Score (1-10): ___

[ ] CTA FINAL
    - Qual CTA: ___
    - Claro? ___
```

**Para CPL2 (The Transformation):**
```
[ ] RECAP CPL1 - 1-2 minutos
[ ] CASE STUDY PRINCIPAL - 5-7 minutos
[ ] CASES ADICIONAIS (2-3) - 5 minutos
[ ] ENSINO PROFUNDO - 7-10 minutos
[ ] TRATAMENTO DE OBJEÇÕES - 3-5 minutos
[ ] ANTECIPAÇÃO CPL3 - 2-3 minutos
[ ] CTA FINAL
```

**Para CPL3 (The Ownership):**
```
[ ] RECAP DA JORNADA - 2-3 minutos
[ ] VISÃO DE OWNERSHIP - 5-7 minutos
[ ] DAY-IN-THE-LIFE - 3-5 minutos
[ ] ENSINO FINAL - 10-15 minutos
[ ] BRIDGE PARA OFERTA - 5 minutos
[ ] PREVIEW DO PRODUTO - 3-5 minutos
[ ] SETUP ESCASSEZ - 2-3 minutos
[ ] CTA E FECHAMENTO
```

**Para CPL4 (Pivot to Offer - Challenge Format):**
```
[ ] RECAP DE TUDO APRENDIDO
[ ] POSICIONAMENTO DO PRODUTO
[ ] ENSINO FINAL (vendas/implementação)
[ ] MECANISMO DE CONVERSÃO (quiz, prova)
[ ] ANTECIPAÇÃO ABERTURA CARRINHO
[ ] SETUP DE ESCASSEZ
[ ] CTA FINAL
```

### FASE 3: Avaliação dos 9 Mental Triggers

Para cada trigger, documentar:
1. Está presente? (Sim/Não/Parcial)
2. ONDE exatamente aparece (citar linha e trecho)
3. Intensidade (1-10)
4. Como poderia ser mais forte

```
TRIGGER 1: AUTHORITY
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___

TRIGGER 2: RECIPROCITY
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___

TRIGGER 3: TRUST
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___

TRIGGER 4: ANTICIPATION
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___

TRIGGER 5: LIKABILITY
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___

TRIGGER 6: EVENTS
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___

TRIGGER 7: COMMUNITY
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___

TRIGGER 8: SOCIAL PROOF
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___

TRIGGER 9: SCARCITY
- Presente: ___
- Onde: "___" (linha ___)
- Intensidade: ___/10
- Para melhorar: ___
```

### FASE 4: Extração de Frameworks

Listar todos os:
- Métodos com nome (ex: Método RETINA, Plano F)
- Acrônimos explicados
- Frameworks com passos numerados
- Analogias memoráveis
- Frases de efeito repetidas

### FASE 5: Análise de Storytelling

```
ORIGIN STORY:
- Presente? ___
- Momento de vulnerabilidade? ___
- Virada/transformação clara? ___
- Conexão emocional? ___
- Citação marcante: "___"

CASE STUDIES:
- Quantidade: ___
- Específicos (nome, cidade, números)? ___
- Relatáveis com avatar? ___
- Before/after claro? ___
- Melhor case: ___

ANALOGIAS:
- Quais usadas: ___
- Mais efetiva: ___
```

### FASE 6: Identificação de Gaps

**Gaps de Estrutura:**
- [ ] ___

**Gaps de Triggers:**
- [ ] ___

**Gaps de Conteúdo:**
- [ ] ___

**Gaps de Transição:**
- [ ] ___

**Objeções Não Tratadas:**
- [ ] ___

### FASE 7: Cálculo de Score

```
ESTRUTURA (25 pontos)
- Hook: ___/5
- Desenvolvimento: ___/10
- Transição: ___/5
- CTA: ___/5
SUBTOTAL: ___/25

MENTAL TRIGGERS (45 pontos - 5 por trigger)
- Authority: ___/5
- Reciprocity: ___/5
- Trust: ___/5
- Anticipation: ___/5
- Likability: ___/5
- Events: ___/5
- Community: ___/5
- Social Proof: ___/5
- Scarcity: ___/5
SUBTOTAL: ___/45

QUALIDADE DE CONTEÚDO (15 pontos)
- Valor entregue: ___/5
- Clareza: ___/5
- Aplicabilidade: ___/5
SUBTOTAL: ___/15

STORYTELLING (10 pontos)
- Origin story: ___/3
- Cases: ___/4
- Analogias: ___/3
SUBTOTAL: ___/10

TRANSIÇÃO (5 pontos)
- Antecipação próximo CPL: ___/5
SUBTOTAL: ___/5

SCORE TOTAL: ___/100
```

**Classificação:**
- 90-100: Excelente - Pronto para lançamento
- 80-89: Bom - Pequenos ajustes necessários
- 70-79: Adequado - Melhorias recomendadas
- 60-69: Precisa trabalho - Gaps significativos
- <60: Requer revisão completa

---

## Output Format

**FORMATO: Texto corrido para WhatsApp (SEM MARKDOWN)**

```
AVALIAÇÃO CPL[X] - [NOME DO PRODUTO]
Criador: [NOME]
Score: XX/100 - [CLASSIFICAÇÃO]

---

RESUMO EXECUTIVO
[5 linhas resumindo a avaliação geral]

---

ESTRUTURA (XX/25)
[O que está bom]
[O que falta]

---

MENTAL TRIGGERS (XX/45)

Authority (X/5): [status]
[onde aparece ou o que falta]

Reciprocity (X/5): [status]
[onde aparece ou o que falta]

Trust (X/5): [status]
[onde aparece ou o que falta]

Anticipation (X/5): [status]
[onde aparece ou o que falta]

Likability (X/5): [status]
[onde aparece ou o que falta]

Events (X/5): [status]
[onde aparece ou o que falta]

Community (X/5): [status]
[onde aparece ou o que falta]

Social Proof (X/5): [status]
[onde aparece ou o que falta]

Scarcity (X/5): [status]
[onde aparece ou o que falta]

---

FRAMEWORKS IDENTIFICADOS
[lista]

---

STORYTELLING (XX/10)
[análise]

---

TOP 5 PONTOS FORTES
1. [ponto] - "[citação]"
2. [ponto] - "[citação]"
3. [ponto] - "[citação]"
4. [ponto] - "[citação]"
5. [ponto] - "[citação]"

---

TOP 10 PONTOS DE MELHORIA

1. [GAP]
Como melhorar: [sugestão específica]

2. [GAP]
Como melhorar: [sugestão específica]

[... até 10]

---

PRIORIDADES (o que fazer primeiro)
1. [ação prioritária]
2. [ação prioritária]
3. [ação prioritária]
```

---

## References

### Critical Files (Load First)
- `checklists/plf/cpl-evaluation-execution-checklist.md` — **MANDATORY before evaluating**
- `workflows/wf-evaluate-cpl.yaml` — Complete workflow with 6 phases

### Production Aids (Load Based on CPL#)
- `checklists/plf/plc1-complete-production-aid.md` — 590 lines, 10 sections
- `checklists/plf/plc2-complete-production-aid.md` — 827 lines, 10 sections
- `checklists/plf/plc3-complete-production-aid.md` — 943 lines, 10 sections
- `checklists/plf/sales-video-complete-production-aid.md` — 1126 lines

### Output Templates
- `templates/plf/cpl-evaluation-report-tmpl.md` — 350 lines
- `templates/plf/rubric-scores-tmpl.yaml` — 10 dimensions with weights
- `templates/plf/beat-analysis-tmpl.yaml` — Beat-by-beat structure

### Quick Checklists (For Reference)
- `checklists/plf/cpl1-opportunity-checklist.md`
- `checklists/plf/cpl2-transformation-checklist.md`
- `checklists/plf/cpl3-ownership-checklist.md`
- `checklists/plf/cpl4-enrollment-checklist.md`

### Related Tasks
- `tasks/plf/diagnose-failed-launch.md`
- `tasks/plf/map-mental-triggers.md`
- `tasks/plf/create-plc-sequence.md`

---

*Task Version: 2.0*
*Updated: 2026-02-01 — Added infrastructure loading requirements*
*Framework: Product Launch Formula - CPL Evaluation*


---

## Referência: references/plf-map-mental-triggers.md

# Task: Map Mental Triggers

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Strategy & Optimization
> **Output**: Complete mental trigger mapping across launch sequence

---

## Purpose

Systematically map and activate the 9 Mental Triggers from PLF across your entire launch sequence. This ensures maximum psychological impact and conversion while maintaining ethical persuasion.

---

## The 9 Mental Triggers

Jeff Walker's 9 triggers that drive human behavior and purchasing decisions:

| # | Trigger | Core Principle |
|---|---------|----------------|
| 1 | Authority | People follow experts |
| 2 | Reciprocity | Give first, receive later |
| 3 | Trust | Earned through consistency |
| 4 | Anticipation | Waiting increases desire |
| 5 | Likability | We buy from people we like |
| 6 | Events | Memorable moments drive action |
| 7 | Community | Belonging influences behavior |
| 8 | Social Proof | Others' actions guide ours |
| 9 | Scarcity | Limited availability increases value |

---

## Prerequisites

- [ ] Launch sequence planned
- [ ] PLC content outlined
- [ ] Understanding of avatar psychology
- [ ] Reference: `data/plf/mental-triggers-kb.yaml`

---

## Inputs Required

```yaml
launch_type: "" # Seed, Internal, JV, Evergreen
sequence_length: "" # days
primary_avatar_fears: []
primary_avatar_desires: []
authority_credentials: []
social_proof_available: []
scarcity_type: "" # time, quantity, price
```

---

## Workflow

### Phase 1: Trigger Audit

#### Step 1.1: Current Trigger Inventory

For each trigger, assess current assets:

**Authority:**
- [ ] Credentials/certifications
- [ ] Years of experience
- [ ] Notable achievements
- [ ] Media appearances
- [ ] Books/publications
- [ ] Student results

**Reciprocity:**
- [ ] Free training content
- [ ] Valuable lead magnet
- [ ] PLCs with real value
- [ ] Free tools/templates
- [ ] Helpful responses

**Trust:**
- [ ] Transparency about journey
- [ ] Honest about limitations
- [ ] Consistent communication
- [ ] Kept past promises
- [ ] Vulnerability shared

**Anticipation:**
- [ ] Pre-prelaunch teasers
- [ ] PLC release schedule
- [ ] Cart open countdown
- [ ] "Coming soon" content
- [ ] Mystery/curiosity hooks

**Likability:**
- [ ] Personal stories shared
- [ ] Humor appropriate for audience
- [ ] Genuine personality shown
- [ ] Connection to avatar's struggles
- [ ] Responsive to audience

**Events:**
- [ ] Launch date announced
- [ ] Live elements planned
- [ ] Special moments created
- [ ] Deadlines established
- [ ] Celebration planned

**Community:**
- [ ] Group/community exists
- [ ] Engagement encouraged
- [ ] Shared identity created
- [ ] Member spotlights
- [ ] "Us vs. them" positioning

**Social Proof:**
- [ ] Testimonials collected
- [ ] Case studies documented
- [ ] Numbers available
- [ ] Results screenshots
- [ ] Media mentions

**Scarcity:**
- [ ] Real deadline exists
- [ ] Limited spots (if applicable)
- [ ] Price increase planned
- [ ] Bonus removal scheduled
- [ ] Clear reason for scarcity

---

### Phase 2: Trigger Mapping Grid

#### Step 2.1: Map Triggers to Launch Phases

| Phase | Primary Triggers | Secondary Triggers |
|-------|------------------|-------------------|
| Pre-Prelaunch | Anticipation, Curiosity | Community |
| PLC1 | Authority, Reciprocity | Trust, Anticipation |
| PLC2 | Social Proof, Trust | Reciprocity, Community |
| PLC3 | Anticipation, Events | Authority, Likability |
| Cart Open | Events, Scarcity | Social Proof |
| Mid-Cart | Social Proof, Trust | Reciprocity |
| Cart Close | Scarcity, Events | Authority |

#### Step 2.2: Detailed Phase Mapping

**Pre-Prelaunch Trigger Plan:**
```
Anticipation:
- Teaser emails with hints
- "Something big coming" posts
- Save the date announcements

Curiosity:
- Don't reveal too much
- Open loops in content
- Questions without answers

Community:
- Start conversations
- Build engagement
- Create shared anticipation
```

**PLC1 Trigger Plan:**
```
Authority:
- Share credentials naturally
- Show results achieved
- Demonstrate expertise

Reciprocity:
- Deliver real value
- Give actionable content
- Over-deliver on promises

Trust:
- Share origin story honestly
- Admit past struggles
- Be transparent about journey

Anticipation:
- Tease PLC2 content
- Create curiosity for more
- "Wait until you see..."
```

**PLC2 Trigger Plan:**
```
Social Proof:
- Feature 2-3 case studies
- Share specific results
- Include diverse examples

Trust:
- Address objections honestly
- Acknowledge limitations
- Show vulnerability

Reciprocity:
- More valuable teaching
- Additional resources
- Answer real questions

Community:
- Share audience comments
- Build shared identity
- "You're not alone" messaging
```

**PLC3 Trigger Plan:**
```
Anticipation:
- Build to offer reveal
- Create "finally" moment
- Peak excitement

Events:
- Make it feel special
- "History in the making"
- Memorable moment

Authority:
- Complete framework revealed
- Demonstrate mastery
- Position as definitive solution

Likability:
- Personal appeal
- Genuine excitement
- Emotional connection
```

**Open Cart Trigger Plan:**
```
Events:
- "Doors are open!"
- Celebration energy
- Momentum updates

Scarcity:
- Cart close date clear
- Fast action bonus
- Limited time framing

Social Proof:
- Real-time updates
- New buyer announcements
- Testimonial features
```

**Cart Close Trigger Plan:**
```
Scarcity:
- Final hours messaging
- "Last chance" positioning
- Deadline countdown

Events:
- "The moment of decision"
- "Before it's too late"
- Ceremonial close

Authority:
- Final reassurance
- "I've got you" messaging
- Confidence in product
```

---

### Phase 3: Content Integration

#### Step 3.1: Trigger Language Bank

**Authority Phrases:**
- "In my X years of..."
- "Having worked with X people..."
- "What I've discovered is..."
- "The research shows..."

**Reciprocity Phrases:**
- "I want to give you..."
- "Here's something valuable..."
- "No strings attached..."
- "This alone is worth..."

**Trust Phrases:**
- "I'll be honest with you..."
- "The truth is..."
- "I struggled with this too..."
- "I'm not going to sugarcoat..."

**Anticipation Phrases:**
- "What's coming next will..."
- "Wait until you see..."
- "I can't wait to show you..."
- "Mark your calendar..."

**Likability Phrases:**
- "Between you and me..."
- "I know how you feel..."
- "We're in this together..."
- "Just like you..."

**Events Phrases:**
- "This is the moment..."
- "History is being made..."
- "You'll remember this day..."
- "It's finally here..."

**Community Phrases:**
- "You're not alone..."
- "Join the tribe..."
- "We're all in this together..."
- "Part of something bigger..."

**Social Proof Phrases:**
- "X people have already..."
- "Here's what [Name] achieved..."
- "The results speak for themselves..."
- "Join thousands who..."

**Scarcity Phrases:**
- "Only X spots remain..."
- "This ends at midnight..."
- "Once it's gone, it's gone..."
- "Don't miss this..."

---

### Phase 4: Validation

#### Step 4.1: Trigger Distribution Check

Each trigger should appear at least twice across the sequence:

| Trigger | Pre-Pre | PLC1 | PLC2 | PLC3 | Open | Close | Total |
|---------|---------|------|------|------|------|-------|-------|
| Authority | | ✓ | ✓ | ✓ | | ✓ | 4 |
| Reciprocity | | ✓ | ✓ | ✓ | | | 3 |
| Trust | ✓ | ✓ | ✓ | | ✓ | | 4 |
| Anticipation | ✓ | ✓ | ✓ | ✓ | | | 4 |
| Likability | | ✓ | ✓ | ✓ | | | 3 |
| Events | | | | ✓ | ✓ | ✓ | 3 |
| Community | ✓ | | ✓ | | | | 2 |
| Social Proof | | ✓ | ✓ | | ✓ | ✓ | 4 |
| Scarcity | | | | ✓ | ✓ | ✓ | 3 |

#### Step 4.2: Balance Check

- No single trigger dominates
- Scarcity only at end
- Authority established early
- Social proof throughout
- Reciprocity before asking

#### Step 4.3: Authenticity Check

For each trigger activation:
- [ ] Is it genuine?
- [ ] Does it feel natural?
- [ ] Would I feel manipulated?
- [ ] Is it necessary?

---

## Outputs

### Primary Output
```
outputs/launches/{product}/mental-triggers/
├── trigger-audit.yaml
├── phase-mapping.md
├── language-bank.md
├── distribution-grid.md
├── integration-notes.md
└── validation-report.md
```

---

## Checklist Validation

Apply: `checklists/plf/mental-triggers-activation.md`

---

## Jeff's Wisdom

> "Mental triggers aren't manipulation. They're the language
> of human psychology. You're just communicating in ways
> that resonate with how people actually make decisions."

> "The trigger that matters most is Reciprocity.
> Give first, give more, give genuinely.
> Everything else follows."

> "Scarcity without substance is manipulation.
> Scarcity WITH substance is helping people decide."

---

## Ethical Guidelines

**DO:**
- Use triggers to highlight genuine value
- Ensure scarcity is real
- Build authentic authority
- Create true community
- Deliver real reciprocity

**DON'T:**
- Manufacture fake scarcity
- Exaggerate credentials
- Fabricate testimonials
- Manipulate emotions without value
- Use fear without hope

---

## Common Mistakes

1. **Over-relying on scarcity** - Build value first
2. **Forgetting reciprocity** - Give before you ask
3. **Fake social proof** - Only use real testimonials
4. **Rushed trust** - Trust takes time to build
5. **Missing community** - People buy into tribes
6. **Weak authority** - Establish expertise early

---

## Handoff

After trigger mapping:
→ Apply to `tasks/plf/create-plc-sequence.md`
→ Apply to `tasks/plf/create-open-cart-sequence.md`
→ Review with `checklists/plf/mental-triggers-activation.md`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Mental Triggers*


---

## Referência: references/plf-plan-paid-traffic.md

# Task: Plan Paid Traffic Strategy

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Traffic & List Building
> **Output**: Complete paid traffic strategy for PLF launch

---

## Purpose

Create a paid traffic strategy that supports your Product Launch Formula launch. Paid traffic accelerates list building and amplifies your launch when done strategically.

---

## Paid Traffic in PLF Context

> "Paid traffic is gasoline on your fire. But you need a fire first. Don't spend money driving traffic until you have a proven conversion process." - Jeff Walker

**When to use paid traffic:**
- After at least one successful organic launch
- With proven opt-in and conversion rates
- When you can afford to test and learn
- To scale a working system

**When NOT to use paid traffic:**
- First launch (do organic first)
- Untested offer
- No tracking in place
- Cash-strapped

---

## Prerequisites

- [ ] At least one internal launch completed
- [ ] Conversion data from previous launch
- [ ] Budget allocated for ads
- [ ] Tracking pixels installed
- [ ] Landing pages ready

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. Have you done a launch before? Conversion rate?
2. What's your total ad budget?
3. What platforms are you considering? (Facebook, Google, etc.)
4. What's your cost per lead target?
5. Do you have existing pixel data?
6. What's your product price?
7. What lead magnet will you use?
```

### Step 2: Calculate Traffic Economics

**Key metrics to know:**

```yaml
# From previous launch
list_size: ""
conversion_rate: ""
average_order_value: ""
earnings_per_subscriber: ""

# Traffic targets
target_new_subscribers: ""
cost_per_lead_target: ""
total_traffic_budget: ""

# Calculations
max_cpl_for_profit: "" # (conversion_rate × aov) / 3
```

**Example calculation:**
```
Previous conversion: 2%
Average order: R$997
Revenue per 100 subs: R$1,994
Max CPL for 3x ROI: R$6.65

If budget is R$5,000:
Expected leads: 750 (at R$6.65 CPL)
Expected revenue: R$14,955
ROI: 3x
```

### Step 3: Select Traffic Platforms

**Platform comparison:**

| Platform | Best For | Typical CPL | Learning Curve |
|----------|----------|-------------|----------------|
| Facebook/Meta | B2C, broad audiences | R$3-15 | Medium |
| Google Search | High-intent | R$10-30 | Medium-High |
| YouTube | Educational content | R$5-20 | High |
| LinkedIn | B2B, professional | R$20-50 | Medium |
| TikTok | Younger audiences | R$2-10 | Medium |

**Selection criteria:**
- Where is your avatar?
- What's your budget?
- What content do you have?
- What's your experience level?

**Reference:**
- `data/plf/platform-comparison-kb.yaml`

### Step 4: Define Campaign Structure

**PLF traffic funnel:**

```
COLD TRAFFIC
    ↓
Opt-in Page (Lead Magnet or PLC Access)
    ↓
Thank You Page + PLC1
    ↓
Email Sequence → PLCs → Sales Page
    ↓
PURCHASE
```

**Campaign types needed:**

1. **List Building Campaign (Primary)**
   - Objective: Conversions (leads)
   - Landing: Opt-in page
   - Budget: 70% of total

2. **Retargeting Campaign**
   - Objective: Conversions
   - Audience: Page visitors, email list
   - Budget: 20% of total

3. **Lookalike Campaign**
   - Objective: Conversions (leads)
   - Audience: Lookalike of buyers/engagers
   - Budget: 10% of total

### Step 5: Create Audience Strategy

**Audience layers:**

| Layer | Audience | Temperature | Use For |
|-------|----------|-------------|---------|
| 1 | Lookalike buyers | Warmest | List building |
| 2 | Lookalike subscribers | Warm | List building |
| 3 | Interest targeting | Cold | Testing |
| 4 | Page visitors | Hot | Retargeting |
| 5 | Email list | Hot | Retargeting |

**Custom audiences to create:**
- [ ] Email list upload (customers)
- [ ] Email list upload (subscribers)
- [ ] Website visitors (all pages)
- [ ] Sales page visitors
- [ ] PLC viewers (if trackable)
- [ ] Video viewers (if applicable)

**Lookalike audiences:**
- [ ] 1% lookalike of buyers
- [ ] 1% lookalike of subscribers
- [ ] 1-2% lookalike of engagers

### Step 6: Plan Creative Strategy

**Ad types for PLF:**

1. **Lead Gen Ads**
   - Focus on lead magnet value
   - Clear transformation promise
   - Strong CTA to opt-in

2. **Content Ads**
   - Promote PLC content
   - Educational angle
   - Build authority

3. **Retargeting Ads**
   - Remind to watch PLCs
   - Cart open reminders
   - Urgency-focused

**Creative variations to test:**
- [ ] Image vs video
- [ ] Long copy vs short copy
- [ ] Direct response vs content
- [ ] Different hooks/angles
- [ ] Various formats (carousel, single, etc.)

**Example ad angles:**
```
Angle 1: Problem-focused
"Struggling with [PROBLEM]? Here's why..."

Angle 2: Curiosity
"The [X] method that [RESULT] (most people miss this)"

Angle 3: Social proof
"How [X] people [ACHIEVED RESULT] with [METHOD]"

Angle 4: Direct
"Free training: [SPECIFIC RESULT]"
```

### Step 7: Set Budget Allocation

**Budget phasing:**

| Phase | Duration | Budget % | Focus |
|-------|----------|----------|-------|
| Testing | 2-4 weeks | 20% | Find winners |
| Pre-Launch | 2 weeks | 30% | Build list |
| Launch Week | 1 week | 40% | Maximum push |
| Retargeting | Ongoing | 10% | Cart recovery |

**Daily budget calculation:**
```
Total budget: R$10,000
Testing (20%): R$2,000 ÷ 14 days = R$143/day
Pre-Launch (30%): R$3,000 ÷ 14 days = R$214/day
Launch (40%): R$4,000 ÷ 7 days = R$571/day
Retargeting (10%): R$1,000 ÷ ongoing
```

### Step 8: Plan Launch Week Traffic

**Cart open strategy:**

| Day | Campaigns Active | Budget Allocation |
|-----|------------------|-------------------|
| Open Day | List building + Retargeting | 25% of launch budget |
| Day 2-3 | Retargeting heavy | 30% |
| Day 4 | Retargeting + urgency | 20% |
| Final Day | All urgency messaging | 25% |

**Retargeting sequences:**
1. PLC viewers who didn't opt-in → Push opt-in
2. Opted in, didn't watch PLCs → Push PLC
3. Watched PLCs, didn't buy → Push sales page
4. Visited sales page, didn't buy → Cart recovery
5. Started checkout, didn't complete → Abandonment

### Step 9: Set Up Tracking

**Required tracking:**
- [ ] Facebook pixel installed
- [ ] Google Analytics connected
- [ ] UTM parameters on all links
- [ ] Conversion tracking verified
- [ ] Email platform integrated

**Key events to track:**
```
- Page view (all pages)
- Lead (opt-in complete)
- ViewContent (PLC views)
- InitiateCheckout (checkout start)
- Purchase (sale complete)
```

**Attribution setup:**
- Use UTM parameters
- Track by campaign/adset/ad
- Connect to email platform
- Build revenue attribution

### Step 10: Create Testing Plan

**Test hierarchy:**

```
1. Audience testing (first)
   - Which audiences perform best?
   - 3-5 audiences, same creative
   - Pick winners at R$50-100 spend each

2. Creative testing (second)
   - Which creatives win?
   - 3-5 creatives, winning audience
   - Pick winners at R$50-100 spend each

3. Optimization (ongoing)
   - Scale winners
   - Kill losers
   - Test new variations
```

**Kill criteria:**
- CPL > 2x target after R$100 spent
- CTR < 0.5% after 5,000 impressions
- No conversions after R$50 spent

### Step 11: Plan Contingencies

**If CPL too high:**
- Pause and reassess
- Test new audiences
- Test new creatives
- Improve landing page

**If not spending budget:**
- Expand audiences
- Raise bid
- Add placements
- Create new ads

**Reference:**
- `data/plf/contingency-framework-kb.yaml`

### Step 12: Validate Strategy

**Pre-launch checklist:**
- [ ] Pixel firing correctly
- [ ] Audiences created
- [ ] Creatives approved
- [ ] Budget confirmed
- [ ] Team aligned
- [ ] Landing pages tested

---

## Deliverables

1. **Traffic Strategy Document**
   - Platform selection
   - Budget allocation
   - Timeline

2. **Audience Plan**
   - Custom audiences to create
   - Lookalike strategy
   - Interest targeting backup

3. **Creative Brief**
   - Ad angles to test
   - Copy variations
   - Visual requirements

4. **Budget Breakdown**
   - Phase allocations
   - Daily budgets
   - Contingency reserves

5. **Tracking Setup**
   - Pixel implementation
   - Conversion events
   - Attribution plan

---

## Success Criteria

- [ ] CPL at or below target
- [ ] Sufficient lead volume
- [ ] Positive ROAS on launch
- [ ] Clear data for optimization
- [ ] Scalable system identified

---

## Budget Guidelines

| Launch Revenue Goal | Min Ad Budget | Typical Ad Budget |
|---------------------|---------------|-------------------|
| R$10,000 | R$500 | R$1,000-2,000 |
| R$50,000 | R$2,500 | R$5,000-10,000 |
| R$100,000 | R$5,000 | R$10,000-20,000 |
| R$500,000+ | R$25,000+ | R$50,000+ |

**Rule of thumb:** 10-20% of revenue goal in ad spend

---

## Common Mistakes

1. **Too early** - Running ads before proven organic launch
2. **No testing** - Going big without testing phase
3. **No tracking** - Can't optimize what you don't measure
4. **Wrong audience** - Wasting money on non-buyers
5. **Bad landing page** - Traffic without conversion
6. **Giving up too early** - Need data to optimize

---

## References

### Knowledge Bases
- `data/plf/platform-comparison-kb.yaml`
- `data/plf/launch-budget-kb.yaml`
- `data/plf/contingency-framework-kb.yaml`

### Checklists
- `checklists/plf/preprelaunch-readiness.md`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Paid Traffic*


---

## Referência: references/plf.md

# plf

Task composta. Sub-tarefas:

- `references/plf-create-case-study.md`
- `references/plf-create-evergreen-launch.md`
- `references/plf-create-jv-launch.md`
- `references/plf-create-launch-emails.md`
- `references/plf-create-launch-stack.md`
- `references/plf-create-live-launch.md`
- `references/plf-create-open-cart-sequence.md`
- `references/plf-create-plc-sequence.md`
- `references/plf-create-preprelaunch.md`
- `references/plf-create-sales-page-plf.md`
- `references/plf-create-seed-launch.md`
- `references/plf-diagnose-failed-launch.md`
- `references/plf-evaluate-cpl.md`
- `references/plf-map-mental-triggers.md`
- `references/plf-plan-paid-traffic.md`


---

## Referência: templates/plf-beat-analysis-tmpl.yaml

# ═══════════════════════════════════════════════════════════════════════════════
# BEAT ANALYSIS — CPL {{cpl_number}}
# ═══════════════════════════════════════════════════════════════════════════════
#
# Generated by: wf-evaluate-cpl v2.0
# Production Aid: {{production_aid_file}}
# Analyzed: {{analysis_date}}
#
# ═══════════════════════════════════════════════════════════════════════════════

metadata:
  cpl_number: {{cpl_number}}
  cpl_type: "{{cpl_type}}"  # e.g., "PLC #1 — The Opportunity"
  transcript_file: "{{transcript_file}}"
  transcript_lines: {{transcript_total_lines}}
  production_aid: "{{production_aid_file}}"
  analysis_date: "{{analysis_date}}"

# ═══════════════════════════════════════════════════════════════════════════════
# SUMMARY
# ═══════════════════════════════════════════════════════════════════════════════
summary:
  total_beats_expected: {{total_beats_expected}}
  total_beats_found: {{total_beats_found}}
  beats_missing: {{beats_missing_count}}
  average_beat_score: {{average_beat_score}}
  overall_structure_score: {{structure_score}}  # 0-10 scale

  beat_coverage:
    percentage: {{beat_coverage_percentage}}
    missing_beats:
      {{#each missing_beats}}
      - "{{this}}"
      {{/each}}

  duration_analysis:
    transcript_estimated_duration: "{{estimated_duration}}"
    duration_distribution_match: {{duration_match_score}}  # 0-10

# ═══════════════════════════════════════════════════════════════════════════════
# BEAT-BY-BEAT ANALYSIS
# ═══════════════════════════════════════════════════════════════════════════════
beats:

  # ─────────────────────────────────────────────────────────────────────────────
  # BEAT 1: Opening / Hook
  # ─────────────────────────────────────────────────────────────────────────────
  - id: "opening"
    name: "Opening / Hook"
    order: 1

    # Location in transcript
    location:
      start_line: {{opening_start_line}}
      end_line: {{opening_end_line}}
      timestamp_start: "{{opening_timestamp_start}}"
      timestamp_end: "{{opening_timestamp_end}}"

    # Duration analysis
    duration:
      expected: "30-90 seconds (5-10%)"
      actual: "{{opening_actual_duration}}"
      percentage_of_total: {{opening_percentage}}
      within_range: {{opening_duration_ok}}

    # Content analysis
    content:
      opening_strategy_used: "{{opening_strategy}}"  # A (Pain), B (Outcome), C (Story)
      pattern_interrupt_present: {{pattern_interrupt}}
      relevance_established: {{relevance_established}}

      elements_expected:
        - "Pattern interrupt"
        - "Relevance to viewer"
        - "Hook that creates curiosity"
        - "Promise of value"

      elements_found:
        {{#each opening_elements_found}}
        - "{{this}}"
        {{/each}}

      elements_missing:
        {{#each opening_elements_missing}}
        - "{{this}}"
        {{/each}}

    # Evidence
    evidence:
      opening_quote: |
        "{{opening_quote}}"
      analysis_notes: |
        {{opening_analysis_notes}}

    # Scoring
    scoring:
      score: {{opening_score}}  # 1-5
      score_label: "{{opening_score_label}}"  # Weak/Below Average/Solid/Good/Exceptional
      justification: |
        {{opening_justification}}

    # Gaps and improvements
    gaps:
      {{#each opening_gaps}}
      - gap: "{{this.description}}"
        severity: "{{this.severity}}"
        fix: "{{this.fix}}"
      {{/each}}

  # ─────────────────────────────────────────────────────────────────────────────
  # BEAT 2: Opportunity / Transformation Reveal
  # ─────────────────────────────────────────────────────────────────────────────
  - id: "opportunity"
    name: "{{beat2_name}}"  # Varies by CPL type
    order: 2

    location:
      start_line: {{beat2_start_line}}
      end_line: {{beat2_end_line}}
      timestamp_start: "{{beat2_timestamp_start}}"
      timestamp_end: "{{beat2_timestamp_end}}"

    duration:
      expected: "{{beat2_expected_duration}}"
      actual: "{{beat2_actual_duration}}"
      percentage_of_total: {{beat2_percentage}}
      within_range: {{beat2_duration_ok}}

    content:
      framework_used: "{{beat2_framework}}"

      elements_expected:
        {{#each beat2_elements_expected}}
        - "{{this}}"
        {{/each}}

      elements_found:
        {{#each beat2_elements_found}}
        - "{{this}}"
        {{/each}}

      elements_missing:
        {{#each beat2_elements_missing}}
        - "{{this}}"
        {{/each}}

    evidence:
      key_quote: |
        "{{beat2_quote}}"
      analysis_notes: |
        {{beat2_analysis_notes}}

    scoring:
      score: {{beat2_score}}
      score_label: "{{beat2_score_label}}"
      justification: |
        {{beat2_justification}}

    gaps:
      {{#each beat2_gaps}}
      - gap: "{{this.description}}"
        severity: "{{this.severity}}"
        fix: "{{this.fix}}"
      {{/each}}

  # ─────────────────────────────────────────────────────────────────────────────
  # BEAT 3: Positioning / Authority
  # ─────────────────────────────────────────────────────────────────────────────
  - id: "positioning"
    name: "{{beat3_name}}"
    order: 3

    location:
      start_line: {{beat3_start_line}}
      end_line: {{beat3_end_line}}
      timestamp_start: "{{beat3_timestamp_start}}"
      timestamp_end: "{{beat3_timestamp_end}}"

    duration:
      expected: "{{beat3_expected_duration}}"
      actual: "{{beat3_actual_duration}}"
      percentage_of_total: {{beat3_percentage}}
      within_range: {{beat3_duration_ok}}

    content:
      story_based_credentials: {{story_based_credentials}}
      vulnerability_present: {{vulnerability_present}}
      empathy_before_credentials: {{empathy_first}}

      elements_expected:
        {{#each beat3_elements_expected}}
        - "{{this}}"
        {{/each}}

      elements_found:
        {{#each beat3_elements_found}}
        - "{{this}}"
        {{/each}}

      elements_missing:
        {{#each beat3_elements_missing}}
        - "{{this}}"
        {{/each}}

    evidence:
      key_quote: |
        "{{beat3_quote}}"
      analysis_notes: |
        {{beat3_analysis_notes}}

    scoring:
      score: {{beat3_score}}
      score_label: "{{beat3_score_label}}"
      justification: |
        {{beat3_justification}}

    gaps:
      {{#each beat3_gaps}}
      - gap: "{{this.description}}"
        severity: "{{this.severity}}"
        fix: "{{this.fix}}"
      {{/each}}

  # ─────────────────────────────────────────────────────────────────────────────
  # BEAT 4: Teaching
  # ─────────────────────────────────────────────────────────────────────────────
  - id: "teaching"
    name: "{{beat4_name}}"
    order: 4

    location:
      start_line: {{beat4_start_line}}
      end_line: {{beat4_end_line}}
      timestamp_start: "{{beat4_timestamp_start}}"
      timestamp_end: "{{beat4_timestamp_end}}"

    duration:
      expected: "{{beat4_expected_duration}}"
      actual: "{{beat4_actual_duration}}"
      percentage_of_total: {{beat4_percentage}}
      within_range: {{beat4_duration_ok}}

    content:
      teaching_depth: "{{teaching_depth}}"  # Surface/Insight/Tactical/Deep
      actionable_content: {{actionable_content}}
      creates_aha_moment: {{aha_moment}}
      opens_loop_for_next: {{opens_loop}}

      frameworks_taught:
        {{#each frameworks_taught}}
        - name: "{{this.name}}"
          steps: {{this.steps}}
          memorable: {{this.memorable}}
        {{/each}}

      elements_expected:
        {{#each beat4_elements_expected}}
        - "{{this}}"
        {{/each}}

      elements_found:
        {{#each beat4_elements_found}}
        - "{{this}}"
        {{/each}}

      elements_missing:
        {{#each beat4_elements_missing}}
        - "{{this}}"
        {{/each}}

    evidence:
      key_quote: |
        "{{beat4_quote}}"
      analysis_notes: |
        {{beat4_analysis_notes}}

    scoring:
      score: {{beat4_score}}
      score_label: "{{beat4_score_label}}"
      justification: |
        {{beat4_justification}}

    gaps:
      {{#each beat4_gaps}}
      - gap: "{{this.description}}"
        severity: "{{this.severity}}"
        fix: "{{this.fix}}"
      {{/each}}

  # ─────────────────────────────────────────────────────────────────────────────
  # BEAT 5: Objection Handling
  # ─────────────────────────────────────────────────────────────────────────────
  - id: "objections"
    name: "Objection Handling"
    order: 5

    location:
      start_line: {{beat5_start_line}}
      end_line: {{beat5_end_line}}
      timestamp_start: "{{beat5_timestamp_start}}"
      timestamp_end: "{{beat5_timestamp_end}}"

    duration:
      expected: "{{beat5_expected_duration}}"
      actual: "{{beat5_actual_duration}}"
      percentage_of_total: {{beat5_percentage}}
      within_range: {{beat5_duration_ok}}

    content:
      objections_addressed:
        {{#each objections_addressed}}
        - objection: "{{this.objection}}"
          response_type: "{{this.response_type}}"  # Direct/Reframe/Promise/Story
          effectiveness: {{this.effectiveness}}
        {{/each}}

      objections_expected_but_missing:
        {{#each objections_missing}}
        - "{{this}}"
        {{/each}}

    evidence:
      key_quote: |
        "{{beat5_quote}}"
      analysis_notes: |
        {{beat5_analysis_notes}}

    scoring:
      score: {{beat5_score}}
      score_label: "{{beat5_score_label}}"
      justification: |
        {{beat5_justification}}

    gaps:
      {{#each beat5_gaps}}
      - gap: "{{this.description}}"
        severity: "{{this.severity}}"
        fix: "{{this.fix}}"
      {{/each}}

  # ─────────────────────────────────────────────────────────────────────────────
  # BEAT 6: Foreshadow / Anticipation
  # ─────────────────────────────────────────────────────────────────────────────
  - id: "foreshadow"
    name: "Foreshadow / Anticipation"
    order: 6

    location:
      start_line: {{beat6_start_line}}
      end_line: {{beat6_end_line}}
      timestamp_start: "{{beat6_timestamp_start}}"
      timestamp_end: "{{beat6_timestamp_end}}"

    duration:
      expected: "{{beat6_expected_duration}}"
      actual: "{{beat6_actual_duration}}"
      percentage_of_total: {{beat6_percentage}}
      within_range: {{beat6_duration_ok}}

    content:
      specific_tease_present: {{specific_tease}}
      creates_curiosity: {{creates_curiosity}}
      connects_to_next_cpl: {{connects_to_next}}

      teased_content:
        {{#each teased_content}}
        - "{{this}}"
        {{/each}}

    evidence:
      key_quote: |
        "{{beat6_quote}}"
      analysis_notes: |
        {{beat6_analysis_notes}}

    scoring:
      score: {{beat6_score}}
      score_label: "{{beat6_score_label}}"
      justification: |
        {{beat6_justification}}

    gaps:
      {{#each beat6_gaps}}
      - gap: "{{this.description}}"
        severity: "{{this.severity}}"
        fix: "{{this.fix}}"
      {{/each}}

  # ─────────────────────────────────────────────────────────────────────────────
  # BEAT 7: CTA
  # ─────────────────────────────────────────────────────────────────────────────
  - id: "cta"
    name: "Call to Action"
    order: 7

    location:
      start_line: {{beat7_start_line}}
      end_line: {{beat7_end_line}}
      timestamp_start: "{{beat7_timestamp_start}}"
      timestamp_end: "{{beat7_timestamp_end}}"

    duration:
      expected: "{{beat7_expected_duration}}"
      actual: "{{beat7_actual_duration}}"
      percentage_of_total: {{beat7_percentage}}
      within_range: {{beat7_duration_ok}}

    content:
      cta_type: "{{cta_type}}"  # Comment/Subscribe/Share/Watch Next
      specific_prompt: {{specific_prompt}}
      easy_to_answer: {{easy_to_answer}}
      mentions_reading_comments: {{mentions_reading}}

      cta_text: |
        "{{cta_text}}"

    evidence:
      key_quote: |
        "{{beat7_quote}}"
      analysis_notes: |
        {{beat7_analysis_notes}}

    scoring:
      score: {{beat7_score}}
      score_label: "{{beat7_score_label}}"
      justification: |
        {{beat7_justification}}

    gaps:
      {{#each beat7_gaps}}
      - gap: "{{this.description}}"
        severity: "{{this.severity}}"
        fix: "{{this.fix}}"
      {{/each}}

# ═══════════════════════════════════════════════════════════════════════════════
# ADDITIONAL BEATS (CPL-Specific)
# ═══════════════════════════════════════════════════════════════════════════════
# Note: Additional beats may be present depending on CPL type
# PLC2 has: Recap, Case Studies
# PLC3 has: Recap, Ownership Vision, Bridge to Offer, Product Preview, Scarcity Setup
# Sales Video has: Different structure entirely

additional_beats:
  {{#each additional_beats}}
  - id: "{{this.id}}"
    name: "{{this.name}}"
    order: {{this.order}}
    location:
      start_line: {{this.start_line}}
      end_line: {{this.end_line}}
    scoring:
      score: {{this.score}}
      score_label: "{{this.score_label}}"
    evidence:
      key_quote: |
        "{{this.quote}}"
  {{/each}}

# ═══════════════════════════════════════════════════════════════════════════════
# STRUCTURAL ISSUES
# ═══════════════════════════════════════════════════════════════════════════════
structural_issues:

  missing_beats:
    {{#each missing_beats_details}}
    - beat: "{{this.name}}"
      impact: "{{this.impact}}"
      recommendation: "{{this.recommendation}}"
    {{/each}}

  duration_issues:
    {{#each duration_issues}}
    - beat: "{{this.name}}"
      issue: "{{this.issue}}"  # too_short/too_long
      expected: "{{this.expected}}"
      actual: "{{this.actual}}"
      recommendation: "{{this.recommendation}}"
    {{/each}}

  sequence_issues:
    {{#each sequence_issues}}
    - issue: "{{this.description}}"
      impact: "{{this.impact}}"
      recommendation: "{{this.recommendation}}"
    {{/each}}

# ═══════════════════════════════════════════════════════════════════════════════
# OVERALL ASSESSMENT
# ═══════════════════════════════════════════════════════════════════════════════
assessment:
  structure_score: {{structure_score}}
  structure_grade: "{{structure_grade}}"

  strongest_beats:
    {{#each strongest_beats}}
    - "{{this.name}}" ({{this.score}}/5)
    {{/each}}

  weakest_beats:
    {{#each weakest_beats}}
    - "{{this.name}}" ({{this.score}}/5)
    {{/each}}

  priority_improvements:
    {{#each priority_improvements}}
    - beat: "{{this.beat}}"
      current_score: {{this.current_score}}
      target_score: {{this.target_score}}
      action: "{{this.action}}"
    {{/each}}


---

## Referência: templates/plf-case-study-tmpl.md

# Case Study Template - PLF Format

> **Framework**: Product Launch Formula (Jeff Walker)
> **Purpose**: Document transformation stories for PLC2 and social proof
> **Use In**: PLC2, Sales Page, Open Cart Emails, Testimonials

---

## Case Study Information Sheet

### Basic Info

| Field | Information |
|-------|-------------|
| **Nome** | {{NOME}} |
| **Idade** | {{IDADE}} (opcional) |
| **Localizacao** | {{CIDADE/PAIS}} |
| **Profissao/Contexto** | {{CONTEXTO}} |
| **Produto/Programa** | {{QUAL_PRODUTO}} |
| **Data de Entrada** | {{DATA}} |
| **Tempo para Resultado** | {{TEMPO}} |

---

## BEFORE Situation

### External Circumstances
```
{{NOME}} era {{DESCRICAO_BREVE}}.

Situacao profissional: {{DESCRICAO}}
Situacao financeira: {{DESCRICAO}}
Situacao pessoal: {{DESCRICAO}}
```

### Internal State
```
Como {{ELE/ELA}} se sentia:
- {{EMOCAO_1}}
- {{EMOCAO_2}}
- {{EMOCAO_3}}

Pensamentos dominantes:
"{{PENSAMENTO_1}}"
"{{PENSAMENTO_2}}"
```

### Specific Pain Points
1. {{DOR_1}}
2. {{DOR_2}}
3. {{DOR_3}}

### What They Had Already Tried
- {{TENTATIVA_1}} → Resultado: {{RESULTADO}}
- {{TENTATIVA_2}} → Resultado: {{RESULTADO}}
- {{TENTATIVA_3}} → Resultado: {{RESULTADO}}

### Quote (Before)
```
"{{QUOTE_DO_ANTES}}"
```

---

## The Turning Point

### What Made Them Take Action
```
{{O_QUE_MUDOU}}

O momento de decisao foi quando {{MOMENTO_DECISIVO}}.
```

### Initial Objections/Hesitations
```
Antes de entrar, {{NOME}} pensou:
- "{{OBJECAO_1}}"
- "{{OBJECAO_2}}"

O que fez {{ELE/ELA}} superar: {{O_QUE_CONVENCEU}}
```

---

## The Journey (What They Did)

### Key Actions Taken
1. **Semana 1-2:** {{ACAO_1}}
2. **Semana 3-4:** {{ACAO_2}}
3. **Mes 2:** {{ACAO_3}}
4. **Mes 3+:** {{ACAO_4}}

### Specific Strategies/Tools Used
- {{ESTRATEGIA_1}}
- {{ESTRATEGIA_2}}
- {{ESTRATEGIA_3}}

### Challenges Along the Way
```
Nao foi facil. {{NOME}} enfrentou:
- {{DESAFIO_1}}
- {{DESAFIO_2}}

Como superou: {{COMO_SUPEROU}}
```

---

## AFTER Results

### Quantitative Results (Numeros)
| Metrica | Antes | Depois | Mudanca |
|---------|-------|--------|---------|
| {{METRICA_1}} | {{X}} | {{Y}} | +{{Z}}% |
| {{METRICA_2}} | {{X}} | {{Y}} | +{{Z}}% |
| {{METRICA_3}} | {{X}} | {{Y}} | +{{Z}}% |

### Qualitative Results (Transformacao)
```
Hoje, {{NOME}}:
- {{RESULTADO_1}}
- {{RESULTADO_2}}
- {{RESULTADO_3}}
```

### Emotional Transformation
```
De: {{EMOCAO_ANTES}}
Para: {{EMOCAO_DEPOIS}}

"{{QUOTE_EMOCIONAL}}"
```

### Life Changes
```
O que mudou na vida de {{NOME}}:
- Profissional: {{MUDANCA}}
- Financeiro: {{MUDANCA}}
- Pessoal: {{MUDANCA}}
- Relacionamentos: {{MUDANCA}}
```

### Quote (After)
```
"{{QUOTE_DO_DEPOIS}}"
```

---

## Timeline Summary

```
Inicio: {{DATA_INICIO}}
Primeiro resultado: {{PRIMEIRO_RESULTADO}} em {{TEMPO}}
Resultado principal: {{RESULTADO_PRINCIPAL}} em {{TEMPO}}
Status atual: {{STATUS_ATUAL}}
```

---

## Case Study Formats

### Format 1: PLC2 Long Version (5-7 min read/watch)

```
Conheca {{NOME}}.

{{DESCRICAO_INICIAL}}

**A Situacao ANTES:**

{{ANTES_DETALHADO}}

"{{QUOTE_ANTES}}"

{{NOME}} tinha tentado {{TENTATIVAS}}.
Nada funcionava porque {{RAZAO}}.

**O Ponto de Virada:**

{{MOMENTO_DECISIVO}}

{{O_QUE_FEZ_DIFERENTE}}

**A Jornada:**

Nos primeiros {{TEMPO}}:
{{ACOES_E_RESULTADOS}}

**Os Resultados:**

{{RESULTADOS_ESPECIFICOS}}

- De {{X}} para {{Y}}
- {{RESULTADO_2}}
- {{RESULTADO_3}}

**Hoje:**

{{SITUACAO_ATUAL}}

"{{QUOTE_DEPOIS}}"

Se funcionou para {{NOME}}, pode funcionar para voce.
```

### Format 2: Quick Stack (30 sec - 1 min)

```
{{NOME}}: {{SITUACAO_ANTES}} → {{RESULTADO}} em {{TEMPO}}

"{{QUOTE_CURTA}}"
```

### Format 3: Video Testimonial Script

```
Pergunta 1: "Conta um pouco sobre voce e sua situacao antes de comecar."
Pergunta 2: "O que voce ja tinha tentado?"
Pergunta 3: "O que te fez decidir entrar?"
Pergunta 4: "O que voce fez de diferente?"
Pergunta 5: "Quais resultados voce conseguiu?"
Pergunta 6: "O que mudou na sua vida?"
Pergunta 7: "O que voce diria para alguem que esta na duvida?"
```

### Format 4: Social Media Post

```
De "{{FRASE_ANTES}}" para "{{FRASE_DEPOIS}}"

A historia de {{NOME}} me emociona.

{{RESUMO_2_FRASES}}

Em {{TEMPO}}, {{ELE/ELA}} conseguiu:
✓ {{RESULTADO_1}}
✓ {{RESULTADO_2}}
✓ {{RESULTADO_3}}

Voce e o proximo?

[Link]
```

---

## Objection-Specific Uses

### For "I don't have time"
```
{{NOME}} trabalhava {{X}} horas por semana.
Mesmo assim, dedicando apenas {{X}} horas por {{PERIODO}},
conseguiu {{RESULTADO}}.
```

### For "I don't have money"
```
{{NOME}} estava {{SITUACAO_FINANCEIRA}}.
O investimento foi R${{X}}.
Em {{TEMPO}}, {{ELE/ELA}} recuperou {{Y}}x.
```

### For "It won't work for me"
```
{{NOME}} tambem pensava isso.
{{ELE/ELA}} era {{SITUACAO_SIMILAR_AO_LEITOR}}.
Se funcionou para {{ELE/ELA}}...
```

### For "I've tried before"
```
{{NOME}} tinha tentado {{TENTATIVAS}}.
A diferenca dessa vez foi {{DIFERENCIAL}}.
```

---

## Collection Checklist

- [ ] Written permission to share story
- [ ] Before/after photos (if relevant)
- [ ] Specific numbers verified
- [ ] Video testimonial recorded
- [ ] Written quote approved
- [ ] Timeline confirmed
- [ ] Social media handles (for tagging)

---

## Usage Guidelines

| Use Case | Format | Length |
|----------|--------|--------|
| PLC2 Main Story | Long Version | 5-7 min |
| PLC2 Stack | Quick Stack | 30 sec each |
| Sales Page | Medium + Quick | Varied |
| Open Cart Emails | Medium or Quick | 2-3 min |
| Social Media | Social Format | 30 sec |
| Ads | Quick with Quote | 15-30 sec |

---

*Template Version: 1.0*
*Framework: Product Launch Formula - Case Study*


---

## Referência: templates/plf-cpl-evaluation-report-tmpl.md

# CPL {{cpl_number}} Evaluation Report

> **Product:** {{product_name}}
> **Creator:** {{creator_name}}
> **Evaluated:** {{evaluation_date}}
> **Workflow:** wf-evaluate-cpl v2.0

---

## Executive Summary

| Metric | Value |
|--------|-------|
| **Overall Score** | {{overall_score}}/10 |
| **Status** | {{status}} |
| **Beat Score** | {{beat_score}}/10 |
| **Rubric Score** | {{rubric_score}}/10 |
| **Trigger Score** | {{trigger_score}}/10 |
| **Mistakes Detected** | {{mistakes_count}}/15 |
| **Veto Conditions** | {{veto_count}} triggered |

### Verdict

{{#if status_pass}}
**PASS** — This CPL meets the minimum quality standards for launch.
{{/if}}
{{#if status_launch_winning}}
**LAUNCH WINNING** — This CPL exceeds expectations. Ready for launch as-is.
{{/if}}
{{#if status_needs_work}}
**NEEDS WORK** — This CPL has significant gaps that should be addressed before launch.
{{/if}}
{{#if status_fail}}
**FAIL** — This CPL requires major revision. Do not launch without rewriting.
{{/if}}

### Critical Issues (Fix First)

{{#each critical_issues}}
- **{{this.type}}:** {{this.description}}
{{/each}}

{{#if no_critical_issues}}
No critical issues detected.
{{/if}}

---

## Beat-by-Beat Analysis

### Expected vs. Actual Structure

| Beat | Expected | Found | Score | Status |
|------|----------|-------|-------|--------|
{{#each beats}}
| {{this.name}} | {{this.expected_duration}} | {{this.actual_duration}} | {{this.score}}/5 | {{this.status_icon}} |
{{/each}}

### Beat Details

{{#each beats}}
#### {{this.order}}. {{this.name}}

**Location:** Lines {{this.start_line}}-{{this.end_line}} ({{this.actual_duration}})

**Score:** {{this.score}}/5 — {{this.score_label}}

**Evidence:**
> "{{this.evidence_quote}}"

**Copy Framework Used:** {{this.copy_framework}}

**Gaps Identified:**
{{#each this.gaps}}
- {{this}}
{{/each}}

{{#if this.gaps_empty}}
No gaps identified.
{{/if}}

---

{{/each}}

## Self-Assessment Rubric Scores

### Dimension Breakdown

| Dimension | Score | Weight | Weighted | Evidence |
|-----------|-------|--------|----------|----------|
{{#each rubric_dimensions}}
| {{this.name}} | {{this.score}}/5 | {{this.weight}} | {{this.weighted_score}} | {{this.evidence_summary}} |
{{/each}}
| **Total** | | | **{{rubric_weighted_total}}** | |

### Dimensions Below Threshold

{{#each low_dimensions}}
#### {{this.name}} (Score: {{this.score}}/5)

**Current State:** {{this.current_description}}

**What "Solid" (3) Looks Like:**
{{this.solid_description}}

**What "Exceptional" (5) Looks Like:**
{{this.exceptional_description}}

**Gap to Close:**
{{this.gap_description}}

**Specific Improvement:**
{{this.improvement_suggestion}}

---

{{/each}}

{{#if no_low_dimensions}}
All dimensions meet minimum threshold (3+).
{{/if}}

---

## Mistake Detection

### Summary

- **Critical Mistakes (#1-5):** {{critical_mistakes_count}} detected
- **Significant Mistakes (#6-10):** {{significant_mistakes_count}} detected
- **Minor Mistakes (#11-15):** {{minor_mistakes_count}} detected
- **Total Damage Score:** {{total_damage_score}}

### Detected Mistakes (Ranked by Damage)

{{#each detected_mistakes}}
#### Mistake #{{this.rank}}: {{this.name}}

**Severity:** {{this.severity}} ({{this.damage_multiplier}}x damage)

**Description:** {{this.description}}

**Evidence:**
> "{{this.evidence_quote}}"
> — Line {{this.evidence_line}}

**Why This Damages the CPL:**
{{this.damage_explanation}}

**How to Fix:**
{{this.fix_suggestion}}

---

{{/each}}

{{#if no_mistakes}}
No mistakes detected.
{{/if}}

### Mistakes Successfully Avoided

{{#each avoided_mistakes}}
- **#{{this.rank}}:** {{this.name}} — {{this.avoidance_evidence}}
{{/each}}

---

## Mental Trigger Analysis

### Trigger Activation Map

| Trigger | Expected In | Activated? | Intensity | Notes |
|---------|-------------|------------|-----------|-------|
{{#each triggers}}
| {{this.name}} | {{this.expected_beats}} | {{this.activated_icon}} | {{this.intensity}}/5 | {{this.notes}} |
{{/each}}

### Primary Triggers (Critical for CPL {{cpl_number}})

{{#each primary_triggers}}
#### {{this.name}}

**Status:** {{this.status}}

**Where Activated:** {{this.location}}

**Intensity:** {{this.intensity}}/5

**Mechanism Used:**
{{this.mechanism}}

**Evidence:**
> "{{this.evidence_quote}}"

{{#if this.missing}}
**Impact of Missing Trigger:**
{{this.missing_impact}}

**How to Activate:**
{{this.activation_suggestion}}
{{/if}}

---

{{/each}}

### Cumulative Emotional State

At the end of this CPL, the viewer should feel:
{{expected_emotional_state}}

**Actual State Based on Trigger Analysis:**
{{actual_emotional_state}}

**Gap:**
{{emotional_state_gap}}

---

## Prioritized Recommendations

### Priority 1: Critical (Must Fix Before Launch)

{{#each priority_1}}
{{this.order}}. **{{this.title}}**
   - Issue: {{this.issue}}
   - Fix: {{this.fix}}
   - Impact: {{this.impact}}
{{/each}}

{{#if priority_1_empty}}
No critical issues requiring immediate attention.
{{/if}}

### Priority 2: Important (Should Fix)

{{#each priority_2}}
{{this.order}}. **{{this.title}}**
   - Issue: {{this.issue}}
   - Fix: {{this.fix}}
   - Impact: {{this.impact}}
{{/each}}

### Priority 3: Nice to Have (Polish)

{{#each priority_3}}
{{this.order}}. **{{this.title}}**
   - Opportunity: {{this.opportunity}}
   - Suggestion: {{this.suggestion}}
{{/each}}

---

## Rewrite Suggestions

### Beats Requiring Rewrite (Score < 3)

{{#each rewrite_beats}}
#### {{this.name}} — Current Score: {{this.score}}/5

**Current Copy:**
```
{{this.current_copy}}
```

**Problem:**
{{this.problem}}

**Suggested Rewrite (Using {{this.framework}} Framework):**
```
{{this.suggested_copy}}
```

**Why This Works Better:**
{{this.improvement_explanation}}

---

{{/each}}

{{#if no_rewrites_needed}}
All beats score 3+. No rewrites required.
{{/if}}

---

## Comparison to PLF Standards

### This CPL vs. Launch-Winning Benchmarks

| Metric | This CPL | PLF Benchmark | Gap |
|--------|----------|---------------|-----|
| Beat Coverage | {{beat_coverage}}% | 100% | {{beat_coverage_gap}}% |
| Rubric Average | {{rubric_average}} | 4.0 | {{rubric_gap}} |
| Trigger Activation | {{trigger_activation}}% | 90%+ | {{trigger_gap}}% |
| Mistakes | {{mistakes_count}} | 0-2 | {{mistakes_gap}} |

### Where This CPL Excels

{{#each strengths}}
- **{{this.area}}:** {{this.description}}
{{/each}}

### Where This CPL Falls Short

{{#each weaknesses}}
- **{{this.area}}:** {{this.description}}
{{/each}}

---

## Next Steps

1. {{next_step_1}}
2. {{next_step_2}}
3. {{next_step_3}}

---

## Appendix: Raw Scores

```yaml
beat_scores:
{{#each beats}}
  {{this.id}}: {{this.score}}
{{/each}}

rubric_scores:
{{#each rubric_dimensions}}
  {{this.id}}: {{this.score}}
{{/each}}

trigger_scores:
{{#each triggers}}
  {{this.id}}: {{this.intensity}}
{{/each}}

mistakes_detected:
{{#each detected_mistakes}}
  - {{this.rank}}
{{/each}}
```

---

*Report generated by wf-evaluate-cpl v2.0*
*Production Aid: {{production_aid_used}}*
*Evaluation depth: {{evaluation_depth}}*


---

## Referência: templates/plf-email-subject-lines-tmpl.md

# Email Subject Lines Template - PLF Launch

> **Framework**: Product Launch Formula (Jeff Walker)
> **Purpose**: Subject line formulas and examples for every launch phase
> **Usage**: Mix and match, A/B test, personalize

---

## Pre-Prelaunch Subject Lines

### Survey Requests
| Formula | Example |
|---------|---------|
| Simple Ask | Preciso da sua ajuda com algo |
| Question | Posso te perguntar uma coisa? |
| Personal | [Nome], tenho uma pergunta para voce |
| Time-Limited | Isso vai levar 30 segundos |
| Curiosity | Antes de eu criar isso... |

### Teasers / Anticipation
| Formula | Example |
|---------|---------|
| Mystery | Algo grande esta chegando... |
| Insider | Nao conte pra ninguem ainda, mas... |
| Save the Date | Marque na agenda: [data] |
| Question | Voce esta pronto para [resultado]? |
| Promise | Em breve vou revelar... |

---

## PLC Announcement Subject Lines

### PLC1 - The Opportunity
| Formula | Example |
|---------|---------|
| Video Announce | [VIDEO] {{TITULO}} |
| Transformation | O video que mudou [resultado] para [X] pessoas |
| Contrarian | Por que [crenca comum] esta errada |
| Discovery | A descoberta que transformou [nicho] |
| Personal | [Nome], este video e para voce |
| Result Promise | Como [resultado] em [tempo] |

### PLC1 Reminder
| Formula | Example |
|---------|---------|
| Did You See | Voce viu isso? |
| Reminder | Lembrete: [titulo do PLC1] |
| FOMO | Voce e uma das [X] pessoas que... |
| Last Chance | Ultimo lembrete sobre [PLC1] |
| Concern | Nao quero que voce perca isso |

### PLC2 - The Transformation
| Formula | Example |
|---------|---------|
| Proof | A prova de que funciona |
| Case Study | Como [Nome] conseguiu [resultado] |
| Numbers | [X] pessoas ja fizeram isso... |
| Series | O segundo video esta no ar |
| Transformation | De [antes] para [depois] |

### PLC2 Reminder
| Formula | Example |
|---------|---------|
| Short | Video 2 |
| Results | Esses resultados sao reais |
| Case Tease | A historia de [Nome] |
| Missing Out | Voce ta perdendo isso |

### PLC3 - The Ownership
| Formula | Example |
|---------|---------|
| Final | O ultimo video antes de... |
| Tomorrow | Amanha tudo muda |
| Reveal | Seu proximo passo revelado |
| Complete | A peca final do quebra-cabeca |
| Personal Question | Isso e para voce? |
| Preparation | Se prepare para [data] |

### PLC3 Reminder
| Formula | Example |
|---------|---------|
| Last Video | Ultimo video da serie |
| Tomorrow Prep | Amanha as inscricoes abrem |
| Final Chance | Ultima chance de assistir |

---

## Open Cart Subject Lines

### Day 1 - Launch Announcement
| Formula | Example |
|---------|---------|
| It's Here | E AGORA. Acesso liberado. |
| Open | [ABERTO] {{PRODUTO}} |
| Doors Open | As portas estao abertas |
| Access | Seu acesso esta pronto |
| Simple | Comeca agora |
| Action | Garanta sua vaga |

### Day 1 - Follow-up
| Formula | Example |
|---------|---------|
| Response | Uau, voces vieram com tudo |
| Numbers | [X] pessoas ja entraram |
| Reaction | As primeiras reacoes... |
| Question | Voce viu a resposta? |
| Inside | O que esta acontecendo la dentro |

### Day 2-3 - Mid Launch
| Formula | Example |
|---------|---------|
| Case Study | Como [Nome] conseguiu [resultado] |
| FAQ | Suas perguntas, respondidas |
| Countdown | [X] dias restantes para {{PRODUTO}} |
| Story | Uma historia que preciso compartilhar |
| Inside | O que acontece depois de entrar |

### Day 4 - Urgency Building
| Formula | Example |
|---------|---------|
| Warning | 2 dias restantes |
| Tomorrow | Amanha e o ultimo dia |
| Thinking | Voce ainda esta pensando? |
| Before | Antes de voce decidir... |
| Honest | Preciso ser honesto com voce |

---

## Close Cart Subject Lines

### Last Day - Morning
| Formula | Example |
|---------|---------|
| Deadline | [ULTIMO DIA] Fecha as 23:59 |
| Urgent | [URGENTE] Horas finais |
| Time | Ultimo dia para {{PRODUTO}} |
| Direct | E hoje. Decida. |
| Personal | [Nome], e agora ou nunca |

### Last Day - Afternoon
| Formula | Example |
|---------|---------|
| Hours | [{{X}} HORAS] O tempo esta acabando |
| Door | A porta fecha em [X] horas |
| Final | Aviso final: {{PRODUTO}} |
| Won't Last | Isso nao vai durar |
| Concern | Estou preocupado com voce |

### Last Day - Evening
| Formula | Example |
|---------|---------|
| Countdown | [3 horas] E agora ou nunca |
| Fence | Se voce esta na cerca... |
| Before | Antes de voce decidir nao entrar... |
| Closing | Fechando em [X] horas |
| Real | Ultima chance real |

### Last Day - Final Hour
| Formula | Example |
|---------|---------|
| Minutes | [60 minutos] |
| That's It | E isso. |
| Decided | Decidiu? |
| See You | Nos vemos do outro lado? |
| Closing | Fechando... |
| Simple | 30 minutos |

---

## Subject Line Formulas

### Formula Categories

**1. Curiosity Gap**
```
[Teaser without reveal]
- "O que descobri sobre [topic]..."
- "Por que [unexpected thing]..."
- "A verdade sobre [common belief]..."
```

**2. Specificity**
```
[Numbers + specific details]
- "[X] pessoas ja [action]"
- "Como consegui [result] em [time]"
- "O metodo de [X] passos para [result]"
```

**3. Personalization**
```
[Use first name]
- "[Nome], isso e para voce"
- "[Nome], voce viu?"
- "[Nome], uma pergunta rapida"
```

**4. Urgency**
```
[Time-based pressure]
- "[X horas] restantes"
- "Fecha hoje as [time]"
- "Ultimo dia para [product]"
```

**5. Social Proof**
```
[Show others taking action]
- "[X] pessoas ja entraram"
- "O que [Nome] conseguiu..."
- "Voce nao vai acreditar nisso"
```

**6. Question**
```
[Engage with question]
- "Voce quer [result]?"
- "Posso te perguntar algo?"
- "O que te impede de [goal]?"
```

**7. Controversy/Contrarian**
```
[Challenge beliefs]
- "Por que [common advice] esta errado"
- "O erro que 90% cometem"
- "Pare de [common action]"
```

**8. Story**
```
[Narrative hook]
- "Como [Nome] foi de [A] para [B]"
- "A historia por tras de [result]"
- "Deixa eu te contar o que aconteceu..."
```

---

## Emoji Usage Guide

### When to Use
- Cart open/close announcements
- Urgency emails (sparingly)
- Celebratory moments

### Recommended Emojis
| Emoji | Use Case |
|-------|----------|
| 🚀 | Launch, new content |
| 🔴 | Urgency, live |
| ⚠️ | Warning, last chance |
| ✓ or ✅ | List, included items |
| 🎯 | Results, goals |

### When NOT to Use
- Every email (diminishes effect)
- Professional B2B audiences
- Serious/emotional content

---

## A/B Testing Framework

### Test Variables
1. With/without personalization
2. With/without emoji
3. Question vs statement
4. Short vs medium length
5. Specific numbers vs vague

### Test Template
| Version A | Version B | Winner | Notes |
|-----------|-----------|--------|-------|
| {{SUBJECT_A}} | {{SUBJECT_B}} | | |

---

## Subject Line Checklist

- [ ] Under 50 characters (mobile friendly)
- [ ] No spam trigger words
- [ ] Clear value or curiosity
- [ ] Matches email content
- [ ] Personalized when appropriate
- [ ] A/B test ready

---

*Template Version: 1.0*
*Framework: Product Launch Formula - Subject Lines*


---

## Referência: templates/plf-jv-swipe-tmpl.md

# JV Swipe Copy Template

> **Framework**: Product Launch Formula (Jeff Walker)
> **Purpose**: Email swipes for JV/Affiliate partners to promote your launch
> **Usage**: Provide to affiliates for prelaunch and open cart promotion

---

## Affiliate Resource Package Contents

1. Pre-Prelaunch Email (1)
2. PLC Announcement Emails (3)
3. Open Cart Emails (5)
4. Social Media Swipes
5. Promotional Assets Info

---

## Pre-Prelaunch Swipe

### Email: "Something Big Coming"

**Subject Lines (choose one):**
- Algo que voce vai querer ver
- Meu amigo {{SEU_NOME}} esta preparando algo especial
- Marque na agenda: {{DATA}}
- Uma oportunidade unica para {{AVATAR}}

**Body:**

```
Ola {{NOME}},

Nos proximos dias, meu amigo {{SEU_NOME}} vai lancar algo especial.

Se voce {{DESCRICAO_DO_AVATAR}}, isso e para voce.

{{SEU_NOME}} e {{CREDENCIAL_BREVE}}.
E {{ELE/ELA}} vai compartilhar {{O_QUE_VAO_APRENDER}}.

O melhor? E gratuito.

Fica de olho na sua caixa de entrada {{DATA}}.
Vou te mandar o link assim que estiver disponivel.

{{ASSINATURA_AFILIADO}}

PS: Isso vai te ajudar com {{RESULTADO_ESPECIFICO}}.
Nao perca.
```

---

## PLC Swipes

### PLC1 Announcement

**Subject Lines:**
- [VIDEO] {{TITULO_PLC1}}
- Isso muda tudo sobre {{TOPICO}}
- {{SEU_NOME}} acabou de revelar...

**Body:**

```
{{NOME}},

{{SEU_NOME}} acabou de liberar um video que voce precisa assistir.

Nele, {{ELE/ELA}} revela:

→ {{BULLET_1}}
→ {{BULLET_2}}
→ {{BULLET_3}}

Se voce quer {{RESULTADO}}, assiste agora:

[LINK DO AFILIADO]

E de graca. E e limitado.

{{ASSINATURA_AFILIADO}}

PS: No minuto {{X}}, {{ELE/ELA}} mostra {{TEASER}}. Nao pula.
```

### PLC2 Announcement

**Subject Lines:**
- A prova de que funciona
- {{X}} pessoas ja fizeram isso
- Casos reais de {{RESULTADO}}

**Body:**

```
{{NOME}},

Lembra do video que te mandei sobre {{TOPICO}}?

{{SEU_NOME}} acabou de soltar o segundo video da serie.

Desta vez, {{ELE/ELA}} mostra PROVA.

Voce vai conhecer pessoas que:
- {{RESULTADO_1}}
- {{RESULTADO_2}}
- {{RESULTADO_3}}

Assiste agora:

[LINK DO AFILIADO]

Se o primeiro video te impressionou, esse vai te convencer.

{{ASSINATURA_AFILIADO}}
```

### PLC3 Announcement

**Subject Lines:**
- Ultimo video (amanha muda tudo)
- Antes de {{SEU_NOME}} abrir as inscricoes...
- Voce esta pronto?

**Body:**

```
{{NOME}},

Este e o terceiro e ultimo video gratuito.

Depois disso, {{SEU_NOME}} vai abrir as inscricoes do {{PRODUTO}}.

Mas antes, {{ELE/ELA}} quer te mostrar:

→ {{TEASER_1}}
→ {{TEASER_2}}
→ {{TEASER_3}}

Assiste antes que saia do ar:

[LINK DO AFILIADO]

Amanha tudo muda.

{{ASSINATURA_AFILIADO}}
```

---

## Open Cart Swipes

### Day 1 - Cart Open

**Subject Lines:**
- [ABERTO] {{PRODUTO}} esta disponivel
- As portas abriram
- {{SEU_NOME}} liberou o acesso

**Body:**

```
{{NOME}},

As inscricoes do {{PRODUTO}} estao oficialmente abertas.

Se voce acompanhou os videos de {{SEU_NOME}}, sabe do que estou falando.

Eu conheco o {{SEU_NOME}} e o trabalho {{DELE/DELA}}.
E por isso estou recomendando.

O que esta incluido:

✓ {{ITEM_1}}
✓ {{ITEM_2}}
✓ {{ITEM_3}}
✓ Bonus exclusivos
✓ Garantia de {{X}} dias

As inscricoes ficam abertas ate {{DATA}}.

[GARANTIR MINHA VAGA]

Nao deixe passar.

{{ASSINATURA_AFILIADO}}

PS: Eu nao recomendo qualquer coisa.
Se estou enviando isso, e porque confio.
```

### Day 2-4 - Mid-Launch

**Subject Lines:**
- Como {{NOME_CASE}} conseguiu {{RESULTADO}}
- {{X}} pessoas ja entraram
- Voce viu a resposta?

**Body:**

```
{{NOME}},

{{X}} pessoas ja entraram no {{PRODUTO}} de {{SEU_NOME}}.

E as reacoes estao chegando:

"{{QUOTE_1}}" - {{NOME_1}}

"{{QUOTE_2}}" - {{NOME_2}}

Se voce ainda esta considerando, lembre:

As inscricoes fecham {{DATA}}.
Depois disso, sem garantia de quando volta.

[VER O QUE ESTA INCLUIDO]

{{ASSINATURA_AFILIADO}}
```

### Day Final - Morning

**Subject Lines:**
- [ULTIMO DIA] {{PRODUTO}} fecha hoje
- Horas finais para entrar
- Sua ultima chance

**Body:**

```
{{NOME}},

Hoje e o ultimo dia.

As inscricoes do {{PRODUTO}} fecham as {{HORA}}.

Se voce estava esperando o "momento certo"... e agora.

Nao vou te convencer.
Voce viu os videos.
Voce sabe se e para voce.

A unica pergunta e: voce vai agir ou vai deixar passar?

[ENTRAR ANTES DE FECHAR]

Depois de {{HORA}}, acabou.

{{ASSINATURA_AFILIADO}}
```

### Day Final - Evening

**Subject Lines:**
- [{{X}} HORAS] Fechando...
- Ultima chamada para {{PRODUTO}}
- E isso, {{NOME}}

**Body:**

```
{{NOME}},

{{X}} horas restantes.

As 23:59, o link para de funcionar.

Eu fiz minha parte te mostrando isso.
A decisao e sua.

[ULTIMA CHANCE]

Nos vemos do outro lado?

{{ASSINATURA_AFILIADO}}
```

---

## Social Media Swipes

### Facebook/Instagram Post

```
Meu amigo {{SEU_NOME}} esta abrindo as inscricoes do {{PRODUTO}}.

Se voce quer {{RESULTADO}}, recomendo MUITO.

Eu conheco o trabalho {{DELE/DELA}} e confio.

As inscricoes fecham {{DATA}}.

Link na bio / Link: [LINK]
```

### Story Sequence

```
Story 1: "Preciso te mostrar algo..."
Story 2: "{{SEU_NOME}} esta abrindo o {{PRODUTO}}"
Story 3: "Eu conheco {{ELE/ELA}} e confio no trabalho"
Story 4: "Se voce quer {{RESULTADO}}, clica no link"
Story 5: [Link para inscricao]
```

### Twitter/X

```
{{SEU_NOME}} acabou de abrir as inscricoes do {{PRODUTO}}.

Se voce quer {{RESULTADO}}, recomendo.

[LINK]

Fecha {{DATA}}.
```

---

## Affiliate Info Section

### About the Product

```
Produto: {{NOME_DO_PRODUTO}}
Criador: {{SEU_NOME}}
Nicho: {{NICHO}}
Preco: R${{PRECO}} (ou {{X}}x de R${{PARCELA}})
Comissao: {{X}}%
Cookie: {{X}} dias
Datas: {{DATA_INICIO}} a {{DATA_FIM}}
```

### EPC Historico (se tiver)

```
Lancamentos anteriores:
- Launch {{ANO}}: ${{EPC}} EPC
- Launch {{ANO}}: ${{EPC}} EPC
```

### Promotional Assets

```
Links Importantes:
- Pagina do Afiliado: [LINK]
- Pre-Launch Sequence: [LINK]
- Sales Page: [LINK]
- Swipe File: [LINK]
- Imagens/Banners: [LINK]

Seu Link de Afiliado:
[LINK_UNICO]
```

### Promotional Calendar

```
{{DATA_1}}: PLC1 liberado
{{DATA_2}}: PLC2 liberado
{{DATA_3}}: PLC3 liberado
{{DATA_4}}: CART OPEN
{{DATA_5-7}}: Mid-launch
{{DATA_8}}: CART CLOSE (23:59)
```

### Support

```
Duvidas? Entre em contato:
Email: {{EMAIL_AFILIADOS}}
WhatsApp: {{NUMERO}}
```

---

## Guidelines for Affiliates

### Do's
- Use seu proprio estilo/voz
- Adicione sua perspectiva pessoal
- Seja honesto sobre sua relacao com o criador
- Envie nos horarios recomendados
- Acompanhe suas metricas

### Don'ts
- Nao faca promessas nao autorizadas
- Nao altere os links de forma que quebre o tracking
- Nao envie para listas nao autorizadas
- Nao use urgencia falsa

---

*Template Version: 1.0*
*Framework: Product Launch Formula - JV Swipes*


---

## Referência: templates/plf-launch-stack-tmpl.md

# Launch Stack Template

> **Framework**: Product Launch Formula (Jeff Walker)
> **Purpose**: Structure the complete offer for Open Cart
> **Components**: Core + Bonuses + Guarantee + Pricing + Scarcity

---

## Core Offer

### Product Name
**{{NOME_DO_PRODUTO}}**

### One-Line Description
```
O {{TIPO_PRODUTO}} que ajuda {{AVATAR}} a {{RESULTADO_PRINCIPAL}} em {{TEMPO}} sem {{OBSTACULO_REMOVIDO}}.
```

### Transformation Statement
**DE:** {{SITUACAO_ANTES}}
**PARA:** {{SITUACAO_DEPOIS}}

### Core Modules/Components

| Modulo | Nome | O Que Aprende/Recebe | Valor Percebido |
|--------|------|---------------------|-----------------|
| 1 | {{NOME}} | {{DESCRICAO}} | R${{X}} |
| 2 | {{NOME}} | {{DESCRICAO}} | R${{X}} |
| 3 | {{NOME}} | {{DESCRICAO}} | R${{X}} |
| 4 | {{NOME}} | {{DESCRICAO}} | R${{X}} |
| 5 | {{NOME}} | {{DESCRICAO}} | R${{X}} |

**Valor Total do Core:** R${{SOMA}}

---

## Bonus Stack

### Bonus #1: Fast Action Bonus
**Nome:** {{NOME_BONUS_1}}
**Tipo:** Fast Action (apenas para primeiros {{X}} ou primeiras {{X}} horas)
**O Que E:** {{DESCRICAO}}
**Por Que Inclui:** {{RAZAO}}
**Valor:** R${{X}}

### Bonus #2: Objection Killer
**Nome:** {{NOME_BONUS_2}}
**Objecao que Resolve:** "{{OBJECAO_COMUM}}"
**O Que E:** {{DESCRICAO}}
**Como Resolve:** {{EXPLICACAO}}
**Valor:** R${{X}}

### Bonus #3: Complementary Value
**Nome:** {{NOME_BONUS_3}}
**O Que E:** {{DESCRICAO}}
**Como Complementa o Core:** {{EXPLICACAO}}
**Valor:** R${{X}}

### Bonus #4 (Opcional): Community/Support
**Nome:** {{NOME_BONUS_4}}
**O Que E:** {{DESCRICAO}} (grupo, calls, suporte)
**Valor:** R${{X}}

### Bonus #5 (Opcional): Implementation Accelerator
**Nome:** {{NOME_BONUS_5}}
**O Que E:** {{DESCRICAO}} (templates, scripts, checklists)
**Valor:** R${{X}}

---

## Bonus Checklist

| Criterio | Bonus 1 | Bonus 2 | Bonus 3 |
|----------|---------|---------|---------|
| Tem valor independente? | [ ] | [ ] | [ ] |
| Resolve problema especifico? | [ ] | [ ] | [ ] |
| Preco ancora realista? | [ ] | [ ] | [ ] |
| Complementa (nao compete)? | [ ] | [ ] | [ ] |
| Nome atraente? | [ ] | [ ] | [ ] |

---

## Value Stack Summary

| Item | Valor |
|------|-------|
| {{MODULO_1}} | R${{X}} |
| {{MODULO_2}} | R${{X}} |
| {{MODULO_3}} | R${{X}} |
| {{MODULO_4}} | R${{X}} |
| {{MODULO_5}} | R${{X}} |
| **Bonus:** {{BONUS_1}} | R${{X}} |
| **Bonus:** {{BONUS_2}} | R${{X}} |
| **Bonus:** {{BONUS_3}} | R${{X}} |
| **VALOR TOTAL** | **R${{SOMA_TOTAL}}** |
| **SEU INVESTIMENTO** | **R${{PRECO_REAL}}** |

**Economia:** R${{ECONOMIA}} ({{X}}% off)

---

## Guarantee

### Guarantee Type
- [ ] Money Back (incondicional)
- [ ] Conditional (baseada em acao)
- [ ] Result-Based (se nao conseguir X)

### Guarantee Copy

**{{X}} Dias de Garantia Total**

```
Experimente o {{PRODUTO}} por {{X}} dias completos.

Assista as aulas, aplique os metodos, use os templates.

Se por qualquer motivo voce sentir que nao e para voce,
basta enviar um email para {{EMAIL}} e devolvemos
100% do seu investimento.

Sem perguntas. Sem burocracia. Sem ressentimentos.

O risco e todo meu.
A transformacao e sua.
```

### Why Offer This Guarantee

```
Por que oferecer essa garantia?

Porque eu sei que funciona.
{{X}} pessoas ja passaram por aqui.
{{X}}% delas conseguiram {{RESULTADO}}.

Se eu nao tivesse 100% de confianca,
nao arriscaria assim.
```

---

## Pricing Structure

### Price Point
**Preco Unico:** R${{PRECO}}

### Payment Plan
**Parcelas:** {{X}}x de R${{VALOR_PARCELA}}
(Total parcelado: R${{TOTAL_PARCELADO}})

### Price Anchoring Script

```
Se voce fosse montar isso por conta propria:

- {{ITEM_1}} custaria R${{X}}
- {{ITEM_2}} custaria R${{X}}
- {{ITEM_3}} custaria R${{X}}
- Mais o tempo de tentativa e erro...

Valor total: R${{SOMA}}+

Seu investimento no {{PRODUTO}}: R${{PRECO}}

Ou {{X}}x de R${{PARCELA}}.

Menos que {{COMPARACAO_ACESSIVEL}} por mes.
```

### ROI Argument

```
Se o {{PRODUTO}} te ajudar a {{RESULTADO}}...

Quanto isso vale para voce em {{TEMPO}}?

{{NOME_CASE}} investiu R${{PRECO}} e em {{TEMPO}} conseguiu {{RESULTADO_COM_VALOR}}.

ROI de {{X}}x.
```

---

## Scarcity Elements

### Type of Scarcity (choose one or combine)
- [ ] Cart Close (time-based)
- [ ] Limited Spots (quantity-based)
- [ ] Price Increase (after deadline)
- [ ] Bonus Removal (after deadline)

### Cart Close

```
As inscricoes ficam abertas de {{DATA_INICIO}} ate {{DATA_FIM}} as {{HORA}}.

Depois de {{DATA_FIM}}, o link para de funcionar.
E nao sei quando vou reabrir.

Pode ser meses. Pode ser em formato diferente.
O unico certo e: esta versao, com estes bonus, fecha {{DATA_FIM}}.
```

### Limited Spots (se aplicavel)

```
Sao {{X}} vagas disponiveis.

Por que limitar?

{{RAZAO_LEGITIMA}} (capacidade de suporte, formato de mentoria, etc.)

Neste momento, restam {{X}} vagas.
Quando acabar, acabou.
```

### Fast Action Bonus Deadline

```
{{BONUS_FAST_ACTION}} esta disponivel apenas para:
- Os primeiros {{X}} inscritos, OU
- Quem entrar nas primeiras {{X}} horas

Depois disso, esse bonus sai da oferta.
Voce ainda pode entrar, mas sem o {{BONUS}}.
```

---

## Sales Page Stack Section

### Stack Reveal Script

```
Veja tudo que voce recebe:

MODULO 1: {{NOME}}
{{O_QUE_APRENDE}}
Valor: R${{X}}

MODULO 2: {{NOME}}
{{O_QUE_APRENDE}}
Valor: R${{X}}

[continua...]

BONUS #1: {{NOME}}
{{DESCRICAO}}
Valor: R${{X}}

BONUS #2: {{NOME}}
{{DESCRICAO}}
Valor: R${{X}}

[continua...]

VALOR TOTAL: R${{SOMA}}

MAS VOCE NAO VAI PAGAR ISSO.

Seu investimento hoje:

R${{PRECO}}

Ou {{X}}x de R${{PARCELA}}

[CTA]
```

---

## Stack Validation Checklist

- [ ] Core product solves main problem
- [ ] Each bonus has independent value
- [ ] Bonuses don't cannibalize core
- [ ] Price anchoring is believable
- [ ] Guarantee removes risk
- [ ] Scarcity is 100% real
- [ ] Payment plan available
- [ ] ROI is calculable
- [ ] Stack total > 10x price

---

*Template Version: 1.0*
*Framework: Product Launch Formula - Launch Stack*


---

## Referência: templates/plf-launch-timeline-tmpl.md

# Launch Timeline Template

> **Framework**: Product Launch Formula (Jeff Walker)
> **Purpose**: Plan and track complete launch timeline
> **Duration**: Adjust based on launch type

---

## Launch Overview

| Field | Information |
|-------|-------------|
| **Product Name** | {{PRODUTO}} |
| **Launch Type** | [ ] Seed [ ] Internal [ ] JV [ ] Live [ ] Evergreen |
| **Target Revenue** | R${{X}} |
| **List Size** | {{X}} subscribers |
| **Cart Open Date** | {{DATA}} |
| **Cart Close Date** | {{DATA}} |
| **Total Duration** | {{X}} weeks |

---

## Phase 1: Pre-Prelaunch (Weeks -6 to -3)

### Week -6: Foundation

| Day | Task | Owner | Status |
|-----|------|-------|--------|
| Mon | Finalize product/offer | | [ ] |
| Tue | Define avatar | | [ ] |
| Wed | Create lead magnet | | [ ] |
| Thu | Setup landing pages | | [ ] |
| Fri | Prepare survey | | [ ] |

**Deliverables:**
- [ ] Product outline complete
- [ ] Avatar document complete
- [ ] Lead magnet ready
- [ ] Opt-in page live

### Week -5: Research & List Building

| Day | Task | Owner | Status |
|-----|------|-------|--------|
| Mon | Send survey to list | | [ ] |
| Tue | Analyze responses | | [ ] |
| Wed | Begin PLC scripting | | [ ] |
| Thu | Test email deliverability | | [ ] |
| Fri | Competitor research | | [ ] |

**Deliverables:**
- [ ] Survey sent
- [ ] {{X}}+ responses collected
- [ ] Key objections identified
- [ ] Language patterns documented

### Week -4: Content Creation

| Day | Task | Owner | Status |
|-----|------|-------|--------|
| Mon | Script PLC1 | | [ ] |
| Tue | Script PLC2 | | [ ] |
| Wed | Script PLC3 | | [ ] |
| Thu | Record/Create PLCs | | [ ] |
| Fri | Edit PLCs | | [ ] |

**Deliverables:**
- [ ] PLC1 draft complete
- [ ] PLC2 draft complete
- [ ] PLC3 draft complete

### Week -3: Preparation

| Day | Task | Owner | Status |
|-----|------|-------|--------|
| Mon | Finalize PLCs | | [ ] |
| Tue | Create sales page draft | | [ ] |
| Wed | Write email sequences | | [ ] |
| Thu | Setup automations | | [ ] |
| Fri | Begin list warming | | [ ] |

**Deliverables:**
- [ ] All PLCs finalized
- [ ] Sales page 80% done
- [ ] Email sequences drafted
- [ ] Automations tested

---

## Phase 2: Pre-Prelaunch Execution (Week -2)

### Week -2: Warm Up

| Day | Task | Owner | Status |
|-----|------|-------|--------|
| Mon | Teaser email #1 | | [ ] |
| Tue | Social media teaser | | [ ] |
| Wed | Teaser email #2 | | [ ] |
| Thu | "Coming soon" announcement | | [ ] |
| Fri | Final tech checks | | [ ] |
| Sat | Rest / Buffer | | [ ] |
| Sun | Final prep | | [ ] |

**Deliverables:**
- [ ] List engaged (open rate up)
- [ ] Anticipation building
- [ ] Tech fully tested

---

## Phase 3: Prelaunch (Week -1)

### Standard 7-Day Prelaunch

| Day | Content | Email | Social | Status |
|-----|---------|-------|--------|--------|
| Day 1 (Mon) | PLC1 Live | Announce + Reminder | Post + Stories | [ ] |
| Day 2 (Tue) | PLC1 Engagement | Engagement email | Engagement | [ ] |
| Day 3 (Wed) | PLC2 Live | Announce + Reminder | Post + Stories | [ ] |
| Day 4 (Thu) | PLC2 Engagement | Engagement email | Engagement | [ ] |
| Day 5 (Fri) | PLC3 Live | Announce + Reminder | Post + Stories | [ ] |
| Day 6 (Sat) | Anticipation | "Tomorrow" email | Countdown | [ ] |
| Day 7 (Sun) | CART OPENS | See Open Cart | See Open Cart | [ ] |

### Prelaunch Email Schedule

| Email | Day | Time | Subject | Status |
|-------|-----|------|---------|--------|
| PLC1 Announce | Day 1 | 10:00 | {{SUBJECT}} | [ ] |
| PLC1 Reminder | Day 1 | 19:00 | {{SUBJECT}} | [ ] |
| Engagement | Day 2 | 10:00 | {{SUBJECT}} | [ ] |
| PLC2 Announce | Day 3 | 10:00 | {{SUBJECT}} | [ ] |
| PLC2 Reminder | Day 3 | 19:00 | {{SUBJECT}} | [ ] |
| Engagement | Day 4 | 10:00 | {{SUBJECT}} | [ ] |
| PLC3 Announce | Day 5 | 10:00 | {{SUBJECT}} | [ ] |
| PLC3 Reminder | Day 5 | 19:00 | {{SUBJECT}} | [ ] |
| Tomorrow | Day 6 | 19:00 | {{SUBJECT}} | [ ] |

---

## Phase 4: Open Cart (Days 1-5)

### Day 1 - Launch Day

| Time | Action | Status |
|------|--------|--------|
| 08:00 | Send Email #1 (OPEN) | [ ] |
| 08:30 | Post on social media | [ ] |
| 09:00 | Monitor sales/tech | [ ] |
| 14:00 | Send Email #2 (Response) | [ ] |
| 14:30 | Social media update | [ ] |
| 20:00 | Send Email #3 (Q&A/BTS) | [ ] |
| 21:00 | Day 1 debrief | [ ] |

**Day 1 Target:** {{X}} sales (25% of total)

### Day 2

| Time | Action | Status |
|------|--------|--------|
| 10:00 | Send Email (Case Study) | [ ] |
| 11:00 | Social post | [ ] |
| 15:00 | Respond to questions | [ ] |
| End of day | Track metrics | [ ] |

### Day 3

| Time | Action | Status |
|------|--------|--------|
| 10:00 | Send Email (FAQ) | [ ] |
| 11:00 | Social post | [ ] |
| 15:00 | Live Q&A (optional) | [ ] |
| End of day | Track metrics | [ ] |

### Day 4

| Time | Action | Status |
|------|--------|--------|
| 10:00 | Send Email (Penultimo dia) | [ ] |
| 11:00 | Social post (urgency) | [ ] |
| 19:00 | Additional content | [ ] |
| End of day | Prep final day | [ ] |

### Day 5 - Final Day

| Time | Action | Status |
|------|--------|--------|
| 08:00 | Send Email #1 (Last Day) | [ ] |
| 09:00 | Social media (urgency) | [ ] |
| 14:00 | Send Email #2 (Afternoon) | [ ] |
| 15:00 | Social stories | [ ] |
| 19:00 | Send Email #3 (Evening) | [ ] |
| 20:00 | Live countdown (optional) | [ ] |
| 22:00 | Send Email #4 (Final) | [ ] |
| 23:00 | Final push social | [ ] |
| 23:30 | Send Email #5 (30 min) | [ ] |
| 23:59 | CART CLOSES | [ ] |

**Day 5 Target:** {{X}} sales (50% of total)

### Open Cart Email Schedule

| Email | Day | Time | Subject | Status |
|-------|-----|------|---------|--------|
| Cart Open #1 | Day 1 | 08:00 | | [ ] |
| Cart Open #2 | Day 1 | 14:00 | | [ ] |
| Cart Open #3 | Day 1 | 20:00 | | [ ] |
| Case Study | Day 2 | 10:00 | | [ ] |
| FAQ | Day 3 | 10:00 | | [ ] |
| Penultimo | Day 4 | 10:00 | | [ ] |
| Last Day #1 | Day 5 | 08:00 | | [ ] |
| Last Day #2 | Day 5 | 14:00 | | [ ] |
| Last Day #3 | Day 5 | 19:00 | | [ ] |
| Final | Day 5 | 22:00 | | [ ] |

---

## Phase 5: Post-Launch (Week +1)

### Day After Close

| Task | Owner | Status |
|------|-------|--------|
| Send "Cart Closed" email | | [ ] |
| Welcome email to buyers | | [ ] |
| Process any pending payments | | [ ] |
| Celebrate! | | [ ] |

### Week +1 Tasks

| Day | Task | Owner | Status |
|-----|------|-------|--------|
| Mon | Buyer onboarding | | [ ] |
| Tue | Collect testimonials | | [ ] |
| Wed | Analyze metrics | | [ ] |
| Thu | Document learnings | | [ ] |
| Fri | Plan upsells/next launch | | [ ] |

---

## Key Metrics Tracker

### Pre-Launch Metrics

| Metric | Target | Actual |
|--------|--------|--------|
| Survey response rate | 5-15% | |
| PLC1 view rate | 50%+ | |
| PLC2 view rate | 40%+ | |
| PLC3 view rate | 35%+ | |
| Comment engagement | {{X}}+ | |

### Open Cart Metrics

| Metric | Target | Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Total |
|--------|--------|-------|-------|-------|-------|-------|-------|
| Sales | | | | | | | |
| Revenue | | | | | | | |
| Open Rate | 40%+ | | | | | | |
| Click Rate | 10%+ | | | | | | |
| Conversion | 2-5% | | | | | | |

### Revenue by Day

| Day | Target (%) | Target ($) | Actual |
|-----|-----------|------------|--------|
| Day 1 | 25% | R${{X}} | |
| Day 2 | 8% | R${{X}} | |
| Day 3 | 8% | R${{X}} | |
| Day 4 | 9% | R${{X}} | |
| Day 5 | 50% | R${{X}} | |
| **Total** | **100%** | **R${{X}}** | |

---

## Team Responsibilities

| Role | Person | Responsibilities |
|------|--------|-----------------|
| Launch Lead | | Overall coordination |
| Content | | PLCs, emails, copy |
| Tech | | Pages, automations, checkout |
| Social | | Posts, stories, engagement |
| Support | | Customer questions |
| Ads (if any) | | Paid traffic |

---

## Emergency Contacts

| Issue | Contact | Phone/Email |
|-------|---------|-------------|
| Tech emergency | | |
| Payment issues | | |
| General support | | |

---

## Notes & Adjustments

```
[Space for notes during launch]
```

---

*Template Version: 1.0*
*Framework: Product Launch Formula - Timeline*


---

## Referência: templates/plf-objection-crusher-tmpl.md

# Objection Crusher Template

> **Framework**: Product Launch Formula (Jeff Walker)
> **Purpose**: Map and crush objections throughout the launch
> **When to Use**: Before launch, during PLC creation, for FAQ

---

## Objection Discovery

### Sources to Mine

- [ ] Pre-prelaunch survey responses
- [ ] Comments on PLCs
- [ ] Reply emails
- [ ] Social media DMs
- [ ] Past launch feedback
- [ ] Competitor reviews
- [ ] Customer interviews

### Objection Collection Sheet

| # | Objection (exact words) | Source | Frequency | Category |
|---|------------------------|--------|-----------|----------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | |
| 10 | | | | |

### Category Legend
- P = Price/Money
- T = Time
- TR = Trust
- SD = Self-Doubt
- TI = Timing
- L = Legitimacy
- R = Results
- O = Other

---

## The Big 5 Objections

### Objection #1
**Category:** {{CATEGORY}}
**Exact Words:** "{{OBJECTION}}"
**Frequency:** Mentioned by {{X}}% of prospects
**Underlying Fear:** {{WHAT_THEY_REALLY_FEAR}}

**Crush Strategy:**

```
Acknowledge:
"{{VALIDATION_STATEMENT}}"

Reframe:
"{{REFRAME_STATEMENT}}"

Proof:
"{{NOME}} tinha a mesma preocupacao. {{RESULTADO}}"

Bridge:
"{{CONNECTION_TO_SOLUTION}}"
```

**Where to Address:**
- [ ] PLC1
- [ ] PLC2
- [ ] PLC3
- [ ] Sales Page FAQ
- [ ] Open Cart Email

---

### Objection #2
**Category:** {{CATEGORY}}
**Exact Words:** "{{OBJECTION}}"
**Frequency:** Mentioned by {{X}}%
**Underlying Fear:** {{WHAT_THEY_REALLY_FEAR}}

**Crush Strategy:**

```
Acknowledge:
"{{VALIDATION_STATEMENT}}"

Reframe:
"{{REFRAME_STATEMENT}}"

Proof:
"{{NOME}} tinha a mesma preocupacao. {{RESULTADO}}"

Bridge:
"{{CONNECTION_TO_SOLUTION}}"
```

**Where to Address:**
- [ ] PLC1
- [ ] PLC2
- [ ] PLC3
- [ ] Sales Page FAQ
- [ ] Open Cart Email

---

### Objection #3
**Category:** {{CATEGORY}}
**Exact Words:** "{{OBJECTION}}"
**Frequency:** Mentioned by {{X}}%
**Underlying Fear:** {{WHAT_THEY_REALLY_FEAR}}

**Crush Strategy:**

```
Acknowledge:
"{{VALIDATION_STATEMENT}}"

Reframe:
"{{REFRAME_STATEMENT}}"

Proof:
"{{NOME}} tinha a mesma preocupacao. {{RESULTADO}}"

Bridge:
"{{CONNECTION_TO_SOLUTION}}"
```

**Where to Address:**
- [ ] PLC1
- [ ] PLC2
- [ ] PLC3
- [ ] Sales Page FAQ
- [ ] Open Cart Email

---

### Objection #4
**Category:** {{CATEGORY}}
**Exact Words:** "{{OBJECTION}}"
**Frequency:** Mentioned by {{X}}%
**Underlying Fear:** {{WHAT_THEY_REALLY_FEAR}}

**Crush Strategy:**

```
Acknowledge:
"{{VALIDATION_STATEMENT}}"

Reframe:
"{{REFRAME_STATEMENT}}"

Proof:
"{{NOME}} tinha a mesma preocupacao. {{RESULTADO}}"

Bridge:
"{{CONNECTION_TO_SOLUTION}}"
```

**Where to Address:**
- [ ] PLC1
- [ ] PLC2
- [ ] PLC3
- [ ] Sales Page FAQ
- [ ] Open Cart Email

---

### Objection #5
**Category:** {{CATEGORY}}
**Exact Words:** "{{OBJECTION}}"
**Frequency:** Mentioned by {{X}}%
**Underlying Fear:** {{WHAT_THEY_REALLY_FEAR}}

**Crush Strategy:**

```
Acknowledge:
"{{VALIDATION_STATEMENT}}"

Reframe:
"{{REFRAME_STATEMENT}}"

Proof:
"{{NOME}} tinha a mesma preocupacao. {{RESULTADO}}"

Bridge:
"{{CONNECTION_TO_SOLUTION}}"
```

**Where to Address:**
- [ ] PLC1
- [ ] PLC2
- [ ] PLC3
- [ ] Sales Page FAQ
- [ ] Open Cart Email

---

## Objection Response Frameworks

### Framework 1: Feel-Felt-Found

```
"Eu entendo como voce se sente.
{{NOME}} sentiu a mesma coisa.
O que {{ELE/ELA}} descobriu foi que {{RESULTADO}}."
```

### Framework 2: Yes, And...

```
"Sim, {{VALIDAR_OBJECAO}}.
E e exatamente por isso que {{SOLUCAO}}.
{{PROVA}}."
```

### Framework 3: The Real Question

```
"A pergunta real nao e '{{OBJECAO}}'.
A pergunta real e '{{REFRAME}}'.
E a resposta e {{SOLUCAO}}."
```

### Framework 4: Cost of Inaction

```
"Entendo a preocupacao com {{OBJECAO}}.
Mas quanto custa NAO resolver isso?
Em {{TEMPO}}, voce tera {{CONSEQUENCIA}}."
```

### Framework 5: Proof Stack

```
"Deixa eu te mostrar porque isso funciona:
- {{NOME_1}}: {{RESULTADO}}
- {{NOME_2}}: {{RESULTADO}}
- {{NOME_3}}: {{RESULTADO}}
Nao e para alguns sortudos. E replicavel."
```

---

## PLC Objection Mapping

### PLC1: Plant Seeds
```
Objetvo: Mencionar que objecoes existem, criar curiosidade

"Eu sei que voce pode estar pensando '{{OBJECAO_COMUM}}'.
Vou falar sobre isso nos proximos videos."
```

### PLC2: Crush Main Objections
```
Objetivo: Destruir 3-5 principais objecoes com prova

Objecoes a abordar em PLC2:
1. {{OBJECAO_1}} - Via case study de {{NOME}}
2. {{OBJECAO_2}} - Via dados/estatisticas
3. {{OBJECAO_3}} - Via FAQ segment
```

### PLC3: Remove Final Friction
```
Objetivo: Resolver objecoes de timing/decisao

Objecoes a abordar em PLC3:
1. "Nao e o momento certo" - Custo de esperar
2. "Preciso pensar" - O que muda pensando mais?
3. "Como sei que e para mim" - Criterios claros
```

---

## FAQ Section Template

### Para Sales Page / Open Cart Email

**"{{OBJECAO_1}}?"**
```
{{RESPOSTA}}
```

**"{{OBJECAO_2}}?"**
```
{{RESPOSTA}}
```

**"{{OBJECAO_3}}?"**
```
{{RESPOSTA}}
```

**"{{OBJECAO_4}}?"**
```
{{RESPOSTA}}
```

**"{{OBJECAO_5}}?"**
```
{{RESPOSTA}}
```

---

## Case Studies por Objecao

| Objecao | Case Study | Situacao Similar | Resultado |
|---------|------------|------------------|-----------|
| "Nao tenho tempo" | {{NOME}} | {{CONTEXTO}} | {{RESULTADO}} |
| "E caro" | {{NOME}} | {{CONTEXTO}} | {{RESULTADO}} |
| "Nao funciona pra mim" | {{NOME}} | {{CONTEXTO}} | {{RESULTADO}} |
| "Ja tentei antes" | {{NOME}} | {{CONTEXTO}} | {{RESULTADO}} |
| "Nao e o momento" | {{NOME}} | {{CONTEXTO}} | {{RESULTADO}} |

---

## Objection Handling Checklist

### Pre-Launch
- [ ] All major objections identified
- [ ] Case studies mapped to objections
- [ ] Responses written for each
- [ ] PLC placement decided
- [ ] FAQ section drafted

### During Launch
- [ ] Monitor comments for new objections
- [ ] Respond to objection emails same day
- [ ] Add surprise objections to FAQ
- [ ] Use objections as content fodder

### Post-Launch
- [ ] Document objections that blocked sales
- [ ] Survey non-buyers about objections
- [ ] Update templates for next launch

---

## Scripts for Live Q&A

### When Someone Raises an Objection Live

```
"Otima pergunta. Muita gente pensa isso.

Deixa eu te contar sobre {{NOME}}...

{{ELE/ELA}} tinha exatamente essa mesma preocupacao.

{{O_QUE_ACONTECEU}}

Faz sentido?"
```

### When You Don't Have a Perfect Answer

```
"Essa e uma pergunta importante.

Vou ser honesto: {{VERDADE_TRANSPARENTE}}.

O que posso te dizer e que {{COMPENSACAO}}.

E voce tem {{GARANTIA}} para testar sem risco."
```

---

*Template Version: 1.0*
*Framework: Product Launch Formula - Objection Handling*


---

## Referência: templates/plf-open-cart-day1-tmpl.md

# Open Cart Day 1 Emails Template

> **Framework**: Product Launch Formula (Jeff Walker)
> **Day 1 Stats**: ~25% of total sales happen on Day 1
> **Emails**: 2-3 emails
> **Triggers to Activate**: Events, Social Proof, Anticipation

---

## Email #1 - WE ARE OPEN (8:00-9:00 AM)

### Subject Lines (choose one):
- E AGORA. Acesso liberado.
- [ABERTO] {{PRODUTO}} esta disponivel
- As portas estao abertas
- Seu acesso esta pronto
- Comeca agora: {{PRODUTO}}

### Body:

```
{{NOME}},

E agora.

As inscricoes do {{PRODUTO}} estao oficialmente abertas.

[QUERO GARANTIR MINHA VAGA]

Nos ultimos {{X}} dias, voce viu:
- {{RECAP_PLC1}}
- {{RECAP_PLC2}}
- {{RECAP_PLC3}}

Agora e hora de dar o proximo passo.

O que esta incluido:

{{MODULO_1}} - {{BENEFICIO}}
{{MODULO_2}} - {{BENEFICIO}}
{{MODULO_3}} - {{BENEFICIO}}

Bonus:
+ {{BONUS_1}} (valor: R${{X}})
+ {{BONUS_2}} (valor: R${{X}})
+ {{BONUS_3}} (valor: R${{X}})

Garantia de {{X}} dias: Se nao funcionar para voce, devolvo 100%.

Investimento: R${{PRECO}}
(ou {{X}}x de R${{PARCELA}})

[QUERO COMECAR AGORA]

As inscricoes ficam abertas ate {{DATA}} as {{HORA}}.
Depois disso, a porta fecha.

{{ASSINATURA}}

PS: {{FAST_ACTION_BONUS}} so esta disponivel para os primeiros {{X}} inscritos.
Nao sei quanto tempo vai durar.
```

---

## Email #2 - FIRST RESPONSE (2:00-3:00 PM)

### Subject Lines (choose one):
- Uau, voces vieram com tudo
- [Update] {{X}} pessoas ja entraram
- As primeiras reacoes...
- Voce viu a resposta?

### Body:

```
{{NOME}},

Eu sabia que a resposta seria boa.
Mas isso superou minhas expectativas.

Nas ultimas {{X}} horas:
- {{X}} pessoas ja garantiram acesso
- A caixa de entrada ta lotada de mensagens de "consegui!"
- O grupo ja esta aquecendo

Algumas mensagens que recebi:

"{{QUOTE_1}}" - {{NOME_1}}

"{{QUOTE_2}}" - {{NOME_2}}

Se voce ainda esta na cerca...

Deixa eu te lembrar o que esta em jogo:

SEM o {{PRODUTO}}:
- {{CONSEQUENCIA_1}}
- {{CONSEQUENCIA_2}}
- {{CONSEQUENCIA_3}}

COM o {{PRODUTO}}:
- {{BENEFICIO_1}}
- {{BENEFICIO_2}}
- {{BENEFICIO_3}}

[GARANTIR MINHA VAGA]

Faltam {{X}} dias para as inscricoes fecharem.

{{ASSINATURA}}

PS: Aquele {{FAST_ACTION_BONUS}}? Ainda tem vagas, mas ta indo rapido.
```

---

## Email #3 - Q&A / Behind the Scenes (7:00-8:00 PM)

### Subject Lines (choose one):
- Por dentro do {{PRODUTO}}
- Suas perguntas, respondidas
- O que acontece depois de entrar
- FAQ: Tudo que voce precisa saber

### Body:

```
{{NOME}},

Recebi muitas perguntas hoje.

Vou responder as principais aqui:

**"Quanto tempo preciso dedicar?"**
{{RESPOSTA}}

**"Funciona para {{SITUACAO_ESPECIFICA}}?"**
{{RESPOSTA}}

**"E se eu nao conseguir resultado?"**
{{RESPOSTA_GARANTIA}}

**"Tenho acesso por quanto tempo?"**
{{RESPOSTA}}

**"Como funciona o suporte?"**
{{RESPOSTA}}

---

Deixa eu te mostrar o que acontece DEPOIS que voce entra:

1. Acesso imediato a {{AREA_DE_MEMBROS}}
2. {{PRIMEIRO_PASSO}} - comeca em minutos
3. {{SEGUNDO_PASSO}} - nas primeiras 24h
4. {{TERCEIRO_PASSO}} - na primeira semana

Em {{TEMPO}}, voce ja vai estar {{RESULTADO_RAPIDO}}.

[QUERO COMECAR AGORA]

O acesso fecha {{DIA}} as {{HORA}}.

Qualquer outra duvida? Responde esse email.

{{ASSINATURA}}

PS: Amanha vou compartilhar a historia de {{NOME_CASE}}.
E uma das mais impressionantes que ja vi.
Fica de olho.
```

---

## Day 1 Social Media Posts

### Post #1 (Morning - with link)
```
As portas do {{PRODUTO}} estao oficialmente ABERTAS.

Nos ultimos {{X}} dias, mostrei:
✓ {{PLC1_POINT}}
✓ {{PLC2_POINT}}
✓ {{PLC3_POINT}}

Agora e sua vez de agir.

Link na bio / Link nos stories

As inscricoes fecham {{DIA}}.
```

### Post #2 (Afternoon - social proof)
```
{{X}} pessoas ja entraram no {{PRODUTO}} hoje.

Algumas mensagens que recebi:

"{{QUOTE_1}}"
"{{QUOTE_2}}"

Voce e o proximo?

[Link]
```

### Post #3 (Evening - Story sequence)
```
Story 1: "Dia 1 de inscricoes: INSANO"
Story 2: [Screenshot de vendas ou mensagens]
Story 3: "Se voce ta na cerca, lembra..."
Story 4: "A decisao e sua. Mas a oportunidade tem prazo."
Story 5: [Link para inscricao]
```

---

## Day 1 Metrics to Track

| Metrica | Benchmark | Seu Resultado |
|---------|-----------|---------------|
| Email 1 Open Rate | 40-50% | |
| Email 1 Click Rate | 10-15% | |
| Sales Day 1 | 25% of total | |
| Cart Abandons | Track for retargeting | |
| Support Tickets | Monitor closely | |

---

## Contingency Scenarios

### If sales are slower than expected:
- Check tech (emails delivered? checkout working?)
- Send additional email in evening
- Post in social media
- Consider live Q&A

### If getting objection questions:
- Add FAQ email same day
- Address in social media
- Plan for PLC-style objection content

### If fast action bonus runs out:
- Announce it's gone
- Create urgency for next deadline
- Don't create fake scarcity

---

*Template Version: 1.0*
*Framework: Product Launch Formula - Open Cart Day 1*


---

## Referência: templates/plf-open-cart-final-tmpl.md

# Open Cart Final Day Emails Template

> **Framework**: Product Launch Formula (Jeff Walker)
> **Last Day Stats**: ~50% of total sales happen on the LAST day
> **Emails**: 3-5 emails
> **Triggers to Activate**: Scarcity, Events, Social Proof, Urgency

---

## Email #1 - LAST DAY ANNOUNCEMENT (8:00-9:00 AM)

### Subject Lines (choose one):
- [ULTIMO DIA] Fecha as 23:59
- Ultimo dia para {{PRODUTO}}
- E hoje. A porta fecha a meia-noite.
- {{NOME}}, e agora ou nunca
- Horas finais: {{PRODUTO}}

### Body:

```
{{NOME}},

E hoje.

As 23:59, as inscricoes do {{PRODUTO}} fecham.

E eu nao sei quando vao reabrir.
Pode ser meses. Pode ser nunca neste formato.

Se voce assistiu os videos...
Se voce viu as transformacoes...
Se voce sabe que isso e para voce...

Agora e hora de decidir.

[GARANTIR MINHA VAGA ANTES DE FECHAR]

O que voce recebe:

✓ {{MODULO_1}}
✓ {{MODULO_2}}
✓ {{MODULO_3}}
✓ {{BONUS_1}}
✓ {{BONUS_2}}
✓ {{BONUS_3}}
✓ {{GARANTIA}}

Investimento: R${{PRECO}} (ou {{X}}x)

Depois de meia-noite, esse link para de funcionar.

A decisao e sua.

{{ASSINATURA}}

PS: Se voce ainda tem duvidas, responde esse email.
Eu vou ler e responder hoje.
```

---

## Email #2 - EMOTIONAL / STORY (2:00-3:00 PM)

### Subject Lines (choose one):
- Se voce esta na cerca...
- Uma historia antes de voce decidir
- Por que eu realmente faco isso
- Estou preocupado com voce
- A verdade sobre a decisao que voce esta tomando

### Body:

```
{{NOME}},

Deixa eu ser honesto com voce.

Eu sei que voce esta pensando.
"Sera que e pra mim?"
"Sera que vai funcionar?"
"Sera que consigo pagar?"

{{NOME_CASE}} pensava a mesma coisa.

{{HISTORIA_EMOCIONAL_DO_CASE}}

Ela quase nao entrou.
Quase deixou passar.

Hoje, {{ELA}} {{RESULTADO}}.

"{{QUOTE_EMOCIONAL}}"

---

Eu nao posso decidir por voce.

Mas posso te dizer isso:

A pessoa que voce quer ser...
O resultado que voce quer ter...
A vida que voce quer viver...

Nao vai acontecer por acaso.

Vai acontecer por decisao.

E hoje e o ultimo dia para tomar essa decisao.

[TOMAR A DECISAO AGORA]

Ate as 23:59,
{{ASSINATURA}}

PS: Daqui {{X}} horas, essa oportunidade fecha.
E com ela, a chance de comecar essa transformacao agora.
```

---

## Email #3 - URGENCY INTENSIFIES (6:00-7:00 PM)

### Subject Lines (choose one):
- [{{X}} HORAS] O tempo esta acabando
- A porta fecha em {{X}} horas
- Aviso final: {{PRODUTO}}
- Isso nao vai durar

### Body:

```
{{NOME}},

{{X}} horas restantes.

Eu nao vou ficar repetindo o que voce ja sabe.

Voce viu os videos.
Voce viu os resultados.
Voce sabe o que esta em jogo.

A unica pergunta que resta e:

Voce vai agir ou vai deixar passar?

[AGIR AGORA - {{X}} HORAS RESTANTES]

As 23:59, o link para de funcionar.
Nao tem extensao.
Nao tem excecao.
Nao tem "depois".

E hoje.

{{ASSINATURA}}
```

---

## Email #4 - FINAL HOURS (9:00-10:00 PM)

### Subject Lines (choose one):
- [2 HORAS] Fechando...
- Ultima chamada real
- Antes de voce decidir nao entrar
- 120 minutos
- E isso.

### Body:

```
{{NOME}},

2 horas.

E tudo que resta.

Depois disso, voce vai acordar amanha e...

Opcao A: Acorda sabendo que tomou a decisao.
Que daqui {{TEMPO}} vai estar {{RESULTADO}}.
Que finalmente comecou.

Opcao B: Acorda e a oportunidade passou.
Mais um dia igual ao anterior.
Mais um "devia ter..."

Eu nao posso escolher por voce.

Mas posso garantir uma coisa:
Se voce entrar e nao funcionar, tem {{X}} dias de garantia total.
Risco zero.

O unico risco real e nao tentar.

[ENTRAR ANTES DE FECHAR]

2 horas, {{NOME}}.
Decida.

{{ASSINATURA}}

PS: Vou enviar mais um email nos minutos finais.
Mas se voce ja sabe a resposta... nao espere.
```

---

## Email #5 - FINAL MINUTES (11:00-11:30 PM)

### Subject Lines (choose one):
- [30 MIN] Fechando agora
- E isso, {{NOME}}
- Ultima chance
- O link vai cair em {{X}} minutos
- Decidiu?

### Body:

```
{{NOME}},

30 minutos.

Nao tenho mais argumentos.
Nao tenho mais historias.
Nao tenho mais provas.

Voce tem todas as informacoes.

Agora e so voce e sua decisao.

[ENTRAR AGORA - ULTIMOS MINUTOS]

A meia-noite, acabou.

Nos vemos do outro lado.
Ou nao.

{{ASSINATURA}}
```

---

## Final Day Social Media

### Morning Post
```
ULTIMO DIA.

O {{PRODUTO}} fecha hoje as 23:59.

{{X}} pessoas ja entraram desde {{DATA}}.
Voce ainda tem tempo.

[Link]

Depois de meia-noite, a oportunidade fecha.
```

### Afternoon Story Sequence
```
Story 1: "Ultimo dia. Respira fundo."
Story 2: "{{X}} horas restantes"
Story 3: "Recebi essa mensagem hoje: [screenshot]"
Story 4: "Se voce esta na cerca... assiste isso"
Story 5: [Link para inscricao]
```

### Evening Live (Opcional)
```
Tema: "Q&A Final - Ultimas horas do {{PRODUTO}}"
- Responder duvidas ao vivo
- Mostrar por dentro do produto
- Criar urgencia real
- Direcionar para pagina de vendas
```

### Final Hour Posts
```
Story: "1 HORA"
Story: "30 MIN"
Story: "Fechando..."
Story: "Fechou. Obrigado a todos que entraram."
```

---

## After Cart Close

### Email: Cart Closed

**Subject:** Fechou.

```
{{NOME}},

As inscricoes do {{PRODUTO}} fecharam.

Se voce entrou: bem-vindo. Seu acesso esta ativo.
Comece aqui: [LINK]

Se voce nao entrou: eu entendo. O timing nem sempre e certo.
Continue acompanhando meu conteudo.
Quando eu tiver novidades, voce sera o primeiro a saber.

Para quem entrou:
Nos vemos la dentro.
Sua jornada comeca agora.

{{ASSINATURA}}
```

---

## Final Day Metrics

| Metrica | Benchmark | Seu Resultado |
|---------|-----------|---------------|
| Email Opens (all day) | 50-65% | |
| Sales Last Day | 50% of total | |
| Sales Last 3 Hours | 20-30% of day | |
| Final Email Conversions | Highest of all | |

---

## Contingency: Extension

**When to consider:**
- Tech issue prevented sales
- Legitimate reason announced

**If extending:**
```
{{NOME}},

Eu disse que fechava as 23:59.
E fecharia.

Mas recebi [RAZAO LEGITIMA - problema tecnico / muitos pedidos].

Por isso, decidi estender por mais {{X}} horas.

O novo deadline e {{DATA/HORA}}.

[LINK]

E a ultima vez. Depois disso, acabou de verdade.

{{ASSINATURA}}
```

**Warning:** Use VERY sparingly. Fake extensions destroy credibility.

---

*Template Version: 1.0*
*Framework: Product Launch Formula - Open Cart Final Day*


---

## Não incluído neste arquivo (está no zip da skill)

- `references/checklist-plf-todos.md`
- `templates/plf-plc1-script-tmpl.md`
- `templates/plf-plc2-script-tmpl.md`
- `templates/plf-plc3-script-tmpl.md`
- `templates/plf-preprelaunch-survey-tmpl.md`
- `templates/plf-rubric-scores-tmpl.yaml`
- `templates/plf-sales-page-blueprint-tmpl.md`
