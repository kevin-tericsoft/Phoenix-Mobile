import { QueryClient } from '@tanstack/react-query';

/**
 * One QueryClient for the app. Defaults tuned for mobile:
 * - retry: 1 — mobile networks blip; one retry smooths transient failures without
 *   hammering on a real outage.
 * - staleTime 30s — avoid refetch storms when navigating between screens quickly.
 * - refetchOnReconnect — phones lose/regain connectivity constantly; refetch when back.
 *
 * Web analogue: identical to setting up React Query on the web. No RN-specific concerns
 * here beyond the defaults reflecting flaky mobile networks.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
      refetchOnReconnect: true,
    },
  },
});
