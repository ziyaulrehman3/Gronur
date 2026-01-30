import { Keyboard } from "react-native";

export const closeKeyboardOnEnter = (e: any) => {
  if (e.nativeEvent.key === "Enter") {
    Keyboard.dismiss();
  }
};
