import { StyleSheet, View } from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
import { elevation, palette, radius, spacing } from '@/theme';
import { useGateAction, type MyVisit } from './queries';

const STATUS_COLORS: Record<string, string> = {
  pending: palette.warning,
  approved: palette.brand500,
  checked_in: palette.success,
  checked_out: palette.ink400,
  cancelled: palette.ink300,
  rejected: palette.danger,
  no_show: palette.danger,
};

/**
 * The gate operator's visit card: shows who's arriving + the one action that advances the
 * visit through its lifecycle. Which button shows depends on status — the same state machine
 * the backend enforces (pending → approved → checked_in → checked_out).
 */
export function GateVisitCard({ visit, onChanged }: { visit: MyVisit; onChanged?: (v: MyVisit) => void }) {
  const action = useGateAction();

  const run = async (a: 'gate/approve' | 'gate/check-in' | 'gate/check-out') => {
    const updated = await action.mutateAsync({ visitId: visit.id, action: a });
    onChanged?.(updated);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <AppText variant="h3">{visit.visitor_name}</AppText>
          <AppText variant="caption" color={palette.ink400}>
            {visit.visitor_phone}
            {visit.visitor_organization ? ` · ${visit.visitor_organization}` : ''}
          </AppText>
        </View>
        <View style={[styles.statusChip, { backgroundColor: (STATUS_COLORS[visit.status] ?? palette.ink400) + '1A' }]}>
          <AppText variant="caption" color={STATUS_COLORS[visit.status] ?? palette.ink400} style={{ textTransform: 'capitalize' }}>
            {visit.status.replace(/_/g, ' ')}
          </AppText>
        </View>
      </View>

      {visit.purpose_of_visit ? (
        <AppText variant="body" color={palette.ink400}>
          {visit.purpose_of_visit}
        </AppText>
      ) : null}
      {visit.visit_code ? (
        <AppText variant="label" color={palette.brand600}>
          CODE {visit.visit_code}
          {visit.num_people ? ` · ${visit.num_people} ppl` : ''}
        </AppText>
      ) : null}

      {/* lifecycle action */}
      {visit.status === 'pending' ? (
        <PressableScale onPress={() => run('gate/approve')} disabled={action.isPending} style={[styles.btn, styles.btnBrand]}>
          <AppText variant="h3" color={palette.white}>Approve</AppText>
        </PressableScale>
      ) : visit.status === 'approved' ? (
        <PressableScale onPress={() => run('gate/check-in')} disabled={action.isPending} style={[styles.btn, styles.btnSuccess]}>
          <AppText variant="h3" color={palette.white}>✓ Check in</AppText>
        </PressableScale>
      ) : visit.status === 'checked_in' ? (
        <PressableScale onPress={() => run('gate/check-out')} disabled={action.isPending} style={[styles.btn, styles.btnInk]}>
          <AppText variant="h3" color={palette.white}>Check out</AppText>
        </PressableScale>
      ) : (
        <View style={styles.doneRow}>
          {visit.check_in_at ? <AppText variant="caption" color={palette.ink400}>In: {new Date(visit.check_in_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</AppText> : null}
          {visit.check_out_at ? <AppText variant="caption" color={palette.ink400}>Out: {new Date(visit.check_out_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</AppText> : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.sm, ...elevation.card },
  header: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm },
  statusChip: { borderRadius: radius.sm, paddingHorizontal: spacing.md, paddingVertical: 3 },
  btn: { borderRadius: radius.md, paddingVertical: spacing.md, alignItems: 'center', marginTop: spacing.xs },
  btnBrand: { backgroundColor: palette.brand500 },
  btnSuccess: { backgroundColor: palette.success },
  btnInk: { backgroundColor: palette.ink500 },
  doneRow: { flexDirection: 'row', gap: spacing.lg, marginTop: spacing.xs },
});
