# Correção dos cards e do comando de instalação por chat

## Fonte

- `site/vitrine.js` exportado de `apps/web/vitrine.js` no repositório privado AgentFlix.
- `chat_cmd` de 51 cards gerados a partir de `hermes_chat_command` em `build_hub.py` no repositório privado. Os demais campos e os três cards autorais foram preservados.

## Resultado esperado

- Um clique na área de um card vizinho coberta pela prévia ampliada abre o card sob o ponteiro.
- O comando de chat tenta uma cópia no domínio AgentFlix quando a URL da tag retorna vazia ou falha, confirma o nome da skill e impede instalação vazia.
- `hybrid-fundador` e `hybrid-marca` continuam apontando para a tag `v0.4.5`; os arquivos foram verificados com HTTP 200 e conteúdo em 25/09/2026.

## Testes

- Validação do repositório público e QA funcional do clique após exportação.
- Verificação dos dois links e dos comandos publicados após o deploy.

## Limite

Não foi possível reproduzir a falha de rede do bot Hermes da captura. A mudança fornece uma fonte alternativa e impede que uma leitura vazia seja tratada como instalação válida.
