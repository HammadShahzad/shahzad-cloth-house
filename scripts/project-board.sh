#!/usr/bin/env bash
# One GitHub Project board per app, so anyone can see where the app is right now.
# Guide: 00-overview/project-board.md. No GitHub Actions: the board moves with Projects' built-in workflows.
#
# Needs gh with the project scope, once:  gh auth refresh -s project
#
#   project-board.sh template [owner]        ONCE PER ACCOUNT: create the "SOP board template" project
#                                            (columns, date fields, views). Then set its workflows by hand once.
#   project-board.sh setup owner/repo [--seed] [--build-phases N] [--with meta] [--only skill,skill]
#                                            PER APP: copy the template, link the repo, create the phase
#                                            milestones, add open issues. --seed (new apps) also creates the
#                                            gate and phase issues (requirements, brand, wireframes, ...)
#   project-board.sh card owner/repo --title "..." --milestone "..." [--status "..."] [--labels a,b]
#                         [--body "..." | --body-file FILE|-] [--note "..."]
#                                            create (or update, matched by exact title) one issue, put it on
#                                            the board in that column; --status Done also closes it. Used to
#                                            fill the board of an existing app from its real state.
#   project-board.sh modules owner/repo [--existing] [--build-phases N] [--with meta] [--only skill,skill]
#                                            one card per SOP module / saas-* skill (admin console, Stripe,
#                                            tracking, lead capture, lifecycle emails, MCP feedback, indexing, blog, SEO,
#                                            backlinks, social media), each in its phase, checklist copied from the
#                                            module file. setup --seed runs it. --existing: v1.1 / Later
#                                            (then tick and move each card to the app's real state).
#                                            Optional modules (Meta messaging) only with --with meta: ask the
#                                            owner first. Skips cards that already exist.
#                                            --only: client apps. Only the saas skills the owner picked
#                                            (comma list of skill names, e.g. saas-admin-console,saas-stripe-billing);
#                                            ask him first (00-overview/skills.md, "Client apps").
#   project-board.sh move <issue#> "<Status>" [owner/repo]   move an issue's card (agents use this)
#   project-board.sh status [owner/repo | owner]   where each app stands: phase progress, cards per
#                                            column, what's in progress, what's waiting on the owner
#   project-board.sh apps [owner] [--days N]  every repo pushed to in the last N days (default 120) and
#                                            its board, or "NO BOARD". Use it to find apps still to set up.
#   project-board.sh views <owner> <project#>  add the SOP views to an existing board (skips ones it has)
set -euo pipefail

TEMPLATE_TITLE="SOP board template"
STATUSES=("Backlog" "Ready" "In progress" "In review" "Waiting on owner" "Done")
PHASES=("01 Requirements" "02 Design" "03 Setup")

die() { echo "ERROR: $*" >&2; exit 1; }
command -v gh >/dev/null || die "gh is not installed (https://cli.github.com)"

current_repo() { gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || die "not in a GitHub repo; pass owner/repo"; }

owner_kind() { # users | orgs (for URLs)
  [ "$(gh api "users/$1" -q .type)" = Organization ] && echo orgs || echo users
}

template_number() { # <owner>
  gh project list --owner "$1" --format json -L 200 \
    -q ".projects[] | select(.title==\"$TEMPLATE_TITLE\" and .closed==false) | .number" | head -1
}

board_of_repo() { # <owner/repo> -> "<project owner> <number>" of the first open project linked to the repo
  local o="${1%%/*}" n="${1##*/}"
  gh api graphql -f o="$o" -f n="$n" -f query='
    query($o:String!,$n:String!){ repository(owner:$o,name:$n){ projectsV2(first:20){ nodes{
      number title closed owner{ ... on User{login} ... on Organization{login} } } } } }' \
    -q ".data.repository.projectsV2.nodes[] | select(.closed==false and .title!=\"$TEMPLATE_TITLE\") | \"\(.owner.login) \(.number)\"" | head -1
}

# ---------------------------------------------------------------- template
cmd_template() {
  local owner="${1:-$(gh api user -q .login)}"
  local num; num="$(template_number "$owner")"
  if [ -n "$num" ]; then echo "Template already exists: project #$num"; else
    num="$(gh project create --owner "$owner" --title "$TEMPLATE_TITLE" --format json -q .number)"
    echo "Created project #$num ($TEMPLATE_TITLE)"
  fi

  # Status columns (replaces the default Todo / In Progress / Done)
  local fid; fid="$(gh project field-list "$num" --owner "$owner" --format json -q '.fields[] | select(.name=="Status") | .id')"
  gh api graphql -f f="$fid" -f query='
    mutation($f:ID!){ updateProjectV2Field(input:{ fieldId:$f, singleSelectOptions:[
      {name:"Backlog",          color:GRAY,   description:"Written down, not ready to start"},
      {name:"Ready",            color:BLUE,   description:"Clear, designed and approved: can be picked up"},
      {name:"In progress",      color:YELLOW, description:"Someone (person or agent) is on it"},
      {name:"In review",        color:PURPLE, description:"PR open, waiting for review / local CI"},
      {name:"Waiting on owner", color:ORANGE, description:"Needs the owner: approval gate, decision, key or click"},
      {name:"Done",             color:GREEN,  description:"Merged (code) or approved (gate)"} ] }){
      projectV2Field{ ... on ProjectV2SingleSelectField{ id } } } }' >/dev/null \
    && echo "Status columns: ${STATUSES[*]}" \
    || echo "WARN: could not set Status options by API. Set them by hand in the project: ${STATUSES[*]}"

  local have; have="$(gh project field-list "$num" --owner "$owner" --format json -q '.fields[].name')"
  for f in "Start date" "Target date"; do
    grep -qx "$f" <<<"$have" || { gh project field-create "$num" --owner "$owner" --name "$f" --data-type DATE >/dev/null && echo "Field: $f"; }
  done

  add_views "$owner" "$num"

  local url="https://github.com/$(owner_kind "$owner")/$owner/projects/$num"
  cat <<EOF

Template ready: $url
GitHub has no API for workflows or Insights charts, so set those once on the template by hand (about 3 minutes).
Every app board copied from it gets them. Steps: 00-overview/project-board.md, "One-time template setup".
EOF
}

# ---------------------------------------------------------------- views (REST API version 2026-03-10)
add_views() { # <owner> <project number>: creates the SOP views the board doesn't have yet
  local owner="$1" num="$2"
  local base; base="$(owner_kind "$owner")/$owner/projectsV2/$num"   # REST wants the login here; the numeric id gives 404
  local fields
  fields="$(gh api "$base/fields?per_page=100" -H "X-GitHub-Api-Version: 2026-03-10" -q '.[] | "\(.id)\t\(.name)"')" \
    || { echo "WARN: could not read fields by REST; add the views by hand (see the guide)"; return 0; }
  fid() { awk -F'\t' -v n="$1" '$2==n {print $1; exit}' <<<"$fields"; }
  ids() { local out="" i n; for n in "$@"; do i="$(fid "$n")"; [ -n "$i" ] && out="$out${out:+,}$i"; done; echo "[$out]"; }
  local have
  have="$(gh api graphql -f o="$owner" -F n="$num" -f query='
    query($o:String!,$n:Int!){ repositoryOwner(login:$o){
      ... on User{ projectV2(number:$n){ views(first:50){ nodes{ name } } } }
      ... on Organization{ projectV2(number:$n){ views(first:50){ nodes{ name } } } } } }' \
    -q '.data.repositoryOwner.projectV2.views.nodes[].name')"
  view() { # <name> <json body>
    if grep -qxF "$1" <<<"$have"; then echo "View exists: $1"; return 0; fi
    if gh api -X POST "$base/views" -H "X-GitHub-Api-Version: 2026-03-10" --input - >/dev/null <<<"$2"; then
      echo "View: $1"; else echo "WARN: could not create view $1"; fi
  }
  local st ms
  st="$(fid Status)"; ms="$(fid Milestone)"
  view "Board"    "{\"name\":\"Board\",\"layout\":\"board\",\"vertical_group_by\":[$st],\"visible_fields\":$(ids Assignees Milestone Labels "Linked pull requests" "Sub-issues progress")}"
  view "Phases"   "{\"name\":\"Phases\",\"layout\":\"table\",\"group_by\":[$ms],\"sort_by\":[[$st,\"asc\"]],\"visible_fields\":$(ids Status Assignees Labels "Sub-issues progress" "Linked pull requests")}"
  view "Roadmap"  "{\"name\":\"Roadmap\",\"layout\":\"roadmap\",\"group_by\":[$ms]}"
  view "Needs me" "{\"name\":\"Needs me\",\"layout\":\"table\",\"filter\":\"label:needs-human is:open\",\"visible_fields\":$(ids Status Milestone Assignees Labels)}"
  view "My work"  "{\"name\":\"My work\",\"layout\":\"table\",\"filter\":\"assignee:@me -status:Done\",\"visible_fields\":$(ids Status Milestone Labels "Linked pull requests")}"
}

# ---------------------------------------------------------------- setup
cmd_setup() {
  local repo="" seed=0 builds=3 with=()
  while [ $# -gt 0 ]; do case "$1" in
    --seed) seed=1;; --build-phases) builds="${2:?}"; shift;; --with) with+=(--with "${2:?}"); shift;;
    --only) with+=(--only "${2:?}"); shift;;
    */*) repo="$1";; *) die "unknown arg $1";; esac; shift; done
  [ -n "$repo" ] || repo="$(current_repo)"
  local owner="${repo%%/*}" name="${repo##*/}"

  local existing; existing="$(board_of_repo "$repo")"
  local num
  if [ -n "$existing" ]; then num="${existing##* }"; echo "Board already linked: project #$num"; else
    local tpl; tpl="$(template_number "$owner")"
    [ -n "$tpl" ] || die "no \"$TEMPLATE_TITLE\" under $owner. Run: bash $0 template $owner"
    num="$(gh project copy "$tpl" --source-owner "$owner" --target-owner "$owner" --title "$name" --format json -q .number)"
    gh project link "$num" --owner "$owner" --repo "$repo" >/dev/null
    echo "Created board \"$name\" (project #$num) from the template, linked to $repo"
  fi

  # Phases = milestones (each shows a % done bar on the repo's Milestones page).
  # New app (--seed): 01 Requirements, 02 Design, 03 Setup, Build 1..N. Existing app: none here; the fill step
  # creates v1.0 (built), v1.1 and Later through `card`, so the board has no empty phases.
  if [ "$seed" = 1 ]; then
    local ms; ms="$(gh api "repos/$repo/milestones?state=all&per_page=100" -q '.[].title')"
    local all=("${PHASES[@]}"); for i in $(seq 1 "$builds"); do all+=("Build $i"); done
    for m in "${all[@]}"; do
      grep -qx "$m" <<<"$ms" || { gh api "repos/$repo/milestones" -f title="$m" >/dev/null && echo "Milestone: $m"; }
    done
  fi

  # PRs must target the default branch to link to and close their issue ("Closes #N"), which moves the card.
  if gh api "repos/$repo/branches/develop" >/dev/null 2>&1; then
    if [ "$(gh repo view "$repo" --json defaultBranchRef -q .defaultBranchRef.name)" != develop ]; then
      gh repo edit "$repo" --default-branch develop >/dev/null && echo "Default branch: develop (so \"Closes #N\" links PRs and moves cards)"
    fi
  else
    echo "NOTE: no develop branch yet. Create it (apply-sop.sh --github) and make it the default branch."
  fi

  gh label create gate --repo "$repo" --color 5319e7 --description "Owner approval gate" --force >/dev/null
  gh label create needs-human --repo "$repo" --color e99695 --description "Needs a person: decision, credentials or a click" --force >/dev/null

  [ "$seed" = 1 ] && seed_issues "$repo" "$builds"
  [ "$seed" = 1 ] && cmd_modules "$repo" --build-phases "$builds" ${with[@]+"${with[@]}"}

  # Backfill: the auto-add workflow only catches new or changed issues
  local n=0
  while read -r u; do [ -n "$u" ] && gh project item-add "$num" --owner "$owner" --url "$u" >/dev/null && n=$((n+1)); done \
    < <(gh issue list -R "$repo" --state open -L 1000 --json url -q '.[].url')
  echo "Added $n open issues to the board"

  local url="https://github.com/$(owner_kind "$owner")/$owner/projects/$num"
  cat <<EOF

Board: $url
$( [ "$seed" = 1 ] || echo "Existing app: now fill the board from its real state (00-overview/project-board.md, \"Existing app\"), using: $0 card $repo ...")
One click left (GitHub doesn't copy it): $url/workflows -> "Auto-add to project" -> repository $name,
filter: is:issue is:open  -> Save and turn on.
Record the board link in docs/PROJECT-STATE.md.
EOF
}

seed_issues() { # <repo> <builds>
  local repo="$1" builds="$2"
  mk() { # <milestone> <labels> <title> <body>
    if [ -n "$(issue_by_title "$repo" "$3")" ]; then echo "Issue exists: $3"; return; fi
    gh issue create -R "$repo" --milestone "$1" --label "$2" --title "$3" --body "$4" >/dev/null && echo "Issue: $3" || echo "WARN: could not create: $3"
  }
  mk "01 Requirements" "gate,needs-human" "Gate 1: requirements + deep research" "Phase 01. Guide: SOP 01-discovery.

- [ ] Deep research report (competitors, pricing, must-haves, gaps)
- [ ] \`docs/REQUIREMENTS.md\` with the full screen inventory
- [ ] \`docs/APP-BRIEF.md\`
- [ ] \`docs/ROADMAP.md\` (Now / Next / Later)
- [ ] Client project: FR document signed
- [ ] Owner approved (recorded in \`docs/history/DECISIONS.md\`)"
  mk "02 Design" "gate,needs-human" "Gate 2: brand in Claivra" "Phase 02. Guide: SOP 02-design.

- [ ] Brand profile in Claivra (name, voice, audience)
- [ ] Logo
- [ ] Palette + type
- [ ] Owner approved (DESIGN-LOG + DECISIONS)"
  mk "02 Design" "gate,needs-human" "Gate 3: wireframes of every screen" "Every screen from the REQUIREMENTS screen inventory. Add one checkbox per screen.

- [ ] <screen>
- [ ] <screen>
- [ ] Owner approved (DESIGN-LOG + DECISIONS)"
  mk "02 Design" "gate,needs-human" "Gate 4: style options (1-2 sections in 3+ styles)" "- [ ] Pick the 1-2 key sections
- [ ] Style A
- [ ] Style B
- [ ] Style C
- [ ] Owner picked a style (DESIGN-LOG + DECISIONS)"
  mk "02 Design" "gate,needs-human" "Gate 5: full designs of every screen" "Every screen in the chosen style. Add one checkbox per screen.

- [ ] <screen>
- [ ] <screen>
- [ ] Owner approved: build can start"
  mk "03 Setup" "needs-human" "Setup: repo, environments, local CI, first deploy" "Phase 03. Guide: SOP 03-architecture.

- [ ] Owner asked: production only, or + staging (\`docs/ENVIRONMENTS.md\`)
- [ ] Stack + repo, \`apply-sop.sh --github\`, branch protection
- [ ] \`scripts/ci.sh\` green, \`scripts/deploy.sh\` filled in
- [ ] App \`CLAUDE.md\` filled in, with its \`## Map\`; \`docs/API.md\` and \`docs/DATABASE.md\` started (SOP 00-overview/splitting-the-build.md)
- [ ] More than one front end? API plan approved, one repo (apps/ + packages/), one backend
- [ ] Feature boxes in \`docs/REQUIREMENTS.md\` (4b), each with one owner and the folders/tables it owns
- [ ] Day 1 base live on production: login + one example feature box
- [ ] Build phases written in \`docs/ROADMAP.md\`, each Build milestone with a due date, one issue per feature box (nice-to-haves marked ~)"
  for i in $(seq 1 "$builds"); do
    mk "Build $i" "gate,needs-human" "Build $i: QA + owner sign-off" "Close this when every other issue in the Build $i milestone is Done.

- [ ] Regression checklist on \`develop\` (SOP 05-qa)
- [ ] Matches the approved designs (desktop + 390px)
- [ ] Owner signed off (staging if the app has one, else a local run)
- [ ] Released (SOP 07-release) or explicitly held for the next build"
  done
}

# ---------------------------------------------------------------- modules
# title | SOP file | skill | phase for a new app (first / mid / last build, or after) | existing app milestone
#   | optional key (empty = every app; a key = only with --with <key>, after the owner said the app needs it)
MODULES=(
  "Module: admin console|04-development/modules/admin-console.md|saas-admin-console|first|v1.1"
  "Module: Stripe billing|04-development/modules/stripe-billing.md|saas-stripe-billing|mid|v1.1"
  "Module: analytics + tracking (GSC, GTM, GA4, Clarity)|04-development/modules/analytics-tracking.md|saas-ga4-gtm-site-setup|mid|v1.1"
  "Module: lead capture guarantee (no lead or payment lost)|04-development/modules/lead-capture.md|saas-lead-capture-guarantee|mid|v1.1"
  "Module: lifecycle emails|04-development/modules/lifecycle-emails.md|saas-lifecycle-emails|last|v1.1"
  "Module: MCP feedback + feature requests|04-development/modules/mcp-feedback.md|saas-mcp-feedback|last|v1.1"
  "Launch: search indexing (Google + Bing)|07-release/search-indexing.md|saas-gsc-submit-indexing|last|v1.1"
  "Module: automatic SEO blog|04-development/modules/blog-system.md|saas-blog-system|after|Later"
  "Monthly SEO content plan|08-maintenance/monthly-seo.md|saas-monthly-seo-content-plan|after|Later"
  "Backlinks handover pack|08-maintenance/backlinks.md|saas-backlink-handover-pack|after|Later"
  "Social media accounts + Saymany (one email, test post)|08-maintenance/social-media.md|saas-social-media-setup|after|Later"
  "Module: Messenger + Instagram (Meta)|04-development/modules/meta-messaging.md|saas-meta-messaging-setup|after|Later|meta"
)
cmd_modules() {
  local repo="" existing=0 builds=3 with="" only=""
  while [ $# -gt 0 ]; do case "$1" in
    --existing) existing=1;; --build-phases) builds="${2:?}"; shift;; --with) with="$with,${2:?}"; shift;;
    --only) only="$only,${2:?}"; shift;;
    */*) repo="$1";; *) die "unknown arg $1";; esac; shift; done
  [ -n "$repo" ] || repo="$(current_repo)"
  local sop; sop="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
  local mid=2; [ "$builds" -lt 2 ] && mid=1
  local row title file skill when exms opt ms body list
  for row in "${MODULES[@]}"; do
    IFS='|' read -r title file skill when exms opt <<<"$row"
    if [ -n "$only" ]; then
      # Client app: the owner's pick decides, optional modules included
      if [[ "$only," != *",$skill,"* ]]; then echo "Skipped (not picked for this client): $title"; continue; fi
    elif [ -n "$opt" ] && [[ ",$with," != *",$opt,"* ]]; then
      echo "Skipped (optional, ask the owner first): $title. Add it with: modules $repo --with $opt"; continue; fi
    if [ -n "$(issue_by_title "$repo" "$title")" ]; then echo "Card exists: $title"; continue; fi
    if [ "$existing" = 1 ]; then ms="$exms"; else case "$when" in
      first) ms="Build 1";; mid) ms="Build $mid";; last) ms="Build $builds";; *) ms="After launch";; esac; fi
    # The checklist is the module file's own checkboxes (when this runs from the SOP checkout)
    list=""; [ -f "$sop/$file" ] && list="$(grep -E '^\s*- \[ \]' "$sop/$file" || true)"
    [ -n "$list" ] || list="- [ ] Every checkbox in the SOP file below is true"
    body="SOP checklist: https://github.com/HammadShahzad/saas-sop/blob/main/$file
Skill: \`$skill\` (Claude: load it and follow it; this card's boxes must all be true at the end).
Exact skill text: https://github.com/HammadShahzad/saas-sop/blob/main/skills/$skill/SKILL.md
Not needed for this app (e.g. no MCP server)? Close it as not planned with one line why.

$list"
    cmd_card "$repo" --title "$title" --milestone "$ms" --status Backlog --labels module --body "$body"
  done
  [ "$existing" = 1 ] && echo "Now tick each module card's boxes from the app's real state and move it (built → v1.0 (built) + Done)."
  return 0
}

# ---------------------------------------------------------------- move
cmd_move() { # 2-3 GitHub calls per move (one read, an add if needed, one write), to stay under the rate limit
  local issue="${1:?usage: move <issue#> \"<Status>\" [owner/repo]}" status="${2:?status}" repo="${3:-$(current_repo)}"
  printf '%s\n' "${STATUSES[@]}" | grep -qxF "$status" || die "status must be one of: ${STATUSES[*]}"
  local o="${repo%%/*}" n="${repo##*/}" row
  row="$(gh api graphql -f o="$o" -f n="$n" -F i="$issue" -f query='
    query($o:String!,$n:String!,$i:Int!){ repository(owner:$o,name:$n){
      projectsV2(first:20){ nodes{ id title closed
        field(name:"Status"){ ... on ProjectV2SingleSelectField{ id options{ id name } } } } }
      issue(number:$i){ id projectItems(first:20){ nodes{ id project{ id } } } } } }' \
    -q ".data.repository as \$r
        | [\$r.projectsV2.nodes[] | select(.closed==false and .title!=\"$TEMPLATE_TITLE\")] | first as \$p
        | if \$p == null then \"NOBOARD\" else
          [\$p.id, \$p.field.id, ([\$p.field.options[] | select(.name==\"$status\") | .id] | first // \"-\"),
           ([\$r.issue.projectItems.nodes[] | select(.project.id==\$p.id) | .id] | first // \"-\"), \$r.issue.id] | @tsv end")"
  [ "$row" != NOBOARD ] && [ -n "$row" ] || die "no board linked to $repo (run setup)"
  local pid fid oid item cid
  IFS=$'\t' read -r pid fid oid item cid <<<"$row"
  [ "$oid" != "-" ] || die "board has no \"$status\" column (was it copied from the template?)"
  if [ "$item" = "-" ]; then
    item="$(gh api graphql -f p="$pid" -f c="$cid" -f query='
      mutation($p:ID!,$c:ID!){ addProjectV2ItemById(input:{projectId:$p, contentId:$c}){ item{ id } } }' \
      -q .data.addProjectV2ItemById.item.id)"
  fi
  gh api graphql -f p="$pid" -f it="$item" -f f="$fid" -f v="$oid" -f query='
    mutation($p:ID!,$it:ID!,$f:ID!,$v:String!){ updateProjectV2ItemFieldValue(input:{
      projectId:$p, itemId:$it, fieldId:$f, value:{ singleSelectOptionId:$v } }){ projectV2Item{ id } } }' >/dev/null
  echo "#$issue -> $status"
}

# ---------------------------------------------------------------- card
issue_by_title() { # <repo> <exact title> -> issue number or empty
  # Lists titles instead of searching: GitHub search misses titles with quote marks (made a duplicate on 3loop).
  gh issue list -R "$1" --state all -L 1000 --json number,title -q '.[] | "\(.number)\t\(.title)"' |
    awk -F'\t' -v t="$2" '$2==t {print $1; exit}'
}

cmd_card() {
  local repo="" title="" ms="" status="Backlog" labels="" body="" has_body=0 note=""
  while [ $# -gt 0 ]; do case "$1" in
    --title) title="${2:?}"; shift;; --milestone) ms="${2:?}"; shift;; --status) status="${2:?}"; shift;;
    --labels) labels="${2:?}"; shift;; --body) body="$2"; has_body=1; shift;; --note) note="$2"; shift;;
    --body-file) if [ "$2" = - ]; then body="$(cat)"; else body="$(cat "${2:?}")"; fi; has_body=1; shift;;
    */*) repo="$1";; *) die "unknown arg $1";; esac; shift; done
  [ -n "$repo" ] || repo="$(current_repo)"
  [ -n "$title" ] || die "card needs --title"
  [ -n "$ms" ] || die "card needs --milestone (every issue has a phase or release)"
  printf '%s\n' "${STATUSES[@]}" | grep -qxF "$status" || die "status must be one of: ${STATUSES[*]}"

  gh api "repos/$repo/milestones?state=all&per_page=100" -q '.[].title' | grep -qxF "$ms" ||
    { gh api "repos/$repo/milestones" -f title="$ms" >/dev/null && echo "Milestone: $ms"; }
  # Arrays use ${a[@]+"${a[@]}"}: macOS ships bash 3.2, where an empty "${a[@]}" fails under set -u.
  local lbls=() l largs=() eargs=() cargs=()
  IFS=, read -ra lbls <<<"$labels"
  for l in ${lbls[@]+"${lbls[@]}"}; do
    l="$(echo "$l" | xargs)"; [ -n "$l" ] || continue
    gh label create "$l" --repo "$repo" --color ededed >/dev/null 2>&1 || true   # no-op if it exists
    largs+=(--label "$l"); eargs+=(--add-label "$l")
  done

  local n; n="$(issue_by_title "$repo" "$title")"
  if [ -n "$n" ]; then
    eargs+=(--milestone "$ms"); [ "$has_body" = 1 ] && eargs+=(--body "$body")
    gh issue edit "$n" -R "$repo" "${eargs[@]}" >/dev/null
    echo "Updated #$n $title"
  else
    local url; url="$(gh issue create -R "$repo" --title "$title" --milestone "$ms" --body "${body:-}" ${largs[@]+"${largs[@]}"})"
    n="${url##*/}"; echo "Created #$n $title"
  fi

  cmd_move "$n" "$status" "$repo" >/dev/null
  local state; state="$(gh issue view "$n" -R "$repo" --json state -q .state)"
  if [ "$status" = Done ] && [ "$state" = OPEN ]; then
    [ -n "$note" ] && cargs=(-c "$note")
    gh issue close "$n" -R "$repo" --reason completed ${cargs[@]+"${cargs[@]}"} >/dev/null
  elif [ "$status" != Done ] && [ "$state" = CLOSED ]; then
    gh issue reopen "$n" -R "$repo" >/dev/null
  fi
  echo "  #$n -> $status ($ms)"
  sleep "${BOARD_PAUSE:-2}"   # GitHub's secondary rate limit trips on fast issue creation; filling 20+ cards needs a pause
}

# ---------------------------------------------------------------- apps
cmd_apps() {
  local owner="" days=120
  while [ $# -gt 0 ]; do case "$1" in --days) days="${2:?}"; shift;; *) owner="$1";; esac; shift; done
  [ -n "$owner" ] || owner="$(gh api user -q .login)"
  local since; since="$(date -u -v-"${days}"d +%Y-%m-%dT%H:%M:%SZ 2>/dev/null || date -u -d "-$days days" +%Y-%m-%dT%H:%M:%SZ)"
  echo "Repos of $owner pushed to since ${since%%T*} (not forks, not archived):"
  gh repo list "$owner" -L 300 --no-archived --source --json nameWithOwner,pushedAt \
    -q ".[] | select(.pushedAt >= \"$since\") | .nameWithOwner" | sort |
  while read -r r; do
    [ "${r##*/}" = saas-sop ] && continue
    local b; b="$(board_of_repo "$r" 2>/dev/null || true)"
    if [ -n "$b" ]; then printf '  %-40s board #%s\n' "$r" "${b##* }"; else printf '  %-40s NO BOARD\n' "$r"; fi
  done
}

# ---------------------------------------------------------------- status
print_board() { # <project owner> <number> <repo>
  local powner="$1" num="$2" repo="$3"
  echo "== $repo  (https://github.com/$(owner_kind "$powner")/$powner/projects/$num)"
  echo "Phases (milestones):"
  gh api "repos/$repo/milestones?state=all&sort=due_on&per_page=100" \
    -q '.[] | (.open_issues+.closed_issues) as $t | if $t==0 then "  \(.title): no issues yet" else "  \(.title): \(.closed_issues)/\($t) done (\((100*.closed_issues/$t)|floor)%)" end'
  echo "Cards per column:"
  for s in "${STATUSES[@]}"; do
    local c; c="$(gh project item-list "$num" --owner "$powner" --format json -L 1000 -q "[.items[] | select(.status==\"$s\")] | length" 2>/dev/null || echo 0)"
    printf '  %-17s %s\n' "$s" "$c"
  done
  for s in "In progress" "Waiting on owner"; do
    echo "$s:"
    gh project item-list "$num" --owner "$powner" --format json -L 1000 \
      -q ".items[] | select(.status==\"$s\") | \"  #\(.content.number // \"-\") \(.title)\"" || true
  done
  echo
}

cmd_status() {
  local arg="${1:-}"
  if [ -z "$arg" ]; then arg="$(current_repo 2>/dev/null || gh api user -q .login)"; fi
  if [[ "$arg" == */* ]]; then
    local b; b="$(board_of_repo "$arg")"; [ -n "$b" ] || die "no board linked to $arg"
    print_board "${b% *}" "${b##* }" "$arg"; return
  fi
  # Every app board of an owner (the cross-app "where are we")
  gh api graphql -f o="$arg" -f query='
    query($o:String!){ repositoryOwner(login:$o){
      ... on User{ projectsV2(first:50){ nodes{ number title closed repositories(first:1){ nodes{ nameWithOwner } } } } }
      ... on Organization{ projectsV2(first:50){ nodes{ number title closed repositories(first:1){ nodes{ nameWithOwner } } } } } } }' \
    -q ".data.repositoryOwner.projectsV2.nodes[] | select(.closed==false and .title!=\"$TEMPLATE_TITLE\" and (.repositories.nodes|length)>0) | \"\(.number) \(.repositories.nodes[0].nameWithOwner)\"" |
  while read -r num repo; do print_board "$arg" "$num" "$repo"; done
}

case "${1:-}" in
  template) shift; cmd_template "$@";;
  views)    shift; add_views "${1:?usage: views <owner> <project#>}" "${2:?project number}";;
  setup)    shift; cmd_setup "$@";;
  move)     shift; cmd_move "$@";;
  status)   shift; cmd_status "$@";;
  card)     shift; cmd_card "$@";;
  modules)  shift; cmd_modules "$@";;
  apps)     shift; cmd_apps "$@";;
  *) awk 'NR>1 && /^#/ {sub(/^# ?/, ""); print; next} NR>1 {exit}' "$0"; exit 1;;
esac
