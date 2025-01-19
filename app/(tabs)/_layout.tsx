import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1dc468",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="student"
        options={{
          title: "STUDENT",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="id-card" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scholarships"
        options={{
          title: "SCHOLARSHIPS",
          tabBarIcon: ({ color }) => (
            <Ionicons name="school" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="school"
        options={{
          title: "SCHOOL",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="school" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
