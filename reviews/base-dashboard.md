# Base editorial ECF

## Objetivo

Portar o fluxo canônico aprovado de seis etapas para a jornada da marca:
Negócio, Pesquisa, Público, Posicionamento, Voz e Matéria-prima. Cada etapa
gera um prompt com as skills no GitHub, recebe apenas o JSON correspondente e
exibe o recibo no próprio painel. A visão de pastas só aparece após 6/6
arquivos válidos.

## Evidências

- Contrato: exemplos válidos para as seis etapas, rejeição de documento fora do
  caminho canônico e prompt de correção com o nome do JSON correto.
- Navegador local: tela conferida em 1440 px e 390 px; somente a etapa atual
  recebe destaque ciano.
- Verificações: node tests/base_editorial.cjs,
  python3 -m unittest tests.test_brand_journey e
  python3 scripts/check_site.py.

## Limitações

Os dados ficam no armazenamento local do navegador e podem ser baixados como
minha-base-ecf.json; não são enviados a um serviço remoto. O teste
automatizado do contrato cobre importação e correção. O seletor de arquivos do
navegador de teste não expôs o evento de upload para automação local.
