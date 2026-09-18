# Task: Elicit Culture

```yaml
task:
  id: elicit-culture
  name: Elicitação da Cultura Organizacional
  agent: workspace-chief
  elicit: true
  output_format: yaml
  target_templates:
    - culture/manifesto.yaml
    - culture/mission-vision-positioning.yaml
    - culture/pillars.yaml
    - culture/values.yaml
    - culture/commandments.yaml
    - culture/mantras.yaml
    - culture/decision-frameworks.yaml
    - culture/leadership-profile.yaml
    - culture/hiring-criteria.yaml
    - culture/lifestyle.yaml
    - culture/company-history.yaml
```

## Descrição

O COO conduz elicitação estruturada para popular o domínio `culture/` completo de um business. Cultura organizacional é o que define como a empresa opera por dentro: crenças, valores, regras, rituais, critérios de contratação e demissão, perfil de liderança e identidade tribal.

Este é um domínio distinto de brand (externo, para o mercado). Culture é interno: para quem faz parte.

**Gold standard:** `{pasta}/culture/` (11/11 COMPLETE)

## Prerequisites

- Bootstrap executado (`{pasta}/user.yaml` existe)
- Negócio criado (`{pasta}/` existe)
- Templates scaffolded (`*scaffold-templates` executado, inclui `culture/`)
- Recomendado: `company/company-profile.yaml` já preenchido (dados de missão/visão são input)

## Usage

```
*elicit-culture {slug}              # Elicitação completa (11 templates)
*elicit-culture {slug} --quick      # Apenas fundacionais (manifesto, mvp, pillars, values)
*elicit-culture {slug} --resume     # Continuar de onde parou
```

## Workflow

### Fase 0: Contexto e Detecção de Modo

1. Ler `{pasta}/culture/` recursivamente:
   - **Se diretório não existe:** Abortar com: "Templates de cultura não encontrados. Execute `*scaffold-templates {slug}` primeiro."
   - **Se existem arquivos com status COMPLETE:** Apresentar resumo, perguntar se quer atualizar.
   - **Se template vazio:** Prosseguir com elicitação completa.
2. Ler fontes complementares (se existirem):
   - `company/company-profile.yaml` → pré-popular mission/vision/values
   - `company/founder-dna.yaml` → pré-popular história do founder
   - `brand/brandbook.yaml` → pré-popular posicionamento e voz
3. Definir modo: `CREATE` (templates vazios) ou `UPDATE` (campos parciais).
4. Informar ao usuário:
   ```
   Cultura Organizacional para: {slug}
   Modo: {CREATE|UPDATE}
   Fontes encontradas: {lista}
   Templates: {X}/11 preenchidos

   Vou guiar você por 8 fases de elicitação.
   Tempo estimado: 30-45 minutos.
   ```

### Fase 1: Manifesto e Crença Central (4 perguntas)

**Output:** `culture/manifesto.yaml`

```yaml
elicitation:
  phase: 1
  name: "Manifesto e Crença Central"
  questions:
    - id: core_belief
      text: >
        Qual é a crença central da sua empresa? O que vocês acreditam que o mercado inteiro
        está fazendo errado? Essa crença é a semente de tudo. Não é um texto bonito pra colocar
        no site. É a convicção que a empresa defende com tanta força que está disposta a perder
        seguidores por ela.
      required: true
      maps_to: core_belief
      hint: "Ex: 'Por 200 mil anos, fomos reféns da biologia. Está na hora de transcender.'"

    - id: tribal_name
      text: >
        Como você chama as pessoas que fazem parte do seu movimento?
        Toda marca que vira movimento tem um nome para sua tribo.
      required: true
      maps_to: tribal_call.tribal_name
      hint: "Ex: 'Lendários', 'Builders', 'Orquestradores'"

    - id: cultural_enemy
      text: >
        Qual é o antagonista da sua cultura? Não é um concorrente, é uma força,
        um modo de pensar, uma prática que prejudica as pessoas que você serve.
        Como esse inimigo aparece no dia a dia da empresa?
      required: true
      maps_to: cultural_antagonism
      hint: "Ex: 'Mediocridade e passividade. Aparece como: aceitar tradições sem questionar, consumir sem agir'"

    - id: manifesto_text
      text: >
        Você tem um manifesto escrito? Se sim, cole aqui. Se não, vamos construir juntos
        a partir da crença central, do antagonismo e da identidade tribal que você acabou de definir.
      required: false
      maps_to: manifesto_text
```

**Após respostas:** Gerar `culture/manifesto.yaml`. Se manifesto_text não foi fornecido, sintetizar a partir das 3 respostas anteriores.

### Fase 2: Missão, Visão e Posicionamento (3 perguntas)

**Output:** `culture/mission-vision-positioning.yaml`

```yaml
elicitation:
  phase: 2
  name: "Missão, Visão e Posicionamento"
  pre_populate_from:
    - company/company-profile.yaml → mission, vision, positioning
  questions:
    - id: mission
      text: >
        Em uma frase: por que essa empresa existe além de gerar lucro?
        Quem se beneficia e qual transformação vocês causam?
      required: true
      maps_to: mission.statement
      hint: "Ex: 'Unir e potencializar pessoas lendárias com IA para construírem soluções que beneficiem a humanidade.'"

    - id: vision
      text: "Onde vocês querem estar em 5-10 anos? Qual é a visão de futuro?"
      required: true
      maps_to: vision.statement

    - id: positioning
      text: "Como o mercado vê vocês? Complete: 'Somos um(a) _____ que _____'"
      required: true
      maps_to: positioning.statement
```

**Se company-profile.yaml já tem esses dados:** Apresentar ao usuário para confirmar ou refinar, em vez de perguntar do zero.

### Fase 3: Pilares Culturais (3 perguntas)

**Output:** `culture/pillars.yaml`

```yaml
elicitation:
  phase: 3
  name: "Pilares Culturais"
  questions:
    - id: pillars_count
      text: >
        Quantos pilares sustentam a cultura da empresa? (recomendado: 3-5)
        Pilares são os fundamentos que sustentam tudo: valores, decisões, contratações.
        Se um pilar for removido, a cultura desmorona.
      required: true
      maps_to: pillars_count

    - id: pillars_detail
      text: >
        Para cada pilar, descreva:
        1. Nome do pilar
        2. O que significa (2-3 frases)
        3. Por que é fundamental
        4. Como aparece no dia a dia
      required: true
      maps_to: pillars

    - id: unifying_statement
      text: >
        Qual é a frase que conecta todos os pilares?
        Se alguém faltar um desses pilares, o que acontece?
      required: false
      maps_to: unifying_statement
```

### Fase 4: Valores Operacionais (2 perguntas iterativas)

**Output:** `culture/values.yaml`

```yaml
elicitation:
  phase: 4
  name: "Valores Operacionais"
  pre_populate_from:
    - company/company-profile.yaml → values
  questions:
    - id: values_list
      text: >
        Quais são os valores operacionais da empresa? (recomendado: 5-9)
        Para cada valor, diga:
        1. Nome do valor
        2. Definição (2-3 frases do que significa na prática)
        3. Uma citação que ancora o valor (opcional)
        4. 2-3 perguntas-guia que ajudam a aplicar no dia a dia
        5. Referências (livros, podcasts) que aprofundam o valor (opcional)
      required: true
      maps_to: values

    - id: values_closing
      text: "Qual é a frase de fechamento que resume todos os valores?"
      required: false
      maps_to: closing_statement
```

### Fase 5: Mandamentos e Mantras (3 perguntas)

**Outputs:** `culture/commandments.yaml`, `culture/mantras.yaml`

```yaml
elicitation:
  phase: 5
  name: "Mandamentos e Mantras"
  questions:
    - id: commandments
      text: >
        Quais são as regras inegociáveis da cultura? (recomendado: 5-12)
        Mandamentos são mais rígidos que valores. São regras que não mudam
        independente do contexto. Dê um título curto e uma frase de descrição para cada.
      required: true
      maps_to: commandments

    - id: mantras
      text: >
        Quais são as frases curtas que o time repete no dia a dia?
        Mantras condensam cultura em linguagem tribal. Frases que qualquer membro
        reconhece e usa. Para cada mantra, diga em que contexto ele é invocado.
      required: true
      maps_to: mantras

    - id: guiding_principle
      text: >
        Existe um princípio orientador geral? Uma pergunta que qualquer pessoa
        pode se fazer antes de tomar uma decisão?
      required: false
      maps_to: guiding_principle
      hint: "Ex: 'Se sua decisão fosse amplificada e adotada por todos, ela elevaria a empresa?'"
```

### Fase 6: Liderança e Time (4 perguntas)

**Output:** `culture/leadership-profile.yaml`

```yaml
elicitation:
  phase: 6
  name: "Liderança e Time"
  questions:
    - id: leadership_philosophy
      text: "Qual é a filosofia de liderança da empresa? O que se espera de um líder aqui?"
      required: true
      maps_to: leadership_philosophy

    - id: leader_expectations
      text: >
        Liste as expectativas específicas para líderes na empresa.
        O que diferencia um líder aqui de um gestor comum?
        Para cada expectativa, dê um nome curto e uma descrição.
      required: true
      maps_to: leader_expectations

    - id: team_virtues
      text: >
        Quais são as virtudes que definem um membro ideal do time?
        Para cada virtude, descreva o que significa na prática.
      required: true
      maps_to: team_virtues

    - id: growth_philosophy
      text: >
        Como a empresa escala sem perder cultura?
        Quais são os princípios de crescimento?
        Como equilibram velocidade e qualidade?
      required: false
      maps_to: growth_philosophy
```

### Fase 7: Contratação e Desligamento (3 perguntas)

**Output:** `culture/hiring-criteria.yaml`

```yaml
elicitation:
  phase: 7
  name: "Contratação e Desligamento"
  questions:
    - id: who_to_hire
      text: >
        Qual é o perfil cultural ideal para contratação?
        Quais são os green flags (sinais positivos) e os must-haves inegociáveis?
      required: true
      maps_to: who_to_hire

    - id: who_not_to_hire
      text: >
        Quais perfis NÃO contratar? Quais são os anti-patterns e red flags?
        Quais erros de contratação vocês já cometeram?
      required: true
      maps_to: who_not_to_hire

    - id: when_to_fire
      text: >
        Quais são os critérios para desligamento?
        Que perguntas um líder deve se fazer para avaliar se alguém deve sair?
        Como conduzir o processo?
      required: true
      maps_to: when_to_fire
```

### Fase 8: Frameworks de Decisão, Lifestyle e História (4 perguntas)

**Outputs:** `culture/decision-frameworks.yaml`, `culture/lifestyle.yaml`, `culture/company-history.yaml`

```yaml
elicitation:
  phase: 8
  name: "Frameworks, Lifestyle e História"
  questions:
    - id: decision_frameworks
      text: >
        Quais frameworks o time usa para tomar decisões?
        Ex: "Reunião = Câncer (prefira Loom)", "Mobile First", "Lei do Retorno Decrescente".
        Também: quais são os 3-5 princípios guia que norteiam todas as decisões?
      required: false
      maps_to: decision_frameworks + principles

    - id: legendary_vs_mediocre
      text: >
        Se a empresa tem um padrão de "comportamento ideal" vs "comportamento medíocre",
        descreva as dimensões. Para cada dimensão, o que é excelente e o que é inaceitável.
      required: false
      maps_to: lifestyle.legendary_vs_mediocre

    - id: symbols
      text: >
        A empresa tem símbolos culturais? (visuais, verbais, rituais, artefatos)
        Para cada símbolo, diga: o que é, o que representa, de onde veio.
        Símbolos incluem: logos, números, cores, objetos, saudações, rituais de reconhecimento.
      required: false
      maps_to: company_history.symbols_and_artifacts

    - id: company_timeline
      text: >
        Quais são os marcos mais importantes da história da empresa?
        Para cada marco: ano, o que aconteceu, por que importa.
        Inclua turning points: momentos que mudaram tudo.
      required: false
      maps_to: company_history.timeline
```

### Fase 9: Síntese e Output

1. **Processar respostas** e mapear para os 11 templates YAML.
2. **Popular cada arquivo:**
   - Campos respondidos: substituir `null` pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por arquivo: `COMPLETE` se >80% dos campos preenchidos, `PARTIAL` se 40-80%, `INCOMPLETE` se <40%.
3. **Calcular completude global:**
   ```
   Cultura Organizacional para: {slug}

   Templates:
     ✅ manifesto.yaml          — COMPLETE (100%)
     ✅ mission-vision.yaml     — COMPLETE (100%)
     ✅ pillars.yaml            — COMPLETE (100%)
     ✅ values.yaml             — COMPLETE (100%)
     ✅ commandments.yaml       — COMPLETE (100%)
     ✅ mantras.yaml            — COMPLETE (100%)
     ⚠️ decision-frameworks.yaml — PARTIAL (60%)
     ✅ leadership-profile.yaml — COMPLETE (95%)
     ✅ hiring-criteria.yaml    — COMPLETE (90%)
     ⚠️ lifestyle.yaml          — PARTIAL (50%)
     ⚠️ company-history.yaml    — PARTIAL (40%)

   Completude global: 85% (9/11 COMPLETE)
   Gate: PASSED ✅ (>= 70% global, fundacionais 100%)
   ```
4. **Salvar** todos os arquivos em `{pasta}/culture/`.

## Gate de Qualidade

| Critério | Mínimo | Ideal |
|----------|--------|-------|
| Completude global | >= 70% | >= 90% |
| Fundacionais (manifesto, mvp, pillars, values) | 100% obrigatório | 100% |
| Mandamentos + Mantras | >= 80% | 100% |
| Leadership + Hiring | >= 60% | >= 90% |
| Decision + Lifestyle + History | >= 40% | >= 80% |

## Modo --quick

Executa apenas Fases 1-4 (Manifesto, MVP, Pilares, Valores). Gera 4 arquivos COMPLETE. Suficiente para desbloquear diagnóstico de Culture >= 50.

## Modo --resume

Lê status de cada arquivo em `culture/`. Pula fases cujos outputs já estão COMPLETE. Apresenta resumo do que falta e continua de onde parou.

## Convenções de Output YAML

- Campos respondidos: substituir `null` pelo valor real
- Campos não respondidos: definir como `null`
- Status por arquivo: COMPLETE / PARTIAL / INCOMPLETE
- Metadata: atualizar `last_updated`, `status`, `source: "elicitation"`
- Preservar `cross_references` do template original

## Validation

- [ ] Pelo menos manifesto, mvp, pillars e values estão COMPLETE
- [ ] Todos os YAMLs gerados são válidos (parseáveis)
- [ ] Estrutura idêntica ao template source
- [ ] Metadata atualizado com data e status
- [ ] Arquivos salvos em `{pasta}/culture/`
- [ ] Se company-profile.yaml existia, dados foram usados como input

## Next Steps

Após elicit-culture:
1. `*diagnose-business {slug}` — Agora inclui dimensão Culture na avaliação
2. `*elicit-company-profile {slug}` — Se ainda não preenchido
3. Pipeline completo: `*setup-business-profile {slug}`

---

*Task do Squad Hybrid Workspace - COO Orchestrator*
*Gold standard: {pasta}/culture/ (11/11 COMPLETE)*
