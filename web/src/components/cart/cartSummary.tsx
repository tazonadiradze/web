import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartSummary() {
  const { sum, cartItem, toggleCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/checkout");
    toggleCart();
  };

  return (
    <div>
      {cartItem.length > 0 ? (
        <div className="pt-6  border-gray-200">
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total:</span>
            <span className="text-blue-600">${sum}</span>
          </div>

          <div className="mt-6">
            <button
              onClick={handleNavigate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md shadow-lg font-medium transition duration-300 transform hover:scale-105"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className=" pt-6  border-gray-200 mt-6 text-center text-gray-500">
          Cart is empty
        </div>
      )}
    </div>
  );
}
