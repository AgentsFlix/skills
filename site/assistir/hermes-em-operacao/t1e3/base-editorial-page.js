(() => {
  'use strict';
  const scenes=[...document.querySelectorAll('.base-scene')];
  const root=document.querySelector('#content');
  const shell=document.querySelector('.base-editorial-shell');
  const guideKey='agentflix-ecf-onboarding-v3';
  const guideCopy=[
    {
      stageTitle:'Primeiro, deixe claro o que você vende.',
      stageBody:'Aqui você organiza suas ofertas, como entrega e quem já compra.',
      choiceBody:'Indique o que quer conquistar no Instagram. Faça com calma: exemplos concretos evitam que o Hermes preencha lacunas por conta própria.',
      outcome:'Ao terminar, você terá um retrato do negócio que consegue ler e dizer: é isso que eu faço.'
    },
    {
      stageTitle:'Agora, escute como o público fala.',
      stageBody:'O Hermes vai buscar perguntas, desejos, objeções e tentativas em fontes públicas.',
      choiceBody:'Escolha como a pesquisa deve começar. Uma pesquisa cuidadosa preserva as palavras reais das pessoas e separa evidência de suposição.',
      outcome:'Ao terminar, você terá um corpus confiável para criar conteúdo sem inventar dores ou falas.'
    },
    {
      stageTitle:'Escolha quem merece sua atenção primeiro.',
      stageBody:'Com a pesquisa em mãos, você transforma sinais dispersos em uma escolha de público.',
      choiceBody:'Escolha o recorte mais útil. Vá com calma para distinguir o que as fontes mostram do que ainda é apenas hipótese.',
      outcome:'Ao terminar, você saberá para quem falar, o que essa pessoa procura e quais dúvidas ainda precisam de resposta.'
    },
    {
      stageTitle:'Dê ao público uma razão para escolher você.',
      stageBody:'Aqui você cruza resultado, método, diferenciais e provas disponíveis.',
      choiceBody:'Escolha a pista mais próxima. A clareza importa mais que uma frase bonita: cada promessa precisa caber no que o negócio realmente entrega.',
      outcome:'Ao terminar, você terá uma proposta clara para apresentar o negócio sem exagerar nem soar igual a todo mundo.'
    },
    {
      stageTitle:'Faça a marca soar como ela mesma.',
      stageBody:'Você vai escolher um ponto de partida e comparar exemplos até reconhecer o tom certo.',
      choiceBody:'Escolha a direção inicial. Observe palavras, ritmo, humor e o que nunca combina com a sua marca.',
      outcome:'Ao terminar, o Hermes terá regras e exemplos para escrever de um jeito que parece seu.'
    },
    {
      stageTitle:'Reúna o que já pode virar conteúdo.',
      stageBody:'Histórias, dúvidas, métodos, aulas e documentos ganham valor quando têm fonte e contexto.',
      choiceBody:'Escolha por onde começar. Explore uma origem por vez para preservar o que é fato, opinião e hipótese.',
      outcome:'Ao terminar, você terá matéria-prima concreta para criar além de dicas genéricas.'
    }
  ];
  let current=0;
  let guideState={intro:false,actions:[]},guideTarget=null,guideActionTarget=null,guideMode='';
  const controls=document.createElement('nav');
  controls.className='base-controls';
  controls.setAttribute('aria-label','Navegação da base editorial');
  controls.innerHTML='<button type="button" class="base-back">← Voltar</button><span class="base-progress"></span><button type="button" class="base-next">Próxima etapa <span aria-hidden="true">→</span></button>';
  root.append(controls);
  const back=controls.querySelector('.base-back'), next=controls.querySelector('.base-next'), progress=controls.querySelector('.base-progress');
  const guideBackdrop=document.createElement('div');
  guideBackdrop.className='base-tour-backdrop';guideBackdrop.hidden=true;
  const guide=document.createElement('section');
  guide.className='base-tour-dialog';guide.hidden=true;guide.setAttribute('role','dialog');guide.setAttribute('aria-modal','true');guide.setAttribute('aria-labelledby','base-tour-title');guide.setAttribute('aria-describedby','base-tour-description');
  guide.innerHTML='<p class="eyebrow base-tour-kicker"></p><h2 id="base-tour-title"></h2><p id="base-tour-description" class="base-tour-copy"></p><p class="base-tour-outcome"></p><button type="button" class="primary">Ok, vamos lá</button>';
  document.body.append(guideBackdrop,guide);
  const guideButton=guide.querySelector('button'),guideKicker=guide.querySelector('.base-tour-kicker'),guideTitle=guide.querySelector('h2'),guideDescription=guide.querySelector('.base-tour-copy'),guideOutcome=guide.querySelector('.base-tour-outcome');
  try{const saved=JSON.parse(sessionStorage.getItem(guideKey)||'null');if(saved?.version===3&&typeof saved.intro==='boolean'&&Array.isArray(saved.actions))guideState={intro:saved.intro,actions:saved.actions.filter(value=>typeof value==='string')};}catch(_){}
  function saveGuide(){try{sessionStorage.setItem(guideKey,JSON.stringify({version:3,...guideState}));}catch(_){}}
  function actionToken(index,action){return ECFBaseStages[index].id+':'+action;}
  function completeAction(index,action){const token=actionToken(index,action);if(!guideState.actions.includes(token)){guideState.actions.push(token);saveGuide();}}
  function clearGuide(){
    guideTarget?.closest('.base-workspace')?.classList.remove('base-tour-workspace-open');guideTarget?.closest('.base-nav')?.classList.remove('base-tour-nav-open');guideTarget?.classList.remove('base-tour-target','base-tour-area-target');guideActionTarget?.classList.remove('base-tour-action-target');guideTarget=null;guideActionTarget=null;guideMode='';
    guide.style.removeProperty('--tour-left');guide.style.removeProperty('--tour-top');guide.style.removeProperty('--tour-arrow-left');
    guide.hidden=true;guideBackdrop.hidden=true;guideButton.hidden=false;guide.classList.remove('base-tour-intro','base-tour-return','base-tour-stage','base-tour-detail','base-tour-detail-choices','base-tour-detail-prompt','base-tour-detail-upload');document.body.classList.remove('base-tour-open','base-tour-action-open');shell.inert=false;
  }
  function positionGuide(){
    if(!guideTarget||guide.hidden)return;
    if(guideMode==='stage'){
      const target=guideTarget.getBoundingClientRect(),panel=guide.getBoundingClientRect(),pad=16;
      const center=Math.max(panel.width/2+pad,Math.min(target.left+target.width/2,innerWidth-panel.width/2-pad));
      const top=Math.max(pad,Math.min(target.bottom+20,innerHeight-panel.height-pad));
      const panelLeft=center-panel.width/2,arrow=Math.max(24,Math.min(target.left+target.width/2-panelLeft,panel.width-24));
      guide.style.setProperty('--tour-left',center+'px');guide.style.setProperty('--tour-top',top+'px');guide.style.setProperty('--tour-arrow-left',arrow+'px');return;
    }
    if(innerWidth<=800||!['copy','upload'].includes(guideMode))return;
    const target=guideTarget.getBoundingClientRect(),panel=guide.getBoundingClientRect(),gap=24,pad=24;
    const preferred=guideMode==='copy'?target.right+gap:target.left-gap-panel.width;
    const left=Math.max(pad,Math.min(preferred,innerWidth-panel.width-pad));
    const top=Math.max(panel.height/2+pad,Math.min(target.top+target.height/2,innerHeight-panel.height/2-pad));
    guide.style.setProperty('--tour-left',left+'px');guide.style.setProperty('--tour-top',top+'px');
  }
  function revealActionTarget(){
    if(innerWidth>800||!guideActionTarget||guide.hidden)return;
    const action=guideActionTarget.getBoundingClientRect(),panel=guide.getBoundingClientRect(),desired=Math.min(innerHeight-action.height-16,panel.bottom+18);
    window.scrollBy({top:action.top-desired,behavior:'auto'});
  }
  function openGuide(mode,index=0){
    clearGuide();guideMode=mode;
    const stage=ECFBaseStages[index],copy=guideCopy[index];
    if(mode==='intro'){
      guide.classList.add('base-tour-intro');guideKicker.textContent='SUA BASE EDITORIAL';guideTitle.textContent='No fim, seu conteúdo começa com clareza.';
      guideDescription.textContent='Em seis etapas, você transforma o que sabe sobre seu negócio em uma base pronta para orientar pesquisa, público, posicionamento, voz e pautas.';
      guideOutcome.textContent='Quando terminar, o Hermes terá contexto para criar sem adivinhar e você terá tudo organizado para revisar, atualizar e usar de novo.';
      guideButton.textContent='Ok, vamos lá';
    }else if(mode==='stage'){
      guide.classList.add('base-tour-stage');guideKicker.textContent=(index+1)+' DE '+ECFBaseStages.length+' · '+stage.short.toUpperCase();guideTitle.textContent=copy.stageTitle;guideDescription.textContent=copy.stageBody;
      guideOutcome.textContent='Primeiro, entenda o papel desta etapa. Depois você escolhe como começar.';guideTarget=scenes[index].querySelector('[data-base-nav="'+stage.id+'"]');guideButton.textContent='Continuar';
    }else if(mode==='choice'){
      guide.classList.add('base-tour-detail','base-tour-detail-choices');guideKicker.textContent=(index+1)+' DE '+ECFBaseStages.length+' · '+stage.short.toUpperCase();guideTitle.textContent=stage.question;guideDescription.textContent=copy.choiceBody;
      guideOutcome.textContent=copy.outcome+' Clique em uma das três figuras para continuar.';guideTarget=scenes[index].querySelector('.base-decision');guideButton.hidden=true;
    }else if(mode==='copy'){
      guide.classList.add('base-tour-detail','base-tour-detail-prompt');guideKicker.textContent='01 · LEVE PARA O HERMES';guideTitle.textContent='Leve este ponto de partida para o Hermes.';
      guideDescription.textContent=index===0?'Preencha o nome do negócio, confira a figura escolhida e acrescente contexto somente se houver algo importante para o Hermes saber.':'Confira a figura escolhida e acrescente contexto somente se houver algo importante para o Hermes saber.';
      guideOutcome.textContent='Quando estiver pronto, clique no botão destacado “Copiar prompt para o Hermes”.';guideTarget=scenes[index].querySelector('.base-prompt-side');guideActionTarget=scenes[index].querySelector('.base-copy');guideButton.hidden=true;
    }else if(mode==='return'){
      guide.classList.add('base-tour-intro','base-tour-return');guideKicker.textContent='PROMPT COPIADO';guideTitle.textContent='Agora, deixe o Hermes trabalhar.';
      guideDescription.textContent='Cole o prompt na conversa com o Hermes e responda às perguntas até ele concluir esta etapa.';
      guideOutcome.textContent='Quando ele entregar '+stage.id+'.json, salve o arquivo e volte para esta tela.';guideButton.textContent='Estou com o arquivo';
    }else if(mode==='upload'){
      guide.classList.add('base-tour-detail','base-tour-detail-upload');guideKicker.textContent='02 · TRAGA O RESULTADO';guideTitle.textContent='Traga o arquivo de volta para a sua base.';
      guideDescription.textContent='Para demonstrar o fluxo, clique no botão destacado “Preencher com exemplo fictício”. Para usar o resultado real, clique em “Abrir '+stage.id+'.json”.';
      guideOutcome.textContent='A tela confere o formato e guarda o resultado neste navegador. Resultado esperado: '+stage.result.charAt(0).toLowerCase()+stage.result.slice(1);guideTarget=scenes[index].querySelector('.base-upload-side');guideActionTarget=scenes[index].querySelector('.base-fictional:not([disabled]), .base-upload-empty:not([hidden]) .base-file-button, .base-receipt:not([hidden]) .base-replace');guideButton.hidden=true;
    }else if(mode==='importing'){
      guide.classList.add('base-tour-intro');guideKicker.textContent='CONFERINDO O ARQUIVO';guideTitle.textContent='Só um instante.';guideDescription.textContent='A tela está validando o arquivo que voltou do Hermes.';guideOutcome.textContent='Se o formato estiver correto, esta etapa será salva no navegador automaticamente.';guideButton.hidden=true;
    }
    const modal=mode==='intro'||mode==='stage'||mode==='return'||mode==='importing';
    if(guideTarget){guideTarget.classList.add(mode==='stage'?'base-tour-target':'base-tour-area-target');guideTarget.closest('.base-nav')?.classList.toggle('base-tour-nav-open',mode==='stage');guideTarget.closest('.base-workspace')?.classList.add('base-tour-workspace-open');guideTarget.scrollIntoView({block:mode==='stage'?'nearest':'start',inline:mode==='stage'?'center':'nearest',behavior:'auto'});}if(guideActionTarget)guideActionTarget.classList.add('base-tour-action-target');
    guide.setAttribute('aria-modal',String(modal));guideBackdrop.hidden=false;guide.hidden=false;document.body.classList.add(modal?'base-tour-open':'base-tour-action-open');shell.inert=modal;
    requestAnimationFrame(()=>{positionGuide();revealActionTarget();if(modal&&!guideButton.hidden)guideButton.focus({preventScroll:true});else if(mode==='choice')scenes[index].querySelector('.base-choice')?.focus({preventScroll:true});else guideActionTarget?.focus({preventScroll:true});});
  }
  function showStageGuide(index){
    const id=ECFBaseStages[index]?.id;if(!id||location.hash==='#dashboard')return;
    if(!guideState.actions.includes(actionToken(index,'stage'))){openGuide('stage',index);return;}
    if(!guideState.actions.includes(actionToken(index,'choice'))){openGuide('choice',index);return;}
    if(!guideState.actions.includes(actionToken(index,'copy'))){openGuide('copy',index);return;}
    if(!guideState.actions.includes(actionToken(index,'ready'))){openGuide('return',index);return;}
    if(window.ECFBaseFlow?.project()?.records?.[id]){completeAction(index,'upload');return;}
    if(!guideState.actions.includes(actionToken(index,'upload')))openGuide('upload',index);
  }
  function scheduleStageGuide(index){requestAnimationFrame(()=>showStageGuide(index));}
  guideButton.addEventListener('click',()=>{
    if(guideMode==='intro'){
      guideState.intro=true;saveGuide();clearGuide();scheduleStageGuide(current);return;
    }
    if(guideMode==='stage'){completeAction(current,'stage');openGuide('choice',current);return;}
    if(guideMode==='return'){completeAction(current,'ready');openGuide('upload',current);}
  });
  window.addEventListener('ecf:prompt-copied',event=>{if(event.detail?.index!==current||guideMode!=='copy')return;completeAction(current,'copy');openGuide('return',current);});
  window.addEventListener('ecf:file-imported',event=>{if(event.detail?.index!==current)return;completeAction(current,'upload');clearGuide();next.focus({preventScroll:true});});
  window.addEventListener('ecf:fictional-filled',event=>{
    if(event.detail?.index!==current)return;
    ['stage','choice','copy','ready','upload'].forEach(action=>completeAction(current,action));
    clearGuide();next.focus({preventScroll:true});
  });
  window.addEventListener('ecf:file-import-failed',event=>{if(event.detail?.index===current)clearGuide();});
  window.addEventListener('resize',()=>requestAnimationFrame(()=>{positionGuide();revealActionTarget();}));
  document.addEventListener('keydown',event=>{
    if(event.key!=='Tab'||!guideTarget||!['choice','copy','upload'].includes(guideMode))return;
    const focusable=[...guideTarget.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),summary,[tabindex]:not([tabindex="-1"])')].filter(element=>!element.hidden&&element.getClientRects().length);
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1],active=document.activeElement;
    if(!guideTarget.contains(active)){event.preventDefault();first.focus();}
    else if(event.shiftKey&&active===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&active===last){event.preventDefault();first.focus();}
  });
  function indexFromHash(){const match=/^#etapa-(\d+)$/.exec(location.hash);return match?Math.max(0,Math.min(scenes.length-1,Number(match[1])-1)):0;}
  function update(focus=true){
    const complete=window.ECFBaseFlow?.isComplete();
    scenes.forEach((scene,index)=>{scene.hidden=index!==current;scene.querySelectorAll('[data-base-nav]').forEach(link=>link.setAttribute('aria-current',link.dataset.baseNav===ECFBaseStages[current]?.id?'step':'false'));});
    back.disabled=current===0;
    progress.textContent='Base · '+(current+1)+' / '+scenes.length;
    next.innerHTML=current===scenes.length-1?(complete?'Ver minha base <span aria-hidden="true">→</span>':'Concluir a 6ª etapa'):'Encontrar '+(ECFBaseStages[current+1]?.short?.toLowerCase()||'a próxima etapa')+' <span aria-hidden="true">→</span>';
    next.disabled=current===scenes.length-1&&!complete;
    if(focus){scenes[current].querySelector('h1')?.focus({preventScroll:true});requestAnimationFrame(()=>window.scrollTo(0,0));}
  }
  function go(index){current=Math.max(0,Math.min(scenes.length-1,index));history.replaceState(null,'','#etapa-'+(current+1));window.ECFBaseDashboard?.hide();update();scheduleStageGuide(current);}
  root.addEventListener('click',event=>{const choice=event.target.closest('[data-choice]');if(choice&&guideMode==='choice'&&choice.closest('.base-scene')===scenes[current]){completeAction(current,'choice');openGuide('copy',current);return;}const link=event.target.closest('[data-base-nav]');if(link){event.preventDefault();go(ECFBaseStages.findIndex(stage=>stage.id===link.dataset.baseNav));}});
  root.addEventListener('change',event=>{if(event.target.matches('.base-file-input')&&event.target.files?.length&&guideMode==='upload'&&event.target.closest('.base-scene')===scenes[current])openGuide('importing',current);});
  back.addEventListener('click',()=>go(current-1));
  next.addEventListener('click',()=>{if(current<scenes.length-1)go(current+1);else if(window.ECFBaseFlow?.isComplete()){history.replaceState(null,'','#dashboard');window.ECFBaseDashboard?.show();}});
  window.addEventListener('hashchange',()=>{if(location.hash==='#dashboard'){clearGuide();if(window.ECFBaseDashboard?.show())return;history.replaceState(null,'','#etapa-1');current=0;update(false);return;}window.ECFBaseDashboard?.hide();current=indexFromHash();update();scheduleStageGuide(current);});
  window.addEventListener('ecf:base-updated',()=>{if(location.hash!=='#dashboard')update(false);});
  current=indexFromHash();
  const dashboardShown=location.hash==='#dashboard'&&window.ECFBaseDashboard?.show();
  if(!dashboardShown){
    if(location.hash==='#dashboard')history.replaceState(null,'','#etapa-1');
    window.ECFBaseDashboard?.hide();
    update(false);
    if(!guideState.intro)requestAnimationFrame(()=>openGuide('intro'));
    else scheduleStageGuide(current);
  }
})();
