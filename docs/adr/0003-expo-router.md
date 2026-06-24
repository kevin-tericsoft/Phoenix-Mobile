# ADR 0003 — Expo Router (file-based navigation)

**Status:** accepted · **Date:** 2026-06-24

## Context
The old app uses React Navigation v7 configured imperatively (a central navigator with a
`RoutesConfig`/`NavigateTo` registry). We need navigation for the rewrite, including an
auth-gated split between signed-out and signed-in areas.

## Decision
Use **Expo Router** — file-based routing where a file under `src/app/` is a route. Auth
gating uses `Stack.Protected guard={...}` route groups.

## Why
- **Maps to knowledge you already have.** It's the React Native analogue of Next.js App
  Router: folders are route segments, `_layout.tsx` ≈ `layout.tsx`, `(group)` are
  pathless groups. Mental-model transfer from web is near-total.
- **Built on React Navigation.** Same underlying library as the old app — we get the modern
  ergonomics without losing capability.
- **Declarative auth gating.** `Stack.Protected` registers only the matching group, so
  login/logout redirects happen automatically from auth state — no imperative
  `navigation.reset()` choreography.
- **Deep links + typed routes** come largely for free.

## Alternatives considered
- **Port React Navigation as-is.** Fastest 1:1 port, but keeps the older imperative style and
  diverges from where Expo is heading; loses file-based/deep-link/typed-route benefits.

## Consequences
- Screens are reorganised into a route tree: `(auth)/sign-in`, `(auth)/verify`,
  `(app)/index`, etc., instead of a flat screen registry.
- Navigation params replace passing props through a navigator (e.g. `email` to the verify
  screen via `router.push({ params })`).
- Verified against SDK 56 docs that `Stack.Protected` + `guard` is current API.
