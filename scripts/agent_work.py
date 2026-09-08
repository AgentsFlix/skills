#!/usr/bin/env python3
"""AgentFlix: start, status, check e finish de uma tarefa isolada. Só biblioteca padrão."""
from __future__ import annotations
import argparse
from contextlib import contextmanager
import fcntl
import json
import os
from pathlib import Path
import re
import subprocess
import sys

VERSION = 1


def run(*args, cwd=None):
    result = subprocess.run(args, cwd=cwd, text=True, capture_output=True)
    if result.returncode:
        raise RuntimeError(result.stderr.strip() or result.stdout.strip() or f'{args[0]} falhou')
    return result.stdout.strip()


def git(root, *args):
    return run('git', '-C', str(root), *args)


def root_at(path):
    return Path(git(path, 'rev-parse', '--show-toplevel')).resolve()


def common_at(root):
    p = Path(git(root, 'rev-parse', '--git-common-dir'))
    return (root / p).resolve() if not p.is_absolute() else p.resolve()


def scope_path(value):
    p = Path(value)
    if p.is_absolute() or '..' in p.parts or '.git' in p.parts or any(c in value for c in '*?['):
        raise ValueError('Escopo deve ser arquivo ou pasta relativa, sem .., .git ou glob.')
    return p.as_posix().rstrip('/') or '.'


def overlaps(a, b):
    return a == '.' or b == '.' or a == b or a.startswith(b + '/') or b.startswith(a + '/')


@contextmanager
def registry(root):
    folder = common_at(root) / 'agent-work'
    folder.mkdir(exist_ok=True)
    with (folder / 'lock').open('a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        file = folder / 'tasks.json'
        tasks = json.loads(file.read_text()) if file.exists() else {}
        yield tasks
        tmp = folder / 'tasks.json.tmp'
        tmp.write_text(json.dumps(tasks, ensure_ascii=False, indent=2) + '\n')
        os.replace(tmp, file)


def start(root, args):
    if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', args.slug):
        raise ValueError('Use slug em minúsculas, com hífens: player-retomar-aula.')
    branch = args.agent + '/' + args.slug
    dest = Path(args.directory).expanduser().resolve()
    if dest.exists() or root == dest or root in dest.parents:
        raise ValueError('A pasta nova deve estar fora do checkout e ainda não existir.')
    scopes = [scope_path(s) for s in args.scope]
    # Fetch falha fechado: nunca começar silenciosamente de uma referência velha.
    git(root, 'fetch', 'origin')
    with registry(root) as tasks:
        if branch in tasks:
            raise ValueError('Tarefa já registrada. Use status e continue na pasta existente.')
        for name, task in tasks.items():
            if task['state'] == 'active' and any(overlaps(a, b) for a in scopes for b in task['scopes']):
                raise ValueError(f'Escopo reservado por {name}, em {task["directory"]}. Coordene antes de editar.')
        base = git(root, 'rev-parse', 'origin/main')
        git(root, 'worktree', 'add', '-b', branch, str(dest), base)
        tasks[branch] = dict(state='active', directory=str(dest), scopes=scopes, base=base)
    print(json.dumps(dict(branch=branch, directory=str(dest), base=base, scopes=scopes), ensure_ascii=False, indent=2))
    print('Próximo: entre nessa pasta, leia AGENTS.md e abra um PR rascunho após o primeiro commit.')


def scope(root, args):
    branch = git(root, 'branch', '--show-current')
    scopes = [scope_path(s) for s in args.scope]
    with registry(root) as tasks:
        task = tasks.get(branch)
        if not task or task['state'] != 'active' or Path(task['directory']).resolve() != root:
            raise ValueError('Execute scope na pasta de uma tarefa registrada e ativa.')
        for name, other in tasks.items():
            if name != branch and other['state'] == 'active' and any(overlaps(a, b) for a in scopes for b in other['scopes']):
                raise ValueError(f'Escopo reservado por {name}. Coordene antes de alterar.')
        task['scopes'] = scopes
    print('Escopo atualizado. Registre a alteração também no PR.')


def changed(root):
    commands = [('diff', '--name-only', '-z', 'origin/main...HEAD'),
                ('diff', '--name-only', '-z', 'HEAD'),
                ('ls-files', '--others', '--exclude-standard', '-z')]
    found = set()
    for command in commands:
        found.update(x for x in git(root, *command).split('\0') if x)
    return found


def check(root, args):
    branch = git(root, 'branch', '--show-current')
    if not branch or branch in ('main', 'master'):
        raise ValueError('Edição exige uma branch de tarefa; main e HEAD destacado são só leitura.')
    git(root, 'fetch', 'origin')
    git(root, 'merge-base', '--is-ancestor', 'origin/main', 'HEAD')
    with registry(root) as tasks:
        task = tasks.get(branch)
        if not task or task['state'] != 'active' or Path(task['directory']).resolve() != root:
            raise ValueError('Tarefa sem registro ativo nesta pasta. Use start para entregas novas; veja a migração no contrato.')
        outside = [p for p in sorted(changed(root)) if not any(overlaps(p, s) for s in task['scopes'])]
        if outside:
            raise ValueError('Mudanças fora do escopo reservado: ' + ', '.join(outside))
    git(root, 'diff', '--check')
    git(root, 'diff', '--cached', '--check')
    print('Branch atualizada, pasta própria e arquivos dentro do escopo. Rode também os testes do repositório.')


def finish(root, args):
    # Encerrar apenas pelo checkout de controle, nunca pela pasta que será removida.
    with registry(root) as tasks:
        task = tasks.get(args.branch)
        if not task or task['state'] != 'active':
            raise ValueError('Tarefa ativa não encontrada.')
        dest = Path(task['directory']).resolve()
        if root == dest or dest in Path.cwd().resolve().parents:
            raise ValueError('Execute finish pelo checkout de controle, fora da pasta da tarefa.')
        if git(dest, 'branch', '--show-current') != args.branch:
            raise ValueError('A pasta não está mais na branch registrada.')
        # --ignored evita apagar caches, .env ou arquivos locais esquecidos.
        if git(dest, 'status', '--porcelain', '--untracked-files=all', '--ignored'):
            raise ValueError('A pasta ainda contém mudanças ou arquivos locais, inclusive ignorados. Preserve-os antes de encerrar.')
        pr = json.loads(run('gh', 'pr', 'view', str(args.pr), '--json',
                            'state,headRefName,headRefOid,baseRefName,mergeCommit,url', cwd=dest))
        sha = git(dest, 'rev-parse', 'HEAD')
        if pr['state'] != 'MERGED' or pr['headRefName'] != args.branch or pr['baseRefName'] != 'main' or pr['headRefOid'] != sha:
            raise ValueError('O PR precisa estar integrado na main com exatamente o HEAD desta tarefa.')
        git(root, 'fetch', 'origin')
        git(root, 'merge-base', '--is-ancestor', pr['mergeCommit']['oid'], 'origin/main')
        # Preserva o tip original: squash não mantém os commits da branch como ancestrais.
        archive = 'refs/archive/agent-work/' + args.branch
        git(root, 'update-ref', archive, sha)
        git(root, 'worktree', 'remove', str(dest))
        # compare-and-delete: nunca apaga se outro processo avançou a branch.
        git(root, 'update-ref', '-d', 'refs/heads/' + args.branch, sha)
        task.update(state='finished', pr=pr['url'], archived_ref=archive)
    print('Tarefa encerrada. Escopo liberado e commits originais preservados em ' + archive)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo', default='.')
    sub = parser.add_subparsers(dest='command', required=True)
    p = sub.add_parser('start')
    p.add_argument('slug'); p.add_argument('--agent', choices=['codex', 'hermes', 'claude'], default='codex')
    p.add_argument('--dir', dest='directory', required=True)
    p.add_argument('--scope', action='append', required=True, help='Arquivo ou pasta relativa; repetir para outros caminhos.')
    sub.add_parser('status'); sub.add_parser('check')
    p = sub.add_parser('scope'); p.add_argument('--scope', action='append', required=True)
    p = sub.add_parser('finish'); p.add_argument('branch'); p.add_argument('--pr', type=int, required=True)
    args = parser.parse_args()
    try:
        root = root_at(args.repo)
        if args.command == 'status':
            with registry(root) as tasks:
                print(json.dumps(tasks, ensure_ascii=False, indent=2))
            print(git(root, 'worktree', 'list'))
        else:
            globals()[args.command](root, args)
    except (RuntimeError, ValueError, OSError) as exc:
        parser.exit(1, str(exc) + '\n')


if __name__ == '__main__':
    main()
