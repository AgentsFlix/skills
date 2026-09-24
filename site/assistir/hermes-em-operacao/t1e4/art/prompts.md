# Artes da primeira página de T1:E4

A primeira página usa três imagens PNG com transparência real, geradas pela ferramenta integrada ImageGen. Cada uma é uma composição dupla: o CSS exibe a metade correspondente em cada card. Os PNGs deste diretório são os masters da primeira página. A segunda página usa cinco ilustrações independentes geradas pela mesma ferramenta; os masters PNG estão em `design/artefatos/hermes-t1e4/` e os derivados WebP deste diretório são usados nos cards dos cenários. José autorizou a publicação da aula com estas artes em 24/09/2026.

Referência de estilo: `apps/web/onboarding/base-v1.webp` e `apps/web/aprofundamento-humano/assets/acao.webp`. Para a parte 06, foram anexados como referência de forma e cor os arquivos `whatsapp-brand.png`, `telegram-brand.png` e `slack-brand.png` fornecidos em `Banco de Imagens/Logos`. Nenhum logo original foi copiado para esta rota.

## 01–02 · `modelo-memoria-v1.png`

Prompt: ilustração editorial 2D adulta para dois cards adjacentes, fundo transparente e duas cenas separadas ao meio. À esquerda, cérebro de inferência com contornos marfim e um circuito ciano ativo, para o processamento do pedido atual. À direita, arquivo de pastas/notas com marcador, para memória recuperável depois. Mesma escala, sem texto, moldura, halo, pessoas ou 3D. Traço orgânico e grão discreto, conforme as duas referências AgentFlix. Cada metade deve funcionar sozinha no card.

## 03–04 · `skills-tools-v1.png`

Prompt: ilustração editorial 2D adulta em duas metades independentes, com alfa real. À esquerda, guia aberto com três passos visuais, representando instruções de como trabalhar. À direita, caixa de ferramentas com chave e terminal/documento, representando capacidade de executar ações. Sem texto externo, moldura, halo, pessoas ou 3D. Paleta marfim, carvão, ciano e cinza da família de apoio AgentFlix.

## 05–06 · `cron-gateway-v2.png`

Prompt de geração: duas cenas independentes e separadas no centro. À esquerda, relógio com seta de repetição e calendário para rotina agendada. À direita, gateway de mensagens com símbolos desenhados e reconhecíveis de WhatsApp, Telegram e Slack, usando os três logos fornecidos como referência. Fundo transparente, traço editorial 2D, sem texto nem marcas adicionais.

Prompt de ajuste sobre a primeira geração: comprimir toda a arte na faixa vertical central da tela para caber no card baixo; manter relógio/calendário à esquerda; colocar WhatsApp, Telegram e Slack em uma linha horizontal junto de um pequeno balão de mensagem à direita. Preservar as formas reconhecíveis e o alfa real, sem deixar elementos atravessarem o centro.

## Conferência

- `artwork.py alpha` confirmou RGBA, pixels transparentes e bordas transparentes nos três masters.
- O recorte das seis metades foi inspecionado em 1440, 768 e 390 px; os três logos do Gateway permanecem visíveis em 390 px.
- As ilustrações são decorativas em relação aos títulos dos cards. O nome acessível do card 06 explicita as três marcas representadas.

## Cards de cenários 01–05

Papel: ilustrações editoriais 2D de apoio, sem texto. Prompt comum: contorno orgânico carvão, marfim, ciano concentrado, cinza esverdeado, grão interno discreto, composição horizontal compacta e alfa real. Sem logos, marcas, pessoas, 3D ou fotografia. Geradas com ImageGen integrado, uma chamada por cenário.

1. `loja-virtual-v1.webp` — caixa de encomenda, celular com balão de conversa genérico e painel de status ligado por seta, para atendimento de pedido com consulta ao sistema. Prompt: “loja virtual em atendimento de pedido: uma caixa de encomenda com etiqueta simples, um pequeno celular exibindo um balão de conversa genérico e uma seta de consulta até um painel de status sem palavras; relação clara entre mensagem, consulta e caixa”.
2. `escola-idiomas-v1.webp` — caderno aberto com duas falas abstratas, avião de papel e calendário semanal. Prompt: “language school: an open practice notebook with a simple speech bubble in two languages represented by abstract lines (no letters), a small paper airplane messenger symbol, and a weekly calendar leaf; communicate personalized language exercise sent each Monday”. A imagem foi editada pelo ImageGen apenas para ampliar as margens transparentes. O derivado WebP exclui um pixel inferior do master cujo alfa residual era 1/255; o desenho visível não foi cortado.
3. `oficina-mecanica-v1.webp` — painel de carro com luz de alerta, celular enquadrando a foto e calendário de inspeção. Prompt: “mechanic workshop: a car dashboard gauge with one amber warning light, a smartphone framing the warning light photo, and a small appointment calendar; clearly communicate photo-based initial triage followed by a booked human inspection, without claiming a diagnosis”.
4. `agencia-marketing-v1.webp` — pastas de clientes alimentando uma folha de métricas e conversa interna. Prompt: “marketing agency weekly metrics report: five small distinct client folders feeding a single clean chart sheet with rising and falling bars and a simple team chat bubble; show analysis from multiple accounts delivered internally”.
5. `restaurante-tres-unidades-v1.webp` — três cozinhas ligadas a um controle de estoque baixo, relógio e mensagem. Prompt: “restaurant with three units: three small restaurant storefronts or kitchen stations connected to one central stock clipboard showing a few low-stock food items, plus a morning clock and a generic outgoing message bubble; communicate daily 7am low-stock check across the three locations for the manager”.

Exportação: `cwebp -q 82 -m 6 -alpha_q 100 -resize 640 427` a partir de cada master, com o recorte de um pixel mencionado no item 2. Os cinco derivados foram inspecionados no componente e aprovados pelo gate de alfa.
