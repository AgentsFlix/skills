---
name: hybrid-icp
description: 'Quem é a pessoa que compra, em 47 campos: demografia, dor, desejo, objeções, linguagem, onde está. Grava YAML na pasta do negócio (config hybrid.pasta). Use quando: "monta o ICP de [produto]".'
version: 0.4.3
author: José Carlos Amorim
license: MIT
platforms:
- linux
- macos
- windows
metadata:
  hermes:
    tags:
    - hybrid-workspace
    - negocio
    - elicitacao
    - yaml
    related_skills:
    - hybrid-diagnostico
    - hybrid-proxima-acao
    - hybrid-perfil
    - hybrid-fundador
---

# O CLIENTE IDEAL · ICP em 47 campos, com o nível de consciência do mercado antes

Quem é a pessoa que compra, em 47 campos: demografia, dor, desejo, objeções, linguagem, onde está. Antes de perguntar qualquer coisa, a skill passa pelo Diagnosis Gate: nível de consciência e sofisticação do mercado, porque o ICP muda conforme o mercado já sabe ou não que tem o problema.

Parte do **Hybrid Workspace**: um conjunto de YAMLs que descrevem o negócio e que as outras skills leem. Tudo vive na pasta configurada em `hybrid.pasta` (valor já no seu contexto), um negócio por pasta. Nada é enviado para fora.

## When to Use

- Diga: "monta o ICP de [produto]".
- O negócio ainda não tem esse arquivo, ou ele está abaixo de 85% de completude.
- NÃO use para medir o negócio: isso é `hybrid-diagnostico`, que lê o que esta skill escreve.

## Quick Reference

Obrigatórios: negócio/oferta, decisão de público a apoiar e fonte disponível. Características não pesquisadas são hipóteses; dados do perfil existente devem ser aproveitados.

A contagem do template expandido está em `references/campos-icp.json`. Use seus caminhos e o total real para completude; o rótulo editorial de origem não é o denominador. Defaults vazios não são respostas.

Leia `references/configuracao.json` apenas para resolver configuração ausente após o bootstrap. Defaults são exemplos; confirme o destino real antes de escrever.

| procedimento | referência |
|---|---|
| elicit icp yaml | `references/elicit-icp-yaml.md` |
| elicit icp | `references/elicit-icp.md` |
| template que esta skill preenche | `templates/company-icp.yaml` |
| template que esta skill preenche | `templates/company-diagnosis.yaml` |


## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Use o perfil anterior e os relatos/acervo autorizados. Separe público atual observado, público desejado e hipóteses. Perfil de pessoa fictícia é persona proposta, não pesquisa nem cliente entrevistado.
4. Construa ICP com contexto, problema, critérios de decisão, objeções e limites. Use os campos do template como banco de investigação; não envie o questionário integral. Pergunte só lacunas que mudam a próxima decisão, cada uma com seu exemplo contextual.
5. Ligue cada afirmação a fonte ou marque hipótese/desconhecido. Pesquise somente lacunas relevantes com ferramenta real disponível; sem pesquisa externa, entregue o que o acervo sustenta e plano da lacuna. Completude do YAML usa somente valores confirmados e denominador declarado; não force preenchimento de psicografia sem evidência. Entregue ICP e síntese aproveitável pelo posicionamento.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Revisão pode valer com novas entrevistas, clientes ou mudança de oferta; coleta automatizada só com fontes e autorização reais.

## Pitfalls

- Preencher com suposição para "fechar" a completude. `null` é honesto; suposição vira decisão errada em cascata.
- Tratar `*comando` e script da referência como executável. São etapas do formato de origem.
- Ler o YAML errado: um negócio por pasta. Se a pasta tem arquivos de dois negócios, pare e pergunte.
- Pular o Diagnosis Gate quando a referência o pede. O nível de consciência muda todas as perguntas seguintes.

## Verification

ICP diferencia evidência, hipótese e ausência de dados; nenhuma psicografia inventada como fato. Completude rastreável quando declarada; perguntas essenciais com exemplos próprios. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill

- `references/ativacao.md`
- `references/campos-icp.json`
- `references/ciclo-de-vida.md`
- `references/configuracao.json`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/elicit-icp-yaml.md`
- `references/elicit-icp.md`
- `references/identidade.json`
- `scripts/auditar.py`
- `templates/company-diagnosis.yaml`
- `templates/company-icp.yaml`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
