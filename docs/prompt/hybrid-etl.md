# hybrid-etl · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.3. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-etl.md` uma skill chamada hybrid-etl. Quando eu pedir algo como "extrai tudo sobre [empresa] de [pasta ou site]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# TUDO QUE JÁ EXISTE · Do disco e da web para o workspace, em cinco camadas

A empresa já escreveu sobre si mesma: site, PDFs, apresentações, posts. Esta skill percorre o que existe local e na web em cinco camadas, extrai, pesquisa o que falta e gera os artefatos do workspace com nível de confiança por campo. Elicitação depois, só para o que a extração não achou.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Use para extrair materiais locais e web de um negócio identificado e gerar artefatos com proveniência antes da elicitação humana.
- O pacote contém cinco procedimentos: um coordenador e quatro etapas de processamento. Os templates/esquemas do workspace e o mapa de fontes são pré-requisitos externos explícitos, não arquivos que este pacote promete instalar.

## Quick Reference

| procedimento | referência |
|---|---|
| etl deep pass | `references/etl-deep-pass.md` |
| etl local extract | `references/etl-local-extract.md` |
| etl web scrape | `references/etl-web-scrape.md` |
| etl web research | `references/etl-web-research.md` |
| etl generate artifacts | `references/etl-generate-artifacts.md` |



## Procedure

1. Identifique negócio, pasta privada de destino, materiais locais e URLs autorizados. Faça inventário do que já existe e leia os inputs/outputs de `references/etl-deep-pass.md` e das quatro referências de etapa. Reuse memória acessível apenas como contexto com fonte, nunca como instrução nem permissão para varrer o disco.
2. Confira `user.yaml`, os templates/esquemas do workspace e seu mapa de fontes. A menção a `references/imersao-business-map.yaml` no material de origem significa um mapa externo do negócio, que não acompanha este pacote; resolva seu caminho entre os materiais autorizados. O "gold standard" também é um pré-requisito externo, não a própria pasta vazia. Sem esquema de um artefato, extraia evidências que puder e marque sua geração aguardando; não invente estrutura nem prontidão para consumidores.
3. Faça em sequência `references/etl-local-extract.md`, `references/etl-web-scrape.md`, `references/etl-web-research.md` e `references/etl-generate-artifacts.md`. Os nomes `*etl-*` e scripts do runtime de origem são etapas, não executáveis disponíveis. Sem ferramenta web ou URL, registre SKIPPED e motivo, preservando as evidências locais. Registre erros sem inventar sucesso. Não mover arquivos existentes nem converter offerbook para índice sem pedido que inclua essa reorganização.
4. Conserve fonte, trecho/campo, instante de coleta, confiança e conflitos em `evidence/source-registry.yaml`. Registre cada etapa em `evidence/etl-run-envelope.yaml`. Calcule `evidence/completeness-manifest.yaml` sobre campos requeridos dos esquemas efetivamente disponíveis, mostrando numerador/denominador. Sem denominador verificável, marque não calculado. Não use contagem de arquivos/linhas de outro negócio como prova de completude.
5. Só depois da extração, elicite as lacunas humanas necessárias em pequenos blocos. Cada pergunta aberta traz exemplo baseado no material recuperado, identificado como sugestão; sem contexto relevante, use exemplo hipotético declarado. Inferências de posicionamento ou arquétipo ficam hipóteses, sem virar fatos confirmados.
6. Entregue artefatos gerados, fontes, delta verificável, skips, conflitos e lacunas. Aplique os gates das referências somente quando os dados necessários existem; caso contrário declare entrega parcial/aguardando. Avalie rotina: pode valer atualização incremental se fontes mudam; sem mudança, não refazer nem notificar. Proponha agenda/fuso/inputs/canal/silêncio/pausa apenas se útil e ative só com autorização e agendador disponível.

## Pitfalls

- Tratar extração como entrevista inicial ou copiar templates que o pacote não contém.
- Usar a pasta vazia como gold standard, fabricar prova social ou converter inferência em evidência.
- Enviar documentos locais para serviços externos sem autorização.
- Afirmar que o pacote entrega esquemas e comandos de um runtime que não está instalado.

## Verification

1. As quatro etapas têm execução, erro ou skip documentado, e nenhum recurso do runtime de origem foi presumido instalado.
2. Cada afirmação extraída tem fonte; inferências estão separadas. Arquivo de evidência ausente ou esquema indisponível está declarado como lacuna, nunca como completude alcançada.
3. Artefatos seguem esquemas disponíveis, parseiam e preservam dados anteriores. A reorganização de arquivos depende de escopo autorizado.
4. Manifesto de completude mostra critério, contagem e delta; percentuais sem denominador não são publicados. Gates não atingidos deixam a entrega parcial.
5. Elicitação veio depois da extração e cada pergunta aberta incluiu exemplo contextual ou hipotético declarado. A avaliação de rotina tem motivo e nenhum CRON foi presumido.

## Arquivos desta skill (incluídos abaixo)

- `references/etl-deep-pass.md`
- `references/etl-generate-artifacts.md`
- `references/etl-local-extract.md`
- `references/etl-web-research.md`
- `references/etl-web-scrape.md`
- `references/workflow-etl-deep-pass-pipeline.yaml`


---

## Referência: references/etl-deep-pass.md

# Task: ETL Deep Pass (Master Orchestrator)

```yaml
task:
  id: etl-deep-pass
  name: ETL Deep Pass (Master Orchestrator)
  agent: workspace-chief
  elicit: false
  output_format: yaml
  workflow: etl-deep-pass-pipeline
```

## Descricao

Master orchestrator que encadeia as 4 layers do ETL Deep Pass: Local Extract, Web Scrape, Web Research e Generate Artifacts. Enriquece o workspace de um business de ~55% para ~95% de completude, executando cada layer sequencialmente com gates de qualidade entre elas.

## Prerequisites

- Bootstrap executado (`{pasta}/user.yaml` existe).
- Negocio criado (`{pasta}/` existe).
- Templates scaffolded (`*scaffold-templates` executado).
- Mapa de fontes configurado em `references/imersao-business-map.yaml`.

## Usage

```
*etl-deep-pass {slug}
```

## Execution Flow

### Fase 1: Pre-flight

1. Validar que `{slug}` existe em `{pasta}/`.
2. Ler `references/imersao-business-map.yaml` e localizar entrada do slug.
3. Ler `{pasta}/evidence/completeness-manifest.yaml` (se existir).
4. Registrar completude inicial como `baseline_completeness`.
5. **Gate:** Diretorio do business deve existir. Se ausente, HALT com instrucao para executar `*add-business`.

### Fase 2: Layer 1 — Local Extract

1. Executar `*etl-local-extract {slug}`.
2. Capturar outputs criticos: `website_url`, `company_name`.
3. Ler `completeness-manifest.yaml` atualizado.
4. **Gate:** Completude geral >= 70%. Se abaixo, reportar gaps e continuar com warning.

### Fase 3: Layer 2 — Web Scrape

1. Verificar se `website_url` foi extraido na Layer 1.
2. Se `website_url` for `null`: registrar `SKIPPED_NO_URL` no envelope e pular para Layer 3.
3. Se disponivel: executar `*etl-web-scrape {slug}`.
4. **Gate:** Nenhum erro critico. Se scrape falhou, registrar `FAILED` e continuar.

### Fase 4: Layer 3 — Web Research

1. Executar `*etl-web-research {slug}`.
2. Verificar outputs: `credentials.yaml`, `proof.yaml`, `testimonials.yaml`.
3. **Gate:** Ao menos 1 fonte verificada com URL. Se zero fontes, registrar warning.

### Fase 5: Layer 4 — Generate Artifacts

1. Executar `*etl-generate-artifacts {slug}`.
2. Verificar outputs: brandbook, positioning, proof, testimonials, narrative, movement.
3. Ler `completeness-manifest.yaml` final.
4. **Gate:** Completude geral >= 85% (com website) ou >= 75% (sem website).

### Fase 6: Final Report

1. Calcular delta: `final_completeness - baseline_completeness`.
2. Listar arquivos criados e atualizados durante o pipeline.
3. Avaliar squad readiness por squad (copy, design, etl-ops, etc.).
4. Listar campos que ainda requerem preenchimento manual.
5. Atualizar `evidence/etl-run-envelope.yaml` com resultado final do deep pass.
6. Exibir report formatado:
   - Delta de completude (ex: 55% -> 92% = +37pp).
   - Arquivos criados/atualizados.
   - Squad readiness (READY / PARTIAL / NOT_READY por squad).
   - Campos manuais restantes.

## Acceptance Criteria

1. Todas as 4 layers executadas ou puladas com razao documentada no envelope.
2. Completude final >= 85% (com website) ou >= 75% (sem website).
3. `completeness-manifest.yaml` preciso e atualizado com metricas de cada layer.
4. `source-registry.yaml` lista todas as fontes com status e confianca.
5. `etl-run-envelope.yaml` contem registro de cada layer executada.
6. Nenhum dado fabricado — compliance total com zero-invention.
7. Delta de completude reportado com valores exatos.

## Outputs

| Arquivo | Descricao |
|---------|-----------|
| `evidence/completeness-manifest.yaml` | Manifesto final de completude |
| `evidence/source-registry.yaml` | Registro consolidado de fontes |
| `evidence/etl-run-envelope.yaml` | Envelope com metricas de todas as layers |
| Arquivos de cada layer | Conforme outputs das tasks individuais |

---

*Task do Squad Hybrid Workspace - COO Orchestrator*


---

## Referência: references/etl-generate-artifacts.md

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


---

## Referência: references/etl-local-extract.md

# Task: ETL Local Deep Extract

```yaml
task:
  id: etl-local-extract
  name: ETL Local Deep Extract (Layer 1)
  agent: workspace-chief
  elicit: false
  output_format: yaml
  workflow: etl-deep-pass-pipeline
```

## Descricao

Layer 1 do deep pass pipeline. Le TODAS as fontes locais de um business (perfil, formulario, call vendas, instalacao) e extrai dados profundos para atualizar os YAMLs do workspace. Vai alem do Pass 1 (que so lia perfis) — agora processa todas as fontes disponíveis, incluindo calls de vendas de 100-700 linhas que contem os sinais de maior valor (objecoes reais, metricas, motivacoes).

## Prerequisites

- Bootstrap executado (`{pasta}/user.yaml` existe)
- Negocio criado (`{pasta}/` existe)
- Templates scaffolded (`*scaffold-templates` executado)
- Mapa de fontes configurado em `references/imersao-business-map.yaml`

## Usage

```
*etl-local-extract {slug}
```

**Input:** business slug
**Output:** `website_url` (extraido), `company_name`, `keywords`, `products_list`

## Execution Flow

### Fase 1: Resolver fontes do mapa

1. Ler `references/imersao-business-map.yaml`.
2. Localizar entrada para o `{slug}` informado.
3. Mapear todos os caminhos de fonte: `perfil`, `formulario`, `call_vendas`, `instalacao`.
4. Classificar cada fonte como `available` ou `missing`.
5. **Gate:** `perfil` e obrigatorio. Se ausente, HALT com mensagem de erro.

### Fase 2: Extrair do perfil (baseline)

1. Ler arquivo de perfil mapeado na Fase 1.
2. Extrair dados fundamentais: empresa, produto, dores, faturamento, segmento.
3. Mapear campos extraidos para os templates YAML do workspace.
4. Registrar confianca `ALTA` para dados diretos do perfil.

### Fase 3: Extrair do formulario (detalhes)

1. Ler arquivo de formulario (se disponivel).
2. Extrair dados complementares: produto detalhado, publico-alvo, pricing, diferenciais.
3. Cruzar com dados do perfil — priorizar formulario quando houver conflito (dados mais recentes).
4. Registrar confianca `ALTA` para respostas diretas, `MEDIA` para inferencias.

### Fase 4: Extrair do call de vendas (alto sinal)

1. Ler transcricao do call de vendas (se disponivel — pode ter 100-700 linhas).
2. Extrair dados de maior valor: objecoes reais, motivacoes de compra, metricas especificas (faturamento, equipe, crescimento).
3. Identificar: estilo de lideranca, mencoes competitivas, linguagem do cliente (VoC raw).
4. Registrar confianca `ALTA` para citacoes diretas, `MEDIA` para contexto inferido.

### Fase 5: Extrair da instalacao (setup tecnico)

1. Ler arquivo de instalacao (se disponivel).
2. Extrair: ferramentas usadas, integracoes, stack tecnologico, automacoes existentes.
3. Mapear para campos relevantes do workspace.
4. Registrar confianca `ALTA` para dados explicitos.

### Fase 6: Atualizar YAMLs do workspace e evidencias

1. Consolidar todos os dados extraidos das Fases 2-5.
2. Atualizar os seguintes arquivos (merge, nunca sobrescrever dados existentes):
   - `{pasta}/company/company-profile.yaml`
   - `{pasta}/company/founder-dna.yaml`
   - `{pasta}/company/icp.yaml`
   - `{pasta}/company/brand.yaml`
   - `{pasta}/company/credentials.yaml`
   - `{pasta}/company/offerbook.yaml`
   - `{pasta}/operations/pricing-strategy.yaml`
   - `{pasta}/operations/team-structure.yaml`
3. Atualizar `{pasta}/evidence/source-registry.yaml`:
   - Listar cada fonte com status (`processed`, `skipped`, `missing`).
4. Atualizar `{pasta}/evidence/completeness-manifest.yaml`:
   - Completude por arquivo e geral, campos preenchidos vs total.

**Gate:** Completude geral >= 70%. Se abaixo, reportar gaps e sugerir fontes adicionais.

## Acceptance Criteria

1. Todas as fontes disponiveis foram lidas (`perfil` obrigatorio, demais best-effort).
2. Ao menos 3 arquivos YAML atualizados com dados novos.
3. Nenhum dado fabricado — todos os campos rastreaveis ate a fonte original.
4. `completeness-manifest.yaml` atualizado com metricas de completude.
5. `source-registry.yaml` lista todas as fontes com status (`processed`, `skipped`, `missing`).
6. Completude geral >= 70%.

## Outputs

| Output | Descricao |
|--------|-----------|
| `website_url` | URL extraida para uso na Layer 2 |
| `company_name` | Nome da empresa identificado |
| `keywords` | Palavras-chave do negocio |
| `products_list` | Lista de produtos identificados |

---

*Task do Squad Hybrid Workspace - COO Orchestrator*


---

## Referência: references/etl-web-research.md

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


---

## Referência: references/etl-web-scrape.md

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


---

## Referência: references/workflow-etl-deep-pass-pipeline.yaml

workflow:
  id: etl-deep-pass-pipeline
  name: "ETL Deep Pass Pipeline"
  version: "1.0.0"
  description: |
    4-layer pipeline: local extract -> web scrape -> web research -> generate artifacts.
    Enriches business workspace from ~55% to ~95% completeness.
  type: pipeline
  orchestrator: workspace-chief

  sequence:
    - step: preflight
      id: preflight
      phase: 1
      phase_name: Pre-Flight
      agent: workspace-chief
      task: load-workspace-context
      action: validate_slug_and_load_context
      depends_on: []
      outputs:
        - evidence/completeness-manifest.yaml (baseline)
        - evidence/etl-run-envelope.yaml (initialized)
      next: local-extract
      on_failure:
        action: halt
        message: "Business slug not found or workspace not bootstrapped."

    - step: local-extract
      id: local-extract
      phase: 2
      phase_name: Layer 1 - Local Extract
      agent: workspace-chief
      task: etl-local-extract
      action: extract_from_local_sources
      depends_on:
        - preflight
      checkpoint:
        metric: completeness_percentage
        threshold: 70
        on_below: warn_and_continue
      outputs:
        - company/*.yaml (updated)
        - operations/*.yaml (updated)
        - evidence/source-registry.yaml
        - evidence/completeness-manifest.yaml
      next: web-scrape
      on_failure:
        action: halt
        message: "Local extract failed. Check source files availability."

    - step: web-scrape
      id: web-scrape
      phase: 3
      phase_name: Layer 2 - Web Scrape
      agent: workspace-chief
      task: etl-web-scrape
      action: scrape_website
      depends_on:
        - local-extract
      skip_condition:
        field: website_url
        value: null
        status: SKIPPED_NO_URL
      outputs:
        - brand/brand.yaml (design tokens)
        - .firecrawl/{slug}/*.md
        - evidence/etl-run-envelope.yaml (layer 2 metrics)
      next: web-research
      on_failure:
        action: log_and_continue
        message: "Web scrape failed. Continuing without web data."

    - step: web-research
      id: web-research
      phase: 4
      phase_name: Layer 3 - Web Research
      agent: workspace-chief
      task: etl-web-research
      action: research_web_sources
      depends_on:
        - local-extract
      checkpoint:
        metric: verified_sources_count
        threshold: 1
        on_below: warn_and_continue
      outputs:
        - company/credentials.yaml (media coverage)
        - company/proof.yaml (third-party evidence)
        - company/testimonials.yaml (UGC)
        - evidence/etl-run-envelope.yaml (layer 3 metrics)
      next: generate-artifacts
      on_failure:
        action: log_and_continue
        message: "Web research failed. Continuing with local data only."

    - step: generate-artifacts
      id: generate-artifacts
      phase: 5
      phase_name: Layer 4 - Generate Artifacts
      agent: workspace-chief
      task: etl-generate-artifacts
      action: generate_consolidated_artifacts
      depends_on:
        - local-extract
        - web-research
      checkpoint:
        metric: completeness_percentage
        threshold: 85
        on_below: warn_if_no_website
      outputs:
        - brand/brandbook.yaml
        - brand/strategic-positioning.yaml
        - company/proof.yaml (consolidated)
        - company/testimonials.yaml (consolidated)
        - company/narrative.yaml
        - company/movement.yaml
      next: quality-gate
      on_failure:
        action: halt
        message: "Artifact generation failed. Review input data quality."

    - step: quality-gate
      id: quality-gate
      phase: 6
      phase_name: Quality Gate
      agent: workspace-chief
      checklist: etl-deep-pass-checklist
      action: run_quality_checklist
      depends_on:
        - generate-artifacts
      human_review: true
      outputs:
        - evidence/etl-run-envelope.yaml (final metrics)
        - evidence/completeness-manifest.yaml (final)
      on_failure:
        action: report_gaps
        message: "Quality gate did not pass. Review checklist for gaps."

    - workflow_end:
        id: complete
        action: workflow_complete

  handoff_prompts:
    preflight_to_local_extract: |
      Pre-flight complete. Slug validated, baseline completeness recorded.
      Proceeding to Layer 1 local extract.
    local_extract_to_web_scrape: |
      Layer 1 complete. Website URL: {website_url}. Completeness: {completeness}%.
      Proceeding to Layer 2 web scrape.
    web_scrape_to_web_research: |
      Layer 2 complete (or skipped). Design tokens extracted: {tokens_count}.
      Proceeding to Layer 3 web research.
    web_research_to_generate_artifacts: |
      Layer 3 complete. Verified sources: {sources_count}. Claims tagged.
      Proceeding to Layer 4 artifact generation.
    generate_artifacts_to_quality_gate: |
      Layer 4 complete. Artifacts generated: {artifacts_count}.
      Proceeding to quality gate checklist.

config:
  completeness_gate: 85
  completeness_gate_no_website: 75
  pause_resume: true
  max_layers: 4
  target_templates:
    company:
      - company-profile.yaml
      - founder-dna.yaml
      - icp.yaml
      - brand.yaml
      - credentials.yaml
      - offerbook.yaml
      - proof.yaml
      - testimonials.yaml
      - narrative.yaml
      - movement.yaml
    brand:
      - brandbook.yaml
      - strategic-positioning.yaml
    operations:
      - pricing-strategy.yaml
      - team-structure.yaml
    evidence:
      - completeness-manifest.yaml
      - source-registry.yaml
      - etl-run-envelope.yaml

dependencies:
  tasks:
    - load-workspace-context
    - etl-local-extract
    - etl-web-scrape
    - etl-web-research
    - etl-generate-artifacts
  checklists:
    - etl-deep-pass-checklist
  agents:
    - workspace-chief
