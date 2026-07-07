import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

import { AppText, GradientHeader, PressableScale } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';
import { useMe } from '@/features/auth/queries';
import { useMyNotifications } from '@/features/notifications/queries';
import { elevation, gradients, palette, radius, spacing } from '@/theme';

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
}

const TILES = [
  { href: '/events', label: 'Events', icon: 'calendar-outline', g: ['#0078F3', '#0063CC'] as const },
  { href: '/polls', label: 'Polls', icon: 'bar-chart-outline', g: ['#5d9eff', '#0078F3'] as const },
  { href: '/amenities', label: 'Amenities', icon: 'barbell-outline', g: ['#0A63E0', '#063B73'] as const },
  { href: '/walls', label: 'Community', icon: 'chatbubbles-outline', g: ['#3376E9', '#0078F3'] as const },
  { href: '/visitors', label: 'Visitors', icon: 'people-outline', g: ['#0078F3', '#5d9eff'] as const },
  // Parcels tile hidden for now — parcel management is paused; route/feature code left intact.
] as const;

export default function HomeScreen() {
  const { status } = useAuth();
  const me = useMe(status === 'authenticated');
  const notifications = useMyNotifications();
  const recent = (notifications.data?.data ?? []).slice(0, 3);

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <GradientHeader>
          <AppText variant="label" color="#DCEBFF">
            {greeting()},
          </AppText>
          {me.isLoading ? (
            <ActivityIndicator color="#fff" style={{ alignSelf: 'flex-start', marginTop: 6 }} />
          ) : (
            <AppText variant="display" color={palette.white} style={{ marginTop: 2 }}>
              {me.data?.name?.split(' ')[0] ?? 'there'}
            </AppText>
          )}
        </GradientHeader>

        <View style={styles.body}>
          {/* Security staff get a prominent gate shortcut. */}
          {me.data?.role?.code === 'security' ? (
            <Link href="/gate" asChild>
              <PressableScale style={styles.gateCard}>
                <LinearGradient colors={['#0A2A4D', '#0063CC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gateInner}>
                  <Ionicons name="shield-checkmark-outline" size={28} color={palette.white} />
                  <View style={{ flex: 1 }}>
                    <AppText variant="h2" color={palette.white}>Gate check-in</AppText>
                    <AppText variant="caption" color="#DCEBFF">Scan or enter a visit code</AppText>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={palette.white} />
                </LinearGradient>
              </PressableScale>
            </Link>
          ) : null}

          <AppText variant="h2" style={{ marginBottom: spacing.md, marginTop: me.data?.role?.code === 'security' ? spacing.lg : 0 }}>
            Explore
          </AppText>
          <View style={styles.grid}>
            {TILES.map((t) => (
              <View key={t.href} style={styles.tileWrap}>
                <Link href={t.href as never} asChild>
                  <PressableScale style={styles.tilePress}>
                    <LinearGradient colors={t.g} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.tile}>
                      <Ionicons name={t.icon} size={28} color={palette.white} />
                      <AppText variant="h3" color={palette.white}>
                        {t.label}
                      </AppText>
                    </LinearGradient>
                  </PressableScale>
                </Link>
              </View>
            ))}
          </View>

          {recent.length > 0 ? (
            <View style={{ marginTop: spacing.xl }}>
              <View style={styles.recentHead}>
                <AppText variant="h2">Recent</AppText>
                <Link href="/notifications" asChild>
                  <PressableScale haptic={false}><AppText variant="label" color={palette.brand500}>See all</AppText></PressableScale>
                </Link>
              </View>
              {recent.map((n) => (
                <Link key={n.id} href="/notifications" asChild>
                  <PressableScale style={styles.announce}>
                    <View style={[styles.announceDot, { backgroundColor: n.status !== 'read' ? palette.brand500 : palette.ink200 }]} />
                    <AppText variant="body" color={palette.ink700} numberOfLines={2} style={{ flex: 1 }}>{n.message}</AppText>
                  </PressableScale>
                </Link>
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  scroll: { paddingBottom: spacing.xxl },
  body: { padding: spacing.xl },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  tileWrap: { width: '47.5%' },
  tilePress: { borderRadius: radius.lg, ...elevation.card },
  tile: {
    borderRadius: radius.lg,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    minHeight: 116,
    justifyContent: 'flex-end',
  },
  gateCard: { borderRadius: radius.lg, ...elevation.raised },
  gateInner: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderRadius: radius.lg, padding: spacing.lg },
  recentHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  announce: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: palette.surface, borderRadius: radius.md, padding: spacing.lg, marginBottom: spacing.sm, ...elevation.card },
  announceDot: { width: 8, height: 8, borderRadius: 4 },
});

