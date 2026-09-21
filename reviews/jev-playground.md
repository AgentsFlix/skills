# Playground Jev · publicação

Exportação pública autorizada do laboratório em `Aprender > Tecnologia sem
jargão`. A fonte autoritativa permanece no monorepo privado AgentFlix; este PR
leva somente a página, o recurso visual, o JavaScript do navegador, o proxy de
servidor e a entrada da coleção.

Os dois JSONs são campos editáveis reais. O navegador envia `state` e
`questions` ao endpoint `/api/jev`, que fixa o modelo `typesafe/jev-1.13` e chama
a Decisions API da OpenRouter. A chave fica apenas no ambiente do servidor;
respostas internas não são repassadas ao navegador.

QA local realizado com requisição real e dados sintéticos: Harry resultou em
Grifinória e Draco em Sonserina, confirmando que a mudança de estado altera a
decisão. Também foram verificados JSON inválido e recuperação, carregamento,
teclado, foco visível e movimento reduzido. Em 1440, 768 e 390 px não houve
transbordamento horizontal.

O preview Vercel, o CI público e a confirmação em produção serão registrados no
PR. Não há mudança de preço, autenticação, oferta ou coleta de dados pessoais.
