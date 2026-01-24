import { typography } from "@/constants/theme";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const LoginAdditionalFeature = memo(
  ({
    remember,
    setRemember,
  }: {
    remember: boolean;
    setRemember: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const navigateToForgot = () => {
      router.navigate("/(auth)/forgot");
    };

    const setRememberMe = () => {
      setRemember((prev) => !prev);
    };

    return (
      <View style={style.mainContainer}>
        <View style={style.rememberContainer}>
          <Checkbox
            value={remember}
            onValueChange={setRememberMe}
            style={style.checkbox}
          />
          <Text style={style.rememberText}>Remember me</Text>
        </View>

        <Pressable onPress={navigateToForgot}>
          <Text style={style.forgetColor}>Forgot Password?</Text>
        </Pressable>
      </View>
    );
  },
);

const style = StyleSheet.create({
  forgetColor: {
    color: "#fb542b",
    fontSize: 16,
  },
  rememberContainer: {
    display: "flex",
    gap: 4,
    flexDirection: "row",
  },
  rememberText: {
    fontSize: 16,
    color: typography.secondaryColor.color,
  },
  checkbox: {
    borderColor: typography.secondaryColor.color,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
