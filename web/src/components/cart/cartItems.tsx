import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItems() {
  const { cartItem, removeFromtheCart } = useContext(CartContext);

  return (
    <div className="mt-6 space-y-6">
      {cartItem.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 border-b pb-4 hover:bg-gray-50 transition duration-200"
        >
          {/* Item Image */}
          <div className="w-16 h-16">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>

          {/* Item Details */}
          <div className="flex-1">
            <div className="font-medium text-gray-800">{item.title}</div>
            <div className="text-gray-500 text-sm">
              ${Math.round(item.price)} x {item.quantity}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromtheCart(item.id)}
              className="mt-2 text-red-500 hover:text-red-700 text-sm underline transition duration-200"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
