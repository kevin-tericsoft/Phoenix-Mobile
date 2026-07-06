import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
import { useMyAmenities, type MyAmenity } from '@/features/amenities/queries';
import { elevation, palette, radius, spacing } from '@/theme';

const TYPE_ICON: Record<string, keyof typeof Ionicons.glyphMap> = {
  fitness: 'barbell-outline',
  food_court: 'restaurant-outline',
  childcare: 'happy-outline',
  meeting_room: 'clipboard-outline',
  conference_room: 'mic-outline',
  salon: 'cut-outline',
  banking: 'cash-outline',
  retail_fb: 'bag-outline',
  outdoor_gathering: 'leaf-outline',
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
      renderItem={({ item }) => <Row item={item} />}
    />
  );
}

function Row({ item }: { item: MyAmenity }) {
  return (
    <Link href={`/amenities/${item.id}`} asChild>
      <PressableScale style={styles.card}>
        <View style={styles.icon}>
          <Ionicons name={TYPE_ICON[item.amenity_type] ?? 'business-outline'} size={24} color={palette.brand500} />
        </View>
        <View style={{ flex: 1, gap: 2 }}>
          <AppText variant="h3">{item.name}</AppText>
          {item.tagline ? (
            <AppText variant="caption" color={palette.ink400}>
              {item.tagline}
            </AppText>
          ) : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 }}>
            {item.avg_rating != null ? (
              <>
                <Ionicons name="star" size={13} color={palette.brand500} />
                <AppText variant="caption" color={palette.brand500}>
                  {item.avg_rating} · {item.review_count} reviews
                </AppText>
              </>
            ) : (
              <AppText variant="caption" color={palette.brand500}>No reviews yet</AppText>
            )}
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color={palette.ink200} />
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
