/* Porta de acesso do acervo. A decisão de direito acontece no Supabase e a mídia só recebe token no servidor. */
(() => {
  "use strict";

  const CATALOG_PRODUCT_ID = "assistir";
  const SERIES_PRODUCT_PREFIX = `${CATALOG_PRODUCT_ID}:`;
  const tokenCache = new Map();
  const accessScope = { catalog: false, series: new Set() };
  let client = null;
  let session = null;

  document.documentElement.classList.add("watch-access-pending");
  const pendingStyle = document.createElement("style");
  pendingStyle.textContent = "html.watch-access-pending body{visibility:hidden}";
  document.head.append(pendingStyle);

  function withBody(callback) {
    if (document.body) callback();
    else document.addEventListener("DOMContentLoaded", callback, { once: true });
  }

  function loadSupabase() {
    if (window.supabase?.createClient) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.1/dist/umd/supabase.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
  }

  function loadMemory() {
    if (window.AgentFlixMemory?.connect) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "/memory.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
  }

  async function config() {
    const response = await fetch("/api/config", {
      cache: "no-store",
      headers: { accept: "application/json" },
    });
    if (!response.ok) throw new Error("config unavailable");
    const value = await response.json();
    if (!value?.supabaseUrl || !value?.supabaseAnonKey) throw new Error("auth unavailable");
    return value;
  }

  function nextPath() {
    const path = `${location.pathname}${location.search}${location.hash}`;
    return path.startsWith("/") ? path : "/assistir/";
  }

  function requestedSeriesSlug() {
    const url = new URL(location.href);
    const fromQuery = url.pathname.replace(/\/$/, "") === "/assistir" ? url.searchParams.get("s") : null;
    const fromPath = /^\/(?:assistir|aulas)\/([a-z0-9]+(?:-[a-z0-9]+)*)\//.exec(url.pathname)?.[1];
    const slug = fromQuery || fromPath;
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug || "") ? slug : null;
  }

  function allowsSeries(slug) {
    return accessScope.catalog || accessScope.series.has(slug);
  }

  async function resolveAccessScope() {
    const { data: catalogAllowed, error: catalogError } = await client.rpc("has_access", {
      p_product_id: CATALOG_PRODUCT_ID,
    });
    if (catalogError) throw catalogError;
    accessScope.catalog = catalogAllowed === true;
    if (accessScope.catalog) return true;

    const { data: rights, error: rightsError } = await client.rpc("my_access");
    if (rightsError) throw rightsError;
    for (const right of rights || []) {
      if (typeof right?.product_id === "string" && right.product_id.startsWith(SERIES_PRODUCT_PREFIX)) {
        accessScope.series.add(right.product_id.slice(SERIES_PRODUCT_PREFIX.length));
      }
    }
    return accessScope.series.size > 0;
  }

  function hideWatchSurface() {
    document.getElementById("title-page")?.setAttribute("hidden", "");
    document.getElementById("player")?.setAttribute("hidden", "");
    const tools = document.querySelector(".watch-tools");
    if (tools) tools.hidden = true;
  }

  function showState(title, message, action) {
    withBody(() => {
      hideWatchSurface();
      const root = document.getElementById("watch-catalog");
      const state = `<section class="watch-state watch-access-state"><p class="watch-kicker">AGENTFLIX ASSISTIR</p><h1>${title}</h1><p>${message}</p>${action || ""}</section>`;
      if (root) {
        root.hidden = false;
        root.innerHTML = state;
        root.querySelector("a,button")?.focus({ preventScroll: true });
      } else {
        document.body.innerHTML = `<main style="max-width:680px;margin:0 auto;padding:72px 24px;font-family:Archivo,Arial,sans-serif;line-height:1.5;background:#141414;color:#f5f5f5;min-height:100vh">${state}</main>`;
      }
      document.documentElement.classList.remove("watch-access-pending");
      pendingStyle.remove();
    });
  }

  async function authorize() {
    try {
      await Promise.all([loadSupabase(), loadMemory()]);
      const publicConfig = await config();
      client = window.supabase.createClient(publicConfig.supabaseUrl, publicConfig.supabaseAnonKey);
      const result = await client.auth.getSession();
      session = result.data?.session || null;
      if (!session?.user) {
        window.AgentFlixMemory.clearSignedOut();
        const login = `/entrar/?next=${encodeURIComponent(nextPath())}`;
        showState(
          "Entre para assistir",
          "As séries e materiais do AgentFlix ficam disponíveis para alunos com acesso liberado.",
          `<a class="watch-button primary" href="${login}">Entrar na AgentFlix</a>`,
        );
        return false;
      }
      const memory = await window.AgentFlixMemory.connect(client, session.user);
      const reloadKey = `agentflix-memory-reload:${session.user.id}:${location.pathname}`;
      if (memory.changed && !document.getElementById("watch-catalog")) {
        let reloading = false;
        try {
          reloading = sessionStorage.getItem(reloadKey) === "1";
          if (!reloading) sessionStorage.setItem(reloadKey, "1");
        } catch {
          // Sem sessionStorage, a página continua com o estado local e sincroniza no próximo acesso.
        }
        if (!reloading) {
          location.reload();
          return await new Promise(() => {});
        }
      } else {
        try {
          sessionStorage.removeItem(reloadKey);
        } catch {
          // Nada a limpar quando o navegador bloqueia sessionStorage.
        }
      }
      if (!(await resolveAccessScope())) {
        showState(
          "Seu acesso ainda não está liberado",
          "Se você já é aluno, entre com o mesmo e-mail usado na compra. Para ajuda, fale com o suporte.",
          '<a class="watch-button secondary" href="/conta/">Ir para minha conta</a>',
        );
        return false;
      }
      if (!allowsSeries(requestedSeriesSlug()) && requestedSeriesSlug()) {
        showState(
          "Esta série ainda não está liberada",
          "Seu acesso atual não inclui esta série. Para ajuda, fale com o suporte.",
          '<a class="watch-button secondary" href="/assistir/">Ver minhas séries</a>',
        );
        return false;
      }
      document.documentElement.classList.remove("watch-access-pending");
      pendingStyle.remove();
      return true;
    } catch {
      showState(
        "Não foi possível confirmar seu acesso",
        "Atualize a página. Se continuar acontecendo, tente novamente em alguns minutos.",
        '<button class="watch-button secondary" type="button" onclick="location.reload()">Tentar novamente</button>',
      );
      return false;
    }
  }

  async function tokenFor(uid) {
    if (!/^[a-f0-9]{32}$/.test(uid) || !session?.access_token) throw new Error("invalid stream request");
    const now = Math.floor(Date.now() / 1000);
    const cached = tokenCache.get(uid);
    if (cached && cached.expires_at > now + 30) return cached.token;
    if (cached?.pending) return cached.pending;

    const pending = fetch(`/api/stream-token?uid=${encodeURIComponent(uid)}`, {
      cache: "no-store",
      headers: { authorization: `Bearer ${session.access_token}`, accept: "application/json" },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(`stream token ${response.status}`);
        const value = await response.json();
        if (typeof value?.token !== "string" || !Number.isInteger(value.expires_at)) throw new Error("invalid stream token");
        tokenCache.set(uid, value);
        return value.token;
      })
      .catch((error) => {
        tokenCache.delete(uid);
        throw error;
      });
    tokenCache.set(uid, { pending });
    return pending;
  }

  async function prefetch(uids) {
    const unique = [...new Set(uids)].filter((uid) => /^[a-f0-9]{32}$/.test(uid));
    await Promise.all(unique.map(tokenFor));
  }

  window.AgentFlixWatchAccess = Object.freeze({
    ready: authorize(),
    allowsSeries,
    prefetch,
    cachedToken: (uid) => tokenCache.get(uid)?.token || null,
    tokenFor,
  });
})();
