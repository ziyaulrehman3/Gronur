import { typography } from "@/constants/theme";
import { RefreshCcw } from "lucide-react-native";
import { memo, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import RangeSlider from "rn-range-slider";
import { FullButton } from "../Buttons/FullButton";
import { CategortBar } from "./CategoryBar";
const recentSearch = [
  "Fresh Fruits",
  "Fresh Vegetable",
  "Fast Food",
  "Cold drinks",
];

export const FilterModal = memo(
  ({
    setFilterOpen,
  }: {
    setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(50);
    const [lowValue, setLowValue] = useState<number>(10);
    const [maxValue, setMaxValue] = useState<number>(1000);

    return (
      <Modal visible={true} transparent animationType="slide">
        <Pressable
          style={style.mainContaienr}
          onPress={() => setFilterOpen(false)}>
          <View style={[typography.upperRoundScreen, style.modalContainer]}>
            <View style={style.headingContaienr}>
              <Text style={typography.headingMD}>Filter</Text>
              <RefreshCcw color={typography.primaryColor.color} size={32} />
            </View>
            <Text style={typography.headingMD}>Price Range</Text>
            <PriceRangeGraph />
            <RangeSlider
              min={1}
              max={2000}
              step={40}
              low={lowValue}
              high={maxValue}
              renderThumb={Thumb}
              renderRail={Rail}
              renderRailSelected={RailSelected}
              onValueChanged={(l: number, h: number) => {
                setLowValue(l);
                setMaxValue(h);
              }}
            />

            <View style={{ gap: 8 }}>
              <Text style={typography.headingMD}>Categories</Text>
              <CategortBar
                category={category}
                setCategory={setCategory}
                type="products"
              />
            </View>

            <View style={{ gap: 8 }}>
              <Text style={typography.headingMD}>Recently Search</Text>
              <View style={style.recentSearchContainer}>
                {recentSearch.map((text, index) => (
                  <Pressable
                    key={index}
                    style={{
                      ...style.itemContainer,
                      backgroundColor:
                        category === text.toLowerCase().split(" ").join("-")
                          ? typography.primaryColor.color
                          : typography.backgroundColor.color,
                    }}
                    onPress={() =>
                      setCategory(text.toLowerCase().split(" ").join("-"))
                    }>
                    <Text
                      key={index}
                      style={{
                        ...style.itemText,
                        color:
                          category === text.toLowerCase().split(" ").join("-")
                            ? "white"
                            : typography.primaryColor.color,
                      }}>
                      {text}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <FullButton
              text="Apply Now"
              nextStep={() => console.log("Apply Now")}
              mode="dark"
            />
          </View>
        </Pressable>
      </Modal>
    );
  },
);

const PriceRangeGraph = memo(() => {
  return (
    <View style={style.rangeContaienr}>
      {Array.from({ length: 15 }).map((_, index) => (
        <View style={[style.rangeItem, { height: index * 8 }]} key={index} />
      ))}
    </View>
  );
});

const Thumb = () => (
  <View
    style={{
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: "#000",
    }}
  />
);

const Rail = () => (
  <View
    style={{
      height: 4,
      backgroundColor: "#ddd",
      flex: 1,
      borderRadius: 2,
    }}
  />
);

const RailSelected = () => (
  <View
    style={{
      height: 4,
      backgroundColor: "#000",
      borderRadius: 2,
    }}
  />
);

const style = StyleSheet.create({
  mainContaienr: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)", // ⭐ important
  },
  modalContainer: {
    height: 600,
    backgroundColor: "white",
    flex: 0,
    padding: 20,
    paddingTop: 30,
    gap: 20,
  },
  itemContainer: {
    borderRadius: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "semibold",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  recentSearchContainer: {
    gap: 8,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headingContaienr: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 10,
    borderColor: typography.backgroundColor.color,
    borderBottomWidth: 1,
  },
  rangeItem: {
    width: 12,
    borderRadius: 20,
    backgroundColor: typography.backgroundColor.color,
  },
  rangeContaienr: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
  },
});
