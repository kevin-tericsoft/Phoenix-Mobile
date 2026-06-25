import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { AppText } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';
import { useMe } from '@/features/auth/queries';
import { gradients, palette, radius, spacing } from '@/theme';

/**
 * Digital ID card — a branded card with a QR of the user's code, shown at the gate/reception
 * to identify the resident. (Old app's VirtualId screen.) The QR encodes the user_code.
 */
export default function VirtualIdScreen() {
  const { status } = useAuth();
  const me = useMe(status === 'authenticated');

  if (me.isLoading || !me.data) {
    return <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxxl }} />;
  }
  const u = me.data;

  return (
    <View style={styles.root}>
      <LinearGradient colors={gradients.hero} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
        <AppText variant="label" color="#DCEBFF">PHOENIX · DIGITAL ID</AppText>
        <AppText variant="title" color={palette.white} style={{ marginTop: spacing.xs }}>{u.name}</AppText>
        {u.designation ? <AppText variant="body" color="#DCEBFF">{u.designation}</AppText> : null}

        <View style={styles.qrWrap}>
          <QRCode value={u.user_code} size={180} backgroundColor="white" color={palette.ink900} />
        </View>

        <View style={styles.codeRow}>
          <AppText variant="label" color="#DCEBFF">CODE</AppText>
          <AppText variant="h2" color={palette.white} style={{ letterSpacing: 2 }}>{u.user_code}</AppText>
        </View>
        <AppText variant="caption" color="#DCEBFF">{u.email}</AppText>
      </LinearGradient>
      <AppText variant="caption" color={palette.ink400} style={{ textAlign: 'center', marginTop: spacing.lg }}>
        Show this at the gate or reception for quick identification.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas, padding: spacing.xl, justifyContent: 'center' },
  card: { borderRadius: radius.xl, padding: spacing.xl, alignItems: 'center', gap: spacing.xs, shadowColor: palette.brand900, shadowOpacity: 0.3, shadowRadius: 30, shadowOffset: { width: 0, height: 16 }, elevation: 10 },
  qrWrap: { backgroundColor: palette.white, padding: spacing.lg, borderRadius: radius.lg, marginVertical: spacing.lg },
  codeRow: { alignItems: 'center', gap: 2 },
});
