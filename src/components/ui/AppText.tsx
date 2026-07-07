import { Text, type TextProps, type TextStyle } from 'react-native';

import { font, palette, type } from '@/theme';

type Variant = keyof typeof type;

/**
 * The one text component. Applies the Inter family + a type-scale variant so typography is
 * consistent everywhere (no ad-hoc fontSize/weight per screen). Web analogue: a <Text as=...>
 * design-system primitive.
 */
export function AppText({
  variant = 'body',
  color = palette.ink900,
  style,
  ...rest
}: TextProps & { variant?: Variant; color?: string }) {
  const t = type[variant];
  const weight = String(t.fontWeight) as '400' | '500' | '600' | '700';
  return (
    <Text
      style={[
        { fontSize: t.fontSize, lineHeight: t.lineHeight, color } as TextStyle,
        font(weight),
        style,
      ]}
      {...rest}
    />
  );
}
