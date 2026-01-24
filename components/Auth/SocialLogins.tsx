import * as AppleAuth from "expo-apple-authentication";
import { router } from "expo-router";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { IconFullButton } from "../Buttons/FullButton";

export const SocialLogins = memo(() => {
  const appleAuth = async () => {
    try {
      await AppleAuth.signInAsync({
        requestedScopes: [
          AppleAuth.AppleAuthenticationScope.FULL_NAME,
          AppleAuth.AppleAuthenticationScope.EMAIL,
        ],
      });

      router.replace("/(app)/(home)/home");
    } catch (err) {
      console.log("Apple Login Faild", err);
    }
  };

  return (
    <View style={style.container}>
      <IconFullButton type="google" nextStep={appleAuth} />
      <IconFullButton type="apple" nextStep={appleAuth} />
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});
