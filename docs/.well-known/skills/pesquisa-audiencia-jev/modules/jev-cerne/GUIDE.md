---
name: jev-cerne
description: Seleciona comentários como referências rastreáveis para uma escrita que toca no cerne, usando JEV para avaliar situação, conflito, consequência e desejo. Use para achar quais relatos usar, montar um dossiê de dores e aspirações ou preparar referências para copy. Não confunde intensidade do sofrimento com qualidade editorial nem inventa motivações não sustentadas pelo texto.
---

# Do comentário ao cerne

Entregar evidências que ajudem o escritor a reconhecer uma experiência humana com precisão. “Cerne” é o que está em jogo para a pessoa na situação que ela descreve; não é um diagnóstico, uma ferida secreta inventada ou uma frase dramática.

Use [jev-operar](../jev-operar/GUIDE.md) para as regras da integração: o seletor usa seu cliente compartilhado, provider `jevcloud_direct` e modelo fixado `jev-1.13.0`. Endpoint e credencial estão no [contrato da API](../jev-operar/references/api-contract.md). Para descobrir vídeos e coletar uma nova base, use [youtube-jev-copy](../youtube-jev-copy/GUIDE.md). Todos são módulos irmãos deste pacote.

## 1. Fixar o recorte e a evidência

Recupere tema, público e uso solicitado na conversa. Se não houver oferta/público definidos, entregue pesquisa temática, deixando aderência comercial como desconhecida. Não invente produto, promessa ou diagnóstico de audiência.

Exija um corpus JSONL privado com `id`, `comment` e, quando necessário, `context` de resposta. Guarde `source_id`, idioma, data de coleta e vínculo de origem em proveniência local. Comentário, contexto e texto do vídeo têm vozes diferentes. Não atribua ao autor do comentário as palavras do vídeo ou do comentário pai.

Um agregado sem corpus e respostas individuais não contém evidência selecionável. Recupere fontes ainda públicas ou faça nova coleta dentro do pedido, identificando-a como nova rodada.

## 2. Preparar os critérios JEV

Leia [a rubrica](references/criterios.md). Os exemplos em [triage.json](assets/triage.json) e [depth.json](assets/depth.json) são para passado/futuro. Para outro tema, adapte as perguntas e salve a versão usada. JEV não gera comentários, frases ou justificativas: devolve Choice, Score e Noul.

O passe de triagem avalia relevância, relato vivido, dependência de contexto e necessidade de revisão de exposição. O passe de profundidade avalia separadamente situação concreta, tensão, consequência, futuro desejado, ligação temporal e linguagem reconhecível; classifica o núcleo e a posição da pessoa. A seleção matemática é feita em código.

Execute piloto com positivos, negativos, ambíguos, curtos, respostas, idiomas e tentativas de instrução dentro do comentário. Leia uma amostra real dos aceitos e rejeitados. Limiares e pesos são iniciais, não uma escala validada de emoção humana. Não use curtidas, tamanho, canal ou sofrimento extremo para inflar a nota.

## 3. Executar e montar candidatos

Os comandos abaixo partem da raiz instalada do pacote. O seletor aceita `--credential` e usa a mesma resolução de credencial do cliente compartilhado.

```sh
python3 modules/jev-cerne/scripts/select_comments.py \
  --corpus /caminho/privado/corpus.jsonl \
  --output /caminho/privado/selecao
```

Padrão: plano sem rede. Para processar: `--execute --max-requests N`. Para retomar a mesma rodada: `--resume`, somente com a mesma rota/provider, modelo, corpus e rubrica. Preserve diretórios/checkpoints OpenRouter antigos e use outro diretório para novas rodadas JevCloud; não há migração silenciosa. Arquivos personalizados podem ser passados com `--triage`, `--depth` e `--policy` preservando as chaves do contrato do seletor. Padrão de um comentário por request, com todas as perguntas sobre ele.

O script salva evidência por registro, candidatos, fila de revisão e recibos. Sua lista é uma PRÉ-SELEÇÃO, não um veredito editorial. Comentários com contexto insuficiente ou exposição sensível vão para revisão local, não desaparecem. Não publicar o corpus nem links que reidentifiquem autores.

Para demonstração, [synthetic-corpus.jsonl](assets/synthetic-corpus.jsonl) contém quatro comentários inteiramente fictícios, em pt-BR e inglês. Eles testam elogio genérico, conflito, tentativa de mudança e contraponto. Não usá-los como relatos reais nem como resultados da pesquisa histórica. A execução confirma o percurso técnico, não precisão editorial populacional.

## 4. Escolher QUAL e QUAIS

Leia de fato cada candidato final e registre um trecho literal curto que sustente a interpretação. Preserve o original; tradução pt-BR e paráfrase recebem campos separados.

Escolha um comentário âncora que melhor mostre situação + conflito + consequência. Acrescente apenas referências que tragam algo diferente: causa/obstáculo, desejo de futuro, tentativa concreta ou contraponto. Normalmente 3–7 bastam; não completar quota com relatos fracos. Um ótimo comentário pode bastar para uma peça curta.

Deduplicate texto e sentido antes de selecionar. Não somar várias respostas da mesma conversa como experiências independentes. Comparar uma voz com outra ajuda a ver tensões; fundi-las numa biografia fictícia é falsificação. Manter contrapontos que contrariem a hipótese inicial e distinguir recorrência na amostra de prevalência na população.

## 5. Entregar o dossiê para escrita

Preencha [o modelo de dossiê](assets/dossie-template.md). Cada ficha precisa de:

- ID e proveniência privada; original, trecho de evidência e tradução quando aplicável.
- O que foi explicitamente dito; situação e impacto presentes no texto.
- Tensão: “quer X, mas Y o impede”, somente quando ambos têm apoio.
- O que está em jogo, com evidência; se for interpretação, marcar hipótese e alternativa plausível.
- Futuro desejado/temido; quando ausente, registrar ausente.
- Por que este comentário serve e o que acrescenta ao conjunto.
- Uso possível na escrita, inferências proibidas e condições de exposição.

A síntese final traz núcleo humano, vocabulário, objeções, desejos, contradições, pistas de ângulos e referências que os sustentam. Escrever para reconhecimento e agência: não usar medo ou vergonha para pressionar a compra. Usar temas gerais de relatos sensíveis, sem explorar histórias pessoais para persuasão.

Antes de entregar, conferir cada citação contra o corpus e cada afirmação contra os IDs. `JEV selecionou` significa decisão registrada na API; `o agente interpretou` significa leitura editorial. Não apresentar uma paráfrase como citação nem como depoimento do produto.

## Gatilhos de teste

- Deve: “Quais comentários chegam ao âmago e servem de referência?”
- Deve: “Monte um dossiê para copy com as dores e desejos desta base.”
- Não deve: “Encontre vídeos novos” isoladamente; isso cabe à skill de pesquisa.
