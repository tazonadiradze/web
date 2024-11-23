import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import App from "./App.tsx";
import { Provider } from "./context/productContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Provider>
        <App />
      </Provider>
    </CartProvider>
  </StrictMode>
);
