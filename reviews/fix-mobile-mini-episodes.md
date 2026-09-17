# Mini episódios no player mobile

## Problema

Os 11 mini episódios do T1:E3 eram iframes independentes dentro do painel de
perguntas e respostas. No celular, tocar em um item reproduzia o vídeo dentro
do próprio card e não no player principal.

## Resultado

- Os mini episódios aparecem como uma lista abaixo do player no celular.
- Cada item usa miniatura 16:9, número, título e estado de reprodução.
- O toque carrega a mídia no mesmo elemento de vídeo do episódio.
- Play, pausa, avanço, retrocesso e timeline continuam disponíveis.
- O progresso do episódio principal não é sobrescrito enquanto um mini episódio
  está ativo.

## Verificação

- Testes automatizados do catálogo e do site.
- QA visual em 1440, 768 e 390 px.
- QA funcional por toque em 390 px, incluindo troca de item e avanço na
  timeline do player principal.

## Evidência visual

| Largura | Antes | Depois |
|---|---|---|
| 390 px | [captura](evidence/fix-mobile-mini-episodes/before-390.png) | [captura](evidence/fix-mobile-mini-episodes/after-390.png) |
| 768 px | [captura](evidence/fix-mobile-mini-episodes/before-768.png) | [captura](evidence/fix-mobile-mini-episodes/after-768.png) |
| 1440 px | [captura](evidence/fix-mobile-mini-episodes/before-1440.png) | [captura](evidence/fix-mobile-mini-episodes/after-1440.png) |

O escopo reservado foi ampliado somente para incluir estas capturas.
