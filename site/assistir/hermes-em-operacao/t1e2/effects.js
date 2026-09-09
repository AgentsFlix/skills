(() => {
  'use strict';
  const base = new URL('audio/', document.currentScript.src);
  const preferenceKey = 'agentflix-effects-enabled';
  const levels = {button:0.45,selection:0.4,drag:0.5,complete:0.28,receipt:0.4,payment:0.35,dish:0.45,stir:0.65,boil:0.4,water:0.5,bell:0.4,handoff:0.4,'belt-stop':0.5,belt:0.22,document:0.35,error:0.12,'message-send':0.45,'message-receive':0.15};
  const priority = {button:0,selection:1,drag:2,complete:3};
  const rank = cues => Math.max(...cues.map(k => priority[k] ?? 4)) + cues.length / 100;
  let loopWanted=false, loopSource=null, loopFallback=null, loopGeneration=0, sequenceTimer=null;
  const data = new Map(), decoded = new Map();
  let enabled = true, context = null, source = null, fallback = null;
  let pending = null, timer = null, generation = 0, lastKind = '', lastAt = 0;
  try { enabled = localStorage.getItem(preferenceKey) !== 'false'; } catch (_) {}
  for (const kind of Object.keys(levels)) {
    data.set(kind, fetch(new URL(kind + '.mp3', base)).then(r => r.ok ? r.arrayBuffer() : null).catch(() => null));
  }
  const button = document.createElement('button');
  button.id = 'effects-toggle'; button.type = 'button';
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path class="sound-waves" d="M15 8c2 2 2 6 0 8m3-11c4 4 4 10 0 14"/><path class="sound-off" d="m16 9 6 6m0-6-6 6"/></svg><span>Efeitos</span>';
  const ambient = document.getElementById('ambient-toggle');
  if (ambient) ambient.after(button); else document.querySelector('.top')?.append(button);
  function update() {
    button.dataset.playing = String(enabled);
    button.setAttribute('aria-pressed', String(enabled));
    button.title = enabled ? 'Silenciar efeitos sonoros' : 'Ativar efeitos sonoros';
    button.setAttribute('aria-label', button.title);
  }
  function stopVoice() {
    if (source) { try { source.stop(); } catch (_) {} source.disconnect(); source = null; }
    if (fallback) { fallback.pause(); fallback = null; }
  }
  function stop() { generation++; clearTimeout(timer);clearTimeout(sequenceTimer);sequenceTimer=null;timer=null;pending=null;stopVoice(); }
  function unlock() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!context && AudioContext) { try { context = new AudioContext(); } catch (_) {} }
    if (context?.state === 'suspended') context.resume().catch(() => {});
  }
  function bufferFor(kind) {
    if (!decoded.has(kind)) decoded.set(kind, data.get(kind).then(bytes => bytes ? context.decodeAudioData(bytes.slice(0)) : null).catch(() => null));
    return decoded.get(kind);
  }
  function stopLoop() {
    loopGeneration++;
    if(loopSource){try{loopSource.stop();}catch(_){}loopSource.disconnect();loopSource=null;}
    if(loopFallback){loopFallback.pause();loopFallback=null;}
  }
  async function syncLoop() {
    if(!loopWanted||!enabled||document.hidden){stopLoop();return;}
    if(loopSource||loopFallback)return;
    unlock();const token=++loopGeneration;
    try {
      if(context){
        await context.resume();const buffer=await bufferFor('belt');
        if(!buffer||token!==loopGeneration||!loopWanted||!enabled||document.hidden)return;
        const node=context.createBufferSource(),gain=context.createGain();
        node.buffer=buffer;node.loop=true;gain.gain.value=levels.belt;
        node.connect(gain);gain.connect(context.destination);loopSource=node;
        node.onended=()=>{node.disconnect();gain.disconnect();if(loopSource===node)loopSource=null;};node.start();
      }else{
        loopFallback=new Audio(new URL('belt.mp3',base).href);loopFallback.loop=true;loopFallback.volume=levels.belt;await loopFallback.play();
      }
    }catch(_){stopLoop();}
  }
  function loop(active){loopWanted=Boolean(active);syncLoop();}
  async function renderSound(cues) {
    const now=performance.now(),kind=cues[0];
    if(lastKind===kind&&now-lastAt<80)return;
    lastKind=kind;lastAt=now;
    const token=++generation;clearTimeout(sequenceTimer);stopVoice();
    try {
      // Decode the entire short sequence before starting, without changing the MP3s.
      const buffers=context?await Promise.all(cues.map(bufferFor)):null;
      if(token!==generation||!enabled||document.hidden||performance.now()-now>700)return;
      function next(i){
        if(i>=cues.length||token!==generation||!enabled||document.hidden)return;
        try {
          if(context){
            if(!buffers[i]||context.state!=='running')return;
            const node=context.createBufferSource(),gain=context.createGain();
            node.buffer=buffers[i];gain.gain.value=levels[cues[i]];
            node.connect(gain);gain.connect(context.destination);source=node;
            node.onended=()=>{node.disconnect();gain.disconnect();if(source===node)source=null;if(token===generation)sequenceTimer=setTimeout(()=>next(i+1),70);};node.start();
          }else{
            const audio=new Audio(new URL(cues[i]+'.mp3',base).href);fallback=audio;audio.volume=levels[cues[i]];
            audio.onended=()=>{if(fallback===audio)fallback=null;if(token===generation)sequenceTimer=setTimeout(()=>next(i+1),70);};audio.play().catch(()=>{});
          }
        }catch(_){ /* A failed effect never blocks the activity. */ }
      }
      next(0);
    }catch(_){ /* Sound must never interrupt an exercise. */ }
  }
  function play(kind) {
    const cues=Array.isArray(kind)?kind:[kind];
    if(!cues.length||cues.some(k=>!(k in levels)||k==='belt')||!enabled||document.hidden)return;
    unlock();
    if(!pending||rank(cues)>rank(pending))pending=cues;
    if(timer!==null)return;
    // Specific actions replace generic clicks; a deliberate sequence stays ordered.
    timer=setTimeout(()=>{const next=pending;pending=null;timer=null;if(next&&enabled&&!document.hidden)renderSound(next);},0);
  }
  window.EpisodeSound=Object.freeze({play,loop});
  button.addEventListener('click', () => {
    enabled = !enabled;
    try { localStorage.setItem(preferenceKey, String(enabled)); } catch (_) {}
    if (!enabled){stop();stopLoop();}else{play('selection');syncLoop();}
    update();
  });
  const selections = '[data-choice],[data-template],[data-table],[data-flavor],[data-tool],[data-client],[data-piece],[data-slot],[data-remove]';
  document.addEventListener('click', event => {
    const control = event.target.closest?.('button,a[href],summary');
    if (!control || control.disabled || control.getAttribute('aria-disabled') === 'true' || control.closest('[inert]') || control.matches('#ambient-toggle,#effects-toggle') || control.dataset.sound === 'off') return;
    play(control.matches(selections) ? 'selection' : 'button');
  }, true);
  document.addEventListener('change', event => {
    if (event.target.matches('select,input[type="radio"],input[type="checkbox"]') && !event.target.disabled) play('selection');
  });
  document.addEventListener('dragstart', event => {
    if (event.target.closest?.('[draggable="true"]')) play('drag');
  });
  document.addEventListener('drop', event => {
    if (event.defaultPrevented && event.target.closest?.('[data-drop-slot],[data-destination],#tray,#pieces')) play('selection');
  });
  document.addEventListener('visibilitychange', () => { if(document.hidden){stop();stopLoop();}else syncLoop(); });
  window.addEventListener('pagehide',()=>{stop();loopWanted=false;stopLoop();});
  window.addEventListener('storage', event => {
    if (event.key !== preferenceKey) return;
    enabled = event.newValue !== 'false'; if(!enabled){stop();stopLoop();}else syncLoop();update();
  });
  update();
})();
