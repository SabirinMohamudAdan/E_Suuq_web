import React from "react";
import Header from "../../components/website/Header";
import ProductDisplay from "../../components/website/productDisplay";
import SideNav from "./SideNav";

function Product() {
  return (
    <div className="">
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <form action="" className="mb-6">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>
      <ProductDisplay />
    </div>
  );
}

export default Product;
