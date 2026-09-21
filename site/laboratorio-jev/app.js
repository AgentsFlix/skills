(() => {
  const characters = {
    hermione: {
      personagem: {
        nome: 'Hermione Granger',
        caracteristicas: [
          'transforma estudo em ação quando alguém corre perigo',
          'entra em situações perigosas mesmo sentindo medo',
          'rompe regras para fazer o que considera correto',
          'protege os amigos assumindo risco pessoal'
        ],
        acao_decisiva: 'Entrou em uma situação perigosa e aplicou o que havia pesquisado para proteger seus amigos, mesmo sabendo que poderia ser ferida.'
      }
    },
    harry: {
      personagem: {
        nome: 'Harry Potter',
        caracteristicas: [
          'age por instinto quando alguém está em perigo',
          'valoriza lealdade e amizade acima de reconhecimento',
          'assume riscos pessoais para proteger outras pessoas',
          'questiona regras quando acredita que são injustas'
        ],
        acao_decisiva: 'Enfrentou sozinho uma ameaça maior do que ele para impedir que seus amigos fossem feridos.'
      }
    },
    ron: {
      personagem: {
        nome: 'Ron Weasley',
        caracteristicas: [
          'avança mesmo quando está inseguro ou com medo',
          'aceita assumir a posição mais perigosa para proteger o grupo',
          'enfrenta suas fobias quando os amigos precisam',
          'volta para a luta depois de reconhecer os próprios erros'
        ],
        acao_decisiva: 'Escolheu ocupar a posição mais perigosa de um confronto para abrir caminho aos amigos, mesmo esperando ser derrubado.'
      }
    },
    draco: {
      personagem: {
        nome: 'Draco Malfoy',
        caracteristicas: [
          'valoriza status, influência e reconhecimento',
          'pensa estrategicamente antes de agir',
          'procura vantagens para si e sua família',
          'é competitivo e ambicioso'
        ],
        acao_decisiva: 'Usou suas conexões e seu planejamento para tentar obter uma posição de vantagem dentro de um conflito.'
      }
    }
  };

  const defaultQuestion = {
    type: 'choice',
    instructions: 'Qual casa de Hogwarts melhor representa o padrão predominante demonstrado pelas características e pela ação decisiva do personagem? Dê mais peso às escolhas feitas sob risco, medo ou pressão do que a aptidões ou preferências gerais. Use todas as evidências e não escolha por um único traço.',
    criteria: {
      'Grifinória': 'Coragem, ousadia e disposição para agir diante do perigo.',
      'Lufa-Lufa': 'Lealdade, justiça, dedicação e espírito de equipe.',
      'Corvinal': 'Curiosidade intelectual, criatividade, busca por conhecimento e originalidade.',
      'Sonserina': 'Ambição, estratégia, engenhosidade e busca por influência.'
    }
  };

  const nameInput = document.querySelector('#character-name');
  const characteristicInputs = [...document.querySelectorAll('.characteristic-input')];
  const actionInput = document.querySelector('#decisive-action');
  const instructionsInput = document.querySelector('#question-instructions');
  const criterionNameInputs = [...document.querySelectorAll('.criterion-name')];
  const criterionDescriptionInputs = [...document.querySelectorAll('.criterion-description')];
  const stateForm = document.querySelector('#state-form');
  const questionsForm = document.querySelector('#questions-form');
  const stateValidity = document.querySelector('#state-validity');
  const questionsValidity = document.querySelector('#questions-validity');
  const runButton = document.querySelector('#run-request');
  const requestStatus = document.querySelector('#request-status');
  const result = document.querySelector('#result');
  let controller = null;
  let requestInFlight = false;

  const text = input => input.value.trim();

  const markValidity = (element, valid, readyText, errorText) => {
    element.textContent = valid ? readyText : errorText;
    element.classList.toggle('is-invalid', !valid);
  };

  const collectState = () => ({
    personagem: {
      nome: text(nameInput),
      caracteristicas: characteristicInputs.map(text),
      acao_decisiva: text(actionInput)
    }
  });

  const collectQuestions = () => {
    const criteria = Object.fromEntries(criterionNameInputs.map((input, index) => [
      text(input),
      text(criterionDescriptionInputs[index])
    ]));
    return {
      casa_hogwarts: {
        type: 'choice',
        instructions: text(instructionsInput),
        criteria
      }
    };
  };

  const validate = () => {
    const state = collectState();
    const names = criterionNameInputs.map(text);
    const stateValid = stateForm.checkValidity();
    const uniqueNames = new Set(names.filter(Boolean));
    const questionsValid = questionsForm.checkValidity() && uniqueNames.size === names.length && uniqueNames.size >= 2;

    markValidity(stateValidity, stateValid, 'Campos prontos', 'Preencha o estado');
    markValidity(questionsValidity, questionsValid, 'Campos prontos', uniqueNames.size < names.length ? 'Opções devem ser únicas' : 'Preencha a pergunta');
    runButton.disabled = requestInFlight || !stateValid || !questionsValid;
    return {
      state: stateValid ? state : null,
      questions: questionsValid ? collectQuestions() : null
    };
  };

  const fillState = state => {
    nameInput.value = state.personagem.nome;
    characteristicInputs.forEach((input, index) => {
      input.value = state.personagem.caracteristicas[index] || '';
    });
    actionInput.value = state.personagem.acao_decisiva;
  };

  const fillQuestion = question => {
    instructionsInput.value = question.instructions;
    Object.entries(question.criteria).forEach(([name, description], index) => {
      criterionNameInputs[index].value = name;
      criterionDescriptionInputs[index].value = description;
    });
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
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    box.append(mark, title, paragraph);
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
      fillState(characters[button.dataset.character]);
      validate();
      emptyResult('Os campos mudaram. Execute novamente para comparar as probabilidades.');
      requestStatus.textContent = 'Estado atualizado. Pronto para decidir.';
      requestStatus.classList.remove('is-error');
    });
  });

  [...stateForm.elements, ...questionsForm.elements].forEach(field => {
    field.addEventListener('input', validate);
  });

  runButton.addEventListener('click', async () => {
    const { state, questions } = validate();
    if (state === null || questions === null) return;
    controller?.abort();
    controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    requestInFlight = true;
    validate();
    runButton.querySelector('span').textContent = 'Consultando o Jev…';
    requestStatus.textContent = 'Organizando os campos e enviando ao modelo.';
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
      emptyResult('Revise os campos ou tente executar outra vez. Seu conteúdo foi preservado.');
    } finally {
      clearTimeout(timeout);
      requestInFlight = false;
      result.removeAttribute('aria-busy');
      runButton.querySelector('span').textContent = 'Executar com Jev';
      validate();
    }
  });

  fillState(characters.hermione);
  fillQuestion(defaultQuestion);
  validate();
})();
