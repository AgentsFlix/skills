(() => {
  'use strict';
  const key='agentflix-t1e3-ecf-summary-v1';
  let applied=false;
  function connect(){
    if(applied||!window.ECFBaseFlow?.project())return;
    let summary;
    try{summary=JSON.parse(sessionStorage.getItem(key)||'null');}catch(_){summary=null;}
    if(!window.ECFBaseScores?.validSummary(summary))return;
    applied=true;
    try{window.ECFBaseFlow.saveDiagnosis(summary);sessionStorage.removeItem(key);}
    catch(_){applied=false;}
  }
  window.addEventListener('ecf:base-updated',connect);
  connect();
})();
