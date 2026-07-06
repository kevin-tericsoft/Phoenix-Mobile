import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
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
      <View>
        <AppText variant="title">{a.name}</AppText>
        {a.short_description ? (
          <AppText variant="body" color={palette.ink400} style={{ marginTop: spacing.xs }}>
            {a.short_description}
          </AppText>
        ) : null}
        <View style={styles.factCard}>
          {a.location ? <Fact label="Location" value={a.location} /> : null}
          {a.capacity ? <Fact label="Capacity" value={String(a.capacity)} /> : null}
          <View style={styles.row}>
            <AppText variant="body" color={palette.ink400}>Rating</AppText>
            {a.avg_rating != null ? (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Ionicons name="star" size={15} color={palette.warning} />
                <AppText variant="h3">{a.avg_rating} ({a.review_count})</AppText>
              </View>
            ) : (
              <AppText variant="h3">No reviews</AppText>
            )}
          </View>
        </View>
      </View>

      {a.operating_hours.length > 0 ? (
        <View>
          <AppText variant="h2" style={styles.sectionTitle}>Hours</AppText>
          <View style={styles.card}>
            {a.operating_hours.map((h) => (
              <View key={h.id} style={styles.row}>
                <AppText variant="body" color={palette.ink400}>{DAYS[h.day_of_week]}</AppText>
                <AppText variant="h3">{h.open_time.slice(0, 5)}–{h.close_time.slice(0, 5)}</AppText>
              </View>
            ))}
          </View>
        </View>
      ) : null}

      <View>
        <AppText variant="h2" style={styles.sectionTitle}>Reviews ({a.review_count})</AppText>
        {a.reviews.map((r) => (
          <View key={r.id} style={styles.reviewCard}>
            <View style={{ flexDirection: 'row', gap: 2 }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <Ionicons key={n} name={n <= r.rating ? 'star' : 'star-outline'} size={14} color={palette.warning} />
              ))}
            </View>
            <AppText variant="body" color={palette.ink700}>{r.comment}</AppText>
          </View>
        ))}
      </View>

      <View>
        <AppText variant="h2" style={styles.sectionTitle}>Write a review</AppText>
        <View style={styles.card}>
          <View style={styles.starRow}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Pressable key={n} onPress={() => setRating(n)} hitSlop={6}>
                <Ionicons name={n <= rating ? 'star' : 'star-outline'} size={32} color={n <= rating ? palette.warning : palette.ink200} />
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
      </View>
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
  input: { borderWidth: 1, borderColor: palette.ink100, backgroundColor: palette.canvas, borderRadius: radius.md, padding: spacing.md, fontSize: 15, minHeight: 72, color: palette.ink900, ...font('400') },
  button: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingVertical: spacing.lg, alignItems: 'center', ...elevation.brandGlow },
});
