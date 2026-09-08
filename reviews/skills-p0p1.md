# Pilotos de memória, OKF e uso auditável

Edição de teste na branch `codex/habitos-que-cabem`, contrato 1.0.0 e revisão de conteúdo 1.1.0. Ainda não é uma nova release nem uma migração de todo o catálogo.

| Skill | Prompt conversacional |
|---|---|
| Hábitos que Cabem na Vida | [Abrir](../skills/habitos-que-cabem/references/ativacao.md) |
| copy-headlines | [Abrir](../skills/copy-headlines/references/ativacao.md) |
| hybrid-icp | [Abrir](../skills/hybrid-icp/references/ativacao.md) |
| ads-otimizar | [Abrir](../skills/ads-otimizar/references/ativacao.md) |
| ops-revisao-semanal | [Abrir](../skills/ops-revisao-semanal/references/ativacao.md) |

Copie o prompt da skill para seu agente. Ele deve consultar o contexto acessível, aproveitar inputs atuais e perguntar só pelas lacunas. Toda pergunta aberta deve vir com um exemplo baseado no contexto encontrado, ou um exemplo hipotético identificado quando não houver memória. Instalar não autoriza agendamento.

Cada pacote leva contrato, identidade, conhecimento OKF, ciclo de vida, modelos privados e auditor opcional. Os [ZIPs desta edição](../docs/packages/) contêm os mesmos arquivos da distribuição portable; os prompts usam a mesma referência. Não misture com ZIPs da release antiga durante o teste.

## O que mudou

O instalador não força um questionário antes do bootstrap. Configuração fica disponível ao agente como referência, com defaults identificados como exemplos. O motor de anúncios grava recomendações separadas de decisões humanas, e a agenda fixa saiu do blueprint. O título editorial não configura frequência ou horário.

O ICP não preenche respostas booleanas por default. Seu template expandido tem 95 campos de conteúdo, listados em references/campos-icp.json, usados como denominador verificável. O rótulo editorial original de 47 campos ainda precisa de revisão humana.

As correções de hybrid-oferta separam criar offerbook, pricing e diagnóstico. hybrid-etl declara templates e mapa de fontes externos; hybrid-proxima-acao usa um diagnóstico atual para devolver uma ação; sop-auditar permite concluir uma auditoria cujo SOP foi reprovado.

## O que a validação comprova

Testes executam o runtime e o motor com dados sintéticos, bloqueiam rede no cenário de anúncios e comparam identidade, versões e conteúdo entre pacote, portable, ZIP, catálogo e colável. Não há teste contra conta real. Simulações conversacionais foram revisadas pelo agente autor, sem avaliador independente. Isso não garante aderência de todo modelo/hospedeiro às instruções.

OKF permanece draft, sem revisão editorial alegada. Uso não renova validade. Registros ficam privados fora do pacote e dos repositórios. Sem observação contínua, não afirmar ausência de uso. Sem agendador autorizado, não prometer alertas. As 47 skills legadas restantes ainda aguardam migração completa; quatro delas receberam somente as correções de procedimento desta rodada.

## Resultado técnico desta rodada

Depois de integrar a main atual, 52 testes passaram; o validador aceitou 52 pacotes e o scanner Hermes bloqueou zero. O build foi repetido sem mudar os 1.308 arquivos de skills, docs e portable, incluindo ZIPs. Os 51 cards e seus textos editoriais foram comparados com a base e preservados. Nenhum dado pessoal foi usado nos testes.

O quick_validate local do skill-creator recusou o campo compatibility, já usado pelo projeto. Esse campo é aceito pela [especificação Agent Skills](https://agentskills.io/specification); foi preservado e validado pelas checagens do repositório. Isso é uma divergência do validador local, não aprovação de instalação em todos os hospedeiros.
