import React from "react";
import { Tabs } from "expo-router";
import { Home, BarChart2, Settings, Server, FileText } from "lucide-react-native";
import Colors from "@/constants/colors";
import { useLanguageStore } from "@/store/languageStore";

export default function TabLayout() {
  const { translations } = useLanguageStore();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.inactive,
        tabBarStyle: {
          borderTopColor: Colors.border,
          backgroundColor: Colors.background,
        },
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: translations.tabs.dashboard,
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: translations.tabs.analytics,
          tabBarIcon: ({ color }) => <BarChart2 size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: translations.tabs.reports,
          tabBarIcon: ({ color }) => <FileText size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: translations.tabs.settings,
          tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="test-backend"
        options={{
          title: "Backend Test",
          tabBarIcon: ({ color }) => <Server size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
