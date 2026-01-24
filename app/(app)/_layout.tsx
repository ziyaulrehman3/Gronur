import { typography } from "@/constants/theme";
import { Tabs } from "expo-router";
import { House, LayoutGrid, ShoppingCart, Store } from "lucide-react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: typography.secondaryColor.color,
        tabBarStyle: {
          backgroundColor: typography.primaryColor.color,
          height: 75,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="(order)"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => <Store color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="(cart)"
        options={{
          title: "My Cart",
          tabBarIcon: ({ color }) => <ShoppingCart color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="(more)"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => <LayoutGrid color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
