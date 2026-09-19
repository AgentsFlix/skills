(function () {
  "use strict";

  const questions = [
    {
      text: "De um modo geral as pessoas me acham:",
      options: ["Muito prático e objetivo.", "Sentimental e apoiador.", "Racionalizador e sistemático.", "Diferente, com dificuldade de ser entendido."],
      mapping: ["D", "S", "C", "I"]
    },
    {
      text: "Num confronto de opiniões, eu:",
      options: ["Consigo empatizar.", "Consigo pequenos acordos rápidos, antes das grandes objeções.", "Encadeio ideias, estabelecendo talvez um novo conceito.", "Mantenho a minha, fazendo com que os argumentos sejam lógicos."],
      mapping: ["S", "I", "C", "D"]
    },
    {
      text: "Satisfação pessoal para mim é:",
      options: ["Desenvolver alternativas inovadoras que possam ser aplicadas.", "Atingir resultados acima do esperado.", "Fazer com que o sentimento de todos seja de harmonia e de construção.", "Solucionar problemas de formas organizadas e planejadas."],
      mapping: ["I", "D", "S", "C"]
    },
    {
      text: "Num trabalho em equipe, o importante para mim é:",
      options: ["Motivar e estimular a interação.", "A sistemática do processo e a função de cada um.", "Que o resultado seja positivo.", "Que haja criatividade e busca de novas formas de fazer as atividades."],
      mapping: ["I", "C", "D", "S"]
    },
    {
      text: "Influencio pessoas quando:",
      options: ["Faço os outros agirem estabelecendo uma visão compartilhada.", "Ofereço planos lógicos, detalhados sobre uma tarefa que precisa ser feita.", "Uso metáforas e imagens de um futuro melhor.", "Sou objetivo e vou direto ao assunto."],
      mapping: ["S", "C", "I", "D"]
    },
    {
      text: "Ao comunicar-me com outras pessoas, é provável que eu:",
      options: ["Ache interessante pessoas com alto grau de originalidade e criatividade.", "Perca a noção de tempo, quando as pessoas se comuniquem de forma sistemática e lógica.", "Ache estimulante as pessoas empáticas.", "Tenha interesse quando as pessoas são objetivas e as decisões são tomadas rápidas."],
      mapping: ["I", "C", "S", "D"]
    },
    {
      text: "Sinto-me satisfeito quando os outros me veem como:",
      options: ["Uma pessoa realizador e pró-ativa.", "Uma pessoa intelectual de vasta cultura e visão de futuro.", "Alguém focado em metas e objetivos e sabe como chegar lá.", "Amigo e preocupado na manutenção das relações."],
      mapping: ["D", "C", "I", "S"]
    },
    {
      text: "Ao me relacionar com as pessoas eu valorizo:",
      options: ["Intuição, criatividade e inovação.", "Segurança, conhecimento.", "Respeito humano, harmonia e paz.", "Resultado, cumprimento de metas."],
      mapping: ["I", "C", "S", "D"]
    },
    {
      text: "Quando estou sob pressão, eu geralmente:",
      options: ["Tomo decisões rápidas e diretas para resolver a situação.", "Procuro analisar todas as informações antes de agir.", "Busco apoio e opiniões de outras pessoas.", "Encontro soluções criativas que fogem do convencional."],
      mapping: ["D", "C", "S", "I"]
    },
    {
      text: "Em um ambiente novo, eu normalmente:",
      options: ["Tomo a iniciativa e me apresento às pessoas.", "Observo e analiso a situação antes de interagir.", "Procuro ser acolhedor e fazer com que todos se sintam bem.", "Busco entender como posso contribuir com ideias diferentes."],
      mapping: ["D", "C", "S", "I"]
    }
  ];

  const profiles = {
    D: {
      name: "Dominância",
      title: "Sua tendência principal é Dominância",
      summary: "Você tende a assumir direção, enfrentar desafios e buscar resultados com velocidade. Assertividade, autonomia e objetividade costumam aparecer quando existe algo concreto a conquistar.",
      strength: "Transformar decisões em movimento e sustentar foco quando o caminho exige coragem.",
      attention: "A pressa pode encurtar escuta, experimentação ou atenção a detalhes importantes."
    },
    I: {
      name: "Influência",
      title: "Sua tendência principal é Influência",
      summary: "Você tende a mobilizar pessoas por comunicação, entusiasmo e possibilidade. Relações, troca de ideias e liberdade para criar costumam aumentar sua energia.",
      strength: "Construir conexão, dar vida a ideias e envolver outras pessoas em uma direção comum.",
      attention: "Novas possibilidades podem disputar espaço com a disciplina necessária para concluir."
    },
    S: {
      name: "Estabilidade",
      title: "Sua tendência principal é Estabilidade",
      summary: "Você tende a valorizar harmonia, consistência e relações confiáveis. Escuta, cooperação e um ritmo previsível costumam ajudar você a produzir o melhor trabalho.",
      strength: "Criar segurança para o grupo e sustentar processos com cuidado e continuidade.",
      attention: "Evitar conflito ou mudança pode adiar conversas e experiências que já se tornaram necessárias."
    },
    C: {
      name: "Conformidade",
      title: "Sua tendência principal é Conformidade",
      summary: "Você tende a buscar precisão, lógica e critérios claros. Analisar nuances, organizar informação e elevar a qualidade costumam ser contribuições naturais.",
      strength: "Enxergar inconsistências, estruturar complexidade e tomar decisões apoiadas por evidências.",
      attention: "Perfeccionismo e análise prolongada podem atrasar uma entrega que já poderia gerar aprendizado."
    }
  };

  window.AgentFlixDiscData = Object.freeze({
    questions: Object.freeze(questions),
    profiles: Object.freeze(profiles),
    rounds: Object.freeze([
      { id: "most", label: "Mais", title: "Escolha o que tem mais a ver com você", help: "Escolha a opção que tem MAIS a ver com você do que todas as outras." },
      { id: "least", label: "Menos", title: "Agora escolha o que menos parece com você", help: "Escolha a opção que MENOS tem a ver com você em relação a todas as outras." },
      { id: "somewhat", label: "Pouco", title: "Por fim, escolha o que tem pouco a ver", help: "Escolha a opção que tem POUCO a ver com você em relação a outra." }
    ]),
    weights: Object.freeze({ most: 5, least: 0, somewhat: 2, unselected: 3 })
  });
})();
