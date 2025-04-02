import React, { useEffect, useState } from "react";
import axios from "axios";
import AllProducts from "./AllProducts";

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.post("http://localhost:4002/read/product", {
        category: category === "All" ? "" : category,
      });
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Filter the Product
      </h1>

      <form 
        className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-wrap justify-center gap-6 mb-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="All"
            checked={category === "All"}
            onChange={handleCategoryChange}
            type="radio"
            name="category"
            className="mr-2"
          />
          All Products
        </label>
        
        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="SmartPhone"
            checked={category === "SmartPhone"}
            onChange={handleCategoryChange}
            type="radio"
            name="category"
            className="mr-2"
          />
          SmartPhone
        </label>

        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="TV"
            checked={category === "TV"}
            onChange={handleCategoryChange}
            type="radio"
            name="category"
            className="mr-2"
          />
          TV
        </label>

        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="smartwatch"
            checked={category === "smartwatch"}
            onChange={handleCategoryChange}
            type="radio"
            name="category"
            className="mr-2"
          />
          SmartWatch
        </label>

        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="Laptops"
            checked={category === "Laptops"}
            onChange={handleCategoryChange}
            type="radio"
            name="category"
            className="mr-2"
          />
          Laptops
        </label>
      </form>

      {isLoading && (
        <p className="text-center text-lg text-gray-500 my-8">Loading products...</p>
      )}

      {error && (
        <p className="text-center text-lg text-red-500 my-8">{error}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!isLoading && products.length === 0 ? (
          <p className="text-gray-500 text-lg col-span-3 text-center">
            No products found in this category.
          </p>
        ) : (
          products.map((data) => (
            <AllProducts
              key={data._id}
              image={data.image}
              title={data.prName}
              price={data.price}
              description={data.description}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductDisplay;