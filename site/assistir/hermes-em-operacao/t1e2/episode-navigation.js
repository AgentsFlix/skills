(() => {
  'use strict';
  // One sequence shared by every part; lesson steps keep their own controls.
  const parts = [
    ['index.html', 'O restaurante de Miojo Premium'],
    ['pratica.html', 'Monte o fluxo do restaurante'],
    ['equipe.html', 'Divida o trabalho entre os chefs'],
    ['eugencia.html', 'Conheça a Eugência'],
    ['eugencia-pratica.html', 'Monte o fluxo da Eugência'],
    ['novo-cliente.html', 'Receba um novo cliente'],
    ['cliente-pratica.html', 'Converse com três clientes'],
    ['base-negocio.html', 'Construa a base do negócio'],
    ['jornada-marca.html', 'Monte a base da sua marca'],
  ];
  const file = location.pathname.split('/').pop() || 'index.html';
  const current = parts.findIndex(([path]) => path === file);
  if (current < 0) return;
  const series = '../../?s=hermes-em-operacao';
  const header = document.querySelector('.top');
  const back = header?.querySelector('.back');
  if (back) { back.href = series; back.textContent = '← Voltar à série'; }
  const nav = document.createElement('nav');
  nav.className = 'episode-navigation';
  nav.setAttribute('aria-label', 'Partes do episódio 2');
  nav.innerHTML = `<details><summary><span>Parte ${current + 1} de ${parts.length}</span><strong>${parts[current][1]}</strong><span class="parts-toggle">Ver partes ▾</span></summary><ol>${parts.map(([path, title], i) => `<li><a href="${path}" ${i === current ? 'aria-current="page"' : ''}><span>${String(i + 1).padStart(2, '0')}</span>${title}</a></li>`).join('')}</ol></details>`;
  header.after(nav);
  const details = nav.querySelector('details');
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && details.open) { details.open = false; nav.querySelector('summary').focus(); }
  });
  document.addEventListener('click', event => { if (!nav.contains(event.target)) details.open = false; });
  document.querySelectorAll('.episode-pages, .page-nav').forEach(element => element.remove());
  // Preserve reset controls and lesson navigation; replace only cross-page links.
  document.querySelectorAll('main > footer > a').forEach(element => element.remove());
  const pager = document.createElement('nav');
  pager.className = 'episode-pagination';
  pager.setAttribute('aria-label', 'Continuar o episódio');
  pager.innerHTML = `${current > 0 ? `<a class="part-previous" href="${parts[current - 1][0]}">← Parte anterior</a>` : '<span></span>'}<a class="part-next" href="${current < parts.length - 1 ? parts[current + 1][0] : series}">${current < parts.length - 1 ? `Próxima parte · ${current + 2} de ${parts.length} →` : 'Voltar à série →'}</a>`;
  document.querySelector('main').append(pager);
  document.title = `${parts[current][1]} · T1:E2 · AgentFlix`;
})();
