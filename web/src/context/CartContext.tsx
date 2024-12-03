import { createContext, ReactNode, useState } from "react";
import { cartContextType, CartItem } from "../types";
import { useMemo } from "react";
export const CartContext = createContext<cartContextType>({
  openCart: false,
  toggleCart: () => {},
  cartItem: [],
  setCartItem: () => {},
  quantity: 1,
  removeFromtheCart: () => {},
  sum: 0,
  totalQuantity: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  const sum = cartItem.reduce(
    (accumulator, currentValue) =>
      accumulator + Math.round(currentValue.price) * currentValue.quantity,
    0
  );

  const totalQuantity = useMemo(() => {
    return cartItem.reduce(
      (accumulator, item) => accumulator + item.quantity,

      0
    );
  }, [cartItem]);

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
        sum,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
