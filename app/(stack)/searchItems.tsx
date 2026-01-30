import { FilterModal } from "@/components/App/FilterModal";
import { HeaderWithBorder } from "@/components/App/HeaderWIthBack";
import { ItemScreen } from "@/components/App/Item";
import { SearchButtonInput } from "@/components/Buttons/FullButton";
import { typography } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchItems() {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  return (
    <View style={[typography.mainScreen, style.mainScreen]}>
      <SafeAreaView edges={["top"]} style={typography.upperRoundSafeView}>
        <HeaderWithBorder screen={"Search"} />
        <SearchButtonInput setFilterOpen={setFilterOpen} />

        <View style={typography.upperRoundScreen}>
          <ItemScreen screen="search" category="all" />
        </View>
        {filterOpen && <FilterModal setFilterOpen={setFilterOpen} />}
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  mainScreen: {
    backgroundColor: typography.primaryColor.color,
  },
});
