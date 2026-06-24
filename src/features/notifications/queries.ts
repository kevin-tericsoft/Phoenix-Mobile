import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { components } from '@/api/schema';
import { api } from '@/lib/http';

export type MyNotification = components['schemas']['MyNotificationOut'];

const KEYS = {
  list: ['notifications', 'list'] as const,
  unread: ['notifications', 'unread'] as const,
};

/** GET /shared/v1/notifications — my notifications, newest first. */
export function useMyNotifications() {
  return useQuery({
    queryKey: KEYS.list,
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/notifications', {
        params: { query: { limit: 50, offset: 0 } },
      });
      if (error) throw error;
      return data;
    },
  });
}

/** GET /shared/v1/notifications/unread-count — badge count. */
export function useUnreadCount() {
  return useQuery({
    queryKey: KEYS.unread,
    queryFn: async () => {
      const { data, error } = await api.GET('/shared/v1/notifications/unread-count', {});
      if (error) throw error;
      return data.count;
    },
  });
}

/**
 * POST /shared/v1/notifications/{id}/read — mark one read.
 * On success we invalidate both lists so the row + the badge update together. This is the
 * TanStack Query idiom: mutate, then invalidate the queries whose data the mutation changed.
 */
export function useMarkRead() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (notificationId: string) => {
      const { error } = await api.POST('/shared/v1/notifications/{notification_id}/read', {
        params: { path: { notification_id: notificationId } },
      });
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: KEYS.list });
      qc.invalidateQueries({ queryKey: KEYS.unread });
    },
  });
}
