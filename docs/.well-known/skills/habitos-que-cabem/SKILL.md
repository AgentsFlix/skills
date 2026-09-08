---
name: habitos-que-cabem
description: Crie, registre, ajuste ou retome um hábito com base na sua rotina e na memória disponível. Entrega um plano pequeno, revisão contextualizada e avaliação de acompanhamento.
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/codex/habitos-que-cabem/skills/habitos-que-cabem
  tags: habitos, rotina, memoria, revisao, okf
  contract_version: 1.0.0
  content_revision: 1.1.0
  distribution_ref: codex/habitos-que-cabem
---

# Hábitos que Cabem na Vida

Transforme uma intenção em uma ação que cabe na rotina. Use o contexto já conhecido pela pessoa e pelo agente,
pergunte pelas lacunas e entregue um cartão do hábito. A revisão usa relatos reais; o resultado humano não é garantido.

O prompt conversacional de entrada está em `references/ativacao.md`. Ele cobre acesso/instalação, bootstrap,
elicitação e verificação; estas obrigações continuam válidas quando a skill é ativada por uma frase curta.

## When to Use

- “Quero encaixar a leitura na minha rotina”: criar.
- “Hoje fiz só o mínimo”: registrar.
- “Esse horário deixou de funcionar”: ajustar.
- “Parei e quero voltar”: retomar.
- “Revisa meus registros” ou “audita o uso desta skill”: revisar ou auditar.

Use para hábitos cotidianos. Não diagnostique condições nem altere tratamentos; adapte a proposta aos limites
informados pela pessoa. Uma auditoria técnica não exige reabrir a entrevista sobre o hábito.

## Quick Reference

| Input | Necessidade | Onde procurar primeiro |
|---|---|---|
| Intenção e comportamento | Obrigatório para criar | Pedido atual e memória relevante |
| Gatilho na rotina e limites que afetam a ação | Obrigatório para fechar o cartão | Memória, cartão existente, depois lacunas |
| Preferências e tentativas anteriores | Opcional; investigar quando muda a decisão | Memória e relatos |
| Cartão atual | Obrigatório para ajustar ou retomar um plano específico | Estado privado ou conversa |
| Relatos de prática | Obrigatório para concluir sobre execução humana | Registro privado ou relato atual |
| Preferências de acompanhamento e capacidades do ambiente | Obrigatório antes de ativar rotina | Memória, agendador disponível e autorização |

Não exigir arquivo, terminal, memória persistente ou agendador para ajudar na conversa.
Auditoria persistente usa armazenamento privado; o script opcional exige Python 3.10+ e PyYAML.
Sem armazenamento, declarar “uso não observável entre sessões” e entregar resumo reutilizável.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Identifique a operação pedida. Leia `references/conhecimento.okf.md` para versão e validade,
   e `references/ciclo-de-vida.md` para o registro operacional. Inicie o evento started no armazenamento disponível
   antes da etapa dependente de resposta; registre waiting ao perguntar. Não confundir carregar a skill com executar uma tarefa.
2. Faça bootstrap conforme `references/memoria-e-elicitacao.md`: busque somente memória relevante e o plano existente;
   mapeie valor, origem, data, estado e lacuna. Reaproveite o conhecido. Mostre uma síntese curta, sem expor o histórico inteiro.
3. Pergunte apenas o que muda a próxima decisão. **Toda pergunta aberta, em qualquer etapa, inclui um exemplo de resposta
   baseado na memória recuperada, ao lado da pergunta.** Exemplos são sugestões, não respostas confirmadas.
   Sem memória relevante, informe a ausência e use exemplo explicitamente hipotético. Incorpore respostas novas ao contexto.
4. Execute o caminho apropriado:
   - Criar: aplique `references/metodo-habitos.md` e preencha `templates/cartao-do-habito.md`, um hábito por vez.
   - Registrar: acrescente o relato em `templates/registro-de-pratica.md`, com data, origem e resultado informado.
   - Ajustar, retomar ou revisar: siga `references/revisao-e-retomada.md`. Preserve o plano anterior e explique a mudança.
   - Auditar: consulte o registro operacional e as fontes; não demande relatos de prática se a auditoria for só técnica.
5. Avalie sempre se vale rotina conforme `references/avaliacao-de-rotina.md`: vale sugerir, não vale ou depende de informação,
   com motivo. Quando positiva, apresente proposta concreta. Só ative após autorização, via agendador real do agente hospedeiro.
6. Verifique a entrega. No armazenamento privado disponível, registre eventos conforme `templates/evento-de-uso.json`
   e atualize o estado derivado. Use o script opcional conforme `references/ciclo-de-vida.md` quando houver terminal.
   Guarde apenas referências às entregas, sem copiar conteúdo pessoal para o log técnico.
7. Termine com o cartão, registro, ajuste ou relatório pedido, a próxima ação concreta e o estado real do acompanhamento.
   Sem resposta necessária, marque aguardando resposta. Sem instrumentação, informe a limitação da auditoria.

## Pitfalls

- Repetir entrevista inicial quando já existe plano; inventar memória ou tratar sugestão como preferência confirmada.
- Mandar pergunta aberta sem exemplo, inclusive durante retomada, conflitos ou proposta de rotina.
- Transformar falta de registro em falha humana. Uso da skill, entrega concluída e prática do hábito são eventos diferentes.
- Registrar verificação de conteúdo só porque a skill foi usada; alterar validade para apagar alerta.
- Contar execução do monitor como uso humano ou atualizar contadores sem evidência de eventos.
- Gravar dados pessoais dentro do pacote instalado, do GitHub ou enviar telemetria ao AgentFlix.
- Prometer lembretes sem agendador ativo; criar cobranças repetidas após recusa ou silêncio.

## Verification

A operação está concluída somente quando seu aceite específico e os itens comuns passam:

- Criar: cartão tem gatilho, ação mínima, contexto, preparação, conclusão observável, retomada e registro; preferências
  ainda propostas estão identificadas. A pessoa pode executar a próxima ação sem interpretar um objetivo abstrato.
- Registrar: há data, fonte e resultado relatado; ausência de resposta permanece desconhecida.
- Ajustar/retomar: alteração tem motivo com origem e novo próximo passo; versão anterior é preservada.
- Revisar: conclusões usam apenas os registros disponíveis, distinguem lacunas e propõem ajuste concreto quando cabível.
- Auditar: relatório identifica versão/revisão, cobertura do histórico, evidências e pendências; nenhum falso zero de uso.
- Comuns: bootstrap feito; perguntas abertas com exemplos; avaliação de rotina com motivo; resultado operacional registrado
  ou falta de persistência declarada; nenhuma autorização, resposta ou evidência inventada.

## Arquivos desta skill

- `references/ativacao.md`
- `references/avaliacao-de-rotina.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/identidade.json`
- `references/memoria-e-elicitacao.md`
- `references/metodo-habitos.md`
- `references/revisao-e-retomada.md`
- `scripts/auditar.py`
- `templates/cartao-do-habito.md`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
- `templates/registro-de-pratica.md`
