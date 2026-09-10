---
name: hybrid-icp
description: Documente o público a partir do perfil, dos relatos e das fontes disponíveis. Distinga evidência, hipótese e lacuna; entregue um ICP provisório útil sem inventar pesquisa.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/hybrid-icp
  tags: hybrid-workspace, negocio, elicitacao, yaml
  related: hybrid-diagnostico, hybrid-proxima-acao, hybrid-perfil, hybrid-fundador
  contract_version: 1.0.0
  content_revision: 1.0.2
  distribution_ref: main
---
# Público para orientar a próxima decisão

Continue o perfil do negócio e documente o público que a pessoa quer entender ou atender. Uma hipótese de público é um ponto de partida válido quando identificada como hipótese. Entregue contexto, problema, critérios relevantes, limites e plano das lacunas; pesquisa indisponível não impede registrar o que já se sabe.

## When to Use

Use quando a pessoa pedir para documentar ou revisar o público e continuar a jornada. Comece com os dados disponíveis; não existe percentual mínimo para iniciar.

## Quick Reference

Negócio/oferta, decisão de público que o pedido precisa apoiar e contexto disponível. Público não validado fica como hipótese; mercado e psicografia desconhecidos permanecem em aberto.

| Necessidade | Caminho |
|---|---|
| Entrega inicial desta jornada | Siga Procedure abaixo; não exige abrir nem copiar templates. |
| Aprofundamento explicitamente solicitado | `references/elicit-icp.md`, `references/elicit-icp-yaml.md` e o esquema ampliado, somente para investigação adicional pertinente e solicitada. |

Use o destino já autorizado pelo contexto. Configuração só é consultada quando falta um caminho real. A ausência de um YAML prévio não é um bloqueio.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Continue o perfil atual e o pedido. Leia relatos e acervo acessíveis antes de perguntar. Registre oferta, problema e público já informado; não peça novamente uma definição que já existe, mesmo que seja uma hipótese. Use a revisão atual do perfil, consultando histórico apenas quando necessário.
2. Monte uma síntese de público com: quem se quer entender/atender e seu contexto; problema ou necessidade; relação com a oferta; critérios de decisão e objeções quando houver fonte; limites e situações fora do foco. Em cada item, indique evidência, relato da pessoa, hipótese da pessoa, hipótese do agente ou desconhecido. Não deduza idade, renda, orçamento ou contagem de clientes a partir de um rótulo de público.
3. Investigue somente lacunas que mudam a próxima decisão. Com ferramenta de pesquisa disponível e autorizada, registre fonte, data e o que ela sustenta. Sem acesso ou evidência, nomeie a lacuna e um modo concreto de investigá-la depois. Cada pergunta aberta tem exemplo ligado ao contexto, sem casos/clientes/números inventados. Níveis de consciência/sofisticação e diagnosis.yaml não são pré-requisitos para esta síntese.
4. Diante de “não sei ainda”, preserve o desconhecido. Não repita a pergunta, peça um chute ou interprete silêncio como aprovação. Quando houver contexto suficiente, proponha um público provisório ou mantenha a hipótese já declarada, sem promover inferências a evidência. Aceitar o formato de uma proposta não confirma seus dados factuais.
5. Salve o ICP provisório e a síntese para posicionamento no destino local autorizado, em Markdown ou YAML. Inclua mapa de origem, hipóteses não validadas, lacunas prioritárias e próximo passo de investigação. O pedido de documentar já abrange salvar esse rascunho local; não espere uma autorização adicional. Use o esquema ampliado apenas quando solicitado, sem copiar campos vazios para simular entrega.
6. Verifique o arquivo. A operação está completed quando a entrega provisória solicitada é útil, rastreável e declara os limites, ainda que o documento permaneça parcial. Waiting só vale se faltar contexto que realmente impeça essa entrega, com o impedimento nomeado. Nenhum percentual de campos ou validação externa é exigido para declarar a síntese provisória concluída. Avalie rotina com fontes reais e respeite recusas, sem ativação implícita.

## Avaliação de rotina

Revisão pode valer com novas entrevistas, clientes ou mudança de oferta; coleta automatizada só com fontes e autorização reais.

## Pitfalls

- Transformar a lista de campos de um esquema ampliado em questionário obrigatório.
- Exigir diagnosis.yaml, níveis de mercado ou um percentual de completude para entregar uma síntese provisória.
- Pedir novamente informação atual, sugerir evidência inventada ou atribuir inferência do agente à pessoa.
- Esperar nova autorização para salvar o rascunho no destino local já autorizado.
- Confundir entrega parcial útil com pesquisa validada ou documento institucional completo.

## Verification

Existe um arquivo de público ligado ao perfil atual, com origem, hipótese e desconhecido separados. Há síntese utilizável pelo posicionamento e plano das lacunas relevantes, sem pesquisa, clientes ou psicografia fictícios tratados como fatos. Não há pergunta redundante nem bloqueio por diagnosis.yaml, percentuais ou desconhecimento já declarado quando o rascunho é possível. Confira o aceite transversal de references/contrato-agentflix.md.

## Arquivos desta skill

- `references/ativacao.md`
- `references/campos-icp.json`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/elicit-icp-yaml.md`
- `references/elicit-icp.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `templates/company-diagnosis.yaml`
- `templates/company-icp.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
