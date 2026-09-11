# QA da leitura pública

11/09/2026. Navegador real integrado, servidor local exclusivo na porta 8898. Capturas antes/depois conferidas na tarefa nas larguras 1440 × 900, 768 × 1000 e 390 × 844.

| Cenário | Antes | Depois |
| --- | --- | --- |
| Acervo `#ler` nas três larguras | Perguntas de entrada | Capas de Hormozi e Dia 22, acesso imediato |
| Link compartilhado de Hormozi em aba nova | Vinheta e onboarding | Ficha em Para o humano, sem perguntas |
| Dia 22 aberto pelo acervo | Depende do guia | Capa e texto aprovados no leitor comum |
| Aba Usar a skill, sem guia | Leitura indisponível | Convite para escolher o caminho |
| Concluir guia iniciado na leitura | Destino depende da rota | Retorna à skill escolhida e ao instalador |

Conferidos: capítulos de Hormozi no celular, tema Papel, diálogo Compartilhar sem enviar mensagens, dois Escapes retornando ao acervo, busca restrita a Atomic, catálogo ainda oferecendo o guia e link Ler livremente voltando ao acervo. Recarregar no meio do guia preservou o destino Dia 22. Enter em Ler livremente na vinheta abriu o acervo e focou seu título.

A suíte Node cobre ainda leitura futura registrada, slug inexistente, skill sem leitura, pré-requisitos pendentes, ausência de controles de instalação antes do guia, armazenamento indisponível, consumo do destino e ausência de vinheta/escrita de estado no boot editorial. Não houve simulação de publicação no WhatsApp/Instagram.

88 testes públicos aprovados, com uma omissão preexistente. Sintaxe sem erros; 52 skills validadas e scanner sem bloqueios; geração de docs/catalog sem diff. Não houve alteração de texto editorial, comandos, capa ou assets.
