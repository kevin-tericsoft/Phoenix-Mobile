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

import { AppText, FadeInView, GradientHeader, PressableScale } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';
import { useMe } from '@/features/auth/queries';
import { useUpdateProfile } from '@/features/profile/queries';
import { elevation, font, palette, radius, spacing } from '@/theme';

export default function ProfileScreen() {
  const { status, signOut } = useAuth();
  const me = useMe(status === 'authenticated');
  const update = useUpdateProfile();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [phone, setPhone] = useState('');

  function startEdit() {
    if (!me.data) return;
    setName(me.data.name ?? '');
    setDesignation(me.data.designation ?? '');
    setPhone(me.data.phone ?? '');
    setEditing(true);
  }
  async function save() {
    await update.mutateAsync({
      name: name.trim() || undefined,
      designation: designation.trim() || undefined,
      phone: phone.trim() || undefined,
    });
    setEditing(false);
  }

  if (me.isLoading || !me.data) {
    return (
      <View style={styles.root}>
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxxl }} />
      </View>
    );
  }
  const u = me.data;

  return (
    <View style={styles.root}>
      <GradientHeader>
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <AppText variant="display" color={palette.white}>
              {u.name.charAt(0)}
            </AppText>
          </View>
          <AppText variant="title" color={palette.white} style={{ marginTop: spacing.md }}>
            {u.name}
          </AppText>
          {u.designation ? (
            <AppText variant="body" color="#DCEBFF">
              {u.designation}
            </AppText>
          ) : null}
        </View>
      </GradientHeader>

      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.body}>
          {editing ? (
            <FadeInView style={styles.card}>
              <Field label="Name"><TextInput style={styles.input} value={name} onChangeText={setName} /></Field>
              <Field label="Designation"><TextInput style={styles.input} value={designation} onChangeText={setDesignation} /></Field>
              <Field label="Phone"><TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" /></Field>
              <PressableScale onPress={save} disabled={update.isPending} style={styles.button}>
                <AppText variant="h3" color={palette.white}>{update.isPending ? 'Saving…' : 'Save'}</AppText>
              </PressableScale>
              <PressableScale onPress={() => setEditing(false)} haptic={false} style={styles.ghost}>
                <AppText variant="label" color={palette.ink400}>Cancel</AppText>
              </PressableScale>
            </FadeInView>
          ) : (
            <>
              <FadeInView index={0} style={styles.card}>
                <Row label="Email" value={u.email} />
                <Row label="Phone" value={u.phone} />
                <Row label="User code" value={u.user_code} />
              </FadeInView>
              <FadeInView index={1}>
                <PressableScale onPress={startEdit} style={styles.button}>
                  <AppText variant="h3" color={palette.white}>Edit profile</AppText>
                </PressableScale>
              </FadeInView>
              <FadeInView index={2}>
                <PressableScale onPress={signOut} haptic={false} style={styles.ghost}>
                  <AppText variant="label" color={palette.danger}>Sign out</AppText>
                </PressableScale>
              </FadeInView>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
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
function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <AppText variant="body" color={palette.ink400}>{label}</AppText>
      <AppText variant="h3">{value}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  flex: { flex: 1 },
  body: { padding: spacing.xl, gap: spacing.md },
  avatarWrap: { alignItems: 'center', paddingVertical: spacing.md },
  avatar: {
    width: 88, height: 88, borderRadius: 44, backgroundColor: '#FFFFFF22',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: '#FFFFFF55',
  },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.xl, gap: spacing.md, ...elevation.card },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: palette.ink100, backgroundColor: palette.canvas, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, fontSize: 16, color: palette.ink900, ...font('500') },
  button: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingVertical: spacing.lg, alignItems: 'center', ...elevation.brandGlow },
  ghost: { alignItems: 'center', paddingVertical: spacing.md },
});
