# hybrid-proxima-acao · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
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

1. Resolva a pasta: `hybrid.pasta`. Se não existir, crie. Confirme que os YAMLs que o diagnóstico lê existem (tabela de contexto); arquivo ausente conta como vazio e zera a variável, e isso deve aparecer no relatório.
2. Abra a referência do procedimento e siga as fases na ordem. Onde ela escrever `{pasta}/…`, leia a pasta configurada. Onde ela citar um comando `*algo` ou um script `.cjs`/`.sh`, trate como nome da etapa, não como algo a executar.
3. Leia cada arquivo da tabela de contexto e extraia os campos; pontue as categorias exatamente com os pesos da referência; não invente nota para campo ausente.
4. Escreva o relatório em `{pasta}/diagnosticos/AAAA-MM-DD-<nome>.md` no formato de saída da referência: resumo executivo, tabela por dimensão, gaps, e as alavancas em ordem.
5. Termine com a alavanca número 1 em uma frase e o comando que a destrava.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pontuar sem a tabela de pesos. A nota só vale se seguir a referência.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. O relatório existe em `{pasta}/diagnosticos/` com a data de hoje.
2. Toda dimensão da referência aparece com nota e peso, e a soma segue os pesos declarados.
3. Todo arquivo ausente da tabela de contexto está listado como ausente no relatório.
4. Há uma lista de alavancas em ordem e a primeira vem com o comando que a destrava.
5. Nenhum dado foi enviado para fora da pasta do negócio.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

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
