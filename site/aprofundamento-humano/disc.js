(function () {
  "use strict";

  const data = window.AgentFlixDiscData;
  const model = window.AgentFlixDiscModel;
  const storageKey = "agentflix-disc-v1";
  const dimensions = ["D", "I", "S", "C"];

  const elements = {
    intro: document.getElementById("disc-intro"),
    quiz: document.getElementById("disc-quiz"),
    result: document.getElementById("disc-result"),
    start: document.getElementById("start-disc"),
    form: document.getElementById("disc-form"),
    questionList: document.getElementById("question-list"),
    roundKicker: document.getElementById("round-kicker"),
    roundTitle: document.getElementById("round-title"),
    roundHelp: document.getElementById("round-help"),
    answeredCount: document.getElementById("answered-count"),
    formMessage: document.getElementById("form-message"),
    previous: document.getElementById("previous-round"),
    next: document.getElementById("next-round"),
    resultTitle: document.getElementById("result-title"),
    resultLede: document.getElementById("result-lede"),
    scoreGrid: document.getElementById("score-grid"),
    profileReading: document.getElementById("profile-reading"),
    copy: document.getElementById("copy-result"),
    copyStatus: document.getElementById("copy-status"),
    restart: document.getElementById("restart-disc")
  };

  let state = loadState();

  function emptyState() {
    return { started: false, roundIndex: 0, answers: {}, result: null };
  }

  function loadState() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(storageKey));
      if (!saved || typeof saved !== "object" || typeof saved.answers !== "object") return emptyState();
      saved.roundIndex = Math.max(0, Math.min(2, Number(saved.roundIndex) || 0));
      return Object.assign(emptyState(), saved);
    } catch (_) {
      return emptyState();
    }
  }

  function saveState() {
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(state));
    } catch (_) {
      // O assessment continua funcional quando o navegador bloqueia armazenamento local.
    }
  }

  function scrollToShell() {
    document.getElementById("disc").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function startAssessment() {
    state.started = true;
    state.result = null;
    saveState();
    elements.intro.hidden = true;
    elements.result.hidden = true;
    elements.quiz.hidden = false;
    renderRound();
    scrollToShell();
  }

  function createQuestion(question, questionIndex, roundId) {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "question";
    fieldset.dataset.question = String(questionIndex);

    const legend = document.createElement("legend");
    const number = document.createElement("span");
    number.className = "question-number";
    number.textContent = String(questionIndex + 1).padStart(2, "0");
    legend.append(number, document.createTextNode(question.text));
    fieldset.appendChild(legend);

    const choices = document.createElement("div");
    choices.className = "choice-list";

    question.options.forEach(function (option, choiceIndex) {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "question-" + questionIndex + "-" + roundId;
      input.value = String(choiceIndex);
      input.checked = Boolean(state.answers[questionIndex]) && state.answers[questionIndex][roundId] === choiceIndex;
      input.disabled = model.isChoiceUsed(state.answers, questionIndex, roundId, choiceIndex);
      input.addEventListener("change", function () {
        selectChoice(questionIndex, roundId, choiceIndex);
      });

      const text = document.createElement("span");
      text.textContent = option;
      label.append(input, text);
      choices.appendChild(label);
    });

    fieldset.appendChild(choices);
    return fieldset;
  }

  function selectChoice(questionIndex, roundId, choiceIndex) {
    const answer = Object.assign({}, state.answers[questionIndex] || {});
    data.rounds.forEach(function (round) {
      if (round.id !== roundId && answer[round.id] === choiceIndex) delete answer[round.id];
    });
    answer[roundId] = choiceIndex;
    state.answers[questionIndex] = answer;
    state.result = null;
    saveState();
    updateCompletion();
  }

  function completedCount(roundId) {
    return data.questions.filter(function (_, index) {
      const answer = state.answers[index];
      return answer && Number.isInteger(answer[roundId]);
    }).length;
  }

  function updateCompletion() {
    const round = data.rounds[state.roundIndex];
    const count = completedCount(round.id);
    const complete = model.isRoundComplete(data.questions, state.answers, round.id);
    elements.answeredCount.textContent = count + " de " + data.questions.length + " respondidas";
    elements.next.disabled = !complete;
    elements.formMessage.textContent = complete ? "Rodada completa. Você pode avançar." : "";
  }

  function updateProgress(activeId) {
    const order = ["most", "least", "somewhat", "result"];
    const activeIndex = order.indexOf(activeId);
    document.querySelectorAll("[data-progress]").forEach(function (item) {
      const index = order.indexOf(item.dataset.progress);
      item.classList.toggle("is-current", index === activeIndex);
      item.classList.toggle("is-complete", index < activeIndex);
      if (index === activeIndex) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
  }

  function renderRound() {
    const round = data.rounds[state.roundIndex];
    elements.roundKicker.textContent = "Rodada " + (state.roundIndex + 1) + " de " + data.rounds.length;
    elements.roundTitle.textContent = round.title;
    elements.roundHelp.textContent = round.help;
    elements.previous.hidden = state.roundIndex === 0;
    elements.next.textContent = state.roundIndex === data.rounds.length - 1 ? "Calcular meu perfil" : "Próxima rodada";
    elements.formMessage.textContent = "";
    elements.questionList.replaceChildren();
    data.questions.forEach(function (question, index) {
      elements.questionList.appendChild(createQuestion(question, index, round.id));
    });
    updateProgress(round.id);
    updateCompletion();
    elements.roundTitle.focus({ preventScroll: true });
  }

  function nextRound(event) {
    event.preventDefault();
    const round = data.rounds[state.roundIndex];
    if (!model.isRoundComplete(data.questions, state.answers, round.id)) {
      elements.formMessage.textContent = "Responda às dez perguntas para continuar.";
      const missing = data.questions.findIndex(function (_, index) {
        return !state.answers[index] || !Number.isInteger(state.answers[index][round.id]);
      });
      const fieldset = elements.questionList.querySelector('[data-question="' + missing + '"]');
      if (fieldset) fieldset.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (state.roundIndex < data.rounds.length - 1) {
      state.roundIndex += 1;
      saveState();
      renderRound();
      scrollToShell();
      return;
    }
    showResult();
  }

  function previousRound() {
    if (state.roundIndex === 0) return;
    state.roundIndex -= 1;
    saveState();
    renderRound();
    scrollToShell();
  }

  function showResult() {
    const scores = model.score(data.questions, state.answers, data.weights);
    const primary = model.primary(scores);
    const profile = data.profiles[primary];
    state.result = { scores: scores, primary: primary };
    saveState();

    elements.quiz.hidden = true;
    elements.intro.hidden = true;
    elements.result.hidden = false;
    elements.resultTitle.textContent = profile.title;
    elements.resultLede.textContent = "Seu resultado combina quatro tendências. A letra em destaque é a que recebeu mais pontos neste preenchimento.";
    elements.scoreGrid.replaceChildren();

    dimensions.forEach(function (dimension) {
      const card = document.createElement("article");
      card.className = "score-card" + (dimension === primary ? " is-primary" : "");
      const heading = document.createElement("div");
      heading.className = "score-name";
      const name = document.createElement("strong");
      name.textContent = dimension + " · " + data.profiles[dimension].name;
      const value = document.createElement("span");
      value.textContent = String(scores[dimension]);
      heading.append(name, value);
      const track = document.createElement("div");
      track.className = "score-track";
      track.setAttribute("aria-label", data.profiles[dimension].name + ": " + scores[dimension] + " de 50 pontos");
      const bar = document.createElement("i");
      bar.style.width = (scores[dimension] / 50 * 100) + "%";
      track.appendChild(bar);
      card.append(heading, track);
      elements.scoreGrid.appendChild(card);
    });

    elements.profileReading.replaceChildren();
    const title = document.createElement("h3");
    title.textContent = profile.title;
    const summary = document.createElement("p");
    summary.textContent = profile.summary;
    const details = document.createElement("dl");
    details.innerHTML = '<div><dt>Potência possível</dt><dd></dd></div><div><dt>Ponto de atenção</dt><dd></dd></div>';
    details.querySelectorAll("dd")[0].textContent = profile.strength;
    details.querySelectorAll("dd")[1].textContent = profile.attention;
    elements.profileReading.append(title, summary, details);

    elements.copyStatus.textContent = "";
    updateProgress("result");
    elements.resultTitle.focus({ preventScroll: true });
    scrollToShell();
  }

  function resultText() {
    const result = state.result;
    if (!result) return "";
    const profile = data.profiles[result.primary];
    const scores = dimensions.map(function (dimension) {
      return data.profiles[dimension].name + ": " + result.scores[dimension];
    }).join("\n");
    return "Meu mapa DISC · AgentFlix\n\n" + scores + "\n\n" + profile.title + "\n" + profile.summary + "\n\nLeitura de autoconhecimento, não diagnóstico.";
  }

  async function copyResult() {
    const text = resultText();
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch (_) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      copied = document.execCommand("copy");
      area.remove();
    }
    elements.copyStatus.textContent = copied ? "Resultado copiado." : "Não foi possível copiar automaticamente. Selecione o conteúdo da página para salvar.";
  }

  function restartAssessment() {
    state = emptyState();
    try { sessionStorage.removeItem(storageKey); } catch (_) { /* sem armazenamento */ }
    elements.result.hidden = true;
    elements.quiz.hidden = true;
    elements.intro.hidden = false;
    elements.start.textContent = "Iniciar assessment";
    document.getElementById("disc-title").setAttribute("tabindex", "-1");
    document.getElementById("disc-title").focus({ preventScroll: true });
    scrollToShell();
  }

  elements.start.addEventListener("click", startAssessment);
  elements.form.addEventListener("submit", nextRound);
  elements.previous.addEventListener("click", previousRound);
  elements.copy.addEventListener("click", copyResult);
  elements.restart.addEventListener("click", restartAssessment);

  if (state.result && state.result.scores && state.result.primary) {
    showResult();
  } else if (state.started) {
    elements.start.textContent = "Continuar assessment";
  }
})();
