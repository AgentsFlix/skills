# Hermes em Operação · T1E4

Fonte privada autoritativa: `AgentsFlix/agentsflix`, PR #217. Esta exportação leva
somente o catálogo Web e a página permanente de compartilhamento do episódio
4 para `AgentsFlix/skills:site`.

O vídeo fica no Cloudflare Stream com URLs assinadas e vínculo ao produto
`assistir:hermes-em-operacao` no banco. O arquivo de mídia, a transcrição
recebida, os arquivos de revisão e as credenciais não entram neste repositório.

O episódio 4 da temporada 1 é **Anatomia de um profile**. Em Materiais, o
capítulo 4 aponta para a experiência interativa existente, composta por
anatomia, cinco cenários de montagem e gateways.

O catálogo continua acessível quando uma pré-busca de token de vídeo falha.
Cada reprodução ainda solicita seu próprio token ao servidor e exige o direito
da série.

Validação: geração da página permanente, checagem de componentes e catálogo,
testes do site público e verificação dos endereços em produção após o merge.
