import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const { openCart, toggleCart, cartItem } = useContext(CartContext);

  const sum = cartItem.reduce(
    (accumulator, currentValue) =>
      accumulator + Math.round(currentValue.price) * currentValue.quantity,
    0
  );

  return (
    <>
      <div
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-white hover:bg-blue-700 text-black px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out cursor-pointer z-50"
      >
        Cart
      </div>

      {openCart && (
        <div className="fixed top-0 right-0 w-80 bg-white shadow-2xl z-50">
          <div
            className="p-6"
            style={{
              maxHeight: "50vh",
              overflowY: "auto",
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

            <div className="mt-6 space-y-6">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 border-b pb-4"
                >
                  <div className="w-16 h-16">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md shadow-sm"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-medium text-gray-800">
                      {item.title}
                    </div>
                    <div className="text-gray-500 text-sm">
                      ${Math.round(item.price)} x {item.quantity}
                    </div>
                  </div>
                </div>
              ))}

              {sum > 0 && (
                <div className="pt-6 border-t">
                  <div className="flex justify-between text-lg font-semibold text-gray-800">
                    <span>Total:</span>
                    <span className="text-blue-600">${sum}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md shadow-lg font-medium transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
