#!/usr/bin/env python3
"""Collect publicly retrievable YouTube comments, with coverage and private provenance."""
import argparse
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile
import time
from urllib.parse import parse_qs, urlencode, urlparse

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT.parent / "jev-operar/scripts"))
import jev_client as jev


def video_id(url):
    parsed = urlparse(url)
    if parsed.scheme != "https" or parsed.hostname not in {"youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"}:
        raise jev.JevError("Only HTTPS YouTube video URLs are accepted")
    value = parsed.path.strip("/") if parsed.hostname == "youtu.be" else parse_qs(parsed.query).get("v", [""])[0]
    if not re.fullmatch(r"[A-Za-z0-9_-]{11}", value):
        raise jev.JevError("Expected a single video URL with an 11-character id")
    return value


def sources_from(path):
    sources = jev.read_json(path)
    if not isinstance(sources, list) or not sources:
        raise jev.JevError("sources.json must contain a nonempty list")
    result, seen = [], set()
    for source in sources:
        if not isinstance(source, dict) or not isinstance(source.get("url"), str):
            raise jev.JevError("Invalid source object")
        vid = video_id(source["url"])
        if vid in seen:
            continue
        seen.add(vid)
        priority = source.get("priority", "other")
        if priority not in {"tedx", "ted", "other"}:
            raise jev.JevError("Source priority must be tedx, ted or other")
        result.append({**source, "source_id": vid, "url": "https://www.youtube.com/watch?" + urlencode({"v": vid}), "priority": priority})
    # Keep the editorial order supplied by the caller; source type is metadata.
    return result


def redact(text):
    text = re.sub(r"\b[\w.+-]+@[\w-]+(?:\.[\w-]+)+\b", "[email]", text)
    text = re.sub(r"https?://\S+|www\.\S+", "[url]", text, flags=re.I)
    text = re.sub(r"(?<!\w)(?:\+?\d[\d(). -]{7,}\d)(?!\w)", "[phone]", text)
    return re.sub(r"(?<!\w)@[\w.-]+", "[handle]", text)


def local_id(vid, cid):
    return "c_" + hashlib.sha256((vid + ":" + cid).encode()).hexdigest()[:24]


def normalize(info, source):
    if not isinstance(info, dict) or (info.get("id") is not None and info["id"] != source["source_id"]):
        raise jev.JevError("Extractor source ID does not match requested video")
    comments = info.get("comments") or []
    if not isinstance(comments, list):
        raise jev.JevError("Invalid comments field from extractor")
    by_id = {str(c["id"]): c for c in comments if isinstance(c, dict) and c.get("id")}
    records, provenance, seen = [], [], set()
    dropped_empty, repeated_id = 0, 0
    timestamp = datetime.now(timezone.utc).isoformat()
    for index, comment in enumerate(comments):
        if not isinstance(comment, dict) or not isinstance(comment.get("text"), str) or not comment["text"].strip():
            dropped_empty += 1
            continue
        cid = str(comment.get("id") or f"missing_{index}")
        opaque = local_id(source["source_id"], cid)
        if opaque in seen:
            repeated_id += 1
            continue
        seen.add(opaque)
        parent = comment.get("parent")
        is_reply = parent not in (None, "root")
        parent_comment = by_id.get(str(parent), {}) if is_reply else {}
        clean = redact(comment["text"].strip())
        record = {"id": opaque, "comment": clean, "source_id": source["source_id"],
                  "kind": "reply" if is_reply else "top_level", "language": "unknown",
                  "collected_at": timestamp, "parent_id": local_id(source["source_id"], str(parent)) if is_reply else None,
                  "context_missing": bool(is_reply and not parent_comment), "redacted": clean != comment["text"].strip()}
        if parent_comment:
            record["context"] = redact(str(parent_comment.get("text", "")))
        records.append(record)
        provenance.append({"id": opaque, "source_id": source["source_id"], "source_url": source["url"],
                           "comment_url_private": source["url"] + "&" + urlencode({"lc": cid}) if comment.get("id") else None,
                           "parent_id": record["parent_id"], "collected_at": timestamp,
                           "content_hash": jev.digest(clean), "redacted": record["redacted"],
                           "note": "Literal evidence must refer to this preserved text; masked spans are editorial redactions."})
    coverage = {"source_id": source["source_id"], "url": source["url"], "priority": source["priority"],
                "title": info.get("title"), "channel": info.get("channel"), "platform_comment_count": info.get("comment_count"),
                "returned": len(comments), "nonempty_unique_id": len(records), "dropped_empty": dropped_empty,
                "duplicate_ids": repeated_id, "replies": sum(r["kind"] == "reply" for r in records),
                "missing_parent_context": sum(r["context_missing"] for r in records), "collected_at": timestamp}
    return records, provenance, coverage


def command(executable, source, destination):
    # No max_comments: the extractor's default is unlimited, including replies.
    return [executable, "--ignore-config", "--no-playlist", "--skip-download", "--write-info-json", "--write-comments",
            "--no-progress", "--abort-on-error", "--extractor-retries", "3", "--socket-timeout", "30",
            "--extractor-args", "youtube:comment_sort=new;raise_incomplete_data=true", "-P", str(destination),
            "-o", "%(id)s.%(ext)s", "--", source["url"]]


def collect(args):
    sources = sources_from(args.sources)
    plan = {"mode": "dry-run", "sources": len(sources), "ordered_priorities": [s["priority"] for s in sources],
            "max_comments": None, "sort": "new", "include_replies": True, "guaranteed_platform_exhaustion": False}
    if not args.execute:
        return plan
    executable = jev.yt_dlp_executable()
    if not executable:
        raise jev.JevError("yt-dlp is not installed")
    version = subprocess.run([executable, "--version"], check=True, capture_output=True, text=True).stdout.strip()
    output = args.output
    fingerprint = jev.digest(sources)
    if output.exists():
        if output.is_symlink() or not args.resume or jev.read_json(output / "manifest.json").get("fingerprint") != fingerprint:
            raise jev.JevError("Output exists; resume requires the same sources manifest")
    output.mkdir(parents=True, exist_ok=True, mode=0o700)
    os.chmod(output, 0o700)
    if not (output / "manifest.json").exists():
        jev.private_write(output / "manifest.json", {**plan, "fingerprint": fingerprint, "sources": sources, "yt_dlp_version": version})
    started = time.monotonic()
    all_records, all_provenance, coverages = [], [], []
    for number, source in enumerate(sources, 1):
        folder = output / source["source_id"]
        coverage_path = folder / "coverage.json"
        old = jev.read_json(coverage_path) if coverage_path.exists() else None
        if old and old.get("status") == "completed_no_warning":
            records, provenance, coverage = jev.read_rows(folder / "corpus.jsonl"), jev.read_rows(folder / "provenance.jsonl"), old
        else:
            records, provenance = [], []
            coverage = {"source_id": source["source_id"], "url": source["url"], "status": "failed", "returned": 0}
            video_started = time.monotonic()
            with tempfile.TemporaryDirectory(prefix="jev-youtube-") as tmp:
                try:
                    result = subprocess.run(command(executable, source, Path(tmp)), capture_output=True, text=True, timeout=args.video_timeout)
                    info_path = Path(tmp) / (source["source_id"] + ".info.json")
                    warnings = [line for line in result.stderr.splitlines() if "WARNING" in line or "ERROR" in line]
                    coverage["warning_count"] = len(warnings)
                    coverage["exit_code"] = result.returncode
                    if result.returncode == 0 and info_path.exists():
                        records, provenance, extracted = normalize(jev.read_json(info_path), source)
                        coverage.update(extracted)
                        coverage["status"] = "review_warnings" if warnings else "completed_no_warning"
                        expected = coverage.get("platform_comment_count")
                        coverage["count_mismatch"] = isinstance(expected, int) and expected != len(records)
                    else:
                        coverage["error_kind"] = "extractor_failed_or_no_output"
                except subprocess.TimeoutExpired:
                    coverage["error_kind"] = "video_timeout"
                except jev.JevError:
                    coverage["error_kind"] = "invalid_extractor_output"
            coverage["wall_seconds"] = round(time.monotonic() - video_started, 3)
            coverage["yt_dlp_version"] = version
            coverage["raw_temporary_download_deleted"] = True
            if coverage["status"] == "failed" and old and (folder / "corpus.jsonl").exists():
                # An unsuccessful refresh must not destroy useful prior evidence.
                records = jev.read_rows(folder / "corpus.jsonl")
                provenance = jev.read_rows(folder / "provenance.jsonl")
                coverage["retained_previous_evidence"] = True
                coverage["previous_collected_at"] = old.get("collected_at") or old.get("previous_collected_at")
                coverage["returned"] = old.get("returned", len(records))
                coverage["note"] = "Current attempt failed; previous evidence retained, not a fresh successful collection."
            # Coverage is the commit marker, written after evidence files.
            jev.private_write(folder / "corpus.jsonl", records, lines=True)
            jev.private_write(folder / "provenance.jsonl", provenance, lines=True)
            jev.private_write(coverage_path, coverage)
        all_records.extend(records)
        all_provenance.extend(provenance)
        coverages.append(coverage)
        print(json.dumps({"source": number, "sources": len(sources), "status": coverage["status"], "received": len(records)}), file=sys.stderr, flush=True)
    jev.private_write(output / "corpus.jsonl", all_records, lines=True)
    jev.private_write(output / "provenance.jsonl", all_provenance, lines=True)
    report = {"mode": "executed", "sources": coverages, "received": sum(c.get("returned", 0) for c in coverages),
              "nonempty_unique_id": len(all_records), "failed_sources": sum(c["status"] == "failed" for c in coverages),
              "sources_with_warnings": sum(c["status"] == "review_warnings" for c in coverages),
              "session_wall_seconds": round(time.monotonic() - started, 3), "guaranteed_platform_exhaustion": False,
              "corpus_sha256": jev.digest(all_records)}
    jev.private_write(output / "coverage.json", report)
    return {key: value for key, value in report.items() if key != "sources"}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sources", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--execute", action="store_true")
    parser.add_argument("--resume", action="store_true")
    parser.add_argument("--video-timeout", type=int, default=1800)
    args = parser.parse_args()
    try:
        result = collect(args)
        print(json.dumps(result, ensure_ascii=False))
        return 2 if result.get("failed_sources", 0) else 0
    except jev.JevError as exc:
        print(str(exc), file=sys.stderr)
        return 2


if __name__ == "__main__":
    sys.exit(main())
