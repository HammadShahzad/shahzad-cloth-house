# AGENTS.md: Shahzad Cloth House (shahzadclothhouse.com)

> Same content as CLAUDE.md. Keep both in sync.

> This app follows the **SaaS SOP**: https://github.com/HammadShahzad/saas-sop
> Read the SOP's `RULES.md` first. This file adds the facts for this site. Where they differ: this file wins for facts, the SOP wins for process.

## What this app is
The website of Shahzad Cloth House, a family fabric shop in Sialkot (founded 1991, proprietor Shahzad Ahmad). It is a **marketing / lead-gen site**: no sign-up, no payments, no database. Every order starts as a WhatsApp message or phone call (0337 4515580), and the shop delivers across Pakistan. Goal: leads, rankings and sales, for national "online" fabric searches and Sialkot searches, plus bulk uniform orders. Brief: `docs/APP-BRIEF.md`. Pages and feature boxes: `docs/REQUIREMENTS.md`. Scope: `docs/ROADMAP.md`. Current state: `docs/PROJECT-STATE.md`.

## Stack
- Framework: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. framer-motion + lenis only in `/v3`.
- Every page is static (prerendered at build). No API routes, no database, no auth, no env vars.
- Hosting: Vercel (Git integration: `main` = production, every PR gets a preview behind Vercel login). Domain shahzadclothhouse.com (http and www redirect to the https apex).
- Tracking: Google Tag Manager `GTM-TMHQCD9X` (GA4 and Clarity live inside GTM). Search Console `sc-domain:shahzadclothhouse.com`. IndexNow key file in `public/`.

## Environments
Setup: lean = production only (Vercel PR previews are used to check changes). Health data: no.
| Env | Branch | URL |
|---|---|---|
| local (dev + QA) | feature branches, develop | localhost:3000 |
| PR preview | any PR branch | Vercel preview link on the PR (behind Vercel login) |
| production | main | https://shahzadclothhouse.com |
Details: `docs/ENVIRONMENTS.md`.

## Commands
```bash
npm ci                             # install
npm run dev                        # run locally (turbopack)
bash scripts/ci.sh                 # typecheck, smoke test, build: must pass before PR (pre-push hook runs it)
bash scripts/install-hooks.sh      # once per clone
bash scripts/deploy.sh production  # on main after the release PR merged: waits for Vercel's production deploy. No GitHub Actions.
python3 scripts/make-og.py         # rebuild the per-page OG images in public/og/
python3 scripts/subset-urdu.py     # rebuild the Urdu font subset after adding Urdu text
```
There is no `lint` script yet: Next 16 removed `next lint` (see the SOP setup card on the board).

## Rules for this app
- Branch from `develop`: `<type>/<issue#>-<slug>`. PR into `develop` with `Closes #N`, then a release PR `develop` → `main`. Never push to `main` or `develop`.
- **No Claude attribution:** never add `Co-Authored-By: Claude`, `Claude-Session:` or "Generated with Claude Code" to commits or PRs, and never commit as `Claude <noreply@anthropic.com>` (author: Hammad Shahzad <54584402+HammadShahzad@users.noreply.github.com>). Squash merges: delete `Co-authored-by` lines from the message.
- **Photos:** only real shop photos (Rohan's set). Hammad rejected AI images and CSS swatches. Match each photo to what it really shows. Use a new file name when replacing a photo (Vercel image cache). Photos left out on purpose: another brand's labels, the sale-price sign, the empty counter, duplicates.
- **Look:** professional, not cartoonish. Navy `#15235C` / deep `#0A1740` and gold `#D4A657`; Cormorant Garamond (display), Manrope (body), Noto Nastaliq Urdu subset.
- **Copy changes:** bump `CONTENT_UPDATED` in `app/site.ts` (sitemap lastmod). New public page: add it to the sitemap, then submit it for indexing (`saas-gsc-submit-indexing`).
- **Business facts** (phone, address, hours, GTM id) live only in `app/site.ts`. Old number 0300 6143230 is retired (it still shows on the shopfront signboard photo).
- `/v3` is an old design experiment with a wrong address (Kashmiri Mohalla); it stays noindex. The real address is Chowk Adda Pasrooriyan.
- Keyword and title changes need Hammad's verdict (no Google Ads / Keyword Planner data).
- Any change near WhatsApp / call links: check that `generate_lead` still fires in GA4 Realtime after deploy.

## Read before you build
No API and no database: `docs/API.md` and `docs/DATABASE.md` say so. Read `docs/REQUIREMENTS.md` (pages = feature boxes) and `docs/history/DECISIONS.md`. A new folder or box updates the Map below.

## Map
| Folder / file | What it is | Feature box |
|---|---|---|
| `app/site.ts` | Business facts: name, phone, WhatsApp link builder, address, hours, GTM id, socials | Base |
| `app/layout.tsx`, `app/components/chrome.tsx` | Root layout, header, footer, fonts | Base |
| `app/components/ui.tsx`, `gallery.tsx`, `order.tsx` | Shared UI: FAQ, arrows, photo gallery, WhatsApp order blocks | Base |
| `app/page.tsx` | Home page | Home |
| `app/categories.ts`, `app/[category]/page.tsx` | Category pages (ladies, gents, lawn, winter, wedding, uniform): copy, guide, FAQ, gallery | Category pages |
| `app/photos.ts`, `public/photos/shop/` | Shop photo catalogue (alt, caption, focus point) | Photos |
| `app/order-online/page.tsx` | How ordering on WhatsApp and delivery work | Order online |
| `app/guides.ts`, `app/guides/` | Fabric guides (SEO content), index + one page per guide | Guides |
| `app/seo.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `public/og/` | JSON-LD schema, sitemap, robots, manifest, OG images | SEO |
| `app/components/analytics.tsx` | GTM snippet + `generate_lead` / `get_directions` click events | Tracking |
| `app/privacy/page.tsx` | Privacy page (noindex) | Tracking |
| `app/v3/` | Old design experiment, noindex | (none) |
| `scripts/make-og.py`, `scripts/subset-urdu.py` | OG image and Urdu font builders | Base |
| `tests/smoke.test.mjs` | Smoke test: photos and OG images exist, WhatsApp and GTM set | Base |

## Standard modules status
| Module | Status |
|---|---|
| Stripe billing | n/a (no online payments; orders settled on WhatsApp) |
| Admin console | n/a (no users or data) |
| Lifecycle emails | n/a (no sign-ups) |
| MCP + feedback | n/a (no MCP server) |
| Analytics (GTM/GA4/Clarity/GSC) | done (PR #7) |
| Lead capture | partial: leads are WhatsApp / call taps, tracked as `generate_lead`; no forms to store |
| Search indexing | partial (sitemap + IndexNow key; see board) |
| Blog system | n/a: hand-written `/guides` instead (PR #8) |
| Monthly SEO | running (November plan shipped in PR #8) |
| Meta messaging | not asked yet (optional) |

## Before you finish a session
Update `docs/PROJECT-STATE.md`, comment on the issue, and report: done / left / what the owner must do.
