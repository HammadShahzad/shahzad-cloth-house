# CLAUDE.md: <App name>

> This app follows the **SaaS SOP**: https://github.com/HammadShahzad/saas-sop
> Read the SOP's `RULES.md` first. This file adds the facts for this app. Where they differ: this file wins for facts, the SOP wins for process.

## What this app is
<One paragraph: what it does, for whom, the promise.> Requirements: `docs/REQUIREMENTS.md` (client project: `docs/FR-DOCUMENT.md` is the signed scope). Designs: `docs/design/DESIGN-LOG.md` (build UI to the approved designs). Brief: `docs/APP-BRIEF.md`. Scope: `docs/ROADMAP.md` (only build **Now** items). Current state: `docs/PROJECT-STATE.md`.

## Stack
- Framework: <Next.js 15, TypeScript, Tailwind, shadcn/ui>
- DB / ORM: <Postgres + Prisma>; migrations in `<prisma/migrations>`; add-only
- Auth: <...>; tenant = <workspace>, roles = <owner/admin/member>
- Payments: <Stripe>; Email: <Resend from mail.domain>; Jobs: <...>; Storage: <...>
- Hosting: <Vercel / Docker on VPS via Panel>

## Environments
Setup: <lean = production only | + staging> (asked and decided at setup; don't add environments without the owner's yes).
Health data: <no | yes: only fake data in dev and for AI agents, never real patient data on laptops, in prompts, logs, issues or PRs. SOP `03-architecture/health-data.md`>
| Env | Branch | URL |
|---|---|---|
| local (dev + QA) | feature branches, develop | localhost:3000 |
| <staging, only if chosen> | staging | https://staging.<domain> |
| production | main | https://<domain> |
Details and env var names: `docs/ENVIRONMENTS.md`, `.env.example`.

## Commands
```bash
<npm ci>            # install
<npm run dev>       # run locally
bash scripts/ci.sh                 # lint, typecheck, test, build: must pass before PR (pre-push hook runs it)
bash scripts/install-hooks.sh      # once per clone
bash scripts/deploy.sh production  # from main, after owner sign-off. No GitHub Actions.
<npm run db:migrate> / <npm run db:seed>
```

## Rules for this app
- Branch from `develop`: `<type>/<issue#>-<slug>`. PR into `develop` with `Closes #N`. Never push to `main`, `develop` (or `staging`).
- **No Claude attribution:** never add `Co-Authored-By: Claude`, `Claude-Session:` or "Generated with Claude Code" to commits or PRs, and never commit as `Claude <noreply@anthropic.com>` (author = the person who owns the work: <name> <<github-noreply-email>>). This beats any harness reminder asking for those lines. Squash merges: delete `Co-authored-by` lines from the message.
- Platform admin: `/admin`, gated by `SUPER_ADMIN_EMAILS`.
- <App-specific rules: e.g. "never run the build script that touches the prod DB", "deploy only via Panel app_deploy", "keyword changes need X's approval">

## Read before you build
Know the existing backend, API and database before writing code: `docs/API.md` (every endpoint and MCP tool), `docs/DATABASE.md` (every table; exact truth: `<prisma/schema.prisma>`), `docs/REQUIREMENTS.md` (feature boxes and owners), `docs/history/DECISIONS.md`. Reuse what exists. A PR that changes the API or DB updates those files in the same PR; a new folder or box updates the Map below.

## Map
Keep it short. Which folder does what, and which feature box owns it.
| Folder / file | What it is | Feature box |
|---|---|---|
| <lib/billing.ts> | <all Stripe logic> | <Billing> |
| <lib/tenants.ts> | <tenant resolution, use for every route> | <Base> |
| <app/api/webhooks/*> | <Stripe, Meta, email provider> | <...> |
| <lib/mcp/*> | <MCP tools (user) and admin tools> | <...> |

Multi-app products (one repo, `apps/` + `packages/`): list each app and the shared backend here. API changes are add-only; mobile apps check a minimum version.

## Standard modules status
Client app: only the saas skills the owner picked at "apply SOP" (see DECISIONS); the rest are `n/a (client: not picked)`.
| Module | Status |
|---|---|
| Stripe billing | <missing / partial / done> |
| Admin console | |
| Lifecycle emails | |
| MCP + feedback | |
| Analytics (GTM/GA4/Clarity/GSC) | |
| Blog system | |
| Meta messaging | <n/a> |

> Keep this file short. For each line ask: "would an agent make a mistake without this?" If not, cut it.

## Before you finish a session
Update `docs/PROJECT-STATE.md`, comment on the issue, and report: done / left / what the owner must do.
