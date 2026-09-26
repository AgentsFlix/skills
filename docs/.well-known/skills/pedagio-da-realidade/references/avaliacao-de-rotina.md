> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Avaliação de rotina e monitor

Avalie o acompanhamento conforme [memória e rotina](memoria-e-rotina.md). Conclua
“vale sugerir”, “não vale” ou “depende de informação”, com motivo concreto. Uma ação
pontual normalmente não precisa de agendamento. A instalação da skill não autoriza
CRON, monitor, mensagens ou contato com terceiros.

Há duas atividades possíveis: revisar uma ação com a evidência disponível e auditar
o uso observado da skill conforme [ciclo de vida](ciclo-de-vida.md). Auditoria não
conta como execução da ação nem como prática da pessoa. Não infira conclusão,
desinteresse ou avaliação de qualidade a partir do silêncio.

Quando houver benefício, proponha objetivo, dados necessários, frequência, horário,
fuso, destino, regra de notificação, silêncio, pausa e encerramento. Valores ainda
não confirmados são propostas. Pergunte só pelas lacunas que alteram essa proposta;
toda pergunta aberta inclui exemplo de resposta contextualizado ou hipotético.

Ative somente após autorização específica, usando um agendador realmente disponível.
Antes de criar, confira se existe rotina equivalente autorizada e prefira atualizá-la
quando isso atender ao pedido. Confirme a configuração retornada antes de afirmar
que está ativa. Sem agendador, entregue a proposta e informe que não foi ativada.
Recusa encerra a proposta; não retome cobranças sem novo pedido ou mudança relevante.

Guarde identificador da rotina, autorização, fuso, intervalo e política de notificação
no armazenamento privado da pessoa, fora da skill e de repositórios. Leia apenas os
registros necessários. Sem persistência confiável, declare cobertura parcial ou
desconhecida e não prometa auditoria contínua. Nenhum dado é enviado ao AgentFlix.

Prompt para um monitor autorizado, adaptado ao ambiente e à política combinada:

> Audite os registros privados de pedagio-da-realidade e sua validade. Use apenas o
> escopo observável e não registre a inspeção como execução ou prática da pessoa.
> Notifique somente sinal novo e acionável, respeitando pausas e a política combinada.
> Sem dado novo, permaneça em silêncio, salvo check-in explicitamente solicitado.
> Não invente ação nem retorno. Se uma resposta humana essencial faltar, preserve o
> estado aguardando e a pendência. Não contate terceiros nem divulgue registros.

O script opcional `scripts/auditar.py` calcula sinais; não instala agenda nem envia
mensagens. Após entrega confirmada de um alerta, registre seu identificador com `ack`
para evitar repetição da mesma causa. Entrega que falhou não recebe confirmação.
Uma causa nova pode gerar outro sinal conforme o ciclo de vida. Para pausar ou
encerrar, use o identificador real no agendador e confira o resultado. Preserve o
histórico; não apague eventos nem marque ações como concluídas para silenciar alertas.
