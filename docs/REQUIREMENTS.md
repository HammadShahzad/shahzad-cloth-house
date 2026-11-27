# Requirements: <App name>

> Approved by owner on: <date> (Gate 1). Research: `docs/research/RESEARCH.md`.

## 1. Problem and goals
- Problem: <...>
- Goals: <...>
- Success metrics (90 days): <...>

## 2. Personas and roles
| Persona / role | Who | Needs | Permissions |
|---|---|---|---|
| Visitor | | | public pages |
| Workspace owner | | | everything in their workspace, billing |
| Member | | | |
| Platform admin | Hammad | see and run all tenants | /admin |

## 3. User flows
1. **Sign-up → activation**: <step by step>
2. **Core loop**: <...>
3. **Upgrade / pay**: <...>
4. **Invite team**: <...>
5. **Cancel**: <...>

## 4. Functional requirements
| ID | Requirement | Priority (Now/Next/Later) | Build phase | Acceptance criteria | Screen(s) |
|---|---|---|---|---|---|
| FR-001 | <Users sign up with email + password and verify email> | Now | 1 | <...> | Sign-up, Verify |
| FR-002 | | | | | |

## 4b. Feature boxes (who builds what)
One box = one thing a user can do, built through every layer (screen, API, tables, tests). One owner each. Big projects: group boxes into areas. Guide: SOP `00-overview/splitting-the-build.md`.
| Area | Feature box | Requirements | Owner (person / agent) | Owns (folders, tables) | Build phase |
|---|---|---|---|---|---|
| Base | Auth + workspaces | FR-001 | <lead> | `app/(auth)/*`, `lib/tenants.ts`, users, workspaces, memberships | 03 Day 1 |
| <Area> | <Box> | FR-0xx | | | Build 1 |

## 5. Screen inventory (drives wireframes)
| Screen | Area | Requirements | Desktop | Mobile | Notes |
|---|---|---|---|---|---|
| Home | Marketing | | ✓ | ✓ | |
| Pricing | Marketing | | ✓ | ✓ | |
| Sign up / Log in / Verify / Reset | Auth | FR-001 | ✓ | ✓ | |
| Onboarding | App | | ✓ | ✓ | |
| Dashboard | App | | ✓ | ✓ | |
| <Core screens> | App | | ✓ | ✓ | |
| Settings / Billing / Team | App | | ✓ | ✓ | |
| Admin console | Admin | | ✓ | ✓ | |

## 6. Non-functional
- Performance: <...> · Security: SOP security baseline · Accessibility: WCAG AA · Languages: <...> · Devices: web + mobile web now, native <Later>

## 7. Integrations and data
- Integrations: <Stripe, email provider, Meta, ...>
- Main objects: <Workspace, User, Membership, ...> and relations
- Emails / notifications: <list>

## 8. Standard modules
- [ ] Stripe billing - [ ] Admin console - [ ] Lifecycle emails - [ ] MCP + feedback - [ ] Analytics - [ ] Blog - [ ] Meta messaging

## 9. Out of scope
- <...>

## 10. Open questions
- <...>
