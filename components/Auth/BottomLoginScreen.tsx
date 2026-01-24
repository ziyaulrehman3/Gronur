import { typography } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";
import { SignupLine } from "./SignupLine";
import { SocialLogins } from "./SocialLogins";

export const BottomLoginScreen = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.secondMainContainer}>
        <View style={style.continueContaienr}>
          <View style={style.line} />
          <Text style={style.continueText}>Or continue with</Text>
          <View style={style.line} />
        </View>
        <SocialLogins />
      </View>

      <SignupLine />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
  continueContaienr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  continueText: {
    fontSize: 16,
    color: typography.primaryColor.color,
    fontWeight: "bold",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: typography.secondaryColor.color,
  },
  secondMainContainer: {
    gap: 24,
  },
});
