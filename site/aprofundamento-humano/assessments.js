(function () {
  "use strict";
  const catalog = window.AgentFlixAssessments;
  const model = window.AgentFlixAssessmentModel;
  const hub = document.getElementById("assessment-hub");
  const disc = document.getElementById("disc");
  const labels = ["Nada parecido comigo", "Pouco parecido comigo", "Em parte parecido comigo", "Bastante parecido comigo", "Muito parecido comigo"];
  const stages = ["Qual afirmação MENOS COMBINA com o que você pensa?", "Agora, qual afirmação MAIS COMBINA com o que você pensa?", "Entre as duas restantes, qual COMBINA MENOS com o que você pensa?"];
  const pointLabels = { 0: "Não concordo", 9: "Concordo muito", 1: "Concordo um pouco", 4: "Concordo" };
  let test, state, storageAvailable = true;

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }
  function button(text, action, kind = "secondary") {
    const element = node("button", "button button-" + kind, text);
    element.type = "button";
    element.addEventListener("click", action);
    return element;
  }
  function key() { return "agentflix-assessment-" + test.id + "-v" + test.version; }
  function fresh() {
    return { version: test.version, screen: "intro", page: 0, answers: Array.from({ length: test.items.length }, () => test.kind === "ranking" ? [] : null) };
  }
  function pages() { return test.kind === "ranking" ? test.items.length : Math.ceil(test.items.length / 5); }
  function load() {
    storageAvailable = true;
    try {
      const saved = JSON.parse(sessionStorage.getItem(key()) || "null");
      if (!saved || saved.version !== test.version || !Array.isArray(saved.answers) || saved.answers.length !== test.items.length ||
        !["intro", "quiz", "result"].includes(saved.screen) || !Number.isInteger(saved.page) || saved.page < 0 || saved.page >= pages()) return fresh();
      const valid = saved.answers.every(a => test.kind === "ranking" ? Array.isArray(a) && a.length <= 3 &&
        a.every(n => Number.isInteger(n) && n >= 0 && n <= 3) && new Set(a).size === a.length : a === null || model.validAnswer(test, a));
      if (!valid) return fresh();
      if (saved.screen === "result" && !saved.answers.every(a => model.validAnswer(test, a))) saved.screen = "quiz";
      return saved;
    } catch (_) { storageAvailable = false; return fresh(); }
  }
  function save() {
    try { sessionStorage.setItem(key(), JSON.stringify(state)); }
    catch (_) { storageAvailable = false; }
  }
  function focusTitle() {
    const title = hub.querySelector("h2");
    if (title) title.focus({ preventScroll: true });
    hub.scrollIntoView({ behavior: "auto", block: "start" });
  }
  function sources(parent) {
    const details = node("details", "assessment-method");
    details.append(node("summary", "", "Sobre este assessment e suas fontes"));
    details.append(node("p", "", test.note), node("p", "", test.metric));
    test.sources.forEach(source => {
      const link = node("a", "source-link", source.title + " ↗");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      details.append(link);
    });
    parent.append(details);
  }
  function storageNote(parent) {
    parent.append(node("p", "session-note", storageAvailable ? "Suas respostas ficam nesta aba e podem ser retomadas durante a sessão. Nenhuma resposta é enviada à sua conta." : "A retomada está indisponível neste navegador. Você pode concluir e copiar o resultado, mas recarregar a página perderá as respostas."));
  }
  function shell(kicker, title) {
    hub.replaceChildren();
    const content = node("div", "assessment-content");
    const back = node("a", "back-catalog", "← Biblioteca de assessments");
    back.href = "#catalogo";
    const heading = node("h2", "", title);
    heading.id = "assessment-title";
    heading.tabIndex = -1;
    content.append(back, node("p", "eyebrow", kicker), heading);
    hub.append(content);
    return content;
  }
  function renderIntro() {
    const content = shell("Assessment " + test.number, test.title);
    content.append(node("p", "result-lede", test.intro));
    const facts = node("dl", "disc-facts");
    [["Tempo", test.time], ["Estrutura", test.items.length + " perguntas"], ["Resultado", "Leitura e prática"]].forEach(([label, value]) => {
      const row = node("div"); row.append(node("dt", "", label), node("dd", "", value)); facts.append(row);
    });
    content.append(facts, node("p", "notice", test.note));
    content.append(button("Iniciar " + test.title, () => { state.screen = "quiz"; save(); render(); }, "primary"));
    storageNote(content); sources(content);
  }
  function progress(content) {
    const answered = state.answers.filter(a => model.validAnswer(test, a)).length;
    const row = node("div", "assessment-progress");
    row.append(node("p", "", answered + " de " + test.items.length + " perguntas respondidas"));
    const meter = node("progress");
    meter.max = test.items.length; meter.value = answered;
    meter.setAttribute("aria-label", "Perguntas respondidas");
    row.append(meter); content.append(row);
  }
  function go(page) { state.page = page; save(); render(); }
  function complete() { model.score(test, state.answers); state.screen = "result"; save(); render(); }
  function actions(content, isComplete) {
    const row = node("div", "quiz-actions");
    row.append(button(state.page ? "Voltar" : "Introdução", () => {
      if (state.page) state.page -= 1; else state.screen = "intro";
      save(); render();
    }));
    const last = state.page === pages() - 1;
    const next = button(last ? "Ver meu resultado" : "Próxima página", () => {
      if (!isComplete()) return;
      if (last) {
        const missing = state.answers.findIndex(a => !model.validAnswer(test, a));
        if (missing !== -1) { go(test.kind === "ranking" ? missing : Math.floor(missing / 5)); return; }
        complete();
      } else go(state.page + 1);
    }, "primary");
    next.id = "assessment-next";
    next.disabled = !isComplete();
    row.append(next); content.append(row);
  }
  function renderLikert() {
    const start = state.page * 5;
    const end = Math.min(start + 5, test.items.length);
    const content = shell(test.title + " · página " + (state.page + 1) + " de " + pages(), "Como você se reconhece?");
    progress(content);
    content.append(node("p", "round-help", "Escolha uma resposta para cada afirmação. Considere como você costuma ser hoje, mesmo quando a resposta não parece ideal."));
    const list = node("div", "question-list");
    const isComplete = () => state.answers.slice(start, end).every(a => model.validAnswer(test, a));
    test.items.slice(start, end).forEach((item, offset) => {
      const index = start + offset;
      const field = node("fieldset", "question");
      const legend = node("legend");
      legend.append(node("span", "question-number", String(index + 1).padStart(2, "0")), document.createTextNode(item.text));
      field.append(legend);
      const choices = node("div", "likert-choices");
      labels.forEach((label, i) => {
        const choice = node("label", "choice likert-choice");
        const input = node("input"); input.type = "radio"; input.name = test.id + "-q" + index; input.value = i + 1;
        input.checked = state.answers[index] === i + 1;
        input.addEventListener("change", () => {
          state.answers[index] = i + 1; save();
          document.getElementById("assessment-next").disabled = !isComplete();
          const count = state.answers.filter(a => model.validAnswer(test, a)).length;
          content.querySelector("progress").value = count;
          content.querySelector(".assessment-progress p").textContent = count + " de " + test.items.length + " perguntas respondidas";
          if (!storageAvailable) content.querySelector(".session-note").textContent = "A retomada está indisponível. Copie seu resultado antes de sair desta página.";
        });
        choice.append(input, node("span", "", label)); choices.append(choice);
      });
      field.append(choices); list.append(field);
    });
    content.append(list); actions(content, isComplete); storageNote(content);
  }
  function renderRanking() {
    const question = test.items[state.page];
    const order = state.answers[state.page];
    const content = shell(test.title + " · pergunta " + (state.page + 1) + " de " + test.items.length, question.title);
    progress(content);
    if (order.length < 3) {
      const prompt = node("p", "ranking-prompt", stages[order.length]);
      prompt.setAttribute("role", "status");
      content.append(prompt, node("p", "round-help", "Escolha uma afirmação. As já escolhidas saem desta etapa. Você poderá conferir a ordenação antes de continuar."));
      const choices = node("div", "ranking-choices");
      question.statements.forEach((statement, index) => {
        if (order.includes(index)) return;
        const choice = node("button", "ranking-choice"); choice.type = "button";
        choice.dataset.choice = index;
        choice.append(node("strong", "", statement.text), node("span", "", "Exemplo: " + statement.example));
        choice.addEventListener("click", () => { order.push(index); save(); render(); });
        choices.append(choice);
      });
      content.append(choices);
    } else {
      content.append(node("p", "ranking-prompt", "Confira sua ordenação"));
      const points = model.rankPoints(order);
      const list = node("div", "rank-summary");
      question.statements.forEach((s, index) => {
        const row = node("div"); row.append(node("p", "", s.text), node("strong", "", pointLabels[points[index]])); list.append(row);
      });
      content.append(list);
    }
    if (order.length) content.append(button("Desfazer última escolha", () => { order.pop(); save(); render(); }, "outline"));
    actions(content, () => model.validAnswer(test, order)); storageNote(content);
  }
  function renderResult() {
    const result = model.score(test, state.answers);
    const content = shell("Seu mapa · " + test.title, "O que suas respostas mostram");
    content.append(node("p", "result-lede", model.summary(test, result)), node("p", "metric-note", test.metric));
    const scores = node("div", "assessment-scores");
    const isAffinity = test.kind === "ranking" || test.id === "eneagrama";
    // Preservar a sequência das dimensões; empate nunca escolhe um vencedor pela ordem.
    result.scores.forEach((s, i) => {
      const d = test.dimensions[i];
      const card = node("article", "assessment-score");
      const heading = node("div", "score-name");
      heading.append(node("h3", "", d.label), node("span", "score-value", s.percent.toLocaleString("pt-BR", { maximumFractionDigits: 1 }) + (test.kind === "ranking" ? "%" : "/100")));
      card.append(heading);
      if (isAffinity && result.leaders.includes(s.key)) card.append(node("p", "affinity-label", result.leaders.length > 1 ? "Maior afinidade · empate" : "Maior afinidade nas respostas"));
      const track = node("div", "score-track"); track.setAttribute("aria-hidden", "true");
      const fill = node("i"); fill.style.width = s.percent + "%"; track.append(fill); card.append(track);
      if (d.low) {
        const poles = node("div", "score-poles"); poles.append(node("span", "", d.low), node("span", "", d.high)); card.append(poles);
      }
      card.append(node("p", "score-raw", "Pontuação: " + s.raw + " de " + s.max + (test.kind === "ranking" ? "" : " · média " + s.mean.toLocaleString("pt-BR", { maximumFractionDigits: 2 }) + " de 5")));
      card.append(node("p", "score-description", model.describe(test, d, s)));
      const practice = node("details", "practice"); practice.append(node("summary", "", "Levar para a prática"), node("p", "", d.practice), node("p", "reflection-question", d.question)); card.append(practice);
      scores.append(card);
    });
    content.append(scores);
    const row = node("div", "result-actions");
    const status = node("p", "copy-status"); status.setAttribute("role", "status");
    const fallback = node("textarea", "copy-fallback"); fallback.hidden = true; fallback.readOnly = true;
    fallback.setAttribute("aria-label", "Resultado completo para copiar manualmente");
    row.append(button("Copiar resultado", async () => {
      const text = model.report(test, result);
      try { await navigator.clipboard.writeText(text); status.textContent = "Resultado copiado."; }
      catch (_) { fallback.hidden = false; fallback.value = text; fallback.focus(); fallback.select(); status.textContent = "Selecione e copie o texto abaixo."; }
    }, "primary"));
    row.append(button("Revisar respostas", () => { state.screen = "quiz"; state.page = 0; save(); render(); }));
    const reset = node("div", "reset-confirm"); reset.hidden = true;
    reset.append(node("p", "", "Apagar as respostas deste assessment e começar de novo?"));
    reset.append(button("Apagar e recomeçar", () => { state = fresh(); save(); render(); }), button("Manter resultado", () => { reset.hidden = true; }));
    row.append(button("Refazer", () => { reset.hidden = false; reset.querySelector("button").focus(); }, "outline"));
    content.append(row, status, fallback, reset); sources(content); storageNote(content);
  }
  function render() {
    if (state.screen === "intro") renderIntro();
    else if (state.screen === "result") renderResult();
    else if (test.kind === "ranking") renderRanking();
    else renderLikert();
    focusTitle();
  }
  function route() {
    const aliases = { mbti: "jung", "modos-de-aprendizagem": "aprendizagem", "modo-de-agir": "acao" };
    const hash = location.hash.slice(1);
    const id = aliases[hash] || hash;
    if (!Object.hasOwn(catalog, id)) {
      hub.hidden = true; disc.hidden = false;
      return;
    }
    test = catalog[id]; state = load();
    disc.hidden = true; hub.hidden = false;
    render();
  }
  window.addEventListener("hashchange", route);
  route();
})();
