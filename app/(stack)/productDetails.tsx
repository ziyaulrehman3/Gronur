import {
  AddToCart,
  DetailsRoundContainer,
} from "@/components/Stack/DetailsContainer";
import { ImageRoundContainer } from "@/components/Stack/ImageContainer";
import { typography } from "@/constants/theme";
import { getItemByIdSelector } from "@/store/custumSelector";
import { productType } from "@/types/product";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  console.log("Get ID", id);

  const item: productType | undefined = useSelector((state) =>
    getItemByIdSelector(state, id),
  );

  console.log("Item", item);
  if (!item) {
    return (
      <View style={typography.mainScreen}>
        <Text style={{ textAlign: "center", marginTop: 50 }}>
          Loading product...
        </Text>
      </View>
    );
  }

  const [qty, setQty] = useState<number>(1);
  return (
    <View style={[typography.mainScreen, style.mainScreen]}>
      <View style={[typography.mainScreenBannerStyle]}>
        <SafeAreaView
          edges={["bottom"]}
          style={[
            typography.mainScreenSafeView,
            { paddingHorizontal: 0, paddingVertical: 0 },
          ]}>
          <ImageRoundContainer image={item?.image} />
          <DetailsRoundContainer qty={qty} setQty={setQty} item={item} />
        </SafeAreaView>
      </View>
      <View
        style={{ height: 90, justifyContent: "center", flexDirection: "row" }}>
        <AddToCart
          id={item.id}
          price={qty * item.price}
          qty={qty}
          unit={item.unit}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainScreen: {
    backgroundColor: typography.primaryColor.color,
  },
});
