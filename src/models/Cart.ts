type CartItems = {
  productId: number;
  quantity: number;
};

export type Cart = {
  id: number;
  userId: number;
  date: Date;
  products: CartItems[];
};
