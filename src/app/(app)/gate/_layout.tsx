import { Stack } from 'expo-router';

import { fontFamily, palette } from '@/theme';

export default function GateLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: palette.brand500 },
        headerTintColor: palette.white,
        headerTitleStyle: { fontFamily: fontFamily.semibold, color: palette.white },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: palette.canvas },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Gate — Visitors' }} />
      <Stack.Screen name="scan" options={{ title: 'Scan code', presentation: 'modal' }} />
      <Stack.Screen name="parcels" options={{ title: 'Gate — Parcels' }} />
    </Stack>
  );
}
