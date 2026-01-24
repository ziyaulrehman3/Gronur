import { AuthHeading } from "@/components/Auth/AuthHeading";
import { FullButton } from "@/components/Buttons/FullButton";
import { HeroInput } from "@/components/Inputs/InputComponents";
import { expressions } from "@/constants/regularExpression";
import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Modal, StyleSheet, Text, View } from "react-native";

type credentailType = {
  name: string;
  email: string;
  number: string;
  password: string;
};

export default function Signup() {
  const [modalshow, setModalshow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [creadentail, setCreadentail] = useState<credentailType>({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const signupFunction = async () => {
    try {
      if (
        !(
          creadentail.name.match(expressions.name) &&
          creadentail.email.match(expressions.email) &&
          creadentail.number.match(expressions.number) &&
          creadentail.password.match(expressions.password)
        )
      ) {
        throw new Error("Details are not valid!");
      }

      setMessage("Sign Up Succesfully, please Login");
      setTimeout(() => {
        router.back();
      }, 1500);
    } catch (err) {
      setMessage("Please fill all fields correct.");

      console.log("Error in Signup", err);
    }

    setModalshow(true);

    setTimeout(() => {
      setModalshow(false);
    }, 1000);
  };
  return (
    <View style={style.mainContainer}>
      {
        <Modal visible={modalshow} transparent animationType="fade">
          <View style={style.wrongPasswordModalContaienr}>
            <View style={style.wrongPasswordModalView}>
              <Text style={style.wrongPasswordModalText}>{message}</Text>
            </View>
          </View>
        </Modal>
      }
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.loginContainer}>
          <View style={style.aboveContainer}>
            <AuthHeading screen="signup" />
            <View style={style.inputContainer}>
              <HeroInput
                type={"name"}
                text={"Enter Your Full Name"}
                creadentail={creadentail}
                setCreadentail={setCreadentail}
              />
              <HeroInput
                type={"email"}
                text={"Enter Your Email Address"}
                creadentail={creadentail}
                setCreadentail={setCreadentail}
              />
              <HeroInput
                type={"number"}
                text={"Enter Your Phone Number"}
                creadentail={creadentail}
                setCreadentail={setCreadentail}
              />
              <HeroInput
                type={"password"}
                text={"Password"}
                creadentail={creadentail}
                setCreadentail={setCreadentail}
              />
            </View>
          </View>

          <FullButton text="Sign Up" mode="dark" nextStep={signupFunction} />
        </View>
      </SafeAreaView>
    </View>
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
    justifyContent: "space-between",
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
