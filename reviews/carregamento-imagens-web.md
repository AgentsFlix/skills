# Carregamento das capas Web

## Objetivo

Publicar derivados WebP das capas responsivas de HERMES AGENT e HERMES EM OPERAÇÃO, preservando os PNGs originais e sem alterar a interface, os textos ou o comportamento do player.

## Origem

- Fonte autoral: `AgentsFlix/agentsflix`, PR #97.
- Exportação seletiva: seis arquivos sob `site/assistir`, todos reservados nesta worktree.
- O catálogo público vigente foi preservado; a sincronização manteve integralmente o episódio T1:E3 já publicado.

## Resultado

- Quatro recursos críticos passam de 11.080.110 bytes em PNG para 1.078.000 bytes em WebP, redução conjunta de 90,3%.
- Cada capa servida fica abaixo de 400 KiB.
- Os nomes WebP novos renovam o cache sem substituir os arquivos PNG de origem.

## Verificações

- 110 testes e `check_site.py` do repositório público aprovados.
- Checagem registrada da worktree.
- QA do acervo e das duas fichas em 1440, 768 e 390 px: nove combinações sem overflow, sem erro de console e com seleção correta das capas desktop/mobile.
- Confirmação do deploy e dos quatro recursos em produção após o merge.

## Limites

O recorte otimiza as capas acima da dobra das duas séries disponíveis. Não altera vídeos, miniaturas do Cloudflare Stream, artes internas dos exercícios, analytics, autenticação, loja ou design.
