import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import AllProducts from "./AllProducts";
import Skeleton from "./Skeleton"; // Changed to default import

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { value: "All", label: "All Products" },
    { value: "SmartPhone", label: "SmartPhone" },
    { value: "TV", label: "TV" },
    { value: "SmartWatch", label: "SmartWatch" }, // Consistent casing
    { value: "Laptops", label: "Laptops" }
  ];

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.post("http://localhost:4002/read/product", {
        category: category === "All" ? "" : category,
        search: searchQuery
      });
      setProducts(res.data || []); // Ensure array even if undefined
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.response?.data?.message || "Failed to fetch products. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [category, searchQuery]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [fetchProducts]); // Added dependency

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product => 
    product?.prName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product?.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* ... (rest of your JSX remains the same) ... */}
      
      {/* Updated Products Grid with null checks */}
      {!isLoading && filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          {/* No products found UI */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((data) => (
            <AllProducts
              key={data?._id || Math.random()} // Fallback for missing id
              id={data?._id}
              image={data?.image}
              title={data?.prName}
              price={data?.price}
              description={data?.description}
              rating={data?.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductDisplay;