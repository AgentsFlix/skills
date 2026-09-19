# Handoff para agentes sem terminal

## Resultado

A entrada pública agora declara um target `Pesquisa / sem terminal`. Nesse modo,
o agente lê o `prompt_url`, mantém `installed=false` e só executa a skill depois
de localizar `Procedure` e `Verification`. Se não puder abrir o artefato, devolve
a URL exata para handoff e para sem improvisar.

## Origem

Exportação autorizada da fonte privada `apps/web/para-agente/`, revisada antes da
distribuição. Nenhum arquivo privado, credencial ou dado pessoal foi incluído.

## Emulação

Antes da correção, uma persona Hermes sem terminal escolheu `copy-headlines`, mas
gerou hooks sem ler o artefato. Depois da correção, escolheu a mesma skill, devolveu
`https://agentsflix.github.io/skills/prompt/copy-headlines.md`, manteve
`installed=false` e parou sem gerar hooks.

A tentativa separada de fornecer um toolset web ao Hermes não respondeu por um
bloqueio no backend local de ferramentas. O domínio público continuou HTTP 200;
esse resultado não foi atribuído à página.

## Verificação

- testes do contrato público e checagem integral do site;
- sintaxe do JavaScript;
- comparação entre o prompt visível e `prompt.txt`;
- QA em 1440, 768 e 390 px, sem overflow horizontal da página;
- aba Pesquisa verificada com teclado e clique.
