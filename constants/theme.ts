/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const typography = {
  heading: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    width: "90%",
  },
  primaryColor: {
    color: "#344d7f",
  },
  secondaryColor: {
    color: "#C1C7D0",
  },
  miniColor: {
    color: "#ff7034",
  },
  backgroundColor: {
    color: "#EEEEEE",
  },
  mainScreen: {
    flex: 1,
  },
  mainScreenBg: {
    backgroundColor: "#344d7f",
  },
  mainScreenSafeView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  mainScreenBannerStyle: {
    flex: 1,
    backgroundColor: "white",
    // paddingBottom: 16,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  upperRoundSafeView: {
    flex: 1,
  },
  upperRoundScreen: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    overflow: "hidden",
  },
  backButtonWraper: {
    position: "absolute",
    top: 1,
    left: 10,
  },
  headingMD: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#344d7f",
  },
  headingLG: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#344d7f",
  },
  textSM: {
    fontSize: 18,
    color: "#C1C7D0",
  },
} as const;
