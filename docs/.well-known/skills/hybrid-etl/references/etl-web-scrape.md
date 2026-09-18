# Task: ETL Web Scrape

```yaml
task:
  id: etl-web-scrape
  name: ETL Web Scrape (Layer 2)
  agent: workspace-chief
  elicit: false
  output_format: yaml
  workflow: etl-deep-pass-pipeline
```

## Descricao

Layer 2 do deep pass pipeline. Faz scrape do website da empresa para extrair conteudo textual e design tokens (cores, fontes, classes Tailwind, meta tags). Se `website_url` for nulo (nao encontrado na Layer 1), a task e automaticamente pulada com status `SKIPPED_NO_URL` e o pipeline continua para a Layer 3.

## Prerequisites

- Layer 1 (`etl-local-extract`) executada com sucesso.
- `website_url` disponivel no output da Layer 1 (ou skip automatico).
- Firecrawl MCP disponivel e configurado.

## Usage

```
*etl-web-scrape {slug}
```

**Skip condition:** Se `website_url` for `null` → status `SKIPPED_NO_URL`, continua para Layer 3.

## Execution Flow

### Fase 1: Scrape da pagina principal (markdown)

1. Verificar se `website_url` esta presente no output da Layer 1.
2. **Skip condition:** Se `website_url` for `null`, registrar status `SKIPPED_NO_URL` no envelope e encerrar. Pipeline continua para Layer 3.
3. Executar: `firecrawl scrape {url} --only-main-content`.
4. Extrair: tagline, proposta de valor, about, social proof, CTAs.
5. Mapear conteudo para campos do workspace.

### Fase 2: Scrape da pagina principal (HTML)

1. Executar: `firecrawl scrape {url} --format html`.
2. Extrair design tokens do HTML:
   - **Hex colors:** parse `#[0-9a-fA-F]{3,8}` do HTML e CSS inline.
   - **Fonts:** extrair de `font-family` no CSS inline ou classes.
   - **Tailwind classes:** grep patterns `bg-|text-|font-|border-`.
   - **Meta tags:** `title`, `description`, `og:image`, `og:title`.
3. Consolidar tokens em estrutura padronizada.

### Fase 3: Mapear sitemap

1. Executar: `firecrawl map {url}`.
2. Identificar subpaginas-chave: product, pricing, about, contact, blog.
3. Classificar cada URL encontrada por tipo de conteudo.

### Fase 4: Scrape de subpaginas-chave

1. Para cada subpagina identificada na Fase 3 (max 5):
   - Executar: `firecrawl scrape {subpage_url} --only-main-content`.
2. Extrair dados relevantes por tipo de pagina:
   - **Product:** features, beneficios, diferenciais.
   - **Pricing:** planos, precos, comparativos.
   - **About:** historia, equipe, valores, timeline.
3. Atualizar YAMLs do workspace:
   - `{pasta}/company/brand.yaml` (identidade visual, design tokens).
   - `{pasta}/brand/brandbook.yaml` (secao visual).

**Gate:** Website scrapeado OU skip documentado no envelope.

## Acceptance Criteria

1. Website scrapeado com sucesso OU `SKIPPED_NO_URL` documentado.
2. Se scrapeado: ao menos 2 hex colors extraidos do HTML.
3. Se scrapeado: font family identificada.
4. Conteudo extraido de ao menos 1 pagina (principal ou subpagina).
5. Design tokens consolidados em estrutura padronizada no workspace.

## Outputs

| Output | Descricao |
|--------|-----------|
| `company/brand.yaml` | Identidade visual e design tokens atualizados |
| `brand/brandbook.yaml` | Secao visual do brandbook atualizada |
| `evidence/etl-run-envelope.yaml` | Envelope atualizado com metricas Layer 2 |

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
