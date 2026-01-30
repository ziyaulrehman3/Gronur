import { productType } from "@/types/product";

export const products: productType[] = [
  {
    id: 1,
    category: "vegitable",
    name: "Pineapple",
    price: 80,
    image: require("@/assets/images/fruit-round.png"),
    unit: "kg",
    cal: 24,
  },
  {
    id: 2,
    category: "fresh-fruits",
    name: "Apple",
    price: 100,
    image: require("@/assets/images/fruit-round.png"),
    unit: "kg",
    cal: 24,
  },
  {
    id: 3,
    category: "fresh-fruits",
    name: "Orange",
    price: 120,
    image: require("@/assets/images/fruit-round.png"),
    unit: "kg",
    cal: 24,
  },
  {
    id: 4,
    category: "vegitable",
    name: "Banana",
    price: 60,
    image: require("@/assets/images/fruit-round.png"),
    unit: "kg",
    cal: 24,
  },
  {
    id: 5,
    category: "chinees",
    name: "Banana",
    price: 60,
    image: require("@/assets/images/fruit-round.png"),
    unit: "kg",
    cal: 24,
  },
  {
    id: 6,
    category: "fast-food",
    name: "Banana",
    price: 60,
    image: require("@/assets/images/fruit-round.png"),
    unit: "kg",
    cal: 24,
  },
];

export const productCategory: string[] = [
  "Vegitable",
  "Fresh Fruits",
  "Chinees",
  "South Indian",
  "Fast Food",
];

export const orderStatus: string[] = [
  "All Order",
  "Pending",
  "Processing",
  "Delivered",
];
