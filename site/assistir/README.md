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
2. Coloque as capas em `img/`. `cover` serve ao destaque e à ficha; `cover_wide` serve aos cards. Para o formato responsivo, use uma arte **3:2** nos dois campos e cadastre `cover_mobile` com a versão **2:3**. O navegador escolhe a vertical até 600 px e a horizontal acima disso, sem recortar ou sobrepor texto à arte. Episódios continuam em 16:9. Sem `cover_mobile`, o enquadramento anterior é preservado. Os PNGs da série Hermes são os arquivos originais fornecidos pelo Zé, sem edição.
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

## Conferir uma mudança

```sh
python3 -m unittest discover -s tests
python3 scripts/check_site.py
```

Os testes cobrem múltiplas séries, configuração editorial, retomada, escolha de caminhos, fim de série e comandos existentes. O gate de sintaxe inclui todos os módulos de Assistir.

QA em Chrome real no repositório privado:

```sh
QA_REPO=/caminho/do/skills QA_BASE=http://127.0.0.1:8794 node ferramentas/qa-player/qa-assistir-catalog.cjs
QA_BASE=http://127.0.0.1:8794 node ferramentas/qa-player/qa-player-contract.cjs
```

Capturas desta entrega: `design-review/assistir-catalog/`. Mudanças de interface passam por revisão visual antes do merge; publicar um episódio continua exigindo a conferência de dados sensíveis nos quadros do vídeo.
