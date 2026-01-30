import { typography } from "@/constants/theme";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, StyleSheet } from "react-native";

export const BackButtonLight = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Pressable style={[style.BackButtonLight]} onPress={goBack}>
      <ArrowLeft size={32} color={typography.primaryColor.color} />
    </Pressable>
  );
};

const style = StyleSheet.create({
  BackButtonLight: {
    backgroundColor: typography.secondaryColor.color,
    padding: 4,
    borderRadius: "100%",
    aspectRatio: 1,
    height: 40,
  },
});
