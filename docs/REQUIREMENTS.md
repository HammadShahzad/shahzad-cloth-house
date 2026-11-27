# Requirements: Shahzad Cloth House (shahzadclothhouse.com)

> Written from the live site when the site joined the SOP (2026-11-27). The site was built before the SOP, from Hammad's requests in chat; there is no signed requirements gate. Keyword plan: `/mnt/project-files/landing-redesign/keyword-plan.md` (project files).

## 1. Problem and goals
- Problem: customers can't see or touch fabric online and don't know which shop to trust outside their city.
- Goals: leads (WhatsApp and calls), Google rankings for national and Sialkot fabric searches, and sales, including bulk uniform orders.
- Success metrics (90 days): leads and Search Console clicks grow month on month.

## 2. Personas and roles
| Persona / role | Who | Needs | Permissions |
|---|---|---|---|
| Visitor (retail) | Ladies and gents buying suit fabric | See the fabric, know the length, order on WhatsApp | public pages |
| Visitor (bulk) | Schools, offices, hospitals | Uniform fabric in bulk, samples, lead time | public pages |
| Owner | Hammad | Change copy, photos and pages through PRs | repo |

## 3. User flows
1. **Find → order**: Google search → category page or guide → WhatsApp (pre-filled message) or call → price and delivery agreed on WhatsApp.
2. **Visit the shop**: page → "Get directions" (Google Maps).
3. **Bulk order**: uniform page → WhatsApp with count and sample request.

## 4. Functional requirements
| ID | Requirement | Priority | Build phase | Acceptance criteria | Screen(s) |
|---|---|---|---|---|---|
| FR-001 | Every page has a WhatsApp and a call link with a pre-filled message naming the topic | Now | built | Taps open wa.me / tel: with the right number | all |
| FR-002 | Category pages for each fabric group with real shop photos, a buying guide and FAQ | Now | built | 6 pages live, each with its own hero and gallery | category pages |
| FR-003 | Order-online page explaining WhatsApp ordering and delivery across Pakistan | Now | built | /order-online live and indexed | Order online |
| FR-004 | Fabric guides for SEO | Now | built | /guides + 7 guides live and indexed | Guides |
| FR-005 | Local SEO: titles, descriptions, JSON-LD (ClothingStore), sitemap, robots, OG images | Now | built | SEO 100 in Lighthouse; sitemap lists every public page | all |
| FR-006 | Lead tracking: `generate_lead` on WhatsApp / call taps, `get_directions` on Maps taps | Now | built | Events seen in GA4 Realtime | all |
| FR-007 | Pages for boski, latha and raw silk | Now | PR #10 | Pages live, shown under a "More" menu on desktop | category pages |

## 4b. Feature boxes (who builds what)
| Area | Feature box | Requirements | Owner | Owns (folders) | Build phase |
|---|---|---|---|---|---|
| Base | Layout, header, footer, business facts | FR-001 | AI + Hammad | `app/layout.tsx`, `app/components/chrome.tsx`, `app/site.ts` | built |
| Pages | Home | FR-001 | AI + Hammad | `app/page.tsx` | built |
| Pages | Category pages | FR-002, FR-007 | AI + Hammad | `app/categories.ts`, `app/[category]/` | built |
| Pages | Photos | FR-002 | AI + Hammad | `app/photos.ts`, `public/photos/shop/` | built |
| Pages | Order online | FR-003 | AI + Hammad | `app/order-online/` | built |
| Content | Guides | FR-004 | AI + Hammad | `app/guides.ts`, `app/guides/` | built |
| SEO | Schema, sitemap, robots, OG | FR-005 | AI + Hammad | `app/seo.tsx`, `app/sitemap.ts`, `app/robots.ts`, `public/og/` | built |
| Tracking | GTM + lead events + privacy | FR-006 | AI + Hammad | `app/components/analytics.tsx`, `app/privacy/` | built |

## 5. Screen inventory
| Screen | Area | Requirements | Desktop | Mobile | Notes |
|---|---|---|---|---|---|
| Home `/` | Marketing | FR-001 | ✓ | ✓ | |
| Category pages `/ladies-fabric`, `/gents-fabric`, `/lawn`, `/winter-collection`, `/wedding-fabric`, `/uniform-fabric` | Marketing | FR-002 | ✓ | ✓ | `/boski`, `/latha`, `/raw-silk` in PR #10 |
| Order online `/order-online` | Marketing | FR-003 | ✓ | ✓ | |
| Guides `/guides`, `/guides/[slug]` (7) | Content | FR-004 | ✓ | ✓ | |
| Privacy `/privacy` | Legal | FR-006 | ✓ | ✓ | noindex |
| 404 | Base | | ✓ | ✓ | |
| `/v3` | Old experiment | | ✓ | ✓ | noindex, wrong address |

## 6. Non-functional
- Performance: Lighthouse mobile 90+, desktop 100 (PR #6). Static pages only. Accessibility: WCAG AA (Lighthouse a11y 100). Languages: English with Urdu brand name and tagline. Devices: mobile first.

## 7. Integrations and data
- Integrations: WhatsApp click-to-chat, Google Maps link, GTM (GA4 + Clarity), Search Console, IndexNow, TikTok link.
- No stored data, no emails.

## 8. Standard modules
- [ ] Stripe billing (n/a) - [ ] Admin console (n/a) - [ ] Lifecycle emails (n/a) - [ ] MCP + feedback (n/a) - [x] Analytics - [ ] Blog (n/a, `/guides`) - [ ] Meta messaging (not asked)

## 9. Out of scope
- Online checkout and payments, customer accounts, a product catalogue with stock and prices.

## 10. Open questions
- Do customers call the shop "Shahzad Fabrics"? (decides the `alternateName` in the schema)
- Exact Friday opening time.
