import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyAmenity = components['schemas']['MyAmenityOut'];
export type MyAmenityDetail = components['schemas']['MyAmenityDetailOut'];

const KEYS = {
  list: ['amenities', 'list'] as const,
  detail: (id: string) => ['amenities', 'detail', id] as const,
};

/** GET /shared/v1/amenities — amenities at my property, with rating summary. */
export function useMyAmenities() {
  return useQuery({
    queryKey: KEYS.list,
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/amenities', {
        params: { query: { limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data.data;
    },
  });
}

/** GET /shared/v1/amenities/{id} — detail incl. operating hours + reviews. */
export function useAmenityDetail(id: string) {
  return useQuery({
    queryKey: KEYS.detail(id),
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/amenities/{amenity_id}', {
        params: { path: { amenity_id: id } },
      });
      if (error) throw error;
      return data;
    },
  });
}

/** POST /shared/v1/amenities/{id}/reviews — submit my review. */
export function useSubmitReview(amenityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (vars: { rating: number; comment: string }) => {
      const { error } = await api.POST('/shared/v1/amenities/{amenity_id}/reviews', {
        params: { path: { amenity_id: amenityId } },
        body: vars,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: KEYS.detail(amenityId) });
      qc.invalidateQueries({ queryKey: KEYS.list });
    },
  });
}
