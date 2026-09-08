# Navegação e medição após a revisão do Clarity

Pedido do Zé em 08/09/2026: corrigir os problemas identificados nas gravações. Base das capturas antes: main, eda08c9 (PR #48). Menu Ler e leitor Hormozi preservados.

A etapa visual do onboarding foi revisada depois destas capturas: ver [onboarding dedicado](../cinematic-onboarding/README.md) para a versão atual. Durante as perguntas, os atalhos do catálogo ficam ocultos.

## Comportamento para revisar

- Início, marca e Meu caminho voltam à recomendação ou à pergunta atual sem apagar escolhas, inclusive depois de acessar Ler. A conclusão de uma primeira visita abre o Início mesmo quando a entrada veio de um link de leitura ou skill.
- Refazer minhas escolhas é a ação explícita de reinício. O catálogo fica bloqueado até concluir novamente.
- Respostas e conclusão permanecem no sessionStorage da aba. Recarregar ou ir ao player e voltar restaura o percurso; uma aba sem estado começa pelo onboarding.
- Estado salvo é validado contra as perguntas atuais. Instalação manual e dependências permanecem independentes.
- Cópia recusada pelo navegador não mostra sucesso, não marca a etapa do player e não retoma o vídeo.

## Capturas

| Largura | Entrada antes | Entrada depois | Seleção antes | Seleção depois | Hover depois |
|---|---|---|---|---|---|
| 1440 | [antes](1440-before-entry.png) | [depois](1440-after-entry.png) | [antes](1440-before-selection.png) | [depois](1440-after-selection.png) | [hover](1440-after-hover.png) |
| 768 | [antes](768-before-entry.png) | [depois](768-after-entry.png) | [antes](768-before-selection.png) | [depois](768-after-selection.png) | [hover](768-after-hover.png) |
| 390 | [antes](390-before-entry.png) | [depois](390-after-entry.png) | [antes](390-before-selection.png) | [depois](390-after-selection.png) | [hover com mouse](390-after-hover.png) |

Capas externas podem usar o fallback existente quando a rede não entrega a imagem. Nenhuma capa, sinopse ou comando foi alterado. A principal diferença é o comportamento, verificado pelo roteiro do repositório privado `ferramentas/qa-player/qa-clarity-navigation.cjs`.

## Clarity

`site/analytics.js` centraliza a carga nas duas páginas. Produção: agentsflix.ai e www.agentsflix.ai. Previews e localhost não carregam o SDK. QA em produção: abrir `?qa=1` uma vez nesse navegador; `?qa=0` reativa. A preferência vale também no player. Se o armazenamento estiver indisponível, o parâmetro só garante exclusão na página atual.

A tag `versao_interface=2026-09-08-navigation-v1` separa a nova instrumentação. Atualizar em futuras revisões que alterem o funil. `ambiente=producao` identifica a origem. Consentimento de cookies continua separado da coleta sem cookies. Falha no carregamento da medição não impede usar a interface.

Eventos novos:

| Etapa | Evento |
|---|---|
| Entrada nas escolhas | onboarding_exibido |
| Escolha de uma porta | onboarding_iniciado |
| Resposta, com ID da pergunta e índice da opção | onboarding_resposta |
| Resultado do guia | recomendacao_exibida |
| Clique em Abrir minha seleção | onboarding_concluido |
| Retorno com respostas salvas | caminho_restaurado |
| Consulta pelo menu | caminho_consultado |
| Reinício explícito | onboarding_reiniciado |
| Abertura pela recomendação | recomendacao_aberta |
| Ficha acessível / bloqueada | ficha_liberada / pre_requisito_bloqueado |
| Encaminhamento para dependência | pre_requisito_encaminhado |
| Confirmação manual | instalacao_marcada / instalacao_desmarcada |
| Clipboard | copia_tentada / copia_falhou |
| Sucesso de cópia | copiou_comando, copiou_texto ou prompt_copiado, conforme o conteúdo |
| Botão da abertura | abertura_iniciada |

`abriu_card` permanece para compatibilidade e inclui bloqueios; usar `ficha_liberada` quando a métrica pede conteúdo acessível. `copiou_comando` antes desta versão registrava tentativa e links; comparar somente a nova versão para medir sucesso de instalação copiada. Os tags do Clarity são da sessão, não propriedades exclusivas de um evento; não inferir conversão de uma skill só a partir da presença de tags acumulados.

O evento automático Fazer logon foi ocultado no painel autenticado e a persistência da configuração foi conferida. O botão Entrar da abertura não autentica uma conta.

Depois do deploy e da primeira coleta real dos novos eventos, criar no painel o funil `onboarding_iniciado → onboarding_concluido → recomendacao_aberta → ficha_liberada → copiou_comando`, filtrado por domínio/versão. Não usar caminhos restaurados como novas conclusões. O painel só oferecia os eventos já recebidos; nenhum funil incompleto foi salvo. Não gerar sessões artificiais em produção para preencher essa lista.

Revisão visual do Zé antes do merge, conforme AGENTS.md. Merge publica produção.
