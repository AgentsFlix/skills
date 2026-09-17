import { authErrorMessage, magicLinkRedirect, safeNextPath } from "./auth-utils.mjs";

const byId = (id) => document.getElementById(id);
const states = ["loading", "signed-out", "sent", "signed-in", "unavailable"];
const nextPath = safeNextPath(new URLSearchParams(window.location.search).get("next"));
let client = null;

function show(name) {
  states.forEach((state) => { byId(`${state}-state`).hidden = state !== name; });
}

function signedIn(session) {
  byId("account-email").textContent = session.user.email || "Conta AgentFlix";
  const continueLink = byId("continue-link");
  const hasDestination = nextPath !== "/";
  continueLink.href = hasDestination ? nextPath : "/conta/";
  continueLink.textContent = hasDestination ? "Continuar na AgentFlix" : "Abrir minha conta";
  show("signed-in");
}

function signedOut() {
  show("signed-out");
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

async function initialize() {
  show("loading");
  try {
    const config = await loadConfig();
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
