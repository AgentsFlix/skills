# Como escolher o contrato de extração

Integração vigente: modelo fixado `jev-1.13.0`, provider `jevcloud_direct`, via `POST https://api.typesafe.ai/v1/systemone`. Use o cliente compartilhado de [jev-operar](../../jev-operar/GUIDE.md) e seu [contrato de API](../../jev-operar/references/api-contract.md), incluindo credencial própria do JevCloud. Confirmar disponibilidade e documentação ao usar no futuro; mudança de versão requer novo piloto. Não migrar silenciosamente para `jev-latest`.

Diretórios e checkpoints OpenRouter históricos permanecem preservados. Novas rodadas JevCloud usam novo diretório; `--resume` só retoma a mesma rota/provider, modelo, corpus e rubrica. O corpus minimizado já coletado pode ser entrada da nova rodada sem converter as decisões antigas.

## Perguntas de pesquisa viram julgamentos atômicos

| Necessidade editorial | Tipo adequado | Limite |
| --- | --- | --- |
| Pertence ao tema? É relato pessoal? | Noul | Probabilidade de sim, não atestado de verdade |
| Dor/desejo predominante | Choice com none/other | Uma alternativa; não multirrótulo |
| Várias dores no mesmo relato | Uma Noul por dor | Contagens podem se sobrepor |
| Situação, tensão e consequência claras | Scores separados | 0..N−1, combinar em código |
| Qual trecho sustenta uma afirmação? | Choice entre spans identificados | Extrair o span original por código; não gerar texto |
| Por que usar e como escrever? | Leitura/síntese do agente | Citar IDs e separar inferência de evidência |

Extrair também ausência e incerteza. Para “objeção”, distinguir objeção declarada a uma solução de dificuldade pessoal geral. Para “tentativa”, exigir ação dita no comentário. Para “desejo”, não assumir que toda dor implica desejar a oferta do usuário.

## Validação que importa

1. Integração: schema, escala, pergunta referenciando o campo certo e tratamento de falha.
2. Independência: controles opostos não recebem respostas derivadas de outro registro; testar ordenação e execução individual antes de otimizar lotes.
3. Conteúdo: leitura de amostra real diversificada de positivos, negativos e limítrofes. Relatar erros e casos difíceis, sem chamar teste sintético de calibração real.
4. Handoff: comentário original → pergunta/resultado JEV → trecho de evidência → interpretação → possível uso editorial.

Uma amostra de 20–40 comentários pode detectar falhas óbvias, mas não certifica precisão populacional. Dimensionar revisão pelo risco e variedade. Se o piloto falhar, corrigir a rubrica e repetir o piloto antes de gastar no corpus inteiro.

## Cobertura e tempo

Salvar versões de yt-dlp, provider/endpoint, modelo solicitado/resolvido e contrato. Cronometrar descoberta, coleta, JEV (por passe), revisão e montagem separadamente. Total de execução não é latência de inferência. Custos desconhecidos ficam null; não inventar valor com base apenas no tempo.

Fonte da coleta: [documentação oficial yt-dlp](https://github.com/yt-dlp/yt-dlp#extractor-arguments). `max_comments` é ilimitado por padrão; seus limites incluem total, pais e replies, e variam por versão. Remover um teto não elimina restrições da plataforma. O helper preserva cobertura e avisos resumidos, sem copiar corpos de erro que possam conter dados pessoais.
