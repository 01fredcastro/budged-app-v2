import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "teal",
        tabBarStyle: { height: 65 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: getTabIcon("home-outline"),
        }}
      />
      <Tabs.Screen
        name="budgets"
        options={{
          title: "Budgets",
          tabBarIcon: getTabIcon("wallet-outline"),
        }}
      />
      <Tabs.Screen
        name="analitics"
        options={{
          title: "Analitics",
          tabBarIcon: getTabIcon("pie-chart-outline"),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: getTabIcon("settings-outline"),
        }}
      />
    </Tabs>
  );
}

function getTabIcon(iconName: keyof typeof Ionicons.glyphMap) {
  return function ({ color }: { color: string }) {
    return <Ionicons name={iconName} size={28} color={color} />;
  };
}
