> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Create Headlines Task

## Purpose
Gerar headlines e hooks de alta conversão para qualquer peça de copy.

## Inputs

```yaml
required:
  - context: sales_page | email | ad | article | landing | webinar
  - product_name: Produto/serviço
  - main_benefit: Benefício principal
  - target_avatar: Público-alvo

optional:
  - secondary_benefits: Outros benefícios
  - objections: Objeções comuns
  - tone: Tom desejado
  - num_headlines: Quantidade (default: 10)
  - copywriter_style: Estilo específico
```

## Headline Formulas by Copywriter

### Gary Halbert Headlines
```
- "Como [RESULTADO] em [TEMPO] mesmo se [OBJEÇÃO]"
- "Atenção [AVATAR]: [PROMESSA ESPECÍFICA]"
- "A carta que está fazendo [AVATAR] [RESULTADO]"
- "Quem mais quer [BENEFÍCIO DESEJADO]?"
- "O segredo de [AUTORIDADE] para [RESULTADO]"
```

### David Ogilvy Headlines
```
- "[NÚMERO] maneiras de [BENEFÍCIO] - e como fazer cada uma"
- "Como fazer [RESULTADO] - um guia completo"
- "Por que [MARCA] é diferente de [ALTERNATIVA]"
- "O que [EXPERTS] sabem sobre [TÓPICO] que você não sabe"
- "A [ADJETIVO] maneira de [RESULTADO]"
```

### Eugene Schwartz Headlines
```
- "Finalmente - [SOLUÇÃO] para [PROBLEMA]"
- "Para [AVATAR] que quer [RESULTADO] mas [OBJEÇÃO]"
- "O [ADJETIVO] método de [RESULTADO] que [DIFERENCIAL]"
- "Revelado: [SEGREDO] de [AUTORIDADE]"
- "[RESULTADO] - sem [OBJEÇÃO], sem [OBJEÇÃO]"
```

### Claude Hopkins Headlines
```
- "[RESULTADO] garantido ou seu dinheiro de volta"
- "Teste grátis de [TEMPO] - [PRODUTO]"
- "[NÚMERO]% mais [BENEFÍCIO] comprovado"
- "Cupom: economize R$[VALOR] em [PRODUTO]"
- "Compare: [PRODUTO] vs [ALTERNATIVA]"
```

### Dan Kennedy Headlines
```
- "AVISO: Não [AÇÃO] até ler isso"
- "Última chance: [OFERTA] termina [DATA]"
- "Para [AVATAR] sérios sobre [RESULTADO]"
- "A oferta de R$[VALOR] que você não pode recusar"
- "Por que [AVATAR] inteligentes estão [AÇÃO]"
```

### Gary Bencivenga Headlines
```
- "O segredo de [AUTORIDADE] para [RESULTADO] (página X)"
- "Por que [CRENÇA COMUM] está errado - e o que fazer"
- "[NÚMERO] sinais de que você está [PROBLEMA]"
- "O erro de R$[VALOR] que [AVATAR] comete"
- "Como [AVATAR IMPROVÁVEL] conseguiu [RESULTADO]"
```

### Joe Sugarman Headlines
```
- "Era [DATA]. Eu estava [SITUAÇÃO]..."
- "Você não vai acreditar no que aconteceu quando..."
- "A verdade sobre [PRODUTO] que ninguém conta"
- "Por que [RESULTADO SURPREENDENTE]"
- "Minha história com [PRODUTO] - e o que descobri"
```

### Frank Kern Headlines
```
- "Como consegui [RESULTADO] (e você também pode)"
- "O método [ADJETIVO] para [RESULTADO]"
- "Cara, você precisa ver isso sobre [TÓPICO]"
- "[RESULTADO] - sem [OBJEÇÃO] (sério)"
- "O que [CLIENTE] fez para [RESULTADO]"
```

## Headline Categories

### Benefit Headlines
Foco no resultado que o cliente quer.

### Curiosity Headlines
Criam intrigue e desejo de saber mais.

### News Headlines
Apresentam algo novo ou revelador.

### Command Headlines
Dizem diretamente o que fazer.

### Question Headlines
Engajam fazendo o leitor responder mentalmente.

### How-To Headlines
Prometem ensinar algo específico.

### Testimonial Headlines
Usam voz de cliente satisfeito.

### Reason-Why Headlines
Explicam por que algo funciona.

## Output Format

```yaml
deliverables:
  - headline_variations: 10-20 opções
  - categorized_by: tipo (benefit, curiosity, etc.)
  - top_3_recommended: Com justificativa
  - a_b_test_pairs: 3 pares para teste
  - subheadline_options: 5 opções de complemento
```

## Evaluation Criteria

### The 4 U's (Copyblogger)
- **Useful:** É útil para o leitor?
- **Urgent:** Cria senso de urgência?
- **Unique:** É diferenciado?
- **Ultra-specific:** É específico o suficiente?

### SHINE Test
- **S**pecificity: Tem números, detalhes?
- **H**elpfulness: Promete ajudar?
- **I**mmediacy: Funciona rápido?
- **N**ewsworthiness: É novidade?
- **E**ntertainment: É interessante?

## Quality Checklist

- [ ] Benefício claro em <8 palavras
- [ ] Específico (números, resultados)
- [ ] Relevante para o avatar
- [ ] Diferenciado de concorrentes
- [ ] Promessa cumprível
- [ ] Testa bem em voz alta
- [ ] Funciona isoladamente

---

*Task Version: 1.0*
