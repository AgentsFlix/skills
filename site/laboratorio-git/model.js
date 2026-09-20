/* Modelo didático determinístico. Não executa Git, rede ou comandos locais. */
(function (root) {
  'use strict';
  const copy = value => JSON.parse(JSON.stringify(value));
  const equal = (a,b) => JSON.stringify(a) === JSON.stringify(b);
  const base = {gym:false,garden:false,office:false,solar:false,door:false,energy:false,structure:false,roof:'cinza'};
  const project = (id,label,changes,depends=[]) => ({id,label,changes,depends});
  const missions = [
    {id:'primeira',name:'A primeira reforma',tag:'Guiada',worktrees:1,brief:'Crie academia-em-casa, abra essa branch na bancada A e monte a academia. Registre, envie, peça revisão e integre. Por último, entregue a versão aprovada.',projects:[project('academia-em-casa','Montar academia',{gym:true})],goal:{gym:true},lesson:'Você separou experimentar, registrar, compartilhar, revisar, integrar e entregar. São ações diferentes.'},
    {id:'rodizio',name:'Três planos. Uma bancada.',tag:'Organização',worktrees:1,brief:'Academia, jardim e escritório precisam ficar prontos. Há três branches, mas só uma worktree. Faça o revezamento sem perder nenhuma reforma. Todas devem chegar à mesma main.',projects:[project('academia','Montar academia',{gym:true}),project('jardim','Plantar jardim',{garden:true}),project('escritorio','Montar escritório',{office:true})],goal:{gym:true,garden:true,office:true},lesson:'As três branches continuaram existindo. A bancada mostrou uma por vez; o commit não trocou a branch por você.'},
    {id:'paralelo',name:'A equipe ganhou outra bancada',tag:'Paralelo',worktrees:2,brief:'Quatro branches, duas worktrees, uma main. Abra a segunda bancada com uma branch diferente. Deixe trabalho em andamento nas duas ao mesmo tempo antes de concluir tudo.',projects:[project('academia','Montar academia',{gym:true}),project('jardim','Plantar jardim',{garden:true}),project('escritorio','Montar escritório',{office:true}),project('energia-solar','Instalar painéis',{solar:true})],goal:{gym:true,garden:true,office:true,solar:true},parallel:true,lesson:'Cada worktree preservou seus próprios arquivos em edição. As branches e o histórico pertencem ao mesmo repositório.'},
    {id:'urgencia',name:'A porta quebrou no meio da obra',tag:'Interrupção',worktrees:1,brief:'Comece a academia, mas não faça commit ainda. Guarde o rascunho com stash, troque para consertar-porta e integre o reparo primeiro. Depois volte à academia, recupere o rascunho e termine as duas entregas.',projects:[project('academia','Montar academia',{gym:true},['door']),project('consertar-porta','Consertar porta',{door:true})],goal:{gym:true,door:true},stash:true,lesson:'Stash foi uma pausa local. Não foi commit, envio ou backup remoto. Você voltou à branch certa antes de recuperar o rascunho.'},
    {id:'conflito',name:'Duas cores para o mesmo telhado',tag:'Conflito',worktrees:2,brief:'As duas propostas já nasceram da mesma versão: uma clareia o telhado; outra muda a cor e instala painéis. Integre telhado-claro primeiro. Ao integrar paineis, resolva a divergência preservando o telhado marfim E os painéis.',precreate:true,projects:[project('telhado-claro','Pintar de marfim',{roof:'marfim'}),project('paineis','Pintar ciano e instalar painéis',{roof:'ciano',solar:true}),project('jardim','Plantar jardim',{garden:true})],goal:{roof:'marfim',solar:true,garden:true},conflict:true,lesson:'O conflito não era duas pessoas no mesmo projeto. Era duas mudanças incompatíveis no mesmo detalhe. A resolução preservou as intenções importantes.'},
    {id:'entrega',name:'A inauguração não espera',tag:'Autonomia',worktrees:2,brief:'Cinco branches, duas bancadas e dependências reais. A academia depende da elétrica; os painéis dependem do reforço do telhado. O jardim é independente. Integre na ordem que fizer sentido e só entregue quando a casa estiver completa.',projects:[project('academia','Montar academia',{gym:true},['energy']),project('paineis','Instalar painéis',{solar:true},['structure']),project('jardim','Plantar jardim',{garden:true}),project('eletrica','Preparar elétrica',{energy:true}),project('reforco-telhado','Reforçar telhado',{structure:true})],goal:{gym:true,solar:true,garden:true,energy:true,structure:true},parallel:true,lesson:'A ordem veio das dependências, não do nome das branches. E a casa só foi entregue depois da integração. Main e produção são estados diferentes.'}
  ];
  const labels = {gym:'Academia',garden:'Jardim',office:'Escritório',solar:'Painéis solares',door:'Porta reparada',energy:'Elétrica pronta',structure:'Telhado reforçado',roof:'Cor do telhado'};
  function branch(snapshot) {return {base:copy(snapshot),snapshot:copy(snapshot),head:0,pushed:0,pr:false,review:false,merged:false,conflicts:[]};}
  function initial(index=0) {
    const m=missions[index]; if(!m) throw Error('Missão desconhecida');
    const s={version:1,mission:index,branches:{main:branch(base)},worktrees:{A:{branch:'main',draft:copy(base),stash:null}},deployed:copy(base),events:[],stats:{switches:0,parallel:false,stashed:false,restored:false,resolved:false},complete:false};
    if(m.precreate) m.projects.forEach(p=>s.branches[p.id]=branch(base));
    return s;
  }
  const dirty=(s,w)=>!equal(s.worktrees[w].draft,s.branches[s.worktrees[w].branch].snapshot);
  function apply(previous, action) {
    const s=copy(previous),m=missions[s.mission],w=s.worktrees[action.worktree||'A'],b=s.branches[action.branch||(w&&w.branch)];
    const ok=(message)=>{s.events.push({type:action.type,message});s.events=s.events.slice(-60);return {state:s,ok:true,message};};
    const fail=(message)=>({state:previous,ok:false,message});
    const p=m.projects.find(p=>p.id===(action.branch||(w&&w.branch)));
    switch(action.type){
      case 'create':
        if(!m.projects.some(p=>p.id===action.branch))return fail('Este plano não faz parte da missão.');
        if(b)return fail('Essa branch já existe. Agora abra o plano em uma bancada.');
        s.branches[action.branch]=branch(s.branches.main.snapshot);
        return ok('Branch criada a partir da main. Nenhuma pasta nova foi criada. Escolha a branch e abra-a em uma bancada.');
      case 'checkout':
      case 'worktree': {
        if(!b)return fail('Crie essa branch primeiro.');
        if(Object.entries(s.worktrees).some(([key,t])=>t.branch===action.branch && (action.type==='worktree'||key!==action.worktree)))return fail('Essa branch já está aberta em outra worktree. Use uma branch diferente.');
        if(action.type==='worktree'){
          if(Object.keys(s.worktrees).length>=m.worktrees)return fail('Esta missão tem um limite de '+m.worktrees+' bancada(s). Reutilize as que já existem.');
          s.worktrees.B={branch:action.branch,draft:copy(b.snapshot),stash:null};
          return ok('Worktree B criada com '+action.branch+'. Agora há duas pastas de trabalho, mas continua existindo uma main.');
        }
        if(!w)return fail('Bancada não encontrada.');
        if(w.branch===action.branch)return fail('Essa branch já está nesta bancada.');
        if(dirty(s,action.worktree))return fail('Há um rascunho nesta bancada. Neste laboratório, faça commit ou use stash antes de trocar. Nada foi perdido.');
        w.branch=action.branch;w.draft=copy(b.snapshot);s.stats.switches++;
        return ok('Bancada '+action.worktree+' agora mostra '+action.branch+'. As outras branches continuam no repositório.');
      }
      case 'build':
        if(!w||w.branch==='main')return fail('Abra uma branch de reforma nesta bancada. A main fica preservada durante o trabalho.');
        if(!p||b.merged)return fail('Esta reforma já foi integrada.');
        if(Object.entries(p.changes).every(([k,v])=>w.draft[k]===v))return fail('Esta alteração já está montada. Registre-a ou continue o fluxo.');
        Object.assign(w.draft,p.changes);
        if(Object.keys(s.worktrees).filter(key=>dirty(s,key)).length>1)s.stats.parallel=true;
        return ok('Alteração feita só nos arquivos da bancada '+action.worktree+'. Ainda não virou commit.');
      case 'commit':
        if(!w||w.branch==='main'||!dirty(s,action.worktree))return fail('Nenhuma alteração nova para registrar nesta branch.');
        if(m.parallel&&!s.stats.parallel)return fail('Antes do primeiro commit, deixe uma alteração em andamento em cada bancada. Esta missão treina trabalho simultâneo.');
        if(m.stash&&w.branch==='academia'&&!s.stats.restored)return fail('A urgência chegou antes do commit. Guarde este rascunho com stash, repare a porta e depois recupere a academia.');
        b.snapshot=copy(w.draft);b.head++;b.review=false;
        return ok('Commit '+b.head+' registrado em '+w.branch+'. A branch continua aberta nesta bancada. O GitHub ainda não recebeu este commit.');
      case 'stash':
        if(!w||!dirty(s,action.worktree))return fail('Não há rascunho para guardar. Primeiro faça uma alteração.');
        if(w.stash)return fail('Esta bancada já guarda um rascunho. Recupere-o antes de guardar outro.');
        w.stash={branch:w.branch,draft:copy(w.draft)};w.draft=copy(b.snapshot);s.stats.stashed=true;
        return ok('Rascunho guardado localmente. Nenhum commit novo. Agora você pode trocar de branch.');
      case 'restore':
        if(!w||!w.stash)return fail('Nenhum rascunho guardado nesta bancada.');
        if(w.stash.branch!==w.branch)return fail('Volte à branch '+w.stash.branch+' antes de recuperar este rascunho.');
        if(m.stash&&!s.branches['consertar-porta']?.merged)return fail('A porta é urgente: integre o reparo antes de retomar a academia.');
        if(dirty(s,action.worktree))return fail('Registre o trabalho atual antes de recuperar o rascunho.');
        w.draft=copy(w.stash.draft);w.stash=null;s.stats.restored=true;
        return ok('Rascunho recuperado. Ele voltou a ser uma alteração não registrada. Faça commit quando estiver pronto.');
      case 'push':
        if(!b||!p||!b.head)return fail('Primeiro registre a reforma com um commit. Push envia commits, não um rascunho solto.');
        if(b.pushed===b.head)return fail('O remoto simulado já recebeu este commit.');
        b.pushed=b.head;return ok('Commit enviado ao GitHub simulado. Isso ainda não alterou a main nem a casa entregue.');
      case 'pr':
        if(!b||!p||!b.pushed||b.pushed!==b.head)return fail('Envie os commits atuais antes de propor a integração.');
        if(b.pr)return fail('O PR já está aberto. Novos commits enviados atualizam a proposta.');
        b.pr=true;return ok('PR aberto: '+action.branch+' → main. É uma proposta, ainda não é integração.');
      case 'review':
        if(!b||!p||!b.pr||b.pushed!==b.head)return fail('Abra um PR com os commits atuais enviados.');
        if(b.conflicts.length)return fail('Resolva a divergência antes de concluir a revisão.');
        if(!Object.keys(p.changes).every(k=>b.snapshot[k]!==false))return fail('Ainda faltam partes desta reforma.');
        b.review=true;return ok('Diferenças conferidas. Revisão aprovada para o commit atual. Neste laboratório, toda integração exige revisão.');
      case 'merge': {
        if(!b||!p||b.merged)return fail('Escolha um PR ainda não integrado.');
        if(!b.pr||!b.review||b.pushed!==b.head)return fail('Este PR precisa dos commits enviados e da revisão aprovada.');
        if(m.stash&&action.branch==='consertar-porta'&&!s.stats.stashed)return fail('Comece a academia e guarde o rascunho antes de resolver esta interrupção.');
        if(Object.entries(s.worktrees).some(([key,t])=>t.branch===action.branch&&dirty(s,key)))return fail('Ainda há rascunho nessa branch. Termine ou guarde antes de integrar esta entrega.');
        const missing=p.depends.filter(k=>!s.branches.main.snapshot[k]);
        if(missing.length)return fail('Dependência pendente na main: '+missing.map(k=>labels[k]).join(', ')+'. Integre essa base antes.');
        if(m.conflict && action.branch==='paineis' && !s.branches['telhado-claro'].merged)return fail('Neste cenário, a equipe aprovou o telhado claro primeiro. Integre telhado-claro antes de paineis.');
        const changed=Object.keys(base).filter(k=>b.snapshot[k]!==b.base[k]);
        const conflicts=changed.filter(k=>s.branches.main.snapshot[k]!==b.base[k]&&s.branches.main.snapshot[k]!==b.snapshot[k]);
        if(conflicts.length){b.conflicts=conflicts;b.review=false;return {...ok('Conflito: '+conflicts.map(k=>labels[k]).join(', ')+'. Compare as versões e componha o resultado antes de integrar.'),ok:false};}
        changed.forEach(k=>s.branches.main.snapshot[k]=b.snapshot[k]);s.branches.main.head++;b.merged=true;
        // Refresh any clean main checkout; do not refresh other branches automatically.
        Object.values(s.worktrees).filter(t=>t.branch==='main').forEach(t=>t.draft=copy(s.branches.main.snapshot));
        return ok('PR integrado na única main. A versão entregue permanece igual até você fazer deploy.');
      }
      case 'resolve': {
        if(!b||!b.conflicts.length)return fail('Nenhum conflito a resolver nessa branch.');
        if(!['marfim','ciano'].includes(action.roof))return fail('Aplique uma cor no telhado para compor o resultado.');
        const candidate=copy(s.branches.main.snapshot);
        Object.keys(base).filter(k=>b.snapshot[k]!==b.base[k]).forEach(k=>candidate[k]=b.snapshot[k]);
        candidate.roof=action.roof;
        b.base=copy(s.branches.main.snapshot);b.snapshot=candidate;b.head++;b.review=false;b.conflicts=[];s.stats.resolved=true;
        Object.values(s.worktrees).filter(t=>t.branch===action.branch).forEach(t=>t.draft=copy(candidate));
        return ok('Resolução registrada: telhado '+action.roof+' e painéis preservados. Envie o novo commit e revise novamente.');
      }
      case 'deploy':
        if(!m.projects.every(p=>s.branches[p.id]?.merged))return fail('Antes de inaugurar, integre todas as reformas pedidas nesta missão.');
        if(!Object.entries(m.goal).every(([k,v])=>s.branches.main.snapshot[k]===v))return fail('Confira o pedido da casa. O resultado integrado ainda não atende a todos os detalhes. Refaça esta missão para experimentar outra resolução.');
        if(m.parallel&&!s.stats.parallel)return fail('Faltou praticar o trabalho simultâneo: mantenha alterações não registradas nas duas bancadas. Refaça a missão usando as duas em paralelo.');
        if(m.stash&&(!s.stats.stashed||!s.stats.restored))return fail('Faltou praticar guardar e recuperar o rascunho. Refaça a missão usando stash durante a interrupção.');
        if(m.conflict&&!s.stats.resolved)return fail('Faltou resolver o conflito previsto na missão.');
        s.deployed=copy(s.branches.main.snapshot);s.complete=true;return ok('Casa entregue. '+m.lesson);
      default:return fail('Ação desconhecida.');
    }
  }
  function replay(index,actions) {let s=initial(index); for(const action of actions.slice(0,1000))s=apply(s,action).state;return s;}
  root.CasaGit={missions,labels,base,initial,apply,dirty,replay};
})(typeof window==='undefined'?globalThis:window);
