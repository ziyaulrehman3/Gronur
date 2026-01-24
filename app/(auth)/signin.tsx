import { AuthHeading } from "@/components/Auth/AuthHeading";
import { BottomLoginScreen } from "@/components/Auth/BottomLoginScreen";
import { LoginAdditionalFeature } from "@/components/Auth/LoginAdditonalFeature";
import { FullButton } from "@/components/Buttons/FullButton";
import { HeroInput } from "@/components/Inputs/InputComponents";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type creadentailType = {
  email: string;
  password: string;
  name: string;
  number: string;
};

const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passowrdExpression = /^.*[@#$].*$/;

export default function Signin() {
  const [remember, setRemember] = useState(false);
  const [creadentail, setCreadentail] = useState<creadentailType>({
    email: "",
    password: "",
    name: "",
    number: "",
  });
  const [passwordWrong, setPasswordWrong] = useState<boolean>(false);

  useEffect(() => {
    const checkCreadential = async () => {
      try {
        const email = await SecureStore.getItemAsync("email");
        const password = await SecureStore.getItemAsync("password");

        if (!email || !password) {
          throw new Error("No Creadential Found");
        }

        setCreadentail({
          email: email,
          password: password,
          name: "",
          number: "",
        });
        setRemember(true);
      } catch (err) {
        setRemember(false);
        setCreadentail({ email: "", password: "", name: "", number: "" });
      }
    };

    checkCreadential();
  }, []);

  async function rememberMe() {
    try {
      if (remember) {
        await SecureStore.setItemAsync("email", creadentail.email);
        await SecureStore.setItemAsync("password", creadentail.password);
      } else {
        await SecureStore.deleteItemAsync("email");
        await SecureStore.deleteItemAsync("password");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const signinFunction = () => {
    if (
      emailExpression.test(creadentail.email) &&
      passowrdExpression.test(creadentail.password)
    ) {
      rememberMe();
      console.log("SingFUnction CLick");
      router.replace("/(app)/home");
    } else {
      console.log("EMail or PAssowrd Wring CLick");
      setPasswordWrong(true);
      setCreadentail({
        email: "",
        password: "",
        number: "",
        name: "",
      });

      setTimeout(() => {
        setPasswordWrong(false);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      {
        <Modal visible={passwordWrong} transparent animationType="fade">
          <View style={style.wrongPasswordModalContaienr}>
            <View style={style.wrongPasswordModalView}>
              <Text style={style.wrongPasswordModalText}>
                You have entred email address or password wrong.
              </Text>
            </View>
          </View>
        </Modal>
      }
      <View style={style.loginContainer}>
        <View style={style.aboveContainer}>
          <AuthHeading screen="signin" additionalText="" />
          <View style={style.inputContainer}>
            <HeroInput
              type={"email"}
              text={"Email Address"}
              creadentail={creadentail}
              setCreadentail={setCreadentail}
            />
            <HeroInput
              type={"password"}
              text={"Password"}
              creadentail={creadentail}
              setCreadentail={setCreadentail}
            />
            <LoginAdditionalFeature
              remember={remember}
              setRemember={setRemember}
            />
          </View>
          <FullButton text="Sign in" mode="dark" nextStep={signinFunction} />
        </View>

        <BottomLoginScreen />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  inputContainer: {
    gap: 16,
  },
  aboveContainer: {
    gap: 24,
  },
  loginContainer: {
    gap: 24,
    flex: 1,
  },
  wrongPasswordModalContaienr: {
    backgroundColor: "rgba(0,0,0,0.4)", // ✅ ONLY background is transparent

    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wrongPasswordModalView: {
    height: "15%",
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  wrongPasswordModalText: {
    color: "red",
    fontSize: 18,
    width: "80%",
    textAlign: "center",
  },
});
