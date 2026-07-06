import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';
import { useDeleteAccount } from '@/features/profile/queries';
import { elevation, palette, radius, spacing } from '@/theme';

const REASONS = [
  'No longer living here',
  'Privacy concerns',
  'Not using the app',
  'Switching to another account',
  'Other',
];

/** Two-step self-delete: pick a reason → confirm. Mirrors the old 3-screen delete flow. */
export default function DeleteAccountScreen() {
  const [step, setStep] = useState<'reason' | 'confirm'>('reason');
  const [reason, setReason] = useState<string | null>(null);
  const del = useDeleteAccount();
  const { signOut } = useAuth();

  async function confirmDelete() {
    await del.mutateAsync(reason ?? undefined);
    await signOut(); // clears tokens → router redirects to (auth)
  }

  if (step === 'reason') {
    return (
      <View style={styles.root}>
        <AppText variant="title">We&apos;re sorry to see you go</AppText>
        <AppText variant="body" color={palette.ink400}>Help us improve — why are you leaving?</AppText>
        <View style={{ gap: spacing.sm, marginTop: spacing.md }}>
          {REASONS.map((r) => (
            <PressableScale key={r} haptic={false} onPress={() => setReason(r)} style={[styles.reason, reason === r && styles.reasonSel]}>
              <View style={[styles.radio, reason === r && styles.radioSel]} />
              <AppText variant="h3" color={reason === r ? palette.brand600 : palette.ink700}>{r}</AppText>
            </PressableScale>
          ))}
        </View>
        <PressableScale disabled={!reason} onPress={() => setStep('confirm')} style={[styles.next, !reason && { opacity: 0.5 }]}>
          <AppText variant="h3" color={palette.white}>Continue</AppText>
        </PressableScale>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <View style={styles.warnIcon}><Ionicons name="warning-outline" size={40} color={palette.danger} /></View>
      <AppText variant="title" style={{ textAlign: 'center' }}>Delete your account?</AppText>
      <AppText variant="body" color={palette.ink400} style={{ textAlign: 'center' }}>
        This permanently removes your access. This action cannot be undone.
      </AppText>
      <PressableScale onPress={confirmDelete} disabled={del.isPending} style={[styles.delete, del.isPending && { opacity: 0.6 }]}>
        {del.isPending ? <ActivityIndicator color={palette.white} /> : <AppText variant="h3" color={palette.white}>Delete account</AppText>}
      </PressableScale>
      <PressableScale haptic={false} onPress={() => setStep('reason')} style={styles.ghost}>
        <AppText variant="label" color={palette.ink400}>Go back</AppText>
      </PressableScale>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas, padding: spacing.xl, gap: spacing.sm, justifyContent: 'center' },
  reason: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.lg, borderRadius: radius.md, borderWidth: 1.5, borderColor: palette.ink100, backgroundColor: palette.surface },
  reasonSel: { borderColor: palette.brand500, backgroundColor: palette.brand50 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: palette.ink200 },
  radioSel: { borderColor: palette.brand500, backgroundColor: palette.brand500 },
  next: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingVertical: spacing.lg, alignItems: 'center', marginTop: spacing.lg, ...elevation.brandGlow },
  warnIcon: { alignSelf: 'center', width: 80, height: 80, borderRadius: 40, backgroundColor: '#FEE', alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  delete: { backgroundColor: palette.danger, borderRadius: radius.md, paddingVertical: spacing.lg, alignItems: 'center', marginTop: spacing.lg },
  ghost: { alignItems: 'center', paddingVertical: spacing.md },
});
