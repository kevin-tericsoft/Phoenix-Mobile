import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, FadeInView, GradientHeader, PressableScale } from '@/components/ui';
import { useMyPolls, useVotePoll, type MyPoll } from '@/features/polls/queries';
import { elevation, palette, radius, spacing } from '@/theme';

export default function PollsScreen() {
  const polls = useMyPolls();

  return (
    <View style={styles.root}>
      <GradientHeader>
        <AppText variant="display" color={palette.white}>
          Polls
        </AppText>
        <AppText variant="body" color="#DCEBFF">
          Your voice counts
        </AppText>
      </GradientHeader>

      {polls.isLoading ? (
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />
      ) : (
        <FlatList
          data={polls.data ?? []}
          keyExtractor={(p) => p.id}
          contentContainerStyle={styles.list}
          refreshControl={<RefreshControl refreshing={polls.isFetching} onRefresh={() => polls.refetch()} tintColor={palette.brand500} />}
          ListEmptyComponent={<AppText variant="body" color={palette.ink300} style={styles.empty}>No active polls right now.</AppText>}
          renderItem={({ item, index }) => (
            <FadeInView index={index}>
              <PollCard poll={item} />
            </FadeInView>
          )}
        />
      )}
    </View>
  );
}

function PollCard({ poll }: { poll: MyPoll }) {
  const vote = useVotePoll();
  const selected = new Set(poll.my_option_ids);

  return (
    <View style={styles.card}>
      <AppText variant="h2">{poll.question}</AppText>
      {poll.has_responded ? (
        <AppText variant="label" color={palette.success}>
          ✓ You voted
        </AppText>
      ) : null}
      <View style={{ gap: spacing.sm, marginTop: spacing.xs }}>
        {poll.options.map((opt) => {
          const isSel = selected.has(opt.id);
          return (
            <PressableScale
              key={opt.id}
              disabled={vote.isPending}
              haptic
              onPress={() => vote.mutate({ pollId: poll.id, optionIds: [opt.id] })}
              style={[styles.option, isSel && styles.optionSel]}
            >
              <View style={[styles.radio, isSel && styles.radioSel]} />
              <AppText variant="h3" color={isSel ? palette.brand600 : palette.ink700}>
                {opt.title}
              </AppText>
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
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.xl, gap: spacing.md, ...elevation.card },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: palette.ink100,
  },
  optionSel: { borderColor: palette.brand500, backgroundColor: palette.brand50 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: palette.ink200 },
  radioSel: { borderColor: palette.brand500, backgroundColor: palette.brand500 },
});
