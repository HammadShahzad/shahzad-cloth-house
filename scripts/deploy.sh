#!/usr/bin/env bash
# Deploy from the laptop. No GitHub Actions.
#   bash scripts/deploy.sh production     # from main
#   bash scripts/deploy.sh staging        # from staging (only if this app has a staging site)
#   bash scripts/deploy.sh qa             # from develop (only if this app has a QA site)
# Fill in the DEPLOY STEP below once per app. Record the environments setup in docs/ENVIRONMENTS.md.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
ENV="${1:?usage: deploy.sh production|staging|qa}"
case "$ENV" in
  production) BRANCH=main ;;
  staging)    BRANCH=staging ;;
  qa)         BRANCH=develop ;;
  *) echo "unknown env $ENV"; exit 1 ;;
esac

# Only environments this app actually has (edit to match docs/ENVIRONMENTS.md)
ENABLED_ENVS="production"
[[ " $ENABLED_ENVS " == *" $ENV "* ]] || { echo "This app has no '$ENV' environment (see docs/ENVIRONMENTS.md)."; exit 1; }

# Guards
[ "$(git branch --show-current)" = "$BRANCH" ] || { echo "Switch to '$BRANCH' to deploy $ENV."; exit 1; }
[ -z "$(git status --porcelain)" ] || { echo "Working tree not clean."; exit 1; }
git fetch -q origin "$BRANCH"
[ "$(git rev-parse HEAD)" = "$(git rev-parse "origin/$BRANCH")" ] || { echo "Local $BRANCH differs from origin/$BRANCH. Pull/push first."; exit 1; }
bash scripts/ci.sh

SHA=$(git rev-parse --short HEAD)
if [ "$ENV" = production ]; then
  LAST=$(git describe --tags --abbrev=0 2>/dev/null || echo "none")
  echo; echo "Deploying $SHA to PRODUCTION. Last tag: $LAST. Changes since:"; git log --oneline "${LAST}..HEAD" 2>/dev/null | head -30 || true
  # No database on this site (static pages only), so there is nothing to back up. Rollback = promote the previous Vercel deployment.
  read -r -p "Type 'deploy' to continue: " ok
  [ "$ok" = deploy ] || { echo "Cancelled."; exit 1; }
fi

echo "▶ deploying $SHA to $ENV"
# ---- DEPLOY STEP: Vercel Git integration ----
# Vercel builds and deploys `main` by itself when a release PR merges, so there is nothing to upload from here.
# This step waits for Vercel's Production deployment of this exact commit and fails if it doesn't go green.
command -v gh >/dev/null || { echo "gh is needed to read the Vercel deployment status."; exit 1; }
STATE=""; FULL=$(git rev-parse HEAD)
for i in $(seq 1 40); do
  DEP=$(gh api "repos/{owner}/{repo}/deployments?sha=$FULL&environment=Production" -q '.[0].id' 2>/dev/null || true)
  if [ -n "$DEP" ]; then
    STATE=$(gh api "repos/{owner}/{repo}/deployments/$DEP/statuses" -q '.[0].state' 2>/dev/null || true)
    [ "$STATE" = success ] && break
    { [ "$STATE" = failure ] || [ "$STATE" = error ]; } && { echo "✗ Vercel production deployment $STATE for $SHA"; exit 1; }
  fi
  echo "… waiting for Vercel (${STATE:-not started})"; sleep 15
done
[ "$STATE" = success ] || { echo "✗ No successful Vercel production deployment for $SHA after 10 minutes."; exit 1; }
# ---------------------------------------------------

echo "✓ deployed $SHA to $ENV. Now verify (see SOP 07-release) and, for production, tag the release."
