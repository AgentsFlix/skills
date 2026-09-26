# Pedágio da Realidade 1.0.1

## Publicação aprovada

Conteúdo e publicação autorizados pelo fundador em 26/09/2026. Entrega gerada da fonte
aprovada: pacote completo, card na vitrine, ZIP, colável e descoberta para agentes.
Referência fixa: pedagio-da-realidade-v1.0.1. Catálogo global preservado em 0.4.5.

[PR 158](https://github.com/AgentsFlix/skills/pull/158).
URL humana: https://agentsflix.ai/?destaque=pedagio-da-realidade.
A curadoria coloca a skill na fileira de início, sem dependência de outra skill.
O card usa o fallback visual nativo; nenhuma imagem nova foi publicada.

## Verificações

- 168 testes passaram no ambiente Python 3.11 isolado com dependências do repositório.
- check_site.py, validate_skills.py e scan_skills.py passaram.
- build_docs.py reproduziu docs/ e catalog.json sem diferença.
- Identidade e integridade conferidas; digest editorial corresponde ao método distribuído.
- Documentos internos e dados de participantes não compõem o pacote.
- O catálogo anterior foi preservado; somente a nova skill e sua curadoria foram adicionadas.

QA visual e funcional passou em 1440/768/390. Onboarding real com respostas sintéticas,
busca/card, destaque, modal por teclado, sete alvos de cópia literal, colável, ZIP,
Escape e retorno de foco; zero exceções JS ou overflow horizontal. Evidências em
[design-review/pedagio-da-realidade](../design-review/pedagio-da-realidade/README.md).
O link da tag ainda não publicada foi interceptado somente no teste local; a verificação
HTTP pública é uma etapa posterior obrigatória.
A aprovação editorial e os testes não demonstram eficácia comportamental humana.

## Integração e produção

Integrar pelo PR com checks, criar a tag somente no commit integrado e conferir Pages,
Vercel, catálogo, prompt, ZIP, card e modal publicados. A evidência final de SHA e respostas
públicas será registrada no PR depois da conclusão do deploy.
