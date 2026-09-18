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
