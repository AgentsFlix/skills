> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Ambiente e JevCloud

Use esta referência antes da primeira etapa executável ou para diagnosticar falhas de configuração.
O onboarding é compartilhado pelos quatro módulos. Cada pessoa usa sua própria conta JevCloud.

## Verificar antes de instalar

Execute a partir da pasta instalada:

```sh
python3 scripts/setup.py doctor
```

Confirme terminal, Python 3.10+, rede e armazenamento privado. `yt-dlp` é necessário para coletar do YouTube;
o cliente JevCloud usa a biblioteca padrão do Python. PyYAML atende ao runtime opcional de registro/auditoria
AgentFlix. Se `package_complete` for falso, instale a distribuição completa da referência fixada; ler somente
`SKILL.md` não transfere os scripts e módulos. `jev_client.py` já vem em
`modules/jev-operar/scripts/jev_client.py`.

Quando a coleta exigir `yt-dlp` e `doctor` indicar `yt_dlp_available: false`, instale as dependências declaradas
em um ambiente isolado fora da pasta da skill:

```sh
python3 scripts/setup.py install-deps --execute
python3 scripts/setup.py doctor
```

O coletor localiza automaticamente o `yt-dlp` desse ambiente; nenhum `source`, ajuste persistente de `PATH`
ou instalação no Python global é necessário. O ambiente fica em
`$XDG_DATA_HOME/agentflix/venvs/pesquisa-audiencia-jev` ou, sem XDG, em
`~/.local/share/agentflix/venvs/pesquisa-audiencia-jev`. Verifique a versão efetivamente instalada. Não invente
um pin de dependência nem substitua o Python global. Se a etapa não usa uma dependência, sua ausência não bloqueia
as demais. Instalar o pacote não comprova rede, autenticação ou sucesso da coleta.

Sem terminal/rede ou armazenamento seguro, prepare o briefing e explique qual etapa não pôde executar.
Nunca peça a chave pelo chat como alternativa.

## Localizar a configuração

O campo é `JEV_API_KEY=` em um arquivo de texto privado. Caminho padrão:

```text
~/.config/agentflix/jevcloud.env
```

Com `XDG_CONFIG_HOME` definido, o padrão é `$XDG_CONFIG_HOME/agentflix/jevcloud.env`.
`--credential` permite indicar outro arquivo de credencial em cada comando. O argumento contém um caminho,
nunca o valor da chave. Os módulos usam a mesma resolução. Prefira arquivo fora da instalação, do repositório
e de pastas sincronizadas/compartilhadas. Não copie credenciais de outra pessoa nem use outro provedor como fallback.

## Preparar, preencher e verificar

`prepare`, `open-editor`, `probe` e `clean-backup` mostram um plano quando chamados sem `--execute`.
Os comandos abaixo incluem essa opção para realizar a ação já autorizada. Todos aceitam `--credential`
para indicar explicitamente um arquivo privado; o argumento é o caminho, nunca a chave.
Essa opção vale somente para a chamada atual. Ao usar um caminho próprio, repita `--credential` nos comandos
do cliente/seletor e do smoke para compartilhar a escolha entre os módulos.

1. Rode `python3 scripts/setup.py verify`. Se já houver uma configuração válida, reaproveite-a.
   A verificação local não autentica na API.
2. Se faltar arquivo/campo, rode `python3 scripts/setup.py prepare --execute`. O único esqueleto de credencial é:

   ```dotenv
   JEV_API_KEY=
   ```

   Em arquivo existente, preserve texto, comentários e formatação. Faça backup privado temporário antes da
   alteração e acrescente somente o campo vazio ausente, sem reserializar o arquivo. Não acrescente outro
   campo de mesmo nome se o valor estiver vazio ou malformado; abra o arquivo para correção.
3. Abra [a página de chaves JevCloud](https://console.typesafe.ai/keys) e instrua a pessoa a criar sua chave.
   Rode `python3 scripts/setup.py open-editor --execute` para abrir o arquivo privado. A pessoa cola o valor no editor
   e salva. Não solicite o valor, print ou cópia do arquivo na conversa. Se não existir editor disponível,
   indique o caminho privado e o editor/campo de segredos realmente suportado; aguarde essa etapa humana.
4. Depois do salvamento, rode `python3 scripts/setup.py verify` novamente. Verifique parse, tipo/presença e
   comprimento sem imprimir o valor. Não use `cat`, logs de request, argumentos de comando ou `source` para
   inspecionar/consumir o segredo. A verificação bem-sucedida finaliza o backup temporário criado pelo helper;
   confira que nenhuma cópia extra permaneceu. Se o procedimento foi manual, remova seu backup após validar.
5. Antes de uma execução JEV autorizada, rode `python3 scripts/setup.py probe --execute`. É um teste pequeno de rede
   com dados sintéticos. Exige credencial e pode consumir uso da conta. Preserve somente diagnóstico e recibo
   sem segredo. Sucesso prova a chamada e o contrato naquele momento; não calibra a pesquisa.

Não exponha valores de credencial em erro, URL, traceback, evidência ou resumo. Uma etapa à espera de a pessoa
salvar o arquivo permanece aguardando; prossiga apenas no trabalho que não depende dela.

## Cancelamento e diagnóstico sem alteração

Se a pessoa cancelar o preenchimento depois de o helper criar um backup, remova essa cópia extra com:

```sh
python3 scripts/setup.py clean-backup --execute
```

Use o mesmo `--credential` quando o arquivo tiver sido indicado explicitamente. O comando reconhece o backup
pelo recibo e hash, remove backup/recibo e preserva o arquivo de credencial. Ele não desfaz a inclusão do campo
vazio. Se recusar um backup desconhecido, inspecione localmente; não apague outros arquivos por tentativa.

Para um pedido somente de diagnóstico, use `doctor` e os planos sem `--execute`. `verify` é local e sem rede,
mas pode ajustar permissões e finalizar o backup; não o trate como comando estritamente de leitura.
Um ambiente sem permissão de escrita não deve receber um esqueleto nem abrir outra localização sem resolver
o destino privado. Informe a etapa não executada e continue no briefing ou na inspeção permitida.

## Responder à falha concreta

| Resultado observado | Próxima ação |
|---|---|
| Arquivo/campo ausente | Preparar esqueleto e abrir editor privado |
| Conteúdo vazio ou parse inválido | Corrigir o arquivo no editor; verificar novamente sem mostrar valores |
| Falha de autenticação/permissão | Conferir a conta/chave na console e corrigir no editor; parar chamadas dependentes |
| Limite de uso/rate limit | Preservar progresso, informar o limite observado e respeitar orientação de espera do serviço |
| Timeout, conectividade ou 5xx | Usar tentativas limitadas do cliente; manter evidência e pendências |
| Contrato/modelo incompatível | Parar a escala, conferir contrato e versão; não adaptar resultados silenciosamente |

Retries não garantem cobrança única: um timeout pode ocorrer após o provedor processar a chamada.
Não estimar preço sem dados atuais da conta/provedor nem comprar créditos como parte automática do diagnóstico.
