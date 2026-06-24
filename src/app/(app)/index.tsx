import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

import { AppText, FadeInView, GlassSurface, GradientHeader, PressableScale } from '@/components/ui';
import { useAuth } from '@/features/auth/auth-context';
import { useMe } from '@/features/auth/queries';
import { useUnreadCount } from '@/features/notifications/queries';
import { useMyVisits } from '@/features/visitors/queries';
import { elevation, gradients, palette, radius, spacing } from '@/theme';

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
}

const TILES = [
  { href: '/events', label: 'Events', emoji: '🎉', g: ['#0078F3', '#0063CC'] as const },
  { href: '/polls', label: 'Polls', emoji: '🗳️', g: ['#5d9eff', '#0078F3'] as const },
  { href: '/amenities', label: 'Amenities', emoji: '🏋️', g: ['#0A63E0', '#063B73'] as const },
  { href: '/walls', label: 'Community', emoji: '💬', g: ['#3376E9', '#0078F3'] as const },
  { href: '/visitors', label: 'Visitors', emoji: '🛎️', g: ['#0078F3', '#5d9eff'] as const },
  { href: '/parcels', label: 'Parcels', emoji: '📦', g: ['#0063CC', '#0A2A4D'] as const },
];

export default function HomeScreen() {
  const { status } = useAuth();
  const me = useMe(status === 'authenticated');
  const unread = useUnreadCount();
  const visits = useMyVisits();

  const upcomingVisits = (visits.data ?? []).filter(
    (v) => v.status === 'pending' || v.status === 'approved',
  ).length;

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
              {me.data?.name?.split(' ')[0] ?? 'there'} 👋
            </AppText>
          )}

          {/* glass stat cards floating on the gradient */}
          <View style={styles.stats}>
            <GlassSurface tone="light" style={styles.stat} borderRadius={radius.md}>
              <AppText variant="title" color={palette.white}>
                {unread.data ?? 0}
              </AppText>
              <AppText variant="caption" color="#EAF1FB">
                new alerts
              </AppText>
            </GlassSurface>
            <GlassSurface tone="light" style={styles.stat} borderRadius={radius.md}>
              <AppText variant="title" color={palette.white}>
                {upcomingVisits}
              </AppText>
              <AppText variant="caption" color="#EAF1FB">
                upcoming visits
              </AppText>
            </GlassSurface>
          </View>
        </GradientHeader>

        <View style={styles.body}>
          <AppText variant="h2" style={{ marginBottom: spacing.md }}>
            Explore
          </AppText>
          <View style={styles.grid}>
            {TILES.map((t, i) => (
              <FadeInView key={t.href} index={i} style={styles.tileWrap}>
                <Link href={t.href as never} asChild>
                  <PressableScale style={styles.tilePress}>
                    <LinearGradient colors={t.g} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.tile}>
                      <AppText style={styles.tileEmoji}>{t.emoji}</AppText>
                      <AppText variant="h3" color={palette.white}>
                        {t.label}
                      </AppText>
                    </LinearGradient>
                  </PressableScale>
                </Link>
              </FadeInView>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  scroll: { paddingBottom: spacing.xxl },
  stats: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.xl },
  stat: {
    flex: 1,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#FFFFFF55',
  },
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
  tileEmoji: { fontSize: 30 },
});
