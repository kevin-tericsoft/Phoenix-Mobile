import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, FadeInView, GradientHeader, PressableScale } from '@/components/ui';
import { useMyParcels, type MyParcel } from '@/features/parcels/queries';
import { elevation, palette, radius, spacing } from '@/theme';

export default function ParcelsScreen() {
  const parcels = useMyParcels();

  return (
    <View style={styles.root}>
      <GradientHeader>
        <AppText variant="display" color={palette.white}>
          Parcels
        </AppText>
        <AppText variant="body" color="#DCEBFF">
          Deliveries at reception
        </AppText>
      </GradientHeader>

      {parcels.isLoading ? (
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />
      ) : parcels.isError ? (
        <AppText variant="body" color={palette.ink300} style={styles.empty}>
          Couldn&apos;t load parcels.
        </AppText>
      ) : (
        <FlatList
          data={parcels.data ?? []}
          keyExtractor={(p) => p.id}
          contentContainerStyle={styles.list}
          refreshControl={<RefreshControl refreshing={parcels.isFetching} onRefresh={() => parcels.refetch()} tintColor={palette.brand500} />}
          ListEmptyComponent={<AppText variant="body" color={palette.ink300} style={styles.empty}>No parcels.</AppText>}
          renderItem={({ item, index }) => (
            <FadeInView index={index}>
              <Row item={item} />
            </FadeInView>
          )}
        />
      )}
      <Link href="/parcels/new" asChild>
        <PressableScale style={styles.fab}>
          <AppText variant="h3" color={palette.white}>+ Expect</AppText>
        </PressableScale>
      </Link>
    </View>
  );
}

function Row({ item }: { item: MyParcel }) {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <AppText style={{ fontSize: 22 }}>📦</AppText>
      </View>
      <View style={{ flex: 1, gap: 2 }}>
        <AppText variant="h3">{item.delivery_company}</AppText>
        <AppText variant="caption" color={palette.ink300} style={{ textTransform: 'capitalize' }}>
          {item.parcel_type ?? 'Parcel'}
          {item.quantity ? ` · qty ${item.quantity}` : ''}
        </AppText>
      </View>
      <View style={styles.statusChip}>
        <AppText variant="caption" color={palette.brand600} style={{ textTransform: 'capitalize' }}>
          {item.status.replace(/_/g, ' ')}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  list: { padding: spacing.lg, gap: spacing.md },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  card: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, ...elevation.card },
  icon: { width: 44, height: 44, borderRadius: radius.md, backgroundColor: palette.brand50, alignItems: 'center', justifyContent: 'center' },
  statusChip: { backgroundColor: palette.brand50, borderRadius: radius.sm, paddingHorizontal: spacing.md, paddingVertical: spacing.xs },
  fab: { position: 'absolute', right: spacing.xl, bottom: spacing.xl, backgroundColor: palette.brand500, paddingHorizontal: spacing.xl, paddingVertical: spacing.lg, borderRadius: radius.pill, ...elevation.brandGlow },
});
