import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyPoll = components['schemas']['MyPollOut'];

const KEYS = { list: ['polls', 'list'] as const };

/** GET /shared/v1/polls — ongoing polls visible to my property, with my current selections. */
export function useMyPolls() {
  return useQuery({
    queryKey: KEYS.list,
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/polls', {
        params: { query: { limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data.data;
    },
  });
}

/** POST /shared/v1/polls/{id}/vote — submit selection(s); invalidate so the UI reflects it. */
export function useVotePoll() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (vars: { pollId: string; optionIds: string[] }) => {
      const { error } = await api.POST('/shared/v1/polls/{poll_id}/vote', {
        params: { path: { poll_id: vars.pollId } },
        body: { option_ids: vars.optionIds },
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: KEYS.list }),
  });
}
