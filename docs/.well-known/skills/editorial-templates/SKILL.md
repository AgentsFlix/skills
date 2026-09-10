---
name: editorial-templates
description: Crie estáticas e carrosséis 4:5 editáveis usando a identidade da pessoa. Use para transformar a direção visual em modelos reutilizáveis e validar aplicações antes de produzir um lote.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/editorial-templates
  tags: editorial, marca, memoria, okf
  contract_version: 1.0.0
  content_revision: 1.0.0
  distribution_ref: main
---

# Templates reutilizáveis da sua marca

## When to Use

Crie estáticas e carrosséis 4:5 editáveis usando a identidade da pessoa. Use para transformar a direção visual em modelos reutilizáveis e validar aplicações antes de produzir um lote.

## Quick Reference

Obrigatórios para finalizar: tokens e aplicações visuais aprovadas, conteúdo/pauta e destino privado. Para proposta, tokens provisórios são aceitáveis se marcados. Não exigir retrato, print ou serviço visual pago. Entrega: fontes SVG, dados JSON e galeria para revisão.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

Leia `references/contrato-agentflix.md` antes de perguntar ou configurar. Ele exige bootstrap, exemplo contextual próprio em cada pergunta aberta, avaliação de rotina e registro observável. Leia `references/continuidade.md` para continuar a jornada sem reiniciar as decisões anteriores. `references/ativacao.md` é a entrada conversacional; ativação curta mantém essas obrigações.

1. Leia o contexto de posicionamento, voz, pilares e identidade. Confirme o estado de aprovação das aplicações visuais; se faltar, produza proposta revisável, sem declarar template final aprovado.
2. Escolha padrões pela matéria-prima: uma ideia simples pode ser estática; progressão ou sequência pode ser carrossel. Prints entram apenas quando existentes, autorizados e necessários; retrato ou geração de capa não são obrigatórios. Não adote as marcas de carrossel-icp, print-carousel ou epic-paper.
3. Prepare tokens.json e conteudo.json conforme references/formato.md. Inclua uma estática e carrossel com capa, desenvolvimento suficiente e fechamento adequado, sem número fixo de slides ou CTA inventado.
4. Com Python disponível, execute scripts/render.py --tokens tokens.json --content conteudo.json --output destino-novo. O helper gera SVGs 1080×1350, fontes JSON copiadas e uma galeria HTML local. Ele não usa rede, não gera imagens, não aprova a direção e não publica. Se outro editor for usado, exporte fontes editáveis equivalentes.
5. Abra a galeria/renderize os SVGs numa ferramenta disponível e confira hierarquia, cortes, sobreposição, contraste e fidelidade aos tokens. Se a ferramenta de inspeção estiver ausente, marque validação visual pendente. Um script encerrar sem erro não prova legibilidade.
6. Entregue fontes, arquivos e instrução curta de reuso, preservando uma revisão anterior ao alterar. Ligue cada peça à pauta e à revisão visual. Registre aprovação humana da revisão concreta separada do QA técnico. O lote de rotina consome só peças no estado correto.

## Avaliação de rotina

Templates iniciais são pontuais. Reuso pode participar da rotina editorial quando houver novas pautas e aprovação definida. Não criar agendamento só por instalar os templates.

## Pitfalls

- Confundir memória, hipótese e evidência; repetir perguntas respondidas ou registrar exemplos como respostas.
- Declarar resultado que depende de ferramenta ou aprovação sem tê-la observado.
- Levar paleta, voz, caminhos pessoais ou contas dos autores das skills de apoio para a marca do usuário.
- Renovar o OKF por uso ou confundir aprovação sintética com decisão da pessoa.

## Verification

Há estática e carrossel 4:5, fontes editáveis, dados de conteúdo e tokens; nenhum detalhe obrigatório depende da marca do autor da skill. Renderização e inspeção têm evidência ou pendência identificada; propostas não viram peças aprovadas por inferência.

Em toda saída, cada pergunta aberta tem exemplo adjacente baseado na memória recuperada ou explicitamente hipotético sem memória. Avalie rotina com motivo e registre resultado observável conforme `references/ciclo-de-vida.md`; sem persistência, declare a limitação. Preserve revisões registradas e salve correção como nova revisão. Não alegue conclusão integral quando houver requisito obrigatório pendente.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/continuidade.md`
- `references/contrato-agentflix.md`
- `references/formato.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `scripts/render.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
