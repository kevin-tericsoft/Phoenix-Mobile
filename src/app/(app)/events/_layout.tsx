import { Stack } from 'expo-router';

import { fontFamily, palette } from '@/theme';

export default function EventsLayout() {
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
      <Stack.Screen name="index" options={{ title: 'Events' }} />
      <Stack.Screen name="[id]" options={{ title: 'Event' }} />
    </Stack>
  );
}
