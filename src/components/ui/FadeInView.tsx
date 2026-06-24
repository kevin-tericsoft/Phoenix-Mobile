import type { ReactNode } from 'react';
import { type ViewStyle } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { motion } from '@/theme';

/**
 * Content that fades + slides up on mount. Pass `index` to stagger a list of items so they
 * cascade in (a small touch that makes screens feel composed rather than popping in at once).
 * Uses Reanimated's entering animations — declarative, UI-thread, no manual values.
 */
export function FadeInView({
  children,
  index = 0,
  delay = 0,
  style,
}: {
  children: ReactNode;
  index?: number;
  delay?: number;
  style?: ViewStyle | ViewStyle[];
}) {
  return (
    <Animated.View
      entering={FadeInDown.duration(motion.durationMed)
        .delay(delay + index * 70)
        .springify()
        .damping(18)}
      style={style}
    >
      {children}
    </Animated.View>
  );
}
