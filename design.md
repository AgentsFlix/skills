# AgentFlix: padrão de design

Contrato da interface da vitrine e da descoberta. Base visual: referências Netflix fornecidas pelo Zé e implementação DN-1. Os valores abaixo são os tokens do AgentFlix, não uma especificação oficial da Netflix.

## Cores e hierarquia

| Uso | Token / valor | Regra |
|---|---|---|
| Fundo | `--bg`, `--ink`: `#141414` | Escuro e neutro. |
| Superfície | `--panel`: `#181818` | Cards, perguntas e modal. |
| Interação neutra | `--active`: `#333333` | Seleção e superfícies de apoio. |
| Texto | `--text`: `#F5F5F1` | Títulos e conteúdo principal. |
| Texto secundário | `--muted`: `#B3B3B3` | Metadados, legenda e dependências. |
| Separação | `--line`: `rgba(255,255,255,.16)` | Bordas discretas, sem caixas concorrentes. |
| Acento | `--accent`: `#30B0C7` | Marca, ações existentes e uma recomendação em destaque. |
| Texto de acento | `--accent-text`: `#5FC9DC` | Rótulo da recomendação e links de ação. |
| Texto sobre ciano | `--on-accent`: `#14161A` | Não usar branco em botões ciano pequenos. |

A interface de descoberta não usa laranja, terracota ou uma cor diferente por coleção. Avisos de pré-requisito usam texto neutro e direcionamento explícito. Cor sozinha não comunica estado. O destaque especial é uma borda ciano de 2 px em uma única peça recomendada visível, acompanhada do motivo da indicação.

As capas conservam suas cores originais. Não dessaturar todo o catálogo, tingir capas ou aplicar brilho geral para uniformizar a interface. Gradientes escuros servem à leitura de texto sobre imagens.

Exceção funcional já aprovada: no player, `Continuar o vídeo` mantém o terracota `#E07A4F`, que o diferencia de abrir um link ou copiar um comando. Essa regra pertence ao fluxo de vídeo e não se espalha pela vitrine.

## Tipografia, forma e composição

- Interface em Archivo, com Helvetica/Arial/sans-serif de fallback. Pesos 400 para leitura, 600 para rótulos e 700 para títulos e ações. Não usar fonte mono em navegação ou metadados; JetBrains Mono fica nos comandos e no código.
- Título da entrada: 28 a 42 px. Títulos das escolhas: 20 a 26 px. Texto de orientação: 14 a 16 px, entrelinha 1,5. Títulos dos cards: 15 px. Não alterar títulos, sinopses ou descrições aprovadas para caber.
- Catálogo: capas 16:9, raio 12 px, intervalo 10 px, margem lateral `clamp(20px, 3vw, 64px)`. Recorte com foco no topo quando a arte pede. Hero: raio 24 px. Modal: raio 14 px. Escolhas e recomendação: raio 16 px.
- Três escolhas de entrada com a mesma altura, padding e peso visual. Desktop em três colunas; tablet e celular em uma coluna com linhas iguais. Título, explicação, visual e ação na mesma ordem.
- Botões principais brancos, texto escuro; secundários neutros. Uma ação principal por decisão. Novas ações de descoberta usam cápsulas; controles de vídeo conservam sua proporção aprovada.
- Hover do catálogo: área clicável 44 × 44 px; círculo contornado visível 32 px de diâmetro, raio 16 px; círculo branco 28 px. SVG do mais, check e seta com 20 px, centralizado. Não substituir por glifos tipográficos de alinhamento variável.
- Hover depende de mouse disponível (`any-hover`/`any-pointer`) e ignora eventos de toque. Não desativar pela largura: uma janela de 752 px com mouse também tem prévia. A capa e o corpo da prévia têm um botão de abertura cobrindo a superfície; ações como Minha lista ficam acima dele e não abrem a ficha. O clique respeita os pré-requisitos e o retorno de foco ao card.
- Intenção de hover 300 ms, expansão 220 ms, tolerância de saída 120 ms, fechamento 160 ms. Preview sobreposto, sem mover os outros cards, limitado às bordas da tela. Respeitar movimento reduzido.

## Onboarding obrigatório

1. Cada carregamento da vitrine começa pelas três escolhas. A marcação de instalação persiste; a conclusão do onboarding não é salva para pular a entrada.
2. Não renderizar a lista completa nem liberar busca, Minha lista ou fichas antes de terminar as perguntas e clicar em `Abrir minha seleção`. Link direto de skill aguarda esse passo.
3. Quantidade disponível não é progresso. Cada ponto representa uma skill. O total e os grupos vêm de `vitrine.json`, nunca de porcentagens fixas. Coleções mostram nomes e contagens individuais. As perguntas mostram seu número, sem barra de progresso inventada.
4. A resposta final define o objetivo. A peça recomendada é a primeira etapa ainda necessária para esse objetivo, respeitando os pré-requisitos e as instalações marcadas.
5. Depois de entrar, manter a recomendação no topo, com motivo e ação. Permitir refazer as escolhas. Filtros e busca não apagam o objetivo escolhido.
6. Curadoria ausente ou inválida mostra erro com nova tentativa. Não abrir o catálogo antigo como atalho que ignora as dependências.

## Instalado e pré-requisitos

- Fonte da dependência: `skills[slug].antes` em `site/vitrine.json`, gerada de `prototipos/vitrine/curadoria.py` no repo privado. Não manter listas paralelas no HTML.
- `Marcar como instalado` é uma confirmação manual. Copiar comando, salvar em Minha lista, abrir amostra ou declarar que já tem arquivos no onboarding não marca instalação.
- A ficha liberada oferece `Marcar como instalado` no topo, ao lado de `Instalar em…`, e também junto do comando. As duas posições compartilham o mesmo estado e mostram `✓ Instalado` após a confirmação. Só a posição acionada anuncia o resultado; o foco permanece no botão. `Minha lista` tem rótulo visível próprio, separado de instalação. No celular, as ações empilham sem cortar o texto.
- Persistência local: `agentflix-installed-v1` no localStorage. Não existe verificação remota do agente nem sincronização entre dispositivos. Se o navegador não permitir salvar, informar que a marcação vale só nesta visita.
- Skill bloqueada abre somente uma orientação com os pré-requisitos faltantes e o caminho para a primeira etapa disponível. Não renderizar seu instalador, instruções de uso, amostras ou réguas nesse estado. Hover e link direto respeitam o mesmo bloqueio.
- Ao instalar todos os pré-requisitos, o alerta `Antes: ...` desaparece e a ficha é liberada. Dependências em cadeia são verificadas recursivamente. Mais de um pré-requisito exige todos.
- Remover uma marcação bloqueia novamente o que depende dela, inclusive se a skill dependente já tinha sido marcada. Preservar a marcação do dependente, mas não confundi-la com pré-requisitos completos.
- Mudanças entre abas reavaliam a ficha aberta. Marcar uma instalação atualiza os cards, o próximo passo e a indicação de continuação, sem recarregar a página.
- O bloqueio é orientação de uso do catálogo público, não autorização de acesso ou proteção do download público.

## Conteúdo e verificação

Comandos das oito plataformas permanecem idênticos. Texto de uso de uma régua é separado do comando de instalação. Marca pública: AgentFlix. Links de indicação não mudam. Exemplos de conversa continuam identificados como fictícios.

Antes de concluir uma mudança: `python3 -m unittest discover -s tests`, `python3 scripts/check_site.py` e QA em Chrome real. Verificar estado inicial, três caminhos de entrada, recomendação, bloqueio, instalação, recarga, remoção, dependências múltiplas, link direto, teclado e movimento reduzido. Registrar antes/depois em 1440, 768 e 390 px. Revisão visual do Zé antes do merge; merge na main publica produção.

Implementação: `site/index.html`, `site/vitrine.css`, `site/vitrine.js` e `site/vitrine-state.js`. Evidências desta revisão: `design-review/installed/`. O protótipo standalone é referência histórica; este arquivo rege novas alterações na interface real.

## Leitura humana: exemplar Hormozi

A ficha de `copy-metodo-hormozi` abre em **Para o humano**, com **Usar a skill** ao lado. É a única skill com leitura humana nesta etapa. A capa, a identificação e as ações continuam pertencendo à ficha da vitrine; o botão Instalar em… leva ao instalador existente, na segunda aba. As demais fichas mantêm sua composição.

O painel do exemplar comporta até 1120 px. As abas acompanham a rolagem, seguidas da barra Aa · Leitura. Título do guia, capítulos e orientação formam um conjunto fixo; em janelas baixas esse conjunto pode rolar por dentro. No celular, os capítulos ficam em uma faixa horizontal. Voltar da aba de instalação recupera a posição da leitura.

Escuro usa a base da marca. Papel é uma exceção aprovada para conforto: fundo creme e texto escuro apenas na leitura. Os cinco tamanhos e a aparência ficam em `agentflix-reading-v1`, por navegador e origem. Capa, ações e instalação não mudam de tema nem de tamanho. Escape fecha primeiro os ajustes abertos; depois, a ficha.

O conteúdo aprovado é servido em `site/leitura/`, com as imagens e os créditos. O componente só é montado após o onboarding e a verificação de pré-requisitos da ficha. Não há página de leitura paralela que pule essa experiência. Falha no carregamento oferece nova tentativa e mantém o acesso à aba de instalação.
