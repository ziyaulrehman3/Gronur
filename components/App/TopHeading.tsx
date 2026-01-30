import { appScreenTopHeading } from "@/constants/appScreenTopHeading";
import { typography } from "@/constants/theme";
import { router } from "expo-router";
import { Search } from "lucide-react-native";
import { useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

type TopHeadingKeys = keyof typeof appScreenTopHeading;

const { width } = Dimensions.get("window");

export const TopHeading = ({ screen }: { screen: TopHeadingKeys }) => {
  const searchContainerWidth = useSharedValue<number>(width * 0.2);
  const [isInputVisible, setInputVisible] = useState<boolean>(false);
  const searchInputRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const handelSearchClick = () => {
    router.push("/(stack)/searchItems");
  };

  return (
    <View style={style.container}>
      <Text style={style.mainText}>{appScreenTopHeading[screen].title}</Text>
      <Animated.View
        style={[style.searchContainer, { width: searchContainerWidth }]}>
        <Pressable onPress={handelSearchClick} style={style.searchPressable}>
          <Search color={typography.primaryColor.color} size={36} />
        </Pressable>
      </Animated.View>
    </View>
  );
};

export const TopHeadingWithButton = ({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) => {
  const handelSellAll = () => {
    router.push({
      pathname: "/(stack)/category",
      params: {
        heading: heading,
      },
    });
  };

  const Heading = heading
    .split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1));
  return (
    <View style={style.TopHeadingWithButtonContainer}>
      <Text style={style.TopHeadingWithButtonHeading}>
        Popular {Heading.join(" ")}
      </Text>
      <Pressable onPress={handelSellAll}>
        <Text style={style.TopHeadingWithButtonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 90,
  },
  mainText: {
    fontSize: 36,
    fontWeight: "bold",
    width: "80%",
    color: typography.primaryColor.color,
  },
  searchContainer: {
    borderWidth: 2,
    borderColor: typography.secondaryColor.color,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    backgroundColor: "white",
  },
  searchInput: {
    width: "75%",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: typography.secondaryColor.color,
    padding: 12,
    paddingHorizontal: 8,
    fontSize: 18,
    height: "100%",
  },
  searchPressable: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-around",
    alignItems: "center",
  },
  TopHeadingWithButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TopHeadingWithButtonHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: typography.primaryColor.color,
  },
  TopHeadingWithButtonText: {
    color: typography.secondaryColor.color,
    fontSize: 18,
  },
});
