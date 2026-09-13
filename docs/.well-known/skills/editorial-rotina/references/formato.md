# Manifesto do lote de teste

Um JSON com `schema_version: 1`, `enabled: false` e `pieces`: lista de objetos `id`, `format` (`static` ou `carousel`), `files` (caminhos relativos), `source_ref` (pauta/acervo), `template_ref` (revisão do template), `status` (`draft`, `review`, `approved`) e, quando aprovado, `approval_ref` (arquivo com a aprovação).

Todos os caminhos apontam para arquivos existentes dentro da pasta da operação. Inclua uma estática e um carrossel; um carrossel tem pelo menos dois arquivos. Os arquivos de aprovação precisam ligar pessoa, manifestação e revisão exibida. O verificador confere existência e estrutura; ler a aprovação e validar conteúdo continua necessário. Uma declaração `approved` no JSON sozinha não prova aprovação humana.

`python3 scripts/validar_lote.py --root pasta --manifest pasta/lote.json` retorna relatório JSON com hashes e pendências. Não escreve, publica, agenda ou chama API. `valid` indica consistência estrutural; `ready_for_human_review` indica que os arquivos podem seguir para revisão. `activation_authorized` permanece false. O relatório não é prova de teste de produção de conteúdo nem de aprovação visual.
