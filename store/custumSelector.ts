import { productType } from "@/types/product";
import { createSelector } from "@reduxjs/toolkit";

const productList = (state: any) => state.products.products as productType[];

export const getItemByIdSelector = createSelector(
  [productList, (_, id) => id],
  (products, id) => products.find((item) => item.id === Number(id)),
);
