---
name: hybrid-etl
description: 'A empresa já escreveu sobre si mesma: site, PDFs, apresentações, posts. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: "extrai tudo sobre [empresa] de [pasta ou site]".'
license: MIT
compatibility: 'Requer: web, terminal. Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.'
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/hybrid-etl
  tags: hybrid-workspace, negocio, elicitacao, yaml
  related: hybrid-diagnostico, hybrid-proxima-acao, hybrid-perfil, hybrid-fundador
  config: 'hybrid.pasta: Pasta do negócio no seu computador: é onde os YAML do Hybrid Workspace vivem (perfil, ICP, marca, oferta, diagnósticos). Um negócio por pasta.'
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

## Arquivos desta skill

- `references/etl-deep-pass.md`
- `references/etl-generate-artifacts.md`
- `references/etl-local-extract.md`
- `references/etl-web-research.md`
- `references/etl-web-scrape.md`
- `references/workflow-etl-deep-pass-pipeline.yaml`
