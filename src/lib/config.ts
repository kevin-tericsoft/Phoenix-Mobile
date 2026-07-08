import { Platform } from 'react-native';

/**
 * Base URL of Phoenix-API.
 *
 * Why per-platform: the iOS Simulator shares the Mac's network stack, so it reaches
 * the host dev server at `localhost`. The Android emulator runs behind a NAT and sees
 * the host at the special alias `10.0.2.2`. A physical device would need the Mac's LAN
 * IP — override via EXPO_PUBLIC_API_URL when testing on hardware.
 *
 * Web analogue: this is the same "API base URL" you'd put in a Vite/Next env var; the
 * only twist is the emulator-loopback alias, which has no web equivalent.
 */
const DEV_HOST = Platform.select({
  ios: 'http://localhost:8000',
  android: 'http://10.0.2.2:8000',
  default: 'http://localhost:8000',
});

export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? DEV_HOST;

/**
 * OneSignal app id — public, safe to embed client-side (it's a target identifier, not a
 * secret; the delivery-triggering REST API key stays server-only in Phoenix-API). Unset
 * in dev by default: push is opt-in via env, same pattern as API_BASE_URL.
 */
export const ONESIGNAL_APP_ID = process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID;
