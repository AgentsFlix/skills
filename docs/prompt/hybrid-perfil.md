# hybrid-perfil · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-perfil.md` uma skill chamada hybrid-perfil. Quando eu pedir algo como "monta o perfil do negócio [nome]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# QUEM SOMOS · Missão, visão, credenciais e o perfil completo, em seis fases

O perfil completo da empresa em YAML: quem é, para quem existe, o que promete, que credenciais sustentam a promessa. O agente conduz a elicitação em seis fases com gate de 85% de completude por seção, e não deixa avançar com campo vazio fingindo que está pronto. É a base que todas as outras skills Hybrid leem.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "monta o perfil do negócio [nome]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| setup business profile | `references/setup-business-profile.md` |
| elicit company profile | `references/elicit-company-profile.md` |
| elicit vision | `references/elicit-vision.md` |
| elicit credentials | `references/elicit-credentials.md` |
| template que esta skill preenche | `templates/company-company-profile.yaml` |
| template que esta skill preenche | `templates/company-credentials.yaml` |
| template que esta skill preenche | `templates/culture-mission-vision-positioning.yaml` |


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

- `references/elicit-company-profile.md`
- `references/elicit-credentials.md`
- `references/elicit-vision.md`
- `references/setup-business-profile.md`
- `references/workflow-business-profile-pipeline.yaml`
- `templates/company-company-profile.yaml`
- `templates/company-credentials.yaml`
- `templates/culture-mission-vision-positioning.yaml`


---

## Referência: references/elicit-company-profile.md

# Task: Elicit Company Profile (YAML)

```yaml
task:
  id: elicit-company-profile
  name: Elicitação do Perfil da Empresa (YAML)
  agent: workspace-chief
  elicit: true
  output_format: yaml
  target_template: company/company-profile.yaml
```

## Descrição

O COO conduz elicitação estruturada para popular o template `company-profile.yaml` com dados completos da empresa. Este arquivo é o perfil institucional — quem é a empresa, missão, visão, valores, portfolio e métricas.

## Prerequisites

- Bootstrap executado (`{pasta}/user.yaml` existe)
- Negócio criado (`{pasta}/` existe)
- Templates scaffolded (`*scaffold-templates` executado)

## Usage

```
*elicit-company-profile {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/company/company-profile.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo ao usuário, perguntar se quer atualizar ou completar campos vazios.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/mission-vision.md` (Sistema A, se existir):
   - **Se existe:** Pré-popular campos de mission/vision/values a partir do conteúdo .md.
   - Informar: "Encontrei dados do Sistema A (mission-vision.md). Vou pré-popular os campos correspondentes."
3. Definir modo: `CREATE` (template vazio) ou `UPDATE` (campos parciais).

### Fase 1: Fundação da Empresa (5 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Fundação da Empresa"
  questions:
    - id: legal_name
      text: "Qual é a razão social completa da empresa?"
      required: true
      maps_to: company_essence.legal_name

    - id: trade_name
      text: "Qual é o nome fantasia / marca da empresa?"
      required: true
      maps_to: company_essence.trade_name

    - id: year_founded
      text: "Em que ano a empresa foi fundada?"
      required: true
      maps_to: company_essence.year_founded

    - id: headquarters
      text: "Qual é a sede da empresa? (cidade, país)"
      required: true
      maps_to: company_essence.headquarters

    - id: one_liner
      text: "Em uma frase, o que sua empresa faz e para quem?"
      required: true
      maps_to: company_essence.one_liner

    - id: origin
      text: "Por que você fundou essa empresa? Qual foi o insight ou frustração que levou à criação?"
      required: false
      maps_to: company_essence.origin_story_short
```

**Após respostas:** Atualizar seção `company_essence` no YAML. Definir `company_essence.status: COMPLETE` se todos preenchidos.

### Fase 2: Missão, Visão e Valores (6 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Missão, Visão e Valores"
  questions:
    - id: mission_statement
      text: "Qual é a missão da empresa? (o que vocês fazem, o propósito)"
      required: true
      maps_to: mission.statement

    - id: who_benefits
      text: "Quem se beneficia diretamente do que vocês fazem? (liste 2-3 grupos)"
      required: true
      maps_to: mission.who_benefits

    - id: transformation
      text: "Qual é a transformação que vocês entregam? (estado antes → estado depois)"
      required: true
      maps_to: mission.transformation

    - id: vision_statement
      text: "Onde vocês querem estar em 5-10 anos? Qual é a visão de futuro?"
      required: true
      maps_to: vision.statement

    - id: values
      text: "Quais são os 3 valores fundamentais que guiam as decisões da empresa? Para cada um, diga: o nome, a definição, e como vocês vivem isso no dia-a-dia."
      required: true
      maps_to: values

    - id: proof_of_traction
      text: "Que evidências mostram que vocês estão caminhando na direção certa? (métricas, marcos, conquistas)"
      required: false
      maps_to: vision.proof_of_traction
```

**Após respostas:** Atualizar seções `mission`, `vision`, `values`. Calcular status por seção.

### Fase 3: Posicionamento (4 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Posicionamento"
  questions:
    - id: target_market
      text: "Quem é o público-alvo da empresa como um todo? (não o ICP detalhado, mas o mercado)"
      required: true
      maps_to: positioning.target_market

    - id: unique_angle
      text: "O que torna a empresa única no mercado? O que vocês têm que ninguém mais tem?"
      required: true
      maps_to: positioning.unique_angle

    - id: primary_promise
      text: "Qual é a promessa principal da empresa ao mercado?"
      required: true
      maps_to: positioning.primary_promise

    - id: credibility
      text: "Por que alguém deveria acreditar nessa promessa? Quais são as provas de credibilidade?"
      required: true
      maps_to: positioning.credibility_foundation
```

### Fase 4: Portfolio de Produtos (4 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Portfolio de Produtos"
  questions:
    - id: products
      text: "Quais produtos/serviços a empresa oferece? Para cada um, diga: nome, tipo (curso, comunidade, consultoria, SaaS, etc.), e posicionamento."
      required: true
      maps_to: products

    - id: revenue_distribution
      text: "Como a receita se distribui entre os produtos? (% aproximada para cada)"
      required: false
      maps_to: products.revenue_by_product

    - id: flagship
      text: "Qual é o produto carro-chefe? O que gera mais receita ou mais reputação?"
      required: true
      maps_to: products.product_1

    - id: pipeline
      text: "Tem algum produto planejado mas ainda não lançado?"
      required: false
      maps_to: products
```

### Fase 5: Mercado (4 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Mercado"
  questions:
    - id: tam
      text: "Qual é o tamanho estimado do mercado que vocês atuam? (TAM)"
      required: false
      maps_to: market_analysis.total_addressable_market

    - id: segment
      text: "Como vocês definem o segmento de mercado? (educação empresarial, SaaS, consultoria, etc.)"
      required: true
      maps_to: market_analysis.market_segment

    - id: competitors
      text: "Quais são os 3 principais concorrentes ou alternativas que seu cliente considera?"
      required: true
      maps_to: market_analysis.competitive_landscape

    - id: timing
      text: "Por que agora é o momento certo para a empresa? Que tendência ou mudança de mercado favorece vocês?"
      required: false
      maps_to: market_analysis.market_timing
```

### Fase 6: Stage e Métricas (5 perguntas)

```yaml
elicitation:
  phase: 6
  name: "Stage e Métricas"
  questions:
    - id: stage
      text: "Em qual estágio a empresa está? (Seed: <$100K ARR | Growth: $100K-$1M | Scale: $1M-$10M | Mature: >$10M)"
      required: true
      maps_to: stage.current_stage

    - id: revenue
      text: "Qual é a receita anual atual (aproximada)?"
      required: false
      maps_to: key_metrics.annual_revenue

    - id: growth
      text: "Qual é o crescimento ano a ano? (%)"
      required: false
      maps_to: key_metrics.year_over_year_growth

    - id: customers
      text: "Quantos clientes ativos vocês têm?"
      required: true
      maps_to: key_metrics.customer_count

    - id: retention
      text: "Qual é a taxa de retenção de clientes? E o LTV médio?"
      required: false
      maps_to: key_metrics.customer_retention_rate
```

### Fase 7: Voz da Empresa (2 perguntas)

```yaml
elicitation:
  phase: 7
  name: "Voz da Empresa"
  questions:
    - id: tone
      text: "Como a empresa se comunica? Qual é o tom: formal/informal, técnico/acessível, sério/descontraído?"
      required: true
      maps_to: company_voice.tone

    - id: vocabulary
      text: "Quais são os termos-chave que a empresa usa (e quais NUNCA usa)?"
      required: false
      maps_to: company_voice.vocabulary
```

### Fase 8: Síntese e Output

1. **Processar respostas** e mapear para os campos do template YAML.
2. **Popular `company-profile.yaml`:**
   - Campos respondidos: substituir valores placeholder pelo valor real.
   - Campos não respondidos: manter como `null` ou placeholder original.
   - Status por seção: `COMPLETE` se todos os campos preenchidos, `INCOMPLETE` caso contrário.
3. **Calcular completude:**
   ```yaml
   metadata:
     completed_fields: {count}
     completeness_percentage: {percentage}
     status: "COMPLETE" or "INCOMPLETE"
   ```
4. **Salvar** em `{pasta}/company/company-profile.yaml`.
5. **Relatório:**
   ```
   Company Profile para: {slug}

   Seções:
     company_essence: COMPLETE ✅
     mission: COMPLETE ✅
     vision: COMPLETE ✅
     values: COMPLETE ✅
     positioning: COMPLETE ✅
     products: INCOMPLETE ⚠️ (faltam revenue estimates)
     market_analysis: INCOMPLETE ⚠️
     stage: COMPLETE ✅
     company_voice: COMPLETE ✅

   Completude: 87% (89/102 campos)
   Gate: PASSED ✅ (>= 85%)
   ```

## Convenções de Output YAML

- Campos respondidos: substituir `FILL_THIS`, `YOUR_VERSION`, `null`, ou exemplos pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` se todos preenchidos, `INCOMPLETE` caso contrário
- Metadata: atualizar `completed_fields` e `completeness_percentage`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Todas as perguntas obrigatórias respondidas
- [ ] YAML gerado é válido (parseable)
- [ ] Estrutura idêntica ao template source
- [ ] Metadata de completude calculada
- [ ] Arquivo salvo em `{pasta}/company/company-profile.yaml`
- [ ] Se mission-vision.md existia, campos pré-populados

## Next Steps

Após company-profile:
1. `*elicit-founder-dna {slug}` - DNA do fundador
2. `*elicit-team-structure {slug}` - Estrutura do time
3. Ou `*setup-business-profile {slug}` para pipeline completo

---

*Task do Squad Hybrid Workspace - COO Orchestrator*


---

## Referência: references/elicit-credentials.md

# Task: Elicit Credentials (YAML)

```yaml
task:
  id: elicit-credentials
  name: Elicitação de Credenciais e Provas de Autoridade (YAML)
  agent: vision-strategist
  elicit: true
  output_format: yaml
  target_template: company/credentials.yaml
```

## Descrição

O Vision Chief conduz elicitação para documentar todas as credenciais e provas de autoridade do fundador — educação, prêmios, palestras, mídia, clientes notáveis, presença online e thought leadership. O output popula `credentials.yaml`.

## Prerequisites

- Bootstrap executado
- Templates scaffolded
- Recomendado: `founder-dna.yaml` preenchido (para contexto de background)

## Usage

```
*elicit-credentials {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/company/credentials.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/founder-dna.yaml` (se existir) para contexto.
3. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Educação Formal (6 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Educação Formal"
  questions:
    - id: degree_1
      text: "Qual é sua formação principal? (instituição, país, tipo de grau, área, ano de conclusão)"
      required: true
      maps_to: formal_education.degree_1

    - id: degree_2
      text: "Tem outra formação relevante? (MBA, mestrado, especialização)"
      required: false
      maps_to: formal_education.degree_2

    - id: cert_1
      text: "Tem certificações profissionais? Qual a principal? (nome, organização emissora, ano)"
      required: false
      maps_to: formal_education.professional_certifications.cert_1

    - id: cert_2
      text: "Outra certificação relevante?"
      required: false
      maps_to: formal_education.professional_certifications.cert_2

    - id: education_summary
      text: "Como você resume sua trajetória educacional em 2-3 frases?"
      required: true
      maps_to: formal_education.total_education_summary

    - id: continuing_education
      text: "O que você estuda atualmente? Cursos, mentorias, programas?"
      required: false
      maps_to: formal_education
```

### Fase 2: Prêmios e Reconhecimento (4 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Prêmios e Reconhecimento"
  questions:
    - id: award_1
      text: "Recebeu algum prêmio ou reconhecimento profissional? Qual o mais importante? (nome, organização, ano, categoria)"
      required: false
      maps_to: awards.award_1

    - id: award_2
      text: "Outro prêmio ou reconhecimento?"
      required: false
      maps_to: awards.award_2

    - id: mentions
      text: "Foi mencionado ou citado por alguém relevante? (publicação, pessoa, o que disseram)"
      required: false
      maps_to: awards.recognition_mentions

    - id: industry_recognition
      text: "Tem algum reconhecimento da indústria? (rankings, listas, associações)"
      required: false
      maps_to: awards
```

### Fase 3: Palestras e Eventos (5 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Palestras e Eventos"
  questions:
    - id: conferences
      text: "Em quais conferências ou eventos já palestrou? (nome do evento, ano, tema)"
      required: false
      maps_to: speaking_engagements

    - id: keynotes
      text: "Já fez alguma keynote? Qual a mais relevante?"
      required: false
      maps_to: speaking_engagements

    - id: podcasts
      text: "Participou de podcasts? Quais os mais relevantes?"
      required: false
      maps_to: speaking_engagements

    - id: workshops
      text: "Conduziu workshops ou masterclasses? Onde e sobre o quê?"
      required: false
      maps_to: speaking_engagements

    - id: speaking_frequency
      text: "Com que frequência participa de eventos como palestrante?"
      required: false
      maps_to: speaking_engagements
```

### Fase 4: Mídia e Publicações (6 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Mídia e Publicações"
  questions:
    - id: interviews
      text: "Já deu entrevistas para mídia? Quais as mais relevantes? (veículo, ano, assunto)"
      required: false
      maps_to: media_appearances

    - id: articles
      text: "Publicou artigos? Onde? Sobre o quê?"
      required: false
      maps_to: published_works

    - id: books
      text: "Escreveu livros ou e-books? (título, ano, tema)"
      required: false
      maps_to: published_works

    - id: columns
      text: "Tem coluna fixa em alguma publicação?"
      required: false
      maps_to: media_appearances

    - id: video_content
      text: "Produz conteúdo em vídeo regularmente? (YouTube, Instagram, etc.)"
      required: false
      maps_to: media_appearances

    - id: media_highlights
      text: "Qual a aparição na mídia de que mais se orgulha?"
      required: false
      maps_to: media_appearances
```

### Fase 5: Clientes Notáveis (4 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Clientes Notáveis"
  questions:
    - id: notable_clients
      text: "Quais são seus clientes mais notáveis ou conhecidos? (nomes que podem ser mencionados publicamente)"
      required: false
      maps_to: notable_clients

    - id: case_studies
      text: "Tem case studies documentados? Quais os resultados mais impressionantes?"
      required: false
      maps_to: notable_clients

    - id: testimonial_highlight
      text: "Qual é o depoimento de cliente mais poderoso que você tem?"
      required: false
      maps_to: notable_clients

    - id: client_types
      text: "Que tipo de empresa/pessoa são seus melhores clientes? (tamanho, setor, perfil)"
      required: true
      maps_to: notable_clients
```

### Fase 6: Presença Online (5 perguntas)

```yaml
elicitation:
  phase: 6
  name: "Presença Online"
  questions:
    - id: website
      text: "Qual é o site principal? (URL)"
      required: true
      maps_to: online_presence.website

    - id: linkedin
      text: "Qual é o LinkedIn? (URL e número de conexões/seguidores)"
      required: false
      maps_to: online_presence.linkedin

    - id: social_primary
      text: "Qual é sua rede social principal? (plataforma, @, seguidores)"
      required: true
      maps_to: online_presence

    - id: social_secondary
      text: "Outras redes sociais relevantes?"
      required: false
      maps_to: online_presence

    - id: email_list
      text: "Tem lista de email? Qual o tamanho?"
      required: false
      maps_to: online_presence
```

### Fase 7: Thought Leadership (5 perguntas)

```yaml
elicitation:
  phase: 7
  name: "Thought Leadership"
  questions:
    - id: courses
      text: "Quais cursos ou programas você criou? (nome, formato, número de alunos)"
      required: false
      maps_to: thought_leadership

    - id: frameworks
      text: "Criou algum framework, método ou modelo proprietário? (nome, descrição)"
      required: false
      maps_to: thought_leadership

    - id: communities
      text: "Lidera alguma comunidade? (nome, tamanho, plataforma)"
      required: false
      maps_to: thought_leadership

    - id: influence_reach
      text: "Qual é o alcance total da sua influência? (seguidores + alunos + lista + comunidade)"
      required: false
      maps_to: thought_leadership

    - id: unique_contribution
      text: "Qual é sua contribuição única para a área? O que você trouxe que não existia antes?"
      required: true
      maps_to: thought_leadership
```

### Fase 8: Transparência (3 perguntas)

```yaml
elicitation:
  phase: 8
  name: "Transparência"
  intro: "Estas perguntas são opcionais mas poderosas para autenticidade."
  questions:
    - id: failures
      text: "Quais foram seus maiores fracassos ou erros profissionais? O que aprendeu?"
      required: false
      maps_to: transparency.failures

    - id: criticisms
      text: "Quais são as críticas mais comuns que recebe? Como responde?"
      required: false
      maps_to: transparency.criticisms

    - id: corrections
      text: "Já mudou de opinião publicamente sobre algo? O que e por quê?"
      required: false
      maps_to: transparency.corrections
```

### Fase 9: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `credentials.yaml`:**
   - Campos respondidos: substituir placeholders pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` / `INCOMPLETE`.
3. **Gerar `credential_summary`** automaticamente:
   - Resumir em 3-4 frases as credenciais mais fortes
   - Identificar "top 3 provas de autoridade"
4. **Calcular completude** e salvar.
5. **Relatório** com seções e completude.

## Convenções de Output YAML

- Campos respondidos: substituir placeholders pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Metadata: atualizar `status` e `last_updated`
- A maioria dos campos é opcional — completude considera apenas seções com pelo menos 1 campo preenchido
- Gate: >= 85% para prosseguir no pipeline (relaxado para credentials: seções com 0 dados são excluídas do cálculo)

## Validation

- [ ] YAML gerado é válido
- [ ] Pelo menos educação ou experiência profissional documentada
- [ ] Presença online principal documentada
- [ ] Credential summary gerado
- [ ] Arquivo salvo em `{pasta}/company/credentials.yaml`

## Next Steps

Após credentials:
1. Completar pipeline com `*setup-business-profile {slug}`
2. Dados alimentam `authority-story.yaml` na Fase 6 do pipeline

---

*Task do Squad Hybrid Workspace - Vision Chief (CEO)*


---

## Referência: references/elicit-vision.md

# Task: Elicit Vision

```yaml
task:
  id: elicit-vision
  name: Elicitação de Missão e Visão
  agent: vision-strategist
  elicit: true
```

## Descrição

O CEO (Vision Chief) conduz elicitação profunda para definir missão, visão e direção estratégica da empresa.

## Workflow

### Fase 1: Contexto

1. Verificar se `{pasta}/user.yaml` existe (bootstrap completo).
2. Verificar se `workspace/company/mission-vision.md` já existe:
   - **Se existe:** Ler conteúdo e apresentar ao usuário. Perguntar se deseja refinar/atualizar ou manter.
   - **Se não existe:** Prosseguir com elicitação completa.

### Fase 2: Elicitação

```yaml
elicitation:
  questions:
    - id: problem
      text: "Qual problema fundamental sua empresa resolve?"
      required: true

    - id: why
      text: "Por que sua empresa existe além de gerar lucro?"
      required: true

    - id: future
      text: "Onde você quer que a empresa esteja em 5 anos?"
      required: true

    - id: impact
      text: "Qual é o impacto que você quer causar no mundo?"
      required: true

    - id: unique
      text: "O que torna sua abordagem única?"
      required: true

    - id: values
      text: "Quais são os 3-5 valores que guiam suas decisões?"
      required: false
```

### Fase 3: Síntese

Processar respostas para gerar:
1. **Missão** (1-2 frases) - O "porquê"
2. **Visão** (1-2 frases) - O "para onde"
3. **Valores** (lista) - O "como"
4. **Direção Estratégica** (parágrafo) - O "caminho"

### Fase 4: Output

Criar `workspace/company/mission-vision.md`:

```markdown
# Missão e Visão

## Missão

{missão sintetizada}

## Visão

{visão sintetizada}

## Valores

1. {valor_1}
2. {valor_2}
3. {valor_3}

## Direção Estratégica

{narrativa de direção estratégica}

---

## Contexto da Elicitação

**Problema que resolvemos:** {problem}

**Por que existimos:** {why}

**Onde queremos chegar:** {future}

**Impacto desejado:** {impact}

**O que nos torna únicos:** {unique}

---

*Gerado via Squad Hybrid Workspace (CEO) em {date}*
```

## Validação

- [ ] Todas as perguntas obrigatórias respondidas
- [ ] Missão clara e concisa
- [ ] Visão inspiradora mas alcançável
- [ ] Valores bem definidos
- [ ] Arquivo salvo em `workspace/company/mission-vision.md`


---

## Referência: references/setup-business-profile.md

# Task: Setup Business Profile

```yaml
task:
  id: setup-business-profile
  name: Pipeline Completo de Perfil de Negócio
  agent: workspace-chief
  elicit: true
  output_format: yaml
  workflow: business-profile-pipeline
```

## Descrição

O COO orquestra o pipeline completo de elicitação de perfil de negócio em 6 fases. Este é o comando master que coordena todos os agentes (Vision Chief, CMO, COO) para popular os 7 YAMLs core do negócio.

## Prerequisites

- Bootstrap executado (`{pasta}/user.yaml` existe)
- Negócio criado (`{pasta}/` existe)

## Usage

```
*setup-business-profile {slug}
```

**Exemplo:**
```
*setup-business-profile lendaria
```

## Pipeline: 6 Fases

### FASE 0: Pre-Flight

**Objetivo:** Garantir que a infraestrutura está pronta.

1. Executar preflight workspace-first:
   - `bash (script do runtime de origem; não se aplica no Hermes)`
   - `bash (script do runtime de origem; não se aplica no Hermes)`
2. Executar `*workspace-context {slug}` (`load-workspace-context.md`) para snapshot inicial.
3. Verificar bootstrap (`{pasta}/user.yaml`).
4. Verificar negócio existe (`{pasta}/`).
5. Se negócio não existe: executar `*add-business {slug}`.
6. Executar `*scaffold-templates {slug}` para copiar templates.
7. Verificar que 16 arquivos YAML foram scaffolded.
8. Apresentar overview do pipeline ao usuário:

```
Pipeline de Perfil de Negócio: {slug}

6 Fases, ~210 perguntas, 7 YAMLs core.

FASE 1: Formulário Básico → company-profile.yaml (parcial)
FASE 2: Deep Dive Fundador → founder-dna.yaml + credentials.yaml
FASE 3: Empresa + Time → company-profile.yaml (completo) + team-structure.yaml
FASE 4: ICP Completo → icp.yaml
FASE 5: Brand + Pricing → brand.yaml + pricing-strategy.yaml
FASE 6: Enriquecimento → cross-references + completeness report

Você pode pausar entre fases e retomar depois.
Deseja começar? (sim/não)
```

### FASE 1: Formulário Básico (~15 min)

**Agente:** workspace-chief
**Método:** FORMULÁRIO (respostas curtas e diretas)
**Task:** `*elicit-company-profile {slug}` (apenas campos básicos da Fase 1-2)

**Escopo desta fase:**
- company_essence (legal_name, trade_name, year, headquarters, one_liner)
- mission/vision básico
- stage

**Gate:** Seção `company_essence` deve ter status `COMPLETE`.

**Ao concluir:**
```
FASE 1 completa ✅
company-profile.yaml: 35% preenchido
Seção company_essence: COMPLETE

Próxima: FASE 2 — Deep Dive Fundador
Continuar? (sim/pular/pausar)
```

### FASE 2: Deep Dive Fundador (~40 min)

**Agente:** vision-strategist
**Método:** ENTREVISTA (conversacional, profunda)
**Tasks:** `*elicit-founder-dna {slug}` + `*elicit-credentials {slug}`

**Sequência:**
1. Handoff para Vision Chief: "Passando para o CEO para deep dive no fundador."
2. Executar `elicit-founder-dna` (7 fases, ~35 perguntas).
3. Executar `elicit-credentials` (9 fases, ~40 perguntas).
4. Retornar ao COO.

**Gate:** `founder-dna.yaml` >= 85% completude.

**Ao concluir:**
```
FASE 2 completa ✅
founder-dna.yaml: 92% preenchido — PASSED
credentials.yaml: 78% preenchido — OK (muitos campos opcionais)

Próxima: FASE 3 — Empresa + Time
Continuar? (sim/pular/pausar)
```

### FASE 3: Empresa + Time (~30 min)

**Agente:** workspace-chief
**Método:** ENTREVISTA + FORMULÁRIO
**Tasks:** `*elicit-company-profile {slug}` (fases restantes) + `*elicit-team-structure {slug}`

**Sequência:**
1. Completar company-profile.yaml (fases 3-8: posicionamento, portfolio, mercado, métricas, voz).
2. Executar elicit-team-structure (5 fases, ~20 perguntas).

**Gate:** `company-profile.yaml` >= 85% completude.

**Ao concluir:**
```
FASE 3 completa ✅
company-profile.yaml: 87% preenchido — PASSED
team-structure.yaml: 90% preenchido — PASSED

Próxima: FASE 4 — ICP Completo
Continuar? (sim/pular/pausar)
```

### FASE 4: ICP Completo (~30 min)

**Agente:** cmo-architect
**Método:** ENTREVISTA
**Task:** `*elicit-icp-yaml {slug}`

**Sequência:**
1. Handoff para CMO: "Passando para o CMO para deep dive no ICP."
2. Diagnosis gate (2 perguntas se necessário).
3. Executar elicit-icp-yaml (7 fases, ~35 perguntas).
4. Retornar ao COO.

**Gate:** `icp.yaml` >= 85% completude.

### FASE 5: Brand + Pricing (~25 min)

**Agente:** cmo-architect
**Método:** ENTREVISTA + FORMULÁRIO
**Tasks:** `*elicit-brand-yaml {slug}` + `*elicit-pricing-strategy {slug}`

**Sequência:**
1. CMO executa elicit-brand-yaml (6 fases, ~25 perguntas).
2. CMO executa elicit-pricing-strategy (6 fases, ~25 perguntas).
3. Retornar ao COO.

**Gate:** `brand.yaml` >= 85% completude.

### FASE 6: Enriquecimento e Validação (~10 min, agente)

**Agente:** workspace-chief (sintetizado, sem perguntas ao usuário)
**Método:** SINTETIZADO

**Ações automáticas:**
1. **Cross-reference ICP vs Company Profile:**
   - Verificar que target_market (company) alinha com demographics (ICP).
   - Reportar inconsistências.
2. **Alinhamento Brand vs Founder:**
   - Verificar que personality da marca alinha com archetype do fundador.
   - Reportar tensões.
3. **Gerar authority-story.yaml:**
   - Sintetizar de founder-dna.yaml + credentials.yaml.
   - Headline + narrative + proof points.
4. **Calcular completude geral:**
   - Para cada um dos 7 YAMLs core, calcular %.
   - Reportar total.
5. **Produzir relatório de completude:**

```
═══════════════════════════════════════════
RELATÓRIO DE COMPLETUDE — {slug}
═══════════════════════════════════════════

Company:
  founder-dna.yaml:      92% ✅ PASSED
  credentials.yaml:      78% ✅ PASSED (ajustado)
  company-profile.yaml:  87% ✅ PASSED
  brand.yaml:            90% ✅ PASSED
  icp.yaml:              85% ✅ PASSED
  diagnosis.yaml:        100% ✅ COMPLETE

Operations:
  team-structure.yaml:   90% ✅ PASSED
  pricing-strategy.yaml: 88% ✅ PASSED

Sintetizados:
  authority-story.yaml:  AUTO-GERADO ✅

Cross-References:
  ICP ↔ Company Profile:  ALINHADO ✅
  Brand ↔ Founder DNA:    ALINHADO ✅ (1 tensão menor)

RESULTADO GERAL: 7/7 YAMLs >= 85% — PIPELINE COMPLETO ✅
═══════════════════════════════════════════

Próximos passos:
1. Revisar YAMLs gerados em {pasta}/
2. Executar *health-check para validação completa
3. Iniciar pipeline de produto: *add-product {slug} {product}
```

## Pause/Resume

O pipeline suporta pause/resume:
- **Pausar:** Responder "pausar" a qualquer gate. Estado salvo nos YAMLs parciais.
- **Retomar:** Executar `*setup-business-profile {slug}` novamente. Fase 0 detecta YAMLs parciais e oferece retomar de onde parou.

## Outputs

| Fase | Arquivo | Agente |
|------|---------|--------|
| 1 | company-profile.yaml (parcial) | COO |
| 2 | founder-dna.yaml, credentials.yaml | Vision Chief |
| 3 | company-profile.yaml (completo), team-structure.yaml | COO |
| 4 | icp.yaml, diagnosis.yaml | CMO |
| 5 | brand.yaml, pricing-strategy.yaml | CMO |
| 6 | authority-story.yaml, completeness-report | COO |

## Validation

- [ ] Fase 0: scaffold completo (16 arquivos)
- [ ] Fase 1-5: cada gate >= 85%
- [ ] Fase 6: cross-references sem inconsistências críticas
- [ ] Fase 6: authority-story.yaml gerado
- [ ] Todos os 7 YAMLs core >= 85% completude

---

*Task do Squad Hybrid Workspace - COO Orchestrator*


---

## Referência: references/workflow-business-profile-pipeline.yaml

name: business-profile-pipeline
version: 1.0.0
owner: workspace-chief
squad: hybrid-workspace
description: |
  Pipeline sequencial de 6 fases para elicitar e popular os 7 templates YAML
  core de um negócio. Orquestrado pelo COO, delega para Vision Chief e CMO
  conforme o domínio.
id: business-profile-pipeline
type: legacy
triggers:
  manual:
    - command: "*setup-business-profile {slug}"
      action: full_pipeline
      task: setup-business-profile.md
phases:
  - id: phase_0
    name: Pre-Flight
    agent: workspace-chief
    tasks:
      - workspace-preflight (bootstrap + essentials validation)
      - load-workspace-context
      - add-business (if needed)
      - scaffold-templates
    gate:
      condition: workspace preflight PASS and 16 YAML files exist in business directory
      type: file_check
    outputs:
      - evidence/workspace-context-summary.yaml (if slug provided)
  - id: phase_1
    name: Formulário Básico
    agent: workspace-chief
    method: formulario
    tasks:
      - elicit-company-profile (partial - phases 1-2 only)
    gate:
      condition: company_essence.status == COMPLETE
      type: section_check
      target: company/company-profile.yaml
    outputs:
      - company/company-profile.yaml (partial)
  - id: phase_2
    name: Deep Dive Fundador
    agent: vision-strategist
    method: entrevista
    tasks:
      - elicit-founder-dna
      - elicit-credentials
    gate:
      condition: completeness_percentage >= 85
      type: completeness_check
      target: company/founder-dna.yaml
    outputs:
      - company/founder-dna.yaml
      - company/credentials.yaml
  - id: phase_3
    name: Empresa + Time
    agent: workspace-chief
    method: entrevista + formulario
    tasks:
      - elicit-company-profile (remaining phases 3-8)
      - elicit-team-structure
    gate:
      condition: completeness_percentage >= 85
      type: completeness_check
      target: company/company-profile.yaml
    outputs:
      - company/company-profile.yaml (complete)
      - operations/team-structure.yaml
  - id: phase_4
    name: ICP Completo
    agent: cmo-architect
    method: entrevista
    tasks:
      - elicit-icp-yaml
    gate:
      condition: completeness_percentage >= 85
      type: completeness_check
      target: company/icp.yaml
    outputs:
      - company/icp.yaml
      - company/diagnosis.yaml (if filled during gate)
  - id: phase_5
    name: Brand + Pricing
    agent: cmo-architect
    method: entrevista + formulario
    tasks:
      - elicit-brand-yaml
      - elicit-pricing-strategy
    gate:
      condition: completeness_percentage >= 85
      type: completeness_check
      target: company/brand.yaml
    outputs:
      - company/brand.yaml
      - operations/pricing-strategy.yaml
  - id: phase_6
    name: Enriquecimento + Validação
    agent: workspace-chief
    method: sintetizado
    tasks:
      - cross-reference validation
      - authority-story synthesis
      - completeness report
    gate:
      condition: all 7 YAMLs >= 85%
      type: aggregate_check
    outputs:
      - company/authority-story.yaml (synthesized)
      - completeness-report.md
dependencies:
  tasks:
    - load-workspace-context
    - scaffold-templates
    - elicit-company-profile
    - elicit-founder-dna
    - elicit-credentials
    - elicit-team-structure
    - elicit-icp-yaml
    - elicit-brand-yaml
    - elicit-pricing-strategy
    - setup-business-profile
  agents:
    - workspace-chief
    - vision-strategist
    - cmo-architect
config:
  workspace_preflight:
    required: true
    bootstrap_script: (script do runtime de origem; não se aplica no Hermes)
    essentials_validator: (script do runtime de origem; não se aplica no Hermes)
  completeness_gate: 85
  pause_resume: true
  max_questions_per_session: 50
  estimated_total_questions: 210
  target_templates:
    company:
      - founder-dna.yaml
      - credentials.yaml
      - company-profile.yaml
      - brand.yaml
      - icp.yaml
      - diagnosis.yaml
    operations:
      - team-structure.yaml
      - pricing-strategy.yaml
    synthesized:
      - authority-story.yaml
workflow:
  id: business-profile-pipeline
  name: business-profile-pipeline
  version: 1.0.0
  description: |
    Pipeline sequencial de 6 fases para elicitar e popular os 7 templates YAML
    core de um negócio. Orquestrado pelo COO, delega para Vision Chief e CMO
    conforme o domínio.
  type: legacy
  sequence:
    - step: phase-0
      id: phase-0
      phase: 1
      phase_name: Pre-Flight
      agent: workspace-chief
      action: execute_pre-flight
      outputs:
        - evidence/workspace-context-summary.yaml (if slug provided)
      next: phase-1
    - step: phase-1
      id: phase-1
      phase: 2
      phase_name: Formulário Básico
      agent: workspace-chief
      action: formulario
      outputs:
        - company/company-profile.yaml (partial)
      next: phase-2
    - step: phase-2
      id: phase-2
      phase: 3
      phase_name: Deep Dive Fundador
      agent: vision-strategist
      action: entrevista
      outputs:
        - company/founder-dna.yaml
        - company/credentials.yaml
      next: phase-3
    - step: phase-3
      id: phase-3
      phase: 4
      phase_name: Empresa + Time
      agent: workspace-chief
      action: entrevista-formulario
      outputs:
        - company/company-profile.yaml (complete)
        - operations/team-structure.yaml
      next: phase-4
    - step: phase-4
      id: phase-4
      phase: 5
      phase_name: ICP Completo
      agent: cmo-architect
      action: entrevista
      outputs:
        - company/icp.yaml
        - company/diagnosis.yaml (if filled during gate)
      next: phase-5
    - step: phase-5
      id: phase-5
      phase: 6
      phase_name: Brand + Pricing
      agent: cmo-architect
      action: entrevista-formulario
      outputs:
        - company/brand.yaml
        - operations/pricing-strategy.yaml
      next: phase-6
    - step: phase-6
      id: phase-6
      phase: 7
      phase_name: Enriquecimento + Validação
      agent: workspace-chief
      action: sintetizado
      outputs:
        - company/authority-story.yaml (synthesized)
        - completeness-report.md
    - workflow_end:
        id: complete
        action: workflow_complete
  handoff_prompts:
    workspace-chief_to_vision-strategist: Handoff context from workspace-chief to vision-strategist. Preserve outputs, risks, and open decisions.
    vision-strategist_to_workspace-chief: Handoff context from vision-strategist to workspace-chief. Preserve outputs, risks, and open decisions.
    workspace-chief_to_cmo-architect: Handoff context from workspace-chief to cmo-architect. Preserve outputs, risks, and open decisions.
    cmo-architect_to_workspace-chief: Handoff context from cmo-architect to workspace-chief. Preserve outputs, risks, and open decisions.


---

## Referência: templates/company-company-profile.yaml

---
# COMPANY-PROFILE.YAML - Quem você é como empresa
# Purpose: Define a identidade, missão, valores e portfólio da empresa
# Guardian: Founder / CEO / CMO
# Timing: FILL ONCE - Update annually or when pivoting

metadata:
  version: "1.0"
  company_name: "YOUR_COMPANY_NAME_HERE"
  status: "INCOMPLETE"
  last_updated: "FILL_THIS"
  owner: "CEO or Founder"
  notes: |
    This file answers: "Who is YOUR_COMPANY as a company?"
    Not about products. Not about customers.
    About the INSTITUTION itself.
  product_name: FILL_THIS
# ============================================================================
# SECTION 1: COMPANY FOUNDATION
# ============================================================================
company_essence:
  # What is the company?
  legal_name: "YOUR_LEGAL_COMPANY_NAME"
  trade_name: "YOUR_BRAND_NAME_HERE"
  year_founded: YYYY
  headquarters: "CITY, COUNTRY"
  # In one sentence (the institutional promise)
  one_liner: |
    Example: "YOUR_COMPANY transforms ambitious entrepreneurs into
    systematic wealth creators through proven frameworks and elite mentorship."

    Your version:
    [YOUR ONE LINER HERE]
  # The origin (why did you start this company?)
  origin_story_short: |
    Example: "YOUR_FOUNDER spent 15 years as a consultant watching brilliant
    entrepreneurs fail due to poor systems. He created YOUR_COMPANY to
    package and scale what worked."

    Your version:
    [WHY YOU STARTED THIS]
# ============================================================================
# SECTION 2: MISSION, VISION, VALUES
# ============================================================================
mission:
  # What does the company DO?
  statement: |
    Example: "To democratize access to the systems and frameworks that
    transform entrepreneurs from chaos to predictable growth."

    Your version:
    [YOUR MISSION]
  # Who benefits?
  who_benefits:
    - "Ambitious entrepreneurs"
    - "Example stakeholder 2"
    - "Example stakeholder 3"
  # What transformation happens?
  transformation: |
    Example: "From overwhelmed generalist → systematic specialist"

    Your version:
    [WHAT CHANGES FOR THEM]
vision:
  # Where does the company want to be in 5-10 years?
  statement: |
    Example: "A global standard for entrepreneurial education where systems
    thinking is the default, not the exception."

    Your version:
    [YOUR VISION]
  # Proof points you're moving toward vision
  proof_of_traction:
    - "1,000+ alumni"
    - "Example metric"
    - "Example metric"
values:
  # Core values (not marketing fluff - actual operating principles)
  value_1:
    name: "EXAMPLE: Systems Over Inspiration"
    definition: "We teach frameworks that work, not motivational shortcuts"
    how_you_live_it: "Every curriculum is battle-tested. We remove fluff."
    contradiction_check: "What would violate this value?"
  value_2:
    name: "EXAMPLE: Proof First"
    definition: "Claims are only valid if backed by real results"
    how_you_live_it: "Case studies are authentic. We show failures too."
    contradiction_check: "What would violate this value?"
  value_3:
    name: "EXAMPLE: [YOUR VALUE]"
    definition: "[DEFINITION]"
    how_you_live_it: "[HOW YOU LIVE IT]"
    contradiction_check: "[CONTRADICTION CHECK]"
# ============================================================================
# SECTION 3: COMPANY POSITIONING
# ============================================================================
positioning:
  # How is YOUR_COMPANY different from competitors?
  target_market:
    description: "Who is the company built for?"
    example: "Ambitious entrepreneurs 25-50 with $100K-$10M businesses"
    your_version: "[YOUR TARGET]"
  unique_angle:
    description: "What makes the company uniquely positioned?"
    example: "The only education company founded by a consultant with 15 years in ops"
    your_version: "[YOUR UNIQUE ANGLE]"
  primary_promise:
    description: "What does the company promise?"
    example: "Transform your business from chaos to predictable growth using our proven systems"
    your_version: "[YOUR PRIMARY PROMISE]"
  credibility_foundation:
    description: "Why should anyone believe you?"
    points:
      - "Founder has 15 years of real experience"
      - "1,000+ success stories"
      - "Example proof point"
    your_version: "[YOUR CREDIBILITY FOUNDATION]"
# ============================================================================
# SECTION 4: PRODUCT PORTFOLIO
# ============================================================================
products:
  # What does the company sell?
  product_1:
    name: "YOUR_PRODUCT"
    type: "Membership / Community"
    positioning: "For entrepreneurs ready to systematize their business"
    annual_revenue_estimate: "$X"
    status: "ACTIVE"
    launch_date: "YYYY-MM"
  product_2:
    name: "[PRODUCT NAME]"
    type: "[PRODUCT TYPE]"
    positioning: "[POSITIONING]"
    annual_revenue_estimate: "$X"
    status: "ACTIVE / PLANNED"
    launch_date: "YYYY-MM"
  product_3:
    name: "[PRODUCT NAME]"
    type: "[PRODUCT TYPE]"
    positioning: "[POSITIONING]"
    annual_revenue_estimate: "$X"
    status: "ACTIVE / PLANNED"
    launch_date: "YYYY-MM"
  total_revenue_estimate: "$X"
  revenue_by_product:
    "YOUR_PRODUCT": "X%"
    "Product 2": "X%"
    "Product 3": "X%"
# ============================================================================
# SECTION 5: TEAM STRUCTURE
# ============================================================================
leadership_team:
  # Key people who give the company credibility
  founder_1:
    name: "YOUR_FOUNDER"
    title: "Founder & Visionary"
    role: "Strategy, Content, Teaching"
    background_summary: "15 years in consulting and operations"
    reference_file: "founder-dna.yaml"
  founder_2:
    name: "[CO-FOUNDER NAME]"
    title: "[TITLE]"
    role: "[ROLE]"
    background_summary: "[SUMMARY]"
    reference_file: "founder-dna.yaml"
  key_team_member_1:
    name: "[NAME]"
    title: "[TITLE]"
    role: "[ROLE]"
    background_summary: "[SUMMARY]"
    reference_file: "[OPTIONAL]"
team_size:
  total_headcount: X
  core_team: X
  extended_team: X
  contractors: X
# ============================================================================
# SECTION 6: MARKET POSITION
# ============================================================================
market_analysis:
  # Where does the company sit in the market?
  total_addressable_market: "$X"
  market_segment: "Entrepreneurial Education / Business Systems"
  market_growth_rate: "X% YoY"
  competitive_landscape:
    main_competitors:
      - "Competitor 1"
      - "Competitor 2"
      - "Competitor 3"
    your_advantage: |
      Example: "Founder is a practitioner, not just a teacher.
      We teach what actually works, not theory."
  market_timing:
    why_now: |
      Example: "Entrepreneurs are tired of motivational content.
      They want systems that actually scale."
    emerging_trend: "Systems thinking becoming mainstream in business education"
# ============================================================================
# SECTION 7: COMPANY STAGE & METRICS
# ============================================================================
stage:
  current_stage: "SEED / GROWTH / SCALE / MATURE"
  # SEED: Pre-product or <$100K ARR
  # GROWTH: $100K-$1M ARR, finding product-market fit
  # SCALE: $1M-$10M ARR, replicating model
  # MATURE: >$10M ARR, optimizing margins
key_metrics:
  # What metrics define company health?
  annual_revenue: "$X"
  year_over_year_growth: "X%"
  customer_count: "X"
  customer_retention_rate: "X%"
  net_revenue_retention: "X%"
  average_customer_lifetime_value: "$X"
  # Company-specific metrics
  custom_metric_1:
    name: "[METRIC NAME]"
    current_value: "X"
    target_value: "X"
  custom_metric_2:
    name: "[METRIC NAME]"
    current_value: "X"
    target_value: "X"
# ============================================================================
# SECTION 8: COMPANY VOICE & PERSONALITY
# ============================================================================
company_voice:
  # How does YOUR_COMPANY communicate?
  tone:
    primary: "Strategic, no-nonsense, results-focused"
    secondary: "Encouraging but realistic"
    avoid: "Hype, motivational fluff, theoretical"
  vocabulary:
    signature_terms:
      - "Systems"
      - "Frameworks"
      - "Proof"
      - "Scale"
    never_use:
      - "Guru"
      - "Secret"
      - "Hack"
  personality_archetype:
    archetype: "The Mentor / The Strategist"
    example: |
      Example: "Experienced guide who has been in the trenches.
      Tells you what works AND what doesn't. No BS."
    your_version: "[YOUR ARCHETYPE]"
communication_philosophy: |
  Example: "We communicate like a mentor to someone ready to level up.
  We assume intelligence. We show proof. We make systems simple."

  Your version:
  [YOUR PHILOSOPHY]
# ============================================================================
# SECTION 9: STRATEGIC PARTNERSHIPS
# ============================================================================
partnerships:
  # Who do you work with?
  partner_1:
    name: "[PARTNER NAME]"
    type: "DISTRIBUTION / TECHNOLOGY / CONTENT"
    benefit: "[WHAT YOU GET]"
    status: "ACTIVE / PLANNED"
  partner_2:
    name: "[PARTNER NAME]"
    type: "[TYPE]"
    benefit: "[WHAT YOU GET]"
    status: "ACTIVE / PLANNED"
# ============================================================================
# SECTION 10: FUTURE ROADMAP (COMPANY LEVEL)
# ============================================================================
strategic_roadmap:
  # Where is the company headed in next 12-24 months?
  priority_1:
    goal: "[GOAL]"
    timeline: "2026 Q2-Q3"
    impact: "[WHY THIS MATTERS]"
  priority_2:
    goal: "[GOAL]"
    timeline: "2026 Q3-Q4"
    impact: "[WHY THIS MATTERS]"
  priority_3:
    goal: "[GOAL]"
    timeline: "2027 Q1-Q2"
    impact: "[WHY THIS MATTERS]"
# ============================================================================
# SECTION 11: COMPANY NARRATIVE (FOR MARKETING)
# ============================================================================
brand_story:
  # The story you tell about the company (for external use)
  headline: |
    Example: "From Consultant to Movement Builder: How YOUR_FOUNDER Created
    the Systems Standard for Modern Entrepreneurs"
  narrative_structure:
    act_1_problem: |
      Example: "YOUR_FOUNDER spent 15 years as a consultant watching brilliant
      entrepreneurs fail. They had ideas, drive, passion — but no systems."
    act_2_insight: |
      Example: "He noticed a pattern: the entrepreneurs who succeeded had ONE thing
      in common — they operated by proven systems, not guesswork."
    act_3_solution: |
      Example: "He created YOUR_COMPANY to package and teach those systems.
      Not as theory. As battle-tested frameworks from real businesses."
    act_4_impact: |
      Example: "Today, 1,000+ entrepreneurs run systematic, predictable businesses
      because they learned from someone who built them."
# ============================================================================
# SECTION 12: EXTERNAL REFERENCES
# ============================================================================
references:
  # Files that reference this company-profile
  products:
    - "{pasta}/products/{product_slug}/"
    - "{pasta}/[BUSINESS_SLUG]/products/[PRODUCT_SLUG]/"
  founders:
    - "founder-dna.yaml"
  credentials:
    - "credentials.yaml"
  authority:
    - "authority-story.yaml"
# ============================================================================
# CHECKLIST: COMPANY-PROFILE COMPLETENESS
# ============================================================================
completion_checklist:
  - "[ ] Company essence filled (legal name, trade name, founding date)"
  - "[ ] One-liner is compelling and differentiating"
  - "[ ] Origin story explains WHY company exists"
  - "[ ] Mission statement is clear and inspiring"
  - "[ ] Values are lived, not posted"
  - "[ ] Positioning is unique vs competitors"
  - "[ ] Product portfolio is listed with revenue estimates"
  - "[ ] Leadership team is documented"
  - "[ ] Company voice is distinctive"
  - "[ ] Strategic roadmap is clear"
  - "[ ] Brand story is compelling"
  - "[ ] All references (founders, credentials, products) are updated"
# ============================================================================
# TEMPLATE NOTES FOR USERS
# ============================================================================
template_notes: |
  This file is company-level (not product-level).

  DO NOT put product-specific info here.
  ├─ Product positioning → businesses/[business_slug]/products/[name]/diagnosis.yaml
  ├─ Avatar info → businesses/[business_slug]/products/[name]/icp.yaml
  ├─ Offer details → businesses/[business_slug]/products/[name]/offerbook.yaml

  DO put company-level info here:
  ├─ Company mission (not product mission)
  ├─ Founder background (not product-specific expertise)
  ├─ Company values (not product benefits)

  Fill once, update annually or when pivoting significantly.


---

## Referência: templates/company-credentials.yaml

---
# CREDENTIALS.YAML - Proof of Authority (Education, Awards, Certifications)
# Purpose: Document formal credentials, education, awards, certifications, media
# Guardian: Founder / CMO / Marketing
# Timing: UPDATE REGULARLY - Add new credentials as they're earned

metadata:
  version: "1.0"
  company_name: "YOUR_COMPANY_NAME_HERE"
  founder_name: "YOUR_FOUNDER_NAME_HERE"
  status: "INCOMPLETE"
  last_updated: "FILL_THIS"
  owner: "Founder or CEO"
  notes: |
    This file is the AUDIT TRAIL of authority proof.
    Source of truth for:
    - Formal education
    - Professional certifications
    - Awards and recognition
    - Media appearances
    - Speaking engagements
    - Published works
    - Notable clients
  product_name: FILL_THIS
# ============================================================================
# SECTION 1: FORMAL EDUCATION
# ============================================================================
formal_education:
  # University degrees, professional certifications
  degree_1:
    institution: "[UNIVERSITY NAME]"
    country: "[COUNTRY]"
    degree_type: "BACHELOR / MASTER / MBA / DOCTORATE"
    field_of_study: "[FIELD]"
    graduation_year: YYYY
    relevant_to: "[WHAT EXPERTISE DOES THIS SUPPORT]"
    notes: "[ANY NOTABLE ACHIEVEMENTS]"
  degree_2:
    institution: "[INSTITUTION NAME]"
    country: "[COUNTRY]"
    degree_type: "[DEGREE TYPE]"
    field_of_study: "[FIELD]"
    graduation_year: YYYY
    relevant_to: "[WHAT EXPERTISE]"
    notes: "[ACHIEVEMENTS]"
  professional_certifications:
    cert_1:
      name: "[CERTIFICATION NAME]"
      issuing_body: "[ORGANIZATION]"
      year_earned: YYYY
      relevance: "[WHY THIS MATTERS FOR TEACHING]"
    cert_2:
      name: "[CERTIFICATION NAME]"
      issuing_body: "[ORGANIZATION]"
      year_earned: YYYY
      relevance: "[WHY THIS MATTERS]"
  total_education_summary: |
    Example: "Alan studied business administration at USP, then continued
    learning through consulting apprenticeships. Formal education: X years.
    Self-directed: 15+ years of continuous learning."
# ============================================================================
# SECTION 2: AWARDS & RECOGNITION
# ============================================================================
awards:
  # Professional awards, industry recognition
  award_1:
    name: "[AWARD NAME]"
    awarding_organization: "[ORGANIZATION]"
    year: YYYY
    category: "[WHAT WAS IT FOR]"
    significance: "[WHY THIS MATTERS]"
    public_proof: "[URL or publication]"
  award_2:
    name: "[AWARD NAME]"
    awarding_organization: "[ORGANIZATION]"
    year: YYYY
    category: "[WHAT WAS IT FOR]"
    significance: "[WHY THIS MATTERS]"
    public_proof: "[URL or publication]"
  recognition_mentions:
    # Not formal awards, but notable recognition
    mention_1:
      source: "[PUBLICATION / PERSON / ORGANIZATION]"
      year: YYYY
      claim: "Called [FOUNDER] 'the [TITLE] that [INDUSTRY] needs'"
      public_proof: "[URL]"
    mention_2:
      source: "[SOURCE]"
      year: YYYY
      claim: "[RECOGNITION QUOTE]"
      public_proof: "[URL]"
  total_awards_summary: |
    Example: "3 formal awards, 5+ media recognitions. Most prestigious: X award."
# ============================================================================
# SECTION 3: SPEAKING ENGAGEMENTS & CONFERENCES
# ============================================================================
speaking_engagements:
  # Where has the founder spoken?

  # Prestigious conferences add credibility
  # Track: date, location, audience size, topic
  conference_1:
    name: "[CONFERENCE NAME]"
    country: "[LOCATION]"
    year: YYYY
    topic: "[WHAT DID THEY SPEAK ABOUT]"
    audience_size: "[ESTIMATED ATTENDANCE]"
    audience_type: "[WHO ATTENDED - entrepreneurs, marketers, etc]"
    prestige_level: "TIER 1 (10K+ attendees) / TIER 2 / TIER 3"
    link: "[URL IF AVAILABLE]"
  conference_2:
    name: "[CONFERENCE NAME]"
    country: "[LOCATION]"
    year: YYYY
    topic: "[TOPIC]"
    audience_size: "[SIZE]"
    audience_type: "[WHO]"
    prestige_level: "[TIER]"
    link: "[URL]"
  keynote_presentations:
    # Speaking as headline/keynote (more prestigious)
    keynote_1:
      event: "[EVENT NAME]"
      year: YYYY
      audience: "[WHO ATTENDED]"
      significance: "[WHY NOTABLE]"
  podcast_appearances:
    # Podcast interviews
    podcast_1:
      show_name: "[PODCAST NAME]"
      host: "[HOST NAME]"
      year: YYYY
      topic: "[EPISODE TOPIC]"
      listener_base: "[APPROX LISTENERS]"
      link: "[URL]"
  total_speaking_summary: |
    Example: "Speaks 8-10x annually at international conferences.
    2 keynote appearances. 15+ podcast appearances.
    Total audience reach: 50,000+ people annually."
# ============================================================================
# SECTION 4: MEDIA APPEARANCES & PUBLICATIONS
# ============================================================================
media_appearances:
  # TV, radio, online media, interviews
  interview_1:
    media_outlet: "[PUBLICATION / CHANNEL]"
    outlet_type: "PODCAST / VIDEO / ARTICLE / RADIO"
    year: YYYY
    title: "[INTERVIEW TITLE OR TOPIC]"
    format: "[INTERVIEW LENGTH - 45 MIN PODCAST, etc]"
    audience_reach: "[ESTIMATED REACH]"
    link: "[URL]"
    quote_permission: "YES / NO"
    notable_quote: "[IF AVAILABLE - SHORT QUOTE]"
  interview_2:
    media_outlet: "[OUTLET]"
    outlet_type: "[TYPE]"
    year: YYYY
    title: "[TITLE]"
    format: "[FORMAT]"
    audience_reach: "[REACH]"
    link: "[URL]"
    quote_permission: "YES / NO"
    notable_quote: "[QUOTE]"
published_articles:
  # Articles written BY the founder (not about them)
  article_1:
    title: "[ARTICLE TITLE]"
    publication: "[WHERE PUBLISHED]"
    year: YYYY
    topic: "[WHAT WAS IT ABOUT]"
    reach: "[ESTIMATED READERS]"
    link: "[URL]"
  article_2:
    title: "[TITLE]"
    publication: "[PUBLICATION]"
    year: YYYY
    topic: "[TOPIC]"
    reach: "[REACH]"
    link: "[URL]"
published_books:
  # Books written by founder
  book_1:
    title: "[BOOK TITLE]"
    year_published: YYYY
    publisher: "[PUBLISHER NAME]"
    isbn: "[ISBN IF AVAILABLE]"
    topic: "[MAIN TOPIC]"
    sales_figures: "[COPIES SOLD - if available]"
    link: "[AMAZON / GOODREADS URL]"
    impact: "[WHY NOTABLE]"
  book_2:
    title: "[TITLE]"
    year_published: YYYY
    publisher: "[PUBLISHER]"
    isbn: "[ISBN]"
    topic: "[TOPIC]"
    sales_figures: "[FIGURES]"
    link: "[URL]"
    impact: "[IMPACT]"
total_media_summary: |
  Example: "Published 2 books, 50+ articles. Appeared in 30+ podcasts
  and interviews. Total audience reach: 200,000+ people.
  Most recent: [MOST RECENT PUBLICATION]"
# ============================================================================
# SECTION 5: NOTABLE CLIENTS & CASE STUDIES
# ============================================================================
notable_clients:
  # Companies or entrepreneurs the founder has worked with

  # Use for credibility - "worked with X company" adds authority
  # Only list if you have permission
  client_1:
    name: "[CLIENT NAME OR COMPANY]"
    type: "STARTUP / MID-SIZE / ENTERPRISE"
    year_engaged: YYYY
    engagement_type: "CONSULTING / MENTORSHIP / ADVISORY / TRAINING"
    result: "[WHAT WAS THE OUTCOME]"
    permission_to_list: "YES / NO"
    case_study_available: "YES / NO"
    url: "[IF PUBLIC CASE STUDY]"
  client_2:
    name: "[CLIENT]"
    type: "[TYPE]"
    year_engaged: YYYY
    engagement_type: "[TYPE]"
    result: "[RESULT]"
    permission_to_list: "YES / NO"
    case_study_available: "YES / NO"
    url: "[URL]"
published_case_studies:
  # Detailed case studies showing results
  case_study_1:
    title: "[CASE STUDY TITLE]"
    client: "[CLIENT NAME]"
    situation: "[WHAT WAS THE CHALLENGE]"
    approach: "[WHAT DID FOUNDER DO]"
    results: "[WHAT WAS THE OUTCOME]"
    url: "[LINK TO FULL CASE STUDY]"
  case_study_2:
    title: "[TITLE]"
    client: "[CLIENT]"
    situation: "[CHALLENGE]"
    approach: "[APPROACH]"
    results: "[OUTCOME]"
    url: "[URL]"
total_client_summary: |
  Example: "Worked with 50+ entrepreneurs and companies.
  Clients include startups and 7-figure businesses.
  Average client result: 2-3x revenue growth in first year."
# ============================================================================
# SECTION 6: BOARD POSITIONS & ADVISORY ROLES
# ============================================================================
board_positions:
  # Board memberships, advisory board positions
  position_1:
    organization: "[ORGANIZATION NAME]"
    position_type: "BOARD MEMBER / ADVISOR / CHAIRMAN / MENTOR"
    year_started: YYYY
    year_ended: YYYY
    still_active: "YES / NO"
    significance: "[WHY THIS POSITION MATTERS]"
  position_2:
    organization: "[ORGANIZATION]"
    position_type: "[TYPE]"
    year_started: YYYY
    year_ended: YYYY
    still_active: "YES / NO"
    significance: "[SIGNIFICANCE]"
# ============================================================================
# SECTION 7: MEMBERSHIPS & AFFILIATIONS
# ============================================================================
professional_memberships:
  # Professional organizations, associations
  membership_1:
    organization: "[ORGANIZATION NAME]"
    membership_level: "MEMBER / FELLOW / SENIOR / GOLD"
    year_joined: YYYY
    still_active: "YES / NO"
    significance: "[WHY JOIN]"
  membership_2:
    organization: "[ORGANIZATION]"
    membership_level: "[LEVEL]"
    year_joined: YYYY
    still_active: "YES / NO"
    significance: "[SIGNIFICANCE]"
industry_affiliations:
  # Industry groups, associations (less formal than memberships)
  - "[AFFILIATION 1]"
  - "[AFFILIATION 2]"
# ============================================================================
# SECTION 8: ONLINE PRESENCE & SOCIAL PROOF
# ============================================================================
online_presence:
  # Where can people verify authority?
  website:
    url: "[FOUNDER WEBSITE URL]"
    description: "[WHAT'S ON THE SITE]"
  linkedin_profile:
    url: "[LINKEDIN URL]"
    connections: X
    endorsements_top_3: "[SKILL 1, SKILL 2, SKILL 3]"
    recommendations_count: X
  twitter:
    handle: "@[HANDLE]"
    followers: X
    follower_type: "[WHO FOLLOWS - entrepreneurs, marketers, etc]"
  youtube_channel:
    url: "[YOUTUBE URL]"
    subscribers: X
    total_views: X
    video_count: X
  podcast_show:
    name: "[PODCAST NAME]"
    url: "[PODCAST URL]"
    episodes: X
    listeners_monthly: X
    focus: "[WHAT THE PODCAST COVERS]"
# ============================================================================
# SECTION 9: COURSES & TRAINING PROGRAMS (PROOF OF TEACHING)
# ============================================================================
teaching_credentials:
  # Courses taught, training programs created
  course_1:
    name: "[COURSE NAME]"
    platform: "[UDEMY / SKILLSHARE / OWN SITE / etc]"
    year_created: YYYY
    students: X
    rating: X/5.0
    revenue_generated: "$X"
    curriculum_topics:
      - "[TOPIC 1]"
      - "[TOPIC 2]"
  course_2:
    name: "[COURSE NAME]"
    platform: "[PLATFORM]"
    year_created: YYYY
    students: X
    rating: X/5.0
    revenue_generated: "$X"
    curriculum_topics:
      - "[TOPIC 1]"
  total_students_taught: X
  courses_created: X
  average_rating: X/5.0
# ============================================================================
# SECTION 10: RESEARCH & THOUGHT LEADERSHIP
# ============================================================================
thought_leadership:
  # Original research, frameworks, methodologies created
  research_1:
    title: "[RESEARCH TITLE]"
    format: "STUDY / FRAMEWORK / METHODOLOGY / ORIGINAL RESEARCH"
    year_published: YYYY
    subject: "[WHAT THE RESEARCH IS ABOUT]"
    findings: "[KEY FINDINGS]"
    impact: "[HOW IT'S BEEN USED]"
    url: "[LINK TO RESEARCH]"
  research_2:
    title: "[TITLE]"
    format: "[FORMAT]"
    year_published: YYYY
    subject: "[SUBJECT]"
    findings: "[FINDINGS]"
    impact: "[IMPACT]"
    url: "[URL]"
original_frameworks:
  # Proprietary systems/frameworks created by founder
  framework_1:
    name: "[FRAMEWORK NAME]"
    year_created: YYYY
    purpose: "[WHAT DOES IT SOLVE]"
    adoption: "[HOW WIDELY ADOPTED]"
    taught_in: "[WHERE IS IT TAUGHT]"
  framework_2:
    name: "[FRAMEWORK NAME]"
    year_created: YYYY
    purpose: "[PURPOSE]"
    adoption: "[ADOPTION]"
    taught_in: "[WHERE]"
# ============================================================================
# SECTION 11: CONTROVERSY & TRANSPARENCY
# ============================================================================
transparency:
  # Important for credibility: be honest about challenges/criticisms
  past_failures:
    failure_1:
      description: "[WHAT FAILED]"
      year: YYYY
      what_learned: "[WHAT FOUNDER LEARNED]"
    failure_2:
      description: "[WHAT FAILED]"
      year: YYYY
      what_learned: "[WHAT LEARNED]"
  public_criticisms:
    criticism_1:
      source: "[WHO CRITICIZED]"
      criticism: "[WHAT WAS THE CRITICISM]"
      founder_response: "[HOW FOUNDER RESPONDED]"
      resolution: "[HOW WAS IT RESOLVED]"
  corrections_made:
    correction_1:
      issue: "[WHAT WAS WRONG]"
      when_discovered: YYYY
      correction_made: "[HOW IT WAS FIXED]"
      transparency: "[WAS THIS PUBLIC]"
  philosophy_on_transparency: |
    Example: "We show our work, including failures.
    Credibility comes from admitting mistakes and fixing them.
    Not from pretending to be perfect."
# ============================================================================
# SECTION 12: CREDENTIAL SUMMARY (FOR MARKETING)
# ============================================================================
credential_summary:
  # One-page summary of all credentials (for sales pages, ads)
  headline: |
    Example: "YOUR_FOUNDER: 15 Years in Consulting +
    1,000+ Entrepreneurs Taught + 2 Books Published +
    50+ Podcast Appearances + Founder of YOUR_COMPANY"
  credential_bullets:
    - "[CREDENTIAL 1]"
    - "[CREDENTIAL 2]"
    - "[CREDENTIAL 3]"
    - "[CREDENTIAL 4]"
    - "[CREDENTIAL 5]"
  most_impressive_credentials:
    # Top 3 that matter most
    - "[CREDENTIAL 1]"
    - "[CREDENTIAL 2]"
    - "[CREDENTIAL 3]"
  credibility_story: |
    Example: "Alan spent 15 years as a consultant working directly with
    hundreds of businesses. He published 2 books on systems thinking.
    He speaks regularly at international conferences. And he founded
    YOUR_COMPANY to scale his knowledge to entrepreneurs worldwide.
    1,000+ alumni validate his frameworks."
# ============================================================================
# SECTION 13: CREDENTIAL VERIFICATION (AUDIT TRAIL)
# ============================================================================
verification:
  # How can claims be verified?
  education_verified: "YES / NO"
  education_source: "[WHERE TO CHECK - LinkedIn, university website, etc]"
  awards_verified: "YES / NO"
  awards_source: "[WHERE TO CHECK]"
  media_appearances_verified: "YES / NO"
  media_source: "[WHERE LINKS ARE - archive.org, YouTube, etc]"
  book_sales_verified: "YES / NO"
  book_source: "[AMAZON, GOODREADS, PUBLISHER]"
  client_results_verified: "YES / NO"
  client_source: "[CASE STUDIES, TESTIMONIALS, LINKED IN PROFILES]"
# ============================================================================
# CHECKLIST: CREDENTIALS COMPLETENESS
# ============================================================================
completion_checklist:
  - "[ ] Formal education documented with institutions and dates"
  - "[ ] Professional certifications listed"
  - "[ ] Awards and recognition with proof links"
  - "[ ] Speaking engagements at prestigious conferences"
  - "[ ] Media appearances with links"
  - "[ ] Published articles with links"
  - "[ ] Books published (if any) with sales figures"
  - "[ ] Notable clients listed (with permission)"
  - "[ ] Case studies with results"
  - "[ ] Board positions and advisory roles"
  - "[ ] Online presence verified (LinkedIn, Twitter, YouTube)"
  - "[ ] Courses taught with student counts and ratings"
  - "[ ] Thought leadership / original research"
  - "[ ] Transparency section filled (failures, criticisms, corrections)"
  - "[ ] Credential summary written (for marketing use)"
  - "[ ] All claims are verifiable with sources"
# ============================================================================
# TEMPLATE NOTES FOR USERS
# ============================================================================
template_notes: |
  This file is the AUDIT TRAIL of formal credentials.

  DO put here:
  ├─ Degrees and certifications
  ├─ Awards and formal recognition
  ├─ Speaking engagements
  ├─ Media appearances (with links)
  ├─ Published works (books, articles)
  ├─ Courses taught
  ├─ Notable clients
  ├─ Board positions
  ├─ Online presence stats

  DO NOT put here (use founder-dna.yaml instead):
  ├─ Personal origin story
  ├─ Teaching philosophy
  ├─ Core beliefs
  ├─ Personality details

  This file answers: "What are this person's formal qualifications?"
  founder-dna.yaml answers: "Who are they as a person?"

  Every credential should have a LINK or VERIFICATION SOURCE.
  Vague claims ("published many articles") are useless.
  Specific claims ("published 47 articles in X, Y, Z publications") are powerful.

  Update whenever:
  - New award or recognition earned
  - New speaking engagement
  - New course launched
  - New book published
  - New media appearance
  - New credential earned

  BE HONEST about past failures and criticisms.
  Transparency = trust. Deflection = distrust.


---

## Referência: templates/culture-mission-vision-positioning.yaml

metadata:
  version: "1.0"
  template_type: culture_mvp
  status: INCOMPLETE
  last_updated: null
  owner: vision-chief
  description: >
    Missão, visão e posicionamento da empresa para uso interno.
    Frases curtas e diretas que orientam decisões.

mission:
  statement: null             # Uma frase. "Para quê existimos?"
  who_benefits: null          # Quem se beneficia
  transformation: null        # Qual transformação causamos

vision:
  statement: null             # "Onde queremos chegar?"
  time_horizon: null          # Em quanto tempo
  proof_of_traction: null     # Evidência de que estamos no caminho

positioning:
  statement: null             # "Como o mercado nos vê?"
  category: null              # Em qual categoria mental vivemos
  differentiation: null       # O que nos separa de todos os outros

cross_references:
  depends_on:
    - company/company-profile.yaml
    - brand/brandbook.yaml
  feeds_into:
    - culture/pillars.yaml
    - culture/values.yaml
