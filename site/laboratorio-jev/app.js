(() => {
  const characters = {
    hermione: {
      personagem: {
        nome: "Hermione Granger",
        caracteristicas: [
          "busca conhecimento com disciplina e rigor",
          "resolve problemas por pesquisa e lógica",
          "é curiosa, criativa e intelectualmente independente",
          "defende os amigos mesmo quando isso traz risco"
        ],
        acao_decisiva: "Pesquisou intensamente uma ameaça, encontrou uma solução que os outros não perceberam e a aplicou para proteger seus amigos."
      }
    },
    harry: {
      personagem: {
        nome: "Harry Potter",
        caracteristicas: [
          "age por instinto quando alguém está em perigo",
          "valoriza lealdade e amizade acima de reconhecimento",
          "assume riscos pessoais para proteger outras pessoas",
          "questiona regras quando acredita que são injustas"
        ],
        acao_decisiva: "Enfrentou sozinho uma ameaça maior do que ele para impedir que seus amigos fossem feridos."
      }
    },
    ron: {
      personagem: {
        nome: "Ron Weasley",
        caracteristicas: [
          "é profundamente leal aos amigos e à família",
          "age com coragem quando alguém que ama está em perigo",
          "mantém compromisso com o grupo mesmo em condições difíceis",
          "prefere cooperação a protagonismo"
        ],
        acao_decisiva: "Voltou para ajudar os amigos em uma missão perigosa e enfrentou um medo pessoal para permanecer ao lado deles."
      }
    },
    draco: {
      personagem: {
        nome: "Draco Malfoy",
        caracteristicas: [
          "valoriza status, influência e reconhecimento",
          "pensa estrategicamente antes de agir",
          "procura vantagens para si e sua família",
          "é competitivo e ambicioso"
        ],
        acao_decisiva: "Usou suas conexões e seu planejamento para tentar obter uma posição de vantagem dentro de um conflito."
      }
    }
  };

  const defaultQuestions = {
    casa_hogwarts: {
      type: "choice",
      instructions: "Qual casa de Hogwarts melhor representa a qualidade predominante do personagem? Considere em conjunto as características e a ação decisiva. Quando houver traços de mais de uma casa, escolha o traço mais distintivo e recorrente.",
      criteria: {
        "Grifinória": "Coragem, ousadia e disposição para agir diante do perigo.",
        "Lufa-Lufa": "Lealdade, justiça, dedicação e espírito de equipe.",
        "Corvinal": "Curiosidade intelectual, criatividade, busca por conhecimento e originalidade.",
        "Sonserina": "Ambição, estratégia, engenhosidade e busca por influência."
      }
    }
  };

  const stateEditor = document.querySelector('#state-json');
  const questionsEditor = document.querySelector('#questions-json');
  const stateValidity = document.querySelector('#state-validity');
  const questionsValidity = document.querySelector('#questions-validity');
  const runButton = document.querySelector('#run-request');
  const requestStatus = document.querySelector('#request-status');
  const result = document.querySelector('#result');
  let controller = null;

  const pretty = value => JSON.stringify(value, null, 2);
  const parse = (editor, validity, label) => {
    try {
      const value = JSON.parse(editor.value);
      validity.textContent = 'JSON válido';
      validity.classList.remove('is-invalid');
      editor.removeAttribute('aria-invalid');
      return value;
    } catch (error) {
      validity.textContent = `${label}: ${error.message.replace(/^JSON\.parse:\s*/i, '')}`;
      validity.classList.add('is-invalid');
      editor.setAttribute('aria-invalid', 'true');
      return null;
    }
  };

  const validate = () => {
    const state = parse(stateEditor, stateValidity, 'State inválido');
    const questions = parse(questionsEditor, questionsValidity, 'Questions inválido');
    runButton.disabled = state === null || questions === null;
    return { state, questions };
  };

  const emptyResult = message => {
    result.replaceChildren();
    const box = document.createElement('div');
    box.className = 'result-empty';
    const mark = document.createElement('span');
    mark.setAttribute('aria-hidden', 'true');
    mark.textContent = '✦';
    const title = document.createElement('h4');
    title.id = 'result-title';
    title.textContent = 'Pronto para uma nova decisão';
    const text = document.createElement('p');
    text.textContent = message;
    box.append(mark, title, text);
    result.append(box);
  };

  const percentage = value => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return null;
    return `${Math.round(Math.max(0, Math.min(1, numeric)) * 100)}%`;
  };

  const probabilityList = probabilities => {
    const list = document.createElement('ol');
    list.className = 'probabilities';
    Object.entries(probabilities)
      .filter(([, value]) => Number.isFinite(Number(value)))
      .sort((a, b) => Number(b[1]) - Number(a[1]))
      .forEach(([label, value]) => {
        const percent = percentage(value);
        const item = document.createElement('li');
        item.className = 'probability-row';
        const name = document.createElement('span');
        name.className = 'probability-label';
        name.textContent = label;
        const number = document.createElement('span');
        number.className = 'probability-value';
        number.textContent = percent;
        const track = document.createElement('span');
        track.className = 'probability-track';
        const fill = document.createElement('span');
        fill.style.width = percent;
        track.append(fill);
        item.append(name, number, track);
        list.append(item);
      });
    return list;
  };

  const answerValue = answer => {
    if (typeof answer.choice === 'string') return answer.choice;
    if (typeof answer.noul === 'number') return answer.noul >= .5 ? 'Sim' : 'Não';
    if (typeof answer.score === 'number') return String(Math.round(answer.score * 100) / 100);
    return 'Resposta recebida';
  };

  const answerProbabilities = answer => {
    if (answer.probabilities && typeof answer.probabilities === 'object') return answer.probabilities;
    if (typeof answer.noul === 'number') return { Sim: answer.noul, Não: 1 - answer.noul };
    return null;
  };

  const renderResult = payload => {
    result.replaceChildren();
    Object.entries(payload.answers).forEach(([id, answer]) => {
      const section = document.createElement('section');
      section.className = 'answer';
      const key = document.createElement('p');
      key.className = 'answer-id';
      key.textContent = id;
      const heading = document.createElement('div');
      heading.className = 'answer-choice';
      const choice = document.createElement('strong');
      choice.textContent = answerValue(answer);
      const confidence = document.createElement('span');
      const confidenceValue = percentage(answer.confidence);
      confidence.textContent = confidenceValue ? `Confiança ${confidenceValue}` : answer.type || 'Decisão tipada';
      heading.append(choice, confidence);
      section.append(key, heading);
      const probabilities = answerProbabilities(answer);
      if (probabilities) section.append(probabilityList(probabilities));
      result.append(section);
    });
  };

  document.querySelectorAll('[data-character]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-character]').forEach(candidate => candidate.setAttribute('aria-pressed', String(candidate === button)));
      stateEditor.value = pretty(characters[button.dataset.character]);
      validate();
      emptyResult('O estado mudou. Execute novamente para comparar as probabilidades.');
      requestStatus.textContent = 'Estado atualizado. Pronto para decidir.';
      requestStatus.classList.remove('is-error');
    });
  });

  [stateEditor, questionsEditor].forEach(editor => editor.addEventListener('input', validate));

  runButton.addEventListener('click', async () => {
    const { state, questions } = validate();
    if (state === null || questions === null) return;
    controller?.abort();
    controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    runButton.disabled = true;
    runButton.querySelector('span').textContent = 'Consultando o Jev…';
    requestStatus.textContent = 'Enviando state e questions para o modelo.';
    requestStatus.classList.remove('is-error');
    result.setAttribute('aria-busy', 'true');
    try {
      const response = await fetch('/api/jev', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ state, questions }),
        signal: controller.signal
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || 'O Jev não conseguiu concluir esta decisão.');
      if (!payload.answers || typeof payload.answers !== 'object') throw new Error('A resposta chegou sem decisões tipadas.');
      renderResult(payload);
      requestStatus.textContent = `Decisão concluída com ${payload.model || 'Jev'}.`;
    } catch (error) {
      const message = error.name === 'AbortError' ? 'A consulta demorou demais. Tente novamente.' : error.message;
      requestStatus.textContent = message;
      requestStatus.classList.add('is-error');
      emptyResult('Revise os JSONs ou tente executar outra vez. Seu conteúdo foi preservado.');
    } finally {
      clearTimeout(timeout);
      result.removeAttribute('aria-busy');
      runButton.querySelector('span').textContent = 'Executar com Jev';
      validate();
    }
  });

  stateEditor.value = pretty(characters.hermione);
  questionsEditor.value = pretty(defaultQuestions);
  validate();
})();
