#!/usr/bin/env python3
"""Build claude.ai upload zips for the skills linked in .claude/skills/.

Each zip holds one folder named after the skill's frontmatter `name`, which is
what claude.ai expects. Frontmatter keys claude.ai rejects (anything outside
ALLOWED) are moved under `metadata:` in the zipped copy only; the repo copy is
left untouched.

Usage: python3 skills/build-zips.py [skill-name ...]   (default: all linked skills except my-tone)
Output: skills/zips/<name>.zip
"""

import re
import sys
import zipfile
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
LINKS = ROOT / ".claude" / "skills"
OUT = ROOT / "skills" / "zips"
ALLOWED = {"name", "description", "license", "allowed-tools", "metadata", "compatibility"}
SKIP_DIRS = {"__pycache__", "node_modules", ".git"}
SKIP_FILES = {".DS_Store"}
SKIP_NAMES = {"my-tone"}  # has its own zip next to its folder


def upload_frontmatter(text):
    match = re.match(r"^---\n(.*?)\n---\n", text, re.DOTALL)
    meta = yaml.safe_load(match.group(1))
    extra = {k: meta.pop(k) for k in list(meta) if k not in ALLOWED}
    if extra:
        meta.setdefault("metadata", {}).update({k: str(v) for k, v in extra.items()})
    name, desc = meta["name"], meta["description"].strip()
    assert re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", name) and len(name) <= 64, f"bad name {name!r}"
    assert len(desc) <= 1024 and "<" not in desc and ">" not in desc, f"{name}: bad description"
    if not extra:
        return name, text
    head = yaml.safe_dump(meta, sort_keys=False, allow_unicode=True, width=10000)
    return name, f"---\n{head}---\n{text[match.end():]}"


def build(link):
    src = link.resolve()
    name, skill_md = upload_frontmatter((src / "SKILL.md").read_text(encoding="utf-8"))
    files = [p for p in src.rglob("*") if p.is_file()
             and not SKIP_DIRS & set(p.relative_to(src).parts) and p.name not in SKIP_FILES
             and p.suffix != ".pyc"]
    nested = [p for p in files if p.name == "SKILL.md" and p.parent != src]
    assert not nested, f"{name}: extra SKILL.md files {nested}"
    OUT.mkdir(parents=True, exist_ok=True)
    target = OUT / f"{name}.zip"
    with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED) as zf:
        for p in sorted(files):
            arc = f"{name}/{p.relative_to(src).as_posix()}"
            if p == src / "SKILL.md":
                zf.writestr(arc, skill_md)
            else:
                zf.write(p, arc)
        # Vendored collections keep one LICENSE above the skill folders; ship it in each zip.
        if not (src / "LICENSE").exists() and (src.parent / "LICENSE").exists():
            zf.write(src.parent / "LICENSE", f"{name}/LICENSE")
    print(f"{target.relative_to(ROOT)}  {len(files)} files  {target.stat().st_size // 1024} KB")


if __name__ == "__main__":
    wanted = set(sys.argv[1:])
    for link in sorted(LINKS.iterdir()):
        if link.name in SKIP_NAMES or (wanted and link.name not in wanted):
            continue
        build(link)
