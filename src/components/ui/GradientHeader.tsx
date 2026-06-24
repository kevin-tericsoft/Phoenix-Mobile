import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { gradients, radius, spacing } from '@/theme';

/**
 * The Aurora signature: a brand-gradient header that bleeds under the status bar and curves
 * into the content below. Optional decorative blobs add depth. Children render on top
 * (greeting, glass stat cards, etc.).
 */
export function GradientHeader({
  children,
  style,
  rounded = true,
}: {
  children?: ReactNode;
  style?: ViewStyle;
  rounded?: boolean;
}) {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={gradients.hero}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.header,
        { paddingTop: insets.top + spacing.md },
        rounded && styles.rounded,
        style,
      ]}
    >
      {/* soft light blobs for depth */}
      <View style={[styles.blob, styles.blobTop]} />
      <View style={[styles.blob, styles.blobBottom]} />
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    overflow: 'hidden',
  },
  rounded: { borderBottomLeftRadius: radius.xl, borderBottomRightRadius: radius.xl },
  blob: { position: 'absolute', borderRadius: 999, backgroundColor: '#FFFFFF' },
  blobTop: { width: 180, height: 180, top: -70, right: -50, opacity: 0.12 },
  blobBottom: { width: 140, height: 140, bottom: -60, left: -40, opacity: 0.08 },
});
