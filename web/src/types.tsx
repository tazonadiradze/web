export interface Product {
  quantity: number;
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductContextType {
  filteredData: Product[];
  setFilteredValue: (value: string) => void;
}

export interface cartContextType {
  cartItem: CartItem[];
  openCart: boolean;
  quantity: number;
  toggleCart: () => void;
  sum:number
  totalQuantity:number
  setCartItem: React.Dispatch<React.SetStateAction<CartItem[]>>;
  removeFromtheCart: (id: number) => void;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
