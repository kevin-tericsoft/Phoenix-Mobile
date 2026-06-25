import { Stack } from 'expo-router';

import { fontFamily, palette } from '@/theme';

export default function ParcelsLayout() {
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
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="new" options={{ title: 'Expect a parcel', presentation: 'modal' }} />
    </Stack>
  );
}
