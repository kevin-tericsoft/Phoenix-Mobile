import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { LogLevel, type NotificationClickEvent, OneSignal } from 'react-native-onesignal';

import { useAuth } from '@/features/auth/auth-context';
import { useMe } from '@/features/auth/queries';
import { ONESIGNAL_APP_ID } from '@/lib/config';

/**
 * No-UI side-effect component, same role as the old app's OneSignalComponent: initializes
 * the SDK once, and links/unlinks the OneSignal external ID to auth state so the backend
 * can address this device via `phoenix_<user.id>` without ever storing a push token itself
 * (app/core/onesignal.py sends to that alias directly via OneSignal's REST API).
 */
export function PushNotifications() {
  const { status } = useAuth();
  const { data: me } = useMe(status === 'authenticated');

  useEffect(() => {
    if (!ONESIGNAL_APP_ID) {
      console.warn('EXPO_PUBLIC_ONESIGNAL_APP_ID is not set — push notifications disabled.');
      return;
    }
    OneSignal.initialize(ONESIGNAL_APP_ID);
    OneSignal.Debug.setLogLevel(__DEV__ ? LogLevel.Verbose : LogLevel.None);
    OneSignal.Notifications.requestPermission(true);

    // Backend sets the OneSignal "Launch URL" (app_url) to a phoenixmobile:// deep link;
    // the click event surfaces it back to us here for in-app navigation.
    const onClick = (event: NotificationClickEvent) => {
      const url = event.result?.url;
      if (!url) return;
      const { path } = Linking.parse(url);
      if (path) router.push(`/${path}` as never);
    };
    OneSignal.Notifications.addEventListener('click', onClick);
    return () => OneSignal.Notifications.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!ONESIGNAL_APP_ID) return;
    if (status === 'authenticated' && me?.id) {
      OneSignal.login(`phoenix_${me.id}`);
    } else if (status === 'unauthenticated') {
      OneSignal.logout();
    }
  }, [status, me?.id]);

  return null;
}
