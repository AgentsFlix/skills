# Base editorial ECF

## Objetivo

Manter a Jornada da Marca como porta de entrada e, depois de a pessoa informar
o negócio e escolher “Começar a marca”, abrir a Base ECF de seis etapas:
Negócio, Pesquisa, Público, Posicionamento, Voz e Matéria-prima. Cada etapa
gera um prompt com as skills no GitHub, recebe apenas o JSON correspondente e
exibe o recibo no próprio painel. A visão de pastas só aparece após 6/6
arquivos válidos.

## Evidências

- Contrato: exemplos válidos para as seis etapas, rejeição de documento fora do
  caminho canônico e prompt de correção com o nome do JSON correto.
- Navegador local: tela conferida em 1440 px, 768 px e 390 px; somente a
  etapa atual recebe destaque ciano.
- Navegador local: o envio da porta de entrada abre `base-editorial.html` e
  transfere o nome e o identificador da jornada para esta aba. Após copiar um
  prompt e recarregar, o mesmo identificador continua disponível para validar
  o JSON devolvido pelo Hermes. Abrir a Base ECF diretamente continua começando
  com o campo vazio.
- Os 13 cards que usavam apenas chips, frases ou símbolos agora trazem uma
  ilustração editorial própria. Em Pesquisa, "Tenho canais em mente" mostra
  os links-semente se abrindo em descoberta; não há texto dentro da área de
  arte. O nome salvo do negócio é apresentado como texto do painel, sem a
  caixa cinza nativa do navegador.
- Verificações: node tests/base_editorial.cjs,
  python3 -m unittest discover -s tests,
  python3 scripts/check_site.py e
  python3 scripts/agent_work.py check.

## Limitações

Os dados ficam no armazenamento local do navegador e podem ser baixados como
minha-base-ecf.json; não são enviados a um serviço remoto. O teste
automatizado do contrato cobre importação e correção. O seletor de arquivos do
navegador de teste não expôs o evento de upload para automação local.

O nome do negócio só é persistido junto do primeiro JSON válido. Assim, uma
tentativa sem arquivo recebido volta a abrir com o campo vazio; uma base que já
recebeu ao menos um arquivo continua retomável neste navegador.

## Continuação: Minha marca (15/09/2026)

Após gerar a Base de Conhecimento Social Media no Hermes, a pessoa abre
`minha-marca.html` pelo handoff e envia o documento Markdown. As três visões
usam o documento importado: Plano editorial, Estratégia e Biblioteca.
A interface segue as referências aprovadas, com cards marfim, recorte de pasta,
contornos simples, fundo carvão e acento ciano. Cards da mesma família têm altura igual.

O parser lê as 12 seções numeradas e suas tabelas. Não contém conteúdo de marca
pré-carregado. O original fica disponível integralmente, junto de fichas de pautas,
pilares, fontes, permissões e limites. Busca percorre pautas e seções; os cards
ECF filtram as pautas. Proporções são planejamento editorial declarado, nunca
notas de diagnóstico. Metadados ausentes são identificados como não informados.

Upload e substituição são validados antes de trocar a base. Arquivo inválido
preserva a base anterior e oferece prompt de correção. HTML importado é tratado
como texto. O arquivo fica apenas no navegador, em chave própria, e não altera
os seis registros da Base ECF. Falha de persistência é informada explicitamente.

Validação local:

- 98 testes Python aprovados, 1 ignorado; contrato Markdown exercitado pelo teste
  Node existente: BOM/CRLF, outra marca, campos ausentes, proporções variadas,
  tabelas quebradas, seção duplicada/ausente, limite de tamanho e conteúdo HTML.
- Check do site: 0 erros.
- Chrome: upload real, substituição, recarregamento, três abas, busca, filtros,
  ficha de pauta, fontes, documento completo, tema e correção de arquivo inválido.
- Desktop, tablet e celular: 1440, 768 e 390 px, sem transbordamento horizontal;
  alturas iguais verificadas no navegador. Capturas públicas usam somente dados
  fictícios em `design-review/base-dashboard/minha-marca/`.

Limites: o formato aceito é o Markdown com as 12 seções do prompt. Não há servidor
para sincronizar dados entre dispositivos. Fonte citada não implica permissão de
uso: a ficha não deduz essa autorização. Merge e produção desta continuação ainda
precisam ser confirmados.

A revisão independente identificou e motivou correções adicionais:

- Títulos numerados aceitam níveis Markdown de 2 a 6, incluindo o `###` usado
  no prompt. Nomes de seção, tabelas obrigatórias, 3 a 5 pilares e pelo menos
  18 pautas são validados antes de salvar.
- O handoff transmite o identificador da Base ECF. Documentos ficam separados
  por projeto; a marca do arquivo deve corresponder à Base ECF aberta. Arquivos
  independentes ficam separados pelo nome, com acesso por “Bases salvas”.
- Se o armazenamento local falhar, a versão nova é guardada na sessão da aba
  quando possível, com aviso. Se ambos falharem, a mensagem informa explicitamente
  que recarregar pode restaurar a versão anterior.
- Chrome confirmou duas marcas com projetos distintos, rejeição da marca errada,
  retorno à primeira base, projeto desconhecido e recarregamento depois de falha
  simulada na persistência.

Os checks de publicação `agent-review` e `qa`, exigidos de Apps específicas pela
proteção atual da main, ainda não foram emitidos para esta continuação. A revisão
local não substitui esses checks. O PR permanece aberto enquanto essa exigência
não for atendida pelo serviço responsável.

A revisão final também identificou a ausência possível da tabela de distribuição ECF. O importador agora exige seus quatro cabeçalhos e exatamente uma linha para Creator, Expert e Founder. Proporções ausentes continuam explícitas como não informadas; o prompt de correção descreve o mesmo contrato. Testes cobrem tabela ausente, cabeçalho inválido, papel ausente e duplicado.

## Correção do raio dos cards, 15/09/2026

As extremidades do recorte inferior agora fazem transições arredondadas, usando o mesmo raio da superfície e do indicador menor. O fundo acompanha a largura real do indicador nas três telas e nos dois temas. Capturas antes/depois com exemplo fictício em `design-review/base-dashboard/minha-marca/radius/`. Conferência em 1440, 768 e 390 px: alturas iguais, raios compartilhados e ausência de transbordamento horizontal. A publicação continua sujeita aos checks obrigatórios do PR #89.

## Alinhamento com o design system e ilustrações editoriais

Revisão de 15/09/2026 das visões Plano, Estratégia e Biblioteca. A moldura marfim de 10 px, os cards claros dominantes, os raios de 25 a 38 px e os recortes ornamentais davam ao painel uma linguagem própria que concorria com a vitrine. A interface agora usa os tokens canônicos: fundo `#141414`, painéis `#181818`, apoio `#333333`, texto `#F5F5F1`, texto secundário `#B3B3B3`, bordas discretas e ciano restrito a foco e orientação. Cards usam raio de 16 px, superfícies internas 12 px e modal 14 px.

Os SVGs continuam nos controles funcionais, onde garantem precisão em busca, navegação, estado e ações. As sete ilustrações semânticas grandes foram substituídas por PNGs editoriais gerados para Creator, Expert, Founder, Público, Posicionamento, Voz e Porta de entrada. Founder mantém personagem masculino. Os arquivos têm canal RGBA e pixels totalmente transparentes; foram aplicados sem remoção de fundo por script. Prompts e critérios de validação estão em `site/assistir/hermes-em-operacao/t1e2/art/dashboard/prompts.json`.

A distribuição passou a combinar dez pontos com a leitura explícita “4 de cada 10”, em vez de depender de uma barra e de porcentagem isoladas. Em Estratégia, descrições longas são limitadas visualmente a três linhas sem alterar o conteúdo acessível. Em Biblioteca, a seleção recebe marca lateral ciano e as linhas preservam contraste e hierarquia no mesmo vocabulário visual das demais telas.

## Situação da distribuição editorial

Creator, Expert e Founder usam a referência saudável de 4, 4 e 2 pontos, respectivamente. Os pontos preenchidos agora mostram a situação de cada perfil: azul quando o valor coincide com a referência, amarelo quando está a um ponto e vermelho quando se distancia dois ou mais. O marcador `⌃` fica sob o ponto ideal, e o rótulo acessível informa situação e referência sem depender somente da cor.

## Maton AI na etapa Pesquisa

`maton-operations` agora aparece como uma skill 2:3 ao lado de Pesquisa & Avatar,
com rótulo Maton AI e link para a fonte externa fixada por commit. A antiga ficha
textual de integração foi removida. O componente explicita que essas são as skills
que o agente consulta ao executar o prompt. As capas fornecidas foram convertidas nas
variantes desktop, mobile, wide e card e conferidas no Cloudflare Images. O QA
local confirmou as duas capas lado a lado no navegador desktop; 99 testes foram
aprovados, 1 foi ignorado e o check do site terminou com 0 erros. Nenhum deploy
do site foi executado.

## Onboarding em dois focos por etapa

Cada uma das seis etapas agora começa destacando o item numerado do cabeçalho,
com a primeira metade da explicação. “Continuar” move o destaque para a pergunta
e as três figuras, onde aparece a orientação de escolha e o resultado esperado.
Isso reduz o bloco de texto sobre os cards e explicita primeiro o papel de
Negócio, Pesquisa, Público, Posicionamento, Voz ou Matéria-prima.
O contorno ciano dos seis itens é desenhado para dentro do componente, evitando
que o `overflow` horizontal do cabeçalho corte suas laterais no celular.
Durante essa explicação específica, a faixa completa sobe acima do fundo escuro:
o item atual permanece ciano e os outros cinco ficam parcialmente visíveis para
comunicar que a pessoa está em uma sequência de seis etapas.

## Capítulo 3 da Temporada 1

O trabalho foi reunido em `/assistir/hermes-em-operacao/t1e3/` como uma jornada
única de cinco partes: explicação do método, geração do prompt de coleta,
diagnóstico, construção da Base ECF e dashboard final. O capítulo continua até
a geração da Base de Conhecimento Social Media e as visões Plano, Estratégia e
Biblioteca.

O relatório do diagnóstico permanece local. A transição guarda apenas o resumo
validado de Creator, Expert e Founder durante a sessão; assim que uma Base ECF
existe, esse resumo entra no projeto e é removido do armazenamento temporário.
O catálogo da série agora mostra dois capítulos interativos na Temporada 1 e
identifica os materiais como “Capítulo 2” e “Capítulo 3”.

QA em Chrome real cobriu 1440, 768 e 390 px, sem transbordamento horizontal,
erros de JavaScript ou recursos locais ausentes. As nove capturas estão em
`design-review/base-dashboard/t1e3/` e mostram método, diagnóstico e início da
base em cada largura.

## Hierarquia de navegação do método ECF

O capítulo 3 mantém uma única jornada principal no topo: Conheça o método,
Colete com Zernio e Gerar análise. A história, As três moedas, O conteúdo e O
raio-x aparecem como índice contextual do método, acompanhado do capítulo atual
e da posição na sequência.

No desktop, o índice ocupa um rail vertical sticky ao lado da aula. No tablet,
ele vira uma faixa compacta acima do conteúdo. No celular, os quatro capítulos
formam cards horizontais pequenos, com a continuidade indicada pelo recorte do
próximo card. O estado ativo usa superfície suave e raio de 10 px. O QA em Chrome
real confirmou a troca do resumo e do `aria-current`, ausência de transbordamento
horizontal e zero erros de página em 1440, 768 e 390 px. As evidências estão em
`design-review/base-dashboard/t1e3/*-04-navegacao-metodo.png`.

## Funil de Creator, Expert e Founder

A antiga comparação de curtidas, seguidores e as três letras foi substituída por
um único trapézio invertido. O funil começa em `1 perfil`, com uma única seta, e
separa Atrair / Creator, Demonstrar / Expert e Convidar / Founder por duas linhas
divisórias. As três ilustrações transparentes ficam dentro das faixas inclinadas;
Creator fica deslocado à direita sem ultrapassar a borda. Não há ícones nem rótulos
de seguidores, compartilhamentos ou conversão nesse componente.

O QA em Chrome real conferiu geometria das artes, estado sem transbordamento e
zero erros de página em 1440, 768 e 390 px. As capturas estão em
`design-review/base-dashboard/t1e3/*-05-funil-ecf.png`.

## Demonstração fictícia da Base ECF

Cada uma das seis etapas da Base ECF tem o botão “Preencher com exemplo
fictício”. Ele seleciona uma figura coerente com a etapa, cria ou reutiliza a
base local e salva um rascunho validado pelo mesmo contrato usado no retorno do
Hermes. Os exemplos usam o Estúdio Aurora somente como cenário ilustrativo:
cada arquivo e cada resumo informa que não há fonte externa, pesquisa, cliente
ou dado real envolvido. Depois do sexto clique, a pessoa chega ao dashboard com
seis pastas demonstrativas e pode percorrer todo o fluxo.

O estado recebido substitui a área de upload, evitando exibir ao mesmo tempo o
arquivo demonstrativo e o botão de importação. QA em Chrome real confirmou o
fluxo inteiro, dashboard, ausência de erros de página e ausência de overflow em
1440, 768 e 390 px. As capturas estão em
`design-review/base-dashboard/t1e3/*-06-exemplo-ficticio.png`.
