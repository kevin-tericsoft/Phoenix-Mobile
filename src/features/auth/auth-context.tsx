import { createContext, use, useEffect, useState, type ReactNode } from 'react';

import { clearSession, hydrateTokens, setSession } from '@/lib/http';
import type { TokenPair } from '@/lib/secure-store';

/**
 * Auth state for the UI/router. This is *client* state (am I logged in?), deliberately
 * separate from *server* state (the /me profile, which lives in TanStack Query).
 *
 * `status` exists because of a mobile-specific moment the web mostly ignores: on cold
 * start we must read tokens from the device keychain (async) before we know whether to
 * show the app or the login screen. During that read we show a splash, not a flicker of
 * the login screen. Web apps with httpOnly cookies get this "for free" from the server.
 */
type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

type AuthContextValue = {
  status: AuthStatus;
  signIn: (tokens: TokenPair) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('loading');

  // Cold-start: hydrate tokens from the keychain once.
  useEffect(() => {
    (async () => {
      let tokens = await hydrateTokens();
      // Dev-only shortcut: seed a session from EXPO_PUBLIC_DEV_TOKENS so authed screens can
      // be opened without typing an OTP in the simulator. Unset in normal runs → no effect.
      if (!tokens && __DEV__ && process.env.EXPO_PUBLIC_DEV_TOKENS) {
        try {
          const t = JSON.parse(process.env.EXPO_PUBLIC_DEV_TOKENS);
          await setSession({ accessToken: t.access_token, refreshToken: t.refresh_token });
          tokens = { accessToken: t.access_token, refreshToken: t.refresh_token };
        } catch {}
      }
      setStatus(tokens ? 'authenticated' : 'unauthenticated');
    })();
  }, []);

  async function signIn(tokens: TokenPair) {
    await setSession(tokens);
    setStatus('authenticated');
  }

  async function signOut() {
    await clearSession();
    setStatus('unauthenticated');
  }

  return <AuthContext value={{ status, signIn, signOut }}>{children}</AuthContext>;
}

export function useAuth(): AuthContextValue {
  const ctx = use(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}
