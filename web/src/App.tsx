import Header from "./components/header/header";
import Home from "./components/home/home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/checkout";
const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
