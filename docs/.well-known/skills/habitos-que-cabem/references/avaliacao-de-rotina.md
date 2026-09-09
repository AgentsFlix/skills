# Avaliação de rotina e monitor

Avalie em toda execução: vale sugerir, não vale ou depende de informação, com motivo. A criação inicial é pontual.
Uma revisão de registros pode valer como rotina. Check-in depende da preferência da pessoa. Considere dados acessíveis,
benefício recorrente, custo e carga de notificações. Não repetir oferta recusada sem mudança relevante ou novo pedido.

Quando valer, proponha objetivo, frequência, horário, fuso, inputs, local de saída, canal de notificação, regra de silêncio,
condição de pausa e como encerrar. Valores ainda não conhecidos são propostas. Toda pergunta aberta tem exemplo
contextualizado. A autorização para instalar a skill não ativa uma rotina.

Existem dois trabalhos diferentes:

- Revisão do hábito: lê registros e prepara uma conclusão ou convite de check-in. Sem resposta, aguarda.
- Monitor de ciclo de vida: audita uso observado, validade, revisão pessoal e atualização disponível. Não conta como uso.

Reutilize um monitor compartilhado já autorizado no agente hospedeiro, se compatível. Caso contrário, apresente a proposta.
Configure pelo agendador suportado, cheque duplicatas e confirme a configuração retornada antes de afirmar que está ativo.
No estado privado, guarde identificador do agendamento, autorização, fuso, intervalo e política de notificação.
O script de auditoria calcula sinais; ele não instala CRON, não envia mensagens e não se autoexecuta.

Prompt operacional para o monitor autorizado, adaptado ao ambiente:

“Audite os registros privados de habitos-que-cabem e sua validade com a política combinada. Não registre esta inspeção
como uso. Notifique apenas sinal novo e acionável; respeite pausas. Sem dados novos, permaneça em silêncio, salvo check-in
explicitamente combinado. Não infira prática do hábito pela ausência de relato. Mantenha pendente qualquer decisão humana.”

Depois de entregar um alerta, registre seu identificador com `ack`. Se a entrega falhar, não confirme recebimento.
Reativação de um sinal após recuperação deve poder produzir novo alerta. Pausar o monitor não apaga eventos.
Sem agendador, entregue proposta utilizável e informe “não ativado”. Sem persistência observável, não prometa auditoria contínua.
