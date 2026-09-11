/* Ilustrações compartilhadas: agentflix-desenho. Textos continuam acessíveis sem imagens. */
(() => {
  const names = ['Gatilho', 'Agente', 'Ferramenta', 'Puxar', 'Construir', 'Entrega'];
  const assets = ['campainha','chef-atendimento','caderneta','menu','panela','prato'];
  const chefs = ['chef-atendimento','chef-cozinha','chef-caixa'];
  function art(name, cls = '') {
    const src = ['campainha','menu','prato','maquininha'].includes(name) ? `art/v2/${name}.png` : `art/${name}-v1.png`;
    return `<img class="drawn-art ${cls}" src="${src}" alt="" aria-hidden="true" draggable="false" decoding="async">`;
  }
  function icon(i) {
    return `<span class="stage-symbol" data-stage-symbol="${i}">${art(assets[i])}</span>`;
  }
  function header(i) {
    return `<span class="stage-art">${icon(i)}</span><span class="stage-tab"><span class="stage-number">${i+1}</span>${names[i]}</span>`;
  }
  function badges(indices) {
    return `<span class="stage-badges">${indices.map(i=>`<span class="stage-badge">${icon(i)}<span>${names[i]}</span></span>`).join('')}</span>`;
  }
  function chef(n = 0) { return art(chefs[n % 3], 'chef-icon portrait'); }
  function customer(n, served) {
    return `<span class="customer-art">${art('cliente','portrait')}${served?art('prato','customer-dish'):''}</span>`;
  }
  const pieceAssets = {
    bell:'campainha', chef:'chef-atendimento', notebook:'caderneta', menu:'menu', recipe:'panela', table:'mesa',
    machine:'maquininha', decide:'caderneta', invent:'panela', anywhere:'mesa',
    receive:'caderneta', serve:'prato', ticket:'caderneta', cook:'panela', payment:'campainha', close:'maquininha', all:'chef-atendimento', guess:'panela'
  };
  function piece(id) { return art(pieceAssets[id], 'piece-art'); }
  window.StageIdentity = Object.freeze({icon, header, badges, chef, customer, art, piece});
})();
