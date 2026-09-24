# Transcritor AgentFlix 1.1.0

Distribuição do app local para macOS e Windows, com bootstrap, autenticação guiada no Codex e exportação
Markdown. Este pacote compila no computador do usuário; não contém executáveis assinados nem modelo de voz.

Fonte inspecionada e gerada por build_hub.py --package transcritor-local. Licença MIT para código e SIL OFL
para fontes Archivo. Profile e registros privados não são distribuídos. A apresentação da vitrine é etapa
separada, após revisão da capa e ficha; esta etapa disponibiliza o pacote.

Validação local: 162 testes públicos (1 skip), validate_skills, check_site e ZIP com hashes de integridade.
Scanner em ajuste de compatibilidade antes de promoção: bootstrap passa a resolver ferramentas por caminho
explícito e login herda o ambiente sem enumerar variáveis. Regeneração e scanner são obrigatórios.

Uso observado: funcionamento confirmado no Mac; bootstrap, exe e tela de código do login verificados em
Windows 11 ARM64 por emulação x64. Transcrição completa no Windows ainda não validada.
Tag/release serão criadas somente após merge validado. Nenhuma credencial ou mídia do autor é publicada.
