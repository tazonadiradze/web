import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="bg-gray-600 p-10 min-h-screen ">
      <ul className="flex flex-wrap gap-32">
        {data.map(({ title, id, image }) => (
          <li
            className="flex flex-col items-center bg-white p-4 rounded shadow w-40"
            key={id}
          >
            <img src={image} alt={title} className="w-full h-auto mb-2" />
            <span className="text-center text-sm font-medium">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
s;
