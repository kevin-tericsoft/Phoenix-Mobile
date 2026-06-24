import * as SecureStore from 'expo-secure-store';

/**
 * Token persistence backed by the device secure enclave.
 *
 * Why expo-secure-store and NOT AsyncStorage: AsyncStorage is an unencrypted plaintext
 * file (the old app stored its JWT there). Auth tokens belong in the iOS Keychain /
 * Android Keystore, which is exactly what SecureStore wraps. Rule of thumb: anything that
 * grants access — tokens, secrets — goes in SecureStore; everything else (cache, prefs)
 * can use AsyncStorage.
 *
 * Web analogue: AsyncStorage ≈ localStorage; SecureStore has no real browser equivalent
 * (the closest is httpOnly cookies, which the browser guards for you).
 */
const ACCESS_KEY = 'phoenix.access_token';
const REFRESH_KEY = 'phoenix.refresh_token';

export type TokenPair = { accessToken: string; refreshToken: string };

export async function saveTokens({ accessToken, refreshToken }: TokenPair): Promise<void> {
  await Promise.all([
    SecureStore.setItemAsync(ACCESS_KEY, accessToken),
    SecureStore.setItemAsync(REFRESH_KEY, refreshToken),
  ]);
}

export async function loadTokens(): Promise<TokenPair | null> {
  const [accessToken, refreshToken] = await Promise.all([
    SecureStore.getItemAsync(ACCESS_KEY),
    SecureStore.getItemAsync(REFRESH_KEY),
  ]);
  if (!accessToken || !refreshToken) return null;
  return { accessToken, refreshToken };
}

export async function clearTokens(): Promise<void> {
  await Promise.all([
    SecureStore.deleteItemAsync(ACCESS_KEY),
    SecureStore.deleteItemAsync(REFRESH_KEY),
  ]);
}
