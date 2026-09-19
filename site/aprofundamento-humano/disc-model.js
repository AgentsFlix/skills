(function () {
  "use strict";

  function validChoice(choice) {
    return Number.isInteger(choice) && choice >= 0 && choice <= 3;
  }

  function isRoundComplete(questions, answers, roundId) {
    return questions.every(function (_, index) {
      return answers[index] && validChoice(answers[index][roundId]);
    });
  }

  function isChoiceUsed(answers, questionIndex, roundId, choiceIndex) {
    const answer = answers[questionIndex] || {};
    return Object.keys(answer).some(function (key) {
      return key !== roundId && answer[key] === choiceIndex;
    });
  }

  function score(questions, answers, weights) {
    const totals = { D: 0, I: 0, S: 0, C: 0 };
    questions.forEach(function (question, questionIndex) {
      const answer = answers[questionIndex];
      if (!answer) throw new Error("Assessment incompleto");

      const choiceScores = [weights.unselected, weights.unselected, weights.unselected, weights.unselected];
      ["most", "least", "somewhat"].forEach(function (roundId) {
        const choice = answer[roundId];
        if (!validChoice(choice)) throw new Error("Assessment incompleto");
        choiceScores[choice] = weights[roundId];
      });

      if (new Set([answer.most, answer.least, answer.somewhat]).size !== 3) {
        throw new Error("Uma alternativa não pode ser repetida na mesma pergunta");
      }

      choiceScores.forEach(function (value, choiceIndex) {
        totals[question.mapping[choiceIndex]] += value;
      });
    });
    return totals;
  }

  function primary(scores) {
    return ["D", "I", "S", "C"].reduce(function (winner, dimension) {
      return scores[dimension] > scores[winner] ? dimension : winner;
    }, "D");
  }

  window.AgentFlixDiscModel = Object.freeze({
    isRoundComplete: isRoundComplete,
    isChoiceUsed: isChoiceUsed,
    score: score,
    primary: primary
  });
})();
