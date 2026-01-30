import { HeaderWithBorder } from "@/components/App/HeaderWIthBack";
import { ItemScreen } from "@/components/App/Item";
import { typography } from "@/constants/theme";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Category() {
  const { heading } = useLocalSearchParams();
  const screenHeading: string = heading as string;
  return (
    <View
      style={[
        typography.mainScreen,
        { backgroundColor: typography.primaryColor.color },
      ]}>
      <SafeAreaView edges={["top"]} style={typography.upperRoundSafeView}>
        <HeaderWithBorder screen={screenHeading} />

        <View style={typography.upperRoundScreen}>
          <ItemScreen screen="category" category="all" />
        </View>
      </SafeAreaView>
    </View>
  );
}
