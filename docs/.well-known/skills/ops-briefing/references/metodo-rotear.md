# Método: rotear uma tarefa pela zona de genialidade

Origem: o squad `nucleo-ops-ia` (Synkra AIOS), generalizado. O método é o mesmo; os nomes das pessoas saem do arquivo de perfil do time, nunca daqui.

## 1. Classificar a tarefa em quatro dimensões

| dimensão | opções |
|---|---|
| tipo | decisão de produto/negócio · execução técnica · ambas |
| ritmo | sprint rápido · pesquisa profunda |
| domínio | usuário/mercado · sistema/arquitetura |
| complexidade | simples · média · complexa |

## 2. Casar com o time

Para cada pessoa do perfil, pontue de 0 a 3 quanto a tarefa cai na `zona_genialidade` dela. Empate se resolve por `ritmo`: sprint vai para quem tem `quick_start` alto ou `ritmo` rápido; pesquisa vai para quem tem `fato_finder` alto ou `ritmo` profundo.

## 3. Vetos, antes de decidir

Se a tarefa toca a `zona_incompetencia` de alguém, essa pessoa está fora, mesmo que sobre. Veto vence pontuação. Se todos estão vetados, a resposta é "ninguém do time; terceirizar ou automatizar", e isso é uma resposta válida.

## 4. Se for para duas pessoas

Defina: quem começa (quem define O QUE), o ponto de handoff, quem valida no fim, e o prazo de cada fase. Sem handoff explícito, a tarefa fica com os dois e com ninguém.

## 5. Briefing no formato da pessoa

Use `formato_briefing` do perfil. Se estiver vazio, use o padrão: para perfil de ritmo rápido, `CONTEXTO → PROBLEMA → RESULTADO → CRITÉRIOS` em até 10 linhas; para perfil de pesquisa, `PROBLEMA → DADOS → RESTRIÇÕES → RESULTADO → LIBERDADE`, tão longo quanto preciso.

## Saída

```
## Roteamento: <tarefa>
Decisão: <pessoa | pessoa A + pessoa B | ninguém do time>
Por quê: <dimensões + zona que casou + vetos checados>
Briefing: <no formato da pessoa>
Se dois: <fases, handoff, validação, prazos>
```
