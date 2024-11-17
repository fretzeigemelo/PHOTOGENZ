import { View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30, 
          height: 30, 
          tintColor: color,
        }}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#133E87', 
        tabBarInactiveTintColor: '#133E87', 
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.home}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorite',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.favorites}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="videos"
        options={{
          title: 'Video',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.videos}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout