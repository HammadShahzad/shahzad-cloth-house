# Bug history: Shahzad Cloth House

One row per bug fixed (open bugs live in Issues). Newest first.

| Bug | Issue | Severity | Found in | Root cause | Fix PR | Test added | Fixed in | Date |
|---|---|---|---|---|---|---|---|---|
| `npm run lint` fails: Next 16 removed `next lint` | | P3 | local CI | script left from Next 15 | SOP setup PR | none (script removed; ESLint is a board card) | v1.1 | 2026-11-27 |
| `tsconfig.tsbuildinfo` tracked, so every build dirtied the tree | | P3 | local CI | build cache committed | SOP setup PR | none | v1.1 | 2026-11-27 |
