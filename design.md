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
- Título da entrada: 30 a 46 px. Títulos das escolhas: 19 a 26 px. Texto de orientação: 14 a 16 px, entrelinha 1,5. Títulos dos cards: 15 px. Não alterar títulos, sinopses ou descrições aprovadas para caber.
- Catálogo: capas 16:9, raio 12 px, intervalo 10 px, margem lateral `clamp(20px, 3vw, 64px)`. Recorte com foco no topo quando a arte pede. Hero: raio 24 px. Modal: raio 14 px. Escolhas e recomendação: raio 16 px; escolhas compactas no celular: raio 12 px.
- Três escolhas de entrada com a mesma altura e peso visual. Desktop e tablet acima de 600 px em três colunas; celular em linhas com a arte à esquerda. Cada escolha tem cena, rótulo, título e descrição. O texto aprovado permanece integral. Seleção por radio nativo, borda ciano e check; foco branco visível. A única ação principal é Continuar.
- Botões principais brancos, texto escuro; secundários neutros. Uma ação principal por decisão. Novas ações de descoberta usam cápsulas; controles de vídeo conservam sua proporção aprovada.
- Hover do catálogo: área clicável 44 × 44 px; círculo contornado visível 32 px de diâmetro, raio 16 px; círculo branco 28 px. SVG do mais, check e seta com 20 px, centralizado. Não substituir por glifos tipográficos de alinhamento variável.
- Hover depende de mouse disponível (`any-hover`/`any-pointer`) e ignora eventos de toque. Não desativar pela largura: uma janela de 752 px com mouse também tem prévia. A capa e o corpo da prévia têm um botão de abertura cobrindo a superfície; ações como Minha lista ficam acima dele e não abrem a ficha. O clique respeita os pré-requisitos e o retorno de foco ao card.
- Intenção de hover 300 ms, expansão 220 ms, tolerância de saída 120 ms, fechamento 160 ms. Preview sobreposto, sem mover os outros cards, limitado às bordas da tela. Respeitar movimento reduzido.

## Ficha das séries no Assistir

- Materiais de episódios ficam sempre na aba **Materiais**, ao lado de **Episódios** e **Sobre**. O hero reserva suas ações para assistir e retomar; não recebe botão de materiais.
- Materiais são agrupados por temporada e identificados pelo número do episódio. Vídeo e atividade com o mesmo número não contam como dois episódios.
- O retorno para todas as séries usa seta SVG de 20 px, traço de 2,5 px e pontas arredondadas, com texto ao lado e alvo mínimo de 44 px. Não usar a seta tipográfica.
- Elencos longos mostram o primeiro nome e oferecem a lista completa em uma área expansível.

## Onboarding obrigatório

1. A primeira visita na aba começa pelas três escolhas. A pedido do Zé após a revisão do Clarity em 08/09/2026, respostas e conclusão ficam no sessionStorage dessa aba: recarregar ou voltar do player restaura o caminho. Uma aba sem estado começa pelo guia. Não guardar a conclusão no localStorage nem compartilhar a seleção entre dispositivos. Estado inválido ou incompatível com a curadoria atual volta à entrada.
2. Não renderizar a lista completa nem liberar busca, Minha lista ou fichas antes de terminar as perguntas e clicar em `Abrir minha seleção`. A conclusão sempre abre o Início, com a recomendação e a seleção escolhidas, inclusive se a entrada veio de um link de leitura ou de skill. A pessoa acessa Ler ou abre uma ficha depois desse passo.
3. Quantidade disponível não é progresso. Cada ponto representa uma skill. O total e os grupos vêm de `vitrine.json`, nunca de porcentagens fixas. Coleções mostram nomes e contagens individuais. As perguntas mostram seu número, sem barra de progresso inventada. As quantidades e os pontos ficam em O que tem nesse caminho, após selecionar uma opção; o detalhe identifica cada grupo e explica o que os pontos representam.
4. A resposta final define o objetivo. A peça recomendada é a primeira etapa ainda necessária para esse objetivo, respeitando os pré-requisitos e as instalações marcadas.
5. Depois de entrar, manter a recomendação no topo, com motivo e ação. Início, marca e Meu caminho retornam à recomendação; durante as perguntas, o cabeçalho mostra apenas a marca sem link e uma orientação. Navegação, filtros e busca não apagam respostas nem o objetivo. Somente Refazer minhas escolhas ou Trocar de caminho reinicia o guia e bloqueia novamente o catálogo até concluir a nova escolha.
6. O onboarding é uma tela dedicada. Menu, busca, Minha lista, conta e comandos do rodapé não aparecem antes de Abrir minha seleção. A marca não recebe foco nem clique nessa etapa; Privacidade continua acessível. A navegação é ocultada desde o HTML inicial para não piscar antes da carga.
7. Selecionar um card não troca a pergunta. Continuar confirma a escolha, registra a resposta e avança. Voltar recupera a resposta anterior marcada para revisão. Trocar de caminho retorna às três escolhas. Respostas confirmadas continuam restauráveis na aba; a seleção ainda não confirmada não é uma resposta salva.
8. As três escolhas iniciais usam ilustrações editoriais exclusivas: concluir uma tarefa, organizar a base do negócio e descobrir um caminho. Traço desenhado, personagens adultos, fundo carvão, branco quente e ciano; sem texto dentro da arte, cores de alerta ou SVG ilustrativo. Arquivos locais em `site/onboarding/`, sem dependência do serviço de capas. Desktop mostra a composição inteira; no celular, o enquadramento quadrado recorta apenas as margens vazias, preservando personagens e objetos. As imagens são decorativas e os rótulos funcionam se elas falharem. Perguntas e resultado conservam as capas das skills. Movimento discreto de hover e zoom, desativado com movimento reduzido. Perguntas com muitas opções usam miniaturas compactas; no celular, Continuar acompanha a rolagem. O resultado mantém uma única peça com borda especial.
9. Curadoria ausente ou inválida mostra erro com nova tentativa. Não abrir o catálogo antigo como atalho que ignora as dependências.

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

Medição: Clarity carrega somente nos domínios públicos de produção; localhost e previews não coletam. `?qa=1` desativa a coleta neste navegador, inclusive no player, até `?qa=0`. Ambiente e versão identificam a coleta nova. Eventos distinguem entrada/respostas/conclusão do guia, restauração/consulta do caminho, recomendação, bloqueio, encaminhamento, ficha liberada, tentativa/sucesso/falha de cópia e instalação manual. Não enviar conteúdo digitado ou comandos nos eventos. Copiar só mostra sucesso quando o navegador confirma; falha não marca instalação nem continua o vídeo. O evento automático Fazer logon não representa o botão Entrar da abertura.

Comandos das oito plataformas permanecem idênticos. Texto de uso de uma régua é separado do comando de instalação. Marca pública: AgentFlix. Links de indicação não mudam. Exemplos de conversa continuam identificados como fictícios.

Antes de concluir uma mudança: `python3 -m unittest discover -s tests`, `python3 scripts/check_site.py` e QA em Chrome real. Verificar estado inicial, três caminhos de entrada, recomendação, bloqueio, instalação, recarga, remoção, dependências múltiplas, link direto, teclado e movimento reduzido. Registrar antes/depois em 1440, 768 e 390 px. Revisão visual do Zé antes do merge; merge na main publica produção.

Implementação: `site/index.html`, `site/vitrine.css`, `site/vitrine.js` e `site/vitrine-state.js`. Evidências desta revisão: `design-review/installed/`. O protótipo standalone é referência histórica; este arquivo rege novas alterações na interface real.

## Leitura humana: exemplar Hormozi

A ficha de `copy-metodo-hormozi` abre em **Para o humano**, com **Usar a skill** ao lado. É a única skill com leitura humana nesta etapa. A capa, a identificação e as ações continuam pertencendo à ficha da vitrine; o botão Instalar em… leva ao instalador existente, na segunda aba. As demais fichas mantêm sua composição.

O painel do exemplar comporta até 1120 px. As abas acompanham a rolagem, seguidas da barra Aa · Leitura. Título do guia, capítulos e orientação formam um conjunto fixo; em janelas baixas esse conjunto pode rolar por dentro. No celular, os capítulos ficam em uma faixa horizontal. Voltar da aba de instalação recupera a posição da leitura.

Escuro usa a base da marca. Papel é uma exceção aprovada para conforto: fundo creme e texto escuro apenas na leitura. Os cinco tamanhos e a aparência ficam em `agentflix-reading-v1`, por navegador e origem. Capa, ações e instalação não mudam de tema nem de tamanho. Escape fecha primeiro os ajustes abertos; depois, a ficha.

O conteúdo aprovado é servido em `site/leitura/`, com as imagens e os créditos. O componente só é montado após o onboarding e a verificação de pré-requisitos da ficha. Não há página de leitura paralela que pule essa experiência. Falha no carregamento oferece nova tentativa e mantém o acesso à aba de instalação.

### Acervo de leitura

**Ler** fica no menu principal, após **Assistir**, e abre a seleção **Para o humano** em `#ler`. A seleção lista todas as skills que têm leitura registrada no mesmo componente que libera a aba humana. Atualmente, apenas Hormozi. O filtro anterior de avulsas, coleções ou Minha lista não limita esse acervo.

A grade conserva capas 16:9, proporções, tipografia e fundo escuro da vitrine. Um livro de traço discreto acompanha “Leitura disponível”. O card abre a ficha na aba humana; fechar retorna ao acervo e ao card acionado. O hover oferece “Ler método”. A busca da barra passa a buscar apenas nas leituras, com limpeza de busca quando não houver resultado.

No celular, Ler acompanha a navegação horizontal. O tema Papel continua restrito ao conteúdo dentro da ficha. Abrir `#ler` ou acionar Ler antes do fim do onboarding exibe o guia obrigatório; a conclusão abre o Início, sem carregar a leitura antecipadamente. Depois do onboarding, Ler abre o acervo normalmente. As regras de pré-requisitos continuam sendo conferidas ao abrir cada ficha. Voltar ao Catálogo recupera a seleção anterior.

## Acervo Assistir

`/assistir/` abre o acervo de séries. A entrada usa destaque amplo com capa, título, metadados reais e ações Assistir/Continuar e Mais informações. O destaque e a ficha usam imagem como fundo, com gradiente para título, informações e ações sobrepostas, conforme a referência Netflix escolhida pelo Zé. Desktop e tablet usam a arte horizontal; a vertical 2:3 é exclusiva do celular, até 600 px. Cards de séries são 16:9 acima de 600 px e 2:3 no celular. Miniaturas de episódios continuam em 16:9. Fileiras mantêm raio 12 px, tipografia Archivo e intervalos de 10 px; o destaque tem raio 24 px. Navegação, busca e Minha lista de séries seguem o fundo escuro da marca. Botão principal branco, secundário neutro; sem vermelho de marca externa.

O catálogo vem de `site/assistir/series.json`. Somente a série atual é exibida nesta etapa. Novas séries entram pelo cadastro; a configuração editorial pode definir destaque e fileiras por gênero. Não duplicar séries ou inventar conteúdo para preencher fileiras. Episódios pertencem à série em destaque; Continuar assistindo só aparece com progresso real. A lista de séries é independente da lista de skills.

Mais informações abre a ficha com temporadas e episódios. Assistir e os cards de episódios abrem o player existente. Links antigos e números reais de temporada continuam válidos. A retomada é compartilhada entre acervo e player. As paradas, o pré-play, os comandos, os links e a escolha de caminhos preservam o contrato do player. Catálogo não inicia vídeo automaticamente.

Celular mantém a navegação visível, o destaque com arte vertical e texto sobre o gradiente inferior e fileiras por gesto. Teclado acessa cards, busca, lista e ações; movimento reduzido desativa transições. Falhas de catálogo oferecem nova tentativa, e falhas de imagem preservam o nome. Estrutura e manutenção documentadas em `site/assistir/README.md`.

## Contrato obrigatório de publicação: padrão Hormozi

Toda nova peça Para o humano usa exatamente o componente atual do Hormozi na vitrine: `cardHtml` → prévia `previewHtml` → `renderModal` → `AgentFlixReader.mount`. Não copiar esse HTML, criar card manual, abrir uma página standalone, iframe ou manter abas/instalador paralelos. Mudanças posteriores do componente se aplicam a todas as leituras.

A inclusão é declarativa: registrar slug, reader JSON e capa em `site/leitura/manifest.json`. O conteúdo usa o esquema `schemaVersion: 1.0`, capítulos, blocos, fontes e disclaimer. Uma skill ainda em revisão pode fornecer `fallback` com os dados aprovados e somente os alvos realmente disponíveis; nunca fabricar versão ou comando. A distribuição oficial prevalece quando a skill entra no catálogo. Pré-requisitos existentes permanecem sob a curadoria da vitrine.

Card, hover com botão de leitura/Minha lista/seta, capa 16:9, modal com fechar, título, ações, abas Para o humano/Usar a skill, capítulos e ajustes de leitura pertencem ao componente comum. A capa fornecida mantém os pixels originais; a apresentação segue o mesmo enquadramento do Hormozi. Conteúdo editorial aprovado não é reescrito na migração.

Antes de publicar, rodar `python3 -m unittest discover -s tests` e `python3 scripts/check_site.py`. O teste `test_reading_contract.py` verifica o registro, blocos e assets e impede leitor paralelo. Fazer QA de cada peça e Hormozi no mesmo build: card, hover, abertura, fechar/retorno, Minha lista, instalação manual, abas, capítulos, tema/tamanho, teclado e 1440/768/390 px. Aprovação de conteúdo novo continua necessária; a aprovação do componente não aprova novos textos.

## Mobile: ícones e atividades de montagem

Mobile usa os mesmos SVGs de interface e as mesmas ilustrações editoriais do desktop. Não substituir ícones por emojis, nem criar uma variante de ícones para celular. A dimensão pode se adaptar; o desenho e o significado permanecem.

Nas atividades de associação da Aula 2, telas compactas e toque usam peça → lista de destinos. Um espaço vazio também abre a escolha de peças. A lista informa a posição atual e o que será substituído; a peça anterior volta para a mesa. Cancelar preserva a resposta e devolve o foco. Retirar permanece explícito. Conferir continua sendo uma ação separada, com as mesmas pistas e critérios do exercício.

O arraste permanece disponível com mouse em telas amplas, junto da alternativa por clique e teclado. Toque não exige pressão longa nem interfere na rolagem. Controles novos têm alvo mínimo de 44 px, foco visível, rótulos e estado anunciado. O painel respeita a altura disponível e a área segura do dispositivo.
