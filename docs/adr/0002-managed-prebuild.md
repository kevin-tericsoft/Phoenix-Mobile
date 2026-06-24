# ADR 0002 — Managed workflow with prebuild (CNG)

**Status:** accepted · **Date:** 2026-06-24

## Context
Expo offers two ways to handle the native projects: **bare** (commit `ios/` and `android/`
and edit them directly) or **managed + prebuild** / Continuous Native Generation (CNG),
where native folders are *generated* from `app.json` + config plugins and are not committed.
Our app needs native modules: `expo-secure-store`, and later `react-native-vision-camera`
(QR scanning) and `react-native-onesignal` (push).

## Decision
Use the **managed workflow with prebuild (CNG)**. `ios/` and `android/` are git-ignored
build artifacts. Native capabilities are added via Expo config plugins in `app.json`.

## Why
- **Native folders as artifacts, not source.** Like `.next/` or `dist/` on the web — never
  hand-edited, regenerated on demand. This is what let the old app rot (hand-maintained
  native config drifting out of sync).
- **Upgrades are tractable.** `expo prebuild --clean` regenerates native against the new SDK
  instead of merging native diffs by hand.
- **Config plugins cover our native deps.** vision-camera and onesignal both ship plugins.

## Alternatives considered
- **Bare workflow.** Rejected unless a required native change has no plugin. Reintroduces the
  exact hand-maintained-native problem we're escaping.

## Consequences
- Adding/upgrading a native module requires a dev-client rebuild (`expo run:ios`); pure JS
  changes still hot-reload instantly via Metro.
- Native config lives declaratively in `app.json`; entitlements (push, camera perms) are
  expressed as plugin props, not edited in Xcode.
- We must not commit `ios/`/`android/`; they're in `.gitignore`.
