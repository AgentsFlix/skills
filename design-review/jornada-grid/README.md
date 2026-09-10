# Auditoria do grid da jornada

Problemas reproduzidos: intervalo de 0 px entre Copiar prompt e Ver prompt completo; regras de layout concorrentes em duas folhas; divisórias consecutivas; estado separado da ação; saídas do episódio com o mesmo destaque da próxima etapa; ação de continuidade muito próxima do campo no painel aberto.

Correções: um CSS canônico para o layout; 12 px entre ações; 24 px entre seções; rótulos de entrada/entrega alinhados; pergunta, estado e ações num bloco; retorno/ajuda num painel de separadores únicos; saídas como links secundários; campos e botões separados também nos detalhes abertos. Ilustrações preservadas em folha própria.

QA Chrome em 1440, 768, 390 e 2724 px. Nove etapas, fechadas e com todos os subpainéis abertos: 72 estados sem sobreposição de controles visíveis nem overflow horizontal. Intervalos e alinhamentos medidos em `geometry.json`. Conteúdo de details recolhidos é excluído da medição porque pode manter caixas de layout sem estar visível.

Regressão funcional nas três larguras principais: nove etapas, cópia/fallback, retomada, critérios, duas marcas, armazenamento indisponível e banco de mockups. 61 testes do repositório aprovados, um skip de ambiente; validação do site/skills e scanner sem bloqueios. Capturas antes/depois acompanham este registro.
