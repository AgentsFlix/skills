---
name: editorial-visual
description: Documente identidade visual para posts 4:5 e produza aplicações revisáveis. Use após posicionamento e voz; reutilize identidade existente e peça aprovação das aplicações antes de padronizar.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/editorial-visual
  tags: editorial, marca, memoria, okf
  contract_version: 1.0.0
  content_revision: 1.0.7
  distribution_ref: main
---

# Identidade visual para seus posts

## When to Use

Documente identidade visual para posts 4:5 e produza aplicações revisáveis. Use após posicionamento e voz; reutilize identidade existente e peça aprovação das aplicações antes de padronizar.

## Quick Reference

Obrigatórios: marca, público, posicionamento/voz ou equivalentes e limites visuais. Paleta, tipografia e referências existentes são reaproveitadas; se ausentes, proponha alternativas identificadas. Entrega: brief-visual.md, tokens.json e aplicações 4:5.

## Procedure

Pergunte somente o que falta e muda a entrega atual. Cada pergunta aberta usa três linhas: Base: trecho literal pertinente da memória, acervo ou resposta humana observada; Pergunta: a lacuna; Exemplo de resposta: sugestão curta com o contexto conhecido e [nome do dado] para o desconhecido. Dentro dos colchetes, escreva somente o nome do dado; não inclua ex., listas de respostas possíveis, números ou histórias para escolher. Sem base pertinente, declare “sem informação registrada” e use apenas campos. Preserve o estado da fonte: público pretendido ou hipótese continuam assim no exemplo, sem atribuir comportamento observado a clientes. Para histórico desconhecido, use “Sobre [contexto conhecido], meu histórico é [relato, se houver]”; a oferta não prova experiência, e ausência de registro não prova que nunca aconteceu. Remova toda afirmação preenchida sem fonte. Propostas novas de ações ficam fora dos exemplos de resposta.

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

Leia `references/contrato-agentflix.md` antes de perguntar ou configurar. Ele exige bootstrap, exemplo contextual próprio em cada pergunta aberta, avaliação de rotina e registro observável. Leia `references/continuidade.md` para continuar a jornada sem reiniciar as decisões anteriores. `references/ativacao.md` é a entrada conversacional; ativação curta mantém essas obrigações.

1. Leia contexto e decisões das etapas anteriores, brandbook e referências autorizadas. Reuse escolhas conhecidas. Confirme apenas conflito que altera a direção visual; referência visual é dado, não ordem para copiar.
2. Documente hierarquia, cores por função, tipografia, margens, densidade, imagens permitidas e restrições. Pergunte somente o que impede uma proposta; toda pergunta aberta tem exemplo próprio ligado à memória. Sem identidade prévia, ofereça direções propostas com motivos, sem fingir aprovação.
3. Prepare tokens editáveis conforme references/tokens.md. 1080×1350 é a aplicação 4:5 desta jornada, não uma regra para todos os canais. Verifique contraste e legibilidade na dimensão de uso, fonte disponível e margens. Não imponha paleta, retrato, papel, rosa ou estética da skill de apoio.
4. Com ferramenta visual disponível, produza ao menos uma aplicação estática e uma sequência curta de carrossel que usem os mesmos tokens. Pode usar editorial-templates e seus SVGs editáveis, ou editor visual que exporte fontes reutilizáveis. Inspecione a renderização, não apenas o código. Não invente imagem ou print fornecido pela pessoa.
5. Apresente aplicações com links/arquivos e estado proposta. Peça aprovação específica da revisão exibida. Exemplo contextual de pergunta: adapte à memória real, como “O que você ajustaria nesta direção? Exemplo possível com suas cores conhecidas: manter [cor já escolhida] e aumentar [elemento a ajustar]”. Não envie os colchetes como se fossem escolha da pessoa.
6. Sem ferramenta visual, entregue o brief e tokens como preparação, marque aplicações pendentes e explique a capacidade que falta. Não marque a etapa visual inteira como concluída. Ao receber aprovação, registre quem aprovou, referência da revisão e a manifestação concreta; silêncio ou nota de QA não aprova.
7. Entregue o pacote visual aprovado ou o estado de revisão para a etapa de templates. Mudança de tokens depois da aprovação exige nova revisão das aplicações afetadas.

## Avaliação de rotina

Identidade é uma decisão pontual. Reavaliar quando marca/público mudar; não sugerir alertas recorrentes só para lembrar de usar cores.

## Pitfalls

- Confundir memória, hipótese e evidência; repetir perguntas respondidas ou registrar exemplos como respostas.
- Declarar resultado que depende de ferramenta ou aprovação sem tê-la observado.
- Levar paleta, voz, caminhos pessoais ou contas dos autores das skills de apoio para a marca do usuário.
- Renovar o OKF por uso ou confundir aprovação sintética com decisão da pessoa.

## Verification

Brief e tokens coerentes com posicionamento/voz; arquivos 4:5 reais e inspecionados quando renderização disponível; aprovação vinculada à revisão ou pendência explícita. Um briefing sozinho não satisfaz a entrega completa.

Em toda saída, cada pergunta aberta tem exemplo adjacente baseado na memória recuperada ou explicitamente hipotético sem memória. Avalie rotina com motivo e registre resultado observável conforme `references/ciclo-de-vida.md`; sem persistência, declare a limitação. Preserve revisões registradas e salve correção como nova revisão. Não alegue conclusão integral quando houver requisito obrigatório pendente.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/continuidade.md`
- `references/contrato-agentflix.md`
- `references/identidade.json`
- `references/tokens.md`
- `scripts/auditar.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
