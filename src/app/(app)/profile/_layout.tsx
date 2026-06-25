import { Stack } from 'expo-router';

import { fontFamily, palette } from '@/theme';

export default function ProfileLayout() {
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
      <Stack.Screen name="virtual-id" options={{ title: 'Digital ID' }} />
      <Stack.Screen name="delete-account" options={{ title: 'Delete account' }} />
    </Stack>
  );
}
