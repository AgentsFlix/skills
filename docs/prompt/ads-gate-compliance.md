# ads-gate-compliance · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.4. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `ads-gate-compliance.md` uma skill chamada ads-gate-compliance. Quando eu pedir algo como "gate: [texto do anúncio e descrição da imagem]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# ANTES DE SUBIR · O criativo passa pela régua da Meta antes de subir

Antes de o criativo subir, ele passa pela régua da Meta: promessa, saúde, antes-e-depois, texto na imagem, público. O agente confere contra as regras documentadas e bloqueia o que seria reprovado ou derrubaria a conta. Barrar aqui é mais barato que perder o pixel.

## When to Use

- Diga: "gate: [texto do anúncio e descrição da imagem]".
- NÃO use para: escrever o anúncio (isso é `copy-anuncios`) nem para decidir orçamento (`ads-plano`).

## Quick Reference

| arquivo | papel |
|---|---|
| `references/regras-da-meta.md` | régua de compliance, com fonte |

## Procedure

1. Colete o criativo: texto principal, título, descrição, chamada; a imagem ou o vídeo (descrição, ou o arquivo se houver tool de visão); a URL da landing; a categoria do produto.
2. Abra `references/regras-da-meta.md`. Confira o criativo contra cada seção marcada **BLOQUEIA**, uma a uma, e anote PASS ou FAIL com a frase exata que causou o FAIL.
3. Confira as seções marcadas *aviso* e anote como AVISO, com o ajuste sugerido.
4. Se a landing foi informada, confira a seção "Página de destino": promessa do anúncio bate com a página? Discrepância é FAIL.
5. Veredito: qualquer FAIL = **REPROVADO**, com a lista de ajustes exatos (o que trocar por quê). Nenhum FAIL = **APROVADO**, com os avisos listados.
6. Entregue a tabela seção → resultado → ajuste. Nunca aprove "com ressalva": ou passa ou não passa.

## Pitfalls

- Aprovar porque "todo mundo faz assim". A régua é a política, não o feed do concorrente.
- Julgar só o texto. Imagem, vídeo e landing reprovam tanto quanto.
- Esquecer que rejeição fica no histórico da conta. O gate existe antes de subir por isso.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. Toda seção **BLOQUEIA** da referência aparece na tabela com PASS ou FAIL.
2. Todo FAIL cita o trecho exato do criativo que o causou e propõe o ajuste.
3. O veredito é APROVADO ou REPROVADO, sem terceira opção.
4. Se a landing foi dada, a checagem anúncio ↔ página está na tabela.
5. Os avisos estão listados separados dos FAILs.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/regras-da-meta.md`


---

## Referência: references/regras-da-meta.md

# Régua de compliance para criativos na Meta (Facebook e Instagram)

Fonte primária: Meta Advertising Standards, https://transparency.meta.com/policies/ad-standards/ . Esta página resume o que mais reprova criativo de infoproduto e serviço no Brasil; ela não substitui a política oficial, que muda. Quando houver dúvida, a política oficial vence.

Legenda: **BLOQUEIA** = reprova o criativo antes de subir · *aviso* = provável rejeição ou queda de entrega, ajustar.

## Atributos pessoais · BLOQUEIA
Não afirmar nem insinuar que o anúncio sabe algo sobre quem lê: saúde, condição, peso, idade, situação financeira, orientação, religião, etnia. "Você que tem TDAH…" reprova. "Um método para quem convive com TDAH" passa. Fale **do** produto e de quem ele serve, não **com** a pessoa sobre quem ela é.

## Saúde, corpo e antes/depois · BLOQUEIA
Sem antes-e-depois, sem foco em partes do corpo, sem promessa de resultado de saúde ou emagrecimento em tempo definido, sem implicar que o leitor tem um problema. Suplemento e tratamento têm regra própria e mais dura.

## Promessa financeira e "ganhe dinheiro" · BLOQUEIA
Sem renda garantida, sem "de R$0 a R$X em N dias", sem cifra que o produto não comprove. Depoimento com número exige prova e precisa ser típico, não o melhor caso.

## Alegações enganosas · BLOQUEIA
Sem "cura", "garantido", "100%", "aprovado por [autoridade]" sem fonte, sem urgência falsa ("só hoje" que se repete toda semana), sem escassez inventada.

## Sensacionalismo e choque · BLOQUEIA
Sem imagem chocante, sem manchete estilo isca, sem "você não vai acreditar", sem simular notícia ou órgão oficial.

## Marca de terceiros e propriedade intelectual · BLOQUEIA
Sem logotipo, nome ou imagem de terceiros sem autorização; sem imitar a interface da própria Meta (botões falsos, notificações simuladas).

## Página de destino · BLOQUEIA
A landing precisa entregar o que o anúncio promete, funcionar, ter política de privacidade e não bloquear a saída. Discrepância entre anúncio e página é a causa mais comum de rejeição em lote.

## Categorias especiais · *aviso* (exige declaração)
Crédito, emprego, moradia, questões sociais e política exigem declarar a categoria especial na conta. Sem declarar, o anúncio cai e a conta acumula histórico.

## Texto e formato · *aviso*
Texto excessivo na imagem não reprova mais, mas reduz entrega. Vídeo: respeite a zona segura para legenda e interface (14% no topo e 20% embaixo em vertical). Proporções: 1:1 ou 4:5 no feed, 9:16 em stories e reels.

## O que fica para sempre
Rejeição entra no histórico da conta. Editar ou excluir o anúncio não apaga. Por isso o gate existe **antes** de subir.
