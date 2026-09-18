# hybrid-marca · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-marca.md` uma skill chamada hybrid-marca. Quando eu pedir algo como "documenta a marca [nome]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# A MARCA · Núcleo, promessas, personalidade, voz e valores

A marca escrita antes de virar logo: o núcleo, as promessas que faz e as que não faz, a personalidade, o DNA de voz e os valores. O agente elicita e grava no brandbook, e as skills de copy passam a respeitar esse arquivo. Marca sem documento é gosto do dia.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "documenta a marca [nome]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit brand yaml | `references/elicit-brand-yaml.md` |
| template que esta skill preenche | `templates/brand-brandbook.yaml` |
| template que esta skill preenche | `templates/brand-messaging-framework.yaml` |
| template que esta skill preenche | `templates/brand-positioning-statement.yaml` |


## Procedure

1. Resolva a pasta: `hybrid.pasta`. Se não existir, crie. Para cada template listado acima que ainda não exista na pasta, copie-o de `templates/` para a pasta com o nome original (ex.: `company-icp.yaml` → `icp.yaml`).
2. Abra a referência do procedimento e siga as fases na ordem. Onde ela escrever `{pasta}/…`, leia a pasta configurada. Onde ela citar um comando `*algo` ou um script `.cjs`/`.sh`, trate como nome da etapa, não como algo a executar.
3. Conduza a elicitação em blocos: apresente o resumo do que já está preenchido, pergunte só o que falta, aceite 'não sei ainda' e deixe `null`. Nunca preencha com suposição.
4. Grave o YAML na pasta, preservando a estrutura do template. Calcule a completude: campos preenchidos ÷ campos obrigatórios; atualize `metadata.completeness_percentage` e `status`.
5. Se a completude ficou abaixo de 85%, diga quais seções faltam e o que perguntar na próxima sessão. Não declare o arquivo pronto.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pular o Diagnosis Gate quando a referência o pede. O nível de consciência muda todas as perguntas seguintes.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O YAML existe na pasta configurada e parseia (`python3 -c 'import yaml,sys; yaml.safe_load(open(sys.argv[1]))' <arquivo>` sai 0).
2. `metadata.completeness_percentage` foi recalculado e bate com a contagem de campos não-nulos.
3. Nenhum campo obrigatório foi preenchido com valor que o usuário não deu; os pendentes estão em `null` e listados.
4. Se abaixo de 85%, a resposta diz as seções faltantes e não declara pronto.
5. Nenhum dado foi enviado para fora da pasta do negócio.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/elicit-brand-yaml.md`
- `templates/brand-brandbook.yaml`
- `templates/brand-messaging-framework.yaml`
- `templates/brand-positioning-statement.yaml`


---

## Referência: references/elicit-brand-yaml.md

# Task: Elicit Brand (YAML)

```yaml
task:
  id: elicit-brand-yaml
  name: Elicitação de Brand Guidelines (YAML)
  agent: cmo-architect
  elicit: true
  output_format: yaml
  target_template: company/brand.yaml
```

## Descrição

O CMO conduz elicitação estruturada para popular o template `brand.yaml` com guidelines completos da marca — core, promessas, personalidade, voice DNA e valores.

## Prerequisites

- Bootstrap executado
- Negócio criado e templates scaffolded
- Recomendado: `founder-dna.yaml` e `company-profile.yaml` preenchidos

## Usage

```
*elicit-brand-yaml {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/company/brand.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/brand.md` (Sistema A, se existir): pré-popular campos correspondentes.
3. Ler `{pasta}/company/founder-dna.yaml` (se existir): usar personalidade do fundador como base para personalidade da marca.
4. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Brand Core (3 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Brand Core"
  questions:
    - id: brand_name
      text: "Qual é o nome oficial da marca?"
      required: true
      maps_to: brand_core.brand_name

    - id: tagline
      text: "Qual é a tagline ou slogan da marca? (uma frase-promessa)"
      required: true
      maps_to: brand_core.brand_tagline

    - id: purpose
      text: "Qual é o propósito da marca? Por que ela existe além de vender?"
      required: true
      maps_to: brand_core.brand_purpose

    - id: core_belief
      text: "Qual é a crença central da marca sobre o potencial dos clientes?"
      required: true
      maps_to: brand_essence.core_belief
```

### Fase 2: Promessas e Inimigos (5 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Promessas e Inimigos"
  questions:
    - id: marketing_promise
      text: "Qual é a promessa de marketing? (o que vocês dizem publicamente)"
      required: true
      maps_to: promises.marketing_promise

    - id: actual_promise
      text: "Qual é a promessa real? (o que vocês de fato entregam)"
      required: true
      maps_to: promises.actual_promise

    - id: true_promise
      text: "Qual é a promessa profunda? (a transformação mais profunda que vocês acreditam ser possível)"
      required: true
      maps_to: promises.true_promise

    - id: not_enemy
      text: "O que a maioria das pessoas ACHA que é o problema dos seus clientes?"
      required: true
      maps_to: enemies.NOT_the_enemy

    - id: real_enemy
      text: "Qual é o REAL inimigo/problema? O que realmente impede seus clientes?"
      required: true
      maps_to: enemies.THE_real_enemy
```

### Fase 3: Personalidade da Marca (5 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Personalidade da Marca"
  intro: "Vou pedir para classificar a personalidade da marca em escalas de 1-10."
  questions:
    - id: warmth
      text: "CALOR: Quão calorosa é a marca? (1=fria/corporativa, 10=muito acolhedora)"
      required: true
      maps_to: personality.warmth_level

    - id: directness
      text: "DIRETIVIDADE: Quão direta é a comunicação? (1=muito sutil, 10=extremamente direta)"
      required: true
      maps_to: personality.directness_level

    - id: formality
      text: "FORMALIDADE: Quão formal é o tom? (1=muito casual, 10=muito formal)"
      required: true
      maps_to: personality.formality_level

    - id: confidence
      text: "CONFIANÇA: Quão assertiva é a marca? (1=humilde/cautelosa, 10=máxima convicção)"
      required: true
      maps_to: personality.confidence_level

    - id: personality_descriptions
      text: "Para cada dimensão, dê uma descrição curta. Ex: 'Calor 7: acolhedor mas não meloso'"
      required: true
      maps_to: personality
```

### Fase 4: Voice DNA (6 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Voice DNA"
  questions:
    - id: power_words
      text: "Quais são as POWER WORDS da marca? (5-10 palavras que carregam energia e identidade)"
      required: true
      maps_to: voice_dna.power_words

    - id: signature_phrases
      text: "Quais são as frases-assinatura? (expressões que a marca sempre usa)"
      required: true
      maps_to: voice_dna.signature_phrases

    - id: metaphors
      text: "Quais metáforas a marca usa? (ex: 'construir', 'sistema operacional', 'arsenal')"
      required: true
      maps_to: voice_dna.metaphors

    - id: forbidden_words
      text: "Quais palavras a marca NUNCA usa? E por quê?"
      required: true
      maps_to: voice_dna.forbidden_words

    - id: communication_examples
      text: "Dê 2-3 exemplos de como a marca se comunica (frases reais de posts, emails, etc.)"
      required: false
      maps_to: voice_dna

    - id: anti_examples
      text: "Dê 2-3 exemplos de como a marca NUNCA se comunicaria"
      required: false
      maps_to: voice_dna
```

### Fase 5: Valores da Marca (4 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Valores da Marca"
  questions:
    - id: values_count
      text: "Quantos valores core a marca tem? (recomendo 3-6)"
      required: true
      maps_to: core_values

    - id: values_details
      text: "Para cada valor, diga: nome, princípio (uma frase), como se manifesta na prática, e impacto no cliente."
      required: true
      maps_to: core_values

    - id: value_hierarchy
      text: "Se tivesse que escolher UM valor que define tudo, qual seria?"
      required: true
      maps_to: core_values

    - id: value_tension
      text: "Existe alguma tensão entre valores? (ex: velocidade vs qualidade). Como resolvem?"
      required: false
      maps_to: core_values
```

### Fase 6: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `brand.yaml`:**
   - Campos respondidos: substituir `FILL_THIS` pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` / `INCOMPLETE`.
3. **Calcular completude:**
   ```yaml
   metadata:
     completed_fields: {count}
     completeness_percentage: {percentage}
     status: "COMPLETE" or "INCOMPLETE"
   ```
4. **Salvar** em `{pasta}/company/brand.yaml`.
5. **Relatório** com seções e completude.

## Convenções de Output YAML

- Campos respondidos: substituir `FILL_THIS` pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Metadata: atualizar `completed_fields` e `completeness_percentage`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Todas as perguntas obrigatórias respondidas
- [ ] YAML gerado é válido
- [ ] Personalidade tem 4 dimensões com scores 1-10
- [ ] Voice DNA tem power words, phrases, metaphors, forbidden
- [ ] Valores com name + principle + manifestation + impact
- [ ] Arquivo salvo em `{pasta}/company/brand.yaml`

## Next Steps

Após brand:
1. `*elicit-pricing-strategy {slug}` - Estratégia de preços
2. Ou `*setup-business-profile {slug}` para pipeline completo

---

*Task do Squad Hybrid Workspace - CMO Architect*


---

## Referência: templates/brand-brandbook.yaml

---
metadata:
  schema: "brand.brandbook"
  version: "1.0.0"
  status: "INCOMPLETE"
  owner_role: "FILL_THIS"
  last_updated: "FILL_THIS"
  product_name: FILL_THIS
identity:
  brand_name: "FILL_THIS"
  slug: "FILL_THIS"
  naming_evolution:
    - "FILL_THIS"
    - "FILL_THIS"
    - "FILL_THIS"
core:
  purpose: "FILL_THIS"
  essence: "FILL_THIS"
  trueline_primary: "FILL_THIS"
  category: "FILL_THIS"
  owned_word: "FILL_THIS"
positioning:
  primary_audience: "FILL_THIS"
  enemy_core: "FILL_THIS"
  value_claim: "FILL_THIS"
archetype_mix:
  magician: "FILL_THIS"
  sage: "FILL_THIS"
  explorer: "FILL_THIS"
voice:
  always_use:
    - "FILL_THIS"
    - "FILL_THIS"
    - "FILL_THIS"
  avoid_use:
    - "FILL_THIS"
    - "FILL_THIS"
    - "FILL_THIS"
references:
  canonical_doc: "FILL_THIS"
  strategic_source: "FILL_THIS"
  domain_source: "FILL_THIS"


---

## Referência: templates/brand-messaging-framework.yaml

---
metadata:
  schema: "brand.messaging_framework"
  version: "1.0.0"
  status: "INCOMPLETE"
  last_updated: FILL_THIS
  product_name: FILL_THIS
storybrand_sb7:
  hero: "FILL_THIS"
  problem: "FILL_THIS"
  guide: "FILL_THIS"
  plan: "FILL_THIS"
  cta: "FILL_THIS"
  success: "FILL_THIS"
  failure_avoided: "FILL_THIS"
messaging_pillars:
  - "FILL_THIS"
  - "FILL_THIS"
  - "FILL_THIS"
claims:
  - claim: "FILL_THIS"
    evidence: "FILL_THIS"
references:
  source_doc: "FILL_THIS"


---

## Referência: templates/brand-positioning-statement.yaml

---
metadata:
  schema: "brand.positioning_statement"
  version: "1.0.0"
  status: "INCOMPLETE"
  last_updated: FILL_THIS
  product_name: FILL_THIS
positioning:
  category: "FILL_THIS"
  frame_of_reference: "FILL_THIS"
  claim: "FILL_THIS"
  reasons_to_believe: []
owned_word: "FILL_THIS"
competitive_map:
  direct_competitors: []
  white_space: "FILL_THIS"
references:
  source_doc: "FILL_THIS"
