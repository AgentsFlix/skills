#!/usr/bin/env python3
"""Local credential onboarding. Values never enter output or process arguments."""
import argparse
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "modules/jev-operar/scripts"))
import jev_client as jev


def credential_path(value=None):
    path = Path(value).expanduser() if value else jev.default_credential_path()
    if path.is_symlink():
        raise jev.JevError("Credential file cannot be a symlink")
    return path


def field_status(path):
    if not path.exists():
        return {"status": "missing", "type": None, "length": 0}
    if not path.is_file():
        raise jev.JevError("Credential path must be a regular file")
    data = path.read_text(encoding="utf-8")
    relevant = [line for line in data.splitlines() if line.strip().startswith("JEV_API_KEY")]
    exact = [line for line in relevant if line.startswith("JEV_API_KEY=")]
    if len(relevant) != len(exact) or len(exact) > 1:
        raise jev.JevError("Malformed or duplicate JEV_API_KEY field; edit the file locally")
    value = exact[0].partition("=")[2].strip() if exact else ""
    return {"status": "valid" if 20 <= len(value) <= 4096 else "empty" if exact and not value else "missing" if not exact else "invalid",
            "type": "str" if exact else None, "length": len(value)}


def backup_paths(path):
    return (path.with_name("." + path.name + ".agentflix-backup"),
            path.with_name("." + path.name + ".agentflix-backup.json"))


def exclusive_private(path, data):
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
    with os.fdopen(fd, "wb") as stream:
        stream.write(data)


def cleanup_backup(path):
    backup, receipt = backup_paths(path)
    if not backup.exists() and not receipt.exists():
        return
    if backup.is_symlink() or receipt.is_symlink() or not receipt.is_file():
        raise jev.JevError("Unrecognized backup; inspect locally")
    try:
        meta = json.loads(receipt.read_text())
        valid = meta == {"credential": str(path.absolute()), "sha256": hashlib.sha256(backup.read_bytes()).hexdigest()}
    except (OSError, ValueError):
        valid = False
    if not valid:
        raise jev.JevError("Unrecognized backup; inspect locally")
    backup.unlink()
    receipt.unlink()


def prepare(path, execute=False):
    status = field_status(path)
    if status["status"] in {"valid", "empty"}:
        if execute and path.stat().st_mode & 0o077:
            path.chmod(path.stat().st_mode & 0o700)
        return {**status, "action": "reuse", "writes": 0}
    if status["status"] == "invalid":
        raise jev.JevError("Invalid existing value; edit the file locally")
    if not execute:
        return {**status, "action": "append_empty_field" if path.exists() else "create_empty_file", "writes": 0}
    path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    if path.exists():
        backup, receipt = backup_paths(path)
        if backup.exists() or receipt.exists() or backup.is_symlink() or receipt.is_symlink():
            raise jev.JevError("Previous onboarding backup exists; verify or clean-backup first")
        original = path.read_bytes()
        exclusive_private(backup, original)
        try:
            exclusive_private(receipt, json.dumps({"credential": str(path.absolute()),
                "sha256": hashlib.sha256(original).hexdigest()}).encode())
            # Append bytes only. Never reserialize unrelated credentials/comments.
            with path.open("ab") as stream:
                stream.write((b"\n" if original and not original.endswith(b"\n") else b"") + b"JEV_API_KEY=\n")
            path.chmod(0o600)
        except Exception:
            backup.unlink(missing_ok=True)
            receipt.unlink(missing_ok=True)
            raise
    else:
        exclusive_private(path, b"# AgentFlix / JevCloud. Paste the key locally after =\nJEV_API_KEY=\n")
    return {**field_status(path), "action": "prepared", "writes": 1, "credential_file": str(path)}


def verify(path):
    status = field_status(path)
    if status["status"] != "valid":
        raise jev.JevError("Save a valid JEV_API_KEY field locally, then run verify")
    jev.api_key(path)
    if path.stat().st_mode & 0o077:
        path.chmod(path.stat().st_mode & 0o700)
    cleanup_backup(path)
    return {**status, "authenticated": False, "backup_removed": True}


def open_editor(path, execute=False):
    if not execute:
        return {"action": "open_editor", "credential_file": str(path), "executed": False}
    if not path.is_file():
        raise jev.JevError("Run prepare --execute first")
    # Restrict permissions before the user types any credential.
    if path.stat().st_mode & 0o077:
        path.chmod(path.stat().st_mode & 0o700)
    if sys.platform == "darwin":
        command = ["open", "-e", str(path.absolute())]
    elif os.name == "nt":
        command = ["notepad.exe", str(path.absolute())]
    else:
        command = ["xdg-open", str(path.absolute())]
    subprocess.Popen(command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return {"action": "open_editor", "executed": True}


def probe(path, execute=False):
    if not execute:
        return {"action": "probe", "requests": 1, "max_attempts": 3, "executed": False}
    payload = jev.build_payload([{"id": "setup-control", "comment": "I want to learn how to bake bread."}],
        {"topic": {"type": "choice", "instructions": "Which topic does this comment explicitly discuss?",
                   "criteria": {"bread": "Learning to bake bread", "astronomy": "Studying stars"}}})
    response, timing = jev.decide(payload, jev.api_key(path))
    passed = response["answers"]["r0__topic"]["choice"] == "bread"
    return {"status": "passed" if passed else "control_failed", "authenticated": True,
            "schema_valid": True, "model": response["model"], "control_passed": passed, **timing}


def doctor(path):
    required = ["SKILL.md", "modules/jev-operar/GUIDE.md", "modules/jev-cerne/GUIDE.md",
                "modules/youtube-jev-copy/GUIDE.md", "modules/jev-copy-cambiador/GUIDE.md"]
    return {"python_supported": sys.version_info >= (3, 10), "package_complete": all((ROOT / f).is_file() for f in required),
            "yt_dlp_available": bool(shutil.which("yt-dlp")), "yaml_available": importlib.util.find_spec("yaml") is not None,
            "credential": field_status(path), "network_calls": 0}


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    for name in ("doctor", "prepare", "verify", "open-editor", "probe", "clean-backup"):
        command = commands.add_parser(name)
        command.add_argument("--credential", type=Path)
        if name in ("prepare", "open-editor", "probe", "clean-backup"):
            command.add_argument("--execute", action="store_true")
    args = parser.parse_args(argv)
    try:
        path = credential_path(args.credential)
        if args.command == "clean-backup":
            if args.execute:
                cleanup_backup(path)
            result = {"backup_cleanup_executed": args.execute}
        else:
            fn = {"doctor": doctor, "prepare": prepare, "verify": verify, "open-editor": open_editor, "probe": probe}[args.command]
            result = fn(path, args.execute) if hasattr(args, "execute") else fn(path)
        print(json.dumps(result, ensure_ascii=False))
        return 1 if result.get("control_passed") is False else 0
    except (jev.JevError, OSError, ValueError) as exc:
        # Exceptions from parsers/editor may contain input; never echo them.
        category = "local_configuration"
        advice = "Check the local file format and permissions. Never paste the key in chat."
        if isinstance(exc, jev.JevError):
            http = re.fullmatch(r"JevCloud HTTP (\d{3}); no automatic retry", str(exc))
            if http:
                category = "authentication" if http[1] in {"401", "403"} else "provider_rejected"
                advice = "Check the key, account access and balance locally; do not retry unchanged."
            elif str(exc).startswith("Transient provider failure"):
                category, advice = "transient_provider", "Check connectivity/provider availability and retry later."
            elif str(exc).startswith("Previous onboarding backup"):
                category, advice = "pending_backup", "Run verify after saving, or clean-backup --execute when cancelling."
        print(json.dumps({"status": "error", "action": args.command,
                          "category": category, "message": advice}))
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
