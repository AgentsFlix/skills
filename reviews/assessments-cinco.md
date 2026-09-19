# Cinco assessments disponíveis

Os cinco cards que antes indicavam pesquisa agora abrem questionários completos, com progresso, retomada na aba, revisão de respostas, leitura por dimensão e resultado copiável. O DISC existente permanece disponível.

- Modos de aprendizagem: sete perguntas autorais recuperadas, com textos, exemplos, mapeamentos e cálculo preservados.
- Modo de agir: 24 itens autorais em quatro dimensões; não é o Kolbe A Index.
- Big Five: tradução de trabalho dos 50 itens IPIP de domínio público, com a chave original; não usa normas populacionais.
- Eneagrama: 36 itens autorais sobre nove motivações; não é RHETI nem determina um tipo definitivo.
- Preferências de Jung: 32 itens autorais sobre os quatro pares popularizados pelo MBTI, com empates explícitos; não é o instrumento oficial.

Exportação seletiva da fonte AgentFlix, PR AgentsFlix/agentsflix#129, restrita a `site/aprofundamento-humano`. Sem mudanças na home, player, cadastro ou serviços de conta. O script de gravação de sessões foi removido desta área; respostas e resultados permanecem locais.

## Verificação

- Testes de pontuação: fixture original de aprendizagem, extremos e inversões do IPIP, todas as 16 combinações de Jung, nove motivações, empates e rejeição de respostas inválidas.
- Chrome real: cinco jornadas completas, recarga, revisão, isolamento entre instrumentos, cópia com fallback, storage corrompido/bloqueado, teclado e DISC.
- Inspeção em 1440, 768 e 390 px; sem overflow horizontal ou erros de JavaScript. Corrigida a borda do fieldset em perguntas longas.
- Capturas com respostas sintéticas, sem dados de alunos.
- Suíte pública completa e `scripts/check_site.py` executados antes da integração.

## Evidência visual

| Largura | Antes | Depois |
|---|---|---|
| 1440 | [Catálogo](evidence/assessments-cinco/before-catalog-1440.png) | [Catálogo](evidence/assessments-cinco/after-catalog-1440.png) |
| 768 | [Catálogo](evidence/assessments-cinco/before-catalog-768.png) | [Catálogo](evidence/assessments-cinco/after-catalog-768.png) |
| 390 | [Catálogo](evidence/assessments-cinco/before-catalog-390.png) | [Catálogo](evidence/assessments-cinco/after-catalog-390.png) |

[Perguntas no celular](evidence/assessments-cinco/acao-questions-390.png) · [Resultado de aprendizagem no tablet](evidence/assessments-cinco/aprendizagem-result-768.png) · [Resultado de Jung no desktop](evidence/assessments-cinco/jung-result-1440.png).

Escopo: `site/aprofundamento-humano`, `tests/test_aprofundamento_humano.py`, `tests/test_assessments.py`, este registro e `reviews/evidence/assessments-cinco`.
