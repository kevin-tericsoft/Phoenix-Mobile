import { Stack } from 'expo-router';

import { fontFamily, palette } from '@/theme';

/** Branded native stack: white-on-brand header, Sora title. List → detail push. */
export default function AmenitiesLayout() {
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
      <Stack.Screen name="index" options={{ title: 'Amenities' }} />
      <Stack.Screen name="[id]" options={{ title: 'Amenity' }} />
    </Stack>
  );
}
