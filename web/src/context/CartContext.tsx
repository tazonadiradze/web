import { createContext, ReactNode, useState } from "react";
import { cartContextType, CartItem } from "../types";

export const CartContext = createContext<cartContextType>({
  openCart: false,
  toggleCart: () => {},
  cartItem: [],
  setCartItem: () => {},
  quantity: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(0);
  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        openCart,
        toggleCart,
        cartItem,
        setCartItem,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
