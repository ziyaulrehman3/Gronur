import { typography } from "@/constants/theme";
import { addToCart } from "@/store/cartSlice";
import { productType } from "@/types/product";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

type ItemPropsType = {
  item: productType;
};

export const ItemScreen = ({
  screen,
  category,
}: {
  screen: string;
  category: string;
}) => {
  const productsList = useSelector((state: any) => {
    const list = state.products.products;

    return state.products.products;
  }) as productType[];

  const [products, setProducts] = useState<productType[]>([]);

  useEffect(() => {
    if (category == "all") {
      setProducts(productsList);
    } else {
      const newList = productsList.filter((item) => item.category == category);

      setProducts(newList);
    }
  }, [category]);

  console.log("Products", products);

  return (
    <View style={style.listContainer}>
      <FlatList
        data={products}
        numColumns={2}
        style={{ flex: 1 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}></FlatList>
    </View>
  );
};
export const Item = ({ item }: { item: productType }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart.item);

  const addCart = () => {
    dispatch(addToCart({ id: item.id, qty: 1 }));
  };

  const handelItemPress = () => {
    router.push({
      pathname: "/(stack)/productDetails",
      params: {
        id: item.id,
      },
    });
  };
  console.log(item);

  return (
    <Pressable style={style.itemContainer} onPress={handelItemPress}>
      <View style={style.imageBox}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={style.itemImage}
        />
      </View>
      <ItemTextComponent name={item.name} cal={item.cal} />
      <ItemPriceComponent
        addCart={addCart}
        price={item.price}
        unit={item.unit}
      />
    </Pressable>
  );
};

const ItemTextComponent = ({ name, cal }: { name: string; cal: number }) => {
  return (
    <View>
      <Text style={style.textName}>{name}</Text>
      <Text style={style.textCal}>{cal} Cal</Text>
    </View>
  );
};

const ItemPriceComponent = ({
  price,
  unit,
  addCart,
}: {
  price: number;
  unit: string;
  addCart: () => void;
}) => {
  return (
    <View style={style.priceContainer}>
      <View style={style.miniPriceContainer}>
        <Text style={style.priceText}>₹{price}</Text>
        <Text style={style.unitText}>/{unit}</Text>
      </View>

      <Pressable style={style.addtoCartButton} onPress={addCart}>
        <Text style={style.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  listContainer: {
    flex: 1,
    zIndex: 1,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: typography.backgroundColor.color,
    padding: 12,
    margin: 6,
  },
  imageBox: {
    width: "100%",
    aspectRatio: 1,
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
  textContaienr: {
    gap: 4,
  },
  textName: {
    color: typography.primaryColor.color,
    fontSize: 22,
    fontWeight: "bold",
  },
  textCal: {
    color: typography.secondaryColor.color,
    fontSize: 14,
    fontWeight: "semibold",
  },
  addtoCartButton: {
    backgroundColor: typography.miniColor.color,
    color: "white",
    width: 32,
    aspectRatio: 1,
    borderRadius: 6,
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: typography.miniColor.color,
  },
  miniPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  unitText: {
    color: typography.secondaryColor.color,
    fontSize: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 28,
    top: -2,
  },
});
