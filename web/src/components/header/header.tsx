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

      <div className="hidden sm:block">
        <Filter />
      </div>
      <div className="hidden sm:block">
        <Cart />
      </div>

      <div className="block sm:hidden ">
        <button
          className="text-white hover:text-gray-900 transition duration-300"
          onClick={() => alert("Menu options can be added here!")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
