import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { AppText, FadeInView, PressableScale } from '@/components/ui';
import { useAmenityDetail, useSubmitReview } from '@/features/amenities/queries';
import { elevation, font, palette, radius, spacing } from '@/theme';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function AmenityDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const detail = useAmenityDetail(id);
  const submit = useSubmitReview(id);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  if (detail.isLoading) return <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />;
  if (!detail.data) return <AppText variant="body" color={palette.ink300} style={styles.empty}>Not found.</AppText>;
  const a = detail.data;

  async function onSubmit() {
    if (rating < 1 || !comment.trim()) return;
    await submit.mutateAsync({ rating, comment: comment.trim() });
    setRating(0);
    setComment('');
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <FadeInView index={0}>
        <AppText variant="title">{a.name}</AppText>
        {a.short_description ? (
          <AppText variant="body" color={palette.ink400} style={{ marginTop: spacing.xs }}>
            {a.short_description}
          </AppText>
        ) : null}
        <View style={styles.factCard}>
          {a.location ? <Fact label="Location" value={a.location} /> : null}
          {a.capacity ? <Fact label="Capacity" value={String(a.capacity)} /> : null}
          <Fact label="Rating" value={a.avg_rating != null ? `★ ${a.avg_rating} (${a.review_count})` : 'No reviews'} />
        </View>
      </FadeInView>

      {a.operating_hours.length > 0 ? (
        <FadeInView index={1}>
          <AppText variant="h2" style={styles.sectionTitle}>Hours</AppText>
          <View style={styles.card}>
            {a.operating_hours.map((h) => (
              <View key={h.id} style={styles.row}>
                <AppText variant="body" color={palette.ink400}>{DAYS[h.day_of_week]}</AppText>
                <AppText variant="h3">{h.open_time.slice(0, 5)}–{h.close_time.slice(0, 5)}</AppText>
              </View>
            ))}
          </View>
        </FadeInView>
      ) : null}

      <FadeInView index={2}>
        <AppText variant="h2" style={styles.sectionTitle}>Reviews ({a.review_count})</AppText>
        {a.reviews.map((r) => (
          <View key={r.id} style={styles.reviewCard}>
            <AppText color={palette.warning}>{'★'.repeat(r.rating)}</AppText>
            <AppText variant="body" color={palette.ink700}>{r.comment}</AppText>
          </View>
        ))}
      </FadeInView>

      <FadeInView index={3}>
        <AppText variant="h2" style={styles.sectionTitle}>Write a review</AppText>
        <View style={styles.card}>
          <View style={styles.starRow}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Pressable key={n} onPress={() => setRating(n)} hitSlop={6}>
                <AppText style={[styles.star, n <= rating && styles.starOn]}>★</AppText>
              </Pressable>
            ))}
          </View>
          <TextInput style={styles.input} placeholder="Share your experience" placeholderTextColor={palette.ink300} value={comment} onChangeText={setComment} multiline />
          <PressableScale
            disabled={rating < 1 || !comment.trim() || submit.isPending}
            onPress={onSubmit}
            style={[styles.button, (rating < 1 || !comment.trim() || submit.isPending) && { opacity: 0.5 }]}
          >
            <AppText variant="h3" color={palette.white}>{submit.isPending ? 'Submitting…' : 'Submit review'}</AppText>
          </PressableScale>
        </View>
      </FadeInView>
    </ScrollView>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <AppText variant="body" color={palette.ink400}>{label}</AppText>
      <AppText variant="h3">{value}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  content: { padding: spacing.xl, gap: spacing.lg },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  factCard: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.sm, marginTop: spacing.lg, ...elevation.card },
  sectionTitle: { marginBottom: spacing.sm },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.md, ...elevation.card },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  reviewCard: { backgroundColor: palette.surface, borderRadius: radius.md, padding: spacing.lg, gap: spacing.xs, marginBottom: spacing.sm, ...elevation.card },
  starRow: { flexDirection: 'row', gap: spacing.sm },
  star: { fontSize: 32, color: palette.ink200 },
  starOn: { color: palette.warning },
  input: { borderWidth: 1, borderColor: palette.ink100, backgroundColor: palette.canvas, borderRadius: radius.md, padding: spacing.md, fontSize: 15, minHeight: 72, color: palette.ink900, ...font('400') },
  button: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingVertical: spacing.lg, alignItems: 'center', ...elevation.brandGlow },
});
