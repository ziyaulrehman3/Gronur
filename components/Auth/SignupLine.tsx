import { typography } from "@/constants/theme";
import { router } from "expo-router";
import { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const SignupLine = memo(() => {
  const navigateToSignup = () => {
    router.push("/(auth)/signup");
  };
  return (
    <View style={style.container}>
      <Text style={style.firstText}>Didn't have an account?</Text>
      <Pressable onPress={navigateToSignup}>
        <Text style={style.signupText}>Sign Up.</Text>
      </Pressable>
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  signupText: {
    color: typography.primaryColor.color,
    fontWeight: "bold",
    fontSize: 16,
  },
  firstText: {
    fontSize: 16,
  },
});
