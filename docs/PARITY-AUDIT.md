# Feature Parity Audit — old app (69 screens) → Phoenix Mobile

Final audit of every old `Converz-Customer-Reactnative` screen against the new app.
Status: **ported**, **ported (consolidated)**, **divergence (by design)**, or **served by Admin-UI**.

## Auth / onboarding
| Old screen | Status |
|---|---|
| LoginScreen (phone OTP), OtpScreen | Divergence — new API is email-OTP only (ADR 0005); SMS deferred |
| EnterEmailScreen, EmailVerificationScreen | **Ported** — `(auth)/sign-in` + `(auth)/verify` |
| GettingStartedScreen | Ported (consolidated) — sign-in is the branded welcome |
| SignupScreen | Divergence — no self-signup in new API (invite-only); tracked in BACKEND-GAP |
| SelectPropertyScreen, SelectTenantScreen | Divergence — property/tenant are admin-assigned, shown in Profile |
| StartupScreen | Consolidated — splash + auth gate |

## Resident features
| Old domain | Status |
|---|---|
| home (HomeScreen, carousels, Announcements) | **Ported** — dashboard hub + Recent announcements + stat cards |
| amenities (list, view) | **Ported** — list → detail + reviews |
| events (list, detail, performers, FAQs, response) | **Ported** — list → detail (agenda/FAQs/performers/gallery) + interest |
| polls (list, detail, radio/checkbox/stars/emoji/slider) | **Ported** — all 4 answer types via `PollInput` |
| walls (list, card, interactions, tooltip) | **Ported** — feed + emoji reactions + counts |
| notifications (list, info, card) | **Ported** — list + mark-read + unread badge |
| notifications/FeedbackScreen | **Ported** — `/shared/v1/feedback` + feedback screen |
| profile (ProfileScreen, editProfile) | **Ported** — view + edit (`PATCH /me`) |
| profile/VirtualId | **Ported** — Digital ID card with QR of user_code |
| delete (profile, reason, confirmation) | **Ported** — 2-step delete + `DELETE /me` |

## Security / staff features (the mobile app is multi-role)
| Old domain | Status |
|---|---|
| security/visitor (create, scan, validate, detail, status, success) | **Ported (flagship)** — resident invite + security Gate: lookup by code, QR scan, approve/check-in/check-out (ADR 0010) |
| security/parcelManagement (create, list, detail, intake) | **Ported** — resident pre-register + security reception (gate/queue, receive, deliver) |
| security/security-home | Consolidated — Home shows a role-gated Gate card; gate screen is the security hub |
| security/security-profile | Consolidated — shared Profile screen (role shown) |
| security/fm (FmHome, FmDetails, FmHistory, FmHistoryDetails) | Served by Admin-UI — FM reporting/history dashboards live in Phoenix-Admin-UI; operational actions (visitor/parcel) are in mobile |

## Generic
| Old screen | Status |
|---|---|
| DetailsScreen | N/A — generic placeholder, no standalone feature |
| components (horizentalLine, ResponseComponent, etc.) | Absorbed into the design system / feature screens |

## Net result
All **resident-facing** features and the **security gate (visitor + parcel)** workflows are
ported end-to-end (mobile + `/shared` API), validated on the iOS Simulator. Customer/staff API
surface grew from 10 → ~32 `/shared` endpoints. Remaining items are deliberate divergences
(SMS auth, self-signup, self-select property/tenant) or FM analytics dashboards served by the
Admin-UI — all recorded in [BACKEND-GAP.md](./BACKEND-GAP.md).
