import { Stack } from 'expo-router';

import { fontFamily, palette } from '@/theme';

export default function VisitorsLayout() {
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
      <Stack.Screen name="index" options={{ title: 'My Visitors' }} />
      <Stack.Screen name="invite" options={{ title: 'Invite Visitor', presentation: 'modal' }} />
    </Stack>
  );
}
