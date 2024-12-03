import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cartItem, sum } = useContext(CartContext);

  const hanldeChange = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          {cartItem.map((each) => {
            return (
              <div
                key={each.id}
                className="flex justify-between items-center mb-3 space-x-4"
              >
                <div className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                  {each.title}
                </div>
                <div className="w-20 text-right">
                  ${(each.price * each.quantity).toFixed(2)}
                </div>
                <div className="w-10 text-center">{each.quantity}x</div>
              </div>
            );
          })}

          {cartItem.length !== 0 ? (
            <div className="flex justify-between mt-4 pt-4 border-t font-bold">
              <p>Total:</p>
              <p>${sum.toFixed(2)}</p>
            </div>
          ) : (
            <p className="flex justify-center">No items</p>
          )}
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>

          <form onSubmit={hanldeChange} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                placeholder="Enter your address"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-6">Payment Information</h2>
            <div>
              <label className="block mb-1 font-medium">Card Number</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Expiry Date</label>
                <input
                  type="month"
                  className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">CVV</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300 outline-none"
                  placeholder="123"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
