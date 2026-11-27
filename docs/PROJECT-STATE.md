# Project state: Shahzad Cloth House (shahzadclothhouse.com)

> The living "where are we" file. Every person and agent updates it at the end of a working session. Newest notes at the top of the log.

**Board:** being set up (link added here when it exists)  ·  **SOP phase:** 08 Maintenance (live site; small v1.1 changes go through 04 → 07)  ·  **On SOP since:** 2026-11-27  ·  **Current release:** pre-SOP on production (`main` 3959d98), v1.1 in progress

## Summary (keep under 10 lines)
- What works on production: home, 6 category pages, order-online, 7 guides, privacy; WhatsApp + call on every page; GTM/GA4/Clarity with `generate_lead`; sitemap (16 URLs), IndexNow key. All pages indexed (17 Nov check).
- In progress: PR #10 (boski, latha, raw silk pages), waiting on Hammad's review.
- Blocked: shalwar kameez guide title rewrite (Hammad's verdict); "Shahzad Fabrics" alternate name (Hammad's answer); close-up photos (Rohan).
- Next up: SOP setup gaps (lint, branch protection, Actions off, hook), December SEO plan.

## Environments
| Env | URL | Deployed version | Healthy? |
|---|---|---|---|
| local | localhost:3000 | develop | `scripts/ci.sh` green 2026-11-27 |
| PR preview | Vercel link on each PR | per PR | |
| production | https://shahzadclothhouse.com | 3959d98 (PR #7, 2026-11-03) | yes (last checked 2026-11-17 in Search Console) |

## Standard modules
| Module | Status | Notes |
|---|---|---|
| Stripe billing | n/a | no online payments |
| Admin console | n/a | no users or data |
| Lifecycle emails | n/a | no sign-ups |
| MCP + feedback | n/a | no MCP server |
| Analytics | done | PR #7; Clarity's GA integration not switched on |
| Lead capture | partial | leads are WhatsApp / call taps; nothing to store |
| Search indexing | partial | sitemap + IndexNow key; Bing Webmaster Tools not checked |
| Blog | n/a | hand-written `/guides` (PR #8) |
| Monthly SEO | running | November shipped; December due |

## Known risks / tech debt
- P3: no ESLint (Next 16 removed `next lint`).
- P3: no branch protection on `main` / `develop`; GitHub Actions not switched off in settings (no workflows exist).
- P3: `/v3` still deployed (noindex) with the old address.

## Audit (2026-11-27, joining mid-project)
- By: Claude for Hammad
- Starting point: `main` at 3959d98 = production
- Findings: no secrets, no env vars, no database, no API routes; every page static (`next build`: 23 static pages); no `.github/workflows`; `npm run lint` broken on Next 16; build cache file was tracked; no branch protection; old stale feature branches still on GitHub.

## Log
- 2026-11-27 Claude for Hammad: applied the SaaS SOP. Created `develop` from `main`. SOP setup PR adds CLAUDE.md, docs, history backfill, local CI + deploy check, smoke test. Next: board set up and filled on Hammad's Mac; then the gap cards.
