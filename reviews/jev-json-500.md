# Laboratório JEV: JSON e 500 comentários

Exportação autorizada dos módulos do laboratório e do proxy de decisões.
Sem mudanças na vitrine, autenticação, checkout, domínio ou outros consumidores.

## Escopo

- Campos e JSON editável representam a mesma requisição, com validação e recuperação.
- Guia de construção de estado e quatro aplicações comparadas na analogia de Hogwarts.
- 500 comentários sintéticos, nomes fictícios, uma unidade por chamada, concorrência 2.
- Pausa, retomada na mesma aba, filtros e erro recuperável sem simular decisões.
- Campos/rubrica editados invalidam a rodada; limiares só recalculam política local.

## Evidências

Ver [QA visual](../design-review/jev-json-500/README.md).
Teste real: 500/500 respostas válidas, zero falhas; isso não é taxa de acerto.
As capturas de UI/erros usam respostas de teste; a captura live-full contém resultados reais.
Corpus sintético não é pesquisa representativa nem reprodução de comentários públicos.

Checks públicos e publicação serão confirmados no PR após execução.
