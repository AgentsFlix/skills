/* Respostas da visita, restritas à aba. Instalações continuam em vitrine-state.js. */
((root, factory) => {
  if (typeof module === 'object' && module.exports) module.exports = factory;
  else root.AgentFlixVisit = factory;
})(typeof window === 'undefined' ? globalThis : window, (data, storage) => {
  'use strict';
  const key = 'agentflix-visit-v1';
  const revision = JSON.stringify(data.guia);
  function decode(value) {
    if (!value || value.version !== 1 || value.revision !== revision || !['avulsa','colecao','guia'].includes(value.kind) ||
        !Array.isArray(value.answers) || value.answers.length > 3 || typeof value.completed !== 'boolean') return null;
    const trail = [value.kind === 'avulsa' ? 'o_que_agora' : 'inicio'];
    let result = null;
    for (const answer of value.answers) {
      const option = Number.isInteger(answer) && data.guia[trail.at(-1)]?.o[answer];
      if (!option || result) return null;
      if (option.vai && data.guia[option.vai]) trail.push(option.vai);
      else if (option.skill && data.skills[option.skill]) result = option;
      else return null;
    }
    if (value.completed && !result) return null;
    return {kind:value.kind, answers:[...value.answers], completed:value.completed, trail, result,
      door:value.kind === 'guia' ? null : value.kind};
  }
  function load() {
    try { return decode(JSON.parse(storage.getItem(key))); } catch { return null; }
  }
  function save(kind, answers, completed) {
    const value = {version:1,revision,kind,answers,completed};
    if (!decode(value)) return false;
    try { storage.setItem(key, JSON.stringify(value)); return true; } catch { return false; }
  }
  function clear() { try { storage.removeItem(key); } catch {} }
  return {key,load,save,clear};
});
