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
  if (!source || !preview || !details || !copyButton || !copyStatus || !downloadButton || !downloadStatus || !promptDownload) return;

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

  updateDownloadState();
})();
