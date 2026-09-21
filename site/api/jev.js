// POST /api/jev
// Proxy público e limitado para o laboratório educativo. A credencial fica somente no servidor.
export const OPENROUTER_DECISIONS_ENDPOINT = "https://openrouter.ai/api/alpha/decisions";
export const JEV_MODEL = "typesafe/jev-1.13";

const MAX_BODY_BYTES = 24_000;
const MAX_QUESTIONS = 8;
const MAX_INSTRUCTIONS = 2_000;
const MAX_CRITERIA = 16;
const QUESTION_ID = /^[a-zA-Z][a-zA-Z0-9_-]{0,63}$/;
const TYPES = new Set(["choice", "noul", "score"]);

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
  },
});

const plainObject = value => Boolean(value) && typeof value === "object" && !Array.isArray(value);

function validateCriteria(type, criteria) {
  if (type === "choice") {
    if (!plainObject(criteria)) return "uma pergunta choice precisa de criteria como objeto";
    const entries = Object.entries(criteria);
    if (entries.length < 2 || entries.length > MAX_CRITERIA) return `choice precisa de 2 a ${MAX_CRITERIA} opções`;
    if (entries.some(([key, value]) => !key.trim() || key.length > 80 || typeof value !== "string" || !value.trim() || value.length > 500)) {
      return "cada opção de choice precisa de nome e descrição curtos";
    }
  }
  if (type === "score") {
    if (!Array.isArray(criteria) || criteria.length < 2 || criteria.length > 10) return "score precisa de 2 a 10 níveis";
    if (criteria.some(value => typeof value !== "string" || !value.trim() || value.length > 500)) return "cada nível de score precisa ser um texto curto";
  }
  if (type === "noul" && criteria !== undefined) {
    if (!plainObject(criteria) || Object.keys(criteria).length !== 2 ||
        [criteria.true, criteria.false].some(value => typeof value !== "string" || !value.trim() || value.length > 500)) {
      return "criteria de noul precisa descrever true e false";
    }
  }
  return null;
}

const unitNumber = value => typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1;
const sameKeys = (object, expected) => plainObject(object) && Object.keys(object).length === expected.length && expected.every(key => Object.hasOwn(object, key));

// Falha fechada: respostas ausentes, fora da escala ou de outra pergunta não acionam políticas.
export function validateDecisions(answers, questions) {
  if (!sameKeys(answers, Object.keys(questions))) return { error: "O JEV devolveu perguntas ausentes ou inesperadas." };
  const clean = [];
  for (const [id, question] of Object.entries(questions)) {
    const answer = answers[id];
    if (!plainObject(answer) || answer.type !== question.type) return { error: "O JEV devolveu um tipo de resposta inesperado." };
    if (question.type === "noul") {
      if (!unitNumber(answer.noul)) return { error: "O JEV devolveu uma probabilidade inválida." };
      clean.push([id, { type: "noul", noul: answer.noul }]);
      continue;
    }
    const keys = question.type === "choice" ? Object.keys(question.criteria) : question.criteria.map((_, i) => String(i));
    if (!unitNumber(answer.confidence) || !sameKeys(answer.probabilities, keys) ||
        Object.values(answer.probabilities).some(value => !unitNumber(value)) ||
        Math.abs(Object.values(answer.probabilities).reduce((sum, value) => sum + value, 0) - 1) > .021) {
      return { error: "O JEV devolveu uma distribuição ou confidence inválida." };
    }
    if (question.type === "choice") {
      if (typeof answer.choice !== "string" || !keys.includes(answer.choice) ||
          answer.probabilities[answer.choice] + .011 < Math.max(...Object.values(answer.probabilities))) {
        return { error: "O JEV devolveu uma escolha incompatível com as opções." };
      }
      clean.push([id, { type: "choice", choice: answer.choice, probabilities: answer.probabilities, confidence: answer.confidence }]);
    } else {
      if (typeof answer.score !== "number" || !Number.isFinite(answer.score) || answer.score < 0 || answer.score > keys.length - 1) {
        return { error: "O JEV devolveu uma nota fora da escala." };
      }
      clean.push([id, { type: "score", score: answer.score, probabilities: answer.probabilities, confidence: answer.confidence }]);
    }
  }
  return { value: Object.fromEntries(clean) };
}

export function validatePlaygroundPayload(payload) {
  if (!plainObject(payload) || !("state" in payload) || !plainObject(payload.questions)) {
    return { error: "envie state e questions como JSON" };
  }
  const entries = Object.entries(payload.questions);
  if (!entries.length || entries.length > MAX_QUESTIONS) return { error: `envie de 1 a ${MAX_QUESTIONS} perguntas` };
  for (const [id, question] of entries) {
    if (!QUESTION_ID.test(id)) return { error: `identificador de pergunta inválido: ${id || "vazio"}` };
    if (!plainObject(question) || !TYPES.has(question.type)) return { error: `${id} precisa usar choice, noul ou score` };
    if (typeof question.instructions !== "string" || !question.instructions.trim() || question.instructions.length > MAX_INSTRUCTIONS) {
      return { error: `${id} precisa de instructions com até ${MAX_INSTRUCTIONS} caracteres` };
    }
    const criteriaError = validateCriteria(question.type, question.criteria);
    if (criteriaError) return { error: `${id}: ${criteriaError}` };
  }
  return {
    value: {
      model: JEV_MODEL,
      state: payload.state,
      questions: payload.questions,
    },
  };
}

export async function POST(request) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) return json({ error: "O JSON ultrapassa o limite deste laboratório." }, 413);

  let raw;
  try {
    raw = await request.text();
  } catch {
    return json({ error: "Não foi possível ler a requisição." }, 400);
  }
  if (!raw || Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) return json({ error: "O JSON ultrapassa o limite deste laboratório." }, 413);

  let payload;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ error: "A requisição não contém JSON válido." }, 400);
  }
  const validated = validatePlaygroundPayload(payload);
  if (validated.error) return json({ error: validated.error }, 400);

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey || apiKey.trim().length < 20) return json({ error: "A integração do Jev ainda não está configurada." }, 503);

  let upstream;
  try {
    upstream = await fetch(OPENROUTER_DECISIONS_ENDPOINT, {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey.trim()}`,
        "content-type": "application/json",
        "http-referer": process.env.SITE_URL || "https://agentsflix.ai",
        "x-title": "AgentFlix · Laboratório Jev",
      },
      body: JSON.stringify(validated.value),
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    return json({ error: "O Jev não respondeu a tempo. Tente novamente." }, 504);
  }

  let result;
  try {
    result = await upstream.json();
  } catch {
    return json({ error: "O Jev respondeu em um formato inesperado." }, 502);
  }
  if (!upstream.ok) return json({ error: `O Jev recusou esta requisição (${upstream.status}).` }, upstream.status === 429 ? 429 : 502);
  if (!plainObject(result) || !plainObject(result.answers)) return json({ error: "O Jev respondeu sem decisões tipadas." }, 502);
  const decisions = validateDecisions(result.answers, validated.value.questions);
  if (decisions.error) return json({ error: decisions.error }, 502);

  return json({
    model: typeof result.model === "string" ? result.model : JEV_MODEL,
    answers: decisions.value,
    ...(plainObject(result.usage) ? { usage: result.usage } : {}),
  });
}
