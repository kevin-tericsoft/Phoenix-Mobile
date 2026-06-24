import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, FadeInView, PressableScale } from '@/components/ui';
import { useMyAmenities, type MyAmenity } from '@/features/amenities/queries';
import { elevation, palette, radius, spacing } from '@/theme';

const TYPE_EMOJI: Record<string, string> = {
  fitness: '🏋️',
  food_court: '🍽️',
  childcare: '🧸',
  meeting_room: '📋',
  conference_room: '🎤',
  salon: '💇',
  banking: '🏦',
  retail_fb: '🛍️',
  outdoor_gathering: '🌳',
};

export default function AmenitiesListScreen() {
  const amenities = useMyAmenities();
  if (amenities.isLoading) return <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />;

  return (
    <FlatList
      style={styles.list}
      data={amenities.data ?? []}
      keyExtractor={(a) => a.id}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={amenities.isFetching} onRefresh={() => amenities.refetch()} tintColor={palette.brand500} />}
      ListEmptyComponent={<AppText variant="body" color={palette.ink300} style={styles.empty}>No amenities available.</AppText>}
      renderItem={({ item, index }) => (
        <FadeInView index={index}>
          <Row item={item} />
        </FadeInView>
      )}
    />
  );
}

function Row({ item }: { item: MyAmenity }) {
  return (
    <Link href={`/amenities/${item.id}`} asChild>
      <PressableScale style={styles.card}>
        <View style={styles.icon}>
          <AppText style={{ fontSize: 26 }}>{TYPE_EMOJI[item.amenity_type] ?? '🏢'}</AppText>
        </View>
        <View style={{ flex: 1, gap: 2 }}>
          <AppText variant="h3">{item.name}</AppText>
          {item.tagline ? (
            <AppText variant="caption" color={palette.ink400}>
              {item.tagline}
            </AppText>
          ) : null}
          <AppText variant="caption" color={palette.brand500} style={{ marginTop: 2 }}>
            {item.avg_rating != null ? `★ ${item.avg_rating} · ${item.review_count} reviews` : 'No reviews yet'}
          </AppText>
        </View>
        <AppText variant="h3" color={palette.ink200}>
          ›
        </AppText>
      </PressableScale>
    </Link>
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: palette.canvas },
  content: { padding: spacing.lg, gap: spacing.md },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  card: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, ...elevation.card },
  icon: { width: 52, height: 52, borderRadius: radius.md, backgroundColor: palette.brand50, alignItems: 'center', justifyContent: 'center' },
});
