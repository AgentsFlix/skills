#!/usr/bin/env python3
"""Instala uma cópia portátil da skill task, sem alterar hooks ou credenciais."""

import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import sys
import tempfile

SOURCE = Path(__file__).resolve().parents[1] / "ferramentas" / "task"
FILES = ("SKILL.md", "agents/openai.yaml")
MARKER = ".agentflix-install.json"


def fingerprints(directory):
    result = {}
    for path in directory.rglob("*"):
        if path.is_symlink():
            raise ValueError(f"Link simbólico não será substituído: {path}")
        if path.is_file() and path != directory / MARKER:
            result[path.relative_to(directory).as_posix()] = hashlib.sha256(path.read_bytes()).hexdigest()
    return result


def install(source, target, check=False):
    desired = {name: hashlib.sha256((source / name).read_bytes()).hexdigest() for name in FILES}
    if target.is_symlink():
        raise ValueError(f"Destino é link simbólico; preservado: {target}")
    if target.exists():
        if not target.is_dir():
            raise ValueError(f"Destino não é pasta; preservado: {target}")
        current = fingerprints(target)
        if current == desired:
            return "atual"
        if check:
            raise ValueError(f"Instalação diferente da fonte: {target}")
        marker = target / MARKER
        if not marker.is_file() or marker.is_symlink():
            raise ValueError(f"Skill existente não gerenciada; preservada: {target}")
        receipt = json.loads(marker.read_text())
        if receipt.get("installer") != "agentflix-task-v1" or receipt.get("files") != current:
            raise ValueError(f"Instalação editada localmente; preservada: {target}")
    elif check:
        raise ValueError(f"Skill não instalada: {target}")

    target.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".task-install-", dir=target.parent) as temp:
        stage = Path(temp) / "new"
        stage.mkdir()
        for name in FILES:
            dest = stage / name
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(source / name, dest)
        (stage / MARKER).write_text(json.dumps({"installer": "agentflix-task-v1", "files": desired}, indent=2) + "\n")
        previous = Path(temp) / "previous"
        if target.exists():
            target.rename(previous)
        try:
            stage.rename(target)
        except OSError:
            if previous.exists():
                previous.rename(target)
            raise
    return "instalada"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--agent", action="append", choices=("codex", "claude", "hermes"), required=True)
    parser.add_argument("--home", type=Path, default=Path.home(), help="Pasta do usuário de destino")
    parser.add_argument("--hermes-home", type=Path, help="Perfil Hermes; padrão HERMES_HOME ou ~/.hermes")
    parser.add_argument("--check", action="store_true", help="Conferir sem instalar ou atualizar")
    args = parser.parse_args()
    task_home = args.home.expanduser().resolve()
    hermes_home = args.hermes_home or Path(os.environ.get("HERMES_HOME", str(task_home / ".hermes")))
    targets = {
        "codex": task_home / ".agents/skills/task",
        "claude": task_home / ".claude/skills/task",
        "hermes": hermes_home.expanduser().resolve() / "skills/task",
    }
    try:
        for agent in dict.fromkeys(args.agent):
            target = targets[agent]
            print(f"{agent}: {install(SOURCE, target, args.check)} ({target})")
    except (OSError, ValueError) as exc:
        print(str(exc), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
