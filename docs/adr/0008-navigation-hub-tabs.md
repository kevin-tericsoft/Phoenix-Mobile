# ADR 0008 — Home-hub navigation, 4-tab cap

**Status:** accepted · **Date:** 2026-06-24

## Context
As domains were ported, each got its own tab. At 6 (Home, Amenities, Events, Community,
Polls, Alerts) the tab bar was cramped — past the ~5-item limit where a bottom tab bar stays
legible and thumb-friendly on a phone.

## Decision
Cap the tab bar at **4**: Home, Amenities, Community, Alerts. Make **Home a dashboard hub**
that links to the remaining areas (Events, Polls, Amenities, Community, Alerts) via tiles.
Events and Polls remain real routes but are hidden from the tab bar with Expo Router's
`options={{ href: null }}`.

## Why
- **Phone ergonomics.** 4–5 tabs is the platform norm (iOS HIG / Material). More crowds the
  bar and shrinks tap targets.
- **A hub is where the home aggregate goes.** When `/shared/v1/home` lands (BACKEND-GAP §2),
  the hub's tiles become live widgets (featured event, open polls, announcements) without a
  navigation rethink.
- **`href: null` keeps routes addressable.** Events/Polls are still deep-linkable and pushable
  from the hub; they're just not bottom-tab destinations. Web analogue: a route that exists
  but isn't in the primary nav.

## Alternatives considered
- **Keep 6 tabs.** Rejected: cramped, off-platform.
- **A "More" overflow tab.** Rejected: hides primary features behind an extra tap; the hub is
  a better home for them and doubles as the dashboard.
- **Group events+polls+walls under one "Community" tab with sub-navigation.** Reasonable, but
  the hub generalises better and matches where the home aggregate is heading.

## Consequences
- New non-core domains default to: a route + a Home tile, not a new tab.
- The hub currently uses static tiles; swap to data-driven widgets when the aggregate exists.
