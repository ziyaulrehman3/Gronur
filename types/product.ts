import { ImageSourcePropType } from "react-native";

type unitType = "kg" | "pcs" | "pair" | "set";
type categoryType =
  | "vegitable"
  | "fresh-fruits"
  | "fast-food"
  | "chinees"
  | "south-indian";

export type productType = {
  id: number;
  category: categoryType;
  name: string;
  price: number;
  image: ImageSourcePropType;
  unit: unitType;
  cal: number;
};

export type cartItemType = {
  id: number;
  qty: number;
};
