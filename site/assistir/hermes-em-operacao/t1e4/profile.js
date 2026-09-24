'use strict';

const parts = [
  {
    name: 'Modelo de IA', family: 'Cérebro', title: 'O modelo é quem processa o pedido.',
    description: 'Quando você fala com o Hermes, um modelo de IA interpreta a solicitação e produz a resposta. O profile guarda qual modelo e provedor usar.',
    example: 'Trocar o modelo muda o motor de raciocínio. Não troca, por si só, a memória, as skills ou os canais.',
    concept: 'O modelo é uma escolha de configuração. Ele não é o profile inteiro.',
    caption: 'O profile default existe. Agora vamos olhar seu cérebro.'
  },
  {
    name: 'Memória', family: 'Cérebro', title: 'A memória conserva o que deve continuar.',
    description: 'O Hermes pode guardar informações para recuperar em conversas futuras. Cada profile trabalha com sua própria memória e seu histórico de sessões.',
    example: 'O modelo processa a pergunta de agora. A memória ajuda a trazer de volta uma preferência registrada antes.',
    concept: 'Modelo e memória trabalham juntos, mas cumprem funções diferentes.',
    caption: 'A memória pertence a esta identidade. Ela não é a memória de todos os profiles.'
  },
  {
    name: 'Skills', family: 'Soft skills', title: 'Skills ensinam como fazer.',
    description: 'Uma skill é uma instrução reutilizável: descreve um método, uma sequência ou critérios para um tipo de trabalho.',
    example: 'Uma skill pode ensinar o passo a passo de um relatório. Ela orienta o trabalho; não executa a ação sozinha.',
    concept: 'Ter uma skill não concede automaticamente acesso a uma ferramenta.',
    caption: 'O profile encontra instruções próprias para conduzir trabalhos recorrentes.'
  },
  {
    name: 'Tools', family: 'Hard skills', title: 'Tools permitem agir.',
    description: 'Tools são capacidades de ação, como consultar arquivos, pesquisar na web ou usar uma conexão configurada.',
    example: 'A skill diz como montar o relatório. Uma tool pode ler a planilha necessária para produzi-lo.',
    concept: 'As ferramentas disponíveis dependem da configuração do profile e do ambiente.',
    caption: 'Instrução e ação ficam lado a lado: skill orienta, tool executa.'
  },
  {
    name: 'Cron', family: 'Rotina', title: 'Cron dá hora ao trabalho.',
    description: 'Uma rotina agendada pode iniciar um trabalho do profile em um horário ou intervalo definido. Ela continua ligada a esta identidade.',
    example: '“Verifique o relatório toda manhã às 9h” é uma rotina. Se ninguém criar essa tarefa, não há nada agendado.',
    concept: 'O espaço de cron pode começar vazio; executar a rotina exige um agendador ativo.',
    caption: 'O relógio é uma possibilidade do profile, não uma rotina pronta na instalação.'
  },
  {
    name: 'Gateway', family: 'Boca', title: 'O gateway abre a conversa.',
    description: 'O gateway recebe mensagens e entrega respostas pelos canais configurados, como Telegram ou WhatsApp. Ele liga a conversa à identidade certa.',
    example: 'Sem um canal conectado, o profile ainda pode ser usado pelo terminal. Um bot de mensagem não é o profile inteiro.',
    concept: 'Na metáfora é a boca; na operação, também recebe e encaminha mensagens.',
    caption: 'A comunicação fecha a anatomia: seis partes, uma identidade persistente.'
  }
];

let current = 0;
let completed = false;
const visited = new Set([0]);
const $ = (id) => document.getElementById(id);

function render() {
  const part = parts[current];
  document.querySelectorAll('[data-step]').forEach((button) => {
    const index = Number(button.dataset.step);
    button.toggleAttribute('aria-current', index === current);
    if (index === current) button.setAttribute('aria-current', 'step');
    button.dataset.visited = visited.has(index) ? 'true' : 'false';
  });
  $('lesson-copy').innerHTML = `<p class="step-index">Parte ${current + 1} de 6 · ${part.family}</p><h2 id="lesson-title">${part.title}</h2><p class="description">${part.description}</p>`;
  $('example').innerHTML = `<span class="example-label">Pense assim</span><p>${part.example}</p>`;
  $('concept').textContent = part.concept;
  $('scene-caption').textContent = part.caption;
  $('position').textContent = `${current + 1} / 6 · ${part.name}`;
  $('prev').disabled = current === 0;
  $('next').innerHTML = current === parts.length - 1
    ? '<af-icon name="restart"></af-icon> Rever desde o início'
    : 'Próxima etapa <af-icon name="next"></af-icon>';
  $('practice').hidden = current !== parts.length - 1;
  if (current !== parts.length - 1) $('practice-feedback').textContent = '';
  document.querySelector('.page-end').textContent = completed
    ? 'Página 1 · Exploração concluída'
    : 'Página 1 · A anatomia do profile';
}

function go(index, focusStep = false) {
  current = Math.max(0, Math.min(parts.length - 1, index));
  visited.add(current);
  render();
  if (focusStep) document.querySelector(`#steps [data-step="${current}"]`).focus({ preventScroll: true });
}

for (const selector of ['#steps', '.organ-grid']) {
  document.querySelector(selector).addEventListener('click', (event) => {
    const button = event.target.closest('[data-step]');
    if (button) go(Number(button.dataset.step), selector === '#steps');
  });
}

$('prev').addEventListener('click', () => go(current - 1));
$('next').addEventListener('click', () => go(current === parts.length - 1 ? 0 : current + 1));
$('practice').addEventListener('click', (event) => {
  const answer = event.target.closest('[data-answer]');
  if (!answer) return;
  const right = answer.dataset.answer === 'skill';
  $('practice-feedback').textContent = right
    ? 'Isso. A skill ensina o procedimento; a tool executa uma ação disponível.'
    : 'Quase. A tool executa uma ação. Quem ensina o passo a passo é a skill.';
  $('practice-feedback').dataset.correct = right ? 'true' : 'false';
  if (right) completed = true;
  renderCompletion();
});

function renderCompletion() {
  document.querySelector('.page-end').textContent = completed
    ? 'Página 1 · Exploração concluída'
    : 'Página 1 · A anatomia do profile';
}

render();
