export function safeProductId(value) {
  return typeof value === "string" && /^[a-z0-9][a-z0-9-]{1,79}$/.test(value) ? value : null;
}

export function protectedContentMessage(status) {
  if (status === 401) return "Sua sessão expirou. Entre novamente para continuar.";
  if (status === 403) return "Este conteúdo não está liberado para sua conta.";
  if (status === 404) return "Este conteúdo ainda não está disponível.";
  if (status === 503) return "O vídeo ainda não está configurado.";
  return "Não foi possível abrir o conteúdo agora.";
}

export function safeEmbedUrl(value) {
  try {
    const url = new URL(value);
    const trustedHost = url.hostname === "iframe.mediadelivery.net"
      || url.hostname.endsWith(".cloudflarestream.com");
    return url.protocol === "https:" && trustedHost ? url.toString() : null;
  } catch {
    return null;
  }
}
