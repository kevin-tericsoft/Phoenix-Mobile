import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText, FadeInView, PressableScale } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';
import { useRequestOtp, useVerifyOtp } from '@/features/auth/queries';
import { font, gradients, palette, radius, spacing } from '@/theme';

const OTP_LENGTH = 6;

/** Step 2 — Aurora: gradient canvas, boxed OTP cells, springy verify. */
export default function VerifyScreen() {
  const insets = useSafeAreaInsets();
  const { email } = useLocalSearchParams<{ email: string }>();
  const [otp, setOtp] = useState('');
  const verifyOtp = useVerifyOtp();
  const requestOtp = useRequestOtp();
  const { signIn } = useAuth();
  const complete = otp.length === OTP_LENGTH;

  async function onVerify() {
    if (!complete || !email) return;
    try {
      const tokens = await verifyOtp.mutateAsync({ email, otp });
      await signIn({ accessToken: tokens.access_token, refreshToken: tokens.refresh_token });
    } catch {}
  }

  return (
    <LinearGradient colors={gradients.hero} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.root}>
      <View style={[styles.body, { paddingTop: insets.top + spacing.xxl }]}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <AppText variant="h3" color={palette.white}>
            ← Back
          </AppText>
        </Pressable>

        <FadeInView index={1} style={styles.card}>
          <AppText variant="title">Enter code</AppText>
          <AppText variant="body" color={palette.ink400} style={{ marginTop: 2 }}>
            Sent to {email}
          </AppText>

          {/* boxed OTP display synced to a hidden input */}
          <Pressable style={styles.cells} onPress={() => {}}>
            {Array.from({ length: OTP_LENGTH }).map((_, i) => (
              <View key={i} style={[styles.cell, otp.length === i && styles.cellActive]}>
                <AppText variant="title">{otp[i] ?? ''}</AppText>
              </View>
            ))}
          </Pressable>
          <TextInput
            style={styles.hiddenInput}
            keyboardType="number-pad"
            inputMode="numeric"
            maxLength={OTP_LENGTH}
            value={otp}
            onChangeText={(t) => setOtp(t.replace(/\D/g, ''))}
            autoFocus
            caretHidden
          />

          {verifyOtp.isError ? (
            <AppText variant="caption" color={palette.danger}>
              Invalid or expired code.
            </AppText>
          ) : null}

          <PressableScale
            disabled={!complete || verifyOtp.isPending}
            onPress={onVerify}
            style={[styles.button, (!complete || verifyOtp.isPending) && styles.buttonDisabled]}
          >
            {verifyOtp.isPending ? (
              <ActivityIndicator color={palette.white} />
            ) : (
              <AppText variant="h3" color={palette.white}>
                Verify
              </AppText>
            )}
          </PressableScale>

          <Pressable onPress={() => email && requestOtp.mutate(email)} disabled={requestOtp.isPending}>
            <AppText variant="label" color={palette.brand500} style={{ textAlign: 'center', marginTop: spacing.sm }}>
              {requestOtp.isPending ? 'Sending…' : 'Resend code'}
            </AppText>
          </Pressable>
        </FadeInView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  body: { flex: 1, paddingHorizontal: spacing.xl },
  card: {
    marginTop: spacing.xxl,
    backgroundColor: palette.white,
    borderRadius: radius.xl,
    padding: spacing.xl,
    gap: spacing.md,
    shadowColor: palette.brand900,
    shadowOpacity: 0.25,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 16 },
    elevation: 10,
  },
  cells: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.sm },
  cell: {
    flex: 1,
    aspectRatio: 0.85,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: palette.ink100,
    backgroundColor: palette.canvas,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellActive: { borderColor: palette.brand500, backgroundColor: palette.brand50 },
  hiddenInput: { position: 'absolute', opacity: 0, height: 1, width: 1 },
  button: {
    backgroundColor: palette.brand500,
    borderRadius: radius.md,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    marginTop: spacing.sm,
    shadowColor: palette.brand500,
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  buttonDisabled: { opacity: 0.5 },
});
