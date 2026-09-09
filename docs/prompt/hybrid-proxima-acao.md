# hybrid-proxima-acao · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.3. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `hybrid-proxima-acao.md` uma skill chamada hybrid-proxima-acao. Quando eu pedir algo como "qual a próxima ação para [negócio]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# A PRÓXIMA AÇÃO · Uma ação, um comando, nada mais

Empresário para na frente de dez gaps e vinte recomendações. Esta skill pega o diagnóstico e devolve uma única ação, a de maior alavanca, traduzida em comando executável. Se nada está abaixo do limiar, ela diz isso e recomenda um diagnóstico vertical. Uma ação por semana, e a semana anda.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "qual a próxima ação para [negócio]".
- O negócio já tem os YAMLs do perfil preenchidos e você quer medir, não preencher.
- NÃO use para preencher os arquivos: para isso são as skills `hybrid-perfil`, `hybrid-icp`, `hybrid-oferta`…

## Quick Reference

| procedimento | referência |
|---|---|
| next best action | `references/next-best-action.md` |



## Procedure

1. Localize na pasta do negócio o diagnóstico atual (`diagnose-business`) ou a lista de alavancas (`growth-levers`) já produzida. Confira negócio, fonte, data e mudanças posteriores. Reuse o contexto e a ação anterior registrada. Esta skill não calcula um novo diagnóstico nem depende de uma tabela de contexto própria.
2. Sem diagnóstico utilizável, declare a lacuna e aguarde essa entrada. Se perguntar onde está, leve exemplo baseado nos arquivos do negócio já encontrados, ou hipotético se não houver memória. Recomende obter o diagnóstico com `hybrid-diagnostico`; não presuma que ela esteja instalada.
3. Abra `references/next-best-action.md`, selecione a alavanca #1 da entrada e traduza em UMA ação concreta. Use a tabela de resolução sem inventar scores, pesos, squads ou prioridade. Se a ação anterior já foi concluída e o diagnóstico não foi renovado, peça renovação antes de repetir a indicação.
4. Entregue o formato curto da referência: score de origem, gargalo, ação e efeito esperado com evidência. Comando citado vira orientação em linguagem comum se o runtime não estiver disponível; não o declare executável sem conferir. Se todas as dimensões forem adequadas pela referência, devolva nenhuma ação urgente, com justificativa.
5. Avalie rotina: depende de diagnósticos novos e do interesse em revisão; sem mudanças, não vale repetir a mesma ação. Qualquer proposta inclui horário/fuso, fontes, destino, silêncio e pausa; autorização e agendador real são necessários para ativar.

## Pitfalls

- Diagnosticar novamente para responder a um pedido de próxima ação.
- Selecionar alavanca a partir de scores inexistentes ou de relatório de outro negócio.
- Confundir comando ilustrativo de um squad com ferramenta disponível.
- Entregar uma lista inteira quando o pedido é uma única prioridade.

## Verification

1. Existe UMA ação prioritária justificada pelos dados do diagnóstico, ou a conclusão fundamentada de nenhuma ação urgente; sem diagnóstico utilizável, o resultado é aguardando entrada.
2. A resposta cita arquivo, data e negócio da entrada. Não fabrica scores, pesos ou quantidade de squads.
3. A ação é praticável no ambiente ou apresentada como orientação, nunca como comando cuja existência não foi conferida.
4. Não há relatório multidimensional novo nem ação antiga repetida como nova sem revisar sua situação.
5. Perguntas abertas têm exemplo contextual ou fallback hipotético; avaliação de rotina inclui motivo e não ativa nada na instalação.

## Arquivos desta skill (incluídos abaixo)

- `references/next-best-action.md`


---

## Referência: references/next-best-action.md

# Task: Next Best Action

```yaml
task:
  id: next-best-action
  name: Próxima Melhor Ação
  agent: workspace-chief
  trigger: manual
  elicit: false
  commands:
    - "*next-best-action {slug}"
  depends_on:
    - diagnose-business
```

## Descrição

Task derivada que retorna UMA ÚNICA ação prioritária. Pega o output do `diagnose-business` (ou `growth-levers`) e responde: "se você só pode fazer UMA coisa agora, faça ESTA."

**Filosofia:** Empresários ficam paralisados com 10 gaps e 20 recomendações. Esta task elimina a paralisia: uma ação, um squad, um comando.

**Guardian:** COO (Chief Operating Officer)

## Workflow

### Passo 1: Identificar a Alavanca #1

Usar mesma lógica de `growth-levers`, pegar apenas a #1.

Se não há alavancas (todas dimensões >= 70):
```
"Seu negócio está em estado ADEQUADO (score {X}/100).
Nenhuma ação urgente. Recomendo *diagnose-offer ou *diagnose-funnel
para encontrar melhorias pontuais."
```

### Passo 2: Resolver para Ação Concreta

Traduzir a alavanca para ação executável:

```yaml
action_resolution:
  customer:
    if_score_below_30: "*scaffold-templates {slug} → depois *elicit-icp-yaml {slug}"
    if_score_30_to_50: "*elicit-icp-yaml {slug}"
    if_score_50_to_70: "Completar campos faltantes de icp.yaml (review manual)"

  brand:
    if_score_below_30: "*scaffold-templates {slug} → depois *elicit-brand-yaml {slug}"
    if_score_30_to_50: "*elicit-brand-yaml {slug}"
    if_score_50_to_70: "Completar brandbook.yaml (voice, positioning, visual)"

  offer:
    if_score_below_30: "*scaffold-templates {slug} → depois ativar hormozi squad"
    if_score_30_to_50: "/hormozi *audit-offer {slug}"
    if_score_50_to_70: "/hormozi *value-equation {slug}"

  narrative:
    if_score_below_30: "Preencher founder-dna.yaml primeiro (*elicit-founder-dna)"
    if_score_30_to_50: "/storytelling *brandscript {slug}"
    if_score_50_to_70: "/storytelling *pitch-narrative {slug}"

  traffic:
    if_score_below_30: "Resolver Customer e Offer primeiro (pré-requisitos)"
    if_score_30_to_50: "/traffic-masters *funnel-audit"
    if_score_50_to_70: "/traffic-masters *campaign-brief"

  operations:
    if_score_below_30: "*elicit-team-structure {slug}"
    if_score_30_to_50: "*elicit-operations {slug}"
    if_score_50_to_70: "@sop-chief *create-sop-operations-suite {slug}"

  success:
    if_score_below_30: "Preencher curriculum.yaml primeiro"
    if_score_30_to_50: "Desenhar onboarding-flow.yaml"
    if_score_50_to_70: "Criar churn-prevention.yaml"

  evidence:
    if_score_below_30: "/deep-research *evidence-audit {slug}"
    if_score_30_to_50: "Completar proof.yaml com números verificáveis"
    if_score_50_to_70: "Completar credentials.yaml"

  movement:
    if_score_below_30: "/movement *intake {slug}"
    if_score_30_to_50: "/movement *foundation {slug}"
    if_score_50_to_70: "/movement *cycle-strategy {slug}"

  culture:
    if_score_below_30: "*elicit-culture {slug} --quick"
    if_score_30_to_50: "*elicit-culture {slug}"
    if_score_50_to_70: "Completar hiring-criteria e decision-frameworks"
```

### Passo 3: Output

Formato curto, direto, sem ambiguidade:

```markdown
## Próxima Melhor Ação: {business_name}

**Score Global:** {score}/100
**Gargalo principal:** {dimensão} ({score_dimensão}/100)
**Impacto:** Resolver desbloqueia {N} squads ({lista})

### Faça AGORA:

```
{comando exato}
```

**O que isso resolve:**
{1 frase explicando o efeito}

**Depois disso, rode:**
`*diagnose-business {slug}` para ver o novo score.
```

## Validação

- [ ] Apenas UMA ação retornada
- [ ] Comando é válido e executável
- [ ] Justificativa baseada em dados do diagnóstico
- [ ] Formato curto e direto

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
*Versão: 1.0.0*
