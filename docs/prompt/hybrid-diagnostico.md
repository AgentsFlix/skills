# hybrid-diagnostico · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-diagnostico.md` uma skill chamada hybrid-diagnostico. Quando eu pedir algo como "diagnostica o negócio [nome]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# O RAIO-X · Dez dimensões, um score, as alavancas

Antes de decidir o que fazer, saber onde o negócio dói. O agente lê os arquivos do seu workspace, pontua dez dimensões (cliente, marca, oferta, narrativa, tráfego, operação, sucesso, evidência, movimento, cultura), cruza consistência entre elas e devolve um score de 0 a 100 com as alavancas de crescimento em ordem. Sete diagnósticos verticais aprofundam qualquer dimensão.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "diagnostica o negócio [nome]" ou "diagnostica a oferta de [produto]".
- O negócio já tem os YAMLs do perfil preenchidos e você quer medir, não preencher.
- NÃO use para preencher os arquivos: para isso são as skills `hybrid-perfil`, `hybrid-icp`, `hybrid-oferta`…

## Quick Reference

| procedimento | referência |
|---|---|
| diagnose business | `references/diagnose-business.md` |
| diagnose offer | `references/diagnose-offer.md` |
| growth levers | `references/growth-levers.md` |

| campos que o diagnóstico lê | `references/contexto-diagnose-business.md` |
| campos que o diagnóstico lê | `references/contexto-diagnose-offer.md` |
| campos que o diagnóstico lê | `references/contexto-diagnose-funnel.md` |
| campos que o diagnóstico lê | `references/contexto-diagnose-authority.md` |
| campos que o diagnóstico lê | `references/contexto-diagnose-operations.md` |
| campos que o diagnóstico lê | `references/contexto-diagnose-movement.md` |
| campos que o diagnóstico lê | `references/contexto-diagnose-retention.md` |

## Procedure

1. Resolva a pasta: `hybrid.pasta`. Se não existir, crie. Confirme que os YAMLs que o diagnóstico lê existem (tabela de contexto); arquivo ausente conta como vazio e zera a variável, e isso deve aparecer no relatório.
2. Abra a referência do procedimento e siga as fases na ordem. Onde ela escrever `{pasta}/…`, leia a pasta configurada. Onde ela citar um comando `*algo` ou um script `.cjs`/`.sh`, trate como nome da etapa, não como algo a executar.
3. Leia cada arquivo da tabela de contexto e extraia os campos; pontue as categorias exatamente com os pesos da referência; não invente nota para campo ausente.
4. Escreva o relatório em `{pasta}/diagnosticos/AAAA-MM-DD-<nome>.md` no formato de saída da referência: resumo executivo, tabela por dimensão, gaps, e as alavancas em ordem.
5. Termine com a alavanca número 1 em uma frase e o comando que a destrava.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pontuar sem a tabela de pesos. A nota só vale se seguir a referência.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O relatório existe em `{pasta}/diagnosticos/` com a data de hoje.
2. Toda dimensão da referência aparece com nota e peso, e a soma segue os pesos declarados.
3. Todo arquivo ausente da tabela de contexto está listado como ausente no relatório.
4. Há uma lista de alavancas em ordem e a primeira vem com o comando que a destrava.
5. Nenhum dado foi enviado para fora da pasta do negócio.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/checklist-business-diagnostic-checklist.md`
- `references/contexto-diagnose-authority.md`
- `references/contexto-diagnose-business.md`
- `references/contexto-diagnose-funnel.md`
- `references/contexto-diagnose-movement.md`
- `references/contexto-diagnose-offer.md`
- `references/contexto-diagnose-operations.md`
- `references/contexto-diagnose-retention.md`
- `references/diagnose-business.md`
- `references/diagnose-offer.md`
- `references/growth-levers.md`


---

## Referência: references/checklist-business-diagnostic-checklist.md

# Business Diagnostic Checklist

> **Owner:** COO (workspace-chief)
> **Squad:** Hybrid Workspace
> **Frequency:** On-Demand ou Trimestral
> **Versão:** 1.0.0

---

## Propósito

Rubrica de scoring para diagnóstico estratégico de negócio. Avalia 10 dimensões com 3 camadas determinísticas: existência, completude e qualidade. Cada dimensão pontua 0-100.

---

## 1. Customer (Peso: 15%)

### 1.1 Existência (~25pts)
- [ ] `company/diagnosis.yaml` existe
- [ ] `company/icp.yaml` existe
- [ ] `company/analytics.yaml` existe

### 1.2 Completude (~40pts)
- [ ] `diagnosis.yaml`: campos preenchidos (não null/FILL_THIS/TBD/TODO)
- [ ] `icp.yaml`: seção `demographics` preenchida
- [ ] `icp.yaml`: seção `psychographics` preenchida
- [ ] `icp.yaml`: seção `pain_stack` com 3+ entries
- [ ] `icp.yaml`: seção `archetypes` com 2+ entries
- [ ] `analytics.yaml`: métricas de aquisição preenchidas

### 1.3 Qualidade (~35pts)
- [ ] `icp.yaml`: nomes reais de personas (não "Persona 1")
- [ ] `icp.yaml`: pain_stack com exemplos concretos (frases reais)
- [ ] `diagnosis.yaml`: awareness_level definido com justificativa
- [ ] `analytics.yaml`: números reais (não placeholders como "XXX" ou "0")
- [ ] Cross-check: ICP alinha com oferta (buyer ↔ product fit)

---

## 2. Brand (Peso: 12%)

### 2.1 Existência (~25pts)
- [ ] `brand/brandbook.yaml` existe
- [ ] `company/brand.yaml` existe (fallback se brandbook ausente)

### 2.2 Completude (~40pts)
- [ ] `brandbook.yaml`: seção `identity` preenchida (name, tagline, purpose)
- [ ] `brandbook.yaml`: seção `voice` preenchida (tone, vocabulary, forbidden_words)
- [ ] `brandbook.yaml`: seção `positioning` preenchida (category, differentiation)
- [ ] `brandbook.yaml`: seção `values` com 3+ valores
- [ ] `brandbook.yaml`: seção `visual_identity` preenchida (cores, tipografia)

### 2.3 Qualidade (~35pts)
- [ ] `voice`: forbidden_words com 3+ entries
- [ ] `positioning`: differentiation com argumento concreto (não genérico)
- [ ] `values`: cada valor tem description (não apenas nome)
- [ ] `visual_identity`: cores com hex codes reais
- [ ] Cross-check: voice tone alinha com archetype

---

## 3. Offer (Peso: 15%)

### 3.1 Existência (~25pts)
- [ ] `products/*/offerbook.yaml` existe (pelo menos 1 produto)
- [ ] `products/*/proof.yaml` existe
- [ ] `products/*/testimonials.yaml` existe

### 3.2 Completude (~40pts)
- [ ] `offerbook.yaml`: seção `offer` preenchida (name, description, price)
- [ ] `offerbook.yaml`: seção `value_stack` ou `deliverables` com 3+ items
- [ ] `offerbook.yaml`: seção `guarantees` preenchida
- [ ] `proof.yaml`: seção `metrics` com 3+ data points
- [ ] `testimonials.yaml`: 5+ depoimentos

### 3.3 Qualidade (~35pts)
- [ ] `offerbook.yaml`: price com valor numérico real (não TBD)
- [ ] `proof.yaml`: métricas com números verificáveis (fontes citadas)
- [ ] `testimonials.yaml`: depoimentos com nome real + empresa/role
- [ ] `testimonials.yaml`: depoimentos com resultados concretos (números)
- [ ] Cross-check: proof sustenta claims da oferta

---

## 4. Narrative (Peso: 10%)

### 4.1 Existência (~25pts)
- [ ] `products/*/narrative/brandscript.yaml` existe
- [ ] `products/*/narrative/product-story.yaml` existe
- [ ] `products/*/narrative/pitch-narrative.yaml` existe
- [ ] `products/*/narrative/objection-destroyers.yaml` existe
- [ ] `company/authority-story.yaml` existe
- [ ] `company/founder-dna.yaml` existe

### 4.2 Completude (~40pts)
- [ ] `brandscript.yaml`: 7 elementos SB7 preenchidos
- [ ] `product-story.yaml`: before/after/bridge definidos
- [ ] `pitch-narrative.yaml`: headline + subheadline + body
- [ ] `objection-destroyers.yaml`: 5+ objeções com respostas
- [ ] `founder-dna.yaml`: origin_story preenchido

### 4.3 Qualidade (~35pts)
- [ ] `brandscript.yaml`: villain é concreto (não genérico)
- [ ] `objection-destroyers.yaml`: respostas com prova (não opinião)
- [ ] `founder-dna.yaml`: jornada pessoal com detalhes reais
- [ ] `pitch-narrative.yaml`: inclui dados numéricos
- [ ] Cross-check: narrative alinha com brand voice

---

## 5. Traffic (Peso: 8%)

### 5.1 Existência (~25pts)
- [ ] `products/*/marketing/buyer-journey.yaml` existe
- [ ] `products/*/marketing/conversion-funnel.yaml` existe
- [ ] `products/*/marketing/email-sequences.yaml` existe
- [ ] `products/*/marketing/campaign-brief.yaml` existe

### 5.2 Completude (~40pts)
- [ ] `buyer-journey.yaml`: 3+ stages definidos com touchpoints
- [ ] `conversion-funnel.yaml`: stages TOFU/MOFU/BOFU preenchidos
- [ ] `email-sequences.yaml`: pelo menos 1 sequence com 3+ emails
- [ ] `campaign-brief.yaml`: objetivo + audience + budget definidos

### 5.3 Qualidade (~35pts)
- [ ] `buyer-journey.yaml`: touchpoints com canais reais (não genéricos)
- [ ] `conversion-funnel.yaml`: métricas de conversão reais (não TBD)
- [ ] `email-sequences.yaml`: subject lines concretas (não placeholders)
- [ ] Cross-check: funnel alinha com ICP journey

---

## 6. Operations (Peso: 10%)

### 6.1 Existência (~25pts)
- [ ] `operations/team-structure.yaml` existe
- [ ] `operations/pricing-strategy.yaml` existe
- [ ] `operations/kpi-scorecards.yaml` existe
- [ ] `operations/commission-design.yaml` existe

### 6.2 Completude (~40pts)
- [ ] `team-structure.yaml`: roles definidos com 2+ membros
- [ ] `pricing-strategy.yaml`: modelo de pricing definido
- [ ] `pricing-strategy.yaml`: tiers/plans com valores reais
- [ ] `kpi-scorecards.yaml`: 5+ KPIs definidos com targets
- [ ] `commission-design.yaml`: estrutura de comissão definida

### 6.3 Qualidade (~35pts)
- [ ] `team-structure.yaml`: nomes reais de pessoas (não placeholders)
- [ ] `pricing-strategy.yaml`: justificativa de pricing (não arbitrário)
- [ ] `kpi-scorecards.yaml`: targets com baseline real (não wishful)
- [ ] Cross-check: team size sustenta operação planejada

---

## 7. Success (Peso: 8%)

### 7.1 Existência (~25pts)
- [ ] `products/*/curriculum.yaml` existe
- [ ] `products/*/onboarding/onboarding-flow.yaml` existe
- [ ] `products/*/retention/churn-prevention.yaml` existe
- [ ] `products/*/retention/nps-feedback-loop.yaml` existe

### 7.2 Completude (~40pts)
- [ ] `curriculum.yaml`: módulos definidos com 3+ aulas cada
- [ ] `onboarding-flow.yaml`: steps definidos com triggers
- [ ] `churn-prevention.yaml`: sinais de risco + ações
- [ ] `nps-feedback-loop.yaml`: frequência + canais definidos

### 7.3 Qualidade (~35pts)
- [ ] `curriculum.yaml`: conteúdo real (não "Módulo 1: TBD")
- [ ] `onboarding-flow.yaml`: mensagens reais escritas
- [ ] `churn-prevention.yaml`: playbooks com ações concretas
- [ ] Cross-check: curriculum entrega promessa da oferta

---

## 8. Evidence (Peso: 10%)

### 8.1 Existência (~25pts)
- [ ] `company/analytics.yaml` existe
- [ ] `products/*/proof.yaml` existe
- [ ] `company/credentials.yaml` existe
- [ ] `company/authority-story.yaml` existe

### 8.2 Completude (~40pts)
- [ ] `analytics.yaml`: métricas de receita/crescimento preenchidas
- [ ] `proof.yaml`: 5+ data points verificáveis
- [ ] `credentials.yaml`: 3+ credenciais listadas
- [ ] `authority-story.yaml`: marcos verificáveis com datas

### 8.3 Qualidade (~35pts)
- [ ] `analytics.yaml`: números com fonte (não estimativas sem base)
- [ ] `proof.yaml`: cada métrica com período e fonte
- [ ] `credentials.yaml`: cada credencial verificável (URL ou referência)
- [ ] `authority-story.yaml`: marcos com evidência externa
- [ ] Cross-check: evidence sustenta claims da oferta e narrative

---

## 9. Movement (Peso: 12%)

### 9.1 Existência (~25pts)
- [ ] `movement/tribe-identity.yaml` existe
- [ ] `movement/leaders.yaml` existe
- [ ] `movement/cosmology.yaml` existe
- [ ] `movement/movement-health.yaml` existe
- [ ] `movement/cycle/strategy.yaml` existe

### 9.2 Completude (~40pts)
- [ ] `tribe-identity.yaml`: in-group/out-group definidos
- [ ] `leaders.yaml`: líder principal + 2+ líderes secundários
- [ ] `cosmology.yaml`: worldview + enemy + promised_land
- [ ] `movement-health.yaml`: métricas de engajamento
- [ ] `cycle/strategy.yaml`: campanha atual definida

### 9.3 Qualidade (~35pts)
- [ ] `tribe-identity.yaml`: linguagem tribal concreta (não genérica)
- [ ] `cosmology.yaml`: narrativa emocional (não corporativa)
- [ ] `movement-health.yaml`: números reais de comunidade
- [ ] Cross-check: movement alinha com brand archetype e voice

---

## 10. Culture (Peso: 10%)

### 10.1 Existência (~25pts)
- [ ] `culture/manifesto.yaml` existe
- [ ] `culture/mission-vision-positioning.yaml` existe
- [ ] `culture/pillars.yaml` existe
- [ ] `culture/values.yaml` existe
- [ ] `culture/commandments.yaml` existe
- [ ] `culture/mantras.yaml` existe
- [ ] `culture/leadership-profile.yaml` existe
- [ ] `culture/hiring-criteria.yaml` existe
- [ ] `culture/decision-frameworks.yaml` existe
- [ ] `culture/lifestyle.yaml` existe
- [ ] `culture/company-history.yaml` existe

### 10.2 Completude (~40pts)
- [ ] `manifesto.yaml`: core_belief + manifesto_text preenchidos
- [ ] `manifesto.yaml`: tribal_call com tribal_name definido
- [ ] `pillars.yaml`: 3+ pilares com name + description + why_it_matters
- [ ] `values.yaml`: 5+ valores com name + definition
- [ ] `values.yaml`: pelo menos 3 valores com guiding_questions (2+ cada)
- [ ] `commandments.yaml`: 5+ mandamentos com title + description
- [ ] `mantras.yaml`: 5+ mantras com text + context
- [ ] `leadership-profile.yaml`: 5+ leader_expectations preenchidas
- [ ] `hiring-criteria.yaml`: who_to_hire.green_flags com 3+ entries
- [ ] `hiring-criteria.yaml`: who_not_to_hire.anti_patterns com 3+ entries
- [ ] `hiring-criteria.yaml`: when_to_fire.triggers com 2+ entries

### 10.3 Qualidade (~35pts)
- [ ] `manifesto.yaml`: manifesto_text com 10+ linhas (não genérico)
- [ ] `values.yaml`: definições concretas (>20 chars, não "ser bom")
- [ ] `values.yaml`: pelo menos 2 valores com quote + quote_author
- [ ] `commandments.yaml`: mandamentos acionáveis (não vagos)
- [ ] `mantras.yaml`: frases curtas e memoráveis (< 30 chars cada)
- [ ] `leadership-profile.yaml`: team_virtues com 3+ entries
- [ ] `hiring-criteria.yaml`: legendary vs mediocre com exemplos concretos
- [ ] `lifestyle.yaml`: legendary_vs_mediocre com 10+ dimensões
- [ ] `company-history.yaml`: symbols_and_artifacts com 2+ entries
- [ ] Cross-check: values alinham com manifesto e pilares

---

## Cross-Reference Consistency (Bônus: +/- 5pts)

### Checks de Alinhamento
- [ ] ICP ↔ Offer: persona alvo compra o produto descrito?
- [ ] Brand ↔ Movement: archetype e voice são consistentes com a tribo?
- [ ] Narrative ↔ Evidence: claims narrativos são sustentados por provas?
- [ ] Offer ↔ Success: produto entregue = produto prometido?
- [ ] Customer ↔ Traffic: canais de aquisição alcançam o ICP?
- [ ] Culture ↔ Brand: valores internos são consistentes com posicionamento externo?

**Scoring bônus:**
- 5-6/6 alinhados: +5 pontos no score final
- 3-4/6 alinhados: +0 pontos
- 0-2/6 alinhados: -5 pontos no score final

---

## Classificação Final

Score ponderado das 10 dimensões + bônus cross-reference:

| Score | Classificação | Significado |
|-------|--------------|-------------|
| 90-100 | FORTE | Dimensão pronta para operar |
| 70-89 | ADEQUADO | Funcional, melhorias opcionais |
| 50-69 | ATENÇÃO | Gaps que limitam squads downstream |
| <50 | CRÍTICO | Bloqueia operação, prioridade máxima |

---

## Mapeamento Gap → Squad

| Dimensão < 70 | Squad Primário | Comando | Fallback |
|----------------|---------------|---------|----------|
| Customer | hybrid-workspace (CMO) | `*elicit-icp-yaml {slug}` | deep-research |
| Brand | brand | `/brand` | hybrid-workspace `*elicit-brand-yaml` |
| Offer | hormozi | `/hormozi` | copy `/copy-workflow` |
| Narrative | storytelling | `/storytelling` | copy |
| Traffic | traffic-masters | `/traffic-masters` | hybrid-workspace (CMO) |
| Operations | hybrid-workspace (COO) | `*elicit-operations {slug}` | hybrid-sop `*create-sop-operations-suite {slug}` |
| Success | course-creator | squad course-creator | hybrid-workspace (COO) |
| Evidence | deep-research | `/deep-research` | spy `/spy` |
| Movement | movement | `/movement` | brand |
| Culture | hybrid-workspace (COO) | `*elicit-culture {slug}` | hybrid-workspace (Vision Chief) |

### Pré-requisitos entre Squads

| Squad | Requer |
|-------|--------|
| copy | Customer >= 70 + Brand >= 70 |
| traffic-masters | Customer >= 70 + Offer >= 70 |
| storytelling | Narrative >= 50 + Brand >= 50 |

Se pré-requisito não atendido, o plano de ação insere o fix do pré-requisito primeiro.

---

## Severidade de Issues

| Severidade | Critério | Ação |
|------------|----------|------|
| CRÍTICO | Score < 50 em dimensão com peso >= 10% | Fix imediato |
| ALTO | Score < 70 em qualquer dimensão | Planejar squad activation |
| MÉDIO | Score 70-89 em dimensão importante | Backlog de melhoria |
| BAIXO | Score >= 90, melhorias opcionais | Ignorar ou polir |

---

*Checklist do Squad Hybrid Workspace - COO Orchestrator*
*Versão: 1.0.0*
*Última atualização: 2026-03-18*


---

## Referência: references/contexto-diagnose-authority.md

# Contexto: diagnose-authority

Contexto para diagnóstico de autoridade do fundador

Origem: manifest `diagnose-authority` (29 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `founder_dna_exists` | `company/founder-dna.yaml` | `_exists` | boolean |
| `founder_name` | `company/founder-dna.yaml` | `founder_essence.professional_name` | string |
| `founder_archetype` | `company/founder-dna.yaml` | `founder_essence.archetype` | string |
| `founder_origin_story_complete` | `company/founder-dna.yaml` | `origin_story` | completeness |
| `founder_years_experience` | `company/founder-dna.yaml` | `professional_background.years_of_experience.total_years` | number |
| `founder_credibility_proofs_count` | `company/founder-dna.yaml` | `credibility_foundation` | array_length |
| `founder_philosophy_complete` | `company/founder-dna.yaml` | `philosophy` | completeness |
| `founder_teaching_philosophy` | `company/founder-dna.yaml` | `teaching_philosophy.core_teaching_principle` | string |
| `founder_signature_insights_count` | `company/founder-dna.yaml` | `signature_insights` | array_length |
| `founder_narrative_headline` | `company/founder-dna.yaml` | `founder_narrative.headline` | string |
| `founder_checklist_completion` | `company/founder-dna.yaml` | `completion_checklist` | percentage |
| `credentials_exists` | `company/credentials.yaml` | `_exists` | boolean |
| `credentials_education_count` | `company/credentials.yaml` | `formal_education` | array_length |
| `credentials_certifications_count` | `company/credentials.yaml` | `formal_education.professional_certifications` | array_length |
| `credentials_awards_count` | `company/credentials.yaml` | `awards` | array_length |
| `credentials_speaking_count` | `company/credentials.yaml` | `speaking_engagements` | array_length |
| `credentials_media_count` | `company/credentials.yaml` | `media_appearances` | array_length |
| `credentials_notable_clients_count` | `company/credentials.yaml` | `notable_clients` | array_length |
| `credentials_teaching_students` | `company/credentials.yaml` | `teaching_credentials.total_students_taught` | number |
| `credentials_verification_status` | `company/credentials.yaml` | `verification` | object |
| `credentials_checklist_completion` | `company/credentials.yaml` | `completion_checklist` | percentage |
| `authority_story_exists` | `company/authority-story.yaml` | `_exists` | boolean |
| `authority_stack_layers_filled` | `company/authority-story.yaml` | `authority_stack` | completeness |
| `authority_inflection_points_count` | `company/authority-story.yaml` | `inflection_points` | array_length |
| `authority_one_page_versions` | `company/authority-story.yaml` | `one_page_story` | completeness |
| `authority_checklist_completion` | `company/authority-story.yaml` | `completion_checklist` | percentage |
| `total_proof_files` | `products/*/proof.yaml` | `_count` | integer |
| `total_case_studies_all_products` | `products/*/proof.yaml` | `case_studies` | array_length_sum |
| `total_statistics_all_products` | `products/*/proof.yaml` | `statistics` | array_length_sum |


---

## Referência: references/contexto-diagnose-business.md

# Contexto: diagnose-business

Contexto para diagnóstico estratégico de negócio em 10 dimensões

Origem: manifest `diagnose-business` (52 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|


---

## Referência: references/contexto-diagnose-funnel.md

# Contexto: diagnose-funnel

Contexto para diagnóstico de funil por produto

Origem: manifest `diagnose-funnel` (32 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `buyer_journey_exists` | `products/{product}/marketing/buyer-journey.yaml` | `_exists` | boolean |
| `buyer_journey_stages_count` | `products/{product}/marketing/buyer-journey.yaml` | `buyer_journey` | array_length |
| `buyer_journey_touchpoints_total` | `products/{product}/marketing/buyer-journey.yaml` | `buyer_journey.*.touchpoints` | array_length_sum |
| `buyer_journey_dropout_prevention` | `products/{product}/marketing/buyer-journey.yaml` | `dropout_prevention` | array_length |
| `buyer_journey_retention_hooks` | `products/{product}/marketing/buyer-journey.yaml` | `retention_hooks` | array_length |
| `buyer_journey_metrics` | `products/{product}/marketing/buyer-journey.yaml` | `overall_journey_metrics` | completeness |
| `conversion_funnel_exists` | `products/{product}/marketing/conversion-funnel.yaml` | `_exists` | boolean |
| `funnel_stages_count` | `products/{product}/marketing/conversion-funnel.yaml` | `_stages` | integer |
| `funnel_awareness_volume` | `products/{product}/marketing/conversion-funnel.yaml` | `stage_1_awareness.volume_target` | number |
| `funnel_conversion_rate` | `products/{product}/marketing/conversion-funnel.yaml` | `stage_5_conversion.conversion_from_decision` | percentage |
| `funnel_math_complete` | `products/{product}/marketing/conversion-funnel.yaml` | `funnel_math` | completeness |
| `funnel_health_score` | `products/{product}/marketing/conversion-funnel.yaml` | `funnel_health_score` | score_block |
| `funnel_bottleneck_stages` | `products/{product}/marketing/conversion-funnel.yaml` | `*.bottleneck_diagnostic` | array |
| `email_sequences_exists` | `products/{product}/marketing/email-sequences.yaml` | `_exists` | boolean |
| `email_sequences_count` | `products/{product}/marketing/email-sequences.yaml` | `sequences` | array_length |
| `email_total_emails` | `products/{product}/marketing/email-sequences.yaml` | `sequences.*.emails` | array_length_sum |
| `campaign_brief_exists` | `products/{product}/marketing/campaign-brief.yaml` | `_exists` | boolean |
| `campaign_objective` | `products/{product}/marketing/campaign-brief.yaml` | `objective.primary_outcome` | string |
| `campaign_awareness_stage` | `products/{product}/marketing/campaign-brief.yaml` | `audience.awareness_stage` | string |
| `campaign_traffic_temperature` | `products/{product}/marketing/campaign-brief.yaml` | `audience.traffic_temperature` | string |
| `campaign_channels_count` | `products/{product}/marketing/campaign-brief.yaml` | `channels.in_scope` | array_length |
| `campaign_proof_sources` | `products/{product}/marketing/campaign-brief.yaml` | `proof.proof_sources` | array_length |
| `hooks_exists` | `products/{product}/marketing/hooks.yaml` | `_exists` | boolean |
| `hooks_count` | `products/{product}/marketing/hooks.yaml` | `hooks` | array_length |
| `headlines_exists` | `products/{product}/marketing/headlines.yaml` | `_exists` | boolean |
| `headlines_count` | `products/{product}/marketing/headlines.yaml` | `headlines` | array_length |
| `sales_page_exists` | `products/{product}/marketing/sales-page.yaml` | `_exists` | boolean |
| `launch_playbook_exists` | `products/{product}/marketing/launch-playbook.yaml` | `_exists` | boolean |
| `webinar_script_exists` | `products/{product}/marketing/webinar-script.yaml` | `_exists` | boolean |
| `icp_awareness_level` | `company/diagnosis.yaml` | `market_awareness_level.identified_level` | string |
| `icp_sophistication_stage` | `company/diagnosis.yaml` | `market_sophistication_stage.identified_stage` | string |
| `icp_action_triggers` | `company/icp.yaml` | `motivations_action_triggers` | array_length |


---

## Referência: references/contexto-diagnose-movement.md

# Contexto: diagnose-movement

Contexto para diagnóstico de maturidade do movimento cultural

Origem: manifest `diagnose-movement` (35 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `tribe_identity_exists` | `movement/foundation/tribe-identity.yaml` | `_exists` | boolean |
| `tribe_archetypes_count` | `movement/foundation/tribe-identity.yaml` | `tribe.archetypes` | array_length |
| `tribe_transformation_stages` | `movement/foundation/tribe-identity.yaml` | `tribe.transformation_arc.stages` | array_length |
| `tribe_semantic_clusters` | `movement/foundation/tribe-identity.yaml` | `tribe.semantic_clusters` | array_length |
| `tribe_narrative_gaps` | `movement/foundation/tribe-identity.yaml` | `tribe.narrative_gaps` | array_length |
| `leaders_exists` | `movement/identity/leaders.yaml` | `_exists` | boolean |
| `leaders_count` | `movement/identity/leaders.yaml` | `leaders` | array_length |
| `leaders_have_values` | `movement/identity/leaders.yaml` | `leaders.*.top_values` | boolean_any |
| `leaders_have_phrases` | `movement/identity/leaders.yaml` | `leaders.*.signature_phrases` | boolean_any |
| `founders_dynamics_exists` | `movement/identity/founders-dynamics.yaml` | `_exists` | boolean |
| `matrix_n3_n4_exists` | `movement/identity/matrix-n3-n4.yaml` | `_exists` | boolean |
| `cosmology_exists` | `movement/system/cosmology.yaml` | `_exists` | boolean |
| `cosmology_axioms_count` | `movement/system/cosmology.yaml` | `cosmology.axioms` | array_length |
| `cosmology_doctrine_core_count` | `movement/system/cosmology.yaml` | `cosmology.doctrine_core` | array_length |
| `mrd_doctrines_exists` | `movement/system/mrd-bank/doctrines.yaml` | `_exists` | boolean |
| `mrd_myths_exists` | `movement/system/mrd-bank/myths.yaml` | `_exists` | boolean |
| `mrd_rites_exists` | `movement/system/mrd-bank/rites.yaml` | `_exists` | boolean |
| `mrd_vocabulary_exists` | `movement/system/mrd-bank/vocabulary.yaml` | `_exists` | boolean |
| `movement_health_exists` | `movement/diagnostics/movement-health.yaml` | `_exists` | boolean |
| `health_doctrine_consistency` | `movement/diagnostics/movement-health.yaml` | `health.doctrine_consistency` | string |
| `health_ritual_adoption` | `movement/diagnostics/movement-health.yaml` | `health.ritual_adoption` | string |
| `health_narrative_cohesion` | `movement/diagnostics/movement-health.yaml` | `health.narrative_cohesion` | string |
| `health_flywheel_know_trust` | `movement/diagnostics/movement-health.yaml` | `health.flywheel_transition_health.know_to_trust` | string |
| `health_root_causes` | `movement/diagnostics/movement-health.yaml` | `analysis.root_causes` | array_length |
| `cycle_strategy_exists` | `movement/cycle/strategy.yaml` | `_exists` | boolean |
| `cycle_type` | `movement/cycle/strategy.yaml` | `cycle_strategy.cycle_type` | string |
| `cycle_objective_metric` | `movement/cycle/strategy.yaml` | `cycle_strategy.objective.primary_metric` | string |
| `cycle_channels_count` | `movement/cycle/strategy.yaml` | `cycle_strategy.channel_strategy` | array_length |
| `cycle_doctrines_prioritized` | `movement/cycle/strategy.yaml` | `cycle_strategy.doctrine_prioritization` | array_length |
| `fenomenologia_exists` | `movement/reading/fenomenologia-cultural.yaml` | `_exists` | boolean |
| `ideological_personas_exists` | `movement/reading/persona/ideological-personas.yaml` | `_exists` | boolean |
| `intake_sources_exists` | `movement/intake/sources.yaml` | `_exists` | boolean |
| `brand_archetype` | `brand/brandbook.yaml` | `archetype_mix` | object |
| `brand_voice_tone` | `brand/brandbook.yaml` | `voice` | object |
| `brand_enemy` | `brand/brandbook.yaml` | `positioning.enemy_core` | string |


---

## Referência: references/contexto-diagnose-offer.md

# Contexto: diagnose-offer

Contexto para diagnóstico de força da oferta por produto

Origem: manifest `diagnose-offer` (39 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `offerbook_exists` | `products/{product}/offerbook.yaml` | `_exists` | boolean |
| `offer_name` | `products/{product}/offerbook.yaml` | `positioning.offer_name` | string |
| `offer_price` | `products/{product}/offerbook.yaml` | `offer_architecture.grand_slam_offer.price` | number |
| `offer_payment_options` | `products/{product}/offerbook.yaml` | `offer_architecture.grand_slam_offer.payment_options` | string |
| `offer_unique_mechanism` | `products/{product}/offerbook.yaml` | `positioning.unique_mechanism` | string |
| `offer_modules_count` | `products/{product}/offerbook.yaml` | `core_modules` | array_length |
| `offer_bonuses_count` | `products/{product}/offerbook.yaml` | `offer_architecture.bonuses` | array_length |
| `offer_objections_count` | `products/{product}/offerbook.yaml` | `objections_responses` | array_length |
| `offer_diagnostic_summary` | `products/{product}/offerbook.yaml` | `diagnostic_summary` | string |
| `value_equation_exists` | `products/{product}/value-equation.yaml` | `_exists` | boolean |
| `ve_dream_outcome_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.dream_outcome_score` | number |
| `ve_perceived_likelihood_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.perceived_likelihood_score` | number |
| `ve_time_delay_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.time_delay_score` | number |
| `ve_effort_sacrifice_score` | `products/{product}/value-equation.yaml` | `composite_diagnostic.effort_sacrifice_score` | number |
| `ve_weakest_variable` | `products/{product}/value-equation.yaml` | `composite_diagnostic.weakest_variable_analysis` | string |
| `proof_exists` | `products/{product}/proof.yaml` | `_exists` | boolean |
| `proof_case_studies_count` | `products/{product}/proof.yaml` | `case_studies` | array_length |
| `proof_testimonials_by_archetype_count` | `products/{product}/proof.yaml` | `testimonials_by_archetype` | array_length |
| `proof_statistics_count` | `products/{product}/proof.yaml` | `statistics` | array_length |
| `proof_before_after_count` | `products/{product}/proof.yaml` | `before_after_comparisons` | array_length |
| `proof_verification_tiers` | `products/{product}/proof.yaml` | `header_summary.verification_tier_distribution` | object |
| `proof_missing_to_gather` | `products/{product}/proof.yaml` | `missing_proof_to_gather` | array_length |
| `testimonials_exists` | `products/{product}/testimonials.yaml` | `_exists` | boolean |
| `testimonials_total_count` | `products/{product}/testimonials.yaml` | `testimonials_database` | array_length |
| `testimonials_by_awareness_coverage` | `products/{product}/testimonials.yaml` | `testimonials_by_awareness_level` | array_length |
| `testimonials_by_result_coverage` | `products/{product}/testimonials.yaml` | `testimonials_by_result` | array_length |
| `testimonials_video_count` | `products/{product}/testimonials.yaml` | `video_testimonial_format` | array_length |
| `testimonials_checklist_completion` | `products/{product}/testimonials.yaml` | `testimonial_collection_checklist` | percentage |
| `guarantee_exists` | `products/{product}/guarantee-design.yaml` | `_exists` | boolean |
| `guarantee_level` | `products/{product}/guarantee-design.yaml` | `guarantee_design.chosen_level` | string |
| `guarantee_name` | `products/{product}/guarantee-design.yaml` | `guarantee_language.guarantee_name` | string |
| `guarantee_ethical_passed` | `products/{product}/guarantee-design.yaml` | `ethical_filter.ethical_verdict` | string |
| `guarantee_diagnostic` | `products/{product}/guarantee-design.yaml` | `diagnostic_summary` | object |
| `competitor_exists` | `products/{product}/competitor-analysis.yaml` | `_exists` | boolean |
| `competitor_count` | `products/{product}/competitor-analysis.yaml` | `competitive_landscape` | array_length |
| `competitor_your_position` | `products/{product}/competitor-analysis.yaml` | `positioning_map.your_position` | object |
| `competitor_differentiation_strength` | `products/{product}/competitor-analysis.yaml` | `competitive_strength_score.differentiation_strength` | number |
| `competitor_unfair_advantage` | `products/{product}/competitor-analysis.yaml` | `differentiation.your_unfair_advantage` | string |
| `pricing_anchoring_exists` | `products/{product}/pricing-anchoring.yaml` | `_exists` | boolean |


---

## Referência: references/contexto-diagnose-operations.md

# Contexto: diagnose-operations

Contexto para diagnóstico de maturidade operacional

Origem: manifest `diagnose-operations` (37 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `team_structure_exists` | `operations/team-structure.yaml` | `_exists` | boolean |
| `team_headcount` | `operations/team-structure.yaml` | `current_team.total_headcount` | integer |
| `team_roles_filled_count` | `operations/team-structure.yaml` | `current_team.roles_filled` | array_length |
| `team_founder_wearing_hats` | `operations/team-structure.yaml` | `current_team.founder_wearing_hats` | string |
| `team_ideal_departments_count` | `operations/team-structure.yaml` | `ideal_structure.departments` | array_length |
| `team_hiring_priority` | `operations/team-structure.yaml` | `hiring_priority` | completeness |
| `team_strength_score` | `operations/team-structure.yaml` | `team_strength_score` | score_block |
| `pricing_exists` | `operations/pricing-strategy.yaml` | `_exists` | boolean |
| `pricing_model` | `operations/pricing-strategy.yaml` | `pricing_foundation.pricing_model` | string |
| `pricing_current_price` | `operations/pricing-strategy.yaml` | `pricing_foundation.current_price` | number |
| `pricing_value_ratio` | `operations/pricing-strategy.yaml` | `pricing_foundation.price_to_value_ratio` | string |
| `pricing_competitive_position` | `operations/pricing-strategy.yaml` | `competitive_position.your_position` | string |
| `pricing_experiments_count` | `operations/pricing-strategy.yaml` | `pricing_experiments` | array_length |
| `pricing_strength_score` | `operations/pricing-strategy.yaml` | `pricing_strength_score` | score_block |
| `kpi_exists` | `operations/kpi-scorecards.yaml` | `_exists` | boolean |
| `kpi_north_star` | `operations/kpi-scorecards.yaml` | `north_star.metric_name` | string |
| `kpi_revenue_metrics_filled` | `operations/kpi-scorecards.yaml` | `revenue_metrics` | completeness |
| `kpi_acquisition_metrics_filled` | `operations/kpi-scorecards.yaml` | `acquisition_metrics` | completeness |
| `kpi_retention_metrics_filled` | `operations/kpi-scorecards.yaml` | `retention_metrics` | completeness |
| `kpi_review_cadence` | `operations/kpi-scorecards.yaml` | `review_cadence` | completeness |
| `kpi_strength_score` | `operations/kpi-scorecards.yaml` | `kpi_strength_score` | score_block |
| `commission_exists` | `operations/commission-design.yaml` | `_exists` | boolean |
| `commission_philosophy` | `operations/commission-design.yaml` | `compensation_philosophy.approach` | string |
| `commission_roles_count` | `operations/commission-design.yaml` | `commission_structure` | array_length |
| `commission_strength_score` | `operations/commission-design.yaml` | `commission_strength_score` | score_block |
| `call_script_exists` | `operations/sales-process/call-script.yaml` | `_exists` | boolean |
| `discovery_framework_exists` | `operations/sales-process/discovery-framework.yaml` | `_exists` | boolean |
| `follow_up_system_exists` | `operations/sales-process/follow-up-system.yaml` | `_exists` | boolean |
| `prospecting_playbook_exists` | `operations/sales-process/prospecting-playbook.yaml` | `_exists` | boolean |
| `show_rate_exists` | `operations/sales-process/show-rate-optimization.yaml` | `_exists` | boolean |
| `hiring_playbook_exists` | `operations/hiring/hiring-playbook.yaml` | `_exists` | boolean |
| `interview_framework_exists` | `operations/hiring/interview-framework.yaml` | `_exists` | boolean |
| `ramp_plan_exists` | `operations/hiring/ramp-plan.yaml` | `_exists` | boolean |
| `annual_revenue` | `company/company-profile.yaml` | `key_metrics.annual_revenue` | string |
| `yoy_growth` | `company/company-profile.yaml` | `key_metrics.yoy_growth` | string |
| `customer_count` | `company/company-profile.yaml` | `key_metrics.customer_count` | integer |
| `current_stage` | `company/company-profile.yaml` | `stage.current_stage` | string |


---

## Referência: references/contexto-diagnose-retention.md

# Contexto: diagnose-retention

Contexto para diagnóstico de retenção por produto

Origem: manifest `diagnose-retention` (30 variáveis). No Hermes não há motor de render: leia cada arquivo em `source` dentro da pasta do negócio e extraia `field`. Arquivo ausente conta como `_exists: false` e zera a variável.

Parâmetros: 

| variável | arquivo (em {pasta}) | campo | tipo |
|---|---|---|---|
| `onboarding_exists` | `products/{product}/onboarding/onboarding-flow.yaml` | `_exists` | boolean |
| `onboarding_total_duration` | `products/{product}/onboarding/onboarding-flow.yaml` | `onboarding_overview.total_duration` | string |
| `onboarding_first_value_moment` | `products/{product}/onboarding/onboarding-flow.yaml` | `onboarding_overview.first_value_moment` | string |
| `onboarding_day0_actions_count` | `products/{product}/onboarding/onboarding-flow.yaml` | `day_0_welcome.actions` | array_length |
| `onboarding_completion_criteria` | `products/{product}/onboarding/onboarding-flow.yaml` | `onboarding_completion.completion_criteria` | string |
| `onboarding_strength_score` | `products/{product}/onboarding/onboarding-flow.yaml` | `onboarding_strength_score` | score_block |
| `churn_prevention_exists` | `products/{product}/retention/churn-prevention.yaml` | `_exists` | boolean |
| `churn_signals_count` | `products/{product}/retention/churn-prevention.yaml` | `churn_signals` | completeness |
| `churn_interventions_count` | `products/{product}/retention/churn-prevention.yaml` | `interventions` | completeness |
| `churn_top_reasons` | `products/{product}/retention/churn-prevention.yaml` | `churn_analysis.top_churn_reasons` | array_length |
| `churn_strength_score` | `products/{product}/retention/churn-prevention.yaml` | `churn_prevention_score` | score_block |
| `nps_exists` | `products/{product}/retention/nps-feedback-loop.yaml` | `_exists` | boolean |
| `nps_current` | `products/{product}/retention/nps-feedback-loop.yaml` | `nps_measurement.current_nps` | number |
| `nps_target` | `products/{product}/retention/nps-feedback-loop.yaml` | `nps_measurement.target_nps` | number |
| `nps_measurement_frequency` | `products/{product}/retention/nps-feedback-loop.yaml` | `nps_measurement.measurement_frequency` | string |
| `nps_touchpoints_count` | `products/{product}/retention/nps-feedback-loop.yaml` | `feedback_touchpoints` | array_length |
| `nps_strength_score` | `products/{product}/retention/nps-feedback-loop.yaml` | `feedback_loop_score` | score_block |
| `retention_strategy_exists` | `products/{product}/retention/retention-strategy.yaml` | `_exists` | boolean |
| `retention_30d_rate` | `products/{product}/retention/retention-strategy.yaml` | `current_metrics.first_30d_retention` | percentage |
| `retention_90d_rate` | `products/{product}/retention/retention-strategy.yaml` | `current_metrics.first_90d_retention` | percentage |
| `retention_annual_rate` | `products/{product}/retention/retention-strategy.yaml` | `current_metrics.annual_retention` | percentage |
| `retention_churn_monthly` | `products/{product}/retention/retention-strategy.yaml` | `current_metrics.churn_rate_monthly` | percentage |
| `retention_layers_filled` | `products/{product}/retention/retention-strategy.yaml` | `_completeness` | completeness |
| `retention_strength_score` | `products/{product}/retention/retention-strategy.yaml` | `retention_strength_score` | score_block |
| `adoption_exists` | `products/{product}/adoption-signals.yaml` | `_exists` | boolean |
| `adoption_activation_definition` | `products/{product}/adoption-signals.yaml` | `adoption_model.activation_definition` | string |
| `adoption_risk_signals_count` | `products/{product}/adoption-signals.yaml` | `risk_signals` | array_length |
| `adoption_diagnostic_summary` | `products/{product}/adoption-signals.yaml` | `diagnostic_summary` | object |
| `curriculum_exists` | `products/{product}/curriculum.yaml` | `_exists` | boolean |
| `curriculum_modules_count` | `products/{product}/curriculum.yaml` | `modules` | array_length |


---

## Referência: references/diagnose-business.md

# Task: Diagnose Business

```yaml
task:
  id: diagnose-business
  name: Diagnóstico Estratégico de Negócio
  agent: workspace-chief
  trigger: manual
  elicit: false
  commands:
    - "*diagnose-business {slug}"
    - "*diagnose-all"
```

## Descrição

Task de governança que analisa um negócio completo em 10 dimensões estratégicas, identifica forças/fraquezas, pontua cada dimensão (0-100) e gera um plano de ação sequenciado com recomendação de squads a ativar.

**Guardian:** COO (Chief Operating Officer)
**Checklist:** `checklists/business-diagnostic-checklist.md`
**Output:** `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-diagnostic.md`

## Pré-requisitos

- Workspace inicializado (`workspace/` existe)
- Business registrado (`{pasta}/` existe)
- Pelo menos `company/company-profile.yaml` presente

## Workflow

### Fase 0: Pre-flight

```yaml
preflight:
  steps:
    - validate_workspace: "workspace/ existe"
    - validate_business: "{pasta}/ existe"
    - inventory_files: "listar TODOS os arquivos .yaml/.md do business"
    - load_templates: "carregar templates de referência de templates/"
```

**Ações:**
1. Verificar que `{pasta}/` existe
2. Listar todos os arquivos recursivamente no diretório do business
3. Criar inventário: `{arquivo: existe/ausente}` para cada arquivo esperado
4. Se business não existe, abortar com mensagem clara

### Fase 1: Customer (Peso 15%)

```yaml
dimension: customer
weight: 0.14
files:
  - path: "company/diagnosis.yaml"
    role: primary
  - path: "company/icp.yaml"
    role: primary
  - path: "company/analytics.yaml"
    role: secondary
```

**Scoring 3 camadas:**

1. **Existência (0-25pts):** Cada arquivo primário presente = 10pts, secundário = 5pts
2. **Completude (0-40pts):**
   - Contar campos preenchidos vs total esperado no template
   - Excluir: `null`, `FILL_THIS`, `TBD`, `TODO`, `~`, arrays vazios `[]`, strings vazias `""`
   - Calcular: `(campos_preenchidos / campos_total) * 40`
3. **Qualidade (0-35pts):**
   - Nomes reais (não "Persona 1", "Cliente X"): +7pts
   - Pain stack com frases concretas (>10 chars cada): +7pts
   - Números reais em analytics (regex `\d+[.,]?\d*`): +7pts
   - Awareness level com justificativa: +7pts
   - 3+ entries em arrays principais: +7pts

### Fase 2: Brand (Peso 12%)

```yaml
dimension: brand
weight: 0.11
files:
  - path: "brand/brandbook.yaml"
    role: primary
  - path: "company/brand.yaml"
    role: fallback
```

**Scoring:**
1. **Existência (0-25pts):** brandbook.yaml = 20pts, brand.yaml como fallback = 15pts, ambos = 25pts
2. **Completude (0-40pts):** % campos preenchidos em identity + voice + positioning + values + visual_identity
3. **Qualidade (0-35pts):**
   - Forbidden words com 3+ entries: +7pts
   - Positioning com argumento concreto (>20 chars): +7pts
   - Values com descriptions (não só nomes): +7pts
   - Hex codes reais em cores: +7pts
   - Voice tone coerente com archetype: +7pts

### Fase 3: Offer (Peso 15%)

```yaml
dimension: offer
weight: 0.14
files:
  - path: "products/*/offerbook.yaml"
    role: primary
  - path: "products/*/proof.yaml"
    role: primary
  - path: "products/*/testimonials.yaml"
    role: primary
```

**Scoring:**
1. **Existência (0-25pts):** Cada arquivo por produto, normalizado. Sem nenhum produto = 0pts
2. **Completude (0-40pts):** offerbook (offer, value_stack, guarantees) + proof (metrics 3+) + testimonials (5+)
3. **Qualidade (0-35pts):**
   - Price com valor numérico real: +7pts
   - Proof com números verificáveis e fontes: +7pts
   - Testimonials com nome real + empresa: +7pts
   - Testimonials com resultados numéricos: +7pts
   - Claims sustentados por proof: +7pts

### Fase 4: Narrative (Peso 10%)

```yaml
dimension: narrative
weight: 0.09
files:
  - path: "products/*/narrative/brandscript.yaml"
    role: primary
  - path: "products/*/narrative/product-story.yaml"
    role: primary
  - path: "products/*/narrative/pitch-narrative.yaml"
    role: secondary
  - path: "products/*/narrative/objection-destroyers.yaml"
    role: secondary
  - path: "company/authority-story.yaml"
    role: secondary
  - path: "company/founder-dna.yaml"
    role: primary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 5pts cada, secundários = 2.5pts cada
2. **Completude (0-40pts):** SB7 elements, before/after/bridge, objections 5+, origin story
3. **Qualidade (0-35pts):**
   - Villain concreto (não "dificuldades"): +7pts
   - Objeções com prova na resposta: +7pts
   - Founder story com detalhes reais: +7pts
   - Pitch com dados numéricos: +7pts
   - Narrativa alinha com brand voice: +7pts

### Fase 5: Traffic (Peso 8%)

```yaml
dimension: traffic
weight: 0.07
files:
  - path: "products/*/marketing/buyer-journey.yaml"
    role: primary
  - path: "products/*/marketing/conversion-funnel.yaml"
    role: primary
  - path: "products/*/marketing/email-sequences.yaml"
    role: secondary
  - path: "products/*/marketing/campaign-brief.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 8pts cada, secundários = 4.5pts cada
2. **Completude (0-40pts):** stages, touchpoints, métricas, sequences
3. **Qualidade (0-35pts):**
   - Canais reais (Instagram, Google Ads, não "digital"): +9pts
   - Métricas de conversão reais: +9pts
   - Subject lines concretas: +9pts
   - Funnel alinha com ICP journey: +8pts

### Fase 6: Operations (Peso 10%)

```yaml
dimension: operations
weight: 0.09
files:
  - path: "operations/team-structure.yaml"
    role: primary
  - path: "operations/pricing-strategy.yaml"
    role: primary
  - path: "operations/kpi-scorecards.yaml"
    role: secondary
  - path: "operations/commission-design.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 8pts cada, secundários = 4.5pts cada
2. **Completude (0-40pts):** roles, pricing model, KPIs, commission structure
3. **Qualidade (0-35pts):**
   - Nomes reais no team: +9pts
   - Pricing com justificativa: +9pts
   - KPIs com baseline real: +9pts
   - Team sustenta operação: +8pts

### Fase 7: Success (Peso 8%)

```yaml
dimension: success
weight: 0.07
files:
  - path: "products/*/curriculum.yaml"
    role: primary
  - path: "products/*/onboarding/onboarding-flow.yaml"
    role: secondary
  - path: "products/*/retention/churn-prevention.yaml"
    role: secondary
  - path: "products/*/retention/nps-feedback-loop.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** curriculum = 10pts, cada secundário = 5pts
2. **Completude (0-40pts):** módulos, onboarding steps, sinais de churn, NPS frequency
3. **Qualidade (0-35pts):**
   - Conteúdo real (não "TBD"): +9pts
   - Mensagens de onboarding escritas: +9pts
   - Playbooks de churn com ações concretas: +9pts
   - Curriculum entrega promessa da oferta: +8pts

### Fase 8: Evidence (Peso 10%)

```yaml
dimension: evidence
weight: 0.09
files:
  - path: "company/analytics.yaml"
    role: primary
  - path: "products/*/proof.yaml"
    role: primary
  - path: "company/credentials.yaml"
    role: primary
  - path: "company/authority-story.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 7pts cada, secundário = 4pts
2. **Completude (0-40pts):** métricas de receita, data points, credenciais, marcos
3. **Qualidade (0-35pts):**
   - Números com fonte: +9pts
   - Métricas com período: +9pts
   - Credenciais verificáveis (URL/ref): +9pts
   - Evidence sustenta claims de oferta e narrative: +8pts

### Fase 9: Movement (Peso 12%)

```yaml
dimension: movement
weight: 0.10
files:
  - path: "movement/tribe-identity.yaml"
    role: primary
  - path: "movement/leaders.yaml"
    role: primary
  - path: "movement/cosmology.yaml"
    role: primary
  - path: "movement/movement-health.yaml"
    role: secondary
  - path: "movement/cycle/strategy.yaml"
    role: secondary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 6pts cada, secundários = 3.5pts cada
2. **Completude (0-40pts):** in-group/out-group, leaders, worldview, métricas, estratégia
3. **Qualidade (0-35pts):**
   - Linguagem tribal concreta: +7pts
   - Narrativa emocional (não corporativa): +7pts
   - Números reais de comunidade: +7pts
   - Movement alinha com brand archetype: +7pts
   - Cycle strategy com campanha ativa: +7pts

### Fase 10: Culture (Peso 10%)

```yaml
dimension: culture
weight: 0.10
files:
  - path: "culture/manifesto.yaml"
    role: primary
  - path: "culture/mission-vision-positioning.yaml"
    role: primary
  - path: "culture/pillars.yaml"
    role: primary
  - path: "culture/values.yaml"
    role: primary
  - path: "culture/commandments.yaml"
    role: secondary
  - path: "culture/mantras.yaml"
    role: secondary
  - path: "culture/leadership-profile.yaml"
    role: secondary
  - path: "culture/hiring-criteria.yaml"
    role: secondary
  - path: "culture/decision-frameworks.yaml"
    role: tertiary
  - path: "culture/lifestyle.yaml"
    role: tertiary
  - path: "culture/company-history.yaml"
    role: tertiary
```

**Scoring:**
1. **Existência (0-25pts):** primários = 4pts cada (16 max), secundários = 1.5pts cada (6 max), terciários = 1pt cada (3 max)
2. **Completude (0-40pts):**
   - manifesto.yaml: core_belief + manifesto_text + tribal_call preenchidos
   - pillars.yaml: 3+ pilares com name + description + why_it_matters
   - values.yaml: 5+ valores com name + definition + guiding_questions
   - commandments.yaml: 5+ mandamentos com title + description
   - mantras.yaml: 5+ mantras com text + context
   - leadership-profile.yaml: 5+ leader_expectations
   - hiring-criteria.yaml: green_flags + anti_patterns + when_to_fire preenchidos
3. **Qualidade (0-35pts):**
   - Manifesto com 10+ linhas (não genérico): +5pts
   - Values com definições concretas (>20 chars): +5pts
   - Values com quotes reais atribuídas: +5pts
   - Commandments acionáveis (não vagos): +5pts
   - Mantras curtos e memoráveis (<30 chars): +5pts
   - Hiring com exemplos legendary vs mediocre: +5pts
   - Symbols/artifacts documentados: +5pts

### Fase 11: Cross-Reference Consistency

```yaml
cross_reference:
  checks:
    - id: icp_offer
      name: "ICP ↔ Offer"
      description: "Persona alvo compra o produto descrito?"
      sources: ["company/icp.yaml", "products/*/offerbook.yaml"]

    - id: brand_movement
      name: "Brand ↔ Movement"
      description: "Archetype e voice são consistentes com a tribo?"
      sources: ["brand/brandbook.yaml", "movement/tribe-identity.yaml"]

    - id: narrative_evidence
      name: "Narrative ↔ Evidence"
      description: "Claims narrativos são sustentados por provas?"
      sources: ["products/*/narrative/", "products/*/proof.yaml"]

    - id: offer_success
      name: "Offer ↔ Success"
      description: "Produto entregue = produto prometido?"
      sources: ["products/*/offerbook.yaml", "products/*/curriculum.yaml"]

    - id: customer_traffic
      name: "Customer ↔ Traffic"
      description: "Canais de aquisição alcançam o ICP?"
      sources: ["company/icp.yaml", "products/*/marketing/"]

    - id: culture_brand
      name: "Culture ↔ Brand"
      description: "Valores internos são consistentes com posicionamento externo?"
      sources: ["culture/values.yaml", "brand/brandbook.yaml"]

  scoring:
    all_aligned: "+5 pontos"      # 5-6 de 6
    mostly_aligned: "+0 pontos"   # 3-4 de 6
    misaligned: "-5 pontos"       # 0-2 de 6
```

**Avaliação:** Para cada check, verificar se os conteúdos são semanticamente consistentes. Isso requer leitura dos arquivos e análise de coerência.

### Fase 12: Síntese

```yaml
synthesis:
  steps:
    - calculate_weighted_score: "Σ(score_dimensão × peso)"
    - apply_cross_reference_bonus: "+/- 5 pontos"
    - rank_gaps: "Ordenar dimensões por score (menor primeiro)"
    - map_squads: "Para cada gap < 70, mapear squad + comando"
    - check_prerequisites: "Verificar se pré-requisitos de squad são atendidos"
    - sequence_actions: "Ordenar ações respeitando pré-requisitos"
```

**Mapeamento Gap → Squad:**

| Dimensão < 70 | Squad Primário | Comando | Fallback |
|----------------|---------------|---------|----------|
| Customer | hybrid-workspace (CMO) | `*elicit-icp-yaml {slug}` | deep-research |
| Brand | brand | `/brand` | hybrid-workspace `*elicit-brand-yaml` |
| Offer | hormozi | `/hormozi` | copy `/copy-workflow` |
| Narrative | storytelling | `/storytelling` | copy |
| Traffic | traffic-masters | `/traffic-masters` | hybrid-workspace (CMO) |
| Operations | hybrid-workspace (COO) | `*elicit-operations {slug}` | hybrid-sop `*create-sop-operations-suite {slug}` |
| Success | course-creator | squad course-creator | hybrid-workspace (COO) |
| Evidence | deep-research | `/deep-research` | spy `/spy` |
| Movement | movement | `/movement` | brand |
| Culture | hybrid-workspace (COO) | `*elicit-culture {slug}` | hybrid-workspace (Vision Chief) |

**Cadeia de pré-requisitos:**

| Squad | Requer |
|-------|--------|
| copy | Customer >= 70 + Brand >= 70 |
| traffic-masters | Customer >= 70 + Offer >= 70 |
| storytelling | Narrative >= 50 + Brand >= 50 |

Se pré-requisito não atendido, inserir fix do pré-requisito antes no plano de ação.

### Fase 13: Geração do Relatório

Output: `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-diagnostic.md`

```markdown
# Diagnóstico Estratégico: {business_name}

**Data:** {YYYY-MM-DD}
**Auditor:** COO (workspace-chief)
**Business:** {slug}
**Score Global:** {score}/100
**Classificação:** {FORTE|ADEQUADO|ATENÇÃO|CRÍTICO}

---

## 1. Resumo Executivo

| Dimensão | Peso | Score | Status | Squad Recomendado |
|----------|------|-------|--------|-------------------|
| Customer | 14% | __/100 | {status} | {squad ou "-"} |
| Brand | 11% | __/100 | {status} | {squad ou "-"} |
| Offer | 14% | __/100 | {status} | {squad ou "-"} |
| Narrative | 9% | __/100 | {status} | {squad ou "-"} |
| Traffic | 7% | __/100 | {status} | {squad ou "-"} |
| Operations | 9% | __/100 | {status} | {squad ou "-"} |
| Success | 7% | __/100 | {status} | {squad ou "-"} |
| Evidence | 9% | __/100 | {status} | {squad ou "-"} |
| Movement | 10% | __/100 | {status} | {squad ou "-"} |
| Culture | 10% | __/100 | {status} | {squad ou "-"} |
| **Cross-ref** | **bônus** | **{+5/0/-5}** | | |
| **TOTAL** | **100%** | **__/100** | **{classificação}** | |

---

## 2. Análise por Dimensão

### 2.1 {Dimensão}

**Score:** {score}/100 ({classificação})

**Arquivos encontrados:**
- ✅ `{path}` — {completude}%
- ❌ `{path}` — ausente

**Existência:** {pts}/25
**Completude:** {pts}/40
**Qualidade:** {pts}/35

**Observações:**
- {observação baseada em dados}

---

## 3. Top 3 Gaps Prioritários

### Gap 1: {Dimensão} (Score: {X}/100)
- **Impacto:** {por que isso importa para o negócio}
- **Downstream:** {quais squads/ações ficam bloqueados}
- **Ação:** {comando específico para resolver}

---

## 4. Consistência Cross-Reference

| Check | Status | Observação |
|-------|--------|------------|
| ICP ↔ Offer | ✅/❌ | {detalhe} |
| Brand ↔ Movement | ✅/❌ | {detalhe} |
| Narrative ↔ Evidence | ✅/❌ | {detalhe} |
| Offer ↔ Success | ✅/❌ | {detalhe} |
| Customer ↔ Traffic | ✅/❌ | {detalhe} |

**Bônus aplicado:** {+5/0/-5}

---

## 5. Plano de Ação Sequenciado

| # | Prioridade | Dimensão | Squad | Comando | Pré-requisito |
|---|-----------|----------|-------|---------|---------------|
| 1 | CRÍTICO | {dim} | {squad} | `{cmd}` | - |
| 2 | ALTO | {dim} | {squad} | `{cmd}` | #1 concluído |
| 3 | MÉDIO | {dim} | {squad} | `{cmd}` | - |

---

*Diagnóstico gerado por COO (workspace-chief) - Squad Hybrid Workspace*
*Data: {YYYY-MM-DD}*
```

### Fase 14: Backlog de Ações (com permissão do usuário)

Após gerar o relatório, apresentar os gaps encontrados e PEDIR PERMISSÃO para adicionar ao backlog:

```yaml
backlog_gate:
  path: "{pasta}/operations/diagnostic-backlog.yaml"
  template: "templates/operations/diagnostic-backlog.yaml"
  steps:
    - list_gaps: "Listar todas as dimensões com score < 70"
    - present_to_user: |
        ## Gaps Identificados — Adicionar ao Backlog?

        | # | Dimensão | Score | Prioridade | Squad | Comando |
        |---|----------|-------|-----------|-------|---------|
        | 1 | Customer | 45 | CRÍTICO | hybrid-workspace (CMO) | *elicit-icp-yaml {slug} |
        | 2 | Brand | 55 | ATENÇÃO | brand | /brand |

        Deseja adicionar estes items ao backlog do business?
        - [Sim, todos] — adiciona todos os gaps
        - [Selecionar] — escolher quais adicionar
        - [Não] — apenas salvar relatório sem backlog

    - on_yes_all: "Criar/atualizar diagnostic-backlog.yaml com todos os gaps"
    - on_select: "Apresentar checkboxes via AskUserQuestion, adicionar selecionados"
    - on_no: "Pular, relatório já foi salvo"

  item_structure:
    id: "DIAG-{YYYY-MM-DD}-{N}"
    created_at: "{date}"
    source_diagnostic: "diagnose-business"
    dimension: "{dimensão}"
    score_at_detection: "{score}"
    priority: "{CRÍTICO|ALTO|MÉDIO|BAIXO}"
    gap_description: "{descrição baseada nos dados}"
    recommended_squad: "{squad}"
    recommended_command: "{comando}"
    prerequisite: "{ID de outro item ou null}"
    status: "pending"
```

Se o arquivo `diagnostic-backlog.yaml` não existe, criar a partir do template.
Se já existe, APPEND novos items (não sobrescrever existentes).
Items duplicados (mesma dimensão + mesmo comando): atualizar `score_at_detection` e `last_diagnostic`.

## Comando: `*diagnose-all`

Variante que executa diagnóstico para TODOS os businesses no workspace:

```yaml
diagnose_all:
  steps:
    - list_businesses: "ls {pasta}/"
    - for_each_business: "executar diagnose-business para cada slug"
    - generate_comparative: "tabela comparativa de todos os businesses"
  output: "{pasta}/diagnosticos/YYYY-MM-DD-all-businesses-diagnostic.md"
```

O relatório comparativo inclui:
1. Tabela ranking de todos os businesses por score global
2. Heatmap de dimensões (quais dimensões são fracas em geral)
3. Top 5 ações prioritárias cross-business

## Validação da Task

- [ ] Relatório gerado em `{pasta}/diagnosticos/`
- [ ] Score global calculado corretamente (soma ponderada)
- [ ] Todas as 9 dimensões avaliadas
- [ ] Cross-reference consistency verificado
- [ ] Plano de ação sequenciado com pré-requisitos respeitados
- [ ] Squads recomendados existem e comandos são válidos

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
*Governance: Business Diagnostic Checklist*
*Versão: 1.0.0*
*Última atualização: 2026-03-18*


---

## Referência: references/diagnose-offer.md

# Task: Diagnose Offer

```yaml
task:
  id: diagnose-offer
  name: Diagnóstico de Força da Oferta
  agent: cmo-architect
  trigger: manual
  elicit: false
  commands:
    - "*diagnose-offer {slug} {product}"
  manifest: "manifests/diagnose-offer.manifest.yaml"
```

## Descrição

Diagnóstico vertical que aprofunda a dimensão "Offer" do diagnose-business. Avalia a força completa de uma oferta específica usando 6 templates do workspace e os scores embutidos nos próprios templates.

**Diferença do diagnose-business:** O diagnose-business dá um score geral (ex: "Offer: 62/100"). Este diagnóstico explica o POR QUE: qual variável da value equation está fraca, quantos case studies existem, se a garantia foi desenhada, se há competidores mapeados.

**Guardian:** CMO Architect
**Manifest:** `manifests/diagnose-offer.manifest.yaml` (38 variáveis)
**Output:** `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-{product}-offer-diagnostic.md`

## Pré-requisitos

- Business existe: `{pasta}/`
- Produto existe: `{pasta}/products/{product}/`
- Pelo menos `offerbook.yaml` presente

## Workflow

### Fase 0: Render Context

Executar `render-context` com manifest `diagnose-offer.manifest.yaml`:
- Input: slug, product
- Output: research-context com 38 variáveis extraídas

### Fase 1: Scoring por Categoria

Usando o research-context renderizado, pontuar cada categoria:

#### 1.1 Oferta Core (30pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| offerbook existe | 5 | `offerbook_exists == true` |
| Nome da oferta definido | 3 | `offer_name != null` |
| Preço definido (número real) | 5 | `offer_price is number` |
| Mecanismo único articulado | 5 | `offer_unique_mechanism != null && len > 20` |
| 5+ módulos/deliverables | 4 | `offer_modules_count >= 5` |
| 3+ objeções com respostas | 4 | `offer_objections_count >= 3` |
| 1+ bônus | 2 | `offer_bonuses_count >= 1` |
| Diagnostic summary preenchido | 2 | `offer_diagnostic_summary != null` |

#### 1.2 Value Equation (20pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| value-equation.yaml existe | 4 | `value_equation_exists == true` |
| Dream Outcome score >= 7 | 4 | `ve_dream_outcome_score >= 7` |
| Perceived Likelihood score >= 7 | 4 | `ve_perceived_likelihood_score >= 7` |
| Time Delay score >= 7 | 4 | `ve_time_delay_score >= 7` |
| Effort Sacrifice score >= 7 | 4 | `ve_effort_sacrifice_score >= 7` |

Se value-equation.yaml não existe, esta seção pontua 0 e aparece como gap prioritário.

#### 1.3 Proof Stack (20pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| proof.yaml existe | 3 | `proof_exists == true` |
| 3+ case studies | 4 | `proof_case_studies_count >= 3` |
| 3+ estatísticas | 3 | `proof_statistics_count >= 3` |
| 3+ before/after | 3 | `proof_before_after_count >= 3` |
| Proof por nível de awareness | 3 | `proof_testimonials_by_archetype_count >= 3` |
| Verificação tier distribuída | 2 | `proof_verification_tiers has VERIFIED` |
| Missing proof identificado | 2 | `proof_missing_to_gather > 0` (autoconhecimento) |

#### 1.4 Testimonials (15pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| testimonials.yaml existe | 2 | `testimonials_exists == true` |
| 10+ depoimentos | 4 | `testimonials_total_count >= 10` |
| Cobertura por awareness level | 3 | `testimonials_by_awareness_coverage >= 3` |
| Cobertura por resultado | 3 | `testimonials_by_result_coverage >= 3` |
| Vídeo testimonials | 2 | `testimonials_video_count > 0` |
| Checklist de coleta avançado | 1 | `testimonials_checklist_completion >= 50%` |

#### 1.5 Garantia (10pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| guarantee-design.yaml existe | 2 | `guarantee_exists == true` |
| Nível de garantia definido | 3 | `guarantee_level != null` |
| Nome da garantia criado | 2 | `guarantee_name != null` |
| Filtro ético passou | 3 | `guarantee_ethical_passed == "APPROVED"` |

#### 1.6 Competitividade (5pts)

| Critério | Pts | Condição |
|----------|-----|----------|
| competitor-analysis.yaml existe | 1 | `competitor_exists == true` |
| 3+ competidores mapeados | 1 | `competitor_count >= 3` |
| Posição definida | 1 | `competitor_your_position != null` |
| Diferenciação forte (>= 7) | 1 | `competitor_differentiation_strength >= 7` |
| Unfair advantage articulado | 1 | `competitor_unfair_advantage != null` |

### Fase 2: Diagnóstico da Value Equation

Se value-equation.yaml existe e tem scores:
- Identificar a variável mais fraca (weakest_variable)
- Mapear para ação específica:
  - Dream Outcome fraco → Reformular promessa (storytelling squad)
  - Perceived Likelihood fraco → Fortalecer proof stack (deep-research squad)
  - Time Delay alto → Criar quick wins no onboarding (course-creator squad)
  - Effort/Sacrifice alto → Simplificar oferta (hormozi squad)

### Fase 3: Gap Analysis

Listar gaps ordenados por impacto:

```yaml
gaps:
  - category: "{nome}"
    score: "{pts}/{max}"
    impact: "ALTO|MÉDIO|BAIXO"
    action: "{ação específica}"
    squad: "{squad recomendado}"
    command: "{comando}"
```

### Fase 4: Geração do Relatório

Output: `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-{product}-offer-diagnostic.md`

## Squads Recomendados por Gap

| Gap | Squad | Comando |
|-----|-------|---------|
| Oferta Core incompleta | hormozi | `/hormozi *audit-offer` |
| Value Equation fraca | hormozi | `/hormozi *value-equation` |
| Proof Stack fraco | deep-research | `/deep-research` |
| Testimonials insuficientes | hybrid-workspace (CMO) | `*elicit-testimonials {slug}` |
| Sem garantia | hormozi | `/hormozi *guarantee-design` |
| Sem análise competitiva | spy | `/spy *competitive-intel` |

## Fase 5: Backlog de Ações (com permissão do usuário)

Após gerar gaps, apresentar ao usuário e pedir permissão para adicionar ao backlog:

```yaml
backlog_gate:
  path: "{pasta}/operations/diagnostic-backlog.yaml"
  action: "Apresentar gaps e perguntar: 'Adicionar ao backlog? [Sim, todos | Selecionar | Não]'"
  source_diagnostic: "diagnose-offer"
  items: "Cada gap da Fase 3 vira um item com dimensão='offer', sub-categoria identificada"
```

Mesma mecânica do `diagnose-business` Fase 14. Items são APPEND (não sobrescreve).

## Validação

- [ ] Research-context renderizado com 38 variáveis
- [ ] Score total calculado (/100)
- [ ] Value equation diagnosticada (se disponível)
- [ ] Gaps ordenados por impacto
- [ ] Squads recomendados existem e comandos são válidos
- [ ] Relatório gerado no path correto

---

*Task do Squad Hybrid Workspace - CMO Architect*
*Versão: 1.0.0*


---

## Referência: references/growth-levers.md

# Task: Growth Levers

```yaml
task:
  id: growth-levers
  name: Identificação de Alavancas de Crescimento
  agent: workspace-chief
  trigger: manual
  elicit: false
  commands:
    - "*growth-levers {slug}"
  depends_on:
    - diagnose-business  # Requer output de diagnóstico prévio
```

## Descrição

Task derivada estratégica que identifica as top 3 alavancas de crescimento baseada no output do `diagnose-business`. Não inventa dados: combina scores existentes com o grafo de dependências de squads para calcular impacto.

**Diferença de um diagnóstico:** Diagnósticos pontuam. Esta task PRIORIZA. Responde: "de tudo que está fraco, o que resolver primeiro gera o maior efeito cascata?"

**Guardian:** COO (Chief Operating Officer)
**Input:** Output de `diagnose-business` (relatório ou execução prévia)
**Output:** `{pasta}/diagnosticos/YYYY-MM-DD-{slug}-growth-levers.md`

## Pré-requisitos

- `diagnose-business` executado para o slug (relatório em `{pasta}/diagnosticos/`)
- OU executar `diagnose-business` primeiro (inline)

## Lógica de Priorização (100% determinística)

### Passo 1: Coletar Scores por Dimensão

Do output do diagnose-business:
```yaml
scores:
  customer: {score}    # 0-100
  brand: {score}
  offer: {score}
  narrative: {score}
  traffic: {score}
  operations: {score}
  success: {score}
  evidence: {score}
  movement: {score}
  culture: {score}
```

### Passo 2: Filtrar Dimensões < 70

Apenas dimensões com score < 70 (ATENÇÃO ou CRÍTICO) são candidatas a alavancas.
Se todas >= 70, retornar "Nenhuma alavanca crítica. Negócio em estado ADEQUADO ou FORTE."

### Passo 3: Calcular Impacto Downstream

Para cada dimensão < 70, contar quantos squads ficam BLOQUEADOS:

```yaml
dependency_graph:
  customer:
    blocks:
      - copy      # requer Customer >= 70
      - traffic-masters  # requer Customer >= 70
    blocked_count: 2

  brand:
    blocks:
      - copy      # requer Brand >= 70
      - storytelling  # requer Brand >= 50
    blocked_count: 2  # ou 1 se score >= 50

  offer:
    blocks:
      - traffic-masters  # requer Offer >= 70
    blocked_count: 1

  narrative:
    blocks:
      - storytelling  # requer Narrative >= 50
    blocked_count: 1  # ou 0 se score >= 50

  traffic:
    blocks: []  # nenhum squad depende diretamente de Traffic
    blocked_count: 0

  operations:
    blocks:
      - hybrid-sop  # SOP suite depende de Operations preenchido
    blocked_count: 1

  success:
    blocks: []
    blocked_count: 0

  evidence:
    blocks: []
    blocked_count: 0

  movement:
    blocks: []
    blocked_count: 0

  culture:
    blocks: []
    blocked_count: 0
```

### Passo 4: Calcular Score de Prioridade

Para cada dimensão < 70:

```
prioridade = (blocked_count × 30) + (peso_dimensão × 100) + ((70 - score) × 0.5)
```

Onde:
- `blocked_count × 30`: squads downstream bloqueados (peso alto)
- `peso_dimensão × 100`: importância estratégica da dimensão
- `(70 - score) × 0.5`: distância do threshold (quanto mais longe de 70, mais urgente)

### Passo 5: Ranking e Seleção Top 3

Ordenar por prioridade (maior primeiro). Selecionar top 3.

Para cada alavanca, gerar:

```yaml
lever:
  rank: 1
  dimension: "customer"
  score: 45
  priority_score: 82.5  # (2×30) + (0.14×100) + ((70-45)×0.5)
  why: "Customer em 45 bloqueia copy E traffic-masters. Resolver primeiro desbloqueia 2 squads."
  action: "*elicit-icp-yaml {slug}"
  squad: "hybrid-workspace (CMO)"
  files_to_fill:
    - "company/icp.yaml"
    - "company/diagnosis.yaml"
    - "company/analytics.yaml"
  estimated_templates: 3
```

### Passo 6: Sequenciamento

Se alavanca #2 depende de alavanca #1 (ex: copy requer Customer E Brand), indicar:
```
1. Resolver Customer (bloqueia copy + traffic)
2. Resolver Brand (desbloqueia copy, já desbloqueado por #1)
3. Resolver Offer (desbloqueia traffic-masters)
```

## Output: Relatório

```markdown
# Alavancas de Crescimento: {business_name}

**Data:** {YYYY-MM-DD}
**Business:** {slug}
**Score Global:** {score}/100
**Dimensões < 70:** {count}

---

## Top 3 Alavancas

### #1: {Dimensão} (Score: {X}/100)

**Por que esta é a prioridade:**
{justificativa baseada em dados: quantos squads bloqueia, peso estratégico}

**Squads desbloqueados ao resolver:**
- {squad_1} ({comando})
- {squad_2} ({comando})

**Ação imediata:**
`{comando específico}`

**Templates a preencher:**
- {arquivo_1}
- {arquivo_2}

---

### #2: {Dimensão} ...

### #3: {Dimensão} ...

---

## Sequência Recomendada

| Ordem | Dimensão | Squad | Comando | Desbloqueia |
|-------|----------|-------|---------|-------------|
| 1 | {dim} | {squad} | `{cmd}` | {squads} |
| 2 | {dim} | {squad} | `{cmd}` | {squads} |
| 3 | {dim} | {squad} | `{cmd}` | {squads} |

---

*Gerado por COO (workspace-chief)*
```

## Backlog de Ações (com permissão do usuário)

Após apresentar as top 3 alavancas, perguntar:

```
As 3 alavancas acima devem ser adicionadas ao backlog do business?
- [Sim, todas] — adiciona as 3 como items priorizados
- [Selecionar] — escolher quais
- [Não] — apenas consulta, sem persistir
```

Se sim, adicionar em `{pasta}/operations/diagnostic-backlog.yaml` com `source_diagnostic: "growth-levers"` e prioridade baseada no ranking.

## Validação

- [ ] Diagnóstico prévio existe ou foi executado
- [ ] Apenas dimensões < 70 consideradas
- [ ] Cálculo de prioridade documentado e verificável
- [ ] Sequência respeita dependências entre dimensões
- [ ] Comandos recomendados são válidos

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
*Versão: 1.0.0*
