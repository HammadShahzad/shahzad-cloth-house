<!-- PRs target `develop` (release PRs: develop → main, or develop → staging → main if the app has staging). Title: type(scope): summary (#issue) -->

## Summary
<!-- What changed and why, in 1 to 3 sentences -->

Closes #

## How it was tested
- [ ] `bash scripts/ci.sh` passed (lint / typecheck / tests / build), `local-ci` status green
- [ ] Tested on: <!-- local / staging -->
- [ ] Roles checked: <!-- owner / member / logged out / admin -->
<!-- Steps a reviewer can repeat -->

## Screenshots (UI changes: desktop + 390px)

## Checklist
- [ ] Read `docs/API.md`, `docs/DATABASE.md` and the `## Map` in `CLAUDE.md` first; reused what exists
- [ ] Migrations: none / add-only (and run on qa), only this feature box's own tables
- [ ] API or DB changed: `docs/API.md` / `docs/DATABASE.md` updated in this PR (API changes add-only) · new folder: `## Map` updated
- [ ] New env vars: none / added to `.env.example` and all environments
- [ ] No secrets in code or logs
- [ ] Server-side permission checks; admin actions audited
- [ ] History updated (required): `CHANGELOG.md` Unreleased line · `docs/history/FEATURES.md` or `BUGS.md` row · `DECISIONS.md` if a decision was made · `docs/PROJECT-STATE.md` log line
- [ ] Docs / features page need updating at release: yes / no

## Risk and rollback
<!-- What could break, and how to undo it -->

## Skipped / not checked
<!-- Anything left out on purpose, or not verified -->
