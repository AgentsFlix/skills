> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Avatar Research - Pesquisa Profunda de Persona

## Metadata
```yaml
task_id: avatar-research
version: 1.0.0
category: research
difficulty: advanced
estimated_time: 2-4 hours
elicit: true
dependencies:
  - checklists/avatar-research-checklist.md
  - templates/avatar-research-template.md
outputs:
  - Documento completo de pesquisa de avatar
  - Nuvem de palavras
  - Arquitetura da linguagem
  - Crenças aplicáveis para copy
```

## Objetivo

Conduzir uma pesquisa profunda de avatar/persona que vai além do demográfico superficial, capturando:
- **Linguagem exata** que o avatar usa
- **Crenças** que sustentam suas decisões
- **Dores ocultas** nas entrelinhas
- **Intencionalidade** por trás das palavras
- **Padrões linguísticos** para copy de alta conversão

---

## FASE 1: COLETA DE DADOS

### Step 1.1: Fontes de Dados

```
elicit: true
question: "Quais fontes de dados você tem disponíveis?"
options:
  - Formulários de onboarding
  - Pesquisas de satisfação
  - Comentários em redes sociais
  - Mensagens de WhatsApp/Telegram
  - Emails de clientes
  - Transcrições de calls
  - Reviews de produto
  - Comentários em anúncios
```

### Step 1.2: Extração de Citações

**Para cada fonte, extraia:**

1. **Citações literais** - Copie exatamente como o cliente escreveu
2. **Contexto** - Qual pergunta gerou essa resposta?
3. **Frequência** - Quantas vezes esse padrão aparece?

```markdown
## Modelo de Extração

| Citação Literal | Contexto/Pergunta | Frequência |
|-----------------|-------------------|------------|
| "Sinto que tenho muito potencial..." | Por que entrou? | 5x |
| "Minha mente não para de pensar..." | Qual sua maior dor? | 8x |
```

---

## FASE 2: DADOS GERAIS

### Step 2.1: Demográficos

Colete e organize:

| Dado | Como Coletar | Formato |
|------|--------------|---------|
| Faixa etária | Formulário | % por faixa |
| Sexo | Formulário | % por gênero |
| Estado civil | Formulário | % por estado |
| Profissão | Aberta + análise | Termos mais usados |
| Localização | Formulário | Top 5 regiões |
| Escolaridade | Formulário | % por nível |
| Faixa de renda | Formulário | % por faixa |

### Step 2.2: Informações Faltantes

Liste dados que você ainda precisa coletar:
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

---

## FASE 3: GOSTO PESSOAL

### Step 3.1: Pelo que se interessam

**Pergunta-chave:** "Pelo que você é fascinado? Pelo que tem curiosidade?"

**Formato de análise:**

```markdown
| Citação Literal |
| :---- |
| "Sou fascinado por [tema] porque [motivo]..." |
| "Sempre quis [desejo] desde que [contexto]..." |
```

**Síntese conclusiva (bullets):**
- Amam [tema/atividade]
- São fascinados por [assunto]
- Buscam [objetivo profundo]
- Se identificam com [valores/identidade]

### Step 3.2: Tempo Livre

**Pergunta-chave:** "O que você gosta de fazer no tempo livre?"

Formate como gráfico ou tabela de frequência:

| Atividade | % |
|-----------|---|
| Ler/Estudar | X% |
| Exercícios | X% |
| Família | X% |

**Insight-chave:** "Não é apenas um interesse, [atividade] é um estilo de vida para eles!"

---

## FASE 4: OPINIÃO PESSOAL

### Step 4.1: Como se enxergam

**Pergunta-chave:** "Como você se descreve? Quais suas qualidades e defeitos?"

**Extraia padrões de auto-percepção:**

```markdown
| Citação com **negrito** nos padrões |
| :---- |
| "Eu me considero bem **esquecido** e algumas vezes **perco o foco**..." |
| "Sempre senti que poderia **criar algo inovador**, mas **não consigo sozinho**..." |
```

**Síntese:**
- Se consideram [característica positiva]
- Sentem que [percepção/frustração]
- Se veem como [identidade]

### Step 4.2: No que acreditam

**Pergunta-chave:** "O que você acredita sobre [tema]? O que defende ou repudia?"

**Formato de Crença + Aplicação:**

```markdown
**Crença 01:** "[citação literal da crença]"

**Aplicação em Copy:**
"[Reformule a crença como gancho de copy]"

Exemplo:
- Crença: "Não consigo armazenar tudo na minha mente biológica"
- Copy: "Você nunca vai conseguir armazenar tudo na sua mente biológica.
  E você sabe disso, tanto que [exemplo do dia a dia]. Por isso..."
```

---

## FASE 5: PESQUISA TRADICIONAL

### Step 5.1: Dores Admitidas

**Pergunta-chave:** "Qual sua maior dificuldade/frustração com [tema]?"

```markdown
| Citação |
| :---- |
| "Minha maior dor é [problema] porque [consequência]..." |
```

**Síntese em bullets:**
- Dor 1: [descrição]
- Dor 2: [descrição]

### Step 5.2: Dores Ocultas (Entrelinhas)

**Leia nas entrelinhas - o que eles NÃO dizem diretamente, mas fica implícito:**

```markdown
| Citação com **destaque** no padrão oculto |
| :---- |
| "Precisava de uma forma de **organizar melhor** as informações..." |
```

**Síntese das dores ocultas:**
- A grande dor oculta é [insight]
- Eles não verbalizam, mas [padrão]
- Por trás de X, está Y

### Step 5.3: Sonhos e Desejos

**Pergunta-chave:** "Se você pudesse realizar qualquer desejo, qual seria?"

**Categorize por tema:**

| Categoria | Menções | Padrão |
|-----------|---------|--------|
| Dinheiro/Liberdade | Xx | "independência financeira", "viver de X" |
| Conhecimento | Xx | "sabedoria", "dominar" |
| Impacto | Xx | "ajudar pessoas", "legado" |

---

## FASE 6: PERGUNTAS DO ONBOARDING

### Template de Análise por Pergunta

Para CADA pergunta do seu onboarding, use este formato:

```markdown
### Pergunta: "[Texto exato da pergunta]"

| Categoria de Resposta | Menções | Palavras mais comuns |
| :---: | :---: | :---: |
| Categoria A | 14 | palavra1, palavra2 |
| Categoria B | 9 | palavra3, palavra4 |

**Análise por categoria:**

▪️ **Categoria A:** Quando o motivo é este, eles usam palavras como
[termo1] e [termo2]. Demonstram [sentimento/intenção].

**Intencionalidade:** [O que está por trás dessa resposta? Qual a
lógica deles?]

▪️ **Categoria B:** [Análise similar]
```

### Perguntas Recomendadas

1. **Por que você entrou/comprou [produto]?** → Gatilhos de compra
2. **Para que você está usando [produto]?** → Uso real vs. esperado
3. **De que forma [produto] pode te ajudar a alcançar seus objetivos?** → Transformação desejada
4. **Tem algo que gostaria de aprender com a gente?** → Gaps de conhecimento
5. **Se eu pudesse realizar qualquer desejo seu, qual seria?** → Sonho profundo
6. **O que te impede de ter esse desejo realizado hoje?** → Objeções e bloqueios

---

## FASE 7: ARQUITETURA DA LINGUAGEM

### Step 7.1: Nuvem de Palavras

**Conte a frequência de CADA palavra relevante:**

| Palavra | Menções |
| :---: | :---: |
| [termo 1] | 108 |
| [termo 2] | 96 |
| [termo 3] | 86 |

**Top 20 palavras = vocabulário do seu avatar**

### Step 7.2: Análise de Radicais

**Agrupe palavras pela mesma raiz:**

| Radical | Palavras Derivadas | Menções |
| :---- | :---- | :---- |
| Cria | Criar, Criação, Criativo, Criatividade | 86, 33, 3, 4 |
| Organiz | Organizar, Organizado, Organização | 41, 5, 23 |
| Ideia | Ideia, Ideias | 12, 67 |

### Step 7.3: Intencionalidade

**Para cada palavra-chave, analise:**

```markdown
**[PALAVRA] (Xx menções)**

**Se relaciona com:** [palavras que aparecem junto]

**Variações mais usadas:**
- "[frase exata]" (Xx)
- "[frase exata]" (Xx)

**Padrões descobertos:**
- Sempre usam [termo] quando falam de [contexto]
- NUNCA usam [termo] → insight negativo

**Pergunta-chave:** [O que isso revela sobre o avatar?]
```

### Step 7.4: Preferências Linguísticas

Documente:
- Termo preferido: "criação de conteúdo" vs "produção de conteúdo"
- Verbo preferido: "organizar" vs "estruturar"
- Adjetivo preferido: "fascinado" vs "interessado"

---

## FASE 8: INSIGHTS ADICIONAIS

### Step 8.1: Dificuldades com o Produto

**Podem ser objeções de compra para novos clientes:**

```markdown
| Dificuldade relatada |
| :---- |
| "Ainda não sei como extrair [benefício] do produto..." |
| "Tenho medo de não conseguir [resultado]..." |
```

### Step 8.2: Experiência Anterior

**O que já tentaram? Por que não funcionou?**

```markdown
| Experiência anterior |
| :---- |
| "Já havia estudado sobre [tema], mas não achei método simples..." |
| "Vinha pesquisando desde [tempo] sobre [solução]..." |
```

### Step 8.3: Curiosidades

- Conhecem a marca há quanto tempo? (%)
- Primeiro contato foi por qual canal? (%)
- Quem indicou? (%)

---

## OUTPUT FINAL

Ao final, você terá:

1. **Perfil Demográfico** - Quem é o avatar
2. **Perfil Psicográfico** - Como pensa e sente
3. **Dores Explícitas** - O que admite sofrer
4. **Dores Ocultas** - O que sofre mas não verbaliza
5. **Sonhos e Desejos** - Onde quer chegar
6. **Crenças** - O que acredita (com aplicação para copy)
7. **Arquitetura da Linguagem** - As palavras exatas para usar
8. **Objeções** - O que pode impedir a compra

---

## Checklist de Validação

Execute o checklist: `checklists/avatar-research-checklist.md`

## Template de Output

Use o template: `templates/avatar-research-template.md`
