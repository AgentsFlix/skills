# Aprofundamento humano · exportação visual

## Objetivo

Publicar na distribuição Web a base visual aprovada por José no Paper para
`/aprofundamento-humano/`, depois da integração da fonte privada no PR
https://github.com/AgentsFlix/agentsflix/pull/222.

## Escopo

Exportação mecânica de `index.html`, `styles.css`, `assessments.js` e da
primitiva tipográfica compartilhada `design-system/primitives.css`, a partir do
merge privado `d0a814a329cc5e7aee2db3c79765b1ba5276a69d`. Os quatro arquivos
foram comparados por hash com a fonte integrada e pelo exportador autorizado.
Sem alterar arte, copy, perguntas, pontuação ou persistência dos assessments.

## Verificação e limites

Passaram 166 testes do repositório público (um skip previsto), os 14 testes
específicos de assessments e a verificação `check_site.py` (zero erros).
QA em navegador real com viewports 1440/768/390: sem overflow horizontal;
rótulos Archivo 600/14, CTA Archivo 700/14, legenda 14 px, centro DISC alinhado
e Big Five com altura de 44 px em uma linha. Capturas antes e depois estão em
[`evidence/`](padronizar-aprofundamento-export/evidence/) para as três larguras.

Pendente: integração do PR público e confirmação do deploy em `agentsflix.ai`.
O aceite cobre a base visual editável; conclusão de todos os assessments,
integração externa e acessibilidade integral não estão homologadas aqui.
