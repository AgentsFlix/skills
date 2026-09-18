# Task: Elicit Vision

```yaml
task:
  id: elicit-vision
  name: Elicitação de Missão e Visão
  agent: vision-strategist
  elicit: true
```

## Descrição

O CEO (Vision Chief) conduz elicitação profunda para definir missão, visão e direção estratégica da empresa.

## Workflow

### Fase 1: Contexto

1. Verificar se `{pasta}/user.yaml` existe (bootstrap completo).
2. Verificar se `workspace/company/mission-vision.md` já existe:
   - **Se existe:** Ler conteúdo e apresentar ao usuário. Perguntar se deseja refinar/atualizar ou manter.
   - **Se não existe:** Prosseguir com elicitação completa.

### Fase 2: Elicitação

```yaml
elicitation:
  questions:
    - id: problem
      text: "Qual problema fundamental sua empresa resolve?"
      required: true

    - id: why
      text: "Por que sua empresa existe além de gerar lucro?"
      required: true

    - id: future
      text: "Onde você quer que a empresa esteja em 5 anos?"
      required: true

    - id: impact
      text: "Qual é o impacto que você quer causar no mundo?"
      required: true

    - id: unique
      text: "O que torna sua abordagem única?"
      required: true

    - id: values
      text: "Quais são os 3-5 valores que guiam suas decisões?"
      required: false
```

### Fase 3: Síntese

Processar respostas para gerar:
1. **Missão** (1-2 frases) - O "porquê"
2. **Visão** (1-2 frases) - O "para onde"
3. **Valores** (lista) - O "como"
4. **Direção Estratégica** (parágrafo) - O "caminho"

### Fase 4: Output

Criar `workspace/company/mission-vision.md`:

```markdown
# Missão e Visão

## Missão

{missão sintetizada}

## Visão

{visão sintetizada}

## Valores

1. {valor_1}
2. {valor_2}
3. {valor_3}

## Direção Estratégica

{narrativa de direção estratégica}

---

## Contexto da Elicitação

**Problema que resolvemos:** {problem}

**Por que existimos:** {why}

**Onde queremos chegar:** {future}

**Impacto desejado:** {impact}

**O que nos torna únicos:** {unique}

---

*Gerado via Squad Hybrid Workspace (CEO) em {date}*
```

## Validação

- [ ] Todas as perguntas obrigatórias respondidas
- [ ] Missão clara e concisa
- [ ] Visão inspiradora mas alcançável
- [ ] Valores bem definidos
- [ ] Arquivo salvo em `workspace/company/mission-vision.md`
