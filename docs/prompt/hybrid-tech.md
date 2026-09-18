# hybrid-tech · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-tech.md` uma skill chamada hybrid-tech. Quando eu pedir algo como "mapeia a stack de [empresa]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# A STACK · Stack, estratégia tecnológica e estratégia de IA

O que roda hoje, o que deveria rodar, e onde a IA entra de verdade. Três elicitações curtas, conduzidas pelo método do CTO, do CIO e do CAIO: stack atual, estratégia de tecnologia e estratégia de IA, com modelos, orquestração e o que não automatizar.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "mapeia a stack de [empresa]" ou "estratégia de IA para [empresa]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

| procedimento | referência |
|---|---|
| elicit tech stack | `references/elicit-tech-stack.md` |
| elicit tech strategy | `references/elicit-tech-strategy.md` |
| elicit ai strategy | `references/elicit-ai-strategy.md` |
| template que esta skill preenche | `templates/tech-stack.yaml` |
| template que esta skill preenche | `templates/tech-strategy.yaml` |
| template que esta skill preenche | `templates/ai-strategy.yaml` |


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

- `references/elicit-ai-strategy.md`
- `references/elicit-tech-stack.md`
- `references/elicit-tech-strategy.md`
- `templates/ai-strategy.yaml`
- `templates/tech-stack.yaml`
- `templates/tech-strategy.yaml`


---

## Referência: references/elicit-ai-strategy.md

# Task: Elicit AI Strategy

```yaml
task:
  id: elicit-ai-strategy
  name: Elicitação de Estratégia de IA
  agent: caio-architect
  elicit: true
```

## Descrição

O CAIO (Intelligence Architect) conduz elicitação para definir estratégia de IA, configuração de modelos e orquestração de agentes.

## Workflow

### Fase 1: Uso de IA

```yaml
elicitation:
  questions:
    - id: ai_tasks
      text: "Quais tarefas você quer automatizar com IA?"
      required: true

    - id: autonomy_level
      text: "Qual nível de autonomia os agentes devem ter? (baixo, médio, alto)"
      required: true

    - id: ai_provider
      text: "Qual provider de IA prefere? (OpenAI, Anthropic, Google, open-source)"
      required: true

    - id: ai_budget
      text: "Tem budget definido para IA? Qual valor mensal?"
      required: false
```

### Fase 2: Capacidades

```yaml
elicitation:
  questions:
    - id: capabilities
      text: "Precisa de capacidades específicas? (visão, código, análise, voz)"
      required: true

    - id: squads_needed
      text: "Quais squads especializados você precisa? (copy, design, dev, etc)"
      required: false

    - id: agent_interaction
      text: "Como quer que os agentes interajam entre si? (hierárquico, peer-to-peer)"
      required: true
```

### Fase 3: Modelos

```yaml
elicitation:
  questions:
    - id: model_complex
      text: "Qual modelo para tarefas complexas? (GPT-4, Claude Opus, etc)"
      required: true

    - id: model_simple
      text: "Qual modelo para tarefas simples/rápidas? (GPT-3.5, Claude Haiku)"
      required: true

    - id: model_embedding
      text: "Precisa de modelos de embedding? Qual?"
      required: false

    - id: model_image
      text: "Precisa de modelos de imagem? (DALL-E, Midjourney, Stable Diffusion)"
      required: false

    - id: model_fallback
      text: "Qual fallback se o modelo principal falhar?"
      required: true
```

### Fase 4: Orquestração

```yaml
elicitation:
  questions:
    - id: communication
      text: "Como os agentes devem se comunicar? (mensagens, eventos, API)"
      required: true

    - id: hierarchy
      text: "Qual hierarquia entre agentes? (flat, tree, hub-spoke)"
      required: true

    - id: escalation
      text: "Quando escalar de agente simples para squad?"
      required: true

    - id: error_handling
      text: "Como tratar erros e fallbacks?"
      required: true

    - id: observability
      text: "Qual nível de logging/observabilidade? (básico, detalhado, debug)"
      required: true
```

### Fase 5: Output

Preencher `{pasta}/ai/strategy.yaml` (a partir de `templates/ai/strategy.yaml`):

```yaml
metadata:
  company_name: "{company_name}"
  product_name: "{product_name}"
  status: "COMPLETE"
  last_updated: "{iso_datetime}"
  owner: "CAIO"

strategy_scope:
  primary_objectives:
    - "{ai_tasks}"
  target_capabilities:
    - "{capabilities}"
  autonomy_level: "{autonomy_level}"
  constraints:
    budget_monthly: "{ai_budget}"

model_policy:
  preferred_provider: "{ai_provider}"
  default_model: "{model_complex}"
  fallback_model: "{model_fallback}"
  selection_rules:
    complex_reasoning: "{model_complex}"
    high_volume: "{model_simple}"
    structured_output: "{model_embedding_or_simple}"
    multimodal: "{model_image}"

agent_topology:
  orchestration_pattern: "{agent_interaction}"
  specialist_squads:
    - "{squads_needed}"
  escalation_rules:
    - "{escalation}"
  human_in_the_loop: "{error_handling}"

operations:
  logging_and_observability: "{observability}"
  cost_controls: []

use_cases:
  priority_1:
    name: "{use_case_1}"
    success_metric: "{success_metric_1}"
    owner: "{owner_1}"
```

## Validação

- [ ] Modelos configurados
- [ ] Estratégia de agentes definida
- [ ] Orquestração documentada
- [ ] Arquivo salvo em `{pasta}/ai/strategy.yaml`


---

## Referência: references/elicit-tech-stack.md

# Task: Elicit Tech Stack

```yaml
task:
  id: elicit-tech-stack
  name: Elicitação de Tech Stack Operacional
  agent: cio-engineer
  elicit: true
```

## Descrição

O CIO (Infra Engineer) conduz elicitação para definir tech stack operacional, code standards e infraestrutura.

## Workflow

### Fase 1: Stack Técnico

```yaml
elicitation:
  questions:
    - id: backend_lang
      text: "Qual linguagem principal do backend? (Node.js, Python, Go, etc)"
      required: true

    - id: frontend_framework
      text: "Qual framework de frontend? (React, Vue, Next.js, etc)"
      required: true

    - id: database
      text: "Qual banco de dados principal? (PostgreSQL, MongoDB, etc)"
      required: true

    - id: typescript
      text: "Usa TypeScript ou JavaScript puro?"
      required: true

    - id: package_manager
      text: "Qual gerenciador de pacotes? (npm, yarn, pnpm)"
      required: true

    - id: build_tool
      text: "Qual ferramenta de build? (Vite, Webpack, esbuild)"
      required: false
```

### Fase 2: Code Standards

```yaml
elicitation:
  questions:
    - id: style_guide
      text: "Qual style guide segue? (Airbnb, Google, Standard, custom)"
      required: true

    - id: linting
      text: "Usa ESLint? Prettier? Qual configuração?"
      required: true

    - id: commit_convention
      text: "Qual convenção de commits? (conventional, custom)"
      required: true

    - id: folder_structure
      text: "Como organiza pastas no projeto? (por feature, por tipo, etc)"
      required: true

    - id: testing
      text: "Usa testes? Qual framework? (Jest, Vitest, Playwright)"
      required: true

    - id: test_coverage
      text: "Qual cobertura de testes mínima?"
      required: false
```

### Fase 3: Infraestrutura

```yaml
elicitation:
  questions:
    - id: cloud_provider
      text: "Qual cloud provider? (AWS, GCP, Azure, Vercel, Railway)"
      required: true

    - id: cicd
      text: "Usa CI/CD? Qual ferramenta? (GitHub Actions, GitLab CI, etc)"
      required: true

    - id: deploy_method
      text: "Como faz deploy? (manual, automático, preview deploys)"
      required: true

    - id: environments
      text: "Tem ambientes separados? (dev, staging, prod)"
      required: true

    - id: secrets_management
      text: "Como gerencia secrets? (.env, Vault, cloud secrets)"
      required: true

    - id: monitoring
      text: "Usa monitoramento? Qual? (Sentry, DataDog, etc)"
      required: false
```

### Fase 4: Output

Preencher `{pasta}/tech/stack.yaml` (a partir de `templates/tech/stack.yaml`):

```yaml
metadata:
  company_name: "{company_name}"
  product_name: "{product_name}"
  status: "COMPLETE"
  last_updated: "{iso_datetime}"
  owner: "CIO"

stack:
  backend:
    language: "{backend_lang}"
  frontend:
    framework: "{frontend_framework}"
  data:
    primary_database: "{database}"
  developer_tooling:
    package_manager: "{package_manager}"
    build_tool: "{build_tool}"

code_standards:
  style_guide: "{style_guide}"
  linting: "{linting}"
  typing_policy: "{typescript}"
  testing:
    unit: "{testing}"
    coverage_target: "{test_coverage}"
  commit_convention: "{commit_convention}"

infrastructure:
  cloud_provider: "{cloud_provider}"
  cicd: "{cicd}"
  deploy_strategy: "{deploy_method}"
  environments:
    dev: "{env_dev}"
    staging: "{env_staging}"
    production: "{env_prod}"
  secrets_management: "{secrets_management}"
  observability:
    logs: "{monitoring_logs}"
    metrics: "{monitoring_metrics}"
    alerting: "{monitoring_alerting}"

integrations:
  internal_services: []
  external_dependencies: []
```

## Validação

- [ ] Stack técnico completo
- [ ] Code standards definidos
- [ ] Infraestrutura documentada
- [ ] Arquivo salvo em `{pasta}/tech/stack.yaml`


---

## Referência: references/elicit-tech-strategy.md

# Task: Elicit Tech Strategy

```yaml
task:
  id: elicit-tech-strategy
  name: Elicitação de Estratégia Tecnológica
  agent: cto-architect
  elicit: true
```

## Descrição

O CTO (Tech Architect) conduz elicitação para definir estratégia tecnológica de alto nível, arquitetura e roadmap técnico.

## Workflow

### Fase 1: Contexto do Produto

```yaml
elicitation:
  questions:
    - id: product_core
      text: "Qual é o core do seu produto? (web app, mobile, API, SaaS, etc)"
      required: true

    - id: scale
      text: "Qual escala você precisa suportar? (usuários, requests, volume de dados)"
      required: true

    - id: constraints
      text: "Quais são suas restrições técnicas? (budget, prazo, tamanho do time)"
      required: true
```

### Fase 2: Arquitetura

```yaml
elicitation:
  questions:
    - id: architecture
      text: "Qual arquitetura prefere? (monolito, microserviços, serverless, híbrido)"
      required: true

    - id: legacy
      text: "Existe stack legado que precisa integrar?"
      required: false

    - id: availability
      text: "Qual nível de disponibilidade você precisa? (99%, 99.9%, 99.99%)"
      required: true

    - id: security
      text: "Quais são os requisitos de segurança? (compliance, LGPD, SOC2, etc)"
      required: true
```

### Fase 3: Evolução

```yaml
elicitation:
  questions:
    - id: iteration_speed
      text: "Qual é a velocidade de iteração desejada? (deploys por dia/semana)"
      required: true

    - id: tech_bets
      text: "Quais tecnologias emergentes você considera adotar?"
      required: false

    - id: tech_avoid
      text: "Quais tecnologias você quer evitar e por quê?"
      required: false
```

### Fase 4: Output

Preencher `{pasta}/tech/strategy.yaml` (a partir de `templates/tech/strategy.yaml`):

```yaml
metadata:
  company_name: "{company_name}"
  product_name: "{product_name}"
  status: "COMPLETE"
  last_updated: "{iso_datetime}"
  owner: "CTO"

strategy_context:
  product_core: "{product_core}"
  current_scale:
    users: "{scale_users}"
    requests_per_day: "{scale_requests}"
    data_volume: "{scale_data}"
  key_constraints:
    budget: "{budget_constraint}"
    timeline: "{timeline_constraint}"
    team_capacity: "{team_constraint}"

platform_decisions:
  application_architecture: "{architecture}"
  integration_strategy: "{legacy_or_none}"

security_and_reliability:
  availability_target: "{availability}"
  compliance_requirements:
    - "{security_requirement_1}"

roadmap:
  now_0_3m:
    - "{roadmap_item_1}"
  next_3_6m:
    - "{roadmap_item_2}"
  later_6_12m:
    - "{roadmap_item_3}"

tradeoffs:
  accepted:
    - "{tech_bets}"
  rejected:
    - "{tech_avoid}"
```

## Validação

- [ ] Arquitetura definida
- [ ] Requisitos de escala claros
- [ ] Direção tecnológica documentada
- [ ] Arquivo salvo em `{pasta}/tech/strategy.yaml`


---

## Referência: templates/ai-strategy.yaml

---
# AI/STRATEGY.YAML - Estrategia de IA por negocio
# Purpose: Definir casos de uso, selecao de modelos e orquestracao de agentes.
# Guardian: CAIO
# Timing: Revisar quando objetivos de automacao mudarem.

metadata:
  version: "1.0"
  company_name: "FILL_THIS"
  product_name: "FILL_THIS"
  status: "TEMPLATE"
  last_updated: "FILL_THIS"
  owner: "CAIO"
  notes: |
    Template sem dados reais.
    Cobrir estrategia, governanca e operacao de IA do negocio.

strategy_scope:
  primary_objectives: []
  target_capabilities: []
  autonomy_level: "FILL - low, medium, high"
  constraints:
    budget_monthly: "FILL"
    risk_tolerance: "FILL"
    compliance: []

model_policy:
  preferred_provider: "FILL"
  default_model: "FILL"
  fallback_model: "FILL"
  selection_rules:
    complex_reasoning: "FILL"
    high_volume: "FILL"
    structured_output: "FILL"
    multimodal: "FILL"

agent_topology:
  orchestration_pattern: "FILL"
  specialist_squads: []
  escalation_rules: []
  human_in_the_loop: "FILL"

operations:
  prompting_standards: []
  quality_assurance: []
  logging_and_observability: "FILL"
  incident_response: "FILL"
  cost_controls: []

use_cases:
  priority_1:
    name: "FILL"
    success_metric: "FILL"
    owner: "FILL"
  priority_2:
    name: "FILL"
    success_metric: "FILL"
    owner: "FILL"

cross_references:
  related_templates:
    - "tech/strategy.yaml"
    - "tech/stack.yaml"
    - "operations/kpi-scorecards.yaml"


---

## Referência: templates/tech-stack.yaml

---
# TECH/STACK.YAML - Stack operacional por negocio
# Purpose: Consolidar stack, padroes de codigo e infraestrutura operacional.
# Guardian: CIO
# Timing: Atualizar sempre que stack/infra mudar.

metadata:
  version: "1.0"
  company_name: "FILL_THIS"
  product_name: "FILL_THIS"
  status: "TEMPLATE"
  last_updated: "FILL_THIS"
  owner: "CIO"
  notes: |
    Template sem dados reais.
    Centraliza implementacao operacional da estrategia definida em tech/strategy.yaml.

stack:
  backend:
    language: "FILL"
    framework: "FILL"
    runtime: "FILL"
  frontend:
    framework: "FILL"
    state_management: "FILL"
    styling: "FILL"
  data:
    primary_database: "FILL"
    cache: "FILL"
    queue: "FILL"
  developer_tooling:
    package_manager: "FILL"
    build_tool: "FILL"
    monorepo_tool: "FILL"

code_standards:
  style_guide: "FILL"
  linting: "FILL"
  formatting: "FILL"
  typing_policy: "FILL"
  testing:
    unit: "FILL"
    integration: "FILL"
    e2e: "FILL"
    coverage_target: "FILL"
  commit_convention: "FILL"

infrastructure:
  cloud_provider: "FILL"
  environments:
    dev: "FILL"
    staging: "FILL"
    production: "FILL"
  cicd: "FILL"
  deploy_strategy: "FILL"
  secrets_management: "FILL"
  observability:
    logs: "FILL"
    metrics: "FILL"
    alerting: "FILL"

integrations:
  internal_services: []
  external_dependencies: []

cross_references:
  related_templates:
    - "tech/strategy.yaml"
    - "ai/strategy.yaml"


---

## Referência: templates/tech-strategy.yaml

---
# TECH/STRATEGY.YAML - Estrategia tecnologica por negocio
# Purpose: Definir principios de arquitetura, trade-offs e roadmap tecnico.
# Guardian: CTO
# Timing: FILL ONCE - Revisar quando houver mudanca de estagio/escala.

metadata:
  version: "1.0"
  company_name: "FILL_THIS"
  product_name: "FILL_THIS"
  status: "TEMPLATE"
  last_updated: "FILL_THIS"
  owner: "CTO"
  notes: |
    Template sem dados reais.
    Preencher com decisoes estrategicas, nao implementacao tatica.

strategy_context:
  product_core: "FILL - web app, SaaS, API, mobile, etc"
  current_scale:
    users: "FILL"
    requests_per_day: "FILL"
    data_volume: "FILL"
  projected_scale_24m:
    users: "FILL"
    requests_per_day: "FILL"
    data_volume: "FILL"
  key_constraints:
    budget: "FILL"
    timeline: "FILL"
    team_capacity: "FILL"

architecture_principles:
  principle_1:
    name: "FILL"
    rationale: "FILL"
    implications: "FILL"
  principle_2:
    name: "FILL"
    rationale: "FILL"
    implications: "FILL"
  principle_3:
    name: "FILL"
    rationale: "FILL"
    implications: "FILL"

platform_decisions:
  runtime: "FILL"
  application_architecture: "FILL"
  data_architecture: "FILL"
  integration_strategy: "FILL"
  buy_vs_build_policy: "FILL"

security_and_reliability:
  availability_target: "FILL"
  compliance_requirements: []
  key_risks: []
  mitigation_strategy: []

roadmap:
  now_0_3m: []
  next_3_6m: []
  later_6_12m: []

tradeoffs:
  accepted: []
  rejected: []

cross_references:
  related_templates:
    - "tech/stack.yaml"
    - "ai/strategy.yaml"
    - "operations/team-structure.yaml"
