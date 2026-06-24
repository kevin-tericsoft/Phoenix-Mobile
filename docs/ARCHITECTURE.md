# Phoenix Mobile — Architecture

> The Converz customer mobile app, rewritten greenfield on Expo. This document is the
> living map of how the app is built and **why**. Every significant decision has an ADR
> in [`docs/adr/`](./adr). Read the ADRs in order for the full reasoning trail.

## 1. What this is

A from-scratch rewrite of `Converz-Customer-Reactnative` (React Native CLI, RN 0.77) as a
modern **Expo** app, talking to the rewritten **Phoenix-API** (FastAPI + PostgreSQL).

We are **porting** the UI/feature set from the old app but **rewriting** the data layer,
auth, navigation, and build pipeline. Nothing below the JSX is carried over verbatim.

## 2. The stack (and the one-line why)

| Layer | Choice | Why (short) | ADR |
|---|---|---|---|
| Runtime | Expo SDK 56 (RN 0.85.3, React 19.2.3) | Latest; resolves the Xcode-26/`fmt` wall that blocked RN 0.77 | [0001](./adr/0001-expo-greenfield.md) |
| Native mgmt | Managed + prebuild (CNG) | `ios/`/`android/` are build artifacts, not source | [0002](./adr/0002-managed-prebuild.md) |
| Navigation | Expo Router (file-based) | Routes = files; maps to Next.js App Router | [0003](./adr/0003-expo-router.md) |
| Server state | TanStack Query | Caching/refetch/loading for free; kills saga boilerplate | [0004](./adr/0004-tanstack-query.md) |
| API client | `openapi-typescript` + `openapi-fetch` | Types generated from the live OpenAPI contract; no drift | [0004](./adr/0004-tanstack-query.md) |
| Token storage | `expo-secure-store` | Keychain/Keystore-backed; never AsyncStorage for tokens | [0005](./adr/0005-auth-token-flow.md) |
| Auth | Email OTP + access/refresh JWT | Matches the new API; old SMS path deferred | [0005](./adr/0005-auth-token-flow.md) |
| Styling | `StyleSheet` + flexbox | Porting 69 screens; restyle = cost, no gain | — |
| Language | TypeScript | Non-negotiable for safe porting | — |
| Customer API | `/shared` router per domain | Thin, caller-scoped, customer-action-only | [0007](./adr/0007-shared-api-pattern.md) |
| Navigation shape | Home hub + 4-tab cap | Phone ergonomics; hub hosts the future home aggregate | [0008](./adr/0008-navigation-hub-tabs.md) |
| Visual design | "Aurora" — brand gradient, depth, Sora type, motion; cross-platform glass | Major overhaul keeping brand azure; iOS-native glass + Android blur fallback | [0009](./adr/0009-aurora-design-system.md) |

## 3. Folder structure

```
src/
  app/                 # Expo Router routes (file = route)
    _layout.tsx        # root: providers + auth-gated Stack
    (auth)/            # unauthenticated group (email → otp)
    (app)/             # authenticated group (tabs: home, …)
  features/            # feature modules (auth, home, amenities, …)
    <feature>/         # screens + hooks + components co-located
  lib/                 # cross-cutting infra
    config.ts          # base URL per platform/env
    query.ts           # QueryClient
    secure-store.ts    # token persistence
    http.ts            # typed openapi-fetch client + auth middleware
  api/
    schema.d.ts        # GENERATED from Phoenix-API OpenAPI (do not edit)
docs/
  ARCHITECTURE.md      # this file
  adr/                 # one file per decision
  BACKEND-GAP.md       # customer endpoints the API still needs
  PORTING-LOG.md       # per-domain port progress + endpoint mapping
```

## 4. How data flows (the mental model)

```
Screen (feature/*)            React component, dumb-ish
  └─ useQuery / useMutation    TanStack Query hook (feature/<x>/queries.ts)
       └─ openapi-fetch client typed GET/POST against the OpenAPI schema
            └─ auth middleware injects Bearer, retries once on 401 via /refresh
                 └─ Phoenix-API   FastAPI, /shared/v1/* (customer surface)
```

The web analogue: this is exactly `React Query + a typed fetch wrapper hitting a REST API`.
If you've built that on the web, you already know this layer — the only RN-specific piece
is token storage going through the device keychain instead of `localStorage`.

## 5. Backend: admin-first, customer surface added by this rewrite

Phoenix-API began admin-heavy (~115 `/admin/v1` vs ~10 `/shared/v1`). The mobile app is the
**customer** half. This rewrite added the customer (`/shared`) surface for all 8 feature
domains following [ADR 0007](./adr/0007-shared-api-pattern.md) — each a thin router over the
existing domain models, scoped to the caller and limited to customer actions. The customer
surface is now ~25 endpoints.

- **Done:** auth, notifications, polls, walls, events, amenities, visitors, parcels, profile
  edit, plus a Home hub. All validated on the iOS Simulator — see
  [`VERIFICATION.md`](./VERIFICATION.md) and [`PORTING-LOG.md`](./PORTING-LOG.md).
- **Remaining** (native-dependent or new endpoints): push registration, visitor QR scan,
  self-signup, home aggregate, event detail sub-resources, realistic customer seed — see
  [`BACKEND-GAP.md`](./BACKEND-GAP.md).

## 6. The repeatable per-domain recipe

Every domain followed the same loop:
1. Read the admin model/service for the domain in Phoenix-API.
2. Add a `shared_router` (prefix `/shared/v1/<domain>`, `CurrentUserDep`, **scope every query
   to the caller**, customer actions only) + customer service fns + lean output schemas.
3. Mount it in `main.py` (`--reload` picks it up).
4. `npm run gen:api` on mobile → typed client + types refresh from the live spec.
5. Add `features/<domain>/queries.ts` (typed Query hooks) + a screen under `app/(app)/`.
6. Validate against the live API (curl) and on the Simulator (deep-link + screenshot).
7. Document: PORTING-LOG row + VERIFICATION entry, ADR if a new pattern.
