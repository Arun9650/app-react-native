import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search-outline' : 'search-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sport"
        options={{
          title: 'sport',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'trophy-outline' : 'trophy-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'portfolio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag-handle-outline' : 'bag-handle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'wallet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'wallet-outline' : 'wallet-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
