import { memo } from "react";
import { Text, View } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
export const SwapItem = memo(() => {
  return (
    <ReanimatedSwipeable
      renderRightActions={() => (
        <View>
          <Text>Delete</Text>
        </View>
      )}>
      <View>
        <Text>Main Container</Text>
      </View>
    </ReanimatedSwipeable>
  );
});
