(() => {
  'use strict';

  const root = typeof globalThis !== 'undefined' ? globalThis : this;
  const STORAGE_KEY = 'agentflix-ecf-base-v2';
  const FORMAT = 'agentflix-base-bundle-1';
  const FILENAME = 'minha-base-ecf.json';
  const STAGES = ['negocio', 'pesquisa', 'publico', 'posicionamento', 'voz', 'materia-prima'];
  const owns = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
  const object = value => Boolean(value) && typeof value === 'object' && !Array.isArray(value);

  function validRecord(value, stage, project) {
    if (!object(value) || !object(value.output) || typeof value.saved_at !== 'string') return false;
    try {
      const parse = root.ECFBaseContract?.parse;
      if (typeof parse !== 'function') return false;
      parse(JSON.stringify(value.output), {id: project.id, business_name: project.business_name, stage});
      return true;
    } catch (_) {
      return false;
    }
  }

  function validProject(value, complete = false) {
    if (!object(value) || typeof value.id !== 'string' || !value.id || typeof value.business_name !== 'string' || !value.business_name.trim() || !object(value.records)) return false;
    if (owns(value, 'diagnosis') && !root.ECFBaseScores?.validSummary?.(value.diagnosis)) return false;
    const keys = Object.keys(value.records);
    if (!keys.length || keys.some(key => !STAGES.includes(key) || !validRecord(value.records[key], key, value))) return false;
    return !complete || (keys.length === STAGES.length && STAGES.every(stage => owns(value.records, stage)));
  }

  function createBundle(project, exportedAt = new Date().toISOString()) {
    if (!validProject(project)) throw new Error('A Base ECF salva neste navegador não está pronta para download.');
    const bundle = {
      format: FORMAT,
      exported_at: typeof exportedAt === 'string' && exportedAt ? exportedAt : new Date().toISOString(),
      id: project.id,
      business_name: project.business_name,
      records: project.records
    };
    if (owns(project, 'diagnosis')) bundle.diagnosis = project.diagnosis;
    return {filename: FILENAME, content: JSON.stringify(bundle, null, 2)};
  }

  function activeProject(storage) {
    try {
      const activeStorage = storage || root.localStorage;
      if (!activeStorage || typeof activeStorage.getItem !== 'function') return null;
      const raw = activeStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const store = JSON.parse(raw);
      if (!object(store) || store.version !== 2 || typeof store.active_id !== 'string' || !store.active_id || !object(store.projects)) return null;
      const project = store.projects[store.active_id];
      return project?.id === store.active_id && validProject(project, true) ? project : null;
    } catch (_) {
      return null;
    }
  }

  function activeBundle(storage, exportedAt) {
    const project = activeProject(storage);
    return project ? createBundle(project, exportedAt) : null;
  }

  function download(bundle, documentRef = root.document, urlApi = root.URL) {
    if (!bundle || typeof bundle.filename !== 'string' || typeof bundle.content !== 'string' || !documentRef || !urlApi?.createObjectURL || !root.Blob) return false;
    const url = urlApi.createObjectURL(new root.Blob([bundle.content], {type: 'application/json'}));
    const anchor = documentRef.createElement('a');
    anchor.href = url;
    anchor.download = bundle.filename;
    anchor.click();
    root.setTimeout?.(() => urlApi.revokeObjectURL?.(url), 2000);
    return true;
  }

  root.ECFBaseBundle = {STORAGE_KEY, FORMAT, FILENAME, STAGES, validProject, createBundle, activeProject, activeBundle, download};
  if (typeof module !== 'undefined') module.exports = root.ECFBaseBundle;
})();
