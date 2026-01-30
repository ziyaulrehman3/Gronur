import { typography } from "@/constants/theme";
import { WebView } from "react-native-webview";

export default function Map() {
  return (
    <WebView
      source={{ uri: "https://www.google.com/maps?q=28.6139,77.2090&z=15" }}
      style={typography.mainScreen}></WebView>
  );
}
