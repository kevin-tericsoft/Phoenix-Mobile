import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyVisit = components['schemas']['MyVisitOut'];
export type InviteVisitor = components['schemas']['InviteVisitorIn'];

const KEYS = { list: ['visits', 'list'] as const };

/** GET /shared/v1/visits — visits I've invited. */
export function useMyVisits() {
  return useQuery({
    queryKey: KEYS.list,
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/visits', {
        params: { query: { limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data.data;
    },
  });
}

/** POST /shared/v1/visits — invite a visitor (dedupes visitor by phone, creates planned visit). */
export function useInviteVisitor() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (body: InviteVisitor) => {
      const { data, error } = await api.POST('/shared/v1/visits', { body });
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: KEYS.list }),
  });
}

/** POST /shared/v1/visits/{id}/cancel — cancel my pending/approved visit. */
export function useCancelVisit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (visitId: string) => {
      const { error } = await api.POST('/shared/v1/visits/{visit_id}/cancel', {
        params: { path: { visit_id: visitId } },
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: KEYS.list }),
  });
}
