# Onboarding obrigatório e pré-requisitos

Revisão local em `feat/vitrine-onboarding`. Antes: commit `5470c00`. Sem novo PR, push da branch pública ou publicação em produção.

| Largura | Antes | Entrada | Recomendação | Catálogo | Bloqueio | Instalado |
|---|---|---|---|---|---|---|
| 1440 px | [Antes](1440-antes.webp) | [Entrada](1440-onboarding.webp) | [Indicação](1440-recomendacao.webp) | [Catálogo](1440-catalogo.webp) | [Pré-requisito](1440-bloqueio.webp) | [Confirmação](1440-instalado.webp) |
| 768 px | [Antes](768-antes.webp) | [Entrada](768-onboarding.webp) | [Indicação](768-recomendacao.webp) | [Catálogo](768-catalogo.webp) | [Pré-requisito](768-bloqueio.webp) | [Confirmação](768-instalado.webp) |
| 390 px | [Antes](390-antes.webp) | [Entrada](390-onboarding.webp) | [Indicação](390-recomendacao.webp) | [Catálogo](390-catalogo.webp) | [Pré-requisito](390-bloqueio.webp) | [Confirmação](390-instalado.webp) |

A entrada está capturada em página completa para comparar a altura das três escolhas. Demais estados usam viewport de 900 px de altura. Antes mostra a entrada anterior, que tinha catálogo abaixo dela na mesma página.

Contrato visual: [design.md](../../design.md). Três escolhas com mesma altura; 21 pontos para skills avulsas, grupos de 11, 4 e 1 para as coleções (dados de `vitrine.json`). Paleta neutra e uma recomendação em borda ciano. Nenhuma nova cor laranja na descoberta.

O catálogo fica fechado até as perguntas terminarem e a pessoa abrir a seleção. Perfil do negócio libera DNA do fundador somente após a marcação manual "Instalado". A mesma regra cobre todas as dependências, inclusive em cadeia. A instalação persiste neste navegador; copiar um comando não a confirma.

Validação: 20 testes unitários, `check_site.py` sem erros e Chrome real. `qa-installed.cjs` cobre 29 caminhos da árvore, as duas entradas diretas, igualdade de alturas, bloqueio por link/hover, liberação, recarga, desmarcação, sincronização entre abas, foco e movimento reduzido. `qa-design.cjs` preserva os 408 payloads no DOM/clipboard, busca, Minha lista e controles do hover. `qa-onboarding.cjs` preserva as seis amostras, as réguas e o texto de uso separado do instalador. Nenhum comando é executado no QA.

Revisão visual do Zé antes de qualquer merge. Player mantém sua regra funcional de terracota para continuar o vídeo.
