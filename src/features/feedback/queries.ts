import { useMutation } from '@tanstack/react-query';

import { api } from '@/lib/http';

/** POST /shared/v1/feedback — submit feedback for my tenant org. */
export function useSubmitFeedback() {
  return useMutation({
    mutationFn: async (feedback: string) => {
      const { error } = await api.POST('/shared/v1/feedback', { body: { feedback } });
      if (error) throw error;
    },
  });
}
