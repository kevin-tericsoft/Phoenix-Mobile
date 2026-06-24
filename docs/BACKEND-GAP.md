# Backend Gap — customer (`/shared`) endpoints

The mobile app is a **customer/tenant** client. Phoenix-API began admin-heavy (~115
`/admin/v1` vs ~10 `/shared/v1`). **This rewrite added the customer surface for all 8 feature
domains** (now ~25 `/shared` endpoints) following ADR 0007. The sections below are updated:
most are **DONE**; what remains is native-dependent features, detail screens, and a couple of
genuinely new endpoints.

## Done in this rewrite ✅
- **Auth** — OTP login/refresh/logout/me (+ `PATCH /me` self-edit).
- **Notifications** — `GET /notifications`, `/unread-count`, `POST /{id}/read`.
- **Polls** — `GET /polls`, `POST /polls/{id}/vote`.
- **Walls** — `GET /walls`, `PUT/DELETE /walls/{id}/reaction`.
- **Events** — `GET /events`, `PUT/DELETE /events/{id}/interest`.
- **Amenities** — `GET /amenities`, `GET /{id}`, `POST /{id}/reviews` (browse + review; the
  old app never booked amenities, and no booking model exists — see note below).
- **Visitors** — `POST /visits` (invite), `GET /visits`, `POST /{id}/cancel`.
- **Parcels** — `GET /parcels` (my tenant's parcels).
- **Profile** — `PATCH /shared/v1/auth/me`.

## Still needed (the real remaining gap)

## Legend
- **Have** — exists on `/shared/v1` today.
- **Admin-only** — logic exists under `/admin/v1` but is not exposed to customers.
- **Missing** — not implemented anywhere customer-facing.

1. **Push device registration** — `POST /shared/v1/notifications/devices` (OneSignal player
   id ↔ user). Needs the OneSignal native module + APNs/FCM; deferred (low local-test ROI).
2. **Visitor QR validation** — security scanning a `visit_code` (`react-native-vision-camera`).
   The `visit_code` is already issued by `POST /visits`; needs a scan-validate endpoint +
   native camera.
3. **Self-signup** — old app had `/signup`; no customer self-registration exists in the new
   API. Product decision needed (invite-only vs open signup).
4. **Home aggregate** — `GET /shared/v1/home` to populate the dashboard hub with live widgets
   (currently static tiles; ADR 0008).
5. **Event detail** — FAQs/performers/gallery/booking sub-resources on `/shared/v1/events/{id}`.
6. **Realistic customer seed** — `seed.py` has only 3 admin users, none property/tenant-linked,
   so customer flows can't be tested without manual psql setup. Add tenant/resident seed users.
7. **SMS/phone OTP** — old app had it; new API is email-only (deferred, see ADR 0005).

## <a id="auth-spec"></a>0. Cross-cutting: auth is not a security scheme
**Severity: high — affects every typed client (mobile + Admin-UI).**

181 endpoints declare `Authorization` as an explicit **required header parameter**, and the
spec defines **no `securitySchemes`**. Correct OpenAPI is a bearer security scheme:

```python
# FastAPI: depend on HTTPBearer so the Authorization header becomes a securityScheme,
# not a per-endpoint parameter.
from fastapi.security import HTTPBearer
bearer = HTTPBearer()
```

Until fixed, `scripts/gen-api.mjs` strips the redundant params and injects a bearer scheme so
generated types stay usable. **Action:** model auth via `HTTPBearer`/`securitySchemes`.

## 1. Auth — **Have** ✅
`/shared/v1/auth/otp/request | otp/verify | refresh | logout | me` — validated end-to-end.
- Gap: **no phone/SMS OTP** (old app had it). Deferred; add `/shared/v1/auth/otp/request`
  channel param or a phone endpoint if SMS login returns.

## 2. Home / dashboard — **Missing**
Old `HomeScreen` aggregates announcements, polls, event walls, quick actions.
Needs a customer home aggregate, e.g. `GET /shared/v1/home` or per-widget endpoints below.

## 3. Amenities (booking) — **Admin-only** (`admin-amenities`)
Customer needs: list bookable amenities, availability/slots, create/cancel my booking,
list my bookings.
- `GET /shared/v1/amenities`
- `GET /shared/v1/amenities/{id}/availability`
- `POST /shared/v1/amenities/{id}/bookings`
- `GET /shared/v1/amenities/bookings/me`
- `DELETE /shared/v1/amenities/bookings/{id}`

## 4. Engagement: events, polls, walls — **Admin-only** (`admin-engagement`)
Old domains `events/`, `polls/`, `walls/`.
- `GET /shared/v1/events`, `GET /shared/v1/events/{id}`, `POST .../rsvp`
- `GET /shared/v1/polls`, `POST /shared/v1/polls/{id}/vote`
- `GET /shared/v1/walls` (feed), `POST /shared/v1/walls/{id}/react`

## 5. Notifications — **Admin-only** (`admin-notifications`)
- `GET /shared/v1/notifications` (mine, paginated)
- `POST /shared/v1/notifications/{id}/read`
- Device registration for push (OneSignal): `POST /shared/v1/notifications/devices`

## 6. Security / Visitor management — **Missing**
Old `security/visitor/*`, `security/parcelManagement/*`, `security/fm/*` — the largest domain.
- Visitor invites: `POST /shared/v1/visitors`, `GET /shared/v1/visitors`, approve/deny
- Guest/visitor QR validation (vision-camera scan): `POST /shared/v1/visitors/validate`
- Parcels: `GET /shared/v1/parcels`, create/collect
- FM (facility) flows: TBD against new `operations`/`infra` domains

## 7. Profile — **Partial** (`/me` Have; edit Missing)
- `PATCH /shared/v1/auth/me` or `/shared/v1/profile` for self-service edits
- `GET /shared/v1/profile/virtual-id` (old `VirtualId` screen)

## 8. Files — **Have** ✅
`/shared/v1/files/presign | confirm | {file_id}` — used for avatar/visitor photo uploads.

## 9. Reference data — **Have** ✅
`/shared/v1/reference/state-codes`. May need more (towers, units) for forms.

---

### Sequencing recommendation
Backend should expose `/shared` endpoints in this order to unblock the mobile port:
**notifications + device registration → home aggregate → engagement (events/polls/walls)
→ amenities booking → visitor management.** Mobile screens are ported UI-first and wired to
these as they land (see [PORTING-LOG.md](./PORTING-LOG.md)).
