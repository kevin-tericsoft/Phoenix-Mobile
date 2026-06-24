# ADR 0006 — Vertical slice first

**Status:** accepted · **Date:** 2026-06-24

## Context
69 screens across 11 domains must be ported. Two sequencing strategies: build all
infrastructure/tooling fully first, then port domains; or build one feature end-to-end
through every layer before fanning out.

## Decision
Build a **vertical slice** first: `email-OTP login → token storage → GET /me → Home`,
touching every layer (routing, auth context, secure storage, typed client, Query, screen)
before porting additional domains.

## Why
- **Derisks the unknowns early.** Auth + the typed client + secure storage are the riskiest
  novel pieces; proving them once de-risks all later domains, which then reuse the same seams.
- **A runnable app from day one.** We can log in and render real data immediately, instead of
  a long tooling phase with nothing to show.
- **Best learning arc.** Each layer is introduced in context with a working result.

## Consequences
- The Home screen ships as a thin proof (renders `/me`) and is fleshed out later when the
  customer home endpoint exists (BACKEND-GAP §2).
- Subsequent domains are mechanical: add `features/<x>/queries.ts` + screens, reuse the
  established auth/Query/client seams.
- Fan-out is gated on backend `/shared` endpoints landing (BACKEND-GAP).
