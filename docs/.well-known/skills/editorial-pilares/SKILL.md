---
name: editorial-pilares
description: Defina pilares e pautas editoriais a partir do negócio, público, posicionamento e acervo. Use para planejar assuntos próprios da marca, sem adotar a voz de autores de referência.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/editorial-pilares
  tags: editorial, marca, memoria, okf
  contract_version: 1.0.0
  content_revision: 1.0.1
  distribution_ref: main
---

# Pilares e pautas da sua marca

## When to Use

Defina pilares e pautas editoriais a partir do negócio, público, posicionamento e acervo. Use para planejar assuntos próprios da marca, sem adotar a voz de autores de referência.

## Quick Reference

Obrigatórios para fechar: negócio, público prioritário e objetivo editorial. Posicionamento, voz, limites e acervo são aproveitados quando disponíveis; lacunas de evidência ficam explícitas. Entrega: pilares.md com mapa de origem e backlog de pautas.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

Leia `references/contrato-agentflix.md` antes de perguntar ou configurar. Ele exige bootstrap, exemplo contextual próprio em cada pergunta aberta, avaliação de rotina e registro observável. Leia `references/continuidade.md` para continuar a jornada sem reiniciar as decisões anteriores. `references/ativacao.md` é a entrada conversacional; ativação curta mantém essas obrigações.

1. Recupere perfil, ICP, posicionamento, voz e síntese editorial existentes. Continue suas decisões, sem reiniciar a entrevista. Não exija executar outras skills se os insumos equivalentes já existem.
2. Separe necessidades do público, conhecimento demonstrável da pessoa e objetivo editorial. Uma hipótese de público não se torna evidência porque foi repetida em outro arquivo.
3. Proponha somente os pilares necessários para cobrir esses cruzamentos. Para cada um, explicite papel, público, temas incluídos/excluídos e fundamento no contexto. Diferencie tema de formato: carrossel não é pilar.
4. Faça um backlog inicial de pautas executáveis. Cada pauta tem pilar, pergunta do público, ângulo, matéria-prima com origem, formato sugerido, objetivo e estado de evidência. Se não houver acervo, marque qual experiência ou entrevista falta em vez de fabricar caso.
5. Métodos de hybrid-marca e copy-metodo-koe são referências opcionais. Reaproveite critérios úteis, não a identidade do autor, seu estilo de vida, suas crenças ou temas preferidos. A marca da pessoa determina a voz.
6. Entregue pilares.md e pautas.md ou equivalentes na conversa, com escolhas propostas e decisões confirmadas separadas. A decisão da pessoa sobre pilares alimenta as aplicações visuais e templates.

## Avaliação de rotina

A definição inicial é pontual. Revisão pode valer quando houver novo acervo, mudança de público ou dados de desempenho; proponha revisão por esse gatilho, não produção automática sem matéria-prima.

## Pitfalls

- Confundir memória, hipótese e evidência; repetir perguntas respondidas ou registrar exemplos como respostas.
- Declarar resultado que depende de ferramenta ou aprovação sem tê-la observado.
- Levar paleta, voz, caminhos pessoais ou contas dos autores das skills de apoio para a marca do usuário.
- Renovar o OKF por uso ou confundir aprovação sintética com decisão da pessoa.

## Verification

Cada pilar tem função, fronteira e origem; cada pauta se liga a um pilar e a matéria-prima real ou lacuna marcada. Não há pauta genérica disfarçada de conhecimento do usuário nem voz de outro autor imposta.

Em toda saída, cada pergunta aberta tem exemplo adjacente baseado na memória recuperada ou explicitamente hipotético sem memória. Avalie rotina com motivo e registre resultado observável conforme `references/ciclo-de-vida.md`; sem persistência, declare a limitação. Preserve revisões registradas e salve correção como nova revisão. Não alegue conclusão integral quando houver requisito obrigatório pendente.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/continuidade.md`
- `references/contrato-agentflix.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
