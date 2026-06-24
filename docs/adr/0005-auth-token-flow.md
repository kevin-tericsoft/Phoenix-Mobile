# ADR 0005 — Auth: email OTP + access/refresh tokens in SecureStore

**Status:** accepted · **Date:** 2026-06-24

## Context
Old app auth: two OTP paths — **phone/SMS** (`securityApiUrl/sendOtp` + `{phoneNumber,otp}`)
and **email** (`/sendEmailOtp`) — issuing a single long-lived JWT stored in AsyncStorage
(plaintext). New Phoenix-API auth is **email OTP only**, issuing a short-lived **access
token (15 min) + refresh token**: `/shared/v1/auth/otp/request|verify|refresh|logout|me`.

## Decision
- **Email OTP** login: request code → verify → receive `{access_token, refresh_token}`.
- Tokens stored in **`expo-secure-store`** (Keychain/Keystore), never AsyncStorage.
- A single HTTP middleware (`src/lib/http.ts`) injects the Bearer access token and, on a
  `401`, performs a **single-flight refresh** then retries the request once; on refresh
  failure it clears the session (logout).
- **SMS login is deferred** (the new API has no phone-OTP endpoint yet).

## Why
- **Match the backend.** The token lifecycle (short access + refresh) is dictated by the API.
- **Secure storage for credentials.** Access tokens grant entry; they belong in the device
  secure enclave, not a plaintext file. (Web analogue: this is the httpOnly-cookie role.)
- **Single-flight refresh** prevents a thundering herd of refreshes when several requests
  401 simultaneously after the access token expires.

## Backend gap discovered
The spec declares `Authorization` as an **explicit required header parameter on 181
endpoints** and defines **no `securitySchemes`**. Correct design is a bearer
`securityScheme`. Until the backend changes, `scripts/gen-api.mjs` strips those params and
injects a bearer scheme so the generated types stay clean. Tracked in
[BACKEND-GAP.md](../BACKEND-GAP.md#auth-spec).

## Alternatives considered
- **Store tokens in AsyncStorage** (as the old app did). Rejected: plaintext; insecure for
  credentials.
- **Refresh proactively on a timer.** Rejected for now: reactive 401-refresh is simpler and
  sufficient; revisit if token expiry causes visible request stalls.

## Consequences
- Cold start awaits a keychain read before deciding authed/unauthed (the `loading` state in
  `auth-context.tsx`), avoiding a login-screen flicker.
- A logout must also call `/shared/v1/auth/logout` to revoke the refresh token (TODO when the
  profile/settings screen lands).
