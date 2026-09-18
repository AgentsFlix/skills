# Descoberta pública para agentes

## Objetivo

Permitir que agentes de pesquisa, indexação e execução reconheçam a rota pública do AgentFlix sem depender de um prompt entregue previamente por uma pessoa.

## Origem e escopo

- Fonte autorizada: `AgentsFlix/agentsflix`, PR privado #116.
- Distribuição pública: `AgentsFlix/skills`, PR #106.
- Exportação pública: `site/para-agente/` e `site/llms.txt`.
- Teste local: `tests/test_para_agente.py`.
- `llms.txt` funciona somente como índice; o manifesto e o catálogo continuam sendo as fontes operacionais.

## Validação

- `python3 -m unittest tests.test_para_agente -v`: 5 testes aprovados.
- `python3 -m unittest discover -s tests -v`: 120 testes aprovados e 1 teste pulado por exigir Python 3.10+.
- `python3 scripts/check_site.py`: 0 erros.
- `python3 scripts/agent_work.py check`: branch atualizada, worktree própria e diff dentro do escopo.
- Preview Vercel conferido em Chrome real em 1440, 768 e 390 px, sem overflow horizontal e sem erros de console.
- No preview, `/llms.txt` respondeu 200 como `text/plain` e `/para-agente/manifest.json` respondeu 200 como JSON.
- Produção: a confirmar depois do merge.

## Limitações

- A publicação melhora a descoberta, mas não garante indexação, citação ou execução por agentes externos.
- Nenhum recurso privado, credencial ou instalador monolítico faz parte desta entrega.
