# ADR 0007 — The `/shared` customer-endpoint pattern

**Status:** accepted · **Date:** 2026-06-24

## Context
The mobile app needs customer-scoped endpoints that mostly don't exist yet; Phoenix-API has
the domain logic but only on the `/admin/v1` surface (see BACKEND-GAP). We are adding the
customer surface domain by domain, in the backend repo.

## Decision
For each domain, add a **`shared_router`** to the existing `app/<domain>/router.py` with
prefix `/shared/v1/<domain>` and tag `shared-<domain>`, mounted in `main.py` next to the
admin router. Customer endpoints:
- depend on `CurrentUserDep` (or a tenant role guard), **never** an admin guard;
- **scope every query to the caller** (`cu.user_id` / their tenant / their property);
- expose **only customer actions** (read, plus act-on-self: vote, RSVP, book, mark-read),
  never management/CRUD;
- reuse the domain's existing models and, where possible, service helpers; add
  customer-specific service functions (`list_my_*`, `mark_my_*`) rather than overloading
  admin ones.

First implementation: notifications (`list_my_notifications`, `mark_my_notification_read`,
`my_unread_count`) → `/shared/v1/notifications`, `/unread-count`, `/{id}/read`.

## Why
- **Consistency** with the existing admin/shared split already used by `identity`
  (`shared_router` for auth, `admin_router` for user CRUD).
- **Security by construction** — separate routers make it hard to accidentally expose an
  admin-scoped query to a customer; scoping lives in the customer service function.
- **Reuses tested domain models** instead of a parallel implementation.

## Consequences
- Each mobile domain slice is paired with a backend `shared_router` addition + `npm run
  gen:api` on the mobile side.
- `main.py` gains one import + one `include_router` per domain.
- The auth-spec gap (ADR 0005 / BACKEND-GAP#auth-spec) still applies; `gen-api.mjs` keeps
  handling it until the backend adopts `HTTPBearer`.

## Verified (notifications)
list → unread-count 1 → mark-read (204) → unread-count 0 → status `read`; rendered on the iOS
Simulator (Home tab badge + Notifications list). See VERIFICATION.md.
