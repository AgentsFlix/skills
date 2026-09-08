/* Coleta apenas em produção. ?qa=1 exclui este navegador; ?qa=0 reativa. */
(() => {
  'use strict';
  window.CONSENT_KEY = 'agentflix-consent';
  const qaKey = 'agentflix-qa', qaParam = new URLSearchParams(location.search).get('qa');
  let qa = qaParam === '1', consent = null;
  try {
    if (qaParam === '1') localStorage.setItem(qaKey, '1');
    if (qaParam === '0') localStorage.removeItem(qaKey);
    qa = qa || localStorage.getItem(qaKey) === '1';
    consent = localStorage.getItem(window.CONSENT_KEY);
  } catch {}
  const enabled = ['agentsflix.ai','www.agentsflix.ai'].includes(location.hostname) && !qa;
  window.clarity = enabled ? function () { (window.clarity.q = window.clarity.q || []).push(arguments); } : function () {};
  const keys = new Set(['skill','alvo','chave','serie','episodio','caminho','objetivo','porta','pergunta','opcao','pre_requisito','origem','salvo','tipo']);
  window.clar = function (event, tags) {
    if (!enabled) return;
    try {
      Object.entries(tags || {}).forEach(([key,value]) => { if (keys.has(key) && value != null) window.clarity('set',key,String(value)); });
      if (event) window.clarity('event',event);
    } catch {}
  };
  if (!enabled) return;
  // O consentimento entra na fila antes do carregamento do SDK.
  window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:consent === 'granted' ? 'granted' : 'denied'});
  window.clarity('set','ambiente','producao');
  window.clarity('set','versao_interface','2026-09-08-navigation-v1');
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.clarity.ms/tag/yenn89e53y';
  document.head.appendChild(script);
})();
