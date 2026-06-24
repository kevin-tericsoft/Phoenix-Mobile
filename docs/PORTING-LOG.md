# Porting Log — old app → Phoenix Mobile

Tracks each feature domain from `Converz-Customer-Reactnative` as it is ported. Old app has
**69 screens** across 11 domains.

## Status summary (2026-06-24)
**All 8 customer feature domains have a working `/shared` API + a mobile screen validated on
the iOS Simulator:** auth, notifications, polls, walls (Community), events, amenities,
visitors, parcels, plus profile view/edit and a Home dashboard hub. The customer surface of
Phoenix-API grew from 10 → 25 endpoints (15 added by this rewrite). Mobile `tsc --noEmit`
passes clean.

**Remaining follow-ups** (smaller, mostly native or detail screens): visitor QR
scan-validation (needs `react-native-vision-camera`), push device registration + OneSignal
(needs native + APNs/FCM), event detail (FAQs/performers/gallery/booking), profile VirtualId,
poll results-after-close, self-signup. Tracked in [BACKEND-GAP.md](./BACKEND-GAP.md) where a
backend endpoint is also needed.

| Domain | Old screens (src/screens/…) | New location | Endpoint status | Port status |
|---|---|---|---|---|
| **auth** | LoginScreen, EnterEmailScreen, OtpScreen, EmailVerificationScreen, SignupScreen, GettingStarted, SelectProperty, SelectTenant | `app/(auth)/*` | **Have** ✅ | **Done** (email-OTP slice; SMS deferred; property/tenant select TBD) |
| **home** | HomeScreen + carousels (Polls, EventWalls, Announcements) | `app/(app)/index` | aggregate Missing | **Dashboard hub Done** (greeting via /me + nav tiles); live widgets pending `/shared/v1/home` |
| **amenities** | amenities/* | `features/amenities` | **`/shared` added** ✅ | **List + detail + reviews Done** (validated on device; list→detail stack nav). NOTE: customer amenities = browse+review, NOT booking (no booking model exists) |
| **events** | events/* | `features/events` | **`/shared` added** ✅ | **List + interest-toggle Done** (validated on device); detail/FAQs/performers/booking TBD |
| **polls** | polls/* | `features/polls` | **`/shared` added** ✅ | **List + vote Done** (validated on device); results-after-close TBD |
| **walls** | walls/* | `features/walls` | **`/shared` added** ✅ | **Feed + emoji react Done** (validated on device) |
| **notifications** | notifications/* | `features/notifications` | **`/shared` added** ✅ | **List + mark-read Done** (validated on device); push device-registration deferred |
| **profile** | profile/* (ProfileScreen, editProfile, VirtualId) | `features/profile` | **`/shared` PATCH /me added** ✅ | **View + edit Done** (validated on device; narrow self-update). VirtualId TBD |
| **security/visitor** | security/visitor/* | `features/visitors` | **`/shared` added** ✅ | **Invite + list + cancel Done** (validated on device; modal form, FAB, list→detail). QR scan-validation (vision-camera) TBD |
| **security/parcels** | security/parcelManagement/* | `features/parcels` | **`/shared` added** ✅ | List Done (see below) |
| **security/fm** | security/fm/* | `features/fm` | Missing | Not started |
| **delete** | delete/deleteProfileScreen | `features/profile` | Missing | Not started |
| **startup** | startup/StartupScreen | replaced by splash + auth gate | n/a | Superseded |

## Endpoint/auth mapping (old → new)
| Concern | Old | New |
|---|---|---|
| Login channel | phone OTP (`securityApiUrl/sendOtp`) + email (`/sendEmailOtp`) | email OTP only (`/shared/v1/auth/otp/*`) |
| Token | single long-lived JWT in AsyncStorage | access (15m) + refresh in SecureStore |
| Auth header | manual in `api.service.ts` via RxJS token subject | middleware in `lib/http.ts` (auto Bearer + 401 refresh) |
| Pagination | Mongo `{docs,total,limit,page}` | `{data,total,limit,offset}` (`PageOut`) |
| Error shape | varied | `{error:{code,message,detail}}` envelope |
| Data fetching | axios + redux-saga (imperative) | TanStack Query + openapi-fetch (typed) |

## Library replacements (from the original plan, still applicable)
| Old lib | New | Note |
|---|---|---|
| react-native-camera | react-native-vision-camera | already the QR scanner in old app |
| react-native-snap-carousel | react-native-reanimated-carousel | home carousels |
| react-native-countdown-component | delete | unused in old app |
| react-native-splash-view | expo-splash-screen | bundled with Expo |
| AsyncStorage (tokens) | expo-secure-store | tokens only; AsyncStorage ok for cache |
| appcenter | EAS Build/Update | CI/OTA |
