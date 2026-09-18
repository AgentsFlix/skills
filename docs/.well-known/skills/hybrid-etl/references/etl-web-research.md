# Task: ETL Web Research

```yaml
task:
  id: etl-web-research
  name: ETL Web Research (Layer 3)
  agent: workspace-chief
  elicit: false
  output_format: yaml
  workflow: etl-deep-pass-pipeline
```

## Descricao

Layer 3 do deep pass pipeline. Pesquisa a web em busca de cobertura de midia, presenca social, dados de apps/produtos e conteudo gerado por usuarios (UGC) para enriquecer credenciais, proof e testimonials. Cada fato extraido recebe URL de fonte e tag de confianca (ALTA/MEDIA/BAIXA) conforme os epistemic standards do Hybrid.

## Prerequisites

- Layer 1 (`etl-local-extract`) executada com sucesso.
- Dados de `company_name`, `founder_name` e `keywords` disponiveis no workspace.
- Firecrawl MCP disponivel e configurado (para search e scrape).

## Usage

```
*etl-web-research {slug}
```

## Execution Flow

### Fase 1: Pesquisar cobertura de midia

1. Ler `{pasta}/company/company-profile.yaml` para obter `company_name` e `founder_name`.
2. Executar: `firecrawl search "{company_name} {founder_name}" --limit 5`.
3. Filtrar resultados por relevancia (descartar homonimos e resultados nao relacionados).
4. Para cada artigo relevante encontrado (max 5):
   - Executar: `firecrawl scrape {article_url} --only-main-content`.
5. Extrair fatos verificados: mencoes em veiculos, premios, entrevistas, citacoes, datas.
6. Classificar cada fato com confianca:
   - `ALTA` — citacao direta com URL verificavel.
   - `MEDIA` — mencao indireta ou dados parciais.
   - `BAIXA` — inferencia a partir de contexto limitado.

### Fase 2: Pesquisar presenca social

1. Buscar perfis do Instagram: `firecrawl search "{company_name} instagram" --limit 3`.
2. Extrair dados publicos: numero de seguidores, bio, link na bio.
3. Buscar canais do YouTube: `firecrawl search "{company_name} YouTube" --limit 3`.
4. Buscar perfis do TikTok: `firecrawl search "{company_name} TikTok" --limit 3`.
5. Registrar metricas sociais com fonte URL e data de coleta.

### Fase 3: Pesquisar dados de app/produto

1. Verificar se a empresa possui app: `firecrawl search "{company_name} app Google Play" --limit 3`.
2. Se app encontrado:
   - Extrair: nome, rating, numero de downloads, descricao, reviews destacados.
   - Registrar com URL da loja e confianca `ALTA`.
3. Buscar no App Store: `firecrawl search "{company_name} app App Store" --limit 3`.
4. Se nao encontrado em nenhuma loja: registrar como `not_found` e seguir.

### Fase 4: Verificar e atribuir

1. Consolidar todos os fatos extraidos das Fases 1-3.
2. Para cada fato, garantir:
   - **Source URL** — link direto para a evidencia.
   - **Confidence tag** — `ALTA`, `MEDIA`, ou `BAIXA` conforme epistemic standards.
   - **Extraction date** — timestamp da coleta.
3. Atualizar YAMLs do workspace:
   - `{pasta}/company/credentials.yaml` — cobertura de midia, metricas sociais, dados de app.
   - `{pasta}/company/proof.yaml` — evidencias de terceiros.
   - `{pasta}/company/testimonials.yaml` — depoimentos e reviews de UGC.
   - `{pasta}/company/authority-story.yaml` — narrativa de autoridade do fundador.
4. Atualizar `evidence/etl-run-envelope.yaml` com metricas da Layer 3.

**Gate:** Ao menos 1 fonte verificada encontrada. Se zero resultados, documentar no envelope.

## Acceptance Criteria

1. Ao menos 3 pesquisas executadas (midia, social, app/UGC).
2. Todos os fatos extraidos possuem source URL.
3. Nivel de confianca (ALTA/MEDIA/BAIXA) tagueado em cada claim.
4. Nenhum dado fabricado (compliance zero-invention).
5. Ao menos 1 fonte verificada encontrada e documentada.

## Outputs

| Output | Descricao |
|--------|-----------|
| `company/credentials.yaml` | Credenciais atualizadas com midia e social |
| `company/proof.yaml` | Evidencias de terceiros |
| `company/testimonials.yaml` | Depoimentos e reviews de UGC |
| `company/authority-story.yaml` | Narrativa de autoridade do fundador |
| `evidence/etl-run-envelope.yaml` | Envelope atualizado com metricas Layer 3 |

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
