(() => {
  'use strict';
  const scenes=[...document.querySelectorAll('.base-scene')];
  const root=document.querySelector('#content');
  let current=0;
  const controls=document.createElement('nav');
  controls.className='base-controls';
  controls.setAttribute('aria-label','Navegação da base editorial');
  controls.innerHTML='<button type="button" class="base-back">← Voltar</button><span class="base-progress"></span><button type="button" class="base-next">Próxima etapa <span aria-hidden="true">→</span></button>';
  root.append(controls);
  const back=controls.querySelector('.base-back'), next=controls.querySelector('.base-next'), progress=controls.querySelector('.base-progress');
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
  function go(index){current=Math.max(0,Math.min(scenes.length-1,index));history.replaceState(null,'','#etapa-'+(current+1));window.ECFBaseDashboard?.hide();update();}
  root.addEventListener('click',event=>{const link=event.target.closest('[data-base-nav]');if(link){event.preventDefault();go(ECFBaseStages.findIndex(stage=>stage.id===link.dataset.baseNav));}});
  back.addEventListener('click',()=>go(current-1));
  next.addEventListener('click',()=>{if(current<scenes.length-1)go(current+1);else if(window.ECFBaseFlow?.isComplete()){history.replaceState(null,'','#dashboard');window.ECFBaseDashboard?.show();}});
  window.addEventListener('hashchange',()=>{if(location.hash==='#dashboard'){if(window.ECFBaseDashboard?.show())return;history.replaceState(null,'','#etapa-1');current=0;update(false);return;}window.ECFBaseDashboard?.hide();current=indexFromHash();update();});
  window.addEventListener('ecf:base-updated',()=>{if(location.hash!=='#dashboard')update(false);});
  current=indexFromHash();
  const dashboardShown=location.hash==='#dashboard'&&window.ECFBaseDashboard?.show();
  if(!dashboardShown){
    if(location.hash==='#dashboard')history.replaceState(null,'','#etapa-1');
    window.ECFBaseDashboard?.hide();
    update(false);
  }
})();
