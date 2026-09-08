# Onboarding com ilustrações exclusivas

O Zé escolheu ilustrações próprias inspiradas nas referências editoriais anexadas. As três escolhas iniciais agora representam uma tarefa concluída, a base do negócio e a descoberta de um caminho. Artes criadas com `image_gen`, em carvão, branco quente e ciano, e servidas localmente como WebP. Os três arquivos somam menos de 70 KB.

Os textos aprovados permanecem integrais. Os personagens e objetos aparecem inteiros em desktop, tablet e celular. Os cards têm alturas iguais, seleção com check e borda ciano e foco de teclado branco. Continuar confirma a escolha. O menu aparece somente após Abrir minha seleção.

Esta revisão substitui as capas das três escolhas iniciais. Perguntas e recomendação mantêm as capas das skills. A implementação anterior da tela dedicada está documentada em [cinematic-onboarding](../cinematic-onboarding/README.md).

## Capturas

Antes: commit `a9ce9a3`, que usava capas na entrada. Depois: implementação ilustrada deste PR.

| Largura | Antes | Depois | Seleção por teclado |
|---|---|---|---|
| 1440 | [antes](1440-before-entry.png) | [depois](1440-after-entry.png) | [seleção](1440-after-selected.png) |
| 768 | [antes](768-before-entry.png) | [depois](768-after-entry.png) | [seleção](768-after-selected.png) |
| 390 | [antes](390-before-entry.png) | [depois](390-after-entry.png) | [seleção](390-after-selected.png) |

As capturas de pergunta, resultado e lista longa registram o fluxo verificado nas mesmas larguras.

## Validação

- Chrome real em 1440, 768 e 390 px: alturas equivalentes, teclado, confirmação explícita, voltar, recarga, menu bloqueado/liberado, leitura e reinício.
- 84 percursos das três portas concluídos; respostas confirmadas e conclusão corretas.
- Toque em 390 × 720, carregamento de imagens bloqueado e botão Continuar visível durante a rolagem.
- Movimento reduzido respeitado; sem overflow horizontal ou erros de JavaScript nas verificações.
- 21 testes unitários, `check_site` e `git diff --check` aprovados.

Relatório: [qa.json](qa.json). Roteiro privado: `ferramentas/qa-player/qa-cinematic-onboarding.cjs`, com `QA_OUT` apontando para esta pasta. [Arquivos e origem das artes](../../site/onboarding/README.md). Os prompts e PNGs originais estão no repo privado em `prototipos/vitrine/ilustracoes-onboarding/`.

Revisão visual do Zé antes do merge, conforme AGENTS.md.
