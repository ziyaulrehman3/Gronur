import { typography } from "@/constants/theme";
import { memo } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

export const ImageRoundContainer = memo(
  ({ image }: { image: ImageSourcePropType }) => {
    console.log(image);
    return (
      <View style={style.mainContainer}>
        <View style={style.subContainer}>
          <Image source={image} resizeMode="contain" style={style.image} />
        </View>
      </View>
    );
  },
);

const style = StyleSheet.create({
  mainContainer: {
    width: "100%",
    aspectRatio: 1,
    overflow: "hidden",
  },
  subContainer: {
    width: "200%",
    height: "200%",
    backgroundColor: typography.backgroundColor.color,
    borderRadius: "100%",
    top: "-100%",
    left: "-50%",
  },
  image: {
    position: "absolute",
    bottom: "-5%",
    left: "32%",
    width: "36%",
  },
});
