import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type ProfileUpdate = components['schemas']['MyProfileUpdate'];

/** PATCH /shared/v1/auth/me — self-service profile edit; refresh the cached /me on success. */
export function useUpdateProfile() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (body: ProfileUpdate) => {
      const { data, error } = await api.PATCH('/shared/v1/auth/me', { body });
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      // Seed the /me cache with the fresh profile so screens update immediately.
      qc.setQueryData(['me'], data);
    },
  });
}
