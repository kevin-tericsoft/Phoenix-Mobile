import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, FadeInView, PressableScale } from '@/components/ui';
import { useCancelVisit, useMyVisits, type MyVisit } from '@/features/visitors/queries';
import { elevation, palette, radius, spacing } from '@/theme';

const STATUS_COLORS: Record<string, string> = {
  pending: palette.warning,
  approved: palette.success,
  checked_in: palette.brand500,
  checked_out: palette.ink400,
  cancelled: palette.ink300,
  rejected: palette.danger,
  no_show: palette.danger,
};

export default function VisitorsListScreen() {
  const visits = useMyVisits();
  const cancel = useCancelVisit();

  return (
    <View style={styles.root}>
      {visits.isLoading ? (
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />
      ) : (
        <FlatList
          data={visits.data ?? []}
          keyExtractor={(v) => v.id}
          contentContainerStyle={styles.list}
          refreshControl={<RefreshControl refreshing={visits.isFetching} onRefresh={() => visits.refetch()} tintColor={palette.brand500} />}
          ListEmptyComponent={<AppText variant="body" color={palette.ink300} style={styles.empty}>No visitor invites yet.</AppText>}
          renderItem={({ item, index }) => (
            <FadeInView index={index}>
              <Row item={item} onCancel={() => cancel.mutate(item.id)} canCancel={item.status === 'pending' || item.status === 'approved'} />
            </FadeInView>
          )}
        />
      )}
      <Link href="/visitors/invite" asChild>
        <PressableScale style={styles.fab}>
          <AppText variant="h3" color={palette.white}>+ Invite</AppText>
        </PressableScale>
      </Link>
    </View>
  );
}

function Row({ item, onCancel, canCancel }: { item: MyVisit; onCancel: () => void; canCancel: boolean }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <AppText variant="h3">{item.visitor_name}</AppText>
        <View style={[styles.statusChip, { backgroundColor: (STATUS_COLORS[item.status] ?? palette.ink400) + '1A' }]}>
          <AppText variant="caption" color={STATUS_COLORS[item.status] ?? palette.ink400} style={{ textTransform: 'capitalize' }}>
            {item.status.replace(/_/g, ' ')}
          </AppText>
        </View>
      </View>
      <AppText variant="body" color={palette.ink400}>{item.visitor_phone}</AppText>
      {item.purpose_of_visit ? <AppText variant="body" color={palette.ink400}>{item.purpose_of_visit}</AppText> : null}
      <View style={styles.cardFooter}>
        {item.visit_code ? (
          <View style={styles.codeChip}>
            <AppText variant="label" color={palette.brand600}>CODE {item.visit_code}</AppText>
          </View>
        ) : <View />}
        {canCancel ? (
          <PressableScale onPress={onCancel} haptic style={styles.cancelBtn}>
            <AppText variant="label" color={palette.danger}>Cancel</AppText>
          </PressableScale>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  list: { padding: spacing.lg, gap: spacing.md, paddingBottom: 96 },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.xs, ...elevation.card },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusChip: { borderRadius: radius.sm, paddingHorizontal: spacing.md, paddingVertical: 3 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.sm },
  codeChip: { backgroundColor: palette.brand50, borderRadius: radius.sm, paddingHorizontal: spacing.md, paddingVertical: spacing.xs },
  cancelBtn: { paddingHorizontal: spacing.md, paddingVertical: spacing.xs },
  fab: {
    position: 'absolute', right: spacing.xl, bottom: spacing.xl,
    backgroundColor: palette.brand500, paddingHorizontal: spacing.xl, paddingVertical: spacing.lg,
    borderRadius: radius.pill, ...elevation.brandGlow,
  },
});
