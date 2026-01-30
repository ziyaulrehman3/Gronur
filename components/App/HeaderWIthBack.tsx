import { StyleSheet, Text, View } from "react-native";
import { BackButtonLight } from "../Buttons/BackButtonLight";

export const HeaderWithBorder = ({ screen }: { screen: string }) => {
  return (
    <View style={style.container}>
      <View style={style.backButtonWraper}>
        <BackButtonLight />
      </View>
      <Text style={style.heading}>{screen}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    paddingBottom: 30,
    paddingVertical: 10,
  },
  backButtonWraper: {
    position: "absolute",
    top: 1,
    left: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
