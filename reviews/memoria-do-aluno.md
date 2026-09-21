# Memória privada do aluno

## Origem

Export controlado do componente Web do monorepo privado AgentFlix. A migration,
os testes de RLS e a documentação operacional permanecem na fonte privada.

## O que muda no site

- sincroniza com a conta apenas as chaves locais explicitamente autorizadas;
- preserva progresso de vídeos, leituras, skills marcadas, listas e exercícios;
- importa o estado já existente no primeiro vínculo da conta;
- mantém `localStorage` como cache para funcionamento offline;
- limpa o cache privado ao sair ou trocar de conta no mesmo navegador;
- não envia e-mail, sessão, consentimento, analytics ou carrinho como memória.

## Segurança

O navegador usa a sessão autenticada e o banco aplica RLS por `auth.uid()`. A
memória não é indexada por e-mail e não é disponibilizada ao painel
administrativo. Remoções usam tombstones para alcançar outros dispositivos.

## Compatibilidade preservada

O botão público de conteúdo extra do player, presente somente na distribuição,
foi preservado durante o merge do export. Não houve mudança visual de layout,
cores ou tipografia nesta entrega.

## Validação

- testes completos do repositório;
- `python3 scripts/check_site.py`;
- validação estática dos scripts e das páginas exportadas;
- conferência de que somente os caminhos autorizados foram publicados.
