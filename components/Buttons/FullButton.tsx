import { typography } from "@/constants/theme";
import { Search, Settings2 } from "lucide-react-native";
import { memo } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export function FullButton({
  text,
  nextStep,
  mode = "light",
}: {
  text: string;
  nextStep: () => void;
  mode: string;
}) {
  return (
    <Pressable
      style={[
        style.fullButton,
        {
          backgroundColor:
            mode == "light" ? "white" : typography.primaryColor.color,
        },
      ]}
      onPress={nextStep}>
      <Text
        style={[
          style.textMedium,
          { color: mode == "light" ? typography.primaryColor.color : "white" },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
}

type SocialIconType = {
  google: ImageSourcePropType;
  apple: ImageSourcePropType;
};

const SocialIcons: SocialIconType = {
  google: require("@/assets/images/google-logo.png"),
  apple: require("@/assets/images/apple-logo.png"),
} as const;

export function IconFullButton({
  type,
  nextStep,
}: {
  type: keyof typeof SocialIcons;
  nextStep: () => void;
}) {
  return (
    <Pressable
      style={[
        style.fullButton,
        {
          backgroundColor: "white",
          flexDirection: "row",
          gap: 6,
        },
      ]}
      onPress={nextStep}>
      <Image
        source={SocialIcons[type]}
        resizeMode="contain"
        style={{ width: 18, height: 18 }}
      />
      <Text
        style={[style.textMedium, { color: typography.secondaryColor.color }]}>
        {`Continue with ${type == "google" ? "Google" : "Apple"}`}
      </Text>
    </Pressable>
  );
}

export const SearchButtonInput = memo(() => {
  return (
    <View style={[style.fullButton, style.searchButton]}>
      <Search color={typography.primaryColor.color} size={28} />
      <TextInput style={[style.searchButtonInput]} />
      <Settings2 color={typography.primaryColor.color} size={28} />
    </View>
  );
});

const style = StyleSheet.create({
  fullButton: {
    height: 50,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textMedium: {
    fontSize: 20,
    fontWeight: "semibold",
  },
  searchButton: {
    marginHorizontal: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    marginBottom: 20,
  },
  searchButtonInput: {
    flex: 1,
    height: "100%",
    fontSize: 18,
  },
});
