import React, { createContext } from "react";
import { Product } from "../../models/Product";

type ProductContextProps = {
  userProducts: Product[];
  setUserProducts: (product: Product) => void;
};

export const ProductContext = createContext<ProductContextProps>({
  userProducts: [],
  setUserProducts: () => {},
});
