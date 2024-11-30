import { createContext, ReactNode, useState } from "react";
import { cartContextType, CartItem } from "../types";

export const CartContext = createContext<cartContextType>({
  openCart: false,
  toggleCart: () => {},
  cartItem: [],
  setCartItem: () => {},
  quantity: 1,
  removeFromtheCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  const removeFromtheCart = (id: number) => {
    const filtered = cartItem
      .map((each) => {
        if (each.id === id) {
          if (each.quantity > 1) {
            return { ...each, quantity: each.quantity - 1 };
          }
          return null;
        }
        return each;
      })
      .filter((each) => each !== null);

    setCartItem(filtered);
  };

  return (
    <CartContext.Provider
      value={{
        openCart,
        toggleCart,
        cartItem,
        setCartItem,
        quantity,
        removeFromtheCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
