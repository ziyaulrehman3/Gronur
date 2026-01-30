import { CategortBar } from "@/components/App/CategoryBar";
import { TopHeading } from "@/components/App/TopHeading";
import { SwapItem } from "@/components/Buttons/SwapItem";
import { typography } from "@/constants/theme";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Order() {
  const [category, setCategory] = useState("All");
  return (
    <View
      style={[
        typography.mainScreen,
        { backgroundColor: typography.primaryColor.color },
      ]}>
      <View style={typography.mainScreenBannerStyle}>
        <SafeAreaView style={typography.mainScreenSafeView}>
          <TopHeading screen="orders" />
          <CategortBar
            category={category}
            setCategory={setCategory}
            type="orders"
          />
          <SwapItem />

          <Text>Order Screen</Text>
        </SafeAreaView>
      </View>
    </View>
  );
}
