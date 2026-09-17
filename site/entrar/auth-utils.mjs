const FALLBACK = "/";

export function safeNextPath(value) {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//")) return FALLBACK;
  try {
    const url = new URL(value, "https://agentsflix.ai");
    return url.origin === "https://agentsflix.ai" ? `${url.pathname}${url.search}${url.hash}` : FALLBACK;
  } catch {
    return FALLBACK;
  }
}

export function magicLinkRedirect(origin, nextPath) {
  const target = new URL("/entrar/", origin);
  const safe = safeNextPath(nextPath);
  if (safe !== FALLBACK) target.searchParams.set("next", safe);
  return target.toString();
}

export function authErrorMessage(error) {
  const message = String(error?.message || "").toLowerCase();
  if (message.includes("rate") || message.includes("security purposes")) {
    return "Espere um pouco antes de pedir outro link.";
  }
  if (message.includes("email") || message.includes("invalid")) {
    return "Confira o e-mail informado e tente novamente.";
  }
  return "Não foi possível enviar o link agora. Tente novamente daqui a pouco.";
}
