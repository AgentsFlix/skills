# Assistir: acervo de séries

Referência visual: capturas da Netflix fornecidas pelo Zé em 08/09/2026. A adaptação usa a marca e os tokens do AgentFlix, com destaque amplo, ações Assistir e Mais informações, capas horizontais e fileiras. A entrada anterior abria uma ficha diretamente.

Há somente uma série atual: **Como instalar o seu Hermes Agent**. O acervo mostra essa série e seus quatro episódios. As aulas anteriores mantêm os links diretos. Busca e Minha lista operam sobre séries; Continuar assistindo aparece apenas com progresso real.

| Largura | Antes | Acervo | Ficha | Com progresso |
| --- | --- | --- | --- | --- |
| 1440 px | [Antes](antes/1440.png) | [Acervo](depois/1440-acervo.png) | [Ficha](depois/1440-serie.png) | [Continuar](depois/1440-continuar.png) |
| 768 px | [Antes](antes/768.png) | [Acervo](depois/768-acervo.png) | [Ficha](depois/768-serie.png) | [Continuar](depois/768-continuar.png) |
| 390 px | [Antes](antes/390.png) | [Acervo](depois/390-acervo.png) | [Ficha](depois/390-serie.png) | [Continuar](depois/390-continuar.png) |

A implementação separa conteúdo, regras compartilhadas, apresentação do catálogo e reprodução. Código formatado e instruções para cadastrar novas séries em [site/assistir/README.md](../../site/assistir/README.md). A expansão para uma segunda série foi verificada com dados simulados somente no teste.

QA: [resultados](depois/qa.json) em Chrome real nas três larguras, busca, lista persistente, retomada T3:E2, histórico, teclado, toque, rolagem, falha de armazenamento, catálogo vazio, nova tentativa e links antigos. Regressão do player com vídeo real: prompt e indicação íntegros, copiar/abrir sem retomar, continuar terracota explícito, rearme ao recarregar e escolha da raiz sem relógio. Temporadas, episódios, textos, links e tempos das paradas não foram alterados.

Preview local: `http://127.0.0.1:8794/assistir/?qa=1`. Revisão visual antes do merge conforme AGENTS.md.

## Revisão das capas (08/09/2026)

Artes originais fornecidas pelo Zé: horizontal 3:2 no desktop/tablet e vertical 2:3 até 600 px. Aplicadas no destaque, card e ficha, sem recorte; texto e ações ficam fora da arte. Episódios conservam 16:9. Os arquivos PNG são cópias exatas dos anexos.

| Largura | Antes | Capa no acervo | Capa na ficha |
| --- | --- | --- | --- |
| 1440 px | [Antes](capas/antes/1440-acervo.png) | [Acervo](capas/depois/1440-acervo.png) | [Ficha](capas/depois/1440-serie.png) |
| 768 px | [Antes](capas/antes/768-acervo.png) | [Acervo](capas/depois/768-acervo.png) | [Ficha](capas/depois/768-serie.png) |
| 390 px | [Antes](capas/antes/390-acervo.png) | [Acervo](capas/depois/390-acervo.png) | [Ficha](capas/depois/390-serie.png) |

Validação: 23 testes, check_site, [nove conferências de origem/proporção da imagem](capas/depois/qa.json) e [regressão do acervo](capas/depois/catalog-qa.json) em Chrome. Sem overflow horizontal; capa da ficha separada dos controles.
