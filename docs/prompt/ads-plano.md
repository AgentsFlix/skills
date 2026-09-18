# ads-plano · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `ads-plano.md` uma skill chamada ads-plano. Quando eu pedir algo como "plano de tráfego para [oferta] a [preço], margem [x]", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# ANTES DO PRIMEIRO REAL · CAC, margem e orçamento antes do primeiro real

Quanto pode custar um cliente, quanto sobra de margem e quanto colocar por dia, tudo antes do primeiro real. O agente monta a conta de unit economics e o orçamento por fase, e diz em que número a campanha deixa de fazer sentido.

## When to Use

- Diga: "plano de tráfego para [oferta] a [preço], margem [x]".
- NÃO use para: aprovar criativo (`ads-gate-compliance`) nem para ler campanha rodando (`ads-otimizar`).

## Quick Reference

| arquivo | papel |
|---|---|
| `references/unit-economics.md` | as oito perguntas do plano |
| `templates/briefing.yaml` | modelo do briefing do produto |

## Procedure

1. Colete ticket, bump/upsell no dia zero, recorrência ou recompra em 12 meses, taxa da plataforma, e se o funil tem lead antes da venda (com a taxa histórica, se houver). Pergunte o que faltar; onde não houver dado, use a hipótese padrão da referência e **declare** que é hipótese.
2. Siga `references/unit-economics.md` na ordem das oito perguntas. Calcule CAC-alvo, CAC-teto, CPL-alvo, CPL-teto, orçamento de validação por conjunto e o gatilho de parada.
3. Preencha `templates/briefing.yaml` com os números; a seção `matriz` recebe os thresholds derivados (escalar = CAC-alvo, matar = CAC-teto, gasto sem venda = 1× CAC-teto). Entregue o arquivo preenchido para o usuário salvar no caminho que ele escolher.
4. Escreva a saída em duas tabelas: negócio primeiro ("cada real precisa voltar R$X"), técnica depois, cada linha técnica com a tradução ao lado.
5. Termine com o gatilho de parada em uma frase e com `ratificado: false` no briefing: quem confirma os números é o dono.

## Pitfalls

- Prometer CAC. O plano define quando parar e quanto arriscar; não prevê resultado.
- Esconder hipótese. Taxa assumida sem histórico aparece marcada como hipótese, sempre.
- Deixar o briefing com `ratificado: true`. Só o dono ratifica.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. As oito perguntas da referência têm resposta ou hipótese declarada.
2. CAC-alvo, CAC-teto, CPL-alvo, CPL-teto, orçamento de validação e gatilho de parada estão calculados e mostrados.
3. A tabela de negócio vem antes da técnica e toda linha técnica tem tradução.
4. O `briefing.yaml` entregue tem `matriz` preenchida e `ratificado: false`.
5. Nenhum campo de credencial existe no briefing.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `references/unit-economics.md`
- `templates/briefing.yaml`


---

## Referência: references/unit-economics.md

# Unit economics antes do primeiro real

Origem: método do `outputs/meta-ads` (plano a seco, sem API). Tudo aqui é aritmética; a decisão de gastar é humana.

## As oito perguntas, na ordem

1. **Ticket**: quanto entra por venda, líquido da taxa da plataforma.
2. **AOV no dia zero**: ticket + bump + upsell que fecham na mesma compra.
3. **LTV em 12 meses**: o que um cliente vale no ano, se houver recorrência ou recompra. Sem dado, use o AOV e diga que é conservador.
4. **Margem disponível para aquisição**: quanto do AOV você aceita gastar para trazer um cliente. Regra de bolso: até 30% do LTV-12m para produto com recompra; até 50% do AOV para venda única.
5. **CAC-alvo**: a margem do item 4. **CAC-teto**: o ponto em que a venda dá prejuízo (AOV menos custo de entrega menos taxa).
6. **Taxa lead → venda**: se o funil tem lead antes da venda, o histórico dela define o CPL. `CPL-alvo = CAC-alvo × taxa`. Sem histórico, assuma 2% e declare a hipótese.
7. **Orçamento de validação**: gaste ao menos 1× o CAC-teto por conjunto antes de julgar; abaixo disso não há dado, há ruído.
8. **Gatilho de parada**: o número em que a campanha para sem discussão: gasto ≥ 1× CAC-teto sem venda, ou CAC medido acima do teto em janela de 7 dias fechados.

## Saída

Uma tabela em linguagem de negócio ("cada real precisa voltar R$X para empatar") seguida da tabela técnica (CAC-alvo, CAC-teto, CPL-alvo, CPL-teto, orçamento por fase, gatilho de parada). Toda linha técnica vem com a tradução do lado.

## O que este plano não faz
Não prevê resultado. Ele define **quando parar** e **quanto arriscar** antes de saber. Quem promete CAC antes da primeira campanha está chutando.


---

## Referência: templates/briefing.yaml

# Briefing do produto para ads-plano e ads-otimizar. Preencha e aponte o caminho em `ads.briefing`.
# Nada aqui é segredo: credencial vai em variável de ambiente (META_AUTH), nunca neste arquivo.
produto: ""                 # nome curto, vira prefixo dos arquivos de estado
descricao: ""
ratificado: false           # true quando o dono conferiu os números abaixo
tipo_conversao: venda       # venda | lead
ticket: 0                   # em reais
aov_dia_zero: 0
ltv_12m: 0
cac_alvo: 0
cac_teto: 0
cpl_alvo: 0.0
cpl_teto: 0.0
taxa_lead_venda_pct: 0
taxa_plataforma_pct: 0.0
matriz:                     # thresholds do motor (ads-otimizar). Comece pelos derivados do plano e calibre com o CSV de decisões
  escalar_cac_max: 0        # CAC até aqui: ESCALAR
  manter_cac_max: 0         # até aqui: MANTER (faixa de validação)
  matar_cac_min: 0          # acima disso: MATAR (o problema é a oferta)
  matar_gasto_sem_venda: 0  # gastou isso sem conversão: MATAR
  impressoes_minimas: 500   # abaixo disso: SEM DADO
  fadiga_freq: 3.0          # frequência a partir da qual, com CTR caindo, o veredito vira DUPLICAR
conta_anuncios: "act_0000000000"   # id da conta de anúncios (não é segredo)
landing_principal: ""
categoria_sensivel: ""      # ex.: saúde, finanças; muda a régua do gate
icp: ""
restricoes: ""
