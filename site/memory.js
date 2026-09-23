/* Memória privada da conta. Mantém o armazenamento local como cache e sincroniza só chaves permitidas. */
((root, factory) => {
  if (typeof module === "object" && module.exports) module.exports = factory;
  else if (!root.AgentFlixMemory) root.AgentFlixMemory = factory(root);
})(typeof window === "undefined" ? globalThis : window, (root) => {
  "use strict";

  const META_KEY = "agentflix-memory-meta-v1";
  const MAX_BYTES = 2400000;
  const exact = new Map([
    ["agentflix-installed-v1", "skill"],
    ["agentflix-list", "saved"],
    ["agentflix-watch-list-v1", "saved"],
    ["agentflix-reading-v1", "preference"],
    ["agentflix-done", "video"],
    ["agentflix-brand-journey-v1", "exercise"],
    ["agentflix-ecf-base-v2", "exercise"],
    ["agentflix-casa-git-premium-v1", "exercise"],
    ["agentflix-target", "preference"],
    ["agentflix-visit-v1", "preference"],
  ]);
  const prefixes = [
    ["agentflix-prog-", "video"],
    ["agentflix-finished-", "video"],
    ["agentflix-caminho-", "video"],
    ["agentflix-reading-progress-v1:", "reading"],
    ["agentflix-social-media-document-v2:", "exercise"],
  ];

  const storage = root.localStorage;
  const proto = root.Storage?.prototype;
  const native = proto
    ? {
        get: proto.getItem,
        set: proto.setItem,
        remove: proto.removeItem,
        clear: proto.clear,
      }
    : storage
      ? {
          get: storage.getItem,
          set: storage.setItem,
          remove: storage.removeItem,
          clear: storage.clear,
        }
      : null;
  const nativeGet = (key) => native?.get.call(storage, key) ?? null;
  const nativeSet = (key, value) => native?.set.call(storage, key, value);
  const nativeRemove = (key) => native?.remove.call(storage, key);
  const byteLength = (value) =>
    typeof TextEncoder === "function"
      ? new TextEncoder().encode(value).byteLength
      : unescape(encodeURIComponent(value)).length;
  const categoryOf = (key) =>
    exact.get(key) || prefixes.find(([prefix]) => key.startsWith(prefix))?.[1] || null;
  const hash = (value) => {
    let result = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      result ^= value.charCodeAt(index);
      result = Math.imul(result, 16777619);
    }
    return `${value.length}:${(result >>> 0).toString(16)}`;
  };
  const parse = (value) => {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };
  const serialize = (value) => JSON.stringify(value);

  let metadata = {};
  let ownerId = null;
  try {
    const saved = JSON.parse(nativeGet(META_KEY) || "{}");
    if (saved?.version === 1 && saved.entries && typeof saved.entries === "object") {
      metadata = saved.entries;
      ownerId = typeof saved.ownerId === "string" ? saved.ownerId : null;
    } else if (saved && typeof saved === "object" && !Array.isArray(saved)) {
      metadata = saved;
    }
  } catch {
    metadata = {};
  }

  let client = null;
  let userId = null;
  let connectPromise = null;
  let startPromise = null;
  let applyingCloud = false;
  let flushTimer = null;
  const pending = new Set();
  const status = { signedIn: false, available: false, oversized: [] };

  function writeMetadata() {
    try {
      nativeSet(META_KEY, JSON.stringify({ version: 1, ownerId, entries: metadata }));
    } catch {
      // A experiência continua local quando o navegador não aceita metadados.
    }
  }

  function clearOwnedCache() {
    if (!ownerId) return false;
    applyingCloud = true;
    try {
      trackedLocalKeys().forEach((key) => nativeRemove(key));
    } finally {
      applyingCloud = false;
    }
    metadata = {};
    ownerId = null;
    pending.clear();
    writeMetadata();
    return true;
  }

  function claimOwner(nextOwnerId) {
    if (ownerId && ownerId !== nextOwnerId) clearOwnedCache();
    ownerId = nextOwnerId;
    writeMetadata();
  }

  function trackedLocalKeys() {
    const keys = [];
    if (!storage) return keys;
    try {
      for (let index = 0; index < storage.length; index += 1) {
        const key = storage.key(index);
        if (key && categoryOf(key)) keys.push(key);
      }
    } catch {
      return keys;
    }
    return keys;
  }

  function markDirty(key, deleted = false) {
    if (applyingCloud || !categoryOf(key)) return;
    const raw = deleted ? null : nativeGet(key);
    if (!deleted && raw !== null && byteLength(raw) > MAX_BYTES) {
      if (!status.oversized.includes(key)) status.oversized.push(key);
      root.dispatchEvent?.(
        new CustomEvent("agentflix:memory-warning", {
          detail: { reason: "too-large", key },
        }),
      );
      return;
    }
    const now = Date.now();
    metadata[key] = {
      ...(metadata[key] || {}),
      dirtyAt: now,
      deletedAt: deleted ? now : null,
      hash: raw === null ? null : hash(raw),
    };
    writeMetadata();
    pending.add(key);
    scheduleFlush();
  }

  function installCapture() {
    if (!storage || !native) return;
    if (proto) {
      if (proto.__agentflixMemoryCapture) return;
      Object.defineProperty(proto, "__agentflixMemoryCapture", {
        value: true,
        configurable: false,
      });
      proto.setItem = function setItem(key, value) {
        const result = native.set.call(this, key, value);
        if (this === storage) markDirty(String(key));
        return result;
      };
      proto.removeItem = function removeItem(key) {
        const tracked = this === storage && Boolean(categoryOf(String(key)));
        const result = native.remove.call(this, key);
        if (tracked) markDirty(String(key), true);
        return result;
      };
      proto.clear = function clear() {
        const keys = this === storage ? trackedLocalKeys() : [];
        const result = native.clear.call(this);
        keys.forEach((key) => markDirty(key, true));
        return result;
      };
    }
  }

  function scheduleFlush() {
    if (!client || !userId || flushTimer) return;
    flushTimer = root.setTimeout(() => {
      flushTimer = null;
      flush();
    }, 800);
  }

  async function saveKey(key) {
    const info = metadata[key];
    const category = categoryOf(key);
    if (!client || !userId || !info?.dirtyAt || !category) return false;
    const raw = info.deletedAt ? null : nativeGet(key);
    if (!info.deletedAt && raw === null) info.deletedAt = Date.now();
    if (raw !== null && byteLength(raw) > MAX_BYTES) return false;

    const row = {
      user_id: userId,
      memory_key: key,
      category,
      value: raw === null ? null : parse(raw),
      schema_version: 1,
      client_updated_at: new Date(info.dirtyAt).toISOString(),
      deleted_at: info.deletedAt ? new Date(info.deletedAt).toISOString() : null,
    };
    const request = client
      .from("user_memory")
      .upsert(row, { onConflict: "user_id,memory_key" })
      .select("memory_key,updated_at,deleted_at")
      .maybeSingle();
    const { data, error } = await request;
    if (error || !data) return false;
    metadata[key] = {
      hash: raw === null ? null : hash(raw),
      syncedAt: data.updated_at,
      deletedAt: data.deleted_at ? Date.parse(data.deleted_at) || info.deletedAt : null,
    };
    writeMetadata();
    return true;
  }

  async function flush() {
    if (!client || !userId) return { ok: false, saved: 0 };
    const keys = [...pending, ...Object.keys(metadata).filter((key) => metadata[key]?.dirtyAt)];
    pending.clear();
    let saved = 0;
    for (const key of [...new Set(keys)]) {
      if (await saveKey(key)) saved += 1;
      else if (metadata[key]?.dirtyAt) pending.add(key);
    }
    return { ok: pending.size === 0, saved };
  }

  function applyCloudRow(row) {
    const key = row.memory_key;
    if (!categoryOf(key) || metadata[key]?.dirtyAt) return false;
    const next = row.deleted_at ? null : serialize(row.value);
    const current = nativeGet(key);
    applyingCloud = true;
    try {
      if (next === null) nativeRemove(key);
      else nativeSet(key, next);
    } finally {
      applyingCloud = false;
    }
    metadata[key] = {
      hash: next === null ? null : hash(next),
      syncedAt: row.updated_at,
      deletedAt: row.deleted_at ? Date.parse(row.deleted_at) || Date.now() : null,
    };
    return current !== next;
  }

  async function connect(nextClient, user) {
    if (!nextClient || !user?.id) return { ok: false, signedIn: false, changed: false };
    if (connectPromise && userId === user.id) return connectPromise;
    claimOwner(user.id);
    client = nextClient;
    userId = user.id;
    status.signedIn = true;
    connectPromise = (async () => {
      const { data, error } = await client
        .from("user_memory")
        .select("memory_key,category,value,schema_version,updated_at,deleted_at");
      if (error) {
        status.available = false;
        return { ok: false, signedIn: true, changed: false };
      }

      status.available = true;
      const rows = Array.isArray(data) ? data : [];
      const cloudKeys = new Set(rows.map((row) => row.memory_key));
      let changed = false;
      rows.forEach((row) => {
        changed = applyCloudRow(row) || changed;
      });

      for (const key of trackedLocalKeys()) {
        if (!cloudKeys.has(key) && !metadata[key]?.dirtyAt) markDirty(key);
      }
      Object.keys(metadata).forEach((key) => {
        if (metadata[key]?.dirtyAt) pending.add(key);
      });
      writeMetadata();
      const saved = await flush();
      const detail = { ok: saved.ok, signedIn: true, changed, saved: saved.saved };
      root.dispatchEvent?.(new CustomEvent("agentflix:memory-ready", { detail }));
      return detail;
    })();
    return connectPromise;
  }

  async function loadSupabase() {
    if (root.supabase?.createClient) return;
    await new Promise((resolve, reject) => {
      const script = root.document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.1/dist/umd/supabase.min.js";
      script.onload = resolve;
      script.onerror = reject;
      root.document.head.append(script);
    });
  }

  async function start() {
    if (startPromise) return startPromise;
    startPromise = (async () => {
      try {
        await loadSupabase();
        const response = await root.fetch("/api/config", {
          cache: "no-store",
          headers: { accept: "application/json" },
        });
        if (!response.ok) return { ok: false, signedIn: false, changed: false };
        const config = await response.json();
        if (!config?.supabaseUrl || !config?.supabaseAnonKey)
          return { ok: false, signedIn: false, changed: false };
        const ownClient = root.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
        const { data } = await ownClient.auth.getSession();
        if (!data?.session?.user) {
          clearOwnedCache();
          root.dispatchEvent?.(
            new CustomEvent("agentflix:memory-ready", {
              detail: { ok: true, signedIn: false, changed: false },
            }),
          );
          return { ok: true, signedIn: false, changed: false };
        }
        return connect(ownClient, data.session.user);
      } catch {
        return { ok: false, signedIn: false, changed: false };
      }
    })();
    return startPromise;
  }

  async function signOut() {
    if (!client || !userId) return false;
    const { error } = await client.auth.signOut();
    if (error) return false;
    clearOwnedCache();
    client = null;
    userId = null;
    connectPromise = null;
    startPromise = null;
    status.signedIn = false;
    status.available = false;
    return true;
  }

  installCapture();
  return Object.freeze({
    categoryOf,
    clearSignedOut: clearOwnedCache,
    connect,
    flush,
    signOut,
    start,
    status,
  });
});
