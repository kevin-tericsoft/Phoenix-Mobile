import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyParcel = components['schemas']['MyParcelOut'];
export type MyParcelCreate = components['schemas']['MyParcelCreate'];

/** POST /shared/v1/parcels — pre-register an expected parcel. */
export function useCreateParcel() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (body: MyParcelCreate) => {
      const { data, error } = await api.POST('/shared/v1/parcels', { body });
      if (error) throw error;
      return data;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['parcels', 'list'] }),
  });
}

/** GET /shared/v1/parcels — parcels addressed to my tenant. */
export function useMyParcels() {
  return useQuery({
    queryKey: ['parcels', 'list'],
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/parcels', {
        params: { query: { limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data.data;
    },
  });
}
