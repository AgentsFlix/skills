# Leitura pública

Pedido: abrir Para o humano diretamente, como um acervo editorial público, sem onboarding.

PR: https://github.com/AgentsFlix/skills/pull/79.

Implementação na vitrine e nas páginas de compartilhamento geradas. O registro editorial determina quais fichas têm leitura pública, inclusive futuras peças. O onboarding e as dependências continuam na aba Usar a skill, com retorno à peça escolhida após concluir a orientação, inclusive após recarga do guia.

Não altera textos, capas, comandos de instalação nem dados de skills. Ler não grava conclusão do guia ou instalação. A passagem para orientação depende do clique Escolher meu caminho.

Validação: 88 testes públicos aprovados (uma omissão preexistente), sintaxe sem erros, 52 skills validadas, scanner sem bloqueios e docs/catalog regenerados sem diff. [QA de navegador](../design-review/leitura-livre/README.md) incluiu 1440/768/390 px, aba nova, leitura direta, capítulos, ajustes, busca, compartilhamento, teclado, saída para o guia e retorno ao instalador. Revisão de implementação e QA feitas nesta sessão; não representam revisão independente.

A confirmação de merge, SHA e deploy será registrada no PR após a integração. A aparência do preview dentro do WhatsApp continua fora desta validação; aqui foi conferido o destino público do link.
