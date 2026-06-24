import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText, FadeInView, PressableScale } from '@/components/ui';
import { useRequestOtp } from '@/features/auth/queries';
import { font, gradients, palette, radius, spacing } from '@/theme';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Step 1 of login — Aurora: gradient canvas, brand mark, glassy input, springy CTA. */
export default function SignInScreen() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const requestOtp = useRequestOtp();
  const valid = EMAIL_RE.test(email);

  async function onSubmit() {
    if (!valid) return;
    try {
      await requestOtp.mutateAsync(email);
      router.push({ pathname: '/(auth)/verify', params: { email } });
    } catch {}
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
            <AppText variant="label" color={palette.ink500}>
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
