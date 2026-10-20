"""Build a small Noto Nastaliq Urdu font holding only the Urdu text the site uses.

The full Urdu font is about 350 KB. The site only shows a few Urdu words (the shop
name, the tagline and a label per collection), so we keep just those glyphs.

Run it again whenever you add or change Urdu text anywhere under app/:
    python3 -m pip install fonttools brotli
    python3 scripts/subset-urdu.py
"""
import pathlib
import re
import urllib.request

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "app" / "fonts" / "nastaliq-subset.woff2"
CSS = "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400"
OLD_UA = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30"

# Every Arabic-script character used in the app (plus digits and punctuation, just in case).
text = set("۰۱۲۳۴۵۶۷۸۹،۔ ")
for f in (ROOT / "app").rglob("*.ts*"):
    text |= set(re.findall(r"[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿‌‍]", f.read_text("utf-8")))

# The old user agent makes Google Fonts serve plain WOFF files split by script.
css = urllib.request.urlopen(urllib.request.Request(CSS, headers={"User-Agent": OLD_UA})).read().decode()
blocks = re.findall(r"/\*\s*([\w-]+)\s*\*/\s*@font-face\s*{[^}]*?url\(([^)]+)\)", css)
url = next(u for name, u in blocks if name == "arabic")
src = ROOT / "scripts" / ".nastaliq-arabic.woff"
src.write_bytes(urllib.request.urlopen(url).read())

opts = subset.Options()
opts.layout_features = ["*"]  # keep every joining and contextual form Nastaliq needs
opts.flavor = "woff2"
opts.name_IDs = ["*"]
font = TTFont(src)
sub = subset.Subsetter(opts)
sub.populate(text="".join(sorted(text)))
sub.subset(font)
OUT.parent.mkdir(parents=True, exist_ok=True)
font.flavor = "woff2"
font.save(OUT)
src.unlink()
print(f"{OUT.relative_to(ROOT)}: {OUT.stat().st_size // 1024} KB for {len(text)} characters")
