/**
 * Aurora design tokens — the single source of design truth.
 *
 * Built on the Converz brand palette (old app's Colors.ts), elevated into a full scale:
 * brand azure #0078F3 expanded into tints/shades, plus neutrals, spacing, radii, type, and
 * elevation. Screens never hard-code hex/px — they read from here, so the whole look can be
 * retuned in one file. (Web analogue: your Tailwind config / CSS custom properties.)
 */

export const palette = {
  // Brand azure (from #0078F3) as a tonal ramp.
  brand50: '#EAF3FE',
  brand100: '#D4E7FD',
  brand200: '#A9CFFB',
  brand300: '#7DB6F9',
  brand400: '#5d9eff', // old `info`
  brand500: '#0078F3', // old `primary`
  brand600: '#0063CC',
  brand700: '#004E9F',
  brand800: '#063B73', // deep, for gradient end / on-dark
  brand900: '#0A2A4D',

  // Ink / neutrals (from accent #313240, contextText #304E6A).
  ink900: '#1A1F2B',
  ink700: '#313240', // old `accent`
  ink500: '#304E6A', // old `contextText` — muted navy
  ink400: '#5A636B', // old `textInfo`
  ink300: '#8E959E',
  ink200: '#C3C9D2',
  ink100: '#E6E9EF',

  surface: '#FFFFFF',
  canvas: '#F4F7FB', // cool off-white (lifted from old #F0F0F0)
  canvasTint: '#EAF1FB', // faint brand wash behind glass

  success: '#2BCD31', // old `success`
  warning: '#F5A623',
  danger: '#E5484D',

  white: '#FFFFFF',
  black: '#000000',
} as const;

/** Aurora gradients (brand-forward). Use with expo-linear-gradient. */
export const gradients = {
  hero: ['#0A63E0', '#0078F3', '#5d9eff'] as const, // signature header
  heroDeep: ['#063B73', '#0078F3'] as const,
  tileBrand: ['#0078F3', '#0063CC'] as const,
  success: ['#2BCD31', '#1BA84F'] as const,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radius = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 28,
  pill: 999,
} as const;

/** Type scale. fontFamily is filled in by the font loader (Sora) at runtime via `font()`. */
export const type = {
  display: { fontSize: 30, lineHeight: 36, fontWeight: '700' as const },
  title: { fontSize: 24, lineHeight: 30, fontWeight: '700' as const },
  h2: { fontSize: 19, lineHeight: 25, fontWeight: '700' as const },
  h3: { fontSize: 16, lineHeight: 22, fontWeight: '600' as const },
  body: { fontSize: 15, lineHeight: 22, fontWeight: '400' as const },
  label: { fontSize: 13, lineHeight: 18, fontWeight: '600' as const },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '500' as const },
} as const;

/** Platform-aware elevation presets (iOS shadow + Android elevation). */
export const elevation = {
  card: {
    shadowColor: '#0A2A4D',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  raised: {
    shadowColor: '#0A2A4D',
    shadowOpacity: 0.14,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  brandGlow: {
    shadowColor: '#0078F3',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
} as const;

export const motion = {
  // Spring preset for the press-scale tactile feedback (PressableScale).
  springSnappy: { damping: 18, stiffness: 220, mass: 0.7 },
  pressScale: 0.96,
} as const;
