# Diagnóstico ECF, primeira parte

Experiência independente em `/assistir/hermes-em-operacao/diagnostico-ecf/`, com leitura visual dos três eixos, prompt Zernio personalizado e conferência local do resumo devolvido pelo agente.

Recorte: coleta e diagnóstico. Uma coorte principal por eixo; planejamento editorial e publicação ficam para as próximas partes. O navegador não acessa Zernio e não recebe credenciais. Não há dependência de pacotes de skills em preparação.

Método: ecf-metas-v1. Pesos e normalização por metas documentadas da proposta ECF v1.0, de 10/09/2026. Ausência de dados preservada. Dados de exemplo são fictícios e identificados na interface.

Fontes de integração consultadas em 10/09/2026:
- https://docs.zernio.com/analytics/get-analytics
- https://docs.zernio.com/analytics/get-instagram-account-insights
- https://docs.zernio.com/analytics/get-instagram-follower-history
- https://docs.zernio.com/inbox/list-inbox-conversations
- https://zernio.com/openapi.yaml

Validação prevista: testes do modelo, fluxo no navegador com teclado, exemplo e relatório incompleto; QA em 1440, 768 e 390 px; checks do CI do repositório.
