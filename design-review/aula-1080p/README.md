# Revisão da mídia de HERMES EM OPERAÇÃO T1:E2

Tratamento aprovado em amostra de 15s, aplicado aos mesmos cinco cortes da fonte.
1920 × 1080, H.264, 24fps, AAC estéreo. A edição mantém 64.416 quadros e 2684s de
vídeo. O ganho é redução leve de blocos e nitidez, sem reconstrução de detalhes.

O identificador de progresso permanece o original. O campo opcional stream_uid
aponta para o vídeo tratado e suas miniaturas. Nenhum capítulo, URL de exercício,
regra de conclusão ou trecho da edição foi alterado.

64 testes Python (1 skip preexistente), sintaxe do site, validação de skills,
scanner sem bloqueadas e build de docs sem diferenças passaram. A montagem local
foi decodificada integralmente sem erro e amostrada visualmente nas cinco partes.

QA Chrome com Stream pronto: retomada em 300s com o identificador antigo; marcação
anterior preservada; requisição HLS aponta para a nova mídia; cinco pausas em
640,96 / 1153,96 / 1891,96 / 2555,96 / 2683,96; exercício abre em nova aba e mantém
pausa; continuar é explícito; conclusão usa o identificador original. Outro
episódio sem revisão reproduz normalmente. Zero erros JavaScript. Tecla Espaço no
botão copia o link sem retomar o vídeo; Escape no diálogo não fecha o player.
