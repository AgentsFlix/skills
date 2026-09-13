# Dashboard da base editorial

## Objetivo

Exibir os seis JSON da base editorial em uma página única e clara depois do
carregamento do pacote ou dos seis arquivos individuais.

## Entrega

- leitor local para `agentflix-base-bundle-1` e para os seis arquivos de etapa;
- validação dos identificadores, status e resumo de cada registro antes de
  persistir a projeção no navegador;
- seis cards em formato de pasta, com banners editoriais AgentFlix em 1584 ×
  396 px, status e contagens de decisões, fontes e pendências;
- detalhe acessível por pasta e navegação reduzida no dashboard.

## Evidências

- revisão local em `http://127.0.0.1:8821/assistir/hermes-em-operacao/t1e2/jornada-marca.html`;
- desktop 1440 px: três pastas por linha;
- tablet 768 px: duas pastas por linha;
- celular 390 px: uma pasta por linha;
- pacote real validado localmente: 3/6 revisados, 27 decisões, 40 fontes e 23
  pendências.

## Verificações

- `node tests/brand_journey.cjs`
- `python3 -m unittest tests.test_brand_journey`
- `python3 scripts/check_site.py`

## Limites

O dashboard só guarda no navegador a projeção com resumo, status e contagens.
Ele não envia, publica nem verifica o conteúdo completo dos arquivos.
