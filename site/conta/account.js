import { profileErrorMessage, validateProfile } from "./profile-utils.mjs";

const byId = (id) => document.getElementById(id);
const states = ["loading", "signed-out", "account", "unavailable"];
let client = null;
let currentUser = null;
let loadSequence = 0;

function show(name) {
  states.forEach((state) => { byId(`${state}-state`).hidden = state !== name; });
}

function setStatus(message = "", tone = "error") {
  const status = byId("form-status");
  status.textContent = message;
  status.dataset.tone = message ? tone : "";
}

function fillProfile(profile, user) {
  byId("email").value = profile.email || user.email || "";
  byId("name").value = profile.name || "";
  byId("phone").value = profile.phone || "";
  setStatus();
}

async function loadProfile(session) {
  const sequence = ++loadSequence;
  currentUser = session.user;
  show("loading");

  const { data, error } = await client
    .from("profiles")
    .select("name,email,phone")
    .eq("id", session.user.id)
    .single();

  if (sequence !== loadSequence) return;
  if (error || !data) {
    console.warn("AgentFlix profile unavailable", error);
    show("unavailable");
    return;
  }

  fillProfile(data, session.user);
  show("account");
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
    client.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session?.user) {
        loadSequence += 1;
        currentUser = null;
        show("signed-out");
      } else if (event === "SIGNED_IN" && session.user.id !== currentUser?.id) {
        loadProfile(session);
      }
    });

    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    if (data?.session?.user) await loadProfile(data.session);
    else show("signed-out");
  } catch (error) {
    console.warn("AgentFlix account unavailable", error);
    show("unavailable");
  }
}

byId("profile-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!client || !currentUser) {
    show("signed-out");
    return;
  }

  const nameInput = byId("name");
  const phoneInput = byId("phone");
  const result = validateProfile(nameInput.value, phoneInput.value);
  nameInput.setAttribute("aria-invalid", String(result.field === "name"));
  phoneInput.setAttribute("aria-invalid", String(result.field === "phone"));
  if (result.error) {
    setStatus(result.error);
    byId(result.field).focus();
    return;
  }

  const button = byId("save-button");
  button.disabled = true;
  button.textContent = "Salvando…";
  setStatus();
  try {
    const { data, error } = await client
      .from("profiles")
      .update({ name: result.name, phone: result.phone })
      .eq("id", currentUser.id)
      .select("name,email,phone")
      .single();
    if (error) throw error;
    fillProfile(data, currentUser);
    setStatus("Alterações salvas.", "success");
  } catch (error) {
    console.warn("AgentFlix profile update failed", error);
    setStatus(profileErrorMessage(error));
  } finally {
    button.disabled = false;
    button.textContent = "Salvar alterações";
  }
});

["name", "phone"].forEach((id) => {
  byId(id).addEventListener("input", () => {
    byId(id).removeAttribute("aria-invalid");
    setStatus();
  });
});

byId("retry-button").addEventListener("click", () => window.location.reload());
byId("sign-out-button").addEventListener("click", async () => {
  const button = byId("sign-out-button");
  button.disabled = true;
  try {
    await client.auth.signOut();
    window.location.assign("/entrar/");
  } finally {
    button.disabled = false;
  }
});

initialize();
