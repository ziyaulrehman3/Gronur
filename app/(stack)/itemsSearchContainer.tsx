import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Swipeable } from "react-native-gesture-handler";

/* ------------------ TYPES ------------------ */

type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

/* ------------------ DUMMY DATA ------------------ */

const DUMMY_CART: CartItemType[] = [
  {
    id: 1,
    name: "Apple",
    price: 120,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    id: 2,
    name: "Banana",
    price: 60,
    quantity: 4,
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e43e",
  },
  {
    id: 3,
    name: "Milk",
    price: 55,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 4,
    name: "Bread",
    price: 40,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
  },
];

/* ------------------ MAIN SCREEN ------------------ */

export default function CartTestScreen() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(DUMMY_CART);

  /* Delete Item */
  const handleDelete = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* Total Price */
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  /* Render Each Item */
  const renderItem = ({ item }: { item: CartItemType }) => (
    <CartItem item={item} onDelete={handleDelete} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      {/* Total Section */}
      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>₹ {total}</Text>
      </View>
    </View>
  );
}

/* ------------------ CART ITEM ------------------ */

const CartItem = ({
  item,
  onDelete,
}: {
  item: CartItemType;
  onDelete: (id: number) => void;
}) => {
  /* Right Swipe Button */
  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => onDelete(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.price}>
            ₹{item.price} x {item.quantity}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

/* ------------------ STYLES ------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    elevation: 2,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },

  deleteBtn: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    marginVertical: 6,
    borderRadius: 12,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },

  totalBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    elevation: 3,
  },

  totalText: {
    fontSize: 18,
    fontWeight: "600",
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
