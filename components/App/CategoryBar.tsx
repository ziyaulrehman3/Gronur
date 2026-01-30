import { orderStatus, productCategory } from "@/constants/products";
import { typography } from "@/constants/theme";
import React, { memo, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export const CategortBar = memo(
  ({
    category,
    setCategory,
    type,
  }: {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    type: string;
  }) => {
    const [list, setList] = useState<string[]>([]);
    useEffect(() => {
      if (type == "orders") {
        setList(orderStatus);
        return;
      } else {
        setList(productCategory);
      }
    }, [category]);
    return (
      <View style={style.mainContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((text, index) => (
            <Pressable
              key={index}
              style={{
                ...style.itemContainer,
                backgroundColor:
                  category === text.toLowerCase().split(" ").join("-")
                    ? typography.primaryColor.color
                    : typography.backgroundColor.color,
              }}
              onPress={() =>
                setCategory(text.toLowerCase().split(" ").join("-"))
              }>
              <Text
                key={index}
                style={{
                  ...style.itemText,
                  color:
                    category === text.toLowerCase().split(" ").join("-")
                      ? "white"
                      : typography.primaryColor.color,
                }}>
                {text}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  },
);

const style = StyleSheet.create({
  mainContainer: {
    width: "100%",
    gap: 6,
  },
  itemContainer: {
    borderRadius: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "semibold",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});
