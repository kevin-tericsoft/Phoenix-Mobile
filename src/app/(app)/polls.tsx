import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { AppText, FadeInView, GradientHeader } from '@/components/ui';
import { PollInput } from '@/features/polls/PollInput';
import { useMyPolls, useVotePoll, type MyPoll } from '@/features/polls/queries';
import { elevation, palette, radius, spacing } from '@/theme';

const TYPE_LABEL: Record<string, string> = {
  single_select: 'Pick one',
  multi_select: 'Pick any',
  rating: 'Rate',
  slider: 'Slide to answer',
};

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
  return (
    <View style={styles.card}>
      <View style={styles.typeChip}>
        <AppText variant="caption" color={palette.brand600}>
          {TYPE_LABEL[poll.answer_type] ?? 'Poll'}
        </AppText>
      </View>
      <AppText variant="h2">{poll.question}</AppText>
      {poll.has_responded ? (
        <AppText variant="label" color={palette.success}>
          ✓ You voted
        </AppText>
      ) : null}
      <View style={{ marginTop: spacing.xs }}>
        <PollInput
          poll={poll}
          pending={vote.isPending}
          onVote={(optionIds) => vote.mutate({ pollId: poll.id, optionIds })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  list: { padding: spacing.lg, gap: spacing.md },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.xl, gap: spacing.md, ...elevation.card },
  typeChip: { alignSelf: 'flex-start', backgroundColor: palette.brand50, borderRadius: radius.sm, paddingHorizontal: spacing.md, paddingVertical: spacing.xs },
});
