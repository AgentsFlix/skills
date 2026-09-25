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
import venv

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "modules/jev-operar/scripts"))
try:
    import jev_client as jev
except ModuleNotFoundError as exc:
    if exc.name != "jev_client":
        raise
    jev = None
JevError = jev.JevError if jev is not None else ValueError


def credential_path(value=None):
    if value:
        path = Path(value).expanduser()
    elif jev is not None:
        path = jev.default_credential_path()
    else:
        config_root = os.environ.get("XDG_CONFIG_HOME")
        path = (Path(config_root).expanduser() if config_root else Path.home() / ".config") / "agentflix/jevcloud.env"
    if path.is_symlink():
        raise JevError("Credential file cannot be a symlink")
    return path


def field_status(path):
    if not path.exists():
        return {"status": "missing", "type": None, "length": 0}
    if not path.is_file():
        raise JevError("Credential path must be a regular file")
    data = path.read_text(encoding="utf-8")
    relevant = [line for line in data.splitlines() if line.strip().startswith("JEV_API_KEY")]
    exact = [line for line in relevant if line.startswith("JEV_API_KEY=")]
    if len(relevant) != len(exact) or len(exact) > 1:
        raise JevError("Malformed or duplicate JEV_API_KEY field; edit the file locally")
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
        raise JevError("Unrecognized backup; inspect locally")
    try:
        meta = json.loads(receipt.read_text())
        valid = meta == {"credential": str(path.absolute()), "sha256": hashlib.sha256(backup.read_bytes()).hexdigest()}
    except (OSError, ValueError):
        valid = False
    if not valid:
        raise JevError("Unrecognized backup; inspect locally")
    backup.unlink()
    receipt.unlink()


def prepare(path, execute=False):
    status = field_status(path)
    if status["status"] in {"valid", "empty"}:
        if execute and path.stat().st_mode & 0o077:
            path.chmod(path.stat().st_mode & 0o700)
        return {**status, "action": "reuse", "writes": 0}
    if status["status"] == "invalid":
        raise JevError("Invalid existing value; edit the file locally")
    if not execute:
        return {**status, "action": "append_empty_field" if path.exists() else "create_empty_file", "writes": 0}
    path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    if path.exists():
        backup, receipt = backup_paths(path)
        if backup.exists() or receipt.exists() or backup.is_symlink() or receipt.is_symlink():
            raise JevError("Previous onboarding backup exists; verify or clean-backup first")
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
        raise JevError("Save a valid JEV_API_KEY field locally, then run verify")
    jev.api_key(path)
    if path.stat().st_mode & 0o077:
        path.chmod(path.stat().st_mode & 0o700)
    cleanup_backup(path)
    return {**status, "authenticated": False, "backup_removed": True}


def open_editor(path, execute=False):
    if not execute:
        return {"action": "open_editor", "credential_file": str(path), "executed": False}
    if not path.is_file():
        raise JevError("Run prepare --execute first")
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
                "modules/youtube-jev-copy/GUIDE.md", "modules/jev-copy-cambiador/GUIDE.md",
                "modules/jev-operar/scripts/jev_client.py", "modules/youtube-jev-copy/scripts/collect.py",
                "scripts/setup.py", "scripts/integrity.py", "requirements.txt"]
    missing = [name for name in required if not (ROOT / name).is_file()]
    integrity_status = "source_without_manifest" if (ROOT / "profile.json").is_file() else "missing_manifest"
    if (ROOT / "integrity.json").exists():
        try:
            spec = importlib.util.spec_from_file_location("jev_package_integrity", ROOT / "scripts/integrity.py")
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
            module.verify(ROOT)
            integrity_status = "passed"
        except (OSError, ValueError, AttributeError, ImportError, KeyError, TypeError):
            integrity_status = "failed"
    complete = not missing and integrity_status in {"source_without_manifest", "passed"}
    supported = sys.version_info >= (3, 10)
    data_root = os.environ.get("XDG_DATA_HOME")
    dependency_environment = (jev.dependency_env_path() if jev is not None else
        (Path(data_root).expanduser() if data_root else Path.home() / ".local/share") /
        "agentflix/venvs/pesquisa-audiencia-jev")
    yt_dlp_available = bool(jev.yt_dlp_executable() if jev is not None else shutil.which("yt-dlp"))
    return {"python_supported": supported, "package_complete": complete,
            "ready_for_execution": supported and complete, "integrity": integrity_status,
            "missing_package_files": missing, "yt_dlp_available": yt_dlp_available,
            "dependency_environment": str(dependency_environment),
            "yaml_available": importlib.util.find_spec("yaml") is not None,
            "credential": field_status(path), "network_calls": 0}


def install_deps(execute=False):
    """Prepare a private virtual environment; never modify the host Python."""
    destination = jev.dependency_env_path()
    plan = {"action": "install_deps", "environment": str(destination),
            "requirements": str(ROOT / "requirements.txt"), "executed": False}
    if not execute:
        return plan
    if sys.version_info < (3, 10):
        raise JevError("Python 3.10 or newer is required")
    if not (ROOT / "requirements.txt").is_file():
        raise JevError("Package requirements are missing; reinstall the complete skill")
    destination.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    venv.EnvBuilder(with_pip=True).create(destination)
    folder = "Scripts" if os.name == "nt" else "bin"
    python = destination / folder / ("python.exe" if os.name == "nt" else "python")
    subprocess.run([str(python), "-m", "pip", "install", "--disable-pip-version-check",
                    "-r", str(ROOT / "requirements.txt")], check=True, capture_output=True, text=True)
    executable = destination / folder / ("yt-dlp.exe" if os.name == "nt" else "yt-dlp")
    if not executable.is_file() or not os.access(executable, os.X_OK):
        raise JevError("yt-dlp unavailable after dependency installation")
    version = subprocess.run([str(executable), "--version"], check=True,
                             capture_output=True, text=True).stdout.strip()
    return {**plan, "executed": True, "yt_dlp_available": True, "yt_dlp_version": version}


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    for name in ("doctor", "install-deps", "prepare", "verify", "open-editor", "probe", "clean-backup"):
        command = commands.add_parser(name)
        command.add_argument("--credential", type=Path)
        if name in ("install-deps", "prepare", "open-editor", "probe", "clean-backup"):
            command.add_argument("--execute", action="store_true")
    args = parser.parse_args(argv)
    if jev is None and args.command != "doctor":
        print(json.dumps({"status": "error", "action": args.command, "category": "package_incomplete",
                          "message": "Install the complete skill package; the internal JevCloud client is missing."}))
        return 1
    try:
        path = credential_path(args.credential)
        if args.command == "clean-backup":
            if args.execute:
                cleanup_backup(path)
            result = {"backup_cleanup_executed": args.execute}
        elif args.command == "install-deps":
            result = install_deps(args.execute)
        else:
            fn = {"doctor": doctor, "prepare": prepare, "verify": verify, "open-editor": open_editor, "probe": probe}[args.command]
            result = fn(path, args.execute) if hasattr(args, "execute") else fn(path)
        print(json.dumps(result, ensure_ascii=False))
        return 1 if result.get("control_passed") is False or result.get("ready_for_execution") is False else 0
    except (JevError, OSError, ValueError, subprocess.CalledProcessError) as exc:
        # Exceptions from parsers/editor may contain input; never echo them.
        category = "local_configuration"
        advice = "Check the local file format and permissions. Never paste the key in chat."
        if isinstance(exc, JevError) and jev is not None:
            http = re.fullmatch(r"JevCloud HTTP (\d{3}); no automatic retry", str(exc))
            if http:
                category = "authentication" if http[1] in {"401", "403"} else "provider_rejected"
                advice = "Check the key, account access and balance locally; do not retry unchanged."
            elif str(exc).startswith("Transient provider failure"):
                category, advice = "transient_provider", "Check connectivity/provider availability and retry later."
            elif str(exc).startswith("Previous onboarding backup"):
                category, advice = "pending_backup", "Run verify after saving, or clean-backup --execute when cancelling."
        elif isinstance(exc, subprocess.CalledProcessError):
            category, advice = "dependency_installation", "Dependency installation failed; check Python, network and package access locally."
        print(json.dumps({"status": "error", "action": args.command,
                          "category": category, "message": advice}))
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
