import { inputContent } from "@/constants/inputContent";
import { typography } from "@/constants/theme";
import { Eye, EyeOff } from "lucide-react-native";
import React, { memo, SetStateAction, useEffect, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type InputContentType = keyof typeof inputContent;

type creadentailType = {
  email: string;
  password: string;
  number: string;
  name: string;
};

type otpType = {
  otp: number;
};

type CredentialKey = keyof creadentailType;

const credentialKeyMap: Record<InputContentType, CredentialKey | null> = {
  email: "email",
  password: "password",
  number: "number",
  name: "name",
};

export const HeroInput = memo(
  ({
    type = "email",
    text = "text",
    setCreadentail,
    creadentail,
  }: {
    type: InputContentType;
    text: string;
    setCreadentail: React.Dispatch<SetStateAction<creadentailType>>;
    creadentail: {
      email: string;
      password: string;
      name: string;
      number: string;
    };
  }) => {
    const credentialKey = credentialKeyMap[type];

    const ICON = inputContent[type].icon;

    const [hideInput, setHideInput] = useState(false);

    useEffect(() => {
      if (type == "password") {
        setHideInput(true);
      }
    }, []);

    const seePassword = () => {
      setHideInput(false);

      const timeout = setTimeout(() => {
        setHideInput(true);
      }, 500);

      return () => clearTimeout(timeout);
    };
    return (
      <View style={style.HeroInputContainer}>
        <TextInput
          placeholder={text}
          secureTextEntry={hideInput}
          placeholderTextColor={typography.secondaryColor.color}
          value={credentialKey ? creadentail[credentialKey] : ""}
          onChangeText={(text) =>
            setCreadentail((prev) => ({ ...prev, [type]: text }))
          }
          style={style.HeroInput}
        />

        <ICON
          color={typography.secondaryColor.color}
          style={style.HeroInputIcon}
        />

        {type == "password" &&
          (hideInput ? (
            <Pressable onPress={seePassword} style={style.HeroInputEye}>
              <EyeOff color={typography.secondaryColor.color} />
            </Pressable>
          ) : (
            <Pressable onPress={seePassword} style={style.HeroInputEye}>
              <Eye color={typography.secondaryColor.color} />
            </Pressable>
          ))}
      </View>
    );
  },
);

export const OtpInput = memo(
  ({
    otp,
    otpChange,
    inputs,
    handelKeyPress,
  }: {
    otp: string[];
    otpChange: (text: string, index: number) => void;
    inputs: React.RefObject<Array<TextInput | null>>;
    handelKeyPress: (e: any, index: number) => void;
  }) => {
    return (
      <View style={style.otpContainer}>
        {Array.from({ length: 4 }).map((item, index) => (
          <TextInput
            keyboardType="number-pad"
            ref={(ref) => {
              if (inputs.current) {
                inputs.current[index] = ref;
              }
            }}
            maxLength={1}
            value={otp[index]}
            key={index}
            style={style.otpBox}
            onChangeText={(text) => otpChange(text, index)}
            onKeyPress={(e) => handelKeyPress(e, index)}
          />
        ))}
      </View>
    );
  },
);

const style = StyleSheet.create({
  HeroInputContainer: {},
  HeroInputIcon: {
    position: "absolute",
    top: "30%",
    left: 16,
  },
  HeroInput: {
    borderRadius: 100,
    paddingVertical: 20,
    paddingHorizontal: 48,
    fontSize: 20,
    backgroundColor: typography.backgroundColor.color,
  },
  HeroInputEye: {
    position: "absolute",
    right: 16,
    top: "30%",
  },
  otpBox: {
    borderColor: typography.secondaryColor.color,
    borderWidth: 2,
    width: 60,
    height: 60,
    borderRadius: "100%",
    padding: 8,
    fontSize: 36,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-around",
  },
});
