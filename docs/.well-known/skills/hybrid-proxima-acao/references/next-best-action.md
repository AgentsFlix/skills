# Task: Next Best Action

```yaml
task:
  id: next-best-action
  name: Próxima Melhor Ação
  agent: workspace-chief
  trigger: manual
  elicit: false
  commands:
    - "*next-best-action {slug}"
  depends_on:
    - diagnose-business
```

## Descrição

Task derivada que retorna UMA ÚNICA ação prioritária. Pega o output do `diagnose-business` (ou `growth-levers`) e responde: "se você só pode fazer UMA coisa agora, faça ESTA."

**Filosofia:** Empresários ficam paralisados com 10 gaps e 20 recomendações. Esta task elimina a paralisia: uma ação, um squad, um comando.

**Guardian:** COO (Chief Operating Officer)

## Workflow

### Passo 1: Identificar a Alavanca #1

Usar mesma lógica de `growth-levers`, pegar apenas a #1.

Se não há alavancas (todas dimensões >= 70):
```
"Seu negócio está em estado ADEQUADO (score {X}/100).
Nenhuma ação urgente. Recomendo *diagnose-offer ou *diagnose-funnel
para encontrar melhorias pontuais."
```

### Passo 2: Resolver para Ação Concreta

Traduzir a alavanca para ação executável:

```yaml
action_resolution:
  customer:
    if_score_below_30: "*scaffold-templates {slug} → depois *elicit-icp-yaml {slug}"
    if_score_30_to_50: "*elicit-icp-yaml {slug}"
    if_score_50_to_70: "Completar campos faltantes de icp.yaml (review manual)"

  brand:
    if_score_below_30: "*scaffold-templates {slug} → depois *elicit-brand-yaml {slug}"
    if_score_30_to_50: "*elicit-brand-yaml {slug}"
    if_score_50_to_70: "Completar brandbook.yaml (voice, positioning, visual)"

  offer:
    if_score_below_30: "*scaffold-templates {slug} → depois ativar hormozi squad"
    if_score_30_to_50: "/hormozi *audit-offer {slug}"
    if_score_50_to_70: "/hormozi *value-equation {slug}"

  narrative:
    if_score_below_30: "Preencher founder-dna.yaml primeiro (*elicit-founder-dna)"
    if_score_30_to_50: "/storytelling *brandscript {slug}"
    if_score_50_to_70: "/storytelling *pitch-narrative {slug}"

  traffic:
    if_score_below_30: "Resolver Customer e Offer primeiro (pré-requisitos)"
    if_score_30_to_50: "/traffic-masters *funnel-audit"
    if_score_50_to_70: "/traffic-masters *campaign-brief"

  operations:
    if_score_below_30: "*elicit-team-structure {slug}"
    if_score_30_to_50: "*elicit-operations {slug}"
    if_score_50_to_70: "@sop-chief *create-sop-operations-suite {slug}"

  success:
    if_score_below_30: "Preencher curriculum.yaml primeiro"
    if_score_30_to_50: "Desenhar onboarding-flow.yaml"
    if_score_50_to_70: "Criar churn-prevention.yaml"

  evidence:
    if_score_below_30: "/deep-research *evidence-audit {slug}"
    if_score_30_to_50: "Completar proof.yaml com números verificáveis"
    if_score_50_to_70: "Completar credentials.yaml"

  movement:
    if_score_below_30: "/movement *intake {slug}"
    if_score_30_to_50: "/movement *foundation {slug}"
    if_score_50_to_70: "/movement *cycle-strategy {slug}"

  culture:
    if_score_below_30: "*elicit-culture {slug} --quick"
    if_score_30_to_50: "*elicit-culture {slug}"
    if_score_50_to_70: "Completar hiring-criteria e decision-frameworks"
```

### Passo 3: Output

Formato curto, direto, sem ambiguidade:

```markdown
## Próxima Melhor Ação: {business_name}

**Score Global:** {score}/100
**Gargalo principal:** {dimensão} ({score_dimensão}/100)
**Impacto:** Resolver desbloqueia {N} squads ({lista})

### Faça AGORA:

```
{comando exato}
```

**O que isso resolve:**
{1 frase explicando o efeito}

**Depois disso, rode:**
`*diagnose-business {slug}` para ver o novo score.
```

## Validação

- [ ] Apenas UMA ação retornada
- [ ] Comando é válido e executável
- [ ] Justificativa baseada em dados do diagnóstico
- [ ] Formato curto e direto

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
*Versão: 1.0.0*
