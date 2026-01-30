import * as Notifications from "expo-notifications";
import { Pressable, Text, View } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function More() {
  const handelNotificationPress = async () => {};
  return (
    <View>
      <Pressable onPress={handelNotificationPress}>
        <Text>Puch Notification</Text>
      </Pressable>
    </View>
  );
}
