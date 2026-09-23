> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Compatibilidade, manutenção e atualização

## O que o ambiente precisa oferecer

O pacote atende agentes com terminal, Python 3.10+, rede e arquivos privados. Codex, Claude Code e Hermes
são destinos previstos; compatibilidade comprovada depende de teste no hospedeiro e versão concretos.
Um editor, instalador ou agendador disponível em um deles não deve ser presumido nos demais.

| Capacidade observada | Etapas possíveis |
|---|---|
| Conversa e leitura do pacote | Bootstrap, briefing e revisão dos materiais fornecidos |
| Terminal e armazenamento privado | Diagnóstico, validação local e preparação de artefatos |
| Os anteriores e rede para fontes públicas | Descoberta/coleta, com `yt-dlp` quando necessário |
| Os anteriores e conta JevCloud autenticada | Classificação/seleção real, respeitando limites da conta |
| Agendador real com autorização | Rotina configurada e verificável |

Registre cada teste com data, sistema, hospedeiro, versão do pacote/dependências, caso, resultado e evidência
sem segredos. Não generalize um teste de terminal para integração completa com todos os agentes.
Exemplos sintéticos incluídos nos módulos são fictícios e devem continuar identificados assim na entrega.

## Casos mínimos de verificação

Antes de aceitar o onboarding, execute estes três percursos com arquivos sintéticos em uma pasta temporária:

| Cenário | Percurso e resultado esperado |
|---|---|
| Chave ausente | `doctor` identifica ausência; plano não grava; `prepare --execute` cria campo vazio privado; aguarda salvamento no editor; `verify` não alega autenticação; probe real é uma etapa separada. Repita com arquivo já existente e campo vazio, conferindo privacidade antes de colar. Ao cancelar, `clean-backup --execute` remove somente backup/recibo reconhecidos. |
| Chave existente | Reaproveita bytes e comentários sem nova solicitação. Confere precedência: `--credential`, depois XDG/padrão. A escolha por CLI deve ser repetida em cada comando. Nenhum comando imprime valor e a API só é chamada na etapa autorizada. |
| Somente leitura | `doctor` e planos não alteram arquivos nem chamam rede. Não executar `prepare`, editor, probe ou limpeza como parte de uma consulta apenas de diagnóstico. Para credencial segura montada somente para leitura, verificar separadamente a compatibilidade de `verify`; falha de permissão não significa chave inválida. |

- Memória suficiente: reaproveitar contexto e avançar sem entrevista redundante.
- Memória parcial, ausente ou conflitante: somente lacunas determinantes, com exemplos contextuais ou hipotéticos.
- Credencial existente: reutilizar; credencial ausente: abrir arquivo vazio; credencial inválida: erro específico.
- Ambiente limpo: instalar dependências isoladas e registrar versões reais.
- Piloto sintético: verificar contrato; amostra real: avaliar decisões e explicitar limitações semânticas.
- Corpus existente: pular descoberta/coleta e manter proveniência; base auditada: aproveitar evidências válidas.
- Interrupção/retomada: preservar checkpoints e impedir mistura de corpus/rubricas incompatíveis.
- Pesquisa pontual: justificar ausência de rotina; rotina útil: propor sem ativar; silêncio humano: manter pendência.
- Ambiente sem terminal ou armazenamento seguro: entregar somente o que foi possível, sem execução alegada.

Separe checks locais, chamada real, coleta real, auditoria editorial e instalação no hospedeiro. Um campo
`verified` editorial não deve ser criado só porque um teste técnico passou. Mudanças ficam entre lotes comparáveis;
falha crítica bloqueia promoção. Reexecute os casos afetados e a regressão antes de anunciar correção.

## Atualizar sem perder pesquisa

1. Leia identidade, versão, referência de distribuição e manifesto de integridade do pacote recebido. Inspecione
   arquivos e licença antes de executar. Compare com a revisão instalada; não confunda tag prevista com publicação.
2. Mantenha credenciais, corpus, evidências e eventos privados fora da instalação. Nunca inclua esses dados em ZIP
   de distribuição. Atualização não troca a chave, reinicializa estado nem apaga dados da pessoa.
3. Guarde a versão anterior do código e instale a nova em outra pasta ou pelo mecanismo reversível do hospedeiro.
   Confira integridade, dependências e `doctor`; valide o comportamento relevante antes de substituir a versão ativa.
4. Confira compatibilidade dos checkpoints antes de retomar. Se contrato/schema mudou sem migração suportada,
   preserve a rodada anterior e abra outra. Não recalcule resultados antigos silenciosamente.
5. Para voltar à versão anterior, restaure somente código/pacote e seu ambiente de dependências correspondente.
   Preserve corpus, checkpoints, recibos e credenciais. Registre qual versão produziu cada rodada.

O prazo editorial em `conhecimento.okf.md` é política de revisão. Usar, instalar ou atualizar dependência
não renova esse prazo. Revise fontes e comportamento antes de registrar uma renovação.

## Dependências e fontes públicas

O [arquivo de dependências](../requirements.txt) declara bibliotecas; registre versões efetivas na execução.
JevCloud é serviço externo da conta da pessoa e seu uso não está incluído na licença do pacote. Consulte
[a documentação oficial](https://docs.typesafe.ai/introduction/quickstart) e
[o contrato público da API](https://docs.typesafe.ai/api) ao revisar a integração.
Para coleta, consulte [o projeto yt-dlp](https://github.com/yt-dlp/yt-dlp).
As condições e licenças desses componentes são próprias. O código e as instruções autorais deste pacote
seguem a [licença MIT](../LICENSE).
