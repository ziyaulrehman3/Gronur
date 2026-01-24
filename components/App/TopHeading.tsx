import { appScreenTopHeading } from "@/constants/appScreenTopHeading";
import { typography } from "@/constants/theme";
import { Search } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

type TopHeadingKeys = keyof typeof appScreenTopHeading;

export const TopHeading = ({ screen }: { screen: TopHeadingKeys }) => {
  return (
    <View style={style.container}>
      <Text style={style.mainText}>{appScreenTopHeading[screen].title}</Text>
      <View style={style.searchContainer}>
        <Search color={typography.primaryColor.color} size={36} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  mainText: {
    fontSize: 36,
    fontWeight: "bold",
    width: "80%",
    color: typography.primaryColor.color,
  },
  searchContainer: {
    width: "20%",
    borderWidth: 2,
    borderColor: typography.secondaryColor.color,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
