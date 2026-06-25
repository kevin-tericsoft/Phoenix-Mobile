import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText, FadeInView, PressableScale } from '@/components/ui';
import { useRequestOtp } from '@/features/auth/queries';
import { font, gradients, palette, radius, spacing } from '@/theme';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{10}$/;

type Mode = 'email' | 'phone';

export default function SignInScreen() {
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState<Mode>('phone');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const requestOtp = useRequestOtp();

  const valid = mode === 'email' ? EMAIL_RE.test(email) : PHONE_RE.test(phone);

  async function onSubmit() {
    if (!valid) return;
    try {
      if (mode === 'phone') {
        const e164 = `+91${phone}`;
        await requestOtp.mutateAsync({ phone: e164 });
        router.push({ pathname: '/(auth)/verify', params: { phone: e164 } });
      } else {
        await requestOtp.mutateAsync({ email });
        router.push({ pathname: '/(auth)/verify', params: { email } });
      }
    } catch {}
  }

  function switchMode(next: Mode) {
    setMode(next);
    setEmail('');
    setPhone('');
    requestOtp.reset();
  }

  return (
    <LinearGradient colors={gradients.hero} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.root}>
      <View style={[styles.blob, styles.blob1]} />
      <View style={[styles.blob, styles.blob2]} />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={[styles.body, { paddingTop: insets.top + spacing.xxxl }]}>
          <FadeInView index={0}>
            <View style={styles.brandMark}>
              <AppText style={{ fontSize: 34 }}>🏙️</AppText>
            </View>
            <AppText variant="display" color={palette.white} style={{ marginTop: spacing.xl }}>
              Welcome to Phoenix
            </AppText>
            <AppText variant="body" color="#DCEBFF" style={{ marginTop: spacing.xs }}>
              Your community, in one place.
            </AppText>
          </FadeInView>

          <FadeInView index={2} style={styles.card}>
            {/* Mode toggle */}
            <View style={styles.tabs}>
              {(['phone', 'email'] as Mode[]).map((m) => (
                <Pressable
                  key={m}
                  style={[styles.tab, mode === m && styles.tabActive]}
                  onPress={() => switchMode(m)}
                >
                  <AppText
                    variant="label"
                    color={mode === m ? palette.brand500 : palette.ink400}
                  >
                    {m === 'phone' ? 'Phone' : 'Email'}
                  </AppText>
                </Pressable>
              ))}
            </View>

            {mode === 'phone' ? (
              <>
                <AppText variant="label" color={palette.ink500} style={{ marginTop: spacing.xs }}>
                  MOBILE NUMBER
                </AppText>
                <View style={styles.phoneRow}>
                  <View style={styles.prefix}>
                    <AppText variant="body" color={palette.ink700} style={font('600')}>
                      +91
                    </AppText>
                  </View>
                  <TextInput
                    style={[styles.input, styles.phoneInput]}
                    placeholder="9876543210"
                    placeholderTextColor={palette.ink300}
                    keyboardType="number-pad"
                    inputMode="numeric"
                    maxLength={10}
                    value={phone}
                    onChangeText={(t) => setPhone(t.replace(/\D/g, ''))}
                    onSubmitEditing={onSubmit}
                    returnKeyType="go"
                  />
                </View>
              </>
            ) : (
              <>
                <AppText variant="label" color={palette.ink500} style={{ marginTop: spacing.xs }}>
                  EMAIL
                </AppText>
                <TextInput
                  style={styles.input}
                  placeholder="you@example.com"
                  placeholderTextColor={palette.ink300}
                  autoCapitalize="none"
                  autoComplete="email"
                  keyboardType="email-address"
                  inputMode="email"
                  value={email}
                  onChangeText={setEmail}
                  onSubmitEditing={onSubmit}
                  returnKeyType="go"
                />
              </>
            )}

            {requestOtp.isError ? (
              <AppText variant="caption" color={palette.danger} style={{ marginTop: spacing.xs }}>
                Couldn&apos;t send the code. Try again.
              </AppText>
            ) : null}

            <PressableScale
              disabled={!valid || requestOtp.isPending}
              onPress={onSubmit}
              style={[styles.button, (!valid || requestOtp.isPending) && styles.buttonDisabled]}
            >
              {requestOtp.isPending ? (
                <ActivityIndicator color={palette.white} />
              ) : (
                <AppText variant="h3" color={palette.white}>
                  Get code →
                </AppText>
              )}
            </PressableScale>
          </FadeInView>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  flex: { flex: 1 },
  body: { flex: 1, paddingHorizontal: spacing.xl },
  blob: { position: 'absolute', borderRadius: 999, backgroundColor: '#fff' },
  blob1: { width: 240, height: 240, top: -80, right: -70, opacity: 0.1 },
  blob2: { width: 180, height: 180, bottom: 40, left: -70, opacity: 0.08 },
  brandMark: {
    width: 72,
    height: 72,
    borderRadius: radius.lg,
    backgroundColor: '#FFFFFF22',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#FFFFFF55',
  },
  card: {
    marginTop: spacing.xxxl,
    backgroundColor: palette.white,
    borderRadius: radius.xl,
    padding: spacing.xl,
    gap: spacing.sm,
    shadowColor: palette.brand900,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 16 },
    elevation: 10,
  },
  tabs: {
    flexDirection: 'row',
    borderRadius: radius.md,
    backgroundColor: palette.canvas,
    padding: 3,
    marginBottom: spacing.xs,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: radius.sm,
  },
  tabActive: {
    backgroundColor: palette.white,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  phoneRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  prefix: {
    borderWidth: 1,
    borderColor: palette.ink100,
    backgroundColor: palette.canvas,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: palette.ink100,
    backgroundColor: palette.canvas,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: 16,
    color: palette.ink900,
    ...font('500'),
    marginTop: spacing.xs,
  },
  phoneInput: {
    flex: 1,
    marginTop: 0,
  },
  button: {
    backgroundColor: palette.brand500,
    borderRadius: radius.md,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    marginTop: spacing.md,
    shadowColor: palette.brand500,
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  buttonDisabled: { opacity: 0.5 },
});
