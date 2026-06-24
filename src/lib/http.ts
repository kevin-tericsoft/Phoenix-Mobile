import createClient from 'openapi-fetch';

import type { paths } from '@/api/schema';
import { API_BASE_URL } from './config';
import { clearTokens, loadTokens, saveTokens, type TokenPair } from './secure-store';

/**
 * The single typed HTTP client for the whole app.
 *
 * `openapi-fetch` gives us a fetch wrapper where the URL, request body, and response are
 * all type-checked against `src/api/schema.d.ts` (generated from Phoenix-API's OpenAPI).
 * If the backend changes a contract and we regenerate, mismatches become TypeScript errors
 * — that's the entire point of generating types from the live spec.
 *
 * On top of that we layer auth as a custom `fetch`:
 *   1. inject the current access token as a Bearer header
 *   2. on a 401, refresh the token ONCE (single-flighted) and retry the original request
 *   3. if refresh fails, clear tokens and surface the 401 (caller logs the user out)
 */

// ── in-memory token cache (hydrated from SecureStore at startup) ────────────────
// Why in-memory: SecureStore reads are async; we don't want to await the keychain on
// every request. This cache is the source of truth at runtime; SecureStore is the
// durable write-through copy that survives app restarts.
let access: string | null = null;
let refresh: string | null = null;

export async function hydrateTokens(): Promise<TokenPair | null> {
  const tokens = await loadTokens();
  access = tokens?.accessToken ?? null;
  refresh = tokens?.refreshToken ?? null;
  return tokens;
}

export async function setSession(tokens: TokenPair): Promise<void> {
  access = tokens.accessToken;
  refresh = tokens.refreshToken;
  await saveTokens(tokens);
}

export async function clearSession(): Promise<void> {
  access = null;
  refresh = null;
  await clearTokens();
}

// ── single-flight refresh ───────────────────────────────────────────────────────
// If three requests 401 at once, we must refresh ONCE, not three times (a second refresh
// with an already-rotated token would fail). We share one in-flight promise.
let refreshing: Promise<boolean> | null = null;

async function refreshAccessToken(): Promise<boolean> {
  if (refreshing) return refreshing;
  refreshing = (async () => {
    if (!refresh) return false;
    try {
      const res = await fetch(`${API_BASE_URL}/shared/v1/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: refresh }),
      });
      if (!res.ok) {
        await clearSession();
        return false;
      }
      const data = (await res.json()) as { access_token: string; refresh_token: string };
      await setSession({ accessToken: data.access_token, refreshToken: data.refresh_token });
      return true;
    } catch {
      return false;
    } finally {
      refreshing = null;
    }
  })();
  return refreshing;
}

// ── auth-aware fetch ──────────────────────────────────────────────────────────
const authFetch: typeof fetch = async (input, init) => {
  const url = typeof input === 'string' ? input : input.toString();
  const isAuthEndpoint = url.includes('/auth/refresh') || url.includes('/auth/otp');

  const withAuth = (token: string | null): RequestInit => {
    const headers = new Headers(init?.headers);
    if (token && !isAuthEndpoint) headers.set('Authorization', `Bearer ${token}`);
    return { ...init, headers };
  };

  let res = await fetch(input, withAuth(access));

  // Retry once on 401 (but never for the auth endpoints themselves).
  if (res.status === 401 && !isAuthEndpoint) {
    const ok = await refreshAccessToken();
    if (ok) res = await fetch(input, withAuth(access));
  }

  return res;
};

export const api = createClient<paths>({ baseUrl: API_BASE_URL, fetch: authFetch });
