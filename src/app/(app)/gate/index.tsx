import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TextInput, View } from 'react-native';

import { AppText, FadeInView, PressableScale } from '@/components/ui';
import { GateVisitCard } from '@/features/gate/GateVisitCard';
import { useGateQueue, useLookupVisit, type MyVisit } from '@/features/gate/queries';
import { font, palette, radius, spacing } from '@/theme';

const FILTERS = [
  { label: 'Expected', status: 'approved' },
  { label: 'Pending', status: 'pending' },
  { label: 'Inside', status: 'checked_in' },
  { label: 'All', status: undefined },
];

export default function GateScreen() {
  const [filter, setFilter] = useState<string | undefined>('approved');
  const [code, setCode] = useState('');
  const queue = useGateQueue(filter);
  const lookup = useLookupVisit();
  const [found, setFound] = useState<MyVisit | null>(null);

  async function onLookup() {
    if (code.trim().length < 4) return;
    try {
      const v = await lookup.mutateAsync(code.trim());
      setFound(v);
    } catch {
      setFound(null);
    }
  }

  return (
    <View style={styles.root}>
      {/* code lookup bar */}
      <View style={styles.lookupBar}>
        <TextInput
          style={styles.input}
          placeholder="Enter visit code"
          placeholderTextColor={palette.ink300}
          autoCapitalize="characters"
          value={code}
          onChangeText={(t) => setCode(t.toUpperCase())}
          onSubmitEditing={onLookup}
          returnKeyType="search"
        />
        <PressableScale onPress={onLookup} style={styles.lookupBtn}>
          {lookup.isPending ? <ActivityIndicator color={palette.white} /> : <AppText variant="label" color={palette.white}>Find</AppText>}
        </PressableScale>
        <PressableScale onPress={() => router.push('/gate/scan')} style={styles.scanBtn}>
          <AppText style={{ fontSize: 20 }}>📷</AppText>
        </PressableScale>
      </View>

      {lookup.isError ? (
        <AppText variant="caption" color={palette.danger} style={{ paddingHorizontal: spacing.lg }}>
          No visit found for that code.
        </AppText>
      ) : null}
      {found ? (
        <View style={{ paddingHorizontal: spacing.lg, paddingTop: spacing.sm }}>
          <AppText variant="label" color={palette.ink400} style={{ marginBottom: spacing.xs }}>MATCH</AppText>
          <GateVisitCard visit={found} onChanged={(v) => setFound(v)} />
        </View>
      ) : null}

      {/* filter chips */}
      <View style={styles.filters}>
        {FILTERS.map((f) => (
          <PressableScale
            key={f.label}
            haptic={false}
            onPress={() => setFilter(f.status)}
            style={[styles.chip, filter === f.status && styles.chipActive]}
          >
            <AppText variant="caption" color={filter === f.status ? palette.white : palette.ink500}>
              {f.label}
            </AppText>
          </PressableScale>
        ))}
      </View>

      {queue.isLoading ? (
        <ActivityIndicator color={palette.brand500} style={{ marginTop: spacing.xl }} />
      ) : (
        <FlatList
          data={queue.data ?? []}
          keyExtractor={(v) => v.id}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<AppText variant="body" color={palette.ink300} style={styles.empty}>No visits here.</AppText>}
          renderItem={({ item, index }) => (
            <FadeInView index={index}>
              <GateVisitCard visit={item} />
            </FadeInView>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  lookupBar: { flexDirection: 'row', gap: spacing.sm, padding: spacing.lg, alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: palette.ink100, backgroundColor: palette.surface, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, fontSize: 16, letterSpacing: 2, color: palette.ink900, ...font('600') },
  lookupBtn: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.md, minWidth: 56, alignItems: 'center' },
  scanBtn: { backgroundColor: palette.surface, borderWidth: 1, borderColor: palette.ink100, borderRadius: radius.md, padding: spacing.md },
  filters: { flexDirection: 'row', gap: spacing.sm, paddingHorizontal: spacing.lg, paddingVertical: spacing.sm },
  chip: { paddingHorizontal: spacing.md, paddingVertical: spacing.xs, borderRadius: radius.pill, backgroundColor: palette.surface, borderWidth: 1, borderColor: palette.ink100 },
  chipActive: { backgroundColor: palette.brand500, borderColor: palette.brand500 },
  list: { padding: spacing.lg, gap: spacing.md },
  empty: { textAlign: 'center', marginTop: spacing.xxxl },
});
