/**
 * Theme entry point. Re-exports tokens + a `font()` helper that maps a weight to the loaded
 * Inter family name. Inter is a neutral, formal, highly legible sans — the standard choice
 * for professional software UI. Loaded in the root layout via useAuroraFonts().
 */
export * from './tokens';

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';

export const fontFamily = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

/** Map a numeric/keyword weight to the right Inter family (RN can't synthesize weights for custom fonts). */
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
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  return loaded;
}
