import { useQuery } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyParcel = components['schemas']['MyParcelOut'];

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
