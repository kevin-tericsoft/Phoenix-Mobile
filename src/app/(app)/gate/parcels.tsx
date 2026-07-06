import { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
import { useGateParcelAction, useGateParcels, type MyParcel } from '@/features/gate/parcelQueries';
import { elevation, palette, radius, spacing } from '@/theme';

const FILTERS = [
  { label: 'Expected', status: 'requested' },
  { label: 'At desk', status: 'received_at_reception' },
  { label: 'All', status: undefined },
];

export default function GateParcelsScreen() {
  const [filter, setFilter] = useState<string | undefined>('requested');
  const parcels = useGateParcels(filter);

  return (
    <View style={styles.root}>
      <View style={styles.filters}>
        {FILTERS.map((f) => (
          <PressableScale key={f.label} haptic={false} onPress={() => setFilter(f.status)} style={[styles.chip, filter === f.status && styles.chipActive]}>
            <AppText variant="caption" color={filter === f.status ? palette.white : palette.ink500}>{f.label}</AppText>
          </PressableScale>
        ))}
      </View>
      {parcels.isLoading ? (
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xl }} />
      ) : (
        <FlatList
          data={parcels.data ?? []}
          keyExtractor={(p) => p.id}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<AppText variant="body" color={palette.ink300} style={styles.empty}>No parcels here.</AppText>}
          renderItem={({ item }) => <ParcelCard parcel={item} />}
        />
      )}
    </View>
  );
}

function ParcelCard({ parcel }: { parcel: MyParcel }) {
  const action = useGateParcelAction();
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <AppText variant="h3">{parcel.delivery_company}</AppText>
          <AppText variant="caption" color={palette.ink400} style={{ textTransform: 'capitalize' }}>
            {parcel.parcel_type ?? 'Parcel'}{parcel.quantity ? ` · qty ${parcel.quantity}` : ''}
          </AppText>
        </View>
        <View style={styles.statusChip}>
          <AppText variant="caption" color={palette.brand600} style={{ textTransform: 'capitalize' }}>{parcel.status.replace(/_/g, ' ')}</AppText>
        </View>
      </View>
      {parcel.status === 'requested' ? (
        <PressableScale onPress={() => action.mutate({ parcelId: parcel.id, action: 'gate/receive' })} disabled={action.isPending} style={[styles.btn, { backgroundColor: palette.brand500 }]}>
          <AppText variant="h3" color={palette.white}>Receive at desk</AppText>
        </PressableScale>
      ) : parcel.status === 'received_at_reception' || parcel.status === 'delivery_pending' ? (
        <PressableScale onPress={() => action.mutate({ parcelId: parcel.id, action: 'gate/deliver' })} disabled={action.isPending} style={[styles.btn, { backgroundColor: palette.success }]}>
          <AppText variant="h3" color={palette.white}>Hand over</AppText>
        </PressableScale>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  filters: { flexDirection: 'row', gap: spacing.sm, padding: spacing.lg },
  chip: { paddingHorizontal: spacing.md, paddingVertical: spacing.xs, borderRadius: radius.pill, backgroundColor: palette.surface, borderWidth: 1, borderColor: palette.ink100 },
  chipActive: { backgroundColor: palette.brand500, borderColor: palette.brand500 },
  list: { padding: spacing.lg, gap: spacing.md, paddingTop: 0 },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.sm, ...elevation.card },
  header: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm },
  statusChip: { backgroundColor: palette.brand50, borderRadius: radius.sm, paddingHorizontal: spacing.md, paddingVertical: 3 },
  btn: { borderRadius: radius.md, paddingVertical: spacing.md, alignItems: 'center', marginTop: spacing.xs },
});
