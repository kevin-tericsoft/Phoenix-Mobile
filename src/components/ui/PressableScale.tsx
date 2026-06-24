import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Pressable, type PressableProps, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { motion } from '@/theme';

const APressable = Animated.createAnimatedComponent(Pressable);

/**
 * A pressable that springs down on touch (the tactile "give" premium apps have) and fires a
 * light haptic. Reanimated runs the scale on the UI thread, so it stays 60fps even while JS
 * is busy. Web analogue: a :active transform, but physics-based and haptic.
 */
export function PressableScale({
  children,
  style,
  haptic = true,
  onPress,
  ...rest
}: PressableProps & { children: ReactNode; style?: ViewStyle | ViewStyle[]; haptic?: boolean }) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  return (
    <APressable
      onPressIn={() => {
        scale.value = withSpring(motion.pressScale, motion.springSnappy);
      }}
      onPressOut={() => {
        scale.value = withSpring(1, motion.springSnappy);
      }}
      onPress={(e) => {
        if (haptic) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.(e);
      }}
      style={[animatedStyle, style]}
      {...rest}
    >
      {children}
    </APressable>
  );
}
