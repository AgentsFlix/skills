# Painel administrativo: sessão expirada

Fonte privada autoritativa: `AgentsFlix/agentsflix` PR #218. Este PR exporta
somente `admin/acessos/admin-access.js` para o site público.

Uma sessão expirada podia mostrar "Painel indisponível" no primeiro carregamento.
Agora o usuário é encaminhado ao estado de entrada, enquanto falhas reais do
banco continuam diferenciadas. Respostas antigas não podem reabrir o painel
depois da saída. Nenhum acesso, perfil ou banco é modificado por esta entrega.

Validação: teste de comportamento no repositório privado, checks do site e
prévia Vercel. O deploy de produção deverá ser conferido após o merge.
