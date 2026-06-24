import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, FadeInView, GradientHeader, PressableScale } from '@/components/ui';
import { useMyEvents, useToggleInterest, type MyEvent } from '@/features/events/queries';
import { elevation, palette, radius, spacing } from '@/theme';

function formatDate(iso: string) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}

export default function EventsScreen() {
  const events = useMyEvents();

  return (
    <View style={styles.root}>
      <GradientHeader>
        <AppText variant="display" color={palette.white}>
          Events
        </AppText>
        <AppText variant="body" color="#DCEBFF">
          Don&apos;t miss out
        </AppText>
      </GradientHeader>

      {events.isLoading ? (
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />
      ) : (
        <FlatList
          data={events.data ?? []}
          keyExtractor={(e) => e.id}
          contentContainerStyle={styles.list}
          refreshControl={<RefreshControl refreshing={events.isFetching} onRefresh={() => events.refetch()} tintColor={palette.brand500} />}
          ListEmptyComponent={<AppText variant="body" color={palette.ink300} style={styles.empty}>No upcoming events.</AppText>}
          renderItem={({ item, index }) => (
            <FadeInView index={index}>
              <EventCard event={item} />
            </FadeInView>
          )}
        />
      )}
    </View>
  );
}

function EventCard({ event }: { event: MyEvent }) {
  const toggle = useToggleInterest();
  return (
    <View style={styles.card}>
      <View style={styles.dateChip}>
        <AppText variant="label" color={palette.brand600}>
          {formatDate(event.event_date)} · {event.start_time.slice(0, 5)}
        </AppText>
      </View>
      <AppText variant="caption" color={palette.brand500} style={{ letterSpacing: 0.5, marginTop: spacing.sm }}>
        {event.category.toUpperCase()}
      </AppText>
      <AppText variant="title">{event.name}</AppText>
      <AppText variant="body" color={palette.ink400}>
        {event.description}
      </AppText>
      <View style={styles.footer}>
        <AppText variant="caption" color={palette.ink300}>
          {event.interested_count} interested
        </AppText>
        <PressableScale
          disabled={toggle.isPending}
          onPress={() => toggle.mutate({ eventId: event.id, interested: !event.i_am_interested })}
          style={[styles.button, event.i_am_interested && styles.buttonActive]}
        >
          <AppText variant="label" color={event.i_am_interested ? palette.white : palette.brand500}>
            {event.i_am_interested ? '✓ Interested' : 'Interested'}
          </AppText>
        </PressableScale>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  list: { padding: spacing.lg, gap: spacing.md },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.xl, gap: spacing.xs, ...elevation.card },
  dateChip: { alignSelf: 'flex-start', backgroundColor: palette.brand50, borderRadius: radius.sm, paddingHorizontal: spacing.md, paddingVertical: spacing.xs },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing.md },
  button: { paddingHorizontal: spacing.lg, paddingVertical: spacing.sm, borderRadius: radius.pill, borderWidth: 1.5, borderColor: palette.brand500 },
  buttonActive: { backgroundColor: palette.brand500 },
});
