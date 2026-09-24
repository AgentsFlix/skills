// Somente indicadores públicos dos provedores OAuth; nunca expor os segredos de cada app.
export async function enabledAuthProviders(supabaseUrl, anonKey, request = fetch) {
  if (!supabaseUrl || !anonKey) return [];
  try {
    const response = await request(new URL("/auth/v1/settings", supabaseUrl), {
      headers: { apikey: anonKey },
      signal: AbortSignal.timeout(2000),
    });
    if (!response.ok) return [];
    const settings = await response.json();
    return ["google", "github"].filter((provider) => settings?.external?.[provider] === true);
  } catch {
    return [];
  }
}

export async function GET() {
  const providers = await enabledAuthProviders(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
  return new Response(JSON.stringify({ providers }), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=300" },
  });
}
