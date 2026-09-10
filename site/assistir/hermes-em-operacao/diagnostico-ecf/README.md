# Diagnóstico ECF, primeira parte

Experiência independente em `/assistir/hermes-em-operacao/diagnostico-ecf/`, com leitura visual dos três eixos, prompt Zernio personalizado e conferência local do resumo devolvido pelo agente.

Recorte: coleta e diagnóstico. Uma coorte principal por eixo; planejamento editorial e publicação ficam para as próximas partes. O navegador não acessa Zernio e não recebe credenciais. Não há dependência de pacotes de skills em preparação.

Método: ecf-metas-v1. Pesos e normalização por metas documentadas da proposta ECF v1.0, de 10/09/2026. Ausência de dados preservada. Dados de exemplo são fictícios e identificados na interface.

Fontes de integração consultadas em 10/09/2026:
- https://docs.zernio.com/analytics/get-analytics
- https://docs.zernio.com/analytics/get-instagram-account-insights
- https://docs.zernio.com/analytics/get-instagram-follower-history
- https://zernio.com/openapi.yaml

Validação prevista: testes do modelo, fluxo no navegador com teclado, exemplo e relatório incompleto; QA em 1440, 768 e 390 px; checks do CI do repositório.

## Contrato e operação

`model.js` define a versão, o resumo vazio, a validação e o cálculo; `ecf.js` preenche o contexto e o contrato JSON no prompt antes de copiar ou baixar. `prompt.md` é a fonte do roteiro e contém dois marcadores internos, substituídos na experiência. Use o botão da página para obter o prompt completo.

O diagnóstico não armazena dados em localStorage/sessionStorage, não consulta APIs sociais e não envia o resumo para um servidor. As notas são calculadas a partir de um resumo declarado pelo agente; a autenticidade das fontes deve ser conferida na conversa. Cada eixo usa uma coorte principal, com IDs únicos, alcance compatível, evidências e metas fixadas antes do ciclo. Dados desconhecidos ficam pendentes.

Testes: `python3 -m unittest discover -s tests -p test_ecf_diagnostic.py`; sintaxe dos dois scripts com `node --check`; CI completo e QA do navegador. Evidências em `design-review/diagnostico-ecf/`.


## Resolução de credencial

O prompt autoriza uma cascata limitada ao perfil atual: ambiente, arquivo de ambiente ativo do Hermes, MCP existente, configuração oficial da CLI e SDK instalado. Cada rota disponível precisa confirmar a leitura de contas; SDK instalado, transporte MCP conectado e lista vazia de contas têm tratamentos próprios. A busca não recorre a outros perfis, diretórios legados, histórico, caches ou backups.

`credential_resolution` é opcional para compatibilidade com relatórios anteriores. Nos novos resumos, começa como `null`; após tentativa, recebe exclusivamente `source`, `test_endpoint` e `result`, com valores enumerados. A importação recusa propriedades adicionais, inclusive chave mascarada. O histórico sanitizado das rotas fica em `coverage`. Nenhuma credencial foi acessada ou testada para implementar esta revisão.

Comandos Hermes conferidos no help/código da instalação disponível: `config env-path`, `mcp list` e `mcp test <name>`. Fontes Zernio: [CLI](https://docs.zernio.com/cli), [MCP](https://docs.zernio.com/mcp/setup) e [listar contas](https://docs.zernio.com/accounts/list-accounts). `mcp test` pode exibir trechos mascarados: o prompt exige capturar e descartar a saída bruta, expondo somente estado sanitizado. O texto do prompt é buscado sem cache HTTP para que uma recarga receba a revisão atual.


## Análise antes da calibração

A importação agora tem uma ação explícita: selecionar/colar o arquivo e clicar em **Gerar análise e conferir scores**. A página organiza a interpretação já feita pelo Hermes e faz os cálculos determinísticos; não consulta uma IA nem o Instagram. `observations` preserva indicadores descritivos, e `axes.<eixo>.analysis` traz interpretação, evidências anônimas, limites e próxima ação, independentemente de metas. Esses campos são opcionais para manter compatibilidade e não entram na fórmula `ecf-metas-v1`.

O prompt exige classificação inicial dos casos claros pelo agente e revisão somente das ambiguidades. O pedido **Gerar prompt para completar análise** usa o contexto do arquivo aberto e orienta reutilizar os artefatos privados da mesma execução, sem repetir a coleta completa. JSONs anteriores com cobertura estruturada por recurso são aceitos; a tela exibe apenas descrições, páginas e itens, sem argumentos de endpoint. Novas saídas devem usar `coverage` como lista de strings.

Notas continuam dependendo dos componentes, metas anteriores à janela e coortes comparáveis. Trocar essa régua para um score inicial sem metas seria uma mudança de método, não uma correção de importação. Relatórios reais do usuário permanecem fora do repositório e das capturas públicas.
