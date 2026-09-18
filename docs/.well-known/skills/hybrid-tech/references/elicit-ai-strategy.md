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
