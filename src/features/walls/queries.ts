import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyWall = components['schemas']['MyWallOut'];

const KEYS = { list: ['walls', 'list'] as const };

/** GET /shared/v1/walls — community feed visible to my property, with my reaction + counts. */
export function useMyWalls() {
  return useQuery({
    queryKey: KEYS.list,
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/walls', {
        params: { query: { limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data.data;
    },
  });
}

/** PUT/DELETE /shared/v1/walls/{id}/reaction — set or clear my emoji reaction. */
export function useReactToWall() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (vars: { wallId: string; response: number | null }) => {
      if (vars.response === null) {
        const { error } = await api.DELETE('/shared/v1/walls/{wall_id}/reaction', {
          params: { path: { wall_id: vars.wallId } },
        });
        if (error) throw error;
      } else {
        const { error } = await api.PUT('/shared/v1/walls/{wall_id}/reaction', {
          params: { path: { wall_id: vars.wallId } },
          body: { response: vars.response },
        });
        if (error) throw error;
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: KEYS.list }),
  });
}
