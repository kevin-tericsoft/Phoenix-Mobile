import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyParcel = components['schemas']['MyParcelOut'];

/** GET /shared/v1/parcels/gate/queue — reception parcel queue at the security user's property. */
export function useGateParcels(status?: string) {
  return useQuery({
    queryKey: ['gate', 'parcels', status ?? 'all'],
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/parcels/gate/queue', {
        params: { query: { status, limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data.data;
    },
  });
}

/** Receive at reception / hand over to resident. */
export function useGateParcelAction() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (vars: { parcelId: string; action: 'gate/receive' | 'gate/deliver' }) => {
      const path = `/shared/v1/parcels/{parcel_id}/${vars.action}` as
        | '/shared/v1/parcels/{parcel_id}/gate/receive'
        | '/shared/v1/parcels/{parcel_id}/gate/deliver';
      const { error } = await api.POST(path, { params: { path: { parcel_id: vars.parcelId } } });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['gate', 'parcels'] }),
  });
}
