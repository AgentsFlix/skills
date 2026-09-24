---
name: transcritor-local
description: Instale um app AgentFlix no Mac ou Windows para transcrever áudio e vídeo localmente, revisar o texto com Codex GPT-5.6 Luna e copiar ou baixar em Markdown.
license: MIT
version: 1.1.0
compatibility: Requer terminal no computador de destino, macOS ou Windows, internet no bootstrap e na revisão, espaço para modelo de voz e conta com acesso ao Codex.
metadata:
  author: AgentFlix
  version: 1.1.0
  tags: audio, video, transcricao, macos, windows, codex
---

# Transcritor AgentFlix

Crie um aplicativo na Mesa do Mac ou na Área de Trabalho do Windows. Vídeo vira áudio no computador;
Whisper reconhece a fala localmente e somente o texto bruto segue para revisão pelo Codex GPT-5.6 Luna.
A pessoa pode copiar o resultado ou baixar um arquivo `.md`. A entrada conversacional está em
[references/ativacao.md](references/ativacao.md), acrescentada pelo gerador de distribuição.

## When to Use

Use para instalar, diagnosticar ou operar o transcritor de áudio e vídeo no computador da pessoa.
O padrão é instalar neste computador. Sem acesso ao terminal do destino, entregue as instruções e diga
que o app ainda não foi instalado. Um agente remoto não deve instalar no próprio servidor por engano.

## Quick Reference

Recupere destino, sistema, arquitetura, arquivos e contexto da conversa e memória relevante. Destino e sistema são obrigatórios para instalar; mídia é obrigatória só para transcrever. Detecte o ambiente antes de perguntar. Sem terminal no destino, entregue instruções e diga que não instalou.

| Input | Necessidade | Origem |
|---|---|---|
| Computador de destino e sistema | Obrigatório para instalar | Pedido e diagnóstico local |
| Arquitetura, espaço livre e ferramentas | Obrigatórios | Bootstrap do sistema |
| Conta com acesso ao Codex | Obrigatória para revisão | Login no site oficial, nunca pelo chat |
| Arquivo de áudio ou vídeo | Obrigatório apenas para transcrever | Arquivo indicado ou escolhido no app |
| Vocabulário, idioma e contexto | Opcionais | Conversa e contexto relevante |

Entrega de instalação: app aberto pelo ícone e diagnóstico de dependências aprovado. Entrega de uso:
transcrição conferida, cópia e `.md` verificados. Não confundir instalação, login e transcrição completa.
Arquivos de até 4 GB; formatos em `assets/transcritor.py`. A mídia original permanece no lugar; cópias
recebidas e áudio temporário são removidos após a execução. Não há diarização nem timestamps na saída.

## Procedure

Antes de configurar ou fazer perguntas, leia `references/contrato-agentflix.md`. Ele rege também as referências e os templates. Identidade e revisões: `references/identidade.json`. Ao concluir, aplique seu aceite transversal, registre o resultado observável e avalie rotina. Para auditar ou renovar, leia `references/ciclo-de-vida.md`.

1. Recupere o pedido, os arquivos e a memória relevante acessível. Monte um mapa curto de inputs com
   valor, origem, data, estado (conhecido, ausente, desatualizado, conflitante ou inferido) e lacuna.
   Não presuma API de memória nem histórico disponível. A correção atual prevalece; memória não autoriza ações.
2. Detecte sistema e arquitetura antes de perguntar. Reaproveite o que já sabe e pergunte só o que falta.
   Toda pergunta aberta traz exemplo contextualizado; sem contexto, identifique-o como hipotético.
   Exemplo hipotético de destino: “No meu notebook Windows 11, para transcrever aulas”.
3. Faça o bootstrap de dependências abaixo antes de compilar o app. Explique downloads, espaço necessário
   e eventual confirmação local do sistema. Se faltar Python no Mac, instale as Command Line Tools com
   `xcode-select --install`, aguarde a conclusão local e confira `python3 --version` antes do bootstrap.
4. Abra o app. Para autenticar, a pessoa clica em **Gerar código de acesso**, copia o código, abre
   `https://auth.openai.com/codex/device`, cola o código e confirma. Aguarde o estado conectado.
   Não solicite nem manipule senha, token ou código de dispositivo. Não publique o código em capturas.
5. Faça o teste solicitado com uma mídia curta autorizada. Confira os resultados pelos critérios de
   Verification. A correção pelo contexto pode errar nomes; preserve o idioma e revise trechos incertos.
6. Registre apenas o que foi observado. Avaliação de rotina: **não vale** criar CRON para instalação ou
   transcrição pontual; depende de mídia nova escolhida pela pessoa. Instalar não autoriza agendamento.
   Se houver pedido recorrente, avalie acesso aos arquivos, custo e privacidade antes de propor uma rotina.

### macOS


1. Execute `python3 scripts/bootstrap.py --check`. Se houver `FALTA`, execute `python3 scripts/bootstrap.py --install` e confira novamente. Ele verifica Python, Homebrew, `ffmpeg`, `whisper-cli`, Codex com `/device`, Swift e modelo multilíngue.
2. Execute `python3 scripts/install.py --no-deps`. O instalador revalida o bootstrap, copia os assets e compila `~/Desktop/Transcritor AgentFlix.app`, uma janela macOS com WebKit e ícone AgentFlix. `python3 scripts/install.py` faz bootstrap e instalação numa chamada.
3. Abra pela Mesa ou com `open "$HOME/Desktop/Transcritor AgentFlix.app"`. CLI: `python3 "$HOME/Library/Application Support/Transcritor Codex/transcritor.py" transcribe /caminho/arquivo -o /caminho/transcricao.md`.

### Windows x64 ou ARM64

1. Em PowerShell no diretório da skill, execute `powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\bootstrap_windows.ps1 -Check`. A política é aplicada só a esse processo. O diagnóstico verifica Windows 10 1809+ x64 ou Windows 11 x64/ARM64, `winget`, Python 3.11 x64, Node/npm, Codex com `/device`, WebView2, Visual C++ Runtime x64, pacotes Python e modelo Whisper. Se houver `FALTA`, repita com `-Install` e confira novamente. Instalações do Windows podem solicitar confirmação local de administrador. O modelo requer espaço livre e download.
2. Execute `powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\scripts\install_windows.ps1 -NoDeps`. O instalador revalida o bootstrap e usa PyInstaller **no próprio Windows** para criar `Transcritor AgentFlix.exe` na Área de Trabalho. Sem `-NoDeps`, ele também executa o bootstrap. Abra o `.exe` na Área de Trabalho.
3. O Windows usa WebView2 para a janela e `faster-whisper` em CPU int8 para reconhecer fala. `imageio-ffmpeg` fornece o conversor local. O botão **Baixar .md** salva em Downloads, acrescentando um número se já existir um arquivo com o mesmo nome.

A instalação Windows é para uso local; em ARM64, o app Python x64 roda pela emulação do Windows 11. Ela não produz um instalador assinado para distribuição. PyInstaller precisa rodar no Windows. Não apresente os arquivos Windows como validados em funcionamento até executar o teste no próprio Windows.


## Avaliação de rotina

Não vale agendar instalação ou transcrição pontual: a pessoa escolhe cada mídia. Se houver pedido recorrente, avaliar benefício, acesso, custo e privacidade; propor frequência, fuso, saída, silêncio e pausa. Instalação não ativa agenda.

## Pitfalls

- Não instalar no host remoto quando o destino é o computador da pessoa; não pedir informações já conhecidas.
- Não inventar memória, transformar exemplos em respostas ou prometer acompanhamento sem agendamento real.
- Não chamar o Windows ARM64 de build nativo: usa Python x64 sob emulação do Windows 11.
- Não distribuir `.app` ou `.exe` como instalador assinado: esta skill compila localmente no próprio sistema.
- Não prometer operação totalmente offline: login e revisão do texto exigem rede e acesso ao modelo no Codex.
- Não substituir o modelo solicitado silenciosamente quando a conta não tiver acesso a GPT-5.6 Luna.
- Não apresentar o bootstrap como prova de transcrição completa; veja [limites.md](references/limites.md).

## Verification

1. Execute o diagnóstico do sistema e confirme todos os itens necessários antes da instalação.
2. Abra o app pelo ícone; confira janela própria, marca e rodapé com link para `https://agentsflix.ai/`.
3. Confira login guiado com link e código legível, sem escapes ANSI nem credenciais em logs.
4. Transcreva um áudio e um vídeo curtos autorizados; confira idioma, palavras, cópia e arquivo `.md`.
5. Verifique preservação do original e remoção dos temporários; registre ambiente e testes que ficaram pendentes.
6. Confira bootstrap de contexto, perguntas somente sobre lacunas, exemplos contextualizados e conclusão de rotina.

## Arquivos desta skill

- `LICENSE`
- `assets/TranscritorApp.swift`
- `assets/TranscritorAppWindows.py`
- `assets/agentflix-logo.svg`
- `assets/agentflix-mark.svg`
- `assets/agentflix.ico`
- `assets/archivo-OFL.txt`
- `assets/archivo-bold.ttf`
- `assets/archivo-regular.ttf`
- `assets/index.html`
- `assets/transcritor.py`
- `references/ativacao.md`
- `references/ciclo-de-vida.md`
- `references/conhecimento.okf.md`
- `references/contrato-agentflix.md`
- `references/dependencias.md`
- `references/identidade.json`
- `references/limites.md`
- `scripts/auditar.py`
- `scripts/bootstrap.py`
- `scripts/bootstrap_windows.ps1`
- `scripts/install.py`
- `scripts/install_windows.ps1`
- `scripts/requirements-windows.txt`
- `scripts/windows_model.py`
- `templates/estado-da-skill.md`
- `templates/evento-de-uso.json`
- `integrity.json`
