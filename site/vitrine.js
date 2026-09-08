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
      let door = null, trail = ['inicio'], result = null, lens = null, current = null, run = 0, timeout = null, release = null;
      const meta = s => data.skills[s.slug];
      const name = slug => by[slug]?.name || slug;
      const cover = slug => `https://imagedelivery.net/4Co9W7pMsYa-duNBi7UzxA/covers/${encodeURIComponent(slug)}-wide.jpg/capa`;
      const titleFocus = container => { const h = container.querySelector('h2,h3'); if(h){h.tabIndex=-1;h.focus({preventScroll:true});} };
      const matches = s => !door || (meta(s) && (door === 'colecao' ? !!meta(s).colecao : !meta(s).colecao));
      const counts = {avulsa:available.filter(s=>!data.skills[s].colecao).length,colecao:available.filter(s=>data.skills[s].colecao).length};
      function setDoor(value) {
        door=value;
        document.querySelectorAll('[data-door]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.door===door)));
        hooks.filter();
        $('discovery-status').textContent = door ? `${counts[door]} skills ${door==='avulsa'?'avulsas':'em coleções'}.` : `${available.length} skills em ${data.fileiras.length} fileiras.`;
      }
      function home() {
        $('discovery').hidden=false;
        $('discovery').innerHTML=`<div class="discovery-intro"><div><h1>Instale um método, não um prompt.</h1><p>Escolha pelo que você precisa fazer.</p></div><a class="learn-link" href="/assistir/?s=hermes-agent">Como instalar o Hermes <span aria-hidden="true">↗</span></a></div>
          <div class="doors"><button class="door" data-door="avulsa" aria-pressed="false"><h2>Quero resolver uma coisa hoje</h2><p>Pega, usa, pronto. Não guarda nada, não pede pasta, não faz entrevista.</p><span class="door-count">${counts.avulsa} fitas avulsas <i style="--portion:${counts.avulsa/available.length*100}%"></i></span></button>
          <button class="door collection" data-door="colecao" aria-pressed="false"><h2>Quero montar o cérebro do negócio</h2><p>Abre uma pasta, entrevista você, acumula. Depois todas as outras leem de lá.</p><span class="door-count">${counts.colecao} em ${Object.keys(data.colecoes).length} coleções <i style="--portion:${counts.colecao/available.length*100}%"></i></span></button></div>
          <button class="guide-entry" id="guide-open" aria-expanded="false" aria-controls="guide"><span><strong>Não sei o que pegar</strong><span>Três perguntas. No fim, uma skill só e o comando pronto para colar.</span></span><b>Começar <span aria-hidden="true">→</span></b></button>
          <section id="guide" class="guide" aria-label="Guia para escolher uma skill" hidden></section>
          <p id="discovery-status" class="sr-only" role="status"></p>`;
        document.querySelectorAll('[data-door]').forEach(b=>b.addEventListener('click',()=>setDoor(door===b.dataset.door?null:b.dataset.door)));
        $('guide-open').addEventListener('click',toggleGuide);
      }
      function toggleGuide(force) {
        const open=force ?? $('guide').hidden;
        $('guide').hidden=!open;$('guide-open').setAttribute('aria-expanded',String(open));
        if(open){paintGuide();scroll($('guide'));titleFocus($('guide'));}else $('guide-open').focus({preventScroll:true});
      }
      function paintGuide() {
        const node=data.guia[trail.at(-1)];
        const steps=`<div class="guide-steps" aria-label="Pergunta ${trail.length} de até 3">${[1,2,3].map(i=>`<i class="${i<=trail.length?'on':''}"></i>`).join('')}</div>`;
        const s=result&&by[result.skill];
        const content=s ? `<div class="guide-result"><img alt="" src="${cover(s.slug)}"><div><p class="eyebrow">Pegue esta</p><h2>${esc(s.name)}</h2><p>${esc(s.sub)}</p>${result.nota?`<p>${esc(result.nota)}</p>`:''}<button class="guide-primary" data-act="open" data-slug="${esc(s.slug)}">Ver a ficha e instalar</button></div></div>` : `<h2>${esc(node.p)}</h2>${node.ajuda?`<p>${esc(node.ajuda)}</p>`:''}<div class="guide-options">${node.o.map((o,i)=>`<button data-option="${i}">${esc(o.t)}<span aria-hidden="true">›</span></button>`).join('')}</div>`;
        $('guide').innerHTML=steps+content+`<div class="guide-nav">${trail.length>1||result?'<button data-guide-back>← Voltar</button>':''}<button data-guide-reset>Recomeçar</button><button data-guide-close>Fechar guia</button></div>`;
        $('guide').querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>{const o=node.o[Number(b.dataset.option)];if(o.vai)trail.push(o.vai);else result=o;paintGuide();titleFocus($('guide'));}));
        $('guide').querySelector('[data-guide-back]')?.addEventListener('click',()=>{if(result)result=null;else trail.pop();paintGuide();titleFocus($('guide'));});
        $('guide').querySelector('[data-guide-reset]').addEventListener('click',()=>{trail=['inicio'];result=null;paintGuide();titleFocus($('guide'));});
        $('guide').querySelector('[data-guide-close]').addEventListener('click',()=>toggleGuide(false));
      }
      function card(s) {
        const m=meta(s);if(!m)return '';
        const label=m.colecao ? (m.passo===0?'Atalho':`Coleção${m.passo?' · passo '+m.passo:''}`) : 'Avulsa';
        const before=m.antes.length?'Antes: '+m.antes.map(name).join(', '):'Nada antes desta';
        return `<div class="journey-info"><div class="journey-label ${m.colecao?'collection':''}">${esc(label)}${data.amostras[s.slug]?'<span>▶ Amostra</span>':''}</div><h3>${esc(s.name)}</h3><p>${esc(s.sub)}</p><small class="${m.antes.length?'needs':''}" title="${esc(before)}">${esc(before)}</small></div>`;
      }
      function context(s) {
        const m=meta(s);if(!m)return '';
        const c=m.colecao&&data.colecoes[m.colecao];
        return `<div class="discovery-detail"><div class="context-block">${m.nota?`<p>${esc(m.nota)}</p>`:''}${c?`<h3>Faz parte de: ${esc(c.nome)}</h3><p>${esc(c.explica)}</p><details><summary>Onde fica salvo</summary><p>${esc(c.pasta)} · config <code>${esc(c.chave)}</code></p></details>`:''}<h3>Rode antes desta</h3>${m.antes.length?`<div class="dependencies">${m.antes.filter(slug=>by[slug]).map(slug=>`<button data-act="open" data-slug="${esc(slug)}">${esc(name(slug))} <span aria-hidden="true">↗</span></button>`).join('')}</div>`:'<p>Nada. Esta funciona sozinha.</p>'}</div></div>`;
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
      return {matches,card,context,extras,bind,cancel,setDoor,toggleGuide,
        rows:data.fileiras.map(f=>({id:f.id,title:()=>f.titulo,note:f.sub,ids:available.filter(slug=>data.skills[slug].fileira===f.id),journey:true})),
        get door(){return door;}
      };
    }
  };
})();
