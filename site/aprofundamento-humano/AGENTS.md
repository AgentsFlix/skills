# Assessments: resultado portátil como contrato

Todo assessment, atual ou futuro, deve oferecer o prompt para agente pessoal no
resultado. Leia `AGENT-PROMPT.md` antes de alterar motores ou exportação.

- Reutilize `agent-prompt.js` e o modal `agent-prompt-ui.js`; não duplique templates
  por instrumento ou plataforma. Um novo motor fornece um adaptador de resultado.
- Preserve escores, unidades, limitações e fontes. Não confunda distribuição DISC,
  porcentagem de máximo de uma dimensão, escala independente e percentil.
- Capture conclusão e fuso no momento real. Cópia, download e reabertura preservam
  ID e validade. Resultado legado sem data permanece explicitamente desconhecido.
- Exporte OKF com proveniência, versão e revisão em 30 dias. Não exporte respostas
  individuais, não renove validade por uso e não prometa memória/agendamento externo.
- O registro de resultado pode ser salvo na conta por `auth.uid()`, conforme `AGENT-PROMPT.md`.
  Respostas individuais e fingerprint permanecem fora do banco.
- A geração do prompt é local; o compartilhamento externo depende da pessoa. Nunca envie esse
  conteúdo a analytics, APIs de modelo ou terceiros como efeito da conclusão.
- Preserve modal acessível, foco, Escape, cópia manual alternativa e download .md.
- Rode os testes de assessments e o QA `agent-prompt.cjs` em 1440/768/390 px;
  inclua o novo instrumento na matriz de conclusão, cópia e restauração.

O contrato Web e os tokens/ícones canônicos continuam obrigatórios.
