#!/usr/bin/env bash
# Install the SOP git hooks: block direct pushes to main/staging/develop, run local CI before every push.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
HOOK="$(git rev-parse --git-path hooks)/pre-push"; mkdir -p "$(dirname "$HOOK")"
cat > "$HOOK" <<'H'
#!/usr/bin/env bash
# SOP pre-push: no direct pushes to protected branches; local CI must pass. Bypass in an emergency: git push --no-verify
while read -r _ _ remote_ref _; do
  case "$remote_ref" in
    refs/heads/main|refs/heads/staging|refs/heads/develop)
      echo "✗ Direct push to ${remote_ref#refs/heads/} is not allowed. Open a PR from a feature branch."; exit 1 ;;
  esac
done
bash scripts/ci.sh --report || { echo "✗ local CI failed, push blocked."; exit 1; }
H
chmod +x "$HOOK"
echo "✓ pre-push hook installed"
