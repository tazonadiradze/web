import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../types";

export default function Products() {
  const { filteredData } = useContext(ProductContext);
  const { setCartItem, cartItem } = useContext(CartContext);

  const toCart = (product: Product) => {
    const existingProduct = cartItem.find((item) => item.id === product.id);

    if (existingProduct) {
      const updateQuantity = cartItem.map((each) => {
        return each.id === product.id
          ? { ...each, quantity: each.quantity + 1 }
          : each;
      });
      setCartItem(updateQuantity);
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="bg-gray-50 p-10 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Explore Our Products
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {filteredData.map((product) => (
          <li
            key={product.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div className="w-full h-64 overflow-hidden rounded-t-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 w-full flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-700 text-center">
                {product.title}
              </h2>
              <p className="text-gray-500 text-center mt-1">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => toCart(product)}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      {filteredData.length === 0 && (
        <div className="flex justify-center items-center text-2xl ">
          no product
        </div>
      )}
    </div>
  );
}
