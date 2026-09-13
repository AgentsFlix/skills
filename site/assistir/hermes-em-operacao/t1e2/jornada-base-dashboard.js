(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BrandBaseDashboard = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, () => {
  'use strict';

  const stages = Object.freeze([
    {id:'negocio',label:'Negócio',file:'negocio.json',art:'art/base-dashboard/01-negocio.webp'},
    {id:'pesquisa',label:'Pesquisa',file:'pesquisa.json',art:'art/base-dashboard/02-pesquisa.webp'},
    {id:'publico',label:'Público',file:'publico.json',art:'art/base-dashboard/03-publico.webp'},
    {id:'posicionamento',label:'Posicionamento',file:'posicionamento.json',art:'art/base-dashboard/04-posicionamento.webp'},
    {id:'voz',label:'Voz',file:'voz.json',art:'art/base-dashboard/05-voz.webp'},
    {id:'materia-prima',label:'Matéria-prima',file:'materia-prima.json',art:'art/base-dashboard/06-materia-prima.webp'}
  ]);
  const ids = new Set(stages.map(stage => stage.id));
  const allowedStatuses = new Set(['rascunho','revisado','aprovado','precisa_revisar']);
  const plainObject = value => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  const text = value => typeof value === 'string' ? value.trim() : '';
  const count = value => Array.isArray(value) ? value.length : plainObject(value) ? Object.keys(value).length : 0;
  const limit = (value, max=4000) => text(value).slice(0,max);

  function parseRecord(stage, candidate, fallbackSavedAt='') {
    const output = plainObject(candidate?.output) ? candidate.output : candidate;
    if (!plainObject(output)) throw Error(`${stage.file} não contém um objeto JSON válido.`);
    if (output.stage !== stage.id) throw Error(`${stage.file} precisa declarar stage: "${stage.id}".`);
    const summary = limit(output.summary);
    if (!summary) throw Error(`${stage.file} não tem o resumo obrigatório.`);
    const status = text(output.status);
    if (!allowedStatuses.has(status)) throw Error(`${stage.file} tem um status inválido.`);
    return Object.freeze({
      id: stage.id,
      label: stage.label,
      art: stage.art,
      filename: text(candidate?.filename) || stage.file,
      status,
      summary,
      decisions: count(output.decisions),
      sources: count(output.sources),
      pending: count(output.pending),
      documents: count(output.documents),
      updatedAt: text(output.updated_at) || text(candidate?.saved_at) || fallbackSavedAt
    });
  }

  function project(records, businessName='', createdAt='') {
    if (!plainObject(records)) throw Error('A base precisa trazer os seis registros da jornada.');
    const found = Object.keys(records);
    const missing = stages.filter(stage => !Object.prototype.hasOwnProperty.call(records,stage.id));
    const unexpected = found.filter(id => !ids.has(id));
    if (missing.length || unexpected.length) {
      const parts=[];
      if (missing.length) parts.push(`faltam: ${missing.map(stage=>stage.file).join(', ')}`);
      if (unexpected.length) parts.push(`não são aceitos: ${unexpected.join(', ')}`);
      throw Error(`O pacote precisa ter somente seis itens (${parts.join('; ')}).`);
    }
    const normalized = stages.map(stage => parseRecord(stage,records[stage.id],createdAt));
    const safeName = limit(businessName,100) || limit(normalized.map(stage=>records[stage.id]?.output?.business_name || records[stage.id]?.business_name).find(Boolean),100) || 'Minha marca';
    return Object.freeze({
      schema:'agentflix-base-dashboard-1',
      businessName:safeName,
      createdAt:text(createdAt),
      records:normalized
    });
  }

  function fromBundle(value) {
    if (!plainObject(value) || value.format !== 'agentflix-base-bundle-1') throw Error('Escolha um pacote AgentFlix no formato agentflix-base-bundle-1.');
    return project(value.records,value.business_name,value.created_at || value.exported_at);
  }

  function fromRecords(values) {
    if (!Array.isArray(values) || values.length !== stages.length) throw Error('Selecione um pacote único ou os seis JSON da base.');
    const records={};
    for (const value of values) {
      if (!plainObject(value) || !ids.has(value.stage)) throw Error('Cada arquivo precisa declarar uma etapa válida da base.');
      if (records[value.stage]) throw Error(`A etapa ${value.stage} foi enviada mais de uma vez.`);
      records[value.stage]=value;
    }
    return project(records);
  }

  function validProjection(value) {
    return plainObject(value) && value.schema === 'agentflix-base-dashboard-1' && typeof value.businessName === 'string' && typeof value.createdAt === 'string' && Array.isArray(value.records) && value.records.length === stages.length && value.records.every((record,index) => {
      const stage=stages[index];
      return plainObject(record) && record.id===stage.id && record.label===stage.label && record.art===stage.art && typeof record.filename==='string' && allowedStatuses.has(record.status) && typeof record.summary==='string' && ['decisions','sources','pending','documents'].every(key => Number.isInteger(record[key]) && record[key]>=0) && typeof record.updatedAt==='string';
    });
  }

  function totals(projection) {
    if (!validProjection(projection)) return null;
    return projection.records.reduce((result,record) => {
      result.reviewed += ['revisado','aprovado'].includes(record.status) ? 1 : 0;
      result.decisions += record.decisions;
      result.sources += record.sources;
      result.pending += record.pending;
      return result;
    },{reviewed:0,decisions:0,sources:0,pending:0});
  }

  return Object.freeze({stages,fromBundle,fromRecords,validProjection,totals});
});
