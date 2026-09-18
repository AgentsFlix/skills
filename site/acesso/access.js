import { protectedContentMessage, safeEmbedUrl, safeProductId } from "./access-utils.mjs";

const byId = (id) => document.getElementById(id);
const states = ["loading", "signed-out", "denied", "content", "unavailable"];
const productId = safeProductId(new URLSearchParams(window.location.search).get("produto"));
let client = null;
let currentSession = null;

function show(name) {
  states.forEach((state) => { byId(`${state}-state`).hidden = state !== name; });
}

function loginDestination() {
  const next = productId ? `/acesso/?produto=${encodeURIComponent(productId)}` : "/conta/";
  return `/entrar/?next=${encodeURIComponent(next)}`;
}

function signedOut() {
  currentSession = null;
  byId("login-link").href = loginDestination();
  show("signed-out");
}

async function loadConfig() {
  const response = await fetch("/api/config", { cache: "no-store", headers: { accept: "application/json" } });
  if (!response.ok) throw new Error("config unavailable");
  const config = await response.json();
  if (!config?.supabaseUrl || !config?.supabaseAnonKey || !window.supabase?.createClient) {
    throw new Error("auth unavailable");
  }
  return config;
}

function renderVideos(videos) {
  const list = byId("video-list");
  list.replaceChildren();
  if (!videos.length) {
    byId("content-status").textContent = "Seu acesso está ativo. O conteúdo aparecerá aqui quando estiver pronto.";
    return;
  }

  videos.forEach((video) => {
    const row = document.createElement("article");
    row.className = "video-row";
    const title = document.createElement("h2");
    title.textContent = video.title;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "watch-button";
    button.textContent = "Assistir";
    button.addEventListener("click", () => playVideo(video.id, button));
    row.append(title, button);
    list.append(row);
  });
}

async function playVideo(videoId, button) {
  if (!currentSession?.access_token) {
    signedOut();
    return;
  }
  const status = byId("content-status");
  status.textContent = "Abrindo vídeo…";
  button.disabled = true;
  try {
    const response = await fetch(`/api/video?id=${encodeURIComponent(videoId)}`, {
      headers: { authorization: `Bearer ${currentSession.access_token}`, accept: "application/json" },
      cache: "no-store",
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw Object.assign(new Error("video unavailable"), { status: response.status });
    const embed = safeEmbedUrl(data.embed);
    if (!embed) throw new Error("invalid embed");
    byId("protected-player").src = embed;
    byId("protected-player").title = data.title || "Player do conteúdo";
    byId("player-shell").hidden = false;
    status.textContent = "";
    byId("player-shell").scrollIntoView({ behavior: "smooth", block: "nearest" });
  } catch (error) {
    console.warn("AgentFlix protected video unavailable", error);
    status.textContent = protectedContentMessage(error.status);
  } finally {
    button.disabled = false;
  }
}

async function loadContent(session) {
  if (!productId) {
    show("unavailable");
    return;
  }
  currentSession = session;
  show("loading");
  try {
    const { data: allowed, error: accessError } = await client.rpc("has_access", { p_product_id: productId });
    if (accessError) throw accessError;
    if (allowed !== true) {
      show("denied");
      return;
    }

    const [{ data: product, error: productError }, { data: videos, error: videosError }] = await Promise.all([
      client.from("products").select("id,title,description,active").eq("id", productId).eq("active", true).single(),
      client.from("videos").select("id,title,position,status").eq("product_id", productId).eq("status", "ready").order("position"),
    ]);
    if (productError || !product || videosError) throw productError || videosError || new Error("content unavailable");
    byId("content-title").textContent = product.title;
    byId("content-description").textContent = product.description || "Conteúdo exclusivo liberado para sua conta.";
    byId("content-status").textContent = "";
    renderVideos(videos || []);
    show("content");
  } catch (error) {
    console.warn("AgentFlix protected content unavailable", error);
    show("unavailable");
  }
}

async function initialize() {
  show("loading");
  try {
    const config = await loadConfig();
    client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
    client.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session?.user) signedOut();
      else if (event === "SIGNED_IN" && session.user.id !== currentSession?.user?.id) loadContent(session);
    });
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    if (data?.session?.user) await loadContent(data.session);
    else signedOut();
  } catch (error) {
    console.warn("AgentFlix access route unavailable", error);
    show("unavailable");
  }
}

byId("retry-button").addEventListener("click", () => window.location.reload());
initialize();
