(() => {
  'use strict';

  const source = document.querySelector('#knowledge-prompt-source');
  const preview = document.querySelector('#knowledge-prompt-preview');
  const details = document.querySelector('#knowledge-prompt-details');
  const copyButton = document.querySelector('#copy-knowledge-prompt');
  const copyStatus = document.querySelector('#prompt-handoff-status');
  const downloadButton = document.querySelector('#download-base');
  const downloadStatus = document.querySelector('#base-handoff-status');
  const promptDownload = document.querySelector('#download-knowledge-prompt');
  const demoButton = document.querySelector('#fill-knowledge-example');
  const demoStatus = document.querySelector('#knowledge-demo-status');
  if (!source || !preview || !details || !copyButton || !copyStatus || !downloadButton || !downloadStatus || !promptDownload || !demoButton || !demoStatus) return;

  const block = /^```text\r?\n([\s\S]*?)\r?\n```\s*$/m.exec(source.value);
  const prompt = block ? block[1] : source.value;
  preview.value = prompt;

  function currentBundle() {
    return window.ECFBaseBundle?.activeBundle() || null;
  }

  function updateDownloadState() {
    const bundle = currentBundle();
    downloadButton.disabled = !bundle;
    downloadStatus.textContent = bundle ? '' : 'Não encontrei uma Base ECF completa neste navegador. Volte ao painel para conferir os seis arquivos.';
    return bundle;
  }

  function downloadText(filename, content, type) {
    const url = URL.createObjectURL(new Blob([content], {type}));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  downloadButton.addEventListener('click', () => {
    const bundle = currentBundle();
    if (!bundle || !window.ECFBaseBundle.download(bundle)) {
      updateDownloadState();
      return;
    }
    downloadStatus.textContent = 'Arquivo baixado. Anexe-o no Hermes antes de enviar o prompt.';
  });

  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    try {
      const copied = await window.agentflixCopy?.(prompt);
      if (!copied) throw new Error('A cópia foi bloqueada.');
      copyStatus.textContent = 'Prompt copiado. Cole no Hermes e envie junto com o arquivo.';
    } catch (_) {
      details.open = true;
      copyStatus.textContent = 'A cópia foi bloqueada. Selecione o texto abaixo ou baixe o prompt .md.';
    } finally {
      copyButton.disabled = false;
    }
  });

  promptDownload.addEventListener('click', () => {
    downloadText('prompt-base-conhecimento-social-media.md', source.value, 'text/markdown;charset=utf-8');
    copyStatus.textContent = 'Prompt baixado. Anexe o JSON e cole este prompt na mesma conversa do Hermes.';
  });

  function fictionalKnowledge(name) {
    const topics=Array.from({length:18},(_,index)=>{
      const role=['Creator','Expert','Founder'][index%3];
      const pillar=['Começar com clareza','Aplicar com calma','Transformar em rotina'][index%3];
      return '| '+(index<3?'Alta':'Média')+' | Exemplo fictício '+String(index+1).padStart(2,'0')+' | Um primeiro passo possível | '+pillar+' | '+role+' | Demonstração fictícia | '+(role==='Founder'?'Conheça o case':'Experimente este passo')+' | Não tratar exemplo como prova real |';
    }).join('\n');
    return '# Base de Conhecimento Social Media — '+name+'\n\n'
      +'> **Status:** Rascunho demonstrativo\n> **Versão:** 1\n> **Atualização:** '+new Date().toISOString().slice(0,10)+'\n\n'
      +'## 1. Resumo operacional\n\nEsta é uma Base de Conhecimento Social Media fictícia para demonstrar o dashboard do AgentFlix. Ela organiza uma marca de exemplo que ajuda pessoas a começarem uma rotina de organização com passos simples.\n\n'
      +'## 2. Mandato do Social Media\n\n| Decisão | Direção operacional | Estado e fonte |\n|---|---|---|\n| Porta de entrada | Um primeiro passo de organização | Demonstração fictícia |\n| Transformação comunicada | Intenção em rotina visível | Demonstração fictícia |\n\n'
      +'## 3. Público e contexto de decisão\n\n| Situação | Dor ou dúvida | Desejo | Linguagem real | Estado da evidência | Fonte |\n|---|---|---|---|---|---|\n| Semana dispersa | Não sei por onde começar | Uma rotina possível | Quero ver o que fazer primeiro | Ilustrativo | Demonstração fictícia |\n\n'
      +'## 4. Posicionamento e mensagens\n\n### Mensagem central\n\nUma rotina visível começa com um passo que cabe no dia de hoje.\n\n### Mecanismo explicativo\n\nEscolher, visualizar e revisar transforma intenção em uma ação possível.\n\n### Promessas permitidas\n\n- Oferecer um primeiro passo claro.\n\n### Limites de promessa\n\n- Não prometer produtividade ou resultado garantido.\n\n'
      +'## 5. Voz e regras de escrita\n\n| Aspecto | Regra operacional |\n|---|---|\n| Tom | Próximo, claro e prático |\n| Ritmo | Uma ideia e um convite por vez |\n\n'
      +'## 6. Matéria-prima e prova\n\n| Tipo | Item | Tese que pode sustentar | Estado e permissão | Fonte | Restrição factual |\n|---|---|---|---|---|---|\n| Dúvida | Como começar sem complicar | Um passo reduz a resistência | Ilustrativo, não publicar | Demonstração fictícia | Não é fala real |\n\n'
      +'## 7. Arquitetura Editorial ECF\n\n| Pilar | Problema ou desejo que atende | Papel ECF predominante | Formatos lógicos | Séries recorrentes | Fontes do bundle | Limites |\n|---|---|---|---|---|---|---|\n| Começar com clareza | Não saber por onde ir | Creator | Pergunta e exemplo | Primeiro passo | Demonstração fictícia | Não prometer resultado |\n| Aplicar com calma | Querer testar sem sobrecarga | Expert | Tutorial simples | Faz comigo | Demonstração fictícia | Não inventar prova |\n| Transformar em rotina | Manter uma escolha possível | Founder | Convite e case | Próximo passo | Demonstração fictícia | Não pressionar compra |\n\n| Papel | Proporção padrão | Função | Métrica primária |\n|---|---:|---|---|\n| Creator | 4 de cada 10 | Descoberta | Alcance |\n| Expert | 4 de cada 10 | Aplicação | Salvamentos |\n| Founder | 2 de cada 10 | Conversa | Conversas |\n\n'
      +'## 8. Banco de pautas priorizadas\n\n| Prioridade | Pauta | Gancho | Pilar | Papel ECF | Fonte ou prova | CTA | Limite |\n|---|---|---|---|---|---|---|---|\n'+topics+'\n\n'
      +'## 9. Conversão e CTA\n\n| Papel ECF | O que a pessoa acabou de receber | Próxima ação adequada | Formulação de CTA | O que não prometer |\n|---|---|---|---|---|\n| Creator | Uma identificação | Salvar a ideia | Guarde este primeiro passo | Resultado imediato |\n| Expert | Um exemplo aplicável | Testar o passo | Experimente hoje | Resultado garantido |\n| Founder | Um caminho possível | Abrir conversa | Conheça o case | Oferta inexistente |\n\n'
      +'## 10. Métricas e hipóteses de aprendizado\n\n| Papel ECF | Hipótese editorial | Métrica primária | Sinal complementar | O que não concluir só com essa métrica |\n|---|---|---|---|---|\n| Creator | A identificação abre descoberta | Alcance | Compartilhamentos | Que houve intenção de compra |\n| Expert | O passo prático gera utilidade | Salvamentos | Comentários | Que todos aplicaram |\n| Founder | O convite abre conversa | Conversas | Cliques | Que a oferta foi escolhida |\n\n'
      +'## 11. Governança do conhecimento\n\nMantenha exemplos fictícios separados de fatos, fontes e provas confirmadas.\n\n'
      +'## 12. Lacunas e decisões padrão aplicadas\n\n### Lacunas que permanecem\n\n- Substituir cada exemplo por dados, fontes e permissões reais antes de publicar.\n';
  }

  function updateDemoState() {
    const ready=Boolean(currentBundle()&&window.ECFBaseBundle?.activeProject()&&window.MarcaConhecimento);
    demoButton.disabled=!ready;
    demoStatus.textContent=ready?'':'Conclua as seis etapas da Base ECF para criar o exemplo e abrir o dashboard.';
    return ready;
  }

  demoButton.addEventListener('click',()=>{
    if(!updateDemoState())return;
    demoButton.disabled=true;
    try {
      const project=window.ECFBaseBundle.activeProject();
      const raw=fictionalKnowledge(project.business_name);
      window.MarcaConhecimento.parse(raw);
      const key='agentflix-social-media-document-v2:project:'+encodeURIComponent(project.id);
      const value=JSON.stringify({format:2,projectId:project.id,name:project.business_name,raw,filename:'base-conhecimento-social-media-exemplo.md',importedAt:new Date().toISOString()});
      localStorage.setItem(key,value);
      sessionStorage.removeItem(key);
      const destination=new URL('minha-marca.html',location.href);
      destination.searchParams.set('base',project.id);destination.hash='plano';
      location.assign(destination.href);
    } catch(error) {
      demoStatus.textContent='Não foi possível criar o exemplo: '+error.message;
      demoButton.disabled=false;
    }
  });

  const next=document.querySelector('.knowledge-return');
  const project=window.ECFBaseBundle?.activeProject();
  if(next&&project)next.href='minha-marca.html?base='+encodeURIComponent(project.id);
  updateDownloadState();
  updateDemoState();
})();
