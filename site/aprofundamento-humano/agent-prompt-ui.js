(function () {
  "use strict";
  const dialog = document.getElementById("agent-prompt-dialog");
  const text = document.getElementById("agent-prompt-text");
  const status = document.getElementById("agent-prompt-status");
  const copy = document.getElementById("agent-prompt-copy");
  let record, opener;

  function open(value, trigger) {
    record = value;
    opener = trigger || document.activeElement;
    document.getElementById("agent-prompt-assessment").textContent = value.assessment.title;
    document.getElementById("agent-prompt-date").textContent = value.completed_at ? new Date(value.completed_at).toLocaleDateString("pt-BR", { timeZone: value.timezone || "UTC" }) : "Data não registrada";
    document.getElementById("agent-prompt-review").textContent = value.review.date ? value.review.date.split("-").reverse().join("/") : "Data a confirmar";
    text.value = window.AgentFlixAgentPrompt.render(value);
    text.setSelectionRange(0, 0);
    text.scrollTop = 0;
    status.textContent = "";
    dialog.showModal();
    document.body.classList.add("agent-prompt-open");
    copy.focus({ preventScroll: true });
  }
  document.getElementById("agent-prompt-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", event => {
    if (event.key !== "Tab") return;
    const controls = [...dialog.querySelectorAll("button:not(:disabled), textarea")];
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("agent-prompt-open");
    if (opener && opener.isConnected) opener.focus({ preventScroll: true });
  });
  window.addEventListener("hashchange", () => { if (dialog.open) dialog.close(); });
  copy.addEventListener("click", async () => {
    const current = record;
    try {
      await navigator.clipboard.writeText(text.value);
      if (current === record) status.textContent = "Prompt copiado. Cole na conversa com seu agente.";
    } catch (_) {
      if (current !== record) return;
      text.focus(); text.select();
      status.textContent = "Cópia automática indisponível. O texto está selecionado para copiar manualmente ou baixar.";
    }
  });
  document.getElementById("agent-prompt-download").addEventListener("click", () => {
    try {
      const url = URL.createObjectURL(new Blob([text.value], { type: "text/markdown;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url; link.download = window.AgentFlixAgentPrompt.filename(record);
      dialog.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent = "Arquivo .md preparado para download.";
    } catch (_) {
      text.focus(); text.select();
      status.textContent = "Download indisponível. Copie o texto selecionado e salve como .md.";
    }
  });
  window.AgentFlixAgentPromptUI = Object.freeze({ open });
})();
