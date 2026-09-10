---
name: sop-extrair
description: 'O processo existe na cabeça de quem faz. Use quando: "extrai o SOP de [processo]" e aponte a fonte (texto, arquivo, transcrição) ou peça a entrevista.'
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
    - processos
    - sop
    - qualidade
    - operacao
    related_skills:
    - sop-criar
    - sop-auditar
---

# O PROCESSO · De descrição, documento, vídeo ou entrevista para um SOP rascunho

O processo existe na cabeça de quem faz. Esta skill tira de lá: entrevista estruturada em cinco fases, extração de documento ou de transcrição de vídeo, e separa o que foi observado do que foi inferido, com confiança por passo. Sai um SOP rascunho pronto para virar padrão.

## When to Use

- Diga: "extrai o SOP de [processo]" e aponte a fonte (texto, arquivo, transcrição) ou peça a entrevista.
- NÃO use para escrever ou auditar o SOP: isso é `sop-criar` e `sop-auditar`.

## Quick Reference

Obrigatórios: processo a compreender, finalidade e material/relato autorizado. Dados já presentes são entradas válidas; gaps são entrevistados com exemplos.

| procedimento | referência |
|---|---|
| extract sop | `references/extract-sop.md` |
| structured interview | `references/structured-interview.md` |
| extract from video | `references/extract-from-video.md` |

| apoio | arquivo |
|---|---|
| template | `templates/extraction-output-template.md` |
| rubrica/dado | `references/data-category-map.yaml` |
| rubrica/dado | `references/data-confidence-levels.yaml` |
| checklist | `references/checklist-extraction-completeness-checklist.md` |

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Antes de abrir questionários, faça bootstrap do pedido atual, memória disponível e acervo já indicado. Use as decisões da etapa anterior, preserve origem e diferencie dado conhecido, hipótese, conflito e lacuna. Não faça inventário de toda a instalação, não releia referências já carregadas e não exija user.yaml, bootstrap externo ou scaffold para começar com contexto equivalente.
2. Resolva o destino com o contexto autorizado; `references/configuracao.json` contém dados de configuração, não perguntas obrigatórias prévias. Abra apenas o método e o template necessários à entrega atual. Campos de outros documentos e exemplos do template não são respostas. Comandos herdados são nomes de fases, não dependências executáveis. Não leia todos os templates para decidir qual usar.
3. Leia primeiro a descrição, gravação ou documentos já fornecidos. Extraia entradas, etapas, responsáveis, saídas, exceções e pontos de conferência; marque observado, declarado ou inferido, conforme a referência de confiança.
4. Entreviste somente lacunas operacionais importantes, com exemplo próprio ao lado de cada pergunta aberta. Se faltar ferramenta para ler material, declare o limite e peça alternativa pertinente; não afirme ter executado script do runtime de origem nem etapa manual não realizada.
5. Entregue mapa do processo com origem, lacunas e checklist aplicado, mais uma síntese editorial: dúvidas frequentes, erros demonstráveis, explicações úteis e pautas sustentadas no processo. A síntese é proposta; não fabricar experiência ou transformar cenário hipotético em procedimento observado.
6. Releia o rascunho e confira o aceite desta operação antes de registrá-lo. Campos obrigatórios desconhecidos impedem declarar o documento completo, mas não impedem entregar uma proposta explicitamente parcial quando solicitada. A etapa dependente de resposta fica waiting; documento parcial não vira completo por média. Guarde artefatos e mapa de origem fora do pacote, preserve revisões registradas e informe a próxima ação concreta. Avalie rotina conforme a seção própria; proposta nunca autoriza ativação.

## Avaliação de rotina

Revisar quando o processo mudar ou ocorrer falha relatada. Extração inicial não exige CRON; acompanhamento só se houver benefício e eventos reais disponíveis.

## Pitfalls

- Registrar como observado o que foi só declarado. A confiança por passo é o produto; sem ela o SOP mente.
- Pular `Prerequisites`. A referência pede acesso ao dono do processo por um motivo.
- Tratar script do runtime de origem como executável aqui. Faça a etapa e registre.

## Verification

Processo rastreável, classificação de confiança e lacunas corretas; síntese editorial incluída e separada da descrição factual. Etapa dependente de informação permanece aguardando. Confira também o aceite transversal de references/contrato-agentflix.md. Não inferir aprovação humana, data de revisão ou automação por ausência de resposta.

## Arquivos desta skill

- `references/ativacao.md`
- `references/checklist-extraction-completeness-checklist.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/data-category-map.yaml`
- `references/data-confidence-levels.yaml`
- `references/extract-from-video.md`
- `references/extract-sop.md`
- `references/identidade.json`
- `references/structured-interview.md`
- `scripts/auditar.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
- `templates/extraction-output-template.md`
