(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const axes={creator:{name:'Creator',coin:'Atenção',promise:'As pessoas certas chegam.'},expert:{name:'Expert',coin:'Autoridade',promise:'Elas reconhecem seu valor.'},founder:{name:'Founder',coin:'Ação',promise:'Elas dão o próximo passo.'}};
  const scenarios={
    harmony:{levels:[76,76,76],labels:['Em harmonia','Em harmonia','Em harmonia'],title:'As três moedas circulam.',text:['Você chama atenção, as pessoas reconhecem o que você sabe e encontram um caminho para dar o próximo passo.','É essa harmonia que a gente vai buscar: Atenção como Creator, Autoridade como Expert e Ação como Founder.']},
    clown:{levels:[92,20,12],labels:['Alta','Baixa','Baixa'],title:'Doença do palhaço de circo',text:['Todo mundo aplaude, ri, você chama atenção. Só que ninguém te respeita como referência naquele assunto nem cogita comprar de você ou da sua marca.','Tem muita Atenção, mas pouca Autoridade e pouca Ação. O aplauso para ali.']},
    wizard:{levels:[20,92,12],labels:['Baixa','Alta','Baixa'],title:'Doença do mestre dos magos',text:['Você tem poucas pessoas que te dão atenção. Mas, quando aparece, elas param para te ouvir. Te acham sábio e sensato.','Só que você para por aí e some. Tem muita Autoridade, mas pouca Atenção e pouca Ação. A conversa não chega à conversão.']},
    sales:{levels:[20,16,92],labels:['Baixa','Baixa','Alta'],title:'Doença do telemarketing',text:['Você bate em todas as portas. Faz oferta. Chama no direct. Lança. Coloca link. Faz CTA. Tenta fechar. Só que ninguém estava esperando você chegar.','Sem Atenção, não existe demanda suficiente. Sem Autoridade, não existe confiança suficiente.','Então toda ação precisa ser empurrada... e vender vira força bruta.']}
  };
  const treatments={
    clown:{focus:'Expert',title:'Transforme o aplauso em confiança.',steps:[['Mostre seu raciocínio','Quadro Branco','Explique como você resolve um problema.'],['Demonstre seu critério','Comparativo','Compare caminhos e mostre por que escolheu um.']],next:'Depois, conecte essa prova a um convite claro.'},
    wizard:{focus:'Creator + Founder',title:'Apareça mais. Dê um próximo passo.',steps:[['Traga gente nova','Storytelling','Conte uma situação em que o público se reconheça.'],['Abra uma conversa','Falando com a Câmera','Convide quem tem esse problema a conversar.']],next:'Continue ensinando. Acrescente descoberta e convite.'},
    sales:{focus:'Creator + Expert',title:'Construa interesse antes da oferta.',steps:[['Entre na conversa','React com ponto de vista','Parta de um assunto que já importa para o público.'],['Dê uma razão para confiar','Estudo de Caso','Explique um caso real e o raciocínio por trás da solução.']],next:'Depois, a oferta encontra atenção e confiança.'}
  };
  const formatSets={
    creator:{heading:'Faça a pessoa pensar: “isso é pra mim”.',formats:[
      {name:'Storytelling',kind:'reel',visual:'<div class="demo-video"><span class="video-top">● ● ●</span><strong>Eu também<br>já passei por isso.</strong><span class="video-bottom">▷ <i></i></span></div>',caption:'Uma história real com tensão e aprendizado.'},
      {name:'React',kind:'reaction',visual:'<div class="react-original"><span class="play-glyph">▷</span>Trecho original</div><span class="react-plus">+</span><div class="react-reading">Minha leitura<i></i><i></i></div>',caption:'Use um assunto relevante e acrescente sua leitura.'},
      {name:'Tela Verde',kind:'source',visual:'<div class="source-window"><span>O fato</span><i></i><i></i><i></i></div><div class="source-comment">▷<span>Seu olhar</span></div>',caption:'Mostre a fonte e explique o detalhe que importa.'}]},
    expert:{heading:'Mostre como você pensa e resolve.',formats:[
      {name:'Quadro Branco',kind:'diagram',visual:'<span>Problema</span><b>→</b><span>Critério</span><b>→</b><span>Decisão</span>',caption:'Desenhe o raciocínio por trás de uma decisão.'},
      {name:'Carrossel educativo',kind:'carousel',visual:'<span><b>01</b>O erro</span><span><b>02</b>O porquê</span><span><b>03</b>Como resolver</span>',caption:'Ensine um caminho em passos que mereçam ser salvos.'},
      {name:'Comparativo',kind:'comparison',visual:'<table><thead><tr><th>Critério</th><th>A</th><th>B</th></tr></thead><tbody><tr><th>Quando usar</th><td>?</td><td>?</td></tr><tr><th>Limites</th><td>?</td><td>?</td></tr></tbody></table>',caption:'Julgue alternativas pelos mesmos critérios.'}]},
    founder:{heading:'Mostre o que você constrói. Abra o caminho.',formats:[
      {name:'Bastidores',kind:'diagram',visual:'<span>Decisão</span><b>→</b><span>Execução</span><b>→</b><span>Entrega</span>',caption:'Mostre um processo real e o valor que ele entrega.'},
      {name:'Estudo de Caso',kind:'case',visual:'<span>Antes</span><b>O que eu fiz</b><span>Depois</span>',caption:'Apresente um resultado verificável e como chegou a ele.'},
      {name:'Falando com a Câmera',kind:'invitation',visual:'Para quem é?<span>Como posso ajudar?</span><b>Vamos conversar?</b>',caption:'Faça um convite específico, com um próximo passo claro.'}]}
  };
  const communicationScenarios=[
    {id:'dream-filter',number:'01',objective:'Vender um filtro dos sonhos',context:'A oferta é a mesma. A linguagem decide se a pessoa vê só um objeto, uma solução rápida ou um ritual de descanso.',options:[
      {id:'product',label:'Mensagem sobre o produto',message:'“Um filtro de sonhos feito à mão para ficar perto da sua cama.”',attracts:'Pessoas curiosas pelo objeto e pela estética do quarto.',pros:'É simples de entender e abre conversa com facilidade.',cons:'Traz quem ainda não percebe significado ou valor. Pode demandar muito tempo até a decisão.',image:'art/comunicacao-filtro/filtro_produto.png',alt:'Ilustração de um filtro dos sonhos feito à mão ao lado de uma cama.'},
      {id:'commercial',label:'Mensagem comercial',message:'“Um detalhe bonito para deixar seu quarto mais acolhedor.”',attracts:'Pessoas que buscam uma mudança rápida na decoração.',pros:'A promessa é direta e reduz a fricção de compra.',cons:'A comparação tende a ser por preço e estética. A relação com a peça é superficial.',image:'art/comunicacao-filtro/filtro_comercial.png',alt:'Ilustração de um quarto acolhedor com um filtro dos sonhos como detalhe de decoração.'},
      {id:'ideal',label:'Linguagem do cliente ideal',message:'“Você já sentiu que o quarto fica pesado depois de um dia difícil? Pendura seu filtro perto da cama, coloca uma intenção e faz desse canto um lugar de descanso de verdade.”',attracts:'Pessoas que falam sobre energia da casa, proteção, intenção, boas vibrações e harmonização.',pros:'Cria reconhecimento imediato e conversa com quem já atribui significado à peça.',cons:'É uma mensagem mais específica e naturalmente alcança menos pessoas.',image:'art/comunicacao-filtro/filtro_cliente_ideal.png',alt:'Ilustração de uma pessoa pendurando um filtro dos sonhos perto da cama para criar um lugar de descanso.'}
    ]},
    {id:'suit',number:'02',objective:'Vender um terno high ticket',context:'O caimento é o mesmo. A mensagem pode chamar quem procura uma peça, uma urgência ou uma presença que se sustenta o dia inteiro.',options:[
      {id:'product',label:'Mensagem sobre o produto',message:'“Um terno sob medida, pensado para vestir bem do começo ao fim do dia.”',attracts:'Pessoas em busca de uma peça de melhor qualidade ou com bom caimento.',pros:'Explica o benefício de forma objetiva.',cons:'Ainda atrai comparadores de preço e quem não tem clareza sobre a diferença de um terno sob medida.',image:'art/comunicacao-filtro/terno_produto.png',alt:'Ilustração de uma pessoa ajustando um terno sob medida para mostrar o caimento.'},
      {id:'commercial',label:'Mensagem comercial',message:'“Quando a sua presença importa, um terno comum não resolve.”',attracts:'Profissionais em preparação para uma ocasião relevante.',pros:'Cria urgência e destaca a diferença frente a alternativas comuns.',cons:'Pode atrair compra pontual para um evento, sem compromisso com qualidade ou relacionamento.',image:'art/comunicacao-filtro/terno_comercial.png',alt:'Ilustração de um profissional se preparando com um terno para uma ocasião importante.'},
      {id:'ideal',label:'Linguagem do cliente ideal',message:'“Não quero uma roupa para parecer importante. Quero entrar numa reunião, sentar, viajar, voltar e continuar com o mesmo caimento de quando saí de casa.”',attracts:'Executivos e profissionais que valorizam discrição, mobilidade, caimento e consistência ao longo do dia.',pros:'A pessoa se reconhece na situação e entende por que sob medida vale mais.',cons:'Exige que a marca sustente esse padrão de qualidade na experiência inteira.',image:'art/comunicacao-filtro/terno_cliente_ideal.png',alt:'Ilustração de um executivo viajando e participando de reunião com o mesmo terno bem ajustado.'}
    ]},
    {id:'helicopter',number:'03',objective:'Vender serviço de aluguel de helicóptero',context:'A aeronave é a mesma. A mensagem pode atrair curiosidade, uma necessidade imediata ou quem protege uma agenda entre cidades.',options:[
      {id:'product',label:'Mensagem sobre o produto',message:'“Helicóptero executivo para quem precisa se deslocar com mais agilidade.”',attracts:'Pessoas interessadas no serviço e curiosas sobre deslocamento aéreo.',pros:'Apresenta o serviço sem ambiguidade.',cons:'Pode atrair consultas de curiosidade e pedidos sem aderência à operação.',image:'art/comunicacao-filtro/helicoptero_produto.png',alt:'Ilustração de um helicóptero executivo pronto para um deslocamento ágil.'},
      {id:'commercial',label:'Mensagem comercial',message:'“Seu dia vale mais do que horas parado no trânsito.”',attracts:'Profissionais com agenda cheia que procuram uma solução imediata.',pros:'Torna o ganho de tempo claro e fácil de comparar.',cons:'Pode reduzir a escolha a preço e tempo, sem construir preferência pelo serviço.',image:'art/comunicacao-filtro/helicoptero_comercial.png',alt:'Ilustração de um profissional escolhendo um helicóptero para evitar horas no trânsito.'},
      {id:'ideal',label:'Linguagem do cliente ideal',message:'“Tenho conselho em Campinas cedo e reunião de diretoria na Faria Lima depois do almoço. Se eu for de carro, entrego meu dia para o deslocamento.”',attracts:'Executivos que administram agendas entre cidades, conselho, diretoria e compromissos que não podem atrasar.',pros:'Mostra o problema na linguagem cotidiana desse público, sem termos técnicos artificiais.',cons:'É uma comunicação seletiva e não faz sentido para quem não vive esse tipo de agenda.',image:'art/comunicacao-filtro/helicoptero_cliente_ideal.png',alt:'Ilustração de um executivo conciliando um conselho em Campinas e uma reunião de diretoria em São Paulo com deslocamento de helicóptero.'}
    ]}
  ];
  function communicationFilter(selected={}){
    const root=$('communication-filter-scenarios');if(!root)return;
    root.innerHTML=communicationScenarios.map(s=>{
      const active=s.options.find(o=>o.id===selected[s.id])||s.options[0];
      return `<article class="communication-scenario" data-communication-scenario="${s.id}"><header><p class="eyebrow">CENÁRIO ${s.number}</p><h3>${s.objective}</h3><p>${s.context}</p></header><div class="communication-scenario-layout"><div class="communication-choice"><div class="communication-options" role="group" aria-label="Mensagens para ${s.objective.toLowerCase()}">${s.options.map(o=>`<button type="button" class="communication-option" data-communication-option="${o.id}" aria-pressed="${String(o.id===active.id)}"><span>${o.label}</span><span class="communication-option-state">${o.id===active.id?'Selecionada':'Selecionar'}</span></button>`).join('')}</div><blockquote class="communication-message"><span class="eyebrow">MENSAGEM ESCOLHIDA</span><p>${active.message}</p></blockquote></div><div class="communication-result" aria-live="polite"><figure class="communication-art"><img src="${active.image}" alt="${active.alt}" decoding="async" loading="lazy"></figure><section class="communication-profile" aria-label="Perfil atraído pela mensagem escolhida"><h4>Quem ela atrai</h4><p>${active.attracts}</p><dl><div><dt>Prós</dt><dd>${active.pros}</dd></div><div><dt>Contras</dt><dd>${active.cons}</dd></div></dl></section></div></div></article>`;
    }).join('');
  }
  function card(id,index,level,label,context,selectable=false){
    const a=axes[id],tag=selectable?'button':'article';
    return `<${tag} class="learning-card" ${selectable?`type="button" data-content-axis="${id}" aria-pressed="${label==='Fortalecer'}"`:`aria-labelledby="${context}-${id}"`}><div class="learning-card-heading"><span>0${index+1} / ${a.coin.toUpperCase()}</span><h3 id="${context}-${id}">${a.name}</h3></div><div class="learning-art" aria-hidden="true">${$('art-'+id).innerHTML}</div><p>${a.promise}</p><div class="learning-bar-label"><span>${a.coin}</span><b>${label}</b></div><div class="learning-bar" role="img" aria-label="${a.coin}: ${label.toLowerCase()}, exemplo ilustrativo"><span style="width:${level}%"></span></div></${tag}>`;
  }
  function cards(s,context){return Object.keys(axes).map((id,i)=>card(id,i,s.levels[i],s.labels[i],context)).join('');}
  function scenario(id){
    const s=scenarios[id];if(!s)return;
    document.querySelectorAll('[data-scenario]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scenario===id)));
    $('scenario-cards').innerHTML=cards(s,'scenario');
    $('scenario-reading').innerHTML=`<div><span>${id==='harmony'?'EQUILÍBRIO':'QUANDO UMA MOEDA DOMINA'}</span><h2>${s.title}</h2></div><div class="scenario-story">${s.text.map(p=>`<p>${p}</p>`).join('')}</div>`;
  }
  function formats(id,focus=false){
    if(!axes[id])return;
    const f=formatSets[id];
    $('content-axes').innerHTML=Object.keys(axes).map((a,i)=>card(a,i,a===id?80:35,a===id?'Fortalecer':'Manter','content',true)).join('');
    $('format-heading').innerHTML=`<span class="eyebrow">CONTEÚDO ${axes[id].name.toUpperCase()}</span><h2>${f.heading}</h2>`;
    $('format-cards').innerHTML=f.formats.map((item,i)=>`<article class="format-card"><header><span>0${i+1}</span><h3>${item.name}</h3></header><div class="format-preview preview-${item.kind}">${item.visual}</div><p>${item.caption}</p></article>`).join('');
    if(focus)$('content-axes').querySelector('[data-content-axis="'+id+'"]').focus({preventScroll:true});
  }
  function treatment(id){
    const t=treatments[id];if(!t)return;
    document.querySelectorAll('[data-treatment]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.treatment===id)));
    $('treatment-cards').innerHTML=cards(scenarios[id],'treatment');
    $('treatment-plan').innerHTML=`<div class="treatment-prescription"><span class="eyebrow">PRIORIDADE: ${t.focus.toUpperCase()}</span><h3>${t.title}</h3></div><div class="prescription-steps">${t.steps.map((s,i)=>`<div><span>0${i+1} / ${s[0]}</span><h4>${s[1]}</h4><p>${s[2]}</p></div>`).join('')}</div><p class="prescription-next">${t.next}</p>`;
  }
  function lesson(n,move=true){
    if(!Number.isInteger(n)||n<0||n>3)return;
    const labels=['A história','As três moedas','O conteúdo','O raio-x'];
    document.querySelectorAll('[data-lesson-page]').forEach((p,i)=>p.hidden=i!==n);
    document.querySelectorAll('[data-lesson]').forEach(b=>{if(Number(b.dataset.lesson)===n)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});
    $('lesson-current').textContent=String(n+1).padStart(2,'0');
    $('lesson-label').textContent=labels[n];
    $('lesson-progress').textContent=(n+1)+' de 4 capítulos';
    if(move){history.replaceState(null,'','#metodo-'+(n+1));document.querySelector('[data-lesson-page="'+n+'"] h1').focus({preventScroll:true});$('understand').scrollIntoView({block:'start',behavior:'instant'});}
  }
  document.querySelectorAll('[data-lesson],[data-lesson-go]').forEach(b=>b.addEventListener('click',()=>lesson(Number(b.dataset.lesson??b.dataset.lessonGo))));
  document.querySelectorAll('[data-scenario]').forEach(b=>b.addEventListener('click',()=>scenario(b.dataset.scenario)));
  document.querySelectorAll('[data-treatment]').forEach(b=>b.addEventListener('click',()=>treatment(b.dataset.treatment)));
  $('content-axes').addEventListener('click',e=>{const button=e.target.closest('[data-content-axis]');if(button)formats(button.dataset.contentAxis,true);});
  $('communication-filter-scenarios').addEventListener('click',e=>{const button=e.target.closest('[data-communication-option]');if(!button)return;const scenario=button.closest('[data-communication-scenario]');if(!scenario)return;const selected={};document.querySelectorAll('[data-communication-scenario]').forEach(item=>{const active=item.querySelector('[data-communication-option][aria-pressed=true]');if(active)selected[item.dataset.communicationScenario]=active.dataset.communicationOption;});selected[scenario.dataset.communicationScenario]=button.dataset.communicationOption;scenario.classList.add('is-switching');window.setTimeout(()=>{communicationFilter(selected);const changed=document.querySelector('[data-communication-scenario="'+scenario.dataset.communicationScenario+'"]');if(changed){changed.classList.remove('is-switching');const target=changed.querySelector('[data-communication-option="'+button.dataset.communicationOption+'"]');if(target)target.focus({preventScroll:true});}},120);});
  const photo=$('method-photo');
  document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{$('method-photo-title').textContent=b.dataset.photoTitle;$('method-photo-image').src=b.dataset.photo;$('method-photo-image').alt=b.querySelector('img').alt;photo.showModal();}));
  $('close-method-photo').addEventListener('click',()=>photo.close());
  photo.addEventListener('click',e=>{if(e.target===photo){const r=photo.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)photo.close();}});
  scenario('harmony');formats('creator');communicationFilter();treatment('clown');
  const hash=/^#metodo-([1-4])$/.exec(location.hash);lesson(hash?Number(hash[1])-1:0,false);
})();
