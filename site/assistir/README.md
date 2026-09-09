# Assistir

A entrada `/assistir/` é o acervo. `?s=slug` abre a ficha de uma série; `?s=slug#t3e2` abre seu episódio. O número na URL é o `n` da temporada, não a posição no array. Os links existentes continuam válidos.

## Onde editar

| Arquivo | Responsabilidade |
| --- | --- |
| `series.json` | Séries, capas, sinopses, temporadas, episódios e paradas. Fonte única do conteúdo. |
| `catalog-model.js` | Disponibilidade, fileiras e retomada. Compartilhado pelo acervo e player. Sem DOM nem escrita de progresso. |
| `catalog.js` | Destaque, capas, episódios, busca, Minha lista e fileiras. |
| `catalog.css` | Aparência e responsividade do acervo. |
| `series-covers.css` | Capas responsivas compartilhadas pelo destaque, cards e ficha. |
| `player.js` | Ficha, reprodução, navegação, pré-play, caminhos e paradas interativas. |
| `player.css` | Ficha e controles do vídeo. Ciano é ação; terracota é continuar. |
| `index.html` | Estrutura das telas e carregamento dos módulos. |

Os arquivos de interface são formatados com Prettier. Não é necessário instalar framework ou executar build para servir o site.

## Colocar uma nova série no acervo

1. Acrescente um objeto em `series.json`, dentro de `series`, com slug único, nome, subtítulo, sinopse, ano, `badge`, `gen`, `cast`, `traits`, `customer`, `cover`, `cover_wide` e temporadas. Use a estrutura existente como referência.
2. Coloque as capas em `img/`. `cover` serve ao destaque e à ficha; `cover_wide` serve aos cards. Para o formato responsivo, use uma arte horizontal nos dois campos e cadastre `cover_mobile` com a versão **2:3**. O navegador escolhe a vertical exclusivamente no celular (até 600 px), inclusive no card e na ficha; desktop e tablet usam a horizontal. O destaque e a ficha compõem título e ações sobre a imagem com gradiente escuro. As artes devem permitir esse enquadramento e vir sem texto; `object-fit: cover` preenche a superfície. Cards de séries são 16:9 no desktop/tablet e 2:3 no celular; episódios continuam em 16:9. Sem `cover_mobile`, o enquadramento anterior é preservado. Os PNGs da série Hermes são os arquivos originais fornecidos pelo Zé, sem edição.
3. Cadastre episódios com `t`, `d` em segundos, `uid` do Stream e `desc`. O uploader do repositório privado continua escrevendo neste mesmo arquivo. Cada série mantém seu `customer`.
4. Rode as validações abaixo. A série entra automaticamente na fileira padrão, na busca e em Minha lista. Não é preciso editar HTML, adicionar uma rota ou registrar o slug em outro arquivo.

`catalogo` é opcional: omitir equivale a `true`. Usar `false` tira a série do acervo, da busca e da retomada, preservando seu link direto. Nesta entrega, só `hermes-agent` aparece; `agente-pessoal` conserva os links das aulas antigas.

O destaque pode ser escolhido no nível raiz do JSON:

```json
"vitrine": {
  "destaque": "hermes-agent"
}
```

Sem destaque configurado, aparece a primeira série disponível. Se a seleção estiver vazia, a página mostra uma orientação. Não cria cards fictícios nem repete séries para preencher espaço.

## Organizar fileiras quando o acervo crescer

Por padrão, todas as séries disponíveis entram em **Séries do AgentFlix**. Para organizar por gênero, configure `vitrine.fileiras`. O gênero deve coincidir com um valor de `gen` da série:

```json
"vitrine": {
  "destaque": "hermes-agent",
  "fileiras": [
    { "id": "series", "titulo": "Séries do AgentFlix" },
    { "id": "instalacao", "titulo": "Instalação", "genero": "Instalação" }
  ]
}
```

Fileiras vazias ficam ocultas. As setas aparecem quando o conteúdo ultrapassa a largura disponível. A fileira de episódios acompanha a série em destaque. **Continuar assistindo** só aparece quando há progresso válido e a série ainda não terminou.

## Progresso e lista

- A retomada usa as mesmas chaves existentes: `agentflix-prog-<uid>` e `agentflix-caminho-<slug>`. O acervo não escreve progresso nem escolhe um caminho ao ser aberto.
- Acervo e player consultam a mesma função de retomada. O fim de um caminho não pula para outro; a raiz respeita a escolha gravada.
- Minha lista de séries fica em `agentflix-watch-list-v1`, independente da lista de skills. Sem login ou sincronização entre dispositivos. Falha de armazenamento informa que a lista vale só na visita.
- Nenhum vídeo é iniciado pela abertura do acervo. Assistir, Continuar e os episódios exigem ação explícita. Fotos sem carregamento deixam o nome legível.

## Escolha de caminho por episódio

Uma opção de `escolha` pode informar `temporada` e `episodio`, ambos com a numeração exibida ao aluno. Sem `episodio`, o destino continua sendo o primeiro da temporada, preservando as escolhas antigas. O destino precisa existir e não pode ser o próprio episódio de origem.

Na série Hermes, Fácil aponta para `{ "temporada": 1, "episodio": 2 }` e Difícil continua apontando para a temporada 3. O fim da introdução espera a escolha mesmo com T1E2 disponível. A retomada respeita o destino salvo e valida se ele ainda é uma opção disponível. T1E2 segue para o onboarding em T1E3. Ao terminar T1E3, o player não passa automaticamente para o caminho Difícil.

Em ações `comando`, o campo opcional `apos_copiar` define o aviso após a cópia bem-sucedida. T1E3 orienta colar no Telegram; ações anteriores preservam a orientação padrão para o Codex. O texto é escapado antes de renderizar e copiar nunca retoma o vídeo.

## Conferir uma mudança

```sh
python3 -m unittest discover -s tests
python3 scripts/check_site.py
```

Os testes cobrem múltiplas séries, configuração editorial, retomada, escolha de caminhos, fim de série e comandos existentes. O gate de sintaxe inclui todos os módulos de Assistir.

Nas paradas de link, `depois_lbl` permite nomear a lista de instruções, assim como nas paradas de vídeos e passos. Sem esse campo, o título já usado continua igual. O checkout mensal do Hermes autorizado para o modo fácil é uma exceção explícita à regra de indicação da Hostinger: usa o endereço integral e `indicacao: false`; os demais links continuam exigindo os parâmetros de indicação.

QA em Chrome real no repositório privado:

```sh
QA_REPO=/caminho/do/skills QA_BASE=http://127.0.0.1:8794 node ferramentas/qa-player/qa-assistir-catalog.cjs
QA_BASE=http://127.0.0.1:8794 node ferramentas/qa-player/qa-player-contract.cjs
```

Capturas desta entrega: `design-review/assistir-catalog/`. Mudanças de interface passam por revisão visual antes do merge; publicar um episódio continua exigindo a conferência de dados sensíveis nos quadros do vídeo.

## Protótipo local: HERMES EM OPERAÇÃO

Branch `codex/hermes-operacao-local`. Apenas local, sem push, PR ou deploy por pedido do Zé. Abra `/assistir/?s=hermes-em-operacao`. As duas artes são os PNGs originais fornecidos em 09/09/2026.

`em_breve: true` permite uma série com temporada vazia no acervo e na ficha; não requer customer do Stream nem inventa episódios. Reprodução fica desativada e a série não entra em Continuar assistindo. A temporada 1 começou pelo episódio interativo 2; vídeos seguem pendentes. Antes de produção, confirmar o conteúdo e seguir o fluxo de PR e QA.

### T1:E2: O restaurante de Miojo Premium

Episódio interativo local em `hermes-em-operacao/t1e2/`, sem vídeo. Registrado em `seasons[].atividades` com número explícito 2, sem criar episódio 1 fictício ou UID. O link `?s=hermes-em-operacao#t1e2` também abre a atividade. Seis etapas: Gatilho, Agente, Ferramenta, Puxar, Construir e Entrega. Botões anterior/próxima e seleção direta; mesa e tempero permanecem ao voltar. A maquininha demonstra o pedido de conta e volta à caderneta antes do preparo. Não há temporizador real de três minutos.

### Página 2: monte o fluxo e ligue a esteira

`hermes-em-operacao/t1e2/pratica.html` mantém o restaurante de Miojo Premium. Seis espaços recebem peças por clique ou teclado; quatro peças extras e pistas permitem revisar erros. Cada fluxo correto ativa um chef com capacidade de três clientes nesta simulação. A esteira atende automaticamente os clientes 1 a 3, para no 4 até montar o fluxo 2, e para no 7 até montar o fluxo 3. A atividade termina no cliente 9. Pausa e retomada disponíveis; movimento reduzido desativa a animação da esteira. Nenhum vídeo ou publicação. A página 1 aprovada recebeu apenas o link de navegação para a prática.

As peças também aceitam arrastar e soltar no navegador: mesa para etapa, entre etapas e de volta à mesa. Soltar sobre uma etapa ocupada devolve a peça anterior à mesa. Soltar fora dos destinos não altera o fluxo; clique e teclado continuam disponíveis.

### Página 3: os mesmos chefs, outra organização

`hermes-em-operacao/t1e2/equipe.html` divide responsabilidades entre Chef 1 (anotar e servir), Chef 2 (preparar) e Chef 3 (fechar a conta). O usuário distribui seis peças, com duas extras, por arraste, clique ou teclado e conecta três passagens: bilhete, prato pronto e pedido de pagamento. Um teste manual percorre um atendimento e pede explicitamente a conta antes de fechá-la. Depois, a animação atende 15 clientes em paralelo, com pausa, retomada, repetição e retorno à montagem. Os quatro contadores terminam em 15: pedidos, pratos preparados, pratos servidos e contas fechadas. A comparação 9 → 15 no mesmo período é a capacidade pedagógica aprovada pelo Zé, não uma medição de desempenho. Páginas 1 e 2 preservadas, acrescentando navegação para a página 3 na página 2.

### Identidade das seis etapas

As três páginas usam a skill pessoal `agentflix-desenho`: ilustração editorial adulta, traço simples e paleta marfim, carvão, cinza e ciano suave. `stage-identity.js` centraliza as artes, os cabeçalhos em aba, as peças e os personagens. Os 12 PNGs em `hermes-em-operacao/t1e2/art/` têm transparência real verificada; os prompts estão em `art/prompts.md`. Os arquivos com quadriculado desenhado foram descartados e não estão no site.

Gatilho usa campainha; Agente, chef; Ferramenta, caderneta; Puxar, menu; Construir, panela; Entrega, prato. Nome e número permanecem visíveis. Peças extras compartilham objetos com as corretas, para que o desenho não substitua a leitura. Três chefs distintos, cliente, mesa, maquininha e esteira completam o conjunto. A página 1 mantém uma única pessoa responsável por todo o preparo. Cliente servido recebe prato e texto de confirmação. Ícones são decorativos e não interferem no arraste ou no nome acessível dos botões.

QA da revisão: capturas em 1440, 768 e 390 px; transparência em fundo claro e escuro; navegação pelas seis etapas, clique, teclado, arrastar/mover/substituir/devolver peças; três fluxos de 3 clientes e equipe de 15 atendimentos. Movimento reduzido conserva os estados textuais e desativa o trilho animado. Entrega exclusivamente local, sem publicação.

A esteira da página 2 foi substituída por um componente SVG inline em `pratica.html`, com roletes e correia animados por CSS. A classe `running` existente controla o movimento, que pausa junto com o atendimento e respeita movimento reduzido. O PNG da esteira permanece como histórico sem uso na página. Demais ilustrações aprovadas preservadas.

### Página 4: Eugência, uma pessoa cuida do post inteiro

`hermes-em-operacao/t1e2/eugencia.html` apresenta três clientes fictícios: cafeteria, academia e loja de roupas. Cada atendimento percorre mensagem recebida, agente único, editor, consulta à pasta, construção progressiva de arte e legenda e envio simulado para aprovação. A publicação fica fora deste fluxo. Navegação por etapa e anterior/próxima; progresso separado por cliente durante a visita, mantido ao alternar entre eles. Recarregar a página reinicia a simulação. Reiniciar um cliente preserva os demais.

A criação exige consultar os materiais; a entrega exige as quatro ações de construção e o destinatário correto. Nenhuma mensagem real é enviada. As nove ilustrações originais de `art/eugencia/` foram geradas com a skill `agentflix-desenho`, com alpha verificado; os prompts estão no mesmo diretório. HTML e CSS compõem o post, os cartões e os controles. A navegação da página 3 leva à Eugência.

QA em Chrome a 1440, 768 e 390 px: três atendimentos completos, pré-requisitos, destinatário ausente/incorreto/correto, navegação, teclado, manutenção de progresso e reinício individual; imagens carregadas sem erros e sem transbordamento horizontal. Continuação exclusivamente local.

A revisão de simplicidade da Eugência reúne cena e ação em um painel: navegação compacta, uma instrução curta, um botão principal por vez e conceito sob “Entender esta etapa”. A criação revela uma ação de cada vez e Continuar aparece após a conclusão da etapa. Cliente é escolhido na abertura; Trocar cliente retorna à escolha preservando o progresso. Textos duplicados, resumo inferior e cartões de estado repetidos foram retirados. QA repetido nos três tamanhos, incluindo explicação por teclado, pré-requisitos e os três fluxos completos.

### Página 5: monte o fluxo da Eugência

`hermes-em-operacao/t1e2/eugencia-pratica.html` adapta a prática do restaurante para a agência. Seis espaços recebem oito peças por arraste, clique ou teclado; duas são distratoras. O fluxo cobre mensagem, pessoa, editor, materiais existentes, criação de título/arte/legenda e envio para aprovação. Cada montagem correta ativa uma pessoa para três clientes fictícios. O quarto e o sétimo cliente exigem outra montagem, até três pessoas e nove entregas. Limite pedagógico da simulação, sem envios reais.

Montagem e atendimento aparecem separadamente. A operação mostra apenas o lote atual de três clientes, com esteira SVG, pausa/retomada e contagem total. Explicações ficam em Como funciona; pistas aparecem após uma tentativa incorreta. Reutiliza as ilustrações aprovadas da Eugência. A página 4 ganhou um link para esta prática.

QA em Chrome em 1440, 768 e 390 px: três rodadas, validação de peças, arrastar/mover/substituir/devolver, teclado, pausa e reinício. Verificação de assets e transbordamento horizontal; capturas de montagem, pausa e conclusão. Mantido exclusivamente local.

### Página 6: novo cliente, captura de material

`hermes-em-operacao/t1e2/novo-cliente.html` inicia com o primeiro contato de um cliente novo. A pessoa recebe a mensagem e prepara Pinterest (referências visuais) e editor (modelos). O link do Pinterest abre o serviço; a atividade usa exemplos locais, sem pesquisa, coleta ou envio automáticos.

A captura termina na etapa 4, Elicitar. Quatro escolhas progressivas capturam nicho, escrita, identidade visual e banco de templates. Nichos usam as ilustrações existentes; escrita compara a mesma mensagem; identidade compara tipografia, composição e cores aplicadas ao mesmo post; templates exigem selecionar exatamente três entre seis opções no visual escolhido: novidade, dica, bastidores, checklist, enquete e frase da marca. O banco final reúne os modelos e o perfil definido. As escolhas permanecem em memória durante a visita e podem ser revisadas ou reiniciadas. Depois da captura, o fluxo segue para Puxar, Construir e Entrega.

Navegação adicionada ao rodapé e à conclusão da prática da Eugência. QA Chrome em 1440, 768 e 390 px: três perfis, seleção por teclado, pré-requisitos, alternância e revisão de opções, banco com três modelos, reinício e ausência de transbordamento ou erros de assets. Protótipo exclusivamente local.

A continuação usa uma cópia da documentação capturada: nicho, escrita, paleta/tipografia e banco de templates aparecem juntos em Puxar. A ação de carregar essa base libera Construir. Três painéis mostram escrita e visual ativos e a escolha de um template do banco; título e legenda variam com nicho, voz e modelo. A arte aplica a identidade escolhida e recebe o nome do cliente. Entrega mostra arte e legenda e confere o destinatário antes de simular o envio para aprovação.

Revisar a base invalida a documentação carregada e os materiais anteriores. Trocar o template exige construir o novo material. Nenhuma consulta ou envio externo. QA da continuação nos três tamanhos: documentos, três perfis, três templates por perfil, configuração ativa, bloqueios, revisão, destinatário ausente/incorreto/correto, teclado e carregamento das imagens.

A elicitação limita o banco a três templates: Continuar fica indisponível com menos de três, e novas opções ficam indisponíveis ao atingir o limite até retirar uma seleção. O contador orienta a troca. Construir mostra apenas os três salvos e permite um ativo por material. Checklist, enquete e frase usam composições próprias de lista, opções e tipografia; também geram título e legenda conforme a voz do cliente. QA em 1440, 768 e 390 px: seis opções, limite de três, remoção/reseleção, banco e documentação, escolha única, criação dos seis tipos e entrega.

### Som ambiente do episódio

As sete páginas de T1:E2 carregam `ambient.js` e `ambient.css`. O MP3 `audio/back1.mp3` é uma cópia integral de Back1.mp3 fornecido pelo Zé, sem edição. Reprodução em loop, ganho de 12% e entrada suave de 800 ms usando Web Audio; fallback de volume no elemento de áudio. Começa na primeira interação permitida pelo navegador. O controle no cabeçalho permite ativar/silenciar, inclusive por teclado.

A preferência de silêncio fica no localStorage; a posição da música no sessionStorage da aba. Pausa ao ocultar/sair da página, retoma ao voltar se habilitado, e respeita silêncio após navegar. A navegação entre documentos pode interromper brevemente o áudio e requerer outra interação conforme a política do navegador. Erro no arquivo desativa o controle sem interferir na atividade.

QA Chrome: loop real do MP3, ganho de 0,12, início por interação, teclado, silêncio persistente, restauração da posição, eventos de visibilidade e seis páginas em 1440, 768 e 390 px. Arquivo copiado validado por SHA-256 idêntico. Som e alterações permanecem locais.


### Página 7: o aluno conversa com três clientes

`hermes-em-operacao/t1e2/cliente-pratica.html` é a prática da captura, acessível pela página 6. Um celular simula a conversa; ao lado, o aluno registra cada resposta. Quatro perguntas revelam nicho, exemplo de escrita, visual escolhido entre três referências enviadas e três templates escolhidos entre seis imagens. As opções de registro aparecem após a pergunta. Respostas incorretas pedem revisão da conversa e não liberam a próxima parte.

Os clientes fictícios têm perfis próprios: Café da Esquina (escrita próxima, visual natural, novidade/checklist/enquete), Academia Movimento (direta, gráfica, dica/bastidores/checklist) e Loja Horizonte (editorial, essencial, novidade/enquete/frase). A documentação capturada é carregada em Puxar. Construir mantém escrita e visual ativos e permite escolher um dos três templates do cliente. Entrega valida o destinatário antes de liberar o próximo atendimento. A conclusão exige três entregas; repetir o envio não soma outro cliente. Tudo é simulado e mantido em memória durante a visita; reiniciar ou recarregar começa novamente.

Reutiliza as ilustrações aprovadas, as composições visuais e o som ambiente do episódio. QA Chrome em 1440, 768 e 390 px: três atendimentos completos, perguntas por teclado, respostas incorretas, imagens enviadas e escolhidas, limite de três templates, escolha única na construção, destinatário ausente/incorreto/correto, bloqueio de conclusão antecipada e reinício. Imagens, IDs e largura da página verificados. Entrega exclusivamente local.


### Efeitos sonoros do episódio

As sete páginas carregam `effects.js`. Os quatro MP3 fornecidos pelo Zé foram copiados integralmente para `audio/`: `button.mp3` (Clique botão), `selection.mp3` (Clique seleção), `drag.mp3` (arrastar card) e `complete.mp3` (Concluído). Clique acompanha botões, navegação e explicações; seleção acompanha opções, templates, clientes, peças, destinatários e encaixes válidos; arraste toca no início do movimento. Conclusão é emitida pela lógica após validar o fluxo, terminar a captura/preparo/material, entregar ao destinatário correto ou concluir um lote. Não toca sucesso em validações incorretas nem ao apenas revisitar uma tela concluída.

Web Audio usa ganhos de 0,45 (botão), 0,40 (seleção), 0,50 (arraste) e 0,28 (conclusão), ajustados aos arquivos fornecidos. Uma voz de efeitos por vez; a conclusão substitui o clique da mesma ação. Sem som de hover ou a cada movimento do mouse. Efeitos têm controle independente da música no cabeçalho, com preferência `agentflix-effects-enabled` no localStorage. Ocultar ou sair da página interrompe o efeito; falhas de áudio não bloqueiam a atividade. Os arquivos originais permanecem intactos, conferidos por SHA-256.

QA: reprodução real dos buffers e seus ganhos em Chrome, sete páginas, teclado, arraste/encaixe, silêncio após recarga, botões desabilitados, respostas incorretas, conclusão sem clique duplicado e três clientes completos em 1440, 768 e 390 px. Capturas dos controles nos três tamanhos; testes do repositório e sintaxe do site. Alterações somente locais.

Sons de cena ainda não fornecidos: mensagem recebida; mensagem/imagens enviadas; aviso suave de erro ou pré-requisito; pasta/documentação carregada; esteira iniciando, rodando em loop e parando; passagem de bilhete/prato entre responsáveis; campainha da mesa; água/preparo/mexida; prato servido; pagamento aprovado e emissão da nota. Essas ações já têm os cliques ou confirmações gerais quando aplicável. Mensagens e aviso de erro são a próxima prioridade; sons contínuos de cena devem ser discretos para não competir com a música.
