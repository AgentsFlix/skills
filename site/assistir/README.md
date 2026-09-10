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

## HERMES EM OPERAÇÃO · Temporada 1, episódio 2

Entrada: `/assistir/?s=hermes-em-operacao`. O episódio interativo abre em
`/assistir/hermes-em-operacao/t1e2/`; o link `?s=hermes-em-operacao#t1e2` também é aceito.
O cadastro usa `seasons[].atividades`, com número explícito 2, sem vídeo, UID ou episódio 1 fictício.

### Sequência do episódio

`episode-navigation.js` centraliza as nove partes, o índice expansível e os links anterior/próxima.
Cada parte conserva os controles de suas etapas, as ilustrações aprovadas e a indicação de T1:E2.
Links diretos continuam funcionando. A navegação entre páginas não marca tarefas como concluídas.
As escolhas das práticas duram enquanto a página permanece aberta; recarregar inicia outra visita.

| Parte | Página | Atividade |
| --- | --- | --- |
| 1 | `index.html` | Miojo Premium: Gatilho, Agente, Ferramenta, Puxar, Construir e Entrega. |
| 2 | `pratica.html` | Montar três fluxos com peças extras; três chefs atendem nove clientes. |
| 3 | `equipe.html` | Dividir responsabilidades e acompanhar as passagens até quinze atendimentos. |
| 4 | `eugencia.html` | Uma pessoa cria arte e legenda para três tipos de cliente. |
| 5 | `eugencia-pratica.html` | Montar fluxos da agência e ativar três lotes de atendimento. |
| 6 | `novo-cliente.html` | Elicitar nicho, escrita, visual e três de seis templates; puxar a documentação, construir com um template e entregar. |
| 7 | `cliente-pratica.html` | Conversar por celular com três clientes fictícios, registrar escolhas e entregar a cada um. |
| 8 | `base-negocio.html` | Nove etapas da base: negócio, público, posicionamento, voz, conhecimento, pilares, visual, templates e operação. |
| 9 | `jornada-marca.html` | Montar a base real da marca com prompts, conversa externa, revisão e salvamento declarados. |

Os limites de capacidade são hipóteses pedagógicas da simulação, não medições reais.
Nenhuma página envia mensagens ou publica nas redes sociais. A base final permite revisar arquivos
simulados e baixar um JSON de exemplo, sem acessar contas ou dados reais de clientes.

### Arte e acessibilidade

As ilustrações em `art/` seguem o desenho editorial AgentFlix: marfim, carvão, cinza e ciano suave,
com transparência real. Prompts de referência ficam junto dos assets. Esteiras são componentes SVG;
o PNG anterior da esteira permanece apenas como histórico. Nome e número identificam as etapas.
As peças aceitam arraste, clique e teclado. As esteiras têm pausa e respeitam movimento reduzido.

### Áudio

`ambient.js` toca `audio/back1.mp3` em loop, com ganho 0,12 e entrada gradual.
O som começa após interação. Posição entre páginas fica no sessionStorage; preferência de silêncio
fica no localStorage. A troca de página pode interromper o som até a próxima interação, conforme
as regras de reprodução do navegador. Abas ocultas pausam a reprodução.

`effects.js` oferece `EpisodeSound.play(nome ou sequência)` e `EpisodeSound.loop(ativo)`.
Os efeitos específicos substituem o clique genérico da mesma ação. Sequências respeitam a ordem;
outra ação cancela o restante. Esteira usa canal separado e para junto da simulação.
Som ambiente e efeitos têm controles independentes, disponíveis em todas as partes.

Efeitos: botão, seleção, arraste, conclusão, campainha, água, fervura, mexer, prato servido,
passagem de pedido, maquininha, nota, esteira rodando/parando, documento, erro e mensagens
recebidas/enviadas. Os arquivos vieram dos áudios aprovados para o episódio.

### Parte 9: jornada da marca real

`jornada-marca-data.json` preserva as nove perguntas, opções e prompts fornecidos na especificação de 09/09/2026. O modelo acrescenta apenas escolha, contexto, continuidade, nome do negócio, agente escolhido, entradas pendentes e o contrato da pasta. Não inclui caminhos pessoais ou comandos de instalação inventados. As referências distribuídas abrem o catálogo existente; procedimentos pessoais ficam condicionados à disponibilidade e à adaptação no agente.

A parte 9 conserva estado em `agentflix-brand-journey-v1` no localStorage, separado por negócio; as oito simulações anteriores conservam seu comportamento de visita. O aluno declara conversa, revisão, critério e salvamento. A página não executa skills, não lê a conversa externa e não verifica arquivos ou acesso ao Drive. O progresso de navegação não conclui uma etapa.

Mudanças invalidam as confirmações das entregas dependentes e preservam os registros anteriores. A conclusão exige nove etapas sem pendências, aplicações visuais aprovadas, estática e carrossel completos com modelos reutilizáveis, piloto revisado e pasta de Drive confirmada pelo aluno. Preparar publicação abre apenas orientação para o processo separado; não conecta nem publica.

Cópia bloqueada mantém o prompt disponível para seleção manual. Armazenamento indisponível ou inválido preserva o trabalho em memória e avisa para baixar o registro. Dados inválidos existentes não são sobrescritos. Mudanças em outra aba suspendem a gravação para evitar conflitos. O download é um registro da jornada, não os documentos externos da marca.

Testes de comportamento: `tests/brand_journey.cjs`, chamado por `tests/test_brand_journey.py`. As confirmações são autodeclaradas; o fluxo externo de cada agente/skill/Drive precisa ser testado no ambiente do aluno e não é certificado por estes testes de interface.
