# ADR 0010 — VMS visitor check-in/check-out (the gate flow)

**Status:** accepted · **Date:** 2026-06-25

## Context
Visitor management is the flagship feature and spans all three apps (admin-UI, backend,
mobile). The lifecycle: a resident invites a visitor → the visitor arrives at the gate →
security verifies and admits them → security checks them out on exit.

Key question raised: **can visitors check themselves in?** No — visitors are not app users.
A `Visitor` is just an identity record (name/phone) created when a resident invites them; they
have no login. So check-in/out is performed by **security staff**, who use this same mobile
app at the gate. (A self-service kiosk could be added later as a separate public endpoint.)

## Decision
Model the flow as a backend state machine driven by two actors:

- **Resident** (`POST /shared/v1/visits`): creates a `Visit` (`pending`) with a `visit_code`.
- **Security** (`security` role), via gate endpoints:
  - `GET /shared/v1/visits/lookup/{code}` — pull up a visit by its code (scan/type)
  - `GET /shared/v1/visits/gate/queue?status=` — the day's queue at their property
  - `POST /shared/v1/visits/{id}/gate/approve | gate/check-in | gate/check-out`
- All gate endpoints `RequireSecurity` and are **scoped to the security user's property**.
- Transitions enforce the existing state machine: `pending → approved → checked_in → checked_out`.

Mobile: a **Gate screen** (security-only, surfaced by a role-gated Home card) with a code
lookup bar, **QR scan** (`expo-camera`), a status-filtered queue, and a `GateVisitCard` whose
single action button advances the visit through its lifecycle. Admin-UI already had the
desk-side equivalent (`VisitDrawer` check-in/out).

## Why
- **Security-driven check-in matches reality** (visitors have no accounts) and keeps the
  trust boundary correct — only `security` can admit people, enforced server-side.
- **One state machine, three surfaces.** Backend owns the transitions; mobile and admin-UI are
  thin drivers. No duplicated lifecycle logic.
- **Property scoping by construction** — a guard at one property can't touch another's visits.

## Consequences
- The mobile app is now explicitly multi-role: residents and security staff share it, with
  role-gated UI (`me.role.code === 'security'`).
- QR scan needs `expo-camera` (native) and can't be exercised in the iOS Simulator; manual
  code entry covers simulator testing. Verified end-to-end via API + the queue/lifecycle UI.
- A visitor self-service kiosk remains a possible future addition (separate public endpoint).
