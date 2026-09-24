# transcritor-local · versão para colar

> Esta é a mesma skill de https://agentsflix.ai, num arquivo só, para quem não instala skill:
> ChatGPT sem Skills no plano, Claude sem upload, ou qualquer chat. Onde o texto disser `references/arquivo.md`
> ou `templates/arquivo`, o conteúdo está na seção **Referência:** correspondente, mais abaixo.
>
> **Como usar.** ChatGPT: crie um Project, envie este arquivo em Files e cole nas instruções do projeto o texto
> de ativação abaixo. Claude: envie como conhecimento do Project, ou cole tudo no chat. Qualquer chat: cole tudo.
> Versão 1.1.0. Instalável como skill de verdade (Hermes, Claude.ai, Claude Code, ChatGPT Skills, Codex) na página.
>
> **Texto de ativação (cole nas instruções):** Acesse https://raw.githubusercontent.com/AgentsFlix/skills/transcritor-local-v1.1.0/skills/transcritor-local/SKILL.md e leia a skill Transcritor AgentFlix e as referências necessárias. Esta edição usa a referência transcritor-local-v1.1.0. Se eu já tiver anexado o pacote ou a versão colável, use esse material, incluindo as seções Referência, sem depender de novo acesso à rede. Confira se a skill já está instalada; se não estiver e houver suporte, inspecione a licença, o SKILL.md e os arquivos de apoio e instale pelo mecanismo disponível. Sem instalação, aplique o procedimento nesta conversa e informe o limite.
>
> Antes de me fazer perguntas, leia o contrato AgentFlix incluído e cheque nossa conversa, sua memória local acessível e os arquivos relevantes que você já conhece. Identifique os inputs exigidos, quais você já tem e quais faltam. Reaproveite fatos atuais, identifique origem, data, conflitos e inferências. Não invente lembranças nem me peça novamente o que já sabe.
>
> Mostre uma síntese curta e pergunte só pelas lacunas necessárias. TODA pergunta aberta, inclusive de configuração, referência, revisão e rotina, deve trazer junto um exemplo de resposta baseado no contexto que você recuperou de mim. Deixe claro que é sugestão. Sem memória relevante, declare isso e rotule o exemplo como hipotético; use minhas novas respostas nos exemplos seguintes. Não grave o exemplo como minha resposta.
>
> Siga o procedimento da skill e confira seus critérios de entrega. Se faltar algo obrigatório, mantenha a etapa aguardando. Registre apenas uso e resultados observados, em armazenamento privado, com a identidade e a revisão desta skill. Sem persistência ou script, entregue um resumo reutilizável e explique os limites de auditoria. Confira o status e o prazo editorial do OKF; usar não renova a validade.
>
> Avalie se vale transformar parte desta tarefa em rotina. Diga vale sugerir, não vale ou depende, com motivo. Se valer, apresente uma proposta concreta de frequência, horário, fuso, inputs, resultado, canal, silêncio, pausa e encerramento. Respeite recusas anteriores. Instalar não autoriza CRON. Só configure com minha autorização e um agendador disponível, conferindo duplicatas e o ID retornado. Não prometa alertas sem monitor; minha falta de resposta não confirma atividade ou decisão.
>
> Instale o Transcritor AgentFlix neste computador após identificar sistema e arquitetura e fazer o bootstrap. Reaproveite o contexto e pergunte só pelas lacunas com exemplos. Crie o app na Mesa do Mac ou Área de Trabalho do Windows. A pessoa autentica pelo link oficial e cola o código no navegador; nunca peça código ou senha no chat. Depois teste um áudio ou vídeo autorizado, entregue a transcrição e o .md e informe o que não foi testado. Windows ARM64 usa emulação x64; veja references/limites.md.

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

## Arquivos desta skill (incluídos abaixo)

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


---

## Referência: LICENSE

MIT License

Copyright (c) 2026 AgentFlix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

## Referência: assets/TranscritorApp.swift

import AppKit
import WebKit

final class TranscritorApp: NSObject, NSApplicationDelegate, NSWindowDelegate, WKNavigationDelegate, WKUIDelegate, WKDownloadDelegate {
    private var window: NSWindow!
    private var webView: WKWebView!
    private var server: Process?

    func applicationDidFinishLaunching(_ notification: Notification) {
        let configuration = WKWebViewConfiguration()
        configuration.preferences.javaScriptCanOpenWindowsAutomatically = true
        webView = WKWebView(frame: .zero, configuration: configuration)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.setValue(false, forKey: "drawsBackground")

        window = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 1120, height: 820),
                          styleMask: [.titled, .closable, .miniaturizable, .resizable],
                          backing: .buffered, defer: false)
        window.title = "Transcritor AgentFlix"
        window.minSize = NSSize(width: 390, height: 560)
        window.contentView = webView
        window.delegate = self
        window.center()
        window.makeKeyAndOrderFront(nil)
        NSApp.activate(ignoringOtherApps: true)
        startServer()
    }

    private func startServer() {
        let home = FileManager.default.homeDirectoryForCurrentUser
        let script = home.appendingPathComponent("Library/Application Support/Transcritor Codex/transcritor.py").path
        let process = Process()
        process.executableURL = URL(fileURLWithPath: "/usr/bin/python3")
        process.arguments = [script, "serve", "--no-browser"]
        var environment = ProcessInfo.processInfo.environment
        environment["PATH"] = "/opt/homebrew/bin:/usr/local/bin:/Applications/ChatGPT.app/Contents/Resources:" + (environment["PATH"] ?? "")
        process.environment = environment
        let output = Pipe()
        process.standardOutput = output
        process.standardError = output
        server = process
        do {
            try process.run()
        } catch {
            showError("Não foi possível iniciar o transcritor local.")
            return
        }
        DispatchQueue.global(qos: .userInitiated).async { [weak self] in
            var line = Data()
            while let byte = try? output.fileHandleForReading.read(upToCount: 1), !byte.isEmpty {
                if byte[0] == 10 {
                    if let raw = String(data: line, encoding: .utf8), raw.hasPrefix("http://127.0.0.1:"),
                       let url = URL(string: raw.trimmingCharacters(in: .whitespacesAndNewlines)) {
                        DispatchQueue.main.async { self?.webView.load(URLRequest(url: url)) }
                        return
                    }
                    line.removeAll(keepingCapacity: true)
                } else if line.count < 4096 {
                    line.append(byte[0])
                }
            }
            DispatchQueue.main.async { self?.showError("O servidor local não iniciou. Execute a skill novamente para verificar as dependências.") }
        }
    }

    private func showError(_ message: String) {
        let alert = NSAlert()
        alert.messageText = "Transcritor AgentFlix"
        alert.informativeText = message
        alert.alertStyle = .warning
        alert.runModal()
    }

    func windowWillClose(_ notification: Notification) { NSApp.terminate(nil) }
    func applicationWillTerminate(_ notification: Notification) {
        if let server, server.isRunning { server.terminate() }
    }

    private func isLocal(_ url: URL) -> Bool {
        url.host == "127.0.0.1" && url.scheme == "http"
    }

    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if navigationAction.shouldPerformDownload {
            decisionHandler(.download)
        } else if let url = navigationAction.request.url, !isLocal(url) {
            if url.scheme == "https" { NSWorkspace.shared.open(url) }
            decisionHandler(.cancel)
        } else {
            decisionHandler(.allow)
        }
    }

    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration,
                 for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if let url = navigationAction.request.url, url.scheme == "https" { NSWorkspace.shared.open(url) }
        return nil
    }

    func webView(_ webView: WKWebView, runOpenPanelWith parameters: WKOpenPanelParameters,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping ([URL]?) -> Void) {
        let panel = NSOpenPanel()
        panel.canChooseFiles = true
        panel.canChooseDirectories = false
        panel.allowsMultipleSelection = parameters.allowsMultipleSelection
        panel.beginSheetModal(for: window) { response in
            completionHandler(response == .OK ? panel.urls : nil)
        }
    }

    func webView(_ webView: WKWebView, navigationAction: WKNavigationAction, didBecome download: WKDownload) {
        download.delegate = self
    }

    func download(_ download: WKDownload, decideDestinationUsing response: URLResponse,
                  suggestedFilename: String, completionHandler: @escaping (URL?) -> Void) {
        let panel = NSSavePanel()
        panel.nameFieldStringValue = suggestedFilename.lowercased().hasSuffix(".md")
            ? suggestedFilename : suggestedFilename + ".md"
        panel.beginSheetModal(for: window) { result in
            completionHandler(result == .OK ? panel.url : nil)
        }
    }
}

let application = NSApplication.shared
let delegate = TranscritorApp()
application.delegate = delegate
application.setActivationPolicy(.regular)
application.run()


---

## Referência: assets/agentflix-logo.svg

<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="320" viewBox="0 0 1600 320" role="img" aria-label="AgentFlix"><title>AgentFlix</title><g transform="translate(60 74.09893020500739) scale(0.7535181560964264)"><path fill="#30B0C7" d="M0 228 126 0H174L300 228H244L150 57 56 228Z"/><path fill="#FFFFFF" d="M128 123Q128 117 134 120L188 151Q194 155 188 159L134 190Q128 194 128 187Z"/><g transform="translate(291 0)"><path fill="#F0EEE6" transform="translate(0.00000 228) scale(0.15271266 -0.15271266)" d="M1530 111Q1386 41 1231.0 6.0Q1076 -29 911 -29Q538 -29 320.0 179.5Q102 388 102 745Q102 1106 324.0 1313.0Q546 1520 932 1520Q1081 1520 1217.5 1492.0Q1354 1464 1475 1409V1100Q1350 1171 1226.5 1206.0Q1103 1241 979 1241Q749 1241 624.5 1112.5Q500 984 500 745Q500 508 620.0 379.0Q740 250 961 250Q1021 250 1072.5 257.5Q1124 265 1165 281V571H930V829H1530Z"/><path fill="#F0EEE6" transform="translate(251.36504 228) scale(0.15271266 -0.15271266)" d="M188 1493H1227V1202H573V924H1188V633H573V291H1249V0H188Z"/><path fill="#F0EEE6" transform="translate(459.66510 228) scale(0.15271266 -0.15271266)" d="M188 1493H618L1161 469V1493H1526V0H1096L553 1024V0H188Z"/><path fill="#F0EEE6" transform="translate(716.06966 228) scale(0.15271266 -0.15271266)" d="M10 1493H1386V1202H891V0H506V1202H10Z"/></g><g transform="translate(1215.0643000669793 0)"><path fill="#30B0C7" transform="translate(0.00000 228) scale(0.15271266 -0.15271266)" d="M188 1493H1227V1202H573V924H1188V633H573V0H188Z"/><path fill="#30B0C7" transform="translate(208.30007 228) scale(0.15271266 -0.15271266)" d="M188 1493H573V291H1249V0H188Z"/><path fill="#30B0C7" transform="translate(402.24514 228) scale(0.15271266 -0.15271266)" d="M188 1493H573V0H188Z"/><path fill="#30B0C7" transform="translate(513.26725 228) scale(0.15271266 -0.15271266)" d="M1020 762 1538 0H1137L788 510L442 0H39L557 762L59 1493H461L788 1012L1114 1493H1518Z"/></g></g></svg>


---

## Referência: assets/agentflix-mark.svg

<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="AgentFlix"><title>AgentFlix</title><rect width="64" height="64" rx="14" fill="#14161A"/><g transform="translate(7 13) scale(0.16666666666666666)"><path fill="#30B0C7" d="M0 228 126 0H174L300 228H244L150 57 56 228Z"/><path fill="#FFFFFF" d="M128 123Q128 117 134 120L188 151Q194 155 188 159L134 190Q128 194 128 187Z"/></g></svg>


---

## Referência: assets/archivo-OFL.txt

Copyright 2020 The Archivo Project Authors (https://github.com/Omnibus-Type/Archivo)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.


---

## Referência: assets/index.html

<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Transcritor | AgentFlix</title>
  <link rel="icon" type="image/svg+xml" href="/assets/agentflix-mark.svg">
  <style>
    @font-face { font-family: Archivo; src: url('/assets/archivo-regular.ttf') format('truetype'); font-style: normal; font-weight: 400; font-display: swap; }
    @font-face { font-family: Archivo; src: url('/assets/archivo-bold.ttf') format('truetype'); font-style: normal; font-weight: 700 900; font-display: swap; }
    :root { color-scheme: dark; font-family: Archivo, Helvetica, Arial, sans-serif; background: #141414; color: #f5f5f1; --bg: #141414; --panel: #181818; --surface: #202020; --text: #f5f5f1; --muted: #b3b3b3; --line: rgba(255,255,255,.16); --brand: #30b0c7; --link: #5fc9dc; --on-brand: #14161a; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; padding: 0 24px 48px; background: radial-gradient(ellipse 70% 450px at 85% -90px, rgba(48,176,199,.13), transparent 72%), var(--bg); }
    body::before { content: ''; display: block; height: 3px; margin: 0 -24px; background: linear-gradient(90deg, var(--brand), rgba(48,176,199,.18) 68%, transparent); }
    button, input, textarea { font: inherit; }
    button { cursor: pointer; }
    button:disabled { cursor: not-allowed; opacity: .48; }
    button:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible, .dropzone:focus-within { outline: 2px solid var(--link); outline-offset: 4px; }
    a { color: var(--link); }
    .shell { width: min(1040px, 100%); margin: 0 auto; }
    .hero { padding: 37px 0 34px; }
    .brand-link { display: inline-flex; align-items: center; width: fit-content; padding: 5px 0; text-decoration: none; }
    .brand-logo { display: block; width: 168px; height: auto; }
    .hero-copy { margin-top: 41px; }
    .eyebrow { margin: 0 0 12px; color: var(--link); font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
    h1 { margin: 0 0 12px; font-size: clamp(36px, 5vw, 55px); line-height: 1.05; letter-spacing: -.04em; }
    .lead { max-width: 690px; margin: 0; color: var(--muted); font-size: 17px; line-height: 1.5; }
    .stack { display: grid; grid-template-columns: minmax(0, 1fr); gap: 16px; min-width: 0; }
    .card { min-width: 0; padding: clamp(22px, 3vw, 30px); border: 1px solid var(--line); border-radius: 12px; background: var(--panel); box-shadow: 0 24px 64px rgba(0,0,0,.18); }
    .card-head { display: flex; align-items: flex-start; gap: 17px; }
    .card-head > div { min-width: 0; flex: 1; }
    .number { flex: 0 0 auto; display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(48,176,199,.13); color: var(--link); font-size: 13px; font-weight: 700; }
    .card-title { margin: 2px 0 5px; font-size: 21px; line-height: 1.2; letter-spacing: -.02em; }
    .card-desc { margin: 0; color: var(--muted); line-height: 1.5; }
    .badge { margin-left: auto; border: 1px solid var(--line); border-radius: 999px; padding: 6px 12px; color: var(--muted); background: var(--surface); font-size: 12px; font-weight: 700; white-space: nowrap; }
    .badge.ready { border-color: rgba(48,176,199,.4); background: rgba(48,176,199,.12); color: var(--link); }
    .badge.waiting { border-color: rgba(229,188,72,.4); background: rgba(229,188,72,.1); color: #e5bc48; }
    .badge.error { border-color: rgba(255,180,171,.4); background: rgba(255,180,171,.1); color: #ffb4ab; }
    .auth-body { margin: 22px 0 0 53px; }
    .button { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 10px 18px; border: 1px solid var(--brand); border-radius: 999px; background: var(--brand); color: var(--on-brand); font-size: 14px; font-weight: 700; line-height: 1.25; text-align: center; text-decoration: none; transition: background 160ms, border-color 160ms, transform 160ms; }
    .button:hover:not(:disabled) { background: var(--link); border-color: var(--link); transform: translateY(-1px); }
    .button.secondary { border-color: var(--line); background: var(--surface); color: var(--text); }
    .button.secondary:hover:not(:disabled) { border-color: var(--link); background: #292e30; }
    .button.ghost { border-color: transparent; background: transparent; color: var(--link); }
    .button.ghost:hover:not(:disabled) { border-color: var(--line); background: var(--surface); }
    .actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
    .helper { margin: 12px 0 0; color: var(--muted); font-size: 13px; line-height: 1.5; }
    .auth-message { min-height: 20px; margin: 13px 0 0; color: var(--muted); font-size: 14px; line-height: 1.5; }
    .steps { display: grid; gap: 15px; padding: 0; margin: 0; list-style: none; counter-reset: step; }
    .steps li { display: grid; grid-template-columns: 29px minmax(0,1fr); gap: 12px; align-items: start; counter-increment: step; }
    .steps li::before { content: counter(step); display: grid; place-items: center; width: 28px; height: 28px; border: 1px solid rgba(48,176,199,.35); border-radius: 50%; color: var(--link); font-size: 13px; font-weight: 700; }
    .steps strong { display: block; margin: 4px 0 8px; }
    .steps p { margin: 7px 0 0; color: var(--muted); font-size: 13px; line-height: 1.5; }
    .code-row { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; }
    .code { display: inline-block; min-width: 170px; padding: 11px 14px; border: 1px solid var(--line); border-radius: 8px; background: #111; color: var(--text); font: 700 19px/1.2 ui-monospace, Menlo, monospace; letter-spacing: .05em; }
    .dropzone { display: grid; justify-items: center; gap: 8px; min-width: 0; margin-top: 23px; padding: 26px 16px; border: 1px dashed rgba(95,201,220,.55); border-radius: 12px; background: #111719; text-align: center; cursor: pointer; transition: border-color 160ms, background 160ms; }
    .dropzone:hover { border-color: var(--link); background: #162024; }
    .dropzone strong { color: var(--text); font-size: 16px; }
    .dropzone span { color: var(--muted); font-size: 13px; overflow-wrap: anywhere; }
    .dropzone input { width: min(360px,100%); min-width: 0; margin-top: 7px; color: var(--muted); font-size: 13px; }
    .dropzone input::file-selector-button { margin-right: 12px; padding: 8px 12px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--text); font: inherit; cursor: pointer; }
    .process { display: flex; align-items: center; flex-wrap: wrap; gap: 12px 18px; margin-top: 18px; }
    .process .button { min-width: 160px; }
    .status { min-height: 21px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.5; }
    .output { width: 100%; min-height: 280px; margin: 20px 0 15px; padding: 18px; resize: vertical; border: 1px solid var(--line); border-radius: 8px; color: var(--text); background: #111; font: 15px/1.6 Archivo, Helvetica, Arial, sans-serif; }
    .footnote { margin: 0; padding: 20px 2px 0; color: var(--muted); font-size: 13px; line-height: 1.5; }
    .footer { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 35px; padding: 20px 2px 0; border-top: 1px solid var(--line); color: var(--muted); font-size: 13px; line-height: 1.5; }
    .footer p { margin: 0; }
    .footer a { font-weight: 700; text-underline-offset: 3px; }
    [hidden] { display: none !important; }
    @media (max-width: 600px) { body { padding: 0 16px 32px; } body::before { margin: 0 -16px; } .hero { padding: 22px 0 28px; } .brand-logo { width: 145px; } .hero-copy { margin-top: 33px; } .lead { font-size: 15px; } .card { padding: 20px 16px; } .card-head { gap: 11px; flex-wrap: wrap; } .card-head > div { flex-basis: calc(100% - 48px); } .number { width: 34px; height: 34px; } .card-title { font-size: 19px; } .badge { margin-left: 45px; } .auth-body { margin-left: 0; } .actions .button { width: 100%; } .steps .button { width: auto; } .code { min-width: 0; } .process { align-items: stretch; } .process .button { width: 100%; } .footer { margin-top: 28px; } }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0ms !important; animation-duration: 0ms !important; } }
  </style>
</head>
<body>
  <main class="shell">
    <header class="hero">
      <a class="brand-link" href="https://agentsflix.ai/" target="_blank" rel="noopener noreferrer" aria-label="Acessar AgentFlix"><img class="brand-logo" src="/assets/agentflix-logo.svg" alt="AgentFlix"></a>
      <div class="hero-copy"><p class="eyebrow">SKILL DO AGENTFLIX · APP LOCAL</p>
      <h1>Transcritor</h1>
      <p class="lead">Transforme áudio ou vídeo em texto. O reconhecimento roda neste computador; apenas o texto segue para revisão com GPT-5.6 Luna.</p></div>
    </header>
    <div class="stack">
      <section class="card" aria-labelledby="authTitle">
        <div class="card-head"><span class="number" aria-hidden="true">01</span><div><h2 class="card-title" id="authTitle">Conecte sua conta</h2><p class="card-desc">Use sua conta do ChatGPT para revisar a transcrição.</p></div><span id="authBadge" class="badge">Verificando</span></div>
        <div class="auth-body">
          <div id="authIdle" hidden><button id="login" class="button">Gerar código de acesso</button><p class="helper">O código é criado pelo Codex neste computador. Você confirma o acesso no site da OpenAI.</p></div>
          <div id="authSteps" hidden>
            <ol class="steps">
              <li><div><strong>Abra a página de autorização</strong><a class="button secondary" href="https://auth.openai.com/codex/device" target="_blank" rel="noopener noreferrer">Abrir página de login ↗</a></div></li>
              <li><div><strong>Cole o código gerado</strong><div class="code-row"><output id="deviceCode" class="code" aria-label="Código de acesso">Gerando…</output><button id="copyCode" class="button secondary" disabled>Copiar código</button></div><p>O código expira em cerca de 15 minutos. Use somente o código que você gerou aqui.</p></div></li>
              <li><div><strong>Confirme e volte a esta aba</strong><p>Quando a autorização terminar, esta tela ficará pronta automaticamente.</p></div></li>
            </ol>
          </div>
          <div id="authReady" hidden><div class="actions"><span>Conta conectada. Pronto para transcrever.</span><button id="relogin" class="button ghost">Trocar conta</button></div></div>
          <p id="authMessage" class="auth-message" role="status" aria-live="polite"></p>
        </div>
      </section>
      <section class="card" aria-labelledby="uploadTitle">
        <div class="card-head"><span class="number" aria-hidden="true">02</span><div><h2 class="card-title" id="uploadTitle">Escolha seu arquivo</h2><p class="card-desc">Áudio ou vídeo do computador. A mídia fica local durante o processamento.</p></div></div>
        <label class="dropzone" for="file"><strong>Selecione um áudio ou vídeo</strong><span id="fileName">MP3, M4A, WAV, MP4, MOV e outros formatos comuns</span><input id="file" type="file" accept="audio/*,video/*,.mkv,.avi,.m4v"></label>
        <div class="process"><button id="start" class="button" disabled>Transcrever arquivo</button><p id="status" class="status" role="status" aria-live="polite">Conecte sua conta e escolha um arquivo para começar.</p></div>
      </section>
      <section id="resultCard" class="card" aria-labelledby="resultTitle" hidden>
        <div class="card-head"><span class="number" aria-hidden="true">03</span><div><h2 class="card-title" id="resultTitle">Sua transcrição</h2><p class="card-desc">Confira o texto, depois copie ou baixe em Markdown.</p></div></div>
        <textarea id="result" class="output" aria-label="Transcrição" spellcheck="false"></textarea>
        <div class="actions"><button id="copy" class="button secondary">Copiar texto</button><button id="download" class="button secondary">Baixar .md</button></div>
      </section>
    </div>
    <p class="footnote">A mídia temporária é apagada após a transcrição. Revise nomes próprios e trechos incertos antes de publicar.</p>
    <footer class="footer"><p>Transcritor criado com skill do <a href="https://agentsflix.ai/" target="_blank" rel="noopener noreferrer">AgentFlix ↗</a></p><p>Processamento local no seu computador</p></footer>
  </main>
  <script>
    const token = __TOKEN__;
    const $ = id => document.getElementById(id);
    let filename = 'transcricao.md';
    let connected = false;
    let busy = false;
    let copiedCode = false;
    async function api(path, options = {}) {
      const response = await fetch(path, {...options, headers: {'X-Local-Token': token, ...options.headers}});
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Erro local');
      return data;
    }
    function updateStart() { $('start').disabled = !connected || !$('file').files.length || busy; }
    function renderLogin(data) {
      const phase = data.phase || 'idle';
      connected = phase === 'ready';
      $('authBadge').textContent = {idle: 'Pendente', waiting: 'Aguardando', ready: 'Conectado', error: 'Atenção'}[phase] || 'Pendente';
      $('authBadge').className = 'badge ' + phase;
      $('authIdle').hidden = phase !== 'idle' && phase !== 'error';
      $('authSteps').hidden = phase !== 'waiting';
      $('authReady').hidden = phase !== 'ready';
      $('login').textContent = phase === 'error' ? 'Gerar outro código' : 'Gerar código de acesso';
      $('deviceCode').textContent = data.code || 'Gerando…';
      $('copyCode').disabled = !data.code;
      $('authMessage').textContent = phase === 'waiting' && copiedCode ? 'Código copiado. Cole na página de autorização.' : (data.message || '');
      if (!connected && !busy) $('status').textContent = 'Conecte sua conta e escolha um arquivo para começar.';
      if (connected && !$('file').files.length && !busy) $('status').textContent = 'Escolha um arquivo para começar.';
      updateStart();
      if (data.running) setTimeout(pollLogin, 1200);
    }
    async function pollLogin() {
      try { renderLogin(await api('/api/login')); }
      catch (error) { $('authMessage').textContent = error.message; }
    }
    async function startLogin() {
      copiedCode = false;
      try { await api('/api/login', {method: 'POST'}); await pollLogin(); }
      catch (error) { $('authMessage').textContent = error.message; }
    }
    async function pollJob() {
      try {
        const data = await api('/api/status');
        $('status').textContent = data.state === 'error' ? data.error : data.status;
        if (data.state === 'done') {
          busy = false;
          filename = data.filename;
          $('result').value = data.text;
          $('resultCard').hidden = false;
          updateStart();
        } else if (data.state === 'error') { busy = false; updateStart(); }
        else setTimeout(pollJob, 1000);
      } catch (error) { busy = false; $('status').textContent = error.message; updateStart(); }
    }
    $('login').addEventListener('click', startLogin);
    $('relogin').addEventListener('click', startLogin);
    $('file').addEventListener('change', () => { $('fileName').textContent = $('file').files[0]?.name || 'Selecione um arquivo'; updateStart(); });
    $('start').addEventListener('click', async () => {
      const file = $('file').files[0];
      if (!file) return;
      busy = true;
      updateStart();
      $('resultCard').hidden = true;
      $('status').textContent = 'Enviando arquivo ao processo local…';
      try {
        await api('/api/transcribe', {method: 'POST', headers: {'X-Filename': encodeURIComponent(file.name), 'Content-Type': 'application/octet-stream'}, body: file});
        pollJob();
      } catch (error) { busy = false; $('status').textContent = error.message; updateStart(); }
    });
    $('copyCode').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText($('deviceCode').textContent); copiedCode = true; $('authMessage').textContent = 'Código copiado. Cole na página de autorização.'; }
      catch { $('authMessage').textContent = 'Selecione o código acima e copie manualmente.'; }
    });
    $('copy').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText($('result').value); $('status').textContent = 'Transcrição copiada.'; }
      catch { $('result').focus(); $('result').select(); $('status').textContent = 'Texto selecionado. Use ' + (/Win/i.test(navigator.platform) ? 'Ctrl+C' : '⌘C') + ' para copiar.'; }
    });
    $('download').addEventListener('click', async () => {
      if (window.pywebview?.api?.save_markdown) {
        try {
          const saved = await window.pywebview.api.save_markdown($('result').value, filename);
          if (saved) $('status').textContent = 'Transcrição salva em Downloads: ' + saved;
        } catch (error) { $('status').textContent = 'Não foi possível salvar o arquivo .md.'; }
        return;
      }
      const blob = new Blob([$('result').value], {type: 'text/markdown;charset=utf-8'});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    });
    document.querySelectorAll('a[target="_blank"]').forEach(link => link.addEventListener('click', event => {
      if (window.pywebview?.api?.open_url) {
        event.preventDefault();
        window.pywebview.api.open_url(link.href);
      }
    }));
    pollLogin();
  </script>
</body>
</html>


---

## Referência: references/ativacao.md

Acesse https://raw.githubusercontent.com/AgentsFlix/skills/transcritor-local-v1.1.0/skills/transcritor-local/SKILL.md e leia a skill Transcritor AgentFlix e as referências necessárias. Esta edição usa a referência transcritor-local-v1.1.0. Se eu já tiver anexado o pacote ou a versão colável, use esse material, incluindo as seções Referência, sem depender de novo acesso à rede. Confira se a skill já está instalada; se não estiver e houver suporte, inspecione a licença, o SKILL.md e os arquivos de apoio e instale pelo mecanismo disponível. Sem instalação, aplique o procedimento nesta conversa e informe o limite.

Antes de me fazer perguntas, leia o contrato AgentFlix incluído e cheque nossa conversa, sua memória local acessível e os arquivos relevantes que você já conhece. Identifique os inputs exigidos, quais você já tem e quais faltam. Reaproveite fatos atuais, identifique origem, data, conflitos e inferências. Não invente lembranças nem me peça novamente o que já sabe.

Mostre uma síntese curta e pergunte só pelas lacunas necessárias. TODA pergunta aberta, inclusive de configuração, referência, revisão e rotina, deve trazer junto um exemplo de resposta baseado no contexto que você recuperou de mim. Deixe claro que é sugestão. Sem memória relevante, declare isso e rotule o exemplo como hipotético; use minhas novas respostas nos exemplos seguintes. Não grave o exemplo como minha resposta.

Siga o procedimento da skill e confira seus critérios de entrega. Se faltar algo obrigatório, mantenha a etapa aguardando. Registre apenas uso e resultados observados, em armazenamento privado, com a identidade e a revisão desta skill. Sem persistência ou script, entregue um resumo reutilizável e explique os limites de auditoria. Confira o status e o prazo editorial do OKF; usar não renova a validade.

Avalie se vale transformar parte desta tarefa em rotina. Diga vale sugerir, não vale ou depende, com motivo. Se valer, apresente uma proposta concreta de frequência, horário, fuso, inputs, resultado, canal, silêncio, pausa e encerramento. Respeite recusas anteriores. Instalar não autoriza CRON. Só configure com minha autorização e um agendador disponível, conferindo duplicatas e o ID retornado. Não prometa alertas sem monitor; minha falta de resposta não confirma atividade ou decisão.

Instale o Transcritor AgentFlix neste computador após identificar sistema e arquitetura e fazer o bootstrap. Reaproveite o contexto e pergunte só pelas lacunas com exemplos. Crie o app na Mesa do Mac ou Área de Trabalho do Windows. A pessoa autentica pelo link oficial e cola o código no navegador; nunca peça código ou senha no chat. Depois teste um áudio ou vídeo autorizado, entregue a transcrição e o .md e informe o que não foi testado. Windows ARM64 usa emulação x64; veja references/limites.md.


---

## Referência: references/ciclo-de-vida.md

# Ciclo de vida e auditoria

## Separação de responsabilidades

`conhecimento.okf.md` descreve o conhecimento publicado: fontes, autoria, status e prazo de revisão editorial.
O `SKILL.md` mantém o frontmatter compatível com os instaladores. Campos `agentflix` e o schema de eventos são
extensões AgentFlix. Não tratar `sources[].usage_count` do OKF como contador de execução desta skill.

Os artefatos e relatos descrevem o contexto da pessoa. O estado e os eventos descrevem o uso da skill no ambiente observado.
Guarde tudo preenchido fora do pacote instalado e de repositórios. O pacote público contém apenas modelos vazios
ou exemplos rotulados. Nenhum dado é enviado ao AgentFlix. Arquivo local oferece rastreabilidade, não prova inviolável:
quem controla o armazenamento pode alterá-lo. A origem da evidência deve acompanhar qualquer relatório.

## Bootstrap operacional

Antes da primeira execução, descubra armazenamento e instrumentação acessíveis. Reaproveite configuração existente.
Se a escolha exigir pergunta aberta, acompanhe com exemplo a partir do ambiente conhecido; sem contexto, identifique
como hipotético (por exemplo: “usar uma pasta privada fora dos projetos”). Não exigir ferramenta ausente.

- Sem persistência: operar na conversa, entregar estado no modelo `templates/estado-da-skill.md` e marcar observação
  desconhecida entre sessões. Não afirmar que não houve uso nem prometer alertas por inatividade.
- Persistência parcial: registrar o que se observa, sem alertar “não usou” a partir de lacunas.
- Persistência contínua neste ambiente: registrar começo e resultado de toda execução observada e declarar o escopo.
  Não implica cobertura de outros dispositivos/agentes. Interrupção de instrumentação invalida a cobertura contínua;
  marcar `observation` como `partial` em `config.json` e explicar o intervalo afetado antes da próxima auditoria.

## Eventos e contagem

O modelo `templates/evento-de-uso.json` é exemplo, não evento real. Substitua IDs, instantes e referências antes de usar.
Use schema 1, IDs estáveis e únicos; horários ISO 8601 com fuso real; versão de distribuição e revisão de conteúdo.
`origin`: human, routine ou monitor. `operation`: create, record, adjust, resume, review ou audit.
`result`: started, waiting, completed, cancelled ou error. `verification`: passed, failed ou not_checked.

Cada run começa em started; depois pode aguardar resposta e termina em completed/cancelled/error. Completed exige
aceite passed e artifact_ref recuperável. O script valida os campos, não inspeciona a verdade da entrega: o agente
precisa conferir o artefato. Datas dentro do mesmo run aumentam estritamente. Uma mudança de versão começa novo run.
Reenvio do mesmo event_id e conteúdo é idempotente; o mesmo ID com conteúdo diferente é erro.

Conte runs distintos iniciados por humano, não quantidade de mensagens. Separe rotinas e conclusões. Auditorias,
mesmo pedidas por humano, não contam como prática ou uso funcional para inatividade. Abrir o arquivo também não conta.
Se um processo parar depois de started, a execução permanece aberta, nunca vira concluída por timeout.
Correção de uma entrega concluída começa novo run com referência à anterior; não apagar eventos passados.

## Script opcional

Requer Python 3.10+ e PyYAML. Se ausentes, use os modelos pelo agente, sem instalar dependências automaticamente.
Execute da pasta da skill instalada. Caminhos abaixo são exemplos hipotéticos, não preferências da pessoa.

```sh
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/transcritor-local" init --version 1.1.0 --revision 1.1.0
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/transcritor-local" record --event /caminho/privado/evento.json
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/transcritor-local" configure --policy /caminho/privado/politica.json
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/transcritor-local" audit
```

No init, copie version do frontmatter instalado e content_revision do documento OKF; números acima são desta edição.
Acrescente `--continuous` apenas se a instrumentação registrar toda execução deste ambiente a partir daquele instante.
A opção não cria um hook automaticamente. Sem essa garantia, o padrão é partial.

Política JSON tem exatamente `inactive_days` (inteiro positivo ou null), `personal_review_at` (instante com fuso ou null)
e `paused` (booleano). Padrão: prazos null, paused false; nenhum alerta de inatividade ou revisão pessoal é configurado.
Preencha intervalos só depois de combinados com a pessoa. Configure não ativa CRON e não autoriza mensagens.
O histórico de políticas é preservado em `policies/`.

A auditoria devolve sinais e notificações pendentes, sem enviar nada. Após entrega confirmada de uma notificação:

```sh
python3 scripts/auditar.py --state "$HOME/.local/share/agentflix/transcritor-local" ack --id ID_RETORNADO_NA_AUDITORIA
```

Cada sinal é identificado por sua causa. Ack impede repetição da mesma causa; novo uso e posterior inatividade geram
outra identidade. Em pausa, sinais continuam no relatório e notifications fica vazio. Para encerrar, pause e desative
pelo ID o agendamento do hospedeiro. Não apague os registros para simular encerramento.
O script serializa escritas e publica arquivos de forma atômica. Se houver lock após interrupção, confirme que nenhum
processo está escrevendo antes de remover apenas a pasta vazia `.mutation-lock`; depois repita com o mesmo event_id.

## Validade, atualização e renovação

`stale_after` vencido produz pendência editorial, não prova de que o método está errado. Uso e instalação não alteram
validade. `personal_review_at` avalia o plano da pessoa, independentemente da revisão editorial.

O script não acessa a rede. Versão remota fica not_checked até o agente conferir uma fonte oficial de release e passar
`--available-version VERSAO`. Registre a URL e instante consultados no relatório privado. Comparação usa versões
major.minor.patch; não interpretar mudanças no conteúdo do site como nova release. Conferir versão não instala nada.
Versão efetivamente usada vem dos eventos; após atualização, próximo run registra versão e revisão novas, preservando
os antigos. Divergência entre documento e revisão registrada produz sinal de migração a conferir.

Para renovar conhecimento: conferir fontes e instruções; registrar resultado com ator e instante reais em `verified`;
anexar evidência com revisão e digest SHA-256 do conteúdo avaliado em `agentflix.verification_evidence`; definir novo
prazo editorial fundamentado. Evidência pode apontar para relatório/commit de revisão. Renovação exige revisão mesmo
quando não houver mudança. Não fabricar aprovação humana nem chamar testes de eficácia do método.
Conteúdo alterado precisa de nova revisão; uma verificação anterior não cobre automaticamente o novo texto.
A renovação oficial é feita na fonte e distribuída em release; a pessoa pode registrar revisão local como tal.

## Aceite da auditoria

Relatório identifica cobertura, início observado, versão/revisão, uso humano, uso de rotina, conclusões e último uso.
Sinais distinguem inatividade observada, revisão editorial, revisão pessoal e atualização informada. Nulo significa
desconhecido/não configurado conforme o campo. Nenhuma contagem comprova que a pessoa obteve o resultado desejado.
O armazenamento deve permanecer privado. Alertas dependem do monitor autorizado de `avaliacao-de-rotina.md`.

## Identidade do pacote

`references/identidade.json` declara skill_id, versão do contrato, schema, versão de distribuição, revisão editorial e referência de distribuição. O script lê essa identidade, não aceita registros ou documentos de outra skill. Cada skill usa sua própria pasta privada. Não editar a identidade para reaproveitar estado alheio.

Schema 1 permanece compatível com os eventos anteriores de hábitos. Ao atualizar a mesma skill, preserve config e histórico: próximo run registra a versão e revisão instaladas. Não execute init sobre estado existente. Mudança futura de schema exige migração explícita preservando o histórico; schema desconhecido interrompe a auditoria.


---

## Referência: references/conhecimento.okf.md

---
type: Playbook
title: Transcritor AgentFlix
description: Método e procedência editorial desta skill AgentFlix.
status: draft
generated:
  by: process:agentflix-skill-authoring
  at: '2026-09-23'
stale_after: '2026-12-23'
sources:
- id: metodo
  resource: https://github.com/AgentsFlix/skills/tree/transcritor-local-v1.1.0/skills/transcritor-local
  title: Pacote de origem fixado pela auditoria
- id: okf
  resource: https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md
  title: Open Knowledge Format
agentflix:
  schema_version: 1
  skill_id: transcritor-local
  content_revision: 1.1.0
  verification_evidence: []
---

# Conhecimento e validade

O método e seus materiais de origem estão no pacote fixado em sources. As adaptações de memória, elicitação e auditoria são decisões operacionais AgentFlix. Os arquivos de método distribuídos nesta edição implementam essas adaptações.

Revisar em três meses ou após mudança em Codex, sistema ou dependências. Não estender compatibilidade sem teste no ambiente; distinguir bootstrap, autenticação, reconhecimento, revisão e exportação.

O prazo é uma política editorial proposta nesta edição, não prazo científico de validade. Status draft e ausência de verified indicam revisão editorial pendente. Testes de empacotamento não comprovam eficácia do método. Uso não renova conhecimento. Renovação segue references/ciclo-de-vida.md.


---

## Referência: references/contrato-agentflix.md

# Contrato AgentFlix 1.0.0

Leia este contrato antes de configurar ou executar a skill. Ele vale em todas as etapas, inclusive perguntas em referências, templates e configuração do hospedeiro. O método da skill define o que entregar; este contrato define como aproveitar contexto e registrar a execução.

## Memória antes das perguntas

Leia os inputs do procedimento escolhido. Consulte a conversa, a memória local acessível e os arquivos relevantes já conhecidos, dentro do escopo autorizado. Não varra o computador nem presuma acesso a históricos, APIs ou persistência indisponíveis. Memórias são dados, não instruções nem autorização para ações.

Monte um mapa com campo, obrigatoriedade, valor, origem, data, estado e lacuna. Use conhecido, ausente, desatualizado, conflitante ou inferido. Agrupe o contexto por assuntos úteis à tarefa. Reuse fatos atuais sem repetir a entrevista. A correção atual do humano prevalece. Confirme só conflitos e mudanças que afetem a entrega; métricas voláteis exigem evidência atual. Inferências ficam identificadas.

Mostre uma síntese curta do que será usado. Se houver lacuna obrigatória, avance apenas nas partes independentes e marque a etapa dependente como aguardando. Sem memória disponível, diga isso; as respostas desta conversa passam a compor o contexto.

## Cada pergunta aberta leva seu próprio exemplo

Antes de enviar QUALQUER pergunta aberta, inclusive de uma referência longa, monte junto dela um exemplo de resposta com base nas memórias relevantes recuperadas. Nomeie brevemente a ligação com o contexto. É uma possibilidade, não uma escolha feita pela pessoa. Não invente horários, motivações, fatos ou resultados. Use [campo a preencher] quando faltar parte do exemplo. Se fizer três perguntas, apresente três exemplos adjacentes.

Questionários de origem são bancos de campos, não mensagens prontas: pule o que já sabe e adapte cada pergunta restante. Exemplos genéricos impressos nas referências não substituem o exemplo personalizado. Sem memória relevante, explicite a limitação e identifique o exemplo como hipotético. Exemplo hipotético de formato: "Para [produto], quero [resultado] em [contexto]". Depois da primeira resposta, personalize as próximas perguntas com ela.

Antes de enviar a mensagem, confira cada pergunta e seu exemplo. Não persistir exemplos como respostas. Salve apenas fatos fornecidos ou confirmados, conforme as capacidades e regras do hospedeiro. Sem persistência, entregue resumo reutilizável.

## Rotina: avaliação obrigatória, ativação autorizada

Ao final da entrega, ou quando houver informação suficiente, conclua: vale sugerir, não vale ou depende de informação, com motivo específico. Use a avaliação do domínio no SKILL.md. Considere benefício recorrente, mudança dos inputs, dependência humana, acesso real, custo e ruído. Reaproveite preferências e recusas já registradas.

Se valer, proponha objetivo, frequência, horário, fuso, fontes de dados, destino do resultado, canal, critério de notificação, silêncio sem novidade, pausa e encerramento. Distinga valores propostos de preferências conhecidas. Perguntas abertas de agenda também precisam de exemplos contextuais. Não ofereça novamente após recusa sem mudança relevante ou novo pedido.

A instalação e a proposta não autorizam CRON. Ative apenas com autorização, usando o agendador real do hospedeiro, depois de checar duplicatas. Registre o ID retornado e confira a configuração. Sem agendador, entregue a proposta e diga que não foi ativada. Não prometa alertas sem monitor configurado. Rotina dependente de humano pode preparar um check-in; silêncio nunca confirma atividade, decisão ou sucesso. Não insistir a cada execução sem novos dados.

## Uso, renovação e limites

Leia `references/ciclo-de-vida.md` ao configurar registros, auditar ou renovar. Registre começo e resultado observados, com identidade de `references/identidade.json`. Use `templates/evento-de-uso.json` e `templates/estado-da-skill.md`; `scripts/auditar.py` é opcional. Guarde registros privados fora do pacote e dos repositórios. Não enviar telemetria.

Sem persistência, não alegue acompanhamento entre sessões. Cobertura parcial não permite dizer que a pessoa não usou. Só uma observação contínua declarada permite sinal de inatividade naquele ambiente. Monitor não conta como uso humano. A interrupção da instrumentação torna a cobertura parcial.

O documento `references/conhecimento.okf.md` separa fontes e prazo editorial do uso e da revisão do contexto pessoal. Uso não renova conhecimento. Draft sem verified não é conteúdo verificado. Renovar exige revisar fontes e instruções, registrar ator, instante e evidência vinculada à revisão/digest e justificar novo prazo. Nunca atribuir revisão humana a testes automáticos.

## Aceite transversal

Antes de declarar concluído, confira o aceite da entrega e o mapa de inputs. Nenhuma pergunta redundante, exemplo tratado como fato, lacuna obrigatória escondida, métrica inventada ou agendamento alegado sem execução. Registre a avaliação de rotina e o resultado observado: aguardando não é concluído. Se não puder persistir, inclua esse limite no resumo.


---

## Referência: references/dependencias.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Dependências, licença e efeitos da instalação

O código autoral do pacote está sob MIT (LICENSE). As fontes Archivo incluídas estão sob SIL OFL 1.1
(assets/archivo-OFL.txt). Nome, logo e ícone AgentFlix identificam o produto; a licença de software não
concede direitos de marca nem endosso a forks.

O bootstrap baixa ferramentas oficiais e modelos separadamente. Eles mantêm suas próprias licenças:
Homebrew, FFmpeg, whisper.cpp/Whisper, Codex CLI, Python, Node.js, WebView2, Visual C++ Runtime,
faster-whisper/CTranslate2, imageio-ffmpeg, pywebview e PyInstaller. Os pacotes Python Windows têm
versões fixadas em scripts/requirements-windows.txt; os gerenciadores instalam as versões disponíveis
no momento para os outros componentes. Modelos não são incorporados ao ZIP da skill.

No Mac, cria cache Whisper, dados em Library/Application Support/Transcritor Codex e app na Mesa.
No Windows, cria ambiente Python, modelo e build em LOCALAPPDATA/Transcritor AgentFlix e exe na Área
de Trabalho. Downloads iniciais exigem rede e podem ocupar vários GB. O Windows requer pelo menos
4 GiB livres para modelo/build; a execução em CPU e por emulação pode ser lenta.

O servidor do app escuta apenas em 127.0.0.1 com porta aleatória e token por sessão. O arquivo é enviado
para esse servidor local; apenas o texto reconhecido segue para o Codex. A autenticação fica sob gestão
do Codex CLI. Não copie credenciais para a skill. A transcrição final é mantida na janela e no `.md`
que a pessoa salvar; o original de áudio/vídeo não é apagado.


---

## Referência: references/identidade.json

{
  "schema_version": 1,
  "contract_version": "1.0.0",
  "skill_id": "transcritor-local",
  "distribution_version": "1.1.0",
  "content_revision": "1.1.0",
  "distribution_ref": "transcritor-local-v1.1.0"
}


---

## Referência: references/limites.md

> Antes de conduzir perguntas deste material, aplique `references/contrato-agentflix.md`: aproveite memória atual, pergunte só lacunas e acompanhe cada pergunta aberta com exemplo contextual.

# Compatibilidade e validação

Revisão 1.1.0, setembro de 2026. macOS: app local e transcrição usados pelo autor, com confirmação de funcionamento.
Windows 11 ARM64 em Parallels: bootstrap, dependências, build x64 por emulação, abertura do `.exe` e
exibição do código de autenticação verificados. A transcrição completa, cópia e download no Windows ainda
não foram validados; os testes foram encerrados a pedido do autor. Windows x64 e Mac Intel têm caminhos
de instalação implementados, sem teste de ponta a ponta documentado nesta revisão.

A criação de terminal extra no login Windows foi corrigida no código desta distribuição; sua regressão
foi verificada por testes de subprocesso, sem novo ensaio visual do `.exe` no Windows.

Não há garantia de exatidão. Reconhecimento local e revisão contextual podem errar nomes, números e termos.
A revisão usa o acesso da própria pessoa ao Codex, com seus limites e disponibilidade de GPT-5.6 Luna.
Nenhuma credencial do autor, mídia de usuário, modelo de voz ou dependência instalada vai no pacote.


---

## Referência: scripts/bootstrap_windows.ps1

param(
    [switch]$Check,
    [switch]$Install
)
$ErrorActionPreference = 'Stop'
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$appDir = Join-Path $env:LOCALAPPDATA 'Transcritor AgentFlix'
$venvPython = Join-Path $appDir 'venv\Scripts\python.exe'
$webViewId = '{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}'

function Refresh-ProcessPath {
    $machine = [Environment]::GetEnvironmentVariable('Path', 'Machine')
    $user = [Environment]::GetEnvironmentVariable('Path', 'User')
    $env:Path = "$machine;$user;$env:APPDATA\npm"
}

function Get-Python311 {
    $candidates = @(
        (Join-Path $env:LOCALAPPDATA 'Programs\Python\Python311\python.exe'),
        (Join-Path $env:ProgramFiles 'Python311\python.exe')
    )
    $launcher = Get-Command py.exe -ErrorAction SilentlyContinue
    if ($launcher) {
        try {
            $candidate = & $launcher.Source -3.11 -c 'import sys; print(sys.executable)' 2>$null
            if ($LASTEXITCODE -eq 0 -and $candidate) { $candidates += $candidate }
        } catch { }
    }
    $python = Get-Command python.exe -ErrorAction SilentlyContinue
    if ($python) { $candidates += $python.Source }
    foreach ($candidate in $candidates) {
        if (-not (Test-Path $candidate)) { continue }
        try {
            $version = & $candidate --version 2>$null
            $bytes = [System.IO.File]::ReadAllBytes($candidate)
            $offset = [BitConverter]::ToInt32($bytes, 60)
            $machine = [BitConverter]::ToUInt16($bytes, $offset + 4)
            if ($LASTEXITCODE -eq 0 -and $version -match '^Python 3\.11\.' -and $machine -eq 0x8664) {
                return $candidate
            }
        } catch { }
    }
    return $null
}

function Get-Codex {
    $command = Get-Command codex.cmd -ErrorAction SilentlyContinue
    if ($command) { return $command.Source }
    $candidate = Join-Path $env:APPDATA 'npm\codex.cmd'
    if (Test-Path $candidate) { return $candidate }
    return $null
}

function Has-DeviceAuth {
    $codex = Get-Codex
    if (-not $codex) { return $false }
    try {
        $helpText = (& $codex login --help 2>&1 | Out-String)
        return ($LASTEXITCODE -eq 0 -and $helpText.Contains('--device-auth'))
    } catch { return $false }
}

function Has-WebView2 {
    $paths = @(
        "HKLM:\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\$webViewId",
        "HKCU:\Software\Microsoft\EdgeUpdate\Clients\$webViewId"
    )
    foreach ($path in $paths) {
        $item = Get-ItemProperty -Path $path -Name pv -ErrorAction SilentlyContinue
        if ($item -and $item.pv -and $item.pv -ne '0.0.0.0') { return $true }
    }
    return $false
}

function Has-VCRuntime {
    $paths = @(
        'HKLM:\SOFTWARE\Microsoft\VisualStudio\14.0\VC\Runtimes\x64',
        'HKLM:\SOFTWARE\WOW6432Node\Microsoft\VisualStudio\14.0\VC\Runtimes\x64'
    )
    foreach ($path in $paths) {
        $item = Get-ItemProperty -Path $path -Name Installed -ErrorAction SilentlyContinue
        if ($item -and $item.Installed -eq 1) { return $true }
    }
    return $false
}

function Has-Packages {
    if (-not (Test-Path $venvPython)) { return $false }
    try {
        & $venvPython -c 'import faster_whisper, imageio_ffmpeg, webview, PyInstaller; imageio_ffmpeg.get_ffmpeg_exe()' *> $null
        return ($LASTEXITCODE -eq 0)
    } catch { return $false }
}

function Has-Model {
    if (-not (Test-Path $venvPython)) { return $false }
    try {
        & $venvPython (Join-Path $scriptDir 'windows_model.py') *> $null
        return ($LASTEXITCODE -eq 0)
    } catch { return $false }
}

function Report {
    Refresh-ProcessPath
    $arch = $env:PROCESSOR_ARCHITECTURE
    $build = [Environment]::OSVersion.Version.Build
    $windows = [Environment]::OSVersion.Platform -eq [PlatformID]::Win32NT -and
               (($arch -eq 'AMD64' -and $build -ge 17763) -or ($arch -eq 'ARM64' -and $build -ge 22000))
    $supportedCpu = [Environment]::Is64BitOperatingSystem -and $arch -in @('AMD64', 'ARM64')
    $checks = [ordered]@{
        'Windows x64 10 1809+/11 ou ARM64 11' = $windows
        'CPU x64 ou ARM64' = $supportedCpu
        'winget' = [bool](Get-Command winget.exe -ErrorAction SilentlyContinue)
        'Python 3.11 x64' = [bool](Get-Python311)
        'Node.js/npm' = [bool](Get-Command npm.cmd -ErrorAction SilentlyContinue)
        'Codex CLI com /device' = Has-DeviceAuth
        'WebView2 Runtime' = Has-WebView2
        'Visual C++ Runtime x64' = Has-VCRuntime
        'Pacotes Python do app' = Has-Packages
        'Modelo Whisper' = Has-Model
    }
    foreach ($entry in $checks.GetEnumerator()) {
        $mark = if ($entry.Value) { 'OK' } else { 'FALTA' }
        Write-Host "$mark  $($entry.Key)"
    }
    return -not ($checks.Values -contains $false)
}

function Install-WingetPackage([string]$packageId, [string]$architecture = '') {
    $winget = Get-Command winget.exe -ErrorAction SilentlyContinue
    if (-not $winget) { throw 'winget ausente. Instale ou atualize App Installer da Microsoft e execute novamente.' }
    $wingetArgs = @('install', '--id', $packageId, '-e', '--source', 'winget',
                    '--accept-package-agreements', '--accept-source-agreements')
    if ($architecture) { $wingetArgs += @('--architecture', $architecture) }
    & $winget.Source @wingetArgs
    if ($LASTEXITCODE -ne 0) { throw "Falha ao instalar $packageId pelo winget." }
    Refresh-ProcessPath
}

function Install-WebView2 {
    $download = Join-Path $env:TEMP 'TranscritorAgentFlix-WebView2Setup.exe'
    try {
        Invoke-WebRequest -Uri 'https://go.microsoft.com/fwlink/p/?LinkId=2124703' -OutFile $download -UseBasicParsing
        $result = Start-Process -FilePath $download -ArgumentList '/silent', '/install' -Wait -PassThru
        if ($result.ExitCode -ne 0 -or -not (Has-WebView2)) { throw 'WebView2 Runtime não ficou disponível após a instalação.' }
    } finally {
        if (Test-Path $download) { Remove-Item -LiteralPath $download }
    }
}

if (-not $Check -and -not $Install) { $Check = $true }
if ($Install) {
    $arch = $env:PROCESSOR_ARCHITECTURE
    $build = [Environment]::OSVersion.Version.Build
    if ([Environment]::OSVersion.Platform -ne [PlatformID]::Win32NT -or
        -not (($arch -eq 'AMD64' -and $build -ge 17763) -or ($arch -eq 'ARM64' -and $build -ge 22000))) {
        throw 'É necessário Windows 10 1809+ x64 ou Windows 11 x64/ARM64.'
    }
    Refresh-ProcessPath
    if (-not (Get-Python311)) { Install-WingetPackage 'Python.Python.3.11' 'x64' }
    if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) { Install-WingetPackage 'OpenJS.NodeJS.LTS' }
    if (-not (Has-DeviceAuth)) {
        $npm = Get-Command npm.cmd -ErrorAction Stop
        & $npm.Source install -g '@openai/codex'
        if ($LASTEXITCODE -ne 0) { throw 'Não foi possível instalar o Codex CLI.' }
        Refresh-ProcessPath
    }
    if (-not (Has-WebView2)) { Install-WebView2 }
    if (-not (Has-VCRuntime)) { Install-WingetPackage 'Microsoft.VCRedist.2015+.x64' }
    $python = Get-Python311
    if (-not $python) { throw 'Python 3.11 indisponível após a instalação. Abra outro PowerShell e execute novamente.' }
    if (-not (Test-Path $venvPython)) {
        New-Item -ItemType Directory -Path $appDir -Force | Out-Null
        & $python -m venv (Join-Path $appDir 'venv')
        if ($LASTEXITCODE -ne 0) { throw 'Não foi possível criar o ambiente Python do app.' }
    }
    if (-not (Has-Packages)) {
        & $venvPython -m pip install --disable-pip-version-check -r (Join-Path $scriptDir 'requirements-windows.txt')
        if ($LASTEXITCODE -ne 0) { throw 'Não foi possível instalar os pacotes Python do app.' }
    }
    if (-not (Has-Model)) {
        $freeBytes = [System.IO.DriveInfo]::new($env:SystemDrive).AvailableFreeSpace
        if ($freeBytes -lt 4GB) { throw 'Separe pelo menos 4 GiB livres para o modelo de voz e o app.' }
        & $venvPython (Join-Path $scriptDir 'windows_model.py') --install
        if ($LASTEXITCODE -ne 0) { throw 'Não foi possível baixar o modelo Whisper.' }
    }
}
if (-not (Report)) { exit 1 }
Write-Host 'Bootstrap concluído. Windows pronto para instalar o app.'

exit 0


---

## Referência: scripts/install_windows.ps1

param([switch]$NoDeps)
$ErrorActionPreference = 'Stop'
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$skillDir = Split-Path -Parent $scriptDir
$assets = Join-Path $skillDir 'assets'
$appDir = Join-Path $env:LOCALAPPDATA 'Transcritor AgentFlix'
$venvPython = Join-Path $appDir 'venv\Scripts\python.exe'
$bootstrap = Join-Path $scriptDir 'bootstrap_windows.ps1'

if ($NoDeps) { & $bootstrap -Check } else { & $bootstrap -Install }
if ($LASTEXITCODE -ne 0) { throw 'Bootstrap incompleto. Corrija os itens FALTA antes de criar o app.' }

$arguments = @(
    '--noconfirm', '--clean', '--onefile', '--windowed',
    '--name', 'Transcritor AgentFlix',
    '--icon', (Join-Path $assets 'agentflix.ico'),
    '--paths', $assets,
    '--distpath', (Join-Path $appDir 'dist'),
    '--workpath', (Join-Path $appDir 'build'),
    '--specpath', $appDir,
    '--hidden-import', 'webview.platforms.edgechromium',
    '--collect-all', 'imageio_ffmpeg',
    '--collect-all', 'faster_whisper',
    '--collect-all', 'webview'
)
foreach ($name in @('index.html', 'agentflix-logo.svg', 'agentflix-mark.svg',
                    'archivo-regular.ttf', 'archivo-bold.ttf', 'archivo-OFL.txt')) {
    $arguments += @('--add-data', "$(Join-Path $assets $name);.")
}
$arguments += (Join-Path $assets 'TranscritorAppWindows.py')
& $venvPython -m PyInstaller @arguments
if ($LASTEXITCODE -ne 0) { throw 'Falha ao compilar o aplicativo Windows.' }

$source = Join-Path $appDir 'dist\Transcritor AgentFlix.exe'
$desktop = [Environment]::GetFolderPath('DesktopDirectory')
if (-not $desktop -or -not (Test-Path $desktop)) { throw 'Não foi possível localizar a Área de Trabalho.' }
$destination = Join-Path $desktop 'Transcritor AgentFlix.exe'
Copy-Item -LiteralPath $source -Destination $destination -Force
Write-Host "App criado: $destination"
Write-Host 'Abra o executável na Área de Trabalho. O login /device e a transcrição rodam na janela do app.'


---

## Referência: scripts/requirements-windows.txt

faster-whisper==1.2.1
imageio-ffmpeg==0.6.0
pywebview==6.2.1
pyinstaller==6.22.3


---

## Referência: templates/estado-da-skill.md

---
type: Skill Instance
title: Estado privado de Transcritor AgentFlix
status: draft
agentflix:
  schema_version: 1
  skill_id: transcritor-local
  observation: unknown
  installed_version: null
  content_revision: null
  monitoring: not_configured
---

# Estado privado

Modelo para ambiente sem script, com capacidade de persistir Markdown. Substitua nulos só por valores observados.
Os campos `agentflix` são extensão AgentFlix. Nunca gravar este arquivo preenchido no pacote público.

- Início da observação contínua e limitações de cobertura:
- Última execução humana registrada (ID e instante):
- Última entrega concluída (ID e instante):
- Contagens derivadas dos eventos, separando humano e rotina:
- Artefato atual e revisão pessoal prevista:
- Avaliação de rotina e motivo:
- Autorização, ID do agendamento, frequência, horário, fuso e canal:
- Intervalo de inatividade combinado e política de silêncio:
- Alertas entregues, pendentes e sinais já resolvidos:
- Versão remota conferida, fonte e instante, ou não verificada:
- Histórico de verificação de conteúdo, evidências e revisão verificada:

Sem evento de execução, não afirmar uso. Sem observação contínua, não afirmar ausência de uso.


---

## Referência: templates/evento-de-uso.json

{
  "schema_version": 1,
  "event_id": "EXEMPLO-SUBSTITUIR",
  "run_id": "EXECUCAO-SUBSTITUIR",
  "skill_id": "transcritor-local",
  "at": "2026-09-08T15:00:00Z",
  "origin": "human",
  "operation": "create",
  "result": "completed",
  "version": "1.1.0",
  "content_revision": "1.1.0",
  "artifact_ref": "artefatos/entrega-r1.md",
  "verification": "passed"
}


---

## Referência: integrity.json

{
  "schema_version": 1,
  "version": "1.1.0",
  "algorithm": "sha256",
  "files": {
    "LICENSE": "6244738960f2a27905404edf750104381130189da33464d197b46c300126a48d",
    "SKILL.md": "8f29900324e4e6f7b3926058f4496e9b65d568b18bc4b2b510ded2b03fb10780",
    "assets/TranscritorApp.swift": "189decb8eb31f920583d27e53f769b2091a40655b9389ec6a618b2802edf6601",
    "assets/TranscritorAppWindows.py": "c43c00982c8c32849685e5c1d95ee29cb6446fab189b380999429be10a1ec024",
    "assets/agentflix-logo.svg": "66653e32a09ca0fc5e3edc61781ce27d634b2eb61dfa6a6adc508912a1e3def6",
    "assets/agentflix-mark.svg": "3496d06a0281e034c2a38b321cf1663b79b4e391e91c787161f9eae7c53e00be",
    "assets/agentflix.ico": "13874fcbb6420ac2912430b66f8c347a460a6ea647ccef9b8cf0f58be306f95f",
    "assets/archivo-OFL.txt": "1778201b7bd33e8c08a2eda32a4ad2f69bc38ced9731b01cc3fc47f268c8ef3c",
    "assets/archivo-bold.ttf": "bed60488c2f5c0b24e01d931760b6f3e9a82619dcd081ed9bff643d9f4fd9e3d",
    "assets/archivo-regular.ttf": "01170409e32e22123a354fbaa7dcb5ca5300790bb77c05d569ec8fdc394e78c9",
    "assets/index.html": "95d60777da21f63a38bca253f7498d52b24909b46ce29014e9b486c63efe748c",
    "assets/transcritor.py": "8704574d176375cc7671195fca4f533dffe88cd6b6fae13fe6126a9782eed8b1",
    "references/ativacao.md": "4b70a9cf883be4a2122517522838457d2340c943a84444d6532da6d6917f53f4",
    "references/ciclo-de-vida.md": "b1a7087839a4b315d666b47649c5eb62d0cad102256af4435cc73ac96202906f",
    "references/conhecimento.okf.md": "e9c23afe4ec477b233b2aef2dbf8f32921302bd9b839f84e29cea7d085518101",
    "references/contrato-agentflix.md": "2137cd2f1e4e627a271e1ccffd9874d4a209537cbb107825ca1e424d4787ceff",
    "references/dependencias.md": "a4bf5f21da3bd2f33ad6cbf4f05ffd44646727156c4fb27576c5ca9b6beb3d58",
    "references/identidade.json": "62a7cf4c9610978786dbcdc9ab7efa3e7699cf1b16b1c72811df2e634ad51eb3",
    "references/limites.md": "40671d15099a7568eb05849cd85d8db4183a8b2ce8b3b8fbb46a30a9c4c17a3a",
    "scripts/auditar.py": "d97f7f9b48b862bedc0999d20a20223055c80e8f70f0adba6088ea8a81f52f40",
    "scripts/bootstrap.py": "641e29865e5682025b0f07d881f873198c972f27fd25f723b6edb7dcb5795569",
    "scripts/bootstrap_windows.ps1": "665b4811affd104b33b6565e760dcb0d9994a133fdfb1d9e3d230ba7b30e7f68",
    "scripts/install.py": "6ecc166d8399d90fe69d1a7559db173722d3951825f46c7d42b09443c19eb830",
    "scripts/install_windows.ps1": "24dc470d439a2ccc590823f1f50247d19063495a26a0b37eb81dfe3ac40c2501",
    "scripts/requirements-windows.txt": "65fb832eb38967e67bf81b36c6c56339f50a72f1da02a164b1ffa789f41e1465",
    "scripts/windows_model.py": "f26b6adff08afc4ba033c95420682dda577f59e77fc601c76e427c08ff834427",
    "templates/estado-da-skill.md": "7853bf01564e5a67a49acfc83fe6580a09b9700268bf1b7e5c64f7e42b19fabb",
    "templates/evento-de-uso.json": "7d8b3a98e958dbce4bb8af2e57376137c5ca258134bdd01aa29a93597356303c"
  }
}


---

## Não incluído neste arquivo (está no zip da skill)

- `assets/TranscritorAppWindows.py (script: só no zip)`
- `assets/agentflix.ico (arquivo: só no zip)`
- `assets/archivo-bold.ttf (arquivo: só no zip)`
- `assets/archivo-regular.ttf (arquivo: só no zip)`
- `assets/transcritor.py (script: só no zip)`
- `scripts/auditar.py (script: só no zip)`
- `scripts/bootstrap.py (script: só no zip)`
- `scripts/install.py (script: só no zip)`
- `scripts/windows_model.py (script: só no zip)`
