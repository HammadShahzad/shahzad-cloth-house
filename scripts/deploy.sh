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
  read -r -p "Back up the production database first, then type 'deploy' to continue: " ok
  [ "$ok" = deploy ] || { echo "Cancelled."; exit 1; }
fi

echo "▶ deploying $SHA to $ENV"
# ---- DEPLOY STEP: pick one and delete the rest ----
# Vercel:        vercel deploy --prod                (production)   |  vercel deploy --target=staging
# Docker on VPS: docker build -t app:$SHA . && docker save app:$SHA | ssh host 'docker load && cd /srv/app && TAG=$SHA docker compose up -d'
# Panel:         ask Claude to run Panel app_deploy for this app/env
# Coolify:       curl -fsS -X POST "$COOLIFY_DEPLOY_WEBHOOK_URL"
echo "!! Fill in the deploy step in scripts/deploy.sh"; exit 1
# ---------------------------------------------------

echo "✓ deployed $SHA to $ENV. Now verify (see SOP 07-release) and, for production, tag the release."
