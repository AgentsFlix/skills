'use strict';

(() => {
  const $ = (id) => document.getElementById(id);
  const stages = ['Modelo de IA', 'Memória', 'Skills', 'Tools', 'Cron', 'Gateway'];
  const art = ['modelo', 'memoria', 'skills', 'tools', 'cron', 'gateway'];
  const hints = [
    'Que tipo de modelo processa este pedido?',
    'O que vale guardar para conversas futuras?',
    'Qual método ensina como fazer?',
    'Que ação precisa de uma conexão?',
    'O trabalho começa em um horário ou com um pedido?',
    'Por qual canal a resposta deve chegar?'
  ];

  // Cada par contém uma opção coerente com o pedido do negócio e um desvio pedagógico.
  const scenarios = [
    {
      title: 'Loja virtual', tag: 'Atendimento sob demanda',
      image: 'art/loja-virtual-v1.webp',
      mission: 'Monte um profile que responda pelo WhatsApp onde está o pedido. Ele deve consultar o sistema de pedidos antes de informar o status atual, sem inventar dados.',
      pairs: [
        ['Modelo de texto rápido, capaz de usar tools.', 'Modelo sem uso de tools, que responde por suposição.', 'O modelo pode interpretar a pergunta e pedir a consulta.', 'Sem consulta, o modelo não sabe o status atual.'],
        ['Preferências e contexto do atendimento daquele cliente.', 'Status do pedido guardado como fato permanente.', 'A memória conserva contexto que ajuda no próximo contato.', 'O status muda; a fonte atual é o sistema de pedidos.'],
        ['Passo a passo para identificar, consultar e responder.', 'Skill tratada como banco de pedidos.', 'A skill ensina o procedimento do atendimento.', 'A skill não contém os pedidos atualizados.'],
        ['Consulta ao sistema de pedidos.', 'Pesquisa na web para descobrir o status.', 'A tool lê a fonte operacional do pedido.', 'Uma busca pública não conhece este pedido.'],
        ['Nenhuma rotina: atender quando a pergunta chegar.', 'Atualizações diárias sem pedido do cliente.', 'O gatilho aqui é a mensagem do cliente.', 'O objetivo não pede disparo programado.'],
        ['WhatsApp do atendimento.', 'Slack da equipe interna.', 'O cliente receberá a resposta no canal em que falou.', 'O Slack interno não é o canal do cliente.']
      ]
    },
    {
      title: 'Escola de idiomas', tag: 'Prática semanal',
      image: 'art/escola-idiomas-v1.webp',
      mission: 'Monte um profile que, toda segunda-feira, envie pelo Telegram um exercício adequado ao nível de cada aluno. Consulte o progresso na escola e mantenha o contexto separado por aluno.',
      pairs: [
        ['Modelo de texto capaz de criar e corrigir exercícios bilíngues.', 'Modelo limitado a gerar imagens.', 'O trabalho exige leitura, escrita e correção de texto.', 'Gerar imagens não resolve o exercício bilíngue.'],
        ['Nível, objetivo e dificuldades daquele aluno.', 'Uma memória genérica que mistura todos os alunos.', 'O contexto individual orienta a próxima prática.', 'Misturar alunos produz exercícios inadequados.'],
        ['Método para adaptar exercício e dar feedback.', 'Um exercício fixo enviado igual a todos.', 'A skill define como ajustar a atividade.', 'O pedido exige adaptação ao nível de cada aluno.'],
        ['Consultar o progresso no sistema da escola.', 'Inventar o progresso a partir da memória.', 'A tool traz o progresso registrado.', 'A memória pode estar incompleta ou antiga.'],
        ['Disparo semanal na segunda-feira.', 'Esperar uma mensagem do aluno para começar.', 'O CRON inicia a tarefa no dia combinado.', 'O exercício deve chegar mesmo sem mensagem nova.'],
        ['Telegram dos alunos inscritos.', 'Slack usado pelos professores.', 'O canal escolhido entrega a prática ao aluno.', 'O Slack dos professores não entrega a prática ao aluno.']
      ]
    },
    {
      title: 'Oficina mecânica', tag: 'Foto e agendamento',
      image: 'art/oficina-mecanica-v1.webp',
      mission: 'Monte um profile que receba pelo WhatsApp a foto da luz do painel, faça uma triagem inicial e ofereça um horário confirmado para inspeção. Não feche diagnóstico pela imagem.',
      pairs: [
        ['Modelo capaz de interpretar imagem e texto.', 'Modelo que só recebe texto, mas afirma ter visto a foto.', 'O modelo precisa receber a modalidade usada pelo cliente.', 'Não se pode afirmar que viu uma imagem não processada.'],
        ['Veículo e histórico daquele atendimento.', 'Histórico de outros clientes como se fosse do mesmo carro.', 'A memória mantém o contexto correto do atendimento.', 'O histórico de outro veículo confunde a triagem.'],
        ['Perguntas de triagem e orientação para avaliação humana.', 'Fechar diagnóstico apenas pela foto.', 'A skill orienta perguntas e limites da resposta.', 'A foto isolada não fecha um diagnóstico mecânico.'],
        ['Consultar horários e registrar o agendamento.', 'Dizer “agendado” sem acessar a agenda.', 'A tool confirma disponibilidade e registra a visita.', 'Uma frase não cria um agendamento real.'],
        ['Lembrete no dia anterior à visita.', 'Mensagem repetida a cada hora.', 'A rotina tem um horário útil ligado à visita.', 'Mensagens horárias não atendem ao objetivo.'],
        ['WhatsApp do atendimento.', 'Slack da equipe.', 'A resposta e a confirmação chegam ao cliente.', 'O Slack interno não é o canal do cliente.']
      ]
    },
    {
      title: 'Agência de marketing', tag: 'Relatório semanal',
      image: 'art/agencia-marketing-v1.webp',
      mission: 'Monte um profile que, antes da reunião de segunda, consulte as métricas de cinco contas e envie um resumo à equipe pelo Slack. Separe o contexto de cada cliente e sustente as conclusões nos dados.',
      pairs: [
        ['Modelo de texto que consegue comparar todos os dados fornecidos.', 'Modelo cuja janela de contexto corta parte dos dados.', 'O modelo precisa analisar o conjunto do relatório.', 'Dados cortados tornam a comparação incompleta.'],
        ['Objetivos e decisões identificados por cliente.', 'Metas de clientes diferentes misturadas na memória.', 'A memória recupera o contexto certo de cada conta.', 'Metas misturadas distorcem o relatório.'],
        ['Método de relatório com variação, evidência e próximo passo.', 'Instrução para declarar uma causa sem evidência.', 'A skill orienta uma análise rastreável.', 'Uma variação sozinha não comprova a causa.'],
        ['Consultar os painéis de métricas.', 'Usar números lembrados de semanas anteriores.', 'A tool consulta os dados da semana.', 'Números antigos não descrevem a semana atual.'],
        ['Execução toda segunda antes da reunião.', 'Nenhum agendamento para um relatório recorrente.', 'O CRON inicia o relatório no momento combinado.', 'A equipe pediu uma entrega recorrente.'],
        ['Slack da equipe.', 'WhatsApp de um cliente para o relatório interno.', 'A equipe recebe o resumo no canal definido.', 'O relatório de cinco contas é interno.']
      ]
    },
    {
      title: 'Restaurante com três unidades', tag: 'Alerta diário de estoque',
      image: 'art/restaurante-tres-unidades-v1.webp',
      mission: 'Monte um profile que, todos os dias às 7h, consulte o estoque das três unidades e avise o gerente pelo Telegram apenas sobre itens abaixo do mínimo. Compare a quantidade atual com o limite de cada item e unidade.',
      pairs: [
        ['Modelo de texto para resumir faltas com clareza.', 'Modelo que tenta estimar estoque sem consultar dados.', 'O modelo organiza e explica os itens encontrados.', 'O modelo não tem como adivinhar o estoque atual.'],
        ['Regras estáveis, como o mínimo por item e unidade.', 'Quantidade de ontem tratada como estoque atual.', 'A memória conserva o limite usado na comparação.', 'O estoque de ontem pode ter mudado.'],
        ['Procedimento para agrupar faltas por unidade e prioridade.', 'Instrução vaga: “avise se parecer pouco”.', 'A skill define o critério e a forma do alerta.', 'Sem critério, o alerta não respeita o mínimo definido.'],
        ['Consulta ao sistema de estoque.', 'Lista antiga salva na conversa.', 'A tool lê a quantidade disponível agora.', 'Uma lista antiga não confirma a situação atual.'],
        ['Consulta diária às 7h.', 'Esperar o gerente pedir o alerta.', 'O CRON inicia a verificação no horário solicitado.', 'O gerente pediu recebimento automático às 7h.'],
        ['Telegram do gerente.', 'WhatsApp dos clientes do restaurante.', 'O alerta vai ao responsável indicado.', 'Clientes não são destinatários do estoque interno.']
      ]
    }
  ];

  let round = 0;
  let slots = Array(6).fill(null);
  let selected = null;
  let checked = false;
  let passed = false;
  let completed = 0;
  let order = [];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const options = () => scenarios[round].pairs.flatMap((pair, stage) => [
    { id: `${stage}-right`, stage, correct: true, text: pair[0], reason: pair[2] },
    { id: `${stage}-wrong`, stage, correct: false, text: pair[1], reason: pair[3] }
  ]);
  const findOption = (id) => options().find((option) => option.id === id);
  const shuffle = (items) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  function renderBoard() {
    const scenario = scenarios[round];
    $('scenario-count').textContent = `Cenário ${round + 1} de ${scenarios.length}`;
    $('scenario-title').textContent = scenario.title;
    $('scenario-task').textContent = scenario.mission;
    $('scenario-tag').textContent = scenario.tag;
    $('round-label').textContent = `Profile ${round + 1} · ${scenario.title}`;
    $('scenario-track').innerHTML = scenarios.map((item, index) => `<li ${index === round ? 'aria-current="step"' : ''} data-complete="${index < completed}"><img class="scenario-art" src="${item.image}" alt="" width="640" height="427"><div class="scenario-card-copy"><span>${String(index + 1).padStart(2, '0')}${index < completed ? ' · Feito' : ''}</span><strong>${escapeHtml(item.title)}</strong></div></li>`).join('');
  }

  function resultFor(index) {
    if (!checked || !slots[index]) return '';
    const option = findOption(slots[index]);
    return option.correct && option.stage === index ? 'correct' : 'wrong';
  }

  function hintFor(index) {
    const result = resultFor(index);
    if (!checked) return hints[index];
    if (!slots[index]) return `Escolha uma peça para ${stages[index]}.`;
    const option = findOption(slots[index]);
    if (result === 'correct') return option.reason;
    if (option.stage !== index) return `Esta peça é de ${stages[option.stage]}.`;
    return option.reason;
  }

  function renderPuzzle() {
    $('slots').innerHTML = stages.map((stage, index) => {
      const option = slots[index] ? findOption(slots[index]) : null;
      const result = resultFor(index);
      const label = option ? `${stage}: ${option.text} ${passed ? 'Escolha concluída' : 'Toque para retirar ou substituir.'}` : `${stage}: espaço vazio. Toque para colocar a peça selecionada.`;
      return `<article class="slot" data-stage="${index}" data-result="${result}">
        <span class="part-art part-art--${art[index]}" aria-hidden="true"></span>
        <div class="slot-label"><span>${String(index + 1).padStart(2, '0')}</span>${stage}</div>
        <button type="button" class="slot-choice" id="slot-${index}" data-slot="${index}" data-filled="${Boolean(option)}" aria-label="${escapeHtml(label)}" ${passed ? 'disabled' : ''}>${option ? escapeHtml(option.text) : 'Colocar uma peça'}</button>
        <p class="slot-hint">${escapeHtml(hintFor(index))}</p>
      </article>`;
    }).join('');
    const used = new Set(slots.filter(Boolean));
    $('tray').innerHTML = order.filter((id) => !used.has(id)).map((id) => {
      const option = findOption(id);
      return `<button type="button" class="piece" id="piece-${id}" data-piece="${id}" aria-pressed="${selected === id}" draggable="${!passed}" ${passed ? 'disabled' : ''}><span>${escapeHtml(stages[option.stage])}</span><strong>${escapeHtml(option.text)}</strong></button>`;
    }).join('');
    $('placed-count').textContent = `${slots.filter(Boolean).length} / 6 escolhas`;
    $('check').disabled = passed;
  }

  function render() {
    renderBoard();
    renderPuzzle();
  }

  function place(stage, id) {
    if (passed || !id || !findOption(id)) return;
    const previousStage = slots.indexOf(id);
    if (previousStage !== -1) slots[previousStage] = null;
    slots[stage] = id;
    selected = null;
    checked = false;
    $('selection').textContent = `${stages[stage]} recebeu uma peça. Você pode trocar antes de conferir.`;
    $('feedback').textContent = 'Confira quando as seis partes estiverem escolhidas.';
    renderPuzzle();
    $(`slot-${stage}`).focus({ preventScroll: true });
  }

  $('tray').addEventListener('click', (event) => {
    const button = event.target.closest('[data-piece]');
    if (!button || passed) return;
    selected = selected === button.dataset.piece ? null : button.dataset.piece;
    $('selection').textContent = selected
      ? `Peça de ${stages[findOption(selected).stage]} selecionada. Escolha um dos seis espaços acima.`
      : 'Seleção desfeita. Escolha outra peça.';
    renderPuzzle();
    if (selected) $(`piece-${selected}`).focus({ preventScroll: true });
  });

  $('slots').addEventListener('click', (event) => {
    const button = event.target.closest('[data-slot]');
    if (!button || passed) return;
    const stage = Number(button.dataset.slot);
    if (selected) return place(stage, selected);
    if (slots[stage]) {
      slots[stage] = null;
      checked = false;
      $('selection').textContent = `Peça retirada de ${stages[stage]}. Escolha outra na mesa.`;
      $('feedback').textContent = 'Confira quando as seis partes estiverem escolhidas.';
      renderPuzzle();
      $(`slot-${stage}`).focus({ preventScroll: true });
    } else {
      $('selection').textContent = `Escolha uma peça na mesa para ${stages[stage]}.`;
    }
  });

  $('tray').addEventListener('dragstart', (event) => {
    const piece = event.target.closest('[data-piece]');
    if (!piece || passed) return;
    event.dataTransfer.setData('text/plain', piece.dataset.piece);
    event.dataTransfer.effectAllowed = 'move';
  });
  $('slots').addEventListener('dragover', (event) => {
    const slot = event.target.closest('[data-stage]');
    if (!slot || passed) return;
    event.preventDefault();
    slot.classList.add('drag-over');
  });
  $('slots').addEventListener('dragleave', (event) => {
    const slot = event.target.closest('[data-stage]');
    if (slot) slot.classList.remove('drag-over');
  });
  $('slots').addEventListener('drop', (event) => {
    const slot = event.target.closest('[data-stage]');
    if (!slot || passed) return;
    event.preventDefault();
    slot.classList.remove('drag-over');
    place(Number(slot.dataset.stage), event.dataTransfer.getData('text/plain'));
  });

  $('check').addEventListener('click', () => {
    if (passed) return;
    checked = true;
    const rightCount = slots.reduce((count, id, index) => {
      const option = id && findOption(id);
      return count + Number(Boolean(option && option.correct && option.stage === index));
    }, 0);
    renderPuzzle();
    if (rightCount !== stages.length) {
      $('feedback').textContent = `${rightCount} de 6 escolhas corretas. Leia as pistas nos espaços e troque as peças necessárias.`;
      return;
    }
    passed = true;
    completed = Math.max(completed, round + 1);
    render();
    $('feedback').textContent = 'Seis escolhas corretas. O profile deste negócio está montado.';
    $('gate').hidden = false;
    if (round === scenarios.length - 1) {
      $('gate-label').textContent = 'Atividade concluída';
      $('gate-title').textContent = 'Cinco negócios. Cinco profiles montados.';
      $('gate-copy').textContent = 'Você escolheu as seis partes conforme o trabalho de cada negócio. A próxima escolha começa pelo objetivo, não pelo nome da ferramenta.';
      $('next-scenario').innerHTML = '<af-icon name="restart"></af-icon> Montar tudo de novo';
    } else {
      $('gate-label').textContent = 'Profile montado';
      $('gate-title').textContent = `${scenarios[round].title}: as seis escolhas funcionam juntas.`;
      $('gate-copy').textContent = `Agora monte o profile de ${scenarios[round + 1].title.toLowerCase()}. O objetivo muda; algumas escolhas também.`;
      $('next-scenario').innerHTML = 'Próximo negócio <af-icon name="next"></af-icon>';
    }
    $('gate-title').tabIndex = -1;
    $('gate-title').focus();
  });

  $('next-scenario').addEventListener('click', () => {
    if (round === scenarios.length - 1) completed = 0;
    round = (round + 1) % scenarios.length;
    slots = Array(6).fill(null);
    selected = null;
    checked = false;
    passed = false;
    order = shuffle(options().map((option) => option.id));
    $('gate').hidden = true;
    $('selection').textContent = 'Escolha uma peça na mesa abaixo.';
    $('feedback').textContent = 'Complete as seis partes para conferir o profile.';
    render();
    $('scenario-title').tabIndex = -1;
    $('scenario-title').focus();
  });

  order = shuffle(options().map((option) => option.id));
  render();
})();
