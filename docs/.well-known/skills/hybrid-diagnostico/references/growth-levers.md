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
