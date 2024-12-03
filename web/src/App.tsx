import Header from "./components/header/header";
import Home from "./components/home/home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/checkout";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              fontSize: "16px",
            },
            success: {
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              style: {
                background: "red",
                color: "white",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default App;
