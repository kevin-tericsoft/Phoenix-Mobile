import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';
import type { MyVisit } from '@/features/visitors/queries';

export type { MyVisit };

const KEYS = {
  queue: (status?: string) => ['gate', 'queue', status ?? 'all'] as const,
};

/** GET /shared/v1/visits/gate/queue — all visits at the security user's property. */
export function useGateQueue(status?: string) {
  return useQuery({
    queryKey: KEYS.queue(status),
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/visits/gate/queue', {
        params: { query: { status, limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data.data;
    },
  });
}

/** GET /shared/v1/visits/lookup/{code} — find a visit by its code (scan or type). */
export function useLookupVisit() {
  return useMutation({
    mutationFn: async (code: string) => {
      const { data, error } = await api.GET('/shared/v1/visits/lookup/{code}', {
        params: { path: { code } },
      });
      if (error) throw error;
      return data;
    },
  });
}

type GateAction = 'gate/approve' | 'gate/check-in' | 'gate/check-out';

/** The gate transitions: approve → check-in → check-out. Invalidates the queue on success. */
export function useGateAction() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (vars: { visitId: string; action: GateAction }) => {
      const path = `/shared/v1/visits/{visit_id}/${vars.action}` as
        | '/shared/v1/visits/{visit_id}/gate/approve'
        | '/shared/v1/visits/{visit_id}/gate/check-in'
        | '/shared/v1/visits/{visit_id}/gate/check-out';
      const { data, error } = await api.POST(path, {
        params: { path: { visit_id: vars.visitId } },
      });
      if (error) throw error;
      return data as MyVisit;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['gate'] }),
  });
}
