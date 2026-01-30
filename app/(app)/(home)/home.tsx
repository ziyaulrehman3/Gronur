import { CategortBar } from "@/components/App/CategoryBar";
import { ItemScreen } from "@/components/App/Item";
import { TopHeading, TopHeadingWithButton } from "@/components/App/TopHeading";
import { typography } from "@/constants/theme";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  const [category, setCategory] = useState("vegitable");

  return (
    <View
      style={[
        {
          ...typography.mainScreen,
          backgroundColor: typography.primaryColor.color,
        },
      ]}>
      <View style={typography.mainScreenBannerStyle}>
        <SafeAreaView
          style={[
            {
              ...typography.mainScreenSafeView,
              flex: 1,
              gap: 12,
            },
          ]}
          edges={["top"]}>
          <TopHeading screen={"home"} />
          <CategortBar
            category={category}
            setCategory={setCategory}
            type="products"
          />
          <TopHeadingWithButton heading={category} text="See all" />

          <ItemScreen screen="home" category={category} />
        </SafeAreaView>
      </View>
    </View>
  );
}
