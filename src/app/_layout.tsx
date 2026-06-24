import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider, useAuth } from '@/features/auth/auth-context';
import { queryClient } from '@/lib/query';
import { palette, useAuroraFonts } from '@/theme';

/**
 * Auth-gated navigator. `Stack.Protected guard={...}` (Expo Router SDK 56) only keeps the
 * matching group accessible, so when `status` flips the router redirects to the anchor of
 * the other group — no manual navigation.push on login/logout. This is the file-based
 * equivalent of a Next.js middleware redirect, driven by client auth state.
 */
function RootNavigator() {
  const { status } = useAuth();

  // While we read tokens from the keychain, hold on a neutral splash (no login flicker).
  if (status === 'loading') {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={status === 'authenticated'}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>
      <Stack.Protected guard={status === 'unauthenticated'}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  const fontsLoaded = useAuroraFonts();
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.canvas }}>
        <ActivityIndicator color={palette.brand500} />
      </View>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <RootNavigator />
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
