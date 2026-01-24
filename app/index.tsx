import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // router.replace("/onboarding");
      router.replace("/(app)/(home)/home");
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <View style={style.screenContainer}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={style.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
});
