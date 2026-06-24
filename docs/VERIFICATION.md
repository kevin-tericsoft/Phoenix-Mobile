# Verification — vertical slice

What has been proven to work, and how, as of 2026-06-24.

## Build & boot
- `expo run:ios` → **Build Succeeded** on Xcode 26 / iOS 26.5 Simulator (iPhone 17 Pro).
- Confirms the old RN-0.77 blocker (`fmt` `consteval` error under Xcode 26) is gone on RN 0.85.
- App launches; Metro bundles (~1300 modules) and Fast Refresh is live.

## Type safety
- `npx tsc --noEmit` passes.
- `src/api/schema.d.ts` is generated from the live OpenAPI spec via `npm run gen:api`
  (`scripts/gen-api.mjs`), which strips 181 redundant `Authorization` header params.

## UI
- Sign-in screen renders on device (screenshot captured): title, subtitle, email field,
  and a correctly-gated "Get code" button (disabled until the email is valid).

## API contract (exercised against the live Phoenix-API)
| Call | Result |
|---|---|
| `POST /shared/v1/auth/otp/request` (unknown email) | `404 {error:{code:"NOT_FOUND"}}` (typed error path) |
| `POST /shared/v1/auth/otp/request` (active user) | `200 {"message":"OTP sent."}` |
| `POST /shared/v1/auth/otp/verify` (bad otp) | `401 {error:{code:"UNAUTHORIZED"}}` |
| `POST /shared/v1/auth/otp/verify` (master otp) | `200` → access + refresh tokens |
| `GET /shared/v1/auth/me` (Bearer) | `200` → real profile (Vinay Kumar Nagella, PH-1164) |
| `POST /shared/v1/auth/refresh` | `200` → rotated tokens |

These are the exact endpoints + token shapes the mobile auth stack targets, so the slice is
validated at the contract boundary.

## Not yet verified (manual)
- The literal on-device tap-through (type email → type OTP → land on Home). Blocked only by
  simulator input tooling (no `simctl` tap/type, accessibility automation denied). **You can
  do it manually now:** the API has `MASTER_OTP=123456`, so on the running simulator enter an
  active user's email (e.g. `vinaykumar.n@phoenixindia.net`) and code `123456`.

## Slice 1 — notifications (2026-06-24)
Backend `/shared/v1/notifications` (list + unread-count + mark-read) added to Phoenix-API,
scoped to the caller via `notification_recipients`. Validated:
- API: list (status `sent`) → unread-count `1` → `POST /{id}/read` `204` → unread-count `0`
  → status `read` with `read_at`.
- **On device:** authed Home renders `/me` (Vinay Kumar Nagella, PH-1164); the **Alerts tab
  shows a live "2" unread badge**; the Notifications screen renders both seeded items with
  unread dots. Screenshots captured.

### Dev utility: token injection
`auth-context.tsx` honours `EXPO_PUBLIC_DEV_TOKENS` (a `{access_token,refresh_token}` JSON)
under `__DEV__` only — seeds a session so authed screens open without typing an OTP in the
simulator. Unset in normal runs. Mint tokens via the auth curl flow (MASTER_OTP) and start
Metro with the env var.

## Slices 2–8 — feature domains (2026-06-24)
Each domain added a `/shared` API to Phoenix-API (per ADR 0007) + a mobile screen, and was
validated against the live API and rendered on the iOS Simulator. All screenshots captured.

| Domain | Endpoints added | API check | On device |
|---|---|---|---|
| Notifications | `GET /notifications`, `/unread-count`, `POST /{id}/read` | list→read→count flow | list + Alerts badge "2" |
| Polls | `GET /polls`, `POST /polls/{id}/vote` | vote → has_responded true | poll card with options |
| Walls | `GET /walls`, `PUT/DELETE /walls/{id}/reaction` | react→change→remove, counts | Community feed + emoji |
| Events | `GET /events`, `PUT/DELETE /events/{id}/interest` | interest toggle + count | event card + RSVP |
| Amenities | `GET /amenities`, `/{id}`, `POST /{id}/reviews` | review → avg_rating 5.0 | list→detail stack, review form |
| Visitors | `POST /visits`, `GET /visits`, `POST /{id}/cancel` | invite (visit_code) → cancel | list + modal invite + FAB |
| Parcels | `GET /parcels` | tenant-scope 400 guard + happy path | parcel list |
| Profile | `PATCH /shared/v1/auth/me` | designation update, role intact | profile view + edit |

Scoping guards verified by construction: every customer query is filtered to the caller's
property/tenant; `/parcels` correctly 400s for a user with no tenant; visit-cancel 403s for a
non-owner. The typed client also caught a real contract gap during the visitors slice
(`vehicle_numbers`/`include_parking` required in the generated type) — fixed at the call site.

## Test-data note (backend seed gap)
Phoenix-API `seed.py` creates only 3 users, all admin/staff, none linked to a property/tenant.
Customer `/shared` endpoints are property/tenant-scoped, so for end-to-end testing the test
user `vinaykumar.n@phoenixindia.net` was manually linked to a property + tenant and rows seeded
via psql. A realistic customer/tenant seed is a backend follow-up (see BACKEND-GAP).

## How to run locally
```bash
# 1. Backend (from Phoenix-API)
uv run uvicorn app.main:app --port 8000      # health: GET /shared/v1/health
# 2. Mobile (from Phoenix-Mobile)
npx expo run:ios                              # first build is slow; then JS hot-reloads
npm run gen:api                               # regenerate types after backend changes
```
