import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Tailwind or custom styles
import { CartProvider } from "./context/CartContext";
import App from "./App.tsx";
import { Provider } from "./context/productContext"; // Make sure this is correct
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Provider>
          <App />
        </Provider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
