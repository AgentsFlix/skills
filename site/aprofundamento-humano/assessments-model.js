(function () {
  "use strict";

  function validAnswer(test, answer) {
    if (test.kind === "ranking") {
      return Array.isArray(answer) && answer.length === 3 &&
        Array.from(answer).every(n => Number.isInteger(n) && n >= 0 && n < 4) && new Set(answer).size === 3;
    }
    return Number.isInteger(answer) && answer >= 1 && answer <= 5;
  }

  function rankPoints(order) {
    if (!validAnswer({ kind: "ranking" }, order)) throw new Error("Ordenação incompleta ou repetida");
    const values = [4, 4, 4, 4];
    order.forEach((index, stage) => { values[index] = [0, 9, 1][stage]; });
    return values;
  }

  function score(test, answers) {
    if (!Array.isArray(answers) || answers.length !== test.items.length ||
      !Array.from(answers).every(answer => validAnswer(test, answer))) throw new Error("Responda a todas as perguntas");
    const totals = Object.fromEntries(test.dimensions.map(d => [d.key, { raw: 0, count: 0 }]));
    test.items.forEach((item, index) => {
      if (test.kind === "ranking") {
        const points = rankPoints(answers[index]);
        item.statements.forEach((statement, i) => {
          totals[statement.profile].raw += points[i];
          totals[statement.profile].count += 1;
        });
      } else {
        totals[item.dimension].raw += item.reverse ? 6 - answers[index] : answers[index];
        totals[item.dimension].count += 1;
      }
    });
    const scores = test.dimensions.map(d => {
      const { raw, count } = totals[d.key];
      const max = count * (test.kind === "ranking" ? 9 : 5);
      const mean = raw / count;
      const percent = test.kind === "ranking" ? raw / max * 100 : (mean - 1) / 4 * 100;
      return { key: d.key, raw, count, max, mean, percent: Math.round(percent * 100) / 100 };
    });
    const highest = Math.max(...scores.map(s => s.raw / s.count));
    const leaders = scores.filter(s => Math.abs(s.raw / s.count - highest) < 1e-9).map(s => s.key);
    const code = test.id === "jung" ? scores.map((s, i) => s.percent === 50 ? "X" :
      s.percent > 50 ? test.dimensions[i].highCode : test.dimensions[i].lowCode).join("") : null;
    return { scores, leaders, code };
  }

  function describe(test, dimension, value) {
    if (!dimension.low) return dimension.description;
    if (value.percent >= 40 && value.percent <= 60) return "Respostas próximas ao centro: os dois polos aparecem com intensidade semelhante. " + dimension.description;
    return value.percent < 50 ? dimension.lowText : dimension.highText;
  }

  function summary(test, result) {
    if (test.id === "jung") return "Preferências nesta sessão: " + result.code + ". Leia cada par abaixo; X indica empate, e a proximidade do centro pede uma leitura aberta.";
    if (test.id === "big-five") return "Cinco dimensões, cada uma com sua própria leitura. Não há um traço vencedor ou um perfil ideal.";
    if (test.id === "acao") return "Seu modo de agir combina quatro dimensões. Observe quais condições facilitam seu trabalho em cada uma delas.";
    const names = result.leaders.map(key => test.dimensions.find(d => d.key === key).label);
    return (names.length > 1 ? "Afinidades empatadas: " : "Maior afinidade nas respostas: ") + names.join(" · ") +
      ". Compare também os demais resultados e procure exemplos da sua vida.";
  }

  function report(test, result) {
    const lines = ["AgentFlix · " + test.title, "", summary(test, result), "", test.metric];
    result.scores.forEach((s, i) => {
      const d = test.dimensions[i];
      lines.push("", d.label + ": " + s.percent.toLocaleString("pt-BR") + "/100 (" + s.raw + "/" + s.max + " pontos)");
      if (d.low) lines.push("Polos: " + d.low + " → " + d.high);
      lines.push(describe(test, d, s), "Experimente: " + d.practice, "Reflita: " + d.question);
    });
    lines.push("", test.note, "", ...test.sources.map(s => s.title + ": " + s.url));
    return lines.join("\n");
  }

  window.AgentFlixAssessmentModel = Object.freeze({ validAnswer, rankPoints, score, describe, summary, report });
})();
