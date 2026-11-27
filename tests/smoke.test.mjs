// Smoke test for local CI (scripts/ci.sh). No test framework: Node's built-in runner.
// Catches the mistakes that break the live site quietly: a photo or OG image that
// isn't in public/, or the WhatsApp / GTM settings going missing.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
const exists = (p) => existsSync(new URL(`../${p}`, import.meta.url));

test("every shop photo in app/photos.ts exists in public/photos/shop", () => {
  const files = [...read("app/photos.ts").matchAll(/shop\("([^"]+)"\)/g)].map((m) => m[1]);
  assert.ok(files.length > 10, "expected the photo list to be found");
  const missing = files.filter((f) => !exists(`public/photos/shop/${f}.jpg`));
  assert.deepEqual(missing, []);
});

test("every category page has its OG image", () => {
  const slugs = [...read("app/categories.ts").matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]);
  assert.ok(slugs.length >= 6, "expected the category list to be found");
  const missing = slugs.filter((s) => !exists(`public/og/${s}.jpg`));
  assert.deepEqual(missing, []);
});

test("WhatsApp number and GTM container are set", () => {
  const site = read("app/site.ts");
  assert.match(site, /WHATSAPP_INTL = "92\d{10}"/);
  assert.match(site, /GTM_ID = "GTM-[A-Z0-9]+"/);
});
