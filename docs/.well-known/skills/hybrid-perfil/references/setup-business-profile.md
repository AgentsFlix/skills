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
