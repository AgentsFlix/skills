# Copy Headlines v0.4.5

Objetivo: tornar explícito no procedimento principal da skill o padrão de cinco variações para `create video hook`.

Regressão observada: a v0.4.4 obedeceu um pedido de exatamente três hooks, mas devolveu dez quando a quantidade foi omitida. A referência estava correta; a apresentação principal ainda descrevia dez manchetes e vencia a instrução mais específica.

Contrato corrigido: quantidade positiva explícita vence; sem quantidade, são exatamente cinco variações. A menção a dez manchetes pertence somente a `create headlines`.

Publicação e nova validação no Hermes: pendentes até merge e criação da tag `v0.4.5`.
