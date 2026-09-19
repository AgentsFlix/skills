(function () {
  "use strict";

  // Itens intercalados entre dimensões para não agrupar respostas semelhantes.
  function interleave(groups) {
    const items = [];
    const keys = Object.keys(groups);
    for (let i = 0; i < Math.max(...keys.map(key => groups[key].length)); i += 1) {
      keys.forEach(key => {
        const item = groups[key][i];
        if (item) items.push({ dimension: key, text: item[0], reverse: Boolean(item[1]) });
      });
    }
    return items.map((item, i) => ({ id: i + 1, ...item }));
  }

  const learning = window.AgentFlixLearningData;
  const learningPractice = {
    HI: ["Escolha uma habilidade e uma referência confiável. Divida a prática em etapas e procure feedback sobre uma tentativa concreta.", "Onde a orientação ajuda? Em que momento você já consegue escolher o próximo passo sozinho?"],
    HC: ["Combine um objetivo comum, responsabilidades e um momento de troca com seu grupo. Use uma pessoa experiente para orientar a prática.", "As regras do grupo ajudam todos a participar? Que vozes ainda faltam na conversa?"],
    DI: ["Escolha uma pergunta que tenha sentido para você. Faça um pequeno projeto e defina como reconhecerá que aprendeu algo.", "Como você vai testar seu entendimento e receber uma perspectiva diferente da sua?"],
    DC: ["Leve uma dúvida concreta a uma rede de pessoas. Compare fontes, construa algo em conjunto e registre o que mudou em seu entendimento.", "Como distinguir uma boa troca de uma conversa que apenas confirma o que o grupo já pensa?"]
  };

  const assessments = {
    aprendizagem: {
      id: "aprendizagem", version: 1, number: "02", title: "Modos de aprendizagem", kind: "ranking", time: "5–7 min",
      intro: "Sete perguntas sobre o que significa aprender. Em cada uma, você ordena quatro afirmações por eliminação, considerando o que pensa hoje.",
      note: "Adaptação autoral do framework de Richard Elmore, associado ao curso Leaders of Learning de Harvard. O mapa ajuda a refletir sobre contextos de aprendizagem; não determina um estilo fixo ou o melhor método de ensino para você.",
      metric: "Os valores mostram a pontuação de cada modo em relação ao seu máximo de 63 pontos. São escalas separadas: as quatro porcentagens não somam 100%.",
      sources: [{ title: "Richard Elmore · Leaders of Learning", url: "https://www.harvardonline.harvard.edu/course/leaders-learning" }],
      dimensions: Object.entries(learning.profiles).map(([key, profile]) => ({ key, label: profile.name, description: profile.description, practice: learningPractice[key][0], question: learningPractice[key][1] })),
      items: learning.questions
    },
    acao: {
      id: "acao", version: 1, number: "03", title: "Modo de agir", kind: "likert", time: "4–6 min",
      intro: "Pense em situações em que você pode escolher como trabalhar. As 24 afirmações exploram como você busca informações, organiza, experimenta e torna ideias concretas.",
      note: "Exercício autoral AgentFlix de reflexão sobre ação, inspirado na ideia de conação. Não é o Kolbe A Index e não reproduz seus escores ou questionário. Cada extremo descreve uma maneira possível de agir.",
      metric: "Cada dimensão vai de 0 a 100 e descreve a direção das suas respostas entre dois polos. Não é percentil, medida de competência ou código Kolbe.",
      sources: [{ title: "Referência conceitual · Kolbe A Index", url: "https://www.kolbe.com/kolbe-a-index/" }],
      dimensions: [
        { key: "investigar", label: "Informação", low: "Visão geral", high: "Investigação detalhada", description: "Quanto detalhe você prefere reunir antes de avançar.", lowText: "Suas respostas favorecem começar com uma visão geral e buscar detalhes conforme a necessidade.", highText: "Suas respostas favorecem examinar fatos e critérios antes de avançar.", practice: "Antes da próxima tarefa, escreva quais três informações são indispensáveis e estabeleça um limite para a pesquisa.", question: "O detalhe que você está buscando mudará a próxima decisão?" },
        { key: "organizar", label: "Organização", low: "Ajuste no caminho", high: "Estrutura antecipada", description: "Como você distribui planejamento e adaptação ao longo do trabalho.", lowText: "Suas respostas favorecem organizar à medida que a situação evolui.", highText: "Suas respostas favorecem preparar etapas, sequências e critérios de acompanhamento.", practice: "Defina um próximo passo claro e um momento para revisar o plano, com espaço para o que surgir.", question: "Qual parte da tarefa precisa de estrutura e qual pode permanecer aberta?" },
        { key: "experimentar", label: "Incerteza", low: "Caminho conhecido", high: "Experimentação", description: "Como você lida com caminhos novos e informações incompletas.", lowText: "Suas respostas favorecem referências conhecidas e a redução de incertezas antes de mudar.", highText: "Suas respostas favorecem aprender com tentativas, mesmo sem ter todas as respostas.", practice: "Escolha um teste pequeno e reversível. Defina antes o que observar e quando interromper ou ampliar.", question: "Como tornar a próxima tentativa útil mesmo se a ideia não funcionar?" },
        { key: "concretizar", label: "Construção", low: "Representação conceitual", high: "Protótipo concreto", description: "O quanto você prefere desenvolver ideias por representações ou pelo contato com algo concreto.", lowText: "Suas respostas favorecem raciocinar com modelos, esquemas e representações antes de construir.", highText: "Suas respostas favorecem manipular, montar ou testar algo para entender como funciona.", practice: "Explique uma ideia com um esquema e depois produza a menor demonstração possível. Compare o que cada formato revelou.", question: "O que só ficará claro quando alguém puder experimentar a ideia?" }
      ],
      items: interleave({
        investigar: [
          ["Antes de iniciar uma tarefa nova, procuro entender os detalhes que podem afetar o resultado."],
          ["Consigo avançar com um resumo e buscar informações adicionais durante o trabalho.", true],
          ["Quando recebo uma orientação vaga, faço perguntas específicas antes de agir."],
          ["Prefiro uma visão geral a uma explicação detalhada para dar o primeiro passo.", true],
          ["Costumo comparar evidências de mais de uma fonte antes de escolher um caminho."],
          ["Investigar muitas possibilidades antes de começar costuma me atrapalhar.", true]
        ],
        organizar: [
          ["Gosto de definir a sequência das etapas antes de começar um projeto."],
          ["Prefiro organizar o trabalho conforme as necessidades aparecem.", true],
          ["Transformo uma tarefa recorrente em um processo que possa repetir."],
          ["Trabalho melhor quando posso mudar a ordem das etapas no momento.", true],
          ["Reservo tempo para preparar materiais, prazos e dependências."],
          ["Costumo deixar o plano aberto até descobrir o que a situação exige.", true]
        ],
        experimentar: [
          ["Quando não há uma resposta clara, proponho uma pequena tentativa para aprender."],
          ["Antes de adotar um caminho novo, prefiro ver como ele funcionou em situações parecidas.", true],
          ["Uma possibilidade ainda incerta costuma me dar vontade de testar."],
          ["Escolho métodos já conhecidos quando tenho liberdade para decidir.", true],
          ["Aceito revisar uma hipótese depois de colocar uma versão inicial em prática."],
          ["Prefiro reduzir as incógnitas antes de experimentar uma abordagem diferente.", true]
        ],
        concretizar: [
          ["Entendo melhor uma solução quando posso montar ou manipular uma versão dela."],
          ["Um esquema ou uma descrição costuma bastar para eu desenvolver uma ideia.", true],
          ["Ao enfrentar um problema, gosto de trabalhar diretamente com os materiais ou ferramentas envolvidos."],
          ["Prefiro explorar um modelo mental antes de construir qualquer demonstração.", true],
          ["Produzir um protótipo me ajuda a perceber detalhes que eu não antecipava."],
          ["Consigo imaginar como algo funcionará sem precisar experimentar uma versão concreta.", true]
        ]
      })
    },
    "big-five": {
      id: "big-five", version: 1, number: "04", title: "Big Five", kind: "likert", time: "7–10 min",
      intro: "Descreva como você geralmente é hoje, e não como gostaria de ser. Responda às 50 afirmações considerando seu comportamento em diferentes situações.",
      note: "Itens de domínio público do IPIP Big-Five Factor Markers, em tradução de trabalho para português feita para esta experiência. A tradução não foi validada em uma amostra brasileira. O resultado é descritivo, sem comparação com a população.",
      metric: "Cada fator tem 10 itens, soma de 10 a 50 e média de 1 a 5, com correção dos itens invertidos. A barra de 0 a 100 representa apenas a posição nessa escala; não é percentil nem probabilidade.",
      sources: [{ title: "IPIP · 50 itens abertos", url: "https://ipip.ori.org/New_IPIP-50-item-scale.htm" }, { title: "IPIP · chave de pontuação", url: "https://ipip.ori.org/newBigFive5broadKey.htm" }],
      dimensions: [
        { key: "E", label: "Extroversão", low: "Mais reserva", high: "Mais expressão social", description: "Frequência de iniciativa, expressão e envolvimento em situações sociais.", lowText: "Você relatou mais reserva e menor busca por exposição social.", highText: "Você relatou mais iniciativa e conforto em interações sociais.", practice: "Planeje uma conversa importante no formato que facilite sua participação: preparação por escrito, dupla ou grupo.", question: "Que situação social aumenta sua participação sem esgotar sua energia?" },
        { key: "A", label: "Amabilidade", low: "Menor orientação ao outro", high: "Maior orientação ao outro", description: "Atenção relatada aos sentimentos, necessidades e bem-estar de outras pessoas.", lowText: "Você relatou menor atenção habitual às necessidades alheias nesses itens. Observe o contexto antes de tirar conclusões.", highText: "Você relatou atenção frequente às pessoas e aos seus sentimentos.", practice: "Em uma conversa difícil, explicite sua necessidade e procure entender a da outra pessoa antes de propor um acordo.", question: "Como equilibrar consideração pelo outro e limites claros?" },
        { key: "C", label: "Conscienciosidade", low: "Menor estrutura habitual", high: "Maior estrutura habitual", description: "Regularidade, organização, cuidado e cumprimento de tarefas no autorrelato.", lowText: "Você relatou menos regularidade e estrutura nas situações descritas.", highText: "Você relatou organização e compromisso frequentes com as tarefas.", practice: "Escolha uma entrega pequena, escreva o critério de conclusão e reserve um horário realista para fazê-la.", question: "Qual apoio simples ajuda você a concluir sem tornar o processo rígido demais?" },
        { key: "S", label: "Estabilidade emocional", low: "Maior reatividade relatada", high: "Maior estabilidade relatada", description: "Como você descreveu sua tranquilidade e suas reações emocionais habituais.", lowText: "Você relatou mais preocupação e oscilações emocionais nesses itens. O resultado não identifica uma condição de saúde.", highText: "Você relatou maior tranquilidade e menor oscilação emocional nesses itens.", practice: "Observe uma situação recente de pressão: registre o gatilho, a reação e o que ajudou a recuperar o equilíbrio.", question: "Que condições tornam suas reações mais fáceis de compreender e administrar?" },
        { key: "O", label: "Intelecto / imaginação", low: "Menor interesse abstrato relatado", high: "Maior interesse abstrato relatado", description: "Interesse relatado por ideias, reflexão, imaginação e linguagem; não é uma medida de inteligência.", lowText: "Você relatou menor identificação com os itens sobre abstração e imaginação.", highText: "Você relatou maior identificação com ideias, imaginação e reflexão.", practice: "Aprenda algo por uma explicação conceitual e por um exemplo concreto. Observe como as duas perspectivas se complementam.", question: "Como transformar uma ideia interessante em algo que possa ser testado?" }
      ],
      // Ordem e inversões seguem o questionário IPIP-50; S é estabilidade, não neuroticismo.
      items: interleave({
        E: [["Sou quem anima as festas."], ["Não falo muito.", true], ["Sinto-me à vontade perto de outras pessoas."], ["Prefiro ficar em segundo plano.", true], ["Inicio conversas."], ["Tenho pouco a dizer.", true], ["Converso com muitas pessoas diferentes em festas."], ["Não gosto de chamar atenção para mim.", true], ["Não me incomodo em ser o centro das atenções."], ["Fico em silêncio perto de desconhecidos.", true]],
        A: [["Preocupo-me pouco com os outros.", true], ["Tenho interesse pelas pessoas."], ["Insulto as pessoas.", true], ["Compreendo e me sensibilizo com os sentimentos dos outros."], ["Não me interesso pelos problemas das outras pessoas.", true], ["Tenho um coração sensível."], ["Não tenho muito interesse pelos outros.", true], ["Dedico tempo às outras pessoas."], ["Sinto as emoções dos outros."], ["Faço as pessoas se sentirem à vontade."]],
        C: [["Estou sempre preparado."], ["Deixo meus pertences espalhados.", true], ["Presto atenção aos detalhes."], ["Faço bagunça.", true], ["Faço as tarefas sem demora."], ["Frequentemente esqueço de guardar as coisas no lugar certo.", true], ["Gosto de ordem."], ["Evito cumprir minhas obrigações.", true], ["Sigo uma programação."], ["Sou exigente com a qualidade do meu trabalho."]],
        S: [["Fico estressado com facilidade.", true], ["Sinto-me relaxado na maior parte do tempo."], ["Preocupo-me com as coisas.", true], ["Raramente me sinto abatido."], ["Fico perturbado com facilidade.", true], ["Fico chateado com facilidade.", true], ["Meu humor muda muito.", true], ["Tenho oscilações frequentes de humor.", true], ["Fico irritado com facilidade.", true], ["Frequentemente me sinto abatido.", true]],
        O: [["Tenho um vocabulário rico."], ["Tenho dificuldade para entender ideias abstratas.", true], ["Tenho uma imaginação vívida."], ["Não me interesso por ideias abstratas.", true], ["Tenho ótimas ideias."], ["Não tenho uma boa imaginação.", true], ["Entendo as coisas rapidamente."], ["Uso palavras difíceis."], ["Passo tempo refletindo sobre as coisas."], ["Sou cheio de ideias."]]
      })
    },
    eneagrama: {
      id: "eneagrama", version: 1, number: "05", title: "Eneagrama", kind: "likert", time: "6–8 min",
      intro: "Responda às 36 afirmações pensando no que costuma motivar suas escolhas, inclusive quando ninguém está observando. Mais de uma motivação pode aparecer com força.",
      note: "Questionário autoral de reflexão sobre as nove motivações do Eneagrama. Não é RHETI, não possui validação psicométrica e não determina tipo, asa ou diagnóstico. Use as afinidades para examinar situações reais.",
      metric: "Cada motivação reúne quatro respostas e recebe uma média de 1 a 5. A barra traduz essa média para 0–100. As dimensões são independentes; proximidade entre escores merece leitura conjunta.",
      sources: [{ title: "Referência · The Enneagram Institute", url: "https://www.enneagraminstitute.com/how-the-enneagram-system-works/" }],
      dimensions: [
        { key: "1", label: "1 · Princípios", description: "Busca coerência e qualidade.", practice: "Escolha uma tarefa e defina o que é bom o suficiente antes de começar.", question: "Que padrão você mantém por convicção e qual mantém por medo de errar?" },
        { key: "2", label: "2 · Cuidado", description: "Busca vínculo ao contribuir.", practice: "Antes de oferecer ajuda, verifique se ela foi desejada e reconheça uma necessidade sua.", question: "Você conseguiria manter esse vínculo mesmo sem ser necessário?" },
        { key: "3", label: "3 · Realização", description: "Busca valor por resultados.", practice: "Escolha uma ação importante que não dependa de reconhecimento externo.", question: "Qual resultado faz sentido para você quando ninguém o vê?" },
        { key: "4", label: "4 · Identidade", description: "Busca autenticidade e significado.", practice: "Transforme uma percepção pessoal em uma pequena ação, mesmo sem esperar o estado emocional ideal.", question: "O que há de significativo na vida comum que você pode estar deixando de notar?" },
        { key: "5", label: "5 · Compreensão", description: "Busca domínio e espaço próprio.", practice: "Compartilhe uma ideia ainda incompleta com alguém e observe o que a conversa acrescenta.", question: "De quanto entendimento você realmente precisa para participar?" },
        { key: "6", label: "6 · Segurança", description: "Busca confiança e apoio.", practice: "Separe um risco observável de uma hipótese e escolha uma verificação concreta.", question: "Que evidência seria suficiente para você confiar no próximo passo?" },
        { key: "7", label: "7 · Possibilidades", description: "Busca variedade e liberdade.", practice: "Escolha uma possibilidade e permaneça nela até concluir uma etapa, inclusive a parte menos agradável.", question: "Qual experiência vale aprofundar antes de buscar a próxima?" },
        { key: "8", label: "8 · Autonomia", description: "Busca força e autodeterminação.", practice: "Em uma decisão compartilhada, diga sua preocupação e convide a outra pessoa a propor um caminho.", question: "Onde abrir espaço para outra pessoa também pode proteger o que importa?" },
        { key: "9", label: "9 · Harmonia", description: "Busca acordo e tranquilidade.", practice: "Expresse uma preferência pequena antes de concordar com a escolha do grupo.", question: "Que desconforto breve ajudaria a preservar uma necessidade sua?" }
      ],
      items: interleave({
        "1": [["Sinto necessidade de corrigir algo quando percebo que não está de acordo com meus princípios."], ["Mesmo sem cobrança externa, fico incomodado quando meu trabalho não alcança o padrão que considero correto."], ["Evitar um erro moral pesa bastante nas minhas decisões."], ["Tenho dificuldade em relaxar quando ainda vejo algo que deveria ser melhorado."]],
        "2": [["Sinto que meu lugar nas relações fica mais seguro quando posso ajudar."], ["Percebo as necessidades dos outros antes de reconhecer as minhas."], ["Fico magoado quando minha contribuição para alguém passa despercebida."], ["Ser uma pessoa importante para os outros orienta muitas das minhas escolhas."]],
        "3": [["Costumo avaliar meu valor pessoal pelo que consigo realizar."], ["Adapto a forma como me apresento para ser visto como alguém competente."], ["Ficar sem uma meta de resultado me deixa inquieto."], ["O reconhecimento pelo meu desempenho tem grande peso para mim."]],
        "4": [["Procuro expressar algo singular sobre mim nas coisas que faço."], ["Sinto falta de uma profundidade que parece ausente nas experiências cotidianas."], ["Ser fiel ao que sinto pesa mais do que me encaixar nas expectativas do grupo."], ["Comparo minha experiência interior com aquilo que parece faltar na minha vida."]],
        "5": [["Antes de participar de uma situação, procuro entendê-la para não me sentir despreparado."], ["Protejo meu tempo e minha energia para manter um espaço só meu."], ["Acumular conhecimento me ajuda a sentir que consigo lidar com o mundo."], ["Quando uma situação exige demais de mim, minha primeira reação costuma ser me afastar para pensar."]],
        "6": [["Antes de confiar em um plano, imagino o que poderia dar errado."], ["Procuro referências confiáveis quando preciso tomar uma decisão importante."], ["A possibilidade de ficar sem apoio influencia minhas escolhas."], ["Mesmo depois de decidir, volto a verificar se deixei algum risco passar."]],
        "7": [["Ter várias possibilidades abertas me ajuda a sentir liberdade."], ["Quando algo fica desconfortável, penso rapidamente em uma alternativa mais interessante."], ["Tenho receio de ficar preso em uma experiência limitada ou sem saída."], ["A expectativa de uma nova experiência costuma me mobilizar mais do que a rotina."]],
        "8": [["Reajo com força quando sinto que alguém está tentando controlar minhas escolhas."], ["Prefiro assumir uma posição clara a deixar que decidam por mim."], ["Mostrar fragilidade pode me fazer sentir exposto ou em desvantagem."], ["Proteger minha autonomia e as pessoas pelas quais me responsabilizo pesa muito nas minhas decisões."]],
        "9": [["Adio expressar uma discordância para preservar a tranquilidade da relação."], ["É mais fácil perceber o que os outros querem do que escolher minha própria prioridade."], ["Quando surge tensão, procuro um ponto de acordo entre as pessoas."], ["Posso deixar uma necessidade minha de lado para evitar um conflito."]]
      })
    },
    jung: {
      id: "jung", version: 1, number: "06", title: "Preferências de Jung", kind: "likert", time: "5–7 min",
      intro: "Explore quatro pares de preferências: interação e recolhimento, informação concreta e possibilidades, critérios de decisão e organização do cotidiano. São 32 afirmações sobre o que costuma ser mais natural para você.",
      note: "Exercício autoral inspirado nas preferências de Jung popularizadas pelo MBTI. Não é o instrumento MBTI oficial nem uma avaliação validada. As letras resumem respostas desta sessão, sem medir habilidade ou definir sua identidade.",
      metric: "Cada par tem oito itens e dois polos. O ponto central representa equilíbrio nas respostas; X indica empate. Valores próximos ao centro devem ser lidos como uma preferência pouco diferenciada, sem estimativa de certeza.",
      sources: [{ title: "Myers & Briggs Foundation · entender as preferências", url: "https://myersbriggs.org/my-mbti-personality-type/my-mbti-results/home.htm" }],
      dimensions: [
        { key: "EI", label: "Energia e interação", low: "I · Recolhimento", high: "E · Interação", lowCode: "I", highCode: "E", description: "Onde você costuma buscar espaço para pensar e se envolver.", lowText: "Você relatou preferência por elaboração interna e intervalos de recolhimento.", highText: "Você relatou preferência por pensar em interação e buscar contato com outras pessoas.", practice: "Combine tempo individual para formular uma ideia com uma conversa para ampliá-la.", question: "Em que momento conversar ajuda, e em que momento você precisa de espaço?" },
        { key: "SN", label: "Atenção e informação", low: "N · Possibilidades", high: "S · Concreto", lowCode: "N", highCode: "S", description: "O que tende a chamar sua atenção ao compreender uma situação.", lowText: "Você relatou atenção às conexões, interpretações e possibilidades futuras.", highText: "Você relatou atenção aos fatos observáveis, exemplos e experiências concretas.", practice: "Ao examinar uma ideia, descreva um fato verificável e uma possibilidade que ele sugere.", question: "Qual detalhe ou conexão sua preferência habitual pode deixar passar?" },
        { key: "TF", label: "Critérios de decisão", low: "F · Valores e impacto", high: "T · Consistência lógica", lowCode: "F", highCode: "T", description: "Quais critérios você tende a colocar primeiro ao decidir; ambos os polos podem usar razão e empatia.", lowText: "Você relatou priorizar valores e efeitos da decisão sobre as pessoas.", highText: "Você relatou priorizar consistência dos critérios e análise das consequências lógicas.", practice: "Escreva os critérios da decisão e o impacto sobre as pessoas envolvidas antes de escolher.", question: "Como manter coerência sem deixar de considerar a situação de cada pessoa?" },
        { key: "JP", label: "Organização do cotidiano", low: "P · Abertura", high: "J · Definição", lowCode: "P", highCode: "J", description: "Como você equilibra decisões antecipadas e abertura a novas informações.", lowText: "Você relatou preferência por flexibilidade e opções abertas.", highText: "Você relatou preferência por decisões definidas e planejamento antecipado.", practice: "Defina o que precisa estar decidido hoje e o que pode permanecer aberto até haver informação melhor.", question: "Qual prazo permite explorar alternativas sem adiar indefinidamente a escolha?" }
      ],
      items: interleave({
        EI: [["Organizo melhor meus pensamentos conversando com alguém."], ["Preciso de um tempo sozinho para elaborar o que penso antes de falar.", true], ["Costumo procurar companhia para recuperar o ânimo."], ["Depois de muita interação, sinto vontade de ficar em um ambiente mais reservado.", true], ["Em um grupo novo, geralmente tomo a iniciativa de me aproximar."], ["Prefiro aprofundar poucas conversas a circular entre muitas pessoas.", true], ["Gosto de compartilhar uma ideia enquanto ela ainda está se formando."], ["Costumo construir minha resposta internamente antes de participar de uma discussão.", true]],
        SN: [["Para entender um assunto, começo pelos fatos e exemplos observáveis."], ["Minha atenção vai primeiro para os padrões e possibilidades que uma situação sugere.", true], ["Uma demonstração concreta me ajuda mais do que uma explicação geral."], ["Gosto de explorar o que uma ideia poderia se tornar, mesmo sem aplicação imediata.", true], ["Confio bastante no que já observei funcionar na prática."], ["Percebo conexões entre assuntos que à primeira vista parecem distantes.", true], ["Ao receber uma tarefa, procuro detalhes sobre o que exatamente deve ser feito."], ["Costumo me interessar mais pelo significado de um detalhe do que pelo detalhe isolado.", true]],
        TF: [["Ao decidir, começo comparando a consistência dos argumentos."], ["Ao decidir, começo considerando os valores e as necessidades das pessoas envolvidas.", true], ["Acho importante aplicar um critério coerente mesmo quando a conclusão é desconfortável."], ["Uma decisão só me parece adequada quando considero como ela será vivida pelas pessoas.", true], ["Quando há discordância, procuro primeiro o ponto em que o raciocínio não se sustenta."], ["Quando há discordância, procuro primeiro entender o que tem importância pessoal para cada um.", true], ["Prefiro definir critérios impessoais para comparar alternativas."], ["Costumo considerar as particularidades de cada pessoa antes de aplicar uma regra.", true]],
        JP: [["Sinto alívio quando posso definir um plano com antecedência."], ["Gosto de manter alternativas abertas para aproveitar informações novas.", true], ["Prefiro concluir decisões pendentes antes de iniciar novas possibilidades."], ["Mudo meus planos com facilidade quando surge algo interessante.", true], ["Organizo meus compromissos antes de começar a semana."], ["Prefiro decidir parte do meu dia conforme as circunstâncias aparecem.", true], ["Ter prazos e etapas definidos me ajuda a trabalhar com tranquilidade."], ["Sinto-me à vontade explorando possibilidades sem escolher imediatamente.", true]]
      })
    }
  };
  window.AgentFlixAssessments = Object.freeze(assessments);
})();
