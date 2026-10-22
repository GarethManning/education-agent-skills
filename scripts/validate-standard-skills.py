#!/usr/bin/env python3
"""Run the pinned official validator against the generated portable profile only."""
import argparse
import json
import sys
import xml.etree.ElementTree as ET
from importlib.metadata import version
from pathlib import Path

from skills_ref import to_prompt, validate


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("profile", nargs="?", type=Path, default=Path("dist/agent-skills"))
    parser.add_argument("--expected", type=int, default=165)
    args = parser.parse_args()
    receipt = json.loads((args.profile / ".education-agent-skills-export.json").read_text())
    if receipt.get("profile") != "education-agent-skills-portable-1":
        parser.error("Expected exporter-owned portable profile, not extended sources")
    paths = sorted(p for p in args.profile.iterdir() if p.is_dir())
    failures = {str(path): errors for path in paths if (errors := validate(path))}
    if len(paths) != args.expected or receipt["skills"] != args.expected or failures:
        print(json.dumps({"count": len(paths), "expected": args.expected, "failures": failures}, indent=2))
        return 1
    prompt = ET.fromstring(to_prompt(paths))
    names = [skill.findtext("name").strip() for skill in prompt.findall("skill")]
    if len(names) != args.expected or set(names) != {p.name for p in paths}:
        parser.error("Official to-prompt did not cover every exported skill uniquely")
    print(f"skills-ref {version('skills-ref')}: validate {len(paths)}/{args.expected}; to-prompt {len(names)}/{args.expected}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
