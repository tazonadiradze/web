import { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";

export default function Filter() {
  const { setFilteredValue } = useContext(ProductContext);

  return (
    <div>
      <div>
        <input
          className="rounded-3xl w-96 h-10 placeholder:text-center  text-center  flex  shrink"
          type="text"
          placeholder="Search"
          onChange={(e) => setFilteredValue(e.target.value)}
        />
      </div>
    </div>
  );
}
