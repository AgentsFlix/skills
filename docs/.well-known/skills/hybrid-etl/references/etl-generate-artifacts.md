# Task: ETL Generate Artifacts

```yaml
task:
  id: etl-generate-artifacts
  name: ETL Generate Artifacts (Layer 4)
  agent: workspace-chief
  elicit: false
  output_format: yaml
  workflow: etl-deep-pass-pipeline
```

## Descricao

Layer 4 do deep pass pipeline. Cria todos os arquivos consumiveis pelos squads a partir dos dados enriquecidos nas Layers 1-3. Usa `{pasta}/` como gold standard de referencia (40 arquivos, 5849 linhas). Gera artefatos de brand, product, narrative e movement.

## Prerequisites

- Layers 1-3 executadas com sucesso para o business.
- Dados enriquecidos disponiveis no workspace (`company/`, `operations/`, `evidence/`).
- Gold standard disponivel: `{pasta}/`.
- `completeness-manifest.yaml` com metricas atualizadas.

## Usage

```
*etl-generate-artifacts {slug}
```

**Reference:** `{pasta}/` (gold standard — 40 files, 5849 lines)

## Execution Flow

### Fase 1: Gerar artefatos de brand

1. Ler dados consolidados de `company/brand.yaml` e design tokens da Layer 2.
2. Gerar `{pasta}/brand/brandbook.yaml`:
   - Archetype mix (inferido do posicionamento e voz).
   - Voice pillars (always_use, avoid_use, forbidden_words).
   - Visual identity (cores, fontes, Tailwind classes — de Layer 2).
   - Social proof (numeros verificados de Layer 3).
   - Brand pillars (extraidos do site ou inferidos).
3. Gerar `{pasta}/brand/strategic-positioning.yaml`:
   - Categoria, onlyness, diferenciacao (vs concorrentes).
   - Competitive moat, message hierarchy.
   - CEO/founder quotes verificadas (de Layer 3).
4. Usar gold standard como template de estrutura.

### Fase 2: Gerar artefatos de produto

1. Para cada produto identificado em `products_list`:
   - Gerar `{pasta}/products/{product}/offerbook.yaml`:
     - Oferta estruturada: entregaveis, bonus, garantia, pricing.
   - Gerar `{pasta}/products/{product}/proof.yaml`:
     - Resultados financeiros verificados, estatisticas com fonte e data.
   - Gerar `{pasta}/products/{product}/testimonials.yaml`:
     - Depoimentos estruturados por categoria (consumer, partner, proof hooks).
2. Reestruturar: se offerbook existir em `company/`, mover para `products/` e substituir por indice.
3. Atualizar `company/offerbook.yaml` como indice apontando para `products/{product}/offerbook.yaml`.

### Fase 3: Gerar artefatos narrativos

1. Para cada produto:
   - Gerar `{pasta}/products/{product}/narrative/brandscript.yaml`:
     - Estrutura SB7 (StoryBrand): character, problem (villain/external/internal/philosophical), guide, plan, CTA, success, failure, one-liner.
   - Gerar `{pasta}/products/{product}/narrative/objection-destroyers.yaml`:
     - Top 8-10 objecoes com reframe, proof e source.
     - Extraidas do call de vendas (Layer 1) + UGC (Layer 3).
   - Gerar `{pasta}/products/{product}/narrative/product-story.yaml`:
     - Origin story, proof, transformation, vision.
   - Gerar `{pasta}/products/{product}/narrative/pitch-narrative.yaml`:
     - Pitch estruturado de 30s, 2min e completo.
2. Fontes: dados do call de vendas (Layer 1), proof (Layer 3), testimonials (Layer 3).

### Fase 4: Gerar artefatos de movement

1. Avaliar maturidade do business: se early-stage demais, **SKIP** esta fase com justificativa documentada.
2. Se business maduro o suficiente, gerar:
   - `{pasta}/movement/system/cosmology.yaml` — central cause, trueline, axioms, worldview before/after.
   - `{pasta}/movement/foundation/tribe-identity.yaml` — archetypes, transformation arc, semantic clusters.
   - `{pasta}/movement/identity/leaders.yaml` — perfis de lideranca, top values, signature expressions.
   - `{pasta}/movement/system/mrd-bank/doctrines.yaml` — 8-12 crencas com evidencia.
   - `{pasta}/movement/system/mrd-bank/myths.yaml` — 8-12 mitos: origin, proof, community, antagonism.
   - `{pasta}/movement/system/mrd-bank/rites.yaml` — 10-15 rituais com identity arc.
   - `{pasta}/movement/system/mrd-bank/vocabulary.yaml` — 20-35 termos S/A/B/C.
   - `{pasta}/movement/reading/fenomenologia-cultural.yaml` — leitura cultural, worldview, core beliefs, narrative disputes.
3. Usar gold standard `{slug}/movement/` como referencia de estrutura.

### Fase 5: Finalizar e reportar

1. Atualizar `{pasta}/evidence/completeness-manifest.yaml`:
   - Completude por arquivo e por squad (Copy, Traffic, Design, Content, Movement).
   - Delta report: o que mudou desde a ultima execucao.
   - Squad readiness: quais squads podem operar com os dados atuais.
2. Atualizar `{pasta}/evidence/source-registry.yaml`:
   - Registrar todos os artefatos gerados com timestamp.
3. Gerar resumo de execucao no `evidence/etl-run-envelope.yaml`:
   - Total de arquivos gerados, linhas totais, comparacao com gold standard.

**Gate:** Completude geral >= 85%. Se abaixo, listar gaps e recomendar fontes adicionais.

## Acceptance Criteria

1. `brand/brandbook.yaml` e `brand/strategic-positioning.yaml` gerados.
2. Ao menos 1 produto com `offerbook.yaml`, `proof.yaml` e `testimonials.yaml`.
3. Artefatos narrativos gerados (brandscript, objection-destroyers) para ao menos 1 produto.
4. Movement gerado OU skip documentado com justificativa (business early-stage).
5. `company/offerbook.yaml` convertido para indice (se continha dados de produto).
6. `completeness-manifest.yaml` atualizado com squad readiness e delta report.
7. Completude geral >= 85%.

## Outputs

| Tipo | Arquivos |
|------|----------|
| Brand | `brand/brandbook.yaml`, `brand/strategic-positioning.yaml` |
| Product | `products/*/offerbook.yaml`, `proof.yaml`, `testimonials.yaml` |
| Narrative | `products/*/narrative/brandscript.yaml`, `objection-destroyers.yaml`, `product-story.yaml`, `pitch-narrative.yaml` |
| Movement | `movement/system/cosmology.yaml`, `movement/foundation/tribe-identity.yaml`, `movement/identity/leaders.yaml`, `movement/system/mrd-bank/*.yaml`, `movement/reading/fenomenologia-cultural.yaml` |
| Evidence | `evidence/completeness-manifest.yaml`, `evidence/source-registry.yaml`, `evidence/etl-run-envelope.yaml` |

## Referencia

Gold standard: `{pasta}/` (40 files, 5849 lines).

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
