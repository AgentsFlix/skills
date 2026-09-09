/* Vocabulário visual compartilhado pelas seis etapas. */
(() => {
  const names = ['Gatilho', 'Agente', 'Ferramenta', 'Puxar', 'Construir', 'Entrega'];
  const drawings = [
    // Campainha e ondas: o acontecimento que inicia o trabalho.
    `<path d="M28 72h64v9H28z" fill="#aaa"/><path d="M36 66a24 24 0 0 1 48 0" fill="#f5f5f1"/><path d="M34 68h52"/><path d="M60 37v-6m-5 0h10" stroke="#30b0c7" stroke-width="5"/><path d="M30 39q-9 10-8 22m68-22q9 10 8 22M20 32Q8 47 10 62m90-30q12 15 10 30" stroke="#30b0c7"/><path d="M43 58q2-9 10-12" stroke="#aaa"/>`,
    // Pessoa com crachá: quem assume a execução.
    `<path d="M29 84V69q3-18 31-18t31 18v15" fill="#f5f5f1"/><path d="M48 52l12 18 12-18" stroke="#aaa"/><circle cx="60" cy="30" r="18" fill="#f5f5f1"/><path d="M42 27q-3-21 20-19 21 2 17 24-10-17-21-9-9 6-16 4" fill="#aaa"/><rect x="63" y="62" width="21" height="27" rx="4" fill="#30b0c7"/><circle cx="73.5" cy="71" r="3" fill="#141414" stroke="none"/><path d="M69 80h9" stroke="#141414"/>`,
    // Caixa de ferramentas: o recurso usado para agir.
    `<path d="M47 42V30h26v12" stroke="#f5f5f1" stroke-width="6"/><path d="M47 30h26" stroke="#30b0c7" stroke-width="6"/><rect x="22" y="43" width="76" height="41" rx="7" fill="#aaa"/><path d="M22 51v14q38 16 76 0V51" fill="#f5f5f1"/><rect x="53" y="59" width="14" height="17" rx="3" fill="#30b0c7"/><path d="M38 43l-7-22 8-3 8 25m32 0 10-22" stroke="#f5f5f1" stroke-width="5"/><path d="M84 23l7 3 6-12-9 2" fill="#30b0c7"/>`,
    // Documento saindo de uma gaveta: informação já existente.
    `<rect x="24" y="36" width="72" height="48" rx="5" fill="#aaa"/><path d="M33 43h54v31H33z" fill="#141414"/><path d="M43 55V16h26l11 11v28" fill="#f5f5f1"/><path d="M68 16v12h12m-29 8h20m-20 8h15" stroke="#888"/><path d="M25 59h70l7 29H18z" fill="#f5f5f1"/><path d="M49 75h22" stroke="#888" stroke-width="4"/><path d="M91 42V12m-8 9 8-9 8 9" stroke="#30b0c7" stroke-width="4"/>`,
    // Peças montadas: produzir algo com uma sequência de ações.
    `<path d="M22 65l23-12 24 12v22L45 99 22 87z" fill="#aaa"/><path d="M22 65l23 12 24-12M45 77v22"/><path d="M57 48l24-12 24 12v23L81 83 57 71z" fill="#f5f5f1"/><path d="M57 48l24 12 24-12M81 60v23"/><path d="M32 19L55 7l23 12v23L55 54 32 42z" fill="#30b0c7"/><path d="M32 19l23 12 23-12M55 31v23"/><path d="M17 28v14m-6-7h12" stroke="#f5f5f1"/>`,
    // Bandeja e destino: encaminhar o resultado.
    `<path d="M13 73h65v8H13z" fill="#aaa"/><path d="M20 66a25 25 0 0 1 50 0" fill="#f5f5f1"/><path d="M45 41v-6m-5 0h10" stroke="#aaa"/><path d="M33 93l10-12h28" stroke="#f5f5f1" stroke-width="5"/><path d="M73 57h30m-10-9 10 9-10 9" stroke="#30b0c7" stroke-width="4"/><path d="M103 38s-13-12-13-21a13 13 0 0 1 26 0c0 9-13 21-13 21z" fill="#30b0c7"/><circle cx="103" cy="17" r="4" fill="#141414" stroke="none"/>`
  ];
  function icon(i) {
    return `<svg class="stage-symbol" data-stage-symbol="${i}" viewBox="0 0 120 108" aria-hidden="true" focusable="false"><ellipse cx="60" cy="58" rx="51" ry="44" fill="#282828"/><g fill="none" stroke="#141414" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${drawings[i]}</g></svg>`;
  }
  function header(i) {
    return `<span class="stage-art">${icon(i)}</span><span class="stage-tab"><span class="stage-number">${i+1}</span>${names[i]}</span>`;
  }
  function badges(indices) {
    return `<span class="stage-badges">${indices.map(i=>`<span class="stage-badge">${icon(i)}<span>${names[i]}</span></span>`).join('')}</span>`;
  }

  function chef() {
    return `<svg class="chef-icon portrait" viewBox="0 0 64 76" aria-hidden="true" focusable="false"><circle cx="32" cy="40" r="30" fill="#282828"/><g stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 73V56Q13 43 32 43T54 56V73" fill="#f5f5f1"/><path d="M24 49v9h16V49m-17 8-4 16h26l-4-16" fill="#30b0c7"/><ellipse cx="32" cy="32" rx="16" ry="18" fill="#f5f5f1"/><path d="M16 23Q6 11 19 9Q22-1 32 6Q45-1 49 11Q61 20 48 26H16Z" fill="#f5f5f1"/><path d="M17 23h31v6H17z" fill="#b3b3b3"/><path d="M26 35h1m10 0h1m-10 8q4 3 8-1" fill="none"/></g></svg>`;
  }
  function customer(n, served) {
    const shirt = ['#30b0c7', '#f5f5f1', '#888888'][n % 3];
    return `<svg class="portrait" viewBox="0 0 64 76" aria-hidden="true" focusable="false"><circle cx="32" cy="40" r="30" fill="#282828"/><g stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 73V56Q13 43 32 43T54 56V73" fill="${shirt}"/><path d="M25 48l7 8 7-8" fill="none"/><ellipse cx="32" cy="29" rx="15" ry="18" fill="#f5f5f1"/><path d="${n % 2 ? 'M17 31Q8 8 28 8Q47 2 49 27L41 20 32 15 24 26Z' : 'M17 25Q13 7 31 7Q50 5 47 27L37 18Q25 24 17 25Z'}" fill="#888888"/><path d="M26 32h1m10 0h1m-10 8q4 4 8-1" fill="none"/>${served ? '<ellipse cx="32" cy="66" rx="25" ry="7" fill="#f5f5f1"/><ellipse cx="32" cy="63" rx="17" ry="5" fill="#b3b3b3"/><path d="M20 63q4-6 8 0t8 0t8 0" fill="none"/><path d="m46 44 4 4 8-10" fill="none" stroke="#30b0c7" stroke-width="3"/>' : ''}</g></svg>`;
  }
  window.StageIdentity = Object.freeze({icon, header, badges, chef, customer});
})();
