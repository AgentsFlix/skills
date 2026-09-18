# Descoberta pública para agentes

## Objetivo

Permitir que agentes de pesquisa, indexação e execução reconheçam a rota pública do AgentFlix sem depender de um prompt entregue previamente por uma pessoa.

## Origem e escopo

- Fonte autorizada: `AgentsFlix/agentsflix`, PR privado #116.
- Exportação pública: `site/para-agente/` e `site/llms.txt`.
- Teste local: `tests/test_para_agente.py`.
- `llms.txt` funciona somente como índice; o manifesto e o catálogo continuam sendo as fontes operacionais.

## Validação

- A preencher após os testes, QA do preview e confirmação de produção.

## Limitações

- A publicação melhora a descoberta, mas não garante indexação, citação ou execução por agentes externos.
- Nenhum recurso privado, credencial ou instalador monolítico faz parte desta entrega.
