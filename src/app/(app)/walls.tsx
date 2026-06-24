import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, FadeInView, GradientHeader, PressableScale } from '@/components/ui';
import { useMyWalls, useReactToWall, type MyWall } from '@/features/walls/queries';
import { elevation, palette, radius, spacing } from '@/theme';

const REACTIONS: { code: number; emoji: string }[] = [
  { code: 1, emoji: '👍' },
  { code: 2, emoji: '❤️' },
  { code: 3, emoji: '👏' },
  { code: 4, emoji: '🙂' },
  { code: 5, emoji: '😕' },
];

export default function WallsScreen() {
  const walls = useMyWalls();

  return (
    <View style={styles.root}>
      <GradientHeader>
        <AppText variant="display" color={palette.white}>
          Community
        </AppText>
        <AppText variant="body" color="#DCEBFF">
          What&apos;s happening
        </AppText>
      </GradientHeader>

      {walls.isLoading ? (
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />
      ) : (
        <FlatList
          data={walls.data ?? []}
          keyExtractor={(w) => w.id}
          contentContainerStyle={styles.list}
          refreshControl={<RefreshControl refreshing={walls.isFetching} onRefresh={() => walls.refetch()} tintColor={palette.brand500} />}
          ListEmptyComponent={<AppText variant="body" color={palette.ink300} style={styles.empty}>Nothing on the wall yet.</AppText>}
          renderItem={({ item, index }) => (
            <FadeInView index={index}>
              <WallCard wall={item} />
            </FadeInView>
          )}
        />
      )}
    </View>
  );
}

function WallCard({ wall }: { wall: MyWall }) {
  const react = useReactToWall();
  return (
    <View style={styles.card}>
      <AppText variant="h2">{wall.title}</AppText>
      <AppText variant="body" color={palette.ink400}>
        {wall.description}
      </AppText>
      <View style={styles.reactions}>
        {REACTIONS.map(({ code, emoji }) => {
          const mine = wall.my_reaction === code;
          const count = wall.reaction_counts[code] ?? 0;
          return (
            <PressableScale
              key={code}
              disabled={react.isPending}
              onPress={() => react.mutate({ wallId: wall.id, response: mine ? null : code })}
              style={[styles.reaction, mine && styles.reactionActive]}
            >
              <AppText style={{ fontSize: 16 }}>{emoji}</AppText>
              {count > 0 ? (
                <AppText variant="caption" color={mine ? palette.brand600 : palette.ink400}>
                  {count}
                </AppText>
              ) : null}
            </PressableScale>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  list: { padding: spacing.lg, gap: spacing.md },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.xl, gap: spacing.sm, ...elevation.card },
  reactions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.sm },
  reaction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: palette.ink100,
    backgroundColor: palette.canvas,
  },
  reactionActive: { borderColor: palette.brand400, backgroundColor: palette.brand50 },
});
