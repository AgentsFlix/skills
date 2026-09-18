# ads-otimizar · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 0.4.5. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Você tem no arquivo `ads-otimizar.md` uma skill chamada ads-otimizar. Quando eu pedir algo como "otimiza hoje", siga o `## Procedure` desse arquivo à risca, use as seções `Referência:` dele no lugar dos arquivos que ele cita, e termine pela `## Verification`. Se faltar informação, pergunte antes de escrever.

---

# TODO DIA ÀS OITO · Leitura das 8h: o que pausar, escalar, manter

Todo dia às oito, o motor lê sete dias da Graph API, calcula o CAC real por conjunto e classifica: pausar, escalar ou manter. Sem modelo de linguagem no cálculo, só regra. O agente traduz o veredito em decisão de dono e pede o seu OK antes de qualquer mudança.

## When to Use

- Instale, configure o token quando ele pedir e diga: "otimiza hoje".
- NÃO use para: planejar antes de existir campanha (`ads-plano`) nem para alterar a conta: esta skill não escreve, de propósito.

## Quick Reference

| arquivo | papel |
|---|---|
| `scripts/meta_api.py` | cliente de LEITURA da Graph API; credencial só por META_AUTH |
| `scripts/otimizar.py` | o motor: coleta, filtra, calcula CAC, classifica; não muta |
| `templates/briefing.yaml` | modelo do briefing do produto |

## Procedure

1. Confirme que `META_AUTH` está configurada: rode `python3 scripts/meta_api.py testar`. Se falhar, pare e diga ao usuário para configurar a variável no ambiente onde o script roda. Nunca peça o token no chat.
2. Confirme que o briefing existe no caminho `ads.briefing` (pergunte ao usuário, se ainda não souber). Se `ratificado: false`, avise antes de qualquer recomendação: os números não foram conferidos pelo dono.
3. Rode `python3 scripts/otimizar.py --briefing <ads.briefing> --estado <ads.estado>`. O motor coleta 7 dias fechados, descarta o que não pode ser julgado (learning phase, poucas impressões, gasto abaixo de 1× CAC-alvo sem venda) e classifica cada campanha: ESCALAR · DUPLICAR · MANTER · MATAR · SEM DADO.
4. Não recalcule nada de cabeça. Leia o snapshot e traduza cada veredito em reais e em decisão: "cada real está voltando R$X; para empatar precisa R$Y".
5. Junte numa recomendação curta, ordenada por dinheiro em jogo. Se um veredito é MATAR por CAC acima do teto, diga que o problema é a **oferta**, não o anúncio.
6. Peça o OK do usuário. **Esta skill não altera a conta**: pausar, escalar ou mudar orçamento é ação dele, no Gerenciador de Anúncios, depois de decidir. Registre a decisão dele no CSV de decisões (o motor já criou o arquivo) para calibrar os thresholds.

## Pitfalls

- Recalcular CAC "de cabeça" para adiantar. Número inventado vira decisão de dinheiro errada; leia o snapshot.
- Recomendar trocar criativo quando o CAC está acima do teto. Aí o problema é a oferta.
- Rodar antes de `ratificado: true` sem avisar. Threshold não conferido produz veredito confiante e errado.
- Tentar mutar a conta por script. Não há script de escrita nesta skill, de propósito.

## Verification

A entrega está pronta quando TODAS forem verdadeiras:

1. `meta_api.py testar` respondeu antes de qualquer leitura.
2. Existe um snapshot novo em `ads.estado` com a data de hoje, e a resposta cita a janela de 7 dias fechados que ele usou.
3. Toda campanha ativa aparece com veredito e motivo vindos do snapshot, não recalculados.
4. A recomendação está em reais, ordenada por gasto em jogo, e termina pedindo OK.
5. Nenhuma alteração foi feita na conta; se o usuário decidiu, a decisão está registrada no CSV.

Validada contra Hermes Agent 0.20.6 (tag v2026.8.27) em 2026-09-04.

## Arquivos desta skill (incluídos abaixo)

- `scripts/meta_api.py`
- `scripts/otimizar.py`
- `templates/briefing.yaml`


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


---

## Não incluído neste arquivo (está no zip da skill)

- `scripts/meta_api.py (script: só no zip)`
- `scripts/otimizar.py (script: só no zip)`
