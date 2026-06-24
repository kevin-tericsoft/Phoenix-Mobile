import { Tabs } from 'expo-router';
import { Text } from 'react-native';

import { useUnreadCount } from '@/features/notifications/queries';
import { fontFamily, palette } from '@/theme';

/** Tab icon as an emoji glyph (tinted via opacity for inactive). */
function TabGlyph({ glyph, focused }: { glyph: string; focused: boolean }) {
  return <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.45 }}>{glyph}</Text>;
}

/**
 * Authenticated tab bar — Aurora-branded: brand-blue active tint, Sora labels, emoji glyphs.
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
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ focused }) => <TabGlyph glyph="🏠" focused={focused} /> }} />
      <Tabs.Screen name="amenities" options={{ title: 'Amenities', tabBarIcon: ({ focused }) => <TabGlyph glyph="🏢" focused={focused} /> }} />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Alerts',
          tabBarIcon: ({ focused }) => <TabGlyph glyph="🔔" focused={focused} />,
          tabBarBadge: unread.data && unread.data > 0 ? unread.data : undefined,
        }}
      />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ focused }) => <TabGlyph glyph="👤" focused={focused} /> }} />
      {/* Community moves to a Home tile to keep the tab bar at 4. */}
      <Tabs.Screen name="walls" options={{ href: null }} />
      {/* Routes reachable from the Home hub, hidden from the tab bar (href: null). */}
      <Tabs.Screen name="events" options={{ href: null }} />
      <Tabs.Screen name="polls" options={{ href: null }} />
      <Tabs.Screen name="visitors" options={{ href: null }} />
      <Tabs.Screen name="parcels" options={{ href: null }} />
    </Tabs>
  );
}
