import Cart from "../cart/cart";
import Filter from "../filter/filter";

const Header = () => {
  return (
    <div className="bg-yellow-500 flex flex-row justify-around h-10 items-center">
      <div>Logo</div>
      <div>
        <Filter />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
