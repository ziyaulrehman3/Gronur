import { AuthHeading } from "@/components/Auth/AuthHeading";
import { FullButton } from "@/components/Buttons/FullButton";
import { OtpInput } from "@/components/Inputs/InputComponents";
import { router, useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { typography } from "@/constants/theme";
import {
    Keyboard,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

type credentailType = {
  name: string;
  email: string;
  number: string;
  password: string;
};

export default function Signup() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);
  const { email }: { email: string } = useLocalSearchParams();
  const [modalshow, setModalshow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [creadentail, setCreadentail] = useState<credentailType>({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const nextFun = () => {
    router.push("/(auth)/reset");
  };

  const otpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    if (index == 3) {
      Keyboard.dismiss();
    }
  };

  const handelKeyPress = (e: any, index: number) => {
    console.log(e.nativeEvent.key);
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
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
            <AuthHeading screen="verification" additionalText={email} />
            <View style={style.inputContainer}>
              <OtpInput
                otp={otp}
                otpChange={otpChange}
                inputs={inputs}
                handelKeyPress={handelKeyPress}
              />

              <Pressable>
                <Text
                  style={[
                    typography.text,
                    {
                      textAlign: "center",
                      width: "100%",
                      fontWeight: "bold",
                      color: typography.primaryColor.color,
                    },
                  ]}>
                  Resend OTP?
                </Text>
              </Pressable>
            </View>
          </View>

          <FullButton text="Comfirm" mode="dark" nextStep={nextFun} />
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
