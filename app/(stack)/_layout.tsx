import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="category" />
      <Stack.Screen name="productDetails" />
      <Stack.Screen name="itemSearchContainer" />
    </Stack>
  );
}
