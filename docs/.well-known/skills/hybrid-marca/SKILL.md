---
name: hybrid-marca
description: 'A marca escrita antes de virar logo: o núcleo, as promessas que faz e as que não faz, a personalidade, o DNA de voz e os valores. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando…'
license: MIT
compatibility: Agent Skills (agentskills.io). Funciona em Claude, ChatGPT, Codex, Cursor, Copilot e agentes compatíveis.
metadata:
  author: José Carlos Amorim
  version: 0.4.3
  hub: https://agentsflix.ai
  source: https://github.com/AgentsFlix/skills/tree/main/skills/hybrid-marca
  tags: hybrid-workspace, negocio, elicitacao, yaml
  related: hybrid-diagnostico, hybrid-proxima-acao, hybrid-perfil, hybrid-fundador
  contract_version: 1.0.0
  content_revision: 1.0.1
  distribution_ref: main
---

# A MARCA · Núcleo, promessas, personalidade, voz e valores

A marca escrita antes de virar logo: o núcleo, as promessas que faz e as que não faz, a personalidade, o DNA de voz e os valores. O agente elicita e grava no brandbook, e as skills de copy passam a respeitar esse arquivo. Marca sem documento é gosto do dia.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (pergunte ao usuário, se ainda não souber), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "documenta a marca [nome]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

Obrigatórios: perfil, público e objetivo de comunicação ou equivalentes. Acervo de voz e provas existentes são opcionais para entrevista; necessários para alegar extração ou promessa comprovada.

Leia `references/configuracao.json` apenas para resolver configuração ausente após o bootstrap. Defaults são exemplos; confirme o destino real antes de escrever.

| procedimento | referência |
|---|---|
| elicit brand yaml | `references/elicit-brand-yaml.md` |
| template que esta skill preenche | `templates/brand-brandbook.yaml` |
| template que esta skill preenche | `templates/brand-messaging-framework.yaml` |
| template que esta skill preenche | `templates/brand-positioning-statement.yaml` |


## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Trabalhe posicionamento, promessa e diferenciais com o mesmo contexto que alimentará a voz. Identifique qual problema resolve, para quem, alternativa e motivo verificável para escolher. Não invente prova de resultado, garantia ou diferenciação.
4. Para voz, verifique acervo: se houver diversidade suficiente de textos próprios, extraia padrões com trechos e origem. Se houver pouco material, marque a inferência provisória e conduza entrevista de preferências; não declare DNA extraído. Continue as escolhas do posicionamento, sem repetir perfil/ICP.
5. Entregue posicionamento e guia de voz: princípios, vocabulário, exemplos de aplicação contextualizados, limites e origens. Cada coleta aberta tem exemplo próprio baseado no contexto. Estado proposto/aprovado pertence à manifestação da pessoa; encaminhe as escolhas e pendências à matéria-prima/visual.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Definição é pontual. Revisar após mudança de posicionamento ou acervo significativo; não criar notificação recorrente para reafirmar a voz.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pular o Diagnosis Gate quando a referência o pede. O nível de consciência muda todas as perguntas seguintes.

## Verification

Posicionamento e voz coerentes, promessas fundamentadas ou propostas, extração rastreável ou entrevista explícita quando falta acervo. Continuidade da mesma marca entre as duas operações. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill

- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/elicit-brand-yaml.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `templates/brand-brandbook.yaml`
- `templates/brand-messaging-framework.yaml`
- `templates/brand-positioning-statement.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
