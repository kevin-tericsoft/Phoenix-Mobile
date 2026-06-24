# ADR 0009 — "Aurora" design system + cross-platform glass

**Status:** accepted · **Date:** 2026-06-24

## Context
The first build used neutral placeholder UI to prove data/architecture. The product owner
asked for a major visual overhaul: keep the brand colour, but go well beyond both the old app
and the placeholder — better styling, depth, and motion — and **keep iOS-native glass while
also looking first-class on Android**.

## Decision
Adopt **Aurora**: a brand-gradient, depth-and-motion design language.

- **Tokens** (`src/theme/tokens.ts`): the old brand azure `#0078F3` expanded into a tonal
  ramp, plus ink neutrals (from old `accent`/`contextText`), spacing, radii, a type scale,
  gradients, and platform-aware elevation. Screens read tokens, never raw hex/px.
- **Typography:** Sora (geometric sans) via `@expo-google-fonts`, loaded in the root layout;
  all text goes through `<AppText variant=...>`.
- **Primitives** (`src/components/ui`): `GradientHeader` (signature brand hero), `GlassSurface`,
  `PressableScale` (spring + haptic), `FadeInView` (staggered mount), `AppText`.
- **Motion:** Reanimated 4 — entrance fade-up/stagger, spring press-scale, + `expo-haptics`.
- **Cross-platform glass** — one `<GlassSurface>` renders the best available per platform:
  iOS 26 → `expo-glass-effect` (Liquid Glass); Android / older iOS → `expo-blur` BlurView
  (with `experimentalBlurMethod` for real Android blur); else a tinted translucent fallback.
  This satisfies "native glass on iOS, still great on Android" with no per-screen branching.

## Why
- **Brand continuity + elevation.** Same azure identity, dramatically more polished.
- **Tokens + AppText make it stick.** The look is centralised; retuning is one file, and no
  screen can drift to ad-hoc styles.
- **One glass component, many backends.** Platform differences live in `GlassSurface`, not in
  every screen.
- **Reanimated runs on the UI thread**, so animations stay 60fps regardless of JS load.

## Alternatives considered
- **Linen / Slate / Glass-only directions** (see the design exploration) — rejected in favour
  of Aurora as the boldest "major overhaul + animations" fit; glass folded in as a layer.
- **NativeWind/Tailwind-RN** for styling — rejected to avoid a new styling paradigm mid-project;
  tokens + StyleSheet are sufficient and zero-runtime.
- **Lottie everywhere** — kept available (installed) but used sparingly; Reanimated covers the
  core interactions more cheaply.

## Consequences
- Adding a native module (gradient/blur/glass/haptics/lottie) required a dev-client rebuild;
  pure JS restyles hot-reload.
- All screens restyled to Aurora (auth, home hub, notifications, polls, walls, events,
  amenities list+detail, visitors list+invite, parcels, profile) + branded tab/stack headers.
- Future screens compose the primitives; they inherit the look for free.
