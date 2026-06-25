import { useMutation, useQuery } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type UserMe = components['schemas']['UserMeOut'];

/**
 * Auth API hooks, typed end-to-end against the OpenAPI schema.
 *
 * Note how little code this is versus the old app's redux-saga auth flow (actions,
 * reducers, saga watchers, RxJS token subjects). TanStack Query collapses request state
 * (loading/error/data) into the hook, and `openapi-fetch` collapses the request typing.
 */

/** POST /shared/v1/auth/otp/request — send an OTP to the given email. */
export function useRequestOtp() {
  return useMutation({
    mutationFn: async (email: string) => {
      const { data, error, response } = await api.POST('/shared/v1/auth/otp/request', {
        body: { email },
      });
      if (error) {
        console.error('OTP 422 detail:', response.status, JSON.stringify(error));
        throw error;
      }
      return data;
    },
  });
}

/** POST /shared/v1/auth/otp/verify — verify OTP, returns access + refresh tokens. */
export function useVerifyOtp() {
  return useMutation({
    mutationFn: async (vars: { email: string; otp: string }) => {
      const { data, error } = await api.POST('/shared/v1/auth/otp/verify', {
        body: { email: vars.email, otp: vars.otp },
      });
      if (error) throw error;
      return data; // { access_token, refresh_token, token_type }
    },
  });
}

/** GET /shared/v1/auth/me — the authenticated user's profile. */
export function useMe(enabled: boolean) {
  return useQuery({
    queryKey: ['me'],
    enabled,
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/auth/me', {});
      if (error) throw error;
      return data;
    },
  });
}
