import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

import { Product, ProductContextType } from "../types";

export const ProductContext = createContext<ProductContextType>({
  filteredData: [],
  setFilteredValue: () => {},
});

export const Provider = ({ children }: { children: ReactNode }) => {
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [filteredValue, setFilteredValue] = useState("");

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    const filtered = data.filter((product) => {
      return product.title.toLowerCase().includes(filteredValue.toLowerCase());
    });
    setFilteredData(filtered);
  }, [filteredValue, data]);

  return (
    <ProductContext.Provider value={{ filteredData, setFilteredValue }}>
      {children}
    </ProductContext.Provider>
  );
};
