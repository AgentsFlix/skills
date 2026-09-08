/* Curadoria por necessidade. Os textos e as amostras vêm do protótipo aprovado. */
(() => {
  'use strict';
  const esc = t => String(t ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const $ = id => document.getElementById(id);
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scroll = el => el?.scrollIntoView({block:'start',behavior:reduced()?'auto':'smooth'});
  window.AgentFlixDiscovery = {
    create(data, by, hooks) {
      if (data.schema_version !== 1 || !data.skills || !Array.isArray(data.fileiras) || !data.guia?.inicio || !data.colecoes || !data.amostras || !Array.isArray(data.lentes_em)) throw Error('Curadoria inválida');
      const available = Object.keys(data.skills).filter(slug => by[slug]);
      const legends = Object.values(by).filter(s => s.cat === 'lendas');
      if (Object.values(by).some(s=>s.cat!=='lendas'&&!data.skills[s.slug]) || available.some(slug=>!Array.isArray(data.skills[slug].antes))) throw Error('Curadoria incompleta');
      const journey = window.AgentFlixJourney(data, Object.keys(by), {getItem:key=>localStorage.getItem(key),setItem:(key,value)=>localStorage.setItem(key,value)});
      let door = null, trail = ['inicio'], result = null, completeOnboarding = false;
      let lens = null, current = null, run = 0, timeout = null, release = null, target = null;
      const meta = s => data.skills[s.slug];
      const name = slug => by[slug]?.name || slug;
      const cover = slug => `https://imagedelivery.net/4Co9W7pMsYa-duNBi7UzxA/covers/${encodeURIComponent(slug)}-wide.jpg/capa`;
      const titleFocus = container => { const h = container.querySelector('h1,h2,h3'); if(h){h.tabIndex=-1;h.focus({preventScroll:true});} };
      const matches = s => !door || (meta(s) && (door === 'colecao' ? !!meta(s).colecao : !meta(s).colecao));
      const counts = {avulsa:available.filter(s=>!data.skills[s].colecao).length,colecao:available.filter(s=>data.skills[s].colecao).length};
      const dots = n => `<span class="skill-dots" aria-hidden="true">${Array.from({length:n},()=>'<i></i>').join('')}</span>`;
      function setDoor(value) { door=value; hooks.filter(); }
      function home() {
        $('discovery').hidden=false;
        $('discovery').innerHTML=`<div class="discovery-intro"><div><p class="eyebrow">Seu ponto de partida</p><h1>O que você quer fazer agora?</h1><p>Escolha um caminho. A gente indica por onde começar.</p></div><a class="learn-link" href="/assistir/?s=hermes-agent">Como instalar o Hermes <span aria-hidden="true">↗</span></a></div>
          <div class="doors" id="doors">
          <button class="door" data-door="avulsa"><span class="door-icon" aria-hidden="true">↗</span><h2>Quero resolver uma coisa hoje</h2><p>Pega, usa, pronto. Não guarda nada, não pede pasta, não faz entrevista.</p><span class="door-visual"><span>${counts.avulsa} skills para tarefas pontuais</span>${dots(counts.avulsa)}<small>Cada ponto representa uma skill disponível.</small></span><b class="door-cta">Escolher minha tarefa <span aria-hidden="true">→</span></b></button>
          <button class="door" data-door="colecao"><span class="door-icon" aria-hidden="true">▤</span><h2>Quero montar o cérebro do negócio</h2><p>Abre uma pasta, entrevista você, acumula. Depois todas as outras leem de lá.</p><span class="door-visual collection-dots">${Object.entries(data.colecoes).map(([id,c])=>{const n=available.filter(slug=>data.skills[slug].colecao===id).length;return `<span class="dot-group"><span>${esc(c.nome)} <b>${n}</b></span>${dots(n)}</span>`}).join('')}<small>Cada ponto é uma skill. Cada grupo compartilha arquivos.</small></span><b class="door-cta">Montar meu caminho <span aria-hidden="true">→</span></b></button>
          <button class="door" id="guide-open" data-door="guia"><span class="door-icon" aria-hidden="true">?</span><h2>Não sei o que pegar</h2><p>Três perguntas. No fim, uma skill só e o comando pronto para colar.</p><span class="door-visual"><span class="question-dots" aria-hidden="true"><i>1</i><i>2</i><i>3</i></span><span>Responda até três perguntas.</span><small>A indicação considera o que você já tem e o que quer fazer.</small></span><b class="door-cta">Me ajude a escolher <span aria-hidden="true">→</span></b></button></div>
          <section id="guide" class="guide" aria-label="Guia para escolher uma skill" hidden></section><p id="discovery-status" class="sr-only" role="status"></p>`;
        $('doors').querySelectorAll('[data-door]').forEach(b=>b.addEventListener('click',()=>start(b.dataset.door)));
      }
      function start(kind) {
        door=kind==='guia'?null:kind; completeOnboarding=false; result=null; target=null;
        trail=[kind==='avulsa'?'o_que_agora':'inicio'];
        $('discovery').hidden=false; $('doors').hidden=true; $('guide').hidden=false;
        hooks.filter(); paintGuide(); scroll($('discovery')); titleFocus($('guide'));
      }
      function toggleGuide() {
        completeOnboarding=false;result=null;target=null;door=null;
        $('discovery').hidden=false;$('doors').hidden=false;$('guide').hidden=true;
        hooks.filter();scroll($('discovery'));titleFocus($('discovery'));
      }
      function recommendation() {
        const r=result&&journey.recommend(result.skill);if(!r)return '';
        const s=by[r.slug];
        const reason=r.done?'Você já marcou esta etapa como instalada.':r.after?`Você já instalou ${name(r.after)}. Esta é uma continuação do seu caminho.`:r.slug!==r.goal?`Para chegar a ${name(r.goal)}, comece por ${s.name}. É um pré-requisito que ainda falta instalar.`:'Esta skill atende à escolha que você fez.';
        return `<article class="recommended-piece" data-recommended="${esc(s.slug)}"><img alt="" src="${cover(s.slug)}"><div><p class="eyebrow">${r.done?'Seu caminho está em dia':'Recomendado para você'}</p><h2>${esc(s.name)}</h2><p>${esc(s.sub)}</p><p class="recommend-reason">${esc(reason)}</p>${completeOnboarding?`<button class="guide-primary" data-act="open" data-slug="${esc(s.slug)}">${journey.has(s.slug)?'Rever a skill':'Começar por aqui'}</button>`:''}</div></article>`;
      }
      function renderRecommendation() {
        $('recommendation').innerHTML = completeOnboarding ? `<div class="selection-heading"><div><p class="eyebrow">Seu caminho</p><p>Objetivo: ${esc(name(result.skill))}</p></div><button data-discover-guide>Refazer minhas escolhas</button></div>${recommendation()}` : '';
      }
      function paintGuide() {
        const node=data.guia[trail.at(-1)];
        const content=result ? recommendation()+`<button class="guide-primary enter-selection" data-enter-selection>Abrir minha seleção <span aria-hidden="true">→</span></button>` : `<p class="eyebrow">Pergunta ${trail.length}</p><h2>${esc(node.p)}</h2>${node.ajuda?`<p>${esc(node.ajuda)}</p>`:''}<div class="guide-options">${node.o.map((o,i)=>`<button data-option="${i}">${esc(o.t)}<span aria-hidden="true">›</span></button>`).join('')}</div>`;
        $('guide').classList.toggle('has-result',!!result);
        $('guide').innerHTML=content+`<div class="guide-nav">${trail.length>1||result?'<button data-guide-back>← Voltar</button>':''}<button data-guide-reset>Trocar de caminho</button></div>`;
        $('guide').querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>{const o=node.o[Number(b.dataset.option)];if(o.vai)trail.push(o.vai);else result=o;paintGuide();titleFocus($('guide'));}));
        $('guide').querySelector('[data-guide-back]')?.addEventListener('click',()=>{if(result)result=null;else trail.pop();paintGuide();titleFocus($('guide'));});
        $('guide').querySelector('[data-guide-reset]').addEventListener('click',toggleGuide);
        $('guide').querySelector('[data-enter-selection]')?.addEventListener('click',()=>{
          completeOnboarding=true;$('discovery').hidden=true;hooks.filter();renderRecommendation();scroll($('recommendation'));titleFocus($('recommendation'));hooks.enter();
        });
      }
      function status(s) {
        const missing=journey.missing(s.slug);
        if(missing.length)return 'Antes: '+missing.map(name).join(', ');
        return journey.has(s.slug)?'✓ Instalado':'Pronto para instalar';
      }
      function card(s) {
        const m=meta(s);if(!m)return '';
        const label=m.colecao ? (m.passo===0?'Atalho':`Coleção${m.passo?' · passo '+m.passo:''}`) : 'Avulsa';
        return `<div class="journey-info"><div class="journey-label">${esc(label)}${data.amostras[s.slug]&&!journey.locked(s.slug)?'<span>▶ Amostra</span>':''}</div><h3>${esc(s.name)}</h3><p>${esc(s.sub)}</p><small class="${journey.locked(s.slug)?'needs':''}" title="${esc(status(s))}">${esc(status(s))}</small></div>`;
      }
      function gate(s) {
        target=s.slug;const next=journey.firstNeeded(s.slug);
        return `<div class="prerequisite-gate"><p class="eyebrow">Uma etapa antes</p><h2>${esc(s.name)}</h2><p>Para liberar esta skill, marque os pré-requisitos como instalados.</p><ul>${journey.missing(s.slug).map(dep=>`<li>${esc(name(dep))}</li>`).join('')}</ul><p>Comece por <strong>${esc(name(next))}</strong>. Depois de instalar, confirme na ficha.</p><button class="guide-primary" data-act="open" data-slug="${esc(next)}">Ir para ${esc(name(next))} <span aria-hidden="true">→</span></button></div>`;
      }
      function installationButton(s) {
        return `<button class="installed-control" data-installed="${esc(s.slug)}" aria-pressed="${journey.has(s.slug)}" aria-describedby="installation-help">${journey.has(s.slug)?'✓ Instalado':'Marcar como instalado'}</button>`;
      }
      function installation(s) {
        return `<section class="installation-state" data-install-area>${installationButton(s)}<p id="installation-help">Marque depois de instalar no seu agente. A confirmação fica salva neste navegador.</p><p class="installation-feedback" role="status"></p><div class="installation-next">${nextLink(s)}</div></section>`;
      }
      function nextLink(s) {
        if(!journey.has(s.slug))return '';
        const goal=target||result?.skill;
        const next=goal&&journey.recommend(goal);
        return next&&next.slug!==s.slug?`<button class="guide-primary" data-act="open" data-slug="${esc(next.slug)}">Continuar com ${esc(name(next.slug))} →</button>`:'';
      }
      function context(s) {
        const m=meta(s);if(!m)return '';
        const c=m.colecao&&data.colecoes[m.colecao];
        return `<div class="discovery-detail"><div class="context-block">${m.nota?`<p>${esc(m.nota)}</p>`:''}${c?`<h3>Faz parte de: ${esc(c.nome)}</h3><p>${esc(c.explica)}</p><details><summary>Onde fica salvo</summary><p>${esc(c.pasta)} · config <code>${esc(c.chave)}</code></p></details>`:''}${m.antes.length?'<p class="prerequisites-ready">✓ Pré-requisitos instalados</p>':''}</div></div>`;
      }
      function extras(s) {
        const a=data.amostras[s.slug],hasLens=data.lentes_em.includes(s.slug);
        return `<div class="discovery-detail">${hasLens?`<section class="context-block"><h3>Escrever com a régua de</h3><div class="lenses">${legends.map(l=>`<button data-lens="${esc(l.slug)}" aria-pressed="false" title="${esc(l.sub)}">${esc(l.name)}</button>`).join('')}</div><p class="lens-note" id="lens-note">Escolha uma régua para orientar o texto de uso desta skill.</p><p class="legal">Skill independente: reúne o método publicado em livros, cursos e entrevistas do autor. Sem afiliação nem endosso dele.</p><div id="lens-usage" hidden></div></section>`:''}
          ${a?sampleHTML(a):''}</div>`;
      }
      function sampleHTML(a) {
        return `<section class="context-block sample"><h3>Amostra de conversa</h3><p>${esc(a.legenda)}</p><p class="sample-case"><b>Simulação com caso fictício</b> ${esc(data.caso)}</p>
          <div class="phone" aria-label="Simulação de conversa no Telegram"><div class="phone-top"><span class="phone-avatar">H</span><div><b>Hermes</b><span>Conversa de exemplo</span></div></div><div class="sample-chat" id="sample-chat" tabindex="0" aria-label="Conversa de exemplo, role para ler"></div><div class="phone-bottom" aria-hidden="true">Mensagem <span>➤</span></div></div>
          <div class="sample-controls"><button id="sample-play">Reproduzir amostra</button><button id="sample-all">Ver conversa completa</button><span id="sample-progress" role="status"></span></div></section>`;
      }
      function format(t) {
        // Código é separado antes da formatação para preservar quebras e caracteres.
        return String(t||'').split(/(```[\s\S]*?```)/g).map(part=>part.startsWith('```')?`<pre>${esc(part.slice(3,-3).replace(/^\n|\n$/g,''))}</pre>`:esc(part).replace(/\*([^*\n]+)\*/g,'<b>$1</b>').replace(/`([^`\n]+)`/g,'<code>$1</code>').replace(/\n/g,'<br>')).join('');
      }
      function pieces() {const a=data.amostras[current];return a?.variantes?.[lens]||a?.peca||[];}
      function bubble(t) {
        if(t.doc)return `<div class="bubble bot document"><b>↓ ${esc(t.doc.nome)}</b><span>${esc(t.doc.meta)}</span></div>`;
        if(t.chave==='peca')return `<div class="bubble bot">${pieces().map(p=>`<strong>${esc(p.t)}</strong><small>${esc(p.n)}</small>`).join('')}</div>`;
        return `<div class="bubble ${t.de==='eu'?'user':'bot'}">${format(t.t)}</div>`;
      }
      function cancel() {run++;clearTimeout(timeout);timeout=null;if(release){release();release=null;}}
      const wait = ms => new Promise(resolve=>{release=resolve;timeout=setTimeout(()=>{release=null;resolve();},ms);});
      function complete() {
        cancel();const a=data.amostras[current];if(!a||!$('sample-chat'))return;
        $('sample-chat').innerHTML=a.roteiro.map(bubble).join('');$('sample-chat').scrollTop=0;
        $('sample-play').dataset.playing='false';$('sample-play').textContent='Reproduzir amostra';$('sample-progress').textContent='Conversa completa';
      }
      async function play() {
        if($('sample-play').dataset.playing==='true'){cancel();$('sample-play').dataset.playing='false';$('sample-play').textContent='Recomeçar amostra';$('sample-chat').querySelector('.typing')?.remove();return;}
        if(reduced()){complete();return;}
        cancel();const id=run,a=data.amostras[current],chat=$('sample-chat'),button=$('sample-play');
        button.dataset.playing='true';button.textContent='Pausar amostra';chat.innerHTML='';
        for(let i=0;i<a.roteiro.length;i++){
          const t=a.roteiro[i];
          if(t.typing)chat.insertAdjacentHTML('beforeend','<div class="typing" aria-hidden="true">•••</div>');
          chat.scrollTop=chat.scrollHeight;await wait(t.typing||430);if(id!==run)return;
          chat.querySelector('.typing')?.remove();chat.insertAdjacentHTML('beforeend',bubble(t));chat.scrollTop=chat.scrollHeight;
          $('sample-progress').textContent=`${i+1} de ${a.roteiro.length}`;
          await wait(300);if(id!==run)return;
        }
        button.dataset.playing='false';button.textContent='Repetir amostra';
      }
      function bind(s) {
        cancel();current=s.slug;lens=null;
        const panel=$('modal');
        panel.querySelectorAll('[data-installed]').forEach(button=>button.addEventListener('click',e=>{
          const outcome=journey.setInstalled(s.slug,!journey.has(s.slug));
          if(!outcome.ok)return;
          panel.querySelectorAll('[data-installed]').forEach(control=>{
            control.setAttribute('aria-pressed',String(journey.has(s.slug)));
            control.textContent=journey.has(s.slug)?'✓ Instalado':'Marcar como instalado';
          });
          // Só a posição acionada anuncia a mudança, sem duplicar a leitura de status.
          panel.querySelectorAll('.installation-feedback').forEach(message=>message.textContent='');
          e.currentTarget.closest('[data-install-area]').querySelector('.installation-feedback').textContent=outcome.saved?(journey.has(s.slug)?'Instalação marcada. Seu caminho foi atualizado.':'Marcação removida. As skills que dependem desta ficam bloqueadas.'): 'A marcação vale nesta visita. Não foi possível salvar neste navegador.';
          panel.querySelector('.installation-next').innerHTML=nextLink(s);
          hooks.changed();renderRecommendation();
        }));
        panel.querySelectorAll('[data-lens]').forEach(b=>b.addEventListener('click',()=>{
          lens=lens===b.dataset.lens?null:b.dataset.lens;
          panel.querySelectorAll('[data-lens]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.lens===lens)));
          const l=lens&&by[lens],usage=$('lens-usage');
          usage.hidden=!l;
          if(l){const text=s.how+'\n\nUse a régua de '+l.name+' ('+l.slug+').';usage.innerHTML=`<label for="usage-text">Depois de instalar, diga</label><textarea id="usage-text" readonly>${esc(text)}</textarea><button data-usage-copy>Copiar texto de uso</button><button data-act="open" data-slug="${esc(l.slug)}">Ver e instalar a régua</button>`;usage.querySelector('[data-usage-copy]').addEventListener('click',async e=>{try{await navigator.clipboard.writeText(text);e.target.textContent='Copiado ✓';}catch{e.target.textContent='Selecione o texto para copiar';$('usage-text').select();}});}
          $('lens-note').textContent=l ? `Régua de ${l.name}: ${l.sub}${data.amostras[s.slug]&&!data.amostras[s.slug].variantes?.[lens]?' Ainda não há amostra desta régua; a conversa abaixo usa o exemplo padrão.':''}` : 'Escolha uma régua para orientar o texto de uso desta skill.';
          complete();
        }));
        if(data.amostras[s.slug]){complete();$('sample-play').addEventListener('click',play);$('sample-all').addEventListener('click',()=>{complete();$('sample-play').dataset.playing='false';});}
      }
      home();
      window.addEventListener('storage',e=>{if(e.key===journey.key||e.key===null){journey.reload();hooks.changed(true);renderRecommendation();}});
      return {matches,card,context,extras,bind,cancel,setDoor,toggleGuide,installation,installationButton,gate,status,
        locked:journey.locked, renderRecommendation, endVisit(){target=null;},
        get completed(){return completeOnboarding;},
        rows:data.fileiras.map(f=>({id:f.id,title:()=>f.titulo,note:f.sub,ids:available.filter(slug=>data.skills[slug].fileira===f.id),journey:true})),
        get door(){return door;}
      };
    }
  };
})();
