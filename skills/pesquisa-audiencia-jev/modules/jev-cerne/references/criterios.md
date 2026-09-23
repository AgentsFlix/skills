# Rubrica editorial inicial, versão 1

“Tenho medo do futuro” é um sentimento explícito, mas oferece pouca situação. “Desde que meu negócio fechou, deixo cada inscrição de emprego no rascunho; quero voltar a trabalhar, mas enviar parece aceitar que falhei” é um exemplo SINTÉTICO com ação, consequência e conflito. Não supor que o segundo representa a audiência sem fontes reais.

## Triagem (Noul 0–1)

- `relevant`: relação textual com o tema. Ponto de partida: ≥0,70.
- `lived`: experiência da pessoa ou de alguém próximo apresentada como relato; não atesta veracidade. ≥0,70.
- `needs_context`: depende de comentário pai ou referente ausente. ≥0,40 → revisão; completar contexto antes de pontuar.
- `exposure_review`: relato com dados identificadores remanescentes, história rara identificável, crise pessoal, violência explícita ou saúde sensível. ≥0,40 → revisão privada. Não é diagnóstico nem proibição de compreender o tema. Não usa sofrimento como vantagem editorial.

Faixa limítrofe de relevância/relato 0,40–0,70 → revisão, não exclusão silenciosa. Negativo abaixo de 0,40 pode ser excluído da seleção, mas permanece auditável. Inspecionar também negativos no piloto.

## Profundidade (cada score 0–3)

| Critério | Pergunta concreta | Peso inicial |
| --- | --- | --- |
| `specificity` | Há situação ou comportamento concreto? | 0,20 |
| `tension` | Há dois desejos ou forças em conflito no texto? | 0,25 |
| `stakes` | O comentário mostra por que aquilo importa para a pessoa? | 0,25 |
| `desired_future` | Há mudança ou futuro identificável que ela deseja? | 0,15 |
| `temporal_bridge` | O comentário liga passado, presente e futuro? | 0,10 |
| `voice` | Há formulação específica que ajuda a reconhecer a experiência? | 0,05 |

Índice de triagem = 100 × soma(peso × score/3), calculado no seletor. Não é “porcentagem de profundidade”, probabilidade de conversão nem medida psicológica. Escala de score vem da posição dos quatro critérios.

Primeiro corte: índice ≥55; specificity, tension e stakes ≥1,5. Confiança mínima inicial de 0,25 nesses três scores para inclusão automática; abaixo vai para revisão, pois um score alto com distribuição ambígua não é evidência forte. Pesos, limiares e confiança precisam ser ajustados pelo piloto e guardados em `policy.json`. Revisão pode recuperar comentários curtos excelentes que uma regra descartou.

`core` é uma Choice do núcleo predominante com opção `none`; `agency` é uma Choice da posição descrita, com `unknown`. Não são múltiplos rótulos sobrepostos. Não presumir “trauma” ou “crença limitante” onde há só uma decisão ou preferência.

## Qualidade do conjunto

Ranking ajuda a localizar; a leitura escolhe. Não selecionar cinco versões do mesmo lamento. Preferir uma âncora, um desejo, um obstáculo, uma tentativa e, se houver, um contraponto. Diversificar vídeos e contextos sem forçar representatividade. A prioridade TEDx orienta descoberta; não entra no score.

## Piloto e rastreabilidade

Comparar uma amostra revisada com os julgamentos JEV por idioma, tamanho e tipo de comentário. Guardar IDs, rótulos revisados, divergência e justificativa. Teste sintético e resposta HTTP 200 não validam essa rubrica na base real. Registrar quando não houver amostra humana independente.
