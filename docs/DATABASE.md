# Database: <App name>

> Every table, in plain words. **Read this before you build.** The schema file is the exact truth: <`prisma/schema.prisma` | `db/schema.ts`>. A PR that adds a table or column updates this file and the schema in the same PR.
> Migrations are add-only. Each feature box adds only its own tables.

| Table | What it's for | Owned by (feature box) | Key columns / notes |
|---|---|---|---|
| `users` | People who can log in | Auth (base) | `email` unique |
| `workspaces` | A customer account (tenant) | Auth (base) | |
| `memberships` | Who is in which workspace, with which role | Auth (base) | `role`: owner, admin, member |
| `<table>` | <...> | <box> | <...> |

## Relations (short)
- A workspace has many memberships; a user can be in many workspaces.
- <...>
