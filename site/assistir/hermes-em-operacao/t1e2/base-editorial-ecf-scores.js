(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.ECFBaseScores=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const MAX_BYTES=200000,IDEAL_POINTS=80;
  const AXES={
    creator:{name:'Creator',metrics:['alcance','curtidas','compartilhamentos']},
    expert:{name:'Expert',metrics:['salvamentos','comentarios','tempo_assistido']},
    founder:{name:'Founder',metrics:['cliques_perfil','contas_engajadas','conversas_inbox']}
  };
  const isObject=value=>Boolean(value&&typeof value==='object'&&!Array.isArray(value));
  const isCount=value=>value===null||(Number.isSafeInteger(value)&&value>=0);
  const own=(value,key)=>Object.prototype.hasOwnProperty.call(value,key);
  const clean=value=>typeof value==='string'?value.replace(/^\uFEFF/,'').trim():'';
  const average=values=>values.length?values.reduce((total,value)=>total+value,0)/values.length:null;
  const median=values=>{
    if(!values.length)return null;
    const ordered=[...values].sort((left,right)=>left-right),middle=Math.floor(ordered.length/2);
    return ordered.length%2?ordered[middle]:(ordered[middle-1]+ordered[middle])/2;
  };
  function fail(message){throw new Error(message);}
  // JSON.parse accepts duplicate keys and silently keeps the last value. The
  // diagnostic importer rejects that ambiguity, so the dashboard does too.
  function parseJson(raw){
    let index=0;
    const whitespace=()=>{while(/[\x20\t\r\n]/.test(raw[index]||'x'))index++;};
    const invalid=()=>fail('O diagnostico-ecf.json não está bem formado.');
    function string(){
      const start=index++;
      while(index<raw.length){
        if(raw[index]==='\\'){index+=2;continue;}
        if(raw[index++]==='"'){try{return JSON.parse(raw.slice(start,index));}catch(_){invalid();}}
      }
      invalid();
    }
    function value(depth){
      if(depth>30)fail('O diagnostico-ecf.json é profundo demais.');
      whitespace();const character=raw[index];
      if(character==='"'){string();return;}
      if(character==='{'||character==='['){
        const object=character==='{',end=object?'}':']',seen=new Set();
        index++;whitespace();if(raw[index]===end){index++;return;}
        for(;;){
          if(object){
            if(raw[index]!=='"')invalid();
            const key=string();
            if(seen.has(key))fail('O diagnostico-ecf.json tem uma chave duplicada.');
            seen.add(key);whitespace();if(raw[index++]!==':')invalid();
          }
          value(depth+1);whitespace();
          if(raw[index]===end){index++;return;}
          if(raw[index++]!==',')invalid();
          whitespace();
        }
      }
      const token=/^(?:true|false|null|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/.exec(raw.slice(index));
      if(!token)invalid();
      index+=token[0].length;
    }
    value(0);whitespace();if(index!==raw.length)invalid();
    try{return JSON.parse(raw);}catch(_){invalid();}
  }
  function normalizeNumbers(data){
    if(!isObject(data))return data;
    const convert=(object,key)=>{
      if(!isObject(object)&&!Array.isArray(object))return;
      const value=object[key];
      if(typeof value==='string'&&/^(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(value.trim())&&Number.isFinite(Number(value)))object[key]=Number(value);
    };
    for(const key of ['reach','followers_count','profile_links_taps','accounts_engaged'])convert(data.account,key);
    convert(data.inbox,'unique_conversations');
    convert(data.posts,'expected_count');
    if(Array.isArray(data.posts?.items))data.posts.items.forEach(post=>['reach','likes','comments','shares','saves','ig_reels_avg_watch_time_ms','video_duration_seconds'].forEach(key=>convert(post,key)));
    for(const [id,axis] of Object.entries(AXES))for(const key of axis.metrics)convert(data.reference?.targets?.[id],key);
    return data;
  }
  function exactKeys(value,expected,name){
    if(!isObject(value)||Object.keys(value).length!==expected.length||expected.some(key=>!own(value,key)))fail('O diagnóstico ECF não segue o contrato atual em '+name+'.');
  }
  function nonempty(value){return typeof value==='string'&&value.trim().length>0&&value.length<=1000;}
  function date(value){return typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value)&&Number.isFinite(Date.parse(value))&&new Date(value).toISOString().slice(0,10)===value;}
  function timestamp(value){return typeof value==='string'&&/^\d{4}-\d{2}-\d{2}T/.test(value)&&Number.isFinite(Date.parse(value));}
  function status(resource,name){
    if(!isObject(resource)||!['complete','partial','missing'].includes(resource.status))fail('O diagnóstico ECF não tem a cobertura esperada em '+name+'.');
    return resource.status;
  }
  function count(value,name){
    if(!isCount(value))fail('O diagnóstico ECF tem uma medição inválida em '+name+'.');
    return value;
  }
  function target(value,name){
    if(typeof value!=='number'||!Number.isFinite(value)||value<=0)fail('O diagnóstico ECF tem uma régua inválida em '+name+'.');
    return value;
  }
  function metric(raw,ideal,partial){
    const points=raw===null?null:Math.min(100,IDEAL_POINTS*raw/ideal);
    return {points,partial:Boolean(partial)};
  }
  function validateReference(reference){
    exactKeys(reference,['label','ideal_score','targets'],'reference');
    if(!nonempty(reference.label)||reference.ideal_score!==IDEAL_POINTS)fail('O diagnóstico ECF não tem uma régua de referência válida.');
    exactKeys(reference.targets,Object.keys(AXES),'reference.targets');
    for(const [id,axis] of Object.entries(AXES)){
      exactKeys(reference.targets[id],axis.metrics,'reference.targets.'+id);
      for(const key of axis.metrics)target(reference.targets[id][key],id+'.'+key);
    }
  }
  function validateResolution(value){
    if(value===null)return;
    exactKeys(value,['source','test_endpoint','result'],'credential_resolution');
    if(!['env','hermes_env','mcp','cli','sdk','unavailable'].includes(value.source)||value.test_endpoint!=='GET /v1/accounts'||!['success','401','403','429','unavailable'].includes(value.result)||(value.source==='unavailable'&&value.result!=='unavailable'))fail('O diagnóstico ECF tem metadados de credencial inválidos.');
  }
  function validateResource(resource,name,fields,report){
    exactKeys(resource,['account_id','status','source','reason',...fields],name);
    const resourceStatus=status(resource,name);
    if(!nonempty(resource.source)&&resource.source!=='')fail('O diagnóstico ECF tem uma fonte inválida em '+name+'.');
    if(typeof resource.reason!=='string'||resource.reason.length>1000)fail('O diagnóstico ECF tem uma cobertura inválida em '+name+'.');
    if(resource.account_id!==null&&!nonempty(resource.account_id))fail('O diagnóstico ECF tem um ID inválido em '+name+'.');
    if(resourceStatus!=='complete'&&!nonempty(resource.reason))fail('O diagnóstico ECF precisa explicar a cobertura de '+name+'.');
    if(resourceStatus!=='missing'&&(!nonempty(resource.source)||!report.collected_at||!report.account_id||resource.account_id!==report.account_id))fail('O diagnóstico ECF não confirma fonte, coleta e conta em '+name+'.');
    return resourceStatus;
  }
  function validateReport(data){
    exactKeys(data,['method','profile','account_id','window','collected_at','reference','credential_resolution','coverage','account','posts','inbox'],'relatório');
    if(data.method!=='ecf-zernio-v4')fail('Use o diagnostico-ecf.json atual, com método ecf-zernio-v4, gerado pelo raio-X ECF.');
    if(typeof data.profile!=='string'||!/^@?[a-zA-Z0-9._]{1,30}$/.test(data.profile))fail('O diagnóstico ECF não identifica um perfil válido.');
    if(data.account_id!==null&&!nonempty(data.account_id))fail('O diagnóstico ECF tem um ID de conta inválido.');
    exactKeys(data.window,['start','end'],'window');
    if(!date(data.window.start)||!date(data.window.end)||(Date.parse(data.window.end)-Date.parse(data.window.start))/86400000!==29)fail('O diagnóstico ECF precisa de uma janela válida de 30 dias.');
    if(data.collected_at!==null&&!timestamp(data.collected_at))fail('O diagnóstico ECF tem uma data de coleta inválida.');
    validateResolution(data.credential_resolution);
    if(!Array.isArray(data.coverage)||data.coverage.length>40||data.coverage.some(item=>!nonempty(item)))fail('O diagnóstico ECF tem uma cobertura inválida.');
    validateReference(data.reference);
    const accountStatus=validateResource(data.account,'account',['reach','followers_count','profile_links_taps','accounts_engaged','followers_updated_at'],data);
    for(const key of ['reach','followers_count','profile_links_taps','accounts_engaged'])count(data.account[key],'account.'+key);
    if(data.account.followers_updated_at!==null&&!timestamp(data.account.followers_updated_at))fail('O diagnóstico ECF tem uma data de seguidores inválida.');
    if(accountStatus==='missing'&&['reach','followers_count','profile_links_taps','accounts_engaged'].some(key=>data.account[key]!==null))fail('A conta ECF marcada como indisponível não pode conter medições.');
    const postsStatus=validateResource(data.posts,'posts',['expected_count','items'],data);
    if(!Array.isArray(data.posts.items)||data.posts.items.length>500)fail('O diagnóstico ECF precisa conter uma lista válida de publicações.');
    if(data.posts.expected_count!==null&&(!Number.isSafeInteger(data.posts.expected_count)||data.posts.expected_count<data.posts.items.length))fail('O diagnóstico ECF tem uma paginação inválida.');
    if(postsStatus==='complete'&&data.posts.expected_count!==data.posts.items.length)fail('O diagnóstico ECF completo precisa incluir todas as publicações da paginação.');
    if(postsStatus==='missing'&&data.posts.items.length)fail('Publicações indisponíveis não podem conter itens.');
    const ids=new Set();
    for(const [index,post] of data.posts.items.entries()){
      const name='posts.items['+index+']';
      exactKeys(post,['id','published_at','last_updated','media_product_type','reach','likes','comments','shares','saves','ig_reels_avg_watch_time_ms','video_duration_seconds'],name);
      if(!nonempty(post.id)||ids.has(post.id))fail('O diagnóstico ECF precisa ter IDs únicos de publicações.');
      ids.add(post.id);
      if(!timestamp(post.published_at)||(post.last_updated!==null&&!timestamp(post.last_updated)))fail('O diagnóstico ECF tem um timestamp de publicação inválido.');
      if(post.published_at.slice(0,10)<data.window.start||post.published_at.slice(0,10)>data.window.end)fail('O diagnóstico ECF inclui uma publicação fora da janela.');
      if(!['FEED','REELS','STORY','AD','UNKNOWN'].includes(post.media_product_type))fail('O diagnóstico ECF tem um tipo de publicação inválido.');
      for(const key of ['reach','likes','comments','shares','saves','ig_reels_avg_watch_time_ms','video_duration_seconds'])count(post[key],name+'.'+key);
    }
    const inboxStatus=validateResource(data.inbox,'inbox',['unique_conversations'],data);
    count(data.inbox.unique_conversations,'inbox.unique_conversations');
    if(inboxStatus==='missing'&&data.inbox.unique_conversations!==null)fail('O inbox ECF marcado como indisponível não pode conter medição.');
    return data;
  }
  function toSummary(data){
    validateReport(data);
    const account=data.account,posts=data.posts,inbox=data.inbox,targets=data.reference?.targets;
    const accountStatus=status(account,'conta'),postsStatus=status(posts,'publicações'),inboxStatus=status(inbox,'inbox');
    if(!isObject(targets))fail('O diagnóstico ECF não tem a régua de referência.');
    const accountValue={
      reach:count(account.reach,'account.reach'),
      followers:count(account.followers_count,'account.followers_count'),
      profileLinks:count(account.profile_links_taps,'account.profile_links_taps'),
      engaged:count(account.accounts_engaged,'account.accounts_engaged'),
      followersUpdated:typeof account.followers_updated_at==='string'&&account.followers_updated_at.trim().length>0
    };
    const inboxValue=count(inbox.unique_conversations,'inbox.unique_conversations');
    const content=posts.items.map((post,index)=>{
      if(!isObject(post)||!['FEED','REELS','UNKNOWN','STORY','AD'].includes(post.media_product_type))fail('O diagnóstico ECF tem uma publicação inválida.');
      const read=key=>count(post[key],'posts.items['+index+'].'+key);
      return {
        type:post.media_product_type,reach:read('reach'),likes:read('likes'),shares:read('shares'),saves:read('saves'),comments:read('comments'),
        watch:read('ig_reels_avg_watch_time_ms'),duration:read('video_duration_seconds')
      };
    }).filter(post=>['FEED','REELS','UNKNOWN'].includes(post.type));
    const axisTarget=id=>{
      if(!isObject(targets[id]))fail('O diagnóstico ECF não tem a régua de '+AXES[id].name+'.');
      return Object.fromEntries(AXES[id].metrics.map(key=>[key,target(targets[id][key],id+'.'+key)]));
    };
    const accountRatio=(numerator,denominator,resourceStatus,partial)=>{
      if(numerator===null||denominator===null||denominator<=0||accountStatus==='missing'||resourceStatus==='missing')return {raw:null,partial:true};
      return {raw:numerator/denominator,partial:Boolean(partial||accountStatus==='partial'||resourceStatus==='partial')};
    };
    const postRatio=field=>{
      if(postsStatus==='missing')return {raw:null,partial:true};
      const valid=content.filter(post=>post.reach!==null&&post[field]!==null);
      const denominator=valid.reduce((total,post)=>total+post.reach,0);
      if(!valid.length||!denominator)return {raw:null,partial:true};
      return {raw:valid.reduce((total,post)=>total+post[field],0)/denominator,partial:postsStatus!=='complete'||valid.length!==content.length};
    };
    const watched=content.filter(post=>post.type==='REELS'&&post.watch!==null&&post.duration>0);
    const reelRatio=postsStatus==='missing'?{raw:null,partial:true}:watched.length?{
      raw:median(watched.map(post=>post.watch/(post.duration*1000))),
      partial:postsStatus!=='complete'||watched.length!==content.filter(post=>post.type==='REELS').length
    }:{raw:null,partial:true};
    const creatorTarget=axisTarget('creator'),expertTarget=axisTarget('expert'),founderTarget=axisTarget('founder');
    const reach=accountRatio(accountValue.reach,accountValue.followers,accountStatus,!accountValue.followersUpdated);
    const clicks=accountRatio(accountValue.profileLinks,accountValue.reach,accountStatus,false);
    const engaged=accountRatio(accountValue.engaged,accountValue.reach,accountStatus,false);
    const conversations=accountRatio(inboxValue,accountValue.reach,inboxStatus,false);
    const likes=postRatio('likes'),shares=postRatio('shares'),saves=postRatio('saves'),comments=postRatio('comments');
    const values={
      creator:[
        metric(reach.raw??null,creatorTarget.alcance,reach.partial),
        metric(likes.raw,creatorTarget.curtidas,likes.partial),
        metric(shares.raw,creatorTarget.compartilhamentos,shares.partial)
      ],
      expert:[
        metric(saves.raw,expertTarget.salvamentos,saves.partial),
        metric(comments.raw,expertTarget.comentarios,comments.partial),
        metric(reelRatio.raw,expertTarget.tempo_assistido,reelRatio.partial)
      ],
      founder:[
        metric(clicks.raw??null,founderTarget.cliques_perfil,clicks.partial),
        metric(engaged.raw??null,founderTarget.contas_engajadas,engaged.partial),
        metric(conversations.raw??null,founderTarget.conversas_inbox,conversations.partial)
      ]
    };
    const axes=Object.fromEntries(Object.entries(values).map(([id,components])=>{
      const measured=components.filter(component=>component.points!==null);
      const score=average(measured.map(component=>component.points));
      return [id,{score:score===null?null:Math.round(score),measured:measured.length,total:3,partial:measured.length!==3||measured.some(component=>component.partial)}];
    }));
    return {version:1,method:'ecf-zernio-v4',axes};
  }
  function parse(raw){
    if(typeof raw!=='string'||new TextEncoder().encode(raw).length>MAX_BYTES)fail('Use um diagnostico-ecf.json de até 200 KB.');
    let content=clean(raw),data;
    const fenced=/^```(?:json)?\s*\n([\s\S]*?)\n```$/i.exec(content);
    if(fenced)content=fenced[1];
    data=normalizeNumbers(parseJson(content));
    return toSummary(data);
  }
  function validSummary(value){
    return isObject(value)&&Object.keys(value).length===3&&value.version===1&&value.method==='ecf-zernio-v4'&&isObject(value.axes)
      &&Object.keys(value.axes).length===Object.keys(AXES).length
      &&Object.keys(AXES).every(id=>{
        const axis=value.axes[id];
        return isObject(axis)&&Object.keys(axis).length===4&&(axis.score===null||(Number.isInteger(axis.score)&&axis.score>=0&&axis.score<=100))
          &&Number.isInteger(axis.measured)&&axis.measured>=0&&axis.measured<=3&&axis.total===3&&typeof axis.partial==='boolean';
      });
  }
  return {MAX_BYTES,AXES,parse,toSummary,validSummary};
});
