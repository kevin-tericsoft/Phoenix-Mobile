import { router, Stack } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText, GradientHeader, PressableScale } from '@/components/ui';
import { useSubmitFeedback } from '@/features/feedback/queries';
import { elevation, font, palette, radius, spacing } from '@/theme';

export default function FeedbackScreen() {
  const submit = useSubmitFeedback();
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  async function onSubmit() {
    if (text.trim().length < 3) return;
    await submit.mutateAsync(text.trim());
    setDone(true);
  }

  if (done) {
    return (
      <SafeAreaView style={styles.center}>
        <AppText style={{ fontSize: 56 }}>🎉</AppText>
        <AppText variant="title" style={{ textAlign: 'center' }}>Thank you!</AppText>
        <AppText variant="body" color={palette.ink400} style={{ textAlign: 'center' }}>
          Your feedback helps us improve.
        </AppText>
        <PressableScale onPress={() => router.back()} style={styles.button}>
          <AppText variant="h3" color={palette.white}>Done</AppText>
        </PressableScale>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.root}>
      <Stack.Screen options={{ headerShown: false }} />
      <GradientHeader>
        <AppText variant="display" color={palette.white}>Feedback</AppText>
        <AppText variant="body" color="#DCEBFF">Tell us what you think</AppText>
      </GradientHeader>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.body}>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Share your thoughts, suggestions or issues…"
              placeholderTextColor={palette.ink300}
              value={text}
              onChangeText={setText}
              multiline
              autoFocus
            />
          </View>
          <PressableScale onPress={onSubmit} disabled={text.trim().length < 3 || submit.isPending} style={[styles.button, (text.trim().length < 3 || submit.isPending) && { opacity: 0.5 }]}>
            {submit.isPending ? <ActivityIndicator color={palette.white} /> : <AppText variant="h3" color={palette.white}>Submit feedback</AppText>}
          </PressableScale>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.canvas },
  flex: { flex: 1 },
  body: { padding: spacing.xl, gap: spacing.lg },
  center: { flex: 1, backgroundColor: palette.canvas, alignItems: 'center', justifyContent: 'center', gap: spacing.md, padding: spacing.xl },
  card: { backgroundColor: palette.surface, borderRadius: radius.lg, padding: spacing.lg, ...elevation.card },
  input: { fontSize: 16, minHeight: 140, color: palette.ink900, ...font('400'), textAlignVertical: 'top' },
  button: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingVertical: spacing.lg, alignItems: 'center', ...elevation.brandGlow, paddingHorizontal: spacing.xxl },
});
