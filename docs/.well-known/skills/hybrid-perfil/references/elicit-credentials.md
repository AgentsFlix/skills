# Task: Elicit Credentials (YAML)

```yaml
task:
  id: elicit-credentials
  name: Elicitação de Credenciais e Provas de Autoridade (YAML)
  agent: vision-strategist
  elicit: true
  output_format: yaml
  target_template: company/credentials.yaml
```

## Descrição

O Vision Chief conduz elicitação para documentar todas as credenciais e provas de autoridade do fundador — educação, prêmios, palestras, mídia, clientes notáveis, presença online e thought leadership. O output popula `credentials.yaml`.

## Prerequisites

- Bootstrap executado
- Templates scaffolded
- Recomendado: `founder-dna.yaml` preenchido (para contexto de background)

## Usage

```
*elicit-credentials {slug}
```

## Workflow

### Fase 0: Contexto

1. Ler `{pasta}/company/credentials.yaml`:
   - **Se tem campos preenchidos:** Apresentar resumo, perguntar se quer atualizar ou completar.
   - **Se é template vazio:** Prosseguir com elicitação completa.
2. Ler `{pasta}/company/founder-dna.yaml` (se existir) para contexto.
3. Definir modo: `CREATE` ou `UPDATE`.

### Fase 1: Educação Formal (6 perguntas)

```yaml
elicitation:
  phase: 1
  name: "Educação Formal"
  questions:
    - id: degree_1
      text: "Qual é sua formação principal? (instituição, país, tipo de grau, área, ano de conclusão)"
      required: true
      maps_to: formal_education.degree_1

    - id: degree_2
      text: "Tem outra formação relevante? (MBA, mestrado, especialização)"
      required: false
      maps_to: formal_education.degree_2

    - id: cert_1
      text: "Tem certificações profissionais? Qual a principal? (nome, organização emissora, ano)"
      required: false
      maps_to: formal_education.professional_certifications.cert_1

    - id: cert_2
      text: "Outra certificação relevante?"
      required: false
      maps_to: formal_education.professional_certifications.cert_2

    - id: education_summary
      text: "Como você resume sua trajetória educacional em 2-3 frases?"
      required: true
      maps_to: formal_education.total_education_summary

    - id: continuing_education
      text: "O que você estuda atualmente? Cursos, mentorias, programas?"
      required: false
      maps_to: formal_education
```

### Fase 2: Prêmios e Reconhecimento (4 perguntas)

```yaml
elicitation:
  phase: 2
  name: "Prêmios e Reconhecimento"
  questions:
    - id: award_1
      text: "Recebeu algum prêmio ou reconhecimento profissional? Qual o mais importante? (nome, organização, ano, categoria)"
      required: false
      maps_to: awards.award_1

    - id: award_2
      text: "Outro prêmio ou reconhecimento?"
      required: false
      maps_to: awards.award_2

    - id: mentions
      text: "Foi mencionado ou citado por alguém relevante? (publicação, pessoa, o que disseram)"
      required: false
      maps_to: awards.recognition_mentions

    - id: industry_recognition
      text: "Tem algum reconhecimento da indústria? (rankings, listas, associações)"
      required: false
      maps_to: awards
```

### Fase 3: Palestras e Eventos (5 perguntas)

```yaml
elicitation:
  phase: 3
  name: "Palestras e Eventos"
  questions:
    - id: conferences
      text: "Em quais conferências ou eventos já palestrou? (nome do evento, ano, tema)"
      required: false
      maps_to: speaking_engagements

    - id: keynotes
      text: "Já fez alguma keynote? Qual a mais relevante?"
      required: false
      maps_to: speaking_engagements

    - id: podcasts
      text: "Participou de podcasts? Quais os mais relevantes?"
      required: false
      maps_to: speaking_engagements

    - id: workshops
      text: "Conduziu workshops ou masterclasses? Onde e sobre o quê?"
      required: false
      maps_to: speaking_engagements

    - id: speaking_frequency
      text: "Com que frequência participa de eventos como palestrante?"
      required: false
      maps_to: speaking_engagements
```

### Fase 4: Mídia e Publicações (6 perguntas)

```yaml
elicitation:
  phase: 4
  name: "Mídia e Publicações"
  questions:
    - id: interviews
      text: "Já deu entrevistas para mídia? Quais as mais relevantes? (veículo, ano, assunto)"
      required: false
      maps_to: media_appearances

    - id: articles
      text: "Publicou artigos? Onde? Sobre o quê?"
      required: false
      maps_to: published_works

    - id: books
      text: "Escreveu livros ou e-books? (título, ano, tema)"
      required: false
      maps_to: published_works

    - id: columns
      text: "Tem coluna fixa em alguma publicação?"
      required: false
      maps_to: media_appearances

    - id: video_content
      text: "Produz conteúdo em vídeo regularmente? (YouTube, Instagram, etc.)"
      required: false
      maps_to: media_appearances

    - id: media_highlights
      text: "Qual a aparição na mídia de que mais se orgulha?"
      required: false
      maps_to: media_appearances
```

### Fase 5: Clientes Notáveis (4 perguntas)

```yaml
elicitation:
  phase: 5
  name: "Clientes Notáveis"
  questions:
    - id: notable_clients
      text: "Quais são seus clientes mais notáveis ou conhecidos? (nomes que podem ser mencionados publicamente)"
      required: false
      maps_to: notable_clients

    - id: case_studies
      text: "Tem case studies documentados? Quais os resultados mais impressionantes?"
      required: false
      maps_to: notable_clients

    - id: testimonial_highlight
      text: "Qual é o depoimento de cliente mais poderoso que você tem?"
      required: false
      maps_to: notable_clients

    - id: client_types
      text: "Que tipo de empresa/pessoa são seus melhores clientes? (tamanho, setor, perfil)"
      required: true
      maps_to: notable_clients
```

### Fase 6: Presença Online (5 perguntas)

```yaml
elicitation:
  phase: 6
  name: "Presença Online"
  questions:
    - id: website
      text: "Qual é o site principal? (URL)"
      required: true
      maps_to: online_presence.website

    - id: linkedin
      text: "Qual é o LinkedIn? (URL e número de conexões/seguidores)"
      required: false
      maps_to: online_presence.linkedin

    - id: social_primary
      text: "Qual é sua rede social principal? (plataforma, @, seguidores)"
      required: true
      maps_to: online_presence

    - id: social_secondary
      text: "Outras redes sociais relevantes?"
      required: false
      maps_to: online_presence

    - id: email_list
      text: "Tem lista de email? Qual o tamanho?"
      required: false
      maps_to: online_presence
```

### Fase 7: Thought Leadership (5 perguntas)

```yaml
elicitation:
  phase: 7
  name: "Thought Leadership"
  questions:
    - id: courses
      text: "Quais cursos ou programas você criou? (nome, formato, número de alunos)"
      required: false
      maps_to: thought_leadership

    - id: frameworks
      text: "Criou algum framework, método ou modelo proprietário? (nome, descrição)"
      required: false
      maps_to: thought_leadership

    - id: communities
      text: "Lidera alguma comunidade? (nome, tamanho, plataforma)"
      required: false
      maps_to: thought_leadership

    - id: influence_reach
      text: "Qual é o alcance total da sua influência? (seguidores + alunos + lista + comunidade)"
      required: false
      maps_to: thought_leadership

    - id: unique_contribution
      text: "Qual é sua contribuição única para a área? O que você trouxe que não existia antes?"
      required: true
      maps_to: thought_leadership
```

### Fase 8: Transparência (3 perguntas)

```yaml
elicitation:
  phase: 8
  name: "Transparência"
  intro: "Estas perguntas são opcionais mas poderosas para autenticidade."
  questions:
    - id: failures
      text: "Quais foram seus maiores fracassos ou erros profissionais? O que aprendeu?"
      required: false
      maps_to: transparency.failures

    - id: criticisms
      text: "Quais são as críticas mais comuns que recebe? Como responde?"
      required: false
      maps_to: transparency.criticisms

    - id: corrections
      text: "Já mudou de opinião publicamente sobre algo? O que e por quê?"
      required: false
      maps_to: transparency.corrections
```

### Fase 9: Síntese e Output

1. **Processar respostas** e mapear para campos do template YAML.
2. **Popular `credentials.yaml`:**
   - Campos respondidos: substituir placeholders pelo valor real.
   - Campos não respondidos: manter como `null`.
   - Status por seção: `COMPLETE` / `INCOMPLETE`.
3. **Gerar `credential_summary`** automaticamente:
   - Resumir em 3-4 frases as credenciais mais fortes
   - Identificar "top 3 provas de autoridade"
4. **Calcular completude** e salvar.
5. **Relatório** com seções e completude.

## Convenções de Output YAML

- Campos respondidos: substituir placeholders pelo valor real
- Campos não respondidos: definir como `null`
- Status por seção: `COMPLETE` / `INCOMPLETE`
- Metadata: atualizar `status` e `last_updated`
- A maioria dos campos é opcional — completude considera apenas seções com pelo menos 1 campo preenchido
- Gate: >= 85% para prosseguir no pipeline (relaxado para credentials: seções com 0 dados são excluídas do cálculo)

## Validation

- [ ] YAML gerado é válido
- [ ] Pelo menos educação ou experiência profissional documentada
- [ ] Presença online principal documentada
- [ ] Credential summary gerado
- [ ] Arquivo salvo em `{pasta}/company/credentials.yaml`

## Next Steps

Após credentials:
1. Completar pipeline com `*setup-business-profile {slug}`
2. Dados alimentam `authority-story.yaml` na Fase 6 do pipeline

---

*Task do Squad Hybrid Workspace - Vision Chief (CEO)*
