# AgentsFlix/skills: contrato para agentes

Este repositório é a distribuição do AgentFlix: o que o público baixa e vê. A fonte de quase tudo aqui está no
repositório privado `AgentsFlix/agentsflix` (gerador, capas, base de conhecimento, stories, produção das séries). Se a
tarefa envolve conteúdo de skill, capa ou catálogo, o trabalho começa lá.

## O que é gerado e o que é editado aqui

| pasta | origem | editar aqui? |
|---|---|---|
| `skills/`, `catalog.json`, `docs/` | gerados pelo `build_hub.py` do repo privado | não; mude a fonte e regenere |
| `site/index.html` | vitrine (catálogo, hero, prévia, modal de skill) | sim |
| `site/assistir/` | player (`index.html`) e dados das séries (`series.json`) | sim; o `series.json` recebe episódios pela skill `stream-upload` e paradas pelos scripts de `producao/` do repo privado |
| `site/api/` | funções da loja na Vercel (Stripe e Supabase; testada e desligada) | sim, com cuidado; `apiVersion` do Stripe é fixa em `_lib.js` |
| `tests/`, `scripts/` | testes e checagens do CI | sim |

## Como publicar

1. Branch a partir de `main`, commit, push, PR. A `main` é protegida: sem push direto.
2. O check `validate` precisa passar: `python3 -m unittest`, `python3 scripts/check_site.py`, validação das skills, scanner e diff do `build_docs`. A Vercel gera um preview por PR.
3. Merge com squash. **O merge na `main` é o deploy em produção** (agentsflix.ai, Vercel, Root Directory `site`).
4. Mudança de design: capturas de antes e depois em 1440, 768 e 390 px no PR; o Zé aprova antes do merge.

## Regras

- **Design:** leia [design.md](design.md) antes de mudar a interface. Ele rege cores, proporções, onboarding obrigatório e pré-requisitos.

- **Nenhum segredo neste repositório** (push protection ligada). Credenciais moram fora, e o repo privado diz onde.
- **A marca se escreve AgentFlix**, sem S. `agentsflix.ai` e a organização `AgentsFlix` levam S só pelo domínio.
- **Texto aprovado se copia**: taglines, sinopses, gatilhos e descrições de seção não se reescrevem.
- **Comando de instalação copiado não muda um caractere** por motivo visual; **links de indicação** não se encurtam nem se alteram.
- **Player**: a parada entra no fim da deixa falada; continuar é clique explícito em terracota (ciano é ação); cada parada abre uma vez por carregamento da página. O modelo do `series.json` está descrito em `tests/test_series.py`.
- Um episódio novo só entra no `series.json` depois de conferir os quadros do vídeo em busca de senha ou chave na tela.

## Rodar local

```
python3 -m unittest && python3 scripts/check_site.py
(cd site && python3 -m http.server 8772)   # http://127.0.0.1:8772/ e /assistir/?s=hermes-agent
```
