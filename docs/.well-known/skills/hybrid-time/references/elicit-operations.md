# Task: Elicit Operations

```yaml
task:
  id: elicit-operations
  name: Elicitação de Estrutura Operacional
  agent: workspace-chief
  elicit: true
```

## Descrição

O COO (Operations Orchestrator) conduz elicitação para definir estrutura operacional, processos e configuração geral do workspace.

## Workflow

### Fase 1: Estrutura da Empresa

```yaml
elicitation:
  questions:
    - id: company_stage
      text: "Em qual estágio está a empresa? (ideia, MVP, growth, scale)"
      required: true

    - id: team_size
      text: "Qual o tamanho atual do time?"
      required: true

    - id: departments
      text: "Quais áreas/departamentos existem?"
      required: true
```

### Fase 2: Produtos

```yaml
elicitation:
  questions:
    - id: products
      text: "Quais produtos a empresa oferece? (liste todos)"
      required: true

    - id: main_product
      text: "Qual é o produto principal/carro-chefe?"
      required: true

    - id: product_stage
      text: "Em qual estágio cada produto está?"
      required: false
```

### Fase 3: Processos

```yaml
elicitation:
  questions:
    - id: workflows
      text: "Quais são os principais workflows da empresa?"
      required: true

    - id: tools
      text: "Quais ferramentas vocês usam? (Notion, Slack, etc)"
      required: false

    - id: cadence
      text: "Qual a cadência de reuniões/rituais?"
      required: false
```

### Fase 4: Output

**{pasta}/config.yaml:**
```markdown
# Configuração do Workspace

## Empresa

- **Estágio:** {company_stage}
- **Tamanho do Time:** {team_size}
- **Áreas:** {departments}

## Produtos

### Principal
{main_product}

### Todos os Produtos
{products}

### Estágios
{product_stage}

## Operações

### Workflows Principais
{workflows}

### Ferramentas
{tools}

### Cadência
{cadence}

---

*Gerado via Squad Hybrid Workspace (COO) em {date}*
```

## Próximo Passo: SOP Documentation

Após completar a elicitação operacional, considere documentar processos via Hybrid-SOP:

```
@sop-chief
*create-sop-operations-suite {slug}
```

Isso transforma os YAMLs de operations (team-structure, pricing-strategy, kpi-scorecards, commission-design) em SOPs executáveis por humanos e agentes IA. Os SOPs são salvos em `{pasta}/sops/`.

## Validação

- [ ] Estrutura da empresa documentada
- [ ] Produtos listados
- [ ] Processos identificados
- [ ] Arquivo salvo em `{pasta}/config.yaml`
