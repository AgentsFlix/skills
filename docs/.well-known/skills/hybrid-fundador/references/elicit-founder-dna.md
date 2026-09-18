# Task: Elicit Founder DNA (YAML)

```yaml
task:
  id: elicit-founder-dna
  name: Elicitação do DNA do Fundador (YAML)
  agent: vision-strategist
  elicit: true
  output_format: yaml
  target_template: company/founder-dna.yaml
```

## Descrição

O Vision Chief (CEO) conduz uma entrevista profunda para extrair o DNA do fundador — quem é essa pessoa, sua jornada, filosofia, estilo de comunicação e legado. O output popula o template `founder-dna.yaml`.

## Prerequisites

- Bootstrap executado
- Negócio criado e templates scaffolded
- Recomendado: `company-profile.yaml` já preenchido (para contexto)

## Usage

```
*elicit-founder-dna {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/company/founder-dna.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/company-profile.yaml` (se existir) para contexto sobre a empresa.
3. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Essência do Fundador (7 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Essência do Fundador"
  questions:
    - id: legal_name
      text: "Qual é seu nome completo (legal)?"
      required: true
      maps_to: founder_essence.legal_name

    - id: professional_name
      text: "Como você é conhecido profissionalmente? (nome que usa no marketing)"
      required: true
      maps_to: founder_essence.professional_name

    - id: age
      text: "Qual sua idade?"
      required: true
      maps_to: founder_essence.age

    - id: location
      text: "Onde você mora? (cidade, país)"
      required: true
      maps_to: founder_essence.location

    - id: nationality
      text: "Qual sua nacionalidade?"
      required: true
      maps_to: founder_essence.nationality

    - id: one_liner
      text: "Em uma frase, quem é você profissionalmente? (ex: 'Consultor de 15 anos que transformou frustração em método para escalar negócios')"
      required: true
      maps_to: founder_essence.one_liner

    - id: archetype
      text: "Se tivesse que escolher um arquétipo para se descrever, qual seria? (O Mentor, O Cientista, O Pioneiro, O Estrategista, O Construtor, outro?)"
      required: true
      maps_to: founder_essence.archetype
```

### Fase 2: Origin Story - Os 4 Atos (8 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Origin Story"
  intro: |
    Vamos reconstruir sua jornada em 4 atos. Isso não é só biografia —
    é a narrativa que conecta sua experiência com a autoridade que você tem hoje.
  questions:
    - id: act1_timeline
      text: "ATO 1 - O ANTES: Qual período da sua vida é o 'antes'? (ex: 2005-2010). O que você fazia e qual era sua situação?"
      required: true
      maps_to: origin_story.act_1_before

    - id: act1_challenge
      text: "Qual era o maior desafio ou frustração desse período? O que te incomodava profundamente?"
      required: true
      maps_to: origin_story.act_1_before.challenge

    - id: act2_turning_point
      text: "ATO 2 - O PONTO DE VIRADA: O que mudou? Qual insight, evento ou decisão marcou a transição?"
      required: true
      maps_to: origin_story.act_2_turning_point

    - id: act2_action
      text: "O que você fez de diferente depois desse insight? Que ação concreta tomou?"
      required: true
      maps_to: origin_story.act_2_turning_point.action

    - id: act3_breakthrough
      text: "ATO 3 - O BREAKTHROUGH: Quando você percebeu que tinha algo valioso que outros precisavam? Qual foi o momento de virada para expert/autoridade?"
      required: true
      maps_to: origin_story.act_3_breakthrough

    - id: act3_proof
      text: "Quais foram as primeiras provas de que seu método funcionava? (resultados, depoimentos, números)"
      required: true
      maps_to: origin_story.act_3_breakthrough.proof

    - id: act4_present
      text: "ATO 4 - O PRESENTE: Quem é você hoje? Como divide seu tempo? Qual é seu papel atual?"
      required: true
      maps_to: origin_story.act_4_present

    - id: act4_legacy
      text: "O que você está construindo para o longo prazo? Qual legado quer deixar?"
      required: false
      maps_to: origin_story.act_4_present.legacy_building
```

### Fase 3: Background Profissional (6 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Background Profissional"
  questions:
    - id: starting_point
      text: "Qual foi seu primeiro papel profissional relevante? (ano, cargo, empresa, o que aprendeu)"
      required: true
      maps_to: professional_background.starting_point

    - id: milestones
      text: "Liste os 3 marcos mais importantes da sua carreira. Para cada um: ano, evento, por que é significativo."
      required: true
      maps_to: professional_background.career_milestones

    - id: years_experience
      text: "Quantos anos de experiência no total? E como se divide? (ex: 10 em consultoria, 5 em ensino, 3 em empreendedorismo)"
      required: true
      maps_to: professional_background.years_of_experience

    - id: expertise_areas
      text: "Quais são suas 3 maiores áreas de expertise? (ex: sistemas operacionais, scaling, gestão)"
      required: true
      maps_to: professional_background.expertise_areas

    - id: deepest
      text: "Qual é seu conhecimento mais profundo — aquilo que você sabe melhor do que quase qualquer pessoa?"
      required: true
      maps_to: professional_background.deepest_expertise

    - id: credibility
      text: "Quais são suas 3-4 maiores provas de credibilidade? (resultados, números, reconhecimento)"
      required: true
      maps_to: credibility_foundation
```

### Fase 4: Filosofia e Worldview (6 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Filosofia e Worldview"
  questions:
    - id: belief_1
      text: "Qual é sua crença mais forte sobre sua área de atuação? (ex: 'Sistemas vencem talento sempre')"
      required: true
      maps_to: philosophy.core_belief_1

    - id: belief_2
      text: "Qual é a segunda crença fundamental que guia seu trabalho?"
      required: true
      maps_to: philosophy.core_belief_2

    - id: belief_3
      text: "E a terceira crença — algo que muitos discordariam?"
      required: false
      maps_to: philosophy.core_belief_3

    - id: worldview
      text: "Qual é sua visão de mundo sobre sua área? Se tivesse que resumir em um parágrafo, como pensa sobre o tema?"
      required: true
      maps_to: philosophy.worldview

    - id: contrarian
      text: "Qual é sua visão contrária — algo que você acredita mas a maioria do mercado discorda?"
      required: true
      maps_to: philosophy.contrarian_view

    - id: teaching_philosophy
      text: "Como você ensina? Qual é seu princípio fundamental de ensino? O que enfatiza e o que evita?"
      required: true
      maps_to: teaching_philosophy
```

### Fase 5: Personalidade e Comunicação (4 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Personalidade e Comunicação"
  questions:
    - id: communication_style
      text: "Como você se comunica? (direto, analítico, storytelling, provocador, etc.)"
      required: true
      maps_to: founder_narrative

    - id: tone
      text: "Qual é o tom da sua comunicação? (ex: caloroso mas direto, técnico mas acessível)"
      required: true
      maps_to: founder_narrative

    - id: signature_phrases
      text: "Você tem frases características? Expressões que sempre usa?"
      required: false
      maps_to: founder_narrative

    - id: interaction_style
      text: "Como você interage com alunos/clientes? (mão na massa, coaching, provocativo, suporte, etc.)"
      required: false
      maps_to: teaching_philosophy
```

### Fase 6: Evolução e Futuro (4 perguntas)

```yaml
elicitation:
  phase: 6
  name: "Evolução e Futuro"
  questions:
    - id: studying
      text: "O que você está estudando atualmente? Que assuntos te fascinam?"
      required: false
      maps_to: professional_background

    - id: testing
      text: "O que você está testando ou experimentando no momento?"
      required: false
      maps_to: professional_background

    - id: recent_evolution
      text: "Como você evoluiu nos últimos 2-3 anos? O que mudou na sua forma de pensar ou atuar?"
      required: false
      maps_to: origin_story.act_4_present

    - id: future_focus
      text: "Para onde você está caminhando nos próximos 3-5 anos? Que direção sua carreira/negócio está tomando?"
      required: false
      maps_to: origin_story.act_4_present
```

### Fase 7: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `founder-dna.yaml`:**
   - Campos respondidos: substituir placeholders pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` se todos preenchidos, `INCOMPLETE` caso contrário.
3. **Gerar `founder_narrative`** automaticamente a partir das respostas:
   - headline: sintetizar a jornada em uma frase
   - hook: extrair do Ato 1 a frustração/desafio
   - narrative_structure: montar a partir dos 4 atos
4. **Calcular completude:**
   ```yaml
   metadata:
     status: "COMPLETE" or "INCOMPLETE"
     last_updated: "{date}"
   ```
5. **Salvar** em `{pasta}/company/founder-dna.yaml`.
6. **Relatório:**
   ```
   Founder DNA para: {slug}

   Seções:
     founder_essence: COMPLETE ✅
     origin_story: COMPLETE ✅
     professional_background: COMPLETE ✅
     philosophy: COMPLETE ✅
     teaching_philosophy: COMPLETE ✅
     founder_narrative: SINTETIZADO ✅

   Completude: 92% (82/89 campos)
   Gate: PASSED ✅ (>= 85%)
   ```

## Convenções de Output YAML

- Campos respondidos: substituir placeholders pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Metadata: atualizar `status` e `last_updated`
- Gate: >= 85% para prosseguir no pipeline

## Validation

- [ ] Todas as perguntas obrigatórias respondidas
- [ ] YAML gerado é válido
- [ ] Estrutura idêntica ao template source
- [ ] Origin story tem os 4 atos preenchidos
- [ ] Founder narrative sintetizada automaticamente
- [ ] Arquivo salvo em `{pasta}/company/founder-dna.yaml`

## Next Steps

Após founder-dna:
1. `*elicit-credentials {slug}` - Credenciais e provas de autoridade
2. Ou `*setup-business-profile {slug}` para pipeline completo

---

*Task do Squad Hybrid Workspace - Vision Chief (CEO)*
