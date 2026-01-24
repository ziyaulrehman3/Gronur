import { TopHeading } from "@/components/App/TopHeading";
import { typography } from "@/constants/theme";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
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
            },
          ]}>
          <TopHeading screen={"home"} />
          <Text>Home Screen</Text>
        </SafeAreaView>
      </View>
    </View>
  );
}
