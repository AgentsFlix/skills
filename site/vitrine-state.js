/* Estado de instalação e dependências da vitrine. Sem chamadas ao agente. */
((root, factory) => {
  if (typeof module === 'object' && module.exports) module.exports = factory;
  else root.AgentFlixJourney = factory;
})(typeof window === 'undefined' ? globalThis : window, (data, slugs, storage) => {
  'use strict';
  const known = new Set(slugs), key = 'agentflix-installed-v1';
  const dependencies = slug => data.skills[slug]?.antes || [];
  const visited = new Set();
  function validate(slug, trail = new Set()) {
    if (!known.has(slug) || trail.has(slug)) throw Error('Pré-requisito inválido');
    if (visited.has(slug)) return;
    const next = new Set(trail).add(slug);
    if (!Array.isArray(dependencies(slug))) throw Error('Pré-requisito inválido');
    dependencies(slug).forEach(dep => validate(dep, next));
    visited.add(slug);
  }
  Object.keys(data.skills).forEach(slug => validate(slug));
  let installed = new Set();
  function reload() {
    try {
      const raw = JSON.parse(storage.getItem(key) || '[]');
      installed = new Set(Array.isArray(raw) ? raw.filter(slug => known.has(slug)) : []);
    } catch { installed = new Set(); }
  }
  reload();
  const has = slug => installed.has(slug);
  const ready = slug => known.has(slug) && has(slug) && dependencies(slug).every(ready);
  const missing = slug => dependencies(slug).filter(dep => !ready(dep));
  const locked = slug => !known.has(slug) || missing(slug).length > 0;
  function firstNeeded(slug) {
    const dep = missing(slug)[0];
    return dep ? firstNeeded(dep) : slug;
  }
  function setInstalled(slug, value) {
    if (!known.has(slug) || (value && locked(slug))) return {ok:false};
    if (value) installed.add(slug); else installed.delete(slug);
    try { storage.setItem(key, JSON.stringify([...installed])); return {ok:true,saved:true}; }
    catch { return {ok:true,saved:false}; }
  }
  function recommend(goal) {
    if (!known.has(goal)) return null;
    if (!ready(goal)) return {slug:firstNeeded(goal), goal};
    const m = data.skills[goal];
    const candidates = Object.keys(data.skills).filter(slug => slug !== goal && !ready(slug));
    // Depois do objetivo, prioriza a continuação que ele libera; depois, a mesma necessidade.
    const next = candidates.find(slug => dependencies(slug).includes(goal) && !locked(slug)) ||
      candidates.find(slug => m?.colecao && data.skills[slug].colecao === m.colecao && !locked(slug)) ||
      candidates.find(slug => data.skills[slug].fileira === m?.fileira && !locked(slug));
    return next ? {slug:firstNeeded(next),goal:next,after:goal} : {slug:goal,goal,done:true};
  }
  return {key,has,ready,missing,locked,firstNeeded,setInstalled,reload,recommend};
});
