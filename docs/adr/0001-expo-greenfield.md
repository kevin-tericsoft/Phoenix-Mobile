# ADR 0001 — Greenfield Expo app (not in-place RN migration)

**Status:** accepted · **Date:** 2026-06-24

## Context
The existing customer app is `Converz-Customer-Reactnative` — React Native CLI, RN 0.77.1,
React 18.3.1, 69 screens, Redux + redux-saga, axios, 7 `patch-package` patches. It no longer
compiles on the current toolchain: RN 0.77's pinned `fmt`/Folly C++ fails under Xcode 26
(`consteval … is not a constant expression`). The backend has also been rewritten
(FastAPI + PostgreSQL), so the data layer must change regardless.

## Decision
Build a **new Expo app** under `Phoenix/new/Phoenix-Mobile`, porting the UI/feature set from
the old app, rather than migrating the old project in place. Target **Expo SDK 56**
(RN 0.85.3 / React 19.2.3).

## Why
- **The toolchain wall is unavoidable.** Any path forward requires moving off RN 0.77; a
  current Expo SDK ships RN/Folly/`fmt` that compile on Xcode 26.
- **The data layer is a rewrite either way** (new API), so "preserve the old code" buys little.
- **Greenfield sheds accumulated cruft for free** — no inherited patches, no orphaned
  native config, no hand-maintained `ios/android`.
- Expo gives us EAS Build/Update (the old app's AppCenter is retired) and config-plugin
  management of native deps.

## Alternatives considered
- **In-place CLI→Expo bare migration.** Rejected: carries the patch pile and native cruft;
  still forces the RN bump; more total work than a clean scaffold.
- **Stay on RN CLI, pin Xcode 16.** Rejected: freezes us on an unsupported toolchain and a
  retired CI/OTA pipeline; debt compounds.

## Consequences
- We re-implement navigation/state/auth on modern foundations (see ADRs 0002–0005).
- 69 screens must be ported; sequenced via a vertical slice first (ADR 0006).
- The old repo remains as the reference implementation during the port.
