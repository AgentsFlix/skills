# Ilustrações do onboarding

Três artes exclusivas criadas para o AgentFlix em 08/09/2026 com o gerador de imagens integrado ao Codex (`image_gen`), a pedido do Zé. Direção editorial inspirada nas referências anexadas: personagens adultos, traço desenhado, fundo carvão, branco quente e ciano. Sem texto dentro das imagens.

| Arquivo | Escolha | Cena |
|---|---|---|
| `resolver-v1.webp` | Quero resolver uma coisa hoje | Pessoa concluindo uma tarefa ao lado do computador. |
| `base-v1.webp` | Quero montar o cérebro do negócio | Pessoa organizando pastas em uma base comum. |
| `caminho-v1.webp` | Não sei o que pegar | Pessoa consultando um mapa e uma bússola. |

Os PNGs originais de 1536 × 1024 e os prompts completos ficam no repo privado, em `prototipos/vitrine/ilustracoes-onboarding/`. As versões WebP de 960 × 640 foram apenas redimensionadas e comprimidas com `cwebp -q 86 -resize 960 0`, sem retoque da composição. As três somam menos de 70 KB.

As imagens são decorativas, com `alt` vazio. Os títulos e descrições acessíveis permanecem em HTML. O enquadramento quadrado do celular remove somente margens vazias; preserve os personagens e objetos ao substituir qualquer arquivo. A interface funciona mesmo se o carregamento das artes falhar. Regras em `design.md`; capturas em `design-review/illustrated-onboarding/`.
