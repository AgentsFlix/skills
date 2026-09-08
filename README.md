# AgentFlix · Hub de Skills para agentes

Skills instaláveis por comando no [Hermes Agent](https://github.com/NousResearch/hermes-agent): copy,
lançamento, processos (SOP), o **Hybrid Workspace** do seu negócio, operação de time e tráfego pago. Cada skill é um procedimento com verificação, não um prompt.
Código aberto, licença MIT, escaneado pelo mesmo scanner que o Hermes roda na instalação.

**Página do catálogo:** https://agentsflix.ai (clique num card, escolha o agente, copie o comando).
O GitHub Pages do repo (https://agentsflix.github.io/skills/) segue como host técnico: catálogo,
`.well-known` e coláveis. A página lê tudo de lá, então uma release nova aparece nela sem deploy.

## Instalar

Cada skill existe em três formas, geradas da mesma fonte. Na página, cada card tem um seletor
**Hermes · Claude · ChatGPT · Outros agentes** com o caminho certo. Em resumo:

| agente | como | observação |
|---|---|---|
| **Hermes** | `hermes skills install https://raw.githubusercontent.com/AgentsFlix/skills/<tag>/skills/<slug>/SKILL.md` (a tag atual é `version` em `catalog.json`) ou `hermes skills tap add AgentsFlix/skills` | tag = aula reproduzível; tap = descoberta e `update` |
| **Claude.ai** (site/app, Free a Enterprise) | baixe `<slug>.zip` na [release](https://github.com/AgentsFlix/skills/releases) e envie em *Customize › Skills › + › Upload* | exige "Code execution and file creation" ligado |
| **Claude Code** | `npx skills add https://agentsflix.github.io/skills --skill <slug> -a claude-code -g` | exige Node |
| **ChatGPT com Skills** (Business, Enterprise, Edu; Plus/Pro em Work) | baixe o zip e envie em *Plugins › Skills › Create › Upload*; invoque com `@<slug>` | o ChatGPT escaneia o arquivo antes de liberar |
| **ChatGPT desktop / Codex** | `npx skills add https://agentsflix.github.io/skills --skill <slug> -a codex -g` | ou pasta em `~/.agents/skills/` |
| **ChatGPT sem Skills** (qualquer plano) | crie um *Project*, envie `https://agentsflix.github.io/skills/prompt/<slug>.md` em Files e cole o texto de ativação (está no topo do arquivo) nas instruções | versão colável: SKILL.md + referências num arquivo só |
| **Cursor, Copilot, Gemini CLI, Kiro e mais 70** | `npx skills add https://agentsflix.github.io/skills --skill <slug> -g` | o instalador escolhe a pasta de cada agente |

`ads-otimizar` e `hybrid-etl` rodam script e precisam de rede: só Hermes, Claude Code e Codex.

Depois de instalar, abra uma nova sessão.

## Pacote de hábitos em revisão

[`habitos-que-cabem`](skills/habitos-que-cabem/SKILL.md) cria, registra, ajusta e retoma hábitos a partir da memória
acessível do agente. Toda pergunta aberta traz exemplo contextualizado. Inclui documento OKF, modelos privados e
script opcional de auditoria local (Python 3.10+ e PyYAML). Funciona na conversa sem o script; auditoria persistente
requer armazenamento e alertas recorrentes dependem de agendador autorizado. Nenhuma rotina é ativada na instalação.

O pacote é gerado das fontes autorais do repositório privado por `build_hub.py --package habitos-que-cabem`.
Está disponível nesta branch e nas distribuições geradas; a inclusão de card/capa na vitrine e uma nova release
são etapas de publicação separadas. Os registros pessoais nunca vão para este repositório.

## O que tem aqui

| linha | skills | o que instala |
|---|---|---|
| **Por objetivo** | `copy-headlines`, `copy-sales-page`, `copy-oferta`, `copy-email`, `copy-anuncios`, `copy-vsl-webinar`, `copy-vendas-por-chamada`, `copy-pesquisa-avatar`, `copy-big-idea-lead-magnet`, `copy-voz`, `copy-auditoria`, `copy-pipeline`, `copy-lancamento` | a peça que você precisa, com as fórmulas dos copywriters por trás em `references/`; `copy-lancamento` traz PLF, Brunson e soap opera |
| **Lendas do copy** | `copy-metodo-halbert`, `-ogilvy`, `-schwartz`, `-hopkins`, `-kennedy`, `-bencivenga`, `-sugarman`, `-kern`, `-benson`, `-sethi`, `-hormozi`, `-koe`, `-khayat`, `-brown` | o método de um copywriter, com frameworks e voz documentados |
| **Hybrid Workspace** | `hybrid-diagnostico`, `hybrid-proxima-acao`, `hybrid-perfil`, `hybrid-fundador`, `hybrid-icp`, `hybrid-marca`, `hybrid-oferta`, `hybrid-cultura`, `hybrid-time`, `hybrid-tech`, `hybrid-etl` | o negócio descrito em YAML, numa pasta sua: elicitação com gate de 85%, sete diagnósticos e a próxima melhor ação |
| **Processos** | `sop-extrair`, `sop-criar`, `sop-auditar` | SOP da cabeça de quem faz para o papel, para o agente, e pela auditoria (Gawande, Toyota, ISO 9001) |
| **Operação** | `ops-rotear-tarefa`, `ops-briefing`, `ops-revisao-semanal`, `ops-avaliar-fit` | gestão de time por zona de genialidade e Kolbe; o perfil do SEU time é a entrada |
| **Tráfego** | `ads-gate-compliance`, `ads-plano`, `ads-otimizar`, `ads-pesquisa`, `ads-criativos`, `ads-tracking` | régua de compliance, unit economics, o motor diário que lê a Graph API, pesquisa em 5 fases, análise de criativos e auditoria de tracking. Nada aqui escreve na plataforma |

Cada skill segue o formato do Hermes: frontmatter, `When to Use`, `Quick Reference`, `Procedure`,
`Pitfalls`, `Verification` com critério binário, e `references/` para o que é longo. Segredo vai em
`required_environment_variables` (`.env`), nunca no corpo.

## Segurança

Este repositório é `community` para o Hermes, por definição (só quatro organizações são `trusted`).
Em `community`, qualquer achado `high` ou `critical` do scanner bloqueia a instalação, e `critical`
não aceita `--force`. O CI roda o scanner real do Hermes (`tools/skills_guard.py`, tag pinada) em
todo PR e reprova o build antes de chegar em alguém. Leia [SECURITY.md](SECURITY.md).

Não ensine `--force` a ninguém. Se uma skill foi bloqueada, o problema é dela.

## Estrutura

```text
skills/<nome>/SKILL.md          GERADO por build_hub.py do repositório privado AgentsFlix/agentsflix a partir do manifest e das fontes; não edite à mão
skills/<nome>/references/       fórmulas, métodos, checklists (carregados sob demanda)
skills/<nome>/templates/        modelos que a skill preenche
skills/<nome>/scripts/          código determinístico (só no ads-otimizar)
catalog.json                    o catálogo que a página lê: título, sinopse, comandos por agente, gênero
docs/                           host técnico (GitHub Pages): catálogo, docs/prompt/<nome>.md (versão colável) e
                                docs/.well-known/skills/ (a versão PORTABLE, spec estrito: é o que
                                `npx skills add <url>` e `hermes skills search <url>` leem);
                                docs/index.html só redireciona para a página
site/                           a página AgentFlix (Vercel, agentsflix.ai): um HTML sem framework que
                                lê catalog.json; site/vercel.json reescreve /catalog.json, /.well-known e /prompt
                                para o Pages (o domínio da marca também serve o well-known) e /covers para o Cloudflare Images
dist/portable/                  gerado, fora do git: pasta e zip estritos por skill; a release da tag recebe os zips
scripts/hub_common.py           fonte única: tag/commit do Hermes, URLs, limite da description, texto de ativação (o gerador importa daqui)
scripts/build_docs.py           gera portable, zips (reprodutíveis), well-known, coláveis; grava prompt_truncated no catálogo
tests/                          unittest das funções puras (cap200, frontmatter estrito, referências, poda, zip)
scripts/validate_skills.py      forma do SKILL.md (fonte) e do portable (chaves do spec, description ≤200)
scripts/scan_skills.py          scanner do Hermes contra cada skill (skills_guard.py pinado por commit + sha256)
.github/workflows/release.yml   em push de tag v*: confere tag = catalog.version, valida, escaneia e anexa os zips
(capas)                         vivem no Cloudflare Images desde 06/09/2026, não no git: <slug>-desktop.jpg (hero/modal), -wide.jpg (fileiras no
                                desktop), -mobile.jpg (hero no celular), -card.jpg (fileiras no celular), em imagedelivery.net/<hash>/covers/<arquivo>/capa;
                                importadas e subidas por capas/importar_capas.py e capas/subir_capas.py do repositório privado AgentsFlix/agentsflix
site/audio/*.v2.mp3             os cinco cues da abertura; /audio tem cache imutável, então som novo = nome novo
```

O que muda da fonte para o portable: só o frontmatter (name, description ≤200, license, compatibility,
metadata string→string) e três frases do corpo que só fazem sentido no Hermes (`[Skill directory]`, config
injetada, variável de ambiente). O procedimento é o mesmo.

## Publicar uma mudança

1. Branch. `skills/` e `catalog.json` são gerados: edite o manifest ou as fontes no repositório privado `AgentsFlix/agentsflix` (clone `~/Projects/agentsflix`) e rode
   `python3 build_hub.py` (ele se recusa a rodar com `skills/` sujo, porque apaga e reescreve as pastas). Contribuição
   externa: abra uma issue ou PR descrevendo a mudança; ela entra pelo gerador.
2. `python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt` (uma vez; Python 3.10+),
   depois `python3 -m unittest discover -s tests && python3 scripts/validate_skills.py && python3 scripts/scan_skills.py`.
3. `python3 scripts/build_docs.py` e confira o diff em `docs/` (portable, coláveis, well-known).
4. PR. O CI repete testes, validador e scanner, e reprova se `docs/` ou `catalog.json` não forem o build de `skills/`.
5. Merge em `main` (o tap passa a ver) e **tag** (`vX.Y.Z`): os comandos da página apontam para a tag, e o
   workflow de release confere que a tag é `v` + `catalog.version`, valida, escaneia e anexa os zips portable a ela.
6. A página não precisa de deploy por release (lê o catálogo do Pages). Quando `site/` mudar, o merge em `main`
   publica sozinho: o projeto `agentflix` da Vercel está conectado a este repositório (Root Directory `site`, produção =
   `main`, preview por PR) desde 07/09/2026. `vercel deploy --prod --yes` pela raiz continua valendo só como plano B.

## Origem

As skills de copy nasceram do squad `copywriter-os` e as de operação do `nucleo-ops-ia`, do
[Synkra AIOS](https://github.com/SynkraAI/aios-core); o motor de tráfego é o `outputs/meta-ads`. A página do catálogo se chama AgentFlix: marca própria, para não depender do nome de um produto de terceiro. Na v0.3
entraram os squads da imersão (`aiox-copy`, `aiox-sop`, `aiox-workspace`, rebatizado Hybrid Workspace, e
a parte de leitura do `aiox-ads`). Os arquivos de agente e task foram levados para `references/` como
conhecimento, não como persona; caminhos do filesystem de origem viraram uma pasta configurável
(`hybrid.pasta`, `ops.perfis_do_time`); dados de participantes e o que muta plataforma ficaram fora. As
capas da página seguem o padrão de key art da Netflix e são geradas a partir de prompts versionados.

Licença MIT. Autor: José Carlos Amorim.
