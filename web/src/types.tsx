export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductContextType {
  filteredData: Product[];
  setFilteredValue: (value: string) => void;
}
