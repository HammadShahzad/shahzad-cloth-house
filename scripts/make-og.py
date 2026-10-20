"""Make the 1200x630 social preview images in public/og/ from the real shop photos.

    python3 -m pip install pillow fonttools brotli
    python3 scripts/make-og.py

Fonts are fetched from Google Fonts on each run, so nothing extra is kept in the repo.
"""
import io
import json
import pathlib
import re
import subprocess
import urllib.request

from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og"
OLD_UA = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30"

NAVY_DEEP = (10, 23, 64)
CREAM = (251, 248, 241)
GOLD = (212, 166, 87)
GOLD_LIGHT = (233, 199, 125)


def google_font(family_query: str, subset_name: str = "latin") -> io.BytesIO:
    """Download one static font file from Google Fonts and return it as TTF bytes."""
    url = f"https://fonts.googleapis.com/css2?family={family_query}"
    css = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": OLD_UA})).read().decode()
    blocks = re.findall(r"/\*\s*([\w-]+)\s*\*/\s*@font-face\s*{[^}]*?url\(([^)]+)\)", css)
    font_url = next(u for name, u in blocks if name == subset_name)
    font = TTFont(io.BytesIO(urllib.request.urlopen(font_url).read()))
    font.flavor = None
    buf = io.BytesIO()
    font.save(buf)
    buf.seek(0)
    return buf


def font(buf: io.BytesIO, size: int) -> ImageFont.FreeTypeFont:
    buf.seek(0)
    return ImageFont.truetype(io.BytesIO(buf.read()), size)


SERIF = google_font("Cormorant+Garamond:wght@600")
SERIF_ITALIC = google_font("Cormorant+Garamond:ital,wght@1,500")
SANS = google_font("Manrope:wght@700")

# Page list comes from the site's own data, via a tiny TypeScript-free extraction.
pages = json.loads(
    subprocess.check_output(
        [
            "node",
            "-e",
            """
const fs = require('fs');
const src = fs.readFileSync('app/categories.ts', 'utf8');
const photos = fs.readFileSync('app/photos.ts', 'utf8');
const photo = (k) => photos.match(new RegExp('"?' + k + '"?: \\\\{ src: shop\\\\("([^"]+)"\\\\)'))[1];
const out = [];
for (const m of src.matchAll(/slug: "([^"]+)",[\\s\\S]*?h1: "([^"]+)",[\\s\\S]*?photo: "([^"]+)",/g)) {
  out.push({ name: m[1], title: m[2][0].toUpperCase() + m[2].slice(1), photo: photo(m[3]) });
}
console.log(JSON.stringify(out));
""",
        ],
        cwd=ROOT,
    )
)
pages = [
    {"name": "home", "title": "Unstitched fabric, cut to your length", "photo": "suiting-close", "line": "Sialkot · Since 1991"},
    {"name": "order-online", "title": "Unstitched fabric online", "photo": "thaan-2", "line": "Delivered across Pakistan"},
    *[{**p, "line": "Sialkot · Delivered across Pakistan"} for p in pages],
]


def wrap(draw: ImageDraw.ImageDraw, text: str, f: ImageFont.FreeTypeFont, width: int) -> list[str]:
    lines, line = [], ""
    for word in text.split():
        test = f"{line} {word}".strip()
        if draw.textlength(test, font=f) <= width:
            line = test
        else:
            lines.append(line)
            line = word
    lines.append(line)
    return lines


def make(page: dict) -> None:
    W, H, PANEL = 1200, 630, 640
    img = Image.new("RGB", (W, H), NAVY_DEEP)

    # Photo on the right, cropped to fill.
    photo = Image.open(ROOT / "public" / "photos" / "shop" / f"{page['photo']}.jpg").convert("RGB")
    pw, ph = W - PANEL, H
    scale = max(pw / photo.width, ph / photo.height)
    photo = photo.resize((round(photo.width * scale), round(photo.height * scale)), Image.LANCZOS)
    left = (photo.width - pw) // 2
    top = (photo.height - ph) // 2
    img.paste(photo.crop((left, top, left + pw, top + ph)), (PANEL, 0))

    d = ImageDraw.Draw(img)
    d.rectangle([PANEL - 4, 0, PANEL, H], fill=GOLD)

    x = 64
    d.text((x, 70), "SHAHZAD CLOTH HOUSE", font=font(SANS, 20), fill=GOLD_LIGHT, spacing=4)
    d.rectangle([x, 108, x + 56, 110], fill=GOLD)

    size = 76
    title_font = font(SERIF, size)
    lines = wrap(d, page["title"], title_font, PANEL - x - 50)
    while len(lines) > 3:
        size -= 6
        title_font = font(SERIF, size)
        lines = wrap(d, page["title"], title_font, PANEL - x - 50)
    y = 150
    for line in lines:
        d.text((x, y), line, font=title_font, fill=CREAM)
        y += round(size * 1.05)
    d.text((x, y + 14), page["line"], font=font(SERIF_ITALIC, 40), fill=GOLD_LIGHT)

    d.text((x, H - 92), "Order on WhatsApp · 0337 4515580", font=font(SANS, 22), fill=CREAM)
    d.text((x, H - 58), "shahzadclothhouse.com", font=font(SANS, 18), fill=(190, 196, 214))

    OUT.mkdir(parents=True, exist_ok=True)
    img.save(OUT / f"{page['name']}.jpg", quality=84, optimize=True, progressive=True)
    print("public/og/" + page["name"] + ".jpg")


for p in pages:
    make(p)
