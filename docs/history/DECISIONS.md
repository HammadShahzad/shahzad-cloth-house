# Decision log: Shahzad Cloth House

Anything someone might ask again ("why is it like this?"). Newest first. Short: context, decision, why, alternatives rejected, who decided.

## D-007: 2026-11-27 Site joins the SaaS SOP; lean environments; marketing-site modules
- **Context:** Hammad asked to apply the SaaS SOP to this project.
- **Decision:** Production only plus Vercel PR previews (no staging site). No health data. Stripe, admin console, lifecycle emails and MCP feedback are not needed (marketing site, SOP 03 "Marketing / lead-gen sites"). The SEO blog module is replaced by the hand-written `/guides`. Meta messaging not added until Hammad asks for it. `develop` is the branch PRs go into; Vercel still deploys `main`.
- **Why:** SOP default for a static site with no data; previews already cover checking changes.
- **Rejected:** a hosted staging site (no data or integrations to test against).
- **Decided by:** SOP defaults applied by Claude; Hammad can change any of these · **Links:** SOP setup PR
- **Status:** active

## D-006: 2026-11-03 Hand-written guides instead of the automatic blog
- **Context:** November SEO plan needed content; the site isn't in StackSERP.
- **Decision:** `/guides` with posts written in `app/guides.ts`.
- **Decided by:** Hammad ("all, with the maybe posts") · **Links:** #8
- **Status:** active

## D-005: 2026-11-03 Tracking through GTM, no ad pixels
- **Decision:** GTM `GTM-TMHQCD9X` holds GA4 and Clarity; WhatsApp and call taps count as leads (`generate_lead`). No ad pixels while no ads are planned.
- **Decided by:** Hammad (yes to using his Google accounts; no ads planned) · **Links:** #7
- **Status:** active

## D-004: 2026-11-03 Keyword verdicts come from Hammad
- **Context:** No Google Ads / Keyword Planner access.
- **Decision:** Evidence = Search Console + Google autocomplete + season; Hammad gives every keyword verdict.
- **Decided by:** Hammad
- **Status:** active

## D-003: 2026-10-16 Real shop photos only, matched to their section
- **Decision:** Use Rohan's shop photos (28 of 41), each where it makes sense. No AI images, no CSS swatches.
- **Why:** Hammad rejected AI images as fake and wanted many more real photos used sensibly.
- **Decided by:** Hammad · **Links:** #2, #3, #4
- **Status:** active

## D-002: 2026-10-13 Target national "online" searches plus Sialkot; orders on WhatsApp
- **Decision:** The shop delivers across Pakistan; price and delivery are agreed on WhatsApp per order. Pages target national and Sialkot searches and bulk uniform orders.
- **Decided by:** Hammad · **Links:** #1
- **Status:** active

## D-001: 2026-10-13 Next.js static site on Vercel
- **Decision:** Next.js App Router + Tailwind, every page static, hosted on Vercel with Git integration (`main` = production).
- **Why:** fast pages and free previews per PR.
- **Decided by:** before the SOP (existing repo) · **Links:** #1
- **Status:** active
