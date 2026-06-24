import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { BlurView } from 'expo-blur';
import type { ReactNode } from 'react';
import { Platform, StyleSheet, View, type ViewStyle } from 'react-native';

import { palette, radius } from '@/theme';

/**
 * One frosted surface, three renderers — so glass looks native on every platform:
 *   • iOS 26+   → expo-glass-effect GlassView (real Liquid Glass)
 *   • Android / older iOS → expo-blur BlurView (cross-platform frost)
 *   • anything else / blur disabled → a translucent tinted View
 *
 * This is the cross-platform contract the user asked for: keep the iOS-native glass, but
 * never let Android fall back to something flat. Callers just use <GlassSurface>.
 */
type Props = {
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  /** 'light' frosts toward white; 'brand' adds a faint azure tint. */
  tone?: 'light' | 'brand' | 'dark';
  intensity?: number;
  borderRadius?: number;
};

const liquidGlass = Platform.OS === 'ios' && isLiquidGlassAvailable();

export function GlassSurface({
  children,
  style,
  tone = 'light',
  intensity = 40,
  borderRadius = radius.lg,
}: Props) {
  const tint =
    tone === 'brand' ? palette.brand500 : tone === 'dark' ? palette.ink900 : palette.white;

  if (liquidGlass) {
    return (
      <GlassView
        style={[{ borderRadius, overflow: 'hidden' }, style]}
        glassEffectStyle="regular"
        tintColor={tone === 'brand' ? `${palette.brand500}26` : undefined}
        isInteractive
      >
        {children}
      </GlassView>
    );
  }

  // Cross-platform frost (incl. Android) via expo-blur, with a tint wash for depth.
  return (
    <BlurView
      intensity={intensity}
      tint={tone === 'dark' ? 'dark' : 'light'}
      experimentalBlurMethod="dimezisBlurView" // enables real blur on Android
      style={[{ borderRadius, overflow: 'hidden' }, style]}
    >
      <View style={[StyleSheet.absoluteFill, { backgroundColor: tint + '1F' }]} />
      {children}
    </BlurView>
  );
}
