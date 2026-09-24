import { authErrorMessage, magicLinkRedirect, safeNextPath } from "./auth-utils.mjs";

const byId = (id) => document.getElementById(id);
const states = ["loading", "signed-out", "sent", "signed-in", "unavailable"];
const nextPath = safeNextPath(new URLSearchParams(window.location.search).get("next"));
const callbackFailed = new URLSearchParams(window.location.search).has("error");
let client = null;
let redirecting = false;

function show(name) {
  states.forEach((state) => { byId(`${state}-state`).hidden = state !== name; });
}

function signedIn(session) {
  if (redirecting) return;
  byId("account-email").textContent = session.user.email || "Conta AgentFlix";
  const continueLink = byId("continue-link");
  continueLink.href = nextPath;
  continueLink.textContent = "Continuar na AgentFlix";
  show("signed-in");
  redirecting = true;
  window.location.replace(nextPath);
}

function signedOut() {
  show("signed-out");
  if (callbackFailed) {
    byId("social-status").textContent = "Não foi possível entrar com essa conta. Tente novamente ou use o link por e-mail.";
  }
  window.setTimeout(() => byId("email").focus(), 0);
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

async function loadProviders() {
  try {
    const response = await fetch("/api/auth-providers", { cache: "no-store", headers: { accept: "application/json" } });
    if (!response.ok) return [];
    const { providers } = await response.json();
    return Array.isArray(providers) ? providers : [];
  } catch {
    return [];
  }
}

async function initialize() {
  show("loading");
  try {
    const config = await loadConfig();
    const available = await loadProviders();
    document.querySelectorAll("[data-provider]").forEach((button) => {
      button.hidden = !available.includes(button.dataset.provider);
    });
    const hasSocial = available.some((provider) => provider === "google" || provider === "github");
    byId("social-actions").hidden = !hasSocial;
    byId("login-divider").hidden = !hasSocial;
    byId("login-title").textContent = hasSocial ? "Entre na AgentFlix" : "Entre sem senha";
    byId("login-lead").textContent = hasSocial
      ? "Escolha como quer acessar sua conta."
      : "A gente envia um link de acesso para o seu e-mail.";
    client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
    client.auth.onAuthStateChange((_event, session) => {
      if (session?.user) signedIn(session);
      else signedOut();
    });
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    if (data?.session?.user) signedIn(data.session);
    else signedOut();
  } catch (error) {
    console.warn("AgentFlix auth unavailable", error);
    show("unavailable");
  }
}

byId("login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = byId("email");
  const status = byId("form-status");
  const submit = byId("submit-button");
  const email = input.value.trim();
  input.setAttribute("aria-invalid", String(!input.validity.valid));
  if (!input.validity.valid) {
    status.textContent = "Digite um e-mail válido.";
    input.focus();
    return;
  }

  status.textContent = "";
  submit.disabled = true;
  submit.textContent = "Enviando…";
  let error = null;
  try {
    ({ error } = await client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: magicLinkRedirect(window.location.origin, nextPath) },
    }));
  } catch (requestError) {
    error = requestError;
  } finally {
    submit.disabled = false;
    submit.textContent = "Enviar link de acesso";
  }

  if (error) {
    status.textContent = authErrorMessage(error);
    return;
  }

  byId("sent-email").textContent = email;
  show("sent");
});

byId("email").addEventListener("input", () => {
  byId("email").removeAttribute("aria-invalid");
  byId("form-status").textContent = "";
});

document.querySelectorAll("[data-provider]").forEach((button) => {
  button.addEventListener("click", async () => {
    const status = byId("social-status");
    const buttons = [...document.querySelectorAll("[data-provider]:not([hidden])")];
    status.textContent = "";
    buttons.forEach((item) => { item.disabled = true; });
    try {
      const { error } = await client.auth.signInWithOAuth({
        provider: button.dataset.provider,
        options: { redirectTo: magicLinkRedirect(window.location.origin, nextPath) },
      });
      if (error) throw error;
    } catch {
      status.textContent = "Não foi possível abrir esse provedor. Tente novamente ou use o link por e-mail.";
    } finally {
      buttons.forEach((item) => { item.disabled = false; });
    }
  });
});

byId("send-again-button").addEventListener("click", signedOut);
byId("retry-button").addEventListener("click", initialize);
byId("sign-out-button").addEventListener("click", async () => {
  const button = byId("sign-out-button");
  button.disabled = true;
  try {
    await client.auth.signOut();
    signedOut();
  } finally {
    button.disabled = false;
  }
});

initialize();
