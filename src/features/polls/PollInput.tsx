import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText, PressableScale } from '@/components/ui';
import { palette, radius, spacing } from '@/theme';
import type { MyPoll } from './queries';

/**
 * Renders the correct input for a poll's answer_type, mirroring the old app's four poll
 * components (radio / checkbox / stars|emoji rating / slider). All of them ultimately resolve
 * to a set of poll_option ids, which is what the backend vote endpoint accepts — so the
 * control varies but the submit contract is uniform.
 */
const EMOJIS = ['😡', '🙁', '😐', '🙂', '😍'];

export function PollInput({
  poll,
  onVote,
  pending,
}: {
  poll: MyPoll;
  onVote: (optionIds: string[]) => void;
  pending: boolean;
}) {
  const sub = poll.answer_sub_type;

  if (poll.answer_type === 'single_select') {
    return <RadioInput poll={poll} onVote={onVote} pending={pending} />;
  }
  if (poll.answer_type === 'multi_select') {
    return <CheckboxInput poll={poll} onVote={onVote} pending={pending} />;
  }
  if (poll.answer_type === 'rating') {
    return <RatingInput poll={poll} onVote={onVote} pending={pending} emoji={sub === 'emoji'} />;
  }
  if (poll.answer_type === 'slider') {
    return <SliderInput poll={poll} onVote={onVote} pending={pending} />;
  }
  return <RadioInput poll={poll} onVote={onVote} pending={pending} />;
}

function RadioInput({ poll, onVote, pending }: any) {
  const selected = new Set(poll.my_option_ids);
  return (
    <View style={{ gap: spacing.sm }}>
      {poll.options.map((opt: any) => {
        const isSel = selected.has(opt.id);
        return (
          <PressableScale key={opt.id} disabled={pending} onPress={() => onVote([opt.id])} style={[styles.option, isSel && styles.optionSel]}>
            <View style={[styles.radio, isSel && styles.radioSel]} />
            <AppText variant="h3" color={isSel ? palette.brand600 : palette.ink700}>{opt.title}</AppText>
          </PressableScale>
        );
      })}
    </View>
  );
}

function CheckboxInput({ poll, onVote, pending }: any) {
  const [picked, setPicked] = useState<Set<string>>(new Set(poll.my_option_ids));
  const toggle = (id: string) => {
    const next = new Set(picked);
    next.has(id) ? next.delete(id) : next.add(id);
    setPicked(next);
  };
  return (
    <View style={{ gap: spacing.sm }}>
      {poll.options.map((opt: any) => {
        const isSel = picked.has(opt.id);
        return (
          <PressableScale key={opt.id} haptic={false} disabled={pending} onPress={() => toggle(opt.id)} style={[styles.option, isSel && styles.optionSel]}>
            <View style={[styles.checkbox, isSel && styles.checkboxSel]}>
              {isSel ? <AppText color={palette.white} style={{ fontSize: 13 }}>✓</AppText> : null}
            </View>
            <AppText variant="h3" color={isSel ? palette.brand600 : palette.ink700}>{opt.title}</AppText>
          </PressableScale>
        );
      })}
      <PressableScale disabled={pending || picked.size === 0} onPress={() => onVote([...picked])} style={[styles.submit, (pending || picked.size === 0) && { opacity: 0.5 }]}>
        <AppText variant="h3" color={palette.white}>Submit{picked.size > 0 ? ` (${picked.size})` : ''}</AppText>
      </PressableScale>
    </View>
  );
}

function RatingInput({ poll, onVote, pending, emoji }: any) {
  // Options are the scale points, ordered. Selecting one votes immediately.
  const opts = [...poll.options].sort((a, b) => a.sort_order - b.sort_order);
  const myId = poll.my_option_ids[0];
  const myIdx = opts.findIndex((o) => o.id === myId);
  return (
    <View style={styles.ratingRow}>
      {opts.map((opt, i) => {
        const active = emoji ? opt.id === myId : myIdx >= 0 && i <= myIdx;
        return (
          <PressableScale key={opt.id} disabled={pending} onPress={() => onVote([opt.id])}>
            <AppText style={[styles.ratingGlyph, !active && styles.ratingDim]}>
              {emoji ? (EMOJIS[i] ?? '⭐') : '★'}
            </AppText>
          </PressableScale>
        );
      })}
    </View>
  );
}

function SliderInput({ poll, onVote, pending }: any) {
  const opts = [...poll.options].sort((a, b) => a.sort_order - b.sort_order);
  const myIdx = Math.max(0, opts.findIndex((o) => o.id === poll.my_option_ids[0]));
  const [idx, setIdx] = useState(myIdx >= 0 ? myIdx : 0);
  return (
    <View style={{ gap: spacing.sm }}>
      <AppText variant="title" color={palette.brand600} style={{ textAlign: 'center' }}>
        {opts[idx]?.title ?? ''}
      </AppText>
      <Slider
        minimumValue={0}
        maximumValue={opts.length - 1}
        step={1}
        value={idx}
        onValueChange={setIdx}
        minimumTrackTintColor={palette.brand500}
        maximumTrackTintColor={palette.ink200}
        thumbTintColor={palette.brand500}
        disabled={pending}
      />
      <PressableScale disabled={pending} onPress={() => onVote([opts[idx].id])} style={[styles.submit, pending && { opacity: 0.5 }]}>
        <AppText variant="h3" color={palette.white}>Submit</AppText>
      </PressableScale>
    </View>
  );
}

const styles = StyleSheet.create({
  option: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.lg, borderRadius: radius.md, borderWidth: 1.5, borderColor: palette.ink100 },
  optionSel: { borderColor: palette.brand500, backgroundColor: palette.brand50 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: palette.ink200 },
  radioSel: { borderColor: palette.brand500, backgroundColor: palette.brand500 },
  checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: palette.ink200, alignItems: 'center', justifyContent: 'center' },
  checkboxSel: { borderColor: palette.brand500, backgroundColor: palette.brand500 },
  submit: { backgroundColor: palette.brand500, borderRadius: radius.md, paddingVertical: spacing.md, alignItems: 'center', marginTop: spacing.xs },
  ratingRow: { flexDirection: 'row', justifyContent: 'center', gap: spacing.sm, paddingVertical: spacing.sm },
  ratingGlyph: { fontSize: 40, color: palette.warning },
  ratingDim: { opacity: 0.3 },
});
