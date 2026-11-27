#!/usr/bin/env bash
# One-off: set up and fill the GitHub Project board for shahzad-cloth-house from the site's real state,
# when it joined the SaaS SOP (2026-11-27). Kept as history of how the board was first filled.
# Safe to re-run: `card` matches existing issues by exact title and updates them.
#
# Run on a machine where gh has the project scope (gh auth refresh -s project):
#   SOP=~/saas-sop bash docs/history/board-backfill-2026-11-27.sh
set -euo pipefail
REPO=HammadShahzad/shahzad-cloth-house
SOP="${SOP:?set SOP to a checkout of HammadShahzad/saas-sop}"
PB="$SOP/scripts/project-board.sh"
card() { bash "$PB" card "$REPO" "$@"; }
num() { gh issue list -R "$REPO" --state all -L 1000 --json number,title -q '.[] | "\(.number)\t\(.title)"' | awk -F'\t' -v t="$1" '$2==t {print $1; exit}'; }
not_needed() { # <title> <why>
  local n; n="$(num "$1")"; [ -n "$n" ] || { echo "WARN: no card '$1'"; return 0; }
  # Close as not planned first: moving to Done first would let the board's auto-close mark it "completed".
  if [ "$(gh issue view "$n" -R "$REPO" --json state -q .state)" = OPEN ]; then
    gh issue close "$n" -R "$REPO" --reason "not planned" -c "Not needed for this site: $2" >/dev/null
  fi
  bash "$PB" move "$n" Done "$REPO" >/dev/null || true
  echo "  #$n closed as not planned: $1"
}

echo "== 1. Board, labels, default branch"
bash "$PB" setup "$REPO"
bash "$SOP/templates/github/labels.sh" "$REPO" >/dev/null && echo "SOP labels created"

echo "== 2. Built work (v1.0 (built), Done)"
card --title "Base: layout, header, footer and business facts" --milestone "v1.0 (built)" --status Done --labels backfill \
  --note "Already built before the board existed." --body-file - <<'EOF'
Shared layout, header and footer, fonts, and the single file of business facts.

- [x] Root layout, header, footer (`app/layout.tsx`, `app/components/chrome.tsx`; PR #1, #6)
- [x] Business facts in one place: phone, WhatsApp link builder, address, hours, socials (`app/site.ts`)
- [x] Phone / WhatsApp 0337 4515580 everywhere (PR #5)
- [x] ClothingStore JSON-LD with address, geo and hours (`app/layout.tsx`)
- [x] Navy and gold look, Cormorant Garamond + Manrope + Urdu Nastaliq subset (PR #6)
EOF
card --title "Home page" --milestone "v1.0 (built)" --status Done --labels backfill \
  --note "Already built before the board existed." --body-file - <<'EOF'
The home page: who the shop is, collections, inside-the-shop gallery, visit and order.

- [x] Hero, collections, how ordering works, FAQ (`app/page.tsx`; PR #1, #6)
- [x] Inside-the-shop gallery with Rohan's photos (PR #4)
- [x] WhatsApp, call and directions buttons
EOF
card --title "Category pages: ladies, gents, lawn, winter, wedding, uniform" --milestone "v1.0 (built)" --status Done --labels backfill \
  --note "Already built before the board existed." --body-file - <<'EOF'
One page per fabric group, content in `app/categories.ts`, rendered by `app/[category]/page.tsx`.

- [x] /ladies-fabric, /gents-fabric, /lawn, /winter-collection, /wedding-fabric, /uniform-fabric (PR #1)
- [x] Own hero and gallery of real shop photos on each (PR #4)
- [x] Buying guide and FAQ on each (PR #1, #6)
- [x] Uniform page title for "uniform shop Sialkot" and 3 snippet rewrites (PR #8)
EOF
card --title "Photos: real shop photos across the site" --milestone "v1.0 (built)" --status Done --labels backfill \
  --note "Already built before the board existed." --body-file - <<'EOF'
Rohan's shop photos, each matched to what it shows (`app/photos.ts`, `public/photos/shop/`).

- [x] AI images replaced with real photos (PR #2)
- [x] 28 of 41 shop photos used, galleries on every page (PR #3, #4)
- [x] Left out on purpose: another brand's labels, sale-price sign, empty counter, duplicates
EOF
card --title "Order online page" --milestone "v1.0 (built)" --status Done --labels backfill \
  --note "Already built before the board existed." --body-file - <<'EOF'
How ordering on WhatsApp and delivery across Pakistan work (`app/order-online/page.tsx`).

- [x] /order-online live (PR #1, #6)
- [x] Indexed by Google (checked 2026-11-04)
EOF
card --title "Guides: /guides and 7 fabric guides" --milestone "v1.0 (built)" --status Done --labels backfill \
  --note "Already built before the board existed." --body-file - <<'EOF'
Hand-written SEO guides in `app/guides.ts` (instead of the automatic blog).

- [x] /guides index (PR #8)
- [x] 7 guides: shalwar kameez metres, karandi vs khaddar, wedding checklist, wash and wear, school uniform, velvet for winter weddings, checking fabric quality (PR #8)
- [x] All indexed (checked 2026-11-17)
EOF
card --title "SEO: schema, sitemap, robots, OG images and speed" --milestone "v1.0 (built)" --status Done --labels backfill \
  --note "Already built before the board existed." --body-file - <<'EOF'
Technical SEO for every page.

- [x] Titles and descriptions per page, breadcrumbs and FAQ schema (`app/seo.tsx`; PR #1, #6, #8)
- [x] Sitemap with lastmod from `CONTENT_UPDATED`, robots, manifest (`app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`)
- [x] Per-page OG images (`public/og/`, `scripts/make-og.py`)
- [x] Every page static; Lighthouse mobile 90-94, desktop 100, SEO 100 (PR #6)
- [x] http and www redirect to the https apex
EOF

echo "== 3. Open work"
card --title "Category pages: boski, latha, raw silk" --milestone "v1.1" --status "In review" --labels "type:feature,area:seo" --body-file - <<'EOF'
Three more category pages Hammad confirmed the shop stocks. PR #10 (branch boski-latha-raw-silk), waiting on Hammad's review.

- [x] /boski, /latha, /raw-silk pages with copy, guide and FAQ (PR #10)
- [x] Desktop header "More" menu (PR #10)
- [ ] Hammad reviews and approves PR #10
- [ ] PR #10 retargeted to `develop` (SOP: PRs go into develop), merged, released to `main`
- [ ] Live check, then submit the 3 URLs for indexing (Google + IndexNow)
EOF
card --title "SEO: shalwar kameez guide snippet rewrite" --milestone "v1.1" --status "Waiting on owner" --labels "needs-human,area:seo" --body-file - <<'EOF'
17 Nov check: the "how much cloth for shalwar kameez" guide had 250 impressions and 0 clicks at position 7. Proposed a new title and description ("meter" spelling, Roman Urdu "1 suit kitne meter ka hota hai").

- [x] Proposal written (17 Nov re-check)
- [ ] Hammad's verdict on the new title and description
- [ ] Ship, verify live HTML, ping IndexNow
EOF
card --title "SEO: Shahzad Fabrics as alternate name" --milestone "v1.1" --status "Waiting on owner" --labels "needs-human,area:seo" --body-file - <<'EOF'
"shahzad fabrics" gets impressions in Search Console (20, position 8.7 in Oct). If customers really call the shop that, add it as `alternateName` in the ClothingStore schema.

- [ ] Hammad: do customers call the shop "Shahzad Fabrics"? (his 3 Nov reply was unclear)
- [ ] If yes: add `alternateName`, verify live, ping IndexNow
EOF
card --title "Business facts: exact Friday opening time" --milestone "v1.1" --status "Waiting on owner" --labels "needs-human" --body-file - <<'EOF'
The site says "Friday: open after Jumu'ah prayers". Google's opening-hours data works better with a time.

- [ ] Hammad: what time does the shop open on Friday?
- [ ] Update `HOURS` in `app/site.ts` and the schema
EOF
card --title "Photos: boski, latha, raw silk close-ups" --milestone "v1.1" --status "Backlog" --labels "needs-human" --body-file - <<'EOF'
The new pages (PR #10) reuse existing photos because no photo shows these fabrics.

- [ ] Rohan takes close-ups of boski, latha and raw silk at the shop
- [ ] Add them to `app/photos.ts` with new file names and swap them into the 3 pages
EOF
card --title "Remove or fix /v3" --milestone "Later" --status "Backlog" --labels "type:chore,scope:later" --body-file - <<'EOF'
`/v3` is an old design experiment, still deployed (noindex), with the wrong address (Kashmiri Mohalla). It also carries framer-motion and lenis.

- [ ] Hammad: delete it, or keep it?
- [ ] If delete: remove `app/v3/`, framer-motion and lenis; check nothing links to it
EOF

echo "== 4. Module cards (one per saas skill), then match each to the site"
bash "$PB" modules "$REPO" --existing

not_needed "Module: admin console" "marketing site with no users, accounts or stored data (SOP 03, marketing / lead-gen sites)."
not_needed "Module: Stripe billing" "no online payments; price and delivery are agreed on WhatsApp per order."
not_needed "Module: lifecycle emails" "no sign-ups or accounts, so nobody to email."
not_needed "Module: MCP feedback + feature requests" "no MCP server and no customer accounts."
not_needed "Module: automatic SEO blog" "the site uses hand-written /guides instead (PR #8, DECISIONS D-006)."
not_needed "Module: lead capture guarantee (no lead or payment lost)" "no forms or payments. Every lead is a WhatsApp chat or phone call that goes straight to the shop's phone; taps are tracked as generate_lead (analytics card)."

card --title "Module: analytics + tracking (GSC, GTM, GA4, Clarity)" --milestone "v1.1" --status Ready --labels module --body-file - <<'EOF'
SOP checklist: https://github.com/HammadShahzad/saas-sop/blob/main/04-development/modules/analytics-tracking.md
Skill: `saas-ga4-gtm-site-setup`. Set up 2026-11-03 (PR #7). One gap left.

- [x] Owner's yes to use his Google accounts; no ads planned, so no pixels (2026-11-03)
- [x] Inventory first, existing Search Console domain property reused
- [x] Search Console `sc-domain:shahzadclothhouse.com` verified, sitemap submitted ("Success")
- [x] GA4 `G-X11N9CL6F8`: Asia/Karachi, PKR, enhanced measurement, key event `generate_lead`, custom dimension `lead_method`
- [x] GA4 linked to Search Console (2026-11-03)
- [x] Clarity project `z7za0akdyn` inside GTM
- [ ] Clarity's Google Analytics integration on (needs Hammad's Google sign-in click in Clarity)
- [x] Pixels: n/a while no ads are planned
- [x] GTM `GTM-TMHQCD9X`: Google tag, GA4 events `generate_lead` + `get_directions`, Clarity; published (version 3)
- [x] Snippet in the root layout + noscript iframe (`app/components/analytics.tsx`)
- [x] WhatsApp / call taps push `generate_lead` with `lead_method`; Maps taps push `get_directions`
- [x] No old tags left; no CSP header on the site, so nothing to allow
- [x] Privacy page names GA and Clarity and their cookies (`/privacy`, noindex)
- [x] Verified live: GA4 Realtime page_view + generate_lead (whatsapp, phone); Clarity collect 204
- [x] EU consent: n/a (Pakistani shop, Pakistani visitors)
EOF
card --title "Launch: search indexing (Google + Bing)" --milestone "v1.1" --status Ready --labels module --body-file - <<'EOF'
SOP checklist: https://github.com/HammadShahzad/saas-sop/blob/main/07-release/search-indexing.md
Skill: `saas-gsc-submit-indexing`. Google is done; Bing is not checked.

- [x] Pre-check: pages 200, no noindex on public pages, self canonicals, robots allows all, sitemap lists 16 URLs, http/www redirect
- [x] Search Console domain property verified, sitemap resubmitted 2026-11-03 ("Success")
- [x] Every page indexed in Google (checked 2026-11-17)
- [x] IndexNow key file live (PR #9)
- [ ] Bing Webmaster Tools: import from Search Console (Hammad's OK for the sign-in), sitemap listed
- [ ] New pages from PR #10 submitted once live (Google + IndexNow)
- [x] Favicon: SVG icon + apple-touch-icon linked on every page
EOF
card --title "Monthly SEO content plan" --milestone "v1.1" --status Ready --labels module --body-file - <<'EOF'
SOP checklist: https://github.com/HammadShahzad/saas-sop/blob/main/08-maintenance/monthly-seo.md
Skill: `saas-monthly-seo-content-plan`. Runs every month; this card tracks the next run (December 2026).

November 2026 (done): plan in project files `content-plan/2026-11/keyword-request.md`, Hammad approved "all, with the maybe posts", shipped in PR #8 (7 guides, uniform title, 3 snippet rewrites), 14-day re-check on 17 Nov (impressions 385 → 940).

December 2026:
- [ ] Google updates check (last 90 days)
- [ ] Past content review in `content-plan/content-audit.md` (first one for this site)
- [ ] Search Console numbers vs the 17 Nov baseline
- [ ] Candidates file `content-plan/2026-12/keyword-request.md`
- [ ] Hammad's verdicts (no Keyword Planner: Search Console + autocomplete evidence)
- [ ] Ship, verify live, IndexNow ping, re-check in 14 days
EOF
card --title "Backlinks handover pack" --milestone "Later" --status Backlog --labels module --body-file - <<'EOF'
SOP checklist: https://github.com/HammadShahzad/saas-sop/blob/main/08-maintenance/backlinks.md
Skill: `saas-backlink-handover-pack`. Not started. For a local shop the strongest first links are Google Business Profile and Pakistani business directories.

- [ ] `accounts@shahzadclothhouse.com` mailbox (Panel MCP), test mail received
- [ ] Research: Pakistani and local directories, Google Business Profile, fabric / tailoring communities
- [ ] Ranked table, pack in project files `backlinks/shahzad-cloth-house/`
- [ ] One-page summary for Hammad, helper starts, links tracked in `sites.csv`
EOF
card --title "Social media accounts + Saymany (one email, test post)" --milestone "Later" --status Backlog --labels module --body-file - <<'EOF'
SOP checklist: https://github.com/HammadShahzad/saas-sop/blob/main/08-maintenance/social-media.md
Skill: `saas-social-media-setup`. The shop already has TikTok, Instagram and Facebook (linked in the footer and in the schema `sameAs`). Not connected to Saymany.

- [x] TikTok, Instagram, Facebook profiles exist and are linked from the site
- [ ] Hammad: should these go into Saymany for scheduled posts? Which other platforms (YouTube, Pinterest, Google Business Profile)?
- [ ] `docs/SOCIAL.md` with every account
- [ ] Connected to Saymany, one test post
EOF

echo "== 5. SOP gaps"
card --title "SOP setup: what's missing" --milestone "v1.1" --status Ready --labels "type:chore" --body-file - <<'EOF'
Gaps against the SOP setup checklist (03-architecture), found 2026-11-27. The SOP setup PR #11 fixes the files; these are what's left.

- [x] Local `scripts/ci.sh` + smoke test (PR #11)
- [x] `scripts/deploy.sh` for Vercel (PR #11)
- [x] No `.github/workflows` in the repo
- [x] History files, app `CLAUDE.md` / `AGENTS.md`, docs (PR #11)
- [x] Environments decided: production only + Vercel previews (D-007, Hammad can change)
- [x] `.env.example` (no env vars)
- [x] `develop` branch created and made the default branch
- [ ] Merge PR #11 into `develop`, then a release PR `develop` → `main`
- [ ] Pre-push hook installed on Hammad's Mac (`bash scripts/install-hooks.sh`)
- [ ] GitHub Actions switched off in repo settings (`no-actions.sh disable`, Hammad's OK first)
- [ ] Branch protection on `main` and `develop`, requiring `local-ci`. Note: the SOP's main rule needs 1 approving review and applies to admins, so a solo owner can't merge his own PRs. Decide with Hammad: no required review, or a review agent counts
- [ ] Secret scanning + push protection on, Dependabot alerts on
- [ ] ESLint (Next 16 removed `next lint`): add `eslint` + `eslint-config-next` and a `lint` script
- [ ] Delete merged branches (9 old feature branches still on GitHub) and turn on auto-delete after merge
- [ ] PR #10 retargeted from `main` to `develop`
EOF

echo "== 6. Status"
bash "$PB" status "$REPO"
