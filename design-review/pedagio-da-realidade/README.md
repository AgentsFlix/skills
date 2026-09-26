# Pedágio da Realidade — QA de publicação

Resultado: aprovado no escopo local abaixo em 26/09/2026. O pacote 1.0.1 aparece no catálogo, abre detalhes e oferece os comandos e artefatos gerados. Não houve edição de HTML, CSS, JavaScript do produto ou conteúdo do pacote durante este QA.

Base pública antes da inclusão: `2887faab93caf581ac4837a2ac97416004834c0e`. HEAD com a inclusão testada: `708cb02506e80e3973c6150b8f84c7a4c53c0729`. O resultado guarda hashes do catálogo, da curadoria e do colável para identificar os bytes efetivamente testados.

## Ambiente e percurso

Chromium headless, contexto novo por cenário, sem conta e sem acesso à memória do usuário. Viewports: 1440×1000, 768×1024 e 390×844; preferência de movimento reduzido ativa. O site é servido em porta local efêmera. O cenário anterior intercepta somente catálogo e curadoria com os arquivos de `origin/main`; o posterior usa os arquivos gerados da entrega.

O onboarding foi concluído pelos controles reais em todas as larguras: “Quero resolver uma coisa hoje” → “Virar processo o que eu faço na mão” → “Abrir minha seleção”. São escolhas sintéticas de QA, sem injeção de estado de conclusão. A recomendação de Extrair um processo nas capturas é consequência desse percurso. Depois foi feita a busca por Pedágio da Realidade. O teste não afirma que o guia recomenda o pacote novo.

`/api/config` responde com uma fixture de visitante e loja desligada. Analytics são bloqueados. Nenhuma instalação, execução de skill ou ação em conta foi realizada.

## Verificações

| Verificação | 1440 | 768 | 390 |
|---|---|---|---|
| Antes: busca sem Pedágio; depois: um card correspondente | passou | passou | passou |
| Card, destaque e modal com título legível e fallback nativo | passou | passou | passou |
| Título e sinopse iguais ao catálogo aprovado | passou | passou | passou |
| Onboarding pelos controles reais | passou | passou | passou |
| Card abre por Enter; Escape fecha e devolve foco | passou | passou | passou |
| Sete alvos exibem e copiam o valor literal do catálogo | passou | passou | passou |
| Colável local acessível e com conteúdo esperado | passou | passou | passou |
| Download do ZIP local pelo link da interface, com hash idêntico | passou | passou | passou |
| Sem exceção JavaScript ou erro de curadoria | passou | passou | passou |
| Sem overflow horizontal de página/modal | passou | passou | passou |

Os sete alvos copiados foram Hermes CLI, Hermes chat, Codex, Claude Code, Outros agentes, Claude.ai e ChatGPT. A cópia foi conferida lendo o clipboard do contexto Chromium e comparando com o valor do catálogo. O oitavo alvo, ChatGPT Project, apontou para `/prompt/pedagio-da-realidade.md`, que respondeu HTTP 200 no servidor local.

O destaque foi aberto com `?destaque=pedagio-da-realidade`; seu botão abriu o modal e atualizou a URL para `#pedagio-da-realidade`, mantendo o onboarding concluído pelo percurso acima.

As capturas foram inspecionadas visualmente. O fallback existente mantém gradiente ciano escuro, título e ações nos três tamanhos. O título quebra dentro do card estreito de forma legível; subtítulo do card usa truncamento existente e aparece completo no modal. Em 390 px, o modal usa rolagem vertical e os comandos quebram linha sem alterar os bytes copiados. A página conserva o shell legado, incluindo repetição do título e da sinopse entre os blocos de descrição e contexto; isso não foi tratado como redesign.

Não foi criada arte nova. As URLs de capa wide, desktop e mobile responderam HTTP 403 numa consulta HTTP separada; o navegador acionou o tratamento nativo de falha e removeu as imagens. O QA comprova o fallback visível, não aprovação de uma capa raster.

## Capturas

| Largura | Antes: busca | Depois: card | Depois: destaque | Depois: modal | Depois: comando |
|---|---|---|---|---|---|
| 1440 | [antes](before-search-1440.png) | [card](after-card-1440.png) | [destaque](after-highlight-1440.png) | [modal](after-modal-1440.png) | [comando](after-command-1440.png) |
| 768 | [antes](before-search-768.png) | [card](after-card-768.png) | [destaque](after-highlight-768.png) | [modal](after-modal-768.png) | [comando](after-command-768.png) |
| 390 | [antes](before-search-390.png) | [card](after-card-390.png) | [destaque](after-highlight-390.png) | [modal](after-modal-390.png) | [comando](after-command-390.png) |

## Limites e reprodução

O download foi interceptado na URL declarada no catálogo e respondeu com o ZIP local exato, pois a tag ainda estava sendo preparada. SHA256 do arquivo de 29.053 bytes: `fad8fde226d200569b644746bf8392a6da437fa35ab8a6f8898a6ec7ed639ae7`. Esse teste valida ação/link/bytes da interface, sem alegar disponibilidade remota da tag. Publicação e download externo precisam ser confirmados após integração.

Este QA não prova deploy, persistência em conta, instalação da skill, eficácia humana ou acessibilidade integral. O modo papel pertence ao leitor; o pacote testado usa o card de instalação existente, sem variante de leitor.

[Resultado estruturado](result.json) e [harness](qa.cjs). Para reproduzir, na raiz do checkout, usar um Node com o módulo `playwright` e Chromium disponíveis:

```sh
node design-review/pedagio-da-realidade/qa.cjs
```

O harness inicia e encerra seu próprio servidor e navegador. Não precisa de credenciais. Não instala a skill nem altera fonte ou pacote. O primeiro ensaio encontrou uma resposta 404 local enquanto os artefatos eram regenerados em paralelo; os inputs foram fixados em memória e o ensaio final passou completo com os hashes registrados.
