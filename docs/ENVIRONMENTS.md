# Environments: <App name>

**Setup chosen:** <A lean: production only / B: production + staging / C: production + staging + QA> · decided by <Hammad> on <date> (DECISIONS D-00N)
**Health data:** <no / yes: follow SOP `03-architecture/health-data.md`> · asked at setup, decided by <Hammad> on <date>
**CI / deploy:** local only, no GitHub Actions: `scripts/ci.sh`, `scripts/deploy.sh <env>`, pre-push hook (`scripts/install-hooks.sh`).

| | local (dev + QA) | staging (only if chosen) | production |
|---|---|---|---|
| Branch | feature/*, develop | staging | main |
| URL | localhost:3000 | staging.<domain> | <domain> |
| Host | the laptop | <...> | <...> |
| Database | local Docker Postgres, seeded | <staging db> | <prod db> (daily backup + before deploy) |
| Stripe | test | test | **live** |
| Email | Mailpit / test inbox | test mode | real |
| Protected / noindex | n/a | yes / yes | no / no |
| Deploy | `npm run dev` | `bash scripts/deploy.sh staging` | `bash scripts/deploy.sh production` |
| Rollback | n/a | redeploy | <previous Vercel deployment / previous image tag> |

## Environment variables
Names only. Values live in <`.env.local` on the laptop (gitignored) / Vercel env / Panel app_env / 1Password>.

| Name | What | local | staging | prod |
|---|---|---|---|---|
| DATABASE_URL | Postgres connection | ✓ | ✓ | ✓ |
| STRIPE_SECRET_KEY | Stripe (test outside prod) | ✓ | ✓ | ✓ |
| STRIPE_WEBHOOK_SECRET | per-env endpoint secret (`stripe listen` locally) | ✓ | ✓ | ✓ |
| SUPER_ADMIN_EMAILS | platform admins | ✓ | ✓ | ✓ |
| EMAIL_TEST_MODE | redirect all mail | true | true | false |
| <...> | | | | |
