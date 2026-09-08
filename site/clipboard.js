/* Só confirma depois que o navegador aceita a cópia. */
window.agentflixCopy = async function (text) {
  if (!text) return false;
  try { await navigator.clipboard.writeText(text); return true; } catch {}
  const focused = document.activeElement, field = document.createElement('textarea');
  field.value = text; field.readOnly = true;
  field.style.cssText = 'position:fixed;left:-9999px;top:0';
  document.body.appendChild(field);field.select();
  try { return document.execCommand('copy') === true; }
  catch { return false; }
  finally { field.remove();focused?.focus({preventScroll:true}); }
};
