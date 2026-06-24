import { router } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
import { useInviteVisitor } from '@/features/visitors/queries';
import { elevation, font, palette, radius, spacing } from '@/theme';

export default function InviteVisitorScreen() {
  const invite = useInviteVisitor();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('');
  const valid = name.trim().length > 1 && phone.trim().length >= 10;

  async function onSubmit() {
    if (!valid) return;
    try {
      await invite.mutateAsync({
        visitor_name: name.trim(),
        visitor_phone: phone.trim(),
        purpose_of_visit: purpose.trim() || undefined,
        vehicle_numbers: [],
        include_parking: false,
      });
      router.back();
    } catch {}
  }

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.root} contentContainerStyle={styles.content}>
        <AppText variant="body" color={palette.ink400}>
          We&apos;ll generate a visit code to share with your guest.
        </AppText>
        <View style={styles.card}>
          <Field label="Visitor name">
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g. Ramesh Kumar" placeholderTextColor={palette.ink300} />
          </Field>
          <Field label="Phone">
            <TextInput style={styles.input} value={phone} onChangeText={(t) => setPhone(t.replace(/[^\d+]/g, ''))} placeholder="10-digit number" placeholderTextColor={palette.ink300} keyboardType="phone-pad" />
          </Field>
          <Field label="Purpose (optional)">
            <TextInput style={styles.input} value={purpose} onChangeText={setPurpose} placeholder="e.g. plumbing repair" placeholderTextColor={palette.ink300} />
          </Field>
          {invite.isError ? (
            <AppText variant="caption" color={palette.danger}>Couldn&apos;t send invite. Try again.</AppText>
          ) : null}
          <PressableScale onPress={onSubmit} disabled={!valid || invite.isPending} style={[styles.button, (!valid || invite.isPending) && { opacity: 0.5 }]}>
            {invite.isPending ? <ActivityIndicator color={palette.white} /> : <AppText variant="h3" color={palette.white}>Send invite</AppText>}
          </PressableScale>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View style={{ gap: spacing.xs }}>
      <AppText variant="label" color={palette.ink500}>{label}</AppText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: palette.canvas },
  root: { flex: 1 },
  content: { padding: spacing.xl, gap: spacing.lg },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.xl, gap: spacing.lg, ...elevation.card },
  input: { borderWidth: 1, borderColor: palette.ink100, backgroundColor: palette.canvas, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, fontSize: 16, color: palette.ink900, ...font('500') },
  button: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingVertical: spacing.lg, alignItems: 'center', marginTop: spacing.xs, ...elevation.brandGlow },
});
