import { useNavigate } from "react-router-dom";
import Cart from "../cart/cart";
import Filter from "../filter/filter";
const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };
  return (
    <header className="bg-blue-900 flex flex-row justify-between items-center px-8 h-16 shadow-md">
      <div
        onClick={handleNavigateToHome}
        className="text-2xl font-bold text-white hover:text-gray-900 transition duration-300 cursor-pointer"
      >
        Logo
      </div>

      <div>
        <Filter />
      </div>

      <div>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
