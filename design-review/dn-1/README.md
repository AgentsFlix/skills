# DN-1: revisão visual do AgentFlix

Status: implementação em revisão, sem merge em produção.

Capturas em Chrome real, viewport de altura 900 px, escala 1. Antes: `064733f6fecfe47f0b4b14abc91a41a5765536f2`. Depois: esta branch. Mesma obra em destaque (`hybrid-tech`), mesma skill (`copy-lancamento`) e série (`hermes-agent`). Consentimento recusado em todos os testes. As capturas com progresso usam 60 segundos salvos de T3:E1 apenas no navegador de QA.

## Comparações

Abra uma imagem para comparar na dimensão original.

## 1440 px

| Superfície | Antes | Depois |
|---|---|---|
| Hero | ![Antes Hero](antes/1440-hero.webp) | ![Depois Hero](depois/1440-hero.webp) |
| Catálogo | ![Antes Catálogo](antes/1440-catalogo.webp) | ![Depois Catálogo](depois/1440-catalogo.webp) |
| Skill | ![Antes Skill](antes/1440-skill-topo.webp) | ![Depois Skill](depois/1440-skill-topo.webp) |
| Instalação | ![Antes Instalação](antes/1440-skill-instalar.webp) | ![Depois Instalação](depois/1440-skill-instalar.webp) |
| Série | ![Antes Série](antes/1440-serie.webp) | ![Depois Série](depois/1440-serie.webp) |
| Episódios | ![Antes Episódios](antes/1440-episodios.webp) | ![Depois Episódios](depois/1440-episodios.webp) |
| Continuar T3:E1 | ![Antes Continuar T3:E1](antes/1440-serie-progresso.webp) | ![Depois Continuar T3:E1](depois/1440-serie-progresso.webp) |
| Episódios com progresso | ![Antes Episódios com progresso](antes/1440-episodios-progresso.webp) | ![Depois Episódios com progresso](depois/1440-episodios-progresso.webp) |

## 768 px

| Superfície | Antes | Depois |
|---|---|---|
| Hero | ![Antes Hero](antes/768-hero.webp) | ![Depois Hero](depois/768-hero.webp) |
| Catálogo | ![Antes Catálogo](antes/768-catalogo.webp) | ![Depois Catálogo](depois/768-catalogo.webp) |
| Skill | ![Antes Skill](antes/768-skill-topo.webp) | ![Depois Skill](depois/768-skill-topo.webp) |
| Instalação | ![Antes Instalação](antes/768-skill-instalar.webp) | ![Depois Instalação](depois/768-skill-instalar.webp) |
| Série | ![Antes Série](antes/768-serie.webp) | ![Depois Série](depois/768-serie.webp) |
| Episódios | ![Antes Episódios](antes/768-episodios.webp) | ![Depois Episódios](depois/768-episodios.webp) |
| Continuar T3:E1 | ![Antes Continuar T3:E1](antes/768-serie-progresso.webp) | ![Depois Continuar T3:E1](depois/768-serie-progresso.webp) |
| Episódios com progresso | ![Antes Episódios com progresso](antes/768-episodios-progresso.webp) | ![Depois Episódios com progresso](depois/768-episodios-progresso.webp) |

## 390 px

| Superfície | Antes | Depois |
|---|---|---|
| Hero | ![Antes Hero](antes/390-hero.webp) | ![Depois Hero](depois/390-hero.webp) |
| Catálogo | ![Antes Catálogo](antes/390-catalogo.webp) | ![Depois Catálogo](depois/390-catalogo.webp) |
| Skill | ![Antes Skill](antes/390-skill-topo.webp) | ![Depois Skill](depois/390-skill-topo.webp) |
| Instalação | ![Antes Instalação](antes/390-skill-instalar.webp) | ![Depois Instalação](depois/390-skill-instalar.webp) |
| Série | ![Antes Série](antes/390-serie.webp) | ![Depois Série](depois/390-serie.webp) |
| Episódios | ![Antes Episódios](antes/390-episodios.webp) | ![Depois Episódios](depois/390-episodios.webp) |
| Continuar T3:E1 | ![Antes Continuar T3:E1](antes/390-serie-progresso.webp) | ![Depois Continuar T3:E1](depois/390-serie-progresso.webp) |
| Episódios com progresso | ![Antes Episódios com progresso](antes/390-episodios-progresso.webp) | ![Depois Episódios com progresso](depois/390-episodios-progresso.webp) |

## Hover em 1440 px

| Posição | Antes | Depois |
|---|---|---|
| primeiro | ![Antes](antes/1440-hover-primeiro.webp) | ![Depois](depois/1440-hover-primeiro.webp) |
| meio | ![Antes](antes/1440-hover-meio.webp) | ![Depois](depois/1440-hover-meio.webp) |
| ultimo | ![Antes](antes/1440-hover-ultimo.webp) | ![Depois](depois/1440-hover-ultimo.webp) |

## Capas atuais em 16:9

51 capas revisadas, com corte alinhado ao topo para preservar títulos e rostos. Sem filtros de saturação ou brilho. Texto miúdo já incorporado às artes continua dependente de recomposição futura (DN-2).
![Capas 1](capas-0.webp)
![Capas 2](capas-1.webp)
![Capas 3](capas-2.webp)

## Validação

15 testes unitários; verificação dos scripts e JSON; 51 skills validadas, scanner sem bloqueios e build_docs sem diff. Chrome real: busca, filtros, lista, hover, foco, plataformas, 408 comandos copiados, reprodução, progresso, link sem retomar, comando sem retomar, continuar terracota, rearme, escolha e troca de caminho.

As sinopses e descrições completas continuam acessíveis por expansão. O seletor conserva oito plataformas. A página da série continua sendo página; somente o modal de skill contém foco e bloqueia o fundo.

## Mapa de implementação

- `site/index.html`: tokens `:root`, `.hero`, `.art`, `#preview`, `.panel`; `renderHero`, `openModal`, `showPreview` e `hidePreview`.
- `site/assistir/index.html`: `.tp-panel`, `.tp-actions`, `.ep`; `renderTitle`, `epRow` e `measureDescriptions`.
- `tests/test_installation_design.py`: fixture de hash dos payloads anteriores. Atualizações deliberadas da instalação exigem revisar a fixture, nunca regenerá-la apenas para tornar o teste verde.

## Publicação

Aprovação visual do Zé obrigatória antes do merge. Merge na main publica pela Vercel.
