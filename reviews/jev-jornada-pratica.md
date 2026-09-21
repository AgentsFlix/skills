# Laboratório JEV: jornada prática

## Entrega

Exportação autorizada de quatro arquivos da fonte Web: HTML, JavaScript e CSS do laboratório,
mais o proxy `site/api/jev.js`. Sem mudanças em loja, autenticação, catálogo, domínio ou credenciais.

- Problema concreto do Chapéu Seletor, dados editáveis e experimentação por contraste.
- Choice, Noul e Score com instruções/critérios editáveis e explicação do formato de cada dado.
- Estado/opções → distribuição do JEV → política local aceitar/revisar/escalar.
- Confidence não é probabilidade de acerto. Noul não tem confidence; usa sinal explicitamente distinto.
- Comparação de capacidades entre JEV, LLM livre, LLM com Structured Output e regra simples.
- Triagem de comentários fictícios com assunto e perguntas independentes de explicação/receio.
- Sem classificação por gabarito, respostas simuladas em produto ou moderação externa automática.

## Evidências

Capturas sem informações pessoais em `design-review/jev-jornada-pratica/`:

| Largura | Antes | Depois |
|---|---|---|
| 1440 | [Antes](../design-review/jev-jornada-pratica/before-1440.png) | [Depois](../design-review/jev-jornada-pratica/after-1440.png) |
| 768 | [Antes](../design-review/jev-jornada-pratica/before-768.png) | [Depois](../design-review/jev-jornada-pratica/after-768.png) |
| 390 | [Antes](../design-review/jev-jornada-pratica/before-390.png) | [Depois](../design-review/jev-jornada-pratica/after-390.png) |

QA Chromium nas três larguras: sem overflow horizontal ou erro JS; teclado, seleção legível,
movimento reduzido, critérios duplicados, adicionar/remover, rascunhos por tipo, loading,
falha e invalidação de resultado. Mover limiares não cria requests. Respostas antigas são descartadas.

Onze chamadas reais pelo navegador verificadas na origem: quatro personagens, alteração de estado,
pistas divididas, Noul, Score e três comentários fictícios. Os resultados não são respostas fixadas no código.
O preset de pistas divididas permite comparar a probabilidade vencedora com confidence e mover
os limiares sobre a mesma resposta. [Exemplo real](../design-review/jev-jornada-pratica/live-ambiguous.png).

Os 16 testes de contrato/política/proxy da origem passaram, assim como os checks de Web e design.
Baseline da distribuição: 147 testes (1 ignorado), site sem erros de compilação, 52 skills validadas,
scanner sem bloqueios, build sem drift em docs/catalog. Repetição após exportação e publicação
serão confirmadas no PR após execução.

## Limites

Não é benchmark de modelos nem calibração de limiares. Sem teste com leitor de tela ou aparelho
físico e sem revisão independente por IA. Comentários de exemplo são fictícios, não citações ou
estatísticas de audiência. Os limiares são didáticos; nenhuma ação ocorre fora da interface.
Merge e deploy são verificados separadamente. Este registro não presume publicação.
