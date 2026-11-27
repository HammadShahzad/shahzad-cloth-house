# Environments: Shahzad Cloth House

**Setup chosen:** A lean: production only, plus Vercel's automatic PR previews · SOP default applied 2026-11-27 (DECISIONS D-007); Hammad can ask for a staging site
**Health data:** no (fabric shop site, no personal data stored) · 2026-11-27
**CI / deploy:** local only, no GitHub Actions: `scripts/ci.sh`, `scripts/deploy.sh production`, pre-push hook (`scripts/install-hooks.sh`).
**CDN:** none in front of Vercel (Vercel's own edge only). DNS / domain on Vercel; http and www redirect to the https apex.

| | local (dev + QA) | PR preview | production |
|---|---|---|---|
| Branch | feature/*, develop | any PR branch | main |
| URL | localhost:3000 | Vercel preview link on the PR | https://shahzadclothhouse.com |
| Host | the laptop | Vercel | Vercel |
| Database | none | none | none |
| Payments / email | none | none | none |
| Protected / noindex | n/a | Vercel login / yes | no / no (`/v3` and `/privacy` noindex) |
| Deploy | `npm run dev` | automatic on push | merge the release PR into `main` (Vercel builds it), then `bash scripts/deploy.sh production` waits for it to go green |
| Rollback | n/a | n/a | promote the previous production deployment in Vercel |

## Environment variables
None. The site reads no env vars; the GTM id and business facts are public and live in `app/site.ts`.
