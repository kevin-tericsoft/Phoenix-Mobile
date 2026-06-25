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
import { useCreateParcel } from '@/features/parcels/queries';
import { elevation, font, palette, radius, spacing } from '@/theme';

export default function NewParcelScreen() {
  const create = useCreateParcel();
  const [company, setCompany] = useState('');
  const [type, setType] = useState('');
  const [qty, setQty] = useState('');
  const valid = company.trim().length > 1;

  async function onSubmit() {
    if (!valid) return;
    await create.mutateAsync({
      delivery_company: company.trim(),
      parcel_type: type.trim() || undefined,
      quantity: qty ? Number(qty) : undefined,
    });
    router.back();
  }

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.root} contentContainerStyle={styles.content}>
        <AppText variant="body" color={palette.ink400}>
          Pre-register a parcel so reception knows it&apos;s coming.
        </AppText>
        <View style={styles.card}>
          <Field label="Delivery company">
            <TextInput style={styles.input} value={company} onChangeText={setCompany} placeholder="e.g. Amazon, BlueDart" placeholderTextColor={palette.ink300} />
          </Field>
          <Field label="Type (optional)">
            <TextInput style={styles.input} value={type} onChangeText={setType} placeholder="e.g. box, envelope" placeholderTextColor={palette.ink300} />
          </Field>
          <Field label="Quantity (optional)">
            <TextInput style={styles.input} value={qty} onChangeText={(t) => setQty(t.replace(/\D/g, ''))} placeholder="1" placeholderTextColor={palette.ink300} keyboardType="number-pad" />
          </Field>
          <PressableScale onPress={onSubmit} disabled={!valid || create.isPending} style={[styles.button, (!valid || create.isPending) && { opacity: 0.5 }]}>
            {create.isPending ? <ActivityIndicator color={palette.white} /> : <AppText variant="h3" color={palette.white}>Register parcel</AppText>}
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
