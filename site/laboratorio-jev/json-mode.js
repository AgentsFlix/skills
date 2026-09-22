// One editable representation of the same fields, never an independent request.
export function validateEditorPayload(value, buildQuestion) {
  const exact = (object, keys) => object && typeof object === 'object' && !Array.isArray(object) && Object.keys(object).length === keys.length && keys.every(key => Object.hasOwn(object, key));
  if (!exact(value, ['state', 'questions']) || !exact(value.state, ['personagem'])) throw Error('Use os blocos state.personagem e questions. Os limiares ficam fora do estado.');
  const person = value.state.personagem;
  if (!exact(person, ['nome', 'caracteristicas', 'acao_decisiva'])) throw Error('A ficha usa somente nome, caracteristicas e acao_decisiva. Não inclua uma casa ou resposta desejada.');
  if (typeof person.nome !== 'string' || !person.nome.trim() || person.nome.length > 120 || typeof person.acao_decisiva !== 'string' || !person.acao_decisiva.trim() || person.acao_decisiva.length > 1200) throw Error('Nome e ação precisam ser textos preenchidos (até 120 e 1.200 caracteres).');
  if (!Array.isArray(person.caracteristicas) || person.caracteristicas.length < 1 || person.caracteristicas.length > 12 || person.caracteristicas.some(item => typeof item !== 'string' || !item.trim() || item.length > 400)) throw Error('Características: uma lista de 1 a 12 textos preenchidos, de até 400 caracteres cada.');
  if (!exact(value.questions, ['decisao'])) throw Error('Esta experiência usa uma pergunta chamada decisao.');
  const question = value.questions.decisao;
  if (!exact(question, ['type', 'instructions', 'criteria']) || typeof question.instructions !== 'string') throw Error('A pergunta precisa de type, instructions e criteria.');
  const criteria = question.criteria;
  if (question.type === 'score' ? !Array.isArray(criteria) : !criteria || typeof criteria !== 'object' || Array.isArray(criteria)) throw Error('Use uma lista de níveis em score; um objeto de opções em choice ou noul.');
  if (question.type === 'noul' && !exact(criteria, ['true', 'false'])) throw Error('Em noul, descreva exatamente true e false.');
  const rows = Object.entries(criteria).map(([name, description]) => ({name, description}));
  if (rows.some(row => typeof row.description !== 'string')) throw Error('Cada critério precisa ser um texto.');
  buildQuestion(question.type, question.instructions, rows);
  return structuredClone(value);
}

export function highlightJson(container, text) {
  container.replaceChildren();
  const regex = /("(?:\\.|[^"\\])*")(?=\s*:)|("(?:\\.|[^"\\])*")|\b(true|false|null|-?\d+(?:\.\d+)?)\b/g;
  let cursor = 0;
  for (const match of text.matchAll(regex)) {
    const span = document.createElement('span'); span.className = match[1] ? 'json-key' : match[2] ? 'json-value' : 'json-literal'; span.textContent = match[0];
    container.append(document.createTextNode(text.slice(cursor, match.index)), span); cursor = match.index + match[0].length;
  }
  container.append(document.createTextNode(text.slice(cursor) + '\n'));
}
