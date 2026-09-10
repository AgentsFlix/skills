# Diagnóstico ECF, primeira parte

Experiência independente em `/assistir/hermes-em-operacao/diagnostico-ecf/`, com leitura visual dos três eixos, prompt Zernio personalizado e conferência local do resumo devolvido pelo agente.

Recorte: coleta e diagnóstico. Uma coorte principal por eixo; planejamento editorial e publicação ficam para as próximas partes. O navegador não acessa Zernio e não recebe credenciais. Não há dependência de pacotes de skills em preparação.

Método: ecf-metas-v1. Pesos e normalização por metas documentadas da proposta ECF v1.0, de 10/09/2026. Ausência de dados preservada. Dados de exemplo são fictícios e identificados na interface.

Fontes de integração consultadas em 10/09/2026:
- https://docs.zernio.com/analytics/get-analytics
- https://docs.zernio.com/analytics/get-instagram-account-insights
- https://docs.zernio.com/analytics/get-instagram-follower-history
- https://zernio.com/openapi.yaml

Validação prevista: testes do modelo, fluxo no navegador com teclado, exemplo e relatório incompleto; QA em 1440, 768 e 390 px; checks do CI do repositório.

## Contrato e operação

`model.js` define a versão, o resumo vazio, a validação e o cálculo; `ecf.js` preenche o contexto e o contrato JSON no prompt antes de copiar ou baixar. `prompt.md` é a fonte do roteiro e contém dois marcadores internos, substituídos na experiência. Use o botão da página para obter o prompt completo.

O diagnóstico não armazena dados em localStorage/sessionStorage, não consulta APIs sociais e não envia o resumo para um servidor. As notas são calculadas a partir de um resumo declarado pelo agente; a autenticidade das fontes deve ser conferida na conversa. Cada eixo usa uma coorte principal, com IDs únicos, alcance compatível, evidências e metas fixadas antes do ciclo. Dados desconhecidos ficam pendentes.

Testes: `python3 -m unittest discover -s tests -p test_ecf_diagnostic.py`; sintaxe dos dois scripts com `node --check`; CI completo e QA do navegador. Evidências em `design-review/diagnostico-ecf/`.
