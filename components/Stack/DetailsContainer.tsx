import { typography } from "@/constants/theme";
import { addToCart } from "@/store/cartSlice";
import { productType } from "@/types/product";
import { memo } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { FullButton } from "../Buttons/FullButton";

export const DetailsRoundContainer = memo(
  ({
    item,
    qty,
    setQty,
  }: {
    item: productType;
    qty: number;
    setQty: React.Dispatch<React.SetStateAction<number>>;
  }) => {
    return (
      <ScrollView style={style.mainContainer}>
        <Details item={item} qty={qty} setQty={setQty} />
        <Discription />
        <Comment />
      </ScrollView>
    );
  },
);

const Details = memo(
  ({
    item,
    qty,
    setQty,
  }: {
    item: productType;
    qty: number;
    setQty: React.Dispatch<React.SetStateAction<number>>;
  }) => {
    const incressQty = () => {
      setQty((prev) => prev + 1);
    };

    const decressQty = () => {
      setQty((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        return prev;
      });
    };

    return (
      <View style={style.upperContainer}>
        <View>
          <Text style={typography.headingLG}>{item.name}</Text>
          <Text style={typography.textSM}>Available in Stock</Text>
        </View>
        <View style={style.quantityContainer}>
          <Pressable style={style.pressableButton} onPress={decressQty}>
            <Text style={style.pressableText}>-</Text>
          </Pressable>
          <Text style={typography.textSM}>
            {qty} {item.unit}
          </Text>
          <Pressable style={style.pressableButton} onPress={incressQty}>
            <Text style={style.pressableText}>+</Text>
          </Pressable>
        </View>
      </View>
    );
  },
);

const Discription = memo(() => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={typography.headingMD}>Product Description</Text>
      <Text style={typography.textSM}>
        Fresh and high-quality food item, carefully selected for great taste and
        nutrition. Hygienically packed to maintain freshness and ideal for daily
        cooking and healthy meals.
      </Text>
    </View>
  );
});

const Comment = memo(() => {
  return (
    <View style={style.commentMainContainer}>
      <Text style={typography.headingMD}>Product Reviews</Text>
      <View>
        <View style={style.upperContainer}>
          <View style={style.subContainer}>
            <Image
              source={require("@/assets/images/human-avtar.jpg")}
              resizeMode="contain"
              style={style.avtarImage}
            />
            <View style={style.nameContainer}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Ziya Chox
              </Text>
              <Text>⭐⭐⭐⭐⭐</Text>
            </View>
          </View>
          <View>
            <Text style={[typography.textSM, { fontSize: 14 }]}>
              26 January,2026
            </Text>
          </View>
        </View>
        <View>
          <Text style={typography.textSM}>
            The taste was not as expected, but the service was good.
          </Text>
        </View>
      </View>
    </View>
  );
});

export const AddToCart = memo(
  ({
    id,
    qty,
    price,
    unit,
  }: {
    id: number;
    qty: number;
    price: number;
    unit: string;
  }) => {
    const dispatch = useDispatch();

    const addCart = () => {
      dispatch(addToCart({ id, qty }));
    };

    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Text style={[typography.headingMD, { color: "white" }]}>
          ₹{price}/ {qty}
          {unit}
        </Text>
        <FullButton text="Add to cart" nextStep={addCart} mode="light" />
      </View>
    );
  },
);

const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  avtarImage: {
    width: 60,
    height: 60,
    borderRadius: "100%",
  },
  subContainer: {
    flexDirection: "row",
    gap: 12,
  },
  nameContainer: {
    justifyContent: "center",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  commentMainContainer: {
    gap: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  pressableButton: {
    backgroundColor: typography.miniColor.color,
    borderRadius: "100%",
    aspectRatio: 1,
    width: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  pressableText: {
    fontSize: 32,
    color: "white",
    top: -2,
  },
});
