import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, GradientHeader, PressableScale } from '@/components/ui';
import { useMarkRead, useMyNotifications, type MyNotification } from '@/features/notifications/queries';
import { elevation, palette, radius, spacing } from '@/theme';

export default function NotificationsScreen() {
  const notifications = useMyNotifications();
  const markRead = useMarkRead();

  return (
    <View style={styles.root}>
      <GradientHeader>
        <AppText variant="display" color={palette.white}>
          Alerts
        </AppText>
        <AppText variant="body" color="#DCEBFF">
          Stay in the loop
        </AppText>
      </GradientHeader>

      {notifications.isLoading ? (
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />
      ) : (
        <FlatList
          data={notifications.data?.data ?? []}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl refreshing={notifications.isFetching} onRefresh={() => notifications.refetch()} tintColor={palette.brand500} />
          }
          ListEmptyComponent={
            <AppText variant="body" color={palette.ink300} style={styles.empty}>
              You&apos;re all caught up.
            </AppText>
          }
          renderItem={({ item }) => (
            <Row item={item} onPress={() => item.status !== 'read' && markRead.mutate(item.id)} />
          )}
        />
      )}
    </View>
  );
}

function Row({ item, onPress }: { item: MyNotification; onPress: () => void }) {
  const unread = item.status !== 'read';
  return (
    <PressableScale onPress={onPress} haptic={unread} style={[styles.card, unread && styles.cardUnread]}>
      <View style={[styles.dot, { backgroundColor: unread ? palette.brand500 : palette.ink200 }]} />
      <View style={{ flex: 1, gap: 2 }}>
        <AppText variant="h3" color={unread ? palette.ink900 : palette.ink400}>
          {item.message}
        </AppText>
        <AppText variant="caption" color={palette.ink300} style={{ textTransform: 'capitalize' }}>
          {item.purpose.replace(/_/g, ' ')}
        </AppText>
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  list: { padding: spacing.lg, gap: spacing.md },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: palette.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    ...elevation.card,
  },
  cardUnread: { borderWidth: 1, borderColor: palette.brand100 },
  dot: { width: 10, height: 10, borderRadius: 5 },
});
