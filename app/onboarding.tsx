import { FullButton } from "@/components/Buttons/FullButton";
import { onboardingList } from "@/constants/onboardingList";
import { useRouter } from "expo-router";
import { Dot, Minus } from "lucide-react-native";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Splash() {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    if (step < onboardingList.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      router.replace("/(auth)/signin");
    }
  };
  return (
    <View style={style.screenContainer}>
      <View style={style.imageContainer}>
        <Image
          source={onboardingList[step]?.image}
          resizeMode="contain"
          style={style.image}
        />
      </View>
      <View style={style.bottomContainer}>
        <View>
          <View style={style.stepBar}>
            {Array.from({ length: 3 }).map((_, index) => {
              return index == step ? (
                <Minus size={48} strokeWidth={4} color="white" key={index} />
              ) : (
                <Dot size={24} strokeWidth={8} color="white" key={index} />
              );
            })}
          </View>

          <View style={style.textContainer}>
            <Text style={style.textHeading}>
              {onboardingList[step]?.heading}
            </Text>
            <Text style={style.textNormal}>{onboardingList[step]?.text}</Text>
          </View>
        </View>

        {step == onboardingList.length - 1 ? (
          <FullButton mode="light" text="Get Started" nextStep={nextStep} />
        ) : (
          <FullButton mode="light" text="Continue" nextStep={nextStep} />
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#344d7f",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  stepBar: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    width: "100%",
    height: "40%",
    padding: 30,
    paddingBottom: 70,
    backgroundColor: "",
    display: "flex",
    justifyContent: "space-between",
  },
  textHeading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  textNormal: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  textContainer: {
    display: "flex",
    gap: 8,
  },
});
