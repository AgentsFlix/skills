# Task: Elicit Team Structure (YAML)

```yaml
task:
  id: elicit-team-structure
  name: Elicitação da Estrutura de Time (YAML)
  agent: workspace-chief
  elicit: true
  output_format: yaml
  target_template: operations/team-structure.yaml
```

## Descrição

O COO conduz elicitação para documentar a estrutura atual do time, a estrutura ideal, e o plano de contratação. O output popula `team-structure.yaml` no diretório `operations/`.

## Prerequisites

- Bootstrap executado
- Templates scaffolded
- Recomendado: `company-profile.yaml` preenchido (para contexto de stage e team_size)

## Usage

```
*elicit-team-structure {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/operations/team-structure.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/company-profile.yaml` (se existir) para team_size e stage.
3. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Time Atual (6 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Time Atual"
  questions:
    - id: headcount
      text: "Qual o tamanho atual do time? (total de pessoas)"
      required: true
      maps_to: current_team.total_headcount

    - id: role_1
      text: "Descreva o cargo/papel #1: título, quem ocupa, tipo (full-time/part-time/contractor), e 2-3 KPIs."
      required: true
      maps_to: current_team.roles_filled.role_1

    - id: role_2
      text: "Cargo/papel #2? (mesmo formato)"
      required: false
      maps_to: current_team.roles_filled.role_2

    - id: role_3
      text: "Cargo/papel #3? (mesmo formato)"
      required: false
      maps_to: current_team.roles_filled.role_3

    - id: additional_roles
      text: "Há mais papéis? Liste resumidamente."
      required: false
      maps_to: current_team.roles_filled

    - id: founder_hats
      text: "Quais papéis o FUNDADOR acumula? (liste todos os 'chapéus' que o fundador usa)"
      required: true
      maps_to: current_team.founder_wearing_hats
```

### Fase 2: Estrutura Ideal (5 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Estrutura Ideal"
  questions:
    - id: dept_marketing
      text: "MARKETING: Quem lidera? Quantas pessoas precisa? Quais papéis específicos? Qual KPI principal?"
      required: true
      maps_to: ideal_structure.departments.marketing

    - id: dept_sales
      text: "VENDAS: Mesmo formato — líder, tamanho, papéis, KPI."
      required: true
      maps_to: ideal_structure.departments.sales

    - id: dept_delivery
      text: "ENTREGA/OPERAÇÕES: Mesmo formato — líder, tamanho, papéis, KPI."
      required: true
      maps_to: ideal_structure.departments.delivery

    - id: dept_support
      text: "SUPORTE/CS: Mesmo formato — líder, tamanho, papéis, KPI."
      required: false
      maps_to: ideal_structure.departments.support

    - id: org_chart
      text: "Se tivesse que desenhar o organograma ideal em 2-3 anos, como seria?"
      required: false
      maps_to: ideal_structure
```

### Fase 3: Plano de Contratação (5 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Plano de Contratação"
  questions:
    - id: next_hire_1
      text: "Qual é a PRÓXIMA contratação? (título, por que é prioridade, prazo)"
      required: true
      maps_to: hiring_plan.next_hire_1

    - id: next_hire_2
      text: "Segunda contratação na fila?"
      required: false
      maps_to: hiring_plan.next_hire_2

    - id: next_hire_3
      text: "Terceira contratação?"
      required: false
      maps_to: hiring_plan.next_hire_3

    - id: hiring_criteria
      text: "Quais critérios usa para contratar? (skills vs attitude, experiência mínima, etc.)"
      required: true
      maps_to: hiring_plan.criteria

    - id: hiring_budget
      text: "Qual o budget disponível para contratação? (mensal ou total)"
      required: false
      maps_to: hiring_plan.budget
```

### Fase 4: Diagnóstico (4 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Diagnóstico"
  questions:
    - id: role_clarity
      text: "De 1-10, quão claros estão os papéis e responsabilidades hoje?"
      required: true
      maps_to: diagnostic.role_clarity

    - id: kpi_alignment
      text: "De 1-10, quão bem definidos estão os KPIs por pessoa/departamento?"
      required: true
      maps_to: diagnostic.kpi_alignment

    - id: bottleneck
      text: "Qual é o maior gargalo organizacional hoje? (onde o time trava)"
      required: true
      maps_to: diagnostic.bottleneck

    - id: scalability
      text: "De 1-10, quão preparada está a estrutura para dobrar de tamanho?"
      required: true
      maps_to: diagnostic.scalability
```

### Fase 5: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `team-structure.yaml`:**
   - Campos respondidos: substituir `FILL` pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` / `INCOMPLETE`.
3. **Calcular completude** e salvar em `{pasta}/operations/team-structure.yaml`.
4. **Relatório** com seções e completude.

## Convenções de Output YAML

- Campos respondidos: substituir `FILL` / `FILL_THIS` pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Headcount e founder hats documentados
- [ ] Pelo menos 2 departamentos da estrutura ideal definidos
- [ ] Próxima contratação identificada
- [ ] Diagnóstico com scores numéricos
- [ ] YAML válido salvo em operations/team-structure.yaml

## Next Steps

Após team-structure:
1. Completar pipeline com `*setup-business-profile {slug}`
2. Dados alimentam `kpi-scorecards.yaml` (futuro)

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
