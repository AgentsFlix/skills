#!/usr/bin/env python3
"""Download and verify the Windows CPU speech model."""
import argparse
import os
from pathlib import Path
import sys


def model_dir():
    local = Path(os.environ.get("LOCALAPPDATA", str(Path.home() / "AppData/Local")))
    return local / "Transcritor AgentFlix/model"


def ready(path):
    weight = path / "model.bin"
    return weight.is_file() and weight.stat().st_size > 100_000_000 and (path / "config.json").is_file()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--install", action="store_true")
    args = parser.parse_args()
    path = model_dir()
    if not ready(path) and args.install:
        from faster_whisper.utils import download_model
        path.mkdir(parents=True, exist_ok=True)
        download_model("large-v3-turbo", output_dir=str(path))
    if not ready(path):
        print("FALTA  Modelo Whisper para Windows")
        return 1
    print("OK  Modelo Whisper para Windows")
    return 0


if __name__ == "__main__":
    sys.exit(main())
