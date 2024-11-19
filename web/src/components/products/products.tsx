import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

export default function Products() {
  const { filteredData } = useContext(ProductContext);

  return (
    <div className="bg-gray-600 p-10 min-h-screen">
      <ul className="flex flex-wrap gap-32 justify-center ">
        {filteredData.map((product) => (
          <li
            className="flex flex-col items-center justify-center bg-white p-2 rounded shadow w-[14rem] "
            key={product.id}
          >
            <img src={product.image} alt={product.title} />
            <span className="text-center text-sm font-medium">
              {product.title}
            </span>
            <span className="text-center text-sm font-medium">
              ${product.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
