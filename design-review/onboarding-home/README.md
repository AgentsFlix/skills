# Onboarding termina no Início

O Zé aprovou o modo leitura e sua publicação, com a ressalva de que o onboarding deve terminar na página inicial do AgentFlix. A conclusão agora abre `#inicio`, preserva a recomendação e a seleção escolhidas, posiciona a página no topo e transfere o foco para a recomendação. Não abre automaticamente o acervo ou uma ficha recebida por link.

Depois desse passo, Ler abre normalmente o acervo com somente Hormozi. Links de skills usados após a conclusão continuam abrindo a ficha, com verificação de pré-requisitos.

| Largura | Antes: acervo automático | Depois: Início |
| --- | --- | --- |
| 1440 px | [Antes](antes/1440.png) | [Depois](depois/1440.png) |
| 768 px | [Antes](antes/768.png) | [Depois](depois/768.png) |
| 390 px | [Antes](antes/390.png) | [Depois](depois/390.png) |

QA em Chrome real: entrada normal, link do acervo, link do Hormozi, link de skill bloqueada, Ler durante o guia, refazer escolhas, recarga, foco, rolagem e abertura explícita do leitor. Resultados em [qa.json](depois/qa.json). Os roteiros do menu e de instalação também verificam os fluxos existentes.
