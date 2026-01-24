import { authContent } from "@/constants/authContent";
import { typography } from "@/constants/theme";
import { memo } from "react";
import { Text, View } from "react-native";

type AuthScreen = keyof typeof authContent;

export const AuthHeading = memo(
  ({
    screen,
    additionalText = "",
  }: {
    screen: AuthScreen;
    additionalText: string;
  }) => {
    return (
      <View>
        <Text style={[typography.heading, typography.primaryColor]}>
          {authContent[screen].heading}
        </Text>
        <Text style={[typography.text, typography.secondaryColor]}>
          {authContent[screen].text}
          {additionalText &&
            additionalText.slice(0, 3) + "....@" + additionalText.split("@")[1]}
        </Text>
      </View>
    );
  },
);
