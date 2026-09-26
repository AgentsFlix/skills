# Contrato de transferência para agente pessoal

Todos os resultados usam `AgentFlixAgentPrompt` e o modal único
`AgentFlixAgentPromptUI`. A geração é local; não chama modelos, salva memória externa
nem cria agendamentos. Copiar ou baixar não confirma nenhuma dessas ações.

## Novo assessment

Um assessment cadastrado em `assessments-data.js` e suportado pelo motor existente
ganha o prompt automaticamente. Declare `id`, `title`, `version`, `metric`, `note`,
`sources` e dimensões com interpretação, prática e pergunta de reflexão.

Um novo motor fornece um descritor com `id`, `title`, `version`, `metric`,
`limitations`, `sources`, `summary`, `code` opcional e `dimensions`. Cada dimensão
informa `key`, `label`, `raw`, `maximum`, `value`, `unit`, `interpretation` e
orientações pertinentes. Nunca rotule percentil sem norma populacional. As unidades
atuais são `percent_of_total_points`, `percent_of_dimension_maximum` e
`independent_scale_0_100`. DISC possui um adaptador próprio, sem alterar seu cálculo.

Na conclusão, chame `ensure(state, descriptor, answers, true)`, persista o estado,
renderize o resultado e abra o modal com o botão de retorno de foco. Na restauração,
chame sem `true`: resultado antigo sem data fica explicitamente desconhecido.
Não capture a data na ação de copiar. Respostas iguais mantêm o registro; respostas
revisadas recebem outro ID e relação `supersedes`. O fingerprint permanece local,
nunca entra na nota exportada. Não enviar respostas individuais no prompt.

## OKF e histórico

O perfil local `agentflix-assessment-okf/1.0.0` usa Markdown e frontmatter YAML com
type, title, description, tags, status, created, updated, sources, confidence,
stale_after, verified e relations. Campos adicionais registram ID, data de conclusão,
data de registro, fuso, versão do instrumento, evidência e revisão.
`confidence: low` refere-se às inferências pessoais e `verified: null` evita fingir
validação independente. Fontes metodológicas não são certificação do indivíduo.

Revisão: data civil da conclusão + 30 dias, às 09:00 no fuso capturado, a confirmar
pelo agente receptor. Sem data, sem agendador ou com prazo vencido, o prompt explicita
a alternativa. Cron recorrente exige guard de data/ano e encerramento após aviso.
Reimportar não renova a validade; o receptor deve deduplicar por ID, preservar versões
e verificar gravação/agendamento antes de relatar sucesso. O navegador mantém as respostas somente na aba. Resultados concluídos com login
são salvos em `assessment_results`, vinculados a `auth.uid()`, com histórico privado.
Resultados anônimos/legados exigem a ação explícita de salvar na conta. Somente o
registro portátil é persistido: respostas e fingerprint ficam fora do banco. Reabrir
o histórico preserva ID, versão, escores e datas; o dono pode excluir um resultado.

## Interface e verificação

O modal usa tokens compartilhados, ícones `af-icon`, dialog nativo, Escape, foco
contido/restaurado, ações fixas e conteúdo rolável. O textarea é somente leitura;
falha no clipboard seleciona o texto. O download entrega os mesmos bytes UTF-8 em .md.

Checks: `python3 -m unittest tests.test_web_assessments -v` e
`ferramentas/qa-web/aprofundamento-visual-prototipo/agent-prompt.cjs` com Playwright.
Antes de promover, inspecionar 1440/768/390 px, conclusão e restauração dos seis
assessments, cópia, download, fallback, teclado e datas desconhecidas.
