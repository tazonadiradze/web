import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartSummary from "./cartSummary";
import CartItems from "./cartItems";

export default function Cart() {
  const { openCart, toggleCart, totalQuantity } = useContext(CartContext);

  return (
    <>
      <div
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-white hover:bg-blue-700 text-black px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out cursor-pointer z-50"
      >
        Cart
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md">
          {totalQuantity}
        </span>
      </div>

      {openCart && (
        <div className="fixed top-0 right-0 w-80 bg-white shadow-2xl z-50 border-l border-gray-200 overflow-x-hidden">
          <div
            className="p-6"
            style={{
              maxHeight: "30vh", // Set the max-height to 30% of the viewport height
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
              <button
                onClick={toggleCart}
                className="text-gray-400 hover:text-gray-600 transition duration-300"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Cart Items and Summary with proper spacing and overflow handling */}
          <div className="overflow-y-auto max-h-[30vh] space-y-4 px-4 py-2">
            <CartItems />
            <CartSummary />
          </div>
        </div>
      )}
    </>
  );
}
