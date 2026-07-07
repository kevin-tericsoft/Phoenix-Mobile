import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { useUnreadCount } from '@/features/notifications/queries';
import { fontFamily, palette } from '@/theme';

/**
 * Authenticated tab bar — Aurora-branded: brand-blue active tint, Inter labels, Ionicons glyphs.
 * The notifications tab shows a live unread badge from TanStack Query.
 */
export default function AppLayout() {
  const unread = useUnreadCount();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.brand500,
        tabBarInactiveTintColor: palette.ink400,
        tabBarLabelStyle: { fontFamily: fontFamily.medium, fontSize: 11 },
        tabBarStyle: { borderTopColor: palette.ink100, backgroundColor: palette.surface },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={color} /> }} />
      <Tabs.Screen name="amenities" options={{ title: 'Amenities', tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'business' : 'business-outline'} size={22} color={color} /> }} />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Alerts',
          tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={22} color={color} />,
          tabBarBadge: unread.data && unread.data > 0 ? unread.data : undefined,
        }}
      />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? 'person' : 'person-outline'} size={22} color={color} /> }} />
      {/* Community moves to a Home tile to keep the tab bar at 4. */}
      <Tabs.Screen name="walls" options={{ href: null }} />
      {/* Routes reachable from the Home hub, hidden from the tab bar (href: null). */}
      <Tabs.Screen name="events" options={{ href: null }} />
      <Tabs.Screen name="polls" options={{ href: null }} />
      <Tabs.Screen name="visitors" options={{ href: null }} />
      <Tabs.Screen name="parcels" options={{ href: null }} />
      <Tabs.Screen name="gate" options={{ href: null }} />
      <Tabs.Screen name="feedback" options={{ href: null }} />
    </Tabs>
  );
}
