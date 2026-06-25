import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyEvent = components['schemas']['MyEventOut'];
export type MyEventDetail = components['schemas']['MyEventDetailOut'];

const KEYS = {
  list: ['events', 'list'] as const,
  detail: (id: string) => ['events', 'detail', id] as const,
};

/** GET /shared/v1/events/{id} — detail with agenda, FAQs, performers, gallery. */
export function useEventDetail(id: string) {
  return useQuery({
    queryKey: KEYS.detail(id),
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/events/{event_id}', {
        params: { path: { event_id: id } },
      });
      if (error) throw error;
      return data;
    },
  });
}

/** GET /shared/v1/events — upcoming events for my property, with my interest + counts. */
export function useMyEvents() {
  return useQuery({
    queryKey: KEYS.list,
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/events', {
        params: { query: { limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data.data;
    },
  });
}

/** PUT/DELETE /shared/v1/events/{id}/interest — toggle my "interested" RSVP. */
export function useToggleInterest() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (vars: { eventId: string; interested: boolean }) => {
      if (vars.interested) {
        const { error } = await api.PUT('/shared/v1/events/{event_id}/interest', {
          params: { path: { event_id: vars.eventId } },
        });
        if (error) throw error;
      } else {
        const { error } = await api.DELETE('/shared/v1/events/{event_id}/interest', {
          params: { path: { event_id: vars.eventId } },
        });
        if (error) throw error;
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: KEYS.list }),
  });
}
