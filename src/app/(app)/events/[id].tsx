import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
import { useEventDetail, useToggleInterest } from '@/features/events/queries';
import { elevation, palette, radius, spacing } from '@/theme';

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString(undefined, {
    weekday: 'long', month: 'long', day: 'numeric',
  });
}

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const detail = useEventDetail(id);
  const toggle = useToggleInterest();

  if (detail.isLoading) return <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xxl }} />;
  if (!detail.data) return <AppText variant="body" color={palette.ink300} style={styles.empty}>Not found.</AppText>;
  const e = detail.data;

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <View>
        <AppText variant="caption" color={palette.brand500} style={{ letterSpacing: 0.5 }}>{e.category.toUpperCase()}</AppText>
        <AppText variant="title">{e.name}</AppText>
        <View style={styles.metaCard}>
          <Meta label="When" value={`${formatDate(e.event_date)} · ${e.start_time.slice(0, 5)}`} />
          <Meta label="Duration" value={`${e.duration_minutes} min`} />
          <Meta label="Interested" value={`${e.interested_count}`} />
        </View>
        <PressableScale
          disabled={toggle.isPending}
          onPress={() => toggle.mutate({ eventId: e.id, interested: !e.i_am_interested })}
          style={[styles.cta, e.i_am_interested ? styles.ctaOn : styles.ctaOff]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.xs }}>
            {e.i_am_interested ? <Ionicons name="checkmark" size={18} color={palette.white} /> : null}
            <AppText variant="h3" color={e.i_am_interested ? palette.white : palette.brand500}>
              {e.i_am_interested ? "You're interested" : "I'm interested"}
            </AppText>
          </View>
        </PressableScale>
      </View>

      <View>
        <Section title="About">
          <AppText variant="body" color={palette.ink700}>{e.description}</AppText>
          {e.agenda ? <><AppText variant="h3" style={{ marginTop: spacing.md }}>Agenda</AppText><AppText variant="body" color={palette.ink400}>{e.agenda}</AppText></> : null}
        </Section>
      </View>

      {e.performers.length > 0 ? (
        <View>
          <Section title="Performers">
            {e.performers.map((p) => (
              <View key={p.id} style={styles.performer}>
                <View style={styles.avatar}><AppText color={palette.white} variant="h3">{p.name.charAt(0)}</AppText></View>
                <View style={{ flex: 1 }}>
                  <AppText variant="h3">{p.name}</AppText>
                  <AppText variant="caption" color={palette.ink400}>{p.bio}</AppText>
                </View>
              </View>
            ))}
          </Section>
        </View>
      ) : null}

      {e.faqs.length > 0 ? (
        <View>
          <Section title="FAQs">
            {e.faqs.map((f) => (
              <View key={f.id} style={{ gap: 2, marginBottom: spacing.sm }}>
                <AppText variant="h3">{f.question}</AppText>
                <AppText variant="body" color={palette.ink400}>{f.answer}</AppText>
              </View>
            ))}
          </Section>
        </View>
      ) : null}

      {e.terms_and_conditions ? (
        <View>
          <Section title="Terms & conditions">
            <AppText variant="caption" color={palette.ink400}>{e.terms_and_conditions}</AppText>
          </Section>
        </View>
      ) : null}
    </ScrollView>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metaRow}>
      <AppText variant="body" color={palette.ink400}>{label}</AppText>
      <AppText variant="h3">{value}</AppText>
    </View>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <AppText variant="h2">{title}</AppText>
      <View style={styles.sectionCard}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  content: { padding: spacing.xl, gap: spacing.lg },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
  metaCard: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.sm, marginTop: spacing.md, ...elevation.card },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between' },
  cta: { borderRadius: radius.md, paddingVertical: spacing.lg, alignItems: 'center', marginTop: spacing.md, borderWidth: 1.5, borderColor: palette.brand500 },
  ctaOn: { backgroundColor: palette.brand500 },
  ctaOff: { backgroundColor: palette.surface },
  section: { gap: spacing.sm },
  sectionCard: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, gap: spacing.xs, ...elevation.card },
  performer: { flexDirection: 'row', gap: spacing.md, alignItems: 'center', marginBottom: spacing.sm },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: palette.brand500, alignItems: 'center', justifyContent: 'center' },
});
