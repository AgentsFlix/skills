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
