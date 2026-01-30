import { FilterModal } from "@/components/App/FilterModal";
import { HeaderWithBorder } from "@/components/App/HeaderWIthBack";
import { ItemScreen } from "@/components/App/Item";
import { SearchButtonInput } from "@/components/Buttons/FullButton";
import { typography } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchItems() {
  return (
    <View style={[typography.mainScreen, style.mainScreen]}>
      <SafeAreaView edges={["top"]} style={typography.upperRoundSafeView}>
        <HeaderWithBorder screen={"Search"} />
        <SearchButtonInput />

        <View style={typography.upperRoundScreen}>
          <ItemScreen screen="search" category="all" />
        </View>
        <FilterModal />
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  mainScreen: {
    backgroundColor: typography.primaryColor.color,
  },
});
