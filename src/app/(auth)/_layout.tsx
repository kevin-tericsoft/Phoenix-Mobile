import { Stack } from 'expo-router';

// Auth flow stack: sign-in (email) → verify (otp). Headerless; screens draw their own.
export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="verify" />
    </Stack>
  );
}
