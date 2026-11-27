# API: <App name>

> Every endpoint and MCP tool the app has. **Read this before you build.** A PR that adds or changes an endpoint or tool updates this file in the same PR.
> Rule: changes are **add-only** while any app (above all a mobile app) still uses the old shape. Never rename, remove or change a field's type; add the new one, move the apps, remove the old one in a later release.
> Contract source (multi-app products): <`packages/contract/` | `openapi.yaml` | n/a, one web app>

## Endpoints
| Method + path | Who can call it | In | Out | Used by | Feature box |
|---|---|---|---|---|---|
| `POST /api/auth/signup` | anyone | email, password | user | web | Auth |
| `GET /api/<thing>` | member | `?page` | list of <thing> | web, mobile | <box> |

## Webhooks (incoming)
| Path | From | What it does |
|---|---|---|
| `/api/webhooks/stripe` | Stripe | <billing events> |

## MCP tools
| Tool | Who (user / admin) | What it does | Feature box |
|---|---|---|---|
| `submit_feedback` | user | <...> | Feedback |

## Mobile app versions (if there is a mobile app)
- Minimum supported version endpoint: <`GET /api/app/min-version`>
- Current minimum: <1.0.0>. Old versions kept working until: <date>
