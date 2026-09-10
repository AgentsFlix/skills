(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BrandJourney = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, () => {
  'use strict';
  const dependencies = [[], [0], [0,1], [0,1,2], [0,1], [0,1,2,3,4], [1,2,3,5], [3,4,5,6], [0,1,2,3,4,5,6,7]];
  const requiredChecks = {7:['static','carousel','reusable'],8:['pilot','corrections','index','operation']};
  const stamp = () => new Date().toISOString();
  const blankStage = () => ({choice:null,context:'',continuity:'',copiedAt:null,started:false,reviewed:false,saved:false,where:'',criterion:false,checks:{},pending:'',handoff:'',mode:'',needsReview:[],revision:1,history:[],confirmedAt:null});
  function createBrand(name, id) { return {id,name:name.trim()||'Minha marca',lastStage:0,stages:Array.from({length:9},blankStage),folder:{url:'',confirmed:false,at:null},createdAt:stamp()}; }
  function hasWork(s) { return Boolean(s.copiedAt||s.started||s.reviewed||s.saved||s.handoff); }
  function archive(s) { if (hasWork(s)) s.history.push({at:stamp(),revision:s.revision,choice:s.choice,context:s.context,continuity:s.continuity,handoff:s.handoff,mode:s.mode,reviewed:s.reviewed,saved:s.saved,where:s.where,criterion:s.criterion,checks:{...s.checks},pending:s.pending}); }
  function clearReview(s) { s.reviewed=false;s.saved=false;s.criterion=false;s.checks={};s.confirmedAt=null; }
  function affected(i) { const result=new Set([i]); for(let j=i+1;j<9;j++)if(dependencies[j].some(k=>result.has(k)))result.add(j);return [...result].filter(j=>j!==i); }
  function invalidate(b,i) {
    affected(i).forEach(j=>{const s=b.stages[j];if(hasWork(s)||s.needsReview.length){if(!s.needsReview.includes(i))archive(s);clearReview(s);if(!s.needsReview.includes(i))s.needsReview.push(i);}});
    b.folder.confirmed=false;b.folder.at=null;
  }
  function changeInput(b,i,key,value) {
    if(!['choice','context','continuity'].includes(key))throw Error('Campo inválido');
    const s=b.stages[i];if(s[key]===value)return;
    const used=hasWork(s);if(!s.needsReview.length||s.copiedAt)archive(s);s[key]=value;s.revision++;s.copiedAt=null;
    if(used){clearReview(s);if(!s.needsReview.includes(i))s.needsReview.push(i);}
    invalidate(b,i);
  }
  function setMockup(b,value) {
    if(!validMockup(value))throw Error('Mockup inválido');const next=JSON.parse(JSON.stringify(value));if(JSON.stringify(b.mockup)===JSON.stringify(next))return;
    const s=b.stages[6];archive(s);if(b.mockup)s.history.push({at:stamp(),revision:s.revision,mockup:JSON.parse(JSON.stringify(b.mockup))});const used=hasWork(s);s.revision++;s.copiedAt=null;
    if(used){clearReview(s);if(!s.needsReview.includes(6))s.needsReview.push(6);}
    b.mockup=next;invalidate(b,6);
  }
  function criteria(s,i) {return s.criterion&&(requiredChecks[i]||[]).every(k=>s.checks[k]===true);}
  function status(b,i) {
    const s=b.stages[i];
    if(s.needsReview.length)return 'Precisa revisar';
    if(s.reviewed&&s.saved&&s.where.trim()) {
      if(!criteria(s,i)||s.pending.trim()||dependencies[i].some(j=>status(b,j)!=='Concluída'))return 'Concluída com pendências';
      return 'Concluída';
    }
    if(s.saved&&s.where.trim())return 'Arquivo guardado';
    if(s.reviewed)return 'Resumo revisado';
    if(s.started)return 'Conversa iniciada';
    if(s.copiedAt)return 'Prompt copiado';
    if(s.choice!==null||s.context.trim()||s.continuity.trim())return 'Prompt preparado';
    return 'Não iniciada';
  }
  function recordReturn(b,i,payload) {
    const s=b.stages[i],wasApproved=s.reviewed||s.saved;
    const contentChanged=s.handoff!==payload.handoff||s.pending!==payload.pending;
    if(wasApproved&&contentChanged){archive(s);s.revision++;invalidate(b,i);}
    const previous=status(b,i);
    Object.assign(s,payload);s.saved=Boolean(payload.saved&&s.where.trim());s.confirmedAt=stamp();
    if(s.reviewed&&s.saved&&criteria(s,i))s.needsReview=[];
    if(previous==='Concluída'&&status(b,i)!=='Concluída')invalidate(b,i);
  }
  function driveURL(value) {try{const u=new URL(value);return u.protocol==='https:'&&u.hostname==='drive.google.com'&&/\/folders\/[^/]+/.test(u.pathname)&&!u.username&&!u.password?u.href:null;}catch(_){return null;}}
  function ready(b) {return b.stages.every((_,i)=>status(b,i)==='Concluída')&&b.folder.confirmed&&Boolean(driveURL(b.folder.url));}
  function latestHandoff(b,i) {for(let j=i-1;j>=0;j--)if(b.stages[j].handoff.trim())return b.stages[j].handoff;return '';}
  function prompt(data,b,i,agent) {
    const s=b.stages[i],d=data.stages[i],choice=s.choice===null?'Ainda não escolhi; ajude-me a descobrir':`${d.options[s.choice].title}: ${d.options[s.choice].description}`;
    let text=d.prompt.replace('[PONTO DE PARTIDA]',()=>choice).replace('Meu contexto adicional: [CONTEXTO ADICIONAL]\n',()=>s.context.trim()?`Meu contexto adicional: ${s.context.trim()}\n`:'').replace('[CONTINUIDADE]',()=>s.continuity.trim()||latestHandoff(b,i)||'Use o contexto desta conversa; peça o que estiver faltando');
    if([7,8].includes(i))text=text.replace('SKILLS E RECORTE\n',`SKILLS E RECORTE\nReferências candidatas: ${d.skills.join(', ')}. Verifique disponibilidade e adaptação antes de usar.\n`);
    const pending=dependencies[i].filter(j=>status(b,j)!=='Concluída').map(j=>`${data.stages[j].short}: ${status(b,j)}${b.stages[j].pending?'; '+b.stages[j].pending:''}`);
    text+=`\n\nCONTEXTO DA INTERFACE\nFormatos desta jornada: estática e todos os slides do carrossel em 1080 × 1350 px, 4:5.\nNegócio informado por mim: ${b.name}\nAgente escolhido: ${agent||'Ainda não informado; verifique os recursos disponíveis.'}\nSe meu texto livre corrigir o ponto de partida, respeite a correção. Não transforme a categoria escolhida em fatos.\n${agent==='Modo guiado por prompt'?'Trabalhe em modo guiado por prompt; não alegue execução de skills.\n':''}${pending.length?'Entradas com confirmação pendente na interface (autodeclaração):\n'+pending.join('\n')+'\nVerifique comigo os documentos vigentes antes de executar trabalho dependente.\n':''}Registros da interface são declarações minhas, não verificação do agente ou do Drive.\n${s.pending?'Pendências ou correções que registrei nesta etapa: '+s.pending+'\n':''}${s.handoff?'Resumo anterior desta etapa, para revisar sem repetir toda a entrevista: '+s.handoff+'\n':''}${s.needsReview.length?'Decisões alteradas que precisam de conferência: '+s.needsReview.map(j=>data.stages[j].short).join(', ')+'. Não sobrescreva a entrega anterior sem reconciliar comigo.\n':''}\nPASTA DESTA JORNADA\n${data.folderTree.replace('Minha marca/',()=>b.name+'/')}\nResolva os nomes curtos dos documentos pelos caminhos acima no LEIA-ME.md. Preserve os registros nativos das skills e sua origem. Não misture marcas.\n\nMETADADOS DOS DOCUMENTOS\nIdentifique documento, versao, atualizado_em, status (um único valor: rascunho, revisado, aprovado ou precisa_revisar), aprovado_por, fontes, registros_de_origem e pendencias. Use null ou pendência para dados desconhecidos.\n${b.folder.url?'Destino informado (acesso e conteúdo ainda não verificados): '+b.folder.url+'\n':''}`;
    if(b.mockup&&i>=6)text+='\nREFERÊNCIA VISUAL ESCOLHIDA (não aprovada)\n'+JSON.stringify(b.mockup,null,2)+'\nÉ um mockup editável de partida, não uma identidade pronta nem um exemplo aprovado. Peça o ZIP de SVGs e a receita quando necessário; confira o conteúdo, fontes, imagens e contraste. A escolha não substitui aplicações reais, templates dos dois formatos ou aprovação do piloto.\n';
    return text;
  }
  function validMockup(v) {return v&&typeof v==='object'&&['style','layout','format','brand','niche','title','body','cta','accent'].every(k=>typeof v[k]==='string')&&['static','carousel'].includes(v.format);}
  function validStore(x) {
    const text=v=>typeof v==='string',bool=v=>typeof v==='boolean';
    return x?.version===1&&text(x.agent)&&Array.isArray(x.brands)&&x.brands.length<=100&&x.brands.every(b=>(b.mockup===undefined||validMockup(b.mockup))&&text(b.id)&&text(b.name)&&Number.isInteger(b.lastStage)&&b.lastStage>=0&&b.lastStage<9&&b.folder&&text(b.folder.url)&&bool(b.folder.confirmed)&&Array.isArray(b.stages)&&b.stages.length===9&&b.stages.every(s=>(s.choice===null||Number.isInteger(s.choice)&&s.choice>=0&&s.choice<3)&&['context','continuity','where','pending','handoff','mode'].every(k=>text(s[k]))&&['started','reviewed','saved','criterion'].every(k=>bool(s[k]))&&Array.isArray(s.needsReview)&&s.needsReview.every(n=>Number.isInteger(n)&&n>=0&&n<9)&&Number.isInteger(s.revision)&&s.revision>0&&Array.isArray(s.history)&&s.history.every(h=>h&&typeof h==='object')&&s.checks&&typeof s.checks==='object'))&&new Set(x.brands.map(b=>b.id)).size===x.brands.length;
  }
  return Object.freeze({createBrand,changeInput,setMockup,recordReturn,status,ready,driveURL,prompt,latestHandoff,validStore,dependencies,requiredChecks,stamp});
});
