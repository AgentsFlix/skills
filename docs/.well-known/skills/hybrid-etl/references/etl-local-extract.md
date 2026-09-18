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
