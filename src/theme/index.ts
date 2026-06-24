/**
 * Theme entry point. Re-exports tokens + a `font()` helper that maps a weight to the loaded
 * Sora family name. Sora is a geometric, slightly characterful sans — premium without being
 * generic. Loaded in the root layout via useAuroraFonts().
 */
export * from './tokens';

import {
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
  useFonts,
} from '@expo-google-fonts/sora';

export const fontFamily = {
  regular: 'Sora_400Regular',
  medium: 'Sora_500Medium',
  semibold: 'Sora_600SemiBold',
  bold: 'Sora_700Bold',
} as const;

/** Map a numeric/keyword weight to the right Sora family (RN can't synthesize weights for custom fonts). */
export function font(weight: '400' | '500' | '600' | '700' = '400'): { fontFamily: string } {
  const map: Record<string, string> = {
    '400': fontFamily.regular,
    '500': fontFamily.medium,
    '600': fontFamily.semibold,
    '700': fontFamily.bold,
  };
  return { fontFamily: map[weight] ?? fontFamily.regular };
}

/** Load Aurora fonts; call in the root layout and gate render until ready. */
export function useAuroraFonts(): boolean {
  const [loaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });
  return loaded;
}
