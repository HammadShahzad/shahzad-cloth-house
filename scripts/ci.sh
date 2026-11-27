#!/usr/bin/env bash
# Local CI: the checks GitHub Actions used to run, on your own laptop. No Actions minutes, no waiting.
#   bash scripts/ci.sh            # install (if needed), lint, typecheck, test, build, then ci:extra
#   bash scripts/ci.sh --quick    # lint + typecheck only (fast, while you work)
#   bash scripts/ci.sh --report   # full run, then post a "local-ci" status on HEAD to GitHub (needs gh),
#                                 # so branch protection can require it. The pre-push hook uses this.
# Runs automatically before every push (scripts/install-hooks.sh).
# Moving a GitHub Actions workflow here? Put its extra steps (e2e, prisma validate, audit...) in a
# package.json script called "ci:extra" and this file runs it last.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
REPORT=0; QUICK=0
for a in "$@"; do case "$a" in --report) REPORT=1;; --quick) QUICK=1;; *) echo "unknown flag $a"; exit 1;; esac; done
PM=npm; [ -f pnpm-lock.yaml ] && PM=pnpm; [ -f yarn.lock ] && PM=yarn; { [ -f bun.lockb ] || [ -f bun.lock ]; } && PM=bun
START=$(date +%s)

status() { # status <state> <description>: best effort, never fails the run
  [ "$REPORT" = 1 ] || return 0
  if command -v gh >/dev/null 2>&1 && gh api -X POST "repos/{owner}/{repo}/statuses/$(git rev-parse HEAD)" \
       -f state="$1" -f context=local-ci -f description="$2" >/dev/null 2>&1; then
    echo "✓ posted local-ci=$1 to GitHub"
  else
    echo "⚠ could not post the local-ci status (gh missing or not logged in). Paste this result in the PR instead."
  fi
}
has() { node -e "process.exit(require('./package.json').scripts?.['$1']?0:1)" 2>/dev/null; }
step() { echo; echo "▶ $1"; shift; "$@"; }
fail() { echo; echo "✗ local CI failed at: $1"; status failure "failed: $1"; exit 1; }

# No GitHub Actions in SOP apps (agents have added CI workflows on PR branches before). Stop that here.
if ls .github/workflows/*.y*ml >/dev/null 2>&1 && [ "${ALLOW_WORKFLOWS:-0}" != 1 ]; then
  echo "✗ .github/workflows found. SOP apps don't use GitHub Actions: put the steps in scripts/ci.sh or the"
  echo "  \"ci:extra\" script and delete the workflow (or run with ALLOW_WORKFLOWS=1 if the owner agreed to keep it)."
  fail "workflow files"
fi
[ -f package.json ] || { echo "No package.json: edit scripts/ci.sh to run this app's checks."; exit 1; }
[ -d node_modules ] || step "install" $PM install || fail install

# Prisma apps: the client must exist before typecheck/build (Actions workflows usually did this first)
if [ -f prisma/schema.prisma ] || ls prisma/schema/*.prisma >/dev/null 2>&1; then
  step "prisma validate + generate" sh -c "npx --no-install prisma validate && npx --no-install prisma generate >/dev/null" || fail prisma
fi

run_named() { # run_named <label> <script names to try...>
  local label="$1"; shift
  for s in "$@"; do if has "$s"; then step "$label ($s)" $PM run "$s" || fail "$label"; return 0; fi; done
  return 1
}

run_named lint lint || echo "⚠ no \"lint\" script in package.json (skipped)"
if ! run_named typecheck typecheck type-check tsc check-types; then
  if [ -f tsconfig.json ]; then step "typecheck (tsc --noEmit)" npx --no-install tsc --noEmit || fail typecheck
  else echo "⚠ no typecheck script and no tsconfig.json (skipped)"; fi
fi

if [ "$QUICK" = 0 ]; then
  run_named test test || echo "⚠ no \"test\" script in package.json (skipped)"
  run_named build build || echo "⚠ no \"build\" script in package.json (skipped)"
  run_named "extra checks" ci:extra || true
fi

echo; echo "✓ local CI passed on $(git rev-parse --short HEAD) in $(( $(date +%s) - START ))s"
[ "$QUICK" = 1 ] || status success "lint, typecheck, test, build passed locally"
