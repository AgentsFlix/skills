# Conta no cabeçalho

Pedido do José em 23/09/2026: substituir “Entrar” por “Minha conta” após login e oferecer edição de informações e saída. Visitantes continuam vendo “Entrar”. O menu é compacto e continua acessível durante o onboarding; leitura pública conserva o cabeçalho simplificado.

Os arquivos da vitrine e memória foram exportados literalmente da fonte privada; as quatro páginas de leitura compartilhada foram geradas pela mesma página inicial. Nenhum dado pessoal ou credencial foi incluído.

- Fonte privada: [AgentsFlix/agentsflix PR #191](https://github.com/AgentsFlix/agentsflix/pull/191).
- PR público: [AgentsFlix/skills PR #136](https://github.com/AgentsFlix/skills/pull/136).
- Testes locais: 161 testes aprovados, 1 ignorado; `scripts/check_site.py` sem erros; `agent_work.py check` aprovado.
- QA visual da prévia local com sessão simulada em 1440, 768 e 390 px: menu visível, edição e saída acessíveis, sem rolagem horizontal no celular; Esc fecha o menu. A saída real permanece coberta por teste automatizado.
