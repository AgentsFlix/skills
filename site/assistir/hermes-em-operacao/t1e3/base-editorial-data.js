/* Six-stage base: research runs before the audience synthesis. */
globalThis.ECFBaseStages = [
  {
    "n": 1,
    "title": "ENTENDER O NEGÓCIO",
    "short": "Negócio",
    "question": "O que seu negócio oferece?",
    "guidance": "Escolha o que mais se aproxima. Você não precisa ter tudo definido.",
    "options": [
      {
        "title": "Produtos",
        "description": "Itens físicos ou digitais."
      },
      {
        "title": "Serviços",
        "description": "Atendimento, execução ou acesso contínuo."
      },
      {
        "title": "Produtos e serviços",
        "description": "Uma combinação dos dois."
      }
    ],
    "first": "Como você explicaria o que faz para alguém que acabou de conhecer?",
    "result": "Um retrato do negócio, das ofertas existentes e do objetivo no Instagram.",
    "criterion": "Consigo ler o resumo e dizer: é isso que eu faço.",
    "technical": "Comece com hybrid-perfil, obtida do GitHub. Se eu já tiver documentos ou site e houver ferramentas adequadas, use hybrid-etl apenas para extrair o material fornecido e evitar perguntas repetidas. Trabalhe o recorte de negócio e oferta atual, sem iniciar o pipeline completo de fundador, time e preço. Preserve os registros gerados pela skill e derive negocio.md para esta jornada.",
    "inputs": "Nenhum documento anterior. Conversa e materiais oferecidos pelo aluno.",
    "skills": [
      "hybrid-perfil",
      "hybrid-etl"
    ],
    "paths": [
      "01-negocio/negocio.md"
    ],
    "prompt": "ETAPA 1 DE 6 · ENTENDER O NEGÓCIO\n\nEstou construindo a base do meu negócio para criar conteúdo no Instagram com o método ECF: Creator, Expert e Founder.\nPonto de partida: [PONTO DE PARTIDA]\nMeu contexto adicional: [CONTEXTO ADICIONAL]\nContinuidade: [CONTINUIDADE]\n\nCOMO CONDUZIR\nSou iniciante em marketing. Faça UMA pergunta por mensagem e espere minha resposta. Use o histórico disponível e os documentos fornecidos; pergunte só o que falta. Não presuma acesso à minha memória, outras conversas, arquivos ou Drive. Se eu não souber, ajude com exemplos e registre a lacuna, sem responder por mim. Separe fatos informados, hipóteses, propostas e decisões aprovadas.\n\nCarregue as skills e suas referências diretamente do GitHub, conforme o bloco OBTER AS SKILLS NO GITHUB ANTES DE COMEÇAR. A ausência de instalação local não impede a leitura e aplicação dos procedimentos. Respeite os critérios da skill usada; se trabalhar apenas uma parte, mantenha seu status parcial. Não execute pipelines completos, comandos legados ou etapas seguintes por conta própria.\n\nSKILLS E RECORTE\nComece com hybrid-perfil, obtida do GitHub. Se eu já tiver documentos ou site e houver ferramentas adequadas, use hybrid-etl apenas para extrair o material fornecido e evitar perguntas repetidas. Trabalhe o recorte de negócio e oferta atual, sem iniciar o pipeline completo de fundador, time e preço. Preserve os registros gerados pela skill e derive negocio.md para esta jornada.\n\nENTRADAS\nNenhum documento anterior. Conversa e materiais oferecidos pelo aluno.\nSe uma entrada necessária estiver ausente, peça o documento ou uma síntese. Não use hipóteses silenciosas para substituir essa entrada.\n\nMISSÃO\nExtraia da minha memória o que o negócio oferece, como funciona a entrega, quem já compra ou poderia comprar, estágio atual, diferenciais percebidos e o que desejo conseguir com o Instagram. Conhecimento pode ser produto, serviço ou ambos; não force categorias. Peça um exemplo concreto de uma oferta. Não invente preços, resultados ou uma oferta nova.\n\nENTREGA DA JORNADA\nPrepare negocio.md. Os documentos Markdown revisados e aprovados são a fonte de leitura do agente de conteúdo desta jornada. Preserve os arquivos nativos da skill como registros de origem, com caminho e versão. Reconcile divergências comigo antes de sobrescrever documentos; não presuma sincronização entre Markdown e YAML.\n\nMostre uma síntese para eu corrigir antes de consolidar. Registre data, versão, status, fontes e pendências. Critério desta etapa: Consigo ler o resumo e dizer: é isso que eu faço.\nSe esse critério não for atendido, explique o que falta e mantenha a etapa parcial. Não confunda critério da jornada com conclusão integral da skill nativa.\n\nEntregue o conteúdo pronto para salvar. Salve em uma pasta por negócio somente se houver ferramenta e acesso ao destino; caso contrário entregue o texto completo. Só diga que salvou após confirmar sucesso. A revisão dos documentos e a confirmação de salvamento são distintas de autorizar uma publicação.\n\nAo encerrar, devolva um bloco CONTEXTO PARA A PRÓXIMA ETAPA com: negócio; etapa e estado; modo ou skill usada; documentos e versões; decisões acumuladas; hipóteses e fontes; pendências; registros de origem; o que foi salvo e onde; o que foi apenas entregue em texto; próxima etapa e entradas necessárias.\n\nComece pela primeira pergunta útil, sem repetir uma já respondida. Sugestão: “Como você explicaria o que faz para alguém que acabou de conhecer?”",
    "id": "negocio"
  },
  {
    "n": 2,
    "title": "PESQUISAR O PÚBLICO",
    "short": "Pesquisa",
    "question": "Como a pesquisa deve começar?",
    "guidance": "O Hermes faz a coleta. Você pode apenas indicar um atalho.",
    "options": [
      {
        "title": "Descubra por mim",
        "description": "O Hermes encontra vídeos, fóruns e conversas públicas."
      },
      {
        "title": "Tenho canais em mente",
        "description": "Use meus links como sementes e amplie a busca."
      },
      {
        "title": "Tenho material coletado",
        "description": "Audite a procedência e pesquise o que estiver faltando."
      }
    ],
    "first": "Leia negocio.md, planeje as consultas e comece a pesquisa pública.",
    "result": "Um corpus de linguagem real, fontes reabríveis e padrões sustentados por evidência.",
    "criterion": "Tenho evidências públicas suficientes para construir o público sem inventar falas.",
    "technical": "Use copy-pesquisa-avatar e abra references/pesquisa-publica-profissional.md. Use maton-operations para buscar vídeos públicos e paginar comentários do YouTube quando houver conexão ativa. Se Maton estiver indisponível, prossiga com yt-dlp e depois com navegação pública. Zernio pode complementar com comentários da audiência própria, mas não substitui a descoberta de mercado.",
    "inputs": "negocio.md revisado ou aprovado, com oferta, problema e público ou hipótese identificados.",
    "skills": [
      "copy-pesquisa-avatar",
      "maton-operations"
    ],
    "paths": [
      "02-publico/pesquisa-publico.md",
      "02-publico/pesquisas/"
    ],
    "prompt": "ETAPA 2 DE 6 · PESQUISAR O PÚBLICO\n\nEstou construindo a base do meu negócio para criar conteúdo no Instagram com o método ECF: Creator, Expert e Founder.\nPonto de partida: [PONTO DE PARTIDA]\nMeu contexto adicional: [CONTEXTO ADICIONAL]\nContinuidade: [CONTINUIDADE]\n\nCOMO CONDUZIR\nEsta é uma tarefa de pesquisa pública executada por você. Leia primeiro negocio.md e os documentos importados. Não me peça mensagens, prints, reviews ou comentários como primeira rota. Se o negócio não delimitar o mercado, país ou idioma, faça apenas UMA pergunta bloqueante; caso contrário comece a coleta. Material que eu fornecer é complemento opcional.\n\nCarregue as skills e suas referências diretamente do GitHub, conforme o bloco OBTER AS SKILLS NO GITHUB ANTES DE COMEÇAR. A ausência de instalação local não impede a leitura e aplicação dos procedimentos. Não publique, responda, modere, siga, curta ou altere dados externos. Use somente leitura.\n\nSKILLS E RECORTE\nUse copy-pesquisa-avatar e abra obrigatoriamente references/pesquisa-publica-profissional.md. Use maton-operations para inventariar a conexão e acessar o YouTube quando estiver disponível. Trabalhe somente a coleta pública e sua análise; a construção do ICP pertence à etapa seguinte.\n\nENTRADAS\nnegocio.md revisado ou aprovado, com oferta, problema e público ou hipótese identificados.\nSe a entrada estiver ausente, peça o documento ou uma síntese. Não substitua o negócio por um nicho inventado.\n\nMISSÃO\nPesquise como o público daquele negócio descreve problemas, tentativas, desejos, objeções, alternativas e situações de decisão. Priorize comentários do YouTube e depois Reddit ou fóruns específicos. No YouTube, execute a cascata: Maton com conexão ativa para pesquisar vídeos públicos e paginar comentários; se indisponível, yt-dlp em modo de metadados e comentários sem baixar vídeos; depois navegação pública. Uma falha leva à próxima rota e nunca encerra sozinha a pesquisa. Use Zernio apenas como complemento opcional para comentários de contas próprias já conectadas. Não leia DMs.\n\nColete de 30 a 50 trechos literais únicos. O mínimo para considerar a amostra suficiente é 20. Cubra pelo menos duas famílias de fonte e quatro artefatos públicos distintos, preferencialmente dois por família, sem deixar um único artefato representar mais de 40% do corpus. Se isso não for possível, entregue o que foi verificado com status precisa_revisar e a lacuna exata.\n\nCada trecho precisa de ID anônimo, frase literal, família, título do artefato, URL pública reabrível, data de coleta, consulta de origem, contexto e rótulos. Exclua duplicatas, spam, elogios genéricos, texto do vendedor e falas sem relação com a decisão. Transcript serve somente como contexto e não conta como voz do público. Separe citação literal, padrão observado, inferência, hipótese e texto ilustrativo.\n\nCHECKPOINTS E RETOMADA\nDepois de cada fonte ou lote, salve em 02-publico/pesquisas/ as consultas, URLs avaliadas, evidências aceitas, descartes e próximo passo. Após compactação, retome desses arquivos e de next_context. Só diga que uma coleta está em execução quando houver processo ou chamada real em andamento.\n\nENTREGA DA JORNADA\nPrepare pesquisa-publico.md com alvo, recibo da coleta, cobertura, corpus, temas ranqueados, vocabulário, objeções, inferências, hipóteses, limites e instruções para o ICP. Preserve os checkpoints úteis. Mostre uma síntese curta para correção, mas não transforme a revisão em autorização para publicar ou interagir nas fontes.\n\nCritério desta etapa: Tenho evidências públicas suficientes para construir o público sem inventar falas. Marque revisado somente quando os critérios mínimos e a procedência estiverem completos. Caso contrário use precisa_revisar e diga exatamente o que falta.\n\nEntregue o conteúdo pronto para salvar e confirme por leitura real o que foi gravado. Ao encerrar, devolva CONTEXTO PARA A PRÓXIMA ETAPA com: negócio; alvo; consultas; rotas usadas; cobertura; fontes; evidências aceitas; descartes; hipóteses; limites; checkpoints; o que foi salvo e onde; e entrada pronta para Público.\n\nComece lendo negocio.md e montando o plano de consultas. Não abra uma entrevista se o alvo já estiver delimitado.",
    "id": "pesquisa"
  },
  {
    "n": 3,
    "title": "CONHECER O PÚBLICO",
    "short": "Público",
    "question": "Quem merece sua atenção primeiro?",
    "guidance": "A pesquisa trouxe sinais. Agora transforme evidência em uma escolha de público.",
    "options": [
      {
        "title": "Já tenho clientes",
        "description": "Vamos partir das conversas reais."
      },
      {
        "title": "Tenho um público em mente",
        "description": "Vamos investigar essa hipótese."
      },
      {
        "title": "Ainda não sei",
        "description": "Vamos descobrir um ponto de partida."
      }
    ],
    "first": "Leia a pesquisa e mostre os recortes de público sustentados pelas evidências.",
    "result": "Um público prioritário, suas necessidades e as hipóteses que ainda precisam de evidência.",
    "criterion": "Reconheço para quem vou falar e sei o que ainda é hipótese.",
    "technical": "Use hybrid-icp para transformar negocio.md e pesquisa-publico.md em um público prioritário. Use copy-pesquisa-avatar apenas para interpretar o corpus e preservar a procedência. Não repita a coleta pública nem peça ao usuário que forneça mensagens já substituídas pelo dossiê.",
    "inputs": "negocio.md e pesquisa-publico.md revisados, com fontes, evidências e limites identificados.",
    "skills": [
      "hybrid-icp",
      "copy-pesquisa-avatar"
    ],
    "paths": [
      "02-publico/publico.md"
    ],
    "prompt": "ETAPA 3 DE 6 · CONHECER O PÚBLICO\n\nEstou construindo a base do meu negócio para criar conteúdo no Instagram com o método ECF: Creator, Expert e Founder.\nPonto de partida: [PONTO DE PARTIDA]\nMeu contexto adicional: [CONTEXTO ADICIONAL]\nContinuidade: [CONTINUIDADE]\n\nCOMO CONDUZIR\nLeia negocio.md e pesquisa-publico.md antes de perguntar. Esta etapa interpreta a pesquisa já feita; não repita a coleta pública e não me peça mensagens, prints ou entrevistas que não sejam indispensáveis para uma decisão. Se houver mais de um recorte de público sustentado, apresente as opções com as evidências correspondentes e faça UMA pergunta de escolha. Separe fatos, padrões observados, inferências, hipóteses, propostas e decisões aprovadas.\n\nCarregue as skills e suas referências diretamente do GitHub, conforme o bloco OBTER AS SKILLS NO GITHUB ANTES DE COMEÇAR. A ausência de instalação local não impede a leitura e aplicação dos procedimentos. Respeite os limites da amostra e preserve os IDs e URLs das evidências usadas.\n\nSKILLS E RECORTE\nUse hybrid-icp para construir o público prioritário. Use copy-pesquisa-avatar apenas para interpretar o corpus, vocabulário, dores, desejos, objeções, alternativas e situações de decisão. Não promova inferências a fatos e não invente demografia, renda, tamanho de mercado ou falas.\n\nENTRADAS\nnegocio.md e pesquisa-publico.md revisados, com fontes, evidências e limites identificados.\nSe uma entrada estiver ausente, peça o arquivo correspondente. Pesquisa abaixo do mínimo continua utilizável como parcial, desde que suas limitações estejam registradas.\n\nMISSÃO\nCruze o que o negócio oferece com os padrões observados na pesquisa. Proponha um público prioritário e, quando necessário, um público secundário. Para cada escolha, mostre situação, problema, desejo, alternativas atuais, critérios de decisão, objeções e linguagem literal, sempre apontando os IDs de evidência. Dados não sustentados ficam como hipótese ou desconhecido. Não faça nova pesquisa nesta etapa.\n\nENTREGA DA JORNADA\nPrepare publico.md com: público prioritário; contexto e situação; problema; relação com a oferta; desejos; alternativas; critérios de decisão; objeções; linguagem literal; exclusões; mapa de origem; hipóteses; lacunas; e próximo passo. Referencie pesquisa-publico.md sem duplicar todo o corpus.\n\nMostre a síntese para eu corrigir antes de consolidar. Critério desta etapa: Reconheço para quem vou falar e sei o que ainda é hipótese. Se o critério não for atendido, mantenha precisa_revisar e diga qual decisão ou evidência falta.\n\nEntregue o conteúdo pronto para salvar. Só diga que salvou após uma leitura real do arquivo. Ao encerrar, devolva CONTEXTO PARA A PRÓXIMA ETAPA com: negócio; público escolhido; evidências usadas; decisões; hipóteses; limites; pendências; arquivos e versões; e entrada necessária para Posicionamento.\n\nComece apresentando os recortes de público que a pesquisa sustenta. Só pergunte quando a escolha mudar a entrega.",
    "id": "publico"
  },
  {
    "n": 4,
    "title": "DEFINIR O POSICIONAMENTO",
    "short": "Posicionamento",
    "question": "Por que alguém escolheria seu negócio?",
    "guidance": "Escolha uma pista. O agente vai ajudar a transformá-la numa proposta clara.",
    "options": [
      {
        "title": "Pelo resultado",
        "description": "O que a pessoa consegue com você."
      },
      {
        "title": "Pelo jeito de fazer",
        "description": "Seu método, cuidado ou experiência."
      },
      {
        "title": "Ainda não sei",
        "description": "Vamos encontrar motivos concretos."
      }
    ],
    "first": "O que você faz de um jeito que seus clientes valorizam?",
    "result": "Uma proposta clara, diferenciais sustentados e limites do que a marca promete.",
    "criterion": "Eu usaria essa explicação para apresentar meu negócio.",
    "technical": "Use hybrid-marca, obtida do GitHub, trabalhando posicionamento, promessas, diferenciais e mensagens. Guarde o estado parcial da skill para continuar a voz na etapa seguinte. Não solicite toda a elicitação de marca novamente na etapa 5. Trate a escolha de posicionamento como decisão minha; fundamentos sem evidência continuam como hipótese.",
    "inputs": "negocio.md e publico.md.",
    "skills": [
      "hybrid-marca"
    ],
    "paths": [
      "01-negocio/posicionamento.md"
    ],
    "prompt": "ETAPA 4 DE 6 · DEFINIR O POSICIONAMENTO\n\nEstou construindo a base do meu negócio para criar conteúdo no Instagram com o método ECF: Creator, Expert e Founder.\nPonto de partida: [PONTO DE PARTIDA]\nMeu contexto adicional: [CONTEXTO ADICIONAL]\nContinuidade: [CONTINUIDADE]\n\nCOMO CONDUZIR\nSou iniciante em marketing. Faça UMA pergunta por mensagem e espere minha resposta. Use o histórico disponível e os documentos fornecidos; pergunte só o que falta. Não presuma acesso à minha memória, outras conversas, arquivos ou Drive. Se eu não souber, ajude com exemplos e registre a lacuna, sem responder por mim. Separe fatos informados, hipóteses, propostas e decisões aprovadas.\n\nCarregue as skills e suas referências diretamente do GitHub, conforme o bloco OBTER AS SKILLS NO GITHUB ANTES DE COMEÇAR. A ausência de instalação local não impede a leitura e aplicação dos procedimentos. Respeite os critérios da skill usada; se trabalhar apenas uma parte, mantenha seu status parcial. Não execute pipelines completos, comandos legados ou etapas seguintes por conta própria.\n\nSKILLS E RECORTE\nUse hybrid-marca, obtida do GitHub, trabalhando posicionamento, promessas, diferenciais e mensagens. Guarde o estado parcial da skill para continuar a voz na etapa seguinte. Não solicite toda a elicitação de marca novamente na etapa 5. Trate a escolha de posicionamento como decisão minha; fundamentos sem evidência continuam como hipótese.\n\nENTRADAS\nnegocio.md e publico.md.\nSe uma entrada necessária estiver ausente, peça o documento ou uma síntese. Não use hipóteses silenciosas para substituir essa entrada.\n\nMISSÃO\nLeia negocio.md e publico.md ou solicite os resumos ausentes. Investigue motivos de escolha, alternativas, diferenciais verificáveis e provas disponíveis. Proponha formas simples de explicar para quem o negócio existe, que problema resolve e por que escolhê-lo. Faça-me escolher e corrigir antes de consolidar. Não invente exclusividade, superioridade, garantias ou mudanças de oferta.\n\nENTREGA DA JORNADA\nPrepare posicionamento.md. Os documentos Markdown revisados e aprovados são a fonte de leitura do agente de conteúdo desta jornada. Preserve os arquivos nativos da skill como registros de origem, com caminho e versão. Reconcile divergências comigo antes de sobrescrever documentos; não presuma sincronização entre Markdown e YAML.\n\nMostre uma síntese para eu corrigir antes de consolidar. Registre data, versão, status, fontes e pendências. Critério desta etapa: Eu usaria essa explicação para apresentar meu negócio.\nSe esse critério não for atendido, explique o que falta e mantenha a etapa parcial. Não confunda critério da jornada com conclusão integral da skill nativa.\n\nEntregue o conteúdo pronto para salvar. Salve em uma pasta por negócio somente se houver ferramenta e acesso ao destino; caso contrário entregue o texto completo. Só diga que salvou após confirmar sucesso. A revisão dos documentos e a confirmação de salvamento são distintas de autorizar uma publicação.\n\nAo encerrar, devolva um bloco CONTEXTO PARA A PRÓXIMA ETAPA com: negócio; etapa e estado; modo ou skill usada; documentos e versões; decisões acumuladas; hipóteses e fontes; pendências; registros de origem; o que foi salvo e onde; o que foi apenas entregue em texto; próxima etapa e entradas necessárias.\n\nComece pela primeira pergunta útil, sem repetir uma já respondida. Sugestão: “O que você faz de um jeito que seus clientes valorizam?”",
    "id": "posicionamento"
  },
  {
    "n": 5,
    "title": "ENCONTRAR A VOZ",
    "short": "Voz",
    "question": "Como você quer soar nas postagens?",
    "guidance": "É um ponto de partida. Exemplos vão ajudar você a escolher o tom.",
    "options": [
      {
        "title": "Próximo e acolhedor",
        "description": "Como uma conversa que ajuda."
      },
      {
        "title": "Claro e didático",
        "description": "Como quem explica sem complicar."
      },
      {
        "title": "Direto e provocador",
        "description": "Como quem faz pensar e agir."
      }
    ],
    "first": "Como você responderia a uma dúvida comum de um cliente? Escreva ou mande um áudio, se seu agente aceitar.",
    "result": "Regras de escrita com exemplos que realmente parecem com a marca.",
    "criterion": "Eu me reconheço nos exemplos e consigo apontar o que não combina.",
    "technical": "Continue hybrid-marca a partir da etapa 4, carregando a skill do GitHub e retomando os documentos existentes. Se houver amostras suficientes, confira os requisitos atuais de copy-voz antes de usá-la; a referência de DNA inspecionada exige pelo menos 20 arquivos de origem. Sem esse acervo, faça a entrevista e valide exemplos comigo, registrando que é uma voz inicial proposta, não um DNA extraído de corpus suficiente. A voz final deve ser a do negócio, sem impor o estilo de um copywriter.",
    "inputs": "negocio.md, publico.md, posicionamento.md; amostras de voz quando existirem.",
    "skills": [
      "hybrid-marca",
      "copy-voz"
    ],
    "paths": [
      "03-voz/voz.md",
      "03-voz/exemplos-aprovados.md"
    ],
    "prompt": "ETAPA 5 DE 6 · ENCONTRAR A VOZ\n\nEstou construindo a base do meu negócio para criar conteúdo no Instagram com o método ECF: Creator, Expert e Founder.\nPonto de partida: [PONTO DE PARTIDA]\nMeu contexto adicional: [CONTEXTO ADICIONAL]\nContinuidade: [CONTINUIDADE]\n\nCOMO CONDUZIR\nSou iniciante em marketing. Faça UMA pergunta por mensagem e espere minha resposta. Use o histórico disponível e os documentos fornecidos; pergunte só o que falta. Não presuma acesso à minha memória, outras conversas, arquivos ou Drive. Se eu não souber, ajude com exemplos e registre a lacuna, sem responder por mim. Separe fatos informados, hipóteses, propostas e decisões aprovadas.\n\nCarregue as skills e suas referências diretamente do GitHub, conforme o bloco OBTER AS SKILLS NO GITHUB ANTES DE COMEÇAR. A ausência de instalação local não impede a leitura e aplicação dos procedimentos. Respeite os critérios da skill usada; se trabalhar apenas uma parte, mantenha seu status parcial. Não execute pipelines completos, comandos legados ou etapas seguintes por conta própria.\n\nSKILLS E RECORTE\nContinue hybrid-marca a partir da etapa 4, carregando a skill do GitHub e retomando os documentos existentes. Se houver amostras suficientes, confira os requisitos atuais de copy-voz antes de usá-la; a referência de DNA inspecionada exige pelo menos 20 arquivos de origem. Sem esse acervo, faça a entrevista e valide exemplos comigo, registrando que é uma voz inicial proposta, não um DNA extraído de corpus suficiente. A voz final deve ser a do negócio, sem impor o estilo de um copywriter.\n\nENTRADAS\nnegocio.md, publico.md, posicionamento.md; amostras de voz quando existirem.\nSe uma entrada necessária estiver ausente, peça o documento ou uma síntese. Não use hipóteses silenciosas para substituir essa entrada.\n\nMISSÃO\nLeia a base anterior ou peça seus resumos. Colete amostras da minha fala ou escrita, sem presumir acesso a áudios. Diferencie meu jeito pessoal da voz desejada para a marca. Mostre versões curtas da mesma mensagem para eu escolher e ajustar. Extraia vocabulário, ritmo, humor, nível de formalidade, uso de emojis, palavras evitadas e variação de tom por situação. A escolha inicial não é uma personalidade definitiva. Registre exemplos aprovados e exemplos a evitar.\n\nENTREGA DA JORNADA\nPrepare os conteúdos de 03-voz/voz.md e 03-voz/exemplos-aprovados.md dentro de documents[] do arquivo final voz.json. Não entregue nenhum .md separado como resultado final. Os documentos Markdown revisados e aprovados são a fonte de leitura do agente de conteúdo desta jornada. Preserve os arquivos nativos da skill como registros de origem, com caminho e versão. Reconcile divergências comigo antes de sobrescrever documentos; não presuma sincronização entre Markdown e YAML.\n\nMostre uma síntese para eu corrigir antes de consolidar. Registre data, versão, status, fontes e pendências. Critério desta etapa: Eu me reconheço nos exemplos e consigo apontar o que não combina.\nSe esse critério não for atendido, explique o que falta e mantenha a etapa parcial. Não confunda critério da jornada com conclusão integral da skill nativa.\n\nSalve cópias Markdown no workspace autorizado somente se houver ferramenta e acesso ao destino. Se não puder salvar localmente, mantenha seus conteúdos apenas em documents[] do voz.json. Só diga que salvou após confirmar sucesso. A resposta final para o usuário deve conter apenas voz.json; a revisão dos documentos e a confirmação de salvamento são distintas de autorizar uma publicação.\n\nAo encerrar, preencha next_context dentro do voz.json com: negócio; etapa e estado; modo ou skill usada; documentos e versões; decisões acumuladas; hipóteses e fontes; pendências; registros de origem; o que foi salvo e onde; próxima etapa e entradas necessárias. Não devolva esse contexto fora do JSON.\n\nComece pela primeira pergunta útil, sem repetir uma já respondida. Sugestão: “Como você responderia a uma dúvida comum de um cliente? Escreva ou mande um áudio, se seu agente aceitar.”",
    "id": "voz"
  },
  {
    "n": 6,
    "title": "REUNIR MATÉRIA-PRIMA",
    "short": "Matéria-prima",
    "question": "De onde pode sair seu conteúdo?",
    "guidance": "Pode haver mais de uma fonte. Escolha por onde começar.",
    "options": [
      {
        "title": "Da minha experiência",
        "description": "Histórias, métodos e bastidores."
      },
      {
        "title": "De materiais que já tenho",
        "description": "Documentos, aulas, textos ou catálogos."
      },
      {
        "title": "Preciso de ajuda para lembrar",
        "description": "Vamos começar pelas dúvidas do dia a dia."
      }
    ],
    "first": "Qual dúvida sobre seu trabalho você já respondeu mais de uma vez?",
    "result": "Assuntos, explicações e evidências que o agente pode transformar em conteúdo.",
    "criterion": "Há matéria-prima concreta para produzir além de dicas genéricas.",
    "technical": "Reutilize extrações já feitas, sem duplicá-las. Use hybrid-etl para materiais acessíveis e sop-extrair quando houver um processo ou método que eu consiga explicar. Limite o trabalho à matéria-prima relevante para os posts; não dispare o pipeline inteiro de extração de empresa. Consolide um índice de histórias, perguntas, métodos, exemplos e provas com fonte e permissão de uso.",
    "inputs": "Documentos anteriores e materiais efetivamente fornecidos.",
    "skills": [
      "hybrid-etl",
      "sop-extrair"
    ],
    "paths": [
      "04-conhecimento/conhecimento.md",
      "04-conhecimento/fontes/"
    ],
    "prompt": "ETAPA 6 DE 6 · REUNIR MATÉRIA-PRIMA\n\nEstou construindo a base do meu negócio para criar conteúdo no Instagram com o método ECF: Creator, Expert e Founder.\nPonto de partida: [PONTO DE PARTIDA]\nMeu contexto adicional: [CONTEXTO ADICIONAL]\nContinuidade: [CONTINUIDADE]\n\nCOMO CONDUZIR\nSou iniciante em marketing. Faça UMA pergunta por mensagem e espere minha resposta. Use o histórico disponível e os documentos fornecidos; pergunte só o que falta. Não presuma acesso à minha memória, outras conversas, arquivos ou Drive. Se eu não souber, ajude com exemplos e registre a lacuna, sem responder por mim. Separe fatos informados, hipóteses, propostas e decisões aprovadas.\n\nCarregue as skills e suas referências diretamente do GitHub, conforme o bloco OBTER AS SKILLS NO GITHUB ANTES DE COMEÇAR. A ausência de instalação local não impede a leitura e aplicação dos procedimentos. Respeite os critérios da skill usada; se trabalhar apenas uma parte, mantenha seu status parcial. Não execute pipelines completos, comandos legados ou etapas seguintes por conta própria.\n\nSKILLS E RECORTE\nReutilize extrações já feitas, sem duplicá-las. Use hybrid-etl para materiais acessíveis e sop-extrair quando houver um processo ou método que eu consiga explicar. Limite o trabalho à matéria-prima relevante para os posts; não dispare o pipeline inteiro de extração de empresa. Consolide um índice de histórias, perguntas, métodos, exemplos e provas com fonte e permissão de uso.\n\nENTRADAS\nDocumentos anteriores e materiais efetivamente fornecidos.\nSe uma entrada necessária estiver ausente, peça o documento ou uma síntese. Não use hipóteses silenciosas para substituir essa entrada.\n\nMISSÃO\nConsulte a base anterior. Ajude-me a lembrar perguntas frequentes, métodos, exemplos, histórias, produtos, demonstrações e resultados documentados. Explore uma fonte de cada vez. Se eu mencionar arquivos ou links, peça o material necessário, sem alegar ter lido o que não acessou. Separe fatos, opiniões e hipóteses; registre fontes e permissões de uso de casos. Não invente depoimentos, estatísticas ou resultados. Liste lacunas de conteúdo.\n\nENTREGA DA JORNADA\nPrepare um único item em documents[] com path 04-conhecimento/conhecimento.md. Incorpore no content desse item o conteúdo útil das fontes e extrações; mantenha os arquivos auxiliares apenas no workspace do Hermes. O nome conhecimento.json não pertence ao contrato desta etapa: não gere esse arquivo. Não entregue nenhum .md separado como resultado final. Os documentos Markdown revisados e aprovados são a fonte de leitura do agente de conteúdo desta jornada. Preserve os arquivos nativos da skill como registros de origem, com caminho e versão. Reconcile divergências comigo antes de sobrescrever documentos; não presuma sincronização entre Markdown e YAML.\n\nMostre uma síntese para eu corrigir antes de consolidar. Registre data, versão, status, fontes e pendências. Critério desta etapa: Há matéria-prima concreta para produzir além de dicas genéricas.\nSe esse critério não for atendido, explique o que falta e mantenha a etapa parcial. Não confunda critério da jornada com conclusão integral da skill nativa.\n\nSalve cópias Markdown no workspace autorizado somente se houver ferramenta e acesso ao destino. Se não puder salvar localmente, mantenha seus conteúdos apenas em documents[] do materia-prima.json. Só diga que salvou após confirmar sucesso. A resposta final para o usuário deve conter apenas materia-prima.json; a revisão dos documentos e a confirmação de salvamento são distintas de autorizar uma publicação.\n\nAo encerrar, preencha next_context dentro do materia-prima.json com: negócio; etapa e estado; modo ou skill usada; documentos e versões; decisões acumuladas; hipóteses e fontes; pendências; registros de origem; o que foi salvo e onde. Não devolva esse contexto fora do JSON.\n\nComece pela primeira pergunta útil, sem repetir uma já respondida. Sugestão: “Qual dúvida sobre seu trabalho você já respondeu mais de uma vez?”",
    "id": "materia-prima"
  }
];
