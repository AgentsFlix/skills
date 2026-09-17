export function normalizeOptional(value) {
  const normalized = typeof value === "string" ? value.trim() : "";
  return normalized || null;
}

export function validateProfile(nameValue, phoneValue) {
  const name = normalizeOptional(nameValue);
  const phone = normalizeOptional(phoneValue);

  if (name && name.length > 120) return { field: "name", error: "O nome pode ter no máximo 120 caracteres." };
  if (phone && phone.length < 3) return { field: "phone", error: "Digite um telefone válido ou deixe o campo vazio." };
  if (phone && phone.length > 40) return { field: "phone", error: "O telefone pode ter no máximo 40 caracteres." };

  return { name, phone, field: null, error: null };
}

export function profileErrorMessage(error) {
  const message = String(error?.message || "").toLowerCase();
  if (message.includes("jwt") || message.includes("session") || message.includes("auth")) {
    return "Sua sessão expirou. Entre novamente para continuar.";
  }
  if (message.includes("name") || message.includes("phone") || message.includes("check constraint")) {
    return "Confira o nome e o telefone antes de salvar.";
  }
  return "Não foi possível salvar agora. Tente novamente daqui a pouco.";
}
